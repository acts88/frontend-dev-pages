(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,12798,t=>{"use strict";var e=t.i(9735),i=t.i(33261),o=t.i(38803);let n=[{path:"/client/payment/copayment",label:"본인부담금 납부 관리"},{path:"/client/payment/voucher",label:"바우처 결제 관리",disabled:!0}],l=o.default.div.withConfig({componentId:"zh__sc-2c1fb0d3-0"})`
  display: flex;
  align-self: flex-start;

  width: 100%;
  border-bottom: 1px solid #e5e7eb;

  background-color: white;
`,a=o.default.button.withConfig({componentId:"zh__sc-2c1fb0d3-1"})`
  cursor: ${({$disabled:t})=>t?"not-allowed":"pointer"};

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 220px;
  height: 56px;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: ${({$active:t,$disabled:e})=>e?"#9ca3af":t?"#052b57":"#464c53"};

  &::after {
    content: '';

    position: absolute;
    bottom: -1px;

    display: block;

    width: 100%;
    height: 4px;

    background-color: ${({$active:t,$disabled:e})=>e?"transparent":t?"#052b57":"transparent"};
  }
`;t.s(["default",0,function(){let t=(0,i.usePathname)(),o=(0,i.useRouter)();return(0,e.jsx)(l,{children:n.map(({path:i,label:n,disabled:l})=>{let c=t.startsWith(i);return(0,e.jsx)(a,{type:"button",$active:c,$disabled:!0===l,disabled:!0===l,onClick:()=>{!0!==l&&o.push(i)},children:n},i)})})}])}]);