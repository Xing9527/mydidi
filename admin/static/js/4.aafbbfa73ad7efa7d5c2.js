webpackJsonp([4],{"1H+p":function(e,t){},Dglr:function(e,t){},vYwx:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{formData:{username:"",pwd:""}}},methods:{login:function(){var e=this;this.$axios.post("adminLogin",this.formData).then(function(t){200==t.code?(e.$message({message:"登陆成功！",type:"success"}),setTimeout(function(){e.$router.push("/")},1e3)):e.$message({message:"登录失败！",type:"warning"})})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login clear"},[a("h1",[e._v("管理员登录")]),e._v(" "),a("div",{staticClass:"form"},[a("el-form",{attrs:{model:e.formData,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"用户名："}},[a("el-input",{attrs:{size:"mini"},model:{value:e.formData.username,callback:function(t){e.$set(e.formData,"username",t)},expression:"formData.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码："}},[a("el-input",{attrs:{size:"mini",type:"password"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.login(t):null}},model:{value:e.formData.pwd,callback:function(t){e.$set(e.formData,"pwd",t)},expression:"formData.pwd"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"0"}},[a("el-button",{staticClass:"btn1",attrs:{size:"mini"},on:{click:e.login}},[e._v("登录")])],1)],1)],1)])},staticRenderFns:[]};var i=a("VU/8")(n,s,!1,function(e){a("Dglr"),a("1H+p")},"data-v-84b48a5a",null);t.default=i.exports}});
//# sourceMappingURL=4.aafbbfa73ad7efa7d5c2.js.map