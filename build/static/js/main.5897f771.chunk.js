(this.webpackJsonpnetflixreact=this.webpackJsonpnetflixreact||[]).push([[0],{54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},63:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){"use strict";c.r(t);var n=c(3),r=c.n(n),a=c(26),i=c.n(a),s=(c(54),c(55),c(17)),o=c(10),l=(c(56),c(2));var d=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(o.f)(),i=function(){window.scrollY>100?r(!0):r(!1)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i)}}),[]),Object(l.jsx)("div",{className:"nav ".concat(c&&"nav_black"),children:Object(l.jsxs)("div",{className:"nav_container",children:[Object(l.jsx)("img",{onClick:function(){return a.push("/")},className:"nav_logo",src:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:"netflix logo"}),Object(l.jsx)("img",{onClick:function(){return a.push("/profile")},className:"nav_avatar",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"netflix avatar logo"})]})})},u=c(12),j=c.n(u),f=c(21),b=(c(63),c(46)),p=c.n(b).a.create({baseURL:"https://api.themoviedb.org/3"}),v={getTrending:"/trending/all/week?api_key=".concat("3f1da2a476827194b76c5e9c6ff2fc14","&language=en-US"),getNetflixOriginals:"/discover/tv?api_key=".concat("3f1da2a476827194b76c5e9c6ff2fc14","&with_networks=213"),getTvComedies:"/discover/tv?api_key=".concat("3f1da2a476827194b76c5e9c6ff2fc14","&with_genres=35"),getCrimeMovies:"/discover/movie?api_key=".concat("3f1da2a476827194b76c5e9c6ff2fc14","&with_genres=80"),getDocumentaries:"/discover/movie?api_key=".concat("3f1da2a476827194b76c5e9c6ff2fc14","&with_genres=99"),getActionMovies:"/discover/movie?api_key=".concat("3f1da2a476827194b76c5e9c6ff2fc14","&with_genres=28"),getHorrorMovies:"/discover/movie?api_key=".concat("3f1da2a476827194b76c5e9c6ff2fc14","&with_genres=27"),getTopRated:"/movie/top_rated?api_key=".concat("3f1da2a476827194b76c5e9c6ff2fc14","&language=en-US"),getRomanceMovies:"/discover/movie?api_key=".concat("3f1da2a476827194b76c5e9c6ff2fc14","&with_genres=10749"),getSciFi:"/discover/tv?api_key=".concat("3f1da2a476827194b76c5e9c6ff2fc14","&with_genres=10765"),getWar:"/discover/tv?api_key=".concat("3f1da2a476827194b76c5e9c6ff2fc14","&with_genres=10768"),getFamilyMovies:"/discover/movie?api_key=".concat("3f1da2a476827194b76c5e9c6ff2fc14","&with_genres=10751"),getComedyMovies:"/discover/movie?api_key=".concat("3f1da2a476827194b76c5e9c6ff2fc14","&with_genres=35"),getThrillerMovies:"/discover/movie?api_key=".concat("3f1da2a476827194b76c5e9c6ff2fc14","&with_genres=53"),getDramaTv:"/discover/tv?api_key=".concat("3f1da2a476827194b76c5e9c6ff2fc14","&with_genres=18"),getRealStories:"/discover/tv?api_key=".concat("3f1da2a476827194b76c5e9c6ff2fc14","&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10764&include_null_first_air_dates=false"),getTvSoap:"/discover/tv?api_key=".concat("3f1da2a476827194b76c5e9c6ff2fc14","&with_genres=10766"),getDramaMovies:"/discover/movie?api_key=".concat("3f1da2a476827194b76c5e9c6ff2fc14","&with_genres=18"),getTalkTv:"/discover/tv?api_key=".concat("3f1da2a476827194b76c5e9c6ff2fc14","&with_genres=10767")};var g=function(){var e,t,c=Object(n.useState)([]),r=Object(s.a)(c,2),a=r[0],i=r[1];return Object(n.useEffect)((function(){function e(){return(e=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get(v.getNetflixOriginals);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(l.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===a||void 0===a?void 0:a.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(l.jsxs)("div",{className:"banner_contents",children:[Object(l.jsx)("h1",{className:"banner_title",children:(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.original_name)}),Object(l.jsxs)("div",{className:"banner_buttons",children:[Object(l.jsx)("button",{className:"banner_button",children:"Play"}),Object(l.jsx)("button",{className:"banner_button",children:"My List"})]}),Object(l.jsx)("h1",{className:"banner_description",children:(e=null===a||void 0===a?void 0:a.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(l.jsx)("div",{className:"banner--fadeBottom"})]})};c(81);var h=function(e){var t=e.title,c=e.getUrl,r=Object(n.useState)([]),a=Object(s.a)(r,2),i=a[0],o=a[1];return Object(n.useEffect)((function(){function e(){return(e=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get(c);case 2:return t=e.sent,o(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)("div",{className:"row_posters",children:i.map((function(e){return(e.poster_path||e.backdrop_path)&&Object(l.jsx)("img",{className:"row_poster",src:"".concat("https://image.tmdb.org/t/p/original/").concat(e.poster_path),alt:(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.original_name)},e.id)}))})]})};var m=function(){return Object(l.jsxs)("div",{className:"homeScreen",children:[Object(l.jsx)(d,{}),Object(l.jsx)(g,{}),Object(l.jsx)(h,{title:"NETFLIX ORIGINALS",getUrl:v.getNetflixOriginals,isLargeRow:!0}),Object(l.jsx)(h,{title:"Trending Now",getUrl:v.getTrending}),Object(l.jsx)(h,{title:"Action Movies",getUrl:v.getActionMovies}),Object(l.jsx)(h,{title:"Comedy Movies",getUrl:v.getComedyMovies}),Object(l.jsx)(h,{title:"Horror Movies",getUrl:v.getHorrorMovies}),Object(l.jsx)(h,{title:"Romance Movies",getUrl:v.getRomanceMovies}),Object(l.jsx)(h,{title:"Documentaries",getUrl:v.getDocumentaries}),Object(l.jsx)(h,{title:"Crime Movies",getUrl:v.getCrimeMovies}),Object(l.jsx)(h,{title:"Reality TV",getUrl:v.getRealStories}),Object(l.jsx)(h,{title:"Tv Comedies",getUrl:v.getTvComedies}),Object(l.jsx)(h,{title:"Sci-Fi",getUrl:v.getSciFi}),Object(l.jsx)(h,{title:"Soapy TV Shows",getUrl:v.getTvSoap}),Object(l.jsx)(h,{title:"TV War & Politics",getUrl:v.getWar}),Object(l.jsx)(h,{title:"Family Movies",getUrl:v.getFamilyMovies}),Object(l.jsx)(h,{title:"Thriller Movies",getUrl:v.getThrillerMovies}),Object(l.jsx)(h,{title:"Drama Movies",getUrl:v.getDramaMovies}),Object(l.jsx)(h,{title:"TV Talk",getUrl:v.getTalkTv}),Object(l.jsx)(h,{title:"TV Drama",getUrl:v.getDramaTv})]})},O=(c(82),c(36)),x=O.a.initializeApp({apiKey:"AIzaSyDT-Rmt7jTbpg-w7SDcDrrrAWnC9ty4GYc",authDomain:"netflixreactapp-e9ea8.firebaseapp.com",projectId:"netflixreactapp-e9ea8",storageBucket:"netflixreactapp-e9ea8.appspot.com",messagingSenderId:"839369404898",appId:"1:839369404898:web:5196a0feaac219d76889bb"}).firestore(),_=O.a.auth(),w=x;c(85);var k=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null);return Object(l.jsx)("div",{className:"signUpScreen",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("h1",{children:"Sign In"}),Object(l.jsx)("input",{ref:e,type:"email",placeholder:"Email"}),Object(l.jsx)("input",{ref:t,type:"password",placeholder:"Password"}),Object(l.jsx)("button",{type:"submit",onClick:function(c){c.preventDefault(),_.signInWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){return alert(e.message)}))},children:"Sign In"}),Object(l.jsxs)("h4",{children:[Object(l.jsx)("span",{className:"signUpScreen_gray",children:"New to Netflix? "}),Object(l.jsx)("span",{className:"signUpScreen_link",onClick:function(c){c.preventDefault(),_.createUserWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){alert(e.message)}))},children:"Sign Up Now"})]})]})})};var y=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),c=t[0],r=t[1];return Object(l.jsxs)("div",{className:"loginScreen",children:[Object(l.jsxs)("div",{className:"loginScreen_background",children:[Object(l.jsx)("img",{className:"loginScreen_logo",src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:""}),Object(l.jsx)("button",{onClick:function(){return r(!0)},className:"loginScreen_button",children:"Sign In"}),Object(l.jsx)("div",{className:"loginScreen_gradient"})]}),Object(l.jsx)("div",{className:"loginScreen_body",children:c?Object(l.jsx)(k,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h1",{children:["Unlimited movies, TV ",Object(l.jsx)("br",{})," shows, and more."]}),Object(l.jsx)("h2",{children:"Watch anywhere. Cancel anytime."}),Object(l.jsx)("h3",{children:"Ready to watch? Enter your email to create or restart your membership."}),Object(l.jsx)("div",{className:"loginScreen_input",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"email",placeholder:"Email Address"}),Object(l.jsxs)("button",{onClick:function(){return r(!0)},className:"loginScreen_GetStarted",children:["Get Started ",">"]})]})})]})})]})},S=c(28),N=Object(S.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),U=N.actions,M=U.login,T=U.logout,C=function(e){return e.user.user},E=N.reducer,D=c(20),I=(c(86),c(49));var R=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(D.c)(C),i=Object(n.useState)(null),o=Object(s.a)(i,2),d=o[0],u=o[1];Object(n.useEffect)((function(){w.collection("customers").doc(a.uid).collection("subscriptions").get().then((function(e){e.forEach(function(){var e=Object(f.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u({role:t.data().role,current_period_end:t.data().current_period_end.seconds,current_period_start:t.data().current_period_start.seconds});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}),[a.uid]),Object(n.useEffect)((function(){w.collection("products").where("active","==",!0).get().then((function(e){var t={};e.forEach(function(){var e=Object(f.a)(j.a.mark((function e(c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t[c.id]=c.data(),e.next=3,c.ref.collection("prices").get();case 3:e.sent.docs.forEach((function(e){t[c.id].prices={priceId:e.id,priceData:e.data}}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r(t)}))}),[]),console.log(d);var b=function(){var e=Object(f.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.collection("customers").doc(a.uid).collection("checkout_sessions").add({price:t,success_url:window.location.origin,cancel_url:window.location.origin});case 2:e.sent.onSnapshot(function(){var e=Object(f.a)(j.a.mark((function e(t){var c,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.data(),n=c.error,r=c.sessionId,n&&alert("An error occured: ".concat(n.message)),!r){e.next=7;break}return e.next=5,Object(I.a)("pk_test_51IfcqpKwZUroqbpG8fBJR5iyplRiY16G0emUlY73jAhAHUkQsdfPvf9vMmtcijqWN3BKa4GizjmlmJroJVlM3Ms400gClkmUPf");case 5:e.sent.redirectToCheckout({sessionId:r});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"planScreen",children:[d&&Object(l.jsxs)("p",{children:["Renewal Date: ",new Date(1e3*(null===d||void 0===d?void 0:d.current_period_end)).toLocaleDateString()," "]}),Object.entries(c).map((function(e){var t,c=Object(s.a)(e,2),n=c[0],r=c[1],a=null===(t=r.name)||void 0===t?void 0:t.toLowerCase().includes(null===d||void 0===d?void 0:d.role);return Object(l.jsxs)("div",{className:"".concat(a&&"planScreen_plan--disabled"," planScreen_plan"),children:[Object(l.jsxs)("div",{className:"planScreen_info",children:[Object(l.jsx)("h5",{children:r.name}),Object(l.jsx)("h6",{children:r.description})]}),Object(l.jsx)("button",{onClick:function(){return!a&&b(r.prices.priceId)},children:a?"Current Plan":"Subscribe"})]},n)}))]})};c(87);var A=function(){var e=Object(D.c)(C);return Object(l.jsxs)("div",{className:"profileScreen",children:[Object(l.jsx)(d,{}),Object(l.jsxs)("div",{className:"profileScreen_body",children:[Object(l.jsx)("h1",{children:"Edit Profile"}),Object(l.jsxs)("div",{className:"profileScreen_info",children:[Object(l.jsx)("img",{src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",alt:"avatar logo"}),Object(l.jsxs)("div",{className:"profileScreen_details",children:[Object(l.jsxs)("h2",{children:[" ",e.email," "]}),Object(l.jsxs)("div",{className:"profileScreen_plans",children:[Object(l.jsx)("h3",{children:"Subscription Plans:"}),Object(l.jsx)(R,{}),Object(l.jsx)("p",{}),Object(l.jsx)("button",{onClick:function(){return _.signOut()},className:"profileScreen_signOut",children:"Sign Out"})]})]})]})]})]})},P=(c(88),c(32));var W=function(){var e=Object(D.c)(C),t=Object(D.b)();return Object(n.useEffect)((function(){return _.onAuthStateChanged((function(e){t(e?M({uid:e.uid,email:e.email}):T())}))}),[t]),Object(l.jsx)("div",{className:"app",children:Object(l.jsx)(P.a,{children:e?Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/profile",children:Object(l.jsx)(A,{})}),Object(l.jsx)(o.a,{exact:!0,path:"/",children:Object(l.jsx)(m,{})})]}):Object(l.jsx)(y,{})})})},F=Object(S.a)({reducer:{user:E}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(D.a,{store:F,children:Object(l.jsx)(W,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[89,1,2]]]);
//# sourceMappingURL=main.5897f771.chunk.js.map