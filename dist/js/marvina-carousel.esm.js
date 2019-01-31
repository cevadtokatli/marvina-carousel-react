/*!
 * Marvina Carousel React
 * version: 1.0.0
 *  author: Cevad Tokatli <cevadtokatli@hotmail.com>
 * website: http://cevadtokatli.com
 *  github: https://github.com/cevadtokatli/marvina-carousel-react
 * license: MIT
 */

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

var n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.concurrent_mode") : 60111,
    y = n ? Symbol.for("react.forward_ref") : 60112,
    z = n ? Symbol.for("react.suspense") : 60113,
    A = n ? Symbol.for("react.memo") : 60115,
    B = n ? Symbol.for("react.lazy") : 60116,
    C = "function" === typeof Symbol && Symbol.iterator;

function aa(a, b, e, c, d, g, h, f) {
  if (!a) {
    a = void 0;
    if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
      var l = [e, c, d, g, h, f],
          m = 0;
      a = Error(b.replace(/%s/g, function () {
        return l[m++];
      }));
      a.name = "Invariant Violation";
    }
    a.framesToPop = 1;
    throw a;
  }
}

function D(a) {
  for (var b = arguments.length - 1, e = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 0; c < b; c++) {
    e += "&args[]=" + encodeURIComponent(arguments[c + 1]);
  }

  aa(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e);
}

var E = {
  isMounted: function isMounted() {
    return !1;
  },
  enqueueForceUpdate: function enqueueForceUpdate() {},
  enqueueReplaceState: function enqueueReplaceState() {},
  enqueueSetState: function enqueueSetState() {}
},
    F = {};

function G(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = F;
  this.updater = e || E;
}

G.prototype.isReactComponent = {};

G.prototype.setState = function (a, b) {
  "object" !== _typeof(a) && "function" !== typeof a && null != a ? D("85") : void 0;
  this.updater.enqueueSetState(this, a, b, "setState");
};

G.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function H() {}

H.prototype = G.prototype;

function I(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = F;
  this.updater = e || E;
}

var J = I.prototype = new H();
J.constructor = I;
objectAssign(J, G.prototype);
J.isPureReactComponent = !0;
var K = {
  current: null,
  currentDispatcher: null
},
    L = Object.prototype.hasOwnProperty,
    M = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function N(a, b, e) {
  var c = void 0,
      d = {},
      g = null,
      h = null;
  if (null != b) for (c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (g = "" + b.key), b) {
    L.call(b, c) && !M.hasOwnProperty(c) && (d[c] = b[c]);
  }
  var f = arguments.length - 2;
  if (1 === f) d.children = e;else if (1 < f) {
    for (var l = Array(f), m = 0; m < f; m++) {
      l[m] = arguments[m + 2];
    }

    d.children = l;
  }
  if (a && a.defaultProps) for (c in f = a.defaultProps, f) {
    void 0 === d[c] && (d[c] = f[c]);
  }
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: h,
    props: d,
    _owner: K.current
  };
}

function ba(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function O(a) {
  return "object" === _typeof(a) && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var P = /\/+/g,
    Q = [];

function R(a, b, e, c) {
  if (Q.length) {
    var d = Q.pop();
    d.result = a;
    d.keyPrefix = b;
    d.func = e;
    d.context = c;
    d.count = 0;
    return d;
  }

  return {
    result: a,
    keyPrefix: b,
    func: e,
    context: c,
    count: 0
  };
}

function S(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > Q.length && Q.push(a);
}

function T(a, b, e, c) {
  var d = _typeof(a);

  if ("undefined" === d || "boolean" === d) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (d) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  }
  if (g) return e(c, a, "" === b ? "." + U(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var h = 0; h < a.length; h++) {
    d = a[h];
    var f = b + U(d, h);
    g += T(d, f, e, c);
  } else if (null === a || "object" !== _typeof(a) ? f = null : (f = C && a[C] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), h = 0; !(d = a.next()).done;) {
    d = d.value, f = b + U(d, h++), g += T(d, f, e, c);
  } else "object" === d && (e = "" + a, D("31", "[object Object]" === e ? "object with keys {" + Object.keys(a).join(", ") + "}" : e, ""));
  return g;
}

function V(a, b, e) {
  return null == a ? 0 : T(a, "", b, e);
}

function U(a, b) {
  return "object" === _typeof(a) && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function ca(a, b) {
  a.func.call(a.context, b, a.count++);
}

function da(a, b, e) {
  var c = a.result,
      d = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? W(a, c, e, function (a) {
    return a;
  }) : null != a && (O(a) && (a = ba(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + e)), c.push(a));
}

function W(a, b, e, c, d) {
  var g = "";
  null != e && (g = ("" + e).replace(P, "$&/") + "/");
  b = R(b, g, c, d);
  V(a, da, b);
  S(b);
}

var X = {
  Children: {
    map: function map(a, b, e) {
      if (null == a) return a;
      var c = [];
      W(a, c, null, b, e);
      return c;
    },
    forEach: function forEach(a, b, e) {
      if (null == a) return a;
      b = R(null, null, b, e);
      V(a, ca, b);
      S(b);
    },
    count: function count(a) {
      return V(a, function () {
        return null;
      }, null);
    },
    toArray: function toArray(a) {
      var b = [];
      W(a, b, null, function (a) {
        return a;
      });
      return b;
    },
    only: function only(a) {
      O(a) ? void 0 : D("143");
      return a;
    }
  },
  createRef: function createRef() {
    return {
      current: null
    };
  },
  Component: G,
  PureComponent: I,
  createContext: function createContext(a, b) {
    void 0 === b && (b = null);
    a = {
      $$typeof: w,
      _calculateChangedBits: b,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    };
    a.Provider = {
      $$typeof: v,
      _context: a
    };
    return a.Consumer = a;
  },
  forwardRef: function forwardRef(a) {
    return {
      $$typeof: y,
      render: a
    };
  },
  lazy: function lazy(a) {
    return {
      $$typeof: B,
      _ctor: a,
      _status: -1,
      _result: null
    };
  },
  memo: function memo(a, b) {
    return {
      $$typeof: A,
      type: a,
      compare: void 0 === b ? null : b
    };
  },
  Fragment: r,
  StrictMode: t,
  Suspense: z,
  createElement: N,
  cloneElement: function cloneElement(a, b, e) {
    null === a || void 0 === a ? D("267", a) : void 0;
    var c = void 0,
        d = objectAssign({}, a.props),
        g = a.key,
        h = a.ref,
        f = a._owner;

    if (null != b) {
      void 0 !== b.ref && (h = b.ref, f = K.current);
      void 0 !== b.key && (g = "" + b.key);
      var l = void 0;
      a.type && a.type.defaultProps && (l = a.type.defaultProps);

      for (c in b) {
        L.call(b, c) && !M.hasOwnProperty(c) && (d[c] = void 0 === b[c] && void 0 !== l ? l[c] : b[c]);
      }
    }

    c = arguments.length - 2;
    if (1 === c) d.children = e;else if (1 < c) {
      l = Array(c);

      for (var m = 0; m < c; m++) {
        l[m] = arguments[m + 2];
      }

      d.children = l;
    }
    return {
      $$typeof: p,
      type: a.type,
      key: g,
      ref: h,
      props: d,
      _owner: f
    };
  },
  createFactory: function createFactory(a) {
    var b = N.bind(null, a);
    b.type = a;
    return b;
  },
  isValidElement: O,
  version: "16.7.0",
  unstable_ConcurrentMode: x,
  unstable_Profiler: u,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: K,
    assign: objectAssign
  }
},
    Y = {
  default: X
},
    Z = Y && X || Y;
var react_production_min = Z.default || Z;

var react = createCommonjsModule(function (module) {

  {
    module.exports = react_production_min;
  }
});
var react_1 = react.Children;
var react_2 = react.Component;
var react_3 = react.PropTypes;
var react_4 = react.createElement;
var react_5 = react.cloneElement;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}

var factoryWithThrowingShims = function factoryWithThrowingShims() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };
  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
});

/*!
 *   Marvina carousel
 *   version: 1.0.5
 *    author: Cevad Tokatli <cevadtokatli@hotmail.com>
 *   website: http://cevadtokatli.com
 *    github: https://github.com/cevadtokatli/marvina-carousel
 *   license: MIT
 */
