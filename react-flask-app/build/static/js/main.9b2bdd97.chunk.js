(this["webpackJsonpreact-flask-app"]=this["webpackJsonpreact-flask-app"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),s=n.n(a),o=(n(10),n(2)),l=(n.p,n(11),n(0)),i=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(l.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};i.defaultProps={color:"steelblue",text:"Add"};var j=i,u=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{children:t}),Object(l.jsx)(j,{onClick:n,color:c?"red":"green"})]})};u.defaultProps={title:"Task Tracker"};n(5);var d=function(e){var t=e.notEntered,n=e.setnotEntered,r=Object(c.useState)(""),a=Object(o.a)(r,2),s=a[0],i=a[1],j=Object(c.useState)(""),u=Object(o.a)(j,2),d=u[0],b=u[1],h=Object(c.useState)(""),O=Object(o.a)(h,2),p=O[0],x=O[1],f=Object(c.useState)(!1),v=Object(o.a)(f,2),m=v[0],g=v[1];return Object(l.jsx)("div",{className:"cred-container",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(s,d,p,m);var c={name:s,email:d,password:p};fetch("".concat("http://localhost:5000","/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){return console.log(e)})),n(!t)},children:[Object(l.jsx)("div",{className:"form-control",children:Object(l.jsx)("input",{type:"text",placeholder:"Name",value:s,onChange:function(e){return i(e.target.value)}})}),Object(l.jsx)("div",{className:"form-control",children:Object(l.jsx)("input",{type:"text",placeholder:"Email",value:d,onChange:function(e){return b(e.target.value)}})}),Object(l.jsx)("div",{className:"form-control",children:Object(l.jsx)("input",{type:"text",placeholder:"Password",value:p,onChange:function(e){return x(e.target.value)}})}),Object(l.jsxs)("div",{className:"form-control-check",children:[Object(l.jsx)("input",{type:"checkbox",checked:m,value:m,onChange:function(e){return g(e.currentTarget.checked)}}),Object(l.jsx)("label",{children:"Remember me"})]}),Object(l.jsx)("input",{type:"submit",value:"Sign up",className:"btn btn-block"})]})})},b=function(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(o.a)(a,2),i=s[0],j=s[1];return Object(l.jsx)("div",{className:"login-container",children:n?i?Object(l.jsx)("h1",{children:"sign in please"}):Object(l.jsxs)("div",{className:"signup-header",children:[Object(l.jsx)("h1",{children:"Create account"}),Object(l.jsx)("h2",{children:"Already have an account? "})," ",Object(l.jsx)("h2",{onClick:function(){j(!0)},style:{cursor:"pointer"},children:"Sign in"}),Object(l.jsx)(d,{notEntered:n,setnotEntered:r})]}):Object(l.jsx)("h1",{children:"Successfully entered"})})};var h=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2);return t[0],t[1],Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"loginBox",children:Object(l.jsx)(b,{})})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),O()}},[[13,1,2]]]);
//# sourceMappingURL=main.9b2bdd97.chunk.js.map