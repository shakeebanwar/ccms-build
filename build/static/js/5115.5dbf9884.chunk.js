"use strict";(self.webpackChunkccms=self.webpackChunkccms||[]).push([[5115],{95115:(e,r,n)=>{n.r(r),n.d(r,{default:()=>P});var a=n(29031),s=n(9950),t=n(13564),o=n(73878),i=n(60666),d=n(68654),l=n(9449),p=n(28095),c=n(60899),u=n(48089),m=n(45180),h=n(6368),y=n(12257),A=n(82053),x=n(22707),f=n(249),E=n(32610),g=n(1320),j=n(70693),v=n(15769),C=n(69780),S=n(9213),T=n(21671),b=n(34075),O=n(90260),I=n(73561),N=n(32741),R=n(46631),_=n(44414);function P(){const[e,r]=(0,s.useState)([]),n=(0,t.Zp)(),P=(0,o.wA)(),{enqueueSnackbar:D}=(0,a.dh)(),{countries:w,states:M}=(0,o.d4)((e=>e.countriesState)),{id:L}=(0,t.g)();(0,s.useEffect)((()=>{(()=>{try{N.A.get("employee/offeringPlan/".concat(L)).then((e=>{const n=e.data;console.log(n.orders[0],"edit Data"),200===e.status&&r(n.orders[0])}))}catch(e){e.errors&&Object.keys(e.errors).map((r=>D(e.errors[r][0],{variant:"error"})))}})()}),[L]);const F=i.Ik().shape({country:i.Yj().required("Country is required"),propertyAddress:i.Yj().required("Property Address is required"),orderType:i.Yj().required("Order Type is required"),termsConditions:i.zM().oneOf([!0],"Read & check Terms & Condition"),shopVia:i.Yj().required("Select is required"),accountAddress:i.Yj().required("Account Address  is required"),name:i.Yj().when("orderType",{is:"Printed Copy (Includes Digital Copy): $200",then:i.Yj().required("Name is required")}),address:i.Yj().when("orderType",{is:"Printed Copy (Includes Digital Copy): $200",then:i.Yj().required("Address is required")}),city:i.Yj().when("orderType",{is:"Printed Copy (Includes Digital Copy): $200",then:i.Yj().required("City is required")}),state:i.Yj().when("orderType",{is:"Printed Copy (Includes Digital Copy): $200",then:i.Yj().required("County is required")}),zipCode:i.Yj().when("orderType",{is:"Printed Copy (Includes Digital Copy): $200",then:i.Yj().required("Zip code is required").min(5,"Zip code must between 5 to 7 characters")}),phone:i.Yj().when("orderType",{is:"Printed Copy (Includes Digital Copy): $200",then:i.Yj().required("Phone Number is required").min(10,"phone number must be greater than 10 digit").max(15,"phone number must be less than 15 digit")})}),Y=(0,s.useMemo)((()=>{var r,n,a,s,t,o,i,d,l,p,c,u,m,h,y;return{country:"US",propertyAddress:(null===e||void 0===e||null===(r=e.offering_plan)||void 0===r?void 0:r.property_address)||"",orderType:(null===e||void 0===e||null===(n=e.offering_plan)||void 0===n?void 0:n.offering_plan_provided)||"Digital Copy: FREE",termsNote:'CCMS OFFERING PLANS AND AMENDMENTS ARE MADE AVAILABLE TO REGISTERED USERS OF THE CCMS.COM \ue9d0 WEBSITE FOR THEIR PERSONAL, NON-COMMERCIAL USE IN CONNECTION WITH PENDING OR CONTEMPLATED CONDOMINIUM AND COOPERATIVE APARTMENT TRANSACTIONS ONLY AND MAY NOT BE SOLD, RESOLD, REPRODUCED, DUPLICATED, COPIED, EDITED, PUBLISHED, POSTED ON ANY WEBSITE, TRANSMITTED OR OTHERWISE DISTRIBUTED OR EXPLOITED FOR ANY COMMERCIAL OR PROMOTIONAL PURPOSES. ALL OF CCMS OFFERING PLANS AND AMENDMENTS ARE OFFERED ON AN "AS-IS" BASIS, WITHOUT ANY REPRESENTATIONS OR WARRANTIES AS TO THEIR COMPLETENESS OR ACCURACY. IN THE EVENT OF ANY ERRORS OR OMISSIONS, INCLUDING WITHOUT LIMITATION, MISSING OR INCOMPLETE PAGES OR AMENDMENTS, CCMS SOLE LIABILITY SHALL BE LIMITED TO THE RETURN OF ANY FEES PAID TO CCMS FOR THIS SERVICE. IN NO EVENT SHALL CCMS OR ANY OF ITS SUBSIDIARIES BE LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES ARISING FROM ANY SUCH ERRORS OR OMISSIONS. CCMS RESERVES THE RIGHT TO LIMIT THE NUMBER OF ORDERS PER REGISTERED USER TO ONE (1) PER WEEK.',termsConditions:(null===e||void 0===e||null===(a=e.offering_plan)||void 0===a?void 0:a.term)||!1,shopVia:(null===e||void 0===e||null===(s=e.offering_plan)||void 0===s?void 0:s.ship_via)||"Pick Up in Office (Free)",accountAddress:(null===e||void 0===e||null===(t=e.offering_plan)||void 0===t?void 0:t.use_my_account_address)||!1,name:(null===e||void 0===e||null===(o=e.offering_plan)||void 0===o?void 0:o.name)||"",address:(null===e||void 0===e||null===(i=e.offering_plan)||void 0===i?void 0:i.address)||"",city:(null===e||void 0===e||null===(d=e.offering_plan)||void 0===d?void 0:d.city)||"",state:(null===e||void 0===e||null===(l=e.offering_plan)||void 0===l?void 0:l.state)||"",zipCode:(null===e||void 0===e||null===(p=e.offering_plan)||void 0===p?void 0:p.zipcode)||"",phone:(null===e||void 0===e||null===(c=e.offering_plan)||void 0===c?void 0:c.phone_number)||"",isSearch:!1,isShow:!1,totalAmount:0,rs_first_name:(null===e||void 0===e||null===(u=e.real_estate_agents)||void 0===u?void 0:u.first_name)||"",rs_last_name:(null===e||void 0===e||null===(m=e.real_estate_agents)||void 0===m?void 0:m.last_name)||"",mo_first_name:(null===e||void 0===e||null===(h=e.mortgage_brokers)||void 0===h?void 0:h.first_name)||"",mo_last_name:(null===e||void 0===e||null===(y=e.mortgage_brokers)||void 0===y?void 0:y.last_name)||""}}),[e]),k=(0,l.mN)({resolver:(0,d.t)(F),defaultValues:Y}),{reset:G,watch:H,setValue:q,handleSubmit:U,formState:{isSubmitting:B,errors:V}}=k,$=H();function W(e,r){return{name:e,amount:r}}console.log("errors",V),(0,s.useEffect)((()=>{e&&G(Y)}),[e,G,Y]),(0,s.useEffect)((()=>{"FedEx Priority Overnight\xae ($25.00)"===$.shopVia?q("totalAmount",25):"Messenger in Manhattan ($50.00)"===$.shopVia?q("totalAmount",50):q("totalAmount",0)}),[$.shopVia]);const z=[W("Printed Copy (includes Digital copy)",200),W("Shop Via:","$".concat($.totalAmount)),W("Total:","$".concat(200+$.totalAmount))];return(0,_.jsx)(I.Op,{methods:k,onSubmit:U((async e=>{try{const r=new FormData;r.append("property_address",e.propertyAddress),r.append("county",e.country),r.append("offering_plan_provided",e.orderType),r.append("term",e.termsConditions),r.append("term_note",e.termsNote),r.append("ship_via",e.shopVia),r.append("total_amount",e.totalAmount),r.append("use_my_account_address",e.accountAddress),r.append("name",e.name),r.append("address",e.address),r.append("city",e.city),r.append("state",e.state),r.append("zipcode",e.zipCode),r.append("phone_number",e.phone),r.append("file_id",L),r.append("rea_first_name",e.rs_first_name),r.append("rea_last_name",e.rs_last_name),r.append("mb_first_name",e.mo_first_name),r.append("mb_last_name",e.mo_last_name),await N.A.post("/user/offeringPlan",r).then((r=>{if(200===r.status||201===r.status){const a=r.data;D(a.message),G(),n(O.nB.orders.coopCondoOfferinPlansPreview,{state:e})}}))}catch(r){if(console.error(r),r.errors){Object.keys(r.errors).map((e=>D(r.errors[e][0],{variant:"error"})))}}})),children:(0,_.jsxs)(c.Ay,{container:!0,spacing:3,children:[(0,_.jsx)(c.Ay,{item:!0,xs:12,md:12,children:(0,_.jsxs)(u.A,{sx:{p:3},children:[(0,_.jsx)(m.A,{sx:{p:0,pb:3},title:"Offering Plan"}),(0,_.jsxs)(h.A,{sx:{display:"grid",columnGap:2,rowGap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(3, 1fr)"}},children:[(0,_.jsxs)(I.tX,{name:"country",label:"Country",onChange:e=>{const{value:r}=e.target;q("country",r),P((0,R.nP)(r))},children:[(0,_.jsx)("option",{value:""}),Object.keys(w).map((e=>(0,_.jsx)("option",{value:e,children:w[e]},e)))]}),(0,_.jsx)(I.o3,{name:"propertyAddress",label:"Property Address"}),(0,_.jsx)(y.A,{flexDirection:"row",alignItems:"center",gap:1,children:(0,_.jsx)(p.A,{type:"button",variant:"contained",onClick:()=>{q("isSearch",!0)},children:"Search Property"})})]}),$.isSearch&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(A.A,{variant:"subtitle1",sx:{mt:3},children:"Search Results"}),(0,_.jsx)(A.A,{variant:"body2",children:"Please select your desired plan from the above results and proceed to Place Order."}),(0,_.jsx)(A.A,{variant:"subtitle1",sx:{mt:3},children:"No results found"}),(0,_.jsxs)(A.A,{variant:"body2",children:["If the offering plan you are searching for does not appear in the above results,"," ",(0,_.jsx)(x.A,{onClick:()=>q("isShow",!$.isShow),style:{cursor:"pointer"},children:"CLICK HERE"})]}),$.isShow?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(f.A,{sx:{listStyleType:"disc"},children:[(0,_.jsx)(E.Ay,{sx:{display:"list-item"},children:"If you cannot locate the offering plan you are searching for, we may still have a copyof the plan but not yet posted it our website or we may able to locate a copy for you without charge."}),(0,_.jsxs)(E.Ay,{sx:{display:"list-item"},children:["If not,"," ",(0,_.jsx)("strong",{children:"we will contribute $50 toward your (or your client's) cost of purchasing the plan*"}),", provided you allow us to make and retain ownership of the digital copy of plan and amendments for in our library."]})]}),(0,_.jsx)(A.A,{variant:"body2",color:"gray",children:"Please provide us with the following information and we will get back to you ASAP (within one business day):"}),(0,_.jsxs)(h.A,{sx:{display:"grid",columnGap:2,rowGap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(3, 1fr)"},mt:1},children:[(0,_.jsxs)(I.tX,{name:"country",label:"Country",children:[(0,_.jsx)("option",{value:""}),Object.keys(w).map((e=>(0,_.jsx)("option",{value:e,children:w[e]},e)))]}),(0,_.jsx)(I.o3,{name:"propertyAddress",label:"Property Address"})]})]}):null]})]})}),$.isSearch&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(c.Ay,{item:!0,xs:12,md:12,children:(0,_.jsxs)(u.A,{sx:{p:3},children:[(0,_.jsx)(m.A,{sx:{p:0,pb:3},title:"Place Order"}),(0,_.jsxs)(h.A,{sx:{display:"grid",columnGap:2,rowGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)"}},children:[(0,_.jsx)(A.A,{variant:"body2",children:"I would like to have my Offering Plan provided as a:"}),(0,_.jsx)(I.b$,{name:"orderType",options:["Digital Copy: FREE","Printed Copy (Includes Digital Copy): $200"]}),(0,_.jsxs)(A.A,{variant:"body2",children:[(0,_.jsx)("strong",{children:"Digital Copy Details :"})," The offering plans and amendments can be viewed (but not printed) on up to 3 computers for 90 days. If you need access for longer than 90 days, please email offeringplans@ccms.com and we would be happy to extend your access."]}),"Printed Copy (Includes Digital Copy): $200"===$.orderType&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(g.A,{component:j.A,children:(0,_.jsxs)(v.A,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,_.jsx)(C.A,{children:(0,_.jsxs)(S.A,{children:[(0,_.jsx)(T.A,{children:"Item"}),(0,_.jsx)(T.A,{children:"Amount"})]})}),(0,_.jsx)(b.A,{children:z.map((e=>(0,_.jsxs)(S.A,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,_.jsx)(T.A,{component:"th",scope:"row",children:e.name}),(0,_.jsx)(T.A,{children:e.amount})]},e.name)))})]})}),(0,_.jsx)(I.tb,{name:"shopVia",options:["Pick Up in Office (Free)","FedEx Priority Overnight\xae ($25.00)","Messenger in Manhattan ($50.00)"]}),(0,_.jsx)(A.A,{variant:"body1",style:{marginTop:"1rem"},children:(0,_.jsx)("strong",{children:"Shipment Address"})}),(0,_.jsx)(I.SF,{name:"accountAddress",label:"Use my account address"}),(0,_.jsxs)(h.A,{sx:{display:"grid",columnGap:2,rowGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(3, 1fr)"}},children:[(0,_.jsx)(I.o3,{name:"name",label:"Name"}),(0,_.jsx)(I.o3,{name:"address",label:"Address"}),(0,_.jsx)(I.o3,{name:"city",label:"City"}),(0,_.jsxs)(I.tX,{name:"state",label:"County",children:[(0,_.jsx)("option",{value:""}),Object.keys(M).map((e=>(0,_.jsx)("option",{value:M[e],children:M[e]},e)))]}),(0,_.jsx)(I.o3,{name:"zipCode",label:"Zip Code"}),(0,_.jsx)(I.o3,{name:"phone",label:"Phone"})]})]})]})]})}),(0,_.jsx)(c.Ay,{item:!0,xs:12,md:12,children:(0,_.jsxs)(u.A,{sx:{p:3},children:[(0,_.jsx)(m.A,{sx:{p:0,pb:3},title:"Real Estate Agent "}),(0,_.jsxs)(h.A,{sx:{display:"grid",columnGap:2,rowGap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"}},children:[(0,_.jsx)(I.o3,{name:"rs_first_name",label:"First Name"}),(0,_.jsx)(I.o3,{name:"rs_last_name",label:"Last Name"})]})]})}),(0,_.jsx)(c.Ay,{item:!0,xs:12,md:12,children:(0,_.jsxs)(u.A,{sx:{p:3},children:[(0,_.jsx)(m.A,{sx:{p:0,pb:3},title:"Mortgage Broker "}),(0,_.jsxs)(h.A,{sx:{display:"grid",columnGap:2,rowGap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"}},children:[(0,_.jsx)(I.o3,{name:"mo_first_name",label:"First Name"}),(0,_.jsx)(I.o3,{name:"mo_last_name",label:"Last Name"})]})]})}),(0,_.jsx)(c.Ay,{item:!0,xs:12,md:12,children:(0,_.jsxs)(u.A,{sx:{p:3},children:[(0,_.jsxs)(h.A,{sx:{display:"grid",columnGap:2,rowGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)"}},children:[(0,_.jsx)(I.SF,{name:"termsConditions",label:"I agree with the Terms and Conditions below"}),(0,_.jsx)(A.A,{variant:"body2",style:{background:"silver",padding:"1rem",borderRadius:"1rem"},children:$.termsNote})]}),(0,_.jsxs)(y.A,{justifyContent:"flex-end",flexDirection:"row",gap:1,sx:{mt:3},children:[(0,_.jsx)(p.A,{type:"button",variant:"outlined",onClick:()=>{n(-1)},children:"Back"}),(0,_.jsx)(p.A,{type:"submit",variant:"contained",loading:B,children:"Submit"})]})]})})]})]})})}},45180:(e,r,n)=>{n.d(r,{A:()=>g});var a=n(98587),s=n(58168),t=n(9950),o=n(2803),i=n(5747),d=n(82053),l=n(79859),p=n(7951),c=n(37665);function u(e){return(0,c.A)("MuiCardHeader",e)}const m=(0,n(44245).A)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var h=n(44414);const y=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],A=(0,p.Ay)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,r)=>(0,s.A)({["& .".concat(m.title)]:r.title,["& .".concat(m.subheader)]:r.subheader},r.root)})({display:"flex",alignItems:"center",padding:16}),x=(0,p.Ay)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,r)=>r.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),f=(0,p.Ay)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,r)=>r.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),E=(0,p.Ay)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,r)=>r.content})({flex:"1 1 auto"}),g=t.forwardRef((function(e,r){const n=(0,l.A)({props:e,name:"MuiCardHeader"}),{action:t,avatar:p,className:c,component:m="div",disableTypography:g=!1,subheader:j,subheaderTypographyProps:v,title:C,titleTypographyProps:S}=n,T=(0,a.A)(n,y),b=(0,s.A)({},n,{component:m,disableTypography:g}),O=(e=>{const{classes:r}=e;return(0,i.A)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},u,r)})(b);let I=C;null==I||I.type===d.A||g||(I=(0,h.jsx)(d.A,(0,s.A)({variant:p?"body2":"h5",className:O.title,component:"span",display:"block"},S,{children:I})));let N=j;return null==N||N.type===d.A||g||(N=(0,h.jsx)(d.A,(0,s.A)({variant:p?"body2":"body1",className:O.subheader,color:"text.secondary",component:"span",display:"block"},v,{children:N}))),(0,h.jsxs)(A,(0,s.A)({className:(0,o.A)(O.root,c),as:m,ref:r,ownerState:b},T,{children:[p&&(0,h.jsx)(x,{className:O.avatar,ownerState:b,children:p}),(0,h.jsxs)(E,{className:O.content,ownerState:b,children:[I,N]}),t&&(0,h.jsx)(f,{className:O.action,ownerState:b,children:t})]}))}))}}]);