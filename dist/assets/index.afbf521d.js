import{u as _,D as p}from"./index.57a2f3c1.js";import u from"./LoginComponent.8875f25f.js";import{d as m,k as t,b as d,e as f,r as l,o as v,c as g,i as L}from"./vendor.68c261ce.js";import"./useAppInfo.e4e25421.js";var r=m({name:"Login",components:{LoginComponent:u},setup(){const o=t(!1),n=t(!1),e=t(!1);function s(){e.value=!e.value}const a=_(),i=d(()=>a.state.device===p.MOBILE);return f(()=>{setTimeout(()=>o.value=!0,500),setTimeout(()=>{n.value=!0},6200)}),{isMobile:i,showAnimation:o,showArrow:n,showLoginPage:e,onNextLogin:s}}});const x=L(),y=x((o,n,e,s,a,i)=>{const c=l("LoginComponent");return v(),g(c)});r.render=y;r.__scopeId="data-v-011a625c";export{r as default};
