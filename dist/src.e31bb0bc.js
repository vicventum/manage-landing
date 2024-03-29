// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"app/vendor/materialize-src/sass/materialize.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/vendor/sal/sal.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/vendor/fontello/css/facebook.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\font\\facebook.woff2":[["facebook.5a9ee458.woff2","app/vendor/fontello/font/facebook.woff2"],"app/vendor/fontello/font/facebook.woff2"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"../vendor/fontello/css/facebook.css":"app/vendor/fontello/css/facebook.css","./..\\..\\assets\\img\\bg-simplify-section-desktop-modify.svg":[["bg-simplify-section-desktop-modify.d6fb4304.svg","assets/img/bg-simplify-section-desktop-modify.svg"],"assets/img/bg-simplify-section-desktop-modify.svg"],"./..\\..\\assets\\img\\bg-simplify-section-mobile.svg":[["bg-simplify-section-mobile.3fd7d0cb.svg","assets/img/bg-simplify-section-mobile.svg"],"assets/img/bg-simplify-section-mobile.svg"],"./..\\..\\assets\\img\\bg-tablet-pattern.svg":[["bg-tablet-pattern.7ac05496.svg","assets/img/bg-tablet-pattern.svg"],"assets/img/bg-tablet-pattern.svg"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/materialize-css/js/cash.js":[function(require,module,exports) {
/*! cash-dom 1.3.5, https://github.com/kenwheeler/cash @license MIT */
(function (factory) {
  window.cash = factory();
})(function () {
  var doc = document, win = window, ArrayProto = Array.prototype, slice = ArrayProto.slice, filter = ArrayProto.filter, push = ArrayProto.push;

  var noop = function () {}, isFunction = function (item) {
    // @see https://crbug.com/568448
    return typeof item === typeof noop && item.call;
  }, isString = function (item) {
    return typeof item === typeof "";
  };

  var idMatch = /^#[\w-]*$/, classMatch = /^\.[\w-]*$/, htmlMatch = /<.+>/, singlet = /^\w+$/;

  function find(selector, context) {
    context = context || doc;
    var elems = (classMatch.test(selector) ? context.getElementsByClassName(selector.slice(1)) : singlet.test(selector) ? context.getElementsByTagName(selector) : context.querySelectorAll(selector));
    return elems;
  }

  var frag;
  function parseHTML(str) {
    if (!frag) {
      frag = doc.implementation.createHTMLDocument(null);
      var base = frag.createElement("base");
      base.href = doc.location.href;
      frag.head.appendChild(base);
    }

    frag.body.innerHTML = str;

    return frag.body.childNodes;
  }

  function onReady(fn) {
    if (doc.readyState !== "loading") {
      fn();
    } else {
      doc.addEventListener("DOMContentLoaded", fn);
    }
  }

  function Init(selector, context) {
    if (!selector) {
      return this;
    }

    // If already a cash collection, don't do any further processing
    if (selector.cash && selector !== win) {
      return selector;
    }

    var elems = selector, i = 0, length;

    if (isString(selector)) {
      elems = (idMatch.test(selector) ?
      // If an ID use the faster getElementById check
      doc.getElementById(selector.slice(1)) : htmlMatch.test(selector) ?
      // If HTML, parse it into real elements
      parseHTML(selector) :
      // else use `find`
      find(selector, context));

      // If function, use as shortcut for DOM ready
    } else if (isFunction(selector)) {
      onReady(selector);return this;
    }

    if (!elems) {
      return this;
    }

    // If a single DOM element is passed in or received via ID, return the single element
    if (elems.nodeType || elems === win) {
      this[0] = elems;
      this.length = 1;
    } else {
      // Treat like an array and loop through each item.
      length = this.length = elems.length;
      for (; i < length; i++) {
        this[i] = elems[i];
      }
    }

    return this;
  }

  function cash(selector, context) {
    return new Init(selector, context);
  }

  var fn = cash.fn = cash.prototype = Init.prototype = { // jshint ignore:line
    cash: true,
    length: 0,
    push: push,
    splice: ArrayProto.splice,
    map: ArrayProto.map,
    init: Init
  };

  Object.defineProperty(fn, "constructor", { value: cash });

  cash.parseHTML = parseHTML;
  cash.noop = noop;
  cash.isFunction = isFunction;
  cash.isString = isString;

  cash.extend = fn.extend = function (target) {
    target = target || {};

    var args = slice.call(arguments), length = args.length, i = 1;

    if (args.length === 1) {
      target = this;
      i = 0;
    }

    for (; i < length; i++) {
      if (!args[i]) {
        continue;
      }
      for (var key in args[i]) {
        if (args[i].hasOwnProperty(key)) {
          target[key] = args[i][key];
        }
      }
    }

    return target;
  };

  function each(collection, callback) {
    var l = collection.length, i = 0;

    for (; i < l; i++) {
      if (callback.call(collection[i], collection[i], i, collection) === false) {
        break;
      }
    }
  }

  function matches(el, selector) {
    var m = el && (el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector);
    return !!m && m.call(el, selector);
  }

  function getCompareFunction(selector) {
    return (
    /* Use browser's `matches` function if string */
    isString(selector) ? matches :
    /* Match a cash element */
    selector.cash ? function (el) {
      return selector.is(el);
    } :
    /* Direct comparison */
    function (el, selector) {
      return el === selector;
    });
  }

  function unique(collection) {
    return cash(slice.call(collection).filter(function (item, index, self) {
      return self.indexOf(item) === index;
    }));
  }

  cash.extend({
    merge: function (first, second) {
      var len = +second.length, i = first.length, j = 0;

      for (; j < len; i++, j++) {
        first[i] = second[j];
      }

      first.length = i;
      return first;
    },

    each: each,
    matches: matches,
    unique: unique,
    isArray: Array.isArray,
    isNumeric: function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

  });

  var uid = cash.uid = "_cash" + Date.now();

  function getDataCache(node) {
    return (node[uid] = node[uid] || {});
  }

  function setData(node, key, value) {
    return (getDataCache(node)[key] = value);
  }

  function getData(node, key) {
    var c = getDataCache(node);
    if (c[key] === undefined) {
      c[key] = node.dataset ? node.dataset[key] : cash(node).attr("data-" + key);
    }
    return c[key];
  }

  function removeData(node, key) {
    var c = getDataCache(node);
    if (c) {
      delete c[key];
    } else if (node.dataset) {
      delete node.dataset[key];
    } else {
      cash(node).removeAttr("data-" + name);
    }
  }

  fn.extend({
    data: function (name, value) {
      if (isString(name)) {
        return (value === undefined ? getData(this[0], name) : this.each(function (v) {
          return setData(v, name, value);
        }));
      }

      for (var key in name) {
        this.data(key, name[key]);
      }

      return this;
    },

    removeData: function (key) {
      return this.each(function (v) {
        return removeData(v, key);
      });
    }

  });

  var notWhiteMatch = /\S+/g;

  function getClasses(c) {
    return isString(c) && c.match(notWhiteMatch);
  }

  function hasClass(v, c) {
    return (v.classList ? v.classList.contains(c) : new RegExp("(^| )" + c + "( |$)", "gi").test(v.className));
  }

  function addClass(v, c, spacedName) {
    if (v.classList) {
      v.classList.add(c);
    } else if (spacedName.indexOf(" " + c + " ")) {
      v.className += " " + c;
    }
  }

  function removeClass(v, c) {
    if (v.classList) {
      v.classList.remove(c);
    } else {
      v.className = v.className.replace(c, "");
    }
  }

  fn.extend({
    addClass: function (c) {
      var classes = getClasses(c);

      return (classes ? this.each(function (v) {
        var spacedName = " " + v.className + " ";
        each(classes, function (c) {
          addClass(v, c, spacedName);
        });
      }) : this);
    },

    attr: function (name, value) {
      if (!name) {
        return undefined;
      }

      if (isString(name)) {
        if (value === undefined) {
          return this[0] ? this[0].getAttribute ? this[0].getAttribute(name) : this[0][name] : undefined;
        }

        return this.each(function (v) {
          if (v.setAttribute) {
            v.setAttribute(name, value);
          } else {
            v[name] = value;
          }
        });
      }

      for (var key in name) {
        this.attr(key, name[key]);
      }

      return this;
    },

    hasClass: function (c) {
      var check = false, classes = getClasses(c);
      if (classes && classes.length) {
        this.each(function (v) {
          check = hasClass(v, classes[0]);
          return !check;
        });
      }
      return check;
    },

    prop: function (name, value) {
      if (isString(name)) {
        return (value === undefined ? this[0][name] : this.each(function (v) {
          v[name] = value;
        }));
      }

      for (var key in name) {
        this.prop(key, name[key]);
      }

      return this;
    },

    removeAttr: function (name) {
      return this.each(function (v) {
        if (v.removeAttribute) {
          v.removeAttribute(name);
        } else {
          delete v[name];
        }
      });
    },

    removeClass: function (c) {
      if (!arguments.length) {
        return this.attr("class", "");
      }
      var classes = getClasses(c);
      return (classes ? this.each(function (v) {
        each(classes, function (c) {
          removeClass(v, c);
        });
      }) : this);
    },

    removeProp: function (name) {
      return this.each(function (v) {
        delete v[name];
      });
    },

    toggleClass: function (c, state) {
      if (state !== undefined) {
        return this[state ? "addClass" : "removeClass"](c);
      }
      var classes = getClasses(c);
      return (classes ? this.each(function (v) {
        var spacedName = " " + v.className + " ";
        each(classes, function (c) {
          if (hasClass(v, c)) {
            removeClass(v, c);
          } else {
            addClass(v, c, spacedName);
          }
        });
      }) : this);
    } });

  fn.extend({
    add: function (selector, context) {
      return unique(cash.merge(this, cash(selector, context)));
    },

    each: function (callback) {
      each(this, callback);
      return this;
    },

    eq: function (index) {
      return cash(this.get(index));
    },

    filter: function (selector) {
      if (!selector) {
        return this;
      }

      var comparator = (isFunction(selector) ? selector : getCompareFunction(selector));

      return cash(filter.call(this, function (e) {
        return comparator(e, selector);
      }));
    },

    first: function () {
      return this.eq(0);
    },

    get: function (index) {
      if (index === undefined) {
        return slice.call(this);
      }
      return (index < 0 ? this[index + this.length] : this[index]);
    },

    index: function (elem) {
      var child = elem ? cash(elem)[0] : this[0], collection = elem ? this : cash(child).parent().children();
      return slice.call(collection).indexOf(child);
    },

    last: function () {
      return this.eq(-1);
    }

  });

  var camelCase = (function () {
    var camelRegex = /(?:^\w|[A-Z]|\b\w)/g, whiteSpace = /[\s-_]+/g;
    return function (str) {
      return str.replace(camelRegex, function (letter, index) {
        return letter[index === 0 ? "toLowerCase" : "toUpperCase"]();
      }).replace(whiteSpace, "");
    };
  }());

  var getPrefixedProp = (function () {
    var cache = {}, doc = document, div = doc.createElement("div"), style = div.style;

    return function (prop) {
      prop = camelCase(prop);
      if (cache[prop]) {
        return cache[prop];
      }

      var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1), prefixes = ["webkit", "moz", "ms", "o"], props = (prop + " " + (prefixes).join(ucProp + " ") + ucProp).split(" ");

      each(props, function (p) {
        if (p in style) {
          cache[p] = prop = cache[prop] = p;
          return false;
        }
      });

      return cache[prop];
    };
  }());

  cash.prefixedProp = getPrefixedProp;
  cash.camelCase = camelCase;

  fn.extend({
    css: function (prop, value) {
      if (isString(prop)) {
        prop = getPrefixedProp(prop);
        return (arguments.length > 1 ? this.each(function (v) {
          return v.style[prop] = value;
        }) : win.getComputedStyle(this[0])[prop]);
      }

      for (var key in prop) {
        this.css(key, prop[key]);
      }

      return this;
    }

  });

  function compute(el, prop) {
    return parseInt(win.getComputedStyle(el[0], null)[prop], 10) || 0;
  }

  each(["Width", "Height"], function (v) {
    var lower = v.toLowerCase();

    fn[lower] = function () {
      return this[0].getBoundingClientRect()[lower];
    };

    fn["inner" + v] = function () {
      return this[0]["client" + v];
    };

    fn["outer" + v] = function (margins) {
      return this[0]["offset" + v] + (margins ? compute(this, "margin" + (v === "Width" ? "Left" : "Top")) + compute(this, "margin" + (v === "Width" ? "Right" : "Bottom")) : 0);
    };
  });

  function registerEvent(node, eventName, callback) {
    var eventCache = getData(node, "_cashEvents") || setData(node, "_cashEvents", {});
    eventCache[eventName] = eventCache[eventName] || [];
    eventCache[eventName].push(callback);
    node.addEventListener(eventName, callback);
  }

  function removeEvent(node, eventName, callback) {
    var events = getData(node, "_cashEvents"), eventCache = (events && events[eventName]), index;

    if (!eventCache) {
      return;
    }

    if (callback) {
      node.removeEventListener(eventName, callback);
      index = eventCache.indexOf(callback);
      if (index >= 0) {
        eventCache.splice(index, 1);
      }
    } else {
      each(eventCache, function (event) {
        node.removeEventListener(eventName, event);
      });
      eventCache = [];
    }
  }

  fn.extend({
    off: function (eventName, callback) {
      return this.each(function (v) {
        return removeEvent(v, eventName, callback);
      });
    },

    on: function (eventName, delegate, callback, runOnce) {
      // jshint ignore:line
      var originalCallback;
      if (!isString(eventName)) {
        for (var key in eventName) {
          this.on(key, delegate, eventName[key]);
        }
        return this;
      }

      if (isFunction(delegate)) {
        callback = delegate;
        delegate = null;
      }

      if (eventName === "ready") {
        onReady(callback);
        return this;
      }

      if (delegate) {
        originalCallback = callback;
        callback = function (e) {
          var t = e.target;
          while (!matches(t, delegate)) {
            if (t === this || t === null) {
              return (t = false);
            }

            t = t.parentNode;
          }

          if (t) {
            originalCallback.call(t, e);
          }
        };
      }

      return this.each(function (v) {
        var finalCallback = callback;
        if (runOnce) {
          finalCallback = function () {
            callback.apply(this, arguments);
            removeEvent(v, eventName, finalCallback);
          };
        }
        registerEvent(v, eventName, finalCallback);
      });
    },

    one: function (eventName, delegate, callback) {
      return this.on(eventName, delegate, callback, true);
    },

    ready: onReady,

    /**
     * Modified
     * Triggers browser event
     * @param String eventName
     * @param Object data - Add properties to event object
     */
    trigger: function (eventName, data) {
      if (document.createEvent) {
        let evt = document.createEvent('HTMLEvents');
        evt.initEvent(eventName, true, false);
        evt = this.extend(evt, data);
        return this.each(function (v) {
          return v.dispatchEvent(evt);
        });
      }
    }

  });

  function encode(name, value) {
    return "&" + encodeURIComponent(name) + "=" + encodeURIComponent(value).replace(/%20/g, "+");
  }

  function getSelectMultiple_(el) {
    var values = [];
    each(el.options, function (o) {
      if (o.selected) {
        values.push(o.value);
      }
    });
    return values.length ? values : null;
  }

  function getSelectSingle_(el) {
    var selectedIndex = el.selectedIndex;
    return selectedIndex >= 0 ? el.options[selectedIndex].value : null;
  }

  function getValue(el) {
    var type = el.type;
    if (!type) {
      return null;
    }
    switch (type.toLowerCase()) {
      case "select-one":
        return getSelectSingle_(el);
      case "select-multiple":
        return getSelectMultiple_(el);
      case "radio":
        return (el.checked) ? el.value : null;
      case "checkbox":
        return (el.checked) ? el.value : null;
      default:
        return el.value ? el.value : null;
    }
  }

  fn.extend({
    serialize: function () {
      var query = "";

      each(this[0].elements || this, function (el) {
        if (el.disabled || el.tagName === "FIELDSET") {
          return;
        }
        var name = el.name;
        switch (el.type.toLowerCase()) {
          case "file":
          case "reset":
          case "submit":
          case "button":
            break;
          case "select-multiple":
            var values = getValue(el);
            if (values !== null) {
              each(values, function (value) {
                query += encode(name, value);
              });
            }
            break;
          default:
            var value = getValue(el);
            if (value !== null) {
              query += encode(name, value);
            }
        }
      });

      return query.substr(1);
    },

    val: function (value) {
      if (value === undefined) {
        return getValue(this[0]);
      }

      return this.each(function (v) {
        return v.value = value;
      });
    }

  });

  function insertElement(el, child, prepend) {
    if (prepend) {
      var first = el.childNodes[0];
      el.insertBefore(child, first);
    } else {
      el.appendChild(child);
    }
  }

  function insertContent(parent, child, prepend) {
    var str = isString(child);

    if (!str && child.length) {
      each(child, function (v) {
        return insertContent(parent, v, prepend);
      });
      return;
    }

    each(parent, str ? function (v) {
      return v.insertAdjacentHTML(prepend ? "afterbegin" : "beforeend", child);
    } : function (v, i) {
      return insertElement(v, (i === 0 ? child : child.cloneNode(true)), prepend);
    });
  }

  fn.extend({
    after: function (selector) {
      cash(selector).insertAfter(this);
      return this;
    },

    append: function (content) {
      insertContent(this, content);
      return this;
    },

    appendTo: function (parent) {
      insertContent(cash(parent), this);
      return this;
    },

    before: function (selector) {
      cash(selector).insertBefore(this);
      return this;
    },

    clone: function () {
      return cash(this.map(function (v) {
        return v.cloneNode(true);
      }));
    },

    empty: function () {
      this.html("");
      return this;
    },

    html: function (content) {
      if (content === undefined) {
        return this[0].innerHTML;
      }
      var source = (content.nodeType ? content[0].outerHTML : content);
      return this.each(function (v) {
        return v.innerHTML = source;
      });
    },

    insertAfter: function (selector) {
      var _this = this;


      cash(selector).each(function (el, i) {
        var parent = el.parentNode, sibling = el.nextSibling;
        _this.each(function (v) {
          parent.insertBefore((i === 0 ? v : v.cloneNode(true)), sibling);
        });
      });

      return this;
    },

    insertBefore: function (selector) {
      var _this2 = this;
      cash(selector).each(function (el, i) {
        var parent = el.parentNode;
        _this2.each(function (v) {
          parent.insertBefore((i === 0 ? v : v.cloneNode(true)), el);
        });
      });
      return this;
    },

    prepend: function (content) {
      insertContent(this, content, true);
      return this;
    },

    prependTo: function (parent) {
      insertContent(cash(parent), this, true);
      return this;
    },

    remove: function () {
      return this.each(function (v) {
        if (!!v.parentNode) {
          return v.parentNode.removeChild(v);
        }
      });
    },

    text: function (content) {
      if (content === undefined) {
        return this[0].textContent;
      }
      return this.each(function (v) {
        return v.textContent = content;
      });
    }

  });

  var docEl = doc.documentElement;

  fn.extend({
    position: function () {
      var el = this[0];
      return {
        left: el.offsetLeft,
        top: el.offsetTop
      };
    },

    offset: function () {
      var rect = this[0].getBoundingClientRect();
      return {
        top: rect.top + win.pageYOffset - docEl.clientTop,
        left: rect.left + win.pageXOffset - docEl.clientLeft
      };
    },

    offsetParent: function () {
      return cash(this[0].offsetParent);
    }

  });

  fn.extend({
    children: function (selector) {
      var elems = [];
      this.each(function (el) {
        push.apply(elems, el.children);
      });
      elems = unique(elems);

      return (!selector ? elems : elems.filter(function (v) {
        return matches(v, selector);
      }));
    },

    closest: function (selector) {
      if (!selector || this.length < 1) {
        return cash();
      }
      if (this.is(selector)) {
        return this.filter(selector);
      }
      return this.parent().closest(selector);
    },

    is: function (selector) {
      if (!selector) {
        return false;
      }

      var match = false, comparator = getCompareFunction(selector);

      this.each(function (el) {
        match = comparator(el, selector);
        return !match;
      });

      return match;
    },

    find: function (selector) {
      if (!selector || selector.nodeType) {
        return cash(selector && this.has(selector).length ? selector : null);
      }

      var elems = [];
      this.each(function (el) {
        push.apply(elems, find(selector, el));
      });

      return unique(elems);
    },

    has: function (selector) {
      var comparator = (isString(selector) ? function (el) {
        return find(selector, el).length !== 0;
      } : function (el) {
        return el.contains(selector);
      });

      return this.filter(comparator);
    },

    next: function () {
      return cash(this[0].nextElementSibling);
    },

    not: function (selector) {
      if (!selector) {
        return this;
      }

      var comparator = getCompareFunction(selector);

      return this.filter(function (el) {
        return !comparator(el, selector);
      });
    },

    parent: function () {
      var result = [];

      this.each(function (item) {
        if (item && item.parentNode) {
          result.push(item.parentNode);
        }
      });

      return unique(result);
    },

    parents: function (selector) {
      var last, result = [];

      this.each(function (item) {
        last = item;

        while (last && last.parentNode && last !== doc.body.parentNode) {
          last = last.parentNode;

          if (!selector || (selector && matches(last, selector))) {
            result.push(last);
          }
        }
      });

      return unique(result);
    },

    prev: function () {
      return cash(this[0].previousElementSibling);
    },

    siblings: function (selector) {
      var collection = this.parent().children(selector), el = this[0];

      return collection.filter(function (i) {
        return i !== el;
      });
    }

  });


  return cash;
});

},{}],"../node_modules/materialize-css/js/global.js":[function(require,module,exports) {
var define;
// Required for Meteor package, the use of window prevents export by Meteor
(function(window) {
  if (window.Package) {
    M = {};
  } else {
    window.M = {};
  }

  // Check for jQuery
  M.jQueryLoaded = !!window.jQuery;
})(window);

// AMD
if (typeof define === 'function' && define.amd) {
  define('M', [], function() {
    return M;
  });

  // Common JS
} else if (typeof exports !== 'undefined' && !exports.nodeType) {
  if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
    exports = module.exports = M;
  }
  exports.default = M;
}

M.keys = {
  TAB: 9,
  ENTER: 13,
  ESC: 27,
  ARROW_UP: 38,
  ARROW_DOWN: 40
};

/**
 * TabPress Keydown handler
 */
M.tabPressed = false;
M.keyDown = false;
let docHandleKeydown = function(e) {
  M.keyDown = true;
  if (e.which === M.keys.TAB || e.which === M.keys.ARROW_DOWN || e.which === M.keys.ARROW_UP) {
    M.tabPressed = true;
  }
};
let docHandleKeyup = function(e) {
  M.keyDown = false;
  if (e.which === M.keys.TAB || e.which === M.keys.ARROW_DOWN || e.which === M.keys.ARROW_UP) {
    M.tabPressed = false;
  }
};
let docHandleFocus = function(e) {
  if (M.keyDown) {
    document.body.classList.add('keyboard-focused');
  }
};
let docHandleBlur = function(e) {
  document.body.classList.remove('keyboard-focused');
};
document.addEventListener('keydown', docHandleKeydown, true);
document.addEventListener('keyup', docHandleKeyup, true);
document.addEventListener('focus', docHandleFocus, true);
document.addEventListener('blur', docHandleBlur, true);

/**
 * Initialize jQuery wrapper for plugin
 * @param {Class} plugin  javascript class
 * @param {string} pluginName  jQuery plugin name
 * @param {string} classRef  Class reference name
 */
M.initializeJqueryWrapper = function(plugin, pluginName, classRef) {
  jQuery.fn[pluginName] = function(methodOrOptions) {
    // Call plugin method if valid method name is passed in
    if (plugin.prototype[methodOrOptions]) {
      let params = Array.prototype.slice.call(arguments, 1);

      // Getter methods
      if (methodOrOptions.slice(0, 3) === 'get') {
        let instance = this.first()[0][classRef];
        return instance[methodOrOptions].apply(instance, params);
      }

      // Void methods
      return this.each(function() {
        let instance = this[classRef];
        instance[methodOrOptions].apply(instance, params);
      });

      // Initialize plugin if options or no argument is passed in
    } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
      plugin.init(this, arguments[0]);
      return this;
    }

    // Return error if an unrecognized  method name is passed in
    jQuery.error(`Method ${methodOrOptions} does not exist on jQuery.${pluginName}`);
  };
};

