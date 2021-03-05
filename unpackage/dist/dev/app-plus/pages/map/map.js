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
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 10));\nvar _index = _interopRequireDefault(__webpack_require__(/*! ./store/index.js */ 12));\nvar _event = _interopRequireDefault(__webpack_require__(/*! ./common/event.js */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n// 管理账号信息\nvar USERS_KEY = 'USERS_KEY';\nvar STATE_KEY = 'STATE_KEY';\n// const IPurl = 'https://datixcx.com.aa.800123456.top/api/';\n// const imgurl = 'https://datixcx.com.aa.800123456.top/';\n// const imgurl = 'http://192.168.129.246/';\nvar map_key = \"7FEBZ-WLWK2-PMGUE-C4BFT-EKXB6-BFFNR\";\nvar imgurl = \"http://192.168.133.158/\";\nvar IPurl = imgurl + 'api/';\n// const IPurl='http://192.168.129.246/api/'\n// const adminurl='https://datixcx.com.aa.800123456.top/admin/';\n// appid:wxf61ecd472abe41cb  正式\n// appid:wx49a560f7feac0feb   cj\n/**\r\n * 请求头\r\n */\nvar header = {\n  'content-type': 'application/x-www-form-urlencoded' };\n\n\n/**\r\n                                                          * 供外部post请求调用  \r\n                                                          */\nfunction post(url, params, onSuccess, onFailed) {\n  __f__(\"log\", \"请求方式：\", \"POST\", \" at service.js:28\");\n  request(url, params, \"POST\", onSuccess, onFailed);\n\n}\n\n/**\r\n   * 供外部get请求调用\r\n   */\nfunction get(url, params, onSuccess, onFailed) {\n  __f__(\"log\", \"请求方式：\", \"GET\", \" at service.js:37\");\n  request(url, params, \"GET\", onSuccess, onFailed);\n}\n\n/**\r\n   * function: 封装网络请求\r\n   * @url URL地址\r\n   * @params 请求参数\r\n   * @method 请求方式：GET/POST\r\n   * @onSuccess 成功回调\r\n   * @onFailed  失败回调\r\n   */\n\nfunction request(url, params, method, onSuccess, onFailed) {\n  __f__(\"log\", '请求url：' + url, \" at service.js:51\");\n\n  __f__(\"log\", \"请求头：\", header, \" at service.js:53\");\n  uni.request({\n    url: IPurl + url,\n    data: dealParams(params),\n    method: method,\n    header: header,\n    success: function success(res) {\n      uni.hideLoading();\n      uni.stopPullDownRefresh();\n      __f__(\"log\", '响应：', res.data, \" at service.js:62\");\n\n      // if (res.data) {\n      if (res.data.code == -1) {\n        // if (params.login_type == 1) {\n        // \t//一进来就登录失败\n        // \treturn\n\n        // }\n        // if (params.login_type == 2) {\n        // \t//授权登录失败\n        // \tuni.navigateBack()\n        // \treturn\n\n        // }\n        uni.showToast({\n          icon: 'none',\n          title: '请先授权登录' });\n\n        _index.default.commit('logout');\n        setTimeout(function () {\n          uni.navigateTo({\n            url: './pages/login/login?haslogin=false' });\n\n        }, 1000);\n        return;\n\n      }\n\n      /** start 根据需求 接口的返回状态码进行处理 */\n      onSuccess(res);\n      /** end 处理结束*/\n      // }\n    },\n    fail: function fail(error) {\n\n      uni.hideLoading();\n      uni.stopPullDownRefresh();\n      onFailed(error); //failure for other reasons\n    } });\n\n}\n\n/**\r\n   * function: 根据需求处理请求参数：添加固定参数配置等\r\n   * @params 请求参数\r\n   */\nfunction dealParams(params) {\n  __f__(\"log\", \"请求参数:\", params, \" at service.js:110\");\n  return params;\n}\n\n\n\nvar getUsers = function getUsers() {\n  var ret = '';\n  ret = uni.getStorageSync(USERS_KEY);\n  if (!ret) {\n    ret = '[]';\n  }\n  return JSON.parse(ret);\n};\n\nvar addUser = function addUser(userInfo) {\n  var users = getUsers();\n  users.push({\n    account: userInfo.account,\n    password: userInfo.password });\n\n  uni.setStorageSync(USERS_KEY, JSON.stringify(users));\n};\n\nvar gologin = function gologin() {\n  uni.navigateTo({\n    url: '/pages/login_index/login_index' });\n\n};\n\nvar jump = function jump(e) {\n  // console.log(e.currentTarget.dataset.type)\n  var datas = e.currentTarget.dataset;\n  __f__(\"log\", datas.login == true, \" at service.js:143\");\n\n  if (datas.login == true) {\n    if (!datas.haslogin) {\n      uni.navigateTo({\n        url: '../login/login' });\n\n      return;\n    }\n  }\n  if (datas.type == 'sp') {\n    __f__(\"log\", datas.spurl, \" at service.js:154\");\n    _index.default.commit('spurl_fuc', datas.spurl);\n    uni.navigateTo({\n      url: datas.url });\n\n    return;\n  }\n  if (datas.type == 2) {\n    uni.switchTab({\n      url: datas.url });\n\n  } else if (datas.type == 3) {\n    uni.redirectTo({\n      url: datas.url });\n\n  } else {\n    uni.navigateTo({\n      url: datas.url });\n\n  }\n};\nvar pveimg = function pveimg(e) {\n  var current = e.currentTarget.dataset.src;\n  var urls = e.currentTarget.dataset.array;\n\n  var urls1 = [];\n  if (urls) {\n    urls1 = urls;\n\n  } else {\n    urls1[0] = current;\n  }\n  // console.log(urls1)\n  uni.previewImage({\n    current: current, // 当前显示图片的http链接\n    urls: urls1 // 需要预览的图片http链接列表\n  });\n\n};\nvar call = function call(e) {\n  __f__(\"log\", e, \" at service.js:194\");\n  // return\n  if (e.currentTarget.dataset.tel) {\n    // wx.makePhoneCall({\n    // \tphoneNumber: e.currentTarget.dataset.tel+''\n    // })\n    uni.showModal({\n      title: '提示',\n      content: '是否拨打' + e.currentTarget.dataset.tel + '?',\n      success: function success(res) {\n        if (res.confirm) {\n          wx.makePhoneCall({\n            phoneNumber: e.currentTarget.dataset.tel + '' });\n\n          __f__(\"log\", '用户点击确定', \" at service.js:208\");\n        } else if (res.cancel) {\n          __f__(\"log\", '用户点击取消', \" at service.js:210\");\n        }\n      } });\n\n  }\n};\n// 微信登录\nvar wxlogin = function wxlogin(num) {\n  var that = this;\n  // 获取用户信息\n  if (num == 1) {\n    uni.showLoading({\n      title: '正在登录',\n      mask: true });\n\n  }\n  uni.getSetting({\n    success: function success(res) {\n      __f__(\"log\", res, \" at service.js:228\");\n      if (res.authSetting['scope.userInfo'] == true) {\n        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框\n        __f__(\"log\", '已经授权', \" at service.js:231\");\n        uni.getUserInfo({\n          success: function success(res) {\n            var userInfo = res.userInfo;\n            __f__(\"log\", userInfo, \" at service.js:235\");\n            uni.setStorageSync('userInfo', res.userInfo);\n            if (!userInfo) {\n\n            } else {\n              uni.login({\n                success: function success(res) {\n\n                  // 发送 res.code 到后台换取 openId, sessionKey, unionId\n                  var uinfo = userInfo;\n                  var data = {\n                    code: res.code,\n                    nickname: uinfo.nickName,\n                    cover: uinfo.avatarUrl };\n\n                  var rcode = res.code;\n                  __f__(\"log\", res.code, \" at service.js:251\");\n                  uni.request({\n                    url: IPurl + 'user/login',\n                    data: data,\n                    header: {\n                      'content-type': 'application/x-www-form-urlencoded' },\n\n                    dataType: 'json',\n                    method: 'POST',\n                    success: function success(res) {\n                      uni.hideLoading();\n                      __f__(\"log\", res.data, \" at service.js:262\");\n                      if (res.data.code == 1) {\n                        __f__(\"log\", '登录成功', \" at service.js:264\");\n                        __f__(\"log\", res.data, \" at service.js:265\");\n                        uni.setStorageSync('token', res.data.data.token);\n                        //获取手机号\n                        /*\r\n                        if(!res.data.data.phone){\r\n                        \tif(num==1){\r\n                        \t\tuni.redirectTo({\r\n                        \t\t\turl:'/pages/login_tel/login_tel'\r\n                        \t\t})\r\n                        \t}\r\n                        \treturn\r\n                        }*/\n                        _index.default.commit('logindata', res.data.data);\n                        _index.default.commit('login', res.data.data.nickname);\n\n                        uni.setStorageSync('loginmsg', res.data.data);\n                        //0 商家端  1 用户端  2智能安装端\n                        __f__(\"log\", 'store.xcx_status', \" at service.js:282\");\n                        __f__(\"log\", _index.default.state.xcx_status, \" at service.js:283\");\n                        if (num == 1) {\n                          __f__(\"log\", res.data.data.is_engineer, \" at service.js:285\");\n                          if (res.data.data.is_owner == 1) {\n                            _index.default.commit('set_xcx', 1);\n                            return;\n                          }\n                          if (res.data.data.is_engineer == 1) {\n                            _index.default.commit('set_xcx', 2);\n                            return;\n                          }\n                          if (res.data.data.is_seller == 1) {\n                            _index.default.commit('set_xcx', 0);\n                          }\n                        }\n                        // im login\n\n\n\n                        if (num == 1) {\n                          uni.showToast({\n                            icon: 'none',\n                            title: '登录成功' });\n\n                          setTimeout(function () {\n                            _event.default.trigger({\n                              type: 'test',\n                              page: '/pages/index/index',\n                              //obj和test是举的例子，随意啥都行，这个传过去在on中的args中都可以获取到\n                              obj: {},\n\n\n                              test: {\n                                'loginmsg': res.data.data },\n\n                              success: function success(data) {\n                                //data为on中返回的数据\n                              } });\n\n                          }, 1000);\n                          setTimeout(function () {\n                            uni.navigateBack();\n                          }, 1500);\n                        } else {\n                          _event.default.trigger({\n                            type: 'test',\n                            page: '/pages/index/index',\n                            //obj和test是举的例子，随意啥都行，这个传过去在on中的args中都可以获取到\n                            obj: {},\n\n\n                            test: {\n                              'loginmsg': res.data.data },\n\n                            success: function success(data) {\n                              //data为on中返回的数据\n                            } });\n\n                        }\n                      } else {\n                        uni.removeStorageSync('userInfo');\n                        uni.removeStorageSync('token');\n                        if (res.msg) {\n                          uni.showToast({\n                            icon: 'none',\n                            title: res.msg });\n\n                        } else {\n                          uni.showToast({\n                            icon: 'none',\n                            title: '登录失败' });\n\n                        }\n                      }\n\n                    },\n                    fail: function fail() {\n                      uni.hideLoading();\n                      uni.showToast({\n                        icon: 'none',\n                        title: '登录失败' });\n\n                    } });\n\n                } });\n\n            }\n          } });\n\n\n      } else {\n        uni.hideLoading();\n      }\n    } });\n\n};\n// 手机号登录\nvar login_tel = function login_tel(num) {\n  var datas;\n  var tel;\n  var password;\n  if (uni.getStorageSync('tel')) {\n    tel = uni.getStorageSync('tel');\n    password = uni.getStorageSync('password');\n    datas = {\n      username: tel,\n      password: password };\n\n  } else {\n    return;\n  }\n\n  var jkurl = '/minapp/login';\n  P_post(jkurl, datas).then(function (res) {\n    __f__(\"log\", res, \" at service.js:397\");\n    if (res.code == 1) {\n      var datas = res.data;\n      __f__(\"log\", typeof datas, \" at service.js:400\");\n\n      if (typeof datas == 'string') {\n        datas = JSON.parse(datas);\n      }\n      __f__(\"log\", '登录成功', \" at service.js:405\");\n      uni.setStorageSync('tel', tel);\n      uni.setStorageSync('password', password);\n      uni.setStorageSync('token', datas.token);\n      uni.setStorageSync('loginmsg', datas);\n      _index.default.commit('logindata', datas);\n      _index.default.commit('login', datas.username);\n      // setTimeout(() => {\n      // \tuni.navigateBack({\n      // \t\tdelta: 1\n      // \t})\n      // }, 1000)\n\n    } else {\n      if (res.msg) {\n        uni.showToast({\n          icon: 'none',\n          title: res.msg });\n\n      } else {\n        uni.showToast({\n          icon: 'none',\n          title: '操作失败' });\n\n      }\n    }\n  }).catch(function (e) {\n    __f__(\"log\", e, \" at service.js:432\");\n    uni.showToast({\n      icon: 'none',\n      title: '操作失败' });\n\n  });\n};\nvar setUsermsg = function setUsermsg(data) {\n  var jkurl = '/user/amendInfo';\n\n  post(jkurl, data,\n  function (res) {\n\n    // if (res.data.code == 1) {\n    if (res.data.code == 1) {\n      var datas = res.data.data;\n      // console.log(typeof datas)\n\n      if (typeof datas == 'string') {\n        datas = JSON.parse(datas);\n      }\n      wxlogin();\n      uni.showToast({\n        title: '操作成功' });\n\n\n    } else {\n      if (res.data.msg) {\n        uni.showToast({\n          icon: 'none',\n          title: res.data.msg });\n\n      } else {\n        uni.showToast({\n          icon: 'none',\n          title: '操作失败' });\n\n      }\n    }\n  },\n  function (err) {\n    that.btnkg = 0;\n\n    uni.showToast({\n      icon: 'none',\n      title: '获取数据失败' });\n\n\n  });\n\n};\n\n// 上传图片\nvar wx_upload = function wx_upload(tximg) {\n  return new Promise(function (resolve, reject) {\n    uni.showLoading({\n      mask: true,\n      title: '正在上传' });\n\n\n    uni.uploadFile({\n      url: IPurl + 'minapp/upload-img',\n      filePath: tximg,\n      name: 'img',\n      formData: {\n        token: uni.getStorageSync('token') },\n\n      // success: (uploadFileRes) => {\n      // \tconsole.log(uploadFileRes.data);\n      // \tvar ndata = JSON.parse(uploadFileRes.data)\n      // \tresolve(uploadFileRes)\n      // },\n      complete: function complete(res) {\n        uni.hideLoading();\n        uni.stopPullDownRefresh(); //慎用hideLoading,会关闭wx.showToast弹窗\n        // console.log(`耗时${Date.now() - timeStart}`);\n        __f__(\"log\", res, \" at service.js:508\");\n        if (res.statusCode == 200) {//请求成功\n          var ndata = JSON.parse(res.data);\n          if (ndata.code == -1) {\n            _index.default.commit('logout');\n            uni.navigateTo({\n              url: '/pages/login/login' });\n\n            return;\n          } else if (ndata.code == 0) {\n            if (ndata.msg) {\n\n              uni.showToast({\n                icon: 'none',\n                title: ndata.msg });\n\n            } else {\n\n              uni.showToast({\n                icon: 'none',\n                title: '操作失败' });\n\n            }\n          }\n          resolve(ndata);\n        } else {\n          reject(res);\n        }\n      } });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  });\n\n};\n\n\n\n\n\n// 配置接口请求的公共方法\nvar http = function http() {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$url = _ref.url,url = _ref$url === void 0 ? '' : _ref$url,_ref$param = _ref.param,param = _ref$param === void 0 ? {} : _ref$param,_ref$method = _ref.method,method = _ref$method === void 0 ? '' : _ref$method,_ref$header = _ref.header,header = _ref$header === void 0 ? { 'content-type': 'application/x-www-form-urlencoded' } : _ref$header;\n\n  var timeStart = Date.now();\n  return new Promise(function (resolve, reject) {\n    __f__(\"log\", '请求url：' + getUrl(url), \" at service.js:614\");\n\n    __f__(\"log\", \"请求头：\", header, \" at service.js:616\");\n    __f__(\"log\", \"param：\", param, \" at service.js:617\");\n    uni.request({\n      url: getUrl(url),\n      data: param,\n      method: method,\n      header: header,\n      complete: function complete(res) {\n        uni.hideLoading();\n        uni.stopPullDownRefresh(); //慎用hideLoading,会关闭wx.showToast弹窗\n        __f__(\"log\", \"\\u8017\\u65F6\".concat(Date.now() - timeStart), \" at service.js:626\");\n        __f__(\"log\", res, \" at service.js:627\");\n        if (res.statusCode == 200) {//请求成功\n          __f__(\"log\", res, \" at service.js:629\");\n          if (res.data.code == -1) {\n            _index.default.commit('logout');\n            uni.navigateTo({\n              url: '/pages/login/login' });\n\n            return;\n          } else if (res.data.code == 0 && res.msg == '请先登录账号~') {\n            uni.navigateTo({\n              url: '/pages/login/login' });\n\n            return;\n          } else if (res.data.code == 0) {\n            if (res.data.msg) {\n\n              uni.showToast({\n                icon: 'none',\n                title: res.data.msg });\n\n            } else {\n\n              uni.showToast({\n                icon: 'none',\n                title: '操作失败' });\n\n            }\n          }\n          resolve(res.data);\n        } else {\n          reject(res);\n        }\n      } });\n\n  });\n};\n// 获取url\nvar getUrl = function getUrl(url) {\n  if (!url) {\n    return url;\n  }\n  if (url.slice(0, 1) == \"/\") {\n    __f__(\"log\", true, \" at service.js:670\");\n    url = url.substr(1);\n  }\n  if (url.indexOf('://') == -1) {\n    url = IPurl + url;\n  }\n  return url;\n};\n//暴露出去调用的方法\n\n\n// get方法\nvar P_get = function P_get(url) {var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  if (!param.load_mode) {\n    wx.showLoading({\n      title: '请求中，请耐心等待...' });\n\n  }\n  return http({\n    url: url,\n    param: param,\n    method: 'GET' });\n\n};\n\nvar P_post = function P_post(url) {var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return http({\n    url: url,\n    param: param,\n    method: \"POST\" });\n\n};\n\nvar P_put = function P_put(url) {var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return http({\n    url: url,\n    param: param,\n    method: 'put' });\n\n};\n\nvar P_delete = function P_delete(url) {var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return http({\n    url: url,\n    param: param,\n    method: 'put' });\n\n};\n// // 单个请求\n// service.P_get('/cate/list').then(res => {\n// \tconsole.log(res)\n// }).catch(e => {\n// \tconsole.log(e)\n// })\n\n// // 一个页面多个请求\n// Promise.all([\n//   service.P_get('/cate/list'),\n//   service.P_get(`detail/${id}`)\n// ]).then(result => {\n//   console.log(result)\n// }).catch(e => {\n//   console.log(e)\n// })\nvar getimg = function getimg(img) {\n  // return img\n\n\n\n  if (!img) return;\n  // console.log(imgurl+img)\n  if (img.indexOf('://') == -1) {\n    img = imgurl + img;\n  }\n  return img;\n};\nvar getimgarr = function getimgarr(imgs, type) {\n  if (!imgs) return;\n  if (!type) {\n    type = ',';\n  }\n  imgs = imgs.split(type);\n  // console.log(imgurl+img)\n  var newimgs = [];\n  for (var i = 0; i < imgs.length; i++) {\n    var img = imgs[i];\n    if (img.indexOf('://') == -1) {\n      img = imgurl + img;\n    }\n    newimgs.push(img);\n  }\n  // console.log(newimgs)\n  return newimgs;\n};\nvar gettime = function gettime(mj) {\n  if (!mj) {\n    return {};\n  }\n  // // console.log(mj.indexOf('今天')!=-1)\n  // if(mj.indexOf('今天')!=-1){\n  // \treturn {\n  // \t\ttype:2,\n\n  // \t\ttime:mj\n  // \t}\n  // }\n  // mj = mj.replace(/-/g,'/')\n  var ntime = new Date(mj * 1000);\n  // console.log(ntime)\n  var n_year = ntime.getFullYear();\n  var n_month = ntime.getMonth() + 1;\n  var n_date = ntime.getDate();\n  var n_hour = ntime.getHours();\n  var n_minute = ntime.getMinutes();\n\n  var time = new Date();\n  var year = time.getFullYear();\n  var month = time.getMonth() + 1;\n  var date = time.getDate();\n  var hour = time.getHours();\n  var minute = time.getMinutes();\n  // n_month=n_month<10? '0'+n_month:n_month\n  n_date = n_date < 10 ? '0' + n_date : n_date;\n  n_hour = n_hour < 10 ? '0' + n_hour : n_hour;\n  n_minute = n_minute < 10 ? '0' + n_minute : n_minute;\n  if (n_year == year) {\n\n    return {\n      type: 1,\n      year: n_year,\n      month: n_month,\n      date: n_date,\n      hour: n_hour,\n      minute: n_minute,\n      time: '今天 ' + n_hour + ':' + n_minute };\n\n  } else {\n\n    return {\n      type: 2,\n      year: n_year,\n      month: n_month,\n      date: n_date,\n      hour: n_hour,\n      minute: n_minute,\n      time: n_year + '-' + n_month + '-' + n_date };\n\n  }\n};\n\n\nvar get_fwb = function get_fwb(str) {\n  if (!str) {\n    return;\n  }\n  str = str // .replace(/<p([\\s\\w\"=\\/\\.:;]+)((?:(style=\"[^\"]+\")))/ig, '<p')\n  .replace(/<p([\\s\\w\"-=\\/\\.:;]+)((?:(class=\"[^\"]+\")))/ig, '<p $1').\n  replace(/<p([\\s\\w\"-=\\/\\.:;]+)/ig, '<p$1 class=\"xcx_fwb_p\"')\n  // .replace(/<div([\\s\\w\"=\\/\\.:;]+)((?:(style=\"[^\"]+\")))/ig, '<div')\n  .replace(/<div([\\s\\w\"-=\\/\\.:;]+)((?:(class=\"[^\"]+\")))/ig, '<div $1').\n  replace(/<div([\\s\\w\"-=\\/\\.:;]+)/ig, '<div$1 class=\"xcx_fwb_div\"')\n\n  // .replace(/<img([\\s\\w\"-=\\/\\.:;]+)((?:(height=\"[^\"]+\")))/ig, '<img $1')\n  // .replace(/<img([\\s\\w\"-=\\/\\.:;]+)((?:(width=\"[^\"]+\")))/ig, '<img $1')\n  // .replace(/<img([\\s\\w\"-=\\/\\.:;]+)((?:(style=\"[^\"]+\")))/ig, '<img $1')\n  .replace(/<img([\\s\\w\"-=\\/\\.:;]+)((?:(alt=\"[^\"]+\")))/ig, '<img $1').\n  replace(/<img([\\s\\w\"-=\\/\\.:;]+)((?:(class=\"[^\"]+\")))/ig, '<img $1').\n  replace(/<img([\\s\\w\"-=\\/\\.:;]+)/ig, '<img$1 class=\"xcx_fwb_img\"');\n  return str;\n};var _default =\n{\n  getUsers: getUsers,\n  addUser: addUser,\n  get: get,\n  post: post,\n  IPurl: IPurl,\n  map_key: map_key,\n  imgurl: imgurl,\n  gologin: gologin,\n  jump: jump,\n  call: call,\n  wxlogin: wxlogin,\n  login_tel: login_tel,\n  setUsermsg: setUsermsg,\n  P_get: P_get,\n  P_post: P_post,\n  P_put: P_put,\n  P_delete: P_delete,\n  gettime: gettime,\n  getimg: getimg,\n  getimgarr: getimgarr,\n  pveimg: pveimg,\n  get_fwb: get_fwb,\n  wx_upload: wx_upload };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc2VydmljZS5qcyJdLCJuYW1lcyI6WyJVU0VSU19LRVkiLCJTVEFURV9LRVkiLCJtYXBfa2V5IiwiaW1ndXJsIiwiSVB1cmwiLCJoZWFkZXIiLCJwb3N0IiwidXJsIiwicGFyYW1zIiwib25TdWNjZXNzIiwib25GYWlsZWQiLCJyZXF1ZXN0IiwiZ2V0IiwibWV0aG9kIiwidW5pIiwiZGF0YSIsImRlYWxQYXJhbXMiLCJzdWNjZXNzIiwicmVzIiwiaGlkZUxvYWRpbmciLCJzdG9wUHVsbERvd25SZWZyZXNoIiwiY29kZSIsInNob3dUb2FzdCIsImljb24iLCJ0aXRsZSIsInN0b3JlIiwiY29tbWl0Iiwic2V0VGltZW91dCIsIm5hdmlnYXRlVG8iLCJmYWlsIiwiZXJyb3IiLCJnZXRVc2VycyIsInJldCIsImdldFN0b3JhZ2VTeW5jIiwiSlNPTiIsInBhcnNlIiwiYWRkVXNlciIsInVzZXJJbmZvIiwidXNlcnMiLCJwdXNoIiwiYWNjb3VudCIsInBhc3N3b3JkIiwic2V0U3RvcmFnZVN5bmMiLCJzdHJpbmdpZnkiLCJnb2xvZ2luIiwianVtcCIsImUiLCJkYXRhcyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibG9naW4iLCJoYXNsb2dpbiIsInR5cGUiLCJzcHVybCIsInN3aXRjaFRhYiIsInJlZGlyZWN0VG8iLCJwdmVpbWciLCJjdXJyZW50Iiwic3JjIiwidXJscyIsImFycmF5IiwidXJsczEiLCJwcmV2aWV3SW1hZ2UiLCJjYWxsIiwidGVsIiwic2hvd01vZGFsIiwiY29udGVudCIsImNvbmZpcm0iLCJ3eCIsIm1ha2VQaG9uZUNhbGwiLCJwaG9uZU51bWJlciIsImNhbmNlbCIsInd4bG9naW4iLCJudW0iLCJ0aGF0Iiwic2hvd0xvYWRpbmciLCJtYXNrIiwiZ2V0U2V0dGluZyIsImF1dGhTZXR0aW5nIiwiZ2V0VXNlckluZm8iLCJ1aW5mbyIsIm5pY2tuYW1lIiwibmlja05hbWUiLCJjb3ZlciIsImF2YXRhclVybCIsInJjb2RlIiwiZGF0YVR5cGUiLCJ0b2tlbiIsInN0YXRlIiwieGN4X3N0YXR1cyIsImlzX2VuZ2luZWVyIiwiaXNfb3duZXIiLCJpc19zZWxsZXIiLCJldmVudCIsInRyaWdnZXIiLCJwYWdlIiwib2JqIiwidGVzdCIsIm5hdmlnYXRlQmFjayIsInJlbW92ZVN0b3JhZ2VTeW5jIiwibXNnIiwibG9naW5fdGVsIiwidXNlcm5hbWUiLCJqa3VybCIsIlBfcG9zdCIsInRoZW4iLCJjYXRjaCIsInNldFVzZXJtc2ciLCJlcnIiLCJidG5rZyIsInd4X3VwbG9hZCIsInR4aW1nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cGxvYWRGaWxlIiwiZmlsZVBhdGgiLCJuYW1lIiwiZm9ybURhdGEiLCJjb21wbGV0ZSIsInN0YXR1c0NvZGUiLCJuZGF0YSIsImh0dHAiLCJwYXJhbSIsInRpbWVTdGFydCIsIkRhdGUiLCJub3ciLCJnZXRVcmwiLCJzbGljZSIsInN1YnN0ciIsImluZGV4T2YiLCJQX2dldCIsImxvYWRfbW9kZSIsIlBfcHV0IiwiUF9kZWxldGUiLCJnZXRpbWciLCJpbWciLCJnZXRpbWdhcnIiLCJpbWdzIiwic3BsaXQiLCJuZXdpbWdzIiwiaSIsImxlbmd0aCIsImdldHRpbWUiLCJtaiIsIm50aW1lIiwibl95ZWFyIiwiZ2V0RnVsbFllYXIiLCJuX21vbnRoIiwiZ2V0TW9udGgiLCJuX2RhdGUiLCJnZXREYXRlIiwibl9ob3VyIiwiZ2V0SG91cnMiLCJuX21pbnV0ZSIsImdldE1pbnV0ZXMiLCJ0aW1lIiwieWVhciIsIm1vbnRoIiwiZGF0ZSIsImhvdXIiLCJtaW51dGUiLCJnZXRfZndiIiwic3RyIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Im9JQUFBO0FBQ0E7QUFDQSxzRjtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFdBQWxCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFdBQWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUMsT0FBTyxHQUFDLHFDQUFkO0FBQ0EsSUFBTUMsTUFBTSxHQUFDLHlC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YixFQVU0RCxTQVY1RDtBQVdLQSxTQVhMLENBV2EsK0NBWGIsRUFXOEQsU0FYOUQ7QUFZS0EsU0FaTCxDQVlhLDBCQVpiLEVBWXlDLDRCQVp6QyxDQUFOO0FBYUEsU0FBT0QsR0FBUDtBQUNBLENBbEJKLEM7QUFtQmU7QUFDZHBJLFVBQVEsRUFBUkEsUUFEYztBQUVkSyxTQUFPLEVBQVBBLE9BRmM7QUFHZHhCLEtBQUcsRUFBSEEsR0FIYztBQUlkTixNQUFJLEVBQUpBLElBSmM7QUFLZEYsT0FBSyxFQUFMQSxLQUxjO0FBTWRGLFNBQU8sRUFBUEEsT0FOYztBQU9kQyxRQUFNLEVBQU5BLE1BUGM7QUFRZHlDLFNBQU8sRUFBUEEsT0FSYztBQVNkQyxNQUFJLEVBQUpBLElBVGM7QUFVZGtCLE1BQUksRUFBSkEsSUFWYztBQVdkUyxTQUFPLEVBQVBBLE9BWGM7QUFZZDZCLFdBQVMsRUFBVEEsU0FaYztBQWFkTSxZQUFVLEVBQVZBLFVBYmM7QUFjZHdCLE9BQUssRUFBTEEsS0FkYztBQWVkM0IsUUFBTSxFQUFOQSxNQWZjO0FBZ0JkNkIsT0FBSyxFQUFMQSxLQWhCYztBQWlCZEMsVUFBUSxFQUFSQSxRQWpCYztBQWtCZFMsU0FBTyxFQUFQQSxPQWxCYztBQW1CZFIsUUFBTSxFQUFOQSxNQW5CYztBQW9CZEUsV0FBUyxFQUFUQSxTQXBCYztBQXFCZGpGLFFBQU0sRUFBTkEsTUFyQmM7QUFzQmQwRyxTQUFPLEVBQVBBLE9BdEJjO0FBdUJkcEQsV0FBUyxFQUFUQSxTQXZCYyxFIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlL2luZGV4LmpzJ1xyXG5pbXBvcnQgZXZlbnQgZnJvbSAnLi9jb21tb24vZXZlbnQuanMnXHJcbi8vIOeuoeeQhui0puWPt+S/oeaBr1xyXG5jb25zdCBVU0VSU19LRVkgPSAnVVNFUlNfS0VZJztcclxuY29uc3QgU1RBVEVfS0VZID0gJ1NUQVRFX0tFWSc7XHJcbi8vIGNvbnN0IElQdXJsID0gJ2h0dHBzOi8vZGF0aXhjeC5jb20uYWEuODAwMTIzNDU2LnRvcC9hcGkvJztcclxuLy8gY29uc3QgaW1ndXJsID0gJ2h0dHBzOi8vZGF0aXhjeC5jb20uYWEuODAwMTIzNDU2LnRvcC8nO1xyXG4vLyBjb25zdCBpbWd1cmwgPSAnaHR0cDovLzE5Mi4xNjguMTI5LjI0Ni8nO1xyXG5jb25zdCBtYXBfa2V5PVwiN0ZFQlotV0xXSzItUE1HVUUtQzRCRlQtRUtYQjYtQkZGTlJcIlxyXG5jb25zdCBpbWd1cmw9XCJodHRwOi8vMTkyLjE2OC4xMzMuMTU4L1wiXHJcbmNvbnN0IElQdXJsPWltZ3VybCsnYXBpLydcclxuLy8gY29uc3QgSVB1cmw9J2h0dHA6Ly8xOTIuMTY4LjEyOS4yNDYvYXBpLydcclxuLy8gY29uc3QgYWRtaW51cmw9J2h0dHBzOi8vZGF0aXhjeC5jb20uYWEuODAwMTIzNDU2LnRvcC9hZG1pbi8nO1xyXG4vLyBhcHBpZDp3eGY2MWVjZDQ3MmFiZTQxY2IgIOato+W8j1xyXG4vLyBhcHBpZDp3eDQ5YTU2MGY3ZmVhYzBmZWIgICBjalxyXG4vKipcclxuICog6K+35rGC5aS0XHJcbiAqL1xyXG52YXIgaGVhZGVyID0ge1xyXG5cdCdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIOS+m+WklumDqHBvc3Tor7fmsYLosIPnlKggIFxyXG4gKi9cclxuZnVuY3Rpb24gcG9zdCh1cmwsIHBhcmFtcywgb25TdWNjZXNzLCBvbkZhaWxlZCkge1xyXG5cdGNvbnNvbGUubG9nKFwi6K+35rGC5pa55byP77yaXCIsIFwiUE9TVFwiKVxyXG5cdHJlcXVlc3QodXJsLCBwYXJhbXMsIFwiUE9TVFwiLCBvblN1Y2Nlc3MsIG9uRmFpbGVkKTtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDkvpvlpJbpg6hnZXTor7fmsYLosIPnlKhcclxuICovXHJcbmZ1bmN0aW9uIGdldCh1cmwsIHBhcmFtcywgb25TdWNjZXNzLCBvbkZhaWxlZCkge1xyXG5cdGNvbnNvbGUubG9nKFwi6K+35rGC5pa55byP77yaXCIsIFwiR0VUXCIpXHJcblx0cmVxdWVzdCh1cmwsIHBhcmFtcywgXCJHRVRcIiwgb25TdWNjZXNzLCBvbkZhaWxlZCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBmdW5jdGlvbjog5bCB6KOF572R57uc6K+35rGCXHJcbiAqIEB1cmwgVVJM5Zyw5Z2AXHJcbiAqIEBwYXJhbXMg6K+35rGC5Y+C5pWwXHJcbiAqIEBtZXRob2Qg6K+35rGC5pa55byP77yaR0VUL1BPU1RcclxuICogQG9uU3VjY2VzcyDmiJDlip/lm57osINcclxuICogQG9uRmFpbGVkICDlpLHotKXlm57osINcclxuICovXHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0KHVybCwgcGFyYW1zLCBtZXRob2QsIG9uU3VjY2Vzcywgb25GYWlsZWQpIHtcclxuXHRjb25zb2xlLmxvZygn6K+35rGCdXJs77yaJyArIHVybCk7XHJcblxyXG5cdGNvbnNvbGUubG9nKFwi6K+35rGC5aS077yaXCIsIGhlYWRlcilcclxuXHR1bmkucmVxdWVzdCh7XHJcblx0XHR1cmw6IElQdXJsICsgdXJsLFxyXG5cdFx0ZGF0YTogZGVhbFBhcmFtcyhwYXJhbXMpLFxyXG5cdFx0bWV0aG9kOiBtZXRob2QsXHJcblx0XHRoZWFkZXI6IGhlYWRlcixcclxuXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0dW5pLnN0b3BQdWxsRG93blJlZnJlc2goKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ+WTjeW6lO+8micsIHJlcy5kYXRhKTtcclxuXHJcblx0XHRcdC8vIGlmIChyZXMuZGF0YSkge1xyXG5cdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAtMSkge1xyXG5cdFx0XHRcdC8vIGlmIChwYXJhbXMubG9naW5fdHlwZSA9PSAxKSB7XHJcblx0XHRcdFx0Ly8gXHQvL+S4gOi/m+adpeWwseeZu+W9leWksei0pVxyXG5cdFx0XHRcdC8vIFx0cmV0dXJuXHJcblxyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0XHQvLyBpZiAocGFyYW1zLmxvZ2luX3R5cGUgPT0gMikge1xyXG5cdFx0XHRcdC8vIFx0Ly/mjojmnYPnmbvlvZXlpLHotKVcclxuXHRcdFx0XHQvLyBcdHVuaS5uYXZpZ2F0ZUJhY2soKVxyXG5cdFx0XHRcdC8vIFx0cmV0dXJuXHJcblxyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdHRpdGxlOiAn6K+35YWI5o6I5p2D55m75b2VJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0c3RvcmUuY29tbWl0KCdsb2dvdXQnKVxyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCl7XHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDogJy4vcGFnZXMvbG9naW4vbG9naW4/aGFzbG9naW49ZmFsc2UnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0sMTAwMClcclxuXHRcdFx0XHRyZXR1cm5cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8qKiBzdGFydCDmoLnmja7pnIDmsYIg5o6l5Y+j55qE6L+U5Zue54q25oCB56CB6L+b6KGM5aSE55CGICovXHJcblx0XHRcdG9uU3VjY2VzcyhyZXMpO1xyXG5cdFx0XHQvKiogZW5kIOWkhOeQhue7k+adnyovXHJcblx0XHRcdC8vIH1cclxuXHRcdH0sXHJcblx0XHRmYWlsOiBmdW5jdGlvbihlcnJvcikge1xyXG5cclxuXHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdHVuaS5zdG9wUHVsbERvd25SZWZyZXNoKCk7XHJcblx0XHRcdG9uRmFpbGVkKGVycm9yKTsgLy9mYWlsdXJlIGZvciBvdGhlciByZWFzb25zXHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuLyoqXHJcbiAqIGZ1bmN0aW9uOiDmoLnmja7pnIDmsYLlpITnkIbor7fmsYLlj4LmlbDvvJrmt7vliqDlm7rlrprlj4LmlbDphY3nva7nrYlcclxuICogQHBhcmFtcyDor7fmsYLlj4LmlbBcclxuICovXHJcbmZ1bmN0aW9uIGRlYWxQYXJhbXMocGFyYW1zKSB7XHJcblx0Y29uc29sZS5sb2coXCLor7fmsYLlj4LmlbA6XCIsIHBhcmFtcylcclxuXHRyZXR1cm4gcGFyYW1zO1xyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IGdldFVzZXJzID0gZnVuY3Rpb24oKSB7XHJcblx0bGV0IHJldCA9ICcnO1xyXG5cdHJldCA9IHVuaS5nZXRTdG9yYWdlU3luYyhVU0VSU19LRVkpO1xyXG5cdGlmICghcmV0KSB7XHJcblx0XHRyZXQgPSAnW10nO1xyXG5cdH1cclxuXHRyZXR1cm4gSlNPTi5wYXJzZShyZXQpO1xyXG59XHJcblxyXG5jb25zdCBhZGRVc2VyID0gZnVuY3Rpb24odXNlckluZm8pIHtcclxuXHRsZXQgdXNlcnMgPSBnZXRVc2VycygpO1xyXG5cdHVzZXJzLnB1c2goe1xyXG5cdFx0YWNjb3VudDogdXNlckluZm8uYWNjb3VudCxcclxuXHRcdHBhc3N3b3JkOiB1c2VySW5mby5wYXNzd29yZFxyXG5cdH0pO1xyXG5cdHVuaS5zZXRTdG9yYWdlU3luYyhVU0VSU19LRVksIEpTT04uc3RyaW5naWZ5KHVzZXJzKSk7XHJcbn1cclxuXHJcbmNvbnN0IGdvbG9naW4gPSBmdW5jdGlvbigpIHtcclxuXHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHR1cmw6ICcvcGFnZXMvbG9naW5faW5kZXgvbG9naW5faW5kZXgnXHJcblx0fSlcclxufVxyXG5cclxuY29uc3QganVtcCA9IGZ1bmN0aW9uKGUpIHtcclxuXHQvLyBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50eXBlKVxyXG5cdHZhciBkYXRhcz1lLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxyXG5cdGNvbnNvbGUubG9nKGRhdGFzLmxvZ2luPT10cnVlKVxyXG5cdFxyXG5cdGlmKGRhdGFzLmxvZ2luPT10cnVlKXtcclxuXHRcdGlmKCFkYXRhcy5oYXNsb2dpbil7XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6ICcuLi9sb2dpbi9sb2dpbicsXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHR9XHJcblx0aWYoZGF0YXMudHlwZT09J3NwJyl7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhcy5zcHVybClcclxuXHRcdHN0b3JlLmNvbW1pdCgnc3B1cmxfZnVjJywgZGF0YXMuc3B1cmwpXHJcblx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdHVybDogZGF0YXMudXJsXHJcblx0XHR9KVxyXG5cdFx0cmV0dXJuXHJcblx0fVxyXG5cdGlmIChkYXRhcy50eXBlID09IDIpIHtcclxuXHRcdHVuaS5zd2l0Y2hUYWIoe1xyXG5cdFx0XHR1cmw6IGRhdGFzLnVybFxyXG5cdFx0fSlcclxuXHR9IGVsc2UgaWYgKGRhdGFzLnR5cGUgPT0gMykge1xyXG5cdFx0dW5pLnJlZGlyZWN0VG8oe1xyXG5cdFx0XHR1cmw6IGRhdGFzLnVybFxyXG5cdFx0fSlcclxuXHR9IGVsc2Uge1xyXG5cdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHR1cmw6IGRhdGFzLnVybFxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuY29uc3QgcHZlaW1nID0gZnVuY3Rpb24oZSkge1xyXG5cdHZhciBjdXJyZW50ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc3JjXHJcblx0dmFyIHVybHMgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5hcnJheVxyXG5cclxuXHRsZXQgdXJsczEgPSBbXVxyXG5cdGlmICh1cmxzKSB7XHJcblx0XHR1cmxzMSA9IHVybHNcclxuXHJcblx0fSBlbHNlIHtcclxuXHRcdHVybHMxWzBdID0gY3VycmVudFxyXG5cdH1cclxuXHQvLyBjb25zb2xlLmxvZyh1cmxzMSlcclxuXHR1bmkucHJldmlld0ltYWdlKHtcclxuXHRcdGN1cnJlbnQ6IGN1cnJlbnQsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcclxuXHRcdHVybHM6IHVybHMxIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcclxuXHR9KVxyXG5cclxufVxyXG5jb25zdCBjYWxsPSAgZnVuY3Rpb24gKGUpe1xyXG5cdGNvbnNvbGUubG9nKGUpXHJcblx0Ly8gcmV0dXJuXHJcblx0aWYoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGVsKXtcclxuXHRcdC8vIHd4Lm1ha2VQaG9uZUNhbGwoe1xyXG5cdFx0Ly8gXHRwaG9uZU51bWJlcjogZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGVsKycnXHJcblx0XHQvLyB9KVxyXG5cdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHQgICAgdGl0bGU6ICfmj5DnpLonLFxyXG5cdFx0ICAgIGNvbnRlbnQ6ICfmmK/lkKbmi6jmiZMnK2UuY3VycmVudFRhcmdldC5kYXRhc2V0LnRlbCsnPycsXHJcblx0XHQgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG5cdFx0ICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuXHRcdFx0XHRcdFx0XHR3eC5tYWtlUGhvbmVDYWxsKHtcclxuXHRcdFx0XHRcdFx0XHRcdHBob25lTnVtYmVyOiBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50ZWwrJydcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKTtcclxuXHRcdCAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcblx0XHQgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye75Y+W5raIJyk7XHJcblx0XHQgICAgICAgIH1cclxuXHRcdCAgICB9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuLy8g5b6u5L+h55m75b2VXHJcbmNvbnN0IHd4bG9naW49ZnVuY3Rpb24gKG51bSl7XHJcblx0dmFyIHRoYXQgPXRoaXNcclxuXHQvLyDojrflj5bnlKjmiLfkv6Hmga9cclxuXHRpZiAobnVtID09IDEpIHtcclxuXHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdHRpdGxlOiAn5q2j5Zyo55m75b2VJyxcclxuXHRcdFx0bWFzazogdHJ1ZVxyXG5cdFx0fSlcclxuXHR9XHJcblx0dW5pLmdldFNldHRpbmcoe1xyXG5cdCAgc3VjY2VzczogcmVzID0+IHtcclxuXHQgICBjb25zb2xlLmxvZyhyZXMpXHJcblx0ICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ109PXRydWUpIHtcclxuXHQgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ew77yM5LiN5Lya5by55qGGXHJcblx0ICAgICAgY29uc29sZS5sb2coJ+W3sue7j+aOiOadgycpXHJcblx0XHRcdFx0dW5pLmdldFVzZXJJbmZvKHtcclxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdHZhciB1c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh1c2VySW5mbylcclxuXHRcdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycsIHJlcy51c2VySW5mbylcclxuXHRcdFx0XHRcdFx0aWYoIXVzZXJJbmZvKXtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdCAgICAgICAgICAgIHVuaS5sb2dpbih7XHJcblx0ICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdCAgICAgICAgICAgICAgICAvLyDlj5HpgIEgcmVzLmNvZGUg5Yiw5ZCO5Y+w5o2i5Y+WIG9wZW5JZCwgc2Vzc2lvbktleSwgdW5pb25JZFxyXG5cdCAgICAgICAgICAgICAgICB2YXIgdWluZm8gPSB1c2VySW5mb1xyXG5cdCAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcclxuXHQgICAgICAgICAgICAgICAgICBjb2RlOiByZXMuY29kZSxcclxuXHQgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogdWluZm8ubmlja05hbWUsXHJcblx0ICAgICAgICAgICAgICAgICAgY292ZXI6IHVpbmZvLmF2YXRhclVybFxyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgIGxldCByY29kZSA9IHJlcy5jb2RlXHJcblx0ICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5jb2RlKVxyXG5cdCAgICAgICAgICAgICAgICB1bmkucmVxdWVzdCh7XHJcblx0ICAgICAgICAgICAgICAgICAgdXJsOiBJUHVybCsndXNlci9sb2dpbicsXHJcblx0ICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuXHQgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcclxuXHQgICAgICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG5cdCAgICAgICAgICAgICAgICAgIH0sXHJcblx0ICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuXHQgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuXHQgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHQgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgPT0gMSkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55m75b2V5oiQ5YqfJylcclxuXHQgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcblx0ICAgICAgICAgICAgICAgICAgICAgIHVuaS5zZXRTdG9yYWdlU3luYygndG9rZW4nLCByZXMuZGF0YS5kYXRhLnRva2VuKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvL+iOt+WPluaJi+acuuWPt1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZighcmVzLmRhdGEuZGF0YS5waG9uZSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYobnVtPT0xKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5yZWRpcmVjdFRvKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsOicvcGFnZXMvbG9naW5fdGVsL2xvZ2luX3RlbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9Ki9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3RvcmUuY29tbWl0KCdsb2dpbmRhdGEnLCByZXMuZGF0YS5kYXRhKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdG9yZS5jb21taXQoJ2xvZ2luJywgcmVzLmRhdGEuZGF0YS5uaWNrbmFtZSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0ICAgICAgICAgICAgICAgICAgICAgIHVuaS5zZXRTdG9yYWdlU3luYygnbG9naW5tc2cnLCByZXMuZGF0YS5kYXRhKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLzAg5ZWG5a6256uvICAxIOeUqOaIt+erryAgMuaZuuiDveWuieijheerr1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnc3RvcmUueGN4X3N0YXR1cycpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHN0b3JlLnN0YXRlLnhjeF9zdGF0dXMpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmKG51bT09MSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzLmRhdGEuZGF0YS5pc19lbmdpbmVlcilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZihyZXMuZGF0YS5kYXRhLmlzX293bmVyPT0xKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0b3JlLmNvbW1pdCgnc2V0X3hjeCcsIDEpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYocmVzLmRhdGEuZGF0YS5pc19lbmdpbmVlcj09MSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdG9yZS5jb21taXQoJ3NldF94Y3gnLCAyKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmKHJlcy5kYXRhLmRhdGEuaXNfc2VsbGVyPT0xKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0b3JlLmNvbW1pdCgnc2V0X3hjeCcsIDApXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGltIGxvZ2luXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmKG51bT09MSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOifnmbvlvZXmiJDlip8nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRldmVudC50cmlnZ2VyKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICB0eXBlOid0ZXN0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBwYWdlOicvcGFnZXMvaW5kZXgvaW5kZXgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIC8vb2Jq5ZKMdGVzdOaYr+S4vueahOS+i+WtkO+8jOmaj+aEj+WVpemDveihjO+8jOi/meS4quS8oOi/h+WOu+WcqG9u5Lit55qEYXJnc+S4remDveWPr+S7peiOt+WPluWIsFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIG9iajp7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIHRlc3Q6e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2xvZ2lubXNnJzogcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgc3VjY2VzczpmdW5jdGlvbihkYXRhKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgLy9kYXRh5Li6b27kuK3ov5Tlm57nmoTmlbDmja5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LDEwMDApXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjaygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSwxNTAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRldmVudC50cmlnZ2VyKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgdHlwZTondGVzdCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIHBhZ2U6Jy9wYWdlcy9pbmRleC9pbmRleCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIC8vb2Jq5ZKMdGVzdOaYr+S4vueahOS+i+WtkO+8jOmaj+aEj+WVpemDveihjO+8jOi/meS4quS8oOi/h+WOu+WcqG9u5Lit55qEYXJnc+S4remDveWPr+S7peiOt+WPluWIsFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBvYmo6e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICB0ZXN0OntcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnbG9naW5tc2cnOiByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIHN1Y2Nlc3M6ZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAvL2RhdGHkuLpvbuS4rei/lOWbnueahOaVsOaNrlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHQgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYygndXNlckluZm8nKVxyXG5cdCAgICAgICAgICAgICAgICAgICAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ3Rva2VuJylcclxuXHQgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLm1zZyl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0aXRsZTogcmVzLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHRpdGxlOiAn55m75b2V5aSx6LSlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0ICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHJcblx0ICAgICAgICAgICAgICAgICAgfSxcclxuXHQgICAgICAgICAgICAgICAgICBmYWlsKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHQgICAgICAgICAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcblx0ICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn55m75b2V5aSx6LSlJ1xyXG5cdCAgICAgICAgICAgICAgICAgICAgfSlcclxuXHQgICAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgIH0pXHJcblx0ICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgfSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0XHJcblx0ICAgIH1lbHNle1xyXG5cdFx0XHQgIHVuaS5oaWRlTG9hZGluZygpXHJcblx0ICAgIH1cclxuXHQgIH1cclxuXHR9KVxyXG59XHJcbi8vIOaJi+acuuWPt+eZu+W9lVxyXG5jb25zdCBsb2dpbl90ZWwgPSBmdW5jdGlvbihudW0pIHtcclxuXHR2YXIgZGF0YXNcclxuXHR2YXIgdGVsXHJcblx0dmFyIHBhc3N3b3JkXHJcblx0aWYodW5pLmdldFN0b3JhZ2VTeW5jKCd0ZWwnKSl7XHJcblx0XHR0ZWw9IHVuaS5nZXRTdG9yYWdlU3luYygndGVsJylcclxuXHRcdHBhc3N3b3JkPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3Bhc3N3b3JkJylcclxuXHRcdGRhdGFzID0ge1xyXG5cdFx0XHR1c2VybmFtZTogdGVsLFxyXG5cdFx0XHRwYXNzd29yZDogcGFzc3dvcmRcclxuXHRcdH1cclxuXHR9ZWxzZXtcclxuXHRcdHJldHVyblxyXG5cdH1cclxuXHRcclxuXHR2YXIgamt1cmwgPSAnL21pbmFwcC9sb2dpbidcclxuXHRQX3Bvc3Qoamt1cmwsIGRhdGFzKS50aGVuKHJlcyA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRpZiAocmVzLmNvZGUgPT0gMSkge1xyXG5cdFx0XHR2YXIgZGF0YXMgPSByZXMuZGF0YVxyXG5cdFx0XHRjb25zb2xlLmxvZyh0eXBlb2YgZGF0YXMpXHJcblxyXG5cdFx0XHRpZiAodHlwZW9mIGRhdGFzID09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0ZGF0YXMgPSBKU09OLnBhcnNlKGRhdGFzKVxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnNvbGUubG9nKCfnmbvlvZXmiJDlip8nKVxyXG5cdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ3RlbCcsIHRlbClcclxuXHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdwYXNzd29yZCcsIHBhc3N3b3JkKVxyXG5cdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ3Rva2VuJywgZGF0YXMudG9rZW4pXHJcblx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygnbG9naW5tc2cnLCBkYXRhcylcclxuXHRcdFx0c3RvcmUuY29tbWl0KCdsb2dpbmRhdGEnLCBkYXRhcylcclxuXHRcdFx0c3RvcmUuY29tbWl0KCdsb2dpbicsIGRhdGFzLnVzZXJuYW1lKVxyXG5cdFx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0Ly8gXHR1bmkubmF2aWdhdGVCYWNrKHtcclxuXHRcdFx0Ly8gXHRcdGRlbHRhOiAxXHJcblx0XHRcdC8vIFx0fSlcclxuXHRcdFx0Ly8gfSwgMTAwMClcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAocmVzLm1zZykge1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0dGl0bGU6IHJlcy5tc2dcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0dGl0bGU6ICfmk43kvZzlpLHotKUnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pLmNhdGNoKGUgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coZSlcclxuXHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdHRpdGxlOiAn5pON5L2c5aSx6LSlJ1xyXG5cdFx0fSlcclxuXHR9KVxyXG59XHJcbmNvbnN0IHNldFVzZXJtc2c9ZnVuY3Rpb24oZGF0YSl7XHJcblx0dmFyIGprdXJsPScvdXNlci9hbWVuZEluZm8nXHJcblx0XHJcblx0cG9zdChqa3VybCwgZGF0YSxcclxuXHRcdGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gaWYgKHJlcy5kYXRhLmNvZGUgPT0gMSkge1xyXG5cdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxKSB7XHJcblx0XHRcdFx0dmFyIGRhdGFzID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHR5cGVvZiBkYXRhcylcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodHlwZW9mIGRhdGFzID09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0XHRkYXRhcyA9IEpTT04ucGFyc2UoZGF0YXMpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHd4bG9naW4oKVxyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6J+aTjeS9nOaIkOWKnydcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChyZXMuZGF0YS5tc2cpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiByZXMuZGF0YS5tc2dcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5pON5L2c5aSx6LSlJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRmdW5jdGlvbihlcnIpIHtcclxuXHRcdFx0dGhhdC5idG5rZz0wXHJcblx0XHRcdFxyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0dGl0bGU6ICfojrflj5bmlbDmja7lpLHotKUnXHJcblx0XHRcdFx0fSlcclxuXHRcdFxyXG5cdFx0fVxyXG5cdClcclxufVxyXG5cclxuLy8g5LiK5Lyg5Zu+54mHXHJcbmNvbnN0IHd4X3VwbG9hZCA9IGZ1bmN0aW9uKHR4aW1nKSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdG1hc2s6IHRydWUsXHJcblx0XHRcdHRpdGxlOiAn5q2j5Zyo5LiK5LygJ1xyXG5cdFx0fSlcclxuXHJcblx0XHR1bmkudXBsb2FkRmlsZSh7XHJcblx0XHRcdHVybDogSVB1cmwgKyAnbWluYXBwL3VwbG9hZC1pbWcnLFxyXG5cdFx0XHRmaWxlUGF0aDogdHhpbWcsXHJcblx0XHRcdG5hbWU6ICdpbWcnLFxyXG5cdFx0XHRmb3JtRGF0YToge1xyXG5cdFx0XHRcdHRva2VuOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJylcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gc3VjY2VzczogKHVwbG9hZEZpbGVSZXMpID0+IHtcclxuXHRcdFx0Ly8gXHRjb25zb2xlLmxvZyh1cGxvYWRGaWxlUmVzLmRhdGEpO1xyXG5cdFx0XHQvLyBcdHZhciBuZGF0YSA9IEpTT04ucGFyc2UodXBsb2FkRmlsZVJlcy5kYXRhKVxyXG5cdFx0XHQvLyBcdHJlc29sdmUodXBsb2FkRmlsZVJlcylcclxuXHRcdFx0Ly8gfSxcclxuXHRcdFx0Y29tcGxldGU6IChyZXMpID0+IHtcclxuXHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHR1bmkuc3RvcFB1bGxEb3duUmVmcmVzaCgpOyAvL+aFjueUqGhpZGVMb2FkaW5nLOS8muWFs+mXrXd4LnNob3dUb2FzdOW8ueeql1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGDogJfml7Yke0RhdGUubm93KCkgLSB0aW1lU3RhcnR9YCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRcdGlmIChyZXMuc3RhdHVzQ29kZSA9PSAyMDApIHsgLy/or7fmsYLmiJDlip9cclxuXHRcdFx0XHRcdHZhciBuZGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpXHJcblx0XHRcdFx0XHRpZiAobmRhdGEuY29kZSA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRzdG9yZS5jb21taXQoJ2xvZ291dCcpXHJcblx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvbG9naW4vbG9naW4nXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChuZGF0YS5jb2RlID09IDApIHtcclxuXHRcdFx0XHRcdFx0aWYgKG5kYXRhLm1zZykge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBuZGF0YS5tc2dcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5pON5L2c5aSx6LSlJ1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJlc29sdmUobmRhdGEpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJlamVjdChyZXMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblx0fSlcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyDphY3nva7mjqXlj6Por7fmsYLnmoTlhazlhbHmlrnms5VcclxuY29uc3QgaHR0cCA9KHt1cmwgPScnLHBhcmFtID17fSxtZXRob2Q9JycsaGVhZGVyPXsnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCd9fT17fSkgPT57XHJcbiAgXHJcbiAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuXHRcdGNvbnNvbGUubG9nKCfor7fmsYJ1cmzvvJonICsgZ2V0VXJsKHVybCkpO1xyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZyhcIuivt+axguWktO+8mlwiLCBoZWFkZXIpXHJcblx0XHRjb25zb2xlLmxvZyhcInBhcmFt77yaXCIsIHBhcmFtKVxyXG4gICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGdldFVybCh1cmwpLFxyXG4gICAgICBkYXRhOnBhcmFtLFxyXG4gICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgaGVhZGVyOmhlYWRlcixcclxuICAgICAgY29tcGxldGU6KHJlcyk9PntcclxuICAgICAgICAgIHVuaS5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgdW5pLnN0b3BQdWxsRG93blJlZnJlc2goKTsvL+aFjueUqGhpZGVMb2FkaW5nLOS8muWFs+mXrXd4LnNob3dUb2FzdOW8ueeql1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYOiAl+aXtiR7RGF0ZS5ub3coKSAtIHRpbWVTdGFydH1gKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIGlmKHJlcy5zdGF0dXNDb2RlID09MjAwKXsvL+ivt+axguaIkOWKn1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRcdFx0XHRpZihyZXMuZGF0YS5jb2RlPT0tMSl7XHJcblx0XHRcdFx0XHRcdFx0c3RvcmUuY29tbWl0KCdsb2dvdXQnKVxyXG5cdFx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybDonL3BhZ2VzL2xvZ2luL2xvZ2luJ1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHRcdH1lbHNlIGlmKHJlcy5kYXRhLmNvZGU9PTAmJnJlcy5tc2c9PSfor7flhYjnmbvlvZXotKblj7d+Jyl7XHJcblx0XHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsOicvcGFnZXMvbG9naW4vbG9naW4nXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdFx0fWVsc2UgaWYocmVzLmRhdGEuY29kZT09MCl7XHJcblx0XHRcdFx0XHRcdFx0aWYocmVzLmRhdGEubXNnKXtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTpyZXMuZGF0YS5tc2dcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6J+aTjeS9nOWksei0pSdcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmVqZWN0KHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG4vLyDojrflj5Z1cmxcclxuY29uc3QgZ2V0VXJsID0gKHVybCk9PntcclxuXHRpZighdXJsKXtcclxuXHRcdHJldHVybiB1cmxcclxuXHR9XHJcblx0aWYodXJsLnNsaWNlKDAsMSkgPT0gXCIvXCIpe1xyXG5cdCAgICBjb25zb2xlLmxvZyh0cnVlKTtcclxuXHRcdFx0dXJsID0gdXJsLnN1YnN0cigxKTtcclxuXHR9XHJcbiAgaWYodXJsLmluZGV4T2YoJzovLycpPT0gLTEpe1xyXG4gICAgdXJsID0gSVB1cmwgK3VybCA7XHJcbiAgfVxyXG4gIHJldHVybiB1cmw7XHJcbn1cclxuLy/mmrTpnLLlh7rljrvosIPnlKjnmoTmlrnms5VcclxuIFxyXG5cclxuLy8gZ2V05pa55rOVXHJcbmNvbnN0IFBfZ2V0ID0gKHVybCwgcGFyYW0gPSB7fSkgPT4ge1xyXG5cdFx0aWYoIXBhcmFtLmxvYWRfbW9kZSl7XHJcblx0XHRcdHd4LnNob3dMb2FkaW5nKHtcclxuXHRcdFx0ICB0aXRsZTogJ+ivt+axguS4re+8jOivt+iAkOW/g+etieW+hS4uLicsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG4gICAgcmV0dXJuIGh0dHAoe1xyXG4gICAgICAgIHVybCxcclxuICAgICAgICBwYXJhbSxcclxuXHRcdFx0XHRtZXRob2Q6ICdHRVQnXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBQX3Bvc3QgPSAodXJsLCBwYXJhbSA9IHt9KSA9PiB7XHJcbiAgICByZXR1cm4gaHR0cCh7XHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIHBhcmFtLFxyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCJcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IFBfcHV0ID0gKHVybCwgcGFyYW0gPSB7fSkgPT4ge1xyXG4gICAgcmV0dXJuIGh0dHAoe1xyXG4gICAgICAgIHVybCxcclxuICAgICAgICBwYXJhbSxcclxuICAgICAgICBtZXRob2Q6ICdwdXQnXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBQX2RlbGV0ZSA9ICh1cmwsIHBhcmFtID0ge30pID0+IHtcclxuICAgIHJldHVybiBodHRwKHtcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgcGFyYW0sXHJcbiAgICAgICAgbWV0aG9kOiAncHV0J1xyXG4gICAgfSlcclxufVxyXG4vLyAvLyDljZXkuKror7fmsYJcclxuLy8gc2VydmljZS5QX2dldCgnL2NhdGUvbGlzdCcpLnRoZW4ocmVzID0+IHtcclxuLy8gXHRjb25zb2xlLmxvZyhyZXMpXHJcbi8vIH0pLmNhdGNoKGUgPT4ge1xyXG4vLyBcdGNvbnNvbGUubG9nKGUpXHJcbi8vIH0pXHJcblxyXG4vLyAvLyDkuIDkuKrpobXpnaLlpJrkuKror7fmsYJcclxuLy8gUHJvbWlzZS5hbGwoW1xyXG4vLyAgIHNlcnZpY2UuUF9nZXQoJy9jYXRlL2xpc3QnKSxcclxuLy8gICBzZXJ2aWNlLlBfZ2V0KGBkZXRhaWwvJHtpZH1gKVxyXG4vLyBdKS50aGVuKHJlc3VsdCA9PiB7XHJcbi8vICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4vLyB9KS5jYXRjaChlID0+IHtcclxuLy8gICBjb25zb2xlLmxvZyhlKVxyXG4vLyB9KVxyXG5jb25zdCBnZXRpbWc9ZnVuY3Rpb24gKGltZyl7XHJcblx0Ly8gcmV0dXJuIGltZ1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdGlmKCFpbWcpIHJldHVyblxyXG5cdC8vIGNvbnNvbGUubG9nKGltZ3VybCtpbWcpXHJcblx0aWYoaW1nLmluZGV4T2YoJzovLycpPT0gLTEpe1xyXG5cdCAgaW1nID0gaW1ndXJsK2ltZ1xyXG5cdH1cclxuXHRyZXR1cm4gaW1nXHJcbn1cclxuY29uc3QgZ2V0aW1nYXJyPWZ1bmN0aW9uIChpbWdzLHR5cGUpe1xyXG5cdGlmKCFpbWdzKSByZXR1cm5cclxuXHRpZighdHlwZSl7XHJcblx0XHR0eXBlPScsJ1xyXG5cdH1cclxuXHRpbWdzPWltZ3Muc3BsaXQodHlwZSlcclxuXHQvLyBjb25zb2xlLmxvZyhpbWd1cmwraW1nKVxyXG5cdHZhciBuZXdpbWdzPVtdXHJcblx0Zm9yKHZhciBpPTA7aTxpbWdzLmxlbmd0aDtpKyspe1xyXG5cdFx0dmFyIGltZz1pbWdzW2ldXHJcblx0XHRpZihpbWcuaW5kZXhPZignOi8vJyk9PSAtMSl7XHJcblx0XHQgIGltZyA9IGltZ3VybCtpbWdcclxuXHRcdH1cclxuXHRcdG5ld2ltZ3MucHVzaChpbWcpXHJcblx0fVxyXG5cdC8vIGNvbnNvbGUubG9nKG5ld2ltZ3MpXHJcblx0cmV0dXJuIG5ld2ltZ3NcclxufVxyXG5jb25zdCBnZXR0aW1lPWZ1bmN0aW9uIChtail7XHJcblx0aWYoIW1qKSB7XHJcblx0XHRyZXR1cm4ge31cclxuXHR9XHJcblx0Ly8gLy8gY29uc29sZS5sb2cobWouaW5kZXhPZign5LuK5aSpJykhPS0xKVxyXG5cdC8vIGlmKG1qLmluZGV4T2YoJ+S7iuWkqScpIT0tMSl7XHJcblx0Ly8gXHRyZXR1cm4ge1xyXG5cdC8vIFx0XHR0eXBlOjIsXHJcblx0XHRcdFxyXG5cdC8vIFx0XHR0aW1lOm1qXHJcblx0Ly8gXHR9XHJcblx0Ly8gfVxyXG5cdC8vIG1qID0gbWoucmVwbGFjZSgvLS9nLCcvJylcclxuXHR2YXIgbnRpbWU9bmV3IERhdGUobWoqMTAwMClcclxuXHQvLyBjb25zb2xlLmxvZyhudGltZSlcclxuXHR2YXIgbl95ZWFyID0gbnRpbWUuZ2V0RnVsbFllYXIoKTtcclxuXHR2YXIgbl9tb250aCA9IG50aW1lLmdldE1vbnRoKCkgKyAxO1xyXG5cdHZhciBuX2RhdGUgPSBudGltZS5nZXREYXRlKCk7XHJcblx0dmFyIG5faG91ciA9IG50aW1lLmdldEhvdXJzKCk7XHJcblx0dmFyIG5fbWludXRlID0gbnRpbWUuZ2V0TWludXRlcygpO1xyXG5cdFxyXG5cdHZhciB0aW1lID0gbmV3IERhdGUoKTtcclxuXHR2YXIgeWVhciA9IHRpbWUuZ2V0RnVsbFllYXIoKTtcclxuXHR2YXIgbW9udGggPSB0aW1lLmdldE1vbnRoKCkgKyAxO1xyXG5cdHZhciBkYXRlID0gdGltZS5nZXREYXRlKCk7XHJcblx0dmFyIGhvdXIgPSB0aW1lLmdldEhvdXJzKCk7XHJcblx0dmFyIG1pbnV0ZSA9IHRpbWUuZ2V0TWludXRlcygpO1xyXG5cdC8vIG5fbW9udGg9bl9tb250aDwxMD8gJzAnK25fbW9udGg6bl9tb250aFxyXG5cdG5fZGF0ZT1uX2RhdGU8MTA/ICcwJytuX2RhdGU6bl9kYXRlXHJcblx0bl9ob3VyPW5faG91cjwxMD8gJzAnK25faG91cjpuX2hvdXJcclxuXHRuX21pbnV0ZT1uX21pbnV0ZTwxMD8gJzAnK25fbWludXRlOm5fbWludXRlXHJcblx0aWYobl95ZWFyPT15ZWFyKXtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dHlwZToxLFxyXG5cdFx0XHR5ZWFyOm5feWVhcixcclxuXHRcdFx0bW9udGg6bl9tb250aCxcclxuXHRcdFx0ZGF0ZTpuX2RhdGUsXHJcblx0XHRcdGhvdXI6bl9ob3VyLFxyXG5cdFx0XHRtaW51dGU6bl9taW51dGUsXHJcblx0XHRcdHRpbWU6J+S7iuWkqSAnK25faG91cisnOicrbl9taW51dGVcclxuXHRcdH1cclxuXHR9ZWxzZXtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dHlwZToyLFxyXG5cdFx0XHR5ZWFyOm5feWVhcixcclxuXHRcdFx0bW9udGg6bl9tb250aCxcclxuXHRcdFx0ZGF0ZTpuX2RhdGUsXHJcblx0XHRcdGhvdXI6bl9ob3VyLFxyXG5cdFx0XHRtaW51dGU6bl9taW51dGUsXHJcblx0XHRcdHRpbWU6bl95ZWFyKyctJytuX21vbnRoKyctJytuX2RhdGVcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5jb25zdCBnZXRfZndiPWZ1bmN0aW9uIChzdHIpe1xyXG5cdGlmKCFzdHIpe1xyXG5cdFx0cmV0dXJuXHJcblx0fVxyXG5cdFx0XHRcdHN0ciA9IHN0ciAvLyAucmVwbGFjZSgvPHAoW1xcc1xcd1wiPVxcL1xcLjo7XSspKCg/OihzdHlsZT1cIlteXCJdK1wiKSkpL2lnLCAnPHAnKVxyXG5cdFx0XHRcdCAgICAgICAgICAucmVwbGFjZSgvPHAoW1xcc1xcd1wiLT1cXC9cXC46O10rKSgoPzooY2xhc3M9XCJbXlwiXStcIikpKS9pZywgJzxwICQxJylcclxuXHRcdFx0XHQgICAgICAgICAgLnJlcGxhY2UoLzxwKFtcXHNcXHdcIi09XFwvXFwuOjtdKykvaWcsICc8cCQxIGNsYXNzPVwieGN4X2Z3Yl9wXCInKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyAucmVwbGFjZSgvPGRpdihbXFxzXFx3XCI9XFwvXFwuOjtdKykoKD86KHN0eWxlPVwiW15cIl0rXCIpKSkvaWcsICc8ZGl2JylcclxuXHRcdFx0XHQgICAgICAgICAgLnJlcGxhY2UoLzxkaXYoW1xcc1xcd1wiLT1cXC9cXC46O10rKSgoPzooY2xhc3M9XCJbXlwiXStcIikpKS9pZywgJzxkaXYgJDEnKVxyXG5cdFx0XHRcdCAgICAgICAgICAucmVwbGFjZSgvPGRpdihbXFxzXFx3XCItPVxcL1xcLjo7XSspL2lnLCAnPGRpdiQxIGNsYXNzPVwieGN4X2Z3Yl9kaXZcIicpXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ICAgICAgICAgIC8vIC5yZXBsYWNlKC88aW1nKFtcXHNcXHdcIi09XFwvXFwuOjtdKykoKD86KGhlaWdodD1cIlteXCJdK1wiKSkpL2lnLCAnPGltZyAkMScpXHJcblx0XHRcdFx0ICAgICAgICAgIC8vIC5yZXBsYWNlKC88aW1nKFtcXHNcXHdcIi09XFwvXFwuOjtdKykoKD86KHdpZHRoPVwiW15cIl0rXCIpKSkvaWcsICc8aW1nICQxJylcclxuXHRcdFx0XHQgICAgICAgICAgLy8gLnJlcGxhY2UoLzxpbWcoW1xcc1xcd1wiLT1cXC9cXC46O10rKSgoPzooc3R5bGU9XCJbXlwiXStcIikpKS9pZywgJzxpbWcgJDEnKVxyXG5cdFx0XHRcdCAgICAgICAgICAucmVwbGFjZSgvPGltZyhbXFxzXFx3XCItPVxcL1xcLjo7XSspKCg/OihhbHQ9XCJbXlwiXStcIikpKS9pZywgJzxpbWcgJDEnKVxyXG5cdFx0XHRcdCAgICAgICAgICAucmVwbGFjZSgvPGltZyhbXFxzXFx3XCItPVxcL1xcLjo7XSspKCg/OihjbGFzcz1cIlteXCJdK1wiKSkpL2lnLCAnPGltZyAkMScpXHJcblx0XHRcdFx0ICAgICAgICAgIC5yZXBsYWNlKC88aW1nKFtcXHNcXHdcIi09XFwvXFwuOjtdKykvaWcsICc8aW1nJDEgY2xhc3M9XCJ4Y3hfZndiX2ltZ1wiJylcclxuXHRcdFx0XHRyZXR1cm4gc3RyXHJcblx0XHRcdH1cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGdldFVzZXJzLFxyXG5cdGFkZFVzZXIsXHJcblx0Z2V0LFxyXG5cdHBvc3QsXHJcblx0SVB1cmwsXHJcblx0bWFwX2tleSxcclxuXHRpbWd1cmwsXHJcblx0Z29sb2dpbixcclxuXHRqdW1wLFxyXG5cdGNhbGwsXHJcblx0d3hsb2dpbixcclxuXHRsb2dpbl90ZWwsXHJcblx0c2V0VXNlcm1zZyxcclxuXHRQX2dldCxcclxuXHRQX3Bvc3QsXHJcblx0UF9wdXQsXHJcblx0UF9kZWxldGUsXHJcblx0Z2V0dGltZSxcclxuXHRnZXRpbWcsXHJcblx0Z2V0aW1nYXJyLFxyXG5cdHB2ZWltZyxcclxuXHRnZXRfZndiLFxyXG5cdHd4X3VwbG9hZFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_nvue_vue_type_template_id_6970862e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.nvue?vue&type=template&id=6970862e&scoped=true&mpType=page */ 20);\n/* harmony import */ var _map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.nvue?vue&type=script&lang=js&mpType=page */ 22);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./map.nvue?vue&type=style&index=0&id=6970862e&scoped=true&lang=css&mpType=page */ 25).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./map.nvue?vue&type=style&index=0&id=6970862e&scoped=true&lang=css&mpType=page */ 25).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _map_nvue_vue_type_template_id_6970862e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _map_nvue_vue_type_template_id_6970862e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6970862e\",\n  \"6b5d9c66\",\n  false,\n  _map_nvue_vue_type_template_id_6970862e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/map/map.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDbUU7QUFDTDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHdGQUFnRjtBQUNwSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsd0ZBQWdGO0FBQ3pJOztBQUVBOztBQUVBO0FBQ3NLO0FBQ3RLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbWFwLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njk3MDg2MmUmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21hcC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL21hcC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9tYXAubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY5NzA4NjJlJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL21hcC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Njk3MDg2MmUmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2OTcwODYyZVwiLFxuICBcIjZiNWQ5YzY2XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL21hcC9tYXAubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

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
                        _c("text", { staticClass: ["bj_cnum_num"] }, [
                          _vm._v(_vm._s(_vm.bj_time))
                        ])
                      ])
                    ]),
                    _c(
                      "text",
                      {
                        staticClass: ["bj_tip"],
                        staticStyle: { color: "#fff" }
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
                      _c("text", { staticClass: ["add_bj_wz"] }, [
                        _vm._v("添加标记")
                      ]),
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
                              staticClass: [
                                "bj_type_li_text",
                                "bj_type_li_text_cur"
                              ]
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
                              staticClass: [
                                "bj_type_li_text",
                                "bj_type_li_text_cur"
                              ]
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
                              staticClass: [
                                "bj_type_li_text",
                                "bj_type_li_text_cur"
                              ]
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
                              staticClass: [
                                "bj_type_li_text",
                                "bj_type_li_text_cur"
                              ]
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
                              staticClass: [
                                "bj_type_li_text",
                                "bj_type_li_text_cur"
                              ]
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
                      _c("text", { staticStyle: { fontWeight: "bold" } }, [
                        _vm._v("筛选")
                      ]),
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
                                  : ""
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
                                  : ""
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
                                  : ""
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
              attrs: { src: "/static/images/index_btn1.png", mode: "aspectFit" }
            }),
            _c("text", { staticClass: ["map_btn_li_text"] }, [_vm._v("刷新")])
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
              attrs: { src: "/static/images/index_btn2.png", mode: "aspectFit" }
            }),
            _c("text", { staticClass: ["map_btn_li_text"] }, [_vm._v("标记")])
          ]
        ),
        _vm._m(0),
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
              attrs: { src: "/static/images/index_btn4.png", mode: "aspectFit" }
            }),
            _c("text", { staticClass: ["map_btn_li_text"] }, [_vm._v("筛选")])
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
                  ? _c("text", { staticClass: ["notetk_tit"] }, [
                      _vm._v("选择危险类型")
                    ])
                  : _vm._e(),
                _vm.tk_show1_num == 2
                  ? _c("text", { staticClass: ["notetk_tit"] }, [
                      _vm._v("选择命令类型")
                    ])
                  : _vm._e(),
                _vm.tk_show1_num == 3
                  ? _c("text", { staticClass: ["notetk_tit"] }, [
                      _vm._v("受困者")
                    ])
                  : _vm._e(),
                _vm.tk_show1_num == 4
                  ? _c("text", { staticClass: ["notetk_tit"] }, [
                      _vm._v("选择建筑破坏等级")
                    ])
                  : _vm._e(),
                _vm.tk_show1_num == 5
                  ? _c("text", { staticClass: ["notetk_tit"] }, [
                      _vm._v("补充搜索信息")
                    ])
                  : _vm._e(),
                _c("text", { staticClass: ["notetk_time"] }, [
                  _vm._v(_vm._s(_vm.note_time_t))
                ]),
                _vm.tk_show1_num != 5
                  ? _c("input", {
                      staticClass: ["bz_int_tk"],
                      attrs: { type: "text", value: "", placeholder: "备注" }
                    })
                  : _vm._e(),
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
                            _c("text", { staticClass: ["bj_icon_text"] }, [
                              _vm._v("火灾")
                            ])
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
                            _c("text", { staticClass: ["bj_icon_text"] }, [
                              _vm._v("电力")
                            ])
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
                            _c("text", { staticClass: ["bj_icon_text"] }, [
                              _vm._v("路障")
                            ])
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
                            _c("text", { staticClass: ["bj_icon_text"] }, [
                              _vm._v("车祸")
                            ])
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
                            _c("text", { staticClass: ["bj_icon_text"] }, [
                              _vm._v("危化品")
                            ])
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
                            _c("text", { staticClass: ["bj_icon_text"] }, [
                              _vm._v("水灾")
                            ])
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
                              _c("text", { staticClass: ["bj_icon_text"] }, [
                                _vm._v("指挥")
                              ])
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
                              _c("text", { staticClass: ["bj_icon_text"] }, [
                                _vm._v("集结")
                              ])
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
                              _c("text", { staticClass: ["bj_icon_text"] }, [
                                _vm._v("医疗")
                              ])
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
                              _c("text", { staticClass: ["bj_icon_text"] }, [
                                _vm._v("停车")
                              ])
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
                              _c("text", { staticClass: ["bj_icon_text"] }, [
                                _vm._v("潜在的受困者")
                              ])
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
                              _c("text", { staticClass: ["bj_icon_text"] }, [
                                _vm._v("确认生还者")
                              ])
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
                              _c("text", { staticClass: ["bj_icon_text"] }, [
                                _vm._v("确认遇难者")
                              ])
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
                              _c("text", { staticClass: ["bj_icon_text"] }, [
                                _vm._v("移除生还者")
                              ])
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
                              _c("text", { staticClass: ["bj_icon_text"] }, [
                                _vm._v("移除遇难者")
                              ])
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
                              _c("text", { staticClass: ["bj_icon_text"] }, [
                                _vm._v("最后一次看到")
                              ])
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
                            _c("text", { staticClass: ["bj_icon_text"] }, [
                              _vm._v("低风险")
                            ])
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
                            _c("text", { staticClass: ["bj_icon_text"] }, [
                              _vm._v("中风险")
                            ])
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
                            _c("text", { staticClass: ["bj_icon_text"] }, [
                              _vm._v("高风险")
                            ])
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
                _vm.tk_show1_num == 5
                  ? _c(
                      "view",
                      { staticClass: ["bj_list_box"] },
                      [
                        _c("view", { staticClass: ["search_mbox"] }, [
                          _c("image", {
                            staticClass: ["search_mbox_img"],
                            attrs: {
                              src: "../../static/images/search_bg_03.png",
                              mode: "aspectFit"
                            }
                          }),
                          _c("view", { staticClass: ["search_mbox_d1"] }, [
                            _vm._v("时间/日期")
                          ]),
                          _c("view", { staticClass: ["search_mbox_d2"] }, [
                            _c(
                              "view",
                              {
                                staticClass: [
                                  "search_mbox_d2_int",
                                  "aic",
                                  "ju_c"
                                ],
                                on: {
                                  click: function($event) {
                                    _vm.pickTime(1)
                                  }
                                }
                              },
                              [
                                _c(
                                  "text",
                                  { staticClass: ["search_mbox_d2_inttext"] },
                                  [_vm._v(_vm._s(_vm.time ? _vm.time : "进入"))]
                                )
                              ]
                            ),
                            _c("text", {
                              staticClass: ["search_mbox_d2_text"]
                            }),
                            _c(
                              "view",
                              {
                                staticClass: [
                                  "search_mbox_d2_int",
                                  "aic",
                                  "ju_c"
                                ],
                                on: {
                                  click: function($event) {
                                    _vm.pickTime(2)
                                  }
                                }
                              },
                              [
                                _c(
                                  "text",
                                  { staticClass: ["search_mbox_d2_inttext"] },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.time1 ? _vm.time1 : "撤出")
                                    )
                                  ]
                                )
                              ]
                            )
                          ]),
                          _c("view", { staticClass: ["search_mbox_d3"] }, [
                            _c("input", {
                              staticClass: ["search_mbox_d3_int"],
                              attrs: {
                                type: "text",
                                value: "",
                                placeholder: "团队名称"
                              }
                            }),
                            _vm.search_type == 1
                              ? _c("image", {
                                  staticClass: ["search_mbox_d3_text"],
                                  attrs: {
                                    src: _vm.getimg(
                                      "/static/images/search_type_062.png"
                                    ),
                                    mode: "aspectFit"
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.search_type = 2
                                    }
                                  }
                                })
                              : _vm._e(),
                            _vm.search_type == 2
                              ? _c("image", {
                                  staticClass: ["search_mbox_d3_text"],
                                  attrs: {
                                    src: _vm.getimg(
                                      "/static/images/search_type_032.png"
                                    ),
                                    mode: "aspectFit"
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.search_type = 3
                                    }
                                  }
                                })
                              : _vm._e(),
                            _vm.search_type == 3
                              ? _c("image", {
                                  staticClass: ["search_mbox_d3_text"],
                                  attrs: {
                                    src: _vm.getimg(
                                      "/static/images/search_type_092.png"
                                    ),
                                    mode: "aspectFit"
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.search_type = 1
                                    }
                                  }
                                })
                              : _vm._e(),
                            _c("input", {
                              staticClass: ["search_mbox_d3_int"],
                              attrs: {
                                type: "text",
                                value: "",
                                placeholder: "危险类型"
                              }
                            })
                          ]),
                          _vm._m(1),
                          _vm._m(2)
                        ]),
                        _c(
                          "picker",
                          {
                            attrs: {
                              mode: "time",
                              value: _vm.time,
                              start: "09:01",
                              end: "21:01"
                            },
                            on: { change: _vm.bindTimeChange }
                          },
                          [
                            _vm._v("\n\t\t\t\t\t\t时间选择"),
                            _c("view", { staticClass: ["uni-input"] }, [
                              _vm._v(_vm._s(_vm.time))
                            ])
                          ]
                        ),
                        _c("view", { staticClass: ["search_type_tip"] }, [
                          _c(
                            "text",
                            { staticClass: ["search_type_tip_text"] },
                            [_vm._v("注：")]
                          ),
                          _c("image", {
                            staticClass: ["search_type_tip_img"],
                            attrs: {
                              src: _vm.getimg(
                                "/static/images/search_type_06.png"
                              ),
                              mode: "aspectFit"
                            }
                          }),
                          _c(
                            "text",
                            { staticClass: ["search_type_tip_text"] },
                            [_vm._v("未搜索")]
                          ),
                          _c("image", {
                            staticClass: ["search_type_tip_img"],
                            staticStyle: { marginLeft: "15px" },
                            attrs: {
                              src: _vm.getimg(
                                "/static/images/search_type_03.png"
                              ),
                              mode: "aspectFit"
                            }
                          }),
                          _c(
                            "text",
                            { staticClass: ["search_type_tip_text"] },
                            [_vm._v("正在搜索")]
                          ),
                          _c("image", {
                            staticClass: ["search_type_tip_img"],
                            staticStyle: { marginLeft: "15px" },
                            attrs: {
                              src: _vm.getimg(
                                "/static/images/search_type_09.png"
                              ),
                              mode: "aspectFit"
                            }
                          }),
                          _c(
                            "text",
                            { staticClass: ["search_type_tip_text"] },
                            [_vm._v("搜索完成")]
                          )
                        ])
                      ],
                      1
                    )
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
                      { staticStyle: { fontSize: "28px", color: "#fff" } },
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
        : _vm._e(),
      _vm.tk_show_bjxq
        ? _c(
            "view",
            { staticClass: ["tk_popop"], on: { touchmove: _vm.test } },
            [
              _c(
                "view",
                {
                  staticClass: ["tk_main1"],
                  staticStyle: { padding: "0!important" }
                },
                [
                  _vm._m(3),
                  _c("view", { staticClass: ["bjxq_xq"] }, [
                    _c("view", { staticClass: ["bj_d1"] }, [
                      _c("image", {
                        staticClass: ["bj_d1_icon"],
                        attrs: {
                          src: _vm.getimg("/static/images/huozai.png"),
                          mode: "aspectFit"
                        }
                      }),
                      _c("text", { staticClass: ["bj_d1_name"] }, [
                        _vm._v("海淀火灾点")
                      ])
                    ]),
                    _c("view", { staticClass: ["bj_d2"] }, [
                      _vm._m(4),
                      _c("image", {
                        staticClass: ["bj_d2_share"],
                        attrs: {
                          src: _vm.getimg("/static/images/tk_share.png"),
                          mode: "aspectFit"
                        },
                        on: { click: _vm.getShare }
                      })
                    ]),
                    _c("input", {
                      staticClass: ["bz_int_tk"],
                      staticStyle: { marginBottom: "35px" },
                      attrs: { type: "text", value: "", placeholder: "备注" }
                    }),
                    _c(
                      "view",
                      {
                        staticClass: ["bj_type_li", "bj_type_li_cur"],
                        staticStyle: { width: "425px" },
                        on: {
                          click: function($event) {
                            _vm.update_bj(1)
                          }
                        }
                      },
                      [
                        _c("text", { staticStyle: { color: "#fff" } }, [
                          _vm._v("更新")
                        ])
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: ["bj_type_li", "bj_type_li_cur1"],
                        staticStyle: { width: "425px" },
                        on: {
                          click: function($event) {
                            _vm.update_bj(2)
                          }
                        }
                      },
                      [
                        _c("text", { staticStyle: { color: "#fff" } }, [
                          _vm._v("删除")
                        ])
                      ]
                    )
                  ])
                ]
              ),
              _c(
                "text",
                {
                  staticClass: ["iconfont"],
                  staticStyle: { fontSize: "50px", color: "#fff" },
                  on: {
                    click: function($event) {
                      _vm.tk_show_bjxq = false
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: ["map_btn_li"] }, [
      _c("image", {
        staticClass: ["map_btn_li_image"],
        attrs: { src: "/static/images/index_btn3.png", mode: "aspectFit" }
      }),
      _c("text", { staticClass: ["map_btn_li_text"] }, [_vm._v("天气")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: ["search_mbox_d4"] }, [
      _c("input", {
        staticClass: ["search_mbox_d4_int"],
        attrs: { type: "text", value: "", placeholder: "生还者数量" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: ["search_mbox_d4"] }, [
      _c("input", {
        staticClass: ["search_mbox_d4_int"],
        attrs: { type: "text", value: "", placeholder: "遇难者数量" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: ["bj_user_msg"] }, [
      _c("image", {
        staticClass: ["bj_user_tx"],
        attrs: { src: "../../static/images/tx_m2.jpg", mode: "aspectFill" }
      }),
      _c("view", { staticClass: ["flex_1", "bj_user_lxmsg"] }, [
        _c("text", { staticClass: ["bj_user_name"] }, [_vm._v("张若昀")]),
        _c("text", { staticClass: ["bj_user_tel"] }, [_vm._v("17869523520")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: ["bj_d2_l"] }, [
      _c("text", { staticClass: ["bj_d2_text"] }, [
        _vm._v("时间：2020-04-12 19:23")
      ]),
      _c("text", { staticClass: ["bj_d2_text"] }, [
        _vm._v("经度：39.85412513215")
      ]),
      _c("text", { staticClass: ["bj_d2_text"] }, [
        _vm._v("纬度：39.85412513215")
      ])
    ])
  }
]
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
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 8));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 10));\nvar _service = _interopRequireDefault(__webpack_require__(/*! ../../service.js */ 11));\nvar _vuex = __webpack_require__(/*! vuex */ 13);\n\n\n\n\n\n\n\n\nvar _torch = _interopRequireDefault(__webpack_require__(/*! @/common/dc-torch/torch.js */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var that, mapContext, mapEndloading;var djs_fuc;var djs_fuc1;var that;\nvar domModule = weex.requireModule('dom');\ndomModule.addRule('fontFace', {\n  'fontFamily': \"iconfont\",\n  'src': \"url('../../static/fonts/iconfont.ttf')\" });var _default =\n\n{\n  data: function data() {\n    return {\n      latitude: 39.909,\n      longitude: 116.39742,\n      mapWidth: 0, //地图区域宽度\n      mapHeight: 0, //地图区域高度\n      centerTop: 0, //中心图片坐标\n      centerLeft: 0, //中心图片坐标\n      translateY: 165,\n      markersArr: [{\n        id: 1,\n        latitude: 39.909,\n        longitude: 116.39742,\n        iconPath: '/static/images/huozai.png' },\n      {\n        id: 12,\n        latitude: 39.919,\n        longitude: 116.39742,\n        iconPath: '/static/images/huozai.png' },\n      {\n        id: 3,\n        \"latitude\": 39.975643747304986,\n        \"longitude\": 116.314328,\n        \"iconPath\": \"/static/images/shuizai.png\" },\n      {\n        id: 4,\n        \"latitude\": 39.94254855057598,\n        \"longitude\": 116.314328,\n        \"iconPath\": \"/static/images/chehuo.png\" },\n      {\n        id: 5,\n        \"latitude\": 39.95254855057598,\n        \"longitude\": 116.314328,\n        \"iconPath\": \"/static/images/luzhang.png\" },\n      {\n        id: 6,\n        \"latitude\": 39.95554855057598,\n        \"longitude\": 116.324328,\n        \"iconPath\": \"/static/images/dianli.png\" }],\n      //覆盖物\n      mapControls: [],\n      mapControls1: [{\n        id: \"1\",\n        position: {\n          left: 375 - 15,\n          top: (uni.getSystemInfoSync().windowHeight - 45 - uni.getSystemInfoSync().statusBarHeight) / 2 - 49,\n          width: 30,\n          height: 49 },\n\n        iconPath: \"/static/images/zuobiao.png\",\n        clickable: false }],\n      //地图中的控件\n      bj_time: 10,\n      baojing: false,\n\n\n\n\n      tk_show: false,\n      tk_show1: false,\n      tk_show1_num: 0, //标记1级分类\n      note_time_t: '',\n      tk_show1_cur: -1, //标记2级分类\n\n      tk_show_sx: false, //筛选\n      tk_show_sx_cur: 0, //筛选分类\n\n      tk_show_bjxq: false, //标记详情\n      bj_id: -1, //标记id\n\n\n      search_type: 1, // 搜索状态  1未搜索  2正在搜索 3搜索完成\n      time: '',\n      time1: '',\n      array: [\n      1, 1, 1, 1, 2],\n\n      AUDIO: uni.createInnerAudioContext(),\n      torch_type: false };\n\n  },\n  computed: _objectSpread({},\n  (0, _vuex.mapState)(['hasLogin', 'forcedLogin', 'userName', 'loginDatas'])),\n\n  onLoad: function onLoad() {var _this = this;\n    // return\n    that = this;\n\n    this.getLocation();\n\n\n    this.AUDIO.src = '/static/music/jingbao_kong.mp3';\n    this.AUDIO.loop = true;\n    //音频进入可以播放状态，但不保证后面可以流畅播放\n    this.AUDIO.onCanplay(function (res) {\n      __f__(\"log\", '音频进入可以播放状态，但不保证后面可以流畅播放', \" at pages/map/map.nvue:467\");\n\n    });\n    //音频播放\n    this.AUDIO.onPlay(function (res) {\n      __f__(\"log\", '音频播放', \" at pages/map/map.nvue:472\");\n      uni.vibrateLong({\n        success: function success() {\n          __f__(\"log\", 'success', \" at pages/map/map.nvue:475\");\n        } });\n\n      _torch.default.on();\n      that.torch_type = true;\n      djs_fuc = setInterval(function () {\n\n        if (that.torch_type == true) {\n          _torch.default.off();\n          that.torch_type = false;\n        } else {\n          _torch.default.on();\n          that.torch_type = true;\n        }\n\n        // console.log(that.djs())\n      }, 100);\n      djs_fuc1 = setInterval(function () {\n        uni.vibrateLong({\n          success: function success() {\n            __f__(\"log\", 'success', \" at pages/map/map.nvue:495\");\n          } });\n\n      }, 1000);\n    });\n    //音频停止\n    this.AUDIO.onStop(function (res) {\n      __f__(\"log\", '音频停止', \" at pages/map/map.nvue:502\");\n      clearInterval(djs_fuc);\n      clearInterval(djs_fuc1);\n      _torch.default.off();\n      that.torch_type = true;\n    });\n    //语音自然播放结束\n    this.AUDIO.onEnded(function (res) {\n      __f__(\"log\", '语音自然播放结束', \" at pages/map/map.nvue:510\");\n      _this.playMsgid = null;\n    });\n\n    /*const innerAudioContext = uni.createInnerAudioContext();\n        innerAudioContext.autoplay = true;\n        innerAudioContext.src = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';\n        innerAudioContext.onPlay(() => {\n          console.log('开始播放');\n        });\n        innerAudioContext.onError((res) => {\n          console.log(res.errMsg);\n          console.log(res.errCode);\n        });*/\n  },\n  onHide: function onHide() {\n    clearInterval(djs_fuc);\n    clearInterval(djs_fuc1);\n    _torch.default.off();\n    that.torch_type = true;\n  },\n  mounted: function mounted() {\n    that.mapWidth = 750;\n    that.sHeight = uni.getSystemInfoSync().statusBarHeight;\n    // that.mapHeight = (uni.getSystemInfoSync().windowHeight  - uni.getSystemInfoSync().statusBarHeight) - 246;\n    that.mapHeight = uni.getSystemInfoSync().windowHeight * 2 - 396;\n    __f__(\"log\", that.mapHeight, \" at pages/map/map.nvue:536\");\n    __f__(\"log\", uni.getSystemInfoSync().screenHeight, \" at pages/map/map.nvue:537\");\n    var query = uni.createSelectorQuery().in(this);\n    query.select('#map').boundingClientRect(function (data) {\n      var _navHeight = data.height;\n      __f__(\"log\", '_navHeight------------------------------------>', \" at pages/map/map.nvue:541\");\n      __f__(\"log\", _navHeight, \" at pages/map/map.nvue:542\");\n      // _navHeight=_navHeight+uni.getSystemInfoSync().statusBarHeight\n      _navHeight = _navHeight / 2;\n      _navHeight = _navHeight.toFixed(0);\n\n      __f__(\"log\", typeof _navHeight, \" at pages/map/map.nvue:547\");\n      __f__(\"log\", typeof 710, \" at pages/map/map.nvue:548\");\n      var sss = [{\n        id: \"1\",\n        position: {\n          left: 750 / 2 - 28,\n          // top: _navHeight - 68,\n          top: _navHeight,\n          width: 55,\n          height: 68 },\n\n        iconPath: \"/static/images/huozai.png\",\n        clickable: false }];\n\n      that.setHeight(sss);\n      // Vue.set(that.mapControls[0].position,'top',sss)\n      __f__(\"log\", that.mapControls, \" at pages/map/map.nvue:563\");\n    }).exec();\n\n  },\n  onShow: function onShow() {\n\n\n  },\n  methods: _objectSpread(_objectSpread({},\n  (0, _vuex.mapMutations)(['setAddress', 'setHeight'])), {}, {\n    // 播放语音\n    playVoice: function playVoice(msg) {\n      this.AUDIO.play();\n    },\n    baojing_fuc: function baojing_fuc() {\n      var that = this;\n      this.baojing = true;\n      that.bj_time = 3;\n      djs_fuc = setInterval(function () {\n        if (that.bj_time == 0) {\n          // uni.showToast({\n          // \ticon:'none',\n          // \ttitle:'警报操作'\n          // })\n          __f__(\"log\", 0, \" at pages/map/map.nvue:587\");\n\n          clearInterval(djs_fuc);\n          that.bj_time = '!';\n          that.playVoice();\n        } else {\n          that.bj_time--;\n        }\n        // console.log(that.djs())\n      }, 1000);\n    },\n    baojing_del: function baojing_del() {\n      var that = this;\n      clearInterval(djs_fuc);\n      this.bj_time = 10;\n      this.baojing = false;\n      this.AUDIO.stop();\n    },\n    pickTime: function pickTime(type) {\n      plus.nativeUI.pickTime(function (e) {\n        var d = e.date;\n        __f__(\"log\", \"选择的时间：\" + d.getHours() + \":\" + d.getMinutes(), \" at pages/map/map.nvue:608\");\n        var min = d.getMinutes();\n        if (d.getMinutes() < 10) {\n          min = '0' + d.getMinutes();\n        }\n        if (type == 1) {\n          that.time = d.getHours() + \":\" + min;\n        } else {\n          that.time1 = d.getHours() + \":\" + min;\n        }\n\n      }, function (e) {\n        __f__(\"log\", \"未选择时间：\" + JSON.stringify(e), \" at pages/map/map.nvue:620\");\n      });\n    },\n    test: function test() {},\n    bindTimeChange: function bindTimeChange(e) {\n      __f__(\"log\", e, \" at pages/map/map.nvue:625\");\n      this.time = e.target.value;\n    },\n    update_bj: function update_bj(type) {\n      if (type == 1) {\n        uni.showToast({\n          icon: 'none',\n          title: '更新成功' });\n\n      }\n      if (type == 2) {\n        uni.showToast({\n          icon: 'none',\n          title: '删除成功' });\n\n      }\n      that.tk_show_bjxq = false;\n    },\n    getShare: function getShare() {\n      uni.shareWithSystem({\n        type: 'text',\n        href: 'https://uniapp.dcloud.io',\n        summary: '分享内容',\n        success: function success() {\n          // 分享完成，请注意此时不一定是成功分享\n        },\n        fail: function fail() {\n          // 分享失败\n        } });\n\n      // _app.getShare(false, false, 2, '', '', '', that.camera_img, false, false);\n    },\n    open_tk: function open_tk(num) {\n      that.tk_show = false;\n      that.tk_show1 = true;\n      that.tk_show1_num = num;\n\n      var now_time = new Date();\n      var now_year = now_time.getFullYear();\n      var now_month = now_time.getMonth() + 1;\n      var now_date = now_time.getDate();\n      var hour = now_time.getHours();\n      var minute = now_time.getMinutes();\n      if (now_month < 10) {\n        now_month = '0' + now_month * 1;\n      }\n      if (now_date < 10) {\n        now_date = '0' + now_date * 1;\n      }\n      if (hour < 10) {\n        hour = '0' + hour * 1;\n      }\n      if (minute < 10) {\n        minute = '0' + minute * 1;\n      }\n      that.note_time_t = now_year + '-' + now_month + '-' + now_date + ' ' + hour + ':' + minute;\n    },\n    shai_tk: function shai_tk(num) {\n      that.tk_show_sx_cur = num;\n      uni.showLoading({\n        mask: true,\n        title: '正在筛选...' });\n\n      setTimeout(function () {\n        that.tk_show_sx = false;\n        uni.hideLoading();\n      }, 1000);\n    },\n    shuaxin: function shuaxin() {\n      uni.showToast({\n        icon: 'none',\n        title: '正在刷新' });\n\n    },\n    //地图点击事件\n    markertap: function markertap(e) {\n      var _id = e.detail.markerId,\n      _index;\n\n      that.tk_show_bjxq = true;\n      that.bj_id = _id;\n      __f__(\"log\", '_id-------------------------------------->', \" at pages/map/map.nvue:706\");\n      __f__(\"log\", _id, \" at pages/map/map.nvue:707\");\n      return;\n      var _list = that.markersArr;\n      for (var i = 0; i < _list.length; i++) {\n        if (_list[i].id == _id) {\n          _index = i;\n          that.current = i;\n          that.openAnimation();\n          break;\n        }\n      };\n    },\n    //移动地图结束\n    mapChange: function mapChange(e) {\n      __f__(\"log\", e, \" at pages/map/map.nvue:721\");\n      if (e) {\n        return;\n      }\n\n      if (mapEndloading) {\n        return;\n      }\n      mapEndloading = true;\n      setTimeout(function () {//防抖\n        mapEndloading = false;\n      }, 500);\n      if (e.detail.type == 'end' || e.type == 'end') {\n        //中心区域左边\n        mapContext.getCenterLocation({\n          success: function success(res) {\n            that.mapEnd(res);\n          },\n          fail: function fail(err) {\n            __f__(\"log\", err, \" at pages/map/map.nvue:740\");\n          } });\n\n      }\n      return;\n      if (uni.getSystemInfoSync().platform == 'ios') {\n        if (e.detail.type == 'end') {\n          //中心区域左边\n          mapContext.getCenterLocation({\n            success: function success(res) {\n              that.mapEnd(res);\n            },\n            fail: function fail(err) {\n              __f__(\"log\", err, \" at pages/map/map.nvue:753\");\n            } });\n\n        }\n      } else {\n        //地图移动结束\n        __f__(\"log\", e, \" at pages/map/map.nvue:759\");\n        if (e.type == 'end') {\n          //中心区域左边\n          mapContext.getCenterLocation({\n            success: function success(res) {\n\n              that.mapEnd(res);\n            },\n            fail: function fail(err) {\n              __f__(\"log\", err, \" at pages/map/map.nvue:768\");\n            } });\n\n          //缩放视野展示所有经纬度\n          // mapContext.getCenterLocation({\n          // \tsuccess(res) {\n          // \t\tconsole.log(res);\n          // \t},\n          // \tfail(err) {\n          // \t\tconsole.log(err)\n          // \t}\n          // })\n          //获取当前地图的视野范围\n          mapContext.getRegion({\n            success: function success(res) {\n              // console.log(res);\n            },\n            fail: function fail(err) {\n              __f__(\"log\", err, \" at pages/map/map.nvue:786\");\n            } });\n\n          //获取当前地图的缩放级别\n          mapContext.getScale({\n            success: function success(res) {\n              // console.log(res);\n            },\n            fail: function fail(err) {\n              __f__(\"log\", err, \" at pages/map/map.nvue:795\");\n            } });\n\n        }\n      }\n\n\n    },\n    getList: function getList() {},\n    //地图移动\n    mapEnd: function mapEnd(res) {\n      __f__(\"log\", '加载数据', \" at pages/map/map.nvue:806\");\n      if (res) {\n        that.longitude = res.longitude;\n        that.latitude = res.latitude;\n      }\n\n      //原数据\n      that.list = [];\n      that.pageIndex = 1;\n      that.chaceList = [];\n      // 覆盖物数据\n      that.markersArr = [];\n      that.originalList = [];\n      that.getList();\n\n    },\n    getLocation: function getLocation(type) {\n      uni.getLocation({\n        type: 'wgs84',\n        // type: 'gcj02',\n        success: function success(res) {\n          that.longitude = res.longitude;\n          that.latitude = res.latitude;\n          that.pageIndex = 1;\n          // if (type != 'back') {\n\n          that.setAddress(res);\n          setTimeout(function () {\n            that.getList();\n          }, 1000);\n          // }\n\n        },\n        fail: function fail(err) {\n          if (uni.getSystemInfoSync().platform == 'ios') {\n            if (!permision.judgeIosPermission('location')) {\n              uni.showModal({\n                title: '提示',\n                content: '需要打开定位权限',\n                success: function success(res) {\n                  if (res.confirm) {\n                    that.isToSetting = true;\n                    permision.gotoAppPermissionSetting();\n                  }\n                } });\n\n            }\n          } else {\n            that.requestAndroidPermission('android.permission.ACCESS_FINE_LOCATION');\n          }\n\n        } });\n\n    },\n    requestAndroidPermission: function requestAndroidPermission(permisionID) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var result, strStatus;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (\n                  permision.requestAndroidPermission(permisionID));case 2:result = _context.sent;\n\n                if (result == 1) {\n                  strStatus = \"已获得授权\";\n                } else if (result == 0) {\n                  strStatus = \"未获得授权\";\n                } else {\n                  strStatus = \"被永久拒绝权限\";\n                }\n                uni.showModal({\n                  title: '提示',\n                  content: '需要打开定位权限',\n                  success: function success(res) {\n                    if (res.confirm) {\n                      that.isToSetting = true;\n                      permision.gotoAppPermissionSetting();\n                    }\n                  } });case 5:case \"end\":return _context.stop();}}}, _callee);}))();\n\n    },\n    getimg: function getimg(img) {\n      return _service.default.getimg(img);\n    },\n    jump_fuc: function jump_fuc(e) {\n      if (that.tk_show1_num == 5) {\n\n      } else {\n        if (that.tk_show1_cur == -1) {\n          uni.showToast({\n            icon: 'none',\n            title: '请选择类型' });\n\n          return;\n        }\n      }\n\n      that.tk_show1 = false;\n      uni.navigateTo({\n        url: '/pages/map_dw/map_dw?tk_show1_cur=' + that.tk_show1_cur + '&tk_show1_num=' + that.tk_show1_num });\n\n    },\n    jump: function jump(e) {\n      var that = this;\n\n      if (that.btn_kg == 1) {\n        return;\n      } else {\n        that.btn_kg = 1;\n        setTimeout(function () {\n          that.btn_kg = 0;\n        }, 1000);\n      }\n\n      _service.default.jump(e);\n    } }) };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbWFwL21hcC5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaVdBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0EsK0YsMHVEQUxBLG9DQUNBLFlBQ0EsYUFDQTtBQUdBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLGlEQUZBLEk7O0FBSUE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLDBCQUZBO0FBR0EsaUJBSEEsRUFHQTtBQUNBLGtCQUpBLEVBSUE7QUFDQSxrQkFMQSxFQUtBO0FBQ0EsbUJBTkEsRUFNQTtBQUNBLHFCQVBBO0FBUUE7QUFDQSxhQURBO0FBRUEsd0JBRkE7QUFHQSw0QkFIQTtBQUlBLDZDQUpBO0FBS0E7QUFDQSxjQURBO0FBRUEsd0JBRkE7QUFHQSw0QkFIQTtBQUlBLDZDQUpBLEVBTEE7QUFVQTtBQUNBLGFBREE7QUFFQSxzQ0FGQTtBQUdBLCtCQUhBO0FBSUEsZ0RBSkEsRUFWQTtBQWVBO0FBQ0EsYUFEQTtBQUVBLHFDQUZBO0FBR0EsK0JBSEE7QUFJQSwrQ0FKQSxFQWZBO0FBb0JBO0FBQ0EsYUFEQTtBQUVBLHFDQUZBO0FBR0EsK0JBSEE7QUFJQSxnREFK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O0FBQ0EsaUVBREEsU0FDQSxNQURBOztBQUdBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBREE7QUFFQSxxQ0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFSQSxJQVZBOztBQW9CQSxLQXJUQTtBQXNUQSxVQXRUQSxrQkFzVEEsR0F0VEEsRUFzVEE7QUFDQTtBQUNBLEtBeFRBO0FBeVRBLFlBelRBLG9CQXlUQSxDQXpUQSxFQXlUQTtBQUNBOztBQUVBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLDBCQUZBOztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEdBREE7O0FBR0EsS0ExVUE7QUEyVUEsUUEzVUEsZ0JBMlVBLENBM1VBLEVBMlVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsRUFFQSxJQUZBO0FBR0E7O0FBRUE7QUFDQSxLQXhWQSxHQXhNQSxFIiwiZmlsZSI6IjIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwibWluaDEwMFwiPlxyXG5cdFx0PCEtLSA8dmlldyBzdHlsZT1cIndpZHRoOiAxMDBweDtoZWlnaHQ6IDIwMHB4O1wiPjwvdmlldz4gLS0+XHJcblx0XHQ8IS0tIDxwaWNrZXIgQGNoYW5nZT1cImJpbmRUaW1lQ2hhbmdlXCIgOnZhbHVlPVwicl9pbmRleFwiIDpyYW5nZT1cImFycmF5XCI+XHJcblx0XHRcdFx0XHRcdGFycmF5Ojo6PHZpZXcgY2xhc3M9XCJ1bmktaW5wdXRcIj57e2FycmF5W3JfaW5kZXhdfX08L3ZpZXc+YXJyYXlcclxuXHRcdFx0XHQ8L3BpY2tlcj4gLS0+XHJcblx0XHRcdFx0PCEtLSA8dmlldyBAY2xpY2s9XCJwaWNrVGltZVwiPuaXtumXtDwvdmlldz4gLS0+XHJcblx0XHQ8IS0tIDxibG9jayB2LWlmPVwidGltZVwiPiAtLT5cclxuXHRcdFx0XHJcblx0XHQ8bWFwIGNsYXNzPVwiaW5kZXhfbWFwXCIgaWQ9XCJtYXBcIiBuYW1lPVwibWFwXCIgOnNob3ctY29tcGFzcz1cImZhbHNlXCIgOnN0eWxlPVwie2hlaWdodDogbWFwSGVpZ2h0KydweCd9XCIgOmVuYWJsZS1yb3RhdGU9XCJmYWxzZVwiXHJcblx0XHQgOmxhdGl0dWRlPVwibGF0aXR1ZGVcIiA6bG9uZ2l0dWRlPVwibG9uZ2l0dWRlXCIgOm1hcmtlcnM9XCJtYXJrZXJzQXJyXCIgQG1hcmtlcnRhcD1cIm1hcmtlcnRhcFwiIDpjb250cm9scz1cIm1hcENvbnRyb2xzXCJcclxuXHRcdCBAcmVnaW9uY2hhbmdlPSdtYXBDaGFuZ2UnPlxyXG5cdFx0IDwhLS0gPGJhb2ppbmc+PC9iYW9qaW5nPiAtLT5cclxuXHRcdFx0PCEtLSDorabmiqXnu4Tku7YgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfYm94XCI+XHJcblx0XHRcdFx0PGltYWdlIEBjbGljaz1cImJhb2ppbmdfZnVjXCIgY2xhc3M9XCJial9ib3hfaW1nXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9iYW9qaW5nMS5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwiYmFvamluZ1wiIEBjbGljaz1cImJhb2ppbmdfZGVsXCIgY2xhc3M9XCJial9tYWluXCI+XHJcblxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9jbnVtXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfY251bV8xXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9jbnVtX251bVwiPnt7YmpfdGltZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX3RpcFwiIHN0eWxlPVwiY29sb3I6ICNmZmY7XCI+MTDnp5Lpkp/lhoXop6bmkbjlsY/luZXlj5bmtog8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0g6K2m5oql57uE5Lu2XHJcblxyXG5cdFx0XHQ8IS0tIOagh+iusOW8ueahhiAtLT5cclxuXHRcdFx0PHZpZXcgdi1pZj1cInRrX3Nob3dcIiBjbGFzcz1cInRrX3BvcG9wXCIgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ9J3Rlc3QnPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGtfbWFpblwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRfYmpcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRfYmpfdGV4dFwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJhZGRfYmpfd3pcIj7mt7vliqDmoIforrA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkX2JqX3RleHRcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX3R5cGVcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial90eXBlX2xpIGJqX3R5cGVfbGlfY3VyXCIgQGNsaWNrPVwib3Blbl90aygxKVwiPjx0ZXh0IGNsYXNzPVwiYmpfdHlwZV9saV90ZXh0IGJqX3R5cGVfbGlfdGV4dF9jdXJcIj7ljbHlrrM8L3RleHQ+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX3R5cGVfbGkgYmpfdHlwZV9saV9jdXJcIiBAY2xpY2s9XCJvcGVuX3RrKDIpXCI+PHRleHQgY2xhc3M9XCJial90eXBlX2xpX3RleHQgYmpfdHlwZV9saV90ZXh0X2N1clwiPuWRveS7pDwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfdHlwZV9saSBial90eXBlX2xpX2N1clwiIEBjbGljaz1cIm9wZW5fdGsoMylcIj48dGV4dCBjbGFzcz1cImJqX3R5cGVfbGlfdGV4dCBial90eXBlX2xpX3RleHRfY3VyXCI+5Y+X5Zuw6ICFPC90ZXh0Pjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial90eXBlX2xpIGJqX3R5cGVfbGlfY3VyXCIgQGNsaWNrPVwib3Blbl90ayg0KVwiPjx0ZXh0IGNsYXNzPVwiYmpfdHlwZV9saV90ZXh0IGJqX3R5cGVfbGlfdGV4dF9jdXJcIj7lu7rnrZHnoLTlnY88L3RleHQ+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX3R5cGVfbGkgYmpfdHlwZV9saV9jdXJcIiBAY2xpY2s9XCJvcGVuX3RrKDUpXCI+PHRleHQgY2xhc3M9XCJial90eXBlX2xpX3RleHQgYmpfdHlwZV9saV90ZXh0X2N1clwiPuaQnOe0ojwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0gPHRleHQgQGNsaWNrPVwidGtfc2hvdz1mYWxzZVwiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbmd1YW5iaVwiIHN0eWxlPVwiZm9udC1zaXplOiA1MHVweDtjb2xvcjogI2ZmZjtcIj48L3RleHQ+IC0tPlxyXG5cdFx0XHRcdDx0ZXh0IEBjbGljaz1cInRrX3Nob3c9ZmFsc2VcIiBjbGFzcz1cImljb25mb250IGljb25ndWFuYmlcIiBzdHlsZT1cImZvbnQtc2l6ZTogNTBweDtjb2xvcjogI2ZmZjtcIj4mI3hlNjIxOzwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOetm+mAieW8ueahhiAtLT5cclxuXHRcdFx0PHZpZXcgdi1pZj1cInRrX3Nob3dfc3hcIiBjbGFzcz1cInRrX3BvcG9wXCIgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ9J3Rlc3QnPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGtfbWFpblwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRfYmpcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRfYmpfdGV4dFwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJmb250LXdlaWdodDogYm9sZDtcIj7nrZvpgIk8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkX2JqX3RleHRcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX3R5cGVcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial90eXBlX2xpXCIgOmNsYXNzPVwidGtfc2hvd19zeF9jdXI9PTA/J2JqX3R5cGVfbGlfY3VyJzonJ1wiIEBjbGljaz1cInNoYWlfdGsoMClcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX3R5cGVfbGlfdGV4dFwiIDpjbGFzcz1cInRrX3Nob3dfc3hfY3VyPT0wPydial90eXBlX2xpX3RleHRfY3VyJzonJ1wiPuaJgOaciTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX3R5cGVfbGlcIiA6Y2xhc3M9XCJ0a19zaG93X3N4X2N1cj09MT8nYmpfdHlwZV9saV9jdXInOicnXCIgQGNsaWNrPVwic2hhaV90aygxKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfdHlwZV9saV90ZXh0XCIgOmNsYXNzPVwidGtfc2hvd19zeF9jdXI9PTE/J2JqX3R5cGVfbGlfdGV4dF9jdXInOicnXCI+5LuF6Ieq5bexPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfdHlwZV9saVwiIDpjbGFzcz1cInRrX3Nob3dfc3hfY3VyPT0yPydial90eXBlX2xpX2N1cic6JydcIiBAY2xpY2s9XCJzaGFpX3RrKDIpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial90eXBlX2xpX3RleHRcIiA6Y2xhc3M9XCJ0a19zaG93X3N4X2N1cj09Mj8nYmpfdHlwZV9saV90ZXh0X2N1cic6JydcIj7oiKrngrk8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSA8dGV4dCBAY2xpY2s9XCJ0a19zaG93PWZhbHNlXCIgY2xhc3M9XCJpY29uZm9udCBpY29uZ3VhbmJpXCIgc3R5bGU9XCJmb250LXNpemU6IDUwdXB4O2NvbG9yOiAjZmZmO1wiPjwvdGV4dD4gLS0+XHJcblx0XHRcdFx0PHRleHQgQGNsaWNrPVwidGtfc2hvd19zeD1mYWxzZVwiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbmd1YW5iaVwiIHN0eWxlPVwiZm9udC1zaXplOiA1MHB4O2NvbG9yOiAjZmZmO1wiPiYjeGU2MjE7PC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0PC9tYXA+XHJcblxyXG5cdFx0PHZpZXcgY2xhc3M9XCJtYXBfYnRuX2xpc3RcIj5cclxuXHRcdFxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIm1hcF9idG5fbGlcIiBAY2xpY2s9XCJzaHVheGluXCI+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwibWFwX2J0bl9saV9pbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2luZGV4X2J0bjEucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJtYXBfYnRuX2xpX3RleHRcIj7liLfmlrA8L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJtYXBfYnRuX2xpXCIgQGNsaWNrPVwidGtfc2hvdz10cnVlXCI+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwibWFwX2J0bl9saV9pbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2luZGV4X2J0bjIucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJtYXBfYnRuX2xpX3RleHRcIj7moIforrA8L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJtYXBfYnRuX2xpXCI+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwibWFwX2J0bl9saV9pbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2luZGV4X2J0bjMucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJtYXBfYnRuX2xpX3RleHRcIj7lpKnmsJQ8L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJtYXBfYnRuX2xpXCIgQGNsaWNrPVwidGtfc2hvd19zeD10cnVlXCI+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwibWFwX2J0bl9saV9pbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2luZGV4X2J0bjQucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJtYXBfYnRuX2xpX3RleHRcIj7nrZvpgIk8L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g5qCH6K6wIC0tPlxyXG5cdFx0PHZpZXc+PC92aWV3PlxyXG5cdFx0PCEtLSDljbHpmanlvLnmoYYgLS0+XHJcblx0XHQ8dmlldyB2LWlmPVwidGtfc2hvdzFcIiBjbGFzcz1cInRrX3BvcG9wXCIgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ9J3Rlc3QnPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRrX21haW5cIj5cclxuXHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJhZGRfYmpfaWNvblwiIDpzcmM9XCJnZXRpbWcoJy9zdGF0aWMvaW1hZ2VzL2FkZF9ial9pY29uLnBuZycpXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHRleHQgdi1pZj1cInRrX3Nob3cxX251bT09MVwiIGNsYXNzPVwibm90ZXRrX3RpdFwiPumAieaLqeWNsemZqeexu+WeizwvdGV4dD5cclxuXHRcdFx0XHQ8dGV4dCB2LWlmPVwidGtfc2hvdzFfbnVtPT0yXCIgY2xhc3M9XCJub3RldGtfdGl0XCI+6YCJ5oup5ZG95Luk57G75Z6LPC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0IHYtaWY9XCJ0a19zaG93MV9udW09PTNcIiBjbGFzcz1cIm5vdGV0a190aXRcIj7lj5flm7DogIU8L3RleHQ+XHJcblx0XHRcdFx0PHRleHQgdi1pZj1cInRrX3Nob3cxX251bT09NFwiIGNsYXNzPVwibm90ZXRrX3RpdFwiPumAieaLqeW7uuetkeegtOWdj+etiee6pzwvdGV4dD5cclxuXHRcdFx0XHQ8dGV4dCB2LWlmPVwidGtfc2hvdzFfbnVtPT01XCIgY2xhc3M9XCJub3RldGtfdGl0XCI+6KGl5YWF5pCc57Si5L+h5oGvPC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwibm90ZXRrX3RpbWVcIj57e25vdGVfdGltZV90fX08L3RleHQ+XHJcblx0XHRcdFx0PGlucHV0IHYtaWY9XCJ0a19zaG93MV9udW0hPTVcIiBjbGFzcz1cImJ6X2ludF90a1wiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIuWkh+azqFwiIC8+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cInRrX3Nob3cxX251bT09MVwiIGNsYXNzPVwiYmpfbGlzdF9ib3hcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlfd1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0wPydial9saXN0X2JveF9saV9jdXInOicnXCIgQGNsaWNrPVwidGtfc2hvdzFfY3VyPTBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJial9pY29uIFwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvaHVvemFpLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfaWNvbl90ZXh0XCI+54Gr54G+PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInh6X29rXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0wPyd4el9va19jdXInOicnXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy94el9vay5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlfd1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0xPydial9saXN0X2JveF9saV9jdXInOicnXCIgQGNsaWNrPVwidGtfc2hvdzFfY3VyPTFcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJial9pY29uXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9kaWFubGkucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9pY29uX3RleHRcIj7nlLXlips8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwieHpfb2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTE/J3h6X29rX2N1cic6JydcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3h6X29rLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saV93XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTI/J2JqX2xpc3RfYm94X2xpX2N1cic6JydcIiBAY2xpY2s9XCJ0a19zaG93MV9jdXI9MlwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJqX2ljb25cIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2x1emhhbmcucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9pY29uX3RleHRcIj7ot6/pmpw8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwieHpfb2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTI/J3h6X29rX2N1cic6JydcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3h6X29rLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saV93XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTM/J2JqX2xpc3RfYm94X2xpX2N1cic6JydcIiBAY2xpY2s9XCJ0a19zaG93MV9jdXI9M1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJqX2ljb25cIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2NoZWh1by5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2ljb25fdGV4dFwiPui9pueluDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ4el9va1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09Mz8neHpfb2tfY3VyJzonJ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMveHpfb2sucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpX3dcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saVwiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09ND8nYmpfbGlzdF9ib3hfbGlfY3VyJzonJ1wiIEBjbGljaz1cInRrX3Nob3cxX2N1cj00XCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYmpfaWNvblwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvd2VpeGlhbnd1LnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfaWNvbl90ZXh0XCI+5Y2x5YyW5ZOBPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInh6X29rXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT00Pyd4el9va19jdXInOicnXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy94el9vay5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlfd1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT01Pydial9saXN0X2JveF9saV9jdXInOicnXCIgQGNsaWNrPVwidGtfc2hvdzFfY3VyPTVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJial9pY29uXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9zaHVpemFpLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfaWNvbl90ZXh0XCI+5rC054G+PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInh6X29rXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT01Pyd4el9va19jdXInOicnXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy94el9vay5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJ0a19zaG93MV9udW09PTJcIiBjbGFzcz1cImJqX2xpc3RfYm94XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpX3cgYmpfbGlzdF9ib3hfbGlfd19tbFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpIGJqX2xpc3RfYm94X2xpX21sXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0wPydial9saXN0X2JveF9saV9jdXInOicnXCIgQGNsaWNrPVwidGtfc2hvdzFfY3VyPTBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJial9pY29uIFwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbWxfemhpaHVpLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfaWNvbl90ZXh0XCI+5oyH5oylPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInh6X29rXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0wPyd4el9va19jdXInOicnXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy94el9vay5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlfdyBial9saXN0X2JveF9saV93X21sXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGkgYmpfbGlzdF9ib3hfbGlfbWxcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTE/J2JqX2xpc3RfYm94X2xpX2N1cic6JydcIiBAY2xpY2s9XCJ0a19zaG93MV9jdXI9MVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJqX2ljb25cIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL21sX2ppaGUucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9pY29uX3RleHRcIj7pm4bnu5M8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwieHpfb2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTE/J3h6X29rX2N1cic6JydcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3h6X29rLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saV93IGJqX2xpc3RfYm94X2xpX3dfbWxcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saSBial9saXN0X2JveF9saV9tbFwiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09Mj8nYmpfbGlzdF9ib3hfbGlfY3VyJzonJ1wiIEBjbGljaz1cInRrX3Nob3cxX2N1cj0yXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYmpfaWNvblwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbWxfeWlsaWFvLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfaWNvbl90ZXh0XCI+5Yy755aXPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInh6X29rXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0yPyd4el9va19jdXInOicnXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy94el9vay5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlfdyBial9saXN0X2JveF9saV93X21sXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGkgYmpfbGlzdF9ib3hfbGlfbWxcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTM/J2JqX2xpc3RfYm94X2xpX2N1cic6JydcIiBAY2xpY2s9XCJ0a19zaG93MV9jdXI9M1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJqX2ljb25cIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL21sX3RpbmdjaGUucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9pY29uX3RleHRcIj7lgZzovaY8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwieHpfb2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTM/J3h6X29rX2N1cic6JydcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3h6X29rLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cInRrX3Nob3cxX251bT09M1wiIGNsYXNzPVwiYmpfbGlzdF9ib3hcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlfdyBial9saXN0X2JveF9saV93X3NrXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGkgYmpfbGlzdF9ib3hfbGlfc2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTA/J2JqX2xpc3RfYm94X2xpX2N1cic6JydcIiBAY2xpY2s9XCJ0a19zaG93MV9jdXI9MFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJqX2ljb24gXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9za18xLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfaWNvbl90ZXh0XCI+5r2c5Zyo55qE5Y+X5Zuw6ICFPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInh6X29rXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0wPyd4el9va19jdXInOicnXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy94el9vay5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlfdyBial9saXN0X2JveF9saV93X3NrXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGkgYmpfbGlzdF9ib3hfbGlfc2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTE/J2JqX2xpc3RfYm94X2xpX2N1cic6JydcIiBAY2xpY2s9XCJ0a19zaG93MV9jdXI9MVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJqX2ljb25cIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3NrXzIucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9pY29uX3RleHRcIj7noa7orqTnlJ/ov5jogIU8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwieHpfb2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTE/J3h6X29rX2N1cic6JydcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3h6X29rLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saV93IGJqX2xpc3RfYm94X2xpX3dfc2tcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saSBial9saXN0X2JveF9saV9za1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09Mj8nYmpfbGlzdF9ib3hfbGlfY3VyJzonJ1wiIEBjbGljaz1cInRrX3Nob3cxX2N1cj0yXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYmpfaWNvblwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvc2tfMy5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2ljb25fdGV4dFwiPuehruiupOmBh+mavuiAhTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ4el9va1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09Mj8neHpfb2tfY3VyJzonJ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMveHpfb2sucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpX3cgYmpfbGlzdF9ib3hfbGlfd19za1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpIGJqX2xpc3RfYm94X2xpX3NrXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0zPydial9saXN0X2JveF9saV9jdXInOicnXCIgQGNsaWNrPVwidGtfc2hvdzFfY3VyPTNcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJial9pY29uXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9za180LnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfaWNvbl90ZXh0XCI+56e76Zmk55Sf6L+Y6ICFPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInh6X29rXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0zPyd4el9va19jdXInOicnXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy94el9vay5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlfdyBial9saXN0X2JveF9saV93X3NrXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGkgYmpfbGlzdF9ib3hfbGlfc2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTQ/J2JqX2xpc3RfYm94X2xpX2N1cic6JydcIiBAY2xpY2s9XCJ0a19zaG93MV9jdXI9NFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJqX2ljb25cIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3NrXzUucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9pY29uX3RleHRcIj7np7vpmaTpgYfpmr7ogIU8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwieHpfb2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTQ/J3h6X29rX2N1cic6JydcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3h6X29rLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saV93IGJqX2xpc3RfYm94X2xpX3dfc2tcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saSBial9saXN0X2JveF9saV9za1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09NT8nYmpfbGlzdF9ib3hfbGlfY3VyJzonJ1wiIEBjbGljaz1cInRrX3Nob3cxX2N1cj01XCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYmpfaWNvblwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvc2tfNi5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2ljb25fdGV4dFwiPuacgOWQjuS4gOasoeeci+WIsDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ4el9va1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09NT8neHpfb2tfY3VyJzonJ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMveHpfb2sucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwidGtfc2hvdzFfbnVtPT00XCIgY2xhc3M9XCJial9saXN0X2JveFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saV93XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTA/J2JqX2xpc3RfYm94X2xpX2N1cic6JydcIiBAY2xpY2s9XCJ0a19zaG93MV9jdXI9MFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJqX2ljb24gXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9waF8xLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfaWNvbl90ZXh0XCI+5L2O6aOO6ZmpPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInh6X29rXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0wPyd4el9va19jdXInOicnXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy94el9vay5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlfd1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0xPydial9saXN0X2JveF9saV9jdXInOicnXCIgQGNsaWNrPVwidGtfc2hvdzFfY3VyPTFcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJial9pY29uXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9waF8yLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfaWNvbl90ZXh0XCI+5Lit6aOO6ZmpPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInh6X29rXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0xPyd4el9va19jdXInOicnXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy94el9vay5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlfd1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0yPydial9saXN0X2JveF9saV9jdXInOicnXCIgQGNsaWNrPVwidGtfc2hvdzFfY3VyPTJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJial9pY29uXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9waF8zLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfaWNvbl90ZXh0XCI+6auY6aOO6ZmpPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInh6X29rXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0yPyd4el9va19jdXInOicnXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy94el9vay5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwidGtfc2hvdzFfbnVtPT01XCIgY2xhc3M9XCJial9saXN0X2JveFwiPlxyXG5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VhcmNoX21ib3hcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwic2VhcmNoX21ib3hfaW1nXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9zZWFyY2hfYmdfMDMucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VhcmNoX21ib3hfZDFcIj7ml7bpl7Qv5pel5pyfPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaF9tYm94X2QyXCI+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSA8aW5wdXQgY2xhc3M9XCJzZWFyY2hfbWJveF9kMl9pbnRcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCLov5vlhaVcIi8+IC0tPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gPHBpY2tlciBtb2RlPVwidGltZVwiIHZhbHVlPVwiMTI6MDBcIiBAY2hhbmdlPVwiYmluZFRpbWVDaGFuZ2VcIiBkYXRhLXR5cGU9XCIxXCI+IC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgQGNsaWNrPVwicGlja1RpbWUoMSlcIiBjbGFzcz1cInNlYXJjaF9tYm94X2QyX2ludCBhaWMganVfY1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIiBzZWFyY2hfbWJveF9kMl9pbnR0ZXh0IFwiPnt7dGltZT90aW1lOifov5vlhaUnfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSA8L3BpY2tlcj4gLS0+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJzZWFyY2hfbWJveF9kMl90ZXh0XCI+PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gPGlucHV0IGNsYXNzPVwic2VhcmNoX21ib3hfZDJfaW50XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwi5pKk5Ye6XCIvPiAtLT5cclxuXHJcblx0XHRcdFx0XHRcdFx0PCEtLSA8cGlja2VyIG1vZGU9XCJ0aW1lXCIgdmFsdWU9XCIxMjowMFwiIEBjaGFuZ2U9XCJiaW5kVGltZUNoYW5nZVwiIGRhdGEtdHlwZT1cIjJcIj4gLS0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBAY2xpY2s9XCJwaWNrVGltZSgyKVwiIGNsYXNzPVwic2VhcmNoX21ib3hfZDJfaW50IGFpYyBqdV9jXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiIHNlYXJjaF9tYm94X2QyX2ludHRleHRcIj57e3RpbWUxP3RpbWUxOifmkqTlh7onfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSA8L3BpY2tlcj4gLS0+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZWFyY2hfbWJveF9kM1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cInNlYXJjaF9tYm94X2QzX2ludFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIuWboumYn+WQjeensFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCJzZWFyY2hfdHlwZT09MVwiIEBjbGljaz1cInNlYXJjaF90eXBlPTJcIiBjbGFzcz1cInNlYXJjaF9tYm94X2QzX3RleHRcIiA6c3JjPVwiZ2V0aW1nKCcvc3RhdGljL2ltYWdlcy9zZWFyY2hfdHlwZV8wNjIucG5nJylcIlxyXG5cdFx0XHRcdFx0XHRcdCBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cInNlYXJjaF90eXBlPT0yXCIgQGNsaWNrPVwic2VhcmNoX3R5cGU9M1wiIGNsYXNzPVwic2VhcmNoX21ib3hfZDNfdGV4dFwiIDpzcmM9XCJnZXRpbWcoJy9zdGF0aWMvaW1hZ2VzL3NlYXJjaF90eXBlXzAzMi5wbmcnKVwiXHJcblx0XHRcdFx0XHRcdFx0IG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwic2VhcmNoX3R5cGU9PTNcIiBAY2xpY2s9XCJzZWFyY2hfdHlwZT0xXCIgY2xhc3M9XCJzZWFyY2hfbWJveF9kM190ZXh0XCIgOnNyYz1cImdldGltZygnL3N0YXRpYy9pbWFnZXMvc2VhcmNoX3R5cGVfMDkyLnBuZycpXCJcclxuXHRcdFx0XHRcdFx0XHQgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwic2VhcmNoX21ib3hfZDNfaW50XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwi5Y2x6Zmp57G75Z6LXCIgLz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaF9tYm94X2Q0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwic2VhcmNoX21ib3hfZDRfaW50XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwi55Sf6L+Y6ICF5pWw6YePXCIgLz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaF9tYm94X2Q0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwic2VhcmNoX21ib3hfZDRfaW50XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwi6YGH6Zq+6ICF5pWw6YePXCIgLz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQgPHBpY2tlciBtb2RlPVwidGltZVwiIDp2YWx1ZT1cInRpbWVcIiBzdGFydD1cIjA5OjAxXCIgZW5kPVwiMjE6MDFcIiBAY2hhbmdlPVwiYmluZFRpbWVDaGFuZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHTml7bpl7TpgInmi6k8dmlldyBjbGFzcz1cInVuaS1pbnB1dFwiPnt7dGltZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0PC9waWNrZXI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaF90eXBlX3RpcFwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNlYXJjaF90eXBlX3RpcF90ZXh0XCI+5rOo77yaPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJzZWFyY2hfdHlwZV90aXBfaW1nXCIgOnNyYz1cImdldGltZygnL3N0YXRpYy9pbWFnZXMvc2VhcmNoX3R5cGVfMDYucG5nJylcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJzZWFyY2hfdHlwZV90aXBfdGV4dFwiPuacquaQnOe0ojwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwic2VhcmNoX3R5cGVfdGlwX2ltZ1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDE1cHg7XCIgOnNyYz1cImdldGltZygnL3N0YXRpYy9pbWFnZXMvc2VhcmNoX3R5cGVfMDMucG5nJylcIlxyXG5cdFx0XHRcdFx0XHQgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic2VhcmNoX3R5cGVfdGlwX3RleHRcIj7mraPlnKjmkJzntKI8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInNlYXJjaF90eXBlX3RpcF9pbWdcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxNXB4O1wiIDpzcmM9XCJnZXRpbWcoJy9zdGF0aWMvaW1hZ2VzL3NlYXJjaF90eXBlXzA5LnBuZycpXCJcclxuXHRcdFx0XHRcdFx0IG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNlYXJjaF90eXBlX3RpcF90ZXh0XCI+5pCc57Si5a6M5oiQPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0a3NldF9idG5cIiBAY2xpY2s9XCJqdW1wX2Z1Y1wiIGRhdGEtdXJsPVwiL3BhZ2VzL21hcF9kdy9tYXBfZHc/dHlwZT1md3NtXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMjhweDtjb2xvcjogI2ZmZjtcIj7orr7nva7kvY3nva48L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHQ8IS0tIDx0ZXh0IEB0YXA9XCJ0a19zaG93MT1mYWxzZVwiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbmd1YW5iaVwiIHN0eWxlPVwiZm9udC1zaXplOiA1MHVweDtjb2xvcjogI2ZmZjtcIj48L3RleHQ+IC0tPlxyXG5cdFx0XHQ8dGV4dCBAY2xpY2s9XCJ0a19zaG93MT1mYWxzZVwiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbmd1YW5iaVwiIHN0eWxlPVwiZm9udC1zaXplOiA1MHB4O2NvbG9yOiAjZmZmO1wiPiYjeGU2MjE7PC90ZXh0PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDwhLS0g5qCH6K6w6K+m5oOFIC0tPlxyXG5cdFx0PHZpZXcgdi1pZj1cInRrX3Nob3dfYmp4cVwiIGNsYXNzPVwidGtfcG9wb3BcIiBAdG91Y2htb3ZlLnN0b3AucHJldmVudD0ndGVzdCc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGtfbWFpbjFcIiBzdHlsZT1cInBhZGRpbmc6IDAhaW1wb3J0YW50O1wiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfdXNlcl9tc2dcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJqX3VzZXJfdHhcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3R4X20yLmpwZ1wiIG1vZGU9XCJhc3BlY3RGaWxsXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleF8xIGJqX3VzZXJfbHhtc2dcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial91c2VyX25hbWVcIj7lvKDoi6XmmIA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfdXNlcl90ZWxcIj4xNzg2OTUyMzUyMDwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJianhxX3hxXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2QxXCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJqX2QxX2ljb25cIiA6c3JjPVwiZ2V0aW1nKCcvc3RhdGljL2ltYWdlcy9odW96YWkucG5nJylcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9kMV9uYW1lXCI+5rW35reA54Gr54G+54K5PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9kMlwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2QyX2xcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2QyX3RleHRcIj7ml7bpl7TvvJoyMDIwLTA0LTEyIDE5OjIzPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfZDJfdGV4dFwiPue7j+W6pu+8mjM5Ljg1NDEyNTEzMjE1PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfZDJfdGV4dFwiPue6rOW6pu+8mjM5Ljg1NDEyNTEzMjE1PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBAY2xpY2s9XCJnZXRTaGFyZVwiIGNsYXNzPVwiYmpfZDJfc2hhcmVcIiA6c3JjPVwiZ2V0aW1nKCcvc3RhdGljL2ltYWdlcy90a19zaGFyZS5wbmcnKVwiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwiYnpfaW50X3RrXCIgdHlwZT1cInRleHRcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDM1cHg7XCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIuWkh+azqFwiIC8+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX3R5cGVfbGkgYmpfdHlwZV9saV9jdXJcIiBzdHlsZT1cIndpZHRoOiA0MjVweDtcIiBAY2xpY2s9XCJ1cGRhdGVfYmooMSlcIj48dGV4dCBzdHlsZT1cImNvbG9yOiAjZmZmO1wiPuabtOaWsDwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX3R5cGVfbGkgYmpfdHlwZV9saV9jdXIxXCIgc3R5bGU9XCJ3aWR0aDogNDI1cHg7XCIgQGNsaWNrPVwidXBkYXRlX2JqKDIpXCI+PHRleHQgc3R5bGU9XCJjb2xvcjogI2ZmZjtcIj7liKDpmaQ8L3RleHQ+PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIDx0ZXh0IEBjbGljaz1cInRrX3Nob3c9ZmFsc2VcIiBjbGFzcz1cImljb25mb250IGljb25ndWFuYmlcIiBzdHlsZT1cImZvbnQtc2l6ZTogNTB1cHg7Y29sb3I6ICNmZmY7XCI+PC90ZXh0PiAtLT5cclxuXHRcdFx0PHRleHQgQGNsaWNrPVwidGtfc2hvd19ianhxPWZhbHNlXCIgY2xhc3M9XCJpY29uZm9udCBcIiBzdHlsZT1cImZvbnQtc2l6ZTogNTBweDtjb2xvcjogI2ZmZjtcIj4mI3hlNjIxOzwvdGV4dD5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0XHQ8IS0tIDwvYmxvY2s+IC0tPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblx0aW1wb3J0IHNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZS5qcyc7XHJcblx0aW1wb3J0IHtcclxuXHRcdG1hcFN0YXRlLFxyXG5cdFx0bWFwTXV0YXRpb25zXHJcblx0fSBmcm9tICd2dWV4J1xyXG5cdHZhciB0aGF0LCBtYXBDb250ZXh0LCBtYXBFbmRsb2FkaW5nO1xyXG5cdHZhciBkanNfZnVjXHJcblx0dmFyIGRqc19mdWMxXHJcblx0dmFyIHRoYXRcclxuXHRcclxuXHRpbXBvcnQgdG9yY2ggZnJvbSBcIkAvY29tbW9uL2RjLXRvcmNoL3RvcmNoLmpzXCJcclxuXHRjb25zdCBkb21Nb2R1bGUgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cdGRvbU1vZHVsZS5hZGRSdWxlKCdmb250RmFjZScsIHtcclxuXHRcdCdmb250RmFtaWx5JzogXCJpY29uZm9udFwiLFxyXG5cdFx0J3NyYyc6IFwidXJsKCcuLi8uLi9zdGF0aWMvZm9udHMvaWNvbmZvbnQudHRmJylcIlxyXG5cdH0pO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bGF0aXR1ZGU6IDM5LjkwOSxcclxuXHRcdFx0XHRsb25naXR1ZGU6IDExNi4zOTc0MixcclxuXHRcdFx0XHRtYXBXaWR0aDogMCwgLy/lnLDlm77ljLrln5/lrr3luqZcclxuXHRcdFx0XHRtYXBIZWlnaHQ6IDAsIC8v5Zyw5Zu+5Yy65Z+f6auY5bqmXHJcblx0XHRcdFx0Y2VudGVyVG9wOiAwLCAvL+S4reW/g+WbvueJh+WdkOagh1xyXG5cdFx0XHRcdGNlbnRlckxlZnQ6IDAsIC8v5Lit5b+D5Zu+54mH5Z2Q5qCHXHJcblx0XHRcdFx0dHJhbnNsYXRlWTogMTY1LFxyXG5cdFx0XHRcdG1hcmtlcnNBcnI6IFt7XHJcblx0XHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRcdGxhdGl0dWRlOiAzOS45MDksXHJcblx0XHRcdFx0XHRsb25naXR1ZGU6IDExNi4zOTc0MixcclxuXHRcdFx0XHRcdGljb25QYXRoOiAnL3N0YXRpYy9pbWFnZXMvaHVvemFpLnBuZydcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRpZDogMTIsXHJcblx0XHRcdFx0XHRsYXRpdHVkZTogMzkuOTE5LFxyXG5cdFx0XHRcdFx0bG9uZ2l0dWRlOiAxMTYuMzk3NDIsXHJcblx0XHRcdFx0XHRpY29uUGF0aDogJy9zdGF0aWMvaW1hZ2VzL2h1b3phaS5wbmcnXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0aWQ6IDMsXHJcblx0XHRcdFx0XHRcImxhdGl0dWRlXCI6IDM5Ljk3NTY0Mzc0NzMwNDk4NixcclxuXHRcdFx0XHRcdFwibG9uZ2l0dWRlXCI6IDExNi4zMTQzMjgsXHJcblx0XHRcdFx0XHRcImljb25QYXRoXCI6IFwiL3N0YXRpYy9pbWFnZXMvc2h1aXphaS5wbmdcIlxyXG5cdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdGlkOiA0LFxyXG5cdFx0XHRcdFx0XCJsYXRpdHVkZVwiOiAzOS45NDI1NDg1NTA1NzU5OCxcclxuXHRcdFx0XHRcdFwibG9uZ2l0dWRlXCI6IDExNi4zMTQzMjgsXHJcblx0XHRcdFx0XHRcImljb25QYXRoXCI6IFwiL3N0YXRpYy9pbWFnZXMvY2hlaHVvLnBuZ1wiXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0aWQ6IDUsXHJcblx0XHRcdFx0XHRcImxhdGl0dWRlXCI6IDM5Ljk1MjU0ODU1MDU3NTk4LFxyXG5cdFx0XHRcdFx0XCJsb25naXR1ZGVcIjogMTE2LjMxNDMyOCxcclxuXHRcdFx0XHRcdFwiaWNvblBhdGhcIjogXCIvc3RhdGljL2ltYWdlcy9sdXpoYW5nLnBuZ1wiXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0aWQ6IDYsXHJcblx0XHRcdFx0XHRcImxhdGl0dWRlXCI6IDM5Ljk1NTU0ODU1MDU3NTk4LFxyXG5cdFx0XHRcdFx0XCJsb25naXR1ZGVcIjogMTE2LjMyNDMyOCxcclxuXHRcdFx0XHRcdFwiaWNvblBhdGhcIjogXCIvc3RhdGljL2ltYWdlcy9kaWFubGkucG5nXCJcclxuXHRcdFx0XHR9XSwgLy/opobnm5bnialcclxuXHRcdFx0XHRtYXBDb250cm9sczogW10sXHJcblx0XHRcdFx0bWFwQ29udHJvbHMxOiBbe1xyXG5cdFx0XHRcdFx0aWQ6IFwiMVwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IHtcclxuXHRcdFx0XHRcdFx0bGVmdDogMzc1IC0gMTUsXHJcblx0XHRcdFx0XHRcdHRvcDogKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCAtIDQ1IC0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkuc3RhdHVzQmFySGVpZ2h0KSAvIDIgLSA0OSxcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDMwLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDQ5XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0aWNvblBhdGg6IFwiL3N0YXRpYy9pbWFnZXMvenVvYmlhby5wbmdcIixcclxuXHRcdFx0XHRcdGNsaWNrYWJsZTogZmFsc2VcclxuXHRcdFx0XHR9XSwgLy/lnLDlm77kuK3nmoTmjqfku7ZcclxuXHRcdFx0XHRial90aW1lOiAxMCxcclxuXHRcdFx0XHRiYW9qaW5nOiBmYWxzZSxcclxuXHJcblxyXG5cclxuXHJcblx0XHRcdFx0dGtfc2hvdzogZmFsc2UsXHJcblx0XHRcdFx0dGtfc2hvdzE6IGZhbHNlLFxyXG5cdFx0XHRcdHRrX3Nob3cxX251bTogMCwgLy/moIforrAx57qn5YiG57G7XHJcblx0XHRcdFx0bm90ZV90aW1lX3Q6ICcnLFxyXG5cdFx0XHRcdHRrX3Nob3cxX2N1cjogLTEsIC8v5qCH6K6wMue6p+WIhuexu1xyXG5cclxuXHRcdFx0XHR0a19zaG93X3N4OiBmYWxzZSwgLy/nrZvpgIlcclxuXHRcdFx0XHR0a19zaG93X3N4X2N1cjogMCwgLy/nrZvpgInliIbnsbtcclxuXHJcblx0XHRcdFx0dGtfc2hvd19ianhxOiBmYWxzZSwgLy/moIforrDor6bmg4VcclxuXHRcdFx0XHRial9pZDogLTEsIC8v5qCH6K6waWRcclxuXHJcblxyXG5cdFx0XHRcdHNlYXJjaF90eXBlOiAxLCAvLyDmkJzntKLnirbmgIEgIDHmnKrmkJzntKIgIDLmraPlnKjmkJzntKIgM+aQnOe0ouWujOaIkFxyXG5cdFx0XHRcdHRpbWU6JycsXHJcblx0XHRcdFx0dGltZTE6JycsXHJcblx0XHRcdFx0YXJyYXk6W1xyXG5cdFx0XHRcdFx0MSwxLDEsMSwyXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRBVURJTzogdW5pLmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCksXHJcblx0XHRcdFx0dG9yY2hfdHlwZTpmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0Li4ubWFwU3RhdGUoWydoYXNMb2dpbicsICdmb3JjZWRMb2dpbicsICd1c2VyTmFtZScsICdsb2dpbkRhdGFzJ10pLFxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0Ly8gcmV0dXJuXHJcblx0XHRcdHRoYXQgPSB0aGlzXHJcblx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHR0aGlzLmdldExvY2F0aW9uKCk7XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cclxuXHRcdFx0dGhpcy5BVURJTy5zcmMgPSAnL3N0YXRpYy9tdXNpYy9qaW5nYmFvX2tvbmcubXAzJztcclxuXHRcdFx0dGhpcy5BVURJTy5sb29wPXRydWVcclxuXHRcdFx0Ly/pn7PpopHov5vlhaXlj6/ku6Xmkq3mlL7nirbmgIHvvIzkvYbkuI3kv53or4HlkI7pnaLlj6/ku6XmtYHnlYXmkq3mlL5cclxuXHRcdFx0dGhpcy5BVURJTy5vbkNhbnBsYXkoKHJlcykgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCfpn7PpopHov5vlhaXlj6/ku6Xmkq3mlL7nirbmgIHvvIzkvYbkuI3kv53or4HlkI7pnaLlj6/ku6XmtYHnlYXmkq3mlL4nKVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly/pn7PpopHmkq3mlL5cclxuXHRcdFx0dGhpcy5BVURJTy5vblBsYXkoKHJlcykgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCfpn7PpopHmkq3mlL4nKVxyXG5cdFx0XHRcdHVuaS52aWJyYXRlTG9uZyh7XHJcblx0XHRcdFx0ICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHQgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyk7XHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0b3JjaC5vbigpO1xyXG5cdFx0XHRcdHRoYXQudG9yY2hfdHlwZT10cnVlXHJcblx0XHRcdFx0ZGpzX2Z1Yz1zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQgIGlmKHRoYXQudG9yY2hfdHlwZT09dHJ1ZSl7XHJcblx0XHRcdFx0XHRcdHRvcmNoLm9mZigpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LnRvcmNoX3R5cGU9ZmFsc2VcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHR0b3JjaC5vbigpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LnRvcmNoX3R5cGU9dHJ1ZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0ICAvLyBjb25zb2xlLmxvZyh0aGF0LmRqcygpKVxyXG5cdFx0XHRcdH0sIDEwMCk7XHJcblx0XHRcdFx0ZGpzX2Z1YzE9c2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0dW5pLnZpYnJhdGVMb25nKHtcclxuXHRcdFx0XHRcdCAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHQgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyk7XHJcblx0XHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSwgMTAwMCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQvL+mfs+mikeWBnOatolxyXG5cdFx0XHR0aGlzLkFVRElPLm9uU3RvcCgocmVzKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ+mfs+mikeWBnOatoicpXHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChkanNfZnVjKVxyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoZGpzX2Z1YzEpXHJcblx0XHRcdFx0dG9yY2gub2ZmKCk7XHJcblx0XHRcdFx0dGhhdC50b3JjaF90eXBlPXRydWVcclxuXHRcdFx0fSk7XHJcblx0XHRcdC8v6K+t6Z+z6Ieq54S25pKt5pS+57uT5p2fXHJcblx0XHRcdHRoaXMuQVVESU8ub25FbmRlZCgocmVzKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ+ivremfs+iHqueEtuaSreaUvue7k+adnycpXHJcblx0XHRcdFx0dGhpcy5wbGF5TXNnaWQgPSBudWxsO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8qY29uc3QgaW5uZXJBdWRpb0NvbnRleHQgPSB1bmkuY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcclxuXHRcdFx0aW5uZXJBdWRpb0NvbnRleHQuYXV0b3BsYXkgPSB0cnVlO1xyXG5cdFx0XHRpbm5lckF1ZGlvQ29udGV4dC5zcmMgPSAnaHR0cHM6Ly92a2NleXVndS5jZG4uYnNwYXBwLmNvbS9WS0NFWVVHVS1oZWxsby11bmlhcHAvMmNjMjIwZTAtYzI3YS0xMWVhLTlkZmItNmRhOGUzMDllMGQ4Lm1wMyc7XHJcblx0XHRcdGlubmVyQXVkaW9Db250ZXh0Lm9uUGxheSgoKSA9PiB7XHJcblx0XHRcdCAgY29uc29sZS5sb2coJ+W8gOWni+aSreaUvicpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0aW5uZXJBdWRpb0NvbnRleHQub25FcnJvcigocmVzKSA9PiB7XHJcblx0XHRcdCAgY29uc29sZS5sb2cocmVzLmVyck1zZyk7XHJcblx0XHRcdCAgY29uc29sZS5sb2cocmVzLmVyckNvZGUpO1xyXG5cdFx0XHR9KTsqL1xyXG5cdFx0fSxcclxuXHRcdG9uSGlkZSgpIHtcclxuXHRcdFx0Y2xlYXJJbnRlcnZhbChkanNfZnVjKVxyXG5cdFx0XHRjbGVhckludGVydmFsKGRqc19mdWMxKVxyXG5cdFx0XHR0b3JjaC5vZmYoKTtcclxuXHRcdFx0dGhhdC50b3JjaF90eXBlPXRydWVcclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGF0Lm1hcFdpZHRoID0gNzUwXHJcblx0XHRcdHRoYXQuc0hlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnN0YXR1c0JhckhlaWdodDtcclxuXHRcdFx0Ly8gdGhhdC5tYXBIZWlnaHQgPSAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0ICAtIHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnN0YXR1c0JhckhlaWdodCkgLSAyNDY7XHJcblx0XHRcdHRoYXQubWFwSGVpZ2h0ID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0ICogMiAtIDM5NjtcclxuXHRcdFx0Y29uc29sZS5sb2codGhhdC5tYXBIZWlnaHQpXHJcblx0XHRcdGNvbnNvbGUubG9nKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnNjcmVlbkhlaWdodClcclxuXHRcdFx0Y29uc3QgcXVlcnkgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xyXG5cdFx0XHRxdWVyeS5zZWxlY3QoJyNtYXAnKS5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0dmFyIF9uYXZIZWlnaHQgPSBkYXRhLmhlaWdodDtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnX25hdkhlaWdodC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT4nKVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKF9uYXZIZWlnaHQpXHJcblx0XHRcdFx0Ly8gX25hdkhlaWdodD1fbmF2SGVpZ2h0K3VuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnN0YXR1c0JhckhlaWdodFxyXG5cdFx0XHRcdF9uYXZIZWlnaHQgPSBfbmF2SGVpZ2h0IC8gMlxyXG5cdFx0XHRcdF9uYXZIZWlnaHQgPSBfbmF2SGVpZ2h0LnRvRml4ZWQoMClcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2codHlwZW9mIF9uYXZIZWlnaHQpXHJcblx0XHRcdFx0Y29uc29sZS5sb2codHlwZW9mIDcxMClcclxuXHRcdFx0XHR2YXIgc3NzID0gW3tcclxuXHRcdFx0XHRcdGlkOiBcIjFcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7XHJcblx0XHRcdFx0XHRcdGxlZnQ6IDc1MCAvIDIgLSAyOCxcclxuXHRcdFx0XHRcdFx0Ly8gdG9wOiBfbmF2SGVpZ2h0IC0gNjgsXHJcblx0XHRcdFx0XHRcdHRvcDogX25hdkhlaWdodCxcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDU1LFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDY4XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0aWNvblBhdGg6IFwiL3N0YXRpYy9pbWFnZXMvaHVvemFpLnBuZ1wiLFxyXG5cdFx0XHRcdFx0Y2xpY2thYmxlOiBmYWxzZVxyXG5cdFx0XHRcdH1dXHJcblx0XHRcdFx0dGhhdC5zZXRIZWlnaHQoc3NzKVxyXG5cdFx0XHRcdC8vIFZ1ZS5zZXQodGhhdC5tYXBDb250cm9sc1swXS5wb3NpdGlvbiwndG9wJyxzc3MpXHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhhdC5tYXBDb250cm9scylcclxuXHRcdFx0fSkuZXhlYygpO1xyXG5cclxuXHRcdH0sXHJcblx0XHRvblNob3coKSB7XHJcblxyXG5cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC4uLm1hcE11dGF0aW9ucyhbJ3NldEFkZHJlc3MnLCAnc2V0SGVpZ2h0J10pLFxyXG5cdFx0XHQvLyDmkq3mlL7or63pn7NcclxuXHRcdFx0cGxheVZvaWNlKG1zZykge1xyXG5cdFx0XHRcdFx0dGhpcy5BVURJTy5wbGF5KCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGJhb2ppbmdfZnVjKCl7XHJcblx0XHRcdFx0dmFyIHRoYXQ9dGhpc1xyXG5cdFx0XHRcdHRoaXMuYmFvamluZz10cnVlXHJcblx0XHRcdFx0dGhhdC5ial90aW1lPTNcclxuXHRcdFx0XHRkanNfZnVjPXNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHQgIGlmKHRoYXQuYmpfdGltZT09MCl7XHJcblx0XHRcdFx0XHRcdC8vIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHQvLyBcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0XHQvLyBcdHRpdGxlOiforabmiqXmk43kvZwnXHJcblx0XHRcdFx0XHRcdC8vIH0pXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKDApXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjbGVhckludGVydmFsKGRqc19mdWMpXHJcblx0XHRcdFx0XHRcdHRoYXQuYmpfdGltZT0nISdcclxuXHRcdFx0XHRcdFx0dGhhdC5wbGF5Vm9pY2UoKVxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHRoYXQuYmpfdGltZS0tXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0ICAvLyBjb25zb2xlLmxvZyh0aGF0LmRqcygpKVxyXG5cdFx0XHRcdH0sIDEwMDApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRiYW9qaW5nX2RlbCgpe1xyXG5cdFx0XHRcdHZhciB0aGF0PXRoaXNcclxuXHRcdFx0XHRjbGVhckludGVydmFsKGRqc19mdWMpXHJcblx0XHRcdFx0dGhpcy5ial90aW1lPTEwXHJcblx0XHRcdFx0dGhpcy5iYW9qaW5nPWZhbHNlXHJcblx0XHRcdFx0dGhpcy5BVURJTy5zdG9wKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHBpY2tUaW1lKHR5cGUpe1xyXG5cdFx0XHRcdHBsdXMubmF0aXZlVUkucGlja1RpbWUoZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0XHR2YXIgZD1lLmRhdGU7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIumAieaLqeeahOaXtumXtO+8mlwiK2QuZ2V0SG91cnMoKStcIjpcIitkLmdldE1pbnV0ZXMoKSk7XHJcblx0XHRcdFx0XHR2YXIgbWluPWQuZ2V0TWludXRlcygpXHJcblx0XHRcdFx0XHRpZihkLmdldE1pbnV0ZXMoKTwxMCl7XHJcblx0XHRcdFx0XHRcdG1pbj0nMCcrZC5nZXRNaW51dGVzKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmKHR5cGU9PTEpe1xyXG5cdFx0XHRcdFx0XHR0aGF0LnRpbWU9ZC5nZXRIb3VycygpK1wiOlwiK21pblxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHRoYXQudGltZTE9ZC5nZXRIb3VycygpK1wiOlwiK21pblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSwgZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuacqumAieaLqeaXtumXtO+8mlwiK0pTT04uc3RyaW5naWZ5KGUpKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dGVzdCgpIHt9LFxyXG5cdFx0XHRiaW5kVGltZUNoYW5nZShlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZSlcclxuXHRcdFx0XHR0aGlzLnRpbWUgPSBlLnRhcmdldC52YWx1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR1cGRhdGVfYmoodHlwZSkge1xyXG5cdFx0XHRcdGlmICh0eXBlID09IDEpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5pu05paw5oiQ5YqfJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHR5cGUgPT0gMikge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfliKDpmaTmiJDlip8nXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnRrX3Nob3dfYmp4cSA9IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldFNoYXJlKCkge1xyXG5cdFx0XHRcdHVuaS5zaGFyZVdpdGhTeXN0ZW0oe1xyXG5cdFx0XHRcdFx0dHlwZTogJ3RleHQnLFxyXG5cdFx0XHRcdFx0aHJlZjogJ2h0dHBzOi8vdW5pYXBwLmRjbG91ZC5pbycsXHJcblx0XHRcdFx0XHRzdW1tYXJ5OiAn5YiG5Lqr5YaF5a65JyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XHJcblx0XHRcdFx0XHRcdC8vIOWIhuS6q+WujOaIkO+8jOivt+azqOaEj+atpOaXtuS4jeS4gOWumuaYr+aIkOWKn+WIhuS6q1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWwoKSB7XHJcblx0XHRcdFx0XHRcdC8vIOWIhuS6q+Wksei0pVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8gX2FwcC5nZXRTaGFyZShmYWxzZSwgZmFsc2UsIDIsICcnLCAnJywgJycsIHRoYXQuY2FtZXJhX2ltZywgZmFsc2UsIGZhbHNlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0b3Blbl90ayhudW0pIHtcclxuXHRcdFx0XHR0aGF0LnRrX3Nob3cgPSBmYWxzZVxyXG5cdFx0XHRcdHRoYXQudGtfc2hvdzEgPSB0cnVlXHJcblx0XHRcdFx0dGhhdC50a19zaG93MV9udW0gPSBudW1cclxuXHJcblx0XHRcdFx0dmFyIG5vd190aW1lID0gbmV3IERhdGUoKTtcclxuXHRcdFx0XHR2YXIgbm93X3llYXIgPSBub3dfdGltZS5nZXRGdWxsWWVhcigpO1xyXG5cdFx0XHRcdHZhciBub3dfbW9udGggPSBub3dfdGltZS5nZXRNb250aCgpICsgMTtcclxuXHRcdFx0XHR2YXIgbm93X2RhdGUgPSBub3dfdGltZS5nZXREYXRlKCk7XHJcblx0XHRcdFx0dmFyIGhvdXIgPSBub3dfdGltZS5nZXRIb3VycygpO1xyXG5cdFx0XHRcdHZhciBtaW51dGUgPSBub3dfdGltZS5nZXRNaW51dGVzKCk7XHJcblx0XHRcdFx0aWYgKG5vd19tb250aCA8IDEwKSB7XHJcblx0XHRcdFx0XHRub3dfbW9udGggPSAnMCcgKyBub3dfbW9udGggKiAxXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChub3dfZGF0ZSA8IDEwKSB7XHJcblx0XHRcdFx0XHRub3dfZGF0ZSA9ICcwJyArIG5vd19kYXRlICogMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoaG91ciA8IDEwKSB7XHJcblx0XHRcdFx0XHRob3VyID0gJzAnICsgaG91ciAqIDFcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKG1pbnV0ZSA8IDEwKSB7XHJcblx0XHRcdFx0XHRtaW51dGUgPSAnMCcgKyBtaW51dGUgKiAxXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQubm90ZV90aW1lX3QgPSBub3dfeWVhciArICctJyArIG5vd19tb250aCArICctJyArIG5vd19kYXRlICsgJyAnICsgaG91ciArICc6JyArIG1pbnV0ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaGFpX3RrKG51bSkge1xyXG5cdFx0XHRcdHRoYXQudGtfc2hvd19zeF9jdXIgPSBudW1cclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0bWFzazogdHJ1ZSxcclxuXHRcdFx0XHRcdHRpdGxlOiAn5q2j5Zyo562b6YCJLi4uJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGF0LnRrX3Nob3dfc3ggPSBmYWxzZVxyXG5cdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdFx0XHR9LCAxMDAwKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaHVheGluKCkge1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0dGl0bGU6ICfmraPlnKjliLfmlrAnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/lnLDlm77ngrnlh7vkuovku7ZcclxuXHRcdFx0bWFya2VydGFwKGUpIHtcclxuXHRcdFx0XHR2YXIgX2lkID0gZS5kZXRhaWwubWFya2VySWQsXHJcblx0XHRcdFx0XHRfaW5kZXg7XHJcblxyXG5cdFx0XHRcdHRoYXQudGtfc2hvd19ianhxID0gdHJ1ZVxyXG5cdFx0XHRcdHRoYXQuYmpfaWQgPSBfaWRcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnX2lkLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+JylcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhfaWQpXHJcblx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0dmFyIF9saXN0ID0gdGhhdC5tYXJrZXJzQXJyO1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgX2xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGlmIChfbGlzdFtpXS5pZCA9PSBfaWQpIHtcclxuXHRcdFx0XHRcdFx0X2luZGV4ID0gaTtcclxuXHRcdFx0XHRcdFx0dGhhdC5jdXJyZW50ID0gaTtcclxuXHRcdFx0XHRcdFx0dGhhdC5vcGVuQW5pbWF0aW9uKCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v56e75Yqo5Zyw5Zu+57uT5p2fXHJcblx0XHRcdG1hcENoYW5nZShlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZSlcclxuXHRcdFx0XHRpZiAoZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAobWFwRW5kbG9hZGluZykge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRtYXBFbmRsb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHsgLy/pmLLmipZcclxuXHRcdFx0XHRcdG1hcEVuZGxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR9LCA1MDApO1xyXG5cdFx0XHRcdGlmIChlLmRldGFpbC50eXBlID09ICdlbmQnIHx8IGUudHlwZSA9PSAnZW5kJykge1xyXG5cdFx0XHRcdFx0Ly/kuK3lv4PljLrln5/lt6bovrlcclxuXHRcdFx0XHRcdG1hcENvbnRleHQuZ2V0Q2VudGVyTG9jYXRpb24oe1xyXG5cdFx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQubWFwRW5kKHJlcyk7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGZhaWwoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdGlmICh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSAnaW9zJykge1xyXG5cdFx0XHRcdFx0aWYgKGUuZGV0YWlsLnR5cGUgPT0gJ2VuZCcpIHtcclxuXHRcdFx0XHRcdFx0Ly/kuK3lv4PljLrln5/lt6bovrlcclxuXHRcdFx0XHRcdFx0bWFwQ29udGV4dC5nZXRDZW50ZXJMb2NhdGlvbih7XHJcblx0XHRcdFx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQubWFwRW5kKHJlcyk7XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRmYWlsKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8v5Zyw5Zu+56e75Yqo57uT5p2fXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlKVxyXG5cdFx0XHRcdFx0aWYgKGUudHlwZSA9PSAnZW5kJykge1xyXG5cdFx0XHRcdFx0XHQvL+S4reW/g+WMuuWfn+W3pui+uVxyXG5cdFx0XHRcdFx0XHRtYXBDb250ZXh0LmdldENlbnRlckxvY2F0aW9uKHtcclxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQubWFwRW5kKHJlcyk7XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRmYWlsKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdC8v57yp5pS+6KeG6YeO5bGV56S65omA5pyJ57uP57qs5bqmXHJcblx0XHRcdFx0XHRcdC8vIG1hcENvbnRleHQuZ2V0Q2VudGVyTG9jYXRpb24oe1xyXG5cdFx0XHRcdFx0XHQvLyBcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0XHQvLyBcdH0sXHJcblx0XHRcdFx0XHRcdC8vIFx0ZmFpbChlcnIpIHtcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdGNvbnNvbGUubG9nKGVycilcclxuXHRcdFx0XHRcdFx0Ly8gXHR9XHJcblx0XHRcdFx0XHRcdC8vIH0pXHJcblx0XHRcdFx0XHRcdC8v6I635Y+W5b2T5YmN5Zyw5Zu+55qE6KeG6YeO6IyD5Zu0XHJcblx0XHRcdFx0XHRcdG1hcENvbnRleHQuZ2V0UmVnaW9uKHtcclxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGZhaWwoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQvL+iOt+WPluW9k+WJjeWcsOWbvueahOe8qeaUvue6p+WIq1xyXG5cdFx0XHRcdFx0XHRtYXBDb250ZXh0LmdldFNjYWxlKHtcclxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGZhaWwoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRMaXN0KCkge30sXHJcblx0XHRcdC8v5Zyw5Zu+56e75YqoXHJcblx0XHRcdG1hcEVuZChyZXMpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn5Yqg6L295pWw5o2uJylcclxuXHRcdFx0XHRpZiAocmVzKSB7XHJcblx0XHRcdFx0XHR0aGF0LmxvbmdpdHVkZSA9IHJlcy5sb25naXR1ZGU7XHJcblx0XHRcdFx0XHR0aGF0LmxhdGl0dWRlID0gcmVzLmxhdGl0dWRlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly/ljp/mlbDmja5cclxuXHRcdFx0XHR0aGF0Lmxpc3QgPSBbXTtcclxuXHRcdFx0XHR0aGF0LnBhZ2VJbmRleCA9IDE7XHJcblx0XHRcdFx0dGhhdC5jaGFjZUxpc3QgPSBbXTtcclxuXHRcdFx0XHQvLyDopobnm5bnianmlbDmja5cclxuXHRcdFx0XHR0aGF0Lm1hcmtlcnNBcnIgPSBbXTtcclxuXHRcdFx0XHR0aGF0Lm9yaWdpbmFsTGlzdCA9IFtdO1xyXG5cdFx0XHRcdHRoYXQuZ2V0TGlzdCgpO1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0TG9jYXRpb24odHlwZSkge1xyXG5cdFx0XHRcdHVuaS5nZXRMb2NhdGlvbih7XHJcblx0XHRcdFx0XHR0eXBlOiAnd2dzODQnLFxyXG5cdFx0XHRcdFx0Ly8gdHlwZTogJ2djajAyJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmxvbmdpdHVkZSA9IHJlcy5sb25naXR1ZGU7XHJcblx0XHRcdFx0XHRcdHRoYXQubGF0aXR1ZGUgPSByZXMubGF0aXR1ZGU7XHJcblx0XHRcdFx0XHRcdHRoYXQucGFnZUluZGV4ID0gMTtcclxuXHRcdFx0XHRcdFx0Ly8gaWYgKHR5cGUgIT0gJ2JhY2snKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR0aGF0LnNldEFkZHJlc3MocmVzKTtcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5nZXRMaXN0KCk7XHJcblx0XHRcdFx0XHRcdH0sIDEwMDApXHJcblx0XHRcdFx0XHRcdC8vIH1cclxuXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbChlcnIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09ICdpb3MnKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFwZXJtaXNpb24uanVkZ2VJb3NQZXJtaXNzaW9uKCdsb2NhdGlvbicpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmj5DnpLonLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAn6ZyA6KaB5omT5byA5a6a5L2N5p2D6ZmQJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmlzVG9TZXR0aW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBlcm1pc2lvbi5nb3RvQXBwUGVybWlzc2lvblNldHRpbmcoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LnJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbignYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19GSU5FX0xPQ0FUSU9OJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGFzeW5jIHJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihwZXJtaXNpb25JRCkge1xyXG5cdFx0XHRcdHZhciByZXN1bHQgPSBhd2FpdCBwZXJtaXNpb24ucmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKHBlcm1pc2lvbklEKVxyXG5cdFx0XHRcdHZhciBzdHJTdGF0dXNcclxuXHRcdFx0XHRpZiAocmVzdWx0ID09IDEpIHtcclxuXHRcdFx0XHRcdHN0clN0YXR1cyA9IFwi5bey6I635b6X5o6I5p2DXCJcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHJlc3VsdCA9PSAwKSB7XHJcblx0XHRcdFx0XHRzdHJTdGF0dXMgPSBcIuacquiOt+W+l+aOiOadg1wiXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHN0clN0YXR1cyA9IFwi6KKr5rC45LmF5ouS57ud5p2D6ZmQXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+aPkOekuicsXHJcblx0XHRcdFx0XHRjb250ZW50OiAn6ZyA6KaB5omT5byA5a6a5L2N5p2D6ZmQJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmlzVG9TZXR0aW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRwZXJtaXNpb24uZ290b0FwcFBlcm1pc3Npb25TZXR0aW5nKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0aW1nKGltZykge1xyXG5cdFx0XHRcdHJldHVybiBzZXJ2aWNlLmdldGltZyhpbWcpXHJcblx0XHRcdH0sXHJcblx0XHRcdGp1bXBfZnVjKGUpIHtcclxuXHRcdFx0XHRpZih0aGF0LnRrX3Nob3cxX251bT09NSl7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdGlmICh0aGF0LnRrX3Nob3cxX2N1ciA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfor7fpgInmi6nnsbvlnosnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGF0LnRrX3Nob3cxID0gZmFsc2VcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvbWFwX2R3L21hcF9kdz90a19zaG93MV9jdXI9JyArIHRoYXQudGtfc2hvdzFfY3VyICsgJyZ0a19zaG93MV9udW09JyArIHRoYXQudGtfc2hvdzFfbnVtXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0anVtcChlKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblxyXG5cdFx0XHRcdGlmICh0aGF0LmJ0bl9rZyA9PSAxKSB7XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhhdC5idG5fa2cgPSAxXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmJ0bl9rZyA9IDBcclxuXHRcdFx0XHRcdH0sIDEwMDApXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzZXJ2aWNlLmp1bXAoZSlcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQuaWNvbmZvbnQge1xyXG5cdFx0Zm9udC1mYW1pbHk6IGljb25mb250O1xyXG5cdH1cclxuXHJcblx0LyogLmljb24tbGlrZSB7ICBcclxuXHQgICAgd2lkdGg6IDM2cHg7ICBcclxuXHQgICAgaGVpZ2h0OiAzNnB4OyAgXHJcblx0ICAgIGZvbnQtc2l6ZTogMzRweDsgIFxyXG5cdH0gKi9cclxuXHQubWluaDEwMCB7XHJcblx0XHR3aWR0aDogNzUwcHg7XHJcblx0XHQvKiAjaWZkZWYgSDUgKi9cclxuXHRcdG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDB1cHgpO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0fVxyXG5cclxuXHQuaW5kZXhfbWFwIHtcclxuXHRcdC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cclxuXHJcblx0XHR3aWR0aDogNzUwcHg7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0LyogICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAgKi9cclxuXHRcdGhlaWdodDogY2FsYygxMDB2aCAtIDI0NnVweCk7XHJcblx0XHQvKiAgI2VuZGlmICAqL1xyXG5cclxuXHRcdC8qICNpZmRlZiBINSAqL1xyXG5cdFx0bWF4LXdpZHRoOiAxMDB2dztcclxuXHRcdG1heC1oZWlnaHQ6IDEwMHZoO1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjQ2dXB4IC0gMTAwdXB4KTtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHJcblx0Lm1hcF9idG5fbGlzdCB7XHJcblx0XHQvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcblx0XHQvKiBib3R0b206IDA7ICovXHJcblx0XHR3aWR0aDogNzUwcHg7XHJcblx0XHQvKiAjaWZkZWYgSDUgKi9cclxuXHJcblx0XHRtYXgtd2lkdGg6IDEwMHZ3O1xyXG5cdFx0Ym90dG9tOiAxMDB1cHg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGhlaWdodDogMjQ2dXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJveC1zaGFkb3c6IDBweCAtM3B4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNXVweDtcclxuXHRcdC8qICAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogICNlbmRpZiAgKi9cclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0fVxyXG5cclxuXHQubWFwX2J0bl9saSB7XHJcblx0XHQvKiAgI2lmbmRlZiBBUFAtUExVUy1OVlVFICAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICAjZW5kaWYgICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyNnVweDtcclxuXHRcdGNvbG9yOiAjNTU1O1xyXG5cdH1cclxuXHJcblx0Lm1hcF9idG5fbGlfaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDk1dXB4O1xyXG5cdFx0aGVpZ2h0OiA5NXVweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdG1hcmdpbi1ib3R0b206IDIwdXB4O1xyXG5cdH1cclxuXHQubWFwX2J0bl9saV90ZXh0e1xyXG5cdFx0Zm9udC1zaXplOiAyNnVweDtcclxuXHRcdGNvbG9yOiAjNTU1O1xyXG5cdH1cclxuXHQuYmpfYm94IHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogMjAwcHg7XHJcblx0XHQvKiBib3R0b206IDczMHB4OyAqL1xyXG5cdFx0cmlnaHQ6IDMwdXB4O1xyXG5cdFx0ei1pbmRleDogOTk5OTk4O1xyXG5cdFx0d2lkdGg6IDExNHVweDtcclxuXHRcdGhlaWdodDogMTE0dXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJveC1zaGFkb3c6IDBweCAwcHggMjF1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0fVxyXG5cdFxyXG5cdC5ial9ib3hfaW1nIHtcclxuXHRcdHdpZHRoOiAxMTR1cHg7XHJcblx0XHRoZWlnaHQ6IDExNHVweDtcclxuXHR9XHJcblx0XHJcblx0LmJqX21haW4ge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHdpZHRoOiA3NTBweDtcclxuXHRcdC8qIGhlaWdodDogMTAwdmg7ICovXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcclxuXHRcdHotaW5kZXg6IDk5OTk5OTtcclxuXHRcdC8qICAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgICovXHJcblx0XHQvKiAgI2lmbmRlZiBBUFAtUExVUy1OVlVFICAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICAjZW5kaWYgICovXHJcblx0XHQvKiAgI2VuZGlmICAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblx0XHJcblx0LmJqX2NudW0ge1xyXG5cdFx0d2lkdGg6IDUwOHVweDtcclxuXHRcdGhlaWdodDogNTA4dXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwOHVweDtcclxuXHRcdHBhZGRpbmc6IDM2dXB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNTB1cHg7XHJcblx0fVxyXG5cdFxyXG5cdC5ial9jbnVtXzEge1xyXG5cdFx0d2lkdGg6IDQzNnB4O1xyXG5cdFx0aGVpZ2h0OiA0MzZweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XHJcblx0XHQvKiBib3JkZXI6IDR1cHggc29saWQgI0ZGRkZGRjsgKi9cclxuXHRcdGJvcmRlci1jb2xvcjogICNGRkZGRkY7XHJcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiA0cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0MzZweDtcclxuXHRcdC8qICAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogICNlbmRpZiAgKi9cclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblx0XHJcblx0LmJqX2NudW1fbnVtIHtcclxuXHRcdGZvbnQtc2l6ZTogMzAwcnB4O1xyXG5cdFx0Zm9udC1mYW1pbHk6IERJTjtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblx0XHJcblx0LmJqX3RpcCB7XHJcblx0XHRmb250LXNpemU6IDMwdXB4O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHJcblx0LnRrX3BvcG9wIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHotaW5kZXg6IDk5OTk5OTk5OTk7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcclxuXHRcdC8qICAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogICNlbmRpZiAgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQudGtfbWFpbiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHVweDtcclxuXHRcdHdpZHRoOiA1MDV1cHg7XHJcblx0XHQvKiBtaW4taGVpZ2h0OiA0OTR1cHg7ICovXHJcblx0XHQvKiBtYXgtaGVpZ2h0OiA4MCU7ICovXHJcblx0XHQvKiBvdmVyZmxvdy15OiBzY3JvbGw7ICovXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTB1cHg7XHJcblx0XHRwYWRkaW5nOiAzMHVweCA0MHVweDtcclxuXHRcdC8qICBcclxuXHRcdGRpc3BsYXk6IGZsZXg7ICBcclxuXHRcdGZsZXgtd3JhcDogd3JhcDsgKi9cclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQudGtfbWFpbjEge1xyXG5cdFx0d2lkdGg6IDUwNXVweDtcclxuXHRcdC8qIG1pbi1oZWlnaHQ6IDQ5NHVweDsgKi9cclxuXHRcdC8qIG1heC1oZWlnaHQ6IDgwJTsgKi9cclxuXHRcdC8qIG92ZXJmbG93LXk6IHNjcm9sbDsgKi9cclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwdXB4O1xyXG5cdH1cclxuXHJcblx0LmFkZF9iaiB7XHJcblx0XHQvKiB3aWR0aDogMTAwJTsgKi9cclxuXHRcdHdpZHRoOiA0MjVweDtcclxuXHRcdGZvbnQtc2l6ZTogMzR1cHg7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHRcdC8qICAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogICNlbmRpZiAgKi9cclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDUwdXB4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHR9XHJcblxyXG5cdC5hZGRfYmpfdGV4dCB7XHJcblx0XHR3aWR0aDogNjB1cHg7XHJcblx0XHRoZWlnaHQ6IDFweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNEOEQ4RDg7XHJcblx0XHRtYXJnaW46IDAgMTB1cHg7XHJcblx0fVxyXG5cdC5hZGRfYmpfd3p7XHJcblx0XHRmb250LXNpemU6IDM0dXB4O1xyXG5cdFx0Y29sb3I6ICMzMzM7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblx0LmJqX3R5cGUge1xyXG5cdFx0Lyogd2lkdGg6IDEwMCU7ICovXHJcblx0XHR3aWR0aDogNDI1cHg7XHJcblx0XHRwYWRkaW5nOiAwIDEwdXB4O1xyXG5cdH1cclxuXHJcblx0LmJqX3R5cGVfbGkge1xyXG5cdFx0Lyogd2lkdGg6IDEwMCU7ICovXHJcblx0XHR3aWR0aDogNDA1cHg7XHJcblx0XHRoZWlnaHQ6IDcydXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0U4RThFODtcclxuXHRcdGJveC1zaGFkb3c6IDFweCAzcHggMTB1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDM2dXB4O1xyXG5cdFx0LyogICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAgI2VuZGlmICAqL1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyOHVweDtcclxuXHRcdGNvbG9yOiAjMzMzMzMzO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzN1cHg7XHJcblx0fVxyXG5cclxuXHQuYmpfdHlwZV9saV9jdXIge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzNDNzdGMTtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdH1cclxuXHJcblx0LmJqX3R5cGVfbGlfY3VyMSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3NTc1O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHQuYmpfdHlwZV9saV90ZXh0IHtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdFx0Zm9udC1zaXplOiAyOHVweDtcclxuXHR9XHJcblxyXG5cdC5ial90eXBlX2xpX3RleHRfY3VyIHtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdH1cclxuXHJcblx0Lm5vdGV0a190aXQge1xyXG5cdFx0Zm9udC1zaXplOiAzNHVweDtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHVweDtcclxuXHR9XHJcblxyXG5cdC5ub3RldGtfdGltZSB7XHJcblx0XHRmb250LXNpemU6IDI2dXB4O1xyXG5cdFx0Y29sb3I6ICMzMzM7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHVweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5hZGRfYmpfaWNvbiB7XHJcblx0XHQvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuXHRcdG1hcmdpbjogMCAwIDEwdXB4O1xyXG5cdFx0d2lkdGg6IDI4OXVweDtcclxuXHRcdGhlaWdodDogMjE4dXB4O1xyXG5cdH1cclxuXHJcblx0LmJ6X2ludF90ayB7XHJcblx0XHRmb250LXNpemU6IDI2dXB4O1xyXG5cdFx0Lyogd2lkdGg6IDEwMCU7ICovXHJcblx0XHR3aWR0aDogNDI1cHg7XHJcblx0XHRoZWlnaHQ6IDYwdXB4O1xyXG5cdFx0LyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEREREREQ7ICovXHJcblx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjZGRkO1xyXG5cdH1cclxuXHJcblx0LmJqX2xpc3RfYm94IHtcclxuXHRcdC8qIHdpZHRoOiAxMDAlOyAqL1xyXG5cdFx0d2lkdGg6IDQyNXB4O1xyXG5cdFx0LyogICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAgI2VuZGlmICAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdHBhZGRpbmctdG9wOiAzMHVweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyMHVweDtcclxuXHR9XHJcblxyXG5cdC5ial9saXN0X2JveF9saV93IHtcclxuXHRcdHdpZHRoOiAxMzRweDtcclxuXHRcdGhlaWdodDogMTM0cHg7XHJcblx0XHRwYWRkaW5nLXRvcDogMTB1cHg7XHJcblx0XHQvKiBwYWRkaW5nLWxlZnQ6IDEwcHg7ICovXHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRtYXJnaW4tbGVmdDogNXB4O1xyXG5cdH1cclxuXHJcblx0LmJqX2xpc3RfYm94X2xpIHtcclxuXHRcdHdpZHRoOiAxMjRweDtcclxuXHRcdGhlaWdodDogMTI0cHg7XHJcblx0XHRib3JkZXItd2lkdGg6IDFweDtcclxuXHRcdGJvcmRlci1jb2xvcjogI2ZmZjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDR1cHg7XHJcblx0XHQvKiAgI2lmbmRlZiBBUFAtUExVUy1OVlVFICAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICAjZW5kaWYgICovXHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwdXB4O1xyXG5cdFx0cGFkZGluZzogMTB1cHg7XHJcblx0XHQvKiBvdmVyZmxvdzogYXV0bzsgKi9cclxuXHR9XHJcblxyXG5cdC5ial9saXN0X2JveF9saV9jdXIge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0VGRjRGRjtcclxuXHRcdGJvcmRlci1jb2xvcjojM0M3N0YxO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAxcHhcclxuXHR9XHJcblxyXG5cdC5ial9saXN0X2JveF9saV93X21sIHtcclxuXHRcdHdpZHRoOiAxMDVweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxcHg7XHJcblx0fVxyXG5cclxuXHQuYmpfbGlzdF9ib3hfbGlfbWwge1xyXG5cdFx0d2lkdGg6IDk1cHg7XHJcblx0fVxyXG5cclxuXHQuYmpfbGlzdF9ib3hfbGlfd19zayB7XHJcblx0XHRoZWlnaHQ6IDE1NXB4O1xyXG5cdH1cclxuXHJcblx0LmJqX2xpc3RfYm94X2xpX3NrIHtcclxuXHRcdGhlaWdodDogMTQ1cHg7XHJcblx0fVxyXG5cclxuXHQueHpfb2sge1xyXG5cdFx0d2lkdGg6IDMxdXB4O1xyXG5cdFx0aGVpZ2h0OiAzMXVweDtcclxuXHRcdHRvcDogLTEwMHB4O1xyXG5cdFx0cmlnaHQ6IDEwMHB4O1xyXG5cdH1cclxuXHJcblx0Lnh6X29rX2N1ciB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdHotaW5kZXg6IDk5OTk5OTk5OTk5OTtcclxuXHR9XHJcblxyXG5cdC5ial9pY29uIHtcclxuXHRcdHdpZHRoOiA1NXVweDtcclxuXHRcdGhlaWdodDogNjh1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHVweDtcclxuXHR9XHJcblxyXG5cdC5ial9pY29uX2ljb24ge1xyXG5cdFx0Zm9udC1zaXplOiAyNnVweDtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdH1cclxuXHJcblx0LnRrc2V0X2J0biB7XHJcblx0XHRmb250LXNpemU6IDI4dXB4O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHQvKiAgI2lmbmRlZiBBUFAtUExVUy1OVlVFICAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICAjZW5kaWYgICovXHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHR3aWR0aDogNDA5dXB4O1xyXG5cdFx0aGVpZ2h0OiA3MnVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMzQzc3RjE7XHJcblx0XHRib3gtc2hhZG93OiAxcHggM3B4IDEwdXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAzNnVweDtcclxuXHR9XHJcblxyXG5cdC5ial9pY29uX3RleHQge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmJqX3VzZXJfbXNnIHtcclxuXHRcdC8qICAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogICNlbmRpZiAgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHR3aWR0aDogNTA1cHg7XHJcblx0XHQvKiB3aWR0aDogNDI1cHg7ICovXHJcblx0XHRoZWlnaHQ6IDE1MHB4O1xyXG5cdFx0cGFkZGluZzogMzB1cHggNDB1cHg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2VlZTtcclxuXHRcdGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuXHR9XHJcblxyXG5cdC5ial91c2VyX3R4IHtcclxuXHRcdHdpZHRoOiA4NHB4O1xyXG5cdFx0aGVpZ2h0OiA4NHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyM3VweDtcclxuXHR9XHJcblxyXG5cdC5ial91c2VyX2x4bXNnIHtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdH1cclxuXHJcblx0LmJqX3VzZXJfbmFtZSB7XHJcblx0XHRmb250LXNpemU6IDM2cHg7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHJcblx0LmJqX3VzZXJfdGVsIHtcclxuXHRcdGZvbnQtc2l6ZTogMjZweDtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdH1cclxuXHJcblx0LmJqeHFfeHEge1xyXG5cdFx0d2lkdGg6IDUwNXB4O1xyXG5cdFx0cGFkZGluZzogMzB1cHg7XHJcblx0fVxyXG5cclxuXHQuYmpfZDEge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyNXVweDtcclxuXHR9XHJcblxyXG5cdC5ial9kMV9pY29uIHtcclxuXHRcdHdpZHRoOiAzOXB4O1xyXG5cdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxN3VweDtcclxuXHR9XHJcblxyXG5cdC5ial9kMV9uYW1lIHtcclxuXHRcdGZvbnQtc2l6ZTogMzR1cHg7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHJcblx0LmJqX2QyIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjV1cHg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG5cclxuXHQuYmpfZDJfdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDI2dXB4O1xyXG5cdFx0Y29sb3I6ICMzMzM7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyNXVweDtcclxuXHR9XHJcblxyXG5cdC5ial9kMl9zaGFyZSB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwdXB4O1xyXG5cdFx0LyogZmxleDogbm9uZTsgKi9cclxuXHRcdHdpZHRoOiA0OHVweDtcclxuXHRcdGhlaWdodDogNDh1cHg7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qIOaQnOe0oiAqL1xyXG5cdC5zZWFyY2hfdHlwZV90aXAge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuc2VhcmNoX3R5cGVfdGlwX3RleHQge1xyXG5cdFx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdFx0Y29sb3I6ICM2NjY7XHJcblx0fVxyXG5cclxuXHQuc2VhcmNoX3R5cGVfdGlwX2ltZyB7XHJcblx0XHR3aWR0aDogMjhweDtcclxuXHRcdGhlaWdodDogMjhweDtcclxuXHR9XHJcblxyXG5cdC5zZWFyY2hfbWJveCB7XHJcblx0XHR3aWR0aDogNDIwcHg7XHJcblx0XHRoZWlnaHQ6IDQyMHB4O1xyXG5cdFx0LyogYmFja2dyb3VuZC1jb2xvci1zaXplOiAxMDAlIDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvc2VhcmNoX2JnXzAzLnBuZyk7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yLXJlcGVhdDogbm8tcmVwZWF0OyAqL1xyXG5cdFx0bWFyZ2luLXRvcDogLTEwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHJcblx0LnNlYXJjaF9tYm94X2ltZyB7XHJcblx0XHR3aWR0aDogNDIwcHg7XHJcblx0XHRoZWlnaHQ6IDQyMHB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdH1cclxuXHJcblx0LnNlYXJjaF9tYm94X2QxIHtcclxuXHRcdHdpZHRoOiA0MjBweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nLXRvcDogMjZweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0fVxyXG5cclxuXHQuc2VhcmNoX21ib3hfZDIge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDUxcHg7XHJcblx0fVxyXG5cclxuXHQuc2VhcmNoX21ib3hfZDJfaW50IHtcclxuXHRcdHdpZHRoOiA3MXB4O1xyXG5cdFx0aGVpZ2h0OiA0MXB4O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAgI0Q1RDVENTtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItd2lkdGg6IDFweDtcclxuXHRcdGZvbnQtc2l6ZTogMjZ1cHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuc2VhcmNoX21ib3hfZDJfdGV4dCB7XHJcblx0XHR3aWR0aDogMTlweDtcclxuXHRcdGhlaWdodDogMXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0Q1RDVENTtcclxuXHRcdG1hcmdpbjogMCA1cHg7XHJcblx0fVxyXG5cclxuXHQuc2VhcmNoX21ib3hfZDMge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDM3cHg7XHJcblx0fVxyXG5cclxuXHQuc2VhcmNoX21ib3hfZDNfaW50IHtcclxuXHRcdHdpZHRoOiAxMzBweDtcclxuXHRcdGhlaWdodDogNDFweDtcclxuXHRcdGJvcmRlci1jb2xvcjogICNENUQ1RDU7XHJcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAxcHg7XHJcblx0XHRmb250LXNpemU6IDI2dXB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnNlYXJjaF9tYm94X2QzX3RleHQge1xyXG5cdFx0d2lkdGg6IDkwcHg7XHJcblx0XHRoZWlnaHQ6IDkwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0bWFyZ2luOiAwIDIwcHg7XHJcblx0fVxyXG5cclxuXHQuc2VhcmNoX21ib3hfZDQge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG5cclxuXHQuc2VhcmNoX21ib3hfZDRfaW50IHtcclxuXHRcdHdpZHRoOiAxNTVweDtcclxuXHRcdGhlaWdodDogNDFweDtcclxuXHRcdC8qIGJvcmRlcjogMXB4IHNvbGlkICNENUQ1RDU7ICovXHJcblx0XHRib3JkZXItY29sb3I6ICAjRDVENUQ1O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci13aWR0aDogMXB4O1xyXG5cdFx0Zm9udC1zaXplOiAyNnVweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!****************************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/common/dc-torch/torch.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n/**\r\n * 打开闪光灯\r\n */\nfunction onTorch() {\n  try {\n    var os = plus.os.name;\n    if ('iOS' == os) {\n      var device = plus.ios.invoke('AVCaptureDevice', 'defaultDeviceWithMediaType:', 'vide');\n      plus.ios.invoke(device, 'lockForConfiguration:', null);\n      plus.ios.invoke(device, 'setTorchMode:', 1);\n      plus.ios.invoke(device, 'setFlashMode:', 1);\n      plus.ios.invoke(device, 'unlockForConfiguration');\n    } else {\n      var main = plus.android.runtimeMainActivity();\n      var camera = main.getSystemService('camera');\n      var ids = plus.android.invoke(camera, 'getCameraIdList');\n      for (var i = 0; i < ids.length; i++) {\n        var c = plus.android.invoke(camera, 'getCameraCharacteristics', ids[i]);\n        var available = plus.android.invoke(c, 'get', plus.android.getAttribute(c, 'FLASH_INFO_AVAILABLE'));\n        var facing = plus.android.invoke(c, 'get', plus.android.getAttribute(c, 'LENS_FACING'));\n        if (null != available && available && null != facing && 1 == facing) {\n          plus.android.invoke(camera, 'setTorchMode', ids[i], true);\n        }\n      }\n    }\n  } catch (e) {\n    __f__(\"error\", 'error @onTorch!!', \" at common/dc-torch/torch.js:28\");\n  }\n}\n\n/**\r\n   * 关闭闪光灯\r\n   */\nfunction offTorch() {\n  try {\n    var os = plus.os.name;\n    if ('iOS' == os) {\n      var device = plus.ios.invoke('AVCaptureDevice', 'defaultDeviceWithMediaType:', 'vide');\n      plus.ios.invoke(device, 'lockForConfiguration:', null);\n      plus.ios.invoke(device, 'setTorchMode:', 0);\n      plus.ios.invoke(device, 'setFlashMode:', 0);\n      plus.ios.invoke(device, 'unlockForConfiguration');\n    } else {\n      var main = plus.android.runtimeMainActivity();\n      var camera = main.getSystemService('camera');\n      var ids = plus.android.invoke(camera, 'getCameraIdList');\n      for (var i = 0; i < ids.length; i++) {\n        var c = plus.android.invoke(camera, 'getCameraCharacteristics', ids[i]);\n        var available = plus.android.invoke(c, 'get', plus.android.getAttribute(c, 'FLASH_INFO_AVAILABLE'));\n        var facing = plus.android.invoke(c, 'get', plus.android.getAttribute(c, 'LENS_FACING'));\n        if (null != available && available && null != facing && 1 == facing) {\n          plus.android.invoke(camera, 'setTorchMode', ids[i], false);\n        }\n      }\n    }\n  } catch (e) {\n    __f__(\"error\", 'error @offTorch!!', \" at common/dc-torch/torch.js:58\");\n  }\n}\n\n\nmodule.exports = {\n  on: onTorch,\n  off: offTorch };\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2RjLXRvcmNoL3RvcmNoLmpzIl0sIm5hbWVzIjpbIm9uVG9yY2giLCJvcyIsInBsdXMiLCJuYW1lIiwiZGV2aWNlIiwiaW9zIiwiaW52b2tlIiwibWFpbiIsImFuZHJvaWQiLCJydW50aW1lTWFpbkFjdGl2aXR5IiwiY2FtZXJhIiwiZ2V0U3lzdGVtU2VydmljZSIsImlkcyIsImkiLCJsZW5ndGgiLCJjIiwiYXZhaWxhYmxlIiwiZ2V0QXR0cmlidXRlIiwiZmFjaW5nIiwiZSIsIm9mZlRvcmNoIiwibW9kdWxlIiwiZXhwb3J0cyIsIm9uIiwib2ZmIl0sIm1hcHBpbmdzIjoiO0FBQ0E7OztBQUdBLFNBQVNBLE9BQVQsR0FBa0I7QUFDakIsTUFBRztBQUNILFFBQUlDLEVBQUUsR0FBR0MsSUFBSSxDQUFDRCxFQUFMLENBQVFFLElBQWpCO0FBQ0EsUUFBRyxTQUFTRixFQUFaLEVBQWU7QUFDZCxVQUFJRyxNQUFNLEdBQUdGLElBQUksQ0FBQ0csR0FBTCxDQUFTQyxNQUFULENBQWdCLGlCQUFoQixFQUFtQyw2QkFBbkMsRUFBa0UsTUFBbEUsQ0FBYjtBQUNBSixVQUFJLENBQUNHLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQkYsTUFBaEIsRUFBd0IsdUJBQXhCLEVBQWlELElBQWpEO0FBQ0FGLFVBQUksQ0FBQ0csR0FBTCxDQUFTQyxNQUFULENBQWdCRixNQUFoQixFQUF3QixlQUF4QixFQUF5QyxDQUF6QztBQUNBRixVQUFJLENBQUNHLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQkYsTUFBaEIsRUFBd0IsZUFBeEIsRUFBeUMsQ0FBekM7QUFDQUYsVUFBSSxDQUFDRyxHQUFMLENBQVNDLE1BQVQsQ0FBZ0JGLE1BQWhCLEVBQXdCLHdCQUF4QjtBQUNBLEtBTkQsTUFNSztBQUNKLFVBQUlHLElBQUksR0FBR0wsSUFBSSxDQUFDTSxPQUFMLENBQWFDLG1CQUFiLEVBQVg7QUFDQSxVQUFJQyxNQUFNLEdBQUdILElBQUksQ0FBQ0ksZ0JBQUwsQ0FB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OEJiLElBQUksQ0FBQ00sT0FBTCxDQUFhUyxZQUFiLENBQTBCRixDQUExQixFQUE2QixzQkFBN0IsQ0FBOUIsQ0FBaEI7QUFDQSxZQUFJRyxNQUFNLEdBQUdoQixJQUFJLENBQUNNLE9BQUwsQ0FBYUYsTUFBYixDQUFvQlMsQ0FBcEIsRUFBdUIsS0FBdkIsRUFBOEJiLElBQUksQ0FBQ00sT0FBTCxDQUFhUyxZQUFiLENBQTBCRixDQUExQixFQUE2QixhQUE3QixDQUE5QixDQUFiO0FBQ0EsWUFBRyxRQUFNQyxTQUFOLElBQWlCQSxTQUFqQixJQUE0QixRQUFNRSxNQUFsQyxJQUEwQyxLQUFHQSxNQUFoRCxFQUF1RDtBQUN0RGhCLGNBQUksQ0FBQ00sT0FBTCxDQUFhRixNQUFiLENBQW9CSSxNQUFwQixFQUE0QixjQUE1QixFQUE0Q0UsR0FBRyxDQUFDQyxDQUFELENBQS9DLEVBQW9ELEtBQXBEO0FBQ0E7QUFDRDtBQUNEO0FBQ0EsR0FyQkQsQ0FxQkMsT0FBTU0sQ0FBTixFQUFRO0FBQ1IsbUJBQWMsbUJBQWQ7QUFDQTtBQUNEOzs7QUFHREUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2hCQyxJQUFFLEVBQUV2QixPQURZO0FBRWhCd0IsS0FBRyxFQUFFSixRQUZXLEVBQWpCLEMiLCJmaWxlIjoiMjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIOaJk+W8gOmXquWFieeBr1xyXG4gKi9cclxuZnVuY3Rpb24gb25Ub3JjaCgpe1xyXG5cdHRyeXtcclxuXHR2YXIgb3MgPSBwbHVzLm9zLm5hbWU7XHJcblx0aWYoJ2lPUycgPT0gb3Mpe1xyXG5cdFx0dmFyIGRldmljZSA9IHBsdXMuaW9zLmludm9rZSgnQVZDYXB0dXJlRGV2aWNlJywgJ2RlZmF1bHREZXZpY2VXaXRoTWVkaWFUeXBlOicsICd2aWRlJyk7XHJcblx0XHRwbHVzLmlvcy5pbnZva2UoZGV2aWNlLCAnbG9ja0ZvckNvbmZpZ3VyYXRpb246JywgbnVsbCk7XHJcblx0XHRwbHVzLmlvcy5pbnZva2UoZGV2aWNlLCAnc2V0VG9yY2hNb2RlOicsIDEpO1xyXG5cdFx0cGx1cy5pb3MuaW52b2tlKGRldmljZSwgJ3NldEZsYXNoTW9kZTonLCAxKTtcclxuXHRcdHBsdXMuaW9zLmludm9rZShkZXZpY2UsICd1bmxvY2tGb3JDb25maWd1cmF0aW9uJyk7XHJcblx0fWVsc2V7XHJcblx0XHR2YXIgbWFpbiA9IHBsdXMuYW5kcm9pZC5ydW50aW1lTWFpbkFjdGl2aXR5KCk7XHJcblx0XHR2YXIgY2FtZXJhID0gbWFpbi5nZXRTeXN0ZW1TZXJ2aWNlKCdjYW1lcmEnKTtcclxuXHRcdHZhciBpZHMgPSBwbHVzLmFuZHJvaWQuaW52b2tlKGNhbWVyYSwgJ2dldENhbWVyYUlkTGlzdCcpO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGMgPSBwbHVzLmFuZHJvaWQuaW52b2tlKGNhbWVyYSwgJ2dldENhbWVyYUNoYXJhY3RlcmlzdGljcycsIGlkc1tpXSk7XHJcblx0XHRcdHZhciBhdmFpbGFibGUgPSBwbHVzLmFuZHJvaWQuaW52b2tlKGMsICdnZXQnLCBwbHVzLmFuZHJvaWQuZ2V0QXR0cmlidXRlKGMsICdGTEFTSF9JTkZPX0FWQUlMQUJMRScpKTtcclxuXHRcdFx0dmFyIGZhY2luZyA9IHBsdXMuYW5kcm9pZC5pbnZva2UoYywgJ2dldCcsIHBsdXMuYW5kcm9pZC5nZXRBdHRyaWJ1dGUoYywgJ0xFTlNfRkFDSU5HJykpO1xyXG5cdFx0XHRpZihudWxsIT1hdmFpbGFibGUmJmF2YWlsYWJsZSYmbnVsbCE9ZmFjaW5nJiYxPT1mYWNpbmcpe1xyXG5cdFx0XHRcdHBsdXMuYW5kcm9pZC5pbnZva2UoY2FtZXJhLCAnc2V0VG9yY2hNb2RlJywgaWRzW2ldLCB0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHR9Y2F0Y2goZSl7XHJcblx0XHRjb25zb2xlLmVycm9yKCdlcnJvciBAb25Ub3JjaCEhJyk7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICog5YWz6Zet6Zeq5YWJ54GvXHJcbiAqL1xyXG5mdW5jdGlvbiBvZmZUb3JjaCgpe1xyXG5cdHRyeXtcclxuXHR2YXIgb3MgPSBwbHVzLm9zLm5hbWU7XHJcblx0aWYoJ2lPUycgPT0gb3Mpe1xyXG5cdFx0dmFyIGRldmljZSA9IHBsdXMuaW9zLmludm9rZSgnQVZDYXB0dXJlRGV2aWNlJywgJ2RlZmF1bHREZXZpY2VXaXRoTWVkaWFUeXBlOicsICd2aWRlJyk7XHJcblx0XHRwbHVzLmlvcy5pbnZva2UoZGV2aWNlLCAnbG9ja0ZvckNvbmZpZ3VyYXRpb246JywgbnVsbCk7XHJcblx0XHRwbHVzLmlvcy5pbnZva2UoZGV2aWNlLCAnc2V0VG9yY2hNb2RlOicsIDApO1xyXG5cdFx0cGx1cy5pb3MuaW52b2tlKGRldmljZSwgJ3NldEZsYXNoTW9kZTonLCAwKTtcclxuXHRcdHBsdXMuaW9zLmludm9rZShkZXZpY2UsICd1bmxvY2tGb3JDb25maWd1cmF0aW9uJyk7XHJcblx0fWVsc2V7XHJcblx0XHR2YXIgbWFpbiA9IHBsdXMuYW5kcm9pZC5ydW50aW1lTWFpbkFjdGl2aXR5KCk7XHJcblx0XHR2YXIgY2FtZXJhID0gbWFpbi5nZXRTeXN0ZW1TZXJ2aWNlKCdjYW1lcmEnKTtcclxuXHRcdHZhciBpZHMgPSBwbHVzLmFuZHJvaWQuaW52b2tlKGNhbWVyYSwgJ2dldENhbWVyYUlkTGlzdCcpO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGMgPSBwbHVzLmFuZHJvaWQuaW52b2tlKGNhbWVyYSwgJ2dldENhbWVyYUNoYXJhY3RlcmlzdGljcycsIGlkc1tpXSk7XHJcblx0XHRcdHZhciBhdmFpbGFibGUgPSBwbHVzLmFuZHJvaWQuaW52b2tlKGMsICdnZXQnLCBwbHVzLmFuZHJvaWQuZ2V0QXR0cmlidXRlKGMsICdGTEFTSF9JTkZPX0FWQUlMQUJMRScpKTtcclxuXHRcdFx0dmFyIGZhY2luZyA9IHBsdXMuYW5kcm9pZC5pbnZva2UoYywgJ2dldCcsIHBsdXMuYW5kcm9pZC5nZXRBdHRyaWJ1dGUoYywgJ0xFTlNfRkFDSU5HJykpO1xyXG5cdFx0XHRpZihudWxsIT1hdmFpbGFibGUmJmF2YWlsYWJsZSYmbnVsbCE9ZmFjaW5nJiYxPT1mYWNpbmcpe1xyXG5cdFx0XHRcdHBsdXMuYW5kcm9pZC5pbnZva2UoY2FtZXJhLCAnc2V0VG9yY2hNb2RlJywgaWRzW2ldLCBmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0fWNhdGNoKGUpe1xyXG5cdFx0Y29uc29sZS5lcnJvcignZXJyb3IgQG9mZlRvcmNoISEnKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRvbjogb25Ub3JjaCxcclxuXHRvZmY6IG9mZlRvcmNoXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!******************************************************************************************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/pages/map/map.nvue?vue&type=style&index=0&id=6970862e&scoped=true&lang=css&mpType=page ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_style_index_0_id_6970862e_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--7-oneOf-0-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./map.nvue?vue&type=style&index=0&id=6970862e&scoped=true&lang=css&mpType=page */ 26);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_style_index_0_id_6970862e_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_style_index_0_id_6970862e_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_style_index_0_id_6970862e_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_style_index_0_id_6970862e_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_style_index_0_id_6970862e_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 26 */
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
    "borderRadius": 15,
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
  "map_btn_li_text": {
    "fontSize": 26,
    "color": "#555555"
  },
  "bj_box": {
    "position": "fixed",
    "top": "200",
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
    "borderColor": "#FFFFFF",
    "borderStyle": "solid",
    "borderWidth": "4",
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
  "tk_main1": {
    "width": 505,
    "backgroundColor": "#FFFFFF",
    "borderRadius": 10,
    "marginBottom": 30
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
  "add_bj_wz": {
    "fontSize": 34,
    "color": "#333333",
    "fontWeight": "bold"
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
  "bj_type_li_cur1": {
    "backgroundColor": "#FF7575",
    "color": "#ffffff"
  },
  "bj_type_li_text": {
    "color": "#333333",
    "fontSize": 28
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
    "marginBottom": 20,
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
    "borderBottomColor": "#dddddd"
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
    "borderColor": "#3C77F1",
    "borderWidth": "1"
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
  "bj_user_msg": {
    "flexDirection": "row",
    "width": "505",
    "height": "150",
    "paddingTop": 30,
    "paddingRight": 40,
    "paddingBottom": 30,
    "paddingLeft": 40,
    "alignItems": "center",
    "borderBottomColor": "#eeeeee",
    "borderBottomWidth": "1"
  },
  "bj_user_tx": {
    "width": "84",
    "height": "84",
    "borderRadius": 50,
    "marginRight": 23
  },
  "bj_user_lxmsg": {
    "justifyContent": "space-around"
  },
  "bj_user_name": {
    "fontSize": "36",
    "color": "#333333",
    "fontWeight": "bold"
  },
  "bj_user_tel": {
    "fontSize": "26",
    "color": "#333333"
  },
  "bjxq_xq": {
    "width": "505",
    "paddingTop": 30,
    "paddingRight": 30,
    "paddingBottom": 30,
    "paddingLeft": 30
  },
  "bj_d1": {
    "flexDirection": "row",
    "alignItems": "center",
    "marginBottom": 25
  },
  "bj_d1_icon": {
    "width": "39",
    "height": "50",
    "marginRight": 17
  },
  "bj_d1_name": {
    "fontSize": 34,
    "color": "#333333",
    "fontWeight": "bold"
  },
  "bj_d2": {
    "flexDirection": "row",
    "alignItems": "center",
    "marginBottom": 25,
    "justifyContent": "space-between"
  },
  "bj_d2_text": {
    "fontSize": 26,
    "color": "#333333",
    "marginBottom": 25
  },
  "bj_d2_share": {
    "marginRight": 10,
    "width": 48,
    "height": 48
  },
  "search_type_tip": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "search_type_tip_text": {
    "fontSize": "22",
    "color": "#666666"
  },
  "search_type_tip_img": {
    "width": "28",
    "height": "28"
  },
  "search_mbox": {
    "width": "420",
    "height": "420",
    "marginTop": "-10",
    "marginBottom": "20",
    "position": "relative"
  },
  "search_mbox_img": {
    "width": "420",
    "height": "420",
    "position": "absolute",
    "top": 0
  },
  "search_mbox_d1": {
    "width": "420",
    "alignItems": "center",
    "paddingTop": "26",
    "marginBottom": "20"
  },
  "search_mbox_d2": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "marginBottom": "51"
  },
  "search_mbox_d2_int": {
    "width": "71",
    "height": "41",
    "borderColor": "#D5D5D5",
    "borderStyle": "solid",
    "borderWidth": "1",
    "fontSize": 26,
    "textAlign": "center",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "search_mbox_d2_text": {
    "width": "19",
    "height": "1",
    "backgroundColor": "#D5D5D5",
    "marginTop": 0,
    "marginRight": "5",
    "marginBottom": 0,
    "marginLeft": "5"
  },
  "search_mbox_d3": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "marginBottom": "37"
  },
  "search_mbox_d3_int": {
    "width": "130",
    "height": "41",
    "borderColor": "#D5D5D5",
    "borderStyle": "solid",
    "borderWidth": "1",
    "fontSize": 26,
    "textAlign": "center"
  },
  "search_mbox_d3_text": {
    "width": "90",
    "height": "90",
    "backgroundColor": "#FFFFFF",
    "borderRadius": 50,
    "marginTop": 0,
    "marginRight": "20",
    "marginBottom": 0,
    "marginLeft": "20"
  },
  "search_mbox_d4": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "marginBottom": "10"
  },
  "search_mbox_d4_int": {
    "width": "155",
    "height": "41",
    "borderColor": "#D5D5D5",
    "borderStyle": "solid",
    "borderWidth": "1",
    "fontSize": 26,
    "textAlign": "center"
  }
}

/***/ })
/******/ ]);