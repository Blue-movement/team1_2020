(this.webpackJsonpblm_social_media=this.webpackJsonpblm_social_media||[]).push([[0],{108:function(e,t,a){e.exports=a(164)},125:function(e,t){},134:function(e,t){},142:function(e,t){},148:function(e,t){},150:function(e,t){},158:function(e,t){},164:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(30),i=a.n(r),l=(a(75),a(27)),o=a(7),c=a(39),u=a(12),m=a(13),d=a(15),h=a(14),f=a(195),g=a(182),p=a(186),b=a(184),v=a(35),E=a(192),w=a(179),y=a(98),k=a.n(y),P=a(176),x=a(177),_=a(178),j=a(194),A=a(180),O=a(181),C=a(32),N=a.n(C),B=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e?e.map((function(e,t){return s.a.createElement(P.a,{item:!0,xs:3,key:t,style:{marginBottom:30,display:"flex"}},s.a.createElement(x.a,{className:"feedGrid",style:{background:"black",display:"inline-flex",justifyContent:"space-between",flexDirection:"column"}},s.a.createElement(_.a,{className:"feedGrid",avatar:s.a.createElement(j.a,{src:e.user.profile_image_url}),title:e.user.name,subheader:e.created_at.substring(0,20),onClick:function(){return window.open("https://www.twitter.com/"+e.user.screen_name,"_blank")}}),s.a.createElement(w.a,{style:{background:"#ffd415"},variant:"middle"}),s.a.createElement(A.a,{className:"feedGrid"},s.a.createElement(v.a,{className:"feedGrid",variant:"body1"},e.text)),s.a.createElement(w.a,{style:{background:"#ffd415"},variant:"middle"}),s.a.createElement(O.a,{className:"feedGrid",style:{justifyContent:"center"}},s.a.createElement(g.a,{style:{color:"#ffd415",backgroundColor:"black"},onClick:function(){return window.open("https://www.twitter.com/"+e.user.screen_name+"/status/"+e.id_str,"_blank")},endIcon:s.a.createElement(N.a,null)},"Twitter"))))})):null;return s.a.createElement(P.a,{container:!0,spacing:3},t)}}]),a}(n.Component),S=a(183),L=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={fetching:!0,data:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.data,a=[];t&&t.forEach((function(e){return a.push(fetch("https://prince25.pythonanywhere.com/idtoname?id="+e.node.owner.id).then((function(e){return e.json()})))})),t&&Promise.all(a).then((function(a){return n=a,t.forEach((function(t,a){e.setState({data:e.state.data.concat(t)},(function(){var t=e.state.data;t[a].node.owner=Object.assign({},t[a].node.owner,n[a].user),e.setState({data:t})}))})),void e.setState({fetching:!1});var n})).catch((function(e){return console.log("Instgram getUserInfo() Failed:",e)}))}},{key:"render",value:function(){var e=this.state.data&&this.state.data.length>0?this.state.data.map((function(e,t){return s.a.createElement(P.a,{item:!0,xs:3,key:t,style:{marginBottom:30,display:"flex"}},s.a.createElement(x.a,{className:"feedGrid",style:{background:"black",display:"inline-flex",flexDirection:"column",justifyContent:"space-between"}},s.a.createElement(_.a,{className:"feedGrid",avatar:s.a.createElement(j.a,{src:e.node.owner.profile_pic_url}),title:e.node.owner.username,subheader:new Date(e.node.taken_at_timestamp).toLocaleString("en-US"),onClick:function(){return window.open("https://www.instagram.com/"+e.node.owner.username,"_blank")}}),s.a.createElement(S.a,{className:"feedGrid",style:{height:"250px",width:"100%"},image:e.node.display_url}),s.a.createElement(A.a,{className:"feedGrid"},s.a.createElement(v.a,{variant:"body1"},e.node.edge_media_to_caption.edges[0]?e.node.edge_media_to_caption.edges[0].node.text.length>150?e.node.edge_media_to_caption.edges[0].node.text.substring(0,150)+"...":e.node.edge_media_to_caption.edges[0].node.text:null)),s.a.createElement(O.a,{className:"feedGrid",style:{justifyContent:"center"}},s.a.createElement(g.a,{style:{color:"#ffd415",backgroundColor:"black"},onClick:function(){return window.open("https://www.instagram.com/p/"+e.node.shortcode,"_blank")},endIcon:s.a.createElement(N.a,null)},"Instagram"))))})):null;return s.a.createElement("div",null,this.state.fetching?s.a.createElement(b.a,{style:{width:"100vw",maxWidth:"1232px",padding:0}},s.a.createElement(f.a,{style:{marginTop:0,marginBottom:0}})):s.a.createElement(P.a,{container:!0,spacing:3},e))}}]),a}(n.Component),T=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e?e.map((function(e,t){return s.a.createElement(P.a,{item:!0,xs:3,key:t,style:{marginBottom:30,display:"flex"}},s.a.createElement(x.a,{className:"feedGrid",style:{background:"black",display:"inline-flex",justifyContent:"space-between",flexDirection:"column"}},s.a.createElement(_.a,{className:"feedGrid",title:s.a.createElement(v.a,{variant:"subtitle2"},e.title),subheader:s.a.createElement(v.a,{variant:"overline"},e.publishedAt),onClick:function(){return window.open(e.url,"_blank")}}),s.a.createElement(S.a,{className:"feedGrid",style:{height:"250px",width:"100%"},image:e.urlToImage?e.urlToImage:"https://blacklivesmatter.com/wp-content/themes/blm/dist/images/logo-black-lives-matter.png"}),s.a.createElement(A.a,{className:"feedGrid"},s.a.createElement(v.a,{className:"feedGrid",variant:"body2"},e.description)),s.a.createElement(O.a,{className:"feedGrid",style:{justifyContent:"center"}},s.a.createElement(g.a,{style:{color:"#ffd415",backgroundColor:"black"},onClick:function(){return window.open(e.url,"_blank")},endIcon:s.a.createElement(N.a,null)},e.source.name))))})):null;return s.a.createElement(P.a,{container:!0,spacing:3},t)}}]),a}(n.Component),I=a(97),M=a.n(I),G=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e?e.map((function(e,t){return s.a.createElement(P.a,{item:!0,xs:3,key:t,style:{marginBottom:30,display:"flex"}},s.a.createElement(x.a,{className:"feedGrid",style:{background:"black",display:"inline-flex",justifyContent:"space-between",flexDirection:"column",width:"100%"}},s.a.createElement(_.a,{className:"feedGrid",title:s.a.createElement(v.a,{variant:"h6"},e.title),subheader:s.a.createElement(v.a,{variant:"caption"},"by ",e.author.name," on ",e.created_utc),onClick:function(){return window.open("https://www.reddit.com"+e.permalink,"_blank")}}),s.a.createElement(O.a,{className:"feedGrid",style:{justifyContent:"center"}},s.a.createElement(E.a,{className:"feedGrid",style:{display:"grid",justifyItems:"center"}},s.a.createElement(M.a,{style:{color:"#ffd415",backgroundColor:"black"}}),s.a.createElement(v.a,{style:{color:"#ffd415",backgroundColor:"black"},variant:"caption"},e.score," Upvotes")),s.a.createElement(g.a,{style:{color:"#ffd415",backgroundColor:"black"},onClick:function(){return window.open("https://www.reddit.com"+e.permalink,"_blank")},endIcon:s.a.createElement(N.a,null)},"Reddit"))))})):null;return s.a.createElement(P.a,{container:!0,spacing:3},t)}}]),a}(n.Component),R=a(185),U=a(99),D={primary:{main:"#000000",contrastText:"#FFC107"},secondary:{main:"#FFC107"}},F="BLM_Theme";function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:F;return D=t,F=a,function(){return s.a.createElement(R.a,{theme:Object(U.a)({palette:D,themeName:F})},e)}}var W=a(117),J=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={isLoading:!0,twitterPosts:[],nextTwitterResultUrl:null,instagramPosts:[],nextInstagramResultUrl:null,newsPosts:[],newsPage:1,redditPosts:[],visiblePosts:{}},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.searchTwitter(),this.searchInstagram(),this.searchNews(),this.getReddit();var t=setInterval((function(){e.state.visiblePosts.instagram&&e.state.visiblePosts.twitter&&e.state.visiblePosts.news&&e.state.visiblePosts.reddit&&(e.setState({isLoading:!1}),clearInterval(t))}),100)}},{key:"searchTwitter",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:'BLM OR "Black Lives Matter"',a="https://cors-anywhere.herokuapp.com/",n=this.state.nextTwitterResultUrl?"https://api.twitter.com/1.1/search/tweets.json"+this.state.nextTwitterResultUrl:"https://api.twitter.com/1.1/search/tweets.json?q="+t+"&lang=en&result_type=mixed&include_entities=1&count="+12..toString();fetch(a+n,{headers:{Authorization:"Bearer AAAAAAAAAAAAAAAAAAAAAGNdFwEAAAAAgGB%2BLjWg050eg%2B3GcJ2YbbSJ6N0%3DaJDTLCsAa9mmXPFOccInSk1969hRfbVRbZxszTyek5LGcVTrlh"}}).then((function(t){return t.ok?t.json():(console.log("Twitter request failed: "+n),{statuses:e.state.twitterPosts,search_metadata:{next_results:e.state.nextTwitterResultUrl}})})).then((function(t){return e.setState((function(e){return{twitterPosts:[].concat(Object(c.a)(e.twitterPosts),Object(c.a)(t.statuses)),nextTwitterResultUrl:t.search_metadata.next_results}}),(function(){var t=e.state.visiblePosts;t.twitter=e.state.twitterPosts.splice(0,4),e.setState({visiblePosts:t})}))})).catch((function(e){console.log(e)}))}},{key:"searchInstagram",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"blacklivesmatter",a=this.state.nextInstagramResultUrl?"https://www.instagram.com/explore/tags/"+t+"/?__a=1&max_id="+this.state.nextInstagramResultUrl:"https://www.instagram.com/explore/tags/"+t+"/?__a=1";fetch(a).then((function(t){return t.ok?t.json():(console.log("Instagram request failed: "+a),{graphql:{hashtag:{edge_hashtag_to_media:{edges:e.state.instagramPosts,page_info:{end_cursor:e.state.nextInstagramResultUrl}}}}})})).then((function(t){return e.setState((function(e){return{instagramPosts:[].concat(Object(c.a)(e.instagramPosts),Object(c.a)(t.graphql.hashtag.edge_hashtag_to_media.edges)),nextInstagramResultUrl:t.graphql.hashtag.edge_hashtag_to_media.page_info.end_cursor}}),(function(){var t=e.state.visiblePosts;t.instagram=e.state.instagramPosts.splice(0,4),e.setState({visiblePosts:t})}))})).catch((function(e){console.log(e)}))}},{key:"searchNews",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"BlackLivesMatter",a="https://prince25.pythonanywhere.com/news?q="+t+"&s="+12..toString()+"&p="+this.state.newsPage.toString()+"&k=879248ecbcc04ce1a9bf0fef399076ff";fetch(a).then((function(t){return t.ok?t.json():(console.log("News request failed: "+a),{articles:e.state.newsPosts})})).then((function(t){return e.setState((function(e){return{newsPosts:[].concat(Object(c.a)(e.newsPosts),Object(c.a)(t.articles)),newsPage:e.newsPage++}}),(function(){var t=e.state.visiblePosts;t.news=e.state.newsPosts.splice(0,4),e.setState({visiblePosts:t})}))})).catch((function(e){console.log(e)}))}},{key:"getReddit",value:function(){var e=this;new W({userAgent:navigator.userAgent,clientId:"eXxVqo1QwYCnPA",clientSecret:"RVpziFeyk6daw--Om1lg0_fcb4M",refreshToken:"15814956-UWitrsWFg0gN-iRm1aBD-OYiBZ0"}).getSubreddit("BlackLivesMatter").getHot().then((function(t){return e.setState({redditPosts:t},(function(){var t=e.state.visiblePosts;t.reddit=e.state.redditPosts.length>=4?e.state.redditPosts.splice(0,4):e.state.redditPosts,e.setState({visiblePosts:t})}))})).catch((function(e){return console.log("Reddit wrapper error occured: ",e)}))}},{key:"loadMoreTwitter",value:function(){var e=this;if(this.state.twitterPosts.length<4)this.searchTwitter();else{var t=this.state.visiblePosts;t.twitter=this.state.twitterPosts.splice(0,4),this.setState({isLoading:!0},(function(){return e.setState({visiblePosts:t,isLoading:!1})}))}}},{key:"loadMoreInstagram",value:function(){var e=this;if(this.state.instagramPosts.length<4)this.searchInstagram();else{var t=this.state.visiblePosts;t.instagram=this.state.instagramPosts.splice(0,4),this.setState({isLoading:!0},(function(){return e.setState({visiblePosts:t,isLoading:!1})}))}}},{key:"loadMoreNews",value:function(){var e=this;if(this.state.newsPosts.length<4)this.searchNews();else{var t=this.state.visiblePosts;t.news=this.state.newsPosts.splice(0,4),this.setState({isLoading:!0},(function(){return e.setState({visiblePosts:t,isLoading:!1})}))}}},{key:"loadMoreReddit",value:function(){var e=this,t=this.state.redditPosts.length>=4?this.state.redditPosts.splice(0,4):this.state.redditPosts.splice(0,this.state.redditPosts.length),a=this.state.visiblePosts;a.reddit=t,this.setState({isLoading:!0},(function(){return e.setState({visiblePosts:a,isLoading:!1})}))}},{key:"loadMorePosts",value:function(){this.loadMoreTwitter(),this.loadMoreInstagram()}},{key:"render",value:function(){var e=this,t=q(s.a.createElement(f.a,{color:"secondary",style:{marginTop:20,marginBottom:20}})),a=q(s.a.createElement(g.a,{variant:"outlined",color:"secondary",onClick:function(){return e.loadMorePosts()}},"Load More Social Media")),n=function(e){return q(s.a.createElement(p.a,{color:"secondary",onClick:e},s.a.createElement(k.a,null)))},r=n((function(){return e.loadMoreTwitter()})),i=n((function(){return e.loadMoreInstagram()})),l=n((function(){return e.loadMoreNews()})),o=n((function(){return e.loadMoreReddit()}));return s.a.createElement(b.a,null,s.a.createElement(v.a,{variant:"h4",className:"feedTitle",style:{textAlign:"center",marginTop:40,marginBottom:20,fontWeight:"450"}},"Latest BLM News"),!this.state.isLoading&&this.state.visiblePosts.news&&this.state.visiblePosts.news.length>0?s.a.createElement(E.a,{style:{display:"flex"}},s.a.createElement(T,{className:"feedBox",data:this.state.visiblePosts.news}),s.a.createElement(l,null)):s.a.createElement(t,null),s.a.createElement(w.a,{style:{marginTop:40,marginBottom:40},variant:"middle"}),s.a.createElement(v.a,{variant:"h4",className:"feedTitle",style:{textAlign:"center",fontWeight:"450"}},"Top Reddit Posts"),s.a.createElement(v.a,{variant:"subtitle1",style:{textAlign:"center",marginBottom:20}},"From the ",s.a.createElement("a",{className:"blmLink",href:"https://www.reddit.com/r/BlackLivesMatter/",target:"_blank",rel:"noopener noreferrer"},"BlackLivesMatter")," Subreddit"),!this.state.isLoading&&this.state.visiblePosts.reddit&&this.state.visiblePosts.reddit.length>0?s.a.createElement(E.a,{style:{display:"flex"}},s.a.createElement(G,{className:"feedBox",data:this.state.visiblePosts.reddit}),this.state.redditPosts&&this.state.redditPosts.length>0?s.a.createElement(o,null):null):s.a.createElement(t,null),s.a.createElement(w.a,{style:{marginTop:40,marginBottom:40},variant:"middle"}),s.a.createElement(v.a,{variant:"h4",className:"feedTitle",style:{textAlign:"center",marginBottom:40,fontWeight:"450"}},"Latest Social Media Posts"),!this.state.isLoading&&this.state.visiblePosts.twitter&&this.state.visiblePosts.twitter.length>0?s.a.createElement(E.a,{style:{display:"flex"}},s.a.createElement(B,{className:"feedBox",data:this.state.visiblePosts.twitter}),s.a.createElement(r,null)):s.a.createElement(t,null),!this.state.isLoading&&this.state.visiblePosts.instagram&&this.state.visiblePosts.instagram.length>0?s.a.createElement(E.a,{style:{display:"flex"}},s.a.createElement(L,{className:"feedBox",data:this.state.visiblePosts.instagram}),s.a.createElement(i,null)):s.a.createElement(t,null),s.a.createElement(E.a,{style:{display:"grid",justifyContent:"center",marginBottom:"50px"}},s.a.createElement(a,null)))}}]),a}(n.Component),z=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(b.a,null,s.a.createElement("h1",{style:{textAlign:"center"}},"Uplift Page"),"Black people talking about and black people achievements: Ideas, businesses, apps, etc. ",s.a.createElement("br",null),"Encourage positivity within the black community ",s.a.createElement("br",null),"Can also sign up for positive affirmations to be sent to you(chat bot or texting platform)? ",s.a.createElement("br",null)))}}]),a}(n.Component),V=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(b.a,null,s.a.createElement("h1",{style:{textAlign:"center"}},"Protest Page"),"App or chat bot or website ",s.a.createElement("br",null),"Text/input locations and return nearby protests ",s.a.createElement("br",null),"Could also offer advice on keeping safe  ",s.a.createElement("br",null),"And maybe text you live updates ",s.a.createElement("br",null)))}}]),a}(n.Component),Y=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(b.a,null,s.a.createElement("h1",{style:{textAlign:"center"}},"Action Page"),"Citizens dashboard that allows users to see all their representatives, budgets, pending legislation at the national, state, county and city level ",s.a.createElement("br",null),"Users will be able to see the funding for programs ",s.a.createElement("br",null),"Users will be able to contact their representatives easily ",s.a.createElement("br",null),"Users will be able to see polling locations for primaries, general elections and run-offs ",s.a.createElement("br",null)))}}]),a}(n.Component);function X(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Page not found :("))}var Z=a(187),H=a(188),Q=a(196),$=a(189),K=a(190),ee=q(s.a.createElement("div",{style:{flexGrow:"1"}},s.a.createElement(Z.a,{color:"primary",position:"static"},s.a.createElement(H.a,null,s.a.createElement(Q.a,null,s.a.createElement(l.b,{to:"/about",style:{color:"inherit",textDecoration:"inherit"}},s.a.createElement(j.a,{alt:"About",color:"red",src:"img/navbar_logo.png"})),s.a.createElement($.a,{style:{paddingLeft:"20px"}},s.a.createElement(v.a,{color:"inherit",variant:"button"},s.a.createElement(l.b,{to:"/about",style:{color:"inherit",textDecoration:"inherit"}},"Black Lives Matter")))),s.a.createElement(K.a,null,s.a.createElement(Q.a,null,s.a.createElement($.a,null,s.a.createElement(v.a,{color:"inherit",variant:"button"},s.a.createElement(l.b,{to:"/feed",style:{color:"inherit",textDecoration:"inherit"}},"Feed"))),s.a.createElement($.a,{inset:!0},s.a.createElement(v.a,{color:"inherit",variant:"button"},s.a.createElement(l.b,{to:"/action",style:{color:"inherit",textDecoration:"inherit"}},"Action"))),s.a.createElement($.a,{inset:!0},s.a.createElement(v.a,{color:"inherit",variant:"button"},s.a.createElement(l.b,{to:"/protest",style:{color:"inherit",textDecoration:"inherit"}},"Protest"))),s.a.createElement($.a,{inset:!0},s.a.createElement(v.a,{color:"inherit",variant:"button"},s.a.createElement(l.b,{to:"/",style:{color:"inherit",textDecoration:"inherit"}},"Uplift")))))))));var te=function(){return s.a.createElement("div",null,s.a.createElement(b.a,null,s.a.createElement("h1",{style:{textAlign:"center"}},"About Page"),"// TODO"))};var ae=function(){return s.a.createElement(l.a,{basename:"/team1_2020"},s.a.createElement(ee,null),s.a.createElement(o.c,null,s.a.createElement(o.a,{exact:!0,path:"/",component:z}),s.a.createElement(o.a,{path:"/action",component:Y}),s.a.createElement(o.a,{path:"/protest",component:V}),s.a.createElement(o.a,{path:"/feed",component:J}),s.a.createElement(o.a,{path:"/about",component:te}),s.a.createElement(o.a,{component:X})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e,t,a){},83:function(e,t){},87:function(e,t){}},[[108,1,2]]]);
//# sourceMappingURL=main.8a4060af.chunk.js.map