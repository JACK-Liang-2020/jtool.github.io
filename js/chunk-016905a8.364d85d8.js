(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-016905a8"],{"4bb3":function(t,e,o){},"58e2":function(t,e,o){"use strict";o("fc19")},b950:function(t,e,o){"use strict";o("4bb3")},e4dc:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"demo-box"},[o("div",{staticClass:"upload-btn in-btn",on:{click:t.uploadImg}},[t._v("upload")]),o("div",{staticClass:"content-box"},[o("div",{staticClass:"article-box"},[o("MARKDOM",{attrs:{md:t.README}})],1),o("div",{staticClass:"show-box"},[o("img",{attrs:{src:t.successImgUrl,alt:""}})])]),o("uploadAvatar",{ref:"uploadAvatar",staticClass:"uploadAvatar",attrs:{uploadConfig:t.uploadConfig,wheelConfig:t.wheelConfig,containerConfig:t.containerConfig,cropperConfig:t.cropperConfig},on:{cropSuccess:t.cropSuccess,cropFail:t.cropFail,cropUploadSuccess:t.cropUploadSuccess,cropUploadFail:t.cropUploadFail,zoomRatio:t.zoomRatio}},[o("div",{staticClass:"save-btn",attrs:{slot:"footBox"},on:{click:t.saveFun},slot:"footBox"},[t._v(" save ")])])],1)},n=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"upload-avatar-box"},[o("div",{staticClass:"upload-box"},[o("input",{staticStyle:{position:"absolute",clip:"rect(0 0 0 0)"},attrs:{id:"uploadsId",type:"file",accept:"image/png, image/jpeg, image/gif, image/jpg"},domProps:{value:t.fileValue},on:{change:function(e){return t.uploadImg(e,1)}}})]),t.showDialog?o("div",{staticClass:"upload-dialog"},[o("div",{staticClass:"dialog-mask",on:{click:t.closeDialog}}),o("div",{staticClass:"cropper-show-box"},[t._t("topBox"),o("div",{staticClass:"crop-container",style:t.cropperBoxStyle},[o("img",{staticClass:"crop-img",attrs:{src:t.imgUrl}})]),t._t("footBox")],2)]):t._e()])},l=[],r=o("53ca"),s=o("5530"),c=(o("ac1f"),o("1276"),o("99af"),o("d3b7"),o("3ca3"),o("ddb0"),o("2b3d"),o("498a"),o("a9e3"),o("bc3a")),p=o.n(c),d=o("bab4"),u=o.n(d),f=(o("6107"),{props:{resultQuality:{type:[Object],default:function(){return{width:400,height:400,minWidth:256,minHeight:256,maxWidth:4096,maxHeight:4096,fillColor:"#fff",imageSmoothingEnabled:!0,imageSmoothingQuality:"high"}}},uploadConfig:{type:[Object],default:function(){return{url:"",method:"post",resultToBlob:!0,header:{}}}},cropperConfig:{type:[Object],default:function(){return{viewMode:1,dragMode:"move",background:!0,zoomOnWheel:!1,cropBoxMovable:!1,cropBoxResizable:!1,center:!1,guides:!1,wheelZoomRatio:.1,minCropBoxWidth:440,minCropBoxHeight:440}}},wheelConfig:{type:[Object],default:function(){return{customize:!1,minZoom:0,maxZoom:1,step:.1}}},containerConfig:{type:[Object],default:function(){return{width:500,height:500}}}},data:function(){return{myCropper:null,imgUrl:"",fileValue:"",showDialog:!1,progressNum:0}},computed:{cropperBoxStyle:function(){var t=this.containerConfig.width,e=this.containerConfig.height;return/px/.test(t)&&(t=t.split("px")[0]),/px/.test(e)&&(e=e.split("px")[0]),"width:".concat(t,"px;height:").concat(e,"px;overflow: hidden;")}},destroyed:function(){this.closeDialog()},mounted:function(){this.copyWheelConfig=JSON.parse(JSON.stringify(this.wheelConfig))},methods:{cropingStart:function(t){var e=this,o=document.querySelector(t);this.myCropper=new u.a(o,Object(s["a"])(Object(s["a"])({},e.cropperConfig),{},{ready:function(t){var o=e.copyWheelConfig,i=e.cropperConfig,n=o.minZoom,a=e.containerConfig;if(!1===o.customize){var l=t.target.naturalHeight,r=t.target.naturalWidth,s=l>r?r:l;o.minZoom=i.minCropBoxWidth/s,o.maxZoom=o.minZoom+2,n=o.minZoom}var c=a.width/2-i.minCropBoxWidth/2,p=a.height/2-i.minCropBoxHeight/2;e.setZoom(n),e.myCropper.setCropBoxData({left:c,top:p,width:i.minCropBoxWidth,height:i.minCropBoxHeight}),e.$forceUpdate()},crop:function(t){e.handleCrop(t)},move:function(t){e.handleMove(t)},zoom:function(t){e.handleZoom(t)},cropend:function(t){e.handleCropend(t)}}))},handleCrop:function(){},handleCropend:function(){},handleMove:function(){},chooseFile:function(){var t=document.getElementById("uploadsId"),e=document.createEvent("MouseEvents");e.initEvent("click",!0,!0),t.dispatchEvent(e)},handleZoom:function(t){var e=t.detail.ratio;this.ratio=e,this.setProgressNum(),this.$emit("zoomRatio",e)},uploadImg:function(t){var e=this,o=t.target.files[0];if(!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(t.target.value))return this.$emit("cropFail",{message:"图片类型必须是.gif,jpeg,jpg,png中的一种"}),!1;var i=new FileReader;i.onload=function(t){var o="";o="object"===Object(r["a"])(t.target.result)?window.URL.createObjectURL(new Blob([t.target.result])):t.target.result,e.imgUrl=o,e.showDialog=!0,e.$nextTick((function(){e.cropingStart(".crop-img"),e.setWheel(".crop-container","add")}))},i.onerror=function(t){e.$emit("cropFail",t)},i.readAsArrayBuffer(o)},closeDialog:function(){this.imgUrl=null,this.fileValue=null,this.showDialog=!1,this.setWheel(".crop-container","remove"),this.myCropper&&this.myCropper.destroy(),this.myCropper=null},reset:function(){this.myCropper.reset()},setWheel:function(t,e){var o=document.querySelector(t);o&&("add"===e?(o&&o.addEventListener&&o.addEventListener("DOMMouseScroll",this.handleWheel,!1),o.onmousewheel=o.onmousewheel=this.handleWheel):(o&&o.removeEventListener&&o.removeEventListener("DOMMouseScroll",this.handleWheel,!1),o.onmousewheel=o.onmousewheel=null))},handleWheel:function(t){if(t.preventDefault(),!1===this.cropperConfig.zoomOnWheel){var e=t.wheelDelta,o=this.copyWheelConfig.step,i=e>0?this.ratio+o:this.ratio-o;i>this.copyWheelConfig.maxZoom&&(i=this.copyWheelConfig.maxZoom),i<this.copyWheelConfig.minZoom&&(i=this.copyWheelConfig.minZoom),this.setZoom(i)}},getCropResult:function(){var t=this,e=new Promise((function(e,o){if(t.uploadConfig.resultToBlob)t.myCropper.getCroppedCanvas(Object(s["a"])({},t.resultQuality)).toBlob((function(i){var n=t.uploadConfig,a=n.method.trim().toLocaleLowerCase(),l=n.header,r=n.url;if(t.$emit("cropSuccess",i),n.url&&"post"===a){var s=new FormData;s.append("file",i),t.createRequest(l).post(r,s,{headers:{"Content-Type":"multipart/form-data"}}).then((function(o){t.$emit("cropUploadSuccess",o),e(o)})).catch((function(e){t.$emit("cropUploadFail",e),o(e)}))}else e(i);t.closeDialog()}));else{var i=t.myCropper.getCroppedCanvas(Object(s["a"])({},t.resultQuality)).toDataURL();t.$emit("cropSuccess",i),t.closeDialog(),e(i)}}));return e},setZoom:function(t){this.myCropper.zoomTo(t,[0,0])},progressResultFun:function(t){this.setZoom(this.getRate(t))},saveFun:function(){this.getCropResult()},closeFun:function(){this.closeDialog()},createRequest:function(t){var e=p.a.create({header:t,timeout:1e4});return e},setProgressNum:function(){var t=this.copyWheelConfig,e=Number(t.maxZoom)-Number(t.minZoom),o=Math.abs(this.ratio-t.minZoom)/e;this.progressNum=o},getRate:function(t){var e=0,o=this.copyWheelConfig,i=o.minZoom;return e=i+t*Math.abs(Number(o.maxZoom)-Number(o.minZoom)),e}}}),h=f,g=(o("58e2"),o("2877")),m=Object(g["a"])(h,a,l,!1,null,"4da5fe5b",null),v=m.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("h2",[t._v("头像上传组件")]),o("h2",[t._v("组件需求和思路分析")]),o("pre",{pre:!0},[o("code",{pre:!0,attrs:{"v-pre":""}},[t._v("需求：\n1.需允许上传 gif|jpg|jpeg|png|bmp|GIF|JPG|PNG 等比较通用的图片格式\n2.鼠标滚轮可以缩放，并且获取缩放的百分比\n3.截图框不能拖动，上传的图片可以拖动，但是图片的拖动不能离开截图框\n\n扩展：\n1.是否做上传图片大小限制\n2.是否截图框和上传图片都能拖动\n3.上传图片是否按比例变大或缩小，填满截图框\n\n思路：\n1.参考vue-Cropper，使用了cropperjs，并且裁剪了许多功能，使功能集中于缩放和裁剪两项\n2.cropperjs 并没有提供方法返回缩放的精确数值，所以组件改用了 监听 DOMMouseScroll 事件，根据一定的比率换算，设置缩放大小\n3.细化截图的结果输出，分别返回 cropSuccess， cropFail， cropUploadSuccess ，cropUploadFail事件\n\n")])]),o("h2",[t._v("使用")]),o("pre",{pre:!0},[o("code",{pre:!0,attrs:{"v-pre":""}},[t._v('   ！前提模块安装： cropperjs，axios\n   cropperjs 文档：https://github.com/fengyuanchen/cropperjs\n   axios 文档：http://www.axios-js.com/\n\n   使用方式：\n    <uploadAvatar ref="uploadAvatar"/>\n\n   触发上传文件：\n   this.$refs.uploadAvatar.chooseFile();\n\n   保存截图：\n   this.$refs.uploadAvatar.getCropResult();\n')])]),o("h4",[t._v("Props")]),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[t._v("名称")]),o("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),o("th",{staticStyle:{"text-align":"left"}},[t._v("默认")]),o("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("showTopBox")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("显示截图的头部 option 栏")])]),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("showProgressBar")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("显示截图的底部 大小比率栏")])]),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("resultQuality")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("{}")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("得到截图的大小和质量的设置")])]),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("uploadConfig")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("{}")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("上传文件的设置")])]),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("cropperConfig")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("{}")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("cropper 插件的设置")])]),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("wheelConfig")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("{}")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("滚动缩放限制的设置")])]),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("containerConfig")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("{}")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("截图组件容器的设置")])])])]),o("h5",[t._v("uploadConfig")]),o("pre",{pre:!0},[o("code",{pre:!0,attrs:{"v-pre":""}},[t._v("默认值\n// 上传接口地址，如果为空，图片不会上传\nurl: '',\n// 默认为post，如果要定制化，建议不要设置url，使用cropSuccess事件接收截图数据\nmethod: 'post',\n// 设置截图数据的类型是否为blob\nresultToBlob：true,\n// 设置上传头部\nheader:{}\n")])]),o("h5",[t._v("resultQuality")]),o("pre",{pre:!0},[o("code",{pre:!0,attrs:{"v-pre":""}},[t._v('默认值\nwidth: 400,\nheight: 400,\nminWidth: 256,\nminHeight: 256,\nmaxWidth: 4096,\nmaxHeight: 4096,\nfillColor: "#fff",\nimageSmoothingEnabled: true,\nimageSmoothingQuality: "high"\n')])]),o("h5",[t._v("cropperConfig:")]),o("pre",{pre:!0},[o("code",{pre:!0,attrs:{"v-pre":""}},[t._v('默认值\n// viewMode—定义cropper的视图模式\nviewMode: 0,\n// dragMode —-定义cropper的拖拽模式。\ndragMode: "move",\n// 是否显示雪花背景\nbackground: true,\ninitialAspectRatio: 1,\n// aspectRatio—-裁剪框的宽高比\naspectRatio: 1,\n// 设置裁剪框为固定的宽高比\nautoCropArea: 1,\n// zoomOnWheel–是否可以通过移动鼠标来放大图像。\nzoomOnWheel: false,\n// cropBoxMovable—是否通过拖拽来移动剪裁框。\ncropBoxMovable: false,\n// cropBoxResizable—是否通过拖动来调整剪裁框的大小。\ncropBoxResizable: false,\n// 辅助中心点\ncenter: false,\n// 辅助线\nguides: false,\n// 设置鼠标滚轮缩放的灵敏度 默认 0.1\nwheelZoomRatio: 0.1,\n// 裁剪框最小宽度\nminCropBoxWidth: 400,\n// 裁剪框最小高度\nminCropBoxHeight: 400\n')])]),o("h5",[t._v("wheelConfig")]),o("pre",{pre:!0},[o("code",{pre:!0,attrs:{"v-pre":""}},[t._v("默认值\n// 是否使用自定义缩放值，如果是false则该组件自行设置\ncustomize：false\n// 缩放最小值\nminZoom: 0,\n// 缩放最大值\nmaxZoom: 1,\n// 缩放敏感度\nstep: 0.1\n")])]),o("h5",[t._v("containerConfig")]),o("pre",{pre:!0},[o("code",{pre:!0,attrs:{"v-pre":""}},[t._v("默认值\n// 截图容器宽\nwidth: 500,\n// 截图容器高\nheight: 500\n")])]),o("h4",[t._v("Events")]),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[t._v("名称")]),o("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("cropSuccess")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("图片截取完成事件（上传前), 参数( imageDataUrl, field )")])]),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("cropFail")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("图片截取失败事件")])]),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("cropUploadSuccess")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("上传成功， 参数( jsonData, field )")])]),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("cropUploadFail")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("上传失败， 参数( status, field )")])]),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("zoomRatio")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("接收截图缩放的大小比率值")])])])]),o("h4",[t._v("slot")]),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[t._v("名称")]),o("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("footBox")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("自定义截图容器的 footer")])]),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("topBox")]),o("td",{staticStyle:{"text-align":"left"}},[t._v("自定义截图容器的 header")])])])])])}],C={},b=Object(g["a"])(C,x,y,!1,null,null,null),_=b.exports,S={name:"uploadAvatarIndex",components:{uploadAvatar:v},data:function(){return{progressNum:0,successImgUrl:"",README:_,wheelConfig:{customize:!0,minZoom:1,maxZoom:10,step:.1},uploadConfig:{url:"",method:"post",resultToBlob:!1},containerConfig:{width:800,height:800},cropperConfig:{viewMode:1,dragMode:"move",background:!0,zoomOnWheel:!1,cropBoxMovable:!1,cropBoxResizable:!1,center:!1,guides:!1,wheelZoomRatio:.1,minCropBoxWidth:440,minCropBoxHeight:440}}},mounted:function(){},methods:{uploadImg:function(){this.$refs.uploadAvatar.chooseFile()},cropSuccess:function(t){this.successImgUrl=t},cropFail:function(t){},cropUploadSuccess:function(t){this.successImgUrl=t},cropUploadFail:function(t){},zoomRatio:function(t){},setDownload:function(t,e){var o=document.createElement("a");o.download=e,o.style.display="none",o.href=t,document.body.appendChild(o),o.click(),document.body.removeChild(o)},saveFun:function(){this.$refs.uploadAvatar.getCropResult()}}},w=S,B=(o("b950"),Object(g["a"])(w,i,n,!1,null,"35aaa100",null));e["default"]=B.exports},fc19:function(t,e,o){}}]);