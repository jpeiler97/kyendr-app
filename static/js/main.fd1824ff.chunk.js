(this["webpackJsonpkeyndr-app"]=this["webpackJsonpkeyndr-app"]||[]).push([[0],{163:function(e,t,a){},164:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(13),r=a.n(i),s=a(20),o=a(15),l=a(8),j=a(9),d=a(198),b=a(166),m=a(200),u=a(218),O=a(217),h=a(202),x=a(196),p=a(2),g=Object(x.a)({root:{marginTop:"30px"},paper:{backgroundColor:"#c2ede4"},submitButton:{margin:"15px"},loginTitle:{fontSize:"25px",fontFamily:"Roboto"},innerPaper:{marginTop:"10px",marginBottom:"20px"}});var f=function(e){var t=e.Login,a=e.error,c=g(),i=Object(n.useState)({Email:"",Password:""}),r=Object(l.a)(i,2),o=r[0],x=r[1];return Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(o)},children:Object(p.jsx)(d.a,{maxWidth:"sm",className:c.root,children:Object(p.jsxs)(b.a,{className:c.paper,elevation:3,children:[Object(p.jsxs)(m.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:2,children:[Object(p.jsx)("h2",{className:c.loginTitle,children:"Login"}),Object(p.jsx)(u.a,{width:"70%",children:Object(p.jsxs)(b.a,{className:c.innerPaper,elevation:2,children:[Object(p.jsxs)(m.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:4,children:[Object(p.jsx)(m.a,{item:!0,children:Object(p.jsx)(O.a,{label:"Email",variant:"standard",type:"email",onChange:function(e){return x(Object(j.a)(Object(j.a)({},o),{},{Email:e.target.value}))},value:o.Email})}),Object(p.jsx)(m.a,{item:!0,children:Object(p.jsx)(O.a,{label:"Password",type:"password",variant:"standard",onChange:function(e){return x(Object(j.a)(Object(j.a)({},o),{},{Password:e.target.value}))},value:o.Password})})]}),""!==a?Object(p.jsx)("div",{className:"error",children:a}):""]})}),Object(p.jsx)(s.b,{to:"/register",children:"Sign Up"}),Object(p.jsx)(s.b,{to:"/resetpassword",children:"Forgot Password?"}),Object(p.jsx)(h.a,{className:c.submitButton,variant:"contained",type:"submit",value:"LOGIN",children:"LOGIN"})]}),Object(p.jsx)(m.a,{container:!0,direction:"column",alignItems:"center"})]})})})},v="https://ichntestserver.us1.gearhost.cloud",N=a.p+"static/media/logoNoBkg.b893081a.png",w=a(19),y=a.n(w);var C=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{className:"login-logo",src:N,alt:"KyendR"}),Object(p.jsx)(f,{Login:function(e){y.a.post("".concat(v,"/User/Login"),e).then((function(e){localStorage.setItem("login",JSON.stringify({login:!0,user:{firstName:e.data.firstName,lastName:e.data.lastName,email:e.data.email},token:e.data.token,expiration:e.data.expiration})),window.location.replace("".concat(window.location.pathname,"/"))})).catch((function(e){console.log(e),c("Could not log in")}))},error:a})]})},S=Object(x.a)({root:{marginTop:"30px"},paper:{backgroundColor:"#c2ede4"},submitButton:{margin:"15px"},registerTitle:{fontSize:"25px",fontFamily:"Roboto"},innerPaper:{marginTop:"10px",marginBottom:"20px"}});var I=function(e){var t=e.Register,a=e.error,c=S(),i=Object(n.useState)({email:"",password:"",confirmPassword:"",firstName:"",lastName:""}),r=Object(l.a)(i,2),o=r[0],x=r[1];return Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault(),o.password===o.confirmPassword&&t(o)},children:Object(p.jsx)(d.a,{maxWidth:"sm",className:c.root,children:Object(p.jsxs)(b.a,{className:c.paper,elevation:3,children:[Object(p.jsxs)(m.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:5,children:[Object(p.jsx)("h2",{className:c.registerTitle,children:"Register"}),Object(p.jsx)(u.a,{width:"70%",children:Object(p.jsxs)(b.a,{className:c.innerPaper,elevation:2,children:[Object(p.jsxs)(m.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(p.jsx)(m.a,{item:!0,children:Object(p.jsx)(O.a,{label:"First Name",variant:"standard",required:!0,onChange:function(e){return x(Object(j.a)(Object(j.a)({},o),{},{firstName:e.target.value}))},value:o.firstName})}),Object(p.jsx)(m.a,{item:!0,children:Object(p.jsx)(O.a,{label:"Last Name",variant:"standard",required:!0,onChange:function(e){return x(Object(j.a)(Object(j.a)({},o),{},{lastName:e.target.value}))},value:o.lastName})}),Object(p.jsx)(m.a,{item:!0,children:Object(p.jsx)(O.a,{label:"Email",variant:"standard",type:"email",required:!0,onChange:function(e){return x(Object(j.a)(Object(j.a)({},o),{},{email:e.target.value}))},value:o.email})}),Object(p.jsx)(m.a,{item:!0,children:Object(p.jsx)(O.a,{label:"Password",type:"password",required:!0,variant:"standard",onChange:function(e){return x(Object(j.a)(Object(j.a)({},o),{},{password:e.target.value}))},value:o.password})}),Object(p.jsx)(m.a,{item:!0,children:Object(p.jsx)(O.a,{label:"Confirm Password",type:"password",required:!0,variant:"standard",onChange:function(e){return x(Object(j.a)(Object(j.a)({},o),{},{confirmPassword:e.target.value}))},value:o.confirmPassword})})]}),""!==a?Object(p.jsx)("div",{className:"error",children:a}):""]})}),Object(p.jsx)(s.b,{to:"/login",children:"Log in"}),Object(p.jsx)(h.a,{className:c.submitButton,variant:"contained",type:"submit",value:"LOGIN",children:"SIGN UP"})]}),Object(p.jsx)(m.a,{container:!0,direction:"column",alignItems:"center"})]})})})};var k=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{className:"login-logo",src:N,alt:"KyendR"}),Object(p.jsx)(I,{Register:function(e){y.a.post("".concat(v,"/User/Register"),e).then((function(e){console.log(e),window.location.replace("/")})).catch((function(e){console.log(e),c("Could not sign up")}))},error:a})]})},P=a(221),D=a(203),B=a(204),R=a(82),L=a.n(R);function T(e){var t="".concat(e,"Z");return new Date(t).toLocaleString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}var A=Object(x.a)({root:{width:"90%"},descDiv:{whiteSpace:"wrap",width:"65%"},uncommit:{backgroundColor:"#c46956",height:"30px"},date:{fontSize:"12px"},content:{justifyContent:"space-between",alignItems:"center"}});var U=function(e){var t=e.title,a=e.description,n=e.details,c=e.date,i=e.id,r=e.Uncommit,s=A();return Object(p.jsxs)(P.a,{className:s.root,children:[Object(p.jsxs)(D.a,{expandIcon:Object(p.jsx)(L.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",classes:{content:s.content},children:[Object(p.jsxs)(m.a,{container:!0,direction:"column",className:s.descDiv,children:[Object(p.jsx)(m.a,{item:!0,children:t}),Object(p.jsx)(m.a,{item:!0,className:s.date,children:T(c)})]}),Object(p.jsx)(h.a,{size:"small",onClick:function(e){return function(t){t.preventDefault(),t.stopPropagation(),r(e)}}(i),className:s.uncommit,children:"Uncommit"})]}),Object(p.jsx)(B.a,{children:Object(p.jsxs)(m.a,{container:!0,direction:"column",children:[Object(p.jsx)(m.a,{item:!0,children:n||"No Details"}),Object(p.jsx)("br",{}),Object(p.jsx)(m.a,{item:!0,children:a||"No Description"})]})})]})},E=a(205),z=a(61);var q=function(){var e=Object(n.useState)({commitments:[]}),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!0),r=Object(l.a)(i,2),s=r[0],o=r[1];Object(n.useEffect)((function(){j()}),[]);var j=function(){var e=JSON.parse(localStorage.getItem("login"));y.a.get("".concat(v,"/Provider/GetMyCommitments"),{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){o(!1),c(e.data)})).catch((function(e){return console.log(e)}))},d=function(e){var t=JSON.parse(localStorage.getItem("login"));y.a.post("".concat(v,"/Provider/Commit"),{needId:e,count:0},{headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(t){c(a.filter((function(t){return t.id!==e})))})).catch((function(e){return console.log(e)}))};return Object(p.jsx)("div",{children:s?Object(p.jsx)("div",{className:"loading",children:Object(p.jsx)(E.a,{})}):a.length>0?Object(p.jsx)(z.Transition,{items:a,from:{opacity:0},enter:{opacity:1,marginTop:"20px",marginBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",transform:"translate3d(0px,0,0)"},leave:{transform:"translate3d(500px,0,0)"},keys:function(e){return e.id},delay:100,children:function(e,t){return Object(p.jsx)(z.animated.div,{style:e,children:Object(p.jsx)(U,{props:e,id:t.id,title:t.name,description:t.description,details:t.details,date:t.expirationDate,Uncommit:d},t.id)})}}):Object(p.jsxs)("div",{className:"no-commitments",children:[Object(p.jsx)("h2",{children:"No Commitments yet."}),Object(p.jsx)("h3",{children:'View the "Fill a Need" page to find a new commitment.'})]})})},J=Object(x.a)({root:{width:"90%"},descDiv:{whiteSpace:"wrap"},commit:{backgroundColor:"#b3eba7",height:"30px","&:focus":{backgroundColor:"#b3eba7"}},disabled:{display:"none"},date:{fontSize:"12px"},content:{justifyContent:"space-between",alignItems:"center"},visible:{visibility:"visible"},invisible:{visibility:"hidden"}});var F=function(e){var t=e.title,a=e.description,c=e.details,i=e.date,r=e.id,s=e.count,o=e.needed,d=e.Commit,b=J(),u=Object(n.useState)({commitCount:0,needed:parseInt(o),count:parseInt(s),fulfilled:!1}),x=Object(l.a)(u,2),g=x[0],f=x[1],v=Object(n.useState)(""),N=Object(l.a)(v,2),w=N[0],y=N[1];return Object(p.jsxs)(P.a,{className:b.root,children:[Object(p.jsx)(D.a,{expandIcon:Object(p.jsx)(L.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",classes:{content:b.content},children:Object(p.jsxs)(m.a,{container:!0,direction:"column",className:b.descDiv,children:[Object(p.jsxs)(m.a,{item:!0,children:[t,Object(p.jsx)("hr",{})]}),Object(p.jsxs)(m.a,{item:!0,children:["Needs remaining: ",g.needed-g.count," ",Object(p.jsx)("hr",{})]}),Object(p.jsx)(m.a,{item:!0,className:b.date,children:T(i)}),Object(p.jsxs)(m.a,{container:!0,direction:"row",wrap:"nowrap",alignItems:"flex-end",children:[Object(p.jsx)(m.a,{item:!0,className:function(e,t){if(e-t<=1)return!0}(g.needed,g.count)?b.invisible:b.visible,children:Object(p.jsx)(O.a,{label:"# needs to fulfill",className:b.root,onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},onChange:function(e){return f(Object(j.a)(Object(j.a)({},g),{},{commitCount:e.target.value}))}})}),Object(p.jsxs)(m.a,{item:!0,children:[" ",g.count<g.needed?Object(p.jsx)(h.a,{color:"default",size:"small",onClick:function(e){return function(t){var a=parseInt(g.needed),n=parseInt(g.count),c=parseInt(g.commitCount);t.preventDefault(),t.stopPropagation(),c>0&&a-(n+c)>=0?(d(e,c,a,n),n+c!==a?(f(Object(j.a)(Object(j.a)({},g),{},{count:n+c})),y("")):f(Object(j.a)(Object(j.a)({},g),{},{count:g.needed,fulfilled:!0}))):1===a||a-n===1?d(e,1,a,n):y("Please enter a value")}}(r),className:b.commit,children:"Commit"}):Object(p.jsx)(h.a,{disabled:!0,size:"small",color:"disabled",children:"Commit"}),w]})]})]})}),Object(p.jsx)(B.a,{children:Object(p.jsxs)(m.a,{container:!0,direction:"column",children:[Object(p.jsx)(m.a,{item:!0,children:c||"No Details"}),Object(p.jsx)("br",{}),Object(p.jsx)(m.a,{item:!0,children:a||"No Description"})]})})]})};var W=function(){var e=Object(n.useState)({needs:[]}),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!0),r=Object(l.a)(i,2),s=r[0],o=r[1];Object(n.useEffect)((function(){j()}),[]);var j=function(){var e=JSON.parse(localStorage.getItem("login"));y.a.get("".concat(v,"/Provider/GetOpenOpportunities?daysOut=60"),{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){o(!1),c(e.data)})).catch((function(e){return console.log(e)}))},d=function(e,t,n,i){var r=JSON.parse(localStorage.getItem("login"));y.a.post("".concat(v,"/Provider/Commit"),{needId:e,count:t},{headers:{Authorization:"Bearer ".concat(r.token)}}).then((function(r){parseInt(i)+parseInt(t)===n&&c(a.filter((function(t){return t.id!==e})))})).catch((function(e){return console.log(e)}))};return Object(p.jsx)("div",{children:s?Object(p.jsx)("div",{className:"loading",children:Object(p.jsx)(E.a,{})}):a.length>0?Object(p.jsx)(z.Transition,{items:a,from:{opacity:0},enter:{opacity:1,marginTop:"20px",marginBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",transform:"translate3d(0px,0,0)"},leave:{transform:"translate3d(500px,0,0)"},keys:function(e){return e.id},delay:100,children:function(e,t){return Object(p.jsx)(z.animated.div,{style:e,children:Object(p.jsx)(F,{props:e,id:t.id,title:t.title,description:t.description,details:t.details,count:t.commitments,needed:t.needed,date:t.commitmentDate,Commit:d},t.id)})}}):Object(p.jsx)("div",{className:"no-commitments",children:Object(p.jsx)("h2",{children:"No Opportunities Available"})})})},G=Object(n.createContext)();function M(e){var t=e.children,a=Object(n.useState)(!1),c=Object(l.a)(a,2),i=c[0],r=c[1],s=Object(n.useState)({firstName:"",lastName:"",email:""}),o=Object(l.a)(s,2),j=o[0],d=o[1];return Object(n.useEffect)((function(){if(!i){var e=JSON.parse(localStorage.getItem("login"));e&&e.token&&(r(!0),d({firstName:e.user.firstName,lastName:e.user.lastName,email:e.user.email}))}}),[i]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(G.Provider,{value:{isAuthenticated:i,setIsAuthenticated:r,user:j,setUser:d},children:t})})}function K(){var e=Object(n.useContext)(G),t=e.user,a=e.setUser,c=Object(n.useState)({firstName:t.firstName,lastName:t.lastName,email:t.email}),i=Object(l.a)(c,2),r=i[0],s=i[1],o=Object(n.useState)(""),d=Object(l.a)(o,2),b=d[0],u=d[1];return Object(p.jsx)("div",{children:Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault(),function(e){var t=JSON.parse(localStorage.getItem("login"));y.a.post("".concat(v,"/User/UpdateMyData"),e,{headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(t){a(e)})).catch((function(e){console.log(e),u("Could not make changes")}))}(r)},children:Object(p.jsxs)(m.a,{container:!0,direction:"column",alignItems:"center",spacing:2,children:[Object(p.jsx)(m.a,{item:!0,children:Object(p.jsx)(O.a,{label:"First Name",variant:"standard",required:!0,onChange:function(e){return s(Object(j.a)(Object(j.a)({},r),{},{firstName:e.target.value}))},value:r.firstName})}),Object(p.jsx)(m.a,{item:!0,children:Object(p.jsx)(O.a,{label:"Last Name",variant:"standard",required:!0,onChange:function(e){return s(Object(j.a)(Object(j.a)({},r),{},{lastName:e.target.value}))},value:r.lastName})}),Object(p.jsx)(m.a,{item:!0,children:Object(p.jsx)(O.a,{label:"Email",variant:"standard",type:"email",required:!0,onChange:function(e){return s(Object(j.a)(Object(j.a)({},r),{},{email:e.target.value}))},value:r.email})}),Object(p.jsx)(m.a,{item:!0,children:Object(p.jsx)(h.a,{variant:"contained",type:"submit",value:"LOGIN",children:"Save Changes"})}),""!==b?Object(p.jsx)("div",{className:"error",children:b}):""]})})})}function H(){var e=Object(n.useContext)(G).user,t=Object(n.useState)({password2:"",error:""}),a=Object(l.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)({email:e.email,password:""}),s=Object(l.a)(r,2),o=s[0],d=s[1];return Object(p.jsx)("div",{children:Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault(),function(e){var t=JSON.parse(localStorage.getItem("login"));o.password===c.password2?y.a.post("".concat(v,"/User/ChangePassword"),e,{headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(e){console.log(e.data),i(Object(j.a)(Object(j.a)({},c),{},{error:"Password Changed"}))})).catch((function(e){console.log(e.response),i(Object(j.a)(Object(j.a)({},c),{},{error:"Could not make changes"}))})):i(Object(j.a)(Object(j.a)({},c),{},{error:"Passwords do not match"}))}(o)},children:Object(p.jsxs)(m.a,{container:!0,direction:"column",alignContent:"center",spacing:2,children:[Object(p.jsx)(m.a,{item:!0,children:Object(p.jsx)(O.a,{label:"Password",variant:"standard",required:!0,type:"password",onChange:function(e){return d(Object(j.a)(Object(j.a)({},o),{},{password:e.target.value}))},value:o.password})}),Object(p.jsx)(m.a,{item:!0,children:Object(p.jsx)(O.a,{label:"Confirm Password",variant:"standard",required:!0,type:"password",onChange:function(e){return i(Object(j.a)(Object(j.a)({},c),{},{password2:e.target.value}))},value:c.password2})}),Object(p.jsxs)(m.a,{item:!0,children:[""!==c.error?Object(p.jsx)("div",{className:"error",children:c.error}):"",Object(p.jsx)(h.a,{variant:"contained",type:"submit",children:"Change Password"})]})]})})})}var Q=function(){return Object(p.jsx)("div",{className:"welcome",children:Object(p.jsxs)(m.a,{container:!0,direction:"column",alignItems:"center",spacing:2,children:[Object(p.jsx)(m.a,{item:!0,xs:8,children:Object(p.jsx)(s.b,{to:"/meetaneed",style:{textDecoration:"none"},children:Object(p.jsx)(h.a,{style:{minWidth:"170px"},variant:"contained",color:"primary",children:"Fill a Need"})})}),Object(p.jsx)(m.a,{item:!0,xs:8,children:Object(p.jsx)(s.b,{to:"/commitments",style:{textDecoration:"none"},children:Object(p.jsx)(h.a,{style:{minWidth:"170px"},variant:"contained",color:"primary",children:"My Commitments"})})})]})})},V=a(74),Z=a(5),X=a(25),Y=a(220),$=a(209),_=a(210),ee=a(211),te=a(201),ae=a(85),ne=a(212),ce=a(167),ie=a(113),re=a.n(ie),se=a(114),oe=a.n(se),le=a(115),je=a.n(le),de=a(206),be=a(207),me=a(208),ue=a(213),Oe=a(214),he=a(215),xe=a(216),pe=a(112),ge=a.n(pe);var fe=function(e){var t=e.closeDrawer,a=Object(n.useContext)(G).setIsAuthenticated;return Object(p.jsx)(te.a,{children:Object(p.jsxs)(de.a,{button:!0,onClick:function(){var e=JSON.parse(localStorage.getItem("login"));e&&e.token&&y.a.post("".concat(v,"/User/Logout"),{withCredentials:!0},{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){localStorage.removeItem("login"),t(),a(!1)})).catch((function(e){localStorage.removeItem("login"),t(),a(!1),console.log(e.response)}))},children:[Object(p.jsx)(be.a,{children:Object(p.jsx)(ge.a,{})}),Object(p.jsx)(me.a,{primary:"Logout"})]})})},ve=240,Ne=Object(x.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),backgroundColor:"#c2ede4",justifyContent:"space-between"},appBarShift:{width:"calc(100% - ".concat(ve,"px)"),marginLeft:ve,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:ve,flexShrink:0},drawerPaper:{width:ve},drawerHeader:Object(j.a)(Object(j.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"space-between"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function we(){var e=Ne(),t=Object(X.a)(),a=c.a.useState(!1),n=Object(l.a)(a,2),i=n[0],r=n[1],j=Object(o.g)(),d=function(){r(!1)};return Object(p.jsxs)("div",{className:e.root,children:[Object(p.jsx)($.a,{}),Object(p.jsx)(_.a,{position:"fixed",className:Object(Z.a)(e.appBar,Object(V.a)({},e.appBarShift,i)),children:Object(p.jsx)(ee.a,{className:e.toolbar,children:Object(p.jsx)(ce.a,{"aria-label":"open drawer",onClick:function(){r(!0)},edge:"start",className:Object(Z.a)(e.menuButton,i?e.hide:void 0),children:Object(p.jsx)(re.a,{})})})}),Object(p.jsxs)(Y.a,{className:e.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:e.drawerPaper},children:[Object(p.jsxs)("div",{className:e.drawerHeader,children:[Object(p.jsx)(ae.a,{className:e.title,children:"KeyndR"}),Object(p.jsx)(ce.a,{onClick:d,children:"ltr"===t.direction?Object(p.jsx)(oe.a,{}):Object(p.jsx)(je.a,{})})]}),Object(p.jsx)(ne.a,{}),Object(p.jsx)(te.a,{children:Object(p.jsx)(s.b,{to:"/meetaneed",className:"/meetaneed"===j.pathname,style:{textDecoration:"none",color:"rgba(0, 0, 0, 0.87)"},onClick:d,children:Object(p.jsxs)(de.a,{button:!0,children:[Object(p.jsx)(be.a,{children:Object(p.jsx)(ue.a,{})}),Object(p.jsx)(me.a,{primary:"Fill a Need"})]})})}),Object(p.jsx)(te.a,{children:Object(p.jsx)(s.b,{to:"/commitments",className:"/commitments"===j.pathname,style:{textDecoration:"none",color:"rgba(0, 0, 0, 0.87)"},onClick:d,children:Object(p.jsxs)(de.a,{button:!0,children:[Object(p.jsx)(be.a,{children:Object(p.jsx)(Oe.a,{})}),Object(p.jsx)(me.a,{primary:"My Commitments"})]})})}),Object(p.jsx)(te.a,{children:Object(p.jsx)(s.b,{to:"/settings",className:"/settings"===j.pathname,style:{textDecoration:"none",color:"rgba(0, 0, 0, 0.87)"},onClick:d,children:Object(p.jsxs)(de.a,{button:!0,children:[Object(p.jsx)(be.a,{children:Object(p.jsx)(he.a,{})}),Object(p.jsx)(me.a,{primary:"Settings"})]})})}),Object(p.jsx)(te.a,{children:Object(p.jsx)(s.b,{to:"/changepassword",className:"/changepassword"===j.pathname,style:{textDecoration:"none",color:"rgba(0, 0, 0, 0.87)"},onClick:d,children:Object(p.jsxs)(de.a,{button:!0,children:[Object(p.jsx)(be.a,{children:Object(p.jsx)(xe.a,{})}),Object(p.jsx)(me.a,{primary:"Change Password"})]})})}),Object(p.jsx)(fe,{closeDrawer:d}),Object(p.jsx)("br",{}),"v5"]})]})}var ye=Object(x.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),backgroundColor:"#c2ede4"}}}));function Ce(){var e=ye();return Object(p.jsxs)("div",{className:e.root,children:[Object(p.jsx)($.a,{}),Object(p.jsx)(_.a,{position:"fixed",className:Object(Z.a)(e.appBar),children:Object(p.jsx)(ee.a,{})})]})}var Se=function(){var e=Object(n.useContext)(G).isAuthenticated;return Object(p.jsx)("div",{className:"nav",children:e?Object(p.jsx)(we,{}):Object(p.jsx)(Ce,{})})},Ie=(a(163),Object(x.a)({root:{marginTop:"30px"},paper:{backgroundColor:"#c2ede4"},submitButton:{margin:"15px"},loginTitle:{fontSize:"25px",fontFamily:"Roboto"},innerPaper:{marginTop:"10px",marginBottom:"20px"}}));var ke=function(e){var t=e.ResetPassword,a=e.error,c=Ie(),i=Object(n.useState)({email:""}),r=Object(l.a)(i,2),o=r[0],j=r[1];return Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(JSON.stringify(o.email))},children:Object(p.jsx)(d.a,{maxWidth:"sm",className:c.root,children:Object(p.jsx)(b.a,{className:c.paper,elevation:3,children:Object(p.jsxs)(m.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:2,children:[Object(p.jsx)("h2",{className:c.loginTitle,children:"Request New Password"}),Object(p.jsx)(u.a,{width:"70%",children:Object(p.jsxs)(b.a,{className:c.innerPaper,elevation:2,children:[Object(p.jsx)(m.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:4,children:Object(p.jsx)(m.a,{item:!0,children:Object(p.jsx)(O.a,{label:"Enter Email",variant:"standard",type:"email",onChange:function(e){return j({email:e.target.value})},value:o.email})})}),""!==a?Object(p.jsx)("div",{className:"error",children:a}):""]})}),Object(p.jsx)(s.b,{to:"/login",children:"Return to login screen"}),Object(p.jsx)(h.a,{className:c.submitButton,variant:"contained",type:"submit",value:"REQUEST PASSWORD",children:"Request Password"})]})})})})};var Pe=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(p.jsx)("div",{className:"register-page",children:Object(p.jsx)(ke,{ResetPassword:function(e){y.a.post("".concat(v,"/User/RequestNewPassword"),e,{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){console.log(e.data),c("Password Reset")})).catch((function(e){console.log(e.response),c("Could not send password link")}))},error:a})})};var De=Object(o.h)((function(){var e=Object(n.useContext)(G).isAuthenticated;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(Se,{}),Object(p.jsxs)(o.d,{children:[Object(p.jsx)(o.b,{exact:!0,path:"/",children:e?Object(p.jsx)(Q,{}):Object(p.jsx)(o.a,{to:"/login"})}),Object(p.jsx)(o.b,{exact:!0,path:"/register",children:e?Object(p.jsx)(o.a,{to:"/"}):Object(p.jsx)(k,{})}),Object(p.jsx)(o.b,{exact:!0,path:"/login",children:e?Object(p.jsx)(o.a,{to:"/"}):Object(p.jsx)(C,{})}),Object(p.jsx)(o.b,{exact:!0,path:"/resetpassword",children:e?Object(p.jsx)(o.a,{to:"/"}):Object(p.jsx)(Pe,{})}),Object(p.jsx)(o.b,{path:"/commitments",children:e?Object(p.jsx)(q,{}):Object(p.jsx)(o.a,{to:"/login"})}),Object(p.jsx)(o.b,{path:"/meetaneed",children:e?Object(p.jsx)(W,{}):Object(p.jsx)(o.a,{to:"/login"})}),Object(p.jsx)(o.b,{path:"/settings",children:e?Object(p.jsx)(K,{}):Object(p.jsx)(o.a,{to:"/login"})}),Object(p.jsx)(o.b,{path:"/changepassword",children:e?Object(p.jsx)(H,{}):Object(p.jsx)(o.a,{to:"/login"})})]})]})}));r.a.render(Object(p.jsx)(s.a,{children:Object(p.jsx)(M,{children:Object(p.jsx)(De,{})})}),document.getElementById("root")),window.isUpdateAvailable=new Promise((function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./serviceworker.js").then((function(t){t.onupdatefound=function(){var a=t.installing;a.onstatechange=function(){switch(a.state){case"installed":navigator.serviceWorker.controller?e(!0):e(!1)}}}})).catch((function(e){return console.log("Error: ",e)}))}))}))}},[[164,1,2]]]);
//# sourceMappingURL=main.fd1824ff.chunk.js.map