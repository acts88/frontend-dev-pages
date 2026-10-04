(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,61526,e=>{"use strict";var t=e.i(9735);e.i(3159);var i=e.i(46907),n=e.i(7744),a=e.i(15695),l=e.i(24045),o=e.i(8179),r=e.i(38803),d=e.i(23416),f=e.i(89656),s=e.i(26170),c=e.i(64954),u=e.i(74515),p=e.i(43174);let h=".xlsx";function x(e){return Array.from(e.dataTransfer?.types??[]).includes("Files")}let g=(0,r.default)(c.default.Button.Outlined).withConfig({componentId:"zh__sc-e3b5ea9a-0"})`
  ${f.btnStyle}
  color: #4f39f6;
`,b=(0,r.default)(f.Body).withConfig({componentId:"zh__sc-e3b5ea9a-1"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  min-height: 457px;
  padding: 32px 24px;

  background: #f9fafb;
`,m=r.default.p.withConfig({componentId:"zh__sc-e3b5ea9a-2"})`
  width: 100%;
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #101828;
  text-align: center;
  white-space: pre-line;
`,w=r.default.div.withConfig({componentId:"zh__sc-e3b5ea9a-3"})`
  cursor: ${({$isError:e})=>e?"default":"pointer"};

  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  min-height: 168px;
  padding: 24px 40px;
  border: 1px solid ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  border-radius: 16px;

  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};

  background: ${({$isDragging:e,$isError:t})=>t?"#fff5f5":e?"#f6f3ff":"#fff"};

  &:hover {
    background-color: ${({$isError:e})=>e?"#fff5f5":"#f6f3ff"};
  }

  &:active {
    background-color: ${({$isError:e})=>e?"#fff5f5":"#efeaff"};
  }
`,v=r.default.input.withConfig({componentId:"zh__sc-e3b5ea9a-4"})`
  display: none;
`,_=r.default.div.withConfig({componentId:"zh__sc-e3b5ea9a-5"})`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
`,j=r.default.div.withConfig({componentId:"zh__sc-e3b5ea9a-6"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  align-self: stretch;
`,y=r.default.p.withConfig({componentId:"zh__sc-e3b5ea9a-7"})`
  margin: 0;

  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,z=r.default.p.withConfig({componentId:"zh__sc-e3b5ea9a-8"})`
  margin: 0;
  font-size: 14px;
  line-height: 24px;
  color: #99a1af;
`,C=r.default.div.withConfig({componentId:"zh__sc-e3b5ea9a-9"})`
  overflow: auto hidden;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
  min-width: 0;
  padding-bottom: 6px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: #d1d5db;
  }
`,k=r.default.div.withConfig({componentId:"zh__sc-e3b5ea9a-10"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,I=r.default.div.withConfig({componentId:"zh__sc-e3b5ea9a-11"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`,$=r.default.p.withConfig({componentId:"zh__sc-e3b5ea9a-12"})`
  overflow: hidden;

  max-width: 196px;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #0a0a0a;
  text-overflow: ellipsis;
  white-space: nowrap;
`,D=r.default.p.withConfig({componentId:"zh__sc-e3b5ea9a-13"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  color: #0a0a0a;
`,R=r.default.button.withConfig({componentId:"zh__sc-e3b5ea9a-14"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #45464e;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #0a0a0a;
  letter-spacing: -1px;

  background: #fff;

  &:hover {
    background: #f9fafb;
  }

  &:active {
    background: #f3f4f6;
  }
`,T=(0,r.default)(c.default.Button.Outlined).withConfig({componentId:"zh__sc-e3b5ea9a-15"})`
  height: 36px;
  padding: 8px 16px;
`,B=(0,r.default)(c.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-e3b5ea9a-16"})`
  gap: 4px;
  height: 36px;
  padding: 8px 16px;
  border-radius: 4px;
`,S=(0,i.observer)(function({onClose:e}){var i;let r=(0,n.useRef)(null),[c,S]=(0,n.useState)(null),[W,L]=(0,n.useState)(!1),[O,A]=(0,n.useState)(!1),[F,H]=(0,n.useState)(!1),P=(0,n.useRef)(null),E=W||p.default.ui.layout.isWindowFileDragging,U=p.default.serviceWorker.serviceRecord.lastImportedDate,q=U?`가장 최신 업로드 일자는 ${U} 입니다.

[바우처 이용내역 조회(신규)] 엑셀 파일을 업로드하고,
[업로드 완료하기] 버튼을 클릭하세요.`:`[바우처 이용내역 조회(신규)] 엑셀 파일을 업로드하고,
[업로드 완료하기] 버튼을 클릭하세요.`,K=()=>{null!==P.current&&(clearTimeout(P.current),P.current=null)},M=()=>{K(),S(null),L(!1),A(!1),H(!1),e()},X=e=>{if(null!==e){if(!e.name.toLowerCase().endsWith(h)){S(null),K(),A(!0),P.current=setTimeout(()=>{A(!1),P.current=null},2e3);return}K(),S(e),A(!1)}},G=()=>{K(),S(null),L(!1),A(!1)};(0,u.default)(e=>{X(e[0]??null)});let J=async()=>{if(null===c||F)return;H(!0);let[e]=await d.default.data.serviceWorker.importActivityRecordsExcel({file:c,organizationId:p.default.data.auth.me.data?.organizationId??void 0});if(H(!1),null!==e)return void p.default.ui.layout.toast.error(e.message??"파일 업로드에 실패했습니다. 잠시 후 다시 시도해 주세요.",3e3);let t=p.default.data.serviceWorker.activityRecordList;null!==t.query&&await t.refetch();let i=p.default.data.serviceWorker.activityRecordsLastImportedDate;null!==i.query&&await i.refetch(),p.default.ui.layout.toast.success("파일 업로드를 완료했습니다.",3e3),M()};return(0,t.jsx)(s.default,{children:(0,t.jsxs)(f.Container,{children:[(0,t.jsxs)(f.Header,{children:[(0,t.jsx)(f.HeaderLeft,{children:(0,t.jsx)(f.HeaderTitle,{children:"전자바우처(엑셀) 업로드하기"})}),(0,t.jsx)(f.HeaderRight,{children:(0,t.jsxs)(g,{type:"button",onClick:M,children:[(0,t.jsx)(o.X,{size:20}),"닫기"]})})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)(m,{children:q}),(0,t.jsxs)(w,{$isDragging:E,$isError:O,onClick:()=>r.current?.click(),onDragOver:e=>{!x(e)||(e.preventDefault(),F||L(!0))},onDragLeave:e=>{x(e)&&(e.preventDefault(),L(!1))},onDrop:e=>{!x(e)||(e.preventDefault(),F||(L(!1),X(e.dataTransfer.files?.[0]??null)))},children:[(0,t.jsx)(v,{ref:r,type:"file",accept:h,onChange:e=>{X(e.target.files?.[0]??null),e.target.value=""}}),null!==c||O||F?null:(0,t.jsx)(_,{children:(0,t.jsx)(l.Upload,{size:26,color:"#4f39f6"})}),null!==c?(0,t.jsx)(C,{children:(0,t.jsxs)(k,{children:[(0,t.jsxs)(I,{children:[(0,t.jsx)($,{children:c.name}),(0,t.jsx)(D,{children:(i=c.size,`${Math.ceil(i/1024/1024)}MB`)})]}),(0,t.jsxs)(R,{type:"button",onClick:e=>{e.stopPropagation(),G()},disabled:F,children:["삭제",(0,t.jsx)(o.X,{size:16})]})]})}):null,(0,t.jsxs)(j,{children:[(0,t.jsx)(y,{$isError:O,children:O?"지원하지 않는 파일 형식입니다.":E?"파일을 여기에 놓으면 업로드 됩니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요."}),(0,t.jsx)(z,{children:null===c||O||F?"지원 파일 형식: 엑셀(.xlsx)":"새 파일을 업로드하면 기존 파일이 교체됩니다."})]})]})]}),(0,t.jsxs)(f.Footer,{children:[(0,t.jsx)(T,{type:"button",onClick:G,disabled:null===c||F,children:"다시 업로드하기"}),(0,t.jsxs)(B,{type:"button",onClick:()=>void J(),disabled:null===c||F,children:[(0,t.jsx)(a.Check,{size:20}),F?"업로드 중":"업로드 완료하기"]})]})]})})});e.s(["default",0,S])}]);