"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!*******************************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/main.js?{"type":"appStyle"} ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 8 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 9);

/***/ }),
/* 9 */
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true });

    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
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
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
  NativeIteratorPrototype !== Op &&
  hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
  GeneratorFunctionPrototype,
  toStringTagSymbol,
  "GeneratorFunction");


  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
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
      previousPromise ? previousPromise.then(
      callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
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
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
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
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
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
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
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
        context.arg = new TypeError(
        "The iterator does not provide a 'throw' method");
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
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
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
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
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
    var entry = { tryLoc: locs[0] };

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
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
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
        var i = -1,next = function next() {
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
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
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
          if (name.charAt(0) === "t" &&
          hasOwn.call(this, name) &&
          !isNaN(+name.slice(1))) {
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
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
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

      if (record.type === "break" ||
      record.type === "continue") {
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
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),
/* 10 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 11 */
/*!**************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/service.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 10));\nvar _index = _interopRequireDefault(__webpack_require__(/*! ./store/index.js */ 12));\nvar _event = _interopRequireDefault(__webpack_require__(/*! ./common/event.js */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n// 管理账号信息\nvar USERS_KEY = 'USERS_KEY';\nvar STATE_KEY = 'STATE_KEY';\n// const IPurl = 'https://datixcx.com.aa.800123456.top/api/';\n// const imgurl = 'https://datixcx.com.aa.800123456.top/';\n// const imgurl = 'http://192.168.129.246/';\nvar map_key = \"7FEBZ-WLWK2-PMGUE-C4BFT-EKXB6-BFFNR\";\nvar imgurl = \"https://wanuzn.com.aa.800123456.top/\";\nvar IPurl = imgurl + 'api/';\n// const IPurl='http://192.168.129.246/api/'\n// const adminurl='https://datixcx.com.aa.800123456.top/admin/';\n// appid:wxf61ecd472abe41cb  正式\n// appid:wx49a560f7feac0feb   cj\n/**\r\n * 请求头\r\n */\nvar header = {\n  'content-type': 'application/x-www-form-urlencoded' };\n\n\n/**\r\n                                                          * 供外部post请求调用  \r\n                                                          */\nfunction post(url, params, onSuccess, onFailed) {\n  __f__(\"log\", \"请求方式：\", \"POST\", \" at service.js:28\");\n  request(url, params, \"POST\", onSuccess, onFailed);\n\n}\n\n/**\r\n   * 供外部get请求调用\r\n   */\nfunction get(url, params, onSuccess, onFailed) {\n  __f__(\"log\", \"请求方式：\", \"GET\", \" at service.js:37\");\n  request(url, params, \"GET\", onSuccess, onFailed);\n}\n\n/**\r\n   * function: 封装网络请求\r\n   * @url URL地址\r\n   * @params 请求参数\r\n   * @method 请求方式：GET/POST\r\n   * @onSuccess 成功回调\r\n   * @onFailed  失败回调\r\n   */\n\nfunction request(url, params, method, onSuccess, onFailed) {\n  __f__(\"log\", '请求url：' + url, \" at service.js:51\");\n\n  __f__(\"log\", \"请求头：\", header, \" at service.js:53\");\n  uni.request({\n    url: IPurl + url,\n    data: dealParams(params),\n    method: method,\n    header: header,\n    success: function success(res) {\n      uni.hideLoading();\n      uni.stopPullDownRefresh();\n      __f__(\"log\", '响应：', res.data, \" at service.js:62\");\n\n      // if (res.data) {\n      if (res.data.code == -1) {\n        // if (params.login_type == 1) {\n        // \t//一进来就登录失败\n        // \treturn\n\n        // }\n        // if (params.login_type == 2) {\n        // \t//授权登录失败\n        // \tuni.navigateBack()\n        // \treturn\n\n        // }\n        uni.showToast({\n          icon: 'none',\n          title: '请先授权登录' });\n\n        _index.default.commit('logout');\n        setTimeout(function () {\n          uni.navigateTo({\n            url: './pages/login/login?haslogin=false' });\n\n        }, 1000);\n        return;\n\n      }\n\n      /** start 根据需求 接口的返回状态码进行处理 */\n      onSuccess(res);\n      /** end 处理结束*/\n      // }\n    },\n    fail: function fail(error) {\n\n      uni.hideLoading();\n      uni.stopPullDownRefresh();\n      onFailed(error); //failure for other reasons\n    } });\n\n}\n\n/**\r\n   * function: 根据需求处理请求参数：添加固定参数配置等\r\n   * @params 请求参数\r\n   */\nfunction dealParams(params) {\n  __f__(\"log\", \"请求参数:\", params, \" at service.js:110\");\n  return params;\n}\n\n\n\nvar getUsers = function getUsers() {\n  var ret = '';\n  ret = uni.getStorageSync(USERS_KEY);\n  if (!ret) {\n    ret = '[]';\n  }\n  return JSON.parse(ret);\n};\n\nvar addUser = function addUser(userInfo) {\n  var users = getUsers();\n  users.push({\n    account: userInfo.account,\n    password: userInfo.password });\n\n  uni.setStorageSync(USERS_KEY, JSON.stringify(users));\n};\n\nvar gologin = function gologin() {\n  uni.navigateTo({\n    url: '/pages/login_index/login_index' });\n\n};\n\nvar jump = function jump(e) {\n  // console.log(e.currentTarget.dataset.type)\n  var datas = e.currentTarget.dataset;\n  __f__(\"log\", datas.login == true, \" at service.js:143\");\n\n  if (datas.login == true) {\n    if (!datas.haslogin) {\n      uni.navigateTo({\n        url: '../login/login' });\n\n      return;\n    }\n  }\n  if (datas.type == 'sp') {\n    __f__(\"log\", datas.spurl, \" at service.js:154\");\n    _index.default.commit('spurl_fuc', datas.spurl);\n    uni.navigateTo({\n      url: datas.url });\n\n    return;\n  }\n  if (datas.type == 2) {\n    uni.switchTab({\n      url: datas.url });\n\n  } else if (datas.type == 3) {\n    uni.redirectTo({\n      url: datas.url });\n\n  } else {\n    uni.navigateTo({\n      url: datas.url });\n\n  }\n};\nvar pveimg = function pveimg(e) {\n  var current = e.currentTarget.dataset.src;\n  var urls = e.currentTarget.dataset.array;\n\n  var urls1 = [];\n  if (urls) {\n    urls1 = urls;\n\n  } else {\n    urls1[0] = current;\n  }\n  // console.log(urls1)\n  uni.previewImage({\n    current: current, // 当前显示图片的http链接\n    urls: urls1 // 需要预览的图片http链接列表\n  });\n\n};\nvar call = function call(e) {\n  __f__(\"log\", e, \" at service.js:194\");\n  // return\n  if (e.currentTarget.dataset.tel) {\n    // wx.makePhoneCall({\n    // \tphoneNumber: e.currentTarget.dataset.tel+''\n    // })\n    uni.showModal({\n      title: '提示',\n      content: '是否拨打' + e.currentTarget.dataset.tel + '?',\n      success: function success(res) {\n        if (res.confirm) {\n          wx.makePhoneCall({\n            phoneNumber: e.currentTarget.dataset.tel + '' });\n\n          __f__(\"log\", '用户点击确定', \" at service.js:208\");\n        } else if (res.cancel) {\n          __f__(\"log\", '用户点击取消', \" at service.js:210\");\n        }\n      } });\n\n  }\n};\n\nvar wxlogin = function wxlogin(num) {\n  var that = this;\n  // 获取用户信息\n  if (num == 1) {\n    uni.showLoading({\n      title: '正在登录',\n      mask: true });\n\n  }\n  uni.getSetting({\n    success: function success(res) {\n      __f__(\"log\", res, \" at service.js:228\");\n      if (res.authSetting['scope.userInfo'] == true) {\n        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框\n        __f__(\"log\", '已经授权', \" at service.js:231\");\n        uni.getUserInfo({\n          success: function success(res) {\n            var userInfo = res.userInfo;\n            __f__(\"log\", userInfo, \" at service.js:235\");\n            uni.setStorageSync('userInfo', res.userInfo);\n            if (!userInfo) {\n\n            } else {\n              uni.login({\n                success: function success(res) {\n\n                  // 发送 res.code 到后台换取 openId, sessionKey, unionId\n                  var uinfo = userInfo;\n                  var data = {\n                    code: res.code,\n                    nickname: uinfo.nickName,\n                    cover: uinfo.avatarUrl };\n\n                  var rcode = res.code;\n                  __f__(\"log\", res.code, \" at service.js:251\");\n                  uni.request({\n                    url: IPurl + 'user/login',\n                    data: data,\n                    header: {\n                      'content-type': 'application/x-www-form-urlencoded' },\n\n                    dataType: 'json',\n                    method: 'POST',\n                    success: function success(res) {\n                      uni.hideLoading();\n                      __f__(\"log\", res.data, \" at service.js:262\");\n                      if (res.data.code == 1) {\n                        __f__(\"log\", '登录成功', \" at service.js:264\");\n                        __f__(\"log\", res.data, \" at service.js:265\");\n                        uni.setStorageSync('token', res.data.data.token);\n                        //获取手机号\n                        /*\r\n                        if(!res.data.data.phone){\r\n                        \tif(num==1){\r\n                        \t\tuni.redirectTo({\r\n                        \t\t\turl:'/pages/login_tel/login_tel'\r\n                        \t\t})\r\n                        \t}\r\n                        \treturn\r\n                        }*/\n                        _index.default.commit('logindata', res.data.data);\n                        _index.default.commit('login', res.data.data.nickname);\n\n                        uni.setStorageSync('loginmsg', res.data.data);\n                        //0 商家端  1 用户端  2智能安装端\n                        __f__(\"log\", 'store.xcx_status', \" at service.js:282\");\n                        __f__(\"log\", _index.default.state.xcx_status, \" at service.js:283\");\n                        if (num == 1) {\n                          __f__(\"log\", res.data.data.is_engineer, \" at service.js:285\");\n                          if (res.data.data.is_owner == 1) {\n                            _index.default.commit('set_xcx', 1);\n                            return;\n                          }\n                          if (res.data.data.is_engineer == 1) {\n                            _index.default.commit('set_xcx', 2);\n                            return;\n                          }\n                          if (res.data.data.is_seller == 1) {\n                            _index.default.commit('set_xcx', 0);\n                          }\n                        }\n                        // im login\n\n\n\n                        if (num == 1) {\n                          uni.showToast({\n                            icon: 'none',\n                            title: '登录成功' });\n\n                          setTimeout(function () {\n                            _event.default.trigger({\n                              type: 'test',\n                              page: '/pages/index/index',\n                              //obj和test是举的例子，随意啥都行，这个传过去在on中的args中都可以获取到\n                              obj: {},\n\n\n                              test: {\n                                'loginmsg': res.data.data },\n\n                              success: function success(data) {\n                                //data为on中返回的数据\n                              } });\n\n                          }, 1000);\n                          setTimeout(function () {\n                            uni.navigateBack();\n                          }, 1500);\n                        } else {\n                          _event.default.trigger({\n                            type: 'test',\n                            page: '/pages/index/index',\n                            //obj和test是举的例子，随意啥都行，这个传过去在on中的args中都可以获取到\n                            obj: {},\n\n\n                            test: {\n                              'loginmsg': res.data.data },\n\n                            success: function success(data) {\n                              //data为on中返回的数据\n                            } });\n\n                        }\n                      } else {\n                        uni.removeStorageSync('userInfo');\n                        uni.removeStorageSync('token');\n                        if (res.msg) {\n                          uni.showToast({\n                            icon: 'none',\n                            title: res.msg });\n\n                        } else {\n                          uni.showToast({\n                            icon: 'none',\n                            title: '登录失败' });\n\n                        }\n                      }\n\n                    },\n                    fail: function fail() {\n                      uni.hideLoading();\n                      uni.showToast({\n                        icon: 'none',\n                        title: '登录失败' });\n\n                    } });\n\n                } });\n\n            }\n          } });\n\n\n      } else {\n        uni.hideLoading();\n      }\n    } });\n\n};\n\nvar setUsermsg = function setUsermsg(data) {\n  var jkurl = '/user/amendInfo';\n\n  post(jkurl, data,\n  function (res) {\n\n    // if (res.data.code == 1) {\n    if (res.data.code == 1) {\n      var datas = res.data.data;\n      // console.log(typeof datas)\n\n      if (typeof datas == 'string') {\n        datas = JSON.parse(datas);\n      }\n      wxlogin();\n      uni.showToast({\n        title: '操作成功' });\n\n\n    } else {\n      if (res.data.msg) {\n        uni.showToast({\n          icon: 'none',\n          title: res.data.msg });\n\n      } else {\n        uni.showToast({\n          icon: 'none',\n          title: '操作失败' });\n\n      }\n    }\n  },\n  function (err) {\n    that.btnkg = 0;\n\n    uni.showToast({\n      icon: 'none',\n      title: '获取数据失败' });\n\n\n  });\n\n};\n\n\nvar wx_upload = function wx_upload(tximg) {\n  return new Promise(function (resolve, reject) {\n    uni.showLoading({\n      mask: true,\n      title: '正在上传' });\n\n    uni.uploadFile({\n      url: IPurl + 'user/upload_img',\n      filePath: tximg,\n      name: 'img',\n      formData: {\n        token: uni.getStorageSync('token') },\n\n      // success: (uploadFileRes) => {\n      // \tconsole.log(uploadFileRes.data);\n      // \tvar ndata = JSON.parse(uploadFileRes.data)\n      // \tresolve(uploadFileRes)\n      // },\n      complete: function complete(res) {\n        uni.hideLoading();\n        uni.stopPullDownRefresh(); //慎用hideLoading,会关闭wx.showToast弹窗\n        // console.log(`耗时${Date.now() - timeStart}`);\n        __f__(\"log\", res, \" at service.js:448\");\n        if (res.statusCode == 200) {//请求成功\n          var ndata = JSON.parse(res.data);\n          if (ndata.code == -1) {\n            _index.default.commit('logout');\n            uni.navigateTo({\n              url: '/pages/login/login' });\n\n            return;\n          } else if (ndata.code == 0) {\n            if (ndata.msg) {\n\n              uni.showToast({\n                icon: 'none',\n                title: ndata.msg });\n\n            } else {\n\n              uni.showToast({\n                icon: 'none',\n                title: '操作失败' });\n\n            }\n          }\n          resolve(ndata);\n        } else {\n          reject(res);\n        }\n      } });\n\n  });\n\n};\n\n\n\n\n\n// 配置接口请求的公共方法\nvar http = function http() {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$url = _ref.url,url = _ref$url === void 0 ? '' : _ref$url,_ref$param = _ref.param,param = _ref$param === void 0 ? {} : _ref$param,_ref$method = _ref.method,method = _ref$method === void 0 ? '' : _ref$method,_ref$header = _ref.header,header = _ref$header === void 0 ? { 'content-type': 'application/x-www-form-urlencoded' } : _ref$header;\n\n  var timeStart = Date.now();\n  return new Promise(function (resolve, reject) {\n    __f__(\"log\", '请求url：' + getUrl(url), \" at service.js:491\");\n\n    __f__(\"log\", \"请求头：\", header, \" at service.js:493\");\n    __f__(\"log\", \"param：\", param, \" at service.js:494\");\n    uni.request({\n      url: getUrl(url),\n      data: param,\n      method: method,\n      header: header,\n      complete: function complete(res) {\n        uni.hideLoading();\n        uni.stopPullDownRefresh(); //慎用hideLoading,会关闭wx.showToast弹窗\n        __f__(\"log\", \"\\u8017\\u65F6\".concat(Date.now() - timeStart), \" at service.js:503\");\n        __f__(\"log\", res, \" at service.js:504\");\n        if (res.statusCode == 200) {//请求成功\n          __f__(\"log\", res, \" at service.js:506\");\n          if (res.data.code == -1) {\n            _index.default.commit('logout');\n            uni.navigateTo({\n              url: '/pages/login/login' });\n\n            return;\n          } else if (res.data.code == 0 && res.msg == '请先登录账号~') {\n            uni.navigateTo({\n              url: '/pages/login/login' });\n\n            return;\n          } else if (res.data.code == 0) {\n            if (res.data.msg) {\n\n              uni.showToast({\n                icon: 'none',\n                title: res.data.msg });\n\n            } else {\n\n              uni.showToast({\n                icon: 'none',\n                title: '操作失败' });\n\n            }\n          }\n          resolve(res.data);\n        } else {\n          reject(res);\n        }\n      } });\n\n  });\n};\n// 获取url\nvar getUrl = function getUrl(url) {\n  if (!url) {\n    return url;\n  }\n  if (url.slice(0, 1) == \"/\") {\n    __f__(\"log\", true, \" at service.js:547\");\n    url = url.substr(1);\n  }\n  if (url.indexOf('://') == -1) {\n    url = IPurl + url;\n  }\n  return url;\n};\n//暴露出去调用的方法\n\n\n// get方法\nvar P_get = function P_get(url) {var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  if (!param.load_mode) {\n    wx.showLoading({\n      title: '请求中，请耐心等待...' });\n\n  }\n  return http({\n    url: url,\n    param: param,\n    method: 'GET' });\n\n};\n\nvar P_post = function P_post(url) {var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return http({\n    url: url,\n    param: param,\n    method: \"POST\" });\n\n};\n\nvar P_put = function P_put(url) {var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return http({\n    url: url,\n    param: param,\n    method: 'put' });\n\n};\n\nvar P_delete = function P_delete(url) {var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return http({\n    url: url,\n    param: param,\n    method: 'put' });\n\n};\n// // 单个请求\n// service.P_get('/cate/list').then(res => {\n// \tconsole.log(res)\n// }).catch(e => {\n// \tconsole.log(e)\n// })\n\n// // 一个页面多个请求\n// Promise.all([\n//   service.P_get('/cate/list'),\n//   service.P_get(`detail/${id}`)\n// ]).then(result => {\n//   console.log(result)\n// }).catch(e => {\n//   console.log(e)\n// })\nvar getimg = function getimg(img) {\n  return img;\n\n\n\n  if (!img) return;\n  // console.log(imgurl+img)\n  if (img.indexOf('://') == -1) {\n    img = imgurl + img;\n  }\n  return img;\n};\nvar getimgarr = function getimgarr(imgs, type) {\n  if (!imgs) return;\n  if (!type) {\n    type = ',';\n  }\n  imgs = imgs.split(type);\n  // console.log(imgurl+img)\n  var newimgs = [];\n  for (var i = 0; i < imgs.length; i++) {\n    var img = imgs[i];\n    if (img.indexOf('://') == -1) {\n      img = imgurl + img;\n    }\n    newimgs.push(img);\n  }\n  // console.log(newimgs)\n  return newimgs;\n};\nvar gettime = function gettime(mj) {\n  if (!mj) {\n    return {};\n  }\n  // // console.log(mj.indexOf('今天')!=-1)\n  // if(mj.indexOf('今天')!=-1){\n  // \treturn {\n  // \t\ttype:2,\n\n  // \t\ttime:mj\n  // \t}\n  // }\n  // mj = mj.replace(/-/g,'/')\n  var ntime = new Date(mj * 1000);\n  // console.log(ntime)\n  var n_year = ntime.getFullYear();\n  var n_month = ntime.getMonth() + 1;\n  var n_date = ntime.getDate();\n  var n_hour = ntime.getHours();\n  var n_minute = ntime.getMinutes();\n\n  var time = new Date();\n  var year = time.getFullYear();\n  var month = time.getMonth() + 1;\n  var date = time.getDate();\n  var hour = time.getHours();\n  var minute = time.getMinutes();\n  // n_month=n_month<10? '0'+n_month:n_month\n  n_date = n_date < 10 ? '0' + n_date : n_date;\n  n_hour = n_hour < 10 ? '0' + n_hour : n_hour;\n  n_minute = n_minute < 10 ? '0' + n_minute : n_minute;\n  if (n_year == year) {\n\n    return {\n      type: 1,\n      year: n_year,\n      month: n_month,\n      date: n_date,\n      hour: n_hour,\n      minute: n_minute,\n      time: '今天 ' + n_hour + ':' + n_minute };\n\n  } else {\n\n    return {\n      type: 2,\n      year: n_year,\n      month: n_month,\n      date: n_date,\n      hour: n_hour,\n      minute: n_minute,\n      time: n_year + '-' + n_month + '-' + n_date };\n\n  }\n};\n\n\nvar get_fwb = function get_fwb(str) {\n  if (!str) {\n    return;\n  }\n  str = str // .replace(/<p([\\s\\w\"=\\/\\.:;]+)((?:(style=\"[^\"]+\")))/ig, '<p')\n  .replace(/<p([\\s\\w\"-=\\/\\.:;]+)((?:(class=\"[^\"]+\")))/ig, '<p $1').\n  replace(/<p([\\s\\w\"-=\\/\\.:;]+)/ig, '<p$1 class=\"xcx_fwb_p\"')\n  // .replace(/<div([\\s\\w\"=\\/\\.:;]+)((?:(style=\"[^\"]+\")))/ig, '<div')\n  .replace(/<div([\\s\\w\"-=\\/\\.:;]+)((?:(class=\"[^\"]+\")))/ig, '<div $1').\n  replace(/<div([\\s\\w\"-=\\/\\.:;]+)/ig, '<div$1 class=\"xcx_fwb_div\"')\n\n  // .replace(/<img([\\s\\w\"-=\\/\\.:;]+)((?:(height=\"[^\"]+\")))/ig, '<img $1')\n  // .replace(/<img([\\s\\w\"-=\\/\\.:;]+)((?:(width=\"[^\"]+\")))/ig, '<img $1')\n  // .replace(/<img([\\s\\w\"-=\\/\\.:;]+)((?:(style=\"[^\"]+\")))/ig, '<img $1')\n  .replace(/<img([\\s\\w\"-=\\/\\.:;]+)((?:(alt=\"[^\"]+\")))/ig, '<img $1').\n  replace(/<img([\\s\\w\"-=\\/\\.:;]+)((?:(class=\"[^\"]+\")))/ig, '<img $1').\n  replace(/<img([\\s\\w\"-=\\/\\.:;]+)/ig, '<img$1 class=\"xcx_fwb_img\"');\n  return str;\n};var _default =\n{\n  getUsers: getUsers,\n  addUser: addUser,\n  get: get,\n  post: post,\n  IPurl: IPurl,\n  map_key: map_key,\n  imgurl: imgurl,\n  gologin: gologin,\n  jump: jump,\n  call: call,\n  wxlogin: wxlogin,\n  setUsermsg: setUsermsg,\n  P_get: P_get,\n  P_post: P_post,\n  P_put: P_put,\n  P_delete: P_delete,\n  gettime: gettime,\n  getimg: getimg,\n  getimgarr: getimgarr,\n  pveimg: pveimg,\n  get_fwb: get_fwb,\n  wx_upload: wx_upload };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc2VydmljZS5qcyJdLCJuYW1lcyI6WyJVU0VSU19LRVkiLCJTVEFURV9LRVkiLCJtYXBfa2V5IiwiaW1ndXJsIiwiSVB1cmwiLCJoZWFkZXIiLCJwb3N0IiwidXJsIiwicGFyYW1zIiwib25TdWNjZXNzIiwib25GYWlsZWQiLCJyZXF1ZXN0IiwiZ2V0IiwibWV0aG9kIiwidW5pIiwiZGF0YSIsImRlYWxQYXJhbXMiLCJzdWNjZXNzIiwicmVzIiwiaGlkZUxvYWRpbmciLCJzdG9wUHVsbERvd25SZWZyZXNoIiwiY29kZSIsInNob3dUb2FzdCIsImljb24iLCJ0aXRsZSIsInN0b3JlIiwiY29tbWl0Iiwic2V0VGltZW91dCIsIm5hdmlnYXRlVG8iLCJmYWlsIiwiZXJyb3IiLCJnZXRVc2VycyIsInJldCIsImdldFN0b3JhZ2VTeW5jIiwiSlNPTiIsInBhcnNlIiwiYWRkVXNlciIsInVzZXJJbmZvIiwidXNlcnMiLCJwdXNoIiwiYWNjb3VudCIsInBhc3N3b3JkIiwic2V0U3RvcmFnZVN5bmMiLCJzdHJpbmdpZnkiLCJnb2xvZ2luIiwianVtcCIsImUiLCJkYXRhcyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibG9naW4iLCJoYXNsb2dpbiIsInR5cGUiLCJzcHVybCIsInN3aXRjaFRhYiIsInJlZGlyZWN0VG8iLCJwdmVpbWciLCJjdXJyZW50Iiwic3JjIiwidXJscyIsImFycmF5IiwidXJsczEiLCJwcmV2aWV3SW1hZ2UiLCJjYWxsIiwidGVsIiwic2hvd01vZGFsIiwiY29udGVudCIsImNvbmZpcm0iLCJ3eCIsIm1ha2VQaG9uZUNhbGwiLCJwaG9uZU51bWJlciIsImNhbmNlbCIsInd4bG9naW4iLCJudW0iLCJ0aGF0Iiwic2hvd0xvYWRpbmciLCJtYXNrIiwiZ2V0U2V0dGluZyIsImF1dGhTZXR0aW5nIiwiZ2V0VXNlckluZm8iLCJ1aW5mbyIsIm5pY2tuYW1lIiwibmlja05hbWUiLCJjb3ZlciIsImF2YXRhclVybCIsInJjb2RlIiwiZGF0YVR5cGUiLCJ0b2tlbiIsInN0YXRlIiwieGN4X3N0YXR1cyIsImlzX2VuZ2luZWVyIiwiaXNfb3duZXIiLCJpc19zZWxsZXIiLCJldmVudCIsInRyaWdnZXIiLCJwYWdlIiwib2JqIiwidGVzdCIsIm5hdmlnYXRlQmFjayIsInJlbW92ZVN0b3JhZ2VTeW5jIiwibXNnIiwic2V0VXNlcm1zZyIsImprdXJsIiwiZXJyIiwiYnRua2ciLCJ3eF91cGxvYWQiLCJ0eGltZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidXBsb2FkRmlsZSIsImZpbGVQYXRoIiwibmFtZSIsImZvcm1EYXRhIiwiY29tcGxldGUiLCJzdGF0dXNDb2RlIiwibmRhdGEiLCJodHRwIiwicGFyYW0iLCJ0aW1lU3RhcnQiLCJEYXRlIiwibm93IiwiZ2V0VXJsIiwic2xpY2UiLCJzdWJzdHIiLCJpbmRleE9mIiwiUF9nZXQiLCJsb2FkX21vZGUiLCJQX3Bvc3QiLCJQX3B1dCIsIlBfZGVsZXRlIiwiZ2V0aW1nIiwiaW1nIiwiZ2V0aW1nYXJyIiwiaW1ncyIsInNwbGl0IiwibmV3aW1ncyIsImkiLCJsZW5ndGgiLCJnZXR0aW1lIiwibWoiLCJudGltZSIsIm5feWVhciIsImdldEZ1bGxZZWFyIiwibl9tb250aCIsImdldE1vbnRoIiwibl9kYXRlIiwiZ2V0RGF0ZSIsIm5faG91ciIsImdldEhvdXJzIiwibl9taW51dGUiLCJnZXRNaW51dGVzIiwidGltZSIsInllYXIiLCJtb250aCIsImRhdGUiLCJob3VyIiwibWludXRlIiwiZ2V0X2Z3YiIsInN0ciIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJvSUFBQTtBQUNBO0FBQ0Esc0Y7QUFDQTtBQUNBLElBQU1BLFNBQVMsR0FBRyxXQUFsQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxXQUFsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1DLE9BQU8sR0FBQyxxQ0FBZDtBQUNBLElBQU1DLE1BQU0sR0FBQyxzQ0FBYjtBQUNBLElBQU1DLEtBQUssR0FBQ0QsTUFBTSxHQUFDLE1B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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlL2luZGV4LmpzJ1xyXG5pbXBvcnQgZXZlbnQgZnJvbSAnLi9jb21tb24vZXZlbnQuanMnXHJcbi8vIOeuoeeQhui0puWPt+S/oeaBr1xyXG5jb25zdCBVU0VSU19LRVkgPSAnVVNFUlNfS0VZJztcclxuY29uc3QgU1RBVEVfS0VZID0gJ1NUQVRFX0tFWSc7XHJcbi8vIGNvbnN0IElQdXJsID0gJ2h0dHBzOi8vZGF0aXhjeC5jb20uYWEuODAwMTIzNDU2LnRvcC9hcGkvJztcclxuLy8gY29uc3QgaW1ndXJsID0gJ2h0dHBzOi8vZGF0aXhjeC5jb20uYWEuODAwMTIzNDU2LnRvcC8nO1xyXG4vLyBjb25zdCBpbWd1cmwgPSAnaHR0cDovLzE5Mi4xNjguMTI5LjI0Ni8nO1xyXG5jb25zdCBtYXBfa2V5PVwiN0ZFQlotV0xXSzItUE1HVUUtQzRCRlQtRUtYQjYtQkZGTlJcIlxyXG5jb25zdCBpbWd1cmw9XCJodHRwczovL3dhbnV6bi5jb20uYWEuODAwMTIzNDU2LnRvcC9cIlxyXG5jb25zdCBJUHVybD1pbWd1cmwrJ2FwaS8nXHJcbi8vIGNvbnN0IElQdXJsPSdodHRwOi8vMTkyLjE2OC4xMjkuMjQ2L2FwaS8nXHJcbi8vIGNvbnN0IGFkbWludXJsPSdodHRwczovL2RhdGl4Y3guY29tLmFhLjgwMDEyMzQ1Ni50b3AvYWRtaW4vJztcclxuLy8gYXBwaWQ6d3hmNjFlY2Q0NzJhYmU0MWNiICDmraPlvI9cclxuLy8gYXBwaWQ6d3g0OWE1NjBmN2ZlYWMwZmViICAgY2pcclxuLyoqXHJcbiAqIOivt+axguWktFxyXG4gKi9cclxudmFyIGhlYWRlciA9IHtcclxuXHQnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDkvpvlpJbpg6hwb3N06K+35rGC6LCD55SoICBcclxuICovXHJcbmZ1bmN0aW9uIHBvc3QodXJsLCBwYXJhbXMsIG9uU3VjY2Vzcywgb25GYWlsZWQpIHtcclxuXHRjb25zb2xlLmxvZyhcIuivt+axguaWueW8j++8mlwiLCBcIlBPU1RcIilcclxuXHRyZXF1ZXN0KHVybCwgcGFyYW1zLCBcIlBPU1RcIiwgb25TdWNjZXNzLCBvbkZhaWxlZCk7XHJcblxyXG59XHJcblxyXG4vKipcclxuICog5L6b5aSW6YOoZ2V06K+35rGC6LCD55SoXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXQodXJsLCBwYXJhbXMsIG9uU3VjY2Vzcywgb25GYWlsZWQpIHtcclxuXHRjb25zb2xlLmxvZyhcIuivt+axguaWueW8j++8mlwiLCBcIkdFVFwiKVxyXG5cdHJlcXVlc3QodXJsLCBwYXJhbXMsIFwiR0VUXCIsIG9uU3VjY2Vzcywgb25GYWlsZWQpO1xyXG59XHJcblxyXG4vKipcclxuICogZnVuY3Rpb246IOWwgeijhee9kee7nOivt+axglxyXG4gKiBAdXJsIFVSTOWcsOWdgFxyXG4gKiBAcGFyYW1zIOivt+axguWPguaVsFxyXG4gKiBAbWV0aG9kIOivt+axguaWueW8j++8mkdFVC9QT1NUXHJcbiAqIEBvblN1Y2Nlc3Mg5oiQ5Yqf5Zue6LCDXHJcbiAqIEBvbkZhaWxlZCAg5aSx6LSl5Zue6LCDXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gcmVxdWVzdCh1cmwsIHBhcmFtcywgbWV0aG9kLCBvblN1Y2Nlc3MsIG9uRmFpbGVkKSB7XHJcblx0Y29uc29sZS5sb2coJ+ivt+axgnVybO+8micgKyB1cmwpO1xyXG5cclxuXHRjb25zb2xlLmxvZyhcIuivt+axguWktO+8mlwiLCBoZWFkZXIpXHJcblx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBJUHVybCArIHVybCxcclxuXHRcdGRhdGE6IGRlYWxQYXJhbXMocGFyYW1zKSxcclxuXHRcdG1ldGhvZDogbWV0aG9kLFxyXG5cdFx0aGVhZGVyOiBoZWFkZXIsXHJcblx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdHVuaS5zdG9wUHVsbERvd25SZWZyZXNoKCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCflk43lupTvvJonLCByZXMuZGF0YSk7XHJcblxyXG5cdFx0XHQvLyBpZiAocmVzLmRhdGEpIHtcclxuXHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gLTEpIHtcclxuXHRcdFx0XHQvLyBpZiAocGFyYW1zLmxvZ2luX3R5cGUgPT0gMSkge1xyXG5cdFx0XHRcdC8vIFx0Ly/kuIDov5vmnaXlsLHnmbvlvZXlpLHotKVcclxuXHRcdFx0XHQvLyBcdHJldHVyblxyXG5cclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0Ly8gaWYgKHBhcmFtcy5sb2dpbl90eXBlID09IDIpIHtcclxuXHRcdFx0XHQvLyBcdC8v5o6I5p2D55m75b2V5aSx6LSlXHJcblx0XHRcdFx0Ly8gXHR1bmkubmF2aWdhdGVCYWNrKClcclxuXHRcdFx0XHQvLyBcdHJldHVyblxyXG5cclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHR0aXRsZTogJ+ivt+WFiOaOiOadg+eZu+W9lSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHN0b3JlLmNvbW1pdCgnbG9nb3V0JylcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpe1xyXG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHR1cmw6ICcuL3BhZ2VzL2xvZ2luL2xvZ2luP2hhc2xvZ2luPWZhbHNlJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9LDEwMDApXHJcblx0XHRcdFx0cmV0dXJuXHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKiogc3RhcnQg5qC55o2u6ZyA5rGCIOaOpeWPo+eahOi/lOWbnueKtuaAgeeggei/m+ihjOWkhOeQhiAqL1xyXG5cdFx0XHRvblN1Y2Nlc3MocmVzKTtcclxuXHRcdFx0LyoqIGVuZCDlpITnkIbnu5PmnZ8qL1xyXG5cdFx0XHQvLyB9XHJcblx0XHR9LFxyXG5cdFx0ZmFpbDogZnVuY3Rpb24oZXJyb3IpIHtcclxuXHJcblx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHR1bmkuc3RvcFB1bGxEb3duUmVmcmVzaCgpO1xyXG5cdFx0XHRvbkZhaWxlZChlcnJvcik7IC8vZmFpbHVyZSBmb3Igb3RoZXIgcmVhc29uc1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBmdW5jdGlvbjog5qC55o2u6ZyA5rGC5aSE55CG6K+35rGC5Y+C5pWw77ya5re75Yqg5Zu65a6a5Y+C5pWw6YWN572u562JXHJcbiAqIEBwYXJhbXMg6K+35rGC5Y+C5pWwXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWFsUGFyYW1zKHBhcmFtcykge1xyXG5cdGNvbnNvbGUubG9nKFwi6K+35rGC5Y+C5pWwOlwiLCBwYXJhbXMpXHJcblx0cmV0dXJuIHBhcmFtcztcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBnZXRVc2VycyA9IGZ1bmN0aW9uKCkge1xyXG5cdGxldCByZXQgPSAnJztcclxuXHRyZXQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVVNFUlNfS0VZKTtcclxuXHRpZiAoIXJldCkge1xyXG5cdFx0cmV0ID0gJ1tdJztcclxuXHR9XHJcblx0cmV0dXJuIEpTT04ucGFyc2UocmV0KTtcclxufVxyXG5cclxuY29uc3QgYWRkVXNlciA9IGZ1bmN0aW9uKHVzZXJJbmZvKSB7XHJcblx0bGV0IHVzZXJzID0gZ2V0VXNlcnMoKTtcclxuXHR1c2Vycy5wdXNoKHtcclxuXHRcdGFjY291bnQ6IHVzZXJJbmZvLmFjY291bnQsXHJcblx0XHRwYXNzd29yZDogdXNlckluZm8ucGFzc3dvcmRcclxuXHR9KTtcclxuXHR1bmkuc2V0U3RvcmFnZVN5bmMoVVNFUlNfS0VZLCBKU09OLnN0cmluZ2lmeSh1c2VycykpO1xyXG59XHJcblxyXG5jb25zdCBnb2xvZ2luID0gZnVuY3Rpb24oKSB7XHJcblx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0dXJsOiAnL3BhZ2VzL2xvZ2luX2luZGV4L2xvZ2luX2luZGV4J1xyXG5cdH0pXHJcbn1cclxuXHJcbmNvbnN0IGp1bXAgPSBmdW5jdGlvbihlKSB7XHJcblx0Ly8gY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudHlwZSlcclxuXHR2YXIgZGF0YXM9ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuXHRjb25zb2xlLmxvZyhkYXRhcy5sb2dpbj09dHJ1ZSlcclxuXHRcclxuXHRpZihkYXRhcy5sb2dpbj09dHJ1ZSl7XHJcblx0XHRpZighZGF0YXMuaGFzbG9naW4pe1xyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiAnLi4vbG9naW4vbG9naW4nLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0fVxyXG5cdGlmKGRhdGFzLnR5cGU9PSdzcCcpe1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YXMuc3B1cmwpXHJcblx0XHRzdG9yZS5jb21taXQoJ3NwdXJsX2Z1YycsIGRhdGFzLnNwdXJsKVxyXG5cdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHR1cmw6IGRhdGFzLnVybFxyXG5cdFx0fSlcclxuXHRcdHJldHVyblxyXG5cdH1cclxuXHRpZiAoZGF0YXMudHlwZSA9PSAyKSB7XHJcblx0XHR1bmkuc3dpdGNoVGFiKHtcclxuXHRcdFx0dXJsOiBkYXRhcy51cmxcclxuXHRcdH0pXHJcblx0fSBlbHNlIGlmIChkYXRhcy50eXBlID09IDMpIHtcclxuXHRcdHVuaS5yZWRpcmVjdFRvKHtcclxuXHRcdFx0dXJsOiBkYXRhcy51cmxcclxuXHRcdH0pXHJcblx0fSBlbHNlIHtcclxuXHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0dXJsOiBkYXRhcy51cmxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcbmNvbnN0IHB2ZWltZyA9IGZ1bmN0aW9uKGUpIHtcclxuXHR2YXIgY3VycmVudCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnNyY1xyXG5cdHZhciB1cmxzID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYXJyYXlcclxuXHJcblx0bGV0IHVybHMxID0gW11cclxuXHRpZiAodXJscykge1xyXG5cdFx0dXJsczEgPSB1cmxzXHJcblxyXG5cdH0gZWxzZSB7XHJcblx0XHR1cmxzMVswXSA9IGN1cnJlbnRcclxuXHR9XHJcblx0Ly8gY29uc29sZS5sb2codXJsczEpXHJcblx0dW5pLnByZXZpZXdJbWFnZSh7XHJcblx0XHRjdXJyZW50OiBjdXJyZW50LCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lXHJcblx0XHR1cmxzOiB1cmxzMSAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXHJcblx0fSlcclxuXHJcbn1cclxuY29uc3QgY2FsbD0gIGZ1bmN0aW9uIChlKXtcclxuXHRjb25zb2xlLmxvZyhlKVxyXG5cdC8vIHJldHVyblxyXG5cdGlmKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRlbCl7XHJcblx0XHQvLyB3eC5tYWtlUGhvbmVDYWxsKHtcclxuXHRcdC8vIFx0cGhvbmVOdW1iZXI6IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRlbCsnJ1xyXG5cdFx0Ly8gfSlcclxuXHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0ICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuXHRcdCAgICBjb250ZW50OiAn5piv5ZCm5ouo5omTJytlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50ZWwrJz8nLFxyXG5cdFx0ICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuXHRcdCAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0d3gubWFrZVBob25lQ2FsbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRwaG9uZU51bWJlcjogZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGVsKycnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJyk7XHJcblx0XHQgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG5cdFx0ICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpO1xyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgfVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCB3eGxvZ2luPWZ1bmN0aW9uIChudW0pe1xyXG5cdHZhciB0aGF0ID10aGlzXHJcblx0Ly8g6I635Y+W55So5oi35L+h5oGvXHJcblx0aWYgKG51bSA9PSAxKSB7XHJcblx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHR0aXRsZTogJ+ato+WcqOeZu+W9lScsXHJcblx0XHRcdG1hc2s6IHRydWVcclxuXHRcdH0pXHJcblx0fVxyXG5cdHVuaS5nZXRTZXR0aW5nKHtcclxuXHQgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0ICAgY29uc29sZS5sb2cocmVzKVxyXG5cdCAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddPT10cnVlKSB7XHJcblx0ICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensO+8jOS4jeS8muW8ueahhlxyXG5cdCAgICAgIGNvbnNvbGUubG9nKCflt7Lnu4/mjojmnYMnKVxyXG5cdFx0XHRcdHVuaS5nZXRVc2VySW5mbyh7XHJcblx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHR2YXIgdXNlckluZm8gPSByZXMudXNlckluZm9cclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2codXNlckluZm8pXHJcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygndXNlckluZm8nLCByZXMudXNlckluZm8pXHJcblx0XHRcdFx0XHRcdGlmKCF1c2VySW5mbyl7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHQgICAgICAgICAgICB1bmkubG9naW4oe1xyXG5cdCAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHQgICAgICAgICAgICAgICAgLy8g5Y+R6YCBIHJlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcclxuXHQgICAgICAgICAgICAgICAgdmFyIHVpbmZvID0gdXNlckluZm9cclxuXHQgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XHJcblx0ICAgICAgICAgICAgICAgICAgY29kZTogcmVzLmNvZGUsXHJcblx0ICAgICAgICAgICAgICAgICAgbmlja25hbWU6IHVpbmZvLm5pY2tOYW1lLFxyXG5cdCAgICAgICAgICAgICAgICAgIGNvdmVyOiB1aW5mby5hdmF0YXJVcmxcclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICBsZXQgcmNvZGUgPSByZXMuY29kZVxyXG5cdCAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuY29kZSlcclxuXHQgICAgICAgICAgICAgICAgdW5pLnJlcXVlc3Qoe1xyXG5cdCAgICAgICAgICAgICAgICAgIHVybDogSVB1cmwrJ3VzZXIvbG9naW4nLFxyXG5cdCAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcblx0ICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuXHQgICAgICAgICAgICAgICAgICB9LFxyXG5cdCAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcblx0ICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcblx0ICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0ICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuXHQgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09IDEpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eZu+W9leaIkOWKnycpXHJcblx0ICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG5cdCAgICAgICAgICAgICAgICAgICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoJ3Rva2VuJywgcmVzLmRhdGEuZGF0YS50b2tlbilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly/ojrflj5bmiYvmnLrlj7dcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LypcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYoIXJlcy5kYXRhLmRhdGEucGhvbmUpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmKG51bT09MSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkucmVkaXJlY3RUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVybDonL3BhZ2VzL2xvZ2luX3RlbC9sb2dpbl90ZWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0b3JlLmNvbW1pdCgnbG9naW5kYXRhJywgcmVzLmRhdGEuZGF0YSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3RvcmUuY29tbWl0KCdsb2dpbicsIHJlcy5kYXRhLmRhdGEubmlja25hbWUpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoJ2xvZ2lubXNnJywgcmVzLmRhdGEuZGF0YSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8wIOWVhuWutuerryAgMSDnlKjmiLfnq68gIDLmmbrog73lronoo4Xnq69cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ3N0b3JlLnhjeF9zdGF0dXMnKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhzdG9yZS5zdGF0ZS54Y3hfc3RhdHVzKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZihudW09PTEpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEuaXNfZW5naW5lZXIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYocmVzLmRhdGEuZGF0YS5pc19vd25lcj09MSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdG9yZS5jb21taXQoJ3NldF94Y3gnLCAxKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmKHJlcy5kYXRhLmRhdGEuaXNfZW5naW5lZXI9PTEpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3RvcmUuY29tbWl0KCdzZXRfeGN4JywgMilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZihyZXMuZGF0YS5kYXRhLmlzX3NlbGxlcj09MSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdG9yZS5jb21taXQoJ3NldF94Y3gnLCAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBpbSBsb2dpblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZihudW09PTEpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTon55m75b2V5oiQ5YqfJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQudHJpZ2dlcih7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgdHlwZTondGVzdCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgcGFnZTonL3BhZ2VzL2luZGV4L2luZGV4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAvL29iauWSjHRlc3TmmK/kuL7nmoTkvovlrZDvvIzpmo/mhI/llaXpg73ooYzvvIzov5nkuKrkvKDov4fljrvlnKhvbuS4reeahGFyZ3PkuK3pg73lj6/ku6Xojrflj5bliLBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBvYmo6e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICB0ZXN0OntcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdsb2dpbm1zZyc6IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIHN1Y2Nlc3M6ZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIC8vZGF0YeS4um9u5Lit6L+U5Zue55qE5pWw5o2uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSwxMDAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sMTUwMClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQudHJpZ2dlcih7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIHR5cGU6J3Rlc3QnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBwYWdlOicvcGFnZXMvaW5kZXgvaW5kZXgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAvL29iauWSjHRlc3TmmK/kuL7nmoTkvovlrZDvvIzpmo/mhI/llaXpg73ooYzvvIzov5nkuKrkvKDov4fljrvlnKhvbuS4reeahGFyZ3PkuK3pg73lj6/ku6Xojrflj5bliLBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgb2JqOntcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgdGVzdDp7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2xvZ2lubXNnJzogcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBzdWNjZXNzOmZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgLy9kYXRh5Li6b27kuK3ov5Tlm57nmoTmlbDmja5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0ICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ3VzZXJJbmZvJylcclxuXHQgICAgICAgICAgICAgICAgICAgICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCd0b2tlbicpXHJcblx0ICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5tc2cpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgaWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgdGl0bGU6IHJlcy5tc2csXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0aXRsZTogJ+eZu+W9leWksei0pScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdCAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFxyXG5cdCAgICAgICAgICAgICAgICAgIH0sXHJcblx0ICAgICAgICAgICAgICAgICAgZmFpbCgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0ICAgICAgICAgICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+eZu+W9leWksei0pSdcclxuXHQgICAgICAgICAgICAgICAgICAgIH0pXHJcblx0ICAgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICB9KVxyXG5cdCAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdFxyXG5cdCAgICB9ZWxzZXtcclxuXHRcdFx0ICB1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdCAgICB9XHJcblx0ICB9XHJcblx0fSlcclxufVxyXG5cclxuY29uc3Qgc2V0VXNlcm1zZz1mdW5jdGlvbihkYXRhKXtcclxuXHR2YXIgamt1cmw9Jy91c2VyL2FtZW5kSW5mbydcclxuXHRcclxuXHRwb3N0KGprdXJsLCBkYXRhLFxyXG5cdFx0ZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBpZiAocmVzLmRhdGEuY29kZSA9PSAxKSB7XHJcblx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEpIHtcclxuXHRcdFx0XHR2YXIgZGF0YXMgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codHlwZW9mIGRhdGFzKVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0eXBlb2YgZGF0YXMgPT0gJ3N0cmluZycpIHtcclxuXHRcdFx0XHRcdGRhdGFzID0gSlNPTi5wYXJzZShkYXRhcylcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0d3hsb2dpbigpXHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTon5pON5L2c5oiQ5YqfJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKHJlcy5kYXRhLm1zZykge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0dGl0bGU6IHJlcy5kYXRhLm1zZ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmk43kvZzlpLHotKUnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGZ1bmN0aW9uKGVycikge1xyXG5cdFx0XHR0aGF0LmJ0bmtnPTBcclxuXHRcdFx0XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHR0aXRsZTogJ+iOt+WPluaVsOaNruWksei0pSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHJcblx0XHR9XHJcblx0KVxyXG59XHJcblxyXG5cclxuY29uc3Qgd3hfdXBsb2FkPWZ1bmN0aW9uKHR4aW1nKXtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG5cdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0bWFzazp0cnVlLFxyXG5cdFx0XHR0aXRsZTon5q2j5Zyo5LiK5LygJ1xyXG5cdFx0fSlcclxuXHRcdHVuaS51cGxvYWRGaWxlKHtcclxuXHRcdFx0dXJsOiBJUHVybCArICd1c2VyL3VwbG9hZF9pbWcnLCBcclxuXHRcdFx0ZmlsZVBhdGg6IHR4aW1nLFxyXG5cdFx0XHRuYW1lOiAnaW1nJyxcclxuXHRcdFx0Zm9ybURhdGE6IHtcclxuXHRcdFx0XHR0b2tlbjogdW5pLmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIHN1Y2Nlc3M6ICh1cGxvYWRGaWxlUmVzKSA9PiB7XHJcblx0XHRcdC8vIFx0Y29uc29sZS5sb2codXBsb2FkRmlsZVJlcy5kYXRhKTtcclxuXHRcdFx0Ly8gXHR2YXIgbmRhdGEgPSBKU09OLnBhcnNlKHVwbG9hZEZpbGVSZXMuZGF0YSlcclxuXHRcdFx0Ly8gXHRyZXNvbHZlKHVwbG9hZEZpbGVSZXMpXHJcblx0XHRcdC8vIH0sXHJcblx0XHRcdGNvbXBsZXRlOihyZXMpPT57XHJcblx0XHRcdCAgICB1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0ICAgIHVuaS5zdG9wUHVsbERvd25SZWZyZXNoKCk7Ly/mhY7nlKhoaWRlTG9hZGluZyzkvJrlhbPpl613eC5zaG93VG9hc3TlvLnnqpdcclxuXHRcdFx0ICAgIC8vIGNvbnNvbGUubG9nKGDogJfml7Yke0RhdGUubm93KCkgLSB0aW1lU3RhcnR9YCk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdCAgICBpZihyZXMuc3RhdHVzQ29kZSA9PTIwMCl7Ly/or7fmsYLmiJDlip9cclxuXHRcdFx0XHRcdFx0dmFyIG5kYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSlcclxuXHRcdFx0XHRcdFx0aWYobmRhdGEuY29kZT09LTEpe1xyXG5cdFx0XHRcdFx0XHRcdHN0b3JlLmNvbW1pdCgnbG9nb3V0JylcclxuXHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmw6Jy9wYWdlcy9sb2dpbi9sb2dpbidcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0XHR9ZWxzZSBpZihuZGF0YS5jb2RlPT0wKXtcclxuXHRcdFx0XHRcdFx0XHRpZihuZGF0YS5tc2cpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOm5kYXRhLm1zZ1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTon5pON5L2c5aSx6LSlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0ICAgICAgcmVzb2x2ZShuZGF0YSlcclxuXHRcdFx0ICAgIH1lbHNle1xyXG5cdFx0XHQgICAgICByZWplY3QocmVzKTtcclxuXHRcdFx0ICAgIH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSlcclxuXHRcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIOmFjee9ruaOpeWPo+ivt+axgueahOWFrOWFseaWueazlVxyXG5jb25zdCBodHRwID0oe3VybCA9JycscGFyYW0gPXt9LG1ldGhvZD0nJyxoZWFkZXI9eydjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ319PXt9KSA9PntcclxuICBcclxuICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG5cdFx0Y29uc29sZS5sb2coJ+ivt+axgnVybO+8micgKyBnZXRVcmwodXJsKSk7XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKFwi6K+35rGC5aS077yaXCIsIGhlYWRlcilcclxuXHRcdGNvbnNvbGUubG9nKFwicGFyYW3vvJpcIiwgcGFyYW0pXHJcbiAgICB1bmkucmVxdWVzdCh7XHJcbiAgICAgIHVybDogZ2V0VXJsKHVybCksXHJcbiAgICAgIGRhdGE6cGFyYW0sXHJcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICBoZWFkZXI6aGVhZGVyLFxyXG4gICAgICBjb21wbGV0ZToocmVzKT0+e1xyXG4gICAgICAgICAgdW5pLmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICB1bmkuc3RvcFB1bGxEb3duUmVmcmVzaCgpOy8v5oWO55SoaGlkZUxvYWRpbmcs5Lya5YWz6Zetd3guc2hvd1RvYXN05by556qXXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhg6ICX5pe2JHtEYXRlLm5vdygpIC0gdGltZVN0YXJ0fWApO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgaWYocmVzLnN0YXR1c0NvZGUgPT0yMDApey8v6K+35rGC5oiQ5YqfXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0XHRcdGlmKHJlcy5kYXRhLmNvZGU9PS0xKXtcclxuXHRcdFx0XHRcdFx0XHRzdG9yZS5jb21taXQoJ2xvZ291dCcpXHJcblx0XHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsOicvcGFnZXMvbG9naW4vbG9naW4nXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdFx0fWVsc2UgaWYocmVzLmRhdGEuY29kZT09MCYmcmVzLm1zZz09J+ivt+WFiOeZu+W9lei0puWPt34nKXtcclxuXHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmw6Jy9wYWdlcy9sb2dpbi9sb2dpbidcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0XHR9ZWxzZSBpZihyZXMuZGF0YS5jb2RlPT0wKXtcclxuXHRcdFx0XHRcdFx0XHRpZihyZXMuZGF0YS5tc2cpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOnJlcy5kYXRhLm1zZ1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTon5pON5L2c5aSx6LSlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZWplY3QocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcbi8vIOiOt+WPlnVybFxyXG5jb25zdCBnZXRVcmwgPSAodXJsKT0+e1xyXG5cdGlmKCF1cmwpe1xyXG5cdFx0cmV0dXJuIHVybFxyXG5cdH1cclxuXHRpZih1cmwuc2xpY2UoMCwxKSA9PSBcIi9cIil7XHJcblx0ICAgIGNvbnNvbGUubG9nKHRydWUpO1xyXG5cdFx0XHR1cmwgPSB1cmwuc3Vic3RyKDEpO1xyXG5cdH1cclxuICBpZih1cmwuaW5kZXhPZignOi8vJyk9PSAtMSl7XHJcbiAgICB1cmwgPSBJUHVybCArdXJsIDtcclxuICB9XHJcbiAgcmV0dXJuIHVybDtcclxufVxyXG4vL+aatOmcsuWHuuWOu+iwg+eUqOeahOaWueazlVxyXG4gXHJcblxyXG4vLyBnZXTmlrnms5VcclxuY29uc3QgUF9nZXQgPSAodXJsLCBwYXJhbSA9IHt9KSA9PiB7XHJcblx0XHRpZighcGFyYW0ubG9hZF9tb2RlKXtcclxuXHRcdFx0d3guc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHQgIHRpdGxlOiAn6K+35rGC5Lit77yM6K+36ICQ5b+D562J5b6FLi4uJyxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcbiAgICByZXR1cm4gaHR0cCh7XHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIHBhcmFtLFxyXG5cdFx0XHRcdG1ldGhvZDogJ0dFVCdcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IFBfcG9zdCA9ICh1cmwsIHBhcmFtID0ge30pID0+IHtcclxuICAgIHJldHVybiBodHRwKHtcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgcGFyYW0sXHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIlxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgUF9wdXQgPSAodXJsLCBwYXJhbSA9IHt9KSA9PiB7XHJcbiAgICByZXR1cm4gaHR0cCh7XHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIHBhcmFtLFxyXG4gICAgICAgIG1ldGhvZDogJ3B1dCdcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IFBfZGVsZXRlID0gKHVybCwgcGFyYW0gPSB7fSkgPT4ge1xyXG4gICAgcmV0dXJuIGh0dHAoe1xyXG4gICAgICAgIHVybCxcclxuICAgICAgICBwYXJhbSxcclxuICAgICAgICBtZXRob2Q6ICdwdXQnXHJcbiAgICB9KVxyXG59XHJcbi8vIC8vIOWNleS4quivt+axglxyXG4vLyBzZXJ2aWNlLlBfZ2V0KCcvY2F0ZS9saXN0JykudGhlbihyZXMgPT4ge1xyXG4vLyBcdGNvbnNvbGUubG9nKHJlcylcclxuLy8gfSkuY2F0Y2goZSA9PiB7XHJcbi8vIFx0Y29uc29sZS5sb2coZSlcclxuLy8gfSlcclxuXHJcbi8vIC8vIOS4gOS4qumhtemdouWkmuS4quivt+axglxyXG4vLyBQcm9taXNlLmFsbChbXHJcbi8vICAgc2VydmljZS5QX2dldCgnL2NhdGUvbGlzdCcpLFxyXG4vLyAgIHNlcnZpY2UuUF9nZXQoYGRldGFpbC8ke2lkfWApXHJcbi8vIF0pLnRoZW4ocmVzdWx0ID0+IHtcclxuLy8gICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbi8vIH0pLmNhdGNoKGUgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKGUpXHJcbi8vIH0pXHJcbmNvbnN0IGdldGltZz1mdW5jdGlvbiAoaW1nKXtcclxuXHRyZXR1cm4gaW1nXHJcblx0XHJcblx0XHJcblx0XHJcblx0aWYoIWltZykgcmV0dXJuXHJcblx0Ly8gY29uc29sZS5sb2coaW1ndXJsK2ltZylcclxuXHRpZihpbWcuaW5kZXhPZignOi8vJyk9PSAtMSl7XHJcblx0ICBpbWcgPSBpbWd1cmwraW1nXHJcblx0fVxyXG5cdHJldHVybiBpbWdcclxufVxyXG5jb25zdCBnZXRpbWdhcnI9ZnVuY3Rpb24gKGltZ3MsdHlwZSl7XHJcblx0aWYoIWltZ3MpIHJldHVyblxyXG5cdGlmKCF0eXBlKXtcclxuXHRcdHR5cGU9JywnXHJcblx0fVxyXG5cdGltZ3M9aW1ncy5zcGxpdCh0eXBlKVxyXG5cdC8vIGNvbnNvbGUubG9nKGltZ3VybCtpbWcpXHJcblx0dmFyIG5ld2ltZ3M9W11cclxuXHRmb3IodmFyIGk9MDtpPGltZ3MubGVuZ3RoO2krKyl7XHJcblx0XHR2YXIgaW1nPWltZ3NbaV1cclxuXHRcdGlmKGltZy5pbmRleE9mKCc6Ly8nKT09IC0xKXtcclxuXHRcdCAgaW1nID0gaW1ndXJsK2ltZ1xyXG5cdFx0fVxyXG5cdFx0bmV3aW1ncy5wdXNoKGltZylcclxuXHR9XHJcblx0Ly8gY29uc29sZS5sb2cobmV3aW1ncylcclxuXHRyZXR1cm4gbmV3aW1nc1xyXG59XHJcbmNvbnN0IGdldHRpbWU9ZnVuY3Rpb24gKG1qKXtcclxuXHRpZighbWopIHtcclxuXHRcdHJldHVybiB7fVxyXG5cdH1cclxuXHQvLyAvLyBjb25zb2xlLmxvZyhtai5pbmRleE9mKCfku4rlpKknKSE9LTEpXHJcblx0Ly8gaWYobWouaW5kZXhPZign5LuK5aSpJykhPS0xKXtcclxuXHQvLyBcdHJldHVybiB7XHJcblx0Ly8gXHRcdHR5cGU6MixcclxuXHRcdFx0XHJcblx0Ly8gXHRcdHRpbWU6bWpcclxuXHQvLyBcdH1cclxuXHQvLyB9XHJcblx0Ly8gbWogPSBtai5yZXBsYWNlKC8tL2csJy8nKVxyXG5cdHZhciBudGltZT1uZXcgRGF0ZShtaioxMDAwKVxyXG5cdC8vIGNvbnNvbGUubG9nKG50aW1lKVxyXG5cdHZhciBuX3llYXIgPSBudGltZS5nZXRGdWxsWWVhcigpO1xyXG5cdHZhciBuX21vbnRoID0gbnRpbWUuZ2V0TW9udGgoKSArIDE7XHJcblx0dmFyIG5fZGF0ZSA9IG50aW1lLmdldERhdGUoKTtcclxuXHR2YXIgbl9ob3VyID0gbnRpbWUuZ2V0SG91cnMoKTtcclxuXHR2YXIgbl9taW51dGUgPSBudGltZS5nZXRNaW51dGVzKCk7XHJcblx0XHJcblx0dmFyIHRpbWUgPSBuZXcgRGF0ZSgpO1xyXG5cdHZhciB5ZWFyID0gdGltZS5nZXRGdWxsWWVhcigpO1xyXG5cdHZhciBtb250aCA9IHRpbWUuZ2V0TW9udGgoKSArIDE7XHJcblx0dmFyIGRhdGUgPSB0aW1lLmdldERhdGUoKTtcclxuXHR2YXIgaG91ciA9IHRpbWUuZ2V0SG91cnMoKTtcclxuXHR2YXIgbWludXRlID0gdGltZS5nZXRNaW51dGVzKCk7XHJcblx0Ly8gbl9tb250aD1uX21vbnRoPDEwPyAnMCcrbl9tb250aDpuX21vbnRoXHJcblx0bl9kYXRlPW5fZGF0ZTwxMD8gJzAnK25fZGF0ZTpuX2RhdGVcclxuXHRuX2hvdXI9bl9ob3VyPDEwPyAnMCcrbl9ob3VyOm5faG91clxyXG5cdG5fbWludXRlPW5fbWludXRlPDEwPyAnMCcrbl9taW51dGU6bl9taW51dGVcclxuXHRpZihuX3llYXI9PXllYXIpe1xyXG5cdFx0XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR0eXBlOjEsXHJcblx0XHRcdHllYXI6bl95ZWFyLFxyXG5cdFx0XHRtb250aDpuX21vbnRoLFxyXG5cdFx0XHRkYXRlOm5fZGF0ZSxcclxuXHRcdFx0aG91cjpuX2hvdXIsXHJcblx0XHRcdG1pbnV0ZTpuX21pbnV0ZSxcclxuXHRcdFx0dGltZTon5LuK5aSpICcrbl9ob3VyKyc6JytuX21pbnV0ZVxyXG5cdFx0fVxyXG5cdH1lbHNle1xyXG5cdFx0XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR0eXBlOjIsXHJcblx0XHRcdHllYXI6bl95ZWFyLFxyXG5cdFx0XHRtb250aDpuX21vbnRoLFxyXG5cdFx0XHRkYXRlOm5fZGF0ZSxcclxuXHRcdFx0aG91cjpuX2hvdXIsXHJcblx0XHRcdG1pbnV0ZTpuX21pbnV0ZSxcclxuXHRcdFx0dGltZTpuX3llYXIrJy0nK25fbW9udGgrJy0nK25fZGF0ZVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcbmNvbnN0IGdldF9md2I9ZnVuY3Rpb24gKHN0cil7XHJcblx0aWYoIXN0cil7XHJcblx0XHRyZXR1cm5cclxuXHR9XHJcblx0XHRcdFx0c3RyID0gc3RyIC8vIC5yZXBsYWNlKC88cChbXFxzXFx3XCI9XFwvXFwuOjtdKykoKD86KHN0eWxlPVwiW15cIl0rXCIpKSkvaWcsICc8cCcpXHJcblx0XHRcdFx0ICAgICAgICAgIC5yZXBsYWNlKC88cChbXFxzXFx3XCItPVxcL1xcLjo7XSspKCg/OihjbGFzcz1cIlteXCJdK1wiKSkpL2lnLCAnPHAgJDEnKVxyXG5cdFx0XHRcdCAgICAgICAgICAucmVwbGFjZSgvPHAoW1xcc1xcd1wiLT1cXC9cXC46O10rKS9pZywgJzxwJDEgY2xhc3M9XCJ4Y3hfZndiX3BcIicpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIC5yZXBsYWNlKC88ZGl2KFtcXHNcXHdcIj1cXC9cXC46O10rKSgoPzooc3R5bGU9XCJbXlwiXStcIikpKS9pZywgJzxkaXYnKVxyXG5cdFx0XHRcdCAgICAgICAgICAucmVwbGFjZSgvPGRpdihbXFxzXFx3XCItPVxcL1xcLjo7XSspKCg/OihjbGFzcz1cIlteXCJdK1wiKSkpL2lnLCAnPGRpdiAkMScpXHJcblx0XHRcdFx0ICAgICAgICAgIC5yZXBsYWNlKC88ZGl2KFtcXHNcXHdcIi09XFwvXFwuOjtdKykvaWcsICc8ZGl2JDEgY2xhc3M9XCJ4Y3hfZndiX2RpdlwiJylcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQgICAgICAgICAgLy8gLnJlcGxhY2UoLzxpbWcoW1xcc1xcd1wiLT1cXC9cXC46O10rKSgoPzooaGVpZ2h0PVwiW15cIl0rXCIpKSkvaWcsICc8aW1nICQxJylcclxuXHRcdFx0XHQgICAgICAgICAgLy8gLnJlcGxhY2UoLzxpbWcoW1xcc1xcd1wiLT1cXC9cXC46O10rKSgoPzood2lkdGg9XCJbXlwiXStcIikpKS9pZywgJzxpbWcgJDEnKVxyXG5cdFx0XHRcdCAgICAgICAgICAvLyAucmVwbGFjZSgvPGltZyhbXFxzXFx3XCItPVxcL1xcLjo7XSspKCg/OihzdHlsZT1cIlteXCJdK1wiKSkpL2lnLCAnPGltZyAkMScpXHJcblx0XHRcdFx0ICAgICAgICAgIC5yZXBsYWNlKC88aW1nKFtcXHNcXHdcIi09XFwvXFwuOjtdKykoKD86KGFsdD1cIlteXCJdK1wiKSkpL2lnLCAnPGltZyAkMScpXHJcblx0XHRcdFx0ICAgICAgICAgIC5yZXBsYWNlKC88aW1nKFtcXHNcXHdcIi09XFwvXFwuOjtdKykoKD86KGNsYXNzPVwiW15cIl0rXCIpKSkvaWcsICc8aW1nICQxJylcclxuXHRcdFx0XHQgICAgICAgICAgLnJlcGxhY2UoLzxpbWcoW1xcc1xcd1wiLT1cXC9cXC46O10rKS9pZywgJzxpbWckMSBjbGFzcz1cInhjeF9md2JfaW1nXCInKVxyXG5cdFx0XHRcdHJldHVybiBzdHJcclxuXHRcdFx0fVxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Z2V0VXNlcnMsXHJcblx0YWRkVXNlcixcclxuXHRnZXQsXHJcblx0cG9zdCxcclxuXHRJUHVybCxcclxuXHRtYXBfa2V5LFxyXG5cdGltZ3VybCxcclxuXHRnb2xvZ2luLFxyXG5cdGp1bXAsXHJcblx0Y2FsbCxcclxuXHR3eGxvZ2luLFxyXG5cdHNldFVzZXJtc2csXHJcblx0UF9nZXQsXHJcblx0UF9wb3N0LFxyXG5cdFBfcHV0LFxyXG5cdFBfZGVsZXRlLFxyXG5cdGdldHRpbWUsXHJcblx0Z2V0aW1nLFxyXG5cdGdldGltZ2FycixcclxuXHRwdmVpbWcsXHJcblx0Z2V0X2Z3YixcclxuXHR3eF91cGxvYWRcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!******************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/store/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 10));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n_vue.default.use(_vuex.default);\n\nvar store = new _vuex.default.Store({\n  state: {\n    /**\r\n            * 是否需要强制登录\r\n            */\n    forcedLogin: false,\n    hasLogin: false,\n    platform: '',\n    userName: \"游客\",\n    loginDatas: {\n      avatarurl: 'http://51daiyan.test.upcdn.net/resource/api/img/20200716/3eb26483a34058663c1adf01cf90901d.png',\n      nickname: '刘明',\n      tel: '1786352362',\n      gs: '智慧家物联网科技有限公司' },\n\n\n    company: '',\n    uid: '',\n    phone: '',\n    token: '',\n    laheiArr: [],\n    uuid: '',\n\n\n\n    new_xz: [], //批量操作\n    new_problem: '', //新问题\n    ls_prodata: '',\n    ls_pro_yh: '',\n    fj_data: '',\n    bj_prodata: '',\n\n    zn: \"\", //新手指南\n    address: {}, //当前坐标\n\n\n    wheight: '' },\n\n\n  mutations: {\n    setAddress: function setAddress(state, provider) {//当前坐标\n      state.address = provider;\n    },\n    setHeight: function setHeight(state, height) {//视窗高度\n      state.wheight = height || 750;\n    },\n    set_xcx: function set_xcx(state, xcx_status) {\n      var tip_text = '正在切换至';\n      if (xcx_status == 0) {\n        if (state.loginDatas.is_seller != 1) {\n          uni.showToast({\n            icon: 'none',\n            title: '暂无权限' });\n\n          return;\n        }\n        tip_text += '商家端';\n      }\n      if (xcx_status == 1) {\n        if (state.loginDatas.is_owner != 1) {\n          uni.showToast({\n            icon: 'none',\n            title: '暂无权限' });\n\n          return;\n        }\n        tip_text += '用户端';\n      }\n      if (xcx_status == 2) {\n        if (state.loginDatas.is_engineer != 1) {\n          uni.showToast({\n            icon: 'none',\n            title: '暂无权限' });\n\n          return;\n        }\n        tip_text += '智能安装端';\n      }\n      uni.showToast({\n        icon: 'none',\n        title: tip_text });\n\n      state.xcx_status = xcx_status || 0;\n      uni.switchTab({\n        url: '/pages/index/index' });\n\n    },\n    login: function login(state, userName) {\n      state.userName = userName || '新用户';\n      state.hasLogin = true;\n      __f__(\"log\", userName, \" at store/index.js:96\");\n      __f__(\"log\", state.userName, \" at store/index.js:97\");\n    },\n    lahei: function lahei(state, id) {\n      // state.userName = userName || '新用户';\n      // state.hasLogin = true;\n      state.laheiArr.push(id);\n      __f__(\"log\", state.laheiArr, \" at store/index.js:103\");\n    },\n    logindata: function logindata(state, _logindata) {\n      state.loginDatas = _logindata || '';\n      _vue.default.set(state, 'loginDatas', _logindata);\n      // state.company=logindata.company\n      // state.uid= logindata.id\n      // state.phone= logindata.phone\n      // state.token= logindata.token\n      __f__(\"log\", _logindata, \" at store/index.js:112\");\n      __f__(\"log\", state.loginDatas, \" at store/index.js:113\");\n    },\n    setplatform: function setplatform(state, platform) {\n      state.platform = platform || 'android';\n    },\n    logout: function logout(state) {\n      state.userName = \"游客\";\n      state.hasLogin = false;\n    },\n\n    // ****************************************\n    //评论操作\n    setnew_xz: function setnew_xz(state, new_xz) {\n      state.new_xz = new_xz || [];\n    },\n    //新题\n    setnew_problem: function setnew_problem(state, new_problem) {\n      state.new_problem = new_problem || [];\n    } } });var _default =\n\n\n\nstore;exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsInN0b3JlIiwiU3RvcmUiLCJzdGF0ZSIsImZvcmNlZExvZ2luIiwiaGFzTG9naW4iLCJwbGF0Zm9ybSIsInVzZXJOYW1lIiwibG9naW5EYXRhcyIsImF2YXRhcnVybCIsIm5pY2tuYW1lIiwidGVsIiwiZ3MiLCJjb21wYW55IiwidWlkIiwicGhvbmUiLCJ0b2tlbiIsImxhaGVpQXJyIiwidXVpZCIsIm5ld194eiIsIm5ld19wcm9ibGVtIiwibHNfcHJvZGF0YSIsImxzX3Byb195aCIsImZqX2RhdGEiLCJial9wcm9kYXRhIiwiem4iLCJhZGRyZXNzIiwid2hlaWdodCIsIm11dGF0aW9ucyIsInNldEFkZHJlc3MiLCJwcm92aWRlciIsInNldEhlaWdodCIsImhlaWdodCIsInNldF94Y3giLCJ4Y3hfc3RhdHVzIiwidGlwX3RleHQiLCJpc19zZWxsZXIiLCJ1bmkiLCJzaG93VG9hc3QiLCJpY29uIiwidGl0bGUiLCJpc19vd25lciIsImlzX2VuZ2luZWVyIiwic3dpdGNoVGFiIiwidXJsIiwibG9naW4iLCJsYWhlaSIsImlkIiwicHVzaCIsImxvZ2luZGF0YSIsInNldCIsInNldHBsYXRmb3JtIiwibG9nb3V0Iiwic2V0bmV3X3h6Iiwic2V0bmV3X3Byb2JsZW0iXSwibWFwcGluZ3MiOiJvSUFBQTtBQUNBLHdFOztBQUVBQSxhQUFJQyxHQUFKLENBQVFDLGFBQVI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLElBQUlELGNBQUtFLEtBQVQsQ0FBZTtBQUM1QkMsT0FBSyxFQUFFO0FBQ047OztBQUdBQyxlQUFXLEVBQUUsS0FKUDtBQUtOQyxZQUFRLEVBQUUsS0FMSjtBQU1OQyxZQUFRLEVBQUMsRUFOSDtBQU9OQyxZQUFRLEVBQUUsSUFQSjtBQVFOQyxjQUFVLEVBQUM7QUFDVEMsZUFBUyxFQUFDLCtGQUREO0FBRVRDLGNBQVEsRUFBQyxJQUZBO0FBR1RDLFNBQUcs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LEVBQXBCO0FBQ0EsbUJBQVk1QyxLQUFLLENBQUNjLFFBQWxCO0FBQ0EsS0EzRFM7QUE0RFZnQyxhQTVEVSxxQkE0REE5QyxLQTVEQSxFQTRETzhDLFVBNURQLEVBNERrQjtBQUMzQjlDLFdBQUssQ0FBQ0ssVUFBTixHQUFtQnlDLFVBQVMsSUFBSSxFQUFoQztBQUNBbkQsbUJBQUlvRCxHQUFKLENBQVEvQyxLQUFSLEVBQWMsWUFBZCxFQUEyQjhDLFVBQTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBWUEsVUFBWjtBQUNBLG1CQUFZOUMsS0FBSyxDQUFDSyxVQUFsQjtBQUNBLEtBckVTO0FBc0VWMkMsZUF0RVUsdUJBc0VFaEQsS0F0RUYsRUFzRVNHLFFBdEVULEVBc0VtQjtBQUM1QkgsV0FBSyxDQUFDRyxRQUFOLEdBQWlCQSxRQUFRLElBQUksU0FBN0I7QUFDQSxLQXhFUztBQXlFVjhDLFVBekVVLGtCQXlFSGpELEtBekVHLEVBeUVJO0FBQ2JBLFdBQUssQ0FBQ0ksUUFBTixHQUFpQixJQUFqQjtBQUNBSixXQUFLLENBQUNFLFFBQU4sR0FBaUIsS0FBakI7QUFDQSxLQTVFUzs7QUE4RVY7QUFDQTtBQUNBZ0QsYUFoRlUscUJBZ0ZBbEQsS0FoRkEsRUFnRk9nQixNQWhGUCxFQWdGZTtBQUN4QmhCLFdBQUssQ0FBQ2dCLE1BQU4sR0FBZUEsTUFBTSxJQUFFLEVBQXZCO0FBQ0EsS0FsRlM7QUFtRlY7QUFDQW1DLGtCQXBGVSwwQkFvRktuRCxLQXBGTCxFQW9GWWlCLFdBcEZaLEVBb0Z5QjtBQUNsQ2pCLFdBQUssQ0FBQ2lCLFdBQU4sR0FBb0JBLFdBQVcsSUFBRSxFQUFqQztBQUNBLEtBdEZTLEVBdkNpQixFQUFmLENBQWQsQzs7OztBQWlJZW5CLEsiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcclxuXHJcblZ1ZS51c2UoVnVleClcclxuXHJcbmNvbnN0IHN0b3JlID0gbmV3IFZ1ZXguU3RvcmUoe1xyXG5cdHN0YXRlOiB7XHJcblx0XHQvKipcclxuXHRcdCAqIOaYr+WQpumcgOimgeW8uuWItueZu+W9lVxyXG5cdFx0ICovXHJcblx0XHRmb3JjZWRMb2dpbjogZmFsc2UsXHJcblx0XHRoYXNMb2dpbjogZmFsc2UsXHJcblx0XHRwbGF0Zm9ybTonJyxcclxuXHRcdHVzZXJOYW1lOiBcIua4uOWuolwiLFxyXG5cdFx0bG9naW5EYXRhczp7XHJcblx0XHRcdFx0YXZhdGFydXJsOidodHRwOi8vNTFkYWl5YW4udGVzdC51cGNkbi5uZXQvcmVzb3VyY2UvYXBpL2ltZy8yMDIwMDcxNi8zZWIyNjQ4M2EzNDA1ODY2M2MxYWRmMDFjZjkwOTAxZC5wbmcnLFxyXG5cdFx0XHRcdG5pY2tuYW1lOifliJjmmI4nLFxyXG5cdFx0XHRcdHRlbDonMTc4NjM1MjM2MicsXHJcblx0XHRcdFx0Z3M6J+aZuuaFp+WutueJqeiBlOe9keenkeaKgOaciemZkOWFrOWPuCdcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0Y29tcGFueTonJyxcclxuXHRcdHVpZDonJyxcclxuXHRcdHBob25lOicnLFxyXG5cdFx0dG9rZW46JycsXHJcblx0XHRsYWhlaUFycjpbXSxcclxuXHRcdHV1aWQ6JycsXHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRuZXdfeHo6W10sICAgIC8v5om56YeP5pON5L2cXHJcblx0XHRuZXdfcHJvYmxlbTonJyAsLy/mlrDpl67pophcclxuXHRcdGxzX3Byb2RhdGE6JycsXHJcblx0XHRsc19wcm9feWg6JycsXHJcblx0XHRmal9kYXRhOicnLFxyXG5cdFx0YmpfcHJvZGF0YTonJyxcclxuXHRcdFxyXG5cdFx0em46XCJcIiAsLy/mlrDmiYvmjIfljZdcclxuXHRcdGFkZHJlc3M6e30sLy/lvZPliY3lnZDmoIdcclxuXHRcdFxyXG5cdFx0XHJcblx0XHR3aGVpZ2h0OicnXHJcblx0XHRcclxuXHR9LFxyXG5cdG11dGF0aW9uczoge1xyXG5cdFx0c2V0QWRkcmVzcyhzdGF0ZSwgcHJvdmlkZXIpIHsgLy/lvZPliY3lnZDmoIdcclxuXHRcdFx0c3RhdGUuYWRkcmVzcyA9IHByb3ZpZGVyO1xyXG5cdFx0fSxcclxuXHRcdHNldEhlaWdodChzdGF0ZSwgaGVpZ2h0KSB7IC8v6KeG56qX6auY5bqmXHJcblx0XHRcdHN0YXRlLndoZWlnaHQgPSBoZWlnaHR8fDc1MDtcclxuXHRcdH0sXHJcblx0XHRzZXRfeGN4KHN0YXRlLCB4Y3hfc3RhdHVzKXtcclxuXHRcdFx0dmFyIHRpcF90ZXh0PSfmraPlnKjliIfmjaLoh7MnXHJcblx0XHRcdGlmKHhjeF9zdGF0dXM9PTApe1xyXG5cdFx0XHRcdGlmKHN0YXRlLmxvZ2luRGF0YXMuaXNfc2VsbGVyIT0xKXtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmmoLml6DmnYPpmZAnXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aXBfdGV4dCs9J+WVhuWutuerrydcclxuXHRcdFx0fVxyXG5cdFx0XHRpZih4Y3hfc3RhdHVzPT0xKXtcclxuXHRcdFx0XHRpZihzdGF0ZS5sb2dpbkRhdGFzLmlzX293bmVyIT0xKXtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmmoLml6DmnYPpmZAnXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aXBfdGV4dCs9J+eUqOaIt+errydcclxuXHRcdFx0fVxyXG5cdFx0XHRpZih4Y3hfc3RhdHVzPT0yKXtcclxuXHRcdFx0XHRpZihzdGF0ZS5sb2dpbkRhdGFzLmlzX2VuZ2luZWVyIT0xKXtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmmoLml6DmnYPpmZAnXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aXBfdGV4dCs9J+aZuuiDveWuieijheerrydcclxuXHRcdFx0fVxyXG5cdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHR0aXRsZTp0aXBfdGV4dFxyXG5cdFx0XHR9KVxyXG5cdFx0XHRzdGF0ZS54Y3hfc3RhdHVzID0geGN4X3N0YXR1cyB8fCAwO1xyXG5cdFx0XHR1bmkuc3dpdGNoVGFiKHtcclxuXHRcdFx0XHR1cmw6Jy9wYWdlcy9pbmRleC9pbmRleCdcclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRsb2dpbihzdGF0ZSwgdXNlck5hbWUpIHtcclxuXHRcdFx0c3RhdGUudXNlck5hbWUgPSB1c2VyTmFtZSB8fCAn5paw55So5oi3JztcclxuXHRcdFx0c3RhdGUuaGFzTG9naW4gPSB0cnVlO1xyXG5cdFx0XHRjb25zb2xlLmxvZyh1c2VyTmFtZSlcclxuXHRcdFx0Y29uc29sZS5sb2coc3RhdGUudXNlck5hbWUpXHJcblx0XHR9LFxyXG5cdFx0bGFoZWkoc3RhdGUsIGlkKSB7XHJcblx0XHRcdC8vIHN0YXRlLnVzZXJOYW1lID0gdXNlck5hbWUgfHwgJ+aWsOeUqOaItyc7XHJcblx0XHRcdC8vIHN0YXRlLmhhc0xvZ2luID0gdHJ1ZTtcclxuXHRcdFx0c3RhdGUubGFoZWlBcnIucHVzaChpZClcclxuXHRcdFx0Y29uc29sZS5sb2coc3RhdGUubGFoZWlBcnIpXHJcblx0XHR9LFxyXG5cdFx0bG9naW5kYXRhKHN0YXRlLCBsb2dpbmRhdGEpIHtcclxuXHRcdFx0c3RhdGUubG9naW5EYXRhcyA9IGxvZ2luZGF0YSB8fCAnJztcclxuXHRcdFx0VnVlLnNldChzdGF0ZSwnbG9naW5EYXRhcycsbG9naW5kYXRhKVxyXG5cdFx0XHQvLyBzdGF0ZS5jb21wYW55PWxvZ2luZGF0YS5jb21wYW55XHJcblx0XHRcdC8vIHN0YXRlLnVpZD0gbG9naW5kYXRhLmlkXHJcblx0XHRcdC8vIHN0YXRlLnBob25lPSBsb2dpbmRhdGEucGhvbmVcclxuXHRcdFx0Ly8gc3RhdGUudG9rZW49IGxvZ2luZGF0YS50b2tlblxyXG5cdFx0XHRjb25zb2xlLmxvZyhsb2dpbmRhdGEpXHJcblx0XHRcdGNvbnNvbGUubG9nKHN0YXRlLmxvZ2luRGF0YXMpXHJcblx0XHR9LFxyXG5cdFx0c2V0cGxhdGZvcm0oc3RhdGUsIHBsYXRmb3JtKSB7XHJcblx0XHRcdHN0YXRlLnBsYXRmb3JtID0gcGxhdGZvcm0gfHwgJ2FuZHJvaWQnO1xyXG5cdFx0fSxcclxuXHRcdGxvZ291dChzdGF0ZSkge1xyXG5cdFx0XHRzdGF0ZS51c2VyTmFtZSA9IFwi5ri45a6iXCI7XHJcblx0XHRcdHN0YXRlLmhhc0xvZ2luID0gZmFsc2U7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHQvL+ivhOiuuuaTjeS9nFxyXG5cdFx0c2V0bmV3X3h6KHN0YXRlLCBuZXdfeHopIHtcclxuXHRcdFx0c3RhdGUubmV3X3h6ID0gbmV3X3h6fHxbXTtcclxuXHRcdH0sXHJcblx0XHQvL+aWsOmimFxyXG5cdFx0c2V0bmV3X3Byb2JsZW0oc3RhdGUsIG5ld19wcm9ibGVtKSB7XHJcblx0XHRcdHN0YXRlLm5ld19wcm9ibGVtID0gbmV3X3Byb2JsZW18fFtdIDtcclxuXHRcdH0sXHJcblx0fVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.install = install;exports.mapState = exports.mapMutations = exports.mapGetters = exports.mapActions = exports.createNamespacedHelpers = exports.Store = exports.default = void 0; /*!
                                                                                                                                                                                                                                                                      * vuex v3.4.0
                                                                                                                                                                                                                                                                      * (c) 2020 Evan You
                                                                                                                                                                                                                                                                      * @license MIT
                                                                                                                                                                                                                                                                      */
function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};

      options.init = options.init ?
      [vuexInit].concat(options.init) :
      vuexInit;
      _init.call(this, options);
    };
  }

  /**
     * Vuex init hook, injected into each instances init hooks list.
     */

  function vuexInit() {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function' ?
      options.store() :
      options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined' ?
window :
typeof global !== 'undefined' ?
global :
{};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin(store) {
  if (!devtoolHook) {return;}

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
   * Get the first item that pass the test
   * by second argument function
   *
   * @param {Array} list
   * @param {Function} f
   * @return {*}
   */

/**
       * forEach for object
       */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {return fn(obj[key], key);});
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isPromise(val) {
  return val && typeof val.then === 'function';
}

function assert(condition, msg) {
  if (!condition) {throw new Error("[vuex] " + msg);}
}

function partial(fn, arg) {
  return function () {
    return fn(arg);
  };
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module(rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};

Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};

Module.prototype.hasChild = function hasChild(key) {
  return key in this._children;
};

Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties(Module.prototype, prototypeAccessors);

var ModuleCollection = function ModuleCollection(rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};

ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};

ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1 = this;
  if (runtime === void 0) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) {return;}

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key);
};

