webpackJsonp([17],{EGZW:function(e,a){},tMXi:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("wSez"),s={components:{didiInput:t("L5IG").a},data:function(){return{balance:"15000.00元",cash:"",name:"",bank:"",id:"",adress:""}},methods:{upRequire:function(){Object(n.MessageBox)("提示","提交申请成功！工作人员会在10000个工作日内处理！"),this.$router.push("/cashZero")}}},i={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"cash"},[t("mt-header",{attrs:{title:"申请提现"}},[t("router-link",{attrs:{slot:"left",to:"/balance"},slot:"left"},[t("mt-button",{attrs:{icon:"back"}})],1)],1),e._v(" "),t("div",{staticClass:"up"},[t("didi-input",{attrs:{label:"资金余额："},model:{value:e.balance,callback:function(a){e.balance=a},expression:"balance"}}),e._v(" "),t("didi-input",{attrs:{label:"提现金额："},model:{value:e.cash,callback:function(a){e.cash=a},expression:"cash"}}),e._v(" "),t("didi-input",{attrs:{label:"户名："},model:{value:e.name,callback:function(a){e.name=a},expression:"name"}}),e._v(" "),t("didi-input",{attrs:{label:"开户行："},model:{value:e.bank,callback:function(a){e.bank=a},expression:"bank"}}),e._v(" "),t("didi-input",{attrs:{label:"银行账号："},model:{value:e.id,callback:function(a){e.id=a},expression:"id"}}),e._v(" "),t("didi-input",{attrs:{label:"开户行地址："},model:{value:e.adress,callback:function(a){e.adress=a},expression:"adress"}})],1),e._v(" "),t("button",{staticClass:"btn",on:{click:e.upRequire}},[e._v("提交申请")])],1)},staticRenderFns:[]};var l=t("Z0/y")(s,i,!1,function(e){t("EGZW")},"data-v-01fe04b3",null);a.default=l.exports}});
//# sourceMappingURL=17.c27a31a1e10913c0e514.js.map