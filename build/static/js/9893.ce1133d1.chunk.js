"use strict";(self.webpackChunkccms=self.webpackChunkccms||[]).push([[9893],{63358:(e,t,a)=>{a.d(t,{A:()=>p});var r=a(56801),n=a.n(r),o=a(6368),l=a(82053),i=a(22707),s=a(26689),c=a(52432),d=a(44414);function h(e){let{links:t,activeLast:a=!1,...r}=e;const n=t[t.length-1].name,i=t.map((e=>(0,d.jsx)(m,{link:e},e.name))),s=t.map((e=>(0,d.jsx)("div",{children:e.name!==n?(0,d.jsx)(m,{link:e}):(0,d.jsx)(l.A,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:n})},e.name)));return(0,d.jsx)(c.A,{separator:(0,d.jsx)(o.A,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}}),...r,children:a?i:s})}function m(e){let{link:t}=e;const{href:a,name:r,icon:n}=t;return(0,d.jsxs)(i.A,{variant:"body2",component:s.N_,to:a||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[n&&(0,d.jsx)(o.A,{sx:{mr:1,"& svg":{width:20,height:20}},children:n}),r]},r)}function p(e){let{links:t,action:a,heading:r,moreLink:s=[],sx:c,...m}=e;return(0,d.jsxs)(o.A,{sx:{mb:5,...c},children:[(0,d.jsxs)(o.A,{sx:{display:"flex",alignItems:"center"},children:[(0,d.jsxs)(o.A,{sx:{flexGrow:1},children:[(0,d.jsx)(l.A,{variant:"h4",gutterBottom:!0,children:r}),(0,d.jsx)(h,{links:t,...m})]}),a&&(0,d.jsx)(o.A,{sx:{flexShrink:0},children:a})]}),(0,d.jsx)(o.A,{sx:{mt:2},children:n()(s)?(0,d.jsx)(i.A,{href:s,target:"_blank",rel:"noopener",variant:"body2",children:s}):s.map((e=>(0,d.jsx)(i.A,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)))})]})}},39893:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var r=a(9950),n=a(79537),o=a(48089),l=a(6368),i=a(63916),s=a(74745),c=a(12257),d=a(82053),h=a(75165),m=a(8279),p=a(86608),g=a(63358),u=a(90260),x=a(66075),f=a(44414);const A=[{title:"Acknowledgments",path:u.nB.legalForms.acknowledgments},{title:"Affidavit for Credit Against",path:u.nB.legalForms.affidavitforCreditAgainst},{title:"Affidavit in Lieu of Registration",path:u.nB.legalForms.affidavitinLieuofRegistration},{title:"Affidavit in Lieu of Registration 2009",path:u.nB.legalForms.affidavitinLieuofRegistration2009},{title:"Carbon Monoxide Detector Affidavit",path:u.nB.legalForms.carbonMonoxideDetectorAffidavit},{title:"Certification on Non-Foreign Status",path:u.nB.legalForms.certificationonNonForeignStatus},{title:"Contract of Sale - Condo",path:u.nB.legalForms.contractofSaleCondo},{title:"Contract of Sale - Coop",path:u.nB.legalForms.contractofSaleCoop},{title:"Contract of Sale - Residential",path:u.nB.legalForms.contractofSaleResidential},{title:"Deed - Administrators",path:u.nB.legalForms.deedAdministrators},{title:"Deed - Bargain and Sale with Covenants",path:u.nB.legalForms.deedBargainandSalewithCovenants},{title:"Deed - Bargain and Sale without Covenants",path:u.nB.legalForms.deedBargainandSalewithoutCovenants},{title:"Deed - Executors",path:u.nB.legalForms.deedExecutors},{title:"Deed - Quitclaim",path:u.nB.legalForms.deedQuitclaim},{title:"Deed - Warranty with Full Covenants",path:u.nB.legalForms.deedWarrantywithFullCovenants},{title:"IT-2663",path:u.nB.legalForms.it2663},{title:"IT-2664",path:u.nB.legalForms.it2664},{title:"NY Statutory Short Form POA",path:u.nB.legalForms.nYStatutoryShortFormPOA},{title:"Peconic Bay Region Community Preservation Fund",path:u.nB.legalForms.peconicBayRegionCommunityPreservationFund},{title:"RP5217",path:u.nB.legalForms.RP5217},{title:"TP-584",path:u.nB.legalForms.TP584}];function v(){var e;const{themeStretch:t}=(0,p.A)(),[a]=(0,r.useState)(A),[v,b]=(0,r.useState)(a),j=(0,r.useRef)("");return(0,f.jsx)(m.A,{title:"Legal Forms",children:(0,f.jsxs)(n.A,{maxWidth:!t&&"lg",children:[(0,f.jsx)(g.A,{heading:"Legal Forms",links:[{name:"Dashboard",href:u.nB.root},{name:"Legal Forms"}]}),(0,f.jsx)(o.A,{sx:{mb:5},children:(0,f.jsxs)(l.A,{sx:{px:2},children:[(0,f.jsx)(i.A,{sx:{my:1,width:1},ref:j,label:"Search",value:(null===j||void 0===j||null===(e=j.current)||void 0===e?void 0:e.value)||"",onChange:e=>{const t=e.target.value.toLowerCase();j.current.value=t;const r=a.filter((e=>e.title.toLowerCase().includes(t)));b(r)},size:"small"}),(0,f.jsx)(s.A,{}),v.map(((e,t)=>(0,f.jsxs)(c.A,{flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[(0,f.jsxs)(d.A,{variant:"subtitle1",children:[(0,f.jsx)(x.A,{icon:"icons8:pdf",color:"red"})," ",e.title]}),(0,f.jsx)("a",{href:e.path,target:"_blank",rel:"noreferrer",children:(0,f.jsx)(h.A,{variant:"text",children:"View"})})]},t)))]})})]})})}},52432:(e,t,a)=>{a.d(t,{A:()=>F});var r=a(58168),n=a(98587),o=a(9950),l=(a(26429),a(2803)),i=a(5747),s=a(7951),c=a(79859),d=a(82053),h=a(19657),m=a(65471),p=a(44414);const g=(0,m.A)((0,p.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var u=a(24184);const x=(0,s.Ay)(u.A)((e=>{let{theme:t}=e;return(0,r.A)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,r.A)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,r.A)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,h.tL)(t.palette.grey[200],.12)}:{backgroundColor:(0,h.tL)(t.palette.grey[600],.12)})})})),f=(0,s.Ay)(g)({width:24,height:16});const A=function(e){const t=e;return(0,p.jsx)("li",{children:(0,p.jsx)(x,(0,r.A)({focusRipple:!0},e,{ownerState:t,children:(0,p.jsx)(f,{ownerState:t})}))})};var v=a(37665);function b(e){return(0,v.A)("MuiBreadcrumbs",e)}const j=(0,a(44245).A)("MuiBreadcrumbs",["root","ol","li","separator"]),y=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],C=(0,s.Ay)(d.A,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{["& .".concat(j.li)]:t.li},t.root]})({}),B=(0,s.Ay)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),w=(0,s.Ay)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function S(e,t,a,r){return e.reduce(((n,o,l)=>(l<e.length-1?n=n.concat(o,(0,p.jsx)(w,{"aria-hidden":!0,className:t,ownerState:r,children:a},"separator-".concat(l))):n.push(o),n)),[])}const F=o.forwardRef((function(e,t){const a=(0,c.A)({props:e,name:"MuiBreadcrumbs"}),{children:s,className:d,component:h="nav",expandText:m="Show path",itemsAfterCollapse:g=1,itemsBeforeCollapse:u=1,maxItems:x=8,separator:f="/"}=a,v=(0,n.A)(a,y),[j,w]=o.useState(!1),F=(0,r.A)({},a,{component:h,expanded:j,expandText:m,itemsAfterCollapse:g,itemsBeforeCollapse:u,maxItems:x,separator:f}),k=(e=>{const{classes:t}=e;return(0,i.A)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},b,t)})(F),R=o.useRef(null),L=o.Children.toArray(s).filter((e=>o.isValidElement(e))).map(((e,t)=>(0,p.jsx)("li",{className:k.li,children:e},"child-".concat(t))));return(0,p.jsx)(C,(0,r.A)({ref:t,component:h,color:"text.secondary",className:(0,l.A)(k.root,d),ownerState:F},v,{children:(0,p.jsx)(B,{className:k.ol,ref:R,ownerState:F,children:S(j||x&&L.length<=x?L:(e=>u+g>=e.length?e:[...e.slice(0,u),(0,p.jsx)(A,{"aria-label":m,onClick:()=>{w(!0);const e=R.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-g,e.length)])(L),k.separator,f,F)})}))}))}}]);