(this["webpackJsonpkeyndr-app"]=this["webpackJsonpkeyndr-app"]||[]).push([[0],{144:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(10),r=n.n(i),o=n(22),s=n(11),l=n(58),j=n(59),d=n(70),b=n(69),m=n(13),u=n(20),O=n(179),h=n(147),x=n(181),g=n(195),p=n(194),f=n(183),v=n(177),N=n(2),w=Object(v.a)({root:{marginTop:"30px"},paper:{backgroundColor:"#c2ede4"},submitButton:{margin:"15px"},loginTitle:{fontSize:"25px",fontFamily:"Roboto"},innerPaper:{marginTop:"10px",marginBottom:"20px"}});var y=function(e){var t=e.Login,n=e.error,c=w(),i=Object(a.useState)({Email:"",Password:""}),r=Object(u.a)(i,2),s=r[0],l=r[1];return Object(N.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(s)},children:Object(N.jsx)(O.a,{maxWidth:"sm",className:c.root,children:Object(N.jsxs)(h.a,{className:c.paper,elevation:3,children:[Object(N.jsxs)(x.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:2,children:[Object(N.jsx)("h2",{className:c.loginTitle,children:"Login"}),Object(N.jsx)(g.a,{width:"70%",children:Object(N.jsxs)(h.a,{className:c.innerPaper,elevation:2,children:[Object(N.jsxs)(x.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:4,children:[Object(N.jsx)(x.a,{item:!0,children:Object(N.jsx)(p.a,{label:"Email",variant:"standard",type:"email",onChange:function(e){return l(Object(m.a)(Object(m.a)({},s),{},{Email:e.target.value}))},value:s.Email})}),Object(N.jsx)(x.a,{item:!0,children:Object(N.jsx)(p.a,{label:"Password",type:"password",variant:"standard",onChange:function(e){return l(Object(m.a)(Object(m.a)({},s),{},{Password:e.target.value}))},value:s.Password})})]}),""!==n?Object(N.jsx)("div",{className:"error",children:n}):""]})}),Object(N.jsx)(o.b,{to:"/register",children:"Sign Up"}),Object(N.jsx)(f.a,{className:c.submitButton,variant:"contained",type:"submit",value:"LOGIN",children:"LOGIN"})]}),Object(N.jsx)(x.a,{container:!0,direction:"column",alignItems:"center"})]})})})},C="https://ichntestserver.us1.gearhost.cloud",S=n.p+"static/media/logoNoBkg.b893081a.png",k=n(27),I=n.n(k),P=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).Login=function(t){I.a.post("".concat(C,"/User/Login"),t).then((function(t){console.log(t.data),localStorage.setItem("login",JSON.stringify({login:!0,token:t.data.token,expiration:t.data.expiration})),e.storeCollector(),window.location.replace("".concat(window.location.pathname,"/"))})).catch((function(t){console.log(t),e.setState({error:"Could not log in"})}))},e.state={Email:null,Password:null,login:!1,store:null,error:""},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.storeCollector()}},{key:"storeCollector",value:function(){var e=JSON.parse(localStorage.getItem("login"));e&&e.login&&this.setState({login:!0,store:e,error:""})}},{key:"render",value:function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)("img",{className:"login-logo",src:S,alt:"KyendR"}),Object(N.jsx)(y,{Login:this.Login,error:this.state.error})]})}}]),n}(c.a.Component),D=Object(v.a)({root:{marginTop:"30px"},paper:{backgroundColor:"#c2ede4"},submitButton:{margin:"15px"},registerTitle:{fontSize:"25px",fontFamily:"Roboto"},innerPaper:{marginTop:"10px",marginBottom:"20px"}});var B=function(e){var t=e.Register,n=e.error,c=D(),i=Object(a.useState)({email:"",password:"",confirmPassword:"",firstName:"",lastName:""}),r=Object(u.a)(i,2),s=r[0],l=r[1];return Object(N.jsx)("form",{onSubmit:function(e){e.preventDefault(),s.password===s.confirmPassword&&t(s)},children:Object(N.jsx)(O.a,{maxWidth:"sm",className:c.root,children:Object(N.jsxs)(h.a,{className:c.paper,elevation:3,children:[Object(N.jsxs)(x.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:5,children:[Object(N.jsx)("h2",{className:c.registerTitle,children:"Register"}),Object(N.jsx)(g.a,{width:"70%",children:Object(N.jsxs)(h.a,{className:c.innerPaper,elevation:2,children:[Object(N.jsxs)(x.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(N.jsx)(x.a,{item:!0,children:Object(N.jsx)(p.a,{label:"First Name",variant:"standard",required:!0,onChange:function(e){return l(Object(m.a)(Object(m.a)({},s),{},{firstName:e.target.value}))},value:s.firstName})}),Object(N.jsx)(x.a,{item:!0,children:Object(N.jsx)(p.a,{label:"Last Name",variant:"standard",required:!0,onChange:function(e){return l(Object(m.a)(Object(m.a)({},s),{},{lastName:e.target.value}))},value:s.lastName})}),Object(N.jsx)(x.a,{item:!0,children:Object(N.jsx)(p.a,{label:"Email",variant:"standard",type:"email",required:!0,onChange:function(e){return l(Object(m.a)(Object(m.a)({},s),{},{email:e.target.value}))},value:s.email})}),Object(N.jsx)(x.a,{item:!0,children:Object(N.jsx)(p.a,{label:"Password",type:"password",required:!0,variant:"standard",onChange:function(e){return l(Object(m.a)(Object(m.a)({},s),{},{password:e.target.value}))},value:s.password})}),Object(N.jsx)(x.a,{item:!0,children:Object(N.jsx)(p.a,{label:"Confirm Password",type:"password",required:!0,variant:"standard",onChange:function(e){return l(Object(m.a)(Object(m.a)({},s),{},{confirmPassword:e.target.value}))},value:s.confirmPassword})})]}),""!==n?Object(N.jsx)("div",{className:"error",children:n}):""]})}),Object(N.jsx)(o.b,{to:"/login",children:"Log in"}),Object(N.jsx)(f.a,{className:c.submitButton,variant:"contained",type:"submit",value:"LOGIN",children:"SIGN UP"})]}),Object(N.jsx)(x.a,{container:!0,direction:"column",alignItems:"center"})]})})})},L=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).Register=function(t){I.a.post("".concat(C,"/User/Register"),t).then((function(t){localStorage.setItem("login",JSON.stringify({login:!0,token:t.data.token})),e.storeCollector()})).catch((function(t){console.log(t),e.setState({error:"Could not sign up"})}))},e.state={Email:null,Password:null,login:!1,store:null,error:""},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.storeCollector()}},{key:"storeCollector",value:function(){var e=JSON.parse(localStorage.getItem("login"));e&&e.login&&this.setState({login:!0,store:e,error:""})}},{key:"render",value:function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)("img",{className:"login-logo",src:S,alt:"KyendR"}),Object(N.jsx)(B,{Register:this.Register,error:this.state.error})]})}}]),n}(c.a.Component),A=n(198),J=n(184),R=n(185),z=n(68),E=n.n(z);function T(e){var t="".concat(e,"Z");return new Date(t).toLocaleString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}var U=Object(v.a)({root:{width:"90%"},descDiv:{whiteSpace:"wrap",width:"65%"},uncommit:{backgroundColor:"#c46956",height:"30px"},date:{fontSize:"12px"},content:{justifyContent:"space-between",alignItems:"center"}});var F=function(e){var t=e.title,n=e.description,a=e.details,c=e.date,i=e.id,r=e.Uncommit,o=U();return Object(N.jsx)(x.a,{container:!0,item:!0,xs:12,justifyContent:"space-around",alignItems:"center",children:Object(N.jsxs)(A.a,{className:o.root,children:[Object(N.jsxs)(J.a,{expandIcon:Object(N.jsx)(E.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",classes:{content:o.content},children:[Object(N.jsxs)(x.a,{container:!0,direction:"column",className:o.descDiv,children:[Object(N.jsx)(x.a,{item:!0,children:t}),Object(N.jsx)(x.a,{item:!0,className:o.date,children:T(c)})]}),Object(N.jsx)(f.a,{size:"small",onClick:r(i),className:o.uncommit,children:"Uncommit"})]}),Object(N.jsx)(R.a,{children:Object(N.jsxs)(x.a,{container:!0,direction:"column",children:[Object(N.jsx)(x.a,{item:!0,children:a||"No Details"}),Object(N.jsx)("br",{}),Object(N.jsx)(x.a,{item:!0,children:n||"No Description"})]})})]})})},G=n(186);var q=function(){var e=Object(a.useState)({commitments:[]}),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!0),r=Object(u.a)(i,2),o=r[0],s=r[1];Object(a.useEffect)((function(){l()}),[]);var l=function(){var e=JSON.parse(localStorage.getItem("login"));I.a.get("".concat(C,"/Provider/GetMyCommitments"),{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){s(!1),c(e.data)})).catch((function(e){return console.log(e)}))},j=function(e){return function(t){t.stopPropagation(),t.preventDefault();var n=JSON.parse(localStorage.getItem("login"));I.a.post("".concat(C,"/Provider/Commit"),{needId:e,count:0},{headers:{Authorization:"Bearer ".concat(n.token)}}).then((function(e){l(e.data)})).catch((function(e){return console.log(e)}))}};return Object(N.jsx)("div",{children:o?Object(N.jsx)("div",{className:"loading",children:Object(N.jsx)(G.a,{})}):n.length>0?Object(N.jsx)(x.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:2,children:n.map((function(e,t){return Object(N.jsx)(F,{id:e.id,title:e.title,description:e.description,details:e.details,date:e.startDate,Uncommit:j},e.id)}))}):Object(N.jsxs)("div",{className:"no-commitments",children:[Object(N.jsx)("h2",{children:"No Commitments yet."}),Object(N.jsx)("h3",{children:'View the "Fill a Need" page to find a new commitment.'})]})})},M=Object(v.a)({root:{width:"90%"},descDiv:{whiteSpace:"wrap",width:"65%"},commit:{backgroundColor:"#b3eba7",height:"30px"},date:{fontSize:"12px"},content:{justifyContent:"space-between",alignItems:"center"}});var W=function(e){var t=e.title,n=e.description,a=e.details,c=e.date,i=e.id,r=e.Commit,o=M();return Object(N.jsx)(x.a,{container:!0,item:!0,xs:12,justifyContent:"space-around",alignItems:"center",children:Object(N.jsxs)(A.a,{className:o.root,children:[Object(N.jsxs)(J.a,{expandIcon:Object(N.jsx)(E.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",classes:{content:o.content},children:[Object(N.jsxs)(x.a,{container:!0,direction:"column",className:o.descDiv,children:[Object(N.jsx)(x.a,{item:!0,children:t}),Object(N.jsx)(x.a,{item:!0,className:o.date,children:T(c)})]}),Object(N.jsx)(f.a,{size:"small",onClick:r(i),className:o.commit,children:"Commit"})]}),Object(N.jsx)(R.a,{children:Object(N.jsxs)(x.a,{container:!0,direction:"column",children:[Object(N.jsx)(x.a,{item:!0,children:a||"No Details"}),Object(N.jsx)("br",{}),Object(N.jsx)(x.a,{item:!0,children:n||"No Description"})]})})]})})};var K=function(){var e=Object(a.useState)({needs:[]}),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!0),r=Object(u.a)(i,2),o=r[0],s=r[1];Object(a.useEffect)((function(){l()}),[]);var l=function(){var e=JSON.parse(localStorage.getItem("login"));I.a.get("".concat(C,"/Provider/GetOpenOpportunities?daysOut=60"),{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){s(!1),c(e.data)})).catch((function(e){return console.log(e)}))},j=function(e){return function(t){t.stopPropagation(),t.preventDefault();var n=JSON.parse(localStorage.getItem("login"));I.a.post("".concat(C,"/Provider/Commit"),{needId:e,count:1},{headers:{Authorization:"Bearer ".concat(n.token)}}).then((function(e){l()})).catch((function(e){return console.log(e)}))}};return Object(N.jsx)("div",{children:o?Object(N.jsx)("div",{className:"loading",children:Object(N.jsx)(G.a,{})}):n.length>0?Object(N.jsx)(x.a,{container:!0,direction:"column",spacing:2,children:n.map((function(e){return Object(N.jsx)(W,{id:e.id,title:e.title,description:e.description,details:e.details,date:e.commitmentDate,Commit:j},e.id)}))}):Object(N.jsx)("div",{className:"no-commitments",children:Object(N.jsx)("h2",{children:"No Opportunities Available"})})})};var H=function(){return Object(N.jsx)("div",{children:"To Be Developed"})};var V=function(){return Object(N.jsx)("div",{className:"welcome",children:Object(N.jsxs)(x.a,{container:!0,direction:"column",alignItems:"center",spacing:2,children:[Object(N.jsx)(x.a,{item:!0,xs:8,children:Object(N.jsx)(o.b,{to:"/meetaneed",style:{textDecoration:"none"},children:Object(N.jsx)(f.a,{style:{minWidth:"170px"},variant:"contained",color:"primary",children:"Fill a Need"})})}),Object(N.jsx)(x.a,{item:!0,xs:8,children:Object(N.jsx)(o.b,{to:"/commitments",style:{textDecoration:"none"},children:Object(N.jsx)(f.a,{style:{minWidth:"170px"},variant:"contained",color:"primary",children:"My Commitments"})})})]})})},Z=Object(a.createContext)();function Q(e){var t=e.children,n=Object(a.useState)(!1),c=Object(u.a)(n,2),i=c[0],r=c[1];return Object(a.useEffect)((function(){if(!i){var e=JSON.parse(localStorage.getItem("login"));e&&e.token&&r(!0)}}),[i]),Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(Z.Provider,{value:{isAuthenticated:i,setIsAuthenticated:r},children:t})})}var X=n(60),Y=n(4),$=n(19),_=n(197),ee=n(190),te=n(191),ne=n(192),ae=n(182),ce=n(71),ie=n(193),re=n(148),oe=n(93),se=n.n(oe),le=n(94),je=n.n(le),de=n(95),be=n.n(de),me=n(187),ue=n(188),Oe=n(189),he=n(97),xe=n.n(he),ge=n(96),pe=n.n(ge),fe=n(92),ve=n.n(fe);var Ne=function(e){var t=e.closeDrawer,n=Object(a.useContext)(Z).setIsAuthenticated;return Object(N.jsx)(ae.a,{children:Object(N.jsxs)(me.a,{button:!0,onClick:function(){var e=JSON.parse(localStorage.getItem("login"));e&&e.token&&I.a.post("".concat(C,"/User/Logout"),{withCredentials:!0},{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){localStorage.removeItem("login"),t(),n(!1)})).catch((function(e){localStorage.removeItem("login"),t(),n(!1),console.log(e.response)}))},children:[Object(N.jsx)(ue.a,{children:Object(N.jsx)(ve.a,{})}),Object(N.jsx)(Oe.a,{primary:"Logout"})]})})},we=240,ye=Object(v.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),backgroundColor:"#c2ede4",justifyContent:"space-between"},appBarShift:{width:"calc(100% - ".concat(we,"px)"),marginLeft:we,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:we,flexShrink:0},drawerPaper:{width:we},drawerHeader:Object(m.a)(Object(m.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"space-between"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function Ce(){var e=ye(),t=Object($.a)(),n=c.a.useState(!1),a=Object(u.a)(n,2),i=a[0],r=a[1],l=Object(s.g)(),j=function(){r(!1)};return Object(N.jsxs)("div",{className:e.root,children:[Object(N.jsx)(ee.a,{}),Object(N.jsx)(te.a,{position:"fixed",className:Object(Y.a)(e.appBar,Object(X.a)({},e.appBarShift,i)),children:Object(N.jsx)(ne.a,{className:e.toolbar,children:Object(N.jsx)(re.a,{"aria-label":"open drawer",onClick:function(){r(!0)},edge:"start",className:Object(Y.a)(e.menuButton,i?e.hide:void 0),children:Object(N.jsx)(se.a,{})})})}),Object(N.jsxs)(_.a,{className:e.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:e.drawerPaper},children:[Object(N.jsxs)("div",{className:e.drawerHeader,children:[Object(N.jsx)(ce.a,{className:e.title,children:"KeyndR"}),Object(N.jsx)(re.a,{onClick:j,children:"ltr"===t.direction?Object(N.jsx)(je.a,{}):Object(N.jsx)(be.a,{})})]}),Object(N.jsx)(ie.a,{}),Object(N.jsx)(ae.a,{children:Object(N.jsx)(o.b,{to:"/meetaneed",className:"/meetaneed"===l.pathname,style:{textDecoration:"none",color:"rgba(0, 0, 0, 0.87)"},onClick:j,children:Object(N.jsxs)(me.a,{button:!0,children:[Object(N.jsx)(ue.a,{children:Object(N.jsx)(pe.a,{})}),Object(N.jsx)(Oe.a,{primary:"Fill a Need"})]})})}),Object(N.jsx)(ae.a,{children:Object(N.jsx)(o.b,{to:"/commitments",className:"/commitments"===l.pathname,style:{textDecoration:"none",color:"rgba(0, 0, 0, 0.87)"},onClick:j,children:Object(N.jsxs)(me.a,{button:!0,children:[Object(N.jsx)(ue.a,{children:Object(N.jsx)(xe.a,{})}),Object(N.jsx)(Oe.a,{primary:"My Commitments"})]})})}),Object(N.jsx)(Ne,{closeDrawer:j}),Object(N.jsx)("br",{}),"v5"]})]})}var Se=Object(v.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),backgroundColor:"#c2ede4"}}}));function ke(){var e=Se();return Object(N.jsxs)("div",{className:e.root,children:[Object(N.jsx)(ee.a,{}),Object(N.jsx)(te.a,{position:"fixed",className:Object(Y.a)(e.appBar),children:Object(N.jsx)(ne.a,{})})]})}var Ie=function(){var e=Object(a.useContext)(Z).isAuthenticated;return Object(N.jsx)("div",{className:"nav",children:e?Object(N.jsx)(Ce,{}):Object(N.jsx)(ke,{})})};n(144);var Pe=Object(s.h)((function(){var e=Object(a.useContext)(Z).isAuthenticated;return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(Ie,{}),Object(N.jsxs)(s.d,{children:[Object(N.jsx)(s.b,{exact:!0,path:"/",children:e?Object(N.jsx)(V,{}):Object(N.jsx)(s.a,{to:"/login"})}),Object(N.jsx)(s.b,{exact:!0,path:"/register",children:e?Object(N.jsx)(s.a,{to:"/"}):Object(N.jsx)(L,{})}),Object(N.jsx)(s.b,{exact:!0,path:"/login",children:e?Object(N.jsx)(s.a,{to:"/"}):Object(N.jsx)(P,{})}),Object(N.jsx)(s.b,{path:"/commitments",children:e?Object(N.jsx)(q,{}):Object(N.jsx)(s.a,{to:"/login"})}),Object(N.jsx)(s.b,{path:"/meetaneed",children:e?Object(N.jsx)(K,{}):Object(N.jsx)(s.a,{to:"/login"})}),Object(N.jsx)(s.b,{path:"/history",children:e?Object(N.jsx)(H,{}):Object(N.jsx)(s.a,{to:"/login"})})]})]})}));r.a.render(Object(N.jsx)(o.a,{children:Object(N.jsx)(Q,{children:Object(N.jsx)(Pe,{})})}),document.getElementById("root"))}},[[145,1,2]]]);
//# sourceMappingURL=main.04621c26.chunk.js.map