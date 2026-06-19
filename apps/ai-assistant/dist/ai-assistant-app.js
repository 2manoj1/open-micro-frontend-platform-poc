var Nm = Object.create, Qn = Object.defineProperty, qm = Object.getOwnPropertyDescriptor, Rm = Object.getOwnPropertyNames, jm = Object.getPrototypeOf, Bm = Object.prototype.hasOwnProperty, Ht = (f, r) => () => (r || (f((r = { exports: {} }).exports, r), f = null), r.exports), my = (f, r) => {
  let M = {};
  for (var U in f)
    Qn(M, U, {
      get: f[U],
      enumerable: !0
    });
  return r || Qn(M, Symbol.toStringTag, { value: "Module" }), M;
}, Ym = (f, r, M, U) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (var y = Rm(r), V = 0, Z = y.length, B; V < Z; V++)
      B = y[V], !Bm.call(f, B) && B !== M && Qn(f, B, {
        get: ((Y) => r[Y]).bind(null, B),
        enumerable: !(U = qm(r, B)) || U.enumerable
      });
  return f;
}, od = (f, r, M) => (M = f != null ? Nm(jm(f)) : {}, Ym(r || !f || !f.__esModule ? Qn(M, "default", {
  value: f,
  enumerable: !0
}) : M, f)), yy = /* @__PURE__ */ ((f) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(f, { get: (r, M) => (typeof require < "u" ? require : r)[M] }) : f)(function(f) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Calling `require` for "' + f + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), Gm = /* @__PURE__ */ Ht(((f) => {
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), M = /* @__PURE__ */ Symbol.for("react.portal"), U = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), V = /* @__PURE__ */ Symbol.for("react.profiler"), Z = /* @__PURE__ */ Symbol.for("react.consumer"), B = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), H = /* @__PURE__ */ Symbol.for("react.suspense"), z = /* @__PURE__ */ Symbol.for("react.memo"), X = /* @__PURE__ */ Symbol.for("react.lazy"), q = /* @__PURE__ */ Symbol.for("react.activity"), Bl = Symbol.iterator;
  function Ol(d) {
    return d === null || typeof d != "object" ? null : (d = Bl && d[Bl] || d["@@iterator"], typeof d == "function" ? d : null);
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
  }, Gl = Object.assign, I = {};
  function K(d, T, _) {
    this.props = d, this.context = T, this.refs = I, this.updater = _ || Yl;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(d, T) {
    if (typeof d != "object" && typeof d != "function" && d != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, d, T, "setState");
  }, K.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function Tl() {
  }
  Tl.prototype = K.prototype;
  function hl(d, T, _) {
    this.props = d, this.context = T, this.refs = I, this.updater = _ || Yl;
  }
  var Zl = hl.prototype = new Tl();
  Zl.constructor = hl, Gl(Zl, K.prototype), Zl.isPureReactComponent = !0;
  var Fl = Array.isArray;
  function kl() {
  }
  var ll = {
    H: null,
    A: null,
    T: null,
    S: null
  }, Ll = Object.prototype.hasOwnProperty;
  function _t(d, T, _) {
    var R = _.ref;
    return {
      $$typeof: r,
      type: d,
      key: T,
      ref: R !== void 0 ? R : null,
      props: _
    };
  }
  function ba(d, T) {
    return _t(d.type, T, d.props);
  }
  function Il(d) {
    return typeof d == "object" && d !== null && d.$$typeof === r;
  }
  function Mt(d) {
    var T = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + d.replace(/[=:]/g, function(_) {
      return T[_];
    });
  }
  var Za = /\/+/g;
  function At(d, T) {
    return typeof d == "object" && d !== null && d.key != null ? Mt("" + d.key) : T.toString(36);
  }
  function D(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (typeof d.status == "string" ? d.then(kl, kl) : (d.status = "pending", d.then(function(T) {
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
  function E(d, T, _, R, J) {
    var w = typeof d;
    (w === "undefined" || w === "boolean") && (d = null);
    var nl = !1;
    if (d === null) nl = !0;
    else switch (w) {
      case "bigint":
      case "string":
      case "number":
        nl = !0;
        break;
      case "object":
        switch (d.$$typeof) {
          case r:
          case M:
            nl = !0;
            break;
          case X:
            return nl = d._init, E(nl(d._payload), T, _, R, J);
        }
    }
    if (nl) return J = J(d), nl = R === "" ? "." + At(d, 0) : R, Fl(J) ? (_ = "", nl != null && (_ = nl.replace(Za, "$&/") + "/"), E(J, T, _, "", function(_u) {
      return _u;
    })) : J != null && (Il(J) && (J = ba(J, _ + (J.key == null || d && d.key === J.key ? "" : ("" + J.key).replace(Za, "$&/") + "/") + nl)), T.push(J)), 1;
    nl = 0;
    var Ql = R === "" ? "." : R + ":";
    if (Fl(d)) for (var bl = 0; bl < d.length; bl++) R = d[bl], w = Ql + At(R, bl), nl += E(R, T, _, w, J);
    else if (bl = Ol(d), typeof bl == "function") for (d = bl.call(d), bl = 0; !(R = d.next()).done; ) R = R.value, w = Ql + At(R, bl++), nl += E(R, T, _, w, J);
    else if (w === "object") {
      if (typeof d.then == "function") return E(D(d), T, _, R, J);
      throw T = String(d), Error("Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead.");
    }
    return nl;
  }
  function O(d, T, _) {
    if (d == null) return d;
    var R = [], J = 0;
    return E(d, R, "", "", function(w) {
      return T.call(_, w, J++);
    }), R;
  }
  function ul(d) {
    if (d._status === -1) {
      var T = d._result;
      T = T(), T.then(function(_) {
        (d._status === 0 || d._status === -1) && (d._status = 1, d._result = _);
      }, function(_) {
        (d._status === 0 || d._status === -1) && (d._status = 2, d._result = _);
      }), d._status === -1 && (d._status = 0, d._result = T);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var ml = typeof reportError == "function" ? reportError : function(d) {
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
  }, Pl = {
    map: O,
    forEach: function(d, T, _) {
      O(d, function() {
        T.apply(this, arguments);
      }, _);
    },
    count: function(d) {
      var T = 0;
      return O(d, function() {
        T++;
      }), T;
    },
    toArray: function(d) {
      return O(d, function(T) {
        return T;
      }) || [];
    },
    only: function(d) {
      if (!Il(d)) throw Error("React.Children.only expected to receive a single React element child.");
      return d;
    }
  };
  f.Activity = q, f.Children = Pl, f.Component = K, f.Fragment = U, f.Profiler = V, f.PureComponent = hl, f.StrictMode = y, f.Suspense = H, f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ll, f.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(d) {
      return ll.H.useMemoCache(d);
    }
  }, f.cache = function(d) {
    return function() {
      return d.apply(null, arguments);
    };
  }, f.cacheSignal = function() {
    return null;
  }, f.cloneElement = function(d, T, _) {
    if (d == null) throw Error("The argument must be a React element, but you passed " + d + ".");
    var R = Gl({}, d.props), J = d.key;
    if (T != null) for (w in T.key !== void 0 && (J = "" + T.key), T) !Ll.call(T, w) || w === "key" || w === "__self" || w === "__source" || w === "ref" && T.ref === void 0 || (R[w] = T[w]);
    var w = arguments.length - 2;
    if (w === 1) R.children = _;
    else if (1 < w) {
      for (var nl = Array(w), Ql = 0; Ql < w; Ql++) nl[Ql] = arguments[Ql + 2];
      R.children = nl;
    }
    return _t(d.type, J, R);
  }, f.createContext = function(d) {
    return d = {
      $$typeof: B,
      _currentValue: d,
      _currentValue2: d,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, d.Provider = d, d.Consumer = {
      $$typeof: Z,
      _context: d
    }, d;
  }, f.createElement = function(d, T, _) {
    var R, J = {}, w = null;
    if (T != null) for (R in T.key !== void 0 && (w = "" + T.key), T) Ll.call(T, R) && R !== "key" && R !== "__self" && R !== "__source" && (J[R] = T[R]);
    var nl = arguments.length - 2;
    if (nl === 1) J.children = _;
    else if (1 < nl) {
      for (var Ql = Array(nl), bl = 0; bl < nl; bl++) Ql[bl] = arguments[bl + 2];
      J.children = Ql;
    }
    if (d && d.defaultProps) for (R in nl = d.defaultProps, nl) J[R] === void 0 && (J[R] = nl[R]);
    return _t(d, w, J);
  }, f.createRef = function() {
    return { current: null };
  }, f.forwardRef = function(d) {
    return {
      $$typeof: Y,
      render: d
    };
  }, f.isValidElement = Il, f.lazy = function(d) {
    return {
      $$typeof: X,
      _payload: {
        _status: -1,
        _result: d
      },
      _init: ul
    };
  }, f.memo = function(d, T) {
    return {
      $$typeof: z,
      type: d,
      compare: T === void 0 ? null : T
    };
  }, f.startTransition = function(d) {
    var T = ll.T, _ = {};
    ll.T = _;
    try {
      var R = d(), J = ll.S;
      J !== null && J(_, R), typeof R == "object" && R !== null && typeof R.then == "function" && R.then(kl, ml);
    } catch (w) {
      ml(w);
    } finally {
      T !== null && _.types !== null && (T.types = _.types), ll.T = T;
    }
  }, f.unstable_useCacheRefresh = function() {
    return ll.H.useCacheRefresh();
  }, f.use = function(d) {
    return ll.H.use(d);
  }, f.useActionState = function(d, T, _) {
    return ll.H.useActionState(d, T, _);
  }, f.useCallback = function(d, T) {
    return ll.H.useCallback(d, T);
  }, f.useContext = function(d) {
    return ll.H.useContext(d);
  }, f.useDebugValue = function() {
  }, f.useDeferredValue = function(d, T) {
    return ll.H.useDeferredValue(d, T);
  }, f.useEffect = function(d, T) {
    return ll.H.useEffect(d, T);
  }, f.useEffectEvent = function(d) {
    return ll.H.useEffectEvent(d);
  }, f.useId = function() {
    return ll.H.useId();
  }, f.useImperativeHandle = function(d, T, _) {
    return ll.H.useImperativeHandle(d, T, _);
  }, f.useInsertionEffect = function(d, T) {
    return ll.H.useInsertionEffect(d, T);
  }, f.useLayoutEffect = function(d, T) {
    return ll.H.useLayoutEffect(d, T);
  }, f.useMemo = function(d, T) {
    return ll.H.useMemo(d, T);
  }, f.useOptimistic = function(d, T) {
    return ll.H.useOptimistic(d, T);
  }, f.useReducer = function(d, T, _) {
    return ll.H.useReducer(d, T, _);
  }, f.useRef = function(d) {
    return ll.H.useRef(d);
  }, f.useState = function(d) {
    return ll.H.useState(d);
  }, f.useSyncExternalStore = function(d, T, _) {
    return ll.H.useSyncExternalStore(d, T, _);
  }, f.useTransition = function() {
    return ll.H.useTransition();
  }, f.version = "19.2.7";
})), cf = /* @__PURE__ */ Ht(((f, r) => {
  r.exports = Gm();
})), Qm = /* @__PURE__ */ Ht(((f) => {
  function r(D, E) {
    var O = D.length;
    D.push(E);
    l: for (; 0 < O; ) {
      var ul = O - 1 >>> 1, ml = D[ul];
      if (0 < y(ml, E)) D[ul] = E, D[O] = ml, O = ul;
      else break l;
    }
  }
  function M(D) {
    return D.length === 0 ? null : D[0];
  }
  function U(D) {
    if (D.length === 0) return null;
    var E = D[0], O = D.pop();
    if (O !== E) {
      D[0] = O;
      l: for (var ul = 0, ml = D.length, Pl = ml >>> 1; ul < Pl; ) {
        var d = 2 * (ul + 1) - 1, T = D[d], _ = d + 1, R = D[_];
        if (0 > y(T, O)) _ < ml && 0 > y(R, T) ? (D[ul] = R, D[_] = O, ul = _) : (D[ul] = T, D[d] = O, ul = d);
        else if (_ < ml && 0 > y(R, O)) D[ul] = R, D[_] = O, ul = _;
        else break l;
      }
    }
    return E;
  }
  function y(D, E) {
    var O = D.sortIndex - E.sortIndex;
    return O !== 0 ? O : D.id - E.id;
  }
  if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
    var V = performance;
    f.unstable_now = function() {
      return V.now();
    };
  } else {
    var Z = Date, B = Z.now();
    f.unstable_now = function() {
      return Z.now() - B;
    };
  }
  var Y = [], H = [], z = 1, X = null, q = 3, Bl = !1, Ol = !1, Yl = !1, Gl = !1, I = typeof setTimeout == "function" ? setTimeout : null, K = typeof clearTimeout == "function" ? clearTimeout : null, Tl = typeof setImmediate < "u" ? setImmediate : null;
  function hl(D) {
    for (var E = M(H); E !== null; ) {
      if (E.callback === null) U(H);
      else if (E.startTime <= D) U(H), E.sortIndex = E.expirationTime, r(Y, E);
      else break;
      E = M(H);
    }
  }
  function Zl(D) {
    if (Yl = !1, hl(D), !Ol) if (M(Y) !== null) Ol = !0, Fl || (Fl = !0, Il());
    else {
      var E = M(H);
      E !== null && At(Zl, E.startTime - D);
    }
  }
  var Fl = !1, kl = -1, ll = 5, Ll = -1;
  function _t() {
    return Gl ? !0 : !(f.unstable_now() - Ll < ll);
  }
  function ba() {
    if (Gl = !1, Fl) {
      var D = f.unstable_now();
      Ll = D;
      var E = !0;
      try {
        l: {
          Ol = !1, Yl && (Yl = !1, K(kl), kl = -1), Bl = !0;
          var O = q;
          try {
            t: {
              for (hl(D), X = M(Y); X !== null && !(X.expirationTime > D && _t()); ) {
                var ul = X.callback;
                if (typeof ul == "function") {
                  X.callback = null, q = X.priorityLevel;
                  var ml = ul(X.expirationTime <= D);
                  if (D = f.unstable_now(), typeof ml == "function") {
                    X.callback = ml, hl(D), E = !0;
                    break t;
                  }
                  X === M(Y) && U(Y), hl(D);
                } else U(Y);
                X = M(Y);
              }
              if (X !== null) E = !0;
              else {
                var Pl = M(H);
                Pl !== null && At(Zl, Pl.startTime - D), E = !1;
              }
            }
            break l;
          } finally {
            X = null, q = O, Bl = !1;
          }
          E = void 0;
        }
      } finally {
        E ? Il() : Fl = !1;
      }
    }
  }
  var Il;
  if (typeof Tl == "function") Il = function() {
    Tl(ba);
  };
  else if (typeof MessageChannel < "u") {
    var Mt = new MessageChannel(), Za = Mt.port2;
    Mt.port1.onmessage = ba, Il = function() {
      Za.postMessage(null);
    };
  } else Il = function() {
    I(ba, 0);
  };
  function At(D, E) {
    kl = I(function() {
      D(f.unstable_now());
    }, E);
  }
  f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(D) {
    D.callback = null;
  }, f.unstable_forceFrameRate = function(D) {
    0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ll = 0 < D ? Math.floor(1e3 / D) : 5;
  }, f.unstable_getCurrentPriorityLevel = function() {
    return q;
  }, f.unstable_next = function(D) {
    switch (q) {
      case 1:
      case 2:
      case 3:
        var E = 3;
        break;
      default:
        E = q;
    }
    var O = q;
    q = E;
    try {
      return D();
    } finally {
      q = O;
    }
  }, f.unstable_requestPaint = function() {
    Gl = !0;
  }, f.unstable_runWithPriority = function(D, E) {
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
    var O = q;
    q = D;
    try {
      return E();
    } finally {
      q = O;
    }
  }, f.unstable_scheduleCallback = function(D, E, O) {
    var ul = f.unstable_now();
    switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? ul + O : ul) : O = ul, D) {
      case 1:
        var ml = -1;
        break;
      case 2:
        ml = 250;
        break;
      case 5:
        ml = 1073741823;
        break;
      case 4:
        ml = 1e4;
        break;
      default:
        ml = 5e3;
    }
    return ml = O + ml, D = {
      id: z++,
      callback: E,
      priorityLevel: D,
      startTime: O,
      expirationTime: ml,
      sortIndex: -1
    }, O > ul ? (D.sortIndex = O, r(H, D), M(Y) === null && D === M(H) && (Yl ? (K(kl), kl = -1) : Yl = !0, At(Zl, O - ul))) : (D.sortIndex = ml, r(Y, D), Ol || Bl || (Ol = !0, Fl || (Fl = !0, Il()))), D;
  }, f.unstable_shouldYield = _t, f.unstable_wrapCallback = function(D) {
    var E = q;
    return function() {
      var O = q;
      q = E;
      try {
        return D.apply(this, arguments);
      } finally {
        q = O;
      }
    };
  };
})), Xm = /* @__PURE__ */ Ht(((f, r) => {
  r.exports = Qm();
})), Zm = /* @__PURE__ */ Ht(((f) => {
  var r = cf();
  function M(H) {
    var z = "https://react.dev/errors/" + H;
    if (1 < arguments.length) {
      z += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var X = 2; X < arguments.length; X++) z += "&args[]=" + encodeURIComponent(arguments[X]);
    }
    return "Minified React error #" + H + "; visit " + z + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function U() {
  }
  var y = {
    d: {
      f: U,
      r: function() {
        throw Error(M(522));
      },
      D: U,
      C: U,
      L: U,
      m: U,
      X: U,
      S: U,
      M: U
    },
    p: 0,
    findDOMNode: null
  }, V = /* @__PURE__ */ Symbol.for("react.portal");
  function Z(H, z, X) {
    var q = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: V,
      key: q == null ? null : "" + q,
      children: H,
      containerInfo: z,
      implementation: X
    };
  }
  var B = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Y(H, z) {
    if (H === "font") return "";
    if (typeof z == "string") return z === "use-credentials" ? z : "";
  }
  f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y, f.createPortal = function(H, z) {
    var X = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!z || z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11) throw Error(M(299));
    return Z(H, z, null, X);
  }, f.flushSync = function(H) {
    var z = B.T, X = y.p;
    try {
      if (B.T = null, y.p = 2, H) return H();
    } finally {
      B.T = z, y.p = X, y.d.f();
    }
  }, f.preconnect = function(H, z) {
    typeof H == "string" && (z ? (z = z.crossOrigin, z = typeof z == "string" ? z === "use-credentials" ? z : "" : void 0) : z = null, y.d.C(H, z));
  }, f.prefetchDNS = function(H) {
    typeof H == "string" && y.d.D(H);
  }, f.preinit = function(H, z) {
    if (typeof H == "string" && z && typeof z.as == "string") {
      var X = z.as, q = Y(X, z.crossOrigin), Bl = typeof z.integrity == "string" ? z.integrity : void 0, Ol = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
      X === "style" ? y.d.S(H, typeof z.precedence == "string" ? z.precedence : void 0, {
        crossOrigin: q,
        integrity: Bl,
        fetchPriority: Ol
      }) : X === "script" && y.d.X(H, {
        crossOrigin: q,
        integrity: Bl,
        fetchPriority: Ol,
        nonce: typeof z.nonce == "string" ? z.nonce : void 0
      });
    }
  }, f.preinitModule = function(H, z) {
    if (typeof H == "string") if (typeof z == "object" && z !== null) {
      if (z.as == null || z.as === "script") {
        var X = Y(z.as, z.crossOrigin);
        y.d.M(H, {
          crossOrigin: X,
          integrity: typeof z.integrity == "string" ? z.integrity : void 0,
          nonce: typeof z.nonce == "string" ? z.nonce : void 0
        });
      }
    } else z ?? y.d.M(H);
  }, f.preload = function(H, z) {
    if (typeof H == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
      var X = z.as, q = Y(X, z.crossOrigin);
      y.d.L(H, X, {
        crossOrigin: q,
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
  }, f.preloadModule = function(H, z) {
    if (typeof H == "string") if (z) {
      var X = Y(z.as, z.crossOrigin);
      y.d.m(H, {
        as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0,
        crossOrigin: X,
        integrity: typeof z.integrity == "string" ? z.integrity : void 0
      });
    } else y.d.m(H);
  }, f.requestFormReset = function(H) {
    y.d.r(H);
  }, f.unstable_batchedUpdates = function(H, z) {
    return H(z);
  }, f.useFormState = function(H, z, X) {
    return B.H.useFormState(H, z, X);
  }, f.useFormStatus = function() {
    return B.H.useHostTransitionStatus();
  }, f.version = "19.2.7";
})), Lm = /* @__PURE__ */ Ht(((f, r) => {
  function M() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M);
      } catch (U) {
        console.error(U);
      }
  }
  M(), r.exports = Zm();
})), xm = /* @__PURE__ */ Ht(((f) => {
  var r = Xm(), M = cf(), U = Lm();
  function y(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function V(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Z(l) {
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
  function B(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Y(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function H(l) {
    if (Z(l) !== l) throw Error(y(188));
  }
  function z(l) {
    var t = l.alternate;
    if (!t) {
      if (t = Z(l), t === null) throw Error(y(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (u = e.return, u !== null) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return H(e), l;
          if (n === u) return H(e), t;
          n = n.sibling;
        }
        throw Error(y(188));
      }
      if (a.return !== u.return) a = e, u = n;
      else {
        for (var i = !1, c = e.child; c; ) {
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
        if (!i) {
          for (c = n.child; c; ) {
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
          if (!i) throw Error(y(189));
        }
      }
      if (a.alternate !== u) throw Error(y(190));
    }
    if (a.tag !== 3) throw Error(y(188));
    return a.stateNode.current === a ? l : t;
  }
  function X(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = X(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var q = Object.assign, Bl = /* @__PURE__ */ Symbol.for("react.element"), Ol = /* @__PURE__ */ Symbol.for("react.transitional.element"), Yl = /* @__PURE__ */ Symbol.for("react.portal"), Gl = /* @__PURE__ */ Symbol.for("react.fragment"), I = /* @__PURE__ */ Symbol.for("react.strict_mode"), K = /* @__PURE__ */ Symbol.for("react.profiler"), Tl = /* @__PURE__ */ Symbol.for("react.consumer"), hl = /* @__PURE__ */ Symbol.for("react.context"), Zl = /* @__PURE__ */ Symbol.for("react.forward_ref"), Fl = /* @__PURE__ */ Symbol.for("react.suspense"), kl = /* @__PURE__ */ Symbol.for("react.suspense_list"), ll = /* @__PURE__ */ Symbol.for("react.memo"), Ll = /* @__PURE__ */ Symbol.for("react.lazy"), _t = /* @__PURE__ */ Symbol.for("react.activity"), ba = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Il = Symbol.iterator;
  function Mt(l) {
    return l === null || typeof l != "object" ? null : (l = Il && l[Il] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Za = /* @__PURE__ */ Symbol.for("react.client.reference");
  function At(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.$$typeof === Za ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Gl:
        return "Fragment";
      case K:
        return "Profiler";
      case I:
        return "StrictMode";
      case Fl:
        return "Suspense";
      case kl:
        return "SuspenseList";
      case _t:
        return "Activity";
    }
    if (typeof l == "object") switch (l.$$typeof) {
      case Yl:
        return "Portal";
      case hl:
        return l.displayName || "Context";
      case Tl:
        return (l._context.displayName || "Context") + ".Consumer";
      case Zl:
        var t = l.render;
        return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
      case ll:
        return t = l.displayName || null, t !== null ? t : At(l.type) || "Memo";
      case Ll:
        t = l._payload, l = l._init;
        try {
          return At(l(t));
        } catch {
        }
    }
    return null;
  }
  var D = Array.isArray, E = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = U.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ul = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ml = [], Pl = -1;
  function d(l) {
    return { current: l };
  }
  function T(l) {
    0 > Pl || (l.current = ml[Pl], ml[Pl] = null, Pl--);
  }
  function _(l, t) {
    Pl++, ml[Pl] = l.current, l.current = t;
  }
  var R = d(null), J = d(null), w = d(null), nl = d(null);
  function Ql(l, t) {
    switch (_(w, t), _(J, l), _(R, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? No(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI) t = No(t), l = qo(t, l);
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
    T(R), _(R, l);
  }
  function bl() {
    T(R), T(J), T(w);
  }
  function _u(l) {
    l.memoizedState !== null && _(nl, l);
    var t = R.current, a = qo(t, l.type);
    t !== a && (_(J, l), _(R, a));
  }
  function pe(l) {
    J.current === l && (T(R), T(J)), nl.current === l && (T(nl), ve._currentValue = ul);
  }
  var Ln, ff;
  function pa(l) {
    if (Ln === void 0) try {
      throw Error();
    } catch (a) {
      var t = a.stack.trim().match(/\n( *(at )?)/);
      Ln = t && t[1] || "", ff = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Ln + l + ff;
  }
  var xn = !1;
  function Vn(l, t) {
    if (!l || xn) return "";
    xn = !0;
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
      var e = Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot, "name");
      e && e.configurable && Object.defineProperty(u.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var n = u.DetermineComponentFrameRoot(), i = n[0], c = n[1];
      if (i && c) {
        var s = i.split(`
`), h = c.split(`
`);
        for (e = u = 0; u < s.length && !s[u].includes("DetermineComponentFrameRoot"); ) u++;
        for (; e < h.length && !h[e].includes("DetermineComponentFrameRoot"); ) e++;
        if (u === s.length || e === h.length) for (u = s.length - 1, e = h.length - 1; 1 <= u && 0 <= e && s[u] !== h[e]; ) e--;
        for (; 1 <= u && 0 <= e; u--, e--) if (s[u] !== h[e]) {
          if (u !== 1 || e !== 1) do
            if (u--, e--, 0 > e || s[u] !== h[e]) {
              var b = `
` + s[u].replace(" at new ", " at ");
              return l.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", l.displayName)), b;
            }
          while (1 <= u && 0 <= e);
          break;
        }
      }
    } finally {
      xn = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? pa(a) : "";
  }
  function gd(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return pa(l.type);
      case 16:
        return pa("Lazy");
      case 13:
        return l.child !== t && t !== null ? pa("Suspense Fallback") : pa("Suspense");
      case 19:
        return pa("SuspenseList");
      case 0:
      case 15:
        return Vn(l.type, !1);
      case 11:
        return Vn(l.type.render, !1);
      case 1:
        return Vn(l.type, !0);
      case 31:
        return pa("Activity");
      default:
        return "";
    }
  }
  function sf(l) {
    try {
      var t = "", a = null;
      do
        t += gd(l, a), a = l, l = l.return;
      while (l);
      return t;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  var Kn = Object.prototype.hasOwnProperty, Jn = r.unstable_scheduleCallback, wn = r.unstable_cancelCallback, Sd = r.unstable_shouldYield, rd = r.unstable_requestPaint, lt = r.unstable_now, bd = r.unstable_getCurrentPriorityLevel, of = r.unstable_ImmediatePriority, df = r.unstable_UserBlockingPriority, Ae = r.unstable_NormalPriority, pd = r.unstable_LowPriority, mf = r.unstable_IdlePriority, Ad = r.log, Td = r.unstable_setDisableYieldValue, Mu = null, tt = null;
  function Ft(l) {
    if (typeof Ad == "function" && Td(l), tt && typeof tt.setStrictMode == "function") try {
      tt.setStrictMode(Mu, l);
    } catch {
    }
  }
  var at = Math.clz32 ? Math.clz32 : _d, zd = Math.log, Ed = Math.LN2;
  function _d(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (zd(l) / Ed | 0) | 0;
  }
  var Te = 256, ze = 262144, Ee = 4194304;
  function Aa(l) {
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
  function _e(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0, n = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var c = u & 134217727;
    return c !== 0 ? (u = c & ~n, u !== 0 ? e = Aa(u) : (i &= c, i !== 0 ? e = Aa(i) : a || (a = c & ~l, a !== 0 && (e = Aa(a))))) : (c = u & ~n, c !== 0 ? e = Aa(c) : i !== 0 ? e = Aa(i) : a || (a = u & ~l, a !== 0 && (e = Aa(a)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : e;
  }
  function Ou(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Md(l, t) {
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
    var l = Ee;
    return Ee <<= 1, (Ee & 62914560) === 0 && (Ee = 4194304), l;
  }
  function Wn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Me(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Od(l, t, a, u, e, n) {
    var i = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var c = l.entanglements, s = l.expirationTimes, h = l.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var b = 31 - at(a), A = 1 << b;
      c[b] = 0, s[b] = -1;
      var g = h[b];
      if (g !== null) for (h[b] = null, b = 0; b < g.length; b++) {
        var S = g[b];
        S !== null && (S.lane &= -536870913);
      }
      a &= ~A;
    }
    u !== 0 && vf(l, u, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
  }
  function vf(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var u = 31 - at(t);
    l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 261930;
  }
  function hf(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var u = 31 - at(a), e = 1 << u;
      e & t | l[u] & t && (l[u] |= t), a &= ~e;
    }
  }
  function gf(l, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : Sf(a), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function Sf(l) {
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
  function $n(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function rf() {
    var l = O.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : ld(l.type));
  }
  function bf(l, t) {
    var a = O.p;
    try {
      return O.p = l, t();
    } finally {
      O.p = a;
    }
  }
  var kt = Math.random().toString(36).slice(2), Cl = "__reactFiber$" + kt, xl = "__reactProps$" + kt, Du = "__reactContainer$" + kt, Fn = "__reactEvents$" + kt, Dd = "__reactListeners$" + kt, Ud = "__reactHandles$" + kt, pf = "__reactResources$" + kt, Uu = "__reactMarker$" + kt;
  function kn(l) {
    delete l[Cl], delete l[xl], delete l[Fn], delete l[Dd], delete l[Ud];
  }
  function La(l) {
    var t = l[Cl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[Du] || a[Cl]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null) for (l = Xo(l); l !== null; ) {
          if (a = l[Cl]) return a;
          l = Xo(l);
        }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function xa(l) {
    if (l = l[Cl] || l[Du]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l;
    }
    return null;
  }
  function Hu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(y(33));
  }
  function Va(l) {
    var t = l[pf];
    return t || (t = l[pf] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), t;
  }
  function Ul(l) {
    l[Uu] = !0;
  }
  var Af = /* @__PURE__ */ new Set(), Tf = {};
  function Ta(l, t) {
    Ka(l, t), Ka(l + "Capture", t);
  }
  function Ka(l, t) {
    for (Tf[l] = t, l = 0; l < t.length; l++) Af.add(t[l]);
  }
  var Hd = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), zf = {}, Ef = {};
  function Cd(l) {
    return Kn.call(Ef, l) ? !0 : Kn.call(zf, l) ? !1 : Hd.test(l) ? Ef[l] = !0 : (zf[l] = !0, !1);
  }
  function Oe(l, t, a) {
    if (Cd(t)) if (a === null) l.removeAttribute(t);
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
  function De(l, t, a) {
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
  function Ct(l, t, a, u) {
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
  function ot(l) {
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
  function Nd(l, t, a) {
    var u = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (!l.hasOwnProperty(t) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var e = u.get, n = u.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(i) {
          a = "" + i, n.call(this, i);
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
  function In(l) {
    if (!l._valueTracker) {
      var t = _f(l) ? "checked" : "value";
      l._valueTracker = Nd(l, t, "" + l[t]);
    }
  }
  function Mf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), u = "";
    return l && (u = _f(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), !0) : !1;
  }
  function Ue(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var qd = /[\n"\\]/g;
  function dt(l) {
    return l.replace(qd, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Pn(l, t, a, u, e, n, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ot(t)) : l.value !== "" + ot(t) && (l.value = "" + ot(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? li(l, i, ot(t)) : a != null ? li(l, i, ot(a)) : u != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + ot(c) : l.removeAttribute("name");
  }
  function Of(l, t, a, u, e, n, i, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        In(l);
        return;
      }
      a = a != null ? "" + ot(a) : "", t = t != null ? "" + ot(t) : a, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    u = u ?? e, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = c ? l.checked : !!u, l.defaultChecked = !!u, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), In(l);
  }
  function li(l, t, a) {
    t === "number" && Ue(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function Ja(l, t, a, u) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < a.length; e++) t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++) e = t.hasOwnProperty("$" + l[a].value), l[a].selected !== e && (l[a].selected = e), e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + ot(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          l[e].selected = !0, u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Df(l, t, a) {
    if (t != null && (t = "" + ot(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ot(a) : "";
  }
  function Uf(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(y(92));
        if (D(u)) {
          if (1 < u.length) throw Error(y(93));
          u = u[0];
        }
        a = u;
      }
      a ??= "", t = a;
    }
    a = ot(t), l.defaultValue = a, u = l.textContent, u === a && u !== "" && u !== null && (l.value = u), In(l);
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
  var Rd = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Hf(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || Rd.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function Cf(l, t, a) {
    if (t != null && typeof t != "object") throw Error(y(62));
    if (l = l.style, a != null) {
      for (var u in a) !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
      for (var e in t) u = t[e], t.hasOwnProperty(e) && a[e] !== u && Hf(l, e, u);
    } else for (var n in t) t.hasOwnProperty(n) && Hf(l, n, t[n]);
  }
  function ti(l) {
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
  var jd = /* @__PURE__ */ new Map([
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
  ]), Bd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function He(l) {
    return Bd.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Nt() {
  }
  var ai = null;
  function ui(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Wa = null, $a = null;
  function Nf(l) {
    var t = xa(l);
    if (t && (l = t.stateNode)) {
      var a = l[xl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (Pn(l, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll('input[name="' + dt("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[xl] || null;
                if (!e) throw Error(y(90));
                Pn(u, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name);
              }
            }
            for (t = 0; t < a.length; t++) u = a[t], u.form === l.form && Mf(u);
          }
          break l;
        case "textarea":
          Df(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && Ja(l, !!a.multiple, t, !1);
      }
    }
  }
  var ei = !1;
  function qf(l, t, a) {
    if (ei) return l(t, a);
    ei = !0;
    try {
      return l(t);
    } finally {
      if (ei = !1, (Wa !== null || $a !== null) && (rn(), Wa && (t = Wa, l = $a, $a = Wa = null, Nf(t), l)))
        for (t = 0; t < l.length; t++) Nf(l[t]);
    }
  }
  function Cu(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[xl] || null;
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
    if (a && typeof a != "function") throw Error(y(231, t, typeof a));
    return a;
  }
  var qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ni = !1;
  if (qt) try {
    var Nu = {};
    Object.defineProperty(Nu, "passive", { get: function() {
      ni = !0;
    } }), window.addEventListener("test", Nu, Nu), window.removeEventListener("test", Nu, Nu);
  } catch {
    ni = !1;
  }
  var It = null, ii = null, Ce = null;
  function Rf() {
    if (Ce) return Ce;
    var l, t = ii, a = t.length, u, e = "value" in It ? It.value : It.textContent, n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++) ;
    var i = a - l;
    for (u = 1; u <= i && t[a - u] === e[n - u]; u++) ;
    return Ce = e.slice(l, 1 < u ? 1 - u : void 0);
  }
  function Ne(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function qe() {
    return !0;
  }
  function jf() {
    return !1;
  }
  function Vl(l) {
    function t(a, u, e, n, i) {
      this._reactName = a, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in l) l.hasOwnProperty(c) && (a = l[c], this[c] = a ? a(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? qe : jf, this.isPropagationStopped = jf, this;
    }
    return q(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = qe);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = qe);
      },
      persist: function() {
      },
      isPersistent: qe
    }), t;
  }
  var za = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Re = Vl(za), qu = q({}, za, {
    view: 0,
    detail: 0
  }), Yd = Vl(qu), ci, fi, Ru, je = q({}, qu, {
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
    getModifierState: oi,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Ru && (Ru && l.type === "mousemove" ? (ci = l.screenX - Ru.screenX, fi = l.screenY - Ru.screenY) : fi = ci = 0, Ru = l), ci);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : fi;
    }
  }), Bf = Vl(je), Gd = Vl(q({}, je, { dataTransfer: 0 })), si = Vl(q({}, qu, { relatedTarget: 0 })), Qd = Vl(q({}, za, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), Xd = Vl(q({}, za, { clipboardData: function(l) {
    return "clipboardData" in l ? l.clipboardData : window.clipboardData;
  } })), Yf = Vl(q({}, za, { data: 0 })), Zd = {
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
  }, Ld = {
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
  }, xd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Vd(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = xd[l]) ? !!t[l] : !1;
  }
  function oi() {
    return Vd;
  }
  var Kd = Vl(q({}, qu, {
    key: function(l) {
      if (l.key) {
        var t = Zd[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Ne(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Ld[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: oi,
    charCode: function(l) {
      return l.type === "keypress" ? Ne(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Ne(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  })), Gf = Vl(q({}, je, {
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
  })), Jd = Vl(q({}, qu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: oi
  })), wd = Vl(q({}, za, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), Wd = Vl(q({}, je, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  })), $d = Vl(q({}, za, {
    newState: 0,
    oldState: 0
  })), Fd = [
    9,
    13,
    27,
    32
  ], di = qt && "CompositionEvent" in window, ju = null;
  qt && "documentMode" in document && (ju = document.documentMode);
  var kd = qt && "TextEvent" in window && !ju, Qf = qt && (!di || ju && 8 < ju && 11 >= ju), Xf = " ", Zf = !1;
  function Lf(l, t) {
    switch (l) {
      case "keyup":
        return Fd.indexOf(t.keyCode) !== -1;
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
  function xf(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Fa = !1;
  function Id(l, t) {
    switch (l) {
      case "compositionend":
        return xf(t);
      case "keypress":
        return t.which !== 32 ? null : (Zf = !0, Xf);
      case "textInput":
        return l = t.data, l === Xf && Zf ? null : l;
      default:
        return null;
    }
  }
  function Pd(l, t) {
    if (Fa) return l === "compositionend" || !di && Lf(l, t) ? (l = Rf(), Ce = ii = It = null, Fa = !1, l) : null;
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
        return Qf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var l1 = {
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
  function Vf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!l1[l.type] : t === "textarea";
  }
  function Kf(l, t, a, u) {
    Wa ? $a ? $a.push(u) : $a = [u] : Wa = u, t = _n(t, "onChange"), 0 < t.length && (a = new Re("onChange", "change", null, a, u), l.push({
      event: a,
      listeners: t
    }));
  }
  var Bu = null, Yu = null;
  function t1(l) {
    _o(l, 0);
  }
  function Be(l) {
    if (Mf(Hu(l))) return l;
  }
  function Jf(l, t) {
    if (l === "change") return t;
  }
  var wf = !1;
  if (qt) {
    var mi;
    if (qt) {
      var yi = "oninput" in document;
      if (!yi) {
        var Wf = document.createElement("div");
        Wf.setAttribute("oninput", "return;"), yi = typeof Wf.oninput == "function";
      }
      mi = yi;
    } else mi = !1;
    wf = mi && (!document.documentMode || 9 < document.documentMode);
  }
  function $f() {
    Bu && (Bu.detachEvent("onpropertychange", Ff), Yu = Bu = null);
  }
  function Ff(l) {
    if (l.propertyName === "value" && Be(Yu)) {
      var t = [];
      Kf(t, Yu, l, ui(l)), qf(t1, t);
    }
  }
  function a1(l, t, a) {
    l === "focusin" ? ($f(), Bu = t, Yu = a, Bu.attachEvent("onpropertychange", Ff)) : l === "focusout" && $f();
  }
  function u1(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown") return Be(Yu);
  }
  function e1(l, t) {
    if (l === "click") return Be(t);
  }
  function n1(l, t) {
    if (l === "input" || l === "change") return Be(t);
  }
  function i1(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var ut = typeof Object.is == "function" ? Object.is : i1;
  function Gu(l, t) {
    if (ut(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null) return !1;
    var a = Object.keys(l), u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Kn.call(t, e) || !ut(l[e], t[e])) return !1;
    }
    return !0;
  }
  function kf(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function If(l, t) {
    var a = kf(l);
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
      a = kf(a);
    }
  }
  function Pf(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Pf(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ls(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Ue(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Ue(l.document);
    }
    return t;
  }
  function vi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var c1 = qt && "documentMode" in document && 11 >= document.documentMode, ka = null, hi = null, Qu = null, gi = !1;
  function ts(l, t, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    gi || ka == null || ka !== Ue(u) || (u = ka, "selectionStart" in u && vi(u) ? u = {
      start: u.selectionStart,
      end: u.selectionEnd
    } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Qu && Gu(Qu, u) || (Qu = u, u = _n(hi, "onSelect"), 0 < u.length && (t = new Re("onSelect", "select", null, t, a), l.push({
      event: t,
      listeners: u
    }), t.target = ka)));
  }
  function Ea(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var Ia = {
    animationend: Ea("Animation", "AnimationEnd"),
    animationiteration: Ea("Animation", "AnimationIteration"),
    animationstart: Ea("Animation", "AnimationStart"),
    transitionrun: Ea("Transition", "TransitionRun"),
    transitionstart: Ea("Transition", "TransitionStart"),
    transitioncancel: Ea("Transition", "TransitionCancel"),
    transitionend: Ea("Transition", "TransitionEnd")
  }, Si = {}, as = {};
  qt && (as = document.createElement("div").style, "AnimationEvent" in window || (delete Ia.animationend.animation, delete Ia.animationiteration.animation, delete Ia.animationstart.animation), "TransitionEvent" in window || delete Ia.transitionend.transition);
  function _a(l) {
    if (Si[l]) return Si[l];
    if (!Ia[l]) return l;
    var t = Ia[l], a;
    for (a in t) if (t.hasOwnProperty(a) && a in as) return Si[l] = t[a];
    return l;
  }
  var us = _a("animationend"), es = _a("animationiteration"), ns = _a("animationstart"), f1 = _a("transitionrun"), s1 = _a("transitionstart"), o1 = _a("transitioncancel"), is = _a("transitionend"), cs = /* @__PURE__ */ new Map(), ri = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  ri.push("scrollEnd");
  function Tt(l, t) {
    cs.set(l, t), Ta(t, [l]);
  }
  var Ye = typeof reportError == "function" ? reportError : function(l) {
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
  }, mt = [], Pa = 0, bi = 0;
  function Ge() {
    for (var l = Pa, t = bi = Pa = 0; t < l; ) {
      var a = mt[t];
      mt[t++] = null;
      var u = mt[t];
      mt[t++] = null;
      var e = mt[t];
      mt[t++] = null;
      var n = mt[t];
      if (mt[t++] = null, u !== null && e !== null) {
        var i = u.pending;
        i === null ? e.next = e : (e.next = i.next, i.next = e), u.pending = e;
      }
      n !== 0 && fs(a, e, n);
    }
  }
  function Qe(l, t, a, u) {
    mt[Pa++] = l, mt[Pa++] = t, mt[Pa++] = a, mt[Pa++] = u, bi |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
  }
  function pi(l, t, a, u) {
    return Qe(l, t, a, u), Xe(l);
  }
  function Ma(l, t) {
    return Qe(l, null, null, t), Xe(l);
  }
  function fs(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; ) n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - at(a), l = n.hiddenUpdates, u = l[e], u === null ? l[e] = [t] : u.push(t), t.lane = a | 536870912), n) : null;
  }
  function Xe(l) {
    if (50 < ce) throw ce = 0, Uc = null, Error(y(185));
    for (var t = l.return; t !== null; ) l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var lu = {};
  function d1(l, t, a, u) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function et(l, t, a, u) {
    return new d1(l, t, a, u);
  }
  function Ai(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Rt(l, t) {
    var a = l.alternate;
    return a === null ? (a = et(l.tag, t, l.key, l.mode), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function ss(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Ze(l, t, a, u, e, n) {
    var i = 0;
    if (u = l, typeof l == "function") Ai(l) && (i = 1);
    else if (typeof l == "string") i = Sm(l, a, R.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else l: switch (l) {
      case _t:
        return l = et(31, a, t, e), l.elementType = _t, l.lanes = n, l;
      case Gl:
        return Oa(a.children, e, n, t);
      case I:
        i = 8, e |= 24;
        break;
      case K:
        return l = et(12, a, t, e | 2), l.elementType = K, l.lanes = n, l;
      case Fl:
        return l = et(13, a, t, e), l.elementType = Fl, l.lanes = n, l;
      case kl:
        return l = et(19, a, t, e), l.elementType = kl, l.lanes = n, l;
      default:
        if (typeof l == "object" && l !== null) switch (l.$$typeof) {
          case hl:
            i = 10;
            break l;
          case Tl:
            i = 9;
            break l;
          case Zl:
            i = 11;
            break l;
          case ll:
            i = 14;
            break l;
          case Ll:
            i = 16, u = null;
            break l;
        }
        i = 29, a = Error(y(130, l === null ? "null" : typeof l, "")), u = null;
    }
    return t = et(i, a, t, e), t.elementType = l, t.type = u, t.lanes = n, t;
  }
  function Oa(l, t, a, u) {
    return l = et(7, l, u, t), l.lanes = a, l;
  }
  function Ti(l, t, a) {
    return l = et(6, l, null, t), l.lanes = a, l;
  }
  function os(l) {
    var t = et(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function zi(l, t, a) {
    return t = et(4, l.children !== null ? l.children : [], l.key, t), t.lanes = a, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var ds = /* @__PURE__ */ new WeakMap();
  function yt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = ds.get(l);
      return a !== void 0 ? a : (t = {
        value: l,
        source: t,
        stack: sf(t)
      }, ds.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: sf(t)
    };
  }
  var tu = [], au = 0, Le = null, Xu = 0, vt = [], ht = 0, Pt = null, Ot = 1, Dt = "";
  function jt(l, t) {
    tu[au++] = Xu, tu[au++] = Le, Le = l, Xu = t;
  }
  function ms(l, t, a) {
    vt[ht++] = Ot, vt[ht++] = Dt, vt[ht++] = Pt, Pt = l;
    var u = Ot;
    l = Dt;
    var e = 32 - at(u) - 1;
    u &= ~(1 << e), a += 1;
    var n = 32 - at(t) + e;
    if (30 < n) {
      var i = e - e % 5;
      n = (u & (1 << i) - 1).toString(32), u >>= i, e -= i, Ot = 1 << 32 - at(t) + e | a << e | u, Dt = n + l;
    } else Ot = 1 << n | a << e | u, Dt = l;
  }
  function Ei(l) {
    l.return !== null && (jt(l, 1), ms(l, 1, 0));
  }
  function _i(l) {
    for (; l === Le; ) Le = tu[--au], tu[au] = null, Xu = tu[--au], tu[au] = null;
    for (; l === Pt; ) Pt = vt[--ht], vt[ht] = null, Dt = vt[--ht], vt[ht] = null, Ot = vt[--ht], vt[ht] = null;
  }
  function ys(l, t) {
    vt[ht++] = Ot, vt[ht++] = Dt, vt[ht++] = Pt, Ot = t.id, Dt = t.overflow, Pt = l;
  }
  var Nl = null, yl = null, P = !1, la = null, gt = !1, Mi = Error(y(519));
  function ta(l) {
    throw Zu(yt(Error(y(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), l)), Mi;
  }
  function vs(l) {
    var t = l.stateNode, a = l.type, u = l.memoizedProps;
    switch (t[Cl] = l, t[xl] = u, a) {
      case "dialog":
        $("cancel", t), $("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        $("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < se.length; a++) $(se[a], t);
        break;
      case "source":
        $("error", t);
        break;
      case "img":
      case "image":
      case "link":
        $("error", t), $("load", t);
        break;
      case "details":
        $("toggle", t);
        break;
      case "input":
        $("invalid", t), Of(t, u.value, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name, !0);
        break;
      case "select":
        $("invalid", t);
        break;
      case "textarea":
        $("invalid", t), Uf(t, u.value, u.defaultValue, u.children);
    }
    a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || Ho(t.textContent, a) ? (u.popover != null && ($("beforetoggle", t), $("toggle", t)), u.onScroll != null && $("scroll", t), u.onScrollEnd != null && $("scrollend", t), u.onClick != null && (t.onclick = Nt), t = !0) : t = !1, t || ta(l, !0);
  }
  function hs(l) {
    for (Nl = l.return; Nl; ) switch (Nl.tag) {
      case 5:
      case 31:
      case 13:
        gt = !1;
        return;
      case 27:
      case 3:
        gt = !0;
        return;
      default:
        Nl = Nl.return;
    }
  }
  function uu(l) {
    if (l !== Nl) return !1;
    if (!P) return hs(l), P = !0, !1;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || xc(l.type, l.memoizedProps)), a = !a), a && yl && ta(l), hs(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(y(317));
      yl = Qo(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(y(317));
      yl = Qo(l);
    } else t === 27 ? (t = yl, ya(l.type) ? (l = Wc, Wc = null, yl = l) : yl = t) : yl = Nl ? bt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Da() {
    yl = Nl = null, P = !1;
  }
  function Oi() {
    var l = la;
    return l !== null && (Wl === null ? Wl = l : Wl.push.apply(Wl, l), la = null), l;
  }
  function Zu(l) {
    la === null ? la = [l] : la.push(l);
  }
  var Di = d(null), Ua = null, Bt = null;
  function aa(l, t, a) {
    _(Di, t._currentValue), t._currentValue = a;
  }
  function Yt(l) {
    l._currentValue = Di.current, T(Di);
  }
  function Ui(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function Hi(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var i = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var s = 0; s < t.length; s++) if (c.context === t[s]) {
            n.lanes |= a, c = n.alternate, c !== null && (c.lanes |= a), Ui(n.return, a, l), u || (i = null);
            break l;
          }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (i = e.return, i === null) throw Error(y(341));
        i.lanes |= a, n = i.alternate, n !== null && (n.lanes |= a), Ui(i, a, l), i = null;
      } else i = e.child;
      if (i !== null) i.return = e;
      else for (i = e; i !== null; ) {
        if (i === l) {
          i = null;
          break;
        }
        if (e = i.sibling, e !== null) {
          e.return = i.return, i = e;
          break;
        }
        i = i.return;
      }
      e = i;
    }
  }
  function eu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var i = e.alternate;
        if (i === null) throw Error(y(387));
        if (i = i.memoizedProps, i !== null) {
          var c = e.type;
          ut(e.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === nl.current) {
        if (i = e.alternate, i === null) throw Error(y(387));
        i.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(ve) : l = [ve]);
      }
      e = e.return;
    }
    l !== null && Hi(t, l, a, u), t.flags |= 262144;
  }
  function xe(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ut(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ha(l) {
    Ua = l, Bt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function ql(l) {
    return gs(Ua, l);
  }
  function Ve(l, t) {
    return Ua === null && Ha(l), gs(l, t);
  }
  function gs(l, t) {
    var a = t._currentValue;
    if (t = {
      context: t,
      memoizedValue: a,
      next: null
    }, Bt === null) {
      if (l === null) throw Error(y(308));
      Bt = t, l.dependencies = {
        lanes: 0,
        firstContext: t
      }, l.flags |= 524288;
    } else Bt = Bt.next = t;
    return a;
  }
  var m1 = typeof AbortController < "u" ? AbortController : function() {
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
  }, y1 = r.unstable_scheduleCallback, v1 = r.unstable_NormalPriority, zl = {
    $$typeof: hl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ci() {
    return {
      controller: new m1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Lu(l) {
    l.refCount--, l.refCount === 0 && y1(v1, function() {
      l.controller.abort();
    });
  }
  var xu = null, Ni = 0, nu = 0, iu = null;
  function h1(l, t) {
    if (xu === null) {
      var a = xu = [];
      Ni = 0, nu = jc(), iu = {
        status: "pending",
        value: void 0,
        then: function(u) {
          a.push(u);
        }
      };
    }
    return Ni++, t.then(Ss, Ss), t;
  }
  function Ss() {
    if (--Ni === 0 && xu !== null) {
      iu !== null && (iu.status = "fulfilled");
      var l = xu;
      xu = null, nu = 0, iu = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function g1(l, t) {
    var a = [], u = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        a.push(e);
      }
    };
    return l.then(function() {
      u.status = "fulfilled", u.value = t;
      for (var e = 0; e < a.length; e++) (0, a[e])(t);
    }, function(e) {
      for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++) (0, a[e])(void 0);
    }), u;
  }
  var rs = E.S;
  E.S = function(l, t) {
    I0 = lt(), typeof t == "object" && t !== null && typeof t.then == "function" && h1(l, t), rs !== null && rs(l, t);
  };
  var Ca = d(null);
  function qi() {
    var l = Ca.current;
    return l !== null ? l : dl.pooledCache;
  }
  function Ke(l, t) {
    t === null ? _(Ca, Ca.current) : _(Ca, t.pool);
  }
  function bs() {
    var l = qi();
    return l === null ? null : {
      parent: zl._currentValue,
      pool: l
    };
  }
  var cu = Error(y(460)), Ri = Error(y(474)), Je = Error(y(542)), we = { then: function() {
  } };
  function ps(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function As(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Nt, Nt), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, zs(l), l;
      default:
        if (typeof t.status == "string") t.then(Nt, Nt);
        else {
          if (l = dl, l !== null && 100 < l.shellSuspendCounter) throw Error(y(482));
          l = t, l.status = "pending", l.then(function(u) {
            if (t.status === "pending") {
              var e = t;
              e.status = "fulfilled", e.value = u;
            }
          }, function(u) {
            if (t.status === "pending") {
              var e = t;
              e.status = "rejected", e.reason = u;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, zs(l), l;
        }
        throw qa = t, cu;
    }
  }
  function Na(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (qa = a, cu) : a;
    }
  }
  var qa = null;
  function Ts() {
    if (qa === null) throw Error(y(459));
    var l = qa;
    return qa = null, l;
  }
  function zs(l) {
    if (l === cu || l === Je) throw Error(y(483));
  }
  var fu = null, Vu = 0;
  function We(l) {
    var t = Vu;
    return Vu += 1, fu === null && (fu = []), As(fu, l, t);
  }
  function Ku(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function $e(l, t) {
    throw t.$$typeof === Bl ? Error(y(525)) : (l = Object.prototype.toString.call(t), Error(y(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
  }
  function Es(l) {
    function t(m, o) {
      if (l) {
        var v = m.deletions;
        v === null ? (m.deletions = [o], m.flags |= 16) : v.push(o);
      }
    }
    function a(m, o) {
      if (!l) return null;
      for (; o !== null; ) t(m, o), o = o.sibling;
      return null;
    }
    function u(m) {
      for (var o = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? o.set(m.key, m) : o.set(m.index, m), m = m.sibling;
      return o;
    }
    function e(m, o) {
      return m = Rt(m, o), m.index = 0, m.sibling = null, m;
    }
    function n(m, o, v) {
      return m.index = v, l ? (v = m.alternate, v !== null ? (v = v.index, v < o ? (m.flags |= 67108866, o) : v) : (m.flags |= 67108866, o)) : (m.flags |= 1048576, o);
    }
    function i(m) {
      return l && m.alternate === null && (m.flags |= 67108866), m;
    }
    function c(m, o, v, p) {
      return o === null || o.tag !== 6 ? (o = Ti(v, m.mode, p), o.return = m, o) : (o = e(o, v), o.return = m, o);
    }
    function s(m, o, v, p) {
      var j = v.type;
      return j === Gl ? b(m, o, v.props.children, p, v.key) : o !== null && (o.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Ll && Na(j) === o.type) ? (o = e(o, v.props), Ku(o, v), o.return = m, o) : (o = Ze(v.type, v.key, v.props, null, m.mode, p), Ku(o, v), o.return = m, o);
    }
    function h(m, o, v, p) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== v.containerInfo || o.stateNode.implementation !== v.implementation ? (o = zi(v, m.mode, p), o.return = m, o) : (o = e(o, v.children || []), o.return = m, o);
    }
    function b(m, o, v, p, j) {
      return o === null || o.tag !== 7 ? (o = Oa(v, m.mode, p, j), o.return = m, o) : (o = e(o, v), o.return = m, o);
    }
    function A(m, o, v) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint") return o = Ti("" + o, m.mode, v), o.return = m, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Ol:
            return v = Ze(o.type, o.key, o.props, null, m.mode, v), Ku(v, o), v.return = m, v;
          case Yl:
            return o = zi(o, m.mode, v), o.return = m, o;
          case Ll:
            return o = Na(o), A(m, o, v);
        }
        if (D(o) || Mt(o)) return o = Oa(o, m.mode, v, null), o.return = m, o;
        if (typeof o.then == "function") return A(m, We(o), v);
        if (o.$$typeof === hl) return A(m, Ve(m, o), v);
        $e(m, o);
      }
      return null;
    }
    function g(m, o, v, p) {
      var j = o !== null ? o.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return j !== null ? null : c(m, o, "" + v, p);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Ol:
            return v.key === j ? s(m, o, v, p) : null;
          case Yl:
            return v.key === j ? h(m, o, v, p) : null;
          case Ll:
            return v = Na(v), g(m, o, v, p);
        }
        if (D(v) || Mt(v)) return j !== null ? null : b(m, o, v, p, null);
        if (typeof v.then == "function") return g(m, o, We(v), p);
        if (v.$$typeof === hl) return g(m, o, Ve(m, v), p);
        $e(m, v);
      }
      return null;
    }
    function S(m, o, v, p, j) {
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint") return m = m.get(v) || null, c(o, m, "" + p, j);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Ol:
            return m = m.get(p.key === null ? v : p.key) || null, s(o, m, p, j);
          case Yl:
            return m = m.get(p.key === null ? v : p.key) || null, h(o, m, p, j);
          case Ll:
            return p = Na(p), S(m, o, v, p, j);
        }
        if (D(p) || Mt(p)) return m = m.get(v) || null, b(o, m, p, j, null);
        if (typeof p.then == "function") return S(m, o, v, We(p), j);
        if (p.$$typeof === hl) return S(m, o, v, Ve(o, p), j);
        $e(o, p);
      }
      return null;
    }
    function C(m, o, v, p) {
      for (var j = null, tl = null, N = o, x = o = 0, k = null; N !== null && x < v.length; x++) {
        N.index > x ? (k = N, N = null) : k = N.sibling;
        var al = g(m, N, v[x], p);
        if (al === null) {
          N === null && (N = k);
          break;
        }
        l && N && al.alternate === null && t(m, N), o = n(al, o, x), tl === null ? j = al : tl.sibling = al, tl = al, N = k;
      }
      if (x === v.length) return a(m, N), P && jt(m, x), j;
      if (N === null) {
        for (; x < v.length; x++) N = A(m, v[x], p), N !== null && (o = n(N, o, x), tl === null ? j = N : tl.sibling = N, tl = N);
        return P && jt(m, x), j;
      }
      for (N = u(N); x < v.length; x++) k = S(N, m, x, v[x], p), k !== null && (l && k.alternate !== null && N.delete(k.key === null ? x : k.key), o = n(k, o, x), tl === null ? j = k : tl.sibling = k, tl = k);
      return l && N.forEach(function(ra) {
        return t(m, ra);
      }), P && jt(m, x), j;
    }
    function G(m, o, v, p) {
      if (v == null) throw Error(y(151));
      for (var j = null, tl = null, N = o, x = o = 0, k = null, al = v.next(); N !== null && !al.done; x++, al = v.next()) {
        N.index > x ? (k = N, N = null) : k = N.sibling;
        var ra = g(m, N, al.value, p);
        if (ra === null) {
          N === null && (N = k);
          break;
        }
        l && N && ra.alternate === null && t(m, N), o = n(ra, o, x), tl === null ? j = ra : tl.sibling = ra, tl = ra, N = k;
      }
      if (al.done) return a(m, N), P && jt(m, x), j;
      if (N === null) {
        for (; !al.done; x++, al = v.next()) al = A(m, al.value, p), al !== null && (o = n(al, o, x), tl === null ? j = al : tl.sibling = al, tl = al);
        return P && jt(m, x), j;
      }
      for (N = u(N); !al.done; x++, al = v.next()) al = S(N, m, x, al.value, p), al !== null && (l && al.alternate !== null && N.delete(al.key === null ? x : al.key), o = n(al, o, x), tl === null ? j = al : tl.sibling = al, tl = al);
      return l && N.forEach(function(Cm) {
        return t(m, Cm);
      }), P && jt(m, x), j;
    }
    function ol(m, o, v, p) {
      if (typeof v == "object" && v !== null && v.type === Gl && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Ol:
            l: {
              for (var j = v.key; o !== null; ) {
                if (o.key === j) {
                  if (j = v.type, j === Gl) {
                    if (o.tag === 7) {
                      a(m, o.sibling), p = e(o, v.props.children), p.return = m, m = p;
                      break l;
                    }
                  } else if (o.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Ll && Na(j) === o.type) {
                    a(m, o.sibling), p = e(o, v.props), Ku(p, v), p.return = m, m = p;
                    break l;
                  }
                  a(m, o);
                  break;
                } else t(m, o);
                o = o.sibling;
              }
              v.type === Gl ? (p = Oa(v.props.children, m.mode, p, v.key), p.return = m, m = p) : (p = Ze(v.type, v.key, v.props, null, m.mode, p), Ku(p, v), p.return = m, m = p);
            }
            return i(m);
          case Yl:
            l: {
              for (j = v.key; o !== null; ) {
                if (o.key === j) if (o.tag === 4 && o.stateNode.containerInfo === v.containerInfo && o.stateNode.implementation === v.implementation) {
                  a(m, o.sibling), p = e(o, v.children || []), p.return = m, m = p;
                  break l;
                } else {
                  a(m, o);
                  break;
                }
                else t(m, o);
                o = o.sibling;
              }
              p = zi(v, m.mode, p), p.return = m, m = p;
            }
            return i(m);
          case Ll:
            return v = Na(v), ol(m, o, v, p);
        }
        if (D(v)) return C(m, o, v, p);
        if (Mt(v)) {
          if (j = Mt(v), typeof j != "function") throw Error(y(150));
          return v = j.call(v), G(m, o, v, p);
        }
        if (typeof v.then == "function") return ol(m, o, We(v), p);
        if (v.$$typeof === hl) return ol(m, o, Ve(m, v), p);
        $e(m, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, o !== null && o.tag === 6 ? (a(m, o.sibling), p = e(o, v), p.return = m, m = p) : (a(m, o), p = Ti(v, m.mode, p), p.return = m, m = p), i(m)) : a(m, o);
    }
    return function(m, o, v, p) {
      try {
        Vu = 0;
        var j = ol(m, o, v, p);
        return fu = null, j;
      } catch (N) {
        if (N === cu || N === Je) throw N;
        var tl = et(29, N, null, m.mode);
        return tl.lanes = p, tl.return = m, tl;
      }
    };
  }
  var Ra = Es(!0), _s = Es(!1), ua = !1;
  function ji(l) {
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
  function Bi(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function ja(l) {
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
    if (u = u.shared, (el & 2) !== 0) {
      var e = u.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), u.pending = t, t = Xe(l), fs(l, null, a), t;
    }
    return Qe(l, u, t, a), Xe(l);
  }
  function Ju(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, hf(l, a);
    }
  }
  function Yi(l, t) {
    var a = l.updateQueue, u = l.alternate;
    if (u !== null && (u = u.updateQueue, a === u)) {
      var e = null, n = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = i : n = n.next = i, a = a.next;
        } while (a !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks
      }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
  }
  var Gi = !1;
  function wu() {
    if (Gi) {
      var l = iu;
      if (l !== null) throw l;
    }
  }
  function Wu(l, t, a, u) {
    Gi = !1;
    var e = l.updateQueue;
    ua = !1;
    var n = e.firstBaseUpdate, i = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var s = c, h = s.next;
      s.next = null, i === null ? n = h : i.next = h, i = s;
      var b = l.alternate;
      b !== null && (b = b.updateQueue, c = b.lastBaseUpdate, c !== i && (c === null ? b.firstBaseUpdate = h : c.next = h, b.lastBaseUpdate = s));
    }
    if (n !== null) {
      var A = e.baseState;
      i = 0, b = h = s = null, c = n;
      do {
        var g = c.lane & -536870913, S = g !== c.lane;
        if (S ? (F & g) === g : (u & g) === g) {
          g !== 0 && g === nu && (Gi = !0), b !== null && (b = b.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var C = l, G = c;
            g = t;
            var ol = a;
            switch (G.tag) {
              case 1:
                if (C = G.payload, typeof C == "function") {
                  A = C.call(ol, A, g);
                  break l;
                }
                A = C;
                break l;
              case 3:
                C.flags = C.flags & -65537 | 128;
              case 0:
                if (C = G.payload, g = typeof C == "function" ? C.call(ol, A, g) : C, g == null) break l;
                A = q({}, A, g);
                break l;
              case 2:
                ua = !0;
            }
          }
          g = c.callback, g !== null && (l.flags |= 64, S && (l.flags |= 8192), S = e.callbacks, S === null ? e.callbacks = [g] : S.push(g));
        } else S = {
          lane: g,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        }, b === null ? (h = b = S, s = A) : b = b.next = S, i |= g;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null) break;
          S = c, c = S.next, S.next = null, e.lastBaseUpdate = S, e.shared.pending = null;
        }
      } while (!0);
      b === null && (s = A), e.baseState = s, e.firstBaseUpdate = h, e.lastBaseUpdate = b, n === null && (e.shared.lanes = 0), fa |= i, l.lanes = i, l.memoizedState = A;
    }
  }
  function Ms(l, t) {
    if (typeof l != "function") throw Error(y(191, l));
    l.call(t);
  }
  function Os(l, t) {
    var a = l.callbacks;
    if (a !== null) for (l.callbacks = null, l = 0; l < a.length; l++) Ms(a[l], t);
  }
  var su = d(null), Fe = d(0);
  function Ds(l, t) {
    l = Jt, _(Fe, l), _(su, t), Jt = l | t.baseLanes;
  }
  function Qi() {
    _(Fe, Jt), _(su, su.current);
  }
  function Xi() {
    Jt = Fe.current, T(su), T(Fe);
  }
  var nt = d(null), St = null;
  function ea(l) {
    var t = l.alternate;
    _(pl, pl.current & 1), _(nt, l), St === null && (t === null || su.current !== null || t.memoizedState !== null) && (St = l);
  }
  function Zi(l) {
    _(pl, pl.current), _(nt, l), St === null && (St = l);
  }
  function Us(l) {
    l.tag === 22 ? (_(pl, pl.current), _(nt, l), St === null && (St = l)) : na(l);
  }
  function na() {
    _(pl, pl.current), _(nt, nt.current);
  }
  function it(l) {
    T(nt), St === l && (St = null), T(pl);
  }
  var pl = d(0);
  function ke(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Jc(a) || wc(a))) return t;
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
  var Gt = 0, L = null, fl = null, El = null, Ie = !1, ou = !1, Ya = !1, Pe = 0, $u = 0, du = null, S1 = 0;
  function Sl() {
    throw Error(y(321));
  }
  function Li(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++) if (!ut(l[a], t[a])) return !1;
    return !0;
  }
  function xi(l, t, a, u, e, n) {
    return Gt = n, L = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, E.H = l === null || l.memoizedState === null ? m0 : ec, Ya = !1, n = a(u, e), Ya = !1, ou && (n = Cs(t, a, u, e)), Hs(l), n;
  }
  function Hs(l) {
    E.H = Iu;
    var t = fl !== null && fl.next !== null;
    if (Gt = 0, El = fl = L = null, Ie = !1, $u = 0, du = null, t) throw Error(y(300));
    l === null || _l || (l = l.dependencies, l !== null && xe(l) && (_l = !0));
  }
  function Cs(l, t, a, u) {
    L = l;
    var e = 0;
    do {
      if (ou && (du = null), $u = 0, ou = !1, 25 <= e) throw Error(y(301));
      if (e += 1, El = fl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      E.H = y0, n = t(a, u);
    } while (ou);
    return n;
  }
  function r1() {
    var l = E.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Fu(t) : t, l = l.useState()[0], (fl !== null ? fl.memoizedState : null) !== l && (L.flags |= 1024), t;
  }
  function Vi() {
    var l = Pe !== 0;
    return Pe = 0, l;
  }
  function Ki(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function Ji(l) {
    if (Ie) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Ie = !1;
    }
    Gt = 0, El = fl = L = null, ou = !1, $u = Pe = 0, du = null;
  }
  function Xl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return El === null ? L.memoizedState = El = l : El = El.next = l, El;
  }
  function Al() {
    if (fl === null) {
      var l = L.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = fl.next;
    var t = El === null ? L.memoizedState : El.next;
    if (t !== null) El = t, fl = l;
    else {
      if (l === null)
        throw L.alternate === null ? Error(y(467)) : Error(y(310));
      fl = l, l = {
        memoizedState: fl.memoizedState,
        baseState: fl.baseState,
        baseQueue: fl.baseQueue,
        queue: fl.queue,
        next: null
      }, El === null ? L.memoizedState = El = l : El = El.next = l;
    }
    return El;
  }
  function ln() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function Fu(l) {
    var t = $u;
    return $u += 1, du === null && (du = []), l = As(du, l, t), t = L, (El === null ? t.memoizedState : El.next) === null && (t = t.alternate, E.H = t === null || t.memoizedState === null ? m0 : ec), l;
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Fu(l);
      if (l.$$typeof === hl) return ql(l);
    }
    throw Error(y(438, String(l)));
  }
  function wi(l) {
    var t = null, a = L.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var u = L.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
        data: u.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t ??= {
      data: [],
      index: 0
    }, a === null && (a = ln(), L.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0) for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = ba;
    return t.index++, a;
  }
  function Qt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function an(l) {
    return Wi(Al(), fl, l);
  }
  function Wi(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(y(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue, n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var i = e.next;
        e.next = n.next, n.next = i;
      }
      t.baseQueue = e = n, u.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = i = null, s = null, h = t, b = !1;
      do {
        var A = h.lane & -536870913;
        if (A !== h.lane ? (F & A) === A : (Gt & A) === A) {
          var g = h.revertLane;
          if (g === 0) s !== null && (s = s.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          }), A === nu && (b = !0);
          else if ((Gt & g) === g) {
            h = h.next, g === nu && (b = !0);
            continue;
          } else A = {
            lane: 0,
            revertLane: h.revertLane,
            gesture: null,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          }, s === null ? (c = s = A, i = n) : s = s.next = A, L.lanes |= g, fa |= g;
          A = h.action, Ya && a(n, A), n = h.hasEagerState ? h.eagerState : a(n, A);
        } else g = {
          lane: A,
          revertLane: h.revertLane,
          gesture: h.gesture,
          action: h.action,
          hasEagerState: h.hasEagerState,
          eagerState: h.eagerState,
          next: null
        }, s === null ? (c = s = g, i = n) : s = s.next = g, L.lanes |= A, fa |= A;
        h = h.next;
      } while (h !== null && h !== t);
      if (s === null ? i = n : s.next = c, !ut(n, l.memoizedState) && (_l = !0, b && (a = iu, a !== null))) throw a;
      l.memoizedState = n, l.baseState = i, l.baseQueue = s, u.lastRenderedState = n;
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function $i(l) {
    var t = Al(), a = t.queue;
    if (a === null) throw Error(y(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch, e = a.pending, n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var i = e = e.next;
      do
        n = l(n, i.action), i = i.next;
      while (i !== e);
      ut(n, t.memoizedState) || (_l = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, u];
  }
  function Ns(l, t, a) {
    var u = L, e = Al(), n = P;
    if (n) {
      if (a === void 0) throw Error(y(407));
      a = a();
    } else a = t();
    var i = !ut((fl || e).memoizedState, a);
    if (i && (e.memoizedState = a, _l = !0), e = e.queue, Ii(js.bind(null, u, e, l), [l]), e.getSnapshot !== t || i || El !== null && El.memoizedState.tag & 1) {
      if (u.flags |= 2048, mu(9, { destroy: void 0 }, Rs.bind(null, u, e, a, t), null), dl === null) throw Error(y(349));
      n || (Gt & 127) !== 0 || qs(u, t, a);
    }
    return a;
  }
  function qs(l, t, a) {
    l.flags |= 16384, l = {
      getSnapshot: t,
      value: a
    }, t = L.updateQueue, t === null ? (t = ln(), L.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function Rs(l, t, a, u) {
    t.value = a, t.getSnapshot = u, Bs(t) && Ys(l);
  }
  function js(l, t, a) {
    return a(function() {
      Bs(t) && Ys(l);
    });
  }
  function Bs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !ut(l, a);
    } catch {
      return !0;
    }
  }
  function Ys(l) {
    var t = Ma(l, 2);
    t !== null && $l(t, l, 2);
  }
  function Fi(l) {
    var t = Xl();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), Ya) {
        Ft(!0);
        try {
          a();
        } finally {
          Ft(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qt,
      lastRenderedState: l
    }, t;
  }
  function Gs(l, t, a, u) {
    return l.baseState = a, Wi(l, fl, typeof u == "function" ? u : Qt);
  }
  function b1(l, t, a, u, e) {
    if (nn(l)) throw Error(y(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
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
      E.T !== null ? a(!0) : n.isTransition = !1, u(n), a = t.pending, a === null ? (n.next = t.pending = n, Qs(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function Qs(l, t) {
    var a = t.action, u = t.payload, e = l.state;
    if (t.isTransition) {
      var n = E.T, i = {};
      E.T = i;
      try {
        var c = a(e, u), s = E.S;
        s !== null && s(i, c), Xs(l, t, c);
      } catch (h) {
        ki(l, t, h);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), E.T = n;
      }
    } else try {
      n = a(e, u), Xs(l, t, n);
    } catch (h) {
      ki(l, t, h);
    }
  }
  function Xs(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(u) {
      Zs(l, t, u);
    }, function(u) {
      return ki(l, t, u);
    }) : Zs(l, t, a);
  }
  function Zs(l, t, a) {
    t.status = "fulfilled", t.value = a, Ls(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, Qs(l, a)));
  }
  function ki(l, t, a) {
    var u = l.pending;
    if (l.pending = null, u !== null) {
      u = u.next;
      do
        t.status = "rejected", t.reason = a, Ls(t), t = t.next;
      while (t !== u);
    }
    l.action = null;
  }
  function Ls(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function xs(l, t) {
    return t;
  }
  function Vs(l, t) {
    if (P) {
      var a = dl.formState;
      if (a !== null) {
        l: {
          var u = L;
          if (P) {
            if (yl) {
              t: {
                for (var e = yl, n = gt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = bt(e.nextSibling), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                yl = bt(e.nextSibling), u = e.data === "F!";
                break l;
              }
            }
            ta(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return a = Xl(), a.memoizedState = a.baseState = t, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xs,
      lastRenderedState: t
    }, a.queue = u, a = s0.bind(null, L, u), u.dispatch = a, u = Fi(!1), n = uc.bind(null, L, !1, u.queue), u = Xl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, u.queue = e, a = b1.bind(null, L, e, n, a), e.dispatch = a, u.memoizedState = l, [
      t,
      a,
      !1
    ];
  }
  function Ks(l) {
    return Js(Al(), fl, l);
  }
  function Js(l, t, a) {
    if (t = Wi(l, t, xs)[0], l = an(Qt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var u = Fu(t);
    } catch (i) {
      throw i === cu ? Je : i;
    }
    else u = t;
    t = Al();
    var e = t.queue, n = e.dispatch;
    return a !== t.memoizedState && (L.flags |= 2048, mu(9, { destroy: void 0 }, p1.bind(null, e, a), null)), [
      u,
      n,
      l
    ];
  }
  function p1(l, t) {
    l.action = t;
  }
  function ws(l) {
    var t = Al(), a = fl;
    if (a !== null) return Js(t, a, l);
    Al(), t = t.memoizedState, a = Al();
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
    }, t = L.updateQueue, t === null && (t = ln(), L.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l;
  }
  function Ws() {
    return Al().memoizedState;
  }
  function un(l, t, a, u) {
    var e = Xl();
    L.flags |= l, e.memoizedState = mu(1 | t, { destroy: void 0 }, a, u === void 0 ? null : u);
  }
  function en(l, t, a, u) {
    var e = Al();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    fl !== null && u !== null && Li(u, fl.memoizedState.deps) ? e.memoizedState = mu(t, n, a, u) : (L.flags |= l, e.memoizedState = mu(1 | t, n, a, u));
  }
  function $s(l, t) {
    un(8390656, 8, l, t);
  }
  function Ii(l, t) {
    en(2048, 8, l, t);
  }
  function A1(l) {
    L.flags |= 4;
    var t = L.updateQueue;
    if (t === null) t = ln(), L.updateQueue = t, t.events = [l];
    else {
      var a = t.events;
      a === null ? t.events = [l] : a.push(l);
    }
  }
  function Fs(l) {
    var t = Al().memoizedState;
    return A1({
      ref: t,
      nextImpl: l
    }), function() {
      if ((el & 2) !== 0) throw Error(y(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function ks(l, t) {
    return en(4, 2, l, t);
  }
  function Is(l, t) {
    return en(4, 4, l, t);
  }
  function Ps(l, t) {
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
  function l0(l, t, a) {
    a = a != null ? a.concat([l]) : null, en(4, 4, Ps.bind(null, t, l), a);
  }
  function Pi() {
  }
  function t0(l, t) {
    var a = Al();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && Li(t, u[1]) ? u[0] : (a.memoizedState = [l, t], l);
  }
  function a0(l, t) {
    var a = Al();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && Li(t, u[1])) return u[0];
    if (u = l(), Ya) {
      Ft(!0);
      try {
        l();
      } finally {
        Ft(!1);
      }
    }
    return a.memoizedState = [u, t], u;
  }
  function lc(l, t, a) {
    return a === void 0 || (Gt & 1073741824) !== 0 && (F & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = lo(), L.lanes |= l, fa |= l, a);
  }
  function u0(l, t, a, u) {
    return ut(a, t) ? a : su.current !== null ? (l = lc(l, a, u), ut(l, t) || (_l = !0), l) : (Gt & 42) === 0 || (Gt & 1073741824) !== 0 && (F & 261930) === 0 ? (_l = !0, l.memoizedState = a) : (l = lo(), L.lanes |= l, fa |= l, t);
  }
  function e0(l, t, a, u, e) {
    var n = O.p;
    O.p = n !== 0 && 8 > n ? n : 8;
    var i = E.T, c = {};
    E.T = c, uc(l, !1, t, a);
    try {
      var s = e(), h = E.S;
      h !== null && h(c, s), s !== null && typeof s == "object" && typeof s.then == "function" ? ku(l, t, g1(s, u), rt(l)) : ku(l, t, u, rt(l));
    } catch (b) {
      ku(l, t, {
        then: function() {
        },
        status: "rejected",
        reason: b
      }, rt());
    } finally {
      O.p = n, i !== null && c.types !== null && (i.types = c.types), E.T = i;
    }
  }
  function T1() {
  }
  function tc(l, t, a, u) {
    if (l.tag !== 5) throw Error(y(476));
    var e = n0(l).queue;
    e0(l, e, t, ul, a === null ? T1 : function() {
      return i0(l), a(u);
    });
  }
  function n0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ul,
      baseState: ul,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qt,
        lastRenderedState: ul
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
        lastRenderedReducer: Qt,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function i0(l) {
    var t = n0(l);
    t.next === null && (t = l.alternate.memoizedState), ku(l, t.next.queue, {}, rt());
  }
  function ac() {
    return ql(ve);
  }
  function c0() {
    return Al().memoizedState;
  }
  function f0() {
    return Al().memoizedState;
  }
  function z1(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = rt();
          l = ja(a);
          var u = Ba(t, l, a);
          u !== null && ($l(u, t, a), Ju(u, t, a)), t = { cache: Ci() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function E1(l, t, a) {
    var u = rt();
    a = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l) ? o0(t, a) : (a = pi(l, t, a, u), a !== null && ($l(a, l, u), d0(a, t, u)));
  }
  function s0(l, t, a) {
    ku(l, t, a, rt());
  }
  function ku(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (nn(l)) o0(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
        var i = t.lastRenderedState, c = n(i, a);
        if (e.hasEagerState = !0, e.eagerState = c, ut(c, i)) return Qe(l, t, e, 0), dl === null && Ge(), !1;
      } catch {
      }
      if (a = pi(l, t, e, u), a !== null) return $l(a, l, u), d0(a, t, u), !0;
    }
    return !1;
  }
  function uc(l, t, a, u) {
    if (u = {
      lane: 2,
      revertLane: jc(),
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l)) {
      if (t) throw Error(y(479));
    } else t = pi(l, a, u, 2), t !== null && $l(t, l, 2);
  }
  function nn(l) {
    var t = l.alternate;
    return l === L || t !== null && t === L;
  }
  function o0(l, t) {
    ou = Ie = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function d0(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, hf(l, a);
    }
  }
  var Iu = {
    readContext: ql,
    use: tn,
    useCallback: Sl,
    useContext: Sl,
    useEffect: Sl,
    useImperativeHandle: Sl,
    useLayoutEffect: Sl,
    useInsertionEffect: Sl,
    useMemo: Sl,
    useReducer: Sl,
    useRef: Sl,
    useState: Sl,
    useDebugValue: Sl,
    useDeferredValue: Sl,
    useTransition: Sl,
    useSyncExternalStore: Sl,
    useId: Sl,
    useHostTransitionStatus: Sl,
    useFormState: Sl,
    useActionState: Sl,
    useOptimistic: Sl,
    useMemoCache: Sl,
    useCacheRefresh: Sl
  };
  Iu.useEffectEvent = Sl;
  var m0 = {
    readContext: ql,
    use: tn,
    useCallback: function(l, t) {
      return Xl().memoizedState = [l, t === void 0 ? null : t], l;
    },
    useContext: ql,
    useEffect: $s,
    useImperativeHandle: function(l, t, a) {
      a = a != null ? a.concat([l]) : null, un(4194308, 4, Ps.bind(null, t, l), a);
    },
    useLayoutEffect: function(l, t) {
      return un(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      un(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var a = Xl();
      t = t === void 0 ? null : t;
      var u = l();
      if (Ya) {
        Ft(!0);
        try {
          l();
        } finally {
          Ft(!1);
        }
      }
      return a.memoizedState = [u, t], u;
    },
    useReducer: function(l, t, a) {
      var u = Xl();
      if (a !== void 0) {
        var e = a(t);
        if (Ya) {
          Ft(!0);
          try {
            a(t);
          } finally {
            Ft(!1);
          }
        }
      } else e = t;
      return u.memoizedState = u.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, u.queue = l, l = l.dispatch = E1.bind(null, L, l), [u.memoizedState, l];
    },
    useRef: function(l) {
      var t = Xl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Fi(l);
      var t = l.queue, a = s0.bind(null, L, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: Pi,
    useDeferredValue: function(l, t) {
      return lc(Xl(), l, t);
    },
    useTransition: function() {
      var l = Fi(!1);
      return l = e0.bind(null, L, l.queue, !0, !1), Xl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var u = L, e = Xl();
      if (P) {
        if (a === void 0) throw Error(y(407));
        a = a();
      } else {
        if (a = t(), dl === null) throw Error(y(349));
        (F & 127) !== 0 || qs(u, t, a);
      }
      e.memoizedState = a;
      var n = {
        value: a,
        getSnapshot: t
      };
      return e.queue = n, $s(js.bind(null, u, n, l), [l]), u.flags |= 2048, mu(9, { destroy: void 0 }, Rs.bind(null, u, n, a, t), null), a;
    },
    useId: function() {
      var l = Xl(), t = dl.identifierPrefix;
      if (P) {
        var a = Dt, u = Ot;
        a = (u & ~(1 << 32 - at(u) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Pe++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else a = S1++, t = "_" + t + "r_" + a.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: ac,
    useFormState: Vs,
    useActionState: Vs,
    useOptimistic: function(l) {
      var t = Xl();
      t.memoizedState = t.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = uc.bind(null, L, !0, a), a.dispatch = t, [l, t];
    },
    useMemoCache: wi,
    useCacheRefresh: function() {
      return Xl().memoizedState = z1.bind(null, L);
    },
    useEffectEvent: function(l) {
      var t = Xl(), a = { impl: l };
      return t.memoizedState = a, function() {
        if ((el & 2) !== 0) throw Error(y(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, ec = {
    readContext: ql,
    use: tn,
    useCallback: t0,
    useContext: ql,
    useEffect: Ii,
    useImperativeHandle: l0,
    useInsertionEffect: ks,
    useLayoutEffect: Is,
    useMemo: a0,
    useReducer: an,
    useRef: Ws,
    useState: function() {
      return an(Qt);
    },
    useDebugValue: Pi,
    useDeferredValue: function(l, t) {
      return u0(Al(), fl.memoizedState, l, t);
    },
    useTransition: function() {
      var l = an(Qt)[0], t = Al().memoizedState;
      return [typeof l == "boolean" ? l : Fu(l), t];
    },
    useSyncExternalStore: Ns,
    useId: c0,
    useHostTransitionStatus: ac,
    useFormState: Ks,
    useActionState: Ks,
    useOptimistic: function(l, t) {
      return Gs(Al(), fl, l, t);
    },
    useMemoCache: wi,
    useCacheRefresh: f0
  };
  ec.useEffectEvent = Fs;
  var y0 = {
    readContext: ql,
    use: tn,
    useCallback: t0,
    useContext: ql,
    useEffect: Ii,
    useImperativeHandle: l0,
    useInsertionEffect: ks,
    useLayoutEffect: Is,
    useMemo: a0,
    useReducer: $i,
    useRef: Ws,
    useState: function() {
      return $i(Qt);
    },
    useDebugValue: Pi,
    useDeferredValue: function(l, t) {
      var a = Al();
      return fl === null ? lc(a, l, t) : u0(a, fl.memoizedState, l, t);
    },
    useTransition: function() {
      var l = $i(Qt)[0], t = Al().memoizedState;
      return [typeof l == "boolean" ? l : Fu(l), t];
    },
    useSyncExternalStore: Ns,
    useId: c0,
    useHostTransitionStatus: ac,
    useFormState: ws,
    useActionState: ws,
    useOptimistic: function(l, t) {
      var a = Al();
      return fl !== null ? Gs(a, fl, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: wi,
    useCacheRefresh: f0
  };
  y0.useEffectEvent = Fs;
  function nc(l, t, a, u) {
    t = l.memoizedState, a = a(u, t), a = a == null ? t : q({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var ic = {
    enqueueSetState: function(l, t, a) {
      l = l._reactInternals;
      var u = rt(), e = ja(u);
      e.payload = t, a != null && (e.callback = a), t = Ba(l, e, u), t !== null && ($l(t, l, u), Ju(t, l, u));
    },
    enqueueReplaceState: function(l, t, a) {
      l = l._reactInternals;
      var u = rt(), e = ja(u);
      e.tag = 1, e.payload = t, a != null && (e.callback = a), t = Ba(l, e, u), t !== null && ($l(t, l, u), Ju(t, l, u));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var a = rt(), u = ja(a);
      u.tag = 2, t != null && (u.callback = t), t = Ba(l, u, a), t !== null && ($l(t, l, a), Ju(t, l, a));
    }
  };
  function v0(l, t, a, u, e, n, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, i) : t.prototype && t.prototype.isPureReactComponent ? !Gu(a, u) || !Gu(e, n) : !0;
  }
  function h0(l, t, a, u) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && ic.enqueueReplaceState(t, t.state, null);
  }
  function Ga(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t) u !== "ref" && (a[u] = t[u]);
    }
    if (l = l.defaultProps) {
      a === t && (a = q({}, a));
      for (var e in l) a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  function _1(l) {
    Ye(l);
  }
  function M1(l) {
    console.error(l);
  }
  function O1(l) {
    Ye(l);
  }
  function cn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function g0(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function cc(l, t, a) {
    return a = ja(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      cn(l, t);
    }, a;
  }
  function S0(l) {
    return l = ja(l), l.tag = 3, l;
  }
  function r0(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        g0(t, a, u);
      };
    }
    var i = a.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      g0(t, a, u), typeof e != "function" && (sa === null ? sa = /* @__PURE__ */ new Set([this]) : sa.add(this));
      var c = u.stack;
      this.componentDidCatch(u.value, { componentStack: c !== null ? c : "" });
    });
  }
  function D1(l, t, a, u, e) {
    if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (t = a.alternate, t !== null && eu(t, a, e, !0), a = nt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return St === null ? bn() : a.alternate === null && rl === 0 && (rl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, u === we ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), Nc(l, u, e)), !1;
          case 22:
            return a.flags |= 65536, u === we ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), Nc(l, u, e)), !1;
        }
        throw Error(y(435, a.tag));
      }
      return Nc(l, u, e), bn(), !1;
    }
    if (P) return t = nt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, u !== Mi && (l = Error(y(422), { cause: u }), Zu(yt(l, a)))) : (u !== Mi && (t = Error(y(423), { cause: u }), Zu(yt(t, a))), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = yt(u, a), e = cc(l.stateNode, u, e), Yi(l, e), rl !== 4 && (rl = 2)), !1;
    var n = Error(y(520), { cause: u });
    if (n = yt(n, a), ie === null ? ie = [n] : ie.push(n), rl !== 4 && (rl = 2), t === null) return !0;
    u = yt(u, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = e & -e, a.lanes |= l, l = cc(a.stateNode, u, l), Yi(a, l), !1;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (sa === null || !sa.has(n)))) return a.flags |= 65536, e &= -e, a.lanes |= e, e = S0(e), r0(e, l, a, u), Yi(a, e), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var fc = Error(y(461)), _l = !1;
  function Rl(l, t, a, u) {
    t.child = l === null ? _s(t, null, a, u) : Ra(t, l.child, a, u);
  }
  function b0(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var i = {};
      for (var c in u) c !== "ref" && (i[c] = u[c]);
    } else i = u;
    return Ha(t), u = xi(l, t, a, i, n, e), c = Vi(), l !== null && !_l ? (Ki(l, t, e), Xt(l, t, e)) : (P && c && Ei(t), t.flags |= 1, Rl(l, t, u, e), t.child);
  }
  function p0(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !Ai(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, A0(l, t, n, u, e)) : (l = Ze(a.type, null, u, t, t.mode, e), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !gc(l, e)) {
      var i = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Gu, a(i, u) && l.ref === t.ref) return Xt(l, t, e);
    }
    return t.flags |= 1, l = Rt(n, u), l.ref = t.ref, l.return = t, t.child = l;
  }
  function A0(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Gu(n, u) && l.ref === t.ref) if (_l = !1, t.pendingProps = u = n, gc(l, e)) (l.flags & 131072) !== 0 && (_l = !0);
      else return t.lanes = l.lanes, Xt(l, t, e);
    }
    return sc(l, t, a, u, e);
  }
  function T0(l, t, a, u) {
    var e = u.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), u.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | a : a, l !== null) {
          for (u = t.child = l.child, e = 0; u !== null; ) e = e | u.lanes | u.childLanes, u = u.sibling;
          u = e & ~n;
        } else u = 0, t.child = null;
        return z0(l, t, n, a, u);
      }
      if ((a & 536870912) !== 0) t.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, l !== null && Ke(t, n !== null ? n.cachePool : null), n !== null ? Ds(t, n) : Qi(), Us(t);
      else return u = t.lanes = 536870912, z0(l, t, n !== null ? n.baseLanes | a : a, a, u);
    } else n !== null ? (Ke(t, n.cachePool), Ds(t, n), na(t), t.memoizedState = null) : (l !== null && Ke(t, null), Qi(), na(t));
    return Rl(l, t, e, a), t.child;
  }
  function Pu(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function z0(l, t, a, u, e) {
    var n = qi();
    return n = n === null ? null : {
      parent: zl._currentValue,
      pool: n
    }, t.memoizedState = {
      baseLanes: a,
      cachePool: n
    }, l !== null && Ke(t, null), Qi(), Us(t), l !== null && eu(l, t, u, !0), t.childLanes = e, null;
  }
  function fn(l, t) {
    return t = on({
      mode: t.mode,
      children: t.children
    }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function E0(l, t, a) {
    return Ra(t, l.child, null, a), l = fn(t, t.pendingProps), l.flags |= 2, it(t), t.memoizedState = null, l;
  }
  function U1(l, t, a) {
    var u = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (P) {
        if (u.mode === "hidden") return l = fn(t, u), t.lanes = 536870912, Pu(null, l);
        if (Zi(t), (l = yl) ? (l = Go(l, gt), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: Pt !== null ? {
            id: Ot,
            overflow: Dt
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = os(l), a.return = t, t.child = a, Nl = t, yl = null)) : l = null, l === null) throw ta(t);
        return t.lanes = 536870912, null;
      }
      return fn(t, u);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (Zi(t), e) if (t.flags & 256) t.flags &= -257, t = E0(l, t, a);
      else if (t.memoizedState !== null) t.child = l.child, t.flags |= 128, t = null;
      else throw Error(y(558));
      else if (_l || eu(l, t, a, !1), e = (a & l.childLanes) !== 0, _l || e) {
        if (u = dl, u !== null && (i = gf(u, a), i !== 0 && i !== n.retryLane)) throw n.retryLane = i, Ma(l, i), $l(u, l, i), fc;
        bn(), t = E0(l, t, a);
      } else l = n.treeContext, yl = bt(i.nextSibling), Nl = t, P = !0, la = null, gt = !1, l !== null && ys(t, l), t = fn(t, u), t.flags |= 4096;
      return t;
    }
    return l = Rt(l.child, {
      mode: u.mode,
      children: u.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function sn(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(y(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function sc(l, t, a, u, e) {
    return Ha(t), a = xi(l, t, a, u, void 0, e), u = Vi(), l !== null && !_l ? (Ki(l, t, e), Xt(l, t, e)) : (P && u && Ei(t), t.flags |= 1, Rl(l, t, a, e), t.child);
  }
  function _0(l, t, a, u, e, n) {
    return Ha(t), t.updateQueue = null, a = Cs(t, u, a, e), Hs(l), u = Vi(), l !== null && !_l ? (Ki(l, t, n), Xt(l, t, n)) : (P && u && Ei(t), t.flags |= 1, Rl(l, t, a, n), t.child);
  }
  function M0(l, t, a, u, e) {
    if (Ha(t), t.stateNode === null) {
      var n = lu, i = a.contextType;
      typeof i == "object" && i !== null && (n = ql(i)), n = new a(u, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = ic, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = u, n.state = t.memoizedState, n.refs = {}, ji(t), i = a.contextType, n.context = typeof i == "object" && i !== null ? ql(i) : lu, n.state = t.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (nc(t, a, i, u), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && ic.enqueueReplaceState(n, n.state, null), Wu(t, u, n, e), wu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, s = Ga(a, c);
      n.props = s;
      var h = n.context, b = a.contextType;
      i = lu, typeof b == "object" && b !== null && (i = ql(b));
      var A = a.getDerivedStateFromProps;
      b = typeof A == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, b || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || h !== i) && h0(t, n, u, i), ua = !1;
      var g = t.memoizedState;
      n.state = g, Wu(t, u, n, e), wu(), h = t.memoizedState, c || g !== h || ua ? (typeof A == "function" && (nc(t, a, A, u), h = t.memoizedState), (s = ua || v0(t, a, s, u, g, h, i)) ? (b || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = h), n.props = u, n.state = h, n.context = i, u = s) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
    } else {
      n = t.stateNode, Bi(l, t), i = t.memoizedProps, b = Ga(a, i), n.props = b, A = t.pendingProps, g = n.context, h = a.contextType, s = lu, typeof h == "object" && h !== null && (s = ql(h)), c = a.getDerivedStateFromProps, (h = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== A || g !== s) && h0(t, n, u, s), ua = !1, g = t.memoizedState, n.state = g, Wu(t, u, n, e), wu();
      var S = t.memoizedState;
      i !== A || g !== S || ua || l !== null && l.dependencies !== null && xe(l.dependencies) ? (typeof c == "function" && (nc(t, a, c, u), S = t.memoizedState), (b = ua || v0(t, a, b, u, g, S, s) || l !== null && l.dependencies !== null && xe(l.dependencies)) ? (h || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, S, s), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(u, S, s)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = S), n.props = u, n.state = S, n.context = s, u = b) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), u = !1);
    }
    return n = u, sn(l, t), u = (t.flags & 128) !== 0, n || u ? (n = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && u ? (t.child = Ra(t, l.child, null, e), t.child = Ra(t, null, a, e)) : Rl(l, t, a, e), t.memoizedState = n.state, l = t.child) : l = Xt(l, t, e), l;
  }
  function O0(l, t, a, u) {
    return Da(), t.flags |= 256, Rl(l, t, a, u), t.child;
  }
  var oc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function dc(l) {
    return {
      baseLanes: l,
      cachePool: bs()
    };
  }
  function mc(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= ft), l;
  }
  function D0(l, t, a) {
    var u = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, i;
    if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (pl.current & 2) !== 0), i && (e = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (P) {
        if (e ? ea(t) : na(t), (l = yl) ? (l = Go(l, gt), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: Pt !== null ? {
            id: Ot,
            overflow: Dt
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = os(l), a.return = t, t.child = a, Nl = t, yl = null)) : l = null, l === null) throw ta(t);
        return wc(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = u.children;
      return u = u.fallback, e ? (na(t), e = t.mode, c = on({
        mode: "hidden",
        children: c
      }, e), u = Oa(u, e, a, null), c.return = t, u.return = t, c.sibling = u, t.child = c, u = t.child, u.memoizedState = dc(a), u.childLanes = mc(l, i, a), t.memoizedState = oc, Pu(null, u)) : (ea(t), yc(t, c));
    }
    var s = l.memoizedState;
    if (s !== null && (c = s.dehydrated, c !== null)) {
      if (n) t.flags & 256 ? (ea(t), t.flags &= -257, t = vc(l, t, a)) : t.memoizedState !== null ? (na(t), t.child = l.child, t.flags |= 128, t = null) : (na(t), c = u.fallback, e = t.mode, u = on({
        mode: "visible",
        children: u.children
      }, e), c = Oa(c, e, a, null), c.flags |= 2, u.return = t, c.return = t, u.sibling = c, t.child = u, Ra(t, l.child, null, a), u = t.child, u.memoizedState = dc(a), u.childLanes = mc(l, i, a), t.memoizedState = oc, t = Pu(null, u));
      else if (ea(t), wc(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var h = i.dgst;
        i = h, u = Error(y(419)), u.stack = "", u.digest = i, Zu({
          value: u,
          source: null,
          stack: null
        }), t = vc(l, t, a);
      } else if (_l || eu(l, t, a, !1), i = (a & l.childLanes) !== 0, _l || i) {
        if (i = dl, i !== null && (u = gf(i, a), u !== 0 && u !== s.retryLane)) throw s.retryLane = u, Ma(l, u), $l(i, l, u), fc;
        Jc(c) || bn(), t = vc(l, t, a);
      } else Jc(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = s.treeContext, yl = bt(c.nextSibling), Nl = t, P = !0, la = null, gt = !1, l !== null && ys(t, l), t = yc(t, u.children), t.flags |= 4096);
      return t;
    }
    return e ? (na(t), c = u.fallback, e = t.mode, s = l.child, h = s.sibling, u = Rt(s, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = s.subtreeFlags & 65011712, h !== null ? c = Rt(h, c) : (c = Oa(c, e, a, null), c.flags |= 2), c.return = t, u.return = t, u.sibling = c, t.child = u, Pu(null, u), u = t.child, c = l.child.memoizedState, c === null ? c = dc(a) : (e = c.cachePool, e !== null ? (s = zl._currentValue, e = e.parent !== s ? {
      parent: s,
      pool: s
    } : e) : e = bs(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: e
    }), u.memoizedState = c, u.childLanes = mc(l, i, a), t.memoizedState = oc, Pu(l.child, u)) : (ea(t), a = l.child, l = a.sibling, a = Rt(a, {
      mode: "visible",
      children: u.children
    }), a.return = t, a.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function yc(l, t) {
    return t = on({
      mode: "visible",
      children: t
    }, l.mode), t.return = l, l.child = t;
  }
  function on(l, t) {
    return l = et(22, l, null, t), l.lanes = 0, l;
  }
  function vc(l, t, a) {
    return Ra(t, l.child, null, a), l = yc(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l;
  }
  function U0(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), Ui(l.return, t, a);
  }
  function hc(l, t, a, u, e, n) {
    var i = l.memoizedState;
    i === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: a,
      tailMode: e,
      treeForkCount: n
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = u, i.tail = a, i.tailMode = e, i.treeForkCount = n);
  }
  function H0(l, t, a) {
    var u = t.pendingProps, e = u.revealOrder, n = u.tail;
    u = u.children;
    var i = pl.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, _(pl, i), Rl(l, t, u, a), u = P ? Xu : 0, !c && l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null; ) {
      if (l.tag === 13) l.memoizedState !== null && U0(l, a, t);
      else if (l.tag === 19) U0(l, a, t);
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
    switch (e) {
      case "forwards":
        for (a = t.child, e = null; a !== null; ) l = a.alternate, l !== null && ke(l) === null && (e = a), a = a.sibling;
        a = e, a === null ? (e = t.child, t.child = null) : (e = a.sibling, a.sibling = null), hc(t, !1, e, a, n, u);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && ke(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = a, a = e, e = l;
        }
        hc(t, !0, a, null, n, u);
        break;
      case "together":
        hc(t, !1, null, null, void 0, u);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Xt(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), fa |= t.lanes, (a & t.childLanes) === 0) if (l !== null) {
      if (eu(l, t, a, !1), (a & t.childLanes) === 0) return null;
    } else return null;
    if (l !== null && t.child !== l.child) throw Error(y(153));
    if (t.child !== null) {
      for (l = t.child, a = Rt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; ) l = l.sibling, a = a.sibling = Rt(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function gc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && xe(l)));
  }
  function H1(l, t, a) {
    switch (t.tag) {
      case 3:
        Ql(t, t.stateNode.containerInfo), aa(t, zl, l.memoizedState.cache), Da();
        break;
      case 27:
      case 5:
        _u(t);
        break;
      case 4:
        Ql(t, t.stateNode.containerInfo);
        break;
      case 10:
        aa(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, Zi(t), null;
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null ? (ea(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? D0(l, t, a) : (ea(t), l = Xt(l, t, a), l !== null ? l.sibling : null);
        ea(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (u = (a & t.childLanes) !== 0, u || (eu(l, t, a, !1), u = (a & t.childLanes) !== 0), e) {
          if (u) return H0(l, t, a);
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), _(pl, pl.current), u) break;
        return null;
      case 22:
        return t.lanes = 0, T0(l, t, a, t.pendingProps);
      case 24:
        aa(t, zl, l.memoizedState.cache);
    }
    return Xt(l, t, a);
  }
  function C0(l, t, a) {
    if (l !== null) if (l.memoizedProps !== t.pendingProps) _l = !0;
    else {
      if (!gc(l, a) && (t.flags & 128) === 0) return _l = !1, H1(l, t, a);
      _l = (l.flags & 131072) !== 0;
    }
    else _l = !1, P && (t.flags & 1048576) !== 0 && ms(t, Xu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var u = t.pendingProps;
          if (l = Na(t.elementType), t.type = l, typeof l == "function") Ai(l) ? (u = Ga(l, u), t.tag = 1, t = M0(null, t, l, u, a)) : (t.tag = 0, t = sc(null, t, l, u, a));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === Zl) {
                t.tag = 11, t = b0(null, t, l, u, a);
                break l;
              } else if (e === ll) {
                t.tag = 14, t = p0(null, t, l, u, a);
                break l;
              }
            }
            throw t = At(l) || l, Error(y(306, t, ""));
          }
        }
        return t;
      case 0:
        return sc(l, t, t.type, t.pendingProps, a);
      case 1:
        return u = t.type, e = Ga(u, t.pendingProps), M0(l, t, u, e, a);
      case 3:
        l: {
          if (Ql(t, t.stateNode.containerInfo), l === null) throw Error(y(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Bi(l, t), Wu(t, u, null, a);
          var i = t.memoizedState;
          if (u = i.cache, aa(t, zl, u), u !== n.cache && Hi(t, [zl], a, !0), wu(), u = i.element, n.isDehydrated) if (n = {
            element: u,
            isDehydrated: !1,
            cache: i.cache
          }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
            t = O0(l, t, u, a);
            break l;
          } else if (u !== e) {
            e = yt(Error(y(424)), t), Zu(e), t = O0(l, t, u, a);
            break l;
          } else
            for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, yl = bt(l.firstChild), Nl = t, P = !0, la = null, gt = !0, a = _s(t, null, u, a), t.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (Da(), u === e) {
              t = Xt(l, t, a);
              break l;
            }
            Rl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return sn(l, t), l === null ? (a = Vo(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : P || (a = t.type, l = t.pendingProps, u = Mn(w.current).createElement(a), u[Cl] = t, u[xl] = l, jl(u, a, l), Ul(u), t.stateNode = u) : t.memoizedState = Vo(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
      case 27:
        return _u(t), l === null && P && (u = t.stateNode = Zo(t.type, t.pendingProps, w.current), Nl = t, gt = !0, e = yl, ya(t.type) ? (Wc = e, yl = bt(u.firstChild)) : yl = e), Rl(l, t, t.pendingProps.children, a), sn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && P && ((e = u = yl) && (u = em(u, t.type, t.pendingProps, gt), u !== null ? (t.stateNode = u, Nl = t, yl = bt(u.firstChild), gt = !1, e = !0) : e = !1), e || ta(t)), _u(t), e = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, u = n.children, xc(e, n) ? u = null : i !== null && xc(e, i) && (t.flags |= 32), t.memoizedState !== null && (e = xi(l, t, r1, null, null, a), ve._currentValue = e), sn(l, t), Rl(l, t, u, a), t.child;
      case 6:
        return l === null && P && ((l = a = yl) && (a = nm(a, t.pendingProps, gt), a !== null ? (t.stateNode = a, Nl = t, yl = null, l = !0) : l = !1), l || ta(t)), null;
      case 13:
        return D0(l, t, a);
      case 4:
        return Ql(t, t.stateNode.containerInfo), u = t.pendingProps, l === null ? t.child = Ra(t, null, u, a) : Rl(l, t, u, a), t.child;
      case 11:
        return b0(l, t, t.type, t.pendingProps, a);
      case 7:
        return Rl(l, t, t.pendingProps, a), t.child;
      case 8:
        return Rl(l, t, t.pendingProps.children, a), t.child;
      case 12:
        return Rl(l, t, t.pendingProps.children, a), t.child;
      case 10:
        return u = t.pendingProps, aa(t, t.type, u.value), Rl(l, t, u.children, a), t.child;
      case 9:
        return e = t.type._context, u = t.pendingProps.children, Ha(t), e = ql(e), u = u(e), t.flags |= 1, Rl(l, t, u, a), t.child;
      case 14:
        return p0(l, t, t.type, t.pendingProps, a);
      case 15:
        return A0(l, t, t.type, t.pendingProps, a);
      case 19:
        return H0(l, t, a);
      case 31:
        return U1(l, t, a);
      case 22:
        return T0(l, t, a, t.pendingProps);
      case 24:
        return Ha(t), u = ql(zl), l === null ? (e = qi(), e === null && (e = dl, n = Ci(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= a), e = n), t.memoizedState = {
          parent: u,
          cache: e
        }, ji(t), aa(t, zl, e)) : ((l.lanes & a) !== 0 && (Bi(l, t), Wu(t, null, null, a), wu()), e = l.memoizedState, n = t.memoizedState, e.parent !== u ? (e = {
          parent: u,
          cache: u
        }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), aa(t, zl, u)) : (u = n.cache, aa(t, zl, u), u !== e.cache && Hi(t, [zl], a, !0))), Rl(l, t, t.pendingProps.children, a), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(y(156, t.tag));
  }
  function Zt(l) {
    l.flags |= 4;
  }
  function Sc(l, t, a, u, e) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (e & 335544128) === e) if (l.stateNode.complete) l.flags |= 8192;
      else if (eo()) l.flags |= 8192;
      else throw qa = we, Ri;
    } else l.flags &= -16777217;
  }
  function N0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
    else if (l.flags |= 16777216, !$o(t)) if (eo()) l.flags |= 8192;
    else throw qa = we, Ri;
  }
  function dn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? yf() : 536870912, l.lanes |= t, gu |= t);
  }
  function le(l, t) {
    if (!P) switch (l.tailMode) {
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
    if (t) for (var e = l.child; e !== null; ) a |= e.lanes | e.childLanes, u |= e.subtreeFlags & 65011712, u |= e.flags & 65011712, e.return = l, e = e.sibling;
    else for (e = l.child; e !== null; ) a |= e.lanes | e.childLanes, u |= e.subtreeFlags, u |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= u, l.childLanes = a, t;
  }
  function C1(l, t, a) {
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
        return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Yt(zl), bl(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (uu(t) ? Zt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Oi())), vl(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (Zt(t), n !== null ? (vl(t), N0(t, n)) : (vl(t), Sc(t, e, null, u, a))) : n ? n !== l.memoizedState ? (Zt(t), vl(t), N0(t, n)) : (vl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== u && Zt(t), vl(t), Sc(t, e, l, u, a)), null;
      case 27:
        if (pe(t), a = w.current, e = t.type, l !== null && t.stateNode != null) l.memoizedProps !== u && Zt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(y(166));
            return vl(t), null;
          }
          l = R.current, uu(t) ? vs(t, l) : (l = Zo(e, u, a), t.stateNode = l, Zt(t));
        }
        return vl(t), null;
      case 5:
        if (pe(t), e = t.type, l !== null && t.stateNode != null) l.memoizedProps !== u && Zt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(y(166));
            return vl(t), null;
          }
          if (n = R.current, uu(t)) vs(t, n);
          else {
            var i = Mn(w.current);
            switch (n) {
              case 1:
                n = i.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                n = i.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    n = i.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    n = i.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                    break;
                  case "script":
                    n = i.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                    break;
                  case "select":
                    n = typeof u.is == "string" ? i.createElement("select", { is: u.is }) : i.createElement("select"), u.multiple ? n.multiple = !0 : u.size && (n.size = u.size);
                    break;
                  default:
                    n = typeof u.is == "string" ? i.createElement(e, { is: u.is }) : i.createElement(e);
                }
            }
            n[Cl] = t, n[xl] = u;
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
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
            t.stateNode = n;
            l: switch (jl(n, e, u), e) {
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
            u && Zt(t);
          }
        }
        return vl(t), Sc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== u && Zt(t);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(y(166));
          if (l = w.current, uu(t)) {
            if (l = t.stateNode, a = t.memoizedProps, u = null, e = Nl, e !== null) switch (e.tag) {
              case 27:
              case 5:
                u = e.memoizedProps;
            }
            l[Cl] = t, l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || Ho(l.nodeValue, a)), l || ta(t, !0);
          } else l = Mn(l).createTextNode(u), l[Cl] = t, t.stateNode = l;
        }
        return vl(t), null;
      case 31:
        if (a = t.memoizedState, l === null || l.memoizedState !== null) {
          if (u = uu(t), a !== null) {
            if (l === null) {
              if (!u) throw Error(y(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(y(557));
              l[Cl] = t;
            } else Da(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            vl(t), l = !1;
          } else a = Oi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = !0;
          if (!l)
            return t.flags & 256 ? (it(t), t) : (it(t), null);
          if ((t.flags & 128) !== 0) throw Error(y(558));
        }
        return vl(t), null;
      case 13:
        if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = uu(t), u !== null && u.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(y(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
              e[Cl] = t;
            } else Da(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            vl(t), e = !1;
          } else e = Oi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (it(t), t) : (it(t), null);
        }
        return it(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = u !== null, l = l !== null && l.memoizedState !== null, a && (u = t.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool), n = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), dn(t, t.updateQueue), vl(t), null);
      case 4:
        return bl(), l === null && Mo(t.stateNode.containerInfo), vl(t), null;
      case 10:
        return Yt(t.type), vl(t), null;
      case 19:
        if (T(pl), u = t.memoizedState, u === null) return vl(t), null;
        if (e = (t.flags & 128) !== 0, n = u.rendering, n === null) if (e) le(u, !1);
        else {
          if (rl !== 0 || l !== null && (l.flags & 128) !== 0) for (l = t.child; l !== null; ) {
            if (n = ke(l), n !== null) {
              for (t.flags |= 128, le(u, !1), l = n.updateQueue, t.updateQueue = l, dn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; ) ss(a, l), a = a.sibling;
              return _(pl, pl.current & 1 | 2), P && jt(t, u.treeForkCount), t.child;
            }
            l = l.sibling;
          }
          u.tail !== null && lt() > gn && (t.flags |= 128, e = !0, le(u, !1), t.lanes = 4194304);
        }
        else {
          if (!e) if (l = ke(n), l !== null) {
            if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, dn(t, l), le(u, !0), u.tail === null && u.tailMode === "hidden" && !n.alternate && !P) return vl(t), null;
          } else 2 * lt() - u.renderingStartTime > gn && a !== 536870912 && (t.flags |= 128, e = !0, le(u, !1), t.lanes = 4194304);
          u.isBackwards ? (n.sibling = t.child, t.child = n) : (l = u.last, l !== null ? l.sibling = n : t.child = n, u.last = n);
        }
        return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = lt(), l.sibling = null, a = pl.current, _(pl, e ? a & 1 | 2 : a & 1), P && jt(t, u.treeForkCount), l) : (vl(t), null);
      case 22:
      case 23:
        return it(t), Xi(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (vl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : vl(t), a = t.updateQueue, a !== null && dn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && T(Ca), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Yt(zl), vl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(y(156, t.tag));
  }
  function N1(l, t) {
    switch (_i(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Yt(zl), bl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return pe(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (it(t), t.alternate === null) throw Error(y(340));
          Da();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (it(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null) throw Error(y(340));
          Da();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return T(pl), null;
      case 4:
        return bl(), null;
      case 10:
        return Yt(t.type), null;
      case 22:
      case 23:
        return it(t), Xi(), l !== null && T(Ca), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Yt(zl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function q0(l, t) {
    switch (_i(t), t.tag) {
      case 3:
        Yt(zl), bl();
        break;
      case 26:
      case 27:
      case 5:
        pe(t);
        break;
      case 4:
        bl();
        break;
      case 31:
        t.memoizedState !== null && it(t);
        break;
      case 13:
        it(t);
        break;
      case 19:
        T(pl);
        break;
      case 10:
        Yt(t.type);
        break;
      case 22:
      case 23:
        it(t), Xi(), l !== null && T(Ca);
        break;
      case 24:
        Yt(zl);
    }
  }
  function te(l, t) {
    try {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create, i = a.inst;
            u = n(), i.destroy = u;
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (c) {
      cl(t, t.return, c);
    }
  }
  function ia(l, t, a) {
    try {
      var u = t.updateQueue, e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var i = u.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, e = t;
              var s = a, h = c;
              try {
                h();
              } catch (b) {
                cl(e, s, b);
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (b) {
      cl(t, t.return, b);
    }
  }
  function R0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Os(t, a);
      } catch (u) {
        cl(l, l.return, u);
      }
    }
  }
  function j0(l, t, a) {
    a.props = Ga(l.type, l.memoizedProps), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (u) {
      cl(l, t, u);
    }
  }
  function ae(l, t) {
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
    } catch (e) {
      cl(l, t, e);
    }
  }
  function Ut(l, t) {
    var a = l.ref, u = l.refCleanup;
    if (a !== null) if (typeof u == "function") try {
      u();
    } catch (e) {
      cl(l, t, e);
    } finally {
      l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
    }
    else if (typeof a == "function") try {
      a(null);
    } catch (e) {
      cl(l, t, e);
    }
    else a.current = null;
  }
  function B0(l) {
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
    } catch (e) {
      cl(l, l.return, e);
    }
  }
  function rc(l, t, a) {
    try {
      var u = l.stateNode;
      I1(u, l.type, a, t), u[xl] = t;
    } catch (e) {
      cl(l, l.return, e);
    }
  }
  function Y0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ya(l.type) || l.tag === 4;
  }
  function bc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Y0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && ya(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function pc(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6) l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Nt));
    else if (u !== 4 && (u === 27 && ya(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null)) for (pc(l, t, a), l = l.sibling; l !== null; ) pc(l, t, a), l = l.sibling;
  }
  function mn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6) l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (u !== 4 && (u === 27 && ya(l.type) && (a = l.stateNode), l = l.child, l !== null)) for (mn(l, t, a), l = l.sibling; l !== null; ) mn(l, t, a), l = l.sibling;
  }
  function G0(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
      jl(t, u, a), t[Cl] = l, t[xl] = a;
    } catch (n) {
      cl(l, l.return, n);
    }
  }
  var Lt = !1, Ml = !1, Ac = !1, Q0 = typeof WeakSet == "function" ? WeakSet : Set, Hl = null;
  function q1(l, t) {
    if (l = l.containerInfo, Zc = qn, l = ls(l), vi(l)) {
      if ("selectionStart" in l) var a = {
        start: l.selectionStart,
        end: l.selectionEnd
      };
      else l: {
        a = (a = l.ownerDocument) && a.defaultView || window;
        var u = a.getSelection && a.getSelection();
        if (u && u.rangeCount !== 0) {
          a = u.anchorNode;
          var e = u.anchorOffset, n = u.focusNode;
          u = u.focusOffset;
          try {
            a.nodeType, n.nodeType;
          } catch {
            a = null;
            break l;
          }
          var i = 0, c = -1, s = -1, h = 0, b = 0, A = l, g = null;
          t: for (; ; ) {
            for (var S; A !== a || e !== 0 && A.nodeType !== 3 || (c = i + e), A !== n || u !== 0 && A.nodeType !== 3 || (s = i + u), A.nodeType === 3 && (i += A.nodeValue.length), (S = A.firstChild) !== null; )
              g = A, A = S;
            for (; ; ) {
              if (A === l) break t;
              if (g === a && ++h === e && (c = i), g === n && ++b === u && (s = i), (S = A.nextSibling) !== null) break;
              A = g, g = A.parentNode;
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
    for (Lc = {
      focusedElem: l,
      selectionRange: a
    }, qn = !1, Hl = t; Hl !== null; ) if (t = Hl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null) l.return = t, Hl = l;
    else for (; Hl !== null; ) {
      switch (t = Hl, n = t.alternate, l = t.flags, t.tag) {
        case 0:
          if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null)) for (a = 0; a < l.length; a++) e = l[a], e.ref.impl = e.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((l & 1024) !== 0 && n !== null) {
            l = void 0, a = t, e = n.memoizedProps, n = n.memoizedState, u = a.stateNode;
            try {
              var C = Ga(a.type, e);
              l = u.getSnapshotBeforeUpdate(C, n), u.__reactInternalSnapshotBeforeUpdate = l;
            } catch (G) {
              cl(a, a.return, G);
            }
          }
          break;
        case 3:
          if ((l & 1024) !== 0) {
            if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9) Kc(l);
            else if (a === 1) switch (l.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Kc(l);
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
          if ((l & 1024) !== 0) throw Error(y(163));
      }
      if (l = t.sibling, l !== null) {
        l.return = t.return, Hl = l;
        break;
      }
      Hl = t.return;
    }
  }
  function X0(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Vt(l, a), u & 4 && te(5, a);
        break;
      case 1:
        if (Vt(l, a), u & 4) if (l = a.stateNode, t === null) try {
          l.componentDidMount();
        } catch (i) {
          cl(a, a.return, i);
        }
        else {
          var e = Ga(a.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
          } catch (i) {
            cl(a, a.return, i);
          }
        }
        u & 64 && R0(a), u & 512 && ae(a, a.return);
        break;
      case 3:
        if (Vt(l, a), u & 64 && (l = a.updateQueue, l !== null)) {
          if (t = null, a.child !== null) switch (a.child.tag) {
            case 27:
            case 5:
              t = a.child.stateNode;
              break;
            case 1:
              t = a.child.stateNode;
          }
          try {
            Os(l, t);
          } catch (i) {
            cl(a, a.return, i);
          }
        }
        break;
      case 27:
        t === null && u & 4 && G0(a);
      case 26:
      case 5:
        Vt(l, a), t === null && u & 4 && B0(a), u & 512 && ae(a, a.return);
        break;
      case 12:
        Vt(l, a);
        break;
      case 31:
        Vt(l, a), u & 4 && x0(l, a);
        break;
      case 13:
        Vt(l, a), u & 4 && V0(l, a), u & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = L1.bind(null, a), im(l, a))));
        break;
      case 22:
        if (u = a.memoizedState !== null || Lt, !u) {
          t = t !== null && t.memoizedState !== null || Ml, e = Lt;
          var n = Ml;
          Lt = u, (Ml = t) && !n ? Kt(l, a, (a.subtreeFlags & 8772) !== 0) : Vt(l, a), Lt = e, Ml = n;
        }
        break;
      case 30:
        break;
      default:
        Vt(l, a);
    }
  }
  function Z0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Z0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && kn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var gl = null, Kl = !1;
  function xt(l, t, a) {
    for (a = a.child; a !== null; ) L0(l, t, a), a = a.sibling;
  }
  function L0(l, t, a) {
    if (tt && typeof tt.onCommitFiberUnmount == "function") try {
      tt.onCommitFiberUnmount(Mu, a);
    } catch {
    }
    switch (a.tag) {
      case 26:
        Ml || Ut(a, t), xt(l, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Ml || Ut(a, t);
        var u = gl, e = Kl;
        ya(a.type) && (gl = a.stateNode, Kl = !1), xt(l, t, a), de(a.stateNode), gl = u, Kl = e;
        break;
      case 5:
        Ml || Ut(a, t);
      case 6:
        if (u = gl, e = Kl, gl = null, xt(l, t, a), gl = u, Kl = e, gl !== null) if (Kl) try {
          (gl.nodeType === 9 ? gl.body : gl.nodeName === "HTML" ? gl.ownerDocument.body : gl).removeChild(a.stateNode);
        } catch (n) {
          cl(a, t, n);
        }
        else try {
          gl.removeChild(a.stateNode);
        } catch (n) {
          cl(a, t, n);
        }
        break;
      case 18:
        gl !== null && (Kl ? (l = gl, Bo(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, a.stateNode), Eu(l)) : Bo(gl, a.stateNode));
        break;
      case 4:
        u = gl, e = Kl, gl = a.stateNode.containerInfo, Kl = !0, xt(l, t, a), gl = u, Kl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ia(2, a, t), Ml || ia(4, a, t), xt(l, t, a);
        break;
      case 1:
        Ml || (Ut(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && j0(a, t, u)), xt(l, t, a);
        break;
      case 21:
        xt(l, t, a);
        break;
      case 22:
        Ml = (u = Ml) || a.memoizedState !== null, xt(l, t, a), Ml = u;
        break;
      default:
        xt(l, t, a);
    }
  }
  function x0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Eu(l);
      } catch (a) {
        cl(t, t.return, a);
      }
    }
  }
  function V0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
      Eu(l);
    } catch (a) {
      cl(t, t.return, a);
    }
  }
  function R1(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Q0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Q0()), t;
      default:
        throw Error(y(435, l.tag));
    }
  }
  function yn(l, t) {
    var a = R1(l);
    t.forEach(function(u) {
      if (!a.has(u)) {
        a.add(u);
        var e = x1.bind(null, l, u);
        u.then(e, e);
      }
    });
  }
  function Jl(l, t) {
    var a = t.deletions;
    if (a !== null) for (var u = 0; u < a.length; u++) {
      var e = a[u], n = l, i = t, c = i;
      l: for (; c !== null; ) {
        switch (c.tag) {
          case 27:
            if (ya(c.type)) {
              gl = c.stateNode, Kl = !1;
              break l;
            }
            break;
          case 5:
            gl = c.stateNode, Kl = !1;
            break l;
          case 3:
          case 4:
            gl = c.stateNode.containerInfo, Kl = !0;
            break l;
        }
        c = c.return;
      }
      if (gl === null) throw Error(y(160));
      L0(n, i, e), gl = null, Kl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) K0(t, l), t = t.sibling;
  }
  var zt = null;
  function K0(l, t) {
    var a = l.alternate, u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Jl(t, l), wl(l), u & 4 && (ia(3, l, l.return), te(3, l), ia(5, l, l.return));
        break;
      case 1:
        Jl(t, l), wl(l), u & 512 && (Ml || a === null || Ut(a, a.return)), u & 64 && Lt && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
        break;
      case 26:
        var e = zt;
        if (Jl(t, l), wl(l), u & 512 && (Ml || a === null || Ut(a, a.return)), u & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (u = l.memoizedState, a === null) if (u === null) if (l.stateNode === null) {
            l: {
              u = l.type, a = l.memoizedProps, e = e.ownerDocument || e;
              t: switch (u) {
                case "title":
                  n = e.getElementsByTagName("title")[0], (!n || n[Uu] || n[Cl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(n, e.querySelector("head > title"))), jl(n, u, a), n[Cl] = l, Ul(n), u = n;
                  break l;
                case "link":
                  var i = wo("link", "href", e).get(u + (a.href || ""));
                  if (i) {
                    for (var c = 0; c < i.length; c++) if (n = i[c], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                      i.splice(c, 1);
                      break t;
                    }
                  }
                  n = e.createElement(u), jl(n, u, a), e.head.appendChild(n);
                  break;
                case "meta":
                  if (i = wo("meta", "content", e).get(u + (a.content || ""))) {
                    for (c = 0; c < i.length; c++) if (n = i[c], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                      i.splice(c, 1);
                      break t;
                    }
                  }
                  n = e.createElement(u), jl(n, u, a), e.head.appendChild(n);
                  break;
                default:
                  throw Error(y(468, u));
              }
              n[Cl] = l, Ul(n), u = n;
            }
            l.stateNode = u;
          } else Wo(e, l.type, l.stateNode);
          else l.stateNode = Jo(e, u, l.memoizedProps);
          else n !== u ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, u === null ? Wo(e, l.type, l.stateNode) : Jo(e, u, l.memoizedProps)) : u === null && l.stateNode !== null && rc(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        Jl(t, l), wl(l), u & 512 && (Ml || a === null || Ut(a, a.return)), a !== null && u & 4 && rc(l, l.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (Jl(t, l), wl(l), u & 512 && (Ml || a === null || Ut(a, a.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            wa(e, "");
          } catch (C) {
            cl(l, l.return, C);
          }
        }
        u & 4 && l.stateNode != null && (e = l.memoizedProps, rc(l, e, a !== null ? a.memoizedProps : e)), u & 1024 && (Ac = !0);
        break;
      case 6:
        if (Jl(t, l), wl(l), u & 4) {
          if (l.stateNode === null) throw Error(y(162));
          u = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = u;
          } catch (C) {
            cl(l, l.return, C);
          }
        }
        break;
      case 3:
        if (Un = null, e = zt, zt = On(t.containerInfo), Jl(t, l), zt = e, wl(l), u & 4 && a !== null && a.memoizedState.isDehydrated) try {
          Eu(t.containerInfo);
        } catch (C) {
          cl(l, l.return, C);
        }
        Ac && (Ac = !1, J0(l));
        break;
      case 4:
        u = zt, zt = On(l.stateNode.containerInfo), Jl(t, l), wl(l), zt = u;
        break;
      case 12:
        Jl(t, l), wl(l);
        break;
      case 31:
        Jl(t, l), wl(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, yn(l, u)));
        break;
      case 13:
        Jl(t, l), wl(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (hn = lt()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, yn(l, u)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var s = a !== null && a.memoizedState !== null, h = Lt, b = Ml;
        if (Lt = h || e, Ml = b || s, Jl(t, l), Ml = b, Lt = h, wl(l), u & 8192) l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (a === null || s || Lt || Ml || Qa(l)), a = null, t = l; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (a === null) {
              s = a = t;
              try {
                if (n = s.stateNode, e) i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                else {
                  c = s.stateNode;
                  var A = s.memoizedProps.style, g = A != null && A.hasOwnProperty("display") ? A.display : null;
                  c.style.display = g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                }
              } catch (C) {
                cl(s, s.return, C);
              }
            }
          } else if (t.tag === 6) {
            if (a === null) {
              s = t;
              try {
                s.stateNode.nodeValue = e ? "" : s.memoizedProps;
              } catch (C) {
                cl(s, s.return, C);
              }
            }
          } else if (t.tag === 18) {
            if (a === null) {
              s = t;
              try {
                var S = s.stateNode;
                e ? Yo(S, !0) : Yo(s.stateNode, !1);
              } catch (C) {
                cl(s, s.return, C);
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
        u & 4 && (u = l.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, yn(l, a))));
        break;
      case 19:
        Jl(t, l), wl(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, yn(l, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Jl(t, l), wl(l);
    }
  }
  function wl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (Y0(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(y(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode;
            mn(l, bc(l), e);
            break;
          case 5:
            var n = a.stateNode;
            a.flags & 32 && (wa(n, ""), a.flags &= -33), mn(l, bc(l), n);
            break;
          case 3:
          case 4:
            var i = a.stateNode.containerInfo;
            pc(l, bc(l), i);
            break;
          default:
            throw Error(y(161));
        }
      } catch (c) {
        cl(l, l.return, c);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function J0(l) {
    if (l.subtreeFlags & 1024) for (l = l.child; l !== null; ) {
      var t = l;
      J0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
    }
  }
  function Vt(l, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) X0(l, t.alternate, t), t = t.sibling;
  }
  function Qa(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ia(4, t, t.return), Qa(t);
          break;
        case 1:
          Ut(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && j0(t, t.return, a), Qa(t);
          break;
        case 27:
          de(t.stateNode);
        case 26:
        case 5:
          Ut(t, t.return), Qa(t);
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
  function Kt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate, e = l, n = t, i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Kt(e, n, a), te(4, n);
          break;
        case 1:
          if (Kt(e, n, a), u = n, e = u.stateNode, typeof e.componentDidMount == "function") try {
            e.componentDidMount();
          } catch (h) {
            cl(u, u.return, h);
          }
          if (u = n, e = u.updateQueue, e !== null) {
            var c = u.stateNode;
            try {
              var s = e.shared.hiddenCallbacks;
              if (s !== null) for (e.shared.hiddenCallbacks = null, e = 0; e < s.length; e++) Ms(s[e], c);
            } catch (h) {
              cl(u, u.return, h);
            }
          }
          a && i & 64 && R0(n), ae(n, n.return);
          break;
        case 27:
          G0(n);
        case 26:
        case 5:
          Kt(e, n, a), a && u === null && i & 4 && B0(n), ae(n, n.return);
          break;
        case 12:
          Kt(e, n, a);
          break;
        case 31:
          Kt(e, n, a), a && i & 4 && x0(e, n);
          break;
        case 13:
          Kt(e, n, a), a && i & 4 && V0(e, n);
          break;
        case 22:
          n.memoizedState === null && Kt(e, n, a), ae(n, n.return);
          break;
        case 30:
          break;
        default:
          Kt(e, n, a);
      }
      t = t.sibling;
    }
  }
  function Tc(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Lu(a));
  }
  function zc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Lu(l));
  }
  function Et(l, t, a, u) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) w0(l, t, a, u), t = t.sibling;
  }
  function w0(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Et(l, t, a, u), e & 2048 && te(9, t);
        break;
      case 1:
        Et(l, t, a, u);
        break;
      case 3:
        Et(l, t, a, u), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Lu(l)));
        break;
      case 12:
        if (e & 2048) {
          Et(l, t, a, u), l = t.stateNode;
          try {
            var n = t.memoizedProps, i = n.id, c = n.onPostCommit;
            typeof c == "function" && c(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
          } catch (s) {
            cl(t, t.return, s);
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
        n = t.stateNode, i = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Et(l, t, a, u) : ue(l, t) : n._visibility & 2 ? Et(l, t, a, u) : (n._visibility |= 2, yu(l, t, a, u, (t.subtreeFlags & 10256) !== 0 || !1)), e & 2048 && Tc(i, t);
        break;
      case 24:
        Et(l, t, a, u), e & 2048 && zc(t.alternate, t);
        break;
      default:
        Et(l, t, a, u);
    }
  }
  function yu(l, t, a, u, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, i = t, c = a, s = u, h = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          yu(n, i, c, s, e), te(8, i);
          break;
        case 23:
          break;
        case 22:
          var b = i.stateNode;
          i.memoizedState !== null ? b._visibility & 2 ? yu(n, i, c, s, e) : ue(n, i) : (b._visibility |= 2, yu(n, i, c, s, e)), e && h & 2048 && Tc(i.alternate, i);
          break;
        case 24:
          yu(n, i, c, s, e), e && h & 2048 && zc(i.alternate, i);
          break;
        default:
          yu(n, i, c, s, e);
      }
      t = t.sibling;
    }
  }
  function ue(l, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var a = l, u = t, e = u.flags;
      switch (u.tag) {
        case 22:
          ue(a, u), e & 2048 && Tc(u.alternate, u);
          break;
        case 24:
          ue(a, u), e & 2048 && zc(u.alternate, u);
          break;
        default:
          ue(a, u);
      }
      t = t.sibling;
    }
  }
  var ee = 8192;
  function vu(l, t, a) {
    if (l.subtreeFlags & ee) for (l = l.child; l !== null; ) W0(l, t, a), l = l.sibling;
  }
  function W0(l, t, a) {
    switch (l.tag) {
      case 26:
        vu(l, t, a), l.flags & ee && l.memoizedState !== null && rm(a, zt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        vu(l, t, a);
        break;
      case 3:
      case 4:
        var u = zt;
        zt = On(l.stateNode.containerInfo), vu(l, t, a), zt = u;
        break;
      case 22:
        l.memoizedState === null && (u = l.alternate, u !== null && u.memoizedState !== null ? (u = ee, ee = 16777216, vu(l, t, a), ee = u) : vu(l, t, a));
        break;
      default:
        vu(l, t, a);
    }
  }
  function $0(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function ne(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var u = t[a];
        Hl = u, k0(u, l);
      }
      $0(l);
    }
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) F0(l), l = l.sibling;
  }
  function F0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ne(l), l.flags & 2048 && ia(9, l, l.return);
        break;
      case 3:
        ne(l);
        break;
      case 12:
        ne(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, vn(l)) : ne(l);
        break;
      default:
        ne(l);
    }
  }
  function vn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var u = t[a];
        Hl = u, k0(u, l);
      }
      $0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          ia(8, t, t.return), vn(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, vn(t));
          break;
        default:
          vn(t);
      }
      l = l.sibling;
    }
  }
  function k0(l, t) {
    for (; Hl !== null; ) {
      var a = Hl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ia(8, a, t);
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
      if (u = a.child, u !== null) u.return = a, Hl = u;
      else l: for (a = l; Hl !== null; ) {
        u = Hl;
        var e = u.sibling, n = u.return;
        if (Z0(u), u === a) {
          Hl = null;
          break l;
        }
        if (e !== null) {
          e.return = n, Hl = e;
          break l;
        }
        Hl = n;
      }
    }
  }
  var j1 = {
    getCacheForType: function(l) {
      var t = ql(zl), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    },
    cacheSignal: function() {
      return ql(zl).controller.signal;
    }
  }, B1 = typeof WeakMap == "function" ? WeakMap : Map, el = 0, dl = null, W = null, F = 0, il = 0, ct = null, ca = !1, hu = !1, Ec = !1, Jt = 0, rl = 0, fa = 0, Xa = 0, _c = 0, ft = 0, gu = 0, ie = null, Wl = null, Mc = !1, hn = 0, I0 = 0, gn = 1 / 0, Sn = null, sa = null, Dl = 0, oa = null, Su = null, wt = 0, Oc = 0, Dc = null, P0 = null, ce = 0, Uc = null;
  function rt() {
    return (el & 2) !== 0 && F !== 0 ? F & -F : E.T !== null ? jc() : rf();
  }
  function lo() {
    if (ft === 0) if ((F & 536870912) === 0 || P) {
      var l = ze;
      ze <<= 1, (ze & 3932160) === 0 && (ze = 262144), ft = l;
    } else ft = 536870912;
    return l = nt.current, l !== null && (l.flags |= 32), ft;
  }
  function $l(l, t, a) {
    (l === dl && (il === 2 || il === 9) || l.cancelPendingCommit !== null) && (ru(l, 0), da(l, F, ft, !1)), Me(l, a), ((el & 2) === 0 || l !== dl) && (l === dl && ((el & 2) === 0 && (Xa |= a), rl === 4 && da(l, F, ft, !1)), Wt(l));
  }
  function to(l, t, a) {
    if ((el & 6) !== 0) throw Error(y(327));
    var u = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ou(l, t), e = u ? Q1(l, t) : Cc(l, t, !0), n = u;
    do {
      if (e === 0) {
        hu && !u && da(l, t, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, n && !Y1(a)) {
          e = Cc(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n) var i = 0;
          else i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              e = ie;
              var s = c.current.memoizedState.isDehydrated;
              if (s && (ru(c, i).flags |= 256), i = Cc(c, i, !1), i !== 2) {
                if (Ec && !s) {
                  c.errorRecoveryDisabledLanes |= n, Xa |= n, e = 4;
                  break l;
                }
                n = Wl, Wl = e, n !== null && (Wl === null ? Wl = n : Wl.push.apply(Wl, n));
              }
              e = i;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          ru(l, 0), da(l, t, 0, !0);
          break;
        }
        l: {
          switch (u = l, n = e, n) {
            case 0:
            case 1:
              throw Error(y(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              da(u, t, ft, !ca);
              break l;
            case 2:
              Wl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(y(329));
          }
          if ((t & 62914560) === t && (e = hn + 300 - lt(), 10 < e)) {
            if (da(u, t, ft, !ca), _e(u, 0, !0) !== 0) break l;
            wt = t, u.timeoutHandle = Ro(ao.bind(null, u, a, Wl, Sn, Mc, t, ft, Xa, gu, ca, n, "Throttled", -0, 0), e);
            break l;
          }
          ao(u, a, Wl, Sn, Mc, t, ft, Xa, gu, ca, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Wt(l);
  }
  function ao(l, t, a, u, e, n, i, c, s, h, b, A, g, S) {
    if (l.timeoutHandle = -1, A = t.subtreeFlags, A & 8192 || (A & 16785408) === 16785408) {
      A = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Nt
      }, W0(t, n, A);
      var C = (n & 62914560) === n ? hn - lt() : (n & 4194048) === n ? I0 - lt() : 0;
      if (C = bm(A, C), C !== null) {
        wt = n, l.cancelPendingCommit = C(oo.bind(null, l, t, n, a, u, e, i, c, s, b, A, null, g, S)), da(l, n, i, !h);
        return;
      }
    }
    oo(l, t, n, a, u, e, i, c, s);
  }
  function Y1(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null))) for (var u = 0; u < a.length; u++) {
        var e = a[u], n = e.getSnapshot;
        e = e.value;
        try {
          if (!ut(n(), e)) return !1;
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
  function da(l, t, a, u) {
    t &= ~_c, t &= ~Xa, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - at(e), i = 1 << n;
      u[n] = -1, e &= ~i;
    }
    a !== 0 && vf(l, a, t);
  }
  function rn() {
    return (el & 6) === 0 ? (fe(0, !1), !1) : !0;
  }
  function Hc() {
    if (W !== null) {
      if (il === 0) var l = W.return;
      else l = W, Bt = Ua = null, Ji(l), fu = null, Vu = 0, l = W;
      for (; l !== null; ) q0(l.alternate, l), l = l.return;
      W = null;
    }
  }
  function ru(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, tm(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), wt = 0, Hc(), dl = l, W = a = Rt(l.current, null), F = t, il = 0, ct = null, ca = !1, hu = Ou(l, t), Ec = !1, gu = ft = _c = Xa = fa = rl = 0, Wl = ie = null, Mc = !1, (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0) for (l = l.entanglements, u &= t; 0 < u; ) {
      var e = 31 - at(u), n = 1 << e;
      t |= l[e], u &= ~n;
    }
    return Jt = t, Ge(), a;
  }
  function uo(l, t) {
    L = null, E.H = Iu, t === cu || t === Je ? (t = Ts(), il = 3) : t === Ri ? (t = Ts(), il = 4) : il = t === fc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ct = t, W === null && (rl = 1, cn(l, yt(t, l.current)));
  }
  function eo() {
    var l = nt.current;
    return l === null ? !0 : (F & 4194048) === F ? St === null : (F & 62914560) === F || (F & 536870912) !== 0 ? l === St : !1;
  }
  function no() {
    var l = E.H;
    return E.H = Iu, l === null ? Iu : l;
  }
  function io() {
    var l = E.A;
    return E.A = j1, l;
  }
  function bn() {
    rl = 4, ca || (F & 4194048) !== F && nt.current !== null || (hu = !0), (fa & 134217727) === 0 && (Xa & 134217727) === 0 || dl === null || da(dl, F, ft, !1);
  }
  function Cc(l, t, a) {
    var u = el;
    el |= 2;
    var e = no(), n = io();
    (dl !== l || F !== t) && (Sn = null, ru(l, t)), t = !1;
    var i = rl;
    l: do
      try {
        if (il !== 0 && W !== null) {
          var c = W, s = ct;
          switch (il) {
            case 8:
              Hc(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              nt.current === null && (t = !0);
              var h = il;
              if (il = 0, ct = null, bu(l, c, s, h), a && hu) {
                i = 0;
                break l;
              }
              break;
            default:
              h = il, il = 0, ct = null, bu(l, c, s, h);
          }
        }
        G1(), i = rl;
        break;
      } catch (b) {
        uo(l, b);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Bt = Ua = null, el = u, E.H = e, E.A = n, W === null && (dl = null, F = 0, Ge()), i;
  }
  function G1() {
    for (; W !== null; ) co(W);
  }
  function Q1(l, t) {
    var a = el;
    el |= 2;
    var u = no(), e = io();
    dl !== l || F !== t ? (Sn = null, gn = lt() + 500, ru(l, t)) : hu = Ou(l, t);
    l: do
      try {
        if (il !== 0 && W !== null) {
          t = W;
          var n = ct;
          t: switch (il) {
            case 1:
              il = 0, ct = null, bu(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (ps(n)) {
                il = 0, ct = null, fo(t);
                break;
              }
              t = function() {
                il !== 2 && il !== 9 || dl !== l || (il = 7), Wt(l);
              }, n.then(t, t);
              break l;
            case 3:
              il = 7;
              break l;
            case 4:
              il = 5;
              break l;
            case 7:
              ps(n) ? (il = 0, ct = null, fo(t)) : (il = 0, ct = null, bu(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (W.tag) {
                case 26:
                  i = W.memoizedState;
                case 5:
                case 27:
                  var c = W;
                  if (i ? $o(i) : c.stateNode.complete) {
                    il = 0, ct = null;
                    var s = c.sibling;
                    if (s !== null) W = s;
                    else {
                      var h = c.return;
                      h !== null ? (W = h, pn(h)) : W = null;
                    }
                    break t;
                  }
              }
              il = 0, ct = null, bu(l, t, n, 5);
              break;
            case 6:
              il = 0, ct = null, bu(l, t, n, 6);
              break;
            case 8:
              Hc(), rl = 6;
              break l;
            default:
              throw Error(y(462));
          }
        }
        X1();
        break;
      } catch (b) {
        uo(l, b);
      }
    while (!0);
    return Bt = Ua = null, E.H = u, E.A = e, el = a, W !== null ? 0 : (dl = null, F = 0, Ge(), rl);
  }
  function X1() {
    for (; W !== null && !Sd(); ) co(W);
  }
  function co(l) {
    var t = C0(l.alternate, l, Jt);
    l.memoizedProps = l.pendingProps, t === null ? pn(l) : W = t;
  }
  function fo(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = _0(a, t, t.pendingProps, t.type, void 0, F);
        break;
      case 11:
        t = _0(a, t, t.pendingProps, t.type.render, t.ref, F);
        break;
      case 5:
        Ji(t);
      default:
        q0(a, t), t = W = ss(t, Jt), t = C0(a, t, Jt);
    }
    l.memoizedProps = l.pendingProps, t === null ? pn(l) : W = t;
  }
  function bu(l, t, a, u) {
    Bt = Ua = null, Ji(t), fu = null, Vu = 0;
    var e = t.return;
    try {
      if (D1(l, e, t, a, F)) {
        rl = 1, cn(l, yt(a, l.current)), W = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw W = e, n;
      rl = 1, cn(l, yt(a, l.current)), W = null;
      return;
    }
    t.flags & 32768 ? (P || u === 1 ? l = !0 : hu || (F & 536870912) !== 0 ? l = !1 : (ca = l = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = nt.current, u !== null && u.tag === 13 && (u.flags |= 16384))), so(t, l)) : pn(t);
  }
  function pn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        so(t, ca);
        return;
      }
      l = t.return;
      var a = C1(t.alternate, t, Jt);
      if (a !== null) {
        W = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        W = t;
        return;
      }
      W = t = l;
    } while (t !== null);
    rl === 0 && (rl = 5);
  }
  function so(l, t) {
    do {
      var a = N1(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, W = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        W = l;
        return;
      }
      W = l = a;
    } while (l !== null);
    rl = 6, W = null;
  }
  function oo(l, t, a, u, e, n, i, c, s) {
    l.cancelPendingCommit = null;
    do
      An();
    while (Dl !== 0);
    if ((el & 6) !== 0) throw Error(y(327));
    if (t !== null) {
      if (t === l.current) throw Error(y(177));
      if (n = t.lanes | t.childLanes, n |= bi, Od(l, a, n, i, c, s), l === dl && (W = dl = null, F = 0), Su = t, oa = l, wt = a, Oc = n, Dc = e, P0 = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, V1(Ae, function() {
        return go(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
        u = E.T, E.T = null, e = O.p, O.p = 2, i = el, el |= 4;
        try {
          q1(l, t, a);
        } finally {
          el = i, O.p = e, E.T = u;
        }
      }
      Dl = 1, mo(), yo(), vo();
    }
  }
  function mo() {
    if (Dl === 1) {
      Dl = 0;
      var l = oa, t = Su, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = E.T, E.T = null;
        var u = O.p;
        O.p = 2;
        var e = el;
        el |= 4;
        try {
          K0(t, l);
          var n = Lc, i = ls(l.containerInfo), c = n.focusedElem, s = n.selectionRange;
          if (i !== c && c && c.ownerDocument && Pf(c.ownerDocument.documentElement, c)) {
            if (s !== null && vi(c)) {
              var h = s.start, b = s.end;
              if (b === void 0 && (b = h), "selectionStart" in c) c.selectionStart = h, c.selectionEnd = Math.min(b, c.value.length);
              else {
                var A = c.ownerDocument || document, g = A && A.defaultView || window;
                if (g.getSelection) {
                  var S = g.getSelection(), C = c.textContent.length, G = Math.min(s.start, C), ol = s.end === void 0 ? G : Math.min(s.end, C);
                  !S.extend && G > ol && (i = ol, ol = G, G = i);
                  var m = If(c, G), o = If(c, ol);
                  if (m && o && (S.rangeCount !== 1 || S.anchorNode !== m.node || S.anchorOffset !== m.offset || S.focusNode !== o.node || S.focusOffset !== o.offset)) {
                    var v = A.createRange();
                    v.setStart(m.node, m.offset), S.removeAllRanges(), G > ol ? (S.addRange(v), S.extend(o.node, o.offset)) : (v.setEnd(o.node, o.offset), S.addRange(v));
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
          qn = !!Zc, Lc = Zc = null;
        } finally {
          el = e, O.p = u, E.T = a;
        }
      }
      l.current = t, Dl = 2;
    }
  }
  function yo() {
    if (Dl === 2) {
      Dl = 0;
      var l = oa, t = Su, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = E.T, E.T = null;
        var u = O.p;
        O.p = 2;
        var e = el;
        el |= 4;
        try {
          X0(l, t.alternate, t);
        } finally {
          el = e, O.p = u, E.T = a;
        }
      }
      Dl = 3;
    }
  }
  function vo() {
    if (Dl === 4 || Dl === 3) {
      Dl = 0, rd();
      var l = oa, t = Su, a = wt, u = P0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Dl = 5 : (Dl = 0, Su = oa = null, ho(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (sa = null), $n(a), t = t.stateNode, tt && typeof tt.onCommitFiberRoot == "function") try {
        tt.onCommitFiberRoot(Mu, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (u !== null) {
        t = E.T, e = O.p, O.p = 2, E.T = null;
        try {
          for (var n = l.onRecoverableError, i = 0; i < u.length; i++) {
            var c = u[i];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          E.T = t, O.p = e;
        }
      }
      (wt & 3) !== 0 && An(), Wt(l), e = l.pendingLanes, (a & 261930) !== 0 && (e & 42) !== 0 ? l === Uc ? ce++ : (ce = 0, Uc = l) : ce = 0, fe(0, !1);
    }
  }
  function ho(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Lu(t)));
  }
  function An() {
    return mo(), yo(), vo(), go();
  }
  function go() {
    if (Dl !== 5) return !1;
    var l = oa, t = Oc;
    Oc = 0;
    var a = $n(wt), u = E.T, e = O.p;
    try {
      O.p = 32 > a ? 32 : a, E.T = null, a = Dc, Dc = null;
      var n = oa, i = wt;
      if (Dl = 0, Su = oa = null, wt = 0, (el & 6) !== 0) throw Error(y(331));
      var c = el;
      if (el |= 4, F0(n.current), w0(n, n.current, i, a), el = c, fe(0, !1), tt && typeof tt.onPostCommitFiberRoot == "function") try {
        tt.onPostCommitFiberRoot(Mu, n);
      } catch {
      }
      return !0;
    } finally {
      O.p = e, E.T = u, ho(l, t);
    }
  }
  function So(l, t, a) {
    t = yt(a, t), t = cc(l.stateNode, t, 2), l = Ba(l, t, 2), l !== null && (Me(l, 2), Wt(l));
  }
  function cl(l, t, a) {
    if (l.tag === 3) So(l, l, a);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        So(t, l, a);
        break;
      } else if (t.tag === 1) {
        var u = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (sa === null || !sa.has(u))) {
          l = yt(a, l), a = S0(2), u = Ba(t, a, 2), u !== null && (r0(a, u, t, l), Me(u, 2), Wt(u));
          break;
        }
      }
      t = t.return;
    }
  }
  function Nc(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new B1();
      var e = /* @__PURE__ */ new Set();
      u.set(t, e);
    } else e = u.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), u.set(t, e));
    e.has(a) || (Ec = !0, e.add(a), l = Z1.bind(null, l, t, a), t.then(l, l));
  }
  function Z1(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, dl === l && (F & a) === a && (rl === 4 || rl === 3 && (F & 62914560) === F && 300 > lt() - hn ? (el & 2) === 0 && ru(l, 0) : _c |= a, gu === F && (gu = 0)), Wt(l);
  }
  function ro(l, t) {
    t === 0 && (t = yf()), l = Ma(l, t), l !== null && (Me(l, t), Wt(l));
  }
  function L1(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), ro(l, a);
  }
  function x1(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var u = l.stateNode, e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(y(314));
    }
    u !== null && u.delete(t), ro(l, a);
  }
  function V1(l, t) {
    return Jn(l, t);
  }
  var Tn = null, pu = null, qc = !1, zn = !1, Rc = !1, ma = 0;
  function Wt(l) {
    l !== pu && l.next === null && (pu === null ? Tn = pu = l : pu = pu.next = l), zn = !0, qc || (qc = !0, J1());
  }
  function fe(l, t) {
    if (!Rc && zn) {
      Rc = !0;
      do
        for (var a = !1, u = Tn; u !== null; ) {
          if (!t) if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var i = u.suspendedLanes, c = u.pingedLanes;
              n = (1 << 31 - at(42 | l) + 1) - 1, n &= e & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = !0, To(u, n));
          } else n = F, n = _e(u, u === dl ? n : 0, u.cancelPendingCommit !== null || u.timeoutHandle !== -1), (n & 3) === 0 || Ou(u, n) || (a = !0, To(u, n));
          u = u.next;
        }
      while (a);
      Rc = !1;
    }
  }
  function K1() {
    bo();
  }
  function bo() {
    zn = qc = !1;
    var l = 0;
    ma !== 0 && lm() && (l = ma);
    for (var t = lt(), a = null, u = Tn; u !== null; ) {
      var e = u.next, n = po(u, t);
      n === 0 ? (u.next = null, a === null ? Tn = e : a.next = e, e === null && (pu = a)) : (a = u, (l !== 0 || (n & 3) !== 0) && (zn = !0)), u = e;
    }
    Dl !== 0 && Dl !== 5 || fe(l, !1), ma !== 0 && (ma = 0);
  }
  function po(l, t) {
    for (var a = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - at(n), c = 1 << i, s = e[i];
      s === -1 ? ((c & a) === 0 || (c & u) !== 0) && (e[i] = Md(c, t)) : s <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = dl, a = F, a = _e(l, l === t ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u = l.callbackNode, a === 0 || l === t && (il === 2 || il === 9) || l.cancelPendingCommit !== null) return u !== null && u !== null && wn(u), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Ou(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (u !== null && wn(u), $n(a)) {
        case 2:
        case 8:
          a = df;
          break;
        case 32:
          a = Ae;
          break;
        case 268435456:
          a = mf;
          break;
        default:
          a = Ae;
      }
      return u = Ao.bind(null, l), a = Jn(a, u), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return u !== null && u !== null && wn(u), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Ao(l, t) {
    if (Dl !== 0 && Dl !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (An() && l.callbackNode !== a) return null;
    var u = F;
    return u = _e(l, l === dl ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u === 0 ? null : (to(l, u, t), po(l, lt()), l.callbackNode != null && l.callbackNode === a ? Ao.bind(null, l) : null);
  }
  function To(l, t) {
    if (An()) return null;
    to(l, t, !0);
  }
  function J1() {
    am(function() {
      (el & 6) !== 0 ? Jn(of, K1) : bo();
    });
  }
  function jc() {
    if (ma === 0) {
      var l = nu;
      l === 0 && (l = Te, Te <<= 1, (Te & 261888) === 0 && (Te = 256)), ma = l;
    }
    return ma;
  }
  function zo(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : He("" + l);
  }
  function Eo(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function w1(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = zo((e[xl] || null).action), i = u.submitter;
      i && (t = (t = i[xl] || null) ? zo(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
      var c = new Re("action", "action", null, u, e);
      l.push({
        event: c,
        listeners: [{
          instance: null,
          listener: function() {
            if (u.defaultPrevented) {
              if (ma !== 0) {
                var s = i ? Eo(e, i) : new FormData(e);
                tc(a, {
                  pending: !0,
                  data: s,
                  method: e.method,
                  action: n
                }, null, s);
              }
            } else typeof n == "function" && (c.preventDefault(), s = i ? Eo(e, i) : new FormData(e), tc(a, {
              pending: !0,
              data: s,
              method: e.method,
              action: n
            }, n, s));
          },
          currentTarget: e
        }]
      });
    }
  }
  for (var Bc = 0; Bc < ri.length; Bc++) {
    var Yc = ri[Bc];
    Tt(Yc.toLowerCase(), "on" + (Yc[0].toUpperCase() + Yc.slice(1)));
  }
  Tt(us, "onAnimationEnd"), Tt(es, "onAnimationIteration"), Tt(ns, "onAnimationStart"), Tt("dblclick", "onDoubleClick"), Tt("focusin", "onFocus"), Tt("focusout", "onBlur"), Tt(f1, "onTransitionRun"), Tt(s1, "onTransitionStart"), Tt(o1, "onTransitionCancel"), Tt(is, "onTransitionEnd"), Ka("onMouseEnter", ["mouseout", "mouseover"]), Ka("onMouseLeave", ["mouseout", "mouseover"]), Ka("onPointerEnter", ["pointerout", "pointerover"]), Ka("onPointerLeave", ["pointerout", "pointerover"]), Ta("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ta("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ta("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ta("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ta("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ta("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var se = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), W1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(se));
  function _o(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a], e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t) for (var i = u.length - 1; 0 <= i; i--) {
          var c = u[i], s = c.instance, h = c.currentTarget;
          if (c = c.listener, s !== n && e.isPropagationStopped()) break l;
          n = c, e.currentTarget = h;
          try {
            n(e);
          } catch (b) {
            Ye(b);
          }
          e.currentTarget = null, n = s;
        }
        else for (i = 0; i < u.length; i++) {
          if (c = u[i], s = c.instance, h = c.currentTarget, c = c.listener, s !== n && e.isPropagationStopped()) break l;
          n = c, e.currentTarget = h;
          try {
            n(e);
          } catch (b) {
            Ye(b);
          }
          e.currentTarget = null, n = s;
        }
      }
    }
  }
  function $(l, t) {
    var a = t[Fn];
    a === void 0 && (a = t[Fn] = /* @__PURE__ */ new Set());
    var u = l + "__bubble";
    a.has(u) || (Oo(t, l, 2, !1), a.add(u));
  }
  function Gc(l, t, a) {
    var u = 0;
    t && (u |= 4), Oo(a, l, u, t);
  }
  var En = "_reactListening" + Math.random().toString(36).slice(2);
  function Mo(l) {
    if (!l[En]) {
      l[En] = !0, Af.forEach(function(a) {
        a !== "selectionchange" && (W1.has(a) || Gc(a, !1, l), Gc(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[En] || (t[En] = !0, Gc("selectionchange", !1, t));
    }
  }
  function Oo(l, t, a, u) {
    switch (ld(t)) {
      case 2:
        var e = Em;
        break;
      case 8:
        e = _m;
        break;
      default:
        e = Pc;
    }
    a = e.bind(null, t, a, l), e = void 0, !ni || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), u ? e !== void 0 ? l.addEventListener(t, a, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, a, !0) : e !== void 0 ? l.addEventListener(t, a, { passive: e }) : l.addEventListener(t, a, !1);
  }
  function Qc(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null) l: for (; ; ) {
      if (u === null) return;
      var i = u.tag;
      if (i === 3 || i === 4) {
        var c = u.stateNode.containerInfo;
        if (c === e) break;
        if (i === 4) for (i = u.return; i !== null; ) {
          var s = i.tag;
          if ((s === 3 || s === 4) && i.stateNode.containerInfo === e) return;
          i = i.return;
        }
        for (; c !== null; ) {
          if (i = La(c), i === null) return;
          if (s = i.tag, s === 5 || s === 6 || s === 26 || s === 27) {
            u = n = i;
            continue l;
          }
          c = c.parentNode;
        }
      }
      u = u.return;
    }
    qf(function() {
      var h = n, b = ui(a), A = [];
      l: {
        var g = cs.get(l);
        if (g !== void 0) {
          var S = Re, C = l;
          switch (l) {
            case "keypress":
              if (Ne(a) === 0) break l;
            case "keydown":
            case "keyup":
              S = Kd;
              break;
            case "focusin":
              C = "focus", S = si;
              break;
            case "focusout":
              C = "blur", S = si;
              break;
            case "beforeblur":
            case "afterblur":
              S = si;
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
              S = Bf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = Gd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = Jd;
              break;
            case us:
            case es:
            case ns:
              S = Qd;
              break;
            case is:
              S = wd;
              break;
            case "scroll":
            case "scrollend":
              S = Yd;
              break;
            case "wheel":
              S = Wd;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = Xd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = Gf;
              break;
            case "toggle":
            case "beforetoggle":
              S = $d;
          }
          var G = (t & 4) !== 0, ol = !G && (l === "scroll" || l === "scrollend"), m = G ? g !== null ? g + "Capture" : null : g;
          G = [];
          for (var o = h, v; o !== null; ) {
            var p = o;
            if (v = p.stateNode, p = p.tag, p !== 5 && p !== 26 && p !== 27 || v === null || m === null || (p = Cu(o, m), p != null && G.push(oe(o, p, v))), ol) break;
            o = o.return;
          }
          0 < G.length && (g = new S(g, C, null, a, b), A.push({
            event: g,
            listeners: G
          }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (g = l === "mouseover" || l === "pointerover", S = l === "mouseout" || l === "pointerout", g && a !== ai && (C = a.relatedTarget || a.fromElement) && (La(C) || C[Du])) break l;
          if ((S || g) && (g = b.window === b ? b : (g = b.ownerDocument) ? g.defaultView || g.parentWindow : window, S ? (C = a.relatedTarget || a.toElement, S = h, C = C ? La(C) : null, C !== null && (ol = Z(C), G = C.tag, C !== ol || G !== 5 && G !== 27 && G !== 6) && (C = null)) : (S = null, C = h), S !== C)) {
            if (G = Bf, p = "onMouseLeave", m = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (G = Gf, p = "onPointerLeave", m = "onPointerEnter", o = "pointer"), ol = S == null ? g : Hu(S), v = C == null ? g : Hu(C), g = new G(p, o + "leave", S, a, b), g.target = ol, g.relatedTarget = v, p = null, La(b) === h && (G = new G(m, o + "enter", C, a, b), G.target = v, G.relatedTarget = ol, p = G), ol = p, S && C) t: {
              for (G = $1, m = S, o = C, v = 0, p = m; p; p = G(p)) v++;
              p = 0;
              for (var j = o; j; j = G(j)) p++;
              for (; 0 < v - p; ) m = G(m), v--;
              for (; 0 < p - v; ) o = G(o), p--;
              for (; v--; ) {
                if (m === o || o !== null && m === o.alternate) {
                  G = m;
                  break t;
                }
                m = G(m), o = G(o);
              }
              G = null;
            }
            else G = null;
            S !== null && Do(A, g, S, G, !1), C !== null && ol !== null && Do(A, ol, C, G, !0);
          }
        }
        l: {
          if (g = h ? Hu(h) : window, S = g.nodeName && g.nodeName.toLowerCase(), S === "select" || S === "input" && g.type === "file") var tl = Jf;
          else if (Vf(g)) if (wf) tl = n1;
          else {
            tl = u1;
            var N = a1;
          }
          else S = g.nodeName, !S || S.toLowerCase() !== "input" || g.type !== "checkbox" && g.type !== "radio" ? h && ti(h.elementType) && (tl = Jf) : tl = e1;
          if (tl && (tl = tl(l, h))) {
            Kf(A, tl, a, b);
            break l;
          }
          N && N(l, g, h), l === "focusout" && h && g.type === "number" && h.memoizedProps.value != null && li(g, "number", g.value);
        }
        switch (N = h ? Hu(h) : window, l) {
          case "focusin":
            (Vf(N) || N.contentEditable === "true") && (ka = N, hi = h, Qu = null);
            break;
          case "focusout":
            Qu = hi = ka = null;
            break;
          case "mousedown":
            gi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gi = !1, ts(A, a, b);
            break;
          case "selectionchange":
            if (c1) break;
          case "keydown":
          case "keyup":
            ts(A, a, b);
        }
        var x;
        if (di) l: {
          switch (l) {
            case "compositionstart":
              var k = "onCompositionStart";
              break l;
            case "compositionend":
              k = "onCompositionEnd";
              break l;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break l;
          }
          k = void 0;
        }
        else Fa ? Lf(l, a) && (k = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (k = "onCompositionStart");
        k && (Qf && a.locale !== "ko" && (Fa || k !== "onCompositionStart" ? k === "onCompositionEnd" && Fa && (x = Rf()) : (It = b, ii = "value" in It ? It.value : It.textContent, Fa = !0)), N = _n(h, k), 0 < N.length && (k = new Yf(k, l, null, a, b), A.push({
          event: k,
          listeners: N
        }), x ? k.data = x : (x = xf(a), x !== null && (k.data = x)))), (x = kd ? Id(l, a) : Pd(l, a)) && (k = _n(h, "onBeforeInput"), 0 < k.length && (N = new Yf("onBeforeInput", "beforeinput", null, a, b), A.push({
          event: N,
          listeners: k
        }), N.data = x)), w1(A, l, h, a, b);
      }
      _o(A, t);
    });
  }
  function oe(l, t, a) {
    return {
      instance: l,
      listener: t,
      currentTarget: a
    };
  }
  function _n(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Cu(l, a), e != null && u.unshift(oe(l, e, n)), e = Cu(l, t), e != null && u.push(oe(l, e, n))), l.tag === 3) return u;
      l = l.return;
    }
    return [];
  }
  function $1(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Do(l, t, a, u, e) {
    for (var n = t._reactName, i = []; a !== null && a !== u; ) {
      var c = a, s = c.alternate, h = c.stateNode;
      if (c = c.tag, s !== null && s === u) break;
      c !== 5 && c !== 26 && c !== 27 || h === null || (s = h, e ? (h = Cu(a, n), h != null && i.unshift(oe(a, h, s))) : e || (h = Cu(a, n), h != null && i.push(oe(a, h, s)))), a = a.return;
    }
    i.length !== 0 && l.push({
      event: t,
      listeners: i
    });
  }
  var F1 = /\r\n?/g, k1 = /\u0000|\uFFFD/g;
  function Uo(l) {
    return (typeof l == "string" ? l : "" + l).replace(F1, `
`).replace(k1, "");
  }
  function Ho(l, t) {
    return t = Uo(t), Uo(l) === t;
  }
  function sl(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string" ? t === "body" || t === "textarea" && u === "" || wa(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && wa(l, "" + u);
        break;
      case "className":
        De(l, "class", u);
        break;
      case "tabIndex":
        De(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        De(l, a, u);
        break;
      case "style":
        Cf(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          De(l, "data", u);
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
        u = He("" + u), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof n == "function" && (a === "formAction" ? (t !== "input" && sl(l, t, "name", e.name, e, null), sl(l, t, "formEncType", e.formEncType, e, null), sl(l, t, "formMethod", e.formMethod, e, null), sl(l, t, "formTarget", e.formTarget, e, null)) : (sl(l, t, "encType", e.encType, e, null), sl(l, t, "method", e.method, e, null), sl(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = He("" + u), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = Nt);
        break;
      case "onScroll":
        u != null && $("scroll", l);
        break;
      case "onScrollEnd":
        u != null && $("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(y(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(y(60));
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
        a = He("" + u), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
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
        $("beforetoggle", l), $("toggle", l), Oe(l, "popover", u);
        break;
      case "xlinkActuate":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        Ct(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        Ct(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        Ct(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        Oe(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = jd.get(a) || a, Oe(l, a, u));
    }
  }
  function Xc(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        Cf(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(y(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(y(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string" ? wa(l, u) : (typeof u == "number" || typeof u == "bigint") && wa(l, "" + u);
        break;
      case "onScroll":
        u != null && $("scroll", l);
        break;
      case "onScrollEnd":
        u != null && $("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = Nt);
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
        if (!Tf.hasOwnProperty(a)) l: {
          if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), t = a.slice(2, e ? a.length - 7 : void 0), n = l[xl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof u == "function")) {
            typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, u, e);
            break l;
          }
          a in l ? l[a] = u : u === !0 ? l.setAttribute(a, "") : Oe(l, a, u);
        }
    }
  }
  function jl(l, t, a) {
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
        $("error", l), $("load", l);
        var u = !1, e = !1, n;
        for (n in a) if (a.hasOwnProperty(n)) {
          var i = a[n];
          if (i != null) switch (n) {
            case "src":
              u = !0;
              break;
            case "srcSet":
              e = !0;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(y(137, t));
            default:
              sl(l, t, n, i, a, null);
          }
        }
        e && sl(l, t, "srcSet", a.srcSet, a, null), u && sl(l, t, "src", a.src, a, null);
        return;
      case "input":
        $("invalid", l);
        var c = n = i = e = null, s = null, h = null;
        for (u in a) if (a.hasOwnProperty(u)) {
          var b = a[u];
          if (b != null) switch (u) {
            case "name":
              e = b;
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
              if (b != null) throw Error(y(137, t));
              break;
            default:
              sl(l, t, u, b, a, null);
          }
        }
        Of(l, n, c, s, h, i, e, !1);
        return;
      case "select":
        $("invalid", l), u = i = n = null;
        for (e in a) if (a.hasOwnProperty(e) && (c = a[e], c != null)) switch (e) {
          case "value":
            n = c;
            break;
          case "defaultValue":
            i = c;
            break;
          case "multiple":
            u = c;
          default:
            sl(l, t, e, c, a, null);
        }
        t = n, a = i, l.multiple = !!u, t != null ? Ja(l, !!u, t, !1) : a != null && Ja(l, !!u, a, !0);
        return;
      case "textarea":
        $("invalid", l), n = e = u = null;
        for (i in a) if (a.hasOwnProperty(i) && (c = a[i], c != null)) switch (i) {
          case "value":
            u = c;
            break;
          case "defaultValue":
            e = c;
            break;
          case "children":
            n = c;
            break;
          case "dangerouslySetInnerHTML":
            if (c != null) throw Error(y(91));
            break;
          default:
            sl(l, t, i, c, a, null);
        }
        Uf(l, u, e, n);
        return;
      case "option":
        for (s in a) a.hasOwnProperty(s) && (u = a[s], u != null) && (s === "selected" ? l.selected = u && typeof u != "function" && typeof u != "symbol" : sl(l, t, s, u, a, null));
        return;
      case "dialog":
        $("beforetoggle", l), $("toggle", l), $("cancel", l), $("close", l);
        break;
      case "iframe":
      case "object":
        $("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < se.length; u++) $(se[u], l);
        break;
      case "image":
        $("error", l), $("load", l);
        break;
      case "details":
        $("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        $("error", l), $("load", l);
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
            throw Error(y(137, t));
          default:
            sl(l, t, h, u, a, null);
        }
        return;
      default:
        if (ti(t)) {
          for (b in a) a.hasOwnProperty(b) && (u = a[b], u !== void 0 && Xc(l, t, b, u, a, void 0));
          return;
        }
    }
    for (c in a) a.hasOwnProperty(c) && (u = a[c], u != null && sl(l, t, c, u, a, null));
  }
  function I1(l, t, a, u) {
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
        var e = null, n = null, i = null, c = null, s = null, h = null, b = null;
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
              u.hasOwnProperty(S) || sl(l, t, S, null, u, A);
          }
        }
        for (var g in u) {
          var S = u[g];
          if (A = a[g], u.hasOwnProperty(g) && (S != null || A != null)) switch (g) {
            case "type":
              n = S;
              break;
            case "name":
              e = S;
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
              if (S != null) throw Error(y(137, t));
              break;
            default:
              S !== A && sl(l, t, g, S, u, A);
          }
        }
        Pn(l, i, c, s, h, b, n, e);
        return;
      case "select":
        S = i = c = g = null;
        for (n in a) if (s = a[n], a.hasOwnProperty(n) && s != null) switch (n) {
          case "value":
            break;
          case "multiple":
            S = s;
          default:
            u.hasOwnProperty(n) || sl(l, t, n, null, u, s);
        }
        for (e in u) if (n = u[e], s = a[e], u.hasOwnProperty(e) && (n != null || s != null)) switch (e) {
          case "value":
            g = n;
            break;
          case "defaultValue":
            c = n;
            break;
          case "multiple":
            i = n;
          default:
            n !== s && sl(l, t, e, n, u, s);
        }
        t = c, a = i, u = S, g != null ? Ja(l, !!a, g, !1) : !!u != !!a && (t != null ? Ja(l, !!a, t, !0) : Ja(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        S = g = null;
        for (c in a) if (e = a[c], a.hasOwnProperty(c) && e != null && !u.hasOwnProperty(c)) switch (c) {
          case "value":
            break;
          case "children":
            break;
          default:
            sl(l, t, c, null, u, e);
        }
        for (i in u) if (e = u[i], n = a[i], u.hasOwnProperty(i) && (e != null || n != null)) switch (i) {
          case "value":
            g = e;
            break;
          case "defaultValue":
            S = e;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (e != null) throw Error(y(91));
            break;
          default:
            e !== n && sl(l, t, i, e, u, n);
        }
        Df(l, g, S);
        return;
      case "option":
        for (var C in a) g = a[C], a.hasOwnProperty(C) && g != null && !u.hasOwnProperty(C) && (C === "selected" ? l.selected = !1 : sl(l, t, C, null, u, g));
        for (s in u) g = u[s], S = a[s], u.hasOwnProperty(s) && g !== S && (g != null || S != null) && (s === "selected" ? l.selected = g && typeof g != "function" && typeof g != "symbol" : sl(l, t, s, g, u, S));
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
        for (var G in a) g = a[G], a.hasOwnProperty(G) && g != null && !u.hasOwnProperty(G) && sl(l, t, G, null, u, g);
        for (h in u) if (g = u[h], S = a[h], u.hasOwnProperty(h) && g !== S && (g != null || S != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (g != null) throw Error(y(137, t));
            break;
          default:
            sl(l, t, h, g, u, S);
        }
        return;
      default:
        if (ti(t)) {
          for (var ol in a) g = a[ol], a.hasOwnProperty(ol) && g !== void 0 && !u.hasOwnProperty(ol) && Xc(l, t, ol, void 0, u, g);
          for (b in u) g = u[b], S = a[b], !u.hasOwnProperty(b) || g === S || g === void 0 && S === void 0 || Xc(l, t, b, g, u, S);
          return;
        }
    }
    for (var m in a) g = a[m], a.hasOwnProperty(m) && g != null && !u.hasOwnProperty(m) && sl(l, t, m, null, u, g);
    for (A in u) g = u[A], S = a[A], !u.hasOwnProperty(A) || g === S || g == null && S == null || sl(l, t, A, g, u, S);
  }
  function Co(l) {
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
  function P1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0; u < a.length; u++) {
        var e = a[u], n = e.transferSize, i = e.initiatorType, c = e.duration;
        if (n && c && Co(i)) {
          for (i = 0, c = e.responseEnd, u += 1; u < a.length; u++) {
            var s = a[u], h = s.startTime;
            if (h > c) break;
            var b = s.transferSize, A = s.initiatorType;
            b && Co(A) && (s = s.responseEnd, i += b * (s < c ? 1 : (c - h) / (s - h)));
          }
          if (--u, t += 8 * (n + i) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Zc = null, Lc = null;
  function Mn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function No(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function qo(l, t) {
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
  function xc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Vc = null;
  function lm() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Vc ? !1 : (Vc = l, !0) : (Vc = null, !1);
  }
  var Ro = typeof setTimeout == "function" ? setTimeout : void 0, tm = typeof clearTimeout == "function" ? clearTimeout : void 0, jo = typeof Promise == "function" ? Promise : void 0, am = typeof queueMicrotask == "function" ? queueMicrotask : typeof jo < "u" ? function(l) {
    return jo.resolve(null).then(l).catch(um);
  } : Ro;
  function um(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function ya(l) {
    return l === "head";
  }
  function Bo(l, t) {
    var a = t, u = 0;
    do {
      var e = a.nextSibling;
      if (l.removeChild(a), e && e.nodeType === 8) if (a = e.data, a === "/$" || a === "/&") {
        if (u === 0) {
          l.removeChild(e), Eu(t);
          return;
        }
        u--;
      } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") u++;
      else if (a === "html") de(l.ownerDocument.documentElement);
      else if (a === "head") {
        a = l.ownerDocument.head, de(a);
        for (var n = a.firstChild; n; ) {
          var i = n.nextSibling, c = n.nodeName;
          n[Uu] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n), n = i;
        }
      } else a === "body" && de(l.ownerDocument.body);
      a = e;
    } while (a);
    Eu(t);
  }
  function Yo(l, t) {
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
  function Kc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Kc(a), kn(a);
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
  function em(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (u) {
        if (!l[Uu]) switch (t) {
          case "meta":
            if (!l.hasAttribute("itemprop")) break;
            return l;
          case "link":
            if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence")) break;
            if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title)) break;
            return l;
          case "style":
            if (l.hasAttribute("data-precedence")) break;
            return l;
          case "script":
            if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
            return l;
          default:
            return l;
        }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (l = bt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function nm(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = bt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Go(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = bt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Jc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function wc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function im(l, t) {
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
  function bt(l) {
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
  var Wc = null;
  function Qo(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return bt(l.nextSibling);
          t--;
        } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Xo(l) {
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
  function Zo(l, t, a) {
    switch (t = Mn(a), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(y(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(y(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(y(454));
        return l;
      default:
        throw Error(y(451));
    }
  }
  function de(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    kn(l);
  }
  var pt = /* @__PURE__ */ new Map(), Lo = /* @__PURE__ */ new Set();
  function On(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var $t = O.d;
  O.d = {
    f: cm,
    r: fm,
    D: sm,
    C: om,
    L: dm,
    m: mm,
    X: vm,
    S: ym,
    M: hm
  };
  function cm() {
    var l = $t.f(), t = rn();
    return l || t;
  }
  function fm(l) {
    var t = xa(l);
    t !== null && t.tag === 5 && t.type === "form" ? i0(t) : $t.r(l);
  }
  var Au = typeof document > "u" ? null : document;
  function xo(l, t, a) {
    var u = Au;
    if (u && typeof t == "string" && t) {
      var e = dt(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof a == "string" && (e += '[crossorigin="' + a + '"]'), Lo.has(e) || (Lo.add(e), l = {
        rel: l,
        crossOrigin: a,
        href: t
      }, u.querySelector(e) === null && (t = u.createElement("link"), jl(t, "link", l), Ul(t), u.head.appendChild(t)));
    }
  }
  function sm(l) {
    $t.D(l), xo("dns-prefetch", l, null);
  }
  function om(l, t) {
    $t.C(l, t), xo("preconnect", l, t);
  }
  function dm(l, t, a) {
    $t.L(l, t, a);
    var u = Au;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + dt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + dt(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + dt(a.imageSizes) + '"]')) : e += '[href="' + dt(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = Tu(l);
          break;
        case "script":
          n = zu(l);
      }
      pt.has(n) || (l = q({
        rel: "preload",
        href: t === "image" && a && a.imageSrcSet ? void 0 : l,
        as: t
      }, a), pt.set(n, l), u.querySelector(e) !== null || t === "style" && u.querySelector(me(n)) || t === "script" && u.querySelector(ye(n)) || (t = u.createElement("link"), jl(t, "link", l), Ul(t), u.head.appendChild(t)));
    }
  }
  function mm(l, t) {
    $t.m(l, t);
    var a = Au;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + dt(u) + '"][href="' + dt(l) + '"]', n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = zu(l);
      }
      if (!pt.has(n) && (l = q({
        rel: "modulepreload",
        href: l
      }, t), pt.set(n, l), a.querySelector(e) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ye(n))) return;
        }
        u = a.createElement("link"), jl(u, "link", l), Ul(u), a.head.appendChild(u);
      }
    }
  }
  function ym(l, t, a) {
    $t.S(l, t, a);
    var u = Au;
    if (u && l) {
      var e = Va(u).hoistableStyles, n = Tu(l);
      t = t || "default";
      var i = e.get(n);
      if (!i) {
        var c = {
          loading: 0,
          preload: null
        };
        if (i = u.querySelector(me(n))) c.loading = 5;
        else {
          l = q({
            rel: "stylesheet",
            href: l,
            "data-precedence": t
          }, a), (a = pt.get(n)) && $c(l, a);
          var s = i = u.createElement("link");
          Ul(s), jl(s, "link", l), s._p = new Promise(function(h, b) {
            s.onload = h, s.onerror = b;
          }), s.addEventListener("load", function() {
            c.loading |= 1;
          }), s.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Dn(i, t, u);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, e.set(n, i);
      }
    }
  }
  function vm(l, t) {
    $t.X(l, t);
    var a = Au;
    if (a && l) {
      var u = Va(a).hoistableScripts, e = zu(l), n = u.get(e);
      n || (n = a.querySelector(ye(e)), n || (l = q({
        src: l,
        async: !0
      }, t), (t = pt.get(e)) && Fc(l, t), n = a.createElement("script"), Ul(n), jl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function hm(l, t) {
    $t.M(l, t);
    var a = Au;
    if (a && l) {
      var u = Va(a).hoistableScripts, e = zu(l), n = u.get(e);
      n || (n = a.querySelector(ye(e)), n || (l = q({
        src: l,
        async: !0,
        type: "module"
      }, t), (t = pt.get(e)) && Fc(l, t), n = a.createElement("script"), Ul(n), jl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Vo(l, t, a, u) {
    var e = (e = w.current) ? On(e) : null;
    if (!e) throw Error(y(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Tu(a.href), a = Va(e).hoistableStyles, u = a.get(t), u || (u = {
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
          var n = Va(e).hoistableStyles, i = n.get(l);
          if (i || (e = e.ownerDocument || e, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, n.set(l, i), (n = e.querySelector(me(l))) && !n._p && (i.instance = n, i.state.loading = 5), pt.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, pt.set(l, a), n || gm(e, l, a, i.state))), t && u === null) throw Error(y(528, ""));
          return i;
        }
        if (t && u !== null) throw Error(y(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = zu(a), a = Va(e).hoistableScripts, u = a.get(t), u || (u = {
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
        throw Error(y(444, l));
    }
  }
  function Tu(l) {
    return 'href="' + dt(l) + '"';
  }
  function me(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Ko(l) {
    return q({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function gm(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
      return u.loading |= 1;
    }), t.addEventListener("error", function() {
      return u.loading |= 2;
    }), jl(t, "link", a), Ul(t), l.head.appendChild(t));
  }
  function zu(l) {
    return '[src="' + dt(l) + '"]';
  }
  function ye(l) {
    return "script[async]" + l;
  }
  function Jo(l, t, a) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var u = l.querySelector('style[data-href~="' + dt(a.href) + '"]');
        if (u) return t.instance = u, Ul(u), u;
        var e = q({}, a, {
          "data-href": a.href,
          "data-precedence": a.precedence,
          href: null,
          precedence: null
        });
        return u = (l.ownerDocument || l).createElement("style"), Ul(u), jl(u, "style", e), Dn(u, a.precedence, l), t.instance = u;
      case "stylesheet":
        e = Tu(a.href);
        var n = l.querySelector(me(e));
        if (n) return t.state.loading |= 4, t.instance = n, Ul(n), n;
        u = Ko(a), (e = pt.get(e)) && $c(u, e), n = (l.ownerDocument || l).createElement("link"), Ul(n);
        var i = n;
        return i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), jl(n, "link", u), t.state.loading |= 4, Dn(n, a.precedence, l), t.instance = n;
      case "script":
        return n = zu(a.src), (e = l.querySelector(ye(n))) ? (t.instance = e, Ul(e), e) : (u = a, (e = pt.get(n)) && (u = q({}, a), Fc(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), Ul(e), jl(e, "link", u), l.head.appendChild(e), t.instance = e);
      case "void":
        return null;
      default:
        throw Error(y(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, Dn(u, a.precedence, l));
    return t.instance;
  }
  function Dn(l, t, a) {
    for (var u = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), e = u.length ? u[u.length - 1] : null, n = e, i = 0; i < u.length; i++) {
      var c = u[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function $c(l, t) {
    l.crossOrigin ??= t.crossOrigin, l.referrerPolicy ??= t.referrerPolicy, l.title ??= t.title;
  }
  function Fc(l, t) {
    l.crossOrigin ??= t.crossOrigin, l.referrerPolicy ??= t.referrerPolicy, l.integrity ??= t.integrity;
  }
  var Un = null;
  function wo(l, t, a) {
    if (Un === null) {
      var u = /* @__PURE__ */ new Map(), e = Un = /* @__PURE__ */ new Map();
      e.set(a, u);
    } else e = Un, u = e.get(a), u || (u = /* @__PURE__ */ new Map(), e.set(a, u));
    if (u.has(l)) return u;
    for (u.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
      var n = a[e];
      if (!(n[Uu] || n[Cl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = u.get(i);
        c ? c.push(n) : u.set(i, [n]);
      }
    }
    return u;
  }
  function Wo(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(a, t === "title" ? l.querySelector("head > title") : null);
  }
  function Sm(l, t, a) {
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
  function $o(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function rm(l, t, a, u) {
    if (a.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var e = Tu(u.href), n = t.querySelector(me(e));
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Hn.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = n, Ul(n);
          return;
        }
        n = t.ownerDocument || t, u = Ko(u), (e = pt.get(e)) && $c(u, e), n = n.createElement("link"), Ul(n);
        var i = n;
        i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), jl(n, "link", u), a.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = Hn.bind(l), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var kc = 0;
  function bm(l, t) {
    return l.stylesheets && l.count === 0 && Nn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
      var u = setTimeout(function() {
        if (l.stylesheets && Nn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && kc === 0 && (kc = 62500 * P1());
      var e = setTimeout(function() {
        if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Nn(l, l.stylesheets), l.unsuspend)) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, (l.imgBytes > kc ? 50 : 800) + t);
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(u), clearTimeout(e);
      };
    } : null;
  }
  function Hn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Nn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Cn = null;
  function Nn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Cn = /* @__PURE__ */ new Map(), t.forEach(pm, l), Cn = null, Hn.call(l));
  }
  function pm(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Cn.get(l);
      if (a) var u = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Cn.set(l, a);
        for (var e = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < e.length; n++) {
          var i = e[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), u = i);
        }
        u && a.set(null, u);
      }
      e = t.instance, i = e.getAttribute("data-precedence"), n = a.get(i) || u, n === u && a.set(null, e), a.set(i, e), this.count++, u = Hn.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var ve = {
    $$typeof: hl,
    Provider: null,
    Consumer: null,
    _currentValue: ul,
    _currentValue2: ul,
    _threadCount: 0
  };
  function Am(l, t, a, u, e, n, i, c, s) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Wn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wn(0), this.hiddenUpdates = Wn(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Tm(l, t, a, u, e, n, i, c, s, h, b, A) {
    return l = new Am(l, t, a, i, s, h, b, A, c), t = 1, n === !0 && (t |= 24), n = et(3, null, null, t), l.current = n, n.stateNode = l, t = Ci(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: a,
      cache: t
    }, ji(n), l;
  }
  function zm(l) {
    return l ? (l = lu, l) : lu;
  }
  function Fo(l, t, a, u, e, n) {
    e = zm(e), u.context === null ? u.context = e : u.pendingContext = e, u = ja(t), u.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (u.callback = n), a = Ba(l, u, t), a !== null && ($l(a, l, t), Ju(a, l, t));
  }
  function ko(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Ic(l, t) {
    ko(l, t), (l = l.alternate) && ko(l, t);
  }
  function Io(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ma(l, 67108864);
      t !== null && $l(t, l, 67108864), Ic(l, 67108864);
    }
  }
  function Po(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = rt();
      t = Sf(t);
      var a = Ma(l, t);
      a !== null && $l(a, l, t), Ic(l, t);
    }
  }
  var qn = !0;
  function Em(l, t, a, u) {
    var e = E.T;
    E.T = null;
    var n = O.p;
    try {
      O.p = 2, Pc(l, t, a, u);
    } finally {
      O.p = n, E.T = e;
    }
  }
  function _m(l, t, a, u) {
    var e = E.T;
    E.T = null;
    var n = O.p;
    try {
      O.p = 8, Pc(l, t, a, u);
    } finally {
      O.p = n, E.T = e;
    }
  }
  function Pc(l, t, a, u) {
    if (qn) {
      var e = lf(u);
      if (e === null) Qc(l, t, u, Rn, a), td(l, u);
      else if (Om(e, l, t, a, u)) u.stopPropagation();
      else if (td(l, u), t & 4 && -1 < Mm.indexOf(l)) {
        for (; e !== null; ) {
          var n = xa(e);
          if (n !== null) switch (n.tag) {
            case 3:
              if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                var i = Aa(n.pendingLanes);
                if (i !== 0) {
                  var c = n;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                    var s = 1 << 31 - at(i);
                    c.entanglements[1] |= s, i &= ~s;
                  }
                  Wt(n), (el & 6) === 0 && (gn = lt() + 500, fe(0, !1));
                }
              }
              break;
            case 31:
            case 13:
              c = Ma(n, 2), c !== null && $l(c, n, 2), rn(), Ic(n, 2);
          }
          if (n = lf(u), n === null && Qc(l, t, u, Rn, a), n === e) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else Qc(l, t, u, null, a);
    }
  }
  function lf(l) {
    return l = ui(l), tf(l);
  }
  var Rn = null;
  function tf(l) {
    if (Rn = null, l = La(l), l !== null) {
      var t = Z(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = B(t), l !== null) return l;
          l = null;
        } else if (a === 31) {
          if (l = Y(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Rn = l, null;
  }
  function ld(l) {
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
        switch (bd()) {
          case of:
            return 2;
          case df:
            return 8;
          case Ae:
          case pd:
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
  var af = !1, va = null, ha = null, ga = null, he = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), Sa = [], Mm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function td(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        va = null;
        break;
      case "dragenter":
      case "dragleave":
        ha = null;
        break;
      case "mouseover":
      case "mouseout":
        ga = null;
        break;
      case "pointerover":
      case "pointerout":
        he.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ge.delete(t.pointerId);
    }
  }
  function Se(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: u,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = xa(t), t !== null && Io(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function Om(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return va = Se(va, l, t, a, u, e), !0;
      case "dragenter":
        return ha = Se(ha, l, t, a, u, e), !0;
      case "mouseover":
        return ga = Se(ga, l, t, a, u, e), !0;
      case "pointerover":
        var n = e.pointerId;
        return he.set(n, Se(he.get(n) || null, l, t, a, u, e)), !0;
      case "gotpointercapture":
        return n = e.pointerId, ge.set(n, Se(ge.get(n) || null, l, t, a, u, e)), !0;
    }
    return !1;
  }
  function ad(l) {
    var t = La(l.target);
    if (t !== null) {
      var a = Z(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = B(a), t !== null) {
            l.blockedOn = t, bf(l.priority, function() {
              Po(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = Y(a), t !== null) {
            l.blockedOn = t, bf(l.priority, function() {
              Po(a);
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
  function jn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = lf(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(a.type, a);
        ai = u, a.target.dispatchEvent(u), ai = null;
      } else return t = xa(a), t !== null && Io(t), l.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function ud(l, t, a) {
    jn(l) && a.delete(t);
  }
  function Dm() {
    af = !1, va !== null && jn(va) && (va = null), ha !== null && jn(ha) && (ha = null), ga !== null && jn(ga) && (ga = null), he.forEach(ud), ge.forEach(ud);
  }
  function Bn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, af || (af = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, Dm)));
  }
  var Yn = null;
  function ed(l) {
    Yn !== l && (Yn = l, r.unstable_scheduleCallback(r.unstable_NormalPriority, function() {
      Yn === l && (Yn = null);
      for (var t = 0; t < l.length; t += 3) {
        var a = l[t], u = l[t + 1], e = l[t + 2];
        if (typeof u != "function") {
          if (tf(u || a) === null) continue;
          break;
        }
        var n = xa(a);
        n !== null && (l.splice(t, 3), t -= 3, tc(n, {
          pending: !0,
          data: e,
          method: a.method,
          action: u
        }, u, e));
      }
    }));
  }
  function Eu(l) {
    function t(s) {
      return Bn(s, l);
    }
    va !== null && Bn(va, l), ha !== null && Bn(ha, l), ga !== null && Bn(ga, l), he.forEach(t), ge.forEach(t);
    for (var a = 0; a < Sa.length; a++) {
      var u = Sa[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < Sa.length && (a = Sa[0], a.blockedOn === null); ) ad(a), a.blockedOn === null && Sa.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null) for (u = 0; u < a.length; u += 3) {
      var e = a[u], n = a[u + 1], i = e[xl] || null;
      if (typeof n == "function") i || ed(a);
      else if (i) {
        var c = null;
        if (n && n.hasAttribute("formAction")) {
          if (e = n, i = n[xl] || null) c = i.formAction;
          else if (tf(e) !== null) continue;
        } else c = i.action;
        typeof c == "function" ? a[u + 1] = c : (a.splice(u, 3), u -= 3), ed(a);
      }
    }
  }
  function Um() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(i) {
            return e = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      e !== null && (e(), e = null), u || setTimeout(a, 20);
    }
    function a() {
      if (!u && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var u = !1, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        u = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
      };
    }
  }
  function uf(l) {
    this._internalRoot = l;
  }
  ef.prototype.render = uf.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(y(409));
    var a = t.current;
    Fo(a, rt(), l, t, null, null);
  }, ef.prototype.unmount = uf.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Fo(l.current, 2, null, l, null, null), rn(), t[Du] = null;
    }
  };
  function ef(l) {
    this._internalRoot = l;
  }
  ef.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = rf();
      l = {
        blockedOn: null,
        target: l,
        priority: t
      };
      for (var a = 0; a < Sa.length && t !== 0 && t < Sa[a].priority; a++) ;
      Sa.splice(a, 0, l), a === 0 && ad(l);
    }
  };
  var nd = M.version;
  if (nd !== "19.2.7") throw Error(y(527, nd, "19.2.7"));
  O.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(y(188)) : (l = Object.keys(l).join(","), Error(y(268, l)));
    return l = z(t), l = l !== null ? X(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Hm = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: E,
    reconcilerVersion: "19.2.7"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gn.isDisabled && Gn.supportsFiber) try {
      Mu = Gn.inject(Hm), tt = Gn;
    } catch {
    }
  }
  f.createRoot = function(l, t) {
    if (!V(l)) throw Error(y(299));
    var a = !1, u = "", e = _1, n = M1, i = O1;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Tm(l, 1, !1, null, null, a, u, null, e, n, i, Um), l[Du] = t.current, Mo(l), new uf(t);
  };
})), Vm = /* @__PURE__ */ Ht(((f, r) => {
  function M() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M);
      } catch (U) {
        console.error(U);
      }
  }
  M(), r.exports = xm();
})), st = /* @__PURE__ */ od(cf(), 1), Km = /* @__PURE__ */ od(Vm(), 1), Jm = class {
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
  on(f, r) {
    return this.listeners.has(f) || this.listeners.set(f, /* @__PURE__ */ new Set()), this.listeners.get(f).add(r), () => {
      this.listeners.get(f)?.delete(r);
    };
  }
  once(f, r) {
    const M = this.on(f, (U) => {
      r(U), M();
    });
    return M;
  }
  emit(f, r, M) {
    const U = {
      type: f,
      source: r,
      payload: M,
      timestamp: Date.now()
    };
    this.eventHistory.push(U), this.eventHistory.length > this.maxHistorySize && this.eventHistory.shift();
    const y = this.listeners.get(f);
    y && y.forEach((Z) => {
      try {
        Z(U);
      } catch (B) {
        console.error(`[EventBus] Error in listener for ${f}:`, B);
      }
    });
    const V = this.eventTarget ?? (typeof window < "u" ? window : void 0);
    if (V && typeof CustomEvent < "u") {
      const Z = new CustomEvent("platform-event", {
        detail: U,
        bubbles: !0
      });
      V.dispatchEvent(Z);
    }
  }
  getHistory(f) {
    return f ? this.eventHistory.filter((r) => r.type === f) : [...this.eventHistory];
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
}, Xn = new Jm(), Zn = {
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
}, wm = 15e3, be;
function dd(f = {}) {
  const r = f.targetWindow ?? (typeof window < "u" && window.parent !== window ? window.parent : void 0), M = f.targetOrigin ?? "*", U = /* @__PURE__ */ new Map();
  let y = 1;
  function V(B) {
    if (!Pm(B.data)) return;
    const Y = B.data;
    if ("id" in Y && Y.id !== void 0 && ("result" in Y || "error" in Y)) {
      const H = U.get(Y.id);
      if (!H) return;
      if (U.delete(Y.id), clearTimeout(H.timeout), Y.error) {
        H.reject(new Error(Y.error.message));
        return;
      }
      H.resolve(Y.result ?? null);
      return;
    }
    "method" in Y && typeof Y.method == "string" && f.onNotification?.(Y);
  }
  typeof window < "u" && window.addEventListener("message", V);
  function Z(B) {
    r?.postMessage(B, M);
  }
  return {
    initialize(B = null) {
      return this.request("ui/initialize", B);
    },
    callTool(B, Y = null) {
      return this.request("tools/call", {
        name: B,
        arguments: Y
      });
    },
    request(B, Y = null) {
      if (!r) return Promise.reject(/* @__PURE__ */ new Error("No MCP Apps host window is available"));
      const H = `${f.source ?? "micro-app"}-${y++}`, z = setTimeout(() => {
        const q = U.get(H);
        q && (U.delete(H), q.reject(/* @__PURE__ */ new Error(`MCP request timed out: ${B}`)));
      }, f.timeoutMs ?? wm), X = new Promise((q, Bl) => {
        U.set(H, {
          resolve: q,
          reject: Bl,
          timeout: z
        });
      });
      return Z({
        jsonrpc: "2.0",
        id: H,
        method: B,
        params: Y
      }), X;
    },
    notify(B, Y = null) {
      r && Z({
        jsonrpc: "2.0",
        method: B,
        params: Y
      });
    },
    dispose() {
      typeof window < "u" && window.removeEventListener("message", V);
      for (const B of U.values())
        clearTimeout(B.timeout), B.reject(/* @__PURE__ */ new Error("MCP bridge disposed"));
      U.clear();
    }
  };
}
function Wm(f) {
  return be?.dispose(), be = dd(f), be;
}
function md() {
  return be ??= dd(), be;
}
function $m(f, r) {
  md().notify(f, r);
}
function Fm(f, r) {
  return md().callTool(f, r);
}
async function km(f) {
  if (typeof window > "u" || window.parent === window) return id("standalone");
  try {
    const { App: r } = await import("./app-B92woykI.js"), M = new r({
      name: f.name,
      version: f.version
    }, f.capabilities ?? {}, {
      autoResize: !0,
      strict: !1,
      ...f.appOptions
    });
    return await Im(M.connect(), f.timeoutMs ?? 2500, "MCP Apps host connection timed out"), {
      status: "connected",
      app: M,
      async requestHostCompletion(U, y) {
        return yd((await M.createSamplingMessage({
          messages: [{
            role: "user",
            content: {
              type: "text",
              text: U
            }
          }],
          maxTokens: 320,
          systemPrompt: y
        })).content);
      },
      async updateModelContext(U) {
        await M.updateModelContext({ content: [{
          type: "text",
          text: U
        }] });
      },
      callServerTool(U, y = {}) {
        return M.callServerTool({
          name: U,
          arguments: y
        });
      },
      async dispose() {
        await M.close?.();
      }
    };
  } catch (r) {
    return id("error", r);
  }
}
function id(f, r) {
  return {
    status: f,
    error: r instanceof Error ? r : r ? new Error(String(r)) : void 0,
    requestHostCompletion() {
      return Promise.reject(/* @__PURE__ */ new Error("No MCP Apps host model runtime is connected"));
    },
    updateModelContext() {
      return Promise.resolve();
    },
    callServerTool() {
      return Promise.reject(/* @__PURE__ */ new Error("No MCP Apps host tool bridge is connected"));
    },
    dispose() {
      return Promise.resolve();
    }
  };
}
async function Im(f, r, M) {
  let U;
  try {
    return await Promise.race([f, new Promise((y, V) => {
      U = setTimeout(() => V(new Error(M)), r);
    })]);
  } finally {
    U && clearTimeout(U);
  }
}
function yd(f) {
  return typeof f == "string" ? f : f ? Array.isArray(f) ? f.map((r) => yd(r)).filter(Boolean).join(`
`) : typeof f == "object" && "text" in f && typeof f.text == "string" ? f.text : "" : "";
}
function Pm(f) {
  return !!(f && typeof f == "object" && "jsonrpc" in f && f.jsonrpc === "2.0");
}
function ly(f) {
  return f instanceof Error ? {
    name: f.name,
    message: f.message,
    stack: f.stack
  } : { message: typeof f == "string" ? f : "Unknown runtime error" };
}
function cd({ app: f, error: r, logger: M, source: U = "runtime", metadata: y }) {
  const V = {
    level: "error",
    message: `${f.name} failed in ${U}`,
    appId: f.id,
    source: U,
    error: ly(r),
    metadata: y,
    timestamp: Date.now()
  };
  return Xn.emit(Zn.APP_ERROR, f.id, V), M?.log(V), V;
}
function vd(f = hd()) {
  return typeof f?.modelContext?.registerTool == "function";
}
function fd(f, r = {}, M = hd()) {
  if (!vd(M)) return {
    supported: !1,
    unregister: () => {
    }
  };
  const U = r.signal ? void 0 : new AbortController(), y = r.signal ?? U?.signal;
  return M.modelContext.registerTool(f, {
    ...r,
    signal: y
  }), {
    supported: !0,
    unregister: () => U?.abort()
  };
}
function hd() {
  return typeof document > "u" ? void 0 : document;
}
function ty(f, r, M = {}) {
  const U = customElements.get(f);
  if (U) return U;
  class y extends HTMLElement {
    static observedAttributes = M.observedAttributes ?? [];
    cleanup;
    async connectedCallback() {
      const Z = this.createContext();
      try {
        const B = await r.mount(this, Z);
        this.cleanup = typeof B == "function" ? B : void 0, await ay(), this.dispatchEvent(new CustomEvent("micro-app:ready", {
          bubbles: !0,
          composed: !0,
          detail: {
            appId: Z.app.id,
            tagName: f,
            timestamp: Date.now()
          }
        })), Xn.emit(Zn.APP_LOADED, Z.app.id, { tagName: f });
      } catch (B) {
        throw cd({
          app: Z.app,
          error: B,
          logger: M.logger,
          source: "micro-app-connected-callback",
          metadata: { tagName: f }
        }), B;
      }
    }
    disconnectedCallback() {
      window.setTimeout(() => {
        try {
          this.cleanup?.(), r.unmount?.(this), Xn.emit(Zn.APP_UNLOADED, this.getAttribute("data-app-name") ?? f, { tagName: f });
        } catch (Z) {
          cd({
            app: {
              id: this.getAttribute("data-app-name") ?? f,
              name: this.getAttribute("data-app-name") ?? f
            },
            error: Z,
            logger: M.logger,
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
function ay() {
  return new Promise((f) => {
    requestAnimationFrame(() => requestAnimationFrame(() => f()));
  });
}
function sd(f, r, M) {
  const U = Zn[f];
  Xn.emit(U, r, M), $m("ui/notification", {
    type: U,
    source: r,
    payload: uy(M),
    timestamp: Date.now()
  });
}
function uy(f) {
  return f === void 0 ? null : JSON.parse(JSON.stringify(f));
}
var ey = /* @__PURE__ */ Ht(((f) => {
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), M = /* @__PURE__ */ Symbol.for("react.fragment");
  function U(y, V, Z) {
    var B = null;
    if (Z !== void 0 && (B = "" + Z), V.key !== void 0 && (B = "" + V.key), "key" in V) {
      Z = {};
      for (var Y in V) Y !== "key" && (Z[Y] = V[Y]);
    } else Z = V;
    return V = Z.ref, {
      $$typeof: r,
      type: y,
      key: B,
      ref: V !== void 0 ? V : null,
      props: Z
    };
  }
  f.jsx = U, f.jsxs = U;
})), ny = /* @__PURE__ */ Ht(((f, r) => {
  r.exports = ey();
})), Q = ny(), nf = "Draft analysis: billing has 1 overdue enterprise invoice, analytics reports a 2% conversion dip, and the admin flag billing-autopay is disabled. Recommended action: enable a 25% rollout and notify account owners.";
function iy() {
  const [f, r] = (0, st.useState)([{
    role: "assistant",
    text: "I can summarize app health, explain events, and suggest next actions across the platform."
  }]), [M, U] = (0, st.useState)("Why did billing conversion dip?"), [y, V] = (0, st.useState)("checking"), [Z, B] = (0, st.useState)("checking"), [Y, H] = (0, st.useState)("checking"), [z, X] = (0, st.useState)(!1), [q, Bl] = (0, st.useState)(!1), Ol = (0, st.useRef)();
  (0, st.useEffect)(() => {
    const I = Wm({ source: "ai-assistant" });
    return I.notify("ui/ready", {
      appId: "ai-assistant",
      tools: [
        "assistant.summarizeCase",
        "assistant.planWorkflow",
        "assistant.invokeTool"
      ]
    }), () => I.dispose();
  }, []), (0, st.useEffect)(() => {
    let I = !1;
    const K = () => {
      I || H(window.openai?.callTool ? "connected" : "unavailable");
    }, Tl = window.setInterval(K, 250);
    return window.addEventListener("openai:set_globals", K), K(), () => {
      I = !0, window.clearInterval(Tl), window.removeEventListener("openai:set_globals", K);
    };
  }, []), (0, st.useEffect)(() => {
    let I = !1;
    return km({
      name: "AI Assistant App",
      version: "0.8.0",
      capabilities: {
        sampling: {},
        serverTools: {},
        modelContext: {}
      }
    }).then((K) => {
      if (I) {
        K.dispose();
        return;
      }
      Ol.current = K, B(K.status === "connected" ? "connected" : K.status === "standalone" ? "standalone" : "unavailable");
    }), () => {
      I = !0, Ol.current?.dispose();
    };
  }, []), (0, st.useEffect)(() => {
    const I = window.LanguageModel;
    if (!I) {
      V("unsupported");
      return;
    }
    I.availability({ languages: ["en"] }).then(V).catch(() => V("unavailable"));
  }, []), (0, st.useEffect)(() => {
    const I = fd({
      name: "assistant_summarize_platform_health",
      description: "Summarize the currently visible Open Micro Platform dashboard health signals and suggest the next action.",
      inputSchema: {
        type: "object",
        properties: { question: {
          type: "string",
          description: "The user question or investigation goal from the browser agent."
        } }
      },
      execute: async ({ question: Tl }) => ({
        source: "ai-assistant",
        question: Tl ?? "Summarize platform health",
        summary: nf,
        resources: [
          "billing.invoice",
          "analytics.funnel",
          "admin.tenant"
        ]
      }),
      readOnlyHint: !0
    }), K = fd({
      name: "assistant_list_mcp_capabilities",
      description: "List the MCP Apps capabilities exposed by the AI Assistant micro app.",
      inputSchema: {
        type: "object",
        properties: { tool: {
          type: "string",
          description: "Optional capability name to inspect."
        } }
      },
      execute: async ({ tool: Tl }) => ({
        selected: Tl ?? null,
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
    return X(I.supported || K.supported || vd()), () => {
      I.unregister(), K.unregister();
    };
  }, []);
  async function Yl(I) {
    I.preventDefault();
    const K = M.trim();
    if (!K) return;
    Bl(!0), sd("MCP_TOOL_CALL_REQUESTED", "ai-assistant", {
      tool: "assistant.summarizeCase",
      prompt: K
    }), Fm("assistant_summarizeCase", { prompt: K }).catch(() => {
    }), window.openai?.setWidgetState?.({
      lastPrompt: K,
      lastAction: "assistant_summarizeCase",
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    const Tl = await Gl(K);
    r((hl) => [
      ...hl,
      {
        role: "user",
        text: K
      },
      {
        role: "assistant",
        text: Tl
      }
    ]), sd("MCP_TOOL_CALL_COMPLETED", "ai-assistant", {
      tool: "assistant.summarizeCase",
      resources: [
        "billing.invoice",
        "analytics.funnel",
        "admin.tenant"
      ],
      runtime: Z === "connected" ? "mcp-host-model" : y === "available" ? "chrome-built-in-ai" : "deterministic-fallback"
    }), U(""), Bl(!1);
  }
  async function Gl(I) {
    const K = await cy(I);
    if (K) return K;
    const Tl = Ol.current;
    if (Tl?.status === "connected") try {
      await Tl.updateModelContext("Open Micro Platform context: Billing has one overdue enterprise invoice, analytics reports a 2% conversion dip, and the admin flag billing-autopay is disabled.");
      const Zl = await Tl.requestHostCompletion([
        "Answer this as the Open Micro Platform AI Assistant.",
        "Be concise, operational, and use the known cross-app context.",
        `User question: ${I}`
      ].join(`
`), "You are running inside an MCP Apps widget. Use the AI host model to answer from the provided platform context.");
      if (Zl.trim()) return Zl.trim();
    } catch {
    }
    if (y !== "available" || !window.LanguageModel) return ["AI host runtime was not available to this widget, so I could not call the host model directly.", nf].join(" ");
    let hl;
    try {
      return hl = await window.LanguageModel.create(), await hl.prompt([
        "You are the Open Micro Platform AI Assistant.",
        "Answer as a concise platform operator.",
        "Use this known context: Billing has one overdue enterprise invoice, analytics reports a 2% conversion dip, and the admin flag billing-autopay is disabled.",
        `User question: ${I}`
      ].join(`
`));
    } catch {
      return nf;
    } finally {
      hl?.destroy?.();
    }
  }
  return /* @__PURE__ */ (0, Q.jsxs)("section", {
    className: "micro-app-container",
    children: [
      /* @__PURE__ */ (0, Q.jsxs)("header", {
        className: "micro-app-header",
        children: [
          /* @__PURE__ */ (0, Q.jsx)("span", { children: "AI Platform" }),
          /* @__PURE__ */ (0, Q.jsx)("h1", { children: "Assistant Workspace" }),
          /* @__PURE__ */ (0, Q.jsx)("p", { children: "Local POC assistant flow for platform triage and cross-app context." })
        ]
      }),
      /* @__PURE__ */ (0, Q.jsxs)("div", {
        className: "insights",
        children: [
          /* @__PURE__ */ (0, Q.jsxs)("article", { children: [/* @__PURE__ */ (0, Q.jsx)("strong", { children: "3" }), /* @__PURE__ */ (0, Q.jsx)("span", { children: "Signals correlated" })] }),
          /* @__PURE__ */ (0, Q.jsxs)("article", { children: [/* @__PURE__ */ (0, Q.jsx)("strong", { children: "Low" }), /* @__PURE__ */ (0, Q.jsx)("span", { children: "Risk level" })] }),
          /* @__PURE__ */ (0, Q.jsxs)("article", { children: [/* @__PURE__ */ (0, Q.jsx)("strong", { children: "0 ms" }), /* @__PURE__ */ (0, Q.jsx)("span", { children: "External API latency" })] })
        ]
      }),
      /* @__PURE__ */ (0, Q.jsxs)("div", {
        className: "mcp-panel",
        "aria-label": "MCPApps capabilities",
        children: [
          /* @__PURE__ */ (0, Q.jsx)("span", { children: "MCPApps SDK" }),
          /* @__PURE__ */ (0, Q.jsx)("strong", { children: "assistant.summarizeCase" }),
          /* @__PURE__ */ (0, Q.jsx)("p", { children: "Emits `mcp:tool-call-requested` and `mcp:tool-call-completed` on the shared event bus." })
        ]
      }),
      /* @__PURE__ */ (0, Q.jsxs)("div", {
        className: "ai-runtime-grid",
        "aria-label": "AI runtime capabilities",
        children: [
          /* @__PURE__ */ (0, Q.jsxs)("article", { children: [
            /* @__PURE__ */ (0, Q.jsx)("span", { children: "ChatGPT Apps bridge" }),
            /* @__PURE__ */ (0, Q.jsx)("strong", { children: sy(Y) }),
            /* @__PURE__ */ (0, Q.jsx)("p", { children: "When ChatGPT exposes `window.openai`, Ask calls the MCP tool through the host and renders the returned tool data." })
          ] }),
          /* @__PURE__ */ (0, Q.jsxs)("article", { children: [
            /* @__PURE__ */ (0, Q.jsx)("span", { children: "MCP host AI" }),
            /* @__PURE__ */ (0, Q.jsx)("strong", { children: oy(Z) }),
            /* @__PURE__ */ (0, Q.jsx)("p", { children: "When rendered inside ChatGPT, Claude, or another MCP Apps host, asks the host model before local browser fallback." })
          ] }),
          /* @__PURE__ */ (0, Q.jsxs)("article", { children: [
            /* @__PURE__ */ (0, Q.jsx)("span", { children: "Chrome built-in AI" }),
            /* @__PURE__ */ (0, Q.jsx)("strong", { children: dy(y) }),
            /* @__PURE__ */ (0, Q.jsx)("p", { children: "Uses `LanguageModel` locally when Chrome has Gemini Nano available, then falls back without breaking the shell." })
          ] }),
          /* @__PURE__ */ (0, Q.jsxs)("article", { children: [
            /* @__PURE__ */ (0, Q.jsx)("span", { children: "WebMCP tools" }),
            /* @__PURE__ */ (0, Q.jsx)("strong", { children: z ? "Registered" : "Waiting for browser support" }),
            /* @__PURE__ */ (0, Q.jsx)("p", { children: "Registers tab-bound tools with `document.modelContext` when a browser agent exposes WebMCP." })
          ] }),
          /* @__PURE__ */ (0, Q.jsxs)("article", { children: [
            /* @__PURE__ */ (0, Q.jsx)("span", { children: "MCP Apps portability" }),
            /* @__PURE__ */ (0, Q.jsx)("strong", { children: "HTML resource ready" }),
            /* @__PURE__ */ (0, Q.jsx)("p", { children: "This same micro app can render through `/api/mcp/apps/ai-assistant/resource` in an AI host iframe." })
          ] })
        ]
      }),
      /* @__PURE__ */ (0, Q.jsx)("div", {
        className: "thread",
        children: f.map((I, K) => /* @__PURE__ */ (0, Q.jsx)("p", {
          className: I.role,
          children: I.text
        }, `${I.role}-${K}`))
      }),
      /* @__PURE__ */ (0, Q.jsxs)("form", {
        className: "composer",
        onSubmit: Yl,
        children: [/* @__PURE__ */ (0, Q.jsx)("input", {
          value: M,
          onChange: (I) => U(I.target.value),
          "aria-label": "Assistant prompt"
        }), /* @__PURE__ */ (0, Q.jsx)("button", {
          type: "submit",
          disabled: q,
          children: q ? "Thinking" : "Ask"
        })]
      })
    ]
  });
}
async function cy(f) {
  const r = await fy();
  if (r?.callTool)
    try {
      const M = re(await r.callTool("assistant_summarizeCase", { prompt: f }));
      return M || (await r.sendFollowUpMessage?.({
        prompt: `Answer inside the conversation using the AI Assistant context: ${f}`,
        scrollToBottom: !0
      }), "I sent this question to the ChatGPT host conversation. The host response will appear in the chat thread.");
    } catch {
      return;
    }
}
async function fy(f = 1500) {
  return window.openai?.callTool ? window.openai : new Promise((r) => {
    const M = Date.now() + f;
    let U, y;
    const V = () => {
      U && window.clearInterval(U), y && window.clearTimeout(y), window.removeEventListener("openai:set_globals", B);
    }, Z = () => {
      const Y = window.openai?.callTool ? window.openai : void 0;
      !Y && Date.now() < M || (V(), r(Y));
    }, B = (Y) => {
      const H = Y.detail?.openai;
      H?.callTool && !window.openai && (window.openai = H), Z();
    };
    window.addEventListener("openai:set_globals", B), U = window.setInterval(Z, 50), y = window.setTimeout(Z, f);
  });
}
function re(f) {
  if (!f) return;
  if (typeof f == "string") return f;
  if (Array.isArray(f)) return f.map(re).filter(Boolean).join(`
`) || void 0;
  if (typeof f != "object") return;
  const r = f;
  if (typeof r.text == "string") return r.text;
  if (typeof r.result == "string") return r.result;
  if (typeof r.structuredContent == "object") {
    const M = r.structuredContent;
    if (typeof M.result == "string") return M.result;
  }
  if (Array.isArray(r.content)) return re(r.content);
  if (typeof r.mcp_tool_result == "object") return re(r.mcp_tool_result);
  if (typeof r.call_tool_result == "object") return re(r.call_tool_result);
}
function sy(f) {
  return {
    checking: "Checking",
    connected: "Host tool bridge connected",
    unavailable: "Not exposed"
  }[f];
}
function oy(f) {
  return {
    checking: "Checking",
    connected: "Host model connected",
    standalone: "Standalone mode",
    unavailable: "Host model unavailable"
  }[f];
}
function dy(f) {
  return {
    available: "Available",
    checking: "Checking",
    downloadable: "Model downloadable",
    downloading: "Model downloading",
    unavailable: "Unavailable",
    unsupported: "Not exposed"
  }[f];
}
var vy = ty("micro-ai-assistant-app", { mount(f) {
  const r = Km.createRoot(f);
  return r.render(/* @__PURE__ */ (0, Q.jsx)(iy, {})), () => r.unmount();
} });
export {
  vy as MicroAiAssistantApp,
  yy as n,
  my as t
};
