webpackJsonp([7],{INNw:function(t,s){},Pp4G:function(t,s){},a8Ox:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("VCXJ"),c=a("wSez");i.default.component(c.Swipe.name,c.Swipe),i.default.component(c.SwipeItem.name,c.SwipeItem);var e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home"},[a("mt-header",{attrs:{fixed:"",title:"首页"}}),t._v(" "),a("div",{staticClass:"wrap-img"},[a("mt-swipe",{attrs:{auto:4e3}},t._l(t.imgs,function(t){return a("mt-swipe-item",{key:t._id},[a("img",{attrs:{src:t.img,alt:""}})])}))],1),t._v(" "),a("div",{staticClass:"contianer"},[a("div",{staticClass:"item"},[a("router-link",{staticClass:"item-child",attrs:{to:"/project"}},[a("span",{staticClass:"icon",staticStyle:{background:"#fe575a"}},[a("i",{staticClass:"iconfont icon-project24"})]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"text"},[t._v("创业项目")])]),t._v(" "),a("router-link",{staticClass:"item-child",attrs:{to:"/file"}},[a("span",{staticClass:"icon",staticStyle:{background:"#fd8f37"}},[a("i",{staticClass:"iconfont icon-flower"})]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"text"},[t._v("平台风采")])]),t._v(" "),a("router-link",{staticClass:"item-child",attrs:{to:"/apply"}},[a("span",{staticClass:"icon",staticStyle:{background:"#6cc142"}},[a("i",{staticClass:"iconfont icon-cc-shield"})]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"text"},[t._v("报名流程")])])],1),t._v(" "),a("div",{staticClass:"item"},[a("router-link",{staticClass:"item-child",attrs:{to:"/client"}},[a("span",{staticClass:"icon",staticStyle:{background:"#41bee7"}},[a("i",{staticClass:"iconfont icon-kehu"})]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"text"},[t._v("客户管理")])]),t._v(" "),a("router-link",{staticClass:"item-child",attrs:{to:"/balance"}},[a("span",{staticClass:"icon",staticStyle:{background:"#f5c132"}},[a("i",{staticClass:"iconfont icon-money"})]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"text"},[t._v("财务管理")])]),t._v(" "),a("router-link",{staticClass:"item-child",attrs:{to:"/news"}},[a("span",{staticClass:"icon",staticStyle:{background:"#7b7bd6"}},[a("i",{staticClass:"iconfont icon-news"})]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"text"},[t._v("新闻公告")])])],1),t._v(" "),a("div",{staticClass:"item"},[a("router-link",{staticClass:"item-child",attrs:{to:"/case"}},[a("span",{staticClass:"icon",staticStyle:{background:"#bc7ad6"}},[a("i",{staticClass:"iconfont icon-houseplant"})]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"text"},[t._v("工程案例")])]),t._v(" "),a("router-link",{staticClass:"item-child",attrs:{to:"/changePwd"}},[a("span",{staticClass:"icon",staticStyle:{background:"#0e84e5"}},[a("i",{staticClass:"iconfont icon-lock1"})]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"text"},[t._v("修改密码")])]),t._v(" "),a("router-link",{staticClass:"item-child",attrs:{to:"/addClient"}},[a("span",{staticClass:"icon",staticStyle:{background:"#00b3b2"}},[a("i",{staticClass:"iconfont icon-personadd"})]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"text"},[t._v("注册客户")])])],1)])],1)},staticRenderFns:[]};var n=a("Z0/y")({name:"homepage",data:function(){return{imgs:[]}},methods:{getSwiper:function(){var t=this;this.$axios.get("getSwiper").then(function(s){1==s.ret&&(t.imgs=s.data)})}},created:function(){this.getSwiper()}},e,!1,function(t){a("INNw"),a("Pp4G")},"data-v-4c98f562",null);s.default=n.exports}});
//# sourceMappingURL=7.b08f27332166e2a7cd65.js.map