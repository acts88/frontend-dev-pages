(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,21050,e=>{"use strict";var t=e.i(39635),n=e.i(38803);let i=n.default.section.withConfig({componentId:"zh__sc-cb28bd11-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,o=n.default.div.withConfig({componentId:"zh__sc-cb28bd11-1"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
`,l=n.default.div.withConfig({componentId:"zh__sc-cb28bd11-2"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,d=n.default.div.withConfig({componentId:"zh__sc-cb28bd11-3"})`
  display: flex;
  align-items: center;
`,a=n.default.p.withConfig({componentId:"zh__sc-cb28bd11-4"})`
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
  white-space: nowrap;
`,s=n.default.div.withConfig({componentId:"zh__sc-cb28bd11-5"})`
  display: flex;
  gap: 4px;
  align-items: center;

  margin-left: 16px;

  color: #464c53;
`,c=(0,n.default)(t.default).withConfig({componentId:"zh__sc-cb28bd11-6"})`
  width: 24px;
  height: 24px;
`,r=n.default.div.withConfig({componentId:"zh__sc-cb28bd11-7"})`
  font-size: 18px;
  line-height: 20px; /* 111.111% */
`,f=n.default.div.withConfig({componentId:"zh__sc-cb28bd11-8"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,p=n.css`
  gap: 4px;
  height: 36px;
  padding: 8px 16px;
`,h=n.default.div.withConfig({componentId:"zh__sc-cb28bd11-9"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,x=n.default.div.withConfig({componentId:"zh__sc-cb28bd11-10"})`
  padding-bottom: 8px;

  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,u=n.default.div.withConfig({componentId:"zh__sc-cb28bd11-11"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,g=n.default.div.withConfig({componentId:"zh__sc-cb28bd11-12"})`
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
`,w=n.default.tr.withConfig({componentId:"zh__sc-cb28bd11-15"})`
  height: 40px;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
`,_=n.default.th.withConfig({componentId:"zh__sc-cb28bd11-16"})`
  padding: 0 16px;

  font-weight: 700;
  color: #131416;
  text-align: center;
  vertical-align: middle;
`,j=n.default.tr.withConfig({componentId:"zh__sc-cb28bd11-17"})`
  height: 56px;
  border-bottom: 1px solid #e5e7eb;
`,z=n.default.td.withConfig({componentId:"zh__sc-cb28bd11-18"})`
  padding: 0 16px;
  color: #464c53;
  text-align: center;
  vertical-align: middle;
`;e.s(["Data",0,g,"DataForm",0,h,"DataFormTitle",0,x,"DataLabel",0,b,"DataRow",0,u,"PageRoot",0,i,"Panel",0,o,"SectionHeader",0,l,"SectionHeaderLeft",0,d,"SectionHeaderRight",0,f,"SectionTitle",0,a,"SectionTitleInfo",0,s,"SectionTitleInfoIcon",0,c,"SectionTitleInfoText",0,r,"Table",0,m,"TableBodyCell",0,z,"TableBodyRow",0,j,"TableHeadCell",0,_,"TableHeadRow",0,w,"btnStyle",0,p,"inputStyle",0,{display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16}])},60139,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),o=e.i(38803),l=e.i(64954),d=e.i(43174),a=e.i(21050),s=e.i(23416);let c={GET:"조회",POST:"등록·처리",PUT:"수정",PATCH:"수정",DELETE:"삭제"},r=e=>String(e).padStart(2,"0"),f=()=>{let e=new Date;return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}`};function p({staff:e}){let[n,o]=(0,i.useState)(()=>({from:`${f().slice(0,8)}01`,to:f()})),[l,d]=(0,i.useState)(n),[a,S]=(0,i.useState)([]),[k,T]=(0,i.useState)(null),[O,R]=(0,i.useState)(null),[A,D]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=!1;return s.default.data.accessLog.list({...n,limit:100}).then(([t,n])=>{if(!e){if(null!==t){R("접속 기록을 불러오지 못했어요."),S([]),T(null);return}R(null),S(n.items),T(n.nextBeforeId)}}),()=>{e=!0}},[n]);let E=async()=>{if(null===k)return;D(!0);let[e,t]=await s.default.data.accessLog.list({...n,limit:100,beforeId:k});(D(!1),null!==e)?R("접속 기록을 더 불러오지 못했어요."):(S(e=>[...e,...t.items]),T(t.nextBeforeId))};return(0,t.jsxs)(h,{children:[(0,t.jsx)(x,{children:"개인정보 접속 기록"}),(0,t.jsx)(u,{children:"담당자가 언제·어디서(IP)·어떤 화면과 대상을 조회·수정했는지 남아요. 주민번호를 다루는 시스템이라 2년 이상 보관하고, 월 1회 이상 점검해 주세요(개인정보의 안전성 확보조치 기준)."}),(0,t.jsxs)(g,{children:[(0,t.jsxs)(b,{children:[(0,t.jsx)(m,{children:"담당자"}),(0,t.jsxs)(w,{value:l.staffAccountId??"",onChange:e=>d(t=>({...t,staffAccountId:""===e.target.value?void 0:e.target.value})),children:[(0,t.jsx)("option",{value:"",children:"전체"}),e.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)(m,{children:"시작일"}),(0,t.jsx)(_,{type:"date",value:l.from??"",onChange:e=>d(t=>({...t,from:e.target.value}))})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)(m,{children:"종료일"}),(0,t.jsx)(_,{type:"date",value:l.to??"",onChange:e=>d(t=>({...t,to:e.target.value}))})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)(m,{children:"경로에 포함"}),(0,t.jsx)(_,{placeholder:"예: clients/12",value:l.pathContains??"",onChange:e=>d(t=>({...t,pathContains:e.target.value}))})]}),(0,t.jsx)(j,{type:"button",onClick:()=>o({...l}),children:"조회"})]}),null!==O?(0,t.jsx)(z,{children:O}):null,(0,t.jsxs)(I,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(C,{children:"일시"}),(0,t.jsx)(C,{children:"담당자"}),(0,t.jsx)(C,{children:"업무"}),(0,t.jsx)(C,{children:"경로(대상)"}),(0,t.jsx)(C,{children:"결과"}),(0,t.jsx)(C,{children:"접속지(IP)"})]})}),(0,t.jsx)("tbody",{children:0===a.length?(0,t.jsx)("tr",{children:(0,t.jsx)(y,{colSpan:6,children:"조건에 맞는 접속 기록이 없어요."})}):a.map(e=>{let n;return(0,t.jsxs)("tr",{children:[(0,t.jsx)(y,{children:(n=new Date(e.createdAt),`${n.getFullYear()}.${r(n.getMonth()+1)}.${r(n.getDate())} ${r(n.getHours())}:${r(n.getMinutes())}:${r(n.getSeconds())}`)}),(0,t.jsx)(y,{children:e.staffName??`담당자 #${e.staffAccountId}`}),(0,t.jsx)(y,{children:c[e.method]??e.method}),(0,t.jsxs)(y,{$left:!0,title:null===e.query?e.path:`${e.path}?${e.query}`,children:[e.path,null===e.query?null:(0,t.jsxs)(v,{children:["?",e.query]})]}),(0,t.jsx)(y,{$warn:e.statusCode>=400,children:e.statusCode}),(0,t.jsx)(y,{children:e.ipAddress??"-"})]},e.id)})})]}),null!==k?(0,t.jsx)($,{type:"button",disabled:A,onClick:()=>void E(),children:A?"불러오는 중…":"더 보기"}):null]})}let h=o.default.section.withConfig({componentId:"zh__sc-e6be666-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
`,x=o.default.h3.withConfig({componentId:"zh__sc-e6be666-1"})`
  font-size: 16px;
  font-weight: 700;
  color: #0a0a0a;
`,u=o.default.p.withConfig({componentId:"zh__sc-e6be666-2"})`
  font-size: 13px;
  color: #6b7280;
`,g=o.default.div.withConfig({componentId:"zh__sc-e6be666-3"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: flex-end;
`,b=o.default.label.withConfig({componentId:"zh__sc-e6be666-4"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,m=o.default.span.withConfig({componentId:"zh__sc-e6be666-5"})`
  font-size: 12px;
  color: #636978;
`,w=o.default.select.withConfig({componentId:"zh__sc-e6be666-6"})`
  height: 34px;
  padding: 0 8px;
  border: 1px solid #b1b8be;
  border-radius: 6px;
`,_=o.default.input.withConfig({componentId:"zh__sc-e6be666-7"})`
  height: 34px;
  padding: 0 8px;
  border: 1px solid #b1b8be;
  border-radius: 6px;
`,j=o.default.button.withConfig({componentId:"zh__sc-e6be666-8"})`
  height: 34px;
  padding: 0 16px;
  border: none;
  border-radius: 6px;

  font-size: 13px;
  color: #fff;

  background: #4f39f6;
`,z=o.default.p.withConfig({componentId:"zh__sc-e6be666-9"})`
  font-size: 13px;
  color: #d92d20;
`,I=o.default.table.withConfig({componentId:"zh__sc-e6be666-10"})`
  border-collapse: collapse;
  width: 100%;
`,C=o.default.th.withConfig({componentId:"zh__sc-e6be666-11"})`
  padding: 8px;
  border-bottom: 1px solid #e5e7eb;

  font-size: 13px;
  font-weight: 600;
  color: #636978;
  text-align: center;
  white-space: nowrap;

  background: #f9fafb;
`,y=o.default.td.withConfig({componentId:"zh__sc-e6be666-12"})`
  overflow: hidden;

  max-width: 420px;
  padding: 8px;
  border-bottom: 1px solid #f2f4f7;

  font-size: 13px;
  color: ${({$warn:e})=>!0===e?"#c4320a":"#292b36"};
  text-align: ${({$left:e})=>!0===e?"left":"center"};
  text-overflow: ellipsis;
  white-space: nowrap;
`,v=o.default.span.withConfig({componentId:"zh__sc-e6be666-13"})`
  color: #98a2b3;
`,$=o.default.button.withConfig({componentId:"zh__sc-e6be666-14"})`
  align-self: center;

  height: 32px;
  padding: 0 16px;
  border: 1px solid #d0d5dd;
  border-radius: 6px;

  font-size: 13px;
  color: #344054;

  background: #fff;
`,S={SUPER_ADMIN:"최고 관리자",ORG_ADMIN:"기관 관리자",STAFF:"일반 담당자",SERVICE_WORKER:"제공인력"},k=e=>String(e).padStart(2,"0");function T({areas:e,positions:n,reloadKey:o}){let[l,d]=(0,i.useState)([]),[a,c]=(0,i.useState)(null),[r,f]=(0,i.useState)(null),[p,h]=(0,i.useState)(!1),x=(0,i.useMemo)(()=>{let t=new Map;for(let n of e)for(let e of n.actions)t.set(e.permissionKey,`${n.label} \xb7 ${e.label}`);return t},[e]),u=e=>"없음"===e?"없음":n.find(t=>t.id===e)?.name??`직책 #${e}`;(0,i.useEffect)(()=>{let e=!1;return s.default.data.permissionSetting.getHistory({limit:30}).then(([t,n])=>{if(!e){if(null!==t)return void f("변경 이력을 불러오지 못했어요.");f(null),d(n.items),c(n.nextBeforeId)}}),()=>{e=!0}},[o]);let g=async()=>{if(null===a)return;h(!0);let[e,t]=await s.default.data.permissionSetting.getHistory({limit:30,beforeId:a});(h(!1),null!==e)?f("변경 이력을 더 불러오지 못했어요."):(d(e=>[...e,...t.items]),c(t.nextBeforeId))};return(0,t.jsxs)(O,{children:[(0,t.jsx)(R,{children:"권한 변경 이력"}),(0,t.jsx)(A,{children:"권한·역할·직책을 바꾼 기록이에요. 지워지지 않고 남아요(개인정보 접근권한 관리 기록)."}),null!==r?(0,t.jsx)(D,{children:r}):null,(0,t.jsxs)(E,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(K,{children:"일시"}),(0,t.jsx)(K,{children:"변경한 사람"}),(0,t.jsx)(K,{children:"대상"}),(0,t.jsx)(K,{children:"내용"})]})}),(0,t.jsx)("tbody",{children:0===l.length?(0,t.jsx)("tr",{children:(0,t.jsx)(P,{colSpan:4,children:"아직 변경 이력이 없어요."})}):l.map(e=>{let n;return(0,t.jsxs)("tr",{children:[(0,t.jsx)(P,{children:(n=new Date(e.createdAt),`${n.getFullYear()}.${k(n.getMonth()+1)}.${k(n.getDate())} ${k(n.getHours())}:${k(n.getMinutes())}`)}),(0,t.jsx)(P,{children:e.actorName??"-"}),(0,t.jsx)(P,{children:"POSITION"===e.targetType?`직책 '${e.targetName??e.staffPositionId??""}'`:e.targetName??`담당자 #${e.staffAccountId??""}`}),(0,t.jsx)(P,{$left:!0,$tone:e.changeType,children:(e=>{let[t="",n=""]=(e.detail??"").split("→");switch(e.changeType){case"ALLOW":return`${x.get(e.permissionKey??"")??e.permissionKey??""} → 허용`;case"DENY":return`${x.get(e.permissionKey??"")??e.permissionKey??""} → 제한`;case"RESET":return`${x.get(e.permissionKey??"")??e.permissionKey??""} → 기본값으로`;case"ROLE":return`역할 ${S[t]??t} → ${S[n]??n}`;case"POSITION":return`직책 ${u(t)} → ${u(n)}`;case"ACCOUNT_REMOVED":return"계정 삭제 — 모든 권한 말소"}})(e)})]},e.id)})})]}),null!==a?(0,t.jsx)(N,{type:"button",disabled:p,onClick:()=>void g(),children:p?"불러오는 중…":"더 보기"}):null]})}let O=o.default.section.withConfig({componentId:"zh__sc-4f8601a6-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
`,R=o.default.h3.withConfig({componentId:"zh__sc-4f8601a6-1"})`
  font-size: 16px;
  font-weight: 700;
  color: #0a0a0a;
`,A=o.default.p.withConfig({componentId:"zh__sc-4f8601a6-2"})`
  font-size: 13px;
  color: #6b7280;
`,D=o.default.p.withConfig({componentId:"zh__sc-4f8601a6-3"})`
  font-size: 13px;
  color: #d92d20;
`,E=o.default.table.withConfig({componentId:"zh__sc-4f8601a6-4"})`
  border-collapse: collapse;
  width: 100%;
`,K=o.default.th.withConfig({componentId:"zh__sc-4f8601a6-5"})`
  padding: 8px;
  border-bottom: 1px solid #e5e7eb;

  font-size: 13px;
  font-weight: 600;
  color: #636978;
  text-align: center;
  white-space: nowrap;

  background: #f9fafb;
`,P=o.default.td.withConfig({componentId:"zh__sc-4f8601a6-6"})`
  padding: 8px;
  border-bottom: 1px solid #f2f4f7;

  font-size: 13px;
  color: ${({$tone:e})=>"DENY"===e?"#c4320a":"ALLOW"===e?"#2264e8":"#292b36"};
  text-align: ${({$left:e})=>!0===e?"left":"center"};
  white-space: nowrap;
`,N=o.default.button.withConfig({componentId:"zh__sc-4f8601a6-7"})`
  align-self: center;

  height: 32px;
  padding: 0 16px;
  border: 1px solid #d0d5dd;
  border-radius: 6px;

  font-size: 13px;
  color: #344054;

  background: #fff;
`,M={all:{mark:"✓",label:"전체 허용"},some:{mark:"△",label:"일부 허용"},none:{mark:"-",label:"전체 제한"}},H=(e,t)=>e.size===t.size&&[...e].every(e=>t.has(e)),L=(0,n.observer)(function(){let e,n=d.default.data.permissionSetting,o=n.data,[l,s]=(0,i.useState)(null),[c,r]=(0,i.useState)(null),[f,h]=(0,i.useState)(new Set),[x,u]=(0,i.useState)(!1),[g,b]=(0,i.useState)(0);(0,i.useEffect)(()=>{null===n.query?n.setQuery({}):n.refetch()},[n]);let m=(0,i.useMemo)(()=>{if(null!==l||null===o)return l;let e=o.positions[0];if(void 0!==e)return{kind:"position",id:e.id};let t=o.staff[0];return void 0===t?null:{kind:"staff",id:t.id}},[o,l]);if(null===o)return(0,t.jsx)(a.PageRoot,{children:(0,t.jsx)(a.Panel,{children:(0,t.jsx)(B,{children:"error"===n.status?"권한 설정을 불러오지 못했습니다. 권한 관리 권한이 있는 기관 관리자만 볼 수 있어요.":"권한 설정을 불러오는 중…"})})});let w=m?.kind==="position"?o.positions.find(e=>e.id===m.id):void 0,_=m?.kind==="staff"?o.staff.find(e=>e.id===m.id):void 0,j=_?.role==="ORG_ADMIN",z=new Set(w?.allowed??_?.allowed??[]),I=void 0!==w?new Set(o.staffDefault):void 0!==_?(e=null===_.positionId?void 0:o.positions.find(e=>e.id===_.positionId),new Set(e?.allowed??o.staffDefault)):new Set,C=c??z,y=null!==c&&!0!==H(c,z),v=j||null===m,$=e=>{y&&!0!==window.confirm("저장하지 않은 변경이 있어요. 저장하지 않고 다른 대상으로 이동할까요?")||(s(e),r(null))},S=(e,t)=>{let n=new Set(C);for(let i of e)t?n.add(i):n.delete(i);r(n)},k=async()=>{if(null===m||null===c)return;u(!0);let[e]="position"===m.kind?await n.setPosition({positionId:m.id,allowed:[...c]}):await n.setStaff({staffAccountId:m.id,allowed:[...c]});(u(!1),null!==e)?d.default.ui.layout.toast.error(e.message||"권한을 저장하지 못했습니다."):(r(null),b(e=>e+1),d.default.ui.layout.toast.success("권한을 저장했습니다. 다음 화면 이동부터 바로 적용돼요."))},O=e=>o.staff.filter(t=>"ORG_ADMIN"!==t.role&&t.positionId===e),R=o.staff.filter(e=>"ORG_ADMIN"===e.role),A=O(null),D=e=>{let n={granted:e.overrides.filter(e=>"GRANT"===e.effect).length,revoked:e.overrides.filter(e=>"REVOKE"===e.effect).length},i=m?.kind==="staff"&&m.id===e.id;return(0,t.jsxs)(Q,{type:"button",$selected:i,onClick:()=>$({kind:"staff",id:e.id}),children:[e.name,"ON_LEAVE"===e.employmentStatus&&(0,t.jsx)(J,{children:"휴직"}),n.granted+n.revoked>0&&(0,t.jsx)(J,{children:`개별 ${n.granted+n.revoked}`})]},e.id)},E=void 0!==w?`직책 '${w.name}' 기본 권한`:void 0!==_?`${_.name}${null===_.managementNo?"":` (관리번호 ${_.managementNo})`} 권한`:"대상을 골라 주세요",K=void 0!==w?`이 직책 담당자 ${O(w.id).length}명에게 적용돼요. 일반 담당자 기본값과 다른 항목은 '직책에서 변경'으로 표시돼요.`:j?"기관 관리자는 모든 권한이 허용되고, 직책 권한의 영향을 받지 않아요.":void 0!==_?`${null===_.positionId?"직책이 없어 일반 담당자 기본값":`직책 '${o.positions.find(e=>e.id===_.positionId)?.name??""}' 기본 권한`}에서 이 담당자만 추가\xb7제한할 수 있어요.`:"";return(0,t.jsx)(a.PageRoot,{children:(0,t.jsxs)(a.Panel,{children:[(0,t.jsx)(a.SectionHeader,{children:(0,t.jsxs)(a.SectionHeaderLeft,{children:[(0,t.jsx)(a.SectionTitle,{children:"권한 설정"}),(0,t.jsx)(a.SectionTitleInfo,{children:(0,t.jsx)(a.SectionTitleInfoText,{children:"직책 기본 권한을 정하고, 필요하면 담당자별로 추가·제한해요. 담당자는 근무자 관리에서 직책을 정하면 자동으로 보여요."})})]})}),(0,t.jsxs)(F,{children:[(0,t.jsxs)(G,{children:[(0,t.jsx)(q,{children:"직책별 기본 권한"}),0===o.positions.length&&(0,t.jsx)(X,{children:"직책이 없어요. 근무자 관리에서 직책을 먼저 만들어 주세요."}),o.positions.map(e=>{let n=O(e.id),i=m?.kind==="position"&&m.id===e.id;return(0,t.jsxs)(U,{children:[(0,t.jsxs)(Y,{type:"button",$selected:i,onClick:()=>$({kind:"position",id:e.id}),children:[(0,t.jsx)("span",{children:e.name}),(0,t.jsxs)(V,{children:[`${n.length}명`,e.changedKeys.length>0&&` \xb7 변경 ${e.changedKeys.length}`]})]}),n.length>0&&(0,t.jsx)(W,{children:n.map(D)})]},e.id)}),A.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(q,{children:"직책 없음 (일반 담당자 기본값)"}),(0,t.jsx)(W,{children:A.map(D)})]}),R.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(q,{children:"기관 관리자 (전체 허용)"}),(0,t.jsx)(W,{children:R.map(D)})]})]}),(0,t.jsxs)(Z,{children:[(0,t.jsxs)(ee,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(et,{children:E}),(0,t.jsx)(en,{children:K})]}),!0!==v&&(0,t.jsxs)(a.SectionHeaderRight,{children:[(0,t.jsx)(ei,{type:"button",disabled:x||H(C,I),onClick:()=>r(new Set(I)),children:void 0!==w?"일반 담당자 기본값으로":"직책 기본 권한으로"}),(0,t.jsx)(ei,{type:"button",disabled:x||!0!==y,onClick:()=>r(null),children:"취소하기"}),(0,t.jsx)(eo,{type:"button",disabled:x||!0!==y,onClick:()=>void k(),children:x?"저장하는 중…":"저장하기"})]})]}),null!==m&&(0,t.jsx)(el,{children:o.areas.map(e=>{let n,i=0===(n=e.actions.filter(e=>C.has(e.permissionKey)).length)?"none":n===e.actions.length?"all":"some",o=f.has(e.key),l=v||!0===e.adminOnly,d=e.actions.map(e=>e.permissionKey);return(0,t.jsxs)(ed,{children:[(0,t.jsxs)(ea,{type:"button",onClick:()=>{var t;let n;return t=e.key,void((n=new Set(f)).has(t)?n.delete(t):n.add(t),h(n))},children:[(0,t.jsx)(ec,{$status:i,children:M[i].mark}),(0,t.jsx)(er,{children:e.label}),(0,t.jsx)(ef,{$status:i,children:!0===e.adminOnly&&!0!==j?"기관 관리자 전용":M[i].label}),(0,t.jsx)(ep,{children:e.actions.filter(e=>C.has(e.permissionKey)).map(e=>e.label.replace("(출력·다운로드 포함)","")).join(" · ")||"없음"}),(0,t.jsx)(eh,{children:o?"접기":"세부 권한"})]}),o&&(0,t.jsxs)(ex,{children:[e.actions.map(e=>{let n=C.has(e.permissionKey),i=n!==I.has(e.permissionKey);return(0,t.jsxs)(eu,{$disabled:l,children:[(0,t.jsx)("input",{type:"checkbox",checked:n,disabled:l,onChange:t=>S([e.permissionKey],t.target.checked)}),e.label,i&&!0!==j&&(0,t.jsx)(eg,{$granted:n,children:void 0!==w?"직책에서 변경":n?"개별 추가":"개별 제한"})]},e.permissionKey)}),!0!==l&&(0,t.jsxs)(eb,{children:[(0,t.jsx)(em,{type:"button",onClick:()=>S(d,!0),children:"전체 허용"}),(0,t.jsx)(em,{type:"button",onClick:()=>S(d,!1),children:"전체 제한"})]}),!0===e.adminOnly&&!0!==j&&(0,t.jsx)(ew,{children:"권한 관리는 기관 관리자만 할 수 있어요(직책·담당자 권한으로 스스로 권한을 올리지 못하게)."})]})]},e.key)})})]})]}),(0,t.jsx)(T,{areas:o.areas,positions:o.positions,reloadKey:g}),(0,t.jsx)(p,{staff:o.staff})]})})}),B=o.default.p.withConfig({componentId:"zh__sc-3e79cad4-0"})`
  font-size: 15px;
  color: #6b7280;
`,F=o.default.div.withConfig({componentId:"zh__sc-3e79cad4-1"})`
  display: grid;
  grid-template-columns: 320px minmax(0, 1fr);
  gap: 24px;
  align-items: start;
`,G=o.default.div.withConfig({componentId:"zh__sc-3e79cad4-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #f9fafb;
`,q=o.default.p.withConfig({componentId:"zh__sc-3e79cad4-3"})`
  margin-top: 8px;
  font-size: 13px;
  font-weight: 700;
  color: #636978;
`,U=o.default.div.withConfig({componentId:"zh__sc-3e79cad4-4"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Y=o.default.button.withConfig({componentId:"zh__sc-3e79cad4-5"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 12px;
  border: 1px solid ${({$selected:e})=>e?"#4f39f6":"#e5e7eb"};
  border-radius: 8px;

  font-size: 15px;
  font-weight: 700;
  color: ${({$selected:e})=>e?"#4f39f6":"#292b36"};

  background: ${({$selected:e})=>e?"#eef2ff":"#fff"};
`,V=o.default.span.withConfig({componentId:"zh__sc-3e79cad4-6"})`
  font-size: 12px;
  font-weight: 500;
  color: #636978;
`,W=o.default.div.withConfig({componentId:"zh__sc-3e79cad4-7"})`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding-left: 8px;
`,Q=o.default.button.withConfig({componentId:"zh__sc-3e79cad4-8"})`
  cursor: pointer;

  display: inline-flex;
  gap: 4px;
  align-items: center;

  height: 30px;
  padding: 0 10px;
  border: 1px solid ${({$selected:e})=>e?"#4f39f6":"#d5dbe3"};
  border-radius: 999px;

  font-size: 13px;
  font-weight: 600;
  color: ${({$selected:e})=>e?"#4f39f6":"#292b36"};

  background: ${({$selected:e})=>e?"#eef2ff":"#fff"};
`,J=o.default.span.withConfig({componentId:"zh__sc-3e79cad4-9"})`
  font-size: 11px;
  font-weight: 500;
  color: #b54708;
`,X=o.default.p.withConfig({componentId:"zh__sc-3e79cad4-10"})`
  font-size: 13px;
  color: #98a2b3;
`,Z=o.default.div.withConfig({componentId:"zh__sc-3e79cad4-11"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ee=o.default.div.withConfig({componentId:"zh__sc-3e79cad4-12"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: space-between;
`,et=o.default.p.withConfig({componentId:"zh__sc-3e79cad4-13"})`
  font-size: 18px;
  font-weight: 700;
  color: #292b36;
`,en=o.default.p.withConfig({componentId:"zh__sc-3e79cad4-14"})`
  margin-top: 4px;
  font-size: 14px;
  color: #636978;
`,ei=(0,o.default)(l.default.Button.Outlined).withConfig({componentId:"zh__sc-3e79cad4-15"})`
  ${a.btnStyle}
  white-space: nowrap;
`,eo=(0,o.default)(l.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-3e79cad4-16"})`
  ${a.btnStyle}
  white-space: nowrap;
`,el=o.default.div.withConfig({componentId:"zh__sc-3e79cad4-17"})`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  border: 1px solid #e5e7eb;
  border-radius: 8px;
`,ed=o.default.div.withConfig({componentId:"zh__sc-3e79cad4-18"})`
  & + & {
    border-top: 1px solid #e5e7eb;
  }
`,ea=o.default.button.withConfig({componentId:"zh__sc-3e79cad4-19"})`
  cursor: pointer;

  display: grid;
  grid-template-columns: 32px 160px 96px minmax(0, 1fr) 72px;
  gap: 12px;
  align-items: center;

  width: 100%;
  padding: 14px 16px;
  border: 0;

  text-align: left;

  background: #fff;

  &:hover {
    background: #f9fafb;
  }
`,es={all:"#027a48",some:"#b54708",none:"#98a2b3"},ec=o.default.span.withConfig({componentId:"zh__sc-3e79cad4-20"})`
  font-size: 18px;
  font-weight: 700;
  color: ${({$status:e})=>es[e]};
  text-align: center;
`,er=o.default.span.withConfig({componentId:"zh__sc-3e79cad4-21"})`
  font-size: 15px;
  font-weight: 700;
  color: #292b36;
`,ef=o.default.span.withConfig({componentId:"zh__sc-3e79cad4-22"})`
  font-size: 13px;
  font-weight: 600;
  color: ${({$status:e})=>es[e]};
`,ep=o.default.span.withConfig({componentId:"zh__sc-3e79cad4-23"})`
  overflow: hidden;

  font-size: 13px;
  color: #636978;
  text-overflow: ellipsis;
  white-space: nowrap;
`,eh=o.default.span.withConfig({componentId:"zh__sc-3e79cad4-24"})`
  font-size: 13px;
  font-weight: 600;
  color: #4f39f6;
  text-align: right;
`,ex=o.default.div.withConfig({componentId:"zh__sc-3e79cad4-25"})`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
  align-items: center;

  padding: 12px 16px 16px 60px;

  background: #f9fafb;
`,eu=o.default.label.withConfig({componentId:"zh__sc-3e79cad4-26"})`
  cursor: ${({$disabled:e})=>e?"default":"pointer"};

  display: inline-flex;
  gap: 6px;
  align-items: center;

  font-size: 14px;
  color: ${({$disabled:e})=>e?"#98a2b3":"#292b36"};
`,eg=o.default.span.withConfig({componentId:"zh__sc-3e79cad4-27"})`
  padding: 1px 6px;
  border-radius: 999px;

  font-size: 11px;
  font-weight: 600;
  color: ${({$granted:e})=>e?"#027a48":"#b42318"};

  background: ${({$granted:e})=>e?"#ecfdf3":"#fef3f2"};
`,eb=o.default.div.withConfig({componentId:"zh__sc-3e79cad4-28"})`
  display: flex;
  gap: 6px;
  margin-left: auto;
`,em=o.default.button.withConfig({componentId:"zh__sc-3e79cad4-29"})`
  cursor: pointer;

  height: 28px;
  padding: 0 10px;
  border: 1px solid #d5dbe3;
  border-radius: 6px;

  font-size: 12px;
  color: #475467;

  background: #fff;
`,ew=o.default.p.withConfig({componentId:"zh__sc-3e79cad4-30"})`
  width: 100%;
  font-size: 12px;
  color: #98a2b3;
`;e.s(["default",0,L],60139)}]);