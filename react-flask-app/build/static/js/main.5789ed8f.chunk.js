(this["webpackJsonpreact-flask-app"]=this["webpackJsonpreact-flask-app"]||[]).push([[0],{164:function(e,t,n){"use strict";n.r(t);var s=n(8),a=n.n(s),c=n(39),r=n.n(c),i=(n(85),n(16)),o=(n(86),n(15)),u=n(28),l=n(14),d=n.n(l),j=n(21),b=function(e){var t=e.getStore,n=(e.getActions,e.setStore);return{store:{token:null,message:null,demo:[{title:"FIRST",background:"white",initial:"white"},{title:"SECOND",background:"white",initial:"white"}]},actions:{syncTokenFromSessionStore:function(){var e=sessionStorage.getItem("token");console.log("App just loaded, syncing local sessionstorage",e),e&&""!=e&&void 0!=e&&n({token:e})},logout:function(){sessionStorage.removeItem("token"),console.log("Log out"),n({token:null})},login:function(){var e=Object(j.a)(d.a.mark((function e(t,s){var a,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:t,password:s})},e.prev=1,e.next=4,fetch("".concat("https://covid-bubble.onrender.com","/signin"),a);case 4:if(200===(c=e.sent).status){e.next=8;break}return alert("Incorrect Email or Password"),e.abrupt("return",!1);case 8:return e.next=10,c.json();case 10:return r=e.sent,console.log("this came from the backend",r),sessionStorage.setItem("token",r.access_token),n({token:r.access_token}),e.abrupt("return",!0);case 17:e.prev=17,e.t0=e.catch(1),console.error("ERROR login in");case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t,n){return e.apply(this,arguments)}}(),signup:function(){var e=Object(j.a)(d.a.mark((function e(t,s,a){var c,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,email:s,password:a})},e.next=3,fetch("".concat("https://covid-bubble.onrender.com","/signup"),c);case 3:if(200===(r=e.sent).status){e.next=7;break}return alert("Incorrect Email or Password"),e.abrupt("return",!1);case 7:return console.log("ok so it comes here? and its fine?"),e.next=10,r.json();case 10:return i=e.sent,console.log(i),sessionStorage.setItem("token",i.token),n({token:i.token}),e.abrupt("return",!0);case 15:case"end":return e.stop()}}),e)})));return function(t,n,s){return e.apply(this,arguments)}}(),addFriendsToDB:function(){var e=Object(j.a)(d.a.mark((function e(n){var s,a,c,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t(),a={},c=1,n.forEach((function(e){e.delete||(a[c]=e.name,c++)})),r={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s.token},body:JSON.stringify(a)},e.prev=5,e.next=8,fetch("".concat("https://covid-bubble.onrender.com","/addfriend"),r);case 8:return i=e.sent,e.next=11,i.json();case 11:return e.sent,e.abrupt("return",!0);case 15:return e.prev=15,e.t0=e.catch(5),console.error("ERROR add friends to db in flux"),e.abrupt("return",!0);case 19:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}(),getFriends:function(){var e=Object(j.a)(d.a.mark((function e(){var n,s,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(),s={headers:{Authorization:"Bearer "+n.token}},e.next=4,fetch("".concat("https://covid-bubble.onrender.com","/loadAddFriend"),s);case 4:if(200===(a=e.sent).status){e.next=8;break}return alert("idk what this error would be"),e.abrupt("return",!1);case 8:return e.next=10,a.text();case 10:return c=e.sent,e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getGraph:function(){var e=Object(j.a)(d.a.mark((function e(n,s,a){var c,r,i,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t(),r={headers:{Authorization:"Bearer "+c.token}},e.prev=2,e.next=5,fetch("".concat("https://covid-bubble.onrender.com","/mainpage/session"),r);case 5:if(200===(i=e.sent).status){e.next=9;break}return alert("Error, no email found in the database"),e.abrupt("return",!1);case 9:return e.next=11,i.json();case 11:return o=e.sent,console.log("this came from the graph",o),n(o.nodes),a(o.links),s(o.user),e.abrupt("return",!0);case 19:e.prev=19,e.t0=e.catch(2),console.error("ERROR get graph");case 22:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(t,n,s){return e.apply(this,arguments)}}(),getMessage:function(){fetch(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_TEST:"https://covid-bubble.onrender.com"}).BACKEND_URL+"/api/hello").then((function(e){return e.json()})).then((function(e){return n({message:e.message})})).catch((function(e){return console.log("Error loading message from backend",e)}))},changeColor:function(e,s){console.log("IN CHANGE OCLR?");var a=t().demo.map((function(t,n){return n===e&&(t.background=s),t}));n({demo:a})}}}},p=n(7),h=a.a.createContext(null),g=function(e){return function(t){var n=Object(s.useState)(b({getStore:function(){return c.store},getActions:function(){return c.actions},setStore:function(e){return r({store:Object.assign(c.store,e),actions:Object(u.a)({},c.actions)})}})),a=Object(i.a)(n,2),c=a[0],r=a[1];return Object(s.useEffect)((function(){c.actions.syncTokenFromSessionStore()}),[]),Object(p.jsx)(h.Provider,{value:c,children:Object(p.jsx)(e,Object(u.a)({},t))})}},m=function(e){e.notEntered;var t=e.setnotEntered,n=Object(s.useState)(""),a=Object(i.a)(n,2),c=a[0],r=a[1],o=Object(s.useState)(""),u=Object(i.a)(o,2),l=u[0],d=u[1],j=Object(s.useState)(""),b=Object(i.a)(j,2),g=b[0],m=b[1],O=Object(s.useContext)(h),f=(O.store,O.actions);sessionStorage.token;return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(c,l,g),c&&l&&g?f.signup(c,l,g).then((function(){t(!1)})):alert("Please fill in all fields")},children:[Object(p.jsx)("div",{className:"user-input-form",children:Object(p.jsx)("input",{className:"user-text-input",type:"text",placeholder:"Name",value:c,onChange:function(e){return r(e.target.value)}})}),Object(p.jsx)("div",{className:"user-input-form",children:Object(p.jsx)("input",{className:"user-text-input",type:"text",placeholder:"Email",value:l,onChange:function(e){return d(e.target.value)}})}),Object(p.jsx)("div",{className:"user-input-form",children:Object(p.jsx)("input",{className:"user-text-input",type:"password",placeholder:"Password",value:g,onChange:function(e){return m(e.target.value)}})}),Object(p.jsx)("input",{type:"submit",value:"Sign up",className:"main-button"})]})})},O=function(e){e.signIn;var t=e.setSignIn,n=(e.backToSignup,e.setBackToSignup),a=e.useSampleUSer,c=e.setuseSampleUSer,r=Object(s.useContext)(h),u=r.store,l=r.actions,d=Object(s.useState)(""),j=Object(i.a)(d,2),b=j[0],g=j[1],m=Object(s.useState)(""),O=Object(i.a)(m,2),f=O[0],x=O[1],v=(sessionStorage.token,Object(o.useHistory)());Object(s.useEffect)((function(){a&&S(),a=!1}),[]);var S=function(){g("sample@sample.com"),x("samplePassword")};return u.token&&""!=u.token&&void 0!=u.token&&v.push("/mainpage"),Object(p.jsx)("div",{className:"box-container",children:u.token&&""!=u.token&&void 0!=u.token?Object(p.jsx)(o.Redirect,{to:"/mainpage"}):Object(p.jsxs)("div",{className:"box-content-container",children:[Object(p.jsx)("div",{className:"header-title",children:"Sign in"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b&&f?l.login(b,f).then((function(e){e?t(!0):console.log("login unsuccessful")})):alert("please fill in all fields")},children:[Object(p.jsx)("div",{className:"user-input-form",children:Object(p.jsx)("input",{className:"user-text-input",type:"text",placeholder:"Email",value:b,onChange:function(e){return g(e.target.value)}})}),Object(p.jsx)("div",{className:"user-input-form",children:Object(p.jsx)("input",{className:"user-text-input",type:"password",placeholder:"Password",value:f,onChange:function(e){return x(e.target.value)}})}),Object(p.jsx)("input",{type:"submit",value:"Sign in",className:"main-button"})]}),Object(p.jsxs)("div",{className:"login-paragraph",children:["Don't have an account? ",Object(p.jsx)("span",{className:"highlight",onClick:function(){c(!1),n(!1)},children:"Sign up"}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:"or",children:"or"}),Object(p.jsx)("br",{}),"Sign in with a ",Object(p.jsx)("span",{className:"highlight",onClick:S,children:"sample account"})," to see Covid Bubble in action"]})]})})},f=n(74),x=n(67),v=function(e){e.onAdd;var t=e.setSignIn,n=Object(s.useState)([]),a=Object(i.a)(n,2),c=a[0],r=a[1],o=Object(s.useState)(""),l=Object(i.a)(o,2),b=l[0],g=l[1],m=Object(s.useContext)(h).actions,O=Object(x.useHistory)(),v=Object(s.useState)(!1),S=Object(i.a)(v,2),N=S[0],k=S[1];Object(s.useEffect)((function(){var e=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getFriends();case 2:("string"===typeof(t=(t=e.sent).trim())||t instanceof String)&&(n=t.split(" "),s=c,n.map((function(e){s.push({id:s.length+1,name:e,delete:!1})})),r(s),k(!N));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var C=function(e){e.preventDefault(),y(e.currentTarget.id)},y=function(e){var t=c.map((function(t){return t.id==e?Object(u.a)(Object(u.a)({},t),{},{delete:!t.delete}):Object(u.a)({},t)}));r(t)},w=function(e){var t=c;t.push({id:t.length+1,name:e,delete:!1}),r(t)};return Object(p.jsxs)("div",{className:"box-container",children:[Object(p.jsx)("h1",{className:"header-title",children:"Friends List"}),Object(p.jsxs)("form",{className:"box-content-container",onSubmit:function(e){e.preventDefault();var n=m.addFriendsToDB(c);t(n),O.push("/mainpage")},children:[Object(p.jsx)("div",{className:"friends-list-scroll-area",children:Object(p.jsx)(f.a,{style:{height:120},children:c.map((function(e){return Object(p.jsx)("div",{id:e.id,className:"friend",onClick:C,children:Object(p.jsx)("span",{className:e.delete?"highlight strike-thru":"highlight",children:e.name})},e.id+e.name)}))})}),Object(p.jsx)("div",{className:"add-new-friend-header",children:"Add New Friend"}),Object(p.jsxs)("div",{className:"user-input-form",children:[Object(p.jsx)("input",{className:"user-text-input",value:b,type:"text",placeholder:"Enter friend's email",onChange:function(e){g(e.currentTarget.value)}}),Object(p.jsx)("button",{style:{display:"none"},onClick:function(e){e.preventDefault(),w(b),g("")}})]}),Object(p.jsx)("input",{type:"submit",value:"View Bubble",className:"main-button"})]})]})},S=function(e){console.log(e)},N=function(e){var t=e.signIn,n=e.setSignIn,a=Object(s.useState)(!0),c=Object(i.a)(a,2),r=c[0],o=c[1],u=Object(s.useState)(!1),l=Object(i.a)(u,2),d=l[0],j=l[1],b=Object(s.useContext)(h),g=b.store,f=(b.actions,Object(s.useState)(!1)),x=Object(i.a)(f,2),N=x[0],k=x[1];return Object(p.jsx)("div",{children:g.token?Object(p.jsx)("div",{children:Object(p.jsx)(v,{onAdd:S,setSignIn:n})}):d?Object(p.jsx)(O,{signIn:t,setSignIn:n,backToSignup:d,setBackToSignup:j,useSampleUSer:N,setuseSampleUSer:k}):Object(p.jsxs)("div",{className:"box-container",children:[Object(p.jsx)("h1",{className:"header-title",children:"Sign up"}),Object(p.jsx)(m,{notEntered:r,setnotEntered:o}),Object(p.jsxs)("div",{className:"login-paragraph",children:["Already have an account? ",Object(p.jsx)("span",{className:"highlight",onClick:function(){j(!0)},children:"Sign in"}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:"or",children:"or"}),Object(p.jsx)("br",{}),"Sign in with a ",Object(p.jsx)("span",{className:"highlight",onClick:function(){k(!0),j(!0)},children:"sample account"})," to see Covid Bubble in action"]})]})})},k=function(e){var t=e.signIn,n=e.setSignIn,s=Object(o.useLocation)();if(t){var a,c=null===s||void 0===s||null===(a=s.state)||void 0===a?void 0:a.params;if(void 0==c)return Object(p.jsx)(o.Redirect,{to:"/mainpage"});if(!c)return s.state.params=!1,Object(p.jsx)(o.Redirect,{to:"/mainpage"})}return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"section-box",children:Object(p.jsx)(N,{signIn:t,setSignIn:n})})})},C=n.p+"static/media/pythonLogo.82efb64f.png",y=n.p+"static/media/reactLogo.8a6fc0a2.png",w=n.p+"static/media/mongodbLogo.bf804240.png",E=n.p+"static/media/flaskLogo.611b5611.svg",I=function(){var e=Object(o.useHistory)();return Object(p.jsxs)("div",{className:"landing-page-container",children:[Object(p.jsxs)("div",{className:"landing-header",children:["Visualize you and your friends' social circles with ",Object(p.jsx)("span",{className:"highlight",children:"Covid Bubble"}),"!"]}),Object(p.jsx)("div",{className:"landing-section-header",children:"About Project"}),Object(p.jsx)("div",{className:"landing-paragraph",children:"This project was developed during the covid-19 pandemic where during certain periods of time, people were only allowed to meet a certain number of people."}),Object(p.jsx)("div",{className:"landing-section-header",children:"Tools Used"}),Object(p.jsxs)("div",{className:"tools-used",children:[Object(p.jsx)("img",{src:y,className:"tool-image"}),Object(p.jsx)("img",{src:C,className:"tool-image"}),Object(p.jsx)("img",{src:E,className:"tool-image"}),Object(p.jsx)("img",{src:w,className:"tool-image"})]}),Object(p.jsxs)("div",{className:"landing-buttons-container",children:[Object(p.jsx)("button",{type:"button",className:"main-button",onClick:function(){e.push("/login")},children:"Sign in to Covid Bubble"}),Object(p.jsx)("a",{className:"secondary-button",href:"https://github.com/HeidiHan0000/covid-bubble/",children:"View Code on Github"})]})]})},T=n(73),R=function(e){var t=e.setSignIn,n=e.signIn,a=Object(s.useContext)(h),c=a.store,r=a.actions,u=Object(s.useState)([]),l=Object(i.a)(u,2),d=l[0],j=l[1],b=Object(s.useState)([]),g=Object(i.a)(b,2),m=g[0],O=g[1],f=Object(s.useState)([]),x=Object(i.a)(f,2),v=(x[0],x[1]),S=Object(s.useState)(!1),N=Object(i.a)(S,2),k=N[0],C=N[1],y=Object(o.useHistory)();return Object(s.useEffect)((function(){n&&r.getGraph(j,v,O).then((function(){C(!0)}))}),[]),Object(p.jsx)("div",{children:c.token?k?Object(p.jsxs)("div",{className:"mainPageContainer",children:[Object(p.jsx)(T.a,{graphData:{nodes:d,links:m},nodeId:"id",nodeColor:function(e){return 1===e.group?"#E6550D":2===e.group?"#FD8D3C":"#36A7F9"},nodeVal:function(e){return Math.pow(1===e.group?1.25:1.15,3)}}),Object(p.jsxs)("div",{className:"mainpage-button-container",children:[Object(p.jsx)("button",{className:"main-button",onClick:function(){y.push("/login",{params:!0})},children:" Edit Friends List"}),Object(p.jsx)("button",{className:"main-button",onClick:function(){r.logout(),t(!1),o.Redirect},children:" Sign Out "})]})]}):Object(p.jsx)("div",{children:Object(p.jsx)("h3",{className:"loading",children:"Loading..."})}):Object(p.jsx)(o.Redirect,{to:"/login"})})},A=n(27);var F=g((function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],c=function(e){console.log(e)};return Object(p.jsx)(A.a,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(A.b,{to:"/",className:"logo",children:"Covid Bubble"}),Object(p.jsx)("div",{children:Object(p.jsxs)(o.Switch,{children:[Object(p.jsx)(o.Route,{exact:!0,path:"/",component:function(){return Object(p.jsx)(I,{})}}),Object(p.jsx)(o.Route,{exact:!0,path:"/login",component:function(){return Object(p.jsx)(k,{signIn:n,setSignIn:a})}}),Object(p.jsx)(o.Route,{exact:!0,path:"/mainpage",component:function(){return Object(p.jsx)(R,{setSignIn:a,signIn:n})}}),Object(p.jsx)(o.Route,{exact:!0,path:"/editFriends",component:function(){return Object(p.jsx)(v,{onAdd:c,setSignIn:a})}})]})})]})})})),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,179)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};r.a.render(Object(p.jsx)(F,{}),document.getElementById("root")),D()},85:function(e,t,n){},86:function(e,t,n){}},[[164,1,2]]]);
//# sourceMappingURL=main.5789ed8f.chunk.js.map