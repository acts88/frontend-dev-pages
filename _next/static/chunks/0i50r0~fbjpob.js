(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,34552,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),a=e.i(7744),i=e.i(38803),l=e.i(42188),r=e.i(33219),o=e.i(43174),d=e.i(62897);let s=[{key:"generalMenu",label:"일반식"},{key:"therapeuticMenu",label:"치료식"},{key:"textureModifiedMenu",label:"연하식"}],u=(0,n.observer)(function(){let e=o.default.data.auth.me.data?.organizationId??null,[n,i]=(0,a.useState)(()=>{let e=new Date;return new Date(e.getFullYear(),e.getMonth(),1)}),[u,M]=d.default.yearMonth.create(n.getFullYear(),n.getMonth()+1),[_,z]=(0,a.useState)("generalMenu"),j=n.getFullYear(),C=n.getMonth()+1,I=Array.from({length:101},(e,t)=>j-50+t),k=o.default.data.serviceProvision.menu,T=o.default.data.serviceProvision.schedule,A=o.default.data.organization.info,[P,Y]=(0,a.useState)([]);(0,a.useEffect)(()=>{if(null===e||null!==u||null===M)return;let t=k.query;(null===t||"MEAL"!==t.serviceType||t.targetYearMonth!==M)&&k.setQuery({serviceType:"MEAL",targetYearMonth:M});let n=T.query;(null===n||n.organizationId!==e||"MEAL"!==n.serviceType||n.targetYearMonth!==M)&&T.setQuery({organizationId:e,serviceType:"MEAL",targetYearMonth:M});let a=A.query;(null===a||a.id!==e)&&A.setQuery({id:e})},[k,e,A,T,M,u]),(0,a.useEffect)(()=>{let e=!0;return o.default.data.holiday.getListByYear(j).then(t=>{e&&Y(t)}),()=>{e=!1}},[j]);let D=k.data,E=T.data,S=A.data,L="loading"===k.status||"loading"===T.status||"loading"===A.status,$="error"===k.status||"error"===T.status||"error"===A.status,q=(0,a.useMemo)(()=>null===D||null===E||null===S?null:(0,r.buildMealMenuPrintModel)({viewDate:n,menu:D,schedule:E,holidays:P,menuType:_,organizationName:S.name,logoImagePath:S.logoImagePath??"",address:`${S.address} ${S.addressDetail}`.trim(),contact:S.contact}),[P,D,_,S,E,n]);return(0,t.jsxs)(c,{children:[(0,t.jsxs)(f,{children:[(0,t.jsx)(h,{children:"Meal Menu Print Devtool"}),(0,t.jsx)(g,{children:"현재 기관의 식사 제공 식단표 출력 대상을 화면에서 확인합니다."}),(0,t.jsxs)(p,{children:[(0,t.jsx)(x,{value:String(j),onChange:e=>{i(new Date(Number(e.currentTarget.value),C-1,1))},children:I.map(e=>(0,t.jsxs)("option",{value:e,children:[e,"년"]},e))}),(0,t.jsx)(x,{value:String(C),onChange:e=>{i(new Date(j,Number(e.currentTarget.value)-1,1))},children:Array.from({length:12},(e,t)=>t+1).map(e=>(0,t.jsxs)("option",{value:e,children:[e,"월"]},e))})]}),(0,t.jsx)(m,{children:s.map(e=>(0,t.jsx)(b,{type:"button",$active:e.key===_,onClick:()=>z(e.key),children:e.label},e.key))})]}),(0,t.jsxs)(y,{children:[L&&(0,t.jsx)(w,{children:"데이터를 불러오는 중입니다."}),!L&&null===e&&(0,t.jsx)(w,{children:"기관 정보를 확인할 수 없습니다."}),!L&&null!==e&&$&&(0,t.jsx)(w,{children:"실제 데이터를 불러오지 못했습니다."}),!L&&!$&&null!==q&&(0,t.jsx)(v,{children:(0,t.jsx)(l.default,{model:q})})]})]})}),c=i.default.main.withConfig({componentId:"zh__sc-5581a2c9-0"})`
  display: flex;
  flex-direction: column;
  gap: 20px;

  min-height: 100%;
  padding: 24px;

  background: #f3f4f6;
`,f=i.default.header.withConfig({componentId:"zh__sc-5581a2c9-1"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  align-items: center;
`,h=i.default.h1.withConfig({componentId:"zh__sc-5581a2c9-2"})`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #111827;
`,g=i.default.p.withConfig({componentId:"zh__sc-5581a2c9-3"})`
  margin: 0;
  font-size: 14px;
  color: #4b5563;
`,p=i.default.div.withConfig({componentId:"zh__sc-5581a2c9-4"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,x=i.default.select.withConfig({componentId:"zh__sc-5581a2c9-5"})`
  height: 36px;
  padding: 0 10px;
  border: 1px solid #b1b8be;
  border-radius: 6px;

  font-size: 14px;
  color: #464c53;

  background: #fff;
`,m=i.default.div.withConfig({componentId:"zh__sc-5581a2c9-6"})`
  overflow: hidden;
  display: flex;

  margin-left: auto;
  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,b=i.default.button.withConfig({componentId:"zh__sc-5581a2c9-7"})`
  cursor: pointer;

  min-width: 80px;
  padding: 8px 14px;
  border: 0;
  border-left: 1px solid #b1b8be;

  font-size: 13px;
  font-weight: 700;
  color: ${({$active:e})=>e?"#fff":"#464c53"};

  background: ${({$active:e})=>e?"#4f39f6":"#fff"};

  &:first-child {
    border-left: 0;
  }
`,y=i.default.section.withConfig({componentId:"zh__sc-5581a2c9-8"})`
  overflow: auto;
  display: flex;
  justify-content: center;

  min-height: 0;
  padding: 24px;
  border: 1px solid #d1d5db;

  background: #dfe3e8;
`,v=i.default.div.withConfig({componentId:"zh__sc-5581a2c9-9"})`
  flex: 0 0 auto;
  width: 210mm;
  min-height: 297mm;
  box-shadow: 0 8px 24px rgb(15 23 42 / 16%);
`,w=i.default.p.withConfig({componentId:"zh__sc-5581a2c9-10"})`
  margin: auto;
  font-size: 16px;
  color: #4b5563;
`;e.s(["default",0,u])}]);