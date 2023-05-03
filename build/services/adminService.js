"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _index = _interopRequireDefault(require("../models/index"));
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var getTopDoctorHome = function getTopDoctorHome(limit) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var users;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _index["default"].User.findAll({
              limit: limit,
              where: {
                roleId: 'R2'
              },
              order: [['createdAt', 'DESC']],
              attributes: {
                exclude: ['password']
              },
              include: [{
                model: _index["default"].Allcode,
                as: 'positionData',
                attributes: ['valueEn', 'valueVi']
              }, {
                model: _index["default"].Allcode,
                as: 'genderData',
                attributes: ['valueEn', 'valueVi']
              }, {
                model: _index["default"].Doctor_Info,
                attributes: [],
                include: [{
                  model: _index["default"].Specialty,
                  as: 'specialtyData',
                  attributes: ['name']
                }]
              }],
              raw: true,
              nest: true
            });
          case 3:
            users = _context.sent;
            if (users && users.length > 0) users = users.map(function (user) {
              return _objectSpread(_objectSpread({}, user), {}, {
                image: user.image ? Buffer.from(user.image, 'base64').toString('binary') : null
              });
            });
            resolve({
              errCode: 0,
              topDoctors: users
            });
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            reject(_context.t0);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
var getAllDoctors = function getAllDoctors(limit) {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var users;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _index["default"].User.findAll({
              limit: limit,
              where: {
                roleId: 'R2'
              },
              order: [['createdAt', 'DESC']],
              attributes: {
                exclude: ['password', 'image']
              }
            });
          case 3:
            users = _context2.sent;
            resolve({
              errCode: 0,
              allDoctors: users
            });
            _context2.next = 10;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var createMarkDown = function createMarkDown(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _index["default"].Markdowns.create({
              contentHTML: data.contentHTML,
              contentMarkDown: data.contentMarkDown,
              description: data.description,
              doctorId: data.doctorId
            });
          case 3:
            resolve({
              errCode: 0,
              errMessage: 'OK'
            });
            _context3.next = 9;
            break;
          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 9:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 6]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var createDoctorInfo = function createDoctorInfo(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _index["default"].Doctor_Info.create({
              doctorId: data.doctorId,
              priceId: data.priceId,
              provinceId: data.provinceId,
              paymentId: data.paymentId,
              nameClinic: data.nameClinic,
              addressClinic: data.addressClinic,
              note: data.note,
              specialtyId: data.specialtyId
            });
          case 3:
            resolve({
              errCode: 0,
              errMessage: 'OK'
            });
            _context4.next = 9;
            break;
          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);
          case 9:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 6]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var updateMarkDown = function updateMarkDown(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var markdown;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _index["default"].Markdowns.findOne({
              where: {
                doctorId: data.doctorId
              },
              raw: false
            });
          case 3:
            markdown = _context5.sent;
            markdown.contentHTML = data.contentHTML;
            markdown.contentMarkDown = data.contentMarkDown;
            markdown.description = data.description;
            markdown.save();
            resolve({
              errCode: 0,
              errMessage: 'OK'
            });
            _context5.next = 14;
            break;
          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);
          case 14:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 11]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};
