"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[7766],{18456:function(e,t,i){i.d(t,{Z:function(){return Z}});var r=i(1413),n=i(45987),s=i(26769),a=i.n(s),l=i(64554),o=i(20890),d=i(23060),x=i(43504),c=i(93517),h=i(80184),m=["links","activeLast"];function p(e){var t=e.links,i=e.activeLast,s=void 0!==i&&i,a=(0,n.Z)(e,m),d=t[t.length-1].name,x=t.map((function(e){return(0,h.jsx)(u,{link:e},e.name)})),p=t.map((function(e){return(0,h.jsx)("div",{children:e.name!==d?(0,h.jsx)(u,{link:e}):(0,h.jsx)(o.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:d})},e.name)}));return(0,h.jsx)(c.Z,(0,r.Z)((0,r.Z)({separator:(0,h.jsx)(l.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},a),{},{children:s?x:p}))}function u(e){var t=e.link,i=t.href,r=t.name,n=t.icon;return(0,h.jsxs)(d.Z,{variant:"body2",component:x.rU,to:i||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[n&&(0,h.jsx)(l.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:n}),r]},r)}var v=["links","action","heading","moreLink","sx"];function Z(e){var t=e.links,i=e.action,s=e.heading,x=e.moreLink,c=void 0===x?[]:x,m=e.sx,u=(0,n.Z)(e,v);return(0,h.jsxs)(l.Z,{sx:(0,r.Z)({mb:5},m),children:[(0,h.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,h.jsxs)(l.Z,{sx:{flexGrow:1},children:[(0,h.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:s}),(0,h.jsx)(p,(0,r.Z)({links:t},u))]}),i&&(0,h.jsx)(l.Z,{sx:{flexShrink:0},children:i})]}),(0,h.jsx)(l.Z,{sx:{mt:2},children:a()(c)?(0,h.jsx)(d.Z,{href:c,target:"_blank",rel:"noopener",variant:"body2",children:c}):c.map((function(e){return(0,h.jsx)(d.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},97766:function(e,t,i){i.r(t),i.d(t,{default:function(){return _}});var r=i(26445),n=i(64554),s=i(38072),a=i(85703),l=i(55026),o=i(25212),d=i(18456),x=i(1413),c=i(47630),h=i(57621),m=i(93044),p=i(20890),u=i(67414),v=i(94721),Z=i(63402),j=i(7870),f=i(5977),b=i(39330),g=i(37835),k=i(80184),y=(0,c.ZP)("div")((function(e){var t=e.theme;return(0,x.Z)((0,x.Z)({},(0,Z.Z)().bgBlur({blur:2,color:t.palette.primary.darker})),{},{top:0,zIndex:8,content:"''",width:"100%",height:"100%",position:"absolute"})}));function w(e){var t=e.user,i=t.name,r=t.cover,s=t.position,a=t.follower,l=t.totalPost,o=t.avatarUrl,d=t.following;return(0,k.jsxs)(h.Z,{sx:{textAlign:"center"},children:[(0,k.jsxs)(n.Z,{sx:{position:"relative"},children:[(0,k.jsx)(g.Z,{src:"https://minimal-assets-api.vercel.app/assets/icons/shape-avatar.svg",sx:{width:144,height:62,zIndex:10,left:0,right:0,bottom:-26,mx:"auto",position:"absolute",color:"background.paper"}}),(0,k.jsx)(m.Z,{alt:i,src:o,sx:{width:64,height:64,zIndex:11,left:0,right:0,bottom:-32,mx:"auto",position:"absolute"}}),(0,k.jsx)(y,{}),(0,k.jsx)(f.Z,{src:r,alt:r,ratio:"16/9"})]}),(0,k.jsx)(p.Z,{variant:"subtitle1",sx:{mt:6},children:i}),(0,k.jsx)(p.Z,{variant:"body2",sx:{color:"text.secondary"},children:s}),(0,k.jsx)(u.Z,{alignItems:"center",children:(0,k.jsx)(b.Z,{initialColor:!0,sx:{my:2.5}})}),(0,k.jsx)(v.Z,{sx:{borderStyle:"dashed"}}),(0,k.jsxs)(n.Z,{sx:{py:3,display:"grid",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,k.jsxs)("div",{children:[(0,k.jsx)(p.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Follower"}),(0,k.jsx)(p.Z,{variant:"subtitle1",children:(0,j.v1)(a)})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)(p.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Following"}),(0,k.jsx)(p.Z,{variant:"subtitle1",children:(0,j.v1)(d)})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)(p.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Total Post"}),(0,k.jsx)(p.Z,{variant:"subtitle1",children:(0,j.v1)(l)})]})]})]})}function _(){var e=(0,a.Z)().themeStretch;return(0,k.jsx)(o.Z,{title:"User: Cards",children:(0,k.jsxs)(r.Z,{maxWidth:!e&&"lg",children:[(0,k.jsx)(d.Z,{heading:"User Cards",links:[{name:"Dashboard",href:s.vB.root},{name:"User",href:s.vB.user.root},{name:"Cards"}]}),(0,k.jsx)(n.Z,{sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"}},children:l.oe.map((function(e){return(0,k.jsx)(w,{user:e},e.id)}))})]})})}}}]);
//# sourceMappingURL=7766.742bb9a6.chunk.js.map