"use strict";(self.webpackChunkccms=self.webpackChunkccms||[]).push([[102,6771],{63358:(e,a,t)=>{t.d(a,{A:()=>p});var r=t(56801),n=t.n(r),s=t(6368),o=t(82053),i=t(22707),l=t(26689),d=t(52432),c=t(44414);function h(e){let{links:a,activeLast:t=!1,...r}=e;const n=a[a.length-1].name,i=a.map((e=>(0,c.jsx)(A,{link:e},e.name))),l=a.map((e=>(0,c.jsx)("div",{children:e.name!==n?(0,c.jsx)(A,{link:e}):(0,c.jsx)(o.A,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:n})},e.name)));return(0,c.jsx)(d.A,{separator:(0,c.jsx)(s.A,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}}),...r,children:t?i:l})}function A(e){let{link:a}=e;const{href:t,name:r,icon:n}=a;return(0,c.jsxs)(i.A,{variant:"body2",component:l.N_,to:t||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[n&&(0,c.jsx)(s.A,{sx:{mr:1,"& svg":{width:20,height:20}},children:n}),r]},r)}function p(e){let{links:a,action:t,heading:r,moreLink:l=[],sx:d,...A}=e;return(0,c.jsxs)(s.A,{sx:{mb:5,...d},children:[(0,c.jsxs)(s.A,{sx:{display:"flex",alignItems:"center"},children:[(0,c.jsxs)(s.A,{sx:{flexGrow:1},children:[(0,c.jsx)(o.A,{variant:"h4",gutterBottom:!0,children:r}),(0,c.jsx)(h,{links:a,...A})]}),t&&(0,c.jsx)(s.A,{sx:{flexShrink:0},children:t})]}),(0,c.jsx)(s.A,{sx:{mt:2},children:n()(l)?(0,c.jsx)(i.A,{href:l,target:"_blank",rel:"noopener",variant:"body2",children:l}):l.map((e=>(0,c.jsx)(i.A,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)))})]})}},45180:(e,a,t)=>{t.d(a,{A:()=>f});var r=t(98587),n=t(58168),s=t(9950),o=t(2803),i=t(5747),l=t(82053),d=t(79859),c=t(7951),h=t(37665);function A(e){return(0,h.A)("MuiCardHeader",e)}const p=(0,t(44245).A)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var u=t(44414);const m=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],x=(0,c.Ay)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,a)=>(0,n.A)({["& .".concat(p.title)]:a.title,["& .".concat(p.subheader)]:a.subheader},a.root)})({display:"flex",alignItems:"center",padding:16}),y=(0,c.Ay)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,a)=>a.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),v=(0,c.Ay)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,a)=>a.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,c.Ay)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,a)=>a.content})({flex:"1 1 auto"}),f=s.forwardRef((function(e,a){const t=(0,d.A)({props:e,name:"MuiCardHeader"}),{action:s,avatar:c,className:h,component:p="div",disableTypography:f=!1,subheader:g,subheaderTypographyProps:j,title:w,titleTypographyProps:k}=t,N=(0,r.A)(t,m),C=(0,n.A)({},t,{component:p,disableTypography:f}),T=(e=>{const{classes:a}=e;return(0,i.A)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},A,a)})(C);let R=w;null==R||R.type===l.A||f||(R=(0,u.jsx)(l.A,(0,n.A)({variant:c?"body2":"h5",className:T.title,component:"span",display:"block"},k,{children:R})));let H=g;return null==H||H.type===l.A||f||(H=(0,u.jsx)(l.A,(0,n.A)({variant:c?"body2":"body1",className:T.subheader,color:"text.secondary",component:"span",display:"block"},j,{children:H}))),(0,u.jsxs)(x,(0,n.A)({className:(0,o.A)(T.root,h),as:p,ref:a,ownerState:C},N,{children:[c&&(0,u.jsx)(y,{className:T.avatar,ownerState:C,children:c}),(0,u.jsxs)(b,{className:T.content,ownerState:C,children:[R,H]}),s&&(0,u.jsx)(v,{className:T.action,ownerState:C,children:s})]}))}))},58835:(e,a,t)=>{t.d(a,{A:()=>l});var r=t(56712),n=t(50624),s=t(98889),o=t(78397),i=t(66922);function l(e,a){if((0,o.A)(2,arguments),!a||"object"!==typeof a)return new Date(NaN);var t=a.years?(0,i.A)(a.years):0,l=a.months?(0,i.A)(a.months):0,d=a.weeks?(0,i.A)(a.weeks):0,c=a.days?(0,i.A)(a.days):0,h=a.hours?(0,i.A)(a.hours):0,A=a.minutes?(0,i.A)(a.minutes):0,p=a.seconds?(0,i.A)(a.seconds):0,u=(0,s.A)(e),m=l||t?(0,n.A)(u,l+12*t):u,x=c||d?(0,r.A)(m,c+7*d):m,y=1e3*(p+60*(A+60*h));return new Date(x.getTime()+y)}},51790:(e,a,t)=>{t.d(a,{A:()=>i});var r=t(66922),n=t(56712),s=t(78397);var o=t(50624);function i(e,a){if((0,s.A)(2,arguments),!a||"object"!==typeof a)return new Date(NaN);var t=a.years?(0,r.A)(a.years):0,i=a.months?(0,r.A)(a.months):0,l=a.weeks?(0,r.A)(a.weeks):0,d=a.days?(0,r.A)(a.days):0,c=a.hours?(0,r.A)(a.hours):0,h=a.minutes?(0,r.A)(a.minutes):0,A=a.seconds?(0,r.A)(a.seconds):0,p=function(e,a){(0,s.A)(2,arguments);var t=(0,r.A)(a);return(0,o.A)(e,-t)}(e,i+12*t),u=function(e,a){(0,s.A)(2,arguments);var t=(0,r.A)(a);return(0,n.A)(e,-t)}(p,d+7*l),m=1e3*(A+60*(h+60*c));return new Date(u.getTime()-m)}}}]);