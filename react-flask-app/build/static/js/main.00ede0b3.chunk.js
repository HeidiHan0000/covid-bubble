(this["webpackJsonpreact-flask-app"]=this["webpackJsonpreact-flask-app"]||[]).push([[0],{150:function(e,t,n){"use strict";n.r(t);var c=n(8),r=n.n(c),o=n(58),s=n.n(o),a=(n(77),n(12)),i=(n(78),n(15)),u=n(34),l=n(16),d=n.n(l),j=n(24),b=function(e){var t=e.getStore,n=e.getActions,c=e.setStore;return console.log("IN GETSTAE"),{store:{token:null,message:null,demo:[{title:"FIRST",background:"white",initial:"white"},{title:"SECOND",background:"white",initial:"white"}]},actions:{exampleFunction:function(){n().changeColor(0,"green")},syncTokenFromSessionStore:function(){var e=sessionStorage.getItem("token");console.log("App just loaded, syncing local sessionstorage"),e&&""!=e&&void 0!=e&&c({token:e})},logout:function(){sessionStorage.removeItem("token"),console.log("Log out"),c({token:null})},login:function(){var e=Object(j.a)(d.a.mark((function e(t,n){var r,o,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})},e.prev=1,e.next=4,fetch("".concat("http://localhost:5000","/signin"),r);case 4:if(200===(o=e.sent).status){e.next=8;break}return alert("Incorrect Email or Password"),e.abrupt("return",!1);case 8:return e.next=10,o.json();case 10:return s=e.sent,console.log("this came from the backend",s),sessionStorage.setItem("token",s.access_token),c({token:s.access_token}),e.abrupt("return",!0);case 17:e.prev=17,e.t0=e.catch(1),console.error("ERROR login in");case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t,n){return e.apply(this,arguments)}}(),signup:function(){var e=Object(j.a)(d.a.mark((function e(t,n,r){var o,s,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,email:n,password:r})},e.next=3,fetch("".concat("http://localhost:5000","/signup"),o);case 3:if(200===(s=e.sent).status){e.next=7;break}return alert("Incorrect Email or Password"),e.abrupt("return",!1);case 7:return e.next=9,s.json();case 9:return a=e.sent,console.log(a),sessionStorage.setItem("token",a.token),c({token:a.token}),e.abrupt("return",!0);case 14:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),getIsUserAddedByFriends:function(){var e=Object(j.a)(d.a.mark((function e(n,c,r,o,s,a,i,u,l){var j,b,p,h,O,g;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("IN GET IS USER ADDED"),j=t(),b={headers:{Authorization:"Bearer "+j.token}},e.prev=3,e.next=6,fetch("".concat("http://localhost:5000","/loadAddFriend"),b);case 6:if(200===(p=e.sent).status){e.next=10;break}return alert("idk what this error would be"),e.abrupt("return",!1);case 10:return e.next=12,p.json();case 12:for(h=e.sent,console.log(h),O=h.emails,n(h.emails),g=0;g<O.length;g++)0==g&&(console.log("11111"),c(O[0]),r(!0)),1==g&&(console.log("22222"),o(O[1]),s(!0)),2==g&&(console.log("33333"),a(O[2]),i(!0)),3==g&&(console.log("44444"),u(O[3]),l(!0));return e.abrupt("return",!0);case 20:e.prev=20,e.t0=e.catch(3),console.error("ERROR get is user added by friends in flux");case 23:case"end":return e.stop()}}),e,null,[[3,20]])})));return function(t,n,c,r,o,s,a,i,u){return e.apply(this,arguments)}}(),addFriendsToDB:function(){var e=Object(j.a)(d.a.mark((function e(n){var c,r,o,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t(),r={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+c.token},body:JSON.stringify(n)},e.prev=2,e.next=5,fetch("".concat("http://localhost:5000","/addfriend"),r);case 5:if(200===(o=e.sent).status){e.next=9;break}return alert("idk what this error would be in add friends to db"),e.abrupt("return",!1);case 9:return e.next=11,o.json();case 11:return s=e.sent,console.log(s),e.abrupt("return",!0);case 16:e.prev=16,e.t0=e.catch(2),console.error("ERROR add friends to db in flux");case 19:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t){return e.apply(this,arguments)}}(),getGraph:function(){var e=Object(j.a)(d.a.mark((function e(n,c,r){var o,s,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("IN GET GRAPH?"),o=t(),s={headers:{Authorization:"Bearer "+o.token}},e.prev=3,e.next=6,fetch("".concat("http://localhost:5000","/mainpage/session"),s);case 6:if(200===(a=e.sent).status){e.next=10;break}return alert("Error, no email found in the database"),e.abrupt("return",!1);case 10:return e.next=12,a.json();case 12:return i=e.sent,console.log("this came from the graph",i),n(i.nodes),r(i.links),c(i.user),e.abrupt("return",!0);case 20:e.prev=20,e.t0=e.catch(3),console.error("ERROR get graph");case 23:case"end":return e.stop()}}),e,null,[[3,20]])})));return function(t,n,c){return e.apply(this,arguments)}}(),getMessage:function(){fetch(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_TEST:"http://localhost:5000"}).BACKEND_URL+"/api/hello").then((function(e){return e.json()})).then((function(e){return c({message:e.message})})).catch((function(e){return console.log("Error loading message from backend",e)}))},changeColor:function(e,n){console.log("IN CHANGE OCLR?");var r=t().demo.map((function(t,c){return c===e&&(t.background=n),t}));c({demo:r})}}}},p=n(9),h=r.a.createContext(null),O=function(e){return function(t){var n=Object(c.useState)(b({getStore:function(){return o.store},getActions:function(){return o.actions},setStore:function(e){return s({store:Object.assign(o.store,e),actions:Object(u.a)({},o.actions)})}})),r=Object(a.a)(n,2),o=r[0],s=r[1];return Object(c.useEffect)((function(){o.actions.syncTokenFromSessionStore()}),[]),Object(p.jsx)(h.Provider,{value:o,children:Object(p.jsx)(e,Object(u.a)({},t))})}},g=function(e){e.notEntered;var t=e.setnotEntered,n=Object(c.useState)(""),r=Object(a.a)(n,2),o=r[0],s=r[1],i=Object(c.useState)(""),u=Object(a.a)(i,2),l=u[0],d=u[1],j=Object(c.useState)(""),b=Object(a.a)(j,2),O=b[0],g=b[1],f=Object(c.useState)(!1),x=Object(a.a)(f,2),m=x[0],v=x[1],S=Object(c.useState)(!1),k=Object(a.a)(S,2),y=k[0],N=k[1],C=Object(c.useContext)(h),E=(C.store,C.actions),w=(sessionStorage.token,function(e){e.preventDefault(),N(!y)});return Object(p.jsx)("div",{className:"cred-container",children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(o,l,O,m),E.signup(o,l,O).then((function(){console.log("SETING NOTENTERED TO FALSE"),t(!1)}))},children:[Object(p.jsx)("div",{className:"form-control",children:Object(p.jsx)("input",{type:"text",placeholder:"Name",value:o,onChange:function(e){return s(e.target.value)}})}),Object(p.jsx)("div",{className:"form-control",children:Object(p.jsx)("input",{type:"text",placeholder:"Email",value:l,onChange:function(e){return d(e.target.value)}})}),Object(p.jsxs)("div",{className:"form-control",children:[Object(p.jsx)("input",{type:y?"text":"password",placeholder:"Password",value:O,onChange:function(e){return g(e.target.value)}}),y?Object(p.jsx)("button",{type:"button",className:"show-password-btn",onClick:w,style:{background:"url('https://img.icons8.com/material-outlined/24/000000/closed-eye.png')"}}):Object(p.jsx)("button",{type:"button",className:"show-password-btn",onClick:w,style:{background:"url('https://img.icons8.com/material-outlined/24/000000/visible--v2.png')"}})]}),Object(p.jsxs)("div",{className:"form-control-check",children:[Object(p.jsx)("input",{type:"checkbox",checked:m,value:m,onChange:function(e){return v(e.currentTarget.checked)}}),Object(p.jsx)("label",{children:"Remember me"})]}),Object(p.jsx)("input",{type:"submit",value:"Sign up",className:"btn btn-block"})]})})},f=function(e){e.signIn;var t=e.setSignIn,n=Object(c.useContext)(h),r=n.store,o=n.actions,s=Object(c.useState)(""),u=Object(a.a)(s,2),l=u[0],d=u[1],j=Object(c.useState)(""),b=Object(a.a)(j,2),O=b[0],g=b[1],f=Object(c.useState)(!1),x=Object(a.a)(f,2),m=x[0],v=x[1],S=Object(c.useState)(!1),k=Object(a.a)(S,2),y=k[0],N=k[1],C=(sessionStorage.token,Object(i.g)()),E=function(e){e.preventDefault(),N(!y)};return r.token&&""!=r.token&&void 0!=r.token&&C.push("/mainpage"),Object(p.jsx)("div",{children:r.token&&""!=r.token&&void 0!=r.token?Object(p.jsx)(i.a,{to:"/mainpage"}):Object(p.jsxs)("div",{className:"signup-header",children:[Object(p.jsx)("script",{src:"https://kit.fontawesome.com/a076d05399.js",crossorigin:"anonymous"}),Object(p.jsx)("h1",{children:"Log in"}),Object(p.jsx)("div",{className:"cred-container",children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.login(l,O).then((function(){t(!0)}))},children:[Object(p.jsx)("div",{className:"form-control",children:Object(p.jsx)("input",{type:"text",placeholder:"Email",value:l,onChange:function(e){return d(e.target.value)}})}),Object(p.jsxs)("div",{className:"form-control",children:[Object(p.jsx)("input",{type:y?"text":"password",placeholder:"Password",value:O,onChange:function(e){return g(e.target.value)}}),y?Object(p.jsx)("button",{type:"button",className:"show-password-btn",onClick:E,style:{background:"url('https://img.icons8.com/material-outlined/24/000000/closed-eye.png')"}}):Object(p.jsx)("button",{type:"button",className:"show-password-btn",onClick:E,style:{background:"url('https://img.icons8.com/material-outlined/24/000000/visible--v2.png')"}})]}),Object(p.jsxs)("div",{className:"form-control-check",children:[Object(p.jsx)("input",{type:"checkbox",checked:m,value:m,onChange:function(e){return v(e.currentTarget.checked)}}),Object(p.jsx)("label",{children:"Remember me"})]}),Object(p.jsx)("input",{type:"submit",value:"Sign in",className:"btn btn-block"})]})})]})})},x=function(e){e.onAdd;var t=e.setSignIn,n=Object(c.useState)(""),r=Object(a.a)(n,2),o=r[0],s=r[1],i=Object(c.useState)(""),u=Object(a.a)(i,2),l=u[0],d=u[1],j=Object(c.useState)(""),b=Object(a.a)(j,2),O=b[0],g=b[1],f=Object(c.useState)(""),x=Object(a.a)(f,2),m=x[0],v=x[1],S=Object(c.useContext)(h),k=(S.store,S.actions),y=Object(c.useState)(!1),N=Object(a.a)(y,2),C=N[0],E=N[1],w=Object(c.useState)(!1),I=Object(a.a)(w,2),T=I[0],A=I[1],R=Object(c.useState)(!1),D=Object(a.a)(R,2),F=D[0],P=D[1],_=Object(c.useState)(!1),B=Object(a.a)(_,2),L=B[0],G=B[1],U=Object(c.useState)([]),H=Object(a.a)(U,2),J=H[0],K=H[1];Object(c.useEffect)((function(){k.getIsUserAddedByFriends(K,s,E,d,A,g,P,v,G).then((function(){console.log("yay"),console.log("here is my email array",J)})),console.log("^^in addfriend, list of friends pls")}),[]);return Object(p.jsxs)("form",{className:"add-friend-container",onSubmit:function(e){e.preventDefault();var n={friendName1:o,friendName2:l,friendName3:O,friendName4:m};console.log(n);var c=k.addFriendsToDB(n);t(c)},children:[Object(p.jsxs)("div",{className:"add-friend-form",children:[Object(p.jsx)("label",{children:"1."}),C?Object(p.jsx)("input",{type:"text",placeholder:"friri",value:o}):Object(p.jsx)("input",{type:"text",placeholder:"Add Friend",value:o,onChange:function(e){return s(e.target.value)}})]}),Object(p.jsxs)("div",{className:"add-friend-form",children:[Object(p.jsx)("label",{children:"2."}),T?Object(p.jsx)("input",{type:"text",placeholder:"friri",value:l}):Object(p.jsx)("input",{type:"text",placeholder:"Add Friend",value:l,onChange:function(e){return d(e.target.value)}})]}),Object(p.jsxs)("div",{className:"add-friend-form",children:[Object(p.jsx)("label",{children:"3."}),F?Object(p.jsx)("input",{type:"text",placeholder:"friri",value:O}):Object(p.jsx)("input",{type:"text",placeholder:"Add Friend",value:O,onChange:function(e){return g(e.target.value)}})]}),Object(p.jsxs)("div",{className:"add-friend-form",children:[Object(p.jsx)("label",{children:"4."}),L?Object(p.jsx)("input",{type:"text",placeholder:"friri",value:m}):Object(p.jsx)("input",{type:"text",placeholder:"Add Friend",value:m,onChange:function(e){return v(e.target.value)}})]}),Object(p.jsx)("input",{type:"submit",value:"Continue",className:"btn btn-block"})]})},m=function(e){console.log(e)},v=function(e){var t=e.signIn,n=e.setSignIn,r=Object(c.useState)(!0),o=Object(a.a)(r,2),s=o[0],i=o[1],u=Object(c.useState)(!1),l=Object(a.a)(u,2),d=l[0],j=l[1],b=Object(c.useContext)(h),O=b.store;b.actions;return console.log("does it at least comehere"),Object(p.jsx)("div",{className:"login-container",children:O.token?Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"add-friends-header",children:"Add a maximum of 4 people to your Covid-19 social bubble"}),Object(p.jsx)(x,{onAdd:m,setSignIn:n})]}):d?Object(p.jsx)(f,{signIn:t,setSignIn:n}):Object(p.jsxs)("div",{className:"signup-header",children:[Object(p.jsx)("h1",{children:"Create account"}),Object(p.jsx)("h2",{children:"Already have an account? "})," ",Object(p.jsx)("h2",{className:"link",onClick:function(){j(!0)},style:{cursor:"pointer"},children:"Sign in"}),Object(p.jsx)(g,{notEntered:s,setnotEntered:i})]})})},S=function(e){var t=e.signIn,n=e.setSignIn;return t?Object(p.jsx)(i.a,{to:"/mainpage"}):Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"loginBox",children:Object(p.jsx)(v,{signIn:t,setSignIn:n})})})},k=n(66),y=function(e){var t=e.setSignIn,n=e.signIn,r=Object(c.useContext)(h),o=r.store,s=r.actions,u=Object(c.useState)([]),l=Object(a.a)(u,2),d=l[0],j=l[1],b=Object(c.useState)([]),O=Object(a.a)(b,2),g=O[0],f=O[1],x=Object(c.useState)([]),m=Object(a.a)(x,2),v=m[0],S=m[1],y=Object(c.useState)(!1),N=Object(a.a)(y,2),C=N[0],E=N[1],w=Object(c.useState)(!1),I=Object(a.a)(w,2);I[0],I[1],Object(i.g)();return Object(c.useEffect)((function(){n&&s.getGraph(j,S,f).then((function(){E(!0)}))}),[]),Object(p.jsx)("div",{children:o.token?C?Object(p.jsxs)("div",{children:[Object(p.jsxs)("h1",{style:{textAlign:"center"},children:[v,"'s Social Bubble"]}),Object(p.jsx)("button",{className:"btn btn-block",onClick:function(){s.logout(),t(!1),i.a},children:" Sign Out "}),Object(p.jsx)(k.a,{graphData:{nodes:d,links:g},nodeId:"id",nodeColor:function(e){return 1===e.group?"#E6550D":2===e.group?"#FD8D3C":"#36A7F9"},nodeVal:function(e){return Math.pow(1===e.group?1.25:1.15,3)}})]}):Object(p.jsx)("div",{children:Object(p.jsx)("h1",{style:{textAlign:"center"},children:"Loading..."})}):Object(p.jsx)(i.a,{to:"/"})})},N=n(27);var C=O((function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(p.jsx)(N.a,{children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"content-wrapper",children:Object(p.jsxs)(i.d,{children:[Object(p.jsx)(i.b,{exact:!0,path:"/",component:function(){return Object(p.jsx)(S,{signIn:n,setSignIn:r})}}),Object(p.jsx)(i.b,{exact:!0,path:"/mainpage",component:function(){return Object(p.jsx)(y,{setSignIn:r,signIn:n})}})]})})})})})),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,165)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),o(e),s(e)}))};s.a.render(Object(p.jsx)(C,{}),document.getElementById("root")),E()},77:function(e,t,n){},78:function(e,t,n){}},[[150,1,2]]]);
//# sourceMappingURL=main.00ede0b3.chunk.js.map