var commonjsGlobal$1 = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire$1() {
  throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

function createCommonjsModule$1(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
};

var asyncToGenerator = function asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var es6Promise = createCommonjsModule$1(function (module, exports) {
  /*!
   * @overview es6-promise - a tiny implementation of Promises/A+.
   * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
   * @license   Licensed under MIT license
   *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
   * @version   v4.2.5+7f2b526d
   */
  (function (global, factory) {
    module.exports = factory();
  })(commonjsGlobal$1, function () {
    function objectOrFunction(x) {
      var type = typeof x === 'undefined' ? 'undefined' : _typeof$1(x);
      return x !== null && (type === 'object' || type === 'function');
    }

    function isFunction(x) {
      return typeof x === 'function';
    }

    var _isArray = void 0;

    if (Array.isArray) {
      _isArray = Array.isArray;
    } else {
      _isArray = function _isArray(x) {
        return Object.prototype.toString.call(x) === '[object Array]';
      };
    }

    var isArray = _isArray;
    var len = 0;
    var vertxNext = void 0;
    var customSchedulerFn = void 0;

    var asap = function asap(callback, arg) {
      queue[len] = callback;
      queue[len + 1] = arg;
      len += 2;

      if (len === 2) {
        // If len is 2, that means that we need to schedule an async flush.
        // If additional callbacks are queued before the queue is flushed, they
        // will be processed by this flush that we are scheduling.
        if (customSchedulerFn) {
          customSchedulerFn(flush);
        } else {
          scheduleFlush();
        }
      }
    };

    function setScheduler(scheduleFn) {
      customSchedulerFn = scheduleFn;
    }

    function setAsap(asapFn) {
      asap = asapFn;
    }

    var browserWindow = typeof window !== 'undefined' ? window : undefined;
    var browserGlobal = browserWindow || {};
    var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
    var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]'; // test for web worker but not in IE10

    var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined'; // node

    function useNextTick() {
      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
      // see https://github.com/cujojs/when/issues/410 for details
      return function () {
        return process.nextTick(flush);
      };
    } // vertx


    function useVertxTimer() {
      if (typeof vertxNext !== 'undefined') {
        return function () {
          vertxNext(flush);
        };
      }

      return useSetTimeout();
    }

    function useMutationObserver() {
      var iterations = 0;
      var observer = new BrowserMutationObserver(flush);
      var node = document.createTextNode('');
      observer.observe(node, {
        characterData: true
      });
      return function () {
        node.data = iterations = ++iterations % 2;
      };
    } // web worker


    function useMessageChannel() {
      var channel = new MessageChannel();
      channel.port1.onmessage = flush;
      return function () {
        return channel.port2.postMessage(0);
      };
    }

    function useSetTimeout() {
      // Store setTimeout reference so es6-promise will be unaffected by
      // other code modifying setTimeout (like sinon.useFakeTimers())
      var globalSetTimeout = setTimeout;
      return function () {
        return globalSetTimeout(flush, 1);
      };
    }

    var queue = new Array(1000);

    function flush() {
      for (var i = 0; i < len; i += 2) {
        var callback = queue[i];
        var arg = queue[i + 1];
        callback(arg);
        queue[i] = undefined;
        queue[i + 1] = undefined;
      }

      len = 0;
    }

    function attemptVertx() {
      try {
        var vertx = Function('return this')().require('vertx');

        vertxNext = vertx.runOnLoop || vertx.runOnContext;
        return useVertxTimer();
      } catch (e) {
        return useSetTimeout();
      }
    }

    var scheduleFlush = void 0; // Decide what async method to use to triggering processing of queued callbacks:

    if (isNode) {
      scheduleFlush = useNextTick();
    } else if (BrowserMutationObserver) {
      scheduleFlush = useMutationObserver();
    } else if (isWorker) {
      scheduleFlush = useMessageChannel();
    } else if (browserWindow === undefined && typeof commonjsRequire$1 === 'function') {
      scheduleFlush = attemptVertx();
    } else {
      scheduleFlush = useSetTimeout();
    }

    function then(onFulfillment, onRejection) {
      var parent = this;
      var child = new this.constructor(noop);

      if (child[PROMISE_ID] === undefined) {
        makePromise(child);
      }

      var _state = parent._state;

      if (_state) {
        var callback = arguments[_state - 1];
        asap(function () {
          return invokeCallback(_state, child, callback, parent._result);
        });
      } else {
        subscribe(parent, child, onFulfillment, onRejection);
      }

      return child;
    }
    /**
      `Promise.resolve` returns a promise that will become resolved with the
      passed `value`. It is shorthand for the following:
    
      ```javascript
      let promise = new Promise(function(resolve, reject){
        resolve(1);
      });
    
      promise.then(function(value){
        // value === 1
      });
      ```
    
      Instead of writing the above, your code now simply becomes the following:
    
      ```javascript
      let promise = Promise.resolve(1);
    
      promise.then(function(value){
        // value === 1
      });
      ```
    
      @method resolve
      @static
      @param {Any} value value that the returned promise will be resolved with
      Useful for tooling.
      @return {Promise} a promise that will become fulfilled with the given
      `value`
    */


    function resolve$1(object) {
      /*jshint validthis:true */
      var Constructor = this;

      if (object && (typeof object === 'undefined' ? 'undefined' : _typeof$1(object)) === 'object' && object.constructor === Constructor) {
        return object;
      }

      var promise = new Constructor(noop);
      resolve(promise, object);
      return promise;
    }

    var PROMISE_ID = Math.random().toString(36).substring(2);

    function noop() {}

    var PENDING = void 0;
    var FULFILLED = 1;
    var REJECTED = 2;
    var TRY_CATCH_ERROR = {
      error: null
    };

    function selfFulfillment() {
      return new TypeError("You cannot resolve a promise with itself");
    }

    function cannotReturnOwn() {
      return new TypeError('A promises callback cannot return that same promise.');
    }

    function getThen(promise) {
      try {
        return promise.then;
      } catch (error) {
        TRY_CATCH_ERROR.error = error;
        return TRY_CATCH_ERROR;
      }
    }

    function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
      try {
        then$$1.call(value, fulfillmentHandler, rejectionHandler);
      } catch (e) {
        return e;
      }
    }

    function handleForeignThenable(promise, thenable, then$$1) {
      asap(function (promise) {
        var sealed = false;
        var error = tryThen(then$$1, thenable, function (value) {
          if (sealed) {
            return;
          }

          sealed = true;

          if (thenable !== value) {
            resolve(promise, value);
          } else {
            fulfill(promise, value);
          }
        }, function (reason) {
          if (sealed) {
            return;
          }

          sealed = true;
          reject(promise, reason);
        }, 'Settle: ' + (promise._label || ' unknown promise'));

        if (!sealed && error) {
          sealed = true;
          reject(promise, error);
        }
      }, promise);
    }

    function handleOwnThenable(promise, thenable) {
      if (thenable._state === FULFILLED) {
        fulfill(promise, thenable._result);
      } else if (thenable._state === REJECTED) {
        reject(promise, thenable._result);
      } else {
        subscribe(thenable, undefined, function (value) {
          return resolve(promise, value);
        }, function (reason) {
          return reject(promise, reason);
        });
      }
    }

    function handleMaybeThenable(promise, maybeThenable, then$$1) {
      if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
        handleOwnThenable(promise, maybeThenable);
      } else {
        if (then$$1 === TRY_CATCH_ERROR) {
          reject(promise, TRY_CATCH_ERROR.error);
          TRY_CATCH_ERROR.error = null;
        } else if (then$$1 === undefined) {
          fulfill(promise, maybeThenable);
        } else if (isFunction(then$$1)) {
          handleForeignThenable(promise, maybeThenable, then$$1);
        } else {
          fulfill(promise, maybeThenable);
        }
      }
    }

    function resolve(promise, value) {
      if (promise === value) {
        reject(promise, selfFulfillment());
      } else if (objectOrFunction(value)) {
        handleMaybeThenable(promise, value, getThen(value));
      } else {
        fulfill(promise, value);
      }
    }

    function publishRejection(promise) {
      if (promise._onerror) {
        promise._onerror(promise._result);
      }

      publish(promise);
    }

    function fulfill(promise, value) {
      if (promise._state !== PENDING) {
        return;
      }

      promise._result = value;
      promise._state = FULFILLED;

      if (promise._subscribers.length !== 0) {
        asap(publish, promise);
      }
    }

    function reject(promise, reason) {
      if (promise._state !== PENDING) {
        return;
      }

      promise._state = REJECTED;
      promise._result = reason;
      asap(publishRejection, promise);
    }

    function subscribe(parent, child, onFulfillment, onRejection) {
      var _subscribers = parent._subscribers;
      var length = _subscribers.length;
      parent._onerror = null;
      _subscribers[length] = child;
      _subscribers[length + FULFILLED] = onFulfillment;
      _subscribers[length + REJECTED] = onRejection;

      if (length === 0 && parent._state) {
        asap(publish, parent);
      }
    }

    function publish(promise) {
      var subscribers = promise._subscribers;
      var settled = promise._state;

      if (subscribers.length === 0) {
        return;
      }

      var child = void 0,
          callback = void 0,
          detail = promise._result;

      for (var i = 0; i < subscribers.length; i += 3) {
        child = subscribers[i];
        callback = subscribers[i + settled];

        if (child) {
          invokeCallback(settled, child, callback, detail);
        } else {
          callback(detail);
        }
      }

      promise._subscribers.length = 0;
    }

    function tryCatch(callback, detail) {
      try {
        return callback(detail);
      } catch (e) {
        TRY_CATCH_ERROR.error = e;
        return TRY_CATCH_ERROR;
      }
    }

    function invokeCallback(settled, promise, callback, detail) {
      var hasCallback = isFunction(callback),
          value = void 0,
          error = void 0,
          succeeded = void 0,
          failed = void 0;

      if (hasCallback) {
        value = tryCatch(callback, detail);

        if (value === TRY_CATCH_ERROR) {
          failed = true;
          error = value.error;
          value.error = null;
        } else {
          succeeded = true;
        }

        if (promise === value) {
          reject(promise, cannotReturnOwn());
          return;
        }
      } else {
        value = detail;
        succeeded = true;
      }

      if (promise._state !== PENDING) ;else if (hasCallback && succeeded) {
        resolve(promise, value);
      } else if (failed) {
        reject(promise, error);
      } else if (settled === FULFILLED) {
        fulfill(promise, value);
      } else if (settled === REJECTED) {
        reject(promise, value);
      }
    }

    function initializePromise(promise, resolver) {
      try {
        resolver(function resolvePromise(value) {
          resolve(promise, value);
        }, function rejectPromise(reason) {
          reject(promise, reason);
        });
      } catch (e) {
        reject(promise, e);
      }
    }

    var id = 0;

    function nextId() {
      return id++;
    }

    function makePromise(promise) {
      promise[PROMISE_ID] = id++;
      promise._state = undefined;
      promise._result = undefined;
      promise._subscribers = [];
    }

    function validationError() {
      return new Error('Array Methods must be provided an Array');
    }

    var Enumerator = function () {
      function Enumerator(Constructor, input) {
        this._instanceConstructor = Constructor;
        this.promise = new Constructor(noop);

        if (!this.promise[PROMISE_ID]) {
          makePromise(this.promise);
        }

        if (isArray(input)) {
          this.length = input.length;
          this._remaining = input.length;
          this._result = new Array(this.length);

          if (this.length === 0) {
            fulfill(this.promise, this._result);
          } else {
            this.length = this.length || 0;

            this._enumerate(input);

            if (this._remaining === 0) {
              fulfill(this.promise, this._result);
            }
          }
        } else {
          reject(this.promise, validationError());
        }
      }

      Enumerator.prototype._enumerate = function _enumerate(input) {
        for (var i = 0; this._state === PENDING && i < input.length; i++) {
          this._eachEntry(input[i], i);
        }
      };

      Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
        var c = this._instanceConstructor;
        var resolve$$1 = c.resolve;

        if (resolve$$1 === resolve$1) {
          var _then = getThen(entry);

          if (_then === then && entry._state !== PENDING) {
            this._settledAt(entry._state, i, entry._result);
          } else if (typeof _then !== 'function') {
            this._remaining--;
            this._result[i] = entry;
          } else if (c === Promise$1) {
            var promise = new c(noop);
            handleMaybeThenable(promise, entry, _then);

            this._willSettleAt(promise, i);
          } else {
            this._willSettleAt(new c(function (resolve$$1) {
              return resolve$$1(entry);
            }), i);
          }
        } else {
          this._willSettleAt(resolve$$1(entry), i);
        }
      };

      Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
        var promise = this.promise;

        if (promise._state === PENDING) {
          this._remaining--;

          if (state === REJECTED) {
            reject(promise, value);
          } else {
            this._result[i] = value;
          }
        }

        if (this._remaining === 0) {
          fulfill(promise, this._result);
        }
      };

      Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
        var enumerator = this;
        subscribe(promise, undefined, function (value) {
          return enumerator._settledAt(FULFILLED, i, value);
        }, function (reason) {
          return enumerator._settledAt(REJECTED, i, reason);
        });
      };

      return Enumerator;
    }();
    /**
      `Promise.all` accepts an array of promises, and returns a new promise which
      is fulfilled with an array of fulfillment values for the passed promises, or
      rejected with the reason of the first passed promise to be rejected. It casts all
      elements of the passed iterable to promises as it runs this algorithm.
    
      Example:
    
      ```javascript
      let promise1 = resolve(1);
      let promise2 = resolve(2);
      let promise3 = resolve(3);
      let promises = [ promise1, promise2, promise3 ];
    
      Promise.all(promises).then(function(array){
        // The array here would be [ 1, 2, 3 ];
      });
      ```
    
      If any of the `promises` given to `all` are rejected, the first promise
      that is rejected will be given as an argument to the returned promises's
      rejection handler. For example:
    
      Example:
    
      ```javascript
      let promise1 = resolve(1);
      let promise2 = reject(new Error("2"));
      let promise3 = reject(new Error("3"));
      let promises = [ promise1, promise2, promise3 ];
    
      Promise.all(promises).then(function(array){
        // Code here never runs because there are rejected promises!
      }, function(error) {
        // error.message === "2"
      });
      ```
    
      @method all
      @static
      @param {Array} entries array of promises
      @param {String} label optional string for labeling the promise.
      Useful for tooling.
      @return {Promise} promise that is fulfilled when all `promises` have been
      fulfilled, or rejected if any of them become rejected.
      @static
    */


    function all(entries) {
      return new Enumerator(this, entries).promise;
    }
    /**
      `Promise.race` returns a new promise which is settled in the same way as the
      first passed promise to settle.
    
      Example:
    
      ```javascript
      let promise1 = new Promise(function(resolve, reject){
        setTimeout(function(){
          resolve('promise 1');
        }, 200);
      });
    
      let promise2 = new Promise(function(resolve, reject){
        setTimeout(function(){
          resolve('promise 2');
        }, 100);
      });
    
      Promise.race([promise1, promise2]).then(function(result){
        // result === 'promise 2' because it was resolved before promise1
        // was resolved.
      });
      ```
    
      `Promise.race` is deterministic in that only the state of the first
      settled promise matters. For example, even if other promises given to the
      `promises` array argument are resolved, but the first settled promise has
      become rejected before the other promises became fulfilled, the returned
      promise will become rejected:
    
      ```javascript
      let promise1 = new Promise(function(resolve, reject){
        setTimeout(function(){
          resolve('promise 1');
        }, 200);
      });
    
      let promise2 = new Promise(function(resolve, reject){
        setTimeout(function(){
          reject(new Error('promise 2'));
        }, 100);
      });
    
      Promise.race([promise1, promise2]).then(function(result){
        // Code here never runs
      }, function(reason){
        // reason.message === 'promise 2' because promise 2 became rejected before
        // promise 1 became fulfilled
      });
      ```
    
      An example real-world use case is implementing timeouts:
    
      ```javascript
      Promise.race([ajax('foo.json'), timeout(5000)])
      ```
    
      @method race
      @static
      @param {Array} promises array of promises to observe
      Useful for tooling.
      @return {Promise} a promise which settles in the same way as the first passed
      promise to settle.
    */


    function race(entries) {
      /*jshint validthis:true */
      var Constructor = this;

      if (!isArray(entries)) {
        return new Constructor(function (_, reject) {
          return reject(new TypeError('You must pass an array to race.'));
        });
      } else {
        return new Constructor(function (resolve, reject) {
          var length = entries.length;

          for (var i = 0; i < length; i++) {
            Constructor.resolve(entries[i]).then(resolve, reject);
          }
        });
      }
    }
    /**
      `Promise.reject` returns a promise rejected with the passed `reason`.
      It is shorthand for the following:
    
      ```javascript
      let promise = new Promise(function(resolve, reject){
        reject(new Error('WHOOPS'));
      });
    
      promise.then(function(value){
        // Code here doesn't run because the promise is rejected!
      }, function(reason){
        // reason.message === 'WHOOPS'
      });
      ```
    
      Instead of writing the above, your code now simply becomes the following:
    
      ```javascript
      let promise = Promise.reject(new Error('WHOOPS'));
    
      promise.then(function(value){
        // Code here doesn't run because the promise is rejected!
      }, function(reason){
        // reason.message === 'WHOOPS'
      });
      ```
    
      @method reject
      @static
      @param {Any} reason value that the returned promise will be rejected with.
      Useful for tooling.
      @return {Promise} a promise rejected with the given `reason`.
    */


    function reject$1(reason) {
      /*jshint validthis:true */
      var Constructor = this;
      var promise = new Constructor(noop);
      reject(promise, reason);
      return promise;
    }

    function needsResolver() {
      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
    }

    function needsNew() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }
    /**
      Promise objects represent the eventual result of an asynchronous operation. The
      primary way of interacting with a promise is through its `then` method, which
      registers callbacks to receive either a promise's eventual value or the reason
      why the promise cannot be fulfilled.
    
      Terminology
      -----------
    
      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
      - `thenable` is an object or function that defines a `then` method.
      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
      - `exception` is a value that is thrown using the throw statement.
      - `reason` is a value that indicates why a promise was rejected.
      - `settled` the final resting state of a promise, fulfilled or rejected.
    
      A promise can be in one of three states: pending, fulfilled, or rejected.
    
      Promises that are fulfilled have a fulfillment value and are in the fulfilled
      state.  Promises that are rejected have a rejection reason and are in the
      rejected state.  A fulfillment value is never a thenable.
    
      Promises can also be said to *resolve* a value.  If this value is also a
      promise, then the original promise's settled state will match the value's
      settled state.  So a promise that *resolves* a promise that rejects will
      itself reject, and a promise that *resolves* a promise that fulfills will
      itself fulfill.
    
    
      Basic Usage:
      ------------
    
      ```js
      let promise = new Promise(function(resolve, reject) {
        // on success
        resolve(value);
    
        // on failure
        reject(reason);
      });
    
      promise.then(function(value) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```
    
      Advanced Usage:
      ---------------
    
      Promises shine when abstracting away asynchronous interactions such as
      `XMLHttpRequest`s.
    
      ```js
      function getJSON(url) {
        return new Promise(function(resolve, reject){
          let xhr = new XMLHttpRequest();
    
          xhr.open('GET', url);
          xhr.onreadystatechange = handler;
          xhr.responseType = 'json';
          xhr.setRequestHeader('Accept', 'application/json');
          xhr.send();
    
          function handler() {
            if (this.readyState === this.DONE) {
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
              }
            }
          };
        });
      }
    
      getJSON('/posts.json').then(function(json) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```
    
      Unlike callbacks, promises are great composable primitives.
    
      ```js
      Promise.all([
        getJSON('/posts'),
        getJSON('/comments')
      ]).then(function(values){
        values[0] // => postsJSON
        values[1] // => commentsJSON
    
        return values;
      });
      ```
    
      @class Promise
      @param {Function} resolver
      Useful for tooling.
      @constructor
    */


    var Promise$1 = function () {
      function Promise(resolver) {
        this[PROMISE_ID] = nextId();
        this._result = this._state = undefined;
        this._subscribers = [];

        if (noop !== resolver) {
          typeof resolver !== 'function' && needsResolver();
          this instanceof Promise ? initializePromise(this, resolver) : needsNew();
        }
      }
      /**
      The primary way of interacting with a promise is through its `then` method,
      which registers callbacks to receive either a promise's eventual value or the
      reason why the promise cannot be fulfilled.
       ```js
      findUser().then(function(user){
        // user is available
      }, function(reason){
        // user is unavailable, and you are given the reason why
      });
      ```
       Chaining
      --------
       The return value of `then` is itself a promise.  This second, 'downstream'
      promise is resolved with the return value of the first promise's fulfillment
      or rejection handler, or rejected if the handler throws an exception.
       ```js
      findUser().then(function (user) {
        return user.name;
      }, function (reason) {
        return 'default name';
      }).then(function (userName) {
        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
        // will be `'default name'`
      });
       findUser().then(function (user) {
        throw new Error('Found user, but still unhappy');
      }, function (reason) {
        throw new Error('`findUser` rejected and we're unhappy');
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
      });
      ```
      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
       ```js
      findUser().then(function (user) {
        throw new PedagogicalException('Upstream error');
      }).then(function (value) {
        // never reached
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // The `PedgagocialException` is propagated all the way down to here
      });
      ```
       Assimilation
      ------------
       Sometimes the value you want to propagate to a downstream promise can only be
      retrieved asynchronously. This can be achieved by returning a promise in the
      fulfillment or rejection handler. The downstream promise will then be pending
      until the returned promise is settled. This is called *assimilation*.
       ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // The user's comments are now available
      });
      ```
       If the assimliated promise rejects, then the downstream promise will also reject.
       ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // If `findCommentsByAuthor` fulfills, we'll have the value here
      }, function (reason) {
        // If `findCommentsByAuthor` rejects, we'll have the reason here
      });
      ```
       Simple Example
      --------------
       Synchronous Example
       ```javascript
      let result;
       try {
        result = findResult();
        // success
      } catch(reason) {
        // failure
      }
      ```
       Errback Example
       ```js
      findResult(function(result, err){
        if (err) {
          // failure
        } else {
          // success
        }
      });
      ```
       Promise Example;
       ```javascript
      findResult().then(function(result){
        // success
      }, function(reason){
        // failure
      });
      ```
       Advanced Example
      --------------
       Synchronous Example
       ```javascript
      let author, books;
       try {
        author = findAuthor();
        books  = findBooksByAuthor(author);
        // success
      } catch(reason) {
        // failure
      }
      ```
       Errback Example
       ```js
       function foundBooks(books) {
       }
       function failure(reason) {
       }
       findAuthor(function(author, err){
        if (err) {
          failure(err);
          // failure
        } else {
          try {
            findBoooksByAuthor(author, function(books, err) {
              if (err) {
                failure(err);
              } else {
                try {
                  foundBooks(books);
                } catch(reason) {
                  failure(reason);
                }
              }
            });
          } catch(error) {
            failure(err);
          }
          // success
        }
      });
      ```
       Promise Example;
       ```javascript
      findAuthor().
        then(findBooksByAuthor).
        then(function(books){
          // found books
      }).catch(function(reason){
        // something went wrong
      });
      ```
       @method then
      @param {Function} onFulfilled
      @param {Function} onRejected
      Useful for tooling.
      @return {Promise}
      */

      /**
      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
      as the catch block of a try/catch statement.
      ```js
      function findAuthor(){
      throw new Error('couldn't find that author');
      }
      // synchronous
      try {
      findAuthor();
      } catch(reason) {
      // something went wrong
      }
      // async with promises
      findAuthor().catch(function(reason){
      // something went wrong
      });
      ```
      @method catch
      @param {Function} onRejection
      Useful for tooling.
      @return {Promise}
      */


      Promise.prototype.catch = function _catch(onRejection) {
        return this.then(null, onRejection);
      };
      /**
        `finally` will be invoked regardless of the promise's fate just as native
        try/catch/finally behaves
      
        Synchronous example:
      
        ```js
        findAuthor() {
          if (Math.random() > 0.5) {
            throw new Error();
          }
          return new Author();
        }
      
        try {
          return findAuthor(); // succeed or fail
        } catch(error) {
          return findOtherAuther();
        } finally {
          // always runs
          // doesn't affect the return value
        }
        ```
      
        Asynchronous example:
      
        ```js
        findAuthor().catch(function(reason){
          return findOtherAuther();
        }).finally(function(){
          // author was either found, or not
        });
        ```
      
        @method finally
        @param {Function} callback
        @return {Promise}
      */


      Promise.prototype.finally = function _finally(callback) {
        var promise = this;
        var constructor = promise.constructor;

        if (isFunction(callback)) {
          return promise.then(function (value) {
            return constructor.resolve(callback()).then(function () {
              return value;
            });
          }, function (reason) {
            return constructor.resolve(callback()).then(function () {
              throw reason;
            });
          });
        }

        return promise.then(callback, callback);
      };

      return Promise;
    }();

    Promise$1.prototype.then = then;
    Promise$1.all = all;
    Promise$1.race = race;
    Promise$1.resolve = resolve$1;
    Promise$1.reject = reject$1;
    Promise$1._setScheduler = setScheduler;
    Promise$1._setAsap = setAsap;
    Promise$1._asap = asap;
    /*global self*/

    function polyfill() {
      var local = void 0;

      if (typeof commonjsGlobal$1 !== 'undefined') {
        local = commonjsGlobal$1;
      } else if (typeof self !== 'undefined') {
        local = self;
      } else {
        try {
          local = Function('return this')();
        } catch (e) {
          throw new Error('polyfill failed because global object is unavailable in this environment');
        }
      }

      var P = local.Promise;

      if (P) {
        var promiseToString = null;

        try {
          promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {// silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
          return;
        }
      }

      local.Promise = Promise$1;
    } // Strange compat..


    Promise$1.polyfill = polyfill;
    Promise$1.Promise = Promise$1;
    return Promise$1;
  });
});
var auto = es6Promise.polyfill();
var runtime = createCommonjsModule$1(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  !function (global) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    var runtime = global.regeneratorRuntime;

    if (runtime) {
      {
        // If regeneratorRuntime is defined globally and we're in a module,
        // make the exports object identical to regeneratorRuntime.
        module.exports = runtime;
      } // Don't bother evaluating the rest of this file if the runtime was
      // already defined globally.


      return;
    } // Define the runtime globally (as expected by generated code) as either
    // module.exports (if we're in a module) or a new, empty object.


    runtime = global.regeneratorRuntime = module.exports;

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    runtime.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        prototype[method] = function (arg) {
          return this._invoke(method, arg);
        };
      });
    }

    runtime.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    runtime.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;

        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    runtime.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && (typeof value === "undefined" ? "undefined" : _typeof$1(value)) === "object" && hasOwn.call(value, "__await")) {
            return Promise.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return Promise.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration. If the Promise is rejected, however, the
            // result for this iteration will be rejected with the same
            // reason. Note that rejections of yielded Promises are not
            // thrown back into the generator function, as is the case
            // when an awaited Promise is rejected. This difference in
            // behavior between yield and await is important, because it
            // allows the consumer to decide what to do with the yielded
            // rejection (swallow it and continue, manually .throw it back
            // into the generator, abandon iteration, whatever). With
            // await, by contrast, there is no opportunity to examine the
            // rejection reason outside the generator function, so the
            // only option is to throw it from the await expression, and
            // let the generator function handle the exception.
            result.value = unwrapped;
            resolve(result);
          }, reject);
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new Promise(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    runtime.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    runtime.async = function (innerFn, outerFn, self, tryLocsList) {
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
      return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          if (delegate.iterator.return) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    runtime.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    runtime.values = values;

    function doneResult() {
      return {
        value: undefined,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined;
        }

        return ContinueSentinel;
      }
    };
  }( // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  function () {
    return this;
  }() || Function("return this")());
});
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js