function update(path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed');

        }
        return;
      }
      update(
      path.concat(key),
      targetModule.getChild(key),
      newModule.modules[key]);

    }
  }
}

var functionAssert = {
  assert: function assert(value) {return typeof value === 'function';},
  expected: 'function' };


var objectAssert = {
  assert: function assert(value) {return typeof value === 'function' ||
    typeof value === 'object' && typeof value.handler === 'function';},
  expected: 'function or object with "handler" function' };


var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert };


function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {return;}

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
      assertOptions.assert(value),
      makeAssertionMessage(path, key, type, value, assertOptions.expected));

    });
  });
}

function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + path.join('.') + "\"";
  }
  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}

var Vue; // bind on install

var Store = function Store(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins;if (plugins === void 0) plugins = [];
  var strict = options.strict;if (strict === void 0) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };
  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) {return plugin(this$1);});

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};exports.Store = Store;

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state;
};

prototypeAccessors$1.state.set = function (v) {
  if (true) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown mutation type: " + type);
    }
    return;
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });

  this._subscribers.
  slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
  .forEach(function (sub) {return sub(mutation, this$1.state);});

  if (
   true &&
  options && options.silent)
  {
    console.warn(
    "[vuex] mutation type: " + type + ". Silent option has been removed. " +
    'Use the filter functionality in the vue-devtools');

  }
};

Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown action type: " + type);
    }
    return;
  }

  try {
    this._actionSubscribers.
    slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .filter(function (sub) {return sub.before;}).
    forEach(function (sub) {return sub.before(action, this$1.state);});
  } catch (e) {
    if (true) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1 ?
  Promise.all(entry.map(function (handler) {return handler(payload);})) :
  entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.after;}).
        forEach(function (sub) {return sub.after(action, this$1.state);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.error;}).
        forEach(function (sub) {return sub.error(action, this$1.state, error);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  });
};