/**
 * Automatically initialize components
 * @param {Element} context  DOM Element to search within for components
 */
M.AutoInit = function(context) {
  // Use document.body if no context is given
  let root = !!context ? context : document.body;

  let registry = {
    Autocomplete: root.querySelectorAll('.autocomplete:not(.no-autoinit)'),
    Carousel: root.querySelectorAll('.carousel:not(.no-autoinit)'),
    Chips: root.querySelectorAll('.chips:not(.no-autoinit)'),
    Collapsible: root.querySelectorAll('.collapsible:not(.no-autoinit)'),
    Datepicker: root.querySelectorAll('.datepicker:not(.no-autoinit)'),
    Dropdown: root.querySelectorAll('.dropdown-trigger:not(.no-autoinit)'),
    Materialbox: root.querySelectorAll('.materialboxed:not(.no-autoinit)'),
    Modal: root.querySelectorAll('.modal:not(.no-autoinit)'),
    Parallax: root.querySelectorAll('.parallax:not(.no-autoinit)'),
    Pushpin: root.querySelectorAll('.pushpin:not(.no-autoinit)'),
    ScrollSpy: root.querySelectorAll('.scrollspy:not(.no-autoinit)'),
    FormSelect: root.querySelectorAll('select:not(.no-autoinit)'),
    Sidenav: root.querySelectorAll('.sidenav:not(.no-autoinit)'),
    Tabs: root.querySelectorAll('.tabs:not(.no-autoinit)'),
    TapTarget: root.querySelectorAll('.tap-target:not(.no-autoinit)'),
    Timepicker: root.querySelectorAll('.timepicker:not(.no-autoinit)'),
    Tooltip: root.querySelectorAll('.tooltipped:not(.no-autoinit)'),
    FloatingActionButton: root.querySelectorAll('.fixed-action-btn:not(.no-autoinit)')
  };

  for (let pluginName in registry) {
    let plugin = M[pluginName];
    plugin.init(registry[pluginName]);
  }
};

/**
 * Generate approximated selector string for a jQuery object
 * @param {jQuery} obj  jQuery object to be parsed
 * @returns {string}
 */
M.objectSelectorString = function(obj) {
  let tagStr = obj.prop('tagName') || '';
  let idStr = obj.attr('id') || '';
  let classStr = obj.attr('class') || '';
  return (tagStr + idStr + classStr).replace(/\s/g, '');
};

// Unique Random ID
M.guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  };
})();

/**
 * Escapes hash from special characters
 * @param {string} hash  String returned from this.hash
 * @returns {string}
 */
M.escapeHash = function(hash) {
  return hash.replace(/(:|\.|\[|\]|,|=|\/)/g, '\\$1');
};

M.elementOrParentIsFixed = function(element) {
  let $element = $(element);
  let $checkElements = $element.add($element.parents());
  let isFixed = false;
  $checkElements.each(function() {
    if ($(this).css('position') === 'fixed') {
      isFixed = true;
      return false;
    }
  });
  return isFixed;
};

/**
 * @typedef {Object} Edges
 * @property {Boolean} top  If the top edge was exceeded
 * @property {Boolean} right  If the right edge was exceeded
 * @property {Boolean} bottom  If the bottom edge was exceeded
 * @property {Boolean} left  If the left edge was exceeded
 */

/**
 * @typedef {Object} Bounding
 * @property {Number} left  left offset coordinate
 * @property {Number} top  top offset coordinate
 * @property {Number} width
 * @property {Number} height
 */

/**
 * Escapes hash from special characters
 * @param {Element} container  Container element that acts as the boundary
 * @param {Bounding} bounding  element bounding that is being checked
 * @param {Number} offset  offset from edge that counts as exceeding
 * @returns {Edges}
 */
M.checkWithinContainer = function(container, bounding, offset) {
  let edges = {
    top: false,
    right: false,
    bottom: false,
    left: false
  };

  let containerRect = container.getBoundingClientRect();
  // If body element is smaller than viewport, use viewport height instead.
  let containerBottom =
    container === document.body
      ? Math.max(containerRect.bottom, window.innerHeight)
      : containerRect.bottom;

  let scrollLeft = container.scrollLeft;
  let scrollTop = container.scrollTop;

  let scrolledX = bounding.left - scrollLeft;
  let scrolledY = bounding.top - scrollTop;

  // Check for container and viewport for each edge
  if (scrolledX < containerRect.left + offset || scrolledX < offset) {
    edges.left = true;
  }

  if (
    scrolledX + bounding.width > containerRect.right - offset ||
    scrolledX + bounding.width > window.innerWidth - offset
  ) {
    edges.right = true;
  }

  if (scrolledY < containerRect.top + offset || scrolledY < offset) {
    edges.top = true;
  }

  if (
    scrolledY + bounding.height > containerBottom - offset ||
    scrolledY + bounding.height > window.innerHeight - offset
  ) {
    edges.bottom = true;
  }

  return edges;
};

M.checkPossibleAlignments = function(el, container, bounding, offset) {
  let canAlign = {
    top: true,
    right: true,
    bottom: true,
    left: true,
    spaceOnTop: null,
    spaceOnRight: null,
    spaceOnBottom: null,
    spaceOnLeft: null
  };

  let containerAllowsOverflow = getComputedStyle(container).overflow === 'visible';
  let containerRect = container.getBoundingClientRect();
  let containerHeight = Math.min(containerRect.height, window.innerHeight);
  let containerWidth = Math.min(containerRect.width, window.innerWidth);
  let elOffsetRect = el.getBoundingClientRect();

  let scrollLeft = container.scrollLeft;
  let scrollTop = container.scrollTop;

  let scrolledX = bounding.left - scrollLeft;
  let scrolledYTopEdge = bounding.top - scrollTop;
  let scrolledYBottomEdge = bounding.top + elOffsetRect.height - scrollTop;

  // Check for container and viewport for left
  canAlign.spaceOnRight = !containerAllowsOverflow
    ? containerWidth - (scrolledX + bounding.width)
    : window.innerWidth - (elOffsetRect.left + bounding.width);
  if (canAlign.spaceOnRight < 0) {
    canAlign.left = false;
  }

  // Check for container and viewport for Right
  canAlign.spaceOnLeft = !containerAllowsOverflow
    ? scrolledX - bounding.width + elOffsetRect.width
    : elOffsetRect.right - bounding.width;
  if (canAlign.spaceOnLeft < 0) {
    canAlign.right = false;
  }

  // Check for container and viewport for Top
  canAlign.spaceOnBottom = !containerAllowsOverflow
    ? containerHeight - (scrolledYTopEdge + bounding.height + offset)
    : window.innerHeight - (elOffsetRect.top + bounding.height + offset);
  if (canAlign.spaceOnBottom < 0) {
    canAlign.top = false;
  }

  // Check for container and viewport for Bottom
  canAlign.spaceOnTop = !containerAllowsOverflow
    ? scrolledYBottomEdge - (bounding.height - offset)
    : elOffsetRect.bottom - (bounding.height + offset);
  if (canAlign.spaceOnTop < 0) {
    canAlign.bottom = false;
  }

  return canAlign;
};

M.getOverflowParent = function(element) {
  if (element == null) {
    return null;
  }

  if (element === document.body || getComputedStyle(element).overflow !== 'visible') {
    return element;
  }

  return M.getOverflowParent(element.parentElement);
};

/**
 * Gets id of component from a trigger
 * @param {Element} trigger  trigger
 * @returns {string}
 */
M.getIdFromTrigger = function(trigger) {
  let id = trigger.getAttribute('data-target');
  if (!id) {
    id = trigger.getAttribute('href');
    if (id) {
      id = id.slice(1);
    } else {
      id = '';
    }
  }
  return id;
};

/**
 * Multi browser support for document scroll top
 * @returns {Number}
 */
M.getDocumentScrollTop = function() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};

/**
 * Multi browser support for document scroll left
 * @returns {Number}
 */
M.getDocumentScrollLeft = function() {
  return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
};

