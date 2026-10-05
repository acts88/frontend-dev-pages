(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,21050,e=>{"use strict";var t=e.i(39635),n=e.i(38803);let i=n.default.section.withConfig({componentId:"zh__sc-cb28bd11-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,l=n.default.div.withConfig({componentId:"zh__sc-cb28bd11-1"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
`,a=n.default.div.withConfig({componentId:"zh__sc-cb28bd11-2"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,o=n.default.div.withConfig({componentId:"zh__sc-cb28bd11-3"})`
  display: flex;
  align-items: center;
`,r=n.default.p.withConfig({componentId:"zh__sc-cb28bd11-4"})`
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
  white-space: nowrap;
`,d=n.default.div.withConfig({componentId:"zh__sc-cb28bd11-5"})`
  display: flex;
  gap: 4px;
  align-items: center;

  margin-left: 16px;

  color: #464c53;
`,s=(0,n.default)(t.default).withConfig({componentId:"zh__sc-cb28bd11-6"})`
  width: 24px;
  height: 24px;
`,c=n.default.div.withConfig({componentId:"zh__sc-cb28bd11-7"})`
  font-size: 18px;
  line-height: 20px; /* 111.111% */
`,f=n.default.div.withConfig({componentId:"zh__sc-cb28bd11-8"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,u=n.css`
  gap: 4px;
  height: 36px;
  padding: 8px 16px;
`,p=n.default.div.withConfig({componentId:"zh__sc-cb28bd11-9"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,h=n.default.div.withConfig({componentId:"zh__sc-cb28bd11-10"})`
  padding-bottom: 8px;

  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,g=n.default.div.withConfig({componentId:"zh__sc-cb28bd11-11"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,x=n.default.div.withConfig({componentId:"zh__sc-cb28bd11-12"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: flex-start;
  justify-content: flex-start;

  min-height: 59px;

  ${({$width:e})=>void 0!==e?`
        width: ${e}px;
      `:`
        flex: 1;
        min-width: 0;
      `}
`,b=n.default.div.withConfig({componentId:"zh__sc-cb28bd11-13"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,m=n.default.table.withConfig({componentId:"zh__sc-cb28bd11-14"})`
  border-collapse: collapse;
  width: 100%;
  font-size: 16px;
`,y=n.default.tr.withConfig({componentId:"zh__sc-cb28bd11-15"})`
  height: 40px;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
`,j=n.default.th.withConfig({componentId:"zh__sc-cb28bd11-16"})`
  padding: 0 16px;

  font-weight: 700;
  color: #131416;
  text-align: center;
  vertical-align: middle;
`,w=n.default.tr.withConfig({componentId:"zh__sc-cb28bd11-17"})`
  height: 56px;
  border-bottom: 1px solid #e5e7eb;
`,C=n.default.td.withConfig({componentId:"zh__sc-cb28bd11-18"})`
  padding: 0 16px;
  color: #464c53;
  text-align: center;
  vertical-align: middle;
`;e.s(["Data",0,x,"DataForm",0,p,"DataFormTitle",0,h,"DataLabel",0,b,"DataRow",0,g,"PageRoot",0,i,"Panel",0,l,"SectionHeader",0,a,"SectionHeaderLeft",0,o,"SectionHeaderRight",0,f,"SectionTitle",0,r,"SectionTitleInfo",0,d,"SectionTitleInfoIcon",0,s,"SectionTitleInfoText",0,c,"Table",0,m,"TableBodyCell",0,C,"TableBodyRow",0,w,"TableHeadCell",0,j,"TableHeadRow",0,y,"btnStyle",0,u,"inputStyle",0,{display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16}])},48478,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(38803),a=e.i(23416),o=e.i(64954),r=e.i(7242),d=e.i(43174),s=e.i(21050);let c=e=>"STAFF"===e.jobCategory?"STAFF":`SERVICE_WORKER:${e.serviceType}`,f=e=>"STAFF"===e.jobCategory?"사무직":`제공인력 (${r.default[e.serviceType].label})`,u=(e,t)=>e.jobCategory===t.jobCategory&&("STAFF"===t.jobCategory||e.serviceType===t.serviceType),p=e=>null==e?"미설정":`${e.toLocaleString("ko-KR")}원`,h=(e,t,n)=>null==e?"미설정":e?t:n,g=e=>{let t=e.replace(/,/g,"").trim();if(""===t)return null;let n=Number(t);return Number.isFinite(n)?n:null},x=0,b=()=>(x+=1,`allowance-${x}`),m={FLAT:"정액",ACTUAL:"실비"},y={BEFORE:"전날 지급",AFTER:"다음날 지급"};async function j(e){let[[t,n],[i,l],[o,r]]=await Promise.all([a.default.data.organization.getPayrollHrPolicies(e),a.default.data.organization.getPayrollWagePolicies(e),a.default.data.organization.getPayrollSettlementConfig(e)]);if(null!==t||null!==i||null!==o){let e=(t??i??o)?.message??"";return{error:""!==e?e:"인사·급여 설정을 불러오지 못했습니다."}}return{error:null,hr:n,wage:l,settlement:r}}let w=(0,n.observer)(function(){let e=d.default.data.auth.me.data?.organizationId??null,n=d.default.data.organization.serviceList,[l,a]=(0,i.useState)("hr"),[o,r]=(0,i.useState)(null),[p,h]=(0,i.useState)(null),[g,x]=(0,i.useState)(null),[b,m]=(0,i.useState)(null),[y,w]=(0,i.useState)(null);(0,i.useEffect)(()=>{null!==e&&n.query?.id!==e&&n.setQuery({id:e})},[e,n]);let[S,z]=(0,i.useState)(0),F=()=>z(e=>e+1);(0,i.useEffect)(()=>{if(null===e)return;let t=!1;return j(e).then(e=>{if(!t){if(null!==e.error)return void m(e.error);m(null),r(e.hr),h(e.wage),x(e.settlement)}}),()=>{t=!0}},[e,S]);let k=(0,i.useMemo)(()=>[...(n.data?.serviceList??[]).filter(e=>!0===e.operatingStatus).map(e=>e.type).map(e=>({jobCategory:"SERVICE_WORKER",serviceType:e})),{jobCategory:"STAFF"}],[n.data]),$=k.find(e=>c(e)===y)??k[0];if(null!==b)return(0,t.jsx)(s.PageRoot,{children:(0,t.jsx)(s.Panel,{children:(0,t.jsxs)(I,{children:[b," 급여 지급·정산 권한이 있어야 볼 수 있어요."]})})});if(null===o||null===p||void 0===$)return(0,t.jsx)(s.PageRoot,{children:(0,t.jsx)(s.Panel,{children:(0,t.jsx)(I,{children:"인사·급여 설정을 불러오는 중…"})})});let P=o.find(e=>u(e,$))??null,D=p.filter(e=>u(e,$)),W=D.find(e=>null===e.effectiveTo)??D[0]??null;return(0,t.jsx)(s.PageRoot,{children:(0,t.jsxs)(s.Panel,{children:[(0,t.jsx)(s.SectionHeader,{children:(0,t.jsxs)(s.SectionHeaderLeft,{children:[(0,t.jsx)(s.SectionTitle,{children:"인사∙급여 설정"}),(0,t.jsx)(s.SectionTitleInfo,{children:(0,t.jsx)(s.SectionTitleInfoText,{children:"평소에는 읽기 전용이에요. 섹션마다 [수정하기]를 눌러 고쳐요. 직군·서비스별로 따로 정해요."})})]})}),(0,t.jsxs)(T,{children:[(0,t.jsx)(E,{type:"button",$active:"hr"===l,onClick:()=>a("hr"),children:"인사/계약 설정"}),(0,t.jsx)(E,{type:"button",$active:"pay"===l,onClick:()=>a("pay"),children:"급여/정산 설정"})]}),"pay"===l&&null!==e&&(0,t.jsx)(C,{organizationId:e,settlement:g,onSaved:e=>x(e)}),(0,t.jsx)(A,{children:k.map(e=>(0,t.jsx)(R,{type:"button",$selected:c(e)===c($),onClick:()=>w(c(e)),children:f(e)},c(e)))}),null!==e&&"hr"===l&&(0,t.jsx)(_,{organizationId:e,job:$,policy:P,onSaved:F},`hr-${c($)}`),null!==e&&"pay"===l&&(0,t.jsx)(v,{organizationId:e,job:$,current:W,historyCount:D.length,onSaved:F},`wage-${c($)}`)]})})});function C({organizationId:e,settlement:n,onSaved:l}){let[o,r]=(0,i.useState)(!1),[s,c]=(0,i.useState)(String(n?.payDay??10)),[f,u]=(0,i.useState)(n?.holidayPayRule??"BEFORE"),[p,h]=(0,i.useState)(!1),x=async()=>{let t=g(s);if(null===t||t<1||t>31||!0!==Number.isInteger(t))return void d.default.ui.layout.toast.error("급여 지급일은 1~31 사이 숫자로 입력해주세요.");h(!0);let[n,i]=await a.default.data.organization.setPayrollSettlementConfig({orgId:e,payload:{payDay:t,holidayPayRule:f}});(h(!1),null!==n)?d.default.ui.layout.toast.error(n.message||"정산 기본 설정을 저장하지 못했습니다."):(l(i),r(!1),d.default.ui.layout.toast.success("정산 기본 설정을 저장했습니다."))};return(0,t.jsxs)(F,{children:[(0,t.jsxs)(k,{children:[(0,t.jsx)($,{children:"정산 기본 설정 (모든 직군 공통)"}),(0,t.jsx)(S,{isEditing:o,isSaving:p,onEdit:()=>r(!0),onCancel:()=>{c(String(n?.payDay??10)),u(n?.holidayPayRule??"BEFORE"),r(!1)},onSave:()=>void x()})]}),(0,t.jsxs)(W,{children:[(0,t.jsx)(z,{label:"급여 지급일",children:o?(0,t.jsxs)(B,{children:["매월",(0,t.jsx)(L,{value:s,inputMode:"numeric",onChange:e=>c(e.target.value)}),"일"]}):null===n?"미설정":`매월 ${n.payDay}일`}),(0,t.jsx)(z,{label:"공휴일이면",children:o?(0,t.jsx)(M,{children:["BEFORE","AFTER"].map(e=>(0,t.jsxs)(N,{children:[(0,t.jsx)("input",{type:"radio",checked:f===e,onChange:()=>u(e)}),y[e]]},e))}):null===n?"미설정":y[n.holidayPayRule]})]})]})}function _({organizationId:e,job:n,policy:l,onSaved:o}){let r={tiers:l?.contractDurationTiers?.join(", ")??"",retirementAge:l?.mandatoryRetirementAge?.toString()??"",probationEnabled:l?.probationEnabled??!1,probationMonths:l?.probationPeriodMonths?.toString()??"",probationRatio:l?.probationPayRatioPercent?.toString()??"",maxDaily:l?.maxDailyWorkingHours?.toString()??"",maxWeekly:l?.maxWeeklyWorkingHours?.toString()??"",fixedTerm:l?.fixedTermEnabled??!1},[s,c]=(0,i.useState)(r),[u,p]=(0,i.useState)(!1),[x,b]=(0,i.useState)(!1),m="SERVICE_WORKER"===n.jobCategory&&("MEAL"===n.serviceType||"NUTRITION"===n.serviceType),y=async()=>{let t=""===s.tiers.trim()?null:s.tiers.split(/[,\s]+/).filter(Boolean).map(e=>Number(e));if(null!==t&&t.some(e=>!0!==Number.isInteger(e)||e<1))return void d.default.ui.layout.toast.error("계약기간은 1 이상의 개월 수를 쉼표로 나눠 입력해주세요. (예: 6, 6, 12)");b(!0);let[i]=await a.default.data.organization.setPayrollHrPolicy({orgId:e,jobCategory:n.jobCategory,payload:{serviceType:"STAFF"===n.jobCategory?null:n.serviceType,contractDurationTiers:t,mandatoryRetirementAge:g(s.retirementAge),probationEnabled:s.probationEnabled,probationPeriodMonths:s.probationEnabled?g(s.probationMonths):null,probationPayRatioPercent:s.probationEnabled?g(s.probationRatio):null,maxDailyWorkingHours:g(s.maxDaily),maxWeeklyWorkingHours:g(s.maxWeekly),fixedTermEnabled:s.fixedTerm}});(b(!1),null!==i)?d.default.ui.layout.toast.error(i.message||"인사/계약 설정을 저장하지 못했습니다."):(p(!1),d.default.ui.layout.toast.success(`${f(n)} 인사/계약 설정을 저장했습니다.`),o())},j=(e,n,i="")=>u?(0,t.jsxs)(B,{children:[(0,t.jsx)(L,{value:s[e],placeholder:i,style:"tiers"===e?{width:160}:void 0,onChange:t=>c({...s,[e]:t.target.value})}),n]}):""===r[e]?"미설정":`${r[e]}${n}`;return(0,t.jsxs)(F,{children:[(0,t.jsxs)(k,{children:[(0,t.jsx)($,{children:`${f(n)} — 인사/계약 규칙`}),(0,t.jsx)(S,{isEditing:u,isSaving:x,onEdit:()=>p(!0),onCancel:()=>{c(r),p(!1)},onSave:()=>void y()})]}),m&&(0,t.jsx)(D,{children:"일상돌봄(식사·영양)은 근로계약 종료일이 서비스 운영 종료일을 넘지 않게 자동으로 맞춰져요. 아래 차수별 계약기간은 그 안에서만 적용돼요."}),(0,t.jsxs)(W,{children:["SERVICE_WORKER"===n.jobCategory&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(z,{label:"차수별 계약기간",children:j("tiers"," 개월","예: 6, 6, 12")}),(0,t.jsx)(z,{label:"정년",children:j("retirementAge","세")}),(0,t.jsx)(z,{label:"하루 최대 근로시간",children:j("maxDaily","시간")}),(0,t.jsx)(z,{label:"주 최대 근로시간",children:j("maxWeekly","시간")})]}),(0,t.jsx)(z,{label:"수습 기간",children:u?(0,t.jsxs)(N,{children:[(0,t.jsx)("input",{type:"checkbox",checked:s.probationEnabled,onChange:e=>c({...s,probationEnabled:e.target.checked})}),"적용"]}):h(l?.probationEnabled,"적용","미적용")}),(u?s.probationEnabled:l?.probationEnabled===!0)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(z,{label:"수습 기간 길이",children:j("probationMonths","개월")}),(0,t.jsx)(z,{label:"수습 기간 급여",children:j("probationRatio","%")})]}),"STAFF"===n.jobCategory&&(0,t.jsx)(z,{label:"기간제 계약",children:u?(0,t.jsxs)(N,{children:[(0,t.jsx)("input",{type:"checkbox",checked:s.fixedTerm,onChange:e=>c({...s,fixedTerm:e.target.checked})}),"기간제로 계약"]}):h(l?.fixedTermEnabled,"기간제","정규(무기)")})]})]})}function v({organizationId:e,job:n,current:l,historyCount:r,onSaved:s}){let c,u,x={hourly:l?.hourlyWage?.toString()??"",daily:l?.dailyWage?.toString()??"",fuelType:l?.fuelAllowanceType??null,fuelAmount:l?.fuelAllowanceAmount?.toString()??"",insurance:l?.insuranceDefaultApplicable??!0,retirement:l?.retirementPayDefaultEligible??!0,allowances:(l?.extraAllowances??[]).map(e=>({...e,uid:b()})),effectiveFrom:(c=new Date,u=e=>String(e).padStart(2,"0"),`${c.getFullYear()}-${u(c.getMonth()+1)}-${u(c.getDate())}`)},[y,j]=(0,i.useState)(x),[w,C]=(0,i.useState)(!1),[_,I]=(0,i.useState)(!1),T=(e,t)=>{j({...y,allowances:y.allowances.map(n=>n.uid===e?{...n,...t}:n)})},E=async()=>{let t=y.allowances.filter(e=>""!==e.name.trim());I(!0);let[i]=await a.default.data.organization.setPayrollWagePolicy({orgId:e,jobCategory:n.jobCategory,payload:{serviceType:"STAFF"===n.jobCategory?null:n.serviceType,hourlyWage:g(y.hourly),dailyWage:g(y.daily),fuelAllowanceType:y.fuelType,fuelAllowanceAmount:null===y.fuelType?null:g(y.fuelAmount),insuranceDefaultApplicable:y.insurance,retirementPayDefaultEligible:y.retirement,extraAllowances:t.map(e=>({name:e.name.trim(),amount:e.amount})),effectiveFrom:y.effectiveFrom}});(I(!1),null!==i)?d.default.ui.layout.toast.error(i.message||"급여 설정을 저장하지 못했습니다."):(C(!1),d.default.ui.layout.toast.success(`${f(n)} 급여 설정을 ${y.effectiveFrom}부터 적용해요.`),s())},A=e=>(0,t.jsxs)(B,{children:[(0,t.jsx)(L,{value:y[e],inputMode:"numeric",style:{width:120},onChange:t=>j({...y,[e]:t.target.value.replace(/[^\d]/g,"")})}),"원"]});return(0,t.jsxs)(F,{children:[(0,t.jsxs)(k,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)($,{children:`${f(n)} — 급여 설정`}),(0,t.jsx)(P,{children:null===l?"아직 설정이 없어요.":`${l.effectiveFrom}부터 적용 중${r>1?` \xb7 이전 기록 ${r-1}건`:""}`})]}),(0,t.jsx)(S,{isEditing:w,isSaving:_,onEdit:()=>C(!0),onCancel:()=>{j(x),C(!1)},onSave:()=>void E()})]}),(0,t.jsxs)(W,{children:[(0,t.jsx)(z,{label:"시급",children:w?A("hourly"):p(l?.hourlyWage)}),(0,t.jsx)(z,{label:"일급",children:w?A("daily"):p(l?.dailyWage)}),(0,t.jsx)(z,{label:"주유비 (교통·활동비)",children:w?(0,t.jsxs)(B,{children:[[null,"FLAT","ACTUAL"].map(e=>(0,t.jsxs)(N,{children:[(0,t.jsx)("input",{type:"radio",checked:y.fuelType===e,onChange:()=>j({...y,fuelType:e})}),null===e?"없음":m[e]]},e??"none")),null!==y.fuelType&&A("fuelAmount")]}):l?.fuelAllowanceType===null||l?.fuelAllowanceType===void 0?"없음":`${m[l.fuelAllowanceType]} ${p(l.fuelAllowanceAmount)}`}),(0,t.jsx)(z,{label:"4대보험",children:w?(0,t.jsxs)(N,{children:[(0,t.jsx)("input",{type:"checkbox",checked:y.insurance,onChange:e=>j({...y,insurance:e.target.checked})}),"적용"]}):h(l?.insuranceDefaultApplicable,"적용","미적용(프리랜서 등)")}),(0,t.jsx)(z,{label:"퇴직금",children:w?(0,t.jsxs)(N,{children:[(0,t.jsx)("input",{type:"checkbox",checked:y.retirement,onChange:e=>j({...y,retirement:e.target.checked})}),"지급 대상"]}):h(l?.retirementPayDefaultEligible,"대상","비대상")}),(0,t.jsx)(z,{label:"기타 수당",children:w?(0,t.jsxs)(K,{children:[y.allowances.map(e=>(0,t.jsxs)(B,{children:[(0,t.jsx)(L,{value:e.name,placeholder:"예: 직책 수당",style:{width:140},onChange:t=>T(e.uid,{name:t.target.value})}),(0,t.jsx)(L,{value:0===e.amount?"":String(e.amount),inputMode:"numeric",style:{width:110},onChange:t=>T(e.uid,{amount:Number(t.target.value.replace(/[^\d]/g,"")||0)})}),"원",(0,t.jsx)(U,{type:"button",onClick:()=>j({...y,allowances:y.allowances.filter(t=>t.uid!==e.uid)}),children:"빼기"})]},e.uid)),(0,t.jsx)(U,{type:"button",onClick:()=>j({...y,allowances:[...y.allowances,{name:"",amount:0,uid:b()}]}),children:"+ 수당 추가"})]}):0===(l?.extraAllowances??[]).length?"없음":(l?.extraAllowances??[]).map(e=>`${e.name} ${p(e.amount)}`).join(" · ")}),w&&(0,t.jsx)(z,{label:"적용 시작일",children:(0,t.jsxs)(B,{children:[(0,t.jsx)(o.default.Input.Date,{value:y.effectiveFrom,onChange:e=>j({...y,effectiveFrom:e}),style:{width:160,height:32}}),(0,t.jsx)(V,{children:"이날부터 새 급여 설정을 쓰고, 이전 설정은 기록으로 남아요."})]})})]})]})}function S({isEditing:e,isSaving:n,onEdit:i,onCancel:l,onSave:a}){return e?(0,t.jsxs)(q,{children:[(0,t.jsx)(Q,{type:"button",disabled:n,onClick:l,children:"취소하기"}),(0,t.jsx)(Y,{type:"button",disabled:n,onClick:a,children:n?"저장하는 중…":"저장하기"})]}):(0,t.jsx)(Q,{type:"button",onClick:i,children:"수정하기"})}function z({label:e,children:n}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(H,{children:e}),(0,t.jsx)(O,{children:n})]})}let I=l.default.p.withConfig({componentId:"zh__sc-fadb2d06-0"})`
  font-size: 15px;
  color: #6b7280;
`,T=l.default.div.withConfig({componentId:"zh__sc-fadb2d06-1"})`
  display: flex;
  gap: 6px;
  margin-bottom: 16px;
`,E=l.default.button.withConfig({componentId:"zh__sc-fadb2d06-2"})`
  cursor: pointer;

  height: 36px;
  padding: 0 16px;
  border: 1px solid ${({$active:e})=>e?"#4f39f6":"#d5dbe3"};
  border-radius: 8px;

  font-size: 14px;
  font-weight: 700;
  color: ${({$active:e})=>e?"#fff":"#475467"};

  background: ${({$active:e})=>e?"#4f39f6":"#fff"};
`,A=l.default.div.withConfig({componentId:"zh__sc-fadb2d06-3"})`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 8px 0 12px;
`,R=l.default.button.withConfig({componentId:"zh__sc-fadb2d06-4"})`
  cursor: pointer;

  height: 32px;
  padding: 0 12px;
  border: 1px solid ${({$selected:e})=>e?"#4f39f6":"#d5dbe3"};
  border-radius: 999px;

  font-size: 13px;
  font-weight: 600;
  color: ${({$selected:e})=>e?"#4f39f6":"#636978"};

  background: ${({$selected:e})=>e?"#eef2ff":"#fff"};
`,F=l.default.div.withConfig({componentId:"zh__sc-fadb2d06-5"})`
  align-self: stretch;

  margin-bottom: 16px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`,k=l.default.div.withConfig({componentId:"zh__sc-fadb2d06-6"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 16px;
`,$=l.default.p.withConfig({componentId:"zh__sc-fadb2d06-7"})`
  font-size: 16px;
  font-weight: 700;
  color: #292b36;
`,P=l.default.p.withConfig({componentId:"zh__sc-fadb2d06-8"})`
  margin-top: 4px;
  font-size: 13px;
  color: #636978;
`,D=l.default.p.withConfig({componentId:"zh__sc-fadb2d06-9"})`
  margin-bottom: 12px;
  padding: 10px 12px;
  border-radius: 6px;

  font-size: 13px;
  color: #475467;

  background: #f2f4f7;
`,W=l.default.div.withConfig({componentId:"zh__sc-fadb2d06-10"})`
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: 12px 16px;
  align-items: center;
`,H=l.default.span.withConfig({componentId:"zh__sc-fadb2d06-11"})`
  font-size: 14px;
  font-weight: 600;
  color: #636978;
`,O=l.default.div.withConfig({componentId:"zh__sc-fadb2d06-12"})`
  font-size: 14px;
  color: #292b36;
`,B=l.default.div.withConfig({componentId:"zh__sc-fadb2d06-13"})`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`,L=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-fadb2d06-14"})`
  width: 72px;
  height: 32px;
  padding: 0 8px;
`,M=l.default.div.withConfig({componentId:"zh__sc-fadb2d06-15"})`
  display: inline-flex;
  gap: 16px;
`,N=l.default.label.withConfig({componentId:"zh__sc-fadb2d06-16"})`
  cursor: pointer;

  display: inline-flex;
  gap: 6px;
  align-items: center;

  font-size: 14px;
`,K=l.default.div.withConfig({componentId:"zh__sc-fadb2d06-17"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
`,U=l.default.button.withConfig({componentId:"zh__sc-fadb2d06-18"})`
  cursor: pointer;

  padding: 0;
  border: 0;

  font-size: 13px;
  font-weight: 600;
  color: #4f39f6;

  background: none;
`,V=l.default.span.withConfig({componentId:"zh__sc-fadb2d06-19"})`
  font-size: 12px;
  color: #98a2b3;
`,q=l.default.div.withConfig({componentId:"zh__sc-fadb2d06-20"})`
  display: flex;
  gap: 8px;
`,Q=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-fadb2d06-21"})`
  ${s.btnStyle}
  white-space: nowrap;
`,Y=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-fadb2d06-22"})`
  ${s.btnStyle}
  white-space: nowrap;
`;e.s(["default",0,w])}]);