"use strict";(self.webpackChunkccms=self.webpackChunkccms||[]).push([[7258],{67258:(e,l,n)=>{n.r(l),n.d(l,{default:()=>O});var o=n(9950),t=n(79537),i=n(12257),r=n(75165),a=n(6368),s=n(82053),c=n(48089),d=n(74745),u=n(1320),h=n(15769),f=n(34075),g=n(91434),v=n(29031),x=n(13564),p=n(26689),m=n(89791),j=n(90260),A=n(46765),w=n(86608),C=n(38861),S=n(30744),b=n(66075),y=n(44185),_=n(63358),k=n(72870),D=n(12480),P=n(6768),F=n(32741),N=n(95074),B=n(98594),E=n(44414);const T=[{id:"file_no",label:"File No",align:"left",width:800},{id:"file_name",label:"File Name",align:"left",width:800},{id:"updated_at",label:"Date",align:"left",width:600},{id:"property_type",label:"Property Type",align:"left",width:800},{id:"transaction_type",label:"Transaction Type",align:"left",width:500},{id:"purchase_price",label:"Purchase Price",align:"left",width:800},{id:""},{id:""},{id:""}];function O(){const{themeStretch:e}=(0,w.A)(),l=(0,x.Zp)(),{enqueueSnackbar:n}=(0,v.dh)(),{dense:O,page:R,order:L,orderBy:I,rowsPerPage:M,setPage:z,selected:U,setSelected:V,onSort:Z,onChangeDense:W,onChangePage:q,onChangeRowsPerPage:J}=(0,C.Ay)({defaultOrderBy:"createDate"}),[Y,G]=(0,o.useState)([]),[H,K]=(0,o.useState)(""),[Q,X]=(0,o.useState)("new"),[$,ee]=(0,o.useState)(null),[le,ne]=(0,o.useState)(null),{currentTab:oe,onChangeTab:te}=(0,A.A)("all"),[ie,re]=(0,o.useState)("Title Insurance"),[ae,se]=(0,o.useState)(!1),[ce,de]=(0,o.useState)(""),[ue,he]=(0,o.useState)(),[fe,ge]=(0,o.useState)(),[ve,xe]=(0,o.useState)([]),[pe,me]=(0,o.useState)(null);Boolean(pe);(0,o.useEffect)((()=>{(async()=>{se(!0);try{var e;const l=await F.A.get("employee/users/list");console.log(l,"all user"),xe(null===l||void 0===l||null===(e=l.data)||void 0===e?void 0:e.files),console.log(l,"autofill")}catch(l){console.log(l,"autofill")}finally{se(!1)}})()}),[]);const{Employeefile:je}=(0,S.d4)((e=>e.EmployeeFile));console.log(je,"file details"),(0,o.useEffect)((()=>{null!==je&&void 0!==je&&je.length&&ue&&G(je)}),[je]);const Ae=function(e){var l;let{tableData:n,comparator:o,filterName:t,filterStatus:i,filterService:r,filterStartDate:a,filterEndDate:s}=e;const c=null===(l=n)||void 0===l?void 0:l.map(((e,l)=>[e,l]));c.sort(((e,l)=>{const n=o(e[0],l[0]);return 0!==n?n:e[1]-l[1]})),n=c.map((e=>e[0])),t&&(n=n.filter((e=>-1!==e.file_name.toLowerCase().indexOf(t.toLowerCase())||-1!==e.file_no.toLowerCase().indexOf(t.toLowerCase()))));"all"!==i&&(n=n.filter((e=>e.status===i)));"new"!==r&&(n=n.filter((e=>e.status===r)));a&&s&&(n=n.filter((e=>e.updated_at.getTime()>=a.getTime()&&e.updated_at.getTime()<=s.getTime())));return n}({tableData:Y,comparator:(0,C.hz)(L,I),filterName:H,filterService:Q,filterStatus:oe,filterStartDate:$,filterEndDate:le}),we=O?56:76,Ce=!Ae.length&&!!H||!Ae.length&&!!oe||!Ae.length&&!!Q||!Ae.length&&!!le||!Ae.length&&!!$;return(0,E.jsxs)(t.A,{maxWidth:!e&&"lg",children:[ae&&(0,E.jsx)(N.A,{}),(0,E.jsx)(_.A,{heading:"Your Files",links:[{name:"Dashboard",href:j.nB.root},{name:"File"}],action:(0,E.jsx)(i.A,{gap:1,direction:"row",children:(0,E.jsx)(r.A,{variant:"contained",component:p.N_,to:j.i8.file.addfile,startIcon:(0,E.jsx)(b.A,{icon:"clarity:form-line"}),children:"New File"})})}),(0,E.jsx)(i.A,{gap:1,direction:"row",alignItems:"center",justifyContent:"center",sx:{mb:3,width:"25%"},children:(0,E.jsx)(m.Ay,{options:null===ve||void 0===ve?void 0:ve.map((e=>({label:"".concat(null===e||void 0===e?void 0:e.first_name," ").concat(null===e||void 0===e?void 0:e.last_name),value:null===e||void 0===e?void 0:e.id}))),value:fe,onChange:e=>{console.log(e,"newFileId"),(0,S.JD)((0,B.oc)(e.value)),he(e.value),ge(e)},isSearchable:"true",placeholder:"Select a User"})}),(0,E.jsx)(a.A,{sx:{p:2},children:(0,E.jsx)(s.A,{variant:"h4",gutterBottom:!0,children:ie.label})}),(0,E.jsxs)(c.A,{children:[(0,E.jsx)(d.A,{}),(0,E.jsx)(D.F5,{filterName:H,filterService:Q,filterStartDate:$,filterEndDate:le,onFilterName:e=>{K(e),z(0)},onFilterService:e=>{X(e.target.value)},onFilterStartDate:e=>{ee(e)},onFilterEndDate:e=>{ne(e)}}),(0,E.jsx)(y.A,{children:(0,E.jsx)(u.A,{sx:{minWidth:800,position:"relative"},children:(0,E.jsxs)(h.A,{size:O?"small":"medium",children:[(0,E.jsx)(k.er,{order:L,orderBy:I,headLabel:T,rowCount:Y.length,numSelected:U.length,onSort:Z}),(0,E.jsxs)(f.A,{children:[Ae.slice(R*M,R*M+M).map((e=>(0,E.jsx)(P.A,{row:e,onEditRow:()=>(e=>{l(j.i8.file.editfile(null===e||void 0===e?void 0:e.id),{state:e})})(e),onViewRow:()=>(e=>{l(j.i8.file.filepreview(null===e||void 0===e?void 0:e.id),{state:e})})(e),onDeleteRow:()=>{return l=e.id,se(!0),void F.A.delete("user/user_file/".concat(l)).then((e=>{if(console.log("response",e),se(!1),200===e.status||201===e.status){const e=Y.filter((e=>e.id!==l));V([]),G(e),n("Delete Successfully")}})).catch((e=>{se(!1),e.errors&&Object.keys(e.errors).map((l=>n(e.errors[l][0],{variant:"error"})))}));var l}},e.id))),(0,E.jsx)(k.dO,{height:we,emptyRows:(0,C.xl)(R,M,Y.length)}),(0,E.jsx)(k.Sm,{isNotFound:Ce})]})]})})}),(0,E.jsx)(a.A,{sx:{position:"relative"},children:(0,E.jsx)(g.A,{rowsPerPageOptions:[5,10,25],component:"div",count:Ae.length,rowsPerPage:M,page:R,onPageChange:q,onRowsPerPageChange:J})})]})]})}},6768:(e,l,n)=>{n.d(l,{A:()=>m});var o=n(9950),t=n(13564),i=n(26689),r=n(14857),a=n(9213),s=n(21671),c=n(93038),d=n(23266),u=n(75165),h=n(97591),f=n(90260),g=n(34437),v=(n(22704),n(33949),n(66075)),x=n(72870),p=n(44414);function m(e){var l,n,m,j,A,w,C,S,b,y;let{row:_,selected:k,onSelectRow:D,onAssign:P,onViewRow:F,onDocumentUpload:N,onDownloadDocument:B,onDeleteRow:E,onShareRow:T,onEditRow:O,onOrderContin:R,onStatusChange:L}=e;(0,r.A)();const{pathname:I}=(0,t.zy)(),M=(I.includes("admin"),(0,t.Zp)());console.log(_,"row");const{updated_at:z,DummyData:U,transaction_type:V,purchase_price:Z,file_no:W,file_name:q,id:J,_count:Y,user:G}=_,[H,K]=(0,o.useState)(null),Q=Boolean(H),[X,$]=(0,o.useState)(null),ee=()=>{$(null)},le=()=>{M("/dashboard/filepreview/".concat(null===_||void 0===_?void 0:_.id),{state:{row:_}})};return(0,p.jsxs)(a.A,{selected:k,sx:{transition:"background-color 0.3s ease, color 0.3s ease","&:hover":{backgroundColor:"#403390",color:"white","& .MuiTableCell-root":{color:"white"},"& .MuiButton-root":{backgroundColor:"#fff",color:"#403390"},"& .MuiMenuItem-root":{color:"white"}}},children:[(D||k)&&(0,p.jsx)(s.A,{padding:"checkbox",children:(0,p.jsx)(c.A,{checked:k,onClick:D})}),(0,p.jsx)(s.A,{sx:{color:"#DD9A19"},align:"left",onClick:le,children:W}),(0,p.jsx)(s.A,{align:"left",onClick:le,children:q}),(0,p.jsx)(s.A,{align:"left",onClick:le,children:null===U||void 0===U||null===(l=U.subject_premise)||void 0===l?void 0:l.property_location}),(0,p.jsx)(s.A,{align:"left",onClick:le,children:z&&(0,g.ts)(z)}),(0,p.jsxs)(s.A,{align:"left",onClick:le,children:[(null===U||void 0===U||null===(n=U.buyers)||void 0===n?void 0:n.length)>0&&(null===U||void 0===U||null===(m=U.buyers[0])||void 0===m?void 0:m.first_name)," ",(null===U||void 0===U||null===(j=U.buyers)||void 0===j?void 0:j.length)>0&&(null===U||void 0===U||null===(A=U.buyers[0])||void 0===A?void 0:A.last_name)]}),(0,p.jsxs)(s.A,{align:"left",onClick:le,children:[(null===U||void 0===U||null===(w=U.sellers)||void 0===w?void 0:w.length)>0&&(null===U||void 0===U||null===(C=U.sellers[0])||void 0===C?void 0:C.first_name)," ",(null===U||void 0===U||null===(S=U.sellers)||void 0===S?void 0:S.length)>0&&(null===U||void 0===U||null===(b=U.sellers[0])||void 0===b?void 0:b.last_name)]}),(0,p.jsx)(s.A,{align:"left",onClick:le,children:V}),(0,p.jsx)(s.A,{align:"left",onClick:le,children:null===U||void 0===U||null===(y=U.lender)||void 0===y?void 0:y.organization}),(0,p.jsx)(s.A,{align:"left",children:(0,p.jsx)(d.A,{onClick:()=>{E(),ee()},sx:{color:"error.main"},children:(0,p.jsx)(v.A,{icon:"eva:trash-2-outline"})})}),(0,p.jsx)(s.A,{align:"left",children:R&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u.A,{variant:"contained","aria-controls":Q?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":Q?"true":void 0,onClick:e=>{K(e.currentTarget)},sx:{backgroundColor:"#403390","&:hover":{backgroundColor:"#fff",color:"#403390"}},children:(null===Y||void 0===Y?void 0:Y.orders)>0?"Ordered":"Order"}),(0,p.jsxs)(h.A,{id:"basic-menu",anchorEl:H,open:Q,onClose:()=>{K(null)},MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,p.jsx)(d.A,{component:i.N_,to:"".concat(f.nB.orders.titleInsurance,"/").concat(J),children:"Title Insurance"}),(0,p.jsx)(d.A,{component:i.N_,to:"".concat(f.nB.orders.coopLienSearch,"/").concat(J),children:"Coop Lien Search"}),(0,p.jsx)(d.A,{component:i.N_,to:"".concat(f.nB.orders.eagle9Policy,"/").concat(J),children:"Eagle 9 Policy"}),(0,p.jsx)(d.A,{component:i.N_,to:"".concat(f.nB.orders.coopCondoOfferinPlans,"/").concat(J),children:"Coop/Condo Offering Plans"}),(0,p.jsx)(d.A,{component:i.N_,to:"".concat(f.nB.orders.uccCreateFile,"/").concat(J),children:"UCC - Create/File"}),(0,p.jsx)(d.A,{component:i.N_,to:"".concat(f.nB.orders.exchange1031,"/").concat(J),children:"1031 Exchange"}),(0,p.jsx)(d.A,{component:i.N_,to:"".concat(f.nB.orders.acrisETax,"/").concat(J),children:"Acris E-Tax Forms"}),(0,p.jsx)(d.A,{component:i.N_,to:"".concat(f.nB.orders.otherSearches,"/").concat(J),children:"Other Searches"})]})]})}),(0,p.jsx)(s.A,{align:"right",children:(0,p.jsx)(x.ZE,{open:X,onOpen:e=>{$(e.currentTarget)},onClose:ee,actions:(0,p.jsxs)(p.Fragment,{children:[F&&(0,p.jsxs)(d.A,{onClick:()=>{F(),ee()},children:[(0,p.jsx)(v.A,{icon:"tabler:eye-filled"}),"View"]}),T&&(0,p.jsxs)(d.A,{onClick:()=>{T(),ee()},children:[(0,p.jsx)(v.A,{icon:"material-symbols:share"}),"Share"]})]})})})]})}}}]);