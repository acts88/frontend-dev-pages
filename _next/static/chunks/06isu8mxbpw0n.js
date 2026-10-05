(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,36358,e=>{"use strict";var t=e.i(9735),i=e.i(24655),n=e.i(95649),r=e.i(2615),d=e.i(7744),l=e.i(38803),a=e.i(64954),s=e.i(41576),c=e.i(43174),o=e.i(21771);let{CONSECUTIVE_PAYMENT:h,OVERTIME_OVER_EIGHT_HOURS:x,EARLY_QUIT_ROUNDING:f,CARD_HOLDER_SUSPICIOUS_NORMAL_PAYMENT:p,CARD_HOLDER_SUSPICIOUS_RETRO_PAYMENT:u,NIGHT_PAYMENT:g,OVER_ONE_MINUTE:j,REST_TIME_VIOLATION:m,TERMINATED_SERVICE_PAYMENT:b}=s.default,w={[h]:"연속 결제 이상 결제 유형",[x]:"실근로시간 8시간 초과",[f]:"15분→30분 / 45→60분 인정",[p]:"카드 소지 의심: 정상 결제",[u]:"카드 소지 의심: 소급 결제",[g]:"카드 소지 의심: 새벽 결제",[j]:"1분 초과",[m]:"근로시간 대비 휴게시간 미달",[b]:"서비스 해지 기간 내 결제 내역 존재"};function y({children:e,checked:i,onChange:n}){return(0,t.jsxs)(O,{children:[(0,t.jsx)(E,{checked:i,onChange:n,"aria-label":"조건 적용"}),(0,t.jsx)("span",{children:e})]})}let v=l.default.section.withConfig({componentId:"zh__sc-274fde26-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: stretch;

  width: 100%;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;

  background: white;
`,_=l.default.div.withConfig({componentId:"zh__sc-274fde26-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`,S=l.default.button.withConfig({componentId:"zh__sc-274fde26-2"})`
  cursor: pointer;

  display: flex;
  gap: 8px;
  align-items: center;

  height: 40px;
  padding: 0 12px;
  border: 0;

  font-size: 14px;
  line-height: 20px;
  color: #646c7b;
  text-align: left;
  white-space: nowrap;

  strong {
    font-weight: 700;
    color: #131416;
  }
`,z=l.default.div.withConfig({componentId:"zh__sc-274fde26-3"})`
  display: ${({$isExpanded:e})=>e?"block":"none"};
`,C=l.default.span.withConfig({componentId:"zh__sc-274fde26-4"})`
  padding: 8px;
  border: 1px solid #4f39f6;
  border-radius: 99px;

  line-height: 16px;
  color: white;

  background: #4f39f6;
`,I=l.default.div.withConfig({componentId:"zh__sc-274fde26-5"})`
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,$=l.default.div.withConfig({componentId:"zh__sc-274fde26-6"})`
  display: flex;
  gap: 8px;
  align-items: center;

  height: 40px;
  margin: 8px 0;
  padding: 0 16px;
`,k=l.default.strong.withConfig({componentId:"zh__sc-274fde26-7"})`
  width: 226px;

  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #131416;
`,N=(0,l.default)(a.default.Input.Date).attrs({style:{textAlign:"center"}}).withConfig({componentId:"zh__sc-274fde26-8"})`
  width: 180px;
  height: 28px;
  font-size: 14px;
`,T=l.default.span.withConfig({componentId:"zh__sc-274fde26-9"})`
  font-size: 14px;
  color: #464c53;
`,D=l.default.div.withConfig({componentId:"zh__sc-274fde26-10"})`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 12px 16px;
`,M=l.default.div.withConfig({componentId:"zh__sc-274fde26-11"})`
  display: flex;
  flex-shrink: 0;
  gap: 12px;
  align-items: center;

  min-height: 36px;

  white-space: nowrap;
`,O=l.default.label.withConfig({componentId:"zh__sc-274fde26-12"})`
  display: flex;
  flex-shrink: 0;
  gap: 12px;
  align-items: center;

  width: 226px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #131416;
`,E=(0,l.default)(a.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-274fde26-13"})`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 4px;
`,A=l.default.span.withConfig({componentId:"zh__sc-274fde26-14"})`
  flex-shrink: 0;
  font-size: 14px;
  line-height: 20px;
  color: #464c53;
`,F=(0,l.default)(a.default.Input.Text).withConfig({componentId:"zh__sc-274fde26-15"})`
  flex-shrink: 0;

  width: 80px;
  height: 36px;
  padding: 4px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;

  font-size: 16px;
  line-height: 20px;
  text-align: center;
`,P=(0,l.default)(F).withConfig({componentId:"zh__sc-274fde26-16"})`
  width: 104px;
`,V=l.default.div.withConfig({componentId:"zh__sc-274fde26-17"})`
  display: ${({$isExpanded:e})=>e?"flex":"none"};
  align-items: center;
  justify-content: center;
  width: 100%;
`,H=(0,l.default)(a.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-274fde26-18"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 44px;
  padding: 8px 16px;
`,R=l.default.span.withConfig({componentId:"zh__sc-274fde26-19"})`
  width: 64px;
`;e.s(["default",0,function(){let[e,l]=(0,d.useState)(""),[a,O]=(0,d.useState)(""),[E,W]=(0,d.useState)(()=>new Set(Object.values(s.default))),X=c.default.data.serviceWorker.activityAnomalyReport,[Y,B]=(0,d.useState)(!0),L=e=>{W(t=>{let i=new Set(t);return i.has(e)?i.delete(e):i.add(e),i})};return(0,t.jsxs)(v,{children:[(0,t.jsxs)(_,{children:[(0,t.jsxs)(S,{type:"button","aria-expanded":Y,onClick:()=>B(e=>!e),children:[Y?(0,t.jsx)(r.default,{sx:{fontSize:24,color:"#131416"}}):(0,t.jsx)(n.default,{sx:{fontSize:24,color:"#131416"}}),(0,t.jsx)("strong",{children:"부정결제 의심 내역 결제 조건"}),(0,t.jsxs)(C,{children:[E.size,"개 적용 중"]}),(0,t.jsx)("span",{children:"아래에서 조건값을 확인하거나 수정할 수 있습니다."})]}),(0,t.jsxs)(z,{$isExpanded:Y,children:[(0,t.jsx)(I,{}),(0,t.jsxs)($,{children:[(0,t.jsx)(k,{children:"검색 기간"}),(0,t.jsx)(N,{value:e,onChange:l,showClearButton:!0}),(0,t.jsx)(T,{children:"~"}),(0,t.jsx)(N,{value:a,onChange:O,showClearButton:!0})]}),(0,t.jsxs)(D,{children:[(0,t.jsxs)(M,{children:[(0,t.jsx)(y,{checked:E.has(h),onChange:()=>L(h),children:w[h]}),(0,t.jsx)(A,{children:"동일 제공인력이 서로 다른 이용자에게 연속으로 결제한 서비스의 종료·시작 시간 차이가"}),(0,t.jsx)(F,{defaultValue:"5",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"분 이내 일 시"})]}),(0,t.jsxs)(M,{children:[(0,t.jsx)(y,{checked:E.has(x),onChange:()=>L(x),children:w[x]}),(0,t.jsx)(A,{children:"동일 제공인력의 일일 총 결제시간 합계가"}),(0,t.jsx)(F,{defaultValue:"8",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"시간을 초과할 시"})]}),(0,t.jsxs)(M,{children:[(0,t.jsx)(y,{checked:E.has(f),onChange:()=>L(f),children:w[f]}),(0,t.jsx)(A,{children:"실제 제공시간이"}),(0,t.jsx)(F,{defaultValue:"15",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"분 또는"}),(0,t.jsx)(F,{defaultValue:"45",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"분 단위로 종료되어, 결제시간이 각각 30분 또는 60분 단위로 인정된 경우"})]}),(0,t.jsxs)(M,{children:[(0,t.jsx)(y,{checked:E.has(p),onChange:()=>L(p),children:w[p]}),(0,t.jsx)(A,{children:"승인 일시가 서비스 시작"}),(0,t.jsx)(F,{defaultValue:"30",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"분 전보다 이르거나, 서비스 종료"}),(0,t.jsx)(F,{defaultValue:"30",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"분 후보다 늦을 시"})]}),(0,t.jsxs)(M,{children:[(0,t.jsx)(y,{checked:E.has(u),onChange:()=>L(u),children:w[u]}),(0,t.jsx)(A,{children:"승인 일시가 서비스 시작"}),(0,t.jsx)(F,{defaultValue:"30",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"분 전보다 이르거나, 서비스 종료"}),(0,t.jsx)(F,{defaultValue:"30",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"분 후보다 늦을 시"})]}),(0,t.jsxs)(M,{children:[(0,t.jsx)(y,{checked:E.has(g),onChange:()=>L(g),children:w[g]}),(0,t.jsx)(A,{children:"승인 일시가"}),(0,t.jsx)(P,{defaultValue:"00:00",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(T,{children:"~"}),(0,t.jsx)(P,{defaultValue:"06:00",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"사이에 발생했을 시"})]}),(0,t.jsxs)(M,{children:[(0,t.jsx)(y,{checked:E.has(j),onChange:()=>L(j),children:w[j]}),(0,t.jsx)(A,{children:"제공인력의 일일 총 근로시간이"}),(0,t.jsx)(F,{defaultValue:"4",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"시간을"}),(0,t.jsx)(F,{defaultValue:"1",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"분 이상 초과했으나 휴게시간이 없을 시"})]}),(0,t.jsxs)(M,{children:[(0,t.jsx)(y,{checked:E.has(m),onChange:()=>L(m),children:w[m]}),(0,t.jsx)(A,{children:"일일 총 근로시간이"}),(0,t.jsx)(F,{defaultValue:"4",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"시간을 초과하고 휴게시간이"}),(0,t.jsx)(F,{defaultValue:"30",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"분 미만이거나,"}),(0,t.jsx)(F,{defaultValue:"8",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"시간을 초과하고 휴게시간이"}),(0,t.jsx)(F,{defaultValue:"30",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"분 미만일 시"})]}),(0,t.jsx)(M,{children:(0,t.jsx)(y,{checked:E.has(b),onChange:()=>L(b),children:w[b]})})]})]})]}),(0,t.jsx)(V,{$isExpanded:Y,children:(0,t.jsxs)(H,{type:"button",disabled:"loading"===X.status||0===E.size,onClick:()=>{X.setQuery({from:o.default.is(e)?e:void 0,to:o.default.is(a)?a:void 0,categories:[...E]})},children:[(0,t.jsx)(i.default,{sx:{fontSize:20}}),(0,t.jsx)(R,{children:"검색"})]})})]})}])},99840,e=>{"use strict";var t=e.i(9735),i=e.i(74483);e.i(3159);var n=e.i(46907),r=e.i(7744),d=e.i(38803),l=e.i(43174),a=e.i(88552),s=e.i(69268);let c=[{header:"일자",width:85},{header:"대상자명",width:120},{header:"승인일시",width:185},{header:"시작시간",width:185},{header:"종료시간",width:185},{header:"결제시간",width:130},{header:"결제구분",width:150},{header:"총 제공시간\n(사회+신체+가사)",width:185},{header:"검색 결과",width:270}],o={consecutivePayment:"① 연속∙이상 결제",overtimeOverEightHours:"② 8시간 초과",earlyQuitRounding:"③ 15분/45분",cardholderSuspiciousNormalPayment:"④ 카드소지:정상",cardholderSuspiciousRetroPayment:"⑤ 카드소지:소급",nightPayment:"⑥ 카드소지:새벽",overOneMinute:"⑦ 1분 초과",restTimeViolation:"⑧ 휴게시간미달",terminatedServicePayment:"⑨ 해지기간결제"};function h(e){if(null===e)return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let i=String(t.getHours()).padStart(2,"0"),n=String(t.getMinutes()).padStart(2,"0"),r=String(t.getSeconds()).padStart(2,"0");return`${i}:${n}:${r}`}function x(e){if(null===e)return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let i=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${i}-${n}-${r}
${h(e)}`}function f(e){return null===e?"-":Number.isInteger(e)?String(e):e.toFixed(1)}function p({anomalies:e}){return(0,t.jsx)(C,{children:e.map(e=>(0,t.jsx)(I,{children:void 0!==e.onClick?(0,t.jsx)($,{type:"button",onClick:e.onClick,children:o[e.category]}):o[e.category]},e.key))})}function u({worker:e,categoryLevels:n,onAnomalyClick:r}){return(0,t.jsxs)(g,{children:[(0,t.jsxs)(j,{children:[(0,t.jsx)(m,{children:"세부 제공 내용"}),void 0===e?null:(0,t.jsxs)(b,{type:"button",onClick:()=>{void 0!==e&&l.default.modal.serviceWorkerDetail.show(e.serviceWorkerId)},children:["[",e.serviceWorkerName??"-","] 제공인력 정보 보기",(0,t.jsx)(a.default,{sx:{fontSize:16}})]})]}),(0,t.jsxs)(w,{children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:c.map(({header:e,width:i})=>(0,t.jsx)(y,{$width:i,children:e},e))})}),void 0===e||void 0===n?null:(0,t.jsx)("tbody",{children:e.days.flatMap(e=>e.records.map((i,d)=>{var l,a;let c,o=i.anomalies.filter(e=>"row"===n[e.category]),u=(l=e.dayAnomalies,l.filter(e=>"day"===n[e.category]&&e.recordIds.includes(i.id)));return(0,t.jsxs)(S,{$isLastInDay:d===e.records.length-1,children:[(0,t.jsx)(v,{children:0===d?null===(c=(a=e.date).match(/^\d{4}-(\d{2})-(\d{2})$/))?a:`${Number(c[1])}/${c[2]}`:null}),(0,t.jsx)(_,{children:i.clientName??"-"}),(0,t.jsx)(v,{children:h(i.approvedAt)}),(0,t.jsx)(v,{children:x(i.serviceStartTime)}),(0,t.jsx)(v,{children:x(i.serviceEndTime)}),(0,t.jsx)(v,{children:f(i.settledHours)}),(0,t.jsx)(v,{children:function(e){if(null===e)return"-";let t=Object.entries(s.default).find(([t])=>t===e)?.[1];return void 0===t?e:`${t.label}결제`}(i.settlementType)}),(0,t.jsx)(v,{children:f(i.settledHours)}),(0,t.jsx)(z,{children:(0,t.jsx)(p,{anomalies:[...o.map(t=>({category:t.category,key:`row-${t.category}-${t.detail}`,onClick:"earlyQuitRounding"===t.category||"cardholderSuspiciousNormalPayment"===t.category||"cardholderSuspiciousRetroPayment"===t.category||"nightPayment"===t.category||"overOneMinute"===t.category||"terminatedServicePayment"===t.category?()=>r(t,"cardholderSuspiciousRetroPayment"===t.category?e.records:[i],i):void 0})),...u.map(t=>({category:t.category,key:`day-${t.category}-${t.detail}`,onClick:()=>r(t,e.records,i)}))]})})]},i.id)}))})]}),void 0===e?(0,t.jsxs)(k,{children:[(0,t.jsx)(i.default,{sx:{fontSize:24,color:"#494f53"}}),(0,t.jsx)(N,{children:"왼쪽의 제공인력을 선택 시, 세부 제공 내용을 확인할 수 있습니다."})]}):null]})}let g=d.default.section.withConfig({componentId:"zh__sc-4f04c00a-0"})`
  overflow: hidden;
  border: 1px solid #dadee6;
  border-radius: 8px;
  background: white;
`,j=d.default.h3.withConfig({componentId:"zh__sc-4f04c00a-1"})`
  display: flex;
  gap: 8px;
  align-items: center;

  height: 52px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 700;
  color: #131416;
`,m=d.default.span.withConfig({componentId:"zh__sc-4f04c00a-2"})`
  font-size: 16px;
  font-weight: 700;
  color: #131416;
`,b=d.default.button.withConfig({componentId:"zh__sc-4f04c00a-3"})`
  display: flex;
  gap: 4px;
  align-items: center;

  padding: 4px 0;
  border: 0;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #4f39f6;
  letter-spacing: -1px;

  background: transparent;
`,w=d.default.table.withConfig({componentId:"zh__sc-4f04c00a-4"})`
  table-layout: fixed;
  border-collapse: collapse;
`,y=d.default.th.withConfig({componentId:"zh__sc-4f04c00a-5"})`
  width: ${({$width:e})=>`${e}px`};
  height: 76px;
  padding: 8px;
  border-top: 1px solid #dadee6;
  border-bottom: 1px solid #e5e7eb;

  font-size: 13px;
  font-weight: 700;
  line-height: normal;
  color: #131416;
  text-align: center;
  white-space: pre-line;
  vertical-align: middle;

  background: #f3f5f9;
`,v=d.default.td.withConfig({componentId:"zh__sc-4f04c00a-6"})`
  height: 64px;
  padding: 8px;

  font-size: 13px;
  line-height: 16px;
  color: #464c53;
  text-align: center;
  white-space: pre-line;
  vertical-align: middle;
`,_=(0,d.default)(v).withConfig({componentId:"zh__sc-4f04c00a-7"})`
  font-weight: 700;
`,S=d.default.tr.withConfig({componentId:"zh__sc-4f04c00a-8"})`
  ${({$isLastInDay:e})=>e?`
          td {
            border-bottom: 1px solid #e5e7eb;
          }
        `:null}

  &:hover {
    background: #f9fafb;
  }

  &:active {
    background: #f2f4f7;
  }
`,z=(0,d.default)(v).withConfig({componentId:"zh__sc-4f04c00a-9"})`
  width: 270px;
`,C=d.default.ul.withConfig({componentId:"zh__sc-4f04c00a-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0;

  list-style: none;
`,I=d.default.li.withConfig({componentId:"zh__sc-4f04c00a-11"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 4px 8px;
  border-radius: 99px;

  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 133.333% */
  color: #fff;
  letter-spacing: -1px;

  background: #ff6900;
`,$=d.default.button.withConfig({componentId:"zh__sc-4f04c00a-12"})`
  padding: 0;
  border: 0;

  font: inherit;
  color: inherit;

  background: transparent;
`,k=d.default.div.withConfig({componentId:"zh__sc-4f04c00a-13"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  min-height: 174px;
  padding: 16px;
`,N=d.default.p.withConfig({componentId:"zh__sc-4f04c00a-14"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #494f53;
  text-align: center;
`;var T=e.i(553),D=e.i(64954),M=e.i(41576),O=e.i(44534);let{CONSECUTIVE_PAYMENT:E,OVERTIME_OVER_EIGHT_HOURS:A,EARLY_QUIT_ROUNDING:F,CARD_HOLDER_SUSPICIOUS_NORMAL_PAYMENT:P,CARD_HOLDER_SUSPICIOUS_RETRO_PAYMENT:V,NIGHT_PAYMENT:H,OVER_ONE_MINUTE:R,REST_TIME_VIOLATION:W,TERMINATED_SERVICE_PAYMENT:X}=M.default,Y=[{value:E,label:"① 연속결제 이상결제"},{value:A,label:"② 일 8시간 초과 근무"},{value:F,label:"③ 15,45분 결제"},{value:P,label:"④ 카드 소지 의심: 정상 결제"},{value:V,label:"⑤ 카드 소지 의심: 소급 결제"},{value:H,label:"⑥ 카드 소지 의심: 새벽 결제"},{value:R,label:"⑦ 1분 초과"},{value:W,label:"⑧ 휴게 시간 미달"},{value:X,label:"⑨ 서비스 해지 기간 결제"}];function B(e){return void 0===e?"-":e.replace(/^(\d{2})\d{2}-(\d{2})-(\d{2})$/,"$1.$2.$3")}function L({workers:e,selectedWorkerId:i,onSelect:n}){let[d,a]=(0,r.useState)(""),s=l.default.data.serviceWorker.activityAnomalyReport.query,c=e.filter(e=>O.default.isMatch(O.default.create(e.serviceWorkerName??""),d));return(0,t.jsxs)(Q,{children:[(0,t.jsxs)(U,{children:[(0,t.jsxs)(K,{children:["총 ",e.length,"명"]}),(0,t.jsxs)(G,{children:[(0,t.jsx)(q,{value:d,onChange:e=>a(e.currentTarget.value),placeholder:"제공인력 이름 검색하기","aria-label":"제공인력 이름 검색"}),(0,t.jsx)(J,{size:16,"aria-hidden":"true"})]})]}),(0,t.jsx)(Z,{children:(0,t.jsxs)(ee,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsxs)(et,{children:["이름",`
`,"/생년월일"]}),(0,t.jsxs)(et,{children:["총",`
`,"근로시간"]}),(0,t.jsx)(et,{children:"건 수"}),(0,t.jsxs)(et,{children:["일수",`
`,s?.from===void 0&&s?.to===void 0?"(전체 기간)":`${B(s?.from)} ~ ${B(s?.to)}`]}),Y.map(({value:e,label:i})=>(0,t.jsx)(et,{children:i},e))]})}),(0,t.jsx)("tbody",{children:c.map(e=>{var r;let d=e.days.flatMap(e=>e.records);return(0,t.jsxs)(ei,{$selected:e.serviceWorkerId===i,onClick:()=>n(e.serviceWorkerId),children:[(0,t.jsx)(en,{children:e.serviceWorkerName??"-"}),(0,t.jsx)(en,{children:Number.isInteger(r=d.reduce((e,t)=>e+(t.settledHours??0),0))?String(r):r.toFixed(1)}),(0,t.jsx)(en,{children:d.length}),(0,t.jsx)(en,{children:e.days.length}),Y.map(({value:i})=>(0,t.jsx)(en,{children:e.days.reduce((e,t)=>e+t.dayAnomalies.filter(e=>e.category===i).length+t.records.reduce((e,t)=>e+t.anomalies.filter(e=>e.category===i).length,0),0)},i))]},e.serviceWorkerId)})})]})})]})}let Q=d.default.section.withConfig({componentId:"zh__sc-b55f8238-0"})`
  border: 1px solid #dadee6;
  border-radius: 8px;
  background: white;
`,U=d.default.div.withConfig({componentId:"zh__sc-b55f8238-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 52px;
  padding: 8px 16px;
`,K=d.default.strong.withConfig({componentId:"zh__sc-b55f8238-2"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #131416;
`,q=(0,d.default)(D.default.Input.Text).withConfig({componentId:"zh__sc-b55f8238-3"})`
  width: 203px;
  height: 36px;
  padding: 0 40px 0 16px;
  font-size: 16px;
`,G=d.default.div.withConfig({componentId:"zh__sc-b55f8238-4"})`
  position: relative;
  width: 203px;
  height: 36px;
`,J=(0,d.default)(T.Search).withConfig({componentId:"zh__sc-b55f8238-5"})`
  pointer-events: none;

  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);

  color: #0a0a0a;
`,Z=d.default.div.withConfig({componentId:"zh__sc-b55f8238-6"})`
  overflow-x: auto;
  width: 100%;
`,ee=d.default.table.withConfig({componentId:"zh__sc-b55f8238-7"})`
  table-layout: fixed;
  border-collapse: collapse;
  width: max-content;
  min-width: 100%;
`,et=d.default.th.withConfig({componentId:"zh__sc-b55f8238-8"})`
  width: 88px;
  height: 76px;
  padding: 8px;
  border-top: 1px solid #dadee6;
  border-bottom: 1px solid #e5e7eb;

  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  color: #131416;
  text-align: center;
  white-space: pre-line;
  vertical-align: middle;

  background: #f3f5f9;
`,ei=d.default.tr.withConfig({componentId:"zh__sc-b55f8238-9"})`
  cursor: pointer;
  background: ${({$selected:e})=>e?"#F2F4F7":"white"};

  &:hover {
    background: ${({$selected:e})=>e?"#F2F4F7":"#f9fafb"};
  }

  &:active {
    background: ${({$selected:e})=>e?"#F2F4F7":"#f2f4f7"};
  }
`,en=d.default.td.withConfig({componentId:"zh__sc-b55f8238-10"})`
  width: 88px;
  height: 64px;
  padding: 8px;
  border-bottom: 1px solid #e5e7eb;

  font-size: 13px;
  line-height: 16px;
  color: #464c53;
  text-align: center;
  white-space: pre-line;
  vertical-align: middle;
`;var er=e.i(8179),ed=e.i(26170);let el=d.default.div.withConfig({componentId:"zh__sc-5019cdc3-0"})`
  width: 982px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 12px 16px rgb(0 0 0 / 8%);
`,ea=d.default.header.withConfig({componentId:"zh__sc-5019cdc3-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  border-radius: 8px 8px 0 0;

  background: white;
`,es=d.default.h2.withConfig({componentId:"zh__sc-5019cdc3-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #101828;
`,ec=d.default.button.withConfig({componentId:"zh__sc-5019cdc3-3"})`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;
  border: 1px solid #4f39f6;
  border-radius: 4px;

  font-size: 16px;
  line-height: 20px;
  color: #4f39f6;

  background: white;

  &:hover {
    background: #f7f5ff;
  }
`,eo=d.default.div.withConfig({componentId:"zh__sc-5019cdc3-4"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 28px 24px;
  border-radius: 0 0 8px 8px;

  background: #f9fafb;
`,eh=d.default.table.withConfig({componentId:"zh__sc-5019cdc3-5"})`
  overflow: hidden;
  table-layout: fixed;
  border-spacing: 0;
  border-collapse: separate;

  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: white;

  tbody tr:last-child td {
    border-bottom: 0;
  }
`,ex=d.default.th.withConfig({componentId:"zh__sc-5019cdc3-6"})`
  height: 48px;
  padding: 8px 16px;
  border-bottom: 1px solid #e5e7eb;

  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  color: #1c1d22;
  text-align: center;
  vertical-align: middle;

  background: #f8fafc;
`,ef=d.default.td.withConfig({componentId:"zh__sc-5019cdc3-7"})`
  height: 92px;
  padding: 10px 8px;
  border-bottom: 1px solid #e5e7eb;

  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #464c53;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
`,ep=d.default.div.withConfig({componentId:"zh__sc-5019cdc3-8"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,eu=d.default.span.withConfig({componentId:"zh__sc-5019cdc3-9"})`
  padding: 6px 10px;
  border-radius: 99px;

  font-size: 13px;
  font-weight: 600;
  line-height: 14px;
  color: #d11f1f;

  background: #ffe8e8;
`,eg=d.default.span.withConfig({componentId:"zh__sc-5019cdc3-10"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #464c53;
`;function ej(e){if(null===e)return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let i=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),d=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0"),a=String(t.getSeconds()).padStart(2,"0");return`${i}-${n}-${r} ${d}:${l}:${a}`}function em(e){let t=Math.max(Math.round(e/1e3),0),i=Math.floor(t/60),n=t%60;return 0===i?`${n}초`:0===n?`${i}분`:`${i}분 ${n}초`}function eb({record:e,onClose:i}){var n;let r=(null===e.approvedAt?NaN:Date.parse(e.approvedAt))-(null===e.serviceEndTime?NaN:Date.parse(e.serviceEndTime));return(0,t.jsx)(ed.default,{children:(0,t.jsxs)(el,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(es,{children:"[카드 소지 의심: 정상 결제] 세부 활동 내용 확인하기"}),(0,t.jsxs)(ec,{type:"button",onClick:i,"aria-label":"모달 닫기",children:[(0,t.jsx)(er.X,{size:18}),"닫기"]})]}),(0,t.jsx)(eo,{children:(0,t.jsxs)(eh,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(ex,{children:"서비스 종료 시간"}),(0,t.jsx)(ex,{children:"승인 일시"}),(0,t.jsx)(ex,{children:"초과 시간 (30분 이상)"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(ef,{children:ej(e.serviceEndTime)}),(0,t.jsx)(ef,{children:ej(e.approvedAt)}),(0,t.jsx)(ef,{children:(0,t.jsxs)(ep,{children:[(0,t.jsx)(eu,{children:(n=r-18e5,`기준보다 ${em(n)} 초과`)}),(0,t.jsxs)(eg,{children:["총 ",em(r)]})]})})]})})]})})]})})}function ew(e){if(null===e)return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let i=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),d=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0"),a=String(t.getSeconds()).padStart(2,"0");return`${i}-${n}-${r} ${d}:${l}:${a}`}function ey(e){if(!Number.isFinite(e))return"-";let t=Math.max(Math.round(e/1e3),0),i=Math.floor(t/60),n=t%60;return 0===i?`${n}초`:0===n?`${i}분`:`${i}분 ${n}초`}function ev({record:e,records:i,onClose:n}){let r=i.filter(t=>t.id!==e.id&&t.clientId===e.clientId&&"NORMAL"===t.settlementType),d=null===e.approvedAt?NaN:Date.parse(e.approvedAt);return(0,t.jsx)(ed.default,{children:(0,t.jsxs)(el,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(es,{children:"[카드 소지 의심: 소급 결제] 세부 활동 내용 확인하기"}),(0,t.jsxs)(ec,{type:"button",onClick:n,"aria-label":"모달 닫기",children:[(0,t.jsx)(er.X,{size:18}),"닫기"]})]}),(0,t.jsx)(eo,{children:(0,t.jsxs)(eh,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(ex,{children:"서비스 시작 시간"}),(0,t.jsx)(ex,{children:"서비스 종료 시간"}),(0,t.jsx)(ex,{children:"소급 결제 승인 일시"}),(0,t.jsx)(ex,{children:"시간 차이 (30분 이상)"})]})}),(0,t.jsx)("tbody",{children:0===r.length?(0,t.jsx)("tr",{children:(0,t.jsx)(ef,{colSpan:4,children:(0,t.jsx)(ep,{children:(0,t.jsx)(eu,{children:"당일 제공 기록 없음"})})})}):r.map(i=>{let n=null===i.serviceStartTime?NaN:Date.parse(i.serviceStartTime),r=null===i.serviceEndTime?NaN:Date.parse(i.serviceEndTime),l=d<=n?n-d:d>=r?d-r:0,a=l-18e5;return(0,t.jsxs)("tr",{children:[(0,t.jsx)(ef,{children:ew(i.serviceStartTime)}),(0,t.jsx)(ef,{children:ew(i.serviceEndTime)}),(0,t.jsx)(ef,{children:ew(e.approvedAt)}),(0,t.jsx)(ef,{children:(0,t.jsxs)(ep,{children:[a>=0?(0,t.jsxs)(eu,{children:[d<=n?"서비스 시작 기준 ":"서비스 종료 기준 ",ey(a)," 이상"]}):null,(0,t.jsxs)(eg,{children:["총 ",ey(l)]})]})})]},i.id)})})]})})]})})}function e_(e){if(null===e)return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let i=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),d=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0"),a=String(t.getSeconds()).padStart(2,"0");return`${i}-${n}-${r} ${d}:${l}:${a}`}function eS({anomaly:e,records:i,onClose:n}){let r,d=(r=i.filter(t=>e.recordIds.includes(t.id)).sort((e,t)=>{let i=e.serviceStartTime??"",n=t.serviceStartTime??"";return i.localeCompare(n)})).slice(0,-1).flatMap((e,t)=>{let i=r[t+1];if(void 0===i)return[];let n=null===e.serviceEndTime?NaN:Date.parse(e.serviceEndTime),d=null===i.serviceStartTime?NaN:Date.parse(i.serviceStartTime);return Number.isNaN(n)||Number.isNaN(d)?[]:[{firstRecord:e,secondRecord:i,gapMinutes:Math.floor((d-n)/6e4)}]});return(0,t.jsx)(ed.default,{children:(0,t.jsxs)(el,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(es,{children:"[연속∙이상 결제] 세부 활동 내용 확인하기"}),(0,t.jsxs)(ec,{type:"button",onClick:n,"aria-label":"모달 닫기",children:[(0,t.jsx)(er.X,{size:18}),"닫기"]})]}),(0,t.jsx)(eo,{children:(0,t.jsxs)(eh,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(ex,{children:"대상자명"}),(0,t.jsx)(ex,{children:"서비스 종료 시간"}),(0,t.jsx)(ex,{children:"대상자명"}),(0,t.jsx)(ex,{children:"서비스 시작 시간"}),(0,t.jsx)(ex,{children:"간격 (5분 이내 일 시)"})]})}),(0,t.jsx)("tbody",{children:d.map(({firstRecord:e,secondRecord:i,gapMinutes:n})=>(0,t.jsxs)("tr",{children:[(0,t.jsx)(ef,{children:e.clientName??"-"}),(0,t.jsx)(ef,{children:e_(e.serviceEndTime)}),(0,t.jsx)(ef,{children:i.clientName??"-"}),(0,t.jsx)(ef,{children:e_(i.serviceStartTime)}),(0,t.jsx)(ef,{children:(0,t.jsxs)(ep,{children:[(0,t.jsxs)(eu,{children:[5-n,"분 짧음"]}),(0,t.jsxs)(eg,{children:[n,"분"]})]})})]},`${e.id}-${i.id}`))})]})})]})})}function ez(e){return null===e?"-":e.slice(0,5).replace(/^0/,"")}function eC({record:e,onClose:i}){return(0,t.jsx)(ed.default,{children:(0,t.jsxs)(el,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(es,{children:"[15,45분 결제] 세부 활동 내용 확인하기"}),(0,t.jsxs)(ec,{type:"button",onClick:i,"aria-label":"모달 닫기",children:[(0,t.jsx)(er.X,{size:18}),"닫기"]})]}),(0,t.jsx)(eo,{children:(0,t.jsxs)(eh,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(ex,{children:"사회 활동"}),(0,t.jsx)(ex,{children:"신체 활동"}),(0,t.jsx)(ex,{children:"가사 활동"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(ef,{children:ez(e.socialActivitySupport)}),(0,t.jsx)(ef,{children:ez(e.physicalActivitySupport)}),(0,t.jsx)(ef,{children:ez(e.houseworkActivitySupport)})]})})]})})]})})}function eI({record:e,onClose:i}){return(0,t.jsx)(ed.default,{children:(0,t.jsxs)(el,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(es,{children:"[카드 소지: 새벽] 세부 활동 내용 확인하기"}),(0,t.jsxs)(ec,{type:"button",onClick:i,"aria-label":"모달 닫기",children:[(0,t.jsx)(er.X,{size:18}),"닫기"]})]}),(0,t.jsx)(eo,{children:(0,t.jsxs)(eh,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(ex,{children:"승인 시간"}),(0,t.jsx)(ex,{children:"새벽 결제 기준"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(ef,{children:function(e){if(null===e)return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let i=String(t.getHours()).padStart(2,"0"),n=String(t.getMinutes()).padStart(2,"0"),r=String(t.getSeconds()).padStart(2,"0");return`${i}:${n}:${r}`}(e.approvedAt)}),(0,t.jsx)(ef,{children:(0,t.jsx)(eu,{children:"00~06시 사이"})})]})})]})})]})})}function e$({anomaly:e,onClose:i}){return(0,t.jsx)(ed.default,{children:(0,t.jsxs)(el,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(es,{children:"[1분 초과 시] 세부 활동 내용 확인하기"}),(0,t.jsxs)(ec,{type:"button",onClick:i,"aria-label":"모달 닫기",children:[(0,t.jsx)(er.X,{size:18}),"닫기"]})]}),(0,t.jsx)(eo,{children:(0,t.jsxs)(eh,{children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:e.metrics.map(e=>(0,t.jsx)(ex,{children:e.label},e.key))})}),(0,t.jsx)("tbody",{children:(0,t.jsx)("tr",{children:e.metrics.map(e=>(0,t.jsx)(ef,{children:e.value},e.key))})})]})})]})})}function ek(e){if(null===e)return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let i=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),d=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0"),a=String(t.getSeconds()).padStart(2,"0");return`${i}-${n}-${r} ${d}:${l}:${a}`}function eN(e){let t=Math.round(60*e),i=Math.floor(t/60),n=t%60;return 0===i?`${n}분`:0===n?`${i}시간`:`${i}시간 ${n}분`}function eT({anomaly:e,records:i,onClose:n}){let r=i.filter(t=>e.recordIds.includes(t.id)),d=r.reduce((e,t)=>e+(t.settledHours??0),0),l=Math.max(d-8,0);return(0,t.jsx)(ed.default,{children:(0,t.jsxs)(el,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(es,{children:"[근로시간 8시간 초과] 세부 활동 내용 확인하기"}),(0,t.jsxs)(ec,{type:"button",onClick:n,"aria-label":"모달 닫기",children:[(0,t.jsx)(er.X,{size:18}),"닫기"]})]}),(0,t.jsx)(eo,{children:(0,t.jsxs)(eh,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(ex,{children:"대상자명"}),(0,t.jsx)(ex,{children:"서비스 시작 시간"}),(0,t.jsx)(ex,{children:"서비스 종료 시간"}),(0,t.jsx)(ex,{children:"결제 시간"})]})}),(0,t.jsxs)("tbody",{children:[r.map(e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)(ef,{children:e.clientName??"-"}),(0,t.jsx)(ef,{children:ek(e.serviceStartTime)}),(0,t.jsx)(ef,{children:ek(e.serviceEndTime)}),(0,t.jsx)(ef,{children:eN(e.settledHours??0)})]},e.id)),(0,t.jsxs)("tr",{children:[(0,t.jsx)(ef,{colSpan:3}),(0,t.jsx)(ef,{children:(0,t.jsxs)(ep,{children:[(0,t.jsxs)(eu,{children:[eN(l)," 초과"]}),(0,t.jsxs)(eg,{children:["총 ",eN(d)]})]})})]})]})]})})]})})}function eD(e){if(null===e)return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let i=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),d=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0"),a=String(t.getSeconds()).padStart(2,"0");return`${i}-${n}-${r} ${d}:${l}:${a}`}function eM(e){let t=Math.max(Math.round(e),0),i=Math.floor(t/60),n=t%60;return 0===i?`${n}분`:0===n?`${i}시간`:`${i}시간 ${n}분`}function eO({anomaly:e,records:i,onClose:n}){let r,d=i.filter(t=>e.recordIds.includes(t.id)),l=60*d.reduce((e,t)=>e+(t.settledHours??0),0),a=(r=d.filter(e=>null!==e.serviceStartTime&&null!==e.serviceEndTime).sort((e,t)=>Date.parse(e.serviceStartTime??"")-Date.parse(t.serviceStartTime??""))).slice(0,-1).reduce((e,t,i)=>{let n=r[i+1];if(void 0===n)return e;let d=Date.parse(t.serviceEndTime??""),l=Date.parse(n.serviceStartTime??"");return Number.isNaN(d)||Number.isNaN(l)||l<=d?e:e+(l-d)/6e4},0),s=Math.max((l>=480?60:30*(l>=240))-a,0);return(0,t.jsx)(ed.default,{children:(0,t.jsxs)(el,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(es,{children:"[휴게시간 미달] 세부 활동 내용 확인하기"}),(0,t.jsxs)(ec,{type:"button",onClick:n,"aria-label":"모달 닫기",children:[(0,t.jsx)(er.X,{size:18}),"닫기"]})]}),(0,t.jsx)(eo,{children:(0,t.jsxs)(eh,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(ex,{children:"서비스 시작 시간"}),(0,t.jsx)(ex,{children:"서비스 종료 시간"}),(0,t.jsx)(ex,{children:"결제 시간"}),(0,t.jsx)(ex,{children:"휴게시간 (30분, 1시간 미달 시)"})]})}),(0,t.jsx)("tbody",{children:d.map((e,i)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)(ef,{children:eD(e.serviceStartTime)}),(0,t.jsx)(ef,{children:eD(e.serviceEndTime)}),(0,t.jsx)(ef,{children:function(e){if(null===e)return"-";let t=Math.round(60*e),i=Math.floor(t/60);return`${i}:${String(t%60).padStart(2,"0")}`}(e.settledHours)}),0===i?(0,t.jsx)(ef,{rowSpan:d.length,children:(0,t.jsxs)(ep,{children:[(0,t.jsxs)(eu,{children:[eM(s)," 미달"]}),(0,t.jsxs)(eg,{children:["총 ",eM(a)]})]})}):null]},e.id))})]})})]})})}var eE=e.i(23416);function eA(e){return null==e?"-":e}function eF(e){if(null===e)return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let i=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),d=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0"),a=String(t.getSeconds()).padStart(2,"0");return`${i}-${n}-${r} ${d}:${l}:${a}`}function eP({record:e,onClose:i}){let[n,d]=(0,r.useState)(null);(0,r.useEffect)(()=>{let t=!0;return eE.default.data.contract.get({id:e.contractId}).then(([e,i])=>{t&&null===e&&d(i)}),()=>{t=!1}},[e.contractId]);let l=null===n?"-":`${eA(n.contractStartDate)} ~ ${eA(n.contractEndDate)}`,a=function(e,t,i){if(null===i)return!1;let n=i.contractStartDate?Date.parse(`${i.contractStartDate}T00:00:00`):-1/0,r=i.contractEndDate?Date.parse(`${i.contractEndDate}T23:59:59.999`):1/0,d=null===e?null:Date.parse(e),l=null===t?null:Date.parse(t);return(null===d||d>=n)&&(null===l||l<=r)}(e.serviceStartTime,e.serviceEndTime,n);return(0,t.jsx)(ed.default,{children:(0,t.jsxs)(el,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(es,{children:"[해지기간 결제] 세부 활동 내용 확인하기"}),(0,t.jsxs)(ec,{type:"button",onClick:i,"aria-label":"모달 닫기",children:[(0,t.jsx)(er.X,{size:18}),"닫기"]})]}),(0,t.jsx)(eo,{children:(0,t.jsxs)(eh,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(ex,{children:"이용자 계약기간"}),(0,t.jsx)(ex,{children:"서비스 시작 시간"}),(0,t.jsx)(ex,{children:"서비스 종료 시간"}),(0,t.jsx)(ex,{children:"-"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(ef,{children:l}),(0,t.jsx)(ef,{children:eF(e.serviceStartTime)}),(0,t.jsx)(ef,{children:eF(e.serviceEndTime)}),(0,t.jsx)(ef,{children:a?null:(0,t.jsx)(eu,{children:"계약기간 아님"})})]})})]})})]})})}function eV({selectedAnomaly:e,onClose:i}){if(null===e)return null;let{anomaly:n,records:r}=e;if("recordIds"in n&&"consecutivePayment"===n.category)return(0,t.jsx)(eS,{anomaly:n,records:r,onClose:i});if("recordIds"in n&&"overtimeOverEightHours"===n.category)return(0,t.jsx)(eT,{anomaly:n,records:r,onClose:i});if("recordIds"in n&&"restTimeViolation"===n.category)return(0,t.jsx)(eO,{anomaly:n,records:r,onClose:i});if(!("recordIds"in n)&&"earlyQuitRounding"===n.category){let e=r[0];return void 0===e?null:(0,t.jsx)(eC,{record:e,onClose:i})}if(!("recordIds"in n)&&"cardholderSuspiciousNormalPayment"===n.category){let e=r[0];return void 0===e?null:(0,t.jsx)(eb,{record:e,onClose:i})}if(!("recordIds"in n)&&"cardholderSuspiciousRetroPayment"===n.category)return void 0===r[0]?null:(0,t.jsx)(ev,{record:e.record,records:r,onClose:i});if(!("recordIds"in n)&&"nightPayment"===n.category){let e=r[0];return void 0===e?null:(0,t.jsx)(eI,{record:e,onClose:i})}if(!("recordIds"in n)&&"overOneMinute"===n.category)return void 0===r[0]?null:(0,t.jsx)(e$,{anomaly:n,onClose:i});if(!("recordIds"in n)&&"terminatedServicePayment"===n.category){let e=r[0];return void 0===e?null:(0,t.jsx)(eP,{record:e,onClose:i})}return null}let eH=d.default.div.withConfig({componentId:"zh__sc-9f7aca56-0"})`
  overflow: auto hidden;
  flex: 1 1 auto;

  width: 100%;
  min-width: 0;
  max-width: 100%;
`,eR=d.default.div.withConfig({componentId:"zh__sc-9f7aca56-1"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: max-content;
  min-width: 100%;
  min-height: 100%;
`,eW=d.default.div.withConfig({componentId:"zh__sc-9f7aca56-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  height: 48px;
`,eX=d.default.h2.withConfig({componentId:"zh__sc-9f7aca56-3"})`
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #131416;
`,eY=d.default.span.withConfig({componentId:"zh__sc-9f7aca56-4"})`
  display: flex;
  align-items: flex-start;

  padding: 4px 10px;
  border-radius: 999px;

  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  line-height: 18px; /* 138.462% */
  color: #1d58d1;

  background: #ecf2ff;
`,eB=d.default.div.withConfig({componentId:"zh__sc-9f7aca56-5"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  height: 186px;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  color: #494f53;

  background: #fff;
`,eL=d.default.div.withConfig({componentId:"zh__sc-9f7aca56-6"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`,eQ=d.default.p.withConfig({componentId:"zh__sc-9f7aca56-7"})`
  margin: 0;
  font-weight: 700;
`,eU=d.default.p.withConfig({componentId:"zh__sc-9f7aca56-8"})`
  margin: 0;
`,eK=d.default.div.withConfig({componentId:"zh__sc-9f7aca56-9"})`
  display: flex;
  gap: 16px;
  align-items: stretch;

  width: max-content;
  min-width: 100%;
`,eq=(0,n.observer)(function(){let{data:e}=l.default.data.serviceWorker.activityAnomalyReport,n=e?.workers??[],d=n.length,[a,s]=(0,r.useState)(null),[c,o]=(0,r.useState)(null),h=n.find(e=>e.serviceWorkerId===a);return(0,t.jsxs)(eH,{children:[(0,t.jsxs)(eR,{children:[(0,t.jsxs)(eW,{children:[(0,t.jsx)(eX,{children:"검색 결과 (제공 인력)"}),(0,t.jsxs)(eY,{children:["총 ",d,"명"]})]}),0===n.length?(0,t.jsxs)(eB,{children:[(0,t.jsx)(i.default,{sx:{fontSize:24,color:"#494f53"}}),(0,t.jsxs)(eL,{children:[(0,t.jsx)(eQ,{children:"검색 결과가 없습니다."}),(0,t.jsx)(eU,{children:"의심 내역 조건을 선택하고 검색 버튼을 클릭해주세요."})]})]}):(0,t.jsxs)(eK,{children:[(0,t.jsx)(L,{workers:n,selectedWorkerId:a,onSelect:s}),(0,t.jsx)(u,{worker:h,categoryLevels:e?.categoryLevels,onAnomalyClick:(e,t,i)=>o({anomaly:e,records:t,record:i})})]})]}),(0,t.jsx)(eV,{selectedAnomaly:c,onClose:()=>o(null)})]})});e.s(["default",0,eq],99840)},11303,e=>{"use strict";var t=e.i(9735),i=e.i(39635);e.i(3159);var n=e.i(46907),r=e.i(7744),d=e.i(24045),l=e.i(38803),a=e.i(64954),s=e.i(43174),c=e.i(61526);let o=l.default.div.withConfig({componentId:"zh__sc-25bfd78c-0"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,h=l.default.div.withConfig({componentId:"zh__sc-25bfd78c-1"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,x=l.default.h2.withConfig({componentId:"zh__sc-25bfd78c-2"})`
  margin: 0;

  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
  white-space: nowrap;
`,f=l.default.div.withConfig({componentId:"zh__sc-25bfd78c-3"})`
  display: flex;
  gap: 4px;
  align-items: center;
  color: #464c53;
`,p=l.default.span.withConfig({componentId:"zh__sc-25bfd78c-4"})`
  font-size: 18px;
  line-height: 20px;
  white-space: nowrap;
`,u=l.default.div.withConfig({componentId:"zh__sc-25bfd78c-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,g=l.default.span.withConfig({componentId:"zh__sc-25bfd78c-6"})`
  overflow: hidden;

  font-size: 14px;
  line-height: normal;
  color: #737380;
  text-overflow: ellipsis;
  white-space: nowrap;
`,j=l.default.div.withConfig({componentId:"zh__sc-25bfd78c-7"})`
  width: 1px;
  height: 24px;
  background: #d1d1d9;
`,m=(0,l.default)(a.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-25bfd78c-8"})`
  display: flex;
  gap: 8px;
  align-items: center;

  height: 44px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
`,b=(0,n.observer)(function(){let[e,n]=(0,r.useState)(!1),l=s.default.serviceWorker.serviceRecord.lastImportedDate;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o,{children:[(0,t.jsxs)(h,{children:[(0,t.jsx)(x,{children:"부정결제 찾기"}),(0,t.jsxs)(f,{children:[(0,t.jsx)(i.default,{sx:{fontSize:20}}),(0,t.jsx)(p,{children:"검색조건을 사용해 이상 결제 의심 건을 검색합니다."})]})]}),(0,t.jsxs)(u,{children:[(0,t.jsxs)(g,{children:["가장 최근 업로드 일자: ",l??"-"]}),(0,t.jsx)(j,{}),(0,t.jsxs)(m,{type:"button",onClick:()=>n(!0),children:[(0,t.jsx)(d.Upload,{size:16}),"전자바우처 업로드하기"]})]})]}),e?(0,t.jsx)(c.default,{onClose:()=>n(!1)}):null]})});e.s(["default",0,b])}]);