Store.prototype.subscribe = function subscribe(fn, options) {
  return genericSubscribe(fn, this._subscribers, options);
};

Store.prototype.subscribeAction = function subscribeAction(fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};

Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () {return getter(this$1.state, this$1.getters);}, cb, options);
};

Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1 = this;

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule(path) {
  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path);
};

Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties(Store.prototype, prototypeAccessors$1);

function genericSubscribe(fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend ?
    subs.unshift(fn) :
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}

function resetStore(store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM(store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function get() {return store._vm[key];},
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state },

    computed: computed });

  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () {return oldVm.$destroy();});
  }
}

function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && "development" !== 'production') {
      console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join('/'));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if (true) {
        if (moduleName in parentState) {
          console.warn(
          "[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + path.join('.') + "\"");

        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
   * make localized dispatch, commit, getters and state
   * if there is no namespace, just use root ones
   */
function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
          return;
        }
      }

      return store.dispatch(type, payload);
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
          return;
        }
      }

      store.commit(type, payload, options);
    } };


  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ?
      function () {return store.getters;} :
      function () {return makeLocalGetters(store, namespace);} },

    state: {
      get: function get() {return getNestedState(store.state, path);} } });



  return local;
}

function makeLocalGetters(store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) {return;}

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function get() {return store.getters[type];},
        enumerable: true });

    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace];
}

