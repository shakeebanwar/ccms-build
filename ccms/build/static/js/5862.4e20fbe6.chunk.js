"use strict";(self.webpackChunkccms=self.webpackChunkccms||[]).push([[5862],{5578:(e,a,t)=>{t.r(a),t.d(a,{default:()=>J});var n=t(9950),o=t(60666),l=t(79537),s=t(48089),r=t(6368),i=t(12257),d=t(8145),c=t(74745),u=t(82053),m=t(75165),p=t(1320),h=t(15769),v=t(34075),g=t(91434),x=t(53984),f=t(73447),A=t(57191),j=t(60899),b=t(28095),C=t(29031),y=t(13564),w=t(9449),S=t(68654),_=t(8279),D=(t(30744),t(86608)),k=t(38861),N=t(63358),R=t(90260),L=t(66075),P=t(73561),F=(t(30818),t(32741)),E=t(44185),I=t(72870),B=t(12480),O=t(14857),M=t(9213),T=t(21671),q=t(93038),z=t(23266),V=(t(22704),t(33949),t(44414));function U(e){let{row:a,selected:t,onSelectRow:o,onAssign:l,onViewRow:s,onDocumentUpload:r,onDownloadDocument:i,onDeleteRow:d,onShareRow:c,onEditRow:u,onOrderContin:m,onStatusChange:p}=e;(0,O.A)();const{pathname:h}=(0,y.zy)();h.includes("admin"),(0,y.Zp)();console.log(a,"row");const{updated_at:v,email:g,company_name:x,last_name:f,middle_name:A,first_name:j,id:b,name:C,Contact:w}=a,[S,_]=(0,n.useState)(null),[D,k]=(Boolean(S),(0,n.useState)(null)),N=()=>{k(null)};return(0,V.jsxs)(M.A,{hover:!0,selected:t,children:[(o||t)&&(0,V.jsx)(T.A,{padding:"checkbox",children:(0,V.jsx)(q.A,{checked:t,onClick:o})}),(0,V.jsx)(T.A,{align:"left",children:null===w||void 0===w?void 0:w.id}),(0,V.jsx)(T.A,{align:"left",children:C}),(0,V.jsx)(T.A,{align:"left",children:null===w||void 0===w?void 0:w.email}),(0,V.jsx)(T.A,{align:"left",children:null===w||void 0===w?void 0:w.phone}),(0,V.jsx)(T.A,{align:"left",children:null===w||void 0===w?void 0:w.address}),(0,V.jsx)(T.A,{align:"left",children:null===w||void 0===w?void 0:w.company_name}),(0,V.jsx)(T.A,{align:"left",children:null===w||void 0===w?void 0:w.job_title}),(0,V.jsx)(T.A,{align:"right",children:(0,V.jsx)(I.ZE,{open:D,onOpen:e=>{k(e.currentTarget)},onClose:N,actions:(0,V.jsxs)(V.Fragment,{children:[c&&(0,V.jsxs)(z.A,{onClick:()=>{c(),N()},children:[(0,V.jsx)(L.A,{icon:"material-symbols:share"}),"All Share Orders"]}),d&&(0,V.jsxs)(z.A,{onClick:()=>{d(),N()},sx:{color:"error.main"},children:[(0,V.jsx)(L.A,{icon:"eva:trash-2-outline"}),"Delete"]}),u&&(0,V.jsxs)(z.A,{onClick:()=>{u(),N()},children:[(0,V.jsx)(L.A,{icon:"eva:edit-fill"}),"Edit"]})]})})})]})}const G={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",borderRadious:"10px",boxShadow:24,p:4},Y=[{id:"id",label:"Id",align:"left",width:800},{id:"name",label:"Name",align:"left",width:800},{id:"email",label:"Email",align:"left",width:800},{id:"phone",label:"Phone",align:"left",width:600},{id:"address",label:"Address",align:"left",width:600},{id:"company_name",label:"Company",align:"left",width:600},{id:"job_title",label:"Job",align:"left",width:600},{id:""}];function J(){var e,a,t,O,M,T,q;const{themeStretch:z}=(0,D.A)(),[J,W]=(0,n.useState)([]),[Z,K]=(0,n.useState)(),[H,Q]=(0,n.useState)(!1),[X,$]=(0,n.useState)(!1),[ee,ae]=(0,n.useState)(""),[te,ne]=(0,n.useState)("new"),[oe,le]=(0,n.useState)(null),[se,re]=(0,n.useState)(null),ie=(0,y.Zp)(),{enqueueSnackbar:de}=(0,C.dh)(),{dense:ce,page:ue,order:me,orderBy:pe,rowsPerPage:he,setPage:ve,selected:ge,setSelected:xe,onSort:fe,onChangeDense:Ae,onChangePage:je,onChangeRowsPerPage:be}=(0,k.Ay)({defaultOrderBy:"createDate"}),[Ce,ye]=(0,n.useState)([]),[we,Se]=(0,n.useState)(),[_e,De]=(0,n.useState)({}),[ke,Ne]=(0,n.useState)(!1);(0,n.useEffect)((()=>{(async()=>{try{var e;const t=await F.A.get("user/exists/contacts");var a;console.log(t,"all user api"),null!==t&&void 0!==t&&null!==(e=t.data)&&void 0!==e&&e.status?W(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.users):console.log("Status False in API")}catch(t){console.log(t,"all user api error")}})()}),[]);const Re=async()=>{try{var e;const t=await F.A.get("user/added/contacts");var a;if(console.log(t,"exist users api"),null!==t&&void 0!==t&&null!==(e=t.data)&&void 0!==e&&e.status)ye(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.currentUser);else console.log("Status False in API")}catch(t){console.log(t,"all your user api error")}};(0,n.useEffect)((()=>{Re()}),[]);const Le=async(e,a,t)=>{try{var n;const o=new FormData;o.append("name","".concat(a," ").concat(t));const l=await F.A.post("user/contact/add/".concat(e),o);console.log(l,"add user in list api"),null!==l&&void 0!==l&&null!==(n=l.data)&&void 0!==n&&n.status?(de("User Add In Your List",{variant:"success"}),Re()):console.log("Status False in API")}catch(o){console.log(o,"add user in list api error")}},Pe=(0,n.useRef)(""),Fe=o.Ik().shape({fname:o.Yj().required("First Name is required"),lname:o.Yj().required("Last Name is required"),email:o.Yj().required("Email is required")}),Ee=(0,n.useMemo)((()=>({fname:"",lname:"",email:"",phone:"",address:"",company:"",job:""})),[]),Ie=(0,w.mN)({resolver:(0,S.t)(Fe),defaultValues:Ee}),{reset:Be,watch:Oe,setValue:Me,handleSubmit:Te,formState:{isSubmitting:qe,errors:ze}}=Ie,Ve=Oe(),Ue=e=>{const{name:a,value:t}=null===e||void 0===e?void 0:e.target;De((e=>({...e,[a]:t})))},Ge=function(e){var a;let{tableData:t,comparator:n,filterName:o,filterStatus:l,filterService:s,filterStartDate:r,filterEndDate:i}=e;const d=null===(a=t)||void 0===a?void 0:a.map(((e,a)=>[e,a]));d.sort(((e,a)=>{const t=n(e[0],a[0]);return 0!==t?t:e[1]-a[1]})),t=d.map((e=>e[0])),o&&(t=t.filter((e=>{var a,t,n;return-1!==(null===(a=e.Contact)||void 0===a?void 0:a.first_name.toLowerCase().indexOf(o.toLowerCase()))||-1!==(null===(t=e.Contact)||void 0===t?void 0:t.last_name.toLowerCase().indexOf(o.toLowerCase()))||-1!==(null===(n=e.Contact)||void 0===n?void 0:n.email.toLowerCase().indexOf(o.toLowerCase()))})));"all"!==l&&(t=t.filter((e=>e.status===l)));"new"!==s&&(t=t.filter((e=>e.status===s)));r&&i&&(t=t.filter((e=>e.updated_at.getTime()>=r.getTime()&&e.updated_at.getTime()<=i.getTime())));return t}({tableData:Ce,comparator:(0,k.hz)(me,pe),filterName:ee,filterService:te,filterStartDate:oe,filterEndDate:se}),Ye=ce?56:76,Je=!Ge.length&&!!ee||!Ge.length&&!!te||!Ge.length&&!!se||!Ge.length&&!!oe;return(0,V.jsx)(_.A,{title:"Add Contact",children:(0,V.jsxs)(l.A,{maxWidth:!z&&"lg",children:[(0,V.jsx)(N.A,{heading:"Add Contact",links:[{name:"Dashboard",href:R.nB.root},{name:"Add Contact"}]}),(0,V.jsx)(s.A,{sx:{mb:5},children:(0,V.jsxs)(r.A,{sx:{px:2},children:[(0,V.jsx)(i.A,{gap:1,direction:"row",alignItems:"center",justifyContent:"space-between",children:(0,V.jsx)(d.A,{sx:{my:1,width:1},ref:Pe,label:"Search by first Name, Last Name & Email",value:(null===Pe||void 0===Pe||null===(e=Pe.current)||void 0===e?void 0:e.value)||"",onChange:e=>{const a=e.target.value.toLowerCase();Pe.current.value=a;const t=J.filter((e=>e.first_name.toLowerCase().includes(a)||e.last_name.toLowerCase().includes(a)||e.email.toLowerCase().includes(a)));console.log(t,"filteredData"),K(t)},size:"small"})}),(0,V.jsx)(c.A,{}),(null===Z||void 0===Z?void 0:Z.length)>0?Z.map(((e,a)=>(0,V.jsxs)(i.A,{flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[(0,V.jsxs)(u.A,{variant:"subtitle1",sx:{my:1,color:"black"},children:[(0,V.jsx)(L.A,{icon:"material-symbols:user-attributes-rounded",color:"green"})," ","".concat(e.first_name," ").concat(null===e||void 0===e?void 0:e.last_name)]}),(0,V.jsx)(m.A,{variant:"contained",onClick:()=>Le(null===e||void 0===e?void 0:e.id,null===e||void 0===e?void 0:e.first_name,null===e||void 0===e?void 0:e.last_name),startIcon:(0,V.jsx)(L.A,{icon:"material-symbols:contact-page-rounded"}),children:"Add in your list"})]},a))):(0,V.jsx)(i.A,{flexDirection:"row",alignItems:"center",justifyContent:"center",sx:{p:5},children:(0,V.jsx)(m.A,{variant:"contained",onClick:()=>Q(!0),startIcon:(0,V.jsx)(L.A,{icon:"material-symbols:contact-page-rounded"}),children:"Add Contact"})})]})}),(0,V.jsx)(c.A,{}),(0,V.jsxs)(s.A,{children:[(0,V.jsx)(B.F5,{filterName:ee,filterService:te,filterStartDate:oe,filterEndDate:se,onFilterName:e=>{ae(e),ve(0)},onFilterService:e=>{ne(e.target.value)},onFilterStartDate:e=>{le(e)},onFilterEndDate:e=>{re(e)}}),(0,V.jsx)(E.A,{children:(0,V.jsx)(p.A,{sx:{minWidth:800,position:"relative"},children:(0,V.jsxs)(h.A,{size:ce?"small":"medium",children:[(0,V.jsx)(I.er,{order:me,orderBy:pe,headLabel:Y,rowCount:Ce.length,numSelected:ge.length,onSort:fe}),(0,V.jsxs)(v.A,{children:[Ge.slice(ue*he,ue*he+he).map((e=>(0,V.jsx)(U,{row:e,onShareRow:()=>{return a=e.id,void ie("/dashboard/usershared/".concat(a));var a},onEditRow:()=>(async e=>{console.log(e,"UpdatedData"),Se(e),Ne(!0),Q(!0)})(e),onDeleteRow:()=>(async e=>{try{var a;const n=await F.A.get("user/remove/contact/".concat(e));var t;console.log(n,"contact delete"),null!==n&&void 0!==n&&null!==(a=n.data)&&void 0!==a&&a.status?(de(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message,{variant:"success"}),Re()):console.log("contact delete")}catch(n){console.log(n,"contact delete error")}})(null===e||void 0===e?void 0:e.id)},e.id))),(0,V.jsx)(I.dO,{height:Ye,emptyRows:(0,k.xl)(ue,he,Ce.length)}),(0,V.jsx)(I.Sm,{isNotFound:Je})]})]})})}),(0,V.jsx)(r.A,{sx:{position:"relative"},children:(0,V.jsx)(g.A,{rowsPerPageOptions:[5,10,25],component:"div",count:Ge.length,rowsPerPage:he,page:ue,onPageChange:je,onRowsPerPageChange:be})})]}),(0,V.jsx)(x.A,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:H,onClose:()=>Q(!1),closeAfterTransition:!0,slots:{backdrop:f.A},slotProps:{backdrop:{timeout:500}},children:(0,V.jsx)(A.A,{in:H,children:(0,V.jsx)(r.A,{sx:G,children:ke?(0,V.jsxs)(j.Ay,{item:!0,xs:12,md:12,children:[(0,V.jsx)(u.A,{variant:"h5",sx:{mb:2},children:"Edit Contact Details"}),(0,V.jsxs)(r.A,{sx:{display:"grid",columnGap:2,rowGap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)"}},children:[(0,V.jsx)(d.A,{name:"fname",label:"First Name",defaultValue:null===we||void 0===we||null===(a=we.Contact)||void 0===a?void 0:a.first_name,onChange:e=>Ue(e)}),(0,V.jsx)(d.A,{name:"lname",label:"Last Name",defaultValue:null===we||void 0===we||null===(t=we.Contact)||void 0===t?void 0:t.last_name,onChange:e=>Ue(e)}),(0,V.jsx)(d.A,{name:"phone",label:"Phone Nunber",defaultValue:null===we||void 0===we||null===(O=we.Contact)||void 0===O?void 0:O.phone,onChange:e=>Ue(e)}),(0,V.jsx)(d.A,{name:"address",label:"Address",defaultValue:null===we||void 0===we||null===(M=we.Contact)||void 0===M?void 0:M.address,onChange:e=>Ue(e)}),(0,V.jsx)(d.A,{name:"company",label:"Company Name",defaultValue:null===we||void 0===we||null===(T=we.Contact)||void 0===T?void 0:T.company_name,onChange:e=>Ue(e)}),(0,V.jsx)(d.A,{name:"job",label:"Job title",defaultValue:null===we||void 0===we||null===(q=we.Contact)||void 0===q?void 0:q.job_title,onChange:e=>Ue(e)})]}),(0,V.jsx)(i.A,{justifyContent:"flex-end",flexDirection:"row",gap:1,sx:{mt:3},children:(0,V.jsx)(b.A,{type:"button",variant:"contained",loading:X,onClick:()=>(async e=>{$(!0);try{var a,t,n,o,l,s,r;const i=new FormData;i.append("name","".concat(_e.fname," ").concat(_e.lname)||"".concat(null===we||void 0===we||null===(a=we.Contact)||void 0===a?void 0:a.first_name," ").concat(null===we||void 0===we||null===(t=we.Contact)||void 0===t?void 0:t.last_name)),i.append("phone",_e.phone||(null===we||void 0===we||null===(n=we.Contact)||void 0===n?void 0:n.phone)),i.append("address",_e.address||(null===we||void 0===we||null===(o=we.Contact)||void 0===o?void 0:o.address)),i.append("company_name",_e.company||(null===we||void 0===we||null===(l=we.Contact)||void 0===l?void 0:l.company_name)),i.append("job_title",_e.job||(null===we||void 0===we||null===(s=we.Contact)||void 0===s?void 0:s.job_title));const d=await F.A.post("user/update/contact/".concat(e),i);console.log(d,"update user api"),null!==d&&void 0!==d&&null!==(r=d.data)&&void 0!==r&&r.status?(de("Contact Updated ",{variant:"success"}),Ne(!1),Q(!1),Re()):console.log("Status False in API")}catch(i){console.log(i,"add user in list api error")}})(null===we||void 0===we?void 0:we.id),children:"Update Contact"})})]}):(0,V.jsx)(P.Op,{methods:Ie,onSubmit:Te((async e=>{console.log(e.request,"request"),$(!0);try{const a=new FormData;a.append("first_name",e.fname),a.append("last_name",e.lname),a.append("email",e.email),a.append("phone",e.phone),a.append("address",e.address),a.append("company_name",e.company),a.append("job_title",e.job),await F.A.post("user/contact/user/add",a).then((e=>{if($(!1),200===e.status||201===e.status){var a,t,n;const o=e.data;console.log(o,"add user new"),de("successfully add new user"),Q(!1),Le(null===o||void 0===o||null===(a=o.user)||void 0===a?void 0:a.id,null===o||void 0===o||null===(t=o.user)||void 0===t?void 0:t.first_name,null===o||void 0===o||null===(n=o.user)||void 0===n?void 0:n.last_name)}}))}catch(a){if(console.error(a),a.errors){Object.keys(a.errors).map((e=>de(a.errors[e][0],{variant:"error"})))}}finally{$(!1)}})),children:(0,V.jsxs)(j.Ay,{item:!0,xs:12,md:12,children:[(0,V.jsx)(u.A,{variant:"h5",sx:{mb:2},children:"Add Contact Details"}),(0,V.jsxs)(r.A,{sx:{display:"grid",columnGap:2,rowGap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)"}},children:[(0,V.jsx)(P.o3,{name:"fname",label:"First Name",value:null===Ve||void 0===Ve?void 0:Ve.fname}),(0,V.jsx)(P.o3,{name:"lname",label:"Last Name"}),(0,V.jsx)(P.o3,{name:"email",label:"Email"}),(0,V.jsx)(P.o3,{name:"phone",label:"Phone Nunber"}),(0,V.jsx)(P.o3,{name:"address",label:"Address"}),(0,V.jsx)(P.o3,{name:"company",label:"Company Name"}),(0,V.jsx)(P.o3,{name:"job",label:"Job title"})]}),(0,V.jsx)(i.A,{justifyContent:"flex-end",flexDirection:"row",gap:1,sx:{mt:3},children:(0,V.jsx)(b.A,{type:"submit",variant:"contained",loading:X,children:"Add Contact"})})]})})})})})]})})}},52432:(e,a,t)=>{t.d(a,{A:()=>D});var n=t(58168),o=t(98587),l=t(9950),s=(t(26429),t(2803)),r=t(5747),i=t(7951),d=t(79859),c=t(82053),u=t(19657),m=t(65471),p=t(44414);const h=(0,m.A)((0,p.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var v=t(24184);const g=(0,i.Ay)(v.A)((e=>{let{theme:a}=e;return(0,n.A)({display:"flex",marginLeft:"calc(".concat(a.spacing(1)," * 0.5)"),marginRight:"calc(".concat(a.spacing(1)," * 0.5)")},"light"===a.palette.mode?{backgroundColor:a.palette.grey[100],color:a.palette.grey[700]}:{backgroundColor:a.palette.grey[700],color:a.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,n.A)({},"light"===a.palette.mode?{backgroundColor:a.palette.grey[200]}:{backgroundColor:a.palette.grey[600]}),"&:active":(0,n.A)({boxShadow:a.shadows[0]},"light"===a.palette.mode?{backgroundColor:(0,u.tL)(a.palette.grey[200],.12)}:{backgroundColor:(0,u.tL)(a.palette.grey[600],.12)})})})),x=(0,i.Ay)(h)({width:24,height:16});const f=function(e){const a=e;return(0,p.jsx)("li",{children:(0,p.jsx)(g,(0,n.A)({focusRipple:!0},e,{ownerState:a,children:(0,p.jsx)(x,{ownerState:a})}))})};var A=t(37665);function j(e){return(0,A.A)("MuiBreadcrumbs",e)}const b=(0,t(44245).A)("MuiBreadcrumbs",["root","ol","li","separator"]),C=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],y=(0,i.Ay)(c.A,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,a)=>[{["& .".concat(b.li)]:a.li},a.root]})({}),w=(0,i.Ay)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,a)=>a.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),S=(0,i.Ay)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,a)=>a.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function _(e,a,t,n){return e.reduce(((o,l,s)=>(s<e.length-1?o=o.concat(l,(0,p.jsx)(S,{"aria-hidden":!0,className:a,ownerState:n,children:t},"separator-".concat(s))):o.push(l),o)),[])}const D=l.forwardRef((function(e,a){const t=(0,d.A)({props:e,name:"MuiBreadcrumbs"}),{children:i,className:c,component:u="nav",expandText:m="Show path",itemsAfterCollapse:h=1,itemsBeforeCollapse:v=1,maxItems:g=8,separator:x="/"}=t,A=(0,o.A)(t,C),[b,S]=l.useState(!1),D=(0,n.A)({},t,{component:u,expanded:b,expandText:m,itemsAfterCollapse:h,itemsBeforeCollapse:v,maxItems:g,separator:x}),k=(e=>{const{classes:a}=e;return(0,r.A)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},j,a)})(D),N=l.useRef(null),R=l.Children.toArray(i).filter((e=>l.isValidElement(e))).map(((e,a)=>(0,p.jsx)("li",{className:k.li,children:e},"child-".concat(a))));return(0,p.jsx)(y,(0,n.A)({ref:a,component:u,color:"text.secondary",className:(0,s.A)(k.root,c),ownerState:D},A,{children:(0,p.jsx)(w,{className:k.ol,ref:N,ownerState:D,children:_(b||g&&R.length<=g?R:(e=>v+h>=e.length?e:[...e.slice(0,v),(0,p.jsx)(f,{"aria-label":m,onClick:()=>{S(!0);const e=N.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-h,e.length)])(R),k.separator,x,D)})}))}))},30099:(e,a,t)=>{t.d(a,{A:()=>l});t(9950);var n=t(65471),o=t(44414);const l=(0,n.A)((0,o.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},88090:(e,a,t)=>{t.d(a,{A:()=>l});t(9950);var n=t(65471),o=t(44414);const l=(0,n.A)((0,o.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")}}]);