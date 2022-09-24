/*! For license information please see throwjs-react-list.js.LICENSE.txt */
System.register(['react', 'react-dom', '@throwjs/store'], function (e, t) {
  var r = {},
    n = {},
    o = {};
  return (
    Object.defineProperty(r, '__esModule', { value: !0 }),
    {
      setters: [
        function (e) {
          Object.keys(e).forEach(function (t) {
            r[t] = e[t];
          });
        },
        function (e) {
          n.default = e.default;
        },
        function (e) {
          o.storeTodo = e.storeTodo;
        },
      ],
      execute: function () {
        e(
          (() => {
            var e = {
                996: (e, t, r) => {
                  'use strict';
                  r.d(t, { Z: () => s });
                  var n = r(478),
                    o = r.n(n),
                    a = r(185),
                    i = r.n(a)()(o());
                  i.push([
                    e.id,
                    '.Home{height:100%;display:flex;justify-content:center;padding-top:5rem}.Home__container{width:100%;max-width:600px}.Home__card{background-color:var(--white);border-radius:var(--radius);box-shadow:0px 0px 20px -5px var(--light-grayish-blue-2);padding:2rem}.Home__title{margin:0;margin-bottom:1rem}',
                    '',
                    {
                      version: 3,
                      sources: ['webpack://./src/pages/Home/Home.scss'],
                      names: [],
                      mappings:
                        'AAAA,MACE,WAAA,CACA,YAAA,CACA,sBAAA,CACA,gBAAA,CAEA,iBACE,UAAA,CACA,eAAA,CAGF,YACE,6BAAA,CACA,2BAAA,CACA,wDAAA,CACA,YAAA,CAGF,aACE,QAAA,CACA,kBAAA',
                      sourcesContent: [
                        '.Home {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  padding-top: 5rem;\n\n  &__container {\n    width: 100%;\n    max-width: 600px;\n  }\n\n  &__card {\n    background-color: var(--white);\n    border-radius: var(--radius);\n    box-shadow: 0px 0px 20px -5px var(--light-grayish-blue-2);\n    padding: 2rem;\n  }\n\n  &__title {\n    margin: 0;\n    margin-bottom: 1rem;\n  }\n}\n',
                      ],
                      sourceRoot: '',
                    },
                  ]);
                  const s = i;
                },
                301: (e, t, r) => {
                  'use strict';
                  r.d(t, { Z: () => s });
                  var n = r(478),
                    o = r.n(n),
                    a = r(185),
                    i = r.n(a)()(o());
                  i.push([
                    e.id,
                    '.TodoItem{background-color:var(--light-grayish-blue-1);margin-bottom:1rem;border-radius:var(--radius);min-height:50px;display:flex;align-items:center;padding:0 1.5rem;gap:1rem}.TodoItem p{font-size:16px;margin:0;font-weight:600;flex:1}.TodoItem button{background-color:var(--red);color:var(--white);border-radius:var(--radius);border:none;cursor:pointer;min-height:30px;padding:0 1rem}',
                    '',
                    {
                      version: 3,
                      sources: [
                        'webpack://./src/pages/Home/components/TodoItem/TodoItem.scss',
                      ],
                      names: [],
                      mappings:
                        'AAAA,UACE,4CAAA,CACA,kBAAA,CACA,2BAAA,CACA,eAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA,CACA,QAAA,CAEA,YACE,cAAA,CACA,QAAA,CACA,eAAA,CACA,MAAA,CAGF,iBACE,2BAAA,CACA,kBAAA,CACA,2BAAA,CACA,WAAA,CACA,cAAA,CACA,eAAA,CACA,cAAA',
                      sourcesContent: [
                        '.TodoItem {\n  background-color: var(--light-grayish-blue-1);\n  margin-bottom: 1rem;\n  border-radius: var(--radius);\n  min-height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1.5rem;\n  gap: 1rem;\n\n  p {\n    font-size: 16px;\n    margin: 0;\n    font-weight: 600;\n    flex: 1;\n  }\n\n  button {\n    background-color: var(--red);\n    color: var(--white);\n    border-radius: var(--radius);\n    border: none;\n    cursor: pointer;\n    min-height: 30px;\n    padding: 0 1rem;\n  }\n}\n',
                      ],
                      sourceRoot: '',
                    },
                  ]);
                  const s = i;
                },
                381: (e, t, r) => {
                  'use strict';
                  r.d(t, { Z: () => s });
                  var n = r(478),
                    o = r.n(n),
                    a = r(185),
                    i = r.n(a)()(o());
                  i.push([
                    e.id,
                    '.TodoList{list-style:none;padding:0;margin:0}',
                    '',
                    {
                      version: 3,
                      sources: [
                        'webpack://./src/pages/Home/components/TodoList/TodoList.scss',
                      ],
                      names: [],
                      mappings: 'AAAA,UACE,eAAA,CACA,SAAA,CACA,QAAA',
                      sourcesContent: [
                        '.TodoList {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n',
                      ],
                      sourceRoot: '',
                    },
                  ]);
                  const s = i;
                },
                185: (e) => {
                  'use strict';
                  e.exports = function (e) {
                    var t = [];
                    return (
                      (t.toString = function () {
                        return this.map(function (t) {
                          var r = '',
                            n = void 0 !== t[5];
                          return (
                            t[4] && (r += '@supports ('.concat(t[4], ') {')),
                            t[2] && (r += '@media '.concat(t[2], ' {')),
                            n &&
                              (r += '@layer'.concat(
                                t[5].length > 0 ? ' '.concat(t[5]) : '',
                                ' {'
                              )),
                            (r += e(t)),
                            n && (r += '}'),
                            t[2] && (r += '}'),
                            t[4] && (r += '}'),
                            r
                          );
                        }).join('');
                      }),
                      (t.i = function (e, r, n, o, a) {
                        'string' == typeof e && (e = [[null, e, void 0]]);
                        var i = {};
                        if (n)
                          for (var s = 0; s < this.length; s++) {
                            var c = this[s][0];
                            null != c && (i[c] = !0);
                          }
                        for (var u = 0; u < e.length; u++) {
                          var l = [].concat(e[u]);
                          (n && i[l[0]]) ||
                            (void 0 !== a &&
                              (void 0 === l[5] ||
                                (l[1] = '@layer'
                                  .concat(
                                    l[5].length > 0 ? ' '.concat(l[5]) : '',
                                    ' {'
                                  )
                                  .concat(l[1], '}')),
                              (l[5] = a)),
                            r &&
                              (l[2]
                                ? ((l[1] = '@media '
                                    .concat(l[2], ' {')
                                    .concat(l[1], '}')),
                                  (l[2] = r))
                                : (l[2] = r)),
                            o &&
                              (l[4]
                                ? ((l[1] = '@supports ('
                                    .concat(l[4], ') {')
                                    .concat(l[1], '}')),
                                  (l[4] = o))
                                : (l[4] = ''.concat(o))),
                            t.push(l));
                        }
                      }),
                      t
                    );
                  };
                },
                478: (e) => {
                  'use strict';
                  e.exports = function (e) {
                    var t = e[1],
                      r = e[3];
                    if (!r) return t;
                    if ('function' == typeof btoa) {
                      var n = btoa(
                          unescape(encodeURIComponent(JSON.stringify(r)))
                        ),
                        o =
                          'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            n
                          ),
                        a = '/*# '.concat(o, ' */'),
                        i = r.sources.map(function (e) {
                          return '/*# sourceURL='
                            .concat(r.sourceRoot || '')
                            .concat(e, ' */');
                        });
                      return [t].concat(i).concat([a]).join('\n');
                    }
                    return [t].join('\n');
                  };
                },
                767: (e) => {
                  'use strict';
                  var t = Object.getOwnPropertySymbols,
                    r = Object.prototype.hasOwnProperty,
                    n = Object.prototype.propertyIsEnumerable;
                  function o(e) {
                    if (null == e)
                      throw new TypeError(
                        'Object.assign cannot be called with null or undefined'
                      );
                    return Object(e);
                  }
                  e.exports = (function () {
                    try {
                      if (!Object.assign) return !1;
                      var e = new String('abc');
                      if (
                        ((e[5] = 'de'),
                        '5' === Object.getOwnPropertyNames(e)[0])
                      )
                        return !1;
                      for (var t = {}, r = 0; r < 10; r++)
                        t['_' + String.fromCharCode(r)] = r;
                      if (
                        '0123456789' !==
                        Object.getOwnPropertyNames(t)
                          .map(function (e) {
                            return t[e];
                          })
                          .join('')
                      )
                        return !1;
                      var n = {};
                      return (
                        'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                          n[e] = e;
                        }),
                        'abcdefghijklmnopqrst' ===
                          Object.keys(Object.assign({}, n)).join('')
                      );
                    } catch (e) {
                      return !1;
                    }
                  })()
                    ? Object.assign
                    : function (e, a) {
                        for (
                          var i, s, c = o(e), u = 1;
                          u < arguments.length;
                          u++
                        ) {
                          for (var l in (i = Object(arguments[u])))
                            r.call(i, l) && (c[l] = i[l]);
                          if (t) {
                            s = t(i);
                            for (var p = 0; p < s.length; p++)
                              n.call(i, s[p]) && (c[s[p]] = i[s[p]]);
                          }
                        }
                        return c;
                      };
                },
                945: (e, t, r) => {
                  'use strict';
                  r(767);
                  var n = r(954),
                    o = 60103;
                  if ('function' == typeof Symbol && Symbol.for) {
                    var a = Symbol.for;
                    (o = a('react.element')), a('react.fragment');
                  }
                  var i =
                      n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                        .ReactCurrentOwner,
                    s = Object.prototype.hasOwnProperty,
                    c = { key: !0, ref: !0, __self: !0, __source: !0 };
                  function u(e, t, r) {
                    var n,
                      a = {},
                      u = null,
                      l = null;
                    for (n in (void 0 !== r && (u = '' + r),
                    void 0 !== t.key && (u = '' + t.key),
                    void 0 !== t.ref && (l = t.ref),
                    t))
                      s.call(t, n) && !c.hasOwnProperty(n) && (a[n] = t[n]);
                    if (e && e.defaultProps)
                      for (n in (t = e.defaultProps))
                        void 0 === a[n] && (a[n] = t[n]);
                    return {
                      $$typeof: o,
                      type: e,
                      key: u,
                      ref: l,
                      props: a,
                      _owner: i.current,
                    };
                  }
                  (t.jsx = u), (t.jsxs = u);
                },
                637: (e, t, r) => {
                  'use strict';
                  e.exports = r(945);
                },
                624: (e) => {
                  'use strict';
                  var t = [];
                  function r(e) {
                    for (var r = -1, n = 0; n < t.length; n++)
                      if (t[n].identifier === e) {
                        r = n;
                        break;
                      }
                    return r;
                  }
                  function n(e, n) {
                    for (var a = {}, i = [], s = 0; s < e.length; s++) {
                      var c = e[s],
                        u = n.base ? c[0] + n.base : c[0],
                        l = a[u] || 0,
                        p = ''.concat(u, ' ').concat(l);
                      a[u] = l + 1;
                      var d = r(p),
                        m = {
                          css: c[1],
                          media: c[2],
                          sourceMap: c[3],
                          supports: c[4],
                          layer: c[5],
                        };
                      if (-1 !== d) t[d].references++, t[d].updater(m);
                      else {
                        var f = o(m, n);
                        (n.byIndex = s),
                          t.splice(s, 0, {
                            identifier: p,
                            updater: f,
                            references: 1,
                          });
                      }
                      i.push(p);
                    }
                    return i;
                  }
                  function o(e, t) {
                    var r = t.domAPI(t);
                    return (
                      r.update(e),
                      function (t) {
                        if (t) {
                          if (
                            t.css === e.css &&
                            t.media === e.media &&
                            t.sourceMap === e.sourceMap &&
                            t.supports === e.supports &&
                            t.layer === e.layer
                          )
                            return;
                          r.update((e = t));
                        } else r.remove();
                      }
                    );
                  }
                  e.exports = function (e, o) {
                    var a = n((e = e || []), (o = o || {}));
                    return function (e) {
                      e = e || [];
                      for (var i = 0; i < a.length; i++) {
                        var s = r(a[i]);
                        t[s].references--;
                      }
                      for (var c = n(e, o), u = 0; u < a.length; u++) {
                        var l = r(a[u]);
                        0 === t[l].references &&
                          (t[l].updater(), t.splice(l, 1));
                      }
                      a = c;
                    };
                  };
                },
                892: (e) => {
                  'use strict';
                  var t = {};
                  e.exports = function (e, r) {
                    var n = (function (e) {
                      if (void 0 === t[e]) {
                        var r = document.querySelector(e);
                        if (
                          window.HTMLIFrameElement &&
                          r instanceof window.HTMLIFrameElement
                        )
                          try {
                            r = r.contentDocument.head;
                          } catch (e) {
                            r = null;
                          }
                        t[e] = r;
                      }
                      return t[e];
                    })(e);
                    if (!n)
                      throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                      );
                    n.appendChild(r);
                  };
                },
                716: (e) => {
                  'use strict';
                  e.exports = function (e) {
                    var t = document.createElement('style');
                    return (
                      e.setAttributes(t, e.attributes),
                      e.insert(t, e.options),
                      t
                    );
                  };
                },
                359: (e, t, r) => {
                  'use strict';
                  e.exports = function (e) {
                    var t = r.nc;
                    t && e.setAttribute('nonce', t);
                  };
                },
                990: (e) => {
                  'use strict';
                  e.exports = function (e) {
                    var t = e.insertStyleElement(e);
                    return {
                      update: function (r) {
                        !(function (e, t, r) {
                          var n = '';
                          r.supports &&
                            (n += '@supports ('.concat(r.supports, ') {')),
                            r.media && (n += '@media '.concat(r.media, ' {'));
                          var o = void 0 !== r.layer;
                          o &&
                            (n += '@layer'.concat(
                              r.layer.length > 0 ? ' '.concat(r.layer) : '',
                              ' {'
                            )),
                            (n += r.css),
                            o && (n += '}'),
                            r.media && (n += '}'),
                            r.supports && (n += '}');
                          var a = r.sourceMap;
                          a &&
                            'undefined' != typeof btoa &&
                            (n +=
                              '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                btoa(
                                  unescape(
                                    encodeURIComponent(JSON.stringify(a))
                                  )
                                ),
                                ' */'
                              )),
                            t.styleTagTransform(n, e, t.options);
                        })(t, e, r);
                      },
                      remove: function () {
                        !(function (e) {
                          if (null === e.parentNode) return !1;
                          e.parentNode.removeChild(e);
                        })(t);
                      },
                    };
                  };
                },
                230: (e) => {
                  'use strict';
                  e.exports = function (e, t) {
                    if (t.styleSheet) t.styleSheet.cssText = e;
                    else {
                      for (; t.firstChild; ) t.removeChild(t.firstChild);
                      t.appendChild(document.createTextNode(e));
                    }
                  };
                },
                587: (e, t, r) => {
                  const n = r(838).R;
                  t.s = function (e) {
                    if ((e || (e = 1), !r.y.meta || !r.y.meta.url))
                      throw (
                        (console.error('__system_context__', r.y),
                        Error(
                          'systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided'
                        ))
                      );
                    r.p = n(r.y.meta.url, e);
                  };
                },
                838: (e, t, r) => {
                  t.R = function (e, t) {
                    var r = document.createElement('a');
                    r.href = e;
                    for (
                      var n =
                          '/' === r.pathname[0] ? r.pathname : '/' + r.pathname,
                        o = 0,
                        a = n.length;
                      o !== t && a >= 0;

                    )
                      '/' === n[--a] && o++;
                    if (o !== t)
                      throw Error(
                        'systemjs-webpack-interop: rootDirectoryLevel (' +
                          t +
                          ') is greater than the number of directories (' +
                          o +
                          ') in the URL path ' +
                          e
                      );
                    var i = n.slice(0, a + 1);
                    return r.protocol + '//' + r.host + i;
                  };
                  Number.isInteger;
                },
                882: (e) => {
                  'use strict';
                  e.exports = o;
                },
                954: (e) => {
                  'use strict';
                  e.exports = r;
                },
                493: (e) => {
                  'use strict';
                  e.exports = n;
                },
              },
              a = {};
            function i(t) {
              var r = a[t];
              if (void 0 !== r) return r.exports;
              var n = (a[t] = { id: t, exports: {} });
              return e[t](n, n.exports, i), n.exports;
            }
            (i.y = t),
              (i.n = (e) => {
                var t = e && e.__esModule ? () => e.default : () => e;
                return i.d(t, { a: t }), t;
              }),
              (i.d = (e, t) => {
                for (var r in t)
                  i.o(t, r) &&
                    !i.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
              }),
              (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
              (i.r = (e) => {
                'undefined' != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module',
                  }),
                  Object.defineProperty(e, '__esModule', { value: !0 });
              }),
              (i.p = ''),
              (i.nc = void 0);
            var s = {};
            return (
              (0, i(587).s)(1),
              (() => {
                'use strict';
                i.r(s),
                  i.d(s, {
                    bootstrap: () => W,
                    mount: () => Y,
                    unmount: () => Q,
                  });
                var e = i(954),
                  t = i(493);
                function r(e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                      (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      r.push.apply(r, n);
                  }
                  return r;
                }
                function n(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? r(Object(n), !0).forEach(function (t) {
                          a(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : r(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                  }
                  return e;
                }
                function o(e) {
                  return (o =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            'function' == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? 'symbol'
                            : typeof e;
                        })(e);
                }
                function a(e, t, r) {
                  return (
                    t in e
                      ? Object.defineProperty(e, t, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = r),
                    e
                  );
                }
                function c(e) {
                  return (c =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            'function' == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? 'symbol'
                            : typeof e;
                        })(e);
                }
                function u(e, t) {
                  var r;
                  if (
                    'function' !=
                    typeof (r = t.domElement
                      ? function () {
                          return t.domElement;
                        }
                      : t.domElementGetter
                      ? t.domElementGetter
                      : e.domElementGetter
                      ? e.domElementGetter
                      : (function (e) {
                          var t = e.appName || e.name;
                          if (!t)
                            throw Error(
                              "single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application"
                            );
                          var r = 'single-spa-application:'.concat(t);
                          return function () {
                            var e = document.getElementById(r);
                            return (
                              e ||
                                (((e = document.createElement('div')).id = r),
                                document.body.appendChild(e)),
                              e
                            );
                          };
                        })(t))
                  )
                    throw Error(
                      "single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '"
                        .concat(t.name, "'. Expected a function, received ")
                        .concat(c(r))
                    );
                  return function () {
                    var e = r(t);
                    if (!(e instanceof HTMLElement))
                      throw Error(
                        "single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '"
                          .concat(t.name, "'. Expected HTMLElement, received ")
                          .concat(c(e))
                      );
                    return e;
                  };
                }
                var l = null;
                try {
                  l = require('react').createContext();
                } catch (r) {}
                var p = {
                  React: null,
                  ReactDOM: null,
                  rootComponent: null,
                  loadRootComponent: null,
                  renderType: null,
                  errorBoundary: null,
                  errorBoundaryClass: null,
                  domElementGetter: null,
                  parcelCanUpdate: !0,
                  suppressComponentDidCatchWarning: !1,
                  domElements: {},
                  renderResults: {},
                  updateResolves: {},
                };
                function d(e, t) {
                  return e.rootComponent
                    ? Promise.resolve()
                    : e.loadRootComponent(t).then(function (t) {
                        e.rootComponent = t;
                      });
                }
                function m(e, t) {
                  return new Promise(function (r, n) {
                    e.suppressComponentDidCatchWarning ||
                      !(function (e) {
                        if (
                          !(
                            e &&
                            'string' == typeof e.version &&
                            e.version.indexOf('.') >= 0
                          )
                        )
                          return !1;
                        var t = e.version.slice(0, e.version.indexOf('.'));
                        try {
                          return Number(t) >= 16;
                        } catch (e) {
                          return !1;
                        }
                      })(e.React) ||
                      e.errorBoundary ||
                      (e.rootComponent.prototype
                        ? e.rootComponent.prototype.componentDidCatch ||
                          console.warn(
                            'single-spa-react: '.concat(
                              t.name || t.appName || t.childAppName,
                              "'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application."
                            )
                          )
                        : console.warn(
                            'single-spa-react: '.concat(
                              t.name || t.appName || t.childAppName,
                              "'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts)."
                            )
                          ));
                    var o = A(e, t, function () {
                        r(this);
                      }),
                      a = u(e, t)(),
                      i = (function (e) {
                        var t = e.opts,
                          r = e.elementToRender,
                          n = e.domElement,
                          o =
                            'function' == typeof t.renderType
                              ? t.renderType()
                              : t.renderType;
                        if (
                          [
                            'createRoot',
                            'unstable_createRoot',
                            'createBlockingRoot',
                            'unstable_createBlockingRoot',
                          ].indexOf(o) >= 0
                        ) {
                          var a = t.ReactDOM[o](n);
                          return a.render(r), a;
                        }
                        return (
                          'hydrate' === o
                            ? t.ReactDOM.hydrate(r, n)
                            : t.ReactDOM.render(r, n),
                          null
                        );
                      })({ elementToRender: o, domElement: a, opts: e });
                    (e.domElements[t.name] = a), (e.renderResults[t.name] = i);
                  });
                }
                function f(e, t) {
                  return new Promise(function (r) {
                    e.unmountFinished = r;
                    var n = e.renderResults[t.name];
                    n && n.unmount
                      ? n.unmount()
                      : e.ReactDOM.unmountComponentAtNode(
                          e.domElements[t.name]
                        ),
                      delete e.domElements[t.name],
                      delete e.renderResults[t.name];
                  });
                }
                function y(e, t) {
                  return new Promise(function (r) {
                    e.updateResolves[t.name] || (e.updateResolves[t.name] = []),
                      e.updateResolves[t.name].push(r);
                    var n = A(e, t, null),
                      o = e.renderResults[t.name];
                    if (o && o.render) o.render(n);
                    else {
                      var a = u(e, t)();
                      e.ReactDOM.render(n, a);
                    }
                  });
                }
                function A(e, t, r) {
                  var o = e.React.createElement(e.rootComponent, t),
                    a = l
                      ? e.React.createElement(l.Provider, { value: t }, o)
                      : o;
                  return (
                    (e.errorBoundary ||
                      t.errorBoundary ||
                      e.errorBoundaryClass ||
                      t.errorBoundaryClass) &&
                      ((e.errorBoundaryClass =
                        e.errorBoundaryClass ||
                        t.errorBoundaryClass ||
                        (function (e, t) {
                          function r(t) {
                            e.React.Component.apply(this, arguments),
                              (this.state = {
                                caughtError: null,
                                caughtErrorInfo: null,
                              }),
                              (r.displayName =
                                'SingleSpaReactErrorBoundary('.concat(
                                  t.name,
                                  ')'
                                ));
                          }
                          return (
                            (r.prototype = Object.create(
                              e.React.Component.prototype
                            )),
                            (r.prototype.render = function () {
                              return this.state.caughtError
                                ? (e.errorBoundary || t.errorBoundary)(
                                    this.state.caughtError,
                                    this.state.caughtErrorInfo,
                                    this.props
                                  )
                                : this.props.children;
                            }),
                            (r.prototype.componentDidCatch = function (e, t) {
                              this.setState({
                                caughtError: e,
                                caughtErrorInfo: t,
                              });
                            }),
                            r
                          );
                        })(e, t)),
                      (a = e.React.createElement(e.errorBoundaryClass, t, a))),
                    e.React.createElement(
                      e.SingleSpaRoot,
                      n(
                        n({}, t),
                        {},
                        {
                          mountFinished: r,
                          updateFinished: function () {
                            e.updateResolves[t.name] &&
                              (e.updateResolves[t.name].forEach(function (e) {
                                return e();
                              }),
                              delete e.updateResolves[t.name]);
                          },
                          unmountFinished: function () {
                            setTimeout(e.unmountFinished);
                          },
                        }
                      ),
                      a
                    )
                  );
                }
                var h = i(624),
                  b = i.n(h),
                  v = i(990),
                  g = i.n(v),
                  C = i(892),
                  O = i.n(C),
                  w = i(359),
                  E = i.n(w),
                  j = i(716),
                  x = i.n(j),
                  R = i(230),
                  S = i.n(R),
                  T = i(996),
                  _ = {};
                function P(e, t) {
                  (null == t || t > e.length) && (t = e.length);
                  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                  return n;
                }
                function B(e, t) {
                  return (
                    (function (e) {
                      if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                      var r =
                        null == e
                          ? null
                          : ('undefined' != typeof Symbol &&
                              e[Symbol.iterator]) ||
                            e['@@iterator'];
                      if (null != r) {
                        var n,
                          o,
                          a = [],
                          i = !0,
                          s = !1;
                        try {
                          for (
                            r = r.call(e);
                            !(i = (n = r.next()).done) &&
                            (a.push(n.value), !t || a.length !== t);
                            i = !0
                          );
                        } catch (e) {
                          (s = !0), (o = e);
                        } finally {
                          try {
                            i || null == r.return || r.return();
                          } finally {
                            if (s) throw o;
                          }
                        }
                        return a;
                      }
                    })(e, t) ||
                    (function (e, t) {
                      if (e) {
                        if ('string' == typeof e) return P(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return (
                          'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name),
                          'Map' === r || 'Set' === r
                            ? Array.from(e)
                            : 'Arguments' === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? P(e, t)
                            : void 0
                        );
                      }
                    })(e, t) ||
                    (function () {
                      throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                      );
                    })()
                  );
                }
                (_.styleTagTransform = S()),
                  (_.setAttributes = E()),
                  (_.insert = O().bind(null, 'head')),
                  (_.domAPI = g()),
                  (_.insertStyleElement = x()),
                  b()(T.Z, _),
                  T.Z && T.Z.locals && T.Z.locals;
                var k = i(882),
                  D = i(301),
                  I = {};
                (I.styleTagTransform = S()),
                  (I.setAttributes = E()),
                  (I.insert = O().bind(null, 'head')),
                  (I.domAPI = g()),
                  (I.insertStyleElement = x()),
                  b()(D.Z, I),
                  D.Z && D.Z.locals && D.Z.locals;
                var M = i(637);
                const N = function (t) {
                  var r = t.completed,
                    n = t.id,
                    o = t.text,
                    a = B((0, e.useState)(r), 2),
                    i = a[0],
                    s = a[1];
                  return (0, M.jsxs)('li', {
                    className: 'TodoItem',
                    children: [
                      (0, M.jsx)('input', {
                        type: 'checkbox',
                        defaultChecked: i,
                        onChange: function () {
                          s(!i), k.storeTodo.changeCompleted(n);
                        },
                      }),
                      (0, M.jsx)('p', { children: o }),
                      (0, M.jsx)('button', {
                        onClick: function () {
                          k.storeTodo.deleteTodo(n);
                        },
                        children: 'Delete',
                      }),
                    ],
                  });
                };
                function H(e, t, r) {
                  return (
                    t in e
                      ? Object.defineProperty(e, t, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = r),
                    e
                  );
                }
                var L = i(381),
                  U = {};
                function Z(e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                      (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      r.push.apply(r, n);
                  }
                  return r;
                }
                (U.styleTagTransform = S()),
                  (U.setAttributes = E()),
                  (U.insert = O().bind(null, 'head')),
                  (U.domAPI = g()),
                  (U.insertStyleElement = x()),
                  b()(L.Z, U),
                  L.Z && L.Z.locals && L.Z.locals;
                const F = function () {
                    var t = B((0, e.useState)([]), 2),
                      r = t[0],
                      n = t[1];
                    return (
                      (0, e.useEffect)(function () {
                        var e = k.storeTodo.storeTodo$.subscribe(function (e) {
                          n(e);
                        });
                        return function () {
                          e.unsubscribe();
                        };
                      }, []),
                      (0, M.jsx)('ul', {
                        className: 'TodoList',
                        children: r.length
                          ? r.map(function (e) {
                              return (0, M.jsx)(
                                N,
                                (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                    var r =
                                      null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                      ? Z(Object(r), !0).forEach(function (t) {
                                          H(e, t, r[t]);
                                        })
                                      : Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(
                                          e,
                                          Object.getOwnPropertyDescriptors(r)
                                        )
                                      : Z(Object(r)).forEach(function (t) {
                                          Object.defineProperty(
                                            e,
                                            t,
                                            Object.getOwnPropertyDescriptor(
                                              r,
                                              t
                                            )
                                          );
                                        });
                                  }
                                  return e;
                                })({}, e),
                                e.id
                              );
                            })
                          : (0, M.jsx)('div', { children: 'No data' }),
                      })
                    );
                  },
                  G = function () {
                    return (0, M.jsx)('div', {
                      className: 'Home',
                      children: (0, M.jsx)('div', {
                        className: 'Home__container',
                        children: (0, M.jsxs)('div', {
                          className: 'Home__card',
                          children: [
                            (0, M.jsx)('h2', {
                              className: 'Home__title',
                              children: 'Todo list',
                            }),
                            (0, M.jsx)(F, {}),
                          ],
                        }),
                      }),
                    });
                  };
                var q = (function (e) {
                    if ('object' !== o(e))
                      throw new Error(
                        'single-spa-react requires a configuration object'
                      );
                    var t = n(n({}, p), e);
                    if (!t.React)
                      throw new Error(
                        'single-spa-react must be passed opts.React'
                      );
                    if (!t.ReactDOM)
                      throw new Error(
                        'single-spa-react must be passed opts.ReactDOM'
                      );
                    if (!t.rootComponent && !t.loadRootComponent)
                      throw new Error(
                        'single-spa-react must be passed opts.rootComponent or opts.loadRootComponent'
                      );
                    if (t.errorBoundary && 'function' != typeof t.errorBoundary)
                      throw Error(
                        'The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements'
                      );
                    !l &&
                      t.React.createContext &&
                      (l = t.React.createContext()),
                      (t.SingleSpaRoot = (function (e) {
                        function t(e) {
                          t.displayName = 'SingleSpaRoot('.concat(e.name, ')');
                        }
                        return (
                          (t.prototype = Object.create(
                            e.React.Component.prototype
                          )),
                          (t.prototype.componentDidMount = function () {
                            setTimeout(this.props.mountFinished);
                          }),
                          (t.prototype.componentWillUnmount = function () {
                            setTimeout(this.props.unmountFinished);
                          }),
                          (t.prototype.render = function () {
                            return (
                              setTimeout(this.props.updateFinished),
                              this.props.children
                            );
                          }),
                          t
                        );
                      })(t));
                    var r = {
                      bootstrap: d.bind(null, t),
                      mount: m.bind(null, t),
                      unmount: f.bind(null, t),
                    };
                    return t.parcelCanUpdate && (r.update = y.bind(null, t)), r;
                  })({
                    React: e.default,
                    ReactDOM: t.default,
                    rootComponent: function (e) {
                      return (0, M.jsx)(G, {});
                    },
                    errorBoundary: function (e, t, r) {
                      return null;
                    },
                  }),
                  W = q.bootstrap,
                  Y = q.mount,
                  Q = q.unmount;
              })(),
              s
            );
          })()
        );
      },
    }
  );
});
//# sourceMappingURL=throwjs-react-list.js.map