/**
 * @typedef {Object} Edges
 * @property {Boolean} top  If the top edge was exceeded
 * @property {Boolean} right  If the right edge was exceeded
 * @property {Boolean} bottom  If the bottom edge was exceeded
 * @property {Boolean} left  If the left edge was exceeded
 */

/**
 * @typedef {Object} Bounding
 * @property {Number} left  left offset coordinate
 * @property {Number} top  top offset coordinate
 * @property {Number} width
 * @property {Number} height
 */

/**
 * Get time in ms
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @type {function}
 * @return {number}
 */
let getTime =
  Date.now ||
  function() {
    return new Date().getTime();
  };

/**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @param {function} func
 * @param {number} wait
 * @param {Object=} options
 * @returns {Function}
 */
M.throttle = function(func, wait, options) {
  let context, args, result;
  let timeout = null;
  let previous = 0;
  options || (options = {});
  let later = function() {
    previous = options.leading === false ? 0 : getTime();
    timeout = null;
    result = func.apply(context, args);
    context = args = null;
  };
  return function() {
    let now = getTime();
    if (!previous && options.leading === false) previous = now;
    let remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
      context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

},{}],"../node_modules/materialize-css/js/anime.min.js":[function(require,module,exports) {
var global = arguments[3];
/*
 v2.2.0
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,r,p){if(p.get||p.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[r]=p.value)};$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global&&null!=global?global:e};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(e){return $jscomp.SYMBOL_PREFIX+(e||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var e=$jscomp.global.Symbol.iterator;e||(e=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[e]&&$jscomp.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(e){var r=0;return $jscomp.iteratorPrototype(function(){return r<e.length?{done:!1,value:e[r++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(e){$jscomp.initSymbolIterator();e={next:e};e[$jscomp.global.Symbol.iterator]=function(){return this};return e};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(e,r){$jscomp.initSymbolIterator();e instanceof String&&(e+="");var p=0,m={next:function(){if(p<e.length){var u=p++;return{value:r(u,e[u]),done:!1}}m.next=function(){return{done:!0,value:void 0}};return m.next()}};m[Symbol.iterator]=function(){return m};return m};
$jscomp.polyfill=function(e,r,p,m){if(r){p=$jscomp.global;e=e.split(".");for(m=0;m<e.length-1;m++){var u=e[m];u in p||(p[u]={});p=p[u]}e=e[e.length-1];m=p[e];r=r(m);r!=m&&null!=r&&$jscomp.defineProperty(p,e,{configurable:!0,writable:!0,value:r})}};$jscomp.polyfill("Array.prototype.keys",function(e){return e?e:function(){return $jscomp.iteratorFromArray(this,function(e){return e})}},"es6-impl","es3");var $jscomp$this=this;
(function(r){M.anime=r()})(function(){function e(a){if(!h.col(a))try{return document.querySelectorAll(a)}catch(c){}}function r(a,c){for(var d=a.length,b=2<=arguments.length?arguments[1]:void 0,f=[],n=0;n<d;n++)if(n in a){var k=a[n];c.call(b,k,n,a)&&f.push(k)}return f}function p(a){return a.reduce(function(a,d){return a.concat(h.arr(d)?p(d):d)},[])}function m(a){if(h.arr(a))return a;
h.str(a)&&(a=e(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function u(a,c){return a.some(function(a){return a===c})}function C(a){var c={},d;for(d in a)c[d]=a[d];return c}function D(a,c){var d=C(a),b;for(b in a)d[b]=c.hasOwnProperty(b)?c[b]:a[b];return d}function z(a,c){var d=C(a),b;for(b in c)d[b]=h.und(a[b])?c[b]:a[b];return d}function T(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,c,d,k){return c+c+d+d+k+k});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
a=parseInt(c[1],16);var d=parseInt(c[2],16),c=parseInt(c[3],16);return"rgba("+a+","+d+","+c+",1)"}function U(a){function c(a,c,b){0>b&&(b+=1);1<b&&--b;return b<1/6?a+6*(c-a)*b:.5>b?c:b<2/3?a+(c-a)*(2/3-b)*6:a}var d=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a=parseInt(d[1])/360;var b=parseInt(d[2])/100,f=parseInt(d[3])/100,d=d[4]||1;if(0==b)f=b=a=f;else{var n=.5>f?f*(1+b):f+b-f*b,k=2*f-n,f=c(k,n,a+1/3),b=c(k,n,a);a=c(k,n,a-1/3)}return"rgba("+
255*f+","+255*b+","+255*a+","+d+")"}function y(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a))return a[2]}function V(a){if(-1<a.indexOf("translate")||"perspective"===a)return"px";if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function I(a,c){return h.fnc(a)?a(c.target,c.id,c.total):a}function E(a,c){if(c in a.style)return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function J(a,c){if(h.dom(a)&&
u(W,c))return"transform";if(h.dom(a)&&(a.getAttribute(c)||h.svg(a)&&a[c]))return"attribute";if(h.dom(a)&&"transform"!==c&&E(a,c))return"css";if(null!=a[c])return"object"}function X(a,c){var d=V(c),d=-1<c.indexOf("scale")?1:0+d;a=a.style.transform;if(!a)return d;for(var b=[],f=[],n=[],k=/(\w+)\((.+?)\)/g;b=k.exec(a);)f.push(b[1]),n.push(b[2]);a=r(n,function(a,b){return f[b]===c});return a.length?a[0]:d}function K(a,c){switch(J(a,c)){case "transform":return X(a,c);case "css":return E(a,c);case "attribute":return a.getAttribute(c)}return a[c]||
0}function L(a,c){var d=/^(\*=|\+=|-=)/.exec(a);if(!d)return a;var b=y(a)||0;c=parseFloat(c);a=parseFloat(a.replace(d[0],""));switch(d[0][0]){case "+":return c+a+b;case "-":return c-a+b;case "*":return c*a+b}}function F(a,c){return Math.sqrt(Math.pow(c.x-a.x,2)+Math.pow(c.y-a.y,2))}function M(a){a=a.points;for(var c=0,d,b=0;b<a.numberOfItems;b++){var f=a.getItem(b);0<b&&(c+=F(d,f));d=f}return c}function N(a){if(a.getTotalLength)return a.getTotalLength();switch(a.tagName.toLowerCase()){case "circle":return 2*
Math.PI*a.getAttribute("r");case "rect":return 2*a.getAttribute("width")+2*a.getAttribute("height");case "line":return F({x:a.getAttribute("x1"),y:a.getAttribute("y1")},{x:a.getAttribute("x2"),y:a.getAttribute("y2")});case "polyline":return M(a);case "polygon":var c=a.points;return M(a)+F(c.getItem(c.numberOfItems-1),c.getItem(0))}}function Y(a,c){function d(b){b=void 0===b?0:b;return a.el.getPointAtLength(1<=c+b?c+b:0)}var b=d(),f=d(-1),n=d(1);switch(a.property){case "x":return b.x;case "y":return b.y;
case "angle":return 180*Math.atan2(n.y-f.y,n.x-f.x)/Math.PI}}function O(a,c){var d=/-?\d*\.?\d+/g,b;b=h.pth(a)?a.totalLength:a;if(h.col(b))if(h.rgb(b)){var f=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b=f?"rgba("+f[1]+",1)":b}else b=h.hex(b)?T(b):h.hsl(b)?U(b):void 0;else f=(f=y(b))?b.substr(0,b.length-f.length):b,b=c&&!/\s/g.test(b)?f+c:f;b+="";return{original:b,numbers:b.match(d)?b.match(d).map(Number):[0],strings:h.str(a)||c?b.split(d):[]}}function P(a){a=a?p(h.arr(a)?a.map(m):m(a)):[];return r(a,
function(a,d,b){return b.indexOf(a)===d})}function Z(a){var c=P(a);return c.map(function(a,b){return{target:a,id:b,total:c.length}})}function aa(a,c){var d=C(c);if(h.arr(a)){var b=a.length;2!==b||h.obj(a[0])?h.fnc(c.duration)||(d.duration=c.duration/b):a={value:a}}return m(a).map(function(a,b){b=b?0:c.delay;a=h.obj(a)&&!h.pth(a)?a:{value:a};h.und(a.delay)&&(a.delay=b);return a}).map(function(a){return z(a,d)})}function ba(a,c){var d={},b;for(b in a){var f=I(a[b],c);h.arr(f)&&(f=f.map(function(a){return I(a,
c)}),1===f.length&&(f=f[0]));d[b]=f}d.duration=parseFloat(d.duration);d.delay=parseFloat(d.delay);return d}function ca(a){return h.arr(a)?A.apply(this,a):Q[a]}function da(a,c){var d;return a.tweens.map(function(b){b=ba(b,c);var f=b.value,e=K(c.target,a.name),k=d?d.to.original:e,k=h.arr(f)?f[0]:k,w=L(h.arr(f)?f[1]:f,k),e=y(w)||y(k)||y(e);b.from=O(k,e);b.to=O(w,e);b.start=d?d.end:a.offset;b.end=b.start+b.delay+b.duration;b.easing=ca(b.easing);b.elasticity=(1E3-Math.min(Math.max(b.elasticity,1),999))/
1E3;b.isPath=h.pth(f);b.isColor=h.col(b.from.original);b.isColor&&(b.round=1);return d=b})}function ea(a,c){return r(p(a.map(function(a){return c.map(function(b){var c=J(a.target,b.name);if(c){var d=da(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})),function(a){return!h.und(a)})}function R(a,c,d,b){var f="delay"===a;return c.length?(f?Math.min:Math.max).apply(Math,c.map(function(b){return b[a]})):f?b.delay:d.offset+b.delay+
b.duration}function fa(a){var c=D(ga,a),d=D(S,a),b=Z(a.targets),f=[],e=z(c,d),k;for(k in a)e.hasOwnProperty(k)||"targets"===k||f.push({name:k,offset:e.offset,tweens:aa(a[k],d)});a=ea(b,f);return z(c,{children:[],animatables:b,animations:a,duration:R("duration",a,c,d),delay:R("delay",a,c,d)})}function q(a){function c(){return window.Promise&&new Promise(function(a){return p=a})}function d(a){return g.reversed?g.duration-a:a}function b(a){for(var b=0,c={},d=g.animations,f=d.length;b<f;){var e=d[b],
k=e.animatable,h=e.tweens,n=h.length-1,l=h[n];n&&(l=r(h,function(b){return a<b.end})[0]||l);for(var h=Math.min(Math.max(a-l.start-l.delay,0),l.duration)/l.duration,w=isNaN(h)?1:l.easing(h,l.elasticity),h=l.to.strings,p=l.round,n=[],m=void 0,m=l.to.numbers.length,t=0;t<m;t++){var x=void 0,x=l.to.numbers[t],q=l.from.numbers[t],x=l.isPath?Y(l.value,w*x):q+w*(x-q);p&&(l.isColor&&2<t||(x=Math.round(x*p)/p));n.push(x)}if(l=h.length)for(m=h[0],w=0;w<l;w++)p=h[w+1],t=n[w],isNaN(t)||(m=p?m+(t+p):m+(t+" "));
else m=n[0];ha[e.type](k.target,e.property,m,c,k.id);e.currentValue=m;b++}if(b=Object.keys(c).length)for(d=0;d<b;d++)H||(H=E(document.body,"transform")?"transform":"-webkit-transform"),g.animatables[d].target.style[H]=c[d].join(" ");g.currentTime=a;g.progress=a/g.duration*100}function f(a){if(g[a])g[a](g)}function e(){g.remaining&&!0!==g.remaining&&g.remaining--}function k(a){var k=g.duration,n=g.offset,w=n+g.delay,r=g.currentTime,x=g.reversed,q=d(a);if(g.children.length){var u=g.children,v=u.length;
if(q>=g.currentTime)for(var G=0;G<v;G++)u[G].seek(q);else for(;v--;)u[v].seek(q)}if(q>=w||!k)g.began||(g.began=!0,f("begin")),f("run");if(q>n&&q<k)b(q);else if(q<=n&&0!==r&&(b(0),x&&e()),q>=k&&r!==k||!k)b(k),x||e();f("update");a>=k&&(g.remaining?(t=h,"alternate"===g.direction&&(g.reversed=!g.reversed)):(g.pause(),g.completed||(g.completed=!0,f("complete"),"Promise"in window&&(p(),m=c()))),l=0)}a=void 0===a?{}:a;var h,t,l=0,p=null,m=c(),g=fa(a);g.reset=function(){var a=g.direction,c=g.loop;g.currentTime=
0;g.progress=0;g.paused=!0;g.began=!1;g.completed=!1;g.reversed="reverse"===a;g.remaining="alternate"===a&&1===c?2:c;b(0);for(a=g.children.length;a--;)g.children[a].reset()};g.tick=function(a){h=a;t||(t=h);k((l+h-t)*q.speed)};g.seek=function(a){k(d(a))};g.pause=function(){var a=v.indexOf(g);-1<a&&v.splice(a,1);g.paused=!0};g.play=function(){g.paused&&(g.paused=!1,t=0,l=d(g.currentTime),v.push(g),B||ia())};g.reverse=function(){g.reversed=!g.reversed;t=0;l=d(g.currentTime)};g.restart=function(){g.pause();
g.reset();g.play()};g.finished=m;g.reset();g.autoplay&&g.play();return g}var ga={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},S={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},W="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),H,h={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},
pth:function(a){return h.obj(a)&&a.hasOwnProperty("totalLength")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||h.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return h.hex(a)||h.rgb(a)||h.hsl(a)}},A=function(){function a(a,
d,b){return(((1-3*b+3*d)*a+(3*b-6*d))*a+3*d)*a}return function(c,d,b,f){if(0<=c&&1>=c&&0<=b&&1>=b){var e=new Float32Array(11);if(c!==d||b!==f)for(var k=0;11>k;++k)e[k]=a(.1*k,c,b);return function(k){if(c===d&&b===f)return k;if(0===k)return 0;if(1===k)return 1;for(var h=0,l=1;10!==l&&e[l]<=k;++l)h+=.1;--l;var l=h+(k-e[l])/(e[l+1]-e[l])*.1,n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(.001<=n){for(h=0;4>h;++h){n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(0===n)break;var m=a(l,c,b)-k,l=l-m/n}k=l}else if(0===
n)k=l;else{var l=h,h=h+.1,g=0;do m=l+(h-l)/2,n=a(m,c,b)-k,0<n?h=m:l=m;while(1e-7<Math.abs(n)&&10>++g);k=m}return a(k,d,f)}}}}(),Q=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var c="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),d={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],a],Out:[[.25,
.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},b={linear:A(.25,.25,.75,.75)},f={},e;for(e in d)f.type=e,d[f.type].forEach(function(a){return function(d,f){b["ease"+a.type+c[f]]=h.fnc(d)?
d:A.apply($jscomp$this,d)}}(f)),f={type:f.type};return b}(),ha={css:function(a,c,d){return a.style[c]=d},attribute:function(a,c,d){return a.setAttribute(c,d)},object:function(a,c,d){return a[c]=d},transform:function(a,c,d,b,f){b[f]||(b[f]=[]);b[f].push(c+"("+d+")")}},v=[],B=0,ia=function(){function a(){B=requestAnimationFrame(c)}function c(c){var b=v.length;if(b){for(var d=0;d<b;)v[d]&&v[d].tick(c),d++;a()}else cancelAnimationFrame(B),B=0}return a}();q.version="2.2.0";q.speed=1;q.running=v;q.remove=
function(a){a=P(a);for(var c=v.length;c--;)for(var d=v[c],b=d.animations,f=b.length;f--;)u(a,b[f].animatable.target)&&(b.splice(f,1),b.length||d.pause())};q.getValue=K;q.path=function(a,c){var d=h.str(a)?e(a)[0]:a,b=c||100;return function(a){return{el:d,property:a,totalLength:N(d)*(b/100)}}};q.setDashoffset=function(a){var c=N(a);a.setAttribute("stroke-dasharray",c);return c};q.bezier=A;q.easings=Q;q.timeline=function(a){var c=q(a);c.pause();c.duration=0;c.add=function(d){c.children.forEach(function(a){a.began=
!0;a.completed=!0});m(d).forEach(function(b){var d=z(b,D(S,a||{}));d.targets=d.targets||a.targets;b=c.duration;var e=d.offset;d.autoplay=!1;d.direction=c.direction;d.offset=h.und(e)?b:L(e,b);c.began=!0;c.completed=!0;c.seek(d.offset);d=q(d);d.began=!0;d.completed=!0;d.duration>b&&(c.duration=d.duration);c.children.push(d)});c.seek(0);c.reset();c.autoplay&&c.restart();return c};return c};q.random=function(a,c){return Math.floor(Math.random()*(c-a+1))+a};return q});

},{}],"../node_modules/materialize-css/js/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Component {
  /**
   * Generic constructor for all components
   * @constructor
   * @param {Element} el
   * @param {Object} options
   */
  constructor(classDef, el, options) {
    // Display error if el is valid HTML Element
    if (!(el instanceof Element)) {
      console.error(Error(el + ' is not an HTML Element'));
    } // If exists, destroy and reinitialize in child


    let ins = classDef.getInstance(el);

    if (!!ins) {
      ins.destroy();
    }

    this.el = el;
    this.$el = cash(el);
  }
  /**
   * Initializes components
   * @param {class} classDef
   * @param {Element | NodeList | jQuery} els
   * @param {Object} options
   */


  static init(classDef, els, options) {
    let instances = null;

    if (els instanceof Element) {
      instances = new classDef(els, options);
    } else if (!!els && (els.jquery || els.cash || els instanceof NodeList)) {
      let instancesArr = [];

      for (let i = 0; i < els.length; i++) {
        instancesArr.push(new classDef(els[i], options));
      }

      instances = instancesArr;
    }

    return instances;
  }

}

exports.default = Component;
},{}],"../node_modules/materialize-css/js/carousel.js":[function(require,module,exports) {
"use strict";

var _component = _interopRequireDefault(require("./component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
  'use strict';

  let _defaults = {
    duration: 200,
    // ms
    dist: -100,
    // zoom scale TODO: make this more intuitive as an option
    shift: 0,
    // spacing for center image
    padding: 0,
    // Padding between non center items
    numVisible: 5,
    // Number of visible items in carousel
    fullWidth: false,
    // Change to full width styles
    indicators: false,
    // Toggle indicators
    noWrap: false,
    // Don't wrap around and cycle through items.
    onCycleTo: null // Callback for when a new slide is cycled to.

  };
  /**
   * @class
   *
   */

  class Carousel extends _component.default {
    /**
     * Construct Carousel instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options) {
      super(Carousel, el, options);
      this.el.M_Carousel = this;
      /**
       * Options for the carousel
       * @member Carousel#options
       * @prop {Number} duration
       * @prop {Number} dist
       * @prop {Number} shift
       * @prop {Number} padding
       * @prop {Number} numVisible
       * @prop {Boolean} fullWidth
       * @prop {Boolean} indicators
       * @prop {Boolean} noWrap
       * @prop {Function} onCycleTo
       */

      this.options = $.extend({}, Carousel.defaults, options); // Setup

      this.hasMultipleSlides = this.$el.find('.carousel-item').length > 1;
      this.showIndicators = this.options.indicators && this.hasMultipleSlides;
      this.noWrap = this.options.noWrap || !this.hasMultipleSlides;
      this.pressed = false;
      this.dragged = false;
      this.offset = this.target = 0;
      this.images = [];
      this.itemWidth = this.$el.find('.carousel-item').first().innerWidth();
      this.itemHeight = this.$el.find('.carousel-item').first().innerHeight();
      this.dim = this.itemWidth * 2 + this.options.padding || 1; // Make sure dim is non zero for divisions.

      this._autoScrollBound = this._autoScroll.bind(this);
      this._trackBound = this._track.bind(this); // Full Width carousel setup

      if (this.options.fullWidth) {
        this.options.dist = 0;

        this._setCarouselHeight(); // Offset fixed items when indicators.


        if (this.showIndicators) {
          this.$el.find('.carousel-fixed-item').addClass('with-indicators');
        }
      } // Iterate through slides


      this.$indicators = $('<ul class="indicators"></ul>');
      this.$el.find('.carousel-item').each((el, i) => {
        this.images.push(el);

        if (this.showIndicators) {
          let $indicator = $('<li class="indicator-item"></li>'); // Add active to first by default.

          if (i === 0) {
            $indicator[0].classList.add('active');
          }

          this.$indicators.append($indicator);
        }
      });

      if (this.showIndicators) {
        this.$el.append(this.$indicators);
      }

      this.count = this.images.length; // Cap numVisible at count

      this.options.numVisible = Math.min(this.count, this.options.numVisible); // Setup cross browser string

      this.xform = 'transform';
      ['webkit', 'Moz', 'O', 'ms'].every(prefix => {
        var e = prefix + 'Transform';

        if (typeof document.body.style[e] !== 'undefined') {
          this.xform = e;
          return false;
        }

        return true;
      });

      this._setupEventHandlers();

      this._scroll(this.offset);
    }

    static get defaults() {
      return _defaults;
    }

    static init(els, options) {
      return super.init(this, els, options);
    }
    /**
     * Get Instance
     */


    static getInstance(el) {
      let domElem = !!el.jquery ? el[0] : el;
      return domElem.M_Carousel;
    }
    /**
     * Teardown component
     */


    destroy() {
      this._removeEventHandlers();

      this.el.M_Carousel = undefined;
    }
    /**
     * Setup Event Handlers
     */


    _setupEventHandlers() {
      this._handleCarouselTapBound = this._handleCarouselTap.bind(this);
      this._handleCarouselDragBound = this._handleCarouselDrag.bind(this);
      this._handleCarouselReleaseBound = this._handleCarouselRelease.bind(this);
      this._handleCarouselClickBound = this._handleCarouselClick.bind(this);

      if (typeof window.ontouchstart !== 'undefined') {
        this.el.addEventListener('touchstart', this._handleCarouselTapBound);
        this.el.addEventListener('touchmove', this._handleCarouselDragBound);
        this.el.addEventListener('touchend', this._handleCarouselReleaseBound);
      }

      this.el.addEventListener('mousedown', this._handleCarouselTapBound);
      this.el.addEventListener('mousemove', this._handleCarouselDragBound);
      this.el.addEventListener('mouseup', this._handleCarouselReleaseBound);
      this.el.addEventListener('mouseleave', this._handleCarouselReleaseBound);
      this.el.addEventListener('click', this._handleCarouselClickBound);

      if (this.showIndicators && this.$indicators) {
        this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this);
        this.$indicators.find('.indicator-item').each((el, i) => {
          el.addEventListener('click', this._handleIndicatorClickBound);
        });
      } // Resize


      let throttledResize = M.throttle(this._handleResize, 200);
      this._handleThrottledResizeBound = throttledResize.bind(this);
      window.addEventListener('resize', this._handleThrottledResizeBound);
    }
    /**
     * Remove Event Handlers
     */


    _removeEventHandlers() {
      if (typeof window.ontouchstart !== 'undefined') {
        this.el.removeEventListener('touchstart', this._handleCarouselTapBound);
        this.el.removeEventListener('touchmove', this._handleCarouselDragBound);
        this.el.removeEventListener('touchend', this._handleCarouselReleaseBound);
      }

      this.el.removeEventListener('mousedown', this._handleCarouselTapBound);
      this.el.removeEventListener('mousemove', this._handleCarouselDragBound);
      this.el.removeEventListener('mouseup', this._handleCarouselReleaseBound);
      this.el.removeEventListener('mouseleave', this._handleCarouselReleaseBound);
      this.el.removeEventListener('click', this._handleCarouselClickBound);

      if (this.showIndicators && this.$indicators) {
        this.$indicators.find('.indicator-item').each((el, i) => {
          el.removeEventListener('click', this._handleIndicatorClickBound);
        });
      }

      window.removeEventListener('resize', this._handleThrottledResizeBound);
    }
    /**
     * Handle Carousel Tap
     * @param {Event} e
     */


    _handleCarouselTap(e) {
      // Fixes firefox draggable image bug
      if (e.type === 'mousedown' && $(e.target).is('img')) {
        e.preventDefault();
      }

      this.pressed = true;
      this.dragged = false;
      this.verticalDragged = false;
      this.reference = this._xpos(e);
      this.referenceY = this._ypos(e);
      this.velocity = this.amplitude = 0;
      this.frame = this.offset;
      this.timestamp = Date.now();
      clearInterval(this.ticker);
      this.ticker = setInterval(this._trackBound, 100);
    }
    /**
     * Handle Carousel Drag
     * @param {Event} e
     */


    _handleCarouselDrag(e) {
      let x, y, delta, deltaY;

      if (this.pressed) {
        x = this._xpos(e);
        y = this._ypos(e);
        delta = this.reference - x;
        deltaY = Math.abs(this.referenceY - y);

        if (deltaY < 30 && !this.verticalDragged) {
          // If vertical scrolling don't allow dragging.
          if (delta > 2 || delta < -2) {
            this.dragged = true;
            this.reference = x;

            this._scroll(this.offset + delta);
          }
        } else if (this.dragged) {
          // If dragging don't allow vertical scroll.
          e.preventDefault();
          e.stopPropagation();
          return false;
        } else {
          // Vertical scrolling.
          this.verticalDragged = true;
        }
      }

      if (this.dragged) {
        // If dragging don't allow vertical scroll.
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }
    /**
     * Handle Carousel Release
     * @param {Event} e
     */


    _handleCarouselRelease(e) {
      if (this.pressed) {
        this.pressed = false;
      } else {
        return;
      }

      clearInterval(this.ticker);
      this.target = this.offset;

      if (this.velocity > 10 || this.velocity < -10) {
        this.amplitude = 0.9 * this.velocity;
        this.target = this.offset + this.amplitude;
      }

      this.target = Math.round(this.target / this.dim) * this.dim; // No wrap of items.

      if (this.noWrap) {
        if (this.target >= this.dim * (this.count - 1)) {
          this.target = this.dim * (this.count - 1);
        } else if (this.target < 0) {
          this.target = 0;
        }
      }

      this.amplitude = this.target - this.offset;
      this.timestamp = Date.now();
      requestAnimationFrame(this._autoScrollBound);

      if (this.dragged) {
        e.preventDefault();
        e.stopPropagation();
      }

      return false;
    }
    /**
     * Handle Carousel CLick
     * @param {Event} e
     */


    _handleCarouselClick(e) {
      // Disable clicks if carousel was dragged.
      if (this.dragged) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      } else if (!this.options.fullWidth) {
        let clickedIndex = $(e.target).closest('.carousel-item').index();
        let diff = this._wrap(this.center) - clickedIndex; // Disable clicks if carousel was shifted by click

        if (diff !== 0) {
          e.preventDefault();
          e.stopPropagation();
        }

        this._cycleTo(clickedIndex);
      }
    }
    /**
     * Handle Indicator CLick
     * @param {Event} e
     */


    _handleIndicatorClick(e) {
      e.stopPropagation();
      let indicator = $(e.target).closest('.indicator-item');

      if (indicator.length) {
        this._cycleTo(indicator.index());
      }
    }
    /**
     * Handle Throttle Resize
     * @param {Event} e
     */


    _handleResize(e) {
      if (this.options.fullWidth) {
        this.itemWidth = this.$el.find('.carousel-item').first().innerWidth();
        this.imageHeight = this.$el.find('.carousel-item.active').height();
        this.dim = this.itemWidth * 2 + this.options.padding;
        this.offset = this.center * 2 * this.itemWidth;
        this.target = this.offset;

        this._setCarouselHeight(true);
      } else {
        this._scroll();
      }
    }
    /**
     * Set carousel height based on first slide
     * @param {Booleam} imageOnly - true for image slides
     */


    _setCarouselHeight(imageOnly) {
      let firstSlide = this.$el.find('.carousel-item.active').length ? this.$el.find('.carousel-item.active').first() : this.$el.find('.carousel-item').first();
      let firstImage = firstSlide.find('img').first();

      if (firstImage.length) {
        if (firstImage[0].complete) {
          // If image won't trigger the load event
          let imageHeight = firstImage.height();

          if (imageHeight > 0) {
            this.$el.css('height', imageHeight + 'px');
          } else {
            // If image still has no height, use the natural dimensions to calculate
            let naturalWidth = firstImage[0].naturalWidth;
            let naturalHeight = firstImage[0].naturalHeight;
            let adjustedHeight = this.$el.width() / naturalWidth * naturalHeight;
            this.$el.css('height', adjustedHeight + 'px');
          }
        } else {
          // Get height when image is loaded normally
          firstImage.one('load', (el, i) => {
            this.$el.css('height', el.offsetHeight + 'px');
          });
        }
      } else if (!imageOnly) {
        let slideHeight = firstSlide.height();
        this.$el.css('height', slideHeight + 'px');
      }
    }
    /**
     * Get x position from event
     * @param {Event} e
     */


    _xpos(e) {
      // touch event
      if (e.targetTouches && e.targetTouches.length >= 1) {
        return e.targetTouches[0].clientX;
      } // mouse event


      return e.clientX;
    }
    /**
     * Get y position from event
     * @param {Event} e
     */


    _ypos(e) {
      // touch event
      if (e.targetTouches && e.targetTouches.length >= 1) {
        return e.targetTouches[0].clientY;
      } // mouse event


      return e.clientY;
    }
    /**
     * Wrap index
     * @param {Number} x
     */


    _wrap(x) {
      return x >= this.count ? x % this.count : x < 0 ? this._wrap(this.count + x % this.count) : x;
    }
    /**
     * Tracks scrolling information
     */


    _track() {
      let now, elapsed, delta, v;
      now = Date.now();
      elapsed = now - this.timestamp;
      this.timestamp = now;
      delta = this.offset - this.frame;
      this.frame = this.offset;
      v = 1000 * delta / (1 + elapsed);
      this.velocity = 0.8 * v + 0.2 * this.velocity;
    }
    /**
     * Auto scrolls to nearest carousel item.
     */


    _autoScroll() {
      let elapsed, delta;

      if (this.amplitude) {
        elapsed = Date.now() - this.timestamp;
        delta = this.amplitude * Math.exp(-elapsed / this.options.duration);

        if (delta > 2 || delta < -2) {
          this._scroll(this.target - delta);

          requestAnimationFrame(this._autoScrollBound);
        } else {
          this._scroll(this.target);
        }
      }
    }
    /**
     * Scroll to target
     * @param {Number} x
     */


    _scroll(x) {
      // Track scrolling state
      if (!this.$el.hasClass('scrolling')) {
        this.el.classList.add('scrolling');
      }

      if (this.scrollingTimeout != null) {
        window.clearTimeout(this.scrollingTimeout);
      }

      this.scrollingTimeout = window.setTimeout(() => {
        this.$el.removeClass('scrolling');
      }, this.options.duration); // Start actual scroll

      let i, half, delta, dir, tween, el, alignment, zTranslation, tweenedOpacity, centerTweenedOpacity;
      let lastCenter = this.center;
      let numVisibleOffset = 1 / this.options.numVisible;
      this.offset = typeof x === 'number' ? x : this.offset;
      this.center = Math.floor((this.offset + this.dim / 2) / this.dim);
      delta = this.offset - this.center * this.dim;
      dir = delta < 0 ? 1 : -1;
      tween = -dir * delta * 2 / this.dim;
      half = this.count >> 1;

      if (this.options.fullWidth) {
        alignment = 'translateX(0)';
        centerTweenedOpacity = 1;
      } else {
        alignment = 'translateX(' + (this.el.clientWidth - this.itemWidth) / 2 + 'px) ';
        alignment += 'translateY(' + (this.el.clientHeight - this.itemHeight) / 2 + 'px)';
        centerTweenedOpacity = 1 - numVisibleOffset * tween;
      } // Set indicator active


      if (this.showIndicators) {
        let diff = this.center % this.count;
        let activeIndicator = this.$indicators.find('.indicator-item.active');

        if (activeIndicator.index() !== diff) {
          activeIndicator.removeClass('active');
          this.$indicators.find('.indicator-item').eq(diff)[0].classList.add('active');
        }
      } // center
      // Don't show wrapped items.


      if (!this.noWrap || this.center >= 0 && this.center < this.count) {
        el = this.images[this._wrap(this.center)]; // Add active class to center item.

        if (!$(el).hasClass('active')) {
          this.$el.find('.carousel-item').removeClass('active');
          el.classList.add('active');
        }

        let transformString = `${alignment} translateX(${-delta / 2}px) translateX(${dir * this.options.shift * tween * i}px) translateZ(${this.options.dist * tween}px)`;

        this._updateItemStyle(el, centerTweenedOpacity, 0, transformString);
      }

      for (i = 1; i <= half; ++i) {
        // right side
        if (this.options.fullWidth) {
          zTranslation = this.options.dist;
          tweenedOpacity = i === half && delta < 0 ? 1 - tween : 1;
        } else {
          zTranslation = this.options.dist * (i * 2 + tween * dir);
          tweenedOpacity = 1 - numVisibleOffset * (i * 2 + tween * dir);
        } // Don't show wrapped items.


        if (!this.noWrap || this.center + i < this.count) {
          el = this.images[this._wrap(this.center + i)];
          let transformString = `${alignment} translateX(${this.options.shift + (this.dim * i - delta) / 2}px) translateZ(${zTranslation}px)`;

          this._updateItemStyle(el, tweenedOpacity, -i, transformString);
        } // left side


        if (this.options.fullWidth) {
          zTranslation = this.options.dist;
          tweenedOpacity = i === half && delta > 0 ? 1 - tween : 1;
        } else {
          zTranslation = this.options.dist * (i * 2 - tween * dir);
          tweenedOpacity = 1 - numVisibleOffset * (i * 2 - tween * dir);
        } // Don't show wrapped items.


        if (!this.noWrap || this.center - i >= 0) {
          el = this.images[this._wrap(this.center - i)];
          let transformString = `${alignment} translateX(${-this.options.shift + (-this.dim * i - delta) / 2}px) translateZ(${zTranslation}px)`;

          this._updateItemStyle(el, tweenedOpacity, -i, transformString);
        }
      } // center
      // Don't show wrapped items.


      if (!this.noWrap || this.center >= 0 && this.center < this.count) {
        el = this.images[this._wrap(this.center)];
        let transformString = `${alignment} translateX(${-delta / 2}px) translateX(${dir * this.options.shift * tween}px) translateZ(${this.options.dist * tween}px)`;

        this._updateItemStyle(el, centerTweenedOpacity, 0, transformString);
      } // onCycleTo callback


      let $currItem = this.$el.find('.carousel-item').eq(this._wrap(this.center));

      if (lastCenter !== this.center && typeof this.options.onCycleTo === 'function') {
        this.options.onCycleTo.call(this, $currItem[0], this.dragged);
      } // One time callback


      if (typeof this.oneTimeCallback === 'function') {
        this.oneTimeCallback.call(this, $currItem[0], this.dragged);
        this.oneTimeCallback = null;
      }
    }
    /**
     * Cycle to target
     * @param {Element} el
     * @param {Number} opacity
     * @param {Number} zIndex
     * @param {String} transform
     */


    _updateItemStyle(el, opacity, zIndex, transform) {
      el.style[this.xform] = transform;
      el.style.zIndex = zIndex;
      el.style.opacity = opacity;
      el.style.visibility = 'visible';
    }
    /**
     * Cycle to target
     * @param {Number} n
     * @param {Function} callback
     */


    _cycleTo(n, callback) {
      let diff = this.center % this.count - n; // Account for wraparound.

      if (!this.noWrap) {
        if (diff < 0) {
          if (Math.abs(diff + this.count) < Math.abs(diff)) {
            diff += this.count;
          }
        } else if (diff > 0) {
          if (Math.abs(diff - this.count) < diff) {
            diff -= this.count;
          }
        }
      }

      this.target = this.dim * Math.round(this.offset / this.dim); // Next

      if (diff < 0) {
        this.target += this.dim * Math.abs(diff); // Prev
      } else if (diff > 0) {
        this.target -= this.dim * diff;
      } // Set one time callback


      if (typeof callback === 'function') {
        this.oneTimeCallback = callback;
      } // Scroll


      if (this.offset !== this.target) {
        this.amplitude = this.target - this.offset;
        this.timestamp = Date.now();
        requestAnimationFrame(this._autoScrollBound);
      }
    }
    /**
     * Cycle to next item
     * @param {Number} [n]
     */


    next(n) {
      if (n === undefined || isNaN(n)) {
        n = 1;
      }

      let index = this.center + n;

      if (index >= this.count || index < 0) {
        if (this.noWrap) {
          return;
        }

        index = this._wrap(index);
      }

      this._cycleTo(index);
    }
    /**
     * Cycle to previous item
     * @param {Number} [n]
     */


    prev(n) {
      if (n === undefined || isNaN(n)) {
        n = 1;
      }

      let index = this.center - n;

      if (index >= this.count || index < 0) {
        if (this.noWrap) {
          return;
        }

        index = this._wrap(index);
      }

      this._cycleTo(index);
    }
    /**
     * Cycle to nth item
     * @param {Number} [n]
     * @param {Function} callback
     */


    set(n, callback) {
      if (n === undefined || isNaN(n)) {
        n = 0;
      }

      if (n > this.count || n < 0) {
        if (this.noWrap) {
          return;
        }

        n = this._wrap(n);
      }

      this._cycleTo(n, callback);
    }

  }

  M.Carousel = Carousel;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Carousel, 'carousel', 'M_Carousel');
  }
})(cash);
},{"./component":"../node_modules/materialize-css/js/component.js"}],"../node_modules/materialize-css/js/waves.js":[function(require,module,exports) {
/*!
 * Waves v0.6.4
 * http://fian.my.id/Waves
 *
 * Copyright 2014 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */

;(function(window) {
    'use strict';

    var Waves = Waves || {};
    var $$ = document.querySelectorAll.bind(document);

    // Find exact position of element
    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }

    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }

    function offset(elem) {
        var docElem, win,
            box = {top: 0, left: 0},
            doc = elem && elem.ownerDocument;

        docElem = doc.documentElement;

        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }

    function convertStyle(obj) {
        var style = '';

        for (var a in obj) {
            if (obj.hasOwnProperty(a)) {
                style += (a + ':' + obj[a] + ';');
            }
        }

        return style;
    }

    var Effect = {

        // Effect delay
        duration: 750,

        show: function(e, element) {

            // Disable right click
            if (e.button === 2) {
                return false;
            }

            var el = element || this;

            // Create ripple
            var ripple = document.createElement('div');
            ripple.className = 'waves-ripple';
            el.appendChild(ripple);

            // Get click coordinate and element witdh
            var pos         = offset(el);
            var relativeY   = (e.pageY - pos.top);
            var relativeX   = (e.pageX - pos.left);
            var scale       = 'scale('+((el.clientWidth / 100) * 10)+')';

            // Support for touch devices
            if ('touches' in e) {
              relativeY   = (e.touches[0].pageY - pos.top);
              relativeX   = (e.touches[0].pageX - pos.left);
            }

            // Attach data to element
            ripple.setAttribute('data-hold', Date.now());
            ripple.setAttribute('data-scale', scale);
            ripple.setAttribute('data-x', relativeX);
            ripple.setAttribute('data-y', relativeY);

            // Set ripple position
            var rippleStyle = {
                'top': relativeY+'px',
                'left': relativeX+'px'
            };

            ripple.className = ripple.className + ' waves-notransition';
            ripple.setAttribute('style', convertStyle(rippleStyle));
            ripple.className = ripple.className.replace('waves-notransition', '');

            // Scale the ripple
            rippleStyle['-webkit-transform'] = scale;
            rippleStyle['-moz-transform'] = scale;
            rippleStyle['-ms-transform'] = scale;
            rippleStyle['-o-transform'] = scale;
            rippleStyle.transform = scale;
            rippleStyle.opacity   = '1';

            rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['-moz-transition-duration']    = Effect.duration + 'ms';
            rippleStyle['-o-transition-duration']      = Effect.duration + 'ms';
            rippleStyle['transition-duration']         = Effect.duration + 'ms';

            rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-moz-transition-timing-function']    = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-o-transition-timing-function']      = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['transition-timing-function']         = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';

            ripple.setAttribute('style', convertStyle(rippleStyle));
        },

        hide: function(e) {
            TouchHandler.touchup(e);

            var el = this;
            var width = el.clientWidth * 1.4;

            // Get first ripple
            var ripple = null;
            var ripples = el.getElementsByClassName('waves-ripple');
            if (ripples.length > 0) {
                ripple = ripples[ripples.length - 1];
            } else {
                return false;
            }

            var relativeX   = ripple.getAttribute('data-x');
            var relativeY   = ripple.getAttribute('data-y');
            var scale       = ripple.getAttribute('data-scale');

            // Get delay beetween mousedown and mouse leave
            var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
            var delay = 350 - diff;

            if (delay < 0) {
                delay = 0;
            }

            // Fade out ripple after delay
            setTimeout(function() {
                var style = {
                    'top': relativeY+'px',
                    'left': relativeX+'px',
                    'opacity': '0',

                    // Duration
                    '-webkit-transition-duration': Effect.duration + 'ms',
                    '-moz-transition-duration': Effect.duration + 'ms',
                    '-o-transition-duration': Effect.duration + 'ms',
                    'transition-duration': Effect.duration + 'ms',
                    '-webkit-transform': scale,
                    '-moz-transform': scale,
                    '-ms-transform': scale,
                    '-o-transform': scale,
                    'transform': scale,
                };

                ripple.setAttribute('style', convertStyle(style));

                setTimeout(function() {
                    try {
                        el.removeChild(ripple);
                    } catch(e) {
                        return false;
                    }
                }, Effect.duration);
            }, delay);
        },

        // Little hack to make <input> can perform waves effect
        wrapInput: function(elements) {
            for (var a = 0; a < elements.length; a++) {
                var el = elements[a];

                if (el.tagName.toLowerCase() === 'input') {
                    var parent = el.parentNode;

                    // If input already have parent just pass through
                    if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
                        continue;
                    }

                    // Put element class and style to the specified parent
                    var wrapper = document.createElement('i');
                    wrapper.className = el.className + ' waves-input-wrapper';

                    var elementStyle = el.getAttribute('style');

                    if (!elementStyle) {
                        elementStyle = '';
                    }

                    wrapper.setAttribute('style', elementStyle);

                    el.className = 'waves-button-input';
                    el.removeAttribute('style');

                    // Put element as child
                    parent.replaceChild(wrapper, el);
                    wrapper.appendChild(el);
                }
            }
        }
    };


    /**
     * Disable mousedown event for 500ms during and after touch
     */
    var TouchHandler = {
        /* uses an integer rather than bool so there's no issues with
         * needing to clear timeouts if another touch event occurred
         * within the 500ms. Cannot mouseup between touchstart and
         * touchend, nor in the 500ms after touchend. */
        touches: 0,
        allowEvent: function(e) {
            var allow = true;

            if (e.type === 'touchstart') {
                TouchHandler.touches += 1; //push
            } else if (e.type === 'touchend' || e.type === 'touchcancel') {
                setTimeout(function() {
                    if (TouchHandler.touches > 0) {
                        TouchHandler.touches -= 1; //pop after 500ms
                    }
                }, 500);
            } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
                allow = false;
            }

            return allow;
        },
        touchup: function(e) {
            TouchHandler.allowEvent(e);
        }
    };


    /**
     * Delegated click handler for .waves-effect element.
     * returns null when .waves-effect element not in "click tree"
     */
    function getWavesEffectElement(e) {
        if (TouchHandler.allowEvent(e) === false) {
            return null;
        }

        var element = null;
        var target = e.target || e.srcElement;

        while (target.parentNode !== null) {
            if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {
                element = target;
                break;
            }
            target = target.parentNode;
        }
        return element;
    }

    /**
     * Bubble the click and show effect if .waves-effect elem was found
     */
    function showEffect(e) {
        var element = getWavesEffectElement(e);

        if (element !== null) {
            Effect.show(e, element);

            if ('ontouchstart' in window) {
                element.addEventListener('touchend', Effect.hide, false);
                element.addEventListener('touchcancel', Effect.hide, false);
            }

            element.addEventListener('mouseup', Effect.hide, false);
            element.addEventListener('mouseleave', Effect.hide, false);
            element.addEventListener('dragend', Effect.hide, false);
        }
    }

    Waves.displayEffect = function(options) {
        options = options || {};

        if ('duration' in options) {
            Effect.duration = options.duration;
        }

        //Wrap input inside <i> tag
        Effect.wrapInput($$('.waves-effect'));

        if ('ontouchstart' in window) {
            document.body.addEventListener('touchstart', showEffect, false);
        }

        document.body.addEventListener('mousedown', showEffect, false);
    };

    /**
     * Attach Waves to an input element (or any element which doesn't
     * bubble mouseup/mousedown events).
     *   Intended to be used with dynamically loaded forms/inputs, or
     * where the user doesn't want a delegated click handler.
     */
    Waves.attach = function(element) {
        //FUTURE: automatically add waves classes and allow users
        // to specify them with an options param? Eg. light/classic/button
        if (element.tagName.toLowerCase() === 'input') {
            Effect.wrapInput([element]);
            element = element.parentNode;
        }

        if ('ontouchstart' in window) {
            element.addEventListener('touchstart', showEffect, false);
        }

        element.addEventListener('mousedown', showEffect, false);
    };

    window.Waves = Waves;

    document.addEventListener('DOMContentLoaded', function() {
        Waves.displayEffect();
    }, false);

})(window);

},{}],"../node_modules/materialize-css/js/sidenav.js":[function(require,module,exports) {
"use strict";

var _component = _interopRequireDefault(require("./component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($, anim) {
  'use strict';

  let _defaults = {
    edge: 'left',
    draggable: true,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true
  };
  /**
   * @class
   */

  class Sidenav extends _component.default {
    /**
     * Construct Sidenav instance and set up overlay
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options) {
      super(Sidenav, el, options);
      this.el.M_Sidenav = this;
      this.id = this.$el.attr('id');
      /**
       * Options for the Sidenav
       * @member Sidenav#options
       * @prop {String} [edge='left'] - Side of screen on which Sidenav appears
       * @prop {Boolean} [draggable=true] - Allow swipe gestures to open/close Sidenav
       * @prop {Number} [inDuration=250] - Length in ms of enter transition
       * @prop {Number} [outDuration=200] - Length in ms of exit transition
       * @prop {Function} onOpenStart - Function called when sidenav starts entering
       * @prop {Function} onOpenEnd - Function called when sidenav finishes entering
       * @prop {Function} onCloseStart - Function called when sidenav starts exiting
       * @prop {Function} onCloseEnd - Function called when sidenav finishes exiting
       */

      this.options = $.extend({}, Sidenav.defaults, options);
      /**
       * Describes open/close state of Sidenav
       * @type {Boolean}
       */

      this.isOpen = false;
      /**
       * Describes if Sidenav is fixed
       * @type {Boolean}
       */

      this.isFixed = this.el.classList.contains('sidenav-fixed');
      /**
       * Describes if Sidenav is being draggeed
       * @type {Boolean}
       */

      this.isDragged = false; // Window size variables for window resize checks

      this.lastWindowWidth = window.innerWidth;
      this.lastWindowHeight = window.innerHeight;

      this._createOverlay();

      this._createDragTarget();

      this._setupEventHandlers();

      this._setupClasses();

      this._setupFixed();

      Sidenav._sidenavs.push(this);
    }

    static get defaults() {
      return _defaults;
    }

    static init(els, options) {
      return super.init(this, els, options);
    }
    /**
     * Get Instance
     */


    static getInstance(el) {
      let domElem = !!el.jquery ? el[0] : el;
      return domElem.M_Sidenav;
    }
    /**
     * Teardown component
     */


    destroy() {
      this._removeEventHandlers();

      this._enableBodyScrolling();

      this._overlay.parentNode.removeChild(this._overlay);

      this.dragTarget.parentNode.removeChild(this.dragTarget);
      this.el.M_Sidenav = undefined;
      this.el.style.transform = '';

      let index = Sidenav._sidenavs.indexOf(this);

      if (index >= 0) {
        Sidenav._sidenavs.splice(index, 1);
      }
    }

    _createOverlay() {
      let overlay = document.createElement('div');
      this._closeBound = this.close.bind(this);
      overlay.classList.add('sidenav-overlay');
      overlay.addEventListener('click', this._closeBound);
      document.body.appendChild(overlay);
      this._overlay = overlay;
    }

    _setupEventHandlers() {
      if (Sidenav._sidenavs.length === 0) {
        document.body.addEventListener('click', this._handleTriggerClick);
      }

      this._handleDragTargetDragBound = this._handleDragTargetDrag.bind(this);
      this._handleDragTargetReleaseBound = this._handleDragTargetRelease.bind(this);
      this._handleCloseDragBound = this._handleCloseDrag.bind(this);
      this._handleCloseReleaseBound = this._handleCloseRelease.bind(this);
      this._handleCloseTriggerClickBound = this._handleCloseTriggerClick.bind(this);
      this.dragTarget.addEventListener('touchmove', this._handleDragTargetDragBound);
      this.dragTarget.addEventListener('touchend', this._handleDragTargetReleaseBound);

      this._overlay.addEventListener('touchmove', this._handleCloseDragBound);

      this._overlay.addEventListener('touchend', this._handleCloseReleaseBound);

      this.el.addEventListener('touchmove', this._handleCloseDragBound);
      this.el.addEventListener('touchend', this._handleCloseReleaseBound);
      this.el.addEventListener('click', this._handleCloseTriggerClickBound); // Add resize for side nav fixed

      if (this.isFixed) {
        this._handleWindowResizeBound = this._handleWindowResize.bind(this);
        window.addEventListener('resize', this._handleWindowResizeBound);
      }
    }

    _removeEventHandlers() {
      if (Sidenav._sidenavs.length === 1) {
        document.body.removeEventListener('click', this._handleTriggerClick);
      }

      this.dragTarget.removeEventListener('touchmove', this._handleDragTargetDragBound);
      this.dragTarget.removeEventListener('touchend', this._handleDragTargetReleaseBound);

      this._overlay.removeEventListener('touchmove', this._handleCloseDragBound);

      this._overlay.removeEventListener('touchend', this._handleCloseReleaseBound);

      this.el.removeEventListener('touchmove', this._handleCloseDragBound);
      this.el.removeEventListener('touchend', this._handleCloseReleaseBound);
      this.el.removeEventListener('click', this._handleCloseTriggerClickBound); // Remove resize for side nav fixed

      if (this.isFixed) {
        window.removeEventListener('resize', this._handleWindowResizeBound);
      }
    }
    /**
     * Handle Trigger Click
     * @param {Event} e
     */


    _handleTriggerClick(e) {
      let $trigger = $(e.target).closest('.sidenav-trigger');

      if (e.target && $trigger.length) {
        let sidenavId = M.getIdFromTrigger($trigger[0]);
        let sidenavInstance = document.getElementById(sidenavId).M_Sidenav;

        if (sidenavInstance) {
          sidenavInstance.open($trigger);
        }

        e.preventDefault();
      }
    }
    /**
     * Set variables needed at the beggining of drag
     * and stop any current transition.
     * @param {Event} e
     */


    _startDrag(e) {
      let clientX = e.targetTouches[0].clientX;
      this.isDragged = true;
      this._startingXpos = clientX;
      this._xPos = this._startingXpos;
      this._time = Date.now();
      this._width = this.el.getBoundingClientRect().width;
      this._overlay.style.display = 'block';
      this._initialScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
      this._verticallyScrolling = false;
      anim.remove(this.el);
      anim.remove(this._overlay);
    }
    /**
     * Set variables needed at each drag move update tick
     * @param {Event} e
     */


    _dragMoveUpdate(e) {
      let clientX = e.targetTouches[0].clientX;
      let currentScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
      this.deltaX = Math.abs(this._xPos - clientX);
      this._xPos = clientX;
      this.velocityX = this.deltaX / (Date.now() - this._time);
      this._time = Date.now();

      if (this._initialScrollTop !== currentScrollTop) {
        this._verticallyScrolling = true;
      }
    }
    /**
     * Handles Dragging of Sidenav
     * @param {Event} e
     */


    _handleDragTargetDrag(e) {
      // Check if draggable
      if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) {
        return;
      } // If not being dragged, set initial drag start variables


      if (!this.isDragged) {
        this._startDrag(e);
      } // Run touchmove updates


      this._dragMoveUpdate(e); // Calculate raw deltaX


      let totalDeltaX = this._xPos - this._startingXpos; // dragDirection is the attempted user drag direction

      let dragDirection = totalDeltaX > 0 ? 'right' : 'left'; // Don't allow totalDeltaX to exceed Sidenav width or be dragged in the opposite direction

      totalDeltaX = Math.min(this._width, Math.abs(totalDeltaX));

      if (this.options.edge === dragDirection) {
        totalDeltaX = 0;
      }
      /**
       * transformX is the drag displacement
       * transformPrefix is the initial transform placement
       * Invert values if Sidenav is right edge
       */


      let transformX = totalDeltaX;
      let transformPrefix = 'translateX(-100%)';

      if (this.options.edge === 'right') {
        transformPrefix = 'translateX(100%)';
        transformX = -transformX;
      } // Calculate open/close percentage of sidenav, with open = 1 and close = 0


      this.percentOpen = Math.min(1, totalDeltaX / this._width); // Set transform and opacity styles

      this.el.style.transform = `${transformPrefix} translateX(${transformX}px)`;
      this._overlay.style.opacity = this.percentOpen;
    }
    /**
     * Handle Drag Target Release
     */


    _handleDragTargetRelease() {
      if (this.isDragged) {
        if (this.percentOpen > 0.2) {
          this.open();
        } else {
          this._animateOut();
        }

        this.isDragged = false;
        this._verticallyScrolling = false;
      }
    }
    /**
     * Handle Close Drag
     * @param {Event} e
     */


    _handleCloseDrag(e) {
      if (this.isOpen) {
        // Check if draggable
        if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) {
          return;
        } // If not being dragged, set initial drag start variables


        if (!this.isDragged) {
          this._startDrag(e);
        } // Run touchmove updates


        this._dragMoveUpdate(e); // Calculate raw deltaX


        let totalDeltaX = this._xPos - this._startingXpos; // dragDirection is the attempted user drag direction

        let dragDirection = totalDeltaX > 0 ? 'right' : 'left'; // Don't allow totalDeltaX to exceed Sidenav width or be dragged in the opposite direction

        totalDeltaX = Math.min(this._width, Math.abs(totalDeltaX));

        if (this.options.edge !== dragDirection) {
          totalDeltaX = 0;
        }

        let transformX = -totalDeltaX;

        if (this.options.edge === 'right') {
          transformX = -transformX;
        } // Calculate open/close percentage of sidenav, with open = 1 and close = 0


        this.percentOpen = Math.min(1, 1 - totalDeltaX / this._width); // Set transform and opacity styles

        this.el.style.transform = `translateX(${transformX}px)`;
        this._overlay.style.opacity = this.percentOpen;
      }
    }
    /**
     * Handle Close Release
     */


    _handleCloseRelease() {
      if (this.isOpen && this.isDragged) {
        if (this.percentOpen > 0.8) {
          this._animateIn();
        } else {
          this.close();
        }

        this.isDragged = false;
        this._verticallyScrolling = false;
      }
    }
    /**
     * Handles closing of Sidenav when element with class .sidenav-close
     */


    _handleCloseTriggerClick(e) {
      let $closeTrigger = $(e.target).closest('.sidenav-close');

      if ($closeTrigger.length && !this._isCurrentlyFixed()) {
        this.close();
      }
    }
    /**
     * Handle Window Resize
     */


    _handleWindowResize() {
      // Only handle horizontal resizes
      if (this.lastWindowWidth !== window.innerWidth) {
        if (window.innerWidth > 992) {
          this.open();
        } else {
          this.close();
        }
      }

      this.lastWindowWidth = window.innerWidth;
      this.lastWindowHeight = window.innerHeight;
    }

    _setupClasses() {
      if (this.options.edge === 'right') {
        this.el.classList.add('right-aligned');
        this.dragTarget.classList.add('right-aligned');
      }
    }

    _removeClasses() {
      this.el.classList.remove('right-aligned');
      this.dragTarget.classList.remove('right-aligned');
    }

    _setupFixed() {
      if (this._isCurrentlyFixed()) {
        this.open();
      }
    }

    _isCurrentlyFixed() {
      return this.isFixed && window.innerWidth > 992;
    }

    _createDragTarget() {
      let dragTarget = document.createElement('div');
      dragTarget.classList.add('drag-target');
      document.body.appendChild(dragTarget);
      this.dragTarget = dragTarget;
    }

    _preventBodyScrolling() {
      let body = document.body;
      body.style.overflow = 'hidden';
    }

    _enableBodyScrolling() {
      let body = document.body;
      body.style.overflow = '';
    }

    open() {
      if (this.isOpen === true) {
        return;
      }

      this.isOpen = true; // Run onOpenStart callback

      if (typeof this.options.onOpenStart === 'function') {
        this.options.onOpenStart.call(this, this.el);
      } // Handle fixed Sidenav


      if (this._isCurrentlyFixed()) {
        anim.remove(this.el);
        anim({
          targets: this.el,
          translateX: 0,
          duration: 0,
          easing: 'easeOutQuad'
        });

        this._enableBodyScrolling();

        this._overlay.style.display = 'none'; // Handle non-fixed Sidenav
      } else {
        if (this.options.preventScrolling) {
          this._preventBodyScrolling();
        }

        if (!this.isDragged || this.percentOpen != 1) {
          this._animateIn();
        }
      }
    }

    close() {
      if (this.isOpen === false) {
        return;
      }

      this.isOpen = false; // Run onCloseStart callback

      if (typeof this.options.onCloseStart === 'function') {
        this.options.onCloseStart.call(this, this.el);
      } // Handle fixed Sidenav


      if (this._isCurrentlyFixed()) {
        let transformX = this.options.edge === 'left' ? '-105%' : '105%';
        this.el.style.transform = `translateX(${transformX})`; // Handle non-fixed Sidenav
      } else {
        this._enableBodyScrolling();

        if (!this.isDragged || this.percentOpen != 0) {
          this._animateOut();
        } else {
          this._overlay.style.display = 'none';
        }
      }
    }

    _animateIn() {
      this._animateSidenavIn();

      this._animateOverlayIn();
    }

    _animateSidenavIn() {
      let slideOutPercent = this.options.edge === 'left' ? -1 : 1;

      if (this.isDragged) {
        slideOutPercent = this.options.edge === 'left' ? slideOutPercent + this.percentOpen : slideOutPercent - this.percentOpen;
      }

      anim.remove(this.el);
      anim({
        targets: this.el,
        translateX: [`${slideOutPercent * 100}%`, 0],
        duration: this.options.inDuration,
        easing: 'easeOutQuad',
        complete: () => {
          // Run onOpenEnd callback
          if (typeof this.options.onOpenEnd === 'function') {
            this.options.onOpenEnd.call(this, this.el);
          }
        }
      });
    }

    _animateOverlayIn() {
      let start = 0;

      if (this.isDragged) {
        start = this.percentOpen;
      } else {
        $(this._overlay).css({
          display: 'block'
        });
      }

      anim.remove(this._overlay);
      anim({
        targets: this._overlay,
        opacity: [start, 1],
        duration: this.options.inDuration,
        easing: 'easeOutQuad'
      });
    }

    _animateOut() {
      this._animateSidenavOut();

      this._animateOverlayOut();
    }

    _animateSidenavOut() {
      let endPercent = this.options.edge === 'left' ? -1 : 1;
      let slideOutPercent = 0;

      if (this.isDragged) {
        slideOutPercent = this.options.edge === 'left' ? endPercent + this.percentOpen : endPercent - this.percentOpen;
      }

      anim.remove(this.el);
      anim({
        targets: this.el,
        translateX: [`${slideOutPercent * 100}%`, `${endPercent * 105}%`],
        duration: this.options.outDuration,
        easing: 'easeOutQuad',
        complete: () => {
          // Run onOpenEnd callback
          if (typeof this.options.onCloseEnd === 'function') {
            this.options.onCloseEnd.call(this, this.el);
          }
        }
      });
    }

    _animateOverlayOut() {
      anim.remove(this._overlay);
      anim({
        targets: this._overlay,
        opacity: 0,
        duration: this.options.outDuration,
        easing: 'easeOutQuad',
        complete: () => {
          $(this._overlay).css('display', 'none');
        }
      });
    }

  }
  /**
   * @static
   * @memberof Sidenav
   * @type {Array.<Sidenav>}
   */


  Sidenav._sidenavs = [];
  window.M.Sidenav = Sidenav;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Sidenav, 'sidenav', 'M_Sidenav');
  }
})(cash, M.anime);
},{"./component":"../node_modules/materialize-css/js/component.js"}],"../node_modules/materialize-css/js/scrollspy.js":[function(require,module,exports) {
"use strict";

var _component = _interopRequireDefault(require("./component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($, anim) {
  'use strict';

  let _defaults = {
    throttle: 100,
    scrollOffset: 200,
    // offset - 200 allows elements near bottom of page to scroll
    activeClass: 'active',
    getActiveElement: function (id) {
      return 'a[href="#' + id + '"]';
    }
  };
  /**
   * @class
   *
   */

  class ScrollSpy extends _component.default {
    /**
     * Construct ScrollSpy instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options) {
      super(ScrollSpy, el, options);
      this.el.M_ScrollSpy = this;
      /**
       * Options for the modal
       * @member Modal#options
       * @prop {Number} [throttle=100] - Throttle of scroll handler
       * @prop {Number} [scrollOffset=200] - Offset for centering element when scrolled to
       * @prop {String} [activeClass='active'] - Class applied to active elements
       * @prop {Function} [getActiveElement] - Used to find active element
       */

      this.options = $.extend({}, ScrollSpy.defaults, options); // setup

      ScrollSpy._elements.push(this);

      ScrollSpy._count++;
      ScrollSpy._increment++;
      this.tickId = -1;
      this.id = ScrollSpy._increment;

      this._setupEventHandlers();

      this._handleWindowScroll();
    }

    static get defaults() {
      return _defaults;
    }

    static init(els, options) {
      return super.init(this, els, options);
    }
    /**
     * Get Instance
     */


    static getInstance(el) {
      let domElem = !!el.jquery ? el[0] : el;
      return domElem.M_ScrollSpy;
    }
    /**
     * Teardown component
     */


    destroy() {
      ScrollSpy._elements.splice(ScrollSpy._elements.indexOf(this), 1);

      ScrollSpy._elementsInView.splice(ScrollSpy._elementsInView.indexOf(this), 1);

      ScrollSpy._visibleElements.splice(ScrollSpy._visibleElements.indexOf(this.$el), 1);

      ScrollSpy._count--;

      this._removeEventHandlers();

      $(this.options.getActiveElement(this.$el.attr('id'))).removeClass(this.options.activeClass);
      this.el.M_ScrollSpy = undefined;
    }
    /**
     * Setup Event Handlers
     */


    _setupEventHandlers() {
      let throttledResize = M.throttle(this._handleWindowScroll, 200);
      this._handleThrottledResizeBound = throttledResize.bind(this);
      this._handleWindowScrollBound = this._handleWindowScroll.bind(this);

      if (ScrollSpy._count === 1) {
        window.addEventListener('scroll', this._handleWindowScrollBound);
        window.addEventListener('resize', this._handleThrottledResizeBound);
        document.body.addEventListener('click', this._handleTriggerClick);
      }
    }
    /**
     * Remove Event Handlers
     */


    _removeEventHandlers() {
      if (ScrollSpy._count === 0) {
        window.removeEventListener('scroll', this._handleWindowScrollBound);
        window.removeEventListener('resize', this._handleThrottledResizeBound);
        document.body.removeEventListener('click', this._handleTriggerClick);
      }
    }
    /**
     * Handle Trigger Click
     * @param {Event} e
     */


    _handleTriggerClick(e) {
      let $trigger = $(e.target);

      for (let i = ScrollSpy._elements.length - 1; i >= 0; i--) {
        let scrollspy = ScrollSpy._elements[i];

        if ($trigger.is('a[href="#' + scrollspy.$el.attr('id') + '"]')) {
          e.preventDefault();
          let offset = scrollspy.$el.offset().top + 1;
          anim({
            targets: [document.documentElement, document.body],
            scrollTop: offset - scrollspy.options.scrollOffset,
            duration: 400,
            easing: 'easeOutCubic'
          });
          break;
        }
      }
    }
    /**
     * Handle Window Scroll
     */


    _handleWindowScroll() {
      // unique tick id
      ScrollSpy._ticks++; // viewport rectangle

      let top = M.getDocumentScrollTop(),
          left = M.getDocumentScrollLeft(),
          right = left + window.innerWidth,
          bottom = top + window.innerHeight; // determine which elements are in view

      let intersections = ScrollSpy._findElements(top, right, bottom, left);

      for (let i = 0; i < intersections.length; i++) {
        let scrollspy = intersections[i];
        let lastTick = scrollspy.tickId;

        if (lastTick < 0) {
          // entered into view
          scrollspy._enter();
        } // update tick id


        scrollspy.tickId = ScrollSpy._ticks;
      }

      for (let i = 0; i < ScrollSpy._elementsInView.length; i++) {
        let scrollspy = ScrollSpy._elementsInView[i];
        let lastTick = scrollspy.tickId;

        if (lastTick >= 0 && lastTick !== ScrollSpy._ticks) {
          // exited from view
          scrollspy._exit();

          scrollspy.tickId = -1;
        }
      } // remember elements in view for next tick


      ScrollSpy._elementsInView = intersections;
    }
    /**
     * Find elements that are within the boundary
     * @param {number} top
     * @param {number} right
     * @param {number} bottom
     * @param {number} left
     * @return {Array.<ScrollSpy>}   A collection of elements
     */


    static _findElements(top, right, bottom, left) {
      let hits = [];

      for (let i = 0; i < ScrollSpy._elements.length; i++) {
        let scrollspy = ScrollSpy._elements[i];
        let currTop = top + scrollspy.options.scrollOffset || 200;

        if (scrollspy.$el.height() > 0) {
          let elTop = scrollspy.$el.offset().top,
              elLeft = scrollspy.$el.offset().left,
              elRight = elLeft + scrollspy.$el.width(),
              elBottom = elTop + scrollspy.$el.height();
          let isIntersect = !(elLeft > right || elRight < left || elTop > bottom || elBottom < currTop);

          if (isIntersect) {
            hits.push(scrollspy);
          }
        }
      }

      return hits;
    }

    _enter() {
      ScrollSpy._visibleElements = ScrollSpy._visibleElements.filter(function (value) {
        return value.height() != 0;
      });

      if (ScrollSpy._visibleElements[0]) {
        $(this.options.getActiveElement(ScrollSpy._visibleElements[0].attr('id'))).removeClass(this.options.activeClass);

        if (ScrollSpy._visibleElements[0][0].M_ScrollSpy && this.id < ScrollSpy._visibleElements[0][0].M_ScrollSpy.id) {
          ScrollSpy._visibleElements.unshift(this.$el);
        } else {
          ScrollSpy._visibleElements.push(this.$el);
        }
      } else {
        ScrollSpy._visibleElements.push(this.$el);
      }

      $(this.options.getActiveElement(ScrollSpy._visibleElements[0].attr('id'))).addClass(this.options.activeClass);
    }

    _exit() {
      ScrollSpy._visibleElements = ScrollSpy._visibleElements.filter(function (value) {
        return value.height() != 0;
      });

      if (ScrollSpy._visibleElements[0]) {
        $(this.options.getActiveElement(ScrollSpy._visibleElements[0].attr('id'))).removeClass(this.options.activeClass);
        ScrollSpy._visibleElements = ScrollSpy._visibleElements.filter(el => {
          return el.attr('id') != this.$el.attr('id');
        });

        if (ScrollSpy._visibleElements[0]) {
          // Check if empty
          $(this.options.getActiveElement(ScrollSpy._visibleElements[0].attr('id'))).addClass(this.options.activeClass);
        }
      }
    }

  }
  /**
   * @static
   * @memberof ScrollSpy
   * @type {Array.<ScrollSpy>}
   */


  ScrollSpy._elements = [];
  /**
   * @static
   * @memberof ScrollSpy
   * @type {Array.<ScrollSpy>}
   */

  ScrollSpy._elementsInView = [];
  /**
   * @static
   * @memberof ScrollSpy
   * @type {Array.<cash>}
   */

  ScrollSpy._visibleElements = [];
  /**
   * @static
   * @memberof ScrollSpy
   */

  ScrollSpy._count = 0;
  /**
   * @static
   * @memberof ScrollSpy
   */

  ScrollSpy._increment = 0;
  /**
   * @static
   * @memberof ScrollSpy
   */

  ScrollSpy._ticks = 0;
  M.ScrollSpy = ScrollSpy;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(ScrollSpy, 'scrollSpy', 'M_ScrollSpy');
  }
})(cash, M.anime);
},{"./component":"../node_modules/materialize-css/js/component.js"}],"app/js/materialize-config.js":[function(require,module,exports) {
// M.AutoInit()
var sidenav = document.querySelector('.sidenav');
M.Sidenav.init(sidenav); // Carousel

var carousel = document.getElementById('carousel');
M.Carousel.init(carousel, {
  indicators: true,
  height: 300
}); // Slider
// const slider = document.getElementById('slider')
// M.Slider.init(slider, {
//   indicators: true,
//   height: 150,
//   transition: 500,
//   interval: 6000
// })
// Scrollspy

var sections = document.querySelectorAll('.scrollspy');
console.log(sections);
M.ScrollSpy.init(sections, {
  scrollOffset: 100
});
var about = document.getElementById('about');
M.ScrollSpy.init(about, {
  scrollOffset: 0
});
},{}],"app/vendor/laxxx/lax.min.js":[function(require,module,exports) {
"use strict";

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function _slicedToArray(e, t) {
  return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ("string" == typeof e) return _arrayLikeToArray(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0;
  }
}

function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);

  for (var n = 0, r = new Array(t); n < t; n++) {
    r[n] = e[n];
  }

  return r;
}

