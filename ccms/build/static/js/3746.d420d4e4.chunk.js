"use strict";(self.webpackChunkccms=self.webpackChunkccms||[]).push([[3746,5259],{63358:(e,r,t)=>{t.d(r,{A:()=>p});var l=t(56801),o=t.n(l),n=t(6368),s=t(82053),a=t(22707),i=t(26689),c=t(52432),d=t(44414);function h(e){let{links:r,activeLast:t=!1,...l}=e;const o=r[r.length-1].name,a=r.map((e=>(0,d.jsx)(x,{link:e},e.name))),i=r.map((e=>(0,d.jsx)("div",{children:e.name!==o?(0,d.jsx)(x,{link:e}):(0,d.jsx)(s.A,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:o})},e.name)));return(0,d.jsx)(c.A,{separator:(0,d.jsx)(n.A,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}}),...l,children:t?a:i})}function x(e){let{link:r}=e;const{href:t,name:l,icon:o}=r;return(0,d.jsxs)(a.A,{variant:"body2",component:i.N_,to:t||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[o&&(0,d.jsx)(n.A,{sx:{mr:1,"& svg":{width:20,height:20}},children:o}),l]},l)}function p(e){let{links:r,action:t,heading:l,moreLink:i=[],sx:c,...x}=e;return(0,d.jsxs)(n.A,{sx:{mb:5,...c},children:[(0,d.jsxs)(n.A,{sx:{display:"flex",alignItems:"center"},children:[(0,d.jsxs)(n.A,{sx:{flexGrow:1},children:[(0,d.jsx)(s.A,{variant:"h4",gutterBottom:!0,children:l}),(0,d.jsx)(h,{links:r,...x})]}),t&&(0,d.jsx)(n.A,{sx:{flexShrink:0},children:t})]}),(0,d.jsx)(n.A,{sx:{mt:2},children:o()(i)?(0,d.jsx)(a.A,{href:i,target:"_blank",rel:"noopener",variant:"body2",children:i}):i.map((e=>(0,d.jsx)(a.A,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)))})]})}},41179:(e,r,t)=>{t.r(r),t.d(r,{default:()=>b});var l=t(9950),o=t(79537),n=t(48089),s=t(8145),a=t(74745),i=t(82053),c=t(13564),d=t(1320),h=t(15769),x=t(69780),p=t(34075),u=t(9213),m=t(21671),g=t(91434),A=t(44185),v=t(63358),j=t(90260),f=t(86608),y=t(44414);const b=()=>{var e,r,t;const[b,w]=(0,l.useState)(0),[k,C]=(0,l.useState)(5),[_,S]=(0,l.useState)(""),{state:L}=(0,c.zy)();console.log(L,"state");const R=null===L||void 0===L||null===(e=L.all_scraped_results)||void 0===e?void 0:e.filter((e=>{var r,t,l;return(null===e||void 0===e?void 0:e.Agency_File_Number.toLowerCase().includes(_.toLowerCase()))||(null===e||void 0===e||null===(r=e.property_records[0])||void 0===r?void 0:r.Policy.toLowerCase().includes(_.toLowerCase()))||(null===e||void 0===e||null===(t=e.property_records[0])||void 0===t?void 0:t.Effective_Date.toLowerCase().includes(_.toLowerCase()))||(null===e||void 0===e||null===(l=e.property_records[0])||void 0===l?void 0:l.Agency_ID.toLowerCase().includes(_.toLowerCase()))})),{themeStretch:I}=(0,f.A)();return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(o.A,{maxWidth:!I&&"lg",children:[(0,y.jsx)(v.A,{heading:"Result Found ".concat(null===L||void 0===L||null===(r=L.all_scraped_results)||void 0===r?void 0:r.length),links:[{name:"Dashboard",href:j.nB.root},{name:"Result"}]}),(0,y.jsxs)(n.A,{sx:{p:3},children:[(0,y.jsx)(s.A,{fullWidth:!0,label:"Search",id:"fullWidth",value:_,onChange:e=>{S(e.target.value)},sx:{mb:3}}),(0,y.jsx)(a.A,{sx:{mb:3}}),(0,y.jsx)(A.A,{children:(0,y.jsx)(d.A,{sx:{minWidth:800,maxHeight:440,position:"relative",textAlign:"center"},children:0===(null===R||void 0===R?void 0:R.length)?(0,y.jsx)(i.A,{variant:"body1",sx:{marginTop:"20px"},children:"No data found."}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(h.A,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,y.jsx)(x.A,{children:(0,y.jsxs)(u.A,{children:[(0,y.jsx)(m.A,{padding:"checkbox",children:"Agency File Number"}),(0,y.jsx)(m.A,{padding:"checkbox",children:"Policy"}),(0,y.jsx)(m.A,{padding:"checkbox",children:"Effective Date"}),(0,y.jsx)(m.A,{padding:"checkbox",children:"Agency ID"}),(0,y.jsx)(m.A,{padding:"checkbox",children:"Image"})]})}),(0,y.jsx)(p.A,{children:null===(t=k>0?R.slice(b*k,b*k+k):R)||void 0===t?void 0:t.map(((e,r)=>{var t,l,o,n;return(0,y.jsxs)(u.A,{children:[(0,y.jsx)(m.A,{children:null===e||void 0===e?void 0:e.Agency_File_Number}),(0,y.jsx)(m.A,{children:null===e||void 0===e||null===(t=e.property_records[0])||void 0===t?void 0:t.Policy}),(0,y.jsx)(m.A,{children:null===e||void 0===e||null===(l=e.property_records[0])||void 0===l?void 0:l.Effective_Date}),(0,y.jsx)(m.A,{children:null===e||void 0===e||null===(o=e.property_records[0])||void 0===o?void 0:o.Agency_ID}),(0,y.jsx)(m.A,{children:(0,y.jsx)("img",{src:null===e||void 0===e||null===(n=e.property_records[0])||void 0===n?void 0:n.Image,alt:""})})]},r)}))})]}),(0,y.jsx)(g.A,{rowsPerPageOptions:[5,10,25],component:"div",count:R.length,rowsPerPage:k,page:b,onPageChange:(e,r)=>{w(r)},onRowsPerPageChange:e=>{C(parseInt(e.target.value,10)),w(0)}})]})})})]})]})})}},52432:(e,r,t)=>{t.d(r,{A:()=>S});var l=t(58168),o=t(98587),n=t(9950),s=(t(26429),t(2803)),a=t(5747),i=t(7951),c=t(79859),d=t(82053),h=t(19657),x=t(65471),p=t(44414);const u=(0,x.A)((0,p.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var m=t(24184);const g=(0,i.Ay)(m.A)((e=>{let{theme:r}=e;return(0,l.A)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,l.A)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,l.A)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,h.tL)(r.palette.grey[200],.12)}:{backgroundColor:(0,h.tL)(r.palette.grey[600],.12)})})})),A=(0,i.Ay)(u)({width:24,height:16});const v=function(e){const r=e;return(0,p.jsx)("li",{children:(0,p.jsx)(g,(0,l.A)({focusRipple:!0},e,{ownerState:r,children:(0,p.jsx)(A,{ownerState:r})}))})};var j=t(37665);function f(e){return(0,j.A)("MuiBreadcrumbs",e)}const y=(0,t(44245).A)("MuiBreadcrumbs",["root","ol","li","separator"]),b=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],w=(0,i.Ay)(d.A,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{["& .".concat(y.li)]:r.li},r.root]})({}),k=(0,i.Ay)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),C=(0,i.Ay)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function _(e,r,t,l){return e.reduce(((o,n,s)=>(s<e.length-1?o=o.concat(n,(0,p.jsx)(C,{"aria-hidden":!0,className:r,ownerState:l,children:t},"separator-".concat(s))):o.push(n),o)),[])}const S=n.forwardRef((function(e,r){const t=(0,c.A)({props:e,name:"MuiBreadcrumbs"}),{children:i,className:d,component:h="nav",expandText:x="Show path",itemsAfterCollapse:u=1,itemsBeforeCollapse:m=1,maxItems:g=8,separator:A="/"}=t,j=(0,o.A)(t,b),[y,C]=n.useState(!1),S=(0,l.A)({},t,{component:h,expanded:y,expandText:x,itemsAfterCollapse:u,itemsBeforeCollapse:m,maxItems:g,separator:A}),L=(e=>{const{classes:r}=e;return(0,a.A)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},f,r)})(S),R=n.useRef(null),I=n.Children.toArray(i).filter((e=>n.isValidElement(e))).map(((e,r)=>(0,p.jsx)("li",{className:L.li,children:e},"child-".concat(r))));return(0,p.jsx)(w,(0,l.A)({ref:r,component:h,color:"text.secondary",className:(0,s.A)(L.root,d),ownerState:S},j,{children:(0,p.jsx)(k,{className:L.ol,ref:R,ownerState:S,children:_(y||g&&I.length<=g?I:(e=>m+u>=e.length?e:[...e.slice(0,m),(0,p.jsx)(v,{"aria-label":x,onClick:()=>{C(!0);const e=R.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-u,e.length)])(I),L.separator,A,S)})}))}))},30099:(e,r,t)=>{t.d(r,{A:()=>n});t(9950);var l=t(65471),o=t(44414);const n=(0,l.A)((0,o.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},88090:(e,r,t)=>{t.d(r,{A:()=>n});t(9950);var l=t(65471),o=t(44414);const n=(0,l.A)((0,o.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")}}]);