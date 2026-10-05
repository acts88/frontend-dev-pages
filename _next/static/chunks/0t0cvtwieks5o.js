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
`,d=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-3"})`
  display: flex;
  align-items: center;
`,o=i.default.p.withConfig({componentId:"zh__sc-cb28bd11-4"})`
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
`,h=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-8"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,f=i.css`
  gap: 4px;
  height: 36px;
  padding: 8px 16px;
`,x=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-9"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,p=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-10"})`
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
`,j=i.default.tr.withConfig({componentId:"zh__sc-cb28bd11-15"})`
  height: 40px;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
`,C=i.default.th.withConfig({componentId:"zh__sc-cb28bd11-16"})`
  padding: 0 16px;

  font-weight: 700;
  color: #131416;
  text-align: center;
  vertical-align: middle;
`,_=i.default.tr.withConfig({componentId:"zh__sc-cb28bd11-17"})`
  height: 56px;
  border-bottom: 1px solid #e5e7eb;
`,w=i.default.td.withConfig({componentId:"zh__sc-cb28bd11-18"})`
  padding: 0 16px;
  color: #464c53;
  text-align: center;
  vertical-align: middle;
`;e.s(["Data",0,u,"DataForm",0,x,"DataFormTitle",0,p,"DataLabel",0,m,"DataRow",0,g,"PageRoot",0,n,"Panel",0,l,"SectionHeader",0,a,"SectionHeaderLeft",0,d,"SectionHeaderRight",0,h,"SectionTitle",0,o,"SectionTitleInfo",0,s,"SectionTitleInfoIcon",0,c,"SectionTitleInfoText",0,r,"Table",0,b,"TableBodyCell",0,w,"TableBodyRow",0,_,"TableHeadCell",0,C,"TableHeadRow",0,j,"btnStyle",0,f,"inputStyle",0,{display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16}])},22109,e=>{"use strict";var t=e.i(9735),i=e.i(24655),n=e.i(84673),l=e.i(84527);e.i(3159);var a=e.i(46907),d=e.i(33261),o=e.i(7744),s=e.i(38803),c=e.i(21050),r=e.i(98273),h=e.i(64954),f=e.i(43174);function x({isOpen:e,isSaving:i,onCancel:n,onConfirm:l}){return!0!==e?null:(0,t.jsx)(w,{children:(0,t.jsxs)(y,{children:[(0,t.jsxs)(I,{children:[(0,t.jsx)(z,{children:"기관 정보를 저장하시겠습니까?"}),(0,t.jsx)(v,{children:"저장을 클릭하면 입력한 기관 정보가 모든 서류에 반영됩니다."})]}),(0,t.jsxs)(D,{children:[(0,t.jsx)(S,{type:"button",disabled:!0===i,onClick:n,children:"취소하기"}),(0,t.jsx)(T,{type:"button",disabled:!0===i,onClick:l,children:"저장하기"})]})]})})}function p({isOpen:e,target:i,isSaving:n,onCancel:l,onConfirm:a}){if(!0!==e)return null;let d="logo"===i?"로고":"도장";return(0,t.jsx)(w,{children:(0,t.jsxs)(y,{children:[(0,t.jsxs)(I,{children:[(0,t.jsxs)(z,{children:[d," 이미지를 삭제할까요?"]}),(0,t.jsxs)(v,{children:["저장된 ",d," 이미지가 삭제됩니다.",(0,t.jsx)("br",{}),"삭제 시, 서류에 이미지가 반영되지 않으며 새로운 이미지 업로드가",(0,t.jsx)("br",{}),"필요합니다."]})]}),(0,t.jsxs)(D,{children:[(0,t.jsx)(S,{type:"button",onClick:l,disabled:!0===n,children:"취소하기"}),(0,t.jsx)(T,{type:"button",onClick:a,disabled:!0===n,children:"삭제하기"})]})]})})}let g=s.default.div.withConfig({componentId:"zh__sc-90262fa0-0"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  margin-left: 8px;
  padding: 8px;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #fff;

  background: #4f39f6;
`,u=s.css`
  height: 40px;
`,m=(0,s.default)(h.default.Button.Outlined).withConfig({componentId:"zh__sc-90262fa0-1"})`
  ${c.btnStyle}
  ${u}
`,b=(0,s.default)(h.default.Button.Outlined).withConfig({componentId:"zh__sc-90262fa0-2"})`
  ${c.btnStyle}
  ${u}
`,j=(0,s.default)(h.default.Button.Outlined).withConfig({componentId:"zh__sc-90262fa0-3"})`
  ${c.btnStyle}
  ${u}
`,C=s.default.div.withConfig({componentId:"zh__sc-90262fa0-4"})`
  align-self: stretch;
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,_=(0,s.default)(c.Data).withConfig({componentId:"zh__sc-90262fa0-5"})`
  pointer-events: none;
  visibility: hidden;
