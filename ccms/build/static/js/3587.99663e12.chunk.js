"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[3587],{73587:function(e,n,r){r.r(n),r.d(n,{default:function(){return N}});var s=r(43504),i=r(26445),a=r(64554),t=r(36151),o=r(20890),l=r(47630),d=r(52989),c=r(38072),u=r(10486),p=r(25212),h=r(15861),m=r(29439),f=r(64687),x=r.n(f),w=r(72791),Z=r(77942),j=r(16871),g=r(98246),v=r(61265),k=r(61134),y=r(67414),b=r(63466),P=r(13400),_=r(59860),C=r(47646),E=r(17834),S=r(80184);function q(){var e=(0,E.Z)().resetPassword,n=(0,j.s0)(),r=(0,j.TH)().state.varificationCode,s=(0,g.Ds)().enqueueSnackbar,i=(0,w.useState)(!1),a=(0,m.Z)(i,2),t=a[0],o=a[1],l=(0,w.useState)(!1),d=(0,m.Z)(l,2),p=d[0],f=d[1],q=Z.Ry().shape({password:Z.Z_().required("New Password is required"),confirm_password:Z.Z_().oneOf([Z.iH("password"),null],"Passwords don't match!").required("Confirm New Password is required")}),I=(0,k.cI)({resolver:(0,v.X)(q),defaultValues:{token:r}}),N=I.handleSubmit,V=I.formState.isSubmitting,z=function(){var r=(0,h.Z)(x().mark((function r(i){var a,t;return x().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e(i);case 3:a=r.sent,t=a.data,s("Password Change Successfully!"),"admin"===t.role?n(c.EE.adminLogin,{replace:!0}):"employee"===t.role?n(c.EE.employeeLogin,{replace:!0}):n(c.EE.login,{replace:!0}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),console.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}();return(0,S.jsx)(C.RV,{methods:I,onSubmit:N(z),children:(0,S.jsxs)(y.Z,{spacing:3,children:[(0,S.jsx)(C.au,{name:"password",label:"New Password",type:t?"text":"password",InputProps:{endAdornment:(0,S.jsx)(b.Z,{position:"end",children:(0,S.jsx)(P.Z,{onClick:function(){return o(!t)},edge:"end",children:(0,S.jsx)(u.Z,{icon:t?"eva:eye-fill":"eva:eye-off-fill"})})})}}),(0,S.jsx)(C.au,{name:"confirm_password",label:"Confirm New Password",type:t?"text":"password",InputProps:{endAdornment:(0,S.jsx)(b.Z,{position:"end",children:(0,S.jsx)(P.Z,{onClick:function(){return f(!p)},edge:"end",children:(0,S.jsx)(u.Z,{icon:p?"eva:eye-fill":"eva:eye-off-fill"})})})}}),(0,S.jsx)(_.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:V,children:"Change Password"})]})})}var I=(0,l.ZP)("div")((function(e){return{display:"flex",height:"100%",alignItems:"center",padding:e.theme.spacing(12,0)}}));function N(){return(0,S.jsx)(p.Z,{title:"Verify",sx:{height:1},children:(0,S.jsxs)(I,{children:[(0,S.jsx)(d.Z,{}),(0,S.jsx)(i.Z,{children:(0,S.jsxs)(a.Z,{sx:{maxWidth:480,mx:"auto"},children:[(0,S.jsx)(t.Z,{size:"small",component:s.rU,to:c.EE.resetPassword,startIcon:(0,S.jsx)(u.Z,{icon:"eva:arrow-ios-back-fill",width:20,height:20}),sx:{mb:3},children:"Back"}),(0,S.jsx)(o.Z,{variant:"h3",paragraph:!0,children:"Please enter new password!"}),(0,S.jsx)(a.Z,{sx:{mt:5,mb:3},children:(0,S.jsx)(q,{})})]})})]})})}}}]);
//# sourceMappingURL=3587.99663e12.chunk.js.map