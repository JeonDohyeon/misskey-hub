import{_ as $,f as w,u as _e,q as he,g as x,s as be,v as p,r as K,o as s,m as y,w as z,b as M,h as a,c as b,t as S,n as N,p as L,x as W,y as Se,C as Ne,z as q,A as Q,B as ue,D as B,E as G,d as X,F as Y,G as Ce,H as Te,I as Oe,T as Re,j as T,J,a as k,l as V,K as j,L as O,M as P,N as ce,O as fe,P as ge,Q as De,R as Ee,e as Pe,k as me,S as ke,U as ze,V as He,W as Ae,X as We}from"./app.3fa41763.js";const Ge=w({__name:"NavbarBrand",setup(r){const o=_e(),e=he(),n=x(),t=be(),u=p(()=>n.value.home||o.value),_=p(()=>e.value.title),f=p(()=>t.value&&n.value.logoDark!==void 0?n.value.logoDark:n.value.logo),h=()=>{if(!f.value)return null;const l=W("img",{class:"logo",src:Se(f.value),alt:_.value});return n.value.logoDark===void 0?l:W(Ne,()=>l)};return(l,d)=>{const i=K("RouterLink");return s(),y(i,{to:a(u)},{default:z(()=>[M(h),a(_)?(s(),b("span",{key:0,class:N(["site-name",{"can-hide":a(f)}])},S(a(_)),3)):L("",!0)]),_:1},8,["to"])}}});var Ve=$(Ge,[["__file","NavbarBrand.vue"]]),D={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},je=Object.defineProperty,Fe=Object.defineProperties,Ke=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,ve=(r,o,e)=>o in r?je(r,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[o]=e,U=(r,o)=>{for(var e in o||(o={}))ye.call(o,e)&&ve(r,e,o[e]);if(F)for(var e of F(o))we.call(o,e)&&ve(r,e,o[e]);return r},de=(r,o)=>Fe(r,Ke(o)),qe=(r,o)=>{var e={};for(var n in r)ye.call(r,n)&&o.indexOf(n)<0&&(e[n]=r[n]);if(r!=null&&F)for(var n of F(r))o.indexOf(n)<0&&we.call(r,n)&&(e[n]=r[n]);return e};const R=(r,o,e)=>(n,{attrs:t,slots:u})=>{var _=n,{size:f,color:h,stroke:l}=_,d=qe(_,["size","color","stroke"]);return W("svg",U(de(U(de(U({},D),{width:f||D.width,height:f||D.height,stroke:h||D.stroke,strokeWidth:l||D["stroke-width"]}),t),{class:["tabler-icon",`tabler-icon-${r}`,(t==null?void 0:t.class)||""]}),d),[...e.map(i=>W(...i)),...u.default?[u.default()]:[]])};var Ue=R("brand-bitbucket","IconBrandBitbucket",[["path",{d:"M3.648 4a0.64 .64 0 0 0 -.64 .744l3.14 14.528c.07 .417 .43 .724 .852 .728h10a0.644 .644 0 0 0 .642 -.539l3.35 -14.71a0.641 .641 0 0 0 -.64 -.744l-16.704 -.007z",key:"svg-0"}],["path",{d:"M14 15h-4l-1 -6h6z",key:"svg-1"}]]),Xe=R("brand-git","IconBrandGit",[["path",{d:"M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M12 15v-6",key:"svg-3"}],["path",{d:"M15 11l-2 -2",key:"svg-4"}],["path",{d:"M11 7l-1.9 -1.9",key:"svg-5"}],["path",{d:"M10.5 20.4l-6.9 -6.9c-.781 -.781 -.781 -2.219 0 -3l6.9 -6.9c.781 -.781 2.219 -.781 3 0l6.9 6.9c.781 .781 .781 2.219 0 3l-6.9 6.9c-.781 .781 -2.219 .781 -3 0z",key:"svg-6"}]]),Je=R("brand-github","IconBrandGithub",[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]]),Qe=R("brand-gitlab","IconBrandGitlab",[["path",{d:"M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z",key:"svg-0"}]]),Ye=R("external-link","IconExternalLink",[["path",{d:"M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5",key:"svg-0"}],["path",{d:"M10 14l10 -10",key:"svg-1"}],["path",{d:"M15 4l5 0l0 5",key:"svg-2"}]]),Ze=R("language-hiragana","IconLanguageHiragana",[["path",{d:"M4 5h7",key:"svg-0"}],["path",{d:"M7 4c0 4.846 0 7 .5 8",key:"svg-1"}],["path",{d:"M10 8.5c0 2.286 -2 4.5 -3.5 4.5s-2.5 -1.135 -2.5 -2c0 -2 1 -3 3 -3s5 .57 5 2.857c0 1.524 -.667 2.571 -2 3.143",key:"svg-2"}],["path",{d:"M12 20l4 -9l4 9",key:"svg-3"}],["path",{d:"M19.1 18h-6.2",key:"svg-4"}]]);const et="_icon_16239_1";var tt={icon:et};const at=["href","rel","target","aria-label"],nt=w({inheritAttrs:!1}),rt=w({...nt,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(r){const o=r,e=q(),n=Oe(),{item:t}=Q(o),u=p(()=>Y(t.value.link)),_=p(()=>Ce(t.value.link)||Te(t.value.link)),f=p(()=>{if(!_.value){if(t.value.target)return t.value.target;if(u.value)return"_blank"}}),h=p(()=>f.value==="_blank"),l=p(()=>!u.value&&!_.value&&!h.value),d=p(()=>{if(!_.value){if(t.value.rel)return t.value.rel;if(h.value)return"noopener noreferrer"}}),i=p(()=>t.value.ariaLabel||t.value.text),c=p(()=>{const m=Object.keys(n.value.locales);return m.length?!m.some(I=>I===t.value.link):t.value.link!=="/"}),v=p(()=>c.value?e.path.startsWith(t.value.link):!1),g=p(()=>l.value?t.value.activeMatch?new RegExp(t.value.activeMatch).test(e.path):v.value:!1);return(m,I)=>{const C=K("RouterLink");return a(l)?(s(),y(C,ue({key:0,class:{"router-link-active":a(g)},to:a(t).link,"aria-label":a(i)},m.$attrs),{default:z(()=>[B(m.$slots,"before"),a(t).icon?(s(),y(G(a(t).icon),{key:0,class:"tabler-icon _icon_middle"})):L("",!0),X(S(a(t).text),1),B(m.$slots,"after")]),_:3},16,["class","to","aria-label"])):(s(),b("a",ue({key:1,class:"external-link",href:a(t).link,rel:a(d),target:a(f),"aria-label":a(i)},m.$attrs),[B(m.$slots,"before"),a(t).icon?(s(),y(G(a(t).icon),{key:0,class:"tabler-icon _icon_middle"})):L("",!0),X(S(a(t).text)+" ",1),a(h)&&!a(t).noExternalIcon?(s(),y(a(Ye),{key:1,class:N(["tabler-icon _icon_middle",m.$style.icon])},null,8,["class"])):L("",!0),B(m.$slots,"after")],16,at))}}}),ot={$style:tt};var E=$(rt,[["__cssModules",ot],["__file","AutoLink.vue"]]);const lt=w({__name:"DropdownTransition",setup(r){const o=n=>{n.style.height=n.scrollHeight+"px"},e=n=>{n.style.height=""};return(n,t)=>(s(),y(Re,{name:"dropdown",onEnter:o,onAfterEnter:e,onBeforeLeave:o},{default:z(()=>[B(n.$slots,"default")]),_:3}))}});var Le=$(lt,[["__file","DropdownTransition.vue"]]);const st=["onTouchstart","onMouseover"],it=["aria-label"],ut={class:"title"},ct=k("span",{class:"arrow down"},null,-1),vt=["aria-label"],dt={class:"title"},pt={class:"navbar-dropdown-subtitle"},_t={key:1},ht={class:"navbar-dropdown-subitem-wrapper"},bt=w({__name:"NavbarDropdown",props:{item:null},setup(r){const o=r,{item:e}=Q(o),n=p(()=>e.value.ariaLabel||e.value.text),t=T(!1),u=T(),_=T(),f=q(),h=async()=>{if(await fe(),!_.value||!u.value)return;const i=_.value.getBoundingClientRect();let c=i.left;const v=i.top+_.value.offsetHeight;let g=u.value.scrollWidth;g>window.innerWidth?(g=window.innerWidth,c=0):(c+g-window.scrollX>window.innerWidth&&(c=window.innerWidth-g+window.scrollX),c<0&&(c=0)),u.value.style.top=`${v}px`,u.value.style.left=`${c}px`,g?u.value.style.width=`${g}px`:u.value.style.width=""};J(t,i=>{i&&h()}),J(()=>f.path,()=>{t.value=!1});const l=i=>{i.detail===0?t.value=!t.value:t.value=!1},d=(i,c)=>c[c.length-1]===i;return(i,c)=>(s(),b("div",{class:N(["navbar-dropdown-wrapper",{open:t.value}]),ref_key:"rootEl",ref:_,onTouchstart:ce(h,["self"]),onMouseover:ce(h,["self"])},[k("button",{class:"navbar-dropdown-title",type:"button","aria-label":a(n),onClick:l,onTouchstart:h,onMouseover:h},[a(e).icon?(s(),y(G(a(e).icon),{key:0,class:"tabler-icon _icon_middle"})):L("",!0),k("span",ut,S(a(e).text),1),ct],40,it),k("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":a(n),onClick:c[0]||(c[0]=v=>t.value=!t.value)},[a(e).icon?(s(),y(G(a(e).icon),{key:0,class:"tabler-icon _icon_middle"})):L("",!0),k("span",dt,S(a(e).text),1),k("span",{class:N(["arrow",t.value?"down":"right"])},null,2)],8,vt),M(Le,null,{default:z(()=>[V(k("ul",{class:"navbar-dropdown",ref_key:"dropdownEl",ref:u},[(s(!0),b(O,null,P(a(e).children,v=>(s(),b("li",{key:v.text,class:"navbar-dropdown-item"},[v.children?(s(),b(O,{key:0},[k("h4",pt,[v.link?(s(),y(E,{key:0,item:v,onFocusout:g=>d(v,a(e).children)&&v.children.length===0&&(t.value=!1)},null,8,["item","onFocusout"])):(s(),b("span",_t,S(v.text),1))]),k("ul",ht,[(s(!0),b(O,null,P(v.children,g=>(s(),b("li",{key:g.link,class:"navbar-dropdown-subitem"},[M(E,{item:g,onFocusout:m=>d(g,v.children)&&d(v,a(e).children)&&(t.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(s(),y(E,{key:1,item:v,onFocusout:g=>d(v,a(e).children)&&(t.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[j,t.value]])]),_:1})],42,st))}});var ft=$(bt,[["__file","NavbarDropdown.vue"]]);const pe=r=>decodeURI(r).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),gt=(r,o)=>{if(o.hash===r)return!0;const e=pe(o.path),n=pe(r);return e===n},$e=(r,o)=>r.link&&gt(r.link,o)?!0:r.children?r.children.some(e=>$e(e,o)):!1,mt=r=>!Y(r)||/github\.com/.test(r)?"GitHub":/bitbucket\.org/.test(r)?"Bitbucket":/gitlab\.com/.test(r)?"GitLab":/gitee\.com/.test(r)?"Gitee":null,kt={key:0,class:"navbar-items"},yt=w({__name:"NavbarItems",setup(r){const o=()=>{const l=ge(),d=_e(),i=he(),c=x();return p(()=>{var Z;const v=Object.keys(i.value.locales);if(v.length<2)return[];const g=l.currentRoute.value.path,m=l.currentRoute.value.fullPath,I=l.currentRoute.value.hash;return[{icon:Ze,ariaLabel:(Z=c.value.selectLanguageAriaLabel)!=null?Z:"unknown language",children:v.map(H=>{var ae,ne,re,oe,le,se;const Be=(ne=(ae=i.value.locales)==null?void 0:ae[H])!=null?ne:{},ee=(oe=(re=c.value.locales)==null?void 0:re[H])!=null?oe:{},te=`${Be.lang}`,Ie=(le=ee.selectLanguageName)!=null?le:te;let A;if(te===i.value.lang)A=m;else{const ie=g.replace(d.value,H);l.getRoutes().some(xe=>xe.path===ie)?A=`${ie}${I}`:A=(se=ee.home)!=null?se:H}return{text:Ie,link:A}})}]})},e=()=>{const l=x(),d=p(()=>l.value.repo),i=p(()=>d.value?mt(d.value):null),c=p(()=>d.value&&!Y(d.value)?`https://github.com/${d.value}`:d.value),v=p(()=>c.value?l.value.repoLabel?l.value.repoLabel:i.value===null?"Source":i.value:null);return p(()=>{if(!c.value)return[];switch(v.value){case"GitHub":return[{icon:Je,link:c.value,ariaLabel:"GitHub repository",noExternalIcon:!0}];case"GitLab":return[{icon:Qe,link:c.value,ariaLabel:"GitLab repository",noExternalIcon:!0}];case"Bitbucket":return[{icon:Ue,link:c.value,ariaLabel:"Bitbucket repository",noExternalIcon:!0}];default:return[{icon:Xe,link:c.value,ariaLabel:"Repository",noExternalIcon:!0}]}})},n=l=>De(l)?Ee(l):l.children?{...l,children:l.children.map(n)}:l,u=(()=>{const l=x();return p(()=>(l.value.navbar||[]).map(n))})(),_=o(),f=e(),h=p(()=>[...u.value,..._.value,...f.value]);return(l,d)=>a(h).length?(s(),b("nav",kt,[(s(!0),b(O,null,P(a(h),i=>(s(),b("div",{key:i.text,class:"navbar-item"},["children"in i?(s(),y(ft,{key:0,item:i},null,8,["item"])):(s(),y(E,{key:1,item:i},null,8,["item"]))]))),128))])):L("",!0)}});var Me=$(yt,[["__file","NavbarItems.vue"]]);const wt=["title"],Lt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},$t=Pe('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Mt=[$t],Bt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},It=k("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),xt=[It],St=w({__name:"ToggleColorModeButton",setup(r){const o=x(),e=be(),n=()=>{e.value=!e.value};return(t,u)=>(s(),b("button",{class:"toggle-color-mode-button",title:a(o).toggleColorMode,onClick:n},[V((s(),b("svg",Lt,Mt,512)),[[j,!a(e)]]),V((s(),b("svg",Bt,xt,512)),[[j,a(e)]])],8,wt))}});var Nt=$(St,[["__file","ToggleColorModeButton.vue"]]);const Ct=["title"],Tt=k("div",{class:"icon","aria-hidden":"true"},[k("span"),k("span"),k("span")],-1),Ot=[Tt],Rt=w({__name:"ToggleSidebarButton",emits:["toggle"],setup(r,{emit:o}){const e=x();return(n,t)=>(s(),b("div",{class:"toggle-sidebar-button",title:a(e).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:t[0]||(t[0]=u=>o("toggle"))},Ot,8,Ct))}});var Dt=$(Rt,[["__file","ToggleSidebarButton.vue"]]);const Et=w({__name:"Navbar",emits:["toggle-sidebar"],setup(r,{emit:o}){const e=x(),n=T(null),t=T(null),u=T(0),_=p(()=>u.value?{maxWidth:u.value+"px"}:{});let f;me(()=>{const d=h(n.value,"paddingLeft")+h(n.value,"paddingRight"),i=()=>{var c;window.innerWidth<=719?u.value=0:u.value=n.value.offsetWidth-d-(((c=t.value)==null?void 0:c.offsetWidth)||0)};i(),window.addEventListener("resize",i,!1),window.addEventListener("orientationchange",i,!1),f=new ResizeObserver((c,v)=>{document.documentElement.style.setProperty("--globalHeaderHeight",n.value.offsetHeight+"px")}),f.observe(n.value)}),ke(()=>{f.disconnect()});function h(l,d){var v,g,m;const i=(m=(g=(v=l==null?void 0:l.ownerDocument)==null?void 0:v.defaultView)==null?void 0:g.getComputedStyle(l,null))==null?void 0:m[d],c=Number.parseInt(i,10);return Number.isNaN(c)?0:c}return(l,d)=>{const i=K("NavbarSearch");return s(),b("header",{ref_key:"navbar",ref:n,class:"navbar"},[M(Dt,{onToggle:d[0]||(d[0]=c=>o("toggle-sidebar"))}),k("span",{ref_key:"navbarBrand",ref:t},[M(Ve)],512),k("div",{class:"navbar-items-wrapper",style:ze(a(_))},[B(l.$slots,"before"),M(Me,{class:"can-hide"}),B(l.$slots,"after"),a(e).colorModeSwitch?(s(),y(Nt,{key:0})):L("",!0),M(i)],4)],512)}}});var qt=$(Et,[["__file","Navbar.vue"]]);const Pt=["onKeydown"],zt={class:"sidebar-item-children"},Ht=w({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(r){const o=r,{item:e,depth:n}=Q(o),t=q(),u=ge(),_=p(()=>$e(e.value,t)),f=p(()=>({"sidebar-item":!0,"sidebar-heading":n.value===0,active:_.value,collapsible:e.value.collapsible})),h=p(()=>e.value.collapsible?_.value:!0),[l,d]=He(h.value),i=v=>{e.value.collapsible&&(v.preventDefault(),d())},c=u.afterEach(v=>{fe(()=>{l.value=h.value})});return ke(()=>{c()}),(v,g)=>{var I;const m=K("SidebarItem",!0);return s(),b("li",null,[a(e).link?(s(),y(E,{key:0,class:N(a(f)),item:a(e)},null,8,["class","item"])):(s(),b("p",{key:1,tabindex:"0",class:N(a(f)),onClick:i,onKeydown:Ae(i,["enter"])},[X(S(a(e).text)+" ",1),a(e).collapsible?(s(),b("span",{key:0,class:N(["arrow",a(l)?"down":"right"])},null,2)):L("",!0)],42,Pt)),(I=a(e).children)!=null&&I.length?(s(),y(Le,{key:2},{default:z(()=>[V(k("ul",zt,[(s(!0),b(O,null,P(a(e).children,C=>(s(),y(m,{key:`${a(n)}${C.text}${C.link}`,item:C,depth:a(n)+1},null,8,["item","depth"]))),128))],512),[[j,a(l)]])]),_:1})):L("",!0)])}}});var At=$(Ht,[["__file","SidebarItem.vue"]]);const Wt={key:0,class:"sidebar-items"},Gt=w({__name:"SidebarItems",setup(r){const o=q(),e=We();return me(()=>{J(()=>o.hash,n=>{const t=document.querySelector(".sidebar");if(!t)return;const u=document.querySelector(`.sidebar a.sidebar-item[href="${o.path}${n}"]`);if(!u)return;const{top:_,height:f}=t.getBoundingClientRect(),{top:h,height:l}=u.getBoundingClientRect();h<_?u.scrollIntoView(!0):h+l>_+f&&u.scrollIntoView(!1)})}),(n,t)=>a(e).length?(s(),b("ul",Wt,[(s(!0),b(O,null,P(a(e),u=>(s(),y(At,{key:`${u.text}${u.link}`,item:u},null,8,["item"]))),128))])):L("",!0)}});var Vt=$(Gt,[["__file","SidebarItems.vue"]]);const jt={class:"sidebar"},Ft=w({__name:"Sidebar",setup(r){return(o,e)=>(s(),b("aside",jt,[M(Me),B(o.$slots,"top"),M(Vt),B(o.$slots,"bottom")]))}});var Ut=$(Ft,[["__file","Sidebar.vue"]]);export{E as A,qt as N,Ut as S,mt as r};
