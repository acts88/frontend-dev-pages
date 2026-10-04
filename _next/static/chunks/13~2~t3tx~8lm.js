(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,75664,e=>{"use strict";var t=e.i(9735);e.i(3159);var i=e.i(46907),n=e.i(33261),o=e.i(7744),l=e.i(26546),d=e.i(71723),r=e.i(38803),a=e.i(64954),s=e.i(43174),c=e.i(20276);let p="inspection-print-root";function h({result:e,organizationName:i,serviceLabel:n,categoryLabels:o,categoryOrder:l,severityLabels:d}){let r;if("u"<typeof document)return null;let a=new Date(e.generatedAt),s=Number.isNaN(a.getTime())?e.generatedAt:`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")} ${String(a.getHours()).padStart(2,"0")}:${String(a.getMinutes()).padStart(2,"0")}`;return(0,c.createPortal)((0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u,{}),(0,t.jsxs)(f,{id:p,children:[(0,t.jsx)(x,{children:"월별 자동 점검표"}),(0,t.jsxs)(g,{children:[(0,t.jsxs)("span",{children:["기관명: ",i||"-"]}),(0,t.jsxs)("span",{children:["대상: ",(r=e.targetYearMonth,`${r.slice(0,4)}년 ${Number(r.slice(5,7))}월`)," · ",n]}),(0,t.jsxs)("span",{children:["점검 시각: ",s]})]}),(0,t.jsx)(b,{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"점검한 계약"}),(0,t.jsxs)("td",{children:[e.checkedContracts,"건"]}),(0,t.jsx)("th",{children:"확인 필요 이용자"}),(0,t.jsxs)("td",{children:[e.summary.clientsWithIssues,"명"]}),(0,t.jsx)("th",{children:"기한 지남 / 임박"}),(0,t.jsxs)("td",{children:[e.summary.overdue,"건 / ",e.summary.dueSoon,"건"]})]}),(0,t.jsx)("tr",{children:l.map(i=>(0,t.jsxs)("td",{colSpan:"ALERT"===i?3:1,children:[o[i]," ",e.summary.byCategory[i],"건"]},i))})]})}),0===e.items.length?(0,t.jsx)(_,{children:"확인할 항목이 없습니다."}):(0,t.jsxs)(m,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{style:{width:"6%"},children:"번호"}),(0,t.jsx)("th",{style:{width:"7%"},children:"중요도"}),(0,t.jsx)("th",{style:{width:"16%"},children:"분류"}),(0,t.jsx)("th",{style:{width:"10%"},children:"이용자"}),(0,t.jsx)("th",{children:"항목"}),(0,t.jsx)("th",{style:{width:"14%"},children:"기한"}),(0,t.jsx)("th",{style:{width:"9%"},children:"확인"})]})}),(0,t.jsx)("tbody",{children:e.items.map((e,i)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:i+1}),(0,t.jsx)("td",{children:d[e.severity]}),(0,t.jsx)("td",{children:o[e.category]}),(0,t.jsx)("td",{children:e.clientName??"기관 전체"}),(0,t.jsxs)("td",{className:"item",children:[(0,t.jsx)("strong",{children:e.title}),(0,t.jsx)("span",{children:e.detail})]}),(0,t.jsx)("td",{children:(e=>{if(null===e.dueDate)return"-";let t="OVERDUE"===e.dueStatus?" (지남)":"DUE_SOON"===e.dueStatus?" (임박)":"";return`${e.dueDate}${t}`})(e)}),(0,t.jsx)("td",{})]},`${e.code}-${e.contractId??"org"}-${e.documentId??""}-${e.title}-${e.detail}`))})]}),(0,t.jsxs)(j,{children:["작성기한은 임시 기준입니다(초기 서류·계획서는 서비스 시작 후"," ",e.criteria.initialDocsDueDays,"일, 제공기록지는 다음 달"," ",e.criteria.monthlyRecordDueDay,"일, 해지 서류는 해지 후"," ",e.criteria.terminationDocsDueDays,"일, 소급결제 확인증은 승인 후"," ",e.criteria.retroactiveDocDueDays,"일). 바우처 결제내역"," ",e.hasPaymentData?"대조함":"없음(결제 대조 생략)","."]})]})]}),document.body)}let u=r.createGlobalStyle`
  #${p} {
    display: none;
  }

  @media print {
    @page {
      size: a4 landscape;
      margin: 10mm;
    }

    body > *:not(#${p}) {
      display: none !important;
    }

    #${p} {
      display: block;
    }
  }
`,f=r.default.section.withConfig({componentId:"zh__sc-aba75b44-0"})`
  color: #111;
`,x=r.default.h1.withConfig({componentId:"zh__sc-aba75b44-1"})`
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`,g=r.default.p.withConfig({componentId:"zh__sc-aba75b44-2"})`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 12px;
`,b=r.default.table.withConfig({componentId:"zh__sc-aba75b44-3"})`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 10px;
  font-size: 12px;

  th,
  td {
    padding: 4px 6px;
    border: 1px solid #333;
  }

  th {
    font-weight: 600;
    background: #f2f4f7;
  }
`,m=r.default.table.withConfig({componentId:"zh__sc-aba75b44-4"})`
  border-collapse: collapse;
  width: 100%;
  font-size: 11px;

  th,
  td {
    padding: 4px 6px;
    border: 1px solid #333;
    vertical-align: top;
  }

  th {
    font-weight: 600;
    background: #f2f4f7;
  }

  tr {
    break-inside: avoid;
  }

  .item strong {
    display: block;
    font-weight: 600;
  }

  .item span {
    color: #444;
  }
`,_=r.default.p.withConfig({componentId:"zh__sc-aba75b44-5"})`
  padding: 16px 0;
  font-size: 13px;
  text-align: center;
`,j=r.default.p.withConfig({componentId:"zh__sc-aba75b44-6"})`
  margin-top: 8px;
  font-size: 10px;
  color: #444;
`;var y=e.i(23416);let C=function({organizationId:e,serviceType:i,value:n,canEdit:l,onSaved:d}){let[r,a]=(0,o.useState)(!1),[c,p]=(0,o.useState)(null===n),[h,u]=(0,o.useState)(n??""),[f,x]=(0,o.useState)(!1),g=async()=>{if(null===e)return;if(!c&&!/^\d{4}-\d{2}-\d{2}$/.test(h))return void s.default.ui.layout.toast.error("기준일을 골라 주세요.");x(!0);let[t]=await y.default.data.organization.updateService({id:e,type:i,payload:{signedCopyCheckFrom:c||!/^\d{4}-\d{2}-\d{2}$/.test(h)?null:h}});(x(!1),null!==t)?s.default.ui.layout.toast.error(t.message||"기준일을 바꾸지 못했습니다."):(s.default.ui.layout.toast.success("서명본 점검 기준일을 바꿨습니다."),a(!1),d())};return r?(0,t.jsxs)(I,{children:["서명본 없음 점검:",(0,t.jsxs)("label",{children:[(0,t.jsx)("input",{type:"radio",checked:!c,onChange:()=>p(!1)})," ",(0,t.jsx)("input",{type:"date",value:h,disabled:c,onChange:e=>u(e.target.value)})," ","이후 시작한 계약"]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("input",{type:"radio",checked:c,onChange:()=>p(!0)})," ","모든 계약"]}),(0,t.jsx)(w,{type:"button",disabled:f,onClick:()=>void g(),children:f?"저장 중…":"저장"}),(0,t.jsx)(w,{type:"button",disabled:f,onClick:()=>a(!1),children:"취소"})]}):(0,t.jsxs)(I,{children:["서명본 없음 점검:"," ",(0,t.jsx)("strong",{children:null===n?"모든 계약":`${n} 이후 시작한 계약`}),l&&null!==e?(0,t.jsx)(w,{type:"button",onClick:()=>{p(null===n),u(n??""),a(!0)},children:"바꾸기"}):null]})},I=r.default.div.withConfig({componentId:"zh__sc-865e7f72-0"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 12px;
  align-items: center;

  font-size: 13px;
  color: #636978;

  label {
    display: inline-flex;
    gap: 4px;
    align-items: center;
  }
`,w=r.default.button.withConfig({componentId:"zh__sc-865e7f72-1"})`
  padding: 0;
  border: none;

  font-size: 13px;
  color: #4f39f6;
  text-decoration: underline;

  background: none;

  &:disabled {
    color: #98a2b3;
  }
`,z=[{value:"MEAL",label:"식사 서비스"},{value:"NUTRITION",label:"영양 서비스"},{value:"DISABILITY_ACTIVITY_SUPPORT",label:"장애인활동지원"}],v={REQUIRED_DOCUMENT:{label:"필수서류·필수항목 누락",description:"단계별 서류가 없거나 전산 완료 전, 서명본(서명·날인·작성일) 빈칸·누락"},PAYMENT_MATCH:{label:"제공기록 ↔ 결제내역",description:"제공 현황·월별 일정표와 전자바우처 결제, 부정결제 의심"},DOCUMENT_CONSISTENCY:{label:"서류 간 일치",description:"제공계획서·제공기록지·소급결제 확인증과 계약·결제"},ALERT:{label:"업무 알림",description:"계약 종료 예정·소급결제 확인증·이용내역 업로드"}},D=["REQUIRED_DOCUMENT","PAYMENT_MATCH","DOCUMENT_CONSISTENCY","ALERT"],E={HIGH:{label:"높음",color:"#b42318",bg:"#fee4e2"},MEDIUM:{label:"보통",color:"#b54708",bg:"#fef0c7"},LOW:{label:"낮음",color:"#475467",bg:"#f2f4f7"}},T=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`,S=(e,t)=>T(new Date(Number(e.slice(0,4)),Number(e.slice(5,7))-1+t,1)),$=e=>`${e.slice(0,4)}년 ${Number(e.slice(5,7))}월`,N=(0,i.observer)(function(){let e=(0,n.useRouter)(),i=s.default.data.inspection,r=s.default.data.auth.me.data,c=i.data,p=T(new Date),[u,f]=(0,o.useState)(()=>S(p,-1)),[x,g]=(0,o.useState)("MEAL"),[b,m]=(0,o.useState)("ALL");(0,o.useEffect)(()=>{null!==r&&i.setQuery({serviceType:x,targetYearMonth:u,..."SUPER_ADMIN"===r.role&&null!==r.organizationId?{organizationId:r.organizationId}:{}})},[i,r,x,u]);let _=s.default.data.organization.info;(0,o.useEffect)(()=>{let e=r?.organizationId??null;null!==e&&_.query?.id!==e&&_.setQuery({id:e})},[r,_]);let j=(0,o.useMemo)(()=>{let e=c?.items??[];return"ALL"===b?e:e.filter(e=>e.category===b)},[b,c]),y=null!==c&&(c.serviceType!==x||c.targetYearMonth!==u),I="DISABILITY_ACTIVITY_SUPPORT"===x;return(0,t.jsxs)(A,{children:[(0,t.jsxs)(k,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(O,{children:"자동 점검"}),(0,t.jsx)(R,{children:"사회서비스원 점검 기준으로 서류·결제·기록을 매달 자동으로 확인해요. 고칠 곳을 바로 열어 처리하세요."})]}),(0,t.jsx)(a.default.Button.Outlined,{type:"button",disabled:null===c||y,onClick:()=>window.print(),children:"점검표 출력"})]}),null===c||y?null:(0,t.jsx)(h,{result:c,organizationName:_.data?.name??"",serviceLabel:z.find(e=>e.value===c.serviceType)?.label??"",categoryLabels:{REQUIRED_DOCUMENT:v.REQUIRED_DOCUMENT.label,PAYMENT_MATCH:v.PAYMENT_MATCH.label,DOCUMENT_CONSISTENCY:v.DOCUMENT_CONSISTENCY.label,ALERT:v.ALERT.label},categoryOrder:D,severityLabels:{HIGH:E.HIGH.label,MEDIUM:E.MEDIUM.label,LOW:E.LOW.label}}),(0,t.jsxs)(L,{children:[(0,t.jsx)(M,{children:z.map(e=>(0,t.jsx)(U,{type:"button",$active:x===e.value,onClick:()=>{g(e.value),m("ALL")},children:e.label},e.value))}),(0,t.jsxs)(P,{children:[(0,t.jsx)(Y,{type:"button","aria-label":"이전 달",onClick:()=>f(e=>S(e,-1)),children:(0,t.jsx)(l.ChevronLeft,{size:18})}),(0,t.jsx)(W,{children:$(u)}),(0,t.jsx)(Y,{type:"button","aria-label":"다음 달",disabled:u>=p,onClick:()=>f(e=>S(e,1)),children:(0,t.jsx)(d.ChevronRight,{size:18})})]})]}),null===c||y?(0,t.jsx)(H,{children:"error"===i.status?"점검 결과를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.":"점검하는 중…"}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(F,{children:D.map(e=>(0,t.jsxs)(G,{type:"button",$selected:b===e,onClick:()=>m(b===e?"ALL":e),children:[(0,t.jsx)(B,{children:v[e].label}),(0,t.jsxs)(Q,{$warn:c.summary.byCategory[e]>0,children:[c.summary.byCategory[e],"건"]}),(0,t.jsx)(V,{children:v[e].description})]},e))}),(0,t.jsxs)(K,{children:["점검한 계약 ",c.checkedContracts,"건 · 확인 필요 이용자"," ",c.summary.clientsWithIssues,"명 · 작성기한 지남 ",c.summary.overdue,"건 · 임박"," ",c.summary.dueSoon,"건","ALL"!==b?(0,t.jsxs)(X,{type:"button",onClick:()=>m("ALL"),children:[v[b].label,"만 보는 중 · 전체 보기"]}):null]}),(0,t.jsx)(C,{organizationId:c.organizationId,serviceType:c.serviceType,value:c.signedCopyCheckFrom??null,canEdit:r?.role==="ORG_ADMIN"||r?.role==="SUPER_ADMIN",onSaved:()=>void i.refetch()},`${c.serviceType}-${c.signedCopyCheckFrom??"all"}`),c.hasPaymentData?null:(0,t.jsxs)(q,{children:[$(u)," 전자바우처 이용내역이 없어 결제 대조는 건너뛰었어요. 왼쪽 메뉴 아래 [전자바우처 - 서비스 이용내역]에 엑셀을 올리면 함께 대조해요."]}),0===j.length?(0,t.jsx)(J,{children:"ALL"===b?`${$(u)}은 확인할 항목이 없어요.`:"이 분류에서는 확인할 항목이 없어요."}):(0,t.jsxs)(Z,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(ee,{$width:"72px",children:"중요도"}),(0,t.jsx)(ee,{$width:"168px",children:"분류"}),(0,t.jsx)(ee,{$width:"96px",children:"이용자"}),(0,t.jsx)(ee,{children:"항목"}),(0,t.jsx)(ee,{$width:"120px",children:"기한"}),(0,t.jsx)(ee,{$width:"104px"})]})}),(0,t.jsx)("tbody",{children:j.map(i=>{let n,o=void 0!==i.serviceWorkerId&&null!==i.serviceWorkerId?"활동지원사 서류":I&&(i.code.startsWith("PAY_")||"ALERT_RECORDS_UNLINKED"===i.code)?"서비스 내역":i.code.startsWith("PAY_")?"제공 현황":"CONS_SCHEDULE_COUNT"===i.code?"식단 설정":null===i.clientId?null:"ALERT_CONTRACT_EXPIRING"===i.code?"계약 보기":"서류 보기";return(0,t.jsxs)("tr",{children:[(0,t.jsx)(et,{children:(0,t.jsx)(ei,{$severity:i.severity,children:E[i.severity].label})}),(0,t.jsx)(et,{children:v[i.category].label}),(0,t.jsx)(et,{children:i.clientName??"기관 전체"}),(0,t.jsxs)(et,{children:[(0,t.jsx)(en,{children:i.title}),(0,t.jsx)(eo,{children:i.detail})]}),(0,t.jsx)(et,{children:null!==i.dueDate?(0,t.jsxs)(el,{$status:i.dueStatus,children:[(n=i.dueDate,`${Number(n.slice(5,7))}/${Number(n.slice(8,10))}`),"OVERDUE"===i.dueStatus?" 지남":"DUE_SOON"===i.dueStatus?" 임박":""]}):"-"}),(0,t.jsx)(et,{children:null!==o?(0,t.jsx)(ed,{type:"button",onClick:()=>(t=>{if(void 0!==t.serviceWorkerId&&null!==t.serviceWorkerId){s.default.modal.serviceWorkerDetail.show(t.serviceWorkerId),s.default.modal.serviceWorkerDetail.setActiveTab("docs");return}if(I&&(t.code.startsWith("PAY_")||"ALERT_RECORDS_UNLINKED"===t.code))return void e.push("/service-worker/service-record");if(t.code.startsWith("PAY_")&&"DISABILITY_ACTIVITY_SUPPORT"!==x){s.default.client.serviceProvision.setServiceType(x),e.push(`/client/service-provision?targetYearMonth=${u}`);return}"CONS_SCHEDULE_COUNT"===t.code?e.push("/diet-setting"):null!==t.clientId&&(s.default.client.info.byClient.openClientDetailFrom({clientId:t.clientId,serviceType:x,tab:"ALERT_CONTRACT_EXPIRING"===t.code?"contract":"docs"}),e.push("/client/info/by-client"))})(i),children:o}):null})]},`${i.code}-${i.contractId??"org"}-${i.baseDate??""}-${i.title}-${i.detail}`)})})]}),(0,t.jsxs)(er,{children:["작성기한은 임시 기준이에요: 초기 서류·제공계획서는 서비스 시작 후"," ",c.criteria.initialDocsDueDays,"일, 제공기록지는 다음 달"," ",c.criteria.monthlyRecordDueDay,"일, 종료 서류는 해지 후"," ",c.criteria.terminationDocsDueDays,"일, 소급결제 확인증은 결제 후"," ",c.criteria.retroactiveDocDueDays,"일. 기한 ",c.criteria.dueSoonDays,"일 전부터 임박으로 표시해요. 결제 1건을 제공 1회로 대조하고, 결제 시각이 제공 시간에서"," ",c.criteria.timeToleranceMinutes,"분 넘게 벗어나면 표시해요."]})]})]})}),A=r.default.div.withConfig({componentId:"zh__sc-610647e-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;

  min-width: 0;
  padding: 8px 16px 32px;
`,k=r.default.div.withConfig({componentId:"zh__sc-610647e-1"})`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`,O=r.default.h1.withConfig({componentId:"zh__sc-610647e-2"})`
  font-size: 20px;
  font-weight: 700;
  color: #0a0a0a;
`,R=r.default.p.withConfig({componentId:"zh__sc-610647e-3"})`
  margin-top: 6px;
  font-size: 14px;
  color: #6b7280;
`,L=r.default.div.withConfig({componentId:"zh__sc-610647e-4"})`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`,M=r.default.div.withConfig({componentId:"zh__sc-610647e-5"})`
  overflow: hidden;
  display: flex;

  height: 44px;
  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,U=r.default.button.withConfig({componentId:"zh__sc-610647e-6"})`
  cursor: pointer;

  min-width: 120px;
  padding: 0 16px;
  border: none;

  font-size: 15px;
  font-weight: 700;
  color: ${({$active:e})=>e?"#fff":"#464c53"};

  background: ${({$active:e})=>e?"#4f39f6":"transparent"};
`,P=r.default.div.withConfig({componentId:"zh__sc-610647e-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,Y=r.default.button.withConfig({componentId:"zh__sc-610647e-8"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;

  background: #fff;

  &:disabled {
    cursor: default;
    opacity: 0.4;
  }
`,W=r.default.span.withConfig({componentId:"zh__sc-610647e-9"})`
  min-width: 110px;

  font-size: 17px;
  font-weight: 700;
  color: #111827;
  text-align: center;
`,H=r.default.p.withConfig({componentId:"zh__sc-610647e-10"})`
  padding: 48px 0;
  font-size: 15px;
  color: #6b7280;
  text-align: center;
`,F=r.default.div.withConfig({componentId:"zh__sc-610647e-11"})`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
`,G=r.default.button.withConfig({componentId:"zh__sc-610647e-12"})`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;

  padding: 16px;
  border: 1px solid ${({$selected:e})=>e?"#4f39f6":"#e5e7eb"};
  border-radius: 12px;

  text-align: left;

  background: ${({$selected:e})=>e?"#eef2ff":"#fff"};

  &:hover {
    border-color: #4f39f6;
  }
`,B=r.default.span.withConfig({componentId:"zh__sc-610647e-13"})`
  font-size: 14px;
  font-weight: 600;
  color: #374151;
`,Q=r.default.span.withConfig({componentId:"zh__sc-610647e-14"})`
  font-size: 24px;
  font-weight: 700;
  color: ${({$warn:e})=>e?"#b42318":"#067647"};
`,V=r.default.span.withConfig({componentId:"zh__sc-610647e-15"})`
  font-size: 12px;
  color: #6b7280;
`,K=r.default.div.withConfig({componentId:"zh__sc-610647e-16"})`
  display: flex;
  gap: 12px;
  align-items: center;

  font-size: 14px;
  color: #475467;
`,X=r.default.button.withConfig({componentId:"zh__sc-610647e-17"})`
  cursor: pointer;

  padding: 4px 10px;
  border: 1px solid #c7d2fe;
  border-radius: 999px;

  font-size: 13px;
  color: #4f39f6;

  background: #eef2ff;
`,q=r.default.p.withConfig({componentId:"zh__sc-610647e-18"})`
  padding: 10px 14px;
  border-radius: 8px;

  font-size: 14px;
  color: #b45309;

  background: #fef3c7;
`,J=r.default.p.withConfig({componentId:"zh__sc-610647e-19"})`
  padding: 40px 0;
  border: 1px dashed #d0d5dd;
  border-radius: 12px;

  font-size: 15px;
  color: #067647;
  text-align: center;
`,Z=r.default.table.withConfig({componentId:"zh__sc-610647e-20"})`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
  background: #fff;
`,ee=r.default.th.withConfig({componentId:"zh__sc-610647e-21"})`
  width: ${({$width:e})=>e??"auto"};
  padding: 10px 12px;
  border-bottom: 1px solid #e5e7eb;

  font-size: 13px;
  font-weight: 600;
  color: #475467;
  text-align: left;

  background: #f9fafb;
`,et=r.default.td.withConfig({componentId:"zh__sc-610647e-22"})`
  padding: 12px;
  border-bottom: 1px solid #f2f4f7;

  font-size: 14px;
  color: #344054;
  vertical-align: top;
`,ei=r.default.span.withConfig({componentId:"zh__sc-610647e-23"})`
  display: inline-block;

  padding: 2px 8px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 700;
  color: ${({$severity:e})=>E[e].color};

  background: ${({$severity:e})=>E[e].bg};
`,en=r.default.div.withConfig({componentId:"zh__sc-610647e-24"})`
  font-weight: 600;
  color: #111827;
`,eo=r.default.div.withConfig({componentId:"zh__sc-610647e-25"})`
  margin-top: 4px;
  font-size: 13px;
  color: #667085;
`,el=r.default.span.withConfig({componentId:"zh__sc-610647e-26"})`
  font-weight: ${({$status:e})=>null===e?400:700};
  color: ${({$status:e})=>"OVERDUE"===e?"#b42318":"DUE_SOON"===e?"#b54708":"#344054"};
`,ed=r.default.button.withConfig({componentId:"zh__sc-610647e-27"})`
  cursor: pointer;

  padding: 6px 10px;
  border: 1px solid #d0d5dd;
  border-radius: 6px;

  font-size: 13px;
  color: #344054;
  white-space: nowrap;

  background: #fff;

  &:hover {
    border-color: #4f39f6;
    color: #4f39f6;
  }
`,er=r.default.p.withConfig({componentId:"zh__sc-610647e-28"})`
  font-size: 12px;
  line-height: 1.6;
  color: #98a2b3;
`;e.s(["default",0,N],75664)}]);