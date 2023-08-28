(this["webpackJsonpreact-flask-app"]=this["webpackJsonpreact-flask-app"]||[]).push([[0],{163:function(e,t,n){"use strict";n.r(t);var s=n(9),c=n.n(s),a=n(38),o=n.n(a),r=(n(84),n(15)),i=(n(85),n(14)),l=n(27),u=n(16),d=n.n(u),j=n(25),b=function(e){var t=e.getStore,n=e.getActions,s=e.setStore;return console.log("IN GETSTAE"),{store:{token:null,message:null,demo:[{title:"FIRST",background:"white",initial:"white"},{title:"SECOND",background:"white",initial:"white"}]},actions:{exampleFunction:function(){n().changeColor(0,"green")},syncTokenFromSessionStore:function(){var e=sessionStorage.getItem("token");console.log("App just loaded, syncing local sessionstorage",e),e&&""!=e&&void 0!=e&&s({token:e})},logout:function(){sessionStorage.removeItem("token"),console.log("Log out"),s({token:null})},login:function(){var e=Object(j.a)(d.a.mark((function e(t,n){var c,a,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})},e.prev=1,e.next=4,fetch("".concat("https://covid-bubble.onrender.com","/signin"),c);case 4:if(200===(a=e.sent).status){e.next=8;break}return alert("Incorrect Email or Password"),e.abrupt("return",!1);case 8:return e.next=10,a.json();case 10:return o=e.sent,console.log("this came from the backend",o),sessionStorage.setItem("token",o.access_token),s({token:o.access_token}),e.abrupt("return",!0);case 17:e.prev=17,e.t0=e.catch(1),console.error("ERROR login in");case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t,n){return e.apply(this,arguments)}}(),signup:function(){var e=Object(j.a)(d.a.mark((function e(t,n,c){var a,o,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,email:n,password:c})},e.next=3,fetch("".concat("https://covid-bubble.onrender.com","/signup"),a);case 3:if(200===(o=e.sent).status){e.next=7;break}return alert("Incorrect Email or Password"),e.abrupt("return",!1);case 7:return console.log("ok so it comes here? and its fine?"),e.next=10,o.json();case 10:return r=e.sent,console.log(r),sessionStorage.setItem("token",r.token),s({token:r.token}),e.abrupt("return",!0);case 15:case"end":return e.stop()}}),e)})));return function(t,n,s){return e.apply(this,arguments)}}(),addFriendsToDB:function(){var e=Object(j.a)(d.a.mark((function e(n){var s,c,a,o,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("so whats the matter here"),s=t(),console.log("friends",n),c={},a=1,console.log("friends",n),n.forEach((function(e){e.delete||(c[a]=e.name,a++)})),console.log("22244",s.token),console.log("is this the prob",c),o={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s.token},body:JSON.stringify(c)},e.prev=10,e.next=13,fetch("".concat("https://covid-bubble.onrender.com","/addfriend"),o);case 13:return r=e.sent,e.next=16,r.json();case 16:return i=e.sent,console.log(i),e.abrupt("return",!0);case 21:e.prev=21,e.t0=e.catch(10),console.error("ERROR add friends to db in flux");case 24:case"end":return e.stop()}}),e,null,[[10,21]])})));return function(t){return e.apply(this,arguments)}}(),getGraph:function(){var e=Object(j.a)(d.a.mark((function e(n,s,c){var a,o,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("IN GET GRAPH?"),a=t(),o={headers:{Authorization:"Bearer "+a.token}},e.prev=3,e.next=6,fetch("".concat("https://covid-bubble.onrender.com","/mainpage/session"),o);case 6:if(200===(r=e.sent).status){e.next=10;break}return alert("Error, no email found in the database"),e.abrupt("return",!1);case 10:return e.next=12,r.json();case 12:return i=e.sent,console.log("this came from the graph",i),n(i.nodes),c(i.links),s(i.user),e.abrupt("return",!0);case 20:e.prev=20,e.t0=e.catch(3),console.error("ERROR get graph");case 23:case"end":return e.stop()}}),e,null,[[3,20]])})));return function(t,n,s){return e.apply(this,arguments)}}(),getMessage:function(){fetch(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_TEST:"https://covid-bubble.onrender.com"}).BACKEND_URL+"/api/hello").then((function(e){return e.json()})).then((function(e){return s({message:e.message})})).catch((function(e){return console.log("Error loading message from backend",e)}))},changeColor:function(e,n){console.log("IN CHANGE OCLR?");var c=t().demo.map((function(t,s){return s===e&&(t.background=n),t}));s({demo:c})}}}},h=n(7),p=c.a.createContext(null),g=function(e){return function(t){var n=Object(s.useState)(b({getStore:function(){return a.store},getActions:function(){return a.actions},setStore:function(e){return o({store:Object.assign(a.store,e),actions:Object(l.a)({},a.actions)})}})),c=Object(r.a)(n,2),a=c[0],o=c[1];return Object(s.useEffect)((function(){a.actions.syncTokenFromSessionStore()}),[]),Object(h.jsx)(p.Provider,{value:a,children:Object(h.jsx)(e,Object(l.a)({},t))})}},O=function(e){e.notEntered;var t=e.setnotEntered,n=Object(s.useState)(""),c=Object(r.a)(n,2),a=c[0],o=c[1],i=Object(s.useState)(""),l=Object(r.a)(i,2),u=l[0],d=l[1],j=Object(s.useState)(""),b=Object(r.a)(j,2),g=b[0],O=b[1],m=Object(s.useContext)(p),f=(m.store,m.actions);sessionStorage.token;return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(a,u,g),f.signup(a,u,g).then((function(){console.log("SETING NOTENTERED TO FALSE"),t(!1)}))},children:[Object(h.jsx)("div",{className:"user-input-form",children:Object(h.jsx)("input",{className:"user-text-input",type:"text",placeholder:"Name",value:a,onChange:function(e){return o(e.target.value)}})}),Object(h.jsx)("div",{className:"user-input-form",children:Object(h.jsx)("input",{className:"user-text-input",type:"text",placeholder:"Email",value:u,onChange:function(e){return d(e.target.value)}})}),Object(h.jsx)("div",{className:"user-input-form",children:Object(h.jsx)("input",{className:"user-text-input",type:"password",placeholder:"Password",value:g,onChange:function(e){return O(e.target.value)}})}),Object(h.jsx)("input",{type:"submit",value:"Sign up",className:"main-button"})]})})},m=function(e){e.signIn;var t=e.setSignIn,n=Object(s.useContext)(p),c=n.store,a=n.actions,o=Object(s.useState)(""),l=Object(r.a)(o,2),u=l[0],d=l[1],j=Object(s.useState)(""),b=Object(r.a)(j,2),g=b[0],O=b[1],m=(sessionStorage.token,Object(i.g)());return c.token&&""!=c.token&&void 0!=c.token&&m.push("/mainpage"),Object(h.jsx)("div",{children:c.token&&""!=c.token&&void 0!=c.token?Object(h.jsx)(i.a,{to:"/mainpage"}):Object(h.jsxs)("div",{className:"box-content-container",children:[Object(h.jsx)("div",{className:"header-title",children:"Sign in"}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.login(u,g).then((function(){t(!0)}))},children:[Object(h.jsx)("div",{className:"user-input-form",children:Object(h.jsx)("input",{className:"user-text-input",type:"text",placeholder:"Email",value:u,onChange:function(e){return d(e.target.value)}})}),Object(h.jsx)("div",{className:"user-input-form",children:Object(h.jsx)("input",{className:"user-text-input",type:"password",placeholder:"Password",value:g,onChange:function(e){return O(e.target.value)}})}),Object(h.jsx)("input",{type:"submit",value:"Sign in",className:"main-button"})]}),Object(h.jsxs)("div",{className:"login-paragraph",children:["Don't have an account? ",Object(h.jsx)("span",{className:"highlight",onClick:m.goBack,children:"Sign up"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"or",children:"or"}),Object(h.jsx)("br",{}),"Sign in with a ",Object(h.jsx)("span",{className:"highlight",children:"sample account"})," to see Covid Bubble in action"]})]})})},f=n(73),x=function(e){e.onAdd;var t=e.setSignIn,n=Object(s.useState)([]),c=Object(r.a)(n,2),a=c[0],o=c[1],i=Object(s.useState)(""),u=Object(r.a)(i,2),d=u[0],j=u[1],b=Object(s.useContext)(p),g=(b.store,b.actions),O=function(e){e.preventDefault(),m(e.currentTarget.id)},m=function(e){var t=a.map((function(t){return t.id==e?Object(l.a)(Object(l.a)({},t),{},{delete:!t.delete}):Object(l.a)({},t)}));o(t)},x=function(e){var t=a;t.push({id:a.length+1,name:e,delete:!1}),o(t)};return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"header-title",children:"Friends List"}),Object(h.jsxs)("form",{className:"box-content-container",onSubmit:function(e){e.preventDefault(),console.log("why notn here?");var n=g.addFriendsToDB(a);t(n)},children:[Object(h.jsx)("div",{className:"friends-list-scroll-area",children:Object(h.jsx)(f.a,{style:{height:120},children:a.map((function(e){return Object(h.jsx)("div",{id:e.id,className:e.delete?"friend strike-thru":"friend",onClick:O,children:Object(h.jsx)("span",{className:"highlight",children:e.name})},e.id+e.name)}))})}),Object(h.jsx)("div",{className:"add-new-friend-header",children:"Add New Friend"}),Object(h.jsxs)("div",{className:"user-input-form",children:[Object(h.jsx)("input",{className:"user-text-input",value:d,type:"text",placeholder:"Enter friend's email",onChange:function(e){j(e.currentTarget.value)}}),Object(h.jsx)("button",{onClick:function(e){e.preventDefault(),x(d),j("")}})]}),Object(h.jsx)("input",{type:"submit",value:"View Bubble",className:"main-button"})]})]})},v=function(e){console.log(e)},S=function(e){var t=e.signIn,n=e.setSignIn,c=Object(s.useState)(!0),a=Object(r.a)(c,2),o=a[0],i=a[1],l=Object(s.useState)(!1),u=Object(r.a)(l,2),d=u[0],j=u[1],b=Object(s.useContext)(p),g=b.store;b.actions;return console.log("does it come here??? "),Object(h.jsx)("div",{className:"box-container",children:g.token?Object(h.jsx)("div",{children:Object(h.jsx)(x,{onAdd:v,setSignIn:n})}):d?Object(h.jsx)(m,{signIn:t,setSignIn:n}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"header-title",children:"Sign up"}),Object(h.jsx)(O,{notEntered:o,setnotEntered:i}),Object(h.jsxs)("div",{className:"login-paragraph",children:["Already have an account? ",Object(h.jsx)("span",{className:"highlight",onClick:function(){j(!0)},children:"Sign in"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"or",children:"or"}),Object(h.jsx)("br",{}),"Sign in with a ",Object(h.jsx)("span",{className:"highlight",children:"sample account"})," to see Covid Bubble in action"]})]})})},N=function(e){var t=e.signIn,n=e.setSignIn;return t?Object(h.jsx)(i.a,{to:"/mainpage"}):Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"section-box",children:Object(h.jsx)(S,{signIn:t,setSignIn:n})})})},k=n.p+"static/media/pythonLogo.82efb64f.png",C=n.p+"static/media/reactLogo.8a6fc0a2.png",E=n.p+"static/media/mongodbLogo.bf804240.png",w=n.p+"static/media/flaskLogo.611b5611.svg",y=function(){var e=Object(i.g)();return Object(h.jsxs)("div",{className:"landing-page-container",children:[Object(h.jsxs)("div",{className:"landing-header",children:["Visualize you and your friends' social circles with ",Object(h.jsx)("span",{className:"highlight",children:"Covid Bubble"}),"!"]}),Object(h.jsx)("div",{className:"landing-section-header",children:"About Project"}),Object(h.jsx)("div",{className:"landing-paragraph",children:"This project was developed during the covid-19 pandemic where during certain periods of time, people were only allowed to meet a certain number of people."}),Object(h.jsx)("div",{className:"landing-section-header",children:"Tools Used"}),Object(h.jsxs)("div",{className:"tools-used",children:[Object(h.jsx)("img",{src:C,className:"tool-image"}),Object(h.jsx)("img",{src:k,className:"tool-image"}),Object(h.jsx)("img",{src:w,className:"tool-image"}),Object(h.jsx)("img",{src:E,className:"tool-image"})]}),Object(h.jsxs)("div",{className:"landing-buttons-container",children:[Object(h.jsx)("button",{type:"button",className:"main-button",onClick:function(){e.push("/")},children:"Sign in to Covid Bubble"}),Object(h.jsx)("a",{className:"secondary-button",href:"https://github.com/HeidiHan0000/covid-bubble/",children:"View Code on Github"})]})]})},I=n(72),T=function(e){var t=e.setSignIn,n=e.signIn,c=Object(s.useContext)(p),a=c.store,o=c.actions,l=Object(s.useState)([]),u=Object(r.a)(l,2),d=u[0],j=u[1],b=Object(s.useState)([]),g=Object(r.a)(b,2),O=g[0],m=g[1],f=Object(s.useState)([]),x=Object(r.a)(f,2),v=(x[0],x[1]),S=Object(s.useState)(!1),N=Object(r.a)(S,2),k=N[0],C=N[1],E=Object(s.useState)(!1),w=Object(r.a)(E,2),y=(w[0],w[1],Object(i.g)());return Object(s.useEffect)((function(){n&&o.getGraph(j,v,m).then((function(){C(!0)}))}),[]),Object(h.jsx)("div",{children:a.token?k?Object(h.jsxs)("div",{className:"mainPageContainer",children:[Object(h.jsx)(I.a,{graphData:{nodes:d,links:O},nodeId:"id",nodeColor:function(e){return 1===e.group?"#E6550D":2===e.group?"#FD8D3C":"#36A7F9"},nodeVal:function(e){return Math.pow(1===e.group?1.25:1.15,3)}}),Object(h.jsxs)("div",{className:"mainpage-button-container",children:[Object(h.jsx)("button",{className:"main-button",onClick:function(){console.log("token",a.token),y.push("/editFriends")},children:" Edit Friends List"}),Object(h.jsx)("button",{className:"main-button",onClick:function(){o.logout(),t(!1),i.a},children:" Sign Out "})]})]}):Object(h.jsx)("div",{children:Object(h.jsx)("h1",{style:{textAlign:"center"},children:"Loading..."})}):Object(h.jsx)(i.a,{to:"/"})})},A=n(28);var D=g((function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],a=function(e){console.log(e)};return Object(h.jsx)(A.a,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(A.b,{to:"/landing",className:"logo",children:"Covid Bubble"}),Object(h.jsx)("div",{className:"content-wrapper",children:Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{exact:!0,path:"/landing",component:function(){return Object(h.jsx)(y,{})}}),Object(h.jsx)(i.b,{exact:!0,path:"/",component:function(){return Object(h.jsx)(N,{signIn:n,setSignIn:c})}}),Object(h.jsx)(i.b,{exact:!0,path:"/mainpage",component:function(){return Object(h.jsx)(T,{setSignIn:c,signIn:n})}}),Object(h.jsx)(i.b,{exact:!0,path:"/editFriends",component:function(){return Object(h.jsx)(x,{onAdd:a,setSignIn:c})}})]})})]})})})),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,178)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),a(e),o(e)}))};o.a.render(Object(h.jsx)(D,{}),document.getElementById("root")),F()},84:function(e,t,n){},85:function(e,t,n){}},[[163,1,2]]]);
//# sourceMappingURL=main.f54d6220.chunk.js.map