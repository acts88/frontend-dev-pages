(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,36105,t=>{"use strict";var e=t.i(9735),i=t.i(33261),o=t.i(38803);let n=[{path:"/diet-setting/operation",label:"운영 관리"},{path:"/diet-setting/menu",label:"식단표 관리"},{path:"/diet-setting/provider",label:"업체 정보 관리"}],a=o.default.div.withConfig({componentId:"zh__sc-169a4168-0"})`
  display: flex;
  align-self: flex-start;

  width: 100%;
  border-bottom: 1px solid #e5e7eb;

  background-color: white;
`,l=o.default.button.withConfig({componentId:"zh__sc-169a4168-1"})`
  cursor: ${({$disabled:t})=>t?"not-allowed":"pointer"};

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 180px;
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
`;t.s(["default",0,function(){let t=(0,i.usePathname)(),o=(0,i.useRouter)();return(0,e.jsx)(a,{children:n.map(({path:i,label:n,disabled:a})=>{let r=t.startsWith(i);return(0,e.jsx)(l,{type:"button",$active:r,$disabled:!0===a,disabled:!0===a,onClick:()=>{!0!==a&&o.push(i)},children:n},i)})})}])}]);