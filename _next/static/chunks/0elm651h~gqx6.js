(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,30127,t=>{"use strict";var i=t.i(9735);t.i(3159);var e=t.i(46907),o=t.i(33261),n=t.i(38803),a=t.i(89696),s=t.i(43174),l=t.i(92428);let r=[a.default.ORGANIZATION_VIEW],p=[{path:"/organization-setting/basic",label:"기관 정보",permissions:r},{path:"/organization-setting/operation",label:"서비스별 운영 설정",permissions:r},{path:"/organization-setting/region",label:"서비스 지역",permissions:r},{path:"/organization-setting/staff",label:"연락처∙근무자 관리",permissions:[a.default.STAFF_VIEW,a.default.ORGANIZATION_VIEW]},{path:"/organization-setting/permission",label:"권한 설정",permissions:[a.default.PERMISSION_VIEW]},{path:"/organization-setting/payroll",label:"인사∙급여 설정",permissions:[a.default.PAYROLL_VIEW]},{path:"/organization-setting/billing",label:"계좌∙카드 정보 관리",permissions:r}],c=(0,e.observer)(function(){let t=(0,o.usePathname)(),e=(0,o.useRouter)(),n=s.default.data.auth.me.data;return(0,i.jsx)(h,{children:p.filter(t=>(0,l.canSee)(n,t.permissions)).map(({path:o,label:n})=>{let a=t.startsWith(o);return(0,i.jsx)(d,{type:"button",$active:a,onClick:()=>e.push(o),children:n},o)})})}),h=n.default.div.withConfig({componentId:"zh__sc-c18b584f-0"})`
  display: flex;
  align-self: flex-start;

  width: 100%;
  border-bottom: 1px solid #e5e7eb;

  background-color: white;
`,d=n.default.button.withConfig({componentId:"zh__sc-c18b584f-1"})`
  cursor: pointer;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 180px;
  height: 56px;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: ${({$active:t})=>t?"#052b57":"#464c53"};

  &::after {
    content: '';

    position: absolute;
    bottom: -1px;

    display: block;

    width: 100%;
    height: 4px;

    background-color: ${({$active:t})=>t?"#052b57":"transparent"};
  }
`;t.s(["default",0,c])}]);