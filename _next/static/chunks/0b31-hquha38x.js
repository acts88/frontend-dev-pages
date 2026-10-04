(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31491,e=>{"use strict";var t=e.i(9735);e.i(3159);var i=e.i(46907),n=e.i(33261),o=e.i(38803),l=e.i(7242),r=e.i(43174);let a=(0,i.observer)(function(){let e=(0,n.useRouter)(),i=(0,n.usePathname)(),o=(0,n.useSearchParams)(),{activeServiceList:a,selectedServiceType:h}=r.default.serviceWorker.info.byDocument;return(0,t.jsx)(s,{children:(0,t.jsxs)(d,{children:[(0,t.jsx)(c,{children:"서비스 구분"}),(0,t.jsx)(f,{children:a.map(n=>(0,t.jsxs)(p,{type:"button",$active:h===n.type,onClick:()=>{var t;let l,r;return t=n.type,(l=new URLSearchParams(o.toString())).set("serviceType",t.toLowerCase()),r=l.toString(),void e.push(""===r?i:`${i}?${r}`)},children:[l.default[n.type].label," 서비스"]},n.type))})]})})}),s=o.default.div.withConfig({componentId:"zh__sc-e281efe0-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,d=o.default.div.withConfig({componentId:"zh__sc-e281efe0-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
`,c=o.default.p.withConfig({componentId:"zh__sc-e281efe0-2"})`
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
  white-space: nowrap;
`,f=o.default.div.withConfig({componentId:"zh__sc-e281efe0-3"})`
  overflow: hidden;
  display: flex;

  height: 48px;
  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,p=o.default.button.withConfig({componentId:"zh__sc-e281efe0-4"})`
  cursor: pointer;

  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;

  min-width: 80px;
  height: 100%;
  padding: 0 16px;
  border: none;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  color: ${({$active:e})=>e?"#fff":"#464c53"};
  white-space: nowrap;

  background: ${({$active:e})=>e?"#4f39f6":"transparent"};
`;e.s(["default",0,a])},34380,e=>{"use strict";e.i(3159);var t=e.i(46907),i=e.i(33261),n=e.i(7744),o=e.i(43174);let l=(0,t.observer)(function(){let e=(0,i.useRouter)(),t=(0,i.usePathname)(),l=(0,i.useSearchParams)(),{activeServiceList:r,setSelectedServiceType:a}=o.default.serviceWorker.info.byDocument;return(0,n.useEffect)(()=>{let i=l.get("serviceType")?.toUpperCase(),n=r.find(e=>e.type===i)??r[0];if(void 0===n)return void a(null);if(a(n.type),i!==n.type){let i=new URLSearchParams(l.toString());i.set("serviceType",n.type.toLowerCase()),e.replace(`${t}?${i.toString()}`)}},[r,t,e,l,a]),(0,n.useEffect)(()=>()=>a(null),[a]),null});e.s(["default",0,l])},57473,e=>{"use strict";var t=e.i(9735),i=e.i(88552);e.i(3159);var n=e.i(46907),o=e.i(7744),l=e.i(38803),r=e.i(98273),a=e.i(43174),s=e.i(84673),d=e.i(553),c=e.i(64954),f=e.i(86400);let p={black:"#0a0a0a",blue:"#2264E8",orange:"#FF6900",gray:"#8A949E",indigo:"#4F39F6"};function h({templateName:e,statusLabel:i,serviceWorkers:n,onClose:l,onOpen:r}){let[a,c]=(0,o.useState)(""),T=(0,o.useMemo)(()=>n.map(e=>({...e,_searchableName:f.default.brand.searchableText.create(e.serviceWorkerName)})),[n]),L=(0,o.useMemo)(()=>{let e=a.trim();return""===e?T:T.filter(t=>{let i=t.serviceWorkerResidentRegistrationNumber?.replace(/[^0-9]/g,"").slice(0,6)??"",n=e.replace(/[^0-9]/g,"");return f.default.brand.searchableText.isMatch(t._searchableName,e)||""!==n&&i.includes(n)})},[a,T]);return(0,t.jsxs)(u,{children:[(0,t.jsx)(x,{role:"presentation"}),(0,t.jsxs)(g,{children:[(0,t.jsxs)(m,{children:[(0,t.jsx)("span",{}),(0,t.jsx)(b,{children:`${e} [${i}] 목록 (총 ${n.length}건)`}),(0,t.jsx)(w,{type:"button","aria-label":"드로어 닫기",onClick:l,children:(0,t.jsx)(s.default,{sx:{fontSize:16}})})]}),(0,t.jsx)(_,{children:(0,t.jsxs)(y,{children:[(0,t.jsx)(j,{value:a,placeholder:"이름 또는 생년월일 검색",onChange:e=>c(e.target.value)}),(0,t.jsx)(v,{children:(0,t.jsx)(d.Search,{color:"#0a0a0a",size:16})})]})}),(0,t.jsxs)(z,{children:[(0,t.jsxs)(C,{children:[(0,t.jsx)(I,{children:"제공인력"}),(0,t.jsx)(I,{children:"생년월일"}),(0,t.jsx)(I,{})]}),(0,t.jsxs)(k,{children:[L.map(e=>{var i;let n;return(0,t.jsxs)(S,{children:[(0,t.jsx)($,{children:e.serviceWorkerName}),(0,t.jsx)($,{children:null!==(n=null===(i=e.serviceWorkerResidentRegistrationNumber)?null:f.default.brand.maskedResidentRegistrationNumber.is(i)?f.default.brand.maskedResidentRegistrationNumber.extractBirthDate(i):f.default.brand.residentRegistrationNumber.is(i)?i.replace(/[^0-9]/g,"").slice(0,6):null)?n:"-"}),(0,t.jsx)($,{children:(0,t.jsx)(W,{type:"button",$color:p[e.actionColor],disabled:e.actionDisabled,onClick:()=>r(e),children:e.actionLabel})})]},`${e.employmentContractId}-${e.serviceWorkerId}`)}),0===L.length&&(0,t.jsx)(R,{children:"검색 결과가 없습니다."})]})]})]})]})}let u=l.default.div.withConfig({componentId:"zh__sc-3bc5f426-0"})`
  position: absolute;
  z-index: 30;
  inset: 0;

  display: flex;
  justify-content: flex-end;
`,x=l.default.div.withConfig({componentId:"zh__sc-3bc5f426-1"})`
  position: absolute;
  inset: 0;
  background: transparent;
`,g=l.default.aside.withConfig({componentId:"zh__sc-3bc5f426-2"})`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;

  width: 1204px;
  max-width: 100%;
  height: 100%;

  background: #fff;
  box-shadow: -2px 16px 20px 0 rgb(0 0 0 / 36%);
`,m=l.default.header.withConfig({componentId:"zh__sc-3bc5f426-3"})`
  display: grid;
  grid-template-columns: 56px 1fr 56px;
  align-items: center;

  height: 68px;
  padding: 0 16px;
  border-bottom: 1px solid #e5e7eb;
`,b=l.default.h4.withConfig({componentId:"zh__sc-3bc5f426-4"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,w=(0,l.default)(c.default.Button.Outlined).withConfig({componentId:"zh__sc-3bc5f426-5"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,_=l.default.div.withConfig({componentId:"zh__sc-3bc5f426-6"})`
  display: flex;
  align-items: center;

  height: 72px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
`,y=l.default.label.withConfig({componentId:"zh__sc-3bc5f426-7"})`
  cursor: text;

  display: flex;
  gap: 8px;
  align-items: center;

  width: 360px;
  height: 40px;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;

  &:hover {
    border-color: #b8c0d0;
    background: #fbfcff;
  }

  &:focus-within {
    border-color: #5635ff;
    background: #fbfcff;
  }
`,v=l.default.span.withConfig({componentId:"zh__sc-3bc5f426-8"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;

  color: #9ca3af;
`,j=l.default.input.withConfig({componentId:"zh__sc-3bc5f426-9"})`
  width: 100%;
  min-width: 0;
  border: 0;

  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  color: #1f2129;

  background: transparent;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
  }
`,z=l.default.div.withConfig({componentId:"zh__sc-3bc5f426-10"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;
`,C=l.default.div.withConfig({componentId:"zh__sc-3bc5f426-11"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  height: 48px;
  border-bottom: 1px solid #dbe0e8;

  background: #f8fafc;
`,I=l.default.div.withConfig({componentId:"zh__sc-3bc5f426-12"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 48px;

  font-size: 16px;
  font-weight: 700;
  line-height: 48px;
  color: #131416;
  text-align: center;
`,k=l.default.div.withConfig({componentId:"zh__sc-3bc5f426-13"})`
  overflow-y: auto;
  flex: 1;
`,S=l.default.div.withConfig({componentId:"zh__sc-3bc5f426-14"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  min-height: 52px;
  border-bottom: 1px solid #e5e7eb;
`,$=l.default.div.withConfig({componentId:"zh__sc-3bc5f426-15"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 52px;
  padding: 8px 12px;

  font-size: 16px;
  font-weight: 500;
  line-height: 52px;
  color: #464c53;
  text-align: center;
`,W=l.default.button.withConfig({componentId:"zh__sc-3bc5f426-16"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  width: 175px;
  height: 32px;
  padding: 4px 8px;
  border: 1px solid ${({$color:e})=>e};
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #fff;
  text-align: center;

  background: ${({$color:e})=>e};
`,R=l.default.div.withConfig({componentId:"zh__sc-3bc5f426-17"})`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 120px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #6b7280;
`,T={},L={black:"waiting",blue:"waiting",lightBlue:"waiting",orange:"needUpdate",gray:"waiting"},N=(0,n.observer)(function(){let e=a.default.serviceWorker.info.byDocument,n=(0,o.useRef)(null),[l,s]=(0,o.useState)(null),d="DISABILITY_ACTIVITY_SUPPORT"===e.selectedServiceType;(0,o.useLayoutEffect)(()=>{null!==l&&d&&n.current?.scrollTo({left:0})},[l,d]);let c=new Map(e.phaseGroupsWithStatuses.flatMap(e=>e.templates).map((e,t)=>[e.id,t+1])),f=null===l?e.phaseGroupsWithStatuses:e.phaseGroupsWithStatuses.filter(e=>e.phaseGroup===l.phaseGroup);return(0,t.jsxs)(D,{children:[(0,t.jsx)(E,{children:"서류별 처리 현황"}),(0,t.jsx)(G,{ref:n,children:(0,t.jsx)(P,{$columnCount:d?5:4,children:f.map(n=>(0,t.jsxs)(F,{children:[(0,t.jsxs)(B,{children:[(0,t.jsx)(M,{children:`${n.phaseGroupLabel} ${n.templateCount}종`}),(T[n.phaseGroup]??null)!==null&&(0,t.jsx)(O,{children:T[n.phaseGroup]})]}),(0,t.jsx)(U,{children:"loading"===e.status?(0,t.jsx)(ee,{children:"제공인력 문서 현황을 불러오는 중입니다."}):(0,t.jsx)(A,{children:n.templates.map(e=>{let o=e.statusGroups.filter(e=>e.serviceWorkers.length>0);return 0===o.length?null:(0,t.jsxs)(K,{children:[(0,t.jsxs)(V,{children:[(0,t.jsx)(Y,{children:String(c.get(e.id)??0).padStart(2,"0")}),(0,t.jsx)(q,{children:e.name})]}),(0,t.jsx)(H,{children:o.map(o=>{let a,d;return(0,t.jsxs)(J,{children:[(0,t.jsxs)(Q,{$tone:(a=o.status,d=o.badgeColor,"LINKED_COMPLETED"===a?"linked":L[d]),children:["LINKED_COMPLETED"===o.status&&(0,t.jsx)(X,{children:(0,t.jsx)(r.default.WandShine,{size:14})}),o.label," · ",o.serviceWorkers.length,"건"]}),(0,t.jsxs)(Z,{$isSelected:null===l||l.templateId===e.id&&l.status===o.status,type:"button",onClick:()=>s({templateName:e.name,statusLabel:o.label,serviceWorkers:o.serviceWorkers,phaseGroup:n.phaseGroup,templateId:e.id,status:o.status}),children:["제공인력 리스트 보기 ",(0,t.jsx)(i.default,{sx:{fontSize:14}})]})]},o.status)})})]},e.id)})})})]},n.phaseGroup))})}),null!==l&&(0,t.jsx)(h,{templateName:l.templateName,statusLabel:l.statusLabel,serviceWorkers:l.serviceWorkers,onClose:()=>s(null),onOpen:e=>{let t=l.serviceWorkers.map(e=>({contractId:e.employmentContractId,documentId:e.documentId,serviceWorkerId:e.serviceWorkerId,templateIdWithoutDocument:e.templateId})),i=t.find(t=>t.contractId===e.employmentContractId);void 0!==i&&a.default.modal.documentView.openServiceWorkerDocumentsFromByDocument(t,i)}})]})}),D=l.default.div.withConfig({componentId:"zh__sc-e1648f62-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
`,E=l.default.div.withConfig({componentId:"zh__sc-e1648f62-1"})`
  display: flex;
  align-items: center;

  height: 36px;

  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0f0f14;
`,G=l.default.div.withConfig({componentId:"zh__sc-e1648f62-2"})`
  overflow-x: auto;
  align-self: stretch;
`,P=l.default.div.withConfig({componentId:"zh__sc-e1648f62-3"})`
  display: grid;
  grid-template-columns: repeat(${({$columnCount:e})=>e}, minmax(360px, 1fr));
  gap: 12px;

  min-width: ${({$columnCount:e})=>372*e-12}px;
  min-height: 760px;
`,F=l.default.section.withConfig({componentId:"zh__sc-e1648f62-4"})`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 16px 12px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #f9fafb;
`,B=l.default.header.withConfig({componentId:"zh__sc-e1648f62-5"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-height: 58px;
`,M=l.default.h3.withConfig({componentId:"zh__sc-e1648f62-6"})`
  margin: 0;

  font-size: 17px;
  font-weight: 700;
  line-height: 20px;
  color: #171a21;
`,O=l.default.p.withConfig({componentId:"zh__sc-e1648f62-7"})`
  margin: 0;

  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: #5e6673;
`,U=l.default.div.withConfig({componentId:"zh__sc-e1648f62-8"})`
  flex: 1;

  min-height: 640px;
  padding: 12px;
  border-radius: 8px;

  background: #fff;
`,A=l.default.ul.withConfig({componentId:"zh__sc-e1648f62-9"})`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin: 0;
  padding: 0;

  list-style: none;
`,K=l.default.li.withConfig({componentId:"zh__sc-e1648f62-10"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 134px;
  padding: 12px;
  border: 1px solid #dbe0e8;
  border-radius: 8px;

  background: #fff;
`,V=l.default.div.withConfig({componentId:"zh__sc-e1648f62-11"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  height: 28px;
`,Y=l.default.span.withConfig({componentId:"zh__sc-e1648f62-12"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;
  border-radius: 6px;

  font-size: 12px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #464c56;

  background: #eef1f5;
`,q=l.default.p.withConfig({componentId:"zh__sc-e1648f62-13"})`
  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #1f2129;
`,H=l.default.div.withConfig({componentId:"zh__sc-e1648f62-14"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
`,J=l.default.div.withConfig({componentId:"zh__sc-e1648f62-15"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  min-height: 36px;
  padding: 6px 4px;

  & + & {
    border-top: 1px solid #dbe0e8;
  }
`,Q=l.default.span.withConfig({componentId:"zh__sc-e1648f62-16"})`
  display: flex;
  gap: 2px;
  align-items: center;

  min-height: 24px;
  padding: 4px 6px;
  border-radius: 999px;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #fff;

  background: ${({$tone:e})=>"waiting"===e?"#2264E8":"#FF6900"};
`,X=l.default.span.withConfig({componentId:"zh__sc-e1648f62-17"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 14px;
  height: 14px;
`,Z=l.default.button.withConfig({componentId:"zh__sc-e1648f62-18"})`
  cursor: pointer;

  display: inline-flex;
  gap: 2px;
  align-items: center;

  height: 24px;
  padding: 0;
  border: none;

  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${({$isSelected:e})=>e?"#4F39F6":"#1F2129"};

  background: transparent;
`,ee=l.default.p.withConfig({componentId:"zh__sc-e1648f62-19"})`
  margin: 0;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #4b5563;
`;e.s(["default",0,N],57473)}]);