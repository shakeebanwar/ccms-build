"use strict";(self.webpackChunkccms=self.webpackChunkccms||[]).push([[9268,6887],{10608:(n,e,t)=>{t.d(e,{X:()=>a});const a=["active","draft","completed","cancelled","on hold","placed","new"]},63358:(n,e,t)=>{t.d(e,{A:()=>h});var a=t(56801),r=t.n(a),i=t(6368),s=t(82053),o=t(22707),c=t(26689),l=t(52432),d=t(44414);function f(n){let{links:e,activeLast:t=!1,...a}=n;const r=e[e.length-1].name,o=e.map((n=>(0,d.jsx)(u,{link:n},n.name))),c=e.map((n=>(0,d.jsx)("div",{children:n.name!==r?(0,d.jsx)(u,{link:n}):(0,d.jsx)(s.A,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:r})},n.name)));return(0,d.jsx)(l.A,{separator:(0,d.jsx)(i.A,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}}),...a,children:t?o:c})}function u(n){let{link:e}=n;const{href:t,name:a,icon:r}=e;return(0,d.jsxs)(o.A,{variant:"body2",component:c.N_,to:t||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[r&&(0,d.jsx)(i.A,{sx:{mr:1,"& svg":{width:20,height:20}},children:r}),a]},a)}function h(n){let{links:e,action:t,heading:a,moreLink:c=[],sx:l,...u}=n;return(0,d.jsxs)(i.A,{sx:{mb:5,...l},children:[(0,d.jsxs)(i.A,{sx:{display:"flex",alignItems:"center"},children:[(0,d.jsxs)(i.A,{sx:{flexGrow:1},children:[(0,d.jsx)(s.A,{variant:"h4",gutterBottom:!0,children:a}),(0,d.jsx)(f,{links:e,...u})]}),t&&(0,d.jsx)(i.A,{sx:{flexShrink:0},children:t})]}),(0,d.jsx)(i.A,{sx:{mt:2},children:r()(c)?(0,d.jsx)(o.A,{href:c,target:"_blank",rel:"noopener",variant:"body2",children:c}):c.map((n=>(0,d.jsx)(o.A,{noWrap:!0,href:n,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:n},n)))})]})}},34437:(n,e,t)=>{t.d(e,{j5:()=>o,kH:()=>c,ts:()=>i,uK:()=>s});var a=t(43974),r=t(1369);function i(n){return(0,a.A)(new Date(n),"dd MMMM yyyy")}function s(n){return(0,a.A)(new Date(n),"dd MMM yyyy HH:mm")}function o(n){return(0,a.A)(new Date(n),"dd/MM/yyyy hh:mm p")}function c(n){return(0,r.A)(new Date(n),{addSuffix:!0})}},12521:(n,e,t)=>{t.d(e,{A:()=>r});var a=t(64388);function r(n){return(0,a.A)({},n)}},1369:(n,e,t)=>{t.d(e,{A:()=>x});var a=t(27476),r=t(62588),i=t(94369),s=t(43298),o=t(98889),c=t(12521),l=t(20053),d=t(78397),f=1440,u=2520,h=43200,m=86400;function x(n,e){return(0,d.A)(1,arguments),function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,d.A)(2,arguments);var x=t.locale||s.A;if(!x.formatDistance)throw new RangeError("locale must contain formatDistance property");var A=(0,a.A)(n,e);if(isNaN(A))throw new RangeError("Invalid time value");var v,p,D=(0,c.A)(t);D.addSuffix=Boolean(t.addSuffix),D.comparison=A,A>0?(v=(0,o.A)(e),p=(0,o.A)(n)):(v=(0,o.A)(n),p=(0,o.A)(e));var y,M=(0,i.A)(p,v),w=((0,l.A)(p)-(0,l.A)(v))/1e3,b=Math.round((M-w)/60);if(b<2)return t.includeSeconds?M<5?x.formatDistance("lessThanXSeconds",5,D):M<10?x.formatDistance("lessThanXSeconds",10,D):M<20?x.formatDistance("lessThanXSeconds",20,D):M<40?x.formatDistance("halfAMinute",null,D):M<60?x.formatDistance("lessThanXMinutes",1,D):x.formatDistance("xMinutes",1,D):0===b?x.formatDistance("lessThanXMinutes",1,D):x.formatDistance("xMinutes",b,D);if(b<45)return x.formatDistance("xMinutes",b,D);if(b<90)return x.formatDistance("aboutXHours",1,D);if(b<f){var j=Math.round(b/60);return x.formatDistance("aboutXHours",j,D)}if(b<u)return x.formatDistance("xDays",1,D);if(b<h){var g=Math.round(b/f);return x.formatDistance("xDays",g,D)}if(b<m)return y=Math.round(b/h),x.formatDistance("aboutXMonths",y,D);if((y=(0,r.A)(p,v))<12){var k=Math.round(b/h);return x.formatDistance("xMonths",k,D)}var X=y%12,S=Math.floor(y/12);return X<3?x.formatDistance("aboutXYears",S,D):X<9?x.formatDistance("overXYears",S,D):x.formatDistance("almostXYears",S+1,D)}(n,Date.now(),e)}}}]);