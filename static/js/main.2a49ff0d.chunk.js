(this["webpackJsonptravclan-frontend"]=this["webpackJsonptravclan-frontend"]||[]).push([[0],{63:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),i=a.n(r),o=(a(63),a(19)),s=a(21),l=a(8),j=a(26),d=a(29),b=a(94),h=a(95),m=a(108),u=a(98),g=a(54),O=a(99),x=a(100),p=a(101),f=a(96),v=a(97),k=a(107),N=a(5),w=a(91),B=a(93),C=a(2),y=Object(w.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}},circle:{position:"absolute",top:"50%",left:"50%"}}}));function T(){var e=y();return Object(C.jsx)("div",{className:e.root,children:Object(C.jsx)(B.a,{className:e.circle})})}var S=a(51),D=a.n(S);var E=function(e){var t=e.customerData,a=Object(n.useState)(0),c=Object(o.a)(a,2),r=c[0],i=c[1],l=Object(n.useState)({checkedB:!1,increasing:!1,decreasing:!0}),B=Object(o.a)(l,2),y=B[0],S=B[1],E=function(e){return e.reduce((function(e,t){return e.amount<t.amount?t:e}),{amount:0})},L=function(e){return e.sort((function(e,t){var a=E(e.bids),n=E(t.bids);return a.amount-n.amount}))},M=Object(N.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(b.a),A=Object(N.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(h.a),P=Object(w.a)({table:{width:"50%",margin:"auto"},img:{display:"inline-block"},toggleBtn:{padding:20,alignItems:"center",width:"36%",margin:"auto",float:"right"},toggleBtn1:{padding:20,alignItems:"center",width:"35%",margin:"auto",float:"right"},link:{textDecoration:"none"},name:{position:"relative",top:-15,paddingLeft:10}})();if(0===t.length)return Object(C.jsx)(T,{});y.increasing?L(t):t=L(t).reverse();var z=5*r,G=t.slice(z,z+5).map((function(e){return Object(C.jsxs)(A,{children:[Object(C.jsx)(s.b,{className:P.link,to:"/customer-detail/"+e.id,children:Object(C.jsxs)(M,{component:"th",scope:"row",children:[Object(C.jsx)(m.a,{className:P.img,alt:e.firsname,src:e.avatarUrl}),Object(C.jsxs)("span",{className:P.name,children:[e.firstname,"\xa0",e.lastname]})]})}),Object(C.jsx)(M,{align:"right",children:e.email}),Object(C.jsx)(M,{align:"right",children:e.phone}),Object(C.jsx)(M,{align:"right",children:e.hasPremium?"True":"False"}),Object(C.jsx)(M,{align:"right",children:y.checkedB?(t=e.bids,t.reduce((function(e,t){return e.amount>t.amount?t:e}),{amount:1e11})).amount:E(e.bids).amount})]},e.id);var t})),I=Math.ceil(t.length/5);return Object(C.jsxs)("div",{children:[Object(C.jsxs)(f.a,{row:!0,className:P.toggleBtn,children:["Show Min/Max bid \xa0",Object(C.jsx)(v.a,{control:Object(C.jsx)(k.a,{checked:y.checkedB,onChange:function(e){S(Object(d.a)(Object(d.a)({},y),{},Object(j.a)({},e.target.name,e.target.checked)))},name:"checkedB",color:"primary"})})]}),Object(C.jsxs)(f.a,{row:!0,className:P.toggleBtn1,children:["Sort by Bid \xa0",Object(C.jsx)(v.a,{control:Object(C.jsx)(k.a,{checked:y.increasing,onChange:function(e){S(Object(d.a)(Object(d.a)({},y),{},Object(j.a)({},e.target.name,e.target.checked)))},name:"increasing",color:"primary"})})]}),Object(C.jsx)(u.a,{component:g.a,children:Object(C.jsxs)(O.a,{className:P.table,"aria-label":"customized table",children:[Object(C.jsx)(x.a,{children:Object(C.jsxs)(h.a,{children:[Object(C.jsx)(M,{children:"Customer Name"}),Object(C.jsx)(M,{align:"right",children:"Email"}),Object(C.jsx)(M,{align:"right",children:"Phone"}),Object(C.jsx)(M,{align:"right",children:"Premium"}),Object(C.jsxs)(M,{align:"right",children:[y.checkedB?"Min":"Max"," Bid"]})]})}),Object(C.jsxs)(p.a,{children:[G,Object(C.jsx)(D.a,{previousLabel:"Previous",nextLabel:"Next",pageCount:I,onPageChange:function(e){var t=e.selected;i(t)},containerClassName:"paginationBttns",previousLinkClassName:"previousBttn",nextLinkClassName:"nextBttn",disabledClassName:"paginationDisabled",activeClassName:"paginationActive"})]})]})})]})},L=a(102),M=a(103),A=a(30);var P=function(){var e=Object(w.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1}}}))();return Object(C.jsx)("div",{className:e.root,children:Object(C.jsx)(L.a,{position:"static",children:Object(C.jsx)(M.a,{children:Object(C.jsx)(A.a,{variant:"h6",className:e.title,children:"TravClan Customer Data"})})})})},z=a(104),G=a(105),I=a(106),J=a(52),U=a.n(J);var W=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],r=a[1];Object(n.useEffect)((function(){var t="https://intense-tor-76305.herokuapp.com/merchants?id="+e.match.params.customer_id;fetch(t,{method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e.json()})).then((function(e){r(e[0])}))}),[]);var i=Object(N.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(b.a),l=Object(N.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(h.a),j=Object(w.a)((function(e){return{root:{maxWidth:345,margin:"auto"},media:{height:0,paddingTop:"56.25%"},avatar:{backgroundColor:"#3f51b5"},backBtn:{textAlign:"center",background:"#3f51b5",width:"6%",margin:"auto",marginTop:30,marginBottom:30,borderRadius:12,paddingBottom:10},link:{textDecoration:"none",color:"white"},icon:{position:"relative",top:"5px"},bids:{margin:50},table:{minWidth:700,width:"50%",margin:"auto"},error:{background:"#3f51b5",color:"white",padding:10,width:"50%",margin:"auto",textAlign:"center",marginTop:30}}}))();return 0===c.length?Object(C.jsx)(T,{}):Object(C.jsxs)("div",{children:[Object(C.jsx)(s.b,{to:"/",className:j.link,children:Object(C.jsxs)("div",{className:j.backBtn,children:[Object(C.jsx)(U.a,{className:j.icon})," Back"]})}),Object(C.jsxs)(z.a,{className:j.root,children:[Object(C.jsx)(G.a,{avatar:Object(C.jsx)(m.a,{"aria-label":"recipe",className:j.avatar,children:c.firstname.substring(0,1)}),title:c.firstname+" "+c.lastname,subheader:c.email}),Object(C.jsx)(I.a,{className:j.media,image:c.avatarUrl,title:c.firstname})]}),c.bids.length?Object(C.jsx)("div",{className:j.bids,children:Object(C.jsx)(u.a,{component:g.a,children:Object(C.jsxs)(O.a,{className:j.table,"aria-label":"customized table",children:[Object(C.jsx)(x.a,{children:Object(C.jsxs)(h.a,{children:[Object(C.jsx)(i,{children:"S.No"}),Object(C.jsx)(i,{align:"right",children:"Car Title"}),Object(C.jsx)(i,{align:"right",children:"Amount"})]})}),Object(C.jsx)(p.a,{children:c.bids.map((function(e,t){return Object(C.jsxs)(l,{children:[Object(C.jsx)(i,{children:t}),Object(C.jsx)(i,{align:"right",children:e.carTitle}),Object(C.jsx)(i,{align:"right",children:e.amount})]},e.id)}))})]})})}):Object(C.jsx)("div",{className:j.error,children:"Oh! You Don't have Any Bids"})]})};var _=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){fetch("https://intense-tor-76305.herokuapp.com/merchants",{method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e.json()})).then((function(e){c(e)}))}),[]),Object(C.jsxs)(s.a,{children:[Object(C.jsx)(P,{}),Object(C.jsxs)(l.c,{children:[Object(C.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(C.jsx)("div",{children:Object(C.jsx)(E,{customerData:a})})}}),Object(C.jsx)(l.a,{exact:!0,path:"/customer-detail/:customer_id",component:W})]})]})};i.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(_,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.2a49ff0d.chunk.js.map