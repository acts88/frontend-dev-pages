(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18523,e=>{"use strict";var t=e.i(9735),i=e.i(33261),o=e.i(38803);let r=[{path:"/service-worker/service-record/all",label:"전체보기"},{path:"/service-worker/service-record/irregular-payment",label:"부정결제 찾기"}],n=o.default.div.withConfig({componentId:"zh__sc-e39e9bf1-0"})`
  display: flex;
  align-self: flex-start;

  width: 100%;
  border-bottom: 1px solid #e5e7eb;

  background-color: white;
`,l=o.default.button.withConfig({componentId:"zh__sc-e39e9bf1-1"})`
  cursor: pointer;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 220px;
  height: 56px;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: ${({$active:e})=>e?"#052b57":"#464c53"};

  &::after {
    content: '';

    position: absolute;
    bottom: -1px;

    display: block;

    width: 100%;
    height: 4px;

    background-color: ${({$active:e})=>e?"#052b57":"transparent"};
  }
`;e.s(["default",0,function(){let e=(0,i.usePathname)(),o=(0,i.useRouter)();return(0,t.jsx)(n,{children:r.map(({path:i,label:r})=>{let n=e.startsWith(i);return(0,t.jsx)(l,{type:"button",$active:n,onClick:()=>{o.push(i)},children:r},i)})})}])}]);