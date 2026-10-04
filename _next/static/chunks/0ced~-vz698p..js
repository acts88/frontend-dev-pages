(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,12898,e=>{"use strict";var n=e.i(38803);let t=n.default.div.withConfig({componentId:"zh__sc-5098f667-0"})`
  display: flex;
  flex: 1;

  min-width: 1633px;
  max-width: 1633px;
  min-height: 0;
  margin: 0 auto;
  padding: 16px;
`;e.s(["default",0,t])},37418,e=>{"use strict";var n=e.i(9735);e.i(3159);var t=e.i(46907),l=e.i(7744),r=e.i(38803),i=e.i(23416),s=e.i(12898),o=e.i(64954),d=e.i(43174),a=e.i(24659);let c=["일","월","화","수","목","금","토"],h=(e,n)=>{let t=a.utils.aoa_to_sheet(e);return t["!cols"]=n.map(e=>({wch:e})),t},u=["일","월","화","수","목","금","토"],x=()=>{let e=new Date,n=new Date(e.getFullYear(),e.getMonth()-1,1);return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`},p=e=>`${e.toLocaleString("ko-KR")}시간`,f=e=>null==e?"-":`${e.toLocaleString("ko-KR")}원`,g=e=>`${Number(e.slice(5,7))}/${Number(e.slice(8,10))}`,m=(e,n)=>`${g(e)}(${u[n]??""})`,j=e=>{if(null===e)return"-";let n=new Date(e),t=e=>String(e).padStart(2,"0");return`${n.getMonth()+1}/${n.getDate()} ${t(n.getHours())}:${t(n.getMinutes())}`},y=e=>{let n=Number(e.replaceAll(",","").trim());return Number.isInteger(n)&&n>0?n:void 0},w=(0,t.observer)(function(){let e=d.default.data.auth.me.data?.organizationId??null,t=d.default.data.auth.me.data?.role??null,r="ORG_ADMIN"===t||"SUPER_ADMIN"===t,[o,u]=(0,l.useState)(x),[g,m]=(0,l.useState)(""),[w,X]=(0,l.useState)(""),[Y,G]=(0,l.useState)(null),[q,J]=(0,l.useState)({}),Q=(0,l.useRef)(!1),[Z,ee]=(0,l.useState)(null),[en,et]=(0,l.useState)(!0),[el,er]=(0,l.useState)(null),[ei,es]=(0,l.useState)(null),[eo,ed]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let n=!1;return(async()=>{let t=null===e?null:await i.default.data.payroll.getServiceWorkerHourlyWage(e,o);n||(G({month:o,value:t?.hourlyWage??null,isBeforeFirstPolicy:t?.isBeforeFirstPolicy??!1}),!0!==Q.current&&m(null===t?"":String(t.hourlyWage)))})(),()=>{n=!0}},[e,o]);let ea=null!==Y&&Y.month===o,ec=q.hourlyWage??(ea?Y.value??void 0:void 0),eh=q.voucherUnitPrice;(0,l.useEffect)(()=>{if(!ea)return;let n=!1;return(async()=>{et(!0),er(null);let[t,l]=await i.default.data.payroll.getPreview({month:o,hourlyWage:ec,voucherUnitPrice:eh,organizationId:e??void 0});if(!n){if(et(!1),null!==t){ee(null),er("급여 계산을 불러오지 못했어요. 잠시 후 다시 시도해 주세요.");return}ee(l),null!==l.run&&!0!==Q.current&&ec!==(l.run.hourlyWage??void 0)&&(m(null===l.run.hourlyWage?"":String(l.run.hourlyWage)),X(null===l.run.voucherUnitPrice?"":String(l.run.voucherUnitPrice)),J({hourlyWage:l.run.hourlyWage??void 0,voucherUnitPrice:l.run.voucherUnitPrice??void 0}))}})(),()=>{n=!0}},[o,ea,ec,eh,e]);let eu=()=>{J({hourlyWage:y(g),voucherUnitPrice:y(w)})},ex=async()=>{ed(!0);let[n,t]=await i.default.data.payroll.saveReview({month:o,hourlyWage:ec,voucherUnitPrice:eh,organizationId:e??void 0});(ed(!1),null!==n)?d.default.ui.layout.toast.error(n.message||"검토 저장에 실패했어요."):(ee(t),d.default.ui.layout.toast.success(`${o} 급여를 검토 저장했어요. 관리자가 최종 승인하면 확정돼요.`))},ep=async()=>{if(!0!==window.confirm(`${o} 급여를 확정할까요? 확정하면 잠겨서 다시 저장할 수 없고, 이후 바뀐 서비스 내역은 재정산 확인 대상으로만 보여요.`))return;ed(!0);let[n,t]=await i.default.data.payroll.confirm({month:o,organizationId:e??void 0,expectedReviewedAt:Z?.run?.reviewedAt??void 0});(ed(!1),null!==n)?d.default.ui.layout.toast.error(n.message||"확정에 실패했어요."):(ee(t),d.default.ui.layout.toast.success(`${o} 급여를 확정했어요.`))},ef=Z?.run??null,eg=Z?.workers??[];return(0,n.jsx)(s.default,{children:(0,n.jsxs)(_,{children:[(0,n.jsxs)(k,{children:[(0,n.jsx)(I,{children:"급여 관리"}),(0,n.jsx)(z,{children:"장애인 활동지원 · 계산 미리보기"})]}),(0,n.jsxs)($,{children:[(0,n.jsxs)(C,{children:[(0,n.jsx)(S,{children:"산정 월"}),(0,n.jsx)(W,{type:"month",value:o,onChange:e=>{""!==e.target.value&&(u(e.target.value),es(null))}})]}),(0,n.jsxs)(C,{children:[(0,n.jsx)(S,{children:"적용 시급(원)"}),(0,n.jsx)(W,{inputMode:"numeric",placeholder:"기관 급여 설정 시급",value:g,onChange:e=>{Q.current=!0,m(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&eu()}}),void 0===q.hourlyWage&&null!==Y&&Y.month===o?(0,n.jsx)(H,{children:null===Y.value?"기관 급여 설정에 장애인 활동지원 시급이 없어요":Y.isBeforeFirstPolicy?"급여 설정 시작 전 달이라 처음 설정한 시급이에요":"기관 급여 설정 시급"}):null]}),(0,n.jsxs)(C,{children:[(0,n.jsx)(S,{children:"바우처 시간당 단가(원)"}),(0,n.jsx)(W,{inputMode:"numeric",placeholder:Z?.voucherUnitPriceSource==="ESTIMATED"&&null!==Z.voucherUnitPrice?`추정 ${Z.voucherUnitPrice.toLocaleString("ko-KR")}`:"서비스 내역으로 추정",value:w,onChange:e=>X(e.target.value),onKeyDown:e=>{"Enter"===e.key&&eu()}})]}),(0,n.jsx)(M,{type:"button",onClick:eu,children:"다시 계산"}),(0,n.jsx)(O,{type:"button",disabled:null===Z||0===Z.workers.length,onClick:()=>{let e,n,t,l,r,i;null!==Z&&(e=e=>e.serviceWorkerName??`제공인력 #${e.serviceWorkerId}`,n=h([["제공인력","근무시간","일·공휴일 근무","가산시간","계산시간","일 연장","주 연장","주휴 대상","주휴 기본시간","법정공휴일 유급 대상일","소급 시간","소급 금액","과오반납 시간","과오반납 금액","시급","기본급","휴일 가산","연장 가산","합계(세전)","최저 기준급여","부족분","확인 필요","저장 뒤 바뀜"],...Z.workers.map(n=>{let{result:t}=n;return[e(n),t.hours.worked,t.hours.sundayHoliday,t.hours.premium,t.hours.payable,t.hours.dailyOvertime,t.hours.weeklyOvertime,t.weeklyHolidayPay.eligible?"대상":"미대상",t.weeklyHolidayPay.basicHours,t.statutoryHolidays.filter(e=>e.eligible).map(e=>e.date).join(", "),t.retroactive.hours,t.retroactive.amount,t.refund.hours,t.refund.amount,t.pay?.hourlyWage??"",t.pay?.base??"",t.pay?.holidayPremium??"",t.pay?.overtimePremium??"",t.pay?.subtotal??"",t.minimumBase?.amount??"",t.minimumBase?.shortfall??"",t.anomalies.length,n.changedSinceSaved&&null!==n.savedSnapshot?"예":""]})],[12,9,11,9,9,8,8,9,11,22,9,11,11,12,8,11,10,10,12,12,10,9,10]),t=h([["제공인력","날짜","요일","공휴일","근무시간","가산시간","일 연장"],...Z.workers.flatMap(n=>n.result.days.map(t=>[e(n),t.date,c[t.weekday]??"",t.isHoliday?"공휴일":"",t.workedHours,t.premiumHours,t.dailyOvertimeHours]))],[12,12,6,8,9,9,8]),l=h([["제공인력","시작","끝","합계","일 연장","주 연장","비고"],...Z.workers.flatMap(n=>n.result.weeks.map(t=>[e(n),t.start,t.end,t.totalHours,t.dailyOvertimeHours,t.deferredToNextMonth?"":t.weeklyOvertimeHours,t.deferredToNextMonth?"다음 달에 계산":t.includesPreviousMonth?"전월 포함":""]))],[12,12,12,8,8,8,14]),r=h([["제공인력","날짜","내용"],...Z.workers.flatMap(n=>n.result.anomalies.map(t=>[e(n),t.date,t.message])),...Z.workers.flatMap(n=>n.pastMonthAdjustments.map(t=>[e(n),t.serviceDate,`지난 달 ${"RETROACTIVE"===t.kind?"소급결제":"과오반납"} ${t.hours}시간 ${t.amount}원 (${t.processedOn??"-"} 처리, 재정산 확인)`]))],[12,12,60]),i=a.utils.book_new(),a.utils.book_append_sheet(i,n,"제공인력별"),a.utils.book_append_sheet(i,t,"날짜별"),a.utils.book_append_sheet(i,l,"주별"),a.utils.book_append_sheet(i,r,"확인 필요"),a.writeFileXLSX(i,`급여산정_장애인활동지원_${Z.month}.xlsx`))},children:"엑셀 다운로드"}),(0,n.jsxs)(P,{children:[ef?.status!=="CONFIRMED"?(0,n.jsx)(O,{type:"button",disabled:eo||en||null===Z,onClick:()=>void ex(),children:null===ef?"검토 저장":"다시 검토 저장"}):null,ef?.status==="REVIEWED"&&r?(0,n.jsx)(M,{type:"button",disabled:eo,onClick:()=>void ep(),children:"최종 승인·확정"}):null]})]}),null!==ef?(0,n.jsxs)(R,{$confirmed:"CONFIRMED"===ef.status,children:[(0,n.jsx)("strong",{children:"CONFIRMED"===ef.status?`확정됨 \xb7 잠금 (${ef.confirmedByName??"-"}, ${j(ef.confirmedAt)})`:`검토 저장됨 (${ef.reviewedByName??"-"}, ${j(ef.reviewedAt)})${r?" — 확인 후 [최종 승인·확정]을 눌러 주세요":" — 관리자 최종 승인 대기"}`}),ef.changedWorkerCount>0?(0,n.jsxs)("span",{children:["저장 때와 계산이 달라진(서비스 내역·시급·단가) 제공인력 ",ef.changedWorkerCount,"명 —","CONFIRMED"===ef.status?" 확정 급여는 그대로 두고 재정산 확인 대상으로 표시했어요.":" 다시 검토 저장하면 지금 계산으로 바뀌어요.",ef.missingWorkers.length>0?` (저장 때 있었지만 지금 없는 사람: ${ef.missingWorkers.map(e=>e.serviceWorkerName??e.serviceWorkerId).join(", ")})`:""]}):null]}):null,(0,n.jsx)(N,{children:"서비스 내역(전자바우처 업로드) 기준 계산이에요. 일요일·공휴일은 0.5배 가산, 일 8시간·주 40시간 넘으면 연장(월 첫 주는 전월 포함, 마지막 주는 다음 달), 최저 기준급여 = 근무시간 × 바우처 단가 × 0.75. 주휴·연차·법정공휴일 유급수당 금액은 산식 확정 전이라 대상 여부만 보여요. 계산 담당자가 [검토 저장]하고 관리자가 [최종 승인·확정]하면 잠겨요."}),null!==Z&&Z.warnings.length>0?(0,n.jsx)(A,{children:Z.warnings.map(e=>(0,n.jsx)("span",{children:e},e))}):null,null!==Z?(0,n.jsxs)(E,{children:[(0,n.jsxs)(D,{children:[(0,n.jsx)(F,{children:"제공인력"}),(0,n.jsxs)(B,{children:[Z.totals.workers,"명"]})]}),(0,n.jsxs)(D,{children:[(0,n.jsx)(F,{children:"근무시간 / 계산시간"}),(0,n.jsxs)(B,{children:[p(Z.totals.workedHours)," / ",p(Z.totals.payableHours)]})]}),(0,n.jsxs)(D,{children:[(0,n.jsx)(F,{children:"연장"}),(0,n.jsx)(B,{children:p(Z.totals.overtimeHours)})]}),(0,n.jsxs)(D,{children:[(0,n.jsx)(F,{children:"확정 항목 합계(세전)"}),(0,n.jsx)(B,{children:null===Z.totals.subtotal?"시급 입력 필요":f(Z.totals.subtotal)})]}),(0,n.jsxs)(D,{$warn:Z.totals.shortfallWorkers>0,children:[(0,n.jsx)(F,{children:"최저 기준급여 미달"}),(0,n.jsxs)(B,{children:[Z.totals.shortfallWorkers,"명"]})]}),(0,n.jsxs)(D,{$warn:Z.totals.anomalies>0,children:[(0,n.jsx)(F,{children:"확인 필요 내역"}),(0,n.jsxs)(B,{children:[Z.totals.anomalies,"건"]})]}),(0,n.jsxs)(D,{$warn:Z.totals.pastMonthAdjustments>0,children:[(0,n.jsx)(F,{children:"재정산 확인(지난 달 소급·과오반납)"}),(0,n.jsxs)(B,{children:[Z.totals.pastMonthAdjustments,"건"]})]}),(0,n.jsxs)(D,{$warn:Z.unmatchedRecordCount>0,children:[(0,n.jsx)(F,{children:"제공인력 미연결 내역"}),(0,n.jsxs)(B,{children:[Z.unmatchedRecordCount,"건"]})]})]}):null,(0,n.jsx)(T,{children:(0,n.jsxs)(U,{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)(K,{children:"제공인력"}),(0,n.jsx)(K,{children:"근무"}),(0,n.jsx)(K,{children:"일·공휴일(가산)"}),(0,n.jsx)(K,{children:"연장(일/주)"}),(0,n.jsx)(K,{children:"주휴"}),(0,n.jsx)(K,{children:"법정공휴일 유급"}),(0,n.jsx)(K,{children:"소급 / 과오반납"}),(0,n.jsx)(K,{children:"지난 달 영향"}),(0,n.jsx)(K,{children:"기본급"}),(0,n.jsx)(K,{children:"휴일 가산"}),(0,n.jsx)(K,{children:"연장 가산"}),(0,n.jsx)(K,{children:"합계"}),(0,n.jsx)(K,{children:"최저 기준급여"}),(0,n.jsx)(K,{children:"확인 필요"}),(0,n.jsx)(K,{children:"상세"})]})}),(0,n.jsx)("tbody",{children:en?(0,n.jsx)("tr",{children:(0,n.jsx)(L,{colSpan:15,children:"계산하는 중..."})}):null!==el?(0,n.jsx)("tr",{children:(0,n.jsx)(L,{colSpan:15,children:el})}):0===eg.length?(0,n.jsx)("tr",{children:(0,n.jsxs)(L,{colSpan:15,children:[o,"장애인 활동지원 서비스 내역이 없어요. 제공인력 관리 > 서비스 내역 조회에서 전자바우처 엑셀을 올려 주세요."]})}):eg.map(e=>(0,n.jsxs)(l.Fragment,{children:[(0,n.jsx)(v,{worker:e,isOpen:ei===e.serviceWorkerId,onToggle:()=>es(n=>n===e.serviceWorkerId?null:e.serviceWorkerId)}),ei===e.serviceWorkerId?(0,n.jsx)("tr",{children:(0,n.jsx)(V,{colSpan:15,children:(0,n.jsx)(b,{result:e.result,adjustments:e.pastMonthAdjustments})})}):null]},e.serviceWorkerId))})]})})]})})});function v({worker:e,isOpen:t,onToggle:l}){let{result:r}=e,i=r.statutoryHolidays.filter(e=>e.eligible),s=r.minimumBase?.shortfall??null;return(0,n.jsxs)("tr",{children:[(0,n.jsxs)(L,{children:[e.serviceWorkerName??`제공인력 #${e.serviceWorkerId}`,e.changedSinceSaved&&null!==e.savedSnapshot?(0,n.jsx)(Y,{title:`저장 때 합계 ${f(e.savedSnapshot.subtotal)}, 근무 ${e.savedSnapshot.workedHours}시간`,children:(0,n.jsx)(X,{$tone:"orange",children:"저장 뒤 바뀜"})}):null]}),(0,n.jsx)(L,{children:p(r.hours.worked)}),(0,n.jsx)(L,{children:0===r.hours.sundayHoliday?"-":`${p(r.hours.sundayHoliday)} (+${r.hours.premium})`}),(0,n.jsx)(L,{children:0===r.hours.overtime?"-":`${r.hours.dailyOvertime} / ${r.hours.weeklyOvertime}시간`}),(0,n.jsxs)(L,{children:[(0,n.jsx)(X,{$tone:r.weeklyHolidayPay.eligible?"blue":"gray",children:r.weeklyHolidayPay.eligible?"대상":"미대상"}),(0,n.jsxs)(Y,{children:["기본 ",r.weeklyHolidayPay.basicHours,"시간"]})]}),(0,n.jsx)(L,{children:0===i.length?"-":i.map(e=>g(e.date)).join(", ")}),(0,n.jsx)(L,{children:0===r.retroactive.recordIds.length&&0===r.refund.recordIds.length?"-":`+${r.retroactive.hours} / ${r.refund.hours}시간`}),(0,n.jsx)(L,{children:0===e.pastMonthAdjustments.length?"-":(0,n.jsxs)(X,{$tone:"orange",children:[e.pastMonthAdjustments.length,"건"]})}),(0,n.jsx)(L,{children:f(r.pay?.base)}),(0,n.jsx)(L,{children:f(r.pay?.holidayPremium)}),(0,n.jsx)(L,{children:f(r.pay?.overtimePremium)}),(0,n.jsx)(L,{$strong:!0,children:f(r.pay?.subtotal)}),(0,n.jsx)(L,{children:null===r.minimumBase?"-":(0,n.jsxs)(n.Fragment,{children:[f(r.minimumBase.amount),null!==s&&s>0?(0,n.jsxs)(G,{children:["부족 ",f(s)]}):null]})}),(0,n.jsx)(L,{children:0===r.anomalies.length?"-":(0,n.jsxs)(X,{$tone:"orange",children:[r.anomalies.length,"건"]})}),(0,n.jsx)(L,{children:(0,n.jsx)(q,{type:"button",onClick:l,children:t?"접기":"보기"})})]})}function b({result:e,adjustments:t}){return(0,n.jsxs)(J,{children:[(0,n.jsxs)(Q,{children:[(0,n.jsx)(Z,{children:"날짜별"}),(0,n.jsxs)(ee,{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)(en,{children:"날짜"}),(0,n.jsx)(en,{children:"근무"}),(0,n.jsx)(en,{children:"가산"}),(0,n.jsx)(en,{children:"일 연장"})]})}),(0,n.jsx)("tbody",{children:e.days.map(e=>(0,n.jsxs)("tr",{children:[(0,n.jsxs)(et,{$highlight:e.isSunday||e.isHoliday,children:[m(e.date,e.weekday),e.isHoliday?" 공휴일":""]}),(0,n.jsx)(et,{children:e.workedHours}),(0,n.jsx)(et,{children:0===e.premiumHours?"-":`+${e.premiumHours}`}),(0,n.jsx)(et,{children:0===e.dailyOvertimeHours?"-":e.dailyOvertimeHours})]},e.date))})]})]}),(0,n.jsxs)(Q,{children:[(0,n.jsx)(Z,{children:"주별 (주 40시간)"}),(0,n.jsxs)(ee,{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)(en,{children:"기간"}),(0,n.jsx)(en,{children:"합계"}),(0,n.jsx)(en,{children:"일 연장"}),(0,n.jsx)(en,{children:"주 연장"})]})}),(0,n.jsx)("tbody",{children:e.weeks.map(e=>(0,n.jsxs)("tr",{children:[(0,n.jsxs)(et,{children:[g(e.start),"~",g(e.end),e.includesPreviousMonth?(0,n.jsx)(Y,{children:"전월 포함"}):null,e.deferredToNextMonth?(0,n.jsx)(Y,{children:"다음 달에 계산"}):null]}),(0,n.jsx)(et,{children:e.totalHours}),(0,n.jsx)(et,{children:0===e.dailyOvertimeHours?"-":e.dailyOvertimeHours}),(0,n.jsx)(et,{children:e.deferredToNextMonth||0===e.weeklyOvertimeHours?"-":e.weeklyOvertimeHours})]},e.start))})]}),e.statutoryHolidays.length>0?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Z,{children:"법정공휴일 유급수당 대상"}),(0,n.jsx)(el,{children:e.statutoryHolidays.map(e=>(0,n.jsxs)("li",{children:[m(e.date,e.weekday)," — ",e.eligible?"대상":"아님"," (",e.reason,")"]},e.date))})]}):null]}),(0,n.jsxs)(Q,{children:[(0,n.jsx)(Z,{children:"확인 필요 내역"}),0===e.anomalies.length?(0,n.jsx)(Y,{children:"없어요."}):(0,n.jsx)(el,{children:e.anomalies.map(e=>(0,n.jsxs)("li",{children:[g(e.date)," ",e.message]},`${e.type}-${e.recordIds.join("-")}`))}),e.retroactive.recordIds.length>0||e.refund.recordIds.length>0?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Z,{children:"소급결제·과오반납"}),(0,n.jsxs)(el,{children:[(0,n.jsxs)("li",{children:["소급결제 ",e.retroactive.recordIds.length,"건 · +",e.retroactive.hours,"시간 ·"," ",f(e.retroactive.amount)]}),(0,n.jsxs)("li",{children:["과오반납(취소된 근무) ",e.refund.recordIds.length,"건 · ",e.refund.hours,"시간 · ",f(e.refund.amount)]})]})]}):null,t.length>0?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Z,{children:"재정산 확인 — 지난 달 급여에 영향"}),(0,n.jsx)(el,{children:t.map(e=>(0,n.jsxs)("li",{children:[g(e.serviceDate)," 서비스"," ","RETROACTIVE"===e.kind?"소급결제":"과오반납"," ",e.hours>0?`+${e.hours}`:e.hours,"시간 ·"," ",f(e.amount),null===e.processedOn?"":` (${g(e.processedOn)} 처리)`]},e.recordId))})]}):null,(0,n.jsx)(Z,{children:"정책 확인 필요"}),(0,n.jsx)(el,{children:e.pendingPolicies.map(e=>(0,n.jsx)("li",{children:e},e))})]})]})}let _=r.default.section.withConfig({componentId:"zh__sc-6771860f-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;

  min-width: 0;
`,k=r.default.div.withConfig({componentId:"zh__sc-6771860f-1"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,I=r.default.h1.withConfig({componentId:"zh__sc-6771860f-2"})`
  font-size: 20px;
  font-weight: 700;
  color: #0a0a0a;
`,z=r.default.span.withConfig({componentId:"zh__sc-6771860f-3"})`
  padding: 4px 10px;
  border-radius: 99px;

  font-size: 13px;
  color: #4f39f6;

  background: #eef2ff;
`,$=r.default.div.withConfig({componentId:"zh__sc-6771860f-4"})`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: flex-end;
`,C=r.default.label.withConfig({componentId:"zh__sc-6771860f-5"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,H=r.default.span.withConfig({componentId:"zh__sc-6771860f-6"})`
  font-size: 12px;
  color: #98a2b3;
`,S=r.default.span.withConfig({componentId:"zh__sc-6771860f-7"})`
  font-size: 13px;
  color: #636978;
`,W=r.default.input.withConfig({componentId:"zh__sc-6771860f-8"})`
  width: 180px;
  height: 36px;
  padding: 0 10px;
  border: 1px solid #b1b8be;
  border-radius: 8px;

  font-size: 14px;
`,M=(0,r.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-6771860f-9"})`
  height: 36px;
  padding: 0 16px;
  font-size: 14px;
`,P=r.default.div.withConfig({componentId:"zh__sc-6771860f-10"})`
  display: flex;
  gap: 8px;
  margin-left: auto;
`,O=(0,r.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-6771860f-11"})`
  height: 36px;
  padding: 0 16px;
  font-size: 14px;
`,R=r.default.div.withConfig({componentId:"zh__sc-6771860f-12"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  padding: 10px 12px;
  border: 1px solid ${({$confirmed:e})=>e?"#2264e8":"#d0d5dd"};
  border-radius: 8px;

  font-size: 13px;
  color: ${({$confirmed:e})=>e?"#1d4ed8":"#344054"};

  background: ${({$confirmed:e})=>e?"#eff4ff":"#f9fafb"};
`,N=r.default.p.withConfig({componentId:"zh__sc-6771860f-13"})`
  padding: 10px 12px;
  border-radius: 8px;

  font-size: 13px;
  line-height: 20px;
  color: #475467;

  background: #f9fafb;
`,A=r.default.p.withConfig({componentId:"zh__sc-6771860f-14"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  padding: 10px 12px;
  border: 1px solid #fdb022;
  border-radius: 8px;

  font-size: 13px;
  color: #93370d;

  background: #fffaeb;
`,E=r.default.div.withConfig({componentId:"zh__sc-6771860f-15"})`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`,D=r.default.div.withConfig({componentId:"zh__sc-6771860f-16"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 150px;
  padding: 12px 14px;
  border: 1px solid ${({$warn:e})=>!0===e?"#fdb022":"#e5e7eb"};
  border-radius: 10px;

  background: ${({$warn:e})=>!0===e?"#fffaeb":"#fff"};
`,F=r.default.span.withConfig({componentId:"zh__sc-6771860f-17"})`
  font-size: 12px;
  color: #636978;
`,B=r.default.span.withConfig({componentId:"zh__sc-6771860f-18"})`
  font-size: 16px;
  font-weight: 600;
  color: #0a0a0a;
`,T=r.default.div.withConfig({componentId:"zh__sc-6771860f-19"})`
  overflow-x: auto;
  width: 100%;
`,U=r.default.table.withConfig({componentId:"zh__sc-6771860f-20"})`
  border-collapse: collapse;
  width: 100%;
  background: #fff;
`,K=r.default.th.withConfig({componentId:"zh__sc-6771860f-21"})`
  padding: 10px 8px;
  border-bottom: 1px solid #e5e7eb;

  font-size: 13px;
  font-weight: 600;
  color: #636978;
  text-align: center;
  white-space: nowrap;

  background: #f9fafb;
`,L=r.default.td.withConfig({componentId:"zh__sc-6771860f-22"})`
  padding: 10px 8px;
  border-bottom: 1px solid #f2f4f7;

  font-size: 14px;
  font-weight: ${({$strong:e})=>!0===e?600:400};
  color: #292b36;
  text-align: center;
  white-space: nowrap;
`,V=r.default.td.withConfig({componentId:"zh__sc-6771860f-23"})`
  padding: 12px 16px 20px;
  border-bottom: 1px solid #e5e7eb;
  background: #fcfcfd;
`,X=r.default.span.withConfig({componentId:"zh__sc-6771860f-24"})`
  padding: 2px 8px;
  border-radius: 99px;

  font-size: 12px;
  color: ${({$tone:e})=>"blue"===e?"#2264e8":"orange"===e?"#c4320a":"#636978"};

  background: ${({$tone:e})=>"blue"===e?"#eff4ff":"orange"===e?"#fff4ed":"#f2f4f7"};
`,Y=r.default.span.withConfig({componentId:"zh__sc-6771860f-25"})`
  display: block;
  font-size: 12px;
  color: #98a2b3;
`,G=r.default.span.withConfig({componentId:"zh__sc-6771860f-26"})`
  display: block;
  font-size: 12px;
  color: #d92d20;
`,q=(0,r.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-6771860f-27"})`
  height: 30px;
  padding: 0 10px;
  font-size: 13px;
`,J=r.default.div.withConfig({componentId:"zh__sc-6771860f-28"})`
  display: grid;
  grid-template-columns: repeat(3, minmax(240px, 1fr));
  gap: 24px;
  align-items: start;
`,Q=r.default.div.withConfig({componentId:"zh__sc-6771860f-29"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Z=r.default.h3.withConfig({componentId:"zh__sc-6771860f-30"})`
  margin-top: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #344054;
`,ee=r.default.table.withConfig({componentId:"zh__sc-6771860f-31"})`
  border-collapse: collapse;
  width: 100%;
`,en=r.default.th.withConfig({componentId:"zh__sc-6771860f-32"})`
  padding: 6px;
  border-bottom: 1px solid #e5e7eb;

  font-size: 12px;
  font-weight: 600;
  color: #636978;
  text-align: center;
`,et=r.default.td.withConfig({componentId:"zh__sc-6771860f-33"})`
  padding: 6px;
  border-bottom: 1px solid #f2f4f7;

  font-size: 13px;
  color: ${({$highlight:e})=>!0===e?"#d92d20":"#292b36"};
  text-align: center;
`,el=r.default.ul.withConfig({componentId:"zh__sc-6771860f-34"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  padding-left: 16px;

  font-size: 13px;
  color: #344054;
  list-style: disc;
`;e.s(["default",0,w],37418)}]);