var g = function () {
  return this;
}() || Function("return this")(); // Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.


var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0; // Save the old regeneratorRuntime in case it needs to be restored later.

var oldRuntime = hadRuntime && g.regeneratorRuntime; // Force reevalutation of runtime.js.

g.regeneratorRuntime = undefined;
var runtimeModule = runtime;

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch (e) {
    g.regeneratorRuntime = undefined;
  }
}

var regenerator = runtimeModule;
var Util;

Util = function () {
  var Util = function () {
    function Util() {
      classCallCheck(this, Util);
    }

    createClass(Util, null, [{
      key: 'getElement',
      // Returns the given element.
      // @params {HTMLElement|String} el
      // @returns {HTMLElement}
      value: function getElement(el) {
        if (typeof el === 'string') {
          return document.querySelector(el);
        }

        return el;
      } // Attaches the given events to the element.
      // @params {HTMLElement} el
      // @params {String[]} events
      // @params {EventListener} callback

    }, {
      key: 'addMultiEventListener',
      value: function addMultiEventListener(el, events, callback) {
        var i, j, len, results;
        results = [];

        for (j = 0, len = events.length; j < len; j++) {
          i = events[j];
          results.push(el.addEventListener(i, callback, true));
        }

        return results;
      } // Removes the events from the element.
      // @params {HTMLElement} el
      // @params {String[]} events
      // @params {EventListener} callback

    }, {
      key: 'removeMultiEventListener',
      value: function removeMultiEventListener(el, events, callback) {
        var i, j, len, results;
        results = [];

        for (j = 0, len = events.length; j < len; j++) {
          i = events[j];
          results.push(el.removeEventListener(i, callback, true));
        }

        return results;
      } // Attaches the events to the element for once.
      // @params {HTMLElement} el
      // @params {String[]} events
      // @params {EventListener} callback

    }, {
      key: 'addMultiEventListenerOnce',
      value: function addMultiEventListenerOnce(el, events, callback) {
        var _this = this;

        var _cb;

        _cb = function cb(e) {
          _this.removeMultiEventListener(el, events, _cb);

          return callback(e);
        };

        return this.addMultiEventListener(el, events, _cb);
      } // @params {String} css
      // @returns {String}

    }, {
      key: 'setCSSPrefix',
      value: function setCSSPrefix(css) {
        return '-webkit-' + css + '; -ms-' + css + '; ' + css + ';';
      } // Creates a new event and initalizes it.
      // @params {String} name
      // @returns {Event}

    }, {
      key: 'createEvent',
      value: function createEvent(name) {
        var event;
        event = null;

        if (typeof document !== 'undefined') {
          event = document.createEvent('HTMLEvents') || document.createEvent('event');
          event.initEvent(name, false, true);
        }

        return event;
      }
    }]);
    return Util;
  }();

  Util.isMobile = typeof navigator !== 'undefined' ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) : false;
  Util.events = {
    mousedown: Util.isMobile ? 'touchstart' : 'mousedown',
    mouseup: Util.isMobile ? 'touchend' : 'mouseup'
  };
  Util.transitionEndEvents = ['transitionend', 'webkitTransitionEnd', 'oTransitionEnd', 'otransitionend', 'MSTransitionEnd'];
  return Util;
}.call(undefined);

