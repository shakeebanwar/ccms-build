"use strict";(self.webpackChunkccms=self.webpackChunkccms||[]).push([[4607],{4607:(e,t,a)=>{a.r(t),a.d(t,{default:()=>B});var l=a(9950),r=a(13564),o=a(79537),s=a(48089),n=a(68367),i=a(84142),c=a(12257),d=a(6368),u=a(82053),h=a(74745),p=a(1320),g=a(15769),f=a(34075),b=a(91434),m=a(16497),x=a(37324),w=a(29031),S=a(90260),v=a(46765),j=a(86608),A=a(38861),O=a(8279),y=a(22704),C=(a(66075),a(44185)),P=a(63358),D=a(72870),k=a(12480),T=a(32741),_=a(95074),R=(a(16099),a(44414));const E=["new","old"],F=[{id:"status",label:"Order Status",align:"left",width:500},{id:"user",label:"ordered by",align:"left",width:600},{id:"updated_at",label:"Date",align:"left",width:600},{id:"file_no",label:"File No",align:"left",width:800},{id:"property_type",label:"Property Type",align:"left",width:800},{id:"transaction_type",label:"Transaction Type",align:"left",width:500},{id:"purchase_price",label:"Purchase Price",align:"left",width:800},{id:"status_change",label:"Change Status",align:"left",width:800},{id:""}],L=[{api:"titleInsurance",label:"Title Insurance"},{api:"corpLienSearch",label:"Coop Lien Searches"},{api:"acricetax",label:"ACRIS E-Tax Forms"},{api:"eaglepolicy",label:"Eagle 9 Policy"},{api:"uccform",label:"UCC"},{api:"othersearch",label:"Other Search / Request"},{api:"offeringPlan",label:"Offering Plans"},{api:"exchanger",label:"1031 Exchanges"},{api:"",label:"Sightline\xae"}];function B(){const{themeStretch:e}=(0,j.A)(),{enqueueSnackbar:t}=(0,w.dh)(),a=(0,r.Zp)(),{dense:B,page:I,order:N,orderBy:V,rowsPerPage:q,setPage:M,selected:U,onSort:z,onChangeDense:W,onChangePage:Y,onChangeRowsPerPage:H}=(0,A.Ay)({defaultOrderBy:"createDate"}),[Z,G]=(0,l.useState)([]),[J,K]=(0,l.useState)(""),[Q,X]=(0,l.useState)("new"),[$,ee]=(0,l.useState)(null),[te,ae]=(0,l.useState)(null),{currentTab:le,onChangeTab:re}=(0,v.A)("all"),[oe,se]=(0,l.useState)("Title Insurance"),[ne,ie]=(0,l.useState)(!1),ce=(0,l.useRef)(null),[de,ue]=(0,l.useState)(!1),[he,pe]=(0,l.useState)("");(0,l.useEffect)((()=>{"Sightline\xae"!==oe&&"UCC"!==oe&&ge(L.find((e=>e.label===oe)).api)}),[oe]);const ge=e=>{ie(!0);try{T.A.get("employee/".concat(e)).then((e=>{ie(!1);const a=e.data;console.log(a,"Dataemployee"),200===e.status?G(a.orders):t(a.message)}))}catch(a){if(ie(!1),a.errors){Object.keys(a.errors).map((e=>t(a.errors[e][0],{variant:"error"})))}}},fe=(e,a)=>{console.log(a,"status"),ue(e),"completed"===a?(pe(a),ce.current.click()):((e,a)=>{ie(!0);try{const l=new FormData;l.append("status",a),l.append("id",e),T.A.post("/employee/changeorderStatus",l).then((l=>{if(console.log(l,"status api"),ie(!1),200===l.status||201===l.status){const r=l.data,o=Z.map((t=>t.id===e?{...t,status:a}:t));G(o),t(r.message)}})).catch((e=>{ie(!1),console.log(e,"catch errror")}))}catch(l){ie(!1),l.errors&&Object.keys(l.errors).map((e=>t(l.errors[e][0],{variant:"error"})))}})(e,a)},be=function(e){let{tableData:t,comparator:a,filterName:l,filterStatus:r,filterService:o,filterStartDate:s,filterEndDate:n}=e;const i=t.map(((e,t)=>[e,t]));i.sort(((e,t)=>{const l=a(e[0],t[0]);return 0!==l?l:e[1]-t[1]})),t=i.map((e=>e[0])),l&&(t=t.filter((e=>-1!==e.order_title.transaction_type.toLowerCase().indexOf(l.toLowerCase())||-1!==e.order_title.property_type.toLowerCase().indexOf(l.toLowerCase()))));"all"!==r&&(t=t.filter((e=>e.status===r)));"new"!==o&&(t=t.filter((e=>e.status===o)));s&&n&&(t=t.filter((e=>e.updated_at.getTime()>=s.getTime()&&e.updated_at.getTime()<=n.getTime())));return t}({tableData:Z,comparator:(0,A.hz)(N,V),filterName:J,filterService:Q,filterStatus:le,filterStartDate:$,filterEndDate:te}),me=B?56:76,xe=!be.length&&!!J||!be.length&&!!le||!be.length&&!!Q||!be.length&&!!te||!be.length&&!!$,we=e=>Z.filter((t=>t.status===e)).length,Se=[{value:"all",label:"All",color:"info",count:Z.length},{value:"active",label:"Active",color:"info",count:we("active")},{value:"new",label:"New",color:"info",count:we("new")},{value:"placed",label:"Placed",color:"info",count:we("placed")},{value:"completed",label:"Completed",color:"success",count:we("completed")},{value:"on hold",label:"On Hold",color:"warning",count:we("on hold")},{value:"draft",label:"Draft",color:"default",count:we("draft")},{value:"cancelled",label:"Cancelled",color:"error",count:we("cancelled")}];return(0,R.jsxs)(O.A,{title:"Order: Your Orders",children:[ne&&(0,R.jsx)(_.A,{}),(0,R.jsx)("input",{type:"file",ref:ce,onChange:e=>{ie(!0);const a=new FormData;a.append("status",he),a.append("file",e.target.files[0]),a.append("id",de);try{T.A.post("employee/changeorderStatus",a).then((e=>{if(console.log(e,"status api"),ie(!1),200===e.status||201===e.status){const a=e.data,l=Z.map((e=>e.id===de?{...e,status:he}:e));console.log(l,"UpdatedOrders"),G(l),t(a.message)}})).catch((()=>{ie(!1)}))}catch(l){if(ie(!1),l.errors){Object.keys(l.errors).map((e=>t(l.errors[e][0],{variant:"error"})))}}},hidden:!0}),(0,R.jsxs)(o.A,{maxWidth:!e&&"lg",children:[(0,R.jsx)(P.A,{heading:"Your Orders",links:[{name:"Dashboard",href:S.i8.root},{name:"Orders"}]}),(0,R.jsx)(s.A,{sx:{mb:5},children:(0,R.jsx)(n.A,{allowScrollButtonsMobile:!0,variant:"scrollable",scrollButtons:"auto",value:oe,onChange:(e,t)=>se(t),sx:{px:2,bgcolor:"#403390",color:"#fff"},children:L.map((e=>(0,R.jsx)(i.A,{disableRipple:!0,value:e.label,label:(0,R.jsx)(c.A,{spacing:1,direction:"row",alignItems:"center",children:(0,R.jsx)("div",{children:e.label})}),sx:{color:oe===e.label?"black":"white","&.Mui-selected":{color:"black"}}},e.label)))})}),(0,R.jsx)(d.A,{sx:{p:2},children:(0,R.jsx)(u.A,{variant:"h4",gutterBottom:!0,children:oe.label})}),(0,R.jsxs)(s.A,{children:[(0,R.jsx)(n.A,{allowScrollButtonsMobile:!0,variant:"scrollable",scrollButtons:"auto",value:le,onChange:re,sx:{px:2,bgcolor:"background.neutral"},children:Se.map((e=>(0,R.jsx)(i.A,{disableRipple:!0,value:e.value,label:(0,R.jsxs)(c.A,{spacing:1,direction:"row",alignItems:"center",children:[(0,R.jsx)("div",{children:e.label})," ",(0,R.jsxs)(y.A,{color:e.color,children:[" ",e.count," "]})]})},e.value)))}),(0,R.jsx)(h.A,{}),(0,R.jsx)(k.F5,{filterName:J,filterService:Q,filterStartDate:$,filterEndDate:te,onFilterName:e=>{K(e),M(0)},onFilterService:e=>{X(e.target.value)},onFilterStartDate:e=>{ee(e)},onFilterEndDate:e=>{ae(e)},optionsService:E}),(0,R.jsx)(C.A,{children:(0,R.jsx)(p.A,{sx:{minWidth:800,position:"relative"},children:(0,R.jsxs)(g.A,{size:B?"small":"medium",children:[(0,R.jsx)(D.er,{order:N,orderBy:V,headLabel:F,rowCount:Z.length,numSelected:U.length,onSort:z}),(0,R.jsxs)(f.A,{children:[be.slice(I*q,I*q+q).map((e=>(0,R.jsx)(k.oR,{row:e,onViewRow:()=>(e=>{"Title Insurance"===oe&&a(S.i8.viewOrders.titleInsuranceOrderView,{state:e}),"Coop Lien Searches"===oe&&a(S.i8.viewOrders.CoopLienSearchOrderView,{state:e}),"Eagle 9 Policy"===oe&&a(S.i8.viewOrders.eagle9PolicyOrderView,{state:e}),"Offering Plans"===oe&&a(S.i8.viewOrders.coopCondoOfferinPlansOrderView,{state:e}),"1031 Exchanges"===oe&&a(S.i8.viewOrders.exchange1031OrderView,{state:e}),"Other Search / Request"===oe&&a(S.i8.viewOrders.otherSearchesOrderView,{state:e})})(e),onStatusChange:t=>fe(e.id,t)},e.id))),(0,R.jsx)(D.dO,{height:me,emptyRows:(0,A.xl)(I,q,Z.length)}),(0,R.jsx)(D.Sm,{isNotFound:xe})]})]})})}),(0,R.jsxs)(d.A,{sx:{position:"relative"},children:[(0,R.jsx)(b.A,{rowsPerPageOptions:[5,10,25],component:"div",count:be.length,rowsPerPage:q,page:I,onPageChange:Y,onRowsPerPageChange:H}),(0,R.jsx)(m.A,{control:(0,R.jsx)(x.A,{checked:B,onChange:W}),label:"Dense",sx:{px:3,py:1.5,top:0,position:{md:"absolute"}}})]})]})]})]})}}}]);