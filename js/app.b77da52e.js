(function(t){function e(e){for(var a,r,l=e[0],c=e[1],s=e[2],d=0,p=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,l=1;l<n.length;l++){var c=n[l];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/MovieSearch/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b0c0");var a=n("2b0e"),i=(n("202f"),n("bc3a")),o=n.n(i),r=n("130e"),l=n("c4c6"),c=n.n(l),s=n("9456"),u=n.n(s),d=n("57df"),p=n.n(d),f=n("2f45"),h=n.n(f),v=n("7531"),b=n.n(v),m=n("e3db"),y=n.n(m),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("MovieSearch")},_=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"title"},[t._v("電影資料庫")]),n("Input",{on:{changeList:t.listHandler}}),n("a-table",{staticClass:"ant-table-striped",attrs:{columns:t.columns,size:"middle","data-source":t.data,rowClassName:function(t,e){return e%2===1?"table-striped":null},bordered:"",pagination:!1,fixed:"true"},scopedSlots:t._u([{key:"detail",fn:function(e,a){return n("button",{attrs:{href:"javascript:;"},on:{click:function(){return t.handleDetail(a.key)}}},[t._v("詳細資訊")])}}])}),t.isLoading?n("a-spin",{staticClass:"loading"}):t._e(),n("a-pagination",{attrs:{"default-current":1,total:t.total,current:t.current},on:{change:t.onChange}}),n("a-modal",{attrs:{title:"詳細資訊"},on:{ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("div",[t._v("演員: "+t._s(t.detail.actors))]),n("div",[t._v("類型: "+t._s(t.detail.genre))]),n("div",[t._v("內容簡介: "+t._s(t.detail.plot))])])],1)},w=[],x=(n("99af"),n("a9e3"),n("d3b7"),n("159b"),n("f64c")),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input__section"},[n("a-input",{attrs:{placeholder:"請輸入電影名稱"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("a-input",{attrs:{placeholder:"請輸入電影類型"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),n("a-button",{attrs:{type:"primary"},on:{click:t.onClcik}},[t._v("搜尋")])],1)},j=[],L={data:function(){return{title:"",type:""}},methods:{onClcik:function(){if(!this.title)return x["a"].info("請輸入電影名稱");this.$emit("changeList",this.title,this.type)}}},M=L,S=(n("e706"),n("2877")),C=Object(S["a"])(M,O,j,!1,null,null,null),P=C.exports,I=[{title:"名稱",dataIndex:"name"},{title:"類型",dataIndex:"type"},{title:"年份",dataIndex:"years"},{title:"詳細資訊",dataIndex:"details",scopedSlots:{customRender:"detail"}}],T="f49ea0b",$={components:{Input:P},data:function(){return{data:[],columns:I,total:0,current:0,visible:!1,isLoading:!0,detail:{actors:"",genre:"",plot:""},title:"",type:"",years:""}},methods:{getMovieList:function(t,e){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.title=t,this.type=a;var i="https://www.omdbapi.com/?apikey=".concat(T,"&s=").concat(t,"&page=").concat(e,"&type=").concat(a);this.isLoading=!0,o.a.get(i,{headers:{accept:"application/json"}}).then((function(t){n.isLoading=!1;var e=t.data.Search;if(!e)return x["a"].info("查無結果");n.total=Number(t.data.totalResults),n.data=[],e.forEach((function(t){n.data.push({key:t.imdbID,name:t.Title,type:t.Type,years:t.Year})}))})).catch((function(t){console.log(t)}))},onChange:function(t){this.current=Number(t),this.getMovieList(this.title,this.current,this.type)},handleDetail:function(t){var e=this;this.visible=!0,this.isLoading=!0;var n="https://www.omdbapi.com/?apikey=".concat(T,"&i=").concat(t);o.a.get(n,{headers:{accept:"application/json"}}).then((function(t){var n=t.data,a=n.Actors,i=n.Genre,o=n.Plot;e.detail={actors:a,genre:i,plot:o},e.isLoading=!1})).catch((function(t){console.log(t)}))},handleOk:function(){this.visible=!1},listHandler:function(t,e){this.title=t,this.type=e,this.getMovieList(t,1,e)}},created:function(){this.title="test",this.getMovieList(this.title,1)}},E=$,D=(n("e964"),Object(S["a"])(E,k,w,!1,null,null,null)),N=D.exports,A={name:"App",components:{MovieSearch:N}},H=A,J=(n("034f"),Object(S["a"])(H,g,_,!1,null,null,null)),R=J.exports;a["default"].use(r["a"],o.a),b.a.install(a["default"]),a["default"].component(c.a.name,c.a),a["default"].component(u.a.name,u.a),a["default"].component(p.a.name,p.a),a["default"].component(h.a.name,h.a),a["default"].component(b.a.name,b.a),a["default"].component(y.a.name,y.a),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(R)}}).$mount("#app")},"5a55":function(t,e,n){},"7e55":function(t,e,n){},"85ec":function(t,e,n){},e706:function(t,e,n){"use strict";n("7e55")},e964:function(t,e,n){"use strict";n("5a55")}});
//# sourceMappingURL=app.b77da52e.js.map