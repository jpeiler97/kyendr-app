(this["webpackJsonpi-can-help-login"]=this["webpackJsonpi-can-help-login"]||[]).push([[0],{141:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(10),r=n.n(c),s=n(29),o=n(11),l=n(45),j=n(46),d=n(51),b=n(50),m=n(39),u=n(49),h=n(178),O=n(144),x=n(180),p=n(193),g=n(192),f=n(182),v=n(176),y=n(2),N=Object(v.a)({root:{marginTop:"30px"},paper:{backgroundColor:"#c2ede4"},submitButton:{margin:"15px"},loginTitle:{fontSize:"30px",fontFamily:"Roboto"},innerPaper:{marginTop:"10px",marginBottom:"20px"}});var w=function(e){var t=e.Login,n=e.error,i=N(),c=Object(a.useState)({Email:"",Password:""}),r=Object(u.a)(c,2),s=r[0],o=r[1];return Object(y.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(s)},children:Object(y.jsx)(h.a,{maxWidth:"sm",className:i.root,children:Object(y.jsxs)(O.a,{className:i.paper,elevation:3,children:[Object(y.jsxs)(x.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:2,children:[Object(y.jsx)("h2",{className:i.loginTitle,children:"Login"}),Object(y.jsx)(p.a,{width:"70%",children:Object(y.jsxs)(O.a,{className:i.innerPaper,elevation:2,children:[Object(y.jsxs)(x.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:4,children:[Object(y.jsx)(x.a,{item:!0,children:Object(y.jsx)(g.a,{id:"outlined-basic",label:"Email",variant:"standard",type:"email",onChange:function(e){return o(Object(m.a)(Object(m.a)({},s),{},{Email:e.target.value}))},value:s.Email})}),Object(y.jsx)(x.a,{item:!0,children:Object(y.jsx)(g.a,{id:"outlined-basic",label:"Password",type:"password",variant:"standard",onChange:function(e){return o(Object(m.a)(Object(m.a)({},s),{},{Password:e.target.value}))},value:s.Password})})]}),""!==n?Object(y.jsx)("div",{className:"error",children:n}):""]})}),Object(y.jsx)(f.a,{className:i.submitButton,variant:"contained",type:"submit",value:"LOGIN",children:"LOGIN"})]}),Object(y.jsx)(x.a,{container:!0,direction:"column",alignItems:"center"})]})})})},C="https://ichntestserver.us1.gearhost.cloud",S=n.p+"static/media/logoNoBkg.b893081a.png",k=n(37),I=n.n(k),B=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).Login=function(t){I.a.post("".concat(C,"/User/Login"),t).then((function(t){console.log(t),localStorage.setItem("login",JSON.stringify({login:!0,token:t.data.token})),e.storeCollector(),window.location.replace("".concat(window.location.pathname,"/"))})).catch((function(t){console.log(t),e.setState({error:"Could not log in"})}))},e.state={Email:null,Password:null,login:!1,store:null,error:""},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.storeCollector()}},{key:"storeCollector",value:function(){var e=JSON.parse(localStorage.getItem("login"));e&&e.login&&this.setState({login:!0,store:e,error:""})}},{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("img",{className:"login-logo",src:S,alt:"KyendR"}),Object(y.jsx)(w,{Login:this.Login,error:this.state.error})]})}}]),n}(i.a.Component),L=n(196),D=n(183),P=n(184),A=n(91),J=n.n(A),M=Object(v.a)({opportunityCard:{whiteSpace:"unset"},paper:{backgroundColor:"#ecf2d8"}});var E=function(e){var t=e.title,n=e.description,a=e.details,i=M(),c=i.opportunityCard;return i.paper,Object(y.jsx)(x.a,{container:!0,item:!0,xs:8,sm:6,md:4,className:c,children:Object(y.jsxs)(L.a,{children:[Object(y.jsxs)(D.a,{expandIcon:Object(y.jsx)(J.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:[t," ",Object(y.jsx)("br",{}),Object(y.jsx)("br",{})," ",n]}),Object(y.jsx)(P.a,{children:a})]})})},F=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={commitments:[]},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getCommitments()}},{key:"getCommitments",value:function(){var e=this,t=JSON.parse(localStorage.getItem("login"));I.a.get("".concat(C,"/Provider/GetMyCommitments"),{headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(t){console.log(t),e.setState({commitments:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(y.jsx)("div",{children:this.state.commitments.length>0?Object(y.jsx)(x.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:2,children:this.state.commitments.map((function(e,t){return Object(y.jsx)(E,{title:e.title,description:e.description,details:e.details},e.id)}))}):Object(y.jsxs)("div",{className:"no-commitments",children:[Object(y.jsx)("h2",{children:"No Commitments yet."}),Object(y.jsx)("h3",{children:'View the "Fill a Need" page to find a new commitment.'})]})})}}]),n}(i.a.Component),G=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={needs:[]},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getNeeds()}},{key:"getNeeds",value:function(){var e=this,t=JSON.parse(localStorage.getItem("login"));I.a.get("".concat(C,"/Provider/GetOpenOpportunities?daysOut=60"),{headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(t){return e.setState({needs:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(y.jsx)("div",{children:Object(y.jsx)(x.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:2,children:this.state.needs.map((function(e,t){return Object(y.jsx)(E,{title:e.title,description:e.description,details:e.details},e.id)}))})})}}]),n}(i.a.Component);var T=function(){return Object(y.jsx)("div",{children:"To Be Developed"})},z=Object(a.createContext)();function H(e){var t=e.children,n=Object(a.useState)(!1),i=Object(u.a)(n,2),c=i[0],r=i[1];return Object(a.useEffect)((function(){if(!c){var e=JSON.parse(localStorage.getItem("login"));e&&e.token&&r(!0)}}),[]),Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(z.Provider,{value:{isAuthenticated:c,setIsAuthenticated:r},children:t})})}var R=n(181),W=n(185),K=n(186),U=n(187),V=n(92),q=n.n(V);var Q=function(e){var t=e.closeDrawer,n=Object(a.useContext)(z).setIsAuthenticated;return Object(y.jsx)(R.a,{children:Object(y.jsxs)(W.a,{button:!0,onClick:function(){var e=JSON.parse(localStorage.getItem("login"));e&&e.token&&I.a.post("".concat(C,"/User/Logout"),{withCredentials:!0},{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){console.log(e),localStorage.removeItem("login"),t(),n(!1)})).catch((function(e){return console.log(e.response)}))},children:[Object(y.jsx)(K.a,{children:Object(y.jsx)(q.a,{})}),Object(y.jsx)(U.a,{primary:"Logout"})]})})};var X=function(){var e=Object(o.g)();return Object(y.jsx)("div",{className:"welcome",children:Object(y.jsxs)(x.a,{container:!0,direction:"column",alignItems:"center",spacing:2,children:[Object(y.jsx)(x.a,{item:!0,xs:8,children:Object(y.jsx)(s.b,{to:"/meetaneed",className:"/meetaneed"===e.pathname,style:{textDecoration:"none"},children:Object(y.jsx)(f.a,{style:{minWidth:"170px"},variant:"contained",color:"primary",children:"Fill a Need"})})}),Object(y.jsx)(x.a,{item:!0,xs:8,children:Object(y.jsx)(s.b,{to:"/commitments",style:{textDecoration:"none"},className:"/commitments"===e.pathname,children:Object(y.jsx)(f.a,{style:{minWidth:"170px"},variant:"contained",color:"primary",children:"My Commitments"})})}),Object(y.jsx)(x.a,{item:!0,xs:8,children:Object(y.jsx)(s.b,{to:"/history",className:"/history"===e.pathname,style:{textDecoration:"none"},children:Object(y.jsx)(f.a,{style:{minWidth:"170px"},variant:"contained",color:"primary",children:"My History"})})})]})})},Y=n(61),Z=n(4),$=n(18),_=n(195),ee=n(188),te=n(189),ne=n(190),ae=n(69),ie=n(191),ce=n(145),re=n(93),se=n.n(re),oe=n(94),le=n.n(oe),je=n(95),de=n.n(je),be=n(98),me=n.n(be),ue=n(97),he=n.n(ue),Oe=n(96),xe=n.n(Oe),pe=240,ge=Object(v.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),backgroundColor:"#c2ede4"},appBarShift:{width:"calc(100% - ".concat(pe,"px)"),marginLeft:pe,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:pe,flexShrink:0},drawerPaper:{width:pe},drawerHeader:Object(m.a)(Object(m.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"space-between"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function fe(){var e=ge(),t=Object($.a)(),n=i.a.useState(!1),a=Object(u.a)(n,2),c=a[0],r=a[1],l=Object(o.g)(),j=function(){r(!1)};return Object(y.jsxs)("div",{className:e.root,children:[Object(y.jsx)(ee.a,{}),Object(y.jsx)(te.a,{position:"fixed",className:Object(Z.a)(e.appBar,Object(Y.a)({},e.appBarShift,c)),children:Object(y.jsx)(ne.a,{children:Object(y.jsx)(ce.a,{"aria-label":"open drawer",onClick:function(){r(!0)},edge:"start",className:Object(Z.a)(e.menuButton,c&&e.hide),children:Object(y.jsx)(se.a,{})})})}),Object(y.jsxs)(_.a,{className:e.drawer,variant:"persistent",anchor:"left",open:c,classes:{paper:e.drawerPaper},children:[Object(y.jsxs)("div",{className:e.drawerHeader,children:[Object(y.jsx)(ae.a,{children:"KeyndR"}),Object(y.jsx)(ce.a,{onClick:j,children:"ltr"===t.direction?Object(y.jsx)(le.a,{}):Object(y.jsx)(de.a,{})})]}),Object(y.jsx)(ie.a,{}),Object(y.jsx)(R.a,{children:Object(y.jsx)(s.b,{to:"/meetaneed",className:"/meetaneed"===l.pathname,style:{textDecoration:"none",color:"rgba(0, 0, 0, 0.87)"},onClick:j,children:Object(y.jsxs)(W.a,{button:!0,children:[Object(y.jsx)(K.a,{children:Object(y.jsx)(xe.a,{})}),Object(y.jsx)(U.a,{primary:"Fill a Need"})]})})}),Object(y.jsx)(R.a,{children:Object(y.jsx)(s.b,{to:"/commitments",className:"/commitments"===l.pathname,style:{textDecoration:"none",color:"rgba(0, 0, 0, 0.87)"},onClick:j,children:Object(y.jsxs)(W.a,{button:!0,children:[Object(y.jsx)(K.a,{children:Object(y.jsx)(he.a,{})}),Object(y.jsx)(U.a,{primary:"My Commitments"})]})})}),Object(y.jsx)(R.a,{children:Object(y.jsxs)(W.a,{button:!0,children:[Object(y.jsx)(K.a,{children:Object(y.jsx)(me.a,{})}),Object(y.jsx)(U.a,{primary:"My History"})]})}),Object(y.jsx)(Q,{closeDrawer:j})]})]})}var ve=function(){return Object(y.jsx)("div",{className:"nav",children:Object(y.jsx)(fe,{})})};n(141);var ye=Object(o.h)((function(){var e=Object(a.useContext)(z),t=(e.userObject,e.isAuthenticated);return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(ve,{}),Object(y.jsxs)(o.d,{children:[Object(y.jsx)(o.b,{exact:!0,path:"/",children:t?Object(y.jsx)(X,{}):Object(y.jsx)(o.a,{to:"/login"})}),Object(y.jsx)(o.b,{exact:!0,path:"/login",children:t?Object(y.jsx)(o.a,{to:"/"}):Object(y.jsx)(B,{})}),Object(y.jsx)(o.b,{path:"/commitments",children:t?Object(y.jsx)(F,{}):Object(y.jsx)(o.a,{to:"/login"})}),Object(y.jsx)(o.b,{path:"/meetaneed",children:t?Object(y.jsx)(G,{}):Object(y.jsx)(o.a,{to:"/login"})}),Object(y.jsx)(o.b,{path:"/history",children:t?Object(y.jsx)(T,{}):Object(y.jsx)(o.a,{to:"/login"})})]})]})}));r.a.render(Object(y.jsx)(s.a,{children:Object(y.jsx)(H,{children:Object(y.jsx)(ye,{})})}),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.f9aa3b2c.chunk.js.map