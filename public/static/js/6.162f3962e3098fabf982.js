webpackJsonp([6],{"5KjH":function(t,e){},CCMG:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[n("el-table",{attrs:{data:t.tableData,border:""}},[n("el-table-column",{attrs:{label:"头图",width:"200"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("img",{staticClass:"pic",attrs:{src:t.row.img}})]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"title",label:"新闻标题"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.title)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"author",label:"作者"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.author)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){t.edit(e.row._id)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){t.del(e.row._id)}}},[t._v("删除")])]}}])})],1)],1)},staticRenderFns:[]};var s=n("VU/8")({name:"news_list",data:function(){return{tableData:[]}},methods:{getData:function(){var t=this;this.$axios.get("getNews").then(function(e){t.tableData=e.data})},del:function(t){var e=this;this.$confirm("是否永久删除这条新闻！！！","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$axios.post("delNews",{_id:t}).then(function(t){200==t.code?(e.$message({type:"success",message:"删除成功!"}),e.$router.go(0)):e.$message({type:"danger",message:"删除失败!"})})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},edit:function(t){this.$router.push({path:"/news/update",query:{id:t}})}},created:function(){this.getData()}},a,!1,function(t){n("5KjH")},"data-v-695d88ce",null);e.default=s.exports}});
//# sourceMappingURL=6.162f3962e3098fabf982.js.map