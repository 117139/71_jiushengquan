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
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 10));\nvar _index = _interopRequireDefault(__webpack_require__(/*! ./store/index.js */ 12));\nvar _event = _interopRequireDefault(__webpack_require__(/*! ./common/event.js */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n// 管理账号信息\nvar USERS_KEY = 'USERS_KEY';\nvar STATE_KEY = 'STATE_KEY';\n// const IPurl = 'https://datixcx.com.aa.800123456.top/api/';\n// const imgurl = 'https://datixcx.com.aa.800123456.top/';\n// const imgurl = 'http://192.168.129.246/';\nvar map_key = \"7FEBZ-WLWK2-PMGUE-C4BFT-EKXB6-BFFNR\";\nvar imgurl = \"http://jiushengquan.com.b.800123456.top/\";\nvar IPurl = imgurl + 'api/';\n// const IPurl='http://192.168.129.246/api/'\n// const adminurl='https://datixcx.com.aa.800123456.top/admin/';\n// appid:wxf61ecd472abe41cb  正式\n// appid:wx49a560f7feac0feb   cj\n/**\r\n * 请求头\r\n */\nvar header = {\n  'content-type': 'application/x-www-form-urlencoded' };\n\n\n/**\r\n                                                          * 供外部post请求调用  \r\n                                                          */\nfunction post(url, params, onSuccess, onFailed) {\n  __f__(\"log\", \"请求方式：\", \"POST\", \" at service.js:28\");\n  request(url, params, \"POST\", onSuccess, onFailed);\n\n}\n\n/**\r\n   * 供外部get请求调用\r\n   */\nfunction get(url, params, onSuccess, onFailed) {\n  __f__(\"log\", \"请求方式：\", \"GET\", \" at service.js:37\");\n  request(url, params, \"GET\", onSuccess, onFailed);\n}\n\n/**\r\n   * function: 封装网络请求\r\n   * @url URL地址\r\n   * @params 请求参数\r\n   * @method 请求方式：GET/POST\r\n   * @onSuccess 成功回调\r\n   * @onFailed  失败回调\r\n   */\n\nfunction request(url, params, method, onSuccess, onFailed) {\n  __f__(\"log\", '请求url：' + url, \" at service.js:51\");\n\n  __f__(\"log\", \"请求头：\", header, \" at service.js:53\");\n  uni.request({\n    url: IPurl + url,\n    data: dealParams(params),\n    method: method,\n    header: header,\n    success: function success(res) {\n      uni.hideLoading();\n      uni.stopPullDownRefresh();\n      __f__(\"log\", '响应：', res.data, \" at service.js:62\");\n\n      // if (res.data) {\n      if (res.data.code == -1) {\n        // if (params.login_type == 1) {\n        // \t//一进来就登录失败\n        // \treturn\n\n        // }\n        // if (params.login_type == 2) {\n        // \t//授权登录失败\n        // \tuni.navigateBack()\n        // \treturn\n\n        // }\n        uni.showToast({\n          icon: 'none',\n          title: '请先授权登录' });\n\n        // store.commit('logout')\n        setTimeout(function () {\n          uni.navigateTo({\n            url: './pages/login/login?haslogin=false' });\n\n        }, 1000);\n        return;\n\n      }\n\n      /** start 根据需求 接口的返回状态码进行处理 */\n      onSuccess(res);\n      /** end 处理结束*/\n      // }\n    },\n    fail: function fail(error) {\n\n      uni.hideLoading();\n      uni.stopPullDownRefresh();\n      onFailed(error); //failure for other reasons\n    } });\n\n}\n\n/**\r\n   * function: 根据需求处理请求参数：添加固定参数配置等\r\n   * @params 请求参数\r\n   */\nfunction dealParams(params) {\n  __f__(\"log\", \"请求参数:\", params, \" at service.js:110\");\n  return params;\n}\n\n\n\nvar getUsers = function getUsers() {\n  var ret = '';\n  ret = uni.getStorageSync(USERS_KEY);\n  if (!ret) {\n    ret = '[]';\n  }\n  return JSON.parse(ret);\n};\n\nvar addUser = function addUser(userInfo) {\n  var users = getUsers();\n  users.push({\n    account: userInfo.account,\n    password: userInfo.password });\n\n  uni.setStorageSync(USERS_KEY, JSON.stringify(users));\n};\n\nvar gologin = function gologin() {\n  uni.navigateTo({\n    url: '/pages/login_index/login_index' });\n\n};\n\nvar jump = function jump(e) {\n  // console.log(e.currentTarget.dataset.type)\n  var datas = e.currentTarget.dataset;\n  __f__(\"log\", datas.login == true, \" at service.js:143\");\n\n  if (datas.login == true) {\n    if (!datas.haslogin) {\n      uni.navigateTo({\n        url: '../login/login' });\n\n      return;\n    }\n  }\n  if (datas.type == 'sp') {\n    __f__(\"log\", datas.spurl, \" at service.js:154\");\n    _index.default.commit('spurl_fuc', datas.spurl);\n    uni.navigateTo({\n      url: datas.url });\n\n    return;\n  }\n  if (datas.type == 2) {\n    uni.switchTab({\n      url: datas.url });\n\n  } else if (datas.type == 3) {\n    uni.redirectTo({\n      url: datas.url });\n\n  } else {\n    uni.navigateTo({\n      url: datas.url });\n\n  }\n};\nvar pveimg = function pveimg(e) {\n  var current = e.currentTarget.dataset.src;\n  var urls = e.currentTarget.dataset.array;\n\n  var urls1 = [];\n  if (urls) {\n    urls1 = urls;\n\n  } else {\n    urls1[0] = current;\n  }\n  // console.log(urls1)\n  uni.previewImage({\n    current: current, // 当前显示图片的http链接\n    urls: urls1 // 需要预览的图片http链接列表\n  });\n\n};\nvar call = function call(e) {\n  __f__(\"log\", e, \" at service.js:194\");\n  // return\n  if (e.currentTarget.dataset.tel) {\n    // wx.makePhoneCall({\n    // \tphoneNumber: e.currentTarget.dataset.tel+''\n    // })\n    uni.showModal({\n      title: '提示',\n      content: '是否拨打' + e.currentTarget.dataset.tel + '?',\n      success: function success(res) {\n        if (res.confirm) {\n          wx.makePhoneCall({\n            phoneNumber: e.currentTarget.dataset.tel + '' });\n\n          __f__(\"log\", '用户点击确定', \" at service.js:208\");\n        } else if (res.cancel) {\n          __f__(\"log\", '用户点击取消', \" at service.js:210\");\n        }\n      } });\n\n  }\n};\n// 微信登录\nvar wxlogin = function wxlogin(num) {\n  var that = this;\n  // 获取用户信息\n  if (num == 1) {\n    uni.showLoading({\n      title: '正在登录',\n      mask: true });\n\n  }\n  uni.getSetting({\n    success: function success(res) {\n      __f__(\"log\", res, \" at service.js:228\");\n      if (res.authSetting['scope.userInfo'] == true) {\n        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框\n        __f__(\"log\", '已经授权', \" at service.js:231\");\n        uni.getUserInfo({\n          success: function success(res) {\n            var userInfo = res.userInfo;\n            __f__(\"log\", userInfo, \" at service.js:235\");\n            uni.setStorageSync('userInfo', res.userInfo);\n            if (!userInfo) {\n\n            } else {\n              uni.login({\n                success: function success(res) {\n\n                  // 发送 res.code 到后台换取 openId, sessionKey, unionId\n                  var uinfo = userInfo;\n                  var data = {\n                    code: res.code,\n                    nickname: uinfo.nickName,\n                    cover: uinfo.avatarUrl };\n\n                  var rcode = res.code;\n                  __f__(\"log\", res.code, \" at service.js:251\");\n                  uni.request({\n                    url: IPurl + 'user/login',\n                    data: data,\n                    header: {\n                      'content-type': 'application/x-www-form-urlencoded' },\n\n                    dataType: 'json',\n                    method: 'POST',\n                    success: function success(res) {\n                      uni.hideLoading();\n                      __f__(\"log\", res.data, \" at service.js:262\");\n                      if (res.data.code == 1) {\n                        __f__(\"log\", '登录成功', \" at service.js:264\");\n                        __f__(\"log\", res.data, \" at service.js:265\");\n                        uni.setStorageSync('token', res.data.data.token);\n                        //获取手机号\n                        /*\r\n                        if(!res.data.data.phone){\r\n                        \tif(num==1){\r\n                        \t\tuni.redirectTo({\r\n                        \t\t\turl:'/pages/login_tel/login_tel'\r\n                        \t\t})\r\n                        \t}\r\n                        \treturn\r\n                        }*/\n                        _index.default.commit('logindata', res.data.data);\n                        _index.default.commit('login', res.data.data.nickname);\n\n                        uni.setStorageSync('loginmsg', res.data.data);\n                        //0 商家端  1 用户端  2智能安装端\n                        __f__(\"log\", 'store.xcx_status', \" at service.js:282\");\n                        __f__(\"log\", _index.default.state.xcx_status, \" at service.js:283\");\n                        if (num == 1) {\n                          __f__(\"log\", res.data.data.is_engineer, \" at service.js:285\");\n                          if (res.data.data.is_owner == 1) {\n                            _index.default.commit('set_xcx', 1);\n                            return;\n                          }\n                          if (res.data.data.is_engineer == 1) {\n                            _index.default.commit('set_xcx', 2);\n                            return;\n                          }\n                          if (res.data.data.is_seller == 1) {\n                            _index.default.commit('set_xcx', 0);\n                          }\n                        }\n                        // im login\n\n\n\n                        if (num == 1) {\n                          uni.showToast({\n                            icon: 'none',\n                            title: '登录成功' });\n\n                          setTimeout(function () {\n                            _event.default.trigger({\n                              type: 'test',\n                              page: '/pages/index/index',\n                              //obj和test是举的例子，随意啥都行，这个传过去在on中的args中都可以获取到\n                              obj: {},\n\n\n                              test: {\n                                'loginmsg': res.data.data },\n\n                              success: function success(data) {\n                                //data为on中返回的数据\n                              } });\n\n                          }, 1000);\n                          setTimeout(function () {\n                            uni.navigateBack();\n                          }, 1500);\n                        } else {\n                          _event.default.trigger({\n                            type: 'test',\n                            page: '/pages/index/index',\n                            //obj和test是举的例子，随意啥都行，这个传过去在on中的args中都可以获取到\n                            obj: {},\n\n\n                            test: {\n                              'loginmsg': res.data.data },\n\n                            success: function success(data) {\n                              //data为on中返回的数据\n                            } });\n\n                        }\n                      } else {\n                        uni.removeStorageSync('userInfo');\n                        uni.removeStorageSync('token');\n                        if (res.msg) {\n                          uni.showToast({\n                            icon: 'none',\n                            title: res.msg });\n\n                        } else {\n                          uni.showToast({\n                            icon: 'none',\n                            title: '登录失败' });\n\n                        }\n                      }\n\n                    },\n                    fail: function fail() {\n                      uni.hideLoading();\n                      uni.showToast({\n                        icon: 'none',\n                        title: '登录失败' });\n\n                    } });\n\n                } });\n\n            }\n          } });\n\n\n      } else {\n        uni.hideLoading();\n      }\n    } });\n\n};\n// 手机号登录\nvar login_tel = function login_tel(num) {\n  var datas;\n  var tel;\n  var password;\n  if (uni.getStorageSync('tel')) {\n    tel = uni.getStorageSync('tel');\n    password = uni.getStorageSync('password');\n    datas = {\n      username: tel,\n      password: password };\n\n  } else {\n    return;\n  }\n\n  var jkurl = '/minapp/login';\n  P_post(jkurl, datas).then(function (res) {\n    __f__(\"log\", res, \" at service.js:397\");\n    if (res.code == 1) {\n      var datas = res.data;\n      __f__(\"log\", typeof datas, \" at service.js:400\");\n\n      if (typeof datas == 'string') {\n        datas = JSON.parse(datas);\n      }\n      __f__(\"log\", '登录成功', \" at service.js:405\");\n      uni.setStorageSync('tel', tel);\n      uni.setStorageSync('password', password);\n      uni.setStorageSync('token', datas.token);\n      uni.setStorageSync('loginmsg', datas);\n      _index.default.commit('logindata', datas);\n      _index.default.commit('login', datas.username);\n      // setTimeout(() => {\n      // \tuni.navigateBack({\n      // \t\tdelta: 1\n      // \t})\n      // }, 1000)\n\n    } else {\n      if (res.msg) {\n        uni.showToast({\n          icon: 'none',\n          title: res.msg });\n\n      } else {\n        uni.showToast({\n          icon: 'none',\n          title: '操作失败' });\n\n      }\n    }\n  }).catch(function (e) {\n    __f__(\"log\", e, \" at service.js:432\");\n    uni.showToast({\n      icon: 'none',\n      title: '操作失败' });\n\n  });\n};\nvar setUsermsg = function setUsermsg(data) {\n  var jkurl = '/user/amendInfo';\n\n  post(jkurl, data,\n  function (res) {\n\n    // if (res.data.code == 1) {\n    if (res.data.code == 1) {\n      var datas = res.data.data;\n      // console.log(typeof datas)\n\n      if (typeof datas == 'string') {\n        datas = JSON.parse(datas);\n      }\n      wxlogin();\n      uni.showToast({\n        title: '操作成功' });\n\n\n    } else {\n      if (res.data.msg) {\n        uni.showToast({\n          icon: 'none',\n          title: res.data.msg });\n\n      } else {\n        uni.showToast({\n          icon: 'none',\n          title: '操作失败' });\n\n      }\n    }\n  },\n  function (err) {\n    that.btnkg = 0;\n\n    uni.showToast({\n      icon: 'none',\n      title: '获取数据失败' });\n\n\n  });\n\n};\n\n// 上传图片\nvar wx_upload = function wx_upload(tximg) {\n  return new Promise(function (resolve, reject) {\n    uni.showLoading({\n      mask: true,\n      title: '正在上传' });\n\n\n    uni.uploadFile({\n      url: IPurl + 'minapp/upload-img',\n      filePath: tximg,\n      name: 'img',\n      formData: {\n        token: uni.getStorageSync('token') },\n\n      // success: (uploadFileRes) => {\n      // \tconsole.log(uploadFileRes.data);\n      // \tvar ndata = JSON.parse(uploadFileRes.data)\n      // \tresolve(uploadFileRes)\n      // },\n      complete: function complete(res) {\n        uni.hideLoading();\n        uni.stopPullDownRefresh(); //慎用hideLoading,会关闭wx.showToast弹窗\n        // console.log(`耗时${Date.now() - timeStart}`);\n        __f__(\"log\", res, \" at service.js:508\");\n        if (res.statusCode == 200) {//请求成功\n          var ndata = JSON.parse(res.data);\n          if (ndata.code == -1) {\n            _index.default.commit('logout');\n            uni.navigateTo({\n              url: '/pages/login/login' });\n\n            return;\n          } else if (ndata.code == 0) {\n            if (ndata.msg) {\n\n              uni.showToast({\n                icon: 'none',\n                title: ndata.msg });\n\n            } else {\n\n              uni.showToast({\n                icon: 'none',\n                title: '操作失败' });\n\n            }\n          }\n          resolve(ndata);\n        } else {\n          reject(res);\n        }\n      } });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  });\n\n};\n\n\n\n\n\n// 配置接口请求的公共方法\nvar http = function http() {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$url = _ref.url,url = _ref$url === void 0 ? '' : _ref$url,_ref$param = _ref.param,param = _ref$param === void 0 ? {} : _ref$param,_ref$method = _ref.method,method = _ref$method === void 0 ? '' : _ref$method,_ref$header = _ref.header,header = _ref$header === void 0 ? { 'content-type': 'application/x-www-form-urlencoded' } : _ref$header;\n\n  var timeStart = Date.now();\n  return new Promise(function (resolve, reject) {\n    __f__(\"log\", '请求url：' + getUrl(url), \" at service.js:614\");\n\n    __f__(\"log\", \"请求头：\", header, \" at service.js:616\");\n    __f__(\"log\", \"param：\", param, \" at service.js:617\");\n    uni.request({\n      url: getUrl(url),\n      data: param,\n      method: method,\n      header: header,\n      complete: function complete(res) {\n        uni.hideLoading();\n        uni.stopPullDownRefresh(); //慎用hideLoading,会关闭wx.showToast弹窗\n        __f__(\"log\", \"\\u8017\\u65F6\".concat(Date.now() - timeStart), \" at service.js:626\");\n        __f__(\"log\", res, \" at service.js:627\");\n        if (res.statusCode == 200) {//请求成功\n          __f__(\"log\", res, \" at service.js:629\");\n          if (res.data.code == -1) {\n            // store.commit('logout')\n            uni.navigateTo({\n              url: '/pages/login/login' });\n\n            return;\n          } else if (res.data.code == 0 && res.msg == '请先登录账号~') {\n            uni.navigateTo({\n              url: '/pages/login/login' });\n\n            return;\n          } else if (res.data.code == 0) {\n            if (res.data.msg) {\n\n              uni.showToast({\n                icon: 'none',\n                title: res.data.msg });\n\n            } else {\n\n              uni.showToast({\n                icon: 'none',\n                title: '操作失败' });\n\n            }\n          }\n          resolve(res.data);\n        } else {\n          reject(res);\n        }\n      } });\n\n  });\n};\n// 获取url\nvar getUrl = function getUrl(url) {\n  if (!url) {\n    return url;\n  }\n  if (url.slice(0, 1) == \"/\") {\n    __f__(\"log\", true, \" at service.js:670\");\n    url = url.substr(1);\n  }\n  if (url.indexOf('://') == -1) {\n    url = IPurl + url;\n  }\n  return url;\n};\n//暴露出去调用的方法\n\n\n// get方法\nvar P_get = function P_get(url) {var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  if (!param.load_mode) {\n    wx.showLoading({\n      title: '请求中，请耐心等待...' });\n\n  }\n  return http({\n    url: url,\n    param: param,\n    method: 'GET' });\n\n};\n\nvar P_post = function P_post(url) {var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return http({\n    url: url,\n    param: param,\n    method: \"POST\" });\n\n};\n\nvar P_put = function P_put(url) {var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return http({\n    url: url,\n    param: param,\n    method: 'put' });\n\n};\n\nvar P_delete = function P_delete(url) {var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return http({\n    url: url,\n    param: param,\n    method: 'put' });\n\n};\n// // 单个请求\n// service.P_get('/cate/list').then(res => {\n// \tconsole.log(res)\n// }).catch(e => {\n// \tconsole.log(e)\n// })\n\n// // 一个页面多个请求\n// Promise.all([\n//   service.P_get('/cate/list'),\n//   service.P_get(`detail/${id}`)\n// ]).then(result => {\n//   console.log(result)\n// }).catch(e => {\n//   console.log(e)\n// })\nvar getimg = function getimg(img) {\n  // return img\n\n\n\n  if (!img) return;\n  // console.log(imgurl+img)\n  if (img.indexOf('://') == -1) {\n    img = imgurl + img;\n  }\n  return img;\n};\nvar getimgarr = function getimgarr(imgs, type) {\n  if (!imgs) return;\n  if (!type) {\n    type = ',';\n  }\n  imgs = imgs.split(type);\n  // console.log(imgurl+img)\n  var newimgs = [];\n  for (var i = 0; i < imgs.length; i++) {\n    var img = imgs[i];\n    if (img.indexOf('://') == -1) {\n      img = imgurl + img;\n    }\n    newimgs.push(img);\n  }\n  // console.log(newimgs)\n  return newimgs;\n};\nvar gettime = function gettime(mj) {\n  if (!mj) {\n    return {};\n  }\n  // // console.log(mj.indexOf('今天')!=-1)\n  // if(mj.indexOf('今天')!=-1){\n  // \treturn {\n  // \t\ttype:2,\n\n  // \t\ttime:mj\n  // \t}\n  // }\n  // mj = mj.replace(/-/g,'/')\n  var ntime = new Date(mj * 1000);\n  // console.log(ntime)\n  var n_year = ntime.getFullYear();\n  var n_month = ntime.getMonth() + 1;\n  var n_date = ntime.getDate();\n  var n_hour = ntime.getHours();\n  var n_minute = ntime.getMinutes();\n\n  var time = new Date();\n  var year = time.getFullYear();\n  var month = time.getMonth() + 1;\n  var date = time.getDate();\n  var hour = time.getHours();\n  var minute = time.getMinutes();\n  // n_month=n_month<10? '0'+n_month:n_month\n  n_date = n_date < 10 ? '0' + n_date : n_date;\n  n_hour = n_hour < 10 ? '0' + n_hour : n_hour;\n  n_minute = n_minute < 10 ? '0' + n_minute : n_minute;\n  if (n_year == year) {\n\n    return {\n      type: 1,\n      year: n_year,\n      month: n_month,\n      date: n_date,\n      hour: n_hour,\n      minute: n_minute,\n      time: '今天 ' + n_hour + ':' + n_minute };\n\n  } else {\n\n    return {\n      type: 2,\n      year: n_year,\n      month: n_month,\n      date: n_date,\n      hour: n_hour,\n      minute: n_minute,\n      time: n_year + '-' + n_month + '-' + n_date };\n\n  }\n};\n\n\nvar get_fwb = function get_fwb(str) {\n  if (!str) {\n    return;\n  }\n  str = str // .replace(/<p([\\s\\w\"=\\/\\.:;]+)((?:(style=\"[^\"]+\")))/ig, '<p')\n  .replace(/<p([\\s\\w\"-=\\/\\.:;]+)((?:(class=\"[^\"]+\")))/ig, '<p $1').\n  replace(/<p([\\s\\w\"-=\\/\\.:;]+)/ig, '<p$1 class=\"xcx_fwb_p\"')\n  // .replace(/<div([\\s\\w\"=\\/\\.:;]+)((?:(style=\"[^\"]+\")))/ig, '<div')\n  .replace(/<div([\\s\\w\"-=\\/\\.:;]+)((?:(class=\"[^\"]+\")))/ig, '<div $1').\n  replace(/<div([\\s\\w\"-=\\/\\.:;]+)/ig, '<div$1 class=\"xcx_fwb_div\"')\n\n  // .replace(/<img([\\s\\w\"-=\\/\\.:;]+)((?:(height=\"[^\"]+\")))/ig, '<img $1')\n  // .replace(/<img([\\s\\w\"-=\\/\\.:;]+)((?:(width=\"[^\"]+\")))/ig, '<img $1')\n  // .replace(/<img([\\s\\w\"-=\\/\\.:;]+)((?:(style=\"[^\"]+\")))/ig, '<img $1')\n  .replace(/<img([\\s\\w\"-=\\/\\.:;]+)((?:(alt=\"[^\"]+\")))/ig, '<img $1').\n  replace(/<img([\\s\\w\"-=\\/\\.:;]+)((?:(class=\"[^\"]+\")))/ig, '<img $1').\n  replace(/<img([\\s\\w\"-=\\/\\.:;]+)/ig, '<img$1 class=\"xcx_fwb_img\"');\n  return str;\n};var _default =\n{\n  getUsers: getUsers,\n  addUser: addUser,\n  get: get,\n  post: post,\n  IPurl: IPurl,\n  map_key: map_key,\n  imgurl: imgurl,\n  gologin: gologin,\n  jump: jump,\n  call: call,\n  wxlogin: wxlogin,\n  login_tel: login_tel,\n  setUsermsg: setUsermsg,\n  P_get: P_get,\n  P_post: P_post,\n  P_put: P_put,\n  P_delete: P_delete,\n  gettime: gettime,\n  getimg: getimg,\n  getimgarr: getimgarr,\n  pveimg: pveimg,\n  get_fwb: get_fwb,\n  wx_upload: wx_upload };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc2VydmljZS5qcyJdLCJuYW1lcyI6WyJVU0VSU19LRVkiLCJTVEFURV9LRVkiLCJtYXBfa2V5IiwiaW1ndXJsIiwiSVB1cmwiLCJoZWFkZXIiLCJwb3N0IiwidXJsIiwicGFyYW1zIiwib25TdWNjZXNzIiwib25GYWlsZWQiLCJyZXF1ZXN0IiwiZ2V0IiwibWV0aG9kIiwidW5pIiwiZGF0YSIsImRlYWxQYXJhbXMiLCJzdWNjZXNzIiwicmVzIiwiaGlkZUxvYWRpbmciLCJzdG9wUHVsbERvd25SZWZyZXNoIiwiY29kZSIsInNob3dUb2FzdCIsImljb24iLCJ0aXRsZSIsInNldFRpbWVvdXQiLCJuYXZpZ2F0ZVRvIiwiZmFpbCIsImVycm9yIiwiZ2V0VXNlcnMiLCJyZXQiLCJnZXRTdG9yYWdlU3luYyIsIkpTT04iLCJwYXJzZSIsImFkZFVzZXIiLCJ1c2VySW5mbyIsInVzZXJzIiwicHVzaCIsImFjY291bnQiLCJwYXNzd29yZCIsInNldFN0b3JhZ2VTeW5jIiwic3RyaW5naWZ5IiwiZ29sb2dpbiIsImp1bXAiLCJlIiwiZGF0YXMiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImxvZ2luIiwiaGFzbG9naW4iLCJ0eXBlIiwic3B1cmwiLCJzdG9yZSIsImNvbW1pdCIsInN3aXRjaFRhYiIsInJlZGlyZWN0VG8iLCJwdmVpbWciLCJjdXJyZW50Iiwic3JjIiwidXJscyIsImFycmF5IiwidXJsczEiLCJwcmV2aWV3SW1hZ2UiLCJjYWxsIiwidGVsIiwic2hvd01vZGFsIiwiY29udGVudCIsImNvbmZpcm0iLCJ3eCIsIm1ha2VQaG9uZUNhbGwiLCJwaG9uZU51bWJlciIsImNhbmNlbCIsInd4bG9naW4iLCJudW0iLCJ0aGF0Iiwic2hvd0xvYWRpbmciLCJtYXNrIiwiZ2V0U2V0dGluZyIsImF1dGhTZXR0aW5nIiwiZ2V0VXNlckluZm8iLCJ1aW5mbyIsIm5pY2tuYW1lIiwibmlja05hbWUiLCJjb3ZlciIsImF2YXRhclVybCIsInJjb2RlIiwiZGF0YVR5cGUiLCJ0b2tlbiIsInN0YXRlIiwieGN4X3N0YXR1cyIsImlzX2VuZ2luZWVyIiwiaXNfb3duZXIiLCJpc19zZWxsZXIiLCJldmVudCIsInRyaWdnZXIiLCJwYWdlIiwib2JqIiwidGVzdCIsIm5hdmlnYXRlQmFjayIsInJlbW92ZVN0b3JhZ2VTeW5jIiwibXNnIiwibG9naW5fdGVsIiwidXNlcm5hbWUiLCJqa3VybCIsIlBfcG9zdCIsInRoZW4iLCJjYXRjaCIsInNldFVzZXJtc2ciLCJlcnIiLCJidG5rZyIsInd4X3VwbG9hZCIsInR4aW1nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cGxvYWRGaWxlIiwiZmlsZVBhdGgiLCJuYW1lIiwiZm9ybURhdGEiLCJjb21wbGV0ZSIsInN0YXR1c0NvZGUiLCJuZGF0YSIsImh0dHAiLCJwYXJhbSIsInRpbWVTdGFydCIsIkRhdGUiLCJub3ciLCJnZXRVcmwiLCJzbGljZSIsInN1YnN0ciIsImluZGV4T2YiLCJQX2dldCIsImxvYWRfbW9kZSIsIlBfcHV0IiwiUF9kZWxldGUiLCJnZXRpbWciLCJpbWciLCJnZXRpbWdhcnIiLCJpbWdzIiwic3BsaXQiLCJuZXdpbWdzIiwiaSIsImxlbmd0aCIsImdldHRpbWUiLCJtaiIsIm50aW1lIiwibl95ZWFyIiwiZ2V0RnVsbFllYXIiLCJuX21vbnRoIiwiZ2V0TW9udGgiLCJuX2RhdGUiLCJnZXREYXRlIiwibl9ob3VyIiwiZ2V0SG91cnMiLCJuX21pbnV0ZSIsImdldE1pbnV0ZXMiLCJ0aW1lIiwieWVhciIsIm1vbnRoIiwiZGF0ZSIsImhvdXIiLCJtaW51dGUiLCJnZXRfZndiIiwic3RyIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Im9JQUFBO0FBQ0E7QUFDQSxzRjtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFdBQWxCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFdBQWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUMsT0FBTyxHQUFDLHFDQUFkO0FBQ0EsSUFBTUMsTUFBTSxHQUFDLDBD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QVg5RDtBQVlLQSxTQVpMLENBWWEsMEJBWmIsRUFZeUMsNEJBWnpDLENBQU47QUFhQSxTQUFPRCxHQUFQO0FBQ0EsQ0FsQkosQztBQW1CZTtBQUNkdEksVUFBUSxFQUFSQSxRQURjO0FBRWRLLFNBQU8sRUFBUEEsT0FGYztBQUdkdEIsS0FBRyxFQUFIQSxHQUhjO0FBSWROLE1BQUksRUFBSkEsSUFKYztBQUtkRixPQUFLLEVBQUxBLEtBTGM7QUFNZEYsU0FBTyxFQUFQQSxPQU5jO0FBT2RDLFFBQU0sRUFBTkEsTUFQYztBQVFkdUMsU0FBTyxFQUFQQSxPQVJjO0FBU2RDLE1BQUksRUFBSkEsSUFUYztBQVVkb0IsTUFBSSxFQUFKQSxJQVZjO0FBV2RTLFNBQU8sRUFBUEEsT0FYYztBQVlkNkIsV0FBUyxFQUFUQSxTQVpjO0FBYWRNLFlBQVUsRUFBVkEsVUFiYztBQWNkd0IsT0FBSyxFQUFMQSxLQWRjO0FBZWQzQixRQUFNLEVBQU5BLE1BZmM7QUFnQmQ2QixPQUFLLEVBQUxBLEtBaEJjO0FBaUJkQyxVQUFRLEVBQVJBLFFBakJjO0FBa0JkUyxTQUFPLEVBQVBBLE9BbEJjO0FBbUJkUixRQUFNLEVBQU5BLE1BbkJjO0FBb0JkRSxXQUFTLEVBQVRBLFNBcEJjO0FBcUJkakYsUUFBTSxFQUFOQSxNQXJCYztBQXNCZDBHLFNBQU8sRUFBUEEsT0F0QmM7QUF1QmRwRCxXQUFTLEVBQVRBLFNBdkJjLEUiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUvaW5kZXguanMnXHJcbmltcG9ydCBldmVudCBmcm9tICcuL2NvbW1vbi9ldmVudC5qcydcclxuLy8g566h55CG6LSm5Y+35L+h5oGvXHJcbmNvbnN0IFVTRVJTX0tFWSA9ICdVU0VSU19LRVknO1xyXG5jb25zdCBTVEFURV9LRVkgPSAnU1RBVEVfS0VZJztcclxuLy8gY29uc3QgSVB1cmwgPSAnaHR0cHM6Ly9kYXRpeGN4LmNvbS5hYS44MDAxMjM0NTYudG9wL2FwaS8nO1xyXG4vLyBjb25zdCBpbWd1cmwgPSAnaHR0cHM6Ly9kYXRpeGN4LmNvbS5hYS44MDAxMjM0NTYudG9wLyc7XHJcbi8vIGNvbnN0IGltZ3VybCA9ICdodHRwOi8vMTkyLjE2OC4xMjkuMjQ2Lyc7XHJcbmNvbnN0IG1hcF9rZXk9XCI3RkVCWi1XTFdLMi1QTUdVRS1DNEJGVC1FS1hCNi1CRkZOUlwiXHJcbmNvbnN0IGltZ3VybD1cImh0dHA6Ly9qaXVzaGVuZ3F1YW4uY29tLmIuODAwMTIzNDU2LnRvcC9cIlxyXG5jb25zdCBJUHVybD1pbWd1cmwrJ2FwaS8nXHJcbi8vIGNvbnN0IElQdXJsPSdodHRwOi8vMTkyLjE2OC4xMjkuMjQ2L2FwaS8nXHJcbi8vIGNvbnN0IGFkbWludXJsPSdodHRwczovL2RhdGl4Y3guY29tLmFhLjgwMDEyMzQ1Ni50b3AvYWRtaW4vJztcclxuLy8gYXBwaWQ6d3hmNjFlY2Q0NzJhYmU0MWNiICDmraPlvI9cclxuLy8gYXBwaWQ6d3g0OWE1NjBmN2ZlYWMwZmViICAgY2pcclxuLyoqXHJcbiAqIOivt+axguWktFxyXG4gKi9cclxudmFyIGhlYWRlciA9IHtcclxuXHQnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDkvpvlpJbpg6hwb3N06K+35rGC6LCD55SoICBcclxuICovXHJcbmZ1bmN0aW9uIHBvc3QodXJsLCBwYXJhbXMsIG9uU3VjY2Vzcywgb25GYWlsZWQpIHtcclxuXHRjb25zb2xlLmxvZyhcIuivt+axguaWueW8j++8mlwiLCBcIlBPU1RcIilcclxuXHRyZXF1ZXN0KHVybCwgcGFyYW1zLCBcIlBPU1RcIiwgb25TdWNjZXNzLCBvbkZhaWxlZCk7XHJcblxyXG59XHJcblxyXG4vKipcclxuICog5L6b5aSW6YOoZ2V06K+35rGC6LCD55SoXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXQodXJsLCBwYXJhbXMsIG9uU3VjY2Vzcywgb25GYWlsZWQpIHtcclxuXHRjb25zb2xlLmxvZyhcIuivt+axguaWueW8j++8mlwiLCBcIkdFVFwiKVxyXG5cdHJlcXVlc3QodXJsLCBwYXJhbXMsIFwiR0VUXCIsIG9uU3VjY2Vzcywgb25GYWlsZWQpO1xyXG59XHJcblxyXG4vKipcclxuICogZnVuY3Rpb246IOWwgeijhee9kee7nOivt+axglxyXG4gKiBAdXJsIFVSTOWcsOWdgFxyXG4gKiBAcGFyYW1zIOivt+axguWPguaVsFxyXG4gKiBAbWV0aG9kIOivt+axguaWueW8j++8mkdFVC9QT1NUXHJcbiAqIEBvblN1Y2Nlc3Mg5oiQ5Yqf5Zue6LCDXHJcbiAqIEBvbkZhaWxlZCAg5aSx6LSl5Zue6LCDXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gcmVxdWVzdCh1cmwsIHBhcmFtcywgbWV0aG9kLCBvblN1Y2Nlc3MsIG9uRmFpbGVkKSB7XHJcblx0Y29uc29sZS5sb2coJ+ivt+axgnVybO+8micgKyB1cmwpO1xyXG5cclxuXHRjb25zb2xlLmxvZyhcIuivt+axguWktO+8mlwiLCBoZWFkZXIpXHJcblx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBJUHVybCArIHVybCxcclxuXHRcdGRhdGE6IGRlYWxQYXJhbXMocGFyYW1zKSxcclxuXHRcdG1ldGhvZDogbWV0aG9kLFxyXG5cdFx0aGVhZGVyOiBoZWFkZXIsXHJcblx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdHVuaS5zdG9wUHVsbERvd25SZWZyZXNoKCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCflk43lupTvvJonLCByZXMuZGF0YSk7XHJcblxyXG5cdFx0XHQvLyBpZiAocmVzLmRhdGEpIHtcclxuXHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gLTEpIHtcclxuXHRcdFx0XHQvLyBpZiAocGFyYW1zLmxvZ2luX3R5cGUgPT0gMSkge1xyXG5cdFx0XHRcdC8vIFx0Ly/kuIDov5vmnaXlsLHnmbvlvZXlpLHotKVcclxuXHRcdFx0XHQvLyBcdHJldHVyblxyXG5cclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0Ly8gaWYgKHBhcmFtcy5sb2dpbl90eXBlID09IDIpIHtcclxuXHRcdFx0XHQvLyBcdC8v5o6I5p2D55m75b2V5aSx6LSlXHJcblx0XHRcdFx0Ly8gXHR1bmkubmF2aWdhdGVCYWNrKClcclxuXHRcdFx0XHQvLyBcdHJldHVyblxyXG5cclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHR0aXRsZTogJ+ivt+WFiOaOiOadg+eZu+W9lSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vIHN0b3JlLmNvbW1pdCgnbG9nb3V0JylcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpe1xyXG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHR1cmw6ICcuL3BhZ2VzL2xvZ2luL2xvZ2luP2hhc2xvZ2luPWZhbHNlJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9LDEwMDApXHJcblx0XHRcdFx0cmV0dXJuXHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKiogc3RhcnQg5qC55o2u6ZyA5rGCIOaOpeWPo+eahOi/lOWbnueKtuaAgeeggei/m+ihjOWkhOeQhiAqL1xyXG5cdFx0XHRvblN1Y2Nlc3MocmVzKTtcclxuXHRcdFx0LyoqIGVuZCDlpITnkIbnu5PmnZ8qL1xyXG5cdFx0XHQvLyB9XHJcblx0XHR9LFxyXG5cdFx0ZmFpbDogZnVuY3Rpb24oZXJyb3IpIHtcclxuXHJcblx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHR1bmkuc3RvcFB1bGxEb3duUmVmcmVzaCgpO1xyXG5cdFx0XHRvbkZhaWxlZChlcnJvcik7IC8vZmFpbHVyZSBmb3Igb3RoZXIgcmVhc29uc1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBmdW5jdGlvbjog5qC55o2u6ZyA5rGC5aSE55CG6K+35rGC5Y+C5pWw77ya5re75Yqg5Zu65a6a5Y+C5pWw6YWN572u562JXHJcbiAqIEBwYXJhbXMg6K+35rGC5Y+C5pWwXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWFsUGFyYW1zKHBhcmFtcykge1xyXG5cdGNvbnNvbGUubG9nKFwi6K+35rGC5Y+C5pWwOlwiLCBwYXJhbXMpXHJcblx0cmV0dXJuIHBhcmFtcztcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBnZXRVc2VycyA9IGZ1bmN0aW9uKCkge1xyXG5cdGxldCByZXQgPSAnJztcclxuXHRyZXQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVVNFUlNfS0VZKTtcclxuXHRpZiAoIXJldCkge1xyXG5cdFx0cmV0ID0gJ1tdJztcclxuXHR9XHJcblx0cmV0dXJuIEpTT04ucGFyc2UocmV0KTtcclxufVxyXG5cclxuY29uc3QgYWRkVXNlciA9IGZ1bmN0aW9uKHVzZXJJbmZvKSB7XHJcblx0bGV0IHVzZXJzID0gZ2V0VXNlcnMoKTtcclxuXHR1c2Vycy5wdXNoKHtcclxuXHRcdGFjY291bnQ6IHVzZXJJbmZvLmFjY291bnQsXHJcblx0XHRwYXNzd29yZDogdXNlckluZm8ucGFzc3dvcmRcclxuXHR9KTtcclxuXHR1bmkuc2V0U3RvcmFnZVN5bmMoVVNFUlNfS0VZLCBKU09OLnN0cmluZ2lmeSh1c2VycykpO1xyXG59XHJcblxyXG5jb25zdCBnb2xvZ2luID0gZnVuY3Rpb24oKSB7XHJcblx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0dXJsOiAnL3BhZ2VzL2xvZ2luX2luZGV4L2xvZ2luX2luZGV4J1xyXG5cdH0pXHJcbn1cclxuXHJcbmNvbnN0IGp1bXAgPSBmdW5jdGlvbihlKSB7XHJcblx0Ly8gY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudHlwZSlcclxuXHR2YXIgZGF0YXM9ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuXHRjb25zb2xlLmxvZyhkYXRhcy5sb2dpbj09dHJ1ZSlcclxuXHRcclxuXHRpZihkYXRhcy5sb2dpbj09dHJ1ZSl7XHJcblx0XHRpZighZGF0YXMuaGFzbG9naW4pe1xyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiAnLi4vbG9naW4vbG9naW4nLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0fVxyXG5cdGlmKGRhdGFzLnR5cGU9PSdzcCcpe1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YXMuc3B1cmwpXHJcblx0XHRzdG9yZS5jb21taXQoJ3NwdXJsX2Z1YycsIGRhdGFzLnNwdXJsKVxyXG5cdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHR1cmw6IGRhdGFzLnVybFxyXG5cdFx0fSlcclxuXHRcdHJldHVyblxyXG5cdH1cclxuXHRpZiAoZGF0YXMudHlwZSA9PSAyKSB7XHJcblx0XHR1bmkuc3dpdGNoVGFiKHtcclxuXHRcdFx0dXJsOiBkYXRhcy51cmxcclxuXHRcdH0pXHJcblx0fSBlbHNlIGlmIChkYXRhcy50eXBlID09IDMpIHtcclxuXHRcdHVuaS5yZWRpcmVjdFRvKHtcclxuXHRcdFx0dXJsOiBkYXRhcy51cmxcclxuXHRcdH0pXHJcblx0fSBlbHNlIHtcclxuXHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0dXJsOiBkYXRhcy51cmxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcbmNvbnN0IHB2ZWltZyA9IGZ1bmN0aW9uKGUpIHtcclxuXHR2YXIgY3VycmVudCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnNyY1xyXG5cdHZhciB1cmxzID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYXJyYXlcclxuXHJcblx0bGV0IHVybHMxID0gW11cclxuXHRpZiAodXJscykge1xyXG5cdFx0dXJsczEgPSB1cmxzXHJcblxyXG5cdH0gZWxzZSB7XHJcblx0XHR1cmxzMVswXSA9IGN1cnJlbnRcclxuXHR9XHJcblx0Ly8gY29uc29sZS5sb2codXJsczEpXHJcblx0dW5pLnByZXZpZXdJbWFnZSh7XHJcblx0XHRjdXJyZW50OiBjdXJyZW50LCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lXHJcblx0XHR1cmxzOiB1cmxzMSAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXHJcblx0fSlcclxuXHJcbn1cclxuY29uc3QgY2FsbD0gIGZ1bmN0aW9uIChlKXtcclxuXHRjb25zb2xlLmxvZyhlKVxyXG5cdC8vIHJldHVyblxyXG5cdGlmKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRlbCl7XHJcblx0XHQvLyB3eC5tYWtlUGhvbmVDYWxsKHtcclxuXHRcdC8vIFx0cGhvbmVOdW1iZXI6IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRlbCsnJ1xyXG5cdFx0Ly8gfSlcclxuXHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0ICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuXHRcdCAgICBjb250ZW50OiAn5piv5ZCm5ouo5omTJytlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50ZWwrJz8nLFxyXG5cdFx0ICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuXHRcdCAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0d3gubWFrZVBob25lQ2FsbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRwaG9uZU51bWJlcjogZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGVsKycnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJyk7XHJcblx0XHQgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG5cdFx0ICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpO1xyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgfVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbi8vIOW+ruS/oeeZu+W9lVxyXG5jb25zdCB3eGxvZ2luPWZ1bmN0aW9uIChudW0pe1xyXG5cdHZhciB0aGF0ID10aGlzXHJcblx0Ly8g6I635Y+W55So5oi35L+h5oGvXHJcblx0aWYgKG51bSA9PSAxKSB7XHJcblx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHR0aXRsZTogJ+ato+WcqOeZu+W9lScsXHJcblx0XHRcdG1hc2s6IHRydWVcclxuXHRcdH0pXHJcblx0fVxyXG5cdHVuaS5nZXRTZXR0aW5nKHtcclxuXHQgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0ICAgY29uc29sZS5sb2cocmVzKVxyXG5cdCAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddPT10cnVlKSB7XHJcblx0ICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensO+8jOS4jeS8muW8ueahhlxyXG5cdCAgICAgIGNvbnNvbGUubG9nKCflt7Lnu4/mjojmnYMnKVxyXG5cdFx0XHRcdHVuaS5nZXRVc2VySW5mbyh7XHJcblx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHR2YXIgdXNlckluZm8gPSByZXMudXNlckluZm9cclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2codXNlckluZm8pXHJcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygndXNlckluZm8nLCByZXMudXNlckluZm8pXHJcblx0XHRcdFx0XHRcdGlmKCF1c2VySW5mbyl7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHQgICAgICAgICAgICB1bmkubG9naW4oe1xyXG5cdCAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHQgICAgICAgICAgICAgICAgLy8g5Y+R6YCBIHJlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcclxuXHQgICAgICAgICAgICAgICAgdmFyIHVpbmZvID0gdXNlckluZm9cclxuXHQgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XHJcblx0ICAgICAgICAgICAgICAgICAgY29kZTogcmVzLmNvZGUsXHJcblx0ICAgICAgICAgICAgICAgICAgbmlja25hbWU6IHVpbmZvLm5pY2tOYW1lLFxyXG5cdCAgICAgICAgICAgICAgICAgIGNvdmVyOiB1aW5mby5hdmF0YXJVcmxcclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICBsZXQgcmNvZGUgPSByZXMuY29kZVxyXG5cdCAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuY29kZSlcclxuXHQgICAgICAgICAgICAgICAgdW5pLnJlcXVlc3Qoe1xyXG5cdCAgICAgICAgICAgICAgICAgIHVybDogSVB1cmwrJ3VzZXIvbG9naW4nLFxyXG5cdCAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcblx0ICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuXHQgICAgICAgICAgICAgICAgICB9LFxyXG5cdCAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcblx0ICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcblx0ICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0ICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuXHQgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09IDEpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eZu+W9leaIkOWKnycpXHJcblx0ICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG5cdCAgICAgICAgICAgICAgICAgICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoJ3Rva2VuJywgcmVzLmRhdGEuZGF0YS50b2tlbilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly/ojrflj5bmiYvmnLrlj7dcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LypcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYoIXJlcy5kYXRhLmRhdGEucGhvbmUpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmKG51bT09MSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkucmVkaXJlY3RUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVybDonL3BhZ2VzL2xvZ2luX3RlbC9sb2dpbl90ZWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0b3JlLmNvbW1pdCgnbG9naW5kYXRhJywgcmVzLmRhdGEuZGF0YSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3RvcmUuY29tbWl0KCdsb2dpbicsIHJlcy5kYXRhLmRhdGEubmlja25hbWUpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoJ2xvZ2lubXNnJywgcmVzLmRhdGEuZGF0YSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8wIOWVhuWutuerryAgMSDnlKjmiLfnq68gIDLmmbrog73lronoo4Xnq69cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ3N0b3JlLnhjeF9zdGF0dXMnKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhzdG9yZS5zdGF0ZS54Y3hfc3RhdHVzKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZihudW09PTEpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEuaXNfZW5naW5lZXIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYocmVzLmRhdGEuZGF0YS5pc19vd25lcj09MSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdG9yZS5jb21taXQoJ3NldF94Y3gnLCAxKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmKHJlcy5kYXRhLmRhdGEuaXNfZW5naW5lZXI9PTEpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3RvcmUuY29tbWl0KCdzZXRfeGN4JywgMilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZihyZXMuZGF0YS5kYXRhLmlzX3NlbGxlcj09MSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdG9yZS5jb21taXQoJ3NldF94Y3gnLCAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBpbSBsb2dpblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZihudW09PTEpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTon55m75b2V5oiQ5YqfJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQudHJpZ2dlcih7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgdHlwZTondGVzdCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgcGFnZTonL3BhZ2VzL2luZGV4L2luZGV4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAvL29iauWSjHRlc3TmmK/kuL7nmoTkvovlrZDvvIzpmo/mhI/llaXpg73ooYzvvIzov5nkuKrkvKDov4fljrvlnKhvbuS4reeahGFyZ3PkuK3pg73lj6/ku6Xojrflj5bliLBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBvYmo6e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICB0ZXN0OntcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdsb2dpbm1zZyc6IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIHN1Y2Nlc3M6ZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIC8vZGF0YeS4um9u5Lit6L+U5Zue55qE5pWw5o2uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSwxMDAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sMTUwMClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQudHJpZ2dlcih7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIHR5cGU6J3Rlc3QnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBwYWdlOicvcGFnZXMvaW5kZXgvaW5kZXgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAvL29iauWSjHRlc3TmmK/kuL7nmoTkvovlrZDvvIzpmo/mhI/llaXpg73ooYzvvIzov5nkuKrkvKDov4fljrvlnKhvbuS4reeahGFyZ3PkuK3pg73lj6/ku6Xojrflj5bliLBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgb2JqOntcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgdGVzdDp7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2xvZ2lubXNnJzogcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBzdWNjZXNzOmZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgLy9kYXRh5Li6b27kuK3ov5Tlm57nmoTmlbDmja5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0ICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ3VzZXJJbmZvJylcclxuXHQgICAgICAgICAgICAgICAgICAgICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCd0b2tlbicpXHJcblx0ICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5tc2cpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgaWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgdGl0bGU6IHJlcy5tc2csXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0aXRsZTogJ+eZu+W9leWksei0pScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdCAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFxyXG5cdCAgICAgICAgICAgICAgICAgIH0sXHJcblx0ICAgICAgICAgICAgICAgICAgZmFpbCgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0ICAgICAgICAgICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+eZu+W9leWksei0pSdcclxuXHQgICAgICAgICAgICAgICAgICAgIH0pXHJcblx0ICAgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICB9KVxyXG5cdCAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdFxyXG5cdCAgICB9ZWxzZXtcclxuXHRcdFx0ICB1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdCAgICB9XHJcblx0ICB9XHJcblx0fSlcclxufVxyXG4vLyDmiYvmnLrlj7fnmbvlvZVcclxuY29uc3QgbG9naW5fdGVsID0gZnVuY3Rpb24obnVtKSB7XHJcblx0dmFyIGRhdGFzXHJcblx0dmFyIHRlbFxyXG5cdHZhciBwYXNzd29yZFxyXG5cdGlmKHVuaS5nZXRTdG9yYWdlU3luYygndGVsJykpe1xyXG5cdFx0dGVsPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3RlbCcpXHJcblx0XHRwYXNzd29yZD0gdW5pLmdldFN0b3JhZ2VTeW5jKCdwYXNzd29yZCcpXHJcblx0XHRkYXRhcyA9IHtcclxuXHRcdFx0dXNlcm5hbWU6IHRlbCxcclxuXHRcdFx0cGFzc3dvcmQ6IHBhc3N3b3JkXHJcblx0XHR9XHJcblx0fWVsc2V7XHJcblx0XHRyZXR1cm5cclxuXHR9XHJcblx0XHJcblx0dmFyIGprdXJsID0gJy9taW5hcHAvbG9naW4nXHJcblx0UF9wb3N0KGprdXJsLCBkYXRhcykudGhlbihyZXMgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2cocmVzKVxyXG5cdFx0aWYgKHJlcy5jb2RlID09IDEpIHtcclxuXHRcdFx0dmFyIGRhdGFzID0gcmVzLmRhdGFcclxuXHRcdFx0Y29uc29sZS5sb2codHlwZW9mIGRhdGFzKVxyXG5cclxuXHRcdFx0aWYgKHR5cGVvZiBkYXRhcyA9PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdGRhdGFzID0gSlNPTi5wYXJzZShkYXRhcylcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zb2xlLmxvZygn55m75b2V5oiQ5YqfJylcclxuXHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCd0ZWwnLCB0ZWwpXHJcblx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygncGFzc3dvcmQnLCBwYXNzd29yZClcclxuXHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCd0b2tlbicsIGRhdGFzLnRva2VuKVxyXG5cdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ2xvZ2lubXNnJywgZGF0YXMpXHJcblx0XHRcdHN0b3JlLmNvbW1pdCgnbG9naW5kYXRhJywgZGF0YXMpXHJcblx0XHRcdHN0b3JlLmNvbW1pdCgnbG9naW4nLCBkYXRhcy51c2VybmFtZSlcclxuXHRcdFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdC8vIFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdC8vIFx0XHRkZWx0YTogMVxyXG5cdFx0XHQvLyBcdH0pXHJcblx0XHRcdC8vIH0sIDEwMDApXHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHJlcy5tc2cpIHtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdHRpdGxlOiByZXMubXNnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdHRpdGxlOiAn5pON5L2c5aSx6LSlJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KS5jYXRjaChlID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGUpXHJcblx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHR0aXRsZTogJ+aTjeS9nOWksei0pSdcclxuXHRcdH0pXHJcblx0fSlcclxufVxyXG5jb25zdCBzZXRVc2VybXNnPWZ1bmN0aW9uKGRhdGEpe1xyXG5cdHZhciBqa3VybD0nL3VzZXIvYW1lbmRJbmZvJ1xyXG5cdFxyXG5cdHBvc3Qoamt1cmwsIGRhdGEsXHJcblx0XHRmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHJcblx0XHRcdC8vIGlmIChyZXMuZGF0YS5jb2RlID09IDEpIHtcclxuXHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMSkge1xyXG5cdFx0XHRcdHZhciBkYXRhcyA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0eXBlb2YgZGF0YXMpXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBkYXRhcyA9PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdFx0ZGF0YXMgPSBKU09OLnBhcnNlKGRhdGFzKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR3eGxvZ2luKClcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOifmk43kvZzmiJDlip8nXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAocmVzLmRhdGEubXNnKSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHR0aXRsZTogcmVzLmRhdGEubXNnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+aTjeS9nOWksei0pSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZnVuY3Rpb24oZXJyKSB7XHJcblx0XHRcdHRoYXQuYnRua2c9MFxyXG5cdFx0XHRcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdHRpdGxlOiAn6I635Y+W5pWw5o2u5aSx6LSlJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcclxuXHRcdH1cclxuXHQpXHJcbn1cclxuXHJcbi8vIOS4iuS8oOWbvueJh1xyXG5jb25zdCB3eF91cGxvYWQgPSBmdW5jdGlvbih0eGltZykge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRtYXNrOiB0cnVlLFxyXG5cdFx0XHR0aXRsZTogJ+ato+WcqOS4iuS8oCdcclxuXHRcdH0pXHJcblxyXG5cdFx0dW5pLnVwbG9hZEZpbGUoe1xyXG5cdFx0XHR1cmw6IElQdXJsICsgJ21pbmFwcC91cGxvYWQtaW1nJyxcclxuXHRcdFx0ZmlsZVBhdGg6IHR4aW1nLFxyXG5cdFx0XHRuYW1lOiAnaW1nJyxcclxuXHRcdFx0Zm9ybURhdGE6IHtcclxuXHRcdFx0XHR0b2tlbjogdW5pLmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIHN1Y2Nlc3M6ICh1cGxvYWRGaWxlUmVzKSA9PiB7XHJcblx0XHRcdC8vIFx0Y29uc29sZS5sb2codXBsb2FkRmlsZVJlcy5kYXRhKTtcclxuXHRcdFx0Ly8gXHR2YXIgbmRhdGEgPSBKU09OLnBhcnNlKHVwbG9hZEZpbGVSZXMuZGF0YSlcclxuXHRcdFx0Ly8gXHRyZXNvbHZlKHVwbG9hZEZpbGVSZXMpXHJcblx0XHRcdC8vIH0sXHJcblx0XHRcdGNvbXBsZXRlOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0dW5pLnN0b3BQdWxsRG93blJlZnJlc2goKTsgLy/mhY7nlKhoaWRlTG9hZGluZyzkvJrlhbPpl613eC5zaG93VG9hc3TlvLnnqpdcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhg6ICX5pe2JHtEYXRlLm5vdygpIC0gdGltZVN0YXJ0fWApO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7IC8v6K+35rGC5oiQ5YqfXHJcblx0XHRcdFx0XHR2YXIgbmRhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhKVxyXG5cdFx0XHRcdFx0aWYgKG5kYXRhLmNvZGUgPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0c3RvcmUuY29tbWl0KCdsb2dvdXQnKVxyXG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2xvZ2luL2xvZ2luJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAobmRhdGEuY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdGlmIChuZGF0YS5tc2cpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogbmRhdGEubXNnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+aTjeS9nOWksei0pSdcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXNvbHZlKG5kYXRhKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZWplY3QocmVzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdH0pXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8g6YWN572u5o6l5Y+j6K+35rGC55qE5YWs5YWx5pa55rOVXHJcbmNvbnN0IGh0dHAgPSh7dXJsID0nJyxwYXJhbSA9e30sbWV0aG9kPScnLGhlYWRlcj17J2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnfX09e30pID0+e1xyXG4gIFxyXG4gIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcblx0XHRjb25zb2xlLmxvZygn6K+35rGCdXJs77yaJyArIGdldFVybCh1cmwpKTtcclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2coXCLor7fmsYLlpLTvvJpcIiwgaGVhZGVyKVxyXG5cdFx0Y29uc29sZS5sb2coXCJwYXJhbe+8mlwiLCBwYXJhbSlcclxuICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBnZXRVcmwodXJsKSxcclxuICAgICAgZGF0YTpwYXJhbSxcclxuICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgIGhlYWRlcjpoZWFkZXIsXHJcbiAgICAgIGNvbXBsZXRlOihyZXMpPT57XHJcbiAgICAgICAgICB1bmkuaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgIHVuaS5zdG9wUHVsbERvd25SZWZyZXNoKCk7Ly/mhY7nlKhoaWRlTG9hZGluZyzkvJrlhbPpl613eC5zaG93VG9hc3TlvLnnqpdcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGDogJfml7Yke0RhdGUubm93KCkgLSB0aW1lU3RhcnR9YCk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICBpZihyZXMuc3RhdHVzQ29kZSA9PTIwMCl7Ly/or7fmsYLmiJDlip9cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdFx0aWYocmVzLmRhdGEuY29kZT09LTEpe1xyXG5cdFx0XHRcdFx0XHRcdC8vIHN0b3JlLmNvbW1pdCgnbG9nb3V0JylcclxuXHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmw6Jy9wYWdlcy9sb2dpbi9sb2dpbidcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0XHR9ZWxzZSBpZihyZXMuZGF0YS5jb2RlPT0wJiZyZXMubXNnPT0n6K+35YWI55m75b2V6LSm5Y+3ficpe1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybDonL3BhZ2VzL2xvZ2luL2xvZ2luJ1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHRcdH1lbHNlIGlmKHJlcy5kYXRhLmNvZGU9PTApe1xyXG5cdFx0XHRcdFx0XHRcdGlmKHJlcy5kYXRhLm1zZyl7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6cmVzLmRhdGEubXNnXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOifmk43kvZzlpLHotKUnXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG4gICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJlamVjdChyZXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuLy8g6I635Y+WdXJsXHJcbmNvbnN0IGdldFVybCA9ICh1cmwpPT57XHJcblx0aWYoIXVybCl7XHJcblx0XHRyZXR1cm4gdXJsXHJcblx0fVxyXG5cdGlmKHVybC5zbGljZSgwLDEpID09IFwiL1wiKXtcclxuXHQgICAgY29uc29sZS5sb2codHJ1ZSk7XHJcblx0XHRcdHVybCA9IHVybC5zdWJzdHIoMSk7XHJcblx0fVxyXG4gIGlmKHVybC5pbmRleE9mKCc6Ly8nKT09IC0xKXtcclxuICAgIHVybCA9IElQdXJsICt1cmwgO1xyXG4gIH1cclxuICByZXR1cm4gdXJsO1xyXG59XHJcbi8v5pq06Zyy5Ye65Y676LCD55So55qE5pa55rOVXHJcbiBcclxuXHJcbi8vIGdldOaWueazlVxyXG5jb25zdCBQX2dldCA9ICh1cmwsIHBhcmFtID0ge30pID0+IHtcclxuXHRcdGlmKCFwYXJhbS5sb2FkX21vZGUpe1xyXG5cdFx0XHR3eC5zaG93TG9hZGluZyh7XHJcblx0XHRcdCAgdGl0bGU6ICfor7fmsYLkuK3vvIzor7fogJDlv4PnrYnlvoUuLi4nLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuICAgIHJldHVybiBodHRwKHtcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgcGFyYW0sXHJcblx0XHRcdFx0bWV0aG9kOiAnR0VUJ1xyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgUF9wb3N0ID0gKHVybCwgcGFyYW0gPSB7fSkgPT4ge1xyXG4gICAgcmV0dXJuIGh0dHAoe1xyXG4gICAgICAgIHVybCxcclxuICAgICAgICBwYXJhbSxcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBQX3B1dCA9ICh1cmwsIHBhcmFtID0ge30pID0+IHtcclxuICAgIHJldHVybiBodHRwKHtcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgcGFyYW0sXHJcbiAgICAgICAgbWV0aG9kOiAncHV0J1xyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgUF9kZWxldGUgPSAodXJsLCBwYXJhbSA9IHt9KSA9PiB7XHJcbiAgICByZXR1cm4gaHR0cCh7XHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIHBhcmFtLFxyXG4gICAgICAgIG1ldGhvZDogJ3B1dCdcclxuICAgIH0pXHJcbn1cclxuLy8gLy8g5Y2V5Liq6K+35rGCXHJcbi8vIHNlcnZpY2UuUF9nZXQoJy9jYXRlL2xpc3QnKS50aGVuKHJlcyA9PiB7XHJcbi8vIFx0Y29uc29sZS5sb2cocmVzKVxyXG4vLyB9KS5jYXRjaChlID0+IHtcclxuLy8gXHRjb25zb2xlLmxvZyhlKVxyXG4vLyB9KVxyXG5cclxuLy8gLy8g5LiA5Liq6aG16Z2i5aSa5Liq6K+35rGCXHJcbi8vIFByb21pc2UuYWxsKFtcclxuLy8gICBzZXJ2aWNlLlBfZ2V0KCcvY2F0ZS9saXN0JyksXHJcbi8vICAgc2VydmljZS5QX2dldChgZGV0YWlsLyR7aWR9YClcclxuLy8gXSkudGhlbihyZXN1bHQgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuLy8gfSkuY2F0Y2goZSA9PiB7XHJcbi8vICAgY29uc29sZS5sb2coZSlcclxuLy8gfSlcclxuY29uc3QgZ2V0aW1nPWZ1bmN0aW9uIChpbWcpe1xyXG5cdC8vIHJldHVybiBpbWdcclxuXHRcclxuXHRcclxuXHRcclxuXHRpZighaW1nKSByZXR1cm5cclxuXHQvLyBjb25zb2xlLmxvZyhpbWd1cmwraW1nKVxyXG5cdGlmKGltZy5pbmRleE9mKCc6Ly8nKT09IC0xKXtcclxuXHQgIGltZyA9IGltZ3VybCtpbWdcclxuXHR9XHJcblx0cmV0dXJuIGltZ1xyXG59XHJcbmNvbnN0IGdldGltZ2Fycj1mdW5jdGlvbiAoaW1ncyx0eXBlKXtcclxuXHRpZighaW1ncykgcmV0dXJuXHJcblx0aWYoIXR5cGUpe1xyXG5cdFx0dHlwZT0nLCdcclxuXHR9XHJcblx0aW1ncz1pbWdzLnNwbGl0KHR5cGUpXHJcblx0Ly8gY29uc29sZS5sb2coaW1ndXJsK2ltZylcclxuXHR2YXIgbmV3aW1ncz1bXVxyXG5cdGZvcih2YXIgaT0wO2k8aW1ncy5sZW5ndGg7aSsrKXtcclxuXHRcdHZhciBpbWc9aW1nc1tpXVxyXG5cdFx0aWYoaW1nLmluZGV4T2YoJzovLycpPT0gLTEpe1xyXG5cdFx0ICBpbWcgPSBpbWd1cmwraW1nXHJcblx0XHR9XHJcblx0XHRuZXdpbWdzLnB1c2goaW1nKVxyXG5cdH1cclxuXHQvLyBjb25zb2xlLmxvZyhuZXdpbWdzKVxyXG5cdHJldHVybiBuZXdpbWdzXHJcbn1cclxuY29uc3QgZ2V0dGltZT1mdW5jdGlvbiAobWope1xyXG5cdGlmKCFtaikge1xyXG5cdFx0cmV0dXJuIHt9XHJcblx0fVxyXG5cdC8vIC8vIGNvbnNvbGUubG9nKG1qLmluZGV4T2YoJ+S7iuWkqScpIT0tMSlcclxuXHQvLyBpZihtai5pbmRleE9mKCfku4rlpKknKSE9LTEpe1xyXG5cdC8vIFx0cmV0dXJuIHtcclxuXHQvLyBcdFx0dHlwZToyLFxyXG5cdFx0XHRcclxuXHQvLyBcdFx0dGltZTptalxyXG5cdC8vIFx0fVxyXG5cdC8vIH1cclxuXHQvLyBtaiA9IG1qLnJlcGxhY2UoLy0vZywnLycpXHJcblx0dmFyIG50aW1lPW5ldyBEYXRlKG1qKjEwMDApXHJcblx0Ly8gY29uc29sZS5sb2cobnRpbWUpXHJcblx0dmFyIG5feWVhciA9IG50aW1lLmdldEZ1bGxZZWFyKCk7XHJcblx0dmFyIG5fbW9udGggPSBudGltZS5nZXRNb250aCgpICsgMTtcclxuXHR2YXIgbl9kYXRlID0gbnRpbWUuZ2V0RGF0ZSgpO1xyXG5cdHZhciBuX2hvdXIgPSBudGltZS5nZXRIb3VycygpO1xyXG5cdHZhciBuX21pbnV0ZSA9IG50aW1lLmdldE1pbnV0ZXMoKTtcclxuXHRcclxuXHR2YXIgdGltZSA9IG5ldyBEYXRlKCk7XHJcblx0dmFyIHllYXIgPSB0aW1lLmdldEZ1bGxZZWFyKCk7XHJcblx0dmFyIG1vbnRoID0gdGltZS5nZXRNb250aCgpICsgMTtcclxuXHR2YXIgZGF0ZSA9IHRpbWUuZ2V0RGF0ZSgpO1xyXG5cdHZhciBob3VyID0gdGltZS5nZXRIb3VycygpO1xyXG5cdHZhciBtaW51dGUgPSB0aW1lLmdldE1pbnV0ZXMoKTtcclxuXHQvLyBuX21vbnRoPW5fbW9udGg8MTA/ICcwJytuX21vbnRoOm5fbW9udGhcclxuXHRuX2RhdGU9bl9kYXRlPDEwPyAnMCcrbl9kYXRlOm5fZGF0ZVxyXG5cdG5faG91cj1uX2hvdXI8MTA/ICcwJytuX2hvdXI6bl9ob3VyXHJcblx0bl9taW51dGU9bl9taW51dGU8MTA/ICcwJytuX21pbnV0ZTpuX21pbnV0ZVxyXG5cdGlmKG5feWVhcj09eWVhcil7XHJcblx0XHRcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHR5cGU6MSxcclxuXHRcdFx0eWVhcjpuX3llYXIsXHJcblx0XHRcdG1vbnRoOm5fbW9udGgsXHJcblx0XHRcdGRhdGU6bl9kYXRlLFxyXG5cdFx0XHRob3VyOm5faG91cixcclxuXHRcdFx0bWludXRlOm5fbWludXRlLFxyXG5cdFx0XHR0aW1lOifku4rlpKkgJytuX2hvdXIrJzonK25fbWludXRlXHJcblx0XHR9XHJcblx0fWVsc2V7XHJcblx0XHRcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHR5cGU6MixcclxuXHRcdFx0eWVhcjpuX3llYXIsXHJcblx0XHRcdG1vbnRoOm5fbW9udGgsXHJcblx0XHRcdGRhdGU6bl9kYXRlLFxyXG5cdFx0XHRob3VyOm5faG91cixcclxuXHRcdFx0bWludXRlOm5fbWludXRlLFxyXG5cdFx0XHR0aW1lOm5feWVhcisnLScrbl9tb250aCsnLScrbl9kYXRlXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuY29uc3QgZ2V0X2Z3Yj1mdW5jdGlvbiAoc3RyKXtcclxuXHRpZighc3RyKXtcclxuXHRcdHJldHVyblxyXG5cdH1cclxuXHRcdFx0XHRzdHIgPSBzdHIgLy8gLnJlcGxhY2UoLzxwKFtcXHNcXHdcIj1cXC9cXC46O10rKSgoPzooc3R5bGU9XCJbXlwiXStcIikpKS9pZywgJzxwJylcclxuXHRcdFx0XHQgICAgICAgICAgLnJlcGxhY2UoLzxwKFtcXHNcXHdcIi09XFwvXFwuOjtdKykoKD86KGNsYXNzPVwiW15cIl0rXCIpKSkvaWcsICc8cCAkMScpXHJcblx0XHRcdFx0ICAgICAgICAgIC5yZXBsYWNlKC88cChbXFxzXFx3XCItPVxcL1xcLjo7XSspL2lnLCAnPHAkMSBjbGFzcz1cInhjeF9md2JfcFwiJylcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gLnJlcGxhY2UoLzxkaXYoW1xcc1xcd1wiPVxcL1xcLjo7XSspKCg/OihzdHlsZT1cIlteXCJdK1wiKSkpL2lnLCAnPGRpdicpXHJcblx0XHRcdFx0ICAgICAgICAgIC5yZXBsYWNlKC88ZGl2KFtcXHNcXHdcIi09XFwvXFwuOjtdKykoKD86KGNsYXNzPVwiW15cIl0rXCIpKSkvaWcsICc8ZGl2ICQxJylcclxuXHRcdFx0XHQgICAgICAgICAgLnJlcGxhY2UoLzxkaXYoW1xcc1xcd1wiLT1cXC9cXC46O10rKS9pZywgJzxkaXYkMSBjbGFzcz1cInhjeF9md2JfZGl2XCInKVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCAgICAgICAgICAvLyAucmVwbGFjZSgvPGltZyhbXFxzXFx3XCItPVxcL1xcLjo7XSspKCg/OihoZWlnaHQ9XCJbXlwiXStcIikpKS9pZywgJzxpbWcgJDEnKVxyXG5cdFx0XHRcdCAgICAgICAgICAvLyAucmVwbGFjZSgvPGltZyhbXFxzXFx3XCItPVxcL1xcLjo7XSspKCg/Oih3aWR0aD1cIlteXCJdK1wiKSkpL2lnLCAnPGltZyAkMScpXHJcblx0XHRcdFx0ICAgICAgICAgIC8vIC5yZXBsYWNlKC88aW1nKFtcXHNcXHdcIi09XFwvXFwuOjtdKykoKD86KHN0eWxlPVwiW15cIl0rXCIpKSkvaWcsICc8aW1nICQxJylcclxuXHRcdFx0XHQgICAgICAgICAgLnJlcGxhY2UoLzxpbWcoW1xcc1xcd1wiLT1cXC9cXC46O10rKSgoPzooYWx0PVwiW15cIl0rXCIpKSkvaWcsICc8aW1nICQxJylcclxuXHRcdFx0XHQgICAgICAgICAgLnJlcGxhY2UoLzxpbWcoW1xcc1xcd1wiLT1cXC9cXC46O10rKSgoPzooY2xhc3M9XCJbXlwiXStcIikpKS9pZywgJzxpbWcgJDEnKVxyXG5cdFx0XHRcdCAgICAgICAgICAucmVwbGFjZSgvPGltZyhbXFxzXFx3XCItPVxcL1xcLjo7XSspL2lnLCAnPGltZyQxIGNsYXNzPVwieGN4X2Z3Yl9pbWdcIicpXHJcblx0XHRcdFx0cmV0dXJuIHN0clxyXG5cdFx0XHR9XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRnZXRVc2VycyxcclxuXHRhZGRVc2VyLFxyXG5cdGdldCxcclxuXHRwb3N0LFxyXG5cdElQdXJsLFxyXG5cdG1hcF9rZXksXHJcblx0aW1ndXJsLFxyXG5cdGdvbG9naW4sXHJcblx0anVtcCxcclxuXHRjYWxsLFxyXG5cdHd4bG9naW4sXHJcblx0bG9naW5fdGVsLFxyXG5cdHNldFVzZXJtc2csXHJcblx0UF9nZXQsXHJcblx0UF9wb3N0LFxyXG5cdFBfcHV0LFxyXG5cdFBfZGVsZXRlLFxyXG5cdGdldHRpbWUsXHJcblx0Z2V0aW1nLFxyXG5cdGdldGltZ2FycixcclxuXHRwdmVpbWcsXHJcblx0Z2V0X2Z3YixcclxuXHR3eF91cGxvYWRcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!******************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/store/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 10));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n_vue.default.use(_vuex.default);\n\nvar store = new _vuex.default.Store({\n  state: {\n    /**\r\n            * 是否需要强制登录\r\n            */\n    forcedLogin: false,\n    hasLogin: false,\n    platform: '',\n    userName: \"游客\",\n    loginDatas: {\n      avatarurl: 'http://51daiyan.test.upcdn.net/resource/api/img/20200716/3eb26483a34058663c1adf01cf90901d.png',\n      nickname: '刘明',\n      tel: '1786352362',\n      gs: '智慧家物联网科技有限公司' },\n\n\n    company: '',\n    uid: '',\n    phone: '',\n    token: '',\n    laheiArr: [],\n    uuid: '',\n\n\n\n    new_xz: [], //批量操作\n    new_problem: '', //新问题\n    ls_prodata: '',\n    ls_pro_yh: '',\n    fj_data: '',\n    bj_prodata: '',\n\n    zn: \"\", //新手指南\n    address: {}, //当前坐标\n\n\n    wheight: '',\n    NCount: 0 },\n\n  mutations: {\n    setCount: function setCount(state, NCount) {//未读消息数量\n      state.NCount = NCount || 0;\n    },\n    setAddress: function setAddress(state, provider) {//当前坐标\n      state.address = provider;\n    },\n    setHeight: function setHeight(state, height) {//视窗高度\n      state.wheight = height || 750;\n    },\n    set_xcx: function set_xcx(state, xcx_status) {\n      var tip_text = '正在切换至';\n      if (xcx_status == 0) {\n        if (state.loginDatas.is_seller != 1) {\n          uni.showToast({\n            icon: 'none',\n            title: '暂无权限' });\n\n          return;\n        }\n        tip_text += '商家端';\n      }\n      if (xcx_status == 1) {\n        if (state.loginDatas.is_owner != 1) {\n          uni.showToast({\n            icon: 'none',\n            title: '暂无权限' });\n\n          return;\n        }\n        tip_text += '用户端';\n      }\n      if (xcx_status == 2) {\n        if (state.loginDatas.is_engineer != 1) {\n          uni.showToast({\n            icon: 'none',\n            title: '暂无权限' });\n\n          return;\n        }\n        tip_text += '智能安装端';\n      }\n      uni.showToast({\n        icon: 'none',\n        title: tip_text });\n\n      state.xcx_status = xcx_status || 0;\n      uni.switchTab({\n        url: '/pages/index/index' });\n\n    },\n    login: function login(state, userName) {\n      state.userName = userName || '新用户';\n      state.hasLogin = true;\n      __f__(\"log\", userName, \" at store/index.js:99\");\n      __f__(\"log\", state.userName, \" at store/index.js:100\");\n    },\n    lahei: function lahei(state, id) {\n      // state.userName = userName || '新用户';\n      // state.hasLogin = true;\n      state.laheiArr.push(id);\n      __f__(\"log\", state.laheiArr, \" at store/index.js:106\");\n    },\n    logindata: function logindata(state, _logindata) {\n      state.loginDatas = _logindata || '';\n      _vue.default.set(state, 'loginDatas', _logindata);\n      // state.company=logindata.company\n      // state.uid= logindata.id\n      // state.phone= logindata.phone\n      // state.token= logindata.token\n      __f__(\"log\", _logindata, \" at store/index.js:115\");\n      __f__(\"log\", state.loginDatas, \" at store/index.js:116\");\n    },\n    setplatform: function setplatform(state, platform) {\n      state.platform = platform || 'android';\n    },\n    logout: function logout(state) {\n      state.userName = \"游客\";\n      state.hasLogin = false;\n      uni.clearStorageSync();\n\n\n    },\n\n    // ****************************************\n    //评论操作\n    setnew_xz: function setnew_xz(state, new_xz) {\n      state.new_xz = new_xz || [];\n    },\n    //新题\n    setnew_problem: function setnew_problem(state, new_problem) {\n      state.new_problem = new_problem || [];\n    } } });var _default =\n\n\n\nstore;exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsInN0b3JlIiwiU3RvcmUiLCJzdGF0ZSIsImZvcmNlZExvZ2luIiwiaGFzTG9naW4iLCJwbGF0Zm9ybSIsInVzZXJOYW1lIiwibG9naW5EYXRhcyIsImF2YXRhcnVybCIsIm5pY2tuYW1lIiwidGVsIiwiZ3MiLCJjb21wYW55IiwidWlkIiwicGhvbmUiLCJ0b2tlbiIsImxhaGVpQXJyIiwidXVpZCIsIm5ld194eiIsIm5ld19wcm9ibGVtIiwibHNfcHJvZGF0YSIsImxzX3Byb195aCIsImZqX2RhdGEiLCJial9wcm9kYXRhIiwiem4iLCJhZGRyZXNzIiwid2hlaWdodCIsIk5Db3VudCIsIm11dGF0aW9ucyIsInNldENvdW50Iiwic2V0QWRkcmVzcyIsInByb3ZpZGVyIiwic2V0SGVpZ2h0IiwiaGVpZ2h0Iiwic2V0X3hjeCIsInhjeF9zdGF0dXMiLCJ0aXBfdGV4dCIsImlzX3NlbGxlciIsInVuaSIsInNob3dUb2FzdCIsImljb24iLCJ0aXRsZSIsImlzX293bmVyIiwiaXNfZW5naW5lZXIiLCJzd2l0Y2hUYWIiLCJ1cmwiLCJsb2dpbiIsImxhaGVpIiwiaWQiLCJwdXNoIiwibG9naW5kYXRhIiwic2V0Iiwic2V0cGxhdGZvcm0iLCJsb2dvdXQiLCJjbGVhclN0b3JhZ2VTeW5jIiwic2V0bmV3X3h6Iiwic2V0bmV3X3Byb2JsZW0iXSwibWFwcGluZ3MiOiJvSUFBQTtBQUNBLHdFOztBQUVBQSxhQUFJQyxHQUFKLENBQVFDLGFBQVI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLElBQUlELGNBQUtFLEtBQVQsQ0FBZTtBQUM1QkMsT0FBSyxFQUFFO0FBQ047OztBQUdBQyxlQUFXLEVBQUUsS0FKUDtBQUtOQyxZQUFRLEVBQUUsS0FMSjtBQU1OQyxZQUFRLEVBQUMsRUFOSDtBQU9OQyxZQUFRLEVBQUUsSUFQSjtBQVFOQyxjQUFVLEVBQUM7QUFDVEMsZUFBUyxFQUFD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LElBQUUsRUFBakM7QUFDQSxLQTVGUyxFQXZDaUIsRUFBZixDQUFkLEM7Ozs7QUF1SWVuQixLIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXHJcblxyXG5WdWUudXNlKFZ1ZXgpXHJcblxyXG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcclxuXHRzdGF0ZToge1xyXG5cdFx0LyoqXHJcblx0XHQgKiDmmK/lkKbpnIDopoHlvLrliLbnmbvlvZVcclxuXHRcdCAqL1xyXG5cdFx0Zm9yY2VkTG9naW46IGZhbHNlLFxyXG5cdFx0aGFzTG9naW46IGZhbHNlLFxyXG5cdFx0cGxhdGZvcm06JycsXHJcblx0XHR1c2VyTmFtZTogXCLmuLjlrqJcIixcclxuXHRcdGxvZ2luRGF0YXM6e1xyXG5cdFx0XHRcdGF2YXRhcnVybDonaHR0cDovLzUxZGFpeWFuLnRlc3QudXBjZG4ubmV0L3Jlc291cmNlL2FwaS9pbWcvMjAyMDA3MTYvM2ViMjY0ODNhMzQwNTg2NjNjMWFkZjAxY2Y5MDkwMWQucG5nJyxcclxuXHRcdFx0XHRuaWNrbmFtZTon5YiY5piOJyxcclxuXHRcdFx0XHR0ZWw6JzE3ODYzNTIzNjInLFxyXG5cdFx0XHRcdGdzOifmmbrmhaflrrbnianogZTnvZHnp5HmioDmnInpmZDlhazlj7gnXHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdGNvbXBhbnk6JycsXHJcblx0XHR1aWQ6JycsXHJcblx0XHRwaG9uZTonJyxcclxuXHRcdHRva2VuOicnLFxyXG5cdFx0bGFoZWlBcnI6W10sXHJcblx0XHR1dWlkOicnLFxyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0bmV3X3h6OltdLCAgICAvL+aJuemHj+aTjeS9nFxyXG5cdFx0bmV3X3Byb2JsZW06JycgLC8v5paw6Zeu6aKYXHJcblx0XHRsc19wcm9kYXRhOicnLFxyXG5cdFx0bHNfcHJvX3loOicnLFxyXG5cdFx0ZmpfZGF0YTonJyxcclxuXHRcdGJqX3Byb2RhdGE6JycsXHJcblx0XHRcclxuXHRcdHpuOlwiXCIgLC8v5paw5omL5oyH5Y2XXHJcblx0XHRhZGRyZXNzOnt9LC8v5b2T5YmN5Z2Q5qCHXHJcblx0XHRcclxuXHRcdFxyXG5cdFx0d2hlaWdodDonJyxcclxuXHRcdE5Db3VudDowXHJcblx0fSxcclxuXHRtdXRhdGlvbnM6IHtcclxuXHRcdHNldENvdW50KHN0YXRlLCBOQ291bnQpIHsgLy/mnKror7vmtojmga/mlbDph49cclxuXHRcdFx0c3RhdGUuTkNvdW50ID0gTkNvdW50fHwwO1xyXG5cdFx0fSxcclxuXHRcdHNldEFkZHJlc3Moc3RhdGUsIHByb3ZpZGVyKSB7IC8v5b2T5YmN5Z2Q5qCHXHJcblx0XHRcdHN0YXRlLmFkZHJlc3MgPSBwcm92aWRlcjtcclxuXHRcdH0sXHJcblx0XHRzZXRIZWlnaHQoc3RhdGUsIGhlaWdodCkgeyAvL+inhueql+mrmOW6plxyXG5cdFx0XHRzdGF0ZS53aGVpZ2h0ID0gaGVpZ2h0fHw3NTA7XHJcblx0XHR9LFxyXG5cdFx0c2V0X3hjeChzdGF0ZSwgeGN4X3N0YXR1cyl7XHJcblx0XHRcdHZhciB0aXBfdGV4dD0n5q2j5Zyo5YiH5o2i6IezJ1xyXG5cdFx0XHRpZih4Y3hfc3RhdHVzPT0wKXtcclxuXHRcdFx0XHRpZihzdGF0ZS5sb2dpbkRhdGFzLmlzX3NlbGxlciE9MSl7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5pqC5peg5p2D6ZmQJ1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGlwX3RleHQrPSfllYblrrbnq68nXHJcblx0XHRcdH1cclxuXHRcdFx0aWYoeGN4X3N0YXR1cz09MSl7XHJcblx0XHRcdFx0aWYoc3RhdGUubG9naW5EYXRhcy5pc19vd25lciE9MSl7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5pqC5peg5p2D6ZmQJ1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGlwX3RleHQrPSfnlKjmiLfnq68nXHJcblx0XHRcdH1cclxuXHRcdFx0aWYoeGN4X3N0YXR1cz09Mil7XHJcblx0XHRcdFx0aWYoc3RhdGUubG9naW5EYXRhcy5pc19lbmdpbmVlciE9MSl7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5pqC5peg5p2D6ZmQJ1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGlwX3RleHQrPSfmmbrog73lronoo4Xnq68nXHJcblx0XHRcdH1cclxuXHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0dGl0bGU6dGlwX3RleHRcclxuXHRcdFx0fSlcclxuXHRcdFx0c3RhdGUueGN4X3N0YXR1cyA9IHhjeF9zdGF0dXMgfHwgMDtcclxuXHRcdFx0dW5pLnN3aXRjaFRhYih7XHJcblx0XHRcdFx0dXJsOicvcGFnZXMvaW5kZXgvaW5kZXgnXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0bG9naW4oc3RhdGUsIHVzZXJOYW1lKSB7XHJcblx0XHRcdHN0YXRlLnVzZXJOYW1lID0gdXNlck5hbWUgfHwgJ+aWsOeUqOaItyc7XHJcblx0XHRcdHN0YXRlLmhhc0xvZ2luID0gdHJ1ZTtcclxuXHRcdFx0Y29uc29sZS5sb2codXNlck5hbWUpXHJcblx0XHRcdGNvbnNvbGUubG9nKHN0YXRlLnVzZXJOYW1lKVxyXG5cdFx0fSxcclxuXHRcdGxhaGVpKHN0YXRlLCBpZCkge1xyXG5cdFx0XHQvLyBzdGF0ZS51c2VyTmFtZSA9IHVzZXJOYW1lIHx8ICfmlrDnlKjmiLcnO1xyXG5cdFx0XHQvLyBzdGF0ZS5oYXNMb2dpbiA9IHRydWU7XHJcblx0XHRcdHN0YXRlLmxhaGVpQXJyLnB1c2goaWQpXHJcblx0XHRcdGNvbnNvbGUubG9nKHN0YXRlLmxhaGVpQXJyKVxyXG5cdFx0fSxcclxuXHRcdGxvZ2luZGF0YShzdGF0ZSwgbG9naW5kYXRhKSB7XHJcblx0XHRcdHN0YXRlLmxvZ2luRGF0YXMgPSBsb2dpbmRhdGEgfHwgJyc7XHJcblx0XHRcdFZ1ZS5zZXQoc3RhdGUsJ2xvZ2luRGF0YXMnLGxvZ2luZGF0YSlcclxuXHRcdFx0Ly8gc3RhdGUuY29tcGFueT1sb2dpbmRhdGEuY29tcGFueVxyXG5cdFx0XHQvLyBzdGF0ZS51aWQ9IGxvZ2luZGF0YS5pZFxyXG5cdFx0XHQvLyBzdGF0ZS5waG9uZT0gbG9naW5kYXRhLnBob25lXHJcblx0XHRcdC8vIHN0YXRlLnRva2VuPSBsb2dpbmRhdGEudG9rZW5cclxuXHRcdFx0Y29uc29sZS5sb2cobG9naW5kYXRhKVxyXG5cdFx0XHRjb25zb2xlLmxvZyhzdGF0ZS5sb2dpbkRhdGFzKVxyXG5cdFx0fSxcclxuXHRcdHNldHBsYXRmb3JtKHN0YXRlLCBwbGF0Zm9ybSkge1xyXG5cdFx0XHRzdGF0ZS5wbGF0Zm9ybSA9IHBsYXRmb3JtIHx8ICdhbmRyb2lkJztcclxuXHRcdH0sXHJcblx0XHRsb2dvdXQoc3RhdGUpIHtcclxuXHRcdFx0c3RhdGUudXNlck5hbWUgPSBcIua4uOWuolwiO1xyXG5cdFx0XHRzdGF0ZS5oYXNMb2dpbiA9IGZhbHNlO1xyXG5cdFx0XHR1bmkuY2xlYXJTdG9yYWdlU3luYygpXHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdC8v6K+E6K665pON5L2cXHJcblx0XHRzZXRuZXdfeHooc3RhdGUsIG5ld194eikge1xyXG5cdFx0XHRzdGF0ZS5uZXdfeHogPSBuZXdfeHp8fFtdO1xyXG5cdFx0fSxcclxuXHRcdC8v5paw6aKYXHJcblx0XHRzZXRuZXdfcHJvYmxlbShzdGF0ZSwgbmV3X3Byb2JsZW0pIHtcclxuXHRcdFx0c3RhdGUubmV3X3Byb2JsZW0gPSBuZXdfcHJvYmxlbXx8W10gO1xyXG5cdFx0fSxcclxuXHR9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

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
                          staticClass: ["add_bj_wz"],
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
                              staticClass: [
                                "bj_type_li_text",
                                "bj_type_li_text_cur"
                              ],
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
                              staticClass: [
                                "bj_type_li_text",
                                "bj_type_li_text_cur"
                              ],
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
                              staticClass: [
                                "bj_type_li_text",
                                "bj_type_li_text_cur"
                              ],
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
                              staticClass: [
                                "bj_type_li_text",
                                "bj_type_li_text_cur"
                              ],
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
                              staticClass: [
                                "bj_type_li_text",
                                "bj_type_li_text_cur"
                              ],
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
                            _vm.tk_show_sx_cur == 0
                              ? "bj_type_li_cur"
                              : _vm.datas.search_state,
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
              attrs: { src: "/static/images/index_btn1.png", mode: "aspectFit" }
            }),
            _c(
              "text",
              {
                staticClass: ["map_btn_li_text"],
                appendAsTree: true,
                attrs: { append: "tree" }
              },
              [_vm._v("刷新")]
            )
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
            _c(
              "text",
              {
                staticClass: ["map_btn_li_text"],
                appendAsTree: true,
                attrs: { append: "tree" }
              },
              [_vm._v("标记")]
            )
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
            _c(
              "text",
              {
                staticClass: ["map_btn_li_text"],
                appendAsTree: true,
                attrs: { append: "tree" }
              },
              [_vm._v("筛选")]
            )
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
                      [_vm._v("补充搜索信息")]
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
                _vm.tk_show1_num != 5
                  ? _c("input", {
                      staticClass: ["bz_int_tk"],
                      attrs: {
                        type: "text",
                        value: "",
                        placeholder: "备注",
                        value: _vm.zb_bz
                      },
                      on: {
                        input: function($event) {
                          _vm.zb_bz = $event.target.attr.value
                        }
                      }
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
                                _vm.set_pos_fuc(
                                  0,
                                  "/static/images/huozai.png",
                                  "火灾"
                                )
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
                                _vm.set_pos_fuc(
                                  1,
                                  "/static/images/dianli.png",
                                  "电力"
                                )
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
                                _vm.set_pos_fuc(
                                  2,
                                  "/static/images/luzhang.png",
                                  "路障"
                                )
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
                                _vm.set_pos_fuc(
                                  3,
                                  "/static/images/chehuo.png",
                                  "车祸"
                                )
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
                                _vm.set_pos_fuc(
                                  4,
                                  "/static/images/weixianwu.png",
                                  "危化品"
                                )
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
                                _vm.set_pos_fuc(
                                  5,
                                  "/static/images/shuizai.png",
                                  "水灾"
                                )
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
                                  _vm.set_pos_fuc(
                                    0,
                                    "/static/images/ml_zhihui.png",
                                    "指挥"
                                  )
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
                                  _vm.set_pos_fuc(
                                    1,
                                    "/static/images/ml_jihe.png",
                                    "集结"
                                  )
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
                                  _vm.set_pos_fuc(
                                    2,
                                    "/static/images/ml_yiliao.png",
                                    "医疗"
                                  )
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
                                  _vm.set_pos_fuc(
                                    3,
                                    "/static/images/ml_tingche.png",
                                    "停车"
                                  )
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
                                  _vm.set_pos_fuc(
                                    0,
                                    "/static/images/sk_1.png",
                                    "停车"
                                  )
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
                                  _vm.set_pos_fuc(
                                    1,
                                    "/static/images/sk_2.png",
                                    "确认生还者"
                                  )
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
                                  _vm.set_pos_fuc(
                                    2,
                                    "/static/images/sk_3.png",
                                    "确认遇难者"
                                  )
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
                                  _vm.set_pos_fuc(
                                    3,
                                    "/static/images/sk_4.png",
                                    "移除生还者"
                                  )
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
                                  _vm.set_pos_fuc(
                                    4,
                                    "/static/images/sk_5.png",
                                    "移除遇难者"
                                  )
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
                                  _vm.set_pos_fuc(
                                    5,
                                    "/static/images/sk_6.png",
                                    "最后一次看到"
                                  )
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
                                _vm.set_pos_fuc(
                                  0,
                                  "/static/images/ph_1.png",
                                  "低风险"
                                )
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
                                _vm.set_pos_fuc(
                                  1,
                                  "/static/images/ph_2.png",
                                  "中风险"
                                )
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
                                _vm.set_pos_fuc(
                                  2,
                                  "/static/images/ph_3.png",
                                  "高风险"
                                )
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
                _vm.tk_show1_num == 5
                  ? _c("view", { staticClass: ["bj_list_box"] }, [
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
                                {
                                  staticClass: ["search_mbox_d2_inttext"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [_vm._v(_vm._s(_vm.time ? _vm.time : "进入"))]
                              )
                            ]
                          ),
                          _c("text", {
                            staticClass: ["search_mbox_d2_text"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
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
                                {
                                  staticClass: ["search_mbox_d2_inttext"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [_vm._v(_vm._s(_vm.time1 ? _vm.time1 : "撤出"))]
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
                              placeholder: "团队名称",
                              value: _vm.team_name
                            },
                            on: {
                              input: function($event) {
                                _vm.team_name = $event.target.attr.value
                              }
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
                                    _vm.search_type_fuc(
                                      2,
                                      "/static/images/search_type_032.png"
                                    )
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
                                    _vm.search_type_fuc(
                                      3,
                                      "/static/images/search_type_092.png"
                                    )
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
                                    _vm.search_type_fuc(
                                      1,
                                      "/static/images/search_type_062.png"
                                    )
                                  }
                                }
                              })
                            : _vm._e(),
                          _c("input", {
                            staticClass: ["search_mbox_d3_int"],
                            attrs: {
                              type: "text",
                              value: "",
                              placeholder: "危险类型",
                              value: _vm.danger_name
                            },
                            on: {
                              input: function($event) {
                                _vm.danger_name = $event.target.attr.value
                              }
                            }
                          })
                        ]),
                        _c("view", { staticClass: ["search_mbox_d4"] }, [
                          _c("input", {
                            staticClass: ["search_mbox_d4_int"],
                            attrs: {
                              type: "text",
                              value: "",
                              placeholder: "生还者数量",
                              value: _vm.be_num
                            },
                            on: {
                              input: function($event) {
                                _vm.be_num = $event.target.attr.value
                              }
                            }
                          })
                        ]),
                        _c("view", { staticClass: ["search_mbox_d4"] }, [
                          _c("input", {
                            staticClass: ["search_mbox_d4_int"],
                            attrs: {
                              type: "text",
                              value: "",
                              placeholder: "遇难者数量",
                              value: _vm.not_be_num
                            },
                            on: {
                              input: function($event) {
                                _vm.not_be_num = $event.target.attr.value
                              }
                            }
                          })
                        ])
                      ]),
                      _c("view", { staticClass: ["search_type_tip"] }, [
                        _c(
                          "text",
                          {
                            staticClass: ["search_type_tip_text"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
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
                          {
                            staticClass: ["search_type_tip_text"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
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
                          {
                            staticClass: ["search_type_tip_text"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
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
                          {
                            staticClass: ["search_type_tip_text"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [_vm._v("搜索完成")]
                        )
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
        : _vm._e(),
      _vm.tk_show_bjxq
        ? _c(
            "view",
            { staticClass: ["tk_popop"], on: { touchmove: _vm.test } },
            [
              _vm.bj_data.type_name != "搜索"
                ? _c(
                    "view",
                    {
                      staticClass: ["tk_main1"],
                      staticStyle: { padding: "0!important" }
                    },
                    [
                      _c("view", { staticClass: ["bj_user_msg"] }, [
                        _c("image", {
                          staticClass: ["bj_user_tx"],
                          attrs: {
                            src: _vm.getimg(_vm.bj_data.user_info.avatar),
                            mode: "aspectFill"
                          }
                        }),
                        _c(
                          "view",
                          { staticClass: ["flex_1", "bj_user_lxmsg"] },
                          [
                            _c(
                              "text",
                              {
                                staticClass: ["bj_user_name"],
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [_vm._v(_vm._s(_vm.bj_data.user_info.name))]
                            ),
                            _c(
                              "text",
                              {
                                staticClass: ["bj_user_tel"],
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [_vm._v(_vm._s(_vm.bj_data.user_info.username))]
                            )
                          ]
                        )
                      ]),
                      _c("view", { staticClass: ["bjxq_xq"] }, [
                        _c("view", { staticClass: ["bj_d1"] }, [
                          _c("image", {
                            staticClass: ["bj_d1_icon"],
                            attrs: {
                              src: _vm.getimg(_vm.bj_data.iconPath),
                              mode: "aspectFit"
                            }
                          }),
                          _c(
                            "text",
                            {
                              staticClass: ["bj_d1_name"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v(_vm._s(_vm.bj_data.type_name))]
                          )
                        ]),
                        _c("view", { staticClass: ["bj_d2"] }, [
                          _c("view", { staticClass: ["bj_d2_l"] }, [
                            _c(
                              "text",
                              {
                                staticClass: ["bj_d2_text"],
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [
                                _vm._v(
                                  "时间：" + _vm._s(_vm.bj_data.created_at)
                                )
                              ]
                            ),
                            _c(
                              "text",
                              {
                                staticClass: ["bj_d2_text"],
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [_vm._v("经度：" + _vm._s(_vm.bj_data.longitude))]
                            ),
                            _c(
                              "text",
                              {
                                staticClass: ["bj_d2_text"],
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [_vm._v("纬度：" + _vm._s(_vm.bj_data.latitude))]
                            )
                          ]),
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
                          attrs: {
                            type: "text",
                            value: "",
                            placeholder: "备注",
                            value: _vm.bj_data.comment
                          },
                          on: {
                            input: function($event) {
                              _vm.$set(
                                _vm.bj_data,
                                "comment",
                                $event.target.attr.value
                              )
                            }
                          }
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
                            _c(
                              "text",
                              {
                                staticStyle: { color: "#fff" },
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [_vm._v("更新")]
                            )
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
                            _c(
                              "text",
                              {
                                staticStyle: { color: "#fff" },
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [_vm._v("删除")]
                            )
                          ]
                        )
                      ])
                    ]
                  )
                : _c("view", { staticClass: ["tk_main"] }, [
                    _c("image", {
                      staticClass: ["add_bj_icon"],
                      attrs: {
                        src: _vm.getimg("/static/images/add_bj_icon.png"),
                        mode: "aspectFit"
                      }
                    }),
                    _vm.tk_show1_num == 5
                      ? _c(
                          "text",
                          {
                            staticClass: ["notetk_tit"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [_vm._v("补充搜索信息")]
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
                    _c("view", { staticClass: ["bj_list_box"] }, [
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
                                {
                                  staticClass: ["search_mbox_d2_inttext"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [_vm._v(_vm._s(_vm.time ? _vm.time : "进入"))]
                              )
                            ]
                          ),
                          _c("text", {
                            staticClass: ["search_mbox_d2_text"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
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
                                {
                                  staticClass: ["search_mbox_d2_inttext"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [_vm._v(_vm._s(_vm.time1 ? _vm.time1 : "撤出"))]
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
                              placeholder: "团队名称",
                              value: _vm.team_name
                            },
                            on: {
                              input: function($event) {
                                _vm.team_name = $event.target.attr.value
                              }
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
                                    _vm.search_type_fuc(
                                      2,
                                      "/static/images/search_type_032.png"
                                    )
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
                                    _vm.search_type_fuc(
                                      3,
                                      "/static/images/search_type_092.png"
                                    )
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
                                    _vm.search_type_fuc(
                                      1,
                                      "/static/images/search_type_062.png"
                                    )
                                  }
                                }
                              })
                            : _vm._e(),
                          _c("input", {
                            staticClass: ["search_mbox_d3_int"],
                            attrs: {
                              type: "text",
                              value: "",
                              placeholder: "危险类型",
                              value: _vm.danger_name
                            },
                            on: {
                              input: function($event) {
                                _vm.danger_name = $event.target.attr.value
                              }
                            }
                          })
                        ]),
                        _c("view", { staticClass: ["search_mbox_d4"] }, [
                          _c("input", {
                            staticClass: ["search_mbox_d4_int"],
                            attrs: {
                              type: "text",
                              value: "",
                              placeholder: "生还者数量",
                              value: _vm.be_num
                            },
                            on: {
                              input: function($event) {
                                _vm.be_num = $event.target.attr.value
                              }
                            }
                          })
                        ]),
                        _c("view", { staticClass: ["search_mbox_d4"] }, [
                          _c("input", {
                            staticClass: ["search_mbox_d4_int"],
                            attrs: {
                              type: "text",
                              value: "",
                              placeholder: "遇难者数量",
                              value: _vm.not_be_num
                            },
                            on: {
                              input: function($event) {
                                _vm.not_be_num = $event.target.attr.value
                              }
                            }
                          })
                        ])
                      ]),
                      _c("view", { staticClass: ["search_type_tip"] }, [
                        _c(
                          "text",
                          {
                            staticClass: ["search_type_tip_text"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
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
                          {
                            staticClass: ["search_type_tip_text"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
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
                          {
                            staticClass: ["search_type_tip_text"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
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
                          {
                            staticClass: ["search_type_tip_text"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [_vm._v("搜索完成")]
                        )
                      ])
                    ]),
                    _c(
                      "view",
                      {
                        staticClass: ["tkset_btn"],
                        on: {
                          tap: function($event) {
                            _vm.update_search(1)
                          }
                        }
                      },
                      [
                        _c(
                          "text",
                          {
                            staticStyle: { fontSize: "28px", color: "#fff" },
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [_vm._v("修改信息")]
                        )
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: ["tkset_btn"],
                        on: {
                          tap: function($event) {
                            _vm.update_search(2)
                          }
                        }
                      },
                      [
                        _c(
                          "text",
                          {
                            staticStyle: { fontSize: "28px", color: "#fff" },
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [_vm._v("删除")]
                        )
                      ]
                    )
                  ]),
              _c(
                "text",
                {
                  staticClass: ["iconfont"],
                  staticStyle: { fontSize: "50px", color: "#fff" },
                  appendAsTree: true,
                  attrs: { append: "tree" },
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
      _c(
        "text",
        {
          staticClass: ["map_btn_li_text"],
          appendAsTree: true,
          attrs: { append: "tree" }
        },
        [_vm._v("天气")]
      )
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
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 8));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 10));\nvar _service = _interopRequireDefault(__webpack_require__(/*! ../../service.js */ 11));\nvar _vuex = __webpack_require__(/*! vuex */ 13);\n\n\n\n\n\n\n\n\nvar _torch = _interopRequireDefault(__webpack_require__(/*! @/common/dc-torch/torch.js */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var that, mapContext, mapEndloading;var djs_fuc;var djs_fuc1;var that;var query;\nvar domModule = weex.requireModule('dom');\ndomModule.addRule('fontFace', {\n  'fontFamily': \"iconfont\",\n  'src': \"url('../../static/fonts/iconfont.ttf')\" });var _default =\n\n{\n  data: function data() {\n    return {\n      latitude: 39.909,\n      longitude: 116.39742,\n      mapWidth: 0, //地图区域宽度\n      mapHeight: 0, //地图区域高度\n      centerTop: 0, //中心图片坐标\n      centerLeft: 0, //中心图片坐标\n      translateY: 165,\n      markersArr: [], //覆盖物\n      mapControls: [],\n      mapControls1: [{\n        id: \"1\",\n        position: {\n          left: 375 - 15,\n          top: (uni.getSystemInfoSync().windowHeight - 45 - uni.getSystemInfoSync().statusBarHeight) / 2 - 49,\n          width: 30,\n          height: 49 },\n\n        iconPath: \"/static/images/zuobiao.png\",\n        clickable: false }],\n      //地图中的控件\n      bj_time: 10,\n      baojing: false,\n\n\n\n\n      tk_show: false,\n      tk_show1: false,\n      tk_show1_num: 0, //标记1级分类\n      note_time_t: '',\n      tk_show1_cur: -1, //标记2级分类\n      _navHeight: '',\n      zb_img: '',\n      zb_bz: '',\n      zb_title: '',\n\n      team_name: '',\n      danger_name: '',\n      be_num: '',\n      not_be_num: '',\n\n\n      tk_show_sx: false, //筛选\n      tk_show_sx_cur: 0, //筛选分类\n\n      tk_show_bjxq: false, //标记详情开关\n      bj_id: -1, //标记id\n      bj_data: '', //标记详情\n\n      search_type: 1, // 搜索状态  1未搜索  2正在搜索 3搜索完成\n      time: '',\n      time1: '',\n      array: [\n      1, 1, 1, 1, 2],\n\n      AUDIO: uni.createInnerAudioContext(),\n      torch_type: false,\n      show_count: 0 };\n\n  },\n  computed: _objectSpread({},\n  (0, _vuex.mapState)(['hasLogin', 'forcedLogin', 'userName', 'loginDatas'])),\n\n  onLoad: function onLoad() {var _this = this;\n    // return\n    that = this;\n\n    this.getLocation();\n\n\n    this.AUDIO.src = '/static/music/jingbao_kong.mp3';\n    this.AUDIO.loop = true;\n    //音频进入可以播放状态，但不保证后面可以流畅播放\n    this.AUDIO.onCanplay(function (res) {\n      __f__(\"log\", '音频进入可以播放状态，但不保证后面可以流畅播放', \" at pages/map/map.nvue:515\");\n\n    });\n    //音频播放\n    this.AUDIO.onPlay(function (res) {\n      __f__(\"log\", '音频播放', \" at pages/map/map.nvue:520\");\n      uni.vibrateLong({\n        success: function success() {\n          __f__(\"log\", 'success', \" at pages/map/map.nvue:523\");\n        } });\n\n      _torch.default.on();\n      that.torch_type = true;\n      djs_fuc = setInterval(function () {\n\n        if (that.torch_type == true) {\n          _torch.default.off();\n          that.torch_type = false;\n        } else {\n          _torch.default.on();\n          that.torch_type = true;\n        }\n\n        // console.log(that.djs())\n      }, 100);\n      djs_fuc1 = setInterval(function () {\n        uni.vibrateLong({\n          success: function success() {\n            __f__(\"log\", 'success', \" at pages/map/map.nvue:543\");\n          } });\n\n      }, 1000);\n    });\n    //音频停止\n    this.AUDIO.onStop(function (res) {\n      __f__(\"log\", '音频停止', \" at pages/map/map.nvue:550\");\n      clearInterval(djs_fuc);\n      clearInterval(djs_fuc1);\n      _torch.default.off();\n      that.torch_type = true;\n    });\n    //语音自然播放结束\n    this.AUDIO.onEnded(function (res) {\n      __f__(\"log\", '语音自然播放结束', \" at pages/map/map.nvue:558\");\n      _this.playMsgid = null;\n    });\n    mapContext = uni.createMapContext('map', this);\n    /*const innerAudioContext = uni.createInnerAudioContext();\n                                                    innerAudioContext.autoplay = true;\n                                                    innerAudioContext.src = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';\n                                                    innerAudioContext.onPlay(() => {\n                                                      console.log('开始播放');\n                                                    });\n                                                    innerAudioContext.onError((res) => {\n                                                      console.log(res.errMsg);\n                                                      console.log(res.errCode);\n                                                    });*/\n  },\n  onHide: function onHide() {\n    that.show_count++;\n    clearInterval(djs_fuc);\n    clearInterval(djs_fuc1);\n    _torch.default.off();\n    that.torch_type = true;\n  },\n  mounted: function mounted() {\n    that.mapWidth = 750;\n    that.sHeight = uni.getSystemInfoSync().statusBarHeight;\n    // that.mapHeight = (uni.getSystemInfoSync().windowHeight  - uni.getSystemInfoSync().statusBarHeight) - 246;\n    that.mapHeight = uni.getSystemInfoSync().windowHeight * 2 - 396;\n    query = uni.createSelectorQuery().in(this);\n    query.select('#map').boundingClientRect(function (data) {\n      __f__(\"log\", data, \" at pages/map/map.nvue:587\");\n      var _navHeight = data.height;\n      __f__(\"log\", '_navHeight------------------------------------>', \" at pages/map/map.nvue:589\");\n      __f__(\"log\", _navHeight, \" at pages/map/map.nvue:590\");\n      // _navHeight=_navHeight+uni.getSystemInfoSync().statusBarHeight\n      _navHeight = _navHeight / 2;\n      _navHeight = _navHeight.toFixed(0);\n      that._navHeight = _navHeight;\n      __f__(\"log\", typeof _navHeight, \" at pages/map/map.nvue:595\");\n      __f__(\"log\", typeof 710, \" at pages/map/map.nvue:596\");\n      var sss = [{\n        id: \"1\",\n        position: {\n          left: 750 / 2 - 28,\n          // top: _navHeight - 68,\n          top: _navHeight,\n          width: 55,\n          height: 68 },\n\n        iconPath: that.zb_img,\n        clickable: false }];\n\n      that.setHeight(sss);\n      that.tk_show1 = false;\n      // uni.navigateTo({\n      // \t// url: '/pages/map_dw/map_dw?zb_title=' + that.zb_title + '&tk_show1_num=' + that.tk_show1_num+'&zb_img=' + that.zb_img+'&zb_bz=' + that.zb_bz\n      // \turl: '/pages/map_dw/map_dw?zb_title=' + that.zb_title+'&zb_img=' + that.zb_img+'&zb_bz=' + that.zb_bz\n      // })\n      // Vue.set(that.mapControls[0].position,'top',sss)\n      __f__(\"log\", that.mapControls, \" at pages/map/map.nvue:616\");\n    }).exec();\n  },\n  onShow: function onShow() {\n    if (that.show_count > 0) {\n      that.getList();\n    }\n\n  },\n  methods: _objectSpread(_objectSpread({},\n  (0, _vuex.mapMutations)(['setAddress', 'setHeight'])), {}, {\n    // 播放语音\n    playVoice: function playVoice(msg) {\n      this.AUDIO.play();\n    },\n    baojing_fuc: function baojing_fuc() {\n      var that = this;\n      this.baojing = true;\n      that.bj_time = 3;\n      djs_fuc = setInterval(function () {\n        if (that.bj_time == 0) {\n          // uni.showToast({\n          // \ticon:'none',\n          // \ttitle:'警报操作'\n          // })\n          __f__(\"log\", 0, \" at pages/map/map.nvue:641\");\n\n          clearInterval(djs_fuc);\n          that.bj_time = '!';\n          that.playVoice();\n        } else {\n          that.bj_time--;\n        }\n        // console.log(that.djs())\n      }, 1000);\n    },\n    baojing_del: function baojing_del() {\n      var that = this;\n      clearInterval(djs_fuc);\n      this.bj_time = 10;\n      this.baojing = false;\n      this.AUDIO.stop();\n    },\n\n    //设置坐标2级\n    set_pos_fuc: function set_pos_fuc(num, img, title) {\n      that.tk_show1_cur = num;\n      that.zb_img = img;\n      that.zb_title = title;\n    },\n    //设置搜索状态\n    search_type_fuc: function search_type_fuc(num, img) {\n      that.search_type = num;\n      that.zb_img = img;\n      that.zb_title = '搜索';\n    },\n\n    pickTime: function pickTime(type) {\n      plus.nativeUI.pickTime(function (e) {\n        var d = e.date;\n        __f__(\"log\", \"选择的时间：\" + d.getHours() + \":\" + d.getMinutes(), \" at pages/map/map.nvue:676\");\n        var min = d.getMinutes();\n        if (d.getMinutes() < 10) {\n          min = '0' + d.getMinutes();\n        }\n        if (type == 1) {\n          that.time = d.getHours() + \":\" + min;\n        } else {\n          that.time1 = d.getHours() + \":\" + min;\n        }\n\n      }, function (e) {\n        __f__(\"log\", \"未选择时间：\" + JSON.stringify(e), \" at pages/map/map.nvue:688\");\n      });\n    },\n    test: function test() {},\n    bindTimeChange: function bindTimeChange(e) {\n      __f__(\"log\", e, \" at pages/map/map.nvue:693\");\n      this.time = e.target.value;\n    },\n    update_bj: function update_bj(type) {\n\n      var data = {};\n      if (type == 1) {\n        // uni.showToast({\n        // \ticon: 'none',\n        // \ttitle: '更新成功'\n        // })\n        data = {\n          token: that.$store.state.loginDatas.token,\n          type: 'update',\n          position_id: that.bj_id,\n          comment: that.bj_data.comment };\n\n      }\n      if (type == 2) {\n        // uni.showToast({\n        // \ticon: 'none',\n        // \ttitle: '删除成功'\n        // })\n        data = {\n          token: that.$store.state.loginDatas.token,\n          type: 'del',\n          position_id: that.bj_id };\n\n      }\n      __f__(\"log\", data, \" at pages/map/map.nvue:722\");\n      if (that.btn_kg == 1) {\n        return;\n      }\n      that.btn_kg = 1;\n      //selectSaraylDetailByUserCard\n      var jkurl = '/minapp/position';\n      uni.showLoading({\n        title: '正在获取数据',\n        mask: true });\n\n      _service.default.P_post(jkurl, data).then(function (res) {\n        that.btn_kg = 0;\n        __f__(\"log\", res, \" at pages/map/map.nvue:735\");\n        if (res.code == 1) {\n          var datas = res.data;\n          __f__(\"log\", typeof datas, \" at pages/map/map.nvue:738\");\n\n          if (typeof datas == 'string') {\n            datas = JSON.parse(datas);\n          }\n          if (type == 1) {\n            uni.showToast({\n              icon: 'none',\n              title: '更新成功' });\n\n          }\n          if (type == 2) {\n            uni.showToast({\n              icon: 'none',\n              title: '删除成功' });\n\n          }\n          that.tk_show_bjxq = false;\n          that.getList();\n        } else {\n          if (res.msg) {\n            uni.showToast({\n              icon: 'none',\n              title: res.msg });\n\n          } else {\n            uni.showToast({\n              icon: 'none',\n              title: '操作失败' });\n\n          }\n        }\n      }).catch(function (e) {\n        that.btn_kg = 0;\n        __f__(\"log\", e, \" at pages/map/map.nvue:772\");\n        uni.showToast({\n          icon: 'none',\n          title: '操作失败' });\n\n      });\n\n    },\n\n    update_search: function update_search(type) {\n      if (!that.time || !that.time1) {\n        uni.showToast({\n          icon: 'none',\n          title: '请选择时间' });\n\n        return;\n      }\n      if (!that.team_name) {\n        uni.showToast({\n          icon: 'none',\n          title: '请填写团队名称' });\n\n        return;\n      }\n      var data = {};\n      if (type == 1) {\n        // uni.showToast({\n        // \ticon: 'none',\n        // \ttitle: '更新成功'\n        // })\n        data = {\n          token: that.$store.state.loginDatas.token,\n          type: 'update',\n          position_id: that.bj_id,\n          iconPath: that.zb_img,\n          enter_time: that.time, //时间\n          evacuate_time: that.time1, //时间1\n          team_name: that.team_name, //团队名\n\n          hazard_type: that.danger_name, //危险类型\n          survivor: that.be_num, //生存数\n          victim: that.not_be_num, //遇难数\n          search_state: that.search_type //搜索状态\n        };\n      }\n      if (type == 2) {\n        // uni.showToast({\n        // \ticon: 'none',\n        // \ttitle: '删除成功'\n        // })\n        data = {\n          token: that.$store.state.loginDatas.token,\n          type: 'del',\n          position_id: that.bj_id };\n\n      }\n      __f__(\"log\", data, \" at pages/map/map.nvue:828\");\n      if (that.btn_kg == 1) {\n        return;\n      }\n      that.btn_kg = 1;\n      //selectSaraylDetailByUserCard\n      var jkurl = '/minapp/position';\n      uni.showLoading({\n        title: '正在获取数据',\n        mask: true });\n\n      _service.default.P_post(jkurl, data).then(function (res) {\n        that.btn_kg = 0;\n        __f__(\"log\", res, \" at pages/map/map.nvue:841\");\n        if (res.code == 1) {\n          var datas = res.data;\n          __f__(\"log\", typeof datas, \" at pages/map/map.nvue:844\");\n\n          if (typeof datas == 'string') {\n            datas = JSON.parse(datas);\n          }\n          if (type == 1) {\n            uni.showToast({\n              icon: 'none',\n              title: '更新成功' });\n\n          }\n          if (type == 2) {\n            uni.showToast({\n              icon: 'none',\n              title: '删除成功' });\n\n          }\n          that.tk_show_bjxq = false;\n          that.getList();\n        } else {\n          if (res.msg) {\n            uni.showToast({\n              icon: 'none',\n              title: res.msg });\n\n          } else {\n            uni.showToast({\n              icon: 'none',\n              title: '操作失败' });\n\n          }\n        }\n      }).catch(function (e) {\n        that.btn_kg = 0;\n        __f__(\"log\", e, \" at pages/map/map.nvue:878\");\n        uni.showToast({\n          icon: 'none',\n          title: '操作失败' });\n\n      });\n\n    },\n\n    getShare: function getShare() {\n      uni.shareWithSystem({\n        type: 'text',\n        href: 'https://uniapp.dcloud.io',\n        summary: '分享内容',\n        success: function success() {\n          // 分享完成，请注意此时不一定是成功分享\n        },\n        fail: function fail() {\n          // 分享失败\n        } });\n\n      // _app.getShare(false, false, 2, '', '', '', that.camera_img, false, false);\n    },\n    open_tk: function open_tk(num) {\n      that.tk_show = false;\n      that.tk_show1 = true;\n      that.tk_show1_num = num;\n\n      var now_time = new Date();\n      var now_year = now_time.getFullYear();\n      var now_month = now_time.getMonth() + 1;\n      var now_date = now_time.getDate();\n      var hour = now_time.getHours();\n      var minute = now_time.getMinutes();\n      if (now_month < 10) {\n        now_month = '0' + now_month * 1;\n      }\n      if (now_date < 10) {\n        now_date = '0' + now_date * 1;\n      }\n      if (hour < 10) {\n        hour = '0' + hour * 1;\n      }\n      if (minute < 10) {\n        minute = '0' + minute * 1;\n      }\n      that.note_time_t = now_year + '-' + now_month + '-' + now_date + ' ' + hour + ':' + minute;\n      if (that.tk_show1_num == 5) {\n        that.zb_img = '/static/images/search_type_062.png';\n        that.zb_title = '搜索';\n      }\n    },\n    shai_tk: function shai_tk(num) {\n      that.tk_show_sx_cur = num;\n      that.getList();\n      return;\n      uni.showLoading({\n        mask: true,\n        title: '正在筛选...' });\n\n      setTimeout(function () {\n        that.tk_show_sx = false;\n        uni.hideLoading();\n      }, 1000);\n    },\n    shuaxin: function shuaxin() {\n      that.getList();\n    },\n    //地图点击事件\n    markertap: function markertap(e) {\n      var _id = e.detail.markerId,\n      _index;\n\n\n      that.bj_id = _id;\n      that.bj_data = '';\n      that.time = '';\n      that.time1 = '';\n      that.team_name = '';\n      that.danger_name = '';\n      that.be_num = '';\n      that.not_be_num = '';\n      __f__(\"log\", '_id-------------------------------------->', \" at pages/map/map.nvue:960\");\n      __f__(\"log\", _id, \" at pages/map/map.nvue:961\");\n\n      var data = {\n        token: that.$store.state.loginDatas.token,\n        position_id: _id };\n\n      __f__(\"log\", data, \" at pages/map/map.nvue:967\");\n      if (that.btn_kg == 1) {\n        return;\n      }\n      that.btn_kg = 1;\n      //selectSaraylDetailByUserCard\n      var jkurl = '/minapp/position-list';\n      uni.showLoading({\n        title: '正在获取数据' });\n\n      _service.default.P_get(jkurl, data).then(function (res) {\n        that.btn_kg = 0;\n        __f__(\"log\", res, \" at pages/map/map.nvue:979\");\n        if (res.code == 1) {\n          var datas = res.data;\n          __f__(\"log\", typeof datas, \" at pages/map/map.nvue:982\");\n\n          if (typeof datas == 'string') {\n            datas = JSON.parse(datas);\n          }\n          that.bj_data = datas;\n          that.time = datas.enter_time;\n          that.time1 = datas.evacuate_time;\n          that.team_name = datas.team_name;\n          that.danger_name = datas.hazard_type;\n          that.be_num = datas.survivor || '';\n          that.not_be_num = datas.victim || '';\n          that.search_type = datas.search_state || 1;\n          that.tk_show_bjxq = true;\n        } else {\n          if (res.msg) {\n            uni.showToast({\n              icon: 'none',\n              title: res.msg });\n\n          } else {\n            uni.showToast({\n              icon: 'none',\n              title: '获取失败' });\n\n          }\n        }\n      }).catch(function (e) {\n        that.btn_kg = 0;\n        __f__(\"log\", e, \" at pages/map/map.nvue:1011\");\n        uni.showToast({\n          icon: 'none',\n          title: '获取数据失败' });\n\n      });\n      return;\n      var _list = that.markersArr;\n      for (var i = 0; i < _list.length; i++) {\n        if (_list[i].id == _id) {\n          _index = i;\n          that.current = i;\n          that.openAnimation();\n          break;\n        }\n      };\n    },\n    //移动地图结束\n    mapChange: function mapChange(e) {\n      __f__(\"log\", 'e--------------------------->', \" at pages/map/map.nvue:1030\");\n      __f__(\"log\", e, \" at pages/map/map.nvue:1031\");\n      if (!e) {\n        return;\n      }\n\n      if (mapEndloading) {\n        return;\n      }\n      mapEndloading = true;\n      setTimeout(function () {//防抖\n        mapEndloading = false;\n      }, 500);\n      if (e.detail && e.detail.type == 'end' || e.type == 'end') {\n        //中心区域左边\n        mapContext.getCenterLocation({\n          success: function success(res) {\n            that.mapEnd(res);\n          },\n          fail: function fail(err) {\n            __f__(\"log\", err, \" at pages/map/map.nvue:1050\");\n          } });\n\n      }\n      return;\n      if (uni.getSystemInfoSync().platform == 'ios') {\n        if (e.detail.type == 'end') {\n          //中心区域左边\n          mapContext.getCenterLocation({\n            success: function success(res) {\n              that.mapEnd(res);\n            },\n            fail: function fail(err) {\n              __f__(\"log\", err, \" at pages/map/map.nvue:1063\");\n            } });\n\n        }\n      } else {\n        //地图移动结束\n        __f__(\"log\", e, \" at pages/map/map.nvue:1069\");\n        if (e.type == 'end') {\n          //中心区域左边\n          mapContext.getCenterLocation({\n            success: function success(res) {\n\n              that.mapEnd(res);\n            },\n            fail: function fail(err) {\n              __f__(\"log\", err, \" at pages/map/map.nvue:1078\");\n            } });\n\n          //缩放视野展示所有经纬度\n          // mapContext.getCenterLocation({\n          // \tsuccess(res) {\n          // \t\tconsole.log(res);\n          // \t},\n          // \tfail(err) {\n          // \t\tconsole.log(err)\n          // \t}\n          // })\n          //获取当前地图的视野范围\n          mapContext.getRegion({\n            success: function success(res) {\n              // console.log(res);\n            },\n            fail: function fail(err) {\n              __f__(\"log\", err, \" at pages/map/map.nvue:1096\");\n            } });\n\n          //获取当前地图的缩放级别\n          mapContext.getScale({\n            success: function success(res) {\n              // console.log(res);\n            },\n            fail: function fail(err) {\n              __f__(\"log\", err, \" at pages/map/map.nvue:1105\");\n            } });\n\n        }\n      }\n\n\n    },\n    getList: function getList() {\n      var data = {\n        token: that.$store.state.loginDatas.token,\n        longitude: that.longitude,\n        latitude: that.latitude,\n        type: that.tk_show_sx_cur == 0 ? 'all' : that.tk_show_sx_cur == 1 ? 'own' : 'drop' };\n\n      if (that.btn_kg == 1) {\n        return;\n      }\n      that.btn_kg = 1;\n      //selectSaraylDetailByUserCard\n      var jkurl = '/minapp/position-list';\n      uni.showLoading({\n        title: '正在获取数据' });\n\n\n      _service.default.P_get(jkurl, data).then(function (res) {\n        that.btn_kg = 0;\n        __f__(\"log\", res, \" at pages/map/map.nvue:1132\");\n        if (res.code == 1) {\n          var datas = res.data;\n          __f__(\"log\", typeof datas, \" at pages/map/map.nvue:1135\");\n\n          if (typeof datas == 'string') {\n            datas = JSON.parse(datas);\n          }\n\n          var newdata = datas;\n          for (var i = 0; i < newdata.length; i++) {\n            var new_latitude = newdata[i].latitude;\n            var new_longitude = newdata[i].longitude;\n            var new_iconPath = that.getimg(newdata[i].iconPath);\n            _vue.default.set(newdata, 'latitude', new_latitude);\n            _vue.default.set(newdata, 'longitude', new_longitude);\n            _vue.default.set(newdata, 'iconPath', new_iconPath);\n          }\n          that.markersArr = newdata;\n\n          that.tk_show_sx = false;\n        } else {\n          if (res.msg) {\n            uni.showToast({\n              icon: 'none',\n              title: res.msg });\n\n          } else {\n            uni.showToast({\n              icon: 'none',\n              title: '获取失败' });\n\n          }\n        }\n      }).catch(function (e) {\n        that.btn_kg = 0;\n        __f__(\"log\", e, \" at pages/map/map.nvue:1168\");\n        uni.showToast({\n          icon: 'none',\n          title: '获取数据失败' });\n\n      });\n    },\n    //地图移动\n    mapEnd: function mapEnd(res) {\n      __f__(\"log\", '加载数据', \" at pages/map/map.nvue:1177\");\n      if (res) {\n        that.longitude = res.longitude;\n        that.latitude = res.latitude;\n      }\n\n      //原数据\n      that.list = [];\n      that.pageIndex = 1;\n      that.chaceList = [];\n      // 覆盖物数据\n      that.markersArr = [];\n      that.originalList = [];\n      that.getList();\n\n    },\n    getLocation: function getLocation(type) {\n      uni.getLocation({\n        type: 'wgs84',\n        // type: 'gcj02',\n        success: function success(res) {\n          that.longitude = res.longitude;\n          that.latitude = res.latitude;\n          that.pageIndex = 1;\n          // if (type != 'back') {\n\n          that.setAddress(res);\n          setTimeout(function () {\n            that.getList();\n          }, 1000);\n          // }\n\n        },\n        fail: function fail(err) {\n          if (uni.getSystemInfoSync().platform == 'ios') {\n            if (!permision.judgeIosPermission('location')) {\n              uni.showModal({\n                title: '提示',\n                content: '需要打开定位权限',\n                success: function success(res) {\n                  if (res.confirm) {\n                    that.isToSetting = true;\n                    permision.gotoAppPermissionSetting();\n                  }\n                } });\n\n            }\n          } else {\n            that.requestAndroidPermission('android.permission.ACCESS_FINE_LOCATION');\n          }\n\n        } });\n\n    },\n    requestAndroidPermission: function requestAndroidPermission(permisionID) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var result, strStatus;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (\n                  permision.requestAndroidPermission(permisionID));case 2:result = _context.sent;\n\n                if (result == 1) {\n                  strStatus = \"已获得授权\";\n                } else if (result == 0) {\n                  strStatus = \"未获得授权\";\n                } else {\n                  strStatus = \"被永久拒绝权限\";\n                }\n                uni.showModal({\n                  title: '提示',\n                  content: '需要打开定位权限',\n                  success: function success(res) {\n                    if (res.confirm) {\n                      that.isToSetting = true;\n                      permision.gotoAppPermissionSetting();\n                    }\n                  } });case 5:case \"end\":return _context.stop();}}}, _callee);}))();\n\n    },\n    getimg: function getimg(img) {\n      return _service.default.getimg(img);\n    },\n    jump_fuc: function jump_fuc(e) {\n      var sss;\n      if (that.tk_show1_num == 5) {\n        if (!that.time || !that.time1) {\n          uni.showToast({\n            icon: 'none',\n            title: '请选择时间' });\n\n          return;\n        }\n        if (!that.team_name) {\n          uni.showToast({\n            icon: 'none',\n            title: '请填写团队名称' });\n\n          return;\n        }\n        sss = [{\n          id: \"1\",\n          position: {\n            left: 750 / 2 - 28,\n            // top: _navHeight - 68,\n            top: that._navHeight > 200 ? that._navHeight : 300,\n            width: 55,\n            height: 55 },\n\n          iconPath: that.zb_img,\n          clickable: false }];\n\n        that.setHeight(sss);\n        that.tk_show1 = false;\n        uni.navigateTo({\n          // url: '/pages/map_dw/map_dw?zb_title=' + that.zb_title + '&tk_show1_num=' + that.tk_show1_num+'&zb_img=' + that.zb_img+'&zb_bz=' + that.zb_bz\n          url: '/pages/map_dw/map_dw?zb_title=' + that.zb_title + '&zb_img=' + that.zb_img + '&zb_bz=' + that.zb_bz + '&team_name=' + that.team_name + '&time=' + that.time + '&time1=' + that.time1 + '&danger_name=' + that.danger_name + '&be_num=' + that.be_num + '&not_be_num=' + that.not_be_num + '&search_type=' + that.search_type });\n\n      } else {\n        if (that.tk_show1_cur == -1) {\n          uni.showToast({\n            icon: 'none',\n            title: '请选择类型' });\n\n          return;\n        }\n        sss = [{\n          id: \"1\",\n          position: {\n            left: 750 / 2 - 28,\n            // top: _navHeight - 68,\n            top: that._navHeight > 200 ? that._navHeight : 300,\n            width: 55,\n            height: 68 },\n\n          iconPath: that.zb_img,\n          clickable: false }];\n\n        that.setHeight(sss);\n        that.tk_show1 = false;\n        uni.navigateTo({\n          // url: '/pages/map_dw/map_dw?zb_title=' + that.zb_title + '&tk_show1_num=' + that.tk_show1_num+'&zb_img=' + that.zb_img+'&zb_bz=' + that.zb_bz\n          url: '/pages/map_dw/map_dw?zb_title=' + that.zb_title + '&zb_img=' + that.zb_img + '&zb_bz=' + that.zb_bz });\n\n      }\n      // console.log(that.mapHeight)\n\n\n\n      // Vue.set(that.mapControls[0].position,'top',sss)\n      // console.log(that.mapControls)\n\n    },\n    jump: function jump(e) {\n      var that = this;\n\n      if (that.btn_kg == 1) {\n        return;\n      } else {\n        that.btn_kg = 1;\n        setTimeout(function () {\n          that.btn_kg = 0;\n        }, 1000);\n      }\n\n      _service.default.jump(e);\n    } }) };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbWFwL21hcC5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9hQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBLCtGLDB1REFMQSxvQ0FDQSxZQUNBLGFBQ0EsU0FDQTtBQUVBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLGlEQUZBLEk7O0FBSUE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLDBCQUZBO0FBR0EsaUJBSEEsRUFHQTtBQUNBLGtCQUpBLEVBSUE7QUFDQSxrQkFMQSxFQUtBO0FBQ0EsbUJBTkEsRUFNQTtBQUNBLHFCQVBBO0FBUUEsb0JBUkEsRUFRQTtBQUNBLHFCQVRBO0FBVUE7QUFDQSxlQURBO0FBRUE7QUFDQSx3QkFEQTtBQUVBLDZHQUZBO0FBR0EsbUJBSEE7QUFJQSxvQkFKQSxFQUZBOztBQVFBLDhDQVJBO0FBU0Esd0JBVEEsR0FWQTtBQW9CQTtBQUNBLGlCQXJCQTtBQXNCQSxvQkF0QkE7Ozs7O0FBMkJBLG9CQTNCQTtBQTRCQSxxQkE1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OEJBREE7QUFFQTtBQUNBLDhEQUhBO0FBSUEscUJBSkE7QUFLQSxzQkFMQSxFQUZBOztBQVNBLCtCQVRBO0FBVUEsMEJBVkE7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtSEFGQTs7QUFJQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQSxLQTNyQkE7QUE0ckJBLFFBNXJCQSxnQkE0ckJBLENBNXJCQSxFQTRyQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxFQUVBLElBRkE7QUFHQTs7QUFFQTtBQUNBLEtBenNCQSxHQTNMQSxFIiwiZmlsZSI6IjIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwibWluaDEwMFwiPlxyXG5cdFx0PCEtLSA8dmlldyBzdHlsZT1cIndpZHRoOiAxMDBweDtoZWlnaHQ6IDIwMHB4O1wiPjwvdmlldz4gLS0+XHJcblx0XHQ8IS0tIDxwaWNrZXIgQGNoYW5nZT1cImJpbmRUaW1lQ2hhbmdlXCIgOnZhbHVlPVwicl9pbmRleFwiIDpyYW5nZT1cImFycmF5XCI+XHJcblx0XHRcdFx0XHRcdGFycmF5Ojo6PHZpZXcgY2xhc3M9XCJ1bmktaW5wdXRcIj57e2FycmF5W3JfaW5kZXhdfX08L3ZpZXc+YXJyYXlcclxuXHRcdFx0XHQ8L3BpY2tlcj4gLS0+XHJcblx0XHRcdFx0PCEtLSA8dmlldyBAY2xpY2s9XCJwaWNrVGltZVwiPuaXtumXtDwvdmlldz4gLS0+XHJcblx0XHQ8IS0tIDxibG9jayB2LWlmPVwidGltZVwiPiAtLT5cclxuXHRcdFx0XHJcblx0XHQ8bWFwIGNsYXNzPVwiaW5kZXhfbWFwXCIgaWQ9XCJtYXBcIiBuYW1lPVwibWFwXCIgOnNob3ctY29tcGFzcz1cImZhbHNlXCIgOnN0eWxlPVwie2hlaWdodDogbWFwSGVpZ2h0KydweCd9XCIgOmVuYWJsZS1yb3RhdGU9XCJmYWxzZVwiXHJcblx0XHQgOmxhdGl0dWRlPVwibGF0aXR1ZGVcIiA6bG9uZ2l0dWRlPVwibG9uZ2l0dWRlXCIgOm1hcmtlcnM9XCJtYXJrZXJzQXJyXCIgQG1hcmtlcnRhcD1cIm1hcmtlcnRhcFwiIDpjb250cm9scz1cIm1hcENvbnRyb2xzXCJcclxuXHRcdCBAcmVnaW9uY2hhbmdlPSdtYXBDaGFuZ2UnPlxyXG5cdFx0IDwhLS0gPGJhb2ppbmc+PC9iYW9qaW5nPiAtLT5cclxuXHRcdFx0PCEtLSDorabmiqXnu4Tku7YgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfYm94XCI+XHJcblx0XHRcdFx0PGltYWdlIEBjbGljaz1cImJhb2ppbmdfZnVjXCIgY2xhc3M9XCJial9ib3hfaW1nXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9iYW9qaW5nMS5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwiYmFvamluZ1wiIEBjbGljaz1cImJhb2ppbmdfZGVsXCIgY2xhc3M9XCJial9tYWluXCI+XHJcblxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9jbnVtXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfY251bV8xXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9jbnVtX251bVwiPnt7YmpfdGltZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX3RpcFwiIHN0eWxlPVwiY29sb3I6ICNmZmY7XCI+MTDnp5Lpkp/lhoXop6bmkbjlsY/luZXlj5bmtog8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0g6K2m5oql57uE5Lu2XHJcblxyXG5cdFx0XHQ8IS0tIOagh+iusOW8ueahhiAtLT5cclxuXHRcdFx0PHZpZXcgdi1pZj1cInRrX3Nob3dcIiBjbGFzcz1cInRrX3BvcG9wXCIgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ9J3Rlc3QnPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGtfbWFpblwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRfYmpcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRfYmpfdGV4dFwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJhZGRfYmpfd3pcIj7mt7vliqDmoIforrA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkX2JqX3RleHRcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX3R5cGVcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial90eXBlX2xpIGJqX3R5cGVfbGlfY3VyXCIgQGNsaWNrPVwib3Blbl90aygxKVwiPjx0ZXh0IGNsYXNzPVwiYmpfdHlwZV9saV90ZXh0IGJqX3R5cGVfbGlfdGV4dF9jdXJcIj7ljbHlrrM8L3RleHQ+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX3R5cGVfbGkgYmpfdHlwZV9saV9jdXJcIiBAY2xpY2s9XCJvcGVuX3RrKDIpXCI+PHRleHQgY2xhc3M9XCJial90eXBlX2xpX3RleHQgYmpfdHlwZV9saV90ZXh0X2N1clwiPuWRveS7pDwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfdHlwZV9saSBial90eXBlX2xpX2N1clwiIEBjbGljaz1cIm9wZW5fdGsoMylcIj48dGV4dCBjbGFzcz1cImJqX3R5cGVfbGlfdGV4dCBial90eXBlX2xpX3RleHRfY3VyXCI+5Y+X5Zuw6ICFPC90ZXh0Pjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial90eXBlX2xpIGJqX3R5cGVfbGlfY3VyXCIgQGNsaWNrPVwib3Blbl90ayg0KVwiPjx0ZXh0IGNsYXNzPVwiYmpfdHlwZV9saV90ZXh0IGJqX3R5cGVfbGlfdGV4dF9jdXJcIj7lu7rnrZHnoLTlnY88L3RleHQ+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX3R5cGVfbGkgYmpfdHlwZV9saV9jdXJcIiBAY2xpY2s9XCJvcGVuX3RrKDUpXCI+PHRleHQgY2xhc3M9XCJial90eXBlX2xpX3RleHQgYmpfdHlwZV9saV90ZXh0X2N1clwiPuaQnOe0ojwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0gPHRleHQgQGNsaWNrPVwidGtfc2hvdz1mYWxzZVwiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbmd1YW5iaVwiIHN0eWxlPVwiZm9udC1zaXplOiA1MHVweDtjb2xvcjogI2ZmZjtcIj48L3RleHQ+IC0tPlxyXG5cdFx0XHRcdDx0ZXh0IEBjbGljaz1cInRrX3Nob3c9ZmFsc2VcIiBjbGFzcz1cImljb25mb250IGljb25ndWFuYmlcIiBzdHlsZT1cImZvbnQtc2l6ZTogNTBweDtjb2xvcjogI2ZmZjtcIj4mI3hlNjIxOzwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOetm+mAieW8ueahhiAtLT5cclxuXHRcdFx0PHZpZXcgdi1pZj1cInRrX3Nob3dfc3hcIiBjbGFzcz1cInRrX3BvcG9wXCIgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ9J3Rlc3QnPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGtfbWFpblwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRfYmpcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRfYmpfdGV4dFwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJmb250LXdlaWdodDogYm9sZDtcIj7nrZvpgIk8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkX2JqX3RleHRcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX3R5cGVcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial90eXBlX2xpXCIgOmNsYXNzPVwidGtfc2hvd19zeF9jdXI9PTA/J2JqX3R5cGVfbGlfY3VyJzpkYXRhcy5zZWFyY2hfc3RhdGVcIiBAY2xpY2s9XCJzaGFpX3RrKDApXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial90eXBlX2xpX3RleHRcIiA6Y2xhc3M9XCJ0a19zaG93X3N4X2N1cj09MD8nYmpfdHlwZV9saV90ZXh0X2N1cic6JydcIj7miYDmnIk8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial90eXBlX2xpXCIgOmNsYXNzPVwidGtfc2hvd19zeF9jdXI9PTE/J2JqX3R5cGVfbGlfY3VyJzonJ1wiIEBjbGljaz1cInNoYWlfdGsoMSlcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX3R5cGVfbGlfdGV4dFwiIDpjbGFzcz1cInRrX3Nob3dfc3hfY3VyPT0xPydial90eXBlX2xpX3RleHRfY3VyJzonJ1wiPuS7heiHquW3sTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX3R5cGVfbGlcIiA6Y2xhc3M9XCJ0a19zaG93X3N4X2N1cj09Mj8nYmpfdHlwZV9saV9jdXInOicnXCIgQGNsaWNrPVwic2hhaV90aygyKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfdHlwZV9saV90ZXh0XCIgOmNsYXNzPVwidGtfc2hvd19zeF9jdXI9PTI/J2JqX3R5cGVfbGlfdGV4dF9jdXInOicnXCI+6Iiq54K5PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0gPHRleHQgQGNsaWNrPVwidGtfc2hvdz1mYWxzZVwiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbmd1YW5iaVwiIHN0eWxlPVwiZm9udC1zaXplOiA1MHVweDtjb2xvcjogI2ZmZjtcIj48L3RleHQ+IC0tPlxyXG5cdFx0XHRcdDx0ZXh0IEBjbGljaz1cInRrX3Nob3dfc3g9ZmFsc2VcIiBjbGFzcz1cImljb25mb250IGljb25ndWFuYmlcIiBzdHlsZT1cImZvbnQtc2l6ZTogNTBweDtjb2xvcjogI2ZmZjtcIj4mI3hlNjIxOzwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdDwvbWFwPlxyXG5cclxuXHRcdDx2aWV3IGNsYXNzPVwibWFwX2J0bl9saXN0XCI+XHJcblx0XHRcclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJtYXBfYnRuX2xpXCIgQGNsaWNrPVwic2h1YXhpblwiPlxyXG5cdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm1hcF9idG5fbGlfaW1hZ2VcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9pbmRleF9idG4xLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwibWFwX2J0bl9saV90ZXh0XCI+5Yi35pawPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibWFwX2J0bl9saVwiIEBjbGljaz1cInRrX3Nob3c9dHJ1ZVwiPlxyXG5cdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm1hcF9idG5fbGlfaW1hZ2VcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9pbmRleF9idG4yLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwibWFwX2J0bl9saV90ZXh0XCI+5qCH6K6wPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibWFwX2J0bl9saVwiPlxyXG5cdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm1hcF9idG5fbGlfaW1hZ2VcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9pbmRleF9idG4zLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwibWFwX2J0bl9saV90ZXh0XCI+5aSp5rCUPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibWFwX2J0bl9saVwiIEBjbGljaz1cInRrX3Nob3dfc3g9dHJ1ZVwiPlxyXG5cdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm1hcF9idG5fbGlfaW1hZ2VcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9pbmRleF9idG40LnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwibWFwX2J0bl9saV90ZXh0XCI+562b6YCJPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOagh+iusCAtLT5cclxuXHRcdDx2aWV3Pjwvdmlldz5cclxuXHRcdDwhLS0g5Y2x6Zmp5by55qGGIC0tPlxyXG5cdFx0PHZpZXcgdi1pZj1cInRrX3Nob3cxXCIgY2xhc3M9XCJ0a19wb3BvcFwiIEB0b3VjaG1vdmUuc3RvcC5wcmV2ZW50PSd0ZXN0Jz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0a19tYWluXCI+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYWRkX2JqX2ljb25cIiA6c3JjPVwiZ2V0aW1nKCcvc3RhdGljL2ltYWdlcy9hZGRfYmpfaWNvbi5wbmcnKVwiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDx0ZXh0IHYtaWY9XCJ0a19zaG93MV9udW09PTFcIiBjbGFzcz1cIm5vdGV0a190aXRcIj7pgInmi6nljbHpmannsbvlnos8L3RleHQ+XHJcblx0XHRcdFx0PHRleHQgdi1pZj1cInRrX3Nob3cxX251bT09MlwiIGNsYXNzPVwibm90ZXRrX3RpdFwiPumAieaLqeWRveS7pOexu+WeizwvdGV4dD5cclxuXHRcdFx0XHQ8dGV4dCB2LWlmPVwidGtfc2hvdzFfbnVtPT0zXCIgY2xhc3M9XCJub3RldGtfdGl0XCI+5Y+X5Zuw6ICFPC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0IHYtaWY9XCJ0a19zaG93MV9udW09PTRcIiBjbGFzcz1cIm5vdGV0a190aXRcIj7pgInmi6nlu7rnrZHnoLTlnY/nrYnnuqc8L3RleHQ+XHJcblx0XHRcdFx0PHRleHQgdi1pZj1cInRrX3Nob3cxX251bT09NVwiIGNsYXNzPVwibm90ZXRrX3RpdFwiPuihpeWFheaQnOe0ouS/oeaBrzwvdGV4dD5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm5vdGV0a190aW1lXCI+e3tub3RlX3RpbWVfdH19PC90ZXh0PlxyXG5cdFx0XHRcdDxpbnB1dCB2LWlmPVwidGtfc2hvdzFfbnVtIT01XCIgY2xhc3M9XCJiel9pbnRfdGtcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCLlpIfms6hcIiB2LW1vZGVsPVwiemJfYnpcIiAvPlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJ0a19zaG93MV9udW09PTFcIiBjbGFzcz1cImJqX2xpc3RfYm94XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpX3dcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saVwiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09MD8nYmpfbGlzdF9ib3hfbGlfY3VyJzonJ1wiIEBjbGljaz1cInNldF9wb3NfZnVjKDAsJy9zdGF0aWMvaW1hZ2VzL2h1b3phaS5wbmcnLCfngavngb4nKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJqX2ljb24gXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9odW96YWkucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9pY29uX3RleHRcIj7ngavngb48L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwieHpfb2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTA/J3h6X29rX2N1cic6JydcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3h6X29rLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saV93XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTE/J2JqX2xpc3RfYm94X2xpX2N1cic6JydcIiBAY2xpY2s9XCJzZXRfcG9zX2Z1YygxLCcvc3RhdGljL2ltYWdlcy9kaWFubGkucG5nJywn55S15YqbJylcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJial9pY29uXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9kaWFubGkucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9pY29uX3RleHRcIj7nlLXlips8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwieHpfb2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTE/J3h6X29rX2N1cic6JydcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3h6X29rLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saV93XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTI/J2JqX2xpc3RfYm94X2xpX2N1cic6JydcIiBAY2xpY2s9XCJzZXRfcG9zX2Z1YygyLCcvc3RhdGljL2ltYWdlcy9sdXpoYW5nLnBuZycsJ+i3r+manCcpXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYmpfaWNvblwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbHV6aGFuZy5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2ljb25fdGV4dFwiPui3r+manDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ4el9va1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09Mj8neHpfb2tfY3VyJzonJ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMveHpfb2sucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpX3dcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saVwiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09Mz8nYmpfbGlzdF9ib3hfbGlfY3VyJzonJ1wiIEBjbGljaz1cInNldF9wb3NfZnVjKDMsJy9zdGF0aWMvaW1hZ2VzL2NoZWh1by5wbmcnLCfovabnpbgnKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJqX2ljb25cIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2NoZWh1by5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2ljb25fdGV4dFwiPui9pueluDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ4el9va1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09Mz8neHpfb2tfY3VyJzonJ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMveHpfb2sucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpX3dcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saVwiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09ND8nYmpfbGlzdF9ib3hfbGlfY3VyJzonJ1wiIEBjbGljaz1cInNldF9wb3NfZnVjKDQsJy9zdGF0aWMvaW1hZ2VzL3dlaXhpYW53dS5wbmcnLCfljbHljJblk4EnKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJqX2ljb25cIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3dlaXhpYW53dS5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2ljb25fdGV4dFwiPuWNseWMluWTgTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ4el9va1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09ND8neHpfb2tfY3VyJzonJ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMveHpfb2sucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpX3dcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saVwiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09NT8nYmpfbGlzdF9ib3hfbGlfY3VyJzonJ1wiIEBjbGljaz1cInNldF9wb3NfZnVjKDUsJy9zdGF0aWMvaW1hZ2VzL3NodWl6YWkucG5nJywn5rC054G+JylcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJial9pY29uXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9zaHVpemFpLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfaWNvbl90ZXh0XCI+5rC054G+PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInh6X29rXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT01Pyd4el9va19jdXInOicnXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy94el9vay5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJ0a19zaG93MV9udW09PTJcIiBjbGFzcz1cImJqX2xpc3RfYm94XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpX3cgYmpfbGlzdF9ib3hfbGlfd19tbFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpIGJqX2xpc3RfYm94X2xpX21sXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0wPydial9saXN0X2JveF9saV9jdXInOicnXCIgQGNsaWNrPVwic2V0X3Bvc19mdWMoMCwnL3N0YXRpYy9pbWFnZXMvbWxfemhpaHVpLnBuZycsJ+aMh+aMpScpXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYmpfaWNvbiBcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL21sX3poaWh1aS5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2ljb25fdGV4dFwiPuaMh+aMpTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ4el9va1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09MD8neHpfb2tfY3VyJzonJ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMveHpfb2sucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpX3cgYmpfbGlzdF9ib3hfbGlfd19tbFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpIGJqX2xpc3RfYm94X2xpX21sXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0xPydial9saXN0X2JveF9saV9jdXInOicnXCIgQGNsaWNrPVwic2V0X3Bvc19mdWMoMSwnL3N0YXRpYy9pbWFnZXMvbWxfamloZS5wbmcnLCfpm4bnu5MnKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJqX2ljb25cIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL21sX2ppaGUucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9pY29uX3RleHRcIj7pm4bnu5M8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwieHpfb2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTE/J3h6X29rX2N1cic6JydcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3h6X29rLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saV93IGJqX2xpc3RfYm94X2xpX3dfbWxcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saSBial9saXN0X2JveF9saV9tbFwiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09Mj8nYmpfbGlzdF9ib3hfbGlfY3VyJzonJ1wiIEBjbGljaz1cInNldF9wb3NfZnVjKDIsJy9zdGF0aWMvaW1hZ2VzL21sX3lpbGlhby5wbmcnLCfljLvnlpcnKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJqX2ljb25cIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL21sX3lpbGlhby5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2ljb25fdGV4dFwiPuWMu+eWlzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ4el9va1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09Mj8neHpfb2tfY3VyJzonJ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMveHpfb2sucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpX3cgYmpfbGlzdF9ib3hfbGlfd19tbFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpIGJqX2xpc3RfYm94X2xpX21sXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0zPydial9saXN0X2JveF9saV9jdXInOicnXCIgQGNsaWNrPVwic2V0X3Bvc19mdWMoMywnL3N0YXRpYy9pbWFnZXMvbWxfdGluZ2NoZS5wbmcnLCflgZzovaYnKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJqX2ljb25cIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL21sX3RpbmdjaGUucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9pY29uX3RleHRcIj7lgZzovaY8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwieHpfb2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTM/J3h6X29rX2N1cic6JydcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3h6X29rLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cInRrX3Nob3cxX251bT09M1wiIGNsYXNzPVwiYmpfbGlzdF9ib3hcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlfdyBial9saXN0X2JveF9saV93X3NrXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGkgYmpfbGlzdF9ib3hfbGlfc2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTA/J2JqX2xpc3RfYm94X2xpX2N1cic6JydcIiBAY2xpY2s9XCJzZXRfcG9zX2Z1YygwLCcvc3RhdGljL2ltYWdlcy9za18xLnBuZycsJ+WBnOi9picpXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYmpfaWNvbiBcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3NrXzEucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9pY29uX3RleHRcIj7mvZzlnKjnmoTlj5flm7DogIU8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwieHpfb2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTA/J3h6X29rX2N1cic6JydcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3h6X29rLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saV93IGJqX2xpc3RfYm94X2xpX3dfc2tcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saSBial9saXN0X2JveF9saV9za1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09MT8nYmpfbGlzdF9ib3hfbGlfY3VyJzonJ1wiIEBjbGljaz1cInNldF9wb3NfZnVjKDEsJy9zdGF0aWMvaW1hZ2VzL3NrXzIucG5nJywn56Gu6K6k55Sf6L+Y6ICFJylcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJial9pY29uXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9za18yLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfaWNvbl90ZXh0XCI+56Gu6K6k55Sf6L+Y6ICFPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInh6X29rXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0xPyd4el9va19jdXInOicnXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy94el9vay5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlfdyBial9saXN0X2JveF9saV93X3NrXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGkgYmpfbGlzdF9ib3hfbGlfc2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTI/J2JqX2xpc3RfYm94X2xpX2N1cic6JydcIiBAY2xpY2s9XCJzZXRfcG9zX2Z1YygyLCcvc3RhdGljL2ltYWdlcy9za18zLnBuZycsJ+ehruiupOmBh+mavuiAhScpXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYmpfaWNvblwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvc2tfMy5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2ljb25fdGV4dFwiPuehruiupOmBh+mavuiAhTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ4el9va1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09Mj8neHpfb2tfY3VyJzonJ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMveHpfb2sucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpX3cgYmpfbGlzdF9ib3hfbGlfd19za1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpIGJqX2xpc3RfYm94X2xpX3NrXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0zPydial9saXN0X2JveF9saV9jdXInOicnXCIgQGNsaWNrPVwic2V0X3Bvc19mdWMoMywnL3N0YXRpYy9pbWFnZXMvc2tfNC5wbmcnLCfnp7vpmaTnlJ/ov5jogIUnKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJqX2ljb25cIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3NrXzQucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9pY29uX3RleHRcIj7np7vpmaTnlJ/ov5jogIU8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwieHpfb2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTM/J3h6X29rX2N1cic6JydcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3h6X29rLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saV93IGJqX2xpc3RfYm94X2xpX3dfc2tcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saSBial9saXN0X2JveF9saV9za1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09ND8nYmpfbGlzdF9ib3hfbGlfY3VyJzonJ1wiIEBjbGljaz1cInNldF9wb3NfZnVjKDQsJy9zdGF0aWMvaW1hZ2VzL3NrXzUucG5nJywn56e76Zmk6YGH6Zq+6ICFJylcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJial9pY29uXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9za181LnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfaWNvbl90ZXh0XCI+56e76Zmk6YGH6Zq+6ICFPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInh6X29rXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT00Pyd4el9va19jdXInOicnXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy94el9vay5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlfdyBial9saXN0X2JveF9saV93X3NrXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGkgYmpfbGlzdF9ib3hfbGlfc2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTU/J2JqX2xpc3RfYm94X2xpX2N1cic6JydcIiBAY2xpY2s9XCJzZXRfcG9zX2Z1Yyg1LCcvc3RhdGljL2ltYWdlcy9za182LnBuZycsJ+acgOWQjuS4gOasoeeci+WIsCcpXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYmpfaWNvblwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvc2tfNi5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2ljb25fdGV4dFwiPuacgOWQjuS4gOasoeeci+WIsDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ4el9va1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09NT8neHpfb2tfY3VyJzonJ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMveHpfb2sucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwidGtfc2hvdzFfbnVtPT00XCIgY2xhc3M9XCJial9saXN0X2JveFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saV93XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTA/J2JqX2xpc3RfYm94X2xpX2N1cic6JydcIiBAY2xpY2s9XCJzZXRfcG9zX2Z1YygwLCcvc3RhdGljL2ltYWdlcy9waF8xLnBuZycsJ+S9jumjjumZqScpXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYmpfaWNvbiBcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3BoXzEucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9pY29uX3RleHRcIj7kvY7po47pmak8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwieHpfb2tcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTA/J3h6X29rX2N1cic6JydcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3h6X29rLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saV93XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hfbGlcIiA6Y2xhc3M9XCJ0a19zaG93MV9jdXI9PTE/J2JqX2xpc3RfYm94X2xpX2N1cic6JydcIiBAY2xpY2s9XCJzZXRfcG9zX2Z1YygxLCcvc3RhdGljL2ltYWdlcy9waF8yLnBuZycsJ+S4remjjumZqScpXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYmpfaWNvblwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvcGhfMi5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2ljb25fdGV4dFwiPuS4remjjumZqTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ4el9va1wiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09MT8neHpfb2tfY3VyJzonJ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMveHpfb2sucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2xpc3RfYm94X2xpX3dcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9saXN0X2JveF9saVwiIDpjbGFzcz1cInRrX3Nob3cxX2N1cj09Mj8nYmpfbGlzdF9ib3hfbGlfY3VyJzonJ1wiIEBjbGljaz1cInNldF9wb3NfZnVjKDIsJy9zdGF0aWMvaW1hZ2VzL3BoXzMucG5nJywn6auY6aOO6ZmpJylcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJial9pY29uXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9waF8zLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfaWNvbl90ZXh0XCI+6auY6aOO6ZmpPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInh6X29rXCIgOmNsYXNzPVwidGtfc2hvdzFfY3VyPT0yPyd4el9va19jdXInOicnXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy94el9vay5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwidGtfc2hvdzFfbnVtPT01XCIgY2xhc3M9XCJial9saXN0X2JveFwiPlxyXG5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VhcmNoX21ib3hcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwic2VhcmNoX21ib3hfaW1nXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9zZWFyY2hfYmdfMDMucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VhcmNoX21ib3hfZDFcIj7ml7bpl7Qv5pel5pyfPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaF9tYm94X2QyXCI+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSA8aW5wdXQgY2xhc3M9XCJzZWFyY2hfbWJveF9kMl9pbnRcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCLov5vlhaVcIi8+IC0tPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gPHBpY2tlciBtb2RlPVwidGltZVwiIHZhbHVlPVwiMTI6MDBcIiBAY2hhbmdlPVwiYmluZFRpbWVDaGFuZ2VcIiBkYXRhLXR5cGU9XCIxXCI+IC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgQGNsaWNrPVwicGlja1RpbWUoMSlcIiBjbGFzcz1cInNlYXJjaF9tYm94X2QyX2ludCBhaWMganVfY1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIiBzZWFyY2hfbWJveF9kMl9pbnR0ZXh0IFwiPnt7dGltZT90aW1lOifov5vlhaUnfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSA8L3BpY2tlcj4gLS0+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJzZWFyY2hfbWJveF9kMl90ZXh0XCI+PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gPGlucHV0IGNsYXNzPVwic2VhcmNoX21ib3hfZDJfaW50XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwi5pKk5Ye6XCIvPiAtLT5cclxuXHJcblx0XHRcdFx0XHRcdFx0PCEtLSA8cGlja2VyIG1vZGU9XCJ0aW1lXCIgdmFsdWU9XCIxMjowMFwiIEBjaGFuZ2U9XCJiaW5kVGltZUNoYW5nZVwiIGRhdGEtdHlwZT1cIjJcIj4gLS0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBAY2xpY2s9XCJwaWNrVGltZSgyKVwiIGNsYXNzPVwic2VhcmNoX21ib3hfZDJfaW50IGFpYyBqdV9jXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiIHNlYXJjaF9tYm94X2QyX2ludHRleHRcIj57e3RpbWUxP3RpbWUxOifmkqTlh7onfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSA8L3BpY2tlcj4gLS0+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZWFyY2hfbWJveF9kM1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cInNlYXJjaF9tYm94X2QzX2ludFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiB2LW1vZGVsPVwidGVhbV9uYW1lXCIgcGxhY2Vob2xkZXI9XCLlm6LpmJ/lkI3np7BcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwic2VhcmNoX3R5cGU9PTFcIiBAY2xpY2s9XCJzZWFyY2hfdHlwZV9mdWMoMiwnL3N0YXRpYy9pbWFnZXMvc2VhcmNoX3R5cGVfMDMyLnBuZycpXCIgY2xhc3M9XCJzZWFyY2hfbWJveF9kM190ZXh0XCIgOnNyYz1cImdldGltZygnL3N0YXRpYy9pbWFnZXMvc2VhcmNoX3R5cGVfMDYyLnBuZycpXCJcclxuXHRcdFx0XHRcdFx0XHQgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCJzZWFyY2hfdHlwZT09MlwiIEBjbGljaz1cInNlYXJjaF90eXBlX2Z1YygzLCcvc3RhdGljL2ltYWdlcy9zZWFyY2hfdHlwZV8wOTIucG5nJylcIiBjbGFzcz1cInNlYXJjaF9tYm94X2QzX3RleHRcIiA6c3JjPVwiZ2V0aW1nKCcvc3RhdGljL2ltYWdlcy9zZWFyY2hfdHlwZV8wMzIucG5nJylcIlxyXG5cdFx0XHRcdFx0XHRcdCBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cInNlYXJjaF90eXBlPT0zXCIgQGNsaWNrPVwic2VhcmNoX3R5cGVfZnVjKDEsJy9zdGF0aWMvaW1hZ2VzL3NlYXJjaF90eXBlXzA2Mi5wbmcnKVwiIGNsYXNzPVwic2VhcmNoX21ib3hfZDNfdGV4dFwiIDpzcmM9XCJnZXRpbWcoJy9zdGF0aWMvaW1hZ2VzL3NlYXJjaF90eXBlXzA5Mi5wbmcnKVwiXHJcblx0XHRcdFx0XHRcdFx0IG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cInNlYXJjaF9tYm94X2QzX2ludFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiB2LW1vZGVsPVwiZGFuZ2VyX25hbWVcIiBwbGFjZWhvbGRlcj1cIuWNsemZqeexu+Wei1wiIC8+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZWFyY2hfbWJveF9kNFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cInNlYXJjaF9tYm94X2Q0X2ludFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiAgdi1tb2RlbD1cImJlX251bVwiIHBsYWNlaG9sZGVyPVwi55Sf6L+Y6ICF5pWw6YePXCIgLz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaF9tYm94X2Q0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwic2VhcmNoX21ib3hfZDRfaW50XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiICB2LW1vZGVsPVwibm90X2JlX251bVwiIHBsYWNlaG9sZGVyPVwi6YGH6Zq+6ICF5pWw6YePXCIgLz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQgPCEtLSA8cGlja2VyIG1vZGU9XCJ0aW1lXCIgOnZhbHVlPVwidGltZVwiIHN0YXJ0PVwiMDk6MDFcIiBlbmQ9XCIyMTowMVwiIEBjaGFuZ2U9XCJiaW5kVGltZUNoYW5nZVwiPlxyXG5cdFx0XHRcdFx0XHRcdOaXtumXtOmAieaLqTx2aWV3IGNsYXNzPVwidW5pLWlucHV0XCI+e3t0aW1lfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3BpY2tlcj4gLS0+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaF90eXBlX3RpcFwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNlYXJjaF90eXBlX3RpcF90ZXh0XCI+5rOo77yaPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJzZWFyY2hfdHlwZV90aXBfaW1nXCIgOnNyYz1cImdldGltZygnL3N0YXRpYy9pbWFnZXMvc2VhcmNoX3R5cGVfMDYucG5nJylcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJzZWFyY2hfdHlwZV90aXBfdGV4dFwiPuacquaQnOe0ojwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwic2VhcmNoX3R5cGVfdGlwX2ltZ1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDE1cHg7XCIgOnNyYz1cImdldGltZygnL3N0YXRpYy9pbWFnZXMvc2VhcmNoX3R5cGVfMDMucG5nJylcIlxyXG5cdFx0XHRcdFx0XHQgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic2VhcmNoX3R5cGVfdGlwX3RleHRcIj7mraPlnKjmkJzntKI8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInNlYXJjaF90eXBlX3RpcF9pbWdcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxNXB4O1wiIDpzcmM9XCJnZXRpbWcoJy9zdGF0aWMvaW1hZ2VzL3NlYXJjaF90eXBlXzA5LnBuZycpXCJcclxuXHRcdFx0XHRcdFx0IG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNlYXJjaF90eXBlX3RpcF90ZXh0XCI+5pCc57Si5a6M5oiQPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0a3NldF9idG5cIiBAY2xpY2s9XCJqdW1wX2Z1Y1wiIGRhdGEtdXJsPVwiL3BhZ2VzL21hcF9kdy9tYXBfZHc/dHlwZT1md3NtXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMjhweDtjb2xvcjogI2ZmZjtcIj7orr7nva7kvY3nva48L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHQ8IS0tIDx0ZXh0IEB0YXA9XCJ0a19zaG93MT1mYWxzZVwiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbmd1YW5iaVwiIHN0eWxlPVwiZm9udC1zaXplOiA1MHVweDtjb2xvcjogI2ZmZjtcIj48L3RleHQ+IC0tPlxyXG5cdFx0XHQ8dGV4dCBAY2xpY2s9XCJ0a19zaG93MT1mYWxzZVwiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbmd1YW5iaVwiIHN0eWxlPVwiZm9udC1zaXplOiA1MHB4O2NvbG9yOiAjZmZmO1wiPiYjeGU2MjE7PC90ZXh0PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDwhLS0g5qCH6K6w6K+m5oOFIC0tPlxyXG5cdFx0PHZpZXcgdi1pZj1cInRrX3Nob3dfYmp4cVwiIGNsYXNzPVwidGtfcG9wb3BcIiBAdG91Y2htb3ZlLnN0b3AucHJldmVudD0ndGVzdCc+XHJcblx0XHRcdDx2aWV3IHYtaWY9XCJial9kYXRhLnR5cGVfbmFtZSE9J+aQnOe0oidcIiBjbGFzcz1cInRrX21haW4xXCIgc3R5bGU9XCJwYWRkaW5nOiAwIWltcG9ydGFudDtcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX3VzZXJfbXNnXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJial91c2VyX3R4XCIgOnNyYz1cImdldGltZyhial9kYXRhLnVzZXJfaW5mby5hdmF0YXIpXCIgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4XzEgYmpfdXNlcl9seG1zZ1wiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX3VzZXJfbmFtZVwiPnt7YmpfZGF0YS51c2VyX2luZm8ubmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX3VzZXJfdGVsXCI+e3tial9kYXRhLnVzZXJfaW5mby51c2VybmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqeHFfeHFcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfZDFcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYmpfZDFfaWNvblwiIDpzcmM9XCJnZXRpbWcoYmpfZGF0YS5pY29uUGF0aClcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial9kMV9uYW1lXCI+e3tial9kYXRhLnR5cGVfbmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJial9kMlwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2QyX2xcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2QyX3RleHRcIj7ml7bpl7TvvJp7e2JqX2RhdGEuY3JlYXRlZF9hdH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfZDJfdGV4dFwiPue7j+W6pu+8mnt7YmpfZGF0YS5sb25naXR1ZGV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJqX2QyX3RleHRcIj7nuqzluqbvvJp7e2JqX2RhdGEubGF0aXR1ZGV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgQGNsaWNrPVwiZ2V0U2hhcmVcIiBjbGFzcz1cImJqX2QyX3NoYXJlXCIgOnNyYz1cImdldGltZygnL3N0YXRpYy9pbWFnZXMvdGtfc2hhcmUucG5nJylcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cImJ6X2ludF90a1wiIHR5cGU9XCJ0ZXh0XCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAzNXB4O1wiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCLlpIfms6hcIiB2LW1vZGVsPVwiYmpfZGF0YS5jb21tZW50XCIgLz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfdHlwZV9saSBial90eXBlX2xpX2N1clwiIHN0eWxlPVwid2lkdGg6IDQyNXB4O1wiIEBjbGljaz1cInVwZGF0ZV9iaigxKVwiPjx0ZXh0IHN0eWxlPVwiY29sb3I6ICNmZmY7XCI+5pu05pawPC90ZXh0Pjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfdHlwZV9saSBial90eXBlX2xpX2N1cjFcIiBzdHlsZT1cIndpZHRoOiA0MjVweDtcIiBAY2xpY2s9XCJ1cGRhdGVfYmooMilcIj48dGV4dCBzdHlsZT1cImNvbG9yOiAjZmZmO1wiPuWIoOmZpDwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IHYtZWxzZSBjbGFzcz1cInRrX21haW5cIj5cclxuXHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJhZGRfYmpfaWNvblwiIDpzcmM9XCJnZXRpbWcoJy9zdGF0aWMvaW1hZ2VzL2FkZF9ial9pY29uLnBuZycpXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHRleHQgdi1pZj1cInRrX3Nob3cxX251bT09NVwiIGNsYXNzPVwibm90ZXRrX3RpdFwiPuihpeWFheaQnOe0ouS/oeaBrzwvdGV4dD5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm5vdGV0a190aW1lXCI+e3tub3RlX3RpbWVfdH19PC90ZXh0PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfbGlzdF9ib3hcIj5cclxuXHRcdFx0XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaF9tYm94XCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInNlYXJjaF9tYm94X2ltZ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvc2VhcmNoX2JnXzAzLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaF9tYm94X2QxXCI+5pe26Ze0L+aXpeacnzwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZWFyY2hfbWJveF9kMlwiPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gPGlucHV0IGNsYXNzPVwic2VhcmNoX21ib3hfZDJfaW50XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwi6L+b5YWlXCIvPiAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIDxwaWNrZXIgbW9kZT1cInRpbWVcIiB2YWx1ZT1cIjEyOjAwXCIgQGNoYW5nZT1cImJpbmRUaW1lQ2hhbmdlXCIgZGF0YS10eXBlPVwiMVwiPiAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IEBjbGljaz1cInBpY2tUaW1lKDEpXCIgY2xhc3M9XCJzZWFyY2hfbWJveF9kMl9pbnQgYWljIGp1X2NcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCIgc2VhcmNoX21ib3hfZDJfaW50dGV4dCBcIj57e3RpbWU/dGltZTon6L+b5YWlJ319PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gPC9waWNrZXI+IC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic2VhcmNoX21ib3hfZDJfdGV4dFwiPjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIDxpbnB1dCBjbGFzcz1cInNlYXJjaF9tYm94X2QyX2ludFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIuaSpOWHulwiLz4gLS0+XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gPHBpY2tlciBtb2RlPVwidGltZVwiIHZhbHVlPVwiMTI6MDBcIiBAY2hhbmdlPVwiYmluZFRpbWVDaGFuZ2VcIiBkYXRhLXR5cGU9XCIyXCI+IC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgQGNsaWNrPVwicGlja1RpbWUoMilcIiBjbGFzcz1cInNlYXJjaF9tYm94X2QyX2ludCBhaWMganVfY1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIiBzZWFyY2hfbWJveF9kMl9pbnR0ZXh0XCI+e3t0aW1lMT90aW1lMTon5pKk5Ye6J319PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gPC9waWNrZXI+IC0tPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VhcmNoX21ib3hfZDNcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJzZWFyY2hfbWJveF9kM19pbnRcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgdi1tb2RlbD1cInRlYW1fbmFtZVwiIHBsYWNlaG9sZGVyPVwi5Zui6Zif5ZCN56ewXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cInNlYXJjaF90eXBlPT0xXCIgQGNsaWNrPVwic2VhcmNoX3R5cGVfZnVjKDIsJy9zdGF0aWMvaW1hZ2VzL3NlYXJjaF90eXBlXzAzMi5wbmcnKVwiIGNsYXNzPVwic2VhcmNoX21ib3hfZDNfdGV4dFwiIDpzcmM9XCJnZXRpbWcoJy9zdGF0aWMvaW1hZ2VzL3NlYXJjaF90eXBlXzA2Mi5wbmcnKVwiXHJcblx0XHRcdFx0XHRcdFx0IG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwic2VhcmNoX3R5cGU9PTJcIiBAY2xpY2s9XCJzZWFyY2hfdHlwZV9mdWMoMywnL3N0YXRpYy9pbWFnZXMvc2VhcmNoX3R5cGVfMDkyLnBuZycpXCIgY2xhc3M9XCJzZWFyY2hfbWJveF9kM190ZXh0XCIgOnNyYz1cImdldGltZygnL3N0YXRpYy9pbWFnZXMvc2VhcmNoX3R5cGVfMDMyLnBuZycpXCJcclxuXHRcdFx0XHRcdFx0XHQgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCJzZWFyY2hfdHlwZT09M1wiIEBjbGljaz1cInNlYXJjaF90eXBlX2Z1YygxLCcvc3RhdGljL2ltYWdlcy9zZWFyY2hfdHlwZV8wNjIucG5nJylcIiBjbGFzcz1cInNlYXJjaF9tYm94X2QzX3RleHRcIiA6c3JjPVwiZ2V0aW1nKCcvc3RhdGljL2ltYWdlcy9zZWFyY2hfdHlwZV8wOTIucG5nJylcIlxyXG5cdFx0XHRcdFx0XHRcdCBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJzZWFyY2hfbWJveF9kM19pbnRcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgdi1tb2RlbD1cImRhbmdlcl9uYW1lXCIgcGxhY2Vob2xkZXI9XCLljbHpmannsbvlnotcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VhcmNoX21ib3hfZDRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJzZWFyY2hfbWJveF9kNF9pbnRcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgIHYtbW9kZWw9XCJiZV9udW1cIiBwbGFjZWhvbGRlcj1cIueUn+i/mOiAheaVsOmHj1wiIC8+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZWFyY2hfbWJveF9kNFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cInNlYXJjaF9tYm94X2Q0X2ludFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiAgdi1tb2RlbD1cIm5vdF9iZV9udW1cIiBwbGFjZWhvbGRlcj1cIumBh+mavuiAheaVsOmHj1wiIC8+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0IDwhLS0gPHBpY2tlciBtb2RlPVwidGltZVwiIDp2YWx1ZT1cInRpbWVcIiBzdGFydD1cIjA5OjAxXCIgZW5kPVwiMjE6MDFcIiBAY2hhbmdlPVwiYmluZFRpbWVDaGFuZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHTml7bpl7TpgInmi6k8dmlldyBjbGFzcz1cInVuaS1pbnB1dFwiPnt7dGltZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0PC9waWNrZXI+IC0tPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZWFyY2hfdHlwZV90aXBcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJzZWFyY2hfdHlwZV90aXBfdGV4dFwiPuazqO+8mjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwic2VhcmNoX3R5cGVfdGlwX2ltZ1wiIDpzcmM9XCJnZXRpbWcoJy9zdGF0aWMvaW1hZ2VzL3NlYXJjaF90eXBlXzA2LnBuZycpXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic2VhcmNoX3R5cGVfdGlwX3RleHRcIj7mnKrmkJzntKI8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInNlYXJjaF90eXBlX3RpcF9pbWdcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxNXB4O1wiIDpzcmM9XCJnZXRpbWcoJy9zdGF0aWMvaW1hZ2VzL3NlYXJjaF90eXBlXzAzLnBuZycpXCJcclxuXHRcdFx0XHRcdFx0IG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNlYXJjaF90eXBlX3RpcF90ZXh0XCI+5q2j5Zyo5pCc57SiPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJzZWFyY2hfdHlwZV90aXBfaW1nXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogMTVweDtcIiA6c3JjPVwiZ2V0aW1nKCcvc3RhdGljL2ltYWdlcy9zZWFyY2hfdHlwZV8wOS5wbmcnKVwiXHJcblx0XHRcdFx0XHRcdCBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJzZWFyY2hfdHlwZV90aXBfdGV4dFwiPuaQnOe0ouWujOaIkDwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGtzZXRfYnRuXCIgIEB0YXA9XCJ1cGRhdGVfc2VhcmNoKDEpXCIgPlxyXG5cdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJmb250LXNpemU6IDI4cHg7Y29sb3I6ICNmZmY7XCI+5L+u5pS55L+h5oGvPC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRrc2V0X2J0blwiIEB0YXA9XCJ1cGRhdGVfc2VhcmNoKDIpXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMjhweDtjb2xvcjogI2ZmZjtcIiA+5Yig6ZmkPC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIDx0ZXh0IEBjbGljaz1cInRrX3Nob3c9ZmFsc2VcIiBjbGFzcz1cImljb25mb250IGljb25ndWFuYmlcIiBzdHlsZT1cImZvbnQtc2l6ZTogNTB1cHg7Y29sb3I6ICNmZmY7XCI+PC90ZXh0PiAtLT5cclxuXHRcdFx0PHRleHQgQGNsaWNrPVwidGtfc2hvd19ianhxPWZhbHNlXCIgY2xhc3M9XCJpY29uZm9udCBcIiBzdHlsZT1cImZvbnQtc2l6ZTogNTBweDtjb2xvcjogI2ZmZjtcIj4mI3hlNjIxOzwvdGV4dD5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0XHQ8IS0tIDwvYmxvY2s+IC0tPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblx0aW1wb3J0IHNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZS5qcyc7XHJcblx0aW1wb3J0IHtcclxuXHRcdG1hcFN0YXRlLFxyXG5cdFx0bWFwTXV0YXRpb25zXHJcblx0fSBmcm9tICd2dWV4J1xyXG5cdHZhciB0aGF0LCBtYXBDb250ZXh0LCBtYXBFbmRsb2FkaW5nO1xyXG5cdHZhciBkanNfZnVjXHJcblx0dmFyIGRqc19mdWMxXHJcblx0dmFyIHRoYXRcclxuXHR2YXIgcXVlcnlcclxuXHRpbXBvcnQgdG9yY2ggZnJvbSBcIkAvY29tbW9uL2RjLXRvcmNoL3RvcmNoLmpzXCJcclxuXHRjb25zdCBkb21Nb2R1bGUgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cdGRvbU1vZHVsZS5hZGRSdWxlKCdmb250RmFjZScsIHtcclxuXHRcdCdmb250RmFtaWx5JzogXCJpY29uZm9udFwiLFxyXG5cdFx0J3NyYyc6IFwidXJsKCcuLi8uLi9zdGF0aWMvZm9udHMvaWNvbmZvbnQudHRmJylcIlxyXG5cdH0pO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bGF0aXR1ZGU6IDM5LjkwOSxcclxuXHRcdFx0XHRsb25naXR1ZGU6IDExNi4zOTc0MixcclxuXHRcdFx0XHRtYXBXaWR0aDogMCwgLy/lnLDlm77ljLrln5/lrr3luqZcclxuXHRcdFx0XHRtYXBIZWlnaHQ6IDAsIC8v5Zyw5Zu+5Yy65Z+f6auY5bqmXHJcblx0XHRcdFx0Y2VudGVyVG9wOiAwLCAvL+S4reW/g+WbvueJh+WdkOagh1xyXG5cdFx0XHRcdGNlbnRlckxlZnQ6IDAsIC8v5Lit5b+D5Zu+54mH5Z2Q5qCHXHJcblx0XHRcdFx0dHJhbnNsYXRlWTogMTY1LFxyXG5cdFx0XHRcdG1hcmtlcnNBcnI6IFtdLCAvL+imhueblueJqVxyXG5cdFx0XHRcdG1hcENvbnRyb2xzOiBbXSxcclxuXHRcdFx0XHRtYXBDb250cm9sczE6IFt7XHJcblx0XHRcdFx0XHRpZDogXCIxXCIsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRsZWZ0OiAzNzUgLSAxNSxcclxuXHRcdFx0XHRcdFx0dG9wOiAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0IC0gNDUgLSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHQpIC8gMiAtIDQ5LFxyXG5cdFx0XHRcdFx0XHR3aWR0aDogMzAsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogNDlcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRpY29uUGF0aDogXCIvc3RhdGljL2ltYWdlcy96dW9iaWFvLnBuZ1wiLFxyXG5cdFx0XHRcdFx0Y2xpY2thYmxlOiBmYWxzZVxyXG5cdFx0XHRcdH1dLCAvL+WcsOWbvuS4reeahOaOp+S7tlxyXG5cdFx0XHRcdGJqX3RpbWU6IDEwLFxyXG5cdFx0XHRcdGJhb2ppbmc6IGZhbHNlLFxyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0XHR0a19zaG93OiBmYWxzZSxcclxuXHRcdFx0XHR0a19zaG93MTogZmFsc2UsXHJcblx0XHRcdFx0dGtfc2hvdzFfbnVtOiAwLCAvL+agh+iusDHnuqfliIbnsbtcclxuXHRcdFx0XHRub3RlX3RpbWVfdDogJycsXHJcblx0XHRcdFx0dGtfc2hvdzFfY3VyOiAtMSwgLy/moIforrAy57qn5YiG57G7XHJcblx0XHRcdFx0X25hdkhlaWdodDonJyxcclxuXHRcdFx0XHR6Yl9pbWc6JycsXHJcblx0XHRcdFx0emJfYno6JycsXHJcblx0XHRcdFx0emJfdGl0bGU6JycsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGVhbV9uYW1lOicnLFxyXG5cdFx0XHRcdGRhbmdlcl9uYW1lOicnLFxyXG5cdFx0XHRcdGJlX251bTonJyxcclxuXHRcdFx0XHRub3RfYmVfbnVtOicnLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRrX3Nob3dfc3g6IGZhbHNlLCAvL+etm+mAiVxyXG5cdFx0XHRcdHRrX3Nob3dfc3hfY3VyOiAwLCAvL+etm+mAieWIhuexu1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRrX3Nob3dfYmp4cTogZmFsc2UsIC8v5qCH6K6w6K+m5oOF5byA5YWzXHJcblx0XHRcdFx0YmpfaWQ6IC0xLCAvL+agh+iusGlkXHJcblx0XHRcdFx0YmpfZGF0YTonJywvL+agh+iusOivpuaDhVxyXG5cclxuXHRcdFx0XHRzZWFyY2hfdHlwZTogMSwgLy8g5pCc57Si54q25oCBICAx5pyq5pCc57SiICAy5q2j5Zyo5pCc57SiIDPmkJzntKLlrozmiJBcclxuXHRcdFx0XHR0aW1lOicnLFxyXG5cdFx0XHRcdHRpbWUxOicnLFxyXG5cdFx0XHRcdGFycmF5OltcclxuXHRcdFx0XHRcdDEsMSwxLDEsMlxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0QVVESU86IHVuaS5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpLFxyXG5cdFx0XHRcdHRvcmNoX3R5cGU6ZmFsc2UsXHJcblx0XHRcdFx0c2hvd19jb3VudDowXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHQuLi5tYXBTdGF0ZShbJ2hhc0xvZ2luJywgJ2ZvcmNlZExvZ2luJywgJ3VzZXJOYW1lJywgJ2xvZ2luRGF0YXMnXSksXHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHQvLyByZXR1cm5cclxuXHRcdFx0dGhhdCA9IHRoaXNcclxuXHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdHRoaXMuZ2V0TG9jYXRpb24oKTtcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblxyXG5cdFx0XHR0aGlzLkFVRElPLnNyYyA9ICcvc3RhdGljL211c2ljL2ppbmdiYW9fa29uZy5tcDMnO1xyXG5cdFx0XHR0aGlzLkFVRElPLmxvb3A9dHJ1ZVxyXG5cdFx0XHQvL+mfs+mikei/m+WFpeWPr+S7peaSreaUvueKtuaAge+8jOS9huS4jeS/neivgeWQjumdouWPr+S7pea1geeVheaSreaUvlxyXG5cdFx0XHR0aGlzLkFVRElPLm9uQ2FucGxheSgocmVzKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ+mfs+mikei/m+WFpeWPr+S7peaSreaUvueKtuaAge+8jOS9huS4jeS/neivgeWQjumdouWPr+S7pea1geeVheaSreaUvicpXHJcblx0XHRcdFx0XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQvL+mfs+mikeaSreaUvlxyXG5cdFx0XHR0aGlzLkFVRElPLm9uUGxheSgocmVzKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ+mfs+mikeaSreaUvicpXHJcblx0XHRcdFx0dW5pLnZpYnJhdGVMb25nKHtcclxuXHRcdFx0XHQgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcclxuXHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRvcmNoLm9uKCk7XHJcblx0XHRcdFx0dGhhdC50b3JjaF90eXBlPXRydWVcclxuXHRcdFx0XHRkanNfZnVjPXNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdCAgaWYodGhhdC50b3JjaF90eXBlPT10cnVlKXtcclxuXHRcdFx0XHRcdFx0dG9yY2gub2ZmKCk7XHJcblx0XHRcdFx0XHRcdHRoYXQudG9yY2hfdHlwZT1mYWxzZVxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHRvcmNoLm9uKCk7XHJcblx0XHRcdFx0XHRcdHRoYXQudG9yY2hfdHlwZT10cnVlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQgIC8vIGNvbnNvbGUubG9nKHRoYXQuZGpzKCkpXHJcblx0XHRcdFx0fSwgMTAwKTtcclxuXHRcdFx0XHRkanNfZnVjMT1zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHR1bmkudmlicmF0ZUxvbmcoe1xyXG5cdFx0XHRcdFx0ICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdCAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcclxuXHRcdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdC8v6Z+z6aKR5YGc5q2iXHJcblx0XHRcdHRoaXMuQVVESU8ub25TdG9wKChyZXMpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn6Z+z6aKR5YGc5q2iJylcclxuXHRcdFx0XHRjbGVhckludGVydmFsKGRqc19mdWMpXHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChkanNfZnVjMSlcclxuXHRcdFx0XHR0b3JjaC5vZmYoKTtcclxuXHRcdFx0XHR0aGF0LnRvcmNoX3R5cGU9dHJ1ZVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly/or63pn7Poh6rnhLbmkq3mlL7nu5PmnZ9cclxuXHRcdFx0dGhpcy5BVURJTy5vbkVuZGVkKChyZXMpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn6K+t6Z+z6Ieq54S25pKt5pS+57uT5p2fJylcclxuXHRcdFx0XHR0aGlzLnBsYXlNc2dpZCA9IG51bGw7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRtYXBDb250ZXh0ID0gdW5pLmNyZWF0ZU1hcENvbnRleHQoJ21hcCcsIHRoaXMpO1xyXG5cdFx0XHQvKmNvbnN0IGlubmVyQXVkaW9Db250ZXh0ID0gdW5pLmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCk7XHJcblx0XHRcdGlubmVyQXVkaW9Db250ZXh0LmF1dG9wbGF5ID0gdHJ1ZTtcclxuXHRcdFx0aW5uZXJBdWRpb0NvbnRleHQuc3JjID0gJ2h0dHBzOi8vdmtjZXl1Z3UuY2RuLmJzcGFwcC5jb20vVktDRVlVR1UtaGVsbG8tdW5pYXBwLzJjYzIyMGUwLWMyN2EtMTFlYS05ZGZiLTZkYThlMzA5ZTBkOC5tcDMnO1xyXG5cdFx0XHRpbm5lckF1ZGlvQ29udGV4dC5vblBsYXkoKCkgPT4ge1xyXG5cdFx0XHQgIGNvbnNvbGUubG9nKCflvIDlp4vmkq3mlL4nKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGlubmVyQXVkaW9Db250ZXh0Lm9uRXJyb3IoKHJlcykgPT4ge1xyXG5cdFx0XHQgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpO1xyXG5cdFx0XHQgIGNvbnNvbGUubG9nKHJlcy5lcnJDb2RlKTtcclxuXHRcdFx0fSk7Ki9cclxuXHRcdH0sXHJcblx0XHRvbkhpZGUoKSB7XHJcblx0XHRcdHRoYXQuc2hvd19jb3VudCsrXHJcblx0XHRcdGNsZWFySW50ZXJ2YWwoZGpzX2Z1YylcclxuXHRcdFx0Y2xlYXJJbnRlcnZhbChkanNfZnVjMSlcclxuXHRcdFx0dG9yY2gub2ZmKCk7XHJcblx0XHRcdHRoYXQudG9yY2hfdHlwZT10cnVlXHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhhdC5tYXBXaWR0aCA9IDc1MFxyXG5cdFx0XHR0aGF0LnNIZWlnaHQgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHQ7XHJcblx0XHRcdC8vIHRoYXQubWFwSGVpZ2h0ID0gKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCAgLSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHQpIC0gMjQ2O1xyXG5cdFx0XHR0aGF0Lm1hcEhlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCAqIDIgLSAzOTY7XHJcblx0XHRcdHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdFx0cXVlcnkuc2VsZWN0KCcjbWFwJykuYm91bmRpbmdDbGllbnRSZWN0KGRhdGEgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0XHRcdFx0dmFyIF9uYXZIZWlnaHQgPSBkYXRhLmhlaWdodDtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnX25hdkhlaWdodC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT4nKVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKF9uYXZIZWlnaHQpXHJcblx0XHRcdFx0Ly8gX25hdkhlaWdodD1fbmF2SGVpZ2h0K3VuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnN0YXR1c0JhckhlaWdodFxyXG5cdFx0XHRcdF9uYXZIZWlnaHQgPSBfbmF2SGVpZ2h0IC8gMlxyXG5cdFx0XHRcdF9uYXZIZWlnaHQgPSBfbmF2SGVpZ2h0LnRvRml4ZWQoMClcclxuXHRcdFx0XHR0aGF0Ll9uYXZIZWlnaHQ9X25hdkhlaWdodFxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHR5cGVvZiBfbmF2SGVpZ2h0KVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHR5cGVvZiA3MTApXHJcblx0XHRcdFx0dmFyIHNzcyA9IFt7XHJcblx0XHRcdFx0XHRpZDogXCIxXCIsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRsZWZ0OiA3NTAgLyAyIC0gMjgsXHJcblx0XHRcdFx0XHRcdC8vIHRvcDogX25hdkhlaWdodCAtIDY4LFxyXG5cdFx0XHRcdFx0XHR0b3A6IF9uYXZIZWlnaHQsXHJcblx0XHRcdFx0XHRcdHdpZHRoOiA1NSxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiA2OFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGljb25QYXRoOiB0aGF0LnpiX2ltZyxcclxuXHRcdFx0XHRcdGNsaWNrYWJsZTogZmFsc2VcclxuXHRcdFx0XHR9XVxyXG5cdFx0XHRcdHRoYXQuc2V0SGVpZ2h0KHNzcylcclxuXHRcdFx0XHR0aGF0LnRrX3Nob3cxID0gZmFsc2VcclxuXHRcdFx0XHQvLyB1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0Ly8gXHQvLyB1cmw6ICcvcGFnZXMvbWFwX2R3L21hcF9kdz96Yl90aXRsZT0nICsgdGhhdC56Yl90aXRsZSArICcmdGtfc2hvdzFfbnVtPScgKyB0aGF0LnRrX3Nob3cxX251bSsnJnpiX2ltZz0nICsgdGhhdC56Yl9pbWcrJyZ6Yl9iej0nICsgdGhhdC56Yl9ielxyXG5cdFx0XHRcdC8vIFx0dXJsOiAnL3BhZ2VzL21hcF9kdy9tYXBfZHc/emJfdGl0bGU9JyArIHRoYXQuemJfdGl0bGUrJyZ6Yl9pbWc9JyArIHRoYXQuemJfaW1nKycmemJfYno9JyArIHRoYXQuemJfYnpcclxuXHRcdFx0XHQvLyB9KVxyXG5cdFx0XHRcdC8vIFZ1ZS5zZXQodGhhdC5tYXBDb250cm9sc1swXS5wb3NpdGlvbiwndG9wJyxzc3MpXHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhhdC5tYXBDb250cm9scylcclxuXHRcdFx0fSkuZXhlYygpO1xyXG5cdFx0fSxcclxuXHRcdG9uU2hvdygpIHtcclxuXHRcdFx0aWYodGhhdC5zaG93X2NvdW50PjApe1xyXG5cdFx0XHRcdHRoYXQuZ2V0TGlzdCgpXHJcblx0XHRcdH1cclxuXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQuLi5tYXBNdXRhdGlvbnMoWydzZXRBZGRyZXNzJywgJ3NldEhlaWdodCddKSxcclxuXHRcdFx0Ly8g5pKt5pS+6K+t6Z+zXHJcblx0XHRcdHBsYXlWb2ljZShtc2cpIHtcclxuXHRcdFx0XHRcdHRoaXMuQVVESU8ucGxheSgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRiYW9qaW5nX2Z1Yygpe1xyXG5cdFx0XHRcdHZhciB0aGF0PXRoaXNcclxuXHRcdFx0XHR0aGlzLmJhb2ppbmc9dHJ1ZVxyXG5cdFx0XHRcdHRoYXQuYmpfdGltZT0zXHJcblx0XHRcdFx0ZGpzX2Z1Yz1zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0ICBpZih0aGF0LmJqX3RpbWU9PTApe1xyXG5cdFx0XHRcdFx0XHQvLyB1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0Ly8gXHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0Ly8gXHR0aXRsZTon6K2m5oql5pON5L2cJ1xyXG5cdFx0XHRcdFx0XHQvLyB9KVxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygwKVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChkanNfZnVjKVxyXG5cdFx0XHRcdFx0XHR0aGF0LmJqX3RpbWU9JyEnXHJcblx0XHRcdFx0XHRcdHRoYXQucGxheVZvaWNlKClcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHR0aGF0LmJqX3RpbWUtLVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCAgLy8gY29uc29sZS5sb2codGhhdC5kanMoKSlcclxuXHRcdFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YmFvamluZ19kZWwoKXtcclxuXHRcdFx0XHR2YXIgdGhhdD10aGlzXHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChkanNfZnVjKVxyXG5cdFx0XHRcdHRoaXMuYmpfdGltZT0xMFxyXG5cdFx0XHRcdHRoaXMuYmFvamluZz1mYWxzZVxyXG5cdFx0XHRcdHRoaXMuQVVESU8uc3RvcCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly/orr7nva7lnZDmoIcy57qnXHJcblx0XHRcdHNldF9wb3NfZnVjKG51bSxpbWcsdGl0bGUpe1xyXG5cdFx0XHRcdHRoYXQudGtfc2hvdzFfY3VyPW51bVxyXG5cdFx0XHRcdHRoYXQuemJfaW1nPWltZ1xyXG5cdFx0XHRcdHRoYXQuemJfdGl0bGU9dGl0bGVcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/orr7nva7mkJzntKLnirbmgIFcclxuXHRcdFx0c2VhcmNoX3R5cGVfZnVjKG51bSxpbWcpe1xyXG5cdFx0XHRcdHRoYXQuc2VhcmNoX3R5cGU9bnVtXHJcblx0XHRcdFx0dGhhdC56Yl9pbWc9aW1nXHJcblx0XHRcdFx0dGhhdC56Yl90aXRsZT0n5pCc57SiJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0cGlja1RpbWUodHlwZSl7XHJcblx0XHRcdFx0cGx1cy5uYXRpdmVVSS5waWNrVGltZShmdW5jdGlvbihlKXtcclxuXHRcdFx0XHRcdHZhciBkPWUuZGF0ZTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi6YCJ5oup55qE5pe26Ze077yaXCIrZC5nZXRIb3VycygpK1wiOlwiK2QuZ2V0TWludXRlcygpKTtcclxuXHRcdFx0XHRcdHZhciBtaW49ZC5nZXRNaW51dGVzKClcclxuXHRcdFx0XHRcdGlmKGQuZ2V0TWludXRlcygpPDEwKXtcclxuXHRcdFx0XHRcdFx0bWluPScwJytkLmdldE1pbnV0ZXMoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYodHlwZT09MSl7XHJcblx0XHRcdFx0XHRcdHRoYXQudGltZT1kLmdldEhvdXJzKCkrXCI6XCIrbWluXHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0dGhhdC50aW1lMT1kLmdldEhvdXJzKCkrXCI6XCIrbWluXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9LCBmdW5jdGlvbihlKXtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5pyq6YCJ5oup5pe26Ze077yaXCIrSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0ZXN0KCkge30sXHJcblx0XHRcdGJpbmRUaW1lQ2hhbmdlKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlKVxyXG5cdFx0XHRcdHRoaXMudGltZSA9IGUudGFyZ2V0LnZhbHVlXHJcblx0XHRcdH0sXHJcblx0XHRcdHVwZGF0ZV9iaih0eXBlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dmFyIGRhdGEgPSB7fVxyXG5cdFx0XHRcdGlmICh0eXBlID09IDEpIHtcclxuXHRcdFx0XHRcdC8vIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0Ly8gXHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHQvLyBcdHRpdGxlOiAn5pu05paw5oiQ5YqfJ1xyXG5cdFx0XHRcdFx0Ly8gfSlcclxuXHRcdFx0XHRcdGRhdGEgPSB7XHJcblx0XHRcdFx0XHRcdHRva2VuOnRoYXQuJHN0b3JlLnN0YXRlLmxvZ2luRGF0YXMudG9rZW4sXHJcblx0XHRcdFx0XHRcdHR5cGU6ICd1cGRhdGUnLFxyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbl9pZDp0aGF0LmJqX2lkLFxyXG5cdFx0XHRcdFx0XHRjb21tZW50OnRoYXQuYmpfZGF0YS5jb21tZW50XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0eXBlID09IDIpIHtcclxuXHRcdFx0XHRcdC8vIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0Ly8gXHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHQvLyBcdHRpdGxlOiAn5Yig6Zmk5oiQ5YqfJ1xyXG5cdFx0XHRcdFx0Ly8gfSlcclxuXHRcdFx0XHRcdGRhdGEgPSB7XHJcblx0XHRcdFx0XHRcdHRva2VuOnRoYXQuJHN0b3JlLnN0YXRlLmxvZ2luRGF0YXMudG9rZW4sXHJcblx0XHRcdFx0XHRcdHR5cGU6ICdkZWwnLFxyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbl9pZDp0aGF0LmJqX2lkXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0XHRcdFx0aWYodGhhdC5idG5fa2c9PTEpe1xyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQuYnRuX2tnPTFcclxuXHRcdFx0XHQvL3NlbGVjdFNhcmF5bERldGFpbEJ5VXNlckNhcmRcclxuXHRcdFx0XHR2YXIgamt1cmwgPSAnL21pbmFwcC9wb3NpdGlvbidcclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfmraPlnKjojrflj5bmlbDmja4nLFxyXG5cdFx0XHRcdFx0bWFzazp0cnVlXHJcblx0XHRcdFx0fSlcdFx0XHRcdFxyXG5cdFx0XHRcdHNlcnZpY2UuUF9wb3N0KGprdXJsLCBkYXRhKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHR0aGF0LmJ0bl9rZyA9IDBcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdHZhciBkYXRhcyA9IHJlcy5kYXRhXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHR5cGVvZiBkYXRhcylcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBkYXRhcyA9PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdFx0XHRcdGRhdGFzID0gSlNPTi5wYXJzZShkYXRhcylcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAodHlwZSA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+abtOaWsOaIkOWKnydcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICh0eXBlID09IDIpIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5Yig6Zmk5oiQ5YqfJ1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhhdC50a19zaG93X2JqeHEgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHR0aGF0LmdldExpc3QoKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5tc2cpIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXMubXNnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5pON5L2c5aSx6LSlJ1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KS5jYXRjaChlID0+IHtcclxuXHRcdFx0XHRcdHRoYXQuYnRuX2tnID0gMFxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZSlcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5pON5L2c5aSx6LSlJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0dXBkYXRlX3NlYXJjaCh0eXBlKSB7XHJcblx0XHRcdFx0aWYgKCF0aGF0LnRpbWUgfHwhdGhhdC50aW1lMSkge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfor7fpgInmi6nml7bpl7QnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghdGhhdC50ZWFtX25hbWUpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn6K+35aGr5YaZ5Zui6Zif5ZCN56ewJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgZGF0YSA9IHt9XHJcblx0XHRcdFx0aWYgKHR5cGUgPT0gMSkge1xyXG5cdFx0XHRcdFx0Ly8gdW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHQvLyBcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdC8vIFx0dGl0bGU6ICfmm7TmlrDmiJDlip8nXHJcblx0XHRcdFx0XHQvLyB9KVxyXG5cdFx0XHRcdFx0ZGF0YSA9IHtcclxuXHRcdFx0XHRcdFx0dG9rZW46dGhhdC4kc3RvcmUuc3RhdGUubG9naW5EYXRhcy50b2tlbixcclxuXHRcdFx0XHRcdFx0dHlwZTogJ3VwZGF0ZScsXHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uX2lkOnRoYXQuYmpfaWQsXHJcblx0XHRcdFx0XHRcdGljb25QYXRoOnRoYXQuemJfaW1nLFxyXG5cdFx0XHRcdFx0XHRlbnRlcl90aW1lOnRoYXQudGltZSwgICAgLy/ml7bpl7RcclxuXHRcdFx0XHRcdFx0ZXZhY3VhdGVfdGltZTp0aGF0LnRpbWUxLCAgIC8v5pe26Ze0MVxyXG5cdFx0XHRcdFx0XHR0ZWFtX25hbWU6dGhhdC50ZWFtX25hbWUsICAvL+WboumYn+WQjVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aGF6YXJkX3R5cGU6dGhhdC5kYW5nZXJfbmFtZSwgIC8v5Y2x6Zmp57G75Z6LXHJcblx0XHRcdFx0XHRcdHN1cnZpdm9yOnRoYXQuYmVfbnVtLCAgICAgIC8v55Sf5a2Y5pWwXHJcblx0XHRcdFx0XHRcdHZpY3RpbTp0aGF0Lm5vdF9iZV9udW0sICAgLy/pgYfpmr7mlbBcclxuXHRcdFx0XHRcdFx0c2VhcmNoX3N0YXRlOnRoYXQuc2VhcmNoX3R5cGUsIC8v5pCc57Si54q25oCBXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0eXBlID09IDIpIHtcclxuXHRcdFx0XHRcdC8vIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0Ly8gXHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHQvLyBcdHRpdGxlOiAn5Yig6Zmk5oiQ5YqfJ1xyXG5cdFx0XHRcdFx0Ly8gfSlcclxuXHRcdFx0XHRcdGRhdGEgPSB7XHJcblx0XHRcdFx0XHRcdHRva2VuOnRoYXQuJHN0b3JlLnN0YXRlLmxvZ2luRGF0YXMudG9rZW4sXHJcblx0XHRcdFx0XHRcdHR5cGU6ICdkZWwnLFxyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbl9pZDp0aGF0LmJqX2lkXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0XHRcdFx0aWYodGhhdC5idG5fa2c9PTEpe1xyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQuYnRuX2tnPTFcclxuXHRcdFx0XHQvL3NlbGVjdFNhcmF5bERldGFpbEJ5VXNlckNhcmRcclxuXHRcdFx0XHR2YXIgamt1cmwgPSAnL21pbmFwcC9wb3NpdGlvbidcclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfmraPlnKjojrflj5bmlbDmja4nLFxyXG5cdFx0XHRcdFx0bWFzazp0cnVlXHJcblx0XHRcdFx0fSlcdFx0XHRcdFxyXG5cdFx0XHRcdHNlcnZpY2UuUF9wb3N0KGprdXJsLCBkYXRhKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHR0aGF0LmJ0bl9rZyA9IDBcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdHZhciBkYXRhcyA9IHJlcy5kYXRhXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHR5cGVvZiBkYXRhcylcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBkYXRhcyA9PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdFx0XHRcdGRhdGFzID0gSlNPTi5wYXJzZShkYXRhcylcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAodHlwZSA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+abtOaWsOaIkOWKnydcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICh0eXBlID09IDIpIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5Yig6Zmk5oiQ5YqfJ1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhhdC50a19zaG93X2JqeHEgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHR0aGF0LmdldExpc3QoKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5tc2cpIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXMubXNnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5pON5L2c5aSx6LSlJ1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KS5jYXRjaChlID0+IHtcclxuXHRcdFx0XHRcdHRoYXQuYnRuX2tnID0gMFxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZSlcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5pON5L2c5aSx6LSlJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Z2V0U2hhcmUoKSB7XHJcblx0XHRcdFx0dW5pLnNoYXJlV2l0aFN5c3RlbSh7XHJcblx0XHRcdFx0XHR0eXBlOiAndGV4dCcsXHJcblx0XHRcdFx0XHRocmVmOiAnaHR0cHM6Ly91bmlhcHAuZGNsb3VkLmlvJyxcclxuXHRcdFx0XHRcdHN1bW1hcnk6ICfliIbkuqvlhoXlrrknLFxyXG5cdFx0XHRcdFx0c3VjY2VzcygpIHtcclxuXHRcdFx0XHRcdFx0Ly8g5YiG5Lqr5a6M5oiQ77yM6K+35rOo5oSP5q2k5pe25LiN5LiA5a6a5piv5oiQ5Yqf5YiG5LqrXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbCgpIHtcclxuXHRcdFx0XHRcdFx0Ly8g5YiG5Lqr5aSx6LSlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQvLyBfYXBwLmdldFNoYXJlKGZhbHNlLCBmYWxzZSwgMiwgJycsICcnLCAnJywgdGhhdC5jYW1lcmFfaW1nLCBmYWxzZSwgZmFsc2UpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvcGVuX3RrKG51bSkge1xyXG5cdFx0XHRcdHRoYXQudGtfc2hvdyA9IGZhbHNlXHJcblx0XHRcdFx0dGhhdC50a19zaG93MSA9IHRydWVcclxuXHRcdFx0XHR0aGF0LnRrX3Nob3cxX251bSA9IG51bVxyXG5cclxuXHRcdFx0XHR2YXIgbm93X3RpbWUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcdHZhciBub3dfeWVhciA9IG5vd190aW1lLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRcdFx0dmFyIG5vd19tb250aCA9IG5vd190aW1lLmdldE1vbnRoKCkgKyAxO1xyXG5cdFx0XHRcdHZhciBub3dfZGF0ZSA9IG5vd190aW1lLmdldERhdGUoKTtcclxuXHRcdFx0XHR2YXIgaG91ciA9IG5vd190aW1lLmdldEhvdXJzKCk7XHJcblx0XHRcdFx0dmFyIG1pbnV0ZSA9IG5vd190aW1lLmdldE1pbnV0ZXMoKTtcclxuXHRcdFx0XHRpZiAobm93X21vbnRoIDwgMTApIHtcclxuXHRcdFx0XHRcdG5vd19tb250aCA9ICcwJyArIG5vd19tb250aCAqIDFcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKG5vd19kYXRlIDwgMTApIHtcclxuXHRcdFx0XHRcdG5vd19kYXRlID0gJzAnICsgbm93X2RhdGUgKiAxXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChob3VyIDwgMTApIHtcclxuXHRcdFx0XHRcdGhvdXIgPSAnMCcgKyBob3VyICogMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAobWludXRlIDwgMTApIHtcclxuXHRcdFx0XHRcdG1pbnV0ZSA9ICcwJyArIG1pbnV0ZSAqIDFcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5ub3RlX3RpbWVfdCA9IG5vd195ZWFyICsgJy0nICsgbm93X21vbnRoICsgJy0nICsgbm93X2RhdGUgKyAnICcgKyBob3VyICsgJzonICsgbWludXRlXHJcblx0XHRcdFx0aWYodGhhdC50a19zaG93MV9udW09PTUpe1xyXG5cdFx0XHRcdFx0dGhhdC56Yl9pbWc9Jy9zdGF0aWMvaW1hZ2VzL3NlYXJjaF90eXBlXzA2Mi5wbmcnXHJcblx0XHRcdFx0XHR0aGF0LnpiX3RpdGxlPSfmkJzntKInXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaGFpX3RrKG51bSkge1xyXG5cdFx0XHRcdHRoYXQudGtfc2hvd19zeF9jdXIgPSBudW1cclxuXHRcdFx0XHR0aGF0LmdldExpc3QoKVxyXG5cdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHRtYXNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0dGl0bGU6ICfmraPlnKjnrZvpgIkuLi4nXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoYXQudGtfc2hvd19zeCA9IGZhbHNlXHJcblx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdH0sIDEwMDApXHJcblx0XHRcdH0sXHJcblx0XHRcdHNodWF4aW4oKSB7XHJcblx0XHRcdFx0dGhhdC5nZXRMaXN0KClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/lnLDlm77ngrnlh7vkuovku7ZcclxuXHRcdFx0bWFya2VydGFwKGUpIHtcclxuXHRcdFx0XHR2YXIgX2lkID0gZS5kZXRhaWwubWFya2VySWQsXHJcblx0XHRcdFx0XHRfaW5kZXg7XHJcblxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoYXQuYmpfaWQgPSBfaWRcclxuXHRcdFx0XHR0aGF0LmJqX2RhdGE9JydcclxuXHRcdFx0XHR0aGF0LnRpbWU9JydcclxuXHRcdFx0XHR0aGF0LnRpbWUxPScnXHJcblx0XHRcdFx0dGhhdC50ZWFtX25hbWU9JydcclxuXHRcdFx0XHR0aGF0LmRhbmdlcl9uYW1lPScnXHJcblx0XHRcdFx0dGhhdC5iZV9udW09JydcclxuXHRcdFx0XHR0aGF0Lm5vdF9iZV9udW09JydcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnX2lkLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+JylcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhfaWQpXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dmFyIGRhdGEgPSB7XHJcblx0XHRcdFx0XHR0b2tlbjp0aGF0LiRzdG9yZS5zdGF0ZS5sb2dpbkRhdGFzLnRva2VuLFxyXG5cdFx0XHRcdFx0cG9zaXRpb25faWQ6IF9pZCxcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSlcclxuXHRcdFx0XHRpZih0aGF0LmJ0bl9rZz09MSl7XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5idG5fa2c9MVxyXG5cdFx0XHRcdC8vc2VsZWN0U2FyYXlsRGV0YWlsQnlVc2VyQ2FyZFxyXG5cdFx0XHRcdHZhciBqa3VybCA9ICcvbWluYXBwL3Bvc2l0aW9uLWxpc3QnXHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5q2j5Zyo6I635Y+W5pWw5o2uJ1xyXG5cdFx0XHRcdH0pXHRcdFx0XHRcclxuXHRcdFx0XHRzZXJ2aWNlLlBfZ2V0KGprdXJsLCBkYXRhKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHR0aGF0LmJ0bl9rZyA9IDBcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdHZhciBkYXRhcyA9IHJlcy5kYXRhXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHR5cGVvZiBkYXRhcylcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBkYXRhcyA9PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdFx0XHRcdGRhdGFzID0gSlNPTi5wYXJzZShkYXRhcylcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGF0LmJqX2RhdGE9ZGF0YXNcclxuXHRcdFx0XHRcdFx0dGhhdC50aW1lPWRhdGFzLmVudGVyX3RpbWVcclxuXHRcdFx0XHRcdFx0dGhhdC50aW1lMT1kYXRhcy5ldmFjdWF0ZV90aW1lXHJcblx0XHRcdFx0XHRcdHRoYXQudGVhbV9uYW1lPWRhdGFzLnRlYW1fbmFtZVxyXG5cdFx0XHRcdFx0XHR0aGF0LmRhbmdlcl9uYW1lPWRhdGFzLmhhemFyZF90eXBlXHJcblx0XHRcdFx0XHRcdHRoYXQuYmVfbnVtPWRhdGFzLnN1cnZpdm9yfHwnJ1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm5vdF9iZV9udW09ZGF0YXMudmljdGltfHwnJ1xyXG5cdFx0XHRcdFx0XHR0aGF0LnNlYXJjaF90eXBlPWRhdGFzLnNlYXJjaF9zdGF0ZXx8MVxyXG5cdFx0XHRcdFx0XHR0aGF0LnRrX3Nob3dfYmp4cSA9IHRydWVcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMubXNnKSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzLm1zZ1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+iOt+WPluWksei0pSdcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSkuY2F0Y2goZSA9PiB7XHJcblx0XHRcdFx0XHR0aGF0LmJ0bl9rZyA9IDBcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGUpXHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+iOt+WPluaVsOaNruWksei0pSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR2YXIgX2xpc3QgPSB0aGF0Lm1hcmtlcnNBcnI7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBfbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKF9saXN0W2ldLmlkID09IF9pZCkge1xyXG5cdFx0XHRcdFx0XHRfaW5kZXggPSBpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LmN1cnJlbnQgPSBpO1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm9wZW5BbmltYXRpb24oKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/np7vliqjlnLDlm77nu5PmnZ9cclxuXHRcdFx0bWFwQ2hhbmdlKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT4nKVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpXHJcblx0XHRcdFx0aWYgKCFlKSB7XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChtYXBFbmRsb2FkaW5nKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG1hcEVuZGxvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4geyAvL+mYsuaKllxyXG5cdFx0XHRcdFx0bWFwRW5kbG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdH0sIDUwMCk7XHJcblx0XHRcdFx0aWYgKGUuZGV0YWlsJiZlLmRldGFpbC50eXBlID09ICdlbmQnIHx8IGUudHlwZSA9PSAnZW5kJykge1xyXG5cdFx0XHRcdFx0Ly/kuK3lv4PljLrln5/lt6bovrlcclxuXHRcdFx0XHRcdG1hcENvbnRleHQuZ2V0Q2VudGVyTG9jYXRpb24oe1xyXG5cdFx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQubWFwRW5kKHJlcyk7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGZhaWwoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdGlmICh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSAnaW9zJykge1xyXG5cdFx0XHRcdFx0aWYgKGUuZGV0YWlsLnR5cGUgPT0gJ2VuZCcpIHtcclxuXHRcdFx0XHRcdFx0Ly/kuK3lv4PljLrln5/lt6bovrlcclxuXHRcdFx0XHRcdFx0bWFwQ29udGV4dC5nZXRDZW50ZXJMb2NhdGlvbih7XHJcblx0XHRcdFx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQubWFwRW5kKHJlcyk7XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRmYWlsKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8v5Zyw5Zu+56e75Yqo57uT5p2fXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlKVxyXG5cdFx0XHRcdFx0aWYgKGUudHlwZSA9PSAnZW5kJykge1xyXG5cdFx0XHRcdFx0XHQvL+S4reW/g+WMuuWfn+W3pui+uVxyXG5cdFx0XHRcdFx0XHRtYXBDb250ZXh0LmdldENlbnRlckxvY2F0aW9uKHtcclxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQubWFwRW5kKHJlcyk7XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRmYWlsKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdC8v57yp5pS+6KeG6YeO5bGV56S65omA5pyJ57uP57qs5bqmXHJcblx0XHRcdFx0XHRcdC8vIG1hcENvbnRleHQuZ2V0Q2VudGVyTG9jYXRpb24oe1xyXG5cdFx0XHRcdFx0XHQvLyBcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0XHQvLyBcdH0sXHJcblx0XHRcdFx0XHRcdC8vIFx0ZmFpbChlcnIpIHtcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdGNvbnNvbGUubG9nKGVycilcclxuXHRcdFx0XHRcdFx0Ly8gXHR9XHJcblx0XHRcdFx0XHRcdC8vIH0pXHJcblx0XHRcdFx0XHRcdC8v6I635Y+W5b2T5YmN5Zyw5Zu+55qE6KeG6YeO6IyD5Zu0XHJcblx0XHRcdFx0XHRcdG1hcENvbnRleHQuZ2V0UmVnaW9uKHtcclxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGZhaWwoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQvL+iOt+WPluW9k+WJjeWcsOWbvueahOe8qeaUvue6p+WIq1xyXG5cdFx0XHRcdFx0XHRtYXBDb250ZXh0LmdldFNjYWxlKHtcclxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGZhaWwoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRMaXN0KCkge1xyXG5cdFx0XHRcdHZhciBkYXRhID0ge1xyXG5cdFx0XHRcdFx0dG9rZW46dGhhdC4kc3RvcmUuc3RhdGUubG9naW5EYXRhcy50b2tlbixcclxuXHRcdFx0XHRcdGxvbmdpdHVkZTp0aGF0LmxvbmdpdHVkZSxcclxuXHRcdFx0XHRcdGxhdGl0dWRlOnRoYXQubGF0aXR1ZGUsXHJcblx0XHRcdFx0XHR0eXBlOnRoYXQudGtfc2hvd19zeF9jdXI9PTA/J2FsbCc6dGhhdC50a19zaG93X3N4X2N1cj09MT8nb3duJzonZHJvcCdcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYodGhhdC5idG5fa2c9PTEpe1xyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQuYnRuX2tnPTFcclxuXHRcdFx0XHQvL3NlbGVjdFNhcmF5bERldGFpbEJ5VXNlckNhcmRcclxuXHRcdFx0XHR2YXIgamt1cmwgPSAnL21pbmFwcC9wb3NpdGlvbi1saXN0J1xyXG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+ato+WcqOiOt+WPluaVsOaNridcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlcnZpY2UuUF9nZXQoamt1cmwsIGRhdGEpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdHRoYXQuYnRuX2tnID0gMFxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDEpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGRhdGFzID0gcmVzLmRhdGFcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2codHlwZW9mIGRhdGFzKVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIGRhdGFzID09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0XHRcdFx0ZGF0YXMgPSBKU09OLnBhcnNlKGRhdGFzKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dmFyIG5ld2RhdGE9ZGF0YXNcclxuXHRcdFx0XHRcdFx0Zm9yKHZhciBpPTA7aTxuZXdkYXRhLmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdFx0XHRcdHZhciBuZXdfbGF0aXR1ZGU9bmV3ZGF0YVtpXS5sYXRpdHVkZVxyXG5cdFx0XHRcdFx0XHRcdHZhciBuZXdfbG9uZ2l0dWRlPW5ld2RhdGFbaV0ubG9uZ2l0dWRlXHJcblx0XHRcdFx0XHRcdFx0dmFyIG5ld19pY29uUGF0aD10aGF0LmdldGltZyhuZXdkYXRhW2ldLmljb25QYXRoKVxyXG5cdFx0XHRcdFx0XHRcdFZ1ZS5zZXQobmV3ZGF0YSwnbGF0aXR1ZGUnLG5ld19sYXRpdHVkZSlcclxuXHRcdFx0XHRcdFx0XHRWdWUuc2V0KG5ld2RhdGEsJ2xvbmdpdHVkZScsbmV3X2xvbmdpdHVkZSlcclxuXHRcdFx0XHRcdFx0XHRWdWUuc2V0KG5ld2RhdGEsJ2ljb25QYXRoJyxuZXdfaWNvblBhdGgpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhhdC5tYXJrZXJzQXJyPW5ld2RhdGFcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dGhhdC50a19zaG93X3N4ID0gZmFsc2VcdFxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5tc2cpIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXMubXNnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn6I635Y+W5aSx6LSlJ1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KS5jYXRjaChlID0+IHtcclxuXHRcdFx0XHRcdHRoYXQuYnRuX2tnID0gMFxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZSlcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn6I635Y+W5pWw5o2u5aSx6LSlJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+WcsOWbvuenu+WKqFxyXG5cdFx0XHRtYXBFbmQocmVzKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ+WKoOi9veaVsOaNricpXHJcblx0XHRcdFx0aWYgKHJlcykge1xyXG5cdFx0XHRcdFx0dGhhdC5sb25naXR1ZGUgPSByZXMubG9uZ2l0dWRlO1xyXG5cdFx0XHRcdFx0dGhhdC5sYXRpdHVkZSA9IHJlcy5sYXRpdHVkZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8v5Y6f5pWw5o2uXHJcblx0XHRcdFx0dGhhdC5saXN0ID0gW107XHJcblx0XHRcdFx0dGhhdC5wYWdlSW5kZXggPSAxO1xyXG5cdFx0XHRcdHRoYXQuY2hhY2VMaXN0ID0gW107XHJcblx0XHRcdFx0Ly8g6KaG55uW54mp5pWw5o2uXHJcblx0XHRcdFx0dGhhdC5tYXJrZXJzQXJyID0gW107XHJcblx0XHRcdFx0dGhhdC5vcmlnaW5hbExpc3QgPSBbXTtcclxuXHRcdFx0XHR0aGF0LmdldExpc3QoKTtcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldExvY2F0aW9uKHR5cGUpIHtcclxuXHRcdFx0XHR1bmkuZ2V0TG9jYXRpb24oe1xyXG5cdFx0XHRcdFx0dHlwZTogJ3dnczg0JyxcclxuXHRcdFx0XHRcdC8vIHR5cGU6ICdnY2owMicsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5sb25naXR1ZGUgPSByZXMubG9uZ2l0dWRlO1xyXG5cdFx0XHRcdFx0XHR0aGF0LmxhdGl0dWRlID0gcmVzLmxhdGl0dWRlO1xyXG5cdFx0XHRcdFx0XHR0aGF0LnBhZ2VJbmRleCA9IDE7XHJcblx0XHRcdFx0XHRcdC8vIGlmICh0eXBlICE9ICdiYWNrJykge1xyXG5cclxuXHRcdFx0XHRcdFx0dGhhdC5zZXRBZGRyZXNzKHJlcyk7XHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuZ2V0TGlzdCgpO1xyXG5cdFx0XHRcdFx0XHR9LCAxMDAwKVxyXG5cdFx0XHRcdFx0XHQvLyB9XHJcblxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWwoZXJyKSB7XHJcblx0XHRcdFx0XHRcdGlmICh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSAnaW9zJykge1xyXG5cdFx0XHRcdFx0XHRcdGlmICghcGVybWlzaW9uLmp1ZGdlSW9zUGVybWlzc2lvbignbG9jYXRpb24nKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5o+Q56S6JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJ+mcgOimgeaJk+W8gOWumuS9jeadg+mZkCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5pc1RvU2V0dGluZyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwZXJtaXNpb24uZ290b0FwcFBlcm1pc3Npb25TZXR0aW5nKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0QW5kcm9pZFBlcm1pc3Npb24oJ2FuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfRklORV9MT0NBVElPTicpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyByZXF1ZXN0QW5kcm9pZFBlcm1pc3Npb24ocGVybWlzaW9uSUQpIHtcclxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gYXdhaXQgcGVybWlzaW9uLnJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihwZXJtaXNpb25JRClcclxuXHRcdFx0XHR2YXIgc3RyU3RhdHVzXHJcblx0XHRcdFx0aWYgKHJlc3VsdCA9PSAxKSB7XHJcblx0XHRcdFx0XHRzdHJTdGF0dXMgPSBcIuW3suiOt+W+l+aOiOadg1wiXHJcblx0XHRcdFx0fSBlbHNlIGlmIChyZXN1bHQgPT0gMCkge1xyXG5cdFx0XHRcdFx0c3RyU3RhdHVzID0gXCLmnKrojrflvpfmjojmnYNcIlxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzdHJTdGF0dXMgPSBcIuiiq+awuOS5heaLkue7neadg+mZkFwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfmj5DnpLonLFxyXG5cdFx0XHRcdFx0Y29udGVudDogJ+mcgOimgeaJk+W8gOWumuS9jeadg+mZkCcsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5pc1RvU2V0dGluZyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0cGVybWlzaW9uLmdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZygpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldGltZyhpbWcpIHtcclxuXHRcdFx0XHRyZXR1cm4gc2VydmljZS5nZXRpbWcoaW1nKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRqdW1wX2Z1YyhlKSB7XHJcblx0XHRcdFx0dmFyIHNzc1xyXG5cdFx0XHRcdGlmKHRoYXQudGtfc2hvdzFfbnVtPT01KXtcclxuXHRcdFx0XHRcdGlmICghdGhhdC50aW1lIHx8IXRoYXQudGltZTEpIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn6K+36YCJ5oup5pe26Ze0J1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICghdGhhdC50ZWFtX25hbWUpIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn6K+35aGr5YaZ5Zui6Zif5ZCN56ewJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHNzcyA9IFt7XHJcblx0XHRcdFx0XHRcdGlkOiBcIjFcIixcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IHtcclxuXHRcdFx0XHRcdFx0XHRsZWZ0OiA3NTAgLyAyIC0gMjgsXHJcblx0XHRcdFx0XHRcdFx0Ly8gdG9wOiBfbmF2SGVpZ2h0IC0gNjgsXHJcblx0XHRcdFx0XHRcdFx0dG9wOiB0aGF0Ll9uYXZIZWlnaHQ+MjAwP3RoYXQuX25hdkhlaWdodDozMDAsXHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDU1LFxyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNTVcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0aWNvblBhdGg6IHRoYXQuemJfaW1nLFxyXG5cdFx0XHRcdFx0XHRjbGlja2FibGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9XVxyXG5cdFx0XHRcdFx0dGhhdC5zZXRIZWlnaHQoc3NzKVxyXG5cdFx0XHRcdFx0dGhhdC50a19zaG93MSA9IGZhbHNlXHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdC8vIHVybDogJy9wYWdlcy9tYXBfZHcvbWFwX2R3P3piX3RpdGxlPScgKyB0aGF0LnpiX3RpdGxlICsgJyZ0a19zaG93MV9udW09JyArIHRoYXQudGtfc2hvdzFfbnVtKycmemJfaW1nPScgKyB0aGF0LnpiX2ltZysnJnpiX2J6PScgKyB0aGF0LnpiX2J6XHJcblx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9tYXBfZHcvbWFwX2R3P3piX3RpdGxlPScgKyB0aGF0LnpiX3RpdGxlKycmemJfaW1nPScgKyB0aGF0LnpiX2ltZysnJnpiX2J6PScgKyB0aGF0LnpiX2J6KycmdGVhbV9uYW1lPScgK3RoYXQudGVhbV9uYW1lKycmdGltZT0nICt0aGF0LnRpbWUrJyZ0aW1lMT0nICt0aGF0LnRpbWUxKycmZGFuZ2VyX25hbWU9JyArdGhhdC5kYW5nZXJfbmFtZSsnJmJlX251bT0nICt0aGF0LmJlX251bSsnJm5vdF9iZV9udW09JyArdGhhdC5ub3RfYmVfbnVtKycmc2VhcmNoX3R5cGU9JyArdGhhdC5zZWFyY2hfdHlwZVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdGlmICh0aGF0LnRrX3Nob3cxX2N1ciA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfor7fpgInmi6nnsbvlnosnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0c3NzID0gW3tcclxuXHRcdFx0XHRcdFx0aWQ6IFwiMVwiLFxyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDc1MCAvIDIgLSAyOCxcclxuXHRcdFx0XHRcdFx0XHQvLyB0b3A6IF9uYXZIZWlnaHQgLSA2OCxcclxuXHRcdFx0XHRcdFx0XHR0b3A6IHRoYXQuX25hdkhlaWdodD4yMDA/dGhhdC5fbmF2SGVpZ2h0OjMwMCxcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogNTUsXHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA2OFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRpY29uUGF0aDogdGhhdC56Yl9pbWcsXHJcblx0XHRcdFx0XHRcdGNsaWNrYWJsZTogZmFsc2VcclxuXHRcdFx0XHRcdH1dXHJcblx0XHRcdFx0XHR0aGF0LnNldEhlaWdodChzc3MpXHJcblx0XHRcdFx0XHR0aGF0LnRrX3Nob3cxID0gZmFsc2VcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0Ly8gdXJsOiAnL3BhZ2VzL21hcF9kdy9tYXBfZHc/emJfdGl0bGU9JyArIHRoYXQuemJfdGl0bGUgKyAnJnRrX3Nob3cxX251bT0nICsgdGhhdC50a19zaG93MV9udW0rJyZ6Yl9pbWc9JyArIHRoYXQuemJfaW1nKycmemJfYno9JyArIHRoYXQuemJfYnpcclxuXHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL21hcF9kdy9tYXBfZHc/emJfdGl0bGU9JyArIHRoYXQuemJfdGl0bGUrJyZ6Yl9pbWc9JyArIHRoYXQuemJfaW1nKycmemJfYno9JyArIHRoYXQuemJfYnpcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoYXQubWFwSGVpZ2h0KVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIFZ1ZS5zZXQodGhhdC5tYXBDb250cm9sc1swXS5wb3NpdGlvbiwndG9wJyxzc3MpXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhhdC5tYXBDb250cm9scylcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0anVtcChlKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblxyXG5cdFx0XHRcdGlmICh0aGF0LmJ0bl9rZyA9PSAxKSB7XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhhdC5idG5fa2cgPSAxXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmJ0bl9rZyA9IDBcclxuXHRcdFx0XHRcdH0sIDEwMDApXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzZXJ2aWNlLmp1bXAoZSlcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQuaWNvbmZvbnQge1xyXG5cdFx0Zm9udC1mYW1pbHk6IGljb25mb250O1xyXG5cdH1cclxuXHJcblx0LyogLmljb24tbGlrZSB7ICBcclxuXHQgICAgd2lkdGg6IDM2cHg7ICBcclxuXHQgICAgaGVpZ2h0OiAzNnB4OyAgXHJcblx0ICAgIGZvbnQtc2l6ZTogMzRweDsgIFxyXG5cdH0gKi9cclxuXHQubWluaDEwMCB7XHJcblx0XHR3aWR0aDogNzUwcHg7XHJcblx0XHQvKiAjaWZkZWYgSDUgKi9cclxuXHRcdG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDB1cHgpO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0fVxyXG5cclxuXHQuaW5kZXhfbWFwIHtcclxuXHRcdC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cclxuXHJcblx0XHR3aWR0aDogNzUwcHg7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0LyogICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAgKi9cclxuXHRcdGhlaWdodDogY2FsYygxMDB2aCAtIDI0NnVweCk7XHJcblx0XHQvKiAgI2VuZGlmICAqL1xyXG5cclxuXHRcdC8qICNpZmRlZiBINSAqL1xyXG5cdFx0bWF4LXdpZHRoOiAxMDB2dztcclxuXHRcdG1heC1oZWlnaHQ6IDEwMHZoO1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjQ2dXB4IC0gMTAwdXB4KTtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHJcblx0Lm1hcF9idG5fbGlzdCB7XHJcblx0XHQvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcblx0XHQvKiBib3R0b206IDA7ICovXHJcblx0XHR3aWR0aDogNzUwcHg7XHJcblx0XHQvKiAjaWZkZWYgSDUgKi9cclxuXHJcblx0XHRtYXgtd2lkdGg6IDEwMHZ3O1xyXG5cdFx0Ym90dG9tOiAxMDB1cHg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGhlaWdodDogMjQ2dXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJveC1zaGFkb3c6IDBweCAtM3B4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNXVweDtcclxuXHRcdC8qICAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogICNlbmRpZiAgKi9cclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0fVxyXG5cclxuXHQubWFwX2J0bl9saSB7XHJcblx0XHQvKiAgI2lmbmRlZiBBUFAtUExVUy1OVlVFICAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICAjZW5kaWYgICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyNnVweDtcclxuXHRcdGNvbG9yOiAjNTU1O1xyXG5cdH1cclxuXHJcblx0Lm1hcF9idG5fbGlfaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDk1dXB4O1xyXG5cdFx0aGVpZ2h0OiA5NXVweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdG1hcmdpbi1ib3R0b206IDIwdXB4O1xyXG5cdH1cclxuXHQubWFwX2J0bl9saV90ZXh0e1xyXG5cdFx0Zm9udC1zaXplOiAyNnVweDtcclxuXHRcdGNvbG9yOiAjNTU1O1xyXG5cdH1cclxuXHQuYmpfYm94IHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogMjAwcHg7XHJcblx0XHQvKiBib3R0b206IDczMHB4OyAqL1xyXG5cdFx0cmlnaHQ6IDMwdXB4O1xyXG5cdFx0ei1pbmRleDogOTk5OTk4O1xyXG5cdFx0d2lkdGg6IDExNHVweDtcclxuXHRcdGhlaWdodDogMTE0dXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJveC1zaGFkb3c6IDBweCAwcHggMjF1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0fVxyXG5cdFxyXG5cdC5ial9ib3hfaW1nIHtcclxuXHRcdHdpZHRoOiAxMTR1cHg7XHJcblx0XHRoZWlnaHQ6IDExNHVweDtcclxuXHR9XHJcblx0XHJcblx0LmJqX21haW4ge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHdpZHRoOiA3NTBweDtcclxuXHRcdC8qIGhlaWdodDogMTAwdmg7ICovXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcclxuXHRcdHotaW5kZXg6IDk5OTk5OTtcclxuXHRcdC8qICAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgICovXHJcblx0XHQvKiAgI2lmbmRlZiBBUFAtUExVUy1OVlVFICAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICAjZW5kaWYgICovXHJcblx0XHQvKiAgI2VuZGlmICAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblx0XHJcblx0LmJqX2NudW0ge1xyXG5cdFx0d2lkdGg6IDUwOHVweDtcclxuXHRcdGhlaWdodDogNTA4dXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwOHVweDtcclxuXHRcdHBhZGRpbmc6IDM2dXB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNTB1cHg7XHJcblx0fVxyXG5cdFxyXG5cdC5ial9jbnVtXzEge1xyXG5cdFx0d2lkdGg6IDQzNnB4O1xyXG5cdFx0aGVpZ2h0OiA0MzZweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XHJcblx0XHQvKiBib3JkZXI6IDR1cHggc29saWQgI0ZGRkZGRjsgKi9cclxuXHRcdGJvcmRlci1jb2xvcjogICNGRkZGRkY7XHJcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiA0cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0MzZweDtcclxuXHRcdC8qICAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogICNlbmRpZiAgKi9cclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblx0XHJcblx0LmJqX2NudW1fbnVtIHtcclxuXHRcdGZvbnQtc2l6ZTogMzAwcnB4O1xyXG5cdFx0Zm9udC1mYW1pbHk6IERJTjtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblx0XHJcblx0LmJqX3RpcCB7XHJcblx0XHRmb250LXNpemU6IDMwdXB4O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHJcblx0LnRrX3BvcG9wIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHotaW5kZXg6IDk5OTk5OTk5OTk7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcclxuXHRcdC8qICAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogICNlbmRpZiAgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQudGtfbWFpbiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHVweDtcclxuXHRcdHdpZHRoOiA1MDV1cHg7XHJcblx0XHQvKiBtaW4taGVpZ2h0OiA0OTR1cHg7ICovXHJcblx0XHQvKiBtYXgtaGVpZ2h0OiA4MCU7ICovXHJcblx0XHQvKiBvdmVyZmxvdy15OiBzY3JvbGw7ICovXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTB1cHg7XHJcblx0XHRwYWRkaW5nOiAzMHVweCA0MHVweDtcclxuXHRcdC8qICBcclxuXHRcdGRpc3BsYXk6IGZsZXg7ICBcclxuXHRcdGZsZXgtd3JhcDogd3JhcDsgKi9cclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQudGtfbWFpbjEge1xyXG5cdFx0d2lkdGg6IDUwNXVweDtcclxuXHRcdC8qIG1pbi1oZWlnaHQ6IDQ5NHVweDsgKi9cclxuXHRcdC8qIG1heC1oZWlnaHQ6IDgwJTsgKi9cclxuXHRcdC8qIG92ZXJmbG93LXk6IHNjcm9sbDsgKi9cclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwdXB4O1xyXG5cdH1cclxuXHJcblx0LmFkZF9iaiB7XHJcblx0XHQvKiB3aWR0aDogMTAwJTsgKi9cclxuXHRcdHdpZHRoOiA0MjVweDtcclxuXHRcdGZvbnQtc2l6ZTogMzR1cHg7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHRcdC8qICAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogICNlbmRpZiAgKi9cclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDUwdXB4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHR9XHJcblxyXG5cdC5hZGRfYmpfdGV4dCB7XHJcblx0XHR3aWR0aDogNjB1cHg7XHJcblx0XHRoZWlnaHQ6IDFweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNEOEQ4RDg7XHJcblx0XHRtYXJnaW46IDAgMTB1cHg7XHJcblx0fVxyXG5cdC5hZGRfYmpfd3p7XHJcblx0XHRmb250LXNpemU6IDM0dXB4O1xyXG5cdFx0Y29sb3I6ICMzMzM7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblx0LmJqX3R5cGUge1xyXG5cdFx0Lyogd2lkdGg6IDEwMCU7ICovXHJcblx0XHR3aWR0aDogNDI1cHg7XHJcblx0XHRwYWRkaW5nOiAwIDEwdXB4O1xyXG5cdH1cclxuXHJcblx0LmJqX3R5cGVfbGkge1xyXG5cdFx0Lyogd2lkdGg6IDEwMCU7ICovXHJcblx0XHR3aWR0aDogNDA1cHg7XHJcblx0XHRoZWlnaHQ6IDcydXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0U4RThFODtcclxuXHRcdGJveC1zaGFkb3c6IDFweCAzcHggMTB1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDM2dXB4O1xyXG5cdFx0LyogICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAgI2VuZGlmICAqL1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyOHVweDtcclxuXHRcdGNvbG9yOiAjMzMzMzMzO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzN1cHg7XHJcblx0fVxyXG5cclxuXHQuYmpfdHlwZV9saV9jdXIge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzNDNzdGMTtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdH1cclxuXHJcblx0LmJqX3R5cGVfbGlfY3VyMSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3NTc1O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHQuYmpfdHlwZV9saV90ZXh0IHtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdFx0Zm9udC1zaXplOiAyOHVweDtcclxuXHR9XHJcblxyXG5cdC5ial90eXBlX2xpX3RleHRfY3VyIHtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdH1cclxuXHJcblx0Lm5vdGV0a190aXQge1xyXG5cdFx0Zm9udC1zaXplOiAzNHVweDtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHVweDtcclxuXHR9XHJcblxyXG5cdC5ub3RldGtfdGltZSB7XHJcblx0XHRmb250LXNpemU6IDI2dXB4O1xyXG5cdFx0Y29sb3I6ICMzMzM7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHVweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5hZGRfYmpfaWNvbiB7XHJcblx0XHQvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuXHRcdG1hcmdpbjogMCAwIDEwdXB4O1xyXG5cdFx0d2lkdGg6IDI4OXVweDtcclxuXHRcdGhlaWdodDogMjE4dXB4O1xyXG5cdH1cclxuXHJcblx0LmJ6X2ludF90ayB7XHJcblx0XHRmb250LXNpemU6IDI2dXB4O1xyXG5cdFx0Lyogd2lkdGg6IDEwMCU7ICovXHJcblx0XHR3aWR0aDogNDI1cHg7XHJcblx0XHRoZWlnaHQ6IDYwdXB4O1xyXG5cdFx0LyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEREREREQ7ICovXHJcblx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjZGRkO1xyXG5cdH1cclxuXHJcblx0LmJqX2xpc3RfYm94IHtcclxuXHRcdC8qIHdpZHRoOiAxMDAlOyAqL1xyXG5cdFx0d2lkdGg6IDQyNXB4O1xyXG5cdFx0LyogICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAgI2VuZGlmICAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdHBhZGRpbmctdG9wOiAzMHVweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyMHVweDtcclxuXHR9XHJcblxyXG5cdC5ial9saXN0X2JveF9saV93IHtcclxuXHRcdHdpZHRoOiAxMzRweDtcclxuXHRcdGhlaWdodDogMTM0cHg7XHJcblx0XHRwYWRkaW5nLXRvcDogMTB1cHg7XHJcblx0XHQvKiBwYWRkaW5nLWxlZnQ6IDEwcHg7ICovXHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRtYXJnaW4tbGVmdDogNXB4O1xyXG5cdH1cclxuXHJcblx0LmJqX2xpc3RfYm94X2xpIHtcclxuXHRcdHdpZHRoOiAxMjRweDtcclxuXHRcdGhlaWdodDogMTI0cHg7XHJcblx0XHRib3JkZXItd2lkdGg6IDFweDtcclxuXHRcdGJvcmRlci1jb2xvcjogI2ZmZjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDR1cHg7XHJcblx0XHQvKiAgI2lmbmRlZiBBUFAtUExVUy1OVlVFICAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICAjZW5kaWYgICovXHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwdXB4O1xyXG5cdFx0cGFkZGluZzogMTB1cHg7XHJcblx0XHQvKiBvdmVyZmxvdzogYXV0bzsgKi9cclxuXHR9XHJcblxyXG5cdC5ial9saXN0X2JveF9saV9jdXIge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0VGRjRGRjtcclxuXHRcdGJvcmRlci1jb2xvcjojM0M3N0YxO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAxcHhcclxuXHR9XHJcblxyXG5cdC5ial9saXN0X2JveF9saV93X21sIHtcclxuXHRcdHdpZHRoOiAxMDVweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxcHg7XHJcblx0fVxyXG5cclxuXHQuYmpfbGlzdF9ib3hfbGlfbWwge1xyXG5cdFx0d2lkdGg6IDk1cHg7XHJcblx0fVxyXG5cclxuXHQuYmpfbGlzdF9ib3hfbGlfd19zayB7XHJcblx0XHRoZWlnaHQ6IDE1NXB4O1xyXG5cdH1cclxuXHJcblx0LmJqX2xpc3RfYm94X2xpX3NrIHtcclxuXHRcdGhlaWdodDogMTQ1cHg7XHJcblx0fVxyXG5cclxuXHQueHpfb2sge1xyXG5cdFx0d2lkdGg6IDMxdXB4O1xyXG5cdFx0aGVpZ2h0OiAzMXVweDtcclxuXHRcdHRvcDogLTEwMHB4O1xyXG5cdFx0cmlnaHQ6IDEwMHB4O1xyXG5cdH1cclxuXHJcblx0Lnh6X29rX2N1ciB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdHotaW5kZXg6IDk5OTk5OTk5OTk5OTtcclxuXHR9XHJcblxyXG5cdC5ial9pY29uIHtcclxuXHRcdHdpZHRoOiA1NXVweDtcclxuXHRcdGhlaWdodDogNjh1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHVweDtcclxuXHR9XHJcblxyXG5cdC5ial9pY29uX2ljb24ge1xyXG5cdFx0Zm9udC1zaXplOiAyNnVweDtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdH1cclxuXHJcblx0LnRrc2V0X2J0biB7XHJcblx0XHRmb250LXNpemU6IDI4dXB4O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHQvKiAgI2lmbmRlZiBBUFAtUExVUy1OVlVFICAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICAjZW5kaWYgICovXHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHR3aWR0aDogNDA5dXB4O1xyXG5cdFx0aGVpZ2h0OiA3MnVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMzQzc3RjE7XHJcblx0XHRib3gtc2hhZG93OiAxcHggM3B4IDEwdXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAzNnVweDtcclxuXHR9XHJcblxyXG5cdC5ial9pY29uX3RleHQge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmJqX3VzZXJfbXNnIHtcclxuXHRcdC8qICAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogICNlbmRpZiAgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHR3aWR0aDogNTA1cHg7XHJcblx0XHQvKiB3aWR0aDogNDI1cHg7ICovXHJcblx0XHRoZWlnaHQ6IDE1MHB4O1xyXG5cdFx0cGFkZGluZzogMzB1cHggNDB1cHg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2VlZTtcclxuXHRcdGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuXHR9XHJcblxyXG5cdC5ial91c2VyX3R4IHtcclxuXHRcdHdpZHRoOiA4NHB4O1xyXG5cdFx0aGVpZ2h0OiA4NHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyM3VweDtcclxuXHR9XHJcblxyXG5cdC5ial91c2VyX2x4bXNnIHtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdH1cclxuXHJcblx0LmJqX3VzZXJfbmFtZSB7XHJcblx0XHRmb250LXNpemU6IDM2cHg7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHJcblx0LmJqX3VzZXJfdGVsIHtcclxuXHRcdGZvbnQtc2l6ZTogMjZweDtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdH1cclxuXHJcblx0LmJqeHFfeHEge1xyXG5cdFx0d2lkdGg6IDUwNXB4O1xyXG5cdFx0cGFkZGluZzogMzB1cHg7XHJcblx0fVxyXG5cclxuXHQuYmpfZDEge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyNXVweDtcclxuXHR9XHJcblxyXG5cdC5ial9kMV9pY29uIHtcclxuXHRcdHdpZHRoOiAzOXB4O1xyXG5cdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxN3VweDtcclxuXHR9XHJcblxyXG5cdC5ial9kMV9uYW1lIHtcclxuXHRcdGZvbnQtc2l6ZTogMzR1cHg7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHJcblx0LmJqX2QyIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjV1cHg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG5cclxuXHQuYmpfZDJfdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDI2dXB4O1xyXG5cdFx0Y29sb3I6ICMzMzM7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyNXVweDtcclxuXHR9XHJcblxyXG5cdC5ial9kMl9zaGFyZSB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwdXB4O1xyXG5cdFx0LyogZmxleDogbm9uZTsgKi9cclxuXHRcdHdpZHRoOiA0OHVweDtcclxuXHRcdGhlaWdodDogNDh1cHg7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qIOaQnOe0oiAqL1xyXG5cdC5zZWFyY2hfdHlwZV90aXAge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuc2VhcmNoX3R5cGVfdGlwX3RleHQge1xyXG5cdFx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdFx0Y29sb3I6ICM2NjY7XHJcblx0fVxyXG5cclxuXHQuc2VhcmNoX3R5cGVfdGlwX2ltZyB7XHJcblx0XHR3aWR0aDogMjhweDtcclxuXHRcdGhlaWdodDogMjhweDtcclxuXHR9XHJcblxyXG5cdC5zZWFyY2hfbWJveCB7XHJcblx0XHR3aWR0aDogNDIwcHg7XHJcblx0XHRoZWlnaHQ6IDQyMHB4O1xyXG5cdFx0LyogYmFja2dyb3VuZC1jb2xvci1zaXplOiAxMDAlIDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvc2VhcmNoX2JnXzAzLnBuZyk7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yLXJlcGVhdDogbm8tcmVwZWF0OyAqL1xyXG5cdFx0bWFyZ2luLXRvcDogLTEwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHJcblx0LnNlYXJjaF9tYm94X2ltZyB7XHJcblx0XHR3aWR0aDogNDIwcHg7XHJcblx0XHRoZWlnaHQ6IDQyMHB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdH1cclxuXHJcblx0LnNlYXJjaF9tYm94X2QxIHtcclxuXHRcdHdpZHRoOiA0MjBweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nLXRvcDogMjZweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0fVxyXG5cclxuXHQuc2VhcmNoX21ib3hfZDIge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDUxcHg7XHJcblx0fVxyXG5cclxuXHQuc2VhcmNoX21ib3hfZDJfaW50IHtcclxuXHRcdHdpZHRoOiA3MXB4O1xyXG5cdFx0aGVpZ2h0OiA0MXB4O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAgI0Q1RDVENTtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItd2lkdGg6IDFweDtcclxuXHRcdGZvbnQtc2l6ZTogMjZ1cHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuc2VhcmNoX21ib3hfZDJfdGV4dCB7XHJcblx0XHR3aWR0aDogMTlweDtcclxuXHRcdGhlaWdodDogMXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0Q1RDVENTtcclxuXHRcdG1hcmdpbjogMCA1cHg7XHJcblx0fVxyXG5cclxuXHQuc2VhcmNoX21ib3hfZDMge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDM3cHg7XHJcblx0fVxyXG5cclxuXHQuc2VhcmNoX21ib3hfZDNfaW50IHtcclxuXHRcdHdpZHRoOiAxMzBweDtcclxuXHRcdGhlaWdodDogNDFweDtcclxuXHRcdGJvcmRlci1jb2xvcjogICNENUQ1RDU7XHJcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAxcHg7XHJcblx0XHRmb250LXNpemU6IDI2dXB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnNlYXJjaF9tYm94X2QzX3RleHQge1xyXG5cdFx0d2lkdGg6IDkwcHg7XHJcblx0XHRoZWlnaHQ6IDkwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0bWFyZ2luOiAwIDIwcHg7XHJcblx0fVxyXG5cclxuXHQuc2VhcmNoX21ib3hfZDQge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG5cclxuXHQuc2VhcmNoX21ib3hfZDRfaW50IHtcclxuXHRcdHdpZHRoOiAxNTVweDtcclxuXHRcdGhlaWdodDogNDFweDtcclxuXHRcdC8qIGJvcmRlcjogMXB4IHNvbGlkICNENUQ1RDU7ICovXHJcblx0XHRib3JkZXItY29sb3I6ICAjRDVENUQ1O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci13aWR0aDogMXB4O1xyXG5cdFx0Zm9udC1zaXplOiAyNnVweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///23\n");

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
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);