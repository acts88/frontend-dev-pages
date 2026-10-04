(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,21050,e=>{"use strict";var t=e.i(39635),l=e.i(38803);let i=l.default.section.withConfig({componentId:"zh__sc-cb28bd11-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,n=l.default.div.withConfig({componentId:"zh__sc-cb28bd11-1"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
`,o=l.default.div.withConfig({componentId:"zh__sc-cb28bd11-2"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,d=l.default.div.withConfig({componentId:"zh__sc-cb28bd11-3"})`
  display: flex;
  align-items: center;
`,a=l.default.p.withConfig({componentId:"zh__sc-cb28bd11-4"})`
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
  white-space: nowrap;
`,s=l.default.div.withConfig({componentId:"zh__sc-cb28bd11-5"})`
  display: flex;
  gap: 4px;
  align-items: center;

  margin-left: 16px;

  color: #464c53;
`,c=(0,l.default)(t.default).withConfig({componentId:"zh__sc-cb28bd11-6"})`
  width: 24px;
  height: 24px;
`,r=l.default.div.withConfig({componentId:"zh__sc-cb28bd11-7"})`
  font-size: 18px;
  line-height: 20px; /* 111.111% */
`,h=l.default.div.withConfig({componentId:"zh__sc-cb28bd11-8"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,f=l.css`
  gap: 4px;
  height: 36px;
  padding: 8px 16px;
`,p=l.default.div.withConfig({componentId:"zh__sc-cb28bd11-9"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,u=l.default.div.withConfig({componentId:"zh__sc-cb28bd11-10"})`
  padding-bottom: 8px;

  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,x=l.default.div.withConfig({componentId:"zh__sc-cb28bd11-11"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,b=l.default.div.withConfig({componentId:"zh__sc-cb28bd11-12"})`
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
`,g=l.default.div.withConfig({componentId:"zh__sc-cb28bd11-13"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,m=l.default.table.withConfig({componentId:"zh__sc-cb28bd11-14"})`
  border-collapse: collapse;
  width: 100%;
  font-size: 16px;
`,y=l.default.tr.withConfig({componentId:"zh__sc-cb28bd11-15"})`
  height: 40px;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
`,w=l.default.th.withConfig({componentId:"zh__sc-cb28bd11-16"})`
  padding: 0 16px;

  font-weight: 700;
  color: #131416;
  text-align: center;
  vertical-align: middle;
`,C=l.default.tr.withConfig({componentId:"zh__sc-cb28bd11-17"})`
  height: 56px;
  border-bottom: 1px solid #e5e7eb;
`,_=l.default.td.withConfig({componentId:"zh__sc-cb28bd11-18"})`
  padding: 0 16px;
  color: #464c53;
  text-align: center;
  vertical-align: middle;
`;e.s(["Data",0,b,"DataForm",0,p,"DataFormTitle",0,u,"DataLabel",0,g,"DataRow",0,x,"PageRoot",0,i,"Panel",0,n,"SectionHeader",0,o,"SectionHeaderLeft",0,d,"SectionHeaderRight",0,h,"SectionTitle",0,a,"SectionTitleInfo",0,s,"SectionTitleInfoIcon",0,c,"SectionTitleInfoText",0,r,"Table",0,m,"TableBodyCell",0,_,"TableBodyRow",0,C,"TableHeadCell",0,w,"TableHeadRow",0,y,"btnStyle",0,f,"inputStyle",0,{display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16}])},6192,e=>{"use strict";var t=e.i(9735);e.i(3159);var l=e.i(46907),i=e.i(7744),n=e.i(38803),o=e.i(64954),d=e.i(43174),a=e.i(21050);let s=e=>({code:e.code,key:e.code,name:e.name,keywords:e.keywords.join(", "),usageCount:e.usageCount}),c=(0,l.observer)(function(){let e=d.default.data.organization.serviceRegionList,l=e.data,[n,c]=(0,i.useState)(null),[x,b]=(0,i.useState)(!1),[g,m]=(0,i.useState)(1),y=(0,i.useMemo)(()=>n??(l??[]).map(s),[n,l]),w=null!==n,C=(e,t)=>{c(y.map(l=>l.key===e?{...l,...t}:l))},_=(e,t)=>{let l=[...y],i=e+t,n=l[e],o=l[i];void 0!==n&&void 0!==o&&(l[e]=o,l[i]=n,c(l))},j=async()=>{let t=d.default.data.auth.me.data?.organizationId??null;if(null===t)return;if(y.some(e=>""===e.name.trim()))return void d.default.ui.layout.toast.error("지역 이름을 입력해 주세요.");b(!0);let[l]=await e.replace({id:t,regions:y.map(e=>({...void 0!==e.code?{code:e.code}:{},name:e.name.trim(),keywords:e.keywords.split(/[,，]/).map(e=>e.trim()).filter(e=>e.length>0)}))});(b(!1),null!==l)?d.default.ui.layout.toast.error(l.message||"서비스 지역을 저장하지 못했습니다."):(c(null),d.default.ui.layout.toast.success("서비스 지역을 저장했습니다."))};return(0,t.jsx)(a.PageRoot,{children:(0,t.jsxs)(a.Panel,{children:[(0,t.jsxs)(a.SectionHeader,{children:[(0,t.jsxs)(a.SectionHeaderLeft,{children:[(0,t.jsx)(a.SectionTitle,{children:"서비스 지역"}),(0,t.jsx)(a.SectionTitleInfo,{children:(0,t.jsx)(a.SectionTitleInfoText,{children:"이용자 희망지역·제공인력 근무지역에서 고를 지역이에요. 주소 낱말을 넣으면 이용자 주소로 지역을 자동으로 채워요."})})]}),(0,t.jsx)(a.SectionHeaderRight,{children:w?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h,{type:"button",disabled:x,onClick:()=>c(null),children:"취소하기"}),(0,t.jsx)(f,{type:"button",disabled:x,onClick:()=>void j(),children:x?"저장하는 중…":"저장하기"})]}):null})]}),null===l?(0,t.jsx)(r,{children:"error"===e.status?"서비스 지역을 불러오지 못했습니다.":"서비스 지역을 불러오는 중…"}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.Table,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)(a.TableHeadRow,{children:[(0,t.jsx)(a.TableHeadCell,{style:{width:96},children:"순서"}),(0,t.jsx)(a.TableHeadCell,{children:"지역 이름"}),(0,t.jsx)(a.TableHeadCell,{children:"주소 낱말 (쉼표로 구분)"}),(0,t.jsx)(a.TableHeadCell,{style:{width:120},children:"쓰는 사람"}),(0,t.jsx)(a.TableHeadCell,{style:{width:120}})]})}),(0,t.jsxs)("tbody",{children:[0===y.length?(0,t.jsx)(a.TableBodyRow,{children:(0,t.jsx)(a.TableBodyCell,{colSpan:5,children:"아직 지역이 없어요. [지역 추가하기]로 기관이 서비스하는 지역을 넣어 주세요."})}):null,y.map((e,l)=>(0,t.jsxs)(a.TableBodyRow,{children:[(0,t.jsx)(a.TableBodyCell,{children:(0,t.jsxs)(p,{children:[(0,t.jsx)(u,{type:"button","aria-label":"위로",disabled:0===l,onClick:()=>_(l,-1),children:"▲"}),(0,t.jsx)(u,{type:"button","aria-label":"아래로",disabled:l===y.length-1,onClick:()=>_(l,1),children:"▼"})]})}),(0,t.jsx)(a.TableBodyCell,{children:(0,t.jsx)(o.default.Input.Text,{style:a.inputStyle,placeholder:"예: 하당·신흥",value:e.name,maxLength:50,onChange:t=>C(e.key,{name:t.target.value})})}),(0,t.jsx)(a.TableBodyCell,{children:(0,t.jsx)(o.default.Input.Text,{style:a.inputStyle,placeholder:"예: 하당, 신흥 (비우면 지역 이름으로 찾아요)",value:e.keywords,onChange:t=>C(e.key,{keywords:t.target.value})})}),(0,t.jsx)(a.TableBodyCell,{children:e.usageCount>0?`${e.usageCount}명`:"-"}),(0,t.jsx)(a.TableBodyCell,{children:(0,t.jsx)(h,{type:"button",disabled:e.usageCount>0,title:e.usageCount>0?"쓰고 있는 지역이라 뺄 수 없어요. 이용자·제공인력의 지역을 먼저 바꿔 주세요.":void 0,onClick:()=>{var t;return t=e.key,void c(y.filter(e=>e.key!==t))},children:"빼기"})})]},e.key))]})]}),(0,t.jsx)(h,{type:"button",onClick:()=>{c([...y,{key:`new-${g}`,name:"",keywords:"",usageCount:0}]),m(g+1)},children:"+ 지역 추가하기"})]})]})})}),r=n.default.p.withConfig({componentId:"zh__sc-1965bbd-0"})`
  font-size: 15px;
  color: #6b7280;
`,h=(0,n.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-1965bbd-1"})`
  ${a.btnStyle}
`,f=(0,n.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-1965bbd-2"})`
  ${a.btnStyle}
`,p=n.default.div.withConfig({componentId:"zh__sc-1965bbd-3"})`
  display: flex;
  gap: 4px;
  justify-content: center;
`,u=n.default.button.withConfig({componentId:"zh__sc-1965bbd-4"})`
  cursor: pointer;

  width: 28px;
  height: 28px;
  border: 1px solid #d0d5dd;
  border-radius: 6px;

  font-size: 11px;
  color: #475467;

  background: #fff;

  &:disabled {
    cursor: default;
    opacity: 0.4;
  }
`;e.s(["default",0,c])}]);