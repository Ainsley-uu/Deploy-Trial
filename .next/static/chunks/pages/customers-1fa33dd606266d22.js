(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[525],{6086:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customers",function(){return t(4451)}])},4451:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return G}});var n=t(5893),s=t(7294),r=t(9008),i=t.n(r),d=t(7069),l=t(8330),c=t(3557),o=t(2952),h=t(8005),u=t(7357),g=t(5582),m=t(6447),Z=t(5861),x=t(3321),v=t(3219);let j=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],[a,t]=(0,s.useState)([]);(0,s.useEffect)(()=>{t([])},[e]);let n=(0,s.useCallback)(()=>{t([...e])},[e]),r=(0,s.useCallback)(e=>{t(a=>[...a,e])},[]),i=(0,s.useCallback)(()=>{t([])},[]),d=(0,s.useCallback)(e=>{t(a=>a.filter(a=>a!==e))},[]);return{handleDeselectAll:i,handleDeselectOne:d,handleSelectAll:n,handleSelectOne:r,selected:a}};var p=t(8334),b=t(5697),f=t.n(b),y=t(2912),A=t(6242),S=t(7906),C=t(3184),k=t(3816),P=t(8102),w=t(5071),D=t(295),T=t(9661),U=t(7171),O=t(2377);let _=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map(e=>e&&e[0].toUpperCase()).join("")},N=e=>{let{count:a=0,items:t=[],onDeselectAll:s,onDeselectOne:r,onPageChange:i=()=>{},onRowsPerPageChange:d,onSelectAll:l,onSelectOne:c,page:o=0,rowsPerPage:h=0,selected:g=[]}=e,x=g.length>0&&g.length<t.length,v=t.length>0&&g.length===t.length;return(0,n.jsxs)(A.Z,{children:[(0,n.jsx)(O.L,{children:(0,n.jsx)(u.Z,{sx:{minWidth:800},children:(0,n.jsxs)(S.Z,{children:[(0,n.jsx)(C.Z,{children:(0,n.jsxs)(k.Z,{children:[(0,n.jsx)(P.Z,{padding:"checkbox",children:(0,n.jsx)(w.Z,{checked:v,indeterminate:x,onChange:e=>{e.target.checked?null==l||l():null==s||s()}})}),(0,n.jsx)(P.Z,{children:"Name"}),(0,n.jsx)(P.Z,{children:"Email"}),(0,n.jsx)(P.Z,{children:"Location"}),(0,n.jsx)(P.Z,{children:"Phone"}),(0,n.jsx)(P.Z,{children:"Signed Up"})]})}),(0,n.jsx)(D.Z,{children:t.map(e=>{let a=g.includes(e.id),t=(0,y.Z)(e.createdAt,"dd/MM/yyyy");return(0,n.jsxs)(k.Z,{hover:!0,selected:a,children:[(0,n.jsx)(P.Z,{padding:"checkbox",children:(0,n.jsx)(w.Z,{checked:a,onChange:a=>{a.target.checked?null==c||c(e.id):null==r||r(e.id)}})}),(0,n.jsx)(P.Z,{children:(0,n.jsxs)(m.Z,{alignItems:"center",direction:"row",spacing:2,children:[(0,n.jsx)(T.Z,{src:e.avatar,children:_(e.name)}),(0,n.jsx)(Z.Z,{variant:"subtitle2",children:e.name})]})}),(0,n.jsx)(P.Z,{children:e.email}),(0,n.jsxs)(P.Z,{children:[e.address.city,", ",e.address.state,", ",e.address.country]}),(0,n.jsx)(P.Z,{children:e.phone}),(0,n.jsx)(P.Z,{children:t})]},e.id)})})]})})}),(0,n.jsx)(U.Z,{component:"div",count:a,onPageChange:i,onRowsPerPageChange:d,page:o,rowsPerPage:h,rowsPerPageOptions:[5,10,25]})]})};N.propTypes={count:f().number,items:f().array,onDeselectAll:f().func,onDeselectOne:f().func,onPageChange:f().func,onRowsPerPageChange:f().func,onSelectAll:f().func,onSelectOne:f().func,page:f().number,rowsPerPage:f().number,selected:f().array};var E=t(9396),I=t(7709),L=t(7109);let z=()=>(0,n.jsx)(A.Z,{sx:{p:2},children:(0,n.jsx)(I.Z,{defaultValue:"",fullWidth:!0,placeholder:"Search customer",startAdornment:(0,n.jsx)(L.Z,{position:"start",children:(0,n.jsx)(v.Z,{color:"action",fontSize:"small",children:(0,n.jsx)(E.Z,{})})}),sx:{maxWidth:500}})}),M=new Date,R=[{id:"5e887ac47eed253091be10cb",address:{city:"Cleveland",country:"USA",state:"Ohio",street:"2849 Fulton Street"},avatar:"/assets/avatars/avatar-carson-darrin.png",createdAt:(0,d.Z)((0,l.Z)(M,7),1).getTime(),email:"carson.darrin@devias.io",name:"Carson Darrin",phone:"304-428-3097"},{id:"5e887b209c28ac3dd97f6db5",address:{city:"Atlanta",country:"USA",state:"Georgia",street:"1865  Pleasant Hill Road"},avatar:"/assets/avatars/avatar-fran-perez.png",createdAt:(0,d.Z)((0,l.Z)(M,1),2).getTime(),email:"fran.perez@devias.io",name:"Fran Perez",phone:"712-351-5711"},{id:"5e887b7602bdbc4dbb234b27",address:{city:"North Canton",country:"USA",state:"Ohio",street:"4894  Lakeland Park Drive"},avatar:"/assets/avatars/avatar-jie-yan-song.png",createdAt:(0,d.Z)((0,l.Z)(M,4),2).getTime(),email:"jie.yan.song@devias.io",name:"Jie Yan Song",phone:"770-635-2682"},{id:"5e86809283e28b96d2d38537",address:{city:"Madrid",country:"Spain",name:"Anika Visser",street:"4158  Hedge Street"},avatar:"/assets/avatars/avatar-anika-visser.png",createdAt:(0,d.Z)((0,l.Z)(M,11),2).getTime(),email:"anika.visser@devias.io",name:"Anika Visser",phone:"908-691-3242"},{id:"5e86805e2bafd54f66cc95c3",address:{city:"San Diego",country:"USA",state:"California",street:"75247"},avatar:"/assets/avatars/avatar-miron-vitold.png",createdAt:(0,d.Z)((0,l.Z)(M,7),3).getTime(),email:"miron.vitold@devias.io",name:"Miron Vitold",phone:"972-333-4106"},{id:"5e887a1fbefd7938eea9c981",address:{city:"Berkeley",country:"USA",state:"California",street:"317 Angus Road"},avatar:"/assets/avatars/avatar-penjani-inyene.png",createdAt:(0,d.Z)((0,l.Z)(M,5),4).getTime(),email:"penjani.inyene@devias.io",name:"Penjani Inyene",phone:"858-602-3409"},{id:"5e887d0b3d090c1b8f162003",address:{city:"Carson City",country:"USA",state:"Nevada",street:"2188  Armbrester Drive"},avatar:"/assets/avatars/avatar-omar-darboe.png",createdAt:(0,d.Z)((0,l.Z)(M,15),4).getTime(),email:"omar.darobe@devias.io",name:"Omar Darobe",phone:"415-907-2647"},{id:"5e88792be2d4cfb4bf0971d9",address:{city:"Los Angeles",country:"USA",state:"California",street:"1798  Hickory Ridge Drive"},avatar:"/assets/avatars/avatar-siegbert-gottfried.png",createdAt:(0,d.Z)((0,l.Z)(M,2),5).getTime(),email:"siegbert.gottfried@devias.io",name:"Siegbert Gottfried",phone:"702-661-1654"},{id:"5e8877da9a65442b11551975",address:{city:"Murray",country:"USA",state:"Utah",street:"3934  Wildrose Lane"},avatar:"/assets/avatars/avatar-iulia-albu.png",createdAt:(0,d.Z)((0,l.Z)(M,8),6).getTime(),email:"iulia.albu@devias.io",name:"Iulia Albu",phone:"313-812-8947"},{id:"5e8680e60cba5019c5ca6fda",address:{city:"Salt Lake City",country:"USA",state:"Utah",street:"368 Lamberts Branch Road"},avatar:"/assets/avatars/avatar-nasimiyu-danai.png",createdAt:(0,d.Z)((0,l.Z)(M,1),9).getTime(),email:"nasimiyu.danai@devias.io",name:"Nasimiyu Danai",phone:"801-301-7894"}],W=(e,a)=>(0,s.useMemo)(()=>R.slice(e*a,e*a+a),[e,a]),V=e=>(0,s.useMemo)(()=>e.map(e=>e.id),[e]),F=()=>{let[e,a]=(0,s.useState)(0),[t,r]=(0,s.useState)(5),d=W(e,t),l=V(d),p=j(l),b=(0,s.useCallback)((e,t)=>{a(t)},[]),f=(0,s.useCallback)(e=>{r(e.target.value)},[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i(),{children:(0,n.jsx)("title",{children:"Customers | Devias Kit"})}),(0,n.jsx)(u.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,n.jsx)(g.Z,{maxWidth:"xl",children:(0,n.jsxs)(m.Z,{spacing:3,children:[(0,n.jsxs)(m.Z,{direction:"row",justifyContent:"space-between",spacing:4,children:[(0,n.jsxs)(m.Z,{spacing:1,children:[(0,n.jsx)(Z.Z,{variant:"h4",children:"Customers"}),(0,n.jsxs)(m.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,n.jsx)(x.Z,{color:"inherit",startIcon:(0,n.jsx)(v.Z,{fontSize:"small",children:(0,n.jsx)(o.Z,{})}),children:"Import"}),(0,n.jsx)(x.Z,{color:"inherit",startIcon:(0,n.jsx)(v.Z,{fontSize:"small",children:(0,n.jsx)(c.Z,{})}),children:"Export"})]})]}),(0,n.jsx)("div",{children:(0,n.jsx)(x.Z,{startIcon:(0,n.jsx)(v.Z,{fontSize:"small",children:(0,n.jsx)(h.Z,{})}),variant:"contained",children:"Add"})})]}),(0,n.jsx)(z,{}),(0,n.jsx)(N,{count:R.length,items:d,onDeselectAll:p.handleDeselectAll,onDeselectOne:p.handleDeselectOne,onPageChange:b,onRowsPerPageChange:f,onSelectAll:p.handleSelectAll,onSelectOne:p.handleSelectOne,page:e,rowsPerPage:t,selected:p.selected})]})})})]})};F.getLayout=e=>(0,n.jsx)(p.A,{children:e});var G=F}},function(e){e.O(0,[394,904,709,226,703,290,693,334,774,888,179],function(){return e(e.s=6086)}),_N_E=e.O()}]);