function _iterableToArrayLimit(e, t) {
  if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
    var n = [],
        r = !0,
        i = !1,
        o = void 0;

    try {
      for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) {
        ;
      }
    } catch (e) {
      i = !0, o = e;
    } finally {
      try {
        r || null == l.return || l.return();
      } finally {
        if (i) throw o;
      }
    }

    return n;
  }
}

function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}

!function () {
  function n(e) {
    return ["elInY+elHeight", "elCenterY-".concat(e = 0 < arguments.length && void 0 !== e ? e : 30), "elCenterY", "elCenterY+".concat(e), "elOutY-elHeight"];
  }

  var l,
      u,
      s,
      _,
      P,
      I,
      t = {
    fadeInOut: function fadeInOut(e, t) {
      t = 1 < arguments.length && void 0 !== t ? t : 0;
      return {
        opacity: [n(0 < arguments.length && void 0 !== e ? e : 30), [t, 1, 1, 1, t]]
      };
    },
    fadeIn: function fadeIn(e, t) {
      return {
        opacity: [["elInY+elHeight", 0 < arguments.length && void 0 !== e ? e : "elCenterY"], [1 < arguments.length && void 0 !== t ? t : 0, 1]]
      };
    },
    fadeOut: function fadeOut(e, t) {
      return {
        opacity: [[0 < arguments.length && void 0 !== e ? e : "elCenterY", "elOutY-elHeight"], [1, 1 < arguments.length && void 0 !== t ? t : 0]]
      };
    },
    blurInOut: function blurInOut(e, t) {
      t = 1 < arguments.length && void 0 !== t ? t : 20;
      return {
        blur: [n(0 < arguments.length && void 0 !== e ? e : 100), [t, 0, 0, 0, t]]
      };
    },
    blurIn: function blurIn(e, t) {
      return {
        blur: [["elInY+elHeight", 0 < arguments.length && void 0 !== e ? e : "elCenterY"], [1 < arguments.length && void 0 !== t ? t : 20, 0]]
      };
    },
    blurOut: function blurOut(e, t) {
      return {
        opacity: [[0 < arguments.length && void 0 !== e ? e : "elCenterY", "elOutY-elHeight"], [0, 1 < arguments.length && void 0 !== t ? t : 20]]
      };
    },
    scaleInOut: function scaleInOut(e, t) {
      t = 1 < arguments.length && void 0 !== t ? t : .6;
      return {
        scale: [n(0 < arguments.length && void 0 !== e ? e : 100), [t, 1, 1, 1, t]]
      };
    },
    scaleIn: function scaleIn(e, t) {
      return {
        scale: [["elInY+elHeight", 0 < arguments.length && void 0 !== e ? e : "elCenterY"], [1 < arguments.length && void 0 !== t ? t : .6, 1]]
      };
    },
    scaleOut: function scaleOut(e, t) {
      return {
        scale: [[0 < arguments.length && void 0 !== e ? e : "elCenterY", "elOutY-elHeight"], [1, 1 < arguments.length && void 0 !== t ? t : .6]]
      };
    },
    slideX: function slideX(e, t) {
      return {
        translateX: [["elInY", 0 < arguments.length && void 0 !== e ? e : 0], [0, 1 < arguments.length && void 0 !== t ? t : 500]]
      };
    },
    slideY: function slideY(e, t) {
      return {
        translateY: [["elInY", 0 < arguments.length && void 0 !== e ? e : 0], [0, 1 < arguments.length && void 0 !== t ? t : 500]]
      };
    },
    spin: function spin(e, t) {
      e = 0 < arguments.length && void 0 !== e ? e : 1e3;
      return {
        rotate: [[0, e], [0, 1 < arguments.length && void 0 !== t ? t : 360], {
          modValue: e
        }]
      };
    },
    flipX: function flipX(e, t) {
      e = 0 < arguments.length && void 0 !== e ? e : 1e3;
      return {
        rotateX: [[0, e], [0, 1 < arguments.length && void 0 !== t ? t : 360], {
          modValue: e
        }]
      };
    },
    flipY: function flipY(e, t) {
      e = 0 < arguments.length && void 0 !== e ? e : 1e3;
      return {
        rotateY: [[0, e], [0, 1 < arguments.length && void 0 !== t ? t : 360], {
          modValue: e
        }]
      };
    },
    jiggle: function jiggle(e, t) {
      e = 0 < arguments.length && void 0 !== e ? e : 50, t = 1 < arguments.length && void 0 !== t ? t : 40;
      return {
        skewX: [[0, +e, 2 * e, 3 * e, 4 * e], [0, t, 0, -t, 0], {
          modValue: 4 * e
        }]
      };
    },
    seesaw: function seesaw(e, t) {
      e = 0 < arguments.length && void 0 !== e ? e : 50, t = 1 < arguments.length && void 0 !== t ? t : 40;
      return {
        skewY: [[0, +e, 2 * e, 3 * e, 4 * e], [0, t, 0, -t, 0], {
          modValue: 4 * e
        }]
      };
    },
    zigzag: function zigzag(e, t) {
      e = 0 < arguments.length && void 0 !== e ? e : 100, t = 1 < arguments.length && void 0 !== t ? t : 100;
      return {
        translateX: [[0, +e, 2 * e, 3 * e, 4 * e], [0, t, 0, -t, 0], {
          modValue: 4 * e
        }]
      };
    },
    hueRotate: function hueRotate(e, t) {
      e = 0 < arguments.length && void 0 !== e ? e : 600;
      return {
        "hue-rotate": [[0, e], [0, 1 < arguments.length && void 0 !== t ? t : 360], {
          modValue: e
        }]
      };
    }
  },
      e = (l = ["perspective", "scaleX", "scaleY", "scale", "skewX", "skewY", "skew", "rotateX", "rotateY", "rotate"], u = ["blur", "hue-rotate", "brightness"], s = ["translateX", "translateY", "translateZ"], _ = ["perspective", "border-radius", "blur", "translateX", "translateY", "translateZ"], P = ["hue-rotate", "rotate", "rotateX", "rotateY", "skew", "skewX", "skewY"], I = {
    easeInQuad: function easeInQuad(e) {
      return e * e;
    },
    easeOutQuad: function easeOutQuad(e) {
      return e * (2 - e);
    },
    easeInOutQuad: function easeInOutQuad(e) {
      return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1;
    },
    easeInCubic: function easeInCubic(e) {
      return e * e * e;
    },
    easeOutCubic: function easeOutCubic(e) {
      return --e * e * e + 1;
    },
    easeInOutCubic: function easeInOutCubic(e) {
      return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
    },
    easeInQuart: function easeInQuart(e) {
      return e * e * e * e;
    },
    easeOutQuart: function easeOutQuart(e) {
      return 1 - --e * e * e * e;
    },
    easeInOutQuart: function easeInOutQuart(e) {
      return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
    },
    easeInQuint: function easeInQuint(e) {
      return e * e * e * e * e;
    },
    easeOutQuint: function easeOutQuint(e) {
      return 1 + --e * e * e * e * e;
    },
    easeInOutQuint: function easeInOutQuint(e) {
      return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e;
    },
    easeOutBounce: function easeOutBounce(e) {
      var t = 7.5625,
          n = 2.75;
      return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375;
    },
    easeInBounce: function easeInBounce(e) {
      return 1 - I.easeOutBounce(1 - e);
    },
    easeOutBack: function easeOutBack(e) {
      return 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2);
    },
    easeInBack: function easeInBack(e) {
      return 2.70158 * e * e * e - 1.70158 * e * e;
    }
  }, new function e() {
    var o = this;
    _classCallCheck(this, e), _defineProperty(this, "drivers", []), _defineProperty(this, "elements", []), _defineProperty(this, "frame", 0), _defineProperty(this, "debug", !1), _defineProperty(this, "windowWidth", 0), _defineProperty(this, "windowHeight", 0), _defineProperty(this, "presets", t), _defineProperty(this, "debugData", {
      frameLengths: []
    }), _defineProperty(this, "init", function () {
      o.findAndAddElements(), window.requestAnimationFrame(o.onAnimationFrame), o.windowWidth = document.body.clientWidth, o.windowHeight = document.body.clientHeight, window.onresize = o.onWindowResize;
    }), _defineProperty(this, "onWindowResize", function () {
      document.body.clientWidth === o.windowWidth && document.body.clientHeight === o.windowHeight || (o.windowWidth = document.body.clientWidth, o.windowHeight = document.body.clientHeight, o.elements.forEach(function (e) {
        return e.calculateTransforms();
      }));
    }), _defineProperty(this, "onAnimationFrame", function (e) {
      o.debug && (o.debugData.frameStart = Date.now());
      var t,
          n = {};
      o.drivers.forEach(function (e) {
        n[e.name] = e.getValue(o.frame);
      }), o.elements.forEach(function (e) {
        e.update(n, o.frame);
      }), o.debug && o.debugData.frameLengths.push(Date.now() - o.debugData.frameStart), o.frame % 60 == 0 && o.debug && (t = Math.ceil(o.debugData.frameLengths.reduce(function (e, t) {
        return e + t;
      }, 0) / 60), console.log("Average frame calculation time: ".concat(t, "ms")), o.debugData.frameLengths = []), o.frame++, window.requestAnimationFrame(o.onAnimationFrame);
    }), _defineProperty(this, "addDriver", function (e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      o.drivers.push(new i(e, t, n));
    }), _defineProperty(this, "removeDriver", function (t) {
      o.drivers = o.drivers.filter(function (e) {
        return e.name !== t;
      });
    }), _defineProperty(this, "findAndAddElements", function () {
      o.elements = [], document.querySelectorAll(".lax").forEach(function (e) {
        var t = [];
        e.classList.forEach(function (e) {
          e.includes("lax_preset") && (e = e.replace("lax_preset_", ""), t.push(e));
        });

        var n = _defineProperty({}, "scrollY", {
          presets: t
        });

        o.elements.push(new f(".lax", o, e, n, 0, {}));
      });
    }), _defineProperty(this, "addElements", function (n, r, i) {
      document.querySelectorAll(n).forEach(function (e, t) {
        o.elements.push(new f(n, o, e, r, t, i));
      });
    }), _defineProperty(this, "removeElements", function (t) {
      o.elements = o.elements.filter(function (e) {
        return e.selector !== t;
      });
    }), _defineProperty(this, "addElement", function (e, t, n) {
      o.elements.push(new f("", o, e, t, 0, n));
    }), _defineProperty(this, "removeElement", function (t) {
      o.elements = o.elements.filter(function (e) {
        return e.domElement !== t;
      });
    });
  }());

  function c(e, t) {
    if (Array.isArray(e)) return e;

    for (var n = Object.keys(e).map(function (e) {
      return parseInt(e);
    }).sort(function (e, t) {
      return t < e ? 1 : -1;
    }), r = n[n.length - 1], i = 0; i < n.length; i++) {
      var o = n[i];

      if (t < o) {
        r = o;
        break;
      }
    }

    return e[r];
  }

  function d(e, t, n) {
    var r = t.width,
        i = t.height,
        o = t.x,
        a = t.y;
    if ("number" == typeof e) return e;

    var l,
        u = document.body.scrollHeight,
        s = document.body.scrollWidth,
        c = window.innerWidth,
        d = window.innerHeight,
        f = _slicedToArray((l = void 0 !== window.pageXOffset, f = "CSS1Compat" === (document.compatMode || ""), t = l ? window.pageXOffset : (f ? document.documentElement : document.body).scrollLeft, [l ? window.pageYOffset : (f ? document.documentElement : document.body).scrollTop, t]), 2),
        t = f[0],
        o = o + f[1],
        f = o + r,
        a = a + t,
        t = a + i;

    return Function("return ".concat(e.replace(/screenWidth/g, c).replace(/screenHeight/g, d).replace(/pageHeight/g, u).replace(/pageWidth/g, s).replace(/elWidth/g, r).replace(/elHeight/g, i).replace(/elInY/g, a - d).replace(/elOutY/g, t).replace(/elCenterY/g, a + i / 2 - d / 2).replace(/elInX/g, o - c).replace(/elOutX/g, f).replace(/elCenterX/g, o + r / 2 - c / 2).replace(/index/g, n)))();
  }

  function i(e, t) {
    var n = this,
        r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
    _classCallCheck(this, i), _defineProperty(this, "getValueFn", void 0), _defineProperty(this, "name", ""), _defineProperty(this, "lastValue", 0), _defineProperty(this, "frameStep", 1), _defineProperty(this, "m1", 0), _defineProperty(this, "m2", 0), _defineProperty(this, "inertia", 0), _defineProperty(this, "inertiaEnabled", !1), _defineProperty(this, "getValue", function (e) {
      var t = n.lastValue;
      return e % n.frameStep == 0 && (t = n.getValueFn(e)), n.inertiaEnabled && (e = t - n.lastValue, n.m1 = .8 * n.m1 + e * (1 - .8), n.m2 = .8 * n.m2 + n.m1 * (1 - .8), n.inertia = Math.round(5e3 * n.m2) / 15e3), n.lastValue = t, [n.lastValue, n.inertia];
    }), this.name = e, this.getValueFn = t, Object.keys(r).forEach(function (e) {
      n[e] = r[e];
    }), this.lastValue = this.getValueFn(0);
  }

  function f(e, t, n, r) {
    var b = this,
        i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
        o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : {};
    _classCallCheck(this, f), _defineProperty(this, "domElement", void 0), _defineProperty(this, "transformsData", void 0), _defineProperty(this, "styles", {}), _defineProperty(this, "selector", ""), _defineProperty(this, "groupIndex", 0), _defineProperty(this, "laxInstance", void 0), _defineProperty(this, "onUpdate", void 0), _defineProperty(this, "update", function (e, t) {
      var n,
          r = b.transforms,
          i = {};

      for (n in r) {
        var o = r[n];
        e[n] || console.error("No lax driver with name: ", n);

        var a,
            l = _slicedToArray(e[n], 2),
            u = l[0],
            s = l[1];

        for (a in o) {
          var c,
              d = _slicedToArray(o[a], 3),
              f = d[0],
              h = d[1],
              m = d[2],
              p = void 0 === m ? {} : m,
              g = p.modValue,
              y = p.frameStep,
              v = void 0 === y ? 1 : y,
              w = p.easing,
              d = p.inertia,
              m = p.inertiaMode,
              y = p.cssFn,
              p = p.cssUnit,
              p = void 0 === p ? "" : p,
              w = I[w];

          t % v == 0 && (w = function (e, t, n, r) {
            var i = 0;
            if (e.forEach(function (e) {
              e < n && i++;
            }), i <= 0) return t[0];
            if (i >= e.length) return t[e.length - 1];
            var o,
                a = (a = e[o = i - 1], e = e[i], (n - a) / (e - a));
            return r && (a = r(a)), o = t[o], t = t[i], o * (1 - (a = a)) + t * a;
          }(f, h, g ? u % g : u, w), d && (c = s * d, "absolute" === m && (c = Math.abs(c)), w += c), c = "px" == (p || _.includes(a) ? "px" : P.includes(a) ? "deg" : "") ? 0 : 3, c = w.toFixed(c), i[a] = y ? y(c, b.domElement) : c + p);
        }
      }

      b.applyStyles(i), b.onUpdate && b.onUpdate(e, b.domElement);
    }), _defineProperty(this, "calculateTransforms", function () {
      b.transforms = {};
      var e,
          l = b.laxInstance.windowWidth;

      for (e in b.transformsData) {
        !function (e) {
          var o = b.transformsData[e],
              a = {},
              t = o.presets;
          (void 0 === t ? [] : t).forEach(function (e) {
            var t,
                n = _slicedToArray(e.split(":"), 3),
                r = n[0],
                i = n[1],
                e = n[2],
                n = window.lax.presets[r];

            n ? (t = n(i, e), Object.keys(t).forEach(function (e) {
              o[e] = t[e];
            })) : console.error("Lax preset cannot be found with name: ", r);
          }), delete o.presets;

          for (var n in o) {
            !function (e) {
              var t = _slicedToArray(o[e], 3),
                  n = t[0],
                  r = void 0 === n ? [-1e9, 1e9] : n,
                  n = t[1],
                  n = void 0 === n ? [-1e9, 1e9] : n,
                  t = t[2],
                  t = void 0 === t ? {} : t,
                  i = b.domElement.getBoundingClientRect(),
                  r = c(r, l).map(function (e) {
                return d(e, i, b.groupIndex);
              }),
                  n = c(n, l).map(function (e) {
                return d(e, i, b.groupIndex);
              });

              a[e] = [r, n, t];
            }(n);
          }

          b.transforms[e] = a;
        }(e);
      }
    }), _defineProperty(this, "applyStyles", function (e) {
      var r,
          i,
          o,
          t = (r = e, i = {
        transform: "",
        filter: ""
      }, o = {
        translateX: 1e-5,
        translateY: 1e-5,
        translateZ: 1e-5
      }, Object.keys(r).forEach(function (e) {
        var t = r[e],
            n = _.includes(e) ? "px" : P.includes(e) ? "deg" : "";
        s.includes(e) ? o[e] = t : l.includes(e) ? i.transform += "".concat(e, "(").concat(t).concat(n, ") ") : u.includes(e) ? i.filter += "".concat(e, "(").concat(t).concat(n, ") ") : i[e] = "".concat(t).concat(n, " ");
      }), i.transform = "translate3d(".concat(o.translateX, "px, ").concat(o.translateY, "px, ").concat(o.translateZ, "px) ").concat(i.transform), i);
      Object.keys(t).forEach(function (e) {
        b.domElement.style.setProperty(e, t[e]);
      });
    }), this.selector = e, this.laxInstance = t, this.domElement = n, this.transformsData = r, this.groupIndex = i;
    var a = void 0 === (i = o.style) ? {} : i,
        o = o.onUpdate;
    Object.keys(a).forEach(function (e) {
      n.style.setProperty(e, a[e]);
    }), o && (this.onUpdate = o), this.calculateTransforms();
  }

  "undefined" != typeof module && void 0 !== module.exports ? module.exports = e : window.lax = e;
}();
},{}],"app/js/lax-config.js":[function(require,module,exports) {
"use strict";

var _lax = _interopRequireDefault(require("../vendor/laxxx/lax.min"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  _lax.default.init(); // Add a driver that we use to control our animations


  _lax.default.addDriver('scrollY', function () {
    return window.scrollY;
  }); // Hero -------------------------------------------------------------------------


  _lax.default.addElements('.hero__desc, .hero__img', {
    scrollY: {
      opacity: [['elCenterY+200', 'elOutY'], [1, 0]],
      translateY: [['elCenterY+200', 'elOutY'], [0, -50]]
    }
  });

  _lax.default.addElements('.hero__desc', {
    scrollY: {
      translateX: [['elCenterY+200', 'elOutY+00'], [0, -100]],
      translateY: [['elCenterY+200', 'elOutY+00'], [0, -50]]
    }
  });

  _lax.default.addElements('.hero__img', {
    scrollY: {
      translateX: [['elCenterY+200', 'elOutY+00'], [0, 100]],
      translateY: [['elCenterY+200', 'elOutY+00'], [0, -50]]
    }
  }); // About ------------------------------------------------------------------------


  _lax.default.addElements('.about__desc, .intelligent > div', {
    scrollY: {
      opacity: [['elInY', 300], [0, 1]]
    }
  });

  _lax.default.addElements('.feature:nth-child(1), .feature:nth-child(2), .feature:nth-child(3)', {
    scrollY: {
      opacity: [['elInY', 'elCenterY-200', 'elCenterY+200', 'elOutY'], [0, 1, 1, 0]]
    }
  });

  _lax.default.addElements('.intelligent div:first-child', {
    scrollY: {
      opacity: [['elInY', 'elCenterY-200', 'elCenterY+200', 'elOutY'], [0, 1, 1, 0]]
    }
  });

  _lax.default.addElements('.about__desc, .intelligent div:first-child', {
    scrollY: {
      translateX: [['elInY', 'elCenterY'], [-100, 0]]
    }
  });

  _lax.default.addElements('.feature, .intelligent div:last-child', {
    scrollY: {
      translateX: [['elInY', 'elCenterY'], [100, 0]]
    }
  }); // carousel-item


  _lax.default.addElements('.carousel', {
    scrollY: {
      translateY: [['elInY', 'elCenterY-250'], ['100', 0]],
      opacity: [['elInY', 'elCenterY-250', 'elCenterY+250', 'elOutY'], [0, 1, 1, 0]]
    }
  });
};
},{"../vendor/laxxx/lax.min":"app/vendor/laxxx/lax.min.js"}],"../node_modules/@babel/runtime/helpers/typeof.js":[function(require,module,exports) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],"app/vendor/sal/sal.js":[function(require,module,exports) {
var define;
"use strict";

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof2.default)(exports)) && "object" == (typeof module === "undefined" ? "undefined" : (0, _typeof2.default)(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof2.default)(exports)) ? exports.sal = t() : e.sal = t();
}(void 0, function () {
  return function () {
    "use strict";

    var e = {
      855: function _(e, t, n) {
        function r(e, t) {
          var n = Object.keys(e);

          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, r);
          }

          return n;
        }

        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? r(Object(n), !0).forEach(function (t) {
              a(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
          }

          return e;
        }

        function a(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e;
        }

        n.d(t, {
          default: function _default() {
            return E;
          }
        });

        var s = "Sal was not initialised! Probably it is used in SSR.",
            i = "Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",
            l = {
          root: null,
          rootMargin: "0% 50%",
          threshold: .5,
          animateClassName: "sal-animate",
          disabledClassName: "sal-disabled",
          enterEventName: "sal:in",
          exitEventName: "sal:out",
          selector: "[data-sal]",
          once: !0,
          disabled: !1
        },
            c = [],
            u = null,
            d = function d(e) {
          e && e !== l && (l = o(o({}, l), e));
        },
            f = function f(e) {
          e.classList.remove(l.animateClassName);
        },
            b = function b(e, t) {
          var n = new CustomEvent(e, {
            bubbles: !0,
            detail: t
          });
          t.target.dispatchEvent(n);
        },
            p = function p() {
          document.body.classList.add(l.disabledClassName);
        },
            m = function m() {
          u.disconnect(), u = null;
        },
            v = function v() {
          return l.disabled || "function" == typeof l.disabled && l.disabled();
        },
            y = function y(e, t) {
          e.forEach(function (e) {
            var n = e.target,
                r = void 0 !== n.dataset.salRepeat,
                o = void 0 !== n.dataset.salOnce,
                a = r || !(o || l.once);
            e.intersectionRatio >= l.threshold ? (function (e) {
              e.target.classList.add(l.animateClassName), b(l.enterEventName, e);
            }(e), a || t.unobserve(n)) : a && function (e) {
              f(e.target), b(l.exitEventName, e);
            }(e);
          });
        },
            O = function O() {
          var e = [].filter.call(document.querySelectorAll(l.selector), function (e) {
            return !function (e) {
              return e.classList.contains(l.animateClassName);
            }(e, l.animateClassName);
          });
          return e.forEach(function (e) {
            return u.observe(e);
          }), e;
        },
            h = function h() {
          p(), m();
        },
            g = function g() {
          document.body.classList.remove(l.disabledClassName), u = new IntersectionObserver(y, {
            root: l.root,
            rootMargin: l.rootMargin,
            threshold: l.threshold
          }), c = O();
        },
            w = function w() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          m(), Array.from(document.querySelectorAll(l.selector)).forEach(f), d(e), g();
        },
            j = function j() {
          var e = O();
          c.push(e);
        };

        var E = function E() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
          if (d(e), "undefined" == typeof window) return console.warn(s), {
            elements: c,
            disable: h,
            enable: g,
            reset: w,
            update: j
          };
          if (!window.IntersectionObserver) throw p(), Error(i);
          return v() ? p() : g(), {
            elements: c,
            disable: h,
            enable: g,
            reset: w,
            update: j
          };
        };
      }
    },
        t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        exports: {}
      };
      return e[r](o, o.exports, n), o.exports;
    }

    return n.d = function (e, t) {
      for (var r in t) {
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
          enumerable: !0,
          get: t[r]
        });
      }
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n(855);
  }().default;
});
},{"@babel/runtime/helpers/typeof":"../node_modules/@babel/runtime/helpers/typeof.js"}],"app/js/sal-config.js":[function(require,module,exports) {
"use strict";

var _sal = _interopRequireDefault(require("../vendor/sal/sal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _sal.default)({
  once: false
});
},{"../vendor/sal/sal":"app/vendor/sal/sal.js"}],"app/js/app.js":[function(require,module,exports) {

},{}],"index.js":[function(require,module,exports) {
"use strict";

require("./app/vendor/materialize-src/sass/materialize.scss");

require("./app/vendor/sal/sal.css");

require("./app/scss/main.scss");

require("../node_modules/materialize-css/js/cash");

require("../node_modules/materialize-css/js/global");

require("../node_modules/materialize-css/js/anime.min");

require("../node_modules/materialize-css/js/carousel");

require("../node_modules/materialize-css/js/waves");

require("../node_modules/materialize-css/js/sidenav");

require("../node_modules/materialize-css/js/scrollspy");

require("./app/js/materialize-config");

require("./app/js/lax-config");

require("./app/js/sal-config");

require("./app/js/app");
},{"./app/vendor/materialize-src/sass/materialize.scss":"app/vendor/materialize-src/sass/materialize.scss","./app/vendor/sal/sal.css":"app/vendor/sal/sal.css","./app/scss/main.scss":"app/scss/main.scss","../node_modules/materialize-css/js/cash":"../node_modules/materialize-css/js/cash.js","../node_modules/materialize-css/js/global":"../node_modules/materialize-css/js/global.js","../node_modules/materialize-css/js/anime.min":"../node_modules/materialize-css/js/anime.min.js","../node_modules/materialize-css/js/carousel":"../node_modules/materialize-css/js/carousel.js","../node_modules/materialize-css/js/waves":"../node_modules/materialize-css/js/waves.js","../node_modules/materialize-css/js/sidenav":"../node_modules/materialize-css/js/sidenav.js","../node_modules/materialize-css/js/scrollspy":"../node_modules/materialize-css/js/scrollspy.js","./app/js/materialize-config":"app/js/materialize-config.js","./app/js/lax-config":"app/js/lax-config.js","./app/js/sal-config":"app/js/sal-config.js","./app/js/app":"app/js/app.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52856" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map