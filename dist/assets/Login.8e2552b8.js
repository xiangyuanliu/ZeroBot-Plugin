import{u,a as h,b as g,c as w,A as v,d as y,e as c}from"./index.044d747f.js";import j from"./LoginForm.adf67ad0.js";import b from"./ForgetPasswordForm.38d488ce.js";import k from"./RegisterForm.4bd77043.js";import T from"./MobileForm.575cb83b.js";import F from"./QrCodeForm.32b00fa0.js";import{A as L,j as B,B as a,D as S,u as s,a1 as m,ac as d,H as e,w as t,J as x,K as p}from"./vendor.35b582d5.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               */import"./LoginFormTitle.d76d3dfc.js";import"./index.cf12e964.js";import"./index.6d958ab0.js";import"./download.17b07232.js";var $="/assets/login-box-bg.9027741f.svg";const A={class:"-enter-x xl:hidden"},C={class:"container relative h-full py-2 mx-auto sm:px-10"},D={class:"flex h-full"},I={class:"hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12"},N={class:"my-auto"},P=["alt"],V={class:"mt-10 font-medium text-white -enter-x"},M={class:"inline-block mt-4 text-3xl"},z={class:"mt-5 font-normal text-white text-md dark:text-gray-500 -enter-x"},E={class:"flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12"},le=L({props:{sessionTimeout:{type:Boolean}},setup(i){const o=u(),{prefixCls:n}=h("login"),{t:r}=g(),_=w().getShowPicker,f=B(()=>{var l;return(l=o==null?void 0:o.title)!=null?l:""});return(l,H)=>(a(),S("div",{class:p([s(n),"relative w-full h-full px-4"])},[!i.sessionTimeout&&s(_)?(a(),m(s(v),{key:0,class:"absolute text-white top-4 right-4 enter-x xl:text-gray-600",showText:!1})):d("",!0),i.sessionTimeout?d("",!0):(a(),m(s(y),{key:1,class:"absolute top-3 right-7 enter-x"})),e("span",A,[t(s(c),{alwaysShowTitle:!0})]),e("div",C,[e("div",D,[e("div",I,[t(s(c),{class:"-enter-x"}),e("div",N,[e("img",{alt:s(f),src:$,class:"w-1/2 -mt-16 -enter-x"},null,8,P),e("div",V,[e("span",M,x(s(r)("sys.login.signInTitle")),1)]),e("div",z,x(s(r)("sys.login.signInDesc")),1)])]),e("div",E,[e("div",{class:p([`${s(n)}-form`,"relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"])},[t(j),t(b),t(k),t(T),t(F)],2)])])])],2))}});export{le as default};