webpackJsonp([2],{"1uuo":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=new a.a({data:{menuBtn:document.querySelector(".menu-btn"),menu:document.querySelector(".menu"),menuNav:document.querySelector(".menu-nav"),menuBranding:document.querySelector(".menu-branding"),navItems:document.querySelectorAll(".nav-item"),showMenu:!0},methods:{toggleMenu:function(){var t=document.querySelector(".menu-btn"),e=document.querySelector(".menu"),s=document.querySelector(".menu-nav"),a=document.querySelector(".menu-branding"),n=document.querySelectorAll(".nav-item");console.log("TOggle menu was called "),console.log("this.showMenu ",this.showMenu),this.showMenu?(t&&e&&s&&a&&n&&(t.classList.remove("close"),e.classList.remove("show"),s.classList.remove("show"),a.classList.remove("show"),n.forEach(function(t){return t.classList.remove("show")})),this.showMenu=!1):(t&&e&&s&&a&&n&&(t.classList.add("close"),e.classList.add("show"),s.classList.add("show"),a.classList.add("show"),n.forEach(function(t){return t.classList.add("show")})),this.showMenu=!0)}}}),i={mounted:function(){document.querySelector(".menu-btn").addEventListener("click",n.toggleMenu)}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[t._m(0),t._v(" "),s("nav",{staticClass:"menu"},[t._m(1),t._v(" "),s("ul",{staticClass:"menu-nav"},[s("li",{staticClass:"nav-item current"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home\n        ")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("ABOUT ME\n        ")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/my-works"}},[t._v("MY WORK\n        ")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v("HoW TO REACH ME\n        ")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu-btn"},[e("div",{staticClass:"btn-line"}),this._v(" "),e("div",{staticClass:"btn-line"}),this._v(" "),e("div",{staticClass:"btn-line"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu-branding"},[e("div",{staticClass:"portrait"})])}]},o={data:function(){return{year:(new Date).getFullYear()}},methods:{atHomePag:function(){return"Home"===this.$route.name?"position: fixed; width:100%;":""}}},l={render:function(){var t=this.$createElement;return(this._self._c||t)("footer",{style:this.atHomePag(),attrs:{id:"main-footer"}},[this._v("\n  Copyright © "+this._s(this.year)+"\n")])},staticRenderFns:[]},c={name:"App",components:{navTab:s("VU/8")(i,r,!1,null,null,null).exports,customFooter:s("VU/8")(o,l,!1,null,null,null).exports}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"main-body"}},[e("nav-tab"),this._v(" "),e("router-view")],1),this._v(" "),e("custom-footer")],1)},staticRenderFns:[]};var v=s("VU/8")(c,u,!1,function(t){s("l8nI")},null,null).exports,m=s("/ocq"),h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},h,!1,function(t){s("1uuo")},"data-v-d8ec41bc",null).exports;var _={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"bg-img",attrs:{id:"home"}},[s("div",{staticClass:"home-content"},[s("h1",{staticClass:"lg-heading"},[t._v("\n    JOhn\n    "),s("span",{staticClass:"text-secondary"},[t._v("Doe")])]),t._v(" "),s("h2",{staticClass:"sm-heading"},[t._v("Web Developer , PRogrammer , Designer & Enterpirner")]),t._v(" "),s("div",{staticClass:"icons"},[s("a",{attrs:{href:"#!"}},[s("i",{staticClass:"fab fa-twitter fa-2x"})]),t._v(" "),s("a",{attrs:{href:"#!"}},[s("i",{staticClass:"fab fa-facebook fa-2x"})]),t._v(" "),s("a",{attrs:{href:"#!"}},[s("i",{staticClass:"fab fa-linkedin fa-2x"})]),t._v(" "),s("a",{attrs:{href:"#!"}},[s("i",{staticClass:"fab fa-github fa-2x"})])])])])}]},d=s("VU/8")(null,_,!1,null,null,null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{attrs:{id:"about"}},[s("h1",{staticClass:"lg-heading"},[t._v("\n    About\n    "),s("span",{staticClass:"text-secondary"},[t._v("Me")])]),t._v(" "),s("h2",{staticClass:"sm-heading"},[t._v("Let me tell you a few things.....")]),t._v(" "),s("div",{staticClass:"about-info"},[s("img",{staticClass:"bio-image",attrs:{src:"static/img/portrait.jpg",alt:"JOHn Doe"}}),t._v(" "),s("div",{staticClass:"bio"},[s("h3",{staticClass:"text-secondary"},[t._v("Bio")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aspernatur nesciunt, ipsum totam eum harum\n        laborum praesentium impedit. Eius placeat laudantium quod repellat culpa, rerum similique dolore doloribus\n        beatae commodi!")])]),t._v(" "),s("div",{staticClass:"job job-1"},[s("h3",[t._v("123 web job")]),t._v(" "),s("h6",[t._v("Full stack Developer")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tenetur odit nesciunt deserunt quidem\n        provident! Praesentium distinctio quos a quod?")])]),t._v(" "),s("div",{staticClass:"job job-2"},[s("h3",[t._v("@nd web job")]),t._v(" "),s("h6",[t._v("Content Developer")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tenetur odit nesciunt deserunt quidem\n        provident! Praesentium distinctio quos a quod?")])]),t._v(" "),s("div",{staticClass:"job job-3"},[s("h3",[t._v("3rd JOb")]),t._v(" "),s("h6",[t._v("Graphic designer")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tenetur odit nesciunt deserunt quidem\n        provident! Praesentium distinctio quos a quod?")])])])])}]},p=s("VU/8")(null,f,!1,null,null,null).exports,g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{attrs:{id:"contact"}},[s("h1",{staticClass:"lg-heading"},[t._v("\n    Contact\n    "),s("span",{staticClass:"text-secondary"},[t._v("Me")])]),t._v(" "),s("h2",{staticClass:"sm-heading"},[t._v("THis is how you can reach me...")]),t._v(" "),s("div",{staticClass:"boxes"},[s("div",[s("span",{staticClass:"text-secondary"},[t._v("Email:")]),t._v("\n      johndoe@gmail.com\n    ")]),t._v(" "),s("div",[s("span",{staticClass:"text-secondary"},[t._v("Phone:")]),t._v("\n      (555) 555-5555\n    ")]),t._v(" "),s("div",[s("span",{staticClass:"text-secondary"},[t._v("Address:")]),t._v("\n      50 Main St Boston MA 02145\n    ")])])])}]},b=s("VU/8")(null,g,!1,null,null,null).exports,C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{attrs:{id:"work"}},[s("h1",{staticClass:"lg-heading"},[t._v("\n    My\n    "),s("span",{staticClass:"text-secondary"},[t._v("Work")])]),t._v(" "),s("h2",{staticClass:"sm-heading"},[t._v("Check out some of my works...")]),t._v(" "),s("div",{staticClass:"projects"},[s("div",{staticClass:"items"},[s("a",{attrs:{href:"#!"}},[s("img",{attrs:{src:"static/img/projects/project1.jpg",alt:"Project 1"}})]),t._v(" "),s("a",{staticClass:"btn-light",attrs:{href:""}},[s("i",{staticClass:"fas fa-eye"}),t._v("Project\n      ")]),t._v(" "),s("a",{staticClass:"btn-dark",attrs:{href:""}},[s("i",{staticClass:"fab fa-github"}),t._v("GitHub\n      ")])]),t._v(" "),s("div",{staticClass:"items"},[s("a",{attrs:{href:"#!"}},[s("img",{attrs:{src:"static/img/projects/project2.jpeg",alt:"Project 1"}})]),t._v(" "),s("a",{staticClass:"btn-light",attrs:{href:""}},[s("i",{staticClass:"fas fa-eye"}),t._v("Project\n      ")]),t._v(" "),s("a",{staticClass:"btn-dark",attrs:{href:""}},[s("i",{staticClass:"fab fa-github"}),t._v("GitHub\n      ")])]),t._v(" "),s("div",{staticClass:"items"},[s("a",{attrs:{href:"#!"}},[s("img",{attrs:{src:"static/img/projects/project3.jpg",alt:"Project 1"}})]),t._v(" "),s("a",{staticClass:"btn-light",attrs:{href:""}},[s("i",{staticClass:"fas fa-eye"}),t._v("Project\n      ")]),t._v(" "),s("a",{staticClass:"btn-dark",attrs:{href:""}},[s("i",{staticClass:"fab fa-github"}),t._v("GitHub\n      ")])]),t._v(" "),s("div",{staticClass:"items"},[s("a",{attrs:{href:"#!"}},[s("img",{attrs:{src:"static/img/projects/project4.jpeg",alt:"Project 1"}})]),t._v(" "),s("a",{staticClass:"btn-light",attrs:{href:""}},[s("i",{staticClass:"fas fa-eye"}),t._v("Project\n      ")]),t._v(" "),s("a",{staticClass:"btn-dark",attrs:{href:""}},[s("i",{staticClass:"fab fa-github"}),t._v("GitHub\n      ")])]),t._v(" "),s("div",{staticClass:"items"},[s("a",{attrs:{href:"#!"}},[s("img",{attrs:{src:"static/img/projects/project5.jpg",alt:"Project 1"}})]),t._v(" "),s("a",{staticClass:"btn-light",attrs:{href:""}},[s("i",{staticClass:"fas fa-eye"}),t._v("Project\n      ")]),t._v(" "),s("a",{staticClass:"btn-dark",attrs:{href:""}},[s("i",{staticClass:"fab fa-github"}),t._v("GitHub\n      ")])])])])}]},j=s("VU/8")(null,C,!1,null,null,null).exports;a.a.use(m.a);var y=new m.a({mode:"history",routes:[{path:"*",name:"PageNotFound",meta:{title:"404",nosubmenu:!0,noauth:!0,noheader:!0,nofooter:!0},component:function(){return s.e(0).then(s.bind(null,"Z+ri"))}},{path:"/",name:"Home",component:d},{path:"/my-works",name:"MyWorks",component:j},{path:"/about",name:"AboutMe",component:p},{path:"/contact",name:"ContactMe",component:b}]});a.a.config.productionTip=!1,y.beforeEach(function(t,e,s){n.toggleMenu(),s()}),new a.a({el:"#app",router:y,components:{App:v},template:"<App/>"})},l8nI:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f90b42d225389534faa7.js.map