var Util$1 = Util;
var Group;

var Group$1 = Group = function () {
  function Group() {
    classCallCheck(this, Group);
  }

  createClass(Group, null, [{
    key: 'resize',
    // @params {Boolean} skip
    value: function resize() {
      var $, e, i, iterator, j, k, l, len, len1, len2, m, n, o, p, r, ref, ref1, ref2, ref3, ref4, ref5, s, spaceElements, wrapper, wrappers;
      iterator = this.resizeIterator.apply(this, arguments);
      $ = iterator.next();

      if ($.done) {
        return;
      } else {
        $ = $.value;
      }

      this.Group.setTotalIndex.call(this, $.imageCount);
      wrappers = this.container.querySelectorAll('.mc-wrapper');

      for (i = j = 0, ref = this.totalIndex - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        if (!(wrapper = wrappers[i])) {
          wrapper = document.createElement('div');
          wrapper.classList.add('mc-wrapper');
          wrapper.style.marginRight = this.space + 'px';
          this.container.appendChild(wrapper);
        } else {
          spaceElements = wrapper.querySelectorAll('.mc-carousel-space-element');

          for (k = 0, len = spaceElements.length; k < len; k++) {
            s = spaceElements[k];
            wrapper.removeChild(s);
          }
        }

        r = i * $.imageCount;

        for (n = l = ref1 = r, ref2 = r + $.imageCount - 1; ref1 <= ref2 ? l <= ref2 : l >= ref2; n = ref1 <= ref2 ? ++l : --l) {
          if (e = this.elements[n]) {
            wrapper.appendChild(e);
          } else {
            s = document.createElement('div');
            s.className = 'mc-carousel-element mc-carousel-space-element';
            s.style.marginRight = this.space + 'px';
            wrapper.appendChild(s);
          }
        }
      }

      wrappers = this.container.querySelectorAll('.mc-wrapper');

      if (wrappers.length > this.totalIndex) {
        for (i = m = ref3 = this.totalIndex, ref4 = wrappers.length - 1; ref3 <= ref4 ? m <= ref4 : m >= ref4; i = ref3 <= ref4 ? ++m : --m) {
          this.container.removeChild(wrappers[i]);
        }
      }

      ref5 = this.elements;

      for (o = 0, len1 = ref5.length; o < len1; o++) {
        e = ref5[o];
        e.style.width = this.width + 'px';
      }

      spaceElements = this.container.querySelectorAll('.mc-wrapper > .mc-carousel-space-element');

      for (p = 0, len2 = spaceElements.length; p < len2; p++) {
        s = spaceElements[p];
        s.style.width = this.width + 'px';
      }

      return iterator.next();
    } // @returns {Promise<void>}

  }, {
    key: 'setCarouselAnimation',
    value: function setCarouselAnimation() {
      var _this = this,
          _arguments = arguments;

      return new Promise(function () {
        var _ref = asyncToGenerator(
        /*#__PURE__*/
        regenerator.mark(function _callee(resolve) {
          var $, afterAnmCalc, beforeAnmCalc, iterator;
          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  iterator = _this.setCarouselAnimationIterator.apply(_this, _arguments);
                  $ = iterator.next().value;

                  if ($.reverse) {
                    if ($.reverseNext) {
                      beforeAnmCalc = 0;
                      afterAnmCalc = _this.elWidth + _this.space;
                    } else {
                      beforeAnmCalc = _this.elWidth + _this.space;
                      afterAnmCalc = 0;
                    }
                  } else {
                    beforeAnmCalc = $.i * _this.elWidth + $.i * _this.space;
                    afterAnmCalc = _this.index * _this.elWidth + _this.index * _this.space;
                  }

                  _context.next = 5;
                  return new Promise(function (resolve) {
                    return requestAnimationFrame(function () {
                      var wrappers;

                      if ($.reverse) {
                        wrappers = _this.container.querySelectorAll('.mc-wrapper');

                        _this.container.insertBefore(wrappers[_this.totalIndex - 1], wrappers[0]);
                      }

                      _this.container.setAttribute('style', Util$1.setCSSPrefix('transform:translateX(-' + beforeAnmCalc + 'px)'));

                      return requestAnimationFrame(function () {
                        _this.container.setAttribute('style', [_this.applyTransition(), Util$1.setCSSPrefix('transform:translateX(-' + afterAnmCalc + 'px)')].join(''));

                        return Util$1.addMultiEventListenerOnce(_this.container, Util$1.transitionEndEvents, function () {
                          if ($.reverse) {
                            _this.container.appendChild(wrappers[_this.totalIndex - 1]);
                          }

                          _this.container.setAttribute('style', Util$1.setCSSPrefix('transform:translateX(-' + (_this.index * _this.elWidth + _this.index * _this.space) + 'px)'));

                          return resolve();
                        });
                      });
                    });
                  });

                case 5:
                  iterator.next();
                  return _context.abrupt('return', resolve());

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }));

        return function (_x2) {
          return _ref.apply(this, arguments);
        };
      }());
    } // @params {HTMLElement} el
    // @params {Number} index

  }, {
    key: 'addElement',
    value: function addElement(el, index) {
      var iterator;
      iterator = this.addElementIterator.apply(this, arguments);
      iterator.next();

      if (this.maxWidth) {
        el.style.maxWidth = this.maxWidth + 'px';
      }

      this.container.querySelector('.mc-wrapper').appendChild(el);
      return iterator.next();
    } // @params {Number} index

  }, {
    key: 'removeElement',
    value: function removeElement(index) {
      var iterator;
      iterator = this.removeElementIterator.apply(this, arguments);
      iterator.next();
      return iterator.next();
    } // Sets total index.
    // @params {Number} imageCount

  }, {
    key: 'setTotalIndex',
    value: function setTotalIndex(imageCount) {
      var totalIndex;
      totalIndex = Math.ceil(this.total / imageCount);

      if (this.totalIndex !== totalIndex) {
        this.totalIndex = totalIndex;
        this.index = 0;
        return this.container.setAttribute('style', Util$1.setCSSPrefix("transform:translateX(0)"));
      } else {
        return this.container.setAttribute('style', Util$1.setCSSPrefix('transform:translateX(' + (this.index * this.elWidth + this.index * this.space) * -1 + 'px)'));
      }
    }
  }]);
  return Group;
}();

