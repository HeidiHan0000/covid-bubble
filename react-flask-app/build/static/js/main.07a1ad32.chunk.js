(this["webpackJsonpreact-flask-app"]=this["webpackJsonpreact-flask-app"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(14),r=n.n(a),s=(n(22),n(4)),o=(n.p,n(23),n(0)),i=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(o.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};i.defaultProps={color:"steelblue",text:"Add"};var l=i,j=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)("h1",{children:t}),Object(o.jsx)(l,{onClick:n,color:c?"red":"green"})]})};j.defaultProps={title:"Task Tracker"};n(17);var u=n(2),b=function(e){var t=e.notEntered,n=e.setnotEntered,a=Object(c.useState)(""),r=Object(s.a)(a,2),i=r[0],l=r[1],j=Object(c.useState)(""),u=Object(s.a)(j,2),b=u[0],d=u[1],h=Object(c.useState)(""),O=Object(s.a)(h,2),x=O[0],p=O[1],g=Object(c.useState)(!1),m=Object(s.a)(g,2),f=m[0],v=m[1];return Object(o.jsx)("div",{className:"cred-container",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(i,b,x,f);var c={name:i,email:b,password:x};fetch("".concat("http://localhost:5000","/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){return console.log(e)})),n(!t)},children:[Object(o.jsx)("div",{className:"form-control",children:Object(o.jsx)("input",{type:"text",placeholder:"Name",value:i,onChange:function(e){return l(e.target.value)}})}),Object(o.jsx)("div",{className:"form-control",children:Object(o.jsx)("input",{type:"text",placeholder:"Email",value:b,onChange:function(e){return d(e.target.value)}})}),Object(o.jsx)("div",{className:"form-control",children:Object(o.jsx)("input",{type:"text",placeholder:"Password",value:x,onChange:function(e){return p(e.target.value)}})}),Object(o.jsxs)("div",{className:"form-control-check",children:[Object(o.jsx)("input",{type:"checkbox",checked:f,value:f,onChange:function(e){return v(e.currentTarget.checked)}}),Object(o.jsx)("label",{children:"Remember me"})]}),Object(o.jsx)("input",{type:"submit",value:"Sign up",className:"btn btn-block"})]})})},d=function(e){e.signIn;var t=e.setSignIn,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],i=a[1],l=Object(c.useState)(""),j=Object(s.a)(l,2),u=j[0],b=j[1],d=Object(c.useState)(!1),h=Object(s.a)(d,2),O=h[0],x=h[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Log in"}),Object(o.jsx)("div",{className:"cred-container",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={email:r,password:u};fetch("".concat("http://localhost:5000","/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){201===e.status?alert("Incorrect Email or Password"):t(!0),e.json()})).then((function(e){return console.log(e)}))},children:[Object(o.jsx)("div",{className:"form-control",children:Object(o.jsx)("input",{type:"text",placeholder:"Email",value:r,onChange:function(e){return i(e.target.value)}})}),Object(o.jsx)("div",{className:"form-control",children:Object(o.jsx)("input",{type:"text",placeholder:"Password",value:u,onChange:function(e){return b(e.target.value)}})}),Object(o.jsxs)("div",{className:"form-control-check",children:[Object(o.jsx)("input",{type:"checkbox",checked:O,value:O,onChange:function(e){return x(e.currentTarget.checked)}}),Object(o.jsx)("label",{children:"Remember me"})]}),Object(o.jsx)("input",{type:"submit",value:"Sign in",className:"btn btn-block"})]})})]})},h=function(e){var t=e.signIn,n=e.setSignIn,a=Object(c.useState)(!0),r=Object(s.a)(a,2),i=r[0],l=r[1],j=Object(c.useState)(!1),u=Object(s.a)(j,2),h=u[0],O=u[1];return Object(o.jsx)("div",{className:"login-container",children:i?h?Object(o.jsx)(d,{signIn:t,setSignIn:n}):Object(o.jsxs)("div",{className:"signup-header",children:[Object(o.jsx)("h1",{children:"Create account"}),Object(o.jsx)("h2",{children:"Already have an account? "})," ",Object(o.jsx)("h2",{onClick:function(){O(!0)},style:{cursor:"pointer",color:"lightblue"},children:"Sign in"}),Object(o.jsx)(b,{notEntered:i,setnotEntered:l})]}):Object(o.jsx)("h1",{children:"Successfully entered"})})},O=function(e){var t=e.signIn,n=e.setSignIn;return t?Object(o.jsx)(u.a,{to:"/mainpage"}):Object(o.jsx)("div",{className:"loginBox",children:Object(o.jsx)(h,{signIn:t,setSignIn:n})})},x=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Mainpage"})})};var p=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(o.jsx)(u.d,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"content-wrapper",children:[Object(o.jsx)(u.b,{exact:!0,path:"/",component:function(){return Object(o.jsx)(O,{signIn:n,setSignIn:a})}}),Object(o.jsx)(u.b,{exact:!0,path:"/mainpage",component:x})]})})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},m=n(9);r.a.render(Object(o.jsx)(m.a,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.07a1ad32.chunk.js.map