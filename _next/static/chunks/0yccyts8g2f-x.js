(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95923,49978,50826,47685,49940,89667,71756,e=>{"use strict";var t=e.i(9735),i=e.i(7744),o=e.i(38803);let r=()=>({id:`field-row-${Math.random().toString(36).slice(2,10)}`,value:""}),d=o.default.div.withConfig({componentId:"zh__sc-bea33b75-0"})`
  pointer-events: none;

  position: fixed;
  z-index: 2147483647;
  inset: 0;

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  padding: 24px 16px 16px;

  background: transparent;
`,n=o.default.div.withConfig({componentId:"zh__sc-bea33b75-1"})`
  pointer-events: auto;

  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 16px;

  width: min(420px, calc(100vw - 32px));
  max-height: calc(100vh - 48px);
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;

  background: rgb(255 255 255 / 96%);
  backdrop-filter: blur(6px);
  box-shadow: 0 16px 40px rgb(15 23 42 / 16%);
`,l=o.default.h3.withConfig({componentId:"zh__sc-bea33b75-2"})`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #111827;
`,s=o.default.div.withConfig({componentId:"zh__sc-bea33b75-3"})`
  font-size: 13px;
  color: #4b5563;
`,a=o.default.label.withConfig({componentId:"zh__sc-bea33b75-4"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,p=o.default.div.withConfig({componentId:"zh__sc-bea33b75-5"})`
  font-size: 13px;
  font-weight: 600;
  color: #374151;
`,c=o.default.label.withConfig({componentId:"zh__sc-bea33b75-6"})`
  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 13px;
  color: #374151;
`,u=o.default.div.withConfig({componentId:"zh__sc-bea33b75-7"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,h=o.default.div.withConfig({componentId:"zh__sc-bea33b75-8"})`
  font-size: 12px;
  font-weight: 600;
  color: #4b5563;
`,f=o.default.div.withConfig({componentId:"zh__sc-bea33b75-9"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,g=o.default.span.withConfig({componentId:"zh__sc-bea33b75-10"})`
  font-size: 13px;
  color: #6b7280;
`,x=o.default.input.withConfig({componentId:"zh__sc-bea33b75-11"})`
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;
  color: #111827;
`,y=o.default.div.withConfig({componentId:"zh__sc-bea33b75-12"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,b=o.default.div.withConfig({componentId:"zh__sc-bea33b75-13"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,m=o.default.input.withConfig({componentId:"zh__sc-bea33b75-14"})`
  flex: 1;

  height: 40px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;
  color: #111827;
`,v=o.default.button.withConfig({componentId:"zh__sc-bea33b75-15"})`
  cursor: pointer;

  width: 36px;
  height: 36px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 16px;
  color: #374151;

  background: #fff;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`,j=o.default.button.withConfig({componentId:"zh__sc-bea33b75-16"})`
  cursor: pointer;

  width: fit-content;
  height: 36px;
  padding: 0 12px;
  border: 1px dashed #7c3aed;
  border-radius: 8px;

  font-size: 13px;
  font-weight: 600;
  color: #7c3aed;

  background: #f5f3ff;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`,P=o.default.div.withConfig({componentId:"zh__sc-bea33b75-17"})`
  font-size: 12px;
  color: #6b7280;
`,_=o.default.div.withConfig({componentId:"zh__sc-bea33b75-18"})`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,C=o.default.button.withConfig({componentId:"zh__sc-bea33b75-19"})`
  cursor: pointer;

  height: 36px;
  padding: 0 14px;
  border: 1px solid ${({$primary:e})=>!0===e?"#0f766e":"#d1d5db"};
  border-radius: 8px;

  font-size: 14px;
  font-weight: 700;
  color: ${({$primary:e})=>!0===e?"#fff":"#374151"};

  background: ${({$primary:e})=>!0===e?"#0f766e":"#fff"};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`;e.s(["default",0,function({templateName:e,defaultPage:o,isCreating:w,onClose:k,onAddField:z}){let[I,S]=(0,i.useState)(()=>o?.toString()??"1"),[T,$]=(0,i.useState)(()=>[r()]),[K,O]=(0,i.useState)(!1),[A,E]=(0,i.useState)("1"),[M,D]=(0,i.useState)("1"),F=(0,i.useMemo)(()=>T.some(e=>""!==e.value.trim()),[T]),N=(0,i.useMemo)(()=>{let e=T.filter(e=>""!==e.value.trim()).length;if(!1===K)return e;let t=Number(A.trim()),i=Number(M.trim());return!Number.isInteger(t)||!Number.isInteger(i)||t<=0||i<=0||i<t?0:e*(i-t+1)},[T,M,A,K]),R=async()=>{let e=I.trim(),t=T.map(e=>e.value.trim()).filter(e=>""!==e);if(""===e||0===t.length)return;let i=Number(e);if(!Number.isInteger(i)||i<=0)return;let o=t;if(!0===K){let e=Number(A.trim()),i=Number(M.trim());if(!Number.isInteger(e)||!Number.isInteger(i)||e<=0||i<=0||i<e)return;o=[];for(let r=e;r<=i;r+=1)for(let e of t)o.push(`${e}.${r}`)}await z({page:i,fieldKeys:o})};return(0,t.jsx)(d,{onClick:()=>{!0!==w&&k()},children:(0,t.jsxs)(n,{onClick:e=>{e.stopPropagation()},children:[(0,t.jsx)(l,{children:"필드키 추가"}),(0,t.jsx)(s,{children:""===e?"템플릿 미선택":`템플릿: ${e}`}),(0,t.jsxs)(a,{children:[(0,t.jsx)(p,{children:"페이지"}),(0,t.jsx)(x,{type:"number",min:1,step:1,value:I,onChange:e=>{S(e.target.value)},disabled:w})]}),(0,t.jsxs)(a,{children:[(0,t.jsx)(p,{children:"필드키"}),(0,t.jsxs)(c,{children:[(0,t.jsx)("input",{type:"checkbox",checked:K,onChange:e=>{O(e.target.checked)},disabled:w}),(0,t.jsx)("span",{children:"뒤에 인덱스 붙이기"})]}),!0===K?(0,t.jsxs)(u,{children:[(0,t.jsx)(h,{children:"인덱스 범위"}),(0,t.jsxs)(f,{children:[(0,t.jsx)(x,{type:"number",min:1,step:1,value:A,onChange:e=>{E(e.target.value)},disabled:w}),(0,t.jsx)(g,{children:"~"}),(0,t.jsx)(x,{type:"number",min:1,step:1,value:M,onChange:e=>{D(e.target.value)},disabled:w})]})]}):null,(0,t.jsx)(y,{children:T.map((e,i)=>(0,t.jsxs)(b,{children:[(0,t.jsx)(m,{type:"text",value:e.value,placeholder:`필드키 ${i+1}`,disabled:w,onChange:t=>{var i,o;i=e.id,o=t.target.value,$(e=>e.map(e=>e.id===i?{...e,value:o}:e))}}),(0,t.jsx)(v,{type:"button",onClick:()=>{var t;t=e.id,$(e=>e.length<=1?[r()]:e.filter(e=>e.id!==t))},disabled:w||T.length<=1,children:"-"})]},e.id))}),(0,t.jsx)(j,{type:"button",onClick:()=>{$(e=>[...e,r()])},disabled:w,children:"+ 추가"}),(0,t.jsxs)(P,{children:["한 줄에 하나씩 입력하고, 아래 저장 버튼으로 한 번에 등록합니다.",!0===K?` 현재 총 ${N}개가 생성됩니다.`:""]})]}),(0,t.jsxs)(_,{children:[(0,t.jsx)(C,{type:"button",onClick:()=>{k()},disabled:w,children:"취소"}),(0,t.jsx)(C,{type:"button",$primary:!0,disabled:""===I.trim()||!1===F||w,onClick:()=>{R()},children:!0===w?"저장 중...":"저장"})]})]})})}],95923),e.s(["moveFieldByArrowKey",0,function(e,t,i=!1){let o=e.uiProps.style??{},r=Number.parseFloat(String(o.left??"0"))||0,d=Number.parseFloat(String(o.top??"0"))||0,n=i?1:.1;return{...e,uiProps:{...e.uiProps,style:{...o,left:`${Math.round((r+("ArrowLeft"===t?-1:+("ArrowRight"===t))*n)*10)/10}%`,top:`${Math.round((d+("ArrowUp"===t?-1:+("ArrowDown"===t))*n)*10)/10}%`}}}}],49978);var w=e.i(25699),k=e.i(28124);let z=o.default.div.withConfig({componentId:"zh__sc-31575765-0"})`
  transform-origin: top left;
  transform: scale(${({$scale:e})=>e});
  width: fit-content;
`,I=o.default.div.withConfig({componentId:"zh__sc-31575765-1"})`
  position: relative;
  width: fit-content;
`,S=o.default.div.withConfig({componentId:"zh__sc-31575765-2"})`
  position: absolute;
  inset: 0;
`,T=o.default.div.withConfig({componentId:"zh__sc-31575765-3"})`
  cursor: pointer;

  position: absolute;

  box-sizing: border-box;
  border: 1px dashed ${({$active:e})=>e?"#2563eb":"transparent"};
  border-radius: 2px;

  background: ${({$active:e,$editable:t})=>e?t?"rgb(37 99 235 / 12%)":"rgb(107 114 128 / 28%)":t?"rgb(37 99 235 / 6%)":"rgb(107 114 128 / 18%)"};

  &:hover {
    border-color: #2563eb;
    background: ${({$editable:e})=>e?"rgb(37 99 235 / 14%)":"rgb(107 114 128 / 32%)"};
  }
`,$=o.default.div.withConfig({componentId:"zh__sc-31575765-4"})`
  overflow: auto;
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;

  min-height: 0;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;

  background: #e5e7eb;
`,K=o.default.div.withConfig({componentId:"zh__sc-31575765-5"})`
  padding: 12px 16px;
  font-size: 14px;
  color: #6b7280;
`;e.s(["default",0,function({mode:e,selectedPage:i,scale:o,selectedPageFields:r,selectedPageEditableFields:d,hoveredFieldId:n,selectOptionsCacheKey:l,onSelectFieldId:s,isFieldEditable:a,isAssistButtonDisabled:p,onAssistTriggerClick:c,onLoadSelectOptions:u,onChangeField:h}){return(0,t.jsx)($,{children:null===i?(0,t.jsx)(K,{children:"선택한 페이지가 없습니다."}):(0,t.jsx)(z,{$scale:Number(o)/100||1,children:(0,t.jsxs)(I,{children:[(0,t.jsx)(w.default,{imagePath:i.imagePath,fields:r,selectOptionsCacheKey:l,isFieldEditable:"play"===e?a:void 0,isAssistButtonDisabled:"play"===e?p:void 0,onAssistTriggerClick:"play"===e?c:void 0,onLoadSelectOptions:"play"===e?u:void 0,onChangeField:"play"===e?h:void 0,resolveAssistButtonLabel:({triggerKey:e})=>e===k.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON||e===k.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON||e===k.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON?"자동으로 문장 생성하기":e===k.default.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL?"일반식 전체":e===k.default.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL?"치료식 전체":e===k.default.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL?"저작 및 연하 도움식 전체":"어시스트 버튼"}),"edit"===e?(0,t.jsx)(S,{children:d.map(e=>(0,t.jsx)(T,{style:e.uiProps.style,title:`${e.fieldKey} (${e.uiProps.fieldType})`,"aria-label":`${e.fieldKey} (${e.uiProps.fieldType})`,$active:n===e.id,$editable:e.uiProps.editable??!1,onClick:()=>s?.(e.id)},e.id))}):null]})})})}],50826);let O=o.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-0"})`
  position: fixed;
  z-index: 10;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;

  background: rgb(15 23 42 / 40%);
`,A=o.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: min(480px, 100%);
  max-height: 70vh;
  padding: 20px;
  border-radius: 12px;

  background: #fff;
`,E=o.default.h3.withConfig({componentId:"zh__sc-ef6b6d0c-2"})`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #111827;
`,M=o.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-3"})`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 6px 2px;
`,D=o.default.label.withConfig({componentId:"zh__sc-ef6b6d0c-4"})`
  cursor: pointer;

  display: flex;
  gap: 10px;
  align-items: center;

  padding: 8px 10px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #f9fafb;
`,F=o.default.input.withConfig({componentId:"zh__sc-ef6b6d0c-5"})`
  width: 16px;
  height: 16px;
`,N=o.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-6"})`
  font-size: 14px;
  color: #111827;
`,R=o.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-7"})`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,L=o.default.button.withConfig({componentId:"zh__sc-ef6b6d0c-8"})`
  cursor: pointer;

  height: 36px;
  padding: 0 14px;
  border: 1px solid ${({$primary:e})=>!0===e?"#1d4ed8":"#d1d5db"};
  border-radius: 8px;

  font-size: 14px;
  font-weight: 700;
  color: ${({$primary:e})=>!0===e?"#fff":"#374151"};

  background: ${({$primary:e})=>!0===e?"#2563eb":"#fff"};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`;e.s(["default",0,function({isOpen:e,templates:i,selectedTemplateIds:o,onToggleTemplate:r,onClose:d,onPrint:n}){return!1===e?null:(0,t.jsx)(O,{onClick:()=>{d()},children:(0,t.jsxs)(A,{onClick:e=>{e.stopPropagation()},children:[(0,t.jsx)(E,{children:"출력 템플릿 선택"}),(0,t.jsx)(M,{children:i.map(e=>{let i=o.includes(e.id);return(0,t.jsxs)(D,{children:[(0,t.jsx)(F,{type:"checkbox",checked:i,onChange:()=>{r(e.id)}}),(0,t.jsx)(N,{children:e.name})]},e.id)})}),(0,t.jsxs)(R,{children:[(0,t.jsx)(L,{type:"button",onClick:()=>{d()},children:"취소"}),(0,t.jsx)(L,{type:"button",$primary:!0,disabled:0===o.length,onClick:()=>{n()},children:"출력"})]})]})})}],47685);var U=e.i(6644),W=e.i(71371);let B=["id","name","birthDate","phoneNumber","address","postCode","bankName","workStartDate","gender","email","contact","relationship"],V=Object.values(U.default),H=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-0"})`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  width: 800px;
  padding: 12px;
  border-left: 1px solid #e0e0e0;

  background: #f5f5f5;
`,J=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-1"})`
  display: flex;
  gap: 4px;
  padding-bottom: 12px;
`,Y=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-2"})`
  cursor: pointer;

  height: 32px;
  padding: 0 12px;
  border: 1px solid ${({$isActive:e})=>e?"#1d4ed8":"#d1d5db"};
  border-radius: 6px;

  font-size: 13px;
  font-weight: 700;
  color: ${({$isActive:e})=>e?"#1d4ed8":"#4b5563"};

  background: ${({$isActive:e})=>e?"#eff6ff":"#fff"};
`,G=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-3"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Z=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-4"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,X=o.default.label.withConfig({componentId:"zh__sc-7a7d35c6-5"})`
  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 13px;
  font-weight: 600;
  color: #374151;
`,q=o.default.input.withConfig({componentId:"zh__sc-7a7d35c6-6"})`
  width: 16px;
  height: 16px;
  margin: 0;
`,Q=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-7"})`
  cursor: pointer;

  height: 36px;
  padding: 0 12px;
  border: 1px solid #1d4ed8;
  border-radius: 6px;

  font-size: 13px;
  font-weight: 600;
  color: #fff;

  background: #1d4ed8;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,ee=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-8"})`
  cursor: pointer;

  height: 36px;
  padding: 0 16px;
  border: 1px solid #047857;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 700;
  color: #047857;

  background: #ecfdf5;
`,et=(0,o.default)(ee).withConfig({componentId:"zh__sc-7a7d35c6-9"})`
  border-color: #1d4ed8;
  color: #fff;
  background: #1d4ed8;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }
`,ei=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-10"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
`,eo=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-11"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;

  min-height: 0;
`,er=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-12"})`
  display: grid;
  grid-template-columns: minmax(0, 180px) minmax(0, 1fr);
  gap: 8px;
  align-items: center;

  padding: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #fff;
`,ed=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-13"})`
  overflow: hidden;

  font-size: 12px;
  font-weight: 600;
  color: #374151;
  text-overflow: ellipsis;
  white-space: nowrap;
`,en=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-14"})`
  min-width: 0;
`,el=o.default.input.withConfig({componentId:"zh__sc-7a7d35c6-15"})`
  width: 100%;
  height: 36px;
  padding: 0 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;

  font-size: 13px;
  color: #111827;

  background: #fff;
`,es=o.default.select.withConfig({componentId:"zh__sc-7a7d35c6-16"})`
  width: 100%;
  height: 36px;
  padding: 0 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;

  font-size: 13px;
  color: #111827;

  background: #fff;
`,ea=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-17"})`
  display: flex;
  flex: 1;
  gap: 12px;
  min-height: 0;
`,ep=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-18"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;

  min-width: 0;
`,ec=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-19"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;

  min-width: 0;
`,eu=o.default.h3.withConfig({componentId:"zh__sc-7a7d35c6-20"})`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #333;
`,eh=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-21"})`
  min-height: 16px;
  font-size: 11px;
  color: #6b7280;
`,ef=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-22"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;

  min-height: 0;
`,eg=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-23"})`
  display: flex;
  gap: 6px;
  align-items: center;
`,ex=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-24"})`
  cursor: pointer;

  overflow: hidden;
  flex: 1;

  min-height: 40px;
  padding: 10px 12px;
  border: 1px solid ${e=>e.$isSelected?"#4f46e5":"#ddd"};
  border-radius: 4px;

  font-size: 13px;
  font-weight: ${e=>e.$isSelected?600:400};
  color: ${e=>e.$isSelected?"#4f46e5":"#555"};
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;

  background: ${e=>e.$isSelected?"#e0e7ff":"white"};

  transition: all 0.2s;

  &:hover {
    border-color: #4f46e5;
    background: #f3f4f6;
  }
`,ey=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-25"})`
  cursor: pointer;

  min-height: 40px;
  padding: 10px 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 600;
  color: #4b5563;
  white-space: nowrap;

  background: #fff;

  &:hover {
    border-color: #4f46e5;
    color: #4f46e5;
  }
`,eb=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-26"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;

  background: white;
`,em=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-27"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 12px;
  border: 1px dashed #d1d5db;
  border-radius: 6px;

  font-size: 12px;
  color: #6b7280;

  background: white;
`,ev=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-28"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
`,ej=o.default.h4.withConfig({componentId:"zh__sc-7a7d35c6-29"})`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  color: #666;
`,eP=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-30"})`
  cursor: pointer;

  padding: 6px 10px;
  border: 1px solid #d1d5db;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 600;
  color: #374151;

  background: white;

  &:hover {
    border-color: #4f46e5;
    color: #4f46e5;
  }
`,e_=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-31"})`
  cursor: pointer;

  flex: 1;

  min-width: 0;
  padding: 8px 12px;
  border: 1px solid #4f46e5;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 700;
  color: #fff;

  background: #4f46e5;

  &:hover {
    background: #4338ca;
  }
`,eC=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-32"})`
  display: flex;
  gap: 8px;
  margin-top: auto;
`,ew=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-33"})`
  cursor: pointer;

  padding: 8px 12px;
  border: 1px solid #dc2626;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 700;
  color: #dc2626;

  background: white;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:hover:not(:disabled) {
    color: white;
    background: #dc2626;
  }
`,ek=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-34"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ez=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-35"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,eI=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-36"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
`,eS=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-37"})`
  cursor: pointer;

  padding: 6px 10px;
  border: 1px solid #d1d5db;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 600;
  color: #374151;

  background: #fff;

  &:hover {
    border-color: #4f46e5;
    color: #4f46e5;
  }
`,eT=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-38"})`
  cursor: pointer;

  padding: 6px 10px;
  border: 1px solid #fecaca;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 600;
  color: #b91c1c;
  white-space: nowrap;

  background: #fff5f5;

  &:hover {
    border-color: #f87171;
    background: #fee2e2;
  }
`,e$=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-39"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,eK=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-40"})`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f9fafb;
`,eO=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-41"})`
  font-size: 12px;
  color: #6b7280;
`,eA=o.default.textarea.withConfig({componentId:"zh__sc-7a7d35c6-42"})`
  resize: vertical;

  box-sizing: border-box;
  width: 100%;
  min-height: 96px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;

  font-family: monospace;
  font-size: 12px;
  line-height: 1.4;

  background: #fff;

  &:focus {
    border-color: #4f46e5;
    outline: none;
    box-shadow: 0 0 0 2px rgb(79 70 229 / 10%);
  }
`,eE=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-43"})`
  font-size: 11px;
  font-weight: 600;
  color: #b91c1c;
`,eM=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-44"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;

  box-sizing: border-box;
  width: 100%;
  min-width: 0;
`,eD=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-45"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,eF=(0,o.default)(ek).withConfig({componentId:"zh__sc-7a7d35c6-46"})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,eN=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-47"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,eR=o.default.label.withConfig({componentId:"zh__sc-7a7d35c6-48"})`
  display: flex;
  gap: 6px;
  align-items: center;

  font-size: 12px;
  color: #555;
  text-transform: capitalize;
`,eL=o.default.input.withConfig({componentId:"zh__sc-7a7d35c6-49"})`
  margin: 0;
`,eU=o.default.label.withConfig({componentId:"zh__sc-7a7d35c6-50"})`
  display: flex;
  gap: 8px;
  align-items: center;

  min-width: 0;

  font-size: 12px;
  font-weight: 500;
  color: #555;
`,eW=o.default.input.withConfig({componentId:"zh__sc-7a7d35c6-51"})`
  margin: 0;
`,eB=o.default.label.withConfig({componentId:"zh__sc-7a7d35c6-52"})`
  font-size: 12px;
  font-weight: 500;
  color: #555;
`,eV=o.default.input.withConfig({componentId:"zh__sc-7a7d35c6-53"})`
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  padding: 6px 8px;
  border: 1px solid #ddd;
  border-radius: 3px;

  font-family: monospace;
  font-size: 12px;

  &:focus {
    border-color: #4f46e5;
    outline: none;
    box-shadow: 0 0 0 2px rgb(79 70 229 / 10%);
  }
`,eH=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-54"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,eJ=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-55"})`
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
`,eY=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-56"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;
`,eG=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-57"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
`,eZ=(0,o.default)(eV).withConfig({componentId:"zh__sc-7a7d35c6-58"})`
  min-width: 0;
`,eX=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-59"})`
  cursor: pointer;

  padding: 4px 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;

  font-size: 11px;
  font-weight: 600;
  color: #4b5563;
  white-space: nowrap;

  background: #fff;

  &:hover {
    border-color: #4f46e5;
    color: #4f46e5;
  }
`,eq=(0,o.default)(eX).withConfig({componentId:"zh__sc-7a7d35c6-60"})`
  margin-left: auto;
`,eQ=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-61"})`
  cursor: pointer;

  padding: 6px 10px;
  border: 1px solid #fecaca;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 600;
  color: #b91c1c;
  white-space: nowrap;

  background: #fff5f5;

  &:hover {
    border-color: #f87171;
    background: #fee2e2;
  }
`,e0=o.default.select.withConfig({componentId:"zh__sc-7a7d35c6-62"})`
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  padding: 6px 8px;
  border: 1px solid #ddd;
  border-radius: 3px;

  font-family: monospace;
  font-size: 12px;

  background: #fff;

  &:focus {
    border-color: #4f46e5;
    outline: none;
    box-shadow: 0 0 0 2px rgb(79 70 229 / 10%);
  }
`;e.s(["default",0,function({mode:e,fields:o,scale:r="100",onUpdateField:d,onUpdateFields:n,onSaveField:l,onDeleteField:s,isDeletingField:a=!1,onApplyCurrentPageCheckOrRadioHeight:p,isSavingCurrentPage:c=!1,onSaveCurrentPage:u,onHoverFieldId:h,selectedFieldId:f,onSelectFieldId:g}){let x,y,b,m=96/25.4*210,v=96/25.4*297,j="0.026",P=["text","money","date","select","check","radio","textarea","month-with-year","multi-date","image","calendar-cell"],[_,C]=(0,i.useState)(null),[w,z]=(0,i.useState)([]),[I,S]=(0,i.useState)("edit"),[T,$]=(0,i.useState)(!1),[K,O]=(0,i.useState)(void 0),A=f??_,E=(0,i.useRef)(new Map),[M,D]=(0,i.useState)(!1),[F,N]=(0,i.useState)(!1),[R,L]=(0,i.useState)({}),[U,e1]=(0,i.useState)({}),[e5,e6]=(0,i.useState)({}),[e7,e3]=(0,i.useState)({}),e4=e=>e in k.default,e2=(0,i.useMemo)(()=>Object.keys(k.default).filter(e4).filter(e=>"function"!=typeof k.default[e]),[]),e8=(0,i.useMemo)(()=>[...o].sort((e,t)=>e.page!==t.page?e.page-t.page:e.fieldKey!==t.fieldKey?e.fieldKey.localeCompare(t.fieldKey):e.id.localeCompare(t.id)),[o]),e9=(0,i.useMemo)(()=>{let e=o.find(e=>e.id===A);if(void 0!==e)return{...e,uiProps:{...e.uiProps,style:e.uiProps.style??{}}}},[o,A]),te=(0,i.useMemo)(()=>{let e=new Set(o.map(e=>e.id)),t=w.filter(t=>e.has(t));return null!=f&&e.has(f)&&(f!==K||!t.includes(f))?[f]:t},[o,K,f,w]);(0,i.useEffect)(()=>{if(null===A)return;let e=E.current.get(A);void 0!==e&&e.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[A]);let tt=e=>P.some(t=>t===e),ti=(e,t)=>{let i="text"===t.fieldType||"textarea"===t.fieldType?t.placeholder:void 0,o={style:t.style??{},editable:t.editable??!1,triggerKeys:t.triggerKeys,triggerKeyScopes:t.triggerKeyScopes,selectedEntityProperty:t.selectedEntityProperty,assistUiComponents:t.assistUiComponents,label:t.label};switch(e){case"text":return{...o,fieldType:"text",placeholder:i};case"money":return{...o,fieldType:"money"};case"date":return{...o,fieldType:"date",disableHolidaySelection:"date"===t.fieldType&&t.disableHolidaySelection,isDotDateFormat:"date"===t.fieldType&&t.isDotDateFormat,isMonthDateFormat:"date"===t.fieldType&&t.isMonthDateFormat,isMonthDateWithWeekdayFormat:"date"===t.fieldType&&t.isMonthDateWithWeekdayFormat,emptyValueText:"date"===t.fieldType?t.emptyValueText:void 0};case"select":return{...o,fieldType:"select",options:"select"===t.fieldType?t.options:[{value:"",label:""}]};case"check":return{...o,fieldType:"check",showPrintFieldBorders:"check"===t.fieldType&&t.showPrintFieldBorders};case"radio":return{...o,fieldType:"radio",groupKey:"radio"===t.fieldType?t.groupKey:"",usePrintBorderAsMarkOnPrint:"radio"===t.fieldType&&t.usePrintBorderAsMarkOnPrint};case"textarea":return{...o,fieldType:"textarea",placeholder:i};case"month-with-year":return{...o,fieldType:"month-with-year",hideYear:"month-with-year"===t.fieldType&&t.hideYear,hideMonthUnit:"month-with-year"===t.fieldType&&t.hideMonthUnit};case"multi-date":return{...o,fieldType:"multi-date"};case"image":return{...o,fieldType:"image"};case"calendar-cell":return{...o,fieldType:"calendar-cell"};default:return t}},to=(e,t)=>{let i;if(!e9)return;i="fontSize"===e?t?`calc(210mm * ${t})`:"":"lineHeight"===e?t:"fontWeight"===e?""===t||"400"===t?"":t:"textAlign"===e||"verticalAlign"===e?t:t?`${t}%`:"";let o={...e9,uiProps:{...e9.uiProps,style:{...e9.uiProps.style,[e]:i}}};d(e9.id,o)},tr=(e,t)=>{if("radio"===e.uiProps.fieldType&&"true"===t&&""!==e.uiProps.groupKey)for(let t of e8)t.id!==e.id&&t.page===e.page&&"radio"===t.uiProps.fieldType&&t.uiProps.groupKey===e.uiProps.groupKey&&d(t.id,{...t,defaultValue:"false"});d(e.id,{...e,defaultValue:t})},td=e=>{let t=e.trim();if(""===t)return;let i=Number(t);return Number.isFinite(i)?i:void 0},tn=()=>({name:"",sortOrder:void 0}),tl=e=>{if(!e9)return;let t=e(e9.uiProps.label);d(e9.id,{...e9,uiProps:{...e9.uiProps,label:t}})},ts=(e,t)=>{let i=t(e.triggerKeyScopes??{}),o=Object.keys(i).length>0,r={...e};return(delete r.triggerKeyScopes,o)?{...r,triggerKeyScopes:i}:r},ta=(e,t)=>{if(!e9)return;let i=e9.uiProps.selectedEntityProperty??{sourceFieldKey:"",propertyKey:""};d(e9.id,{...e9,uiProps:{...e9.uiProps,selectedEntityProperty:{...i,[e]:t}}})},tp=(e,t)=>`${e}::${t.join("-")}`,tc=e=>{if(!e9)return;let t=e(e9.uiProps.assistUiComponents??[]);d(e9.id,{...e9,uiProps:{...e9.uiProps,assistUiComponents:t}})},tu=(e,t,i)=>{let[o,...r]=t;return void 0===o?e:e.map((e,t)=>t!==o?e:0===r.length?i(e):"container"!==e.type?e:{...e,children:tu(e.children,r,i)})},th=(e,t)=>{let[i,...o]=t;return void 0===i?e:0===o.length?e.filter((e,t)=>t!==i):e.map((e,t)=>t!==i||"container"!==e.type?e:{...e,children:th(e.children,o)})},tf=(e,t)=>{let i=t(e.triggerKeyScopes??{}),o={...e};return(delete o.triggerKeyScopes,0===Object.keys(i).length)?o:{...o,triggerKeyScopes:i}},tg=(e,t,i)=>{if(!e9||"select"!==e9.uiProps.fieldType)return;let o=e9.uiProps.options.map((o,r)=>r===e?{...o,[t]:i}:o);d(e9.id,{...e9,uiProps:{...e9.uiProps,options:o}})},tx=e9?.uiProps.fieldType==="select"?e9.uiProps.options:[],ty=(e,t)=>{if(!e9)return;let i={...e9.uiProps.style};t?i[e]=i[e]??"1.5%":delete i[e],d(e9.id,{...e9,uiProps:{...e9.uiProps,style:i}})},tb=e=>{if(null==e)return"";let t=String(e);if(t.includes("calc(")){let e=t.match(/calc\(210mm \* ([^)]+)\)/);return e?.[1]??""}return t.replace("%","")},tm=(e,t)=>{let i=tb(e);return""===i?t:i},tv=(e,t,i="x")=>{let o=Number(r)/100||1,d=void 0===t?tb(e):tm(e,t);if(""===d)return"-";let n=(0,W.parseLengthToPx)(`${d}%`,{pageWidthPx:"x"===i?m:v}),l=null===n?"-":`${(n*o).toFixed(1)}px`;return`${d}% / ${l}`},tj=async()=>{if(!e9)return;let{width:e,height:t,fontSize:i,fontWeight:o,lineHeight:r,left:d,top:n,textAlign:l,verticalAlign:s,padding:a,paddingLeft:p,paddingRight:c,borderRadius:u}=e9.uiProps.style,h=[`fieldType: '${e9.uiProps.fieldType}',`,`editable: ${String(e9.uiProps.editable??!1)},`,`width: '${String(e??"")}',`,`height: '${String(t??"")}',`,`fontSize: '${String(i??"")}',`,`lineHeight: '${String(r??"")}',`,`left: '${String(d??"")}',`,`top: '${String(n??"")}',`];if(void 0!==o&&""!==String(o).trim()&&h.push(`fontWeight: '${String(o)}',`),l&&h.push(`textAlign: '${String(l)}',`),void 0!==s&&""!==s&&h.push(`verticalAlign: '${String(s)}',`),void 0!==a&&""!==a&&h.push(`padding: '${String(a)}',`),void 0!==p&&""!==p&&h.push(`paddingLeft: '${String(p)}',`),void 0!==c&&""!==c&&h.push(`paddingRight: '${String(c)}',`),void 0!==u&&""!==u&&h.push(`borderRadius: '${String(u)}',`),"radio"===e9.uiProps.fieldType&&(h.push(`groupKey: '${String(e9.uiProps.groupKey)}',`),void 0!==e9.uiProps.usePrintBorderAsMarkOnPrint&&h.push(`usePrintBorderAsMarkOnPrint: ${String(e9.uiProps.usePrintBorderAsMarkOnPrint)},`)),"date"===e9.uiProps.fieldType&&(h.push(`disableHolidaySelection: ${String(e9.uiProps.disableHolidaySelection)},`),h.push(`isDotDateFormat: ${String(e9.uiProps.isDotDateFormat)},`),h.push(`isMonthDateFormat: ${String(e9.uiProps.isMonthDateFormat)},`),h.push(`isMonthDateWithWeekdayFormat: ${String(e9.uiProps.isMonthDateWithWeekdayFormat)},`),void 0!==e9.uiProps.emptyValueText&&h.push(`emptyValueText: ${JSON.stringify(e9.uiProps.emptyValueText)},`)),"select"===e9.uiProps.fieldType){let e=JSON.stringify(e9.uiProps.options);h.push(`options: ${e},`)}("text"===e9.uiProps.fieldType||"textarea"===e9.uiProps.fieldType)&&h.push(`placeholder: ${JSON.stringify(e9.uiProps.placeholder??{})},`);let f=e9.uiProps.triggerKeyScopes;void 0!==f&&Object.keys(f).length>0&&h.push(`triggerKeyScopes: ${JSON.stringify(f)},`);let g=h.join("\n");await navigator.clipboard.writeText(g),D(!0),window.setTimeout(()=>{D(!1)},1200)},tP=e=>!("object"!=typeof e||null===e||Array.isArray(e)||!("text"in e)||"string"!=typeof e.text||"style"in e&&void 0!==e.style&&("object"!=typeof e.style||null===e.style||Array.isArray(e.style))),t_=async e=>{try{let t,i=await navigator.clipboard.readText(),o=(e=>{let t=new Set(["width","height","fontSize","fontWeight","lineHeight","left","top","textAlign","verticalAlign","padding","paddingLeft","paddingRight","borderRadius","fieldType","editable","triggerKeyScopes","groupKey","usePrintBorderAsMarkOnPrint","disableHolidaySelection","isDotDateFormat","isMonthDateFormat","isMonthDateWithWeekdayFormat","emptyValueText","options","placeholder"]),i={};for(let o of e.matchAll(/([a-zA-Z]+)\s*:\s*'([^']*)'/g)){let e=o[1],r=o[2];void 0!==e&&void 0!==r&&t.has(e)&&(i[e]=r)}for(let o of e.matchAll(/([a-zA-Z]+)\s*:\s*(true|false)/g)){let e=o[1],r="true"===o[2];void 0!==e&&t.has(e)&&(i[e]=r)}let o=e.match(/options:\s*(\[[\s\S]*?\])/m);if(o)try{let e=o[1];if(void 0===e)return i;let t=JSON.parse(e);Array.isArray(t)&&(i.options=t)}catch{}let r=e.match(/placeholder:\s*(\{[\s\S]*?\})/m);if(r)try{let e=r[1];if(void 0!==e){let t=JSON.parse(e);tP(t)&&(i.placeholder={text:t.text,...void 0===t.style?{}:{style:t.style}})}}catch{}let d=e.match(/triggerKeyScopes:\s*(\{[\s\S]*?\})/m);if(d)try{let e=d[1];if(void 0!==e){let t=JSON.parse(e);if("object"==typeof t&&null!==t&&!Array.isArray(t)){let e={};for(let[i,o]of Object.entries(t)){if("string"!=typeof o)continue;let t=i.trim(),r=o.trim();""!==t&&""!==r&&e4(t)&&(e[t]=r)}i.triggerKeyScopes=e}}}catch{}return i})(i);if(0===Object.keys(o).length)return;let r=new Set(["width","height","fontSize","fontWeight","lineHeight","left","top","textAlign","verticalAlign","padding","paddingLeft","paddingRight","borderRadius"]),n={},l={};for(let[e,t]of Object.entries(o))"fieldType"!==e&&(r.has(e)?n[e]=String(t):l[e]=t);let s=o.fieldType,a="string"==typeof s&&tt(s)?s:e.uiProps.fieldType,p="boolean"==typeof l.editable?l.editable:e.uiProps.editable,c=ti(a,e.uiProps),u={...c.style,...n},h="object"!=typeof l.triggerKeyScopes||null===l.triggerKeyScopes||Array.isArray(l.triggerKeyScopes)?c.triggerKeyScopes:(()=>{let e={};for(let[t,i]of Object.entries(l.triggerKeyScopes)){if("string"!=typeof i)continue;let o=t.trim(),r=i.trim();""!==o&&""!==r&&e4(o)&&(e[o]=r)}return e})();if("radio"===c.fieldType)t={...c,style:u,groupKey:"string"==typeof l.groupKey?l.groupKey:c.groupKey,usePrintBorderAsMarkOnPrint:"boolean"==typeof l.usePrintBorderAsMarkOnPrint?l.usePrintBorderAsMarkOnPrint:c.usePrintBorderAsMarkOnPrint};else if("date"===c.fieldType)t={...c,style:u,disableHolidaySelection:"boolean"==typeof l.disableHolidaySelection?l.disableHolidaySelection:c.disableHolidaySelection,isDotDateFormat:"boolean"==typeof l.isDotDateFormat?l.isDotDateFormat:c.isDotDateFormat,isMonthDateFormat:"boolean"==typeof l.isMonthDateFormat?l.isMonthDateFormat:c.isMonthDateFormat,isMonthDateWithWeekdayFormat:"boolean"==typeof l.isMonthDateWithWeekdayFormat?l.isMonthDateWithWeekdayFormat:c.isMonthDateWithWeekdayFormat,emptyValueText:"string"==typeof l.emptyValueText?l.emptyValueText:c.emptyValueText};else if("select"===c.fieldType)t={...c,style:u,options:Array.isArray(l.options)?l.options:c.options};else if("text"===c.fieldType){let e=l.placeholder,i=tP(e)?""===e.text.trim()?void 0:e:"string"==typeof e?""===e.trim()?void 0:{text:e}:c.placeholder;t={...c,style:u,placeholder:i}}else if("textarea"===c.fieldType){let e=l.placeholder,i=tP(e)?""===e.text.trim()?void 0:e:"string"==typeof e?""===e.trim()?void 0:{text:e}:c.placeholder;t={...c,style:u,placeholder:i}}else t={...c,style:u};let f={...t};delete f.triggerKeyScopes;let g={...f,editable:p},x=void 0===h||0===Object.keys(h).length?g:{...g,triggerKeyScopes:h};d(e.id,{...e,uiProps:x})}catch{}},tC=(e,i,o=0)=>{let r=`${e9?.id??"field"}-assist-${i.join("-")}`,d=void 0===e9?"":tp(e9.id,i);return(0,t.jsxs)(eK,{style:{marginLeft:12*o},children:[(0,t.jsxs)(eF,{children:[(0,t.jsx)(eB,{children:"Type"}),(0,t.jsx)(eT,{type:"button",onClick:()=>{tc(e=>th(e,i))},children:"삭제"})]}),(0,t.jsxs)(e0,{value:e.type,onChange:e=>{let t=e.target.value;("button"===t||"message"===t||"container"===t)&&tc(e=>tu(e,i,e=>"button"===t?{type:"button",triggerKeys:e.triggerKeys,triggerKeyScopes:e.triggerKeyScopes,style:e.style}:"container"===t?{type:"container",triggerKeys:e.triggerKeys,triggerKeyScopes:e.triggerKeyScopes,style:e.style,children:"container"===e.type?e.children:[]}:{type:"message",triggerKeys:e.triggerKeys,triggerKeyScopes:e.triggerKeyScopes,style:e.style,message:"message"===e.type?e.message:""}))},children:[(0,t.jsx)("option",{value:"button",children:"button"}),(0,t.jsx)("option",{value:"message",children:"message"}),(0,t.jsx)("option",{value:"container",children:"container"})]}),"message"===e.type&&(0,t.jsxs)(ek,{children:[(0,t.jsx)(eB,{children:"Message"}),(0,t.jsx)(eV,{type:"text",value:e.message,onChange:e=>{var t;return t=e.target.value,void tc(e=>tu(e,i,e=>"message"!==e.type?e:{...e,message:t}))},placeholder:"표시할 메시지"})]}),(0,t.jsxs)(eF,{children:[(0,t.jsx)(eB,{children:"Component Trigger Keys"}),(0,t.jsx)(eS,{type:"button",onClick:()=>{tc(e=>tu(e,i,e=>{let t=e2.find(t=>!e.triggerKeys.includes(t));return void 0===t?e:{...e,triggerKeys:[...e.triggerKeys,t]}}))},children:"트리거 키 추가"})]}),(0,t.jsx)(ez,{children:e.triggerKeys.map(o=>(0,t.jsxs)(eI,{children:[(0,t.jsx)(e0,{value:o,onChange:e=>{let t=e.target.value;e4(t)&&tc(e=>tu(e,i,e=>o!==t&&e.triggerKeys.includes(t)?e:tf({...e,triggerKeys:e.triggerKeys.map(e=>e===o?t:e)},e=>{let i={...e};return o!==t&&(void 0===i[t]&&void 0!==i[o]&&(i[t]=i[o]),delete i[o]),i})))},children:e2.map(e=>(0,t.jsx)("option",{value:e,children:e},`${e9?.id??"field"}-assist-trigger-option-${e}`))}),(0,t.jsx)(eT,{type:"button",onClick:()=>{tc(e=>tu(e,i,e=>tf({...e,triggerKeys:e.triggerKeys.filter(e=>e!==o)},e=>{let t={...e};return delete t[o],t})))},children:"삭제"}),(0,t.jsx)(eV,{type:"text",value:e.triggerKeyScopes?.[o]??"",onChange:e=>{var t;return t=e.target.value,void tc(e=>tu(e,i,e=>{let i=t.trim();return tf(e,e=>{let t={...e};return""===i?delete t[o]:t[o]=i,t})}))},placeholder:"scope (optional)"})]},`${r}-assist-trigger-${o}`))}),(0,t.jsxs)(ek,{children:[(0,t.jsx)(eB,{children:"Component Style (JSON Object)"}),(0,t.jsx)(eA,{value:""===d?JSON.stringify(e.style??{},null,2):R[d]??JSON.stringify(e.style??{},null,2),onChange:e=>((e,t)=>{if(!e9)return;let i=tp(e9.id,e);L(e=>({...e,[i]:t}));let o=(e=>{let t,i=e.trim();if(""===i)return{ok:!0,value:{}};try{t=JSON.parse(i)}catch{return{ok:!1,error:"유효한 JSON 오브젝트를 입력해 주세요."}}if("object"!=typeof t||null===t||Array.isArray(t))return{ok:!1,error:"스타일은 JSON 오브젝트 형태여야 합니다."};let o=Object.entries(t);if(o.some(([,e])=>"string"!=typeof e&&"number"!=typeof e))return{ok:!1,error:"스타일 값은 string 또는 number만 허용됩니다."};let r={};for(let[e,t]of o)Reflect.set(r,e,t);return{ok:!0,value:r}})(t);o.ok?(e1(e=>{let t={...e};return delete t[i],t}),tc(t=>tu(t,e,e=>({...e,style:o.value})))):e1(e=>({...e,[i]:o.error}))})(i,e.target.value),placeholder:`{
  "top": "0%",
  "right": "0%",
  "zIndex": 10
}`}),""!==d&&void 0!==U[d]?(0,t.jsx)(eE,{children:U[d]}):null]}),"container"===e.type?(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eF,{children:[(0,t.jsx)(eB,{children:"Children"}),(0,t.jsx)(eS,{type:"button",onClick:()=>{tc(e=>tu(e,i,e=>{var t;let i,o;return"container"!==e.type?e:{...e,children:[...e.children,(t="button",o=void 0===(i=e2[0])?[]:[i],{type:"button",triggerKeys:o,style:{}})]}}))},children:"자식 추가"})]}),0===e.children.length?(0,t.jsx)(eO,{children:"자식 컴포넌트가 없습니다."}):(0,t.jsx)(e$,{children:e.children.map((e,t)=>tC(e,[...i,t],o+1))})]}):null]},r)};return"play"===e?(0,t.jsx)(H,{children:(0,t.jsxs)(ei,{children:[(0,t.jsx)(eu,{children:"체험 값 설정"}),(0,t.jsx)(eo,{children:e8.map(e=>(0,t.jsxs)(er,{onMouseEnter:()=>h?.(e.id),onMouseLeave:()=>h?.(null),children:[(0,t.jsx)(ed,{children:e.fieldKey}),(0,t.jsx)(en,{children:"select"===e.uiProps.fieldType&&e.uiProps.options.length>0?(0,t.jsx)(es,{value:e.defaultValue,onChange:t=>{tr(e,t.target.value)},children:e.uiProps.options.map(i=>(0,t.jsx)("option",{value:i.value,children:i.label},`${e.id}-${i.value}-${i.label}`))}):"check"===e.uiProps.fieldType||"radio"===e.uiProps.fieldType?(0,t.jsxs)(es,{value:"true"===e.defaultValue?"true":"false",onChange:t=>{tr(e,t.target.value)},children:[(0,t.jsx)("option",{value:"false",children:"false"}),(0,t.jsx)("option",{value:"true",children:"true"})]}):(0,t.jsx)(el,{type:"text",value:e.defaultValue,onChange:t=>{tr(e,t.target.value)},placeholder:"값 입력"})})]},e.id))})]})}):(0,t.jsx)(H,{children:(0,t.jsxs)(ea,{children:[(0,t.jsxs)(ep,{children:[(0,t.jsx)(eu,{children:"필드키 목록"}),(0,t.jsx)(eh,{children:te.length>1?`${te.length}개 선택됨`:"Ctrl/Cmd 클릭: 개별 선택, Shift 클릭: 범위 선택"}),(0,t.jsx)(ef,{children:e8.map(e=>(0,t.jsxs)(eg,{children:[(0,t.jsx)(ex,{ref:t=>{null===t?E.current.delete(e.id):E.current.set(e.id,t)},$isSelected:te.includes(e.id),onClick:t=>{var i;let o,r=e8.findIndex(t=>t.id===e.id),d=t.ctrlKey||t.metaKey;if(t.shiftKey&&null!==A){let t=e8.findIndex(e=>e.id===A);if(t>=0&&r>=0){let e=Math.min(t,r),i=Math.max(t,r);o=e8.slice(e,i+1).map(e=>e.id)}else o=[e.id]}else o=d?te.includes(e.id)?te.filter(t=>t!==e.id):[...te,e.id]:1===te.length&&te.includes(e.id)?[]:[e.id];O(o.at(-1)),z(o),i=o.at(-1)??null,g?.(i),void 0===f&&C(i)},onMouseEnter:()=>h?.(e.id),onMouseLeave:()=>h?.(null),children:e.displayId??e.id}),(0,t.jsx)(ey,{type:"button",onClick:()=>{t_(e)},children:"붙여넣기"})]},e.id))})]}),(0,t.jsxs)(ec,{children:[(0,t.jsxs)(J,{children:[(0,t.jsx)(Y,{type:"button",$isActive:"edit"===I,onClick:()=>S("edit"),children:"편집 패널"}),(0,t.jsx)(Y,{type:"button",$isActive:"bulk"===I,onClick:()=>S("bulk"),children:"벌크 패널"})]}),"bulk"===I?(0,t.jsxs)(G,{children:[(0,t.jsx)(eu,{children:"벌크 패널"}),(0,t.jsxs)(Z,{children:[(0,t.jsxs)(X,{children:[(0,t.jsx)(q,{type:"checkbox",checked:T,disabled:0===te.length,onChange:e=>{$(e.target.checked)}}),"Editable (",te.length,"개 선택)"]}),(0,t.jsx)(Q,{type:"button",onClick:()=>{if(void 0===n)return;let e=o.filter(e=>te.includes(e.id)).map(e=>({...e,uiProps:{...e.uiProps,editable:T}}));0!==e.length&&n(e)},disabled:0===te.length,children:"선택 필드에 적용"})]}),void 0!==p?(0,t.jsx)(ee,{type:"button",onClick:p,children:"현재 페이지 체크/라디오 너비 2.4% / 높이 1.7% 적용"}):null,void 0!==u?(0,t.jsx)(et,{type:"button",onClick:u,disabled:c,children:c?"현재 페이지 저장 중...":"현재 페이지 전체 저장"}):null]}):e9?(0,t.jsxs)(eb,{children:[(0,t.jsxs)(ev,{children:[(0,t.jsx)(ej,{children:e9.displayId??e9.id}),(0,t.jsx)(eP,{type:"button",onClick:()=>void tj(),children:M?"복사됨":"복사"})]}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eB,{children:["Type (",e9.uiProps.fieldType,")"]}),(0,t.jsx)(e0,{value:e9.uiProps.fieldType??"text",onChange:e=>{let t=e.target.value;tt(t)&&e9&&d(e9.id,{...e9,uiProps:ti(t,e9.uiProps)})},children:P.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)(ek,{children:[(0,t.jsx)(eB,{children:"값 (미리보기/체험)"}),(0,t.jsx)(eV,{type:"text",value:e9.defaultValue,onChange:e=>{var t;return t=e.target.value,void(e9&&d(e9.id,{...e9,defaultValue:t}))},placeholder:"필드 값을 입력하세요"})]}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eB,{children:["Width (",tv(e9.uiProps.style.width,"25"),")"]}),(0,t.jsx)(eV,{type:"number",value:tm(e9.uiProps.style.width,"25"),onChange:e=>to("width",e.target.value),placeholder:"40",step:"0.1"})]}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eB,{children:["Height (",tv(e9.uiProps.style.height,"3.2","y"),")"]}),(0,t.jsx)(eV,{type:"number",value:tm(e9.uiProps.style.height,"3.2"),onChange:e=>to("height",e.target.value),placeholder:"6",step:"0.1"})]}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eB,{children:["Font Size (210mm * ",tm(e9.uiProps.style.fontSize,j),")"]}),(0,t.jsx)(eV,{type:"number",value:tm(e9.uiProps.style.fontSize,j),onChange:e=>to("fontSize",e.target.value),placeholder:"0.05",step:"0.001"})]}),"text"===e9.uiProps.fieldType&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eB,{children:["Font Weight (",String(e9.uiProps.style.fontWeight??"400"),")"]}),(0,t.jsxs)(e0,{value:String(e9.uiProps.style.fontWeight??""),onChange:e=>to("fontWeight",e.target.value),children:[(0,t.jsxs)("option",{value:"",children:["기본값 (","400",")"]}),["400","500","600","700"].map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})]}),(0,t.jsxs)(ek,{children:[(0,t.jsx)(eB,{children:"Placeholder"}),(0,t.jsx)(eV,{type:"text",value:e9.uiProps.placeholder?.text??"",onChange:e=>(e=>{if(!e9||"text"!==e9.uiProps.fieldType)return;let t=e9.uiProps.placeholder?.style,i=""===e.trim()?void 0:{text:e,...void 0===t?{}:{style:t}};d(e9.id,{...e9,uiProps:{...e9.uiProps,placeholder:i}})})(e.target.value),placeholder:"placeholder text"})]})]}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eB,{children:["Line Height (",tm(e9.uiProps.style.lineHeight,"1.5"),")"]}),(0,t.jsx)(eV,{type:"number",value:tm(e9.uiProps.style.lineHeight,"1.5"),onChange:e=>to("lineHeight",e.target.value),placeholder:"1.5",step:"0.1"})]}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eB,{children:["Left (",tv(e9.uiProps.style.left),")"]}),(0,t.jsx)(eV,{type:"number",value:tb(e9.uiProps.style.left),onChange:e=>to("left",e.target.value),placeholder:"15",step:"0.1"})]}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eB,{children:["Top (",tv(e9.uiProps.style.top,void 0,"y"),")"]}),(0,t.jsx)(eV,{type:"number",value:tb(e9.uiProps.style.top),onChange:e=>to("top",e.target.value),placeholder:"15",step:"0.1"})]}),(0,t.jsxs)(eF,{children:[(0,t.jsx)(eB,{children:"Text Align"}),(0,t.jsx)(eN,{children:["left","center","right"].map(e=>(0,t.jsxs)(eR,{children:[(0,t.jsx)(eL,{type:"radio",name:"textAlign",checked:(e9.uiProps.style.textAlign??"center")===e,onChange:()=>to("textAlign",e)}),e]},e))})]}),"textarea"===e9.uiProps.fieldType&&(0,t.jsx)(ek,{children:(0,t.jsxs)(eU,{children:[(0,t.jsx)(eW,{type:"checkbox",checked:"middle"===e9.uiProps.style.verticalAlign,onChange:e=>to("verticalAlign",e.target.checked?"middle":"")}),"Vertical Center (Display/Print)"]})}),"select"===e9.uiProps.fieldType&&(0,t.jsxs)(ek,{children:[(0,t.jsx)(eB,{children:"Candidate Source"}),(0,t.jsxs)(e0,{value:e9.candidateSource??"",onChange:e=>(e=>{if(!e9||"select"!==e9.uiProps.fieldType)return;let t=""===e?null:V.some(t=>t===e)?e:e9.candidateSource;d(e9.id,{...e9,candidateSource:t})})(e.target.value),children:[(0,t.jsx)("option",{value:"",children:"Static options"}),V.map(e=>(0,t.jsx)("option",{value:e,children:e},e))]}),(0,t.jsx)(eF,{children:(0,t.jsxs)(eJ,{children:[(0,t.jsx)(eB,{children:"Select Options"}),(0,t.jsx)(eX,{type:"button",onClick:()=>N(e=>!e),children:F?"접기":"펼치기"}),F&&(0,t.jsx)(eq,{type:"button",onClick:()=>{e9&&"select"===e9.uiProps.fieldType&&d(e9.id,{...e9,uiProps:{...e9.uiProps,options:[...e9.uiProps.options,{label:"",value:""}]}})},children:"옵션 추가"})]})}),F&&(0,t.jsxs)(eY,{children:[(0,t.jsx)(eB,{children:"채우기"}),(0,t.jsx)(eX,{type:"button",onClick:()=>{e9&&"select"===e9.uiProps.fieldType&&d(e9.id,{...e9,uiProps:{...e9.uiProps,options:Array.from({length:24},(e,t)=>({label:String(t).padStart(2,"0"),value:String(t)}))}})},children:"시간"}),(0,t.jsx)(eX,{type:"button",onClick:()=>{e9&&"select"===e9.uiProps.fieldType&&d(e9.id,{...e9,uiProps:{...e9.uiProps,options:Array.from({length:60},(e,t)=>({label:String(t).padStart(2,"0"),value:String(t)}))}})},children:"분"})]}),F&&(0,t.jsx)(eH,{children:tx.map(e=>(0,t.jsxs)(eG,{children:[(0,t.jsx)(eZ,{type:"text",value:e.label,onChange:t=>tg(tx.indexOf(e),"label",t.target.value),placeholder:"label"}),(0,t.jsx)(eZ,{type:"text",value:e.value,onChange:t=>tg(tx.indexOf(e),"value",t.target.value),placeholder:"value"}),(0,t.jsx)(eQ,{type:"button",onClick:()=>(e=>{if(!e9||"select"!==e9.uiProps.fieldType)return;let t=e9.uiProps.options.filter((t,i)=>i!==e);d(e9.id,{...e9,uiProps:{...e9.uiProps,options:t.length>0?t:[{label:"",value:""}]}})})(tx.indexOf(e)),children:"삭제"})]},`${e9.id}-option-${tx.indexOf(e)}`))})]}),"radio"===e9.uiProps.fieldType&&(0,t.jsxs)(ek,{children:[(0,t.jsx)(eB,{children:"Radio Group Key"}),(0,t.jsx)(eV,{type:"text",value:e9.uiProps.groupKey??"",onChange:e=>{var t;return t=e.target.value,void(e9&&"radio"===e9.uiProps.fieldType&&d(e9.id,{...e9,uiProps:{...e9.uiProps,groupKey:t}}))},placeholder:"group key"}),(0,t.jsxs)(eU,{children:[(0,t.jsx)(eW,{type:"checkbox",checked:!0===e9.uiProps.usePrintBorderAsMarkOnPrint,onChange:e=>{var t;return t=e.target.checked,void(e9&&"radio"===e9.uiProps.fieldType&&d(e9.id,{...e9,uiProps:{...e9.uiProps,usePrintBorderAsMarkOnPrint:t}}))}}),"Use Print Border as Mark on Print"]}),(0,t.jsxs)(eU,{children:[(0,t.jsx)(eW,{type:"checkbox",checked:!0===e9.uiProps.showPrintFieldBorders,onChange:e=>{var t;return t=e.target.checked,void(e9&&"radio"===e9.uiProps.fieldType&&d(e9.id,{...e9,uiProps:{...e9.uiProps,showPrintFieldBorders:t}}))}}),"Show Print Field Borders"]}),(0,t.jsxs)(eU,{children:[(0,t.jsx)(eW,{type:"checkbox",checked:void 0!==e9.uiProps.style.borderRadius,onChange:e=>(e=>{if(!e9||"radio"!==e9.uiProps.fieldType)return;let t={...e9.uiProps.style};e?t.borderRadius=t.borderRadius??"50%":delete t.borderRadius,d(e9.id,{...e9,uiProps:{...e9.uiProps,style:t}})})(e.target.checked)}),"Border Radius (",tv(e9.uiProps.style.borderRadius,"0"),")"]}),(0,t.jsx)("div",{style:{display:void 0===e9.uiProps.style.borderRadius?"none":"block"},children:(0,t.jsx)(eV,{type:"number",value:tm(e9.uiProps.style.borderRadius,"0"),onChange:e=>to("borderRadius",e.target.value),placeholder:"0",step:"1"})})]}),"check"===e9.uiProps.fieldType&&(0,t.jsx)(ek,{children:(0,t.jsxs)(eU,{children:[(0,t.jsx)(eW,{type:"checkbox",checked:!0===e9.uiProps.showPrintFieldBorders,onChange:e=>{var t;return t=e.target.checked,void(e9&&"check"===e9.uiProps.fieldType&&d(e9.id,{...e9,uiProps:{...e9.uiProps,showPrintFieldBorders:t}}))}}),"Show Print Field Borders"]})}),"date"===e9.uiProps.fieldType&&(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eU,{children:[(0,t.jsx)(eW,{type:"checkbox",checked:!0===e9.uiProps.disableHolidaySelection,onChange:e=>{var t;return t=e.target.checked,void(e9&&"date"===e9.uiProps.fieldType&&d(e9.id,{...e9,uiProps:{...e9.uiProps,disableHolidaySelection:t}}))}}),"Disable Holiday Selection"]}),(0,t.jsxs)(eU,{children:[(0,t.jsx)(eW,{type:"checkbox",checked:!0===e9.uiProps.isDotDateFormat,onChange:e=>{var t;return t=e.target.checked,void(e9&&"date"===e9.uiProps.fieldType&&d(e9.id,{...e9,uiProps:{...e9.uiProps,isDotDateFormat:t}}))}}),"Dot Format (YYYY.MM.DD)"]}),(0,t.jsxs)(eU,{children:[(0,t.jsx)(eW,{type:"checkbox",checked:!0===e9.uiProps.isMonthDateFormat,onChange:e=>{var t;return t=e.target.checked,void(e9&&"date"===e9.uiProps.fieldType&&d(e9.id,{...e9,uiProps:{...e9.uiProps,isMonthDateFormat:t}}))}}),"Month-Date Format (MM월 DD일)"]}),(0,t.jsxs)(eU,{children:[(0,t.jsx)(eW,{type:"checkbox",checked:!0===e9.uiProps.isMonthDateWithWeekdayFormat,onChange:e=>{var t;return t=e.target.checked,void(e9&&"date"===e9.uiProps.fieldType&&d(e9.id,{...e9,uiProps:{...e9.uiProps,isMonthDateWithWeekdayFormat:t}}))}}),"Month-Date-Weekday Format (MM월 DD일 d요일)"]}),(0,t.jsxs)(eU,{children:[(0,t.jsx)(eW,{type:"checkbox",checked:void 0!==e9.uiProps.emptyValueText,onChange:e=>{var t;return t=e.target.checked,void(e9&&"date"===e9.uiProps.fieldType&&d(e9.id,{...e9,uiProps:{...e9.uiProps,emptyValueText:t?e9.uiProps.emptyValueText??"":void 0}}))}}),"Show Text When Empty"]}),void 0!==e9.uiProps.emptyValueText&&(0,t.jsx)(eV,{value:e9.uiProps.emptyValueText??"",onChange:e=>{var t;return t=e.target.value,void(e9&&"date"===e9.uiProps.fieldType&&d(e9.id,{...e9,uiProps:{...e9.uiProps,emptyValueText:t}}))},placeholder:"Text to show when empty"})]}),"month-with-year"===e9.uiProps.fieldType&&(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eU,{children:[(0,t.jsx)(eW,{type:"checkbox",checked:!0===e9.uiProps.hideYear,onChange:e=>{var t;return t=e.target.checked,void(e9&&"month-with-year"===e9.uiProps.fieldType&&d(e9.id,{...e9,uiProps:{...e9.uiProps,hideYear:t}}))}}),"Hide Year"]}),(0,t.jsxs)(eU,{children:[(0,t.jsx)(eW,{type:"checkbox",checked:!0===e9.uiProps.hideMonthUnit,onChange:e=>{var t;return t=e.target.checked,void(e9&&"month-with-year"===e9.uiProps.fieldType&&d(e9.id,{...e9,uiProps:{...e9.uiProps,hideMonthUnit:t}}))}}),"Hide Month Unit"]})]}),"textarea"===e9.uiProps.fieldType&&(0,t.jsx)(ek,{children:(y=e5[x=e9.id]??JSON.stringify(e9.uiProps.placeholder?.style??{},null,2),b=e7[x],(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eB,{children:"Placeholder"}),(0,t.jsx)(eV,{type:"text",value:e9.uiProps.placeholder?.text??"",onChange:e=>(e=>{if(!e9||"textarea"!==e9.uiProps.fieldType)return;let t=e9.uiProps.placeholder?.style,i=""===e.trim()?void 0:{text:e,...void 0===t?{}:{style:t}};d(e9.id,{...e9,uiProps:{...e9.uiProps,placeholder:i}})})(e.target.value),placeholder:"placeholder text"}),(0,t.jsx)(eB,{children:"Placeholder Style (JSON Object)"}),(0,t.jsx)(eA,{value:y,onChange:e=>(e=>{if(!e9||"textarea"!==e9.uiProps.fieldType)return;let t=e9.id;e6(i=>({...i,[t]:e}));let i=e9.uiProps.placeholder?.text;if(void 0===i||""===i.trim())return void e3(e=>({...e,[t]:"Placeholder 텍스트를 먼저 입력해 주세요."}));if(""===e.trim()){e3(e=>{if(void 0===e[t])return e;let i={...e};return delete i[t],i}),d(e9.id,{...e9,uiProps:{...e9.uiProps,placeholder:{text:i}}});return}try{let o=JSON.parse(e);if(!("object"==typeof o&&null!==o&&!Array.isArray(o)&&Object.values(o).every(e=>null==e||"string"==typeof e||"number"==typeof e)))return void e3(e=>({...e,[t]:"JSON object 형태여야 합니다."}));let r=Object.keys(o).length>0;e3(e=>{if(void 0===e[t])return e;let i={...e};return delete i[t],i}),d(e9.id,{...e9,uiProps:{...e9.uiProps,placeholder:{text:i,...r?{style:o}:{}}}})}catch{e3(e=>({...e,[t]:"유효한 JSON이 아닙니다."}))}})(e.target.value),placeholder:`{
  "color": "#9ca3af",
  "textAlign": "center"
}`}),void 0!==b?(0,t.jsx)(eE,{children:b}):null]}))}),(0,t.jsxs)(eM,{children:[(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eU,{children:[(0,t.jsx)(eW,{type:"checkbox",checked:void 0!==e9.uiProps.style.padding,onChange:e=>ty("padding",e.target.checked)}),"Base Pad (",tv(e9.uiProps.style.padding,"1.5"),")"]}),(0,t.jsx)(eV,{type:"number",value:tm(e9.uiProps.style.padding,"1.5"),onChange:e=>to("padding",e.target.value),placeholder:"0",step:"0.1",disabled:void 0===e9.uiProps.style.padding})]}),(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eU,{children:[(0,t.jsx)(eW,{type:"checkbox",checked:void 0!==e9.uiProps.style.paddingLeft,onChange:e=>ty("paddingLeft",e.target.checked)}),"Left Pad (",tv(e9.uiProps.style.paddingLeft,"1.5"),")"]}),(0,t.jsx)(eV,{type:"number",value:tm(e9.uiProps.style.paddingLeft,"1.5"),onChange:e=>to("paddingLeft",e.target.value),placeholder:"0",step:"0.1",disabled:void 0===e9.uiProps.style.paddingLeft})]}),(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eU,{children:[(0,t.jsx)(eW,{type:"checkbox",checked:void 0!==e9.uiProps.style.paddingRight,onChange:e=>ty("paddingRight",e.target.checked)}),"Right Pad (",tv(e9.uiProps.style.paddingRight,"1.5"),")"]}),(0,t.jsx)(eV,{type:"number",value:tm(e9.uiProps.style.paddingRight,"1.5"),onChange:e=>to("paddingRight",e.target.value),placeholder:"0",step:"0.1",disabled:void 0===e9.uiProps.style.paddingRight})]})]}),(0,t.jsx)(ek,{children:(0,t.jsxs)(eU,{children:[(0,t.jsx)(eW,{type:"checkbox",checked:e9.uiProps.editable??!1,onChange:e=>{var t;return t=e.target.checked,void(e9&&d(e9.id,{...e9,uiProps:{...e9.uiProps,editable:t}}))}}),"Editable"]})}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eU,{children:[(0,t.jsx)(eW,{type:"checkbox",checked:void 0!==e9.uiProps.label,onChange:e=>{var t;return t=e.target.checked,void tl(e=>{if(t)return void 0!==e?e:{field:tn()}})}}),"Label 사용"]}),void 0!==e9.uiProps.label?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eB,{children:"Label Field Name"}),(0,t.jsx)(eV,{type:"text",value:e9.uiProps.label.field.name,onChange:e=>{var t;return t=e.target.value,void tl(e=>({field:void 0===e?{...tn(),name:t}:{...e.field,name:t},...e?.group===void 0?{}:{group:e.group}}))},placeholder:"field label"}),(0,t.jsx)(eB,{children:"Label Field Sort Order"}),(0,t.jsx)(eV,{type:"number",value:e9.uiProps.label.field.sortOrder??"",onChange:e=>{let t;return t=td(e.target.value),void tl(e=>({field:void 0===e?{...tn(),sortOrder:t}:{...e.field,sortOrder:t},...e?.group===void 0?{}:{group:e.group}}))},placeholder:"optional",step:"1"}),(0,t.jsxs)(eU,{children:[(0,t.jsx)(eW,{type:"checkbox",checked:void 0!==e9.uiProps.label.group,onChange:e=>{var t;return t=e.target.checked,void tl(e=>{if(void 0===e){if(!t)return;return{field:tn(),group:{name:"",sortOrder:void 0}}}return t?{...e,group:e.group??{name:"",sortOrder:void 0}}:{field:e.field}})}}),"Label Group 사용"]}),void 0!==e9.uiProps.label.group?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eB,{children:"Label Group Name"}),(0,t.jsx)(eV,{type:"text",value:e9.uiProps.label.group.name,onChange:e=>{var t;return t=e.target.value,void tl(e=>{if(void 0===e)return{field:tn(),group:{name:t,sortOrder:void 0}};let i={name:t,sortOrder:e.group?.sortOrder};return{...e,group:i}})},placeholder:"group label"}),(0,t.jsx)(eB,{children:"Label Group Sort Order"}),(0,t.jsx)(eV,{type:"number",value:e9.uiProps.label.group.sortOrder??"",onChange:e=>{let t;return t=td(e.target.value),void tl(e=>void 0===e?{field:tn(),group:{name:"",sortOrder:t}}:{...e,group:{name:e.group?.name??"",sortOrder:t}})},placeholder:"optional",step:"1"})]}):null]}):null]}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eF,{children:[(0,t.jsx)(eB,{children:"Trigger Keys"}),(0,t.jsx)(eS,{type:"button",onClick:()=>{if(!e9)return;let e=e9.uiProps.triggerKeys??[],t=e2.find(t=>!e.includes(t));if(void 0===t)return;let i=[...e,t];d(e9.id,{...e9,uiProps:{...e9.uiProps,triggerKeys:i}})},children:"트리거 키 추가"})]}),(0,t.jsx)(ez,{children:(e9.uiProps.triggerKeys??[]).map(e=>(0,t.jsxs)(eI,{children:[(0,t.jsx)(e0,{value:e,onChange:t=>{let i=t.target.value;e4(i)&&((e,t)=>{if(!e9)return;let i=e9.uiProps.triggerKeys??[];if(e!==t&&i.includes(t))return;let o=i.map(i=>i===e?t:i),r=ts(e9.uiProps,i=>{let o={...i},r=i[e]?.trim();return void 0!==r&&""!==r&&(o[t]=r),delete o[e],o});d(e9.id,{...e9,uiProps:{...r,triggerKeys:o}})})(e,i)},children:e2.map(e=>(0,t.jsx)("option",{value:e,children:e},`${e9.id}-trigger-option-${e}`))}),(0,t.jsx)(eT,{type:"button",onClick:()=>(e=>{if(!e9)return;let t=(e9.uiProps.triggerKeys??[]).filter(t=>t!==e),i=ts(e9.uiProps,t=>{let i={...t};return delete i[e],i});d(e9.id,{...e9,uiProps:{...i,triggerKeys:t}})})(e),children:"삭제"}),e!==k.default.TARGET_SELECTED_ENTITY_PROPERTY?(0,t.jsx)(eV,{type:"text",value:e9.uiProps.triggerKeyScopes?.[e]??"",onChange:t=>((e,t)=>{if(!e9)return;let i=t.trim(),o=ts(e9.uiProps,t=>{let o={...t};return""===i?delete o[e]:o[e]=i,o});d(e9.id,{...e9,uiProps:o})})(e,t.target.value),placeholder:"scope (optional)"}):null,e===k.default.TARGET_SELECTED_ENTITY_PROPERTY?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eV,{type:"text",value:e9.uiProps.selectedEntityProperty?.sourceFieldKey??"",onChange:e=>ta("sourceFieldKey",e.target.value),placeholder:"source field key"}),(0,t.jsx)(e0,{value:e9.uiProps.selectedEntityProperty?.propertyKey??"",onChange:e=>ta("propertyKey",e.target.value),children:B.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}):null]},`${e9.id}-trigger-key-${e}`))})]}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eF,{children:[(0,t.jsx)(eB,{children:"Assist UI Components"}),(0,t.jsx)(eS,{type:"button",onClick:()=>{if(!e9)return;let e=e2[0],t=[...e9.uiProps.assistUiComponents??[],{type:"button",triggerKeys:void 0===e?[]:[e],style:{}}];d(e9.id,{...e9,uiProps:{...e9.uiProps,assistUiComponents:t}})},children:"컴포넌트 추가"})]}),(0,t.jsx)(e$,{children:(e9.uiProps.assistUiComponents??[]).map((e,t)=>tC(e,[t]))})]}),(0,t.jsxs)(eC,{children:[(0,t.jsx)(e_,{type:"button",onClick:()=>{l(e9)},children:"저장"}),void 0!==s?(0,t.jsx)(ew,{type:"button",disabled:a,onClick:()=>{s(e9)},children:a?"삭제 중...":"삭제"}):null]})]}):(0,t.jsx)(em,{children:"왼쪽에서 필드를 선택해 주세요."})]})]})})}],49940);let e1=e=>({id:`upload-row-${Math.random().toString(36).slice(2,10)}`,pageInput:String(e??1),file:null}),e5=o.default.div.withConfig({componentId:"zh__sc-4384a4ef-0"})`
  position: fixed;
  z-index: 10;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;

  background: rgb(15 23 42 / 40%);
`,e6=o.default.div.withConfig({componentId:"zh__sc-4384a4ef-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: min(520px, 100%);
  max-height: 70vh;
  padding: 20px;
  border-radius: 12px;

  background: #fff;
`,e7=o.default.h3.withConfig({componentId:"zh__sc-4384a4ef-2"})`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #111827;
`,e3=o.default.div.withConfig({componentId:"zh__sc-4384a4ef-3"})`
  font-size: 13px;
  color: #4b5563;
`,e4=o.default.div.withConfig({componentId:"zh__sc-4384a4ef-4"})`
  padding: 10px 12px;
  border: 1px solid #fecaca;
  border-radius: 8px;

  font-size: 12px;
  font-weight: 600;
  line-height: 1.45;
  color: #991b1b;

  background: #fef2f2;
`,e2=o.default.label.withConfig({componentId:"zh__sc-4384a4ef-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,e8=o.default.div.withConfig({componentId:"zh__sc-4384a4ef-6"})`
  font-size: 13px;
  font-weight: 600;
  color: #374151;
`,e9=o.default.div.withConfig({componentId:"zh__sc-4384a4ef-7"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,te=o.default.div.withConfig({componentId:"zh__sc-4384a4ef-8"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,tt=o.default.div.withConfig({componentId:"zh__sc-4384a4ef-9"})`
  min-width: 18px;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
`,ti=o.default.button.withConfig({componentId:"zh__sc-4384a4ef-10"})`
  cursor: pointer;

  width: 36px;
  height: 36px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 16px;
  color: #374151;

  background: #fff;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`,to=o.default.button.withConfig({componentId:"zh__sc-4384a4ef-11"})`
  cursor: pointer;

  width: fit-content;
  height: 36px;
  padding: 0 12px;
  border: 1px dashed #7c3aed;
  border-radius: 8px;

  font-size: 13px;
  font-weight: 600;
  color: #7c3aed;

  background: #f5f3ff;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`,tr=o.default.input.withConfig({componentId:"zh__sc-4384a4ef-12"})`
  width: 104px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;
  color: #111827;
`,td=o.default.input.withConfig({componentId:"zh__sc-4384a4ef-13"})`
  flex: 1;
  max-width: 100%;
  font-size: 14px;
`,tn=o.default.div.withConfig({componentId:"zh__sc-4384a4ef-14"})`
  font-size: 12px;
  color: #6b7280;
`,tl=o.default.div.withConfig({componentId:"zh__sc-4384a4ef-15"})`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,ts=o.default.button.withConfig({componentId:"zh__sc-4384a4ef-16"})`
  cursor: pointer;

  height: 36px;
  padding: 0 14px;
  border: 1px solid ${({$primary:e})=>!0===e?"#0f766e":"#d1d5db"};
  border-radius: 8px;

  font-size: 14px;
  font-weight: 700;
  color: ${({$primary:e})=>!0===e?"#fff":"#374151"};

  background: ${({$primary:e})=>!0===e?"#0f766e":"#fff"};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`;e.s(["default",0,function({templateName:e,defaultPage:o,isUploading:r,onClose:d,onUpload:n}){let[l,s]=(0,i.useState)(()=>[e1(o)]),a=l.map(e=>{let t=Number(e.pageInput.trim());return null===e.file||!Number.isInteger(t)||t<1?null:{file:e.file,page:t}}).filter(e=>null!==e);return(0,t.jsx)(e5,{onClick:()=>{!0!==r&&d()},children:(0,t.jsxs)(e6,{onClick:e=>{e.stopPropagation()},children:[(0,t.jsx)(e7,{children:"템플릿 페이지 이미지 업로드"}),(0,t.jsx)(e3,{children:""===e?"템플릿 미선택":`템플릿: ${e}`}),(0,t.jsx)(e4,{children:"템플릿 이미지 배열은 요소별 개별 제어를 지원하지 않습니다. 전체 항목을 한 번에 업로드해 주세요."}),(0,t.jsxs)(e2,{children:[(0,t.jsx)(e8,{children:"업로드 항목"}),(0,t.jsx)(e9,{children:l.map((e,i)=>(0,t.jsxs)(te,{children:[(0,t.jsx)(tt,{children:i+1}),(0,t.jsx)(tr,{type:"number",min:1,step:1,value:e.pageInput,onChange:t=>{var i,o;i=e.id,o=t.target.value,s(e=>e.map(e=>e.id===i?{...e,pageInput:o}:e))},disabled:r}),(0,t.jsx)(td,{type:"file",accept:"image/png,image/jpeg,image/webp",onChange:t=>{var i;let o=t.target.files?.[0]??null;i=e.id,s(e=>e.map(e=>e.id===i?{...e,file:o}:e))},disabled:r}),(0,t.jsx)(ti,{type:"button",onClick:()=>{var t;t=e.id,s(e=>e.length<=1?[e1(o)]:e.filter(e=>e.id!==t))},disabled:r||l.length<=1,children:"-"})]},e.id))}),(0,t.jsx)(to,{type:"button",onClick:()=>{s(e=>[...e,e1(o)])},disabled:r,children:"+ 항목 추가"}),(0,t.jsx)(tn,{children:"페이지 번호와 이미지 파일을 같이 입력하세요. 지원 형식: PNG, JPG, WEBP"})]}),(0,t.jsxs)(tl,{children:[(0,t.jsx)(ts,{type:"button",onClick:()=>{d()},disabled:r,children:"취소"}),(0,t.jsx)(ts,{type:"button",$primary:!0,disabled:0===a.length||r,onClick:()=>{0!==a.length&&n({items:a})},children:!0===r?"업로드 중...":"업로드"})]})]})})}],89667);let ta=o.default.div.withConfig({componentId:"zh__sc-de981c25-0"})`
  display: flex;
  flex-wrap: nowrap;
  gap: 24px;
  align-items: center;
`,tp=o.default.label.withConfig({componentId:"zh__sc-de981c25-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,tc=o.default.div.withConfig({componentId:"zh__sc-de981c25-2"})`
  flex: 0 0 auto;
  font-size: 12px;
  font-weight: 600;
  color: #4b5563;
`,tu=o.default.select.withConfig({componentId:"zh__sc-de981c25-3"})`
  max-width: 200px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;
  color: #111827;

  background: #fff;
`,th=o.default.input.withConfig({componentId:"zh__sc-de981c25-4"})`
  width: 100px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;
  color: #111827;

  background: #fff;
`,tf=o.default.button.withConfig({componentId:"zh__sc-de981c25-5"})`
  cursor: pointer;

  height: 36px;
  padding: 0 12px;
  border: 1px solid ${({$isPlayMode:e})=>e?"#0f766e":"#1d4ed8"};
  border-radius: 8px;

  font-size: 13px;
  font-weight: 700;
  color: ${({$isPlayMode:e})=>e?"#0f766e":"#1d4ed8"};

  background: ${({$isPlayMode:e})=>e?"#f0fdfa":"#eff6ff"};
`,tg=o.default.button.withConfig({componentId:"zh__sc-de981c25-6"})`
  cursor: pointer;

  height: 36px;
  padding: 0 16px;
  border: 1px solid #1d4ed8;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 700;
  color: #1d4ed8;

  background: #eff6ff;
`,tx=o.default.button.withConfig({componentId:"zh__sc-de981c25-7"})`
  cursor: pointer;

  height: 36px;
  padding: 0 16px;
  border: 1px solid #0f766e;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 700;
  color: #0f766e;

  background: #f0fdfa;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`,ty=o.default.button.withConfig({componentId:"zh__sc-de981c25-8"})`
  cursor: pointer;

  height: 36px;
  padding: 0 16px;
  border: 1px solid #7c3aed;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 700;
  color: #fff;

  background: #7c3aed;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }
`;e.s(["default",0,function({mode:e,showServiceType:i=!0,selectedServiceType:o,serviceWorkers:r,selectedServiceWorkerId:d,contracts:n,documents:l,templates:s,pages:a,selectedContractId:p,selectedDocumentId:c,selectedTemplateId:u,selectedPageId:h,scale:f,onChangeServiceType:g,onChangeServiceWorker:x,onChangeContract:y,onChangeDocument:b,onChangeTemplate:m,onChangePage:v,onChangeScale:j,onChangeMode:P,onOpenPrintModal:_,onOpenImageUploadModal:C,onOpenAddFieldModal:w}){return(0,t.jsxs)(ta,{children:[!0===i?(0,t.jsxs)(tp,{children:[(0,t.jsx)(tc,{children:"서비스"}),(0,t.jsxs)(tu,{value:o,onChange:e=>{var t;g?.("DISABILITY_ACTIVITY_SUPPORT"===(t=e.target.value)?"DISABILITY_ACTIVITY_SUPPORT":"NUTRITION"===t?"NUTRITION":"MEAL")},children:[(0,t.jsx)("option",{value:"MEAL",children:"식사"}),(0,t.jsx)("option",{value:"NUTRITION",children:"영양"}),(0,t.jsx)("option",{value:"DISABILITY_ACTIVITY_SUPPORT",children:"장애인 활동지원"})]})]}):null,void 0!==r?(0,t.jsxs)(tp,{children:[(0,t.jsx)(tc,{children:"제공인력"}),(0,t.jsx)(tu,{value:d,onChange:e=>{x?.(e.target.value)},disabled:0===r.length,children:0===r.length?(0,t.jsx)("option",{value:"",children:"제공인력 없음"}):r.map(e=>(0,t.jsx)("option",{value:e.id,children:e.label},e.id))})]}):null,(0,t.jsxs)(tp,{children:[(0,t.jsx)(tc,{children:"계약"}),(0,t.jsx)(tu,{value:p,onChange:e=>{y(e.target.value)},disabled:0===n.length,children:0===n.length?(0,t.jsx)("option",{value:"",children:"계약 없음"}):n.map(e=>(0,t.jsx)("option",{value:e.id,children:e.label},e.id))})]}),(0,t.jsxs)(tp,{children:[(0,t.jsx)(tc,{children:"문서"}),(0,t.jsx)(tu,{value:c,onChange:e=>{b(e.target.value)},disabled:0===l.length,children:0===l.length?(0,t.jsx)("option",{value:"",children:"문서 없음"}):l.map(e=>(0,t.jsx)("option",{value:e.id,children:e.label},e.id))})]}),(0,t.jsxs)(tp,{children:[(0,t.jsx)(tc,{children:"템플릿"}),(0,t.jsx)(tu,{value:u,onChange:e=>{m(e.target.value)},children:s.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))})]}),(0,t.jsxs)(tp,{children:[(0,t.jsx)(tc,{children:"페이지"}),(0,t.jsx)(tu,{value:h,onChange:e=>{v(e.target.value)},children:a.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.page,"페이지"]},e.id))})]}),(0,t.jsxs)(tp,{children:[(0,t.jsx)(tc,{children:"배율"}),(0,t.jsx)(th,{type:"number",value:f,onChange:e=>{j(e.target.value)},min:10,step:10})]}),(0,t.jsx)(tf,{type:"button",$isPlayMode:"play"===e,onClick:()=>{P("edit"===e?"play":"edit")},children:"edit"===e?"편집 중":"체험 중"}),(0,t.jsx)(tg,{type:"button",onClick:_,children:"출력"}),(0,t.jsx)(tx,{type:"button",onClick:C,disabled:""===u,children:"업로드"}),(0,t.jsx)(ty,{type:"button",onClick:w,disabled:""===u,children:"필드키"})]})}],71756)}]);