var Solo;

var Solo$1 = Solo = function () {
  function Solo() {
    classCallCheck(this, Solo);
  }

  createClass(Solo, null, [{
    key: 'resize',
    value: function resize() {
      var $, c, count, e, i, iterator, j, k, l, len, len1, ref, ref1, ref2, ref3, ref4;
      iterator = this.resizeIterator.apply(this, arguments);
      $ = iterator.next();

      if ($.done) {
        return;
      } else {
        $ = $.value;
      }

      if ((count = $.imageCount - 1) > 0) {
        for (c = i = 0, ref = count - 1; 0 <= ref ? i <= ref : i >= ref; c = 0 <= ref ? ++i : --i) {
          if (!this.cloneElements[c]) {
            e = this.elements[c].cloneNode(true);
            e.classList.add('mc-carousel-clone-element');
            this.container.appendChild(e);
            this.cloneElements.push(e);
          }
        }
      }

      if (this.cloneElements.length > count) {
        for (c = j = ref1 = this.cloneElements.length - 1, ref2 = count; ref1 <= ref2 ? j <= ref2 : j >= ref2; c = ref1 <= ref2 ? ++j : --j) {
          this.container.removeChild(this.cloneElements[c]);
          this.cloneElements.splice(c, 1);
        }
      }

      ref3 = this.elements;

      for (k = 0, len = ref3.length; k < len; k++) {
        e = ref3[k];
        e.style.width = this.width + 'px';
      }

      ref4 = this.cloneElements;

      for (l = 0, len1 = ref4.length; l < len1; l++) {
        e = ref4[l];
        e.style.width = this.width + 'px';
      }

      this.container.setAttribute('style', Util$1.setCSSPrefix('transform:translateX(-' + (this.index * this.width + this.index * this.space) + 'px)'));
      return iterator.next();
    } // @returns {Promise<void>}

  }, {
    key: 'setCarouselAnimation',
    value: function setCarouselAnimation() {
      var _this = this,
          _arguments = arguments;

      return new Promise(function () {
        var _ref = asyncToGenerator(
        /*#__PURE__*/
        regenerator.mark(function _callee(resolve) {
          var $, afterAnmCalc, beforeAnmCalc, iterator;
          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  iterator = _this.setCarouselAnimationIterator.apply(_this, _arguments);
                  $ = iterator.next().value;

                  if ($.reverse) {
                    if ($.reverseNext) {
                      beforeAnmCalc = 0;
                      afterAnmCalc = _this.width + _this.space;
                    } else {
                      beforeAnmCalc = _this.width + _this.space;
                      afterAnmCalc = 0;
                    }
                  } else {
                    beforeAnmCalc = $.i * _this.width + $.i * _this.space;
                    afterAnmCalc = _this.index * _this.width + _this.index * _this.space;
                  }

                  _context.next = 5;
                  return new Promise(function (resolve) {
                    return requestAnimationFrame(function () {
                      if ($.reverse) {
                        _this.container.insertBefore(_this.elements[_this.totalIndex - 1], _this.elements[0]);
                      }

                      _this.container.setAttribute('style', Util$1.setCSSPrefix('transform:translateX(-' + beforeAnmCalc + 'px)'));

                      return requestAnimationFrame(function () {
                        _this.container.setAttribute('style', [_this.applyTransition(), Util$1.setCSSPrefix('transform:translateX(-' + afterAnmCalc + 'px)')].join(''));

                        return Util$1.addMultiEventListenerOnce(_this.container, Util$1.transitionEndEvents, function () {
                          if ($.reverse) {
                            if (_this.cloneElements.length > 0) {
                              _this.container.insertBefore(_this.elements[_this.totalIndex - 1], _this.cloneElements[0]);
                            } else {
                              _this.container.appendChild(_this.elements[_this.totalIndex - 1]);
                            }
                          }

                          _this.container.setAttribute('style', Util$1.setCSSPrefix('transform:translateX(-' + (_this.index * _this.width + _this.index * _this.space) + 'px)'));

                          return resolve();
                        });
                      });
                    });
                  });

                case 5:
                  iterator.next();
                  return _context.abrupt('return', resolve());

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    } // @params {HTMLElement} el
    // @params {Number} index

  }, {
    key: 'addElement',
    value: function addElement(el, index) {
      var iterator;
      iterator = this.addElementIterator.apply(this, arguments);
      iterator.next();

      if (index < this.total) {
        this.container.insertBefore(el, this.elements[index]);
      } else {
        this.container.appendChild(el);
      }

      this.totalIndex += 1;

      if (this.list) {
        this.list.add();
      }

      this.Group.removeCloneElements.call(this);
      return iterator.next();
    } // @params {Number} index

  }, {
    key: 'removeElement',
    value: function removeElement(index) {
      var iterator;
      iterator = this.removeElementIterator.apply(this, arguments);
      iterator.next();

      if (index <= this.index && this.index !== 0) {
        this.index -= 1;

        if (this.list) {
          this.list.index = this.index;
        }
      }

      this.totalIndex -= 1;

      if (this.list) {
        this.list.remove();
      }

      this.Group.removeCloneElements.call(this);
      return iterator.next();
    } // Removes the cloned elements.

  }, {
    key: 'removeCloneElements',
    value: function removeCloneElements() {
      var c, i, len, ref;
      ref = this.cloneElements;

      for (i = 0, len = ref.length; i < len; i++) {
        c = ref[i];
        this.container.removeChild(c);
      }

      return this.cloneElements = [];
    }
  }]);
  return Solo;
}();

var Util$2;

Util$2 = function () {
  var Util = function () {
    function Util() {
      classCallCheck(this, Util);
    }

    createClass(Util, null, [{
      key: 'getElement',
      // Returns the given element.
      // @params {HTMLElement|String} el
      // @returns {HTMLElement}
      value: function getElement(el) {
        if (typeof el === 'string') {
          return document.querySelector(el);
        }

        return el;
      } // Attaches the given events to the element.
      // @params {HTMLElement} el
      // @params {String[]} events
      // @params {EventListener} callback

    }, {
      key: 'addMultiEventListener',
      value: function addMultiEventListener(el, events, callback) {
        var i, j, len, results;
        results = [];

        for (j = 0, len = events.length; j < len; j++) {
          i = events[j];
          results.push(el.addEventListener(i, callback, true));
        }

        return results;
      } // Removes the events from the element.
      // @params {HTMLElement} el
      // @params {String[]} events
      // @params {EventListener} callback

    }, {
      key: 'removeMultiEventListener',
      value: function removeMultiEventListener(el, events, callback) {
        var i, j, len, results;
        results = [];

        for (j = 0, len = events.length; j < len; j++) {
          i = events[j];
          results.push(el.removeEventListener(i, callback, true));
        }

        return results;
      } // Attaches the events to the element for once.
      // @params {HTMLElement} el
      // @params {String[]} events
      // @params {EventListener} callback

    }, {
      key: 'addMultiEventListenerOnce',
      value: function addMultiEventListenerOnce(el, events, callback) {
        var _this = this;

        var _cb;

        _cb = function cb(e) {
          _this.removeMultiEventListener(el, events, _cb);

          return callback(e);
        };

        return this.addMultiEventListener(el, events, _cb);
      } // @params {String} css
      // @returns {String}

    }, {
      key: 'setCSSPrefix',
      value: function setCSSPrefix(css) {
        return '-webkit-' + css + '; -ms-' + css + '; ' + css + ';';
      } // Creates a new event and initalizes it.
      // @params {String} name
      // @returns {Event}

    }, {
      key: 'createEvent',
      value: function createEvent(name) {
        var event;
        event = null;

        if (typeof document !== 'undefined') {
          event = document.createEvent('HTMLEvents') || document.createEvent('event');
          event.initEvent(name, false, true);
        }

        return event;
      }
    }]);
    return Util;
  }();

  Util.isMobile = typeof navigator !== 'undefined' ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) : false;
  Util.events = {
    mousedown: Util.isMobile ? 'touchstart' : 'mousedown',
    mouseup: Util.isMobile ? 'touchend' : 'mouseup'
  };
  Util.transitionEndEvents = ['transitionend', 'webkitTransitionEnd', 'oTransitionEnd', 'otransitionend', 'MSTransitionEnd'];
  return Util;
}.call(undefined);

var Util$3 = Util$2;
var events = {
  change: Util$3.createEvent('change'),
  totalIndex: Util$3.createEvent('totalIndex'),
  touchStart: Util$3.createEvent('touchStart'),
  touchEnd: Util$3.createEvent('touchEnd'),
  play: Util$3.createEvent('play'),
  stop: Util$3.createEvent('stop'),
  destroy: Util$3.createEvent('destroy')
};
var TouchMove;

var TouchMove$1 = TouchMove = function () {
  function TouchMove(carousel) {
    classCallCheck(this, TouchMove);
    this.carousel = carousel;
    this.start = this.start.bind(this);
    this.end = this.end.bind(this);
    this.carousel.carouselEl.addEventListener(Util$3.events.mousedown, this.start, true);
  } // Starts touching.
  // @params {Event} e


  createClass(TouchMove, [{
    key: 'start',
    value: function start(e) {
      if (!this.carousel.processing) {
        this.carousel.processing = true;
        this.carousel.el.dispatchEvent(events.touchStart);
        this.startX = e.clientX || e.pageX;
        this.time = new Date().getTime();
        window.addEventListener(Util$3.events.mouseup, this.end, true);
      }

      return e.preventDefault();
    } // Ends touching.
    // @params {Event} e

  }, {
    key: 'end',
    value: function end(e) {
      var endX, t, x;
      this.destroy();
      this.carousel.el.dispatchEvent(events.touchEnd);
      endX = e.clientX || e.pageX;
      x = endX - this.startX;
      t = new Date().getTime() - this.time;

      if (Math.abs(x) >= 25 && t <= 250) {
        if (x <= 0) {
          return this.carousel.nextIndex(true);
        } else {
          return this.carousel.prevIndex(true);
        }
      } else {
        return this.carousel.processing = false;
      }
    } // Removes the event listener.

  }, {
    key: 'destroy',
    value: function destroy() {
      return window.removeEventListener(Util$3.events.mouseup, this.end, true);
    }
  }]);
  return TouchMove;
}();

var List;

var List$1 = List = function () {
  var List = function () {
    function List(carousel, list, asList) {
      classCallCheck(this, List);
      var i, j, ref;
      this.carousel = carousel;
      this.asList = asList;
      this.setIndex = this.setIndex.bind(this);

      if (list) {
        this.listEl = document.createElement('ul');
        this.carousel.el.appendChild(this.listEl);
        this.listEl.addEventListener(Util$3.events.mousedown, this.setIndex, true);

        if (this.carousel.totalIndex > 0) {
          for (i = j = 0, ref = this.carousel.totalIndex - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
            this.add();
          }
        }
      }

      if (this.asList) {
        this.asList.addEventListener(Util$3.events.mousedown, this.setIndex, true);
      }

      this.index = this.carousel.index;
    } // Sets the new index by checking elements clicked on the list.
    // @params {Event} e


    createClass(List, [{
      key: 'setIndex',
      value: function setIndex(e) {
        var index, target;
        target = e.target;

        while (target !== this.listEl && target !== this.asList && target.parentNode !== this.listEl && target.parentNode !== this.asList) {
          target = target.parentNode;
        }

        if (target.parentNode === this.listEl || target.parentNode === this.asList) {
          index = Array.prototype.slice.call(target.parentNode.children).indexOf(target);
          return this.carousel.setIndex(index);
        }
      } // Sets active class by index.

    }, {
      key: 'setActive',
      value: function setActive() {
        var activeEl, el;

        if (this.listEl) {
          activeEl = this.listEl.querySelector('.mc-active');

          if (activeEl) {
            activeEl.classList.remove('mc-active');
          }

          el = this.listEl.querySelectorAll('li')[this.index];

          if (el) {
            el.classList.add('mc-active');
          }
        }

        if (this.asList) {
          activeEl = this.asList.querySelector('.mc-active');

          if (activeEl) {
            activeEl.classList.remove('mc-active');
          }

          el = Array.prototype.slice.call(this.asList.children)[this.index];

          if (el) {
            return el.classList.add('mc-active');
          }
        }
      } // Adds a new element to the list.

    }, {
      key: 'add',
      value: function add() {
        if (this.listEl) {
          return this.listEl.appendChild(document.createElement('li'));
        }
      } // Removes an element from the list.

    }, {
      key: 'remove',
      value: function remove() {
        if (this.listEl) {
          return this.listEl.removeChild(this.listEl.lastChild);
        }
      } // Removes the event listener.

    }, {
      key: 'destroy',
      value: function destroy() {
        if (this.asList) {
          return this.asList.removeEventListener(Util$3.events.mousedown, this.setIndex, true);
        }
      }
    }]);
    return List;
  }();

  Object.defineProperties(List.prototype, {
    index: {
      get: function get$$1() {
        return this._index;
      },
      set: function set$$1(value) {
        this._index = value;
        return this.setActive();
      }
    }
  });
  return List;
}.call(undefined);

var Arrows;

var Arrows$1 = Arrows = function () {
  function Arrows(carousel, arrows, asArrows) {
    classCallCheck(this, Arrows);
    var nextArrow, prevArrow;
    this.carousel = carousel;
    this.asArrows = asArrows;
    this.prev = this.carousel.prev.bind(this.carousel);
    this.next = this.carousel.next.bind(this.carousel);
    this.arrowEls = {};

    if (arrows) {
      prevArrow = this.arrowEls.prevArrow = document.createElement('div');
      prevArrow.className = 'mc-arrow mc-prev-arrow';
      prevArrow.innerHTML = '<svg width="50" height="50" viewBox="0 0 1792 1792"><path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg>';
      this.carousel.el.appendChild(prevArrow);
      prevArrow.addEventListener(Util$3.events.mousedown, this.prev, true);
      nextArrow = this.arrowEls.nextArrow = document.createElement('div');
      nextArrow.className = 'mc-arrow mc-next-arrow';
      nextArrow.innerHTML = '<svg width="50" height="50" viewBox="0 0 1792 1792"><path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg>';
      this.carousel.el.appendChild(nextArrow);
      nextArrow.addEventListener(Util$3.events.mousedown, this.next, true);
    }

    if (this.asArrows.prevArrow) {
      this.asArrows.prevArrow.addEventListener(Util$3.events.mousedown, this.prev, true);
    }

    if (this.asArrows.nextArrow) {
      this.asArrows.nextArrow.addEventListener(Util$3.events.mousedown, this.next, true);
    }
  } // Removes the event listeners.


  createClass(Arrows, [{
    key: 'destroy',
    value: function destroy() {
      if (this.asArrows.prevArrow) {
        this.asArrows.prevArrow.removeEventListener(Util$3.events.mousedown, this.prev, true);
      }

      if (this.asArrows.nextArrow) {
        return this.asArrows.nextArrow.removeEventListener(Util$3.events.mousedown, this.next, true);
      }
    }
  }]);
  return Arrows;
}();

var defaultOptions = {
  timing: 'ease',
  duration: 800,
  group: true,
  minImage: 1,
  maxImage: 1,
  space: 0,
  touchMove: true,
  list: true,
  arrows: true,
  autoPlay: false,
  autoPlaySpeed: 5000,
  init: true
};
var MarvinaCarousel;

var marvinaCarousel = MarvinaCarousel = function () {
  // @params {Object} o
  function MarvinaCarousel() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultOptions;
    classCallCheck(this, MarvinaCarousel); // dont install if runs on the server.

    if (typeof window === 'undefined') {
      return;
    }

    this.extractAttributes(o);
    this.o = o;

    if (!(this.el = Util$3.getElement(o.el))) {
      throw new Error('Element could not be found');
    } // group


    this.Group = this.group ? Group$1 : Solo$1;
    this.resize = this.Group.resize.bind(this);
    this.setCarouselAnimation = this.Group.setCarouselAnimation.bind(this);
    this.addElement = this.Group.addElement.bind(this);
    this.removeElement = this.Group.removeElement.bind(this);

    if (this.init) {
      this.initDOM();
    }
  } // Inits slider with creating DOM.


  createClass(MarvinaCarousel, [{
    key: 'initDOM',
    value: function initDOM() {
      var c, e, elements, j, k, len, len1, wrapper;
      this.el.classList.add('mc'); // elements & carousel

      this.carouselEl = document.createElement('div');
      this.carouselEl.classList.add('mc-carousel');
      this.carouselEl.innerHTML = '<div class="mc-container"></div>';

      if (c = this.el.childNodes[0]) {
        this.el.insertBefore(this.carouselEl, c);
      } else {
        this.el.appendChild(this.carouselEl);
      }

      this.container = this.carouselEl.querySelector('div');
      elements = this.el.querySelectorAll('.mc-carousel-element');
      this.elements = [];

      if (this.group) {
        wrapper = document.createElement('div');
        wrapper.classList.add('mc-wrapper');
        wrapper.style.marginRight = this.space + 'px';
        this.container.appendChild(wrapper);

        for (j = 0, len = elements.length; j < len; j++) {
          e = elements[j];
          e.style.marginRight = this.space + 'px';
          wrapper.appendChild(e);
          this.elements.push(e);
        }
      } else {
        this.cloneElements = [];

        for (k = 0, len1 = elements.length; k < len1; k++) {
          e = elements[k];
          e.style.marginRight = this.space + 'px';
          this.container.appendChild(e);
          this.elements.push(e);
        }

        this.totalIndex = this.elements.length;
        this.index = 0;
      }

      this.total = this.elements.length;
      this.resize();
      this.initSettingsElements();
      window.addEventListener('resize', this.resize, true);
      return this.resize();
    } // Inits carousel without creating DOM.

  }, {
    key: 'initCarousel',
    value: function initCarousel() {
      this.carouselEl = this.el.querySelector('.mc-carousel');
      this.container = this.carouselEl.querySelector('.mc-container');
      this.total = this.totalIndex = this.carouselEl.querySelectorAll('.mc-carousel-element').length;
      this.index = 0;
      return this.initSettingsElements();
    } // Inits settings elements.

  }, {
    key: 'initSettingsElements',
    value: function initSettingsElements() {
      if (this.o.touchMove) {
        // touchMove
        this.touchMove = new TouchMove$1(this);
      }

      if (this.o.list || this.o.asList) {
        // list / asList
        this.list = new List$1(this, this.o.list, this.o.asList);
      }

      if (this.o.arrows || this.o.asPrevArrow || this.o.asNextArrow) {
        // arrows / prevArrow / nextArrow
        this.arrows = new Arrows$1(this, this.o.arrows, {
          prevArrow: this.o.asPrevArrow,
          nextArrow: this.o.asNextArrow
        });
      } // auto playing


      if (this.autoPlay) {
        this.autoPlayStatus = true;
        this.autoPlayContainer = document.createElement('div');
        this.autoPlayContainer.className = 'mc-autoplay-container mc-active';
        this.autoPlayContainer.innerHTML = ['<svg class="mc-play" viewBox="0 0 48 48"> \t\t\t\t\t\t<path d="M16 10v28l22-14z"></path> \t\t\t\t\t</svg>', '<svg class="mc-stop" viewBox="0 0 512 512"> \t\t\t\t\t\t<rect height="320" width="60" x="153" y="96"></rect><rect height="320" width="60" x="299" y="96"></rect> \t\t\t\t\t</svg>'].join('');
        this.autoPlayContainer.addEventListener(Util$3.events.mousedown, this.toggle.bind(this), true);
        this.setAutoPlayInterval(false);
        return this.el.appendChild(this.autoPlayContainer);
      }
    } // Extracts attributes from default options.
    // @params {Object} o

  }, {
    key: 'extractAttributes',
    value: function extractAttributes(o) {
      var attrsKey, j, key, len, results, value;

      for (key in defaultOptions) {
        value = defaultOptions[key];

        if (o[key] == null) {
          o[key] = value;
        }
      }

      attrsKey = ['timing', 'duration', 'group', 'minImage', 'maxImage', 'minWidth', 'maxWidth', 'height', 'space', 'autoPlay', 'autoPlaySpeed', 'init'];
      results = [];

      for (j = 0, len = attrsKey.length; j < len; j++) {
        key = attrsKey[j];

        if (o[key] != null) {
          results.push(this[key] = o[key]);
        } else {
          results.push(void 0);
        }
      }

      return results;
    } // @params {HTMLElement} el
    // @params {Number} index

  }, {
    key: 'addElementIterator',
    value:
    /*#__PURE__*/
    regenerator.mark(function addElementIterator(el, index) {
      return regenerator.wrap(function addElementIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              el.classList.add('mc-carousel-element');
              el.style.marginRight = this.space + 'px';
              _context.next = 4;
              return;

            case 4:
              this.total += 1;
              this.elements.splice(index, 0, el);
              return _context.abrupt('return', this.resize(true));

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, addElementIterator, this);
    }) // Adds a new element to the carousel.
    // @params {String|HTMLElement} el
    // @params {Number} index

  }, {
    key: 'add',
    value: function add(el, index) {
      var _this = this,
          _arguments = arguments;

      if ((el = Util$3.getElement(el)) && index > -1 && index <= this.total) {
        if (!this.processing) {
          return this.addElement(el, index);
        } else {
          return setTimeout(function () {
            return _this.add.apply(_this, Array.prototype.slice.call(_arguments).concat([500]));
          });
        }
      }
    } // Adds a new element to the head of the carousel.
    // @params {String|HTMLElement} el

  }, {
    key: 'addFirst',
    value: function addFirst(el) {
      return this.add(el, 0);
    } // Adds a new element to the last of the carousel.
    // @params {String|HTMLElement} el

  }, {
    key: 'addLast',
    value: function addLast(el) {
      return this.add(el, this.total);
    } // @params {Number} index

  }, {
    key: 'removeElementIterator',
    value:
    /*#__PURE__*/
    regenerator.mark(function removeElementIterator(index) {
      return regenerator.wrap(function removeElementIterator$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.elements[index].parentNode.removeChild(this.elements[index]);
              _context2.next = 3;
              return;

            case 3:
              this.total -= 1;
              this.elements.splice(index, 1);
              return _context2.abrupt('return', this.resize(true));

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, removeElementIterator, this);
    }) // Removes the element at the specified index from the carousel.
    // @params {Number} index

  }, {
    key: 'remove',
    value: function remove(index) {
      var _this2 = this,
          _arguments2 = arguments;

      if (index > -1 && index < this.total && this.total > 2) {
        if (!this.processing) {
          return this.removeElement(index);
        } else {
          return setTimeout(function () {
            return _this2.remove.apply(_this2, Array.prototype.slice.call(_arguments2).concat([500]));
          });
        }
      }
    } // Removes the first element from the carousel.

  }, {
    key: 'removeFirst',
    value: function removeFirst() {
      return this.remove(0);
    } // Removes the last element from the carousel.

  }, {
    key: 'removeLast',
    value: function removeLast() {
      return this.remove(this.total - 1);
    } // Triggers previous image. Returns false if the carousel is in animation.
    // @returns {Promise<boolean>}

  }, {
    key: 'prev',
    value: function prev() {
      var _this3 = this;

      return new Promise(function (resolve) {
        if (!_this3.processing) {
          return _this3.prevIndex().then(function (resp) {
            return resolve(resp);
          });
        } else {
          return resolve(false);
        }
      });
    } // @params {Boolean} touchMove
    // @returns {Promise<boolean>}

  }, {
    key: 'prevIndex',
    value: function prevIndex() {
      var _this4 = this;

      var touchMove = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return new Promise(function (resolve) {
        var index;

        if ((!_this4.processing || touchMove) && _this4.totalIndex > 1) {
          index = _this4.index - 1 >= 0 ? _this4.index - 1 : _this4.totalIndex - 1;
          return _this4.setCarouselAnimation(index, false, false).then(function () {
            return resolve(true);
          });
        } else {
          return resolve(false);
        }
      });
    } // Triggers next image. Returns false if the carousel is in animation.
    // @returns {Promise<boolean>}

  }, {
    key: 'next',
    value: function next() {
      var _this5 = this;

      return new Promise(function (resolve) {
        if (!_this5.processing) {
          return _this5.nextIndex().then(function (resp) {
            return resolve(resp);
          });
        } else {
          return resolve(false);
        }
      });
    } // @params {Boolean} touchMove
    // @params {Boolean} auto
    // @returns {Promise<boolean>}

  }, {
    key: 'nextIndex',
    value: function nextIndex() {
      var _this6 = this;

      var touchMove = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var auto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return new Promise(function (resolve) {
        var index;

        if ((!_this6.processing || touchMove) && _this6.totalIndex > 1) {
          index = _this6.index + 1 < _this6.totalIndex ? _this6.index + 1 : 0;
          return _this6.setCarouselAnimation(index, true, auto).then(function () {
            return resolve(true);
          });
        } else {
          return resolve(false);
        }
      });
    } // Starts autoplay.

  }, {
    key: 'play',
    value: function play() {
      if (!this.autoPlayStatus) {
        this.autoPlayStatus = true;
        this.autoPlayContainer.classList.add('mc-active');
        this.setAutoPlayInterval();
        return this.el.dispatchEvent(events.play);
      }
    } // Stops autoplay.

  }, {
    key: 'stop',
    value: function stop() {
      if (this.autoPlayStatus) {
        this.autoPlayStatus = false;
        this.autoPlayContainer.classList.remove('mc-active');
        clearInterval(this.autoPlayInterval);
        return this.el.dispatchEvent(events.stop);
      }
    } // Toggles autoplay.

  }, {
    key: 'toggle',
    value: function toggle() {
      if (this.autoPlayStatus) {
        return this.stop();
      } else {
        return this.play();
      }
    } // Destroys the carousel.

  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.touchMove) {
        this.touchMove.destroy();
      }

      if (this.list) {
        this.list.destroy();
      }

      if (this.arrows) {
        this.arrows.destroy();
      }

      if (this.autoPlay && this.autoPlayStatus) {
        clearInterval(this.autoPlayInterval);
      }

      this.el.innerHTML = '';
      this.el.classList.remove('mc');
      return this.el.dispatchEvent(events.destroy);
    } // @params {Number} index
    // @params {Boolean} next
    // @params {Boolean} auto
    // Sets animation

  }, {
    key: 'setCarouselAnimationIterator',
    value:
    /*#__PURE__*/
    regenerator.mark(function setCarouselAnimationIterator(index, next) {
      var auto = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var i, reverse, reverseNext;
      return regenerator.wrap(function setCarouselAnimationIterator$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              this.processing = true;
              i = this.index;
              this.index = index;

              if (this.list) {
                this.list.index = index;
              }

              if (next && this.index === 0 && i + 1 === this.totalIndex || !next && this.index + 1 === this.totalIndex && i === 0) {
                reverse = true;
                reverseNext = this.index === 0;
              } else {
                reverse = false;
              }

              _context3.next = 7;
              return {
                i: i,
                reverse: reverse,
                reverseNext: reverseNext
              };

            case 7:
              this.processing = false;
              this.el.dispatchEvent(events.change);

              if (this.autoPlay && this.autoPlayStatus && !auto) {
                clearInterval(this.autoPlayInterval);
                this.setAutoPlayInterval(false);
              }

              _context3.next = 12;
              return;

            case 12:
              return _context3.abrupt('return', _context3.sent);

            case 13:
            case 'end':
              return _context3.stop();
          }
        }
      }, setCarouselAnimationIterator, this);
    })
  }, {
    key: 'applyTransition',
    value: function applyTransition() {
      return ['-webkit-transition:-webkit-transform ' + this.duration + 'ms 0s ' + this.timing + ';', '-ms-transition:-ms-transform ' + this.duration + 'ms 0s ' + this.timing + ';', 'transition:transform ' + this.duration + 'ms 0s ' + this.timing + ';'].join('');
    } // Sets index, total index and image size
    // @params {Boolean} skip

  }, {
    key: 'resizeIterator',
    value:
    /*#__PURE__*/
    regenerator.mark(function resizeIterator() {
      var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var d, elHeight, elWidth, i, imageCount, j, m, ref, totalIndex;
      return regenerator.wrap(function resizeIterator$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (this.processing) {
                _context4.next = 27;
                break;
              }

              elWidth = this.carouselEl.offsetWidth;

              if (!(elWidth === this.elWidth && skip !== true)) {
                _context4.next = 4;
                break;
              }

              return _context4.abrupt('return');

            case 4:
              this.elWidth = elWidth;
              this.processing = true;
              imageCount = this.maxImage;

            case 7:
              this.width = (this.elWidth - this.space * (imageCount - 1)) / imageCount;

              if (!(this.minWidth && this.width < this.minWidth)) {
                _context4.next = 13;
                break;
              }

              imageCount -= 1;
              _context4.next = 14;
              break;

            case 13:
              return _context4.abrupt('break', 16);

            case 14:
              _context4.next = 7;
              break;

            case 16:
              if (this.minImage > imageCount) {
                imageCount = this.minImage;
              }

              this.width = (this.elWidth - this.space * (imageCount - 1)) / imageCount;

              if (this.maxWidth && this.width > this.maxWidth) {
                this.width = this.maxWidth;
              }

              if (this.height) {
                elHeight = this.width * this.height / 100;
                this.carouselEl.style.height = elHeight + 'px';

                if (elHeight !== this.elHeight) {
                  this.elHeight = elHeight;
                  this.resize();
                }
              }

              totalIndex = this.totalIndex;
              _context4.next = 23;
              return {
                imageCount: imageCount
              };

            case 23:
              if (this.totalIndex !== totalIndex) {
                if (this.list) {
                  m = this.totalIndex > totalIndex ? this.list.add.bind(this.list) : this.list.remove.bind(this.list);
                  d = Math.abs(this.totalIndex - totalIndex);

                  for (i = j = 1, ref = d; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
                    m();
                  }

                  this.list.index = this.index;
                }

                this.el.dispatchEvent(events.totalIndex);
              }

              return _context4.abrupt('return', this.processing = false);

            case 27:
              if (this.processingTimeout) {
                clearTimeout(this.processingTimeout);
              }

              return _context4.abrupt('return', this.processingTimeout = setTimeout(this.resize, 500));

            case 29:
            case 'end':
              return _context4.stop();
          }
        }
      }, resizeIterator, this);
    }) // Calculates resize values.
    // @param {Number} total

  }, {
    key: 'calculateResize',
    value: function calculateResize(total) {
      var $, iterator;
      iterator = this.resizeIterator(true);
      $ = iterator.next();

      if (!$.done) {
        $ = $.value;
        this.imageCount = $.imageCount;
      }

      if (this.group) {
        this.Group.setTotalIndex.call(this, this.imageCount);
      } else {
        this.total = this.totalIndex = total;
        this.container.setAttribute('style', Util$3.setCSSPrefix('transform:translateX(-' + (this.index * this.width + this.index * this.space) + 'px)'));
      }

      return iterator.next();
    } // @returns {Number}

  }, {
    key: 'getIndex',
    value: function getIndex() {
      return this.index;
    } // @params {Number} index
    // @returns {Promise<boolean>}

  }, {
    key: 'setIndex',
    value: function setIndex(index) {
      var _this7 = this;

      return new Promise(function (resolve) {
        var next;

        if (!_this7.processing) {
          if (index > -1 && index < _this7.totalIndex && index !== _this7.index) {
            next = index > _this7.index;
            return _this7.setCarouselAnimation(index, next).then(function () {
              return resolve(true);
            });
          } else {
            return resolve(false);
          }
        } else {
          return resolve(false);
        }
      });
    } // @returns {Number}

  }, {
    key: 'getTotal',
    value: function getTotal() {
      return this.total;
    } // @returns {Number}

  }, {
    key: 'getTotalIndex',
    value: function getTotalIndex() {
      return this.totalIndex;
    } // @returns {String}

  }, {
    key: 'getTiming',
    value: function getTiming() {
      return this.timing;
    } // @params {Number} timing

  }, {
    key: 'setTiming',
    value: function setTiming(timing) {
      this.timing = timing;
    } // @returns {Number}

  }, {
    key: 'getDuration',
    value: function getDuration() {
      return this.duration;
    } // @params {Number} duration

  }, {
    key: 'setDuration',
    value: function setDuration(duration1) {
      this.duration = duration1;
    } // @returns {Number}

  }, {
    key: 'getAutoPlaySpeed',
    value: function getAutoPlaySpeed() {
      return this.autoPlaySpeed;
    } // @params {Number} speed

  }, {
    key: 'setAutoPlaySpeed',
    value: function setAutoPlaySpeed(autoPlaySpeed) {
      this.autoPlaySpeed = autoPlaySpeed;
    } // @params {Number} duration

  }, {
    key: 'setAutoPlayInterval',
    value: function setAutoPlayInterval() {
      var _this8 = this;

      var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var speed;
      speed = !duration ? this.autoPlaySpeed : this.autoPlaySpeed + this.duration;
      return this.autoPlayInterval = setInterval(function () {
        return _this8.nextIndex(false, true);
      }, speed);
    }
  }]);
  return MarvinaCarousel;
}();

