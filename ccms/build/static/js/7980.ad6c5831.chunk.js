"use strict";(self.webpackChunkccms=self.webpackChunkccms||[]).push([[7980,3358],{19374:(e,t,n)=>{n.d(t,{A:()=>d});var i=n(7951),r=n(6368),s=n(82053),a=n(63575),o=n(10463),l=n(44414);const c=(0,i.Ay)("div")((e=>{let{theme:t}=e;return{height:"100%",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:t.spacing(8,2)}}));function d(e){let{title:t,description:n,img:i,...d}=e;return(0,l.jsxs)(c,{...d,children:[i?(0,l.jsx)(a.A,{disabledEffect:!0,visibleByDefault:!0,alt:"empty content",src:i,sx:{height:240,mb:3}}):(0,l.jsx)(r.A,{sx:{height:150},children:(0,l.jsx)(o.Ft,{})}),(0,l.jsx)(s.A,{variant:"h5",gutterBottom:!0,children:t}),n&&(0,l.jsx)(s.A,{variant:"body2",sx:{color:"text.secondary"},children:n})]})}},63358:(e,t,n)=>{n.d(t,{A:()=>m});var i=n(56801),r=n.n(i),s=n(6368),a=n(82053),o=n(22707),l=n(26689),c=n(52432),d=n(44414);function h(e){let{links:t,activeLast:n=!1,...i}=e;const r=t[t.length-1].name,o=t.map((e=>(0,d.jsx)(x,{link:e},e.name))),l=t.map((e=>(0,d.jsx)("div",{children:e.name!==r?(0,d.jsx)(x,{link:e}):(0,d.jsx)(a.A,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:r})},e.name)));return(0,d.jsx)(c.A,{separator:(0,d.jsx)(s.A,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}}),...i,children:n?o:l})}function x(e){let{link:t}=e;const{href:n,name:i,icon:r}=t;return(0,d.jsxs)(o.A,{variant:"body2",component:l.N_,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[r&&(0,d.jsx)(s.A,{sx:{mr:1,"& svg":{width:20,height:20}},children:r}),i]},i)}function m(e){let{links:t,action:n,heading:i,moreLink:l=[],sx:c,...x}=e;return(0,d.jsxs)(s.A,{sx:{mb:5,...c},children:[(0,d.jsxs)(s.A,{sx:{display:"flex",alignItems:"center"},children:[(0,d.jsxs)(s.A,{sx:{flexGrow:1},children:[(0,d.jsx)(a.A,{variant:"h4",gutterBottom:!0,children:i}),(0,d.jsx)(h,{links:t,...x})]}),n&&(0,d.jsx)(s.A,{sx:{flexShrink:0},children:n})]}),(0,d.jsx)(s.A,{sx:{mt:2},children:r()(l)?(0,d.jsx)(o.A,{href:l,target:"_blank",rel:"noopener",variant:"body2",children:l}):l.map((e=>(0,d.jsx)(o.A,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)))})]})}},97842:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(7951),r=n(8145);const s=(0,i.Ay)(r.A,{shouldForwardProp:e=>"stretchStart"!==e})((e=>{let{stretchStart:t,theme:n}=e;return{"& .MuiOutlinedInput-root":{transition:n.transitions.create(["box-shadow","width"],{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.shorter}),"&.Mui-focused":{boxShadow:n.customShadows.z12},...t&&{width:t,"&.Mui-focused":{boxShadow:n.customShadows.z12,[n.breakpoints.up("sm")]:{width:t+60}}}},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(n.palette.grey[50032]," !important")}}}))},60657:(e,t,n)=>{n.d(t,{A:()=>x});var i=n(88499),r=n(44091),s=n(7951),a=n(82053),o=n(74745),l=n(22707),c=n(63575),d=n(44414);const h=(0,s.Ay)("div")((e=>{let{theme:t}=e;const n="light"===t.palette.mode;return{"& ul, & ol":{...t.typography.body1,paddingLeft:t.spacing(5),"& li":{lineHeight:2}},"& blockquote":{lineHeight:1.5,fontSize:"1.5em",margin:"40px auto",position:"relative",fontFamily:"Georgia, serif",padding:t.spacing(3,3,3,8),borderRadius:2*Number(t.shape.borderRadius),backgroundColor:t.palette.background.neutral,color:"".concat(t.palette.text.secondary," !important"),[t.breakpoints.up("md")]:{width:"80%"},"& p, & span":{marginBottom:"0 !important",fontSize:"inherit !important",fontFamily:"Georgia, serif !important",color:"".concat(t.palette.text.secondary," !important")},"&:before":{left:16,top:-8,display:"block",fontSize:"3em",content:'"\\201C"',position:"absolute",color:t.palette.text.disabled}},"& pre, & pre > code":{fontSize:16,overflowX:"auto",whiteSpace:"pre",padding:t.spacing(2),color:t.palette.common.white,borderRadius:t.shape.borderRadius,backgroundColor:n?t.palette.grey[900]:t.palette.grey[50016]},"& code":{fontSize:14,borderRadius:4,whiteSpace:"pre",padding:t.spacing(.2,.5),color:t.palette.warning[n?"darker":"lighter"],backgroundColor:t.palette.warning[n?"lighter":"darker"],"&.hljs":{padding:0,backgroundColor:"transparent"}}}}));function x(e){let{...t}=e;return(0,d.jsx)(h,{children:(0,d.jsx)(i.$,{rehypePlugins:[r.A],components:m,...t})})}const m={h1:e=>{let{...t}=e;return(0,d.jsx)(a.A,{variant:"h1",...t})},h2:e=>{let{...t}=e;return(0,d.jsx)(a.A,{variant:"h2",...t})},h3:e=>{let{...t}=e;return(0,d.jsx)(a.A,{variant:"h3",...t})},h4:e=>{let{...t}=e;return(0,d.jsx)(a.A,{variant:"h4",...t})},h5:e=>{let{...t}=e;return(0,d.jsx)(a.A,{variant:"h5",...t})},h6:e=>{let{...t}=e;return(0,d.jsx)(a.A,{variant:"h6",...t})},hr:e=>{let{...t}=e;return(0,d.jsx)(o.A,{sx:{my:3},...t})},img:e=>{let{...t}=e;return(0,d.jsx)(c.A,{alt:t.alt,ratio:"16/9",sx:{borderRadius:2,my:5},...t})},a:e=>{let{...t}=e;return t.href.includes("http")?(0,d.jsx)(l.A,{target:"_blank",rel:"noopener",...t}):(0,d.jsx)(l.A,{...t})}}},97751:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(70693),r=n(82053),s=n(44414);function a(e){let{searchQuery:t="",...n}=e;return t?(0,s.jsxs)(i.A,{...n,children:[(0,s.jsx)(r.A,{gutterBottom:!0,align:"center",variant:"subtitle1",children:"Not found"}),(0,s.jsxs)(r.A,{variant:"body2",align:"center",children:["No results found for \xa0",(0,s.jsxs)("strong",{children:['"',t,'"']}),". Try checking for typos or using complete words."]})]}):(0,s.jsx)(r.A,{variant:"body2",children:" Please enter keywords"})}},96603:(e,t,n)=>{n.d(t,{dA:()=>U,z5:()=>Z,Ch:()=>te,oz:()=>le,rY:()=>ue,QP:()=>ge,SP:()=>Oe,Q$:()=>ze,YJ:()=>Re});var i=n(60666),r=n(9950),s=n(29031),a=n(13564),o=n(68654),l=n(9449),c=n(28095),d=n(7951),h=n(82053),x=n(60899),m=n(48089),p=n(12257),u=n(41205),g=n(25277),j=n(8145),A=n(75165),b=n(90260),v=n(73561),y=n(56801),f=n.n(y),w=n(19657),k=n(79739),S=n(79537),C=n(6368),I=n(63575),z=n(60657),P=n(44185),R=n(19374),q=n(20131),T=n(44414);function M(e){var t;let{values:n,isValid:i,isSubmitting:r,isOpen:s,onClose:a,onSubmit:o}=e;const{title:l,content:d,description:x}=n,m=f()(n.cover)?n.cover:null===(t=n.cover)||void 0===t?void 0:t.preview,p=l||x||d||m,u=l||m;return(0,T.jsxs)(q.ys,{fullScreen:!0,open:s,onClose:a,children:[(0,T.jsxs)(k.A,{sx:{py:2,px:3},children:[(0,T.jsx)(h.A,{variant:"subtitle1",sx:{flexGrow:1},children:"Preview Post"}),(0,T.jsx)(A.A,{onClick:a,children:"Cancel"}),(0,T.jsx)(c.A,{type:"submit",variant:"contained",disabled:!i,loading:r,onClick:o,children:"Post"})]}),p?(0,T.jsxs)(P.A,{children:[u&&(0,T.jsx)(O,{title:l||"",cover:m}),(0,T.jsx)(S.A,{children:(0,T.jsxs)(C.A,{sx:{mt:5,mb:10},children:[(0,T.jsx)(h.A,{variant:"h6",sx:{mb:5},children:x}),(0,T.jsx)(z.A,{children:d||""})]})})]}):(0,T.jsx)(R.A,{title:"Empty content"})]})}function O(e){let{title:t,cover:n}=e;return(0,T.jsxs)(C.A,{sx:{position:"relative"},children:[(0,T.jsx)(S.A,{sx:{top:0,left:0,right:0,zIndex:9,position:"absolute",color:"common.white",pt:{xs:3,lg:10}},children:(0,T.jsx)(h.A,{variant:"h2",component:"h1",children:t})}),(0,T.jsx)(C.A,{sx:{top:0,left:0,right:0,bottom:0,zIndex:8,position:"absolute",bgcolor:e=>(0,w.X4)(e.palette.grey[900],.8)}}),(0,T.jsx)(I.A,{alt:"cover",src:n,ratio:"16/9"})]})}const B=["Toy Story 3","Logan","Full Metal Jacket","Dangal","The Sting","2001: A Space Odyssey","Singin' in the Rain","Toy Story","Bicycle Thieves","The Kid","Inglourious Basterds","Snatch","3 Idiots"],D=(0,d.Ay)(h.A)((e=>{let{theme:t}=e;return{...t.typography.subtitle2,color:t.palette.text.secondary,marginBottom:t.spacing(1)}}));function U(){const e=(0,a.Zp)(),[t,n]=(0,r.useState)(!1),{enqueueSnackbar:d}=(0,s.dh)(),h=()=>{n(!1)},y=i.Ik().shape({title:i.Yj().required("Title is required"),description:i.Yj().required("Description is required"),content:i.Yj().min(1e3).required("Content is required"),cover:i.gl().required("Cover is required")}),f=(0,l.mN)({resolver:(0,o.t)(y),defaultValues:{title:"",description:"",content:"",cover:null,tags:["Logan"],publish:!0,comments:!0,metaTitle:"",metaDescription:"",metaKeywords:["Logan"]}}),{reset:w,watch:k,control:S,setValue:C,handleSubmit:I,formState:{isSubmitting:z,isValid:P}}=f,R=k(),q=async()=>{try{await new Promise((e=>setTimeout(e,500))),w(),h(),d("Post success!"),e(b.nB.blog.posts)}catch(t){console.error(t)}},O=(0,r.useCallback)((e=>{const t=e[0];t&&C("cover",Object.assign(t,{preview:URL.createObjectURL(t)}))}),[C]);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(v.Op,{methods:f,onSubmit:I(q),children:(0,T.jsxs)(x.Ay,{container:!0,spacing:3,children:[(0,T.jsx)(x.Ay,{item:!0,xs:12,md:8,children:(0,T.jsx)(m.A,{sx:{p:3},children:(0,T.jsxs)(p.A,{spacing:3,children:[(0,T.jsx)(v.o3,{name:"title",label:"Post Title"}),(0,T.jsx)(v.o3,{name:"description",label:"Description",multiline:!0,rows:3}),(0,T.jsxs)("div",{children:[(0,T.jsx)(D,{children:"Content"}),(0,T.jsx)(v.CX,{name:"content"})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)(D,{children:"Cover"}),(0,T.jsx)(v.Oq,{name:"cover",accept:"image/*",maxSize:3145728,onDrop:O})]})]})})}),(0,T.jsxs)(x.Ay,{item:!0,xs:12,md:4,children:[(0,T.jsx)(m.A,{sx:{p:3},children:(0,T.jsxs)(p.A,{spacing:3,children:[(0,T.jsxs)("div",{children:[(0,T.jsx)(v.b8,{name:"publish",label:"Publish",labelPlacement:"start",sx:{mb:1,mx:0,width:1,justifyContent:"space-between"}}),(0,T.jsx)(v.b8,{name:"comments",label:"Enable comments",labelPlacement:"start",sx:{mx:0,width:1,justifyContent:"space-between"}})]}),(0,T.jsx)(l.xI,{name:"tags",control:S,render:e=>{let{field:t}=e;return(0,T.jsx)(u.A,{multiple:!0,freeSolo:!0,onChange:(e,n)=>t.onChange(n),options:B.map((e=>e)),renderTags:(e,t)=>e.map(((e,n)=>(0,r.createElement)(g.A,{...t({index:n}),key:e,size:"small",label:e}))),renderInput:e=>(0,T.jsx)(j.A,{label:"Tags",...e})})}}),(0,T.jsx)(v.o3,{name:"metaTitle",label:"Meta title"}),(0,T.jsx)(v.o3,{name:"metaDescription",label:"Meta description",fullWidth:!0,multiline:!0,rows:3}),(0,T.jsx)(l.xI,{name:"metaKeywords",control:S,render:e=>{let{field:t}=e;return(0,T.jsx)(u.A,{multiple:!0,freeSolo:!0,onChange:(e,n)=>t.onChange(n),options:B.map((e=>e)),renderTags:(e,t)=>e.map(((e,n)=>(0,r.createElement)(g.A,{...t({index:n}),key:e,size:"small",label:e}))),renderInput:e=>(0,T.jsx)(j.A,{label:"Meta keywords",...e})})}})]})}),(0,T.jsxs)(p.A,{direction:"row",spacing:1.5,sx:{mt:3},children:[(0,T.jsx)(A.A,{fullWidth:!0,color:"inherit",variant:"outlined",size:"large",onClick:()=>{n(!0)},children:"Preview"}),(0,T.jsx)(c.A,{fullWidth:!0,type:"submit",variant:"contained",size:"large",loading:z,children:"Post"})]})]})]})}),(0,T.jsx)(M,{values:R,isOpen:t,isValid:P,isSubmitting:z,onClose:h,onSubmit:I(q)})]})}var L=n(99589),F=n(26689),W=n(62854),E=n(50704),N=n(22707),H=n(98091),V=n(34437),Y=n(63477),G=n(66075),K=n(61177);const X=(0,r.forwardRef)(((e,t)=>{let{asLink:n,variant:i="body1",line:r=2,persistent:s=!1,children:a,sx:o,...l}=e;const{lineHeight:c}=(0,K.Ay)(i),d={overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:r,WebkitBoxOrient:"vertical",...s&&{height:c*r},...o};return n?(0,T.jsx)(N.A,{color:"inherit",ref:t,variant:i,sx:{...d},...l,children:a}):(0,T.jsx)(h.A,{ref:t,variant:i,sx:{...d},...l,children:a})}));function _(e){let{icon:t,value:n,endIcon:i=!1,sx:r,...s}=e;return(0,T.jsxs)(p.A,{direction:"row",alignItems:"center",sx:{typography:"body2",...r},...s,children:[!i&&t,n,i&&t]})}var Q=n(20112);const J=(0,d.Ay)("div")((e=>{let{theme:t}=e;return{top:0,zIndex:1,width:"100%",height:"100%",position:"absolute",backgroundColor:(0,w.X4)(t.palette.grey[900],.8)}}));function Z(e){let{post:t,index:n}=e;const i=(0,H.A)("up","md"),{cover:r,title:s,view:a,comment:o,share:l,author:c,createdAt:d}=t;return i&&(0===n||1===n||2===n)?(0,T.jsxs)(m.A,{children:[(0,T.jsx)(W.A,{alt:c.name,src:c.avatarUrl,sx:{zIndex:9,top:24,left:24,width:40,height:40,position:"absolute"}}),(0,T.jsx)($,{title:s,view:a,comment:o,share:l,createdAt:d,index:n}),(0,T.jsx)(J,{}),(0,T.jsx)(I.A,{alt:"cover",src:r,sx:{height:360}})]}):(0,T.jsxs)(m.A,{children:[(0,T.jsxs)(C.A,{sx:{position:"relative"},children:[(0,T.jsx)(Q.A,{src:"https://minimal-assets-api.vercel.app/assets/icons/shape-avatar.svg",sx:{width:80,height:36,zIndex:9,bottom:-15,position:"absolute",color:"background.paper"}}),(0,T.jsx)(W.A,{alt:c.name,src:c.avatarUrl,sx:{left:24,zIndex:9,width:32,height:32,bottom:-16,position:"absolute"}}),(0,T.jsx)(I.A,{alt:"cover",src:r,ratio:"4/3"})]}),(0,T.jsx)($,{title:s,view:a,comment:o,share:l,createdAt:d})]})}function $(e){let{title:t,view:n,comment:i,share:r,createdAt:s,index:a}=e;const o=(0,H.A)("up","md"),l=b.nB.blog.view((0,L.c)(t)),c=0===a,d=1===a||2===a,x=[{number:i,icon:"eva:message-circle-fill"},{number:n,icon:"eva:eye-fill"},{number:r,icon:"eva:share-fill"}];return(0,T.jsxs)(E.A,{sx:{pt:4.5,width:1,...(c||d)&&{pt:0,zIndex:9,bottom:0,position:"absolute",color:"common.white"}},children:[(0,T.jsx)(h.A,{gutterBottom:!0,variant:"caption",component:"div",sx:{color:"text.disabled",...(c||d)&&{opacity:.64,color:"common.white"}},children:(0,V.ts)(s)}),(0,T.jsx)(N.A,{to:l,color:"inherit",component:F.N_,children:(0,T.jsx)(X,{variant:o&&c?"h5":"subtitle2",line:2,persistent:!0,children:t})}),(0,T.jsx)(p.A,{flexWrap:"wrap",direction:"row",justifyContent:"flex-end",sx:{mt:3,color:"text.disabled",...(c||d)&&{opacity:.64,color:"common.white"}},children:x.map(((e,t)=>(0,T.jsx)(_,{icon:(0,T.jsx)(G.A,{icon:e.icon,sx:{width:16,height:16,mr:.5}}),value:(0,Y.Rn)(e.number),sx:{typography:"caption",ml:0===t?0:1.5}},t)))})]})}const ee=(0,d.Ay)("div")((e=>{let{theme:t}=e;return{padding:t.spacing(3),borderRadius:2*Number(t.shape.borderRadius),backgroundColor:t.palette.background.neutral}}));function te(){const e=i.Ik().shape({comment:i.Yj().required("Comment is required"),name:i.Yj().required("Name is required"),email:i.Yj().email("Email must be a valid email address").required("Email is required")}),t=(0,l.mN)({resolver:(0,o.t)(e),defaultValues:{comment:"",name:"",email:""}}),{reset:n,handleSubmit:r,formState:{isSubmitting:s}}=t;return(0,T.jsxs)(ee,{children:[(0,T.jsx)(h.A,{variant:"subtitle1",sx:{mb:3},children:"Add Comment"}),(0,T.jsx)(v.Op,{methods:t,onSubmit:r((async()=>{try{await new Promise((e=>setTimeout(e,500))),n()}catch(e){console.error(e)}})),children:(0,T.jsxs)(p.A,{spacing:3,alignItems:"flex-end",children:[(0,T.jsx)(v.o3,{name:"comment",label:"Comment *",multiline:!0,rows:3}),(0,T.jsx)(v.o3,{name:"name",label:"Name *"}),(0,T.jsx)(v.o3,{name:"email",label:"Email *"}),(0,T.jsx)(c.A,{type:"submit",variant:"contained",loading:s,children:"Post comment"})]})})]})}var ne=n(32610),ie=n(16233),re=n(83563),se=n(74745);function ae(e){let{name:t,avatarUrl:n,message:i,tagUser:s,postedAt:a,hasReply:o}=e;const[l,c]=(0,r.useState)(!1);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(ne.Ay,{disableGutters:!0,sx:{alignItems:"flex-start",py:3,...o&&{ml:"auto",width:e=>"calc(100% - ".concat(e.spacing(7),")")}},children:[(0,T.jsx)(ie.A,{children:(0,T.jsx)(W.A,{alt:t,src:n,sx:{width:48,height:48}})}),(0,T.jsx)(re.A,{primary:t,primaryTypographyProps:{variant:"subtitle1"},secondary:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(h.A,{gutterBottom:!0,variant:"caption",sx:{display:"block",color:"text.disabled"},children:(0,V.ts)(a)}),(0,T.jsxs)(h.A,{component:"span",variant:"body2",children:[(0,T.jsx)("strong",{children:s})," ",i]})]})}),!o&&(0,T.jsx)(A.A,{size:"small",onClick:()=>{c(!0)},sx:{position:"absolute",right:0},children:"Reply"})]}),!o&&l&&(0,T.jsx)(C.A,{sx:{mb:3,ml:"auto",width:e=>"calc(100% - ".concat(e.spacing(7),")")},children:(0,T.jsx)(j.A,{fullWidth:!0,size:"small",placeholder:"Write comment",sx:{"& fieldset":{borderWidth:"1px !important",borderColor:e=>"".concat(e.palette.grey[50032]," !important")}}})}),(0,T.jsx)(se.A,{sx:{ml:"auto",width:e=>"calc(100% - ".concat(e.spacing(7),")")}})]})}var oe=n(249);function le(e){let{post:t}=e;const{comments:n}=t;return(0,T.jsx)(oe.A,{disablePadding:!0,children:n.map((e=>{const{id:t,replyComment:n,users:i}=e,r=n.length>0;return(0,T.jsxs)(C.A,{sx:{},children:[(0,T.jsx)(ae,{name:e.name,avatarUrl:e.avatarUrl,postedAt:e.postedAt,message:e.message}),r&&n.map((e=>{const t=i.find((t=>t.id===e.userId));return(0,T.jsx)(ae,{message:e.message,tagUser:e.tagUser,postedAt:e.postedAt,name:t.name,avatarUrl:t.avatarUrl,hasReply:!0},e.id)}))]},t)}))})}var ce=n(80417),de=n(33092);const he=[{name:"Facebook",icon:(0,T.jsx)(G.A,{icon:"eva:facebook-fill",width:20,height:20,color:"#1877F2"})},{name:"Instagram",icon:(0,T.jsx)(G.A,{icon:"ant-design:instagram-filled",width:20,height:20,color:"#D7336D"})},{name:"Linkedin",icon:(0,T.jsx)(G.A,{icon:"eva:linkedin-fill",width:20,height:20,color:"#006097"})},{name:"Twitter",icon:(0,T.jsx)(G.A,{icon:"eva:twitter-fill",width:20,height:20,color:"#1C9CEA"})}],xe=(0,d.Ay)("h1")((e=>{let{theme:t}=e;return{top:0,right:0,bottom:0,left:0,zIndex:9,position:"absolute",backgroundColor:(0,w.X4)(t.palette.grey[900],.72)}})),me=(0,d.Ay)("h1")((e=>{let{theme:t}=e;return{...t.typography.h2,top:0,zIndex:10,width:"100%",position:"absolute",padding:t.spacing(3),color:t.palette.common.white,[t.breakpoints.up("lg")]:{padding:t.spacing(10)}}})),pe=(0,d.Ay)("div")((e=>{let{theme:t}=e;return{bottom:0,zIndex:10,width:"100%",display:"flex",position:"absolute",alignItems:"flex-end",paddingLeft:t.spacing(3),paddingRight:t.spacing(2),paddingBottom:t.spacing(3),justifyContent:"space-between",[t.breakpoints.up("sm")]:{alignItems:"center",paddingRight:t.spacing(3)},[t.breakpoints.up("lg")]:{padding:t.spacing(10)}}}));function ue(e){let{post:t}=e;const{cover:n,title:i,author:r,createdAt:s}=t,a=(0,H.A)("up","sm");return(0,T.jsxs)(C.A,{sx:{position:"relative"},children:[(0,T.jsx)(me,{children:i}),(0,T.jsxs)(pe,{children:[(0,T.jsxs)(C.A,{sx:{display:"flex",alignItems:"center"},children:[(0,T.jsx)(W.A,{alt:r.name,src:r.avatarUrl,sx:{width:48,height:48}}),(0,T.jsxs)(C.A,{sx:{ml:2},children:[(0,T.jsx)(h.A,{variant:"subtitle1",sx:{color:"common.white"},children:r.name}),(0,T.jsx)(h.A,{variant:"body2",sx:{color:"grey.500"},children:(0,V.ts)(s)})]})]}),(0,T.jsx)(ce.A,{direction:a?"left":"up",ariaLabel:"Share post",icon:(0,T.jsx)(G.A,{icon:"eva:share-fill",sx:{width:20,height:20}}),sx:{"& .MuiSpeedDial-fab":{width:48,height:48}},children:he.map((e=>(0,T.jsx)(de.A,{icon:e.icon,tooltipTitle:e.name,tooltipPlacement:"top",FabProps:{color:"default"}},e.name)))})]}),(0,T.jsx)(xe,{}),(0,T.jsx)(I.A,{alt:"post cover",src:n,ratio:"16/9"})]})}function ge(e){let{posts:t}=e;return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(h.A,{variant:"h4",sx:{mt:10,mb:5},children:"Recent posts"}),(0,T.jsx)(x.Ay,{container:!0,spacing:3,children:t.map((e=>(0,T.jsx)(x.Ay,{item:!0,xs:12,sm:6,md:3,children:(0,T.jsx)(Z,{post:e})},e.id)))})]})}var je=n(55471),Ae=n.n(je),be=n(99573),ve=n.n(be),ye=n(74721),fe=n(2046),we=n(33296),ke=n(32741),Se=n(97842),Ce=n(97751);const Ie=(0,d.Ay)((e=>(0,T.jsx)(ye.A,{placement:"bottom-start",...e})))({width:"280px !important"});function ze(){const e=(0,a.Zp)(),t=(0,we.A)(),[n,i]=(0,r.useState)(""),[s,o]=(0,r.useState)([]),l=t=>{e(b.nB.blog.view((0,L.c)(t)))},c=e=>{"Enter"===e.key&&l(n)};return(0,T.jsx)(u.A,{size:"small",autoHighlight:!0,popupIcon:null,PopperComponent:Ie,options:s,onInputChange:(e,n)=>(async e=>{try{if(i(e),e){const n=await ke.A.get("/api/blog/posts/search",{params:{query:e}});t.current&&o(n.data.results)}}catch(n){console.error(n)}})(n),getOptionLabel:e=>e.title,noOptionsText:(0,T.jsx)(Ce.A,{searchQuery:n}),isOptionEqualToValue:(e,t)=>e.id===t.id,renderInput:e=>(0,T.jsx)(Se.A,{...e,stretchStart:200,placeholder:"Search post...",onKeyUp:c,InputProps:{...e.InputProps,startAdornment:(0,T.jsx)(fe.A,{position:"start",children:(0,T.jsx)(G.A,{icon:"eva:search-fill",sx:{ml:1,width:20,height:20,color:"text.disabled"}})})}}),renderOption:(e,t,n)=>{let{inputValue:i}=n;const{title:r,cover:s}=t,a=ve()(r,i),o=Ae()(r,a);return(0,T.jsxs)("li",{...e,children:[(0,T.jsx)(I.A,{alt:s,src:s,sx:{width:48,height:48,borderRadius:1,flexShrink:0,mr:1.5}}),(0,T.jsx)(N.A,{underline:"none",onClick:()=>l(r),children:o.map(((e,t)=>(0,T.jsx)(h.A,{component:"span",variant:"subtitle2",color:e.highlight?"primary":"textPrimary",children:e.text},t)))})]})}})}var Pe=n(23266);function Re(e){let{query:t,options:n,onSort:i}=e;return(0,T.jsx)(j.A,{select:!0,size:"small",value:t,onChange:e=>i(e.target.value),children:n.map((e=>(0,T.jsx)(Pe.A,{value:e.value,sx:{mx:1,my:.5,borderRadius:1},children:e.label},e.value)))})}var qe=n(16497),Te=n(93038),Me=n(34339);function Oe(e){let{post:t}=e;const{favorite:n,tags:i,favoritePerson:r}=t;return(0,T.jsxs)(C.A,{sx:{py:3},children:[i.map((e=>(0,T.jsx)(g.A,{label:e,sx:{m:.5}},e))),(0,T.jsxs)(C.A,{sx:{display:"flex",alignItems:"center",mt:3},children:[(0,T.jsx)(qe.A,{control:(0,T.jsx)(Te.A,{defaultChecked:!0,size:"small",color:"error",icon:(0,T.jsx)(G.A,{icon:"eva:heart-fill"}),checkedIcon:(0,T.jsx)(G.A,{icon:"eva:heart-fill"})}),label:(0,Y.Rn)(n)}),(0,T.jsx)(Me.A,{max:4,sx:{"& .MuiAvatar-root":{width:32,height:32}},children:r.map((e=>(0,T.jsx)(W.A,{alt:e.name,src:e.avatarUrl},e.name)))})]})]})}},34437:(e,t,n)=>{n.d(t,{j5:()=>o,kH:()=>l,ts:()=>s,uK:()=>a});var i=n(43974),r=n(1369);function s(e){return(0,i.A)(new Date(e),"dd MMMM yyyy")}function a(e){return(0,i.A)(new Date(e),"dd MMM yyyy HH:mm")}function o(e){return(0,i.A)(new Date(e),"dd/MM/yyyy hh:mm p")}function l(e){return(0,r.A)(new Date(e),{addSuffix:!0})}}}]);