function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state },
    payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err;
      });
    } else {
      return res;
    }
  });
}

function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error("[vuex] duplicate getter key: " + type);
    }
    return;
  }
  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(
    local.state, // local state
    local.getters, // local getters
    store.state, // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {return this._data.$$state;}, function () {
    if (true) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState(state, path) {
  return path.reduce(function (state, key) {return state[key];}, state);
}

function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', "expects string as the type, but found " + typeof type + ".");
  }

  return { type: type, payload: payload, options: options };
}

function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.');

    }
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
   * Reduce the code which written in Vue.js for getting the state.
   * @param {String} [namespace] - Module's namespace
   * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
   * @param {Object}
   */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if ( true && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return;
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function' ?
      val.call(this, state, getters) :
      state[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for committing the mutation
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapState = mapState;
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if ( true && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return;
        }
        commit = module.context.commit;
      }
      return typeof val === 'function' ?
      val.apply(this, [commit].concat(args)) :
      commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for getting the getters
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} getters
     * @return {Object}
     */exports.mapMutations = mapMutations;
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if ( true && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }
      if ( true && !(val in this.$store.getters)) {
        console.error("[vuex] unknown getter: " + val);
        return;
      }
      return this.$store.getters[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for dispatch the action
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapGetters = mapGetters;
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if ( true && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return;
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function' ?
      val.apply(this, [dispatch].concat(args)) :
      dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
     * @param {String} namespace
     * @return {Object}
     */exports.mapActions = mapActions;
var createNamespacedHelpers = function createNamespacedHelpers(namespace) {return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace) };
};

/**
    * Normalize the map
    * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
    * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
    * @param {Array|Object} map
    * @return {Object}
    */exports.createNamespacedHelpers = createNamespacedHelpers;
function normalizeMap(map) {
  if (!isValidMap(map)) {
    return [];
  }
  return Array.isArray(map) ?
  map.map(function (key) {return { key: key, val: key };}) :
  Object.keys(map).map(function (key) {return { key: key, val: map[key] };});
}

/**
   * Validate whether given map is valid or not
   * @param {*} map
   * @return {Boolean}
   */
function isValidMap(map) {
  return Array.isArray(map) || isObject(map);
}

/**
   * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
   * @param {Function} fn
   * @return {Function}
   */
function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map);
  };
}

/**
   * Search a special module from store by namespace. if module not exist, print error message.
   * @param {Object} store
   * @param {String} helper
   * @param {String} namespace
   * @return {Object}
   */
function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
  }
  return module;
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers };var _default =


index;exports.default = _default;

