(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,21050,e=>{"use strict";var t=e.i(39635),i=e.i(38803);let n=i.default.section.withConfig({componentId:"zh__sc-cb28bd11-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,l=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-1"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
`,a=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-2"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,o=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-3"})`
  display: flex;
  align-items: center;
`,d=i.default.p.withConfig({componentId:"zh__sc-cb28bd11-4"})`
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
  white-space: nowrap;
`,s=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-5"})`
  display: flex;
  gap: 4px;
  align-items: center;

  margin-left: 16px;

  color: #464c53;
`,c=(0,i.default)(t.default).withConfig({componentId:"zh__sc-cb28bd11-6"})`
  width: 24px;
  height: 24px;
`,r=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-7"})`
  font-size: 18px;
  line-height: 20px; /* 111.111% */
`,f=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-8"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,p=i.css`
  gap: 4px;
  height: 36px;
  padding: 8px 16px;
`,h=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-9"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,x=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-10"})`
  padding-bottom: 8px;

  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,g=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-11"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,u=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-12"})`
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
`,m=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-13"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,b=i.default.table.withConfig({componentId:"zh__sc-cb28bd11-14"})`
  border-collapse: collapse;
  width: 100%;
  font-size: 16px;
`,y=i.default.tr.withConfig({componentId:"zh__sc-cb28bd11-15"})`
  height: 40px;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
`,_=i.default.th.withConfig({componentId:"zh__sc-cb28bd11-16"})`
  padding: 0 16px;

  font-weight: 700;
  color: #131416;
  text-align: center;
  vertical-align: middle;
`,w=i.default.tr.withConfig({componentId:"zh__sc-cb28bd11-17"})`
  height: 56px;
  border-bottom: 1px solid #e5e7eb;
`,j=i.default.td.withConfig({componentId:"zh__sc-cb28bd11-18"})`
  padding: 0 16px;
  color: #464c53;
  text-align: center;
  vertical-align: middle;
`;e.s(["Data",0,u,"DataForm",0,h,"DataFormTitle",0,x,"DataLabel",0,m,"DataRow",0,g,"PageRoot",0,n,"Panel",0,l,"SectionHeader",0,a,"SectionHeaderLeft",0,o,"SectionHeaderRight",0,f,"SectionTitle",0,d,"SectionTitleInfo",0,s,"SectionTitleInfoIcon",0,c,"SectionTitleInfoText",0,r,"Table",0,b,"TableBodyCell",0,j,"TableBodyRow",0,w,"TableHeadCell",0,_,"TableHeadRow",0,y,"btnStyle",0,p,"inputStyle",0,{display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16}])},69294,e=>{"use strict";var t=e.i(9735);e.i(3159);var i=e.i(46907),n=e.i(33261),l=e.i(7744),a=e.i(38803),o=e.i(23416),d=e.i(21050),s=e.i(64954),c=e.i(7242),r=e.i(43174);let f={name:"",serviceTypes:[],contact:"",email:"",postCode:"",address:"",addressDetail:"",licenseNumber:"",institutionUniqueNumber:""},p=Object.keys(c.default).filter(e=>e in c.default),h=[{key:"contact",label:"기관 연락처",maxLength:100},{key:"email",label:"이메일",maxLength:200},{key:"postCode",label:"우편번호",maxLength:20},{key:"address",label:"주소",maxLength:100},{key:"addressDetail",label:"상세 주소",maxLength:300},{key:"licenseNumber",label:"사업자등록번호",maxLength:50},{key:"institutionUniqueNumber",label:"기관 고유번호",maxLength:50}],x=(0,i.observer)(function(){let e=r.default.data.auth.me.data,i=(0,n.useRouter)(),[a,x]=(0,l.useState)(f),[j,z]=(0,l.useState)(null),[C,v]=(0,l.useState)(!1),[I,T]=(0,l.useState)(!1),[S,D]=(0,l.useState)(null);if(e?.role!=="SUPER_ADMIN")return(0,t.jsx)(d.PageRoot,{children:(0,t.jsx)(d.Panel,{children:(0,t.jsx)(g,{children:"새 기관 개설은 자이언허브(최고 관리자)만 할 수 있어요."})})});let k=(e,t)=>{x(i=>({...i,[e]:t})),z(null),v(!1)},L=async()=>{T(!0);let[e,t]=await o.default.data.organization.create(function(e){let t={name:e.name.trim(),serviceTypes:e.serviceTypes};for(let{key:i}of h){let n=e[i].trim();""!==n&&(t[i]=n)}return t}(a));(T(!1),v(!1),null!==e)?z(e.message||"기관을 만들지 못했어요. 잠시 후 다시 시도해 주세요."):(D({name:t.name,code:t.code??null}),x(f),r.default.ui.layout.toast.success("기관을 만들었어요."))};return(0,t.jsx)(d.PageRoot,{children:(0,t.jsxs)(d.Panel,{children:[(0,t.jsxs)(d.SectionHeader,{children:[(0,t.jsx)(d.SectionTitle,{children:"새 기관 개설"}),(0,t.jsx)(s.default.Button.Outlined,{type:"button",onClick:()=>i.push("/organization-setting/basic"),children:"기관 정보로"})]}),null!==S?(0,t.jsxs)(u,{children:[(0,t.jsxs)("strong",{children:["'",S.name,"' 기관을 만들었어요. 기관코드: ",S.code??"-"]}),(0,t.jsx)("span",{children:"서비스별 운영·급여·정산 기본 설정이 같이 만들어졌어요. 기관 관리자(센터장) 로그인 계정은 운영 도구로 따로 발급해요. 기관코드를 담당 개발자에게 알려 주세요."})]}):null,(0,t.jsxs)(d.DataForm,{children:[(0,t.jsx)(d.DataFormTitle,{children:"기관 정보"}),(0,t.jsx)(d.DataRow,{children:(0,t.jsxs)(d.Data,{children:[(0,t.jsx)(d.DataLabel,{children:"기관 이름(필수)"}),(0,t.jsx)(s.default.Input.Text,{style:d.inputStyle,placeholder:"기관 이름을 입력해주세요.",maxLength:30,value:a.name,onChange:e=>k("name",e.target.value)})]})}),(0,t.jsx)(d.DataRow,{children:(0,t.jsxs)(d.Data,{children:[(0,t.jsx)(d.DataLabel,{children:"운영 서비스(필수)"}),(0,t.jsx)(m,{children:p.map(e=>(0,t.jsxs)(b,{children:[(0,t.jsx)("input",{type:"checkbox",checked:a.serviceTypes.includes(e),onChange:()=>{k("serviceTypes",a.serviceTypes.includes(e)?a.serviceTypes.filter(t=>t!==e):[...a.serviceTypes,e])}}),c.default[e].label]},e))})]})}),h.map(({key:e,label:i,maxLength:n})=>(0,t.jsx)(d.DataRow,{children:(0,t.jsxs)(d.Data,{children:[(0,t.jsx)(d.DataLabel,{children:i}),(0,t.jsx)(s.default.Input.Text,{style:d.inputStyle,maxLength:n,value:a[e],onChange:t=>k(e,t.target.value)})]})},e))]}),null!==j?(0,t.jsx)(y,{children:j}):null,(0,t.jsx)(_,{children:C?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(w,{children:["'",a.name.trim(),"' 기관을 만들까요? 만든 기관은 화면에서 지울 수 없어요."]}),(0,t.jsx)(s.default.Button.Outlined,{type:"button",disabled:I,onClick:()=>v(!1),children:"취소"}),(0,t.jsx)(s.default.Button.Filled.Primary,{type:"button",disabled:I,onClick:()=>void L(),children:I?"만드는 중…":"만들기"})]}):(0,t.jsx)(s.default.Button.Filled.Primary,{type:"button",onClick:()=>{let e=""===a.name.trim()?"기관 이름을 입력해 주세요.":a.name.trim().length>30?"기관 이름은 30자까지예요.":0===a.serviceTypes.length?"운영할 서비스를 하나 이상 골라 주세요.":""===a.email.trim()||/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(a.email.trim())?null:"이메일 형식이 아니에요.";null!==e?z(e):v(!0)},children:"기관 만들기"})})]})})}),g=a.default.p.withConfig({componentId:"zh__sc-565d9f3a-0"})`
  font-size: 14px;
  color: #6e7079;
`,u=a.default.div.withConfig({componentId:"zh__sc-565d9f3a-1"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-self: stretch;

  padding: 12px 16px;
  border-radius: 8px;

  font-size: 14px;
  color: #054f31;

  background: #ecfdf3;
`,m=a.default.div.withConfig({componentId:"zh__sc-565d9f3a-2"})`
  display: flex;
  gap: 16px;
  align-items: center;
`,b=a.default.label.withConfig({componentId:"zh__sc-565d9f3a-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  font-size: 14px;
  color: #344054;
`,y=a.default.p.withConfig({componentId:"zh__sc-565d9f3a-4"})`
  font-size: 13px;
  color: #ff4d4f;
`,_=a.default.div.withConfig({componentId:"zh__sc-565d9f3a-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,w=a.default.span.withConfig({componentId:"zh__sc-565d9f3a-6"})`
  font-size: 14px;
  color: #344054;
`;e.s(["default",0,x])}]);