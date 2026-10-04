(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,44237,e=>{"use strict";var t=e.i(9735),n=e.i(7744),i=e.i(38803),d=e.i(64954);let a=i.default.div.withConfig({componentId:"zh__sc-adb993a-0"})`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`,o=i.default.main.withConfig({componentId:"zh__sc-adb993a-1"})`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: min(960px, 100%);
  padding: 24px;
`,l=i.default.header.withConfig({componentId:"zh__sc-adb993a-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,s=i.default.h1.withConfig({componentId:"zh__sc-adb993a-3"})`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #111827;
`,c=i.default.p.withConfig({componentId:"zh__sc-adb993a-4"})`
  margin: 0;
  font-size: 14px;
  color: #4b5563;
`,h=i.default.section.withConfig({componentId:"zh__sc-adb993a-5"})`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
`,p=i.default.button.withConfig({componentId:"zh__sc-adb993a-6"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0;
  border: 0;

  background: transparent;

  &:disabled {
    cursor: default;
  }
`,r=i.default.h2.withConfig({componentId:"zh__sc-adb993a-7"})`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #111827;
`,f=i.default.span.withConfig({componentId:"zh__sc-adb993a-8"})`
  font-size: 12px;
  font-weight: 600;
  color: #4b5563;
`,u=i.default.div.withConfig({componentId:"zh__sc-adb993a-9"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,x=i.default.div.withConfig({componentId:"zh__sc-adb993a-10"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
`,g=i.default.p.withConfig({componentId:"zh__sc-adb993a-11"})`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: #374151;
`,m=(0,i.default)(d.default.Button.Outlined).withConfig({componentId:"zh__sc-adb993a-12"})`
  min-width: 92px;
  height: 32px;
  padding: 0 12px;
`,b=i.default.p.withConfig({componentId:"zh__sc-adb993a-13"})`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: #374151;
`,_=(0,i.default)(d.default.Input.Timetable).withConfig({componentId:"zh__sc-adb993a-14"})`
  max-width: 920px;
`,w=(0,i.default)(d.default.Input.TimeSlider).withConfig({componentId:"zh__sc-adb993a-15"})`
  max-width: 920px;
`;e.s(["default",0,function(){let[e,i]=(0,n.useState)([]),[d,j]=(0,n.useState)([]),[C,z]=(0,n.useState)(!1),[I,y]=(0,n.useState)(()=>new Set),v=e=>{y(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})};return(0,t.jsx)(a,{children:(0,t.jsxs)(o,{children:[(0,t.jsxs)(l,{children:[(0,t.jsx)(s,{children:"Input Devtool"}),(0,t.jsx)(c,{children:"Input.Timetable 드래그 선택/해제 동작을 확인합니다."})]}),(0,t.jsxs)(h,{children:[(0,t.jsxs)(p,{type:"button",onClick:()=>{v("timetable")},children:[(0,t.jsx)(r,{children:"Input.Timetable"}),(0,t.jsx)(f,{children:I.has("timetable")?"닫기":"열기"})]}),I.has("timetable")?(0,t.jsxs)(u,{children:[(0,t.jsxs)(b,{children:["선택된 슬롯: ",e?.length??0]}),(0,t.jsx)(_,{value:e,onChange:e=>{i(e.target.value)}})]}):null]}),(0,t.jsxs)(h,{children:[(0,t.jsxs)(p,{type:"button",onClick:()=>{v("time-slider")},children:[(0,t.jsx)(r,{children:"Input.TimeSlider"}),(0,t.jsx)(f,{children:I.has("time-slider")?"닫기":"열기"})]}),I.has("time-slider")?(0,t.jsxs)(u,{children:[(0,t.jsxs)(x,{children:[(0,t.jsxs)(g,{children:["disabled: ",C?"on":"off"]}),(0,t.jsx)(m,{type:"button",onClick:()=>{z(e=>!e)},children:C?"활성화":"비활성화"})]}),(0,t.jsx)(w,{value:d,disabled:C,onChange:e=>{j(e.target.value)}})]}):null]})]})})}])}]);