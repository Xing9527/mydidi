webpackJsonp([13],{"96XX":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"case",data:function(){return{items:[]}},methods:{getCase:function(){var t=this;this.$axios.get("getCases").then(function(e){console.log(e),t.items=e.data})}},mounted:function(){this.getCase()}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"case"},[s("mt-header",{attrs:{title:"工程案例"}},[s("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[s("mt-button",{attrs:{icon:"back"}})],1)],1),t._v(" "),s("ul",t._l(t.items,function(e){return s("li",{key:e.id},[s("img",{attrs:{src:e.img,alt:""}}),t._v(" "),s("p",[t._v("项目名称 : "+t._s(e.title))]),t._v(" "),s("p",[t._v("施工内容 : "+t._s(e.content))]),t._v(" "),s("p",[t._v("工程地点 : "+t._s(e.site))])])}))],1)},staticRenderFns:[]};var i=s("Z0/y")(n,a,!1,function(t){s("Of1F")},"data-v-33b56d80",null);e.default=i.exports},Of1F:function(t,e){}});
//# sourceMappingURL=13.b0e37e084c099359ed2c.js.map