(this["webpackJsonpreact-flask-app"]=this["webpackJsonpreact-flask-app"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),o=n.n(a),s=(n(10),n(2)),l=(n.p,n(11),n(0)),i=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(l.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};i.defaultProps={color:"steelblue",text:"Add"};var j=i,u=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{children:t}),Object(l.jsx)(j,{onClick:n,color:c?"red":"green"})]})};u.defaultProps={title:"Task Tracker"};n(5);var d=function(e){var t=e.notEntered,n=e.setnotEntered,r=Object(c.useState)(""),a=Object(s.a)(r,2),o=a[0],i=a[1],j=Object(c.useState)(""),u=Object(s.a)(j,2),d=u[0],b=u[1],h=Object(c.useState)(!1),O=Object(s.a)(h,2),x=O[0],f=O[1];return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(o,d,x);var c={name:o,email:d};fetch("".concat("http://localhost:5000","/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){return console.log(e)})),n(!t)},children:[Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Name"}),Object(l.jsx)("input",{type:"text",placeholder:"Name",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Email"}),Object(l.jsx)("input",{type:"text",placeholder:"Email",value:d,onChange:function(e){return b(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control form-control-check",children:[Object(l.jsx)("label",{children:"Remember me"}),Object(l.jsx)("input",{type:"checkbox",checked:x,value:x,onChange:function(e){return f(e.currentTarget.checked)}})]}),Object(l.jsx)("input",{type:"submit",value:"Sign up",className:"btn btn-block"})]})},b=function(){var e=Object(c.useState)(!0),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("div",{children:[n?Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Create account"}),Object(l.jsx)("h2",{children:"Already have an account? Sign in"})]}):Object(l.jsx)("h1",{children:"Successfully entered"}),n&&Object(l.jsx)(d,{notEntered:n,setnotEntered:r})]})};var h=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2);return t[0],t[1],Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"loginBox",children:Object(l.jsx)(b,{})})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),O()}},[[13,1,2]]]);
//# sourceMappingURL=main.1cc221ef.chunk.js.map