import{u as _,D as p}from"./index.072ae27d.js";import u from"./LoginComponent.e3415106.js";import{d,k as t,b as m,e as l,r as v,o as f,c as g,i as L}from"./vendor.68c261ce.js";import"./useAppInfo.15504d58.js";var r=d({name:"Login",components:{LoginComponent:u},setup(){const o=t(!1),n=t(!1),e=t(!1);function s(){e.value=!e.value}const a=_(),i=m(()=>a.state.device===p.MOBILE);return l(()=>{setTimeout(()=>o.value=!0,500),setTimeout(()=>{n.value=!0},6200)}),{isMobile:i,showAnimation:o,showArrow:n,showLoginPage:e,onNextLogin:s}}});const x=L(),y=x((o,n,e,s,a,i)=>{const c=v("LoginComponent");return f(),g(c)});r.render=y;r.__scopeId="data-v-011a625c";export{r as default};