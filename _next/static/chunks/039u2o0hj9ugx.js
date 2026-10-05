(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,59701,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(33261),d=e.i(7744),o=e.i(38803),l=e.i(12898),s=e.i(43174),c=e.i(64954);let r=function(e){let{serviceType:n,onChangeServiceType:i}=e;return(0,t.jsxs)(a,{children:[(0,t.jsxs)(h,{children:[(0,t.jsx)(f,{children:"서비스 구분"}),(0,t.jsxs)(p,{children:[(0,t.jsx)(u,{type:"button",$active:"MEAL"===n,onClick:()=>i("MEAL"),children:"식사 서비스"}),(0,t.jsx)(u,{type:"button",$active:"NUTRITION"===n,onClick:()=>i("NUTRITION"),children:"영양 서비스"})]})]}),(0,t.jsx)(x,{type:"button",disabled:!0,children:"엑셀 파일 다운로드"})]})},a=o.default.div.withConfig({componentId:"zh__sc-afc36c84-0"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,h=o.default.div.withConfig({componentId:"zh__sc-afc36c84-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
`,f=o.default.h1.withConfig({componentId:"zh__sc-afc36c84-2"})`
  margin: 0;

  font-size: 20px;
  font-weight: 700;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,p=o.default.div.withConfig({componentId:"zh__sc-afc36c84-3"})`
  overflow: hidden;
  display: flex;

  height: 48px;
  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,u=o.default.button.withConfig({componentId:"zh__sc-afc36c84-4"})`
  cursor: pointer;

  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;

  min-width: 96px;
  height: 100%;
  padding: 0 16px;
  border: none;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  color: ${({$active:e})=>e?"#fff":"#464c53"};
  white-space: nowrap;

  background: ${({$active:e})=>e?"#4f39f6":"transparent"};
`,x=(0,o.default)(c.default.Button.Outlined).withConfig({componentId:"zh__sc-afc36c84-5"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;var g=e.i(26546),m=e.i(71723);let b=(e,t)=>12*e+(t-1),_=function(e){let{targetYearMonth:n,onShiftMonth:i}=e,d=(e=>{if("string"!=typeof e)return null;let t=e.match(/^(\d{4})-(\d{2})$/);if(null===t)return null;let n=Number(t[1]),i=Number(t[2]);return Number.isNaN(n)||Number.isNaN(i)||i<1||i>12?null:{year:n,month:i}})(n),o=new Date,l=d?.year??o.getFullYear(),s=d?.month??o.getMonth()+1,c=l-50,r=Array.from({length:l+50-c+1},(e,t)=>c+t);return(0,t.jsxs)(w,{children:[(0,t.jsx)(v,{type:"button",onClick:()=>i(-1),children:(0,t.jsx)(g.ChevronLeft,{size:18,strokeWidth:2.5})}),(0,t.jsxs)(j,{children:[(0,t.jsx)(I,{value:String(l),onChange:e=>{let t;0!=(t=b(Number(e.currentTarget.value),s)-b(l,s))&&i(t)},children:r.map(e=>(0,t.jsxs)("option",{value:e,children:[e,"년"]},e))}),(0,t.jsx)(I,{value:String(s),onChange:e=>{let t;0!=(t=b(l,Number(e.currentTarget.value))-b(l,s))&&i(t)},children:Array.from({length:12},(e,t)=>t+1).map(e=>(0,t.jsxs)("option",{value:e,children:[e,"월"]},e))})]}),(0,t.jsx)(v,{type:"button",onClick:()=>i(1),children:(0,t.jsx)(m.ChevronRight,{size:18,strokeWidth:2.5})})]})},w=o.default.div.withConfig({componentId:"zh__sc-f9837b7b-0"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  height: 48px;
  border-bottom: 1px solid #e3e5ed;
`,j=o.default.div.withConfig({componentId:"zh__sc-f9837b7b-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,I=(0,o.default)(c.default.Input.Select).withConfig({componentId:"zh__sc-f9837b7b-2"})`
  width: 116px;
  height: 36px;
  font-weight: 700;
`,v=o.default.button.withConfig({componentId:"zh__sc-f9837b7b-3"})`
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border: 1px solid #d1d5db;
  border-radius: 50%;

  color: #0a0a0a;

  background: #fff;
`;var C=e.i(67096),z=e.i(33832),y=e.i(553),$=e.i(21771),D=e.i(44534);let E={FIRST_MONTH:{short:"첫 이용 달 · 회차만큼",detail:"처음 이용하는 달이라 제공한 회차만큼만 받아요."},EARLY_TERMINATION:{short:"중도종료 달 · 회차만큼",detail:"중도종료한 달이라 제공한 회차만큼만 받아요."},FULL:{short:"월 전액 · 50% 초과 제공",detail:"기준 회차의 50%를 넘게 제공해 한 달 본인부담금을 모두 받아요(예: 8회 중 5~8회 → 8회분). 이용자 사정으로 빠진 회차는 환급하지 않고, 기관 사정이면 결제 관리에서 따로 환급해요."},HALF:{short:"월 절반 · 50% 이하 제공",detail:"기준 회차의 50% 이하만 제공해 한 달 본인부담금의 절반을 받아요(예: 8회 중 1~4회 → 4회분)."},NONE:{short:"제공 없음",detail:"제공한 회차가 없어 받지 않아요."}};function O(e){return void 0===e?"-":`${e.toLocaleString("ko-KR")}원`}function S(e){let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let n=t.getMonth()+1,i=t.getDate(),d=["일","월","화","수","목","금","토"][t.getDay()];return`${n}/${i} ${d}`}var N=e.i(24655),T=e.i(84673);function R(e){return`${e.toLocaleString("ko-KR")} 원`}function k(e){return null===e||""===e.trim()?"-":e.replaceAll("-",".")}let P=function(e){let{clientName:n,contractSummaries:i,totalExpectedAmount:d,onClose:o}=e;return(0,t.jsx)(A,{children:(0,t.jsxs)(V,{role:"dialog","aria-modal":"true","aria-labelledby":"amount-detail-title",children:[(0,t.jsx)(L,{children:(0,t.jsx)(M,{id:"amount-detail-title",children:"금액 산출 상세 내역"})}),(0,t.jsx)(q,{children:(0,t.jsxs)(F,{children:[(0,t.jsx)(B,{children:n}),(0,t.jsxs)(U,{children:[(0,t.jsx)(H,{children:"총 합계 금액"}),(0,t.jsx)(G,{children:R(d)})]}),(0,t.jsx)(Y,{}),(0,t.jsxs)(K,{children:[(0,t.jsx)(W,{children:"산출 상세 내역"}),i.map((e,n)=>{var i;return(0,t.jsxs)(Z,{children:[(0,t.jsxs)(Q,{children:[(0,t.jsx)(X,{children:`${n+1}차 계약`}),n>0&&(0,t.jsx)(X,{children:"재계약"}),(0,t.jsxs)(J,{children:[e.grade,"등급 단가 적용"]})]}),(0,t.jsxs)(ee,{children:[(0,t.jsx)(et,{children:"계약 기간"}),(0,t.jsxs)(en,{children:[k(e.contractStartDate)," ~"," ",k(e.contractEndDate)]})]}),(0,t.jsxs)(ee,{children:[(0,t.jsx)(et,{children:"적용 회차"}),(0,t.jsx)(en,{children:0===(i=e.appliedSequences).length?"-":`${i.join(",")} 회차`})]}),(0,t.jsx)(Y,{}),(0,t.jsxs)(ee,{children:[(0,t.jsx)(et,{children:`제공 ${e.providedCount}회 청구액`}),(0,t.jsx)(ei,{children:R(e.expectedTotalAmount)})]}),(0,t.jsxs)(ee,{children:[(0,t.jsx)(et,{children:"ㄴ 정부지원금"}),(0,t.jsx)(ei,{children:R(e.expectedGovernmentSupportAmount)})]}),(0,t.jsxs)(ee,{children:[(0,t.jsxs)(et,{children:["ㄴ 본인부담금",null===e.copaymentBasis?"":` (${E[e.copaymentBasis].short})`]}),(0,t.jsx)(ei,{children:R(e.expectedCopaymentAmount)})]})]},e.contractId)})]})]})}),(0,t.jsxs)(ed,{children:[(0,t.jsxs)(eo,{type:"button",onClick:o,children:[(0,t.jsx)(T.default,{sx:{fontSize:20}}),"닫기"]}),(0,t.jsxs)(el,{type:"button",onClick:o,children:[(0,t.jsx)(N.default,{sx:{fontSize:20}}),"확인하기"]})]})]})})},A=o.default.div.withConfig({componentId:"zh__sc-1a56355b-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 48%);
`,V=o.default.section.withConfig({componentId:"zh__sc-1a56355b-1"})`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  width: 455px;
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 32px);
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 12px 16px rgb(0 0 0 / 8%);
`,L=o.default.header.withConfig({componentId:"zh__sc-1a56355b-2"})`
  display: flex;
  align-items: center;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
`,M=o.default.h2.withConfig({componentId:"zh__sc-1a56355b-3"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #101828;
  letter-spacing: -0.4395px;
`,q=o.default.div.withConfig({componentId:"zh__sc-1a56355b-4"})`
  overflow-y: auto;
  padding: 24px;
  background: #f9fafb;
`,F=o.default.section.withConfig({componentId:"zh__sc-1a56355b-5"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 12px;
  border: 1px solid #e3e5ed;
  border-radius: 8px;

  background: #fff;
`,B=o.default.p.withConfig({componentId:"zh__sc-1a56355b-6"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #292b36;
`,U=o.default.div.withConfig({componentId:"zh__sc-1a56355b-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`,H=o.default.span.withConfig({componentId:"zh__sc-1a56355b-8"})`
  color: #636978;
`,G=o.default.span.withConfig({componentId:"zh__sc-1a56355b-9"})`
  color: #4f39f6;
`,Y=o.default.div.withConfig({componentId:"zh__sc-1a56355b-10"})`
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,K=o.default.div.withConfig({componentId:"zh__sc-1a56355b-11"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,W=o.default.h3.withConfig({componentId:"zh__sc-1a56355b-12"})`
  margin: 0;

  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: #292b36;
`,Z=o.default.div.withConfig({componentId:"zh__sc-1a56355b-13"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Q=o.default.div.withConfig({componentId:"zh__sc-1a56355b-14"})`
  overflow: hidden;
  display: flex;
  gap: 4px;
  align-items: center;

  white-space: nowrap;
`,X=o.default.span.withConfig({componentId:"zh__sc-1a56355b-15"})`
  flex-shrink: 0;

  padding: 4px 6px;
  border: 1px solid #667085;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #667085;
`,J=o.default.span.withConfig({componentId:"zh__sc-1a56355b-16"})`
  overflow: hidden;

  font-size: 14px;
  line-height: 20px;
  color: #636978;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ee=o.default.div.withConfig({componentId:"zh__sc-1a56355b-17"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 20px;

  font-size: 14px;
  line-height: 20px;
  color: #636978;
`,et=o.default.span.withConfig({componentId:"zh__sc-1a56355b-18"})`
  white-space: nowrap;
`,en=o.default.span.withConfig({componentId:"zh__sc-1a56355b-19"})`
  white-space: nowrap;
`,ei=o.default.span.withConfig({componentId:"zh__sc-1a56355b-20"})`
  font-weight: 600;
  color: #292b36;
  white-space: nowrap;
`,ed=o.default.footer.withConfig({componentId:"zh__sc-1a56355b-21"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
  border-top: 1px solid #e5e7eb;
`,eo=(0,o.default)(c.default.Button.Outlined).withConfig({componentId:"zh__sc-1a56355b-22"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
  border-color: #4f39f6;
  border-radius: 4px;

  font-size: 16px;
  line-height: 20px;
  color: #4f39f6;
`,el=(0,o.default)(c.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-1a56355b-23"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,es=function(e){let{schedule:n,isSubmitting:i,onClose:o,onConfirm:l}=e,s=(0,d.useMemo)(()=>n.map(e=>({value:String(e.sequence),label:`${e.sequence}회차 (${S(e.serviceDate)})`})),[n]),[c,r]=(0,d.useState)(s[0]?.value??null),a=null!==c&&s.some(e=>e.value===c)?c:s[0]?.value??null,h=!0===i||0===s.length||null===a;return(0,t.jsx)(ec,{children:(0,t.jsxs)(er,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(eh,{children:"선택한 회차를 일괄 [제공 완료] 처리할까요?"}),(0,t.jsxs)(ef,{children:[(0,t.jsx)(ep,{children:"회차 선택"}),(0,t.jsx)(eu,{value:a??"",onChange:e=>r(e.currentTarget.value),disabled:0===s.length,children:s.map(e=>(0,t.jsx)("option",{value:e.value,children:e.label},e.value))})]}),(0,t.jsxs)(ex,{children:["선택한 회차에서 [미입력] 상태인 이용자를 [완료]로 바꿔요. 해지한 이용자는 해지일 전 회차만 바뀌어요.",(0,t.jsx)("br",{}),"[미제공] 또는 [종료] 상태의 이용자는 변경되지 않습니다."]})]}),(0,t.jsxs)(eg,{children:[(0,t.jsx)(em,{type:"button",onClick:o,disabled:i,children:"취소"}),(0,t.jsx)(eb,{type:"button",disabled:h,onClick:()=>{null!==a&&l(Number(a))},children:"완료 처리하기"})]})]})})},ec=o.default.div.withConfig({componentId:"zh__sc-a08696c9-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,er=o.default.div.withConfig({componentId:"zh__sc-a08696c9-1"})`
  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,ea=o.default.div.withConfig({componentId:"zh__sc-a08696c9-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`,eh=o.default.h3.withConfig({componentId:"zh__sc-a08696c9-3"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,ef=o.default.div.withConfig({componentId:"zh__sc-a08696c9-4"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,ep=o.default.div.withConfig({componentId:"zh__sc-a08696c9-5"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,eu=(0,o.default)(c.default.Input.Select).withConfig({componentId:"zh__sc-a08696c9-6"})`
  height: 36px;
`,ex=o.default.p.withConfig({componentId:"zh__sc-a08696c9-7"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,eg=o.default.div.withConfig({componentId:"zh__sc-a08696c9-8"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,em=(0,o.default)(c.default.Button.Outlined).withConfig({componentId:"zh__sc-a08696c9-9"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,eb=(0,o.default)(c.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-a08696c9-10"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;var e_=e.i(88552),ew=e.i(15695),ej=e.i(8179);let eI=["PROVIDED","NOT_PROVIDED","PENDING"],ev=[],eC={PROVIDED:"제공완료",NOT_PROVIDED:"미제공",PENDING:"미입력"},ez=[{value:"HOSPITALIZATION",label:"병원 입원"},{value:"AWAY_OR_OUTING",label:"부재중 또는 외출"},{value:"CLIENT_REFUSAL",label:"본인 거부"}];function ey(e){return"NOT_PROVIDED"===e?ez[0].value:null}let e$=function(e){var n,i;let{selectedStatusCell:o,onClose:l,onSubmit:s,isSubmitting:c}=e,r=null===(n=o)?null:!0===n.isPending?"PENDING":null===n.status?null:!0!=("PROVIDED"===(i=n.status)||"NOT_PROVIDED"===i)?null:n.status,a=null===o||"NOT_PROVIDED"!==o.status?null:o.reason??ey("NOT_PROVIDED"),[h,f]=(0,d.useState)(()=>r),[p,u]=(0,d.useState)(()=>a);if(null===o)return null;let x=function(e){if(null===e.status)return ev;let{status:t}=e;return"OUT_OF_PERIOD"===t||"OUT_OF_PERIOD_RECORDED"===t?eI:ev}(o),g=h!==r||"NOT_PROVIDED"===h&&p!==a,m=async()=>{if(null!==h){if("PROVIDED"===h)return void await s({provided:!0,reason:null,pending:!1});if("NOT_PROVIDED"===h){let e=null===p?ez[0].value:p;await s({provided:!1,reason:e,pending:!1});return}"PENDING"===h&&await s({pending:!0})}};return(0,t.jsx)(eD,{children:(0,t.jsxs)(eE,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(eO,{children:[(0,t.jsx)(eS,{children:"배달 상태 입력하기"}),(0,t.jsxs)(eN,{type:"button",onClick:l,children:[(0,t.jsx)(ej.X,{size:16}),"닫기"]})]}),(0,t.jsx)(eT,{children:(0,t.jsx)(eR,{children:eI.map(e=>{let n=x.includes(e),i=h===e,d="NOT_PROVIDED"===e?ez:[],o=("PROVIDED"===e||"NOT_PROVIDED"===e||"PENDING"===e)&&!0!==n;return(0,t.jsxs)(ek,{$active:i,$disabled:n,onClick:()=>{!0===o&&(f(e),u(ey(e)))},children:[(0,t.jsx)(eP,{$disabled:n,children:eC[e]}),d.length>0&&(0,t.jsx)(eA,{children:d.map(i=>(0,t.jsxs)(eV,{onClick:t=>{!0===o&&(t.stopPropagation(),f(e),u(i.value))},children:[(0,t.jsx)(eL,{"aria-label":i.label,checked:h===e&&p===i.value,disabled:!0!==o,onChange:()=>{!0===o&&(f(e),u(i.value))}}),(0,t.jsx)(eM,{$disabled:n,children:i.label})]},`${e}-${i.value}`))}),(0,t.jsxs)(eq,{$active:i,$disabled:n,children:["선택",(0,t.jsx)(e_.default,{sx:{fontSize:16}})]})]},e)})})}),(0,t.jsx)(eF,{children:(0,t.jsxs)(eB,{type:"button",onClick:()=>void m(),disabled:c||null===h||!0!==g,children:[(0,t.jsx)(ew.Check,{size:16}),"저장하기"]})})]})})},eD=o.default.div.withConfig({componentId:"zh__sc-d2db635d-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,eE=o.default.div.withConfig({componentId:"zh__sc-d2db635d-1"})`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  width: 746px;
  max-width: calc(100vw - 32px);
  border: 1px solid #d0d5dd;
  border-radius: 8px;

  background: #fff;
`,eO=o.default.div.withConfig({componentId:"zh__sc-d2db635d-2"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 69px;
  padding: 0 16px;
  border-bottom: 1px solid #eaecf0;
`,eS=o.default.h3.withConfig({componentId:"zh__sc-d2db635d-3"})`
  margin: 0;

  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  color: #101828;
`,eN=(0,o.default)(c.default.Button.Outlined).withConfig({componentId:"zh__sc-d2db635d-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,eT=o.default.div.withConfig({componentId:"zh__sc-d2db635d-5"})`
  padding: 32px 24px;
  background: #f9fafb;
`,eR=o.default.div.withConfig({componentId:"zh__sc-d2db635d-6"})`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
`,ek=o.default.div.withConfig({componentId:"zh__sc-d2db635d-7"})`
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};

  display: flex;
  flex-direction: column;

  height: 150px;
  padding: 16px;
  border: 1px solid ${({$active:e})=>e?"#4f39f6":"#d0d5dd"};
  border-radius: 8px;

  background: ${({$disabled:e,$active:t})=>e?"#fff":t?"#f7f5ff":"#fff"};
`,eP=o.default.div.withConfig({componentId:"zh__sc-d2db635d-8"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  color: ${({$disabled:e})=>e?"#d9d9d9":"#0a0a0a"};
`,eA=o.default.div.withConfig({componentId:"zh__sc-d2db635d-9"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
`,eV=o.default.div.withConfig({componentId:"zh__sc-d2db635d-10"})`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`,eL=(0,o.default)(c.default.Input.Radio).withConfig({componentId:"zh__sc-d2db635d-11"})`
  width: 14px;
  height: 14px;

  &:checked {
    border-color: #256ef4;
    background: #256ef4;
    box-shadow: inset 0 0 0 2.5px #fff;
  }

  &:disabled {
    border-color: #b9c2cc;
    background: #d5dbe1;
  }

  &:disabled:checked {
    border-color: #b9c2cc;
    background: #b9c2cc;
    box-shadow: inset 0 0 0 2.5px #d5dbe1;
  }
`,eM=o.default.span.withConfig({componentId:"zh__sc-d2db635d-12"})`
  font-size: 14px;
  color: ${({$disabled:e})=>e?"#d9d9d9":"#0a0a0a"};
`,eq=o.default.div.withConfig({componentId:"zh__sc-d2db635d-13"})`
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: flex-end;

  margin-top: auto;

  font-size: 16px;
  line-height: 16px; /* 100% */
  color: ${({$active:e,$disabled:t})=>t?"#d0d5dd":"#4f39f6"};
  letter-spacing: -1px;
`,eF=o.default.div.withConfig({componentId:"zh__sc-d2db635d-14"})`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 68px;
  padding: 0 16px;
  border-top: 1px solid #eaecf0;
`,eB=(0,o.default)(c.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d2db635d-15"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,eU={managementNumber:"desc",name:"asc"},eH={PROVIDED:"완료",NOT_PROVIDED:"미제공",OUT_OF_PERIOD:"-",OUT_OF_PERIOD_RECORDED:"에러 : 기간 외 입력됨"},eG={HOSPITALIZATION:"병원 입원",AWAY_OR_OUTING:"부재중/외출",CLIENT_REFUSAL:"본인 거부"};function eY(e){return!1===e.isPending}function eK(e){return void 0!==e&&(!0===e.isPending||"PROVIDED"===e.status||"NOT_PROVIDED"===e.status)}function eW(e,t,n){if("OUT_OF_PERIOD"!==e)return eH[e];let{firstPatchableIndex:i,lastPatchableIndex:d}=n;return null!==i&&t<i?"/":null!==d&&t>d?"종료":eH[e]}function eZ(e,t,n){return"미입력"===n?"#45464E":"/"===n?"#b1b8be":"종료"===n?"PRESSED"===t?"#47574f":"#5a6b62":"PROVIDED"===e?"#027a48":"NOT_PROVIDED"===e?"#b42318":"#667085"}function eQ(e,t,n){return"미입력"===n?"HOVER"===t?"#F9FAFB":"PRESSED"===t?"#F2F4F7":"#ffffff":"/"===n?"HOVER"===t?"#f9fafb":"PRESSED"===t?"#f2f4f7":"#ffffff":"종료"===n?"HOVER"===t?"#e5ebe7":"PRESSED"===t?"#d8e1db":"#eff3f0":"PROVIDED"===e?"HOVER"===t?"#e2f3e9":"PRESSED"===t?"#d8e9df":"#ecfdf3":"NOT_PROVIDED"===e?"HOVER"===t?"#f4e9e8":"PRESSED"===t?"#eadfde":"#fef3f2":"#fff"}function eX({label:e,width:n,sortValue:i,currentSortKey:d,currentSortOrder:o,onSort:l}){let s=d===i,c=s?o:eU[i],r=s?"#131416":"#9ca3af";return(0,t.jsx)(tt,{$width:n,children:(0,t.jsx)(td,{type:"button",onClick:()=>l(i),children:(0,t.jsxs)(to,{children:[(0,t.jsx)(tl,{children:e}),(0,t.jsx)(ts,{children:"desc"===c?(0,t.jsx)(C.default,{sx:{fontSize:14,color:r}}):(0,t.jsx)(z.default,{sx:{fontSize:14,color:r}})})]})})})}let eJ=function(e){let{rows:n,schedule:i,sortKey:o,sortOrder:l,onSort:s,onPatchCell:c,onPatchRecords:r,scheduleConfirmed:a,onClickSchedule:h}=e,[f,p]=(0,d.useState)("ALL"),[u,x]=(0,d.useState)(""),[g,m]=(0,d.useState)(null),[b,_]=(0,d.useState)(!1),[w,j]=(0,d.useState)(!1),[I,v]=(0,d.useState)(!1),[C,z]=(0,d.useState)(null),N=(0,d.useMemo)(()=>n.map(e=>{let t,n,d=(t=null,n=null,i.forEach((i,d)=>{void 0!==e.cells.find(e=>e.sequence===i.sequence&&e.serviceDate===i.serviceDate&&void 0!==e&&!0!==e.isPending&&("PROVIDED"===e.status||"NOT_PROVIDED"===e.status))&&(null===t&&(t=d),n=d)}),{firstPatchableIndex:t,lastPatchableIndex:n});return{...e,_searchable:D.default.create(e.clientName),_patchableRange:d,_isTerminated:i.some((t,n)=>{let i=e.cells.find(e=>e.sequence===t.sequence&&e.serviceDate===t.serviceDate);return void 0!==i&&!0===eY(i)&&"종료"===eW(i.status,n,d)})}}),[n,i]),T=(0,d.useMemo)(()=>N.filter(e=>!0===e._isTerminated).length,[N]),R=(0,d.useMemo)(()=>N.length-T,[N,T]),k=(0,d.useMemo)(()=>N.filter(e=>!0===D.default.isMatch(e._searchable,u)&&("ACTIVE"===f?!0!==e._isTerminated:"TERMINATED"!==f||!0===e._isTerminated)),[N,f,u]),A=(0,d.useMemo)(()=>i.filter(e=>N.some(t=>t.cells.some(t=>t.sequence===e.sequence&&t.serviceDate===e.serviceDate&&!0===t.isPending))),[N,i]),V=i.length>0?i.length:8,L=async e=>{if(null===e)return;let t=i.find(t=>t.sequence===e),n=A.find(t=>t.sequence===e);if(void 0===t||void 0===n)return;let d=N.flatMap(e=>{let n=e.cells.find(e=>e.sequence===t.sequence&&e.serviceDate===t.serviceDate);return void 0===n||!0!==n.isPending?[]:[{contractId:n.contractId,serviceDate:n.serviceDate,pending:!1,provided:!0,reason:null}]});if(0===d.length)return void j(!1);v(!0);let o=await r(d);v(!1),!0===o&&j(!1)},M=async e=>{if(null===g)return;let t=null;if(!1===e.pending&&!0===e.provided&&(t={contractId:g.contractId,serviceDate:g.serviceDate,pending:!1,provided:!0,reason:null}),!1===e.pending&&!1===e.provided&&null!==e.reason&&(t={contractId:g.contractId,serviceDate:g.serviceDate,pending:!1,provided:!1,reason:e.reason}),!0===e.pending&&(t={contractId:g.contractId,serviceDate:g.serviceDate,pending:!0}),null===t)return;_(!0);let n=await c(t);_(!1),!0===n&&m(null)};return(0,t.jsxs)(e0,{children:[(0,t.jsxs)(e1,{children:[(0,t.jsxs)(e2,{children:[(0,t.jsxs)(e6,{type:"button",$active:"ALL"===f,onClick:()=>p("ALL"),children:["전체 이용자 (",n.length,"명)"]}),(0,t.jsxs)(e6,{type:"button",$active:"ACTIVE"===f,onClick:()=>p("ACTIVE"),children:["계약중 (",R,"명)"]}),(0,t.jsxs)(e6,{type:"button",$active:"TERMINATED"===f,onClick:()=>p("TERMINATED"),children:["종료 (",T,"명)"]})]}),(0,t.jsxs)(e5,{children:[(0,t.jsxs)(e8,{children:[(0,t.jsx)(e3,{value:u,onChange:e=>x(e.currentTarget.value),placeholder:"이용자명 검색"}),(0,t.jsx)(e4,{children:(0,t.jsx)(y.Search,{color:"#0a0a0a",size:16})})]}),(0,t.jsx)(e7,{type:"button",onClick:()=>{j(!0)},disabled:!a||0===A.length||I,children:"선택 회차 전체 완료 처리"})]})]}),(0,t.jsx)(e9,{children:(0,t.jsxs)(te,{children:[(0,t.jsxs)("thead",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(tn,{$width:84,"aria-hidden":"true"}),(0,t.jsx)(tn,{$width:120,"aria-hidden":"true"}),(0,t.jsx)(tn,{$width:110,"aria-hidden":"true"}),(0,t.jsx)(ti,{colSpan:V,children:"회차별 제공일 및 제공 상태"}),(0,t.jsx)(tn,{$width:175,"aria-hidden":"true"}),(0,t.jsx)(tn,{$width:174,"aria-hidden":"true"}),(0,t.jsx)(tn,{$width:166,"aria-hidden":"true"}),(0,t.jsx)(tn,{$width:104,"aria-hidden":"true"}),(0,t.jsx)(tn,{$width:104,"aria-hidden":"true"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)(eX,{label:"관리번호",width:84,sortValue:"managementNumber",currentSortKey:o,currentSortOrder:l,onSort:s}),(0,t.jsx)(eX,{label:"성명",width:120,sortValue:"name",currentSortKey:o,currentSortOrder:l,onSort:s}),(0,t.jsx)(tt,{$width:110,children:"생년월일"}),i.length>0?i.map((e,n)=>(0,t.jsx)(tc,{$isFirstInSchedule:0===n,$isLastInSchedule:n===i.length-1,children:(0,t.jsxs)(th,{type:"button",title:"이 달 식단설정으로 이동",onClick:h,children:[(0,t.jsxs)(tr,{children:[e.sequence,"회차"]}),(0,t.jsx)(ta,{$unconfirmed:!a,children:a?S(e.serviceDate):"일정 없음"})]})},`${e.sequence}-${e.serviceDate}`)):Array.from({length:V},(e,n)=>(0,t.jsx)(tc,{$isFirstInSchedule:0===n,$isLastInSchedule:n===V-1,children:(0,t.jsxs)(th,{type:"button",title:"이 달 식단설정으로 이동",onClick:h,children:[(0,t.jsxs)(tr,{children:[n+1,"회차"]}),(0,t.jsx)(ta,{$unconfirmed:!0,children:"일정 없음"})]})},`empty-schedule-header-${n}`)),(0,t.jsx)(tt,{$width:175,children:"제공 횟수"}),(0,t.jsx)(tt,{$width:174,children:"바우처 등급"}),(0,t.jsx)(tt,{$width:166,children:"예상 총액"}),(0,t.jsx)(tt,{$width:104,children:"정부지원금"}),(0,t.jsx)(tt,{$width:104,children:"본인부담금"})]})]}),(0,t.jsxs)("tbody",{children:[k.map(e=>{var n;let d=e._patchableRange,o=e.contractSummaries??[],l=o.length>1&&new Set(o.map(e=>e.grade)).size>1;return(0,t.jsxs)(tf,{children:[(0,t.jsx)(tp,{$width:84,children:e.managementNumber??"-"}),(0,t.jsx)(tp,{$width:120,children:(0,t.jsxs)(tu,{children:[(0,t.jsx)("span",{children:e.clientName}),(0,t.jsx)(tx,{$terminated:e._isTerminated,children:e._isTerminated?"종료":"계약중"})]})}),(0,t.jsx)(tp,{$width:110,children:null===(n=e.birthDate)||!0!==$.default.is(n)?"-":n.replaceAll("-",".")}),i.length>0?i.map((n,o)=>{let l=e.cells.find(e=>e.sequence===n.sequence&&e.serviceDate===n.serviceDate),s=i[o-1],c=void 0===s?void 0:e.cells.find(e=>e.sequence===s.sequence&&e.serviceDate===s.serviceDate),r=e.contractSummaries??[],h=r.length>1,f=void 0===l||!0!==h?-1:r.findIndex(e=>e.contractId===l.contractId),p=h&&void 0!==l&&void 0!==c&&l.contractId!==c.contractId,u=l&&eY(l)?eW(l.status,o,d):void 0,x=l&&!1===l.isPending&&"NOT_PROVIDED"===l.status&&null!==l.reason?eG[l.reason]??null:null,g=l?.isPending===!0?"미입력":x??u,b=f>=0&&void 0!==g&&"/"!==g&&"종료"!==g?`${g}(${f+1}차)`:g,_="/"===g;return(0,t.jsx)(tg,{$status:l&&eY(l)?l.status:void 0,$displayLabel:g,$clickable:a&&eK(l),$isLastInSchedule:o===i.length-1,onClick:()=>{if(void 0!==l&&a&&!0===eK(l)){if(!0===l.isPending)return void m({contractId:l.contractId,clientName:e.clientName,sequence:l.sequence,serviceDate:l.serviceDate,isPending:!0,status:null,reason:null});m({contractId:l.contractId,clientName:e.clientName,sequence:l.sequence,serviceDate:l.serviceDate,isPending:!1,status:l.status,reason:"NOT_PROVIDED"===l.status?l.reason:null})}},children:l?(0,t.jsxs)(tb,{children:[p&&(0,t.jsxs)(t_,{children:["재",(0,t.jsx)("br",{}),"계",(0,t.jsx)("br",{}),"약"]}),(0,t.jsx)(tm,{children:(0,t.jsx)(tw,{$isSlashLabel:_,children:b})})]}):"-"},`${e.contractId}-${n.sequence}`)}):Array.from({length:V},(n,i)=>(0,t.jsx)(tg,{$clickable:!1,$isLastInSchedule:i===V-1,children:"-"},`${e.contractId}-empty-schedule-${i}`)),(0,t.jsx)(tC,{$width:175,children:void 0!==e.contractSummaries&&e.contractSummaries.length>1?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(tz,{children:[e.providedCount,"회 제공 / 총 ",e.cells.length,"회"]}),(0,t.jsx)(ty,{children:e.contractSummaries.map((e,t)=>`${t+1}차(${e.providedCount}회)`).join(" + ")})]}):`${e.providedCount}회 제공 / 총 ${e.cells.length}회`}),(0,t.jsx)(tj,{$width:174,children:l?(0,t.jsx)(t$,{children:o.map((e,n)=>(0,t.jsxs)(tD,{children:[n>0?"→ ":"",e.grade,"등급(",n+1,"차)"]},e.contractId))}):`${e.grade}등급`}),(0,t.jsx)(tj,{$width:166,children:(0,t.jsxs)(tI,{children:[(0,t.jsx)("span",{children:O(e.expectedTotalAmount)}),(0,t.jsx)(tv,{type:"button",$visible:o.length>1,"aria-hidden":o.length<=1,onClick:()=>{o.length<=1||z({clientName:e.clientName,contractSummaries:o,totalExpectedAmount:e.expectedTotalAmount})},children:"상세보기"})]})}),(0,t.jsx)(tE,{$width:104,children:O(e.expectedGovernmentSupportAmount)}),(0,t.jsx)(tO,{$width:104,children:null===e.copaymentBasis||void 0===e.copaymentBasis?O(e.expectedCopaymentAmount):(0,t.jsxs)(tS,{title:E[e.copaymentBasis].detail,children:[(0,t.jsx)("span",{children:O(e.expectedCopaymentAmount)}),(0,t.jsx)(tN,{children:E[e.copaymentBasis].short})]})})]},e.contractId)}),0===k.length&&(0,t.jsx)(tf,{children:(0,t.jsx)(tT,{colSpan:8+V,children:"표시할 이용자 데이터가 없습니다."})})]})]})}),null!==g&&(0,t.jsx)(e$,{selectedStatusCell:g,onClose:()=>{b||m(null)},onSubmit:M,isSubmitting:b},`${g.contractId}-${g.sequence}-${g.serviceDate}`),w&&(0,t.jsx)(es,{schedule:A,isSubmitting:I,onClose:()=>{I||j(!1)},onConfirm:e=>void L(e)}),null!==C&&(0,t.jsx)(P,{clientName:C.clientName,contractSummaries:C.contractSummaries,totalExpectedAmount:C.totalExpectedAmount,onClose:()=>z(null)})]})},e0=o.default.section.withConfig({componentId:"zh__sc-2bddfd82-0"})`
  overflow: hidden;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
`,e1=o.default.div.withConfig({componentId:"zh__sc-2bddfd82-1"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,e2=o.default.div.withConfig({componentId:"zh__sc-2bddfd82-2"})`
  overflow: hidden;
  display: flex;
  align-items: stretch;

  border: 1px solid #b1b8be;
  border-radius: 8px;
`,e6=o.default.button.withConfig({componentId:"zh__sc-2bddfd82-3"})`
  cursor: pointer;

  height: 40px;
  padding: 0 16px;
  border-color: #b1b8be;
  border-style: solid;
  border-width: 0 1px 0 0;

  font-size: 16px;
  font-weight: 700;
  color: ${({$active:e})=>e?"#fff":"#464c53"};

  background: ${({$active:e})=>e?"#4f39f6":"#fff"};

  &:last-child {
    border-right: none;
  }
`,e5=o.default.div.withConfig({componentId:"zh__sc-2bddfd82-4"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,e8=o.default.label.withConfig({componentId:"zh__sc-2bddfd82-5"})`
  position: relative;
  width: 179px;
`,e3=(0,o.default)(c.default.Input.Text).withConfig({componentId:"zh__sc-2bddfd82-6"})`
  width: 100%;
  height: 40px;
  padding: 0 40px 0 16px;
  border-radius: 6px;

  font-size: 16px;
  color: #101828;
`,e4=o.default.span.withConfig({componentId:"zh__sc-2bddfd82-7"})`
  pointer-events: none;

  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;
`,e7=(0,o.default)(c.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-2bddfd82-8"})`
  display: flex;
  gap: 4px;
  align-items: center;
  align-self: stretch;

  padding: 8px 16px;
`,e9=o.default.div.withConfig({componentId:"zh__sc-2bddfd82-9"})`
  overflow: auto;
`,te=o.default.table.withConfig({componentId:"zh__sc-2bddfd82-10"})`
  table-layout: fixed;
  border-collapse: collapse;

  width: max-content;
  min-width: 100%;

  background: #fff;

  thead {
    border-bottom: 1px solid #e5e7eb;
  }
`,tt=o.default.th.withConfig({componentId:"zh__sc-2bddfd82-11"})`
  width: ${({$width:e})=>`${e??84}px`};
  min-width: ${({$width:e})=>`${e??84}px`};
  height: 48px;
  padding: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  color: #1c1d22;
  text-align: center;
  vertical-align: middle;

  background: #f8fafc;
`,tn=(0,o.default)(tt).withConfig({componentId:"zh__sc-2bddfd82-12"})`
  color: transparent;
`,ti=(0,o.default)(tt).withConfig({componentId:"zh__sc-2bddfd82-13"})`
  border-right: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  border-left: 1px solid #e5e7eb;
  background: #fff;
`,td=o.default.button.withConfig({componentId:"zh__sc-2bddfd82-14"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 0;
  border: none;

  font: inherit;
  color: inherit;

  background: transparent;
`,to=o.default.span.withConfig({componentId:"zh__sc-2bddfd82-15"})`
  position: relative;
  display: inline-flex;
  align-items: center;
`,tl=o.default.span.withConfig({componentId:"zh__sc-2bddfd82-16"})`
  display: inline-flex;
  align-items: center;
`,ts=o.default.span.withConfig({componentId:"zh__sc-2bddfd82-17"})`
  position: absolute;
  top: 50%;
  left: calc(100% + 2px);
  transform: translateY(-50%);

  display: inline-flex;
  align-items: center;
`,tc=(0,o.default)(tt).withConfig({componentId:"zh__sc-2bddfd82-18"})`
  width: 64px;
  min-width: 64px;
  height: 48px;
  padding: 0;
  border-right: ${({$isLastInSchedule:e})=>e?"1px solid #e5e7eb":"none"};
  border-left: ${({$isFirstInSchedule:e})=>e?"1px solid #e5e7eb":"none"};

  background: #f8fafc;
`,tr=o.default.div.withConfig({componentId:"zh__sc-2bddfd82-19"})`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.2;
  color: #1c1d22;
`,ta=o.default.div.withConfig({componentId:"zh__sc-2bddfd82-20"})`
  margin-top: 2px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({$unconfirmed:e})=>!0===e?"#b54708":"#1c1d22"};
`,th=o.default.button.withConfig({componentId:"zh__sc-2bddfd82-21"})`
  cursor: pointer;

  width: 100%;
  padding: 0;
  border: none;

  background: transparent;

  &:hover {
    text-decoration: underline;
  }
`,tf=o.default.tr.withConfig({componentId:"zh__sc-2bddfd82-22"})``,tp=o.default.td.withConfig({componentId:"zh__sc-2bddfd82-23"})`
  width: ${({$width:e})=>`${e??84}px`};
  min-width: ${({$width:e})=>`${e??84}px`};
  height: 52px;
  padding: 0;

  font-size: 16px;
  line-height: 1.2;
  color: #464c53;
  text-align: center;
  vertical-align: middle;
`,tu=o.default.div.withConfig({componentId:"zh__sc-2bddfd82-24"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
`,tx=o.default.span.withConfig({componentId:"zh__sc-2bddfd82-25"})`
  display: flex;
  flex-shrink: 0;

  padding: 4px 6px;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #fff;

  background: ${({$terminated:e})=>e?"#667085":"#008d4c"};
`,tg=(0,o.default)(tp).withConfig({componentId:"zh__sc-2bddfd82-26"})`
  cursor: ${({$clickable:e,$displayLabel:t})=>"종료"===t||"/"===t?"not-allowed":e?"pointer":"default"};

  width: 64px;
  min-width: 64px;
  padding: 0;
  border-top: 1px solid #e5e7eb;
  border-right: ${({$isLastInSchedule:e})=>e?"1px solid #e5e7eb":"none"};
  border-bottom: 1px solid #e5e7eb;
  border-left: 1px solid #e5e7eb;

  font-size: 12px;
  font-weight: 600;
  color: ${({$status:e,$displayLabel:t})=>eZ(e,"DEFAULT",t)};

  background: ${({$status:e,$displayLabel:t})=>eQ(e,"DEFAULT",t)};

  &:hover {
    color: ${({$status:e,$displayLabel:t})=>eZ(e,"HOVER",t)};
    background: ${({$status:e,$displayLabel:t})=>eQ(e,"HOVER",t)};
  }

  &:active {
    color: ${({$status:e,$displayLabel:t})=>eZ(e,"PRESSED",t)};
    background: ${({$status:e,$displayLabel:t})=>eQ(e,"PRESSED",t)};
  }
`,tm=o.default.div.withConfig({componentId:"zh__sc-2bddfd82-27"})`
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  gap: 0;
  align-items: center;
  justify-content: center;
`,tb=o.default.div.withConfig({componentId:"zh__sc-2bddfd82-28"})`
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100%;
`,t_=o.default.div.withConfig({componentId:"zh__sc-2bddfd82-29"})`
  display: flex;
  flex: 0 0 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2px 0;

  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
  color: #fff;

  background: #027a48;
`,tw=o.default.div.withConfig({componentId:"zh__sc-2bddfd82-30"})`
  font-size: ${({$isSlashLabel:e})=>e?"16px":"12px"};
  font-weight: 700;
  line-height: 16px;
`,tj=(0,o.default)(tp).withConfig({componentId:"zh__sc-2bddfd82-31"})`
  width: ${({$width:e})=>`${e??110}px`};
  min-width: ${({$width:e})=>`${e??110}px`};
`,tI=o.default.div.withConfig({componentId:"zh__sc-2bddfd82-32"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  width: 100%;
  padding: 8px 12px;
`,tv=(0,o.default)(c.default.Button.Outlined).withConfig({componentId:"zh__sc-2bddfd82-33"})`
  width: 58px;
  height: 28px;
  font-size: 12px;
  visibility: ${({$visible:e})=>e?"visible":"hidden"};
`,tC=(0,o.default)(tj).withConfig({componentId:"zh__sc-2bddfd82-34"})`
  width: 140px;
  min-width: 140px;
  line-height: 16px;
`,tz=o.default.div.withConfig({componentId:"zh__sc-2bddfd82-35"})`
  white-space: nowrap;
`,ty=o.default.div.withConfig({componentId:"zh__sc-2bddfd82-36"})`
  margin-top: 2px;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
`,t$=o.default.div.withConfig({componentId:"zh__sc-2bddfd82-37"})`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 16px;
  line-height: 16px;
  white-space: nowrap;
`,tD=o.default.div.withConfig({componentId:"zh__sc-2bddfd82-38"})``,tE=(0,o.default)(tj).withConfig({componentId:"zh__sc-2bddfd82-39"})`
  color: #1570ef;
`,tO=(0,o.default)(tj).withConfig({componentId:"zh__sc-2bddfd82-40"})`
  color: #d92d20;
`,tS=o.default.div.withConfig({componentId:"zh__sc-2bddfd82-41"})`
  cursor: help;

  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;

  padding: 6px 4px;
`,tN=o.default.span.withConfig({componentId:"zh__sc-2bddfd82-42"})`
  font-size: 11px;
  line-height: 14px;
  color: #667085;
  white-space: nowrap;
`,tT=o.default.td.withConfig({componentId:"zh__sc-2bddfd82-43"})`
  height: 56px;
  padding: 0;

  font-size: 13px;
  color: #667085;
  text-align: center;
  vertical-align: middle;
`,tR=function(e){let{summary:n}=e;return(0,t.jsxs)(tk,{children:[(0,t.jsxs)(tP,{children:[(0,t.jsx)(tA,{children:"당월 최종 예상 결제금액 합계"}),(0,t.jsx)(tV,{children:O(n?.totalExpectedAmount)})]}),(0,t.jsxs)(tP,{$tone:"blue",children:[(0,t.jsx)(tA,{children:"예상 정부지원금 합계"}),(0,t.jsx)(tV,{$tone:"blue",children:O(n?.totalExpectedGovernmentSupportAmount)})]}),(0,t.jsxs)(tP,{$tone:"red",children:[(0,t.jsx)(tA,{children:"예상 본인부담금 합계"}),(0,t.jsx)(tV,{$tone:"red",children:O(n?.totalExpectedCopaymentAmount)})]})]})},tk=o.default.section.withConfig({componentId:"zh__sc-c5ef9cf1-0"})`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
`,tP=o.default.article.withConfig({componentId:"zh__sc-c5ef9cf1-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: ${({$tone:e})=>"blue"===e?"#f5f8ff":"red"===e?"#ffeeed":"#f8f7f7"};
`,tA=o.default.p.withConfig({componentId:"zh__sc-c5ef9cf1-2"})`
  margin: 0;

  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  color: #475467;
`,tV=o.default.p.withConfig({componentId:"zh__sc-c5ef9cf1-3"})`
  margin: 0;

  font-size: 22px;
  font-weight: 700;
  line-height: 1.2;
  color: ${({$tone:e})=>"blue"===e?"#175cd3":"red"===e?"#d92d20":"#262936"};
`,tL=(0,n.observer)(function(){let e=s.default.client.serviceProvision,n=(0,i.useRouter)(),o=(0,i.useSearchParams)(),l=e.monthlyStatus,c=(0,d.useMemo)(()=>(e=>{if("string"!=typeof e)return null;let t=e.match(/^(\d{4})-(\d{2})$/);if(null===t)return null;let n=Number(t[1]),i=Number(t[2]);return Number.isNaN(n)||Number.isNaN(i)||i<1||i>12?null:new Date(n,i-1,1)})(o.get("targetYearMonth")),[o]),a=(0,d.useMemo)(()=>l?.summary??null,[l]),h=e.displayRows,f=(0,d.useMemo)(()=>l?.schedule??[],[l]);(0,d.useEffect)(()=>{e.setViewDate(c??new Date)},[c,e]),(0,d.useEffect)(()=>{let t=s.default.data.contract.list,n=t.query;n?.serviceType!==e.serviceType?t.setQuery({serviceType:e.serviceType}):("idle"===t.status||"error"===t.status)&&t.refetch()},[e.serviceType]);let p=async t=>{let[n,i]=await e.patchRecords(t);return null===n&&!0===i||(s.default.ui.layout.toast.error(n?.message??"저장에 실패했습니다."),!1)},u=()=>{let t=e.targetYearMonth;null!==t&&s.default.dietSetting.operation.openAtMonth(t),n.push("/diet-setting/operation")},x=async e=>p([e]),g=async e=>{let t=e[0];return void 0===t||p([t,...e.slice(1)])};return(0,t.jsxs)(tM,{children:[(0,t.jsx)(r,{serviceType:e.serviceType,onChangeServiceType:e.setServiceType}),(0,t.jsxs)(tq,{children:[(0,t.jsx)(_,{targetYearMonth:e.targetYearMonth,onShiftMonth:t=>e.shiftMonth(t)}),(0,t.jsxs)(tF,{children:[(0,t.jsx)(tR,{summary:a}),null!==l&&!1===l.scheduleConfirmed?(0,t.jsxs)(tB,{children:[(0,t.jsxs)("span",{children:["식단설정에서 해당 월의 제공일을 먼저 확정해주세요. 지금은 기관 기본 설정(월"," ",f.length,"회)으로 계산한 예상 금액이에요."]}),(0,t.jsx)(tU,{type:"button",onClick:u,children:"식단설정으로 이동"})]}):null,(0,t.jsx)(eJ,{rows:h,schedule:f,sortKey:e.sortKey,sortOrder:e.sortOrder,onSort:e.setSort,onPatchCell:x,onPatchRecords:g,scheduleConfirmed:l?.scheduleConfirmed!==!1,onClickSchedule:u})]})]})]})}),tM=(0,o.default)(l.default).withConfig({componentId:"zh__sc-6a336818-0"})`
  flex-direction: column;
  gap: 24px;
  padding: 24px;
`,tq=o.default.section.withConfig({componentId:"zh__sc-6a336818-1"})`
  overflow: hidden;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
`,tF=o.default.div.withConfig({componentId:"zh__sc-6a336818-2"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
`,tB=o.default.div.withConfig({componentId:"zh__sc-6a336818-3"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;

  padding: 12px 16px;
  border-radius: 8px;

  font-size: 14px;
  color: #93370d;

  background: #fef3c7;
`,tU=o.default.button.withConfig({componentId:"zh__sc-6a336818-4"})`
  cursor: pointer;

  flex-shrink: 0;

  padding: 6px 12px;
  border: 1px solid #f79009;
  border-radius: 6px;

  font-size: 13px;
  font-weight: 600;
  color: #93370d;

  background: #fff;
`;e.s(["default",0,tL],59701)}]);