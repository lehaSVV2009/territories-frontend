(this.webpackJsonpterritories=this.webpackJsonpterritories||[]).push([[2],{116:function(n,e,t){"use strict";var r=t(129),a=t.n(r);e.a=a.a},139:function(n,e,t){n.exports=t(307)},146:function(n,e){},155:function(n,e){},307:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(18),c=t.n(o),i=t(32),l=t(35),u=t(34),d=t(33),p=t(117),s=t(12),f=t(119),m=t.n(f),h=t(19),g=t.n(h),b=t(120),v=t.n(b).a,x=t(85),w=function(n){return a.a.createElement(x.a,n,a.a.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}))},E=t(61),k=t(123),j=t.n(k).a,y=t(124),O=t.n(y).a,F=t(63),C=t(94),L=t.n(C),_={en:"en",ru:"ru"},D=t(16),T=t(64),A=t(104),B=t.n(A).a;function I(){var n=Object(D.a)(["\n  /* Top margin from fixed app bar */\n  margin-top: 80px;\n"]);return I=function(){return n},n}function M(){var n=Object(D.a)(["\n  && {\n    margin-left: 8px;\n    margin-right: 8px;\n  }\n"]);return M=function(){return n},n}function P(){var n=Object(D.a)(["\n  && {\n    color: ",";\n  }\n"]);return P=function(){return n},n}function G(){var n=Object(D.a)(["\n  flex-grow: 1;\n  text-transform: uppercase;\n  :hover {\n    cursor: pointer;\n  }\n"]);return G=function(){return n},n}var z=s.c.span(G()),J=Object(s.c)(B)(P(),(function(n){return n.theme.colors.white})),R=Object(s.c)(T.a)(M()),S=s.c.div(I()),V=function(n){Object(u.a)(t,n);var e=Object(d.a)(t);function t(){var n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))).handleLogoClick=function(){window.open("".concat("/territories","/"),"_self")},n.handleGithubClick=function(){window.open("https://github.com/lehaSVV2009/territories")},n.handleRulesClick=function(){window.open("https://pikabu.ru/story/prikolnaya_miniigra_stoit_poprobovat_6269129")},n.handleLanguageChange=function(n){var e=n.target.value;m.a.set("lang",e),window.location.reload()},n}return Object(l.a)(t,[{key:"render",value:function(){var n=g.a.getInitOptions().currentLocale;return a.a.createElement("div",null,a.a.createElement(v,{color:"secondary",position:"fixed"},a.a.createElement(O,null,a.a.createElement(z,{onClick:this.handleLogoClick},g.a.get("app_bar.title")),a.a.createElement(J,{value:n,onChange:this.handleLanguageChange},Object.keys(_).map((function(n){return a.a.createElement(j,{key:n,value:n},n)}))),a.a.createElement(R,{color:"inherit",onClick:this.handleRulesClick},g.a.get("app_bar.rules")),a.a.createElement(F.a,{title:"Github"},a.a.createElement(E.a,{onClick:this.handleGithubClick},a.a.createElement(w,null))))),a.a.createElement(S,null,this.props.children))}}]),t}(r.Component),W=t(42),$=t(311),K=t(313),q=t(312),H=t(57),N=t(31),Q=t.n(N),U=function(n){return n.error?a.a.createElement(H.a,null):a.a.createElement(W.a,{color:"secondary"})},X=Q()({loader:function(){return t.e(6).then(t.bind(null,447))},loading:U}),Y=Q()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(7)]).then(t.bind(null,446))},loading:U}),Z=Q()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(9)]).then(t.bind(null,444))},loading:U}),nn=Q()({loader:function(){return Promise.all([t.e(0),t.e(5),t.e(1),t.e(8)]).then(t.bind(null,445))},loading:U}),en=function(){return a.a.createElement($.a,null,a.a.createElement(K.a,null,a.a.createElement(q.a,{exact:!0,path:"/",component:X}),a.a.createElement(q.a,{path:"/ai",component:Y}),a.a.createElement(q.a,{path:"/two-players",component:Z}),a.a.createElement(q.a,{path:"/online",component:nn}),a.a.createElement(q.a,{path:"*",component:H.a})))},tn={colors:{white:"#FFFFFF",yellow:"#FFFF00",gray:"#DDDDDD",green:"#00FF00",red:"#FF0000",player1:"#375E97",player2:"#FB6542"}},rn=Object(p.createMuiTheme)({palette:{primary:{main:tn.colors.player1,contrastText:tn.colors.white},secondary:{main:tn.colors.player2,contrastText:tn.colors.white}}}),an=function(n){Object(u.a)(t,n);var e=Object(d.a)(t);function t(){var n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))).state={loadingLocales:!0},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var n=this;(function(){var n=g.a.determineLocale({cookieLocaleKey:"lang"});return _[n]||(n="en"),L.a.get("".concat("/territories","/locales/").concat(n,".json")).then((function(e){return g.a.init({currentLocale:n,locales:{[n]:e.data}})}))})().then((function(){return n.setState({loadingLocales:!1})}))}},{key:"render",value:function(){return a.a.createElement(p.MuiThemeProvider,{theme:rn},a.a.createElement(s.a,{theme:tn},a.a.createElement(r.Fragment,null,this.state.loadingLocales?a.a.createElement(W.a,{color:"secondary"}):a.a.createElement(V,null,a.a.createElement(en,null)))))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(an,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},42:function(n,e,t){"use strict";var r=t(128),a=t.n(r);e.a=a.a},57:function(n,e,t){"use strict";var r=t(0),a=t.n(r),o=t(19),c=t.n(o),i=t(116),l=t(60),u=t(16),d=t(12);function p(){var n=Object(u.a)(["\n  text-align: center;\n  color: red;\n  padding: 10px;\n"]);return p=function(){return n},n}function s(){var n=Object(u.a)(["\n  font-weight: 800;\n  color: black;\n  text-align: center;\n  font-size: 2.5em;\n  padding-top: 20px;\n\n  @media screen and (max-width: 600px) {\n    padding-left: 20px;\n    padding-right: 20px;\n    font-size: 2em;\n  }\n"]);return s=function(){return n},n}function f(){var n=Object(u.a)(["\n  width: 40px;\n  height: 5px;\n  border-radius: 5px;\n  background-color: black;\n  margin: 0 auto;\n  margin-top: 25px;\n"]);return f=function(){return n},n}function m(){var n=Object(u.a)(['\n  width: 180px;\n  margin: 0 auto;\n  margin-top: 15px;\n\n  &:before {\n    content: "";\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin-right: 80px;\n    border-radius: 50%;\n    background-color: rgba(red, 0.4);\n  }\n\n  &:after {\n    content: "";\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin-left: 80px;\n    border-radius: 50%;\n    background-color: rgba(red, 0.4);\n  }\n']);return m=function(){return n},n}function h(){var n=Object(u.a)(['\n  width: 128px;\n  margin: 0 auto;\n  padding-left: 10px;\n  margin-top: 40px;\n  &:before {\n    content: "";\n    display: inline-block;\n    width: 30px;\n    height: 15px;\n    border: 7px solid black;\n    margin-right: 20px;\n    border-top-left-radius: 22px;\n    border-top-right-radius: 22px;\n    border-bottom: 0;\n  }\n\n  &:after {\n    content: "";\n    display: inline-block;\n    width: 30px;\n    height: 15px;\n    border: 7px solid black;\n    margin-left: 20px;\n    border-top-left-radius: 22px;\n    border-top-right-radius: 22px;\n    border-bottom: 0;\n  }\n']);return h=function(){return n},n}function g(){var n=Object(u.a)(["\n  height: calc(100% / 2);\n  width: 100%;\n  background-color: red;\n"]);return g=function(){return n},n}function b(){var n=Object(u.a)(["\n  height: calc(100% / 2);\n  width: 100%;\n  background-color: white;\n"]);return b=function(){return n},n}function v(){var n=Object(u.a)(["\n  width: 350px;\n  height: 27px;\n  border: 4px solid black;\n  border-radius: 5px;\n  margin-left: -29px;\n  margin-top: 50px;\n"]);return v=function(){return n},n}function x(){var n=Object(u.a)(["\n  width: 300px;\n  height: 300px;\n  border: 4px solid black;\n  border-radius: 10px;\n  background-color: white;\n  margin: 0 auto;\n  margin-top: 100px;\n\n  @media screen and (max-width: $sm) {\n    margin-top: 40px;\n    transform: scale(0.8);\n  }\n"]);return x=function(){return n},n}var w=d.c.div(x()),E=d.c.div(v()),k=d.c.div(b()),j=d.c.div(g()),y=d.c.div(h()),O=d.c.div(m()),F=d.c.div(f()),C=d.c.h1(s()),L=d.c.div(p()),_=function(){return window.open("".concat("/territories","/"),"_self")};e.a=function(n){var e=n.children;return a.a.createElement("div",null,a.a.createElement(w,null,a.a.createElement(E,null,a.a.createElement(k,null),a.a.createElement(j,null)),a.a.createElement(y,null),a.a.createElement(O,null),a.a.createElement(F,null)),a.a.createElement(C,null,c.a.get("error.oops")),a.a.createElement(L,null,e),a.a.createElement(l.a,{center:!0},a.a.createElement(i.a,{variant:"extended",color:"primary",onClick:_},c.a.get("error.go_home"))))}},60:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return d}));var r=t(16),a=t(12);function o(){var n=Object(r.a)(["\n      margin: 0 auto;\n    "]);return o=function(){return n},n}function c(){var n=Object(r.a)(["\n  flex: ",";\n  ",";\n"]);return c=function(){return n},n}function i(){var n=Object(r.a)(["\n      align-items: ",";\n    "]);return i=function(){return n},n}function l(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: ",";\n  flex-direction: ",";\n  ",";\n"]);return l=function(){return n},n}var u=a.c.div(l(),(function(n){return n.left?"flex-start":n.right?"flex-end":n.center?"center":n.spaceBetween?"space-between":n.spaceAround?"space-around":"none"}),(function(n){return n.column?"column":"row"}),(function(n){return n.alignItems&&Object(a.b)(i(),n.alignItems)})),d=a.c.div(c(),(function(n){return n.flex||"none"}),(function(n){return n.center&&Object(a.b)(o())}))},61:function(n,e,t){"use strict";var r=t(122),a=t.n(r);e.a=a.a},63:function(n,e,t){"use strict";var r=t(125),a=t.n(r);e.a=a.a},64:function(n,e,t){"use strict";var r=t(103),a=t.n(r);e.a=a.a},85:function(n,e,t){"use strict";var r=t(47),a=t.n(r);e.a=a.a}},[[139,3,4]]]);
//# sourceMappingURL=main.7649781e.chunk.js.map