var Carousel = (function (Component, group) {
  var Carousel;
  return Carousel =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Carousel, _React$Component);

    function Carousel(props) {
      var _this;

      _classCallCheck(this, Carousel);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, props));
      _this.space = _this.props.space;
      _this.state = {};
      return _this;
    }

    _createClass(Carousel, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var carousel;
        carousel = new marvinaCarousel({
          el: this.el,
          timing: this.props.timing,
          duration: this.props.duration,
          group: group,
          minImage: this.props.minImage,
          maxImage: this.props.maxImage,
          minWidth: this.props.minWidth,
          maxWidth: this.props.maxWidth,
          height: this.props.height,
          space: this.props.space,
          touchMove: this.props.touchMove,
          list: this.props.list,
          asList: this.props.asList,
          arrows: this.props.arrows,
          asPrevArrow: this.props.asPrevArrow,
          asNextArrow: this.props.asNextArrow,
          autoPlay: this.props.autoPlay,
          autoPlaySpeed: this.props.autoPlaySpeed,
          init: false
        });
        return this.setState({
          carousel: carousel
        });
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(np) {
        if (np.timing !== this.props.timing) {
          this.setTiming(np.timing);
        }

        if (np.duration !== this.props.duration) {
          this.setDuration(np.duration);
        }

        if (np.autoPlay !== this.props.autoPlay) {
          if (np.autoPlay) {
            this.play();
          } else {
            this.stop();
          }
        }

        if (np.autoPlaySpeed !== this.props.autoPlaySpeed) {
          return this.setAutoPlaySpeed(np.autoPlaySpeed);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        return this.destroy();
      } // carousel methods

    }, {
      key: "prev",
      value: function prev() {
        return this.state.carousel.prev();
      }
    }, {
      key: "next",
      value: function next() {
        return this.state.carousel.next();
      }
    }, {
      key: "play",
      value: function play() {
        return this.state.carousel.play();
      }
    }, {
      key: "stop",
      value: function stop() {
        return this.state.carousel.stop();
      }
    }, {
      key: "toggle",
      value: function toggle() {
        return this.state.carousel.toggle();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        return this.state.carousel.destroy();
      }
    }, {
      key: "getIndex",
      value: function getIndex() {
        return this.state.carousel.getIndex();
      }
    }, {
      key: "setIndex",
      value: function setIndex(index) {
        return this.state.carousel.setIndex(index);
      }
    }, {
      key: "getTotal",
      value: function getTotal() {
        return this.state.carousel.getTotal();
      }
    }, {
      key: "getTotalIndex",
      value: function getTotalIndex() {
        return this.state.carousel.getTotalIndex();
      }
    }, {
      key: "getTiming",
      value: function getTiming() {
        return this.state.carousel.getTiming();
      }
    }, {
      key: "setTiming",
      value: function setTiming(timing) {
        return this.state.carousel.setTiming(timing);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.state.carousel.getDuration();
      }
    }, {
      key: "setDuration",
      value: function setDuration(duration) {
        return this.state.carousel.setDuration(duration);
      }
    }, {
      key: "getAutoPlaySpeed",
      value: function getAutoPlaySpeed() {
        return this.state.carousel.getAutoPlaySpeed();
      }
    }, {
      key: "setAutoPlaySpeed",
      value: function setAutoPlaySpeed(speed) {
        return this.state.carousel.setAutoPlaySpeed(speed);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        return react.createElement("div", {
          className: "mc",
          ref: function ref(node) {
            return _this2.el = node;
          }
        }, react.createElement("div", {
          className: "mc-carousel"
        }, this.state.carousel && react.createElement(Component, {
          carousel: this.state.carousel,
          space: this.space
        }, this.props.children)));
      }
    }]);

    return Carousel;
  }(react.Component);
  Carousel.propTypes = {
    timing: propTypes.string,
    duration: propTypes.number,
    minImage: propTypes.number,
    maxImage: propTypes.number,
    minWidth: propTypes.number,
    maxWidth: propTypes.number,
    height: propTypes.number,
    space: propTypes.number,
    touchMove: propTypes.bool,
    list: propTypes.bool,
    asList: propTypes.oneOfType([propTypes.instanceOf(Element), propTypes.string]),
    arrows: propTypes.bool,
    asPrevArrow: propTypes.oneOfType([propTypes.instanceOf(Element), propTypes.string]),
    asNextArrow: propTypes.oneOfType([propTypes.instanceOf(Element), propTypes.string]),
    autoPlay: propTypes.bool,
    autoPlaySpeed: propTypes.number
  };
  return Carousel.defaultProps = {
    timing: 'ease',
    duration: 800,
    minImage: 1,
    maxImage: 1,
    space: 0,
    touchMove: true,
    list: true,
    arrows: true,
    autoPlay: false,
    autoPlaySpeed: 5000
  };
});

