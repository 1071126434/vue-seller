webpackJsonp([18],{"/pNw":function(t,n,e){var a=e("yWwj");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("fc82c544",a,!0)},"1kS7":function(t,n){n.f=Object.getOwnPropertySymbols},"50JG":function(t,n,e){"use strict";function a(t){e("/pNw")}Object.defineProperty(n,"__esModule",{value:!0});var s=e("5YsC"),i=e("pkAO"),o=e("VU/8"),r=a,p=o(s.a,i.a,!1,r,"data-v-405488f0",null);n.default=p.exports},"5YsC":function(t,n,e){"use strict";var a=e("Dd8w"),s=e.n(a),i=e("SJI6");e.n(i);n.a={name:"sendTaskOne",data:function(){return{warnShow:!0,active:0,shop:null,taskType:null,shopListArr:[]}},computed:s()({},Object(i.mapGetters)(["userInfo"])),methods:{doNext:function(){var t=this;this.$ajax.post("/api/seller/task/createTask",{shopType:this.shop.shopType,shopId:this.shop.shopId,taskType:this.taskType,sellerUserId:this.userInfo.sellerUserId}).then(function(n){"200"===n.data.code?t.$router.push({name:"sendTaskTwo",query:{sellerTaskId:n.data.data.sellerTaskId}}):t.$message({message:n.data.message,type:"warning"})}).catch(function(n){t.$message.error("服务器错误！")})},getShopList:function(){var t=this;this.$ajax.post("/api/seller/shop/getShopListBySellerUserId",{sellerUserId:this.userInfo.sellerUserId,shopType:3}).then(function(n){t.shopListArr=n.data.data}).catch(function(n){t.$message.error("服务器错误！")})}},mounted:function(){this.getShopList()}}},Dd8w:function(t,n,e){"use strict";n.__esModule=!0;var a=e("woOf"),s=function(t){return t&&t.__esModule?t:{default:t}}(a);n.default=s.default||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t}},NpIQ:function(t,n){n.f={}.propertyIsEnumerable},R4wc:function(t,n,e){var a=e("kM2E");a(a.S+a.F,"Object",{assign:e("To3L")})},To3L:function(t,n,e){"use strict";var a=e("lktj"),s=e("1kS7"),i=e("NpIQ"),o=e("sB3e"),r=e("MU5D"),p=Object.assign;t.exports=!p||e("S82l")(function(){var t={},n={},e=Symbol(),a="abcdefghijklmnopqrst";return t[e]=7,a.split("").forEach(function(t){n[t]=t}),7!=p({},t)[e]||Object.keys(p({},n)).join("")!=a})?function(t,n){for(var e=o(t),p=arguments.length,l=1,d=s.f,c=i.f;p>l;)for(var A,f=r(arguments[l++]),g=d?a(f).concat(d(f)):a(f),h=g.length,u=0;h>u;)c.call(f,A=g[u++])&&(e[A]=f[A]);return e}:p},V3tA:function(t,n,e){e("R4wc"),t.exports=e("FeBl").Object.assign},pkAO:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"sendTaskOne"},[e("div",{staticClass:"nav"},[e("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",{attrs:{to:{name:"overView"}}},[t._v("首页")]),t._v(" "),e("el-breadcrumb-item",{attrs:{to:{name:"overView"}}},[t._v("总览")]),t._v(" "),e("el-breadcrumb-item",[t._v("发布垫付任务")])],1)],1),t._v(" "),t.warnShow?e("div",{staticClass:"warning"},[e("i",{staticClass:"el-icon-warning"}),t._v(" "),e("span",{staticStyle:{"margin-left":"20px","margin-right":"40px"}},[t._v("(1) 当日18点前发布的任务，当日审核通过后进行分发。")]),t._v(" "),e("span",[t._v("（2）当日22点后发布的任务，将在当日审核后于次日8点起开始。")]),t._v(" "),e("b",{staticClass:"el-icon-close",staticStyle:{float:"right","margin-top":"14px","font-weight":"bold"},on:{click:function(n){t.warnShow=!1}}})]):t._e(),t._v(" "),e("div",{staticClass:"step"},[e("el-steps",{attrs:{active:t.active,"finish-status":"success","align-center":""}},[e("el-step",{attrs:{title:"选择任务类型"}}),t._v(" "),e("el-step",{attrs:{title:"填写任务信息"}}),t._v(" "),e("el-step",{attrs:{title:"支付"}}),t._v(" "),e("el-step",{attrs:{title:"发布成功"}})],1)],1),t._v(" "),e("div",{staticClass:"cont"},[e("div",{staticClass:"step1"},[e("h2",[t._v("第一步: 选择店铺")]),t._v(" "),t._l(t.shopListArr,function(n,a){return e("div",{key:a,staticClass:"taskType",staticStyle:{"padding-left":"60px"}},[e("el-radio",{attrs:{label:n},model:{value:t.shop,callback:function(n){t.shop=n},expression:"shop"}},[e("span",{class:{jdIcon:0==n.shopType,taobaoIcon:1==n.shopType,tianmaoIcon:2==n.shopType}}),t._v(" "),e("b",{staticStyle:{"font-size":"14px",color:"#444444"}},[t._v(t._s(n.shopName))])])],1)})],2),t._v(" "),e("div",{staticClass:"step2"},[e("h2",[t._v("第二部: 选择任务类型")]),t._v(" "),e("el-radio-group",{staticStyle:{"padding-left":"60px"},model:{value:t.taskType,callback:function(n){t.taskType=n},expression:"taskType"}},[e("div",{staticClass:"taskType"},[e("el-radio",{attrs:{label:1}},[e("span",{staticClass:"jdIcon"}),t._v(" "),e("b",{staticStyle:{"font-size":"14px",color:"#444444"}},[t._v("京东App任务\n              "),e("span",{staticStyle:{color:"#949494"}},[t._v("(用户在京东app下单)")])])])],1),t._v(" "),e("div",{staticClass:"taskType"},[e("el-radio",{attrs:{label:2}},[e("span",{staticClass:"jdIcon"}),t._v(" "),e("b",{staticStyle:{"font-size":"14px",color:"#444444"}},[t._v("微信京东任务\n              "),e("span",{staticStyle:{color:"#949494"}},[t._v("(用户在微信京东下单)")])])])],1)])],1),t._v(" "),e("div",{staticClass:"next"},[e("button",{staticClass:"btn",class:{"disabled-btn":!(t.shop&&t.taskType)},attrs:{disabled:!(t.shop&&t.taskType)},on:{click:t.doNext}},[t._v("下一步")])])])])},s=[],i={render:a,staticRenderFns:s};n.a=i},woOf:function(t,n,e){t.exports={default:e("V3tA"),__esModule:!0}},yWwj:function(t,n,e){n=t.exports=e("FZ+f")(!0),n.push([t.i,".sendTaskOne[data-v-405488f0]{padding-left:20px;padding-right:20px}.sendTaskOne .nav[data-v-405488f0]{background:#fff;padding:12px 16px;padding-right:16px;margin-bottom:24px;border-radius:4px}.sendTaskOne .warning[data-v-405488f0]{height:36px;background:rgba(255,171,177,.4);color:#ff3341;font-size:12px;line-height:36px;padding-left:20px;padding-right:20px}.sendTaskOne .step[data-v-405488f0]{padding:24px 140px 16px;background:#fff;margin-bottom:1px}.sendTaskOne .cont[data-v-405488f0]{padding:20px;background:#fff}.sendTaskOne .cont h2[data-v-405488f0]{font-size:16px;color:#333;line-height:32px;margin-top:16px;margin-bottom:16px}.sendTaskOne .cont .jdIcon[data-v-405488f0]{display:inline-block;width:14px;height:14px;vertical-align:middle}.sendTaskOne .cont .taskType[data-v-405488f0]{height:30px;line-height:30px}.sendTaskOne .cont .next[data-v-405488f0]{margin-top:280px;margin-bottom:20px;text-align:center}","",{version:3,sources:["C:/Users/Administrator/Desktop/planB/seller/src/components/header/sendTask/sendTaskOne.vue"],names:[],mappings:"AACA,8BACE,kBAAmB,AACnB,kBAAoB,CACrB,AACD,mCACE,gBAAiB,AACjB,kBAAmB,AACnB,mBAAoB,AACpB,mBAAoB,AACpB,iBAAmB,CACpB,AACD,uCACE,YAAa,AACb,gCAAkC,AAClC,cAAe,AACf,eAAgB,AAChB,iBAAkB,AAClB,kBAAmB,AACnB,kBAAoB,CACrB,AACD,oCACE,wBAAyB,AACzB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,oCACE,aAAc,AACd,eAAiB,CAClB,AACD,uCACE,eAAgB,AAChB,WAAY,AACZ,iBAAkB,AAClB,gBAAiB,AACjB,kBAAoB,CACrB,AACD,4CACE,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,qBAAuB,CACxB,AACD,8CACE,YAAa,AACb,gBAAkB,CACnB,AACD,0CACE,iBAAkB,AAClB,mBAAoB,AACpB,iBAAmB,CACpB",file:"sendTaskOne.vue",sourcesContent:["\n.sendTaskOne[data-v-405488f0] {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.sendTaskOne .nav[data-v-405488f0] {\n  background: #fff;\n  padding: 12px 16px;\n  padding-right: 16px;\n  margin-bottom: 24px;\n  border-radius: 4px;\n}\n.sendTaskOne .warning[data-v-405488f0] {\n  height: 36px;\n  background: rgba(255,171,177,0.4);\n  color: #ff3341;\n  font-size: 12px;\n  line-height: 36px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.sendTaskOne .step[data-v-405488f0] {\n  padding: 24px 140px 16px;\n  background: #fff;\n  margin-bottom: 1px;\n}\n.sendTaskOne .cont[data-v-405488f0] {\n  padding: 20px;\n  background: #fff;\n}\n.sendTaskOne .cont h2[data-v-405488f0] {\n  font-size: 16px;\n  color: #333;\n  line-height: 32px;\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n.sendTaskOne .cont .jdIcon[data-v-405488f0] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  vertical-align: middle;\n}\n.sendTaskOne .cont .taskType[data-v-405488f0] {\n  height: 30px;\n  line-height: 30px;\n}\n.sendTaskOne .cont .next[data-v-405488f0] {\n  margin-top: 280px;\n  margin-bottom: 20px;\n  text-align: center;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=18.678d2b3c2c6f151ed17c.js.map