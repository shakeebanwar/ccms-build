"use strict";(self.webpackChunkccms=self.webpackChunkccms||[]).push([[3387],{63358:(e,t,r)=>{r.d(t,{A:()=>p});var a=r(56801),n=r.n(a),s=r(6368),o=r(82053),l=r(22707),i=r(26689),c=r(52432),d=r(44414);function h(e){let{links:t,activeLast:r=!1,...a}=e;const n=t[t.length-1].name,l=t.map((e=>(0,d.jsx)(x,{link:e},e.name))),i=t.map((e=>(0,d.jsx)("div",{children:e.name!==n?(0,d.jsx)(x,{link:e}):(0,d.jsx)(o.A,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:n})},e.name)));return(0,d.jsx)(c.A,{separator:(0,d.jsx)(s.A,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}}),...a,children:r?l:i})}function x(e){let{link:t}=e;const{href:r,name:a,icon:n}=t;return(0,d.jsxs)(l.A,{variant:"body2",component:i.N_,to:r||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[n&&(0,d.jsx)(s.A,{sx:{mr:1,"& svg":{width:20,height:20}},children:n}),a]},a)}function p(e){let{links:t,action:r,heading:a,moreLink:i=[],sx:c,...x}=e;return(0,d.jsxs)(s.A,{sx:{mb:5,...c},children:[(0,d.jsxs)(s.A,{sx:{display:"flex",alignItems:"center"},children:[(0,d.jsxs)(s.A,{sx:{flexGrow:1},children:[(0,d.jsx)(o.A,{variant:"h4",gutterBottom:!0,children:a}),(0,d.jsx)(h,{links:t,...x})]}),r&&(0,d.jsx)(s.A,{sx:{flexShrink:0},children:r})]}),(0,d.jsx)(s.A,{sx:{mt:2},children:n()(i)?(0,d.jsx)(l.A,{href:i,target:"_blank",rel:"noopener",variant:"body2",children:i}):i.map((e=>(0,d.jsx)(l.A,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)))})]})}},44928:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var a=r(9950),n=r(79537),s=r(48089),o=r(63916),l=r(74745),i=r(82053),c=r(13564),d=r(1320),h=r(15769),x=r(69780),p=r(34075),u=r(9213),m=r(21671),A=r(91434),g=r(44185),j=r(63358),f=r(90260),b=r(86608),y=r(44414);const v=()=>{var e,t,r;const[v,w]=(0,a.useState)(0),[C,k]=(0,a.useState)(5),[S,L]=(0,a.useState)(""),{state:R}=(0,c.zy)();console.log(R,"state");const I=null===(e=R[0])||void 0===e||null===(t=e.data)||void 0===t?void 0:t.filter((e=>e.Name.toLowerCase().includes(S.toLowerCase())||e["Title of Individual"].toLowerCase().includes(S.toLowerCase())||e["Alternate Identity"].toLowerCase().includes(S.toLowerCase())||e["Street Address"].toLowerCase().includes(S.toLowerCase())||e.City.toLowerCase().includes(S.toLowerCase())||e.Country.toLowerCase().includes(S.toLowerCase())||e["Sanctions Program"].toLowerCase().includes(S.toLowerCase()))),{themeStretch:B}=(0,b.A)();return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(n.A,{maxWidth:!B&&"lg",children:[(0,y.jsx)(j.A,{heading:"Result Found ".concat(null===(r=R[0])||void 0===r?void 0:r.results_found),links:[{name:"Dashboard",href:f.nB.root},{name:"Result"}]}),(0,y.jsxs)(s.A,{sx:{p:3},children:[(0,y.jsx)(o.A,{fullWidth:!0,label:"Search",id:"fullWidth",value:S,onChange:e=>{L(e.target.value)},sx:{mb:3}}),(0,y.jsx)(l.A,{}),(0,y.jsx)(g.A,{children:(0,y.jsx)(d.A,{sx:{minWidth:800,maxHeight:440,position:"relative",textAlign:"center"},children:0===I.length?(0,y.jsx)(i.A,{variant:"body1",sx:{marginTop:"20px"},children:"No data found."}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(h.A,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,y.jsx)(x.A,{children:(0,y.jsxs)(u.A,{children:[(0,y.jsx)(m.A,{padding:"checkbox",children:"Name"}),(0,y.jsx)(m.A,{padding:"checkbox",children:"Title of Individual"}),(0,y.jsx)(m.A,{padding:"checkbox",children:"Alternate Identity"}),(0,y.jsx)(m.A,{padding:"checkbox",children:"Street Address"}),(0,y.jsx)(m.A,{padding:"checkbox",children:"City"}),(0,y.jsx)(m.A,{padding:"checkbox",children:"Country"}),(0,y.jsx)(m.A,{padding:"checkbox",children:"Sanctions Program"})]})}),(0,y.jsx)(p.A,{children:(C>0?I.slice(v*C,v*C+C):I).map(((e,t)=>(0,y.jsxs)(u.A,{children:[(0,y.jsx)(m.A,{children:e.Name}),(0,y.jsx)(m.A,{children:e["Title of Individual"]}),(0,y.jsx)(m.A,{children:e["Alternate Identity"]}),(0,y.jsx)(m.A,{children:e["Street Address"]}),(0,y.jsx)(m.A,{children:e.City}),(0,y.jsx)(m.A,{children:e.Country}),(0,y.jsx)(m.A,{children:e["Sanctions Program"]})]},t)))})]}),(0,y.jsx)(A.A,{rowsPerPageOptions:[5,10,25],component:"div",count:I.length,rowsPerPage:C,page:v,onPageChange:(e,t)=>{w(t)},onRowsPerPageChange:e=>{k(parseInt(e.target.value,10)),w(0)}})]})})})]})]})})}},52432:(e,t,r)=>{r.d(t,{A:()=>L});var a=r(58168),n=r(98587),s=r(9950),o=(r(26429),r(2803)),l=r(5747),i=r(7951),c=r(79859),d=r(82053),h=r(19657),x=r(65471),p=r(44414);const u=(0,x.A)((0,p.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var m=r(24184);const A=(0,i.Ay)(m.A)((e=>{let{theme:t}=e;return(0,a.A)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,a.A)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,a.A)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,h.tL)(t.palette.grey[200],.12)}:{backgroundColor:(0,h.tL)(t.palette.grey[600],.12)})})})),g=(0,i.Ay)(u)({width:24,height:16});const j=function(e){const t=e;return(0,p.jsx)("li",{children:(0,p.jsx)(A,(0,a.A)({focusRipple:!0},e,{ownerState:t,children:(0,p.jsx)(g,{ownerState:t})}))})};var f=r(37665);function b(e){return(0,f.A)("MuiBreadcrumbs",e)}const y=(0,r(44245).A)("MuiBreadcrumbs",["root","ol","li","separator"]),v=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],w=(0,i.Ay)(d.A,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{["& .".concat(y.li)]:t.li},t.root]})({}),C=(0,i.Ay)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),k=(0,i.Ay)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function S(e,t,r,a){return e.reduce(((n,s,o)=>(o<e.length-1?n=n.concat(s,(0,p.jsx)(k,{"aria-hidden":!0,className:t,ownerState:a,children:r},"separator-".concat(o))):n.push(s),n)),[])}const L=s.forwardRef((function(e,t){const r=(0,c.A)({props:e,name:"MuiBreadcrumbs"}),{children:i,className:d,component:h="nav",expandText:x="Show path",itemsAfterCollapse:u=1,itemsBeforeCollapse:m=1,maxItems:A=8,separator:g="/"}=r,f=(0,n.A)(r,v),[y,k]=s.useState(!1),L=(0,a.A)({},r,{component:h,expanded:y,expandText:x,itemsAfterCollapse:u,itemsBeforeCollapse:m,maxItems:A,separator:g}),R=(e=>{const{classes:t}=e;return(0,l.A)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},b,t)})(L),I=s.useRef(null),B=s.Children.toArray(i).filter((e=>s.isValidElement(e))).map(((e,t)=>(0,p.jsx)("li",{className:R.li,children:e},"child-".concat(t))));return(0,p.jsx)(w,(0,a.A)({ref:t,component:h,color:"text.secondary",className:(0,o.A)(R.root,d),ownerState:L},f,{children:(0,p.jsx)(C,{className:R.ol,ref:I,ownerState:L,children:S(y||A&&B.length<=A?B:(e=>m+u>=e.length?e:[...e.slice(0,m),(0,p.jsx)(j,{"aria-label":x,onClick:()=>{k(!0);const e=I.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-u,e.length)])(B),R.separator,g,L)})}))}))},30099:(e,t,r)=>{r.d(t,{A:()=>s});r(9950);var a=r(65471),n=r(44414);const s=(0,a.A)((0,n.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},88090:(e,t,r)=>{r.d(t,{A:()=>s});r(9950);var a=r(65471),n=r(44414);const s=(0,a.A)((0,n.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")}}]);