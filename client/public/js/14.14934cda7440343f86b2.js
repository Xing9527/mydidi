webpackJsonp([14],{"4KlY":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={name:"mydidi",components:{myButton:s("C5Da").a},methods:{isLogin:function(){var t=this;this.$axios.get("isLogin").then(function(i){i.ret||t.$router.push("/login")})},logout:function(){var t=this;this.$axios.get("Logout",{code:"200",data:"success",msg:"success"}).then(function(i){i.ret&&t.$router.push("/login")})}},mounted:function(){this.isLogin()}},o={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"information"},[s("mt-header",{attrs:{title:"登录"}},[s("router-link",{attrs:{slot:"left",to:"/mydidi"},slot:"left"},[s("mt-button",{attrs:{icon:"back"}})],1)],1),t._v(" "),s("div",{staticClass:"top"},[t._m(0),t._v(" "),s("h2",[t._v("我是蜘蛛")]),t._v(" "),s("button",{staticClass:"btn",on:{click:t.logout}},[t._v("退出登录")])]),t._v(" "),s("router-link",{attrs:{to:"/client"}},[s("div",{staticClass:"item"},[s("i",{staticClass:"iconfont icon-client icon"}),t._v(" "),s("span",[t._v("我的客户")]),t._v(" "),s("i",{staticClass:"iconfont icon-right1 "})])]),t._v(" "),s("router-link",{attrs:{to:"/balance"}},[s("div",{staticClass:"item"},[s("i",{staticClass:"iconfont icon-money1f icon"}),t._v(" "),s("span",[t._v("我的余额")]),t._v(" "),s("i",{staticClass:"iconfont icon-right1"})])]),t._v(" "),s("router-link",{attrs:{to:"/addClient"}},[s("div",{staticClass:"item"},[s("i",{staticClass:"iconfont icon-icon_register icon"}),t._v(" "),s("span",[t._v("注册客户")]),t._v(" "),s("i",{staticClass:"iconfont icon-right1"})])]),t._v(" "),s("router-link",{attrs:{to:"/changePwd"}},[s("div",{staticClass:"item"},[s("i",{staticClass:"iconfont icon-key icon"}),t._v(" "),s("span",[t._v("修改密码")]),t._v(" "),s("i",{staticClass:"iconfont icon-right1"})])])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"header-img"},[i("i",{staticClass:"iconfont icon-user2"})])}]};var a=s("Z0/y")(n,o,!1,function(t){s("Nmfr")},"data-v-30f895dc",null);i.default=a.exports},Nmfr:function(t,i){}});
//# sourceMappingURL=14.14934cda7440343f86b2.js.map