(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{144:function(e,t,a){"use strict";a.r(t);var n=a(838),s=a(367);for(var i in s)"default"!==i&&function(e){a.d(t,e,function(){return s[e]})}(i);a(810);var o=a(3),r=Object(o.a)(s.default,n.a,n.b,!1,null,"285bf83a",null);r.options.__file="privacy.vue",t.default=r.exports},148:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n=a(150),s=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t.default=s.a},150:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(a(166));t.default={components:{notifications:n.default},computed:{game:function(){return this.$store.state.game.name}},watch:{$route:function(e,t){this.$store.commit("setActiveGame",e.fullPath.split("/")[1])}},beforeCreate:function(){this.$store.commit("setActiveGame",this.$route.fullPath.split("/")[1])},storeModule:{name:"game",state:{name:""},mutations:{setActiveGame:function(e,t){e.name=t}}}}},151:function(e,t,a){},162:function(e,t,a){"use strict";var n=a(148);a.n(n).a},165:function(e,t,a){"use strict";a.r(t);a(162);var n=a(3),s=Object(n.a)({},function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("img",{staticClass:"blobs",attrs:{src:"/img/ui/header-blobs-outline.svg"}}),this._v(" "),this._m(0),this._v(" "),t("div",{staticClass:"container"},[this._t("default")],2),this._v(" "),this._t("sub")],2)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"background-container"},[t("div",{staticClass:"background"})])}],!1,null,"2eba4017",null);s.options.__file="header.vue";t.default=s.exports},173:function(e,t,a){"use strict";a.r(t);var n=a(176),s=a(149);for(var i in s)"default"!==i&&function(e){a.d(t,e,function(){return s[e]})}(i);a(174);var o=a(3),r=Object(o.a)(s.default,n.a,n.b,!1,null,"18614b12",null);r.options.__file="general.vue",t.default=r.exports},174:function(e,t,a){"use strict";var n=a(151);a.n(n).a},176:function(e,t,a){"use strict";var n=function(){var e=this.$createElement,t=this._self._c||e;return t("nav",{staticClass:"row"},[t("div",{staticClass:"nav-l"},[t("router-link",{attrs:{to:"/warframe",exact:""}},[t("img",{staticClass:"logo ico-h-20",attrs:{src:"/img/brand/nexushub-logo-typeface.svg",alt:"Nexushub Logo"}})])],1),this._v(" "),t("div",{staticClass:"nav-r"},[t("notifications")],1)])},s=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return s})},367:function(e,t,a){"use strict";a.r(t);var n=a(368),s=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t.default=s.a},368:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(173)),s=u(a(169)),i=u(a(167)),o=u(a(168)),r=u(a(165));function u(e){return e&&e.__esModule?e:{default:e}}t.default={components:{navigation:n.default,appContent:s.default,sidebar:i.default,sidebarSearch:o.default,uiHeader:r.default}}},369:function(e,t,a){},810:function(e,t,a){"use strict";var n=a(369);a.n(n).a},838:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("navigation"),e._v(" "),a("sidebar",[a("sidebar-search")],1),e._v(" "),a("app-content",[a("ui-header",[a("h1",[e._v("Things we do with your data.   ( ͡° ͜ʖ ͡°)")])]),e._v(" "),a("section",{staticClass:"intro"},[a("div",{staticClass:"container"},[a("h2",[e._v("Before you start")]),e._v(" "),a("p",[e._v("\n          We just wanna let you know that we truly believe in your right to\n          know how "),a("b",[e._v("all")]),e._v(" data that we collect is being used. That's why\n          we sat down and tried to explain every single point of data as\n          humanly as possible - no lawyer talk!\n        ")])])]),e._v(" "),a("div",{staticClass:"container"},[a("section",[a("h2",[e._v("Meta Data")]),e._v(" "),a("p",[e._v("\n          This data tells us "),a("i",[e._v("when")]),e._v(" and "),a("i",[e._v("how")]),e._v(" you interact with our\n          service. We use this data exclusively to figure out how our userbase\n          develops and to measure if people successfully get to where they\n          wanted in a reasonable time. This helps us greatly when we try to\n          determine if a feature is well-designed or needs an overhaul.\n          "),a("br"),e._v(" "),a("br"),e._v("\n          To collect this type of data, we use\n          "),a("a",{attrs:{href:"https://support.google.com/analytics/answer/6004245?hl=en",target:"_blank"}},[e._v("\n            Google Analytics\n          ")]),e._v("\n          and our own analytics service which does not share data with\n          anyone else.\n        ")])]),e._v(" "),a("section",[a("h2",[e._v("Password Storage")]),e._v(" "),a("p",[e._v("\n          We store all passwords using the bcrypt hash algorithm with 15 salt rounds.\n          Tech talk aside - "),a("a",{attrs:{href:"https://security.stackexchange.com/a/6415"}},[e._v("it's pretty secure.")]),e._v("\n          This means that in case of a security breach, it'll be as hard as\n          possible for attackers to get your actual password. That doesn't\n          mean it's "),a("i",[e._v("impossible")]),e._v(" to crack the password however, so\n          make sure you have a unique password with reasonable complexity.\n        ")])]),e._v(" "),a("section",[a("h2",[e._v("User data")]),e._v(" "),a("p",[e._v("\n          Any usernames, emails or other data that needs to be\n          looked up on demand will have to remain stored in plaintext. So if\n          we ever do a whoopsie in our database setup and data starts leaking,\n          an attacker could combine this data to get some insights into who\n          you are.\n          "),a("br"),e._v(" "),a("br"),e._v("\n          To combat this, we heavily suggest using a unique password for your\n          email account that is not shared with any other service. We also\n          recommend having a look at "),a("a",{attrs:{href:"https://haveibeenpwned.com/"}},[e._v("\n          haveibeenpwned")]),e._v(" to see if your password has been leaked at\n          another service.\n          "),a("br"),e._v(" "),a("br"),e._v("\n          Luckily, we don't force you to register with an email address. While this\n          is not recommended as it makes the password recovery process very\n          difficult, it also means that nobody will track down more of your\n          data in case of a security breach.\n        ")])])]),e._v(" "),a("section",{staticClass:"breach"},[a("div",{staticClass:"container"},[a("h2",[e._v("Actions upon a security breach")]),e._v(" "),a("p",[e._v("\n          Should somebody sneak into our systems and leak sensitive user\n          information, we'll make sure to prepare an announcement within 7 days\n          after the issue has been resolved.\n          "),a("br"),e._v(" "),a("br"),e._v("\n          If this ever happens, there's no need to freak out. No passwords will be leaked,\n          and we'll provide detailed instructions on how to avoid further\n          issues depending on the situation.\n        ")])])])],1)],1)},s=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return s})}}]);