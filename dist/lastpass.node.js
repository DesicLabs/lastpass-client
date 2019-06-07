(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lastpass.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/asynckit/index.js":
/*!****************************************!*\
  !*** ./node_modules/asynckit/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports =
{
  parallel      : __webpack_require__(/*! ./parallel.js */ "./node_modules/asynckit/parallel.js"),
  serial        : __webpack_require__(/*! ./serial.js */ "./node_modules/asynckit/serial.js"),
  serialOrdered : __webpack_require__(/*! ./serialOrdered.js */ "./node_modules/asynckit/serialOrdered.js")
};


/***/ }),

/***/ "./node_modules/asynckit/lib/abort.js":
/*!********************************************!*\
  !*** ./node_modules/asynckit/lib/abort.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// API
module.exports = abort;

/**
 * Aborts leftover active jobs
 *
 * @param {object} state - current state object
 */
function abort(state)
{
  Object.keys(state.jobs).forEach(clean.bind(state));

  // reset leftover jobs
  state.jobs = {};
}

/**
 * Cleans up leftover job by invoking abort function for the provided job id
 *
 * @this  state
 * @param {string|number} key - job id to abort
 */
function clean(key)
{
  if (typeof this.jobs[key] == 'function')
  {
    this.jobs[key]();
  }
}


/***/ }),

/***/ "./node_modules/asynckit/lib/async.js":
/*!********************************************!*\
  !*** ./node_modules/asynckit/lib/async.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defer = __webpack_require__(/*! ./defer.js */ "./node_modules/asynckit/lib/defer.js");

// API
module.exports = async;

/**
 * Runs provided callback asynchronously
 * even if callback itself is not
 *
 * @param   {function} callback - callback to invoke
 * @returns {function} - augmented callback
 */
function async(callback)
{
  var isAsync = false;

  // check if async happened
  defer(function() { isAsync = true; });

  return function async_callback(err, result)
  {
    if (isAsync)
    {
      callback(err, result);
    }
    else
    {
      defer(function nextTick_callback()
      {
        callback(err, result);
      });
    }
  };
}


/***/ }),

/***/ "./node_modules/asynckit/lib/defer.js":
/*!********************************************!*\
  !*** ./node_modules/asynckit/lib/defer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = defer;

/**
 * Runs provided function on next iteration of the event loop
 *
 * @param {function} fn - function to run
 */
function defer(fn)
{
  var nextTick = typeof setImmediate == 'function'
    ? setImmediate
    : (
      typeof process == 'object' && typeof process.nextTick == 'function'
      ? process.nextTick
      : null
    );

  if (nextTick)
  {
    nextTick(fn);
  }
  else
  {
    setTimeout(fn, 0);
  }
}


/***/ }),

/***/ "./node_modules/asynckit/lib/iterate.js":
/*!**********************************************!*\
  !*** ./node_modules/asynckit/lib/iterate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var async = __webpack_require__(/*! ./async.js */ "./node_modules/asynckit/lib/async.js")
  , abort = __webpack_require__(/*! ./abort.js */ "./node_modules/asynckit/lib/abort.js")
  ;

// API
module.exports = iterate;

/**
 * Iterates over each job object
 *
 * @param {array|object} list - array or object (named list) to iterate over
 * @param {function} iterator - iterator to run
 * @param {object} state - current job status
 * @param {function} callback - invoked when all elements processed
 */
function iterate(list, iterator, state, callback)
{
  // store current index
  var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;

  state.jobs[key] = runJob(iterator, key, list[key], function(error, output)
  {
    // don't repeat yourself
    // skip secondary callbacks
    if (!(key in state.jobs))
    {
      return;
    }

    // clean up jobs
    delete state.jobs[key];

    if (error)
    {
      // don't process rest of the results
      // stop still active jobs
      // and reset the list
      abort(state);
    }
    else
    {
      state.results[key] = output;
    }

    // return salvaged results
    callback(error, state.results);
  });
}

/**
 * Runs iterator over provided job element
 *
 * @param   {function} iterator - iterator to invoke
 * @param   {string|number} key - key/index of the element in the list of jobs
 * @param   {mixed} item - job description
 * @param   {function} callback - invoked after iterator is done with the job
 * @returns {function|mixed} - job abort function or something else
 */
function runJob(iterator, key, item, callback)
{
  var aborter;

  // allow shortcut if iterator expects only two arguments
  if (iterator.length == 2)
  {
    aborter = iterator(item, async(callback));
  }
  // otherwise go with full three arguments
  else
  {
    aborter = iterator(item, key, async(callback));
  }

  return aborter;
}


/***/ }),

/***/ "./node_modules/asynckit/lib/state.js":
/*!********************************************!*\
  !*** ./node_modules/asynckit/lib/state.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// API
module.exports = state;

/**
 * Creates initial state object
 * for iteration over list
 *
 * @param   {array|object} list - list to iterate over
 * @param   {function|null} sortMethod - function to use for keys sort,
 *                                     or `null` to keep them as is
 * @returns {object} - initial state object
 */
function state(list, sortMethod)
{
  var isNamedList = !Array.isArray(list)
    , initState =
    {
      index    : 0,
      keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
      jobs     : {},
      results  : isNamedList ? {} : [],
      size     : isNamedList ? Object.keys(list).length : list.length
    }
    ;

  if (sortMethod)
  {
    // sort array keys based on it's values
    // sort object's keys just on own merit
    initState.keyedList.sort(isNamedList ? sortMethod : function(a, b)
    {
      return sortMethod(list[a], list[b]);
    });
  }

  return initState;
}


/***/ }),

/***/ "./node_modules/asynckit/lib/terminator.js":
/*!*************************************************!*\
  !*** ./node_modules/asynckit/lib/terminator.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var abort = __webpack_require__(/*! ./abort.js */ "./node_modules/asynckit/lib/abort.js")
  , async = __webpack_require__(/*! ./async.js */ "./node_modules/asynckit/lib/async.js")
  ;

// API
module.exports = terminator;

/**
 * Terminates jobs in the attached state context
 *
 * @this  AsyncKitState#
 * @param {function} callback - final callback to invoke after termination
 */
function terminator(callback)
{
  if (!Object.keys(this.jobs).length)
  {
    return;
  }

  // fast forward iteration index
  this.index = this.size;

  // abort jobs
  abort(this);

  // send back results we have so far
  async(callback)(null, this.results);
}


/***/ }),

/***/ "./node_modules/asynckit/parallel.js":
/*!*******************************************!*\
  !*** ./node_modules/asynckit/parallel.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var iterate    = __webpack_require__(/*! ./lib/iterate.js */ "./node_modules/asynckit/lib/iterate.js")
  , initState  = __webpack_require__(/*! ./lib/state.js */ "./node_modules/asynckit/lib/state.js")
  , terminator = __webpack_require__(/*! ./lib/terminator.js */ "./node_modules/asynckit/lib/terminator.js")
  ;

// Public API
module.exports = parallel;

/**
 * Runs iterator over provided array elements in parallel
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function parallel(list, iterator, callback)
{
  var state = initState(list);

  while (state.index < (state['keyedList'] || list).length)
  {
    iterate(list, iterator, state, function(error, result)
    {
      if (error)
      {
        callback(error, result);
        return;
      }

      // looks like it's the last one
      if (Object.keys(state.jobs).length === 0)
      {
        callback(null, state.results);
        return;
      }
    });

    state.index++;
  }

  return terminator.bind(state, callback);
}


/***/ }),

/***/ "./node_modules/asynckit/serial.js":
/*!*****************************************!*\
  !*** ./node_modules/asynckit/serial.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var serialOrdered = __webpack_require__(/*! ./serialOrdered.js */ "./node_modules/asynckit/serialOrdered.js");

// Public API
module.exports = serial;

/**
 * Runs iterator over provided array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serial(list, iterator, callback)
{
  return serialOrdered(list, iterator, null, callback);
}


/***/ }),

/***/ "./node_modules/asynckit/serialOrdered.js":
/*!************************************************!*\
  !*** ./node_modules/asynckit/serialOrdered.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var iterate    = __webpack_require__(/*! ./lib/iterate.js */ "./node_modules/asynckit/lib/iterate.js")
  , initState  = __webpack_require__(/*! ./lib/state.js */ "./node_modules/asynckit/lib/state.js")
  , terminator = __webpack_require__(/*! ./lib/terminator.js */ "./node_modules/asynckit/lib/terminator.js")
  ;

// Public API
module.exports = serialOrdered;
// sorting helpers
module.exports.ascending  = ascending;
module.exports.descending = descending;

/**
 * Runs iterator over provided sorted array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} sortMethod - custom sort function
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serialOrdered(list, iterator, sortMethod, callback)
{
  var state = initState(list, sortMethod);

  iterate(list, iterator, state, function iteratorHandler(error, result)
  {
    if (error)
    {
      callback(error, result);
      return;
    }

    state.index++;

    // are we there yet?
    if (state.index < (state['keyedList'] || list).length)
    {
      iterate(list, iterator, state, iteratorHandler);
      return;
    }

    // done here
    callback(null, state.results);
  });

  return terminator.bind(state, callback);
}

/*
 * -- Sort methods
 */

/**
 * sort helper to sort array elements in ascending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function ascending(a, b)
{
  return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * sort helper to sort array elements in descending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function descending(a, b)
{
  return -1 * ascending(a, b);
}


/***/ }),

/***/ "./node_modules/combined-stream/lib/combined_stream.js":
/*!*************************************************************!*\
  !*** ./node_modules/combined-stream/lib/combined_stream.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! util */ "util");
var Stream = __webpack_require__(/*! stream */ "stream").Stream;
var DelayedStream = __webpack_require__(/*! delayed-stream */ "./node_modules/delayed-stream/lib/delayed_stream.js");

module.exports = CombinedStream;
function CombinedStream() {
  this.writable = false;
  this.readable = true;
  this.dataSize = 0;
  this.maxDataSize = 2 * 1024 * 1024;
  this.pauseStreams = true;

  this._released = false;
  this._streams = [];
  this._currentStream = null;
  this._insideLoop = false;
  this._pendingNext = false;
}
util.inherits(CombinedStream, Stream);

CombinedStream.create = function(options) {
  var combinedStream = new this();

  options = options || {};
  for (var option in options) {
    combinedStream[option] = options[option];
  }

  return combinedStream;
};

CombinedStream.isStreamLike = function(stream) {
  return (typeof stream !== 'function')
    && (typeof stream !== 'string')
    && (typeof stream !== 'boolean')
    && (typeof stream !== 'number')
    && (!Buffer.isBuffer(stream));
};

CombinedStream.prototype.append = function(stream) {
  var isStreamLike = CombinedStream.isStreamLike(stream);

  if (isStreamLike) {
    if (!(stream instanceof DelayedStream)) {
      var newStream = DelayedStream.create(stream, {
        maxDataSize: Infinity,
        pauseStream: this.pauseStreams,
      });
      stream.on('data', this._checkDataSize.bind(this));
      stream = newStream;
    }

    this._handleErrors(stream);

    if (this.pauseStreams) {
      stream.pause();
    }
  }

  this._streams.push(stream);
  return this;
};

CombinedStream.prototype.pipe = function(dest, options) {
  Stream.prototype.pipe.call(this, dest, options);
  this.resume();
  return dest;
};

CombinedStream.prototype._getNext = function() {
  this._currentStream = null;

  if (this._insideLoop) {
    this._pendingNext = true;
    return; // defer call
  }

  this._insideLoop = true;
  try {
    do {
      this._pendingNext = false;
      this._realGetNext();
    } while (this._pendingNext);
  } finally {
    this._insideLoop = false;
  }
};

CombinedStream.prototype._realGetNext = function() {
  var stream = this._streams.shift();


  if (typeof stream == 'undefined') {
    this.end();
    return;
  }

  if (typeof stream !== 'function') {
    this._pipeNext(stream);
    return;
  }

  var getStream = stream;
  getStream(function(stream) {
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
      stream.on('data', this._checkDataSize.bind(this));
      this._handleErrors(stream);
    }

    this._pipeNext(stream);
  }.bind(this));
};

CombinedStream.prototype._pipeNext = function(stream) {
  this._currentStream = stream;

  var isStreamLike = CombinedStream.isStreamLike(stream);
  if (isStreamLike) {
    stream.on('end', this._getNext.bind(this));
    stream.pipe(this, {end: false});
    return;
  }

  var value = stream;
  this.write(value);
  this._getNext();
};

CombinedStream.prototype._handleErrors = function(stream) {
  var self = this;
  stream.on('error', function(err) {
    self._emitError(err);
  });
};

CombinedStream.prototype.write = function(data) {
  this.emit('data', data);
};

CombinedStream.prototype.pause = function() {
  if (!this.pauseStreams) {
    return;
  }

  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.pause) == 'function') this._currentStream.pause();
  this.emit('pause');
};

CombinedStream.prototype.resume = function() {
  if (!this._released) {
    this._released = true;
    this.writable = true;
    this._getNext();
  }

  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.resume) == 'function') this._currentStream.resume();
  this.emit('resume');
};

CombinedStream.prototype.end = function() {
  this._reset();
  this.emit('end');
};

CombinedStream.prototype.destroy = function() {
  this._reset();
  this.emit('close');
};

CombinedStream.prototype._reset = function() {
  this.writable = false;
  this._streams = [];
  this._currentStream = null;
};

CombinedStream.prototype._checkDataSize = function() {
  this._updateDataSize();
  if (this.dataSize <= this.maxDataSize) {
    return;
  }

  var message =
    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
  this._emitError(new Error(message));
};

CombinedStream.prototype._updateDataSize = function() {
  this.dataSize = 0;

  var self = this;
  this._streams.forEach(function(stream) {
    if (!stream.dataSize) {
      return;
    }

    self.dataSize += stream.dataSize;
  });

  if (this._currentStream && this._currentStream.dataSize) {
    this.dataSize += this._currentStream.dataSize;
  }
};

CombinedStream.prototype._emitError = function(err) {
  this._reset();
  this.emit('error', err);
};


/***/ }),

/***/ "./node_modules/delayed-stream/lib/delayed_stream.js":
/*!***********************************************************!*\
  !*** ./node_modules/delayed-stream/lib/delayed_stream.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stream = __webpack_require__(/*! stream */ "stream").Stream;
var util = __webpack_require__(/*! util */ "util");

module.exports = DelayedStream;
function DelayedStream() {
  this.source = null;
  this.dataSize = 0;
  this.maxDataSize = 1024 * 1024;
  this.pauseStream = true;

  this._maxDataSizeExceeded = false;
  this._released = false;
  this._bufferedEvents = [];
}
util.inherits(DelayedStream, Stream);

DelayedStream.create = function(source, options) {
  var delayedStream = new this();

  options = options || {};
  for (var option in options) {
    delayedStream[option] = options[option];
  }

  delayedStream.source = source;

  var realEmit = source.emit;
  source.emit = function() {
    delayedStream._handleEmit(arguments);
    return realEmit.apply(source, arguments);
  };

  source.on('error', function() {});
  if (delayedStream.pauseStream) {
    source.pause();
  }

  return delayedStream;
};

Object.defineProperty(DelayedStream.prototype, 'readable', {
  configurable: true,
  enumerable: true,
  get: function() {
    return this.source.readable;
  }
});

DelayedStream.prototype.setEncoding = function() {
  return this.source.setEncoding.apply(this.source, arguments);
};

DelayedStream.prototype.resume = function() {
  if (!this._released) {
    this.release();
  }

  this.source.resume();
};

DelayedStream.prototype.pause = function() {
  this.source.pause();
};

DelayedStream.prototype.release = function() {
  this._released = true;

  this._bufferedEvents.forEach(function(args) {
    this.emit.apply(this, args);
  }.bind(this));
  this._bufferedEvents = [];
};

DelayedStream.prototype.pipe = function() {
  var r = Stream.prototype.pipe.apply(this, arguments);
  this.resume();
  return r;
};

DelayedStream.prototype._handleEmit = function(args) {
  if (this._released) {
    this.emit.apply(this, args);
    return;
  }

  if (args[0] === 'data') {
    this.dataSize += args[1].length;
    this._checkIfMaxDataSizeExceeded();
  }

  this._bufferedEvents.push(args);
};

DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
  if (this._maxDataSizeExceeded) {
    return;
  }

  if (this.dataSize <= this.maxDataSize) {
    return;
  }

  this._maxDataSizeExceeded = true;
  var message =
    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.'
  this.emit('error', new Error(message));
};


/***/ }),

/***/ "./node_modules/form-data/lib/form_data.js":
/*!*************************************************!*\
  !*** ./node_modules/form-data/lib/form_data.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var CombinedStream = __webpack_require__(/*! combined-stream */ "./node_modules/combined-stream/lib/combined_stream.js");
var util = __webpack_require__(/*! util */ "util");
var path = __webpack_require__(/*! path */ "path");
var http = __webpack_require__(/*! http */ "http");
var https = __webpack_require__(/*! https */ "https");
var parseUrl = __webpack_require__(/*! url */ "url").parse;
var fs = __webpack_require__(/*! fs */ "fs");
var mime = __webpack_require__(/*! mime-types */ "./node_modules/mime-types/index.js");
var asynckit = __webpack_require__(/*! asynckit */ "./node_modules/asynckit/index.js");
var populate = __webpack_require__(/*! ./populate.js */ "./node_modules/form-data/lib/populate.js");

// Public API
module.exports = FormData;

// make it a Stream
util.inherits(FormData, CombinedStream);

/**
 * Create readable "multipart/form-data" streams.
 * Can be used to submit forms
 * and file uploads to other web applications.
 *
 * @constructor
 * @param {Object} options - Properties to be added/overriden for FormData and CombinedStream
 */
function FormData(options) {
  if (!(this instanceof FormData)) {
    return new FormData();
  }

  this._overheadLength = 0;
  this._valueLength = 0;
  this._valuesToMeasure = [];

  CombinedStream.call(this);

  options = options || {};
  for (var option in options) {
    this[option] = options[option];
  }
}

FormData.LINE_BREAK = '\r\n';
FormData.DEFAULT_CONTENT_TYPE = 'application/octet-stream';

FormData.prototype.append = function(field, value, options) {

  options = options || {};

  // allow filename as single option
  if (typeof options == 'string') {
    options = {filename: options};
  }

  var append = CombinedStream.prototype.append.bind(this);

  // all that streamy business can't handle numbers
  if (typeof value == 'number') {
    value = '' + value;
  }

  // https://github.com/felixge/node-form-data/issues/38
  if (util.isArray(value)) {
    // Please convert your array into string
    // the way web server expects it
    this._error(new Error('Arrays are not supported.'));
    return;
  }

  var header = this._multiPartHeader(field, value, options);
  var footer = this._multiPartFooter();

  append(header);
  append(value);
  append(footer);

  // pass along options.knownLength
  this._trackLength(header, value, options);
};

FormData.prototype._trackLength = function(header, value, options) {
  var valueLength = 0;

  // used w/ getLengthSync(), when length is known.
  // e.g. for streaming directly from a remote server,
  // w/ a known file a size, and not wanting to wait for
  // incoming file to finish to get its size.
  if (options.knownLength != null) {
    valueLength += +options.knownLength;
  } else if (Buffer.isBuffer(value)) {
    valueLength = value.length;
  } else if (typeof value === 'string') {
    valueLength = Buffer.byteLength(value);
  }

  this._valueLength += valueLength;

  // @check why add CRLF? does this account for custom/multiple CRLFs?
  this._overheadLength +=
    Buffer.byteLength(header) +
    FormData.LINE_BREAK.length;

  // empty or either doesn't have path or not an http response
  if (!value || ( !value.path && !(value.readable && value.hasOwnProperty('httpVersion')) )) {
    return;
  }

  // no need to bother with the length
  if (!options.knownLength) {
    this._valuesToMeasure.push(value);
  }
};

FormData.prototype._lengthRetriever = function(value, callback) {

  if (value.hasOwnProperty('fd')) {

    // take read range into a account
    // `end` = Infinity –> read file till the end
    //
    // TODO: Looks like there is bug in Node fs.createReadStream
    // it doesn't respect `end` options without `start` options
    // Fix it when node fixes it.
    // https://github.com/joyent/node/issues/7819
    if (value.end != undefined && value.end != Infinity && value.start != undefined) {

      // when end specified
      // no need to calculate range
      // inclusive, starts with 0
      callback(null, value.end + 1 - (value.start ? value.start : 0));

    // not that fast snoopy
    } else {
      // still need to fetch file size from fs
      fs.stat(value.path, function(err, stat) {

        var fileSize;

        if (err) {
          callback(err);
          return;
        }

        // update final size based on the range options
        fileSize = stat.size - (value.start ? value.start : 0);
        callback(null, fileSize);
      });
    }

  // or http response
  } else if (value.hasOwnProperty('httpVersion')) {
    callback(null, +value.headers['content-length']);

  // or request stream http://github.com/mikeal/request
  } else if (value.hasOwnProperty('httpModule')) {
    // wait till response come back
    value.on('response', function(response) {
      value.pause();
      callback(null, +response.headers['content-length']);
    });
    value.resume();

  // something else
  } else {
    callback('Unknown stream');
  }
};

FormData.prototype._multiPartHeader = function(field, value, options) {
  // custom header specified (as string)?
  // it becomes responsible for boundary
  // (e.g. to handle extra CRLFs on .NET servers)
  if (typeof options.header == 'string') {
    return options.header;
  }

  var contentDisposition = this._getContentDisposition(value, options);
  var contentType = this._getContentType(value, options);

  var contents = '';
  var headers  = {
    // add custom disposition as third element or keep it two elements if not
    'Content-Disposition': ['form-data', 'name="' + field + '"'].concat(contentDisposition || []),
    // if no content type. allow it to be empty array
    'Content-Type': [].concat(contentType || [])
  };

  // allow custom headers.
  if (typeof options.header == 'object') {
    populate(headers, options.header);
  }

  var header;
  for (var prop in headers) {
    if (!headers.hasOwnProperty(prop)) continue;
    header = headers[prop];

    // skip nullish headers.
    if (header == null) {
      continue;
    }

    // convert all headers to arrays.
    if (!Array.isArray(header)) {
      header = [header];
    }

    // add non-empty headers.
    if (header.length) {
      contents += prop + ': ' + header.join('; ') + FormData.LINE_BREAK;
    }
  }

  return '--' + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;
};

FormData.prototype._getContentDisposition = function(value, options) {

  var filename
    , contentDisposition
    ;

  if (typeof options.filepath === 'string') {
    // custom filepath for relative paths
    filename = path.normalize(options.filepath).replace(/\\/g, '/');
  } else if (options.filename || value.name || value.path) {
    // custom filename take precedence
    // formidable and the browser add a name property
    // fs- and request- streams have path property
    filename = path.basename(options.filename || value.name || value.path);
  } else if (value.readable && value.hasOwnProperty('httpVersion')) {
    // or try http response
    filename = path.basename(value.client._httpMessage.path);
  }

  if (filename) {
    contentDisposition = 'filename="' + filename + '"';
  }

  return contentDisposition;
};

FormData.prototype._getContentType = function(value, options) {

  // use custom content-type above all
  var contentType = options.contentType;

  // or try `name` from formidable, browser
  if (!contentType && value.name) {
    contentType = mime.lookup(value.name);
  }

  // or try `path` from fs-, request- streams
  if (!contentType && value.path) {
    contentType = mime.lookup(value.path);
  }

  // or if it's http-reponse
  if (!contentType && value.readable && value.hasOwnProperty('httpVersion')) {
    contentType = value.headers['content-type'];
  }

  // or guess it from the filepath or filename
  if (!contentType && (options.filepath || options.filename)) {
    contentType = mime.lookup(options.filepath || options.filename);
  }

  // fallback to the default content type if `value` is not simple value
  if (!contentType && typeof value == 'object') {
    contentType = FormData.DEFAULT_CONTENT_TYPE;
  }

  return contentType;
};

FormData.prototype._multiPartFooter = function() {
  return function(next) {
    var footer = FormData.LINE_BREAK;

    var lastPart = (this._streams.length === 0);
    if (lastPart) {
      footer += this._lastBoundary();
    }

    next(footer);
  }.bind(this);
};

FormData.prototype._lastBoundary = function() {
  return '--' + this.getBoundary() + '--' + FormData.LINE_BREAK;
};

FormData.prototype.getHeaders = function(userHeaders) {
  var header;
  var formHeaders = {
    'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
  };

  for (header in userHeaders) {
    if (userHeaders.hasOwnProperty(header)) {
      formHeaders[header.toLowerCase()] = userHeaders[header];
    }
  }

  return formHeaders;
};

FormData.prototype.getBoundary = function() {
  if (!this._boundary) {
    this._generateBoundary();
  }

  return this._boundary;
};

FormData.prototype._generateBoundary = function() {
  // This generates a 50 character boundary similar to those used by Firefox.
  // They are optimized for boyer-moore parsing.
  var boundary = '--------------------------';
  for (var i = 0; i < 24; i++) {
    boundary += Math.floor(Math.random() * 10).toString(16);
  }

  this._boundary = boundary;
};

// Note: getLengthSync DOESN'T calculate streams length
// As workaround one can calculate file size manually
// and add it as knownLength option
FormData.prototype.getLengthSync = function() {
  var knownLength = this._overheadLength + this._valueLength;

  // Don't get confused, there are 3 "internal" streams for each keyval pair
  // so it basically checks if there is any value added to the form
  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }

  // https://github.com/form-data/form-data/issues/40
  if (!this.hasKnownLength()) {
    // Some async length retrievers are present
    // therefore synchronous length calculation is false.
    // Please use getLength(callback) to get proper length
    this._error(new Error('Cannot calculate proper length in synchronous way.'));
  }

  return knownLength;
};

// Public API to check if length of added values is known
// https://github.com/form-data/form-data/issues/196
// https://github.com/form-data/form-data/issues/262
FormData.prototype.hasKnownLength = function() {
  var hasKnownLength = true;

  if (this._valuesToMeasure.length) {
    hasKnownLength = false;
  }

  return hasKnownLength;
};

FormData.prototype.getLength = function(cb) {
  var knownLength = this._overheadLength + this._valueLength;

  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }

  if (!this._valuesToMeasure.length) {
    process.nextTick(cb.bind(this, null, knownLength));
    return;
  }

  asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
    if (err) {
      cb(err);
      return;
    }

    values.forEach(function(length) {
      knownLength += length;
    });

    cb(null, knownLength);
  });
};

FormData.prototype.submit = function(params, cb) {
  var request
    , options
    , defaults = {method: 'post'}
    ;

  // parse provided url if it's string
  // or treat it as options object
  if (typeof params == 'string') {

    params = parseUrl(params);
    options = populate({
      port: params.port,
      path: params.pathname,
      host: params.hostname,
      protocol: params.protocol
    }, defaults);

  // use custom params
  } else {

    options = populate(params, defaults);
    // if no port provided use default one
    if (!options.port) {
      options.port = options.protocol == 'https:' ? 443 : 80;
    }
  }

  // put that good code in getHeaders to some use
  options.headers = this.getHeaders(params.headers);

  // https if specified, fallback to http in any other case
  if (options.protocol == 'https:') {
    request = https.request(options);
  } else {
    request = http.request(options);
  }

  // get content length and fire away
  this.getLength(function(err, length) {
    if (err) {
      this._error(err);
      return;
    }

    // add content length
    request.setHeader('Content-Length', length);

    this.pipe(request);
    if (cb) {
      request.on('error', cb);
      request.on('response', cb.bind(this, null));
    }
  }.bind(this));

  return request;
};

FormData.prototype._error = function(err) {
  if (!this.error) {
    this.error = err;
    this.pause();
    this.emit('error', err);
  }
};

FormData.prototype.toString = function () {
  return '[object FormData]';
};


/***/ }),

/***/ "./node_modules/form-data/lib/populate.js":
/*!************************************************!*\
  !*** ./node_modules/form-data/lib/populate.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// populates missing values
module.exports = function(dst, src) {

  Object.keys(src).forEach(function(prop)
  {
    dst[prop] = dst[prop] || src[prop];
  });

  return dst;
};


/***/ }),

/***/ "./node_modules/mime-db/db.json":
/*!**************************************!*\
  !*** ./node_modules/mime-db/db.json ***!
  \**************************************/
/*! exports provided: application/1d-interleaved-parityfec, application/3gpdash-qoe-report+xml, application/3gpp-ims+xml, application/a2l, application/activemessage, application/activity+json, application/alto-costmap+json, application/alto-costmapfilter+json, application/alto-directory+json, application/alto-endpointcost+json, application/alto-endpointcostparams+json, application/alto-endpointprop+json, application/alto-endpointpropparams+json, application/alto-error+json, application/alto-networkmap+json, application/alto-networkmapfilter+json, application/aml, application/andrew-inset, application/applefile, application/applixware, application/atf, application/atfx, application/atom+xml, application/atomcat+xml, application/atomdeleted+xml, application/atomicmail, application/atomsvc+xml, application/atsc-dwd+xml, application/atsc-held+xml, application/atsc-rsat+xml, application/atxml, application/auth-policy+xml, application/bacnet-xdd+zip, application/batch-smtp, application/bdoc, application/beep+xml, application/calendar+json, application/calendar+xml, application/call-completion, application/cals-1840, application/cbor, application/cccex, application/ccmp+xml, application/ccxml+xml, application/cdfx+xml, application/cdmi-capability, application/cdmi-container, application/cdmi-domain, application/cdmi-object, application/cdmi-queue, application/cdni, application/cea, application/cea-2018+xml, application/cellml+xml, application/cfw, application/clue_info+xml, application/cms, application/cnrp+xml, application/coap-group+json, application/coap-payload, application/commonground, application/conference-info+xml, application/cose, application/cose-key, application/cose-key-set, application/cpl+xml, application/csrattrs, application/csta+xml, application/cstadata+xml, application/csvm+json, application/cu-seeme, application/cwt, application/cybercash, application/dart, application/dash+xml, application/dashdelta, application/davmount+xml, application/dca-rft, application/dcd, application/dec-dx, application/dialog-info+xml, application/dicom, application/dicom+json, application/dicom+xml, application/dii, application/dit, application/dns, application/dns+json, application/dns-message, application/docbook+xml, application/dskpp+xml, application/dssc+der, application/dssc+xml, application/dvcs, application/ecmascript, application/edi-consent, application/edi-x12, application/edifact, application/efi, application/emergencycalldata.comment+xml, application/emergencycalldata.control+xml, application/emergencycalldata.deviceinfo+xml, application/emergencycalldata.ecall.msd, application/emergencycalldata.providerinfo+xml, application/emergencycalldata.serviceinfo+xml, application/emergencycalldata.subscriberinfo+xml, application/emergencycalldata.veds+xml, application/emma+xml, application/emotionml+xml, application/encaprtp, application/epp+xml, application/epub+zip, application/eshop, application/exi, application/expect-ct-report+json, application/fastinfoset, application/fastsoap, application/fdt+xml, application/fhir+json, application/fhir+xml, application/fido.trusted-apps+json, application/fits, application/font-sfnt, application/font-tdpfr, application/font-woff, application/framework-attributes+xml, application/geo+json, application/geo+json-seq, application/geopackage+sqlite3, application/geoxacml+xml, application/gltf-buffer, application/gml+xml, application/gpx+xml, application/gxf, application/gzip, application/h224, application/held+xml, application/hjson, application/http, application/hyperstudio, application/ibe-key-request+xml, application/ibe-pkg-reply+xml, application/ibe-pp-data, application/iges, application/im-iscomposing+xml, application/index, application/index.cmd, application/index.obj, application/index.response, application/index.vnd, application/inkml+xml, application/iotp, application/ipfix, application/ipp, application/isup, application/its+xml, application/java-archive, application/java-serialized-object, application/java-vm, application/javascript, application/jf2feed+json, application/jose, application/jose+json, application/jrd+json, application/json, application/json-patch+json, application/json-seq, application/json5, application/jsonml+json, application/jwk+json, application/jwk-set+json, application/jwt, application/kpml-request+xml, application/kpml-response+xml, application/ld+json, application/lgr+xml, application/link-format, application/load-control+xml, application/lost+xml, application/lostsync+xml, application/lxf, application/mac-binhex40, application/mac-compactpro, application/macwriteii, application/mads+xml, application/manifest+json, application/marc, application/marcxml+xml, application/mathematica, application/mathml+xml, application/mathml-content+xml, application/mathml-presentation+xml, application/mbms-associated-procedure-description+xml, application/mbms-deregister+xml, application/mbms-envelope+xml, application/mbms-msk+xml, application/mbms-msk-response+xml, application/mbms-protection-description+xml, application/mbms-reception-report+xml, application/mbms-register+xml, application/mbms-register-response+xml, application/mbms-schedule+xml, application/mbms-user-service-description+xml, application/mbox, application/media-policy-dataset+xml, application/media_control+xml, application/mediaservercontrol+xml, application/merge-patch+json, application/metalink+xml, application/metalink4+xml, application/mets+xml, application/mf4, application/mikey, application/mmt-aei+xml, application/mmt-usd+xml, application/mods+xml, application/moss-keys, application/moss-signature, application/mosskey-data, application/mosskey-request, application/mp21, application/mp4, application/mpeg4-generic, application/mpeg4-iod, application/mpeg4-iod-xmt, application/mrb-consumer+xml, application/mrb-publish+xml, application/msc-ivr+xml, application/msc-mixer+xml, application/msword, application/mud+json, application/mxf, application/n-quads, application/n-triples, application/nasdata, application/news-checkgroups, application/news-groupinfo, application/news-transmission, application/nlsml+xml, application/node, application/nss, application/ocsp-request, application/ocsp-response, application/octet-stream, application/oda, application/odm+xml, application/odx, application/oebps-package+xml, application/ogg, application/omdoc+xml, application/onenote, application/oscore, application/oxps, application/p2p-overlay+xml, application/parityfec, application/passport, application/patch-ops-error+xml, application/pdf, application/pdx, application/pem-certificate-chain, application/pgp-encrypted, application/pgp-keys, application/pgp-signature, application/pics-rules, application/pidf+xml, application/pidf-diff+xml, application/pkcs10, application/pkcs12, application/pkcs7-mime, application/pkcs7-signature, application/pkcs8, application/pkcs8-encrypted, application/pkix-attr-cert, application/pkix-cert, application/pkix-crl, application/pkix-pkipath, application/pkixcmp, application/pls+xml, application/poc-settings+xml, application/postscript, application/ppsp-tracker+json, application/problem+json, application/problem+xml, application/provenance+xml, application/prs.alvestrand.titrax-sheet, application/prs.cww, application/prs.hpub+zip, application/prs.nprend, application/prs.plucker, application/prs.rdf-xml-crypt, application/prs.xsf+xml, application/pskc+xml, application/qsig, application/raml+yaml, application/raptorfec, application/rdap+json, application/rdf+xml, application/reginfo+xml, application/relax-ng-compact-syntax, application/remote-printing, application/reputon+json, application/resource-lists+xml, application/resource-lists-diff+xml, application/rfc+xml, application/riscos, application/rlmi+xml, application/rls-services+xml, application/route-apd+xml, application/route-s-tsid+xml, application/route-usd+xml, application/rpki-ghostbusters, application/rpki-manifest, application/rpki-publication, application/rpki-roa, application/rpki-updown, application/rsd+xml, application/rss+xml, application/rtf, application/rtploopback, application/rtx, application/samlassertion+xml, application/samlmetadata+xml, application/sbml+xml, application/scaip+xml, application/scim+json, application/scvp-cv-request, application/scvp-cv-response, application/scvp-vp-request, application/scvp-vp-response, application/sdp, application/secevent+jwt, application/senml+cbor, application/senml+json, application/senml+xml, application/senml-exi, application/sensml+cbor, application/sensml+json, application/sensml+xml, application/sensml-exi, application/sep+xml, application/sep-exi, application/session-info, application/set-payment, application/set-payment-initiation, application/set-registration, application/set-registration-initiation, application/sgml, application/sgml-open-catalog, application/shf+xml, application/sieve, application/simple-filter+xml, application/simple-message-summary, application/simplesymbolcontainer, application/slate, application/smil, application/smil+xml, application/smpte336m, application/soap+fastinfoset, application/soap+xml, application/sparql-query, application/sparql-results+xml, application/spirits-event+xml, application/sql, application/srgs, application/srgs+xml, application/sru+xml, application/ssdl+xml, application/ssml+xml, application/stix+json, application/tamp-apex-update, application/tamp-apex-update-confirm, application/tamp-community-update, application/tamp-community-update-confirm, application/tamp-error, application/tamp-sequence-adjust, application/tamp-sequence-adjust-confirm, application/tamp-status-query, application/tamp-status-response, application/tamp-update, application/tamp-update-confirm, application/tar, application/taxii+json, application/tei+xml, application/tetra_isi, application/thraud+xml, application/timestamp-query, application/timestamp-reply, application/timestamped-data, application/tlsrpt+gzip, application/tlsrpt+json, application/tnauthlist, application/trickle-ice-sdpfrag, application/trig, application/ttml+xml, application/tve-trigger, application/tzif, application/tzif-leap, application/ulpfec, application/urc-grpsheet+xml, application/urc-ressheet+xml, application/urc-targetdesc+xml, application/urc-uisocketdesc+xml, application/vcard+json, application/vcard+xml, application/vemmi, application/vividence.scriptfile, application/vnd.1000minds.decision-model+xml, application/vnd.3gpp-prose+xml, application/vnd.3gpp-prose-pc3ch+xml, application/vnd.3gpp-v2x-local-service-information, application/vnd.3gpp.access-transfer-events+xml, application/vnd.3gpp.bsf+xml, application/vnd.3gpp.gmop+xml, application/vnd.3gpp.mc-signalling-ear, application/vnd.3gpp.mcdata-affiliation-command+xml, application/vnd.3gpp.mcdata-info+xml, application/vnd.3gpp.mcdata-payload, application/vnd.3gpp.mcdata-service-config+xml, application/vnd.3gpp.mcdata-signalling, application/vnd.3gpp.mcdata-ue-config+xml, application/vnd.3gpp.mcdata-user-profile+xml, application/vnd.3gpp.mcptt-affiliation-command+xml, application/vnd.3gpp.mcptt-floor-request+xml, application/vnd.3gpp.mcptt-info+xml, application/vnd.3gpp.mcptt-location-info+xml, application/vnd.3gpp.mcptt-mbms-usage-info+xml, application/vnd.3gpp.mcptt-service-config+xml, application/vnd.3gpp.mcptt-signed+xml, application/vnd.3gpp.mcptt-ue-config+xml, application/vnd.3gpp.mcptt-ue-init-config+xml, application/vnd.3gpp.mcptt-user-profile+xml, application/vnd.3gpp.mcvideo-affiliation-command+xml, application/vnd.3gpp.mcvideo-affiliation-info+xml, application/vnd.3gpp.mcvideo-location-info+xml, application/vnd.3gpp.mcvideo-mbms-usage-info+xml, application/vnd.3gpp.mcvideo-service-config+xml, application/vnd.3gpp.mcvideo-transmission-request+xml, application/vnd.3gpp.mcvideo-ue-config+xml, application/vnd.3gpp.mcvideo-user-profile+xml, application/vnd.3gpp.mid-call+xml, application/vnd.3gpp.pic-bw-large, application/vnd.3gpp.pic-bw-small, application/vnd.3gpp.pic-bw-var, application/vnd.3gpp.sms, application/vnd.3gpp.sms+xml, application/vnd.3gpp.srvcc-ext+xml, application/vnd.3gpp.srvcc-info+xml, application/vnd.3gpp.state-and-event-info+xml, application/vnd.3gpp.ussd+xml, application/vnd.3gpp2.bcmcsinfo+xml, application/vnd.3gpp2.sms, application/vnd.3gpp2.tcap, application/vnd.3lightssoftware.imagescal, application/vnd.3m.post-it-notes, application/vnd.accpac.simply.aso, application/vnd.accpac.simply.imp, application/vnd.acucobol, application/vnd.acucorp, application/vnd.adobe.air-application-installer-package+zip, application/vnd.adobe.flash.movie, application/vnd.adobe.formscentral.fcdt, application/vnd.adobe.fxp, application/vnd.adobe.partial-upload, application/vnd.adobe.xdp+xml, application/vnd.adobe.xfdf, application/vnd.aether.imp, application/vnd.afpc.afplinedata, application/vnd.afpc.modca, application/vnd.ah-barcode, application/vnd.ahead.space, application/vnd.airzip.filesecure.azf, application/vnd.airzip.filesecure.azs, application/vnd.amadeus+json, application/vnd.amazon.ebook, application/vnd.amazon.mobi8-ebook, application/vnd.americandynamics.acc, application/vnd.amiga.ami, application/vnd.amundsen.maze+xml, application/vnd.android.package-archive, application/vnd.anki, application/vnd.anser-web-certificate-issue-initiation, application/vnd.anser-web-funds-transfer-initiation, application/vnd.antix.game-component, application/vnd.apache.thrift.binary, application/vnd.apache.thrift.compact, application/vnd.apache.thrift.json, application/vnd.api+json, application/vnd.apothekende.reservation+json, application/vnd.apple.installer+xml, application/vnd.apple.keynote, application/vnd.apple.mpegurl, application/vnd.apple.numbers, application/vnd.apple.pages, application/vnd.apple.pkpass, application/vnd.arastra.swi, application/vnd.aristanetworks.swi, application/vnd.artisan+json, application/vnd.artsquare, application/vnd.astraea-software.iota, application/vnd.audiograph, application/vnd.autopackage, application/vnd.avalon+json, application/vnd.avistar+xml, application/vnd.balsamiq.bmml+xml, application/vnd.balsamiq.bmpr, application/vnd.banana-accounting, application/vnd.bbf.usp.msg, application/vnd.bbf.usp.msg+json, application/vnd.bekitzur-stech+json, application/vnd.bint.med-content, application/vnd.biopax.rdf+xml, application/vnd.blink-idb-value-wrapper, application/vnd.blueice.multipass, application/vnd.bluetooth.ep.oob, application/vnd.bluetooth.le.oob, application/vnd.bmi, application/vnd.businessobjects, application/vnd.byu.uapi+json, application/vnd.cab-jscript, application/vnd.canon-cpdl, application/vnd.canon-lips, application/vnd.capasystems-pg+json, application/vnd.cendio.thinlinc.clientconf, application/vnd.century-systems.tcp_stream, application/vnd.chemdraw+xml, application/vnd.chess-pgn, application/vnd.chipnuts.karaoke-mmd, application/vnd.cinderella, application/vnd.cirpack.isdn-ext, application/vnd.citationstyles.style+xml, application/vnd.claymore, application/vnd.cloanto.rp9, application/vnd.clonk.c4group, application/vnd.cluetrust.cartomobile-config, application/vnd.cluetrust.cartomobile-config-pkg, application/vnd.coffeescript, application/vnd.collabio.xodocuments.document, application/vnd.collabio.xodocuments.document-template, application/vnd.collabio.xodocuments.presentation, application/vnd.collabio.xodocuments.presentation-template, application/vnd.collabio.xodocuments.spreadsheet, application/vnd.collabio.xodocuments.spreadsheet-template, application/vnd.collection+json, application/vnd.collection.doc+json, application/vnd.collection.next+json, application/vnd.comicbook+zip, application/vnd.comicbook-rar, application/vnd.commerce-battelle, application/vnd.commonspace, application/vnd.contact.cmsg, application/vnd.coreos.ignition+json, application/vnd.cosmocaller, application/vnd.crick.clicker, application/vnd.crick.clicker.keyboard, application/vnd.crick.clicker.palette, application/vnd.crick.clicker.template, application/vnd.crick.clicker.wordbank, application/vnd.criticaltools.wbs+xml, application/vnd.ctc-posml, application/vnd.ctct.ws+xml, application/vnd.cups-pdf, application/vnd.cups-postscript, application/vnd.cups-ppd, application/vnd.cups-raster, application/vnd.cups-raw, application/vnd.curl, application/vnd.curl.car, application/vnd.curl.pcurl, application/vnd.cyan.dean.root+xml, application/vnd.cybank, application/vnd.d2l.coursepackage1p0+zip, application/vnd.dart, application/vnd.data-vision.rdz, application/vnd.datapackage+json, application/vnd.dataresource+json, application/vnd.debian.binary-package, application/vnd.dece.data, application/vnd.dece.ttml+xml, application/vnd.dece.unspecified, application/vnd.dece.zip, application/vnd.denovo.fcselayout-link, application/vnd.desmume.movie, application/vnd.dir-bi.plate-dl-nosuffix, application/vnd.dm.delegation+xml, application/vnd.dna, application/vnd.document+json, application/vnd.dolby.mlp, application/vnd.dolby.mobile.1, application/vnd.dolby.mobile.2, application/vnd.doremir.scorecloud-binary-document, application/vnd.dpgraph, application/vnd.dreamfactory, application/vnd.drive+json, application/vnd.ds-keypoint, application/vnd.dtg.local, application/vnd.dtg.local.flash, application/vnd.dtg.local.html, application/vnd.dvb.ait, application/vnd.dvb.dvbj, application/vnd.dvb.esgcontainer, application/vnd.dvb.ipdcdftnotifaccess, application/vnd.dvb.ipdcesgaccess, application/vnd.dvb.ipdcesgaccess2, application/vnd.dvb.ipdcesgpdd, application/vnd.dvb.ipdcroaming, application/vnd.dvb.iptv.alfec-base, application/vnd.dvb.iptv.alfec-enhancement, application/vnd.dvb.notif-aggregate-root+xml, application/vnd.dvb.notif-container+xml, application/vnd.dvb.notif-generic+xml, application/vnd.dvb.notif-ia-msglist+xml, application/vnd.dvb.notif-ia-registration-request+xml, application/vnd.dvb.notif-ia-registration-response+xml, application/vnd.dvb.notif-init+xml, application/vnd.dvb.pfr, application/vnd.dvb.service, application/vnd.dxr, application/vnd.dynageo, application/vnd.dzr, application/vnd.easykaraoke.cdgdownload, application/vnd.ecdis-update, application/vnd.ecip.rlp, application/vnd.ecowin.chart, application/vnd.ecowin.filerequest, application/vnd.ecowin.fileupdate, application/vnd.ecowin.series, application/vnd.ecowin.seriesrequest, application/vnd.ecowin.seriesupdate, application/vnd.efi.img, application/vnd.efi.iso, application/vnd.emclient.accessrequest+xml, application/vnd.enliven, application/vnd.enphase.envoy, application/vnd.eprints.data+xml, application/vnd.epson.esf, application/vnd.epson.msf, application/vnd.epson.quickanime, application/vnd.epson.salt, application/vnd.epson.ssf, application/vnd.ericsson.quickcall, application/vnd.espass-espass+zip, application/vnd.eszigno3+xml, application/vnd.etsi.aoc+xml, application/vnd.etsi.asic-e+zip, application/vnd.etsi.asic-s+zip, application/vnd.etsi.cug+xml, application/vnd.etsi.iptvcommand+xml, application/vnd.etsi.iptvdiscovery+xml, application/vnd.etsi.iptvprofile+xml, application/vnd.etsi.iptvsad-bc+xml, application/vnd.etsi.iptvsad-cod+xml, application/vnd.etsi.iptvsad-npvr+xml, application/vnd.etsi.iptvservice+xml, application/vnd.etsi.iptvsync+xml, application/vnd.etsi.iptvueprofile+xml, application/vnd.etsi.mcid+xml, application/vnd.etsi.mheg5, application/vnd.etsi.overload-control-policy-dataset+xml, application/vnd.etsi.pstn+xml, application/vnd.etsi.sci+xml, application/vnd.etsi.simservs+xml, application/vnd.etsi.timestamp-token, application/vnd.etsi.tsl+xml, application/vnd.etsi.tsl.der, application/vnd.eudora.data, application/vnd.evolv.ecig.profile, application/vnd.evolv.ecig.settings, application/vnd.evolv.ecig.theme, application/vnd.exstream-empower+zip, application/vnd.exstream-package, application/vnd.ezpix-album, application/vnd.ezpix-package, application/vnd.f-secure.mobile, application/vnd.fastcopy-disk-image, application/vnd.fdf, application/vnd.fdsn.mseed, application/vnd.fdsn.seed, application/vnd.ffsns, application/vnd.filmit.zfc, application/vnd.fints, application/vnd.firemonkeys.cloudcell, application/vnd.flographit, application/vnd.fluxtime.clip, application/vnd.font-fontforge-sfd, application/vnd.framemaker, application/vnd.frogans.fnc, application/vnd.frogans.ltf, application/vnd.fsc.weblaunch, application/vnd.fujitsu.oasys, application/vnd.fujitsu.oasys2, application/vnd.fujitsu.oasys3, application/vnd.fujitsu.oasysgp, application/vnd.fujitsu.oasysprs, application/vnd.fujixerox.art-ex, application/vnd.fujixerox.art4, application/vnd.fujixerox.ddd, application/vnd.fujixerox.docuworks, application/vnd.fujixerox.docuworks.binder, application/vnd.fujixerox.docuworks.container, application/vnd.fujixerox.hbpl, application/vnd.fut-misnet, application/vnd.futoin+cbor, application/vnd.futoin+json, application/vnd.fuzzysheet, application/vnd.genomatix.tuxedo, application/vnd.geo+json, application/vnd.geocube+xml, application/vnd.geogebra.file, application/vnd.geogebra.tool, application/vnd.geometry-explorer, application/vnd.geonext, application/vnd.geoplan, application/vnd.geospace, application/vnd.gerber, application/vnd.globalplatform.card-content-mgt, application/vnd.globalplatform.card-content-mgt-response, application/vnd.gmx, application/vnd.google-apps.document, application/vnd.google-apps.presentation, application/vnd.google-apps.spreadsheet, application/vnd.google-earth.kml+xml, application/vnd.google-earth.kmz, application/vnd.gov.sk.e-form+xml, application/vnd.gov.sk.e-form+zip, application/vnd.gov.sk.xmldatacontainer+xml, application/vnd.grafeq, application/vnd.gridmp, application/vnd.groove-account, application/vnd.groove-help, application/vnd.groove-identity-message, application/vnd.groove-injector, application/vnd.groove-tool-message, application/vnd.groove-tool-template, application/vnd.groove-vcard, application/vnd.hal+json, application/vnd.hal+xml, application/vnd.handheld-entertainment+xml, application/vnd.hbci, application/vnd.hc+json, application/vnd.hcl-bireports, application/vnd.hdt, application/vnd.heroku+json, application/vnd.hhe.lesson-player, application/vnd.hp-hpgl, application/vnd.hp-hpid, application/vnd.hp-hps, application/vnd.hp-jlyt, application/vnd.hp-pcl, application/vnd.hp-pclxl, application/vnd.httphone, application/vnd.hydrostatix.sof-data, application/vnd.hyper+json, application/vnd.hyper-item+json, application/vnd.hyperdrive+json, application/vnd.hzn-3d-crossword, application/vnd.ibm.afplinedata, application/vnd.ibm.electronic-media, application/vnd.ibm.minipay, application/vnd.ibm.modcap, application/vnd.ibm.rights-management, application/vnd.ibm.secure-container, application/vnd.iccprofile, application/vnd.ieee.1905, application/vnd.igloader, application/vnd.imagemeter.folder+zip, application/vnd.imagemeter.image+zip, application/vnd.immervision-ivp, application/vnd.immervision-ivu, application/vnd.ims.imsccv1p1, application/vnd.ims.imsccv1p2, application/vnd.ims.imsccv1p3, application/vnd.ims.lis.v2.result+json, application/vnd.ims.lti.v2.toolconsumerprofile+json, application/vnd.ims.lti.v2.toolproxy+json, application/vnd.ims.lti.v2.toolproxy.id+json, application/vnd.ims.lti.v2.toolsettings+json, application/vnd.ims.lti.v2.toolsettings.simple+json, application/vnd.informedcontrol.rms+xml, application/vnd.informix-visionary, application/vnd.infotech.project, application/vnd.infotech.project+xml, application/vnd.innopath.wamp.notification, application/vnd.insors.igm, application/vnd.intercon.formnet, application/vnd.intergeo, application/vnd.intertrust.digibox, application/vnd.intertrust.nncp, application/vnd.intu.qbo, application/vnd.intu.qfx, application/vnd.iptc.g2.catalogitem+xml, application/vnd.iptc.g2.conceptitem+xml, application/vnd.iptc.g2.knowledgeitem+xml, application/vnd.iptc.g2.newsitem+xml, application/vnd.iptc.g2.newsmessage+xml, application/vnd.iptc.g2.packageitem+xml, application/vnd.iptc.g2.planningitem+xml, application/vnd.ipunplugged.rcprofile, application/vnd.irepository.package+xml, application/vnd.is-xpr, application/vnd.isac.fcs, application/vnd.jam, application/vnd.japannet-directory-service, application/vnd.japannet-jpnstore-wakeup, application/vnd.japannet-payment-wakeup, application/vnd.japannet-registration, application/vnd.japannet-registration-wakeup, application/vnd.japannet-setstore-wakeup, application/vnd.japannet-verification, application/vnd.japannet-verification-wakeup, application/vnd.jcp.javame.midlet-rms, application/vnd.jisp, application/vnd.joost.joda-archive, application/vnd.jsk.isdn-ngn, application/vnd.kahootz, application/vnd.kde.karbon, application/vnd.kde.kchart, application/vnd.kde.kformula, application/vnd.kde.kivio, application/vnd.kde.kontour, application/vnd.kde.kpresenter, application/vnd.kde.kspread, application/vnd.kde.kword, application/vnd.kenameaapp, application/vnd.kidspiration, application/vnd.kinar, application/vnd.koan, application/vnd.kodak-descriptor, application/vnd.las.las+json, application/vnd.las.las+xml, application/vnd.leap+json, application/vnd.liberty-request+xml, application/vnd.llamagraphics.life-balance.desktop, application/vnd.llamagraphics.life-balance.exchange+xml, application/vnd.lotus-1-2-3, application/vnd.lotus-approach, application/vnd.lotus-freelance, application/vnd.lotus-notes, application/vnd.lotus-organizer, application/vnd.lotus-screencam, application/vnd.lotus-wordpro, application/vnd.macports.portpkg, application/vnd.mapbox-vector-tile, application/vnd.marlin.drm.actiontoken+xml, application/vnd.marlin.drm.conftoken+xml, application/vnd.marlin.drm.license+xml, application/vnd.marlin.drm.mdcf, application/vnd.mason+json, application/vnd.maxmind.maxmind-db, application/vnd.mcd, application/vnd.medcalcdata, application/vnd.mediastation.cdkey, application/vnd.meridian-slingshot, application/vnd.mfer, application/vnd.mfmp, application/vnd.micro+json, application/vnd.micrografx.flo, application/vnd.micrografx.igx, application/vnd.microsoft.portable-executable, application/vnd.microsoft.windows.thumbnail-cache, application/vnd.miele+json, application/vnd.mif, application/vnd.minisoft-hp3000-save, application/vnd.mitsubishi.misty-guard.trustweb, application/vnd.mobius.daf, application/vnd.mobius.dis, application/vnd.mobius.mbk, application/vnd.mobius.mqy, application/vnd.mobius.msl, application/vnd.mobius.plc, application/vnd.mobius.txf, application/vnd.mophun.application, application/vnd.mophun.certificate, application/vnd.motorola.flexsuite, application/vnd.motorola.flexsuite.adsi, application/vnd.motorola.flexsuite.fis, application/vnd.motorola.flexsuite.gotap, application/vnd.motorola.flexsuite.kmr, application/vnd.motorola.flexsuite.ttc, application/vnd.motorola.flexsuite.wem, application/vnd.motorola.iprm, application/vnd.mozilla.xul+xml, application/vnd.ms-3mfdocument, application/vnd.ms-artgalry, application/vnd.ms-asf, application/vnd.ms-cab-compressed, application/vnd.ms-color.iccprofile, application/vnd.ms-excel, application/vnd.ms-excel.addin.macroenabled.12, application/vnd.ms-excel.sheet.binary.macroenabled.12, application/vnd.ms-excel.sheet.macroenabled.12, application/vnd.ms-excel.template.macroenabled.12, application/vnd.ms-fontobject, application/vnd.ms-htmlhelp, application/vnd.ms-ims, application/vnd.ms-lrm, application/vnd.ms-office.activex+xml, application/vnd.ms-officetheme, application/vnd.ms-opentype, application/vnd.ms-outlook, application/vnd.ms-package.obfuscated-opentype, application/vnd.ms-pki.seccat, application/vnd.ms-pki.stl, application/vnd.ms-playready.initiator+xml, application/vnd.ms-powerpoint, application/vnd.ms-powerpoint.addin.macroenabled.12, application/vnd.ms-powerpoint.presentation.macroenabled.12, application/vnd.ms-powerpoint.slide.macroenabled.12, application/vnd.ms-powerpoint.slideshow.macroenabled.12, application/vnd.ms-powerpoint.template.macroenabled.12, application/vnd.ms-printdevicecapabilities+xml, application/vnd.ms-printing.printticket+xml, application/vnd.ms-printschematicket+xml, application/vnd.ms-project, application/vnd.ms-tnef, application/vnd.ms-windows.devicepairing, application/vnd.ms-windows.nwprinting.oob, application/vnd.ms-windows.printerpairing, application/vnd.ms-windows.wsd.oob, application/vnd.ms-wmdrm.lic-chlg-req, application/vnd.ms-wmdrm.lic-resp, application/vnd.ms-wmdrm.meter-chlg-req, application/vnd.ms-wmdrm.meter-resp, application/vnd.ms-word.document.macroenabled.12, application/vnd.ms-word.template.macroenabled.12, application/vnd.ms-works, application/vnd.ms-wpl, application/vnd.ms-xpsdocument, application/vnd.msa-disk-image, application/vnd.mseq, application/vnd.msign, application/vnd.multiad.creator, application/vnd.multiad.creator.cif, application/vnd.music-niff, application/vnd.musician, application/vnd.muvee.style, application/vnd.mynfc, application/vnd.ncd.control, application/vnd.ncd.reference, application/vnd.nearst.inv+json, application/vnd.nervana, application/vnd.netfpx, application/vnd.neurolanguage.nlu, application/vnd.nimn, application/vnd.nintendo.nitro.rom, application/vnd.nintendo.snes.rom, application/vnd.nitf, application/vnd.noblenet-directory, application/vnd.noblenet-sealer, application/vnd.noblenet-web, application/vnd.nokia.catalogs, application/vnd.nokia.conml+wbxml, application/vnd.nokia.conml+xml, application/vnd.nokia.iptv.config+xml, application/vnd.nokia.isds-radio-presets, application/vnd.nokia.landmark+wbxml, application/vnd.nokia.landmark+xml, application/vnd.nokia.landmarkcollection+xml, application/vnd.nokia.n-gage.ac+xml, application/vnd.nokia.n-gage.data, application/vnd.nokia.n-gage.symbian.install, application/vnd.nokia.ncd, application/vnd.nokia.pcd+wbxml, application/vnd.nokia.pcd+xml, application/vnd.nokia.radio-preset, application/vnd.nokia.radio-presets, application/vnd.novadigm.edm, application/vnd.novadigm.edx, application/vnd.novadigm.ext, application/vnd.ntt-local.content-share, application/vnd.ntt-local.file-transfer, application/vnd.ntt-local.ogw_remote-access, application/vnd.ntt-local.sip-ta_remote, application/vnd.ntt-local.sip-ta_tcp_stream, application/vnd.oasis.opendocument.chart, application/vnd.oasis.opendocument.chart-template, application/vnd.oasis.opendocument.database, application/vnd.oasis.opendocument.formula, application/vnd.oasis.opendocument.formula-template, application/vnd.oasis.opendocument.graphics, application/vnd.oasis.opendocument.graphics-template, application/vnd.oasis.opendocument.image, application/vnd.oasis.opendocument.image-template, application/vnd.oasis.opendocument.presentation, application/vnd.oasis.opendocument.presentation-template, application/vnd.oasis.opendocument.spreadsheet, application/vnd.oasis.opendocument.spreadsheet-template, application/vnd.oasis.opendocument.text, application/vnd.oasis.opendocument.text-master, application/vnd.oasis.opendocument.text-template, application/vnd.oasis.opendocument.text-web, application/vnd.obn, application/vnd.ocf+cbor, application/vnd.oftn.l10n+json, application/vnd.oipf.contentaccessdownload+xml, application/vnd.oipf.contentaccessstreaming+xml, application/vnd.oipf.cspg-hexbinary, application/vnd.oipf.dae.svg+xml, application/vnd.oipf.dae.xhtml+xml, application/vnd.oipf.mippvcontrolmessage+xml, application/vnd.oipf.pae.gem, application/vnd.oipf.spdiscovery+xml, application/vnd.oipf.spdlist+xml, application/vnd.oipf.ueprofile+xml, application/vnd.oipf.userprofile+xml, application/vnd.olpc-sugar, application/vnd.oma-scws-config, application/vnd.oma-scws-http-request, application/vnd.oma-scws-http-response, application/vnd.oma.bcast.associated-procedure-parameter+xml, application/vnd.oma.bcast.drm-trigger+xml, application/vnd.oma.bcast.imd+xml, application/vnd.oma.bcast.ltkm, application/vnd.oma.bcast.notification+xml, application/vnd.oma.bcast.provisioningtrigger, application/vnd.oma.bcast.sgboot, application/vnd.oma.bcast.sgdd+xml, application/vnd.oma.bcast.sgdu, application/vnd.oma.bcast.simple-symbol-container, application/vnd.oma.bcast.smartcard-trigger+xml, application/vnd.oma.bcast.sprov+xml, application/vnd.oma.bcast.stkm, application/vnd.oma.cab-address-book+xml, application/vnd.oma.cab-feature-handler+xml, application/vnd.oma.cab-pcc+xml, application/vnd.oma.cab-subs-invite+xml, application/vnd.oma.cab-user-prefs+xml, application/vnd.oma.dcd, application/vnd.oma.dcdc, application/vnd.oma.dd2+xml, application/vnd.oma.drm.risd+xml, application/vnd.oma.group-usage-list+xml, application/vnd.oma.lwm2m+json, application/vnd.oma.lwm2m+tlv, application/vnd.oma.pal+xml, application/vnd.oma.poc.detailed-progress-report+xml, application/vnd.oma.poc.final-report+xml, application/vnd.oma.poc.groups+xml, application/vnd.oma.poc.invocation-descriptor+xml, application/vnd.oma.poc.optimized-progress-report+xml, application/vnd.oma.push, application/vnd.oma.scidm.messages+xml, application/vnd.oma.xcap-directory+xml, application/vnd.omads-email+xml, application/vnd.omads-file+xml, application/vnd.omads-folder+xml, application/vnd.omaloc-supl-init, application/vnd.onepager, application/vnd.onepagertamp, application/vnd.onepagertamx, application/vnd.onepagertat, application/vnd.onepagertatp, application/vnd.onepagertatx, application/vnd.openblox.game+xml, application/vnd.openblox.game-binary, application/vnd.openeye.oeb, application/vnd.openofficeorg.extension, application/vnd.openstreetmap.data+xml, application/vnd.openxmlformats-officedocument.custom-properties+xml, application/vnd.openxmlformats-officedocument.customxmlproperties+xml, application/vnd.openxmlformats-officedocument.drawing+xml, application/vnd.openxmlformats-officedocument.drawingml.chart+xml, application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml, application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml, application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml, application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml, application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml, application/vnd.openxmlformats-officedocument.extended-properties+xml, application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml, application/vnd.openxmlformats-officedocument.presentationml.comments+xml, application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml, application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml, application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml, application/vnd.openxmlformats-officedocument.presentationml.presentation, application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml, application/vnd.openxmlformats-officedocument.presentationml.presprops+xml, application/vnd.openxmlformats-officedocument.presentationml.slide, application/vnd.openxmlformats-officedocument.presentationml.slide+xml, application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml, application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml, application/vnd.openxmlformats-officedocument.presentationml.slideshow, application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml, application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml, application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml, application/vnd.openxmlformats-officedocument.presentationml.tags+xml, application/vnd.openxmlformats-officedocument.presentationml.template, application/vnd.openxmlformats-officedocument.presentationml.template.main+xml, application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.template, application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml, application/vnd.openxmlformats-officedocument.theme+xml, application/vnd.openxmlformats-officedocument.themeoverride+xml, application/vnd.openxmlformats-officedocument.vmldrawing, application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.template, application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml, application/vnd.openxmlformats-package.core-properties+xml, application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml, application/vnd.openxmlformats-package.relationships+xml, application/vnd.oracle.resource+json, application/vnd.orange.indata, application/vnd.osa.netdeploy, application/vnd.osgeo.mapguide.package, application/vnd.osgi.bundle, application/vnd.osgi.dp, application/vnd.osgi.subsystem, application/vnd.otps.ct-kip+xml, application/vnd.oxli.countgraph, application/vnd.pagerduty+json, application/vnd.palm, application/vnd.panoply, application/vnd.paos.xml, application/vnd.patentdive, application/vnd.patientecommsdoc, application/vnd.pawaafile, application/vnd.pcos, application/vnd.pg.format, application/vnd.pg.osasli, application/vnd.piaccess.application-licence, application/vnd.picsel, application/vnd.pmi.widget, application/vnd.poc.group-advertisement+xml, application/vnd.pocketlearn, application/vnd.powerbuilder6, application/vnd.powerbuilder6-s, application/vnd.powerbuilder7, application/vnd.powerbuilder7-s, application/vnd.powerbuilder75, application/vnd.powerbuilder75-s, application/vnd.preminet, application/vnd.previewsystems.box, application/vnd.proteus.magazine, application/vnd.psfs, application/vnd.publishare-delta-tree, application/vnd.pvi.ptid1, application/vnd.pwg-multiplexed, application/vnd.pwg-xhtml-print+xml, application/vnd.qualcomm.brew-app-res, application/vnd.quarantainenet, application/vnd.quark.quarkxpress, application/vnd.quobject-quoxdocument, application/vnd.radisys.moml+xml, application/vnd.radisys.msml+xml, application/vnd.radisys.msml-audit+xml, application/vnd.radisys.msml-audit-conf+xml, application/vnd.radisys.msml-audit-conn+xml, application/vnd.radisys.msml-audit-dialog+xml, application/vnd.radisys.msml-audit-stream+xml, application/vnd.radisys.msml-conf+xml, application/vnd.radisys.msml-dialog+xml, application/vnd.radisys.msml-dialog-base+xml, application/vnd.radisys.msml-dialog-fax-detect+xml, application/vnd.radisys.msml-dialog-fax-sendrecv+xml, application/vnd.radisys.msml-dialog-group+xml, application/vnd.radisys.msml-dialog-speech+xml, application/vnd.radisys.msml-dialog-transform+xml, application/vnd.rainstor.data, application/vnd.rapid, application/vnd.rar, application/vnd.realvnc.bed, application/vnd.recordare.musicxml, application/vnd.recordare.musicxml+xml, application/vnd.renlearn.rlprint, application/vnd.restful+json, application/vnd.rig.cryptonote, application/vnd.rim.cod, application/vnd.rn-realmedia, application/vnd.rn-realmedia-vbr, application/vnd.route66.link66+xml, application/vnd.rs-274x, application/vnd.ruckus.download, application/vnd.s3sms, application/vnd.sailingtracker.track, application/vnd.sbm.cid, application/vnd.sbm.mid2, application/vnd.scribus, application/vnd.sealed.3df, application/vnd.sealed.csf, application/vnd.sealed.doc, application/vnd.sealed.eml, application/vnd.sealed.mht, application/vnd.sealed.net, application/vnd.sealed.ppt, application/vnd.sealed.tiff, application/vnd.sealed.xls, application/vnd.sealedmedia.softseal.html, application/vnd.sealedmedia.softseal.pdf, application/vnd.seemail, application/vnd.sema, application/vnd.semd, application/vnd.semf, application/vnd.shana.informed.formdata, application/vnd.shana.informed.formtemplate, application/vnd.shana.informed.interchange, application/vnd.shana.informed.package, application/vnd.shootproof+json, application/vnd.sigrok.session, application/vnd.simtech-mindmapper, application/vnd.siren+json, application/vnd.smaf, application/vnd.smart.notebook, application/vnd.smart.teacher, application/vnd.software602.filler.form+xml, application/vnd.software602.filler.form-xml-zip, application/vnd.solent.sdkm+xml, application/vnd.spotfire.dxp, application/vnd.spotfire.sfs, application/vnd.sqlite3, application/vnd.sss-cod, application/vnd.sss-dtf, application/vnd.sss-ntf, application/vnd.stardivision.calc, application/vnd.stardivision.draw, application/vnd.stardivision.impress, application/vnd.stardivision.math, application/vnd.stardivision.writer, application/vnd.stardivision.writer-global, application/vnd.stepmania.package, application/vnd.stepmania.stepchart, application/vnd.street-stream, application/vnd.sun.wadl+xml, application/vnd.sun.xml.calc, application/vnd.sun.xml.calc.template, application/vnd.sun.xml.draw, application/vnd.sun.xml.draw.template, application/vnd.sun.xml.impress, application/vnd.sun.xml.impress.template, application/vnd.sun.xml.math, application/vnd.sun.xml.writer, application/vnd.sun.xml.writer.global, application/vnd.sun.xml.writer.template, application/vnd.sus-calendar, application/vnd.svd, application/vnd.swiftview-ics, application/vnd.symbian.install, application/vnd.syncml+xml, application/vnd.syncml.dm+wbxml, application/vnd.syncml.dm+xml, application/vnd.syncml.dm.notification, application/vnd.syncml.dmddf+wbxml, application/vnd.syncml.dmddf+xml, application/vnd.syncml.dmtnds+wbxml, application/vnd.syncml.dmtnds+xml, application/vnd.syncml.ds.notification, application/vnd.tableschema+json, application/vnd.tao.intent-module-archive, application/vnd.tcpdump.pcap, application/vnd.think-cell.ppttc+json, application/vnd.tmd.mediaflex.api+xml, application/vnd.tml, application/vnd.tmobile-livetv, application/vnd.tri.onesource, application/vnd.trid.tpt, application/vnd.triscape.mxs, application/vnd.trueapp, application/vnd.truedoc, application/vnd.ubisoft.webplayer, application/vnd.ufdl, application/vnd.uiq.theme, application/vnd.umajin, application/vnd.unity, application/vnd.uoml+xml, application/vnd.uplanet.alert, application/vnd.uplanet.alert-wbxml, application/vnd.uplanet.bearer-choice, application/vnd.uplanet.bearer-choice-wbxml, application/vnd.uplanet.cacheop, application/vnd.uplanet.cacheop-wbxml, application/vnd.uplanet.channel, application/vnd.uplanet.channel-wbxml, application/vnd.uplanet.list, application/vnd.uplanet.list-wbxml, application/vnd.uplanet.listcmd, application/vnd.uplanet.listcmd-wbxml, application/vnd.uplanet.signal, application/vnd.uri-map, application/vnd.valve.source.material, application/vnd.vcx, application/vnd.vd-study, application/vnd.vectorworks, application/vnd.vel+json, application/vnd.verimatrix.vcas, application/vnd.veryant.thin, application/vnd.vidsoft.vidconference, application/vnd.visio, application/vnd.visionary, application/vnd.vividence.scriptfile, application/vnd.vsf, application/vnd.wap.sic, application/vnd.wap.slc, application/vnd.wap.wbxml, application/vnd.wap.wmlc, application/vnd.wap.wmlscriptc, application/vnd.webturbo, application/vnd.wfa.p2p, application/vnd.wfa.wsc, application/vnd.windows.devicepairing, application/vnd.wmc, application/vnd.wmf.bootstrap, application/vnd.wolfram.mathematica, application/vnd.wolfram.mathematica.package, application/vnd.wolfram.player, application/vnd.wordperfect, application/vnd.wqd, application/vnd.wrq-hp3000-labelled, application/vnd.wt.stf, application/vnd.wv.csp+wbxml, application/vnd.wv.csp+xml, application/vnd.wv.ssp+xml, application/vnd.xacml+json, application/vnd.xara, application/vnd.xfdl, application/vnd.xfdl.webform, application/vnd.xmi+xml, application/vnd.xmpie.cpkg, application/vnd.xmpie.dpkg, application/vnd.xmpie.plan, application/vnd.xmpie.ppkg, application/vnd.xmpie.xlim, application/vnd.yamaha.hv-dic, application/vnd.yamaha.hv-script, application/vnd.yamaha.hv-voice, application/vnd.yamaha.openscoreformat, application/vnd.yamaha.openscoreformat.osfpvg+xml, application/vnd.yamaha.remote-setup, application/vnd.yamaha.smaf-audio, application/vnd.yamaha.smaf-phrase, application/vnd.yamaha.through-ngn, application/vnd.yamaha.tunnel-udpencap, application/vnd.yaoweme, application/vnd.yellowriver-custom-menu, application/vnd.youtube.yt, application/vnd.zul, application/vnd.zzazz.deck+xml, application/voicexml+xml, application/voucher-cms+json, application/vq-rtcpxr, application/wasm, application/watcherinfo+xml, application/webpush-options+json, application/whoispp-query, application/whoispp-response, application/widget, application/winhlp, application/wita, application/wordperfect5.1, application/wsdl+xml, application/wspolicy+xml, application/x-7z-compressed, application/x-abiword, application/x-ace-compressed, application/x-amf, application/x-apple-diskimage, application/x-arj, application/x-authorware-bin, application/x-authorware-map, application/x-authorware-seg, application/x-bcpio, application/x-bdoc, application/x-bittorrent, application/x-blorb, application/x-bzip, application/x-bzip2, application/x-cbr, application/x-cdlink, application/x-cfs-compressed, application/x-chat, application/x-chess-pgn, application/x-chrome-extension, application/x-cocoa, application/x-compress, application/x-conference, application/x-cpio, application/x-csh, application/x-deb, application/x-debian-package, application/x-dgc-compressed, application/x-director, application/x-doom, application/x-dtbncx+xml, application/x-dtbook+xml, application/x-dtbresource+xml, application/x-dvi, application/x-envoy, application/x-eva, application/x-font-bdf, application/x-font-dos, application/x-font-framemaker, application/x-font-ghostscript, application/x-font-libgrx, application/x-font-linux-psf, application/x-font-pcf, application/x-font-snf, application/x-font-speedo, application/x-font-sunos-news, application/x-font-type1, application/x-font-vfont, application/x-freearc, application/x-futuresplash, application/x-gca-compressed, application/x-glulx, application/x-gnumeric, application/x-gramps-xml, application/x-gtar, application/x-gzip, application/x-hdf, application/x-httpd-php, application/x-install-instructions, application/x-iso9660-image, application/x-java-archive-diff, application/x-java-jnlp-file, application/x-javascript, application/x-latex, application/x-lua-bytecode, application/x-lzh-compressed, application/x-makeself, application/x-mie, application/x-mobipocket-ebook, application/x-mpegurl, application/x-ms-application, application/x-ms-shortcut, application/x-ms-wmd, application/x-ms-wmz, application/x-ms-xbap, application/x-msaccess, application/x-msbinder, application/x-mscardfile, application/x-msclip, application/x-msdos-program, application/x-msdownload, application/x-msmediaview, application/x-msmetafile, application/x-msmoney, application/x-mspublisher, application/x-msschedule, application/x-msterminal, application/x-mswrite, application/x-netcdf, application/x-ns-proxy-autoconfig, application/x-nzb, application/x-perl, application/x-pilot, application/x-pkcs12, application/x-pkcs7-certificates, application/x-pkcs7-certreqresp, application/x-rar-compressed, application/x-redhat-package-manager, application/x-research-info-systems, application/x-sea, application/x-sh, application/x-shar, application/x-shockwave-flash, application/x-silverlight-app, application/x-sql, application/x-stuffit, application/x-stuffitx, application/x-subrip, application/x-sv4cpio, application/x-sv4crc, application/x-t3vm-image, application/x-tads, application/x-tar, application/x-tcl, application/x-tex, application/x-tex-tfm, application/x-texinfo, application/x-tgif, application/x-ustar, application/x-virtualbox-hdd, application/x-virtualbox-ova, application/x-virtualbox-ovf, application/x-virtualbox-vbox, application/x-virtualbox-vbox-extpack, application/x-virtualbox-vdi, application/x-virtualbox-vhd, application/x-virtualbox-vmdk, application/x-wais-source, application/x-web-app-manifest+json, application/x-www-form-urlencoded, application/x-x509-ca-cert, application/x-xfig, application/x-xliff+xml, application/x-xpinstall, application/x-xz, application/x-zmachine, application/x400-bp, application/xacml+xml, application/xaml+xml, application/xcap-att+xml, application/xcap-caps+xml, application/xcap-diff+xml, application/xcap-el+xml, application/xcap-error+xml, application/xcap-ns+xml, application/xcon-conference-info+xml, application/xcon-conference-info-diff+xml, application/xenc+xml, application/xhtml+xml, application/xhtml-voice+xml, application/xliff+xml, application/xml, application/xml-dtd, application/xml-external-parsed-entity, application/xml-patch+xml, application/xmpp+xml, application/xop+xml, application/xproc+xml, application/xslt+xml, application/xspf+xml, application/xv+xml, application/yang, application/yang-data+json, application/yang-data+xml, application/yang-patch+json, application/yang-patch+xml, application/yin+xml, application/zip, application/zlib, application/zstd, audio/1d-interleaved-parityfec, audio/32kadpcm, audio/3gpp, audio/3gpp2, audio/aac, audio/ac3, audio/adpcm, audio/amr, audio/amr-wb, audio/amr-wb+, audio/aptx, audio/asc, audio/atrac-advanced-lossless, audio/atrac-x, audio/atrac3, audio/basic, audio/bv16, audio/bv32, audio/clearmode, audio/cn, audio/dat12, audio/dls, audio/dsr-es201108, audio/dsr-es202050, audio/dsr-es202211, audio/dsr-es202212, audio/dv, audio/dvi4, audio/eac3, audio/encaprtp, audio/evrc, audio/evrc-qcp, audio/evrc0, audio/evrc1, audio/evrcb, audio/evrcb0, audio/evrcb1, audio/evrcnw, audio/evrcnw0, audio/evrcnw1, audio/evrcwb, audio/evrcwb0, audio/evrcwb1, audio/evs, audio/fwdred, audio/g711-0, audio/g719, audio/g722, audio/g7221, audio/g723, audio/g726-16, audio/g726-24, audio/g726-32, audio/g726-40, audio/g728, audio/g729, audio/g7291, audio/g729d, audio/g729e, audio/gsm, audio/gsm-efr, audio/gsm-hr-08, audio/ilbc, audio/ip-mr_v2.5, audio/isac, audio/l16, audio/l20, audio/l24, audio/l8, audio/lpc, audio/melp, audio/melp1200, audio/melp2400, audio/melp600, audio/midi, audio/mobile-xmf, audio/mp3, audio/mp4, audio/mp4a-latm, audio/mpa, audio/mpa-robust, audio/mpeg, audio/mpeg4-generic, audio/musepack, audio/ogg, audio/opus, audio/parityfec, audio/pcma, audio/pcma-wb, audio/pcmu, audio/pcmu-wb, audio/prs.sid, audio/qcelp, audio/raptorfec, audio/red, audio/rtp-enc-aescm128, audio/rtp-midi, audio/rtploopback, audio/rtx, audio/s3m, audio/silk, audio/smv, audio/smv-qcp, audio/smv0, audio/sp-midi, audio/speex, audio/t140c, audio/t38, audio/telephone-event, audio/tetra_acelp, audio/tone, audio/uemclip, audio/ulpfec, audio/usac, audio/vdvi, audio/vmr-wb, audio/vnd.3gpp.iufp, audio/vnd.4sb, audio/vnd.audiokoz, audio/vnd.celp, audio/vnd.cisco.nse, audio/vnd.cmles.radio-events, audio/vnd.cns.anp1, audio/vnd.cns.inf1, audio/vnd.dece.audio, audio/vnd.digital-winds, audio/vnd.dlna.adts, audio/vnd.dolby.heaac.1, audio/vnd.dolby.heaac.2, audio/vnd.dolby.mlp, audio/vnd.dolby.mps, audio/vnd.dolby.pl2, audio/vnd.dolby.pl2x, audio/vnd.dolby.pl2z, audio/vnd.dolby.pulse.1, audio/vnd.dra, audio/vnd.dts, audio/vnd.dts.hd, audio/vnd.dts.uhd, audio/vnd.dvb.file, audio/vnd.everad.plj, audio/vnd.hns.audio, audio/vnd.lucent.voice, audio/vnd.ms-playready.media.pya, audio/vnd.nokia.mobile-xmf, audio/vnd.nortel.vbk, audio/vnd.nuera.ecelp4800, audio/vnd.nuera.ecelp7470, audio/vnd.nuera.ecelp9600, audio/vnd.octel.sbc, audio/vnd.presonus.multitrack, audio/vnd.qcelp, audio/vnd.rhetorex.32kadpcm, audio/vnd.rip, audio/vnd.rn-realaudio, audio/vnd.sealedmedia.softseal.mpeg, audio/vnd.vmx.cvsd, audio/vnd.wave, audio/vorbis, audio/vorbis-config, audio/wav, audio/wave, audio/webm, audio/x-aac, audio/x-aiff, audio/x-caf, audio/x-flac, audio/x-m4a, audio/x-matroska, audio/x-mpegurl, audio/x-ms-wax, audio/x-ms-wma, audio/x-pn-realaudio, audio/x-pn-realaudio-plugin, audio/x-realaudio, audio/x-tta, audio/x-wav, audio/xm, chemical/x-cdx, chemical/x-cif, chemical/x-cmdf, chemical/x-cml, chemical/x-csml, chemical/x-pdb, chemical/x-xyz, font/collection, font/otf, font/sfnt, font/ttf, font/woff, font/woff2, image/aces, image/apng, image/avci, image/avcs, image/bmp, image/cgm, image/dicom-rle, image/emf, image/fits, image/g3fax, image/gif, image/heic, image/heic-sequence, image/heif, image/heif-sequence, image/ief, image/jls, image/jp2, image/jpeg, image/jpm, image/jpx, image/jxr, image/ktx, image/naplps, image/pjpeg, image/png, image/prs.btif, image/prs.pti, image/pwg-raster, image/sgi, image/svg+xml, image/t38, image/tiff, image/tiff-fx, image/vnd.adobe.photoshop, image/vnd.airzip.accelerator.azv, image/vnd.cns.inf2, image/vnd.dece.graphic, image/vnd.djvu, image/vnd.dvb.subtitle, image/vnd.dwg, image/vnd.dxf, image/vnd.fastbidsheet, image/vnd.fpx, image/vnd.fst, image/vnd.fujixerox.edmics-mmr, image/vnd.fujixerox.edmics-rlc, image/vnd.globalgraphics.pgb, image/vnd.microsoft.icon, image/vnd.mix, image/vnd.mozilla.apng, image/vnd.ms-modi, image/vnd.ms-photo, image/vnd.net-fpx, image/vnd.radiance, image/vnd.sealed.png, image/vnd.sealedmedia.softseal.gif, image/vnd.sealedmedia.softseal.jpg, image/vnd.svf, image/vnd.tencent.tap, image/vnd.valve.source.texture, image/vnd.wap.wbmp, image/vnd.xiff, image/vnd.zbrush.pcx, image/webp, image/wmf, image/x-3ds, image/x-cmu-raster, image/x-cmx, image/x-freehand, image/x-icon, image/x-jng, image/x-mrsid-image, image/x-ms-bmp, image/x-pcx, image/x-pict, image/x-portable-anymap, image/x-portable-bitmap, image/x-portable-graymap, image/x-portable-pixmap, image/x-rgb, image/x-tga, image/x-xbitmap, image/x-xcf, image/x-xpixmap, image/x-xwindowdump, message/cpim, message/delivery-status, message/disposition-notification, message/external-body, message/feedback-report, message/global, message/global-delivery-status, message/global-disposition-notification, message/global-headers, message/http, message/imdn+xml, message/news, message/partial, message/rfc822, message/s-http, message/sip, message/sipfrag, message/tracking-status, message/vnd.si.simp, message/vnd.wfa.wsc, model/3mf, model/gltf+json, model/gltf-binary, model/iges, model/mesh, model/stl, model/vnd.collada+xml, model/vnd.dwf, model/vnd.flatland.3dml, model/vnd.gdl, model/vnd.gs-gdl, model/vnd.gs.gdl, model/vnd.gtw, model/vnd.moml+xml, model/vnd.mts, model/vnd.opengex, model/vnd.parasolid.transmit.binary, model/vnd.parasolid.transmit.text, model/vnd.rosette.annotated-data-model, model/vnd.usdz+zip, model/vnd.valve.source.compiled-map, model/vnd.vtu, model/vrml, model/x3d+binary, model/x3d+fastinfoset, model/x3d+vrml, model/x3d+xml, model/x3d-vrml, multipart/alternative, multipart/appledouble, multipart/byteranges, multipart/digest, multipart/encrypted, multipart/form-data, multipart/header-set, multipart/mixed, multipart/multilingual, multipart/parallel, multipart/related, multipart/report, multipart/signed, multipart/vnd.bint.med-plus, multipart/voice-message, multipart/x-mixed-replace, text/1d-interleaved-parityfec, text/cache-manifest, text/calendar, text/calender, text/cmd, text/coffeescript, text/css, text/csv, text/csv-schema, text/directory, text/dns, text/ecmascript, text/encaprtp, text/enriched, text/fwdred, text/grammar-ref-list, text/html, text/jade, text/javascript, text/jcr-cnd, text/jsx, text/less, text/markdown, text/mathml, text/mdx, text/mizar, text/n3, text/parameters, text/parityfec, text/plain, text/provenance-notation, text/prs.fallenstein.rst, text/prs.lines.tag, text/prs.prop.logic, text/raptorfec, text/red, text/rfc822-headers, text/richtext, text/rtf, text/rtp-enc-aescm128, text/rtploopback, text/rtx, text/sgml, text/shex, text/slim, text/strings, text/stylus, text/t140, text/tab-separated-values, text/troff, text/turtle, text/ulpfec, text/uri-list, text/vcard, text/vnd.a, text/vnd.abc, text/vnd.ascii-art, text/vnd.curl, text/vnd.curl.dcurl, text/vnd.curl.mcurl, text/vnd.curl.scurl, text/vnd.debian.copyright, text/vnd.dmclientscript, text/vnd.dvb.subtitle, text/vnd.esmertec.theme-descriptor, text/vnd.fly, text/vnd.fmi.flexstor, text/vnd.gml, text/vnd.graphviz, text/vnd.hgl, text/vnd.in3d.3dml, text/vnd.in3d.spot, text/vnd.iptc.newsml, text/vnd.iptc.nitf, text/vnd.latex-z, text/vnd.motorola.reflex, text/vnd.ms-mediapackage, text/vnd.net2phone.commcenter.command, text/vnd.radisys.msml-basic-layout, text/vnd.senx.warpscript, text/vnd.si.uricatalogue, text/vnd.sun.j2me.app-descriptor, text/vnd.trolltech.linguist, text/vnd.wap.si, text/vnd.wap.sl, text/vnd.wap.wml, text/vnd.wap.wmlscript, text/vtt, text/x-asm, text/x-c, text/x-component, text/x-fortran, text/x-gwt-rpc, text/x-handlebars-template, text/x-java-source, text/x-jquery-tmpl, text/x-lua, text/x-markdown, text/x-nfo, text/x-opml, text/x-org, text/x-pascal, text/x-processing, text/x-sass, text/x-scss, text/x-setext, text/x-sfv, text/x-suse-ymp, text/x-uuencode, text/x-vcalendar, text/x-vcard, text/xml, text/xml-external-parsed-entity, text/yaml, video/1d-interleaved-parityfec, video/3gpp, video/3gpp-tt, video/3gpp2, video/bmpeg, video/bt656, video/celb, video/dv, video/encaprtp, video/h261, video/h263, video/h263-1998, video/h263-2000, video/h264, video/h264-rcdo, video/h264-svc, video/h265, video/iso.segment, video/jpeg, video/jpeg2000, video/jpm, video/mj2, video/mp1s, video/mp2p, video/mp2t, video/mp4, video/mp4v-es, video/mpeg, video/mpeg4-generic, video/mpv, video/nv, video/ogg, video/parityfec, video/pointer, video/quicktime, video/raptorfec, video/raw, video/rtp-enc-aescm128, video/rtploopback, video/rtx, video/smpte291, video/smpte292m, video/ulpfec, video/vc1, video/vc2, video/vnd.cctv, video/vnd.dece.hd, video/vnd.dece.mobile, video/vnd.dece.mp4, video/vnd.dece.pd, video/vnd.dece.sd, video/vnd.dece.video, video/vnd.directv.mpeg, video/vnd.directv.mpeg-tts, video/vnd.dlna.mpeg-tts, video/vnd.dvb.file, video/vnd.fvt, video/vnd.hns.video, video/vnd.iptvforum.1dparityfec-1010, video/vnd.iptvforum.1dparityfec-2005, video/vnd.iptvforum.2dparityfec-1010, video/vnd.iptvforum.2dparityfec-2005, video/vnd.iptvforum.ttsavc, video/vnd.iptvforum.ttsmpeg2, video/vnd.motorola.video, video/vnd.motorola.videop, video/vnd.mpegurl, video/vnd.ms-playready.media.pyv, video/vnd.nokia.interleaved-multimedia, video/vnd.nokia.mp4vr, video/vnd.nokia.videovoip, video/vnd.objectvideo, video/vnd.radgamettools.bink, video/vnd.radgamettools.smacker, video/vnd.sealed.mpeg1, video/vnd.sealed.mpeg4, video/vnd.sealed.swf, video/vnd.sealedmedia.softseal.mov, video/vnd.uvvu.mp4, video/vnd.vivo, video/vp8, video/webm, video/x-f4v, video/x-fli, video/x-flv, video/x-m4v, video/x-matroska, video/x-mng, video/x-ms-asf, video/x-ms-vob, video/x-ms-wm, video/x-ms-wmv, video/x-ms-wmx, video/x-ms-wvx, video/x-msvideo, video/x-sgi-movie, video/x-smv, x-conference/x-cooltalk, x-shader/x-fragment, x-shader/x-vertex, default */
/***/ (function(module) {

module.exports = {"application/1d-interleaved-parityfec":{"source":"iana"},"application/3gpdash-qoe-report+xml":{"source":"iana","compressible":true},"application/3gpp-ims+xml":{"source":"iana","compressible":true},"application/a2l":{"source":"iana"},"application/activemessage":{"source":"iana"},"application/activity+json":{"source":"iana","compressible":true},"application/alto-costmap+json":{"source":"iana","compressible":true},"application/alto-costmapfilter+json":{"source":"iana","compressible":true},"application/alto-directory+json":{"source":"iana","compressible":true},"application/alto-endpointcost+json":{"source":"iana","compressible":true},"application/alto-endpointcostparams+json":{"source":"iana","compressible":true},"application/alto-endpointprop+json":{"source":"iana","compressible":true},"application/alto-endpointpropparams+json":{"source":"iana","compressible":true},"application/alto-error+json":{"source":"iana","compressible":true},"application/alto-networkmap+json":{"source":"iana","compressible":true},"application/alto-networkmapfilter+json":{"source":"iana","compressible":true},"application/aml":{"source":"iana"},"application/andrew-inset":{"source":"iana","extensions":["ez"]},"application/applefile":{"source":"iana"},"application/applixware":{"source":"apache","extensions":["aw"]},"application/atf":{"source":"iana"},"application/atfx":{"source":"iana"},"application/atom+xml":{"source":"iana","compressible":true,"extensions":["atom"]},"application/atomcat+xml":{"source":"iana","compressible":true,"extensions":["atomcat"]},"application/atomdeleted+xml":{"source":"iana","compressible":true},"application/atomicmail":{"source":"iana"},"application/atomsvc+xml":{"source":"iana","compressible":true,"extensions":["atomsvc"]},"application/atsc-dwd+xml":{"source":"iana","compressible":true},"application/atsc-held+xml":{"source":"iana","compressible":true},"application/atsc-rsat+xml":{"source":"iana","compressible":true},"application/atxml":{"source":"iana"},"application/auth-policy+xml":{"source":"iana","compressible":true},"application/bacnet-xdd+zip":{"source":"iana","compressible":false},"application/batch-smtp":{"source":"iana"},"application/bdoc":{"compressible":false,"extensions":["bdoc"]},"application/beep+xml":{"source":"iana","compressible":true},"application/calendar+json":{"source":"iana","compressible":true},"application/calendar+xml":{"source":"iana","compressible":true},"application/call-completion":{"source":"iana"},"application/cals-1840":{"source":"iana"},"application/cbor":{"source":"iana"},"application/cccex":{"source":"iana"},"application/ccmp+xml":{"source":"iana","compressible":true},"application/ccxml+xml":{"source":"iana","compressible":true,"extensions":["ccxml"]},"application/cdfx+xml":{"source":"iana","compressible":true},"application/cdmi-capability":{"source":"iana","extensions":["cdmia"]},"application/cdmi-container":{"source":"iana","extensions":["cdmic"]},"application/cdmi-domain":{"source":"iana","extensions":["cdmid"]},"application/cdmi-object":{"source":"iana","extensions":["cdmio"]},"application/cdmi-queue":{"source":"iana","extensions":["cdmiq"]},"application/cdni":{"source":"iana"},"application/cea":{"source":"iana"},"application/cea-2018+xml":{"source":"iana","compressible":true},"application/cellml+xml":{"source":"iana","compressible":true},"application/cfw":{"source":"iana"},"application/clue_info+xml":{"source":"iana","compressible":true},"application/cms":{"source":"iana"},"application/cnrp+xml":{"source":"iana","compressible":true},"application/coap-group+json":{"source":"iana","compressible":true},"application/coap-payload":{"source":"iana"},"application/commonground":{"source":"iana"},"application/conference-info+xml":{"source":"iana","compressible":true},"application/cose":{"source":"iana"},"application/cose-key":{"source":"iana"},"application/cose-key-set":{"source":"iana"},"application/cpl+xml":{"source":"iana","compressible":true},"application/csrattrs":{"source":"iana"},"application/csta+xml":{"source":"iana","compressible":true},"application/cstadata+xml":{"source":"iana","compressible":true},"application/csvm+json":{"source":"iana","compressible":true},"application/cu-seeme":{"source":"apache","extensions":["cu"]},"application/cwt":{"source":"iana"},"application/cybercash":{"source":"iana"},"application/dart":{"compressible":true},"application/dash+xml":{"source":"iana","compressible":true,"extensions":["mpd"]},"application/dashdelta":{"source":"iana"},"application/davmount+xml":{"source":"iana","compressible":true,"extensions":["davmount"]},"application/dca-rft":{"source":"iana"},"application/dcd":{"source":"iana"},"application/dec-dx":{"source":"iana"},"application/dialog-info+xml":{"source":"iana","compressible":true},"application/dicom":{"source":"iana"},"application/dicom+json":{"source":"iana","compressible":true},"application/dicom+xml":{"source":"iana","compressible":true},"application/dii":{"source":"iana"},"application/dit":{"source":"iana"},"application/dns":{"source":"iana"},"application/dns+json":{"source":"iana","compressible":true},"application/dns-message":{"source":"iana"},"application/docbook+xml":{"source":"apache","compressible":true,"extensions":["dbk"]},"application/dskpp+xml":{"source":"iana","compressible":true},"application/dssc+der":{"source":"iana","extensions":["dssc"]},"application/dssc+xml":{"source":"iana","compressible":true,"extensions":["xdssc"]},"application/dvcs":{"source":"iana"},"application/ecmascript":{"source":"iana","compressible":true,"extensions":["ecma","es"]},"application/edi-consent":{"source":"iana"},"application/edi-x12":{"source":"iana","compressible":false},"application/edifact":{"source":"iana","compressible":false},"application/efi":{"source":"iana"},"application/emergencycalldata.comment+xml":{"source":"iana","compressible":true},"application/emergencycalldata.control+xml":{"source":"iana","compressible":true},"application/emergencycalldata.deviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.ecall.msd":{"source":"iana"},"application/emergencycalldata.providerinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.serviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.subscriberinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.veds+xml":{"source":"iana","compressible":true},"application/emma+xml":{"source":"iana","compressible":true,"extensions":["emma"]},"application/emotionml+xml":{"source":"iana","compressible":true},"application/encaprtp":{"source":"iana"},"application/epp+xml":{"source":"iana","compressible":true},"application/epub+zip":{"source":"iana","compressible":false,"extensions":["epub"]},"application/eshop":{"source":"iana"},"application/exi":{"source":"iana","extensions":["exi"]},"application/expect-ct-report+json":{"source":"iana","compressible":true},"application/fastinfoset":{"source":"iana"},"application/fastsoap":{"source":"iana"},"application/fdt+xml":{"source":"iana","compressible":true},"application/fhir+json":{"source":"iana","compressible":true},"application/fhir+xml":{"source":"iana","compressible":true},"application/fido.trusted-apps+json":{"compressible":true},"application/fits":{"source":"iana"},"application/font-sfnt":{"source":"iana"},"application/font-tdpfr":{"source":"iana","extensions":["pfr"]},"application/font-woff":{"source":"iana","compressible":false},"application/framework-attributes+xml":{"source":"iana","compressible":true},"application/geo+json":{"source":"iana","compressible":true,"extensions":["geojson"]},"application/geo+json-seq":{"source":"iana"},"application/geopackage+sqlite3":{"source":"iana"},"application/geoxacml+xml":{"source":"iana","compressible":true},"application/gltf-buffer":{"source":"iana"},"application/gml+xml":{"source":"iana","compressible":true,"extensions":["gml"]},"application/gpx+xml":{"source":"apache","compressible":true,"extensions":["gpx"]},"application/gxf":{"source":"apache","extensions":["gxf"]},"application/gzip":{"source":"iana","compressible":false,"extensions":["gz"]},"application/h224":{"source":"iana"},"application/held+xml":{"source":"iana","compressible":true},"application/hjson":{"extensions":["hjson"]},"application/http":{"source":"iana"},"application/hyperstudio":{"source":"iana","extensions":["stk"]},"application/ibe-key-request+xml":{"source":"iana","compressible":true},"application/ibe-pkg-reply+xml":{"source":"iana","compressible":true},"application/ibe-pp-data":{"source":"iana"},"application/iges":{"source":"iana"},"application/im-iscomposing+xml":{"source":"iana","compressible":true},"application/index":{"source":"iana"},"application/index.cmd":{"source":"iana"},"application/index.obj":{"source":"iana"},"application/index.response":{"source":"iana"},"application/index.vnd":{"source":"iana"},"application/inkml+xml":{"source":"iana","compressible":true,"extensions":["ink","inkml"]},"application/iotp":{"source":"iana"},"application/ipfix":{"source":"iana","extensions":["ipfix"]},"application/ipp":{"source":"iana"},"application/isup":{"source":"iana"},"application/its+xml":{"source":"iana","compressible":true},"application/java-archive":{"source":"apache","compressible":false,"extensions":["jar","war","ear"]},"application/java-serialized-object":{"source":"apache","compressible":false,"extensions":["ser"]},"application/java-vm":{"source":"apache","compressible":false,"extensions":["class"]},"application/javascript":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["js","mjs"]},"application/jf2feed+json":{"source":"iana","compressible":true},"application/jose":{"source":"iana"},"application/jose+json":{"source":"iana","compressible":true},"application/jrd+json":{"source":"iana","compressible":true},"application/json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["json","map"]},"application/json-patch+json":{"source":"iana","compressible":true},"application/json-seq":{"source":"iana"},"application/json5":{"extensions":["json5"]},"application/jsonml+json":{"source":"apache","compressible":true,"extensions":["jsonml"]},"application/jwk+json":{"source":"iana","compressible":true},"application/jwk-set+json":{"source":"iana","compressible":true},"application/jwt":{"source":"iana"},"application/kpml-request+xml":{"source":"iana","compressible":true},"application/kpml-response+xml":{"source":"iana","compressible":true},"application/ld+json":{"source":"iana","compressible":true,"extensions":["jsonld"]},"application/lgr+xml":{"source":"iana","compressible":true},"application/link-format":{"source":"iana"},"application/load-control+xml":{"source":"iana","compressible":true},"application/lost+xml":{"source":"iana","compressible":true,"extensions":["lostxml"]},"application/lostsync+xml":{"source":"iana","compressible":true},"application/lxf":{"source":"iana"},"application/mac-binhex40":{"source":"iana","extensions":["hqx"]},"application/mac-compactpro":{"source":"apache","extensions":["cpt"]},"application/macwriteii":{"source":"iana"},"application/mads+xml":{"source":"iana","compressible":true,"extensions":["mads"]},"application/manifest+json":{"charset":"UTF-8","compressible":true,"extensions":["webmanifest"]},"application/marc":{"source":"iana","extensions":["mrc"]},"application/marcxml+xml":{"source":"iana","compressible":true,"extensions":["mrcx"]},"application/mathematica":{"source":"iana","extensions":["ma","nb","mb"]},"application/mathml+xml":{"source":"iana","compressible":true,"extensions":["mathml"]},"application/mathml-content+xml":{"source":"iana","compressible":true},"application/mathml-presentation+xml":{"source":"iana","compressible":true},"application/mbms-associated-procedure-description+xml":{"source":"iana","compressible":true},"application/mbms-deregister+xml":{"source":"iana","compressible":true},"application/mbms-envelope+xml":{"source":"iana","compressible":true},"application/mbms-msk+xml":{"source":"iana","compressible":true},"application/mbms-msk-response+xml":{"source":"iana","compressible":true},"application/mbms-protection-description+xml":{"source":"iana","compressible":true},"application/mbms-reception-report+xml":{"source":"iana","compressible":true},"application/mbms-register+xml":{"source":"iana","compressible":true},"application/mbms-register-response+xml":{"source":"iana","compressible":true},"application/mbms-schedule+xml":{"source":"iana","compressible":true},"application/mbms-user-service-description+xml":{"source":"iana","compressible":true},"application/mbox":{"source":"iana","extensions":["mbox"]},"application/media-policy-dataset+xml":{"source":"iana","compressible":true},"application/media_control+xml":{"source":"iana","compressible":true},"application/mediaservercontrol+xml":{"source":"iana","compressible":true,"extensions":["mscml"]},"application/merge-patch+json":{"source":"iana","compressible":true},"application/metalink+xml":{"source":"apache","compressible":true,"extensions":["metalink"]},"application/metalink4+xml":{"source":"iana","compressible":true,"extensions":["meta4"]},"application/mets+xml":{"source":"iana","compressible":true,"extensions":["mets"]},"application/mf4":{"source":"iana"},"application/mikey":{"source":"iana"},"application/mmt-aei+xml":{"source":"iana","compressible":true},"application/mmt-usd+xml":{"source":"iana","compressible":true},"application/mods+xml":{"source":"iana","compressible":true,"extensions":["mods"]},"application/moss-keys":{"source":"iana"},"application/moss-signature":{"source":"iana"},"application/mosskey-data":{"source":"iana"},"application/mosskey-request":{"source":"iana"},"application/mp21":{"source":"iana","extensions":["m21","mp21"]},"application/mp4":{"source":"iana","extensions":["mp4s","m4p"]},"application/mpeg4-generic":{"source":"iana"},"application/mpeg4-iod":{"source":"iana"},"application/mpeg4-iod-xmt":{"source":"iana"},"application/mrb-consumer+xml":{"source":"iana","compressible":true},"application/mrb-publish+xml":{"source":"iana","compressible":true},"application/msc-ivr+xml":{"source":"iana","compressible":true},"application/msc-mixer+xml":{"source":"iana","compressible":true},"application/msword":{"source":"iana","compressible":false,"extensions":["doc","dot"]},"application/mud+json":{"source":"iana","compressible":true},"application/mxf":{"source":"iana","extensions":["mxf"]},"application/n-quads":{"source":"iana","extensions":["nq"]},"application/n-triples":{"source":"iana","extensions":["nt"]},"application/nasdata":{"source":"iana"},"application/news-checkgroups":{"source":"iana"},"application/news-groupinfo":{"source":"iana"},"application/news-transmission":{"source":"iana"},"application/nlsml+xml":{"source":"iana","compressible":true},"application/node":{"source":"iana"},"application/nss":{"source":"iana"},"application/ocsp-request":{"source":"iana"},"application/ocsp-response":{"source":"iana"},"application/octet-stream":{"source":"iana","compressible":false,"extensions":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"]},"application/oda":{"source":"iana","extensions":["oda"]},"application/odm+xml":{"source":"iana","compressible":true},"application/odx":{"source":"iana"},"application/oebps-package+xml":{"source":"iana","compressible":true,"extensions":["opf"]},"application/ogg":{"source":"iana","compressible":false,"extensions":["ogx"]},"application/omdoc+xml":{"source":"apache","compressible":true,"extensions":["omdoc"]},"application/onenote":{"source":"apache","extensions":["onetoc","onetoc2","onetmp","onepkg"]},"application/oscore":{"source":"iana"},"application/oxps":{"source":"iana","extensions":["oxps"]},"application/p2p-overlay+xml":{"source":"iana","compressible":true},"application/parityfec":{"source":"iana"},"application/passport":{"source":"iana"},"application/patch-ops-error+xml":{"source":"iana","compressible":true,"extensions":["xer"]},"application/pdf":{"source":"iana","compressible":false,"extensions":["pdf"]},"application/pdx":{"source":"iana"},"application/pem-certificate-chain":{"source":"iana"},"application/pgp-encrypted":{"source":"iana","compressible":false,"extensions":["pgp"]},"application/pgp-keys":{"source":"iana"},"application/pgp-signature":{"source":"iana","extensions":["asc","sig"]},"application/pics-rules":{"source":"apache","extensions":["prf"]},"application/pidf+xml":{"source":"iana","compressible":true},"application/pidf-diff+xml":{"source":"iana","compressible":true},"application/pkcs10":{"source":"iana","extensions":["p10"]},"application/pkcs12":{"source":"iana"},"application/pkcs7-mime":{"source":"iana","extensions":["p7m","p7c"]},"application/pkcs7-signature":{"source":"iana","extensions":["p7s"]},"application/pkcs8":{"source":"iana","extensions":["p8"]},"application/pkcs8-encrypted":{"source":"iana"},"application/pkix-attr-cert":{"source":"iana","extensions":["ac"]},"application/pkix-cert":{"source":"iana","extensions":["cer"]},"application/pkix-crl":{"source":"iana","extensions":["crl"]},"application/pkix-pkipath":{"source":"iana","extensions":["pkipath"]},"application/pkixcmp":{"source":"iana","extensions":["pki"]},"application/pls+xml":{"source":"iana","compressible":true,"extensions":["pls"]},"application/poc-settings+xml":{"source":"iana","compressible":true},"application/postscript":{"source":"iana","compressible":true,"extensions":["ai","eps","ps"]},"application/ppsp-tracker+json":{"source":"iana","compressible":true},"application/problem+json":{"source":"iana","compressible":true},"application/problem+xml":{"source":"iana","compressible":true},"application/provenance+xml":{"source":"iana","compressible":true},"application/prs.alvestrand.titrax-sheet":{"source":"iana"},"application/prs.cww":{"source":"iana","extensions":["cww"]},"application/prs.hpub+zip":{"source":"iana","compressible":false},"application/prs.nprend":{"source":"iana"},"application/prs.plucker":{"source":"iana"},"application/prs.rdf-xml-crypt":{"source":"iana"},"application/prs.xsf+xml":{"source":"iana","compressible":true},"application/pskc+xml":{"source":"iana","compressible":true,"extensions":["pskcxml"]},"application/qsig":{"source":"iana"},"application/raml+yaml":{"compressible":true,"extensions":["raml"]},"application/raptorfec":{"source":"iana"},"application/rdap+json":{"source":"iana","compressible":true},"application/rdf+xml":{"source":"iana","compressible":true,"extensions":["rdf","owl"]},"application/reginfo+xml":{"source":"iana","compressible":true,"extensions":["rif"]},"application/relax-ng-compact-syntax":{"source":"iana","extensions":["rnc"]},"application/remote-printing":{"source":"iana"},"application/reputon+json":{"source":"iana","compressible":true},"application/resource-lists+xml":{"source":"iana","compressible":true,"extensions":["rl"]},"application/resource-lists-diff+xml":{"source":"iana","compressible":true,"extensions":["rld"]},"application/rfc+xml":{"source":"iana","compressible":true},"application/riscos":{"source":"iana"},"application/rlmi+xml":{"source":"iana","compressible":true},"application/rls-services+xml":{"source":"iana","compressible":true,"extensions":["rs"]},"application/route-apd+xml":{"source":"iana","compressible":true},"application/route-s-tsid+xml":{"source":"iana","compressible":true},"application/route-usd+xml":{"source":"iana","compressible":true},"application/rpki-ghostbusters":{"source":"iana","extensions":["gbr"]},"application/rpki-manifest":{"source":"iana","extensions":["mft"]},"application/rpki-publication":{"source":"iana"},"application/rpki-roa":{"source":"iana","extensions":["roa"]},"application/rpki-updown":{"source":"iana"},"application/rsd+xml":{"source":"apache","compressible":true,"extensions":["rsd"]},"application/rss+xml":{"source":"apache","compressible":true,"extensions":["rss"]},"application/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"application/rtploopback":{"source":"iana"},"application/rtx":{"source":"iana"},"application/samlassertion+xml":{"source":"iana","compressible":true},"application/samlmetadata+xml":{"source":"iana","compressible":true},"application/sbml+xml":{"source":"iana","compressible":true,"extensions":["sbml"]},"application/scaip+xml":{"source":"iana","compressible":true},"application/scim+json":{"source":"iana","compressible":true},"application/scvp-cv-request":{"source":"iana","extensions":["scq"]},"application/scvp-cv-response":{"source":"iana","extensions":["scs"]},"application/scvp-vp-request":{"source":"iana","extensions":["spq"]},"application/scvp-vp-response":{"source":"iana","extensions":["spp"]},"application/sdp":{"source":"iana","extensions":["sdp"]},"application/secevent+jwt":{"source":"iana"},"application/senml+cbor":{"source":"iana"},"application/senml+json":{"source":"iana","compressible":true},"application/senml+xml":{"source":"iana","compressible":true},"application/senml-exi":{"source":"iana"},"application/sensml+cbor":{"source":"iana"},"application/sensml+json":{"source":"iana","compressible":true},"application/sensml+xml":{"source":"iana","compressible":true},"application/sensml-exi":{"source":"iana"},"application/sep+xml":{"source":"iana","compressible":true},"application/sep-exi":{"source":"iana"},"application/session-info":{"source":"iana"},"application/set-payment":{"source":"iana"},"application/set-payment-initiation":{"source":"iana","extensions":["setpay"]},"application/set-registration":{"source":"iana"},"application/set-registration-initiation":{"source":"iana","extensions":["setreg"]},"application/sgml":{"source":"iana"},"application/sgml-open-catalog":{"source":"iana"},"application/shf+xml":{"source":"iana","compressible":true,"extensions":["shf"]},"application/sieve":{"source":"iana","extensions":["siv","sieve"]},"application/simple-filter+xml":{"source":"iana","compressible":true},"application/simple-message-summary":{"source":"iana"},"application/simplesymbolcontainer":{"source":"iana"},"application/slate":{"source":"iana"},"application/smil":{"source":"iana"},"application/smil+xml":{"source":"iana","compressible":true,"extensions":["smi","smil"]},"application/smpte336m":{"source":"iana"},"application/soap+fastinfoset":{"source":"iana"},"application/soap+xml":{"source":"iana","compressible":true},"application/sparql-query":{"source":"iana","extensions":["rq"]},"application/sparql-results+xml":{"source":"iana","compressible":true,"extensions":["srx"]},"application/spirits-event+xml":{"source":"iana","compressible":true},"application/sql":{"source":"iana"},"application/srgs":{"source":"iana","extensions":["gram"]},"application/srgs+xml":{"source":"iana","compressible":true,"extensions":["grxml"]},"application/sru+xml":{"source":"iana","compressible":true,"extensions":["sru"]},"application/ssdl+xml":{"source":"apache","compressible":true,"extensions":["ssdl"]},"application/ssml+xml":{"source":"iana","compressible":true,"extensions":["ssml"]},"application/stix+json":{"source":"iana","compressible":true},"application/tamp-apex-update":{"source":"iana"},"application/tamp-apex-update-confirm":{"source":"iana"},"application/tamp-community-update":{"source":"iana"},"application/tamp-community-update-confirm":{"source":"iana"},"application/tamp-error":{"source":"iana"},"application/tamp-sequence-adjust":{"source":"iana"},"application/tamp-sequence-adjust-confirm":{"source":"iana"},"application/tamp-status-query":{"source":"iana"},"application/tamp-status-response":{"source":"iana"},"application/tamp-update":{"source":"iana"},"application/tamp-update-confirm":{"source":"iana"},"application/tar":{"compressible":true},"application/taxii+json":{"source":"iana","compressible":true},"application/tei+xml":{"source":"iana","compressible":true,"extensions":["tei","teicorpus"]},"application/tetra_isi":{"source":"iana"},"application/thraud+xml":{"source":"iana","compressible":true,"extensions":["tfi"]},"application/timestamp-query":{"source":"iana"},"application/timestamp-reply":{"source":"iana"},"application/timestamped-data":{"source":"iana","extensions":["tsd"]},"application/tlsrpt+gzip":{"source":"iana"},"application/tlsrpt+json":{"source":"iana","compressible":true},"application/tnauthlist":{"source":"iana"},"application/trickle-ice-sdpfrag":{"source":"iana"},"application/trig":{"source":"iana"},"application/ttml+xml":{"source":"iana","compressible":true},"application/tve-trigger":{"source":"iana"},"application/tzif":{"source":"iana"},"application/tzif-leap":{"source":"iana"},"application/ulpfec":{"source":"iana"},"application/urc-grpsheet+xml":{"source":"iana","compressible":true},"application/urc-ressheet+xml":{"source":"iana","compressible":true},"application/urc-targetdesc+xml":{"source":"iana","compressible":true},"application/urc-uisocketdesc+xml":{"source":"iana","compressible":true},"application/vcard+json":{"source":"iana","compressible":true},"application/vcard+xml":{"source":"iana","compressible":true},"application/vemmi":{"source":"iana"},"application/vividence.scriptfile":{"source":"apache"},"application/vnd.1000minds.decision-model+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-prose+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-prose-pc3ch+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-v2x-local-service-information":{"source":"iana"},"application/vnd.3gpp.access-transfer-events+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.bsf+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gmop+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mc-signalling-ear":{"source":"iana"},"application/vnd.3gpp.mcdata-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-payload":{"source":"iana"},"application/vnd.3gpp.mcdata-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-signalling":{"source":"iana"},"application/vnd.3gpp.mcdata-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-floor-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-signed+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-init-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-transmission-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mid-call+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.pic-bw-large":{"source":"iana","extensions":["plb"]},"application/vnd.3gpp.pic-bw-small":{"source":"iana","extensions":["psb"]},"application/vnd.3gpp.pic-bw-var":{"source":"iana","extensions":["pvb"]},"application/vnd.3gpp.sms":{"source":"iana"},"application/vnd.3gpp.sms+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-ext+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.state-and-event-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ussd+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.bcmcsinfo+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.sms":{"source":"iana"},"application/vnd.3gpp2.tcap":{"source":"iana","extensions":["tcap"]},"application/vnd.3lightssoftware.imagescal":{"source":"iana"},"application/vnd.3m.post-it-notes":{"source":"iana","extensions":["pwn"]},"application/vnd.accpac.simply.aso":{"source":"iana","extensions":["aso"]},"application/vnd.accpac.simply.imp":{"source":"iana","extensions":["imp"]},"application/vnd.acucobol":{"source":"iana","extensions":["acu"]},"application/vnd.acucorp":{"source":"iana","extensions":["atc","acutc"]},"application/vnd.adobe.air-application-installer-package+zip":{"source":"apache","compressible":false,"extensions":["air"]},"application/vnd.adobe.flash.movie":{"source":"iana"},"application/vnd.adobe.formscentral.fcdt":{"source":"iana","extensions":["fcdt"]},"application/vnd.adobe.fxp":{"source":"iana","extensions":["fxp","fxpl"]},"application/vnd.adobe.partial-upload":{"source":"iana"},"application/vnd.adobe.xdp+xml":{"source":"iana","compressible":true,"extensions":["xdp"]},"application/vnd.adobe.xfdf":{"source":"iana","extensions":["xfdf"]},"application/vnd.aether.imp":{"source":"iana"},"application/vnd.afpc.afplinedata":{"source":"iana"},"application/vnd.afpc.modca":{"source":"iana"},"application/vnd.ah-barcode":{"source":"iana"},"application/vnd.ahead.space":{"source":"iana","extensions":["ahead"]},"application/vnd.airzip.filesecure.azf":{"source":"iana","extensions":["azf"]},"application/vnd.airzip.filesecure.azs":{"source":"iana","extensions":["azs"]},"application/vnd.amadeus+json":{"source":"iana","compressible":true},"application/vnd.amazon.ebook":{"source":"apache","extensions":["azw"]},"application/vnd.amazon.mobi8-ebook":{"source":"iana"},"application/vnd.americandynamics.acc":{"source":"iana","extensions":["acc"]},"application/vnd.amiga.ami":{"source":"iana","extensions":["ami"]},"application/vnd.amundsen.maze+xml":{"source":"iana","compressible":true},"application/vnd.android.package-archive":{"source":"apache","compressible":false,"extensions":["apk"]},"application/vnd.anki":{"source":"iana"},"application/vnd.anser-web-certificate-issue-initiation":{"source":"iana","extensions":["cii"]},"application/vnd.anser-web-funds-transfer-initiation":{"source":"apache","extensions":["fti"]},"application/vnd.antix.game-component":{"source":"iana","extensions":["atx"]},"application/vnd.apache.thrift.binary":{"source":"iana"},"application/vnd.apache.thrift.compact":{"source":"iana"},"application/vnd.apache.thrift.json":{"source":"iana"},"application/vnd.api+json":{"source":"iana","compressible":true},"application/vnd.apothekende.reservation+json":{"source":"iana","compressible":true},"application/vnd.apple.installer+xml":{"source":"iana","compressible":true,"extensions":["mpkg"]},"application/vnd.apple.keynote":{"source":"iana","extensions":["keynote"]},"application/vnd.apple.mpegurl":{"source":"iana","extensions":["m3u8"]},"application/vnd.apple.numbers":{"source":"iana","extensions":["numbers"]},"application/vnd.apple.pages":{"source":"iana","extensions":["pages"]},"application/vnd.apple.pkpass":{"compressible":false,"extensions":["pkpass"]},"application/vnd.arastra.swi":{"source":"iana"},"application/vnd.aristanetworks.swi":{"source":"iana","extensions":["swi"]},"application/vnd.artisan+json":{"source":"iana","compressible":true},"application/vnd.artsquare":{"source":"iana"},"application/vnd.astraea-software.iota":{"source":"iana","extensions":["iota"]},"application/vnd.audiograph":{"source":"iana","extensions":["aep"]},"application/vnd.autopackage":{"source":"iana"},"application/vnd.avalon+json":{"source":"iana","compressible":true},"application/vnd.avistar+xml":{"source":"iana","compressible":true},"application/vnd.balsamiq.bmml+xml":{"source":"iana","compressible":true},"application/vnd.balsamiq.bmpr":{"source":"iana"},"application/vnd.banana-accounting":{"source":"iana"},"application/vnd.bbf.usp.msg":{"source":"iana"},"application/vnd.bbf.usp.msg+json":{"source":"iana","compressible":true},"application/vnd.bekitzur-stech+json":{"source":"iana","compressible":true},"application/vnd.bint.med-content":{"source":"iana"},"application/vnd.biopax.rdf+xml":{"source":"iana","compressible":true},"application/vnd.blink-idb-value-wrapper":{"source":"iana"},"application/vnd.blueice.multipass":{"source":"iana","extensions":["mpm"]},"application/vnd.bluetooth.ep.oob":{"source":"iana"},"application/vnd.bluetooth.le.oob":{"source":"iana"},"application/vnd.bmi":{"source":"iana","extensions":["bmi"]},"application/vnd.businessobjects":{"source":"iana","extensions":["rep"]},"application/vnd.byu.uapi+json":{"source":"iana","compressible":true},"application/vnd.cab-jscript":{"source":"iana"},"application/vnd.canon-cpdl":{"source":"iana"},"application/vnd.canon-lips":{"source":"iana"},"application/vnd.capasystems-pg+json":{"source":"iana","compressible":true},"application/vnd.cendio.thinlinc.clientconf":{"source":"iana"},"application/vnd.century-systems.tcp_stream":{"source":"iana"},"application/vnd.chemdraw+xml":{"source":"iana","compressible":true,"extensions":["cdxml"]},"application/vnd.chess-pgn":{"source":"iana"},"application/vnd.chipnuts.karaoke-mmd":{"source":"iana","extensions":["mmd"]},"application/vnd.cinderella":{"source":"iana","extensions":["cdy"]},"application/vnd.cirpack.isdn-ext":{"source":"iana"},"application/vnd.citationstyles.style+xml":{"source":"iana","compressible":true,"extensions":["csl"]},"application/vnd.claymore":{"source":"iana","extensions":["cla"]},"application/vnd.cloanto.rp9":{"source":"iana","extensions":["rp9"]},"application/vnd.clonk.c4group":{"source":"iana","extensions":["c4g","c4d","c4f","c4p","c4u"]},"application/vnd.cluetrust.cartomobile-config":{"source":"iana","extensions":["c11amc"]},"application/vnd.cluetrust.cartomobile-config-pkg":{"source":"iana","extensions":["c11amz"]},"application/vnd.coffeescript":{"source":"iana"},"application/vnd.collabio.xodocuments.document":{"source":"iana"},"application/vnd.collabio.xodocuments.document-template":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation-template":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet-template":{"source":"iana"},"application/vnd.collection+json":{"source":"iana","compressible":true},"application/vnd.collection.doc+json":{"source":"iana","compressible":true},"application/vnd.collection.next+json":{"source":"iana","compressible":true},"application/vnd.comicbook+zip":{"source":"iana","compressible":false},"application/vnd.comicbook-rar":{"source":"iana"},"application/vnd.commerce-battelle":{"source":"iana"},"application/vnd.commonspace":{"source":"iana","extensions":["csp"]},"application/vnd.contact.cmsg":{"source":"iana","extensions":["cdbcmsg"]},"application/vnd.coreos.ignition+json":{"source":"iana","compressible":true},"application/vnd.cosmocaller":{"source":"iana","extensions":["cmc"]},"application/vnd.crick.clicker":{"source":"iana","extensions":["clkx"]},"application/vnd.crick.clicker.keyboard":{"source":"iana","extensions":["clkk"]},"application/vnd.crick.clicker.palette":{"source":"iana","extensions":["clkp"]},"application/vnd.crick.clicker.template":{"source":"iana","extensions":["clkt"]},"application/vnd.crick.clicker.wordbank":{"source":"iana","extensions":["clkw"]},"application/vnd.criticaltools.wbs+xml":{"source":"iana","compressible":true,"extensions":["wbs"]},"application/vnd.ctc-posml":{"source":"iana","extensions":["pml"]},"application/vnd.ctct.ws+xml":{"source":"iana","compressible":true},"application/vnd.cups-pdf":{"source":"iana"},"application/vnd.cups-postscript":{"source":"iana"},"application/vnd.cups-ppd":{"source":"iana","extensions":["ppd"]},"application/vnd.cups-raster":{"source":"iana"},"application/vnd.cups-raw":{"source":"iana"},"application/vnd.curl":{"source":"iana"},"application/vnd.curl.car":{"source":"apache","extensions":["car"]},"application/vnd.curl.pcurl":{"source":"apache","extensions":["pcurl"]},"application/vnd.cyan.dean.root+xml":{"source":"iana","compressible":true},"application/vnd.cybank":{"source":"iana"},"application/vnd.d2l.coursepackage1p0+zip":{"source":"iana","compressible":false},"application/vnd.dart":{"source":"iana","compressible":true,"extensions":["dart"]},"application/vnd.data-vision.rdz":{"source":"iana","extensions":["rdz"]},"application/vnd.datapackage+json":{"source":"iana","compressible":true},"application/vnd.dataresource+json":{"source":"iana","compressible":true},"application/vnd.debian.binary-package":{"source":"iana"},"application/vnd.dece.data":{"source":"iana","extensions":["uvf","uvvf","uvd","uvvd"]},"application/vnd.dece.ttml+xml":{"source":"iana","compressible":true,"extensions":["uvt","uvvt"]},"application/vnd.dece.unspecified":{"source":"iana","extensions":["uvx","uvvx"]},"application/vnd.dece.zip":{"source":"iana","extensions":["uvz","uvvz"]},"application/vnd.denovo.fcselayout-link":{"source":"iana","extensions":["fe_launch"]},"application/vnd.desmume.movie":{"source":"iana"},"application/vnd.dir-bi.plate-dl-nosuffix":{"source":"iana"},"application/vnd.dm.delegation+xml":{"source":"iana","compressible":true},"application/vnd.dna":{"source":"iana","extensions":["dna"]},"application/vnd.document+json":{"source":"iana","compressible":true},"application/vnd.dolby.mlp":{"source":"apache","extensions":["mlp"]},"application/vnd.dolby.mobile.1":{"source":"iana"},"application/vnd.dolby.mobile.2":{"source":"iana"},"application/vnd.doremir.scorecloud-binary-document":{"source":"iana"},"application/vnd.dpgraph":{"source":"iana","extensions":["dpg"]},"application/vnd.dreamfactory":{"source":"iana","extensions":["dfac"]},"application/vnd.drive+json":{"source":"iana","compressible":true},"application/vnd.ds-keypoint":{"source":"apache","extensions":["kpxx"]},"application/vnd.dtg.local":{"source":"iana"},"application/vnd.dtg.local.flash":{"source":"iana"},"application/vnd.dtg.local.html":{"source":"iana"},"application/vnd.dvb.ait":{"source":"iana","extensions":["ait"]},"application/vnd.dvb.dvbj":{"source":"iana"},"application/vnd.dvb.esgcontainer":{"source":"iana"},"application/vnd.dvb.ipdcdftnotifaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess2":{"source":"iana"},"application/vnd.dvb.ipdcesgpdd":{"source":"iana"},"application/vnd.dvb.ipdcroaming":{"source":"iana"},"application/vnd.dvb.iptv.alfec-base":{"source":"iana"},"application/vnd.dvb.iptv.alfec-enhancement":{"source":"iana"},"application/vnd.dvb.notif-aggregate-root+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-container+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-generic+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-msglist+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-request+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-response+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-init+xml":{"source":"iana","compressible":true},"application/vnd.dvb.pfr":{"source":"iana"},"application/vnd.dvb.service":{"source":"iana","extensions":["svc"]},"application/vnd.dxr":{"source":"iana"},"application/vnd.dynageo":{"source":"iana","extensions":["geo"]},"application/vnd.dzr":{"source":"iana"},"application/vnd.easykaraoke.cdgdownload":{"source":"iana"},"application/vnd.ecdis-update":{"source":"iana"},"application/vnd.ecip.rlp":{"source":"iana"},"application/vnd.ecowin.chart":{"source":"iana","extensions":["mag"]},"application/vnd.ecowin.filerequest":{"source":"iana"},"application/vnd.ecowin.fileupdate":{"source":"iana"},"application/vnd.ecowin.series":{"source":"iana"},"application/vnd.ecowin.seriesrequest":{"source":"iana"},"application/vnd.ecowin.seriesupdate":{"source":"iana"},"application/vnd.efi.img":{"source":"iana"},"application/vnd.efi.iso":{"source":"iana"},"application/vnd.emclient.accessrequest+xml":{"source":"iana","compressible":true},"application/vnd.enliven":{"source":"iana","extensions":["nml"]},"application/vnd.enphase.envoy":{"source":"iana"},"application/vnd.eprints.data+xml":{"source":"iana","compressible":true},"application/vnd.epson.esf":{"source":"iana","extensions":["esf"]},"application/vnd.epson.msf":{"source":"iana","extensions":["msf"]},"application/vnd.epson.quickanime":{"source":"iana","extensions":["qam"]},"application/vnd.epson.salt":{"source":"iana","extensions":["slt"]},"application/vnd.epson.ssf":{"source":"iana","extensions":["ssf"]},"application/vnd.ericsson.quickcall":{"source":"iana"},"application/vnd.espass-espass+zip":{"source":"iana","compressible":false},"application/vnd.eszigno3+xml":{"source":"iana","compressible":true,"extensions":["es3","et3"]},"application/vnd.etsi.aoc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.asic-e+zip":{"source":"iana","compressible":false},"application/vnd.etsi.asic-s+zip":{"source":"iana","compressible":false},"application/vnd.etsi.cug+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvcommand+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-bc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-cod+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-npvr+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvservice+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsync+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvueprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mcid+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mheg5":{"source":"iana"},"application/vnd.etsi.overload-control-policy-dataset+xml":{"source":"iana","compressible":true},"application/vnd.etsi.pstn+xml":{"source":"iana","compressible":true},"application/vnd.etsi.sci+xml":{"source":"iana","compressible":true},"application/vnd.etsi.simservs+xml":{"source":"iana","compressible":true},"application/vnd.etsi.timestamp-token":{"source":"iana"},"application/vnd.etsi.tsl+xml":{"source":"iana","compressible":true},"application/vnd.etsi.tsl.der":{"source":"iana"},"application/vnd.eudora.data":{"source":"iana"},"application/vnd.evolv.ecig.profile":{"source":"iana"},"application/vnd.evolv.ecig.settings":{"source":"iana"},"application/vnd.evolv.ecig.theme":{"source":"iana"},"application/vnd.exstream-empower+zip":{"source":"iana","compressible":false},"application/vnd.exstream-package":{"source":"iana"},"application/vnd.ezpix-album":{"source":"iana","extensions":["ez2"]},"application/vnd.ezpix-package":{"source":"iana","extensions":["ez3"]},"application/vnd.f-secure.mobile":{"source":"iana"},"application/vnd.fastcopy-disk-image":{"source":"iana"},"application/vnd.fdf":{"source":"iana","extensions":["fdf"]},"application/vnd.fdsn.mseed":{"source":"iana","extensions":["mseed"]},"application/vnd.fdsn.seed":{"source":"iana","extensions":["seed","dataless"]},"application/vnd.ffsns":{"source":"iana"},"application/vnd.filmit.zfc":{"source":"iana"},"application/vnd.fints":{"source":"iana"},"application/vnd.firemonkeys.cloudcell":{"source":"iana"},"application/vnd.flographit":{"source":"iana","extensions":["gph"]},"application/vnd.fluxtime.clip":{"source":"iana","extensions":["ftc"]},"application/vnd.font-fontforge-sfd":{"source":"iana"},"application/vnd.framemaker":{"source":"iana","extensions":["fm","frame","maker","book"]},"application/vnd.frogans.fnc":{"source":"iana","extensions":["fnc"]},"application/vnd.frogans.ltf":{"source":"iana","extensions":["ltf"]},"application/vnd.fsc.weblaunch":{"source":"iana","extensions":["fsc"]},"application/vnd.fujitsu.oasys":{"source":"iana","extensions":["oas"]},"application/vnd.fujitsu.oasys2":{"source":"iana","extensions":["oa2"]},"application/vnd.fujitsu.oasys3":{"source":"iana","extensions":["oa3"]},"application/vnd.fujitsu.oasysgp":{"source":"iana","extensions":["fg5"]},"application/vnd.fujitsu.oasysprs":{"source":"iana","extensions":["bh2"]},"application/vnd.fujixerox.art-ex":{"source":"iana"},"application/vnd.fujixerox.art4":{"source":"iana"},"application/vnd.fujixerox.ddd":{"source":"iana","extensions":["ddd"]},"application/vnd.fujixerox.docuworks":{"source":"iana","extensions":["xdw"]},"application/vnd.fujixerox.docuworks.binder":{"source":"iana","extensions":["xbd"]},"application/vnd.fujixerox.docuworks.container":{"source":"iana"},"application/vnd.fujixerox.hbpl":{"source":"iana"},"application/vnd.fut-misnet":{"source":"iana"},"application/vnd.futoin+cbor":{"source":"iana"},"application/vnd.futoin+json":{"source":"iana","compressible":true},"application/vnd.fuzzysheet":{"source":"iana","extensions":["fzs"]},"application/vnd.genomatix.tuxedo":{"source":"iana","extensions":["txd"]},"application/vnd.geo+json":{"source":"iana","compressible":true},"application/vnd.geocube+xml":{"source":"iana","compressible":true},"application/vnd.geogebra.file":{"source":"iana","extensions":["ggb"]},"application/vnd.geogebra.tool":{"source":"iana","extensions":["ggt"]},"application/vnd.geometry-explorer":{"source":"iana","extensions":["gex","gre"]},"application/vnd.geonext":{"source":"iana","extensions":["gxt"]},"application/vnd.geoplan":{"source":"iana","extensions":["g2w"]},"application/vnd.geospace":{"source":"iana","extensions":["g3w"]},"application/vnd.gerber":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt-response":{"source":"iana"},"application/vnd.gmx":{"source":"iana","extensions":["gmx"]},"application/vnd.google-apps.document":{"compressible":false,"extensions":["gdoc"]},"application/vnd.google-apps.presentation":{"compressible":false,"extensions":["gslides"]},"application/vnd.google-apps.spreadsheet":{"compressible":false,"extensions":["gsheet"]},"application/vnd.google-earth.kml+xml":{"source":"iana","compressible":true,"extensions":["kml"]},"application/vnd.google-earth.kmz":{"source":"iana","compressible":false,"extensions":["kmz"]},"application/vnd.gov.sk.e-form+xml":{"source":"iana","compressible":true},"application/vnd.gov.sk.e-form+zip":{"source":"iana","compressible":false},"application/vnd.gov.sk.xmldatacontainer+xml":{"source":"iana","compressible":true},"application/vnd.grafeq":{"source":"iana","extensions":["gqf","gqs"]},"application/vnd.gridmp":{"source":"iana"},"application/vnd.groove-account":{"source":"iana","extensions":["gac"]},"application/vnd.groove-help":{"source":"iana","extensions":["ghf"]},"application/vnd.groove-identity-message":{"source":"iana","extensions":["gim"]},"application/vnd.groove-injector":{"source":"iana","extensions":["grv"]},"application/vnd.groove-tool-message":{"source":"iana","extensions":["gtm"]},"application/vnd.groove-tool-template":{"source":"iana","extensions":["tpl"]},"application/vnd.groove-vcard":{"source":"iana","extensions":["vcg"]},"application/vnd.hal+json":{"source":"iana","compressible":true},"application/vnd.hal+xml":{"source":"iana","compressible":true,"extensions":["hal"]},"application/vnd.handheld-entertainment+xml":{"source":"iana","compressible":true,"extensions":["zmm"]},"application/vnd.hbci":{"source":"iana","extensions":["hbci"]},"application/vnd.hc+json":{"source":"iana","compressible":true},"application/vnd.hcl-bireports":{"source":"iana"},"application/vnd.hdt":{"source":"iana"},"application/vnd.heroku+json":{"source":"iana","compressible":true},"application/vnd.hhe.lesson-player":{"source":"iana","extensions":["les"]},"application/vnd.hp-hpgl":{"source":"iana","extensions":["hpgl"]},"application/vnd.hp-hpid":{"source":"iana","extensions":["hpid"]},"application/vnd.hp-hps":{"source":"iana","extensions":["hps"]},"application/vnd.hp-jlyt":{"source":"iana","extensions":["jlt"]},"application/vnd.hp-pcl":{"source":"iana","extensions":["pcl"]},"application/vnd.hp-pclxl":{"source":"iana","extensions":["pclxl"]},"application/vnd.httphone":{"source":"iana"},"application/vnd.hydrostatix.sof-data":{"source":"iana","extensions":["sfd-hdstx"]},"application/vnd.hyper+json":{"source":"iana","compressible":true},"application/vnd.hyper-item+json":{"source":"iana","compressible":true},"application/vnd.hyperdrive+json":{"source":"iana","compressible":true},"application/vnd.hzn-3d-crossword":{"source":"iana"},"application/vnd.ibm.afplinedata":{"source":"iana"},"application/vnd.ibm.electronic-media":{"source":"iana"},"application/vnd.ibm.minipay":{"source":"iana","extensions":["mpy"]},"application/vnd.ibm.modcap":{"source":"iana","extensions":["afp","listafp","list3820"]},"application/vnd.ibm.rights-management":{"source":"iana","extensions":["irm"]},"application/vnd.ibm.secure-container":{"source":"iana","extensions":["sc"]},"application/vnd.iccprofile":{"source":"iana","extensions":["icc","icm"]},"application/vnd.ieee.1905":{"source":"iana"},"application/vnd.igloader":{"source":"iana","extensions":["igl"]},"application/vnd.imagemeter.folder+zip":{"source":"iana","compressible":false},"application/vnd.imagemeter.image+zip":{"source":"iana","compressible":false},"application/vnd.immervision-ivp":{"source":"iana","extensions":["ivp"]},"application/vnd.immervision-ivu":{"source":"iana","extensions":["ivu"]},"application/vnd.ims.imsccv1p1":{"source":"iana"},"application/vnd.ims.imsccv1p2":{"source":"iana"},"application/vnd.ims.imsccv1p3":{"source":"iana"},"application/vnd.ims.lis.v2.result+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolconsumerprofile+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy.id+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings.simple+json":{"source":"iana","compressible":true},"application/vnd.informedcontrol.rms+xml":{"source":"iana","compressible":true},"application/vnd.informix-visionary":{"source":"iana"},"application/vnd.infotech.project":{"source":"iana"},"application/vnd.infotech.project+xml":{"source":"iana","compressible":true},"application/vnd.innopath.wamp.notification":{"source":"iana"},"application/vnd.insors.igm":{"source":"iana","extensions":["igm"]},"application/vnd.intercon.formnet":{"source":"iana","extensions":["xpw","xpx"]},"application/vnd.intergeo":{"source":"iana","extensions":["i2g"]},"application/vnd.intertrust.digibox":{"source":"iana"},"application/vnd.intertrust.nncp":{"source":"iana"},"application/vnd.intu.qbo":{"source":"iana","extensions":["qbo"]},"application/vnd.intu.qfx":{"source":"iana","extensions":["qfx"]},"application/vnd.iptc.g2.catalogitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.conceptitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.knowledgeitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsmessage+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.packageitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.planningitem+xml":{"source":"iana","compressible":true},"application/vnd.ipunplugged.rcprofile":{"source":"iana","extensions":["rcprofile"]},"application/vnd.irepository.package+xml":{"source":"iana","compressible":true,"extensions":["irp"]},"application/vnd.is-xpr":{"source":"iana","extensions":["xpr"]},"application/vnd.isac.fcs":{"source":"iana","extensions":["fcs"]},"application/vnd.jam":{"source":"iana","extensions":["jam"]},"application/vnd.japannet-directory-service":{"source":"iana"},"application/vnd.japannet-jpnstore-wakeup":{"source":"iana"},"application/vnd.japannet-payment-wakeup":{"source":"iana"},"application/vnd.japannet-registration":{"source":"iana"},"application/vnd.japannet-registration-wakeup":{"source":"iana"},"application/vnd.japannet-setstore-wakeup":{"source":"iana"},"application/vnd.japannet-verification":{"source":"iana"},"application/vnd.japannet-verification-wakeup":{"source":"iana"},"application/vnd.jcp.javame.midlet-rms":{"source":"iana","extensions":["rms"]},"application/vnd.jisp":{"source":"iana","extensions":["jisp"]},"application/vnd.joost.joda-archive":{"source":"iana","extensions":["joda"]},"application/vnd.jsk.isdn-ngn":{"source":"iana"},"application/vnd.kahootz":{"source":"iana","extensions":["ktz","ktr"]},"application/vnd.kde.karbon":{"source":"iana","extensions":["karbon"]},"application/vnd.kde.kchart":{"source":"iana","extensions":["chrt"]},"application/vnd.kde.kformula":{"source":"iana","extensions":["kfo"]},"application/vnd.kde.kivio":{"source":"iana","extensions":["flw"]},"application/vnd.kde.kontour":{"source":"iana","extensions":["kon"]},"application/vnd.kde.kpresenter":{"source":"iana","extensions":["kpr","kpt"]},"application/vnd.kde.kspread":{"source":"iana","extensions":["ksp"]},"application/vnd.kde.kword":{"source":"iana","extensions":["kwd","kwt"]},"application/vnd.kenameaapp":{"source":"iana","extensions":["htke"]},"application/vnd.kidspiration":{"source":"iana","extensions":["kia"]},"application/vnd.kinar":{"source":"iana","extensions":["kne","knp"]},"application/vnd.koan":{"source":"iana","extensions":["skp","skd","skt","skm"]},"application/vnd.kodak-descriptor":{"source":"iana","extensions":["sse"]},"application/vnd.las.las+json":{"source":"iana","compressible":true},"application/vnd.las.las+xml":{"source":"iana","compressible":true,"extensions":["lasxml"]},"application/vnd.leap+json":{"source":"iana","compressible":true},"application/vnd.liberty-request+xml":{"source":"iana","compressible":true},"application/vnd.llamagraphics.life-balance.desktop":{"source":"iana","extensions":["lbd"]},"application/vnd.llamagraphics.life-balance.exchange+xml":{"source":"iana","compressible":true,"extensions":["lbe"]},"application/vnd.lotus-1-2-3":{"source":"iana","extensions":["123"]},"application/vnd.lotus-approach":{"source":"iana","extensions":["apr"]},"application/vnd.lotus-freelance":{"source":"iana","extensions":["pre"]},"application/vnd.lotus-notes":{"source":"iana","extensions":["nsf"]},"application/vnd.lotus-organizer":{"source":"iana","extensions":["org"]},"application/vnd.lotus-screencam":{"source":"iana","extensions":["scm"]},"application/vnd.lotus-wordpro":{"source":"iana","extensions":["lwp"]},"application/vnd.macports.portpkg":{"source":"iana","extensions":["portpkg"]},"application/vnd.mapbox-vector-tile":{"source":"iana"},"application/vnd.marlin.drm.actiontoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.conftoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.license+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.mdcf":{"source":"iana"},"application/vnd.mason+json":{"source":"iana","compressible":true},"application/vnd.maxmind.maxmind-db":{"source":"iana"},"application/vnd.mcd":{"source":"iana","extensions":["mcd"]},"application/vnd.medcalcdata":{"source":"iana","extensions":["mc1"]},"application/vnd.mediastation.cdkey":{"source":"iana","extensions":["cdkey"]},"application/vnd.meridian-slingshot":{"source":"iana"},"application/vnd.mfer":{"source":"iana","extensions":["mwf"]},"application/vnd.mfmp":{"source":"iana","extensions":["mfm"]},"application/vnd.micro+json":{"source":"iana","compressible":true},"application/vnd.micrografx.flo":{"source":"iana","extensions":["flo"]},"application/vnd.micrografx.igx":{"source":"iana","extensions":["igx"]},"application/vnd.microsoft.portable-executable":{"source":"iana"},"application/vnd.microsoft.windows.thumbnail-cache":{"source":"iana"},"application/vnd.miele+json":{"source":"iana","compressible":true},"application/vnd.mif":{"source":"iana","extensions":["mif"]},"application/vnd.minisoft-hp3000-save":{"source":"iana"},"application/vnd.mitsubishi.misty-guard.trustweb":{"source":"iana"},"application/vnd.mobius.daf":{"source":"iana","extensions":["daf"]},"application/vnd.mobius.dis":{"source":"iana","extensions":["dis"]},"application/vnd.mobius.mbk":{"source":"iana","extensions":["mbk"]},"application/vnd.mobius.mqy":{"source":"iana","extensions":["mqy"]},"application/vnd.mobius.msl":{"source":"iana","extensions":["msl"]},"application/vnd.mobius.plc":{"source":"iana","extensions":["plc"]},"application/vnd.mobius.txf":{"source":"iana","extensions":["txf"]},"application/vnd.mophun.application":{"source":"iana","extensions":["mpn"]},"application/vnd.mophun.certificate":{"source":"iana","extensions":["mpc"]},"application/vnd.motorola.flexsuite":{"source":"iana"},"application/vnd.motorola.flexsuite.adsi":{"source":"iana"},"application/vnd.motorola.flexsuite.fis":{"source":"iana"},"application/vnd.motorola.flexsuite.gotap":{"source":"iana"},"application/vnd.motorola.flexsuite.kmr":{"source":"iana"},"application/vnd.motorola.flexsuite.ttc":{"source":"iana"},"application/vnd.motorola.flexsuite.wem":{"source":"iana"},"application/vnd.motorola.iprm":{"source":"iana"},"application/vnd.mozilla.xul+xml":{"source":"iana","compressible":true,"extensions":["xul"]},"application/vnd.ms-3mfdocument":{"source":"iana"},"application/vnd.ms-artgalry":{"source":"iana","extensions":["cil"]},"application/vnd.ms-asf":{"source":"iana"},"application/vnd.ms-cab-compressed":{"source":"iana","extensions":["cab"]},"application/vnd.ms-color.iccprofile":{"source":"apache"},"application/vnd.ms-excel":{"source":"iana","compressible":false,"extensions":["xls","xlm","xla","xlc","xlt","xlw"]},"application/vnd.ms-excel.addin.macroenabled.12":{"source":"iana","extensions":["xlam"]},"application/vnd.ms-excel.sheet.binary.macroenabled.12":{"source":"iana","extensions":["xlsb"]},"application/vnd.ms-excel.sheet.macroenabled.12":{"source":"iana","extensions":["xlsm"]},"application/vnd.ms-excel.template.macroenabled.12":{"source":"iana","extensions":["xltm"]},"application/vnd.ms-fontobject":{"source":"iana","compressible":true,"extensions":["eot"]},"application/vnd.ms-htmlhelp":{"source":"iana","extensions":["chm"]},"application/vnd.ms-ims":{"source":"iana","extensions":["ims"]},"application/vnd.ms-lrm":{"source":"iana","extensions":["lrm"]},"application/vnd.ms-office.activex+xml":{"source":"iana","compressible":true},"application/vnd.ms-officetheme":{"source":"iana","extensions":["thmx"]},"application/vnd.ms-opentype":{"source":"apache","compressible":true},"application/vnd.ms-outlook":{"compressible":false,"extensions":["msg"]},"application/vnd.ms-package.obfuscated-opentype":{"source":"apache"},"application/vnd.ms-pki.seccat":{"source":"apache","extensions":["cat"]},"application/vnd.ms-pki.stl":{"source":"apache","extensions":["stl"]},"application/vnd.ms-playready.initiator+xml":{"source":"iana","compressible":true},"application/vnd.ms-powerpoint":{"source":"iana","compressible":false,"extensions":["ppt","pps","pot"]},"application/vnd.ms-powerpoint.addin.macroenabled.12":{"source":"iana","extensions":["ppam"]},"application/vnd.ms-powerpoint.presentation.macroenabled.12":{"source":"iana","extensions":["pptm"]},"application/vnd.ms-powerpoint.slide.macroenabled.12":{"source":"iana","extensions":["sldm"]},"application/vnd.ms-powerpoint.slideshow.macroenabled.12":{"source":"iana","extensions":["ppsm"]},"application/vnd.ms-powerpoint.template.macroenabled.12":{"source":"iana","extensions":["potm"]},"application/vnd.ms-printdevicecapabilities+xml":{"source":"iana","compressible":true},"application/vnd.ms-printing.printticket+xml":{"source":"apache","compressible":true},"application/vnd.ms-printschematicket+xml":{"source":"iana","compressible":true},"application/vnd.ms-project":{"source":"iana","extensions":["mpp","mpt"]},"application/vnd.ms-tnef":{"source":"iana"},"application/vnd.ms-windows.devicepairing":{"source":"iana"},"application/vnd.ms-windows.nwprinting.oob":{"source":"iana"},"application/vnd.ms-windows.printerpairing":{"source":"iana"},"application/vnd.ms-windows.wsd.oob":{"source":"iana"},"application/vnd.ms-wmdrm.lic-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.lic-resp":{"source":"iana"},"application/vnd.ms-wmdrm.meter-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.meter-resp":{"source":"iana"},"application/vnd.ms-word.document.macroenabled.12":{"source":"iana","extensions":["docm"]},"application/vnd.ms-word.template.macroenabled.12":{"source":"iana","extensions":["dotm"]},"application/vnd.ms-works":{"source":"iana","extensions":["wps","wks","wcm","wdb"]},"application/vnd.ms-wpl":{"source":"iana","extensions":["wpl"]},"application/vnd.ms-xpsdocument":{"source":"iana","compressible":false,"extensions":["xps"]},"application/vnd.msa-disk-image":{"source":"iana"},"application/vnd.mseq":{"source":"iana","extensions":["mseq"]},"application/vnd.msign":{"source":"iana"},"application/vnd.multiad.creator":{"source":"iana"},"application/vnd.multiad.creator.cif":{"source":"iana"},"application/vnd.music-niff":{"source":"iana"},"application/vnd.musician":{"source":"iana","extensions":["mus"]},"application/vnd.muvee.style":{"source":"iana","extensions":["msty"]},"application/vnd.mynfc":{"source":"iana","extensions":["taglet"]},"application/vnd.ncd.control":{"source":"iana"},"application/vnd.ncd.reference":{"source":"iana"},"application/vnd.nearst.inv+json":{"source":"iana","compressible":true},"application/vnd.nervana":{"source":"iana"},"application/vnd.netfpx":{"source":"iana"},"application/vnd.neurolanguage.nlu":{"source":"iana","extensions":["nlu"]},"application/vnd.nimn":{"source":"iana"},"application/vnd.nintendo.nitro.rom":{"source":"iana"},"application/vnd.nintendo.snes.rom":{"source":"iana"},"application/vnd.nitf":{"source":"iana","extensions":["ntf","nitf"]},"application/vnd.noblenet-directory":{"source":"iana","extensions":["nnd"]},"application/vnd.noblenet-sealer":{"source":"iana","extensions":["nns"]},"application/vnd.noblenet-web":{"source":"iana","extensions":["nnw"]},"application/vnd.nokia.catalogs":{"source":"iana"},"application/vnd.nokia.conml+wbxml":{"source":"iana"},"application/vnd.nokia.conml+xml":{"source":"iana","compressible":true},"application/vnd.nokia.iptv.config+xml":{"source":"iana","compressible":true},"application/vnd.nokia.isds-radio-presets":{"source":"iana"},"application/vnd.nokia.landmark+wbxml":{"source":"iana"},"application/vnd.nokia.landmark+xml":{"source":"iana","compressible":true},"application/vnd.nokia.landmarkcollection+xml":{"source":"iana","compressible":true},"application/vnd.nokia.n-gage.ac+xml":{"source":"iana","compressible":true},"application/vnd.nokia.n-gage.data":{"source":"iana","extensions":["ngdat"]},"application/vnd.nokia.n-gage.symbian.install":{"source":"iana","extensions":["n-gage"]},"application/vnd.nokia.ncd":{"source":"iana"},"application/vnd.nokia.pcd+wbxml":{"source":"iana"},"application/vnd.nokia.pcd+xml":{"source":"iana","compressible":true},"application/vnd.nokia.radio-preset":{"source":"iana","extensions":["rpst"]},"application/vnd.nokia.radio-presets":{"source":"iana","extensions":["rpss"]},"application/vnd.novadigm.edm":{"source":"iana","extensions":["edm"]},"application/vnd.novadigm.edx":{"source":"iana","extensions":["edx"]},"application/vnd.novadigm.ext":{"source":"iana","extensions":["ext"]},"application/vnd.ntt-local.content-share":{"source":"iana"},"application/vnd.ntt-local.file-transfer":{"source":"iana"},"application/vnd.ntt-local.ogw_remote-access":{"source":"iana"},"application/vnd.ntt-local.sip-ta_remote":{"source":"iana"},"application/vnd.ntt-local.sip-ta_tcp_stream":{"source":"iana"},"application/vnd.oasis.opendocument.chart":{"source":"iana","extensions":["odc"]},"application/vnd.oasis.opendocument.chart-template":{"source":"iana","extensions":["otc"]},"application/vnd.oasis.opendocument.database":{"source":"iana","extensions":["odb"]},"application/vnd.oasis.opendocument.formula":{"source":"iana","extensions":["odf"]},"application/vnd.oasis.opendocument.formula-template":{"source":"iana","extensions":["odft"]},"application/vnd.oasis.opendocument.graphics":{"source":"iana","compressible":false,"extensions":["odg"]},"application/vnd.oasis.opendocument.graphics-template":{"source":"iana","extensions":["otg"]},"application/vnd.oasis.opendocument.image":{"source":"iana","extensions":["odi"]},"application/vnd.oasis.opendocument.image-template":{"source":"iana","extensions":["oti"]},"application/vnd.oasis.opendocument.presentation":{"source":"iana","compressible":false,"extensions":["odp"]},"application/vnd.oasis.opendocument.presentation-template":{"source":"iana","extensions":["otp"]},"application/vnd.oasis.opendocument.spreadsheet":{"source":"iana","compressible":false,"extensions":["ods"]},"application/vnd.oasis.opendocument.spreadsheet-template":{"source":"iana","extensions":["ots"]},"application/vnd.oasis.opendocument.text":{"source":"iana","compressible":false,"extensions":["odt"]},"application/vnd.oasis.opendocument.text-master":{"source":"iana","extensions":["odm"]},"application/vnd.oasis.opendocument.text-template":{"source":"iana","extensions":["ott"]},"application/vnd.oasis.opendocument.text-web":{"source":"iana","extensions":["oth"]},"application/vnd.obn":{"source":"iana"},"application/vnd.ocf+cbor":{"source":"iana"},"application/vnd.oftn.l10n+json":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessdownload+xml":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessstreaming+xml":{"source":"iana","compressible":true},"application/vnd.oipf.cspg-hexbinary":{"source":"iana"},"application/vnd.oipf.dae.svg+xml":{"source":"iana","compressible":true},"application/vnd.oipf.dae.xhtml+xml":{"source":"iana","compressible":true},"application/vnd.oipf.mippvcontrolmessage+xml":{"source":"iana","compressible":true},"application/vnd.oipf.pae.gem":{"source":"iana"},"application/vnd.oipf.spdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.oipf.spdlist+xml":{"source":"iana","compressible":true},"application/vnd.oipf.ueprofile+xml":{"source":"iana","compressible":true},"application/vnd.oipf.userprofile+xml":{"source":"iana","compressible":true},"application/vnd.olpc-sugar":{"source":"iana","extensions":["xo"]},"application/vnd.oma-scws-config":{"source":"iana"},"application/vnd.oma-scws-http-request":{"source":"iana"},"application/vnd.oma-scws-http-response":{"source":"iana"},"application/vnd.oma.bcast.associated-procedure-parameter+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.drm-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.imd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.ltkm":{"source":"iana"},"application/vnd.oma.bcast.notification+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.provisioningtrigger":{"source":"iana"},"application/vnd.oma.bcast.sgboot":{"source":"iana"},"application/vnd.oma.bcast.sgdd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sgdu":{"source":"iana"},"application/vnd.oma.bcast.simple-symbol-container":{"source":"iana"},"application/vnd.oma.bcast.smartcard-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sprov+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.stkm":{"source":"iana"},"application/vnd.oma.cab-address-book+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-feature-handler+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-pcc+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-subs-invite+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-user-prefs+xml":{"source":"iana","compressible":true},"application/vnd.oma.dcd":{"source":"iana"},"application/vnd.oma.dcdc":{"source":"iana"},"application/vnd.oma.dd2+xml":{"source":"iana","compressible":true,"extensions":["dd2"]},"application/vnd.oma.drm.risd+xml":{"source":"iana","compressible":true},"application/vnd.oma.group-usage-list+xml":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+json":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+tlv":{"source":"iana"},"application/vnd.oma.pal+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.detailed-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.final-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.groups+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.invocation-descriptor+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.optimized-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.push":{"source":"iana"},"application/vnd.oma.scidm.messages+xml":{"source":"iana","compressible":true},"application/vnd.oma.xcap-directory+xml":{"source":"iana","compressible":true},"application/vnd.omads-email+xml":{"source":"iana","compressible":true},"application/vnd.omads-file+xml":{"source":"iana","compressible":true},"application/vnd.omads-folder+xml":{"source":"iana","compressible":true},"application/vnd.omaloc-supl-init":{"source":"iana"},"application/vnd.onepager":{"source":"iana"},"application/vnd.onepagertamp":{"source":"iana"},"application/vnd.onepagertamx":{"source":"iana"},"application/vnd.onepagertat":{"source":"iana"},"application/vnd.onepagertatp":{"source":"iana"},"application/vnd.onepagertatx":{"source":"iana"},"application/vnd.openblox.game+xml":{"source":"iana","compressible":true},"application/vnd.openblox.game-binary":{"source":"iana"},"application/vnd.openeye.oeb":{"source":"iana"},"application/vnd.openofficeorg.extension":{"source":"apache","extensions":["oxt"]},"application/vnd.openstreetmap.data+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.custom-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.customxmlproperties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawing+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chart+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.extended-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{"source":"iana","compressible":false,"extensions":["pptx"]},"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slide":{"source":"iana","extensions":["sldx"]},"application/vnd.openxmlformats-officedocument.presentationml.slide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideshow":{"source":"iana","extensions":["ppsx"]},"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tags+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.template":{"source":"iana","extensions":["potx"]},"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{"source":"iana","compressible":false,"extensions":["xlsx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.template":{"source":"iana","extensions":["xltx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.theme+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.themeoverride+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.vmldrawing":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{"source":"iana","compressible":false,"extensions":["docx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.template":{"source":"iana","extensions":["dotx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.core-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.relationships+xml":{"source":"iana","compressible":true},"application/vnd.oracle.resource+json":{"source":"iana","compressible":true},"application/vnd.orange.indata":{"source":"iana"},"application/vnd.osa.netdeploy":{"source":"iana"},"application/vnd.osgeo.mapguide.package":{"source":"iana","extensions":["mgp"]},"application/vnd.osgi.bundle":{"source":"iana"},"application/vnd.osgi.dp":{"source":"iana","extensions":["dp"]},"application/vnd.osgi.subsystem":{"source":"iana","extensions":["esa"]},"application/vnd.otps.ct-kip+xml":{"source":"iana","compressible":true},"application/vnd.oxli.countgraph":{"source":"iana"},"application/vnd.pagerduty+json":{"source":"iana","compressible":true},"application/vnd.palm":{"source":"iana","extensions":["pdb","pqa","oprc"]},"application/vnd.panoply":{"source":"iana"},"application/vnd.paos.xml":{"source":"iana"},"application/vnd.patentdive":{"source":"iana"},"application/vnd.patientecommsdoc":{"source":"iana"},"application/vnd.pawaafile":{"source":"iana","extensions":["paw"]},"application/vnd.pcos":{"source":"iana"},"application/vnd.pg.format":{"source":"iana","extensions":["str"]},"application/vnd.pg.osasli":{"source":"iana","extensions":["ei6"]},"application/vnd.piaccess.application-licence":{"source":"iana"},"application/vnd.picsel":{"source":"iana","extensions":["efif"]},"application/vnd.pmi.widget":{"source":"iana","extensions":["wg"]},"application/vnd.poc.group-advertisement+xml":{"source":"iana","compressible":true},"application/vnd.pocketlearn":{"source":"iana","extensions":["plf"]},"application/vnd.powerbuilder6":{"source":"iana","extensions":["pbd"]},"application/vnd.powerbuilder6-s":{"source":"iana"},"application/vnd.powerbuilder7":{"source":"iana"},"application/vnd.powerbuilder7-s":{"source":"iana"},"application/vnd.powerbuilder75":{"source":"iana"},"application/vnd.powerbuilder75-s":{"source":"iana"},"application/vnd.preminet":{"source":"iana"},"application/vnd.previewsystems.box":{"source":"iana","extensions":["box"]},"application/vnd.proteus.magazine":{"source":"iana","extensions":["mgz"]},"application/vnd.psfs":{"source":"iana"},"application/vnd.publishare-delta-tree":{"source":"iana","extensions":["qps"]},"application/vnd.pvi.ptid1":{"source":"iana","extensions":["ptid"]},"application/vnd.pwg-multiplexed":{"source":"iana"},"application/vnd.pwg-xhtml-print+xml":{"source":"iana","compressible":true},"application/vnd.qualcomm.brew-app-res":{"source":"iana"},"application/vnd.quarantainenet":{"source":"iana"},"application/vnd.quark.quarkxpress":{"source":"iana","extensions":["qxd","qxt","qwd","qwt","qxl","qxb"]},"application/vnd.quobject-quoxdocument":{"source":"iana"},"application/vnd.radisys.moml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conn+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-stream+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-base+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-detect+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-sendrecv+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-group+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-speech+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-transform+xml":{"source":"iana","compressible":true},"application/vnd.rainstor.data":{"source":"iana"},"application/vnd.rapid":{"source":"iana"},"application/vnd.rar":{"source":"iana"},"application/vnd.realvnc.bed":{"source":"iana","extensions":["bed"]},"application/vnd.recordare.musicxml":{"source":"iana","extensions":["mxl"]},"application/vnd.recordare.musicxml+xml":{"source":"iana","compressible":true,"extensions":["musicxml"]},"application/vnd.renlearn.rlprint":{"source":"iana"},"application/vnd.restful+json":{"source":"iana","compressible":true},"application/vnd.rig.cryptonote":{"source":"iana","extensions":["cryptonote"]},"application/vnd.rim.cod":{"source":"apache","extensions":["cod"]},"application/vnd.rn-realmedia":{"source":"apache","extensions":["rm"]},"application/vnd.rn-realmedia-vbr":{"source":"apache","extensions":["rmvb"]},"application/vnd.route66.link66+xml":{"source":"iana","compressible":true,"extensions":["link66"]},"application/vnd.rs-274x":{"source":"iana"},"application/vnd.ruckus.download":{"source":"iana"},"application/vnd.s3sms":{"source":"iana"},"application/vnd.sailingtracker.track":{"source":"iana","extensions":["st"]},"application/vnd.sbm.cid":{"source":"iana"},"application/vnd.sbm.mid2":{"source":"iana"},"application/vnd.scribus":{"source":"iana"},"application/vnd.sealed.3df":{"source":"iana"},"application/vnd.sealed.csf":{"source":"iana"},"application/vnd.sealed.doc":{"source":"iana"},"application/vnd.sealed.eml":{"source":"iana"},"application/vnd.sealed.mht":{"source":"iana"},"application/vnd.sealed.net":{"source":"iana"},"application/vnd.sealed.ppt":{"source":"iana"},"application/vnd.sealed.tiff":{"source":"iana"},"application/vnd.sealed.xls":{"source":"iana"},"application/vnd.sealedmedia.softseal.html":{"source":"iana"},"application/vnd.sealedmedia.softseal.pdf":{"source":"iana"},"application/vnd.seemail":{"source":"iana","extensions":["see"]},"application/vnd.sema":{"source":"iana","extensions":["sema"]},"application/vnd.semd":{"source":"iana","extensions":["semd"]},"application/vnd.semf":{"source":"iana","extensions":["semf"]},"application/vnd.shana.informed.formdata":{"source":"iana","extensions":["ifm"]},"application/vnd.shana.informed.formtemplate":{"source":"iana","extensions":["itp"]},"application/vnd.shana.informed.interchange":{"source":"iana","extensions":["iif"]},"application/vnd.shana.informed.package":{"source":"iana","extensions":["ipk"]},"application/vnd.shootproof+json":{"source":"iana","compressible":true},"application/vnd.sigrok.session":{"source":"iana"},"application/vnd.simtech-mindmapper":{"source":"iana","extensions":["twd","twds"]},"application/vnd.siren+json":{"source":"iana","compressible":true},"application/vnd.smaf":{"source":"iana","extensions":["mmf"]},"application/vnd.smart.notebook":{"source":"iana"},"application/vnd.smart.teacher":{"source":"iana","extensions":["teacher"]},"application/vnd.software602.filler.form+xml":{"source":"iana","compressible":true},"application/vnd.software602.filler.form-xml-zip":{"source":"iana"},"application/vnd.solent.sdkm+xml":{"source":"iana","compressible":true,"extensions":["sdkm","sdkd"]},"application/vnd.spotfire.dxp":{"source":"iana","extensions":["dxp"]},"application/vnd.spotfire.sfs":{"source":"iana","extensions":["sfs"]},"application/vnd.sqlite3":{"source":"iana"},"application/vnd.sss-cod":{"source":"iana"},"application/vnd.sss-dtf":{"source":"iana"},"application/vnd.sss-ntf":{"source":"iana"},"application/vnd.stardivision.calc":{"source":"apache","extensions":["sdc"]},"application/vnd.stardivision.draw":{"source":"apache","extensions":["sda"]},"application/vnd.stardivision.impress":{"source":"apache","extensions":["sdd"]},"application/vnd.stardivision.math":{"source":"apache","extensions":["smf"]},"application/vnd.stardivision.writer":{"source":"apache","extensions":["sdw","vor"]},"application/vnd.stardivision.writer-global":{"source":"apache","extensions":["sgl"]},"application/vnd.stepmania.package":{"source":"iana","extensions":["smzip"]},"application/vnd.stepmania.stepchart":{"source":"iana","extensions":["sm"]},"application/vnd.street-stream":{"source":"iana"},"application/vnd.sun.wadl+xml":{"source":"iana","compressible":true,"extensions":["wadl"]},"application/vnd.sun.xml.calc":{"source":"apache","extensions":["sxc"]},"application/vnd.sun.xml.calc.template":{"source":"apache","extensions":["stc"]},"application/vnd.sun.xml.draw":{"source":"apache","extensions":["sxd"]},"application/vnd.sun.xml.draw.template":{"source":"apache","extensions":["std"]},"application/vnd.sun.xml.impress":{"source":"apache","extensions":["sxi"]},"application/vnd.sun.xml.impress.template":{"source":"apache","extensions":["sti"]},"application/vnd.sun.xml.math":{"source":"apache","extensions":["sxm"]},"application/vnd.sun.xml.writer":{"source":"apache","extensions":["sxw"]},"application/vnd.sun.xml.writer.global":{"source":"apache","extensions":["sxg"]},"application/vnd.sun.xml.writer.template":{"source":"apache","extensions":["stw"]},"application/vnd.sus-calendar":{"source":"iana","extensions":["sus","susp"]},"application/vnd.svd":{"source":"iana","extensions":["svd"]},"application/vnd.swiftview-ics":{"source":"iana"},"application/vnd.symbian.install":{"source":"apache","extensions":["sis","sisx"]},"application/vnd.syncml+xml":{"source":"iana","compressible":true,"extensions":["xsm"]},"application/vnd.syncml.dm+wbxml":{"source":"iana","extensions":["bdm"]},"application/vnd.syncml.dm+xml":{"source":"iana","compressible":true,"extensions":["xdm"]},"application/vnd.syncml.dm.notification":{"source":"iana"},"application/vnd.syncml.dmddf+wbxml":{"source":"iana"},"application/vnd.syncml.dmddf+xml":{"source":"iana","compressible":true},"application/vnd.syncml.dmtnds+wbxml":{"source":"iana"},"application/vnd.syncml.dmtnds+xml":{"source":"iana","compressible":true},"application/vnd.syncml.ds.notification":{"source":"iana"},"application/vnd.tableschema+json":{"source":"iana","compressible":true},"application/vnd.tao.intent-module-archive":{"source":"iana","extensions":["tao"]},"application/vnd.tcpdump.pcap":{"source":"iana","extensions":["pcap","cap","dmp"]},"application/vnd.think-cell.ppttc+json":{"source":"iana","compressible":true},"application/vnd.tmd.mediaflex.api+xml":{"source":"iana","compressible":true},"application/vnd.tml":{"source":"iana"},"application/vnd.tmobile-livetv":{"source":"iana","extensions":["tmo"]},"application/vnd.tri.onesource":{"source":"iana"},"application/vnd.trid.tpt":{"source":"iana","extensions":["tpt"]},"application/vnd.triscape.mxs":{"source":"iana","extensions":["mxs"]},"application/vnd.trueapp":{"source":"iana","extensions":["tra"]},"application/vnd.truedoc":{"source":"iana"},"application/vnd.ubisoft.webplayer":{"source":"iana"},"application/vnd.ufdl":{"source":"iana","extensions":["ufd","ufdl"]},"application/vnd.uiq.theme":{"source":"iana","extensions":["utz"]},"application/vnd.umajin":{"source":"iana","extensions":["umj"]},"application/vnd.unity":{"source":"iana","extensions":["unityweb"]},"application/vnd.uoml+xml":{"source":"iana","compressible":true,"extensions":["uoml"]},"application/vnd.uplanet.alert":{"source":"iana"},"application/vnd.uplanet.alert-wbxml":{"source":"iana"},"application/vnd.uplanet.bearer-choice":{"source":"iana"},"application/vnd.uplanet.bearer-choice-wbxml":{"source":"iana"},"application/vnd.uplanet.cacheop":{"source":"iana"},"application/vnd.uplanet.cacheop-wbxml":{"source":"iana"},"application/vnd.uplanet.channel":{"source":"iana"},"application/vnd.uplanet.channel-wbxml":{"source":"iana"},"application/vnd.uplanet.list":{"source":"iana"},"application/vnd.uplanet.list-wbxml":{"source":"iana"},"application/vnd.uplanet.listcmd":{"source":"iana"},"application/vnd.uplanet.listcmd-wbxml":{"source":"iana"},"application/vnd.uplanet.signal":{"source":"iana"},"application/vnd.uri-map":{"source":"iana"},"application/vnd.valve.source.material":{"source":"iana"},"application/vnd.vcx":{"source":"iana","extensions":["vcx"]},"application/vnd.vd-study":{"source":"iana"},"application/vnd.vectorworks":{"source":"iana"},"application/vnd.vel+json":{"source":"iana","compressible":true},"application/vnd.verimatrix.vcas":{"source":"iana"},"application/vnd.veryant.thin":{"source":"iana"},"application/vnd.vidsoft.vidconference":{"source":"iana"},"application/vnd.visio":{"source":"iana","extensions":["vsd","vst","vss","vsw"]},"application/vnd.visionary":{"source":"iana","extensions":["vis"]},"application/vnd.vividence.scriptfile":{"source":"iana"},"application/vnd.vsf":{"source":"iana","extensions":["vsf"]},"application/vnd.wap.sic":{"source":"iana"},"application/vnd.wap.slc":{"source":"iana"},"application/vnd.wap.wbxml":{"source":"iana","extensions":["wbxml"]},"application/vnd.wap.wmlc":{"source":"iana","extensions":["wmlc"]},"application/vnd.wap.wmlscriptc":{"source":"iana","extensions":["wmlsc"]},"application/vnd.webturbo":{"source":"iana","extensions":["wtb"]},"application/vnd.wfa.p2p":{"source":"iana"},"application/vnd.wfa.wsc":{"source":"iana"},"application/vnd.windows.devicepairing":{"source":"iana"},"application/vnd.wmc":{"source":"iana"},"application/vnd.wmf.bootstrap":{"source":"iana"},"application/vnd.wolfram.mathematica":{"source":"iana"},"application/vnd.wolfram.mathematica.package":{"source":"iana"},"application/vnd.wolfram.player":{"source":"iana","extensions":["nbp"]},"application/vnd.wordperfect":{"source":"iana","extensions":["wpd"]},"application/vnd.wqd":{"source":"iana","extensions":["wqd"]},"application/vnd.wrq-hp3000-labelled":{"source":"iana"},"application/vnd.wt.stf":{"source":"iana","extensions":["stf"]},"application/vnd.wv.csp+wbxml":{"source":"iana"},"application/vnd.wv.csp+xml":{"source":"iana","compressible":true},"application/vnd.wv.ssp+xml":{"source":"iana","compressible":true},"application/vnd.xacml+json":{"source":"iana","compressible":true},"application/vnd.xara":{"source":"iana","extensions":["xar"]},"application/vnd.xfdl":{"source":"iana","extensions":["xfdl"]},"application/vnd.xfdl.webform":{"source":"iana"},"application/vnd.xmi+xml":{"source":"iana","compressible":true},"application/vnd.xmpie.cpkg":{"source":"iana"},"application/vnd.xmpie.dpkg":{"source":"iana"},"application/vnd.xmpie.plan":{"source":"iana"},"application/vnd.xmpie.ppkg":{"source":"iana"},"application/vnd.xmpie.xlim":{"source":"iana"},"application/vnd.yamaha.hv-dic":{"source":"iana","extensions":["hvd"]},"application/vnd.yamaha.hv-script":{"source":"iana","extensions":["hvs"]},"application/vnd.yamaha.hv-voice":{"source":"iana","extensions":["hvp"]},"application/vnd.yamaha.openscoreformat":{"source":"iana","extensions":["osf"]},"application/vnd.yamaha.openscoreformat.osfpvg+xml":{"source":"iana","compressible":true,"extensions":["osfpvg"]},"application/vnd.yamaha.remote-setup":{"source":"iana"},"application/vnd.yamaha.smaf-audio":{"source":"iana","extensions":["saf"]},"application/vnd.yamaha.smaf-phrase":{"source":"iana","extensions":["spf"]},"application/vnd.yamaha.through-ngn":{"source":"iana"},"application/vnd.yamaha.tunnel-udpencap":{"source":"iana"},"application/vnd.yaoweme":{"source":"iana"},"application/vnd.yellowriver-custom-menu":{"source":"iana","extensions":["cmp"]},"application/vnd.youtube.yt":{"source":"iana"},"application/vnd.zul":{"source":"iana","extensions":["zir","zirz"]},"application/vnd.zzazz.deck+xml":{"source":"iana","compressible":true,"extensions":["zaz"]},"application/voicexml+xml":{"source":"iana","compressible":true,"extensions":["vxml"]},"application/voucher-cms+json":{"source":"iana","compressible":true},"application/vq-rtcpxr":{"source":"iana"},"application/wasm":{"compressible":true,"extensions":["wasm"]},"application/watcherinfo+xml":{"source":"iana","compressible":true},"application/webpush-options+json":{"source":"iana","compressible":true},"application/whoispp-query":{"source":"iana"},"application/whoispp-response":{"source":"iana"},"application/widget":{"source":"iana","extensions":["wgt"]},"application/winhlp":{"source":"apache","extensions":["hlp"]},"application/wita":{"source":"iana"},"application/wordperfect5.1":{"source":"iana"},"application/wsdl+xml":{"source":"iana","compressible":true,"extensions":["wsdl"]},"application/wspolicy+xml":{"source":"iana","compressible":true,"extensions":["wspolicy"]},"application/x-7z-compressed":{"source":"apache","compressible":false,"extensions":["7z"]},"application/x-abiword":{"source":"apache","extensions":["abw"]},"application/x-ace-compressed":{"source":"apache","extensions":["ace"]},"application/x-amf":{"source":"apache"},"application/x-apple-diskimage":{"source":"apache","extensions":["dmg"]},"application/x-arj":{"compressible":false,"extensions":["arj"]},"application/x-authorware-bin":{"source":"apache","extensions":["aab","x32","u32","vox"]},"application/x-authorware-map":{"source":"apache","extensions":["aam"]},"application/x-authorware-seg":{"source":"apache","extensions":["aas"]},"application/x-bcpio":{"source":"apache","extensions":["bcpio"]},"application/x-bdoc":{"compressible":false,"extensions":["bdoc"]},"application/x-bittorrent":{"source":"apache","extensions":["torrent"]},"application/x-blorb":{"source":"apache","extensions":["blb","blorb"]},"application/x-bzip":{"source":"apache","compressible":false,"extensions":["bz"]},"application/x-bzip2":{"source":"apache","compressible":false,"extensions":["bz2","boz"]},"application/x-cbr":{"source":"apache","extensions":["cbr","cba","cbt","cbz","cb7"]},"application/x-cdlink":{"source":"apache","extensions":["vcd"]},"application/x-cfs-compressed":{"source":"apache","extensions":["cfs"]},"application/x-chat":{"source":"apache","extensions":["chat"]},"application/x-chess-pgn":{"source":"apache","extensions":["pgn"]},"application/x-chrome-extension":{"extensions":["crx"]},"application/x-cocoa":{"source":"nginx","extensions":["cco"]},"application/x-compress":{"source":"apache"},"application/x-conference":{"source":"apache","extensions":["nsc"]},"application/x-cpio":{"source":"apache","extensions":["cpio"]},"application/x-csh":{"source":"apache","extensions":["csh"]},"application/x-deb":{"compressible":false},"application/x-debian-package":{"source":"apache","extensions":["deb","udeb"]},"application/x-dgc-compressed":{"source":"apache","extensions":["dgc"]},"application/x-director":{"source":"apache","extensions":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"]},"application/x-doom":{"source":"apache","extensions":["wad"]},"application/x-dtbncx+xml":{"source":"apache","compressible":true,"extensions":["ncx"]},"application/x-dtbook+xml":{"source":"apache","compressible":true,"extensions":["dtb"]},"application/x-dtbresource+xml":{"source":"apache","compressible":true,"extensions":["res"]},"application/x-dvi":{"source":"apache","compressible":false,"extensions":["dvi"]},"application/x-envoy":{"source":"apache","extensions":["evy"]},"application/x-eva":{"source":"apache","extensions":["eva"]},"application/x-font-bdf":{"source":"apache","extensions":["bdf"]},"application/x-font-dos":{"source":"apache"},"application/x-font-framemaker":{"source":"apache"},"application/x-font-ghostscript":{"source":"apache","extensions":["gsf"]},"application/x-font-libgrx":{"source":"apache"},"application/x-font-linux-psf":{"source":"apache","extensions":["psf"]},"application/x-font-pcf":{"source":"apache","extensions":["pcf"]},"application/x-font-snf":{"source":"apache","extensions":["snf"]},"application/x-font-speedo":{"source":"apache"},"application/x-font-sunos-news":{"source":"apache"},"application/x-font-type1":{"source":"apache","extensions":["pfa","pfb","pfm","afm"]},"application/x-font-vfont":{"source":"apache"},"application/x-freearc":{"source":"apache","extensions":["arc"]},"application/x-futuresplash":{"source":"apache","extensions":["spl"]},"application/x-gca-compressed":{"source":"apache","extensions":["gca"]},"application/x-glulx":{"source":"apache","extensions":["ulx"]},"application/x-gnumeric":{"source":"apache","extensions":["gnumeric"]},"application/x-gramps-xml":{"source":"apache","extensions":["gramps"]},"application/x-gtar":{"source":"apache","extensions":["gtar"]},"application/x-gzip":{"source":"apache"},"application/x-hdf":{"source":"apache","extensions":["hdf"]},"application/x-httpd-php":{"compressible":true,"extensions":["php"]},"application/x-install-instructions":{"source":"apache","extensions":["install"]},"application/x-iso9660-image":{"source":"apache","extensions":["iso"]},"application/x-java-archive-diff":{"source":"nginx","extensions":["jardiff"]},"application/x-java-jnlp-file":{"source":"apache","compressible":false,"extensions":["jnlp"]},"application/x-javascript":{"compressible":true},"application/x-latex":{"source":"apache","compressible":false,"extensions":["latex"]},"application/x-lua-bytecode":{"extensions":["luac"]},"application/x-lzh-compressed":{"source":"apache","extensions":["lzh","lha"]},"application/x-makeself":{"source":"nginx","extensions":["run"]},"application/x-mie":{"source":"apache","extensions":["mie"]},"application/x-mobipocket-ebook":{"source":"apache","extensions":["prc","mobi"]},"application/x-mpegurl":{"compressible":false},"application/x-ms-application":{"source":"apache","extensions":["application"]},"application/x-ms-shortcut":{"source":"apache","extensions":["lnk"]},"application/x-ms-wmd":{"source":"apache","extensions":["wmd"]},"application/x-ms-wmz":{"source":"apache","extensions":["wmz"]},"application/x-ms-xbap":{"source":"apache","extensions":["xbap"]},"application/x-msaccess":{"source":"apache","extensions":["mdb"]},"application/x-msbinder":{"source":"apache","extensions":["obd"]},"application/x-mscardfile":{"source":"apache","extensions":["crd"]},"application/x-msclip":{"source":"apache","extensions":["clp"]},"application/x-msdos-program":{"extensions":["exe"]},"application/x-msdownload":{"source":"apache","extensions":["exe","dll","com","bat","msi"]},"application/x-msmediaview":{"source":"apache","extensions":["mvb","m13","m14"]},"application/x-msmetafile":{"source":"apache","extensions":["wmf","wmz","emf","emz"]},"application/x-msmoney":{"source":"apache","extensions":["mny"]},"application/x-mspublisher":{"source":"apache","extensions":["pub"]},"application/x-msschedule":{"source":"apache","extensions":["scd"]},"application/x-msterminal":{"source":"apache","extensions":["trm"]},"application/x-mswrite":{"source":"apache","extensions":["wri"]},"application/x-netcdf":{"source":"apache","extensions":["nc","cdf"]},"application/x-ns-proxy-autoconfig":{"compressible":true,"extensions":["pac"]},"application/x-nzb":{"source":"apache","extensions":["nzb"]},"application/x-perl":{"source":"nginx","extensions":["pl","pm"]},"application/x-pilot":{"source":"nginx","extensions":["prc","pdb"]},"application/x-pkcs12":{"source":"apache","compressible":false,"extensions":["p12","pfx"]},"application/x-pkcs7-certificates":{"source":"apache","extensions":["p7b","spc"]},"application/x-pkcs7-certreqresp":{"source":"apache","extensions":["p7r"]},"application/x-rar-compressed":{"source":"apache","compressible":false,"extensions":["rar"]},"application/x-redhat-package-manager":{"source":"nginx","extensions":["rpm"]},"application/x-research-info-systems":{"source":"apache","extensions":["ris"]},"application/x-sea":{"source":"nginx","extensions":["sea"]},"application/x-sh":{"source":"apache","compressible":true,"extensions":["sh"]},"application/x-shar":{"source":"apache","extensions":["shar"]},"application/x-shockwave-flash":{"source":"apache","compressible":false,"extensions":["swf"]},"application/x-silverlight-app":{"source":"apache","extensions":["xap"]},"application/x-sql":{"source":"apache","extensions":["sql"]},"application/x-stuffit":{"source":"apache","compressible":false,"extensions":["sit"]},"application/x-stuffitx":{"source":"apache","extensions":["sitx"]},"application/x-subrip":{"source":"apache","extensions":["srt"]},"application/x-sv4cpio":{"source":"apache","extensions":["sv4cpio"]},"application/x-sv4crc":{"source":"apache","extensions":["sv4crc"]},"application/x-t3vm-image":{"source":"apache","extensions":["t3"]},"application/x-tads":{"source":"apache","extensions":["gam"]},"application/x-tar":{"source":"apache","compressible":true,"extensions":["tar"]},"application/x-tcl":{"source":"apache","extensions":["tcl","tk"]},"application/x-tex":{"source":"apache","extensions":["tex"]},"application/x-tex-tfm":{"source":"apache","extensions":["tfm"]},"application/x-texinfo":{"source":"apache","extensions":["texinfo","texi"]},"application/x-tgif":{"source":"apache","extensions":["obj"]},"application/x-ustar":{"source":"apache","extensions":["ustar"]},"application/x-virtualbox-hdd":{"compressible":true,"extensions":["hdd"]},"application/x-virtualbox-ova":{"compressible":true,"extensions":["ova"]},"application/x-virtualbox-ovf":{"compressible":true,"extensions":["ovf"]},"application/x-virtualbox-vbox":{"compressible":true,"extensions":["vbox"]},"application/x-virtualbox-vbox-extpack":{"compressible":false,"extensions":["vbox-extpack"]},"application/x-virtualbox-vdi":{"compressible":true,"extensions":["vdi"]},"application/x-virtualbox-vhd":{"compressible":true,"extensions":["vhd"]},"application/x-virtualbox-vmdk":{"compressible":true,"extensions":["vmdk"]},"application/x-wais-source":{"source":"apache","extensions":["src"]},"application/x-web-app-manifest+json":{"compressible":true,"extensions":["webapp"]},"application/x-www-form-urlencoded":{"source":"iana","compressible":true},"application/x-x509-ca-cert":{"source":"apache","extensions":["der","crt","pem"]},"application/x-xfig":{"source":"apache","extensions":["fig"]},"application/x-xliff+xml":{"source":"apache","compressible":true,"extensions":["xlf"]},"application/x-xpinstall":{"source":"apache","compressible":false,"extensions":["xpi"]},"application/x-xz":{"source":"apache","extensions":["xz"]},"application/x-zmachine":{"source":"apache","extensions":["z1","z2","z3","z4","z5","z6","z7","z8"]},"application/x400-bp":{"source":"iana"},"application/xacml+xml":{"source":"iana","compressible":true},"application/xaml+xml":{"source":"apache","compressible":true,"extensions":["xaml"]},"application/xcap-att+xml":{"source":"iana","compressible":true},"application/xcap-caps+xml":{"source":"iana","compressible":true},"application/xcap-diff+xml":{"source":"iana","compressible":true,"extensions":["xdf"]},"application/xcap-el+xml":{"source":"iana","compressible":true},"application/xcap-error+xml":{"source":"iana","compressible":true},"application/xcap-ns+xml":{"source":"iana","compressible":true},"application/xcon-conference-info+xml":{"source":"iana","compressible":true},"application/xcon-conference-info-diff+xml":{"source":"iana","compressible":true},"application/xenc+xml":{"source":"iana","compressible":true,"extensions":["xenc"]},"application/xhtml+xml":{"source":"iana","compressible":true,"extensions":["xhtml","xht"]},"application/xhtml-voice+xml":{"source":"apache","compressible":true},"application/xliff+xml":{"source":"iana","compressible":true},"application/xml":{"source":"iana","compressible":true,"extensions":["xml","xsl","xsd","rng"]},"application/xml-dtd":{"source":"iana","compressible":true,"extensions":["dtd"]},"application/xml-external-parsed-entity":{"source":"iana"},"application/xml-patch+xml":{"source":"iana","compressible":true},"application/xmpp+xml":{"source":"iana","compressible":true},"application/xop+xml":{"source":"iana","compressible":true,"extensions":["xop"]},"application/xproc+xml":{"source":"apache","compressible":true,"extensions":["xpl"]},"application/xslt+xml":{"source":"iana","compressible":true,"extensions":["xslt"]},"application/xspf+xml":{"source":"apache","compressible":true,"extensions":["xspf"]},"application/xv+xml":{"source":"iana","compressible":true,"extensions":["mxml","xhvml","xvml","xvm"]},"application/yang":{"source":"iana","extensions":["yang"]},"application/yang-data+json":{"source":"iana","compressible":true},"application/yang-data+xml":{"source":"iana","compressible":true},"application/yang-patch+json":{"source":"iana","compressible":true},"application/yang-patch+xml":{"source":"iana","compressible":true},"application/yin+xml":{"source":"iana","compressible":true,"extensions":["yin"]},"application/zip":{"source":"iana","compressible":false,"extensions":["zip"]},"application/zlib":{"source":"iana"},"application/zstd":{"source":"iana"},"audio/1d-interleaved-parityfec":{"source":"iana"},"audio/32kadpcm":{"source":"iana"},"audio/3gpp":{"source":"iana","compressible":false,"extensions":["3gpp"]},"audio/3gpp2":{"source":"iana"},"audio/aac":{"source":"iana"},"audio/ac3":{"source":"iana"},"audio/adpcm":{"source":"apache","extensions":["adp"]},"audio/amr":{"source":"iana"},"audio/amr-wb":{"source":"iana"},"audio/amr-wb+":{"source":"iana"},"audio/aptx":{"source":"iana"},"audio/asc":{"source":"iana"},"audio/atrac-advanced-lossless":{"source":"iana"},"audio/atrac-x":{"source":"iana"},"audio/atrac3":{"source":"iana"},"audio/basic":{"source":"iana","compressible":false,"extensions":["au","snd"]},"audio/bv16":{"source":"iana"},"audio/bv32":{"source":"iana"},"audio/clearmode":{"source":"iana"},"audio/cn":{"source":"iana"},"audio/dat12":{"source":"iana"},"audio/dls":{"source":"iana"},"audio/dsr-es201108":{"source":"iana"},"audio/dsr-es202050":{"source":"iana"},"audio/dsr-es202211":{"source":"iana"},"audio/dsr-es202212":{"source":"iana"},"audio/dv":{"source":"iana"},"audio/dvi4":{"source":"iana"},"audio/eac3":{"source":"iana"},"audio/encaprtp":{"source":"iana"},"audio/evrc":{"source":"iana"},"audio/evrc-qcp":{"source":"iana"},"audio/evrc0":{"source":"iana"},"audio/evrc1":{"source":"iana"},"audio/evrcb":{"source":"iana"},"audio/evrcb0":{"source":"iana"},"audio/evrcb1":{"source":"iana"},"audio/evrcnw":{"source":"iana"},"audio/evrcnw0":{"source":"iana"},"audio/evrcnw1":{"source":"iana"},"audio/evrcwb":{"source":"iana"},"audio/evrcwb0":{"source":"iana"},"audio/evrcwb1":{"source":"iana"},"audio/evs":{"source":"iana"},"audio/fwdred":{"source":"iana"},"audio/g711-0":{"source":"iana"},"audio/g719":{"source":"iana"},"audio/g722":{"source":"iana"},"audio/g7221":{"source":"iana"},"audio/g723":{"source":"iana"},"audio/g726-16":{"source":"iana"},"audio/g726-24":{"source":"iana"},"audio/g726-32":{"source":"iana"},"audio/g726-40":{"source":"iana"},"audio/g728":{"source":"iana"},"audio/g729":{"source":"iana"},"audio/g7291":{"source":"iana"},"audio/g729d":{"source":"iana"},"audio/g729e":{"source":"iana"},"audio/gsm":{"source":"iana"},"audio/gsm-efr":{"source":"iana"},"audio/gsm-hr-08":{"source":"iana"},"audio/ilbc":{"source":"iana"},"audio/ip-mr_v2.5":{"source":"iana"},"audio/isac":{"source":"apache"},"audio/l16":{"source":"iana"},"audio/l20":{"source":"iana"},"audio/l24":{"source":"iana","compressible":false},"audio/l8":{"source":"iana"},"audio/lpc":{"source":"iana"},"audio/melp":{"source":"iana"},"audio/melp1200":{"source":"iana"},"audio/melp2400":{"source":"iana"},"audio/melp600":{"source":"iana"},"audio/midi":{"source":"apache","extensions":["mid","midi","kar","rmi"]},"audio/mobile-xmf":{"source":"iana"},"audio/mp3":{"compressible":false,"extensions":["mp3"]},"audio/mp4":{"source":"iana","compressible":false,"extensions":["m4a","mp4a"]},"audio/mp4a-latm":{"source":"iana"},"audio/mpa":{"source":"iana"},"audio/mpa-robust":{"source":"iana"},"audio/mpeg":{"source":"iana","compressible":false,"extensions":["mpga","mp2","mp2a","mp3","m2a","m3a"]},"audio/mpeg4-generic":{"source":"iana"},"audio/musepack":{"source":"apache"},"audio/ogg":{"source":"iana","compressible":false,"extensions":["oga","ogg","spx"]},"audio/opus":{"source":"iana"},"audio/parityfec":{"source":"iana"},"audio/pcma":{"source":"iana"},"audio/pcma-wb":{"source":"iana"},"audio/pcmu":{"source":"iana"},"audio/pcmu-wb":{"source":"iana"},"audio/prs.sid":{"source":"iana"},"audio/qcelp":{"source":"iana"},"audio/raptorfec":{"source":"iana"},"audio/red":{"source":"iana"},"audio/rtp-enc-aescm128":{"source":"iana"},"audio/rtp-midi":{"source":"iana"},"audio/rtploopback":{"source":"iana"},"audio/rtx":{"source":"iana"},"audio/s3m":{"source":"apache","extensions":["s3m"]},"audio/silk":{"source":"apache","extensions":["sil"]},"audio/smv":{"source":"iana"},"audio/smv-qcp":{"source":"iana"},"audio/smv0":{"source":"iana"},"audio/sp-midi":{"source":"iana"},"audio/speex":{"source":"iana"},"audio/t140c":{"source":"iana"},"audio/t38":{"source":"iana"},"audio/telephone-event":{"source":"iana"},"audio/tetra_acelp":{"source":"iana"},"audio/tone":{"source":"iana"},"audio/uemclip":{"source":"iana"},"audio/ulpfec":{"source":"iana"},"audio/usac":{"source":"iana"},"audio/vdvi":{"source":"iana"},"audio/vmr-wb":{"source":"iana"},"audio/vnd.3gpp.iufp":{"source":"iana"},"audio/vnd.4sb":{"source":"iana"},"audio/vnd.audiokoz":{"source":"iana"},"audio/vnd.celp":{"source":"iana"},"audio/vnd.cisco.nse":{"source":"iana"},"audio/vnd.cmles.radio-events":{"source":"iana"},"audio/vnd.cns.anp1":{"source":"iana"},"audio/vnd.cns.inf1":{"source":"iana"},"audio/vnd.dece.audio":{"source":"iana","extensions":["uva","uvva"]},"audio/vnd.digital-winds":{"source":"iana","extensions":["eol"]},"audio/vnd.dlna.adts":{"source":"iana"},"audio/vnd.dolby.heaac.1":{"source":"iana"},"audio/vnd.dolby.heaac.2":{"source":"iana"},"audio/vnd.dolby.mlp":{"source":"iana"},"audio/vnd.dolby.mps":{"source":"iana"},"audio/vnd.dolby.pl2":{"source":"iana"},"audio/vnd.dolby.pl2x":{"source":"iana"},"audio/vnd.dolby.pl2z":{"source":"iana"},"audio/vnd.dolby.pulse.1":{"source":"iana"},"audio/vnd.dra":{"source":"iana","extensions":["dra"]},"audio/vnd.dts":{"source":"iana","extensions":["dts"]},"audio/vnd.dts.hd":{"source":"iana","extensions":["dtshd"]},"audio/vnd.dts.uhd":{"source":"iana"},"audio/vnd.dvb.file":{"source":"iana"},"audio/vnd.everad.plj":{"source":"iana"},"audio/vnd.hns.audio":{"source":"iana"},"audio/vnd.lucent.voice":{"source":"iana","extensions":["lvp"]},"audio/vnd.ms-playready.media.pya":{"source":"iana","extensions":["pya"]},"audio/vnd.nokia.mobile-xmf":{"source":"iana"},"audio/vnd.nortel.vbk":{"source":"iana"},"audio/vnd.nuera.ecelp4800":{"source":"iana","extensions":["ecelp4800"]},"audio/vnd.nuera.ecelp7470":{"source":"iana","extensions":["ecelp7470"]},"audio/vnd.nuera.ecelp9600":{"source":"iana","extensions":["ecelp9600"]},"audio/vnd.octel.sbc":{"source":"iana"},"audio/vnd.presonus.multitrack":{"source":"iana"},"audio/vnd.qcelp":{"source":"iana"},"audio/vnd.rhetorex.32kadpcm":{"source":"iana"},"audio/vnd.rip":{"source":"iana","extensions":["rip"]},"audio/vnd.rn-realaudio":{"compressible":false},"audio/vnd.sealedmedia.softseal.mpeg":{"source":"iana"},"audio/vnd.vmx.cvsd":{"source":"iana"},"audio/vnd.wave":{"compressible":false},"audio/vorbis":{"source":"iana","compressible":false},"audio/vorbis-config":{"source":"iana"},"audio/wav":{"compressible":false,"extensions":["wav"]},"audio/wave":{"compressible":false,"extensions":["wav"]},"audio/webm":{"source":"apache","compressible":false,"extensions":["weba"]},"audio/x-aac":{"source":"apache","compressible":false,"extensions":["aac"]},"audio/x-aiff":{"source":"apache","extensions":["aif","aiff","aifc"]},"audio/x-caf":{"source":"apache","compressible":false,"extensions":["caf"]},"audio/x-flac":{"source":"apache","extensions":["flac"]},"audio/x-m4a":{"source":"nginx","extensions":["m4a"]},"audio/x-matroska":{"source":"apache","extensions":["mka"]},"audio/x-mpegurl":{"source":"apache","extensions":["m3u"]},"audio/x-ms-wax":{"source":"apache","extensions":["wax"]},"audio/x-ms-wma":{"source":"apache","extensions":["wma"]},"audio/x-pn-realaudio":{"source":"apache","extensions":["ram","ra"]},"audio/x-pn-realaudio-plugin":{"source":"apache","extensions":["rmp"]},"audio/x-realaudio":{"source":"nginx","extensions":["ra"]},"audio/x-tta":{"source":"apache"},"audio/x-wav":{"source":"apache","extensions":["wav"]},"audio/xm":{"source":"apache","extensions":["xm"]},"chemical/x-cdx":{"source":"apache","extensions":["cdx"]},"chemical/x-cif":{"source":"apache","extensions":["cif"]},"chemical/x-cmdf":{"source":"apache","extensions":["cmdf"]},"chemical/x-cml":{"source":"apache","extensions":["cml"]},"chemical/x-csml":{"source":"apache","extensions":["csml"]},"chemical/x-pdb":{"source":"apache"},"chemical/x-xyz":{"source":"apache","extensions":["xyz"]},"font/collection":{"source":"iana","extensions":["ttc"]},"font/otf":{"source":"iana","compressible":true,"extensions":["otf"]},"font/sfnt":{"source":"iana"},"font/ttf":{"source":"iana","extensions":["ttf"]},"font/woff":{"source":"iana","extensions":["woff"]},"font/woff2":{"source":"iana","extensions":["woff2"]},"image/aces":{"source":"iana","extensions":["exr"]},"image/apng":{"compressible":false,"extensions":["apng"]},"image/avci":{"source":"iana"},"image/avcs":{"source":"iana"},"image/bmp":{"source":"iana","compressible":true,"extensions":["bmp"]},"image/cgm":{"source":"iana","extensions":["cgm"]},"image/dicom-rle":{"source":"iana","extensions":["drle"]},"image/emf":{"source":"iana","extensions":["emf"]},"image/fits":{"source":"iana","extensions":["fits"]},"image/g3fax":{"source":"iana","extensions":["g3"]},"image/gif":{"source":"iana","compressible":false,"extensions":["gif"]},"image/heic":{"source":"iana","extensions":["heic"]},"image/heic-sequence":{"source":"iana","extensions":["heics"]},"image/heif":{"source":"iana","extensions":["heif"]},"image/heif-sequence":{"source":"iana","extensions":["heifs"]},"image/ief":{"source":"iana","extensions":["ief"]},"image/jls":{"source":"iana","extensions":["jls"]},"image/jp2":{"source":"iana","compressible":false,"extensions":["jp2","jpg2"]},"image/jpeg":{"source":"iana","compressible":false,"extensions":["jpeg","jpg","jpe"]},"image/jpm":{"source":"iana","compressible":false,"extensions":["jpm"]},"image/jpx":{"source":"iana","compressible":false,"extensions":["jpx","jpf"]},"image/jxr":{"source":"iana","extensions":["jxr"]},"image/ktx":{"source":"iana","extensions":["ktx"]},"image/naplps":{"source":"iana"},"image/pjpeg":{"compressible":false},"image/png":{"source":"iana","compressible":false,"extensions":["png"]},"image/prs.btif":{"source":"iana","extensions":["btif"]},"image/prs.pti":{"source":"iana","extensions":["pti"]},"image/pwg-raster":{"source":"iana"},"image/sgi":{"source":"apache","extensions":["sgi"]},"image/svg+xml":{"source":"iana","compressible":true,"extensions":["svg","svgz"]},"image/t38":{"source":"iana","extensions":["t38"]},"image/tiff":{"source":"iana","compressible":false,"extensions":["tif","tiff"]},"image/tiff-fx":{"source":"iana","extensions":["tfx"]},"image/vnd.adobe.photoshop":{"source":"iana","compressible":true,"extensions":["psd"]},"image/vnd.airzip.accelerator.azv":{"source":"iana","extensions":["azv"]},"image/vnd.cns.inf2":{"source":"iana"},"image/vnd.dece.graphic":{"source":"iana","extensions":["uvi","uvvi","uvg","uvvg"]},"image/vnd.djvu":{"source":"iana","extensions":["djvu","djv"]},"image/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"image/vnd.dwg":{"source":"iana","extensions":["dwg"]},"image/vnd.dxf":{"source":"iana","extensions":["dxf"]},"image/vnd.fastbidsheet":{"source":"iana","extensions":["fbs"]},"image/vnd.fpx":{"source":"iana","extensions":["fpx"]},"image/vnd.fst":{"source":"iana","extensions":["fst"]},"image/vnd.fujixerox.edmics-mmr":{"source":"iana","extensions":["mmr"]},"image/vnd.fujixerox.edmics-rlc":{"source":"iana","extensions":["rlc"]},"image/vnd.globalgraphics.pgb":{"source":"iana"},"image/vnd.microsoft.icon":{"source":"iana","extensions":["ico"]},"image/vnd.mix":{"source":"iana"},"image/vnd.mozilla.apng":{"source":"iana"},"image/vnd.ms-modi":{"source":"iana","extensions":["mdi"]},"image/vnd.ms-photo":{"source":"apache","extensions":["wdp"]},"image/vnd.net-fpx":{"source":"iana","extensions":["npx"]},"image/vnd.radiance":{"source":"iana"},"image/vnd.sealed.png":{"source":"iana"},"image/vnd.sealedmedia.softseal.gif":{"source":"iana"},"image/vnd.sealedmedia.softseal.jpg":{"source":"iana"},"image/vnd.svf":{"source":"iana"},"image/vnd.tencent.tap":{"source":"iana","extensions":["tap"]},"image/vnd.valve.source.texture":{"source":"iana","extensions":["vtf"]},"image/vnd.wap.wbmp":{"source":"iana","extensions":["wbmp"]},"image/vnd.xiff":{"source":"iana","extensions":["xif"]},"image/vnd.zbrush.pcx":{"source":"iana","extensions":["pcx"]},"image/webp":{"source":"apache","extensions":["webp"]},"image/wmf":{"source":"iana","extensions":["wmf"]},"image/x-3ds":{"source":"apache","extensions":["3ds"]},"image/x-cmu-raster":{"source":"apache","extensions":["ras"]},"image/x-cmx":{"source":"apache","extensions":["cmx"]},"image/x-freehand":{"source":"apache","extensions":["fh","fhc","fh4","fh5","fh7"]},"image/x-icon":{"source":"apache","compressible":true,"extensions":["ico"]},"image/x-jng":{"source":"nginx","extensions":["jng"]},"image/x-mrsid-image":{"source":"apache","extensions":["sid"]},"image/x-ms-bmp":{"source":"nginx","compressible":true,"extensions":["bmp"]},"image/x-pcx":{"source":"apache","extensions":["pcx"]},"image/x-pict":{"source":"apache","extensions":["pic","pct"]},"image/x-portable-anymap":{"source":"apache","extensions":["pnm"]},"image/x-portable-bitmap":{"source":"apache","extensions":["pbm"]},"image/x-portable-graymap":{"source":"apache","extensions":["pgm"]},"image/x-portable-pixmap":{"source":"apache","extensions":["ppm"]},"image/x-rgb":{"source":"apache","extensions":["rgb"]},"image/x-tga":{"source":"apache","extensions":["tga"]},"image/x-xbitmap":{"source":"apache","extensions":["xbm"]},"image/x-xcf":{"compressible":false},"image/x-xpixmap":{"source":"apache","extensions":["xpm"]},"image/x-xwindowdump":{"source":"apache","extensions":["xwd"]},"message/cpim":{"source":"iana"},"message/delivery-status":{"source":"iana"},"message/disposition-notification":{"source":"iana","extensions":["disposition-notification"]},"message/external-body":{"source":"iana"},"message/feedback-report":{"source":"iana"},"message/global":{"source":"iana","extensions":["u8msg"]},"message/global-delivery-status":{"source":"iana","extensions":["u8dsn"]},"message/global-disposition-notification":{"source":"iana","extensions":["u8mdn"]},"message/global-headers":{"source":"iana","extensions":["u8hdr"]},"message/http":{"source":"iana","compressible":false},"message/imdn+xml":{"source":"iana","compressible":true},"message/news":{"source":"iana"},"message/partial":{"source":"iana","compressible":false},"message/rfc822":{"source":"iana","compressible":true,"extensions":["eml","mime"]},"message/s-http":{"source":"iana"},"message/sip":{"source":"iana"},"message/sipfrag":{"source":"iana"},"message/tracking-status":{"source":"iana"},"message/vnd.si.simp":{"source":"iana"},"message/vnd.wfa.wsc":{"source":"iana","extensions":["wsc"]},"model/3mf":{"source":"iana","extensions":["3mf"]},"model/gltf+json":{"source":"iana","compressible":true,"extensions":["gltf"]},"model/gltf-binary":{"source":"iana","compressible":true,"extensions":["glb"]},"model/iges":{"source":"iana","compressible":false,"extensions":["igs","iges"]},"model/mesh":{"source":"iana","compressible":false,"extensions":["msh","mesh","silo"]},"model/stl":{"source":"iana","extensions":["stl"]},"model/vnd.collada+xml":{"source":"iana","compressible":true,"extensions":["dae"]},"model/vnd.dwf":{"source":"iana","extensions":["dwf"]},"model/vnd.flatland.3dml":{"source":"iana"},"model/vnd.gdl":{"source":"iana","extensions":["gdl"]},"model/vnd.gs-gdl":{"source":"apache"},"model/vnd.gs.gdl":{"source":"iana"},"model/vnd.gtw":{"source":"iana","extensions":["gtw"]},"model/vnd.moml+xml":{"source":"iana","compressible":true},"model/vnd.mts":{"source":"iana","extensions":["mts"]},"model/vnd.opengex":{"source":"iana","extensions":["ogex"]},"model/vnd.parasolid.transmit.binary":{"source":"iana","extensions":["x_b"]},"model/vnd.parasolid.transmit.text":{"source":"iana","extensions":["x_t"]},"model/vnd.rosette.annotated-data-model":{"source":"iana"},"model/vnd.usdz+zip":{"source":"iana","compressible":false,"extensions":["usdz"]},"model/vnd.valve.source.compiled-map":{"source":"iana","extensions":["bsp"]},"model/vnd.vtu":{"source":"iana","extensions":["vtu"]},"model/vrml":{"source":"iana","compressible":false,"extensions":["wrl","vrml"]},"model/x3d+binary":{"source":"apache","compressible":false,"extensions":["x3db","x3dbz"]},"model/x3d+fastinfoset":{"source":"iana","extensions":["x3db"]},"model/x3d+vrml":{"source":"apache","compressible":false,"extensions":["x3dv","x3dvz"]},"model/x3d+xml":{"source":"iana","compressible":true,"extensions":["x3d","x3dz"]},"model/x3d-vrml":{"source":"iana","extensions":["x3dv"]},"multipart/alternative":{"source":"iana","compressible":false},"multipart/appledouble":{"source":"iana"},"multipart/byteranges":{"source":"iana"},"multipart/digest":{"source":"iana"},"multipart/encrypted":{"source":"iana","compressible":false},"multipart/form-data":{"source":"iana","compressible":false},"multipart/header-set":{"source":"iana"},"multipart/mixed":{"source":"iana","compressible":false},"multipart/multilingual":{"source":"iana"},"multipart/parallel":{"source":"iana"},"multipart/related":{"source":"iana","compressible":false},"multipart/report":{"source":"iana"},"multipart/signed":{"source":"iana","compressible":false},"multipart/vnd.bint.med-plus":{"source":"iana"},"multipart/voice-message":{"source":"iana"},"multipart/x-mixed-replace":{"source":"iana"},"text/1d-interleaved-parityfec":{"source":"iana"},"text/cache-manifest":{"source":"iana","compressible":true,"extensions":["appcache","manifest"]},"text/calendar":{"source":"iana","extensions":["ics","ifb"]},"text/calender":{"compressible":true},"text/cmd":{"compressible":true},"text/coffeescript":{"extensions":["coffee","litcoffee"]},"text/css":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["css"]},"text/csv":{"source":"iana","compressible":true,"extensions":["csv"]},"text/csv-schema":{"source":"iana"},"text/directory":{"source":"iana"},"text/dns":{"source":"iana"},"text/ecmascript":{"source":"iana"},"text/encaprtp":{"source":"iana"},"text/enriched":{"source":"iana"},"text/fwdred":{"source":"iana"},"text/grammar-ref-list":{"source":"iana"},"text/html":{"source":"iana","compressible":true,"extensions":["html","htm","shtml"]},"text/jade":{"extensions":["jade"]},"text/javascript":{"source":"iana","compressible":true},"text/jcr-cnd":{"source":"iana"},"text/jsx":{"compressible":true,"extensions":["jsx"]},"text/less":{"compressible":true,"extensions":["less"]},"text/markdown":{"source":"iana","compressible":true,"extensions":["markdown","md"]},"text/mathml":{"source":"nginx","extensions":["mml"]},"text/mdx":{"compressible":true,"extensions":["mdx"]},"text/mizar":{"source":"iana"},"text/n3":{"source":"iana","compressible":true,"extensions":["n3"]},"text/parameters":{"source":"iana"},"text/parityfec":{"source":"iana"},"text/plain":{"source":"iana","compressible":true,"extensions":["txt","text","conf","def","list","log","in","ini"]},"text/provenance-notation":{"source":"iana"},"text/prs.fallenstein.rst":{"source":"iana"},"text/prs.lines.tag":{"source":"iana","extensions":["dsc"]},"text/prs.prop.logic":{"source":"iana"},"text/raptorfec":{"source":"iana"},"text/red":{"source":"iana"},"text/rfc822-headers":{"source":"iana"},"text/richtext":{"source":"iana","compressible":true,"extensions":["rtx"]},"text/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"text/rtp-enc-aescm128":{"source":"iana"},"text/rtploopback":{"source":"iana"},"text/rtx":{"source":"iana"},"text/sgml":{"source":"iana","extensions":["sgml","sgm"]},"text/shex":{"extensions":["shex"]},"text/slim":{"extensions":["slim","slm"]},"text/strings":{"source":"iana"},"text/stylus":{"extensions":["stylus","styl"]},"text/t140":{"source":"iana"},"text/tab-separated-values":{"source":"iana","compressible":true,"extensions":["tsv"]},"text/troff":{"source":"iana","extensions":["t","tr","roff","man","me","ms"]},"text/turtle":{"source":"iana","charset":"UTF-8","extensions":["ttl"]},"text/ulpfec":{"source":"iana"},"text/uri-list":{"source":"iana","compressible":true,"extensions":["uri","uris","urls"]},"text/vcard":{"source":"iana","compressible":true,"extensions":["vcard"]},"text/vnd.a":{"source":"iana"},"text/vnd.abc":{"source":"iana"},"text/vnd.ascii-art":{"source":"iana"},"text/vnd.curl":{"source":"iana","extensions":["curl"]},"text/vnd.curl.dcurl":{"source":"apache","extensions":["dcurl"]},"text/vnd.curl.mcurl":{"source":"apache","extensions":["mcurl"]},"text/vnd.curl.scurl":{"source":"apache","extensions":["scurl"]},"text/vnd.debian.copyright":{"source":"iana"},"text/vnd.dmclientscript":{"source":"iana"},"text/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"text/vnd.esmertec.theme-descriptor":{"source":"iana"},"text/vnd.fly":{"source":"iana","extensions":["fly"]},"text/vnd.fmi.flexstor":{"source":"iana","extensions":["flx"]},"text/vnd.gml":{"source":"iana"},"text/vnd.graphviz":{"source":"iana","extensions":["gv"]},"text/vnd.hgl":{"source":"iana"},"text/vnd.in3d.3dml":{"source":"iana","extensions":["3dml"]},"text/vnd.in3d.spot":{"source":"iana","extensions":["spot"]},"text/vnd.iptc.newsml":{"source":"iana"},"text/vnd.iptc.nitf":{"source":"iana"},"text/vnd.latex-z":{"source":"iana"},"text/vnd.motorola.reflex":{"source":"iana"},"text/vnd.ms-mediapackage":{"source":"iana"},"text/vnd.net2phone.commcenter.command":{"source":"iana"},"text/vnd.radisys.msml-basic-layout":{"source":"iana"},"text/vnd.senx.warpscript":{"source":"iana"},"text/vnd.si.uricatalogue":{"source":"iana"},"text/vnd.sun.j2me.app-descriptor":{"source":"iana","extensions":["jad"]},"text/vnd.trolltech.linguist":{"source":"iana"},"text/vnd.wap.si":{"source":"iana"},"text/vnd.wap.sl":{"source":"iana"},"text/vnd.wap.wml":{"source":"iana","extensions":["wml"]},"text/vnd.wap.wmlscript":{"source":"iana","extensions":["wmls"]},"text/vtt":{"charset":"UTF-8","compressible":true,"extensions":["vtt"]},"text/x-asm":{"source":"apache","extensions":["s","asm"]},"text/x-c":{"source":"apache","extensions":["c","cc","cxx","cpp","h","hh","dic"]},"text/x-component":{"source":"nginx","extensions":["htc"]},"text/x-fortran":{"source":"apache","extensions":["f","for","f77","f90"]},"text/x-gwt-rpc":{"compressible":true},"text/x-handlebars-template":{"extensions":["hbs"]},"text/x-java-source":{"source":"apache","extensions":["java"]},"text/x-jquery-tmpl":{"compressible":true},"text/x-lua":{"extensions":["lua"]},"text/x-markdown":{"compressible":true,"extensions":["mkd"]},"text/x-nfo":{"source":"apache","extensions":["nfo"]},"text/x-opml":{"source":"apache","extensions":["opml"]},"text/x-org":{"compressible":true,"extensions":["org"]},"text/x-pascal":{"source":"apache","extensions":["p","pas"]},"text/x-processing":{"compressible":true,"extensions":["pde"]},"text/x-sass":{"extensions":["sass"]},"text/x-scss":{"extensions":["scss"]},"text/x-setext":{"source":"apache","extensions":["etx"]},"text/x-sfv":{"source":"apache","extensions":["sfv"]},"text/x-suse-ymp":{"compressible":true,"extensions":["ymp"]},"text/x-uuencode":{"source":"apache","extensions":["uu"]},"text/x-vcalendar":{"source":"apache","extensions":["vcs"]},"text/x-vcard":{"source":"apache","extensions":["vcf"]},"text/xml":{"source":"iana","compressible":true,"extensions":["xml"]},"text/xml-external-parsed-entity":{"source":"iana"},"text/yaml":{"extensions":["yaml","yml"]},"video/1d-interleaved-parityfec":{"source":"iana"},"video/3gpp":{"source":"iana","extensions":["3gp","3gpp"]},"video/3gpp-tt":{"source":"iana"},"video/3gpp2":{"source":"iana","extensions":["3g2"]},"video/bmpeg":{"source":"iana"},"video/bt656":{"source":"iana"},"video/celb":{"source":"iana"},"video/dv":{"source":"iana"},"video/encaprtp":{"source":"iana"},"video/h261":{"source":"iana","extensions":["h261"]},"video/h263":{"source":"iana","extensions":["h263"]},"video/h263-1998":{"source":"iana"},"video/h263-2000":{"source":"iana"},"video/h264":{"source":"iana","extensions":["h264"]},"video/h264-rcdo":{"source":"iana"},"video/h264-svc":{"source":"iana"},"video/h265":{"source":"iana"},"video/iso.segment":{"source":"iana"},"video/jpeg":{"source":"iana","extensions":["jpgv"]},"video/jpeg2000":{"source":"iana"},"video/jpm":{"source":"apache","extensions":["jpm","jpgm"]},"video/mj2":{"source":"iana","extensions":["mj2","mjp2"]},"video/mp1s":{"source":"iana"},"video/mp2p":{"source":"iana"},"video/mp2t":{"source":"iana","extensions":["ts"]},"video/mp4":{"source":"iana","compressible":false,"extensions":["mp4","mp4v","mpg4"]},"video/mp4v-es":{"source":"iana"},"video/mpeg":{"source":"iana","compressible":false,"extensions":["mpeg","mpg","mpe","m1v","m2v"]},"video/mpeg4-generic":{"source":"iana"},"video/mpv":{"source":"iana"},"video/nv":{"source":"iana"},"video/ogg":{"source":"iana","compressible":false,"extensions":["ogv"]},"video/parityfec":{"source":"iana"},"video/pointer":{"source":"iana"},"video/quicktime":{"source":"iana","compressible":false,"extensions":["qt","mov"]},"video/raptorfec":{"source":"iana"},"video/raw":{"source":"iana"},"video/rtp-enc-aescm128":{"source":"iana"},"video/rtploopback":{"source":"iana"},"video/rtx":{"source":"iana"},"video/smpte291":{"source":"iana"},"video/smpte292m":{"source":"iana"},"video/ulpfec":{"source":"iana"},"video/vc1":{"source":"iana"},"video/vc2":{"source":"iana"},"video/vnd.cctv":{"source":"iana"},"video/vnd.dece.hd":{"source":"iana","extensions":["uvh","uvvh"]},"video/vnd.dece.mobile":{"source":"iana","extensions":["uvm","uvvm"]},"video/vnd.dece.mp4":{"source":"iana"},"video/vnd.dece.pd":{"source":"iana","extensions":["uvp","uvvp"]},"video/vnd.dece.sd":{"source":"iana","extensions":["uvs","uvvs"]},"video/vnd.dece.video":{"source":"iana","extensions":["uvv","uvvv"]},"video/vnd.directv.mpeg":{"source":"iana"},"video/vnd.directv.mpeg-tts":{"source":"iana"},"video/vnd.dlna.mpeg-tts":{"source":"iana"},"video/vnd.dvb.file":{"source":"iana","extensions":["dvb"]},"video/vnd.fvt":{"source":"iana","extensions":["fvt"]},"video/vnd.hns.video":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.ttsavc":{"source":"iana"},"video/vnd.iptvforum.ttsmpeg2":{"source":"iana"},"video/vnd.motorola.video":{"source":"iana"},"video/vnd.motorola.videop":{"source":"iana"},"video/vnd.mpegurl":{"source":"iana","extensions":["mxu","m4u"]},"video/vnd.ms-playready.media.pyv":{"source":"iana","extensions":["pyv"]},"video/vnd.nokia.interleaved-multimedia":{"source":"iana"},"video/vnd.nokia.mp4vr":{"source":"iana"},"video/vnd.nokia.videovoip":{"source":"iana"},"video/vnd.objectvideo":{"source":"iana"},"video/vnd.radgamettools.bink":{"source":"iana"},"video/vnd.radgamettools.smacker":{"source":"iana"},"video/vnd.sealed.mpeg1":{"source":"iana"},"video/vnd.sealed.mpeg4":{"source":"iana"},"video/vnd.sealed.swf":{"source":"iana"},"video/vnd.sealedmedia.softseal.mov":{"source":"iana"},"video/vnd.uvvu.mp4":{"source":"iana","extensions":["uvu","uvvu"]},"video/vnd.vivo":{"source":"iana","extensions":["viv"]},"video/vp8":{"source":"iana"},"video/webm":{"source":"apache","compressible":false,"extensions":["webm"]},"video/x-f4v":{"source":"apache","extensions":["f4v"]},"video/x-fli":{"source":"apache","extensions":["fli"]},"video/x-flv":{"source":"apache","compressible":false,"extensions":["flv"]},"video/x-m4v":{"source":"apache","extensions":["m4v"]},"video/x-matroska":{"source":"apache","compressible":false,"extensions":["mkv","mk3d","mks"]},"video/x-mng":{"source":"apache","extensions":["mng"]},"video/x-ms-asf":{"source":"apache","extensions":["asf","asx"]},"video/x-ms-vob":{"source":"apache","extensions":["vob"]},"video/x-ms-wm":{"source":"apache","extensions":["wm"]},"video/x-ms-wmv":{"source":"apache","compressible":false,"extensions":["wmv"]},"video/x-ms-wmx":{"source":"apache","extensions":["wmx"]},"video/x-ms-wvx":{"source":"apache","extensions":["wvx"]},"video/x-msvideo":{"source":"apache","extensions":["avi"]},"video/x-sgi-movie":{"source":"apache","extensions":["movie"]},"video/x-smv":{"source":"apache","extensions":["smv"]},"x-conference/x-cooltalk":{"source":"apache","extensions":["ice"]},"x-shader/x-fragment":{"compressible":true},"x-shader/x-vertex":{"compressible":true}};

/***/ }),

/***/ "./node_modules/mime-db/index.js":
/*!***************************************!*\
  !*** ./node_modules/mime-db/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */

/**
 * Module exports.
 */

module.exports = __webpack_require__(/*! ./db.json */ "./node_modules/mime-db/db.json")


/***/ }),

/***/ "./node_modules/mime-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/mime-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var db = __webpack_require__(/*! mime-db */ "./node_modules/mime-db/index.js")
var extname = __webpack_require__(/*! path */ "path").extname

/**
 * Module variables.
 * @private
 */

var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/
var TEXT_TYPE_REGEXP = /^text\//i

/**
 * Module exports.
 * @public
 */

exports.charset = charset
exports.charsets = { lookup: charset }
exports.contentType = contentType
exports.extension = extension
exports.extensions = Object.create(null)
exports.lookup = lookup
exports.types = Object.create(null)

// Populate the extensions/types maps
populateMaps(exports.extensions, exports.types)

/**
 * Get the default charset for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function charset (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type)
  var mime = match && db[match[1].toLowerCase()]

  if (mime && mime.charset) {
    return mime.charset
  }

  // default text/* to utf-8
  if (match && TEXT_TYPE_REGEXP.test(match[1])) {
    return 'UTF-8'
  }

  return false
}

/**
 * Create a full Content-Type header given a MIME type or extension.
 *
 * @param {string} str
 * @return {boolean|string}
 */

function contentType (str) {
  // TODO: should this even be in this module?
  if (!str || typeof str !== 'string') {
    return false
  }

  var mime = str.indexOf('/') === -1
    ? exports.lookup(str)
    : str

  if (!mime) {
    return false
  }

  // TODO: use content-type or other module
  if (mime.indexOf('charset') === -1) {
    var charset = exports.charset(mime)
    if (charset) mime += '; charset=' + charset.toLowerCase()
  }

  return mime
}

/**
 * Get the default extension for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function extension (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type)

  // get extensions
  var exts = match && exports.extensions[match[1].toLowerCase()]

  if (!exts || !exts.length) {
    return false
  }

  return exts[0]
}

/**
 * Lookup the MIME type for a file path/extension.
 *
 * @param {string} path
 * @return {boolean|string}
 */

function lookup (path) {
  if (!path || typeof path !== 'string') {
    return false
  }

  // get the extension ("ext" or ".ext" or full path)
  var extension = extname('x.' + path)
    .toLowerCase()
    .substr(1)

  if (!extension) {
    return false
  }

  return exports.types[extension] || false
}

/**
 * Populate the extensions and types maps.
 * @private
 */

function populateMaps (extensions, types) {
  // source preference (least -> most)
  var preference = ['nginx', 'apache', undefined, 'iana']

  Object.keys(db).forEach(function forEachMimeType (type) {
    var mime = db[type]
    var exts = mime.extensions

    if (!exts || !exts.length) {
      return
    }

    // mime -> extensions
    extensions[type] = exts

    // extension -> mime
    for (var i = 0; i < exts.length; i++) {
      var extension = exts[i]

      if (types[extension]) {
        var from = preference.indexOf(db[types[extension]].source)
        var to = preference.indexOf(mime.source)

        if (types[extension] !== 'application/octet-stream' &&
          (from > to || (from === to && types[extension].substr(0, 12) === 'application/'))) {
          // skip the remapping
          continue
        }
      }

      // set the extension -> mime
      types[extension] = type
    }
  })
}


/***/ }),

/***/ "./node_modules/node-fetch/lib/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/node-fetch/lib/index.mjs ***!
  \***********************************************/
/*! exports provided: default, Headers, Request, Response, FetchError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchError", function() { return FetchError; });
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stream */ "stream");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! https */ "https");
/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zlib */ "zlib");






// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = stream__WEBPACK_IMPORTED_MODULE_0__.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = stream__WEBPACK_IMPORTED_MODULE_0__.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof stream__WEBPACK_IMPORTED_MODULE_0__)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__ && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http__WEBPACK_IMPORTED_MODULE_1__.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = url__WEBPACK_IMPORTED_MODULE_2__.parse;
const format_url = url__WEBPACK_IMPORTED_MODULE_2__.format;

const streamDestructionSupported = 'destroy' in stream__WEBPACK_IMPORTED_MODULE_0__.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof stream__WEBPACK_IMPORTED_MODULE_0__.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = stream__WEBPACK_IMPORTED_MODULE_0__.PassThrough;
const resolve_url = url__WEBPACK_IMPORTED_MODULE_2__.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https__WEBPACK_IMPORTED_MODULE_3__ : http__WEBPACK_IMPORTED_MODULE_1__).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof stream__WEBPACK_IMPORTED_MODULE_0__.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib__WEBPACK_IMPORTED_MODULE_4__.Z_SYNC_FLUSH,
				finishFlush: zlib__WEBPACK_IMPORTED_MODULE_4__.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createInflate());
					} else {
						body = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib__WEBPACK_IMPORTED_MODULE_4__.createBrotliDecompress === 'function') {
				body = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

/* harmony default export */ __webpack_exports__["default"] = (fetch);



/***/ }),

/***/ "./node_modules/sax/lib/sax.js":
/*!*************************************!*\
  !*** ./node_modules/sax/lib/sax.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (sax) { // wrapper for non-node envs
  sax.parser = function (strict, opt) { return new SAXParser(strict, opt) }
  sax.SAXParser = SAXParser
  sax.SAXStream = SAXStream
  sax.createStream = createStream

  // When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
  // When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
  // since that's the earliest that a buffer overrun could occur.  This way, checks are
  // as rare as required, but as often as necessary to ensure never crossing this bound.
  // Furthermore, buffers are only tested at most once per write(), so passing a very
  // large string into write() might have undesirable effects, but this is manageable by
  // the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
  // edge case, result in creating at most one complete copy of the string passed in.
  // Set to Infinity to have unlimited buffers.
  sax.MAX_BUFFER_LENGTH = 64 * 1024

  var buffers = [
    'comment', 'sgmlDecl', 'textNode', 'tagName', 'doctype',
    'procInstName', 'procInstBody', 'entity', 'attribName',
    'attribValue', 'cdata', 'script'
  ]

  sax.EVENTS = [
    'text',
    'processinginstruction',
    'sgmldeclaration',
    'doctype',
    'comment',
    'opentagstart',
    'attribute',
    'opentag',
    'closetag',
    'opencdata',
    'cdata',
    'closecdata',
    'error',
    'end',
    'ready',
    'script',
    'opennamespace',
    'closenamespace'
  ]

  function SAXParser (strict, opt) {
    if (!(this instanceof SAXParser)) {
      return new SAXParser(strict, opt)
    }

    var parser = this
    clearBuffers(parser)
    parser.q = parser.c = ''
    parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH
    parser.opt = opt || {}
    parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags
    parser.looseCase = parser.opt.lowercase ? 'toLowerCase' : 'toUpperCase'
    parser.tags = []
    parser.closed = parser.closedRoot = parser.sawRoot = false
    parser.tag = parser.error = null
    parser.strict = !!strict
    parser.noscript = !!(strict || parser.opt.noscript)
    parser.state = S.BEGIN
    parser.strictEntities = parser.opt.strictEntities
    parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES)
    parser.attribList = []

    // namespaces form a prototype chain.
    // it always points at the current tag,
    // which protos to its parent tag.
    if (parser.opt.xmlns) {
      parser.ns = Object.create(rootNS)
    }

    // mostly just for error reporting
    parser.trackPosition = parser.opt.position !== false
    if (parser.trackPosition) {
      parser.position = parser.line = parser.column = 0
    }
    emit(parser, 'onready')
  }

  if (!Object.create) {
    Object.create = function (o) {
      function F () {}
      F.prototype = o
      var newf = new F()
      return newf
    }
  }

  if (!Object.keys) {
    Object.keys = function (o) {
      var a = []
      for (var i in o) if (o.hasOwnProperty(i)) a.push(i)
      return a
    }
  }

  function checkBufferLength (parser) {
    var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10)
    var maxActual = 0
    for (var i = 0, l = buffers.length; i < l; i++) {
      var len = parser[buffers[i]].length
      if (len > maxAllowed) {
        // Text/cdata nodes can get big, and since they're buffered,
        // we can get here under normal conditions.
        // Avoid issues by emitting the text node now,
        // so at least it won't get any bigger.
        switch (buffers[i]) {
          case 'textNode':
            closeText(parser)
            break

          case 'cdata':
            emitNode(parser, 'oncdata', parser.cdata)
            parser.cdata = ''
            break

          case 'script':
            emitNode(parser, 'onscript', parser.script)
            parser.script = ''
            break

          default:
            error(parser, 'Max buffer length exceeded: ' + buffers[i])
        }
      }
      maxActual = Math.max(maxActual, len)
    }
    // schedule the next check for the earliest possible buffer overrun.
    var m = sax.MAX_BUFFER_LENGTH - maxActual
    parser.bufferCheckPosition = m + parser.position
  }

  function clearBuffers (parser) {
    for (var i = 0, l = buffers.length; i < l; i++) {
      parser[buffers[i]] = ''
    }
  }

  function flushBuffers (parser) {
    closeText(parser)
    if (parser.cdata !== '') {
      emitNode(parser, 'oncdata', parser.cdata)
      parser.cdata = ''
    }
    if (parser.script !== '') {
      emitNode(parser, 'onscript', parser.script)
      parser.script = ''
    }
  }

  SAXParser.prototype = {
    end: function () { end(this) },
    write: write,
    resume: function () { this.error = null; return this },
    close: function () { return this.write(null) },
    flush: function () { flushBuffers(this) }
  }

  var Stream
  try {
    Stream = __webpack_require__(/*! stream */ "stream").Stream
  } catch (ex) {
    Stream = function () {}
  }

  var streamWraps = sax.EVENTS.filter(function (ev) {
    return ev !== 'error' && ev !== 'end'
  })

  function createStream (strict, opt) {
    return new SAXStream(strict, opt)
  }

  function SAXStream (strict, opt) {
    if (!(this instanceof SAXStream)) {
      return new SAXStream(strict, opt)
    }

    Stream.apply(this)

    this._parser = new SAXParser(strict, opt)
    this.writable = true
    this.readable = true

    var me = this

    this._parser.onend = function () {
      me.emit('end')
    }

    this._parser.onerror = function (er) {
      me.emit('error', er)

      // if didn't throw, then means error was handled.
      // go ahead and clear error, so we can write again.
      me._parser.error = null
    }

    this._decoder = null

    streamWraps.forEach(function (ev) {
      Object.defineProperty(me, 'on' + ev, {
        get: function () {
          return me._parser['on' + ev]
        },
        set: function (h) {
          if (!h) {
            me.removeAllListeners(ev)
            me._parser['on' + ev] = h
            return h
          }
          me.on(ev, h)
        },
        enumerable: true,
        configurable: false
      })
    })
  }

  SAXStream.prototype = Object.create(Stream.prototype, {
    constructor: {
      value: SAXStream
    }
  })

  SAXStream.prototype.write = function (data) {
    if (typeof Buffer === 'function' &&
      typeof Buffer.isBuffer === 'function' &&
      Buffer.isBuffer(data)) {
      if (!this._decoder) {
        var SD = __webpack_require__(/*! string_decoder */ "string_decoder").StringDecoder
        this._decoder = new SD('utf8')
      }
      data = this._decoder.write(data)
    }

    this._parser.write(data.toString())
    this.emit('data', data)
    return true
  }

  SAXStream.prototype.end = function (chunk) {
    if (chunk && chunk.length) {
      this.write(chunk)
    }
    this._parser.end()
    return true
  }

  SAXStream.prototype.on = function (ev, handler) {
    var me = this
    if (!me._parser['on' + ev] && streamWraps.indexOf(ev) !== -1) {
      me._parser['on' + ev] = function () {
        var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments)
        args.splice(0, 0, ev)
        me.emit.apply(me, args)
      }
    }

    return Stream.prototype.on.call(me, ev, handler)
  }

  // this really needs to be replaced with character classes.
  // XML allows all manner of ridiculous numbers and digits.
  var CDATA = '[CDATA['
  var DOCTYPE = 'DOCTYPE'
  var XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace'
  var XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/'
  var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE }

  // http://www.w3.org/TR/REC-xml/#NT-NameStartChar
  // This implementation works on strings, a single character at a time
  // as such, it cannot ever support astral-plane characters (10000-EFFFF)
  // without a significant breaking change to either this  parser, or the
  // JavaScript language.  Implementation of an emoji-capable xml parser
  // is left as an exercise for the reader.
  var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/

  var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/

  var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
  var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/

  function isWhitespace (c) {
    return c === ' ' || c === '\n' || c === '\r' || c === '\t'
  }

  function isQuote (c) {
    return c === '"' || c === '\''
  }

  function isAttribEnd (c) {
    return c === '>' || isWhitespace(c)
  }

  function isMatch (regex, c) {
    return regex.test(c)
  }

  function notMatch (regex, c) {
    return !isMatch(regex, c)
  }

  var S = 0
  sax.STATE = {
    BEGIN: S++, // leading byte order mark or whitespace
    BEGIN_WHITESPACE: S++, // leading whitespace
    TEXT: S++, // general stuff
    TEXT_ENTITY: S++, // &amp and such.
    OPEN_WAKA: S++, // <
    SGML_DECL: S++, // <!BLARG
    SGML_DECL_QUOTED: S++, // <!BLARG foo "bar
    DOCTYPE: S++, // <!DOCTYPE
    DOCTYPE_QUOTED: S++, // <!DOCTYPE "//blah
    DOCTYPE_DTD: S++, // <!DOCTYPE "//blah" [ ...
    DOCTYPE_DTD_QUOTED: S++, // <!DOCTYPE "//blah" [ "foo
    COMMENT_STARTING: S++, // <!-
    COMMENT: S++, // <!--
    COMMENT_ENDING: S++, // <!-- blah -
    COMMENT_ENDED: S++, // <!-- blah --
    CDATA: S++, // <![CDATA[ something
    CDATA_ENDING: S++, // ]
    CDATA_ENDING_2: S++, // ]]
    PROC_INST: S++, // <?hi
    PROC_INST_BODY: S++, // <?hi there
    PROC_INST_ENDING: S++, // <?hi "there" ?
    OPEN_TAG: S++, // <strong
    OPEN_TAG_SLASH: S++, // <strong /
    ATTRIB: S++, // <a
    ATTRIB_NAME: S++, // <a foo
    ATTRIB_NAME_SAW_WHITE: S++, // <a foo _
    ATTRIB_VALUE: S++, // <a foo=
    ATTRIB_VALUE_QUOTED: S++, // <a foo="bar
    ATTRIB_VALUE_CLOSED: S++, // <a foo="bar"
    ATTRIB_VALUE_UNQUOTED: S++, // <a foo=bar
    ATTRIB_VALUE_ENTITY_Q: S++, // <foo bar="&quot;"
    ATTRIB_VALUE_ENTITY_U: S++, // <foo bar=&quot
    CLOSE_TAG: S++, // </a
    CLOSE_TAG_SAW_WHITE: S++, // </a   >
    SCRIPT: S++, // <script> ...
    SCRIPT_ENDING: S++ // <script> ... <
  }

  sax.XML_ENTITIES = {
    'amp': '&',
    'gt': '>',
    'lt': '<',
    'quot': '"',
    'apos': "'"
  }

  sax.ENTITIES = {
    'amp': '&',
    'gt': '>',
    'lt': '<',
    'quot': '"',
    'apos': "'",
    'AElig': 198,
    'Aacute': 193,
    'Acirc': 194,
    'Agrave': 192,
    'Aring': 197,
    'Atilde': 195,
    'Auml': 196,
    'Ccedil': 199,
    'ETH': 208,
    'Eacute': 201,
    'Ecirc': 202,
    'Egrave': 200,
    'Euml': 203,
    'Iacute': 205,
    'Icirc': 206,
    'Igrave': 204,
    'Iuml': 207,
    'Ntilde': 209,
    'Oacute': 211,
    'Ocirc': 212,
    'Ograve': 210,
    'Oslash': 216,
    'Otilde': 213,
    'Ouml': 214,
    'THORN': 222,
    'Uacute': 218,
    'Ucirc': 219,
    'Ugrave': 217,
    'Uuml': 220,
    'Yacute': 221,
    'aacute': 225,
    'acirc': 226,
    'aelig': 230,
    'agrave': 224,
    'aring': 229,
    'atilde': 227,
    'auml': 228,
    'ccedil': 231,
    'eacute': 233,
    'ecirc': 234,
    'egrave': 232,
    'eth': 240,
    'euml': 235,
    'iacute': 237,
    'icirc': 238,
    'igrave': 236,
    'iuml': 239,
    'ntilde': 241,
    'oacute': 243,
    'ocirc': 244,
    'ograve': 242,
    'oslash': 248,
    'otilde': 245,
    'ouml': 246,
    'szlig': 223,
    'thorn': 254,
    'uacute': 250,
    'ucirc': 251,
    'ugrave': 249,
    'uuml': 252,
    'yacute': 253,
    'yuml': 255,
    'copy': 169,
    'reg': 174,
    'nbsp': 160,
    'iexcl': 161,
    'cent': 162,
    'pound': 163,
    'curren': 164,
    'yen': 165,
    'brvbar': 166,
    'sect': 167,
    'uml': 168,
    'ordf': 170,
    'laquo': 171,
    'not': 172,
    'shy': 173,
    'macr': 175,
    'deg': 176,
    'plusmn': 177,
    'sup1': 185,
    'sup2': 178,
    'sup3': 179,
    'acute': 180,
    'micro': 181,
    'para': 182,
    'middot': 183,
    'cedil': 184,
    'ordm': 186,
    'raquo': 187,
    'frac14': 188,
    'frac12': 189,
    'frac34': 190,
    'iquest': 191,
    'times': 215,
    'divide': 247,
    'OElig': 338,
    'oelig': 339,
    'Scaron': 352,
    'scaron': 353,
    'Yuml': 376,
    'fnof': 402,
    'circ': 710,
    'tilde': 732,
    'Alpha': 913,
    'Beta': 914,
    'Gamma': 915,
    'Delta': 916,
    'Epsilon': 917,
    'Zeta': 918,
    'Eta': 919,
    'Theta': 920,
    'Iota': 921,
    'Kappa': 922,
    'Lambda': 923,
    'Mu': 924,
    'Nu': 925,
    'Xi': 926,
    'Omicron': 927,
    'Pi': 928,
    'Rho': 929,
    'Sigma': 931,
    'Tau': 932,
    'Upsilon': 933,
    'Phi': 934,
    'Chi': 935,
    'Psi': 936,
    'Omega': 937,
    'alpha': 945,
    'beta': 946,
    'gamma': 947,
    'delta': 948,
    'epsilon': 949,
    'zeta': 950,
    'eta': 951,
    'theta': 952,
    'iota': 953,
    'kappa': 954,
    'lambda': 955,
    'mu': 956,
    'nu': 957,
    'xi': 958,
    'omicron': 959,
    'pi': 960,
    'rho': 961,
    'sigmaf': 962,
    'sigma': 963,
    'tau': 964,
    'upsilon': 965,
    'phi': 966,
    'chi': 967,
    'psi': 968,
    'omega': 969,
    'thetasym': 977,
    'upsih': 978,
    'piv': 982,
    'ensp': 8194,
    'emsp': 8195,
    'thinsp': 8201,
    'zwnj': 8204,
    'zwj': 8205,
    'lrm': 8206,
    'rlm': 8207,
    'ndash': 8211,
    'mdash': 8212,
    'lsquo': 8216,
    'rsquo': 8217,
    'sbquo': 8218,
    'ldquo': 8220,
    'rdquo': 8221,
    'bdquo': 8222,
    'dagger': 8224,
    'Dagger': 8225,
    'bull': 8226,
    'hellip': 8230,
    'permil': 8240,
    'prime': 8242,
    'Prime': 8243,
    'lsaquo': 8249,
    'rsaquo': 8250,
    'oline': 8254,
    'frasl': 8260,
    'euro': 8364,
    'image': 8465,
    'weierp': 8472,
    'real': 8476,
    'trade': 8482,
    'alefsym': 8501,
    'larr': 8592,
    'uarr': 8593,
    'rarr': 8594,
    'darr': 8595,
    'harr': 8596,
    'crarr': 8629,
    'lArr': 8656,
    'uArr': 8657,
    'rArr': 8658,
    'dArr': 8659,
    'hArr': 8660,
    'forall': 8704,
    'part': 8706,
    'exist': 8707,
    'empty': 8709,
    'nabla': 8711,
    'isin': 8712,
    'notin': 8713,
    'ni': 8715,
    'prod': 8719,
    'sum': 8721,
    'minus': 8722,
    'lowast': 8727,
    'radic': 8730,
    'prop': 8733,
    'infin': 8734,
    'ang': 8736,
    'and': 8743,
    'or': 8744,
    'cap': 8745,
    'cup': 8746,
    'int': 8747,
    'there4': 8756,
    'sim': 8764,
    'cong': 8773,
    'asymp': 8776,
    'ne': 8800,
    'equiv': 8801,
    'le': 8804,
    'ge': 8805,
    'sub': 8834,
    'sup': 8835,
    'nsub': 8836,
    'sube': 8838,
    'supe': 8839,
    'oplus': 8853,
    'otimes': 8855,
    'perp': 8869,
    'sdot': 8901,
    'lceil': 8968,
    'rceil': 8969,
    'lfloor': 8970,
    'rfloor': 8971,
    'lang': 9001,
    'rang': 9002,
    'loz': 9674,
    'spades': 9824,
    'clubs': 9827,
    'hearts': 9829,
    'diams': 9830
  }

  Object.keys(sax.ENTITIES).forEach(function (key) {
    var e = sax.ENTITIES[key]
    var s = typeof e === 'number' ? String.fromCharCode(e) : e
    sax.ENTITIES[key] = s
  })

  for (var s in sax.STATE) {
    sax.STATE[sax.STATE[s]] = s
  }

  // shorthand
  S = sax.STATE

  function emit (parser, event, data) {
    parser[event] && parser[event](data)
  }

  function emitNode (parser, nodeType, data) {
    if (parser.textNode) closeText(parser)
    emit(parser, nodeType, data)
  }

  function closeText (parser) {
    parser.textNode = textopts(parser.opt, parser.textNode)
    if (parser.textNode) emit(parser, 'ontext', parser.textNode)
    parser.textNode = ''
  }

  function textopts (opt, text) {
    if (opt.trim) text = text.trim()
    if (opt.normalize) text = text.replace(/\s+/g, ' ')
    return text
  }

  function error (parser, er) {
    closeText(parser)
    if (parser.trackPosition) {
      er += '\nLine: ' + parser.line +
        '\nColumn: ' + parser.column +
        '\nChar: ' + parser.c
    }
    er = new Error(er)
    parser.error = er
    emit(parser, 'onerror', er)
    return parser
  }

  function end (parser) {
    if (parser.sawRoot && !parser.closedRoot) strictFail(parser, 'Unclosed root tag')
    if ((parser.state !== S.BEGIN) &&
      (parser.state !== S.BEGIN_WHITESPACE) &&
      (parser.state !== S.TEXT)) {
      error(parser, 'Unexpected end')
    }
    closeText(parser)
    parser.c = ''
    parser.closed = true
    emit(parser, 'onend')
    SAXParser.call(parser, parser.strict, parser.opt)
    return parser
  }

  function strictFail (parser, message) {
    if (typeof parser !== 'object' || !(parser instanceof SAXParser)) {
      throw new Error('bad call to strictFail')
    }
    if (parser.strict) {
      error(parser, message)
    }
  }

  function newTag (parser) {
    if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]()
    var parent = parser.tags[parser.tags.length - 1] || parser
    var tag = parser.tag = { name: parser.tagName, attributes: {} }

    // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"
    if (parser.opt.xmlns) {
      tag.ns = parent.ns
    }
    parser.attribList.length = 0
    emitNode(parser, 'onopentagstart', tag)
  }

  function qname (name, attribute) {
    var i = name.indexOf(':')
    var qualName = i < 0 ? [ '', name ] : name.split(':')
    var prefix = qualName[0]
    var local = qualName[1]

    // <x "xmlns"="http://foo">
    if (attribute && name === 'xmlns') {
      prefix = 'xmlns'
      local = ''
    }

    return { prefix: prefix, local: local }
  }

  function attrib (parser) {
    if (!parser.strict) {
      parser.attribName = parser.attribName[parser.looseCase]()
    }

    if (parser.attribList.indexOf(parser.attribName) !== -1 ||
      parser.tag.attributes.hasOwnProperty(parser.attribName)) {
      parser.attribName = parser.attribValue = ''
      return
    }

    if (parser.opt.xmlns) {
      var qn = qname(parser.attribName, true)
      var prefix = qn.prefix
      var local = qn.local

      if (prefix === 'xmlns') {
        // namespace binding attribute. push the binding into scope
        if (local === 'xml' && parser.attribValue !== XML_NAMESPACE) {
          strictFail(parser,
            'xml: prefix must be bound to ' + XML_NAMESPACE + '\n' +
            'Actual: ' + parser.attribValue)
        } else if (local === 'xmlns' && parser.attribValue !== XMLNS_NAMESPACE) {
          strictFail(parser,
            'xmlns: prefix must be bound to ' + XMLNS_NAMESPACE + '\n' +
            'Actual: ' + parser.attribValue)
        } else {
          var tag = parser.tag
          var parent = parser.tags[parser.tags.length - 1] || parser
          if (tag.ns === parent.ns) {
            tag.ns = Object.create(parent.ns)
          }
          tag.ns[local] = parser.attribValue
        }
      }

      // defer onattribute events until all attributes have been seen
      // so any new bindings can take effect. preserve attribute order
      // so deferred events can be emitted in document order
      parser.attribList.push([parser.attribName, parser.attribValue])
    } else {
      // in non-xmlns mode, we can emit the event right away
      parser.tag.attributes[parser.attribName] = parser.attribValue
      emitNode(parser, 'onattribute', {
        name: parser.attribName,
        value: parser.attribValue
      })
    }

    parser.attribName = parser.attribValue = ''
  }

  function openTag (parser, selfClosing) {
    if (parser.opt.xmlns) {
      // emit namespace binding events
      var tag = parser.tag

      // add namespace info to tag
      var qn = qname(parser.tagName)
      tag.prefix = qn.prefix
      tag.local = qn.local
      tag.uri = tag.ns[qn.prefix] || ''

      if (tag.prefix && !tag.uri) {
        strictFail(parser, 'Unbound namespace prefix: ' +
          JSON.stringify(parser.tagName))
        tag.uri = qn.prefix
      }

      var parent = parser.tags[parser.tags.length - 1] || parser
      if (tag.ns && parent.ns !== tag.ns) {
        Object.keys(tag.ns).forEach(function (p) {
          emitNode(parser, 'onopennamespace', {
            prefix: p,
            uri: tag.ns[p]
          })
        })
      }

      // handle deferred onattribute events
      // Note: do not apply default ns to attributes:
      //   http://www.w3.org/TR/REC-xml-names/#defaulting
      for (var i = 0, l = parser.attribList.length; i < l; i++) {
        var nv = parser.attribList[i]
        var name = nv[0]
        var value = nv[1]
        var qualName = qname(name, true)
        var prefix = qualName.prefix
        var local = qualName.local
        var uri = prefix === '' ? '' : (tag.ns[prefix] || '')
        var a = {
          name: name,
          value: value,
          prefix: prefix,
          local: local,
          uri: uri
        }

        // if there's any attributes with an undefined namespace,
        // then fail on them now.
        if (prefix && prefix !== 'xmlns' && !uri) {
          strictFail(parser, 'Unbound namespace prefix: ' +
            JSON.stringify(prefix))
          a.uri = prefix
        }
        parser.tag.attributes[name] = a
        emitNode(parser, 'onattribute', a)
      }
      parser.attribList.length = 0
    }

    parser.tag.isSelfClosing = !!selfClosing

    // process the tag
    parser.sawRoot = true
    parser.tags.push(parser.tag)
    emitNode(parser, 'onopentag', parser.tag)
    if (!selfClosing) {
      // special case for <script> in non-strict mode.
      if (!parser.noscript && parser.tagName.toLowerCase() === 'script') {
        parser.state = S.SCRIPT
      } else {
        parser.state = S.TEXT
      }
      parser.tag = null
      parser.tagName = ''
    }
    parser.attribName = parser.attribValue = ''
    parser.attribList.length = 0
  }

  function closeTag (parser) {
    if (!parser.tagName) {
      strictFail(parser, 'Weird empty close tag.')
      parser.textNode += '</>'
      parser.state = S.TEXT
      return
    }

    if (parser.script) {
      if (parser.tagName !== 'script') {
        parser.script += '</' + parser.tagName + '>'
        parser.tagName = ''
        parser.state = S.SCRIPT
        return
      }
      emitNode(parser, 'onscript', parser.script)
      parser.script = ''
    }

    // first make sure that the closing tag actually exists.
    // <a><b></c></b></a> will close everything, otherwise.
    var t = parser.tags.length
    var tagName = parser.tagName
    if (!parser.strict) {
      tagName = tagName[parser.looseCase]()
    }
    var closeTo = tagName
    while (t--) {
      var close = parser.tags[t]
      if (close.name !== closeTo) {
        // fail the first time in strict mode
        strictFail(parser, 'Unexpected close tag')
      } else {
        break
      }
    }

    // didn't find it.  we already failed for strict, so just abort.
    if (t < 0) {
      strictFail(parser, 'Unmatched closing tag: ' + parser.tagName)
      parser.textNode += '</' + parser.tagName + '>'
      parser.state = S.TEXT
      return
    }
    parser.tagName = tagName
    var s = parser.tags.length
    while (s-- > t) {
      var tag = parser.tag = parser.tags.pop()
      parser.tagName = parser.tag.name
      emitNode(parser, 'onclosetag', parser.tagName)

      var x = {}
      for (var i in tag.ns) {
        x[i] = tag.ns[i]
      }

      var parent = parser.tags[parser.tags.length - 1] || parser
      if (parser.opt.xmlns && tag.ns !== parent.ns) {
        // remove namespace bindings introduced by tag
        Object.keys(tag.ns).forEach(function (p) {
          var n = tag.ns[p]
          emitNode(parser, 'onclosenamespace', { prefix: p, uri: n })
        })
      }
    }
    if (t === 0) parser.closedRoot = true
    parser.tagName = parser.attribValue = parser.attribName = ''
    parser.attribList.length = 0
    parser.state = S.TEXT
  }

  function parseEntity (parser) {
    var entity = parser.entity
    var entityLC = entity.toLowerCase()
    var num
    var numStr = ''

    if (parser.ENTITIES[entity]) {
      return parser.ENTITIES[entity]
    }
    if (parser.ENTITIES[entityLC]) {
      return parser.ENTITIES[entityLC]
    }
    entity = entityLC
    if (entity.charAt(0) === '#') {
      if (entity.charAt(1) === 'x') {
        entity = entity.slice(2)
        num = parseInt(entity, 16)
        numStr = num.toString(16)
      } else {
        entity = entity.slice(1)
        num = parseInt(entity, 10)
        numStr = num.toString(10)
      }
    }
    entity = entity.replace(/^0+/, '')
    if (isNaN(num) || numStr.toLowerCase() !== entity) {
      strictFail(parser, 'Invalid character entity')
      return '&' + parser.entity + ';'
    }

    return String.fromCodePoint(num)
  }

  function beginWhiteSpace (parser, c) {
    if (c === '<') {
      parser.state = S.OPEN_WAKA
      parser.startTagPosition = parser.position
    } else if (!isWhitespace(c)) {
      // have to process this as a text node.
      // weird, but happens.
      strictFail(parser, 'Non-whitespace before first tag.')
      parser.textNode = c
      parser.state = S.TEXT
    }
  }

  function charAt (chunk, i) {
    var result = ''
    if (i < chunk.length) {
      result = chunk.charAt(i)
    }
    return result
  }

  function write (chunk) {
    var parser = this
    if (this.error) {
      throw this.error
    }
    if (parser.closed) {
      return error(parser,
        'Cannot write after close. Assign an onready handler.')
    }
    if (chunk === null) {
      return end(parser)
    }
    if (typeof chunk === 'object') {
      chunk = chunk.toString()
    }
    var i = 0
    var c = ''
    while (true) {
      c = charAt(chunk, i++)
      parser.c = c

      if (!c) {
        break
      }

      if (parser.trackPosition) {
        parser.position++
        if (c === '\n') {
          parser.line++
          parser.column = 0
        } else {
          parser.column++
        }
      }

      switch (parser.state) {
        case S.BEGIN:
          parser.state = S.BEGIN_WHITESPACE
          if (c === '\uFEFF') {
            continue
          }
          beginWhiteSpace(parser, c)
          continue

        case S.BEGIN_WHITESPACE:
          beginWhiteSpace(parser, c)
          continue

        case S.TEXT:
          if (parser.sawRoot && !parser.closedRoot) {
            var starti = i - 1
            while (c && c !== '<' && c !== '&') {
              c = charAt(chunk, i++)
              if (c && parser.trackPosition) {
                parser.position++
                if (c === '\n') {
                  parser.line++
                  parser.column = 0
                } else {
                  parser.column++
                }
              }
            }
            parser.textNode += chunk.substring(starti, i - 1)
          }
          if (c === '<' && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
            parser.state = S.OPEN_WAKA
            parser.startTagPosition = parser.position
          } else {
            if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) {
              strictFail(parser, 'Text data outside of root node.')
            }
            if (c === '&') {
              parser.state = S.TEXT_ENTITY
            } else {
              parser.textNode += c
            }
          }
          continue

        case S.SCRIPT:
          // only non-strict
          if (c === '<') {
            parser.state = S.SCRIPT_ENDING
          } else {
            parser.script += c
          }
          continue

        case S.SCRIPT_ENDING:
          if (c === '/') {
            parser.state = S.CLOSE_TAG
          } else {
            parser.script += '<' + c
            parser.state = S.SCRIPT
          }
          continue

        case S.OPEN_WAKA:
          // either a /, ?, !, or text is coming next.
          if (c === '!') {
            parser.state = S.SGML_DECL
            parser.sgmlDecl = ''
          } else if (isWhitespace(c)) {
            // wait for it...
          } else if (isMatch(nameStart, c)) {
            parser.state = S.OPEN_TAG
            parser.tagName = c
          } else if (c === '/') {
            parser.state = S.CLOSE_TAG
            parser.tagName = ''
          } else if (c === '?') {
            parser.state = S.PROC_INST
            parser.procInstName = parser.procInstBody = ''
          } else {
            strictFail(parser, 'Unencoded <')
            // if there was some whitespace, then add that in.
            if (parser.startTagPosition + 1 < parser.position) {
              var pad = parser.position - parser.startTagPosition
              c = new Array(pad).join(' ') + c
            }
            parser.textNode += '<' + c
            parser.state = S.TEXT
          }
          continue

        case S.SGML_DECL:
          if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
            emitNode(parser, 'onopencdata')
            parser.state = S.CDATA
            parser.sgmlDecl = ''
            parser.cdata = ''
          } else if (parser.sgmlDecl + c === '--') {
            parser.state = S.COMMENT
            parser.comment = ''
            parser.sgmlDecl = ''
          } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
            parser.state = S.DOCTYPE
            if (parser.doctype || parser.sawRoot) {
              strictFail(parser,
                'Inappropriately located doctype declaration')
            }
            parser.doctype = ''
            parser.sgmlDecl = ''
          } else if (c === '>') {
            emitNode(parser, 'onsgmldeclaration', parser.sgmlDecl)
            parser.sgmlDecl = ''
            parser.state = S.TEXT
          } else if (isQuote(c)) {
            parser.state = S.SGML_DECL_QUOTED
            parser.sgmlDecl += c
          } else {
            parser.sgmlDecl += c
          }
          continue

        case S.SGML_DECL_QUOTED:
          if (c === parser.q) {
            parser.state = S.SGML_DECL
            parser.q = ''
          }
          parser.sgmlDecl += c
          continue

        case S.DOCTYPE:
          if (c === '>') {
            parser.state = S.TEXT
            emitNode(parser, 'ondoctype', parser.doctype)
            parser.doctype = true // just remember that we saw it.
          } else {
            parser.doctype += c
            if (c === '[') {
              parser.state = S.DOCTYPE_DTD
            } else if (isQuote(c)) {
              parser.state = S.DOCTYPE_QUOTED
              parser.q = c
            }
          }
          continue

        case S.DOCTYPE_QUOTED:
          parser.doctype += c
          if (c === parser.q) {
            parser.q = ''
            parser.state = S.DOCTYPE
          }
          continue

        case S.DOCTYPE_DTD:
          parser.doctype += c
          if (c === ']') {
            parser.state = S.DOCTYPE
          } else if (isQuote(c)) {
            parser.state = S.DOCTYPE_DTD_QUOTED
            parser.q = c
          }
          continue

        case S.DOCTYPE_DTD_QUOTED:
          parser.doctype += c
          if (c === parser.q) {
            parser.state = S.DOCTYPE_DTD
            parser.q = ''
          }
          continue

        case S.COMMENT:
          if (c === '-') {
            parser.state = S.COMMENT_ENDING
          } else {
            parser.comment += c
          }
          continue

        case S.COMMENT_ENDING:
          if (c === '-') {
            parser.state = S.COMMENT_ENDED
            parser.comment = textopts(parser.opt, parser.comment)
            if (parser.comment) {
              emitNode(parser, 'oncomment', parser.comment)
            }
            parser.comment = ''
          } else {
            parser.comment += '-' + c
            parser.state = S.COMMENT
          }
          continue

        case S.COMMENT_ENDED:
          if (c !== '>') {
            strictFail(parser, 'Malformed comment')
            // allow <!-- blah -- bloo --> in non-strict mode,
            // which is a comment of " blah -- bloo "
            parser.comment += '--' + c
            parser.state = S.COMMENT
          } else {
            parser.state = S.TEXT
          }
          continue

        case S.CDATA:
          if (c === ']') {
            parser.state = S.CDATA_ENDING
          } else {
            parser.cdata += c
          }
          continue

        case S.CDATA_ENDING:
          if (c === ']') {
            parser.state = S.CDATA_ENDING_2
          } else {
            parser.cdata += ']' + c
            parser.state = S.CDATA
          }
          continue

        case S.CDATA_ENDING_2:
          if (c === '>') {
            if (parser.cdata) {
              emitNode(parser, 'oncdata', parser.cdata)
            }
            emitNode(parser, 'onclosecdata')
            parser.cdata = ''
            parser.state = S.TEXT
          } else if (c === ']') {
            parser.cdata += ']'
          } else {
            parser.cdata += ']]' + c
            parser.state = S.CDATA
          }
          continue

        case S.PROC_INST:
          if (c === '?') {
            parser.state = S.PROC_INST_ENDING
          } else if (isWhitespace(c)) {
            parser.state = S.PROC_INST_BODY
          } else {
            parser.procInstName += c
          }
          continue

        case S.PROC_INST_BODY:
          if (!parser.procInstBody && isWhitespace(c)) {
            continue
          } else if (c === '?') {
            parser.state = S.PROC_INST_ENDING
          } else {
            parser.procInstBody += c
          }
          continue

        case S.PROC_INST_ENDING:
          if (c === '>') {
            emitNode(parser, 'onprocessinginstruction', {
              name: parser.procInstName,
              body: parser.procInstBody
            })
            parser.procInstName = parser.procInstBody = ''
            parser.state = S.TEXT
          } else {
            parser.procInstBody += '?' + c
            parser.state = S.PROC_INST_BODY
          }
          continue

        case S.OPEN_TAG:
          if (isMatch(nameBody, c)) {
            parser.tagName += c
          } else {
            newTag(parser)
            if (c === '>') {
              openTag(parser)
            } else if (c === '/') {
              parser.state = S.OPEN_TAG_SLASH
            } else {
              if (!isWhitespace(c)) {
                strictFail(parser, 'Invalid character in tag name')
              }
              parser.state = S.ATTRIB
            }
          }
          continue

        case S.OPEN_TAG_SLASH:
          if (c === '>') {
            openTag(parser, true)
            closeTag(parser)
          } else {
            strictFail(parser, 'Forward-slash in opening tag not followed by >')
            parser.state = S.ATTRIB
          }
          continue

        case S.ATTRIB:
          // haven't read the attribute name yet.
          if (isWhitespace(c)) {
            continue
          } else if (c === '>') {
            openTag(parser)
          } else if (c === '/') {
            parser.state = S.OPEN_TAG_SLASH
          } else if (isMatch(nameStart, c)) {
            parser.attribName = c
            parser.attribValue = ''
            parser.state = S.ATTRIB_NAME
          } else {
            strictFail(parser, 'Invalid attribute name')
          }
          continue

        case S.ATTRIB_NAME:
          if (c === '=') {
            parser.state = S.ATTRIB_VALUE
          } else if (c === '>') {
            strictFail(parser, 'Attribute without value')
            parser.attribValue = parser.attribName
            attrib(parser)
            openTag(parser)
          } else if (isWhitespace(c)) {
            parser.state = S.ATTRIB_NAME_SAW_WHITE
          } else if (isMatch(nameBody, c)) {
            parser.attribName += c
          } else {
            strictFail(parser, 'Invalid attribute name')
          }
          continue

        case S.ATTRIB_NAME_SAW_WHITE:
          if (c === '=') {
            parser.state = S.ATTRIB_VALUE
          } else if (isWhitespace(c)) {
            continue
          } else {
            strictFail(parser, 'Attribute without value')
            parser.tag.attributes[parser.attribName] = ''
            parser.attribValue = ''
            emitNode(parser, 'onattribute', {
              name: parser.attribName,
              value: ''
            })
            parser.attribName = ''
            if (c === '>') {
              openTag(parser)
            } else if (isMatch(nameStart, c)) {
              parser.attribName = c
              parser.state = S.ATTRIB_NAME
            } else {
              strictFail(parser, 'Invalid attribute name')
              parser.state = S.ATTRIB
            }
          }
          continue

        case S.ATTRIB_VALUE:
          if (isWhitespace(c)) {
            continue
          } else if (isQuote(c)) {
            parser.q = c
            parser.state = S.ATTRIB_VALUE_QUOTED
          } else {
            strictFail(parser, 'Unquoted attribute value')
            parser.state = S.ATTRIB_VALUE_UNQUOTED
            parser.attribValue = c
          }
          continue

        case S.ATTRIB_VALUE_QUOTED:
          if (c !== parser.q) {
            if (c === '&') {
              parser.state = S.ATTRIB_VALUE_ENTITY_Q
            } else {
              parser.attribValue += c
            }
            continue
          }
          attrib(parser)
          parser.q = ''
          parser.state = S.ATTRIB_VALUE_CLOSED
          continue

        case S.ATTRIB_VALUE_CLOSED:
          if (isWhitespace(c)) {
            parser.state = S.ATTRIB
          } else if (c === '>') {
            openTag(parser)
          } else if (c === '/') {
            parser.state = S.OPEN_TAG_SLASH
          } else if (isMatch(nameStart, c)) {
            strictFail(parser, 'No whitespace between attributes')
            parser.attribName = c
            parser.attribValue = ''
            parser.state = S.ATTRIB_NAME
          } else {
            strictFail(parser, 'Invalid attribute name')
          }
          continue

        case S.ATTRIB_VALUE_UNQUOTED:
          if (!isAttribEnd(c)) {
            if (c === '&') {
              parser.state = S.ATTRIB_VALUE_ENTITY_U
            } else {
              parser.attribValue += c
            }
            continue
          }
          attrib(parser)
          if (c === '>') {
            openTag(parser)
          } else {
            parser.state = S.ATTRIB
          }
          continue

        case S.CLOSE_TAG:
          if (!parser.tagName) {
            if (isWhitespace(c)) {
              continue
            } else if (notMatch(nameStart, c)) {
              if (parser.script) {
                parser.script += '</' + c
                parser.state = S.SCRIPT
              } else {
                strictFail(parser, 'Invalid tagname in closing tag.')
              }
            } else {
              parser.tagName = c
            }
          } else if (c === '>') {
            closeTag(parser)
          } else if (isMatch(nameBody, c)) {
            parser.tagName += c
          } else if (parser.script) {
            parser.script += '</' + parser.tagName
            parser.tagName = ''
            parser.state = S.SCRIPT
          } else {
            if (!isWhitespace(c)) {
              strictFail(parser, 'Invalid tagname in closing tag')
            }
            parser.state = S.CLOSE_TAG_SAW_WHITE
          }
          continue

        case S.CLOSE_TAG_SAW_WHITE:
          if (isWhitespace(c)) {
            continue
          }
          if (c === '>') {
            closeTag(parser)
          } else {
            strictFail(parser, 'Invalid characters in closing tag')
          }
          continue

        case S.TEXT_ENTITY:
        case S.ATTRIB_VALUE_ENTITY_Q:
        case S.ATTRIB_VALUE_ENTITY_U:
          var returnState
          var buffer
          switch (parser.state) {
            case S.TEXT_ENTITY:
              returnState = S.TEXT
              buffer = 'textNode'
              break

            case S.ATTRIB_VALUE_ENTITY_Q:
              returnState = S.ATTRIB_VALUE_QUOTED
              buffer = 'attribValue'
              break

            case S.ATTRIB_VALUE_ENTITY_U:
              returnState = S.ATTRIB_VALUE_UNQUOTED
              buffer = 'attribValue'
              break
          }

          if (c === ';') {
            parser[buffer] += parseEntity(parser)
            parser.entity = ''
            parser.state = returnState
          } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {
            parser.entity += c
          } else {
            strictFail(parser, 'Invalid character in entity name')
            parser[buffer] += '&' + parser.entity + c
            parser.entity = ''
            parser.state = returnState
          }

          continue

        default:
          throw new Error(parser, 'Unknown state: ' + parser.state)
      }
    } // while

    if (parser.position >= parser.bufferCheckPosition) {
      checkBufferLength(parser)
    }
    return parser
  }

  /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
  /* istanbul ignore next */
  if (!String.fromCodePoint) {
    (function () {
      var stringFromCharCode = String.fromCharCode
      var floor = Math.floor
      var fromCodePoint = function () {
        var MAX_SIZE = 0x4000
        var codeUnits = []
        var highSurrogate
        var lowSurrogate
        var index = -1
        var length = arguments.length
        if (!length) {
          return ''
        }
        var result = ''
        while (++index < length) {
          var codePoint = Number(arguments[index])
          if (
            !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
            codePoint < 0 || // not a valid Unicode code point
            codePoint > 0x10FFFF || // not a valid Unicode code point
            floor(codePoint) !== codePoint // not an integer
          ) {
            throw RangeError('Invalid code point: ' + codePoint)
          }
          if (codePoint <= 0xFFFF) { // BMP code point
            codeUnits.push(codePoint)
          } else { // Astral code point; split in surrogate halves
            // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
            codePoint -= 0x10000
            highSurrogate = (codePoint >> 10) + 0xD800
            lowSurrogate = (codePoint % 0x400) + 0xDC00
            codeUnits.push(highSurrogate, lowSurrogate)
          }
          if (index + 1 === length || codeUnits.length > MAX_SIZE) {
            result += stringFromCharCode.apply(null, codeUnits)
            codeUnits.length = 0
          }
        }
        return result
      }
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(String, 'fromCodePoint', {
          value: fromCodePoint,
          configurable: true,
          writable: true
        })
      } else {
        String.fromCodePoint = fromCodePoint
      }
    }())
  }
})( false ? undefined : exports)


/***/ }),

/***/ "./node_modules/xml-js/lib/array-helper.js":
/*!*************************************************!*\
  !*** ./node_modules/xml-js/lib/array-helper.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {

  isArray: function(value) {
    if (Array.isArray) {
      return Array.isArray(value);
    }
    // fallback for older browsers like  IE 8
    return Object.prototype.toString.call( value ) === '[object Array]';
  }

};


/***/ }),

/***/ "./node_modules/xml-js/lib/index.js":
/*!******************************************!*\
  !*** ./node_modules/xml-js/lib/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*jslint node:true */

var xml2js = __webpack_require__(/*! ./xml2js */ "./node_modules/xml-js/lib/xml2js.js");
var xml2json = __webpack_require__(/*! ./xml2json */ "./node_modules/xml-js/lib/xml2json.js");
var js2xml = __webpack_require__(/*! ./js2xml */ "./node_modules/xml-js/lib/js2xml.js");
var json2xml = __webpack_require__(/*! ./json2xml */ "./node_modules/xml-js/lib/json2xml.js");

module.exports = {
  xml2js: xml2js,
  xml2json: xml2json,
  js2xml: js2xml,
  json2xml: json2xml
};


/***/ }),

/***/ "./node_modules/xml-js/lib/js2xml.js":
/*!*******************************************!*\
  !*** ./node_modules/xml-js/lib/js2xml.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var helper = __webpack_require__(/*! ./options-helper */ "./node_modules/xml-js/lib/options-helper.js");
var isArray = __webpack_require__(/*! ./array-helper */ "./node_modules/xml-js/lib/array-helper.js").isArray;

var currentElement, currentElementName;

function validateOptions(userOptions) {
  var options = helper.copyOptions(userOptions);
  helper.ensureFlagExists('ignoreDeclaration', options);
  helper.ensureFlagExists('ignoreInstruction', options);
  helper.ensureFlagExists('ignoreAttributes', options);
  helper.ensureFlagExists('ignoreText', options);
  helper.ensureFlagExists('ignoreComment', options);
  helper.ensureFlagExists('ignoreCdata', options);
  helper.ensureFlagExists('ignoreDoctype', options);
  helper.ensureFlagExists('compact', options);
  helper.ensureFlagExists('indentText', options);
  helper.ensureFlagExists('indentCdata', options);
  helper.ensureFlagExists('indentAttributes', options);
  helper.ensureFlagExists('indentInstruction', options);
  helper.ensureFlagExists('fullTagEmptyElement', options);
  helper.ensureFlagExists('noQuotesForNativeAttributes', options);
  helper.ensureSpacesExists(options);
  if (typeof options.spaces === 'number') {
    options.spaces = Array(options.spaces + 1).join(' ');
  }
  helper.ensureKeyExists('declaration', options);
  helper.ensureKeyExists('instruction', options);
  helper.ensureKeyExists('attributes', options);
  helper.ensureKeyExists('text', options);
  helper.ensureKeyExists('comment', options);
  helper.ensureKeyExists('cdata', options);
  helper.ensureKeyExists('doctype', options);
  helper.ensureKeyExists('type', options);
  helper.ensureKeyExists('name', options);
  helper.ensureKeyExists('elements', options);
  helper.checkFnExists('doctype', options);
  helper.checkFnExists('instruction', options);
  helper.checkFnExists('cdata', options);
  helper.checkFnExists('comment', options);
  helper.checkFnExists('text', options);
  helper.checkFnExists('instructionName', options);
  helper.checkFnExists('elementName', options);
  helper.checkFnExists('attributeName', options);
  helper.checkFnExists('attributeValue', options);
  helper.checkFnExists('attributes', options);
  helper.checkFnExists('fullTagEmptyElement', options);
  return options;
}

function writeIndentation(options, depth, firstLine) {
  return (!firstLine && options.spaces ? '\n' : '') + Array(depth + 1).join(options.spaces);
}

function writeAttributes(attributes, options, depth) {
  if (options.ignoreAttributes) {
    return '';
  }
  if ('attributesFn' in options) {
    attributes = options.attributesFn(attributes, currentElementName, currentElement);
  }
  var key, attr, attrName, quote, result = [];
  for (key in attributes) {
    if (attributes.hasOwnProperty(key) && attributes[key] !== null && attributes[key] !== undefined) {
      quote = options.noQuotesForNativeAttributes && typeof attributes[key] !== 'string' ? '' : '"';
      attr = '' + attributes[key]; // ensure number and boolean are converted to String
      attr = attr.replace(/"/g, '&quot;');
      attrName = 'attributeNameFn' in options ? options.attributeNameFn(key, attr, currentElementName, currentElement) : key;
      result.push((options.spaces && options.indentAttributes? writeIndentation(options, depth+1, false) : ' '));
      result.push(attrName + '=' + quote + ('attributeValueFn' in options ? options.attributeValueFn(attr, key, currentElementName, currentElement) : attr) + quote);
    }
  }
  if (attributes && Object.keys(attributes).length && options.spaces && options.indentAttributes) {
    result.push(writeIndentation(options, depth, false));
  }
  return result.join('');
}

function writeDeclaration(declaration, options, depth) {
  currentElement = declaration;
  currentElementName = 'xml';
  return options.ignoreDeclaration ? '' :  '<?' + 'xml' + writeAttributes(declaration[options.attributesKey], options, depth) + '?>';
}

function writeInstruction(instruction, options, depth) {
  if (options.ignoreInstruction) {
    return '';
  }
  var key;
  for (key in instruction) {
    if (instruction.hasOwnProperty(key)) {
      break;
    }
  }
  var instructionName = 'instructionNameFn' in options ? options.instructionNameFn(key, instruction[key], currentElementName, currentElement) : key;
  if (typeof instruction[key] === 'object') {
    currentElement = instruction;
    currentElementName = instructionName;
    return '<?' + instructionName + writeAttributes(instruction[key][options.attributesKey], options, depth) + '?>';
  } else {
    var instructionValue = instruction[key] ? instruction[key] : '';
    if ('instructionFn' in options) instructionValue = options.instructionFn(instructionValue, key, currentElementName, currentElement);
    return '<?' + instructionName + (instructionValue ? ' ' + instructionValue : '') + '?>';
  }
}

function writeComment(comment, options) {
  return options.ignoreComment ? '' : '<!--' + ('commentFn' in options ? options.commentFn(comment, currentElementName, currentElement) : comment) + '-->';
}

function writeCdata(cdata, options) {
  return options.ignoreCdata ? '' : '<![CDATA[' + ('cdataFn' in options ? options.cdataFn(cdata, currentElementName, currentElement) : cdata.replace(']]>', ']]]]><![CDATA[>')) + ']]>';
}

function writeDoctype(doctype, options) {
  return options.ignoreDoctype ? '' : '<!DOCTYPE ' + ('doctypeFn' in options ? options.doctypeFn(doctype, currentElementName, currentElement) : doctype) + '>';
}

function writeText(text, options) {
  if (options.ignoreText) return '';
  text = '' + text; // ensure Number and Boolean are converted to String
  text = text.replace(/&amp;/g, '&'); // desanitize to avoid double sanitization
  text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return 'textFn' in options ? options.textFn(text, currentElementName, currentElement) : text;
}

function hasContent(element, options) {
  var i;
  if (element.elements && element.elements.length) {
    for (i = 0; i < element.elements.length; ++i) {
      switch (element.elements[i][options.typeKey]) {
      case 'text':
        if (options.indentText) {
          return true;
        }
        break; // skip to next key
      case 'cdata':
        if (options.indentCdata) {
          return true;
        }
        break; // skip to next key
      case 'instruction':
        if (options.indentInstruction) {
          return true;
        }
        break; // skip to next key
      case 'doctype':
      case 'comment':
      case 'element':
        return true;
      default:
        return true;
      }
    }
  }
  return false;
}

function writeElement(element, options, depth) {
  currentElement = element;
  currentElementName = element.name;
  var xml = [], elementName = 'elementNameFn' in options ? options.elementNameFn(element.name, element) : element.name;
  xml.push('<' + elementName);
  if (element[options.attributesKey]) {
    xml.push(writeAttributes(element[options.attributesKey], options, depth));
  }
  var withClosingTag = element[options.elementsKey] && element[options.elementsKey].length || element[options.attributesKey] && element[options.attributesKey]['xml:space'] === 'preserve';
  if (!withClosingTag) {
    if ('fullTagEmptyElementFn' in options) {
      withClosingTag = options.fullTagEmptyElementFn(element.name, element);
    } else {
      withClosingTag = options.fullTagEmptyElement;
    }
  }
  if (withClosingTag) {
    xml.push('>');
    if (element[options.elementsKey] && element[options.elementsKey].length) {
      xml.push(writeElements(element[options.elementsKey], options, depth + 1));
      currentElement = element;
      currentElementName = element.name;
    }
    xml.push(options.spaces && hasContent(element, options) ? '\n' + Array(depth + 1).join(options.spaces) : '');
    xml.push('</' + elementName + '>');
  } else {
    xml.push('/>');
  }
  return xml.join('');
}

function writeElements(elements, options, depth, firstLine) {
  return elements.reduce(function (xml, element) {
    var indent = writeIndentation(options, depth, firstLine && !xml);
    switch (element.type) {
    case 'element': return xml + indent + writeElement(element, options, depth);
    case 'comment': return xml + indent + writeComment(element[options.commentKey], options);
    case 'doctype': return xml + indent + writeDoctype(element[options.doctypeKey], options);
    case 'cdata': return xml + (options.indentCdata ? indent : '') + writeCdata(element[options.cdataKey], options);
    case 'text': return xml + (options.indentText ? indent : '') + writeText(element[options.textKey], options);
    case 'instruction':
      var instruction = {};
      instruction[element[options.nameKey]] = element[options.attributesKey] ? element : element[options.instructionKey];
      return xml + (options.indentInstruction ? indent : '') + writeInstruction(instruction, options, depth);
    }
  }, '');
}

function hasContentCompact(element, options, anyContent) {
  var key;
  for (key in element) {
    if (element.hasOwnProperty(key)) {
      switch (key) {
      case options.parentKey:
      case options.attributesKey:
        break; // skip to next key
      case options.textKey:
        if (options.indentText || anyContent) {
          return true;
        }
        break; // skip to next key
      case options.cdataKey:
        if (options.indentCdata || anyContent) {
          return true;
        }
        break; // skip to next key
      case options.instructionKey:
        if (options.indentInstruction || anyContent) {
          return true;
        }
        break; // skip to next key
      case options.doctypeKey:
      case options.commentKey:
        return true;
      default:
        return true;
      }
    }
  }
  return false;
}

function writeElementCompact(element, name, options, depth, indent) {
  currentElement = element;
  currentElementName = name;
  var elementName = 'elementNameFn' in options ? options.elementNameFn(name, element) : name;
  if (typeof element === 'undefined' || element === null || element === '') {
    return 'fullTagEmptyElementFn' in options && options.fullTagEmptyElementFn(name, element) || options.fullTagEmptyElement ? '<' + elementName + '></' + elementName + '>' : '<' + elementName + '/>';
  }
  var xml = [];
  if (name) {
    xml.push('<' + elementName);
    if (typeof element !== 'object') {
      xml.push('>' + writeText(element,options) + '</' + elementName + '>');
      return xml.join('');
    }
    if (element[options.attributesKey]) {
      xml.push(writeAttributes(element[options.attributesKey], options, depth));
    }
    var withClosingTag = hasContentCompact(element, options, true) || element[options.attributesKey] && element[options.attributesKey]['xml:space'] === 'preserve';
    if (!withClosingTag) {
      if ('fullTagEmptyElementFn' in options) {
        withClosingTag = options.fullTagEmptyElementFn(name, element);
      } else {
        withClosingTag = options.fullTagEmptyElement;
      }
    }
    if (withClosingTag) {
      xml.push('>');
    } else {
      xml.push('/>');
      return xml.join('');
    }
  }
  xml.push(writeElementsCompact(element, options, depth + 1, false));
  currentElement = element;
  currentElementName = name;
  if (name) {
    xml.push((indent ? writeIndentation(options, depth, false) : '') + '</' + elementName + '>');
  }
  return xml.join('');
}

function writeElementsCompact(element, options, depth, firstLine) {
  var i, key, nodes, xml = [];
  for (key in element) {
    if (element.hasOwnProperty(key)) {
      nodes = isArray(element[key]) ? element[key] : [element[key]];
      for (i = 0; i < nodes.length; ++i) {
        switch (key) {
        case options.declarationKey: xml.push(writeDeclaration(nodes[i], options, depth)); break;
        case options.instructionKey: xml.push((options.indentInstruction ? writeIndentation(options, depth, firstLine) : '') + writeInstruction(nodes[i], options, depth)); break;
        case options.attributesKey: case options.parentKey: break; // skip
        case options.textKey: xml.push((options.indentText ? writeIndentation(options, depth, firstLine) : '') + writeText(nodes[i], options)); break;
        case options.cdataKey: xml.push((options.indentCdata ? writeIndentation(options, depth, firstLine) : '') + writeCdata(nodes[i], options)); break;
        case options.doctypeKey: xml.push(writeIndentation(options, depth, firstLine) + writeDoctype(nodes[i], options)); break;
        case options.commentKey: xml.push(writeIndentation(options, depth, firstLine) + writeComment(nodes[i], options)); break;
        default: xml.push(writeIndentation(options, depth, firstLine) + writeElementCompact(nodes[i], key, options, depth, hasContentCompact(nodes[i], options)));
        }
        firstLine = firstLine && !xml.length;
      }
    }
  }
  return xml.join('');
}

module.exports = function (js, options) {
  options = validateOptions(options);
  var xml = [];
  currentElement = js;
  currentElementName = '_root_';
  if (options.compact) {
    xml.push(writeElementsCompact(js, options, 0, true));
  } else {
    if (js[options.declarationKey]) {
      xml.push(writeDeclaration(js[options.declarationKey], options, 0));
    }
    if (js[options.elementsKey] && js[options.elementsKey].length) {
      xml.push(writeElements(js[options.elementsKey], options, 0, !xml.length));
    }
  }
  return xml.join('');
};


/***/ }),

/***/ "./node_modules/xml-js/lib/json2xml.js":
/*!*********************************************!*\
  !*** ./node_modules/xml-js/lib/json2xml.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var js2xml = __webpack_require__(/*! ./js2xml.js */ "./node_modules/xml-js/lib/js2xml.js");

module.exports = function (json, options) {
  if (json instanceof Buffer) {
    json = json.toString();
  }
  var js = null;
  if (typeof (json) === 'string') {
    try {
      js = JSON.parse(json);
    } catch (e) {
      throw new Error('The JSON structure is invalid');
    }
  } else {
    js = json;
  }
  return js2xml(js, options);
};


/***/ }),

/***/ "./node_modules/xml-js/lib/options-helper.js":
/*!***************************************************!*\
  !*** ./node_modules/xml-js/lib/options-helper.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./array-helper */ "./node_modules/xml-js/lib/array-helper.js").isArray;

module.exports = {

  copyOptions: function (options) {
    var key, copy = {};
    for (key in options) {
      if (options.hasOwnProperty(key)) {
        copy[key] = options[key];
      }
    }
    return copy;
  },

  ensureFlagExists: function (item, options) {
    if (!(item in options) || typeof options[item] !== 'boolean') {
      options[item] = false;
    }
  },

  ensureSpacesExists: function (options) {
    if (!('spaces' in options) || (typeof options.spaces !== 'number' && typeof options.spaces !== 'string')) {
      options.spaces = 0;
    }
  },

  ensureAlwaysArrayExists: function (options) {
    if (!('alwaysArray' in options) || (typeof options.alwaysArray !== 'boolean' && !isArray(options.alwaysArray))) {
      options.alwaysArray = false;
    }
  },

  ensureKeyExists: function (key, options) {
    if (!(key + 'Key' in options) || typeof options[key + 'Key'] !== 'string') {
      options[key + 'Key'] = options.compact ? '_' + key : key;
    }
  },

  checkFnExists: function (key, options) {
    return key + 'Fn' in options;
  }

};


/***/ }),

/***/ "./node_modules/xml-js/lib/xml2js.js":
/*!*******************************************!*\
  !*** ./node_modules/xml-js/lib/xml2js.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var sax = __webpack_require__(/*! sax */ "./node_modules/sax/lib/sax.js");
var expat /*= require('node-expat');*/ = { on: function () { }, parse: function () { } };
var helper = __webpack_require__(/*! ./options-helper */ "./node_modules/xml-js/lib/options-helper.js");
var isArray = __webpack_require__(/*! ./array-helper */ "./node_modules/xml-js/lib/array-helper.js").isArray;

var options;
var pureJsParser = true;
var currentElement;

function validateOptions(userOptions) {
  options = helper.copyOptions(userOptions);
  helper.ensureFlagExists('ignoreDeclaration', options);
  helper.ensureFlagExists('ignoreInstruction', options);
  helper.ensureFlagExists('ignoreAttributes', options);
  helper.ensureFlagExists('ignoreText', options);
  helper.ensureFlagExists('ignoreComment', options);
  helper.ensureFlagExists('ignoreCdata', options);
  helper.ensureFlagExists('ignoreDoctype', options);
  helper.ensureFlagExists('compact', options);
  helper.ensureFlagExists('alwaysChildren', options);
  helper.ensureFlagExists('addParent', options);
  helper.ensureFlagExists('trim', options);
  helper.ensureFlagExists('nativeType', options);
  helper.ensureFlagExists('nativeTypeAttributes', options);
  helper.ensureFlagExists('sanitize', options);
  helper.ensureFlagExists('instructionHasAttributes', options);
  helper.ensureFlagExists('captureSpacesBetweenElements', options);
  helper.ensureAlwaysArrayExists(options);
  helper.ensureKeyExists('declaration', options);
  helper.ensureKeyExists('instruction', options);
  helper.ensureKeyExists('attributes', options);
  helper.ensureKeyExists('text', options);
  helper.ensureKeyExists('comment', options);
  helper.ensureKeyExists('cdata', options);
  helper.ensureKeyExists('doctype', options);
  helper.ensureKeyExists('type', options);
  helper.ensureKeyExists('name', options);
  helper.ensureKeyExists('elements', options);
  helper.ensureKeyExists('parent', options);
  helper.checkFnExists('doctype', options);
  helper.checkFnExists('instruction', options);
  helper.checkFnExists('cdata', options);
  helper.checkFnExists('comment', options);
  helper.checkFnExists('text', options);
  helper.checkFnExists('instructionName', options);
  helper.checkFnExists('elementName', options);
  helper.checkFnExists('attributeName', options);
  helper.checkFnExists('attributeValue', options);
  helper.checkFnExists('attributes', options);
  return options;
}

function nativeType(value) {
  var nValue = Number(value);
  if (!isNaN(nValue)) {
    return nValue;
  }
  var bValue = value.toLowerCase();
  if (bValue === 'true') {
    return true;
  } else if (bValue === 'false') {
    return false;
  }
  return value;
}

function addField(type, value) {
  var key;
  if (options.compact) {
    if (
      !currentElement[options[type + 'Key']] &&
      (isArray(options.alwaysArray) ? options.alwaysArray.indexOf(options[type + 'Key']) !== -1 : options.alwaysArray)
    ) {
      currentElement[options[type + 'Key']] = [];
    }
    if (currentElement[options[type + 'Key']] && !isArray(currentElement[options[type + 'Key']])) {
      currentElement[options[type + 'Key']] = [currentElement[options[type + 'Key']]];
    }
    if (type + 'Fn' in options && typeof value === 'string') {
      value = options[type + 'Fn'](value, currentElement);
    }
    if (type === 'instruction' && ('instructionFn' in options || 'instructionNameFn' in options)) {
      for (key in value) {
        if (value.hasOwnProperty(key)) {
          if ('instructionFn' in options) {
            value[key] = options.instructionFn(value[key], key, currentElement);
          } else {
            var temp = value[key];
            delete value[key];
            value[options.instructionNameFn(key, temp, currentElement)] = temp;
          }
        }
      }
    }
    if (isArray(currentElement[options[type + 'Key']])) {
      currentElement[options[type + 'Key']].push(value);
    } else {
      currentElement[options[type + 'Key']] = value;
    }
  } else {
    if (!currentElement[options.elementsKey]) {
      currentElement[options.elementsKey] = [];
    }
    var element = {};
    element[options.typeKey] = type;
    if (type === 'instruction') {
      for (key in value) {
        if (value.hasOwnProperty(key)) {
          break;
        }
      }
      element[options.nameKey] = 'instructionNameFn' in options ? options.instructionNameFn(key, value, currentElement) : key;
      if (options.instructionHasAttributes) {
        element[options.attributesKey] = value[key][options.attributesKey];
        if ('instructionFn' in options) {
          element[options.attributesKey] = options.instructionFn(element[options.attributesKey], key, currentElement);
        }
      } else {
        if ('instructionFn' in options) {
          value[key] = options.instructionFn(value[key], key, currentElement);
        }
        element[options.instructionKey] = value[key];
      }
    } else {
      if (type + 'Fn' in options) {
        value = options[type + 'Fn'](value, currentElement);
      }
      element[options[type + 'Key']] = value;
    }
    if (options.addParent) {
      element[options.parentKey] = currentElement;
    }
    currentElement[options.elementsKey].push(element);
  }
}

function manipulateAttributes(attributes) {
  if ('attributesFn' in options && attributes) {
    attributes = options.attributesFn(attributes, currentElement);
  }
  if ((options.trim || 'attributeValueFn' in options || 'attributeNameFn' in options || options.nativeTypeAttributes) && attributes) {
    var key;
    for (key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        if (options.trim) attributes[key] = attributes[key].trim();
        if (options.nativeTypeAttributes) {
          attributes[key] = nativeType(attributes[key]);
        }
        if ('attributeValueFn' in options) attributes[key] = options.attributeValueFn(attributes[key], key, currentElement);
        if ('attributeNameFn' in options) {
          var temp = attributes[key];
          delete attributes[key];
          attributes[options.attributeNameFn(key, attributes[key], currentElement)] = temp;
        }
      }
    }
  }
  return attributes;
}

function onInstruction(instruction) {
  var attributes = {};
  if (instruction.body && (instruction.name.toLowerCase() === 'xml' || options.instructionHasAttributes)) {
    var attrsRegExp = /([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g;
    var match;
    while ((match = attrsRegExp.exec(instruction.body)) !== null) {
      attributes[match[1]] = match[2] || match[3] || match[4];
    }
    attributes = manipulateAttributes(attributes);
  }
  if (instruction.name.toLowerCase() === 'xml') {
    if (options.ignoreDeclaration) {
      return;
    }
    currentElement[options.declarationKey] = {};
    if (Object.keys(attributes).length) {
      currentElement[options.declarationKey][options.attributesKey] = attributes;
    }
    if (options.addParent) {
      currentElement[options.declarationKey][options.parentKey] = currentElement;
    }
  } else {
    if (options.ignoreInstruction) {
      return;
    }
    if (options.trim) {
      instruction.body = instruction.body.trim();
    }
    var value = {};
    if (options.instructionHasAttributes && Object.keys(attributes).length) {
      value[instruction.name] = {};
      value[instruction.name][options.attributesKey] = attributes;
    } else {
      value[instruction.name] = instruction.body;
    }
    addField('instruction', value);
  }
}

function onStartElement(name, attributes) {
  var element;
  if (typeof name === 'object') {
    attributes = name.attributes;
    name = name.name;
  }
  attributes = manipulateAttributes(attributes);
  if ('elementNameFn' in options) {
    name = options.elementNameFn(name, currentElement);
  }
  if (options.compact) {
    element = {};
    if (!options.ignoreAttributes && attributes && Object.keys(attributes).length) {
      element[options.attributesKey] = {};
      var key;
      for (key in attributes) {
        if (attributes.hasOwnProperty(key)) {
          element[options.attributesKey][key] = attributes[key];
        }
      }
    }
    if (
      !(name in currentElement) &&
      (isArray(options.alwaysArray) ? options.alwaysArray.indexOf(name) !== -1 : options.alwaysArray)
    ) {
      currentElement[name] = [];
    }
    if (currentElement[name] && !isArray(currentElement[name])) {
      currentElement[name] = [currentElement[name]];
    }
    if (isArray(currentElement[name])) {
      currentElement[name].push(element);
    } else {
      currentElement[name] = element;
    }
  } else {
    if (!currentElement[options.elementsKey]) {
      currentElement[options.elementsKey] = [];
    }
    element = {};
    element[options.typeKey] = 'element';
    element[options.nameKey] = name;
    if (!options.ignoreAttributes && attributes && Object.keys(attributes).length) {
      element[options.attributesKey] = attributes;
    }
    if (options.alwaysChildren) {
      element[options.elementsKey] = [];
    }
    currentElement[options.elementsKey].push(element);
  }
  element[options.parentKey] = currentElement; // will be deleted in onEndElement() if !options.addParent
  currentElement = element;
}

function onText(text) {
  if (options.ignoreText) {
    return;
  }
  if (!text.trim() && !options.captureSpacesBetweenElements) {
    return;
  }
  if (options.trim) {
    text = text.trim();
  }
  if (options.nativeType) {
    text = nativeType(text);
  }
  if (options.sanitize) {
    text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  addField('text', text);
}

function onComment(comment) {
  if (options.ignoreComment) {
    return;
  }
  if (options.trim) {
    comment = comment.trim();
  }
  addField('comment', comment);
}

function onEndElement(name) {
  var parentElement = currentElement[options.parentKey];
  if (!options.addParent) {
    delete currentElement[options.parentKey];
  }
  currentElement = parentElement;
}

function onCdata(cdata) {
  if (options.ignoreCdata) {
    return;
  }
  if (options.trim) {
    cdata = cdata.trim();
  }
  addField('cdata', cdata);
}

function onDoctype(doctype) {
  if (options.ignoreDoctype) {
    return;
  }
  doctype = doctype.replace(/^ /, '');
  if (options.trim) {
    doctype = doctype.trim();
  }
  addField('doctype', doctype);
}

function onError(error) {
  error.note = error; //console.error(error);
}

module.exports = function (xml, userOptions) {

  var parser = pureJsParser ? sax.parser(true, {}) : parser = new expat.Parser('UTF-8');
  var result = {};
  currentElement = result;

  options = validateOptions(userOptions);

  if (pureJsParser) {
    parser.opt = {strictEntities: true};
    parser.onopentag = onStartElement;
    parser.ontext = onText;
    parser.oncomment = onComment;
    parser.onclosetag = onEndElement;
    parser.onerror = onError;
    parser.oncdata = onCdata;
    parser.ondoctype = onDoctype;
    parser.onprocessinginstruction = onInstruction;
  } else {
    parser.on('startElement', onStartElement);
    parser.on('text', onText);
    parser.on('comment', onComment);
    parser.on('endElement', onEndElement);
    parser.on('error', onError);
    //parser.on('startCdata', onStartCdata);
    //parser.on('endCdata', onEndCdata);
    //parser.on('entityDecl', onEntityDecl);
  }

  if (pureJsParser) {
    parser.write(xml).close();
  } else {
    if (!parser.parse(xml)) {
      throw new Error('XML parsing error: ' + parser.getError());
    }
  }

  if (result[options.elementsKey]) {
    var temp = result[options.elementsKey];
    delete result[options.elementsKey];
    result[options.elementsKey] = temp;
    delete result.text;
  }

  return result;

};


/***/ }),

/***/ "./node_modules/xml-js/lib/xml2json.js":
/*!*********************************************!*\
  !*** ./node_modules/xml-js/lib/xml2json.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var helper = __webpack_require__(/*! ./options-helper */ "./node_modules/xml-js/lib/options-helper.js");
var xml2js = __webpack_require__(/*! ./xml2js */ "./node_modules/xml-js/lib/xml2js.js");

function validateOptions (userOptions) {
  var options = helper.copyOptions(userOptions);
  helper.ensureSpacesExists(options);
  return options;
}

module.exports = function(xml, userOptions) {
  var options, js, json, parentKey;
  options = validateOptions(userOptions);
  js = xml2js(xml, options);
  parentKey = 'compact' in options && options.compact ? '_parent' : 'parent';
  // parentKey = ptions.compact ? '_parent' : 'parent'; // consider this
  if ('addParent' in options && options.addParent) {
    json = JSON.stringify(js, function (k, v) { return k === parentKey? '_' : v; }, options.spaces);
  } else {
    json = JSON.stringify(js, null, options.spaces);
  }
  return json.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
};


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(FormData, fetch) {
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var xml_js_1 = __webpack_require__(/*! xml-js */ "./node_modules/xml-js/lib/index.js");
exports.request = function (endpoint, method, body, headers, type, session) { return __awaiter(_this, void 0, void 0, function () {
    var form, response, xml;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (body) {
                    form = new FormData();
                    form.append("method", "cli");
                    form.append("xml", "1");
                    form.append("imei", "cli");
                    session && form.append("token", session.token);
                    Object.keys(body).map(function (key) {
                        form.append(key, body[key]);
                    });
                }
                headers = __assign({}, (session && {
                    Cookie: "PHPSESSID=" + encodeURIComponent(session.sessionid) + ";"
                }), headers);
                return [4 /*yield*/, fetch(endpoint, __assign({ method: method }, (body && { body: form }), { headers: headers }))];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error("Error requesting data.");
                }
                return [4 /*yield*/, response.text()];
            case 2:
                xml = _a.sent();
                if (type === "js") {
                    return [2 /*return*/, xml_js_1.xml2js(xml, { compact: true })];
                }
                return [2 /*return*/, xml];
        }
    });
}); };
exports.ITERATIONS = "https://lastpass.com/iterations.php";
exports.LOGIN = "https://lastpass.com/login.php";
exports.VAULT = "https://lastpass.com/getaccts.php";
exports.CREATE = "https://lastpass.com/show_website.php";

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/form_data.js"), __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/lib/index.mjs")["default"]))

/***/ }),

/***/ "./src/lastpass.ts":
/*!*************************!*\
  !*** ./src/lastpass.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __webpack_require__(/*! crypto */ "crypto");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");
var LastPass = /** @class */ (function () {
    function LastPass() {
        var _this = this;
        this.login = function (username, password, otp) { return __awaiter(_this, void 0, void 0, function () {
            var iterations, hash, body, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getIterations(username)];
                    case 1:
                        iterations = _a.sent();
                        this.key = this.getKey(username, password, iterations.toString());
                        hash = this.getHash(this.key, password);
                        body = __assign({ username: username, hash: hash, iterations: iterations }, (otp && { otp: otp }));
                        return [4 /*yield*/, this.request(helpers_1.LOGIN, "POST", body, {}, "js")];
                    case 2:
                        json = _a.sent();
                        if (!json ||
                            !json.ok ||
                            !json.ok._attributes ||
                            !json.ok._attributes.sessionid) {
                            throw new Error("Bad session response.");
                        }
                        else {
                            this.session = json.ok._attributes;
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.getAccounts = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.decryptAccounts()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.addAccount = function (username, password, url, name, otp) { return __awaiter(_this, void 0, void 0, function () {
            var body, msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        username = this.encrypt(username);
                        password = this.encrypt(password);
                        name = this.encrypt(name);
                        if (otp)
                            otp = this.encrypt(otp);
                        url = Buffer.from(url).toString("hex");
                        body = {
                            extjs: "1",
                            aid: "0",
                            folder: "none",
                            grouping: "",
                            username: username,
                            password: password,
                            url: url,
                            name: name,
                            otp: otp
                        };
                        return [4 /*yield*/, this.request(helpers_1.CREATE, "POST", body, {}, "js")];
                    case 1:
                        msg = (_a.sent()).xmlresponse.result._attributes.msg;
                        if (msg !== "accountadded")
                            throw new Error("An unknown error occured while adding the record.");
                        return [2 /*return*/];
                }
            });
        }); };
        this.getHash = function (key, password) {
            return crypto_1.pbkdf2Sync(key, Buffer.from(password), 1, 32, "sha256").toString("hex");
        };
        this.getIterations = function (email) { return __awaiter(_this, void 0, void 0, function () {
            var text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request(helpers_1.ITERATIONS, "POST", { email: email })];
                    case 1:
                        text = (_a.sent());
                        return [2 /*return*/, parseInt(text, 10)];
                }
            });
        }); };
        this.fetchAccounts = function () { return __awaiter(_this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request(helpers_1.VAULT, "POST", false, {}, "js")];
                    case 1:
                        account = (_a.sent()).response.accounts.account;
                        return [2 /*return*/, Array.isArray(account) ? account : [account]];
                }
            });
        }); };
        this.decryptAccounts = function () { return __awaiter(_this, void 0, void 0, function () {
            var data, accounts, i, _a, _b, name_1, url, username, p, decryptedAccount;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.fetchAccounts()];
                    case 1:
                        data = _c.sent();
                        accounts = [];
                        for (i = 0; i < data.length; i++) {
                            _a = data[i], _b = _a._attributes, name_1 = _b.name, url = _b.url, username = _b.username, p = _a.login._attributes.p;
                            decryptedAccount = this.decryptAccount({ name: name_1, url: url, username: username, p: p });
                            accounts.push(decryptedAccount);
                        }
                        return [2 /*return*/, accounts];
                }
            });
        }); };
        this.decryptAccount = function (_a) {
            var name = _a.name, p = _a.p, url = _a.url, username = _a.username;
            name = _this.getField(name);
            url = _this.getField(url);
            username = _this.getField(username);
            p = _this.getField(p);
            return { name: name, url: url, username: username, password: p };
        };
        this.getField = function (field) {
            var length = field.length;
            if (length === 0)
                return "";
            var decrypted = "";
            if (field.slice(0, 1) === "!") {
                var _a = field.split("|"), iv = _a[0], payload = _a[1];
                if (iv && payload) {
                    decrypted = _this.decrypt(Buffer.from(payload, "base64"), Buffer.from(iv.slice(1), "base64"));
                }
            }
            else {
                if (field)
                    decrypted = Buffer.from(field, "hex").toString();
            }
            return decrypted;
        };
        this.decrypt = function (data, iv) {
            var decipher = crypto_1.createDecipheriv("aes-256-cbc", _this.key, iv);
            var plaintext = decipher.update(data).toString("utf8");
            plaintext += decipher.final().toString("utf8");
            return plaintext;
        };
        this.encrypt = function (data) {
            var iv = crypto_1.randomBytes(16);
            var cipher = crypto_1.createCipheriv("aes-256-cbc", _this.key, iv);
            var cipherText = cipher.update(Buffer.from(data)).toString("base64");
            cipherText += cipher.final().toString("base64");
            return "!" + iv.toString("base64") + "|" + cipherText;
        };
        this.getKey = function (username, password, iterations) {
            return crypto_1.pbkdf2Sync(Buffer.from(password), Buffer.from(username), parseInt(iterations), 32, "sha256");
        };
        this.request = function (endpoint, method, body, headers, type) {
            if (headers === void 0) { headers = {}; }
            if (type === void 0) { type = "text"; }
            return helpers_1.request(endpoint, method, body, headers, type, _this.session);
        };
    }
    return LastPass;
}());
exports.default = LastPass;


/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("string_decoder");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXN5bmNraXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FzeW5ja2l0L2xpYi9hYm9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXN5bmNraXQvbGliL2FzeW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hc3luY2tpdC9saWIvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FzeW5ja2l0L2xpYi9pdGVyYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hc3luY2tpdC9saWIvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FzeW5ja2l0L2xpYi90ZXJtaW5hdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hc3luY2tpdC9wYXJhbGxlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXN5bmNraXQvc2VyaWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hc3luY2tpdC9zZXJpYWxPcmRlcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb21iaW5lZC1zdHJlYW0vbGliL2NvbWJpbmVkX3N0cmVhbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVsYXllZC1zdHJlYW0vbGliL2RlbGF5ZWRfc3RyZWFtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb3JtLWRhdGEvbGliL2Zvcm1fZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybS1kYXRhL2xpYi9wb3B1bGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWltZS1kYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWltZS10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9saWIvaW5kZXgubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zYXgvbGliL3NheC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveG1sLWpzL2xpYi9hcnJheS1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3htbC1qcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3htbC1qcy9saWIvanMyeG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy94bWwtanMvbGliL2pzb24yeG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy94bWwtanMvbGliL29wdGlvbnMtaGVscGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy94bWwtanMvbGliL3htbDJqcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveG1sLWpzL2xpYi94bWwyanNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzdHBhc3MudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3J5cHRvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RyZWFtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RyaW5nX2RlY29kZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dGlsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiemxpYlwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDBEQUFlO0FBQ3pDLGtCQUFrQixtQkFBTyxDQUFDLHNEQUFhO0FBQ3ZDLGtCQUFrQixtQkFBTyxDQUFDLG9FQUFvQjtBQUM5Qzs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVCQSxZQUFZLG1CQUFPLENBQUMsd0RBQVk7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGdCQUFnQixFQUFFOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pCQSxZQUFZLG1CQUFPLENBQUMsd0RBQVk7QUFDaEMsWUFBWSxtQkFBTyxDQUFDLHdEQUFZO0FBQ2hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsYUFBYSxjQUFjO0FBQzNCLGFBQWEsTUFBTTtBQUNuQixhQUFhLFNBQVM7QUFDdEIsYUFBYSxlQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGFBQWEsY0FBYztBQUMzQjtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDcENBLFlBQVksbUJBQU8sQ0FBQyx3REFBWTtBQUNoQyxZQUFZLG1CQUFPLENBQUMsd0RBQVk7QUFDaEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1QkEsaUJBQWlCLG1CQUFPLENBQUMsZ0VBQWtCO0FBQzNDLGlCQUFpQixtQkFBTyxDQUFDLDREQUFnQjtBQUN6QyxpQkFBaUIsbUJBQU8sQ0FBQyxzRUFBcUI7QUFDOUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsU0FBUztBQUN0QixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxQ0Esb0JBQW9CLG1CQUFPLENBQUMsb0VBQW9COztBQUVoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixhQUFhLFNBQVM7QUFDdEIsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkEsaUJBQWlCLG1CQUFPLENBQUMsZ0VBQWtCO0FBQzNDLGlCQUFpQixtQkFBTyxDQUFDLDREQUFnQjtBQUN6QyxpQkFBaUIsbUJBQU8sQ0FBQyxzRUFBcUI7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsU0FBUztBQUN0QixhQUFhLFNBQVM7QUFDdEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkIsYUFBYSxNQUFNO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixhQUFhLE1BQU07QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFFQSxXQUFXLG1CQUFPLENBQUMsa0JBQU07QUFDekIsYUFBYSxtQkFBTyxDQUFDLHNCQUFRO0FBQzdCLG9CQUFvQixtQkFBTyxDQUFDLDJFQUFnQjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvTUEsYUFBYSxtQkFBTyxDQUFDLHNCQUFRO0FBQzdCLFdBQVcsbUJBQU8sQ0FBQyxrQkFBTTs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDMUdBLHFCQUFxQixtQkFBTyxDQUFDLDhFQUFpQjtBQUM5QyxXQUFXLG1CQUFPLENBQUMsa0JBQU07QUFDekIsV0FBVyxtQkFBTyxDQUFDLGtCQUFNO0FBQ3pCLFdBQVcsbUJBQU8sQ0FBQyxrQkFBTTtBQUN6QixZQUFZLG1CQUFPLENBQUMsb0JBQU87QUFDM0IsZUFBZSxtQkFBTyxDQUFDLGdCQUFLO0FBQzVCLFNBQVMsbUJBQU8sQ0FBQyxjQUFJO0FBQ3JCLFdBQVcsbUJBQU8sQ0FBQyxzREFBWTtBQUMvQixlQUFlLG1CQUFPLENBQUMsa0RBQVU7QUFDakMsZUFBZSxtQkFBTyxDQUFDLCtEQUFlOztBQUV0QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFD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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksRUFBRTtBQUNkLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixtQ0FBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLHFCQUFxQjtBQUNyQixFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEM7QUFDNUMsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw4QkFBOEIsV0FBVyxtQkFBbUI7QUFDNUQsRUFBRSwwQkFBMEIsbUNBQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrQkFBa0I7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUNBQUk7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTyxtQkFBbUI7QUFDMUIsVUFBVSxtQkFBbUI7QUFDN0IsTUFBTSxtQkFBbUI7QUFDekIsY0FBYyxtQkFBbUI7QUFDakMsY0FBYyxtQkFBbUI7QUFDakMsV0FBVyxtQkFBbUI7QUFDOUIsU0FBUztBQUNULENBQUM7O0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFDQUFxQzs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELE9BQU87QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELG9CQUFvQjtBQUNwRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNB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LGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0EsMEZBQTBGO0FBQzFGLDJLQUEySztBQUMzSyxrRUFBa0U7QUFDbEUsK0lBQStJO0FBQy9JLGtKQUFrSjtBQUNsSix5SEFBeUg7QUFDekgseUhBQXlIO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvVEEsYUFBYSxtQkFBTyxDQUFDLHdEQUFhOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pCQSxjQUFjLG1CQUFPLENBQUMsaUVBQWdCOztBQUV0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUMxQ0EsVUFBVSxtQkFBTyxDQUFDLDBDQUFLO0FBQ3ZCLG9DQUFvQyxNQUFNLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFO0FBQ3RGLGFBQWEsbUJBQU8sQ0FBQyxxRUFBa0I7QUFDdkMsY0FBYyxtQkFBTyxDQUFDLGlFQUFnQjs7QUFFdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25ELGtDQUFrQyxlQUFlO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7QUNqTkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoibGFzdHBhc3Mubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGFzdHBhc3MudHNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9XG57XG4gIHBhcmFsbGVsICAgICAgOiByZXF1aXJlKCcuL3BhcmFsbGVsLmpzJyksXG4gIHNlcmlhbCAgICAgICAgOiByZXF1aXJlKCcuL3NlcmlhbC5qcycpLFxuICBzZXJpYWxPcmRlcmVkIDogcmVxdWlyZSgnLi9zZXJpYWxPcmRlcmVkLmpzJylcbn07XG4iLCIvLyBBUElcbm1vZHVsZS5leHBvcnRzID0gYWJvcnQ7XG5cbi8qKlxuICogQWJvcnRzIGxlZnRvdmVyIGFjdGl2ZSBqb2JzXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIC0gY3VycmVudCBzdGF0ZSBvYmplY3RcbiAqL1xuZnVuY3Rpb24gYWJvcnQoc3RhdGUpXG57XG4gIE9iamVjdC5rZXlzKHN0YXRlLmpvYnMpLmZvckVhY2goY2xlYW4uYmluZChzdGF0ZSkpO1xuXG4gIC8vIHJlc2V0IGxlZnRvdmVyIGpvYnNcbiAgc3RhdGUuam9icyA9IHt9O1xufVxuXG4vKipcbiAqIENsZWFucyB1cCBsZWZ0b3ZlciBqb2IgYnkgaW52b2tpbmcgYWJvcnQgZnVuY3Rpb24gZm9yIHRoZSBwcm92aWRlZCBqb2IgaWRcbiAqXG4gKiBAdGhpcyAgc3RhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0ga2V5IC0gam9iIGlkIHRvIGFib3J0XG4gKi9cbmZ1bmN0aW9uIGNsZWFuKGtleSlcbntcbiAgaWYgKHR5cGVvZiB0aGlzLmpvYnNba2V5XSA9PSAnZnVuY3Rpb24nKVxuICB7XG4gICAgdGhpcy5qb2JzW2tleV0oKTtcbiAgfVxufVxuIiwidmFyIGRlZmVyID0gcmVxdWlyZSgnLi9kZWZlci5qcycpO1xuXG4vLyBBUElcbm1vZHVsZS5leHBvcnRzID0gYXN5bmM7XG5cbi8qKlxuICogUnVucyBwcm92aWRlZCBjYWxsYmFjayBhc3luY2hyb25vdXNseVxuICogZXZlbiBpZiBjYWxsYmFjayBpdHNlbGYgaXMgbm90XG4gKlxuICogQHBhcmFtICAge2Z1bmN0aW9ufSBjYWxsYmFjayAtIGNhbGxiYWNrIHRvIGludm9rZVxuICogQHJldHVybnMge2Z1bmN0aW9ufSAtIGF1Z21lbnRlZCBjYWxsYmFja1xuICovXG5mdW5jdGlvbiBhc3luYyhjYWxsYmFjaylcbntcbiAgdmFyIGlzQXN5bmMgPSBmYWxzZTtcblxuICAvLyBjaGVjayBpZiBhc3luYyBoYXBwZW5lZFxuICBkZWZlcihmdW5jdGlvbigpIHsgaXNBc3luYyA9IHRydWU7IH0pO1xuXG4gIHJldHVybiBmdW5jdGlvbiBhc3luY19jYWxsYmFjayhlcnIsIHJlc3VsdClcbiAge1xuICAgIGlmIChpc0FzeW5jKVxuICAgIHtcbiAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0KTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIGRlZmVyKGZ1bmN0aW9uIG5leHRUaWNrX2NhbGxiYWNrKClcbiAgICAgIHtcbiAgICAgICAgY2FsbGJhY2soZXJyLCByZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBkZWZlcjtcblxuLyoqXG4gKiBSdW5zIHByb3ZpZGVkIGZ1bmN0aW9uIG9uIG5leHQgaXRlcmF0aW9uIG9mIHRoZSBldmVudCBsb29wXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSBmdW5jdGlvbiB0byBydW5cbiAqL1xuZnVuY3Rpb24gZGVmZXIoZm4pXG57XG4gIHZhciBuZXh0VGljayA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2V0SW1tZWRpYXRlXG4gICAgOiAoXG4gICAgICB0eXBlb2YgcHJvY2VzcyA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgcHJvY2Vzcy5uZXh0VGljayA9PSAnZnVuY3Rpb24nXG4gICAgICA/IHByb2Nlc3MubmV4dFRpY2tcbiAgICAgIDogbnVsbFxuICAgICk7XG5cbiAgaWYgKG5leHRUaWNrKVxuICB7XG4gICAgbmV4dFRpY2soZm4pO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICB9XG59XG4iLCJ2YXIgYXN5bmMgPSByZXF1aXJlKCcuL2FzeW5jLmpzJylcbiAgLCBhYm9ydCA9IHJlcXVpcmUoJy4vYWJvcnQuanMnKVxuICA7XG5cbi8vIEFQSVxubW9kdWxlLmV4cG9ydHMgPSBpdGVyYXRlO1xuXG4vKipcbiAqIEl0ZXJhdGVzIG92ZXIgZWFjaCBqb2Igb2JqZWN0XG4gKlxuICogQHBhcmFtIHthcnJheXxvYmplY3R9IGxpc3QgLSBhcnJheSBvciBvYmplY3QgKG5hbWVkIGxpc3QpIHRvIGl0ZXJhdGUgb3ZlclxuICogQHBhcmFtIHtmdW5jdGlvbn0gaXRlcmF0b3IgLSBpdGVyYXRvciB0byBydW5cbiAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSAtIGN1cnJlbnQgam9iIHN0YXR1c1xuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBpbnZva2VkIHdoZW4gYWxsIGVsZW1lbnRzIHByb2Nlc3NlZFxuICovXG5mdW5jdGlvbiBpdGVyYXRlKGxpc3QsIGl0ZXJhdG9yLCBzdGF0ZSwgY2FsbGJhY2spXG57XG4gIC8vIHN0b3JlIGN1cnJlbnQgaW5kZXhcbiAgdmFyIGtleSA9IHN0YXRlWydrZXllZExpc3QnXSA/IHN0YXRlWydrZXllZExpc3QnXVtzdGF0ZS5pbmRleF0gOiBzdGF0ZS5pbmRleDtcblxuICBzdGF0ZS5qb2JzW2tleV0gPSBydW5Kb2IoaXRlcmF0b3IsIGtleSwgbGlzdFtrZXldLCBmdW5jdGlvbihlcnJvciwgb3V0cHV0KVxuICB7XG4gICAgLy8gZG9uJ3QgcmVwZWF0IHlvdXJzZWxmXG4gICAgLy8gc2tpcCBzZWNvbmRhcnkgY2FsbGJhY2tzXG4gICAgaWYgKCEoa2V5IGluIHN0YXRlLmpvYnMpKVxuICAgIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjbGVhbiB1cCBqb2JzXG4gICAgZGVsZXRlIHN0YXRlLmpvYnNba2V5XTtcblxuICAgIGlmIChlcnJvcilcbiAgICB7XG4gICAgICAvLyBkb24ndCBwcm9jZXNzIHJlc3Qgb2YgdGhlIHJlc3VsdHNcbiAgICAgIC8vIHN0b3Agc3RpbGwgYWN0aXZlIGpvYnNcbiAgICAgIC8vIGFuZCByZXNldCB0aGUgbGlzdFxuICAgICAgYWJvcnQoc3RhdGUpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgc3RhdGUucmVzdWx0c1trZXldID0gb3V0cHV0O1xuICAgIH1cblxuICAgIC8vIHJldHVybiBzYWx2YWdlZCByZXN1bHRzXG4gICAgY2FsbGJhY2soZXJyb3IsIHN0YXRlLnJlc3VsdHMpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSdW5zIGl0ZXJhdG9yIG92ZXIgcHJvdmlkZWQgam9iIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0gICB7ZnVuY3Rpb259IGl0ZXJhdG9yIC0gaXRlcmF0b3IgdG8gaW52b2tlXG4gKiBAcGFyYW0gICB7c3RyaW5nfG51bWJlcn0ga2V5IC0ga2V5L2luZGV4IG9mIHRoZSBlbGVtZW50IGluIHRoZSBsaXN0IG9mIGpvYnNcbiAqIEBwYXJhbSAgIHttaXhlZH0gaXRlbSAtIGpvYiBkZXNjcmlwdGlvblxuICogQHBhcmFtICAge2Z1bmN0aW9ufSBjYWxsYmFjayAtIGludm9rZWQgYWZ0ZXIgaXRlcmF0b3IgaXMgZG9uZSB3aXRoIHRoZSBqb2JcbiAqIEByZXR1cm5zIHtmdW5jdGlvbnxtaXhlZH0gLSBqb2IgYWJvcnQgZnVuY3Rpb24gb3Igc29tZXRoaW5nIGVsc2VcbiAqL1xuZnVuY3Rpb24gcnVuSm9iKGl0ZXJhdG9yLCBrZXksIGl0ZW0sIGNhbGxiYWNrKVxue1xuICB2YXIgYWJvcnRlcjtcblxuICAvLyBhbGxvdyBzaG9ydGN1dCBpZiBpdGVyYXRvciBleHBlY3RzIG9ubHkgdHdvIGFyZ3VtZW50c1xuICBpZiAoaXRlcmF0b3IubGVuZ3RoID09IDIpXG4gIHtcbiAgICBhYm9ydGVyID0gaXRlcmF0b3IoaXRlbSwgYXN5bmMoY2FsbGJhY2spKTtcbiAgfVxuICAvLyBvdGhlcndpc2UgZ28gd2l0aCBmdWxsIHRocmVlIGFyZ3VtZW50c1xuICBlbHNlXG4gIHtcbiAgICBhYm9ydGVyID0gaXRlcmF0b3IoaXRlbSwga2V5LCBhc3luYyhjYWxsYmFjaykpO1xuICB9XG5cbiAgcmV0dXJuIGFib3J0ZXI7XG59XG4iLCIvLyBBUElcbm1vZHVsZS5leHBvcnRzID0gc3RhdGU7XG5cbi8qKlxuICogQ3JlYXRlcyBpbml0aWFsIHN0YXRlIG9iamVjdFxuICogZm9yIGl0ZXJhdGlvbiBvdmVyIGxpc3RcbiAqXG4gKiBAcGFyYW0gICB7YXJyYXl8b2JqZWN0fSBsaXN0IC0gbGlzdCB0byBpdGVyYXRlIG92ZXJcbiAqIEBwYXJhbSAgIHtmdW5jdGlvbnxudWxsfSBzb3J0TWV0aG9kIC0gZnVuY3Rpb24gdG8gdXNlIGZvciBrZXlzIHNvcnQsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciBgbnVsbGAgdG8ga2VlcCB0aGVtIGFzIGlzXG4gKiBAcmV0dXJucyB7b2JqZWN0fSAtIGluaXRpYWwgc3RhdGUgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIHN0YXRlKGxpc3QsIHNvcnRNZXRob2QpXG57XG4gIHZhciBpc05hbWVkTGlzdCA9ICFBcnJheS5pc0FycmF5KGxpc3QpXG4gICAgLCBpbml0U3RhdGUgPVxuICAgIHtcbiAgICAgIGluZGV4ICAgIDogMCxcbiAgICAgIGtleWVkTGlzdDogaXNOYW1lZExpc3QgfHwgc29ydE1ldGhvZCA/IE9iamVjdC5rZXlzKGxpc3QpIDogbnVsbCxcbiAgICAgIGpvYnMgICAgIDoge30sXG4gICAgICByZXN1bHRzICA6IGlzTmFtZWRMaXN0ID8ge30gOiBbXSxcbiAgICAgIHNpemUgICAgIDogaXNOYW1lZExpc3QgPyBPYmplY3Qua2V5cyhsaXN0KS5sZW5ndGggOiBsaXN0Lmxlbmd0aFxuICAgIH1cbiAgICA7XG5cbiAgaWYgKHNvcnRNZXRob2QpXG4gIHtcbiAgICAvLyBzb3J0IGFycmF5IGtleXMgYmFzZWQgb24gaXQncyB2YWx1ZXNcbiAgICAvLyBzb3J0IG9iamVjdCdzIGtleXMganVzdCBvbiBvd24gbWVyaXRcbiAgICBpbml0U3RhdGUua2V5ZWRMaXN0LnNvcnQoaXNOYW1lZExpc3QgPyBzb3J0TWV0aG9kIDogZnVuY3Rpb24oYSwgYilcbiAgICB7XG4gICAgICByZXR1cm4gc29ydE1ldGhvZChsaXN0W2FdLCBsaXN0W2JdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBpbml0U3RhdGU7XG59XG4iLCJ2YXIgYWJvcnQgPSByZXF1aXJlKCcuL2Fib3J0LmpzJylcbiAgLCBhc3luYyA9IHJlcXVpcmUoJy4vYXN5bmMuanMnKVxuICA7XG5cbi8vIEFQSVxubW9kdWxlLmV4cG9ydHMgPSB0ZXJtaW5hdG9yO1xuXG4vKipcbiAqIFRlcm1pbmF0ZXMgam9icyBpbiB0aGUgYXR0YWNoZWQgc3RhdGUgY29udGV4dFxuICpcbiAqIEB0aGlzICBBc3luY0tpdFN0YXRlI1xuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBmaW5hbCBjYWxsYmFjayB0byBpbnZva2UgYWZ0ZXIgdGVybWluYXRpb25cbiAqL1xuZnVuY3Rpb24gdGVybWluYXRvcihjYWxsYmFjaylcbntcbiAgaWYgKCFPYmplY3Qua2V5cyh0aGlzLmpvYnMpLmxlbmd0aClcbiAge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGZhc3QgZm9yd2FyZCBpdGVyYXRpb24gaW5kZXhcbiAgdGhpcy5pbmRleCA9IHRoaXMuc2l6ZTtcblxuICAvLyBhYm9ydCBqb2JzXG4gIGFib3J0KHRoaXMpO1xuXG4gIC8vIHNlbmQgYmFjayByZXN1bHRzIHdlIGhhdmUgc28gZmFyXG4gIGFzeW5jKGNhbGxiYWNrKShudWxsLCB0aGlzLnJlc3VsdHMpO1xufVxuIiwidmFyIGl0ZXJhdGUgICAgPSByZXF1aXJlKCcuL2xpYi9pdGVyYXRlLmpzJylcbiAgLCBpbml0U3RhdGUgID0gcmVxdWlyZSgnLi9saWIvc3RhdGUuanMnKVxuICAsIHRlcm1pbmF0b3IgPSByZXF1aXJlKCcuL2xpYi90ZXJtaW5hdG9yLmpzJylcbiAgO1xuXG4vLyBQdWJsaWMgQVBJXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmFsbGVsO1xuXG4vKipcbiAqIFJ1bnMgaXRlcmF0b3Igb3ZlciBwcm92aWRlZCBhcnJheSBlbGVtZW50cyBpbiBwYXJhbGxlbFxuICpcbiAqIEBwYXJhbSAgIHthcnJheXxvYmplY3R9IGxpc3QgLSBhcnJheSBvciBvYmplY3QgKG5hbWVkIGxpc3QpIHRvIGl0ZXJhdGUgb3ZlclxuICogQHBhcmFtICAge2Z1bmN0aW9ufSBpdGVyYXRvciAtIGl0ZXJhdG9yIHRvIHJ1blxuICogQHBhcmFtICAge2Z1bmN0aW9ufSBjYWxsYmFjayAtIGludm9rZWQgd2hlbiBhbGwgZWxlbWVudHMgcHJvY2Vzc2VkXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IC0gam9icyB0ZXJtaW5hdG9yXG4gKi9cbmZ1bmN0aW9uIHBhcmFsbGVsKGxpc3QsIGl0ZXJhdG9yLCBjYWxsYmFjaylcbntcbiAgdmFyIHN0YXRlID0gaW5pdFN0YXRlKGxpc3QpO1xuXG4gIHdoaWxlIChzdGF0ZS5pbmRleCA8IChzdGF0ZVsna2V5ZWRMaXN0J10gfHwgbGlzdCkubGVuZ3RoKVxuICB7XG4gICAgaXRlcmF0ZShsaXN0LCBpdGVyYXRvciwgc3RhdGUsIGZ1bmN0aW9uKGVycm9yLCByZXN1bHQpXG4gICAge1xuICAgICAgaWYgKGVycm9yKVxuICAgICAge1xuICAgICAgICBjYWxsYmFjayhlcnJvciwgcmVzdWx0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBsb29rcyBsaWtlIGl0J3MgdGhlIGxhc3Qgb25lXG4gICAgICBpZiAoT2JqZWN0LmtleXMoc3RhdGUuam9icykubGVuZ3RoID09PSAwKVxuICAgICAge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBzdGF0ZS5yZXN1bHRzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3RhdGUuaW5kZXgrKztcbiAgfVxuXG4gIHJldHVybiB0ZXJtaW5hdG9yLmJpbmQoc3RhdGUsIGNhbGxiYWNrKTtcbn1cbiIsInZhciBzZXJpYWxPcmRlcmVkID0gcmVxdWlyZSgnLi9zZXJpYWxPcmRlcmVkLmpzJyk7XG5cbi8vIFB1YmxpYyBBUElcbm1vZHVsZS5leHBvcnRzID0gc2VyaWFsO1xuXG4vKipcbiAqIFJ1bnMgaXRlcmF0b3Igb3ZlciBwcm92aWRlZCBhcnJheSBlbGVtZW50cyBpbiBzZXJpZXNcbiAqXG4gKiBAcGFyYW0gICB7YXJyYXl8b2JqZWN0fSBsaXN0IC0gYXJyYXkgb3Igb2JqZWN0IChuYW1lZCBsaXN0KSB0byBpdGVyYXRlIG92ZXJcbiAqIEBwYXJhbSAgIHtmdW5jdGlvbn0gaXRlcmF0b3IgLSBpdGVyYXRvciB0byBydW5cbiAqIEBwYXJhbSAgIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBpbnZva2VkIHdoZW4gYWxsIGVsZW1lbnRzIHByb2Nlc3NlZFxuICogQHJldHVybnMge2Z1bmN0aW9ufSAtIGpvYnMgdGVybWluYXRvclxuICovXG5mdW5jdGlvbiBzZXJpYWwobGlzdCwgaXRlcmF0b3IsIGNhbGxiYWNrKVxue1xuICByZXR1cm4gc2VyaWFsT3JkZXJlZChsaXN0LCBpdGVyYXRvciwgbnVsbCwgY2FsbGJhY2spO1xufVxuIiwidmFyIGl0ZXJhdGUgICAgPSByZXF1aXJlKCcuL2xpYi9pdGVyYXRlLmpzJylcbiAgLCBpbml0U3RhdGUgID0gcmVxdWlyZSgnLi9saWIvc3RhdGUuanMnKVxuICAsIHRlcm1pbmF0b3IgPSByZXF1aXJlKCcuL2xpYi90ZXJtaW5hdG9yLmpzJylcbiAgO1xuXG4vLyBQdWJsaWMgQVBJXG5tb2R1bGUuZXhwb3J0cyA9IHNlcmlhbE9yZGVyZWQ7XG4vLyBzb3J0aW5nIGhlbHBlcnNcbm1vZHVsZS5leHBvcnRzLmFzY2VuZGluZyAgPSBhc2NlbmRpbmc7XG5tb2R1bGUuZXhwb3J0cy5kZXNjZW5kaW5nID0gZGVzY2VuZGluZztcblxuLyoqXG4gKiBSdW5zIGl0ZXJhdG9yIG92ZXIgcHJvdmlkZWQgc29ydGVkIGFycmF5IGVsZW1lbnRzIGluIHNlcmllc1xuICpcbiAqIEBwYXJhbSAgIHthcnJheXxvYmplY3R9IGxpc3QgLSBhcnJheSBvciBvYmplY3QgKG5hbWVkIGxpc3QpIHRvIGl0ZXJhdGUgb3ZlclxuICogQHBhcmFtICAge2Z1bmN0aW9ufSBpdGVyYXRvciAtIGl0ZXJhdG9yIHRvIHJ1blxuICogQHBhcmFtICAge2Z1bmN0aW9ufSBzb3J0TWV0aG9kIC0gY3VzdG9tIHNvcnQgZnVuY3Rpb25cbiAqIEBwYXJhbSAgIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBpbnZva2VkIHdoZW4gYWxsIGVsZW1lbnRzIHByb2Nlc3NlZFxuICogQHJldHVybnMge2Z1bmN0aW9ufSAtIGpvYnMgdGVybWluYXRvclxuICovXG5mdW5jdGlvbiBzZXJpYWxPcmRlcmVkKGxpc3QsIGl0ZXJhdG9yLCBzb3J0TWV0aG9kLCBjYWxsYmFjaylcbntcbiAgdmFyIHN0YXRlID0gaW5pdFN0YXRlKGxpc3QsIHNvcnRNZXRob2QpO1xuXG4gIGl0ZXJhdGUobGlzdCwgaXRlcmF0b3IsIHN0YXRlLCBmdW5jdGlvbiBpdGVyYXRvckhhbmRsZXIoZXJyb3IsIHJlc3VsdClcbiAge1xuICAgIGlmIChlcnJvcilcbiAgICB7XG4gICAgICBjYWxsYmFjayhlcnJvciwgcmVzdWx0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdGF0ZS5pbmRleCsrO1xuXG4gICAgLy8gYXJlIHdlIHRoZXJlIHlldD9cbiAgICBpZiAoc3RhdGUuaW5kZXggPCAoc3RhdGVbJ2tleWVkTGlzdCddIHx8IGxpc3QpLmxlbmd0aClcbiAgICB7XG4gICAgICBpdGVyYXRlKGxpc3QsIGl0ZXJhdG9yLCBzdGF0ZSwgaXRlcmF0b3JIYW5kbGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBkb25lIGhlcmVcbiAgICBjYWxsYmFjayhudWxsLCBzdGF0ZS5yZXN1bHRzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1pbmF0b3IuYmluZChzdGF0ZSwgY2FsbGJhY2spO1xufVxuXG4vKlxuICogLS0gU29ydCBtZXRob2RzXG4gKi9cblxuLyoqXG4gKiBzb3J0IGhlbHBlciB0byBzb3J0IGFycmF5IGVsZW1lbnRzIGluIGFzY2VuZGluZyBvcmRlclxuICpcbiAqIEBwYXJhbSAgIHttaXhlZH0gYSAtIGFuIGl0ZW0gdG8gY29tcGFyZVxuICogQHBhcmFtICAge21peGVkfSBiIC0gYW4gaXRlbSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSAtIGNvbXBhcmlzb24gcmVzdWx0XG4gKi9cbmZ1bmN0aW9uIGFzY2VuZGluZyhhLCBiKVxue1xuICByZXR1cm4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IDA7XG59XG5cbi8qKlxuICogc29ydCBoZWxwZXIgdG8gc29ydCBhcnJheSBlbGVtZW50cyBpbiBkZXNjZW5kaW5nIG9yZGVyXG4gKlxuICogQHBhcmFtICAge21peGVkfSBhIC0gYW4gaXRlbSB0byBjb21wYXJlXG4gKiBAcGFyYW0gICB7bWl4ZWR9IGIgLSBhbiBpdGVtIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IC0gY29tcGFyaXNvbiByZXN1bHRcbiAqL1xuZnVuY3Rpb24gZGVzY2VuZGluZyhhLCBiKVxue1xuICByZXR1cm4gLTEgKiBhc2NlbmRpbmcoYSwgYik7XG59XG4iLCJ2YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbnZhciBTdHJlYW0gPSByZXF1aXJlKCdzdHJlYW0nKS5TdHJlYW07XG52YXIgRGVsYXllZFN0cmVhbSA9IHJlcXVpcmUoJ2RlbGF5ZWQtc3RyZWFtJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tYmluZWRTdHJlYW07XG5mdW5jdGlvbiBDb21iaW5lZFN0cmVhbSgpIHtcbiAgdGhpcy53cml0YWJsZSA9IGZhbHNlO1xuICB0aGlzLnJlYWRhYmxlID0gdHJ1ZTtcbiAgdGhpcy5kYXRhU2l6ZSA9IDA7XG4gIHRoaXMubWF4RGF0YVNpemUgPSAyICogMTAyNCAqIDEwMjQ7XG4gIHRoaXMucGF1c2VTdHJlYW1zID0gdHJ1ZTtcblxuICB0aGlzLl9yZWxlYXNlZCA9IGZhbHNlO1xuICB0aGlzLl9zdHJlYW1zID0gW107XG4gIHRoaXMuX2N1cnJlbnRTdHJlYW0gPSBudWxsO1xuICB0aGlzLl9pbnNpZGVMb29wID0gZmFsc2U7XG4gIHRoaXMuX3BlbmRpbmdOZXh0ID0gZmFsc2U7XG59XG51dGlsLmluaGVyaXRzKENvbWJpbmVkU3RyZWFtLCBTdHJlYW0pO1xuXG5Db21iaW5lZFN0cmVhbS5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHZhciBjb21iaW5lZFN0cmVhbSA9IG5ldyB0aGlzKCk7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGZvciAodmFyIG9wdGlvbiBpbiBvcHRpb25zKSB7XG4gICAgY29tYmluZWRTdHJlYW1bb3B0aW9uXSA9IG9wdGlvbnNbb3B0aW9uXTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5lZFN0cmVhbTtcbn07XG5cbkNvbWJpbmVkU3RyZWFtLmlzU3RyZWFtTGlrZSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICByZXR1cm4gKHR5cGVvZiBzdHJlYW0gIT09ICdmdW5jdGlvbicpXG4gICAgJiYgKHR5cGVvZiBzdHJlYW0gIT09ICdzdHJpbmcnKVxuICAgICYmICh0eXBlb2Ygc3RyZWFtICE9PSAnYm9vbGVhbicpXG4gICAgJiYgKHR5cGVvZiBzdHJlYW0gIT09ICdudW1iZXInKVxuICAgICYmICghQnVmZmVyLmlzQnVmZmVyKHN0cmVhbSkpO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICB2YXIgaXNTdHJlYW1MaWtlID0gQ29tYmluZWRTdHJlYW0uaXNTdHJlYW1MaWtlKHN0cmVhbSk7XG5cbiAgaWYgKGlzU3RyZWFtTGlrZSkge1xuICAgIGlmICghKHN0cmVhbSBpbnN0YW5jZW9mIERlbGF5ZWRTdHJlYW0pKSB7XG4gICAgICB2YXIgbmV3U3RyZWFtID0gRGVsYXllZFN0cmVhbS5jcmVhdGUoc3RyZWFtLCB7XG4gICAgICAgIG1heERhdGFTaXplOiBJbmZpbml0eSxcbiAgICAgICAgcGF1c2VTdHJlYW06IHRoaXMucGF1c2VTdHJlYW1zLFxuICAgICAgfSk7XG4gICAgICBzdHJlYW0ub24oJ2RhdGEnLCB0aGlzLl9jaGVja0RhdGFTaXplLmJpbmQodGhpcykpO1xuICAgICAgc3RyZWFtID0gbmV3U3RyZWFtO1xuICAgIH1cblxuICAgIHRoaXMuX2hhbmRsZUVycm9ycyhzdHJlYW0pO1xuXG4gICAgaWYgKHRoaXMucGF1c2VTdHJlYW1zKSB7XG4gICAgICBzdHJlYW0ucGF1c2UoKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLl9zdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5Db21iaW5lZFN0cmVhbS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uKGRlc3QsIG9wdGlvbnMpIHtcbiAgU3RyZWFtLnByb3RvdHlwZS5waXBlLmNhbGwodGhpcywgZGVzdCwgb3B0aW9ucyk7XG4gIHRoaXMucmVzdW1lKCk7XG4gIHJldHVybiBkZXN0O1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLl9nZXROZXh0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2N1cnJlbnRTdHJlYW0gPSBudWxsO1xuXG4gIGlmICh0aGlzLl9pbnNpZGVMb29wKSB7XG4gICAgdGhpcy5fcGVuZGluZ05leHQgPSB0cnVlO1xuICAgIHJldHVybjsgLy8gZGVmZXIgY2FsbFxuICB9XG5cbiAgdGhpcy5faW5zaWRlTG9vcCA9IHRydWU7XG4gIHRyeSB7XG4gICAgZG8ge1xuICAgICAgdGhpcy5fcGVuZGluZ05leHQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlYWxHZXROZXh0KCk7XG4gICAgfSB3aGlsZSAodGhpcy5fcGVuZGluZ05leHQpO1xuICB9IGZpbmFsbHkge1xuICAgIHRoaXMuX2luc2lkZUxvb3AgPSBmYWxzZTtcbiAgfVxufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLl9yZWFsR2V0TmV4dCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc3RyZWFtID0gdGhpcy5fc3RyZWFtcy5zaGlmdCgpO1xuXG5cbiAgaWYgKHR5cGVvZiBzdHJlYW0gPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmVuZCgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc3RyZWFtICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5fcGlwZU5leHQoc3RyZWFtKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZ2V0U3RyZWFtID0gc3RyZWFtO1xuICBnZXRTdHJlYW0oZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgdmFyIGlzU3RyZWFtTGlrZSA9IENvbWJpbmVkU3RyZWFtLmlzU3RyZWFtTGlrZShzdHJlYW0pO1xuICAgIGlmIChpc1N0cmVhbUxpa2UpIHtcbiAgICAgIHN0cmVhbS5vbignZGF0YScsIHRoaXMuX2NoZWNrRGF0YVNpemUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl9oYW5kbGVFcnJvcnMoc3RyZWFtKTtcbiAgICB9XG5cbiAgICB0aGlzLl9waXBlTmV4dChzdHJlYW0pO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLl9waXBlTmV4dCA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICB0aGlzLl9jdXJyZW50U3RyZWFtID0gc3RyZWFtO1xuXG4gIHZhciBpc1N0cmVhbUxpa2UgPSBDb21iaW5lZFN0cmVhbS5pc1N0cmVhbUxpa2Uoc3RyZWFtKTtcbiAgaWYgKGlzU3RyZWFtTGlrZSkge1xuICAgIHN0cmVhbS5vbignZW5kJywgdGhpcy5fZ2V0TmV4dC5iaW5kKHRoaXMpKTtcbiAgICBzdHJlYW0ucGlwZSh0aGlzLCB7ZW5kOiBmYWxzZX0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB2YWx1ZSA9IHN0cmVhbTtcbiAgdGhpcy53cml0ZSh2YWx1ZSk7XG4gIHRoaXMuX2dldE5leHQoKTtcbn07XG5cbkNvbWJpbmVkU3RyZWFtLnByb3RvdHlwZS5faGFuZGxlRXJyb3JzID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgc3RyZWFtLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGVycikge1xuICAgIHNlbGYuX2VtaXRFcnJvcihlcnIpO1xuICB9KTtcbn07XG5cbkNvbWJpbmVkU3RyZWFtLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgdGhpcy5lbWl0KCdkYXRhJywgZGF0YSk7XG59O1xuXG5Db21iaW5lZFN0cmVhbS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLnBhdXNlU3RyZWFtcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKHRoaXMucGF1c2VTdHJlYW1zICYmIHRoaXMuX2N1cnJlbnRTdHJlYW0gJiYgdHlwZW9mKHRoaXMuX2N1cnJlbnRTdHJlYW0ucGF1c2UpID09ICdmdW5jdGlvbicpIHRoaXMuX2N1cnJlbnRTdHJlYW0ucGF1c2UoKTtcbiAgdGhpcy5lbWl0KCdwYXVzZScpO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMuX3JlbGVhc2VkKSB7XG4gICAgdGhpcy5fcmVsZWFzZWQgPSB0cnVlO1xuICAgIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuICAgIHRoaXMuX2dldE5leHQoKTtcbiAgfVxuXG4gIGlmKHRoaXMucGF1c2VTdHJlYW1zICYmIHRoaXMuX2N1cnJlbnRTdHJlYW0gJiYgdHlwZW9mKHRoaXMuX2N1cnJlbnRTdHJlYW0ucmVzdW1lKSA9PSAnZnVuY3Rpb24nKSB0aGlzLl9jdXJyZW50U3RyZWFtLnJlc3VtZSgpO1xuICB0aGlzLmVtaXQoJ3Jlc3VtZScpO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9yZXNldCgpO1xuICB0aGlzLmVtaXQoJ2VuZCcpO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fcmVzZXQoKTtcbiAgdGhpcy5lbWl0KCdjbG9zZScpO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLl9yZXNldCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG4gIHRoaXMuX3N0cmVhbXMgPSBbXTtcbiAgdGhpcy5fY3VycmVudFN0cmVhbSA9IG51bGw7XG59O1xuXG5Db21iaW5lZFN0cmVhbS5wcm90b3R5cGUuX2NoZWNrRGF0YVNpemUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fdXBkYXRlRGF0YVNpemUoKTtcbiAgaWYgKHRoaXMuZGF0YVNpemUgPD0gdGhpcy5tYXhEYXRhU2l6ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBtZXNzYWdlID1cbiAgICAnRGVsYXllZFN0cmVhbSNtYXhEYXRhU2l6ZSBvZiAnICsgdGhpcy5tYXhEYXRhU2l6ZSArICcgYnl0ZXMgZXhjZWVkZWQuJztcbiAgdGhpcy5fZW1pdEVycm9yKG5ldyBFcnJvcihtZXNzYWdlKSk7XG59O1xuXG5Db21iaW5lZFN0cmVhbS5wcm90b3R5cGUuX3VwZGF0ZURhdGFTaXplID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZGF0YVNpemUgPSAwO1xuXG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5fc3RyZWFtcy5mb3JFYWNoKGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgIGlmICghc3RyZWFtLmRhdGFTaXplKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2VsZi5kYXRhU2l6ZSArPSBzdHJlYW0uZGF0YVNpemU7XG4gIH0pO1xuXG4gIGlmICh0aGlzLl9jdXJyZW50U3RyZWFtICYmIHRoaXMuX2N1cnJlbnRTdHJlYW0uZGF0YVNpemUpIHtcbiAgICB0aGlzLmRhdGFTaXplICs9IHRoaXMuX2N1cnJlbnRTdHJlYW0uZGF0YVNpemU7XG4gIH1cbn07XG5cbkNvbWJpbmVkU3RyZWFtLnByb3RvdHlwZS5fZW1pdEVycm9yID0gZnVuY3Rpb24oZXJyKSB7XG4gIHRoaXMuX3Jlc2V0KCk7XG4gIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xufTtcbiIsInZhciBTdHJlYW0gPSByZXF1aXJlKCdzdHJlYW0nKS5TdHJlYW07XG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZWxheWVkU3RyZWFtO1xuZnVuY3Rpb24gRGVsYXllZFN0cmVhbSgpIHtcbiAgdGhpcy5zb3VyY2UgPSBudWxsO1xuICB0aGlzLmRhdGFTaXplID0gMDtcbiAgdGhpcy5tYXhEYXRhU2l6ZSA9IDEwMjQgKiAxMDI0O1xuICB0aGlzLnBhdXNlU3RyZWFtID0gdHJ1ZTtcblxuICB0aGlzLl9tYXhEYXRhU2l6ZUV4Y2VlZGVkID0gZmFsc2U7XG4gIHRoaXMuX3JlbGVhc2VkID0gZmFsc2U7XG4gIHRoaXMuX2J1ZmZlcmVkRXZlbnRzID0gW107XG59XG51dGlsLmluaGVyaXRzKERlbGF5ZWRTdHJlYW0sIFN0cmVhbSk7XG5cbkRlbGF5ZWRTdHJlYW0uY3JlYXRlID0gZnVuY3Rpb24oc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBkZWxheWVkU3RyZWFtID0gbmV3IHRoaXMoKTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgZm9yICh2YXIgb3B0aW9uIGluIG9wdGlvbnMpIHtcbiAgICBkZWxheWVkU3RyZWFtW29wdGlvbl0gPSBvcHRpb25zW29wdGlvbl07XG4gIH1cblxuICBkZWxheWVkU3RyZWFtLnNvdXJjZSA9IHNvdXJjZTtcblxuICB2YXIgcmVhbEVtaXQgPSBzb3VyY2UuZW1pdDtcbiAgc291cmNlLmVtaXQgPSBmdW5jdGlvbigpIHtcbiAgICBkZWxheWVkU3RyZWFtLl9oYW5kbGVFbWl0KGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIHJlYWxFbWl0LmFwcGx5KHNvdXJjZSwgYXJndW1lbnRzKTtcbiAgfTtcblxuICBzb3VyY2Uub24oJ2Vycm9yJywgZnVuY3Rpb24oKSB7fSk7XG4gIGlmIChkZWxheWVkU3RyZWFtLnBhdXNlU3RyZWFtKSB7XG4gICAgc291cmNlLnBhdXNlKCk7XG4gIH1cblxuICByZXR1cm4gZGVsYXllZFN0cmVhbTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShEZWxheWVkU3RyZWFtLnByb3RvdHlwZSwgJ3JlYWRhYmxlJywge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlLnJlYWRhYmxlO1xuICB9XG59KTtcblxuRGVsYXllZFN0cmVhbS5wcm90b3R5cGUuc2V0RW5jb2RpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc291cmNlLnNldEVuY29kaW5nLmFwcGx5KHRoaXMuc291cmNlLCBhcmd1bWVudHMpO1xufTtcblxuRGVsYXllZFN0cmVhbS5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5fcmVsZWFzZWQpIHtcbiAgICB0aGlzLnJlbGVhc2UoKTtcbiAgfVxuXG4gIHRoaXMuc291cmNlLnJlc3VtZSgpO1xufTtcblxuRGVsYXllZFN0cmVhbS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zb3VyY2UucGF1c2UoKTtcbn07XG5cbkRlbGF5ZWRTdHJlYW0ucHJvdG90eXBlLnJlbGVhc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fcmVsZWFzZWQgPSB0cnVlO1xuXG4gIHRoaXMuX2J1ZmZlcmVkRXZlbnRzLmZvckVhY2goZnVuY3Rpb24oYXJncykge1xuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfS5iaW5kKHRoaXMpKTtcbiAgdGhpcy5fYnVmZmVyZWRFdmVudHMgPSBbXTtcbn07XG5cbkRlbGF5ZWRTdHJlYW0ucHJvdG90eXBlLnBpcGUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHIgPSBTdHJlYW0ucHJvdG90eXBlLnBpcGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgdGhpcy5yZXN1bWUoKTtcbiAgcmV0dXJuIHI7XG59O1xuXG5EZWxheWVkU3RyZWFtLnByb3RvdHlwZS5faGFuZGxlRW1pdCA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgaWYgKHRoaXMuX3JlbGVhc2VkKSB7XG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChhcmdzWzBdID09PSAnZGF0YScpIHtcbiAgICB0aGlzLmRhdGFTaXplICs9IGFyZ3NbMV0ubGVuZ3RoO1xuICAgIHRoaXMuX2NoZWNrSWZNYXhEYXRhU2l6ZUV4Y2VlZGVkKCk7XG4gIH1cblxuICB0aGlzLl9idWZmZXJlZEV2ZW50cy5wdXNoKGFyZ3MpO1xufTtcblxuRGVsYXllZFN0cmVhbS5wcm90b3R5cGUuX2NoZWNrSWZNYXhEYXRhU2l6ZUV4Y2VlZGVkID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLl9tYXhEYXRhU2l6ZUV4Y2VlZGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHRoaXMuZGF0YVNpemUgPD0gdGhpcy5tYXhEYXRhU2l6ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuX21heERhdGFTaXplRXhjZWVkZWQgPSB0cnVlO1xuICB2YXIgbWVzc2FnZSA9XG4gICAgJ0RlbGF5ZWRTdHJlYW0jbWF4RGF0YVNpemUgb2YgJyArIHRoaXMubWF4RGF0YVNpemUgKyAnIGJ5dGVzIGV4Y2VlZGVkLidcbiAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcihtZXNzYWdlKSk7XG59O1xuIiwidmFyIENvbWJpbmVkU3RyZWFtID0gcmVxdWlyZSgnY29tYmluZWQtc3RyZWFtJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xudmFyIGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG52YXIgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xudmFyIHBhcnNlVXJsID0gcmVxdWlyZSgndXJsJykucGFyc2U7XG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xudmFyIG1pbWUgPSByZXF1aXJlKCdtaW1lLXR5cGVzJyk7XG52YXIgYXN5bmNraXQgPSByZXF1aXJlKCdhc3luY2tpdCcpO1xudmFyIHBvcHVsYXRlID0gcmVxdWlyZSgnLi9wb3B1bGF0ZS5qcycpO1xuXG4vLyBQdWJsaWMgQVBJXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1EYXRhO1xuXG4vLyBtYWtlIGl0IGEgU3RyZWFtXG51dGlsLmluaGVyaXRzKEZvcm1EYXRhLCBDb21iaW5lZFN0cmVhbSk7XG5cbi8qKlxuICogQ3JlYXRlIHJlYWRhYmxlIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIHN0cmVhbXMuXG4gKiBDYW4gYmUgdXNlZCB0byBzdWJtaXQgZm9ybXNcbiAqIGFuZCBmaWxlIHVwbG9hZHMgdG8gb3RoZXIgd2ViIGFwcGxpY2F0aW9ucy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUHJvcGVydGllcyB0byBiZSBhZGRlZC9vdmVycmlkZW4gZm9yIEZvcm1EYXRhIGFuZCBDb21iaW5lZFN0cmVhbVxuICovXG5mdW5jdGlvbiBGb3JtRGF0YShvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBGb3JtRGF0YSkpIHtcbiAgICByZXR1cm4gbmV3IEZvcm1EYXRhKCk7XG4gIH1cblxuICB0aGlzLl9vdmVyaGVhZExlbmd0aCA9IDA7XG4gIHRoaXMuX3ZhbHVlTGVuZ3RoID0gMDtcbiAgdGhpcy5fdmFsdWVzVG9NZWFzdXJlID0gW107XG5cbiAgQ29tYmluZWRTdHJlYW0uY2FsbCh0aGlzKTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgZm9yICh2YXIgb3B0aW9uIGluIG9wdGlvbnMpIHtcbiAgICB0aGlzW29wdGlvbl0gPSBvcHRpb25zW29wdGlvbl07XG4gIH1cbn1cblxuRm9ybURhdGEuTElORV9CUkVBSyA9ICdcXHJcXG4nO1xuRm9ybURhdGEuREVGQVVMVF9DT05URU5UX1RZUEUgPSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcblxuRm9ybURhdGEucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKGZpZWxkLCB2YWx1ZSwgb3B0aW9ucykge1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8vIGFsbG93IGZpbGVuYW1lIGFzIHNpbmdsZSBvcHRpb25cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09ICdzdHJpbmcnKSB7XG4gICAgb3B0aW9ucyA9IHtmaWxlbmFtZTogb3B0aW9uc307XG4gIH1cblxuICB2YXIgYXBwZW5kID0gQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLmFwcGVuZC5iaW5kKHRoaXMpO1xuXG4gIC8vIGFsbCB0aGF0IHN0cmVhbXkgYnVzaW5lc3MgY2FuJ3QgaGFuZGxlIG51bWJlcnNcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHZhbHVlID0gJycgKyB2YWx1ZTtcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mZWxpeGdlL25vZGUtZm9ybS1kYXRhL2lzc3Vlcy8zOFxuICBpZiAodXRpbC5pc0FycmF5KHZhbHVlKSkge1xuICAgIC8vIFBsZWFzZSBjb252ZXJ0IHlvdXIgYXJyYXkgaW50byBzdHJpbmdcbiAgICAvLyB0aGUgd2F5IHdlYiBzZXJ2ZXIgZXhwZWN0cyBpdFxuICAgIHRoaXMuX2Vycm9yKG5ldyBFcnJvcignQXJyYXlzIGFyZSBub3Qgc3VwcG9ydGVkLicpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgaGVhZGVyID0gdGhpcy5fbXVsdGlQYXJ0SGVhZGVyKGZpZWxkLCB2YWx1ZSwgb3B0aW9ucyk7XG4gIHZhciBmb290ZXIgPSB0aGlzLl9tdWx0aVBhcnRGb290ZXIoKTtcblxuICBhcHBlbmQoaGVhZGVyKTtcbiAgYXBwZW5kKHZhbHVlKTtcbiAgYXBwZW5kKGZvb3Rlcik7XG5cbiAgLy8gcGFzcyBhbG9uZyBvcHRpb25zLmtub3duTGVuZ3RoXG4gIHRoaXMuX3RyYWNrTGVuZ3RoKGhlYWRlciwgdmFsdWUsIG9wdGlvbnMpO1xufTtcblxuRm9ybURhdGEucHJvdG90eXBlLl90cmFja0xlbmd0aCA9IGZ1bmN0aW9uKGhlYWRlciwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIHZhbHVlTGVuZ3RoID0gMDtcblxuICAvLyB1c2VkIHcvIGdldExlbmd0aFN5bmMoKSwgd2hlbiBsZW5ndGggaXMga25vd24uXG4gIC8vIGUuZy4gZm9yIHN0cmVhbWluZyBkaXJlY3RseSBmcm9tIGEgcmVtb3RlIHNlcnZlcixcbiAgLy8gdy8gYSBrbm93biBmaWxlIGEgc2l6ZSwgYW5kIG5vdCB3YW50aW5nIHRvIHdhaXQgZm9yXG4gIC8vIGluY29taW5nIGZpbGUgdG8gZmluaXNoIHRvIGdldCBpdHMgc2l6ZS5cbiAgaWYgKG9wdGlvbnMua25vd25MZW5ndGggIT0gbnVsbCkge1xuICAgIHZhbHVlTGVuZ3RoICs9ICtvcHRpb25zLmtub3duTGVuZ3RoO1xuICB9IGVsc2UgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICB2YWx1ZUxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWVMZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aCh2YWx1ZSk7XG4gIH1cblxuICB0aGlzLl92YWx1ZUxlbmd0aCArPSB2YWx1ZUxlbmd0aDtcblxuICAvLyBAY2hlY2sgd2h5IGFkZCBDUkxGPyBkb2VzIHRoaXMgYWNjb3VudCBmb3IgY3VzdG9tL211bHRpcGxlIENSTEZzP1xuICB0aGlzLl9vdmVyaGVhZExlbmd0aCArPVxuICAgIEJ1ZmZlci5ieXRlTGVuZ3RoKGhlYWRlcikgK1xuICAgIEZvcm1EYXRhLkxJTkVfQlJFQUsubGVuZ3RoO1xuXG4gIC8vIGVtcHR5IG9yIGVpdGhlciBkb2Vzbid0IGhhdmUgcGF0aCBvciBub3QgYW4gaHR0cCByZXNwb25zZVxuICBpZiAoIXZhbHVlIHx8ICggIXZhbHVlLnBhdGggJiYgISh2YWx1ZS5yZWFkYWJsZSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnaHR0cFZlcnNpb24nKSkgKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIG5vIG5lZWQgdG8gYm90aGVyIHdpdGggdGhlIGxlbmd0aFxuICBpZiAoIW9wdGlvbnMua25vd25MZW5ndGgpIHtcbiAgICB0aGlzLl92YWx1ZXNUb01lYXN1cmUucHVzaCh2YWx1ZSk7XG4gIH1cbn07XG5cbkZvcm1EYXRhLnByb3RvdHlwZS5fbGVuZ3RoUmV0cmlldmVyID0gZnVuY3Rpb24odmFsdWUsIGNhbGxiYWNrKSB7XG5cbiAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KCdmZCcpKSB7XG5cbiAgICAvLyB0YWtlIHJlYWQgcmFuZ2UgaW50byBhIGFjY291bnRcbiAgICAvLyBgZW5kYCA9IEluZmluaXR5IOKAkz4gcmVhZCBmaWxlIHRpbGwgdGhlIGVuZFxuICAgIC8vXG4gICAgLy8gVE9ETzogTG9va3MgbGlrZSB0aGVyZSBpcyBidWcgaW4gTm9kZSBmcy5jcmVhdGVSZWFkU3RyZWFtXG4gICAgLy8gaXQgZG9lc24ndCByZXNwZWN0IGBlbmRgIG9wdGlvbnMgd2l0aG91dCBgc3RhcnRgIG9wdGlvbnNcbiAgICAvLyBGaXggaXQgd2hlbiBub2RlIGZpeGVzIGl0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9pc3N1ZXMvNzgxOVxuICAgIGlmICh2YWx1ZS5lbmQgIT0gdW5kZWZpbmVkICYmIHZhbHVlLmVuZCAhPSBJbmZpbml0eSAmJiB2YWx1ZS5zdGFydCAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgLy8gd2hlbiBlbmQgc3BlY2lmaWVkXG4gICAgICAvLyBubyBuZWVkIHRvIGNhbGN1bGF0ZSByYW5nZVxuICAgICAgLy8gaW5jbHVzaXZlLCBzdGFydHMgd2l0aCAwXG4gICAgICBjYWxsYmFjayhudWxsLCB2YWx1ZS5lbmQgKyAxIC0gKHZhbHVlLnN0YXJ0ID8gdmFsdWUuc3RhcnQgOiAwKSk7XG5cbiAgICAvLyBub3QgdGhhdCBmYXN0IHNub29weVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzdGlsbCBuZWVkIHRvIGZldGNoIGZpbGUgc2l6ZSBmcm9tIGZzXG4gICAgICBmcy5zdGF0KHZhbHVlLnBhdGgsIGZ1bmN0aW9uKGVyciwgc3RhdCkge1xuXG4gICAgICAgIHZhciBmaWxlU2l6ZTtcblxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgZmluYWwgc2l6ZSBiYXNlZCBvbiB0aGUgcmFuZ2Ugb3B0aW9uc1xuICAgICAgICBmaWxlU2l6ZSA9IHN0YXQuc2l6ZSAtICh2YWx1ZS5zdGFydCA/IHZhbHVlLnN0YXJ0IDogMCk7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGZpbGVTaXplKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAvLyBvciBodHRwIHJlc3BvbnNlXG4gIH0gZWxzZSBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoJ2h0dHBWZXJzaW9uJykpIHtcbiAgICBjYWxsYmFjayhudWxsLCArdmFsdWUuaGVhZGVyc1snY29udGVudC1sZW5ndGgnXSk7XG5cbiAgLy8gb3IgcmVxdWVzdCBzdHJlYW0gaHR0cDovL2dpdGh1Yi5jb20vbWlrZWFsL3JlcXVlc3RcbiAgfSBlbHNlIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnaHR0cE1vZHVsZScpKSB7XG4gICAgLy8gd2FpdCB0aWxsIHJlc3BvbnNlIGNvbWUgYmFja1xuICAgIHZhbHVlLm9uKCdyZXNwb25zZScsIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICB2YWx1ZS5wYXVzZSgpO1xuICAgICAgY2FsbGJhY2sobnVsbCwgK3Jlc3BvbnNlLmhlYWRlcnNbJ2NvbnRlbnQtbGVuZ3RoJ10pO1xuICAgIH0pO1xuICAgIHZhbHVlLnJlc3VtZSgpO1xuXG4gIC8vIHNvbWV0aGluZyBlbHNlXG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2soJ1Vua25vd24gc3RyZWFtJyk7XG4gIH1cbn07XG5cbkZvcm1EYXRhLnByb3RvdHlwZS5fbXVsdGlQYXJ0SGVhZGVyID0gZnVuY3Rpb24oZmllbGQsIHZhbHVlLCBvcHRpb25zKSB7XG4gIC8vIGN1c3RvbSBoZWFkZXIgc3BlY2lmaWVkIChhcyBzdHJpbmcpP1xuICAvLyBpdCBiZWNvbWVzIHJlc3BvbnNpYmxlIGZvciBib3VuZGFyeVxuICAvLyAoZS5nLiB0byBoYW5kbGUgZXh0cmEgQ1JMRnMgb24gLk5FVCBzZXJ2ZXJzKVxuICBpZiAodHlwZW9mIG9wdGlvbnMuaGVhZGVyID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuaGVhZGVyO1xuICB9XG5cbiAgdmFyIGNvbnRlbnREaXNwb3NpdGlvbiA9IHRoaXMuX2dldENvbnRlbnREaXNwb3NpdGlvbih2YWx1ZSwgb3B0aW9ucyk7XG4gIHZhciBjb250ZW50VHlwZSA9IHRoaXMuX2dldENvbnRlbnRUeXBlKHZhbHVlLCBvcHRpb25zKTtcblxuICB2YXIgY29udGVudHMgPSAnJztcbiAgdmFyIGhlYWRlcnMgID0ge1xuICAgIC8vIGFkZCBjdXN0b20gZGlzcG9zaXRpb24gYXMgdGhpcmQgZWxlbWVudCBvciBrZWVwIGl0IHR3byBlbGVtZW50cyBpZiBub3RcbiAgICAnQ29udGVudC1EaXNwb3NpdGlvbic6IFsnZm9ybS1kYXRhJywgJ25hbWU9XCInICsgZmllbGQgKyAnXCInXS5jb25jYXQoY29udGVudERpc3Bvc2l0aW9uIHx8IFtdKSxcbiAgICAvLyBpZiBubyBjb250ZW50IHR5cGUuIGFsbG93IGl0IHRvIGJlIGVtcHR5IGFycmF5XG4gICAgJ0NvbnRlbnQtVHlwZSc6IFtdLmNvbmNhdChjb250ZW50VHlwZSB8fCBbXSlcbiAgfTtcblxuICAvLyBhbGxvdyBjdXN0b20gaGVhZGVycy5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmhlYWRlciA9PSAnb2JqZWN0Jykge1xuICAgIHBvcHVsYXRlKGhlYWRlcnMsIG9wdGlvbnMuaGVhZGVyKTtcbiAgfVxuXG4gIHZhciBoZWFkZXI7XG4gIGZvciAodmFyIHByb3AgaW4gaGVhZGVycykge1xuICAgIGlmICghaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgY29udGludWU7XG4gICAgaGVhZGVyID0gaGVhZGVyc1twcm9wXTtcblxuICAgIC8vIHNraXAgbnVsbGlzaCBoZWFkZXJzLlxuICAgIGlmIChoZWFkZXIgPT0gbnVsbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gY29udmVydCBhbGwgaGVhZGVycyB0byBhcnJheXMuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGhlYWRlcikpIHtcbiAgICAgIGhlYWRlciA9IFtoZWFkZXJdO1xuICAgIH1cblxuICAgIC8vIGFkZCBub24tZW1wdHkgaGVhZGVycy5cbiAgICBpZiAoaGVhZGVyLmxlbmd0aCkge1xuICAgICAgY29udGVudHMgKz0gcHJvcCArICc6ICcgKyBoZWFkZXIuam9pbignOyAnKSArIEZvcm1EYXRhLkxJTkVfQlJFQUs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICctLScgKyB0aGlzLmdldEJvdW5kYXJ5KCkgKyBGb3JtRGF0YS5MSU5FX0JSRUFLICsgY29udGVudHMgKyBGb3JtRGF0YS5MSU5FX0JSRUFLO1xufTtcblxuRm9ybURhdGEucHJvdG90eXBlLl9nZXRDb250ZW50RGlzcG9zaXRpb24gPSBmdW5jdGlvbih2YWx1ZSwgb3B0aW9ucykge1xuXG4gIHZhciBmaWxlbmFtZVxuICAgICwgY29udGVudERpc3Bvc2l0aW9uXG4gICAgO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5maWxlcGF0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBjdXN0b20gZmlsZXBhdGggZm9yIHJlbGF0aXZlIHBhdGhzXG4gICAgZmlsZW5hbWUgPSBwYXRoLm5vcm1hbGl6ZShvcHRpb25zLmZpbGVwYXRoKS5yZXBsYWNlKC9cXFxcL2csICcvJyk7XG4gIH0gZWxzZSBpZiAob3B0aW9ucy5maWxlbmFtZSB8fCB2YWx1ZS5uYW1lIHx8IHZhbHVlLnBhdGgpIHtcbiAgICAvLyBjdXN0b20gZmlsZW5hbWUgdGFrZSBwcmVjZWRlbmNlXG4gICAgLy8gZm9ybWlkYWJsZSBhbmQgdGhlIGJyb3dzZXIgYWRkIGEgbmFtZSBwcm9wZXJ0eVxuICAgIC8vIGZzLSBhbmQgcmVxdWVzdC0gc3RyZWFtcyBoYXZlIHBhdGggcHJvcGVydHlcbiAgICBmaWxlbmFtZSA9IHBhdGguYmFzZW5hbWUob3B0aW9ucy5maWxlbmFtZSB8fCB2YWx1ZS5uYW1lIHx8IHZhbHVlLnBhdGgpO1xuICB9IGVsc2UgaWYgKHZhbHVlLnJlYWRhYmxlICYmIHZhbHVlLmhhc093blByb3BlcnR5KCdodHRwVmVyc2lvbicpKSB7XG4gICAgLy8gb3IgdHJ5IGh0dHAgcmVzcG9uc2VcbiAgICBmaWxlbmFtZSA9IHBhdGguYmFzZW5hbWUodmFsdWUuY2xpZW50Ll9odHRwTWVzc2FnZS5wYXRoKTtcbiAgfVxuXG4gIGlmIChmaWxlbmFtZSkge1xuICAgIGNvbnRlbnREaXNwb3NpdGlvbiA9ICdmaWxlbmFtZT1cIicgKyBmaWxlbmFtZSArICdcIic7XG4gIH1cblxuICByZXR1cm4gY29udGVudERpc3Bvc2l0aW9uO1xufTtcblxuRm9ybURhdGEucHJvdG90eXBlLl9nZXRDb250ZW50VHlwZSA9IGZ1bmN0aW9uKHZhbHVlLCBvcHRpb25zKSB7XG5cbiAgLy8gdXNlIGN1c3RvbSBjb250ZW50LXR5cGUgYWJvdmUgYWxsXG4gIHZhciBjb250ZW50VHlwZSA9IG9wdGlvbnMuY29udGVudFR5cGU7XG5cbiAgLy8gb3IgdHJ5IGBuYW1lYCBmcm9tIGZvcm1pZGFibGUsIGJyb3dzZXJcbiAgaWYgKCFjb250ZW50VHlwZSAmJiB2YWx1ZS5uYW1lKSB7XG4gICAgY29udGVudFR5cGUgPSBtaW1lLmxvb2t1cCh2YWx1ZS5uYW1lKTtcbiAgfVxuXG4gIC8vIG9yIHRyeSBgcGF0aGAgZnJvbSBmcy0sIHJlcXVlc3QtIHN0cmVhbXNcbiAgaWYgKCFjb250ZW50VHlwZSAmJiB2YWx1ZS5wYXRoKSB7XG4gICAgY29udGVudFR5cGUgPSBtaW1lLmxvb2t1cCh2YWx1ZS5wYXRoKTtcbiAgfVxuXG4gIC8vIG9yIGlmIGl0J3MgaHR0cC1yZXBvbnNlXG4gIGlmICghY29udGVudFR5cGUgJiYgdmFsdWUucmVhZGFibGUgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoJ2h0dHBWZXJzaW9uJykpIHtcbiAgICBjb250ZW50VHlwZSA9IHZhbHVlLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddO1xuICB9XG5cbiAgLy8gb3IgZ3Vlc3MgaXQgZnJvbSB0aGUgZmlsZXBhdGggb3IgZmlsZW5hbWVcbiAgaWYgKCFjb250ZW50VHlwZSAmJiAob3B0aW9ucy5maWxlcGF0aCB8fCBvcHRpb25zLmZpbGVuYW1lKSkge1xuICAgIGNvbnRlbnRUeXBlID0gbWltZS5sb29rdXAob3B0aW9ucy5maWxlcGF0aCB8fCBvcHRpb25zLmZpbGVuYW1lKTtcbiAgfVxuXG4gIC8vIGZhbGxiYWNrIHRvIHRoZSBkZWZhdWx0IGNvbnRlbnQgdHlwZSBpZiBgdmFsdWVgIGlzIG5vdCBzaW1wbGUgdmFsdWVcbiAgaWYgKCFjb250ZW50VHlwZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICBjb250ZW50VHlwZSA9IEZvcm1EYXRhLkRFRkFVTFRfQ09OVEVOVF9UWVBFO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnRUeXBlO1xufTtcblxuRm9ybURhdGEucHJvdG90eXBlLl9tdWx0aVBhcnRGb290ZXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG5leHQpIHtcbiAgICB2YXIgZm9vdGVyID0gRm9ybURhdGEuTElORV9CUkVBSztcblxuICAgIHZhciBsYXN0UGFydCA9ICh0aGlzLl9zdHJlYW1zLmxlbmd0aCA9PT0gMCk7XG4gICAgaWYgKGxhc3RQYXJ0KSB7XG4gICAgICBmb290ZXIgKz0gdGhpcy5fbGFzdEJvdW5kYXJ5KCk7XG4gICAgfVxuXG4gICAgbmV4dChmb290ZXIpO1xuICB9LmJpbmQodGhpcyk7XG59O1xuXG5Gb3JtRGF0YS5wcm90b3R5cGUuX2xhc3RCb3VuZGFyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gJy0tJyArIHRoaXMuZ2V0Qm91bmRhcnkoKSArICctLScgKyBGb3JtRGF0YS5MSU5FX0JSRUFLO1xufTtcblxuRm9ybURhdGEucHJvdG90eXBlLmdldEhlYWRlcnMgPSBmdW5jdGlvbih1c2VySGVhZGVycykge1xuICB2YXIgaGVhZGVyO1xuICB2YXIgZm9ybUhlYWRlcnMgPSB7XG4gICAgJ2NvbnRlbnQtdHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0nICsgdGhpcy5nZXRCb3VuZGFyeSgpXG4gIH07XG5cbiAgZm9yIChoZWFkZXIgaW4gdXNlckhlYWRlcnMpIHtcbiAgICBpZiAodXNlckhlYWRlcnMuaGFzT3duUHJvcGVydHkoaGVhZGVyKSkge1xuICAgICAgZm9ybUhlYWRlcnNbaGVhZGVyLnRvTG93ZXJDYXNlKCldID0gdXNlckhlYWRlcnNbaGVhZGVyXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybUhlYWRlcnM7XG59O1xuXG5Gb3JtRGF0YS5wcm90b3R5cGUuZ2V0Qm91bmRhcnkgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLl9ib3VuZGFyeSkge1xuICAgIHRoaXMuX2dlbmVyYXRlQm91bmRhcnkoKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLl9ib3VuZGFyeTtcbn07XG5cbkZvcm1EYXRhLnByb3RvdHlwZS5fZ2VuZXJhdGVCb3VuZGFyeSA9IGZ1bmN0aW9uKCkge1xuICAvLyBUaGlzIGdlbmVyYXRlcyBhIDUwIGNoYXJhY3RlciBib3VuZGFyeSBzaW1pbGFyIHRvIHRob3NlIHVzZWQgYnkgRmlyZWZveC5cbiAgLy8gVGhleSBhcmUgb3B0aW1pemVkIGZvciBib3llci1tb29yZSBwYXJzaW5nLlxuICB2YXIgYm91bmRhcnkgPSAnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICBib3VuZGFyeSArPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkudG9TdHJpbmcoMTYpO1xuICB9XG5cbiAgdGhpcy5fYm91bmRhcnkgPSBib3VuZGFyeTtcbn07XG5cbi8vIE5vdGU6IGdldExlbmd0aFN5bmMgRE9FU04nVCBjYWxjdWxhdGUgc3RyZWFtcyBsZW5ndGhcbi8vIEFzIHdvcmthcm91bmQgb25lIGNhbiBjYWxjdWxhdGUgZmlsZSBzaXplIG1hbnVhbGx5XG4vLyBhbmQgYWRkIGl0IGFzIGtub3duTGVuZ3RoIG9wdGlvblxuRm9ybURhdGEucHJvdG90eXBlLmdldExlbmd0aFN5bmMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGtub3duTGVuZ3RoID0gdGhpcy5fb3ZlcmhlYWRMZW5ndGggKyB0aGlzLl92YWx1ZUxlbmd0aDtcblxuICAvLyBEb24ndCBnZXQgY29uZnVzZWQsIHRoZXJlIGFyZSAzIFwiaW50ZXJuYWxcIiBzdHJlYW1zIGZvciBlYWNoIGtleXZhbCBwYWlyXG4gIC8vIHNvIGl0IGJhc2ljYWxseSBjaGVja3MgaWYgdGhlcmUgaXMgYW55IHZhbHVlIGFkZGVkIHRvIHRoZSBmb3JtXG4gIGlmICh0aGlzLl9zdHJlYW1zLmxlbmd0aCkge1xuICAgIGtub3duTGVuZ3RoICs9IHRoaXMuX2xhc3RCb3VuZGFyeSgpLmxlbmd0aDtcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mb3JtLWRhdGEvZm9ybS1kYXRhL2lzc3Vlcy80MFxuICBpZiAoIXRoaXMuaGFzS25vd25MZW5ndGgoKSkge1xuICAgIC8vIFNvbWUgYXN5bmMgbGVuZ3RoIHJldHJpZXZlcnMgYXJlIHByZXNlbnRcbiAgICAvLyB0aGVyZWZvcmUgc3luY2hyb25vdXMgbGVuZ3RoIGNhbGN1bGF0aW9uIGlzIGZhbHNlLlxuICAgIC8vIFBsZWFzZSB1c2UgZ2V0TGVuZ3RoKGNhbGxiYWNrKSB0byBnZXQgcHJvcGVyIGxlbmd0aFxuICAgIHRoaXMuX2Vycm9yKG5ldyBFcnJvcignQ2Fubm90IGNhbGN1bGF0ZSBwcm9wZXIgbGVuZ3RoIGluIHN5bmNocm9ub3VzIHdheS4nKSk7XG4gIH1cblxuICByZXR1cm4ga25vd25MZW5ndGg7XG59O1xuXG4vLyBQdWJsaWMgQVBJIHRvIGNoZWNrIGlmIGxlbmd0aCBvZiBhZGRlZCB2YWx1ZXMgaXMga25vd25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mb3JtLWRhdGEvZm9ybS1kYXRhL2lzc3Vlcy8xOTZcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mb3JtLWRhdGEvZm9ybS1kYXRhL2lzc3Vlcy8yNjJcbkZvcm1EYXRhLnByb3RvdHlwZS5oYXNLbm93bkxlbmd0aCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaGFzS25vd25MZW5ndGggPSB0cnVlO1xuXG4gIGlmICh0aGlzLl92YWx1ZXNUb01lYXN1cmUubGVuZ3RoKSB7XG4gICAgaGFzS25vd25MZW5ndGggPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBoYXNLbm93bkxlbmd0aDtcbn07XG5cbkZvcm1EYXRhLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbihjYikge1xuICB2YXIga25vd25MZW5ndGggPSB0aGlzLl9vdmVyaGVhZExlbmd0aCArIHRoaXMuX3ZhbHVlTGVuZ3RoO1xuXG4gIGlmICh0aGlzLl9zdHJlYW1zLmxlbmd0aCkge1xuICAgIGtub3duTGVuZ3RoICs9IHRoaXMuX2xhc3RCb3VuZGFyeSgpLmxlbmd0aDtcbiAgfVxuXG4gIGlmICghdGhpcy5fdmFsdWVzVG9NZWFzdXJlLmxlbmd0aCkge1xuICAgIHByb2Nlc3MubmV4dFRpY2soY2IuYmluZCh0aGlzLCBudWxsLCBrbm93bkxlbmd0aCkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGFzeW5ja2l0LnBhcmFsbGVsKHRoaXMuX3ZhbHVlc1RvTWVhc3VyZSwgdGhpcy5fbGVuZ3RoUmV0cmlldmVyLCBmdW5jdGlvbihlcnIsIHZhbHVlcykge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNiKGVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24obGVuZ3RoKSB7XG4gICAgICBrbm93bkxlbmd0aCArPSBsZW5ndGg7XG4gICAgfSk7XG5cbiAgICBjYihudWxsLCBrbm93bkxlbmd0aCk7XG4gIH0pO1xufTtcblxuRm9ybURhdGEucHJvdG90eXBlLnN1Ym1pdCA9IGZ1bmN0aW9uKHBhcmFtcywgY2IpIHtcbiAgdmFyIHJlcXVlc3RcbiAgICAsIG9wdGlvbnNcbiAgICAsIGRlZmF1bHRzID0ge21ldGhvZDogJ3Bvc3QnfVxuICAgIDtcblxuICAvLyBwYXJzZSBwcm92aWRlZCB1cmwgaWYgaXQncyBzdHJpbmdcbiAgLy8gb3IgdHJlYXQgaXQgYXMgb3B0aW9ucyBvYmplY3RcbiAgaWYgKHR5cGVvZiBwYXJhbXMgPT0gJ3N0cmluZycpIHtcblxuICAgIHBhcmFtcyA9IHBhcnNlVXJsKHBhcmFtcyk7XG4gICAgb3B0aW9ucyA9IHBvcHVsYXRlKHtcbiAgICAgIHBvcnQ6IHBhcmFtcy5wb3J0LFxuICAgICAgcGF0aDogcGFyYW1zLnBhdGhuYW1lLFxuICAgICAgaG9zdDogcGFyYW1zLmhvc3RuYW1lLFxuICAgICAgcHJvdG9jb2w6IHBhcmFtcy5wcm90b2NvbFxuICAgIH0sIGRlZmF1bHRzKTtcblxuICAvLyB1c2UgY3VzdG9tIHBhcmFtc1xuICB9IGVsc2Uge1xuXG4gICAgb3B0aW9ucyA9IHBvcHVsYXRlKHBhcmFtcywgZGVmYXVsdHMpO1xuICAgIC8vIGlmIG5vIHBvcnQgcHJvdmlkZWQgdXNlIGRlZmF1bHQgb25lXG4gICAgaWYgKCFvcHRpb25zLnBvcnQpIHtcbiAgICAgIG9wdGlvbnMucG9ydCA9IG9wdGlvbnMucHJvdG9jb2wgPT0gJ2h0dHBzOicgPyA0NDMgOiA4MDtcbiAgICB9XG4gIH1cblxuICAvLyBwdXQgdGhhdCBnb29kIGNvZGUgaW4gZ2V0SGVhZGVycyB0byBzb21lIHVzZVxuICBvcHRpb25zLmhlYWRlcnMgPSB0aGlzLmdldEhlYWRlcnMocGFyYW1zLmhlYWRlcnMpO1xuXG4gIC8vIGh0dHBzIGlmIHNwZWNpZmllZCwgZmFsbGJhY2sgdG8gaHR0cCBpbiBhbnkgb3RoZXIgY2FzZVxuICBpZiAob3B0aW9ucy5wcm90b2NvbCA9PSAnaHR0cHM6Jykge1xuICAgIHJlcXVlc3QgPSBodHRwcy5yZXF1ZXN0KG9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIHJlcXVlc3QgPSBodHRwLnJlcXVlc3Qob3B0aW9ucyk7XG4gIH1cblxuICAvLyBnZXQgY29udGVudCBsZW5ndGggYW5kIGZpcmUgYXdheVxuICB0aGlzLmdldExlbmd0aChmdW5jdGlvbihlcnIsIGxlbmd0aCkge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHRoaXMuX2Vycm9yKGVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYWRkIGNvbnRlbnQgbGVuZ3RoXG4gICAgcmVxdWVzdC5zZXRIZWFkZXIoJ0NvbnRlbnQtTGVuZ3RoJywgbGVuZ3RoKTtcblxuICAgIHRoaXMucGlwZShyZXF1ZXN0KTtcbiAgICBpZiAoY2IpIHtcbiAgICAgIHJlcXVlc3Qub24oJ2Vycm9yJywgY2IpO1xuICAgICAgcmVxdWVzdC5vbigncmVzcG9uc2UnLCBjYi5iaW5kKHRoaXMsIG51bGwpKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgcmV0dXJuIHJlcXVlc3Q7XG59O1xuXG5Gb3JtRGF0YS5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24oZXJyKSB7XG4gIGlmICghdGhpcy5lcnJvcikge1xuICAgIHRoaXMuZXJyb3IgPSBlcnI7XG4gICAgdGhpcy5wYXVzZSgpO1xuICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICB9XG59O1xuXG5Gb3JtRGF0YS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnW29iamVjdCBGb3JtRGF0YV0nO1xufTtcbiIsIi8vIHBvcHVsYXRlcyBtaXNzaW5nIHZhbHVlc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkc3QsIHNyYykge1xuXG4gIE9iamVjdC5rZXlzKHNyYykuZm9yRWFjaChmdW5jdGlvbihwcm9wKVxuICB7XG4gICAgZHN0W3Byb3BdID0gZHN0W3Byb3BdIHx8IHNyY1twcm9wXTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRzdDtcbn07XG4iLCIvKiFcbiAqIG1pbWUtZGJcbiAqIENvcHlyaWdodChjKSAyMDE0IEpvbmF0aGFuIE9uZ1xuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGIuanNvbicpXG4iLCIvKiFcbiAqIG1pbWUtdHlwZXNcbiAqIENvcHlyaWdodChjKSAyMDE0IEpvbmF0aGFuIE9uZ1xuICogQ29weXJpZ2h0KGMpIDIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBkYiA9IHJlcXVpcmUoJ21pbWUtZGInKVxudmFyIGV4dG5hbWUgPSByZXF1aXJlKCdwYXRoJykuZXh0bmFtZVxuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBFWFRSQUNUX1RZUEVfUkVHRVhQID0gL15cXHMqKFteO1xcc10qKSg/Ojt8XFxzfCQpL1xudmFyIFRFWFRfVFlQRV9SRUdFWFAgPSAvXnRleHRcXC8vaVxuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbmV4cG9ydHMuY2hhcnNldCA9IGNoYXJzZXRcbmV4cG9ydHMuY2hhcnNldHMgPSB7IGxvb2t1cDogY2hhcnNldCB9XG5leHBvcnRzLmNvbnRlbnRUeXBlID0gY29udGVudFR5cGVcbmV4cG9ydHMuZXh0ZW5zaW9uID0gZXh0ZW5zaW9uXG5leHBvcnRzLmV4dGVuc2lvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5leHBvcnRzLmxvb2t1cCA9IGxvb2t1cFxuZXhwb3J0cy50eXBlcyA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuLy8gUG9wdWxhdGUgdGhlIGV4dGVuc2lvbnMvdHlwZXMgbWFwc1xucG9wdWxhdGVNYXBzKGV4cG9ydHMuZXh0ZW5zaW9ucywgZXhwb3J0cy50eXBlcylcblxuLyoqXG4gKiBHZXQgdGhlIGRlZmF1bHQgY2hhcnNldCBmb3IgYSBNSU1FIHR5cGUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge2Jvb2xlYW58c3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIGNoYXJzZXQgKHR5cGUpIHtcbiAgaWYgKCF0eXBlIHx8IHR5cGVvZiB0eXBlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gVE9ETzogdXNlIG1lZGlhLXR5cGVyXG4gIHZhciBtYXRjaCA9IEVYVFJBQ1RfVFlQRV9SRUdFWFAuZXhlYyh0eXBlKVxuICB2YXIgbWltZSA9IG1hdGNoICYmIGRiW21hdGNoWzFdLnRvTG93ZXJDYXNlKCldXG5cbiAgaWYgKG1pbWUgJiYgbWltZS5jaGFyc2V0KSB7XG4gICAgcmV0dXJuIG1pbWUuY2hhcnNldFxuICB9XG5cbiAgLy8gZGVmYXVsdCB0ZXh0LyogdG8gdXRmLThcbiAgaWYgKG1hdGNoICYmIFRFWFRfVFlQRV9SRUdFWFAudGVzdChtYXRjaFsxXSkpIHtcbiAgICByZXR1cm4gJ1VURi04J1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZnVsbCBDb250ZW50LVR5cGUgaGVhZGVyIGdpdmVuIGEgTUlNRSB0eXBlIG9yIGV4dGVuc2lvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtib29sZWFufHN0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBjb250ZW50VHlwZSAoc3RyKSB7XG4gIC8vIFRPRE86IHNob3VsZCB0aGlzIGV2ZW4gYmUgaW4gdGhpcyBtb2R1bGU/XG4gIGlmICghc3RyIHx8IHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB2YXIgbWltZSA9IHN0ci5pbmRleE9mKCcvJykgPT09IC0xXG4gICAgPyBleHBvcnRzLmxvb2t1cChzdHIpXG4gICAgOiBzdHJcblxuICBpZiAoIW1pbWUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIFRPRE86IHVzZSBjb250ZW50LXR5cGUgb3Igb3RoZXIgbW9kdWxlXG4gIGlmIChtaW1lLmluZGV4T2YoJ2NoYXJzZXQnKSA9PT0gLTEpIHtcbiAgICB2YXIgY2hhcnNldCA9IGV4cG9ydHMuY2hhcnNldChtaW1lKVxuICAgIGlmIChjaGFyc2V0KSBtaW1lICs9ICc7IGNoYXJzZXQ9JyArIGNoYXJzZXQudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgcmV0dXJuIG1pbWVcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGRlZmF1bHQgZXh0ZW5zaW9uIGZvciBhIE1JTUUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHJldHVybiB7Ym9vbGVhbnxzdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gZXh0ZW5zaW9uICh0eXBlKSB7XG4gIGlmICghdHlwZSB8fCB0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIFRPRE86IHVzZSBtZWRpYS10eXBlclxuICB2YXIgbWF0Y2ggPSBFWFRSQUNUX1RZUEVfUkVHRVhQLmV4ZWModHlwZSlcblxuICAvLyBnZXQgZXh0ZW5zaW9uc1xuICB2YXIgZXh0cyA9IG1hdGNoICYmIGV4cG9ydHMuZXh0ZW5zaW9uc1ttYXRjaFsxXS50b0xvd2VyQ2FzZSgpXVxuXG4gIGlmICghZXh0cyB8fCAhZXh0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBleHRzWzBdXG59XG5cbi8qKlxuICogTG9va3VwIHRoZSBNSU1FIHR5cGUgZm9yIGEgZmlsZSBwYXRoL2V4dGVuc2lvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICogQHJldHVybiB7Ym9vbGVhbnxzdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gbG9va3VwIChwYXRoKSB7XG4gIGlmICghcGF0aCB8fCB0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIGdldCB0aGUgZXh0ZW5zaW9uIChcImV4dFwiIG9yIFwiLmV4dFwiIG9yIGZ1bGwgcGF0aClcbiAgdmFyIGV4dGVuc2lvbiA9IGV4dG5hbWUoJ3guJyArIHBhdGgpXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAuc3Vic3RyKDEpXG5cbiAgaWYgKCFleHRlbnNpb24pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzLnR5cGVzW2V4dGVuc2lvbl0gfHwgZmFsc2Vcbn1cblxuLyoqXG4gKiBQb3B1bGF0ZSB0aGUgZXh0ZW5zaW9ucyBhbmQgdHlwZXMgbWFwcy5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcG9wdWxhdGVNYXBzIChleHRlbnNpb25zLCB0eXBlcykge1xuICAvLyBzb3VyY2UgcHJlZmVyZW5jZSAobGVhc3QgLT4gbW9zdClcbiAgdmFyIHByZWZlcmVuY2UgPSBbJ25naW54JywgJ2FwYWNoZScsIHVuZGVmaW5lZCwgJ2lhbmEnXVxuXG4gIE9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKGZ1bmN0aW9uIGZvckVhY2hNaW1lVHlwZSAodHlwZSkge1xuICAgIHZhciBtaW1lID0gZGJbdHlwZV1cbiAgICB2YXIgZXh0cyA9IG1pbWUuZXh0ZW5zaW9uc1xuXG4gICAgaWYgKCFleHRzIHx8ICFleHRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gbWltZSAtPiBleHRlbnNpb25zXG4gICAgZXh0ZW5zaW9uc1t0eXBlXSA9IGV4dHNcblxuICAgIC8vIGV4dGVuc2lvbiAtPiBtaW1lXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZXh0ZW5zaW9uID0gZXh0c1tpXVxuXG4gICAgICBpZiAodHlwZXNbZXh0ZW5zaW9uXSkge1xuICAgICAgICB2YXIgZnJvbSA9IHByZWZlcmVuY2UuaW5kZXhPZihkYlt0eXBlc1tleHRlbnNpb25dXS5zb3VyY2UpXG4gICAgICAgIHZhciB0byA9IHByZWZlcmVuY2UuaW5kZXhPZihtaW1lLnNvdXJjZSlcblxuICAgICAgICBpZiAodHlwZXNbZXh0ZW5zaW9uXSAhPT0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScgJiZcbiAgICAgICAgICAoZnJvbSA+IHRvIHx8IChmcm9tID09PSB0byAmJiB0eXBlc1tleHRlbnNpb25dLnN1YnN0cigwLCAxMikgPT09ICdhcHBsaWNhdGlvbi8nKSkpIHtcbiAgICAgICAgICAvLyBza2lwIHRoZSByZW1hcHBpbmdcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCB0aGUgZXh0ZW5zaW9uIC0+IG1pbWVcbiAgICAgIHR5cGVzW2V4dGVuc2lvbl0gPSB0eXBlXG4gICAgfVxuICB9KVxufVxuIiwiaW1wb3J0IFN0cmVhbSBmcm9tICdzdHJlYW0nO1xuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgaHR0cHMgZnJvbSAnaHR0cHMnO1xuaW1wb3J0IHpsaWIgZnJvbSAnemxpYic7XG5cbi8vIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS90bXB2YXIvanNkb20vYmxvYi9hYTg1YjJhYmYwNzc2NmZmN2JmNWMxZjZkYWFmYjM3MjZmMmYyZGI1L2xpYi9qc2RvbS9saXZpbmcvYmxvYi5qc1xuXG4vLyBmaXggZm9yIFwiUmVhZGFibGVcIiBpc24ndCBhIG5hbWVkIGV4cG9ydCBpc3N1ZVxuY29uc3QgUmVhZGFibGUgPSBTdHJlYW0uUmVhZGFibGU7XG5cbmNvbnN0IEJVRkZFUiA9IFN5bWJvbCgnYnVmZmVyJyk7XG5jb25zdCBUWVBFID0gU3ltYm9sKCd0eXBlJyk7XG5cbmNsYXNzIEJsb2Ige1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzW1RZUEVdID0gJyc7XG5cblx0XHRjb25zdCBibG9iUGFydHMgPSBhcmd1bWVudHNbMF07XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IGFyZ3VtZW50c1sxXTtcblxuXHRcdGNvbnN0IGJ1ZmZlcnMgPSBbXTtcblx0XHRsZXQgc2l6ZSA9IDA7XG5cblx0XHRpZiAoYmxvYlBhcnRzKSB7XG5cdFx0XHRjb25zdCBhID0gYmxvYlBhcnRzO1xuXHRcdFx0Y29uc3QgbGVuZ3RoID0gTnVtYmVyKGEubGVuZ3RoKTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IGFbaV07XG5cdFx0XHRcdGxldCBidWZmZXI7XG5cdFx0XHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgQnVmZmVyKSB7XG5cdFx0XHRcdFx0YnVmZmVyID0gZWxlbWVudDtcblx0XHRcdFx0fSBlbHNlIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZWxlbWVudCkpIHtcblx0XHRcdFx0XHRidWZmZXIgPSBCdWZmZXIuZnJvbShlbGVtZW50LmJ1ZmZlciwgZWxlbWVudC5ieXRlT2Zmc2V0LCBlbGVtZW50LmJ5dGVMZW5ndGgpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuXHRcdFx0XHRcdGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGVsZW1lbnQpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBCbG9iKSB7XG5cdFx0XHRcdFx0YnVmZmVyID0gZWxlbWVudFtCVUZGRVJdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/IGVsZW1lbnQgOiBTdHJpbmcoZWxlbWVudCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNpemUgKz0gYnVmZmVyLmxlbmd0aDtcblx0XHRcdFx0YnVmZmVycy5wdXNoKGJ1ZmZlcik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpc1tCVUZGRVJdID0gQnVmZmVyLmNvbmNhdChidWZmZXJzKTtcblxuXHRcdGxldCB0eXBlID0gb3B0aW9ucyAmJiBvcHRpb25zLnR5cGUgIT09IHVuZGVmaW5lZCAmJiBTdHJpbmcob3B0aW9ucy50eXBlKS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICh0eXBlICYmICEvW15cXHUwMDIwLVxcdTAwN0VdLy50ZXN0KHR5cGUpKSB7XG5cdFx0XHR0aGlzW1RZUEVdID0gdHlwZTtcblx0XHR9XG5cdH1cblx0Z2V0IHNpemUoKSB7XG5cdFx0cmV0dXJuIHRoaXNbQlVGRkVSXS5sZW5ndGg7XG5cdH1cblx0Z2V0IHR5cGUoKSB7XG5cdFx0cmV0dXJuIHRoaXNbVFlQRV07XG5cdH1cblx0dGV4dCgpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXNbQlVGRkVSXS50b1N0cmluZygpKTtcblx0fVxuXHRhcnJheUJ1ZmZlcigpIHtcblx0XHRjb25zdCBidWYgPSB0aGlzW0JVRkZFUl07XG5cdFx0Y29uc3QgYWIgPSBidWYuYnVmZmVyLnNsaWNlKGJ1Zi5ieXRlT2Zmc2V0LCBidWYuYnl0ZU9mZnNldCArIGJ1Zi5ieXRlTGVuZ3RoKTtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFiKTtcblx0fVxuXHRzdHJlYW0oKSB7XG5cdFx0Y29uc3QgcmVhZGFibGUgPSBuZXcgUmVhZGFibGUoKTtcblx0XHRyZWFkYWJsZS5fcmVhZCA9IGZ1bmN0aW9uICgpIHt9O1xuXHRcdHJlYWRhYmxlLnB1c2godGhpc1tCVUZGRVJdKTtcblx0XHRyZWFkYWJsZS5wdXNoKG51bGwpO1xuXHRcdHJldHVybiByZWFkYWJsZTtcblx0fVxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gJ1tvYmplY3QgQmxvYl0nO1xuXHR9XG5cdHNsaWNlKCkge1xuXHRcdGNvbnN0IHNpemUgPSB0aGlzLnNpemU7XG5cblx0XHRjb25zdCBzdGFydCA9IGFyZ3VtZW50c1swXTtcblx0XHRjb25zdCBlbmQgPSBhcmd1bWVudHNbMV07XG5cdFx0bGV0IHJlbGF0aXZlU3RhcnQsIHJlbGF0aXZlRW5kO1xuXHRcdGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZWxhdGl2ZVN0YXJ0ID0gMDtcblx0XHR9IGVsc2UgaWYgKHN0YXJ0IDwgMCkge1xuXHRcdFx0cmVsYXRpdmVTdGFydCA9IE1hdGgubWF4KHNpemUgKyBzdGFydCwgMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbGF0aXZlU3RhcnQgPSBNYXRoLm1pbihzdGFydCwgc2l6ZSk7XG5cdFx0fVxuXHRcdGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmVsYXRpdmVFbmQgPSBzaXplO1xuXHRcdH0gZWxzZSBpZiAoZW5kIDwgMCkge1xuXHRcdFx0cmVsYXRpdmVFbmQgPSBNYXRoLm1heChzaXplICsgZW5kLCAwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVsYXRpdmVFbmQgPSBNYXRoLm1pbihlbmQsIHNpemUpO1xuXHRcdH1cblx0XHRjb25zdCBzcGFuID0gTWF0aC5tYXgocmVsYXRpdmVFbmQgLSByZWxhdGl2ZVN0YXJ0LCAwKTtcblxuXHRcdGNvbnN0IGJ1ZmZlciA9IHRoaXNbQlVGRkVSXTtcblx0XHRjb25zdCBzbGljZWRCdWZmZXIgPSBidWZmZXIuc2xpY2UocmVsYXRpdmVTdGFydCwgcmVsYXRpdmVTdGFydCArIHNwYW4pO1xuXHRcdGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbXSwgeyB0eXBlOiBhcmd1bWVudHNbMl0gfSk7XG5cdFx0YmxvYltCVUZGRVJdID0gc2xpY2VkQnVmZmVyO1xuXHRcdHJldHVybiBibG9iO1xuXHR9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEJsb2IucHJvdG90eXBlLCB7XG5cdHNpemU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHR0eXBlOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0c2xpY2U6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEJsb2IucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcblx0dmFsdWU6ICdCbG9iJyxcblx0d3JpdGFibGU6IGZhbHNlLFxuXHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0Y29uZmlndXJhYmxlOiB0cnVlXG59KTtcblxuLyoqXG4gKiBmZXRjaC1lcnJvci5qc1xuICpcbiAqIEZldGNoRXJyb3IgaW50ZXJmYWNlIGZvciBvcGVyYXRpb25hbCBlcnJvcnNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBGZXRjaEVycm9yIGluc3RhbmNlXG4gKlxuICogQHBhcmFtICAgU3RyaW5nICAgICAgbWVzc2FnZSAgICAgIEVycm9yIG1lc3NhZ2UgZm9yIGh1bWFuXG4gKiBAcGFyYW0gICBTdHJpbmcgICAgICB0eXBlICAgICAgICAgRXJyb3IgdHlwZSBmb3IgbWFjaGluZVxuICogQHBhcmFtICAgU3RyaW5nICAgICAgc3lzdGVtRXJyb3IgIEZvciBOb2RlLmpzIHN5c3RlbSBlcnJvclxuICogQHJldHVybiAgRmV0Y2hFcnJvclxuICovXG5mdW5jdGlvbiBGZXRjaEVycm9yKG1lc3NhZ2UsIHR5cGUsIHN5c3RlbUVycm9yKSB7XG4gIEVycm9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgdGhpcy50eXBlID0gdHlwZTtcblxuICAvLyB3aGVuIGVyci50eXBlIGlzIGBzeXN0ZW1gLCBlcnIuY29kZSBjb250YWlucyBzeXN0ZW0gZXJyb3IgY29kZVxuICBpZiAoc3lzdGVtRXJyb3IpIHtcbiAgICB0aGlzLmNvZGUgPSB0aGlzLmVycm5vID0gc3lzdGVtRXJyb3IuY29kZTtcbiAgfVxuXG4gIC8vIGhpZGUgY3VzdG9tIGVycm9yIGltcGxlbWVudGF0aW9uIGRldGFpbHMgZnJvbSBlbmQtdXNlcnNcbiAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG59XG5cbkZldGNoRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuRmV0Y2hFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBGZXRjaEVycm9yO1xuRmV0Y2hFcnJvci5wcm90b3R5cGUubmFtZSA9ICdGZXRjaEVycm9yJztcblxubGV0IGNvbnZlcnQ7XG50cnkge1xuXHRjb252ZXJ0ID0gcmVxdWlyZSgnZW5jb2RpbmcnKS5jb252ZXJ0O1xufSBjYXRjaCAoZSkge31cblxuY29uc3QgSU5URVJOQUxTID0gU3ltYm9sKCdCb2R5IGludGVybmFscycpO1xuXG4vLyBmaXggYW4gaXNzdWUgd2hlcmUgXCJQYXNzVGhyb3VnaFwiIGlzbid0IGEgbmFtZWQgZXhwb3J0IGZvciBub2RlIDwxMFxuY29uc3QgUGFzc1Rocm91Z2ggPSBTdHJlYW0uUGFzc1Rocm91Z2g7XG5cbi8qKlxuICogQm9keSBtaXhpblxuICpcbiAqIFJlZjogaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2JvZHlcbiAqXG4gKiBAcGFyYW0gICBTdHJlYW0gIGJvZHkgIFJlYWRhYmxlIHN0cmVhbVxuICogQHBhcmFtICAgT2JqZWN0ICBvcHRzICBSZXNwb25zZSBvcHRpb25zXG4gKiBAcmV0dXJuICBWb2lkXG4gKi9cbmZ1bmN0aW9uIEJvZHkoYm9keSkge1xuXHR2YXIgX3RoaXMgPSB0aGlzO1xuXG5cdHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fSxcblx0ICAgIF9yZWYkc2l6ZSA9IF9yZWYuc2l6ZTtcblxuXHRsZXQgc2l6ZSA9IF9yZWYkc2l6ZSA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWYkc2l6ZTtcblx0dmFyIF9yZWYkdGltZW91dCA9IF9yZWYudGltZW91dDtcblx0bGV0IHRpbWVvdXQgPSBfcmVmJHRpbWVvdXQgPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJHRpbWVvdXQ7XG5cblx0aWYgKGJvZHkgPT0gbnVsbCkge1xuXHRcdC8vIGJvZHkgaXMgdW5kZWZpbmVkIG9yIG51bGxcblx0XHRib2R5ID0gbnVsbDtcblx0fSBlbHNlIGlmIChpc1VSTFNlYXJjaFBhcmFtcyhib2R5KSkge1xuXHRcdC8vIGJvZHkgaXMgYSBVUkxTZWFyY2hQYXJhbXNcblx0XHRib2R5ID0gQnVmZmVyLmZyb20oYm9keS50b1N0cmluZygpKTtcblx0fSBlbHNlIGlmIChpc0Jsb2IoYm9keSkpIDsgZWxzZSBpZiAoQnVmZmVyLmlzQnVmZmVyKGJvZHkpKSA7IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChib2R5KSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykge1xuXHRcdC8vIGJvZHkgaXMgQXJyYXlCdWZmZXJcblx0XHRib2R5ID0gQnVmZmVyLmZyb20oYm9keSk7XG5cdH0gZWxzZSBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGJvZHkpKSB7XG5cdFx0Ly8gYm9keSBpcyBBcnJheUJ1ZmZlclZpZXdcblx0XHRib2R5ID0gQnVmZmVyLmZyb20oYm9keS5idWZmZXIsIGJvZHkuYnl0ZU9mZnNldCwgYm9keS5ieXRlTGVuZ3RoKTtcblx0fSBlbHNlIGlmIChib2R5IGluc3RhbmNlb2YgU3RyZWFtKSA7IGVsc2Uge1xuXHRcdC8vIG5vbmUgb2YgdGhlIGFib3ZlXG5cdFx0Ly8gY29lcmNlIHRvIHN0cmluZyB0aGVuIGJ1ZmZlclxuXHRcdGJvZHkgPSBCdWZmZXIuZnJvbShTdHJpbmcoYm9keSkpO1xuXHR9XG5cdHRoaXNbSU5URVJOQUxTXSA9IHtcblx0XHRib2R5LFxuXHRcdGRpc3R1cmJlZDogZmFsc2UsXG5cdFx0ZXJyb3I6IG51bGxcblx0fTtcblx0dGhpcy5zaXplID0gc2l6ZTtcblx0dGhpcy50aW1lb3V0ID0gdGltZW91dDtcblxuXHRpZiAoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSkge1xuXHRcdGJvZHkub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuXHRcdFx0Y29uc3QgZXJyb3IgPSBlcnIubmFtZSA9PT0gJ0Fib3J0RXJyb3InID8gZXJyIDogbmV3IEZldGNoRXJyb3IoYEludmFsaWQgcmVzcG9uc2UgYm9keSB3aGlsZSB0cnlpbmcgdG8gZmV0Y2ggJHtfdGhpcy51cmx9OiAke2Vyci5tZXNzYWdlfWAsICdzeXN0ZW0nLCBlcnIpO1xuXHRcdFx0X3RoaXNbSU5URVJOQUxTXS5lcnJvciA9IGVycm9yO1xuXHRcdH0pO1xuXHR9XG59XG5cbkJvZHkucHJvdG90eXBlID0ge1xuXHRnZXQgYm9keSgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFNdLmJvZHk7XG5cdH0sXG5cblx0Z2V0IGJvZHlVc2VkKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMU10uZGlzdHVyYmVkO1xuXHR9LFxuXG5cdC8qKlxuICAqIERlY29kZSByZXNwb25zZSBhcyBBcnJheUJ1ZmZlclxuICAqXG4gICogQHJldHVybiAgUHJvbWlzZVxuICAqL1xuXHRhcnJheUJ1ZmZlcigpIHtcblx0XHRyZXR1cm4gY29uc3VtZUJvZHkuY2FsbCh0aGlzKS50aGVuKGZ1bmN0aW9uIChidWYpIHtcblx0XHRcdHJldHVybiBidWYuYnVmZmVyLnNsaWNlKGJ1Zi5ieXRlT2Zmc2V0LCBidWYuYnl0ZU9mZnNldCArIGJ1Zi5ieXRlTGVuZ3RoKTtcblx0XHR9KTtcblx0fSxcblxuXHQvKipcbiAgKiBSZXR1cm4gcmF3IHJlc3BvbnNlIGFzIEJsb2JcbiAgKlxuICAqIEByZXR1cm4gUHJvbWlzZVxuICAqL1xuXHRibG9iKCkge1xuXHRcdGxldCBjdCA9IHRoaXMuaGVhZGVycyAmJiB0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSB8fCAnJztcblx0XHRyZXR1cm4gY29uc3VtZUJvZHkuY2FsbCh0aGlzKS50aGVuKGZ1bmN0aW9uIChidWYpIHtcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKFxuXHRcdFx0Ly8gUHJldmVudCBjb3B5aW5nXG5cdFx0XHRuZXcgQmxvYihbXSwge1xuXHRcdFx0XHR0eXBlOiBjdC50b0xvd2VyQ2FzZSgpXG5cdFx0XHR9KSwge1xuXHRcdFx0XHRbQlVGRkVSXTogYnVmXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSxcblxuXHQvKipcbiAgKiBEZWNvZGUgcmVzcG9uc2UgYXMganNvblxuICAqXG4gICogQHJldHVybiAgUHJvbWlzZVxuICAqL1xuXHRqc29uKCkge1xuXHRcdHZhciBfdGhpczIgPSB0aGlzO1xuXG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5LmNhbGwodGhpcykudGhlbihmdW5jdGlvbiAoYnVmZmVyKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShidWZmZXIudG9TdHJpbmcoKSk7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0cmV0dXJuIEJvZHkuUHJvbWlzZS5yZWplY3QobmV3IEZldGNoRXJyb3IoYGludmFsaWQganNvbiByZXNwb25zZSBib2R5IGF0ICR7X3RoaXMyLnVybH0gcmVhc29uOiAke2Vyci5tZXNzYWdlfWAsICdpbnZhbGlkLWpzb24nKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cblx0LyoqXG4gICogRGVjb2RlIHJlc3BvbnNlIGFzIHRleHRcbiAgKlxuICAqIEByZXR1cm4gIFByb21pc2VcbiAgKi9cblx0dGV4dCgpIHtcblx0XHRyZXR1cm4gY29uc3VtZUJvZHkuY2FsbCh0aGlzKS50aGVuKGZ1bmN0aW9uIChidWZmZXIpIHtcblx0XHRcdHJldHVybiBidWZmZXIudG9TdHJpbmcoKTtcblx0XHR9KTtcblx0fSxcblxuXHQvKipcbiAgKiBEZWNvZGUgcmVzcG9uc2UgYXMgYnVmZmVyIChub24tc3BlYyBhcGkpXG4gICpcbiAgKiBAcmV0dXJuICBQcm9taXNlXG4gICovXG5cdGJ1ZmZlcigpIHtcblx0XHRyZXR1cm4gY29uc3VtZUJvZHkuY2FsbCh0aGlzKTtcblx0fSxcblxuXHQvKipcbiAgKiBEZWNvZGUgcmVzcG9uc2UgYXMgdGV4dCwgd2hpbGUgYXV0b21hdGljYWxseSBkZXRlY3RpbmcgdGhlIGVuY29kaW5nIGFuZFxuICAqIHRyeWluZyB0byBkZWNvZGUgdG8gVVRGLTggKG5vbi1zcGVjIGFwaSlcbiAgKlxuICAqIEByZXR1cm4gIFByb21pc2VcbiAgKi9cblx0dGV4dENvbnZlcnRlZCgpIHtcblx0XHR2YXIgX3RoaXMzID0gdGhpcztcblxuXHRcdHJldHVybiBjb25zdW1lQm9keS5jYWxsKHRoaXMpLnRoZW4oZnVuY3Rpb24gKGJ1ZmZlcikge1xuXHRcdFx0cmV0dXJuIGNvbnZlcnRCb2R5KGJ1ZmZlciwgX3RoaXMzLmhlYWRlcnMpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG4vLyBJbiBicm93c2VycywgYWxsIHByb3BlcnRpZXMgYXJlIGVudW1lcmFibGUuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhCb2R5LnByb3RvdHlwZSwge1xuXHRib2R5OiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0Ym9keVVzZWQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRhcnJheUJ1ZmZlcjogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGJsb2I6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRqc29uOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0dGV4dDogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xuXG5Cb2R5Lm1peEluID0gZnVuY3Rpb24gKHByb3RvKSB7XG5cdGZvciAoY29uc3QgbmFtZSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhCb2R5LnByb3RvdHlwZSkpIHtcblx0XHQvLyBpc3RhbmJ1bCBpZ25vcmUgZWxzZTogZnV0dXJlIHByb29mXG5cdFx0aWYgKCEobmFtZSBpbiBwcm90bykpIHtcblx0XHRcdGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEJvZHkucHJvdG90eXBlLCBuYW1lKTtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgbmFtZSwgZGVzYyk7XG5cdFx0fVxuXHR9XG59O1xuXG4vKipcbiAqIENvbnN1bWUgYW5kIGNvbnZlcnQgYW4gZW50aXJlIEJvZHkgdG8gYSBCdWZmZXIuXG4gKlxuICogUmVmOiBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ib2R5LWNvbnN1bWUtYm9keVxuICpcbiAqIEByZXR1cm4gIFByb21pc2VcbiAqL1xuZnVuY3Rpb24gY29uc3VtZUJvZHkoKSB7XG5cdHZhciBfdGhpczQgPSB0aGlzO1xuXG5cdGlmICh0aGlzW0lOVEVSTkFMU10uZGlzdHVyYmVkKSB7XG5cdFx0cmV0dXJuIEJvZHkuUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcihgYm9keSB1c2VkIGFscmVhZHkgZm9yOiAke3RoaXMudXJsfWApKTtcblx0fVxuXG5cdHRoaXNbSU5URVJOQUxTXS5kaXN0dXJiZWQgPSB0cnVlO1xuXG5cdGlmICh0aGlzW0lOVEVSTkFMU10uZXJyb3IpIHtcblx0XHRyZXR1cm4gQm9keS5Qcm9taXNlLnJlamVjdCh0aGlzW0lOVEVSTkFMU10uZXJyb3IpO1xuXHR9XG5cblx0bGV0IGJvZHkgPSB0aGlzLmJvZHk7XG5cblx0Ly8gYm9keSBpcyBudWxsXG5cdGlmIChib2R5ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIEJvZHkuUHJvbWlzZS5yZXNvbHZlKEJ1ZmZlci5hbGxvYygwKSk7XG5cdH1cblxuXHQvLyBib2R5IGlzIGJsb2Jcblx0aWYgKGlzQmxvYihib2R5KSkge1xuXHRcdGJvZHkgPSBib2R5LnN0cmVhbSgpO1xuXHR9XG5cblx0Ly8gYm9keSBpcyBidWZmZXJcblx0aWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSkge1xuXHRcdHJldHVybiBCb2R5LlByb21pc2UucmVzb2x2ZShib2R5KTtcblx0fVxuXG5cdC8vIGlzdGFuYnVsIGlnbm9yZSBpZjogc2hvdWxkIG5ldmVyIGhhcHBlblxuXHRpZiAoIShib2R5IGluc3RhbmNlb2YgU3RyZWFtKSkge1xuXHRcdHJldHVybiBCb2R5LlByb21pc2UucmVzb2x2ZShCdWZmZXIuYWxsb2MoMCkpO1xuXHR9XG5cblx0Ly8gYm9keSBpcyBzdHJlYW1cblx0Ly8gZ2V0IHJlYWR5IHRvIGFjdHVhbGx5IGNvbnN1bWUgdGhlIGJvZHlcblx0bGV0IGFjY3VtID0gW107XG5cdGxldCBhY2N1bUJ5dGVzID0gMDtcblx0bGV0IGFib3J0ID0gZmFsc2U7XG5cblx0cmV0dXJuIG5ldyBCb2R5LlByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGxldCByZXNUaW1lb3V0O1xuXG5cdFx0Ly8gYWxsb3cgdGltZW91dCBvbiBzbG93IHJlc3BvbnNlIGJvZHlcblx0XHRpZiAoX3RoaXM0LnRpbWVvdXQpIHtcblx0XHRcdHJlc1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0YWJvcnQgPSB0cnVlO1xuXHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYFJlc3BvbnNlIHRpbWVvdXQgd2hpbGUgdHJ5aW5nIHRvIGZldGNoICR7X3RoaXM0LnVybH0gKG92ZXIgJHtfdGhpczQudGltZW91dH1tcylgLCAnYm9keS10aW1lb3V0JykpO1xuXHRcdFx0fSwgX3RoaXM0LnRpbWVvdXQpO1xuXHRcdH1cblxuXHRcdC8vIGhhbmRsZSBzdHJlYW0gZXJyb3JzXG5cdFx0Ym9keS5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRpZiAoZXJyLm5hbWUgPT09ICdBYm9ydEVycm9yJykge1xuXHRcdFx0XHQvLyBpZiB0aGUgcmVxdWVzdCB3YXMgYWJvcnRlZCwgcmVqZWN0IHdpdGggdGhpcyBFcnJvclxuXHRcdFx0XHRhYm9ydCA9IHRydWU7XG5cdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gb3RoZXIgZXJyb3JzLCBzdWNoIGFzIGluY29ycmVjdCBjb250ZW50LWVuY29kaW5nXG5cdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgSW52YWxpZCByZXNwb25zZSBib2R5IHdoaWxlIHRyeWluZyB0byBmZXRjaCAke190aGlzNC51cmx9OiAke2Vyci5tZXNzYWdlfWAsICdzeXN0ZW0nLCBlcnIpKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGJvZHkub24oJ2RhdGEnLCBmdW5jdGlvbiAoY2h1bmspIHtcblx0XHRcdGlmIChhYm9ydCB8fCBjaHVuayA9PT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmIChfdGhpczQuc2l6ZSAmJiBhY2N1bUJ5dGVzICsgY2h1bmsubGVuZ3RoID4gX3RoaXM0LnNpemUpIHtcblx0XHRcdFx0YWJvcnQgPSB0cnVlO1xuXHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYGNvbnRlbnQgc2l6ZSBhdCAke190aGlzNC51cmx9IG92ZXIgbGltaXQ6ICR7X3RoaXM0LnNpemV9YCwgJ21heC1zaXplJykpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGFjY3VtQnl0ZXMgKz0gY2h1bmsubGVuZ3RoO1xuXHRcdFx0YWNjdW0ucHVzaChjaHVuayk7XG5cdFx0fSk7XG5cblx0XHRib2R5Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoYWJvcnQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjbGVhclRpbWVvdXQocmVzVGltZW91dCk7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlc29sdmUoQnVmZmVyLmNvbmNhdChhY2N1bSwgYWNjdW1CeXRlcykpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdC8vIGhhbmRsZSBzdHJlYW1zIHRoYXQgaGF2ZSBhY2N1bXVsYXRlZCB0b28gbXVjaCBkYXRhIChpc3N1ZSAjNDE0KVxuXHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYENvdWxkIG5vdCBjcmVhdGUgQnVmZmVyIGZyb20gcmVzcG9uc2UgYm9keSBmb3IgJHtfdGhpczQudXJsfTogJHtlcnIubWVzc2FnZX1gLCAnc3lzdGVtJywgZXJyKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufVxuXG4vKipcbiAqIERldGVjdCBidWZmZXIgZW5jb2RpbmcgYW5kIGNvbnZlcnQgdG8gdGFyZ2V0IGVuY29kaW5nXG4gKiByZWY6IGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTEvV0QtaHRtbDUtMjAxMTAxMTMvcGFyc2luZy5odG1sI2RldGVybWluaW5nLXRoZS1jaGFyYWN0ZXItZW5jb2RpbmdcbiAqXG4gKiBAcGFyYW0gICBCdWZmZXIgIGJ1ZmZlciAgICBJbmNvbWluZyBidWZmZXJcbiAqIEBwYXJhbSAgIFN0cmluZyAgZW5jb2RpbmcgIFRhcmdldCBlbmNvZGluZ1xuICogQHJldHVybiAgU3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRCb2R5KGJ1ZmZlciwgaGVhZGVycykge1xuXHRpZiAodHlwZW9mIGNvbnZlcnQgIT09ICdmdW5jdGlvbicpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBwYWNrYWdlIGBlbmNvZGluZ2AgbXVzdCBiZSBpbnN0YWxsZWQgdG8gdXNlIHRoZSB0ZXh0Q29udmVydGVkKCkgZnVuY3Rpb24nKTtcblx0fVxuXG5cdGNvbnN0IGN0ID0gaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuXHRsZXQgY2hhcnNldCA9ICd1dGYtOCc7XG5cdGxldCByZXMsIHN0cjtcblxuXHQvLyBoZWFkZXJcblx0aWYgKGN0KSB7XG5cdFx0cmVzID0gL2NoYXJzZXQ9KFteO10qKS9pLmV4ZWMoY3QpO1xuXHR9XG5cblx0Ly8gbm8gY2hhcnNldCBpbiBjb250ZW50IHR5cGUsIHBlZWsgYXQgcmVzcG9uc2UgYm9keSBmb3IgYXQgbW9zdCAxMDI0IGJ5dGVzXG5cdHN0ciA9IGJ1ZmZlci5zbGljZSgwLCAxMDI0KS50b1N0cmluZygpO1xuXG5cdC8vIGh0bWw1XG5cdGlmICghcmVzICYmIHN0cikge1xuXHRcdHJlcyA9IC88bWV0YS4rP2NoYXJzZXQ9KFsnXCJdKSguKz8pXFwxL2kuZXhlYyhzdHIpO1xuXHR9XG5cblx0Ly8gaHRtbDRcblx0aWYgKCFyZXMgJiYgc3RyKSB7XG5cdFx0cmVzID0gLzxtZXRhW1xcc10rP2h0dHAtZXF1aXY9KFsnXCJdKWNvbnRlbnQtdHlwZVxcMVtcXHNdKz9jb250ZW50PShbJ1wiXSkoLis/KVxcMi9pLmV4ZWMoc3RyKTtcblxuXHRcdGlmIChyZXMpIHtcblx0XHRcdHJlcyA9IC9jaGFyc2V0PSguKikvaS5leGVjKHJlcy5wb3AoKSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8geG1sXG5cdGlmICghcmVzICYmIHN0cikge1xuXHRcdHJlcyA9IC88XFw/eG1sLis/ZW5jb2Rpbmc9KFsnXCJdKSguKz8pXFwxL2kuZXhlYyhzdHIpO1xuXHR9XG5cblx0Ly8gZm91bmQgY2hhcnNldFxuXHRpZiAocmVzKSB7XG5cdFx0Y2hhcnNldCA9IHJlcy5wb3AoKTtcblxuXHRcdC8vIHByZXZlbnQgZGVjb2RlIGlzc3VlcyB3aGVuIHNpdGVzIHVzZSBpbmNvcnJlY3QgZW5jb2Rpbmdcblx0XHQvLyByZWY6IGh0dHBzOi8vaHNpdm9uZW4uZmkvZW5jb2RpbmctbWVudS9cblx0XHRpZiAoY2hhcnNldCA9PT0gJ2diMjMxMicgfHwgY2hhcnNldCA9PT0gJ2diaycpIHtcblx0XHRcdGNoYXJzZXQgPSAnZ2IxODAzMCc7XG5cdFx0fVxuXHR9XG5cblx0Ly8gdHVybiByYXcgYnVmZmVycyBpbnRvIGEgc2luZ2xlIHV0Zi04IGJ1ZmZlclxuXHRyZXR1cm4gY29udmVydChidWZmZXIsICdVVEYtOCcsIGNoYXJzZXQpLnRvU3RyaW5nKCk7XG59XG5cbi8qKlxuICogRGV0ZWN0IGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICogcmVmOiBodHRwczovL2dpdGh1Yi5jb20vYml0aW5uL25vZGUtZmV0Y2gvaXNzdWVzLzI5NiNpc3N1ZWNvbW1lbnQtMzA3NTk4MTQzXG4gKlxuICogQHBhcmFtICAgT2JqZWN0ICBvYmogICAgIE9iamVjdCB0byBkZXRlY3QgYnkgdHlwZSBvciBicmFuZFxuICogQHJldHVybiAgU3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKG9iaikge1xuXHQvLyBEdWNrLXR5cGluZyBhcyBhIG5lY2Vzc2FyeSBjb25kaXRpb24uXG5cdGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqLmFwcGVuZCAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2Ygb2JqLmRlbGV0ZSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2Ygb2JqLmdldCAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2Ygb2JqLmdldEFsbCAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2Ygb2JqLmhhcyAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2Ygb2JqLnNldCAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIEJyYW5kLWNoZWNraW5nIGFuZCBtb3JlIGR1Y2stdHlwaW5nIGFzIG9wdGlvbmFsIGNvbmRpdGlvbi5cblx0cmV0dXJuIG9iai5jb25zdHJ1Y3Rvci5uYW1lID09PSAnVVJMU2VhcmNoUGFyYW1zJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgVVJMU2VhcmNoUGFyYW1zXScgfHwgdHlwZW9mIG9iai5zb3J0ID09PSAnZnVuY3Rpb24nO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGEgVzNDIGBCbG9iYCBvYmplY3QgKHdoaWNoIGBGaWxlYCBpbmhlcml0cyBmcm9tKVxuICogQHBhcmFtICB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0Jsb2Iob2JqKSB7XG5cdHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqLmFycmF5QnVmZmVyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmoudHlwZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIG9iai5zdHJlYW0gPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3RvciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdzdHJpbmcnICYmIC9eKEJsb2J8RmlsZSkkLy50ZXN0KG9iai5jb25zdHJ1Y3Rvci5uYW1lKSAmJiAvXihCbG9ifEZpbGUpJC8udGVzdChvYmpbU3ltYm9sLnRvU3RyaW5nVGFnXSk7XG59XG5cbi8qKlxuICogQ2xvbmUgYm9keSBnaXZlbiBSZXMvUmVxIGluc3RhbmNlXG4gKlxuICogQHBhcmFtICAgTWl4ZWQgIGluc3RhbmNlICBSZXNwb25zZSBvciBSZXF1ZXN0IGluc3RhbmNlXG4gKiBAcmV0dXJuICBNaXhlZFxuICovXG5mdW5jdGlvbiBjbG9uZShpbnN0YW5jZSkge1xuXHRsZXQgcDEsIHAyO1xuXHRsZXQgYm9keSA9IGluc3RhbmNlLmJvZHk7XG5cblx0Ly8gZG9uJ3QgYWxsb3cgY2xvbmluZyBhIHVzZWQgYm9keVxuXHRpZiAoaW5zdGFuY2UuYm9keVVzZWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBjbG9uZSBib2R5IGFmdGVyIGl0IGlzIHVzZWQnKTtcblx0fVxuXG5cdC8vIGNoZWNrIHRoYXQgYm9keSBpcyBhIHN0cmVhbSBhbmQgbm90IGZvcm0tZGF0YSBvYmplY3Rcblx0Ly8gbm90ZTogd2UgY2FuJ3QgY2xvbmUgdGhlIGZvcm0tZGF0YSBvYmplY3Qgd2l0aG91dCBoYXZpbmcgaXQgYXMgYSBkZXBlbmRlbmN5XG5cdGlmIChib2R5IGluc3RhbmNlb2YgU3RyZWFtICYmIHR5cGVvZiBib2R5LmdldEJvdW5kYXJ5ICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gdGVlIGluc3RhbmNlIGJvZHlcblx0XHRwMSA9IG5ldyBQYXNzVGhyb3VnaCgpO1xuXHRcdHAyID0gbmV3IFBhc3NUaHJvdWdoKCk7XG5cdFx0Ym9keS5waXBlKHAxKTtcblx0XHRib2R5LnBpcGUocDIpO1xuXHRcdC8vIHNldCBpbnN0YW5jZSBib2R5IHRvIHRlZWQgYm9keSBhbmQgcmV0dXJuIHRoZSBvdGhlciB0ZWVkIGJvZHlcblx0XHRpbnN0YW5jZVtJTlRFUk5BTFNdLmJvZHkgPSBwMTtcblx0XHRib2R5ID0gcDI7XG5cdH1cblxuXHRyZXR1cm4gYm9keTtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyB0aGUgb3BlcmF0aW9uIFwiZXh0cmFjdCBhIGBDb250ZW50LVR5cGVgIHZhbHVlIGZyb20gfG9iamVjdHxcIiBhc1xuICogc3BlY2lmaWVkIGluIHRoZSBzcGVjaWZpY2F0aW9uOlxuICogaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtYm9keWluaXQtZXh0cmFjdFxuICpcbiAqIFRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGluc3RhbmNlLmJvZHkgaXMgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0gICBNaXhlZCAgaW5zdGFuY2UgIEFueSBvcHRpb25zLmJvZHkgaW5wdXRcbiAqL1xuZnVuY3Rpb24gZXh0cmFjdENvbnRlbnRUeXBlKGJvZHkpIHtcblx0aWYgKGJvZHkgPT09IG51bGwpIHtcblx0XHQvLyBib2R5IGlzIG51bGxcblx0XHRyZXR1cm4gbnVsbDtcblx0fSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcblx0XHQvLyBib2R5IGlzIHN0cmluZ1xuXHRcdHJldHVybiAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04Jztcblx0fSBlbHNlIGlmIChpc1VSTFNlYXJjaFBhcmFtcyhib2R5KSkge1xuXHRcdC8vIGJvZHkgaXMgYSBVUkxTZWFyY2hQYXJhbXNcblx0XHRyZXR1cm4gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04Jztcblx0fSBlbHNlIGlmIChpc0Jsb2IoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIGJsb2Jcblx0XHRyZXR1cm4gYm9keS50eXBlIHx8IG51bGw7XG5cdH0gZWxzZSBpZiAoQnVmZmVyLmlzQnVmZmVyKGJvZHkpKSB7XG5cdFx0Ly8gYm9keSBpcyBidWZmZXJcblx0XHRyZXR1cm4gbnVsbDtcblx0fSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYm9keSkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScpIHtcblx0XHQvLyBib2R5IGlzIEFycmF5QnVmZmVyXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0gZWxzZSBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGJvZHkpKSB7XG5cdFx0Ly8gYm9keSBpcyBBcnJheUJ1ZmZlclZpZXdcblx0XHRyZXR1cm4gbnVsbDtcblx0fSBlbHNlIGlmICh0eXBlb2YgYm9keS5nZXRCb3VuZGFyeSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdC8vIGRldGVjdCBmb3JtIGRhdGEgaW5wdXQgZnJvbSBmb3JtLWRhdGEgbW9kdWxlXG5cdFx0cmV0dXJuIGBtdWx0aXBhcnQvZm9ybS1kYXRhO2JvdW5kYXJ5PSR7Ym9keS5nZXRCb3VuZGFyeSgpfWA7XG5cdH0gZWxzZSBpZiAoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSkge1xuXHRcdC8vIGJvZHkgaXMgc3RyZWFtXG5cdFx0Ly8gY2FuJ3QgcmVhbGx5IGRvIG11Y2ggYWJvdXQgdGhpc1xuXHRcdHJldHVybiBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdC8vIEJvZHkgY29uc3RydWN0b3IgZGVmYXVsdHMgb3RoZXIgdGhpbmdzIHRvIHN0cmluZ1xuXHRcdHJldHVybiAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04Jztcblx0fVxufVxuXG4vKipcbiAqIFRoZSBGZXRjaCBTdGFuZGFyZCB0cmVhdHMgdGhpcyBhcyBpZiBcInRvdGFsIGJ5dGVzXCIgaXMgYSBwcm9wZXJ0eSBvbiB0aGUgYm9keS5cbiAqIEZvciB1cywgd2UgaGF2ZSB0byBleHBsaWNpdGx5IGdldCBpdCB3aXRoIGEgZnVuY3Rpb24uXG4gKlxuICogcmVmOiBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ib2R5LXRvdGFsLWJ5dGVzXG4gKlxuICogQHBhcmFtICAgQm9keSAgICBpbnN0YW5jZSAgIEluc3RhbmNlIG9mIEJvZHlcbiAqIEByZXR1cm4gIE51bWJlcj8gICAgICAgICAgICBOdW1iZXIgb2YgYnl0ZXMsIG9yIG51bGwgaWYgbm90IHBvc3NpYmxlXG4gKi9cbmZ1bmN0aW9uIGdldFRvdGFsQnl0ZXMoaW5zdGFuY2UpIHtcblx0Y29uc3QgYm9keSA9IGluc3RhbmNlLmJvZHk7XG5cblxuXHRpZiAoYm9keSA9PT0gbnVsbCkge1xuXHRcdC8vIGJvZHkgaXMgbnVsbFxuXHRcdHJldHVybiAwO1xuXHR9IGVsc2UgaWYgKGlzQmxvYihib2R5KSkge1xuXHRcdHJldHVybiBib2R5LnNpemU7XG5cdH0gZWxzZSBpZiAoQnVmZmVyLmlzQnVmZmVyKGJvZHkpKSB7XG5cdFx0Ly8gYm9keSBpcyBidWZmZXJcblx0XHRyZXR1cm4gYm9keS5sZW5ndGg7XG5cdH0gZWxzZSBpZiAoYm9keSAmJiB0eXBlb2YgYm9keS5nZXRMZW5ndGhTeW5jID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gZGV0ZWN0IGZvcm0gZGF0YSBpbnB1dCBmcm9tIGZvcm0tZGF0YSBtb2R1bGVcblx0XHRpZiAoYm9keS5fbGVuZ3RoUmV0cmlldmVycyAmJiBib2R5Ll9sZW5ndGhSZXRyaWV2ZXJzLmxlbmd0aCA9PSAwIHx8IC8vIDEueFxuXHRcdGJvZHkuaGFzS25vd25MZW5ndGggJiYgYm9keS5oYXNLbm93bkxlbmd0aCgpKSB7XG5cdFx0XHQvLyAyLnhcblx0XHRcdHJldHVybiBib2R5LmdldExlbmd0aFN5bmMoKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gYm9keSBpcyBzdHJlYW1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG4vKipcbiAqIFdyaXRlIGEgQm9keSB0byBhIE5vZGUuanMgV3JpdGFibGVTdHJlYW0gKGUuZy4gaHR0cC5SZXF1ZXN0KSBvYmplY3QuXG4gKlxuICogQHBhcmFtICAgQm9keSAgICBpbnN0YW5jZSAgIEluc3RhbmNlIG9mIEJvZHlcbiAqIEByZXR1cm4gIFZvaWRcbiAqL1xuZnVuY3Rpb24gd3JpdGVUb1N0cmVhbShkZXN0LCBpbnN0YW5jZSkge1xuXHRjb25zdCBib2R5ID0gaW5zdGFuY2UuYm9keTtcblxuXG5cdGlmIChib2R5ID09PSBudWxsKSB7XG5cdFx0Ly8gYm9keSBpcyBudWxsXG5cdFx0ZGVzdC5lbmQoKTtcblx0fSBlbHNlIGlmIChpc0Jsb2IoYm9keSkpIHtcblx0XHRib2R5LnN0cmVhbSgpLnBpcGUoZGVzdCk7XG5cdH0gZWxzZSBpZiAoQnVmZmVyLmlzQnVmZmVyKGJvZHkpKSB7XG5cdFx0Ly8gYm9keSBpcyBidWZmZXJcblx0XHRkZXN0LndyaXRlKGJvZHkpO1xuXHRcdGRlc3QuZW5kKCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gYm9keSBpcyBzdHJlYW1cblx0XHRib2R5LnBpcGUoZGVzdCk7XG5cdH1cbn1cblxuLy8gZXhwb3NlIFByb21pc2VcbkJvZHkuUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xuXG4vKipcbiAqIGhlYWRlcnMuanNcbiAqXG4gKiBIZWFkZXJzIGNsYXNzIG9mZmVycyBjb252ZW5pZW50IGhlbHBlcnNcbiAqL1xuXG5jb25zdCBpbnZhbGlkVG9rZW5SZWdleCA9IC9bXlxcXl9gYS16QS1aXFwtMC05ISMkJSYnKisufH5dLztcbmNvbnN0IGludmFsaWRIZWFkZXJDaGFyUmVnZXggPSAvW15cXHRcXHgyMC1cXHg3ZVxceDgwLVxceGZmXS87XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTmFtZShuYW1lKSB7XG5cdG5hbWUgPSBgJHtuYW1lfWA7XG5cdGlmIChpbnZhbGlkVG9rZW5SZWdleC50ZXN0KG5hbWUpIHx8IG5hbWUgPT09ICcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgJHtuYW1lfSBpcyBub3QgYSBsZWdhbCBIVFRQIGhlYWRlciBuYW1lYCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVWYWx1ZSh2YWx1ZSkge1xuXHR2YWx1ZSA9IGAke3ZhbHVlfWA7XG5cdGlmIChpbnZhbGlkSGVhZGVyQ2hhclJlZ2V4LnRlc3QodmFsdWUpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgJHt2YWx1ZX0gaXMgbm90IGEgbGVnYWwgSFRUUCBoZWFkZXIgdmFsdWVgKTtcblx0fVxufVxuXG4vKipcbiAqIEZpbmQgdGhlIGtleSBpbiB0aGUgbWFwIG9iamVjdCBnaXZlbiBhIGhlYWRlciBuYW1lLlxuICpcbiAqIFJldHVybnMgdW5kZWZpbmVkIGlmIG5vdCBmb3VuZC5cbiAqXG4gKiBAcGFyYW0gICBTdHJpbmcgIG5hbWUgIEhlYWRlciBuYW1lXG4gKiBAcmV0dXJuICBTdHJpbmd8VW5kZWZpbmVkXG4gKi9cbmZ1bmN0aW9uIGZpbmQobWFwLCBuYW1lKSB7XG5cdG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cdGZvciAoY29uc3Qga2V5IGluIG1hcCkge1xuXHRcdGlmIChrZXkudG9Mb3dlckNhc2UoKSA9PT0gbmFtZSkge1xuXHRcdFx0cmV0dXJuIGtleTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuY29uc3QgTUFQID0gU3ltYm9sKCdtYXAnKTtcbmNsYXNzIEhlYWRlcnMge1xuXHQvKipcbiAgKiBIZWFkZXJzIGNsYXNzXG4gICpcbiAgKiBAcGFyYW0gICBPYmplY3QgIGhlYWRlcnMgIFJlc3BvbnNlIGhlYWRlcnNcbiAgKiBAcmV0dXJuICBWb2lkXG4gICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBpbml0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQ7XG5cblx0XHR0aGlzW01BUF0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdFx0aWYgKGluaXQgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG5cdFx0XHRjb25zdCByYXdIZWFkZXJzID0gaW5pdC5yYXcoKTtcblx0XHRcdGNvbnN0IGhlYWRlck5hbWVzID0gT2JqZWN0LmtleXMocmF3SGVhZGVycyk7XG5cblx0XHRcdGZvciAoY29uc3QgaGVhZGVyTmFtZSBvZiBoZWFkZXJOYW1lcykge1xuXHRcdFx0XHRmb3IgKGNvbnN0IHZhbHVlIG9mIHJhd0hlYWRlcnNbaGVhZGVyTmFtZV0pIHtcblx0XHRcdFx0XHR0aGlzLmFwcGVuZChoZWFkZXJOYW1lLCB2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFdlIGRvbid0IHdvcnJ5IGFib3V0IGNvbnZlcnRpbmcgcHJvcCB0byBCeXRlU3RyaW5nIGhlcmUgYXMgYXBwZW5kKClcblx0XHQvLyB3aWxsIGhhbmRsZSBpdC5cblx0XHRpZiAoaW5pdCA9PSBudWxsKSA7IGVsc2UgaWYgKHR5cGVvZiBpbml0ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Y29uc3QgbWV0aG9kID0gaW5pdFtTeW1ib2wuaXRlcmF0b3JdO1xuXHRcdFx0aWYgKG1ldGhvZCAhPSBudWxsKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgbWV0aG9kICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignSGVhZGVyIHBhaXJzIG11c3QgYmUgaXRlcmFibGUnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIHNlcXVlbmNlPHNlcXVlbmNlPEJ5dGVTdHJpbmc+PlxuXHRcdFx0XHQvLyBOb3RlOiBwZXIgc3BlYyB3ZSBoYXZlIHRvIGZpcnN0IGV4aGF1c3QgdGhlIGxpc3RzIHRoZW4gcHJvY2VzcyB0aGVtXG5cdFx0XHRcdGNvbnN0IHBhaXJzID0gW107XG5cdFx0XHRcdGZvciAoY29uc3QgcGFpciBvZiBpbml0KSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBwYWlyICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFpcltTeW1ib2wuaXRlcmF0b3JdICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFYWNoIGhlYWRlciBwYWlyIG11c3QgYmUgaXRlcmFibGUnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cGFpcnMucHVzaChBcnJheS5mcm9tKHBhaXIpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuXHRcdFx0XHRcdGlmIChwYWlyLmxlbmd0aCAhPT0gMikge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRWFjaCBoZWFkZXIgcGFpciBtdXN0IGJlIGEgbmFtZS92YWx1ZSB0dXBsZScpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmFwcGVuZChwYWlyWzBdLCBwYWlyWzFdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gcmVjb3JkPEJ5dGVTdHJpbmcsIEJ5dGVTdHJpbmc+XG5cdFx0XHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGluaXQpKSB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSBpbml0W2tleV07XG5cdFx0XHRcdFx0dGhpcy5hcHBlbmQoa2V5LCB2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignUHJvdmlkZWQgaW5pdGlhbGl6ZXIgbXVzdCBiZSBhbiBvYmplY3QnKTtcblx0XHR9XG5cdH1cblxuXHQvKipcbiAgKiBSZXR1cm4gY29tYmluZWQgaGVhZGVyIHZhbHVlIGdpdmVuIG5hbWVcbiAgKlxuICAqIEBwYXJhbSAgIFN0cmluZyAgbmFtZSAgSGVhZGVyIG5hbWVcbiAgKiBAcmV0dXJuICBNaXhlZFxuICAqL1xuXHRnZXQobmFtZSkge1xuXHRcdG5hbWUgPSBgJHtuYW1lfWA7XG5cdFx0dmFsaWRhdGVOYW1lKG5hbWUpO1xuXHRcdGNvbnN0IGtleSA9IGZpbmQodGhpc1tNQVBdLCBuYW1lKTtcblx0XHRpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzW01BUF1ba2V5XS5qb2luKCcsICcpO1xuXHR9XG5cblx0LyoqXG4gICogSXRlcmF0ZSBvdmVyIGFsbCBoZWFkZXJzXG4gICpcbiAgKiBAcGFyYW0gICBGdW5jdGlvbiAgY2FsbGJhY2sgIEV4ZWN1dGVkIGZvciBlYWNoIGl0ZW0gd2l0aCBwYXJhbWV0ZXJzICh2YWx1ZSwgbmFtZSwgdGhpc0FyZylcbiAgKiBAcGFyYW0gICBCb29sZWFuICAgdGhpc0FyZyAgIGB0aGlzYCBjb250ZXh0IGZvciBjYWxsYmFjayBmdW5jdGlvblxuICAqIEByZXR1cm4gIFZvaWRcbiAgKi9cblx0Zm9yRWFjaChjYWxsYmFjaykge1xuXHRcdGxldCB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG5cblx0XHRsZXQgcGFpcnMgPSBnZXRIZWFkZXJzKHRoaXMpO1xuXHRcdGxldCBpID0gMDtcblx0XHR3aGlsZSAoaSA8IHBhaXJzLmxlbmd0aCkge1xuXHRcdFx0dmFyIF9wYWlycyRpID0gcGFpcnNbaV07XG5cdFx0XHRjb25zdCBuYW1lID0gX3BhaXJzJGlbMF0sXG5cdFx0XHQgICAgICB2YWx1ZSA9IF9wYWlycyRpWzFdO1xuXG5cdFx0XHRjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbHVlLCBuYW1lLCB0aGlzKTtcblx0XHRcdHBhaXJzID0gZ2V0SGVhZGVycyh0aGlzKTtcblx0XHRcdGkrKztcblx0XHR9XG5cdH1cblxuXHQvKipcbiAgKiBPdmVyd3JpdGUgaGVhZGVyIHZhbHVlcyBnaXZlbiBuYW1lXG4gICpcbiAgKiBAcGFyYW0gICBTdHJpbmcgIG5hbWUgICBIZWFkZXIgbmFtZVxuICAqIEBwYXJhbSAgIFN0cmluZyAgdmFsdWUgIEhlYWRlciB2YWx1ZVxuICAqIEByZXR1cm4gIFZvaWRcbiAgKi9cblx0c2V0KG5hbWUsIHZhbHVlKSB7XG5cdFx0bmFtZSA9IGAke25hbWV9YDtcblx0XHR2YWx1ZSA9IGAke3ZhbHVlfWA7XG5cdFx0dmFsaWRhdGVOYW1lKG5hbWUpO1xuXHRcdHZhbGlkYXRlVmFsdWUodmFsdWUpO1xuXHRcdGNvbnN0IGtleSA9IGZpbmQodGhpc1tNQVBdLCBuYW1lKTtcblx0XHR0aGlzW01BUF1ba2V5ICE9PSB1bmRlZmluZWQgPyBrZXkgOiBuYW1lXSA9IFt2YWx1ZV07XG5cdH1cblxuXHQvKipcbiAgKiBBcHBlbmQgYSB2YWx1ZSBvbnRvIGV4aXN0aW5nIGhlYWRlclxuICAqXG4gICogQHBhcmFtICAgU3RyaW5nICBuYW1lICAgSGVhZGVyIG5hbWVcbiAgKiBAcGFyYW0gICBTdHJpbmcgIHZhbHVlICBIZWFkZXIgdmFsdWVcbiAgKiBAcmV0dXJuICBWb2lkXG4gICovXG5cdGFwcGVuZChuYW1lLCB2YWx1ZSkge1xuXHRcdG5hbWUgPSBgJHtuYW1lfWA7XG5cdFx0dmFsdWUgPSBgJHt2YWx1ZX1gO1xuXHRcdHZhbGlkYXRlTmFtZShuYW1lKTtcblx0XHR2YWxpZGF0ZVZhbHVlKHZhbHVlKTtcblx0XHRjb25zdCBrZXkgPSBmaW5kKHRoaXNbTUFQXSwgbmFtZSk7XG5cdFx0aWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzW01BUF1ba2V5XS5wdXNoKHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpc1tNQVBdW25hbWVdID0gW3ZhbHVlXTtcblx0XHR9XG5cdH1cblxuXHQvKipcbiAgKiBDaGVjayBmb3IgaGVhZGVyIG5hbWUgZXhpc3RlbmNlXG4gICpcbiAgKiBAcGFyYW0gICBTdHJpbmcgICBuYW1lICBIZWFkZXIgbmFtZVxuICAqIEByZXR1cm4gIEJvb2xlYW5cbiAgKi9cblx0aGFzKG5hbWUpIHtcblx0XHRuYW1lID0gYCR7bmFtZX1gO1xuXHRcdHZhbGlkYXRlTmFtZShuYW1lKTtcblx0XHRyZXR1cm4gZmluZCh0aGlzW01BUF0sIG5hbWUpICE9PSB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKipcbiAgKiBEZWxldGUgYWxsIGhlYWRlciB2YWx1ZXMgZ2l2ZW4gbmFtZVxuICAqXG4gICogQHBhcmFtICAgU3RyaW5nICBuYW1lICBIZWFkZXIgbmFtZVxuICAqIEByZXR1cm4gIFZvaWRcbiAgKi9cblx0ZGVsZXRlKG5hbWUpIHtcblx0XHRuYW1lID0gYCR7bmFtZX1gO1xuXHRcdHZhbGlkYXRlTmFtZShuYW1lKTtcblx0XHRjb25zdCBrZXkgPSBmaW5kKHRoaXNbTUFQXSwgbmFtZSk7XG5cdFx0aWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRkZWxldGUgdGhpc1tNQVBdW2tleV07XG5cdFx0fVxuXHR9XG5cblx0LyoqXG4gICogUmV0dXJuIHJhdyBoZWFkZXJzIChub24tc3BlYyBhcGkpXG4gICpcbiAgKiBAcmV0dXJuICBPYmplY3RcbiAgKi9cblx0cmF3KCkge1xuXHRcdHJldHVybiB0aGlzW01BUF07XG5cdH1cblxuXHQvKipcbiAgKiBHZXQgYW4gaXRlcmF0b3Igb24ga2V5cy5cbiAgKlxuICAqIEByZXR1cm4gIEl0ZXJhdG9yXG4gICovXG5cdGtleXMoKSB7XG5cdFx0cmV0dXJuIGNyZWF0ZUhlYWRlcnNJdGVyYXRvcih0aGlzLCAna2V5Jyk7XG5cdH1cblxuXHQvKipcbiAgKiBHZXQgYW4gaXRlcmF0b3Igb24gdmFsdWVzLlxuICAqXG4gICogQHJldHVybiAgSXRlcmF0b3JcbiAgKi9cblx0dmFsdWVzKCkge1xuXHRcdHJldHVybiBjcmVhdGVIZWFkZXJzSXRlcmF0b3IodGhpcywgJ3ZhbHVlJyk7XG5cdH1cblxuXHQvKipcbiAgKiBHZXQgYW4gaXRlcmF0b3Igb24gZW50cmllcy5cbiAgKlxuICAqIFRoaXMgaXMgdGhlIGRlZmF1bHQgaXRlcmF0b3Igb2YgdGhlIEhlYWRlcnMgb2JqZWN0LlxuICAqXG4gICogQHJldHVybiAgSXRlcmF0b3JcbiAgKi9cblx0W1N5bWJvbC5pdGVyYXRvcl0oKSB7XG5cdFx0cmV0dXJuIGNyZWF0ZUhlYWRlcnNJdGVyYXRvcih0aGlzLCAna2V5K3ZhbHVlJyk7XG5cdH1cbn1cbkhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSGVhZGVycy5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuXHR2YWx1ZTogJ0hlYWRlcnMnLFxuXHR3cml0YWJsZTogZmFsc2UsXG5cdGVudW1lcmFibGU6IGZhbHNlLFxuXHRjb25maWd1cmFibGU6IHRydWVcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhIZWFkZXJzLnByb3RvdHlwZSwge1xuXHRnZXQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRmb3JFYWNoOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0c2V0OiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0YXBwZW5kOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0aGFzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0ZGVsZXRlOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0a2V5czogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHZhbHVlczogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGVudHJpZXM6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG59KTtcblxuZnVuY3Rpb24gZ2V0SGVhZGVycyhoZWFkZXJzKSB7XG5cdGxldCBraW5kID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAna2V5K3ZhbHVlJztcblxuXHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoaGVhZGVyc1tNQVBdKS5zb3J0KCk7XG5cdHJldHVybiBrZXlzLm1hcChraW5kID09PSAna2V5JyA/IGZ1bmN0aW9uIChrKSB7XG5cdFx0cmV0dXJuIGsudG9Mb3dlckNhc2UoKTtcblx0fSA6IGtpbmQgPT09ICd2YWx1ZScgPyBmdW5jdGlvbiAoaykge1xuXHRcdHJldHVybiBoZWFkZXJzW01BUF1ba10uam9pbignLCAnKTtcblx0fSA6IGZ1bmN0aW9uIChrKSB7XG5cdFx0cmV0dXJuIFtrLnRvTG93ZXJDYXNlKCksIGhlYWRlcnNbTUFQXVtrXS5qb2luKCcsICcpXTtcblx0fSk7XG59XG5cbmNvbnN0IElOVEVSTkFMID0gU3ltYm9sKCdpbnRlcm5hbCcpO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJzSXRlcmF0b3IodGFyZ2V0LCBraW5kKSB7XG5cdGNvbnN0IGl0ZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShIZWFkZXJzSXRlcmF0b3JQcm90b3R5cGUpO1xuXHRpdGVyYXRvcltJTlRFUk5BTF0gPSB7XG5cdFx0dGFyZ2V0LFxuXHRcdGtpbmQsXG5cdFx0aW5kZXg6IDBcblx0fTtcblx0cmV0dXJuIGl0ZXJhdG9yO1xufVxuXG5jb25zdCBIZWFkZXJzSXRlcmF0b3JQcm90b3R5cGUgPSBPYmplY3Quc2V0UHJvdG90eXBlT2Yoe1xuXHRuZXh0KCkge1xuXHRcdC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuXHRcdGlmICghdGhpcyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykgIT09IEhlYWRlcnNJdGVyYXRvclByb3RvdHlwZSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignVmFsdWUgb2YgYHRoaXNgIGlzIG5vdCBhIEhlYWRlcnNJdGVyYXRvcicpO1xuXHRcdH1cblxuXHRcdHZhciBfSU5URVJOQUwgPSB0aGlzW0lOVEVSTkFMXTtcblx0XHRjb25zdCB0YXJnZXQgPSBfSU5URVJOQUwudGFyZ2V0LFxuXHRcdCAgICAgIGtpbmQgPSBfSU5URVJOQUwua2luZCxcblx0XHQgICAgICBpbmRleCA9IF9JTlRFUk5BTC5pbmRleDtcblxuXHRcdGNvbnN0IHZhbHVlcyA9IGdldEhlYWRlcnModGFyZ2V0LCBraW5kKTtcblx0XHRjb25zdCBsZW4gPSB2YWx1ZXMubGVuZ3RoO1xuXHRcdGlmIChpbmRleCA+PSBsZW4pIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHZhbHVlOiB1bmRlZmluZWQsXG5cdFx0XHRcdGRvbmU6IHRydWVcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0dGhpc1tJTlRFUk5BTF0uaW5kZXggPSBpbmRleCArIDE7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IHZhbHVlc1tpbmRleF0sXG5cdFx0XHRkb25lOiBmYWxzZVxuXHRcdH07XG5cdH1cbn0sIE9iamVjdC5nZXRQcm90b3R5cGVPZihPYmplY3QuZ2V0UHJvdG90eXBlT2YoW11bU3ltYm9sLml0ZXJhdG9yXSgpKSkpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSGVhZGVyc0l0ZXJhdG9yUHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcblx0dmFsdWU6ICdIZWFkZXJzSXRlcmF0b3InLFxuXHR3cml0YWJsZTogZmFsc2UsXG5cdGVudW1lcmFibGU6IGZhbHNlLFxuXHRjb25maWd1cmFibGU6IHRydWVcbn0pO1xuXG4vKipcbiAqIEV4cG9ydCB0aGUgSGVhZGVycyBvYmplY3QgaW4gYSBmb3JtIHRoYXQgTm9kZS5qcyBjYW4gY29uc3VtZS5cbiAqXG4gKiBAcGFyYW0gICBIZWFkZXJzICBoZWFkZXJzXG4gKiBAcmV0dXJuICBPYmplY3RcbiAqL1xuZnVuY3Rpb24gZXhwb3J0Tm9kZUNvbXBhdGlibGVIZWFkZXJzKGhlYWRlcnMpIHtcblx0Y29uc3Qgb2JqID0gT2JqZWN0LmFzc2lnbih7IF9fcHJvdG9fXzogbnVsbCB9LCBoZWFkZXJzW01BUF0pO1xuXG5cdC8vIGh0dHAucmVxdWVzdCgpIG9ubHkgc3VwcG9ydHMgc3RyaW5nIGFzIEhvc3QgaGVhZGVyLiBUaGlzIGhhY2sgbWFrZXNcblx0Ly8gc3BlY2lmeWluZyBjdXN0b20gSG9zdCBoZWFkZXIgcG9zc2libGUuXG5cdGNvbnN0IGhvc3RIZWFkZXJLZXkgPSBmaW5kKGhlYWRlcnNbTUFQXSwgJ0hvc3QnKTtcblx0aWYgKGhvc3RIZWFkZXJLZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdG9ialtob3N0SGVhZGVyS2V5XSA9IG9ialtob3N0SGVhZGVyS2V5XVswXTtcblx0fVxuXG5cdHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgSGVhZGVycyBvYmplY3QgZnJvbSBhbiBvYmplY3Qgb2YgaGVhZGVycywgaWdub3JpbmcgdGhvc2UgdGhhdCBkb1xuICogbm90IGNvbmZvcm0gdG8gSFRUUCBncmFtbWFyIHByb2R1Y3Rpb25zLlxuICpcbiAqIEBwYXJhbSAgIE9iamVjdCAgb2JqICBPYmplY3Qgb2YgaGVhZGVyc1xuICogQHJldHVybiAgSGVhZGVyc1xuICovXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJzTGVuaWVudChvYmopIHtcblx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdGZvciAoY29uc3QgbmFtZSBvZiBPYmplY3Qua2V5cyhvYmopKSB7XG5cdFx0aWYgKGludmFsaWRUb2tlblJlZ2V4LnRlc3QobmFtZSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAoQXJyYXkuaXNBcnJheShvYmpbbmFtZV0pKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHZhbCBvZiBvYmpbbmFtZV0pIHtcblx0XHRcdFx0aWYgKGludmFsaWRIZWFkZXJDaGFyUmVnZXgudGVzdCh2YWwpKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGhlYWRlcnNbTUFQXVtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0aGVhZGVyc1tNQVBdW25hbWVdID0gW3ZhbF07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aGVhZGVyc1tNQVBdW25hbWVdLnB1c2godmFsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoIWludmFsaWRIZWFkZXJDaGFyUmVnZXgudGVzdChvYmpbbmFtZV0pKSB7XG5cdFx0XHRoZWFkZXJzW01BUF1bbmFtZV0gPSBbb2JqW25hbWVdXTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGhlYWRlcnM7XG59XG5cbmNvbnN0IElOVEVSTkFMUyQxID0gU3ltYm9sKCdSZXNwb25zZSBpbnRlcm5hbHMnKTtcblxuLy8gZml4IGFuIGlzc3VlIHdoZXJlIFwiU1RBVFVTX0NPREVTXCIgYXJlbid0IGEgbmFtZWQgZXhwb3J0IGZvciBub2RlIDwxMFxuY29uc3QgU1RBVFVTX0NPREVTID0gaHR0cC5TVEFUVVNfQ09ERVM7XG5cbi8qKlxuICogUmVzcG9uc2UgY2xhc3NcbiAqXG4gKiBAcGFyYW0gICBTdHJlYW0gIGJvZHkgIFJlYWRhYmxlIHN0cmVhbVxuICogQHBhcmFtICAgT2JqZWN0ICBvcHRzICBSZXNwb25zZSBvcHRpb25zXG4gKiBAcmV0dXJuICBWb2lkXG4gKi9cbmNsYXNzIFJlc3BvbnNlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IGJvZHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG5cdFx0bGV0IG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG5cdFx0Qm9keS5jYWxsKHRoaXMsIGJvZHksIG9wdHMpO1xuXG5cdFx0Y29uc3Qgc3RhdHVzID0gb3B0cy5zdGF0dXMgfHwgMjAwO1xuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRzLmhlYWRlcnMpO1xuXG5cdFx0aWYgKGJvZHkgIT0gbnVsbCAmJiAhaGVhZGVycy5oYXMoJ0NvbnRlbnQtVHlwZScpKSB7XG5cdFx0XHRjb25zdCBjb250ZW50VHlwZSA9IGV4dHJhY3RDb250ZW50VHlwZShib2R5KTtcblx0XHRcdGlmIChjb250ZW50VHlwZSkge1xuXHRcdFx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgY29udGVudFR5cGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXNbSU5URVJOQUxTJDFdID0ge1xuXHRcdFx0dXJsOiBvcHRzLnVybCxcblx0XHRcdHN0YXR1cyxcblx0XHRcdHN0YXR1c1RleHQ6IG9wdHMuc3RhdHVzVGV4dCB8fCBTVEFUVVNfQ09ERVNbc3RhdHVzXSxcblx0XHRcdGhlYWRlcnMsXG5cdFx0XHRjb3VudGVyOiBvcHRzLmNvdW50ZXJcblx0XHR9O1xuXHR9XG5cblx0Z2V0IHVybCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMV0udXJsIHx8ICcnO1xuXHR9XG5cblx0Z2V0IHN0YXR1cygpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMV0uc3RhdHVzO1xuXHR9XG5cblx0LyoqXG4gICogQ29udmVuaWVuY2UgcHJvcGVydHkgcmVwcmVzZW50aW5nIGlmIHRoZSByZXF1ZXN0IGVuZGVkIG5vcm1hbGx5XG4gICovXG5cdGdldCBvaygpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMV0uc3RhdHVzID49IDIwMCAmJiB0aGlzW0lOVEVSTkFMUyQxXS5zdGF0dXMgPCAzMDA7XG5cdH1cblxuXHRnZXQgcmVkaXJlY3RlZCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMV0uY291bnRlciA+IDA7XG5cdH1cblxuXHRnZXQgc3RhdHVzVGV4dCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMV0uc3RhdHVzVGV4dDtcblx0fVxuXG5cdGdldCBoZWFkZXJzKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS5oZWFkZXJzO1xuXHR9XG5cblx0LyoqXG4gICogQ2xvbmUgdGhpcyByZXNwb25zZVxuICAqXG4gICogQHJldHVybiAgUmVzcG9uc2VcbiAgKi9cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyBSZXNwb25zZShjbG9uZSh0aGlzKSwge1xuXHRcdFx0dXJsOiB0aGlzLnVybCxcblx0XHRcdHN0YXR1czogdGhpcy5zdGF0dXMsXG5cdFx0XHRzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG5cdFx0XHRoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG5cdFx0XHRvazogdGhpcy5vayxcblx0XHRcdHJlZGlyZWN0ZWQ6IHRoaXMucmVkaXJlY3RlZFxuXHRcdH0pO1xuXHR9XG59XG5cbkJvZHkubWl4SW4oUmVzcG9uc2UucHJvdG90eXBlKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUmVzcG9uc2UucHJvdG90eXBlLCB7XG5cdHVybDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHN0YXR1czogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdG9rOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0cmVkaXJlY3RlZDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHN0YXR1c1RleHQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRoZWFkZXJzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0Y2xvbmU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlc3BvbnNlLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG5cdHZhbHVlOiAnUmVzcG9uc2UnLFxuXHR3cml0YWJsZTogZmFsc2UsXG5cdGVudW1lcmFibGU6IGZhbHNlLFxuXHRjb25maWd1cmFibGU6IHRydWVcbn0pO1xuXG5jb25zdCBJTlRFUk5BTFMkMiA9IFN5bWJvbCgnUmVxdWVzdCBpbnRlcm5hbHMnKTtcblxuLy8gZml4IGFuIGlzc3VlIHdoZXJlIFwiZm9ybWF0XCIsIFwicGFyc2VcIiBhcmVuJ3QgYSBuYW1lZCBleHBvcnQgZm9yIG5vZGUgPDEwXG5jb25zdCBwYXJzZV91cmwgPSBVcmwucGFyc2U7XG5jb25zdCBmb3JtYXRfdXJsID0gVXJsLmZvcm1hdDtcblxuY29uc3Qgc3RyZWFtRGVzdHJ1Y3Rpb25TdXBwb3J0ZWQgPSAnZGVzdHJveScgaW4gU3RyZWFtLlJlYWRhYmxlLnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIFJlcXVlc3QuXG4gKlxuICogQHBhcmFtICAgTWl4ZWQgICBpbnB1dFxuICogQHJldHVybiAgQm9vbGVhblxuICovXG5mdW5jdGlvbiBpc1JlcXVlc3QoaW5wdXQpIHtcblx0cmV0dXJuIHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGlucHV0W0lOVEVSTkFMUyQyXSA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzQWJvcnRTaWduYWwoc2lnbmFsKSB7XG5cdGNvbnN0IHByb3RvID0gc2lnbmFsICYmIHR5cGVvZiBzaWduYWwgPT09ICdvYmplY3QnICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihzaWduYWwpO1xuXHRyZXR1cm4gISEocHJvdG8gJiYgcHJvdG8uY29uc3RydWN0b3IubmFtZSA9PT0gJ0Fib3J0U2lnbmFsJyk7XG59XG5cbi8qKlxuICogUmVxdWVzdCBjbGFzc1xuICpcbiAqIEBwYXJhbSAgIE1peGVkICAgaW5wdXQgIFVybCBvciBSZXF1ZXN0IGluc3RhbmNlXG4gKiBAcGFyYW0gICBPYmplY3QgIGluaXQgICBDdXN0b20gb3B0aW9uc1xuICogQHJldHVybiAgVm9pZFxuICovXG5jbGFzcyBSZXF1ZXN0IHtcblx0Y29uc3RydWN0b3IoaW5wdXQpIHtcblx0XHRsZXQgaW5pdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cblx0XHRsZXQgcGFyc2VkVVJMO1xuXG5cdFx0Ly8gbm9ybWFsaXplIGlucHV0XG5cdFx0aWYgKCFpc1JlcXVlc3QoaW5wdXQpKSB7XG5cdFx0XHRpZiAoaW5wdXQgJiYgaW5wdXQuaHJlZikge1xuXHRcdFx0XHQvLyBpbiBvcmRlciB0byBzdXBwb3J0IE5vZGUuanMnIFVybCBvYmplY3RzOyB0aG91Z2ggV0hBVFdHJ3MgVVJMIG9iamVjdHNcblx0XHRcdFx0Ly8gd2lsbCBmYWxsIGludG8gdGhpcyBicmFuY2ggYWxzbyAoc2luY2UgdGhlaXIgYHRvU3RyaW5nKClgIHdpbGwgcmV0dXJuXG5cdFx0XHRcdC8vIGBocmVmYCBwcm9wZXJ0eSBhbnl3YXkpXG5cdFx0XHRcdHBhcnNlZFVSTCA9IHBhcnNlX3VybChpbnB1dC5ocmVmKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGNvZXJjZSBpbnB1dCB0byBhIHN0cmluZyBiZWZvcmUgYXR0ZW1wdGluZyB0byBwYXJzZVxuXHRcdFx0XHRwYXJzZWRVUkwgPSBwYXJzZV91cmwoYCR7aW5wdXR9YCk7XG5cdFx0XHR9XG5cdFx0XHRpbnB1dCA9IHt9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwYXJzZWRVUkwgPSBwYXJzZV91cmwoaW5wdXQudXJsKTtcblx0XHR9XG5cblx0XHRsZXQgbWV0aG9kID0gaW5pdC5tZXRob2QgfHwgaW5wdXQubWV0aG9kIHx8ICdHRVQnO1xuXHRcdG1ldGhvZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuXG5cdFx0aWYgKChpbml0LmJvZHkgIT0gbnVsbCB8fCBpc1JlcXVlc3QoaW5wdXQpICYmIGlucHV0LmJvZHkgIT09IG51bGwpICYmIChtZXRob2QgPT09ICdHRVQnIHx8IG1ldGhvZCA9PT0gJ0hFQUQnKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignUmVxdWVzdCB3aXRoIEdFVC9IRUFEIG1ldGhvZCBjYW5ub3QgaGF2ZSBib2R5Jyk7XG5cdFx0fVxuXG5cdFx0bGV0IGlucHV0Qm9keSA9IGluaXQuYm9keSAhPSBudWxsID8gaW5pdC5ib2R5IDogaXNSZXF1ZXN0KGlucHV0KSAmJiBpbnB1dC5ib2R5ICE9PSBudWxsID8gY2xvbmUoaW5wdXQpIDogbnVsbDtcblxuXHRcdEJvZHkuY2FsbCh0aGlzLCBpbnB1dEJvZHksIHtcblx0XHRcdHRpbWVvdXQ6IGluaXQudGltZW91dCB8fCBpbnB1dC50aW1lb3V0IHx8IDAsXG5cdFx0XHRzaXplOiBpbml0LnNpemUgfHwgaW5wdXQuc2l6ZSB8fCAwXG5cdFx0fSk7XG5cblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5pdC5oZWFkZXJzIHx8IGlucHV0LmhlYWRlcnMgfHwge30pO1xuXG5cdFx0aWYgKGlucHV0Qm9keSAhPSBudWxsICYmICFoZWFkZXJzLmhhcygnQ29udGVudC1UeXBlJykpIHtcblx0XHRcdGNvbnN0IGNvbnRlbnRUeXBlID0gZXh0cmFjdENvbnRlbnRUeXBlKGlucHV0Qm9keSk7XG5cdFx0XHRpZiAoY29udGVudFR5cGUpIHtcblx0XHRcdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsIGNvbnRlbnRUeXBlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgc2lnbmFsID0gaXNSZXF1ZXN0KGlucHV0KSA/IGlucHV0LnNpZ25hbCA6IG51bGw7XG5cdFx0aWYgKCdzaWduYWwnIGluIGluaXQpIHNpZ25hbCA9IGluaXQuc2lnbmFsO1xuXG5cdFx0aWYgKHNpZ25hbCAhPSBudWxsICYmICFpc0Fib3J0U2lnbmFsKHNpZ25hbCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHNpZ25hbCB0byBiZSBhbiBpbnN0YW5jZW9mIEFib3J0U2lnbmFsJyk7XG5cdFx0fVxuXG5cdFx0dGhpc1tJTlRFUk5BTFMkMl0gPSB7XG5cdFx0XHRtZXRob2QsXG5cdFx0XHRyZWRpcmVjdDogaW5pdC5yZWRpcmVjdCB8fCBpbnB1dC5yZWRpcmVjdCB8fCAnZm9sbG93Jyxcblx0XHRcdGhlYWRlcnMsXG5cdFx0XHRwYXJzZWRVUkwsXG5cdFx0XHRzaWduYWxcblx0XHR9O1xuXG5cdFx0Ly8gbm9kZS1mZXRjaC1vbmx5IG9wdGlvbnNcblx0XHR0aGlzLmZvbGxvdyA9IGluaXQuZm9sbG93ICE9PSB1bmRlZmluZWQgPyBpbml0LmZvbGxvdyA6IGlucHV0LmZvbGxvdyAhPT0gdW5kZWZpbmVkID8gaW5wdXQuZm9sbG93IDogMjA7XG5cdFx0dGhpcy5jb21wcmVzcyA9IGluaXQuY29tcHJlc3MgIT09IHVuZGVmaW5lZCA/IGluaXQuY29tcHJlc3MgOiBpbnB1dC5jb21wcmVzcyAhPT0gdW5kZWZpbmVkID8gaW5wdXQuY29tcHJlc3MgOiB0cnVlO1xuXHRcdHRoaXMuY291bnRlciA9IGluaXQuY291bnRlciB8fCBpbnB1dC5jb3VudGVyIHx8IDA7XG5cdFx0dGhpcy5hZ2VudCA9IGluaXQuYWdlbnQgfHwgaW5wdXQuYWdlbnQ7XG5cdH1cblxuXHRnZXQgbWV0aG9kKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQyXS5tZXRob2Q7XG5cdH1cblxuXHRnZXQgdXJsKCkge1xuXHRcdHJldHVybiBmb3JtYXRfdXJsKHRoaXNbSU5URVJOQUxTJDJdLnBhcnNlZFVSTCk7XG5cdH1cblxuXHRnZXQgaGVhZGVycygpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMl0uaGVhZGVycztcblx0fVxuXG5cdGdldCByZWRpcmVjdCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMl0ucmVkaXJlY3Q7XG5cdH1cblxuXHRnZXQgc2lnbmFsKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQyXS5zaWduYWw7XG5cdH1cblxuXHQvKipcbiAgKiBDbG9uZSB0aGlzIHJlcXVlc3RcbiAgKlxuICAqIEByZXR1cm4gIFJlcXVlc3RcbiAgKi9cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMpO1xuXHR9XG59XG5cbkJvZHkubWl4SW4oUmVxdWVzdC5wcm90b3R5cGUpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVxdWVzdC5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuXHR2YWx1ZTogJ1JlcXVlc3QnLFxuXHR3cml0YWJsZTogZmFsc2UsXG5cdGVudW1lcmFibGU6IGZhbHNlLFxuXHRjb25maWd1cmFibGU6IHRydWVcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhSZXF1ZXN0LnByb3RvdHlwZSwge1xuXHRtZXRob2Q6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHR1cmw6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRoZWFkZXJzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0cmVkaXJlY3Q6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRjbG9uZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHNpZ25hbDogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xuXG4vKipcbiAqIENvbnZlcnQgYSBSZXF1ZXN0IHRvIE5vZGUuanMgaHR0cCByZXF1ZXN0IG9wdGlvbnMuXG4gKlxuICogQHBhcmFtICAgUmVxdWVzdCAgQSBSZXF1ZXN0IGluc3RhbmNlXG4gKiBAcmV0dXJuICBPYmplY3QgICBUaGUgb3B0aW9ucyBvYmplY3QgdG8gYmUgcGFzc2VkIHRvIGh0dHAucmVxdWVzdFxuICovXG5mdW5jdGlvbiBnZXROb2RlUmVxdWVzdE9wdGlvbnMocmVxdWVzdCkge1xuXHRjb25zdCBwYXJzZWRVUkwgPSByZXF1ZXN0W0lOVEVSTkFMUyQyXS5wYXJzZWRVUkw7XG5cdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhyZXF1ZXN0W0lOVEVSTkFMUyQyXS5oZWFkZXJzKTtcblxuXHQvLyBmZXRjaCBzdGVwIDEuM1xuXHRpZiAoIWhlYWRlcnMuaGFzKCdBY2NlcHQnKSkge1xuXHRcdGhlYWRlcnMuc2V0KCdBY2NlcHQnLCAnKi8qJyk7XG5cdH1cblxuXHQvLyBCYXNpYyBmZXRjaFxuXHRpZiAoIXBhcnNlZFVSTC5wcm90b2NvbCB8fCAhcGFyc2VkVVJMLmhvc3RuYW1lKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT25seSBhYnNvbHV0ZSBVUkxzIGFyZSBzdXBwb3J0ZWQnKTtcblx0fVxuXG5cdGlmICghL15odHRwcz86JC8udGVzdChwYXJzZWRVUkwucHJvdG9jb2wpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT25seSBIVFRQKFMpIHByb3RvY29scyBhcmUgc3VwcG9ydGVkJyk7XG5cdH1cblxuXHRpZiAocmVxdWVzdC5zaWduYWwgJiYgcmVxdWVzdC5ib2R5IGluc3RhbmNlb2YgU3RyZWFtLlJlYWRhYmxlICYmICFzdHJlYW1EZXN0cnVjdGlvblN1cHBvcnRlZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignQ2FuY2VsbGF0aW9uIG9mIHN0cmVhbWVkIHJlcXVlc3RzIHdpdGggQWJvcnRTaWduYWwgaXMgbm90IHN1cHBvcnRlZCBpbiBub2RlIDwgOCcpO1xuXHR9XG5cblx0Ly8gSFRUUC1uZXR3b3JrLW9yLWNhY2hlIGZldGNoIHN0ZXBzIDIuNC0yLjdcblx0bGV0IGNvbnRlbnRMZW5ndGhWYWx1ZSA9IG51bGw7XG5cdGlmIChyZXF1ZXN0LmJvZHkgPT0gbnVsbCAmJiAvXihQT1NUfFBVVCkkL2kudGVzdChyZXF1ZXN0Lm1ldGhvZCkpIHtcblx0XHRjb250ZW50TGVuZ3RoVmFsdWUgPSAnMCc7XG5cdH1cblx0aWYgKHJlcXVlc3QuYm9keSAhPSBudWxsKSB7XG5cdFx0Y29uc3QgdG90YWxCeXRlcyA9IGdldFRvdGFsQnl0ZXMocmVxdWVzdCk7XG5cdFx0aWYgKHR5cGVvZiB0b3RhbEJ5dGVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0Y29udGVudExlbmd0aFZhbHVlID0gU3RyaW5nKHRvdGFsQnl0ZXMpO1xuXHRcdH1cblx0fVxuXHRpZiAoY29udGVudExlbmd0aFZhbHVlKSB7XG5cdFx0aGVhZGVycy5zZXQoJ0NvbnRlbnQtTGVuZ3RoJywgY29udGVudExlbmd0aFZhbHVlKTtcblx0fVxuXG5cdC8vIEhUVFAtbmV0d29yay1vci1jYWNoZSBmZXRjaCBzdGVwIDIuMTFcblx0aWYgKCFoZWFkZXJzLmhhcygnVXNlci1BZ2VudCcpKSB7XG5cdFx0aGVhZGVycy5zZXQoJ1VzZXItQWdlbnQnLCAnbm9kZS1mZXRjaC8xLjAgKCtodHRwczovL2dpdGh1Yi5jb20vYml0aW5uL25vZGUtZmV0Y2gpJyk7XG5cdH1cblxuXHQvLyBIVFRQLW5ldHdvcmstb3ItY2FjaGUgZmV0Y2ggc3RlcCAyLjE1XG5cdGlmIChyZXF1ZXN0LmNvbXByZXNzICYmICFoZWFkZXJzLmhhcygnQWNjZXB0LUVuY29kaW5nJykpIHtcblx0XHRoZWFkZXJzLnNldCgnQWNjZXB0LUVuY29kaW5nJywgJ2d6aXAsZGVmbGF0ZScpO1xuXHR9XG5cblx0bGV0IGFnZW50ID0gcmVxdWVzdC5hZ2VudDtcblx0aWYgKHR5cGVvZiBhZ2VudCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGFnZW50ID0gYWdlbnQocGFyc2VkVVJMKTtcblx0fVxuXG5cdGlmICghaGVhZGVycy5oYXMoJ0Nvbm5lY3Rpb24nKSAmJiAhYWdlbnQpIHtcblx0XHRoZWFkZXJzLnNldCgnQ29ubmVjdGlvbicsICdjbG9zZScpO1xuXHR9XG5cblx0Ly8gSFRUUC1uZXR3b3JrIGZldGNoIHN0ZXAgNC4yXG5cdC8vIGNodW5rZWQgZW5jb2RpbmcgaXMgaGFuZGxlZCBieSBOb2RlLmpzXG5cblx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZFVSTCwge1xuXHRcdG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG5cdFx0aGVhZGVyczogZXhwb3J0Tm9kZUNvbXBhdGlibGVIZWFkZXJzKGhlYWRlcnMpLFxuXHRcdGFnZW50XG5cdH0pO1xufVxuXG4vKipcbiAqIGFib3J0LWVycm9yLmpzXG4gKlxuICogQWJvcnRFcnJvciBpbnRlcmZhY2UgZm9yIGNhbmNlbGxlZCByZXF1ZXN0c1xuICovXG5cbi8qKlxuICogQ3JlYXRlIEFib3J0RXJyb3IgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0gICBTdHJpbmcgICAgICBtZXNzYWdlICAgICAgRXJyb3IgbWVzc2FnZSBmb3IgaHVtYW5cbiAqIEByZXR1cm4gIEFib3J0RXJyb3JcbiAqL1xuZnVuY3Rpb24gQWJvcnRFcnJvcihtZXNzYWdlKSB7XG4gIEVycm9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cbiAgdGhpcy50eXBlID0gJ2Fib3J0ZWQnO1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXG4gIC8vIGhpZGUgY3VzdG9tIGVycm9yIGltcGxlbWVudGF0aW9uIGRldGFpbHMgZnJvbSBlbmQtdXNlcnNcbiAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG59XG5cbkFib3J0RXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuQWJvcnRFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBYm9ydEVycm9yO1xuQWJvcnRFcnJvci5wcm90b3R5cGUubmFtZSA9ICdBYm9ydEVycm9yJztcblxuLy8gZml4IGFuIGlzc3VlIHdoZXJlIFwiUGFzc1Rocm91Z2hcIiwgXCJyZXNvbHZlXCIgYXJlbid0IGEgbmFtZWQgZXhwb3J0IGZvciBub2RlIDwxMFxuY29uc3QgUGFzc1Rocm91Z2gkMSA9IFN0cmVhbS5QYXNzVGhyb3VnaDtcbmNvbnN0IHJlc29sdmVfdXJsID0gVXJsLnJlc29sdmU7XG5cbi8qKlxuICogRmV0Y2ggZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0gICBNaXhlZCAgICB1cmwgICBBYnNvbHV0ZSB1cmwgb3IgUmVxdWVzdCBpbnN0YW5jZVxuICogQHBhcmFtICAgT2JqZWN0ICAgb3B0cyAgRmV0Y2ggb3B0aW9uc1xuICogQHJldHVybiAgUHJvbWlzZVxuICovXG5mdW5jdGlvbiBmZXRjaCh1cmwsIG9wdHMpIHtcblxuXHQvLyBhbGxvdyBjdXN0b20gcHJvbWlzZVxuXHRpZiAoIWZldGNoLlByb21pc2UpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ25hdGl2ZSBwcm9taXNlIG1pc3NpbmcsIHNldCBmZXRjaC5Qcm9taXNlIHRvIHlvdXIgZmF2b3JpdGUgYWx0ZXJuYXRpdmUnKTtcblx0fVxuXG5cdEJvZHkuUHJvbWlzZSA9IGZldGNoLlByb21pc2U7XG5cblx0Ly8gd3JhcCBodHRwLnJlcXVlc3QgaW50byBmZXRjaFxuXHRyZXR1cm4gbmV3IGZldGNoLlByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdC8vIGJ1aWxkIHJlcXVlc3Qgb2JqZWN0XG5cdFx0Y29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCwgb3B0cyk7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IGdldE5vZGVSZXF1ZXN0T3B0aW9ucyhyZXF1ZXN0KTtcblxuXHRcdGNvbnN0IHNlbmQgPSAob3B0aW9ucy5wcm90b2NvbCA9PT0gJ2h0dHBzOicgPyBodHRwcyA6IGh0dHApLnJlcXVlc3Q7XG5cdFx0Y29uc3Qgc2lnbmFsID0gcmVxdWVzdC5zaWduYWw7XG5cblx0XHRsZXQgcmVzcG9uc2UgPSBudWxsO1xuXG5cdFx0Y29uc3QgYWJvcnQgPSBmdW5jdGlvbiBhYm9ydCgpIHtcblx0XHRcdGxldCBlcnJvciA9IG5ldyBBYm9ydEVycm9yKCdUaGUgdXNlciBhYm9ydGVkIGEgcmVxdWVzdC4nKTtcblx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRpZiAocmVxdWVzdC5ib2R5ICYmIHJlcXVlc3QuYm9keSBpbnN0YW5jZW9mIFN0cmVhbS5SZWFkYWJsZSkge1xuXHRcdFx0XHRyZXF1ZXN0LmJvZHkuZGVzdHJveShlcnJvcik7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5ib2R5KSByZXR1cm47XG5cdFx0XHRyZXNwb25zZS5ib2R5LmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuXHRcdH07XG5cblx0XHRpZiAoc2lnbmFsICYmIHNpZ25hbC5hYm9ydGVkKSB7XG5cdFx0XHRhYm9ydCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGFib3J0QW5kRmluYWxpemUgPSBmdW5jdGlvbiBhYm9ydEFuZEZpbmFsaXplKCkge1xuXHRcdFx0YWJvcnQoKTtcblx0XHRcdGZpbmFsaXplKCk7XG5cdFx0fTtcblxuXHRcdC8vIHNlbmQgcmVxdWVzdFxuXHRcdGNvbnN0IHJlcSA9IHNlbmQob3B0aW9ucyk7XG5cdFx0bGV0IHJlcVRpbWVvdXQ7XG5cblx0XHRpZiAoc2lnbmFsKSB7XG5cdFx0XHRzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydEFuZEZpbmFsaXplKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBmaW5hbGl6ZSgpIHtcblx0XHRcdHJlcS5hYm9ydCgpO1xuXHRcdFx0aWYgKHNpZ25hbCkgc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRBbmRGaW5hbGl6ZSk7XG5cdFx0XHRjbGVhclRpbWVvdXQocmVxVGltZW91dCk7XG5cdFx0fVxuXG5cdFx0aWYgKHJlcXVlc3QudGltZW91dCkge1xuXHRcdFx0cmVxLm9uY2UoJ3NvY2tldCcsIGZ1bmN0aW9uIChzb2NrZXQpIHtcblx0XHRcdFx0cmVxVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgbmV0d29yayB0aW1lb3V0IGF0OiAke3JlcXVlc3QudXJsfWAsICdyZXF1ZXN0LXRpbWVvdXQnKSk7XG5cdFx0XHRcdFx0ZmluYWxpemUoKTtcblx0XHRcdFx0fSwgcmVxdWVzdC50aW1lb3V0KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJlcS5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYHJlcXVlc3QgdG8gJHtyZXF1ZXN0LnVybH0gZmFpbGVkLCByZWFzb246ICR7ZXJyLm1lc3NhZ2V9YCwgJ3N5c3RlbScsIGVycikpO1xuXHRcdFx0ZmluYWxpemUoKTtcblx0XHR9KTtcblxuXHRcdHJlcS5vbigncmVzcG9uc2UnLCBmdW5jdGlvbiAocmVzKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQocmVxVGltZW91dCk7XG5cblx0XHRcdGNvbnN0IGhlYWRlcnMgPSBjcmVhdGVIZWFkZXJzTGVuaWVudChyZXMuaGVhZGVycyk7XG5cblx0XHRcdC8vIEhUVFAgZmV0Y2ggc3RlcCA1XG5cdFx0XHRpZiAoZmV0Y2guaXNSZWRpcmVjdChyZXMuc3RhdHVzQ29kZSkpIHtcblx0XHRcdFx0Ly8gSFRUUCBmZXRjaCBzdGVwIDUuMlxuXHRcdFx0XHRjb25zdCBsb2NhdGlvbiA9IGhlYWRlcnMuZ2V0KCdMb2NhdGlvbicpO1xuXG5cdFx0XHRcdC8vIEhUVFAgZmV0Y2ggc3RlcCA1LjNcblx0XHRcdFx0Y29uc3QgbG9jYXRpb25VUkwgPSBsb2NhdGlvbiA9PT0gbnVsbCA/IG51bGwgOiByZXNvbHZlX3VybChyZXF1ZXN0LnVybCwgbG9jYXRpb24pO1xuXG5cdFx0XHRcdC8vIEhUVFAgZmV0Y2ggc3RlcCA1LjVcblx0XHRcdFx0c3dpdGNoIChyZXF1ZXN0LnJlZGlyZWN0KSB7XG5cdFx0XHRcdFx0Y2FzZSAnZXJyb3InOlxuXHRcdFx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGByZWRpcmVjdCBtb2RlIGlzIHNldCB0byBlcnJvcjogJHtyZXF1ZXN0LnVybH1gLCAnbm8tcmVkaXJlY3QnKSk7XG5cdFx0XHRcdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdGNhc2UgJ21hbnVhbCc6XG5cdFx0XHRcdFx0XHQvLyBub2RlLWZldGNoLXNwZWNpZmljIHN0ZXA6IG1ha2UgbWFudWFsIHJlZGlyZWN0IGEgYml0IGVhc2llciB0byB1c2UgYnkgc2V0dGluZyB0aGUgTG9jYXRpb24gaGVhZGVyIHZhbHVlIHRvIHRoZSByZXNvbHZlZCBVUkwuXG5cdFx0XHRcdFx0XHRpZiAobG9jYXRpb25VUkwgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0Ly8gaGFuZGxlIGNvcnJ1cHRlZCBoZWFkZXJcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRoZWFkZXJzLnNldCgnTG9jYXRpb24nLCBsb2NhdGlvblVSTCk7XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBub2RlanMgc2VydmVyIHByZXZlbnQgaW52YWxpZCByZXNwb25zZSBoZWFkZXJzLCB3ZSBjYW4ndCB0ZXN0IHRoaXMgdGhyb3VnaCBub3JtYWwgcmVxdWVzdFxuXHRcdFx0XHRcdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdmb2xsb3cnOlxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDJcblx0XHRcdFx0XHRcdGlmIChsb2NhdGlvblVSTCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDVcblx0XHRcdFx0XHRcdGlmIChyZXF1ZXN0LmNvdW50ZXIgPj0gcmVxdWVzdC5mb2xsb3cpIHtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBtYXhpbXVtIHJlZGlyZWN0IHJlYWNoZWQgYXQ6ICR7cmVxdWVzdC51cmx9YCwgJ21heC1yZWRpcmVjdCcpKTtcblx0XHRcdFx0XHRcdFx0ZmluYWxpemUoKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgNiAoY291bnRlciBpbmNyZW1lbnQpXG5cdFx0XHRcdFx0XHQvLyBDcmVhdGUgYSBuZXcgUmVxdWVzdCBvYmplY3QuXG5cdFx0XHRcdFx0XHRjb25zdCByZXF1ZXN0T3B0cyA9IHtcblx0XHRcdFx0XHRcdFx0aGVhZGVyczogbmV3IEhlYWRlcnMocmVxdWVzdC5oZWFkZXJzKSxcblx0XHRcdFx0XHRcdFx0Zm9sbG93OiByZXF1ZXN0LmZvbGxvdyxcblx0XHRcdFx0XHRcdFx0Y291bnRlcjogcmVxdWVzdC5jb3VudGVyICsgMSxcblx0XHRcdFx0XHRcdFx0YWdlbnQ6IHJlcXVlc3QuYWdlbnQsXG5cdFx0XHRcdFx0XHRcdGNvbXByZXNzOiByZXF1ZXN0LmNvbXByZXNzLFxuXHRcdFx0XHRcdFx0XHRtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuXHRcdFx0XHRcdFx0XHRib2R5OiByZXF1ZXN0LmJvZHksXG5cdFx0XHRcdFx0XHRcdHNpZ25hbDogcmVxdWVzdC5zaWduYWwsXG5cdFx0XHRcdFx0XHRcdHRpbWVvdXQ6IHJlcXVlc3QudGltZW91dFxuXHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDlcblx0XHRcdFx0XHRcdGlmIChyZXMuc3RhdHVzQ29kZSAhPT0gMzAzICYmIHJlcXVlc3QuYm9keSAmJiBnZXRUb3RhbEJ5dGVzKHJlcXVlc3QpID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcignQ2Fubm90IGZvbGxvdyByZWRpcmVjdCB3aXRoIGJvZHkgYmVpbmcgYSByZWFkYWJsZSBzdHJlYW0nLCAndW5zdXBwb3J0ZWQtcmVkaXJlY3QnKSk7XG5cdFx0XHRcdFx0XHRcdGZpbmFsaXplKCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDExXG5cdFx0XHRcdFx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPT09IDMwMyB8fCAocmVzLnN0YXR1c0NvZGUgPT09IDMwMSB8fCByZXMuc3RhdHVzQ29kZSA9PT0gMzAyKSAmJiByZXF1ZXN0Lm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RPcHRzLm1ldGhvZCA9ICdHRVQnO1xuXHRcdFx0XHRcdFx0XHRyZXF1ZXN0T3B0cy5ib2R5ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRyZXF1ZXN0T3B0cy5oZWFkZXJzLmRlbGV0ZSgnY29udGVudC1sZW5ndGgnKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDE1XG5cdFx0XHRcdFx0XHRyZXNvbHZlKGZldGNoKG5ldyBSZXF1ZXN0KGxvY2F0aW9uVVJMLCByZXF1ZXN0T3B0cykpKTtcblx0XHRcdFx0XHRcdGZpbmFsaXplKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcHJlcGFyZSByZXNwb25zZVxuXHRcdFx0cmVzLm9uY2UoJ2VuZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKHNpZ25hbCkgc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRBbmRGaW5hbGl6ZSk7XG5cdFx0XHR9KTtcblx0XHRcdGxldCBib2R5ID0gcmVzLnBpcGUobmV3IFBhc3NUaHJvdWdoJDEoKSk7XG5cblx0XHRcdGNvbnN0IHJlc3BvbnNlX29wdGlvbnMgPSB7XG5cdFx0XHRcdHVybDogcmVxdWVzdC51cmwsXG5cdFx0XHRcdHN0YXR1czogcmVzLnN0YXR1c0NvZGUsXG5cdFx0XHRcdHN0YXR1c1RleHQ6IHJlcy5zdGF0dXNNZXNzYWdlLFxuXHRcdFx0XHRoZWFkZXJzOiBoZWFkZXJzLFxuXHRcdFx0XHRzaXplOiByZXF1ZXN0LnNpemUsXG5cdFx0XHRcdHRpbWVvdXQ6IHJlcXVlc3QudGltZW91dCxcblx0XHRcdFx0Y291bnRlcjogcmVxdWVzdC5jb3VudGVyXG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBIVFRQLW5ldHdvcmsgZmV0Y2ggc3RlcCAxMi4xLjEuM1xuXHRcdFx0Y29uc3QgY29kaW5ncyA9IGhlYWRlcnMuZ2V0KCdDb250ZW50LUVuY29kaW5nJyk7XG5cblx0XHRcdC8vIEhUVFAtbmV0d29yayBmZXRjaCBzdGVwIDEyLjEuMS40OiBoYW5kbGUgY29udGVudCBjb2RpbmdzXG5cblx0XHRcdC8vIGluIGZvbGxvd2luZyBzY2VuYXJpb3Mgd2UgaWdub3JlIGNvbXByZXNzaW9uIHN1cHBvcnRcblx0XHRcdC8vIDEuIGNvbXByZXNzaW9uIHN1cHBvcnQgaXMgZGlzYWJsZWRcblx0XHRcdC8vIDIuIEhFQUQgcmVxdWVzdFxuXHRcdFx0Ly8gMy4gbm8gQ29udGVudC1FbmNvZGluZyBoZWFkZXJcblx0XHRcdC8vIDQuIG5vIGNvbnRlbnQgcmVzcG9uc2UgKDIwNClcblx0XHRcdC8vIDUuIGNvbnRlbnQgbm90IG1vZGlmaWVkIHJlc3BvbnNlICgzMDQpXG5cdFx0XHRpZiAoIXJlcXVlc3QuY29tcHJlc3MgfHwgcmVxdWVzdC5tZXRob2QgPT09ICdIRUFEJyB8fCBjb2RpbmdzID09PSBudWxsIHx8IHJlcy5zdGF0dXNDb2RlID09PSAyMDQgfHwgcmVzLnN0YXR1c0NvZGUgPT09IDMwNCkge1xuXHRcdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZV9vcHRpb25zKTtcblx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRm9yIE5vZGUgdjYrXG5cdFx0XHQvLyBCZSBsZXNzIHN0cmljdCB3aGVuIGRlY29kaW5nIGNvbXByZXNzZWQgcmVzcG9uc2VzLCBzaW5jZSBzb21ldGltZXNcblx0XHRcdC8vIHNlcnZlcnMgc2VuZCBzbGlnaHRseSBpbnZhbGlkIHJlc3BvbnNlcyB0aGF0IGFyZSBzdGlsbCBhY2NlcHRlZFxuXHRcdFx0Ly8gYnkgY29tbW9uIGJyb3dzZXJzLlxuXHRcdFx0Ly8gQWx3YXlzIHVzaW5nIFpfU1lOQ19GTFVTSCBpcyB3aGF0IGNVUkwgZG9lcy5cblx0XHRcdGNvbnN0IHpsaWJPcHRpb25zID0ge1xuXHRcdFx0XHRmbHVzaDogemxpYi5aX1NZTkNfRkxVU0gsXG5cdFx0XHRcdGZpbmlzaEZsdXNoOiB6bGliLlpfU1lOQ19GTFVTSFxuXHRcdFx0fTtcblxuXHRcdFx0Ly8gZm9yIGd6aXBcblx0XHRcdGlmIChjb2RpbmdzID09ICdnemlwJyB8fCBjb2RpbmdzID09ICd4LWd6aXAnKSB7XG5cdFx0XHRcdGJvZHkgPSBib2R5LnBpcGUoemxpYi5jcmVhdGVHdW56aXAoemxpYk9wdGlvbnMpKTtcblx0XHRcdFx0cmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoYm9keSwgcmVzcG9uc2Vfb3B0aW9ucyk7XG5cdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIGZvciBkZWZsYXRlXG5cdFx0XHRpZiAoY29kaW5ncyA9PSAnZGVmbGF0ZScgfHwgY29kaW5ncyA9PSAneC1kZWZsYXRlJykge1xuXHRcdFx0XHQvLyBoYW5kbGUgdGhlIGluZmFtb3VzIHJhdyBkZWZsYXRlIHJlc3BvbnNlIGZyb20gb2xkIHNlcnZlcnNcblx0XHRcdFx0Ly8gYSBoYWNrIGZvciBvbGQgSUlTIGFuZCBBcGFjaGUgc2VydmVyc1xuXHRcdFx0XHRjb25zdCByYXcgPSByZXMucGlwZShuZXcgUGFzc1Rocm91Z2gkMSgpKTtcblx0XHRcdFx0cmF3Lm9uY2UoJ2RhdGEnLCBmdW5jdGlvbiAoY2h1bmspIHtcblx0XHRcdFx0XHQvLyBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNzUxOTgyOFxuXHRcdFx0XHRcdGlmICgoY2h1bmtbMF0gJiAweDBGKSA9PT0gMHgwOCkge1xuXHRcdFx0XHRcdFx0Ym9keSA9IGJvZHkucGlwZSh6bGliLmNyZWF0ZUluZmxhdGUoKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJvZHkgPSBib2R5LnBpcGUoemxpYi5jcmVhdGVJbmZsYXRlUmF3KCkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZV9vcHRpb25zKTtcblx0XHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZm9yIGJyXG5cdFx0XHRpZiAoY29kaW5ncyA9PSAnYnInICYmIHR5cGVvZiB6bGliLmNyZWF0ZUJyb3RsaURlY29tcHJlc3MgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Ym9keSA9IGJvZHkucGlwZSh6bGliLmNyZWF0ZUJyb3RsaURlY29tcHJlc3MoKSk7XG5cdFx0XHRcdHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlX29wdGlvbnMpO1xuXHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBvdGhlcndpc2UsIHVzZSByZXNwb25zZSBhcy1pc1xuXHRcdFx0cmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoYm9keSwgcmVzcG9uc2Vfb3B0aW9ucyk7XG5cdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHR9KTtcblxuXHRcdHdyaXRlVG9TdHJlYW0ocmVxLCByZXF1ZXN0KTtcblx0fSk7XG59XG4vKipcbiAqIFJlZGlyZWN0IGNvZGUgbWF0Y2hpbmdcbiAqXG4gKiBAcGFyYW0gICBOdW1iZXIgICBjb2RlICBTdGF0dXMgY29kZVxuICogQHJldHVybiAgQm9vbGVhblxuICovXG5mZXRjaC5pc1JlZGlyZWN0ID0gZnVuY3Rpb24gKGNvZGUpIHtcblx0cmV0dXJuIGNvZGUgPT09IDMwMSB8fCBjb2RlID09PSAzMDIgfHwgY29kZSA9PT0gMzAzIHx8IGNvZGUgPT09IDMwNyB8fCBjb2RlID09PSAzMDg7XG59O1xuXG4vLyBleHBvc2UgUHJvbWlzZVxuZmV0Y2guUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaDtcbmV4cG9ydCB7IEhlYWRlcnMsIFJlcXVlc3QsIFJlc3BvbnNlLCBGZXRjaEVycm9yIH07XG4iLCI7KGZ1bmN0aW9uIChzYXgpIHsgLy8gd3JhcHBlciBmb3Igbm9uLW5vZGUgZW52c1xuICBzYXgucGFyc2VyID0gZnVuY3Rpb24gKHN0cmljdCwgb3B0KSB7IHJldHVybiBuZXcgU0FYUGFyc2VyKHN0cmljdCwgb3B0KSB9XG4gIHNheC5TQVhQYXJzZXIgPSBTQVhQYXJzZXJcbiAgc2F4LlNBWFN0cmVhbSA9IFNBWFN0cmVhbVxuICBzYXguY3JlYXRlU3RyZWFtID0gY3JlYXRlU3RyZWFtXG5cbiAgLy8gV2hlbiB3ZSBwYXNzIHRoZSBNQVhfQlVGRkVSX0xFTkdUSCBwb3NpdGlvbiwgc3RhcnQgY2hlY2tpbmcgZm9yIGJ1ZmZlciBvdmVycnVucy5cbiAgLy8gV2hlbiB3ZSBjaGVjaywgc2NoZWR1bGUgdGhlIG5leHQgY2hlY2sgZm9yIE1BWF9CVUZGRVJfTEVOR1RIIC0gKG1heChidWZmZXIgbGVuZ3RocykpLFxuICAvLyBzaW5jZSB0aGF0J3MgdGhlIGVhcmxpZXN0IHRoYXQgYSBidWZmZXIgb3ZlcnJ1biBjb3VsZCBvY2N1ci4gIFRoaXMgd2F5LCBjaGVja3MgYXJlXG4gIC8vIGFzIHJhcmUgYXMgcmVxdWlyZWQsIGJ1dCBhcyBvZnRlbiBhcyBuZWNlc3NhcnkgdG8gZW5zdXJlIG5ldmVyIGNyb3NzaW5nIHRoaXMgYm91bmQuXG4gIC8vIEZ1cnRoZXJtb3JlLCBidWZmZXJzIGFyZSBvbmx5IHRlc3RlZCBhdCBtb3N0IG9uY2UgcGVyIHdyaXRlKCksIHNvIHBhc3NpbmcgYSB2ZXJ5XG4gIC8vIGxhcmdlIHN0cmluZyBpbnRvIHdyaXRlKCkgbWlnaHQgaGF2ZSB1bmRlc2lyYWJsZSBlZmZlY3RzLCBidXQgdGhpcyBpcyBtYW5hZ2VhYmxlIGJ5XG4gIC8vIHRoZSBjYWxsZXIsIHNvIGl0IGlzIGFzc3VtZWQgdG8gYmUgc2FmZS4gIFRodXMsIGEgY2FsbCB0byB3cml0ZSgpIG1heSwgaW4gdGhlIGV4dHJlbWVcbiAgLy8gZWRnZSBjYXNlLCByZXN1bHQgaW4gY3JlYXRpbmcgYXQgbW9zdCBvbmUgY29tcGxldGUgY29weSBvZiB0aGUgc3RyaW5nIHBhc3NlZCBpbi5cbiAgLy8gU2V0IHRvIEluZmluaXR5IHRvIGhhdmUgdW5saW1pdGVkIGJ1ZmZlcnMuXG4gIHNheC5NQVhfQlVGRkVSX0xFTkdUSCA9IDY0ICogMTAyNFxuXG4gIHZhciBidWZmZXJzID0gW1xuICAgICdjb21tZW50JywgJ3NnbWxEZWNsJywgJ3RleHROb2RlJywgJ3RhZ05hbWUnLCAnZG9jdHlwZScsXG4gICAgJ3Byb2NJbnN0TmFtZScsICdwcm9jSW5zdEJvZHknLCAnZW50aXR5JywgJ2F0dHJpYk5hbWUnLFxuICAgICdhdHRyaWJWYWx1ZScsICdjZGF0YScsICdzY3JpcHQnXG4gIF1cblxuICBzYXguRVZFTlRTID0gW1xuICAgICd0ZXh0JyxcbiAgICAncHJvY2Vzc2luZ2luc3RydWN0aW9uJyxcbiAgICAnc2dtbGRlY2xhcmF0aW9uJyxcbiAgICAnZG9jdHlwZScsXG4gICAgJ2NvbW1lbnQnLFxuICAgICdvcGVudGFnc3RhcnQnLFxuICAgICdhdHRyaWJ1dGUnLFxuICAgICdvcGVudGFnJyxcbiAgICAnY2xvc2V0YWcnLFxuICAgICdvcGVuY2RhdGEnLFxuICAgICdjZGF0YScsXG4gICAgJ2Nsb3NlY2RhdGEnLFxuICAgICdlcnJvcicsXG4gICAgJ2VuZCcsXG4gICAgJ3JlYWR5JyxcbiAgICAnc2NyaXB0JyxcbiAgICAnb3Blbm5hbWVzcGFjZScsXG4gICAgJ2Nsb3NlbmFtZXNwYWNlJ1xuICBdXG5cbiAgZnVuY3Rpb24gU0FYUGFyc2VyIChzdHJpY3QsIG9wdCkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTQVhQYXJzZXIpKSB7XG4gICAgICByZXR1cm4gbmV3IFNBWFBhcnNlcihzdHJpY3QsIG9wdClcbiAgICB9XG5cbiAgICB2YXIgcGFyc2VyID0gdGhpc1xuICAgIGNsZWFyQnVmZmVycyhwYXJzZXIpXG4gICAgcGFyc2VyLnEgPSBwYXJzZXIuYyA9ICcnXG4gICAgcGFyc2VyLmJ1ZmZlckNoZWNrUG9zaXRpb24gPSBzYXguTUFYX0JVRkZFUl9MRU5HVEhcbiAgICBwYXJzZXIub3B0ID0gb3B0IHx8IHt9XG4gICAgcGFyc2VyLm9wdC5sb3dlcmNhc2UgPSBwYXJzZXIub3B0Lmxvd2VyY2FzZSB8fCBwYXJzZXIub3B0Lmxvd2VyY2FzZXRhZ3NcbiAgICBwYXJzZXIubG9vc2VDYXNlID0gcGFyc2VyLm9wdC5sb3dlcmNhc2UgPyAndG9Mb3dlckNhc2UnIDogJ3RvVXBwZXJDYXNlJ1xuICAgIHBhcnNlci50YWdzID0gW11cbiAgICBwYXJzZXIuY2xvc2VkID0gcGFyc2VyLmNsb3NlZFJvb3QgPSBwYXJzZXIuc2F3Um9vdCA9IGZhbHNlXG4gICAgcGFyc2VyLnRhZyA9IHBhcnNlci5lcnJvciA9IG51bGxcbiAgICBwYXJzZXIuc3RyaWN0ID0gISFzdHJpY3RcbiAgICBwYXJzZXIubm9zY3JpcHQgPSAhIShzdHJpY3QgfHwgcGFyc2VyLm9wdC5ub3NjcmlwdClcbiAgICBwYXJzZXIuc3RhdGUgPSBTLkJFR0lOXG4gICAgcGFyc2VyLnN0cmljdEVudGl0aWVzID0gcGFyc2VyLm9wdC5zdHJpY3RFbnRpdGllc1xuICAgIHBhcnNlci5FTlRJVElFUyA9IHBhcnNlci5zdHJpY3RFbnRpdGllcyA/IE9iamVjdC5jcmVhdGUoc2F4LlhNTF9FTlRJVElFUykgOiBPYmplY3QuY3JlYXRlKHNheC5FTlRJVElFUylcbiAgICBwYXJzZXIuYXR0cmliTGlzdCA9IFtdXG5cbiAgICAvLyBuYW1lc3BhY2VzIGZvcm0gYSBwcm90b3R5cGUgY2hhaW4uXG4gICAgLy8gaXQgYWx3YXlzIHBvaW50cyBhdCB0aGUgY3VycmVudCB0YWcsXG4gICAgLy8gd2hpY2ggcHJvdG9zIHRvIGl0cyBwYXJlbnQgdGFnLlxuICAgIGlmIChwYXJzZXIub3B0LnhtbG5zKSB7XG4gICAgICBwYXJzZXIubnMgPSBPYmplY3QuY3JlYXRlKHJvb3ROUylcbiAgICB9XG5cbiAgICAvLyBtb3N0bHkganVzdCBmb3IgZXJyb3IgcmVwb3J0aW5nXG4gICAgcGFyc2VyLnRyYWNrUG9zaXRpb24gPSBwYXJzZXIub3B0LnBvc2l0aW9uICE9PSBmYWxzZVxuICAgIGlmIChwYXJzZXIudHJhY2tQb3NpdGlvbikge1xuICAgICAgcGFyc2VyLnBvc2l0aW9uID0gcGFyc2VyLmxpbmUgPSBwYXJzZXIuY29sdW1uID0gMFxuICAgIH1cbiAgICBlbWl0KHBhcnNlciwgJ29ucmVhZHknKVxuICB9XG5cbiAgaWYgKCFPYmplY3QuY3JlYXRlKSB7XG4gICAgT2JqZWN0LmNyZWF0ZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICBmdW5jdGlvbiBGICgpIHt9XG4gICAgICBGLnByb3RvdHlwZSA9IG9cbiAgICAgIHZhciBuZXdmID0gbmV3IEYoKVxuICAgICAgcmV0dXJuIG5ld2ZcbiAgICB9XG4gIH1cblxuICBpZiAoIU9iamVjdC5rZXlzKSB7XG4gICAgT2JqZWN0LmtleXMgPSBmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGEgPSBbXVxuICAgICAgZm9yICh2YXIgaSBpbiBvKSBpZiAoby5oYXNPd25Qcm9wZXJ0eShpKSkgYS5wdXNoKGkpXG4gICAgICByZXR1cm4gYVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrQnVmZmVyTGVuZ3RoIChwYXJzZXIpIHtcbiAgICB2YXIgbWF4QWxsb3dlZCA9IE1hdGgubWF4KHNheC5NQVhfQlVGRkVSX0xFTkdUSCwgMTApXG4gICAgdmFyIG1heEFjdHVhbCA9IDBcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGJ1ZmZlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgbGVuID0gcGFyc2VyW2J1ZmZlcnNbaV1dLmxlbmd0aFxuICAgICAgaWYgKGxlbiA+IG1heEFsbG93ZWQpIHtcbiAgICAgICAgLy8gVGV4dC9jZGF0YSBub2RlcyBjYW4gZ2V0IGJpZywgYW5kIHNpbmNlIHRoZXkncmUgYnVmZmVyZWQsXG4gICAgICAgIC8vIHdlIGNhbiBnZXQgaGVyZSB1bmRlciBub3JtYWwgY29uZGl0aW9ucy5cbiAgICAgICAgLy8gQXZvaWQgaXNzdWVzIGJ5IGVtaXR0aW5nIHRoZSB0ZXh0IG5vZGUgbm93LFxuICAgICAgICAvLyBzbyBhdCBsZWFzdCBpdCB3b24ndCBnZXQgYW55IGJpZ2dlci5cbiAgICAgICAgc3dpdGNoIChidWZmZXJzW2ldKSB7XG4gICAgICAgICAgY2FzZSAndGV4dE5vZGUnOlxuICAgICAgICAgICAgY2xvc2VUZXh0KHBhcnNlcilcbiAgICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgICBjYXNlICdjZGF0YSc6XG4gICAgICAgICAgICBlbWl0Tm9kZShwYXJzZXIsICdvbmNkYXRhJywgcGFyc2VyLmNkYXRhKVxuICAgICAgICAgICAgcGFyc2VyLmNkYXRhID0gJydcbiAgICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgICBjYXNlICdzY3JpcHQnOlxuICAgICAgICAgICAgZW1pdE5vZGUocGFyc2VyLCAnb25zY3JpcHQnLCBwYXJzZXIuc2NyaXB0KVxuICAgICAgICAgICAgcGFyc2VyLnNjcmlwdCA9ICcnXG4gICAgICAgICAgICBicmVha1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGVycm9yKHBhcnNlciwgJ01heCBidWZmZXIgbGVuZ3RoIGV4Y2VlZGVkOiAnICsgYnVmZmVyc1tpXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbWF4QWN0dWFsID0gTWF0aC5tYXgobWF4QWN0dWFsLCBsZW4pXG4gICAgfVxuICAgIC8vIHNjaGVkdWxlIHRoZSBuZXh0IGNoZWNrIGZvciB0aGUgZWFybGllc3QgcG9zc2libGUgYnVmZmVyIG92ZXJydW4uXG4gICAgdmFyIG0gPSBzYXguTUFYX0JVRkZFUl9MRU5HVEggLSBtYXhBY3R1YWxcbiAgICBwYXJzZXIuYnVmZmVyQ2hlY2tQb3NpdGlvbiA9IG0gKyBwYXJzZXIucG9zaXRpb25cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyQnVmZmVycyAocGFyc2VyKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBidWZmZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgcGFyc2VyW2J1ZmZlcnNbaV1dID0gJydcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaEJ1ZmZlcnMgKHBhcnNlcikge1xuICAgIGNsb3NlVGV4dChwYXJzZXIpXG4gICAgaWYgKHBhcnNlci5jZGF0YSAhPT0gJycpIHtcbiAgICAgIGVtaXROb2RlKHBhcnNlciwgJ29uY2RhdGEnLCBwYXJzZXIuY2RhdGEpXG4gICAgICBwYXJzZXIuY2RhdGEgPSAnJ1xuICAgIH1cbiAgICBpZiAocGFyc2VyLnNjcmlwdCAhPT0gJycpIHtcbiAgICAgIGVtaXROb2RlKHBhcnNlciwgJ29uc2NyaXB0JywgcGFyc2VyLnNjcmlwdClcbiAgICAgIHBhcnNlci5zY3JpcHQgPSAnJ1xuICAgIH1cbiAgfVxuXG4gIFNBWFBhcnNlci5wcm90b3R5cGUgPSB7XG4gICAgZW5kOiBmdW5jdGlvbiAoKSB7IGVuZCh0aGlzKSB9LFxuICAgIHdyaXRlOiB3cml0ZSxcbiAgICByZXN1bWU6IGZ1bmN0aW9uICgpIHsgdGhpcy5lcnJvciA9IG51bGw7IHJldHVybiB0aGlzIH0sXG4gICAgY2xvc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMud3JpdGUobnVsbCkgfSxcbiAgICBmbHVzaDogZnVuY3Rpb24gKCkgeyBmbHVzaEJ1ZmZlcnModGhpcykgfVxuICB9XG5cbiAgdmFyIFN0cmVhbVxuICB0cnkge1xuICAgIFN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpLlN0cmVhbVxuICB9IGNhdGNoIChleCkge1xuICAgIFN0cmVhbSA9IGZ1bmN0aW9uICgpIHt9XG4gIH1cblxuICB2YXIgc3RyZWFtV3JhcHMgPSBzYXguRVZFTlRTLmZpbHRlcihmdW5jdGlvbiAoZXYpIHtcbiAgICByZXR1cm4gZXYgIT09ICdlcnJvcicgJiYgZXYgIT09ICdlbmQnXG4gIH0pXG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyZWFtIChzdHJpY3QsIG9wdCkge1xuICAgIHJldHVybiBuZXcgU0FYU3RyZWFtKHN0cmljdCwgb3B0KVxuICB9XG5cbiAgZnVuY3Rpb24gU0FYU3RyZWFtIChzdHJpY3QsIG9wdCkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTQVhTdHJlYW0pKSB7XG4gICAgICByZXR1cm4gbmV3IFNBWFN0cmVhbShzdHJpY3QsIG9wdClcbiAgICB9XG5cbiAgICBTdHJlYW0uYXBwbHkodGhpcylcblxuICAgIHRoaXMuX3BhcnNlciA9IG5ldyBTQVhQYXJzZXIoc3RyaWN0LCBvcHQpXG4gICAgdGhpcy53cml0YWJsZSA9IHRydWVcbiAgICB0aGlzLnJlYWRhYmxlID0gdHJ1ZVxuXG4gICAgdmFyIG1lID0gdGhpc1xuXG4gICAgdGhpcy5fcGFyc2VyLm9uZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgbWUuZW1pdCgnZW5kJylcbiAgICB9XG5cbiAgICB0aGlzLl9wYXJzZXIub25lcnJvciA9IGZ1bmN0aW9uIChlcikge1xuICAgICAgbWUuZW1pdCgnZXJyb3InLCBlcilcblxuICAgICAgLy8gaWYgZGlkbid0IHRocm93LCB0aGVuIG1lYW5zIGVycm9yIHdhcyBoYW5kbGVkLlxuICAgICAgLy8gZ28gYWhlYWQgYW5kIGNsZWFyIGVycm9yLCBzbyB3ZSBjYW4gd3JpdGUgYWdhaW4uXG4gICAgICBtZS5fcGFyc2VyLmVycm9yID0gbnVsbFxuICAgIH1cblxuICAgIHRoaXMuX2RlY29kZXIgPSBudWxsXG5cbiAgICBzdHJlYW1XcmFwcy5mb3JFYWNoKGZ1bmN0aW9uIChldikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1lLCAnb24nICsgZXYsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG1lLl9wYXJzZXJbJ29uJyArIGV2XVxuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChoKSB7XG4gICAgICAgICAgaWYgKCFoKSB7XG4gICAgICAgICAgICBtZS5yZW1vdmVBbGxMaXN0ZW5lcnMoZXYpXG4gICAgICAgICAgICBtZS5fcGFyc2VyWydvbicgKyBldl0gPSBoXG4gICAgICAgICAgICByZXR1cm4gaFxuICAgICAgICAgIH1cbiAgICAgICAgICBtZS5vbihldiwgaClcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgU0FYU3RyZWFtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU3RyZWFtLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogU0FYU3RyZWFtXG4gICAgfVxuICB9KVxuXG4gIFNBWFN0cmVhbS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGlmICh0eXBlb2YgQnVmZmVyID09PSAnZnVuY3Rpb24nICYmXG4gICAgICB0eXBlb2YgQnVmZmVyLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmXG4gICAgICBCdWZmZXIuaXNCdWZmZXIoZGF0YSkpIHtcbiAgICAgIGlmICghdGhpcy5fZGVjb2Rlcikge1xuICAgICAgICB2YXIgU0QgPSByZXF1aXJlKCdzdHJpbmdfZGVjb2RlcicpLlN0cmluZ0RlY29kZXJcbiAgICAgICAgdGhpcy5fZGVjb2RlciA9IG5ldyBTRCgndXRmOCcpXG4gICAgICB9XG4gICAgICBkYXRhID0gdGhpcy5fZGVjb2Rlci53cml0ZShkYXRhKVxuICAgIH1cblxuICAgIHRoaXMuX3BhcnNlci53cml0ZShkYXRhLnRvU3RyaW5nKCkpXG4gICAgdGhpcy5lbWl0KCdkYXRhJywgZGF0YSlcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgU0FYU3RyZWFtLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAoY2h1bmspIHtcbiAgICBpZiAoY2h1bmsgJiYgY2h1bmsubGVuZ3RoKSB7XG4gICAgICB0aGlzLndyaXRlKGNodW5rKVxuICAgIH1cbiAgICB0aGlzLl9wYXJzZXIuZW5kKClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgU0FYU3RyZWFtLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChldiwgaGFuZGxlcikge1xuICAgIHZhciBtZSA9IHRoaXNcbiAgICBpZiAoIW1lLl9wYXJzZXJbJ29uJyArIGV2XSAmJiBzdHJlYW1XcmFwcy5pbmRleE9mKGV2KSAhPT0gLTEpIHtcbiAgICAgIG1lLl9wYXJzZXJbJ29uJyArIGV2XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gW2FyZ3VtZW50c1swXV0gOiBBcnJheS5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgIGFyZ3Muc3BsaWNlKDAsIDAsIGV2KVxuICAgICAgICBtZS5lbWl0LmFwcGx5KG1lLCBhcmdzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBTdHJlYW0ucHJvdG90eXBlLm9uLmNhbGwobWUsIGV2LCBoYW5kbGVyKVxuICB9XG5cbiAgLy8gdGhpcyByZWFsbHkgbmVlZHMgdG8gYmUgcmVwbGFjZWQgd2l0aCBjaGFyYWN0ZXIgY2xhc3Nlcy5cbiAgLy8gWE1MIGFsbG93cyBhbGwgbWFubmVyIG9mIHJpZGljdWxvdXMgbnVtYmVycyBhbmQgZGlnaXRzLlxuICB2YXIgQ0RBVEEgPSAnW0NEQVRBWydcbiAgdmFyIERPQ1RZUEUgPSAnRE9DVFlQRSdcbiAgdmFyIFhNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlJ1xuICB2YXIgWE1MTlNfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvJ1xuICB2YXIgcm9vdE5TID0geyB4bWw6IFhNTF9OQU1FU1BBQ0UsIHhtbG5zOiBYTUxOU19OQU1FU1BBQ0UgfVxuXG4gIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1JFQy14bWwvI05ULU5hbWVTdGFydENoYXJcbiAgLy8gVGhpcyBpbXBsZW1lbnRhdGlvbiB3b3JrcyBvbiBzdHJpbmdzLCBhIHNpbmdsZSBjaGFyYWN0ZXIgYXQgYSB0aW1lXG4gIC8vIGFzIHN1Y2gsIGl0IGNhbm5vdCBldmVyIHN1cHBvcnQgYXN0cmFsLXBsYW5lIGNoYXJhY3RlcnMgKDEwMDAwLUVGRkZGKVxuICAvLyB3aXRob3V0IGEgc2lnbmlmaWNhbnQgYnJlYWtpbmcgY2hhbmdlIHRvIGVpdGhlciB0aGlzICBwYXJzZXIsIG9yIHRoZVxuICAvLyBKYXZhU2NyaXB0IGxhbmd1YWdlLiAgSW1wbGVtZW50YXRpb24gb2YgYW4gZW1vamktY2FwYWJsZSB4bWwgcGFyc2VyXG4gIC8vIGlzIGxlZnQgYXMgYW4gZXhlcmNpc2UgZm9yIHRoZSByZWFkZXIuXG4gIHZhciBuYW1lU3RhcnQgPSAvWzpfQS1aYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXS9cblxuICB2YXIgbmFtZUJvZHkgPSAvWzpfQS1aYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXFx1MDBCN1xcdTAzMDAtXFx1MDM2RlxcdTIwM0YtXFx1MjA0MC5cXGQtXS9cblxuICB2YXIgZW50aXR5U3RhcnQgPSAvWyM6X0EtWmEtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRF0vXG4gIHZhciBlbnRpdHlCb2R5ID0gL1sjOl9BLVphLXpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkRcXHUwMEI3XFx1MDMwMC1cXHUwMzZGXFx1MjAzRi1cXHUyMDQwLlxcZC1dL1xuXG4gIGZ1bmN0aW9uIGlzV2hpdGVzcGFjZSAoYykge1xuICAgIHJldHVybiBjID09PSAnICcgfHwgYyA9PT0gJ1xcbicgfHwgYyA9PT0gJ1xccicgfHwgYyA9PT0gJ1xcdCdcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzUXVvdGUgKGMpIHtcbiAgICByZXR1cm4gYyA9PT0gJ1wiJyB8fCBjID09PSAnXFwnJ1xuICB9XG5cbiAgZnVuY3Rpb24gaXNBdHRyaWJFbmQgKGMpIHtcbiAgICByZXR1cm4gYyA9PT0gJz4nIHx8IGlzV2hpdGVzcGFjZShjKVxuICB9XG5cbiAgZnVuY3Rpb24gaXNNYXRjaCAocmVnZXgsIGMpIHtcbiAgICByZXR1cm4gcmVnZXgudGVzdChjKVxuICB9XG5cbiAgZnVuY3Rpb24gbm90TWF0Y2ggKHJlZ2V4LCBjKSB7XG4gICAgcmV0dXJuICFpc01hdGNoKHJlZ2V4LCBjKVxuICB9XG5cbiAgdmFyIFMgPSAwXG4gIHNheC5TVEFURSA9IHtcbiAgICBCRUdJTjogUysrLCAvLyBsZWFkaW5nIGJ5dGUgb3JkZXIgbWFyayBvciB3aGl0ZXNwYWNlXG4gICAgQkVHSU5fV0hJVEVTUEFDRTogUysrLCAvLyBsZWFkaW5nIHdoaXRlc3BhY2VcbiAgICBURVhUOiBTKyssIC8vIGdlbmVyYWwgc3R1ZmZcbiAgICBURVhUX0VOVElUWTogUysrLCAvLyAmYW1wIGFuZCBzdWNoLlxuICAgIE9QRU5fV0FLQTogUysrLCAvLyA8XG4gICAgU0dNTF9ERUNMOiBTKyssIC8vIDwhQkxBUkdcbiAgICBTR01MX0RFQ0xfUVVPVEVEOiBTKyssIC8vIDwhQkxBUkcgZm9vIFwiYmFyXG4gICAgRE9DVFlQRTogUysrLCAvLyA8IURPQ1RZUEVcbiAgICBET0NUWVBFX1FVT1RFRDogUysrLCAvLyA8IURPQ1RZUEUgXCIvL2JsYWhcbiAgICBET0NUWVBFX0RURDogUysrLCAvLyA8IURPQ1RZUEUgXCIvL2JsYWhcIiBbIC4uLlxuICAgIERPQ1RZUEVfRFREX1FVT1RFRDogUysrLCAvLyA8IURPQ1RZUEUgXCIvL2JsYWhcIiBbIFwiZm9vXG4gICAgQ09NTUVOVF9TVEFSVElORzogUysrLCAvLyA8IS1cbiAgICBDT01NRU5UOiBTKyssIC8vIDwhLS1cbiAgICBDT01NRU5UX0VORElORzogUysrLCAvLyA8IS0tIGJsYWggLVxuICAgIENPTU1FTlRfRU5ERUQ6IFMrKywgLy8gPCEtLSBibGFoIC0tXG4gICAgQ0RBVEE6IFMrKywgLy8gPCFbQ0RBVEFbIHNvbWV0aGluZ1xuICAgIENEQVRBX0VORElORzogUysrLCAvLyBdXG4gICAgQ0RBVEFfRU5ESU5HXzI6IFMrKywgLy8gXV1cbiAgICBQUk9DX0lOU1Q6IFMrKywgLy8gPD9oaVxuICAgIFBST0NfSU5TVF9CT0RZOiBTKyssIC8vIDw/aGkgdGhlcmVcbiAgICBQUk9DX0lOU1RfRU5ESU5HOiBTKyssIC8vIDw/aGkgXCJ0aGVyZVwiID9cbiAgICBPUEVOX1RBRzogUysrLCAvLyA8c3Ryb25nXG4gICAgT1BFTl9UQUdfU0xBU0g6IFMrKywgLy8gPHN0cm9uZyAvXG4gICAgQVRUUklCOiBTKyssIC8vIDxhXG4gICAgQVRUUklCX05BTUU6IFMrKywgLy8gPGEgZm9vXG4gICAgQVRUUklCX05BTUVfU0FXX1dISVRFOiBTKyssIC8vIDxhIGZvbyBfXG4gICAgQVRUUklCX1ZBTFVFOiBTKyssIC8vIDxhIGZvbz1cbiAgICBBVFRSSUJfVkFMVUVfUVVPVEVEOiBTKyssIC8vIDxhIGZvbz1cImJhclxuICAgIEFUVFJJQl9WQUxVRV9DTE9TRUQ6IFMrKywgLy8gPGEgZm9vPVwiYmFyXCJcbiAgICBBVFRSSUJfVkFMVUVfVU5RVU9URUQ6IFMrKywgLy8gPGEgZm9vPWJhclxuICAgIEFUVFJJQl9WQUxVRV9FTlRJVFlfUTogUysrLCAvLyA8Zm9vIGJhcj1cIiZxdW90O1wiXG4gICAgQVRUUklCX1ZBTFVFX0VOVElUWV9VOiBTKyssIC8vIDxmb28gYmFyPSZxdW90XG4gICAgQ0xPU0VfVEFHOiBTKyssIC8vIDwvYVxuICAgIENMT1NFX1RBR19TQVdfV0hJVEU6IFMrKywgLy8gPC9hICAgPlxuICAgIFNDUklQVDogUysrLCAvLyA8c2NyaXB0PiAuLi5cbiAgICBTQ1JJUFRfRU5ESU5HOiBTKysgLy8gPHNjcmlwdD4gLi4uIDxcbiAgfVxuXG4gIHNheC5YTUxfRU5USVRJRVMgPSB7XG4gICAgJ2FtcCc6ICcmJyxcbiAgICAnZ3QnOiAnPicsXG4gICAgJ2x0JzogJzwnLFxuICAgICdxdW90JzogJ1wiJyxcbiAgICAnYXBvcyc6IFwiJ1wiXG4gIH1cblxuICBzYXguRU5USVRJRVMgPSB7XG4gICAgJ2FtcCc6ICcmJyxcbiAgICAnZ3QnOiAnPicsXG4gICAgJ2x0JzogJzwnLFxuICAgICdxdW90JzogJ1wiJyxcbiAgICAnYXBvcyc6IFwiJ1wiLFxuICAgICdBRWxpZyc6IDE5OCxcbiAgICAnQWFjdXRlJzogMTkzLFxuICAgICdBY2lyYyc6IDE5NCxcbiAgICAnQWdyYXZlJzogMTkyLFxuICAgICdBcmluZyc6IDE5NyxcbiAgICAnQXRpbGRlJzogMTk1LFxuICAgICdBdW1sJzogMTk2LFxuICAgICdDY2VkaWwnOiAxOTksXG4gICAgJ0VUSCc6IDIwOCxcbiAgICAnRWFjdXRlJzogMjAxLFxuICAgICdFY2lyYyc6IDIwMixcbiAgICAnRWdyYXZlJzogMjAwLFxuICAgICdFdW1sJzogMjAzLFxuICAgICdJYWN1dGUnOiAyMDUsXG4gICAgJ0ljaXJjJzogMjA2LFxuICAgICdJZ3JhdmUnOiAyMDQsXG4gICAgJ0l1bWwnOiAyMDcsXG4gICAgJ050aWxkZSc6IDIwOSxcbiAgICAnT2FjdXRlJzogMjExLFxuICAgICdPY2lyYyc6IDIxMixcbiAgICAnT2dyYXZlJzogMjEwLFxuICAgICdPc2xhc2gnOiAyMTYsXG4gICAgJ090aWxkZSc6IDIxMyxcbiAgICAnT3VtbCc6IDIxNCxcbiAgICAnVEhPUk4nOiAyMjIsXG4gICAgJ1VhY3V0ZSc6IDIxOCxcbiAgICAnVWNpcmMnOiAyMTksXG4gICAgJ1VncmF2ZSc6IDIxNyxcbiAgICAnVXVtbCc6IDIyMCxcbiAgICAnWWFjdXRlJzogMjIxLFxuICAgICdhYWN1dGUnOiAyMjUsXG4gICAgJ2FjaXJjJzogMjI2LFxuICAgICdhZWxpZyc6IDIzMCxcbiAgICAnYWdyYXZlJzogMjI0LFxuICAgICdhcmluZyc6IDIyOSxcbiAgICAnYXRpbGRlJzogMjI3LFxuICAgICdhdW1sJzogMjI4LFxuICAgICdjY2VkaWwnOiAyMzEsXG4gICAgJ2VhY3V0ZSc6IDIzMyxcbiAgICAnZWNpcmMnOiAyMzQsXG4gICAgJ2VncmF2ZSc6IDIzMixcbiAgICAnZXRoJzogMjQwLFxuICAgICdldW1sJzogMjM1LFxuICAgICdpYWN1dGUnOiAyMzcsXG4gICAgJ2ljaXJjJzogMjM4LFxuICAgICdpZ3JhdmUnOiAyMzYsXG4gICAgJ2l1bWwnOiAyMzksXG4gICAgJ250aWxkZSc6IDI0MSxcbiAgICAnb2FjdXRlJzogMjQzLFxuICAgICdvY2lyYyc6IDI0NCxcbiAgICAnb2dyYXZlJzogMjQyLFxuICAgICdvc2xhc2gnOiAyNDgsXG4gICAgJ290aWxkZSc6IDI0NSxcbiAgICAnb3VtbCc6IDI0NixcbiAgICAnc3psaWcnOiAyMjMsXG4gICAgJ3Rob3JuJzogMjU0LFxuICAgICd1YWN1dGUnOiAyNTAsXG4gICAgJ3VjaXJjJzogMjUxLFxuICAgICd1Z3JhdmUnOiAyNDksXG4gICAgJ3V1bWwnOiAyNTIsXG4gICAgJ3lhY3V0ZSc6IDI1MyxcbiAgICAneXVtbCc6IDI1NSxcbiAgICAnY29weSc6IDE2OSxcbiAgICAncmVnJzogMTc0LFxuICAgICduYnNwJzogMTYwLFxuICAgICdpZXhjbCc6IDE2MSxcbiAgICAnY2VudCc6IDE2MixcbiAgICAncG91bmQnOiAxNjMsXG4gICAgJ2N1cnJlbic6IDE2NCxcbiAgICAneWVuJzogMTY1LFxuICAgICdicnZiYXInOiAxNjYsXG4gICAgJ3NlY3QnOiAxNjcsXG4gICAgJ3VtbCc6IDE2OCxcbiAgICAnb3JkZic6IDE3MCxcbiAgICAnbGFxdW8nOiAxNzEsXG4gICAgJ25vdCc6IDE3MixcbiAgICAnc2h5JzogMTczLFxuICAgICdtYWNyJzogMTc1LFxuICAgICdkZWcnOiAxNzYsXG4gICAgJ3BsdXNtbic6IDE3NyxcbiAgICAnc3VwMSc6IDE4NSxcbiAgICAnc3VwMic6IDE3OCxcbiAgICAnc3VwMyc6IDE3OSxcbiAgICAnYWN1dGUnOiAxODAsXG4gICAgJ21pY3JvJzogMTgxLFxuICAgICdwYXJhJzogMTgyLFxuICAgICdtaWRkb3QnOiAxODMsXG4gICAgJ2NlZGlsJzogMTg0LFxuICAgICdvcmRtJzogMTg2LFxuICAgICdyYXF1byc6IDE4NyxcbiAgICAnZnJhYzE0JzogMTg4LFxuICAgICdmcmFjMTInOiAxODksXG4gICAgJ2ZyYWMzNCc6IDE5MCxcbiAgICAnaXF1ZXN0JzogMTkxLFxuICAgICd0aW1lcyc6IDIxNSxcbiAgICAnZGl2aWRlJzogMjQ3LFxuICAgICdPRWxpZyc6IDMzOCxcbiAgICAnb2VsaWcnOiAzMzksXG4gICAgJ1NjYXJvbic6IDM1MixcbiAgICAnc2Nhcm9uJzogMzUzLFxuICAgICdZdW1sJzogMzc2LFxuICAgICdmbm9mJzogNDAyLFxuICAgICdjaXJjJzogNzEwLFxuICAgICd0aWxkZSc6IDczMixcbiAgICAnQWxwaGEnOiA5MTMsXG4gICAgJ0JldGEnOiA5MTQsXG4gICAgJ0dhbW1hJzogOTE1LFxuICAgICdEZWx0YSc6IDkxNixcbiAgICAnRXBzaWxvbic6IDkxNyxcbiAgICAnWmV0YSc6IDkxOCxcbiAgICAnRXRhJzogOTE5LFxuICAgICdUaGV0YSc6IDkyMCxcbiAgICAnSW90YSc6IDkyMSxcbiAgICAnS2FwcGEnOiA5MjIsXG4gICAgJ0xhbWJkYSc6IDkyMyxcbiAgICAnTXUnOiA5MjQsXG4gICAgJ051JzogOTI1LFxuICAgICdYaSc6IDkyNixcbiAgICAnT21pY3Jvbic6IDkyNyxcbiAgICAnUGknOiA5MjgsXG4gICAgJ1Jobyc6IDkyOSxcbiAgICAnU2lnbWEnOiA5MzEsXG4gICAgJ1RhdSc6IDkzMixcbiAgICAnVXBzaWxvbic6IDkzMyxcbiAgICAnUGhpJzogOTM0LFxuICAgICdDaGknOiA5MzUsXG4gICAgJ1BzaSc6IDkzNixcbiAgICAnT21lZ2EnOiA5MzcsXG4gICAgJ2FscGhhJzogOTQ1LFxuICAgICdiZXRhJzogOTQ2LFxuICAgICdnYW1tYSc6IDk0NyxcbiAgICAnZGVsdGEnOiA5NDgsXG4gICAgJ2Vwc2lsb24nOiA5NDksXG4gICAgJ3pldGEnOiA5NTAsXG4gICAgJ2V0YSc6IDk1MSxcbiAgICAndGhldGEnOiA5NTIsXG4gICAgJ2lvdGEnOiA5NTMsXG4gICAgJ2thcHBhJzogOTU0LFxuICAgICdsYW1iZGEnOiA5NTUsXG4gICAgJ211JzogOTU2LFxuICAgICdudSc6IDk1NyxcbiAgICAneGknOiA5NTgsXG4gICAgJ29taWNyb24nOiA5NTksXG4gICAgJ3BpJzogOTYwLFxuICAgICdyaG8nOiA5NjEsXG4gICAgJ3NpZ21hZic6IDk2MixcbiAgICAnc2lnbWEnOiA5NjMsXG4gICAgJ3RhdSc6IDk2NCxcbiAgICAndXBzaWxvbic6IDk2NSxcbiAgICAncGhpJzogOTY2LFxuICAgICdjaGknOiA5NjcsXG4gICAgJ3BzaSc6IDk2OCxcbiAgICAnb21lZ2EnOiA5NjksXG4gICAgJ3RoZXRhc3ltJzogOTc3LFxuICAgICd1cHNpaCc6IDk3OCxcbiAgICAncGl2JzogOTgyLFxuICAgICdlbnNwJzogODE5NCxcbiAgICAnZW1zcCc6IDgxOTUsXG4gICAgJ3RoaW5zcCc6IDgyMDEsXG4gICAgJ3p3bmonOiA4MjA0LFxuICAgICd6d2onOiA4MjA1LFxuICAgICdscm0nOiA4MjA2LFxuICAgICdybG0nOiA4MjA3LFxuICAgICduZGFzaCc6IDgyMTEsXG4gICAgJ21kYXNoJzogODIxMixcbiAgICAnbHNxdW8nOiA4MjE2LFxuICAgICdyc3F1byc6IDgyMTcsXG4gICAgJ3NicXVvJzogODIxOCxcbiAgICAnbGRxdW8nOiA4MjIwLFxuICAgICdyZHF1byc6IDgyMjEsXG4gICAgJ2JkcXVvJzogODIyMixcbiAgICAnZGFnZ2VyJzogODIyNCxcbiAgICAnRGFnZ2VyJzogODIyNSxcbiAgICAnYnVsbCc6IDgyMjYsXG4gICAgJ2hlbGxpcCc6IDgyMzAsXG4gICAgJ3Blcm1pbCc6IDgyNDAsXG4gICAgJ3ByaW1lJzogODI0MixcbiAgICAnUHJpbWUnOiA4MjQzLFxuICAgICdsc2FxdW8nOiA4MjQ5LFxuICAgICdyc2FxdW8nOiA4MjUwLFxuICAgICdvbGluZSc6IDgyNTQsXG4gICAgJ2ZyYXNsJzogODI2MCxcbiAgICAnZXVybyc6IDgzNjQsXG4gICAgJ2ltYWdlJzogODQ2NSxcbiAgICAnd2VpZXJwJzogODQ3MixcbiAgICAncmVhbCc6IDg0NzYsXG4gICAgJ3RyYWRlJzogODQ4MixcbiAgICAnYWxlZnN5bSc6IDg1MDEsXG4gICAgJ2xhcnInOiA4NTkyLFxuICAgICd1YXJyJzogODU5MyxcbiAgICAncmFycic6IDg1OTQsXG4gICAgJ2RhcnInOiA4NTk1LFxuICAgICdoYXJyJzogODU5NixcbiAgICAnY3JhcnInOiA4NjI5LFxuICAgICdsQXJyJzogODY1NixcbiAgICAndUFycic6IDg2NTcsXG4gICAgJ3JBcnInOiA4NjU4LFxuICAgICdkQXJyJzogODY1OSxcbiAgICAnaEFycic6IDg2NjAsXG4gICAgJ2ZvcmFsbCc6IDg3MDQsXG4gICAgJ3BhcnQnOiA4NzA2LFxuICAgICdleGlzdCc6IDg3MDcsXG4gICAgJ2VtcHR5JzogODcwOSxcbiAgICAnbmFibGEnOiA4NzExLFxuICAgICdpc2luJzogODcxMixcbiAgICAnbm90aW4nOiA4NzEzLFxuICAgICduaSc6IDg3MTUsXG4gICAgJ3Byb2QnOiA4NzE5LFxuICAgICdzdW0nOiA4NzIxLFxuICAgICdtaW51cyc6IDg3MjIsXG4gICAgJ2xvd2FzdCc6IDg3MjcsXG4gICAgJ3JhZGljJzogODczMCxcbiAgICAncHJvcCc6IDg3MzMsXG4gICAgJ2luZmluJzogODczNCxcbiAgICAnYW5nJzogODczNixcbiAgICAnYW5kJzogODc0MyxcbiAgICAnb3InOiA4NzQ0LFxuICAgICdjYXAnOiA4NzQ1LFxuICAgICdjdXAnOiA4NzQ2LFxuICAgICdpbnQnOiA4NzQ3LFxuICAgICd0aGVyZTQnOiA4NzU2LFxuICAgICdzaW0nOiA4NzY0LFxuICAgICdjb25nJzogODc3MyxcbiAgICAnYXN5bXAnOiA4Nzc2LFxuICAgICduZSc6IDg4MDAsXG4gICAgJ2VxdWl2JzogODgwMSxcbiAgICAnbGUnOiA4ODA0LFxuICAgICdnZSc6IDg4MDUsXG4gICAgJ3N1Yic6IDg4MzQsXG4gICAgJ3N1cCc6IDg4MzUsXG4gICAgJ25zdWInOiA4ODM2LFxuICAgICdzdWJlJzogODgzOCxcbiAgICAnc3VwZSc6IDg4MzksXG4gICAgJ29wbHVzJzogODg1MyxcbiAgICAnb3RpbWVzJzogODg1NSxcbiAgICAncGVycCc6IDg4NjksXG4gICAgJ3Nkb3QnOiA4OTAxLFxuICAgICdsY2VpbCc6IDg5NjgsXG4gICAgJ3JjZWlsJzogODk2OSxcbiAgICAnbGZsb29yJzogODk3MCxcbiAgICAncmZsb29yJzogODk3MSxcbiAgICAnbGFuZyc6IDkwMDEsXG4gICAgJ3JhbmcnOiA5MDAyLFxuICAgICdsb3onOiA5Njc0LFxuICAgICdzcGFkZXMnOiA5ODI0LFxuICAgICdjbHVicyc6IDk4MjcsXG4gICAgJ2hlYXJ0cyc6IDk4MjksXG4gICAgJ2RpYW1zJzogOTgzMFxuICB9XG5cbiAgT2JqZWN0LmtleXMoc2F4LkVOVElUSUVTKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgZSA9IHNheC5FTlRJVElFU1trZXldXG4gICAgdmFyIHMgPSB0eXBlb2YgZSA9PT0gJ251bWJlcicgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKGUpIDogZVxuICAgIHNheC5FTlRJVElFU1trZXldID0gc1xuICB9KVxuXG4gIGZvciAodmFyIHMgaW4gc2F4LlNUQVRFKSB7XG4gICAgc2F4LlNUQVRFW3NheC5TVEFURVtzXV0gPSBzXG4gIH1cblxuICAvLyBzaG9ydGhhbmRcbiAgUyA9IHNheC5TVEFURVxuXG4gIGZ1bmN0aW9uIGVtaXQgKHBhcnNlciwgZXZlbnQsIGRhdGEpIHtcbiAgICBwYXJzZXJbZXZlbnRdICYmIHBhcnNlcltldmVudF0oZGF0YSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGVtaXROb2RlIChwYXJzZXIsIG5vZGVUeXBlLCBkYXRhKSB7XG4gICAgaWYgKHBhcnNlci50ZXh0Tm9kZSkgY2xvc2VUZXh0KHBhcnNlcilcbiAgICBlbWl0KHBhcnNlciwgbm9kZVR5cGUsIGRhdGEpXG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZVRleHQgKHBhcnNlcikge1xuICAgIHBhcnNlci50ZXh0Tm9kZSA9IHRleHRvcHRzKHBhcnNlci5vcHQsIHBhcnNlci50ZXh0Tm9kZSlcbiAgICBpZiAocGFyc2VyLnRleHROb2RlKSBlbWl0KHBhcnNlciwgJ29udGV4dCcsIHBhcnNlci50ZXh0Tm9kZSlcbiAgICBwYXJzZXIudGV4dE5vZGUgPSAnJ1xuICB9XG5cbiAgZnVuY3Rpb24gdGV4dG9wdHMgKG9wdCwgdGV4dCkge1xuICAgIGlmIChvcHQudHJpbSkgdGV4dCA9IHRleHQudHJpbSgpXG4gICAgaWYgKG9wdC5ub3JtYWxpemUpIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xccysvZywgJyAnKVxuICAgIHJldHVybiB0ZXh0XG4gIH1cblxuICBmdW5jdGlvbiBlcnJvciAocGFyc2VyLCBlcikge1xuICAgIGNsb3NlVGV4dChwYXJzZXIpXG4gICAgaWYgKHBhcnNlci50cmFja1Bvc2l0aW9uKSB7XG4gICAgICBlciArPSAnXFxuTGluZTogJyArIHBhcnNlci5saW5lICtcbiAgICAgICAgJ1xcbkNvbHVtbjogJyArIHBhcnNlci5jb2x1bW4gK1xuICAgICAgICAnXFxuQ2hhcjogJyArIHBhcnNlci5jXG4gICAgfVxuICAgIGVyID0gbmV3IEVycm9yKGVyKVxuICAgIHBhcnNlci5lcnJvciA9IGVyXG4gICAgZW1pdChwYXJzZXIsICdvbmVycm9yJywgZXIpXG4gICAgcmV0dXJuIHBhcnNlclxuICB9XG5cbiAgZnVuY3Rpb24gZW5kIChwYXJzZXIpIHtcbiAgICBpZiAocGFyc2VyLnNhd1Jvb3QgJiYgIXBhcnNlci5jbG9zZWRSb290KSBzdHJpY3RGYWlsKHBhcnNlciwgJ1VuY2xvc2VkIHJvb3QgdGFnJylcbiAgICBpZiAoKHBhcnNlci5zdGF0ZSAhPT0gUy5CRUdJTikgJiZcbiAgICAgIChwYXJzZXIuc3RhdGUgIT09IFMuQkVHSU5fV0hJVEVTUEFDRSkgJiZcbiAgICAgIChwYXJzZXIuc3RhdGUgIT09IFMuVEVYVCkpIHtcbiAgICAgIGVycm9yKHBhcnNlciwgJ1VuZXhwZWN0ZWQgZW5kJylcbiAgICB9XG4gICAgY2xvc2VUZXh0KHBhcnNlcilcbiAgICBwYXJzZXIuYyA9ICcnXG4gICAgcGFyc2VyLmNsb3NlZCA9IHRydWVcbiAgICBlbWl0KHBhcnNlciwgJ29uZW5kJylcbiAgICBTQVhQYXJzZXIuY2FsbChwYXJzZXIsIHBhcnNlci5zdHJpY3QsIHBhcnNlci5vcHQpXG4gICAgcmV0dXJuIHBhcnNlclxuICB9XG5cbiAgZnVuY3Rpb24gc3RyaWN0RmFpbCAocGFyc2VyLCBtZXNzYWdlKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJzZXIgIT09ICdvYmplY3QnIHx8ICEocGFyc2VyIGluc3RhbmNlb2YgU0FYUGFyc2VyKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdiYWQgY2FsbCB0byBzdHJpY3RGYWlsJylcbiAgICB9XG4gICAgaWYgKHBhcnNlci5zdHJpY3QpIHtcbiAgICAgIGVycm9yKHBhcnNlciwgbWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBuZXdUYWcgKHBhcnNlcikge1xuICAgIGlmICghcGFyc2VyLnN0cmljdCkgcGFyc2VyLnRhZ05hbWUgPSBwYXJzZXIudGFnTmFtZVtwYXJzZXIubG9vc2VDYXNlXSgpXG4gICAgdmFyIHBhcmVudCA9IHBhcnNlci50YWdzW3BhcnNlci50YWdzLmxlbmd0aCAtIDFdIHx8IHBhcnNlclxuICAgIHZhciB0YWcgPSBwYXJzZXIudGFnID0geyBuYW1lOiBwYXJzZXIudGFnTmFtZSwgYXR0cmlidXRlczoge30gfVxuXG4gICAgLy8gd2lsbCBiZSBvdmVycmlkZGVuIGlmIHRhZyBjb250YWlscyBhbiB4bWxucz1cImZvb1wiIG9yIHhtbG5zOmZvbz1cImJhclwiXG4gICAgaWYgKHBhcnNlci5vcHQueG1sbnMpIHtcbiAgICAgIHRhZy5ucyA9IHBhcmVudC5uc1xuICAgIH1cbiAgICBwYXJzZXIuYXR0cmliTGlzdC5sZW5ndGggPSAwXG4gICAgZW1pdE5vZGUocGFyc2VyLCAnb25vcGVudGFnc3RhcnQnLCB0YWcpXG4gIH1cblxuICBmdW5jdGlvbiBxbmFtZSAobmFtZSwgYXR0cmlidXRlKSB7XG4gICAgdmFyIGkgPSBuYW1lLmluZGV4T2YoJzonKVxuICAgIHZhciBxdWFsTmFtZSA9IGkgPCAwID8gWyAnJywgbmFtZSBdIDogbmFtZS5zcGxpdCgnOicpXG4gICAgdmFyIHByZWZpeCA9IHF1YWxOYW1lWzBdXG4gICAgdmFyIGxvY2FsID0gcXVhbE5hbWVbMV1cblxuICAgIC8vIDx4IFwieG1sbnNcIj1cImh0dHA6Ly9mb29cIj5cbiAgICBpZiAoYXR0cmlidXRlICYmIG5hbWUgPT09ICd4bWxucycpIHtcbiAgICAgIHByZWZpeCA9ICd4bWxucydcbiAgICAgIGxvY2FsID0gJydcbiAgICB9XG5cbiAgICByZXR1cm4geyBwcmVmaXg6IHByZWZpeCwgbG9jYWw6IGxvY2FsIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dHJpYiAocGFyc2VyKSB7XG4gICAgaWYgKCFwYXJzZXIuc3RyaWN0KSB7XG4gICAgICBwYXJzZXIuYXR0cmliTmFtZSA9IHBhcnNlci5hdHRyaWJOYW1lW3BhcnNlci5sb29zZUNhc2VdKClcbiAgICB9XG5cbiAgICBpZiAocGFyc2VyLmF0dHJpYkxpc3QuaW5kZXhPZihwYXJzZXIuYXR0cmliTmFtZSkgIT09IC0xIHx8XG4gICAgICBwYXJzZXIudGFnLmF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkocGFyc2VyLmF0dHJpYk5hbWUpKSB7XG4gICAgICBwYXJzZXIuYXR0cmliTmFtZSA9IHBhcnNlci5hdHRyaWJWYWx1ZSA9ICcnXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocGFyc2VyLm9wdC54bWxucykge1xuICAgICAgdmFyIHFuID0gcW5hbWUocGFyc2VyLmF0dHJpYk5hbWUsIHRydWUpXG4gICAgICB2YXIgcHJlZml4ID0gcW4ucHJlZml4XG4gICAgICB2YXIgbG9jYWwgPSBxbi5sb2NhbFxuXG4gICAgICBpZiAocHJlZml4ID09PSAneG1sbnMnKSB7XG4gICAgICAgIC8vIG5hbWVzcGFjZSBiaW5kaW5nIGF0dHJpYnV0ZS4gcHVzaCB0aGUgYmluZGluZyBpbnRvIHNjb3BlXG4gICAgICAgIGlmIChsb2NhbCA9PT0gJ3htbCcgJiYgcGFyc2VyLmF0dHJpYlZhbHVlICE9PSBYTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgc3RyaWN0RmFpbChwYXJzZXIsXG4gICAgICAgICAgICAneG1sOiBwcmVmaXggbXVzdCBiZSBib3VuZCB0byAnICsgWE1MX05BTUVTUEFDRSArICdcXG4nICtcbiAgICAgICAgICAgICdBY3R1YWw6ICcgKyBwYXJzZXIuYXR0cmliVmFsdWUpXG4gICAgICAgIH0gZWxzZSBpZiAobG9jYWwgPT09ICd4bWxucycgJiYgcGFyc2VyLmF0dHJpYlZhbHVlICE9PSBYTUxOU19OQU1FU1BBQ0UpIHtcbiAgICAgICAgICBzdHJpY3RGYWlsKHBhcnNlcixcbiAgICAgICAgICAgICd4bWxuczogcHJlZml4IG11c3QgYmUgYm91bmQgdG8gJyArIFhNTE5TX05BTUVTUEFDRSArICdcXG4nICtcbiAgICAgICAgICAgICdBY3R1YWw6ICcgKyBwYXJzZXIuYXR0cmliVmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHRhZyA9IHBhcnNlci50YWdcbiAgICAgICAgICB2YXIgcGFyZW50ID0gcGFyc2VyLnRhZ3NbcGFyc2VyLnRhZ3MubGVuZ3RoIC0gMV0gfHwgcGFyc2VyXG4gICAgICAgICAgaWYgKHRhZy5ucyA9PT0gcGFyZW50Lm5zKSB7XG4gICAgICAgICAgICB0YWcubnMgPSBPYmplY3QuY3JlYXRlKHBhcmVudC5ucylcbiAgICAgICAgICB9XG4gICAgICAgICAgdGFnLm5zW2xvY2FsXSA9IHBhcnNlci5hdHRyaWJWYWx1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGRlZmVyIG9uYXR0cmlidXRlIGV2ZW50cyB1bnRpbCBhbGwgYXR0cmlidXRlcyBoYXZlIGJlZW4gc2VlblxuICAgICAgLy8gc28gYW55IG5ldyBiaW5kaW5ncyBjYW4gdGFrZSBlZmZlY3QuIHByZXNlcnZlIGF0dHJpYnV0ZSBvcmRlclxuICAgICAgLy8gc28gZGVmZXJyZWQgZXZlbnRzIGNhbiBiZSBlbWl0dGVkIGluIGRvY3VtZW50IG9yZGVyXG4gICAgICBwYXJzZXIuYXR0cmliTGlzdC5wdXNoKFtwYXJzZXIuYXR0cmliTmFtZSwgcGFyc2VyLmF0dHJpYlZhbHVlXSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW4gbm9uLXhtbG5zIG1vZGUsIHdlIGNhbiBlbWl0IHRoZSBldmVudCByaWdodCBhd2F5XG4gICAgICBwYXJzZXIudGFnLmF0dHJpYnV0ZXNbcGFyc2VyLmF0dHJpYk5hbWVdID0gcGFyc2VyLmF0dHJpYlZhbHVlXG4gICAgICBlbWl0Tm9kZShwYXJzZXIsICdvbmF0dHJpYnV0ZScsIHtcbiAgICAgICAgbmFtZTogcGFyc2VyLmF0dHJpYk5hbWUsXG4gICAgICAgIHZhbHVlOiBwYXJzZXIuYXR0cmliVmFsdWVcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcGFyc2VyLmF0dHJpYk5hbWUgPSBwYXJzZXIuYXR0cmliVmFsdWUgPSAnJ1xuICB9XG5cbiAgZnVuY3Rpb24gb3BlblRhZyAocGFyc2VyLCBzZWxmQ2xvc2luZykge1xuICAgIGlmIChwYXJzZXIub3B0LnhtbG5zKSB7XG4gICAgICAvLyBlbWl0IG5hbWVzcGFjZSBiaW5kaW5nIGV2ZW50c1xuICAgICAgdmFyIHRhZyA9IHBhcnNlci50YWdcblxuICAgICAgLy8gYWRkIG5hbWVzcGFjZSBpbmZvIHRvIHRhZ1xuICAgICAgdmFyIHFuID0gcW5hbWUocGFyc2VyLnRhZ05hbWUpXG4gICAgICB0YWcucHJlZml4ID0gcW4ucHJlZml4XG4gICAgICB0YWcubG9jYWwgPSBxbi5sb2NhbFxuICAgICAgdGFnLnVyaSA9IHRhZy5uc1txbi5wcmVmaXhdIHx8ICcnXG5cbiAgICAgIGlmICh0YWcucHJlZml4ICYmICF0YWcudXJpKSB7XG4gICAgICAgIHN0cmljdEZhaWwocGFyc2VyLCAnVW5ib3VuZCBuYW1lc3BhY2UgcHJlZml4OiAnICtcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShwYXJzZXIudGFnTmFtZSkpXG4gICAgICAgIHRhZy51cmkgPSBxbi5wcmVmaXhcbiAgICAgIH1cblxuICAgICAgdmFyIHBhcmVudCA9IHBhcnNlci50YWdzW3BhcnNlci50YWdzLmxlbmd0aCAtIDFdIHx8IHBhcnNlclxuICAgICAgaWYgKHRhZy5ucyAmJiBwYXJlbnQubnMgIT09IHRhZy5ucykge1xuICAgICAgICBPYmplY3Qua2V5cyh0YWcubnMpLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICBlbWl0Tm9kZShwYXJzZXIsICdvbm9wZW5uYW1lc3BhY2UnLCB7XG4gICAgICAgICAgICBwcmVmaXg6IHAsXG4gICAgICAgICAgICB1cmk6IHRhZy5uc1twXVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIGhhbmRsZSBkZWZlcnJlZCBvbmF0dHJpYnV0ZSBldmVudHNcbiAgICAgIC8vIE5vdGU6IGRvIG5vdCBhcHBseSBkZWZhdWx0IG5zIHRvIGF0dHJpYnV0ZXM6XG4gICAgICAvLyAgIGh0dHA6Ly93d3cudzMub3JnL1RSL1JFQy14bWwtbmFtZXMvI2RlZmF1bHRpbmdcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gcGFyc2VyLmF0dHJpYkxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBudiA9IHBhcnNlci5hdHRyaWJMaXN0W2ldXG4gICAgICAgIHZhciBuYW1lID0gbnZbMF1cbiAgICAgICAgdmFyIHZhbHVlID0gbnZbMV1cbiAgICAgICAgdmFyIHF1YWxOYW1lID0gcW5hbWUobmFtZSwgdHJ1ZSlcbiAgICAgICAgdmFyIHByZWZpeCA9IHF1YWxOYW1lLnByZWZpeFxuICAgICAgICB2YXIgbG9jYWwgPSBxdWFsTmFtZS5sb2NhbFxuICAgICAgICB2YXIgdXJpID0gcHJlZml4ID09PSAnJyA/ICcnIDogKHRhZy5uc1twcmVmaXhdIHx8ICcnKVxuICAgICAgICB2YXIgYSA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICBsb2NhbDogbG9jYWwsXG4gICAgICAgICAgdXJpOiB1cmlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHRoZXJlJ3MgYW55IGF0dHJpYnV0ZXMgd2l0aCBhbiB1bmRlZmluZWQgbmFtZXNwYWNlLFxuICAgICAgICAvLyB0aGVuIGZhaWwgb24gdGhlbSBub3cuXG4gICAgICAgIGlmIChwcmVmaXggJiYgcHJlZml4ICE9PSAneG1sbnMnICYmICF1cmkpIHtcbiAgICAgICAgICBzdHJpY3RGYWlsKHBhcnNlciwgJ1VuYm91bmQgbmFtZXNwYWNlIHByZWZpeDogJyArXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShwcmVmaXgpKVxuICAgICAgICAgIGEudXJpID0gcHJlZml4XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VyLnRhZy5hdHRyaWJ1dGVzW25hbWVdID0gYVxuICAgICAgICBlbWl0Tm9kZShwYXJzZXIsICdvbmF0dHJpYnV0ZScsIGEpXG4gICAgICB9XG4gICAgICBwYXJzZXIuYXR0cmliTGlzdC5sZW5ndGggPSAwXG4gICAgfVxuXG4gICAgcGFyc2VyLnRhZy5pc1NlbGZDbG9zaW5nID0gISFzZWxmQ2xvc2luZ1xuXG4gICAgLy8gcHJvY2VzcyB0aGUgdGFnXG4gICAgcGFyc2VyLnNhd1Jvb3QgPSB0cnVlXG4gICAgcGFyc2VyLnRhZ3MucHVzaChwYXJzZXIudGFnKVxuICAgIGVtaXROb2RlKHBhcnNlciwgJ29ub3BlbnRhZycsIHBhcnNlci50YWcpXG4gICAgaWYgKCFzZWxmQ2xvc2luZykge1xuICAgICAgLy8gc3BlY2lhbCBjYXNlIGZvciA8c2NyaXB0PiBpbiBub24tc3RyaWN0IG1vZGUuXG4gICAgICBpZiAoIXBhcnNlci5ub3NjcmlwdCAmJiBwYXJzZXIudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2NyaXB0Jykge1xuICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLlNDUklQVFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5URVhUXG4gICAgICB9XG4gICAgICBwYXJzZXIudGFnID0gbnVsbFxuICAgICAgcGFyc2VyLnRhZ05hbWUgPSAnJ1xuICAgIH1cbiAgICBwYXJzZXIuYXR0cmliTmFtZSA9IHBhcnNlci5hdHRyaWJWYWx1ZSA9ICcnXG4gICAgcGFyc2VyLmF0dHJpYkxpc3QubGVuZ3RoID0gMFxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VUYWcgKHBhcnNlcikge1xuICAgIGlmICghcGFyc2VyLnRhZ05hbWUpIHtcbiAgICAgIHN0cmljdEZhaWwocGFyc2VyLCAnV2VpcmQgZW1wdHkgY2xvc2UgdGFnLicpXG4gICAgICBwYXJzZXIudGV4dE5vZGUgKz0gJzwvPidcbiAgICAgIHBhcnNlci5zdGF0ZSA9IFMuVEVYVFxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHBhcnNlci5zY3JpcHQpIHtcbiAgICAgIGlmIChwYXJzZXIudGFnTmFtZSAhPT0gJ3NjcmlwdCcpIHtcbiAgICAgICAgcGFyc2VyLnNjcmlwdCArPSAnPC8nICsgcGFyc2VyLnRhZ05hbWUgKyAnPidcbiAgICAgICAgcGFyc2VyLnRhZ05hbWUgPSAnJ1xuICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLlNDUklQVFxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGVtaXROb2RlKHBhcnNlciwgJ29uc2NyaXB0JywgcGFyc2VyLnNjcmlwdClcbiAgICAgIHBhcnNlci5zY3JpcHQgPSAnJ1xuICAgIH1cblxuICAgIC8vIGZpcnN0IG1ha2Ugc3VyZSB0aGF0IHRoZSBjbG9zaW5nIHRhZyBhY3R1YWxseSBleGlzdHMuXG4gICAgLy8gPGE+PGI+PC9jPjwvYj48L2E+IHdpbGwgY2xvc2UgZXZlcnl0aGluZywgb3RoZXJ3aXNlLlxuICAgIHZhciB0ID0gcGFyc2VyLnRhZ3MubGVuZ3RoXG4gICAgdmFyIHRhZ05hbWUgPSBwYXJzZXIudGFnTmFtZVxuICAgIGlmICghcGFyc2VyLnN0cmljdCkge1xuICAgICAgdGFnTmFtZSA9IHRhZ05hbWVbcGFyc2VyLmxvb3NlQ2FzZV0oKVxuICAgIH1cbiAgICB2YXIgY2xvc2VUbyA9IHRhZ05hbWVcbiAgICB3aGlsZSAodC0tKSB7XG4gICAgICB2YXIgY2xvc2UgPSBwYXJzZXIudGFnc1t0XVxuICAgICAgaWYgKGNsb3NlLm5hbWUgIT09IGNsb3NlVG8pIHtcbiAgICAgICAgLy8gZmFpbCB0aGUgZmlyc3QgdGltZSBpbiBzdHJpY3QgbW9kZVxuICAgICAgICBzdHJpY3RGYWlsKHBhcnNlciwgJ1VuZXhwZWN0ZWQgY2xvc2UgdGFnJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZGlkbid0IGZpbmQgaXQuICB3ZSBhbHJlYWR5IGZhaWxlZCBmb3Igc3RyaWN0LCBzbyBqdXN0IGFib3J0LlxuICAgIGlmICh0IDwgMCkge1xuICAgICAgc3RyaWN0RmFpbChwYXJzZXIsICdVbm1hdGNoZWQgY2xvc2luZyB0YWc6ICcgKyBwYXJzZXIudGFnTmFtZSlcbiAgICAgIHBhcnNlci50ZXh0Tm9kZSArPSAnPC8nICsgcGFyc2VyLnRhZ05hbWUgKyAnPidcbiAgICAgIHBhcnNlci5zdGF0ZSA9IFMuVEVYVFxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHBhcnNlci50YWdOYW1lID0gdGFnTmFtZVxuICAgIHZhciBzID0gcGFyc2VyLnRhZ3MubGVuZ3RoXG4gICAgd2hpbGUgKHMtLSA+IHQpIHtcbiAgICAgIHZhciB0YWcgPSBwYXJzZXIudGFnID0gcGFyc2VyLnRhZ3MucG9wKClcbiAgICAgIHBhcnNlci50YWdOYW1lID0gcGFyc2VyLnRhZy5uYW1lXG4gICAgICBlbWl0Tm9kZShwYXJzZXIsICdvbmNsb3NldGFnJywgcGFyc2VyLnRhZ05hbWUpXG5cbiAgICAgIHZhciB4ID0ge31cbiAgICAgIGZvciAodmFyIGkgaW4gdGFnLm5zKSB7XG4gICAgICAgIHhbaV0gPSB0YWcubnNbaV1cbiAgICAgIH1cblxuICAgICAgdmFyIHBhcmVudCA9IHBhcnNlci50YWdzW3BhcnNlci50YWdzLmxlbmd0aCAtIDFdIHx8IHBhcnNlclxuICAgICAgaWYgKHBhcnNlci5vcHQueG1sbnMgJiYgdGFnLm5zICE9PSBwYXJlbnQubnMpIHtcbiAgICAgICAgLy8gcmVtb3ZlIG5hbWVzcGFjZSBiaW5kaW5ncyBpbnRyb2R1Y2VkIGJ5IHRhZ1xuICAgICAgICBPYmplY3Qua2V5cyh0YWcubnMpLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICB2YXIgbiA9IHRhZy5uc1twXVxuICAgICAgICAgIGVtaXROb2RlKHBhcnNlciwgJ29uY2xvc2VuYW1lc3BhY2UnLCB7IHByZWZpeDogcCwgdXJpOiBuIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0ID09PSAwKSBwYXJzZXIuY2xvc2VkUm9vdCA9IHRydWVcbiAgICBwYXJzZXIudGFnTmFtZSA9IHBhcnNlci5hdHRyaWJWYWx1ZSA9IHBhcnNlci5hdHRyaWJOYW1lID0gJydcbiAgICBwYXJzZXIuYXR0cmliTGlzdC5sZW5ndGggPSAwXG4gICAgcGFyc2VyLnN0YXRlID0gUy5URVhUXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUVudGl0eSAocGFyc2VyKSB7XG4gICAgdmFyIGVudGl0eSA9IHBhcnNlci5lbnRpdHlcbiAgICB2YXIgZW50aXR5TEMgPSBlbnRpdHkudG9Mb3dlckNhc2UoKVxuICAgIHZhciBudW1cbiAgICB2YXIgbnVtU3RyID0gJydcblxuICAgIGlmIChwYXJzZXIuRU5USVRJRVNbZW50aXR5XSkge1xuICAgICAgcmV0dXJuIHBhcnNlci5FTlRJVElFU1tlbnRpdHldXG4gICAgfVxuICAgIGlmIChwYXJzZXIuRU5USVRJRVNbZW50aXR5TENdKSB7XG4gICAgICByZXR1cm4gcGFyc2VyLkVOVElUSUVTW2VudGl0eUxDXVxuICAgIH1cbiAgICBlbnRpdHkgPSBlbnRpdHlMQ1xuICAgIGlmIChlbnRpdHkuY2hhckF0KDApID09PSAnIycpIHtcbiAgICAgIGlmIChlbnRpdHkuY2hhckF0KDEpID09PSAneCcpIHtcbiAgICAgICAgZW50aXR5ID0gZW50aXR5LnNsaWNlKDIpXG4gICAgICAgIG51bSA9IHBhcnNlSW50KGVudGl0eSwgMTYpXG4gICAgICAgIG51bVN0ciA9IG51bS50b1N0cmluZygxNilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVudGl0eSA9IGVudGl0eS5zbGljZSgxKVxuICAgICAgICBudW0gPSBwYXJzZUludChlbnRpdHksIDEwKVxuICAgICAgICBudW1TdHIgPSBudW0udG9TdHJpbmcoMTApXG4gICAgICB9XG4gICAgfVxuICAgIGVudGl0eSA9IGVudGl0eS5yZXBsYWNlKC9eMCsvLCAnJylcbiAgICBpZiAoaXNOYU4obnVtKSB8fCBudW1TdHIudG9Mb3dlckNhc2UoKSAhPT0gZW50aXR5KSB7XG4gICAgICBzdHJpY3RGYWlsKHBhcnNlciwgJ0ludmFsaWQgY2hhcmFjdGVyIGVudGl0eScpXG4gICAgICByZXR1cm4gJyYnICsgcGFyc2VyLmVudGl0eSArICc7J1xuICAgIH1cblxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNvZGVQb2ludChudW0pXG4gIH1cblxuICBmdW5jdGlvbiBiZWdpbldoaXRlU3BhY2UgKHBhcnNlciwgYykge1xuICAgIGlmIChjID09PSAnPCcpIHtcbiAgICAgIHBhcnNlci5zdGF0ZSA9IFMuT1BFTl9XQUtBXG4gICAgICBwYXJzZXIuc3RhcnRUYWdQb3NpdGlvbiA9IHBhcnNlci5wb3NpdGlvblxuICAgIH0gZWxzZSBpZiAoIWlzV2hpdGVzcGFjZShjKSkge1xuICAgICAgLy8gaGF2ZSB0byBwcm9jZXNzIHRoaXMgYXMgYSB0ZXh0IG5vZGUuXG4gICAgICAvLyB3ZWlyZCwgYnV0IGhhcHBlbnMuXG4gICAgICBzdHJpY3RGYWlsKHBhcnNlciwgJ05vbi13aGl0ZXNwYWNlIGJlZm9yZSBmaXJzdCB0YWcuJylcbiAgICAgIHBhcnNlci50ZXh0Tm9kZSA9IGNcbiAgICAgIHBhcnNlci5zdGF0ZSA9IFMuVEVYVFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYXJBdCAoY2h1bmssIGkpIHtcbiAgICB2YXIgcmVzdWx0ID0gJydcbiAgICBpZiAoaSA8IGNodW5rLmxlbmd0aCkge1xuICAgICAgcmVzdWx0ID0gY2h1bmsuY2hhckF0KGkpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyaXRlIChjaHVuaykge1xuICAgIHZhciBwYXJzZXIgPSB0aGlzXG4gICAgaWYgKHRoaXMuZXJyb3IpIHtcbiAgICAgIHRocm93IHRoaXMuZXJyb3JcbiAgICB9XG4gICAgaWYgKHBhcnNlci5jbG9zZWQpIHtcbiAgICAgIHJldHVybiBlcnJvcihwYXJzZXIsXG4gICAgICAgICdDYW5ub3Qgd3JpdGUgYWZ0ZXIgY2xvc2UuIEFzc2lnbiBhbiBvbnJlYWR5IGhhbmRsZXIuJylcbiAgICB9XG4gICAgaWYgKGNodW5rID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZW5kKHBhcnNlcilcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjaHVuayA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNodW5rID0gY2h1bmsudG9TdHJpbmcoKVxuICAgIH1cbiAgICB2YXIgaSA9IDBcbiAgICB2YXIgYyA9ICcnXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGMgPSBjaGFyQXQoY2h1bmssIGkrKylcbiAgICAgIHBhcnNlci5jID0gY1xuXG4gICAgICBpZiAoIWMpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcnNlci50cmFja1Bvc2l0aW9uKSB7XG4gICAgICAgIHBhcnNlci5wb3NpdGlvbisrXG4gICAgICAgIGlmIChjID09PSAnXFxuJykge1xuICAgICAgICAgIHBhcnNlci5saW5lKytcbiAgICAgICAgICBwYXJzZXIuY29sdW1uID0gMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcnNlci5jb2x1bW4rK1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAocGFyc2VyLnN0YXRlKSB7XG4gICAgICAgIGNhc2UgUy5CRUdJTjpcbiAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkJFR0lOX1dISVRFU1BBQ0VcbiAgICAgICAgICBpZiAoYyA9PT0gJ1xcdUZFRkYnKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBiZWdpbldoaXRlU3BhY2UocGFyc2VyLCBjKVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLkJFR0lOX1dISVRFU1BBQ0U6XG4gICAgICAgICAgYmVnaW5XaGl0ZVNwYWNlKHBhcnNlciwgYylcbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgUy5URVhUOlxuICAgICAgICAgIGlmIChwYXJzZXIuc2F3Um9vdCAmJiAhcGFyc2VyLmNsb3NlZFJvb3QpIHtcbiAgICAgICAgICAgIHZhciBzdGFydGkgPSBpIC0gMVxuICAgICAgICAgICAgd2hpbGUgKGMgJiYgYyAhPT0gJzwnICYmIGMgIT09ICcmJykge1xuICAgICAgICAgICAgICBjID0gY2hhckF0KGNodW5rLCBpKyspXG4gICAgICAgICAgICAgIGlmIChjICYmIHBhcnNlci50cmFja1Bvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VyLnBvc2l0aW9uKytcbiAgICAgICAgICAgICAgICBpZiAoYyA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgIHBhcnNlci5saW5lKytcbiAgICAgICAgICAgICAgICAgIHBhcnNlci5jb2x1bW4gPSAwXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHBhcnNlci5jb2x1bW4rK1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyc2VyLnRleHROb2RlICs9IGNodW5rLnN1YnN0cmluZyhzdGFydGksIGkgLSAxKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYyA9PT0gJzwnICYmICEocGFyc2VyLnNhd1Jvb3QgJiYgcGFyc2VyLmNsb3NlZFJvb3QgJiYgIXBhcnNlci5zdHJpY3QpKSB7XG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLk9QRU5fV0FLQVxuICAgICAgICAgICAgcGFyc2VyLnN0YXJ0VGFnUG9zaXRpb24gPSBwYXJzZXIucG9zaXRpb25cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFpc1doaXRlc3BhY2UoYykgJiYgKCFwYXJzZXIuc2F3Um9vdCB8fCBwYXJzZXIuY2xvc2VkUm9vdCkpIHtcbiAgICAgICAgICAgICAgc3RyaWN0RmFpbChwYXJzZXIsICdUZXh0IGRhdGEgb3V0c2lkZSBvZiByb290IG5vZGUuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjID09PSAnJicpIHtcbiAgICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5URVhUX0VOVElUWVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFyc2VyLnRleHROb2RlICs9IGNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuU0NSSVBUOlxuICAgICAgICAgIC8vIG9ubHkgbm9uLXN0cmljdFxuICAgICAgICAgIGlmIChjID09PSAnPCcpIHtcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuU0NSSVBUX0VORElOR1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZXIuc2NyaXB0ICs9IGNcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuU0NSSVBUX0VORElORzpcbiAgICAgICAgICBpZiAoYyA9PT0gJy8nKSB7XG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkNMT1NFX1RBR1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZXIuc2NyaXB0ICs9ICc8JyArIGNcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuU0NSSVBUXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLk9QRU5fV0FLQTpcbiAgICAgICAgICAvLyBlaXRoZXIgYSAvLCA/LCAhLCBvciB0ZXh0IGlzIGNvbWluZyBuZXh0LlxuICAgICAgICAgIGlmIChjID09PSAnIScpIHtcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuU0dNTF9ERUNMXG4gICAgICAgICAgICBwYXJzZXIuc2dtbERlY2wgPSAnJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNXaGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICAvLyB3YWl0IGZvciBpdC4uLlxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNNYXRjaChuYW1lU3RhcnQsIGMpKSB7XG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLk9QRU5fVEFHXG4gICAgICAgICAgICBwYXJzZXIudGFnTmFtZSA9IGNcbiAgICAgICAgICB9IGVsc2UgaWYgKGMgPT09ICcvJykge1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5DTE9TRV9UQUdcbiAgICAgICAgICAgIHBhcnNlci50YWdOYW1lID0gJydcbiAgICAgICAgICB9IGVsc2UgaWYgKGMgPT09ICc/Jykge1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5QUk9DX0lOU1RcbiAgICAgICAgICAgIHBhcnNlci5wcm9jSW5zdE5hbWUgPSBwYXJzZXIucHJvY0luc3RCb2R5ID0gJydcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyaWN0RmFpbChwYXJzZXIsICdVbmVuY29kZWQgPCcpXG4gICAgICAgICAgICAvLyBpZiB0aGVyZSB3YXMgc29tZSB3aGl0ZXNwYWNlLCB0aGVuIGFkZCB0aGF0IGluLlxuICAgICAgICAgICAgaWYgKHBhcnNlci5zdGFydFRhZ1Bvc2l0aW9uICsgMSA8IHBhcnNlci5wb3NpdGlvbikge1xuICAgICAgICAgICAgICB2YXIgcGFkID0gcGFyc2VyLnBvc2l0aW9uIC0gcGFyc2VyLnN0YXJ0VGFnUG9zaXRpb25cbiAgICAgICAgICAgICAgYyA9IG5ldyBBcnJheShwYWQpLmpvaW4oJyAnKSArIGNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnNlci50ZXh0Tm9kZSArPSAnPCcgKyBjXG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLlRFWFRcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuU0dNTF9ERUNMOlxuICAgICAgICAgIGlmICgocGFyc2VyLnNnbWxEZWNsICsgYykudG9VcHBlckNhc2UoKSA9PT0gQ0RBVEEpIHtcbiAgICAgICAgICAgIGVtaXROb2RlKHBhcnNlciwgJ29ub3BlbmNkYXRhJylcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuQ0RBVEFcbiAgICAgICAgICAgIHBhcnNlci5zZ21sRGVjbCA9ICcnXG4gICAgICAgICAgICBwYXJzZXIuY2RhdGEgPSAnJ1xuICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VyLnNnbWxEZWNsICsgYyA9PT0gJy0tJykge1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5DT01NRU5UXG4gICAgICAgICAgICBwYXJzZXIuY29tbWVudCA9ICcnXG4gICAgICAgICAgICBwYXJzZXIuc2dtbERlY2wgPSAnJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoKHBhcnNlci5zZ21sRGVjbCArIGMpLnRvVXBwZXJDYXNlKCkgPT09IERPQ1RZUEUpIHtcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuRE9DVFlQRVxuICAgICAgICAgICAgaWYgKHBhcnNlci5kb2N0eXBlIHx8IHBhcnNlci5zYXdSb290KSB7XG4gICAgICAgICAgICAgIHN0cmljdEZhaWwocGFyc2VyLFxuICAgICAgICAgICAgICAgICdJbmFwcHJvcHJpYXRlbHkgbG9jYXRlZCBkb2N0eXBlIGRlY2xhcmF0aW9uJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnNlci5kb2N0eXBlID0gJydcbiAgICAgICAgICAgIHBhcnNlci5zZ21sRGVjbCA9ICcnXG4gICAgICAgICAgfSBlbHNlIGlmIChjID09PSAnPicpIHtcbiAgICAgICAgICAgIGVtaXROb2RlKHBhcnNlciwgJ29uc2dtbGRlY2xhcmF0aW9uJywgcGFyc2VyLnNnbWxEZWNsKVxuICAgICAgICAgICAgcGFyc2VyLnNnbWxEZWNsID0gJydcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuVEVYVFxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNRdW90ZShjKSkge1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5TR01MX0RFQ0xfUVVPVEVEXG4gICAgICAgICAgICBwYXJzZXIuc2dtbERlY2wgKz0gY1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZXIuc2dtbERlY2wgKz0gY1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgUy5TR01MX0RFQ0xfUVVPVEVEOlxuICAgICAgICAgIGlmIChjID09PSBwYXJzZXIucSkge1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5TR01MX0RFQ0xcbiAgICAgICAgICAgIHBhcnNlci5xID0gJydcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFyc2VyLnNnbWxEZWNsICs9IGNcbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgUy5ET0NUWVBFOlxuICAgICAgICAgIGlmIChjID09PSAnPicpIHtcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuVEVYVFxuICAgICAgICAgICAgZW1pdE5vZGUocGFyc2VyLCAnb25kb2N0eXBlJywgcGFyc2VyLmRvY3R5cGUpXG4gICAgICAgICAgICBwYXJzZXIuZG9jdHlwZSA9IHRydWUgLy8ganVzdCByZW1lbWJlciB0aGF0IHdlIHNhdyBpdC5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VyLmRvY3R5cGUgKz0gY1xuICAgICAgICAgICAgaWYgKGMgPT09ICdbJykge1xuICAgICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkRPQ1RZUEVfRFREXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzUXVvdGUoYykpIHtcbiAgICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5ET0NUWVBFX1FVT1RFRFxuICAgICAgICAgICAgICBwYXJzZXIucSA9IGNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuRE9DVFlQRV9RVU9URUQ6XG4gICAgICAgICAgcGFyc2VyLmRvY3R5cGUgKz0gY1xuICAgICAgICAgIGlmIChjID09PSBwYXJzZXIucSkge1xuICAgICAgICAgICAgcGFyc2VyLnEgPSAnJ1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5ET0NUWVBFXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLkRPQ1RZUEVfRFREOlxuICAgICAgICAgIHBhcnNlci5kb2N0eXBlICs9IGNcbiAgICAgICAgICBpZiAoYyA9PT0gJ10nKSB7XG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkRPQ1RZUEVcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzUXVvdGUoYykpIHtcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuRE9DVFlQRV9EVERfUVVPVEVEXG4gICAgICAgICAgICBwYXJzZXIucSA9IGNcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuRE9DVFlQRV9EVERfUVVPVEVEOlxuICAgICAgICAgIHBhcnNlci5kb2N0eXBlICs9IGNcbiAgICAgICAgICBpZiAoYyA9PT0gcGFyc2VyLnEpIHtcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuRE9DVFlQRV9EVERcbiAgICAgICAgICAgIHBhcnNlci5xID0gJydcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuQ09NTUVOVDpcbiAgICAgICAgICBpZiAoYyA9PT0gJy0nKSB7XG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkNPTU1FTlRfRU5ESU5HXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlci5jb21tZW50ICs9IGNcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuQ09NTUVOVF9FTkRJTkc6XG4gICAgICAgICAgaWYgKGMgPT09ICctJykge1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5DT01NRU5UX0VOREVEXG4gICAgICAgICAgICBwYXJzZXIuY29tbWVudCA9IHRleHRvcHRzKHBhcnNlci5vcHQsIHBhcnNlci5jb21tZW50KVxuICAgICAgICAgICAgaWYgKHBhcnNlci5jb21tZW50KSB7XG4gICAgICAgICAgICAgIGVtaXROb2RlKHBhcnNlciwgJ29uY29tbWVudCcsIHBhcnNlci5jb21tZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyc2VyLmNvbW1lbnQgPSAnJ1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZXIuY29tbWVudCArPSAnLScgKyBjXG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkNPTU1FTlRcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuQ09NTUVOVF9FTkRFRDpcbiAgICAgICAgICBpZiAoYyAhPT0gJz4nKSB7XG4gICAgICAgICAgICBzdHJpY3RGYWlsKHBhcnNlciwgJ01hbGZvcm1lZCBjb21tZW50JylcbiAgICAgICAgICAgIC8vIGFsbG93IDwhLS0gYmxhaCAtLSBibG9vIC0tPiBpbiBub24tc3RyaWN0IG1vZGUsXG4gICAgICAgICAgICAvLyB3aGljaCBpcyBhIGNvbW1lbnQgb2YgXCIgYmxhaCAtLSBibG9vIFwiXG4gICAgICAgICAgICBwYXJzZXIuY29tbWVudCArPSAnLS0nICsgY1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5DT01NRU5UXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuVEVYVFxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgUy5DREFUQTpcbiAgICAgICAgICBpZiAoYyA9PT0gJ10nKSB7XG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkNEQVRBX0VORElOR1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZXIuY2RhdGEgKz0gY1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgUy5DREFUQV9FTkRJTkc6XG4gICAgICAgICAgaWYgKGMgPT09ICddJykge1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5DREFUQV9FTkRJTkdfMlxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZXIuY2RhdGEgKz0gJ10nICsgY1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5DREFUQVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgUy5DREFUQV9FTkRJTkdfMjpcbiAgICAgICAgICBpZiAoYyA9PT0gJz4nKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VyLmNkYXRhKSB7XG4gICAgICAgICAgICAgIGVtaXROb2RlKHBhcnNlciwgJ29uY2RhdGEnLCBwYXJzZXIuY2RhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbWl0Tm9kZShwYXJzZXIsICdvbmNsb3NlY2RhdGEnKVxuICAgICAgICAgICAgcGFyc2VyLmNkYXRhID0gJydcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuVEVYVFxuICAgICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gJ10nKSB7XG4gICAgICAgICAgICBwYXJzZXIuY2RhdGEgKz0gJ10nXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlci5jZGF0YSArPSAnXV0nICsgY1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5DREFUQVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgUy5QUk9DX0lOU1Q6XG4gICAgICAgICAgaWYgKGMgPT09ICc/Jykge1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5QUk9DX0lOU1RfRU5ESU5HXG4gICAgICAgICAgfSBlbHNlIGlmIChpc1doaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuUFJPQ19JTlNUX0JPRFlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VyLnByb2NJbnN0TmFtZSArPSBjXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLlBST0NfSU5TVF9CT0RZOlxuICAgICAgICAgIGlmICghcGFyc2VyLnByb2NJbnN0Qm9keSAmJiBpc1doaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfSBlbHNlIGlmIChjID09PSAnPycpIHtcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuUFJPQ19JTlNUX0VORElOR1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZXIucHJvY0luc3RCb2R5ICs9IGNcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuUFJPQ19JTlNUX0VORElORzpcbiAgICAgICAgICBpZiAoYyA9PT0gJz4nKSB7XG4gICAgICAgICAgICBlbWl0Tm9kZShwYXJzZXIsICdvbnByb2Nlc3NpbmdpbnN0cnVjdGlvbicsIHtcbiAgICAgICAgICAgICAgbmFtZTogcGFyc2VyLnByb2NJbnN0TmFtZSxcbiAgICAgICAgICAgICAgYm9keTogcGFyc2VyLnByb2NJbnN0Qm9keVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHBhcnNlci5wcm9jSW5zdE5hbWUgPSBwYXJzZXIucHJvY0luc3RCb2R5ID0gJydcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuVEVYVFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZXIucHJvY0luc3RCb2R5ICs9ICc/JyArIGNcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuUFJPQ19JTlNUX0JPRFlcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuT1BFTl9UQUc6XG4gICAgICAgICAgaWYgKGlzTWF0Y2gobmFtZUJvZHksIGMpKSB7XG4gICAgICAgICAgICBwYXJzZXIudGFnTmFtZSArPSBjXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1RhZyhwYXJzZXIpXG4gICAgICAgICAgICBpZiAoYyA9PT0gJz4nKSB7XG4gICAgICAgICAgICAgIG9wZW5UYWcocGFyc2VyKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjID09PSAnLycpIHtcbiAgICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5PUEVOX1RBR19TTEFTSFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKCFpc1doaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgICAgICBzdHJpY3RGYWlsKHBhcnNlciwgJ0ludmFsaWQgY2hhcmFjdGVyIGluIHRhZyBuYW1lJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkFUVFJJQlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgUy5PUEVOX1RBR19TTEFTSDpcbiAgICAgICAgICBpZiAoYyA9PT0gJz4nKSB7XG4gICAgICAgICAgICBvcGVuVGFnKHBhcnNlciwgdHJ1ZSlcbiAgICAgICAgICAgIGNsb3NlVGFnKHBhcnNlcilcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyaWN0RmFpbChwYXJzZXIsICdGb3J3YXJkLXNsYXNoIGluIG9wZW5pbmcgdGFnIG5vdCBmb2xsb3dlZCBieSA+JylcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuQVRUUklCXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLkFUVFJJQjpcbiAgICAgICAgICAvLyBoYXZlbid0IHJlYWQgdGhlIGF0dHJpYnV0ZSBuYW1lIHlldC5cbiAgICAgICAgICBpZiAoaXNXaGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gJz4nKSB7XG4gICAgICAgICAgICBvcGVuVGFnKHBhcnNlcilcbiAgICAgICAgICB9IGVsc2UgaWYgKGMgPT09ICcvJykge1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5PUEVOX1RBR19TTEFTSFxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNNYXRjaChuYW1lU3RhcnQsIGMpKSB7XG4gICAgICAgICAgICBwYXJzZXIuYXR0cmliTmFtZSA9IGNcbiAgICAgICAgICAgIHBhcnNlci5hdHRyaWJWYWx1ZSA9ICcnXG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkFUVFJJQl9OQU1FXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0cmljdEZhaWwocGFyc2VyLCAnSW52YWxpZCBhdHRyaWJ1dGUgbmFtZScpXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLkFUVFJJQl9OQU1FOlxuICAgICAgICAgIGlmIChjID09PSAnPScpIHtcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuQVRUUklCX1ZBTFVFXG4gICAgICAgICAgfSBlbHNlIGlmIChjID09PSAnPicpIHtcbiAgICAgICAgICAgIHN0cmljdEZhaWwocGFyc2VyLCAnQXR0cmlidXRlIHdpdGhvdXQgdmFsdWUnKVxuICAgICAgICAgICAgcGFyc2VyLmF0dHJpYlZhbHVlID0gcGFyc2VyLmF0dHJpYk5hbWVcbiAgICAgICAgICAgIGF0dHJpYihwYXJzZXIpXG4gICAgICAgICAgICBvcGVuVGFnKHBhcnNlcilcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzV2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5BVFRSSUJfTkFNRV9TQVdfV0hJVEVcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzTWF0Y2gobmFtZUJvZHksIGMpKSB7XG4gICAgICAgICAgICBwYXJzZXIuYXR0cmliTmFtZSArPSBjXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0cmljdEZhaWwocGFyc2VyLCAnSW52YWxpZCBhdHRyaWJ1dGUgbmFtZScpXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLkFUVFJJQl9OQU1FX1NBV19XSElURTpcbiAgICAgICAgICBpZiAoYyA9PT0gJz0nKSB7XG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkFUVFJJQl9WQUxVRVxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNXaGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHJpY3RGYWlsKHBhcnNlciwgJ0F0dHJpYnV0ZSB3aXRob3V0IHZhbHVlJylcbiAgICAgICAgICAgIHBhcnNlci50YWcuYXR0cmlidXRlc1twYXJzZXIuYXR0cmliTmFtZV0gPSAnJ1xuICAgICAgICAgICAgcGFyc2VyLmF0dHJpYlZhbHVlID0gJydcbiAgICAgICAgICAgIGVtaXROb2RlKHBhcnNlciwgJ29uYXR0cmlidXRlJywge1xuICAgICAgICAgICAgICBuYW1lOiBwYXJzZXIuYXR0cmliTmFtZSxcbiAgICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcGFyc2VyLmF0dHJpYk5hbWUgPSAnJ1xuICAgICAgICAgICAgaWYgKGMgPT09ICc+Jykge1xuICAgICAgICAgICAgICBvcGVuVGFnKHBhcnNlcilcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNNYXRjaChuYW1lU3RhcnQsIGMpKSB7XG4gICAgICAgICAgICAgIHBhcnNlci5hdHRyaWJOYW1lID0gY1xuICAgICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkFUVFJJQl9OQU1FXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzdHJpY3RGYWlsKHBhcnNlciwgJ0ludmFsaWQgYXR0cmlidXRlIG5hbWUnKVxuICAgICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkFUVFJJQlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgUy5BVFRSSUJfVkFMVUU6XG4gICAgICAgICAgaWYgKGlzV2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzUXVvdGUoYykpIHtcbiAgICAgICAgICAgIHBhcnNlci5xID0gY1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5BVFRSSUJfVkFMVUVfUVVPVEVEXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0cmljdEZhaWwocGFyc2VyLCAnVW5xdW90ZWQgYXR0cmlidXRlIHZhbHVlJylcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuQVRUUklCX1ZBTFVFX1VOUVVPVEVEXG4gICAgICAgICAgICBwYXJzZXIuYXR0cmliVmFsdWUgPSBjXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLkFUVFJJQl9WQUxVRV9RVU9URUQ6XG4gICAgICAgICAgaWYgKGMgIT09IHBhcnNlci5xKSB7XG4gICAgICAgICAgICBpZiAoYyA9PT0gJyYnKSB7XG4gICAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuQVRUUklCX1ZBTFVFX0VOVElUWV9RXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJzZXIuYXR0cmliVmFsdWUgKz0gY1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG4gICAgICAgICAgYXR0cmliKHBhcnNlcilcbiAgICAgICAgICBwYXJzZXIucSA9ICcnXG4gICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5BVFRSSUJfVkFMVUVfQ0xPU0VEXG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuQVRUUklCX1ZBTFVFX0NMT1NFRDpcbiAgICAgICAgICBpZiAoaXNXaGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkFUVFJJQlxuICAgICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gJz4nKSB7XG4gICAgICAgICAgICBvcGVuVGFnKHBhcnNlcilcbiAgICAgICAgICB9IGVsc2UgaWYgKGMgPT09ICcvJykge1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5PUEVOX1RBR19TTEFTSFxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNNYXRjaChuYW1lU3RhcnQsIGMpKSB7XG4gICAgICAgICAgICBzdHJpY3RGYWlsKHBhcnNlciwgJ05vIHdoaXRlc3BhY2UgYmV0d2VlbiBhdHRyaWJ1dGVzJylcbiAgICAgICAgICAgIHBhcnNlci5hdHRyaWJOYW1lID0gY1xuICAgICAgICAgICAgcGFyc2VyLmF0dHJpYlZhbHVlID0gJydcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuQVRUUklCX05BTUVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyaWN0RmFpbChwYXJzZXIsICdJbnZhbGlkIGF0dHJpYnV0ZSBuYW1lJylcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuQVRUUklCX1ZBTFVFX1VOUVVPVEVEOlxuICAgICAgICAgIGlmICghaXNBdHRyaWJFbmQoYykpIHtcbiAgICAgICAgICAgIGlmIChjID09PSAnJicpIHtcbiAgICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5BVFRSSUJfVkFMVUVfRU5USVRZX1VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnNlci5hdHRyaWJWYWx1ZSArPSBjXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBhdHRyaWIocGFyc2VyKVxuICAgICAgICAgIGlmIChjID09PSAnPicpIHtcbiAgICAgICAgICAgIG9wZW5UYWcocGFyc2VyKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkFUVFJJQlxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgUy5DTE9TRV9UQUc6XG4gICAgICAgICAgaWYgKCFwYXJzZXIudGFnTmFtZSkge1xuICAgICAgICAgICAgaWYgKGlzV2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChub3RNYXRjaChuYW1lU3RhcnQsIGMpKSB7XG4gICAgICAgICAgICAgIGlmIChwYXJzZXIuc2NyaXB0KSB7XG4gICAgICAgICAgICAgICAgcGFyc2VyLnNjcmlwdCArPSAnPC8nICsgY1xuICAgICAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuU0NSSVBUXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RyaWN0RmFpbChwYXJzZXIsICdJbnZhbGlkIHRhZ25hbWUgaW4gY2xvc2luZyB0YWcuJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFyc2VyLnRhZ05hbWUgPSBjXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChjID09PSAnPicpIHtcbiAgICAgICAgICAgIGNsb3NlVGFnKHBhcnNlcilcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzTWF0Y2gobmFtZUJvZHksIGMpKSB7XG4gICAgICAgICAgICBwYXJzZXIudGFnTmFtZSArPSBjXG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJzZXIuc2NyaXB0KSB7XG4gICAgICAgICAgICBwYXJzZXIuc2NyaXB0ICs9ICc8LycgKyBwYXJzZXIudGFnTmFtZVxuICAgICAgICAgICAgcGFyc2VyLnRhZ05hbWUgPSAnJ1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5TQ1JJUFRcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFpc1doaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgICAgc3RyaWN0RmFpbChwYXJzZXIsICdJbnZhbGlkIHRhZ25hbWUgaW4gY2xvc2luZyB0YWcnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5DTE9TRV9UQUdfU0FXX1dISVRFXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLkNMT1NFX1RBR19TQVdfV0hJVEU6XG4gICAgICAgICAgaWYgKGlzV2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGMgPT09ICc+Jykge1xuICAgICAgICAgICAgY2xvc2VUYWcocGFyc2VyKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHJpY3RGYWlsKHBhcnNlciwgJ0ludmFsaWQgY2hhcmFjdGVycyBpbiBjbG9zaW5nIHRhZycpXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLlRFWFRfRU5USVRZOlxuICAgICAgICBjYXNlIFMuQVRUUklCX1ZBTFVFX0VOVElUWV9ROlxuICAgICAgICBjYXNlIFMuQVRUUklCX1ZBTFVFX0VOVElUWV9VOlxuICAgICAgICAgIHZhciByZXR1cm5TdGF0ZVxuICAgICAgICAgIHZhciBidWZmZXJcbiAgICAgICAgICBzd2l0Y2ggKHBhcnNlci5zdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBTLlRFWFRfRU5USVRZOlxuICAgICAgICAgICAgICByZXR1cm5TdGF0ZSA9IFMuVEVYVFxuICAgICAgICAgICAgICBidWZmZXIgPSAndGV4dE5vZGUnXG4gICAgICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgICAgIGNhc2UgUy5BVFRSSUJfVkFMVUVfRU5USVRZX1E6XG4gICAgICAgICAgICAgIHJldHVyblN0YXRlID0gUy5BVFRSSUJfVkFMVUVfUVVPVEVEXG4gICAgICAgICAgICAgIGJ1ZmZlciA9ICdhdHRyaWJWYWx1ZSdcbiAgICAgICAgICAgICAgYnJlYWtcblxuICAgICAgICAgICAgY2FzZSBTLkFUVFJJQl9WQUxVRV9FTlRJVFlfVTpcbiAgICAgICAgICAgICAgcmV0dXJuU3RhdGUgPSBTLkFUVFJJQl9WQUxVRV9VTlFVT1RFRFxuICAgICAgICAgICAgICBidWZmZXIgPSAnYXR0cmliVmFsdWUnXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGMgPT09ICc7Jykge1xuICAgICAgICAgICAgcGFyc2VyW2J1ZmZlcl0gKz0gcGFyc2VFbnRpdHkocGFyc2VyKVxuICAgICAgICAgICAgcGFyc2VyLmVudGl0eSA9ICcnXG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSByZXR1cm5TdGF0ZVxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNNYXRjaChwYXJzZXIuZW50aXR5Lmxlbmd0aCA/IGVudGl0eUJvZHkgOiBlbnRpdHlTdGFydCwgYykpIHtcbiAgICAgICAgICAgIHBhcnNlci5lbnRpdHkgKz0gY1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHJpY3RGYWlsKHBhcnNlciwgJ0ludmFsaWQgY2hhcmFjdGVyIGluIGVudGl0eSBuYW1lJylcbiAgICAgICAgICAgIHBhcnNlcltidWZmZXJdICs9ICcmJyArIHBhcnNlci5lbnRpdHkgKyBjXG4gICAgICAgICAgICBwYXJzZXIuZW50aXR5ID0gJydcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IHJldHVyblN0YXRlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihwYXJzZXIsICdVbmtub3duIHN0YXRlOiAnICsgcGFyc2VyLnN0YXRlKVxuICAgICAgfVxuICAgIH0gLy8gd2hpbGVcblxuICAgIGlmIChwYXJzZXIucG9zaXRpb24gPj0gcGFyc2VyLmJ1ZmZlckNoZWNrUG9zaXRpb24pIHtcbiAgICAgIGNoZWNrQnVmZmVyTGVuZ3RoKHBhcnNlcilcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlclxuICB9XG5cbiAgLyohIGh0dHA6Ly9tdGhzLmJlL2Zyb21jb2RlcG9pbnQgdjAuMS4wIGJ5IEBtYXRoaWFzICovXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmICghU3RyaW5nLmZyb21Db2RlUG9pbnQpIHtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0cmluZ0Zyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGVcbiAgICAgIHZhciBmbG9vciA9IE1hdGguZmxvb3JcbiAgICAgIHZhciBmcm9tQ29kZVBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgTUFYX1NJWkUgPSAweDQwMDBcbiAgICAgICAgdmFyIGNvZGVVbml0cyA9IFtdXG4gICAgICAgIHZhciBoaWdoU3Vycm9nYXRlXG4gICAgICAgIHZhciBsb3dTdXJyb2dhdGVcbiAgICAgICAgdmFyIGluZGV4ID0gLTFcbiAgICAgICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0ID0gJydcbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICB2YXIgY29kZVBvaW50ID0gTnVtYmVyKGFyZ3VtZW50c1tpbmRleF0pXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIWlzRmluaXRlKGNvZGVQb2ludCkgfHwgLy8gYE5hTmAsIGArSW5maW5pdHlgLCBvciBgLUluZmluaXR5YFxuICAgICAgICAgICAgY29kZVBvaW50IDwgMCB8fCAvLyBub3QgYSB2YWxpZCBVbmljb2RlIGNvZGUgcG9pbnRcbiAgICAgICAgICAgIGNvZGVQb2ludCA+IDB4MTBGRkZGIHx8IC8vIG5vdCBhIHZhbGlkIFVuaWNvZGUgY29kZSBwb2ludFxuICAgICAgICAgICAgZmxvb3IoY29kZVBvaW50KSAhPT0gY29kZVBvaW50IC8vIG5vdCBhbiBpbnRlZ2VyXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQ6ICcgKyBjb2RlUG9pbnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb2RlUG9pbnQgPD0gMHhGRkZGKSB7IC8vIEJNUCBjb2RlIHBvaW50XG4gICAgICAgICAgICBjb2RlVW5pdHMucHVzaChjb2RlUG9pbnQpXG4gICAgICAgICAgfSBlbHNlIHsgLy8gQXN0cmFsIGNvZGUgcG9pbnQ7IHNwbGl0IGluIHN1cnJvZ2F0ZSBoYWx2ZXNcbiAgICAgICAgICAgIC8vIGh0dHA6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmcjc3Vycm9nYXRlLWZvcm11bGFlXG4gICAgICAgICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgICAgICAgaGlnaFN1cnJvZ2F0ZSA9IChjb2RlUG9pbnQgPj4gMTApICsgMHhEODAwXG4gICAgICAgICAgICBsb3dTdXJyb2dhdGUgPSAoY29kZVBvaW50ICUgMHg0MDApICsgMHhEQzAwXG4gICAgICAgICAgICBjb2RlVW5pdHMucHVzaChoaWdoU3Vycm9nYXRlLCBsb3dTdXJyb2dhdGUpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbmRleCArIDEgPT09IGxlbmd0aCB8fCBjb2RlVW5pdHMubGVuZ3RoID4gTUFYX1NJWkUpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzdHJpbmdGcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgY29kZVVuaXRzKVxuICAgICAgICAgICAgY29kZVVuaXRzLmxlbmd0aCA9IDBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZywgJ2Zyb21Db2RlUG9pbnQnLCB7XG4gICAgICAgICAgdmFsdWU6IGZyb21Db2RlUG9pbnQsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBTdHJpbmcuZnJvbUNvZGVQb2ludCA9IGZyb21Db2RlUG9pbnRcbiAgICAgIH1cbiAgICB9KCkpXG4gIH1cbn0pKHR5cGVvZiBleHBvcnRzID09PSAndW5kZWZpbmVkJyA/IHRoaXMuc2F4ID0ge30gOiBleHBvcnRzKVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gIGlzQXJyYXk6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSkge1xyXG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvLyBmYWxsYmFjayBmb3Igb2xkZXIgYnJvd3NlcnMgbGlrZSAgSUUgOFxyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggdmFsdWUgKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcclxuICB9XHJcblxyXG59O1xyXG4iLCIvKmpzbGludCBub2RlOnRydWUgKi9cclxuXHJcbnZhciB4bWwyanMgPSByZXF1aXJlKCcuL3htbDJqcycpO1xyXG52YXIgeG1sMmpzb24gPSByZXF1aXJlKCcuL3htbDJqc29uJyk7XHJcbnZhciBqczJ4bWwgPSByZXF1aXJlKCcuL2pzMnhtbCcpO1xyXG52YXIganNvbjJ4bWwgPSByZXF1aXJlKCcuL2pzb24yeG1sJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICB4bWwyanM6IHhtbDJqcyxcclxuICB4bWwyanNvbjogeG1sMmpzb24sXHJcbiAganMyeG1sOiBqczJ4bWwsXHJcbiAganNvbjJ4bWw6IGpzb24yeG1sXHJcbn07XHJcbiIsInZhciBoZWxwZXIgPSByZXF1aXJlKCcuL29wdGlvbnMtaGVscGVyJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vYXJyYXktaGVscGVyJykuaXNBcnJheTtcblxudmFyIGN1cnJlbnRFbGVtZW50LCBjdXJyZW50RWxlbWVudE5hbWU7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlT3B0aW9ucyh1c2VyT3B0aW9ucykge1xuICB2YXIgb3B0aW9ucyA9IGhlbHBlci5jb3B5T3B0aW9ucyh1c2VyT3B0aW9ucyk7XG4gIGhlbHBlci5lbnN1cmVGbGFnRXhpc3RzKCdpZ25vcmVEZWNsYXJhdGlvbicsIG9wdGlvbnMpO1xuICBoZWxwZXIuZW5zdXJlRmxhZ0V4aXN0cygnaWdub3JlSW5zdHJ1Y3Rpb24nLCBvcHRpb25zKTtcbiAgaGVscGVyLmVuc3VyZUZsYWdFeGlzdHMoJ2lnbm9yZUF0dHJpYnV0ZXMnLCBvcHRpb25zKTtcbiAgaGVscGVyLmVuc3VyZUZsYWdFeGlzdHMoJ2lnbm9yZVRleHQnLCBvcHRpb25zKTtcbiAgaGVscGVyLmVuc3VyZUZsYWdFeGlzdHMoJ2lnbm9yZUNvbW1lbnQnLCBvcHRpb25zKTtcbiAgaGVscGVyLmVuc3VyZUZsYWdFeGlzdHMoJ2lnbm9yZUNkYXRhJywgb3B0aW9ucyk7XG4gIGhlbHBlci5lbnN1cmVGbGFnRXhpc3RzKCdpZ25vcmVEb2N0eXBlJywgb3B0aW9ucyk7XG4gIGhlbHBlci5lbnN1cmVGbGFnRXhpc3RzKCdjb21wYWN0Jywgb3B0aW9ucyk7XG4gIGhlbHBlci5lbnN1cmVGbGFnRXhpc3RzKCdpbmRlbnRUZXh0Jywgb3B0aW9ucyk7XG4gIGhlbHBlci5lbnN1cmVGbGFnRXhpc3RzKCdpbmRlbnRDZGF0YScsIG9wdGlvbnMpO1xuICBoZWxwZXIuZW5zdXJlRmxhZ0V4aXN0cygnaW5kZW50QXR0cmlidXRlcycsIG9wdGlvbnMpO1xuICBoZWxwZXIuZW5zdXJlRmxhZ0V4aXN0cygnaW5kZW50SW5zdHJ1Y3Rpb24nLCBvcHRpb25zKTtcbiAgaGVscGVyLmVuc3VyZUZsYWdFeGlzdHMoJ2Z1bGxUYWdFbXB0eUVsZW1lbnQnLCBvcHRpb25zKTtcbiAgaGVscGVyLmVuc3VyZUZsYWdFeGlzdHMoJ25vUXVvdGVzRm9yTmF0aXZlQXR0cmlidXRlcycsIG9wdGlvbnMpO1xuICBoZWxwZXIuZW5zdXJlU3BhY2VzRXhpc3RzKG9wdGlvbnMpO1xuICBpZiAodHlwZW9mIG9wdGlvbnMuc3BhY2VzID09PSAnbnVtYmVyJykge1xuICAgIG9wdGlvbnMuc3BhY2VzID0gQXJyYXkob3B0aW9ucy5zcGFjZXMgKyAxKS5qb2luKCcgJyk7XG4gIH1cbiAgaGVscGVyLmVuc3VyZUtleUV4aXN0cygnZGVjbGFyYXRpb24nLCBvcHRpb25zKTtcbiAgaGVscGVyLmVuc3VyZUtleUV4aXN0cygnaW5zdHJ1Y3Rpb24nLCBvcHRpb25zKTtcbiAgaGVscGVyLmVuc3VyZUtleUV4aXN0cygnYXR0cmlidXRlcycsIG9wdGlvbnMpO1xuICBoZWxwZXIuZW5zdXJlS2V5RXhpc3RzKCd0ZXh0Jywgb3B0aW9ucyk7XG4gIGhlbHBlci5lbnN1cmVLZXlFeGlzdHMoJ2NvbW1lbnQnLCBvcHRpb25zKTtcbiAgaGVscGVyLmVuc3VyZUtleUV4aXN0cygnY2RhdGEnLCBvcHRpb25zKTtcbiAgaGVscGVyLmVuc3VyZUtleUV4aXN0cygnZG9jdHlwZScsIG9wdGlvbnMpO1xuICBoZWxwZXIuZW5zdXJlS2V5RXhpc3RzKCd0eXBlJywgb3B0aW9ucyk7XG4gIGhlbHBlci5lbnN1cmVLZXlFeGlzdHMoJ25hbWUnLCBvcHRpb25zKTtcbiAgaGVscGVyLmVuc3VyZUtleUV4aXN0cygnZWxlbWVudHMnLCBvcHRpb25zKTtcbiAgaGVscGVyLmNoZWNrRm5FeGlzdHMoJ2RvY3R5cGUnLCBvcHRpb25zKTtcbiAgaGVscGVyLmNoZWNrRm5FeGlzdHMoJ2luc3RydWN0aW9uJywgb3B0aW9ucyk7XG4gIGhlbHBlci5jaGVja0ZuRXhpc3RzKCdjZGF0YScsIG9wdGlvbnMpO1xuICBoZWxwZXIuY2hlY2tGbkV4aXN0cygnY29tbWVudCcsIG9wdGlvbnMpO1xuICBoZWxwZXIuY2hlY2tGbkV4aXN0cygndGV4dCcsIG9wdGlvbnMpO1xuICBoZWxwZXIuY2hlY2tGbkV4aXN0cygnaW5zdHJ1Y3Rpb25OYW1lJywgb3B0aW9ucyk7XG4gIGhlbHBlci5jaGVja0ZuRXhpc3RzKCdlbGVtZW50TmFtZScsIG9wdGlvbnMpO1xuICBoZWxwZXIuY2hlY2tGbkV4aXN0cygnYXR0cmlidXRlTmFtZScsIG9wdGlvbnMpO1xuICBoZWxwZXIuY2hlY2tGbkV4aXN0cygnYXR0cmlidXRlVmFsdWUnLCBvcHRpb25zKTtcbiAgaGVscGVyLmNoZWNrRm5FeGlzdHMoJ2F0dHJpYnV0ZXMnLCBvcHRpb25zKTtcbiAgaGVscGVyLmNoZWNrRm5FeGlzdHMoJ2Z1bGxUYWdFbXB0eUVsZW1lbnQnLCBvcHRpb25zKTtcbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHdyaXRlSW5kZW50YXRpb24ob3B0aW9ucywgZGVwdGgsIGZpcnN0TGluZSkge1xuICByZXR1cm4gKCFmaXJzdExpbmUgJiYgb3B0aW9ucy5zcGFjZXMgPyAnXFxuJyA6ICcnKSArIEFycmF5KGRlcHRoICsgMSkuam9pbihvcHRpb25zLnNwYWNlcyk7XG59XG5cbmZ1bmN0aW9uIHdyaXRlQXR0cmlidXRlcyhhdHRyaWJ1dGVzLCBvcHRpb25zLCBkZXB0aCkge1xuICBpZiAob3B0aW9ucy5pZ25vcmVBdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGlmICgnYXR0cmlidXRlc0ZuJyBpbiBvcHRpb25zKSB7XG4gICAgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlc0ZuKGF0dHJpYnV0ZXMsIGN1cnJlbnRFbGVtZW50TmFtZSwgY3VycmVudEVsZW1lbnQpO1xuICB9XG4gIHZhciBrZXksIGF0dHIsIGF0dHJOYW1lLCBxdW90ZSwgcmVzdWx0ID0gW107XG4gIGZvciAoa2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGF0dHJpYnV0ZXNba2V5XSAhPT0gbnVsbCAmJiBhdHRyaWJ1dGVzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcXVvdGUgPSBvcHRpb25zLm5vUXVvdGVzRm9yTmF0aXZlQXR0cmlidXRlcyAmJiB0eXBlb2YgYXR0cmlidXRlc1trZXldICE9PSAnc3RyaW5nJyA/ICcnIDogJ1wiJztcbiAgICAgIGF0dHIgPSAnJyArIGF0dHJpYnV0ZXNba2V5XTsgLy8gZW5zdXJlIG51bWJlciBhbmQgYm9vbGVhbiBhcmUgY29udmVydGVkIHRvIFN0cmluZ1xuICAgICAgYXR0ciA9IGF0dHIucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuICAgICAgYXR0ck5hbWUgPSAnYXR0cmlidXRlTmFtZUZuJyBpbiBvcHRpb25zID8gb3B0aW9ucy5hdHRyaWJ1dGVOYW1lRm4oa2V5LCBhdHRyLCBjdXJyZW50RWxlbWVudE5hbWUsIGN1cnJlbnRFbGVtZW50KSA6IGtleTtcbiAgICAgIHJlc3VsdC5wdXNoKChvcHRpb25zLnNwYWNlcyAmJiBvcHRpb25zLmluZGVudEF0dHJpYnV0ZXM/IHdyaXRlSW5kZW50YXRpb24ob3B0aW9ucywgZGVwdGgrMSwgZmFsc2UpIDogJyAnKSk7XG4gICAgICByZXN1bHQucHVzaChhdHRyTmFtZSArICc9JyArIHF1b3RlICsgKCdhdHRyaWJ1dGVWYWx1ZUZuJyBpbiBvcHRpb25zID8gb3B0aW9ucy5hdHRyaWJ1dGVWYWx1ZUZuKGF0dHIsIGtleSwgY3VycmVudEVsZW1lbnROYW1lLCBjdXJyZW50RWxlbWVudCkgOiBhdHRyKSArIHF1b3RlKTtcbiAgICB9XG4gIH1cbiAgaWYgKGF0dHJpYnV0ZXMgJiYgT2JqZWN0LmtleXMoYXR0cmlidXRlcykubGVuZ3RoICYmIG9wdGlvbnMuc3BhY2VzICYmIG9wdGlvbnMuaW5kZW50QXR0cmlidXRlcykge1xuICAgIHJlc3VsdC5wdXNoKHdyaXRlSW5kZW50YXRpb24ob3B0aW9ucywgZGVwdGgsIGZhbHNlKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gd3JpdGVEZWNsYXJhdGlvbihkZWNsYXJhdGlvbiwgb3B0aW9ucywgZGVwdGgpIHtcbiAgY3VycmVudEVsZW1lbnQgPSBkZWNsYXJhdGlvbjtcbiAgY3VycmVudEVsZW1lbnROYW1lID0gJ3htbCc7XG4gIHJldHVybiBvcHRpb25zLmlnbm9yZURlY2xhcmF0aW9uID8gJycgOiAgJzw/JyArICd4bWwnICsgd3JpdGVBdHRyaWJ1dGVzKGRlY2xhcmF0aW9uW29wdGlvbnMuYXR0cmlidXRlc0tleV0sIG9wdGlvbnMsIGRlcHRoKSArICc/Pic7XG59XG5cbmZ1bmN0aW9uIHdyaXRlSW5zdHJ1Y3Rpb24oaW5zdHJ1Y3Rpb24sIG9wdGlvbnMsIGRlcHRoKSB7XG4gIGlmIChvcHRpb25zLmlnbm9yZUluc3RydWN0aW9uKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIGluc3RydWN0aW9uKSB7XG4gICAgaWYgKGluc3RydWN0aW9uLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICB2YXIgaW5zdHJ1Y3Rpb25OYW1lID0gJ2luc3RydWN0aW9uTmFtZUZuJyBpbiBvcHRpb25zID8gb3B0aW9ucy5pbnN0cnVjdGlvbk5hbWVGbihrZXksIGluc3RydWN0aW9uW2tleV0sIGN1cnJlbnRFbGVtZW50TmFtZSwgY3VycmVudEVsZW1lbnQpIDoga2V5O1xuICBpZiAodHlwZW9mIGluc3RydWN0aW9uW2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgY3VycmVudEVsZW1lbnQgPSBpbnN0cnVjdGlvbjtcbiAgICBjdXJyZW50RWxlbWVudE5hbWUgPSBpbnN0cnVjdGlvbk5hbWU7XG4gICAgcmV0dXJuICc8PycgKyBpbnN0cnVjdGlvbk5hbWUgKyB3cml0ZUF0dHJpYnV0ZXMoaW5zdHJ1Y3Rpb25ba2V5XVtvcHRpb25zLmF0dHJpYnV0ZXNLZXldLCBvcHRpb25zLCBkZXB0aCkgKyAnPz4nO1xuICB9IGVsc2Uge1xuICAgIHZhciBpbnN0cnVjdGlvblZhbHVlID0gaW5zdHJ1Y3Rpb25ba2V5XSA/IGluc3RydWN0aW9uW2tleV0gOiAnJztcbiAgICBpZiAoJ2luc3RydWN0aW9uRm4nIGluIG9wdGlvbnMpIGluc3RydWN0aW9uVmFsdWUgPSBvcHRpb25zLmluc3RydWN0aW9uRm4oaW5zdHJ1Y3Rpb25WYWx1ZSwga2V5LCBjdXJyZW50RWxlbWVudE5hbWUsIGN1cnJlbnRFbGVtZW50KTtcbiAgICByZXR1cm4gJzw/JyArIGluc3RydWN0aW9uTmFtZSArIChpbnN0cnVjdGlvblZhbHVlID8gJyAnICsgaW5zdHJ1Y3Rpb25WYWx1ZSA6ICcnKSArICc/Pic7XG4gIH1cbn1cblxuZnVuY3Rpb24gd3JpdGVDb21tZW50KGNvbW1lbnQsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuaWdub3JlQ29tbWVudCA/ICcnIDogJzwhLS0nICsgKCdjb21tZW50Rm4nIGluIG9wdGlvbnMgPyBvcHRpb25zLmNvbW1lbnRGbihjb21tZW50LCBjdXJyZW50RWxlbWVudE5hbWUsIGN1cnJlbnRFbGVtZW50KSA6IGNvbW1lbnQpICsgJy0tPic7XG59XG5cbmZ1bmN0aW9uIHdyaXRlQ2RhdGEoY2RhdGEsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuaWdub3JlQ2RhdGEgPyAnJyA6ICc8IVtDREFUQVsnICsgKCdjZGF0YUZuJyBpbiBvcHRpb25zID8gb3B0aW9ucy5jZGF0YUZuKGNkYXRhLCBjdXJyZW50RWxlbWVudE5hbWUsIGN1cnJlbnRFbGVtZW50KSA6IGNkYXRhLnJlcGxhY2UoJ11dPicsICddXV1dPjwhW0NEQVRBWz4nKSkgKyAnXV0+Jztcbn1cblxuZnVuY3Rpb24gd3JpdGVEb2N0eXBlKGRvY3R5cGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuaWdub3JlRG9jdHlwZSA/ICcnIDogJzwhRE9DVFlQRSAnICsgKCdkb2N0eXBlRm4nIGluIG9wdGlvbnMgPyBvcHRpb25zLmRvY3R5cGVGbihkb2N0eXBlLCBjdXJyZW50RWxlbWVudE5hbWUsIGN1cnJlbnRFbGVtZW50KSA6IGRvY3R5cGUpICsgJz4nO1xufVxuXG5mdW5jdGlvbiB3cml0ZVRleHQodGV4dCwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5pZ25vcmVUZXh0KSByZXR1cm4gJyc7XG4gIHRleHQgPSAnJyArIHRleHQ7IC8vIGVuc3VyZSBOdW1iZXIgYW5kIEJvb2xlYW4gYXJlIGNvbnZlcnRlZCB0byBTdHJpbmdcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvJmFtcDsvZywgJyYnKTsgLy8gZGVzYW5pdGl6ZSB0byBhdm9pZCBkb3VibGUgc2FuaXRpemF0aW9uXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbiAgcmV0dXJuICd0ZXh0Rm4nIGluIG9wdGlvbnMgPyBvcHRpb25zLnRleHRGbih0ZXh0LCBjdXJyZW50RWxlbWVudE5hbWUsIGN1cnJlbnRFbGVtZW50KSA6IHRleHQ7XG59XG5cbmZ1bmN0aW9uIGhhc0NvbnRlbnQoZWxlbWVudCwgb3B0aW9ucykge1xuICB2YXIgaTtcbiAgaWYgKGVsZW1lbnQuZWxlbWVudHMgJiYgZWxlbWVudC5lbGVtZW50cy5sZW5ndGgpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgZWxlbWVudC5lbGVtZW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgc3dpdGNoIChlbGVtZW50LmVsZW1lbnRzW2ldW29wdGlvbnMudHlwZUtleV0pIHtcbiAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICBpZiAob3B0aW9ucy5pbmRlbnRUZXh0KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7IC8vIHNraXAgdG8gbmV4dCBrZXlcbiAgICAgIGNhc2UgJ2NkYXRhJzpcbiAgICAgICAgaWYgKG9wdGlvbnMuaW5kZW50Q2RhdGEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhazsgLy8gc2tpcCB0byBuZXh0IGtleVxuICAgICAgY2FzZSAnaW5zdHJ1Y3Rpb24nOlxuICAgICAgICBpZiAob3B0aW9ucy5pbmRlbnRJbnN0cnVjdGlvbikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrOyAvLyBza2lwIHRvIG5leHQga2V5XG4gICAgICBjYXNlICdkb2N0eXBlJzpcbiAgICAgIGNhc2UgJ2NvbW1lbnQnOlxuICAgICAgY2FzZSAnZWxlbWVudCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gd3JpdGVFbGVtZW50KGVsZW1lbnQsIG9wdGlvbnMsIGRlcHRoKSB7XG4gIGN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcbiAgY3VycmVudEVsZW1lbnROYW1lID0gZWxlbWVudC5uYW1lO1xuICB2YXIgeG1sID0gW10sIGVsZW1lbnROYW1lID0gJ2VsZW1lbnROYW1lRm4nIGluIG9wdGlvbnMgPyBvcHRpb25zLmVsZW1lbnROYW1lRm4oZWxlbWVudC5uYW1lLCBlbGVtZW50KSA6IGVsZW1lbnQubmFtZTtcbiAgeG1sLnB1c2goJzwnICsgZWxlbWVudE5hbWUpO1xuICBpZiAoZWxlbWVudFtvcHRpb25zLmF0dHJpYnV0ZXNLZXldKSB7XG4gICAgeG1sLnB1c2god3JpdGVBdHRyaWJ1dGVzKGVsZW1lbnRbb3B0aW9ucy5hdHRyaWJ1dGVzS2V5XSwgb3B0aW9ucywgZGVwdGgpKTtcbiAgfVxuICB2YXIgd2l0aENsb3NpbmdUYWcgPSBlbGVtZW50W29wdGlvbnMuZWxlbWVudHNLZXldICYmIGVsZW1lbnRbb3B0aW9ucy5lbGVtZW50c0tleV0ubGVuZ3RoIHx8IGVsZW1lbnRbb3B0aW9ucy5hdHRyaWJ1dGVzS2V5XSAmJiBlbGVtZW50W29wdGlvbnMuYXR0cmlidXRlc0tleV1bJ3htbDpzcGFjZSddID09PSAncHJlc2VydmUnO1xuICBpZiAoIXdpdGhDbG9zaW5nVGFnKSB7XG4gICAgaWYgKCdmdWxsVGFnRW1wdHlFbGVtZW50Rm4nIGluIG9wdGlvbnMpIHtcbiAgICAgIHdpdGhDbG9zaW5nVGFnID0gb3B0aW9ucy5mdWxsVGFnRW1wdHlFbGVtZW50Rm4oZWxlbWVudC5uYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2l0aENsb3NpbmdUYWcgPSBvcHRpb25zLmZ1bGxUYWdFbXB0eUVsZW1lbnQ7XG4gICAgfVxuICB9XG4gIGlmICh3aXRoQ2xvc2luZ1RhZykge1xuICAgIHhtbC5wdXNoKCc+Jyk7XG4gICAgaWYgKGVsZW1lbnRbb3B0aW9ucy5lbGVtZW50c0tleV0gJiYgZWxlbWVudFtvcHRpb25zLmVsZW1lbnRzS2V5XS5sZW5ndGgpIHtcbiAgICAgIHhtbC5wdXNoKHdyaXRlRWxlbWVudHMoZWxlbWVudFtvcHRpb25zLmVsZW1lbnRzS2V5XSwgb3B0aW9ucywgZGVwdGggKyAxKSk7XG4gICAgICBjdXJyZW50RWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICBjdXJyZW50RWxlbWVudE5hbWUgPSBlbGVtZW50Lm5hbWU7XG4gICAgfVxuICAgIHhtbC5wdXNoKG9wdGlvbnMuc3BhY2VzICYmIGhhc0NvbnRlbnQoZWxlbWVudCwgb3B0aW9ucykgPyAnXFxuJyArIEFycmF5KGRlcHRoICsgMSkuam9pbihvcHRpb25zLnNwYWNlcykgOiAnJyk7XG4gICAgeG1sLnB1c2goJzwvJyArIGVsZW1lbnROYW1lICsgJz4nKTtcbiAgfSBlbHNlIHtcbiAgICB4bWwucHVzaCgnLz4nKTtcbiAgfVxuICByZXR1cm4geG1sLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiB3cml0ZUVsZW1lbnRzKGVsZW1lbnRzLCBvcHRpb25zLCBkZXB0aCwgZmlyc3RMaW5lKSB7XG4gIHJldHVybiBlbGVtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKHhtbCwgZWxlbWVudCkge1xuICAgIHZhciBpbmRlbnQgPSB3cml0ZUluZGVudGF0aW9uKG9wdGlvbnMsIGRlcHRoLCBmaXJzdExpbmUgJiYgIXhtbCk7XG4gICAgc3dpdGNoIChlbGVtZW50LnR5cGUpIHtcbiAgICBjYXNlICdlbGVtZW50JzogcmV0dXJuIHhtbCArIGluZGVudCArIHdyaXRlRWxlbWVudChlbGVtZW50LCBvcHRpb25zLCBkZXB0aCk7XG4gICAgY2FzZSAnY29tbWVudCc6IHJldHVybiB4bWwgKyBpbmRlbnQgKyB3cml0ZUNvbW1lbnQoZWxlbWVudFtvcHRpb25zLmNvbW1lbnRLZXldLCBvcHRpb25zKTtcbiAgICBjYXNlICdkb2N0eXBlJzogcmV0dXJuIHhtbCArIGluZGVudCArIHdyaXRlRG9jdHlwZShlbGVtZW50W29wdGlvbnMuZG9jdHlwZUtleV0sIG9wdGlvbnMpO1xuICAgIGNhc2UgJ2NkYXRhJzogcmV0dXJuIHhtbCArIChvcHRpb25zLmluZGVudENkYXRhID8gaW5kZW50IDogJycpICsgd3JpdGVDZGF0YShlbGVtZW50W29wdGlvbnMuY2RhdGFLZXldLCBvcHRpb25zKTtcbiAgICBjYXNlICd0ZXh0JzogcmV0dXJuIHhtbCArIChvcHRpb25zLmluZGVudFRleHQgPyBpbmRlbnQgOiAnJykgKyB3cml0ZVRleHQoZWxlbWVudFtvcHRpb25zLnRleHRLZXldLCBvcHRpb25zKTtcbiAgICBjYXNlICdpbnN0cnVjdGlvbic6XG4gICAgICB2YXIgaW5zdHJ1Y3Rpb24gPSB7fTtcbiAgICAgIGluc3RydWN0aW9uW2VsZW1lbnRbb3B0aW9ucy5uYW1lS2V5XV0gPSBlbGVtZW50W29wdGlvbnMuYXR0cmlidXRlc0tleV0gPyBlbGVtZW50IDogZWxlbWVudFtvcHRpb25zLmluc3RydWN0aW9uS2V5XTtcbiAgICAgIHJldHVybiB4bWwgKyAob3B0aW9ucy5pbmRlbnRJbnN0cnVjdGlvbiA/IGluZGVudCA6ICcnKSArIHdyaXRlSW5zdHJ1Y3Rpb24oaW5zdHJ1Y3Rpb24sIG9wdGlvbnMsIGRlcHRoKTtcbiAgICB9XG4gIH0sICcnKTtcbn1cblxuZnVuY3Rpb24gaGFzQ29udGVudENvbXBhY3QoZWxlbWVudCwgb3B0aW9ucywgYW55Q29udGVudCkge1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2Ugb3B0aW9ucy5wYXJlbnRLZXk6XG4gICAgICBjYXNlIG9wdGlvbnMuYXR0cmlidXRlc0tleTpcbiAgICAgICAgYnJlYWs7IC8vIHNraXAgdG8gbmV4dCBrZXlcbiAgICAgIGNhc2Ugb3B0aW9ucy50ZXh0S2V5OlxuICAgICAgICBpZiAob3B0aW9ucy5pbmRlbnRUZXh0IHx8IGFueUNvbnRlbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhazsgLy8gc2tpcCB0byBuZXh0IGtleVxuICAgICAgY2FzZSBvcHRpb25zLmNkYXRhS2V5OlxuICAgICAgICBpZiAob3B0aW9ucy5pbmRlbnRDZGF0YSB8fCBhbnlDb250ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7IC8vIHNraXAgdG8gbmV4dCBrZXlcbiAgICAgIGNhc2Ugb3B0aW9ucy5pbnN0cnVjdGlvbktleTpcbiAgICAgICAgaWYgKG9wdGlvbnMuaW5kZW50SW5zdHJ1Y3Rpb24gfHwgYW55Q29udGVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrOyAvLyBza2lwIHRvIG5leHQga2V5XG4gICAgICBjYXNlIG9wdGlvbnMuZG9jdHlwZUtleTpcbiAgICAgIGNhc2Ugb3B0aW9ucy5jb21tZW50S2V5OlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHdyaXRlRWxlbWVudENvbXBhY3QoZWxlbWVudCwgbmFtZSwgb3B0aW9ucywgZGVwdGgsIGluZGVudCkge1xuICBjdXJyZW50RWxlbWVudCA9IGVsZW1lbnQ7XG4gIGN1cnJlbnRFbGVtZW50TmFtZSA9IG5hbWU7XG4gIHZhciBlbGVtZW50TmFtZSA9ICdlbGVtZW50TmFtZUZuJyBpbiBvcHRpb25zID8gb3B0aW9ucy5lbGVtZW50TmFtZUZuKG5hbWUsIGVsZW1lbnQpIDogbmFtZTtcbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAndW5kZWZpbmVkJyB8fCBlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09ICcnKSB7XG4gICAgcmV0dXJuICdmdWxsVGFnRW1wdHlFbGVtZW50Rm4nIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5mdWxsVGFnRW1wdHlFbGVtZW50Rm4obmFtZSwgZWxlbWVudCkgfHwgb3B0aW9ucy5mdWxsVGFnRW1wdHlFbGVtZW50ID8gJzwnICsgZWxlbWVudE5hbWUgKyAnPjwvJyArIGVsZW1lbnROYW1lICsgJz4nIDogJzwnICsgZWxlbWVudE5hbWUgKyAnLz4nO1xuICB9XG4gIHZhciB4bWwgPSBbXTtcbiAgaWYgKG5hbWUpIHtcbiAgICB4bWwucHVzaCgnPCcgKyBlbGVtZW50TmFtZSk7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ICE9PSAnb2JqZWN0Jykge1xuICAgICAgeG1sLnB1c2goJz4nICsgd3JpdGVUZXh0KGVsZW1lbnQsb3B0aW9ucykgKyAnPC8nICsgZWxlbWVudE5hbWUgKyAnPicpO1xuICAgICAgcmV0dXJuIHhtbC5qb2luKCcnKTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnRbb3B0aW9ucy5hdHRyaWJ1dGVzS2V5XSkge1xuICAgICAgeG1sLnB1c2god3JpdGVBdHRyaWJ1dGVzKGVsZW1lbnRbb3B0aW9ucy5hdHRyaWJ1dGVzS2V5XSwgb3B0aW9ucywgZGVwdGgpKTtcbiAgICB9XG4gICAgdmFyIHdpdGhDbG9zaW5nVGFnID0gaGFzQ29udGVudENvbXBhY3QoZWxlbWVudCwgb3B0aW9ucywgdHJ1ZSkgfHwgZWxlbWVudFtvcHRpb25zLmF0dHJpYnV0ZXNLZXldICYmIGVsZW1lbnRbb3B0aW9ucy5hdHRyaWJ1dGVzS2V5XVsneG1sOnNwYWNlJ10gPT09ICdwcmVzZXJ2ZSc7XG4gICAgaWYgKCF3aXRoQ2xvc2luZ1RhZykge1xuICAgICAgaWYgKCdmdWxsVGFnRW1wdHlFbGVtZW50Rm4nIGluIG9wdGlvbnMpIHtcbiAgICAgICAgd2l0aENsb3NpbmdUYWcgPSBvcHRpb25zLmZ1bGxUYWdFbXB0eUVsZW1lbnRGbihuYW1lLCBlbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpdGhDbG9zaW5nVGFnID0gb3B0aW9ucy5mdWxsVGFnRW1wdHlFbGVtZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAod2l0aENsb3NpbmdUYWcpIHtcbiAgICAgIHhtbC5wdXNoKCc+Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHhtbC5wdXNoKCcvPicpO1xuICAgICAgcmV0dXJuIHhtbC5qb2luKCcnKTtcbiAgICB9XG4gIH1cbiAgeG1sLnB1c2god3JpdGVFbGVtZW50c0NvbXBhY3QoZWxlbWVudCwgb3B0aW9ucywgZGVwdGggKyAxLCBmYWxzZSkpO1xuICBjdXJyZW50RWxlbWVudCA9IGVsZW1lbnQ7XG4gIGN1cnJlbnRFbGVtZW50TmFtZSA9IG5hbWU7XG4gIGlmIChuYW1lKSB7XG4gICAgeG1sLnB1c2goKGluZGVudCA/IHdyaXRlSW5kZW50YXRpb24ob3B0aW9ucywgZGVwdGgsIGZhbHNlKSA6ICcnKSArICc8LycgKyBlbGVtZW50TmFtZSArICc+Jyk7XG4gIH1cbiAgcmV0dXJuIHhtbC5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gd3JpdGVFbGVtZW50c0NvbXBhY3QoZWxlbWVudCwgb3B0aW9ucywgZGVwdGgsIGZpcnN0TGluZSkge1xuICB2YXIgaSwga2V5LCBub2RlcywgeG1sID0gW107XG4gIGZvciAoa2V5IGluIGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBub2RlcyA9IGlzQXJyYXkoZWxlbWVudFtrZXldKSA/IGVsZW1lbnRba2V5XSA6IFtlbGVtZW50W2tleV1dO1xuICAgICAgZm9yIChpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2Ugb3B0aW9ucy5kZWNsYXJhdGlvbktleTogeG1sLnB1c2god3JpdGVEZWNsYXJhdGlvbihub2Rlc1tpXSwgb3B0aW9ucywgZGVwdGgpKTsgYnJlYWs7XG4gICAgICAgIGNhc2Ugb3B0aW9ucy5pbnN0cnVjdGlvbktleTogeG1sLnB1c2goKG9wdGlvbnMuaW5kZW50SW5zdHJ1Y3Rpb24gPyB3cml0ZUluZGVudGF0aW9uKG9wdGlvbnMsIGRlcHRoLCBmaXJzdExpbmUpIDogJycpICsgd3JpdGVJbnN0cnVjdGlvbihub2Rlc1tpXSwgb3B0aW9ucywgZGVwdGgpKTsgYnJlYWs7XG4gICAgICAgIGNhc2Ugb3B0aW9ucy5hdHRyaWJ1dGVzS2V5OiBjYXNlIG9wdGlvbnMucGFyZW50S2V5OiBicmVhazsgLy8gc2tpcFxuICAgICAgICBjYXNlIG9wdGlvbnMudGV4dEtleTogeG1sLnB1c2goKG9wdGlvbnMuaW5kZW50VGV4dCA/IHdyaXRlSW5kZW50YXRpb24ob3B0aW9ucywgZGVwdGgsIGZpcnN0TGluZSkgOiAnJykgKyB3cml0ZVRleHQobm9kZXNbaV0sIG9wdGlvbnMpKTsgYnJlYWs7XG4gICAgICAgIGNhc2Ugb3B0aW9ucy5jZGF0YUtleTogeG1sLnB1c2goKG9wdGlvbnMuaW5kZW50Q2RhdGEgPyB3cml0ZUluZGVudGF0aW9uKG9wdGlvbnMsIGRlcHRoLCBmaXJzdExpbmUpIDogJycpICsgd3JpdGVDZGF0YShub2Rlc1tpXSwgb3B0aW9ucykpOyBicmVhaztcbiAgICAgICAgY2FzZSBvcHRpb25zLmRvY3R5cGVLZXk6IHhtbC5wdXNoKHdyaXRlSW5kZW50YXRpb24ob3B0aW9ucywgZGVwdGgsIGZpcnN0TGluZSkgKyB3cml0ZURvY3R5cGUobm9kZXNbaV0sIG9wdGlvbnMpKTsgYnJlYWs7XG4gICAgICAgIGNhc2Ugb3B0aW9ucy5jb21tZW50S2V5OiB4bWwucHVzaCh3cml0ZUluZGVudGF0aW9uKG9wdGlvbnMsIGRlcHRoLCBmaXJzdExpbmUpICsgd3JpdGVDb21tZW50KG5vZGVzW2ldLCBvcHRpb25zKSk7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiB4bWwucHVzaCh3cml0ZUluZGVudGF0aW9uKG9wdGlvbnMsIGRlcHRoLCBmaXJzdExpbmUpICsgd3JpdGVFbGVtZW50Q29tcGFjdChub2Rlc1tpXSwga2V5LCBvcHRpb25zLCBkZXB0aCwgaGFzQ29udGVudENvbXBhY3Qobm9kZXNbaV0sIG9wdGlvbnMpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZmlyc3RMaW5lID0gZmlyc3RMaW5lICYmICF4bWwubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4geG1sLmpvaW4oJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChqcywgb3B0aW9ucykge1xuICBvcHRpb25zID0gdmFsaWRhdGVPcHRpb25zKG9wdGlvbnMpO1xuICB2YXIgeG1sID0gW107XG4gIGN1cnJlbnRFbGVtZW50ID0ganM7XG4gIGN1cnJlbnRFbGVtZW50TmFtZSA9ICdfcm9vdF8nO1xuICBpZiAob3B0aW9ucy5jb21wYWN0KSB7XG4gICAgeG1sLnB1c2god3JpdGVFbGVtZW50c0NvbXBhY3QoanMsIG9wdGlvbnMsIDAsIHRydWUpKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoanNbb3B0aW9ucy5kZWNsYXJhdGlvbktleV0pIHtcbiAgICAgIHhtbC5wdXNoKHdyaXRlRGVjbGFyYXRpb24oanNbb3B0aW9ucy5kZWNsYXJhdGlvbktleV0sIG9wdGlvbnMsIDApKTtcbiAgICB9XG4gICAgaWYgKGpzW29wdGlvbnMuZWxlbWVudHNLZXldICYmIGpzW29wdGlvbnMuZWxlbWVudHNLZXldLmxlbmd0aCkge1xuICAgICAgeG1sLnB1c2god3JpdGVFbGVtZW50cyhqc1tvcHRpb25zLmVsZW1lbnRzS2V5XSwgb3B0aW9ucywgMCwgIXhtbC5sZW5ndGgpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHhtbC5qb2luKCcnKTtcbn07XG4iLCJ2YXIganMyeG1sID0gcmVxdWlyZSgnLi9qczJ4bWwuanMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGpzb24sIG9wdGlvbnMpIHtcclxuICBpZiAoanNvbiBpbnN0YW5jZW9mIEJ1ZmZlcikge1xyXG4gICAganNvbiA9IGpzb24udG9TdHJpbmcoKTtcclxuICB9XHJcbiAgdmFyIGpzID0gbnVsbDtcclxuICBpZiAodHlwZW9mIChqc29uKSA9PT0gJ3N0cmluZycpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGpzID0gSlNPTi5wYXJzZShqc29uKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgSlNPTiBzdHJ1Y3R1cmUgaXMgaW52YWxpZCcpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBqcyA9IGpzb247XHJcbiAgfVxyXG4gIHJldHVybiBqczJ4bWwoanMsIG9wdGlvbnMpO1xyXG59O1xyXG4iLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vYXJyYXktaGVscGVyJykuaXNBcnJheTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICBjb3B5T3B0aW9uczogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIHZhciBrZXksIGNvcHkgPSB7fTtcclxuICAgIGZvciAoa2V5IGluIG9wdGlvbnMpIHtcclxuICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIGNvcHlba2V5XSA9IG9wdGlvbnNba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvcHk7XHJcbiAgfSxcclxuXHJcbiAgZW5zdXJlRmxhZ0V4aXN0czogZnVuY3Rpb24gKGl0ZW0sIG9wdGlvbnMpIHtcclxuICAgIGlmICghKGl0ZW0gaW4gb3B0aW9ucykgfHwgdHlwZW9mIG9wdGlvbnNbaXRlbV0gIT09ICdib29sZWFuJykge1xyXG4gICAgICBvcHRpb25zW2l0ZW1dID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZW5zdXJlU3BhY2VzRXhpc3RzOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgaWYgKCEoJ3NwYWNlcycgaW4gb3B0aW9ucykgfHwgKHR5cGVvZiBvcHRpb25zLnNwYWNlcyAhPT0gJ251bWJlcicgJiYgdHlwZW9mIG9wdGlvbnMuc3BhY2VzICE9PSAnc3RyaW5nJykpIHtcclxuICAgICAgb3B0aW9ucy5zcGFjZXMgPSAwO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGVuc3VyZUFsd2F5c0FycmF5RXhpc3RzOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgaWYgKCEoJ2Fsd2F5c0FycmF5JyBpbiBvcHRpb25zKSB8fCAodHlwZW9mIG9wdGlvbnMuYWx3YXlzQXJyYXkgIT09ICdib29sZWFuJyAmJiAhaXNBcnJheShvcHRpb25zLmFsd2F5c0FycmF5KSkpIHtcclxuICAgICAgb3B0aW9ucy5hbHdheXNBcnJheSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGVuc3VyZUtleUV4aXN0czogZnVuY3Rpb24gKGtleSwgb3B0aW9ucykge1xyXG4gICAgaWYgKCEoa2V5ICsgJ0tleScgaW4gb3B0aW9ucykgfHwgdHlwZW9mIG9wdGlvbnNba2V5ICsgJ0tleSddICE9PSAnc3RyaW5nJykge1xyXG4gICAgICBvcHRpb25zW2tleSArICdLZXknXSA9IG9wdGlvbnMuY29tcGFjdCA/ICdfJyArIGtleSA6IGtleTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBjaGVja0ZuRXhpc3RzOiBmdW5jdGlvbiAoa2V5LCBvcHRpb25zKSB7XHJcbiAgICByZXR1cm4ga2V5ICsgJ0ZuJyBpbiBvcHRpb25zO1xyXG4gIH1cclxuXHJcbn07XHJcbiIsInZhciBzYXggPSByZXF1aXJlKCdzYXgnKTtcclxudmFyIGV4cGF0IC8qPSByZXF1aXJlKCdub2RlLWV4cGF0Jyk7Ki8gPSB7IG9uOiBmdW5jdGlvbiAoKSB7IH0sIHBhcnNlOiBmdW5jdGlvbiAoKSB7IH0gfTtcclxudmFyIGhlbHBlciA9IHJlcXVpcmUoJy4vb3B0aW9ucy1oZWxwZXInKTtcclxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2FycmF5LWhlbHBlcicpLmlzQXJyYXk7XHJcblxyXG52YXIgb3B0aW9ucztcclxudmFyIHB1cmVKc1BhcnNlciA9IHRydWU7XHJcbnZhciBjdXJyZW50RWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlT3B0aW9ucyh1c2VyT3B0aW9ucykge1xyXG4gIG9wdGlvbnMgPSBoZWxwZXIuY29weU9wdGlvbnModXNlck9wdGlvbnMpO1xyXG4gIGhlbHBlci5lbnN1cmVGbGFnRXhpc3RzKCdpZ25vcmVEZWNsYXJhdGlvbicsIG9wdGlvbnMpO1xyXG4gIGhlbHBlci5lbnN1cmVGbGFnRXhpc3RzKCdpZ25vcmVJbnN0cnVjdGlvbicsIG9wdGlvbnMpO1xyXG4gIGhlbHBlci5lbnN1cmVGbGFnRXhpc3RzKCdpZ25vcmVBdHRyaWJ1dGVzJywgb3B0aW9ucyk7XHJcbiAgaGVscGVyLmVuc3VyZUZsYWdFeGlzdHMoJ2lnbm9yZVRleHQnLCBvcHRpb25zKTtcclxuICBoZWxwZXIuZW5zdXJlRmxhZ0V4aXN0cygnaWdub3JlQ29tbWVudCcsIG9wdGlvbnMpO1xyXG4gIGhlbHBlci5lbnN1cmVGbGFnRXhpc3RzKCdpZ25vcmVDZGF0YScsIG9wdGlvbnMpO1xyXG4gIGhlbHBlci5lbnN1cmVGbGFnRXhpc3RzKCdpZ25vcmVEb2N0eXBlJywgb3B0aW9ucyk7XHJcbiAgaGVscGVyLmVuc3VyZUZsYWdFeGlzdHMoJ2NvbXBhY3QnLCBvcHRpb25zKTtcclxuICBoZWxwZXIuZW5zdXJlRmxhZ0V4aXN0cygnYWx3YXlzQ2hpbGRyZW4nLCBvcHRpb25zKTtcclxuICBoZWxwZXIuZW5zdXJlRmxhZ0V4aXN0cygnYWRkUGFyZW50Jywgb3B0aW9ucyk7XHJcbiAgaGVscGVyLmVuc3VyZUZsYWdFeGlzdHMoJ3RyaW0nLCBvcHRpb25zKTtcclxuICBoZWxwZXIuZW5zdXJlRmxhZ0V4aXN0cygnbmF0aXZlVHlwZScsIG9wdGlvbnMpO1xyXG4gIGhlbHBlci5lbnN1cmVGbGFnRXhpc3RzKCduYXRpdmVUeXBlQXR0cmlidXRlcycsIG9wdGlvbnMpO1xyXG4gIGhlbHBlci5lbnN1cmVGbGFnRXhpc3RzKCdzYW5pdGl6ZScsIG9wdGlvbnMpO1xyXG4gIGhlbHBlci5lbnN1cmVGbGFnRXhpc3RzKCdpbnN0cnVjdGlvbkhhc0F0dHJpYnV0ZXMnLCBvcHRpb25zKTtcclxuICBoZWxwZXIuZW5zdXJlRmxhZ0V4aXN0cygnY2FwdHVyZVNwYWNlc0JldHdlZW5FbGVtZW50cycsIG9wdGlvbnMpO1xyXG4gIGhlbHBlci5lbnN1cmVBbHdheXNBcnJheUV4aXN0cyhvcHRpb25zKTtcclxuICBoZWxwZXIuZW5zdXJlS2V5RXhpc3RzKCdkZWNsYXJhdGlvbicsIG9wdGlvbnMpO1xyXG4gIGhlbHBlci5lbnN1cmVLZXlFeGlzdHMoJ2luc3RydWN0aW9uJywgb3B0aW9ucyk7XHJcbiAgaGVscGVyLmVuc3VyZUtleUV4aXN0cygnYXR0cmlidXRlcycsIG9wdGlvbnMpO1xyXG4gIGhlbHBlci5lbnN1cmVLZXlFeGlzdHMoJ3RleHQnLCBvcHRpb25zKTtcclxuICBoZWxwZXIuZW5zdXJlS2V5RXhpc3RzKCdjb21tZW50Jywgb3B0aW9ucyk7XHJcbiAgaGVscGVyLmVuc3VyZUtleUV4aXN0cygnY2RhdGEnLCBvcHRpb25zKTtcclxuICBoZWxwZXIuZW5zdXJlS2V5RXhpc3RzKCdkb2N0eXBlJywgb3B0aW9ucyk7XHJcbiAgaGVscGVyLmVuc3VyZUtleUV4aXN0cygndHlwZScsIG9wdGlvbnMpO1xyXG4gIGhlbHBlci5lbnN1cmVLZXlFeGlzdHMoJ25hbWUnLCBvcHRpb25zKTtcclxuICBoZWxwZXIuZW5zdXJlS2V5RXhpc3RzKCdlbGVtZW50cycsIG9wdGlvbnMpO1xyXG4gIGhlbHBlci5lbnN1cmVLZXlFeGlzdHMoJ3BhcmVudCcsIG9wdGlvbnMpO1xyXG4gIGhlbHBlci5jaGVja0ZuRXhpc3RzKCdkb2N0eXBlJywgb3B0aW9ucyk7XHJcbiAgaGVscGVyLmNoZWNrRm5FeGlzdHMoJ2luc3RydWN0aW9uJywgb3B0aW9ucyk7XHJcbiAgaGVscGVyLmNoZWNrRm5FeGlzdHMoJ2NkYXRhJywgb3B0aW9ucyk7XHJcbiAgaGVscGVyLmNoZWNrRm5FeGlzdHMoJ2NvbW1lbnQnLCBvcHRpb25zKTtcclxuICBoZWxwZXIuY2hlY2tGbkV4aXN0cygndGV4dCcsIG9wdGlvbnMpO1xyXG4gIGhlbHBlci5jaGVja0ZuRXhpc3RzKCdpbnN0cnVjdGlvbk5hbWUnLCBvcHRpb25zKTtcclxuICBoZWxwZXIuY2hlY2tGbkV4aXN0cygnZWxlbWVudE5hbWUnLCBvcHRpb25zKTtcclxuICBoZWxwZXIuY2hlY2tGbkV4aXN0cygnYXR0cmlidXRlTmFtZScsIG9wdGlvbnMpO1xyXG4gIGhlbHBlci5jaGVja0ZuRXhpc3RzKCdhdHRyaWJ1dGVWYWx1ZScsIG9wdGlvbnMpO1xyXG4gIGhlbHBlci5jaGVja0ZuRXhpc3RzKCdhdHRyaWJ1dGVzJywgb3B0aW9ucyk7XHJcbiAgcmV0dXJuIG9wdGlvbnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5hdGl2ZVR5cGUodmFsdWUpIHtcclxuICB2YXIgblZhbHVlID0gTnVtYmVyKHZhbHVlKTtcclxuICBpZiAoIWlzTmFOKG5WYWx1ZSkpIHtcclxuICAgIHJldHVybiBuVmFsdWU7XHJcbiAgfVxyXG4gIHZhciBiVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gIGlmIChiVmFsdWUgPT09ICd0cnVlJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIGlmIChiVmFsdWUgPT09ICdmYWxzZScpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRGaWVsZCh0eXBlLCB2YWx1ZSkge1xyXG4gIHZhciBrZXk7XHJcbiAgaWYgKG9wdGlvbnMuY29tcGFjdCkge1xyXG4gICAgaWYgKFxyXG4gICAgICAhY3VycmVudEVsZW1lbnRbb3B0aW9uc1t0eXBlICsgJ0tleSddXSAmJlxyXG4gICAgICAoaXNBcnJheShvcHRpb25zLmFsd2F5c0FycmF5KSA/IG9wdGlvbnMuYWx3YXlzQXJyYXkuaW5kZXhPZihvcHRpb25zW3R5cGUgKyAnS2V5J10pICE9PSAtMSA6IG9wdGlvbnMuYWx3YXlzQXJyYXkpXHJcbiAgICApIHtcclxuICAgICAgY3VycmVudEVsZW1lbnRbb3B0aW9uc1t0eXBlICsgJ0tleSddXSA9IFtdO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRFbGVtZW50W29wdGlvbnNbdHlwZSArICdLZXknXV0gJiYgIWlzQXJyYXkoY3VycmVudEVsZW1lbnRbb3B0aW9uc1t0eXBlICsgJ0tleSddXSkpIHtcclxuICAgICAgY3VycmVudEVsZW1lbnRbb3B0aW9uc1t0eXBlICsgJ0tleSddXSA9IFtjdXJyZW50RWxlbWVudFtvcHRpb25zW3R5cGUgKyAnS2V5J11dXTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlICsgJ0ZuJyBpbiBvcHRpb25zICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdmFsdWUgPSBvcHRpb25zW3R5cGUgKyAnRm4nXSh2YWx1ZSwgY3VycmVudEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09ICdpbnN0cnVjdGlvbicgJiYgKCdpbnN0cnVjdGlvbkZuJyBpbiBvcHRpb25zIHx8ICdpbnN0cnVjdGlvbk5hbWVGbicgaW4gb3B0aW9ucykpIHtcclxuICAgICAgZm9yIChrZXkgaW4gdmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgaWYgKCdpbnN0cnVjdGlvbkZuJyBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHZhbHVlW2tleV0gPSBvcHRpb25zLmluc3RydWN0aW9uRm4odmFsdWVba2V5XSwga2V5LCBjdXJyZW50RWxlbWVudCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgdGVtcCA9IHZhbHVlW2tleV07XHJcbiAgICAgICAgICAgIGRlbGV0ZSB2YWx1ZVtrZXldO1xyXG4gICAgICAgICAgICB2YWx1ZVtvcHRpb25zLmluc3RydWN0aW9uTmFtZUZuKGtleSwgdGVtcCwgY3VycmVudEVsZW1lbnQpXSA9IHRlbXA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoaXNBcnJheShjdXJyZW50RWxlbWVudFtvcHRpb25zW3R5cGUgKyAnS2V5J11dKSkge1xyXG4gICAgICBjdXJyZW50RWxlbWVudFtvcHRpb25zW3R5cGUgKyAnS2V5J11dLnB1c2godmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3VycmVudEVsZW1lbnRbb3B0aW9uc1t0eXBlICsgJ0tleSddXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoIWN1cnJlbnRFbGVtZW50W29wdGlvbnMuZWxlbWVudHNLZXldKSB7XHJcbiAgICAgIGN1cnJlbnRFbGVtZW50W29wdGlvbnMuZWxlbWVudHNLZXldID0gW107XHJcbiAgICB9XHJcbiAgICB2YXIgZWxlbWVudCA9IHt9O1xyXG4gICAgZWxlbWVudFtvcHRpb25zLnR5cGVLZXldID0gdHlwZTtcclxuICAgIGlmICh0eXBlID09PSAnaW5zdHJ1Y3Rpb24nKSB7XHJcbiAgICAgIGZvciAoa2V5IGluIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbGVtZW50W29wdGlvbnMubmFtZUtleV0gPSAnaW5zdHJ1Y3Rpb25OYW1lRm4nIGluIG9wdGlvbnMgPyBvcHRpb25zLmluc3RydWN0aW9uTmFtZUZuKGtleSwgdmFsdWUsIGN1cnJlbnRFbGVtZW50KSA6IGtleTtcclxuICAgICAgaWYgKG9wdGlvbnMuaW5zdHJ1Y3Rpb25IYXNBdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgZWxlbWVudFtvcHRpb25zLmF0dHJpYnV0ZXNLZXldID0gdmFsdWVba2V5XVtvcHRpb25zLmF0dHJpYnV0ZXNLZXldO1xyXG4gICAgICAgIGlmICgnaW5zdHJ1Y3Rpb25GbicgaW4gb3B0aW9ucykge1xyXG4gICAgICAgICAgZWxlbWVudFtvcHRpb25zLmF0dHJpYnV0ZXNLZXldID0gb3B0aW9ucy5pbnN0cnVjdGlvbkZuKGVsZW1lbnRbb3B0aW9ucy5hdHRyaWJ1dGVzS2V5XSwga2V5LCBjdXJyZW50RWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICgnaW5zdHJ1Y3Rpb25GbicgaW4gb3B0aW9ucykge1xyXG4gICAgICAgICAgdmFsdWVba2V5XSA9IG9wdGlvbnMuaW5zdHJ1Y3Rpb25Gbih2YWx1ZVtrZXldLCBrZXksIGN1cnJlbnRFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudFtvcHRpb25zLmluc3RydWN0aW9uS2V5XSA9IHZhbHVlW2tleV07XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0eXBlICsgJ0ZuJyBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFsdWUgPSBvcHRpb25zW3R5cGUgKyAnRm4nXSh2YWx1ZSwgY3VycmVudEVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsZW1lbnRbb3B0aW9uc1t0eXBlICsgJ0tleSddXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMuYWRkUGFyZW50KSB7XHJcbiAgICAgIGVsZW1lbnRbb3B0aW9ucy5wYXJlbnRLZXldID0gY3VycmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBjdXJyZW50RWxlbWVudFtvcHRpb25zLmVsZW1lbnRzS2V5XS5wdXNoKGVsZW1lbnQpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFuaXB1bGF0ZUF0dHJpYnV0ZXMoYXR0cmlidXRlcykge1xyXG4gIGlmICgnYXR0cmlidXRlc0ZuJyBpbiBvcHRpb25zICYmIGF0dHJpYnV0ZXMpIHtcclxuICAgIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXNGbihhdHRyaWJ1dGVzLCBjdXJyZW50RWxlbWVudCk7XHJcbiAgfVxyXG4gIGlmICgob3B0aW9ucy50cmltIHx8ICdhdHRyaWJ1dGVWYWx1ZUZuJyBpbiBvcHRpb25zIHx8ICdhdHRyaWJ1dGVOYW1lRm4nIGluIG9wdGlvbnMgfHwgb3B0aW9ucy5uYXRpdmVUeXBlQXR0cmlidXRlcykgJiYgYXR0cmlidXRlcykge1xyXG4gICAgdmFyIGtleTtcclxuICAgIGZvciAoa2V5IGluIGF0dHJpYnV0ZXMpIHtcclxuICAgICAgaWYgKGF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIGlmIChvcHRpb25zLnRyaW0pIGF0dHJpYnV0ZXNba2V5XSA9IGF0dHJpYnV0ZXNba2V5XS50cmltKCk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMubmF0aXZlVHlwZUF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgIGF0dHJpYnV0ZXNba2V5XSA9IG5hdGl2ZVR5cGUoYXR0cmlidXRlc1trZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCdhdHRyaWJ1dGVWYWx1ZUZuJyBpbiBvcHRpb25zKSBhdHRyaWJ1dGVzW2tleV0gPSBvcHRpb25zLmF0dHJpYnV0ZVZhbHVlRm4oYXR0cmlidXRlc1trZXldLCBrZXksIGN1cnJlbnRFbGVtZW50KTtcclxuICAgICAgICBpZiAoJ2F0dHJpYnV0ZU5hbWVGbicgaW4gb3B0aW9ucykge1xyXG4gICAgICAgICAgdmFyIHRlbXAgPSBhdHRyaWJ1dGVzW2tleV07XHJcbiAgICAgICAgICBkZWxldGUgYXR0cmlidXRlc1trZXldO1xyXG4gICAgICAgICAgYXR0cmlidXRlc1tvcHRpb25zLmF0dHJpYnV0ZU5hbWVGbihrZXksIGF0dHJpYnV0ZXNba2V5XSwgY3VycmVudEVsZW1lbnQpXSA9IHRlbXA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBhdHRyaWJ1dGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkluc3RydWN0aW9uKGluc3RydWN0aW9uKSB7XHJcbiAgdmFyIGF0dHJpYnV0ZXMgPSB7fTtcclxuICBpZiAoaW5zdHJ1Y3Rpb24uYm9keSAmJiAoaW5zdHJ1Y3Rpb24ubmFtZS50b0xvd2VyQ2FzZSgpID09PSAneG1sJyB8fCBvcHRpb25zLmluc3RydWN0aW9uSGFzQXR0cmlidXRlcykpIHtcclxuICAgIHZhciBhdHRyc1JlZ0V4cCA9IC8oW1xcdzotXSspXFxzKj1cXHMqKD86XCIoW15cIl0qKVwifCcoW14nXSopJ3woXFx3KykpXFxzKi9nO1xyXG4gICAgdmFyIG1hdGNoO1xyXG4gICAgd2hpbGUgKChtYXRjaCA9IGF0dHJzUmVnRXhwLmV4ZWMoaW5zdHJ1Y3Rpb24uYm9keSkpICE9PSBudWxsKSB7XHJcbiAgICAgIGF0dHJpYnV0ZXNbbWF0Y2hbMV1dID0gbWF0Y2hbMl0gfHwgbWF0Y2hbM10gfHwgbWF0Y2hbNF07XHJcbiAgICB9XHJcbiAgICBhdHRyaWJ1dGVzID0gbWFuaXB1bGF0ZUF0dHJpYnV0ZXMoYXR0cmlidXRlcyk7XHJcbiAgfVxyXG4gIGlmIChpbnN0cnVjdGlvbi5uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd4bWwnKSB7XHJcbiAgICBpZiAob3B0aW9ucy5pZ25vcmVEZWNsYXJhdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjdXJyZW50RWxlbWVudFtvcHRpb25zLmRlY2xhcmF0aW9uS2V5XSA9IHt9O1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmxlbmd0aCkge1xyXG4gICAgICBjdXJyZW50RWxlbWVudFtvcHRpb25zLmRlY2xhcmF0aW9uS2V5XVtvcHRpb25zLmF0dHJpYnV0ZXNLZXldID0gYXR0cmlidXRlcztcclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLmFkZFBhcmVudCkge1xyXG4gICAgICBjdXJyZW50RWxlbWVudFtvcHRpb25zLmRlY2xhcmF0aW9uS2V5XVtvcHRpb25zLnBhcmVudEtleV0gPSBjdXJyZW50RWxlbWVudDtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKG9wdGlvbnMuaWdub3JlSW5zdHJ1Y3Rpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMudHJpbSkge1xyXG4gICAgICBpbnN0cnVjdGlvbi5ib2R5ID0gaW5zdHJ1Y3Rpb24uYm9keS50cmltKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgdmFsdWUgPSB7fTtcclxuICAgIGlmIChvcHRpb25zLmluc3RydWN0aW9uSGFzQXR0cmlidXRlcyAmJiBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5sZW5ndGgpIHtcclxuICAgICAgdmFsdWVbaW5zdHJ1Y3Rpb24ubmFtZV0gPSB7fTtcclxuICAgICAgdmFsdWVbaW5zdHJ1Y3Rpb24ubmFtZV1bb3B0aW9ucy5hdHRyaWJ1dGVzS2V5XSA9IGF0dHJpYnV0ZXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWx1ZVtpbnN0cnVjdGlvbi5uYW1lXSA9IGluc3RydWN0aW9uLmJvZHk7XHJcbiAgICB9XHJcbiAgICBhZGRGaWVsZCgnaW5zdHJ1Y3Rpb24nLCB2YWx1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvblN0YXJ0RWxlbWVudChuYW1lLCBhdHRyaWJ1dGVzKSB7XHJcbiAgdmFyIGVsZW1lbnQ7XHJcbiAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0Jykge1xyXG4gICAgYXR0cmlidXRlcyA9IG5hbWUuYXR0cmlidXRlcztcclxuICAgIG5hbWUgPSBuYW1lLm5hbWU7XHJcbiAgfVxyXG4gIGF0dHJpYnV0ZXMgPSBtYW5pcHVsYXRlQXR0cmlidXRlcyhhdHRyaWJ1dGVzKTtcclxuICBpZiAoJ2VsZW1lbnROYW1lRm4nIGluIG9wdGlvbnMpIHtcclxuICAgIG5hbWUgPSBvcHRpb25zLmVsZW1lbnROYW1lRm4obmFtZSwgY3VycmVudEVsZW1lbnQpO1xyXG4gIH1cclxuICBpZiAob3B0aW9ucy5jb21wYWN0KSB7XHJcbiAgICBlbGVtZW50ID0ge307XHJcbiAgICBpZiAoIW9wdGlvbnMuaWdub3JlQXR0cmlidXRlcyAmJiBhdHRyaWJ1dGVzICYmIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmxlbmd0aCkge1xyXG4gICAgICBlbGVtZW50W29wdGlvbnMuYXR0cmlidXRlc0tleV0gPSB7fTtcclxuICAgICAgdmFyIGtleTtcclxuICAgICAgZm9yIChrZXkgaW4gYXR0cmlidXRlcykge1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgIGVsZW1lbnRbb3B0aW9ucy5hdHRyaWJ1dGVzS2V5XVtrZXldID0gYXR0cmlidXRlc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICAhKG5hbWUgaW4gY3VycmVudEVsZW1lbnQpICYmXHJcbiAgICAgIChpc0FycmF5KG9wdGlvbnMuYWx3YXlzQXJyYXkpID8gb3B0aW9ucy5hbHdheXNBcnJheS5pbmRleE9mKG5hbWUpICE9PSAtMSA6IG9wdGlvbnMuYWx3YXlzQXJyYXkpXHJcbiAgICApIHtcclxuICAgICAgY3VycmVudEVsZW1lbnRbbmFtZV0gPSBbXTtcclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50RWxlbWVudFtuYW1lXSAmJiAhaXNBcnJheShjdXJyZW50RWxlbWVudFtuYW1lXSkpIHtcclxuICAgICAgY3VycmVudEVsZW1lbnRbbmFtZV0gPSBbY3VycmVudEVsZW1lbnRbbmFtZV1dO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzQXJyYXkoY3VycmVudEVsZW1lbnRbbmFtZV0pKSB7XHJcbiAgICAgIGN1cnJlbnRFbGVtZW50W25hbWVdLnB1c2goZWxlbWVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdXJyZW50RWxlbWVudFtuYW1lXSA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICghY3VycmVudEVsZW1lbnRbb3B0aW9ucy5lbGVtZW50c0tleV0pIHtcclxuICAgICAgY3VycmVudEVsZW1lbnRbb3B0aW9ucy5lbGVtZW50c0tleV0gPSBbXTtcclxuICAgIH1cclxuICAgIGVsZW1lbnQgPSB7fTtcclxuICAgIGVsZW1lbnRbb3B0aW9ucy50eXBlS2V5XSA9ICdlbGVtZW50JztcclxuICAgIGVsZW1lbnRbb3B0aW9ucy5uYW1lS2V5XSA9IG5hbWU7XHJcbiAgICBpZiAoIW9wdGlvbnMuaWdub3JlQXR0cmlidXRlcyAmJiBhdHRyaWJ1dGVzICYmIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmxlbmd0aCkge1xyXG4gICAgICBlbGVtZW50W29wdGlvbnMuYXR0cmlidXRlc0tleV0gPSBhdHRyaWJ1dGVzO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMuYWx3YXlzQ2hpbGRyZW4pIHtcclxuICAgICAgZWxlbWVudFtvcHRpb25zLmVsZW1lbnRzS2V5XSA9IFtdO1xyXG4gICAgfVxyXG4gICAgY3VycmVudEVsZW1lbnRbb3B0aW9ucy5lbGVtZW50c0tleV0ucHVzaChlbGVtZW50KTtcclxuICB9XHJcbiAgZWxlbWVudFtvcHRpb25zLnBhcmVudEtleV0gPSBjdXJyZW50RWxlbWVudDsgLy8gd2lsbCBiZSBkZWxldGVkIGluIG9uRW5kRWxlbWVudCgpIGlmICFvcHRpb25zLmFkZFBhcmVudFxyXG4gIGN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gb25UZXh0KHRleHQpIHtcclxuICBpZiAob3B0aW9ucy5pZ25vcmVUZXh0KSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmICghdGV4dC50cmltKCkgJiYgIW9wdGlvbnMuY2FwdHVyZVNwYWNlc0JldHdlZW5FbGVtZW50cykge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAob3B0aW9ucy50cmltKSB7XHJcbiAgICB0ZXh0ID0gdGV4dC50cmltKCk7XHJcbiAgfVxyXG4gIGlmIChvcHRpb25zLm5hdGl2ZVR5cGUpIHtcclxuICAgIHRleHQgPSBuYXRpdmVUeXBlKHRleHQpO1xyXG4gIH1cclxuICBpZiAob3B0aW9ucy5zYW5pdGl6ZSkge1xyXG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xyXG4gIH1cclxuICBhZGRGaWVsZCgndGV4dCcsIHRleHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkNvbW1lbnQoY29tbWVudCkge1xyXG4gIGlmIChvcHRpb25zLmlnbm9yZUNvbW1lbnQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKG9wdGlvbnMudHJpbSkge1xyXG4gICAgY29tbWVudCA9IGNvbW1lbnQudHJpbSgpO1xyXG4gIH1cclxuICBhZGRGaWVsZCgnY29tbWVudCcsIGNvbW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkVuZEVsZW1lbnQobmFtZSkge1xyXG4gIHZhciBwYXJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnRbb3B0aW9ucy5wYXJlbnRLZXldO1xyXG4gIGlmICghb3B0aW9ucy5hZGRQYXJlbnQpIHtcclxuICAgIGRlbGV0ZSBjdXJyZW50RWxlbWVudFtvcHRpb25zLnBhcmVudEtleV07XHJcbiAgfVxyXG4gIGN1cnJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gb25DZGF0YShjZGF0YSkge1xyXG4gIGlmIChvcHRpb25zLmlnbm9yZUNkYXRhKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChvcHRpb25zLnRyaW0pIHtcclxuICAgIGNkYXRhID0gY2RhdGEudHJpbSgpO1xyXG4gIH1cclxuICBhZGRGaWVsZCgnY2RhdGEnLCBjZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uRG9jdHlwZShkb2N0eXBlKSB7XHJcbiAgaWYgKG9wdGlvbnMuaWdub3JlRG9jdHlwZSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBkb2N0eXBlID0gZG9jdHlwZS5yZXBsYWNlKC9eIC8sICcnKTtcclxuICBpZiAob3B0aW9ucy50cmltKSB7XHJcbiAgICBkb2N0eXBlID0gZG9jdHlwZS50cmltKCk7XHJcbiAgfVxyXG4gIGFkZEZpZWxkKCdkb2N0eXBlJywgZG9jdHlwZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcclxuICBlcnJvci5ub3RlID0gZXJyb3I7IC8vY29uc29sZS5lcnJvcihlcnJvcik7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHhtbCwgdXNlck9wdGlvbnMpIHtcclxuXHJcbiAgdmFyIHBhcnNlciA9IHB1cmVKc1BhcnNlciA/IHNheC5wYXJzZXIodHJ1ZSwge30pIDogcGFyc2VyID0gbmV3IGV4cGF0LlBhcnNlcignVVRGLTgnKTtcclxuICB2YXIgcmVzdWx0ID0ge307XHJcbiAgY3VycmVudEVsZW1lbnQgPSByZXN1bHQ7XHJcblxyXG4gIG9wdGlvbnMgPSB2YWxpZGF0ZU9wdGlvbnModXNlck9wdGlvbnMpO1xyXG5cclxuICBpZiAocHVyZUpzUGFyc2VyKSB7XHJcbiAgICBwYXJzZXIub3B0ID0ge3N0cmljdEVudGl0aWVzOiB0cnVlfTtcclxuICAgIHBhcnNlci5vbm9wZW50YWcgPSBvblN0YXJ0RWxlbWVudDtcclxuICAgIHBhcnNlci5vbnRleHQgPSBvblRleHQ7XHJcbiAgICBwYXJzZXIub25jb21tZW50ID0gb25Db21tZW50O1xyXG4gICAgcGFyc2VyLm9uY2xvc2V0YWcgPSBvbkVuZEVsZW1lbnQ7XHJcbiAgICBwYXJzZXIub25lcnJvciA9IG9uRXJyb3I7XHJcbiAgICBwYXJzZXIub25jZGF0YSA9IG9uQ2RhdGE7XHJcbiAgICBwYXJzZXIub25kb2N0eXBlID0gb25Eb2N0eXBlO1xyXG4gICAgcGFyc2VyLm9ucHJvY2Vzc2luZ2luc3RydWN0aW9uID0gb25JbnN0cnVjdGlvbjtcclxuICB9IGVsc2Uge1xyXG4gICAgcGFyc2VyLm9uKCdzdGFydEVsZW1lbnQnLCBvblN0YXJ0RWxlbWVudCk7XHJcbiAgICBwYXJzZXIub24oJ3RleHQnLCBvblRleHQpO1xyXG4gICAgcGFyc2VyLm9uKCdjb21tZW50Jywgb25Db21tZW50KTtcclxuICAgIHBhcnNlci5vbignZW5kRWxlbWVudCcsIG9uRW5kRWxlbWVudCk7XHJcbiAgICBwYXJzZXIub24oJ2Vycm9yJywgb25FcnJvcik7XHJcbiAgICAvL3BhcnNlci5vbignc3RhcnRDZGF0YScsIG9uU3RhcnRDZGF0YSk7XHJcbiAgICAvL3BhcnNlci5vbignZW5kQ2RhdGEnLCBvbkVuZENkYXRhKTtcclxuICAgIC8vcGFyc2VyLm9uKCdlbnRpdHlEZWNsJywgb25FbnRpdHlEZWNsKTtcclxuICB9XHJcblxyXG4gIGlmIChwdXJlSnNQYXJzZXIpIHtcclxuICAgIHBhcnNlci53cml0ZSh4bWwpLmNsb3NlKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICghcGFyc2VyLnBhcnNlKHhtbCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdYTUwgcGFyc2luZyBlcnJvcjogJyArIHBhcnNlci5nZXRFcnJvcigpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChyZXN1bHRbb3B0aW9ucy5lbGVtZW50c0tleV0pIHtcclxuICAgIHZhciB0ZW1wID0gcmVzdWx0W29wdGlvbnMuZWxlbWVudHNLZXldO1xyXG4gICAgZGVsZXRlIHJlc3VsdFtvcHRpb25zLmVsZW1lbnRzS2V5XTtcclxuICAgIHJlc3VsdFtvcHRpb25zLmVsZW1lbnRzS2V5XSA9IHRlbXA7XHJcbiAgICBkZWxldGUgcmVzdWx0LnRleHQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG5cclxufTtcclxuIiwidmFyIGhlbHBlciA9IHJlcXVpcmUoJy4vb3B0aW9ucy1oZWxwZXInKTtcclxudmFyIHhtbDJqcyA9IHJlcXVpcmUoJy4veG1sMmpzJyk7XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZU9wdGlvbnMgKHVzZXJPcHRpb25zKSB7XHJcbiAgdmFyIG9wdGlvbnMgPSBoZWxwZXIuY29weU9wdGlvbnModXNlck9wdGlvbnMpO1xyXG4gIGhlbHBlci5lbnN1cmVTcGFjZXNFeGlzdHMob3B0aW9ucyk7XHJcbiAgcmV0dXJuIG9wdGlvbnM7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oeG1sLCB1c2VyT3B0aW9ucykge1xyXG4gIHZhciBvcHRpb25zLCBqcywganNvbiwgcGFyZW50S2V5O1xyXG4gIG9wdGlvbnMgPSB2YWxpZGF0ZU9wdGlvbnModXNlck9wdGlvbnMpO1xyXG4gIGpzID0geG1sMmpzKHhtbCwgb3B0aW9ucyk7XHJcbiAgcGFyZW50S2V5ID0gJ2NvbXBhY3QnIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5jb21wYWN0ID8gJ19wYXJlbnQnIDogJ3BhcmVudCc7XHJcbiAgLy8gcGFyZW50S2V5ID0gcHRpb25zLmNvbXBhY3QgPyAnX3BhcmVudCcgOiAncGFyZW50JzsgLy8gY29uc2lkZXIgdGhpc1xyXG4gIGlmICgnYWRkUGFyZW50JyBpbiBvcHRpb25zICYmIG9wdGlvbnMuYWRkUGFyZW50KSB7XHJcbiAgICBqc29uID0gSlNPTi5zdHJpbmdpZnkoanMsIGZ1bmN0aW9uIChrLCB2KSB7IHJldHVybiBrID09PSBwYXJlbnRLZXk/ICdfJyA6IHY7IH0sIG9wdGlvbnMuc3BhY2VzKTtcclxuICB9IGVsc2Uge1xyXG4gICAganNvbiA9IEpTT04uc3RyaW5naWZ5KGpzLCBudWxsLCBvcHRpb25zLnNwYWNlcyk7XHJcbiAgfVxyXG4gIHJldHVybiBqc29uLnJlcGxhY2UoL1xcdTIwMjgvZywgJ1xcXFx1MjAyOCcpLnJlcGxhY2UoL1xcdTIwMjkvZywgJ1xcXFx1MjAyOScpO1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF90aGlzID0gdGhpcztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB4bWxfanNfMSA9IHJlcXVpcmUoXCJ4bWwtanNcIik7XG5leHBvcnRzLnJlcXVlc3QgPSBmdW5jdGlvbiAoZW5kcG9pbnQsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgdHlwZSwgc2Vzc2lvbikgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBmb3JtLCByZXNwb25zZSwgeG1sO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoXCJtZXRob2RcIiwgXCJjbGlcIik7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKFwieG1sXCIsIFwiMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoXCJpbWVpXCIsIFwiY2xpXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uICYmIGZvcm0uYXBwZW5kKFwidG9rZW5cIiwgc2Vzc2lvbi50b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGJvZHkpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZChrZXksIGJvZHlba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoZWFkZXJzID0gX19hc3NpZ24oe30sIChzZXNzaW9uICYmIHtcbiAgICAgICAgICAgICAgICAgICAgQ29va2llOiBcIlBIUFNFU1NJRD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzZXNzaW9uLnNlc3Npb25pZCkgKyBcIjtcIlxuICAgICAgICAgICAgICAgIH0pLCBoZWFkZXJzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaChlbmRwb2ludCwgX19hc3NpZ24oeyBtZXRob2Q6IG1ldGhvZCB9LCAoYm9keSAmJiB7IGJvZHk6IGZvcm0gfSksIHsgaGVhZGVyczogaGVhZGVycyB9KSldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgcmVxdWVzdGluZyBkYXRhLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzcG9uc2UudGV4dCgpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB4bWwgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwianNcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgeG1sX2pzXzEueG1sMmpzKHhtbCwgeyBjb21wYWN0OiB0cnVlIH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHhtbF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xuZXhwb3J0cy5JVEVSQVRJT05TID0gXCJodHRwczovL2xhc3RwYXNzLmNvbS9pdGVyYXRpb25zLnBocFwiO1xuZXhwb3J0cy5MT0dJTiA9IFwiaHR0cHM6Ly9sYXN0cGFzcy5jb20vbG9naW4ucGhwXCI7XG5leHBvcnRzLlZBVUxUID0gXCJodHRwczovL2xhc3RwYXNzLmNvbS9nZXRhY2N0cy5waHBcIjtcbmV4cG9ydHMuQ1JFQVRFID0gXCJodHRwczovL2xhc3RwYXNzLmNvbS9zaG93X3dlYnNpdGUucGhwXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNyeXB0b18xID0gcmVxdWlyZShcImNyeXB0b1wiKTtcbnZhciBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xudmFyIExhc3RQYXNzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExhc3RQYXNzKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmxvZ2luID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCwgb3RwKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaXRlcmF0aW9ucywgaGFzaCwgYm9keSwganNvbjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5nZXRJdGVyYXRpb25zKHVzZXJuYW1lKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmtleSA9IHRoaXMuZ2V0S2V5KHVzZXJuYW1lLCBwYXNzd29yZCwgaXRlcmF0aW9ucy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc2ggPSB0aGlzLmdldEhhc2godGhpcy5rZXksIHBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgPSBfX2Fzc2lnbih7IHVzZXJuYW1lOiB1c2VybmFtZSwgaGFzaDogaGFzaCwgaXRlcmF0aW9uczogaXRlcmF0aW9ucyB9LCAob3RwICYmIHsgb3RwOiBvdHAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5yZXF1ZXN0KGhlbHBlcnNfMS5MT0dJTiwgXCJQT1NUXCIsIGJvZHksIHt9LCBcImpzXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAganNvbiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghanNvbiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFqc29uLm9rIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWpzb24ub2suX2F0dHJpYnV0ZXMgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhanNvbi5vay5fYXR0cmlidXRlcy5zZXNzaW9uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCYWQgc2Vzc2lvbiByZXNwb25zZS5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24gPSBqc29uLm9rLl9hdHRyaWJ1dGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgfTtcbiAgICAgICAgdGhpcy5nZXRBY2NvdW50cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5kZWNyeXB0QWNjb3VudHMoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyB9O1xuICAgICAgICB0aGlzLmFkZEFjY291bnQgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkLCB1cmwsIG5hbWUsIG90cCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGJvZHksIG1zZztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lID0gdGhpcy5lbmNyeXB0KHVzZXJuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkID0gdGhpcy5lbmNyeXB0KHBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSB0aGlzLmVuY3J5cHQobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3RwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90cCA9IHRoaXMuZW5jcnlwdChvdHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gQnVmZmVyLmZyb20odXJsKS50b1N0cmluZyhcImhleFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0anM6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFpZDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cGluZzogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RwOiBvdHBcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnJlcXVlc3QoaGVscGVyc18xLkNSRUFURSwgXCJQT1NUXCIsIGJvZHksIHt9LCBcImpzXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gKF9hLnNlbnQoKSkueG1scmVzcG9uc2UucmVzdWx0Ll9hdHRyaWJ1dGVzLm1zZztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtc2cgIT09IFwiYWNjb3VudGFkZGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQW4gdW5rbm93biBlcnJvciBvY2N1cmVkIHdoaWxlIGFkZGluZyB0aGUgcmVjb3JkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH07XG4gICAgICAgIHRoaXMuZ2V0SGFzaCA9IGZ1bmN0aW9uIChrZXksIHBhc3N3b3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gY3J5cHRvXzEucGJrZGYyU3luYyhrZXksIEJ1ZmZlci5mcm9tKHBhc3N3b3JkKSwgMSwgMzIsIFwic2hhMjU2XCIpLnRvU3RyaW5nKFwiaGV4XCIpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldEl0ZXJhdGlvbnMgPSBmdW5jdGlvbiAoZW1haWwpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0O1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnJlcXVlc3QoaGVscGVyc18xLklURVJBVElPTlMsIFwiUE9TVFwiLCB7IGVtYWlsOiBlbWFpbCB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSAoX2Euc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBwYXJzZUludCh0ZXh0LCAxMCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgfTtcbiAgICAgICAgdGhpcy5mZXRjaEFjY291bnRzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFjY291bnQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucmVxdWVzdChoZWxwZXJzXzEuVkFVTFQsIFwiUE9TVFwiLCBmYWxzZSwge30sIFwianNcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50ID0gKF9hLnNlbnQoKSkucmVzcG9uc2UuYWNjb3VudHMuYWNjb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBBcnJheS5pc0FycmF5KGFjY291bnQpID8gYWNjb3VudCA6IFthY2NvdW50XV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyB9O1xuICAgICAgICB0aGlzLmRlY3J5cHRBY2NvdW50cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYXRhLCBhY2NvdW50cywgaSwgX2EsIF9iLCBuYW1lXzEsIHVybCwgdXNlcm5hbWUsIHAsIGRlY3J5cHRlZEFjY291bnQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZmV0Y2hBY2NvdW50cygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gZGF0YVtpXSwgX2IgPSBfYS5fYXR0cmlidXRlcywgbmFtZV8xID0gX2IubmFtZSwgdXJsID0gX2IudXJsLCB1c2VybmFtZSA9IF9iLnVzZXJuYW1lLCBwID0gX2EubG9naW4uX2F0dHJpYnV0ZXMucDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNyeXB0ZWRBY2NvdW50ID0gdGhpcy5kZWNyeXB0QWNjb3VudCh7IG5hbWU6IG5hbWVfMSwgdXJsOiB1cmwsIHVzZXJuYW1lOiB1c2VybmFtZSwgcDogcCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50cy5wdXNoKGRlY3J5cHRlZEFjY291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGFjY291bnRzXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH07XG4gICAgICAgIHRoaXMuZGVjcnlwdEFjY291bnQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gX2EubmFtZSwgcCA9IF9hLnAsIHVybCA9IF9hLnVybCwgdXNlcm5hbWUgPSBfYS51c2VybmFtZTtcbiAgICAgICAgICAgIG5hbWUgPSBfdGhpcy5nZXRGaWVsZChuYW1lKTtcbiAgICAgICAgICAgIHVybCA9IF90aGlzLmdldEZpZWxkKHVybCk7XG4gICAgICAgICAgICB1c2VybmFtZSA9IF90aGlzLmdldEZpZWxkKHVzZXJuYW1lKTtcbiAgICAgICAgICAgIHAgPSBfdGhpcy5nZXRGaWVsZChwKTtcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6IG5hbWUsIHVybDogdXJsLCB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwIH07XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0RmllbGQgPSBmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBmaWVsZC5sZW5ndGg7XG4gICAgICAgICAgICBpZiAobGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgdmFyIGRlY3J5cHRlZCA9IFwiXCI7XG4gICAgICAgICAgICBpZiAoZmllbGQuc2xpY2UoMCwgMSkgPT09IFwiIVwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hID0gZmllbGQuc3BsaXQoXCJ8XCIpLCBpdiA9IF9hWzBdLCBwYXlsb2FkID0gX2FbMV07XG4gICAgICAgICAgICAgICAgaWYgKGl2ICYmIHBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjcnlwdGVkID0gX3RoaXMuZGVjcnlwdChCdWZmZXIuZnJvbShwYXlsb2FkLCBcImJhc2U2NFwiKSwgQnVmZmVyLmZyb20oaXYuc2xpY2UoMSksIFwiYmFzZTY0XCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQpXG4gICAgICAgICAgICAgICAgICAgIGRlY3J5cHRlZCA9IEJ1ZmZlci5mcm9tKGZpZWxkLCBcImhleFwiKS50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRlY3J5cHRlZDtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kZWNyeXB0ID0gZnVuY3Rpb24gKGRhdGEsIGl2KSB7XG4gICAgICAgICAgICB2YXIgZGVjaXBoZXIgPSBjcnlwdG9fMS5jcmVhdGVEZWNpcGhlcml2KFwiYWVzLTI1Ni1jYmNcIiwgX3RoaXMua2V5LCBpdik7XG4gICAgICAgICAgICB2YXIgcGxhaW50ZXh0ID0gZGVjaXBoZXIudXBkYXRlKGRhdGEpLnRvU3RyaW5nKFwidXRmOFwiKTtcbiAgICAgICAgICAgIHBsYWludGV4dCArPSBkZWNpcGhlci5maW5hbCgpLnRvU3RyaW5nKFwidXRmOFwiKTtcbiAgICAgICAgICAgIHJldHVybiBwbGFpbnRleHQ7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZW5jcnlwdCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB2YXIgaXYgPSBjcnlwdG9fMS5yYW5kb21CeXRlcygxNik7XG4gICAgICAgICAgICB2YXIgY2lwaGVyID0gY3J5cHRvXzEuY3JlYXRlQ2lwaGVyaXYoXCJhZXMtMjU2LWNiY1wiLCBfdGhpcy5rZXksIGl2KTtcbiAgICAgICAgICAgIHZhciBjaXBoZXJUZXh0ID0gY2lwaGVyLnVwZGF0ZShCdWZmZXIuZnJvbShkYXRhKSkudG9TdHJpbmcoXCJiYXNlNjRcIik7XG4gICAgICAgICAgICBjaXBoZXJUZXh0ICs9IGNpcGhlci5maW5hbCgpLnRvU3RyaW5nKFwiYmFzZTY0XCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiIVwiICsgaXYudG9TdHJpbmcoXCJiYXNlNjRcIikgKyBcInxcIiArIGNpcGhlclRleHQ7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0S2V5ID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCwgaXRlcmF0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIGNyeXB0b18xLnBia2RmMlN5bmMoQnVmZmVyLmZyb20ocGFzc3dvcmQpLCBCdWZmZXIuZnJvbSh1c2VybmFtZSksIHBhcnNlSW50KGl0ZXJhdGlvbnMpLCAzMiwgXCJzaGEyNTZcIik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVxdWVzdCA9IGZ1bmN0aW9uIChlbmRwb2ludCwgbWV0aG9kLCBib2R5LCBoZWFkZXJzLCB0eXBlKSB7XG4gICAgICAgICAgICBpZiAoaGVhZGVycyA9PT0gdm9pZCAwKSB7IGhlYWRlcnMgPSB7fTsgfVxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IHZvaWQgMCkgeyB0eXBlID0gXCJ0ZXh0XCI7IH1cbiAgICAgICAgICAgIHJldHVybiBoZWxwZXJzXzEucmVxdWVzdChlbmRwb2ludCwgbWV0aG9kLCBib2R5LCBoZWFkZXJzLCB0eXBlLCBfdGhpcy5zZXNzaW9uKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIExhc3RQYXNzO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExhc3RQYXNzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJlYW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyaW5nX2RlY29kZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiemxpYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9