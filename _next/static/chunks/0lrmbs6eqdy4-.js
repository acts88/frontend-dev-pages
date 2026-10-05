(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,75094,e=>{"use strict";var t=e.i(9735),i=e.i(24655),n=e.i(39635);e.i(3159);var l=e.i(46907),d=e.i(38803),s=e.i(64954),c=e.i(58362),o=e.i(12945),h=e.i(41417),r=e.i(43174);let a=(0,l.observer)(function(){let{search:e}=r.default.serviceWorker,{selectedRegions:l,selectedGenders:d,selectedCareTypes:s,selectedAgeRanges:a,selectedTimes:S,toggleRegion:D,toggleGender:E,toggleCareType:$,toggleAgeRange:R,setTimes:T,search:O}=e;return(0,t.jsxs)(f,{children:[(0,t.jsxs)(x,{children:[(0,t.jsx)(p,{children:"제공인력 찾기"}),(0,t.jsxs)(g,{children:[(0,t.jsx)(n.default,{sx:{fontSize:20}}),(0,t.jsx)(u,{children:"근무 조건을 선택해 적합한 제공인력을 찾을 수 있습니다."})]})]}),(0,t.jsxs)(m,{children:[(0,t.jsxs)(j,{children:[(0,t.jsxs)(b,{children:[(0,t.jsx)(y,{children:"서비스 가능 지역"}),(0,t.jsx)(_,{children:r.default.ui.serviceRegion.codes.map(e=>{let i=l.includes(e);return(0,t.jsxs)(C,{children:[(0,t.jsx)(z,{type:"checkbox",checked:i,onChange:()=>D(e)}),r.default.ui.serviceRegion.label(e)]},e)})})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)(y,{children:"성별"}),(0,t.jsx)(_,{children:Object.keys(o.default).map(e=>{if(!(e in o.default))return null;let i=d.includes(e);return(0,t.jsxs)(C,{children:[(0,t.jsx)(z,{type:"checkbox",checked:i,onChange:()=>E(e)}),o.default[e].label]},e)})})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)(y,{children:"가능한 근무내용"}),(0,t.jsx)(_,{children:Object.keys(h.default).map(e=>{if(!(e in h.default))return null;let i=s.includes(e);return(0,t.jsxs)(C,{children:[(0,t.jsx)(z,{type:"checkbox",checked:i,onChange:()=>$(e)}),h.default[e].label]},e)})})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)(y,{children:"연령대"}),(0,t.jsx)(_,{children:Object.keys(c.default).map(e=>{if(!(e in c.default))return null;let i=a.includes(e);return(0,t.jsxs)(C,{children:[(0,t.jsx)(z,{type:"checkbox",checked:i,onChange:()=>R(e)}),c.default[e].label]},e)})})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)(w,{children:(0,t.jsx)(y,{children:"근무 가능 시간"})}),(0,t.jsx)(_,{children:(0,t.jsx)(k,{value:S,onChange:({currentTarget:e})=>T(e.value)})})]})]}),(0,t.jsx)(v,{}),(0,t.jsxs)(I,{onClick:()=>void O(),children:[(0,t.jsx)(i.default,{sx:{fontSize:16}}),"검색하기"]})]})]})}),f=d.default.div.withConfig({componentId:"zh__sc-e259b000-0"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`,x=d.default.div.withConfig({componentId:"zh__sc-e259b000-1"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;

  height: 48px;
`,p=d.default.div.withConfig({componentId:"zh__sc-e259b000-2"})`
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,g=d.default.div.withConfig({componentId:"zh__sc-e259b000-3"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  color: #464c53;
`,u=d.default.div.withConfig({componentId:"zh__sc-e259b000-4"})`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 111.111% */
`,m=d.default.div.withConfig({componentId:"zh__sc-e259b000-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  width: 100%;
  padding: 16px 16px 24px;
  border: 1px solid #e5e7eb;

  background: #fff;
`,j=d.default.div.withConfig({componentId:"zh__sc-e259b000-6"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,b=d.default.div.withConfig({componentId:"zh__sc-e259b000-7"})`
  display: flex;
  gap: 24px;
  align-items: center;

  width: 100%;
  min-height: 36px;
  padding: 0 12px;
`,w=d.default.div.withConfig({componentId:"zh__sc-e259b000-8"})`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`,y=d.default.div.withConfig({componentId:"zh__sc-e259b000-9"})`
  width: 110px;
  font-size: 16px;
  font-weight: 500;
  color: #000;
`,_=d.default.div.withConfig({componentId:"zh__sc-e259b000-10"})`
  display: flex;
  flex: 1;
  gap: 24px;
`,C=d.default.label.withConfig({componentId:"zh__sc-e259b000-11"})`
  cursor: pointer;
  user-select: none;

  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  color: #000;
`,z=(0,d.default)(s.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-e259b000-12"})`
  width: 24px;
  height: 24px;
`,v=d.default.div.withConfig({componentId:"zh__sc-e259b000-13"})`
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,I=(0,d.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-e259b000-14"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  width: 193px;
  height: 40px;
  padding: 8px 16px;
`,k=(0,d.default)(s.default.Input.TimeSlider).withConfig({componentId:"zh__sc-e259b000-15"})`
  width: 793px;
`;e.s(["default",0,a])},17470,e=>{"use strict";var t=e.i(9735),i=e.i(74483);e.i(3159);var n=e.i(46907),l=e.i(38803),d=e.i(64954),s=e.i(27997),c=e.i(12945);let o={UNASSIGNED:"비매칭",ACTIVE:"활동중"};var h=e.i(43174),r=e.i(86400),a=e.i(44968),f=e.i(61143);let x=e=>null!==e&&r.default.brand.calendarDateString.is(e)?e.replaceAll("-",""):"",p=(0,n.observer)(function(){let e=h.default.data.serviceWorker.list.data??[],{show:n}=h.default.modal.serviceWorkerDetail;return(0,t.jsxs)(g,{children:[(0,t.jsxs)(u,{children:[(0,t.jsx)(m,{children:"검색 결과"}),(0,t.jsxs)(j,{children:["총 ",e.length,"명"]})]}),(0,t.jsx)(b,{children:(0,t.jsxs)(w,{children:[(0,t.jsx)(k,{children:(0,t.jsxs)(y,{children:[(0,t.jsx)(D,{style:{width:150},children:"성명"}),(0,t.jsx)(D,{style:{width:92},children:"생년월일"}),(0,t.jsxs)(D,{style:{width:86},children:["연령",(0,t.jsx)("br",{}),"(만 나이)"]}),(0,t.jsx)(D,{style:{width:55},children:"성별"}),(0,t.jsx)(D,{style:{width:148},children:"휴대폰"}),(0,t.jsx)(D,{style:{flex:1},children:"주소"}),(0,t.jsx)(D,{style:{width:78},children:"상태"}),(0,t.jsx)(D,{style:{width:115},children:"접수일"}),(0,t.jsx)(D,{style:{width:252},children:"계약 기간 (근속기간)"}),(0,t.jsx)(D,{style:{width:240},children:0===e.length?"":"관리"})]})}),(0,t.jsxs)(S,{children:[0===e.length&&(0,t.jsx)(_,{children:(0,t.jsxs)(C,{colSpan:10,children:[(0,t.jsx)(i.default,{sx:{fontSize:24}}),(0,t.jsxs)(z,{children:[(0,t.jsx)(v,{children:"검색된 제공인력이 없습니다."}),(0,t.jsx)(I,{children:"원하는 근무 조건을 선택하고 적합한 제공인력을 찾아보세요."})]})]})}),e.map(e=>{let i,l,d,{id:s,name:h,gender:r,phoneNumber:p,address:g,addressDetail:u,status:m,firstRegisteredDate:j,employmentContracts:b}=e,w=(0,f.getServiceWorkerBirthInfo)(e),_=w?.birthDate??"-",C=w?.age??"-",z=null===r?"-":c.default[r].label.at(0),v=[g,u].filter(e=>"string"==typeof e&&""!==e.trim()).join(" "),I=null===j?"-":x(j)||"-",k=(0,a.getRepresentativeEmploymentContract)(b),S=k?.contractStartDate??null,D=null===k?null:(0,a.getEmploymentContractEndDate)(k),O=null===S?"-":(i=x(S),l=x(D),d=(0,a.getEmploymentContractTenureLabel)(b),""===i?"-":""===l?`${i} - (${d})`:`${i} - ${l} (${d})`),A=(0,a.getRepresentativeContractExpirationReminder)(b.map(e=>({contractId:e.id,contractStatus:e.status,contractStartDate:e.contractStartDate,contractEndDate:e.contractEndDate})));return(0,t.jsxs)(y,{children:[(0,t.jsx)(E,{style:{width:150},children:h}),(0,t.jsx)(E,{style:{width:92},children:_}),(0,t.jsx)(E,{style:{width:86},children:C}),(0,t.jsx)(E,{style:{width:55},children:z}),(0,t.jsx)(E,{style:{width:148},children:p?.trim()===""?"-":p??"-"}),(0,t.jsx)(E,{style:{flex:1},children:""===v?"-":v}),(0,t.jsx)(E,{style:{width:78},children:o[m]}),(0,t.jsx)(E,{style:{width:115},children:I}),(0,t.jsx)(E,{style:{width:252,justifyContent:"flex-start"},children:(0,t.jsxs)($,{children:[(0,t.jsx)("span",{children:O}),null!==A?(0,t.jsx)(R,{$color:A.color,children:(0,a.formatContractExpirationLabel)(A.remainingDays)}):null]})}),(0,t.jsx)(E,{style:{width:240},children:(0,t.jsx)(T,{onClick:()=>{n(s)},children:"상세보기"})})]},s)})]})]})})]})}),g=l.default.div.withConfig({componentId:"zh__sc-5fb3e697-0"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`,u=l.default.div.withConfig({componentId:"zh__sc-5fb3e697-1"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;

  height: 48px;
`,m=l.default.div.withConfig({componentId:"zh__sc-5fb3e697-2"})`
  font-size: 20px;
  font-weight: 700;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,j=l.default.div.withConfig({componentId:"zh__sc-5fb3e697-3"})`
  display: flex;
  align-items: flex-start;

  padding: 4px 10px;
  border-radius: 999px;

  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  color: #1d58d1;

  background: #ecf2ff;
`,b=l.default.section.withConfig({componentId:"zh__sc-5fb3e697-4"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  min-height: 0;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
`,w=l.default.table.withConfig({componentId:"zh__sc-5fb3e697-5"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-height: 0;
`,y=l.default.tr.withConfig({componentId:"zh__sc-5fb3e697-6"})`
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;

  min-height: 44px;
`,_=(0,l.default)(y).withConfig({componentId:"zh__sc-5fb3e697-7"})`
  height: 240px;
`,C=l.default.td.withConfig({componentId:"zh__sc-5fb3e697-8"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  color: #494f53;
`,z=l.default.div.withConfig({componentId:"zh__sc-5fb3e697-9"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,v=l.default.div.withConfig({componentId:"zh__sc-5fb3e697-10"})`
  font-size: 16px;
  font-weight: 700;
`,I=l.default.div.withConfig({componentId:"zh__sc-5fb3e697-11"})`
  font-size: 16px;
`,k=l.default.thead.withConfig({componentId:"zh__sc-5fb3e697-12"})`
  position: sticky;
  z-index: 1;
  top: 0;
  width: 100%;

  ${y} {
    height: 52px;
    border-bottom: 1px solid #e5e7eb;
    background: #f3f5f9;
  }
`,S=l.default.tbody.withConfig({componentId:"zh__sc-5fb3e697-13"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-height: 0;

  ${y} {
    border-bottom: 1px solid #ebedf1;
    background: #fff;
  }

  ${y}:last-child {
    border-bottom: none;
  }
`,D=l.default.th.withConfig({componentId:"zh__sc-5fb3e697-14"})`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  font-size: 16px;
  font-weight: 700;
  color: #131416;
`,E=l.default.td.withConfig({componentId:"zh__sc-5fb3e697-15"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  height: 100%;
  padding: 0 14px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  color: #464c53;
  text-align: center;
`,$=l.default.div.withConfig({componentId:"zh__sc-5fb3e697-16"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  justify-content: center;

  text-align: left;
`,R=(0,l.default)(s.default).withConfig({componentId:"zh__sc-5fb3e697-17"})`
  height: auto;
  padding: 8px;
`,T=(0,l.default)(d.default.Button.Outlined).withConfig({componentId:"zh__sc-5fb3e697-18"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;e.s(["default",0,p],17470)}]);