var updateDoctorInfo = function updateDoctorInfo(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var doctorInfo;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _index["default"].Doctor_Info.findOne({
              where: {
                doctorId: data.doctorId
              },
              raw: false
            });
          case 3:
            doctorInfo = _context6.sent;
            doctorInfo.priceId = data.priceId;
            doctorInfo.provinceId = data.provinceId;
            doctorInfo.paymentId = data.paymentId;
            doctorInfo.nameClinic = data.nameClinic;
            doctorInfo.addressClinic = data.addressClinic;
            doctorInfo.note = data.note;
            doctorInfo.specialtyId = data.specialtyId;
            doctorInfo.save();
            resolve({
              errCode: 0,
              errMessage: 'OK'
            });
            _context6.next = 18;
            break;
          case 15:
            _context6.prev = 15;
            _context6.t0 = _context6["catch"](0);
            reject(_context6.t0);
          case 18:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 15]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
};
var getDoctorInfo = function getDoctorInfo(doctorId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
      var doctorInfo;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _index["default"].Doctor_Info.findOne({
              where: {
                doctorId: doctorId
              },
              include: [{
                model: _index["default"].Allcode,
                as: 'priceData',
                attributes: ['valueEn', 'valueVi']
              }, {
                model: _index["default"].Allcode,
                as: 'provinceData',
                attributes: ['valueEn', 'valueVi']
              }, {
                model: _index["default"].Allcode,
                as: 'paymentData',
                attributes: ['valueEn', 'valueVi']
              }],
              raw: true,
              nest: true
            });
          case 3:
            doctorInfo = _context7.sent;
            resolve({
              errCode: 0,
              doctorInfo: doctorInfo
            });
            _context7.next = 10;
            break;
          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            reject(_context7.t0);
          case 10:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 7]]);
    }));
    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }());
};
var getDetailDoctorById = function getDetailDoctorById(doctorId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var doctorInfo;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _index["default"].User.findOne({
              where: {
                id: doctorId
              },
              attributes: {
                exclude: ['password']
              },
              include: [{
                model: _index["default"].Markdowns,
                attributes: ['description', 'contentHTML', 'contentMarkDown']
              }, {
                model: _index["default"].Allcode,
                as: 'positionData',
                attributes: ['valueEn', 'valueVi']
              }, {
                model: _index["default"].Doctor_Info,
                attributes: {
                  exclude: ['id', 'doctorId']
                },
                include: [{
                  model: _index["default"].Allcode,
                  as: 'priceData',
                  attributes: ['valueEn', 'valueVi']
                }, {
                  model: _index["default"].Allcode,
                  as: 'provinceData',
                  attributes: ['valueEn', 'valueVi']
                }, {
                  model: _index["default"].Allcode,
                  as: 'paymentData',
                  attributes: ['valueEn', 'valueVi']
                }, {
                  model: _index["default"].Specialty,
                  as: 'specialtyData',
                  attributes: ['name']
                }]
              }],
              raw: true,
              nest: true
            });
          case 3:
            doctorInfo = _context8.sent;
            resolve({
              errCode: 0,
              doctorInfo: _objectSpread(_objectSpread({}, doctorInfo), {}, {
                image: doctorInfo.image ? Buffer.from(doctorInfo.image, 'base64').toString('binary') : null
              })
            });
            _context8.next = 10;
            break;
          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](0);
            reject(_context8.t0);
          case 10:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 7]]);
    }));
    return function (_x15, _x16) {
      return _ref8.apply(this, arguments);
    };
  }());
};
var createBulkSchedules = function createBulkSchedules(schedules) {
  return new Promise( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _index["default"].Schedule.bulkCreate(schedules);
          case 3:
            resolve({
              errCode: 0,
              errMessage: 'OK'
            });
            _context9.next = 9;
            break;
          case 6:
            _context9.prev = 6;
            _context9.t0 = _context9["catch"](0);
            reject({
              errCode: 1,
              errMessage: 'error from server'
            });
          case 9:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 6]]);
    }));
    return function (_x17, _x18) {
      return _ref9.apply(this, arguments);
    };
  }());
};
var updateBulkSchedules = function updateBulkSchedules(schedules) {
  return new Promise( /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return _index["default"].Schedule.destroy({
              where: {
                doctorId: schedules[0].doctorId,
                date: schedules[0].date
              },
              raw: true
            });
          case 3:
            _context10.next = 5;
            return _index["default"].Schedule.bulkCreate(schedules);
          case 5:
            resolve({
              errCode: 0,
              errMessage: 'OK'
            });
            _context10.next = 11;
            break;
          case 8:
            _context10.prev = 8;
            _context10.t0 = _context10["catch"](0);
            reject({
              errCode: 1,
              errMessage: 'error from server'
            });
          case 11:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 8]]);
    }));
    return function (_x19, _x20) {
      return _ref10.apply(this, arguments);
    };
  }());
};
var getSchedules = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(doctorId, date) {
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          return _context12.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
              var allSchedules;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.prev = 0;
                    date = new Date(date * 1);
                    _context11.next = 4;
                    return _index["default"].Schedule.findAll({
                      where: {
                        doctorId: doctorId,
                        date: date
                      },
                      attributes: ['timeType'],
                      include: [{
                        model: _index["default"].Allcode,
                        as: 'timeData',
                        attributes: ['valueEn', 'valueVi']
                      }]
                    });
                  case 4:
                    allSchedules = _context11.sent;
                    resolve({
                      errCode: 0,
                      allSchedules: allSchedules
                    });
                    _context11.next = 11;
                    break;
                  case 8:
                    _context11.prev = 8;
                    _context11.t0 = _context11["catch"](0);
                    reject({
                      errCode: 1,
                      errMessage: 'error from server'
                    });
                  case 11:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11, null, [[0, 8]]);
            }));
            return function (_x23, _x24) {
              return _ref12.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function getSchedules(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var createSpecialty = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(specialty) {
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          return _context14.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(resolve, reject) {
              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.prev = 0;
                    _context13.next = 3;
                    return _index["default"].Specialty.create({
                      name: specialty.name,
                      image: specialty.avatar,
                      contentHTML: specialty.contentHTML,
                      contentMarkDown: specialty.contentMarkDown
                    });
                  case 3:
                    resolve({
                      errCode: 0,
                      errMessage: 'OK'
                    });
                    _context13.next = 10;
                    break;
                  case 6:
                    _context13.prev = 6;
                    _context13.t0 = _context13["catch"](0);
                    console.log('catch e: ', _context13.t0);
                    reject(_context13.t0);
                  case 10:
                  case "end":
                    return _context13.stop();
                }
              }, _callee13, null, [[0, 6]]);
            }));
            return function (_x26, _x27) {
              return _ref14.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function createSpecialty(_x25) {
    return _ref13.apply(this, arguments);
  };
}();
var updateSpecialty = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(specialty) {
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          return _context16.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(resolve, reject) {
              var _updateSpecialty;
              return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                while (1) switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.prev = 0;
                    _context15.next = 3;
                    return _index["default"].Specialty.findOne({
                      where: {
                        id: specialty.id
                      },
                      raw: false
                    });
                  case 3:
                    _updateSpecialty = _context15.sent;
                    _updateSpecialty.name = specialty.name;
                    _updateSpecialty.image = specialty.image;
                    _updateSpecialty.contentHTML = specialty.contentHTML;
                    _updateSpecialty.contentMarkDown = specialty.contentMarkDown;
                    _updateSpecialty.save();
                    resolve({
                      errCode: 0,
                      errMessage: 'OK'
                    });
                    _context15.next = 16;
                    break;
                  case 12:
                    _context15.prev = 12;
                    _context15.t0 = _context15["catch"](0);
                    console.log('catch e: ', _context15.t0);
                    reject(_context15.t0);
                  case 16:
                  case "end":
                    return _context15.stop();
                }
              }, _callee15, null, [[0, 12]]);
            }));
            return function (_x29, _x30) {
              return _ref16.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function updateSpecialty(_x28) {
    return _ref15.apply(this, arguments);
  };
}();
var getAllSpecialty = function getAllSpecialty() {
  return new Promise( /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(resolve, reject) {
      var allSpecialty;
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            _context17.prev = 0;
            _context17.next = 3;
            return _index["default"].Specialty.findAll({
              raw: true
            });
          case 3:
            allSpecialty = _context17.sent;
            if (allSpecialty && allSpecialty.length > 0) allSpecialty = allSpecialty.map(function (specialty) {
              return _objectSpread(_objectSpread({}, specialty), {}, {
                image: specialty.image ? Buffer.from(specialty.image, 'base64').toString('binary') : null
              });
            });
            resolve({
              errCode: 0,
              errMessage: 'OK',
              allSpecialty: allSpecialty
            });
            _context17.next = 12;
            break;
          case 8:
            _context17.prev = 8;
            _context17.t0 = _context17["catch"](0);
            console.log('catch e: ', _context17.t0);
            reject(_context17.t0);
          case 12:
          case "end":
            return _context17.stop();
        }
      }, _callee17, null, [[0, 8]]);
    }));
    return function (_x31, _x32) {
      return _ref17.apply(this, arguments);
    };
  }());
};
var getSpecialtyById = function getSpecialtyById(specialtyId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(resolve, reject) {
      var specialty;
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            _context18.prev = 0;
            specialty = {};
            _context18.next = 4;
            return _index["default"].Specialty.findOne({
              where: {
                id: specialtyId
              },
              attributes: ['contentHTML', 'image'],
              raw: true
            });
          case 4:
            specialty = _context18.sent;
            if (!_lodash["default"].isEmpty(specialty)) {
              specialty = _objectSpread(_objectSpread({}, specialty), {}, {
                image: specialty.image ? Buffer.from(specialty.image, 'base64').toString('binary') : null
              });
              resolve({
                errCode: 0,
                errMessage: "Get specialty success",
                specialty: specialty
              });
            } else reject({
              errCode: 1,
              errMessage: "Not found specialty"
            });
            _context18.next = 11;
            break;
          case 8:
            _context18.prev = 8;
            _context18.t0 = _context18["catch"](0);
            reject(_context18.t0);
          case 11:
          case "end":
            return _context18.stop();
        }
      }, _callee18, null, [[0, 8]]);
    }));
    return function (_x33, _x34) {
      return _ref18.apply(this, arguments);
    };
  }());
};
var getAllDoctorsOfSpecialty = function getAllDoctorsOfSpecialty(specialtyId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(resolve, reject) {
      var doctorIds;
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            _context19.prev = 0;
            doctorIds = [];
            _context19.next = 4;
            return _index["default"].Doctor_Info.findAll({
              where: {
                specialtyId: specialtyId
              },
              attributes: ['doctorId'],
              raw: true
            });
          case 4:
            doctorIds = _context19.sent;
            if (doctorIds && doctorIds.length > 0) {
              doctorIds = doctorIds.map(function (doctorId) {
                return doctorId.doctorId;
              });
              resolve({
                errCode: 0,
                errMessage: "Get all doctor Ids success",
                doctorIds: doctorIds
              });
            } else reject({
              errCode: 1,
              errMessage: "Not found any doctor"
            });
            _context19.next = 11;
            break;
          case 8:
            _context19.prev = 8;
            _context19.t0 = _context19["catch"](0);
            reject(_context19.t0);
          case 11:
          case "end":
            return _context19.stop();
        }
      }, _callee19, null, [[0, 8]]);
    }));
    return function (_x35, _x36) {
      return _ref19.apply(this, arguments);
    };
  }());
};
var getBooking = function getBooking(_ref20) {
  var doctorId = _ref20.doctorId,
    date = _ref20.date;
  return new Promise( /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(resolve, reject) {
      var bookings;
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            _context20.prev = 0;
            bookings = [];
            _context20.next = 4;
            return _index["default"].Booking.findAll({
              where: {
                doctorId: doctorId,
                date: +date
              },
              include: [{
                model: _index["default"].Allcode,
                as: 'statusData',
                attributes: ['valueEn', 'valueVi']
              }, {
                model: _index["default"].Allcode,
                as: 'timeData',
                attributes: ['valueEn', 'valueVi']
              }],
              raw: true,
              nest: true
            });
          case 4:
            bookings = _context20.sent;
            resolve({
              errCode: 0,
              errMessage: 'ok',
              bookings: bookings
            });
            _context20.next = 11;
            break;
          case 8:
            _context20.prev = 8;
            _context20.t0 = _context20["catch"](0);
            reject(_context20.t0);
          case 11:
          case "end":
            return _context20.stop();
        }
      }, _callee20, null, [[0, 8]]);
    }));
    return function (_x37, _x38) {
      return _ref21.apply(this, arguments);
    };
  }());
};
var changeBookingStatus = function changeBookingStatus(_ref22) {
  var doctorId = _ref22.doctorId,
    date = _ref22.date,
    statusId = _ref22.statusId;
  return new Promise( /*#__PURE__*/function () {
    var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(resolve, reject) {
      var booking;
      return _regeneratorRuntime().wrap(function _callee21$(_context21) {
        while (1) switch (_context21.prev = _context21.next) {
          case 0:
            _context21.prev = 0;
            _context21.next = 3;
            return _index["default"].Booking.findOne({
              where: {
                doctorId: doctorId,
                date: +date
              },
              raw: false
            });
          case 3:
            booking = _context21.sent;
            if (!booking) {
              _context21.next = 8;
              break;
            }
            booking.statusId = statusId;
            _context21.next = 8;
            return booking.save();
          case 8:
            _context21.next = 10;
            return _index["default"].Booking.findOne({
              where: {
                doctorId: doctorId,
                date: +date
              },
              include: [{
                model: _index["default"].Allcode,
                as: 'statusData',
                attributes: ['valueEn', 'valueVi']
              }, {
                model: _index["default"].Allcode,
                as: 'timeData',
                attributes: ['valueEn', 'valueVi']
              }],
              raw: true,
              nest: true
            });
          case 10:
            booking = _context21.sent;
            resolve({
              errCode: 0,
              errMessage: 'ok',
              booking: booking
            });
            _context21.next = 17;
            break;
          case 14:
            _context21.prev = 14;
            _context21.t0 = _context21["catch"](0);
            reject(_context21.t0);
          case 17:
          case "end":
            return _context21.stop();
        }
      }, _callee21, null, [[0, 14]]);
    }));
    return function (_x39, _x40) {
      return _ref23.apply(this, arguments);
    };
  }());
};
module.exports = {
  getTopDoctorHome: getTopDoctorHome,
  getAllDoctors: getAllDoctors,
  createMarkDown: createMarkDown,
  updateMarkDown: updateMarkDown,
  getDetailDoctorById: getDetailDoctorById,
  createBulkSchedules: createBulkSchedules,
  updateBulkSchedules: updateBulkSchedules,
  getSchedules: getSchedules,
  createDoctorInfo: createDoctorInfo,
  updateDoctorInfo: updateDoctorInfo,
  getDoctorInfo: getDoctorInfo,
  createSpecialty: createSpecialty,
  updateSpecialty: updateSpecialty,
  getAllSpecialty: getAllSpecialty,
  getSpecialtyById: getSpecialtyById,
  getAllDoctorsOfSpecialty: getAllDoctorsOfSpecialty,
  getBooking: getBooking,
  changeBookingStatus: changeBookingStatus
};