var Util$4;
var Util$5 = Util$4 =
/*#__PURE__*/
function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: "eqArrays",
    value: function eqArrays(a, b) {
      var i, j, ref;

      if (a.length !== b.length) {
        return false;
      }

      for (i = j = 0, ref = a.length; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        if (a[i] !== b[i]) {
          return false;
        }
      }

      return true;
    }
  }]);

  return Util;
}();

var Solo$2;

Solo$2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Solo, _React$Component);

  function Solo(props) {
    var _this;

    _classCallCheck(this, Solo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Solo).call(this, props));
    _this.calculateResize = _this.calculateResize.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.carousel = props.carousel;
    _this.space = props.space;
    _this.state = {
      width: 0,
      cloneElements: []
    };
    return _this;
  }

  _createClass(Solo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.carousel.initCarousel();
      window.addEventListener('resize', this.calculateResize, true);
      return this.calculateResize();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(np) {
      if (!Util$5.eqArrays(np.children, this.props.children)) {
        return this.calculateResize(true, np);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(op, os) {
      this.carousel.elements = this.el.querySelectorAll('.mc-carousel-element:not(.mc-carousel-clone-element)');
      return this.carousel.cloneElements = this.el.querySelectorAll('.mc-carousel-clone-element');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      return window.removeEventListener('resize', this.calculateResize, true);
    }
  }, {
    key: "calculateResize",
    value: function calculateResize(skip, $) {
      var children, cloneCount, cloneElements, i, j, ref;
      children = skip !== true ? this.props.children : $.children;
      this.carousel.calculateResize(children.length);
      cloneCount = this.carousel.imageCount > 1 ? this.carousel.imageCount - 1 : 0;
      cloneElements = [];

      for (i = j = 0, ref = cloneCount; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        cloneElements.push(react.cloneElement(children[i], {
          space: this.space,
          width: this.carousel.width,
          clone: true
        }));
      }

      return this.setState({
        width: this.carousel.width,
        cloneElements: cloneElements
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react.createElement("div", {
        className: "mc-container",
        ref: function ref(node) {
          return _this2.el = node;
        }
      }, react.Children.map(this.props.children, function (child) {
        return react.cloneElement(child, {
          space: _this2.space,
          width: _this2.state.width
        });
      }), this.state.cloneElements.map(function (Clone) {
        return Clone;
      }));
    }
  }]);

  return Solo;
}(react.Component);

var Solo$3 = Carousel(Solo$2, false);

var Wrapper;
var Wrapper$1 = Wrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Wrapper, _React$Component);

  function Wrapper() {
    _classCallCheck(this, Wrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(Wrapper).apply(this, arguments));
  }

  _createClass(Wrapper, [{
    key: "render",
    value: function render() {
      return react.createElement("div", {
        className: "mc-wrapper",
        style: {
          marginRight: "".concat(this.props.space, "px")
        }
      }, this.props.children);
    }
  }]);

  return Wrapper;
}(react.Component);
Wrapper.propTypes = {
  space: propTypes.number.isRequired
};

