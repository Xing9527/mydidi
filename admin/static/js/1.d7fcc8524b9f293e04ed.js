webpackJsonp([1],{"/E16":function(t,e){},e0CV:function(t,e){},sYNF:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{formData:{title:"",content:"",adress:"",img:""},token:""}},methods:{upload:function(t){this.formData.img="http://image.yaojunrong.com/"+t.key},getToken:function(){var t=this;this.$axios.qiniuGet().then(function(e){t.token=e.data})},upData:function(){var t=this;this.$axios.post("addCases",this.formData).then(function(e){200==e.code&&(t.$message({message:"恭喜你，提交成功！",type:"success"}),setTimeout(function(){t.$router.push("/case")},1e3))})},getIdData:function(){var t=this;this.$axios.get("getCases",{_id:this.$route.query.id}).then(function(e){t.formData=e.data[0]})},edit:function(){var t=this;this.$axios.post("updateCases",this.formData).then(function(e){200==e.code&&(t.$message({message:"恭喜你，修改成功！",type:"success"}),setTimeout(function(){t.$router.push("/case")},1e3))})}},created:function(){this.getToken(),"工程修改页"==this.$route.name&&this.getIdData()},watch:{$route:function(t,e,a){"工程添加页"==t.name&&(this.formData={title:"",content:"",adress:"",img:""})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"case-add"},[a("el-form",{attrs:{model:t.formData,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"项目名称"}},[a("el-input",{model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"施工内容"}},[a("el-input",{model:{value:t.formData.content,callback:function(e){t.$set(t.formData,"content",e)},expression:"formData.content"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"工程地点"}},[a("el-input",{model:{value:t.formData.adress,callback:function(e){t.$set(t.formData,"adress",e)},expression:"formData.adress"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"上传图片"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://upload-z1.qiniup.com","show-file-list":!1,"on-success":t.upload,data:{token:t.token}}},[t.formData.img?a("img",{staticClass:"avatar",attrs:{src:t.formData.img}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),a("el-form-item",["工程添加页"==t.$route.name?a("el-button",{on:{click:t.upData}},[t._v("提交")]):t._e(),t._v(" "),"工程修改页"==t.$route.name?a("el-button",{on:{click:t.edit}},[t._v("保存修改")]):t._e()],1)],1)],1)},staticRenderFns:[]};var n=a("VU/8")(s,o,!1,function(t){a("/E16"),a("e0CV")},"data-v-7c9b4917",null);e.default=n.exports}});
//# sourceMappingURL=1.d7fcc8524b9f293e04ed.js.map