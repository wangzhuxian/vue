(function(t){function n(n){for(var s,o,r=n[0],c=n[1],u=n[2],f=0,d=[];f<r.length;f++)o=r[f],i[o]&&d.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(n);while(d.length)d.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],s=!0,r=1;r<e.length;r++){var c=e[r];0!==i[c]&&(s=!1)}s&&(a.splice(n--,1),t=o(o.s=e[0]))}return t}var s={},i={1:0},a=[];function o(n){if(s[n])return s[n].exports;var e=s[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var s in t)o.d(e,s,function(n){return t[n]}.bind(null,s));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=n,r=r.slice();for(var u=0;u<r.length;u++)n(r[u]);var l=c;a.push([29,0]),e()})({"1ApQ":function(t,n,e){},"1mEz":function(t,n,e){"use strict";var s=e("WVO3"),i=e.n(s);i.a},"1v2K":function(t,n,e){},"22t6":function(t,n,e){},29:function(t,n,e){t.exports=e("Vtdi")},"3bF0":function(t,n,e){},"5Ixo":function(t,n,e){},"76JD":function(t,n,e){"use strict";var s=e("F/JH"),i=e.n(s);i.a},8300:function(t,n,e){},"9Z7Q":function(t,n,e){"use strict";var s=e("5Ixo"),i=e.n(s);i.a},BMVM:function(t,n,e){"use strict";var s=e("dW1D"),i=e.n(s);i.a},Blat:function(t,n,e){},"EJ/M":function(t,n,e){"use strict";var s=e("kkhD"),i=e.n(s);i.a},Eqsw:function(t,n,e){"use strict";var s=e("IPZu"),i=e.n(s);i.a},"F/JH":function(t,n,e){},FFP8:function(t,n,e){"use strict";var s=e("22t6"),i=e.n(s);i.a},FsWI:function(t,n,e){"use strict";var s=e("HFNR"),i=e.n(s);i.a},G0Ty:function(t,n,e){"use strict";var s=e("Pfv6"),i=e.n(s);i.a},G0up:function(t,n,e){},HFNR:function(t,n,e){},IPZu:function(t,n,e){},J5Ae:function(t,n,e){"use strict";var s=e("m0LB"),i=e.n(s);i.a},KmOU:function(t,n,e){"use strict";var s=e("q5gC"),i=e.n(s);i.a},MGvQ:function(t,n,e){"use strict";var s=e("1v2K"),i=e.n(s);i.a},MhW3:function(t,n,e){},OhDf:function(t,n,e){},Pfv6:function(t,n,e){},RE3h:function(t,n,e){"use strict";var s=e("zm+g"),i=e.n(s);i.a},TuJu:function(t,n,e){},Vtdi:function(t,n,e){"use strict";e.r(n);e("VRzm");var s=e("Kw5r"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"app",staticClass:"app",attrs:{id:"app"}},[e("PubHeader"),e("router-view",{staticClass:"app__cont",attrs:{navs:t.navs}}),t.music?e("Player"):t._e()],1)},a=[],o=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("header",{staticClass:"header"},[s("button",{staticClass:"header__back arrow arrow--left",on:{click:t.goBack}}),s("router-link",{attrs:{to:"/"}},[s("img",{staticClass:" header__logo",attrs:{src:e("nWR2")}})]),s("router-link",{staticClass:"header__search_btn",attrs:{to:"/search/index"}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-search"}})])])],1)},r=[],c={name:"PubHeader",methods:{goBack:function(){history.go(-1)}}},u=c,l=(e("j/Fw"),e("KHd+")),f=Object(l["a"])(u,o,r,!1,null,"548fbc5e",null),d=f.exports,g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"nav"},t._l(t.navs,function(n,s){return e("router-link",{key:s,staticClass:"nav__link",attrs:{to:n.link,"exact-active-class":"nav__link--active"}},[t._v(t._s(n.text))])}))},m=[],_={name:"PubNav",props:["navs"]},h=_,p=(e("Zzsu"),Object(l["a"])(h,g,m,!1,null,"1cd4fd4e",null)),v=p.exports,b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"player-box"},[e("audio",{ref:"audioEl",staticClass:"hidden",attrs:{src:t.song.url},on:{canplay:t.play}}),t.isPlayerMin?e("PlayerMin",{attrs:{songName:t.songName,singerName:t.singerName,singerImg:t.singerImg,isPlaying:t.isPlaying}}):e("PlayerMax")],1)},y=[],w=(e("pIFo"),e("KKXr"),e("yT7P")),C=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"player"},[e("img",{staticClass:"player__singer_img",attrs:{src:t.singerImg,alt:""}}),e("div",{staticClass:"player__song_info"},[e("div",{staticClass:"player__song_name"},[t._v(t._s(t.songName))]),e("div",{staticClass:"player__singer_name"},[t._v(t._s(t.singerName))])]),e("div",{staticClass:"player__buttons"},[e("PrevButton",{staticClass:"player__btn_prev"}),e("PlayButton",{staticClass:"player__btn_status"}),e("NextButton",{staticClass:"play__btn_next"})],1)])},k=[],P=e("L2JU"),I=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"play",on:{touchstart:t.togglePlay}},[e("svg",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}],staticClass:"icon play__pause",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-pause"}})]),e("svg",{directives:[{name:"show",rawName:"v-show",value:!t.isPlaying,expression:"!isPlaying"}],staticClass:"icon play__play",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-play"}})])])},x=[],S={name:"PlayButton",computed:{isPlaying:function(){return this.$store.state.isPlaying}},methods:{togglePlay:function(){this.$store.commit("togglePlay")}}},M=S,L=(e("il4g"),Object(l["a"])(M,I,x,!1,null,"4cec0d43",null)),E=L.exports,j=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"next_button",on:{touchstart:t.next}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-next"}})])])},O=[],R={name:"nextButton",methods:{next:function(){this.$store.commit("next")}}},$=R,D=(e("dvoZ"),Object(l["a"])($,j,O,!1,null,"15bd8545",null)),H=D.exports,T=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"player__btn_prev",on:{touchstart:t.prev}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-previous"}})])])},N=[],z={name:"PrevButton",methods:{prev:function(){this.$store.commit("prev")}}},B=z,U=(e("oqVw"),Object(l["a"])(B,T,N,!1,null,"c597d45c",null)),F=U.exports,J={name:"PlayerMin",props:["songName","singerName","singerImg"],components:{PlayButton:E,NextButton:H,PrevButton:F}},V=J,W=(e("RE3h"),Object(l["a"])(V,C,k,!1,null,"2dea319c",null)),Q=W.exports,K=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"player--max"})},q=[],A={name:"PlayerMax"},Z=A,G=(e("xh4Y"),Object(l["a"])(Z,K,q,!1,null,"5e867840",null)),X=G.exports,Y={name:"Player",components:{PlayerMin:Q,PlayerMax:X},data:function(){return{isPlayerMin:!0}},computed:Object(w["a"])({singerName:function(){return this.music.filename.split(/\s+-\s+/)[0]},singerImg:function(){if(this.song.imgUrl)return this.song.imgUrl.replace(/\{\s*size\s*\}/,400)},songName:function(){return this.music.filename.split(/\s+-\s+/)[1]}},Object(P["b"])({isPlaying:function(t){return t.isPlaying},song:function(t){return t.song},music:function(t){return t.music},audioEl:function(t){return t.audioEl},vMax:function(t){return t.device.vMax}})),beforeCreate:function(){var t=this;window.onresize=function(){t.isPlayerMin=window.innerHeight>.8*t.vMax}},destroyed:function(){window.onresize=null},mounted:function(){this.$store.commit("findAudioEl",this.$refs.audioEl)},methods:{play:function(){this.$store.commit("togglePlay",!0)}}},tt=Y,nt=(e("MGvQ"),Object(l["a"])(tt,b,y,!1,null,"83875070",null)),et=nt.exports,st=(e("Cg/J"),{name:"App",components:{PubHeader:d,PubNav:v,Player:et},mounted:function(){this.$refs.app.style.height=this.vMax+"px"},computed:{music:function(){return this.$store.state.music},vMax:function(){return this.$store.state.device.vMax}},data:function(){return{navs:[{text:"新歌",name:"new",active:!0,link:"/"},{text:"排行",name:"rank",active:!1,link:"/rank/list"},{text:"歌单",name:"song",active:!1,link:"/song/list"},{text:"歌手",name:"singer",active:!1,link:"/singer/category"}]}}}),it=st,at=(e("BMVM"),Object(l["a"])(it,i,a,!1,null,"75db2da2",null)),ot=at.exports,rt=e("jE9Z"),ct=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",{staticClass:"main"},[e("PubNav",{attrs:{navs:t.navs}}),e("router-view",{staticClass:"main__cont"})],1)},ut=[],lt={name:"Main",props:["navs"],components:{PubNav:v},methods:{}},ft=lt,dt=(e("Eqsw"),Object(l["a"])(ft,ct,ut,!1,null,"714737cf",null)),gt=dt.exports,mt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[t.sliderData.length?e("Slider",{attrs:{data:t.sliderData}}):t._e(),e("PubMusicList",{attrs:{musicList:t.newSongs}})],1)},_t=[],ht=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"pub_music__list"},t._l(t.musicList,function(n,s){return e("li",{key:s,staticClass:"pub_music__item main_border_bottom"},[t._t("index",null,{data:s}),e("div",{staticClass:"pub_music__name",on:{click:function(e){t.wantPlay(n)}}},[t._v(t._s(n.filename))]),e("button",{staticClass:"pub_music__download"},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-download"}})])])],2)}))},pt=[],vt={name:"PubMusicList",props:["musicList"],methods:{wantPlay:function(t){this.$store.commit("wantPlay",{music:t,musicList:this.$props.musicList})}}},bt=vt,yt=(e("mDki"),Object(l["a"])(bt,ht,pt,!1,null,"0a7f20e2",null)),wt=yt.exports,Ct=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"slider"},[e("swiper",{ref:"mySwiper",staticClass:"slider__body",attrs:{options:t.swiperOptions}},[t._l(t.data,function(t,n){return e("swiper-slide",{key:n},[e("a",{staticClass:"slider__link",attrs:{href:t.extra.tourl}},[e("img",{staticClass:"slider__img",attrs:{src:t.imgurl,alt:t.title}})])])}),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},kt=[],Pt=e("chKg"),It=(e("36R9"),{name:"Slider",props:["data"],components:{swiper:Pt["swiper"],swiperSlide:Pt["swiperSlide"]},data:function(){return{swiperOptions:{autoplay:{delay:3e3,stopOnLastSlide:!0,disableOnInteraction:!1},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0,hideOnClick:!1},on:{imagesReady:function(){this.autoplay.start()},slideChangeTransitionEnd:function(){var t=this;this.isEnd&&(this.autoplay.stop(),//! avoid blink in chrome, change to the same picture after render
setTimeout(function(){t.slideTo(0,0),setTimeout(function(){t.autoplay.start()},t.params.autoplay.delay)}))}}}}}}),xt=It,St=(e("EJ/M"),Object(l["a"])(xt,Ct,kt,!1,null,"5b941f84",null)),Mt=St.exports,Lt=e("vDqi"),Et=e.n(Lt),jt=(e("xpiv"),e("rGqo"),"https://bird.ioliu.cn/v1?url="),Ot="http://m.kugou.com",Rt={newSong:Ot+"/?json=true",rankList:Ot+"/rank/list&json=true",rankInfo:Ot+"/rank/info/?page=1&json=true&rankid=",songList:Ot+"/plist/index&json=true",songListInfo:Ot+"/plist/list/songListId?json=true",singerCategory:Ot+"/singer/class&json=true",singerCategoryInfo:Ot+"/singer/list/singerCategoryInfoId?json=true",singerInfo:Ot+"/singer/info/singerId&json=true",song_info:Ot+"/app/i/getSongInfo.php?cmd=playInfo&hash=",song_info_lyric:"http://www.kugou.com/yy/index.php?r=play/getdata&hash=",hotSearch:"http://mobilecdn.kugou.com/api/v3/search/hot?format=json&plat=0&count=30",searchResult:"http://mobilecdn.kugou.com/api/v3/search/song?format=json&page=1&pagesize=20&showtype=1&keyword="};Reflect.ownKeys(Rt).forEach(function(t){Rt[t]=jt+Rt[t]});var $t=Rt,Dt={name:"NewSong",data:function(){return{newSongs:[],sliderData:[]}},created:function(){this.getNewSong()},methods:{getNewSong:function(){var t=this;Et.a.get($t.newSong).then(function(n){var e=n.data;t.newSongs=e.data;var s=e.banner;s.push(s.slice(0,1)[0]),t.sliderData=s})}},components:{PubMusicList:wt,Slider:Mt}},Ht=Dt,Tt=(e("z6ON"),Object(l["a"])(Ht,mt,_t,!1,null,"20be8015",null)),Nt=Tt.exports,zt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"rank_list"},[e("PubList",{attrs:{pubList:t.rankList},scopedSlots:t._u([{key:"cont",fn:function(n){return e("div",{staticClass:"rank_list__info"},[t._v(t._s(n.data.title))])}}])})],1)},Bt=[],Ut=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"pub_list"},t._l(t.pubList,function(n,s){return e("li",{key:s,staticClass:"pub_list__item main_border_bottom"},[e("router-link",{staticClass:"pub_list__link",attrs:{to:n.path}},[e("img",{staticClass:"pub_list__img",attrs:{src:n.imgUrl}}),t._t("cont",null,{data:n}),e("button",{staticClass:"pub_list__btn arrow arrow--right"})],2)],1)}))},Ft=[],Jt={name:"PubList",props:["pubList"]},Vt=Jt,Wt=(e("X42c"),Object(l["a"])(Vt,Ut,Ft,!1,null,"3d429d23",null)),Qt=Wt.exports,Kt={name:"RankList",components:{PubList:Qt},data:function(){return{rankList:[]}},created:function(){this.getRank()},methods:{getRank:function(){var t=this;Et.a.get($t.rankList).then(function(n){var e=n.data;e.rank.list.forEach(function(n){n.imgUrl=n.imgurl.replace(/\{size\}/,400),n.path="/rank/info/"+n.rankid,n.title=n.rankname,t.rankList.push(n)})})}}},qt=Kt,At=(e("FsWI"),Object(l["a"])(qt,zt,Bt,!1,null,"15b5011a",null)),Zt=At.exports,Gt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"song_list"},[e("PubList",{attrs:{pubList:t.songList},scopedSlots:t._u([{key:"cont",fn:function(n){return e("div",{staticClass:"song_list__info"},[e("div",{staticClass:"song_list__title"},[t._v(t._s(n.data.title))]),e("div",{staticClass:"song_list__star"},[e("svg",{staticClass:"icon song_list__icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-music"}})]),e("span",{staticClass:"song_list__popularity"},[t._v(t._s(n.data.popularity))])])])}}])})],1)},Xt=[],Yt={name:"SongList",components:{PubList:Qt},data:function(){return{songList:[]}},created:function(){this.getSongList()},methods:{getSongList:function(){var t=this;Et.a.get($t.songList).then(function(n){var e=n.data;e.plist.list.info.forEach(function(n){n.imgUrl=n.imgurl.replace(/\{size\}/,400),n.path="/song/list/"+n.specialid,n.title=n.specialname,n.popularity=n.playcount,t.songList.push(n)})})}}},tn=Yt,nn=(e("FFP8"),Object(l["a"])(tn,Gt,Xt,!1,null,"4f4aceff",null)),en=nn.exports,sn=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"singer_category"},t._l(t.singerCategories,function(n,s){return e("ul",{key:s,staticClass:"singer_category__list main_border"},t._l(n.data,function(n,s){return e("li",{key:"1"+s,staticClass:"singer_category__item main_border_bottom"},[e("router-link",{staticClass:"singer_category__link",attrs:{to:n.path}},[e("div",{staticClass:"singer_category__title"},[t._v(t._s(n.classname))]),e("button",{staticClass:"singer_category_btn arrow arrow--right"})])],1)}))}))},an=[],on=(e("dRSK"),{name:"SingerCategory",data:function(){return{singerCategories:[]}},created:function(){this.getSingerCategories()},methods:{getSingerCategories:function(){var t=this;Et.a.get($t.singerCategory).then(function(n){var e=n.data;e.list.reduce(function(t,n){n.path="/singer/list/"+n.classid;var e=t.find(function(t){return t.category===n.classname.substring(0,2)});return e?e.data.push(n):t.push({category:n.classname.substring(0,2),data:[n]}),t},t.singerCategories)})}}}),rn=on,cn=(e("wapM"),Object(l["a"])(rn,sn,an,!1,null,"684548ee",null)),un=cn.exports,ln=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isRankInfoShow?e("section",{staticClass:"rank_info"},[e("PubModuleHead",{attrs:{moduleHeadInfo:t.getModuleHeadInfo()}},[e("time",{staticClass:"rank_info__update_time",attrs:{slot:"moduleUpdateTime"},slot:"moduleUpdateTime"},[t._v("\n      "+t._s(t.msg)+" "+t._s(t.formatDate())+"\n    ")])]),e("PubMusicList",{attrs:{musicList:t.getMusicList()},scopedSlots:t._u([{key:"index",fn:function(n){return e("div",{class:"rank_info__index rank_info__index"+(n.data+1)},[t._v(t._s(n.data+1))])}}])})],1):t._e()},fn=[],dn=(e("9XZr"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"module__head",style:"background-image:url("+t.moduleHeadInfo.imgUrl+")"},[e("h6",{staticClass:"module__title"},[t._v(t._s(t.moduleHeadInfo.name))]),t._t("moduleUpdateTime")],2),t._t("moduleDes")],2)}),gn=[],mn={name:"PubModuleHead",props:["moduleHeadInfo"]},_n=mn,hn=(e("jVgL"),Object(l["a"])(_n,dn,gn,!1,null,"46bede66",null)),pn=hn.exports,vn={name:"RankInfo",components:{PubModuleHead:pn,PubMusicList:wt},data:function(){return{rankInfo:{},isRankInfoShow:!1,msg:"上次更新时间 : ",formatDate:function(){var t=new Date(1e3*this.rankInfo.songs.timestamp);return t.getFullYear()+"-"+String(t.getMonth()+1).padStart(2,"0")+"-"+String(t.getDate()).padStart(2,"0")},getModuleHeadInfo:function(){return{imgUrl:this.rankInfo.info.banner7url.replace(/\{\s*size\s*\}/,400),name:this.rankInfo.info.rankname}},getMusicList:function(){return this.rankInfo.songs.list}}},created:function(){var t=this.$route.path.split("/").pop();this.getRankInfo(t)},methods:{getRankInfo:function(t){var n=this;Et.a.get($t.rankInfo+t).then(function(t){var e={info:t.data.info,songs:t.data.songs};n.rankInfo=e,n.isRankInfoShow=!0}).catch(function(t){alert(t)})}}},bn=vn,yn=(e("1mEz"),Object(l["a"])(bn,ln,fn,!1,null,"574dedc1",null)),wn=yn.exports,Cn=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isSongListInfoShow?e("section",{staticClass:"song_list_info"},[e("PubModuleHead",{attrs:{moduleHeadInfo:t.getModuleHeadInfo()}},[e("PubModuleDes",{attrs:{slot:"moduleDes",description:t.getModuleHeadInfo().intro},slot:"moduleDes"})],1),e("PubMusicList",{attrs:{musicList:t.getMusicList()}})],1):t._e()},kn=[],Pn=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.showMore?"module_info__intro main_box_shadow show_more":"module_info__intro main_box_shadow"},[e("p",{staticClass:"module_info__text"},[t._v(t._s(t.description))]),e("button",{class:t.showMore?"more_btn more_btn--up":"more_btn",on:{click:function(n){t.showMore=!t.showMore}}})])},In=[],xn={name:"PubModuleDes",props:["description"],data:function(){return{showMore:!1}},methods:{}},Sn=xn,Mn=(e("G0Ty"),Object(l["a"])(Sn,Pn,In,!1,null,"787692ac",null)),Ln=Mn.exports,En={name:"SongListInfo",components:{PubModuleHead:pn,PubMusicList:wt,PubModuleDes:Ln},data:function(){return{songListInfo:{},isSongListInfoShow:!1,getModuleHeadInfo:function(){return{imgUrl:this.songListInfo.info.list.imgurl.replace(/\{\s*size\s*\}/,400),name:this.songListInfo.info.list.specialname,intro:this.songListInfo.info.list.intro}},getMusicList:function(){return this.songListInfo.songs.list.info}}},created:function(){var t=this.$route.path.split("/").pop();this.getSongListInfo(t)},methods:{getSongListInfo:function(t){var n=this;Et.a.get($t.songListInfo.replace(/songListId?/i,t)).then(function(t){var e=t.data,s={info:e.info,songs:e.list};n.songListInfo=s,n.isSongListInfoShow=!0}).catch(function(t){alert(t)})}}},jn=En,On=(e("J5Ae"),Object(l["a"])(jn,Cn,kn,!1,null,"89d7e986",null)),Rn=On.exports,$n=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isSingerCategoryInfoShow?e("section",{staticClass:"singer_category_info"},[e("PubModuleTitle",{attrs:{title:t.singerCategoryInfo.info.name}}),e("ul",{staticClass:"singer_category_info__list"},t._l(t.singerCategoryInfo.data,function(n,s){return e("li",{key:s,staticClass:"singer_category_info__item main_border_bottom"},[e("router-link",{staticClass:"singer_category_info__link",attrs:{to:n.path}},[e("img",{staticClass:"singer_category_info__img",attrs:{src:n.imgUrl}}),e("div",{staticClass:"singer_category_info__name"},[t._v(t._s(n.name))])])],1)}))],1):t._e()},Dn=[],Hn=(e("91GP"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h4",{staticClass:"module_title main_box_shadow"},[t._v(t._s(t.title))])}),Tn=[],Nn={name:"PubModuleTitle",props:["title"]},zn=Nn,Bn=(e("fVBQ"),Object(l["a"])(zn,Hn,Tn,!1,null,"3c1486b4",null)),Un=Bn.exports,Fn={name:"SingerCategoryInfo",components:{PubModuleTitle:Un},data:function(){return{singerCategoryInfo:{},isSingerCategoryInfoShow:!1}},created:function(){var t=this.$route.path.split("/").pop();this.getSingerCategoryInfo(t)},methods:{getSingerCategoryInfo:function(t){var n=this;Et.a.get($t.singerCategoryInfo.replace(/singerCategoryInfoId?/i,t)).then(function(t){var e=t.data,s={info:{id:e.classid,name:e.classname,count:e.singers.total},data:e.singers.list.info};e.singers.list.info.forEach(function(t){t.id=t.singerid,t.name=t.singername,t.imgUrl=t.imgurl.replace(/\{size\}/,400),t.path="/singer/info/"+t.id}),Object.assign(n.singerCategoryInfo,s),n.singerCategoryInfo=s,n.isSingerCategoryInfoShow=!0}).catch(function(t){alert(t)})}}},Jn=Fn,Vn=(e("9Z7Q"),Object(l["a"])(Jn,$n,Dn,!1,null,"75c52a04",null)),Wn=Vn.exports,Qn=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isSingerInfoShow?e("section",{staticClass:"singer_info"},[e("PubModuleHead",{attrs:{moduleHeadInfo:t.getModuleHeadInfo()}},[e("PubModuleDes",{attrs:{slot:"moduleDes",description:t.getModuleHeadInfo().intro},slot:"moduleDes"})],1),e("PubMusicList",{attrs:{musicList:t.getMusicList()}})],1):t._e()},Kn=[],qn={name:"SingerInfo",components:{PubModuleHead:pn,PubMusicList:wt,PubModuleDes:Ln},data:function(){return{singerInfo:{},isSingerInfoShow:!1,getModuleHeadInfo:function(){return this.singerInfo.info},getMusicList:function(){return this.singerInfo.data}}},created:function(){var t=this.$route.path.split("/").pop();this.getSingerInfo(t)},methods:{getSingerInfo:function(t){var n=this;Et.a.get($t.singerInfo.replace(/singerId?/i,t)).then(function(t){var e=t.data,s={info:{id:e.info.singerid,name:e.info.singername,count:e.info.songcount,albumcount:e.info.albumcount,imgUrl:e.info.imgurl.replace(/\{size\}/,400),intro:e.info.intro},data:e.songs.list};e.songs.list.forEach(function(t){t.name=t.filename}),Object.assign(n.singerInfo,s),n.singerInfo=s,n.isSingerInfoShow=!0}).catch(function(t){alert(t)})}}},An=qn,Zn=(e("KmOU"),Object(l["a"])(An,Qn,Kn,!1,null,"6b9b7cf8",null)),Gn=Zn.exports,Xn=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"search"},[e("PubModuleTitle",{staticClass:"search__title",attrs:{title:t.title}}),e("div",{staticClass:"search__cont"},[e("form",{staticClass:"search__form",on:{submit:function(t){t.preventDefault()}}},[e("input",{staticClass:"search__input",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.keyword},on:{"update:value":function(n){t.keyword=n},input:function(n){t.keyword=arguments[0].target.value.trim()},keyup:function(n){return"button"in n||!t._k(n.keyCode,"enter",13,n.key,"Enter")?t.getSearchRes(n):null}}}),e("button",{class:t.isSearchResShow?"search__btn search__btn--active":"search__btn",attrs:{type:"button"},on:{click:t.getSearchRes}},[t._v(t._s(t.title))])]),t.isSearchRecShow?e("div",{staticClass:"search__rec"},[e("h6",{staticClass:"search__type"},[t._v(t._s(t.searchType))]),e("ul",{staticClass:"search__list"},t._l(t.searchRecArr,function(n,s){return e("li",{key:s,staticClass:"search__item main_border_bottom",on:{click:function(e){t.getTargetList(n.keyword)}}},[t._v(t._s(n.keyword))])}))]):t._e(),t.isSearchResShow?e("div",{staticClass:"search__res"},[e("div",{staticClass:"search__count"},[t._v("共有"+t._s(t.searchRes.info.length)+"条结果")]),e("PubMusicList",{staticClass:"search__res-list",attrs:{musicList:t.searchRes.info}})],1):t._e()])],1)},Yn=[],te={name:"Search",components:{PubModuleTitle:Un,PubMusicList:wt},data:function(){return{title:"搜索",searchType:"最近热门",placeholder:"歌手/歌名/拼音",keyword:"",searchRecArr:[],isSearchRecShow:!0,searchRes:{},isSearchResShow:!1}},created:function(){this.getSearchRec()},mounted:function(){var t=document.getElementsByClassName("search__cont")[0];window.search__cont=t;//! bug with qq browser
var n=function(){t.scrollTop&&console.log(event.type,t.scrollTop)};window.addEventListener("touchstart",n),window.addEventListener("touchmove",n)},methods:{getSearchRec:function(){var t=this;Et.a.get($t.hotSearch).then(function(n){var e=n.data;e.data.info.forEach(function(n){t.searchRecArr.push(n)})}).catch(function(t){alert(t)})},getSearchRes:function(){var t=this;if(""!==this.keyword){var n=$t.searchResult+encodeURIComponent(this.keyword);Et.a.get(n).then(function(n){t.searchRes=n.data.data,t.isSearchRecShow=!1,t.isSearchResShow=!0})}},getTargetList:function(t){this.keyword=t,this.getSearchRes()}}},ne=te,ee=(e("76JD"),Object(l["a"])(ne,Xn,Yn,!1,null,"445f5896",null)),se=ee.exports;s["a"].use(rt["a"]);var ie=new rt["a"]({routes:[{path:"/",component:gt,children:[{path:"/",component:Nt},{path:"rank/list",component:Zt},{path:"song/list",component:en},{path:"singer/category",component:un}]},{path:"/rank/info/:id",component:wn},{path:"/song/list/:id",component:Rn},{path:"/singer/list/:id",component:Wn},{path:"/singer/info/:id",component:Gn},{path:"/search/index",component:se}]});e("INYr");s["a"].use(P["a"]);var ae=new P["a"].Store({state:{musicList:[],music:null,song:{},audioEl:{},isPlaying:!1,device:{vMax:Math.max(document.documentElement.clientHeight,document.documentElement.clientWidth)}},getters:{curMusicIndex:function(t){return t.musicList.findIndex(function(n){return n===t.music})}},mutations:{findAudioEl:function(t,n){t.audioEl=n},wantPlay:function(t,n){var e=n.music,s=n.musicList,i=void 0===s?t.musicList:s;t.music=e,t.musicList=i,Et.a.get($t.song_info+e.hash).then(function(n){t.song=n.data})},togglePlay:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:!t.isPlaying;n?(t.audioEl.play(),t.isPlaying=!0):(t.audioEl.pause(),t.isPlaying=!1)},next:function(t){var n=ae.getters.curMusicIndex;n=n===t.musicList.length-1?-1:n,ae.commit("wantPlay",{music:t.musicList[n+1]})},prev:function(t){var n=ae.getters.curMusicIndex;n=0===n?t.musicList.length:n,ae.commit("wantPlay",{music:t.musicList[n-1]})}}});window.store=ae;var oe=ae;e("TuJu"),e("MhW3"),e("OhDf");s["a"].config.productionTip=!1,new s["a"]({router:ie,store:oe,render:function(t){return t(ot)}}).$mount("#app")},WVO3:function(t,n,e){},WeTg:function(t,n,e){},X42c:function(t,n,e){"use strict";var s=e("gM2Q"),i=e.n(s);i.a},Zzsu:function(t,n,e){"use strict";var s=e("3bF0"),i=e.n(s);i.a},cD3i:function(t,n,e){},dW1D:function(t,n,e){},dvoZ:function(t,n,e){"use strict";var s=e("WeTg"),i=e.n(s);i.a},fVBQ:function(t,n,e){"use strict";var s=e("hPCt"),i=e.n(s);i.a},gM2Q:function(t,n,e){},hPCt:function(t,n,e){},il4g:function(t,n,e){"use strict";var s=e("nQ2z"),i=e.n(s);i.a},"j/Fw":function(t,n,e){"use strict";var s=e("G0up"),i=e.n(s);i.a},jVgL:function(t,n,e){"use strict";var s=e("1ApQ"),i=e.n(s);i.a},kkhD:function(t,n,e){},m0LB:function(t,n,e){},mDki:function(t,n,e){"use strict";var s=e("Blat"),i=e.n(s);i.a},nQ2z:function(t,n,e){},nWR2:function(t,n,e){t.exports=e.p+"static/img/logo.d488aa15.png"},oqVw:function(t,n,e){"use strict";var s=e("8300"),i=e.n(s);i.a},q5gC:function(t,n,e){},q5sl:function(t,n,e){},v70p:function(t,n,e){},wapM:function(t,n,e){"use strict";var s=e("q5sl"),i=e.n(s);i.a},xh4Y:function(t,n,e){"use strict";var s=e("cD3i"),i=e.n(s);i.a},z6ON:function(t,n,e){"use strict";var s=e("v70p"),i=e.n(s);i.a},"zm+g":function(t,n,e){}});
//# sourceMappingURL=app.e019500c.js.map