var Element$1;
var Element$2 = Element$1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Element, _React$Component);

  function Element() {
    _classCallCheck(this, Element);

    return _possibleConstructorReturn(this, _getPrototypeOf(Element).apply(this, arguments));
  }

  _createClass(Element, [{
    key: "render",
    value: function render() {
      return react.createElement("div", {
        className: "mc-carousel-element".concat(this.props.clone ? ' mc-carousel-clone-element' : '').concat(this.props.spaceEl ? ' mc-carousel-space-element' : ''),
        style: {
          marginRight: "".concat(this.props.space, "px"),
          width: "".concat(this.props.width, "px")
        }
      }, this.props.children);
    }
  }]);

  return Element;
}(react.Component);
Element$1.propTypes = {
  space: propTypes.number.isRequired,
  clone: propTypes.bool,
  spaceEl: propTypes.bool
};
Element$1.defaultProps = {
  clone: false,
  spaceEl: false
};

var Group$2;

Group$2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Group, _React$Component);

  function Group(props) {
    var _this;

    _classCallCheck(this, Group);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Group).call(this, props));
    _this.calculateResize = _this.calculateResize.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.carousel = props.carousel;
    _this.space = props.space;
    _this.state = {
      width: 0,
      wrappers: []
    };
    return _this;
  }

  _createClass(Group, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.carousel.initCarousel();
      window.addEventListener('resize', this.calculateResize, true);
      return this.calculateResize();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(np) {
      if (!Util$5.eqArrays(np.children, this.props.children)) {
        return this.calculateResize(true, np);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      return window.removeEventListener('resize', this.calculateResize, true);
    }
  }, {
    key: "calculateResize",
    value: function calculateResize(skip, $) {
      var children, els, i, index, j, k, n, ref, ref1, totalIndex, wrappers;
      children = skip !== true ? this.props.children : $.children;
      totalIndex = this.carousel.totalIndex;
      this.carousel.total = children.length;
      this.carousel.calculateResize();
      wrappers = [];

      for (i = j = 0, ref = this.carousel.totalIndex; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        els = [];

        for (n = k = 0, ref1 = this.carousel.imageCount; 0 <= ref1 ? k < ref1 : k > ref1; n = 0 <= ref1 ? ++k : --k) {
          index = i * this.carousel.imageCount + n;

          if (children[index]) {
            els.push(react.cloneElement(children[index], {
              space: this.space,
              width: this.carousel.width
            }));
          } else {
            els.push(react.createElement(Element$2, {
              key: index,
              space: this.space,
              width: this.carousel.width,
              spaceEl: true
            }));
          }
        }

        wrappers.push(react.createElement(Wrapper$1, {
          space: this.space
        }, els));
      }

      return this.setState({
        width: this.carousel.width,
        wrappers: wrappers
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react.createElement("div", {
        className: "mc-container",
        ref: function ref(node) {
          return _this2.el = node;
        }
      }, this.state.wrappers);
    }
  }]);

  return Group;
}(react.Component);

var Group$3 = Carousel(Group$2, true);

export { Solo$3 as Solo, Group$3 as Group, Element$2 as Element };