/***/ }),
/* 14 */
/*!*******************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/common/event.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var listener = new Map();\nvar fire_event = {\n  on: function on(page, type, callBack) {\n    if (!listener.hasOwnProperty(page)) {\n      listener[page] = new Map();\n    }\n    //if(!listener[page].hasOwnProperty(type)){\n    listener[page][type] = callBack;\n    //}\n    return fire_event;\n  },\n  trigger: function trigger(options) {\n    var myObj = {\n      type: options.type,\n      page: options.page || 'all' };\n\n    //debugger;\n    if (myObj.page == 'all') {\n      for (var key in listener) {\n        if (listener[key][myObj.type]) {\n          var ret = listener[key][myObj.type].call(this, options);\n          if (options.success) {ret ? options.success(ret) : options.success();}\n        }\n      }\n    } else {\n      if (listener.hasOwnProperty(myObj.page)) {\n        if (listener[myObj.page][myObj.type]) {\n          var ret = listener[myObj.page][myObj.type].call(this, options);\n          if (options.success) {ret ? options.success(ret) : options.success();}\n        }\n      }\n    }\n  },\n  remove: function remove(page, type) {\n    if (page) {\n      if (type) {\n        delete listener[page][type];\n      } else {\n        delete listener[page];\n      }\n    }\n  } };\n\n\n\nmodule.exports = fire_event;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2V2ZW50LmpzIl0sIm5hbWVzIjpbImxpc3RlbmVyIiwiTWFwIiwiZmlyZV9ldmVudCIsIm9uIiwicGFnZSIsInR5cGUiLCJjYWxsQmFjayIsImhhc093blByb3BlcnR5IiwidHJpZ2dlciIsIm9wdGlvbnMiLCJteU9iaiIsImtleSIsInJldCIsImNhbGwiLCJzdWNjZXNzIiwicmVtb3ZlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsUUFBUSxHQUFHLElBQUlDLEdBQUosRUFBZjtBQUNBLElBQUlDLFVBQVUsR0FBRztBQUNoQkMsSUFBRSxFQUFDLFlBQVNDLElBQVQsRUFBY0MsSUFBZCxFQUFtQkMsUUFBbkIsRUFBNEI7QUFDOUIsUUFBRyxDQUFDTixRQUFRLENBQUNPLGNBQVQsQ0FBd0JILElBQXhCLENBQUosRUFBa0M7QUFDakNKLGNBQVEsQ0FBQ0ksSUFBRCxDQUFSLEdBQWlCLElBQUlILEdBQUosRUFBakI7QUFDQTtBQUNEO0FBQ0NELFlBQVEsQ0FBQ0ksSUFBRCxDQUFSLENBQWVDLElBQWYsSUFBdUJDLFFBQXZCO0FBQ0Q7QUFDQSxXQUFPSixVQUFQO0FBQ0EsR0FUZTtBQVVoQk0sU0FBTyxFQUFDLGlCQUFTQyxPQUFULEVBQWlCO0FBQ3hCLFFBQUlDLEtBQUssR0FBRztBQUNYTCxVQUFJLEVBQUNJLE9BQU8sQ0FBQ0osSUFERjtBQUVYRCxVQUFJLEVBQUNLLE9BQU8sQ0FBQ0wsSUFBUixJQUFnQixLQUZWLEVBQVo7O0FBSUE7QUFDQSxRQUFHTSxLQUFLLENBQUNOLElBQU4sSUFBYyxLQUFqQixFQUF1QjtBQUN0QixXQUFJLElBQUlPLEdBQVIsSUFBZVgsUUFBZixFQUF3QjtBQUN2QixZQUFHQSxRQUFRLENBQUNXLEdBQUQsQ0FBUixDQUFjRCxLQUFLLENBQUNMLElBQXBCLENBQUgsRUFBNkI7QUFDNUIsY0FBSU8sR0FBRyxHQUFHWixRQUFRLENBQUNXLEdBQUQsQ0FBUixDQUFjRCxLQUFLLENBQUNMLElBQXBCLEVBQTBCUSxJQUExQixDQUErQixJQUEvQixFQUFvQ0osT0FBcEMsQ0FBVjtBQUNBLGNBQUdBLE9BQU8sQ0FBQ0ssT0FBWCxFQUFtQixDQUFDRixHQUFHLEdBQUNILE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkYsR0FBaEIsQ0FBRCxHQUFzQkgsT0FBTyxDQUFDSyxPQUFSLEVBQXpCLENBQTJDO0FBQy9EO0FBQ0Q7QUFDRCxLQVBELE1BT0s7QUFDSixVQUFHZCxRQUFRLENBQUNPLGNBQVQsQ0FBd0JHLEtBQUssQ0FBQ04sSUFBOUIsQ0FBSCxFQUF1QztBQUN0QyxZQUFHSixRQUFRLENBQUNVLEtBQUssQ0FBQ04sSUFBUCxDQUFSLENBQXFCTSxLQUFLLENBQUNMLElBQTNCLENBQUgsRUFBb0M7QUFDbkMsY0FBSU8sR0FBRyxHQUFHWixRQUFRLENBQUNVLEtBQUssQ0FBQ04sSUFBUCxDQUFSLENBQXFCTSxLQUFLLENBQUNMLElBQTNCLEVBQWlDUSxJQUFqQyxDQUFzQyxJQUF0QyxFQUEyQ0osT0FBM0MsQ0FBVjtBQUNBLGNBQUdBLE9BQU8sQ0FBQ0ssT0FBWCxFQUFtQixDQUFDRixHQUFHLEdBQUNILE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkYsR0FBaEIsQ0FBRCxHQUFzQkgsT0FBTyxDQUFDSyxPQUFSLEVBQXpCLENBQTJDO0FBQy9EO0FBQ0Q7QUFDRDtBQUNELEdBL0JlO0FBZ0NoQkMsUUFBTSxFQUFDLGdCQUFTWCxJQUFULEVBQWNDLElBQWQsRUFBbUI7QUFDekIsUUFBR0QsSUFBSCxFQUFRO0FBQ1AsVUFBR0MsSUFBSCxFQUFRO0FBQ1AsZUFBT0wsUUFBUSxDQUFDSSxJQUFELENBQVIsQ0FBZUMsSUFBZixDQUFQO0FBQ0EsT0FGRCxNQUVLO0FBQ0osZUFBT0wsUUFBUSxDQUFDSSxJQUFELENBQWY7QUFDQTtBQUNEO0FBQ0QsR0F4Q2UsRUFBakI7Ozs7QUE0Q0FZLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmYsVUFBakIiLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbGlzdGVuZXIgPSBuZXcgTWFwKCk7XHJcbnZhciBmaXJlX2V2ZW50ID0ge1xyXG5cdG9uOmZ1bmN0aW9uKHBhZ2UsdHlwZSxjYWxsQmFjayl7XHJcblx0XHRpZighbGlzdGVuZXIuaGFzT3duUHJvcGVydHkocGFnZSkpe1xyXG5cdFx0XHRsaXN0ZW5lcltwYWdlXSA9IG5ldyBNYXAoKTtcclxuXHRcdH1cclxuXHRcdC8vaWYoIWxpc3RlbmVyW3BhZ2VdLmhhc093blByb3BlcnR5KHR5cGUpKXtcclxuXHRcdFx0bGlzdGVuZXJbcGFnZV1bdHlwZV0gPSBjYWxsQmFjaztcclxuXHRcdC8vfVxyXG5cdFx0cmV0dXJuIGZpcmVfZXZlbnQ7XHJcblx0fSxcdFxyXG5cdHRyaWdnZXI6ZnVuY3Rpb24ob3B0aW9ucyl7XHJcblx0XHR2YXIgbXlPYmogPSB7XHJcblx0XHRcdHR5cGU6b3B0aW9ucy50eXBlLFxyXG5cdFx0XHRwYWdlOm9wdGlvbnMucGFnZSB8fCAnYWxsJ1xyXG5cdFx0fTtcclxuXHRcdC8vZGVidWdnZXI7XHJcblx0XHRpZihteU9iai5wYWdlID09ICdhbGwnKXtcclxuXHRcdFx0Zm9yKHZhciBrZXkgaW4gbGlzdGVuZXIpe1xyXG5cdFx0XHRcdGlmKGxpc3RlbmVyW2tleV1bbXlPYmoudHlwZV0pe1xyXG5cdFx0XHRcdFx0dmFyIHJldCA9IGxpc3RlbmVyW2tleV1bbXlPYmoudHlwZV0uY2FsbCh0aGlzLG9wdGlvbnMpO1xyXG5cdFx0XHRcdFx0aWYob3B0aW9ucy5zdWNjZXNzKXtyZXQ/b3B0aW9ucy5zdWNjZXNzKHJldCk6b3B0aW9ucy5zdWNjZXNzKCl9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0aWYobGlzdGVuZXIuaGFzT3duUHJvcGVydHkobXlPYmoucGFnZSkpe1xyXG5cdFx0XHRcdGlmKGxpc3RlbmVyW215T2JqLnBhZ2VdW215T2JqLnR5cGVdKXtcclxuXHRcdFx0XHRcdHZhciByZXQgPSBsaXN0ZW5lcltteU9iai5wYWdlXVtteU9iai50eXBlXS5jYWxsKHRoaXMsb3B0aW9ucyk7XHJcblx0XHRcdFx0XHRpZihvcHRpb25zLnN1Y2Nlc3Mpe3JldD9vcHRpb25zLnN1Y2Nlc3MocmV0KTpvcHRpb25zLnN1Y2Nlc3MoKX1cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0cmVtb3ZlOmZ1bmN0aW9uKHBhZ2UsdHlwZSl7XHJcblx0XHRpZihwYWdlKXtcclxuXHRcdFx0aWYodHlwZSl7XHJcblx0XHRcdFx0ZGVsZXRlIGxpc3RlbmVyW3BhZ2VdW3R5cGVdXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGRlbGV0ZSBsaXN0ZW5lcltwYWdlXVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZmlyZV9ldmVudDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 18 */
/*!****************************************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/main.js?{"page":"pages%2Fmap%2Fmap"} ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_map_map_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/map/map.nvue?mpType=page */ 19);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_map_map_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_map_map_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/map/map'\n        _pages_map_map_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_map_map_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsdUVBQUc7QUFDWCxRQUFRLHVFQUFHO0FBQ1gsUUFBUSx1RUFBRztBQUNYLGdCQUFnQix1RUFBRyIsImZpbGUiOiIxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvbWFwL21hcC5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZWFzb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL21hcC9tYXAnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!**********************************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/pages/map/map.nvue?mpType=page ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_nvue_vue_type_template_id_6970862e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.nvue?vue&type=template&id=6970862e&scoped=true&mpType=page */ 20);\n/* harmony import */ var _map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.nvue?vue&type=script&lang=js&mpType=page */ 22);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./map.nvue?vue&type=style&index=0&id=6970862e&scoped=true&lang=css&mpType=page */ 24).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./map.nvue?vue&type=style&index=0&id=6970862e&scoped=true&lang=css&mpType=page */ 24).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _map_nvue_vue_type_template_id_6970862e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _map_nvue_vue_type_template_id_6970862e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6970862e\",\n  \"6b5d9c66\",\n  false,\n  _map_nvue_vue_type_template_id_6970862e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/map/map.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDbUU7QUFDTDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHdGQUFnRjtBQUNwSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsd0ZBQWdGO0FBQ3pJOztBQUVBOztBQUVBO0FBQ3NLO0FBQ3RLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbWFwLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njk3MDg2MmUmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21hcC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL21hcC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9tYXAubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY5NzA4NjJlJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL21hcC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Njk3MDg2MmUmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2OTcwODYyZVwiLFxuICBcIjZiNWQ5YzY2XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL21hcC9tYXAubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!****************************************************************************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/pages/map/map.nvue?vue&type=template&id=6970862e&scoped=true&mpType=page ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_template_id_6970862e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./map.nvue?vue&type=template&id=6970862e&scoped=true&mpType=page */ 21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_template_id_6970862e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_template_id_6970862e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_template_id_6970862e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_template_id_6970862e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 21 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/phpStudy/WWW/71_jiushengquan/pages/map/map.nvue?vue&type=template&id=6970862e&scoped=true&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["minh100"] },
    [
      _c(
        "map",
        {
          staticClass: ["index_map"],
          style: { height: _vm.mapHeight + "px" },
          attrs: {
            id: "map",
            name: "map",
            showCompass: false,
            enableRotate: false,
            latitude: _vm.latitude,
            longitude: _vm.longitude,
            markers: _vm.markersArr,
            controls: _vm.mapControls
          },
          on: { markertap: _vm.markertap, regionchange: _vm.mapChange }
        },
        [
          _c("view", { staticClass: ["bj_box"] }, [
            _c("image", {
              staticClass: ["bj_box_img"],
              attrs: {
                src: "../../static/images/baojing1.png",
                mode: "aspectFit"
              },
              on: { click: _vm.baojing_fuc }
            }),
            _vm.baojing
              ? _c(
                  "view",
                  { staticClass: ["bj_main"], on: { click: _vm.baojing_del } },
                  [
                    _c("view", { staticClass: ["bj_cnum"] }, [
                      _c("view", { staticClass: ["bj_cnum_1"] }, [
                        _c(
                          "text",
                          {
                            staticClass: ["bj_cnum_num"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [_vm._v(_vm._s(_vm.bj_time))]
                        )
                      ])
                    ]),
                    _c(
                      "text",
                      {
                        staticClass: ["bj_tip"],
                        staticStyle: { color: "#fff" },
                        appendAsTree: true,
                        attrs: { append: "tree" }
                      },
                      [_vm._v("10秒钟内触摸屏幕取消")]
                    )
                  ]
                )
              : _vm._e()
          ]),
          _vm.tk_show
            ? _c(
                "view",
                { staticClass: ["tk_popop"], on: { touchmove: _vm.test } },
                [
                  _c("view", { staticClass: ["tk_main"] }, [
                    _c("view", { staticClass: ["add_bj"] }, [
                      _c("view", { staticClass: ["add_bj_text"] }),
                      _c(
                        "text",
                        {
                          staticStyle: { fontWeight: "bold" },
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [_vm._v("添加标记")]
                      ),
                      _c("view", { staticClass: ["add_bj_text"] })
                    ]),
                    _c("view", { staticClass: ["bj_type"] }, [
                      _c(
                        "view",
                        {
                          staticClass: ["bj_type_li", "bj_type_li_cur"],
                          on: {
                            click: function($event) {
                              _vm.open_tk(1)
                            }
                          }
                        },
                        [
                          _c(
                            "text",
                            {
                              staticStyle: { color: "#fff" },
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("危害")]
                          )
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: ["bj_type_li", "bj_type_li_cur"],
                          on: {
                            click: function($event) {
                              _vm.open_tk(2)
                            }
                          }
                        },
                        [
                          _c(
                            "text",
                            {
                              staticStyle: { color: "#fff" },
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("命令")]
                          )
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: ["bj_type_li", "bj_type_li_cur"],
                          on: {
                            click: function($event) {
                              _vm.open_tk(3)
                            }
                          }
                        },
                        [
                          _c(
                            "text",
                            {
                              staticStyle: { color: "#fff" },
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("受困者")]
                          )
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: ["bj_type_li", "bj_type_li_cur"],
                          on: {
                            click: function($event) {
                              _vm.open_tk(4)
                            }
                          }
                        },
                        [
                          _c(
                            "text",
                            {
                              staticStyle: { color: "#fff" },
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("建筑破坏")]
                          )
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: ["bj_type_li", "bj_type_li_cur"],
                          on: {
                            click: function($event) {
                              _vm.open_tk(5)
                            }
                          }
                        },
                        [
                          _c(
                            "text",
                            {
                              staticStyle: { color: "#fff" },
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("搜索")]
                          )
                        ]
                      )
                    ])
                  ]),
                  _c(
                    "text",
                    {
                      staticClass: ["iconfont", "iconguanbi"],
                      staticStyle: { fontSize: "50px", color: "#fff" },
                      appendAsTree: true,
                      attrs: { append: "tree" },
                      on: {
                        click: function($event) {
                          _vm.tk_show = false
                        }
                      }
                    },
                    [_vm._v("")]
                  )
                ]
              )
            : _vm._e(),
          _vm.tk_show_sx
            ? _c(
                "view",
                { staticClass: ["tk_popop"], on: { touchmove: _vm.test } },
                [
                  _c("view", { staticClass: ["tk_main"] }, [
                    _c("view", { staticClass: ["add_bj"] }, [
                      _c("view", { staticClass: ["add_bj_text"] }),
                      _c(
                        "text",
                        {
                          staticStyle: { fontWeight: "bold" },
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [_vm._v("筛选")]
                      ),
                      _c("view", { staticClass: ["add_bj_text"] })
                    ]),
                    _c("view", { staticClass: ["bj_type"] }, [
                      _c(
                        "view",
                        {
                          staticClass: ["bj_type_li"],
                          class:
                            _vm.tk_show_sx_cur == 0 ? "bj_type_li_cur" : "",
                          on: {
                            click: function($event) {
                              _vm.shai_tk(0)
                            }
                          }
                        },
                        [
                          _c(
                            "text",
                            {
                              staticClass: ["bj_type_li_text"],
                              class:
                                _vm.tk_show_sx_cur == 0
                                  ? "bj_type_li_text_cur"
                                  : "",
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("所有")]
                          )
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: ["bj_type_li"],
                          class:
                            _vm.tk_show_sx_cur == 1 ? "bj_type_li_cur" : "",
                          on: {
                            click: function($event) {
                              _vm.shai_tk(1)
                            }
                          }
                        },
                        [
                          _c(
                            "text",
                            {
                              staticClass: ["bj_type_li_text"],
                              class:
                                _vm.tk_show_sx_cur == 1
                                  ? "bj_type_li_text_cur"
                                  : "",
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("仅自己")]
                          )
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: ["bj_type_li"],
                          class:
                            _vm.tk_show_sx_cur == 2 ? "bj_type_li_cur" : "",
                          on: {
                            click: function($event) {
                              _vm.shai_tk(2)
                            }
                          }
                        },
                        [
                          _c(
                            "text",
                            {
                              staticClass: ["bj_type_li_text"],
                              class:
                                _vm.tk_show_sx_cur == 2
                                  ? "bj_type_li_text_cur"
                                  : "",
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("航点")]
                          )
                        ]
                      )
                    ])
                  ]),
                  _c(
                    "text",
                    {
                      staticClass: ["iconfont", "iconguanbi"],
                      staticStyle: { fontSize: "50px", color: "#fff" },
                      appendAsTree: true,
                      attrs: { append: "tree" },
                      on: {
                        click: function($event) {
                          _vm.tk_show_sx = false
                        }
                      }
                    },
                    [_vm._v("")]
                  )
                ]
              )
            : _vm._e()
        ]
      ),
      _c("view", { staticClass: ["map_btn_list"] }, [
        _c(
          "view",
          { staticClass: ["map_btn_li"], on: { click: _vm.shuaxin } },
          [
            _c("image", {
              staticClass: ["map_btn_li_image"],
              attrs: {
                src: _vm.getimg("/static/images/index_btn1.png"),
                mode: "aspectFit"
              }
            }),
            _c("text", { appendAsTree: true, attrs: { append: "tree" } }, [
              _vm._v("刷新")
            ])
          ]
        ),
        _c(
          "view",
          {
            staticClass: ["map_btn_li"],
            on: {
              click: function($event) {
                _vm.tk_show = true
              }
            }
          },
          [
            _c("image", {
              staticClass: ["map_btn_li_image"],
              attrs: {
                src: _vm.getimg("/static/images/index_btn2.png"),
                mode: "aspectFit"
              }
            }),
            _c("text", { appendAsTree: true, attrs: { append: "tree" } }, [
              _vm._v("标记")
            ])
          ]
        ),
        _c("view", { staticClass: ["map_btn_li"] }, [
          _c("image", {
            staticClass: ["map_btn_li_image"],
            attrs: {
              src: _vm.getimg("/static/images/index_btn3.png"),
              mode: "aspectFit"
            }
          }),
          _c("text", { appendAsTree: true, attrs: { append: "tree" } }, [
            _vm._v("天气")
          ])
        ]),
        _c(
          "view",
          {
            staticClass: ["map_btn_li"],
            on: {
              click: function($event) {
                _vm.tk_show_sx = true
              }
            }
          },
          [
            _c("image", {
              staticClass: ["map_btn_li_image"],
              attrs: {
                src: _vm.getimg("/static/images/index_btn4.png"),
                mode: "aspectFit"
              }
            }),
            _c("text", { appendAsTree: true, attrs: { append: "tree" } }, [
              _vm._v("筛选")
            ])
          ]
        )
      ]),
      _c("view"),
      _vm.tk_show1
        ? _c(
            "view",
            { staticClass: ["tk_popop"], on: { touchmove: _vm.test } },
            [
              _c("view", { staticClass: ["tk_main"] }, [
                _c("image", {
                  staticClass: ["add_bj_icon"],
                  attrs: {
                    src: _vm.getimg("/static/images/add_bj_icon.png"),
                    mode: "aspectFit"
                  }
                }),
                _vm.tk_show1_num == 1
                  ? _c(
                      "text",
                      {
                        staticClass: ["notetk_tit"],
                        appendAsTree: true,
                        attrs: { append: "tree" }
                      },
                      [_vm._v("选择危险类型")]
                    )
                  : _vm._e(),
                _vm.tk_show1_num == 2
                  ? _c(
                      "text",
                      {
                        staticClass: ["notetk_tit"],
                        appendAsTree: true,
                        attrs: { append: "tree" }
                      },
                      [_vm._v("选择命令类型")]
                    )
                  : _vm._e(),
                _vm.tk_show1_num == 3
                  ? _c(
                      "text",
                      {
                        staticClass: ["notetk_tit"],
                        appendAsTree: true,
                        attrs: { append: "tree" }
                      },
                      [_vm._v("受困者")]
                    )
                  : _vm._e(),
                _vm.tk_show1_num == 4
                  ? _c(
                      "text",
                      {
                        staticClass: ["notetk_tit"],
                        appendAsTree: true,
                        attrs: { append: "tree" }
                      },
                      [_vm._v("选择建筑破坏等级")]
                    )
                  : _vm._e(),
                _vm.tk_show1_num == 5
                  ? _c(
                      "text",
                      {
                        staticClass: ["notetk_tit"],
                        appendAsTree: true,
                        attrs: { append: "tree" }
                      },
                      [_vm._v("搜索")]
                    )
                  : _vm._e(),
                _c(
                  "text",
                  {
                    staticClass: ["notetk_time"],
                    appendAsTree: true,
                    attrs: { append: "tree" }
                  },
                  [_vm._v(_vm._s(_vm.note_time_t))]
                ),
                _c("input", {
                  staticClass: ["bz_int_tk"],
                  attrs: { type: "text", value: "", placeholder: "备注" }
                }),
                _vm.tk_show1_num == 1
                  ? _c("view", { staticClass: ["bj_list_box"] }, [
                      _c("view", { staticClass: ["bj_list_box_li_w"] }, [
                        _c(
                          "view",
                          {
                            staticClass: ["bj_list_box_li"],
                            class:
                              _vm.tk_show1_cur == 0 ? "bj_list_box_li_cur" : "",
                            on: {
                              click: function($event) {
                                _vm.tk_show1_cur = 0
                              }
                            }
                          },
                          [
                            _c("image", {
                              staticClass: ["bj_icon"],
                              attrs: {
                                src: "../../static/images/huozai.png",
                                mode: "aspectFit"
                              }
                            }),
                            _c(
                              "text",
                              {
                                staticClass: ["bj_icon_text"],
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [_vm._v("火灾")]
                            )
                          ]
                        ),
                        _c("image", {
                          staticClass: ["xz_ok"],
                          class: _vm.tk_show1_cur == 0 ? "xz_ok_cur" : "",
                          attrs: {
                            src: "../../static/images/xz_ok.png",
                            mode: ""
                          }
                        })
                      ]),
                      _c("view", { staticClass: ["bj_list_box_li_w"] }, [
                        _c(
                          "view",
                          {
                            staticClass: ["bj_list_box_li"],
                            class:
                              _vm.tk_show1_cur == 1 ? "bj_list_box_li_cur" : "",
                            on: {
                              click: function($event) {
                                _vm.tk_show1_cur = 1
                              }
                            }
                          },
                          [
                            _c("image", {
                              staticClass: ["bj_icon"],
                              attrs: {
                                src: "../../static/images/dianli.png",
                                mode: "aspectFit"
                              }
                            }),
                            _c(
                              "text",
                              {
                                staticClass: ["bj_icon_text"],
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [_vm._v("电力")]
                            )
                          ]
                        ),
                        _c("image", {
                          staticClass: ["xz_ok"],
                          class: _vm.tk_show1_cur == 1 ? "xz_ok_cur" : "",
                          attrs: {
                            src: "../../static/images/xz_ok.png",
                            mode: ""
                          }
                        })
                      ]),
                      _c("view", { staticClass: ["bj_list_box_li_w"] }, [
                        _c(
                          "view",
                          {
                            staticClass: ["bj_list_box_li"],
                            class:
                              _vm.tk_show1_cur == 2 ? "bj_list_box_li_cur" : "",
                            on: {
                              click: function($event) {
                                _vm.tk_show1_cur = 2
                              }
                            }
                          },
                          [
                            _c("image", {
                              staticClass: ["bj_icon"],
                              attrs: {
                                src: "../../static/images/luzhang.png",
                                mode: "aspectFit"
                              }
                            }),
                            _c(
                              "text",
                              {
                                staticClass: ["bj_icon_text"],
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [_vm._v("路障")]
                            )
                          ]
                        ),
                        _c("image", {
                          staticClass: ["xz_ok"],
                          class: _vm.tk_show1_cur == 2 ? "xz_ok_cur" : "",
                          attrs: {
                            src: "../../static/images/xz_ok.png",
                            mode: ""
                          }
                        })
                      ]),
                      _c("view", { staticClass: ["bj_list_box_li_w"] }, [
                        _c(
                          "view",
                          {
                            staticClass: ["bj_list_box_li"],
                            class:
                              _vm.tk_show1_cur == 3 ? "bj_list_box_li_cur" : "",
                            on: {
                              click: function($event) {
                                _vm.tk_show1_cur = 3
                              }
                            }
                          },
                          [
                            _c("image", {
                              staticClass: ["bj_icon"],
                              attrs: {
                                src: "../../static/images/chehuo.png",
                                mode: "aspectFit"
                              }
                            }),
                            _c(
                              "text",
                              {
                                staticClass: ["bj_icon_text"],
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [_vm._v("车祸")]
                            )
                          ]
                        ),
                        _c("image", {
                          staticClass: ["xz_ok"],
                          class: _vm.tk_show1_cur == 3 ? "xz_ok_cur" : "",
                          attrs: {
                            src: "../../static/images/xz_ok.png",
                            mode: ""
                          }
                        })
                      ]),
                      _c("view", { staticClass: ["bj_list_box_li_w"] }, [
                        _c(
                          "view",
                          {
                            staticClass: ["bj_list_box_li"],
                            class:
                              _vm.tk_show1_cur == 4 ? "bj_list_box_li_cur" : "",
                            on: {
                              click: function($event) {
                                _vm.tk_show1_cur = 4
                              }
                            }
                          },
                          [
                            _c("image", {
                              staticClass: ["bj_icon"],
                              attrs: {
                                src: "../../static/images/weixianwu.png",
                                mode: "aspectFit"
                              }
                            }),
                            _c(
                              "text",
                              {
                                staticClass: ["bj_icon_text"],
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [_vm._v("危化品")]
                            )
                          ]
                        ),
                        _c("image", {
                          staticClass: ["xz_ok"],
                          class: _vm.tk_show1_cur == 4 ? "xz_ok_cur" : "",
                          attrs: {
                            src: "../../static/images/xz_ok.png",
                            mode: ""
                          }
                        })
                      ]),
                      _c("view", { staticClass: ["bj_list_box_li_w"] }, [
                        _c(
                          "view",
                          {
                            staticClass: ["bj_list_box_li"],
                            class:
                              _vm.tk_show1_cur == 5 ? "bj_list_box_li_cur" : "",
                            on: {
                              click: function($event) {
                                _vm.tk_show1_cur = 5
                              }
                            }
                          },
                          [
                            _c("image", {
                              staticClass: ["bj_icon"],
                              attrs: {
                                src: "../../static/images/shuizai.png",
                                mode: "aspectFit"
                              }
                            }),
                            _c(
                              "text",
                              {
                                staticClass: ["bj_icon_text"],
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [_vm._v("水灾")]
                            )
                          ]
                        ),
                        _c("image", {
                          staticClass: ["xz_ok"],
                          class: _vm.tk_show1_cur == 5 ? "xz_ok_cur" : "",
                          attrs: {
                            src: "../../static/images/xz_ok.png",
                            mode: ""
                          }
                        })
                      ])
                    ])
                  : _vm._e(),
                _vm.tk_show1_num == 2
                  ? _c("view", { staticClass: ["bj_list_box"] }, [
                      _c(
                        "view",
                        {
                          staticClass: [
                            "bj_list_box_li_w",
                            "bj_list_box_li_w_ml"
                          ]
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: [
                                "bj_list_box_li",
                                "bj_list_box_li_ml"
                              ],
                              class:
                                _vm.tk_show1_cur == 0
                                  ? "bj_list_box_li_cur"
                                  : "",
                              on: {
                                click: function($event) {
                                  _vm.tk_show1_cur = 0
                                }
                              }
                            },
                            [
                              _c("image", {
                                staticClass: ["bj_icon"],
                                attrs: {
                                  src: "../../static/images/ml_zhihui.png",
                                  mode: "aspectFit"
                                }
                              }),
                              _c(
                                "text",
                                {
                                  staticClass: ["bj_icon_text"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [_vm._v("指挥")]
                              )
                            ]
                          ),
                          _c("image", {
                            staticClass: ["xz_ok"],
                            class: _vm.tk_show1_cur == 0 ? "xz_ok_cur" : "",
                            attrs: {
                              src: "../../static/images/xz_ok.png",
                              mode: ""
                            }
                          })
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: [
                            "bj_list_box_li_w",
                            "bj_list_box_li_w_ml"
                          ]
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: [
                                "bj_list_box_li",
                                "bj_list_box_li_ml"
                              ],
                              class:
                                _vm.tk_show1_cur == 1
                                  ? "bj_list_box_li_cur"
                                  : "",
                              on: {
                                click: function($event) {
                                  _vm.tk_show1_cur = 1
                                }
                              }
                            },
                            [
                              _c("image", {
                                staticClass: ["bj_icon"],
                                attrs: {
                                  src: "../../static/images/ml_jihe.png",
                                  mode: "aspectFit"
                                }
                              }),
                              _c(
                                "text",
                                {
                                  staticClass: ["bj_icon_text"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [_vm._v("集结")]
                              )
                            ]
                          ),
                          _c("image", {
                            staticClass: ["xz_ok"],
                            class: _vm.tk_show1_cur == 1 ? "xz_ok_cur" : "",
                            attrs: {
                              src: "../../static/images/xz_ok.png",
                              mode: ""
                            }
                          })
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: [
                            "bj_list_box_li_w",
                            "bj_list_box_li_w_ml"
                          ]
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: [
                                "bj_list_box_li",
                                "bj_list_box_li_ml"
                              ],
                              class:
                                _vm.tk_show1_cur == 2
                                  ? "bj_list_box_li_cur"
                                  : "",
                              on: {
                                click: function($event) {
                                  _vm.tk_show1_cur = 2
                                }
                              }
                            },
                            [
                              _c("image", {
                                staticClass: ["bj_icon"],
                                attrs: {
                                  src: "../../static/images/ml_yiliao.png",
                                  mode: "aspectFit"
                                }
                              }),
                              _c(
                                "text",
                                {
                                  staticClass: ["bj_icon_text"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [_vm._v("医疗")]
                              )
                            ]
                          ),
                          _c("image", {
                            staticClass: ["xz_ok"],
                            class: _vm.tk_show1_cur == 2 ? "xz_ok_cur" : "",
                            attrs: {
                              src: "../../static/images/xz_ok.png",
                              mode: ""
                            }
                          })
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: [
                            "bj_list_box_li_w",
                            "bj_list_box_li_w_ml"
                          ]
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: [
                                "bj_list_box_li",
                                "bj_list_box_li_ml"
                              ],
                              class:
                                _vm.tk_show1_cur == 3
                                  ? "bj_list_box_li_cur"
                                  : "",
                              on: {
                                click: function($event) {
                                  _vm.tk_show1_cur = 3
                                }
                              }
                            },
                            [
                              _c("image", {
                                staticClass: ["bj_icon"],
                                attrs: {
                                  src: "../../static/images/ml_tingche.png",
                                  mode: "aspectFit"
                                }
                              }),
                              _c(
                                "text",
                                {
                                  staticClass: ["bj_icon_text"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [_vm._v("停车")]
                              )
                            ]
                          ),
                          _c("image", {
                            staticClass: ["xz_ok"],
                            class: _vm.tk_show1_cur == 3 ? "xz_ok_cur" : "",
                            attrs: {
                              src: "../../static/images/xz_ok.png",
                              mode: ""
                            }
                          })
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm.tk_show1_num == 3
                  ? _c("view", { staticClass: ["bj_list_box"] }, [
                      _c(
                        "view",
                        {
                          staticClass: [
                            "bj_list_box_li_w",
                            "bj_list_box_li_w_sk"
                          ]
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: [
                                "bj_list_box_li",
                                "bj_list_box_li_sk"
                              ],
                              class:
                                _vm.tk_show1_cur == 0
                                  ? "bj_list_box_li_cur"
                                  : "",
                              on: {
                                click: function($event) {
                                  _vm.tk_show1_cur = 0
                                }
                              }
                            },
                            [
                              _c("image", {
                                staticClass: ["bj_icon"],
                                attrs: {
                                  src: "../../static/images/sk_1.png",
                                  mode: "aspectFit"
                                }
                              }),
                              _c(
                                "text",
                                {
                                  staticClass: ["bj_icon_text"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [_vm._v("潜在的受困者")]
                              )
                            ]
                          ),
                          _c("image", {
                            staticClass: ["xz_ok"],
                            class: _vm.tk_show1_cur == 0 ? "xz_ok_cur" : "",
                            attrs: {
                              src: "../../static/images/xz_ok.png",
                              mode: ""
                            }
                          })
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: [
                            "bj_list_box_li_w",
                            "bj_list_box_li_w_sk"
                          ]
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: [
                                "bj_list_box_li",
                                "bj_list_box_li_sk"
                              ],
                              class:
                                _vm.tk_show1_cur == 1
                                  ? "bj_list_box_li_cur"
                                  : "",
                              on: {
                                click: function($event) {
                                  _vm.tk_show1_cur = 1
                                }
                              }
                            },
                            [
                              _c("image", {
                                staticClass: ["bj_icon"],
                                attrs: {
                                  src: "../../static/images/sk_2.png",
                                  mode: "aspectFit"
                                }
                              }),
                              _c(
                                "text",
                                {
                                  staticClass: ["bj_icon_text"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [_vm._v("确认生还者")]
                              )
                            ]
                          ),
                          _c("image", {
                            staticClass: ["xz_ok"],
                            class: _vm.tk_show1_cur == 1 ? "xz_ok_cur" : "",
                            attrs: {
                              src: "../../static/images/xz_ok.png",
                              mode: ""
                            }
                          })
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: [
                            "bj_list_box_li_w",
                            "bj_list_box_li_w_sk"
                          ]
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: [
                                "bj_list_box_li",
                                "bj_list_box_li_sk"
                              ],
                              class:
                                _vm.tk_show1_cur == 2
                                  ? "bj_list_box_li_cur"
                                  : "",
                              on: {
                                click: function($event) {
                                  _vm.tk_show1_cur = 2
                                }
                              }
                            },
                            [
                              _c("image", {
                                staticClass: ["bj_icon"],
                                attrs: {
                                  src: "../../static/images/sk_3.png",
                                  mode: "aspectFit"
                                }
                              }),
                              _c(
                                "text",
                                {
                                  staticClass: ["bj_icon_text"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [_vm._v("确认遇难者")]
                              )
                            ]
                          ),
                          _c("image", {
                            staticClass: ["xz_ok"],
                            class: _vm.tk_show1_cur == 2 ? "xz_ok_cur" : "",
                            attrs: {
                              src: "../../static/images/xz_ok.png",
                              mode: ""
                            }
                          })
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: [
                            "bj_list_box_li_w",
                            "bj_list_box_li_w_sk"
                          ]
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: [
                                "bj_list_box_li",
                                "bj_list_box_li_sk"
                              ],
                              class:
                                _vm.tk_show1_cur == 3
                                  ? "bj_list_box_li_cur"
                                  : "",
                              on: {
                                click: function($event) {
                                  _vm.tk_show1_cur = 3
                                }
                              }
                            },
                            [
                              _c("image", {
                                staticClass: ["bj_icon"],
                                attrs: {
                                  src: "../../static/images/sk_4.png",
                                  mode: "aspectFit"
                                }
                              }),
                              _c(
                                "text",
                                {
                                  staticClass: ["bj_icon_text"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [_vm._v("移除生还者")]
                              )
                            ]
                          ),
                          _c("image", {
                            staticClass: ["xz_ok"],
                            class: _vm.tk_show1_cur == 3 ? "xz_ok_cur" : "",
                            attrs: {
                              src: "../../static/images/xz_ok.png",
                              mode: ""
                            }
                          })
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: [
                            "bj_list_box_li_w",
                            "bj_list_box_li_w_sk"
                          ]
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: [
                                "bj_list_box_li",
                                "bj_list_box_li_sk"
                              ],
                              class:
                                _vm.tk_show1_cur == 4
                                  ? "bj_list_box_li_cur"
                                  : "",
                              on: {
                                click: function($event) {
                                  _vm.tk_show1_cur = 4
                                }
                              }
                            },
                            [
                              _c("image", {
                                staticClass: ["bj_icon"],
                                attrs: {
                                  src: "../../static/images/sk_5.png",
                                  mode: "aspectFit"
                                }
                              }),
                              _c(
                                "text",
                                {
                                  staticClass: ["bj_icon_text"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [_vm._v("移除遇难者")]
                              )
                            ]
                          ),
                          _c("image", {
                            staticClass: ["xz_ok"],
                            class: _vm.tk_show1_cur == 4 ? "xz_ok_cur" : "",
                            attrs: {
                              src: "../../static/images/xz_ok.png",
                              mode: ""
                            }
                          })
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: [
                            "bj_list_box_li_w",
                            "bj_list_box_li_w_sk"
                          ]
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: [
                                "bj_list_box_li",
                                "bj_list_box_li_sk"
                              ],
                              class:
                                _vm.tk_show1_cur == 5
                                  ? "bj_list_box_li_cur"
                                  : "",
                              on: {
                                click: function($event) {
                                  _vm.tk_show1_cur = 5
                                }
                              }
                            },
                            [
                              _c("image", {
                                staticClass: ["bj_icon"],
                                attrs: {
                                  src: "../../static/images/sk_6.png",
                                  mode: "aspectFit"
                                }
                              }),
                              _c(
                                "text",
                                {
                                  staticClass: ["bj_icon_text"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [_vm._v("最后一次看到")]
                              )
                            ]
                          ),
                          _c("image", {
                            staticClass: ["xz_ok"],
                            class: _vm.tk_show1_cur == 5 ? "xz_ok_cur" : "",
                            attrs: {
                              src: "../../static/images/xz_ok.png",
                              mode: ""
                            }
                          })
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm.tk_show1_num == 4
                  ? _c("view", { staticClass: ["bj_list_box"] }, [
                      _c("view", { staticClass: ["bj_list_box_li_w"] }, [
                        _c(
                          "view",
                          {
                            staticClass: ["bj_list_box_li"],
                            class:
                              _vm.tk_show1_cur == 0 ? "bj_list_box_li_cur" : "",
                            on: {
                              click: function($event) {
                                _vm.tk_show1_cur = 0
                              }
                            }
                          },
                          [
                            _c("image", {
                              staticClass: ["bj_icon"],
                              attrs: {
                                src: "../../static/images/ph_1.png",
                                mode: "aspectFit"
                              }
                            }),
                            _c(
                              "text",
                              {
                                staticClass: ["bj_icon_text"],
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [_vm._v("低风险")]
                            )
                          ]
                        ),
                        _c("image", {
                          staticClass: ["xz_ok"],
                          class: _vm.tk_show1_cur == 0 ? "xz_ok_cur" : "",
                          attrs: {
                            src: "../../static/images/xz_ok.png",
                            mode: ""
                          }
                        })
                      ]),
                      _c("view", { staticClass: ["bj_list_box_li_w"] }, [
                        _c(
                          "view",
                          {
                            staticClass: ["bj_list_box_li"],
                            class:
                              _vm.tk_show1_cur == 1 ? "bj_list_box_li_cur" : "",
                            on: {
                              click: function($event) {
                                _vm.tk_show1_cur = 1
                              }
                            }
                          },
                          [
                            _c("image", {
                              staticClass: ["bj_icon"],
                              attrs: {
                                src: "../../static/images/ph_2.png",
                                mode: "aspectFit"
                              }
                            }),
                            _c(
                              "text",
                              {
                                staticClass: ["bj_icon_text"],
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [_vm._v("中风险")]
                            )
                          ]
                        ),
                        _c("image", {
                          staticClass: ["xz_ok"],
                          class: _vm.tk_show1_cur == 1 ? "xz_ok_cur" : "",
                          attrs: {
                            src: "../../static/images/xz_ok.png",
                            mode: ""
                          }
                        })
                      ]),
                      _c("view", { staticClass: ["bj_list_box_li_w"] }, [
                        _c(
                          "view",
                          {
                            staticClass: ["bj_list_box_li"],
                            class:
                              _vm.tk_show1_cur == 2 ? "bj_list_box_li_cur" : "",
                            on: {
                              click: function($event) {
                                _vm.tk_show1_cur = 2
                              }
                            }
                          },
                          [
                            _c("image", {
                              staticClass: ["bj_icon"],
                              attrs: {
                                src: "../../static/images/ph_3.png",
                                mode: "aspectFit"
                              }
                            }),
                            _c(
                              "text",
                              {
                                staticClass: ["bj_icon_text"],
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [_vm._v("高风险")]
                            )
                          ]
                        ),
                        _c("image", {
                          staticClass: ["xz_ok"],
                          class: _vm.tk_show1_cur == 2 ? "xz_ok_cur" : "",
                          attrs: {
                            src: "../../static/images/xz_ok.png",
                            mode: ""
                          }
                        })
                      ])
                    ])
                  : _vm._e(),
                _c(
                  "view",
                  {
                    staticClass: ["tkset_btn"],
                    attrs: { dataUrl: "/pages/map_dw/map_dw?type=fwsm" },
                    on: { click: _vm.jump_fuc }
                  },
                  [
                    _c(
                      "text",
                      {
                        staticStyle: { fontSize: "28px", color: "#fff" },
                        appendAsTree: true,
                        attrs: { append: "tree" }
                      },
                      [_vm._v("设置位置")]
                    )
                  ]
                )
              ]),
              _c(
                "text",
                {
                  staticClass: ["iconfont", "iconguanbi"],
                  staticStyle: { fontSize: "50px", color: "#fff" },
                  appendAsTree: true,
                  attrs: { append: "tree" },
                  on: {
                    click: function($event) {
                      _vm.tk_show1 = false
                    }
                  }
                },
                [_vm._v("")]
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 22 */
/*!**********************************************************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/pages/map/map.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--3-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./map.nvue?vue&type=script&lang=js&mpType=page */ 23);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXViLENBQWdCLG1kQUFHLEVBQUMiLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMy0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTMtMCEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/phpStudy/WWW/71_jiushengquan/pages/map/map.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 8));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 10));\nvar _service = _interopRequireDefault(__webpack_require__(/*! ../../service.js */ 11));\nvar _vuex = __webpack_require__(/*! vuex */ 13);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n\n\nvar that, mapContext, mapEndloading;\nvar djs_fuc;\nvar that;\n\nvar domModule = weex.requireModule('dom');\ndomModule.addRule('fontFace', {\n  'fontFamily': \"iconfont\",\n  'src': \"url('../../static/fonts/iconfont.ttf')\" });var _default =\n\n{\n  data: function data() {\n    return {\n      latitude: 41.638883,\n      longitude: 123.499625,\n      mapWidth: 0, //地图区域宽度\n      mapHeight: 0, //地图区域高度\n      centerTop: 0, //中心图片坐标\n      centerLeft: 0, //中心图片坐标\n      translateY: 165,\n      markersArr: [{\n        id: 1,\n        latitude: 39.909,\n        longitude: 116.39742,\n        iconPath: '/static/images/huozai.png' },\n      {\n        id: 2,\n        latitude: 39.919,\n        longitude: 116.39742,\n        iconPath: '/static/images/huozai.png' },\n      {\n        id: 3,\n        \"latitude\": 39.975643747304986,\n        \"longitude\": 116.314328,\n        \"iconPath\": \"/static/images/shuizai.png\" },\n      { id: 4,\n        \"latitude\": 39.94254855057598,\n        \"longitude\": 116.314328,\n        \"iconPath\": \"/static/images/chehuo.png\" },\n      { id: 5,\n        \"latitude\": 39.95254855057598,\n        \"longitude\": 116.314328,\n        \"iconPath\": \"/static/images/luzhang.png\" },\n      { id: 6,\n        \"latitude\": 39.95554855057598,\n        \"longitude\": 116.324328,\n        \"iconPath\": \"/static/images/dianli.png\" }],\n      //覆盖物\n      mapControls: [],\n      mapControls1: [{\n        id: \"1\",\n        position: {\n          left: 375 - 15,\n          top: (uni.getSystemInfoSync().windowHeight - 45 - uni.getSystemInfoSync().statusBarHeight) / 2 - 49,\n          width: 30,\n          height: 49 },\n\n        iconPath: \"/static/images/zuobiao.png\",\n        clickable: false }],\n      //地图中的控件\n      bj_time: 10,\n      baojing: false,\n\n\n\n\n      tk_show: false,\n      tk_show1: false,\n      tk_show1_num: 0, //标记1级分类\n      note_time_t: '',\n      tk_show1_cur: -1, //标记2级分类\n\n      tk_show_sx: false, //筛选\n      tk_show_sx_cur: 0 //筛选分类\n    };\n  },\n  computed: _objectSpread({},\n  (0, _vuex.mapState)(['hasLogin', 'forcedLogin', 'userName', 'loginDatas'])),\n\n  onLoad: function onLoad() {\n    that = this;\n\n    this.getLocation();\n\n\n\n\n    /*const innerAudioContext = uni.createInnerAudioContext();\n                        innerAudioContext.autoplay = true;\n                        innerAudioContext.src = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';\n                        innerAudioContext.onPlay(() => {\n                          console.log('开始播放');\n                        });\n                        innerAudioContext.onError((res) => {\n                          console.log(res.errMsg);\n                          console.log(res.errCode);\n                        });*/\n  },\n  mounted: function mounted() {\n    that.mapWidth = 750;\n    that.sHeight = uni.getSystemInfoSync().statusBarHeight;\n    // that.mapHeight = (uni.getSystemInfoSync().windowHeight  - uni.getSystemInfoSync().statusBarHeight) - 246;\n    that.mapHeight = uni.getSystemInfoSync().windowHeight * 2 - 396;\n    __f__(\"log\", that.mapHeight, \" at pages/map/map.nvue:364\");\n    __f__(\"log\", uni.getSystemInfoSync().screenHeight, \" at pages/map/map.nvue:365\");\n    var query = uni.createSelectorQuery().in(this);\n    query.select('#map').boundingClientRect(function (data) {\n      var _navHeight = data.height;\n      __f__(\"log\", '_navHeight------------------------------------>', \" at pages/map/map.nvue:369\");\n      __f__(\"log\", _navHeight, \" at pages/map/map.nvue:370\");\n      // _navHeight=_navHeight+uni.getSystemInfoSync().statusBarHeight\n      _navHeight = _navHeight / 2;\n      _navHeight = _navHeight.toFixed(0);\n\n      __f__(\"log\", typeof _navHeight, \" at pages/map/map.nvue:375\");\n      __f__(\"log\", typeof 710, \" at pages/map/map.nvue:376\");\n      var sss = [\n      {\n        id: \"1\",\n        position: {\n          left: 750 / 2 - 28,\n          // top: _navHeight - 68,\n          top: _navHeight,\n          width: 55,\n          height: 68 },\n\n        iconPath: \"/static/images/huozai.png\",\n        clickable: false }];\n\n\n      that.setHeight(sss);\n      // Vue.set(that.mapControls[0].position,'top',sss)\n      __f__(\"log\", that.mapControls, \" at pages/map/map.nvue:393\");\n    }).exec();\n\n  },\n  onShow: function onShow() {\n\n\n  },\n  methods: _objectSpread(_objectSpread({},\n  (0, _vuex.mapMutations)(['setAddress', 'setHeight'])), {}, {\n    test: function test() {},\n    open_tk: function open_tk(num) {\n      that.tk_show = false;\n      that.tk_show1 = true;\n      that.tk_show1_num = num;\n\n      var now_time = new Date();\n      var now_year = now_time.getFullYear();\n      var now_month = now_time.getMonth() + 1;\n      var now_date = now_time.getDate();\n      var hour = now_time.getHours();\n      var minute = now_time.getMinutes();\n      if (now_month < 10) {\n        now_month = '0' + now_month * 1;\n      }\n      if (now_date < 10) {\n        now_date = '0' + now_date * 1;\n      }\n      if (hour < 10) {\n        hour = '0' + hour * 1;\n      }\n      if (minute < 10) {\n        minute = '0' + minute * 1;\n      }\n      that.note_time_t = now_year + '-' + now_month + '-' + now_date + ' ' + hour + ':' + minute;\n    },\n    shai_tk: function shai_tk(num) {\n      that.tk_show_sx_cur = num;\n      uni.showLoading({\n        mask: true,\n        title: '正在筛选...' });\n\n      setTimeout(function () {\n        that.tk_show_sx = false;\n        uni.hideLoading();\n      }, 1000);\n    },\n    baojing_fuc: function baojing_fuc() {\n      var that = this;\n      this.baojing = true;\n      that.bj_time = 10;\n      djs_fuc = setInterval(function () {\n        if (that.bj_time == 0) {\n          // uni.showToast({\n          // \ticon:'none',\n          // \ttitle:'警报操作'\n          // })\n          __f__(\"log\", 0, \" at pages/map/map.nvue:450\");\n          clearInterval(djs_fuc);\n          that.bj_time = '!';\n        } else {\n          that.bj_time--;\n        }\n        // console.log(that.djs())\n      }, 1000);\n    },\n    baojing_del: function baojing_del() {\n      var that = this;\n      clearInterval(djs_fuc);\n      this.bj_time = 10;\n      this.baojing = false;\n    },\n    shuaxin: function shuaxin() {\n      uni.showToast({\n        icon: 'none',\n        title: '正在刷新' });\n\n    },\n    //地图点击事件\n    markertap: function markertap(e) {\n      var _id = e.detail.markerId,\n      _index;\n      __f__(\"log\", '_id-------------------------------------->', \" at pages/map/map.nvue:475\");\n      __f__(\"log\", _id, \" at pages/map/map.nvue:476\");\n      return;\n      var _list = that.markersArr;\n      for (var i = 0; i < _list.length; i++) {\n        if (_list[i].id == _id) {\n          _index = i;\n          that.current = i;\n          that.openAnimation();\n          break;\n        }\n      };\n    },\n    //移动地图结束\n    mapChange: function mapChange(e) {\n      __f__(\"log\", e, \" at pages/map/map.nvue:490\");\n      if (e) {\n        return;\n      }\n\n      if (mapEndloading) {\n        return;\n      }\n      mapEndloading = true;\n      setTimeout(function () {//防抖\n        mapEndloading = false;\n      }, 500);\n      if (e.detail.type == 'end' || e.type == 'end') {\n        //中心区域左边\n        mapContext.getCenterLocation({\n          success: function success(res) {\n            that.mapEnd(res);\n          },\n          fail: function fail(err) {\n            __f__(\"log\", err, \" at pages/map/map.nvue:509\");\n          } });\n\n      }\n      return;\n      if (uni.getSystemInfoSync().platform == 'ios') {\n        if (e.detail.type == 'end') {\n          //中心区域左边\n          mapContext.getCenterLocation({\n            success: function success(res) {\n              that.mapEnd(res);\n            },\n            fail: function fail(err) {\n              __f__(\"log\", err, \" at pages/map/map.nvue:522\");\n            } });\n\n        }\n      } else {\n        //地图移动结束\n        __f__(\"log\", e, \" at pages/map/map.nvue:528\");\n        if (e.type == 'end') {\n          //中心区域左边\n          mapContext.getCenterLocation({\n            success: function success(res) {\n\n              that.mapEnd(res);\n            },\n            fail: function fail(err) {\n              __f__(\"log\", err, \" at pages/map/map.nvue:537\");\n            } });\n\n          //缩放视野展示所有经纬度\n          // mapContext.getCenterLocation({\n          // \tsuccess(res) {\n          // \t\tconsole.log(res);\n          // \t},\n          // \tfail(err) {\n          // \t\tconsole.log(err)\n          // \t}\n          // })\n          //获取当前地图的视野范围\n          mapContext.getRegion({\n            success: function success(res) {\n              // console.log(res);\n            },\n            fail: function fail(err) {\n              __f__(\"log\", err, \" at pages/map/map.nvue:555\");\n            } });\n\n          //获取当前地图的缩放级别\n          mapContext.getScale({\n            success: function success(res) {\n              // console.log(res);\n            },\n            fail: function fail(err) {\n              __f__(\"log\", err, \" at pages/map/map.nvue:564\");\n            } });\n\n        }\n      }\n\n\n    },\n    getList: function getList() {},\n    //地图移动\n    mapEnd: function mapEnd(res) {\n      __f__(\"log\", '加载数据', \" at pages/map/map.nvue:575\");\n      if (res) {\n        that.longitude = res.longitude;\n        that.latitude = res.latitude;\n      }\n\n      //原数据\n      that.list = [];\n      that.pageIndex = 1;\n      that.chaceList = [];\n      // 覆盖物数据\n      that.markersArr = [];\n      that.originalList = [];\n      that.getList();\n\n    },\n    getLocation: function getLocation(type) {\n      uni.getLocation({\n        type: 'wgs84',\n        // type: 'gcj02',\n        success: function success(res) {\n          that.longitude = res.longitude;\n          that.latitude = res.latitude;\n          that.pageIndex = 1;\n          // if (type != 'back') {\n\n          that.setAddress(res);\n          setTimeout(function () {\n            that.getList();\n          }, 1000);\n          // }\n\n        },\n        fail: function fail(err) {\n          if (uni.getSystemInfoSync().platform == 'ios') {\n            if (!permision.judgeIosPermission('location')) {\n              uni.showModal({\n                title: '提示',\n                content: '需要打开定位权限',\n                success: function success(res) {\n                  if (res.confirm) {\n                    that.isToSetting = true;\n                    permision.gotoAppPermissionSetting();\n                  }\n                } });\n\n            }\n          } else {\n            that.requestAndroidPermission('android.permission.ACCESS_FINE_LOCATION');\n          }\n\n        } });\n\n    },\n    requestAndroidPermission: function requestAndroidPermission(permisionID) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var result, strStatus;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (\n                  permision.requestAndroidPermission(permisionID));case 2:result = _context.sent;\n\n                if (result == 1) {\n                  strStatus = \"已获得授权\";\n                } else if (result == 0) {\n                  strStatus = \"未获得授权\";\n                } else {\n                  strStatus = \"被永久拒绝权限\";\n                }\n                uni.showModal({\n                  title: '提示',\n                  content: '需要打开定位权限',\n                  success: function success(res) {\n                    if (res.confirm) {\n                      that.isToSetting = true;\n                      permision.gotoAppPermissionSetting();\n                    }\n                  } });case 5:case \"end\":return _context.stop();}}}, _callee);}))();\n\n    },\n    getimg: function getimg(img) {\n      return _service.default.getimg(img);\n    },\n    jump_fuc: function jump_fuc(e) {\n      if (that.tk_show1_cur == -1) {\n        uni.showToast({\n          icon: 'none',\n          title: '请选择类型' });\n\n        return;\n      }\n      that.tk_show1 = false;\n      uni.navigateTo({\n        url: '/pages/map_dw/map_dw?tk_show1_cur=' + that.tk_show1_cur + '&tk_show1_num=' + that.tk_show1_num });\n\n    },\n    jump: function jump(e) {\n      var that = this;\n\n      if (that.btn_kg == 1) {\n        return;\n      } else {\n        that.btn_kg = 1;\n        setTimeout(function () {\n          that.btn_kg = 0;\n        }, 1000);\n      }\n\n      _service.default.jump(e);\n    } }) };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbWFwL21hcC5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStQQTtBQUNBO0FBQ0EsZ0Q7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQURBO0FBRUEsaURBRkEsSTs7QUFJQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUEsMkJBRkE7QUFHQSxpQkFIQSxFQUdBO0FBQ0Esa0JBSkEsRUFJQTtBQUNBLGtCQUxBLEVBS0E7QUFDQSxtQkFOQSxFQU1BO0FBQ0EscUJBUEE7QUFRQTtBQUNBLGFBREE7QUFFQSx3QkFGQTtBQUdBLDRCQUhBO0FBSUEsNkNBSkE7QUFLQTtBQUNBLGFBREE7QUFFQSx3QkFGQTtBQUdBLDRCQUhBO0FBSUEsNkNBSkEsRUFMQTtBQVVBO0FBQ0EsYUFEQTtBQUVBLHNDQUZBO0FBR0EsK0JBSEE7QUFJQSxnREFKQSxFQVZBO0FBZUE7QUFDQSxxQ0FEQTtBQUVBLCtCQUZBO0FBR0EsK0NBSEEsRUFmQTtBQW1CQTtBQUNBLHFDQURBO0FBRUEsK0JBRkE7QUFHQSxnREFIQSxFQW5CQTtBQXVCQTtBQUNBLHFDQURBO0FBRUEsK0JBRkE7QUFHQSwrQ0FIQSxFQXZCQSxDQVJBO0FBbUNBO0FBQ0EscUJBcENBO0FBcUNBO0FBQ0EsZUFEQTtBQUVBO0FBQ0Esd0JBREE7QUFFQSw2R0FGQTtBQUdBLG1CQUhBO0FBSUEs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Q0E7QUFDQTtBQUNBLDRHQURBOztBQUdBLEtBeFFBO0FBeVFBLFFBelFBLGdCQXlRQSxDQXpRQSxFQXlRQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLEVBRUEsSUFGQTtBQUdBOztBQUVBO0FBQ0EsS0F0UkEsR0FsSUEsRSIsImZpbGUiOiIyMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cIm1pbmgxMDBcIj5cclxuXHRcdDxtYXAgY2xhc3M9XCJpbmRleF9tYXBcIiBpZD1cIm1hcFwiIG5hbWU9XCJtYXBcIiA6c2hvdy1jb21wYXNzPVwiZmFsc2VcIiA6c3R5bGU9XCJ7aGVpZ2h0OiBtYXBIZWlnaHQrJ3B4J31cIiA6ZW5hYmxlLXJvdGF0ZT1cImZhbHNlXCJcclxuXHRcdCA6bGF0aXR1ZGU9XCJsYXRpdHVkZVwiIDpsb25naXR1ZGU9XCJsb25naXR1ZGVcIiA6bWFya2Vycz1cIm1hcmtlcnNBcnJcIiBAbWFya2VydGFwPVwibWFya2VydGFwXCIgOmNvbnRyb2xzPVwibWFwQ29udHJvbHNcIlxyXG5cdFx0IEByZWdpb25jaGFuZ2U9J21hcENoYW5nZSc+XHJcblx0XHQgPCEtLSDorabmiqXnu4Tku7YgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfYm94XCI+XHJcblx0XHRcdFx0PGltYWdlIEBjbGljaz1cImJhb2ppbmdfZnVjXCIgY2xhc3M9XCJial9ib3hfaW1nXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9iYW9qaW5nMS5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwiYmFvamluZ1wiIEBjbGljaz1cImJhb2ppbmdfZGVsXCIgY2xhc3M9XCJial9tYWluXCI+XHJcblxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9jbnVtXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfY251bV8xXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9jbnVtX251bVwiPnt7YmpfdGltZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX3RpcFwiIHN0eWxlPVwiY29sb3I6ICNmZmY7XCI+MTDnp5Lpkp/lhoXop6bmkbjlsY/luZXlj5bmtog8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0g6K2m5oql57uE5Lu2IC0tPlxyXG5cclxuXHRcdFx0PCEtLSDmoIforrDlvLnmoYYgLS0+XHJcblx0XHRcdDx2aWV3IHYtaWY9XCJ0a19zaG93XCIgY2xhc3M9XCJ0a19wb3BvcFwiIEB0b3VjaG1vdmUuc3RvcC5wcmV2ZW50PSd0ZXN0Jz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRrX21haW5cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkX2JqXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkX2JqX3RleHRcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC13ZWlnaHQ6IGJvbGQ7XCI+5re75Yqg5qCH6K6wPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFkZF9ial90ZXh0XCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial90eXBlXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfdHlwZV9saSBial90eXBlX2xpX2N1clwiIEBjbGljaz1cIm9wZW5fdGsoMSlcIj48dGV4dCBzdHlsZT1cImNvbG9yOiAjZmZmO1wiPuWNseWuszwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfdHlwZV9saSBial90eXBlX2xpX2N1clwiIEBjbGljaz1cIm9wZW5fdGsoMilcIj48dGV4dCBzdHlsZT1cImNvbG9yOiAjZmZmO1wiPuWRveS7pDwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfdHlwZV9saSBial90eXBlX2xpX2N1clwiIEBjbGljaz1cIm9wZW5fdGsoMylcIj48dGV4dCBzdHlsZT1cImNvbG9yOiAjZmZmO1wiPuWPl+WbsOiAhTwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfdHlwZV9saSBial90eXBlX2xpX2N1clwiIEBjbGljaz1cIm9wZW5fdGsoNClcIj48dGV4dCBzdHlsZT1cImNvbG9yOiAjZmZmO1wiPuW7uuetkeegtOWdjzwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfdHlwZV9saSBial90eXBlX2xpX2N1clwiIEBjbGljaz1cIm9wZW5fdGsoNSlcIj48dGV4dCBzdHlsZT1cImNvbG9yOiAjZmZmO1wiPuaQnOe0ojwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0gPHRleHQgQGNsaWNrPVwidGtfc2hvdz1mYWxzZVwiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbmd1YW5iaVwiIHN0eWxlPVwiZm9udC1zaXplOiA1MHVweDtjb2xvcjogI2ZmZjtcIj48L3RleHQ+IC0tPlxyXG5cdFx0XHRcdDx0ZXh0IEBjbGljaz1cInRrX3Nob3c9ZmFsc2VcIiBjbGFzcz1cImljb25mb250IGljb25ndWFuYmlcIiBzdHlsZT1cImZvbnQtc2l6ZTogNTBweDtjb2xvcjogI2ZmZjtcIj4mI3hlNjIxOzwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOetm+mAieW8ueahhiAtLT5cclxuXHRcdFx0PHZpZXcgdi1pZj1cInRrX3Nob3dfc3hcIiBjbGFzcz1cInRrX3BvcG9wXCIgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ9J3Rlc3QnPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGtfbWFpblwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRfYmpcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRfYmpfdGV4dFwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJmb250LXdlaWdodDogYm9sZDtcIj7nrZvpgIk8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkX2JqX3RleHRcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX3R5cGVcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial90eXBlX2xpXCIgOmNsYXNzPVwidGtfc2hvd19zeF9jdXI9PTA/J2JqX3R5cGVfbGlfY3VyJzonJ1wiIEBjbGljaz1cInNoYWlfdGsoMClcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX3R5cGVfbGlfdGV4dFwiIDpjbGFzcz1cInRrX3Nob3dfc3hfY3VyPT0wPydial90eXBlX2xpX3RleHRfY3VyJzonJ1wiPuaJgOaciTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX3R5cGVfbGlcIiA6Y2xhc3M9XCJ0a19zaG93X3N4X2N1cj09MT8nYmpfdHlwZV9saV9jdXInOicnXCIgQGNsaWNrPVwic2hhaV90aygxKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfdHlwZV9saV90ZXh0XCIgOmNsYXNzPVwidGtfc2hvd19zeF9jdXI9PTE/J2JqX3R5cGVfbGlfdGV4dF9jdXInOicnXCI+5LuF6Ieq5bexPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfdHlwZV9saVwiIDpjbGFzcz1cInRrX3Nob3dfc3hfY3VyPT0yPydial90eXBlX2xpX2N1cic6JydcIiBAY2xpY2s9XCJzaGFpX3RrKDIpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial90eXBlX2xpX3RleHRcIiA6Y2xhc3M9XCJ0a19zaG93X3N4X2N1cj09Mj8nYmpfdHlwZV9saV90ZXh0X2N1cic6JydcIj7oiKrngrk8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSA8dGV4dCBAY2xpY2s9XCJ0a19zaG93PWZhbHNlXCIgY2xhc3M9XCJpY29uZm9udCBpY29uZ3VhbmJpXCIgc3R5bGU9XCJmb250LXNpemU6IDUwdXB4O2NvbG9yOiAjZmZmO1wiPjwvdGV4dD4gLS0+XHJcblx0XHRcdFx0PHRleHQgQGNsaWNrPVwidGtfc2hvd19zeD1mYWxzZVwiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbmd1YW5iaVwiIHN0eWxlPVwiZm9udC1zaXplOiA1MHB4O2NvbG9yOiAjZmZmO1wiPiYjeGU2MjE7PC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0PC9tYXA+XHJcblxyXG5cdFx0PHZpZXcgY2xhc3M9XCJtYXBfYnRuX2xpc3RcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJtYXBfYnRuX2xpXCIgQGNsaWNrPVwic2h1YXhpblwiPlxyXG5cdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm1hcF9idG5fbGlfaW1hZ2VcIiA6c3JjPVwiZ2V0aW1nKCcvc3RhdGljL2ltYWdlcy9pbmRleF9idG4xLnBuZycpXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHRleHQ+5Yi35pawPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibWFwX2J0bl9saVwiIEBjbGljaz1cInRrX3Nob3c9dHJ1ZVwiPlxyXG5cdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm1hcF9idG5fbGlfaW1hZ2VcIiA6c3JjPVwiZ2V0aW1nKCcvc3RhdGljL2ltYWdlcy9pbmRleF9idG4yLnBuZycpXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHRleHQ+5qCH6K6wPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibWFwX2J0bl9saVwiPlxyXG5cdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm1hcF9idG5fbGlfaW1hZ2VcIiA6c3JjPVwiZ2V0aW1nKCcvc3RhdGljL2ltYWdlcy9pbmRleF9idG4zLnBuZycpXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHRleHQ+5aSp5rCUPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibWFwX2J0bl9saVwiIEBjbGljaz1cInRrX3Nob3dfc3g9dHJ1ZVwiPlxyXG5cdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm1hcF9idG5fbGlfaW1hZ2VcIiA6c3JjPVwiZ2V0aW1nKCcvc3RhdGljL2ltYWdlcy9pbmRleF9idG40LnBuZycpXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHRleHQ+562b6YCJPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOagh+iusCAtLT5cclxuXHRcdDx2aWV3Pjwvdmlldz5cclxuXHRcdDwhLS0g5Y2x6Zmp5by55qGGIC0tPlxyXG5cdFx0PHZpZXcgdi1pZj1cInRrX3Nob3cxXCIgY2xhc3M9XCJ0a19wb3BvcFwiIEB0b3VjaG1vdmUuc3RvcC5wcmV2ZW50PSd0ZXN0Jz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0a19tYWluXCI+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYWRkX2JqX2ljb25cIiA6c3JjPVwiZ2V0aW1nKCcvc3RhdGljL2ltYWdlcy9hZGRfYmpfaWNvbi5wbmcnKVwiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDx0ZXh0IHYtaWY9XCJ0a19zaG93MV9udW09PTFcIiBjbGFzcz1cIm5vdGV0a190aXRcIj7pgInmi6nljbHpmannsbvlnos8L3RleHQ+XHJcblx0XHRcdFx0PHRleHQgdi1pZj1cInRrX3Nob3cxX251bT09MlwiIGNsYXNzPVwibm90ZXRrX3RpdFwiPumAieaLqeWRveS7pOexu+WeizwvdGV4dD5cclxuXHRcdFx0XHQ8dGV4dCB2LWlmPVwidGtfc2hvdzFfbnVtPT0zXCIgY2xhc3M9XCJub3RldGtfdGl0XCI+5Y+X5Zuw6ICFPC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0IHYtaWY9XCJ0a19zaG93MV9udW09PTRcIiBjbGFzcz1cIm5vdGV0a190aXRcIj7pgInmi6nlu7rnrZHnoLTlnY/nrYnnuqc8L3RleHQ+XHJcblx0XHRcdFx0PHRleHQgdi1pZj1cInRrX3Nob3cxX251bT09NVwiIGNsYXNzPVwibm90ZXRrX3RpdFwiPuaQnOe0ojwvdGV4dD5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm5vdGV0a190aW1lXCI+e3tub3RlX3RpbWVfdH19PC90ZXh0PlxyXG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cImJ6X2ludF90a1wiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIuWkh+azqFwiIC8+XHJcblx0XHRcdFx0PHZpZXcgIHYtaWY9XCJ0a19zaG93MV9udW09PTFcIiBjbGFzcz1cImJqX2xpc3RfYm94XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpX3dcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saVwiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09MD8nYmpfbGlzdF9ib3hfbGlfY3VyJzonJ1wiIEBjbGljaz1cInRrX3Nob3cxX2N1cj0wXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYmpfaWNvbiBcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2h1b3phaS5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2ljb25fdGV4dFwiPueBq+eBvjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ4el9va1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09MD8neHpfb2tfY3VyJzonJ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMveHpfb2sucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpX3dcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saVwiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09MT8nYmpfbGlzdF9ib3hfbGlfY3VyJzonJ1wiIEBjbGljaz1cInRrX3Nob3cxX2N1cj0xXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYmpfaWNvblwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvZGlhbmxpLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfaWNvbl90ZXh0XCI+55S15YqbPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInh6X29rXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0xPyd4el9va19jdXInOicnXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy94el9vay5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlfd1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0yPydial9saXN0X2JveF9saV9jdXInOicnXCIgQGNsaWNrPVwidGtfc2hvdzFfY3VyPTJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJial9pY29uXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9sdXpoYW5nLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfaWNvbl90ZXh0XCI+6Lev6ZqcPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInh6X29rXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0yPyd4el9va19jdXInOicnXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy94el9vay5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlfd1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0zPydial9saXN0X2JveF9saV9jdXInOicnXCIgQGNsaWNrPVwidGtfc2hvdzFfY3VyPTNcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJial9pY29uXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9jaGVodW8ucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9pY29uX3RleHRcIj7ovabnpbg8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwieHpfb2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTM/J3h6X29rX2N1cic6JydcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3h6X29rLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saV93XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTQ/J2JqX2xpc3RfYm94X2xpX2N1cic6JydcIiBAY2xpY2s9XCJ0a19zaG93MV9jdXI9NFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJqX2ljb25cIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3dlaXhpYW53dS5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2ljb25fdGV4dFwiPuWNseWMluWTgTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ4el9va1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09ND8neHpfb2tfY3VyJzonJ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMveHpfb2sucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpX3dcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saVwiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09NT8nYmpfbGlzdF9ib3hfbGlfY3VyJzonJ1wiIEBjbGljaz1cInRrX3Nob3cxX2N1cj01XCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYmpfaWNvblwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvc2h1aXphaS5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2ljb25fdGV4dFwiPuawtOeBvjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ4el9va1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09NT8neHpfb2tfY3VyJzonJ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMveHpfb2sucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgIHYtaWY9XCJ0a19zaG93MV9udW09PTJcIiBjbGFzcz1cImJqX2xpc3RfYm94XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpX3cgYmpfbGlzdF9ib3hfbGlfd19tbFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpIGJqX2xpc3RfYm94X2xpX21sXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0wPydial9saXN0X2JveF9saV9jdXInOicnXCIgQGNsaWNrPVwidGtfc2hvdzFfY3VyPTBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJial9pY29uIFwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbWxfemhpaHVpLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfaWNvbl90ZXh0XCI+5oyH5oylPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInh6X29rXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0wPyd4el9va19jdXInOicnXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy94el9vay5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlfdyBial9saXN0X2JveF9saV93X21sXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGkgYmpfbGlzdF9ib3hfbGlfbWxcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTE/J2JqX2xpc3RfYm94X2xpX2N1cic6JydcIiBAY2xpY2s9XCJ0a19zaG93MV9jdXI9MVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJqX2ljb25cIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL21sX2ppaGUucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9pY29uX3RleHRcIj7pm4bnu5M8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwieHpfb2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTE/J3h6X29rX2N1cic6JydcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3h6X29rLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saV93IGJqX2xpc3RfYm94X2xpX3dfbWxcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saSBial9saXN0X2JveF9saV9tbFwiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09Mj8nYmpfbGlzdF9ib3hfbGlfY3VyJzonJ1wiIEBjbGljaz1cInRrX3Nob3cxX2N1cj0yXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYmpfaWNvblwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbWxfeWlsaWFvLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfaWNvbl90ZXh0XCI+5Yy755aXPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInh6X29rXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0yPyd4el9va19jdXInOicnXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy94el9vay5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlfdyBial9saXN0X2JveF9saV93X21sXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGkgYmpfbGlzdF9ib3hfbGlfbWxcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTM/J2JqX2xpc3RfYm94X2xpX2N1cic6JydcIiBAY2xpY2s9XCJ0a19zaG93MV9jdXI9M1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJqX2ljb25cIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL21sX3RpbmdjaGUucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9pY29uX3RleHRcIj7lgZzovaY8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwieHpfb2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTM/J3h6X29rX2N1cic6JydcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3h6X29rLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3ICB2LWlmPVwidGtfc2hvdzFfbnVtPT0zXCIgY2xhc3M9XCJial9saXN0X2JveFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saV93IGJqX2xpc3RfYm94X2xpX3dfc2tcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saSBial9saXN0X2JveF9saV9za1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09MD8nYmpfbGlzdF9ib3hfbGlfY3VyJzonJ1wiIEBjbGljaz1cInRrX3Nob3cxX2N1cj0wXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYmpfaWNvbiBcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3NrXzEucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9pY29uX3RleHRcIj7mvZzlnKjnmoTlj5flm7DogIU8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwieHpfb2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTA/J3h6X29rX2N1cic6JydcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3h6X29rLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saV93IGJqX2xpc3RfYm94X2xpX3dfc2tcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saSBial9saXN0X2JveF9saV9za1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09MT8nYmpfbGlzdF9ib3hfbGlfY3VyJzonJ1wiIEBjbGljaz1cInRrX3Nob3cxX2N1cj0xXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYmpfaWNvblwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvc2tfMi5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2ljb25fdGV4dFwiPuehruiupOeUn+i/mOiAhTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ4el9va1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09MT8neHpfb2tfY3VyJzonJ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMveHpfb2sucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpX3cgYmpfbGlzdF9ib3hfbGlfd19za1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpIGJqX2xpc3RfYm94X2xpX3NrXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0yPydial9saXN0X2JveF9saV9jdXInOicnXCIgQGNsaWNrPVwidGtfc2hvdzFfY3VyPTJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJial9pY29uXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9za18zLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfaWNvbl90ZXh0XCI+56Gu6K6k6YGH6Zq+6ICFPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInh6X29rXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0yPyd4el9va19jdXInOicnXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy94el9vay5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlfdyBial9saXN0X2JveF9saV93X3NrXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGkgYmpfbGlzdF9ib3hfbGlfc2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTM/J2JqX2xpc3RfYm94X2xpX2N1cic6JydcIiBAY2xpY2s9XCJ0a19zaG93MV9jdXI9M1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJqX2ljb25cIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3NrXzQucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9pY29uX3RleHRcIj7np7vpmaTnlJ/ov5jogIU8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwieHpfb2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTM/J3h6X29rX2N1cic6JydcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3h6X29rLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saV93IGJqX2xpc3RfYm94X2xpX3dfc2tcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saSBial9saXN0X2JveF9saV9za1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09ND8nYmpfbGlzdF9ib3hfbGlfY3VyJzonJ1wiIEBjbGljaz1cInRrX3Nob3cxX2N1cj00XCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYmpfaWNvblwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvc2tfNS5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2ljb25fdGV4dFwiPuenu+mZpOmBh+mavuiAhTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ4el9va1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09ND8neHpfb2tfY3VyJzonJ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMveHpfb2sucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpX3cgYmpfbGlzdF9ib3hfbGlfd19za1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpIGJqX2xpc3RfYm94X2xpX3NrXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT01Pydial9saXN0X2JveF9saV9jdXInOicnXCIgQGNsaWNrPVwidGtfc2hvdzFfY3VyPTVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJial9pY29uXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9za182LnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfaWNvbl90ZXh0XCI+5pyA5ZCO5LiA5qyh55yL5YiwPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInh6X29rXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT01Pyd4el9va19jdXInOicnXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy94el9vay5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyAgdi1pZj1cInRrX3Nob3cxX251bT09NFwiIGNsYXNzPVwiYmpfbGlzdF9ib3hcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlfd1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0wPydial9saXN0X2JveF9saV9jdXInOicnXCIgQGNsaWNrPVwidGtfc2hvdzFfY3VyPTBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJial9pY29uIFwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvcGhfMS5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2ljb25fdGV4dFwiPuS9jumjjumZqTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ4el9va1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09MD8neHpfb2tfY3VyJzonJ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMveHpfb2sucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpX3dcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saVwiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09MT8nYmpfbGlzdF9ib3hfbGlfY3VyJzonJ1wiIEBjbGljaz1cInRrX3Nob3cxX2N1cj0xXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYmpfaWNvblwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvcGhfMi5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2ljb25fdGV4dFwiPuS4remjjumZqTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ4el9va1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09MT8neHpfb2tfY3VyJzonJ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMveHpfb2sucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpX3dcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saVwiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09Mj8nYmpfbGlzdF9ib3hfbGlfY3VyJzonJ1wiIEBjbGljaz1cInRrX3Nob3cxX2N1cj0yXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYmpfaWNvblwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvcGhfMy5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2ljb25fdGV4dFwiPumrmOmjjumZqTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ4el9va1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09Mj8neHpfb2tfY3VyJzonJ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMveHpfb2sucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRrc2V0X2J0blwiIEBjbGljaz1cImp1bXBfZnVjXCIgZGF0YS11cmw9XCIvcGFnZXMvbWFwX2R3L21hcF9kdz90eXBlPWZ3c21cIj5cclxuXHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAyOHB4O2NvbG9yOiAjZmZmO1wiPuiuvue9ruS9jee9rjwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHJcblx0XHRcdDwhLS0gPHRleHQgQHRhcD1cInRrX3Nob3cxPWZhbHNlXCIgY2xhc3M9XCJpY29uZm9udCBpY29uZ3VhbmJpXCIgc3R5bGU9XCJmb250LXNpemU6IDUwdXB4O2NvbG9yOiAjZmZmO1wiPjwvdGV4dD4gLS0+XHJcblx0XHRcdDx0ZXh0IEBjbGljaz1cInRrX3Nob3cxPWZhbHNlXCIgY2xhc3M9XCJpY29uZm9udCBpY29uZ3VhbmJpXCIgc3R5bGU9XCJmb250LXNpemU6IDUwcHg7Y29sb3I6ICNmZmY7XCI+JiN4ZTYyMTs8L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuXHRpbXBvcnQgc2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlLmpzJztcclxuXHRpbXBvcnQge1xyXG5cdFx0bWFwU3RhdGUsXHJcblx0XHRtYXBNdXRhdGlvbnNcclxuXHR9IGZyb20gJ3Z1ZXgnXHJcblx0dmFyIHRoYXQsIG1hcENvbnRleHQsIG1hcEVuZGxvYWRpbmc7XHJcblx0dmFyIGRqc19mdWNcclxuXHR2YXIgdGhhdFxyXG5cdFxyXG5cdGNvbnN0IGRvbU1vZHVsZSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJyk7XHJcblx0ZG9tTW9kdWxlLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG5cdFx0J2ZvbnRGYW1pbHknOiBcImljb25mb250XCIsXHJcblx0XHQnc3JjJzogXCJ1cmwoJy4uLy4uL3N0YXRpYy9mb250cy9pY29uZm9udC50dGYnKVwiXHJcblx0fSk7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRsYXRpdHVkZTogNDEuNjM4ODgzLFxyXG5cdFx0XHRcdGxvbmdpdHVkZTogMTIzLjQ5OTYyNSxcclxuXHRcdFx0XHRtYXBXaWR0aDogMCwgLy/lnLDlm77ljLrln5/lrr3luqZcclxuXHRcdFx0XHRtYXBIZWlnaHQ6IDAsIC8v5Zyw5Zu+5Yy65Z+f6auY5bqmXHJcblx0XHRcdFx0Y2VudGVyVG9wOiAwLCAvL+S4reW/g+WbvueJh+WdkOagh1xyXG5cdFx0XHRcdGNlbnRlckxlZnQ6IDAsIC8v5Lit5b+D5Zu+54mH5Z2Q5qCHXHJcblx0XHRcdFx0dHJhbnNsYXRlWTogMTY1LFxyXG5cdFx0XHRcdG1hcmtlcnNBcnI6IFt7XHJcblx0XHRcdFx0XHRpZDoxLFxyXG5cdFx0XHRcdFx0bGF0aXR1ZGU6IDM5LjkwOSxcclxuXHRcdFx0XHRcdGxvbmdpdHVkZTogMTE2LjM5NzQyLFxyXG5cdFx0XHRcdFx0aWNvblBhdGg6ICcvc3RhdGljL2ltYWdlcy9odW96YWkucG5nJ1xyXG5cdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdGlkOjIsXHJcblx0XHRcdFx0XHRsYXRpdHVkZTogMzkuOTE5LFxyXG5cdFx0XHRcdFx0bG9uZ2l0dWRlOiAxMTYuMzk3NDIsXHJcblx0XHRcdFx0XHRpY29uUGF0aDogJy9zdGF0aWMvaW1hZ2VzL2h1b3phaS5wbmcnXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0aWQ6MyxcclxuXHRcdFx0XHRcdFwibGF0aXR1ZGVcIjogMzkuOTc1NjQzNzQ3MzA0OTg2LFxyXG5cdFx0XHRcdFx0XCJsb25naXR1ZGVcIjogMTE2LjMxNDMyOCxcclxuXHRcdFx0XHRcdFwiaWNvblBhdGhcIjogXCIvc3RhdGljL2ltYWdlcy9zaHVpemFpLnBuZ1wiXHJcblx0XHRcdFx0fSwge2lkOjQsXHJcblx0XHRcdFx0XHRcImxhdGl0dWRlXCI6IDM5Ljk0MjU0ODU1MDU3NTk4LFxyXG5cdFx0XHRcdFx0XCJsb25naXR1ZGVcIjogMTE2LjMxNDMyOCxcclxuXHRcdFx0XHRcdFwiaWNvblBhdGhcIjogXCIvc3RhdGljL2ltYWdlcy9jaGVodW8ucG5nXCJcclxuXHRcdFx0XHR9LCB7aWQ6NSxcclxuXHRcdFx0XHRcdFwibGF0aXR1ZGVcIjogMzkuOTUyNTQ4NTUwNTc1OTgsXHJcblx0XHRcdFx0XHRcImxvbmdpdHVkZVwiOiAxMTYuMzE0MzI4LFxyXG5cdFx0XHRcdFx0XCJpY29uUGF0aFwiOiBcIi9zdGF0aWMvaW1hZ2VzL2x1emhhbmcucG5nXCJcclxuXHRcdFx0XHR9LCB7aWQ6NixcclxuXHRcdFx0XHRcdFwibGF0aXR1ZGVcIjogMzkuOTU1NTQ4NTUwNTc1OTgsXHJcblx0XHRcdFx0XHRcImxvbmdpdHVkZVwiOiAxMTYuMzI0MzI4LFxyXG5cdFx0XHRcdFx0XCJpY29uUGF0aFwiOiBcIi9zdGF0aWMvaW1hZ2VzL2RpYW5saS5wbmdcIlxyXG5cdFx0XHRcdH1dLCAvL+imhueblueJqVxyXG5cdFx0XHRcdG1hcENvbnRyb2xzOiBbXSxcclxuXHRcdFx0XHRtYXBDb250cm9sczE6IFt7XHJcblx0XHRcdFx0XHRpZDogXCIxXCIsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRsZWZ0OiAzNzUgLSAxNSxcclxuXHRcdFx0XHRcdFx0dG9wOiAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0IC0gNDUgLSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHQpIC8gMiAtIDQ5LFxyXG5cdFx0XHRcdFx0XHR3aWR0aDogMzAsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogNDlcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRpY29uUGF0aDogXCIvc3RhdGljL2ltYWdlcy96dW9iaWFvLnBuZ1wiLFxyXG5cdFx0XHRcdFx0Y2xpY2thYmxlOiBmYWxzZVxyXG5cdFx0XHRcdH1dLCAvL+WcsOWbvuS4reeahOaOp+S7tlxyXG5cdFx0XHRcdGJqX3RpbWU6IDEwLFxyXG5cdFx0XHRcdGJhb2ppbmc6IGZhbHNlLFxyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0XHR0a19zaG93OiBmYWxzZSxcclxuXHRcdFx0XHR0a19zaG93MTogZmFsc2UsXHJcblx0XHRcdFx0dGtfc2hvdzFfbnVtOiAwLCAgICAvL+agh+iusDHnuqfliIbnsbtcclxuXHRcdFx0XHRub3RlX3RpbWVfdDogJycsXHJcblx0XHRcdFx0dGtfc2hvdzFfY3VyOiAtMSwvL+agh+iusDLnuqfliIbnsbtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0a19zaG93X3N4OmZhbHNlLCAvL+etm+mAiVxyXG5cdFx0XHRcdHRrX3Nob3dfc3hfY3VyOjAsIC8v562b6YCJ5YiG57G7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHQuLi5tYXBTdGF0ZShbJ2hhc0xvZ2luJywgJ2ZvcmNlZExvZ2luJywgJ3VzZXJOYW1lJywgJ2xvZ2luRGF0YXMnXSksXHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHR0aGF0ID0gdGhpc1xyXG5cdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcclxuXHRcdFx0dGhpcy5nZXRMb2NhdGlvbigpO1xyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0Lypjb25zdCBpbm5lckF1ZGlvQ29udGV4dCA9IHVuaS5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpO1xyXG5cdFx0XHRpbm5lckF1ZGlvQ29udGV4dC5hdXRvcGxheSA9IHRydWU7XHJcblx0XHRcdGlubmVyQXVkaW9Db250ZXh0LnNyYyA9ICdodHRwczovL3ZrY2V5dWd1LmNkbi5ic3BhcHAuY29tL1ZLQ0VZVUdVLWhlbGxvLXVuaWFwcC8yY2MyMjBlMC1jMjdhLTExZWEtOWRmYi02ZGE4ZTMwOWUwZDgubXAzJztcclxuXHRcdFx0aW5uZXJBdWRpb0NvbnRleHQub25QbGF5KCgpID0+IHtcclxuXHRcdFx0ICBjb25zb2xlLmxvZygn5byA5aeL5pKt5pS+Jyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRpbm5lckF1ZGlvQ29udGV4dC5vbkVycm9yKChyZXMpID0+IHtcclxuXHRcdFx0ICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKTtcclxuXHRcdFx0ICBjb25zb2xlLmxvZyhyZXMuZXJyQ29kZSk7XHJcblx0XHRcdH0pOyovXHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhhdC5tYXBXaWR0aCA9IDc1MFxyXG5cdFx0XHR0aGF0LnNIZWlnaHQgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHQ7XHJcblx0XHRcdC8vIHRoYXQubWFwSGVpZ2h0ID0gKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCAgLSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHQpIC0gMjQ2O1xyXG5cdFx0XHR0aGF0Lm1hcEhlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCAqIDIgLSAzOTY7XHJcblx0XHRcdGNvbnNvbGUubG9nKHRoYXQubWFwSGVpZ2h0KVxyXG5cdFx0XHRjb25zb2xlLmxvZyh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zY3JlZW5IZWlnaHQpXHJcblx0XHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdFx0cXVlcnkuc2VsZWN0KCcjbWFwJykuYm91bmRpbmdDbGllbnRSZWN0KGRhdGEgPT4ge1xyXG5cdFx0XHRcdHZhciBfbmF2SGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ19uYXZIZWlnaHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+JylcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhfbmF2SGVpZ2h0KVxyXG5cdFx0XHRcdC8vIF9uYXZIZWlnaHQ9X25hdkhlaWdodCt1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHRcclxuXHRcdFx0XHRfbmF2SGVpZ2h0PV9uYXZIZWlnaHQvMlxyXG5cdFx0XHRcdF9uYXZIZWlnaHQ9X25hdkhlaWdodC50b0ZpeGVkKDApXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y29uc29sZS5sb2codHlwZW9mIF9uYXZIZWlnaHQpXHJcblx0XHRcdFx0Y29uc29sZS5sb2codHlwZW9mIDcxMClcclxuXHRcdFx0XHR2YXIgc3NzPVtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiBcIjFcIixcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRcdFx0bGVmdDogNzUwIC8gMiAtIDI4LFxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gdG9wOiBfbmF2SGVpZ2h0IC0gNjgsXHJcblx0XHRcdFx0XHRcdFx0XHR0b3A6IF9uYXZIZWlnaHQsXHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogNTUsXHJcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDY4XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRpY29uUGF0aDogXCIvc3RhdGljL2ltYWdlcy9odW96YWkucG5nXCIsXHJcblx0XHRcdFx0XHRcdFx0Y2xpY2thYmxlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0dGhhdC5zZXRIZWlnaHQoc3NzKVxyXG5cdFx0XHRcdC8vIFZ1ZS5zZXQodGhhdC5tYXBDb250cm9sc1swXS5wb3NpdGlvbiwndG9wJyxzc3MpXHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhhdC5tYXBDb250cm9scylcclxuXHRcdFx0fSkuZXhlYygpO1xyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRvblNob3coKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC4uLm1hcE11dGF0aW9ucyhbJ3NldEFkZHJlc3MnLCdzZXRIZWlnaHQnXSksXHJcblx0XHRcdHRlc3QoKSB7fSxcclxuXHRcdFx0b3Blbl90ayhudW0pIHtcclxuXHRcdFx0XHR0aGF0LnRrX3Nob3cgPSBmYWxzZVxyXG5cdFx0XHRcdHRoYXQudGtfc2hvdzEgPSB0cnVlXHJcblx0XHRcdFx0dGhhdC50a19zaG93MV9udW0gPSBudW1cclxuXHJcblx0XHRcdFx0dmFyIG5vd190aW1lID0gbmV3IERhdGUoKTtcclxuXHRcdFx0XHR2YXIgbm93X3llYXIgPSBub3dfdGltZS5nZXRGdWxsWWVhcigpO1xyXG5cdFx0XHRcdHZhciBub3dfbW9udGggPSBub3dfdGltZS5nZXRNb250aCgpICsgMTtcclxuXHRcdFx0XHR2YXIgbm93X2RhdGUgPSBub3dfdGltZS5nZXREYXRlKCk7XHJcblx0XHRcdFx0dmFyIGhvdXIgPSBub3dfdGltZS5nZXRIb3VycygpO1xyXG5cdFx0XHRcdHZhciBtaW51dGUgPSBub3dfdGltZS5nZXRNaW51dGVzKCk7XHJcblx0XHRcdFx0aWYgKG5vd19tb250aCA8IDEwKSB7XHJcblx0XHRcdFx0XHRub3dfbW9udGggPSAnMCcgKyBub3dfbW9udGggKiAxXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChub3dfZGF0ZSA8IDEwKSB7XHJcblx0XHRcdFx0XHRub3dfZGF0ZSA9ICcwJyArIG5vd19kYXRlICogMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoaG91ciA8IDEwKSB7XHJcblx0XHRcdFx0XHRob3VyID0gJzAnICsgaG91ciAqIDFcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKG1pbnV0ZSA8IDEwKSB7XHJcblx0XHRcdFx0XHRtaW51dGUgPSAnMCcgKyBtaW51dGUgKiAxXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQubm90ZV90aW1lX3QgPSBub3dfeWVhciArICctJyArIG5vd19tb250aCArICctJyArIG5vd19kYXRlICsgJyAnICsgaG91ciArICc6JyArIG1pbnV0ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaGFpX3RrKG51bSl7XHJcblx0XHRcdFx0dGhhdC50a19zaG93X3N4X2N1ciA9IG51bVxyXG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHRtYXNrOnRydWUsXHJcblx0XHRcdFx0XHR0aXRsZTon5q2j5Zyo562b6YCJLi4uJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0dGhhdC50a19zaG93X3N4PWZhbHNlXHJcblx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdH0sMTAwMClcclxuXHRcdFx0fSxcclxuXHRcdFx0YmFvamluZ19mdWMoKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhpcy5iYW9qaW5nID0gdHJ1ZVxyXG5cdFx0XHRcdHRoYXQuYmpfdGltZSA9IDEwXHJcblx0XHRcdFx0ZGpzX2Z1YyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKHRoYXQuYmpfdGltZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdC8vIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHQvLyBcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0XHQvLyBcdHRpdGxlOiforabmiqXmk43kvZwnXHJcblx0XHRcdFx0XHRcdC8vIH0pXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKDApXHJcblx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoZGpzX2Z1YylcclxuXHRcdFx0XHRcdFx0dGhhdC5ial90aW1lID0gJyEnXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmJqX3RpbWUtLVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhhdC5kanMoKSlcclxuXHRcdFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YmFvamluZ19kZWwoKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChkanNfZnVjKVxyXG5cdFx0XHRcdHRoaXMuYmpfdGltZSA9IDEwXHJcblx0XHRcdFx0dGhpcy5iYW9qaW5nID0gZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0c2h1YXhpbigpIHtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdHRpdGxlOiAn5q2j5Zyo5Yi35pawJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5Zyw5Zu+54K55Ye75LqL5Lu2XHJcblx0XHRcdG1hcmtlcnRhcChlKSB7XHJcblx0XHRcdFx0dmFyIF9pZCA9IGUuZGV0YWlsLm1hcmtlcklkLFxyXG5cdFx0XHRcdFx0X2luZGV4O1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ19pZC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPicpXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhfaWQpXHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR2YXIgX2xpc3QgPSB0aGF0Lm1hcmtlcnNBcnI7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBfbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKF9saXN0W2ldLmlkID09IF9pZCkge1xyXG5cdFx0XHRcdFx0XHRfaW5kZXggPSBpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LmN1cnJlbnQgPSBpO1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm9wZW5BbmltYXRpb24oKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/np7vliqjlnLDlm77nu5PmnZ9cclxuXHRcdFx0bWFwQ2hhbmdlKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlKVxyXG5cdFx0XHRcdGlmIChlKSB7XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChtYXBFbmRsb2FkaW5nKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG1hcEVuZGxvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4geyAvL+mYsuaKllxyXG5cdFx0XHRcdFx0bWFwRW5kbG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdH0sIDUwMCk7XHJcblx0XHRcdFx0aWYgKGUuZGV0YWlsLnR5cGUgPT0gJ2VuZCcgfHwgZS50eXBlID09ICdlbmQnKSB7XHJcblx0XHRcdFx0XHQvL+S4reW/g+WMuuWfn+W3pui+uVxyXG5cdFx0XHRcdFx0bWFwQ29udGV4dC5nZXRDZW50ZXJMb2NhdGlvbih7XHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5tYXBFbmQocmVzKTtcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0ZmFpbChlcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0aWYgKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09ICdpb3MnKSB7XHJcblx0XHRcdFx0XHRpZiAoZS5kZXRhaWwudHlwZSA9PSAnZW5kJykge1xyXG5cdFx0XHRcdFx0XHQvL+S4reW/g+WMuuWfn+W3pui+uVxyXG5cdFx0XHRcdFx0XHRtYXBDb250ZXh0LmdldENlbnRlckxvY2F0aW9uKHtcclxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5tYXBFbmQocmVzKTtcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGZhaWwoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly/lnLDlm77np7vliqjnu5PmnZ9cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGUpXHJcblx0XHRcdFx0XHRpZiAoZS50eXBlID09ICdlbmQnKSB7XHJcblx0XHRcdFx0XHRcdC8v5Lit5b+D5Yy65Z+f5bem6L65XHJcblx0XHRcdFx0XHRcdG1hcENvbnRleHQuZ2V0Q2VudGVyTG9jYXRpb24oe1xyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5tYXBFbmQocmVzKTtcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGZhaWwoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0Ly/nvKnmlL7op4bph47lsZXnpLrmiYDmnInnu4/nuqzluqZcclxuXHRcdFx0XHRcdFx0Ly8gbWFwQ29udGV4dC5nZXRDZW50ZXJMb2NhdGlvbih7XHJcblx0XHRcdFx0XHRcdC8vIFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0XHRcdC8vIFx0fSxcclxuXHRcdFx0XHRcdFx0Ly8gXHRmYWlsKGVycikge1xyXG5cdFx0XHRcdFx0XHQvLyBcdFx0Y29uc29sZS5sb2coZXJyKVxyXG5cdFx0XHRcdFx0XHQvLyBcdH1cclxuXHRcdFx0XHRcdFx0Ly8gfSlcclxuXHRcdFx0XHRcdFx0Ly/ojrflj5blvZPliY3lnLDlm77nmoTop4bph47ojIPlm7RcclxuXHRcdFx0XHRcdFx0bWFwQ29udGV4dC5nZXRSZWdpb24oe1xyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0ZmFpbChlcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycilcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdC8v6I635Y+W5b2T5YmN5Zyw5Zu+55qE57yp5pS+57qn5YirXHJcblx0XHRcdFx0XHRcdG1hcENvbnRleHQuZ2V0U2NhbGUoe1xyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0ZmFpbChlcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycilcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldExpc3QoKSB7fSxcclxuXHRcdFx0Ly/lnLDlm77np7vliqhcclxuXHRcdFx0bWFwRW5kKHJlcykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCfliqDovb3mlbDmja4nKVxyXG5cdFx0XHRcdGlmIChyZXMpIHtcclxuXHRcdFx0XHRcdHRoYXQubG9uZ2l0dWRlID0gcmVzLmxvbmdpdHVkZTtcclxuXHRcdFx0XHRcdHRoYXQubGF0aXR1ZGUgPSByZXMubGF0aXR1ZGU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL+WOn+aVsOaNrlxyXG5cdFx0XHRcdHRoYXQubGlzdCA9IFtdO1xyXG5cdFx0XHRcdHRoYXQucGFnZUluZGV4ID0gMTtcclxuXHRcdFx0XHR0aGF0LmNoYWNlTGlzdCA9IFtdO1xyXG5cdFx0XHRcdC8vIOimhueblueJqeaVsOaNrlxyXG5cdFx0XHRcdHRoYXQubWFya2Vyc0FyciA9IFtdO1xyXG5cdFx0XHRcdHRoYXQub3JpZ2luYWxMaXN0ID0gW107XHJcblx0XHRcdFx0dGhhdC5nZXRMaXN0KCk7XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRMb2NhdGlvbih0eXBlKSB7XHJcblx0XHRcdFx0dW5pLmdldExvY2F0aW9uKHtcclxuXHRcdFx0XHRcdHR5cGU6ICd3Z3M4NCcsXHJcblx0XHRcdFx0XHQvLyB0eXBlOiAnZ2NqMDInLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQubG9uZ2l0dWRlID0gcmVzLmxvbmdpdHVkZTtcclxuXHRcdFx0XHRcdFx0dGhhdC5sYXRpdHVkZSA9IHJlcy5sYXRpdHVkZTtcclxuXHRcdFx0XHRcdFx0dGhhdC5wYWdlSW5kZXggPSAxO1xyXG5cdFx0XHRcdFx0XHQvLyBpZiAodHlwZSAhPSAnYmFjaycpIHtcclxuXHJcblx0XHRcdFx0XHRcdHRoYXQuc2V0QWRkcmVzcyhyZXMpO1xyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmdldExpc3QoKTtcclxuXHRcdFx0XHRcdFx0fSwgMTAwMClcclxuXHRcdFx0XHRcdFx0Ly8gfVxyXG5cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsKGVycikge1xyXG5cdFx0XHRcdFx0XHRpZiAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gJ2lvcycpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoIXBlcm1pc2lvbi5qdWRnZUlvc1Blcm1pc3Npb24oJ2xvY2F0aW9uJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+aPkOekuicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfpnIDopoHmiZPlvIDlrprkvY3mnYPpmZAnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuaXNUb1NldHRpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGVybWlzaW9uLmdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQucmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKCdhbmRyb2lkLnBlcm1pc3Npb24uQUNDRVNTX0ZJTkVfTE9DQVRJT04nKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgcmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKHBlcm1pc2lvbklEKSB7XHJcblx0XHRcdFx0dmFyIHJlc3VsdCA9IGF3YWl0IHBlcm1pc2lvbi5yZXF1ZXN0QW5kcm9pZFBlcm1pc3Npb24ocGVybWlzaW9uSUQpXHJcblx0XHRcdFx0dmFyIHN0clN0YXR1c1xyXG5cdFx0XHRcdGlmIChyZXN1bHQgPT0gMSkge1xyXG5cdFx0XHRcdFx0c3RyU3RhdHVzID0gXCLlt7LojrflvpfmjojmnYNcIlxyXG5cdFx0XHRcdH0gZWxzZSBpZiAocmVzdWx0ID09IDApIHtcclxuXHRcdFx0XHRcdHN0clN0YXR1cyA9IFwi5pyq6I635b6X5o6I5p2DXCJcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0c3RyU3RhdHVzID0gXCLooqvmsLjkuYXmi5Lnu53mnYPpmZBcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5o+Q56S6JyxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6ICfpnIDopoHmiZPlvIDlrprkvY3mnYPpmZAnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuaXNUb1NldHRpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdHBlcm1pc2lvbi5nb3RvQXBwUGVybWlzc2lvblNldHRpbmcoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRpbWcoaW1nKSB7XHJcblx0XHRcdFx0cmV0dXJuIHNlcnZpY2UuZ2V0aW1nKGltZylcclxuXHRcdFx0fSxcclxuXHRcdFx0anVtcF9mdWMoZSkge1xyXG5cdFx0XHRcdGlmICh0aGF0LnRrX3Nob3cxX2N1ciA9PSAtMSkge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfor7fpgInmi6nnsbvlnosnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQudGtfc2hvdzE9ZmFsc2VcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvbWFwX2R3L21hcF9kdz90a19zaG93MV9jdXI9JyArIHRoYXQudGtfc2hvdzFfY3VyICsgJyZ0a19zaG93MV9udW09JyArIHRoYXQudGtfc2hvdzFfbnVtXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0anVtcChlKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblxyXG5cdFx0XHRcdGlmICh0aGF0LmJ0bl9rZyA9PSAxKSB7XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhhdC5idG5fa2cgPSAxXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmJ0bl9rZyA9IDBcclxuXHRcdFx0XHRcdH0sIDEwMDApXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzZXJ2aWNlLmp1bXAoZSlcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQuaWNvbmZvbnQgeyAgXHJcblx0ICAgIGZvbnQtZmFtaWx5OiBpY29uZm9udDsgIFxyXG5cdH0gIFxyXG5cdC8qIC5pY29uLWxpa2UgeyAgXHJcblx0ICAgIHdpZHRoOiAzNnB4OyAgXHJcblx0ICAgIGhlaWdodDogMzZweDsgIFxyXG5cdCAgICBmb250LXNpemU6IDM0cHg7ICBcclxuXHR9ICovXHJcblx0Lm1pbmgxMDAge1xyXG5cdFx0d2lkdGg6IDc1MHB4O1xyXG5cdFx0LyogI2lmZGVmIEg1ICovXHJcblx0XHRtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwdXB4KTtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHJcblx0LmluZGV4X21hcCB7XHJcblx0XHQvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcblxyXG5cdFx0d2lkdGg6IDc1MHB4O1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdC8qICAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgICovXHJcblx0XHRoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNDZ1cHgpO1xyXG5cdFx0LyogICNlbmRpZiAgKi9cclxuXHJcblx0XHQvKiAjaWZkZWYgSDUgKi9cclxuXHRcdG1heC13aWR0aDogMTAwdnc7XHJcblx0XHRtYXgtaGVpZ2h0OiAxMDB2aDtcclxuXHRcdGhlaWdodDogY2FsYygxMDB2aCAtIDI0NnVweCAtIDEwMHVweCk7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XHJcblxyXG5cdC5tYXBfYnRuX2xpc3Qge1xyXG5cdFx0LyogcG9zaXRpb246IGZpeGVkOyAqL1xyXG5cdFx0LyogYm90dG9tOiAwOyAqL1xyXG5cdFx0d2lkdGg6IDc1MHB4O1xyXG5cdFx0LyogI2lmZGVmIEg1ICovXHJcblxyXG5cdFx0bWF4LXdpZHRoOiAxMDB2dztcclxuXHRcdGJvdHRvbTogMTAwdXB4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRoZWlnaHQ6IDI0NnVweDtcclxuXHRcdGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcblx0XHRib3gtc2hhZG93OiAwcHggLTNweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTV1cHggMTV1cHggMCAwO1xyXG5cdFx0LyogICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAgKi9cclxuXHRcdC8qICAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogICNlbmRpZiAgKi9cclxuXHRcdC8qICAjZW5kaWYgICovXHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdH1cclxuXHJcblx0Lm1hcF9idG5fbGkge1xyXG5cdFx0LyogICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAgKi9cclxuXHRcdC8qICAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogICNlbmRpZiAgKi9cclxuXHRcdC8qICAjZW5kaWYgICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyNnVweDtcclxuXHRcdGNvbG9yOiAjNTU1O1xyXG5cdH1cclxuXHJcblx0Lm1hcF9idG5fbGlfaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDk1dXB4O1xyXG5cdFx0aGVpZ2h0OiA5NXVweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdG1hcmdpbi1ib3R0b206IDIwdXB4O1xyXG5cdH1cclxuXHJcblx0LmJqX2JveCB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0b3A6IDEzMHVweDtcclxuXHRcdHJpZ2h0OiAzMHVweDtcclxuXHRcdHotaW5kZXg6IDk5OTk5ODtcclxuXHRcdHdpZHRoOiAxMTR1cHg7XHJcblx0XHRoZWlnaHQ6IDExNHVweDtcclxuXHRcdGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcblx0XHRib3gtc2hhZG93OiAwcHggMHB4IDIxdXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdH1cclxuXHJcblx0LmJqX2JveF9pbWcge1xyXG5cdFx0d2lkdGg6IDExNHVweDtcclxuXHRcdGhlaWdodDogMTE0dXB4O1xyXG5cdH1cclxuXHJcblx0LmJqX21haW4ge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHdpZHRoOiA3NTBweDtcclxuXHRcdC8qIGhlaWdodDogMTAwdmg7ICovXHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC44KTtcclxuXHRcdHotaW5kZXg6IDk5OTk5OTtcclxuXHRcdC8qICAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgICovXHJcblx0XHQvKiAgI2lmbmRlZiBBUFAtUExVUy1OVlVFICAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICAjZW5kaWYgICovXHJcblx0XHQvKiAgI2VuZGlmICAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5ial9jbnVtIHtcclxuXHRcdHdpZHRoOiA1MDh1cHg7XHJcblx0XHRoZWlnaHQ6IDUwOHVweDtcclxuXHRcdGJhY2tncm91bmQ6ICNGRjAwMDA7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MDh1cHg7XHJcblx0XHRwYWRkaW5nOiAzNnVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDUwdXB4O1xyXG5cdH1cclxuXHJcblx0LmJqX2NudW1fMSB7XHJcblx0XHR3aWR0aDogNDM2cHg7XHJcblx0XHRoZWlnaHQ6IDQzNnB4O1xyXG5cdFx0YmFja2dyb3VuZDogI0ZGMDAwMDtcclxuXHRcdGJvcmRlcjogNHVweCBzb2xpZCAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNDM2cHg7XHJcblx0XHQvKiAgI2lmbmRlZiBBUFAtUExVUy1OVlVFICAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICAjZW5kaWYgICovXHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuYmpfY251bV9udW0ge1xyXG5cdFx0Zm9udC1zaXplOiAzMDBycHg7XHJcblx0XHRmb250LWZhbWlseTogRElOO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LmJqX3RpcCB7XHJcblx0XHRmb250LXNpemU6IDMwdXB4O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHJcblx0LnRrX3BvcG9wIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHotaW5kZXg6IDk5OTk5OTk5OTk7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC41KTtcclxuXHRcdC8qICAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogICNlbmRpZiAgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQudGtfbWFpbiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHVweDtcclxuXHRcdHdpZHRoOiA1MDV1cHg7XHJcblx0XHQvKiBtaW4taGVpZ2h0OiA0OTR1cHg7ICovXHJcblx0XHQvKiBtYXgtaGVpZ2h0OiA4MCU7ICovXHJcblx0XHQvKiBvdmVyZmxvdy15OiBzY3JvbGw7ICovXHJcblx0XHRiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTB1cHg7XHJcblx0XHRwYWRkaW5nOiAzMHVweCA0MHVweDtcclxuXHRcdC8qICBcclxuXHRcdGRpc3BsYXk6IGZsZXg7ICBcclxuXHRcdGZsZXgtd3JhcDogd3JhcDsgKi9cclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuYWRkX2JqIHtcclxuXHRcdC8qIHdpZHRoOiAxMDAlOyAqL1xyXG5cdFx0d2lkdGg6IDQyNXB4O1xyXG5cdFx0Zm9udC1zaXplOiAzNHVweDtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdFx0LyogICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAgI2VuZGlmICAqL1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNTB1cHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdH1cclxuXHJcblx0LmFkZF9ial90ZXh0IHtcclxuXHRcdHdpZHRoOiA2MHVweDtcclxuXHRcdGhlaWdodDogMXB4O1xyXG5cdFx0YmFja2dyb3VuZDogI0Q4RDhEODtcclxuXHRcdG1hcmdpbjogMCAxMHVweDtcclxuXHR9XHJcblxyXG5cdC5ial90eXBlIHtcclxuXHRcdC8qIHdpZHRoOiAxMDAlOyAqL1xyXG5cdFx0d2lkdGg6IDQyNXB4O1xyXG5cdFx0cGFkZGluZzogMCAxMHVweDtcclxuXHR9XHJcblxyXG5cdC5ial90eXBlX2xpIHtcclxuXHRcdC8qIHdpZHRoOiAxMDAlOyAqL1xyXG5cdFx0d2lkdGg6IDQwNXB4O1xyXG5cdFx0aGVpZ2h0OiA3MnVweDtcclxuXHRcdGJhY2tncm91bmQ6ICNFOEU4RTg7XHJcblx0XHRib3gtc2hhZG93OiAxcHggM3B4IDEwdXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAzNnVweDtcclxuXHRcdC8qICAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogICNlbmRpZiAgKi9cclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMjh1cHg7XHJcblx0XHRjb2xvcjogIzMzMzMzMztcclxuXHRcdG1hcmdpbi1ib3R0b206IDMzdXB4O1xyXG5cdH1cclxuXHQuYmpfdHlwZV9saV9jdXJ7XHJcblx0XHRiYWNrZ3JvdW5kOiAjM0M3N0YxO1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cdC5ial90eXBlX2xpX3RleHR7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHR9XHJcblx0LmJqX3R5cGVfbGlfdGV4dF9jdXJ7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHR9XHJcblx0Lm5vdGV0a190aXQge1xyXG5cdFx0Zm9udC1zaXplOiAzNHVweDtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHVweDtcclxuXHR9XHJcblxyXG5cdC5ub3RldGtfdGltZSB7XHJcblx0XHRmb250LXNpemU6IDI2dXB4O1xyXG5cdFx0Y29sb3I6ICMzMzM7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHVweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5hZGRfYmpfaWNvbiB7XHJcblx0XHQvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuXHRcdG1hcmdpbjogMCAwIDEwdXB4O1xyXG5cdFx0d2lkdGg6IDI4OXVweDtcclxuXHRcdGhlaWdodDogMjE4dXB4O1xyXG5cdH1cclxuXHJcblx0LmJ6X2ludF90ayB7XHJcblx0XHRmb250LXNpemU6IDI2dXB4O1xyXG5cdFx0Lyogd2lkdGg6IDEwMCU7ICovXHJcblx0XHR3aWR0aDogNDI1cHg7XHJcblx0XHRoZWlnaHQ6IDYwdXB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEREREREQ7XHJcblx0fVxyXG5cclxuXHQuYmpfbGlzdF9ib3gge1xyXG5cdFx0Lyogd2lkdGg6IDEwMCU7ICovXHJcblx0XHR3aWR0aDogNDI1cHg7XHJcblx0XHQvKiAgI2lmbmRlZiBBUFAtUExVUy1OVlVFICAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICAjZW5kaWYgICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0cGFkZGluZy10b3A6IDMwdXB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIwdXB4O1xyXG5cdH1cclxuXHQuYmpfbGlzdF9ib3hfbGlfd3tcclxuXHRcdHdpZHRoOiAxMzRweDtcclxuXHRcdGhlaWdodDogMTM0cHg7XHJcblx0XHRwYWRkaW5nLXRvcDogMTB1cHg7XHJcblx0XHQvKiBwYWRkaW5nLWxlZnQ6IDEwcHg7ICovXHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRtYXJnaW4tbGVmdDogNXB4O1xyXG5cdH1cclxuXHRcclxuXHQuYmpfbGlzdF9ib3hfbGkge1xyXG5cdFx0d2lkdGg6IDEyNHB4O1xyXG5cdFx0aGVpZ2h0OiAxMjRweDtcclxuXHRcdFxyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDR1cHg7XHJcblx0XHQvKiAgI2lmbmRlZiBBUFAtUExVUy1OVlVFICAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICAjZW5kaWYgICovXHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwdXB4O1xyXG5cdFx0cGFkZGluZzogMTB1cHg7XHJcblx0XHQvKiBvdmVyZmxvdzogYXV0bzsgKi9cclxuXHR9XHJcblxyXG5cdC5ial9saXN0X2JveF9saV9jdXIge1xyXG5cdFx0YmFja2dyb3VuZDogI0VGRjRGRjtcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICMzQzc3RjE7XHJcblx0fVxyXG5cdC5ial9saXN0X2JveF9saV93X21se1xyXG5cdFx0d2lkdGg6IDEwNXB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDFweDtcclxuXHR9XHJcblx0LmJqX2xpc3RfYm94X2xpX21se1xyXG5cdFx0d2lkdGg6IDk1cHg7XHJcblx0fVxyXG5cdC5ial9saXN0X2JveF9saV93X3Nre1xyXG5cdFx0aGVpZ2h0OiAxNTVweDtcclxuXHR9XHJcblx0LmJqX2xpc3RfYm94X2xpX3Nre1xyXG5cdFx0aGVpZ2h0OiAxNDVweDtcclxuXHR9XHJcblx0Lnh6X29rIHtcclxuXHRcdHdpZHRoOiAzMXVweDtcclxuXHRcdGhlaWdodDogMzF1cHg7XHJcblx0XHR0b3A6IC0xMDBweDtcclxuXHRcdHJpZ2h0OiAxMDBweDtcclxuXHR9XHJcblxyXG5cdC54el9va19jdXIge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHR6LWluZGV4Ojk5OTk5OTk5OTk5OTtcclxuXHR9XHJcblxyXG5cdC5ial9pY29uIHtcclxuXHRcdHdpZHRoOiA1NXVweDtcclxuXHRcdGhlaWdodDogNjh1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHVweDtcclxuXHR9XHJcblxyXG5cdC5ial9pY29uX2ljb24ge1xyXG5cdFx0Zm9udC1zaXplOiAyNnVweDtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdH1cclxuXHJcblx0LnRrc2V0X2J0biB7XHJcblx0XHRmb250LXNpemU6IDI4dXB4O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHQvKiAgI2lmbmRlZiBBUFAtUExVUy1OVlVFICAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICAjZW5kaWYgICovXHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHR3aWR0aDogNDA5dXB4O1xyXG5cdFx0aGVpZ2h0OiA3MnVweDtcclxuXHRcdGJhY2tncm91bmQ6ICMzQzc3RjE7XHJcblx0XHRib3gtc2hhZG93OiAxcHggM3B4IDEwdXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAzNnVweDtcclxuXHR9XHJcblx0LmJqX2ljb25fdGV4dHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!******************************************************************************************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/pages/map/map.nvue?vue&type=style&index=0&id=6970862e&scoped=true&lang=css&mpType=page ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_style_index_0_id_6970862e_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--7-oneOf-0-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./map.nvue?vue&type=style&index=0&id=6970862e&scoped=true&lang=css&mpType=page */ 25);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_style_index_0_id_6970862e_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_style_index_0_id_6970862e_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_style_index_0_id_6970862e_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_style_index_0_id_6970862e_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_style_index_0_id_6970862e_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 25 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-1!./node_modules/postcss-loader/src??ref--7-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/phpStudy/WWW/71_jiushengquan/pages/map/map.nvue?vue&type=style&index=0&id=6970862e&scoped=true&lang=css&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "minh100": {
    "width": "750"
  },
  "index_map": {
    "width": "750",
    "flex": 1
  },
  "map_btn_list": {
    "width": "750",
    "height": 246,
    "backgroundColor": "#FFFFFF",
    "boxShadow": "0px -3px 10px 0px rgba(0, 0, 0, 0.06)",
    "borderTopLeftRadius": 15,
    "borderTopRightRadius": 15,
    "borderBottomRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "alignItems": "center",
    "justifyContent": "space-around",
    "flexDirection": "row"
  },
  "map_btn_li": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "fontSize": 26,
    "color": "#555555"
  },
  "map_btn_li_image": {
    "width": 95,
    "height": 95,
    "borderRadius": 50,
    "marginBottom": 20
  },
  "bj_box": {
    "position": "fixed",
    "top": 130,
    "right": 30,
    "zIndex": 999998,
    "width": 114,
    "height": 114,
    "backgroundColor": "#FFFFFF",
    "boxShadow": "0px 0px 21upx 0px rgba(0, 0, 0, 0.16)",
    "borderRadius": 50
  },
  "bj_box_img": {
    "width": 114,
    "height": 114
  },
  "bj_main": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "bottom": 0,
    "width": "750",
    "backgroundColor": "rgba(0,0,0,0.8)",
    "zIndex": 999999,
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "bj_cnum": {
    "width": 508,
    "height": 508,
    "backgroundColor": "#FF0000",
    "borderRadius": 508,
    "paddingTop": 36,
    "paddingRight": 36,
    "paddingBottom": 36,
    "paddingLeft": 36,
    "marginBottom": 50
  },
  "bj_cnum_1": {
    "width": "436",
    "height": "436",
    "backgroundColor": "#FF0000",
    "borderWidth": 4,
    "borderStyle": "solid",
    "borderColor": "#FFFFFF",
    "borderRadius": "436",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "bj_cnum_num": {
    "fontSize": 300,
    "fontFamily": "DIN",
    "fontWeight": "500",
    "color": "#FFFFFF"
  },
  "bj_tip": {
    "fontSize": 30,
    "color": "#ffffff"
  },
  "tk_popop": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "zIndex": 9999999999,
    "backgroundColor": "rgba(0,0,0,0.5)",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "tk_main": {
    "marginBottom": 30,
    "width": 505,
    "backgroundColor": "#FFFFFF",
    "borderRadius": 10,
    "paddingTop": 30,
    "paddingRight": 40,
    "paddingBottom": 30,
    "paddingLeft": 40,
    "alignItems": "center"
  },
  "add_bj": {
    "width": "425",
    "fontSize": 34,
    "color": "#333333",
    "alignItems": "center",
    "justifyContent": "center",
    "marginBottom": 50,
    "flexDirection": "row"
  },
  "add_bj_text": {
    "width": 60,
    "height": "1",
    "backgroundColor": "#D8D8D8",
    "marginTop": 0,
    "marginRight": 10,
    "marginBottom": 0,
    "marginLeft": 10
  },
  "bj_type": {
    "width": "425",
    "paddingTop": 0,
    "paddingRight": 10,
    "paddingBottom": 0,
    "paddingLeft": 10
  },
  "bj_type_li": {
    "width": "405",
    "height": 72,
    "backgroundColor": "#E8E8E8",
    "boxShadow": "1px 3px 10upx 0px rgba(0, 0, 0, 0.1)",
    "borderRadius": 36,
    "alignItems": "center",
    "justifyContent": "center",
    "fontSize": 28,
    "color": "#333333",
    "marginBottom": 33
  },
  "bj_type_li_cur": {
    "backgroundColor": "#3C77F1",
    "color": "#ffffff"
  },
  "bj_type_li_text": {
    "color": "#333333"
  },
  "bj_type_li_text_cur": {
    "color": "#ffffff"
  },
  "notetk_tit": {
    "fontSize": 34,
    "color": "#333333",
    "textAlign": "center",
    "fontWeight": "bold",
    "marginBottom": 10
  },
  "notetk_time": {
    "fontSize": 26,
    "color": "#333333",
    "marginBottom": 30,
    "textAlign": "center"
  },
  "add_bj_icon": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 10,
    "marginLeft": 0,
    "width": 289,
    "height": 218
  },
  "bz_int_tk": {
    "fontSize": 26,
    "width": "425",
    "height": 60,
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#DDDDDD"
  },
  "bj_list_box": {
    "width": "425",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "paddingTop": 30,
    "paddingBottom": 20
  },
  "bj_list_box_li_w": {
    "width": "134",
    "height": "134",
    "paddingTop": 10,
    "position": "relative",
    "marginLeft": "5"
  },
  "bj_list_box_li": {
    "width": "124",
    "height": "124",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#ffffff",
    "borderRadius": 4,
    "alignItems": "center",
    "flexDirection": "column",
    "marginBottom": 30,
    "paddingTop": 10,
    "paddingRight": 10,
    "paddingBottom": 10,
    "paddingLeft": 10
  },
  "bj_list_box_li_cur": {
    "backgroundColor": "#EFF4FF",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#3C77F1"
  },
  "bj_list_box_li_w_ml": {
    "width": "105",
    "marginLeft": "1"
  },
  "bj_list_box_li_ml": {
    "width": "95"
  },
  "bj_list_box_li_w_sk": {
    "height": "155"
  },
  "bj_list_box_li_sk": {
    "height": "145"
  },
  "xz_ok": {
    "width": 31,
    "height": 31,
    "top": "-100",
    "right": "100"
  },
  "xz_ok_cur": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "zIndex": 999999999999
  },
  "bj_icon": {
    "width": 55,
    "height": 68,
    "marginBottom": 10
  },
  "bj_icon_icon": {
    "fontSize": 26,
    "color": "#333333"
  },
  "tkset_btn": {
    "fontSize": 28,
    "color": "#ffffff",
    "alignItems": "center",
    "justifyContent": "center",
    "width": 409,
    "height": 72,
    "backgroundColor": "#3C77F1",
    "boxShadow": "1px 3px 10upx 0px rgba(0, 0, 0, 0.1)",
    "borderRadius": 36
  },
  "bj_icon_text": {
    "textAlign": "center"
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);