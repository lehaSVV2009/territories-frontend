(this.webpackJsonpterritories=this.webpackJsonpterritories||[]).push([[6],{315:function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=r(n(133)),c=r(n(47));var l=function(e,t){var n=function(t){return a.default.createElement(c.default,t,e)};return n.displayName="".concat(t,"Icon"),(n=(0,o.default)(n)).muiName="SvgIcon",n};t.default=l},355:function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=(0,r(n(315)).default)(a.default.createElement(a.default.Fragment,null,a.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),a.default.createElement("path",{d:"M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"})),"Android");t.default=o},356:function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=(0,r(n(315)).default)(a.default.createElement(a.default.Fragment,null,a.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),a.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"})),"Public");t.default=o},357:function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=(0,r(n(315)).default)(a.default.createElement(a.default.Fragment,null,a.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),a.default.createElement("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"})),"People");t.default=o},447:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(19),c=n.n(o),l=n(2),u=n.n(l),i=n(24),f=n.n(i),s=n(118),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var h=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var n,r;d(this,t);for(var a=arguments.length,o=Array(a),c=0;c<a;c++)o[c]=arguments[c];return n=r=v(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!h(e)){e.preventDefault();var t=r.context.router.history,n=r.props,a=n.replace,o=n.to;a?t.replace(o):t.push(o)}},v(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);f()(this.context.router,"You should not use <Link> outside a <Router>"),f()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,c="string"===typeof t?Object(s.b)(t,null,null,o.location):t,l=o.createHref(c);return a.a.createElement("a",p({},r,{onClick:this.handleClick,href:l,ref:n}))},t}(a.a.Component);m.propTypes={onClick:u.a.func,target:u.a.string,replace:u.a.bool,to:u.a.oneOfType([u.a.string,u.a.object]).isRequired,innerRef:u.a.oneOfType([u.a.string,u.a.func])},m.defaultProps={replace:!1},m.contextTypes={router:u.a.shape({history:u.a.shape({push:u.a.func.isRequired,replace:u.a.func.isRequired,createHref:u.a.func.isRequired}).isRequired}).isRequired};var y=m,b=n(60),E=n(16),g=n(12),O=n(116);function j(){var e=Object(E.a)(["\n  margin: 0 4px;\n"]);return j=function(){return e},e}function z(){var e=Object(E.a)(["\n  && {\n    margin: 24px;\n  }\n"]);return z=function(){return e},e}var _=Object(g.c)(O.a)(z()),C=g.c.span(j()),w=n(355),M=n.n(w).a,P=n(356),x=n.n(P).a,R=n(357),k=n.n(R).a;t.default=function(){return a.a.createElement(b.a,{column:!0,center:!0,alignItems:"center"},a.a.createElement(b.b,null,a.a.createElement(_,{variant:"extended",color:"primary",component:y,to:"/online"},a.a.createElement(x,null),a.a.createElement(C,null,c.a.get("home.online")))),a.a.createElement(b.b,null,a.a.createElement(_,{variant:"extended",color:"secondary",component:y,to:"/ai"},a.a.createElement(M,null),a.a.createElement(C,null,c.a.get("home.game_vs_ai")))),a.a.createElement(b.b,null,a.a.createElement(_,{variant:"extended",component:y,to:"/two-players"},a.a.createElement(k,null),a.a.createElement(C,null,c.a.get("home.two_players")))))}}}]);
//# sourceMappingURL=6.7a7680e5.chunk.js.map