`,w=s.default.div.withConfig({componentId:"zh__sc-90262fa0-6"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,y=s.default.div.withConfig({componentId:"zh__sc-90262fa0-7"})`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  width: 501px;
  max-width: calc(100vw - 32px);
  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 2px rgb(0 0 0 / 10%);
`,I=s.default.div.withConfig({componentId:"zh__sc-90262fa0-8"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,z=s.default.h3.withConfig({componentId:"zh__sc-90262fa0-9"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,v=s.default.p.withConfig({componentId:"zh__sc-90262fa0-10"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,D=s.default.div.withConfig({componentId:"zh__sc-90262fa0-11"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`,S=(0,s.default)(h.default.Button.Outlined).withConfig({componentId:"zh__sc-90262fa0-12"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
`,T=(0,s.default)(h.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-90262fa0-13"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`,k=(0,s.default)(c.TableBodyRow).withConfig({componentId:"zh__sc-90262fa0-14"})`
  height: 238px;

  & > td {
    padding: 16px 8px;
    vertical-align: top;
  }
`,F=s.default.div.withConfig({componentId:"zh__sc-90262fa0-15"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
`,O=s.default.div.withConfig({componentId:"zh__sc-90262fa0-16"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 16px;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1/1;
  width: 160px;
  height: 160px;
  border: 1px solid #d1d5db;
  border-radius: 6px;

  background-color: #fff;

  ${({$hasImage:e})=>e?`
        background-image:
          linear-gradient(45deg, #ececec 25%, transparent 25%),
          linear-gradient(-45deg, #ececec 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #ececec 75%),
          linear-gradient(-45deg, transparent 75%, #ececec 75%);
        background-position:
          0 0,
          0 6px,
          6px -6px,
          -6px 0;
        background-size: 12px 12px;
      `:""}
`,P=s.default.img.withConfig({componentId:"zh__sc-90262fa0-17"})`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,B=(0,s.default)(h.default.Button.Outlined).withConfig({componentId:"zh__sc-90262fa0-18"})`
  padding: 8px 16px;
  line-height: 1;
`,R=(0,s.default)(h.default.Button.Outlined).withConfig({componentId:"zh__sc-90262fa0-19"})`
  padding: 8px 16px;
  line-height: 1;
`,L=s.default.div.withConfig({componentId:"zh__sc-90262fa0-20"})`
  display: flex;
  gap: 4px;
  align-items: center;
`,H=(0,a.observer)(function(){let e=f.default.organizationSetting.basic,a=f.default.modal.organization.imageAdjustUpload,{form:s,isEditing:u,isSaving:w,canStartEdit:y,validationErrorMap:I}=e,z=e.info?.code??null,v=f.default.data.auth.me.data?.role==="SUPER_ADMIN",D=(0,d.useRouter)(),[S,T]=(0,o.useState)(!1),[H,$]=(0,o.useState)(null),N=async()=>{!0===await e.save()&&T(!1)},E=(e,t)=>{a.show(e,t)},A=async()=>{"logo"===H&&!0!==await e.deleteLogoImage()||("seal"!==H||!0===await e.deleteSealImage())&&$(null)};return(0,t.jsx)(c.PageRoot,{children:(0,t.jsxs)(c.Panel,{children:[(0,t.jsxs)(c.SectionHeader,{children:[(0,t.jsxs)(c.SectionHeaderLeft,{children:[(0,t.jsx)(c.SectionTitle,{children:"기관 기본 정보"}),null!==z&&(0,t.jsx)(c.SectionTitleInfo,{children:(0,t.jsxs)(c.SectionTitleInfoText,{title:"로그인할 때 아이디와 같이 입력해요. 바꿀 수 없어요.",children:["기관코드 ",(0,t.jsx)("strong",{children:z})," (로그인할 때 씀)"]})}),!0===u&&(0,t.jsx)(g,{children:"수정 진행중"})]}),(0,t.jsxs)(c.SectionHeaderRight,{children:[v&&!0!==u?(0,t.jsx)(m,{onClick:()=>D.push("/organization-setting/new-organization"),children:"새 기관 개설"}):null,!0===u?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(b,{onClick:e.cancelEdit,disabled:!0===w,children:[(0,t.jsx)(n.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(j,{onClick:()=>{if(!0===e.validateForSave()){if(!0!==e.hasChanges)return void e.cancelEdit();T(!0)}},disabled:!0===w,children:[(0,t.jsx)(i.default,{sx:{fontSize:20}}),!0===w?"저장 중...":"수정 저장"]})]}):(0,t.jsxs)(m,{onClick:e.startEdit,disabled:!0!==y,children:[(0,t.jsx)(l.default,{sx:{fontSize:20}}),"수정하기"]})]})]}),(0,t.jsxs)(c.DataForm,{children:[(0,t.jsx)(c.DataFormTitle,{children:"기관 정보"}),(0,t.jsxs)(c.DataRow,{children:[(0,t.jsxs)(c.Data,{children:[(0,t.jsx)(c.DataLabel,{children:"기관 이름"}),(0,t.jsx)(h.default.Input.Text,{style:c.inputStyle,placeholder:"기관 이름을 입력해주세요.",value:s.name,onChange:t=>e.setField("name",t.target.value),readOnly:!0!==u}),!0===u&&void 0!==I.name&&(0,t.jsx)(C,{children:I.name})]}),(0,t.jsxs)(c.Data,{children:[(0,t.jsx)(c.DataLabel,{children:"기관 연락처"}),(0,t.jsx)(h.default.Input.Contact,{style:c.inputStyle,placeholder:"기관 연락처를 입력해주세요.",value:s.contact,onChange:t=>e.setField("contact",t),readOnly:!0!==u}),!0===u&&void 0!==I.contact&&(0,t.jsx)(C,{children:I.contact})]}),(0,t.jsxs)(c.Data,{children:[(0,t.jsx)(c.DataLabel,{children:"기관 팩스번호"}),(0,t.jsx)(h.default.Input.Contact,{style:c.inputStyle,placeholder:"기관 팩스번호를 입력해주세요.",value:s.faxNumber,onChange:t=>e.setField("faxNumber",t),readOnly:!0!==u}),!0===u&&void 0!==I.faxNumber&&(0,t.jsx)(C,{children:I.faxNumber})]}),(0,t.jsxs)(c.Data,{children:[(0,t.jsx)(c.DataLabel,{children:"기관 이메일"}),(0,t.jsx)(h.default.Input.Email,{style:c.inputStyle,placeholder:"기관 이메일을 입력해주세요.",value:s.email,onChange:t=>e.setField("email",t.target.value),readOnly:!0!==u}),!0===u&&void 0!==I.email&&(0,t.jsx)(C,{children:I.email})]})]}),(0,t.jsxs)(c.DataRow,{children:[(0,t.jsxs)(c.Data,{children:[(0,t.jsx)(c.DataLabel,{children:"주소"}),(0,t.jsx)(h.default.Input.Text,{style:c.inputStyle,placeholder:"주소를 입력해주세요.",value:s.address,onChange:t=>e.setField("address",t.target.value),readOnly:!0!==u}),!0===u&&void 0!==I.address&&(0,t.jsx)(C,{children:I.address})]}),(0,t.jsxs)(c.Data,{children:[(0,t.jsx)(c.DataLabel,{children:"상세주소"}),(0,t.jsx)(h.default.Input.Text,{style:c.inputStyle,placeholder:"상세주소를 입력해주세요.",value:s.addressDetail,onChange:t=>e.setField("addressDetail",t.target.value),readOnly:!0!==u}),!0===u&&void 0!==I.addressDetail&&(0,t.jsx)(C,{children:I.addressDetail})]}),(0,t.jsxs)(c.Data,{children:[(0,t.jsx)(c.DataLabel,{children:"우편번호"}),(0,t.jsx)(h.default.Input.Text,{style:c.inputStyle,placeholder:"우편번호를 입력해주세요.",value:s.postCode,onChange:t=>e.setField("postCode",t.target.value),readOnly:!0!==u}),!0===u&&void 0!==I.postCode&&(0,t.jsx)(C,{children:I.postCode})]})]})]}),(0,t.jsxs)(c.DataForm,{children:[(0,t.jsx)(c.DataFormTitle,{children:"사업자 정보"}),(0,t.jsxs)(c.DataRow,{children:[(0,t.jsxs)(c.Data,{children:[(0,t.jsx)(c.DataLabel,{children:"사업자 등록번호"}),(0,t.jsx)(h.default.Input.Text,{style:c.inputStyle,placeholder:"사업자 등록번호를 입력해주세요.",value:s.licenseNumber,onChange:t=>e.setField("licenseNumber",t.target.value),readOnly:!0!==u}),!0===u&&void 0!==I.licenseNumber&&(0,t.jsx)(C,{children:I.licenseNumber})]}),(0,t.jsx)(_,{"aria-hidden":!0}),(0,t.jsx)(_,{"aria-hidden":!0})]})]}),(0,t.jsxs)(c.DataForm,{children:[(0,t.jsx)(c.DataFormTitle,{children:"기관 이미지"}),(0,t.jsxs)(c.Table,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)(c.TableHeadRow,{children:[(0,t.jsx)(c.TableHeadCell,{children:"기관 로고"}),(0,t.jsx)(c.TableHeadCell,{children:"기관 도장"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)(k,{children:[(0,t.jsx)(c.TableBodyCell,{children:(0,t.jsxs)(F,{children:[(0,t.jsx)(O,{$hasImage:""!==s.logoImagePath,children:""===s.logoImagePath?(0,t.jsx)(r.default.Imagesmode,{size:34,color:"#D1D5DB"}):(0,t.jsx)(P,{src:s.logoImagePath,alt:"기관 로고"})}),!0===u&&(""===s.logoImagePath?(0,t.jsx)(B,{onClick:()=>{E("logo")},children:"업로드하기"}):(0,t.jsxs)(L,{children:[(0,t.jsx)(B,{onClick:()=>{E("logo",s.logoImagePath)},disabled:!0===w,children:"수정"}),(0,t.jsx)(R,{onClick:()=>{$("logo")},disabled:!0===w,children:"삭제"})]}))]})}),(0,t.jsx)(c.TableBodyCell,{children:(0,t.jsxs)(F,{children:[(0,t.jsx)(O,{$hasImage:""!==s.sealImagePath,children:""===s.sealImagePath?(0,t.jsx)(r.default.Imagesmode,{size:34,color:"#D1D5DB"}):(0,t.jsx)(P,{src:s.sealImagePath,alt:"기관 도장"})}),!0===u&&(""===s.sealImagePath?(0,t.jsx)(B,{onClick:()=>{E("seal")},children:"업로드하기"}):(0,t.jsxs)(L,{children:[(0,t.jsx)(B,{onClick:()=>{E("seal",s.sealImagePath)},disabled:!0===w,children:"수정"}),(0,t.jsx)(R,{onClick:()=>{$("seal")},disabled:!0===w,children:"삭제"})]}))]})})]})})]})]}),(0,t.jsx)(x,{isOpen:S,isSaving:w,onCancel:()=>{T(!1)},onConfirm:()=>{N()}}),(0,t.jsx)(p,{isOpen:null!==H,target:H,isSaving:w,onCancel:()=>{$(null)},onConfirm:()=>{A()}})]})})});e.s(["default",0,H])}]);