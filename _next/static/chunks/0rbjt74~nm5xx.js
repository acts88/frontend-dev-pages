(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22327,e=>{"use strict";var t=e.i(9735),o=e.i(7744),n=e.i(38803),i=e.i(43174);let c=n.default.div.withConfig({componentId:"zh__sc-9eec4bac-0"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`,l=n.default.main.withConfig({componentId:"zh__sc-9eec4bac-1"})`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
`,a=n.default.header.withConfig({componentId:"zh__sc-9eec4bac-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,d=n.default.h1.withConfig({componentId:"zh__sc-9eec4bac-3"})`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #111827;
`,s=n.default.p.withConfig({componentId:"zh__sc-9eec4bac-4"})`
  margin: 0;
  font-size: 14px;
  color: #4b5563;
`,r=n.default.div.withConfig({componentId:"zh__sc-9eec4bac-5"})`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,f=n.default.button.withConfig({componentId:"zh__sc-9eec4bac-6"})`
  cursor: pointer;

  padding: 8px 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 13px;
  font-weight: 600;
  color: #1f2937;

  background: #fff;

  &:hover {
    border-color: #6366f1;
    color: #4338ca;
  }
`,u=n.default.section.withConfig({componentId:"zh__sc-9eec4bac-7"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,p=n.default.div.withConfig({componentId:"zh__sc-9eec4bac-8"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,h=n.default.h2.withConfig({componentId:"zh__sc-9eec4bac-9"})`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #111827;
`,x=n.default.div.withConfig({componentId:"zh__sc-9eec4bac-10"})`
  position: relative;

  min-height: 240px;
  padding: 12px;
  border: 1px dashed #c7d2fe;
  border-radius: 10px;

  color: #4338ca;

  background: #eef2ff;
`,g=n.default.p.withConfig({componentId:"zh__sc-9eec4bac-11"})`
  margin: 0;
`,b=n.default.div.withConfig({componentId:"zh__sc-9eec4bac-12"})`
  pointer-events: none;
  position: absolute;
  inset: 0;
`;e.s(["default",0,function(){let e=(0,o.useRef)(null);return(0,t.jsx)(c,{children:(0,t.jsxs)(l,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)(d,{children:"Toast Devtool"}),(0,t.jsx)(s,{children:"전역 토스트 및 로컬 컨테이너 토스트 동작을 점검합니다."})]}),(0,t.jsxs)(r,{children:[(0,t.jsx)(f,{type:"button",onClick:()=>i.default.ui.layout.toast.success("저장이 완료되었습니다."),children:"Success"}),(0,t.jsx)(f,{type:"button",onClick:()=>i.default.ui.layout.toast.error("저장 중 오류가 발생했습니다."),children:"Error"}),(0,t.jsx)(f,{type:"button",onClick:()=>i.default.ui.layout.toast.info("잠시만 기다려주세요."),children:"Info"}),(0,t.jsx)(f,{type:"button",onClick:()=>{i.default.ui.layout.toast.success("성공 토스트 1",2500),i.default.ui.layout.toast.info("안내 토스트 2",3e3),i.default.ui.layout.toast.error("에러 토스트 3",3500)},children:"Stack 3 Toasts"}),(0,t.jsx)(f,{type:"button",onClick:()=>i.default.ui.layout.toast.clear(),children:"Clear All"})]}),(0,t.jsxs)(u,{children:[(0,t.jsxs)(p,{children:[(0,t.jsx)(h,{children:"Local Container Test"}),(0,t.jsx)(f,{type:"button",onClick:()=>{i.default.ui.layout.toast.info("이 토스트는 로컬 컨테이너에 표시됩니다.",3e3,e.current)},children:"Show In Local Container"})]}),(0,t.jsxs)(x,{children:[(0,t.jsx)(g,{children:"이 박스를 기준으로 토스트가 상단 중앙에 떠야 합니다."}),(0,t.jsx)(b,{ref:e})]})]})]})})}])}]);