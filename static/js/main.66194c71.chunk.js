(this.webpackJsonpblm_social_media=this.webpackJsonpblm_social_media||[]).push([[0],{132:function(e,t){},136:function(e,t){},174:function(e,t,a){e.exports=a(272)},190:function(e,t){},199:function(e,t){},207:function(e,t){},213:function(e,t){},215:function(e,t){},223:function(e,t){},271:function(e,t,a){e.exports=a.p+"static/media/README.bff67802.md"},272:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(37),s=a.n(r),l=(a(98),a(34)),o=a(10),c=a(51),m=a(11),u=a(12),d=a(14),h=a(13),g=a(313),f=a(295),p=a(143),b=a(297),v=a(45),w=a(314),y=a(292),k=a(158),E=a.n(k),x=a(288),B=a(290),L=a(291),j=a(312),P=a(293),M=a(294),C=a(41),_=a.n(C),S=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e?e.map((function(e,t){return i.a.createElement(x.a,{item:!0,xs:3,key:t,style:{marginBottom:30,display:"flex"}},i.a.createElement(B.a,{className:"feedGrid",style:{background:"black",display:"inline-flex",justifyContent:"space-between",flexDirection:"column"}},i.a.createElement(L.a,{className:"feedGrid",avatar:i.a.createElement(j.a,{src:e.user.profile_image_url}),title:e.user.name,subheader:e.created_at.substring(0,20),onClick:function(){return window.open("https://www.twitter.com/"+e.user.screen_name,"_blank")}}),i.a.createElement(y.a,{style:{background:"#ffd415"},variant:"middle"}),i.a.createElement(P.a,{className:"feedGrid",style:{margin:"auto 0"}},i.a.createElement(v.a,{className:"feedGrid",variant:"body1"},e.text)),i.a.createElement(y.a,{style:{background:"#ffd415"},variant:"middle"}),i.a.createElement(M.a,{className:"feedGrid",style:{justifyContent:"center"}},i.a.createElement(f.a,{style:{color:"#ffd415",backgroundColor:"black"},onClick:function(){return window.open("https://www.twitter.com/"+e.user.screen_name+"/status/"+e.id_str,"_blank")},endIcon:i.a.createElement(_.a,null)},"Twitter"))))})):null;return i.a.createElement(x.a,{container:!0,spacing:3},t)}}]),a}(n.Component),N=a(296),A=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={fetching:!0,data:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.data,a=[];t&&t.forEach((function(e){return a.push(fetch("https://prince25.pythonanywhere.com/idtoname?id="+e.node.owner.id).then((function(e){return e.json()})))})),t&&Promise.all(a).then((function(a){return n=a,t.forEach((function(t,a){e.setState({data:e.state.data.concat(t)},(function(){var t=e.state.data;t[a].node.owner=Object.assign({},t[a].node.owner,n[a].user),e.setState({data:t})}))})),void e.setState({fetching:!1});var n})).catch((function(e){return console.log("Instgram getUserInfo() Failed:",e)}))}},{key:"render",value:function(){var e=this.state.data&&this.state.data.length>0?this.state.data.map((function(e,t){return i.a.createElement(x.a,{item:!0,xs:3,key:t,style:{marginBottom:30,display:"flex"}},i.a.createElement(B.a,{className:"feedGrid",style:{background:"black",display:"inline-flex",flexDirection:"column",justifyContent:"space-between"}},i.a.createElement(L.a,{className:"feedGrid",avatar:i.a.createElement(j.a,{src:e.node.owner.profile_pic_url}),title:e.node.owner.username,subheader:new Date(e.node.taken_at_timestamp).toLocaleString("en-US"),onClick:function(){return window.open("https://www.instagram.com/"+e.node.owner.username,"_blank")}}),i.a.createElement(N.a,{className:"feedGrid",style:{margin:"auto 0",height:"250px",width:"100%"},image:e.node.display_url}),i.a.createElement(P.a,{className:"feedGrid",style:{margin:"auto 0"}},i.a.createElement(v.a,{variant:"body1"},e.node.edge_media_to_caption.edges[0]?e.node.edge_media_to_caption.edges[0].node.text.length>150?e.node.edge_media_to_caption.edges[0].node.text.substring(0,150)+"...":e.node.edge_media_to_caption.edges[0].node.text:null)),i.a.createElement(M.a,{className:"feedGrid",style:{justifyContent:"center"}},i.a.createElement(f.a,{style:{color:"#ffd415",backgroundColor:"black"},onClick:function(){return window.open("https://www.instagram.com/p/"+e.node.shortcode,"_blank")},endIcon:i.a.createElement(_.a,null)},"Instagram"))))})):null;return i.a.createElement("div",null,this.state.fetching?i.a.createElement(b.a,{style:{width:"100vw",maxWidth:"1232px",padding:0}},i.a.createElement(g.a,{style:{marginTop:0,marginBottom:0}})):i.a.createElement(x.a,{container:!0,spacing:3},e))}}]),a}(n.Component),O=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e?e.map((function(e,t){return i.a.createElement(x.a,{item:!0,xs:3,key:t,style:{marginBottom:30,display:"flex"}},i.a.createElement(B.a,{className:"feedGrid",style:{background:"black",display:"inline-flex",justifyContent:"space-between",flexDirection:"column"}},i.a.createElement(L.a,{className:"feedGrid",title:i.a.createElement(v.a,{variant:"subtitle2"},e.title),subheader:i.a.createElement(v.a,{variant:"overline"},e.publishedAt),onClick:function(){return window.open(e.url,"_blank")}}),i.a.createElement(N.a,{className:"feedGrid",style:{margin:"auto 0",height:"250px",width:"100%"},image:e.urlToImage?e.urlToImage:"https://blacklivesmatter.com/wp-content/themes/blm/dist/images/logo-black-lives-matter.png"}),i.a.createElement(P.a,{className:"feedGrid",style:{margin:"auto 0"}},i.a.createElement(v.a,{className:"feedGrid",variant:"body2"},e.description)),i.a.createElement(M.a,{className:"feedGrid",style:{justifyContent:"center"}},i.a.createElement(f.a,{style:{color:"#ffd415",backgroundColor:"black"},onClick:function(){return window.open(e.url,"_blank")},endIcon:i.a.createElement(_.a,null)},e.source.name))))})):null;return i.a.createElement(x.a,{container:!0,spacing:3},t)}}]),a}(n.Component),T=a(157),I=a.n(T),D=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e?e.map((function(e,t){return i.a.createElement(x.a,{item:!0,xs:3,key:t,style:{marginBottom:30,display:"flex"}},i.a.createElement(B.a,{className:"feedGrid",style:{background:"black",display:"inline-flex",justifyContent:"space-between",flexDirection:"column",width:"100%"}},i.a.createElement(L.a,{className:"feedGrid",title:i.a.createElement(v.a,{variant:"h6"},e.title),subheader:i.a.createElement(v.a,{variant:"caption"},"by ",e.author.name," on ",e.created_utc),onClick:function(){return window.open("https://www.reddit.com"+e.permalink,"_blank")}}),i.a.createElement(M.a,{className:"feedGrid",style:{justifyContent:"center"}},i.a.createElement(w.a,{className:"feedGrid",style:{display:"grid",justifyItems:"center"}},i.a.createElement(I.a,{style:{color:"#ffd415",backgroundColor:"black"}}),i.a.createElement(v.a,{style:{color:"#ffd415",backgroundColor:"black"},variant:"caption"},e.score," Upvotes")),i.a.createElement(f.a,{style:{color:"#ffd415",backgroundColor:"black"},onClick:function(){return window.open("https://www.reddit.com"+e.permalink,"_blank")},endIcon:i.a.createElement(_.a,null)},"Reddit"))))})):null;return i.a.createElement(x.a,{container:!0,spacing:3},t)}}]),a}(n.Component),G=a(299),R=a(165),F={primary:{main:"#000000",contrastText:"#FFC107"},secondary:{main:"#FFC107"}},W="BLM_Theme";function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:W;return F=t,W=a,function(){return i.a.createElement(G.a,{theme:Object(R.a)({palette:F,themeName:W})},e)}}var U=a(182),Y=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={isLoading:!0,twitterPosts:[],nextTwitterResultUrl:null,instagramPosts:[],nextInstagramResultUrl:null,newsPosts:[],newsPage:1,redditPosts:[],visiblePosts:{}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.searchTwitter(),this.searchInstagram(),this.searchNews(),this.getReddit();var t=setInterval((function(){e.state.visiblePosts.instagram&&e.state.visiblePosts.twitter&&e.state.visiblePosts.news&&e.state.visiblePosts.reddit&&(e.setState({isLoading:!1}),clearInterval(t))}),100)}},{key:"searchTwitter",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:'BLM OR "Black Lives Matter"',a="https://cors-anywhere.herokuapp.com/",n=this.state.nextTwitterResultUrl?"https://api.twitter.com/1.1/search/tweets.json"+this.state.nextTwitterResultUrl:"https://api.twitter.com/1.1/search/tweets.json?q="+t+"&lang=en&result_type=mixed&include_entities=1&count="+12..toString();fetch(a+n,{headers:{Authorization:"Bearer AAAAAAAAAAAAAAAAAAAAAGNdFwEAAAAAgGB%2BLjWg050eg%2B3GcJ2YbbSJ6N0%3DaJDTLCsAa9mmXPFOccInSk1969hRfbVRbZxszTyek5LGcVTrlh"}}).then((function(t){return t.ok?t.json():(console.log("Twitter request failed: "+n),{statuses:e.state.twitterPosts,search_metadata:{next_results:e.state.nextTwitterResultUrl}})})).then((function(t){return e.setState((function(e){return{twitterPosts:[].concat(Object(c.a)(e.twitterPosts),Object(c.a)(t.statuses)),nextTwitterResultUrl:t.search_metadata.next_results}}),(function(){var t=e.state.visiblePosts;t.twitter=e.state.twitterPosts.splice(0,4),e.setState({visiblePosts:t})}))})).catch((function(e){console.log(e)}))}},{key:"searchInstagram",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"blacklivesmatter",a=this.state.nextInstagramResultUrl?"https://www.instagram.com/explore/tags/"+t+"/?__a=1&max_id="+this.state.nextInstagramResultUrl:"https://www.instagram.com/explore/tags/"+t+"/?__a=1";fetch(a).then((function(t){return t.ok?t.json():(console.log("Instagram request failed: "+a),{graphql:{hashtag:{edge_hashtag_to_media:{edges:e.state.instagramPosts,page_info:{end_cursor:e.state.nextInstagramResultUrl}}}}})})).then((function(t){return e.setState((function(e){return{instagramPosts:[].concat(Object(c.a)(e.instagramPosts),Object(c.a)(t.graphql.hashtag.edge_hashtag_to_media.edges)),nextInstagramResultUrl:t.graphql.hashtag.edge_hashtag_to_media.page_info.end_cursor}}),(function(){var t=e.state.visiblePosts;t.instagram=e.state.instagramPosts.splice(0,4),e.setState({visiblePosts:t})}))})).catch((function(e){console.log(e)}))}},{key:"searchNews",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"BlackLivesMatter",a="https://prince25.pythonanywhere.com/news?q="+t+"&s="+12..toString()+"&p="+this.state.newsPage.toString()+"&k=879248ecbcc04ce1a9bf0fef399076ff";fetch(a).then((function(t){return t.ok?t.json():(console.log("News request failed: "+a),{articles:e.state.newsPosts})})).then((function(t){return e.setState((function(e){return{newsPosts:[].concat(Object(c.a)(e.newsPosts),Object(c.a)(t.articles)),newsPage:e.newsPage++}}),(function(){var t=e.state.visiblePosts;t.news=e.state.newsPosts.splice(0,4),e.setState({visiblePosts:t})}))})).catch((function(e){console.log(e)}))}},{key:"getReddit",value:function(){var e=this;new U({userAgent:navigator.userAgent,clientId:"eXxVqo1QwYCnPA",clientSecret:"RVpziFeyk6daw--Om1lg0_fcb4M",refreshToken:"15814956-UWitrsWFg0gN-iRm1aBD-OYiBZ0"}).getSubreddit("BlackLivesMatter").getHot().then((function(t){return e.setState({redditPosts:t},(function(){var t=e.state.visiblePosts;t.reddit=e.state.redditPosts.length>=4?e.state.redditPosts.splice(0,4):e.state.redditPosts,e.setState({visiblePosts:t})}))})).catch((function(e){return console.log("Reddit wrapper error occured: ",e)}))}},{key:"loadMoreTwitter",value:function(){var e=this;if(this.state.twitterPosts.length<4)this.searchTwitter();else{var t=this.state.visiblePosts;t.twitter=this.state.twitterPosts.splice(0,4),this.setState({isLoading:!0},(function(){return e.setState({visiblePosts:t,isLoading:!1})}))}}},{key:"loadMoreInstagram",value:function(){var e=this;if(this.state.instagramPosts.length<4)this.searchInstagram();else{var t=this.state.visiblePosts;t.instagram=this.state.instagramPosts.splice(0,4),this.setState({isLoading:!0},(function(){return e.setState({visiblePosts:t,isLoading:!1})}))}}},{key:"loadMoreNews",value:function(){var e=this;if(this.state.newsPosts.length<4)this.searchNews();else{var t=this.state.visiblePosts;t.news=this.state.newsPosts.splice(0,4),this.setState({isLoading:!0},(function(){return e.setState({visiblePosts:t,isLoading:!1})}))}}},{key:"loadMoreReddit",value:function(){var e=this,t=this.state.redditPosts.length>=4?this.state.redditPosts.splice(0,4):this.state.redditPosts.splice(0,this.state.redditPosts.length),a=this.state.visiblePosts;a.reddit=t,this.setState({isLoading:!0},(function(){return e.setState({visiblePosts:a,isLoading:!1})}))}},{key:"loadMorePosts",value:function(){this.loadMoreTwitter(),this.loadMoreInstagram()}},{key:"render",value:function(){var e=this,t=q(i.a.createElement(g.a,{color:"secondary",style:{marginTop:20,marginBottom:20}})),a=q(i.a.createElement(f.a,{variant:"outlined",color:"secondary",className:"blmLink",onClick:function(){return e.loadMorePosts()}},"Load More Social Media")),n=function(e){return q(i.a.createElement(p.a,{className:"blmLink",color:"secondary",onClick:e},i.a.createElement(E.a,null)))},r=n((function(){return e.loadMoreTwitter()})),s=n((function(){return e.loadMoreInstagram()})),l=n((function(){return e.loadMoreNews()})),o=n((function(){return e.loadMoreReddit()}));return i.a.createElement(b.a,null,i.a.createElement(v.a,{variant:"h4",className:"feedTitle",style:{textAlign:"center",marginTop:40,marginBottom:20,fontWeight:"450"}},"Latest Black Lives Matter News"),!this.state.isLoading&&this.state.visiblePosts.news&&this.state.visiblePosts.news.length>0?i.a.createElement(w.a,{style:{display:"flex"}},i.a.createElement(O,{className:"feedBox",data:this.state.visiblePosts.news}),i.a.createElement(l,null)):i.a.createElement(t,null),i.a.createElement(y.a,{style:{marginTop:40,marginBottom:40},variant:"middle"}),i.a.createElement(v.a,{variant:"h4",className:"feedTitle",style:{textAlign:"center",fontWeight:"450"}},"Top Reddit Posts"),i.a.createElement(v.a,{variant:"subtitle1",className:"feedTitle",style:{textAlign:"center",marginBottom:20,fontWeight:"450"}},"from the ",i.a.createElement("a",{className:"blmLink",href:"https://www.reddit.com/r/BlackLivesMatter/",target:"_blank",rel:"noopener noreferrer"},"BlackLivesMatter")," subreddit"),!this.state.isLoading&&this.state.visiblePosts.reddit&&this.state.visiblePosts.reddit.length>0?i.a.createElement(w.a,{style:{display:"flex"}},i.a.createElement(D,{className:"feedBox",data:this.state.visiblePosts.reddit}),this.state.redditPosts&&this.state.redditPosts.length>0?i.a.createElement(o,null):null):i.a.createElement(t,null),i.a.createElement(y.a,{style:{marginTop:40,marginBottom:40},variant:"middle"}),i.a.createElement(v.a,{variant:"h4",className:"feedTitle",style:{textAlign:"center",fontWeight:"450",paddingBottom:"0"}},"Latest Social Media Posts"),i.a.createElement(v.a,{variant:"subtitle1",className:"feedTitle",style:{textAlign:"center",marginBottom:20,fontWeight:"450"}},"with the #BlackLivesMatter hashtag "),!this.state.isLoading&&this.state.visiblePosts.twitter&&this.state.visiblePosts.twitter.length>0?i.a.createElement(w.a,{style:{display:"flex"}},i.a.createElement(S,{className:"feedBox",data:this.state.visiblePosts.twitter}),i.a.createElement(r,null)):i.a.createElement(t,null),!this.state.isLoading&&this.state.visiblePosts.instagram&&this.state.visiblePosts.instagram.length>0?i.a.createElement(w.a,{style:{display:"flex"}},i.a.createElement(A,{className:"feedBox",data:this.state.visiblePosts.instagram}),i.a.createElement(s,null)):i.a.createElement(t,null),i.a.createElement(w.a,{style:{display:"grid",justifyContent:"center",marginBottom:"50px"}},i.a.createElement(a,null)))}}]),a}(n.Component),z=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e?e.map((function(e,t){return i.a.createElement(x.a,{item:!0,xs:3,key:t,style:{marginBottom:30,display:"flex"}},i.a.createElement(B.a,{style:{display:"inline-flex",justifyContent:"space-between",flexDirection:"column"}},i.a.createElement(L.a,{title:i.a.createElement(v.a,{variant:"subtitle1"},e.name),subheader:i.a.createElement(v.a,{variant:"overline",style:{textAlign:"center"}},e.categories[0].title),onClick:function(){return window.open(e.url,"_blank")}}),i.a.createElement(N.a,{style:{height:"250px",width:"300px"},image:e.image_url?e.image_url:"https://blacklivesmatter.com/wp-content/themes/blm/dist/images/logo-black-lives-matter.png"}),i.a.createElement(P.a,null,i.a.createElement(v.a,{display:"block",variant:"caption"},e.price),i.a.createElement(v.a,{display:"block",variant:"caption"},"Rating:  "+e.rating+" \n"),i.a.createElement(v.a,{variant:"subtitle2"},e.location.address1),i.a.createElement(v.a,{variant:"subtitle2"},e?"Phone Number:"+e.display_phone:""),i.a.createElement(v.a,{variant:"subtitle2"},Math.round(e.distance)+" miles away"),i.a.createElement(v.a,null,e.transactions.map((function(e,t){return i.a.createElement(v.a,{variant:"overline",key:t},e+"    ")})))),i.a.createElement(y.a,{variant:"middle"})))})):null;return i.a.createElement(x.a,{container:!0,spacing:3},t)}}]),a}(n.Component),H=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={longitude:0,latitude:0,accuracy:0,city:"",blackBusinesses:[]},e}return Object(u.a)(a,[{key:"searchYelp",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Black-owned",a=new Headers,n="https://api.yelp.com/v3/businesses/search?term=",i="https://cors-anywhere.herokuapp.com/";a.append("Authorization","Bearer joCHI4iyiFsdWXevs76e3NDMoand-ZtkGOse3e-nPQXFJmsiP8gbwILFJawdYlQzrJgU1HqHyNuA9q2HqAkcIhnlpc60y1jRlkF3imHgNU4DTlgM4au8YGaP7wsiX3Yx");var r={method:"GET",headers:a,redirect:"follow"},s=this.state.city?i+n+t+"&location="+this.state.city:i+n+t;fetch(s,r).then((function(e){if(e.ok)return e.json();console.log("Yelp reqeust failed")})).then((function(t){return e.setState({blackBusinesses:t.businesses})})).catch((function(e){return console.log("error:",e)}))}},{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){var a=t.coords;e.setState({longitude:a.longitude,latitude:a.latitude,accuracy:a.accuracy});var n="https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBEGXXeTtGtKQ5scEjWgpqhQKogHyx92OE&latlng="+e.state.latitude.toString()+","+e.state.longitude.toString();fetch(n).then((function(e){return e.json()})).then((function(t){var a=t.results[2].address_components[1].long_name;e.setState({city:a}),e.searchYelp()}))}),(function(t){var a=["New York","Miami","San Diego","Atlanta","Seattle","Chicago","Dallas","San Jose"],n=Math.floor(Math.random()*a.length);e.setState({city:a[n]}),e.searchYelp()}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})}},{key:"render",value:function(){var e=q(i.a.createElement(g.a,{color:"secondary",style:{marginTop:20,marginBottom:20}}));return i.a.createElement(b.a,null,i.a.createElement(v.a,{variant:"h4",className:"feedTitle",style:{textAlign:"center",marginTop:40,fontWeight:"450"}},"Black-owned Businesses"),i.a.createElement(v.a,{variant:"subtitle2",style:{textAlign:"center",marginBottom:20}},"Local businesses that are run by black families or support the ",i.a.createElement("span",{className:"feedTitle",style:{fontWeight:"450"}},"Black Lives Matter")," movement"),this.state.blackBusinesses&&this.state.blackBusinesses.length>0?i.a.createElement(z,{data:this.state.blackBusinesses}):i.a.createElement(e,null))}}]),a}(n.Component),J=a(159),X=a.n(J),K=a(160),V=a.n(K),Q=a(92),$=a.n(Q),Z=a(93),ee=a.n(Z),te=a(161),ae=a.n(te),ne=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.chapters,t=e?e.map((function(e,t){return i.a.createElement(x.a,{item:!0,xs:4,key:t,style:{marginBottom:30}},i.a.createElement(B.a,{className:"feedGrid",style:{display:"block",justifyContent:"space-between",flexDirection:"column"}},i.a.createElement(L.a,{className:"feedGrid",title:""!==e.city?e.city:e.state,subheader:i.a.createElement(v.a,{className:"feedGrid"},e.state)}),i.a.createElement(N.a,{component:"img",alt:"City Logo",image:e.image}),i.a.createElement(M.a,{className:"feedGrid",style:{justifyContent:"center"}},e.website?i.a.createElement(f.a,{style:{color:"#ffd415",backgroundColor:"black"},onClick:function(){return window.open("https://www."+e.website,"_blank")}},"Website"):null,e.email?i.a.createElement(p.a,{style:{color:"#ffd415",backgroundColor:"black"},onClick:function(){return window.open("mailto: "+e.email)}},i.a.createElement(V.a,null)):null,e.twitter?i.a.createElement(p.a,{style:{color:"#ffd415",backgroundColor:"black"},onClick:function(){return window.open("https://www."+e.twitter,"_blank")}},i.a.createElement($.a,null)):null,e.facebook?i.a.createElement(p.a,{style:{color:"#ffd415",backgroundColor:"black"},onClick:function(){return window.open("https://www."+e.facebook,"_blank")}},i.a.createElement(ee.a,null)):null,e.instagram?i.a.createElement(p.a,{style:{color:"#ffd415",backgroundColor:"black"},onClick:function(){return window.open("https://www."+e.instagram,"_blank")}},i.a.createElement(ae.a,null)):null)))})):null;return i.a.createElement(x.a,{container:!0,spacing:3},t)}}]),a}(n.Component),ie=[{city:"Boston",state:"Massachusetts",twitter:"twitter.com/BLMBoston",website:"BlackLivesMatterBoston.org",email:"boston@blacklivesmatter.com",facebook:"facebook.com/BLMBoston",instagram:null,image:"https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-boston-250x243-01.png"},{city:"Chicago",state:"Illinois",twitter:"twitter.com/BLMChi",website:"BlackLivesMatterChicago.com",email:null,facebook:"facebook.com/BLMChi",instagram:"instagram.com/BLMChi",image:"https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-chicago-250x244-01.png"},{city:"Washington DC",state:"District of Columbia",twitter:"twitter.com/DMVBlackLives",website:"BlackLivesMatterDMV.org",email:"info@dcblm.org",facebook:"facebook.com/BLMDC",instagram:"instagram.com/BlackLivesMatterDC",image:"https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-dc-250x244-01.png"},{city:"Denver",state:"Colorado",twitter:"twitter.com/BLM5280",website:"BlackLivesMatter5280.WordPress.com",email:"blacklivesmatter5280@gmail.com",facebook:"facebook.com/BlackLivesMatter5280",instagram:"instagram.com/BLM5280",image:"https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-denver-250x244-01.png"},{city:"Detroit",state:"Michigan",twitter:"twitter.com/DetroitBLM",website:"BLMDetroit.com",email:"leadership@blmdetroit.com",facebook:"facebook.com/DetroitBLM",instagram:null,image:"https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-detroit-250x243-01.png"},{city:"Los Angeles",state:"California",twitter:"twitter.com/BLMLA",website:"BLMLA.org",email:"emailblmla@gmail.com",facebook:"facebook.com/BLMLA",instagram:"instagram.com/BLMLosAngeles",image:"https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-la-250x243-01.png"},{city:"Lansing",state:"Michigan",twitter:"twitter.com/BLMLansing",website:"liberationpac.org/BLMLansing",email:null,facebook:"facebook.com/BLMLansing",instagram:null,image:"https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-lansing-250x244-01.png"},{city:"Long Beach",state:"California",twitter:"twitter.com/BLMLBC",website:"blmlbc.org",email:"lbcblacklivesmatter@gmail.com",facebook:"facebook.com/Groups/BlackLivesMatterLBC",instagram:"instagram.com/BLMLBC",image:"https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-long-beach-250x244-01.png"},{city:"Memphis",state:"Tennessee",twitter:"twitter.com/blm_memphis",website:null,email:"blacklivesmattermemphis@gmail.com",facebook:"facebook.com/blmmemphis",instagram:null,image:"https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-memphis-250x244-01.png"},{city:"",state:"Michigan",twitter:"twitter.com/BLMMichigan",website:null,email:null,facebook:"facebook.com/BLMMichigan",instagram:"instagram.com/blmmichigan",image:"https://blacklivesmatter.com/wp-content/uploads/2020/07/blm-chapter-logo-michigan-250x243-01.png"},{city:"Nashville",state:"Tennessee",twitter:"twitter.com/BLM_Nashville",website:"BlackLivesMatterNashville.WordPress.com",email:null,facebook:"facebook.com/BlackLivesMatterNashville",instagram:"instagram.com/BLM_Nashville",image:"https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-nashville-250x244-01.png"},{city:"New York",state:"New York",twitter:"twitter.com/BLMNYC",website:null,email:null,facebook:"facebook.com/BlackLivesMatter",instagram:"instagram.com/BLMNYC",image:"https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-nyc-250x243-01.png"},{city:"Philadelphia",state:"Pennsylvania",twitter:"twitter.com/BLMPhilly",website:"BLMPhilly.com",email:"BlackLivesMatterPhilly@Gmail.com",facebook:"facebook.com/BlackLivesMatterPhilly",instagram:"instagram.com/BLMPhilly",image:"https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-philly-250x243-01.png"},{city:"South Bend",state:"Indiana",twitter:"twitter.com/BLMPhilly",website:"BLMPhilly.com",email:"blm.southbend@gmail.com",facebook:"facebook.com/BlackLMSouthBend",instagram:null,image:"https://blacklivesmatter.com/wp-content/uploads/2020/04/blm-chapter-logo-south-bend-250x243-01.png"}],re=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={chaptersToShow:ie,search:""},e}return Object(u.a)(a,[{key:"handleSearch",value:function(e){this.setState({search:e});var t=ie.filter((function(t){return t.city.toLowerCase().includes(e.toLowerCase())||t.state.toLowerCase().includes(e)}));this.setState({chaptersToShow:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(b.a,null,i.a.createElement(v.a,{variant:"h4",className:"feedTitle",style:{textAlign:"center",marginTop:40,fontWeight:"450"}},"nationwide Black Live Matter chapters"),i.a.createElement(v.a,{variant:"subtitle2",style:{textAlign:"center",marginBottom:20}},"As charted by the official ",i.a.createElement("a",{className:"blmLink",href:"https://blacklivesmatter.com/chapters/",target:"_blank",rel:"noopener noreferrer"},"BlackLivesMatter")," website."),i.a.createElement(X.a,{placeholder:"Search for a chapter...",style:{margin:"0 auto",marginBottom:"40px",width:"50%"},value:this.state.search,onChange:function(t){return e.handleSearch(t)},onCancelSearch:function(){return e.setState({chaptersToShow:ie})}}),this.state.chaptersToShow.length>0?i.a.createElement(ne,{chapters:this.state.chaptersToShow}):i.a.createElement(v.a,{variant:"h6",className:"feedTitle",style:{textAlign:"center"}},"no chapters found.",i.a.createElement("br",null),"try looking on the official BlackLivesMatter ",i.a.createElement("a",{className:"blmLink",href:"https://blacklivesmatter.com/chapters/",target:"_blank",rel:"noopener noreferrer"},"chapters")," page.")))}}]),a}(n.Component),se=a(62),le=a.n(se),oe=a(112),ce=a(5),me=a(162),ue=a.n(me),de=a(300),he=a(91),ge=a(311),fe=a(111),pe=a.n(fe),be=Object(de.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",width:400},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}));function ve(e){var t=be();return i.a.createElement(he.a,{className:t.root},i.a.createElement(ge.a,{className:t.input,value:e.value,placeholder:"Type your location",inputProps:{"aria-label":"location"},onChange:e.onChange}),i.a.createElement(p.a,{type:"submit",className:t.iconButton,"aria-label":"search"},i.a.createElement(pe.a,null)))}var we=a(70),ye=a.n(we),ke=a(163),Ee=a.n(ke),xe=Object(de.a)((function(e){return{paper:{textAlign:"center",color:e.palette.text.secondary},statereps:{height:e.spacing(15),weight:e.spacing(15),padding:e.spacing(5),minHeight:"50vh"},social:{display:"flex",flexDirection:"row",justifyContent:"center"},avatar:{display:"flex",textAlign:"center",justifyContent:"center",alignItems:"center",alignContent:"center","& > *":{margin:e.spacing(1)}},grid:{padding:e.spacing(5)}}})),Be=function(e){function t(e){window.open(e,"_blank")}var a=xe();return i.a.createElement(x.a,{item:!0,xs:!0},i.a.createElement("div",{className:a.statereps},i.a.createElement(he.a,{className:a.paper},i.a.createElement("div",{className:a.avatar},i.a.createElement(j.a,null,"M")),i.a.createElement("h3",null,e.title),i.a.createElement("h4",null,e.figure.name),i.a.createElement("h5",null,"Phone: ",e.figure.phone),i.a.createElement("div",{className:a.social},i.a.createElement(p.a,{onClick:function(){return t("http://twitter.com/"+e.figure.channels[1].id)}},i.a.createElement($.a,null)),i.a.createElement(p.a,{onClick:function(){return t("http://facebook.com/"+e.figure.channels[0].id)}},i.a.createElement(ee.a,null)),i.a.createElement(p.a,{onClick:function(){return t(e.figure.urls[0])}},i.a.createElement(Ee.a,null))))))},Le=a(302),je=a(306),Pe=a(305),Me=a(301),Ce=a(303),_e=a(304),Se=Object(de.a)({table:{minWidth:650}});var Ne=function(e){for(var t,a,n,r,s,l=Se(),o=[],c=0;c<e.bills.length;c++)o.push((t=e.bills[c].node.identifier,a=e.bills[c].node.classification,n=e.bills[c].node.session,r=e.bills[c].node.title,s=e.bills[c].node.sources[0].url,{bid:t,classif:a,session:n,title:r,source:s}));return i.a.createElement(Me.a,{component:he.a},i.a.createElement(Le.a,{className:l.table,"aria-label":"simple table"},i.a.createElement(Ce.a,null,i.a.createElement(_e.a,null,i.a.createElement(Pe.a,null,"Bill ID"),i.a.createElement(Pe.a,{align:"right"},"Classification"),i.a.createElement(Pe.a,{align:"right"},"Legislative Session"),i.a.createElement(Pe.a,{align:"right"},"Title"),i.a.createElement(Pe.a,{align:"right"},"Source"))),i.a.createElement(je.a,null,o.map((function(e){return i.a.createElement(_e.a,{key:e.bid},i.a.createElement(Pe.a,{component:"th",scope:"row"},e.bid),i.a.createElement(Pe.a,{align:"right"},e.classif),i.a.createElement(Pe.a,{align:"right"},e.session),i.a.createElement(Pe.a,{align:"right"},e.title),i.a.createElement(Pe.a,{align:"right"},e.source))})))))},Ae=ue.a.create({baseURL:"https://openstates.org/graphql/",headers:{"X-API-KEY":"ef262b58-a305-4bba-8cc5-764a9ced1405"}}),Oe=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).onSubmit=function(t){t.preventDefault(),ye.a.fromAddress(e.state.address).then((function(t){if("OK"===t.status){var a=t.results[0].geometry.location,n=a.lat,i=a.lng,r=t.results[0].address_components.filter((function(e){return e.types&&e.types.includes("administrative_area_level_1")}))[0].long_name;e.setState({lati:n,logi:i,longaddy:t.results[0].formatted_address,usstate:r},(function(){e.onFetchFromOpenStates(),e.fetchCivicInfo()}))}})).catch((function(e){console.error(e)}))},e.state={address:null,bills:null,usstate:null,lati:null,logi:null,longaddy:null,fedrep:null,staterep:null,statesen:null,fedsen1:null,fedsen2:null,gov:null,ltgov:null,isready:!1,isready1:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){ye.a.setApiKey("AIzaSyACD21gEm0jdeRklb6qo4O31k39x9brz8U"),ye.a.setLanguage("en"),ye.a.enableDebug()}},{key:"fetchCivicInfo",value:function(){var e=Object(oe.a)(le.a.mark((function e(){var t=this;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyD9MzWFIJ0TltXFjxRbZ38N5dRgTCxJKzE&address="+this.state.longaddy).then((function(e){return e.json()})).then((function(e){t.setState({staterep:e.officials[7],statesen:e.officials[8],fedrep:e.officials[4],fedsen1:e.officials[2],fedsen2:e.officials[3],gov:e.officials[5],ltgov:e.officials[6],isready:!0})}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onFetchFromOpenStates",value:function(){var e=Object(oe.a)(le.a.mark((function e(){var t,a=this;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.usstate," query($juris: String)   {\n      search_1: bills(first: 5, jurisdiction: $juris) {\n        edges {\n          node {\n            id\n            identifier\n            title\n            classification\n            updatedAt\n            createdAt\n            legislativeSession {\n              identifier\n              jurisdiction {\n                name\n              }\n            }\n            actions {\n              date\n              description\n              classification\n            }\n            documents {\n              date\n              note\n              links {\n                url\n              }\n            }\n            versions {\n              date\n              note\n              links {\n                url\n              }\n            }\n            sources {\n              url\n              note\n                \n            }\n          }\n        }\n      }\n    }",e.abrupt("return",new Promise((function(e,n){Ae.post("",{query:" query($juris: String)   {\n      search_1: bills(first: 5, jurisdiction: $juris) {\n        edges {\n          node {\n            id\n            identifier\n            title\n            classification\n            updatedAt\n            createdAt\n            legislativeSession {\n              identifier\n              jurisdiction {\n                name\n              }\n            }\n            actions {\n              date\n              description\n              classification\n            }\n            documents {\n              date\n              note\n              links {\n                url\n              }\n            }\n            versions {\n              date\n              note\n              links {\n                url\n              }\n            }\n            sources {\n              url\n              note\n                \n            }\n          }\n        }\n      }\n    }",variables:{juris:t}}).then((function(t){return a.setState({bills:t.data.data.search_1.edges,isready1:!0}),e(!0),t})).catch((function(e){throw console.error(e),n(!0),e}))})));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.classes;return i.a.createElement("div",{className:t.parent},i.a.createElement(b.a,null,i.a.createElement("h1",null,"Find Your Representatives"),i.a.createElement("h2",null,"Please Type In Your Address"),i.a.createElement("div",{className:t.search},i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement(ve,{type:"text",name:"address",value:this.state.address||"",onChange:function(t){return e.setState({address:t.target.value})}}))),this.state.isready&&i.a.createElement("div",null,i.a.createElement(x.a,{container:!0,spacing:4},i.a.createElement(Be,{figure:this.state.fedrep,title:"Federal Representative"}),i.a.createElement(Be,{figure:this.state.fedsen1,title:"Federal Senator"}),i.a.createElement(Be,{figure:this.state.fedsen2,title:"Federal Senator"}),i.a.createElement(Be,{figure:this.state.staterep,title:"State Representative"})),i.a.createElement(x.a,{container:!0,spacing:3},i.a.createElement(Be,{figure:this.state.statesen,title:"State Senator"}),i.a.createElement(Be,{figure:this.state.gov,title:"Governor"}),i.a.createElement(Be,{figure:this.state.ltgov,title:"Lt. Governor"}))),this.state.isready1&&i.a.createElement(Ne,{bills:this.state.bills})))}}]),a}(n.Component),Te=Object(ce.a)((function(e){return{root:{flexGrow:1},search:{padding:e.spacing(4),display:"flex",textAlign:"center",justifyContent:"center",alignItems:"center",alignContent:"center"},parent:{textAlign:"center",justifyContent:"center",alignItems:"center",alignContent:"center"},column:{padding:e.spacing(10)},row:{paddingTop:e.spacing(10)}}}))(Oe);function Ie(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Page not found :("))}var De=a(307),Ge=a(308),Re=a(315),Fe=a(309),We=a(310),qe=q(i.a.createElement("div",{style:{flexGrow:"1"}},i.a.createElement(De.a,{color:"primary",position:"static"},i.a.createElement(Ge.a,null,i.a.createElement(Re.a,null,i.a.createElement(l.b,{to:"/about",style:{color:"inherit",textDecoration:"inherit"}},i.a.createElement(j.a,{alt:"About",color:"red",src:"img/navbar_logo.png"})),i.a.createElement(Fe.a,{style:{paddingLeft:"20px"}},i.a.createElement(v.a,{color:"inherit",variant:"button"},i.a.createElement(l.b,{to:"/about",style:{color:"inherit",textDecoration:"inherit"}},"Black Lives Matter")))),i.a.createElement(We.a,null,i.a.createElement(Re.a,null,i.a.createElement(Fe.a,null,i.a.createElement(v.a,{color:"inherit",variant:"button"},i.a.createElement(l.b,{to:"/feed",style:{color:"inherit",textDecoration:"inherit"}},"Feed"))),i.a.createElement(Fe.a,{inset:!0},i.a.createElement(v.a,{color:"inherit",variant:"button"},i.a.createElement(l.b,{to:"/action",style:{color:"inherit",textDecoration:"inherit"}},"Action"))),i.a.createElement(Fe.a,{inset:!0},i.a.createElement(v.a,{color:"inherit",variant:"button"},i.a.createElement(l.b,{to:"/protest",style:{color:"inherit",textDecoration:"inherit"}},"Protest"))),i.a.createElement(Fe.a,{inset:!0},i.a.createElement(v.a,{color:"inherit",variant:"button"},i.a.createElement(l.b,{to:"/",style:{color:"inherit",textDecoration:"inherit"}},"Uplift"))))))))),Ue=a(166),Ye=a(164),ze=a.n(Ye);var He=function(){var e=Object(n.useState)(0),t=Object(Ue.a)(e,2),r=t[0],s=t[1];return Object(n.useEffect)((function(){var e=a(271);fetch(e).then((function(e){return e.text()})).then((function(e){return s(ze()(e))})).catch((function(e){return console.log(e)}))})),i.a.createElement(b.a,null,i.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}}))};var Je=function(){return i.a.createElement(l.a,{basename:"/team1_2020"},i.a.createElement(qe,null),i.a.createElement(o.c,null,i.a.createElement(o.a,{exact:!0,path:"/",component:H}),i.a.createElement(o.a,{path:"/action",component:Te}),i.a.createElement(o.a,{path:"/protest",component:re}),i.a.createElement(o.a,{path:"/feed",component:Y}),i.a.createElement(o.a,{path:"/about",component:He}),i.a.createElement(o.a,{component:Ie})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,t,a){}},[[174,1,2]]]);
//# sourceMappingURL=main.66194c71.chunk.js.map