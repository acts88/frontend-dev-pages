(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,43312,e=>{"use strict";var t=e.i(9735),n=e.i(7744),i=e.i(38803),l=e.i(4585);let a=i.default.div.withConfig({componentId:"zh__sc-4cdda4ea-0"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,d=i.default.span.withConfig({componentId:"zh__sc-4cdda4ea-1"})`
  font-size: 12px;
  color: #d0d5dd;
`,o=i.default.a.withConfig({componentId:"zh__sc-4cdda4ea-2"})`
  font-size: 13px;
  font-weight: ${({$emphasis:e})=>e?700:400};
  color: #6e7079;

  &:hover {
    text-decoration: underline;
  }
`;e.s(["default",0,function(){let e=(0,l.publishedLegalDocuments)();return 0===e.length?null:(0,t.jsx)(a,{children:e.map((e,i)=>(0,t.jsxs)(n.Fragment,{children:[i>0&&(0,t.jsx)(d,{"aria-hidden":"true",children:"|"}),(0,t.jsx)(o,{href:e.path,target:"_blank",rel:"noreferrer",$emphasis:e.path===l.PRIVACY_POLICY.path,children:e.title})]},e.path))})}])},48271,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(33261),l=e.i(7744),a=e.i(33310),d=e.i(4585),o=e.i(43174),r=e.i(7665),s=e.i(4153);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var f=(0,l.forwardRef)(function(e,t){var n=e.color,i=e.size,a=void 0===i?24:i,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return l.default.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),l.default.createElement("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),l.default.createElement("circle",{cx:"12",cy:"12",r:"3"}))});function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}f.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},f.displayName="Eye";var u=(0,l.forwardRef)(function(e,t){var n=e.color,i=e.size,a=void 0===i?24:i,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return l.default.createElement("svg",h({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),l.default.createElement("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),l.default.createElement("line",{x1:"1",y1:"1",x2:"23",y2:"23"}))});u.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},u.displayName="EyeOff";var p=e.i(38803),x=e.i(43312),g=e.i(25521);let m=(0,n.observer)(function(){let{organizationCode:e,setOrganizationCode:n,rememberOrganizationCode:i,setRememberOrganizationCode:a,rememberLoginId:d,setRememberLoginId:s,loginId:c,setLoginId:h,loginIdErrMsg:p,password:m,setPassword:F,isShowPwd:B,setIsShowPwd:U,pwdErrMsg:Y,login:W}=o.default.auth.login,[V,H]=(0,l.useState)(!1),[G,K]=(0,l.useState)(null),X=(0,l.useRef)(null),q=(0,l.useRef)(!1),Q=(0,l.useRef)(null),J=(0,l.useRef)(null),Z=e=>{let t=e.getModifierState("CapsLock");t!==q.current&&(q.current=t,t&&o.default.ui.layout.toast.info("Caps Lock이 켜져 있습니다.",void 0,X.current))},ee=e=>{Z(e),"Enter"===e.key&&W()};return(0,l.useEffect)(()=>{Q.current?.focus()},[]),(0,t.jsx)(b,{children:(0,t.jsxs)(j,{ref:X,children:[(0,t.jsxs)(_,{children:[(0,t.jsx)(r.default,{src:`${g.default.env.PUBLIC_PATH}/icon/logo-symbol.svg`,width:1,height:1,style:{width:85,height:"auto"},loading:"eager",alt:"Logo"}),(0,t.jsxs)(w,{children:[(0,t.jsx)(y,{children:"자이언 허브"}),(0,t.jsx)(v,{children:"기관용"})]})]}),(0,t.jsxs)(C,{children:[(0,t.jsxs)(z,{$hasValue:e.length>0,children:[(0,t.jsx)(I,{children:"기관코드"}),(0,t.jsx)(T,{value:e,onChange:e=>n(e.target.value),onKeyDown:ee,placeholder:"예: zh12"})]}),(0,t.jsxs)(z,{$error:null!==p,$hasValue:c.length>0,children:[(0,t.jsx)(I,{$error:null!==p,children:"아이디"}),(0,t.jsx)(T,{ref:Q,value:c,onChange:e=>h(e.target.value),onKeyDown:ee,placeholder:"발급받은 아이디(숫자)"})]}),null!==p?(0,t.jsx)(S,{children:p}):null,(0,t.jsxs)(z,{$error:null!==Y,$hasValue:m.length>0,children:[(0,t.jsx)(I,{$error:null!==Y,children:"비밀번호"}),(0,t.jsx)(T,{ref:J,type:B?"text":"password",value:m,onChange:e=>F(e.target.value),onFocus:()=>H(!0),onBlur:()=>{H(!1),q.current=!1},onKeyDown:ee,onKeyUp:e=>{Z(e)},placeholder:"영문,숫자,특수문자"}),(0,t.jsx)(E,{type:"button",$active:V,$error:null!==Y,onClick:()=>U(!B),onFocus:()=>H(!0),onBlur:()=>H(!1),children:B?(0,t.jsx)(f,{size:24}):(0,t.jsx)(u,{size:24})})]}),null!==Y?(0,t.jsx)(S,{children:Y}):null,(0,t.jsxs)(D,{children:[(0,t.jsxs)(A,{children:[(0,t.jsx)("input",{type:"checkbox",checked:i,onChange:e=>a(e.target.checked)}),"기관코드 저장"]}),(0,t.jsxs)(A,{children:[(0,t.jsx)("input",{type:"checkbox",checked:d,onChange:e=>s(e.target.checked)}),"아이디 저장"]})]}),(0,t.jsx)(k,{type:"button",onClick:()=>void W(),children:"로그인"}),(0,t.jsxs)($,{children:[(0,t.jsx)(R,{type:"button",onClick:()=>K("아이디 확인"),children:"아이디 확인"}),(0,t.jsx)(O,{"aria-hidden":"true",children:"|"}),(0,t.jsx)(R,{type:"button",onClick:()=>K("비밀번호 초기화"),children:"비밀번호 초기화 요청"})]}),(0,t.jsx)(x.default,{})]}),null!==G?(0,t.jsxs)(L,{role:"dialog","aria-label":G,children:[(0,t.jsx)(P,{children:G}),(0,t.jsxs)(N,{children:["계정은 자이언허브가 발급해요. ",G,"은(는) 기관명과 담당자 이름을 적어 자이언허브 담당자에게 요청해 주세요. 본인 확인 뒤 처리해 드려요."]}),(0,t.jsx)(N,{children:"기관코드는 zh로 시작하는 기관 번호예요(예: zh12)."}),(0,t.jsx)(M,{type:"button",onClick:()=>K(null),children:"닫기"})]}):null]})})}),b=p.default.main.withConfig({componentId:"zh__sc-9eaa5006-0"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`,j=p.default.div.withConfig({componentId:"zh__sc-9eaa5006-1"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 48px;

  width: 375px;
`,_=p.default.div.withConfig({componentId:"zh__sc-9eaa5006-2"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,w=p.default.div.withConfig({componentId:"zh__sc-9eaa5006-3"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 30px;
  font-weight: 700;
  line-height: 1;
`,y=p.default.span.withConfig({componentId:"zh__sc-9eaa5006-4"})`
  color: #1c1d22;
`,v=p.default.span.withConfig({componentId:"zh__sc-9eaa5006-5"})`
  color: #4f39f6;
`,C=p.default.div.withConfig({componentId:"zh__sc-9eaa5006-6"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,I=p.default.span.withConfig({componentId:"zh__sc-9eaa5006-7"})`
  flex-shrink: 0;

  width: 105px;

  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  color: ${({$error:e})=>!0===e?"#ff3b6b":"#6e7079"};
`,z=p.default.div.withConfig({componentId:"zh__sc-9eaa5006-8"})`
  display: flex;
  gap: 16px;
  align-items: center;

  box-sizing: border-box;
  height: 55px;
  padding: 8px 16px;
  border: 1px solid
    ${({$error:e,$hasValue:t})=>!0===e?"#ff003e":!0===t?"#45464e":"#ced0d9"};
  border-radius: 8px;

  &:focus-within {
    border-color: #4f39f6;
  }

  &:focus-within ${I} {
    color: #4f39f6;
  }
`,T=p.default.input.withConfig({componentId:"zh__sc-9eaa5006-9"})`
  flex: 1;

  min-width: 0;
  border: none;

  font-size: 20px;
  font-weight: 400;
  color: #1c1d22;

  background: transparent;
  outline: none;

  /* Hide native password reveal controls (e.g., Edge/IE) */
  &::-ms-reveal {
    display: none;
  }

  &::placeholder {
    color: #ced0d9;
  }
`,E=p.default.button.withConfig({componentId:"zh__sc-9eaa5006-10"})`
  cursor: pointer;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  padding: 0;
  border: none;

  color: ${({$active:e,$error:t})=>!0===e?"#4f39f6":!0===t?"#ff3b6b":"#ced0d9"};

  background: none;
`,S=p.default.div.withConfig({componentId:"zh__sc-9eaa5006-11"})`
  font-size: 12px;
  color: #ff3b6b;
`,k=p.default.button.withConfig({componentId:"zh__sc-9eaa5006-12"})`
  cursor: pointer;

  width: 100%;
  height: 55px;
  border: none;
  border-radius: 8px;

  font-size: 20px;
  font-weight: 500;
  color: white;

  background: #a49af6;

  &:hover {
    background: #9183fa;
  }
`,D=p.default.div.withConfig({componentId:"zh__sc-9eaa5006-13"})`
  display: flex;
  gap: 16px;
  margin-top: 4px;
`,A=p.default.label.withConfig({componentId:"zh__sc-9eaa5006-14"})`
  cursor: pointer;

  display: flex;
  gap: 6px;
  align-items: center;

  font-size: 14px;
  color: #464c53;
`,$=p.default.div.withConfig({componentId:"zh__sc-9eaa5006-15"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  margin-top: 8px;
`,R=p.default.button.withConfig({componentId:"zh__sc-9eaa5006-16"})`
  cursor: pointer;

  padding: 0;
  border: none;

  font-size: 14px;
  color: #6e7079;

  background: none;

  &:hover {
    text-decoration: underline;
  }
`,O=p.default.span.withConfig({componentId:"zh__sc-9eaa5006-17"})`
  color: #d0d5dd;
`,L=p.default.div.withConfig({componentId:"zh__sc-9eaa5006-18"})`
  position: absolute;
  z-index: 10;
  right: 0;
  bottom: -8px;
  left: 0;
  transform: translateY(100%);

  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;

  background: #fff;
  box-shadow: 0 8px 24px rgb(0 0 0 / 12%);
`,P=p.default.p.withConfig({componentId:"zh__sc-9eaa5006-19"})`
  font-size: 16px;
  font-weight: 700;
  color: #1c1d22;
`,N=p.default.p.withConfig({componentId:"zh__sc-9eaa5006-20"})`
  font-size: 14px;
  line-height: 1.5;
  color: #464c53;
`,M=p.default.button.withConfig({componentId:"zh__sc-9eaa5006-21"})`
  cursor: pointer;

  align-self: flex-end;

  padding: 6px 12px;
  border: 1px solid #d0d5dd;
  border-radius: 6px;

  font-size: 13px;

  background: #fff;
`;var F=e.i(64954);let B=/^[\x21-\x7E]+$/,U="공백 없이 영문·숫자·특수문자 8~64자",Y=(0,n.observer)(function(){let{isPasswordChangeRequired:e,passwordStatus:n,closePasswordChange:i,changePassword:a,logout:d}=o.default.auth,[r,s]=(0,l.useState)(""),[c,h]=(0,l.useState)(""),[p,x]=(0,l.useState)(""),[g,m]=(0,l.useState)(!1),[b,j]=(0,l.useState)(!1),[_,w]=(0,l.useState)(null),y=0===c.length?null:c.length<8||c.length>64||!B.test(c)?`비밀번호는 ${U}로 입력해 주세요.`:null,v=p.length>0&&p!==c?"새 비밀번호와 같게 입력해 주세요.":null,C=c.length>0&&c===r?"지금 쓰는 비밀번호와 다른 비밀번호를 입력해 주세요.":null,I=!b&&r.length>0&&c.length>0&&p===c&&null===y&&null===C,z=e?n?.isTemporary===!0?"임시 비밀번호의 사용 기간이 지났습니다. 새 비밀번호로 바꿔야 계속 이용할 수 있습니다.":"비밀번호를 바꾼 지 1년이 지났습니다. 새 비밀번호로 바꿔야 계속 이용할 수 있습니다.":null,T=async()=>{if(!I)return;j(!0),w(null);let e=await a(r,c);j(!1),null!==e&&w(e.message||"비밀번호를 바꾸지 못했습니다. 잠시 후 다시 시도해 주세요.")},E=g?"text":"password";return(0,t.jsx)(W,{$opaque:e,children:(0,t.jsxs)(V,{id:"password-change-panel",children:[(0,t.jsx)(H,{children:"비밀번호 변경"}),null!==z&&(0,t.jsx)(G,{children:z}),(0,t.jsxs)(K,{children:[(0,t.jsx)(X,{htmlFor:"password-change-current",children:"현재 비밀번호"}),(0,t.jsx)(q,{id:"password-change-current",type:E,autoComplete:"current-password",value:r,onChange:e=>s(e.target.value)})]}),(0,t.jsxs)(K,{children:[(0,t.jsx)(X,{htmlFor:"password-change-new",children:"새 비밀번호"}),(0,t.jsx)(q,{id:"password-change-new",type:E,autoComplete:"new-password",maxLength:64,value:c,onChange:e=>h(e.target.value)}),(0,t.jsx)(Q,{$error:null!==y||null!==C,children:y??C??`${U}, 직전 비밀번호는 쓸 수 없습니다.`})]}),(0,t.jsxs)(K,{children:[(0,t.jsx)(X,{htmlFor:"password-change-confirm",children:"새 비밀번호 확인"}),(0,t.jsx)(q,{id:"password-change-confirm",type:E,autoComplete:"new-password",maxLength:64,value:p,onChange:e=>x(e.target.value),onKeyDown:e=>{"Enter"===e.key&&T()}}),null!==v&&(0,t.jsx)(Q,{$error:!0,children:v})]}),(0,t.jsxs)(J,{type:"button",onClick:()=>m(!g),children:[g?(0,t.jsx)(u,{size:16}):(0,t.jsx)(f,{size:16}),g?"비밀번호 숨기기":"비밀번호 보기"]}),null!==_&&(0,t.jsx)(Z,{children:_}),(0,t.jsxs)(ee,{children:[e?(0,t.jsx)(F.default.Button.Outlined,{type:"button",onClick:()=>void d(),children:"로그아웃"}):(0,t.jsx)(F.default.Button.Outlined,{type:"button",disabled:b,onClick:i,children:"취소"}),(0,t.jsx)(F.default.Button.Filled.Primary,{type:"button",disabled:!I,onClick:()=>void T(),children:b?"변경 중...":"변경하기"})]})]})})}),W=p.default.div.withConfig({componentId:"zh__sc-cb48ea47-0"})`
  position: fixed;
  z-index: 1400;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({$opaque:e})=>e?"#f9fafb":"rgb(10 10 10 / 48%)"};
`,V=p.default.section.withConfig({componentId:"zh__sc-cb48ea47-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 420px;
  max-width: calc(100vw - 32px);
  padding: 28px 28px 24px;
  border-radius: 12px;

  background: #fff;
  box-shadow: 0 12px 32px rgb(16 24 40 / 12%);
`,H=p.default.h2.withConfig({componentId:"zh__sc-cb48ea47-2"})`
  font-size: 20px;
  font-weight: 700;
  color: #101828;
`,G=p.default.p.withConfig({componentId:"zh__sc-cb48ea47-3"})`
  padding: 12px 14px;
  border-radius: 8px;

  font-size: 14px;
  line-height: 20px;
  color: #b54708;

  background: #fffaeb;
`,K=p.default.div.withConfig({componentId:"zh__sc-cb48ea47-4"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,X=p.default.label.withConfig({componentId:"zh__sc-cb48ea47-5"})`
  font-size: 13px;
  font-weight: 600;
  color: #344054;
`,q=p.default.input.withConfig({componentId:"zh__sc-cb48ea47-6"})`
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;

  font-size: 15px;

  &:focus {
    border-color: #4f39f6;
    outline: none;
  }
`,Q=p.default.p.withConfig({componentId:"zh__sc-cb48ea47-7"})`
  font-size: 12px;
  color: ${({$error:e})=>!0===e?"#f04438":"#667085"};
`,J=p.default.button.withConfig({componentId:"zh__sc-cb48ea47-8"})`
  cursor: pointer;

  display: inline-flex;
  gap: 6px;
  align-items: center;
  align-self: flex-start;

  padding: 0;
  border: none;

  font-size: 13px;
  color: #475467;

  background: none;
`,Z=p.default.p.withConfig({componentId:"zh__sc-cb48ea47-9"})`
  font-size: 13px;
  color: #f04438;
`,ee=p.default.div.withConfig({componentId:"zh__sc-cb48ea47-10"})`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,et=(0,n.observer)(function(){let{passwordStatus:e,openPasswordChange:n,dismissTemporaryPasswordPrompt:i}=o.default.auth,l=e?.temporaryPasswordExpiresAt??null,a=null===l?null:(e=>{let t=new Date(e);if(Number.isNaN(t.getTime()))return null;let n=e=>String(e).padStart(2,"0");return`${t.getMonth()+1}월 ${t.getDate()}일 ${n(t.getHours())}:${n(t.getMinutes())}`})(l);return(0,t.jsx)(en,{children:(0,t.jsxs)(ei,{children:[(0,t.jsx)(el,{children:"임시 비밀번호로 로그인했습니다"}),(0,t.jsxs)(ea,{children:["안전을 위해 본인만 아는 새 비밀번호로 바꿔 주세요.",null!==a&&` ${a}이 지나면 지금 비밀번호로는 로그인할 수 없습니다.`]}),(0,t.jsxs)(ed,{children:[(0,t.jsx)(F.default.Button.Outlined,{type:"button",onClick:i,children:"다음에 변경"}),(0,t.jsx)(F.default.Button.Filled.Primary,{type:"button",onClick:n,children:"지금 변경"})]})]})})}),en=p.default.div.withConfig({componentId:"zh__sc-9965c079-0"})`
  position: fixed;
  z-index: 1400;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 48%);
`,ei=p.default.section.withConfig({componentId:"zh__sc-9965c079-1"})`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 400px;
  max-width: calc(100vw - 32px);
  padding: 24px;
  border-radius: 12px;

  background: #fff;
`,el=p.default.h2.withConfig({componentId:"zh__sc-9965c079-2"})`
  font-size: 18px;
  font-weight: 700;
  color: #101828;
`,ea=p.default.p.withConfig({componentId:"zh__sc-9965c079-3"})`
  font-size: 14px;
  line-height: 22px;
  color: #475467;
`,ed=p.default.div.withConfig({componentId:"zh__sc-9965c079-4"})`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 8px;
`,eo=(0,n.observer)(({children:e})=>{let{isAuthed:n,isPasswordChangeRequired:r,isPasswordChangeVisible:s,isTemporaryPasswordPromptVisible:c}=o.default.auth,[f,h]=(0,l.useState)(!0),u=(0,d.legalDocumentOf)((0,i.usePathname)());return((0,l.useEffect)(()=>{let e=!0;return(async()=>{await o.default.auth.restoreSession(),e&&h(!1)})(),()=>{e=!1}},[]),null===u||n)?f?null:n?r?(0,t.jsx)(Y,{}):(0,t.jsxs)(t.Fragment,{children:[e,s&&(0,t.jsx)(Y,{}),c&&(0,t.jsx)(et,{})]}):(0,t.jsx)(m,{}):(0,t.jsx)(a.default,{document:u,standalone:!0})});e.s(["default",0,eo],48271)},47753,e=>{"use strict";var t=e.i(9735),n=e.i(7744),i=e.i(38803),l=e.i(43174);let a=i.default.div.withConfig({componentId:"zh__sc-914b0b37-0"})`
  position: relative;

  display: flex;

  width: 100%;
  min-height: 100vh;

  background-color: #f9fafb;
`;e.s(["default",0,function({children:e}){let i=(0,n.useRef)(null);return(0,n.useEffect)(()=>(l.default.ui.layout.setAppContainer(i.current),()=>{l.default.ui.layout.setAppContainer(null)}),[]),(0,t.jsx)(a,{ref:i,children:e})}])},69477,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l=(0,t.forwardRef)(function(e,n){var l=e.color,a=e.size,d=void 0===a?24:a,o=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return t.default.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===l?"currentColor":l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),t.default.createElement("polyline",{points:"23 4 23 10 17 10"}),t.default.createElement("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"}))});l.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},l.displayName="RotateCw",e.s(["RotateCw",0,l],69477)},73060,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(15695),a=e.i(69477),d=e.i(4153);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),i.default.createElement("circle",{cx:"12",cy:"7",r:"4"}))});r.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},r.displayName="User";var s=e.i(38803),c=e.i(64954),f=e.i(43174);let h=(0,n.observer)(function(){let{oldestSyncedAt:e,refetchAll:n}=f.default.ui.layout.header,{meNameWithPosition:d,logout:o,openPasswordChange:s}=f.default.auth,[c,h]=(0,i.useState)(()=>new Date),[v,C]=(0,i.useState)("idle"),I=(()=>{if(null===e)return null;let t=Math.max(0,Math.floor((c.getTime()-e.getTime())/1e3/60)),n=Math.floor(t/60);return t<60?`오늘 ${t}분 전 최신정보`:`오늘 ${n}시간 전 최신정보`})();(0,i.useEffect)(()=>{if(null===e)return;let t=window.setInterval(()=>{h(new Date)},6e4);return()=>{window.clearInterval(t)}},[e]),(0,i.useEffect)(()=>{if("completed"!==v)return;let e=window.setTimeout(()=>{C("idle")},2e3);return()=>{window.clearTimeout(e)}},[v]);let z=async()=>{C("loading");try{let e=await n();C(e?"completed":"idle")}catch{C("idle")}},T=(()=>{switch(v){case"idle":default:return null;case"loading":return(0,t.jsx)(a.RotateCw,{size:15});case"completed":return(0,t.jsx)(l.Check,{size:20})}})(),E=(()=>{switch(v){case"idle":default:return"최신 정보로 업데이트하기";case"loading":return"업데이트 중";case"completed":return"업데이트 완료"}})(),S=null===e||"idle"!==v;return(0,t.jsxs)(u,{children:[(0,t.jsxs)(p,{children:[null===I?null:(0,t.jsx)(x,{children:I}),(0,t.jsxs)(g,{$status:"loading"===v?"processing":"completed"===v?"success":void 0,onClick:S?void 0:()=>void z(),disabled:S,children:[T,E]})]}),(0,t.jsxs)(m,{children:[null===d?null:(0,t.jsxs)(b,{children:[(0,t.jsx)(j,{children:(0,t.jsx)(r,{size:20,color:"#ff6900"})}),(0,t.jsx)(_,{children:d})]}),(0,t.jsx)(y,{onClick:s,children:"비밀번호 변경"}),(0,t.jsx)(w,{onClick:()=>{o()},children:"로그아웃"})]})]})}),u=s.default.div.withConfig({componentId:"zh__sc-bc883191-0"})`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: flex-end;

  height: 64px;
  padding: 10px 24px;
  border: 1px solid #e5e7eb;
  border-top: none;
  border-left: none;

  background: #fff;
`,p=s.default.div.withConfig({componentId:"zh__sc-bc883191-1"})`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 36px;
`,x=s.default.div.withConfig({componentId:"zh__sc-bc883191-2"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #4a5565;
  letter-spacing: -0.076px;
`,g=(0,s.default)(c.default.Button.Outlined).withConfig({componentId:"zh__sc-bc883191-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  width: 203px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  text-align: center;
`,m=s.default.div.withConfig({componentId:"zh__sc-bc883191-4"})`
  display: flex;
  gap: 16px;
  align-items: center;
`,b=s.default.div.withConfig({componentId:"zh__sc-bc883191-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,j=s.default.div.withConfig({componentId:"zh__sc-bc883191-6"})`
  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1/1;
  width: 32px;
  height: 32px;
  padding: 0 6px;
  border-radius: 999px;

  background: #fff4ed;
`,_=s.default.div.withConfig({componentId:"zh__sc-bc883191-7"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: #1c1d22;
`,w=(0,s.default)(c.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-bc883191-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;

  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  text-align: center;
`,y=(0,s.default)(c.default.Button.Outlined).withConfig({componentId:"zh__sc-bc883191-9"})`
  align-self: stretch;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
`;e.s(["default",0,h],73060)},79109,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(43174),a=e.i(26170);let d=(0,n.observer)(function(){let{isLoading:e}=l.default.api,[n,d]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{if(!e)return;let t=window.setTimeout(()=>{d(!0)},300);return()=>{d(!1),window.clearTimeout(t)}},[e]),e&&n?(0,t.jsx)(a.default,{isLoading:!0,children:null}):null});e.s(["default",0,d])},55357,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(38803),a=e.i(43174),d=e.i(26170),o=e.i(64954),r=e.i(7242);let s=function({currentServiceType:e,detectedServiceType:n,isContinueDisabled:i,isOpen:l,onCancel:a,onContinue:d,registrationTarget:o}){if(!l)return null;let s=`${r.default[e].label} 서비스`,b=`${r.default[n].label} 서비스`,j="이용자"===o?"이용자로":"제공인력으로";return(0,t.jsx)(c,{children:(0,t.jsxs)(f,{children:[(0,t.jsxs)(h,{children:[(0,t.jsxs)(u,{children:["[",b,"] ",o,"의 전자바우처입니다."]}),(0,t.jsxs)(p,{children:["현재 [",s,"]에서 ",o," 등록을 진행하고 있습니다.",(0,t.jsx)("br",{}),i?(0,t.jsxs)(t.Fragment,{children:["업로드한 전자바우처는 [",b,"]로 확인되었습니다.",(0,t.jsx)("br",{}),"현재 기관에서 [",b,"]를 운영하고 있지 않아 등록을 계속할 수 없습니다."]}):(0,t.jsxs)(t.Fragment,{children:["업로드한 전자바우처는 [",b,"]로 확인되어, [",b,"]"," ",j," 등록을 계속합니다."]})]})]}),(0,t.jsxs)(x,{children:[(0,t.jsx)(g,{type:"button",onClick:a,children:"등록하지 않고 나가기"}),!i&&(0,t.jsxs)(m,{type:"button",onClick:d,children:["[",b,"]로 계속 등록하기"]})]})]})})},c=l.default.div.withConfig({componentId:"zh__sc-4e4950a7-0"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,f=l.default.div.withConfig({componentId:"zh__sc-4e4950a7-1"})`
  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  width: 501px;
  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 2px rgb(0 0 0 / 10%);
`,h=l.default.div.withConfig({componentId:"zh__sc-4e4950a7-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,u=l.default.h3.withConfig({componentId:"zh__sc-4e4950a7-3"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,p=l.default.p.withConfig({componentId:"zh__sc-4e4950a7-4"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,x=l.default.div.withConfig({componentId:"zh__sc-4e4950a7-5"})`
  display: flex;
  gap: 12px;
  align-self: stretch;
  justify-content: flex-end;
`,g=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-4e4950a7-6"})`
  height: 36px;
  padding: 8px 16px;
  border-color: #4f39f6;
  color: #4f39f6;
`,m=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-4e4950a7-7"})`
  height: 36px;
  padding: 8px 16px;
`;var b=e.i(15695);let j=(0,n.observer)(function(){let{clientDraft:e,isSaving:n,resetToUploadStep:i,saveClientDraft:l}=a.default.modal.clientCreate,{preserveClientAfterSave:d,resetSort:o,setCurrentServiceType:r,setHighlightedClientId:s}=a.default.client.info.byClient,c=a.default.data.auth.me.data?.name??"",f=async()=>{let t=e?.serviceType,n=await l();if(null===n)return void requestAnimationFrame(()=>{document.querySelector("[data-client-create-field-error]")?.scrollIntoView({block:"center",behavior:"smooth"})});let i=t??null,c="clientId"in n?n.clientId:n.id;null!==i&&(r(i),o(),a.default.data.client.list.setQuery({serviceType:i}),await a.default.data.client.list.refetch()),"string"==typeof c&&c.length>0&&(d(c),s(c))};return(0,t.jsxs)(_,{children:[(0,t.jsxs)(w,{children:[(0,t.jsx)(y,{children:"작성자"}),(0,t.jsxs)(v,{defaultValue:c,children:[(0,t.jsx)("option",{value:"",children:"작성자 선택"}),""!==c&&(0,t.jsx)("option",{value:c,children:c})]})]}),(0,t.jsx)(C,{}),(0,t.jsxs)(I,{children:[(0,t.jsx)(T,{disabled:!e||n,onClick:i,children:"다시 업로드하기"}),(0,t.jsxs)(E,{disabled:!e||n,onClick:()=>void f(),children:[(0,t.jsx)(b.Check,{size:16}),"최종확인 및 저장"]})]})]})}),_=l.default.div.withConfig({componentId:"zh__sc-759c17e6-0"})`
  display: flex;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 16px;
  border-top: 1px solid #e5e7eb;
`,w=l.default.div.withConfig({componentId:"zh__sc-759c17e6-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,y=l.default.label.withConfig({componentId:"zh__sc-759c17e6-2"})`
  font-size: 16px;
  font-weight: 500;
  color: #0a0a0a;
`,v=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-759c17e6-3"})`
  min-width: 120px;
  height: 36px;
`,C=l.default.div.withConfig({componentId:"zh__sc-759c17e6-4"})`
  width: 1px;
  height: 24px;
  background: #e5e7eb;
`,I=l.default.div.withConfig({componentId:"zh__sc-759c17e6-5"})`
  display: flex;
  gap: 16px;
  align-items: center;
`,z=l.css`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,T=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-759c17e6-6"})`
  ${z}
`,E=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-759c17e6-7"})`
  ${z}
`,S=(0,n.observer)(function(){let e=a.default.modal.clientCreate;return!0!==e.isContractPeriodOverlapDialogOpen?null:(0,t.jsx)(k,{children:(0,t.jsxs)(D,{children:[(0,t.jsxs)(A,{children:[(0,t.jsx)($,{children:"계약기간이 중복되어 등록할 수 없습니다."}),(0,t.jsxs)(R,{children:["동일한 이름과 주민등록번호로 등록된 이용자의 계약•서비스 기간 중 겹치는 기간이 있습니다.",(0,t.jsx)("br",{}),"계약•서비스 기간이 겹치지 않도록 수정한 후 다시 등록해주세요."]})]}),(0,t.jsxs)(O,{children:[(0,t.jsx)(L,{type:"button",onClick:e.cancelContractPeriodOverlapRegistration,children:"등록 취소하기"}),(0,t.jsx)(P,{type:"button",onClick:e.closeContractPeriodOverlapDialog,children:"계약/서비스 기간 수정하기"})]})]})})}),k=l.default.div.withConfig({componentId:"zh__sc-79ae8371-0"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,D=l.default.div.withConfig({componentId:"zh__sc-79ae8371-1"})`
  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,A=l.default.div.withConfig({componentId:"zh__sc-79ae8371-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,$=l.default.h3.withConfig({componentId:"zh__sc-79ae8371-3"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,R=l.default.p.withConfig({componentId:"zh__sc-79ae8371-4"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,O=l.default.div.withConfig({componentId:"zh__sc-79ae8371-5"})`
  display: flex;
  gap: 12px;
  align-self: stretch;
  justify-content: flex-end;
`,L=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-79ae8371-6"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,P=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-79ae8371-7"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,N={RRN_PARTIAL:"이름과 주민등록번호 앞 7자리가 같아요. 같은 사람이면 기존 이용자로 이어서 등록하고, 다른 사람이면 새로 등록해 주세요.",NAME_BIRTH_DATE:"이름과 생년월일이 같은 이용자가 이미 있어요. 같은 사람이면 기존 이용자로 이어서 등록하고, 다른 사람이면 그래도 새로 등록할 수 있어요.",NAME_PHONE:"이름과 휴대폰 번호가 같은 이용자가 이미 있어요. 같은 사람이면 기존 이용자로 이어서 등록하고, 다른 사람이면 그래도 새로 등록할 수 있어요."},M=(0,n.observer)(function(){let e=a.default.modal.clientCreate,n=e.duplicateClient;if(null===n)return null;let i=e.clientDraft?.serviceType,l=void 0!==i&&n.serviceTypes.includes(i),d=n.serviceTypes.map(e=>Object.prototype.hasOwnProperty.call(r.default,e)?r.default[e].label:e).join(", ");return(0,t.jsx)(F,{children:(0,t.jsxs)(B,{role:"dialog","aria-label":"이미 등록된 이용자",children:[(0,t.jsxs)(U,{children:[(0,t.jsx)(Y,{children:n.exactMatch?"이미 등록된 이용자예요.":"같은 사람일 수 있는 이용자가 있어요."}),(0,t.jsx)(W,{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"성명"}),(0,t.jsx)("td",{children:n.name})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"생년월일"}),(0,t.jsx)("td",{children:n.birthDate?.replaceAll("-",".")??"-"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"휴대폰"}),(0,t.jsx)("td",{children:n.phoneNumber??"-"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"이용 중인 서비스"}),(0,t.jsx)("td",{children:""===d?"-":d})]})]})}),(0,t.jsx)(V,{children:l?"이 이용자는 이미 같은 서비스를 이용 중이에요. 새로 등록하지 말고 이용자 상세에서 재계약으로 진행해 주세요.":"RRN"===n.matchedBy?"주민등록번호가 같아요. 기존 이용자로 이어서 등록하면 이 서비스 계약이 추가되고, 이번에 입력한 이름·연락처·주소로 기존 정보가 바뀌어요.":N[n.matchedBy]})]}),(0,t.jsxs)(H,{children:[(0,t.jsx)(G,{type:"button",onClick:e.closeDuplicateClientDialog,children:"취소"}),n.exactMatch?null:(0,t.jsx)(G,{type:"button",onClick:()=>void e.registerAsNewClient(),children:"다른 사람 — 새로 등록"}),l?null:(0,t.jsx)(K,{type:"button",onClick:()=>void e.continueWithDuplicateClient(),children:"기존 이용자로 이어서 등록"})]})]})})}),F=l.default.div.withConfig({componentId:"zh__sc-20d7e9a8-0"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,B=l.default.div.withConfig({componentId:"zh__sc-20d7e9a8-1"})`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 460px;
  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,U=l.default.div.withConfig({componentId:"zh__sc-20d7e9a8-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Y=l.default.h3.withConfig({componentId:"zh__sc-20d7e9a8-3"})`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #000;
`,W=l.default.table.withConfig({componentId:"zh__sc-20d7e9a8-4"})`
  border-collapse: collapse;
  width: 100%;
  font-size: 14px;

  th {
    width: 120px;
    padding: 6px 8px;
    border-bottom: 1px solid #f2f4f7;

    font-weight: 500;
    color: #636978;
    text-align: left;
  }

  td {
    padding: 6px 8px;
    border-bottom: 1px solid #f2f4f7;
    color: #0a0a0a;
  }
`,V=l.default.p.withConfig({componentId:"zh__sc-20d7e9a8-5"})`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: #344054;
`,H=l.default.div.withConfig({componentId:"zh__sc-20d7e9a8-6"})`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,G=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-20d7e9a8-7"})`
  height: 36px;
  padding: 8px 14px;
`,K=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-20d7e9a8-8"})`
  height: 36px;
  padding: 8px 14px;
`;var X=e.i(74515),q=e.i(4153);function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var J=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",Q({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i.default.createElement("polyline",{points:"12 5 19 12 12 19"}))});J.propTypes={color:q.default.string,size:q.default.oneOfType([q.default.string,q.default.number])},J.displayName="ArrowRight";let Z=(0,n.observer)(function(){let{analyzeSelectedFile:e,isAnalyzing:n,selectedFile:i}=a.default.modal.clientCreate;return(0,t.jsx)(ee,{children:(0,t.jsxs)(et,{disabled:null===i||n,onClick:()=>{e()},children:["분석 시작",(0,t.jsx)(J,{size:16})]})})}),ee=l.default.div.withConfig({componentId:"zh__sc-d7f6cfb5-0"})`
  display: flex;
  gap: 10px;
  align-self: stretch;
  justify-content: flex-end;
`,et=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d7f6cfb5-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;var en=e.i(8179),ei=e.i(98273),el=e.i(25521);let{FILE_EXTENSION_WHITELIST_BY_GROUP:ea}=el.default.file,ed=(0,n.observer)(function(){var e;let n,{clearSelectedFile:i,selectedFile:l,isAnalyzing:d}=a.default.modal.clientCreate;if(null===l)return null;let o=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(eo,{children:(0,t.jsxs)(er,{children:[(0,t.jsxs)(es,{children:[(0,t.jsx)(ec,{children:ea.IMAGE.some(e=>e===o)?(0,t.jsx)(ei.default.Photo,{size:17,color:"#FA8E43"}):ea.AUDIO.some(e=>e===o)?(0,t.jsx)(ei.default.SpeechToText,{size:17,color:"#A855F7"}):ea.DOCUMENT.some(e=>e===o)?(0,t.jsx)(ei.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(ef,{children:(0,t.jsx)(eh,{children:l.name})})]}),(0,t.jsxs)(eu,{onClick:i,disabled:d,children:["삭제",(0,t.jsx)(en.X,{size:16})]})]},`${l.name}-${l.size}-${l.lastModified}`)})}),eo=l.default.div.withConfig({componentId:"zh__sc-8227d071-0"})`
  overflow: auto hidden;
  display: flex;
  gap: 12px;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  padding-bottom: 6px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: #d1d5db;
  }
`,er=l.default.div.withConfig({componentId:"zh__sc-8227d071-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,es=l.default.div.withConfig({componentId:"zh__sc-8227d071-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,ec=l.default.div.withConfig({componentId:"zh__sc-8227d071-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,ef=l.default.div.withConfig({componentId:"zh__sc-8227d071-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,eh=l.default.div.withConfig({componentId:"zh__sc-8227d071-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,eu=l.default.button.withConfig({componentId:"zh__sc-8227d071-6"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #45464e;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
  letter-spacing: -1px;

  background: #fff;

  &:hover {
    background: #f9fafb;
  }

  &:active {
    background: #f3f4f6;
  }

  &:disabled {
    border-color: #d1d5db;
    color: #9ca3af;
    background-color: #f9fafb;
  }
`;var ep=e.i(24045),ex=e.i(9454);function eg(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(em,{children:(0,t.jsx)(eb,{$progress:e})})}let em=l.default.div.withConfig({componentId:"zh__sc-aa649b54-0"})`
  overflow: hidden;
  display: flex;

  width: 362px;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,eb=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-aa649b54-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,ej=(0,n.observer)(function(){let{isWindowFileDragging:e}=a.default.ui.layout,{selectedFile:n,isError:i,isAnalyzing:l,abortAnalyze:d}=a.default.modal.clientCreate,o=i?"지원하지 않는 파일 형식입니다.":e?"파일을 여기에 놓으면 업로드 됩니다.":l?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.",r=null===n||l?"지원 파일 형식: 사진 이미지":"새 파일을 업로드하면 기존 파일이 교체됩니다.";return(0,t.jsxs)(ew,{children:[null===n&&!i&&(0,t.jsx)(ey,{children:(0,t.jsx)(ep.Upload,{size:26,color:e_[100]})}),(0,t.jsxs)(ev,{children:[(0,t.jsx)(eC,{$isError:i,children:o}),(0,t.jsx)(eI,{children:r})]}),l&&(0,t.jsx)(eg,{}),l&&(0,t.jsx)(ez,{onClick:d,children:"중단하기"})]})}),{PRIMARY:e_}=ex.default.style.color,ew=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,ey=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,ev=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,eC=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-3"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,eI=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: #99a1af;
`,ez=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-47e9a3b3-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,eT=(0,n.observer)(function(){let{isWindowFileDragging:e}=a.default.ui.layout,{acceptFileTypes:n,setSelectedFile:l,selectedFile:d,isError:o}=a.default.modal.clientCreate,r=(0,i.useRef)(null);return(0,X.default)(e=>{if(0===e.length)return;let t=e[0];void 0!==t&&l(t)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eE,{ref:r,type:"file",accept:n,onChange:e=>{let t=Array.from(e.target.files??[]);if(0===t.length)return;let n=t[0];void 0!==n&&(l(n),e.target.value="")}}),(0,t.jsxs)(eS,{$isWindowFileDragging:e,onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault();let t=Array.from(e.dataTransfer.files);if(0===t.length)return;let n=t[0];void 0!==n&&l(n)},onClick:e=>{e.target instanceof HTMLElement&&(e.target.closest("button")||r.current?.click())},$isError:o,children:[null!==d&&(0,t.jsx)(ed,{}),(0,t.jsx)(ej,{}),(0,t.jsx)(Z,{})]})]})}),eE=l.default.input.withConfig({componentId:"zh__sc-35541df3-0"})`
  display: none;
`,eS=l.default.div.withConfig({componentId:"zh__sc-35541df3-1"})`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  min-width: 0;
  padding: 24px 40px;
  border: 1px solid ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  border-style: ${({$isWindowFileDragging:e})=>e?"dashed":"solid"};
  border-radius: 16px;

  background: ${({$isWindowFileDragging:e,$isError:t})=>t?"#FFF5F5":e?"#f6f3ff":"#fff"};

  &:hover {
    background-color: ${({$isError:e})=>e?"#FFF5F5":"#f6f3ff"};
  }

  &:active {
    background-color: ${({$isError:e})=>e?"#FFF5F5":"#efeaff"};
  }
`,ek=(0,n.observer)(function(){let{analyzedFile:e,mode:n}=a.default.modal.clientCreate;return(0,t.jsxs)(eD,{$flex1:null===e,children:[null===e&&(0,t.jsx)(eA,{children:"renew"===n?"새로운 전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요.":"전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요."}),(0,t.jsx)(eT,{})]})}),eD=l.default.div.withConfig({componentId:"zh__sc-8fa7e82c-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 0;

  ${({$flex1:e})=>!0===e&&`
    flex: 1;
  `}
`,eA=l.default.div.withConfig({componentId:"zh__sc-8fa7e82c-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px; /* 133.333% */
  color: #101828;
`,e$="border-highlight-style-tag",eR="border-highlight-sweep",eO="--border-highlight-sweep",eL=`
  linear-gradient(transparent, transparent) padding-box,
  conic-gradient(
    from -90deg,
    #fff 0deg,
    #ede9fe 8deg,
    #a78bfa 22deg,
    #7c3aed calc(var(${eO}) * 0.28),
    #4f39f6 calc(var(${eO}) * 0.45),
    #818cf8 calc(var(${eO}) * 0.65),
    #a78bfa calc(var(${eO}) * 0.8),
    #ddd6fe calc(var(${eO}) * 0.93),
    #fff var(${eO}),
    #fff 360deg
  ) border-box
`,eP=function(){let e=(0,i.useRef)(null),t=(0,i.useRef)(null),n=(0,i.useRef)(null),l=(0,i.useRef)(null),a=(0,i.useRef)(null),d=(0,i.useRef)(null),o=(0,i.useRef)(null),r=(0,i.useCallback)(()=>{null!==l.current&&(window.clearTimeout(l.current),l.current=null),null!==a.current&&(window.cancelAnimationFrame(a.current),a.current=null)},[]),s=(0,i.useCallback)(()=>{let i=e.current,l=t.current,a=n.current;null!==i&&null!==l&&null!==a&&(l.style.top=`${i.offsetTop-1}px`,l.style.left=`${i.offsetLeft-1}px`,l.style.width=`${i.offsetWidth+2}px`,l.style.height=`${i.offsetHeight+2}px`,l.style.borderRadius=window.getComputedStyle(i).borderRadius)},[]),c=(0,i.useCallback)(()=>{let i=e.current;if(null===i)return null;(()=>{if("u"<typeof document||null!==document.getElementById(e$))return;let e=document.createElement("style");e.id=e$,e.textContent=`
    @property ${eO} {
      inherits: false;
      initial-value: 0deg;
      syntax: '<angle>';
    }

    @keyframes ${eR} {
      from {
        ${eO}: 0deg;
      }

      to {
        ${eO}: 360deg;
      }
    }
  `,document.head.append(e)})();let l=i.parentElement;if(null===l)return null;if(n.current=l,null===d.current&&(d.current={position:i.style.position,zIndex:i.style.zIndex}),null===o.current&&(o.current=l.style.position),"static"===window.getComputedStyle(l).position&&(l.style.position="relative"),""===i.style.position&&(i.style.position="relative"),""===i.style.zIndex&&(i.style.zIndex="1"),null===t.current){let e=document.createElement("div");e.style.pointerEvents="none",e.style.position="absolute",e.style.zIndex="0",e.style.boxSizing="border-box",e.style.border="1px solid transparent",e.style.background="none",l.append(e),t.current=e}return s(),t.current},[s]),f=(0,i.useCallback)(()=>{let e=c();null===e||window.matchMedia("(prefers-reduced-motion: reduce)").matches||(r(),e.style.animation="none",e.style.background=eL,e.style.setProperty(eO,"0deg"),e.offsetWidth,a.current=window.requestAnimationFrame(()=>{s(),e.style.animation=`${eR} 600ms ease-in-out forwards`,a.current=null,l.current=window.setTimeout(()=>{e.style.animation="",e.style.background="none",l.current=null},600)}))},[r,c,s]);return(0,i.useEffect)(()=>{let i=e.current,l=n.current,a=t.current,s=d.current,c=o.current;return()=>{r(),null!==a&&(a.style.animation="",a.style.background="none"),a?.remove(),null!==i&&null!==s&&(i.style.position=s.position,i.style.zIndex=s.zIndex),null!==l&&null!==c&&(l.style.position=c)}},[r]),{ref:e,fire:f}},{FILE_EXTENSION_WHITELIST_BY_GROUP:eN}=el.default.file,eM=(0,n.observer)(function(){var e;let n,{analyzedFile:l}=a.default.modal.clientCreate,{ref:d,fire:o}=eP();if((0,i.useEffect)(()=>{null!==l&&o()},[l,o]),null===l)return null;let r=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(eF,{ref:d,children:[(0,t.jsxs)(eB,{children:[(0,t.jsxs)(eU,{children:[(0,t.jsx)(ei.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(eY,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{}),"우측의 [이용자 기본 정보]가 올바르게 연동되었는지 확인 후, [최종 확인] 버튼을 눌러주세요."]})]}),(0,t.jsxs)(eW,{children:[(0,t.jsxs)(eV,{children:[(0,t.jsx)(ei.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(eH,{children:(0,t.jsxs)(eG,{children:[(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:eN.IMAGE.some(e=>e===r)?(0,t.jsx)(ei.default.Photo,{size:17,color:"#FA8E43"}):eN.AUDIO.some(e=>e===r)?(0,t.jsx)(ei.default.SpeechToText,{size:17,color:"#A855F7"}):eN.DOCUMENT.some(e=>e===r)?(0,t.jsx)(ei.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(eq,{children:(0,t.jsx)(eQ,{children:l.name})})]}),(0,t.jsx)(eJ,{children:"추출 완료"})]},`${l.name}-${l.size}-${l.lastModified}`)})]})]})}),eF=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-0"})`
  overflow: hidden;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
  max-height: 100%;
  padding: 24px 40px;
  border-radius: 16px;

  background: #fff;
`,eB=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,eU=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,eY=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  padding-left: 26px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,eW=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,eV=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,eH=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-6"})`
  overflow-y: auto;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  row-gap: 12px;
  place-content: flex-start space-between;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
  max-height: 100%;
  padding-right: 4px;
`,eG=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 355px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,eK=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,eX=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,eq=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-10"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,eQ=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,eJ=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-12"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #4f39f6;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #fff;
  letter-spacing: -1px;

  background: #4f39f6;
`,eZ=(0,n.observer)(function(){let{analyzedFile:e}=a.default.modal.clientCreate;return(0,t.jsxs)(e0,{children:[null!==e&&(0,t.jsx)(eM,{}),(0,t.jsx)(ek,{})]})}),e0=l.default.div.withConfig({componentId:"zh__sc-a077b87a-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: space-between;

  min-width: 0;
  min-height: 0;
  padding: 32px 24px;
  border-right: 1px solid #e5e7eb;
`;var e1=e.i(21771);let e2=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,e6=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,e4=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-2"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,e5=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-3"})`
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
`,e3=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-4"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,e9={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16},e8=(0,n.observer)(function(){let{clientDraft:e,updateClientDraft:n}=a.default.modal.clientCreate;return null===e?null:(0,t.jsxs)(e2,{children:[(0,t.jsx)(e6,{children:"보호자 정보"}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{$width:260,children:[(0,t.jsx)(e3,{children:"보호자명"}),(0,t.jsx)(o.default.Input.Text,{style:e9,value:e.guardianName??"",onChange:e=>{n(t=>({...t,guardianName:e.target.value}))},placeholder:"보호자 성명을 입력하세요."})]}),(0,t.jsxs)(e5,{$width:260,children:[(0,t.jsx)(e3,{children:"보호자 관계"}),(0,t.jsx)(o.default.Input.Text,{style:e9,value:e.guardianRelationship??"",onChange:e=>{n(t=>({...t,guardianRelationship:e.target.value}))},placeholder:"관계를 입력하세요."})]})]}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"보호자 휴대폰"}),(0,t.jsx)(o.default.Input.Text,{style:e9,value:e.guardianPhoneNumber??"",onChange:e=>{n(t=>({...t,guardianPhoneNumber:e.target.value}))},placeholder:"휴대폰을 입력해주세요."})]}),(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"보호자 연락처"}),(0,t.jsx)(o.default.Input.Contact,{style:e9,value:e.guardianContact??"",onChange:e=>{n(t=>({...t,guardianContact:e}))},placeholder:"연락처를 입력해주세요."})]})]}),(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"보호자 주소"}),(0,t.jsx)(o.default.Input.Text,{style:e9,value:e.guardianAddress??"",onChange:e=>{n(t=>({...t,guardianAddress:e.target.value}))},placeholder:"보호자 주소를 입력해주세요."})]})]})}),e7=e=>{let t=e.trim().match(/^(\d{6})-?(\d)(\d{0,6})$/);if(null===t)return"unknown";switch(t[2]){case"1":case"3":return"MALE";case"2":case"4":return"FEMALE";default:return"unknown"}},te=e=>{switch(e){case"MALE":return"남성";case"FEMALE":return"여성";case"unknown":return""}},tt=e=>{switch(e){case"MEAL":return"식사관리 서비스";case"NUTRITION":return"영양관리 서비스";case"DISABILITY_ACTIVITY_SUPPORT":return"장애인 활동지원"}},tn=(0,n.observer)(function(){let{clientDraft:e,ocrDraft:n,updateClientDraft:i,getClientDraftFieldError:l,clearClientDraftFieldError:d}=a.default.modal.clientCreate;if(null===e)return null;let r=e.name??"",s=e.residentRegistrationNumber??"",c=e.businessType??"DAY_CARE",f=e.serviceType??"MEAL",h=e.contractStartDate??"",u=e.contractEndDate??"",p=e.serviceStartDate??"",x=e.serviceEndDate??"",g=e.note??"",m=e.vehicleFuelCostNoticeGiven??!0,b=e.contact??"",j=e.phoneNumber??"",_=e.address??"",w=e.postCode??"",y=e.addressDetail??"",v=(()=>{let e=new Date,[t,n]=e1.default.create(e.getFullYear(),e.getMonth()+1,e.getDate());return null===t?n:null})(),C=e7(s),I=tt(f),z="DISABILITY_ACTIVITY_SUPPORT"===c?"장애인 활동지원":"일상돌봄 서비스",T="DISABILITY_ACTIVITY_SUPPORT"===f?"활동보조":tt(f),E=(e=>{switch(e){case"MEAL":return"500901";case"NUTRITION":return"500401";case"DISABILITY_ACTIVITY_SUPPORT":return"HWG001"}})(f),S=(e,t)=>""===l(e)?t:{...t,borderColor:"#ff4d4f",background:"#fff5f5"},k=e=>{let n=l(e);return""===n?null:(0,t.jsx)(tr,{"data-client-create-field-error":"true",children:n})},D=(e,t)=>{let n=String(t??"").trim();return""!==n&&String(e).trim()===n},A=(e,t)=>{e1.default.is(e)&&i(n=>t(n,e))};return(0,t.jsxs)(e2,{children:[(0,t.jsx)(e6,{children:"인적사항"}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:[(0,t.jsxs)(e3,{children:["성명",(0,t.jsx)(ti,{})]}),(0,t.jsx)(o.default.Input.Text,{$autoFilled:D(r,n?.name??""),style:S("name",e9),value:r,onChange:e=>{d("name"),i(t=>({...t,name:e.target.value.trim()}))},placeholder:"성명을 입력해주세요."}),k("name")]}),(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"주민등록번호"}),(0,t.jsx)(o.default.Input.ResidentRegistrationNumber,{$autoFilled:D(s,n?.residentRegistrationNumber??""),style:S("residentRegistrationNumber",e9),value:s,onChange:e=>{d("residentRegistrationNumber"),i(t=>({...t,residentRegistrationNumber:e}))},placeholder:"주민등록번호를 입력해주세요."}),k("residentRegistrationNumber")]}),(0,t.jsxs)(e5,{$width:266,children:[(0,t.jsx)(e3,{children:"성별"}),(0,t.jsx)(tc,{$autoFilled:D(te(C),te(e7(n?.residentRegistrationNumber??""))),style:e9,value:te(C),placeholder:"주민등록번호와 연동되어 보여집니다.",readOnly:!0})]})]}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:[(0,t.jsxs)(e3,{children:["휴대폰",(0,t.jsx)(ti,{})]}),(0,t.jsx)(o.default.Input.Phone,{$autoFilled:D(j,n?.phoneNumber??""),style:S("phoneNumber",e9),value:j,onChange:e=>{d("phoneNumber"),i(t=>({...t,phoneNumber:e}))},placeholder:"휴대폰을 입력해주세요."}),k("phoneNumber")]}),(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"연락처"}),(0,t.jsx)(o.default.Input.Contact,{$autoFilled:D(b,n?.contact??""),style:S("contact",e9),value:b,onChange:e=>{d("contact"),i(t=>({...t,contact:e}))},placeholder:"연락처를 입력해주세요."}),k("contact")]})]}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"주소"}),(0,t.jsx)(o.default.Input.Text,{$autoFilled:D(_,n?.address??""),style:S("address",e9),value:_,onChange:e=>{d("address"),i(t=>({...t,address:e.target.value}))},placeholder:"주소를 입력해주세요."}),k("address")]}),(0,t.jsxs)(e5,{$width:191,children:[(0,t.jsx)(e3,{children:"우편번호"}),(0,t.jsx)(o.default.Input.PostCode,{$autoFilled:D(w,n?.postCode??""),style:S("postCode",e9),value:w,onChange:e=>{d("postCode"),i(t=>({...t,postCode:e}))},placeholder:"우편번호를 입력해주세요."}),k("postCode")]})]}),(0,t.jsx)(e4,{children:(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"상세주소"}),(0,t.jsx)(o.default.Input.Text,{$autoFilled:D(y,n?.addressDetail??""),style:S("addressDetail",e9),value:y,onChange:e=>{d("addressDetail"),i(t=>({...t,addressDetail:e.target.value}))},placeholder:"상세주소를 입력해주세요."}),k("addressDetail")]})}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"특이사항(메모)"}),(0,t.jsx)(o.default.Input.Text,{style:e9,value:g,onChange:e=>{i(t=>({...t,note:e.target.value}))},placeholder:"메모가 필요한 사항을 입력해주세요."})]}),"DISABILITY_ACTIVITY_SUPPORT"===f&&(0,t.jsxs)(e5,{$width:191,children:[(0,t.jsx)(e3,{children:"차량 유류비 안내"}),(0,t.jsxs)(tl,{children:[(0,t.jsxs)(ta,{children:[(0,t.jsx)(td,{checked:m,onChange:()=>{i(e=>({...e,vehicleFuelCostNoticeGiven:!0}))}}),"완료"]}),(0,t.jsxs)(ta,{children:[(0,t.jsx)(td,{checked:!m,onChange:()=>{i(e=>({...e,vehicleFuelCostNoticeGiven:!1}))}}),"미완료"]})]})]})]}),(0,t.jsx)(e8,{}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:[(0,t.jsxs)(e3,{children:["접수일",(0,t.jsx)(ti,{})]}),(0,t.jsx)(o.default.Input.Date,{$autoFilled:e.firstRegisteredDate===v,style:S("firstRegisteredDate",ts),value:e.firstRegisteredDate??"",onChange:e=>{d("firstRegisteredDate"),A(e,(e,t)=>({...e,firstRegisteredDate:t}))}}),k("firstRegisteredDate")]}),(0,t.jsxs)(e5,{children:[(0,t.jsxs)(e3,{children:["계약일",(0,t.jsx)(ti,{})]}),(0,t.jsx)(o.default.Input.Date,{style:S("contractDate",ts),value:e.contractDate??"",onChange:e=>{d("contractDate"),A(e,(e,t)=>({...e,contractDate:t}))}}),k("contractDate")]}),(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"계약 시작일"}),(0,t.jsx)(o.default.Input.Date,{$autoFilled:D(h,n?.contractStartDate??""),style:S("contractStartDate",ts),value:h,onChange:e=>{(d("contractStartDate"),""===e.trim())?i(e=>({...e,contractStartDate:void 0})):A(e,(e,t)=>({...e,contractStartDate:t}))},showClearButton:!0}),k("contractStartDate")]}),(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"계약 종료일"}),(0,t.jsx)(o.default.Input.Date,{$autoFilled:D("DISABILITY_ACTIVITY_SUPPORT"===f?u:x,n?.contractEndDate??n?.serviceEndDate??""),style:"DISABILITY_ACTIVITY_SUPPORT"===f?ts:S("serviceEndDate",ts),value:"DISABILITY_ACTIVITY_SUPPORT"===f?"":x,disabled:"DISABILITY_ACTIVITY_SUPPORT"===f,onChange:e=>{"DISABILITY_ACTIVITY_SUPPORT"===f&&(d("contractEndDate"),A(e,(e,t)=>({...e,contractEndDate:t})))}}),"DISABILITY_ACTIVITY_SUPPORT"!==f&&k("serviceEndDate")]})]}),"DISABILITY_ACTIVITY_SUPPORT"!==f&&(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{$width:191,children:[(0,t.jsx)(e3,{children:"서비스 시작일"}),(0,t.jsx)(o.default.Input.Date,{$autoFilled:D(p,n?.serviceStartDate??""),style:S("serviceStartDate",ts),value:p,onChange:e=>{d("serviceStartDate"),A(e,(e,t)=>{let n=(e=>{let[t,n,i]=e.split("-"),l=new Date(Number(t),Number(n)-1,Number(i));l.setFullYear(l.getFullYear()+1),l.setDate(l.getDate()-1);let[a,d]=e1.default.create(l.getFullYear(),l.getMonth()+1,l.getDate());return null!==a||null===d?null:d})(t);return null===n?e:{...e,serviceStartDate:t,serviceEndDate:n}})}}),k("serviceStartDate")]}),(0,t.jsxs)(e5,{$width:191,children:[(0,t.jsx)(e3,{children:"서비스 종료일"}),(0,t.jsx)(o.default.Input.Date,{$autoFilled:D(x,n?.serviceEndDate??""),style:S("serviceEndDate",ts),value:x,onChange:e=>{d("serviceEndDate"),A(e,(e,t)=>({...e,serviceEndDate:t}))}}),k("serviceEndDate")]})]}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:[(0,t.jsxs)(e3,{children:["사업구분",(0,t.jsx)(ti,{})]}),(0,t.jsx)(o.default.Input.Select,{style:e9,value:c,disabled:!0,children:(0,t.jsx)("option",{value:c,children:z})})]}),(0,t.jsxs)(e5,{children:[(0,t.jsxs)(e3,{children:["서비스명",(0,t.jsx)(ti,{})]}),(0,t.jsx)(o.default.Input.Select,{style:e9,value:f,disabled:!0,children:(0,t.jsx)("option",{value:f,children:I})})]}),(0,t.jsxs)(e5,{children:[(0,t.jsxs)(e3,{children:["서비스코드",(0,t.jsx)(ti,{})]}),(0,t.jsx)(o.default.Input.Text,{style:e9,value:E,readOnly:!0})]}),(0,t.jsxs)(e5,{children:[(0,t.jsxs)(e3,{children:["서비스유형",(0,t.jsx)(ti,{})]}),(0,t.jsx)(o.default.Input.Select,{style:e9,value:f,disabled:!0,children:(0,t.jsx)("option",{value:f,children:T})})]})]})]})});function ti(){return(0,t.jsx)(to,{children:" *"})}let tl=l.default.div.withConfig({componentId:"zh__sc-2ea09a12-0"})`
  display: flex;
  gap: 16px;
  align-items: center;
  height: 36px;
`,ta=l.default.label.withConfig({componentId:"zh__sc-2ea09a12-1"})`
  cursor: pointer;

  display: inline-flex;
  gap: 8px;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,td=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-2ea09a12-2"})``,to=l.default.span.withConfig({componentId:"zh__sc-2ea09a12-3"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,tr=l.default.div.withConfig({componentId:"zh__sc-2ea09a12-4"})`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;

  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,ts={...e9,height:36,lineHeight:"36px"},tc=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-2ea09a12-5"})`
  &::placeholder {
    color: #0a0a0a;
  }
`;var tf=e.i(39635),th=e.i(10957),tu=e.i(58362),tp=e.i(12945),tx=e.i(41417),tg=e.i(97181),tm=e.i(17306),tb=e.i(49183),tj=e.i(86544),t_=e.i(85754),tw=e.i(38535),ty=e.i(5564),tv=e.i(79786);let tC=[["1구간","8,293,000","면제","20,000","216,200","216,200","216,200","216,200"],["2구간","7,774,000","면제","20,000","216,200","216,200","216,200","216,200"],["3구간","7,257,000","면제","20,000","216,200","216,200","216,200","216,200"],["4구간","6,739,000","면제","20,000","216,200","216,200","216,200","216,200"],["5구간","6,221,000","면제","20,000","216,200","216,200","216,200","216,200"],["6구간","5,703,000","면제","20,000","216,200","216,200","216,200","216,200"],["7구간","5,181,000","면제","20,000","207,200","216,200","216,200","216,200"],["8구간","4,665,000","면제","20,000","186,600","216,200","216,200","216,200"],["9구간","4,148,000","면제","20,000","165,900","216,200","216,200","216,200"],["10구간","3,629,000","면제","20,000","145,100","216,200","216,200","216,200"],["11구간","3,112,000","면제","20,000","124,400","186,700","216,200","216,200"],["12구간","2,593,000","면제","20,000","103,700","155,500","207,400","216,200"],["13구간","2,076,000","면제","20,000","83,000","124,500","166,000","207,600"],["14구간","1,558,000","면제","20,000","62,300","93,400","124,600","155,800"],["15구간","1,040,000","면제","20,000","41,600","62,400","83,200","104,000"],["특례","7,257,000","면제","20,000","29,300","44,000","58,700","73,400"]],tI={TYPE_A:2,TYPE_B:3,TYPE_C:4,TYPE_D:5,TYPE_E:6,TYPE_F:7},tz=["1인가구","취약가구","출산가구","자립준비","학교생활","직장생활","보호자 일시 부재","나머지 가구구성원의 직장생활 등"],tT=["MON","TUE","WED","THU","FRI","SAT","SUN"],tE=[["ministryDeterminedHours","보건복지부"],["metroDeterminedHours","광역지자체"],["basicDeterminedHours","기초지자체"],["otherDeterminedHours","기타"]],tS=new Set(ty.DISABILITY_ACTIVITY_SUPPORT_BASIC_GRADES),tk="SPECIAL";function tD(e){return e in tv.default}let tA=(0,n.observer)(function(){let{clientDraft:e,ocrDraft:n,updateClientDraft:l,getClientDraftFieldError:d,clearClientDraftFieldError:r}=a.default.modal.clientCreate,[s,c]=(0,i.useState)(e?.serviceGrade?.startsWith("SPECIAL")===!0),[f,h]=(0,i.useState)(e?.serviceGrade?.startsWith("SPECIAL")===!0?e.serviceGrade.replace("SPECIAL",""):"");if(null===e)return null;let u=e.serviceGrade??th.default.SELECT_EMPTY_VALUE,p=s||u.startsWith("SPECIAL"),x=u.startsWith("SPECIAL")?u.replace("SPECIAL",""):f,g=(e,t)=>void 0!==t&&e===t,m=p&&g(u,n?.serviceGrade),b=e.incomeCategory??th.default.SELECT_EMPTY_VALUE,j=e.benefitDecisionPeriod??"",_=e.copaymentAmount??"",w=e.virtualAccountNumber??"",y=e.additionalBenefitTypes??[],v=e.workplace??"",C=e.schoolName??"",I=e.schoolStartTime??"",z=e.schoolEndTime??"",T=e.schoolDays??[],E=e.careCenterName??"",S=e.careCenterStartTime??"",k=e.careCenterEndTime??"",D=e.careCenterDays??[],A=e.primaryDisabilityName??"",$=e.primaryDisabilityGrade??"",R=e.primaryDisabilitySeverity??"",O=e.secondaryDisabilityName??"",L=e.secondaryDisabilityGrade??"",P=e.secondaryDisabilitySeverity??"",N=e.chronicDiseaseNames??"",M=e.medicationInfo??"",F=e.communicationStatusDetail??"",B=e.familyStatusDetail??"",U=a.default.data.serviceWorker.list,Y=U.data??[],W=e=>{l(t=>{let n={...t,...e},i=function(e,t){if(null===e||null===t)return null;let n=e.startsWith("SPECIAL")?"특례":`${e}구간`,i=tC.find(e=>e[0]===n);if(void 0===i)return null;let l=i[tI[t]];if(void 0===l)return null;let a="면제"===l?0:Number(l.replaceAll(",","")),d=Number(i[1].replaceAll(",",""));return Number.isNaN(a)||Number.isNaN(d)?null:{copaymentAmount:a,monthlyLimitAmount:d}}(n.serviceGrade??null,n.incomeCategory??null);return null!==i&&r("copaymentAmount"),{...n,copaymentAmount:null===i?void 0:String(i.copaymentAmount)}})},V=(e,t)=>""===d(e)?t:{...t,borderColor:"#ff4d4f",background:"#fff5f5"},H=e=>{let n=d(e);return""===n?null:(0,t.jsx)(tP,{"data-client-create-field-error":"true",children:n})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e6,{children:"계좌∙자격 및 기타 정보"}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:[(0,t.jsxs)(e3,{children:["활동지원급여 구간 ",(0,t.jsx)(tL,{})]}),(0,t.jsxs)(tN,{$isEmptySelected:!p&&u===th.default.SELECT_EMPTY_VALUE,$autoFilled:m||g(u,n?.serviceGrade),value:p?tk:u,onChange:e=>{let t=e.target.value;if(r("serviceGrade"),r("isSpecialGradeSelected"),t===tk){c(!0),W({isSpecialGradeSelected:!0,serviceGrade:void 0});return}tS.has(t)&&(c(!1),h(""),W({isSpecialGradeSelected:!1,serviceGrade:t}))},style:V("serviceGrade",e9),children:[(0,t.jsx)("option",{value:th.default.SELECT_EMPTY_VALUE,disabled:!0,children:"구간을 입력해주세요."}),ty.DISABILITY_ACTIVITY_SUPPORT_BASIC_GRADES.map(e=>(0,t.jsxs)("option",{value:e,children:[e,"구간"]},e)),(0,t.jsx)("option",{value:tk,children:"특례"})]}),H("serviceGrade")]}),(0,t.jsxs)(e5,{children:[(0,t.jsxs)(e3,{children:["특례 구간 ",(0,t.jsx)(tL,{})]}),(0,t.jsx)(o.default.Input.Text,{$autoFilled:m,value:x,disabled:!p,onChange:e=>{let t=e.target.value;if(r("isSpecialGradeSelected"),""!==t&&!/^([1-9]\d{0,2}|1000)$/.test(t))return;let n=function(e){if(/^([1-9]\d{0,2}|1000)$/.test(e))return`SPECIAL${e}`}(t);h(t),W({isSpecialGradeSelected:!0,serviceGrade:n})},placeholder:"숫자를 입력하세요.",inputMode:"numeric",maxLength:4,style:V("isSpecialGradeSelected",e9)}),H("isSpecialGradeSelected")]}),(0,t.jsxs)(e5,{$width:398,children:[(0,t.jsxs)(e3,{children:["소득 유형 ",(0,t.jsx)(tL,{})]}),(0,t.jsxs)(tN,{$isEmptySelected:b===th.default.SELECT_EMPTY_VALUE,$autoFilled:g(b,n?.incomeCategory),value:b,onChange:e=>{let t=e.target.value;r("incomeCategory"),tD(t)&&W({incomeCategory:t})},style:V("incomeCategory",e9),children:[(0,t.jsx)("option",{value:th.default.SELECT_EMPTY_VALUE,disabled:!0,children:"유형을 선택해주세요."}),Object.keys(tv.default).filter(tD).map(e=>(0,t.jsx)("option",{value:e,children:tv.default[e].label},e))]}),H("incomeCategory")]})]}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"수급결정시기"}),(0,t.jsx)(o.default.Input.Date,{value:j,onChange:e=>{""===e?l(e=>({...e,benefitDecisionPeriod:void 0})):e1.default.is(e)&&l(t=>({...t,benefitDecisionPeriod:e}))},style:{...e9,width:"100%",height:36}})]}),(0,t.jsxs)(e5,{children:[(0,t.jsxs)(e3,{children:["본인부담금(원) ",(0,t.jsx)(tL,{})]}),(0,t.jsx)(o.default.Input.Money,{value:_,onChange:e=>{r("copaymentAmount"),l(t=>({...t,copaymentAmount:e}))},placeholder:"00,000",style:V("copaymentAmount",e9)}),H("copaymentAmount")]}),(0,t.jsxs)(e5,{$width:398,children:[(0,t.jsxs)(e3,{children:["가상계좌 ",(0,t.jsx)(tL,{})]}),(0,t.jsx)(o.default.Input.Text,{$autoFilled:g(w,n?.virtualAccountNumber),value:w,onChange:e=>{r("virtualAccountNumber"),l(t=>({...t,virtualAccountNumber:e.target.value}))},placeholder:"가상계좌를 입력해주세요.",inputMode:"numeric",style:V("virtualAccountNumber",e9)}),H("virtualAccountNumber")]})]}),(0,t.jsx)(e4,{children:(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"추가급여대상 여부"}),(0,t.jsx)(tM,{children:tz.map(e=>(0,t.jsxs)(tK,{children:[(0,t.jsx)(tq,{checked:y.includes(e),onChange:()=>{let t=y.includes(e)?y.filter(t=>t!==e):[...y,e];l(e=>({...e,additionalBenefitTypes:t}))}}),(0,t.jsx)(tX,{children:e})]},e))})]})}),(0,t.jsx)(e4,{children:(0,t.jsxs)(e5,{$width:193,children:[(0,t.jsx)(e3,{children:"연결할 제공인력"}),(0,t.jsxs)(tN,{$isEmptySelected:void 0===e.serviceWorkerId,value:e.serviceWorkerId??th.default.SELECT_EMPTY_VALUE,disabled:a.default.modal.clientCreate.isServiceMatchingRegistration,onOpenChange:t=>{t&&(U.setQuery({serviceType:e.serviceType,regions:e.desiredRegions,times:e.desiredServiceTimes,status:"ACTIVE"}),U.refetch())},onChange:e=>{r("serviceWorkerId"),l(t=>({...t,serviceWorkerId:e.target.value===th.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:V("serviceWorkerId",e9),children:[(0,t.jsx)("option",{value:th.default.SELECT_EMPTY_VALUE,"data-trigger-label":"제공인력을 선택하세요.",children:"loading"===U.status?"조회 중...":"선택안함"}),null!==a.default.modal.clientCreate.matchingServiceWorkerName&&Y.every(t=>t.id!==e.serviceWorkerId)&&(0,t.jsx)("option",{value:e.serviceWorkerId,children:a.default.modal.clientCreate.matchingServiceWorkerName}),Y.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]}),H("serviceWorkerId")]})}),(0,t.jsx)(e6,{children:"직장 및 학교"}),(0,t.jsx)(e4,{children:(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"직장"}),(0,t.jsx)(o.default.Input.Text,{value:v,onChange:e=>{l(t=>({...t,workplace:e.target.value}))},placeholder:"직장명을 입력하세요.",style:e9})]})}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{$width:395,children:[(0,t.jsx)(e3,{children:"학교명"}),(0,t.jsx)(o.default.Input.Text,{value:C,onChange:e=>{l(t=>({...t,schoolName:e.target.value}))},placeholder:"학교명을 입력하세요.",style:e9})]}),(0,t.jsxs)(e5,{$width:190,children:[(0,t.jsx)(e3,{children:"시작 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:I,onChange:e=>{r("schoolStartTime"),l(t=>({...t,schoolStartTime:e}))},style:V("schoolStartTime",e9),placeholder:"00:00"}),H("schoolStartTime")]}),(0,t.jsx)(tJ,{children:"~"}),(0,t.jsxs)(e5,{$width:190,children:[(0,t.jsx)(e3,{children:"종료 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:z,onChange:e=>{r("schoolEndTime"),l(t=>({...t,schoolEndTime:e}))},style:V("schoolEndTime",e9),placeholder:"00:00"}),H("schoolEndTime")]})]}),(0,t.jsx)(tR,{label:"등교 요일",selectedDays:T,onChange:e=>l(t=>({...t,schoolDays:e}))}),(0,t.jsx)(e6,{children:"주단기보호센터"}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{$width:395,children:[(0,t.jsx)(e3,{children:"주단기보호센터명"}),(0,t.jsx)(o.default.Input.Text,{value:E,onChange:e=>{l(t=>({...t,careCenterName:e.target.value}))},placeholder:"센터명을 입력하세요.",style:e9})]}),(0,t.jsx)(t$,{label:"시작 시간",value:S,errorMessage:d("careCenterStartTime"),onChange:e=>{r("careCenterStartTime"),l(t=>({...t,careCenterStartTime:e}))}}),(0,t.jsx)(tJ,{children:"~"}),(0,t.jsx)(t$,{label:"종료 시간",value:k,errorMessage:d("careCenterEndTime"),onChange:e=>{r("careCenterEndTime"),l(t=>({...t,careCenterEndTime:e}))}})]}),(0,t.jsx)(tR,{label:"등원 요일",selectedDays:D,onChange:e=>l(t=>({...t,careCenterDays:e}))}),(0,t.jsx)(e6,{children:"판정시간"}),(0,t.jsx)(e4,{children:tE.map(([n,i])=>(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:i}),(0,t.jsxs)(tU,{children:[(0,t.jsx)(o.default.Input.Text,{value:e[n]??"",onChange:e=>{let t=e.target.value;l(e=>({...e,[n]:""===t?void 0:Number(t)}))},placeholder:"00",inputMode:"numeric",style:{...e9,width:140,textAlign:"center"}}),(0,t.jsx)(tY,{children:"시간"})]})]},n))}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:[(0,t.jsxs)(e3,{children:["주장애명 ",(0,t.jsx)(tL,{})]}),(0,t.jsxs)(tN,{$isEmptySelected:""===A,value:A||th.default.SELECT_EMPTY_VALUE,onChange:e=>{r("primaryDisabilityName"),l(t=>({...t,primaryDisabilityName:e.target.value===th.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:V("primaryDisabilityName",e9),children:[(0,t.jsx)("option",{value:th.default.SELECT_EMPTY_VALUE,"data-trigger-label":"주장애명을 선택해주세요.",children:"선택안함"}),Object.entries(tj.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]}),H("primaryDisabilityName")]}),(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"장애급수"}),(0,t.jsxs)(tN,{$isEmptySelected:""===$,value:$||th.default.SELECT_EMPTY_VALUE,onChange:e=>{l(t=>({...t,primaryDisabilityGrade:e.target.value===th.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:e9,children:[(0,t.jsx)("option",{value:th.default.SELECT_EMPTY_VALUE,"data-trigger-label":"장애급수를 선택해주세요.",children:"선택안함"}),Object.entries(tb.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]}),(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"주장애 장애정도"}),(0,t.jsxs)(tN,{$isEmptySelected:""===R,value:R||th.default.SELECT_EMPTY_VALUE,onChange:e=>{l(t=>({...t,primaryDisabilitySeverity:e.target.value===th.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:e9,children:[(0,t.jsx)("option",{value:th.default.SELECT_EMPTY_VALUE,"data-trigger-label":"주장애 장애정도를 선택해주세요.",children:"선택안함"}),Object.entries(t_.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]})]}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"부장애명"}),(0,t.jsxs)(tN,{$isEmptySelected:""===O,value:O||th.default.SELECT_EMPTY_VALUE,onChange:e=>{l(t=>({...t,secondaryDisabilityName:e.target.value===th.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:e9,children:[(0,t.jsx)("option",{value:th.default.SELECT_EMPTY_VALUE,"data-trigger-label":"부장애명을 선택해주세요.",children:"선택안함"}),Object.entries(tj.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]}),(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"장애급수"}),(0,t.jsxs)(tN,{$isEmptySelected:""===L,value:L||th.default.SELECT_EMPTY_VALUE,onChange:e=>{l(t=>({...t,secondaryDisabilityGrade:e.target.value===th.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:e9,children:[(0,t.jsx)("option",{value:th.default.SELECT_EMPTY_VALUE,"data-trigger-label":"장애급수를 선택해주세요.",children:"선택안함"}),Object.entries(tb.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]}),(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"부장애 장애정도"}),(0,t.jsxs)(tN,{$isEmptySelected:""===P,value:P||th.default.SELECT_EMPTY_VALUE,onChange:e=>{l(t=>({...t,secondaryDisabilitySeverity:e.target.value===th.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:e9,children:[(0,t.jsx)("option",{value:th.default.SELECT_EMPTY_VALUE,"data-trigger-label":"부장애 장애정도를 선택해주세요.",children:"선택안함"}),Object.entries(t_.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]})]}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"보유질환명"}),(0,t.jsx)(o.default.Input.Text,{value:N,onChange:e=>l(t=>({...t,chronicDiseaseNames:e.target.value})),placeholder:"보유질환에 대해 입력해주세요.",style:e9})]}),(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"투약정보"}),(0,t.jsx)(o.default.Input.Text,{value:M,onChange:e=>l(t=>({...t,medicationInfo:e.target.value})),placeholder:"투약정보에 대해 입력해주세요.",style:e9})]})]}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(tO,{label:"외상장애 여부",name:"hasTraumaDisability",width:158,options:[["NOT_APPLICABLE","미해당"],["APPLICABLE","해당"]],value:!0===e.hasTraumaDisability?"APPLICABLE":"NOT_APPLICABLE",onChange:e=>l(t=>({...t,hasTraumaDisability:"APPLICABLE"===e}))}),(0,t.jsx)(tO,{label:"의사소통",name:"communicationStatus",width:443,options:[[tg.default.POSSIBLE,"가능"],[tg.default.IMPOSSIBLE,"불가능"],[tg.default.OTHER,"기타"]],value:e.communicationStatus??tg.default.POSSIBLE,onChange:e=>l(t=>({...t,communicationStatus:e,...e===tg.default.OTHER?{}:{communicationStatusDetail:void 0}})),otherValue:F,onOtherChange:e=>l(t=>({...t,communicationStatusDetail:e}))}),(0,t.jsx)(tO,{label:"휠체어 유무",name:"hasWheelchair",width:116,options:[["AVAILABLE","유"],["UNAVAILABLE","무"]],value:!1===e.hasWheelchair?"UNAVAILABLE":"AVAILABLE",onChange:e=>l(t=>({...t,hasWheelchair:"AVAILABLE"===e}))})]}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(tO,{label:"결혼여부",name:"isMarried",options:[["SINGLE","미혼"],["MARRIED","기혼"]],width:144,value:!0===e.isMarried?"MARRIED":"SINGLE",onChange:e=>l(t=>({...t,isMarried:"MARRIED"===e}))}),(0,t.jsx)(tO,{label:"가족사항",name:"familyStatus",options:[[tw.default.ALONE,"독거"],[tw.default.COUPLE,"부부"],[tw.default.SINGLE_PARENT,"한부모"],[tw.default.OTHER,"기타"]],width:530,value:e.familyStatus??tw.default.ALONE,onChange:e=>l(t=>({...t,familyStatus:e,...e===tw.default.OTHER?{}:{familyStatusDetail:void 0}})),otherValue:B,onOtherChange:e=>l(t=>({...t,familyStatusDetail:e}))})]})]})});function t$({label:e,value:n,errorMessage:i,onChange:l}){return(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:e}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:n,onChange:l,placeholder:"00:00",style:""===i?e9:{...e9,borderColor:"#ff4d4f",background:"#fff5f5"}}),""!==i?(0,t.jsx)(tP,{"data-client-create-field-error":"true",children:i}):null]})}function tR({label:e,selectedDays:n,onChange:i}){return(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:e}),(0,t.jsx)(tF,{children:tT.map(e=>(0,t.jsxs)(tB,{children:[(0,t.jsx)(tq,{checked:n.includes(e),onChange:()=>i(n.includes(e)?n.filter(t=>t!==e):[...n,e])}),(0,t.jsx)(tX,{children:tm.default[e].label})]},e))})]})}function tO({label:e,name:n,width:i,options:l,value:a,onChange:d,required:r=!1,otherValue:s,onOtherChange:c}){return(0,t.jsxs)(tW,{$width:i,children:[(0,t.jsxs)(e3,{children:[e," ",r&&(0,t.jsx)(tL,{})]}),(0,t.jsx)(tV,{children:l.map(([e,i])=>(0,t.jsxs)(tH,{children:[(0,t.jsx)(tG,{type:"radio",name:n,value:e,checked:a===e,onChange:()=>d(e)}),(0,t.jsx)(tX,{children:i}),"OTHER"===e&&c&&(0,t.jsx)(o.default.Input.Text,{value:s??"",disabled:a!==e,onChange:e=>c(e.target.value),placeholder:"관련 내용을 입력해주세요.",style:{...e9,width:193}})]},e))})]})}function tL(){return(0,t.jsx)(tQ,{children:" *"})}let tP=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-0"})`
  margin-top: 4px;
  font-size: 12px;
  color: #e7000b;
`,tN=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-d7ceea08-1"})`
  color: ${({$autoFilled:e,$isEmptySelected:t})=>!0===e?"#4f39f6":t?"#9ca3af":"#0a0a0a"};
  background: ${({$autoFilled:e})=>!0===e?"#f4f2ff":"#fff"};
`,tM=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  align-items: center;
`,tF=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-3"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;

  padding: 4px 0;
`,tB=l.default.label.withConfig({componentId:"zh__sc-d7ceea08-4"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,tU=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-5"})`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`,tY=l.default.span.withConfig({componentId:"zh__sc-d7ceea08-6"})`
  flex-shrink: 0;
  font-size: 16px;
  color: #000;
`,tW=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-7"})`
  display: flex;
  flex: ${({$width:e})=>void 0===e?1:"none"};
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  width: ${({$width:e})=>void 0===e?"auto":`${e}px`};
  min-width: 0;
`,tV=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-8"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;

  min-height: 36px;
`,tH=l.default.label.withConfig({componentId:"zh__sc-d7ceea08-9"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  min-height: 36px;
`,tG=l.default.input.withConfig({componentId:"zh__sc-d7ceea08-10"})`
  flex-shrink: 0;

  width: 24px;
  height: 24px;
  margin: 0;

  accent-color: #256ef4;
`,tK=l.default.label.withConfig({componentId:"zh__sc-d7ceea08-11"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,tX=l.default.span.withConfig({componentId:"zh__sc-d7ceea08-12"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,tq=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-d7ceea08-13"})`
  width: 24px;
  height: 24px;
`,tQ=l.default.span.withConfig({componentId:"zh__sc-d7ceea08-14"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,tJ=l.default.span.withConfig({componentId:"zh__sc-d7ceea08-15"})`
  align-self: flex-start;
  padding-top: 28px;
  font-size: 16px;
  color: #000;
`,tZ=()=>a.default.ui.serviceRegion.codes,t0=["PHYSICAL_ACTIVITY_SUPPORT","HOUSEKEEPING_SUPPORT","SOCIAL_ACTIVITY_SUPPORT","OTHER"],t1=["MALE","FEMALE"],t2=["TWENTIES_OR_YONGER","THIRTIES","FORTIES","FIFTIES","SIXTIES","SEVENTIES_OR_OLDER"],t6=(0,n.observer)(function(){let{clientDraft:e,updateClientDraft:n,getClientDraftFieldError:i,clearClientDraftFieldError:l}=a.default.modal.clientCreate;if(null===e)return null;let d=e.desiredServiceHours,r=e.desiredRegions??[],s=e.desiredCareTypes??[],c=e.desiredServiceWorkerGender,f=e.desiredAgeRanges??[],h="DISABILITY_ACTIVITY_SUPPORT"===e.serviceType,u=tZ().every(e=>r.includes(e)),p=t0.every(e=>s.some(t=>t.careType===e)),x=t2.every(e=>f.includes(e));return(0,t.jsxs)(t5,{children:[(0,t.jsxs)(t9,{children:[(0,t.jsxs)(t8,{children:["서비스 희망 시간",h&&(0,t.jsx)(t4,{})]}),(0,t.jsxs)(ne,{children:[(0,t.jsx)(tf.default,{sx:{fontSize:20}}),(0,t.jsx)(nt,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]})]}),(0,t.jsx)(nn,{value:e.desiredServiceTimes,onChange:e=>{l("desiredServiceTimes"),n(t=>({...t,desiredServiceTimes:e.target.value}))}}),""!==i("desiredServiceTimes")&&(0,t.jsx)(nr,{"data-client-create-field-error":"true",children:i("desiredServiceTimes")}),(0,t.jsxs)(ni,{children:[(0,t.jsx)(nl,{children:"희망 서비스 시간"}),(0,t.jsxs)(na,{children:[(0,t.jsx)(no,{children:"총"}),(0,t.jsx)(nd,{value:void 0===d?"":String(d),placeholder:"00",maxLength:2,onChange:e=>{let t=e.target.value.replace(/\D/g,"");n(e=>({...e,desiredServiceHours:""===t?void 0:Math.min(Number(t),99)}))}}),(0,t.jsx)(no,{children:"시간"})]})]}),(0,t.jsxs)(ns,{children:[(0,t.jsxs)(nc,{children:["서비스 희망 지역 (복수 선택 가능)",h&&(0,t.jsx)(t4,{})]}),(0,t.jsxs)(nf,{children:[(0,t.jsxs)(nu,{children:[(0,t.jsx)(n_,{checked:u,onChange:()=>{l("desiredRegions"),n(e=>({...e,desiredRegions:u?[]:tZ()}))}}),(0,t.jsx)(ng,{children:"전체 선택"})]},th.default.CHECK_ALL_VALUE),tZ().map(e=>(0,t.jsxs)(nu,{children:[(0,t.jsx)(n_,{checked:r.includes(e),onChange:()=>{l("desiredRegions"),n(t=>({...t,desiredRegions:r.includes(e)?r.filter(t=>t!==e):[...r,e]}))}}),(0,t.jsx)(ng,{children:a.default.ui.serviceRegion.label(e)})]},e))]}),""!==i("desiredRegions")&&(0,t.jsx)(nr,{"data-client-create-field-error":"true",children:i("desiredRegions")})]}),h&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ns,{children:[(0,t.jsxs)(nc,{children:["희망 활동 내용 (복수 선택 가능)",(0,t.jsx)(t4,{})]}),(0,t.jsxs)(nh,{children:[(0,t.jsxs)(nu,{children:[(0,t.jsx)(n_,{checked:p,onChange:()=>{l("desiredCareTypes"),n(e=>({...e,desiredCareTypes:p?[]:t0.map(e=>s.find(t=>t.careType===e)??{careType:e})}))}}),(0,t.jsx)(ng,{children:"전체 선택"})]}),t0.map(e=>{let i=s.find(t=>t.careType===e);return(0,t.jsxs)(np,{children:[(0,t.jsxs)(nu,{children:[(0,t.jsx)(n_,{checked:void 0!==i,onChange:()=>{l("desiredCareTypes"),n(t=>({...t,desiredCareTypes:s.some(t=>t.careType===e)?s.filter(t=>t.careType!==e):[...s,{careType:e}]}))}}),(0,t.jsx)(ng,{children:"PHYSICAL_ACTIVITY_SUPPORT"===e?"신체 활동":tx.default[e].label.replace("활동"," 활동")})]}),(0,t.jsx)(nx,{style:e9,disabled:void 0===i,value:i?.detail??"",onChange:t=>{n(n=>({...n,desiredCareTypes:(n.desiredCareTypes??[]).map(n=>n.careType===e?{...n,detail:t.target.value}:n)}))},placeholder:"관련 내용을 입력해주세요."})]},e)})]}),""!==i("desiredCareTypes")&&(0,t.jsx)(nr,{"data-client-create-field-error":"true",children:i("desiredCareTypes")})]}),(0,t.jsxs)(ns,{children:[(0,t.jsxs)(nc,{children:["제공인력 희망 성별",(0,t.jsx)(t4,{})]}),(0,t.jsxs)(nf,{children:[(0,t.jsxs)(nu,{children:[(0,t.jsx)(o.default.Input.Radio,{name:"desired-service-worker-gender",checked:null===c,onChange:()=>{n(e=>({...e,desiredServiceWorkerGender:null}))}}),(0,t.jsx)(ng,{children:"전체 선택"})]}),t1.map(e=>(0,t.jsxs)(nu,{children:[(0,t.jsx)(o.default.Input.Radio,{name:"desired-service-worker-gender",checked:c===e,onChange:()=>{n(t=>({...t,desiredServiceWorkerGender:e}))}}),(0,t.jsx)(ng,{children:tp.default[e].label})]},e))]}),""!==i("desiredServiceWorkerGender")&&(0,t.jsx)(nr,{"data-client-create-field-error":"true",children:i("desiredServiceWorkerGender")})]}),(0,t.jsxs)(ns,{children:[(0,t.jsxs)(nc,{children:["제공인력 희망 연령 (복수 선택 가능)",(0,t.jsx)(t4,{})]}),(0,t.jsxs)(nf,{children:[(0,t.jsxs)(nu,{children:[(0,t.jsx)(n_,{checked:x,onChange:()=>{n(e=>({...e,desiredAgeRanges:x?[]:t2}))}}),(0,t.jsx)(ng,{children:"전체 선택"})]}),t2.map(e=>(0,t.jsxs)(nu,{children:[(0,t.jsx)(n_,{checked:f.includes(e),onChange:()=>{l("desiredAgeRanges"),n(t=>({...t,desiredAgeRanges:f.includes(e)?f.filter(t=>t!==e):[...f,e]}))}}),(0,t.jsx)(ng,{children:"TWENTIES_OR_YONGER"===e||"SEVENTIES_OR_OLDER"===e?tu.default[e].label.replace(" 이하","").replace(" 이상",""):tu.default[e].label})]},e))]}),""!==i("desiredAgeRanges")&&(0,t.jsx)(nr,{"data-client-create-field-error":"true",children:i("desiredAgeRanges")})]}),h&&a.default.modal.clientCreate.isContractInputMode&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(t3,{}),(0,t.jsx)(tA,{})]}),(0,t.jsxs)(ns,{children:[(0,t.jsx)(nc,{children:"(타기관) 이용경험"}),(0,t.jsx)(nm,{value:e.usageExperience??"",onChange:e=>{n(t=>({...t,usageExperience:e.target.value}))},placeholder:"텍스트를 입력해주세요."})]}),(0,t.jsxs)(ns,{children:[(0,t.jsx)(nc,{children:"특이사항 (장애특성 및 일상생활)"}),(0,t.jsx)(nb,{value:e.dailyLivingNotes??"",onChange:e=>{n(t=>({...t,dailyLivingNotes:e.target.value}))},placeholder:"특이사항을 입력해주세요."})]}),(0,t.jsxs)(ns,{children:[(0,t.jsx)(nc,{children:"종합소견"}),(0,t.jsx)(nj,{value:e.comprehensiveOpinion??"",onChange:e=>{n(t=>({...t,comprehensiveOpinion:e.target.value}))},placeholder:"종합소견을 입력해주세요."})]})]})]})});function t4(){return(0,t.jsx)(t7,{children:" *"})}let t5=l.default.div.withConfig({componentId:"zh__sc-51651a13-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,t3=l.default.div.withConfig({componentId:"zh__sc-51651a13-1"})`
  flex-shrink: 0;
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,t9=l.default.div.withConfig({componentId:"zh__sc-51651a13-2"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;

  height: 30px;
`,t8=l.default.div.withConfig({componentId:"zh__sc-51651a13-3"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,t7=l.default.span.withConfig({componentId:"zh__sc-51651a13-4"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,ne=l.default.div.withConfig({componentId:"zh__sc-51651a13-5"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;

  color: #464c53;
`,nt=l.default.div.withConfig({componentId:"zh__sc-51651a13-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
`,nn=(0,l.default)(o.default.Input.TimeSlider).withConfig({componentId:"zh__sc-51651a13-7"})`
  align-self: stretch;
`,ni=l.default.div.withConfig({componentId:"zh__sc-51651a13-8"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,nl=l.default.div.withConfig({componentId:"zh__sc-51651a13-9"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,na=l.default.div.withConfig({componentId:"zh__sc-51651a13-10"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,nd=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-51651a13-11"})`
  width: 59px;
  height: 36px;
  text-align: center;
`,no=l.default.div.withConfig({componentId:"zh__sc-51651a13-12"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,nr=l.default.div.withConfig({componentId:"zh__sc-51651a13-13"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,ns=l.default.div.withConfig({componentId:"zh__sc-51651a13-14"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,nc=l.default.div.withConfig({componentId:"zh__sc-51651a13-15"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,nf=l.default.div.withConfig({componentId:"zh__sc-51651a13-16"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  align-items: center;
`,nh=(0,l.default)(nf).withConfig({componentId:"zh__sc-51651a13-17"})`
  row-gap: 8px;
`,nu=l.default.label.withConfig({componentId:"zh__sc-51651a13-18"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,np=l.default.div.withConfig({componentId:"zh__sc-51651a13-19"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,nx=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-51651a13-20"})`
  width: 220px;
`,ng=l.default.span.withConfig({componentId:"zh__sc-51651a13-21"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,nm=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-51651a13-22"})`
  resize: vertical;

  width: 100%;
  min-height: 100px;
  padding: 12px 16px;

  font-size: 16px;
`,nb=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-51651a13-23"})`
  width: 100%;
  padding: 4px 16px;
  font-size: 16px;
`,nj=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-51651a13-24"})`
  resize: vertical;

  width: 100%;
  min-height: 156px;
  padding: 12px 16px;

  font-size: 16px;
`,n_=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-51651a13-25"})`
  width: 24px;
  height: 24px;
`,nw=(0,n.observer)(function(){let{clientDraft:e,ocrDraft:n,updateClientDraft:i,getClientDraftFieldError:l,clearClientDraftFieldError:d}=a.default.modal.clientCreate;if(null===e||"DISABILITY_ACTIVITY_SUPPORT"===e.serviceType||!a.default.modal.clientCreate.isContractInputMode)return null;let o=e.serviceGrade??th.default.SELECT_EMPTY_VALUE,r=l("serviceGrade"),s=""===r?e9:{...e9,borderColor:"#ff4d4f",background:"#fff5f5"};return(0,t.jsxs)(e5,{$width:181,children:[(0,t.jsxs)(e3,{children:["바우처 등급",(0,t.jsx)(ny,{})]}),(0,t.jsxs)(nC,{$isEmptySelected:o===th.default.SELECT_EMPTY_VALUE,$autoFilled:o===(n?.serviceGrade??""),style:s,value:o,onChange:e=>{d("serviceGrade");let t=e.target.value;if(t===th.default.SELECT_EMPTY_VALUE)return void i(e=>({...e,serviceGrade:void 0}));switch(t){case"1":case"2":case"3":case"4":i(e=>({...e,serviceGrade:t}));return;default:return}},children:[(0,t.jsx)("option",{value:th.default.SELECT_EMPTY_VALUE,disabled:!0,children:"등급을 선택해주세요."}),(0,t.jsx)("option",{value:"1",children:"1등급"}),(0,t.jsx)("option",{value:"2",children:"2등급"}),(0,t.jsx)("option",{value:"3",children:"3등급"}),(0,t.jsx)("option",{value:"4",children:"4등급"})]}),""!==r&&(0,t.jsx)(nI,{"data-client-create-field-error":"true",children:r})]})});function ny(){return(0,t.jsx)(nv,{children:" *"})}let nv=l.default.span.withConfig({componentId:"zh__sc-238b45fe-0"})`
  font-size: 16px;
  font-weight: 400;
  color: #e7000b;
`,nC=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-238b45fe-1"})`
  color: ${({$autoFilled:e,$isEmptySelected:t})=>!0===e?"#4f39f6":t?"#9ca3af":"#0a0a0a"};
  background: ${({$autoFilled:e})=>!0===e?"#f4f2ff":"#fff"};
`,nI=l.default.div.withConfig({componentId:"zh__sc-238b45fe-2"})`
  margin-top: 4px;
  font-size: 12px;
  color: #e7000b;
`,nz=(0,n.observer)(function(){let{clientDraft:e,isServiceMatchingRegistration:n,matchingServiceWorkerName:i,updateClientDraft:l}=a.default.modal.clientCreate,d=a.default.data.serviceWorker.list,o=e?.contractStartDate??"",r=d.data??[];return e?.serviceType==="DISABILITY_ACTIVITY_SUPPORT"?null:(0,t.jsxs)(nT,{children:[(0,t.jsx)(nE,{children:"연결할 제공인력"}),(0,t.jsxs)(nk,{$isEmptySelected:e?.serviceWorkerId===void 0,style:nS,value:e?.serviceWorkerId??th.default.SELECT_EMPTY_VALUE,disabled:n||""===o,onOpenChange:t=>{t&&null!==e&&(d.setQuery({serviceType:e.serviceType,regions:e.desiredRegions,times:e.desiredServiceTimes,status:"ACTIVE"}),d.refetch())},onChange:e=>{l(t=>({...t,serviceWorkerId:e.target.value===th.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},children:[(0,t.jsx)("option",{value:th.default.SELECT_EMPTY_VALUE,"data-trigger-label":"제공인력을 선택하세요.",children:"loading"===d.status?"조회 중...":"선택안함"}),null!==i&&r.every(t=>t.id!==e?.serviceWorkerId)&&(0,t.jsx)("option",{value:e?.serviceWorkerId,children:i}),r.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]})}),nT=l.default.div.withConfig({componentId:"zh__sc-fe78af34-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  width: 181px;
  min-height: 59px;
`,nE=l.default.div.withConfig({componentId:"zh__sc-fe78af34-1"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
`,nS={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"0 0 auto",fontSize:16,width:200,height:36},nk=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-fe78af34-2"})`
  min-height: 36px;
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,nD=(0,n.observer)(function(){let e=a.default.modal.clientCreate.clientDraft,n=e?.serviceType==="DISABILITY_ACTIVITY_SUPPORT",i=a.default.modal.clientCreate.isContractInputMode;return(0,t.jsxs)(nA,{children:[(0,t.jsx)(n$,{children:"이용자 기본 정보"}),(0,t.jsx)(tn,{}),(0,t.jsx)(nR,{}),(0,t.jsx)(t6,{}),!n&&i&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(nR,{}),(0,t.jsxs)(nO,{children:[(0,t.jsx)(nw,{}),(0,t.jsx)(nz,{})]})]})]})}),nA=l.default.div.withConfig({componentId:"zh__sc-52495c18-0"})`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;

  width: 856px;
  min-height: 0;
  padding: 32px 24px;

  background: #fff;
  box-shadow: -8px 0 8px 0 rgb(0 0 0 / 8%);
`,n$=l.default.div.withConfig({componentId:"zh__sc-52495c18-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,nR=l.default.div.withConfig({componentId:"zh__sc-52495c18-2"})`
  flex-shrink: 0;
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,nO=l.default.div.withConfig({componentId:"zh__sc-52495c18-3"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
`,nL=(0,n.observer)(function(){let{clientDraft:e}=a.default.modal.clientCreate;return(0,t.jsxs)(nP,{children:[(0,t.jsx)(eZ,{}),e&&(0,t.jsx)(nD,{})]})}),nP=l.default.div.withConfig({componentId:"zh__sc-cfc6108c-0"})`
  overflow: hidden;
  display: flex;
  flex: 1 1 auto;
  align-self: stretch;
  justify-content: center;

  min-height: 0;
  max-height: none;

  background: #f9fafb;
`;function nN(){let{close:e,mode:n}=a.default.modal.clientCreate;return(0,t.jsxs)(nM,{children:[(0,t.jsx)(nF,{children:"renew"===n?"재계약 이용자 등록하기":"신규 이용자 등록하기"}),(0,t.jsxs)(nB,{onClick:e,children:[(0,t.jsx)(en.X,{size:16}),"닫기"]})]})}let nM=l.default.div.withConfig({componentId:"zh__sc-f50634fa-0"})`
  display: flex;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  border-radius: 16px 16px 0 0;

  background: #fff;
`,nF=l.default.div.withConfig({componentId:"zh__sc-f50634fa-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px; /* 155.556% */
  color: #101828;
  letter-spacing: -0.439px;
`,nB=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-f50634fa-2"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,nU=(0,n.observer)(function(){let e=a.default.modal.clientCreate,{status:n}=e,l=(0,i.useRef)(null);return((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(l.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)?null:(0,t.jsx)(d.default,{children:(0,t.jsxs)(nY,{ref:l,children:[(0,t.jsx)(nN,{}),(0,t.jsx)(nL,{}),(0,t.jsx)(j,{}),(0,t.jsx)(s,{currentServiceType:e.selectedServiceType,detectedServiceType:e.pendingDetectedServiceType??e.selectedServiceType,isContinueDisabled:!e.isPendingDetectedServiceAvailable,isOpen:e.isServiceTypeMismatchDialogOpen,onCancel:e.cancelServiceTypeMismatchRegistration,onContinue:e.confirmServiceTypeMismatchRegistration,registrationTarget:"이용자"}),(0,t.jsx)(S,{}),(0,t.jsx)(M,{})]})})}),nY=l.default.div.withConfig({componentId:"zh__sc-21fa7296-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;

  /* 1920 기준 1712px. 노트북(1440·1366px)에서는 화면 안으로 줄여 [최종확인 및 저장]이 밖으로 밀리지 않게 한다. */
  width: min(1712px, calc(100vw - 32px));
  min-width: 1200px;
  height: 90vh;
  min-height: 830px;
  max-height: 90vh;
  border-radius: 8px;

  background: #fff;
`;var nW=e.i(62897),nV=e.i(44968);function nH(e){if(!e1.default.is(e))return"-";let[t,n,i]=e.split("-");return`${t}년 ${Number(n)}월 ${Number(i)}일`}function nG(e){return e instanceof Element&&null!==e.closest('[aria-label="Date picker"]')}function nK(e){return e instanceof Element&&(null!==e.closest('[role="listbox"]')||null!==e.closest('[role="option"]')||null!==e.closest("[data-radix-select-viewport]")||null!==e.closest("[data-radix-popper-content-wrapper]"))}function nX(e){if(!e1.default.is(e))return"-";let[t,n,i]=e.split("-");return`${t}.${n}.${i}`}function nq(e,t){if(!e1.default.is(e)||!e1.default.is(t))return[];let[n,i]=e.split("-"),[l,a]=t.split("-"),d=Number(n),o=Number(i),r=Number(l),s=Number(a);if(!Number.isInteger(d)||!Number.isInteger(o)||!Number.isInteger(r)||!Number.isInteger(s))return[];let c=new Date(d,o-1,1),f=new Date(r,s-1,1);if(c.getTime()>f.getTime())return[];let h=[],u=new Date(c);for(;u.getTime()<=f.getTime();){let[e,t]=nW.default.yearMonth.create(u.getFullYear(),u.getMonth()+1);null===e&&h.push(t),u.setMonth(u.getMonth()+1)}return h}var nQ=e.i(38797);let nJ=(0,nQ.default)((0,t.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"AddOutlined"),nZ=(0,nQ.default)((0,t.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"CheckOutlined");var n0=e.i(17510);let n1=(0,nQ.default)((0,t.jsx)("path",{d:"m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7z"}),"EastOutlined");var n2=e.i(84527),n6=e.i(74483),n4=e.i(82130);let n5=l.default.div.withConfig({componentId:"zh__sc-422803e4-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 48px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
  min-height: 0;
  padding: 24px;

  background: #fcfdff;
`,n3=l.default.div.withConfig({componentId:"zh__sc-422803e4-1"})`
  padding: 16px;
  border: 1px dashed #d1d5db;
  border-radius: 10px;

  font-size: 14px;
  color: #6b7280;
`,n9=l.default.div.withConfig({componentId:"zh__sc-422803e4-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,n8=l.default.div.withConfig({componentId:"zh__sc-422803e4-3"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  min-height: 40px;
`,n7=l.default.div.withConfig({componentId:"zh__sc-422803e4-4"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: space-between;

  min-width: 0;
  min-height: 40px;
`,ie=l.default.h3.withConfig({componentId:"zh__sc-422803e4-5"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #101828;
`,it=l.default.div.withConfig({componentId:"zh__sc-422803e4-6"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,ii=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-422803e4-7"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
  border-radius: 6px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #4f39f6;

  &:disabled {
    cursor: not-allowed;

    border-color: #d1d5db;

    color: #9ca3af;

    opacity: 1;
    background: #f9fafb;
  }
`;l.default.span.withConfig({componentId:"zh__sc-422803e4-8"})`
  padding: 2px 12px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #45464e;
`;let il=l.default.span.withConfig({componentId:"zh__sc-422803e4-9"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #fff;
  white-space: nowrap;

  background: #4f39f6;
`,ia=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-422803e4-10"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,id=(0,l.default)(o.default.Input.Phone).withConfig({componentId:"zh__sc-422803e4-11"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,io=(0,l.default)(o.default.Input.Contact).withConfig({componentId:"zh__sc-422803e4-12"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,ir=(0,l.default)(o.default.Input.PostCode).withConfig({componentId:"zh__sc-422803e4-13"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,is=(0,l.default)(o.default.Input.ResidentRegistrationNumber).withConfig({componentId:"zh__sc-422803e4-14"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`;(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-422803e4-15"})`
  width: 100%;
  height: 28px;
  font-size: 16px;
  line-height: 16px;
`;let ic=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-422803e4-16"})`
  display: flex;
  gap: 8px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,ih=l.default.div.withConfig({componentId:"zh__sc-422803e4-17"})`
  position: fixed;
  z-index: 1000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 35%);
`,iu=l.default.div.withConfig({componentId:"zh__sc-422803e4-18"})`
  position: relative;

  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,ip=l.default.div.withConfig({componentId:"zh__sc-422803e4-19"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,ix=l.default.h2.withConfig({componentId:"zh__sc-422803e4-20"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,ig=l.default.p.withConfig({componentId:"zh__sc-422803e4-21"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
`,im=l.default.div.withConfig({componentId:"zh__sc-422803e4-22"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,ib=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-422803e4-23"})`
  height: 36px;
  padding: 8px 16px;
`,ij=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-422803e4-24"})`
  height: 36px;
  padding: 8px 16px;
`,i_=(0,n.observer)(function({guardianList:e,selectedGuardianId:n,onAddGuardian:l,onUpdateGuardian:a}){let d=e.length>0,[r,s]=(0,i.useState)(!1),[c,f]=(0,i.useState)(!1),[h,u]=(0,i.useState)(!1),[p,x]=(0,i.useState)(!1),[g,m]=(0,i.useState)(""),[b,j]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),[_,w]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),y=null!==n&&e.some(e=>e.id===n)?n:null,v=(0,i.useMemo)(()=>{if(null===y)return e;let t=e.find(e=>e.id===y);return t?[t,...e.filter(e=>e.id!==y)]:e},[y,e]),C=()=>{j({name:"",relation:"",phone:"",address:""}),w({name:"",relation:"",phone:"",address:""}),m("")},I=()=>{s(!1),f(!1),u(!1),C()},z=(e,t)=>{j(n=>({...n,[e]:t})),w(t=>({...t,[e]:""})),m("")},T=async()=>{x(!0);let e={name:b.name,relation:b.relation,phone:b.phone,address:b.address},t=c&&null!==y?await a(y,e):await l(e);(x(!1),u(!1),null===t)?m("보호자 정보를 저장하지 못했습니다. 잠시 후 다시 시도해 주세요."):I()},E=r?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(iM,{onClick:I,children:(0,t.jsxs)(iF,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(iB,{children:[(0,t.jsx)(iU,{}),(0,t.jsx)(iY,{children:c?"보호자 정보 수정":"신규 보호자 추가"}),(0,t.jsx)(o.default.Button.Outlined,{type:"button",style:{width:56,height:36,padding:8},onClick:I,children:(0,t.jsx)(n0.default,{sx:{fontSize:20}})})]}),(0,t.jsx)(iW,{}),(0,t.jsx)(iV,{children:(0,t.jsxs)(iH,{children:[(0,t.jsxs)(iG,{children:[(0,t.jsxs)(iX,{children:[(0,t.jsx)(iq,{children:"성명"}),(0,t.jsx)(iQ,{type:"text",placeholder:"보호자 성명을 입력하세요.",value:b.name,onChange:e=>z("name",e.target.value),$hasError:""!==_.name}),(0,t.jsx)(i0,{children:_.name})]}),(0,t.jsxs)(iX,{children:[(0,t.jsx)(iq,{children:"이용자와의 관계"}),(0,t.jsx)(iQ,{type:"text",placeholder:"예: 자녀(딸), 자녀(아들), 자녀(며느리)",value:b.relation,onChange:e=>z("relation",e.target.value),$hasError:""!==_.relation}),(0,t.jsx)(i0,{children:_.relation})]}),(0,t.jsxs)(iX,{children:[(0,t.jsx)(iq,{children:"휴대폰"}),(0,t.jsx)(iJ,{placeholder:"휴대폰을 입력해주세요.",value:b.phone,onChange:e=>z("phone",e),$hasError:""!==_.phone}),(0,t.jsx)(i0,{children:_.phone})]}),(0,t.jsxs)(iX,{children:[(0,t.jsx)(iq,{children:"주소"}),(0,t.jsx)(iZ,{rows:3,placeholder:"보호자 주소를 입력하세요.",value:b.address,onChange:e=>z("address",e.target.value),$hasError:""!==_.address}),(0,t.jsx)(i0,{children:_.address})]})]}),(0,t.jsxs)(iK,{children:[(0,t.jsx)(i1,{children:g}),(0,t.jsxs)(o.default.Button.Filled.Primary,{type:"button",style:{display:"flex",gap:4,alignItems:"center",height:36,padding:"8px 16px"},onClick:()=>{if(p)return;let e={name:""===b.name.trim()?"필수 입력값입니다.":"",relation:"",phone:""===b.phone.trim()||n4.default.is(b.phone)?"":"유효한 휴대폰 형식이 아닙니다.",address:""};w(e),Object.values(e).some(e=>""!==e)||u(!0)},children:[(0,t.jsx)(nZ,{sx:{fontSize:20}}),c?"수정 완료":"추가 완료"]})]})]})})]})}),h?(0,t.jsx)(i2,{children:(0,t.jsxs)(i6,{children:[(0,t.jsx)(i4,{children:(0,t.jsx)(i5,{children:c?"보호자 정보를 수정할까요?":"신규 보호자 정보를 추가할까요?"})}),(0,t.jsxs)(i3,{children:[(0,t.jsx)(o.default.Button.Outlined,{type:"button",style:{width:91,height:36,padding:"8px 16px"},disabled:p,onClick:()=>u(!1),children:"취소하기"}),(0,t.jsx)(o.default.Button.Filled.Primary,{type:"button",style:{width:91,height:36,padding:"8px 16px"},disabled:p,onClick:()=>void T(),children:p?"저장 중...":c?"수정하기":"추가하기"})]})]})}):null]}):null;return(0,t.jsxs)(n9,{children:[(0,t.jsx)(n8,{children:(0,t.jsxs)(n7,{children:[(0,t.jsx)(ie,{children:"보호자 정보"}),(0,t.jsxs)(it,{children:[(0,t.jsxs)(ii,{type:"button",disabled:null===y,onClick:()=>{let t=e.find(e=>e.id===y);t&&(f(!0),j({name:t.name,relation:t.relationship??"",phone:t.phoneNumber??"",address:t.address??""}),w({name:"",relation:"",phone:"",address:""}),m(""),s(!0))},children:[(0,t.jsx)(n2.default,{sx:{fontSize:20}}),"수정하기"]}),(0,t.jsxs)(ii,{type:"button",onClick:()=>{f(!1),C(),s(!0)},children:[(0,t.jsx)(nJ,{sx:{fontSize:20}}),"추가하기"]})]})]})}),d?(0,t.jsx)(iw,{children:v.map(e=>{let n=e.id===y;return(0,t.jsxs)(iy,{$isSelected:n,children:[(0,t.jsxs)(iv,{children:[(0,t.jsx)(iC,{children:e.name}),(0,t.jsx)(iI,{children:null===e.relationship||""===e.relationship?"이용자와의 관계: -":`이용자와의 관계: ${e.relationship}`})]}),(0,t.jsxs)(iz,{children:[(0,t.jsxs)(iT,{children:[(0,t.jsx)(iE,{children:"주소"}),(0,t.jsx)(iS,{}),(0,t.jsx)(iD,{children:e.address??"-"})]}),(0,t.jsxs)(iT,{children:[(0,t.jsx)(iE,{children:"휴대폰"}),(0,t.jsx)(iS,{}),(0,t.jsx)(ik,{children:e.phoneNumber??"-"})]}),(0,t.jsxs)(iT,{children:[(0,t.jsx)(iE,{children:"이메일"}),(0,t.jsx)(iS,{}),(0,t.jsx)(ik,{children:"-"})]})]}),(0,t.jsx)(iA,{children:n?(0,t.jsx)(i$,{children:"지금 선택됨"}):(0,t.jsxs)(iR,{type:"button",disabled:!0,children:["선택",(0,t.jsx)(n1,{sx:{fontSize:16}})]})})]},e.id)})}):(0,t.jsxs)(iO,{children:[(0,t.jsx)(n6.default,{sx:{fontSize:24,color:"#494F53"}}),(0,t.jsxs)(iL,{children:[(0,t.jsx)(iP,{children:"등록된 보호자 정보가 없습니다."}),(0,t.jsx)(iN,{children:"보호자 정보 등록이 필요한 경우 [+추가하기] 버튼을 클릭하고 등록할 수 있습니다."})]})]}),E]})}),iw=l.default.div.withConfig({componentId:"zh__sc-b1996503-0"})`
  overflow: auto hidden;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;

  width: 100%;
`,iy=l.default.div.withConfig({componentId:"zh__sc-b1996503-1"})`
  position: relative;

  display: flex;
  flex: 0 0 319px;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;

  height: 186px;
  padding: 16px;
  border: 1px solid ${e=>e.$isSelected?"#5635ff":"#e5e9ef"};
  border-radius: 8px;

  background: ${e=>e.$isSelected?"#f7f5ff":"#fff"};
  box-shadow: ${e=>e.$isSelected?"0 0 3px #ddd8ff":"none"};
`,iv=l.default.div.withConfig({componentId:"zh__sc-b1996503-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  width: 100%;
`,iC=l.default.div.withConfig({componentId:"zh__sc-b1996503-3"})`
  flex-shrink: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,iI=l.default.div.withConfig({componentId:"zh__sc-b1996503-4"})`
  display: flex;
  align-items: center;

  min-width: 0;
  padding: 2px 12px;
  border: 1px solid #d1d5db;
  border-radius: 999px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #45464e;

  background: #fff;
`,iz=l.default.div.withConfig({componentId:"zh__sc-b1996503-5"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 100%;
  padding-bottom: 36px;
`,iT=l.default.div.withConfig({componentId:"zh__sc-b1996503-6"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
`,iE=l.default.span.withConfig({componentId:"zh__sc-b1996503-7"})`
  width: 52px;
  min-width: 52px;

  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
`,iS=l.default.span.withConfig({componentId:"zh__sc-b1996503-8"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,ik=l.default.span.withConfig({componentId:"zh__sc-b1996503-9"})`
  min-width: 0;

  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
  overflow-wrap: anywhere;
`,iD=(0,l.default)(ik).withConfig({componentId:"zh__sc-b1996503-10"})`
  color: #45464e;
`,iA=l.default.div.withConfig({componentId:"zh__sc-b1996503-11"})`
  position: absolute;
  right: 16px;
  bottom: 16px;

  display: flex;
  justify-content: flex-end;
`,i$=l.default.div.withConfig({componentId:"zh__sc-b1996503-12"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 999px;

  font-size: 16px;
  line-height: 16px;
  color: #fff;
  letter-spacing: -1px;

  background: #4f39f6;
`,iR=l.default.button.withConfig({componentId:"zh__sc-b1996503-13"})`
  cursor: not-allowed;

  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 0;
  border-radius: 999px;

  font-size: 16px;
  line-height: 16px;
  color: #9ca3af;
  letter-spacing: -1px;

  background: transparent;
`,iO=l.default.div.withConfig({componentId:"zh__sc-b1996503-14"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 186px;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,iL=l.default.div.withConfig({componentId:"zh__sc-b1996503-15"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,iP=l.default.div.withConfig({componentId:"zh__sc-b1996503-16"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
`,iN=l.default.div.withConfig({componentId:"zh__sc-b1996503-17"})`
  font-size: 14px;
  line-height: 20px;
  color: #494f53;
  text-align: center;
`,iM=l.default.div.withConfig({componentId:"zh__sc-b1996503-18"})`
  position: absolute;
  z-index: 20;
  inset: 0;

  display: flex;
  justify-content: flex-end;

  background: rgb(17 24 39 / 28%);
`,iF=l.default.div.withConfig({componentId:"zh__sc-b1996503-19"})`
  display: flex;
  flex-direction: column;

  width: min(417px, 100%);
  height: 100%;

  background: #fff;
  box-shadow: -2px 9px 16px rgb(0 0 0 / 16%);
`,iB=l.default.div.withConfig({componentId:"zh__sc-b1996503-20"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`,iU=l.default.div.withConfig({componentId:"zh__sc-b1996503-21"})`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
`,iY=l.default.div.withConfig({componentId:"zh__sc-b1996503-22"})`
  flex: 1;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
  text-align: center;
`,iW=l.default.div.withConfig({componentId:"zh__sc-b1996503-23"})`
  height: 1px;
  background: #e5e7eb;
`,iV=l.default.div.withConfig({componentId:"zh__sc-b1996503-24"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 16px;
`,iH=l.default.div.withConfig({componentId:"zh__sc-b1996503-25"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,iG=l.default.div.withConfig({componentId:"zh__sc-b1996503-26"})`
  display: flex;
  flex-direction: column;
`,iK=l.default.div.withConfig({componentId:"zh__sc-b1996503-27"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,iX=l.default.div.withConfig({componentId:"zh__sc-b1996503-28"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,iq=l.default.label.withConfig({componentId:"zh__sc-b1996503-29"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;
`,iQ=l.default.input.withConfig({componentId:"zh__sc-b1996503-30"})`
  width: 100%;
  height: 36px;
  padding: 4px 16px;
  border: 1px solid ${e=>e.$hasError?"#ef4444":"#e5e9ef"};
  border-radius: 4px;

  font-size: 16px;
  color: #0a0a0a;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #4f39f6;
    outline: none;
  }
`,iJ=(0,l.default)(o.default.Input.Phone).withConfig({componentId:"zh__sc-b1996503-31"})`
  width: 100%;
  height: 36px;
  padding: 4px 16px;
  border-color: ${e=>e.$hasError?"#ef4444":"#e5e9ef"};

  font-size: 16px;

  &:focus {
    border-color: ${e=>e.$hasError?"#ef4444":"#5635ff"};
  }
`,iZ=l.default.textarea.withConfig({componentId:"zh__sc-b1996503-32"})`
  resize: none;

  width: 100%;
  padding: 4px 16px;
  border: 1px solid ${e=>e.$hasError?"#ef4444":"#e5e9ef"};
  border-radius: 4px;

  font-size: 16px;
  color: #0a0a0a;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #4f39f6;
    outline: none;
  }
`,i0=l.default.div.withConfig({componentId:"zh__sc-b1996503-33"})`
  min-height: 20px;
  font-size: 12px;
  line-height: 20px;
  color: #ef4444;
`,i1=l.default.div.withConfig({componentId:"zh__sc-b1996503-34"})`
  min-height: 20px;
  font-size: 12px;
  line-height: 20px;
  color: #ef4444;
`,i2=l.default.div.withConfig({componentId:"zh__sc-b1996503-35"})`
  position: absolute;
  z-index: 30;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 12%);
`,i6=l.default.div.withConfig({componentId:"zh__sc-b1996503-36"})`
  display: flex;
  flex-direction: column;
  gap: 48px;

  width: 501px;
  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 2px rgb(0 0 0 / 10%);
`,i4=l.default.div.withConfig({componentId:"zh__sc-b1996503-37"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,i5=l.default.div.withConfig({componentId:"zh__sc-b1996503-38"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,i3=l.default.div.withConfig({componentId:"zh__sc-b1996503-39"})`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;var i9=e.i(84673),i8=e.i(76207),i7=e.i(54304);function le(e,t){return void 0!==e&&Object.prototype.hasOwnProperty.call(e,t)}let lt=()=>a.default.ui.serviceRegion.codes,ln=["PHYSICAL_ACTIVITY_SUPPORT","HOUSEKEEPING_SUPPORT","SOCIAL_ACTIVITY_SUPPORT","OTHER"],li=["MALE","FEMALE"],ll=["TWENTIES_OR_YONGER","THIRTIES","FORTIES","FIFTIES","SIXTIES","SEVENTIES_OR_OLDER"],la=["MON","TUE","WED","THU","FRI","SAT","SUN"],ld=[["ALONE","독거"],["COUPLE","부부"],["SINGLE_PARENT","한부모"],["OTHER","기타"]],lo=[["ministry","보건복지부"],["metropolitan","광역지자체"],["local","기초지자체"],["other","기타"]],lr=(0,n.observer)(function(){let e=a.default.client.info.byClient,[n,l]=(0,i.useState)({}),[d,r]=(0,i.useState)(""),s=(0,i.useRef)(null),c=e.isServiceConditionEditing,f=e.selectedClient,h=e.selectedServiceConditionDraft,u=e.selectedContract?.serviceType??e.currentServiceType,p=h?.desiredServiceTimes??f?.desiredServiceTimes.filter(({serviceType:e})=>e===u).flatMap(({dayOfWeek:e,hour:t})=>i8.default.some(e=>e===t)?[{dayOfWeek:e,hour:t}]:[])??[],x=h?.desiredRegions??f?.desiredRegions??[],g=h?.desiredCareTypes??f?.desiredCareTypes.filter(({serviceType:e})=>e===u).map(({careType:e,detail:t})=>({careType:e,...null===t?{}:{detail:t}}))??[],m=void 0!==h&&Object.prototype.hasOwnProperty.call(h,"desiredServiceWorkerGender")?h.desiredServiceWorkerGender:f?.desiredServiceWorkerGender,b=h?.desiredAgeRanges??f?.desiredAgeRanges??[],j=h?.workplace??f?.workplace??"",_=h?.schoolName??f?.schoolName??"",w=le(h,"schoolStartTime")?h?.schoolStartTime??"":f?.schoolStartTime??"",y=le(h,"schoolEndTime")?h?.schoolEndTime??"":f?.schoolEndTime??"",v=h?.schoolDays??f?.schoolDays??[],C=h?.careCenterName??f?.careCenterName??"",I=le(h,"careCenterStartTime")?h?.careCenterStartTime??"":f?.careCenterStartTime??"",z=le(h,"careCenterEndTime")?h?.careCenterEndTime??"":f?.careCenterEndTime??"",T=h?.careCenterDays??f?.careCenterDays??[],E=le(h,"primaryDisabilityName")?h?.primaryDisabilityName??"":f?.primaryDisabilityName??"",S=le(h,"primaryDisabilityGrade")?h?.primaryDisabilityGrade??"":f?.primaryDisabilityGrade??"",k=le(h,"primaryDisabilitySeverity")?h?.primaryDisabilitySeverity??"":f?.primaryDisabilitySeverity??"",D=le(h,"secondaryDisabilityName")?h?.secondaryDisabilityName??"":f?.secondaryDisabilityName??"",A=le(h,"secondaryDisabilityGrade")?h?.secondaryDisabilityGrade??"":f?.secondaryDisabilityGrade??"",$=le(h,"secondaryDisabilitySeverity")?h?.secondaryDisabilitySeverity??"":f?.secondaryDisabilitySeverity??"",R=h?.chronicDiseaseNames??f?.chronicDiseaseNames??"",O=h?.medicationInfo??f?.medicationInfo??"",L=h?.hasTraumaDisability??f?.hasTraumaDisability??void 0,P=h?.communicationStatus??f?.communicationStatus,N=le(h,"communicationStatusDetail")?h?.communicationStatusDetail??"":f?.communicationStatusDetail??"",M=h?.hasWheelchair??f?.hasWheelchair,F=h?.isMarried??f?.isMarried,B=h?.familyStatus??f?.familyStatus,U=le(h,"familyStatusDetail")?h?.familyStatusDetail??"":f?.familyStatusDetail??"",Y={ministry:le(h,"ministryDeterminedHours")?h?.ministryDeterminedHours:f?.ministryDeterminedHours,metropolitan:le(h,"metroDeterminedHours")?h?.metroDeterminedHours:f?.metroDeterminedHours,local:le(h,"basicDeterminedHours")?h?.basicDeterminedHours:f?.basicDeterminedHours,other:le(h,"otherDeterminedHours")?h?.otherDeterminedHours:f?.otherDeterminedHours},W=h?.usageExperience??f?.usageExperience??"",V=h?.dailyLivingNotes??f?.dailyLivingNotes??"",H=h?.comprehensiveOpinion??f?.comprehensiveOpinion??"",G=lt().every(e=>x.includes(e)),K=ln.every(e=>g.some(t=>t.careType===e)),X=ll.every(e=>b.includes(e)),q=async()=>{let t=Object.fromEntries(Object.entries({schoolStartTime:w,schoolEndTime:y,careCenterStartTime:I,careCenterEndTime:z}).flatMap(([e,t])=>""===t||i7.default.is(t)?[]:[[e,"유효한 시간 형식이 아닙니다."]]));l(t),Object.keys(t).length>0||await e.saveSelectedServiceConditionDraft()};(0,i.useEffect)(()=>{if(0===Object.keys(n).length)return;let e=window.requestAnimationFrame(()=>{document.querySelector("[data-service-condition-field-error]")?.scrollIntoView({block:"center",behavior:"smooth"})});return()=>window.cancelAnimationFrame(e)},[n]);let Q=(t,n)=>{l(e=>({...e,[t]:""})),e.updateSelectedServiceConditionDraftField(t,n)};return(0,i.useEffect)(()=>{if(!c)return;let t=t=>{let n=t.target;n instanceof Node&&null!==s.current&&s.current.contains(n)||n instanceof Element&&(null!==n.closest('[role="listbox"]')||null!==n.closest('[role="option"]')||null!==n.closest("[data-radix-select-viewport]")||null!==n.closest("[data-radix-popper-content-wrapper]"))||e.cancelServiceConditionEdit()};return document.addEventListener("pointerdown",t),()=>{document.removeEventListener("pointerdown",t)}},[e,c]),(0,t.jsxs)(n9,{ref:s,children:[(0,t.jsxs)(lc,{children:[(0,t.jsxs)(lh,{children:[(0,t.jsx)(lf,{children:"서비스 희망 시간"}),c?(0,t.jsx)(il,{children:"수정 진행중"}):null]}),(0,t.jsxs)(lu,{children:[(0,t.jsx)(tf.default,{sx:{fontSize:20}}),(0,t.jsx)(lp,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]}),c?(0,t.jsxs)(it,{children:[(0,t.jsxs)(ii,{type:"button",onClick:e.cancelServiceConditionEdit,children:[(0,t.jsx)(i9.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(ii,{type:"button",onClick:()=>void q(),children:[(0,t.jsx)(nZ,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(ii,{type:"button",onClick:e.startServiceConditionEdit,children:[(0,t.jsx)(n2.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsx)(lx,{value:p,disabled:!c,readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftTimes(t.target.value)}),(0,t.jsxs)(lg,{children:[(0,t.jsx)(lm,{children:"희망 서비스 시간"}),(0,t.jsxs)(lb,{children:[(0,t.jsx)(l_,{children:"총"}),(0,t.jsx)(lj,{value:d,disabled:!c,placeholder:"00",inputMode:"numeric",maxLength:2,onChange:e=>{let t=e.target.value.replace(/\D/g,"");r(""===t?"":String(Math.min(Number(t),99)))}}),(0,t.jsx)(l_,{children:"시간"})]})]}),(0,t.jsxs)(ls,{children:[(0,t.jsx)(lw,{children:"서비스 가능 지역 (복수 선택 가능)"}),(0,t.jsxs)(ly,{children:[(0,t.jsxs)(lv,{children:[(0,t.jsx)(lz,{disabled:!c,checked:G,onChange:()=>e.updateSelectedServiceConditionDraftRegions(G?[]:lt())}),(0,t.jsx)(lE,{children:"전체 선택"})]}),lt().map(n=>(0,t.jsxs)(lv,{children:[(0,t.jsx)(lz,{disabled:!c,checked:x.includes(n),onChange:()=>{let t=x.includes(n)?x.filter(e=>e!==n):[...x,n];e.updateSelectedServiceConditionDraftRegions(t)}}),(0,t.jsx)(lE,{children:a.default.ui.serviceRegion.label(n)})]},n))]})]}),"DISABILITY_ACTIVITY_SUPPORT"===u?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ls,{children:[(0,t.jsx)(lw,{children:"희망 활동 내용 (복수 선택 가능)"}),(0,t.jsxs)(ly,{children:[(0,t.jsxs)(lv,{children:[(0,t.jsx)(lz,{disabled:!c,checked:K,onChange:()=>e.updateSelectedServiceConditionDraftCareTypes(K?[]:ln.map(e=>g.find(t=>t.careType===e)??{careType:e}))}),(0,t.jsx)(lE,{children:"전체 선택"})]}),ln.map(n=>{let i=g.find(e=>e.careType===n);return(0,t.jsxs)(lC,{children:[(0,t.jsxs)(lv,{children:[(0,t.jsx)(lz,{disabled:!c,checked:void 0!==i,onChange:()=>{let t=void 0===i?[...g,{careType:n}]:g.filter(e=>e.careType!==n);e.updateSelectedServiceConditionDraftCareTypes(t)}}),(0,t.jsx)(lE,{children:"PHYSICAL_ACTIVITY_SUPPORT"===n?"신체 활동":tx.default[n].label.replace("활동"," 활동")})]}),(0,t.jsx)(lI,{value:i?.detail??"",placeholder:"관련 내용을 입력해주세요.",readOnly:!c||void 0===i,onChange:t=>{void 0!==i&&e.updateSelectedServiceConditionDraftCareTypes(g.map(e=>e.careType===n?{...e,detail:t.target.value}:e))},style:lB})]},n)})]})]}),(0,t.jsxs)(ls,{children:[(0,t.jsx)(lw,{children:"제공인력 희망 성별"}),(0,t.jsxs)(ly,{children:[(0,t.jsxs)(lv,{children:[(0,t.jsx)(lT,{disabled:!c,checked:null==m,onChange:()=>e.updateSelectedServiceConditionDraftGender(null)}),(0,t.jsx)(lE,{children:"전체"})]}),li.map(n=>(0,t.jsxs)(lv,{children:[(0,t.jsx)(lT,{disabled:!c,checked:m===n,onChange:()=>e.updateSelectedServiceConditionDraftGender(n)}),(0,t.jsx)(lE,{children:tp.default[n].label})]},n))]})]}),(0,t.jsxs)(ls,{children:[(0,t.jsx)(lw,{children:"제공인력 희망 연령 (복수 선택 가능)"}),(0,t.jsxs)(ly,{children:[(0,t.jsxs)(lv,{children:[(0,t.jsx)(lz,{disabled:!c,checked:X,onChange:()=>e.updateSelectedServiceConditionDraftAgeRanges(X?[]:ll)}),(0,t.jsx)(lE,{children:"전체 선택"})]}),ll.map(n=>(0,t.jsxs)(lv,{children:[(0,t.jsx)(lz,{disabled:!c,checked:b.includes(n),onChange:()=>e.updateSelectedServiceConditionDraftAgeRanges(b.includes(n)?b.filter(e=>e!==n):[...b,n])}),(0,t.jsx)(lE,{children:"TWENTIES_OR_YONGER"===n||"SEVENTIES_OR_OLDER"===n?tu.default[n].label.replace(" 이하","").replace(" 이상",""):tu.default[n].label})]},n))]})]}),(0,t.jsx)(lS,{children:"직장 및 학교"}),(0,t.jsx)(lk,{children:(0,t.jsxs)(lD,{children:[(0,t.jsx)(lA,{children:"직장"}),(0,t.jsx)(o.default.Input.Text,{value:j,placeholder:"직장명을 입력하세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("workplace",t.target.value),style:lB})]})}),(0,t.jsxs)(lk,{children:[(0,t.jsxs)(lD,{$width:395,children:[(0,t.jsx)(lA,{children:"학교명"}),(0,t.jsx)(o.default.Input.Text,{value:_,placeholder:"학교명을 입력하세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("schoolName",t.target.value),style:lB})]}),(0,t.jsxs)(lD,{$width:273,"data-service-condition-field-error":void 0!==n.schoolStartTime&&""!==n.schoolStartTime||void 0,children:[(0,t.jsx)(lA,{children:"시작 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:w,placeholder:"00:00",readOnly:!c,onChange:e=>Q("schoolStartTime",e),style:{...lB,...void 0!==n.schoolStartTime&&""!==n.schoolStartTime?lU:{}}}),(0,t.jsx)(lY,{children:n.schoolStartTime})]}),(0,t.jsx)(lR,{children:"~"}),(0,t.jsxs)(lD,{$width:273,"data-service-condition-field-error":void 0!==n.schoolEndTime&&""!==n.schoolEndTime||void 0,children:[(0,t.jsx)(lA,{children:"종료 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:y,placeholder:"00:00",readOnly:!c,onChange:e=>Q("schoolEndTime",e),style:{...lB,...void 0!==n.schoolEndTime&&""!==n.schoolEndTime?lU:{}}}),(0,t.jsx)(lY,{children:n.schoolEndTime})]})]}),(0,t.jsxs)(lO,{children:[(0,t.jsx)(lA,{children:"등교 요일"}),(0,t.jsx)(ly,{children:la.map(n=>(0,t.jsxs)(lv,{children:[(0,t.jsx)(lz,{disabled:!c,checked:v.includes(n),onChange:()=>e.updateSelectedServiceConditionDraftField("schoolDays",v.includes(n)?v.filter(e=>e!==n):[...v,n])}),(0,t.jsx)(lE,{children:tm.default[n].label})]},n))})]}),(0,t.jsx)(lS,{children:"주단기보호센터"}),(0,t.jsxs)(lk,{children:[(0,t.jsxs)(lD,{$width:395,children:[(0,t.jsx)(lA,{children:"주단기보호센터명"}),(0,t.jsx)(o.default.Input.Text,{value:C,placeholder:"센터명을 입력하세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("careCenterName",t.target.value),style:lB})]}),(0,t.jsxs)(lD,{$width:273,"data-service-condition-field-error":void 0!==n.careCenterStartTime&&""!==n.careCenterStartTime||void 0,children:[(0,t.jsx)(lA,{children:"시작 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:I,placeholder:"00:00",readOnly:!c,onChange:e=>Q("careCenterStartTime",e),style:{...lB,...void 0!==n.careCenterStartTime&&""!==n.careCenterStartTime?lU:{}}}),(0,t.jsx)(lY,{children:n.careCenterStartTime})]}),(0,t.jsx)(lR,{children:"~"}),(0,t.jsxs)(lD,{$width:273,"data-service-condition-field-error":void 0!==n.careCenterEndTime&&""!==n.careCenterEndTime||void 0,children:[(0,t.jsx)(lA,{children:"종료 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:z,placeholder:"00:00",readOnly:!c,onChange:e=>Q("careCenterEndTime",e),style:{...lB,...void 0!==n.careCenterEndTime&&""!==n.careCenterEndTime?lU:{}}}),(0,t.jsx)(lY,{children:n.careCenterEndTime})]})]}),(0,t.jsxs)(lO,{children:[(0,t.jsx)(lA,{children:"등원 요일"}),(0,t.jsx)(ly,{children:la.map(n=>(0,t.jsxs)(lv,{children:[(0,t.jsx)(lz,{disabled:!c,checked:T.includes(n),onChange:()=>e.updateSelectedServiceConditionDraftField("careCenterDays",T.includes(n)?T.filter(e=>e!==n):[...T,n])}),(0,t.jsx)(lE,{children:tm.default[n].label})]},n))})]}),(0,t.jsx)(lS,{children:"판정시간"}),(0,t.jsx)(lk,{children:lo.map(([n,i])=>(0,t.jsxs)(lD,{children:[(0,t.jsx)(lA,{children:i}),(0,t.jsxs)(lL,{children:[(0,t.jsx)(o.default.Input.Text,{value:Y[n]??"",placeholder:"00",inputMode:"numeric",readOnly:!c,onChange:t=>{let i=t.target.value.replace(/\D/g,"");e.updateSelectedServiceConditionDraftField({ministry:"ministryDeterminedHours",metropolitan:"metroDeterminedHours",local:"basicDeterminedHours",other:"otherDeterminedHours"}[n],""===i?void 0:Number(i))},style:{...lB,width:140,textAlign:"center"}}),(0,t.jsx)(lP,{children:"시간"})]})]},n))}),(0,t.jsxs)(lk,{children:[(0,t.jsxs)(lD,{children:[(0,t.jsx)(lA,{children:"주장애명"}),(0,t.jsxs)(l$,{$isEmptySelected:""===E,value:E||th.default.SELECT_EMPTY_VALUE,disabled:!c,onChange:t=>{e.updateSelectedServiceConditionDraftField("primaryDisabilityName",t.target.value===th.default.SELECT_EMPTY_VALUE?"":t.target.value)},style:lB,children:[(0,t.jsx)("option",{value:th.default.SELECT_EMPTY_VALUE,"data-trigger-label":"주장애명을 선택해주세요.",children:"선택안함"}),Object.entries(tj.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]}),(0,t.jsxs)(lD,{children:[(0,t.jsx)(lA,{children:"장애급수"}),(0,t.jsxs)(l$,{$isEmptySelected:""===S,value:S||th.default.SELECT_EMPTY_VALUE,disabled:!c,onChange:t=>{e.updateSelectedServiceConditionDraftField("primaryDisabilityGrade",t.target.value===th.default.SELECT_EMPTY_VALUE?"":t.target.value)},style:lB,children:[(0,t.jsx)("option",{value:th.default.SELECT_EMPTY_VALUE,"data-trigger-label":"장애급수를 선택해주세요.",children:"선택안함"}),Object.entries(tb.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]}),(0,t.jsxs)(lD,{children:[(0,t.jsx)(lA,{children:"주장애 장애정도"}),(0,t.jsxs)(l$,{$isEmptySelected:""===k,value:k||th.default.SELECT_EMPTY_VALUE,disabled:!c,onChange:t=>{e.updateSelectedServiceConditionDraftField("primaryDisabilitySeverity",t.target.value===th.default.SELECT_EMPTY_VALUE?"":t.target.value)},style:lB,children:[(0,t.jsx)("option",{value:th.default.SELECT_EMPTY_VALUE,"data-trigger-label":"주장애 장애정도를 선택해주세요.",children:"선택안함"}),Object.entries(t_.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]})]}),(0,t.jsxs)(lk,{children:[(0,t.jsxs)(lD,{children:[(0,t.jsx)(lA,{children:"부장애명"}),(0,t.jsxs)(l$,{$isEmptySelected:""===D,value:D||th.default.SELECT_EMPTY_VALUE,disabled:!c,onChange:t=>{e.updateSelectedServiceConditionDraftField("secondaryDisabilityName",t.target.value===th.default.SELECT_EMPTY_VALUE?"":t.target.value)},style:lB,children:[(0,t.jsx)("option",{value:th.default.SELECT_EMPTY_VALUE,"data-trigger-label":"부장애명을 선택해주세요.",children:"선택안함"}),Object.entries(tj.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]}),(0,t.jsxs)(lD,{children:[(0,t.jsx)(lA,{children:"장애급수"}),(0,t.jsxs)(l$,{$isEmptySelected:""===A,value:A||th.default.SELECT_EMPTY_VALUE,disabled:!c,onChange:t=>{e.updateSelectedServiceConditionDraftField("secondaryDisabilityGrade",t.target.value===th.default.SELECT_EMPTY_VALUE?"":t.target.value)},style:lB,children:[(0,t.jsx)("option",{value:th.default.SELECT_EMPTY_VALUE,"data-trigger-label":"장애급수를 선택해주세요.",children:"선택안함"}),Object.entries(tb.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]}),(0,t.jsxs)(lD,{children:[(0,t.jsx)(lA,{children:"부장애 장애정도"}),(0,t.jsxs)(l$,{$isEmptySelected:""===$,value:$||th.default.SELECT_EMPTY_VALUE,disabled:!c,onChange:t=>{e.updateSelectedServiceConditionDraftField("secondaryDisabilitySeverity",t.target.value===th.default.SELECT_EMPTY_VALUE?"":t.target.value)},style:lB,children:[(0,t.jsx)("option",{value:th.default.SELECT_EMPTY_VALUE,"data-trigger-label":"부장애 장애정도를 선택해주세요.",children:"선택안함"}),Object.entries(t_.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]})]}),(0,t.jsxs)(lk,{children:[(0,t.jsxs)(lD,{$width:158,children:[(0,t.jsx)(lA,{children:"외상장애 여부"}),(0,t.jsxs)(ly,{children:[(0,t.jsxs)(lv,{children:[(0,t.jsx)(lT,{disabled:!c,checked:!1===L,onChange:()=>e.updateSelectedServiceConditionDraftField("hasTraumaDisability",!1)}),(0,t.jsx)(lE,{children:"미해당"})]}),(0,t.jsxs)(lv,{children:[(0,t.jsx)(lT,{disabled:!c,checked:!0===L,onChange:()=>e.updateSelectedServiceConditionDraftField("hasTraumaDisability",!0)}),(0,t.jsx)(lE,{children:"해당"})]})]})]}),(0,t.jsxs)(lD,{$width:443,children:[(0,t.jsx)(lA,{children:"의사소통"}),(0,t.jsxs)(ly,{children:[(0,t.jsxs)(lv,{children:[(0,t.jsx)(lT,{disabled:!c,checked:"POSSIBLE"===P,onChange:()=>{e.updateSelectedServiceConditionDraftField("communicationStatus","POSSIBLE"),e.updateSelectedServiceConditionDraftField("communicationStatusDetail","")}}),(0,t.jsx)(lE,{children:"가능"})]}),(0,t.jsxs)(lv,{children:[(0,t.jsx)(lT,{disabled:!c,checked:"IMPOSSIBLE"===P,onChange:()=>{e.updateSelectedServiceConditionDraftField("communicationStatus","IMPOSSIBLE"),e.updateSelectedServiceConditionDraftField("communicationStatusDetail","")}}),(0,t.jsx)(lE,{children:"불가능"})]}),(0,t.jsxs)(lv,{children:[(0,t.jsx)(lT,{disabled:!c,checked:"OTHER"===P,onChange:()=>e.updateSelectedServiceConditionDraftField("communicationStatus","OTHER")}),(0,t.jsx)(lE,{children:"기타"})]}),(0,t.jsx)(o.default.Input.Text,{value:N,placeholder:"관련 내용을 입력해주세요.",disabled:!c||"OTHER"!==P,onChange:t=>e.updateSelectedServiceConditionDraftField("communicationStatusDetail",t.target.value),style:{...lB,width:193}})]})]}),(0,t.jsxs)(lD,{$width:116,children:[(0,t.jsx)(lA,{children:"휠체어 유무"}),(0,t.jsxs)(ly,{children:[(0,t.jsxs)(lv,{children:[(0,t.jsx)(lT,{disabled:!c,checked:!0===M,onChange:()=>e.updateSelectedServiceConditionDraftField("hasWheelchair",!0)}),(0,t.jsx)(lE,{children:"유"})]}),(0,t.jsxs)(lv,{children:[(0,t.jsx)(lT,{disabled:!c,checked:!1===M,onChange:()=>e.updateSelectedServiceConditionDraftField("hasWheelchair",!1)}),(0,t.jsx)(lE,{children:"무"})]})]})]})]}),(0,t.jsxs)(lk,{children:[(0,t.jsxs)(lD,{$width:144,children:[(0,t.jsx)(lA,{children:"결혼여부"}),(0,t.jsxs)(ly,{children:[(0,t.jsxs)(lv,{children:[(0,t.jsx)(lT,{disabled:!c,checked:!1===F,onChange:()=>e.updateSelectedServiceConditionDraftField("isMarried",!1)}),(0,t.jsx)(lE,{children:"미혼"})]}),(0,t.jsxs)(lv,{children:[(0,t.jsx)(lT,{disabled:!c,checked:!0===F,onChange:()=>e.updateSelectedServiceConditionDraftField("isMarried",!0)}),(0,t.jsx)(lE,{children:"기혼"})]})]})]}),(0,t.jsxs)(lD,{$width:530,children:[(0,t.jsx)(lA,{children:"가족사항"}),(0,t.jsxs)(ly,{children:[ld.map(([n,i])=>(0,t.jsxs)(lv,{children:[(0,t.jsx)(lT,{disabled:!c,checked:B===n,onChange:()=>{e.updateSelectedServiceConditionDraftField("familyStatus",n),"OTHER"!==n&&e.updateSelectedServiceConditionDraftField("familyStatusDetail","")}}),(0,t.jsx)(lE,{children:i})]},n)),(0,t.jsx)(o.default.Input.Text,{value:U,placeholder:"관련 내용을 입력해주세요.",disabled:!c||"OTHER"!==B,onChange:t=>e.updateSelectedServiceConditionDraftField("familyStatusDetail",t.target.value),style:{...lB,width:193}})]})]})]}),(0,t.jsx)(lk,{children:(0,t.jsxs)(lD,{children:[(0,t.jsx)(lA,{children:"보유질환명"}),(0,t.jsx)(o.default.Input.Text,{value:R,placeholder:"보유질환에 대해 입력해주세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("chronicDiseaseNames",t.target.value),style:lB})]})}),(0,t.jsx)(lk,{children:(0,t.jsxs)(lD,{children:[(0,t.jsx)(lA,{children:"투약정보"}),(0,t.jsx)(o.default.Input.Text,{value:O,placeholder:"투약정보를 입력해주세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("medicationInfo",t.target.value),style:lB})]})}),(0,t.jsx)(lk,{children:(0,t.jsxs)(lD,{children:[(0,t.jsx)(lA,{children:"(타기관) 이용경험"}),(0,t.jsx)(lN,{value:W,placeholder:"텍스트를 입력해주세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("usageExperience",t.target.value)})]})}),(0,t.jsx)(lk,{children:(0,t.jsxs)(lD,{children:[(0,t.jsx)(lA,{children:"특이사항 (장애특성 및 일상생활)"}),(0,t.jsx)(lF,{value:V,placeholder:"특이사항을 입력해주세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("dailyLivingNotes",t.target.value),style:lB})]})}),(0,t.jsx)(lk,{children:(0,t.jsxs)(lD,{children:[(0,t.jsx)(lA,{children:"종합소견"}),(0,t.jsx)(lM,{value:H,placeholder:"종합소견을 입력해주세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("comprehensiveOpinion",t.target.value)})]})})]}):null]})}),ls=l.default.div.withConfig({componentId:"zh__sc-9e650079-0"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,lc=l.default.div.withConfig({componentId:"zh__sc-9e650079-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;

  height: 30px;
`,lf=l.default.div.withConfig({componentId:"zh__sc-9e650079-2"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,lh=l.default.div.withConfig({componentId:"zh__sc-9e650079-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,lu=l.default.div.withConfig({componentId:"zh__sc-9e650079-4"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;

  color: #464c53;
`,lp=l.default.div.withConfig({componentId:"zh__sc-9e650079-5"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`,lx=(0,l.default)(o.default.Input.TimeSlider).withConfig({componentId:"zh__sc-9e650079-6"})`
  width: 800px;
`,lg=l.default.div.withConfig({componentId:"zh__sc-9e650079-7"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,lm=l.default.div.withConfig({componentId:"zh__sc-9e650079-8"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
  text-align: center;
`,lb=l.default.div.withConfig({componentId:"zh__sc-9e650079-9"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,lj=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-9e650079-10"})`
  width: 59px;
  height: 36px;
  text-align: center;
`,l_=l.default.div.withConfig({componentId:"zh__sc-9e650079-11"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,lw=l.default.div.withConfig({componentId:"zh__sc-9e650079-12"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,ly=l.default.div.withConfig({componentId:"zh__sc-9e650079-13"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;

  min-height: 36px;
`,lv=l.default.div.withConfig({componentId:"zh__sc-9e650079-14"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  min-height: 36px;
`,lC=l.default.div.withConfig({componentId:"zh__sc-9e650079-15"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
`,lI=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-9e650079-16"})`
  width: 220px;
`,lz=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-9e650079-17"})`
  width: 24px;
  height: 24px;
`,lT=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-9e650079-18"})``,lE=l.default.span.withConfig({componentId:"zh__sc-9e650079-19"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,lS=l.default.div.withConfig({componentId:"zh__sc-9e650079-20"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,lk=l.default.div.withConfig({componentId:"zh__sc-9e650079-21"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,lD=l.default.div.withConfig({componentId:"zh__sc-9e650079-22"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: flex-start;

  min-height: 59px;

  ${({$width:e})=>void 0!==e?`width: ${e}px;`:"flex: 1; min-width: 0;"}
`,lA=l.default.div.withConfig({componentId:"zh__sc-9e650079-23"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
  text-align: center;
`,l$=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-9e650079-24"})`
  width: 100%;
  min-width: 0;
  height: 36px;
  padding: 4px 16px;

  font-size: 16px;
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,lR=l.default.span.withConfig({componentId:"zh__sc-9e650079-25"})`
  flex: 0 0 auto;
  align-self: flex-start;
  padding-top: 28px;
`,lO=l.default.div.withConfig({componentId:"zh__sc-9e650079-26"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,lL=l.default.div.withConfig({componentId:"zh__sc-9e650079-27"})`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`,lP=l.default.span.withConfig({componentId:"zh__sc-9e650079-28"})`
  flex-shrink: 0;
  font-size: 16px;
  color: #000;
`,lN=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-9e650079-29"})`
  resize: vertical;

  width: 100%;
  min-height: 100px;
  padding: 12px 16px;

  font-size: 16px;
`,lM=(0,l.default)(lN).withConfig({componentId:"zh__sc-9e650079-30"})`
  min-height: 156px;
`,lF=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-9e650079-31"})`
  width: 100%;
  padding: 4px 16px;
  font-size: 16px;
`,lB={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16},lU={borderColor:"#ff4d4f",background:"#fff5f5"},lY=l.default.div.withConfig({componentId:"zh__sc-9e650079-32"})`
  margin-top: 4px;
  font-size: 12px;
  line-height: 18px;
  color: #e7000b;
`;var lW=e.i(24655);let lV=(0,nQ.default)((0,t.jsx)("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z"}),"History");function lH({type:e,onClose:n}){let l=a.default.client.info.byClient.selectedClient,o=a.default.client.info.byClient.selectedClientId,[r,s]=(0,i.useState)([]),[c,f]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let t=!0;return(async()=>{var n,i,d,r,c;let h;if(null===o)return f(!1);if("address"===e){let e,r,c,h,[u,p]=await Promise.all([a.default.client.info.byClient.getClientChangeHistory(o,"address"),a.default.client.info.byClient.getClientChangeHistory(o,"addressDetail")]);if(!t||(f(!1),null!==u[0]||null!==p[0]||null===u[1]||null===p[1]))return;s((n=u[1],i=p[1],d=l?.createdAt??"",e=new Map,(r=(t,n)=>{t.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).forEach(({oldValue:t,newValue:i,createdAt:l},a)=>{if(0===a&&null!==t&&""!==t.trim()){let i=e.get(d)??{};i[n]=t.trim(),e.set(d,i)}let o=e.get(l)??{};o[n]=i?.trim()??"",e.set(l,o)})})(n,"address"),r(i,"addressDetail"),c="",h="",Array.from(e.entries()).sort(([e],[t])=>new Date(e).getTime()-new Date(t).getTime()).map(([e,t])=>(c=t.address??c,h=t.addressDetail??h,{address:c,addressDetail:h,changedAt:e,value:""})).filter(e=>""!==e.address||""!==e.addressDetail).reverse()));return}let[u,p]=await a.default.client.info.byClient.getClientChangeHistory(o,"phoneNumber");t&&(f(!1),null===u&&null!==p&&s((r=p,c=l?.createdAt??"",h=[],r.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).forEach(({oldValue:e,newValue:t,createdAt:n},i)=>{0===i&&null!==e&&""!==e.trim()&&h.push({address:"",addressDetail:"",changedAt:c,value:e.trim()}),null!==t&&""!==t.trim()&&h.push({address:"",addressDetail:"",changedAt:n,value:t.trim()})}),h.sort((e,t)=>new Date(t.changedAt).getTime()-new Date(e.changedAt).getTime()))))})(),()=>{t=!1}},[l?.createdAt,o,e]),(0,t.jsx)(d.default,{children:(0,t.jsxs)(lG,{children:[(0,t.jsxs)(lK,{children:[(0,t.jsxs)(lX,{children:["address"===e?"주소/상세주소":"휴대폰"," 변경 이력 보기"]}),(0,t.jsxs)(lq,{type:"button",onClick:n,children:[(0,t.jsx)(en.X,{size:14}),"닫기"]})]}),(0,t.jsx)(lQ,{children:c?(0,t.jsx)(l4,{children:"변경 이력을 불러오는 중입니다."}):(0,t.jsxs)(lJ,{children:[(0,t.jsxs)(lZ,{$isAddress:"address"===e,children:[(0,t.jsx)(l6,{children:"address"===e?"주소":"휴대폰"}),"address"===e?(0,t.jsx)(l6,{children:"상세주소"}):null,(0,t.jsx)(l6,{children:"변경 일자"})]}),0===r.length?(0,t.jsx)(l0,{$isAddress:"address"===e,children:(0,t.jsx)(l2,{children:"변경된 이력이 없습니다."})}):r.map(n=>{let i;return(0,t.jsxs)(l0,{$isAddress:"address"===e,children:[(0,t.jsx)(l1,{children:"address"===e?n.address:n.value}),"address"===e?(0,t.jsx)(l1,{children:n.addressDetail}):null,(0,t.jsx)(l1,{children:Number.isNaN((i=new Date(n.changedAt)).getTime())?"YYYY-MM-DD":`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`})]},`${n.changedAt}-${n.address}-${n.addressDetail}-${n.value}`)})]})})]})})}let lG=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-0"})`
  display: flex;
  flex-direction: column;

  width: min(980px, calc(100vw - 32px));
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
`,lK=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
`,lX=l.default.h2.withConfig({componentId:"zh__sc-cc1c5725-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #101828;
`,lq=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-cc1c5725-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 34px;
  padding: 6px 16px;

  color: #4f39f6;
`,lQ=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-4"})`
  border-radius: 0 0 8px 8px;
  background: #f9fafb;
`,lJ=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-5"})`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  margin: 28px 24px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`,lZ=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-6"})`
  display: grid;
  grid-template-columns: ${({$isAddress:e})=>e?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))"};
  min-height: 41px;
  background: #f8fafc;
`,l0=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-7"})`
  display: grid;
  grid-template-columns: ${({$isAddress:e})=>e?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))"};

  min-height: 92px;
  border-top: 1px solid #e5e7eb;

  background: white;
`,l1=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-8"})`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 0;
  padding: 12px 16px;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #464c53;
  text-align: center;
  overflow-wrap: anywhere;
`,l2=(0,l.default)(l1).withConfig({componentId:"zh__sc-cc1c5725-9"})`
  grid-column: 1 / -1;
  min-height: 92px;
  color: #464c53;
`,l6=(0,l.default)(l1).withConfig({componentId:"zh__sc-cc1c5725-10"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 19px; /* 118.75% */
  color: #1c1d22;
  text-align: center;
`,l4=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-11"})`
  padding: 32px 16px;
  font-size: 14px;
  color: #667085;
  text-align: center;
`;function l5({values:e,errorFlags:n,errorMessages:l,isEditing:a,isDisabilityActivitySupport:d,onChangeField:r}){let[s,c]=(0,i.useState)(null),f=l?.mobileText??"",h=l?.contactText??"",u=l?.postCodeText??"",p=l?.residentRegistrationNumberText??"";return(0,t.jsxs)(l3,{children:[(0,t.jsxs)(l9,{children:[(0,t.jsxs)(l8,{children:["주민등록번호",(0,t.jsx)(ao,{value:e.residentRegistrationNumberText,style:n?.residentRegistrationNumberText===!0?ac:void 0,readOnly:!a,onChange:e=>r("residentRegistrationNumberText",e)}),""!==p?(0,t.jsx)(an,{children:p}):null]}),(0,t.jsxs)(l8,{children:["성별",(0,t.jsx)(aa,{value:e.genderText,readOnly:!0})]}),(0,t.jsxs)(l8,{children:[(0,t.jsxs)(l7,{children:[(0,t.jsx)(ae,{children:"휴대폰"}),(0,t.jsxs)(at,{type:"button",disabled:a,onClick:()=>c("phone"),children:[(0,t.jsx)(lV,{sx:{fontSize:12}})," 변경 이력 보기"]})]}),(0,t.jsx)(ad,{value:e.mobileText,style:n?.mobileText===!0?ac:void 0,readOnly:!a,onChange:e=>r("mobileText",e)}),""!==f?(0,t.jsx)(an,{children:f}):null]}),(0,t.jsxs)(l8,{children:["연락처",(0,t.jsx)(ar,{value:e.contactText,style:n?.contactText===!0?ac:void 0,readOnly:!a,onChange:e=>r("contactText",e)}),""!==h?(0,t.jsx)(an,{children:h}):null]})]}),(0,t.jsxs)(l9,{children:[(0,t.jsxs)(l8,{children:[(0,t.jsxs)(l7,{children:[(0,t.jsx)(ae,{children:"주소"}),(0,t.jsxs)(at,{type:"button",disabled:a,onClick:()=>c("address"),children:[(0,t.jsx)(lV,{sx:{fontSize:12}})," 변경 이력 보기"]})]}),(0,t.jsx)(aa,{value:e.addressBaseText,readOnly:!a,onChange:e=>r("addressBaseText",e.target.value)})]}),(0,t.jsxs)(l8,{children:["상세주소",(0,t.jsx)(aa,{value:e.addressDetailText,readOnly:!a,onChange:e=>r("addressDetailText",e.target.value)})]}),(0,t.jsxs)(l8,{children:["우편번호",(0,t.jsx)(as,{value:e.postCodeText,style:n?.postCodeText===!0?ac:void 0,readOnly:!a,onChange:e=>r("postCodeText",e)}),""!==u?(0,t.jsx)(an,{children:u}):null]})]}),(0,t.jsxs)(l9,{$hasVehicleGuidance:d,children:[(0,t.jsxs)(l8,{children:["특이사항(메모)",(0,t.jsx)(aa,{value:e.memoText,readOnly:!a,onChange:e=>r("memoText",e.target.value)})]}),d?(0,t.jsxs)(l8,{children:["차량 유류비 안내",(0,t.jsxs)(ai,{children:[(0,t.jsxs)(al,{children:[(0,t.jsx)(o.default.Input.Radio,{disabled:!a,checked:!0===e.vehicleFuelCostGuided,onChange:()=>r("vehicleFuelCostGuided",!0)}),"완료"]}),(0,t.jsxs)(al,{children:[(0,t.jsx)(o.default.Input.Radio,{disabled:!a,checked:!1===e.vehicleFuelCostGuided,onChange:()=>r("vehicleFuelCostGuided",!1)}),"미완료"]})]})]}):null]}),null!==s?(0,t.jsx)(lH,{type:s,onClose:()=>c(null)}):null]})}let l3=l.default.div.withConfig({componentId:"zh__sc-481703bc-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`,l9=l.default.div.withConfig({componentId:"zh__sc-481703bc-1"})`
  display: grid;
  gap: 12px;
  width: 100%;

  &:nth-child(1) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  &:nth-child(2) {
    grid-template-columns: 1.2fr 1.2fr 1fr;
  }

  &:nth-child(3) {
    grid-template-columns: ${({$hasVehicleGuidance:e})=>!0===e?"minmax(0, 1fr) 191px":"minmax(0, 1fr)"};
  }

  @media (width <= 900px) {
    grid-template-columns: minmax(0, 1fr) !important;
  }
`,l8=l.default.label.withConfig({componentId:"zh__sc-481703bc-2"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,l7=l.default.div.withConfig({componentId:"zh__sc-481703bc-3"})`
  display: flex;
  gap: 2px;
  align-items: center;
  min-height: 20px;
`,ae=l.default.span.withConfig({componentId:"zh__sc-481703bc-4"})`
  flex-shrink: 0;
`,at=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-481703bc-5"})`
  gap: 2px;
  padding: 2px 4px;
  font-size: 12px;
  line-height: 1;
`,an=l.default.div.withConfig({componentId:"zh__sc-481703bc-6"})`
  margin-top: 2px;
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,ai=l.default.div.withConfig({componentId:"zh__sc-481703bc-7"})`
  display: flex;
  gap: 16px;
  align-items: center;
  height: 36px;
`,al=l.default.label.withConfig({componentId:"zh__sc-481703bc-8"})`
  display: inline-flex;
  gap: 4px;
  align-items: center;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
`,aa=(0,l.default)(ia).withConfig({componentId:"zh__sc-481703bc-9"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,ad=(0,l.default)(id).withConfig({componentId:"zh__sc-481703bc-10"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,ao=(0,l.default)(is).withConfig({componentId:"zh__sc-481703bc-11"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,ar=(0,l.default)(io).withConfig({componentId:"zh__sc-481703bc-12"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,as=(0,l.default)(ir).withConfig({componentId:"zh__sc-481703bc-13"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,ac={borderColor:"#ff4d4f",background:"#fff5f5"};function af({isOpen:e,onCancel:n,onConfirm:i,title:l="이용자 기본정보를 저장할까요?",description:a="수정된 정보는 연결된 서류의 자동입력 항목에 함께 반영됩니다.\n이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다.",cancelLabel:o="취소하기",confirmLabel:r="저장 및 모든 서류에 반영"}){return e?(0,t.jsx)(d.default,{children:(0,t.jsxs)(ah,{children:[(0,t.jsxs)(au,{children:[(0,t.jsx)(ap,{children:l}),(0,t.jsx)(ax,{children:a})]}),(0,t.jsxs)(ag,{children:[(0,t.jsx)(ab,{onClick:n,children:o}),(0,t.jsx)(aj,{onClick:i,children:r})]})]})}):null}let ah=l.default.div.withConfig({componentId:"zh__sc-952cde00-0"})`
  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,au=l.default.div.withConfig({componentId:"zh__sc-952cde00-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,ap=l.default.p.withConfig({componentId:"zh__sc-952cde00-2"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,ax=l.default.p.withConfig({componentId:"zh__sc-952cde00-3"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
  white-space: pre-line;
`,ag=l.default.div.withConfig({componentId:"zh__sc-952cde00-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,am=l.css`
  height: 36px;
  padding: 8px 16px;
  font-size: 16px;
`,ab=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-952cde00-5"})`
  ${am}
`,aj=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-952cde00-6"})`
  ${am}
`,a_=(0,n.observer)(function({detailFormValues:e,errorFlags:n,errorMessages:l,isEditing:d,onStartEdit:o,onCancelEdit:r,requestOpenSaveConfirm:s,requestSaveEdit:c,onChangeField:f}){let h=a.default.client.info.byClient,[u,p]=(0,i.useState)(!1),x=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!d||u)return;let e=e=>{let t=e.target,n=t instanceof Node&&null!==x.current&&x.current.contains(t),i=t instanceof Element&&(null!==t.closest('[role="listbox"]')||null!==t.closest('[role="option"]')||null!==t.closest("[data-radix-select-viewport]")||null!==t.closest("[data-radix-popper-content-wrapper]"));n||i||r()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[u,d,r]);let g=async()=>{!0===await c()&&p(!1)};return(0,t.jsxs)(n9,{ref:x,children:[(0,t.jsx)(n8,{children:(0,t.jsxs)(n7,{children:[(0,t.jsxs)(aw,{children:[(0,t.jsx)(ie,{children:"인적사항"}),d?(0,t.jsx)(il,{children:"수정 진행중"}):null]}),d?(0,t.jsxs)(it,{children:[(0,t.jsxs)(ii,{type:"button",onClick:r,children:[(0,t.jsx)(i9.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(ii,{type:"button",onClick:()=>{0===Object.keys(h.selectedUserInfoDraft).length?r():s()&&p(!0)},children:[(0,t.jsx)(lW.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(ii,{type:"button",onClick:o,children:[(0,t.jsx)(n2.default,{sx:{fontSize:20}}),"수정하기"]})]})}),(0,t.jsx)(l5,{values:e,isDisabilityActivitySupport:"DISABILITY_ACTIVITY_SUPPORT"===h.currentServiceType,errorFlags:n,errorMessages:l,isEditing:d,onChangeField:f}),(0,t.jsx)(af,{isOpen:u,onCancel:()=>{p(!1)},onConfirm:()=>{g()}})]})}),aw=l.default.div.withConfig({componentId:"zh__sc-6d1cdb58-0"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,ay=["client.resident-registration-number.view","sensitive.rrn.view"],av=(0,n.observer)(function(){let e,n=a.default.client.info.byClient,l=n.selectedClientId,d=n.selectedClient,o=d?.name??"",r=n.selectedUserInfoDraft,s=n.selectedUserInfoValidationErrors,c=n.isUserInfoEditing,f=n.selectedGuardianList,h=a.default.client.info.byClient.selectedGuardianId,u=(a.default.data.auth.me.data?.permissions??[]).some(e=>ay.includes(e)),p=d?.id;(0,i.useEffect)(()=>{void 0!==p&&u&&n.loadFullResidentRegistrationNumber(p)},[n,u,p]);let x=(0,i.useRef)(null),g=(0,i.useRef)(null),m=(0,i.useMemo)(()=>({genderText:d?.gender==="MALE"?"남성":d?.gender==="FEMALE"?"여성":"",residentRegistrationNumberText:d?.residentRegistrationNumber??"",contactText:d?.contact??"",mobileText:d?.phoneNumber??"",addressBaseText:d?.address??"",addressDetailText:d?.addressDetail??"",postCodeText:d?.postCode??"",memoText:d?.note??"",vehicleFuelCostGuided:d?.vehicleFuelCostNoticeGiven??void 0}),[d?.gender,d?.residentRegistrationNumber,d?.contact,d?.phoneNumber,d?.address,d?.addressDetail,d?.postCode,d?.note,d?.vehicleFuelCostNoticeGiven]);if((0,i.useEffect)(()=>{x.current?.scrollTo({top:0,behavior:"auto"})},[l]),(0,i.useEffect)(()=>(n.setToastContainer(n.isDeleteConfirmOpen?g.current:x.current),()=>{n.setToastContainer(null)}),[n,n.isDeleteConfirmOpen]),null===l)return(0,t.jsx)(n3,{children:"서비스를 선택한 뒤 이용자를 선택해 주세요."});let b=async()=>n.saveSelectedUserInfoDraft(),j={...m,genderText:c?"male"===(e=function(e){if(null===e)return"unknown";let t=e.trim().replace(/[^0-9]/g,"");if(t.length<7)return"unknown";switch(t[6]){case"1":case"3":return"male";case"2":case"4":return"female";default:return"unknown"}}(r.residentRegistrationNumber??m.residentRegistrationNumberText))?"남성":"female"===e?"여성":m.genderText:m.genderText,residentRegistrationNumberText:c?r.residentRegistrationNumber??m.residentRegistrationNumberText:m.residentRegistrationNumberText,contactText:c?r.contact??m.contactText:m.contactText,mobileText:c?r.phoneNumber??m.mobileText:m.mobileText,addressBaseText:c?r.address??m.addressBaseText:m.addressBaseText,addressDetailText:c?r.addressDetail??m.addressDetailText:m.addressDetailText,postCodeText:c?r.postCode??m.postCodeText:m.postCodeText,memoText:c?r.note??m.memoText:m.memoText,vehicleFuelCostGuided:c?r.vehicleFuelCostNoticeGiven??m.vehicleFuelCostGuided:m.vehicleFuelCostGuided},_={mobileText:void 0!==s.phoneNumber,contactText:void 0!==s.contact,postCodeText:void 0!==s.postCode,residentRegistrationNumberText:void 0!==s.residentRegistrationNumber},w={mobileText:s.phoneNumber,contactText:s.contact,postCodeText:s.postCode,residentRegistrationNumberText:s.residentRegistrationNumber};return(0,t.jsxs)(n5,{ref:x,children:[(0,t.jsx)(a_,{detailFormValues:j,isEditing:c,onStartEdit:()=>{n.startUserInfoEdit()},onCancelEdit:()=>{n.cancelUserInfoEdit()},requestOpenSaveConfirm:()=>n.validateSelectedUserInfoDraftBeforeConfirm(),requestSaveEdit:b,errorFlags:_,errorMessages:w,onChangeField:(e,t)=>{if("vehicleFuelCostGuided"===e){"boolean"==typeof t&&n.updateSelectedUserInfoDraftField("vehicleFuelCostNoticeGiven",t);return}if("string"==typeof t){if("contactText"===e)return void n.updateSelectedUserInfoDraftField("contact",t);if("mobileText"===e)return void n.updateSelectedUserInfoDraftField("phoneNumber",t);if("residentRegistrationNumberText"===e)return void n.updateSelectedUserInfoDraftField("residentRegistrationNumber",t);if("addressBaseText"===e)return void n.updateSelectedUserInfoDraftField("address",t);if("addressDetailText"===e)return void n.updateSelectedUserInfoDraftField("addressDetail",t);if("postCodeText"===e)return void n.updateSelectedUserInfoDraftField("postCode",t);if("memoText"===e)return void n.updateSelectedUserInfoDraftField("note",t)}}}),(0,t.jsx)(i_,{guardianList:f,selectedGuardianId:h,onAddGuardian:e=>n.createGuardian({name:e.name,phoneNumber:e.phone,relationship:e.relation,address:e.address}),onUpdateGuardian:(e,t)=>n.updateGuardian(e,{name:t.name,phoneNumber:t.phone,relationship:t.relation,address:t.address})}),(0,t.jsx)(lr,{}),(0,t.jsxs)(ic,{type:"button",disabled:n.isDeleting,onClick:()=>{n.openDeleteConfirm()},children:[(0,t.jsx)(ei.default.Delete,{size:16}),"삭제하기"]}),n.isDeleteConfirmOpen?(0,t.jsx)(ih,{children:(0,t.jsxs)(iu,{ref:g,children:[(0,t.jsxs)(ip,{children:[(0,t.jsxs)(ix,{children:[o," 이용자를 삭제하시겠어요?"]}),(0,t.jsxs)(ig,{children:["삭제한 이용자 정보는 복구할 수 없습니다.",(0,t.jsx)("br",{}),"서비스를 제공 받은 이력이 없는 이용자만 삭제할 수 있습니다."]})]}),(0,t.jsxs)(im,{children:[(0,t.jsx)(ib,{type:"button",disabled:n.isDeleting,onClick:()=>{n.closeDeleteConfirm()},children:"취소하기"}),(0,t.jsx)(ij,{type:"button",disabled:n.isDeleting,onClick:()=>{n.confirmDelete()},children:"삭제하기"})]})]})}):null]})});var aC=e.i(23416),aI=e.i(98733),az=e.i(87840),aT=e.i(17106);function aE({isOpen:e,onCancel:n,onConfirm:i,title:l="수정 중인 내용을 저장하지 않고 이동할까요?",description:a="현재 수정 중인 내용이 저장되지 않습니다. 다른 항목을 수정하시겠습니까?",confirmLabel:o="다른 항목 수정",cancelLabel:r="계속 수정"}){return e?(0,t.jsx)(d.default,{children:(0,t.jsxs)(aS,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(ak,{children:[(0,t.jsx)(aD,{children:l}),(0,t.jsx)(aA,{children:a})]}),(0,t.jsxs)(a$,{children:[(0,t.jsx)(aO,{type:"button",onClick:n,children:r}),(0,t.jsx)(aL,{type:"button",onClick:i,children:o})]})]})}):null}let aS=l.default.div.withConfig({componentId:"zh__sc-1f9caf5a-0"})`
  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,ak=l.default.div.withConfig({componentId:"zh__sc-1f9caf5a-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,aD=l.default.p.withConfig({componentId:"zh__sc-1f9caf5a-2"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,aA=l.default.p.withConfig({componentId:"zh__sc-1f9caf5a-3"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
  white-space: pre-line;
`,a$=l.default.div.withConfig({componentId:"zh__sc-1f9caf5a-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,aR=l.css`
  height: 36px;
  padding: 8px 16px;
  font-size: 16px;
`,aO=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-1f9caf5a-5"})`
  ${aR}
`,aL=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-1f9caf5a-6"})`
  ${aR}
`;var aP=e.i(49024),aN=e.i(66013),aM=e.i(99661);function aF({contractId:e,clientId:n,initialReason:l,initialNote:d,waitingSince:o}){let[r,s]=(0,i.useState)(l),[c,f]=(0,i.useState)(d??""),[h,u]=(0,i.useState)(!1),p=r!==l||c.trim()!==(d??""),x=async()=>{u(!0);let[t]=await aC.default.data.contract.update({id:e,payload:{matchingWaitReason:r,matchingWaitNote:""===c.trim()?null:c.trim()}});if(u(!1),null!==t){let e=(0,aT.getSaveErrorMessage)(t,"매칭대기 사유를 저장하지 못했어요. 잠시 후 다시 시도해 주세요.");null!==e&&a.default.ui.layout.toast.error(e);return}a.default.client.info.byClient.preserveClientAfterSave(n),await a.default.data.contract.list.refetch(),await a.default.data.client.list.refetch(),a.default.ui.layout.toast.success("매칭대기 사유를 저장했어요.")};return(0,t.jsxs)(aB,{children:[(0,t.jsxs)(aU,{children:["매칭대기 ",null===o?"-":o.replaceAll("-","."),"부터"]}),(0,t.jsxs)(aY,{children:["매칭대기 사유",(0,t.jsxs)(aW,{value:r??"",onChange:e=>s((0,aM.isMatchingWaitReason)(e.target.value)?e.target.value:null),children:[(0,t.jsx)("option",{value:"",children:"사유 선택"}),Object.entries(aM.default).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))]})]}),(0,t.jsx)(aV,{value:c,maxLength:200,placeholder:"메모(예: 10/1~10/20 입원)",onChange:e=>f(e.target.value)}),(0,t.jsx)(aH,{type:"button",disabled:!p||h,onClick:()=>void x(),children:h?"저장 중…":"저장"}),(0,aM.isNotMatchableWaitReason)(r)?(0,t.jsx)(aG,{children:"입원·일시중지는 스마트 매칭 대상에서 빠져요."}):null]})}let aB=l.default.div.withConfig({componentId:"zh__sc-218bdd37-0"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  margin-top: 12px;
`,aU=l.default.span.withConfig({componentId:"zh__sc-218bdd37-1"})`
  font-size: 14px;
  font-weight: 600;
  color: #c4320a;
`,aY=l.default.label.withConfig({componentId:"zh__sc-218bdd37-2"})`
  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  color: #344054;
`,aW=l.default.select.withConfig({componentId:"zh__sc-218bdd37-3"})`
  height: 34px;
  padding: 0 8px;
  border: 1px solid #b1b8be;
  border-radius: 6px;
`,aV=l.default.input.withConfig({componentId:"zh__sc-218bdd37-4"})`
  flex: 1;

  min-width: 200px;
  height: 34px;
  padding: 0 10px;
  border: 1px solid #b1b8be;
  border-radius: 6px;

  font-size: 14px;
`,aH=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-218bdd37-5"})`
  height: 34px;
  padding: 0 14px;
  font-size: 14px;
`,aG=l.default.span.withConfig({componentId:"zh__sc-218bdd37-6"})`
  width: 100%;
  font-size: 12px;
  color: #98a2b3;
`;var aK=e.i(88552);let aX=(0,nQ.default)((0,t.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");var aq=e.i(44534);let aQ=(0,n.observer)(function({clientId:e,currentServiceWorkerId:n,onClose:l,onSelectServiceWorker:d,serviceType:r}){let[s,c]=(0,i.useState)(""),f=a.default.data.client.availableServiceWorkerList;(0,i.useEffect)(()=>(f.setQuery({clientId:e,serviceType:r}),()=>f.reset()),[f,e,r]);let h=(0,i.useMemo)(()=>f.data?.map(e=>({serviceWorker:e,_searchableName:aq.default.create(e.name)}))??[],[f.data]).filter(({_searchableName:e})=>aq.default.isMatch(e,s));return(0,t.jsx)(aJ,{children:(0,t.jsxs)(aZ,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(a0,{children:[(0,t.jsx)(a1,{}),(0,t.jsx)(a2,{children:"연결할 제공인력 선택하기"}),(0,t.jsx)(o.default.Button.Outlined,{type:"button",style:{width:56,height:36},onClick:l,children:(0,t.jsx)(n0.default,{sx:{fontSize:20}})})]}),(0,t.jsx)(a6,{}),(0,t.jsx)(a4,{children:(0,t.jsxs)(a5,{children:[(0,t.jsx)(aX,{sx:{fontSize:22},style:{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",color:"#9CA3AF"}}),(0,t.jsx)(a3,{placeholder:"제공인력 이름을 검색하세요.",value:s,onChange:e=>c(e.target.value)})]})}),(0,t.jsxs)(a8,{children:["loading"===f.status?(0,t.jsx)(a9,{children:"제공인력을 불러오는 중..."}):null,"error"===f.status?(0,t.jsx)(a9,{children:"제공인력 목록을 불러오지 못했습니다."}):null,"success"===f.status&&0===h.length?(0,t.jsx)(a9,{children:"연결할 수 있는 제공인력이 없습니다."}):null,h.map(({serviceWorker:e})=>(0,t.jsxs)(a7,{children:[(0,t.jsxs)(de,{children:[(0,t.jsxs)(dt,{children:[(0,t.jsx)(dn,{children:e.name}),e.id===n?(0,t.jsx)(di,{children:"지금 연결됨"}):null]}),(0,t.jsxs)(dl,{children:[(0,t.jsxs)(da,{children:[(0,t.jsx)(dd,{children:"주소"}),(0,t.jsx)(dr,{}),(0,t.jsx)(ds,{children:[e.address,e.addressDetail].filter(e=>null!==e&&""!==e.trim()).join(" ")||"-"})]}),(0,t.jsxs)(da,{children:[(0,t.jsx)(dd,{children:"연락처"}),(0,t.jsx)(dr,{}),(0,t.jsx)(ds,{children:e.phoneNumber??e.contact??"-"})]})]})]}),(0,t.jsx)(dc,{children:(0,t.jsxs)(df,{type:"button",disabled:e.id===n,onClick:()=>{e.id!==n&&d?.(e.id,e.name)},children:["선택",(0,t.jsx)(aK.default,{sx:{fontSize:18}})]})})]},e.id))]})]})})}),aJ=l.default.div.withConfig({componentId:"zh__sc-c92b9463-0"})`
  position: absolute;
  z-index: 1000;
  inset: 0;

  display: flex;
  justify-content: flex-end;

  padding-top: 69px;
`,aZ=l.default.div.withConfig({componentId:"zh__sc-c92b9463-1"})`
  display: flex;
  flex-direction: column;

  width: min(417px, 100%);
  height: 100%;

  background: #fff;
  box-shadow: -2px 9px 16px rgb(0 0 0 / 16%);
`,a0=l.default.div.withConfig({componentId:"zh__sc-c92b9463-2"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`,a1=l.default.div.withConfig({componentId:"zh__sc-c92b9463-3"})`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
`,a2=l.default.div.withConfig({componentId:"zh__sc-c92b9463-4"})`
  flex: 1;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #101828;
  text-align: center;
`,a6=l.default.div.withConfig({componentId:"zh__sc-c92b9463-5"})`
  height: 1px;
  background: #e5e7eb;
`,a4=l.default.div.withConfig({componentId:"zh__sc-c92b9463-6"})`
  padding: 16px;
`,a5=l.default.div.withConfig({componentId:"zh__sc-c92b9463-7"})`
  position: relative;
`,a3=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-c92b9463-8"})`
  width: 100%;
  height: 36px;
  padding-left: 48px;
`,a9=l.default.div.withConfig({componentId:"zh__sc-c92b9463-9"})`
  padding: 24px 0;
  font-size: 14px;
  color: #667085;
  text-align: center;
`,a8=l.default.div.withConfig({componentId:"zh__sc-c92b9463-10"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  padding: 16px;

  background: #f9fafb;
`,a7=l.default.div.withConfig({componentId:"zh__sc-c92b9463-11"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  min-height: 148px;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,de=l.default.div.withConfig({componentId:"zh__sc-c92b9463-12"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,dt=l.default.div.withConfig({componentId:"zh__sc-c92b9463-13"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,dn=l.default.div.withConfig({componentId:"zh__sc-c92b9463-14"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,di=l.default.span.withConfig({componentId:"zh__sc-c92b9463-15"})`
  padding: 2px 8px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  color: #1d4ed8;

  background: #dbeafe;
`,dl=l.default.div.withConfig({componentId:"zh__sc-c92b9463-16"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-self: stretch;
`,da=l.default.div.withConfig({componentId:"zh__sc-c92b9463-17"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,dd=l.default.div.withConfig({componentId:"zh__sc-c92b9463-18"})`
  min-width: 42px;
  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
`,dr=l.default.div.withConfig({componentId:"zh__sc-c92b9463-19"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,ds=l.default.div.withConfig({componentId:"zh__sc-c92b9463-20"})`
  overflow: hidden;

  min-width: 0;

  font-size: 14px;
  line-height: 20px;
  color: #667085;
  text-overflow: ellipsis;
  white-space: nowrap;
`,dc=l.default.div.withConfig({componentId:"zh__sc-c92b9463-21"})`
  display: flex;
  align-self: stretch;
  justify-content: flex-end;
  margin-top: auto;
`,df=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-c92b9463-22"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 12px;
`;l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 48px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
  min-height: 0;
  padding: 24px;

  background: #fcfdff;
`,l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-1"})`
  padding: 16px;
  border: 1px dashed #d1d5db;
  border-radius: 10px;

  font-size: 14px;
  color: #6b7280;
`;let dh=l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,du=l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-3"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  min-height: 40px;
`,dp=l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-4"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: space-between;

  min-width: 0;
  min-height: 40px;
`,dx=l.default.h3.withConfig({componentId:"zh__sc-b19bd4fc-5"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #101828;
`,dg=l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-6"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,dm=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-b19bd4fc-7"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
  border-radius: 6px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #4f39f6;

  &:disabled {
    cursor: not-allowed;

    border-color: #d1d5db;

    color: #9ca3af;

    opacity: 1;
    background: #f9fafb;
  }
`,db=l.default.span.withConfig({componentId:"zh__sc-b19bd4fc-8"})`
  padding: 2px 12px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #45464e;
`,dj=l.default.span.withConfig({componentId:"zh__sc-b19bd4fc-9"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #fff;
  white-space: nowrap;

  background: #4f39f6;
`;(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-b19bd4fc-10"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,(0,l.default)(o.default.Input.Phone).withConfig({componentId:"zh__sc-b19bd4fc-11"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,(0,l.default)(o.default.Input.Contact).withConfig({componentId:"zh__sc-b19bd4fc-12"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,(0,l.default)(o.default.Input.PostCode).withConfig({componentId:"zh__sc-b19bd4fc-13"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-b19bd4fc-14"})`
  width: 100%;
  height: 28px;
  font-size: 16px;
  line-height: 16px;
`,(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-b19bd4fc-15"})`
  display: flex;
  gap: 8px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-16"})`
  position: fixed;
  z-index: 1000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 35%);
`,l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-17"})`
  position: relative;

  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-18"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,l.default.h2.withConfig({componentId:"zh__sc-b19bd4fc-19"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,l.default.p.withConfig({componentId:"zh__sc-b19bd4fc-20"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
`,l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-21"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-b19bd4fc-22"})`
  height: 36px;
  padding: 8px 16px;
`,(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-b19bd4fc-23"})`
  height: 36px;
  padding: 8px 16px;
`;let d_=(0,n.observer)(function(){let[e,n]=(0,i.useState)(!1),[l,d]=(0,i.useState)(!1),[o,r]=(0,i.useState)(!1),[s,c]=(0,i.useState)(null),f=a.default.client.info.byClient,h=a.default.data.serviceWorker.detail,u=f.selectedContract,p=f.selectedClientId,x=u?.serviceType??null,g=u?.serviceWorkerId??null,m=h.data,b=null!==g&&m?.id===g;(0,i.useEffect)(()=>{null!==g&&h.setQuery({id:g})},[h,g]);let j=async e=>{if(null===u||null===p||l)return;d(!0);let[t]=await aC.default.data.contract.update({id:u.id,payload:{serviceWorkerId:e,expectedServiceWorkerId:u.serviceWorkerId??null}});if(d(!1),null!==t){let e=(0,aT.getSaveErrorMessage)(t,"제공인력 연결에 실패했습니다. 잠시 후 다시 시도해 주세요.");null!==e&&a.default.ui.layout.toast.error(e),(0,aT.getApiErrorResponse)(t)?.errorCode===aN.default.CONTRACT_CONCURRENT_UPDATE&&(f.preserveClientAfterSave(p),await a.default.data.contract.list.refetch());return}f.preserveClientAfterSave(p),f.setHighlightedClientId(p),await a.default.data.contract.list.refetch(),await a.default.data.client.list.refetch(),n(!1),a.default.ui.layout.toast.success("제공인력을 연결했습니다.")};return(0,t.jsxs)(dh,{children:[(0,t.jsx)(du,{children:(0,t.jsxs)(dp,{children:[(0,t.jsx)(dx,{children:"연결된 제공인력 정보"}),(0,t.jsxs)(dg,{children:[(0,t.jsxs)(dm,{type:"button",disabled:null===u,onClick:()=>r(!0),children:[(0,t.jsx)(az.default,{sx:{fontSize:20}}),"연결 이력"]}),(0,t.jsxs)(dm,{type:"button",disabled:!0,children:[(0,t.jsx)(n2.default,{sx:{fontSize:20}}),"수정하기"]}),(0,t.jsxs)(dm,{type:"button",disabled:null===u||null===x||l,onClick:()=>n(!0),children:[(0,t.jsx)(nJ,{sx:{fontSize:20}}),"추가하기"]})]})]})}),b?(0,t.jsx)(dy,{children:(0,t.jsxs)(dw,{$isSelected:b,children:[(0,t.jsx)(dv,{children:(0,t.jsx)(dC,{children:m.name})}),(0,t.jsxs)(dI,{children:[(0,t.jsxs)(dz,{children:[(0,t.jsx)(dT,{children:"주소"}),(0,t.jsx)(dE,{}),(0,t.jsx)(dS,{children:[m.address,m.addressDetail].filter(e=>null!==e&&""!==e.trim()).join(" ")||"-"})]}),(0,t.jsxs)(dz,{children:[(0,t.jsx)(dT,{children:"연락처"}),(0,t.jsx)(dE,{}),(0,t.jsx)(dS,{children:m.phoneNumber??m.contact??"-"})]}),(0,t.jsxs)(dz,{children:[(0,t.jsx)(dT,{children:"이메일"}),(0,t.jsx)(dE,{}),(0,t.jsx)(dS,{children:"-"})]})]}),(0,t.jsx)(dk,{children:(0,t.jsx)(dD,{children:"연결됨"})})]})}):(0,t.jsxs)(dA,{children:[(0,t.jsx)(n6.default,{sx:{fontSize:24,color:"#494F53"}}),(0,t.jsxs)(d$,{children:[(0,t.jsx)(dR,{children:"연결된 제공인력이 없습니다."}),(0,t.jsx)(dO,{children:"[+추가하기] 버튼을 클릭해 제공인력을 연결해주세요."})]})]}),b||null!==g||null===u||null===p?null:(0,t.jsx)(aF,{contractId:u.id,clientId:p,initialReason:u.matchingWaitReason??null,initialNote:u.matchingWaitNote??null,waitingSince:u.matchingWaitSince??f.selectedClient?.firstRegisteredDate??null},`${u.id}-${u.matchingWaitReason??""}-${u.matchingWaitNote??""}`),e&&null!==p&&null!==x?(0,t.jsx)(aQ,{clientId:p,currentServiceWorkerId:g,onClose:()=>n(!1),onSelectServiceWorker:(e,t)=>{null!==g&&e!==g?c({serviceWorkerId:e,name:t}):j(e)},serviceType:x}):null,(0,t.jsx)(aE,{isOpen:null!==s,title:"이미 담당 제공인력이 있는 계약이에요.",description:`지금 ${b?m.name:"다른"} 제공인력이 담당하고 있어요. ${s?.name??"고른"} 제공인력으로 담당을 바꿀까요? 바꾸면 기존 담당자와의 연결은 끊어져요.`,cancelLabel:"취소",confirmLabel:"담당 바꾸기",onCancel:()=>c(null),onConfirm:()=>{c(null),null!==s&&j(s.serviceWorkerId)}}),o&&null!==u?(0,t.jsx)(aP.default,{title:"제공인력 연결 이력",source:{kind:"contract",contractId:u.id},onClose:()=>r(!1)}):null]})}),dw=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-0"})`
  position: relative;

  display: flex;
  flex: 0 0 319px;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;

  width: 319px;
  height: 186px;
  padding: 16px;
  border: 1px solid ${e=>e.$isSelected?"#5635ff":"#e5e9ef"};
  border-radius: 8px;

  background: ${e=>e.$isSelected?"#f7f5ff":"#fff"};
  box-shadow: ${e=>e.$isSelected?"0 0 3px #ddd8ff":"none"};
`,dy=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-1"})`
  overflow: auto hidden;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;

  width: 100%;
`,dv=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  width: 100%;
`,dC=l.default.h4.withConfig({componentId:"zh__sc-bfa96d56-3"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,dI=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-4"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 100%;
  padding-bottom: 36px;
`,dz=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-5"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
`,dT=l.default.span.withConfig({componentId:"zh__sc-bfa96d56-6"})`
  width: 52px;
  min-width: 52px;

  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
`,dE=l.default.span.withConfig({componentId:"zh__sc-bfa96d56-7"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,dS=l.default.span.withConfig({componentId:"zh__sc-bfa96d56-8"})`
  min-width: 0;

  font-size: 14px;
  line-height: 20px;
  color: #45464e;
  overflow-wrap: anywhere;
`,dk=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-9"})`
  position: absolute;
  right: 16px;
  bottom: 16px;

  display: flex;
  justify-content: flex-end;
`,dD=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-10"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 999px;

  font-size: 16px;
  line-height: 16px;
  color: #fff;
  letter-spacing: -1px;

  background: #4f39f6;
`,dA=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-11"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 186px;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,d$=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-12"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,dR=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-13"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
`,dO=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-14"})`
  font-size: 14px;
  line-height: 20px;
  color: #494f53;
  text-align: center;
`;var dL=e.i(93384),dP=e.i(95649),dN=e.i(2615);function dM(e){return""===e.trim()?"-":e}let dF=["수급자, 차상위","120% 이하","120~160%","160% 초과"],dB=["meal","nutrition"];function dU(e){return`${e.toLocaleString("ko-KR")} 원`}function dY(e){return`${e.toLocaleString("ko-KR")}원`}function dW({serviceCode:e,grade:n,paymentMethodText:l,paymentDayText:a,monthlyUsage:d,serviceFees:o}){let[r,s]=(0,i.useState)(!0),c=e??"meal",f=null===n||!1===Number.isInteger(n)?null:Math.max(0,n-1),h=`${new Date().getMonth()+1}월`,u=d?.providedCount??0,p=d?.scheduledCount??0,x=d?.expectedGovernmentSupportAmount??0,g=d?.expectedCopaymentAmount??0,m=d?.expectedTotalAmount??0,b=p>0?Math.floor(x/p):0,j=p>0?Math.floor(g/p):0;return(0,t.jsxs)(dh,{children:[(0,t.jsx)(du,{children:(0,t.jsx)(dp,{children:(0,t.jsxs)(dV,{children:[(0,t.jsx)(dx,{children:"계약서 세부내역"}),(0,t.jsx)(db,{children:"30일 기준"})]})})}),(0,t.jsxs)(dH,{children:[(0,t.jsxs)(dG,{children:[(0,t.jsxs)(dK,{children:["납부방법",(0,t.jsx)(dX,{children:dM(l)})]}),(0,t.jsxs)(dK,{children:["납입일",(0,t.jsx)(dX,{children:dM(a)})]})]}),(0,t.jsxs)(dq,{children:[(0,t.jsxs)(dQ,{children:[(0,t.jsxs)(dJ,{children:[(0,t.jsxs)(dZ,{children:[(0,t.jsxs)(d0,{children:[h," 사회서비스 금액 총계"]}),(0,t.jsxs)(d1,{children:[(0,t.jsxs)("span",{children:["정부지원금(",dY(x),")"]}),(0,t.jsx)("span",{"aria-hidden":!0,children:"+"}),(0,t.jsxs)("span",{children:["본인부담금 결제액(",dY(g),")"]})]})]}),(0,t.jsxs)(d2,{children:["총 ",dU(m)]})]}),(0,t.jsx)(d6,{}),(0,t.jsxs)(d4,{children:[(0,t.jsx)(d5,{children:"세부내역"}),(0,t.jsxs)(d8,{children:[(0,t.jsxs)(d7,{children:[(0,t.jsxs)(oe,{children:[(0,t.jsx)(d3,{children:"정부지원금(바우처) 결제액"}),(0,t.jsxs)(ot,{children:[(0,t.jsxs)(on,{children:["1회당 정부지원금(",dY(b),")"]}),(0,t.jsx)(on,{children:"x"}),(0,t.jsxs)(on,{$highlighted:!0,children:["당월 이용 ",u,"회"]})]})]}),(0,t.jsx)(d9,{children:dU(x)})]}),(0,t.jsxs)(d7,{children:[(0,t.jsxs)(oe,{children:[(0,t.jsx)(d3,{children:"본인부담금 결제액"}),(0,t.jsxs)(ot,{children:[(0,t.jsxs)(on,{children:["1회당 본인 부담금(",dY(j),")"]}),(0,t.jsx)(on,{children:"x"}),(0,t.jsxs)(on,{$highlighted:!0,children:["당월 이용 ",u,"회"]})]})]}),(0,t.jsx)(d9,{children:dU(g)})]})]})]})]}),(0,t.jsxs)(oi,{children:[(0,t.jsx)(ol,{children:(0,t.jsxs)(oa,{type:"button","aria-controls":"monthly-fee-guide-table","aria-expanded":r,onClick:()=>{s(e=>!e)},children:[(0,t.jsxs)(od,{children:[(0,t.jsx)(dL.default,{sx:{fontSize:24,color:"#1C1B1F"}}),(0,t.jsxs)(os,{children:["월별 서비스 이용금액 안내 예시 (",n??"-","등급/",p,"회 기준 )"]})]}),!0===r?(0,t.jsx)(oo,{"aria-hidden":!0,htmlColor:"#0a0a0a"}):(0,t.jsx)(or,{"aria-hidden":!0,htmlColor:"#0a0a0a"})]})}),!0===r?(0,t.jsxs)(oc,{id:"monthly-fee-guide-table",children:[(0,t.jsxs)("colgroup",{children:[(0,t.jsx)("col",{style:{width:"23px"}}),(0,t.jsx)("col",{style:{width:"40px"}}),(0,t.jsx)("col",{style:{width:"27px"}}),(0,t.jsx)("col",{style:{width:"103px"}}),(0,t.jsx)("col",{style:{width:"auto"}}),(0,t.jsx)("col",{style:{width:"auto"}}),(0,t.jsx)("col",{style:{width:"auto"}})]}),(0,t.jsxs)("thead",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(of,{colSpan:3,rowSpan:2,children:"서비스 종류"}),(0,t.jsx)(of,{rowSpan:2,children:"바우처 총액 (월)"}),(0,t.jsx)(of,{colSpan:3,children:"소득수준별 금액"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)(of,{children:"소득수준"}),(0,t.jsx)(of,{children:"본인부담금"}),(0,t.jsx)(of,{children:"정부지원금"})]})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(ou,{rowSpan:9}),(0,t.jsx)(oh,{colSpan:6,children:"본인부담 : 월 단위 결제"})]}),dB.flatMap(e=>(o[e]??[]).map((n,i)=>{let l=null!==f&&e===c&&i===f;return(0,t.jsxs)("tr",{children:["meal"===e&&0===i?(0,t.jsxs)(op,{rowSpan:8,children:[(0,t.jsx)("div",{style:{fontSize:10,fontWeight:400},children:"중장년, 청년"}),(0,t.jsx)("span",{children:"식사∙영양관리"})]}):null,0===i?(0,t.jsx)(ox,{rowSpan:4,children:"meal"===e?"식사관리":"영양관리"}):null,0===i?(0,t.jsx)(og,{rowSpan:4,children:dY((o[e]??[]).reduce((e,t)=>e+t.copay+t.voucher,0))}):null,(0,t.jsx)(om,{$highlighted:l,$isFirstHighlightCell:!0,children:dF[i]}),(0,t.jsx)(om,{$highlighted:l,children:dY(n.copay)}),(0,t.jsx)(om,{$highlighted:l,$isLastHighlightCell:!0,children:dY(n.voucher)})]},`${e}-${dF[i]}`)}))]})]}):null]})]})]})]})}let dV=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-0"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,dH=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-1"})`
  display: flex;
  gap: 20px;
  align-items: flex-start;

  width: 100%;
  padding: 20px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #f6f8ff;
`,dG=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 212px;
  min-width: 0;
`,dK=l.default.label.withConfig({componentId:"zh__sc-27bdacd5-3"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;
`,dX=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-4"})`
  overflow: hidden;
  display: flex;
  align-items: center;

  height: 36px;
  padding: 0 16px;
  border: 1px solid #d1d5db;
  border-radius: 4px;

  font-size: 16px;
  line-height: 20px;
  color: #0a0a0a;
  text-overflow: ellipsis;
  white-space: nowrap;

  background: #f9fafb;
`,dq=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-5"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  min-width: 0;
`,dQ=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-6"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  min-width: 0;
  padding: 20px 16px;
  border: 1px solid #cdd8ec;
  border-radius: 8px;

  background: #fff;
`,dJ=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-7"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
`,dZ=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-8"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`,d0=l.default.h4.withConfig({componentId:"zh__sc-27bdacd5-9"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,d1=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-10"})`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 16px;
  line-height: 20px;
  color: #0a0a0a;

  span {
    white-space: nowrap;
  }

  span:first-child,
  span:last-child {
    font-size: 14px;
  }
`,d2=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-11"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #e7000b;
`,d6=l.default.hr.withConfig({componentId:"zh__sc-27bdacd5-12"})`
  width: 100%;
  margin: 0;
  border: 0;
  border-top: 1px solid #e5e7eb;
`,d4=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-13"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,d5=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-14"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,d3=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-15"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,d9=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-16"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,d8=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-17"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,d7=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-18"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
`,oe=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-19"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`,ot=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-20"})`
  display: flex;
  gap: 4px;
  align-items: center;
  min-width: 0;
`,on=l.default.span.withConfig({componentId:"zh__sc-27bdacd5-21"})`
  font-size: 14px;
  font-weight: ${({$highlighted:e})=>!0===e?700:400};
  line-height: 20px;
  color: ${({$highlighted:e})=>!0===e?"#e7000b":"#0a0a0a"};
  white-space: nowrap;
`,oi=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-22"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 20px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,ol=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-23"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`,oa=l.default.button.withConfig({componentId:"zh__sc-27bdacd5-24"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0;
  border: 0;

  background: transparent;
`,od=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-25"})`
  display: flex;
  gap: 4px;
  align-items: center;
  min-width: 0;
`,oo=(0,l.default)(dN.default).withConfig({componentId:"zh__sc-27bdacd5-26"})`
  flex-shrink: 0;
  font-size: 24px;
`,or=(0,l.default)(dP.default).withConfig({componentId:"zh__sc-27bdacd5-27"})`
  flex-shrink: 0;
  font-size: 24px;
`,os=l.default.h4.withConfig({componentId:"zh__sc-27bdacd5-28"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
  white-space: nowrap;
`,oc=l.default.table.withConfig({componentId:"zh__sc-27bdacd5-29"})`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #58616a;

  @media (width <= 900px) {
    font-size: 12px;
  }
`,of=l.default.th.withConfig({componentId:"zh__sc-27bdacd5-30"})`
  padding: 8px 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #f0f0f0;
`,oh=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-31"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;

  background: #fafafa;
`,ou=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-32"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 10px;
  line-height: 14px;
  color: #0a0a0a;
  text-align: center;

  background: #fafafa;
`,op=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-33"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #fafafa;
`,ox=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-34"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #fafafa;
`,og=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-35"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #fff;
`,om=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-36"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;

  background: #fff;

  ${({$highlighted:e,$isFirstHighlightCell:t,$isLastHighlightCell:n})=>!0!==e?"":`
      border-top: 2px solid #fb2c36;
      border-bottom: 2px solid #fb2c36;
      ${!0===t?"border-left: 2px solid #fb2c36;":""}
      ${!0===n?"border-right: 2px solid #fb2c36;":""}
    `}
`,ob=["1인가구","취약가구","출산가구","자립준비","학교생활","직장생활","보호자 일시 부재","나머지 가구구성원의 직장생활 등"],oj=[["1구간","465점 이상","8,293,000","면제","20,000","216,200","216,200","216,200","216,200"],["2구간","435~465미만","7,774,000","면제","20,000","216,200","216,200","216,200","216,200"],["3구간","405~435미만","7,257,000","면제","20,000","216,200","216,200","216,200","216,200"],["4구간","375~405미만","6,739,000","면제","20,000","216,200","216,200","216,200","216,200"],["5구간","345~375미만","6,221,000","면제","20,000","216,200","216,200","216,200","216,200"],["6구간","315~345미만","5,703,000","면제","20,000","216,200","216,200","216,200","216,200"],["7구간","285~315미만","5,181,000","면제","20,000","207,200","216,200","216,200","216,200"],["8구간","255~285미만","4,665,000","면제","20,000","186,600","216,200","216,200","216,200"],["9구간","225~255미만","4,148,000","면제","20,000","165,900","216,200","216,200","216,200"],["10구간","195~225미만","3,629,000","면제","20,000","145,100","216,200","216,200","216,200"],["11구간","165~195미만","3,112,000","면제","20,000","124,400","186,700","216,200","216,200"],["12구간","135~165미만","2,593,000","면제","20,000","103,700","155,500","207,400","216,200"],["13구간","105~135미만","2,076,000","면제","20,000","83,000","124,500","166,000","207,600"],["14구간","75~105미만","1,558,000","면제","20,000","62,300","93,400","124,600","155,800"],["15구간","42~75미만","1,040,000","면제","20,000","41,600","62,400","83,200","104,000"],["특례","특례 대상","7,257,000","면제","20,000","29,300","44,000","58,700","73,400"]],o_=["grade","score","monthlyLimit","typeA","typeB","typeC","typeD","typeE","typeF"];function ow({additionalBenefitTypes:e,benefitDecisionPeriod:n,contractId:l,grade:d,incomeCategory:r,monthlyUsage:s,virtualAccountNumber:c}){var f,h;let u,p,[x,g]=(0,i.useState)(!1),[m,b]=(0,i.useState)(!1),[j,_]=(0,i.useState)(r),[w,y]=(0,i.useState)(c??""),[v,C]=(0,i.useState)(e??[]),[I,z]=(0,i.useState)(!0),T=void 0!==l,E=oC(d),S=oI(r),k=function(e,t){if(null===e||null===t)return null;let n=oC(e),i=oj.find(e=>e[0]===n);if(void 0===i)return null;let l=oI(t);if(null===l)return null;let a=i[l];if(void 0===a)return null;let d="면제"===a?0:Number(a.replaceAll(",","")),o=Number(i[2].replaceAll(",",""));return Number.isNaN(d)||Number.isNaN(o)?null:{copaymentAmount:d,monthlyLimitAmount:o}}(d,r),D=k?.monthlyLimitAmount??s?.expectedTotalAmount??0,A=k?.copaymentAmount??s?.expectedCopaymentAmount??0,$=null===k?s?.expectedGovernmentSupportAmount??0:D-A,R=`${new Date().getMonth()+1}월`,O=async()=>{if(void 0===l||m)return;b(!0);let[e]=await aC.default.data.contract.update({id:l,payload:{...null!==j&&j!==r?{incomeCategory:j}:{},virtualAccountNumber:w,additionalBenefitTypes:v}});null===e?(await a.default.data.contract.list.refetch(),g(!1)):a.default.ui.layout.toast.error(e.message||"계좌∙자격 및 기타 정보 저장에 실패했습니다."),b(!1)};return(0,t.jsxs)(dh,{children:[(0,t.jsx)(du,{children:(0,t.jsxs)(dp,{children:[(0,t.jsxs)(ov,{children:[(0,t.jsx)(dx,{children:"계좌∙자격 및 기타 정보"}),x&&T?(0,t.jsx)(dj,{children:"수정 진행중"}):null]}),x&&T?(0,t.jsxs)(dg,{children:[(0,t.jsxs)(dm,{type:"button",onClick:()=>{g(!1)},disabled:m,children:[(0,t.jsx)(i9.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(dm,{type:"button",onClick:()=>void O(),disabled:m,children:[(0,t.jsx)(nZ,{sx:{fontSize:20}}),"수정 저장"]})]}):T?(0,t.jsxs)(dm,{type:"button",onClick:()=>{T&&(_(r),y(c??""),C(e??[]),g(!0))},children:[(0,t.jsx)(n2.default,{sx:{fontSize:20}}),"수정하기"]}):null]})}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{$width:193,children:[(0,t.jsx)(e3,{children:"수급결정시기"}),(0,t.jsx)(o.default.Input.Date,{value:n??"",readOnly:!0,style:{...e9,width:"100%",height:36}})]}),(0,t.jsxs)(e5,{$width:213,children:[(0,t.jsx)(e3,{children:"가상계좌번호"}),(0,t.jsx)(o.default.Input.Text,{value:x?w:c??"",placeholder:"가상계좌를 입력해주세요.",inputMode:"numeric",readOnly:!x,onChange:e=>y(e.target.value),style:e9})]}),(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"수급여부"}),(0,t.jsxs)(oE,{children:[(0,t.jsxs)(oS,{children:[(0,t.jsx)(oT,{name:"disability-income-category",checked:(x?j:r)==="TYPE_A",disabled:!x,onChange:()=>_("TYPE_A")}),"기초생활수급자"]}),(0,t.jsxs)(oS,{children:[(0,t.jsx)(oT,{name:"disability-income-category",checked:(x?j:r)==="TYPE_B",disabled:!x,onChange:()=>_("TYPE_B")}),"차상위계층"]}),(0,t.jsxs)(oS,{children:[(0,t.jsx)(oT,{name:"disability-income-category",checked:["TYPE_C","TYPE_D","TYPE_E","TYPE_F"].includes(x?j??"":r??""),disabled:!x,onChange:()=>{null!==j&&["TYPE_C","TYPE_D","TYPE_E","TYPE_F"].includes(j)||_("TYPE_C")}}),"일반"]})]})]})]}),(0,t.jsx)(e4,{children:(0,t.jsxs)(e5,{children:[(0,t.jsx)(e3,{children:"추가급여대상 여부"}),(0,t.jsx)(ok,{children:ob.map(n=>(0,t.jsxs)(oD,{children:[(0,t.jsx)(oz,{checked:(x?v:e??[]).includes(n),disabled:!x,onChange:()=>{C(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])}}),n]},n))})]})}),(0,t.jsxs)(oA,{children:[(0,t.jsx)(dx,{children:"계약서 세부내역"}),(0,t.jsx)(o$,{children:"30일 기준"})]}),(0,t.jsxs)(oR,{children:[(0,t.jsxs)(oO,{children:[(0,t.jsxs)(oL,{children:[R," 바우처 월 한도액 및 정산 총액"]}),(0,t.jsxs)(oP,{children:[(0,t.jsxs)(oN,{children:[(0,t.jsx)(oM,{children:"총 월한도액"}),(0,t.jsx)(oF,{children:"월한도액 + 본인부담금"}),(0,t.jsx)(oB,{children:oy(D)})]}),(0,t.jsx)(oY,{"aria-hidden":!0,children:"="}),(0,t.jsxs)(oN,{children:[(0,t.jsx)(oM,{children:"정부지원금"}),(0,t.jsx)(oF,{children:"월한도액 - 본인부담금"}),(0,t.jsx)(oB,{children:oy($)})]}),(0,t.jsx)(oY,{"aria-hidden":!0,children:"+"}),(0,t.jsxs)(oN,{children:[(0,t.jsx)(oM,{children:"본인부담금"}),(0,t.jsx)(oF,{children:(f=d,h=r,u=null===f?"":f.startsWith("SPECIAL")?"특례":`${f}구간`,p="TYPE_A"===h?"[가]형 생계·의료급여 수급자":"TYPE_B"===h?"[나]형 차상위계층":"TYPE_C"===h?"[다]형 중위소득 70% 이하":"TYPE_D"===h?"[라]형 중위소득 120% 이하":"TYPE_E"===h?"[마]형 중위소득 180% 이하":"TYPE_F"===h?"[바]형 중위소득 180% 초과":"",`${u} ${p}`.trim())}),(0,t.jsxs)(oB,{$accent:!0,children:[A.toLocaleString("ko-KR")," ",(0,t.jsx)(oU,{children:"원"})]})]})]})]}),(0,t.jsxs)(oW,{children:[(0,t.jsxs)(oV,{type:"button","aria-expanded":I,"aria-controls":"disability-benefit-guide",onClick:()=>z(e=>!e),children:[(0,t.jsxs)(oH,{children:[(0,t.jsx)(dL.default,{sx:{fontSize:24,color:"#1c1b1f"}}),"활동지원급여 월한도액 및 소득구분별 본인부담금 통합 기준표"]}),I?(0,t.jsx)(dN.default,{"aria-hidden":!0}):(0,t.jsx)(dP.default,{"aria-hidden":!0})]}),I?(0,t.jsxs)(oG,{id:"disability-benefit-guide",children:[(0,t.jsxs)("thead",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(oK,{rowSpan:2,$muted:!0,children:"구간"}),(0,t.jsx)(oK,{rowSpan:2,children:"종합점수"}),(0,t.jsx)(oK,{rowSpan:2,$monthlyLimit:!0,children:"월한도액"}),(0,t.jsx)(oK,{colSpan:6,$benefitHeader:!0,children:"본인부담금"})]}),(0,t.jsx)("tr",{children:["[가형]\n생계·의료급여 수급자","[나형]\n차상위계층","[다형]\n중위소득\n70% 이하","[라형]\n중위소득\n120% 이하","[마형]\n중위소득\n180% 이하","[바형]\n중위소득\n180% 초과"].map(e=>(0,t.jsx)(oK,{children:e},e))})]}),(0,t.jsx)("tbody",{children:oj.map(e=>(0,t.jsx)("tr",{children:e.map((n,i)=>(0,t.jsx)(oX,{$muted:0===i||2===i,$monthlyLimit:2===i,$selected:e[0]===E&&(2===i||i===S),children:n},`${e[0]}-${o_[i]}`))},e[0]))})]}):null]})]})]})}function oy(e){return`${e.toLocaleString("ko-KR")} 원`}let ov=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-0"})`
  display: flex;
  gap: 8px;
  align-items: center;
`;function oC(e){return null===e?null:e.startsWith("SPECIAL")?"특례":`${e}구간`}function oI(e){return null===e?null:({TYPE_A:3,TYPE_B:4,TYPE_C:5,TYPE_D:6,TYPE_E:7,TYPE_F:8})[e]}let oz=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-bcf5d5b7-1"})`
  width: 24px;
  height: 24px;
`,oT=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-bcf5d5b7-2"})`
  width: 24px;
  height: 24px;
`,oE=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-3"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  align-items: center;

  min-height: 36px;
`,oS=l.default.label.withConfig({componentId:"zh__sc-bcf5d5b7-4"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;

  min-height: 36px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
  white-space: nowrap;
`,ok=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-5"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  align-items: center;
`,oD=l.default.label.withConfig({componentId:"zh__sc-bcf5d5b7-6"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;

  height: 36px;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,oA=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-7"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,o$=(0,l.default)(db).withConfig({componentId:"zh__sc-bcf5d5b7-8"})`
  background: #fff;
`,oR=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-9"})`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  padding: 20px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #f6f8ff;
`,oO=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-10"})`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,oL=l.default.h3.withConfig({componentId:"zh__sc-bcf5d5b7-11"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,oP=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-12"})`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`,oN=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-13"})`
  position: relative;

  flex: 1;

  min-width: 0;
  padding: 20px 16px;
  border: 1px solid #cdd8ec;
  border-radius: 8px;

  background: #fff;
`,oM=l.default.strong.withConfig({componentId:"zh__sc-bcf5d5b7-14"})`
  display: block;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`,oF=l.default.span.withConfig({componentId:"zh__sc-bcf5d5b7-15"})`
  display: block;
  margin-top: 8px;
  font-size: 14px;
  line-height: normal;
`,oB=l.default.strong.withConfig({componentId:"zh__sc-bcf5d5b7-16"})`
  position: absolute;
  top: 20px;
  right: 16px;

  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: ${({$accent:e})=>!0===e?"#f00":"#0a0a0a"};
`,oU=l.default.span.withConfig({componentId:"zh__sc-bcf5d5b7-17"})`
  color: #0a0a0a;
`,oY=l.default.strong.withConfig({componentId:"zh__sc-bcf5d5b7-18"})`
  flex: 0 0 20px;
  font-size: 18px;
  text-align: center;
`,oW=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-19"})`
  overflow-x: auto;

  padding: 16px 10px 10px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,oV=l.default.button.withConfig({componentId:"zh__sc-bcf5d5b7-20"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0 0 16px;
  border: 0;

  color: #494f53;
  text-align: left;

  background: transparent;
`,oH=l.default.span.withConfig({componentId:"zh__sc-bcf5d5b7-21"})`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
`,oG=l.default.table.withConfig({componentId:"zh__sc-bcf5d5b7-22"})`
  table-layout: fixed;
  border-collapse: collapse;

  width: 100%;
  min-width: 915px;

  font-size: 14px;
  color: #0a0a0a;
`,oK=l.default.th.withConfig({componentId:"zh__sc-bcf5d5b7-23"})`
  height: ${({$benefitHeader:e})=>!0===e?25:64}px;
  padding: 4px 6px;
  border: 1px solid #58616a;

  font-weight: 700;
  line-height: normal;
  text-align: center;
  word-break: keep-all;
  white-space: pre-line;
  vertical-align: middle;

  background: ${({$monthlyLimit:e,$muted:t})=>!0===e?"#f6f8ff":!0===t?"#f9fafb":"#f0f0f0"};
`,oX=l.default.td.withConfig({componentId:"zh__sc-bcf5d5b7-24"})`
  height: 40px;
  padding: 4px 6px;
  border: ${({$selected:e})=>!0===e?"2px solid #FB2C36":"1px solid #58616a"};

  line-height: normal;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;

  background: ${({$monthlyLimit:e,$muted:t})=>!0===e?"#f6f8ff":!0===t?"#f9fafb":"#fff"};
`;function oq(e,t){let n=new Date(Number(e.slice(0,4)),Number(e.slice(5,7))-1+t,1);return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function oQ(e){let[t,n]=e.split("-");return`${t}년 ${Number(n)}월`}let oJ=e=>`${e.toLocaleString("ko-KR")}원`;function oZ({contract:e}){let n,l="DISABILITY_ACTIVITY_SUPPORT"===e.serviceType,[d,o]=(0,i.useState)(null),[r,s]=(0,i.useState)(null),[c,f]=(0,i.useState)(!1),[h,u]=(0,i.useState)(""),[p,x]=(0,i.useState)(""),[g,m]=(0,i.useState)(""),[b,j]=(0,i.useState)(""),[_,w]=(0,i.useState)(!1),[y,v]=(0,i.useState)(null),C=(0,i.useCallback)(([e,t])=>{null!==e?s(e.message||"등급 변경 이력을 불러오지 못했어요."):(s(null),o(t))},[]),I=(0,i.useCallback)(async()=>{C(await aC.default.data.contract.getGradeChanges(e.id))},[C,e.id]);(0,i.useEffect)(()=>{let t=!1;return aC.default.data.contract.getGradeChanges(e.id).then(e=>{t||C(e)}),()=>{t=!0}},[C,e.id]);let z=(n=new Date,`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`),T=d?.[d.length-1]??null,E=(0,i.useMemo)(()=>{let t=e.serviceStartDate??e.contractStartDate,n=e.serviceEndDate??e.contractEndDate,i=[];for(let e=0;e<12;e+=1){let l=oq(z,e);if(null!==n&&l>n.slice(0,7))break;!(null!==t&&l<=t.slice(0,7))&&(null!==T&&l<=T.effectiveMonth||i.push(l))}return i},[e,T,z]),S=l?"구간":"등급",k=(e,t)=>(function(e,t,n="등급"){let i=e.startsWith("SPECIAL")?`특례${e.slice(7)}`:`${e}${n}`;return null===t?i:`${i} \xb7 ${tv.default[t].label}`})(e,t,S),D=l?[...ty.DISABILITY_ACTIVITY_SUPPORT_BASIC_GRADES,...e.grade.startsWith("SPECIAL")?[e.grade]:[]]:ty.DAY_CARE_GRADES,A=async()=>{a.default.client.info.byClient.preserveClientAfterSave(e.clientId),await a.default.data.contract.list.refetch()},$=async()=>{if(""===h||""===g)return;w(!0);let[t]=await aC.default.data.contract.createGradeChange({contractId:e.id,payload:{grade:h,effectiveMonth:g,...l&&""!==p?{incomeCategory:p}:{},...""===b.trim()?{}:{reason:b.trim()}}});(w(!1),null!==t)?a.default.ui.layout.toast.error(t.message||"등급을 바꾸지 못했어요."):(f(!1),await I(),await A(),a.default.ui.layout.toast.success(`${oQ(g)}부터 등급을 바꿨어요.`))},R=async t=>{if(null!==y||!window.confirm(`${oQ(t.effectiveMonth)}부터의 등급 변경을 취소할까요?`))return;v(t.id);let[n]=await aC.default.data.contract.cancelGradeChange(e.id,t.id);(v(null),null!==n)?a.default.ui.layout.toast.error(n.message||"등급 변경을 취소하지 못했어요."):(await I(),await A(),a.default.ui.layout.toast.success("등급 변경을 취소했어요."))},O="ACTIVE"===e.status&&E.length>0;return(0,t.jsxs)(dh,{children:[(0,t.jsxs)(du,{children:[(0,t.jsx)(dp,{children:(0,t.jsx)(dx,{children:"등급 변경"})}),O&&!c?(0,t.jsx)(o0,{type:"button",onClick:()=>{let e=oq(z,1);u(""),x(""),m(E.includes(e)?e:E[0]??""),j(""),f(!0)},children:"등급 변경"}):null]}),(0,t.jsxs)(o1,{children:["바우처 등급",l?"·소득구분(재판정)":"","이 바뀌면 재계약하지 않고 여기서 바꿔요. 고른 달 1일부터 새 금액으로 청구하고, 그 전 달은 예전 금액 그대로예요(지난 달은 고를 수 없어요)."]}),c?(0,t.jsxs)(o2,{children:[(0,t.jsxs)(o6,{children:["새 등급",(0,t.jsxs)(o4,{value:h,onChange:e=>u(e.target.value),children:[(0,t.jsx)("option",{value:"",children:"선택"}),D.map(e=>(0,t.jsx)("option",{value:e,children:k(e,null)},e))]})]}),l?(0,t.jsxs)(o6,{children:["소득구분",(0,t.jsxs)(o4,{value:p,onChange:e=>x(e.target.value in tv.default?e.target.value:""),children:[(0,t.jsx)("option",{value:"",children:"그대로"}),Object.entries(tv.default).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))]})]}):null,(0,t.jsxs)(o6,{children:["적용 달",(0,t.jsx)(o4,{value:g,onChange:e=>m(e.target.value),children:E.map(e=>(0,t.jsx)("option",{value:e,children:`${oQ(e)}부터${e===z?"(이번 달)":""}`},e))})]}),(0,t.jsx)(o5,{value:b,maxLength:200,placeholder:"사유(예: 소득 변동으로 재판정)",onChange:e=>j(e.target.value)}),(0,t.jsx)(o3,{type:"button",disabled:""===h||""===g||_,onClick:()=>void $(),children:_?"저장 중…":"저장"}),(0,t.jsx)(o9,{type:"button",disabled:_,onClick:()=>f(!1),children:"닫기"})]}):null,null!==r?(0,t.jsx)(o8,{children:r}):null===d?(0,t.jsx)(o8,{children:"불러오는 중…"}):0===d.length?(0,t.jsxs)(o8,{children:["바뀐 적 없어요. 지금 등급: ",k(e.grade,e.incomeCategory)]}):(0,t.jsx)(o7,{children:d.map(e=>{let n=e===T&&e.effectiveMonth>=z;return(0,t.jsxs)(re,{children:[(0,t.jsx)(rt,{$applied:e.applied,children:e.applied?"적용 중":"적용 예정"}),(0,t.jsxs)(rn,{children:[(0,t.jsx)("strong",{children:`${oQ(e.effectiveMonth)}부터 ${k(e.grade,e.incomeCategory)}`}),` \xb7 월 본인부담금 ${oJ(e.copaymentAmount)}, 정부지원금 ${oJ(e.governmentSupportAmount)}`,(0,t.jsx)(ri,{children:`(그 전 ${k(e.previousGrade,e.previousIncomeCategory)} \xb7 본인부담금 ${oJ(e.previousCopaymentAmount)})`}),null!==e.reason?(0,t.jsx)(rl,{children:e.reason}):null]}),n?(0,t.jsx)(ra,{type:"button",disabled:null!==y,onClick:()=>void R(e),children:"취소"}):null]},e.id)})})]})}let o0=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-63b11cd7-0"})`
  height: 34px;
  padding: 0 14px;
  font-size: 14px;
`,o1=l.default.p.withConfig({componentId:"zh__sc-63b11cd7-1"})`
  font-size: 13px;
  line-height: 1.6;
  color: #6e7079;
`,o2=l.default.div.withConfig({componentId:"zh__sc-63b11cd7-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`,o6=l.default.label.withConfig({componentId:"zh__sc-63b11cd7-3"})`
  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  color: #344054;
`,o4=l.default.select.withConfig({componentId:"zh__sc-63b11cd7-4"})`
  height: 34px;
  padding: 0 8px;
  border: 1px solid #b1b8be;
  border-radius: 6px;
`,o5=l.default.input.withConfig({componentId:"zh__sc-63b11cd7-5"})`
  flex: 1;

  min-width: 200px;
  height: 34px;
  padding: 0 10px;
  border: 1px solid #b1b8be;
  border-radius: 6px;

  font-size: 14px;
`,o3=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-63b11cd7-6"})`
  height: 34px;
  padding: 0 14px;
  font-size: 14px;
`,o9=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-63b11cd7-7"})`
  height: 34px;
  padding: 0 14px;
  font-size: 14px;
`,o8=l.default.p.withConfig({componentId:"zh__sc-63b11cd7-8"})`
  font-size: 14px;
  color: #98a2b3;
`,o7=l.default.ul.withConfig({componentId:"zh__sc-63b11cd7-9"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,re=l.default.li.withConfig({componentId:"zh__sc-63b11cd7-10"})`
  display: flex;
  gap: 10px;
  align-items: flex-start;

  padding: 10px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
`,rt=l.default.span.withConfig({componentId:"zh__sc-63b11cd7-11"})`
  flex-shrink: 0;

  padding: 2px 8px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 600;
  color: ${({$applied:e})=>e?"#067647":"#b54708"};

  background: ${({$applied:e})=>e?"#ecfdf3":"#fffaeb"};
`,rn=l.default.div.withConfig({componentId:"zh__sc-63b11cd7-12"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2px;

  font-size: 14px;
  color: #1c1d22;
`,ri=l.default.span.withConfig({componentId:"zh__sc-63b11cd7-13"})`
  font-size: 13px;
  color: #6e7079;
`,rl=l.default.span.withConfig({componentId:"zh__sc-63b11cd7-14"})`
  font-size: 13px;
  color: #475467;
`,ra=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-63b11cd7-15"})`
  flex-shrink: 0;
  height: 30px;
  padding: 0 12px;
  font-size: 13px;
`,rd={GENERAL:{label:"일반식"},THERAPEUTIC:{label:"치료식"},TEXTURE_MODIFIED:{label:"저작 및 연하식"}};function ro({contractId:e,clientId:n,initialMealType:l}){let[d,o]=(0,i.useState)(l),[r,s]=(0,i.useState)(!1),c=d!==l,f=async()=>{s(!0);let[t]=await aC.default.data.contract.update({id:e,payload:{mealType:d}});if(s(!1),null!==t){let e=(0,aT.getSaveErrorMessage)(t,"식사 형태를 저장하지 못했어요. 잠시 후 다시 시도해 주세요.");null!==e&&a.default.ui.layout.toast.error(e);return}a.default.client.info.byClient.preserveClientAfterSave(n),await a.default.data.contract.list.refetch(),await a.default.data.client.list.refetch(),a.default.ui.layout.toast.success("식사 형태를 저장했어요.")};return(0,t.jsxs)(dh,{children:[(0,t.jsx)(du,{children:(0,t.jsx)(dp,{children:(0,t.jsx)(dx,{children:"식사 형태"})})}),(0,t.jsxs)(rr,{children:[(0,t.jsxs)(rs,{"aria-label":"식사 형태",value:d??"",onChange:e=>{var t;return o((t=e.target.value,Object.prototype.hasOwnProperty.call(rd,t))?e.target.value:null)},children:[(0,t.jsx)("option",{value:"",children:"일반식(기본)"}),Object.entries(rd).filter(([e])=>"GENERAL"!==e).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))]}),(0,t.jsx)(rc,{type:"button",disabled:!c||r,onClick:()=>void f(),children:r?"저장 중…":"저장"}),(0,t.jsx)(rf,{children:"07 서비스 제공 기록지의 회차별 식사 형태와 메뉴를 이 형태로 채워요(식단 설정의 같은 형태 메뉴). 바꾸면 전산 완료 전 기록지도 바뀌어요."})]})]})}let rr=l.default.div.withConfig({componentId:"zh__sc-eb2401e5-0"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`,rs=l.default.select.withConfig({componentId:"zh__sc-eb2401e5-1"})`
  height: 34px;
  padding: 0 8px;
  border: 1px solid #b1b8be;
  border-radius: 6px;
`,rc=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-eb2401e5-2"})`
  height: 34px;
  padding: 0 14px;
  font-size: 14px;
`,rf=l.default.span.withConfig({componentId:"zh__sc-eb2401e5-3"})`
  width: 100%;
  font-size: 12px;
  color: #98a2b3;
`,rh=(0,n.observer)(function(){let e=a.default.client.info.byClient,n=e.currentServiceType,l=e.selectedContract,d="DISABILITY_ACTIVITY_SUPPORT"===n,[o,r]=(0,i.useState)(null),s=function(e){if(null===e)return null;if(1===e||2===e||3===e||4===e)return e;if("string"==typeof e){let t=Number(e.trim().replace("등급",""));if(1===t||2===t||3===t||4===t)return t}return null}(l?.grade??null),c=a.default.data.organization.serviceList.data?.serviceStandardFee.reduce((e,t)=>{let n="MEAL"===t.type?"meal":"NUTRITION"===t.type?"nutrition":null;return null!==n&&(e[n]=t.fee),e},{})??{};return(0,i.useEffect)(()=>{let e=l?.id,[t,i]=aI.default.create(new Date().getFullYear(),new Date().getMonth()+1);if(null===n||void 0===e||null!==t||null===i)return;let a=!0;return(async t=>{let[i,l]=await aC.default.data.serviceProvision.getMonthlyStatus({serviceType:n,targetYearMonth:t});if(!a)return;let d=l?.rows.find(t=>t.contractId===e);null!==i||void 0===d?r(null):r({expectedCopaymentAmount:d.expectedCopaymentAmount,expectedGovernmentSupportAmount:d.expectedGovernmentSupportAmount,expectedTotalAmount:d.expectedTotalAmount,providedCount:d.providedCount,scheduledCount:l.schedule.length})})(i),()=>{a=!1}},[l?.id,n]),(0,t.jsxs)(ru,{children:[(0,t.jsx)(d_,{}),d||null===l||null===e.selectedClientId?null:(0,t.jsx)(ro,{contractId:l.id,clientId:e.selectedClientId,initialMealType:"GENERAL"===l.mealType?null:l.mealType??null},l.id),d?(0,t.jsx)(ow,{additionalBenefitTypes:l?.additionalBenefitTypes??null,benefitDecisionPeriod:function(e){if(null!==e&&"benefitDecisionPeriod"in e)return"string"==typeof e.benefitDecisionPeriod?e.benefitDecisionPeriod:void 0}(l),contractId:l?.id,grade:l?.grade??null,incomeCategory:l?.incomeCategory??null,monthlyUsage:o,virtualAccountNumber:l?.virtualAccountNumber??null},l?.id??"no-contract"):(0,t.jsx)(dW,{serviceCode:null===n?null:"MEAL"===n?"meal":"nutrition",grade:s,paymentMethodText:"CMS 자동이체",paymentDayText:"매월 25일",monthlyUsage:o,serviceFees:c}),null!==l?(0,t.jsx)(oZ,{contract:l},l.id):null,null!==l?(0,t.jsxs)(ic,{type:"button",disabled:e.isDeletingContract,onClick:()=>{e.openContractDeleteConfirm()},children:[(0,t.jsx)(ei.default.Delete,{size:16}),"잘못 등록한 계약 지우기"]}):null,e.isContractDeleteConfirmOpen&&null!==l?(0,t.jsx)(ih,{children:(0,t.jsxs)(iu,{role:"alertdialog","aria-modal":"true",children:[(0,t.jsxs)(ip,{children:[(0,t.jsx)(ix,{children:"이 계약을 지울까요?"}),(0,t.jsxs)(ig,{children:["계약 기간 ",l.contractStartDate," ~"," ",l.contractEndDate??"-",(0,t.jsx)("br",{}),"잘못 등록해 아직 손대지 않은 계약만 지울 수 있어요. 함께 만들어진 서류도 같이 지워지고, 되돌릴 수 없어요.",(0,t.jsx)("br",{}),"저장·완료한 서류나 서명본, 제공·입금 기록이 있으면 지우지 않고 이유를 알려 드려요."]})]}),(0,t.jsxs)(im,{children:[(0,t.jsx)(ib,{type:"button",disabled:e.isDeletingContract,onClick:()=>{e.closeContractDeleteConfirm()},children:"취소하기"}),(0,t.jsx)(ij,{type:"button",disabled:e.isDeletingContract,onClick:()=>{e.confirmContractDelete()},children:"지우기"})]})]})}):null]})}),ru=l.default.div.withConfig({componentId:"zh__sc-cbb8903d-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 48px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
  min-height: 0;
  padding: 24px;

  background: #fcfdff;
`;var rp=e.i(27997),rx=e.i(34944),rg=e.i(86987),rm=e.i(40342);let rb={status:"계약 상태",terminatedOn:"해지일",terminationReason:"해지 사유",contractStartDate:"계약 시작일",contractEndDate:"계약 종료일",serviceStartDate:"서비스 시작일",serviceEndDate:"서비스 종료일",grade:"등급",incomeCategory:"소득구분",copaymentAmount:"월 본인부담금",governmentSupportAmount:"월 정부지원금",serviceWorkerId:"담당 제공인력",matchingWaitReason:"매칭대기 사유"},rj={ACTIVE:"계약중",TERMINATED:"해지",COMPLETED:"재계약완료"},r_=new Set(["copaymentAmount","governmentSupportAmount"]);function rw(e,t){return null===t||""===t?"(없음)":"status"===e?rj[t]??t:"serviceWorkerId"===e?`#${t}`:r_.has(e)&&/^\d+$/.test(t)?`${Number(t).toLocaleString("ko-KR")}원`:t}function ry({contractId:e,onClose:n}){let[l,a]=(0,i.useState)(null),[r,s]=(0,i.useState)(null);return(0,i.useEffect)(()=>{let t=!1;return aC.default.data.entityChangeLog.getHistory({entityType:"CONTRACT",entityId:e}).then(([e,n])=>{if(!t){if(null!==e)return void s(e.message||"변경 이력을 불러오지 못했어요.");a(n)}}),()=>{t=!0}},[e]),(0,t.jsx)(d.default,{children:(0,t.jsxs)(rv,{children:[(0,t.jsxs)(rC,{children:[(0,t.jsx)(rI,{children:"계약 변경 이력"}),(0,t.jsx)(rz,{type:"button","aria-label":"닫기",onClick:n,children:(0,t.jsx)(en.X,{size:20})})]}),null!==r?(0,t.jsx)(rT,{children:r}):null===l?(0,t.jsx)(rT,{children:"불러오는 중…"}):0===l.length?(0,t.jsx)(rT,{children:"아직 바뀐 기록이 없어요."}):(0,t.jsx)(rE,{children:l.map(e=>(0,t.jsxs)(rS,{children:[(0,t.jsx)(rk,{children:function(e){let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let n=e=>String(e).padStart(2,"0");return`${t.getFullYear()}.${n(t.getMonth()+1)}.${n(t.getDate())} ${n(t.getHours())}:${n(t.getMinutes())}`}(e.createdAt)}),(0,t.jsx)(rD,{children:rb[e.field]??e.field}),(0,t.jsxs)(rA,{children:[rw(e.field,e.oldValue)," → ",rw(e.field,e.newValue)]})]},e.id))}),(0,t.jsx)(r$,{children:(0,t.jsx)(o.default.Button.Outlined,{type:"button",onClick:n,children:"닫기"})})]})})}let rv=l.default.div.withConfig({componentId:"zh__sc-195263e1-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 640px;
  max-height: 80vh;
  padding: 24px;
  border-radius: 12px;

  background: #fff;
`,rC=l.default.div.withConfig({componentId:"zh__sc-195263e1-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,rI=l.default.h2.withConfig({componentId:"zh__sc-195263e1-2"})`
  font-size: 20px;
  font-weight: 700;
  color: #1c1d22;
`,rz=l.default.button.withConfig({componentId:"zh__sc-195263e1-3"})`
  cursor: pointer;

  padding: 4px;
  border: none;

  color: #6e7079;

  background: none;
`,rT=l.default.p.withConfig({componentId:"zh__sc-195263e1-4"})`
  font-size: 14px;
  color: #98a2b3;
`,rE=l.default.ul.withConfig({componentId:"zh__sc-195263e1-5"})`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,rS=l.default.li.withConfig({componentId:"zh__sc-195263e1-6"})`
  display: grid;
  grid-template-columns: 130px 110px 1fr;
  gap: 12px;
  align-items: baseline;

  padding: 8px 0;
  border-bottom: 1px solid #f2f4f7;

  font-size: 14px;
`,rk=l.default.span.withConfig({componentId:"zh__sc-195263e1-7"})`
  color: #6e7079;
`,rD=l.default.span.withConfig({componentId:"zh__sc-195263e1-8"})`
  font-weight: 600;
  color: #344054;
`,rA=l.default.span.withConfig({componentId:"zh__sc-195263e1-9"})`
  color: #1c1d22;
  word-break: keep-all;
`,r$=l.default.div.withConfig({componentId:"zh__sc-195263e1-10"})`
  display: flex;
  justify-content: flex-end;
`,rR=(0,n.observer)(function({disabled:e=!1}){let n=a.default.client.info.byClient,i=n.contractsOfSelectedClient,l=n.selectedContractId,d=i.some(e=>e.status===rx.default.ACTIVE);return(0,t.jsxs)(rO,{children:[(0,t.jsx)(rL,{children:"계약 회차"}),(0,t.jsxs)(rP,{value:l??th.SELECT_EMPTY_VALUE,disabled:e||0===i.length,onChange:e=>{let t=e.target.value;n.setSelectedContractId(t===th.SELECT_EMPTY_VALUE?null:t)},children:[0===i.length?(0,t.jsx)("option",{value:th.SELECT_EMPTY_VALUE,children:"-"}):null,i.map((e,n)=>{let l,a,o,r,s,c,f,h;return l=e.serviceStartDate??"",a=e.serviceEndDate??"",o=e.status===rx.default.ACTIVE,r=d&&""!==l&&(0,nV.isFutureContractStart)(l),s=(0,rg.getTerminationLabel)(e),c=o?" [진행중]":r?" [재계약 중]":null!==s?` [${s}]`:"",f=""!==l&&""!==a?`${l.replaceAll("-",".")} ~ ${a.replaceAll("-",".")}`:"-",h=`${i.length-n}차 계약 (${f})${c}`,(0,t.jsx)("option",{value:e.id,children:h},e.id)})]})]})}),rO=l.default.div.withConfig({componentId:"zh__sc-4a58d4b2-0"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,rL=l.default.p.withConfig({componentId:"zh__sc-4a58d4b2-1"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
  text-align: center;
  white-space: nowrap;
`,rP=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-4a58d4b2-2"})`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 155px;
  height: 28px;
  border: 1px solid #e5e9ef;
  border-radius: 6px;

  font-size: 16px;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;

  background-color: #fff;
  background-position: right 10px center;
  background-size: 12px;

  &:hover,
  &:focus {
    background-position: right 10px center;
    background-size: 12px;
  }
`,rN=["본인 거부","기관 이동","사망","입원·시설 입소","기타"],rM=(0,n.observer)(function(){let e,[n,l]=(0,i.useState)(!1),[d,r]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),[f,h]=(0,i.useState)(!1),[u,p]=(0,i.useState)({key:"",date:"",isError:!1}),x=(0,i.useRef)(null),g=a.default.client.info.byClient,m=a.default.modal.clientCreate,{selectedClientId:b,selectedContract:j,currentServiceType:_}=g,w=g.contractsOfSelectedClient,y=g.selectedClient,v=null!==b&&null!==y,C=g.isContractDetailEditing,I=g.selectedContractDetailDraftContractStartDate,z=g.selectedContractDetailDraftContractEndDate,T=g.selectedContractDetailDraftTerminatedOn,E=g.selectedContractDetailDraftTerminationReason,S=g.selectedContractDetailDraftStatus,k=[j?.id??"",_??"",I??j?.contractStartDate??"",C?"editing":"readonly",S??j?.status??""].join("|"),D=u.key===k?u.date:"",A=j?.contractStartDate??"",$=v&&C&&(S??j?.status)===rx.default.TERMINATED&&null!==j&&null!==_&&nq(A,(0,nV.getTodayCalendarDateString)()).length>0&&(u.key!==k||u.isError);if((0,i.useEffect)(()=>{if(!v||!C||n||d||s)return;let e=e=>{let t=e.target;nG(t)||nK(t)||t instanceof Node&&null!==x.current&&x.current.contains(t)||g.cancelContractDetailEdit()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[g,v,C,n,d,s]),(0,i.useEffect)(()=>{let e=j?.id,t=j?.contractStartDate??"",n=j?.status??rx.default.ACTIVE,i=(S??n)===rx.default.TERMINATED;if(!v||!C||!i||void 0===e||null===_||!e1.default.is(t))return;let l=nq(t,(0,nV.getTodayCalendarDateString)());if(0===l.length)return;let a=!0;return(async()=>{let t=[...l].reverse();for(let n=0;n<t.length;n+=3){let i=await Promise.all(t.slice(n,n+3).map(e=>aC.default.data.serviceProvision.getMonthlyStatus({serviceType:_,targetYearMonth:e})));if(!a)return;for(let[t,n]of i){if(null!==t||null===n)return void p({key:k,date:"",isError:!0});let i=function(e,t){let n=e.find(e=>e.contractId===t);if(void 0===n)return"";let i=(0,nV.getTodayCalendarDateString)();return n.cells.reduce((e,t)=>!1===t.isPending&&"PROVIDED"!==t.status||!e1.default.is(t.serviceDate)||i<t.serviceDate?e:!e1.default.is(e)||e<t.serviceDate?t.serviceDate:e,"")}(n.rows,e);if(e1.default.is(i))return void p({key:k,date:i,isError:!1})}}p({key:k,date:"",isError:!1})})(),()=>{a=!1}},[I,S,_,v,C,k,j?.contractStartDate,j?.id,j?.status]),!v||null===y)return(0,t.jsx)(se,{children:"서비스를 선택한 뒤 이용자를 선택해 주세요."});let R=y.name,O=(0,rm.getServiceBadgeText)(_),L=j?.status??rx.default.ACTIVE,P=S??L,N=C?P:j?.status??"UNCONTRACTED",M=P===rx.default.COMPLETED,F=P===rx.default.TERMINATED,B=j?.contractStartDate??"",U=I??B,Y=nH(U),W=j?.contractEndDate??"",V=nH(z??W),H=nH(j?.serviceStartDate??""),G=j?.serviceEndDate??"",K=nH(G),X=(0,nV.getContractExpirationReminder)({contractStatus:P,contractEndDate:W,hasRenewingContract:(0,nV.hasRenewingContract)(w)}),q=!C&&null!==X,Q=F?V:K,J=j?.terminatedOn??(j?.status===rx.default.TERMINATED?j.contractEndDate:null)??"",Z=T??J,ee=E??j?.terminationReason??"",et=(0,nV.getTodayCalendarDateString)().replaceAll("-","."),en=(e=(0,nV.getTodayCalendarDateString)(),e1.default.is(G)&&G<e?G:e),el=!e1.default.is(G)||(0,nV.getTodayCalendarDateString)()<G,ea=el?`오늘(${et})을 해지일로 해지합니다.`:`${nH(en)}을 해지일로 해지합니다.`,ed=`${nX(B)} ~ ${nX(W)}`,eo=(j?.serviceType??_)==="DISABILITY_ACTIVITY_SUPPORT",er=j?.grade?.trim()??"",es=j?.incomeCategory??"",ec=""===er?"-":er.startsWith("SPECIAL")?`특례 ${er.slice(7)}`.trim():er.endsWith("구간")?er:`${er}구간`,ef=""===es?"-":es in tv.default?tv.default[es].label:es,eh=""===er?"-":er.includes("등급")?er:`${er}등급`;return(0,t.jsxs)(rF,{ref:x,children:[(0,t.jsx)(rB,{children:(0,t.jsxs)(rU,{children:[(0,t.jsxs)(rY,{children:[(0,t.jsxs)(rW,{children:[(0,t.jsx)(rV,{children:R}),(0,t.jsx)(rH,{children:(0,t.jsx)(rG,{children:O})}),C?(0,t.jsx)(il,{children:"수정 진행중"}):null]}),!0===C?(0,t.jsxs)(it,{children:[(0,t.jsxs)(ii,{type:"button",onClick:()=>{g.cancelContractDetailEdit()},children:[(0,t.jsx)(i9.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(ii,{type:"button",onClick:()=>{void 0===g.selectedContractDetailDraft?g.cancelContractDetailEdit():l(!0)},children:[(0,t.jsx)(lW.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(ii,{type:"button",disabled:M,onClick:()=>{M||g.startContractDetailEdit()},children:[(0,t.jsx)(n2.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(rX,{children:[(0,t.jsxs)(rQ,{children:[(0,t.jsx)(r3,{children:"계약 상태"}),(0,t.jsx)(r0,{children:(0,t.jsxs)(r1,{value:N,disabled:!C||null===j,onChange:e=>{let t=e.target.value;if((0,rx.isSelectableContractStatus)(t)&&t!==P){if(t===rx.default.TERMINATED)return void r(!0);if(t===rx.default.ACTIVE)return void c(!0);g.updateSelectedContractDetailDraftStatus(t)}},children:[null===j?(0,t.jsx)("option",{value:"UNCONTRACTED",children:"미계약"}):null,(0,t.jsx)("option",{value:rx.default.ACTIVE,children:"계약중"}),(0,t.jsx)("option",{value:rx.default.TERMINATED,children:C||null===j?"해지":(0,rg.getTerminationLabel)(j)??"해지"}),P===rx.default.COMPLETED?(0,t.jsx)("option",{value:rx.default.COMPLETED,children:"완료"}):null]})}),null!==j?(0,t.jsx)(st,{type:"button",onClick:()=>h(!0),children:"변경 이력"}):null]}),null===j?(0,t.jsxs)(r5,{type:"button",onClick:()=>{m.show("create",_??"MEAL",y),g.closeClientDetail(),g.setSelectedClientId(null)},children:[(0,t.jsx)(ei.default.ContractEdit,{size:16}),"계약하기"]}):q?(0,t.jsxs)(r4,{children:[null!==X?(0,t.jsx)(rp.default,{$color:X.color,children:(0,nV.formatContractExpirationLabel)(X.remainingDays)}):null,(0,t.jsxs)(r5,{type:"button",onClick:()=>{m.show("renew",j?.serviceType??"MEAL")},children:[(0,t.jsx)(ei.default.ContractEdit,{size:16}),"재계약 하기"]})]}):null]}),(0,t.jsxs)(rq,{children:[(0,t.jsx)(rR,{disabled:C}),eo?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(rQ,{children:[(0,t.jsx)(r3,{children:"활동지원 구간"}),(0,t.jsx)(r2,{children:(0,t.jsx)(r6,{value:""===er?th.SELECT_EMPTY_VALUE:er,disabled:!0,children:(0,t.jsx)("option",{value:""===er?th.SELECT_EMPTY_VALUE:er,children:ec})})})]}),(0,t.jsxs)(rQ,{children:[(0,t.jsx)(r3,{children:"소득 유형"}),(0,t.jsx)(r2,{children:(0,t.jsx)(r6,{value:""===es?th.SELECT_EMPTY_VALUE:es,disabled:!0,children:(0,t.jsx)("option",{value:""===es?th.SELECT_EMPTY_VALUE:es,children:ef})})})]})]}):(0,t.jsxs)(rQ,{children:[(0,t.jsx)(r3,{children:"바우처 등급"}),(0,t.jsx)(r2,{children:(0,t.jsx)(r6,{value:""===er?th.SELECT_EMPTY_VALUE:er,disabled:!0,children:(0,t.jsx)("option",{value:""===er?th.SELECT_EMPTY_VALUE:er,children:eh})})})]})]}),(0,t.jsxs)(rK,{children:[(0,t.jsxs)(rQ,{children:[(0,t.jsx)(r3,{children:"계약 기간"}),!0!==C||F?(0,t.jsx)(r9,{children:Y}):(0,t.jsx)(rJ,{children:(0,t.jsx)(o.default.Input.Date,{style:{width:180,height:28,paddingLeft:16,fontSize:16},value:U,readOnly:!1,isDateSelectable:e=>!e1.default.is(G)||e<=G,onChange:e=>{g.updateSelectedContractDetailDraftContractStartDate(e)},placeholder:"YYYY-MM-DD"})}),(0,t.jsx)(r8,{children:"~"}),(0,t.jsx)(r9,{children:Q})]}),F&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r7,{}),(0,t.jsxs)(rQ,{children:[(0,t.jsx)(r3,{children:"해지일"}),!0===C?(0,t.jsx)(rZ,{children:(0,t.jsx)(o.default.Input.Date,{style:{width:180,height:28,paddingLeft:16,fontSize:16},value:Z,readOnly:!1,disabled:$,isDateSelectable:e=>!$&&!(e1.default.is(U)&&e<U||e1.default.is(D)&&e<D||e1.default.is(G)&&G<e),onChange:e=>{g.updateSelectedContractDetailDraftTerminatedOn(e)},placeholder:"YYYY-MM-DD"})}):(0,t.jsx)(r9,{children:nH(Z)})]}),(0,t.jsxs)(rQ,{children:[(0,t.jsx)(r3,{children:"해지 사유"}),!0===C?(0,t.jsx)(r2,{children:(0,t.jsxs)(r6,{value:ee,onChange:e=>{g.updateSelectedContractDetailDraftTerminationReason(e.target.value)},children:[(0,t.jsx)("option",{value:"",children:"선택 안 함"}),rN.map(e=>(0,t.jsx)("option",{value:e,children:e},e)),""===ee||rN.includes(ee)?null:(0,t.jsx)("option",{value:ee,children:ee})]})}):(0,t.jsx)(r9,{children:""===ee?"-":ee})]})]}),!eo&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r7,{}),(0,t.jsxs)(rQ,{children:[(0,t.jsx)(r3,{children:"서비스 기간"}),(0,t.jsx)(r9,{children:H}),(0,t.jsx)(r8,{children:"~"}),(0,t.jsx)(r9,{children:K})]})]})]})]})}),f&&null!==j?(0,t.jsx)(ry,{contractId:j.id,onClose:()=>h(!1)}):null,(0,t.jsx)(af,{isOpen:n,title:"계약 정보를 저장할까요?",description:`수정된 정보는 연결된 서류의 자동입력 항목에 함께 반영됩니다.
이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다.`,cancelLabel:"취소하기",confirmLabel:"저장 및 모든 서류에 반영",onCancel:()=>{l(!1)},onConfirm:()=>{g.saveSelectedContractDetailDraft().then(e=>{!0===e&&l(!1)})}}),(0,t.jsx)(af,{isOpen:d,title:el?"계약을 중도 해지 하시겠습니까?":"계약을 해지 하시겠습니까?",description:`${ea}
계약 종료일(예정일)은 그대로 남고, 해지일과 해지 사유는 저장 전에 고칠 수 있습니다.`,cancelLabel:"취소하기",confirmLabel:"변경하기",onCancel:()=>{r(!1)},onConfirm:()=>{g.updateSelectedContractDetailDraftContractStartDate(B),g.updateSelectedContractDetailDraftTerminatedOn(en),g.updateSelectedContractDetailDraftStatus(rx.default.TERMINATED),r(!1)}}),(0,t.jsx)(af,{isOpen:s,title:"계약중 상태로 되돌리시겠습니까?",description:`이전 계약 기간 (${ed})으로 되돌리며, 해지에서 계약중으로 변경됩니다.
계약중일 시, 계약 시작일을 수정할 수 있으며 계약 종료일은 수정할 수 없습니다.
해지일\xb7해지 사유는 지워지고, 지우기 전 값은 '변경 이력'에 남아요.`,cancelLabel:"취소하기",confirmLabel:"변경하기",onCancel:()=>{c(!1)},onConfirm:()=>{g.updateSelectedContractDetailDraftContractEndDate(G),g.updateSelectedContractDetailDraftStatus(rx.default.ACTIVE),c(!1)}})]})}),rF=l.default.div.withConfig({componentId:"zh__sc-a64f020c-0"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  min-height: 156px;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,rB=l.default.div.withConfig({componentId:"zh__sc-a64f020c-1"})`
  display: flex;
  gap: 24px;
  width: 100%;
`,rU=l.default.div.withConfig({componentId:"zh__sc-a64f020c-2"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  justify-content: center;

  min-width: 0;
`,rY=l.default.div.withConfig({componentId:"zh__sc-a64f020c-3"})`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-width: 0;
`,rW=l.default.div.withConfig({componentId:"zh__sc-a64f020c-4"})`
  display: flex;
  gap: 16px;
  align-items: center;
  min-width: 0;
`,rV=l.default.div.withConfig({componentId:"zh__sc-a64f020c-5"})`
  font-size: 24px;
  font-weight: 700;
  line-height: 20px;
  color: #0a0a0a;
`,rH=l.default.div.withConfig({componentId:"zh__sc-a64f020c-6"})`
  overflow: hidden;
  display: flex;
  gap: 4px;
  align-items: center;

  min-width: 0;
`,rG=l.default.div.withConfig({componentId:"zh__sc-a64f020c-7"})`
  overflow: hidden;

  padding: 2px 12px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #0a0a0a;
  white-space: nowrap;
`,rK=l.default.div.withConfig({componentId:"zh__sc-a64f020c-8"})`
  display: flex;
  gap: 12px;
  align-items: center;
  min-width: 0;
`,rX=l.default.div.withConfig({componentId:"zh__sc-a64f020c-9"})`
  display: flex;
  gap: 16px;
  align-items: center;
  min-width: 0;
`,rq=l.default.div.withConfig({componentId:"zh__sc-a64f020c-10"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,rQ=l.default.div.withConfig({componentId:"zh__sc-a64f020c-11"})`
  display: flex;
  gap: 8px;
  align-items: center;

  min-width: 0;

  font-size: 18px;
  line-height: 20px;
  color: #0a0a0a;
  white-space: nowrap;
`,rJ=l.default.div.withConfig({componentId:"zh__sc-a64f020c-12"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,rZ=l.default.div.withConfig({componentId:"zh__sc-a64f020c-13"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,r0=l.default.div.withConfig({componentId:"zh__sc-a64f020c-14"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,r1=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-a64f020c-15"})`
  width: 94px;
  height: 28px;
`,r2=l.default.div.withConfig({componentId:"zh__sc-a64f020c-16"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,r6=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-a64f020c-17"})`
  min-width: 94px;
  height: 28px;
`,r4=l.default.div.withConfig({componentId:"zh__sc-a64f020c-18"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,r5=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-a64f020c-19"})`
  gap: 8px;
  padding: 0 16px;
`,r3=l.default.span.withConfig({componentId:"zh__sc-a64f020c-20"})`
  font-weight: 700;
`,r9=l.default.span.withConfig({componentId:"zh__sc-a64f020c-21"})`
  font-weight: 400;
`,r8=l.default.span.withConfig({componentId:"zh__sc-a64f020c-22"})`
  font-weight: 400;
`,r7=l.default.div.withConfig({componentId:"zh__sc-a64f020c-23"})`
  width: 1px;
  height: 24px;
  background: #e5e7eb;
`,se=l.default.div.withConfig({componentId:"zh__sc-a64f020c-24"})`
  width: 100%;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;

  font-size: 14px;
  color: #6b7280;

  background: #fff;
`,st=l.default.button.withConfig({componentId:"zh__sc-a64f020c-25"})`
  cursor: pointer;

  padding: 0;
  border: none;

  font-size: 14px;
  color: #4f39f6;
  text-decoration: underline;

  background: none;
`;var sn=e.i(7665);function si(){return(si=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var sl=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",si({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),i.default.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),i.default.createElement("polyline",{points:"21 15 16 10 5 21"}))});sl.propTypes={color:q.default.string,size:q.default.oneOfType([q.default.string,q.default.number])},sl.displayName="Image";let sa={badge:{label:"데이터 없음",color:"black"},action:{label:"파일 미첨부",color:"black"}};function sd(e){if(null==e)return sa;switch(e){case"WAITING_TO_LINK":return{badge:{label:"연동 대기",color:"lightBlue"},action:{label:"연동 대기중...",color:"blue",disabled:!0}};case"WAITING_TO_DRAFT":return{badge:{label:"작성 대기",color:"lightBlue"},action:{label:"서류 작성 시작하기",color:"blue"}};case"WAITING_TO_PRINT":return{badge:{label:"출력 대기",color:"blue"},action:{label:"초안 검토하기",color:"blue"}};case"NEED_UPDATE":return{badge:{label:"업데이트 필요",color:"orange"},action:{label:"수기 서류 업로드하기",color:"orange"}};case"NEED_MATCHING":return{badge:{label:"서류 대조",color:"orange"},action:{label:"수기 서류 업로드하기",color:"orange"}};case"LINKED_COMPLETED":return{badge:{label:"연동 완료",color:"orange",icon:(0,t.jsx)(ei.default.WandShine,{size:16})},action:{label:"서류 최종 확인하기",color:"orange"}};case"COMPLETED":return{badge:{label:"전산 완료",color:"gray"},action:{label:"문서 확인하기",color:"indigo"}};default:return sa}}var so=e.i(70888);let sr=(0,nQ.default)((0,t.jsx)("path",{fillRule:"evenodd",d:"M4 11h16v2H4z"}),"HorizontalRule");function ss({status:e,onClick:n,disabled:i=!1}){return(0,t.jsx)(sc,{$status:e,$disabled:i,onClick:i?void 0:n,children:"checked"===e?(0,t.jsx)(lW.default,{sx:{fontSize:18}}):"indeterminate"===e?(0,t.jsx)(sr,{sx:{fontSize:20}}):null})}let sc=l.default.div.withConfig({componentId:"zh__sc-a3965854-0"})`
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  padding: 2px;
  border: 1px solid #58616a;
  border-color: ${({$status:e})=>"unchecked"===e?"#58616a":"#256EF4"};
  border-radius: 4px;

  color: #fff;

  background: ${({$status:e})=>"unchecked"===e?"#fff":"#256EF4"};
`;function sf(e,t){return 0===t||0===e?"unchecked":e===t?"checked":"indeterminate"}let sh=(0,n.observer)(function({template:e,isChecked:n,hasDocument:l,statusChangeToken:d,toggleSelectedTemplateId:o}){let{id:r,name:s,templateImagePath:c}=e,f=c?.[0]??null,h=a.default.client.info.byClient.docs.documentStatusByTemplateId.get(r)??null,u=a.default.client.info.byClient.docs.documentByTemplateId.get(r)??null,p=sd(h),x=l&&(0,so.canSelectDocumentInList)(u?.displayStatus),{ref:g,fire:m}=eP(),b=(0,i.useRef)(d);return(0,i.useEffect)(()=>{if(d<=b.current){b.current=d;return}b.current=d,m()},[m,d]),(0,t.jsxs)(sb,{ref:g,children:[(0,t.jsx)(sj,{children:(0,t.jsx)(ss,{status:n?"checked":"unchecked",disabled:!x,onClick:()=>o(r)})}),(0,t.jsxs)(s_,{$color:p.badge.color,children:[p.badge.icon,p.badge.label]}),(0,t.jsx)(sw,{children:null!==f&&""!==f?(0,t.jsx)(sn.default,{src:f,width:210,height:297,style:{width:"auto",height:"90%",maxWidth:"90%",objectFit:"contain"},loading:"eager",alt:s}):(0,t.jsx)(sl,{size:40,color:"#D1D5DC"})}),(0,t.jsxs)(sy,{children:[(0,t.jsx)(sv,{children:(0,t.jsx)(sC,{children:s})}),(0,t.jsx)(sI,{$color:p.action.color,disabled:!0===p.action.disabled||"black"===p.action.color,onClick:()=>{if(null===u){"WAITING_TO_DRAFT"===h&&a.default.modal.documentView.openTemplateWithoutDocument(e.id);return}a.default.modal.documentView.open(u.id)},children:p.action.label})]})]})}),su=(0,n.observer)(function(){let e=a.default.client.info.byClient.docs,n=e.selectedTemplateIdSet,{toggleSelectedTemplateId:i,addSelectedTemplateIds:l,removeSelectedTemplateIds:d}=e,o=e.documentByTemplateId;return null===a.default.client.info.byClient.selectedClientId?"no client selected":(0,t.jsx)(sp,{children:e.templateTypeGroups.map(a=>{let{type:r,typeLabel:s,templates:c}=a,f=c.map(e=>e.id),h=f.filter(e=>{let t;return null!==(t=o.get(e)??null)&&(0,so.canSelectDocumentInList)(t.displayStatus)}),u=new Set(h),p=sf(f.filter(e=>n.has(e)).length,f.length),x=sf(h.filter(e=>n.has(e)).length,h.length);return(0,t.jsxs)(sx,{children:[(0,t.jsxs)(sg,{onClick:()=>{"checked"===x?d([...u]):l([...u])},children:[(0,t.jsx)(ss,{status:p}),"[",s,"]"]}),(0,t.jsx)(sm,{children:c.map(l=>{let{id:a}=l,d=n.has(a),r=o.get(a)??null;return(0,t.jsx)(sh,{template:l,isChecked:d,hasDocument:null!==r,statusChangeToken:e.getDocumentStatusChangeToken(a),toggleSelectedTemplateId:i},a)})})]},r)})})}),sp=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  min-height: 0;
`,sx=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-1"})`
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: flex-start;
  align-self: stretch;
`,sg=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-2"})`
  cursor: pointer;

  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: #0a0a0a;
  text-align: center;
`,sm=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-3"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: stretch;
  align-self: stretch;
`,sb=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-4"})`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 188px;
  height: 232px;
  border: 1px solid #d1d5dc;
  border-radius: 8px;

  background: #fff;
`,sj=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-5"})`
  position: absolute;
  top: 8px;
  left: 8px;
`,s_=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-6"})`
  position: absolute;
  top: 8px;
  right: 8px;

  display: flex;
  gap: 2px;
  align-items: center;

  padding: 4px 6px;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 16px; /* 114.286% */
  color: #fff;
  text-align: center;

  background: ${({$color:e})=>{switch(e){case"lightBlue":return"#9FBFFF";case"orange":return"#FF6900";case"gray":return"#77798B";case"black":return"#0a0a0a";case"blue":return"#2264E8"}}};
`,sw=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-7"})`
  overflow: hidden;
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  height: 140px;
  border-radius: 7px 7px 0 0;

  background: #f3f4f6;
`,sy=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-8"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,sv=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-9"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,sC=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-10"})`
  overflow: hidden;
  display: -webkit-box;
  flex: 1 0 0;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

  height: 45px;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.3;
  color: #0a0a0a;
  white-space: normal;
`,sI=l.default.button.withConfig({componentId:"zh__sc-723cdbd7-11"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  height: 32px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  color: #fff;
  text-align: center;

  background: ${({$color:e})=>{switch(e){case"indigo":return"#505794";case"orange":return"#FF6900";case"gray":return"#77798B";case"black":return"#0A0A0A";default:return"#2264E8"}}};

  &:disabled {
    cursor: not-allowed;
    border: 1px solid #d1d5db;
    color: #9ca3af;
    background: #f9fafb;
  }
`;var sz=e.i(92091);let sT=(0,n.observer)(function(){var e,n;let i=a.default.client.info.byClient.docs,l=i.selectedTemplateIdSet,d=i.documentByTemplateId,o=Array.from(new Set(i.templates.map(e=>e.id))),r=o.filter(e=>{let t=d.get(e)??null;return null!==t&&(0,so.canSelectDocumentInList)(t.displayStatus)}),s=(e=r.filter(e=>l.has(e)).length,0===(n=r.length)||0===e?"unchecked":e===n?"checked":"indeterminate"),c=o.length>0,f=o.filter(e=>l.has(e)).length;return(0,t.jsxs)(sE,{children:[(0,t.jsxs)(sk,{onClick:()=>{"checked"===s?i.removeSelectedTemplateIds(r):i.addSelectedTemplateIds(r)},children:[(0,t.jsx)(ss,{status:s}),"전체 선택하기"]}),(0,t.jsxs)(sS,{children:[(0,t.jsxs)(sD,{disabled:0===f,onClick:()=>void i.printSelectedTemplates(),children:[(0,t.jsx)(sz.default,{sx:{fontSize:16}}),"선택한 서류 출력하기"]}),(0,t.jsxs)(sD,{disabled:!c,onClick:()=>void i.printAllTemplates(),children:[(0,t.jsx)(sz.default,{sx:{fontSize:16}}),"전체 출력하기"]})]})]})}),sE=l.default.div.withConfig({componentId:"zh__sc-b979553a-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,sS=l.default.div.withConfig({componentId:"zh__sc-b979553a-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,sk=l.default.button.withConfig({componentId:"zh__sc-b979553a-2"})`
  cursor: pointer;

  display: flex;
  gap: 8px;
  align-items: center;

  width: fit-content;
  padding: 0;
  border: 0;

  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: #0a0a0a;
  text-align: center;

  background: transparent;
`,sD=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-b979553a-3"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #4f39f6;
  text-align: center;
`;function sA(){return(0,t.jsxs)(s$,{children:[(0,t.jsx)(sT,{}),(0,t.jsx)(su,{})]})}let s$=l.default.div.withConfig({componentId:"zh__sc-5553a9a-0"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
  padding: 24px;
  border-radius: 10px;

  background: #fff;
`,sR=(0,n.observer)(function(){let e=a.default.client.info.byClient,n=e.detailTab,l=e.setDetailTab,o=e.isClientDetailOpen;return((0,i.useEffect)(()=>{let t=e.selectedClientId,i=a.default.data.guardian.list.query;o&&"basic"===n&&null!==t&&i?.clientId===t&&a.default.data.guardian.list.refetch()},[n,e.selectedClientId,o]),o&&null!==e.selectedClientId)?(0,t.jsx)(d.default,{children:(0,t.jsxs)(sO,{children:[(0,t.jsxs)(sL,{children:[(0,t.jsx)(sP,{children:"이용자 상세보기"}),(0,t.jsxs)(sN,{type:"button",onClick:()=>{e.cancelUserInfoEdit(),e.cancelContractDetailEdit(),e.closeClientDetail(),e.setSelectedClientId(null)},children:[(0,t.jsx)(en.X,{size:16}),"닫기"]})]}),(0,t.jsx)(rM,{}),(0,t.jsxs)(sM,{children:[(0,t.jsx)(sF,{type:"button",$active:"basic"===n,onClick:()=>l("basic"),children:"기본정보"}),(0,t.jsx)(sF,{type:"button",$active:"contract"===n,onClick:()=>l("contract"),children:"계약정보"}),(0,t.jsx)(sF,{type:"button",$active:"docs"===n,onClick:()=>l("docs"),children:"서류관리"})]}),(0,t.jsx)(sB,{children:"basic"===n?(0,t.jsx)(av,{}):"contract"===n?(0,t.jsx)(rh,{}):(0,t.jsx)(sA,{})})]})}):null}),sO=l.default.div.withConfig({componentId:"zh__sc-3cfc0852-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: 1050px;
  height: 90vh;
  border-radius: 8px;

  background: #fff;
`,sL=l.default.div.withConfig({componentId:"zh__sc-3cfc0852-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  border-radius: 8px 8px 0 0;

  background: #fff;
`,sP=l.default.h2.withConfig({componentId:"zh__sc-3cfc0852-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #101828;
  letter-spacing: -0.439px;
`,sN=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-3cfc0852-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,sM=l.default.div.withConfig({componentId:"zh__sc-3cfc0852-4"})`
  display: flex;
  align-self: flex-start;

  width: 100%;
  height: 56px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,sF=l.default.button.withConfig({componentId:"zh__sc-3cfc0852-5"})`
  cursor: pointer;

  position: relative;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 180px;
  height: 56px;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: ${({$active:e})=>e?"#052b57":"#464c53"};

  &::after {
    content: '';

    position: absolute;
    bottom: -1px;
    left: 0;

    width: 100%;
    height: 4px;

    background-color: ${({$active:e})=>e?"#052b57":"transparent"};
  }
`,sB=l.default.div.withConfig({componentId:"zh__sc-3cfc0852-6"})`
  display: flex;
  flex: 1;
  min-height: 0;
`,sU=(0,nQ.default)((0,t.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");function sY(){return(sY=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var sW=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",sY({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.default.createElement("polyline",{points:"19 12 12 19 5 12"}))});function sV(){return(sV=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}sW.propTypes={color:q.default.string,size:q.default.oneOfType([q.default.string,q.default.number])},sW.displayName="ArrowDown";var sH=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",sV({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),i.default.createElement("polyline",{points:"5 12 12 5 19 12"}))});sH.propTypes={color:q.default.string,size:q.default.oneOfType([q.default.string,q.default.number])},sH.displayName="ArrowUp";var sG=e.i(26546),sK=e.i(71723),sX=e.i(25699);let sq=function({isOpen:e,missingItems:n,isProcessing:i=!1,onClickSecondary:l,onClickPrimary:a}){return e?(0,t.jsx)(sQ,{children:(0,t.jsxs)(sJ,{children:[(0,t.jsxs)(sZ,{children:[(0,t.jsx)(s0,{children:"필수 입력 항목을 확인해주세요."}),(0,t.jsx)(s1,{children:"아래 항목이 입력되지 않았습니다."}),(0,t.jsx)(s2,{children:n.map(e=>(0,t.jsx)("li",{children:e.label},e.key))}),(0,t.jsx)(s1,{children:"입력하지 않고 나갈 시 작성한 내용이 저장되지 않습니다."})]}),(0,t.jsxs)(s6,{children:[(0,t.jsx)(s4,{type:"button",disabled:i,onClick:l,children:"저장하지 않고 나가기"}),(0,t.jsx)(s5,{type:"button",disabled:i,onClick:a,children:"입력 항목 확인하기"})]})]})}):null},sQ=l.default.div.withConfig({componentId:"zh__sc-615e692b-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,sJ=l.default.div.withConfig({componentId:"zh__sc-615e692b-1"})`
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
`,sZ=l.default.div.withConfig({componentId:"zh__sc-615e692b-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,s0=l.default.h3.withConfig({componentId:"zh__sc-615e692b-3"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,s1=l.default.p.withConfig({componentId:"zh__sc-615e692b-4"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,s2=l.default.ul.withConfig({componentId:"zh__sc-615e692b-5"})`
  display: flex;
  flex-direction: column;
  gap: 0;

  width: 100%;
  margin: 0;
  padding-left: 24px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
  list-style: disc;
`,s6=l.default.div.withConfig({componentId:"zh__sc-615e692b-6"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`,s4=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-615e692b-7"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #4f39f6;
`,s5=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-615e692b-8"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`;var s3=e.i(28124),s9=e.i(43172);let s8=e=>{if("radio"===e.uiProps.fieldType)return`radio:${e.uiProps.groupKey}`;let t=e.uiProps.triggerKeyScopes?.[s3.default.SOURCE_REQUIRED_VALIDATION]?.trim();return void 0===t||""===t?`field:${e.page}:${e.fieldKey}`:`scope:${t}`},s7=function({isOpen:e,actionType:n,isProcessing:i=!1,onClickSecondary:l,onClickPrimary:a}){if(!e)return null;let d="move"===n,o=d?"이동":"닫기";return(0,t.jsx)(ce,{children:(0,t.jsxs)(ct,{children:[(0,t.jsxs)(cn,{children:[(0,t.jsx)(ci,{children:"수정된 정보가 있습니다."}),(0,t.jsxs)(cl,{children:["지금 화면을 나가면 수정하신 내용이 저장되지 않습니다.",(0,t.jsx)("br",{}),`[저장하고 ${o}]${d?"을":"를"} 누르면 정보가 안전하게 저장됩니다.`]})]}),(0,t.jsxs)(ca,{children:[(0,t.jsx)(cd,{type:"button",disabled:i,onClick:l,children:`저장없이 ${d?"이동":"나가기"}`}),(0,t.jsx)(co,{type:"button",disabled:i,onClick:a,children:`저장하고 ${o}`})]})]})})},ce=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,ct=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-1"})`
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
`,cn=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,ci=l.default.h3.withConfig({componentId:"zh__sc-22c1af4d-3"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,cl=l.default.p.withConfig({componentId:"zh__sc-22c1af4d-4"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,ca=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-5"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`,cd=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-22c1af4d-6"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #4f39f6;
`,co=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-22c1af4d-7"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`,cr=l.default.div.withConfig({componentId:"zh__sc-67d06bce-0"})`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 417px;
  height: 100%;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  border-left: 1px solid #e5e7eb;

  background: #fff;
  box-shadow: -2px 9px 16px 0 rgb(0 0 0 / 16%);
`,cs=l.default.div.withConfig({componentId:"zh__sc-67d06bce-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  padding: 16px;
`,cc=l.css`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 36px;
  padding: 8px;
`,cf=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-67d06bce-2"})`
  ${cc}
`,ch=l.default.div.withConfig({componentId:"zh__sc-67d06bce-3"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,cu=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-67d06bce-4"})`
  ${cc}
`,cp=l.default.div.withConfig({componentId:"zh__sc-67d06bce-5"})`
  align-self: stretch;
  height: 1px;
  background: #e5e7eb;
`,cx=l.default.div.withConfig({componentId:"zh__sc-67d06bce-6"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`,cg=[{key:"state1",index:"01",label:"청구 사유를 선택해주세요.",options:["option1","option2","option3","option4","option5","option6","option7"],optionLabels:{option1:"카드 미소지",option2:"카드 분실",option3:"카드 파손",option4:"시스템 오류",option5:"단말기 오류",option6:"사망",option7:"수술"}},{key:"state2",index:"02",label:"처리 현황을 선택해주세요.",options:["option1","option2"],optionLabels:{option1:"계약 종결",option2:"서비스 종료"}}],cm={state1:null,state2:null},cb={option1:"대상자 바우처 카드 미소지로 인하여 소급결제 진행하려 하였으나",option2:"대상자 바우처 카드 분실로 인하여 소급결제 진행하려 하였으나",option3:"대상자 바우처 카드 파손으로 인하여 소급결제 진행하려 하였으나",option4:"결제 시스템 오류로 인하여 소급결제 진행하려 하였으나",option5:"단말기 오류로 인하여 소급결제 진행하려 하였으나",option6:"대상자 사망으로 인하여 소급결제 진행하려 하였으나",option7:"대상자 수술로 인하여 소급결제 진행하려 하였으나"},cj={option1:"일상돌봄 식사영양서비스 계약종결됨에 따라 지원금이 소멸하여",option2:"일상돌봄 식사영양서비스 종료됨에 따라 지원금이 소멸하여"},c_=(e,t)=>e[t]??"",cw=(e,t,n)=>Math.min(n,Math.max(t,e)),cy=["boxSizing","fontFamily","fontSize","fontWeight","fontStyle","lineHeight","letterSpacing","textTransform","textIndent","textDecoration","wordSpacing","tabSize","paddingTop","paddingRight","paddingBottom","paddingLeft"],cv=(e,t,n,i=.08)=>{let l=cw(n,0,t.length),a=document.createElement("div"),d=document.createElement("span"),o=window.getComputedStyle(e);a.style.position="absolute",a.style.left="-99999px",a.style.top="0",a.style.visibility="hidden",a.style.pointerEvents="none",a.style.width=`${e.clientWidth}px`,a.style.whiteSpace="pre-wrap",a.style.overflowWrap="break-word",a.style.wordBreak="break-word",cy.forEach(e=>{a.style[e]=o[e]}),a.textContent=t.slice(0,l),d.textContent="​",a.appendChild(d),document.body.appendChild(a);let r=d.offsetTop;a.remove();let s=Math.max(e.scrollHeight-e.clientHeight,0);return cw(r-e.clientHeight*i,0,s)},cC=l.keyframes`
	from {
		transform: translateX(100%);
		opacity: 0;
	}

	to {
		transform: translateX(0);
		opacity: 1;
	}
`,cI=(0,l.default)(cr).withConfig({componentId:"zh__sc-1f96f242-0"})`
  will-change: transform, opacity;
  animation: ${cC} 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,cz=l.default.div.withConfig({componentId:"zh__sc-1f96f242-1"})`
  width: 36px;
  height: 36px;
`,cT=l.default.div.withConfig({componentId:"zh__sc-1f96f242-2"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 16px;
`,cE=l.default.div.withConfig({componentId:"zh__sc-1f96f242-3"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,cS=l.default.div.withConfig({componentId:"zh__sc-1f96f242-4"})`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,ck=l.default.div.withConfig({componentId:"zh__sc-1f96f242-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 0;
`,cD=l.default.div.withConfig({componentId:"zh__sc-1f96f242-6"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,cA=l.default.div.withConfig({componentId:"zh__sc-1f96f242-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,c$=l.default.div.withConfig({componentId:"zh__sc-1f96f242-8"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  border-radius: 12px;

  font-size: 12px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #fff;

  background: #4f39f6;
`,cR=l.default.div.withConfig({componentId:"zh__sc-1f96f242-9"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,cO=l.default.div.withConfig({componentId:"zh__sc-1f96f242-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,cL=l.default.button.withConfig({componentId:"zh__sc-1f96f242-11"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px;
  color: #0a0a0a;
  letter-spacing: -1px;

  background: #fff;

  ${({$selected:e})=>e&&`
		border-color: #4f39f6;
		color: #fff;
		background: #4f39f6;
	`}
`,cP=l.default.div.withConfig({componentId:"zh__sc-1f96f242-12"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,cN=l.default.div.withConfig({componentId:"zh__sc-1f96f242-13"})`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
  letter-spacing: -0.5px;
`,cM=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-1f96f242-14"})`
  resize: none;
  scrollbar-gutter: stable;

  overflow: auto;
  display: flex;
  align-items: flex-start;
  align-self: stretch;

  height: 160px;
  padding: 16px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    margin-block: 6px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border: 2px solid transparent;
    border-radius: 999px;
    background-color: #cfd3dc;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  &&:read-only {
    pointer-events: auto;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    background: #f5f3ff;
  }
`,cF=l.default.div.withConfig({componentId:"zh__sc-1f96f242-15"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
`,cB=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-1f96f242-16"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,cU=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-1f96f242-17"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;
`;var cY=e.i(8582);let cW=l.keyframes`
	from {
		transform: translateX(100%);
		opacity: 0;
	}

	to {
		transform: translateX(0);
		opacity: 1;
	}
`,cV=(0,l.default)(cr).withConfig({componentId:"zh__sc-c3e70251-0"})`
  will-change: transform, opacity;
  width: 634px;
  animation: ${cW} 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,cH=l.default.div.withConfig({componentId:"zh__sc-c3e70251-1"})`
  width: 36px;
  height: 36px;
`,cG=(0,l.default)(cu).withConfig({componentId:"zh__sc-c3e70251-2"})`
  width: 56px;
  height: 36px;
  border: 1px solid #4f39f6;
  border-radius: 4px;

  color: #4f39f6;
`,cK=(0,l.default)(cx).withConfig({componentId:"zh__sc-c3e70251-3"})`
  min-height: 0;
`,cX=l.default.div.withConfig({componentId:"zh__sc-c3e70251-4"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  min-height: 0;
  padding: 16px;
`,cq=l.default.div.withConfig({componentId:"zh__sc-c3e70251-5"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,cQ=l.default.div.withConfig({componentId:"zh__sc-c3e70251-6"})`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,cJ=l.default.div.withConfig({componentId:"zh__sc-c3e70251-7"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,cZ=l.default.div.withConfig({componentId:"zh__sc-c3e70251-8"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,c0=l.default.div.withConfig({componentId:"zh__sc-c3e70251-9"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,c1=l.default.div.withConfig({componentId:"zh__sc-c3e70251-10"})`
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
`,c2=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-c3e70251-11"})`
  flex: 1;

  height: 36px;
  padding: 4px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;

  font-size: 16px;
  line-height: 20px;
  color: #0a0a0a;

  &::placeholder {
    color: #9ca3af;
  }
`,c6=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-c3e70251-12"})`
  height: 36px;
  padding: 8px 16px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
`,c4=l.default.div.withConfig({componentId:"zh__sc-c3e70251-13"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,c5=l.default.button.withConfig({componentId:"zh__sc-c3e70251-14"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px;
  color: #0a0a0a;
  letter-spacing: -1px;

  background: #fff;

  ${({$selected:e})=>e?`
    border-color: #4f39f6;
    color: #fff;
    background: #4f39f6;
  `:""}
`,c3=l.default.div.withConfig({componentId:"zh__sc-c3e70251-15"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,c9=l.default.div.withConfig({componentId:"zh__sc-c3e70251-16"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,c8=l.default.div.withConfig({componentId:"zh__sc-c3e70251-17"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,c7=l.default.div.withConfig({componentId:"zh__sc-c3e70251-18"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  border-radius: 12px;

  font-size: 12px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #fff;

  background: #4f39f6;
`,fe=l.default.div.withConfig({componentId:"zh__sc-c3e70251-19"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,ft=l.default.div.withConfig({componentId:"zh__sc-c3e70251-20"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,fn=l.default.button.withConfig({componentId:"zh__sc-c3e70251-21"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px;
  color: #0a0a0a;
  letter-spacing: -1px;

  background: #fff;

  ${({$selected:e})=>e?`
    border-color: #4f39f6;
    color: #fff;
    background: #4f39f6;
  `:""}
`,fi=l.default.div.withConfig({componentId:"zh__sc-c3e70251-22"})`
  display: flex;
  flex: 0 0 auto;
  align-items: flex-end;
  justify-content: flex-end;

  width: 100%;
`,fl=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-c3e70251-23"})`
  height: 36px;
  padding: 8px 16px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
`,fa=l.default.div.withConfig({componentId:"zh__sc-c3e70251-24"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,fd=l.default.div.withConfig({componentId:"zh__sc-c3e70251-25"})`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
  letter-spacing: -0.5px;
`,fo=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-c3e70251-26"})`
  resize: none;
  scrollbar-gutter: stable;

  overflow: auto;
  display: flex;
  align-items: flex-start;
  align-self: stretch;

  height: 160px;
  padding: 16px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    margin-block: 6px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border: 2px solid transparent;
    border-radius: 999px;
    background-color: #cfd3dc;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  ${({$isAutoFilled:e})=>e?`
    border: 1px solid #e9ecef;
    border-radius: 8px;
    background: #f5f3ff;
  `:""}
`,fr=l.default.div.withConfig({componentId:"zh__sc-c3e70251-27"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
`,fs=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-c3e70251-28"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
`,fc=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-c3e70251-29"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
`,ff=[{key:"state1",index:"01",label:"영양 상태 — 이용자의 영양 변화 정도를 선택해주세요.",sentences:{positive:"☐ 영양 상태: 정기적이고 꾸준한 영양식 식사 제공 및 방문 관리를 밀착 모니터링한 결과, 영양 체크리스트 점수가 서비스 참여 전 대비 크게 향상되었으며 안색과 전반적인 신체 기력 상태가 매우 양호하게 개선되었습니다.",neutral:"☐ 영양 상태: 현재 제공받고 있는 모든 건강 식단에 비교적 안정적이고 매우 높은 순응도를 보이고 있으며, 저체중이나 기타 체중 감소 등의 기왕 병력 이전의 안정적인 건강 수치를 계속해서 유지하고 있습니다.",negative:"☐ 영양 상태: 최근 들어 식사 흡수 기능 저하를 자주 호소하시며 일일 섭취하는 식사량이 전보다 감소하셨음이 확인되었습니다. 식사 조절과 아울러 이에 대한 의료적 치료 등 병원의 조기 개입이 필요합니다."}},{key:"state2",index:"02",label:"식욕 상태 — 이용자의 식욕 변화 정도를 선택해주세요.",sentences:{positive:"☐ 식욕 상태: 식사 시간에 맞춰 스스로 음식을 찾으실 정도로 식욕이 크게 왕성해지셨으며, 제공되는 반찬과 밥을 남김없이 골고루 섭취하시어 전반적인 음식 섭취 순응도가 매우 높게 나타납니다.",neutral:"☐ 식욕 상태: 식사량이나 음식을 대하는 태도에 특별한 저하나 항진 없이 평소 수준을 그대로 유지하고 계십니다. 거부감 없이 매 끼니 적정량의 식사를 무난하게 마치시는 상태입니다.",negative:"☐ 식욕 상태: 일시적인 재원 변화나 체력 감소 등으로 극심한 우울감과 음식 거부 반응이 가끔 관찰되며, 이로 인해 신체 면역력 결핍 우려가 또한 생김에 따라 돌봄 과정이나 수행 다음 심리 유형을 수정할 필요가 있습니다."}},{key:"state3",index:"03",label:"상담·정서 상태 — 이용자의 심리·정서 변화 정도를 선택해주세요.",sentences:{positive:"☐ 상담·정서 상태: 정기적인 맞춤 상담 시나리오를 통해 정밀 분석 기법을 지속적으로 러닝한 결과, 기분이 좋고 전보다 웃음 가득한, 유쾌하고 우울감 없는 일상을 마주하고 계실뿐더러 감정이 정돈된 가장 이상적인 심리적 안정을 변함없이 나타내십니다.",neutral:"☐ 상담·정서 상태: 시기적(계절별/월별) 환경 변화 기능을 통하거나 매일매일 발생 및 부여되는 질문과 과제들에 대해 감정의 변화가 미미하며, 사회복지사 등 면담 평정 가이드라인에서 무난하고 일률적인 심리 현황을 보여주고 계십니다.",negative:"☐ 상담·정서 상태: 가끔 위축적 성향을 활발히 높은 빈도로, 신경 감정적 상태가 일어났으며 스스로 감정을 제어하는 등의 부여가 부족합니다. 정기적 상담을 연계하여 가장 신속히 지도가 반복적으로 이루어져야 할 필요성이 있습니다."}}],fh={state1:null,state2:null,state3:null},fu={positive:"긍정 변화 / 개선됨",neutral:"변화 없음 / 유지됨",negative:"부정적 변화 / 결과 요망"},fp=["positive","neutral","negative"],fx=(e,t,n)=>Math.min(n,Math.max(t,e)),fg=["boxSizing","fontFamily","fontSize","fontWeight","fontStyle","lineHeight","letterSpacing","textTransform","textIndent","textDecoration","wordSpacing","tabSize","paddingTop","paddingRight","paddingBottom","paddingLeft"],fm=(e,t,n,i=.08)=>{let l=fx(n,0,t.length),a=document.createElement("div"),d=document.createElement("span"),o=window.getComputedStyle(e);a.style.position="absolute",a.style.left="-99999px",a.style.top="0",a.style.visibility="hidden",a.style.pointerEvents="none",a.style.width=`${e.clientWidth}px`,a.style.whiteSpace="pre-wrap",a.style.overflowWrap="break-word",a.style.wordBreak="break-word",fg.forEach(e=>{a.style[e]=o[e]}),a.textContent=t.slice(0,l),d.textContent="​",a.appendChild(d),document.body.appendChild(a);let r=d.offsetTop;a.remove();let s=Math.max(e.scrollHeight-e.clientHeight,0);return fx(r-e.clientHeight*i,0,s)},fb=l.keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`,fj=(0,l.default)(cr).withConfig({componentId:"zh__sc-42312189-0"})`
  will-change: transform, opacity;
  animation: ${fb} 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,f_=l.default.div.withConfig({componentId:"zh__sc-42312189-1"})`
  width: 36px;
  height: 36px;
`,fw=l.default.div.withConfig({componentId:"zh__sc-42312189-2"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 16px;
`,fy=l.default.div.withConfig({componentId:"zh__sc-42312189-3"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,fv=l.default.div.withConfig({componentId:"zh__sc-42312189-4"})`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,fC=l.default.div.withConfig({componentId:"zh__sc-42312189-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 0;
`,fI=l.default.div.withConfig({componentId:"zh__sc-42312189-6"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,fz=l.default.div.withConfig({componentId:"zh__sc-42312189-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,fT=l.default.div.withConfig({componentId:"zh__sc-42312189-8"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  border-radius: 12px;

  font-size: 12px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #fff;

  background: #4f39f6;
`,fE=l.default.div.withConfig({componentId:"zh__sc-42312189-9"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,fS=l.default.div.withConfig({componentId:"zh__sc-42312189-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,fk=l.default.button.withConfig({componentId:"zh__sc-42312189-11"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
  letter-spacing: -1px;

  background: #fff;

  ${({$selected:e})=>e&&`
    border-color: #4f39f6;
    color: #fff;
    background: #4f39f6;
  `}
`,fD=l.default.div.withConfig({componentId:"zh__sc-42312189-12"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,fA=l.default.div.withConfig({componentId:"zh__sc-42312189-13"})`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
  letter-spacing: -0.5px;
`,f$=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-42312189-14"})`
  resize: none;
  scrollbar-gutter: stable;

  overflow: auto;
  display: flex;
  align-items: flex-start;
  align-self: stretch;

  height: 160px;
  padding: 16px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    margin-block: 6px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border: 2px solid transparent;
    border-radius: 999px;
    background-color: #cfd3dc;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  &&:read-only {
    pointer-events: auto;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    background: #f5f3ff;
  }
`,fR=l.default.div.withConfig({componentId:"zh__sc-42312189-15"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
`,fO=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-42312189-16"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,fL=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-42312189-17"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;
`;function fP(){return(fP=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var fN=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",fP({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),i.default.createElement("polyline",{points:"12 19 5 12 12 5"}))});fN.propTypes={color:q.default.string,size:q.default.oneOfType([q.default.string,q.default.number])},fN.displayName="ArrowLeft",(0,n.observer)(function({goBack:e,close:n,showToast:l}){let a=async e=>!1,[d,o]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),[r,s]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),c=(e,t)=>{o(n=>({...n,[e]:t})),s(t=>({...t,[e]:""}))},f=async()=>{let e=!0;""===d.name.trim()&&(s(e=>({...e,name:"필수 입력값입니다."})),e=!1),""===d.relation.trim()&&(s(e=>({...e,relation:"필수 입력값입니다."})),e=!1),""===d.phone.trim()&&(s(e=>({...e,phone:"필수 입력값입니다."})),e=!1),e&&await a({name:d.name,relation:d.relation,phone:d.phone,address:d.address})};return(0,t.jsxs)(cr,{children:[(0,t.jsxs)(cs,{children:[(0,t.jsx)(cf,{onClick:e,children:(0,t.jsx)(fN,{size:16})}),(0,t.jsx)(ch,{children:"신규 보호자 추가"}),(0,t.jsx)(cu,{onClick:n,children:(0,t.jsx)(en.X,{size:16})})]}),(0,t.jsx)(cp,{}),(0,t.jsx)(cx,{children:(0,t.jsx)(fM,{children:(0,t.jsxs)(fF,{children:[(0,t.jsxs)(fB,{children:[(0,t.jsxs)(fU,{children:[(0,t.jsx)(fY,{children:"성명"}),(0,t.jsx)(fW,{type:"text",placeholder:"보호자 성명을 입력하세요.",value:d.name,onChange:e=>c("name",e.target.value),$error:""!==r.name}),(0,t.jsx)(fH,{$show:""!==r.name,children:r.name})]}),(0,t.jsxs)(fU,{children:[(0,t.jsx)(fY,{children:"이용자와의 관계"}),(0,t.jsx)(fW,{type:"text",placeholder:"예: 자녀(딸), 자녀(아들), 자녀(며느리)",value:d.relation,onChange:e=>c("relation",e.target.value),$error:""!==r.relation}),(0,t.jsx)(fH,{$show:""!==r.relation,children:r.relation})]}),(0,t.jsxs)(fU,{children:[(0,t.jsx)(fY,{children:"휴대폰"}),(0,t.jsx)(fW,{type:"tel",placeholder:"휴대폰을 입력해주세요.",value:d.phone,onChange:e=>c("phone",e.target.value),$error:""!==r.phone}),(0,t.jsx)(fH,{$show:""!==r.phone,children:r.phone})]}),(0,t.jsxs)(fU,{children:[(0,t.jsx)(fY,{children:"주소"}),(0,t.jsx)(fV,{placeholder:"보호자 주소를 입력하세요.",value:d.address,onChange:e=>c("address",e.target.value),$error:""!==r.address,rows:2}),(0,t.jsx)(fH,{$show:""!==r.address,children:r.address})]})]}),(0,t.jsxs)(fG,{onClick:()=>void f(),children:[(0,t.jsx)(b.Check,{size:20}),"추가 후 계약서에 반영하기"]})]})})})]})});let fM=l.default.div.withConfig({componentId:"zh__sc-f12494e7-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px;
`,fF=l.default.div.withConfig({componentId:"zh__sc-f12494e7-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,fB=l.default.div.withConfig({componentId:"zh__sc-f12494e7-2"})`
  display: flex;
  flex-direction: column;
`,fU=l.default.div.withConfig({componentId:"zh__sc-f12494e7-3"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`,fY=l.default.label.withConfig({componentId:"zh__sc-f12494e7-4"})`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`,fW=l.default.input.withConfig({componentId:"zh__sc-f12494e7-5"})`
  padding: 8px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  font-size: 16px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: ${ex.default.style.color.PRIMARY[100]};
    outline: none;
  }

  ${({$error:e})=>!0===e&&l.css`
      border: 1px solid #ef4444;
    `}
`,fV=l.default.textarea.withConfig({componentId:"zh__sc-f12494e7-6"})`
  resize: none;

  padding: 8px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;

  font-size: 16px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: ${ex.default.style.color.PRIMARY[100]};
    outline: none;
  }

  ${({$error:e})=>!0===e&&l.css`
      border: 1px solid #ef4444;
    `}
`,fH=l.default.div.withConfig({componentId:"zh__sc-f12494e7-7"})`
  display: flex;

  height: 24px;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 18px; /* 128.571% */
  color: #ef4444;

  visibility: ${({$show:e})=>!0===e?"visible":"hidden"};
`,fG=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-f12494e7-8"})`
  display: flex;
  gap: 4px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,{PRIMARY:fK}=((0,n.observer)(function({close:e,showToast:n}){let l=[],a=(void 0)??null,d=(0,i.useMemo)(()=>{let e=l??[];if(null===a)return e;let t=e.find(e=>e.uuid===a);return t?[t,...e.filter(e=>e.uuid!==a)]:e},[l,a]);return(0,t.jsx)(fX,{children:d.map(i=>(0,t.jsxs)(fq,{onClick:()=>{i.uuid,n(),e()},$selected:void 0===i.uuid,children:[(0,t.jsxs)(fQ,{children:[(0,t.jsxs)(fJ,{children:[(0,t.jsx)(fZ,{children:`${i.name.family} ${i.name.given}`}),(0,t.jsx)(f0,{children:i.relation})]}),(0,t.jsxs)(f1,{children:[(0,t.jsxs)(f2,{children:[(0,t.jsx)(f6,{children:"휴대폰"}),(0,t.jsx)(f4,{}),(0,t.jsx)(f6,{children:i.phone.mobile??"-"})]}),(0,t.jsxs)(f2,{children:[(0,t.jsx)(f6,{children:"주소"}),(0,t.jsx)(f4,{}),(0,t.jsx)(f6,{children:i.address})]})]})]}),(0,t.jsx)(f5,{children:void 0===i.uuid?(0,t.jsx)(f9,{children:"지금 선택됨"}):(0,t.jsxs)(f3,{children:["선택",(0,t.jsx)(J,{size:16})]})})]},i.uuid))})}),ex.default.style.color),fX=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-0"})`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  height: 729px;
  padding: 16px;

  background: #f9fafb;
`,fq=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-1"})`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;

  &:hover {
    border: 1px solid #5635ff;
    background: #f7f5ff;
  }

  &:active {
    box-shadow: 0 0 6px 0 #ddd8ff;
  }

  ${({$selected:e})=>!0===e&&l.css`
      border: 1px solid #5635ff;
      background: #f7f5ff;
      box-shadow: 0 0 6px 0 #ddd8ff;
    `}
`,fQ=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-2"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,fJ=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,fZ=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-4"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,f0=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  padding: 2px 8px;
  border: 1px solid #45464e;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: #45464e;
  text-align: center;

  background: #fff;
`,f1=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-6"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,f2=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,f6=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-8"})`
  min-width: 50px;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: left;
`,f4=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-9"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

  width: 1px;
  height: 20px;

  background: #e5e7eb;
`,f5=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-10"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  align-self: stretch;
  justify-content: center;
`,f3=l.default.button.withConfig({componentId:"zh__sc-3bbaa2f0-11"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: ${fK[100]};
  letter-spacing: -1px;
`,f9=(0,l.default)(f3).withConfig({componentId:"zh__sc-3bbaa2f0-12"})`
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #fff;
  letter-spacing: -1px;

  background: #4f39f6;
`;var f8=e.i(5543);(0,n.observer)(function({setSelectedDrawerKey:e}){return(0,t.jsxs)(he,{children:[(0,t.jsxs)(ht,{children:[(0,t.jsx)(ei.default.Search,{size:17,color:"#9CA3AF"}),(0,t.jsx)(hn,{placeholder:"보호자 이름을 검색하세요.",value:"",onChange:e=>{e.target.value}})]}),(0,t.jsxs)(hi,{onClick:()=>e?.("add"),children:[(0,t.jsx)(f8.Plus,{size:18}),"신규 대리인(보호자) 추가하기"]})]})});let{PRIMARY:f7}=ex.default.style.color,he=l.default.div.withConfig({componentId:"zh__sc-612601c-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px;
`,ht=l.default.div.withConfig({componentId:"zh__sc-612601c-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  height: 36px;
  padding: 8px 16px;
  border: 1px solid ${f7[100]};
  border-radius: 4px;

  background: #fff;
`,hn=l.default.input.withConfig({componentId:"zh__sc-612601c-2"})`
  flex: 1;

  border: none;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #9ca3af;
  text-align: left;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
  }
`,hi=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-612601c-3"})`
  display: flex;
  gap: 4px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #fff;
`,hl=function({value:e,onChange:n,onApply:l,onClose:a}){let[d,o]=(0,i.useState)(()=>{let t,n;return t=e.replace(/\s+/g," ").trim(),n={...cm},cg.forEach(e=>{let i=e.options.find(n=>{let i=c_(e.optionLabels,n),l="state1"===e.key?cb[n]:cj[n]??"";return""!==i&&t.includes(i)||""!==l&&t.includes(l)});n[e.key]=i??null}),n}),{ref:r,fire:s}=eP(),c=(0,i.useRef)(!1),f=(0,i.useRef)(0),h=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!c.current)return;let t=r.current;if(null!==t)if(null!==h.current){let e=Math.max(t.scrollHeight-t.clientHeight,0);t.scrollTop=cw(h.current,0,e),h.current=null}else t.scrollTop=cv(t,e,f.current);c.current=!1},[r,e]);let u=""!==e.trim(),p=Object.values(d).filter(e=>null!==e).length,x=p===cg.length;return(0,t.jsxs)(cI,{children:[(0,t.jsxs)(cs,{children:[(0,t.jsx)(cz,{}),(0,t.jsx)(ch,{children:"자동으로 문장 생성하기"}),(0,t.jsx)(cu,{onClick:a,children:(0,t.jsx)(en.X,{size:16})})]}),(0,t.jsx)(cp,{}),(0,t.jsx)(cx,{children:(0,t.jsxs)(cT,{children:[(0,t.jsxs)(cE,{children:[(0,t.jsx)(tf.default,{sx:{fontSize:16}}),(0,t.jsx)(cS,{children:"각 카테고리와 세부 항목을 선택하면, 내용에 맞는 문장이 하단에 자동으로 생성됩니다."})]}),(0,t.jsx)(ck,{children:cg.map(i=>{let l=d[i.key];return(0,t.jsxs)(cD,{children:[(0,t.jsxs)(cA,{children:[(0,t.jsx)(c$,{children:i.index}),(0,t.jsx)(cR,{children:i.label})]}),(0,t.jsx)(cO,{children:i.options.map(a=>(0,t.jsxs)(cL,{type:"button",$selected:l===a,onClick:()=>((t,i)=>{let l=d[t];if(l===i){let n=r.current,i="state1"===t?cb[l]:cj[l]??"",a=""===i?-1:e.indexOf(i);null!==n&&a>=0&&(h.current=cv(n,e,a,.5))}else h.current=null;let a={...d,[t]:l===i?null:i};o(a);let u=(e=>{let t=e.state1,n=e.state2;if(null===t||null===n)return"";let i=cb[t],l=cj[n]??"";return""===i.trim()||""===l.trim()?"":`○ 대상자의 식사영양관리 서비스 비용 청구 기간 중 ${i} ${l} 이에 따라 예외지급을 청구합니다.`.trim()})(a);""!==u.trim()&&s(),f.current=((e,t,n)=>{if(""===n.trim())return 0;let i=t[e];if(null===i)return 0;let l="state1"===e?cb[i]:cj[i]??"",a=""===l?-1:n.indexOf(l);return a>=0?a:0})(t,a,u),c.current=!0,n(u)})(i.key,a),children:[c_(i.optionLabels,a),l===a&&(0,t.jsx)(lW.default,{sx:{fontSize:16}})]},`${i.key}-${a}`))})]},i.key)})}),(0,t.jsx)(cp,{style:{marginTop:"auto"}}),(0,t.jsxs)(cP,{children:[(0,t.jsxs)(cN,{children:[(0,t.jsx)(ei.default.AI,{size:16,color:"#4f39f6"}),"자동 생성 문장"]}),(0,t.jsx)(cM,{ref:r,value:e,placeholder:"카테고리/키워드와 세부 상태를 선택하면 문서에 사용할 문장이 자동으로 생성됩니다.",readOnly:!0})]}),(0,t.jsxs)(cF,{children:[(0,t.jsx)(cB,{type:"button",onClick:()=>{o({...cm}),n("")},disabled:!u,children:"다시 생성하기"}),(0,t.jsxs)(cU,{type:"button",onClick:l,disabled:!(0===p||x),children:[(0,t.jsx)(lW.default,{sx:{fontSize:16}}),"보고서에 반영하기"]})]})]})})]})},ha=function({value:e,autoFilledReferenceValue:n,keywords:l,isKeywordListLoading:a,isKeywordCreating:d,isGenerating:o,onAddKeyword:r,onGenerate:s,onChange:c,onApply:f,onClose:h}){let{ref:u,fire:p}=eP(),[x,g]=(0,i.useState)(""),[m,b]=(0,i.useState)([]),[j,_]=(0,i.useState)({}),w=["POSITIVE","NEUTRAL","NEGATIVE"],y=m.filter(e=>l.includes(e)),v=""!==e.trim(),C=x.trim(),I=""!==C&&!1===d&&!1===a,z=y.every(e=>void 0!==j[e]),T=!1===a&&!1===o&&y.length>0&&z,E=""!==e&&e===n,S=async()=>{I&&(await r(C),g(""))},k=async()=>{if(!T)return;let e=y.reduce((e,t)=>{let n=j[t];return void 0===n||e.push({keyword:t,detailStatus:n}),e},[]),t=await s({selectedKeywordDetailStatuses:e});null!==t&&(""!==t.trim()&&p(),c(t))};return(0,t.jsxs)(cV,{children:[(0,t.jsxs)(cs,{children:[(0,t.jsx)(cH,{}),(0,t.jsx)(ch,{children:"자동으로 문장 생성하기"}),(0,t.jsx)(cG,{onClick:h,children:(0,t.jsx)(en.X,{size:16})})]}),(0,t.jsx)(cp,{}),(0,t.jsx)(cK,{children:(0,t.jsxs)(cX,{children:[(0,t.jsxs)(cJ,{children:[(0,t.jsxs)(cZ,{children:[(0,t.jsxs)(cq,{children:[(0,t.jsx)(tf.default,{sx:{fontSize:16}}),(0,t.jsx)(cQ,{children:"각 키워드와 변화 정도를 선택한 후, [문장 생성하기] 버튼을 클릭해주세요. 키워드와 내용에 맞는 문장이 하단에 자동으로 생성됩니다."})]}),(0,t.jsxs)(c0,{children:[(0,t.jsxs)(c1,{children:[(0,t.jsx)(c2,{value:x,placeholder:"추가할 키워드를 입력해주세요. (예: 복지관 연계)",onChange:e=>{g(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),S())}}),(0,t.jsx)(c6,{type:"button",disabled:!I,onClick:()=>{S()},children:"새 키워드 추가"})]}),(0,t.jsx)(c4,{children:l.map(e=>(0,t.jsx)(c5,{type:"button",$selected:y.includes(e),onClick:()=>{b(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),_(t=>{if(!1===m.includes(e))return t;let n={...t};return delete n[e],n})},children:e},e))})]}),y.length>0?(0,t.jsx)(c3,{children:y.map((e,n)=>(0,t.jsxs)(c9,{children:[(0,t.jsxs)(c8,{children:[(0,t.jsx)(c7,{children:String(n+1).padStart(2,"0")}),(0,t.jsxs)(fe,{children:["[",e,"]에 대한 세부 상태를 선택해주세요."]})]}),(0,t.jsx)(ft,{children:w.map(n=>(0,t.jsx)(fn,{type:"button",$selected:j[e]===n,onClick:()=>{_(t=>({...t,[e]:n}))},children:cY.default[n].label},`${e}:${n}`))})]},e))}):null]}),(0,t.jsx)(fi,{children:(0,t.jsx)(fl,{type:"button",disabled:!T,onClick:()=>{k()},children:"문장 생성하기"})})]}),(0,t.jsx)(cp,{style:{marginTop:"auto"}}),(0,t.jsxs)(fa,{children:[(0,t.jsxs)(fd,{children:[(0,t.jsx)(ei.default.AI,{size:16,color:"#4f39f6"}),"자동 생성 문장"]}),(0,t.jsx)(fo,{$isAutoFilled:E,ref:u,value:e,placeholder:"카테고리/키워드와 세부 상태를 선택하면 문서에 사용할 문장이 자동으로 생성됩니다.",onChange:e=>{c(e.target.value)}})]}),(0,t.jsxs)(fr,{children:[(0,t.jsx)(fs,{type:"button",onClick:()=>{c(""),b([]),_({})},disabled:!v,children:"다시 생성하기"}),(0,t.jsxs)(fc,{type:"button",onClick:()=>{f()},children:[(0,t.jsx)(lW.default,{sx:{fontSize:16}}),"보고서에 반영하기"]})]})]})})]})},hd=function({value:e,onChange:n,onApply:l,onClose:a}){let d=(0,i.useMemo)(()=>{let t,n;return t=e.split("\n").map(e=>e.trim()).filter(e=>""!==e),n={...fh},ff.forEach(e=>{let i=fp.find(n=>t.includes(e.sentences[n]));n[e.key]=i??null}),n},[e]),{ref:o,fire:r}=eP(),s=(0,i.useRef)(!1),c=(0,i.useRef)(0),f=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!s.current)return;let t=o.current;if(null!==t)if(null!==f.current){let e=Math.max(t.scrollHeight-t.clientHeight,0);t.scrollTop=fx(f.current,0,e),f.current=null}else t.scrollTop=fm(t,e,c.current);s.current=!1},[o,e]);let h=""!==e.trim();return(0,t.jsxs)(fj,{children:[(0,t.jsxs)(cs,{children:[(0,t.jsx)(f_,{}),(0,t.jsx)(ch,{children:"자동으로 문장 생성하기"}),(0,t.jsx)(cu,{onClick:a,children:(0,t.jsx)(en.X,{size:16})})]}),(0,t.jsx)(cp,{}),(0,t.jsx)(cx,{children:(0,t.jsxs)(fw,{children:[(0,t.jsxs)(fy,{children:[(0,t.jsx)(tf.default,{sx:{fontSize:16}}),(0,t.jsx)(fv,{children:"각 카테고리와 세부 항목을 선택하면, 내용에 맞는 문장이 하단에 자동으로 생성됩니다."})]}),(0,t.jsx)(fC,{children:ff.map(i=>{let l=d[i.key];return(0,t.jsxs)(fI,{children:[(0,t.jsxs)(fz,{children:[(0,t.jsx)(fT,{children:i.index}),(0,t.jsx)(fE,{children:i.label})]}),(0,t.jsx)(fS,{children:fp.map(a=>(0,t.jsxs)(fk,{type:"button",$selected:l===a,onClick:()=>((t,i)=>{let l=d[t];if(null!==l&&null===i){let n=o.current,i=ff.find(e=>e.key===t)?.sentences[l]??"",a=""===i?-1:e.indexOf(i);null!==n&&a>=0&&(f.current=fm(n,e,a,.5))}else f.current=null;let a={...d,[t]:i},h=ff.map(e=>{let t=a[e.key];return null===t?null:e.sentences[t]}).filter(e=>null!==e).join("\n\n");""!==h.trim()&&r(),c.current=((e,t,n)=>{if(""===n.trim())return 0;let i=t[e];if(null===i){let e=ff.findIndex(e=>null!==t[e.key]);if(e<0)return 0;let i=ff[e];if(void 0===i)return 0;let l=t[i.key];if(null===l)return 0;let a=i.sentences[l],d=n.indexOf(a);return d>=0?d:0}let l=ff.find(t=>t.key===e)?.sentences[i]??"",a=""===l?-1:n.indexOf(l);return a>=0?a:0})(t,a,h),s.current=!0,n(h)})(i.key,l===a?null:a),children:[fu[a],l===a&&(0,t.jsx)(lW.default,{sx:{fontSize:16}})]},`${i.key}-${a}`))})]},i.key)})}),(0,t.jsx)(cp,{style:{marginTop:"auto"}}),(0,t.jsxs)(fD,{children:[(0,t.jsxs)(fA,{children:[(0,t.jsx)(ei.default.AI,{size:16,color:"#4f39f6"}),"자동 생성 문장"]}),(0,t.jsx)(f$,{ref:o,value:e,placeholder:"카테고리/키워드와 세부 상태를 선택하면 문서에 사용할 문장이 자동으로 생성됩니다.",readOnly:!0})]}),(0,t.jsxs)(fR,{children:[(0,t.jsx)(fO,{type:"button",onClick:()=>{n("")},disabled:!h,children:"다시 생성하기"}),(0,t.jsxs)(fL,{type:"button",onClick:l,children:[(0,t.jsx)(lW.default,{sx:{fontSize:16}}),"보고서에 반영하기"]})]})]})})]})};var ho=e.i(28095);function hr(e,t="서류 저장에 실패했습니다. 잠시 후 다시 시도해 주세요."){let n=e instanceof aT.HttpError&&0!==e.status?e.message:t;a.default.ui.layout.toast.error(n)}let hs=function({isOpen:e,contractId:n,onClose:l,onConfirm:a}){let[d,o]=(0,i.useState)("idle"),[r,s]=(0,i.useState)([]),[c,f]=(0,i.useState)("");(0,i.useEffect)(()=>{let t=!1;return e?((async()=>{if(null===n){if(t)return;o("error"),s([]),f("");return}if(t)return;o("loading");let[e,i]=await aC.default.data.contractPayment.getDepositList({contractId:n});if(t)return;if(null!==e||null===i)return o("error");let l=i.slice().sort((e,t)=>{let n=t.depositDate.localeCompare(e.depositDate);return 0!==n?n:t.id.localeCompare(e.id)});s(l),f(l[0]?.id??""),o("success")})(),()=>{t=!0}):()=>{t=!0}},[n,e]);let h=(0,i.useMemo)(()=>r.find(e=>e.id===c)??null,[r,c]);return e?(0,t.jsx)(hc,{children:(0,t.jsxs)(hf,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(hh,{children:[(0,t.jsx)(hu,{children:"본인부담금 영수증을 작성할 입금 내역을 선택해주세요."}),(0,t.jsx)(hp,{children:"아래 선택한 입금 내역이 본인부담금 영수증에 반영되며, 반영 이후에도 자유롭게 수정할 수 있습니다."}),(0,t.jsxs)(hx,{children:[(0,t.jsx)(hg,{children:"입금 내역"}),"success"===d&&r.length>0?(0,t.jsx)(hm,{value:c,onChange:e=>{f(e.target.value)},children:r.map(e=>{var n;return(0,t.jsx)("option",{value:e.id,children:`${function(e){let t=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(null===t)return e;let[,n,i,l]=t;return`${n}년 ${i}월 ${l}일`}(e.depositDate)} - ${(n=e.amount,`${Math.max(0,Math.floor(n)).toLocaleString("ko-KR")}원`)} 입금`},e.id)})}):(0,t.jsx)(hm,{value:"",disabled:!0,children:(0,t.jsx)("option",{value:"",children:"loading"===d?"입금 내역을 불러오는 중입니다.":"error"===d?"입금 내역을 불러오지 못했습니다.":"선택 가능한 입금 내역이 없습니다."})})]}),"error"===d?(0,t.jsx)(hb,{children:"잠시 후 다시 시도해 주세요."}):null]}),(0,t.jsxs)(hj,{children:[(0,t.jsx)(h_,{type:"button",onClick:l,children:"취소하기"}),(0,t.jsx)(hw,{type:"button",disabled:"loading"===d,onClick:()=>{"loading"!==d&&a(h)},children:"success"===d&&0===r.length?"내역 없이 작성하기":"내역 반영하기"})]})]})}):null},hc=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 48%);
`,hf=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-1"})`
  display: flex;
  display: inline-flex;
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
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,hh=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 453px;
`,hu=l.default.h3.withConfig({componentId:"zh__sc-8efbebf8-3"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,hp=l.default.p.withConfig({componentId:"zh__sc-8efbebf8-4"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,hx=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-5"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  width: 100%;
`,hg=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,hm=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-8efbebf8-7"})`
  flex: 1;
  height: 36px;
`,hb=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-8"})`
  display: flex;
  align-items: center;

  min-height: 20px;

  font-size: 16px;
  line-height: 20px;
  color: #6b7280;
`,hj=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-9"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,h_=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-8efbebf8-10"})`
  height: 36px;
  padding: 8px 14px;
`,hw=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-8efbebf8-11"})`
  height: 36px;
  padding: 8px 14px;
`,hy="__preview__",hv=(e,t)=>e?.includes(t)===!0,hC=e=>hv(e,s3.default.TARGET_COPAYMENT_RECEIPT_AMOUNT)||hv(e,"COPAYMENT_RECEIPT_AMOUNT"),hI=e=>hv(e,s3.default.TARGET_COPAYMENT_RECEIPT_RECEIVED_DATE)||hv(e,"COPAYMENT_RECEIPT_RECEIVED_DATE"),hz=(0,n.observer)(function(){let e=a.default.modal.documentView,n=e.clientContractId,l=a.default.data.docs.list.query?.contractId??null,[d,o]=(0,i.useState)(""),[r,s]=(0,i.useState)(null),[c,f]=(0,i.useState)(!1),[h,u]=(0,i.useState)(!1),[p,x]=(0,i.useState)(!1),g=(0,i.useRef)(null),m=e.selectedTemplateId,b=e.selectedTemplate,j=null===e.selectedDocumentId&&null!==m,_=(0,i.useMemo)(()=>null===m?[]:e.documents.flatMap(e=>{let t=e.id;return e.templateId!==m||null===t?[]:[{...e,id:t}]}).sort((e,t)=>{let n=t.occurrenceKey.localeCompare(e.occurrenceKey);return 0!==n?n:t.createdAt.localeCompare(e.createdAt)}),[e.documents,m]),w=(0,i.useMemo)(()=>_[0]?.id??"",[_]),y=(0,i.useMemo)(()=>{if(j)return hy;let t=e.selectedDocumentId;return"string"==typeof t&&_.some(e=>e.id===t)?t:_.some(e=>e.id===d)?d:w},[_,w,j,e.selectedDocumentId,d]),v=_.some(e=>"COMPLETED"!==e.displayStatus),C=null!==b&&"MANUAL"===b.creationMode&&!1===v,I=e.hasSelectedTemplatePreviewSession,z=e.hasSelectedFieldChanges,T=e.selectedTemplateFields.some(e=>{let t=e.uiProps.triggerKeys;return hv(t,s3.default.COPAYMENT_RECEIPT_TRANSACTION_NUMBER)||hC(t)||hI(t)});(0,i.useEffect)(()=>{let t=g.current;if(null===t||e.selectedTemplateId!==t.templateId)return;let n=e.selectedTemplateFields;if(0===n.length)return;let i=n.filter(e=>hC(e.uiProps.triggerKeys)),l=n.filter(e=>hI(e.uiProps.triggerKeys));if(0===i.length&&0===l.length){g.current=null;return}i.forEach(n=>{e.updateSelectedFieldValue({page:n.page,fieldKey:n.fieldKey,value:t.amountText})}),l.forEach(n=>{e.updateSelectedFieldValue({page:n.page,fieldKey:n.fieldKey,value:t.receivedDate})}),g.current=null},[e,e.selectedTemplateFields]);let E=t=>{if(t===hy){null!==m&&e.openTemplateWithoutDocument(m);return}e.open(t)},S=async()=>{if(null!==r&&!h){u(!0);try{let t=await e.saveSelectedFieldChanges();if(null===t)return;E(r),s(null),f(!1)}catch(e){hr(e)}finally{u(!1)}}};return(0,t.jsxs)(hT,{children:[(0,t.jsxs)(hE,{children:[(0,t.jsxs)(hS,{children:[(0,t.jsx)(ei.default.Ballot,{size:16}),"서류 목록"]}),(0,t.jsxs)(hD,{disabled:!C,onClick:()=>void(()=>{if(C&&null!==m){if(T)return x(!0);e.openTemplateWithoutDocument(m)}})(),children:[(0,t.jsx)(ho.default,{sx:{fontSize:20}}),"새 서류 생성하기"]})]}),(0,t.jsxs)(hk,{value:y,onChange:e=>{let t=e.target.value;if(o(t),t!==y){if(z){s(t),f(!0);return}E(t)}},disabled:0===_.length&&!1===I,children:[I?(0,t.jsx)("option",{value:hy,children:"새 서류 미리보기 (저장 전)"}):null,_.map(e=>{let n=sd(e.displayStatus),i=function(e){if(!nW.default.yearMonth.is(e))return null;let[t,n]=e.split("-"),i=Number(n);return!Number.isInteger(i)||i<1||i>12?null:`${t}년 ${i}월`}(e.occurrenceKey)??function(e){let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let n=new Map(new Intl.DateTimeFormat("ko-KR",{timeZone:"Asia/Seoul",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(t).map(e=>[e.type,e.value])),i=n.get("year")??"0000",l=n.get("month")??"00",a=n.get("day")??"00",d=n.get("hour")??"00",o=n.get("minute")??"00",r=n.get("second")??"00";return`${i}년 ${l}월 ${a}일 (${d}:${o}:${r}) 생성됨`}(e.createdAt);return(0,t.jsx)("option",{value:e.id,"data-badge":n.badge.label,"data-badge-tone":n.badge.color,children:i},e.id)})]}),(0,t.jsx)(s7,{isOpen:c,actionType:"move",isProcessing:h,onClickSecondary:()=>{null===r||(e.discardSelectedFieldChanges(),E(r),s(null)),f(!1)},onClickPrimary:()=>{S()}}),(0,t.jsx)(hs,{isOpen:p,contractId:n??l,onClose:()=>{x(!1)},onConfirm:t=>{if(null===m)return void x(!1);if(null===t){x(!1),e.openTemplateWithoutDocument(m);return}g.current={templateId:m,amountText:String(Math.max(0,Math.floor(t.amount))),receivedDate:t.depositDate},x(!1),e.openTemplateWithoutDocument(m)}})]})}),hT=l.default.div.withConfig({componentId:"zh__sc-70c07d1f-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px 12px;
  border: 1px solid #d8dee7;
  border-radius: 8px;

  background: #fcfdff;
`,hE=l.default.div.withConfig({componentId:"zh__sc-70c07d1f-1"})`
  display: flex;
  justify-content: space-between;
  width: 100%;
`,hS=l.default.div.withConfig({componentId:"zh__sc-70c07d1f-2"})`
  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
`,hk=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-70c07d1f-3"})`
  width: 100%;
`,hD=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-70c07d1f-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,hA=(0,n.observer)(function(){let{selectedOcrFile:e,isOcrAnalyzing:n,isUncreatedMonthlyScheduleDocument:i,monthlyScheduleYearMonth:l,monthlyScheduleClientContractId:d,analyzeSelectedOcrFile:o,clearSelectedOcrFile:r}=a.default.modal.documentView;return(0,t.jsxs)(h$,{children:[(0,t.jsxs)(hL,{disabled:null===e||n||i&&(null===l||null===d),onClick:()=>{o()},children:["분석 시작",(0,t.jsx)(J,{size:16})]}),null!==e&&(0,t.jsx)(hO,{onClick:()=>{r()},children:"취소"})]})}),h$=l.default.div.withConfig({componentId:"zh__sc-11817043-0"})`
  display: flex;
  flex-flow: row-reverse;
  gap: 10px;
  align-self: stretch;
  justify-content: space-between;
`,hR=l.css`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,hO=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-11817043-1"})`
  ${hR}
  visibility: hidden;
`,hL=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-11817043-2"})`
  ${hR}
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:hP}=el.default.file,hN=(0,n.observer)(function(){var e;let n,{selectedOcrFile:i,isOcrAnalyzing:l,clearSelectedOcrFile:d}=a.default.modal.documentView;if(null===i)return null;let o=-1===(n=(e=i.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(hM,{children:(0,t.jsxs)(hF,{children:[(0,t.jsxs)(hB,{children:[(0,t.jsx)(hU,{children:hP.IMAGE.some(e=>e===o)?(0,t.jsx)(ei.default.Photo,{size:17,color:"#FA8E43"}):hP.AUDIO.some(e=>e===o)?(0,t.jsx)(ei.default.SpeechToText,{size:17,color:"#A855F7"}):hP.DOCUMENT.some(e=>e===o)?(0,t.jsx)(ei.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(hY,{children:(0,t.jsx)(hW,{children:i.name})})]}),(0,t.jsxs)(hV,{onClick:d,disabled:l,children:["삭제",(0,t.jsx)(en.X,{size:16})]})]},`${i.name}-${i.size}-${i.lastModified}`)})}),hM=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-0"})`
  overflow: auto hidden;
  display: flex;
  gap: 12px;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  padding-bottom: 6px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: #d1d5db;
  }
`,hF=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,hB=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,hU=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,hY=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,hW=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,hV=l.default.button.withConfig({componentId:"zh__sc-4e7cda26-6"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #45464e;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
  letter-spacing: -1px;

  background: #fff;

  &:hover {
    background: #f9fafb;
  }

  &:active {
    background: #f3f4f6;
  }

  &:disabled {
    border-color: #d1d5db;
    color: #9ca3af;
    background-color: #f9fafb;
  }
`;function hH(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(hG,{children:(0,t.jsx)(hK,{$progress:e})})}let hG=l.default.div.withConfig({componentId:"zh__sc-c9208651-0"})`
  overflow: hidden;
  display: flex;
  align-self: stretch;

  width: 100%;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,hK=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-c9208651-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,hX=(0,n.observer)(function({disabled:e}){let{isWindowFileDragging:n}=a.default.ui.layout,{selectedOcrFile:i,isOcrFileError:l,isOcrAnalyzing:d}=a.default.modal.documentView,o=l?"지원하지 않는 파일 형식입니다.":!e&&n?"파일을 여기에 놓으면 업로드 됩니다.":d?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.";return(0,t.jsxs)(hQ,{children:[null===i&&!l&&(0,t.jsx)(hJ,{children:(0,t.jsx)(ep.Upload,{size:26,color:e?"#9ca3af":hq[100]})}),(0,t.jsxs)(hZ,{children:[(0,t.jsx)(h0,{$disabled:e,$isError:l,children:o}),(0,t.jsx)(h1,{$disabled:e,children:null===i||d?"지원 파일 형식: 사진 이미지":"새 파일을 업로드하면 기존 파일이 교체됩니다."})]}),d&&(0,t.jsx)(hH,{})]})}),{PRIMARY:hq}=ex.default.style.color,hQ=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,hJ=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,hZ=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,h0=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-3"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e,$isError:t})=>t?"#ff4d4f":e?"#9ca3af":"#4f39f6"};
  text-align: center;
`,h1=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e})=>e?"#9ca3af":"#99a1af"};
`,h2=el.default.file.FILE_EXTENSION_WHITELIST_BY_GROUP.IMAGE.join(","),h6=(0,n.observer)(function(){let{isWindowFileDragging:e}=a.default.ui.layout,n=a.default.modal.documentView,{selectedDocumentDisplayStatus:l,selectedOcrFile:d,isOcrFileError:o}=n,r=(0,i.useRef)(null),s=!n.isOcrSupported||"WAITING_TO_DRAFT"!==l&&"NEED_UPDATE"!==l&&"NEED_MATCHING"!==l,c=e=>{n.setSelectedOcrFile(e)};return(0,X.default)(e=>{if(s)return;let t=e[0];void 0!==t&&c(t)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h4,{ref:r,type:"file",accept:h2,disabled:s,onChange:e=>{if(s)return;let t=Array.from(e.target.files??[]);if(0===t.length)return;let n=t[0];void 0!==n&&(c(n),e.target.value="")}}),(0,t.jsxs)(h5,{$isWindowFileDragging:e,$disabled:s,onDragOver:e=>{if(e.preventDefault(),s)return},onDrop:e=>{if(e.preventDefault(),s)return;let t=Array.from(e.dataTransfer.files);if(0===t.length)return;let n=t[0];void 0!==n&&c(n)},onClick:e=>{!s&&e.target instanceof HTMLElement&&(e.target.closest("button")||r.current?.click())},$isError:o,children:[null!==d&&(0,t.jsx)(hN,{}),(0,t.jsx)(hX,{disabled:s}),(0,t.jsx)(hA,{})]})]})}),h4=l.default.input.withConfig({componentId:"zh__sc-c05f4a71-0"})`
  display: none;
`,h5=l.default.div.withConfig({componentId:"zh__sc-c05f4a71-1"})`
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  cursor: ${({$disabled:e})=>e?"default":"pointer"};

  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  min-width: 0;
  padding: 24px 40px;
  border: 1px solid
    ${({$disabled:e,$isError:t})=>e?"#d1d5db":t?"#ff4d4f":"#4f39f6"};
  border-style: ${({$disabled:e,$isWindowFileDragging:t})=>e?"solid":t?"dashed":"solid"};
  border-radius: 16px;

  background: ${({$disabled:e,$isWindowFileDragging:t,$isError:n})=>e?"#F6F8FA":n?"#FFF5F5":t?"#f6f3ff":"#fff"};

  &:hover {
    background-color: ${({$disabled:e,$isError:t})=>e?"#F6F8FA":t?"#FFF5F5":"#f6f3ff"};
  }

  &:active {
    background-color: ${({$disabled:e,$isError:t})=>e?"#F6F8FA":t?"#FFF5F5":"#efeaff"};
  }
`,h3=(0,n.observer)(function(){let{isOcrAnalyzing:e,monthlyScheduleYearMonth:n,monthlyScheduleClientContractId:i,setMonthlyScheduleYearMonth:l,setMonthlyScheduleClientContractId:d}=a.default.modal.documentView,r=a.default.modal.serviceWorkerDetail.serviceWorker?.assignedContracts??[];return(0,t.jsxs)(h9,{children:[(0,t.jsxs)(h8,{children:[(0,t.jsx)(h7,{children:"년월"}),(0,t.jsx)(o.default.Input.Date,{style:{textAlign:"center",height:"100%"},value:n??"",valueType:"year-month",readOnly:e,pickerOptions:{hideDate:!0},onChange:l})]}),(0,t.jsxs)(h8,{children:[(0,t.jsx)(h7,{children:"이용자 계약"}),(0,t.jsxs)(ue,{value:i??"",disabled:e||0===r.length,onChange:e=>{d(e.target.value||null)},children:[(0,t.jsx)("option",{value:"",children:"이용자 계약 선택"}),r.map(e=>(0,t.jsx)("option",{value:e.contractId,children:null===e.contractEndDate?e.clientName:`${e.clientName} (${e.contractEndDate.replaceAll("-",".")})`},[e.contractId,e.clientName,e.clientBirthDate??"",e.contractEndDate??"",e.status].join(":")))]})]})]})}),h9=l.default.div.withConfig({componentId:"zh__sc-42463ee-0"})`
  display: grid;
  grid-template-columns: 136px minmax(0, 1fr);
  gap: 10px;
  align-self: stretch;
`,h8=l.default.label.withConfig({componentId:"zh__sc-42463ee-1"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,h7=l.default.span.withConfig({componentId:"zh__sc-42463ee-2"})`
  font-size: 12px;
  font-weight: 700;
  color: #494f53;
`,ue=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-42463ee-3"})`
  width: 100%;
  height: 32px;
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:ut}=el.default.file,un=(0,n.observer)(function(){var e;let n,l=a.default.modal.documentView,{analyzedOcrFile:d,selectedDocumentDisplayStatus:o}=l,{ref:r,fire:s}=eP(),c=!l.isOcrSupported||"WAITING_TO_DRAFT"!==o&&"NEED_UPDATE"!==o&&"NEED_MATCHING"!==o;if((0,i.useEffect)(()=>{null!==d&&s()},[d,s]),c||null===d)return null;let f=-1===(n=(e=d.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(ui,{ref:r,children:[(0,t.jsxs)(ul,{children:[(0,t.jsxs)(ua,{children:[(0,t.jsx)(ei.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(ud,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{})]})]}),(0,t.jsxs)(uo,{children:[(0,t.jsxs)(ur,{children:[(0,t.jsx)(ei.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(us,{children:(0,t.jsxs)(uc,{children:[(0,t.jsxs)(uf,{children:[(0,t.jsx)(uh,{children:ut.IMAGE.some(e=>e===f)?(0,t.jsx)(ei.default.Photo,{size:17,color:"#FA8E43"}):ut.AUDIO.some(e=>e===f)?(0,t.jsx)(ei.default.SpeechToText,{size:17,color:"#A855F7"}):ut.DOCUMENT.some(e=>e===f)?(0,t.jsx)(ei.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(uu,{children:(0,t.jsx)(up,{children:d.name})})]}),(0,t.jsx)(ux,{children:"추출 완료"})]},`${d.name}-${d.size}-${d.lastModified}`)})]})]})}),ui=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-0"})`
  overflow: hidden;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
  max-height: 100%;
  padding: 24px 40px;
  border-radius: 16px;

  background: #fff;
`,ul=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,ua=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,ud=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  padding-left: 26px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,uo=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,ur=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,us=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-6"})`
  overflow-y: auto;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  row-gap: 12px;
  place-content: flex-start space-between;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
  max-height: 116px;
  padding-right: 4px;
`,uc=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 359px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,uf=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,uh=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,uu=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-10"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,up=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,ux=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-12"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #4f39f6;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #fff;
  letter-spacing: -1px;

  background: #4f39f6;
`,ug=(0,n.observer)(function(){let{analyzedOcrFile:e,isUncreatedMonthlyScheduleDocument:n}=a.default.modal.documentView;return(0,t.jsxs)(um,{children:[(0,t.jsx)(h6,{}),n?(0,t.jsx)(h3,{}):null,null!==e&&(0,t.jsx)(un,{})]})}),um=l.default.div.withConfig({componentId:"zh__sc-b3f3f20d-0"})`
  display: flex;
  flex: 1 0 0;
  flex-flow: column-reverse;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;

  width: 517px;
  padding: 32px 24px;
  border-radius: 16px;

  background: #f9fafb;
`,ub=l.default.div.withConfig({componentId:"zh__sc-80a26ee5-0"})`
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;
  border: 1px solid
    ${({$status:e})=>"done"===e||"current"===e?"#0bb984":"#d9d9d9"};
  border-radius: 999px;

  background: ${({$status:e})=>"done"===e?"#0bb984":"#ffffff"};
`;function uj(e){if(null==e||""===e.trim())return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return"-";let n=String(t.getFullYear()),i=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0"),a=String(t.getHours()).padStart(2,"0"),d=String(t.getMinutes()).padStart(2,"0");return`${n}-${i}-${l} ${a}:${d}`}let u_=(0,n.observer)(function(){let e=a.default.modal.documentView,n=e.isClientMode,i=e.clientContractId,l=(a.default.data.contract.list.data??[]).find(e=>e.id===i)??null,d=n?uj(l?.client.createdAt??l?.createdAt):uj(e.selectedDocument?.createdAt),o=l?.client.name??"-",r=a.default.modal.serviceWorkerDetail.serviceWorker?.name??"-",s=n?`이용자 ${o}님의 기존 이용 내역과 갱신된 요금 정보가 성공적으로 양식에 매핑되었습니다.`:`제공인력 ${r}님의 계약/서류 정보가 현재 양식에 반영되었습니다.`;return(0,t.jsx)(uw,{children:(0,t.jsxs)(uy,{children:[(0,t.jsxs)(uv,{children:[(0,t.jsx)(uC,{children:(0,t.jsxs)(uI,{children:[(0,t.jsx)(ub,{$status:"done",children:(0,t.jsx)(b.Check,{size:12,color:"#ffffff",strokeWidth:3})}),n?"기존 이용자 정보 연동 완료":"제공인력 서류 데이터 반영 완료"]})}),(0,t.jsx)(uz,{children:(0,t.jsx)(uT,{children:`${n?"업로드 일시":"문서 생성 일시"}: ${d}`})})]}),(0,t.jsx)(uE,{children:(0,t.jsx)(uS,{children:s})})]})})}),uw=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-0"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,uy=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  height: 146px;
  padding: 16px 12px;
  border: 1px solid #d8dee7;
  border-radius: 8px;

  background: #fcfdff;
`,uv=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,uC=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-3"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,uI=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
`,uz=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding-left: 24px;
`,uT=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-6"})`
  display: flex;
  flex: 1 0 0;
  gap: 10px;
  align-items: center;
  align-self: stretch;

  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 16px; /* 114.286% */
  color: #45464e;
`,uE=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-7"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding-left: 24px;
`,uS=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-start;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 18px; /* 128.571% */
  color: #45464e;
  text-align: left;
`,uk=(0,n.observer)(function(){let e=a.default.modal.documentView,{selectedTemplate:n}=e,i=e.isClientMode,l=n?.creationMode==="MANUAL",d=null===n?0:e.documents.filter(e=>e.templateId===n.id).length,o=i&&(l||null!==n&&d>=2);return(0,t.jsxs)(uD,{children:[(0,t.jsx)(uA,{children:(0,t.jsx)(u$,{children:n?.name??"계약서 자동 생성"})}),(0,t.jsxs)(uR,{children:[o?(0,t.jsx)(hz,{}):null,null!==e.selectedDocument?(0,t.jsx)(u_,{}):null,(0,t.jsx)(ug,{})]})]})}),uD=l.default.div.withConfig({componentId:"zh__sc-61494f9e-0"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-between;

  width: 541px;
  border-right: 1px solid #e5e7eb;

  background: #fff;
`,uA=l.default.div.withConfig({componentId:"zh__sc-61494f9e-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,u$=l.default.div.withConfig({componentId:"zh__sc-61494f9e-2"})`
  display: flex;
  flex: 1 0 0;
  gap: 10px;
  align-items: center;

  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px; /* 140% */
  color: #0a0a0a;
  letter-spacing: -1px;
`,uR=l.default.div.withConfig({componentId:"zh__sc-61494f9e-3"})`
  overflow-y: auto;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  min-height: 0;
  padding: 16px 12px;
`,uO=function(e){return(0,t.jsxs)(uL,{children:[(0,t.jsx)(uP,{children:"오른쪽에서 년월을 선택하면 실제 제공일 리스트가 채워집니다."}),(0,t.jsx)(o.default.Input.Date,{value:e.value,valueType:"year-month",readOnly:e.disabled,pickerOptions:{hideDate:!0},style:{width:136,height:28,textAlign:"center"},onChange:t=>{e.onChangeYearMonth(t)}}),null!==e.errorMessage?(0,t.jsx)(uN,{children:e.errorMessage}):null]})},uL=l.default.div.withConfig({componentId:"zh__sc-698d13d5-0"})`
  position: absolute;
  z-index: 3;
  top: 14px;
  left: 24px;

  display: inline-flex;
  gap: 16px;
  align-items: center;
  justify-content: center;

  max-width: 600px;
  padding: 16px 24px;
  border: 1px solid #6366f1;
  border-radius: 99px;

  background: #fff;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%);
`,uP=l.default.div.withConfig({componentId:"zh__sc-698d13d5-1"})`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`,uN=l.default.div.withConfig({componentId:"zh__sc-698d13d5-2"})`
  font-size: 12px;
  line-height: 18px;
  color: #dc2626;
`;var uM=e.i(47088),uF=e.i(69477),uB=e.i(68339);function uU({documentName:e,isDeleting:n,onCancel:i,onConfirm:l}){return(0,t.jsx)(uY,{role:"dialog","aria-modal":"true","aria-label":"서류 삭제",onClick:()=>{n||i()},children:(0,t.jsxs)(uW,{onClick:e=>e.stopPropagation(),children:[(0,t.jsx)(uV,{children:"이 서류를 지울까요?"}),(0,t.jsxs)(uH,{children:[e," — 지우면 서류 목록에서 사라져요. 이 서류로 함께 만들어진 서류(예: 예외지급 공문의 후속 서류)도 같이 지워져요. 요청자가 취소했거나 잘못 만든 경우에만 지워 주세요."]}),(0,t.jsxs)(uG,{children:[(0,t.jsx)(o.default.Button.Outlined,{type:"button",disabled:n,onClick:i,children:"취소"}),(0,t.jsx)(uK,{type:"button",disabled:n,onClick:l,children:n?"지우는 중…":"삭제"})]})]})})}let uY=l.default.div.withConfig({componentId:"zh__sc-59c1e782-0"})`
  position: fixed;
  z-index: 1300;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(16 24 40 / 40%);
`,uW=l.default.div.withConfig({componentId:"zh__sc-59c1e782-1"})`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: min(420px, calc(100vw - 32px));
  padding: 24px;
  border-radius: 12px;

  background: #fff;
`,uV=l.default.p.withConfig({componentId:"zh__sc-59c1e782-2"})`
  font-size: 17px;
  font-weight: 700;
  color: #292b36;
`,uH=l.default.p.withConfig({componentId:"zh__sc-59c1e782-3"})`
  font-size: 14px;
  color: #475467;
`,uG=l.default.div.withConfig({componentId:"zh__sc-59c1e782-4"})`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,uK=l.default.button.withConfig({componentId:"zh__sc-59c1e782-5"})`
  height: 40px;
  padding: 0 16px;
  border: none;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 700;
  color: #fff;

  background: #d92d20;

  &:disabled {
    background: #fda29b;
  }
`,uX=e=>{let t=new Date(e);return Number.isNaN(t.getTime())?e:`${t.getMonth()+1}/${t.getDate()} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`},uq=e=>/\.(jpe?g|png|webp|gif|bmp)$/i.test(e.split("?")[0]??""),uQ=e=>"PENDING"===e.checkStatus?{text:"AI 확인 중…",tone:"muted"}:"FAILED"===e.checkStatus?{text:"AI 확인에 실패했어요. 사진을 다시 올려 주세요.",tone:"muted"}:"SKIPPED"===e.checkStatus?uq(e.imageUrl)?{text:"AI 확인 없이 보관만 했어요.",tone:"muted"}:{text:"PDF·HEIC는 개인정보를 가릴 수 없어 AI 확인 없이 보관만 했어요. 사진(JPG·PNG)으로 올리면 확인해요.",tone:"muted"}:e.missingItems.length>0?{text:`비어 있어요: ${e.missingItems.join(" · ")}`,tone:"bad"}:0===e.items.length?{text:"서명·날인·작성일 칸을 찾지 못했어요.",tone:"muted"}:{text:"서명·날인·작성일이 모두 채워져 있어요.",tone:"good"},uJ=function({documentId:e,documentName:n,onClose:l}){let[d,r]=(0,i.useState)(null),[s,c]=(0,i.useState)(null),[f,h]=(0,i.useState)(!1),u=(0,i.useRef)(null);(0,i.useEffect)(()=>{let t=!1;return aC.default.data.documentScan.list(e).then(([e,n])=>{if(!t){if(null!==e)return void c(e.message||"서명본을 불러오지 못했습니다.");r(n)}}),()=>{t=!0}},[e]);let p=async t=>{h(!0);let[n,i]=await aC.default.data.documentScan.upload({documentId:e,file:t});if(h(!1),null!==n)return void a.default.ui.layout.toast.error(n.message||"서명본을 올리지 못했습니다.");r(e=>[i,...e??[]]);let l=uQ(i);"bad"===l.tone?a.default.ui.layout.toast.error(l.text):a.default.ui.layout.toast.success("서명본을 올렸습니다.")},[x,...g]=d??[];return(0,t.jsx)(uZ,{role:"dialog","aria-modal":"true",onClick:l,children:(0,t.jsxs)(u0,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(u1,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(u2,{children:"서명본"}),(0,t.jsx)(u6,{children:n})]}),(0,t.jsx)(o.default.Button.Outlined,{type:"button",onClick:l,children:"닫기"})]}),(0,t.jsx)(u4,{children:"서명·날인한 종이 서류를 사진(또는 PDF)으로 올려 두세요. 점검 때 증빙이 되고, 사진이면 서명·날인·작성일 칸이 비었는지 AI가 바로 확인해요(주민번호·전화번호는 가린 뒤 확인해요)."}),(0,t.jsxs)(u5,{children:[(0,t.jsx)("input",{ref:u,type:"file",accept:"image/*,application/pdf",hidden:!0,onChange:e=>{let t=e.target.files?.[0];e.target.value="",void 0!==t&&p(t)}}),(0,t.jsx)(o.default.Button.Filled.Primary,{type:"button",disabled:f,onClick:()=>u.current?.click(),children:f?"올리고 확인하는 중…":"서명본 올리기"})]}),null!==s?(0,t.jsx)(u3,{children:s}):null===d?(0,t.jsx)(u3,{children:"불러오는 중…"}):void 0===x?(0,t.jsx)(u3,{children:"아직 올린 서명본이 없어요."}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u9,{children:[(0,t.jsx)(u8,{href:x.imageUrl,target:"_blank",rel:"noreferrer",children:uq(x.imageUrl)?(0,t.jsx)(u7,{src:x.imageUrl,alt:"최근 서명본"}):(0,t.jsx)(pe,{children:/\.pdf$/i.test(x.imageUrl.split("?")[0]??"")?"PDF 열기":"파일 열기"})}),(0,t.jsxs)(pt,{children:[(0,t.jsx)(pn,{children:`최근 서명본 \xb7 ${uX(x.createdAt)}${"OCR"===x.source?" (수기 서류 인식)":""}`}),(0,t.jsx)(pl,{$tone:uQ(x).tone,children:uQ(x).text}),x.items.length>0&&(0,t.jsx)(pa,{children:x.items.map(e=>(0,t.jsxs)("li",{children:[(0,t.jsx)(pd,{$filled:e.filled,children:e.filled?"✓":"✕"}),e.label,(0,t.jsx)(po,{children:e.observation})]},`${e.kind}-${e.label}-${e.observation}`))})]})]}),g.length>0&&(0,t.jsxs)(pr,{children:[`이전 서명본 ${g.length}장: `,g.map(e=>(0,t.jsx)("a",{href:e.imageUrl,target:"_blank",rel:"noreferrer",children:uX(e.createdAt)},e.id))]})]})]})})},uZ=l.default.div.withConfig({componentId:"zh__sc-9195fb6b-0"})`
  position: fixed;
  z-index: 1300;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(16 24 40 / 40%);
`,u0=l.default.div.withConfig({componentId:"zh__sc-9195fb6b-1"})`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: min(720px, calc(100vw - 32px));
  max-height: calc(100vh - 64px);
  padding: 24px;
  border-radius: 12px;

  background: #fff;
`,u1=l.default.div.withConfig({componentId:"zh__sc-9195fb6b-2"})`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,u2=l.default.p.withConfig({componentId:"zh__sc-9195fb6b-3"})`
  font-size: 18px;
  font-weight: 700;
  color: #292b36;
`,u6=l.default.p.withConfig({componentId:"zh__sc-9195fb6b-4"})`
  margin-top: 2px;
  font-size: 14px;
  color: #636978;
`,u4=l.default.p.withConfig({componentId:"zh__sc-9195fb6b-5"})`
  padding: 10px 12px;
  border-radius: 8px;

  font-size: 13px;
  color: #475467;

  background: #f2f4f7;
`,u5=l.default.div.withConfig({componentId:"zh__sc-9195fb6b-6"})`
  display: flex;
`,u3=l.default.p.withConfig({componentId:"zh__sc-9195fb6b-7"})`
  font-size: 14px;
  color: #98a2b3;
`,u9=l.default.div.withConfig({componentId:"zh__sc-9195fb6b-8"})`
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  gap: 16px;
`,u8=l.default.a.withConfig({componentId:"zh__sc-9195fb6b-9"})`
  display: block;
`,u7=l.default.img.withConfig({componentId:"zh__sc-9195fb6b-10"})`
  width: 200px;
  max-height: 280px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  object-fit: contain;
  background: #f9fafb;
`,pe=l.default.span.withConfig({componentId:"zh__sc-9195fb6b-11"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 140px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: #4f39f6;

  background: #f9fafb;
`,pt=l.default.div.withConfig({componentId:"zh__sc-9195fb6b-12"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,pn=l.default.p.withConfig({componentId:"zh__sc-9195fb6b-13"})`
  font-size: 13px;
  color: #636978;
`,pi={bad:"#b42318",good:"#027a48",muted:"#636978"},pl=l.default.p.withConfig({componentId:"zh__sc-9195fb6b-14"})`
  font-size: 15px;
  font-weight: 700;
  color: ${({$tone:e})=>pi[e]};
`,pa=l.default.ul.withConfig({componentId:"zh__sc-9195fb6b-15"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  padding: 0;

  font-size: 13px;
  color: #292b36;
  list-style: none;
`,pd=l.default.span.withConfig({componentId:"zh__sc-9195fb6b-16"})`
  margin-right: 6px;
  font-weight: 700;
  color: ${({$filled:e})=>e?"#027a48":"#b42318"};
`,po=l.default.span.withConfig({componentId:"zh__sc-9195fb6b-17"})`
  margin-left: 6px;
  color: #98a2b3;
`,pr=l.default.p.withConfig({componentId:"zh__sc-9195fb6b-18"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  font-size: 13px;
  color: #636978;
`,ps=(0,n.observer)(function({isSaving:e,setIsSaving:n,resetLocalStates:l,onRequiredValidation:d}){let{close:o,selectedDocument:r}=a.default.modal.documentView,s=a.default.modal.documentView,[c,f]=(0,i.useState)(!1),[h,u]=(0,i.useState)(!1),[p,x]=(0,i.useState)(!1),[g,m]=(0,i.useState)(!1),[j,_]=(0,i.useState)(!1),w=s.isClientMode&&null!==r?r.id:null,y=s.selectedTemplateImagePaths.filter(e=>""!==e),v=(null!==s.selectedDocumentId||"NEED_UPDATE"!==s.selectedDocumentDisplayStatus)&&null!==s.selectedTemplateId&&y.length>0,C=s.hasSelectedFieldChanges,I=null===s.selectedDocumentDisplayStatus?{label:"미리보기",color:"lightBlue"}:sd(s.selectedDocumentDisplayStatus).badge,z=s.isClientMode&&null===r||null!==r&&(0,so.shouldSaveDocumentBeforePrint)(r.displayStatus),T=null!==r&&("NEED_UPDATE"===r.displayStatus||"NEED_MATCHING"===r.displayStatus||"WAITING_TO_DRAFT"===r.displayStatus||"LINKED_COMPLETED"===r.displayStatus||"WAITING_TO_PRINT"===r.displayStatus&&"NEED_DETAIL"===r.processType),E=()=>{let e=s.selectedTemplateId;if(null===e)return null;let t=s.selectedTemplateImagePaths.filter(e=>""!==e).map((t,n)=>({id:`${e}-${n+1}`,templateId:e,imagePath:t,page:n+1}));return 0===t.length?null:{pages:t,fields:s.selectedTemplateFields}},S=async()=>{if(v&&!h&&!e&&(!z||d("print"))){u(!0);try{if(z){n(!0);try{let e=await s.saveSelectedFieldChanges();if(null===e)return}catch(e){hr(e);return}finally{n(!1)}await new Promise(e=>{window.setTimeout(e,600)})}let e=E();if(null===e)return;let t=s.selectedTemplate?.name?.trim()??"",i=""===t?"Print":t,l=""===s.printTitleSuffix?i:`${i} - ${s.printTitleSuffix}`;await (0,uB.renderDocumentPrintView)({...e,printTitle:l,retryOnImageLoadFailure:{refresh:async()=>{await s.refetchTemplateListForPrint()},rebuildPayload:async()=>{let e=E();return null===e?null:{...e,printTitle:l}}},onImageLoadFailure:e=>{a.default.ui.layout.toast.error(`서류 이미지 ${e}개 로딩에 실패하여 출력을 중단했습니다.`)}})}finally{u(!1)}}},k=()=>{l(),o()},D=async()=>{if(!e&&d("save")){n(!0);try{await s.saveSelectedFieldChanges()}catch(e){hr(e)}finally{n(!1)}}},A=async()=>{if(!e){n(!0);try{await s.patchSelectedDocumentStatusPrevious()}catch(e){hr(e,"확인 취소에 실패했습니다. 잠시 후 다시 시도해 주세요.")}finally{n(!1)}}},$=async()=>{if(!e){if(!d("close"))return void f(!1);n(!0);try{let e=await s.saveSelectedFieldChanges();if(null===e)return;f(!1),k()}catch(e){hr(e)}finally{n(!1)}}};return(0,t.jsxs)(pc,{children:[(0,t.jsxs)(pf,{children:[(0,t.jsxs)(ph,{children:[(0,t.jsx)(pu,{children:"서류 상태"}),(0,t.jsxs)(pp,{$color:I.color,children:[I.icon,I.label]})]}),(0,t.jsx)(px,{}),(0,t.jsxs)(pg,{children:[(0,t.jsxs)(pm,{type:"button",disabled:!v||h||e,onClick:()=>{S()},children:[(0,t.jsx)(uM.Printer,{size:16}),"출력하기"]}),r?.displayStatus==="COMPLETED"?(0,t.jsxs)(pm,{$processing:e,onClick:()=>void A(),children:[(0,t.jsx)(ei.default.Undo,{size:14}),"확인 취소"]}):s.isClientMode&&null===r||T?(0,t.jsxs)(pm,{$processing:e,onClick:()=>void D(),children:[e?(0,t.jsx)(uF.RotateCw,{size:16}):(0,t.jsx)(b.Check,{size:16}),e?"저장중":"최종확인 및 저장"]}):null,null!==w&&(0,t.jsx)(pb,{type:"button",onClick:()=>x(!0),children:"서명본"}),s.canDeleteSelectedDocument&&(0,t.jsx)(pb,{type:"button",onClick:()=>m(!0),children:"삭제"}),(0,t.jsxs)(pb,{type:"button",onClick:()=>{C?f(!0):k()},children:[(0,t.jsx)(en.X,{size:16}),"닫기"]})]})]}),g&&(0,t.jsx)(uU,{documentName:s.selectedTemplate?.name??"서류",isDeleting:j,onCancel:()=>m(!1),onConfirm:()=>{(async()=>{_(!0);let[e]=await s.deleteSelectedDocument();if(_(!1),null!==e)return hr(e,"서류를 지우지 못했습니다.");m(!1),l(),a.default.ui.layout.toast.success("서류를 지웠습니다.")})()}}),p&&null!==w&&(0,t.jsx)(uJ,{documentId:w,documentName:s.selectedTemplate?.name??"서류",onClose:()=>x(!1)}),(0,t.jsx)(s7,{isOpen:c,actionType:"exit",isProcessing:e,onClickSecondary:()=>{f(!1),k()},onClickPrimary:()=>{$()}})]})}),pc=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 12px 24px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,pf=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
`,ph=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,pu=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-3"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #737380;
`,pp=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-4"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px 8px;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #fff;

  background: ${({$color:e})=>{switch(e){case"lightBlue":return"#9FBFFF";case"blue":return"#2264E8";case"orange":return"#FF6900";case"black":return"#0A0A0A";default:return"#77798B"}}};
`,px=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-5"})`
  width: 1px;
  height: 24px;
  background: #d1d1d9;
`,pg=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-6"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,pm=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-fa5a83d4-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`,pb=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-fa5a83d4-8"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #4f39f6;
`,pj=(0,n.observer)(function(){let e=a.default.modal.documentView,n=(0,i.useRef)(!1),l=e.selectedDocument?.displayStatus!=="COMPLETED",o=e.isServiceWorkerMode&&null===e.selectedDocumentId&&"NEED_UPDATE"===e.selectedDocumentDisplayStatus,r=e.isServiceWorkerMode&&(0,s9.isSalaryProvisionMonthlyScheduleDocument)(e.selectedTemplate?.name??null),s=r?e.selectedOcrFile??e.analyzedOcrFile:null,c=(0,i.useMemo)(()=>r?null!==s?URL.createObjectURL(s):e.monthlyScheduleComparisonResult?.imageUrl??e.selectedDocument?.imageUrl??null:null,[r,e.monthlyScheduleComparisonResult?.imageUrl,e.selectedDocument?.imageUrl,s]),f=e.autocompleteServiceEndReportUserChangeLevelUIState,h=e.autocompleteServiceEndReportStaffOpinionUIState,u=e.autocompleteCaseManagementRecordCaseContentUIState,p=e.shouldShowRetroactiveActualServiceDatePanel,x=e.retroactiveActualServiceDatePanelYearMonth,g=e.isRetroactiveActualServiceDatePanelLoading,m=e.retroactiveActualServiceDatePanelErrorMessage,[b,j]=(0,i.useState)(1),[_,w]=(0,i.useState)(1),[y,v]=(0,i.useState)(null),[C,I]=(0,i.useState)(!1),[z,T]=(0,i.useState)([]),[E,S]=(0,i.useState)(null),[k,D]=(0,i.useState)(null),[A,$]=(0,i.useState)(!1),[R,O]=(0,i.useState)(null),[L,P]=(0,i.useState)(""),[N,M]=(0,i.useState)(""),[F,B]=(0,i.useState)(""),[U,Y]=(0,i.useState)({}),[W,V]=(0,i.useState)(0),[H,G]=(0,i.useState)(null),[K,X]=(0,i.useState)(!1),[q,Q]=(0,i.useState)(!1),J=(0,i.useRef)(null),Z=(0,i.useRef)(null),ee=(0,i.useRef)([]),et=(0,i.useRef)(null),en=(0,i.useRef)(null),el=()=>{j(1),w(1),v(null),I(!1),T([])},ea=t=>{let n=function(e,t){let n=e.filter(e=>("radio"===e.uiProps.fieldType||"text"===e.uiProps.fieldType||"textarea"===e.uiProps.fieldType)&&e.uiProps.triggerKeys?.includes(s3.default.SOURCE_REQUIRED_VALIDATION)===!0);if(!("NEED_UPDATE"===t&&n.some(e=>e.uiProps.triggerKeys?.includes(s3.default.SOURCE_REQUIRED_VALIDATION_ON_NEED_UPDATE)===!0)||"WAITING_TO_PRINT"===t&&n.some(e=>e.uiProps.triggerKeys?.includes(s3.default.SOURCE_REQUIRED_VALIDATION_ON_WAITING_TO_PRINT)===!0)))return{invalidFieldIds:[],missingItems:[]};let i=new Map;return n.forEach(e=>{let t=s8(e);i.set(t,[...i.get(t)??[],e])}),Array.from(i.values()).reduce((e,t)=>{if(t.some(e=>"radio"===e.uiProps.fieldType?e.value?.trim().toLowerCase()==="true":null!==e.value&&""!==e.value.trim()))return e;let n=t[0];if(void 0===n)return e;let i=s8(n),l=t.find(e=>e.uiProps.label?.group?.name?.trim()!=="")?.uiProps.label?.group?.name.trim()??t.find(e=>e.uiProps.label?.field.name.trim()!=="")?.uiProps.label?.field.name.trim()??t[0]?.fieldKey??i;return{invalidFieldIds:[...e.invalidFieldIds,...t.map(e=>e.id)],missingItems:[...e.missingItems,{key:i,label:l}]}},{invalidFieldIds:[],missingItems:[]})}(e.selectedTemplateFields,e.selectedDocumentDisplayStatus);return 0===n.missingItems.length||(S(n),D(t),!1)},ed=e.selectedTemplateImagePaths,eo=Math.max(ed?.length??0,1),er=Math.min(b,eo);(0,i.useEffect)(()=>{n.current=!1},[e.selectedTemplateId]);let es=e.selectedDocument?.displayStatus==="NEED_MATCHING",ec=e.selectedOcrFile??e.analyzedOcrFile,ef=(0,i.useMemo)(()=>es&&null!==ec?URL.createObjectURL(ec):null,[ec,es]);(0,i.useEffect)(()=>()=>{null!==ef&&URL.revokeObjectURL(ef)},[ef]),(0,i.useEffect)(()=>()=>{null!==s&&null!==c&&URL.revokeObjectURL(c)},[c,s]);let eh=(null===ef?.75:.64)*_,eu=(0,i.useCallback)(e=>{if(e.length<2)return e;let t=1>=Math.max(...e.flatMap(e=>e.vertices).flatMap(e=>[e.x,e.y])),n=H?.width??0,i=H?.height??0,l=n>0&&i>0;return[...e.map(e=>{let a,d,o,r;return{box:e,position:(a=e.vertices.map(e=>e.x),d=e.vertices.map(e=>e.y),o=Math.min(...a),r=Math.min(...d),{left:t||!l?o:o/n,top:t||!l?r:r/i})}})].sort((e,t)=>e.position.top-t.position.top).reduce((e,t)=>{let n=e.at(-1);if(void 0===n)return e.push([t]),e;let i=n[0]?.position.top;return void 0===i||Math.abs(t.position.top-i)>.01?e.push([t]):n.push(t),e},[]).flatMap(e=>e.sort((e,t)=>e.position.left!==t.position.left?e.position.left-t.position.left:e.box.fieldRuntimeKey.localeCompare(t.box.fieldRuntimeKey)).map(({box:e})=>e))},[H]);(0,i.useEffect)(()=>{let e=Z.current;if(null===e)return;let t=e=>{(e.ctrlKey||e.metaKey)&&(e.preventDefault(),w(t=>Math.min(Math.max(t+(e.deltaY<0?.1:-.1),.5),1.5)))};return e.addEventListener("wheel",t,{passive:!1}),()=>{e.removeEventListener("wheel",t)}},[e.status]);let ep=(0,i.useCallback)(e=>{if(0===e.length)return null;let t=e.map(e=>e.x),n=e.map(e=>e.y),i=Math.min(...t),l=Math.max(...t),a=Math.min(...n),d=Math.max(...n);if(!Number.isFinite(i)||!Number.isFinite(l)||!Number.isFinite(a)||!Number.isFinite(d))return null;let o=Math.max(l,d),r=o<=1?1:H?.width??0,s=o<=1?1:H?.height??0;if(r<=0||s<=0)return null;let c=Math.max(i,0)/r*100,f=Math.max(a,0)/s*100,h=(l-i)/r*100,u=(d-a)/s*100;return h<=0||u<=0?null:{left:`${Math.min(c,100)}%`,top:`${Math.min(f,100)}%`,width:`${Math.min(h,100)}%`,height:`${Math.min(u,100)}%`}},[H]),ex=e.isLinkedCompletedMonthlyScheduleDocument?e.monthlyScheduleComparisonResult:null,eg=(0,i.useMemo)(()=>{let e=ex?.unmatchedFieldBoundingBoxes;return void 0===e?null:[...e].sort((e,t)=>e.day!==t.day?e.day-t.day:e.fieldKey.localeCompare(t.fieldKey))},[ex?.unmatchedFieldBoundingBoxes]),em=null===eg?0:Math.min(Math.max(W,0),Math.max(eg.length-1,0)),eb=eg?.[em]??null,ej=ep(eb?.boundingBoxes?.flatMap(e=>{let t=e.normalizedVertices??[];return t.length>0?t:e.vertices??[]})??[]);(0,i.useLayoutEffect)(()=>{let e=et.current,t=en.current;if(null===e||null===t||null===ej)return;let n=()=>{let n=e.getBoundingClientRect(),i=t.getBoundingClientRect(),l=n.left+Number.parseFloat(ej.left)/100*n.width;X(n.top+Number.parseFloat(ej.top)/100*n.height+Number.parseFloat(ej.height)/100*n.height+i.height>n.bottom),Q(l+i.width>n.right)};n();let i=new ResizeObserver(n);return i.observe(e),i.observe(t),()=>{i.disconnect()}},[ej]);let e_=(0,i.useCallback)((e,t="instant")=>{let n=Z.current,i=ee.current[e-1];if(!n||!i)return;let l=Math.max(i.offsetTop-n.offsetTop-12,0);n.scrollTo({top:l,behavior:t})},[]),ew=t=>(-1!==t||!1!==e.canMovePrevTemplate)&&(1!==t||!1!==e.canMoveNextTemplate)&&(-1===t?e.movePrevTemplate():e.moveNextTemplate(),j(1),w(1),v(null),I(!1),T([]),Z.current?.scrollTo({top:0,behavior:"auto"}),!0),ey=e.hasSelectedFieldChanges,ev=async()=>ey?(O(-1),$(!0),!1):ew(-1),eC=async()=>ey?(O(1),$(!0),!1):ew(1),eI=async()=>{if(!C&&null!==R){if(!ea({type:"move",direction:R}))return void $(!1);I(!0);try{let t=await e.saveSelectedFieldChanges();if(null===t)return;ew(R),O(null),$(!1)}catch(e){hr(e)}finally{I(!1)}}};(0,i.useEffect)(()=>{let t=t=>{"ready"===e.status&&!1!==e.hasSelectedFieldChanges&&t.preventDefault()};return window.addEventListener("beforeunload",t),()=>{window.removeEventListener("beforeunload",t)}},[e.hasSelectedFieldChanges,e.status]),(0,i.useEffect)(()=>"ready"!==e.status?void e.setToastContainer(null):(e.setToastContainer(J.current),()=>{e.setToastContainer(null)}),[e,e.status]),(0,i.useEffect)(()=>{"ready"===e.status&&!0===p&&e.ensureRetroactiveActualServiceDatePanelState()},[e,e.status,p]);let ez=()=>{if(null===y)return;let e=y.replace(/[^\d]/g,"");if(""===e)return void v(null);let t=Number(e);if(!Number.isFinite(t))return void v(null);let n=Math.min(Math.max(t,1),eo);j(n),v(null),e_(n)};return"ready"!==e.status?null:(0,t.jsx)(d.default,{children:(0,t.jsxs)(p_,{ref:J,children:[(0,t.jsx)(uk,{}),(0,t.jsxs)(pw,{children:[(0,t.jsx)(ps,{isSaving:C,setIsSaving:I,resetLocalStates:el,onRequiredValidation:ea}),(0,t.jsx)(sq,{isOpen:null!==E,missingItems:E?.missingItems??[],isProcessing:C,onClickSecondary:()=>{if(S(null),D(null),null!==k&&"print"!==k){if("close"===k||"save"===k){el(),e.close();return}e.discardSelectedFieldChanges(),ew(k.direction)}},onClickPrimary:()=>{null!==E&&(T(E.invalidFieldIds),S(null),D(null))}}),(0,t.jsxs)(py,{children:[p?(0,t.jsx)(uO,{value:x??"",disabled:g,errorMessage:m,onChangeYearMonth:t=>{e.applyRetroactiveActualServiceDatePanelYearMonth(t)}}):null,(0,t.jsx)(pZ,{type:"button","aria-label":"이전 문서",disabled:e.isTemplateNavigationLocked||!1===e.canMovePrevTemplate,onClick:()=>void ev(),children:(0,t.jsx)(sG.ChevronLeft,{size:24})}),(0,t.jsx)(pv,{ref:Z,onScroll:()=>{let e=Z.current;if(!e)return;let t=e.scrollTop,n=1,i=1/0;ee.current.forEach((l,a)=>{if(!l)return;let d=Math.abs(l.offsetTop-e.offsetTop-t);d<i&&(i=d,n=a+1)}),n!==b&&j(n)},children:null!==c?(0,t.jsxs)(pE,{$active:!0,$scale:eh,children:[(0,t.jsx)(pK,{$scale:eh,children:(0,t.jsxs)(pQ,{ref:et,children:[(0,t.jsx)(pq,{src:c,alt:"급여 제공 월별 일정표 원본",onLoad:e=>{G({width:e.currentTarget.naturalWidth,height:e.currentTarget.naturalHeight})}}),null!==eb?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(pO,{children:null!==ej?(0,t.jsx)(pL,{style:ej,type:"button",onClick:()=>{},children:(0,t.jsx)(pP,{children:"확인 필요"})}):null})}):null]})}),null!==eb?(0,t.jsxs)(pJ,{ref:en,$centered:null===ej,style:null===ej?void 0:{left:q?void 0:ej.left,right:q?`calc(100% - (${ej.left} + ${ej.width}))`:void 0,top:K?ej.top:`calc(${ej.top} + ${ej.height})`,transform:K?"translateY(-100%)":void 0},children:[(0,t.jsxs)(pM,{children:[(0,t.jsx)(pF,{children:`정보 불일치  \xb7  ${em+1} / ${eg?.length??0}`}),(0,t.jsx)(pB,{children:`${eb.day}일 제공 일정 비교`}),(0,t.jsx)(pU,{children:eb.reasons.join("\n")})]}),(0,t.jsxs)(pY,{children:[(0,t.jsx)(pW,{$variant:"manual",children:"수기 작성 서류"}),(0,t.jsx)(pV,{children:""===eb.ocrValue?"-":eb.ocrValue})]}),(0,t.jsxs)(pY,{children:[(0,t.jsx)(pW,{$variant:"voucher",children:"실제 제공 내역"}),(0,t.jsx)(pV,{children:""===eb.actualValue?"-":eb.actualValue})]}),(0,t.jsxs)(pH,{children:[(0,t.jsxs)(pG,{type:"button",disabled:em<=0,onClick:()=>{V(Math.max(em-1,0))},children:[(0,t.jsx)(sU,{sx:{fontSize:16}}),"이전"]}),(0,t.jsxs)(pG,{type:"button",disabled:em>=(eg?.length??0)-1,onClick:()=>{V(Math.min(em+1,Math.max((eg?.length??1)-1,0)))},children:["다음",(0,t.jsx)(aK.default,{sx:{fontSize:16}})]})]})]}):null]}):o?(0,t.jsxs)(pC,{children:[(0,t.jsx)(ei.default.Contract,{size:24,color:"#494f53"}),(0,t.jsxs)(pI,{children:[(0,t.jsx)(pz,{children:`업로드 된 수기 [${e.selectedTemplate?.name??"서류"}]가 없습니다.`}),(0,t.jsx)(pT,{children:"왼쪽 업로드 필드에서 서류를 업로드해주세요."})]})]}):Array.from({length:eo},(i,a)=>{let d,o,r=a+1,s=e.getSelectedTemplateFieldsByPage(r),c=eu(e.getOcrMismatchBoundingBoxesByPage(r)),p=Math.min(Math.max(U[r]??0,0),Math.max(c.length-1,0)),x=c[p]??null,g=null===x?null:ep(x.vertices),m=x?.fieldRuntimeKey.split("::")[1]??null,b=null===m?null:s.find(e=>e.fieldKey===m)?.uiProps.label?.field.name??null;return(0,t.jsxs)(pS,{children:[null!==ef&&(0,t.jsxs)(pk,{children:[(0,t.jsx)(pA,{$variant:"manual",children:"수기서류 원본 · 비교 근거 / 수정 불가"}),(0,t.jsxs)(pD,{$scale:eh,children:[(0,t.jsxs)(p$,{$scale:eh,children:[(0,t.jsx)(pR,{src:ef,alt:"대조 이미지",onLoad:e=>{G({width:e.currentTarget.naturalWidth,height:e.currentTarget.naturalHeight})}}),(0,t.jsx)(pO,{children:c.map((e,n)=>{let i=ep(e.vertices);if(null===i)return null;let l=e.vertices.map(e=>`${e.x}:${e.y}`).join("|");return(0,t.jsx)(pL,{style:i,type:"button",onClick:()=>{Y(e=>({...e,[r]:n}))},children:p===n?(0,t.jsx)(pP,{children:"확인 필요"}):null},`ocr-mismatch-${r}-${e.fieldRuntimeKey}-${l}`)})})]}),null!==x&&null!==g&&(0,t.jsxs)(pN,{style:{left:g.left,top:`calc(${g.top} + ${g.height})`},children:[(0,t.jsxs)(pM,{children:[(0,t.jsx)(pF,{children:`정보 불일치  \xb7  ${p+1} / ${c.length}`}),(0,t.jsxs)(pB,{children:[b??m??"필드 값"," ","비교"]}),(0,t.jsx)(pU,{children:"수기 서류 인식값과 전자 바우처 엑셀 기반 값이 다릅니다."})]}),(0,t.jsxs)(pY,{children:[(0,t.jsx)(pW,{$variant:"manual",children:"수기 작성 서류"}),(0,t.jsx)(pV,{children:""===x.manualValue?"-":x.manualValue})]}),(0,t.jsxs)(pY,{children:[(0,t.jsx)(pW,{$variant:"voucher",children:"전산 데이터 서류"}),(0,t.jsx)(pV,{children:""===x.electronicValue?"-":x.electronicValue})]}),(0,t.jsxs)(pH,{children:[(0,t.jsxs)(pG,{type:"button",disabled:p<=0,onClick:()=>{Y(e=>({...e,[r]:Math.max(p-1,0)}))},children:[(0,t.jsx)(sU,{sx:{fontSize:16}}),"이전"]}),(0,t.jsxs)(pG,{type:"button",disabled:p>=c.length-1,onClick:()=>{Y(e=>({...e,[r]:Math.min(p+1,c.length-1)}))},children:["다음",(0,t.jsx)(aK.default,{sx:{fontSize:16}})]})]})]})]})]}),(0,t.jsxs)(pk,{children:[null!==ef&&(0,t.jsx)(pA,{$variant:"voucher",children:"전자바우처 엑셀 기반 · 비교 근거 / 수정 불가"}),(0,t.jsx)(pE,{$active:!0,$scale:eh,ref:e=>{ee.current[a]=e},children:(0,t.jsx)(pK,{$scale:eh,children:null===(o="string"==typeof(d=ed?.[a])?""===d?null:d:null)?(0,t.jsx)(pX,{}):(0,t.jsx)(sX.default,{imagePath:o,onTemplateImageLoadError:()=>{n.current||(n.current=!0,e.refetchTemplateListForPreview())},fields:s,readOnly:!l,isFieldValidationError:e=>z.includes(e.id),onAssistTriggerClick:({triggerKey:t,field:n})=>{if(t===s3.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON){P(e.getAutocompleteServiceEndReportUserChangeLevelTargetValue()),e.openAutocompleteServiceEndReportUserChangeLevelDrawer(n);return}if(t===s3.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON){M(""),e.openAutocompleteServiceEndReportStaffOpinionDrawer(n);return}if(t===s3.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON){B(e.getAutocompleteCaseManagementRecordCaseContentTargetValue()),e.openAutocompleteCaseManagementRecordCaseContentDrawer(n);return}t===s3.default.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL?e.selectAllMealTypeForSelectedDocument("GENERAL"):t===s3.default.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL?e.selectAllMealTypeForSelectedDocument("THERAPEUTIC"):t===s3.default.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL&&e.selectAllMealTypeForSelectedDocument("TEXTURE_MODIFIED")},isAssistButtonDisabled:({triggerKey:e})=>e===s3.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON?!l||!0===f.isDrawerOpen:e===s3.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON?!l||!0===h.isDrawerOpen:e===s3.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON?!l||!0===u.isDrawerOpen:void 0,resolveAssistButtonLabel:({triggerKey:t})=>t===s3.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON?e.autocompleteServiceEndReportUserChangeLevelButtonLabel:t===s3.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON?e.autocompleteServiceEndReportStaffOpinionButtonLabel:t===s3.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON?e.autocompleteCaseManagementRecordCaseContentButtonLabel:t===s3.default.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL?"일반식 전체":t===s3.default.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL?"치료식 전체":t===s3.default.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL?"저작 및 연하 도움식 전체":void 0,resolveAssistButtonChecked:({triggerKey:t})=>t===s3.default.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL?e.isGeneralMealTypeAllSelected:t===s3.default.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL?e.isTherapeuticMealTypeAllSelected:t===s3.default.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL?e.isTextureModifiedMealTypeAllSelected:void 0,isFieldEditable:t=>e.isSelectedFieldEditable(t),isFieldAutoFilled:t=>e.isSelectedFieldAutoFilled(t),selectOptionsCacheKey:e.selectedDocumentId??`template:${e.selectedTemplateId??""}`,onLoadSelectOptions:t=>e.getSelectFieldCandidates(t),onChangeField:(t,n,i)=>{if("radio"===t.uiProps.fieldType){T(n=>n.filter(n=>{let i=e.selectedTemplateFields.find(e=>e.id===n),l=i?.uiProps.fieldType==="radio"?i:null;return(null!==l&&"groupKey"in l.uiProps?l.uiProps.groupKey:null)!==("groupKey"in t.uiProps?t.uiProps.groupKey:null)})),"true"===n&&e.toggleSelectedRadioGroup(t);return}T(e=>e.includes(t.id)?e.filter(e=>e!==t.id):e),e.updateSelectedFieldValue({page:t.page,fieldKey:t.fieldKey,value:n,selectedId:i})}})})})]})]},`screen-page-${r}`)})}),(0,t.jsx)(pZ,{type:"button","aria-label":"다음 문서",disabled:e.isTemplateNavigationLocked||!1===e.canMoveNextTemplate,onClick:()=>void eC(),$right:!0,children:(0,t.jsx)(sK.ChevronRight,{size:24})}),(0,t.jsx)(p0,{children:(0,t.jsxs)(p1,{children:[(0,t.jsxs)(p2,{type:"button",disabled:1===er,onClick:()=>{let e=Math.max(er-1,1);j(e),v(null),e_(e)},children:[(0,t.jsx)(sH,{size:16,color:1===er?"#9ca3af":"#0a0a0a"}),(0,t.jsx)(p6,{$muted:1===er,children:"이전"})]}),(0,t.jsxs)(p4,{children:[(0,t.jsx)(p5,{children:(0,t.jsx)(p3,{type:"text",inputMode:"numeric","aria-label":"페이지 번호 입력",value:y??String(er),onFocus:()=>{v(String(er))},onChange:e=>{v(e.target.value)},onBlur:ez,onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),ez(),e.currentTarget.blur())}})}),(0,t.jsx)(p5,{children:(0,t.jsx)(p8,{children:"/"})}),(0,t.jsx)(p5,{children:(0,t.jsx)(p7,{children:eo})})]}),(0,t.jsxs)(p2,{type:"button",disabled:er===eo,onClick:()=>{let e=Math.min(er+1,eo);j(e),v(null),e_(e)},children:[(0,t.jsx)(p6,{$muted:er===eo,children:"다음"}),(0,t.jsx)(sW,{size:16,color:er===eo?"#9ca3af":"#0a0a0a"})]})]})}),!0===f.isDrawerOpen?(0,t.jsx)(hd,{value:L,onChange:P,onClose:()=>e.closeAutocompleteServiceEndReportUserChangeLevelDrawer(),onApply:()=>e.applyAutocompleteServiceEndReportUserChangeLevelResult(L)}):null,!0===h.isDrawerOpen?(0,t.jsx)(ha,{value:N,autoFilledReferenceValue:e.autocompleteServiceEndReportStaffOpinionAutoFilledReferenceValue,keywords:e.autocompleteServiceEndReportStaffOpinionKeywords,isKeywordListLoading:e.isAutocompleteServiceEndReportStaffOpinionKeywordListLoading,isKeywordCreating:e.isAutocompleteServiceEndReportStaffOpinionKeywordCreating,isGenerating:e.isAutocompleteServiceEndReportStaffOpinionGenerating,onAddKeyword:t=>e.createAutocompleteServiceEndReportStaffOpinionKeyword(t),onGenerate:t=>e.generateAutocompleteServiceEndReportStaffOpinionDraft(t),onChange:M,onClose:()=>e.closeAutocompleteServiceEndReportStaffOpinionDrawer(),onApply:()=>e.applyAutocompleteServiceEndReportStaffOpinionResult(N)}):null,!0===u.isDrawerOpen?(0,t.jsx)(hl,{value:F,onChange:B,onClose:()=>e.closeAutocompleteCaseManagementRecordCaseContentDrawer(),onApply:()=>e.applyAutocompleteCaseManagementRecordCaseContentResult(F)}):null]}),(0,t.jsx)(s7,{isOpen:A,actionType:"move",isProcessing:C,onClickSecondary:()=>{O(null),$(!1),null!==R&&(e.discardSelectedFieldChanges(),ew(R))},onClickPrimary:()=>{eI()}})]})]})})}),p_=l.default.div.withConfig({componentId:"zh__sc-7a537607-0"})`
  position: relative;

  overflow: hidden;
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;

  /* 1920×1080 기준 크기. 노트북(1440·1366px 등)에서는 화면 안으로 줄여서
     [최종확인 및 저장] 같은 툴바 버튼이 가로 스크롤 밖으로 밀려나지 않게 한다. */
  width: min(1712px, calc(100vw - 32px));
  min-width: 1100px;
  border-radius: 8px;
`,pw=l.default.div.withConfig({componentId:"zh__sc-7a537607-1"})`
  position: relative;

  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  min-width: 0;
  height: min(989px, calc(100vh - 32px));
  min-height: 640px;
`,py=l.default.div.withConfig({componentId:"zh__sc-7a537607-2"})`
  position: relative;

  display: flex;
  flex: 1 0 0;
  align-self: stretch;

  min-height: 0;
`,pv=l.default.div.withConfig({componentId:"zh__sc-7a537607-3"})`
  overflow: auto;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;

  /* 원본 비교(두 장 나란히)가 폭보다 넓으면 왼쪽이 잘리지 않고 가로 스크롤되게 safe */
  align-items: safe center;
  align-self: stretch;

  min-height: 0;
  padding: 12px 24px 64px;
  border-bottom: 1px solid #e5e7eb;

  background: #f9fafb;
`,pC=l.default.div.withConfig({componentId:"zh__sc-7a537607-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  min-width: 0;
`,pI=l.default.div.withConfig({componentId:"zh__sc-7a537607-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  width: 100%;

  color: #494f53;
  text-align: center;
`,pz=l.default.p.withConfig({componentId:"zh__sc-7a537607-6"})`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`,pT=l.default.p.withConfig({componentId:"zh__sc-7a537607-7"})`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`,pE=l.default.div.withConfig({componentId:"zh__sc-7a537607-8"})`
  position: relative;

  display: ${({$active:e})=>e?"block":"none"};

  width: calc(210mm * ${({$scale:e})=>e});
  height: calc(297mm * ${({$scale:e})=>e});

  box-shadow: 0 0 8px 0 rgb(0 0 0 / 10%);
`,pS=l.default.div.withConfig({componentId:"zh__sc-7a537607-9"})`
  display: flex;
  gap: 10px;
  align-items: flex-start;
`,pk=l.default.div.withConfig({componentId:"zh__sc-7a537607-10"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`,pD=l.default.div.withConfig({componentId:"zh__sc-7a537607-11"})`
  position: relative;
  width: calc(210mm * ${({$scale:e})=>e});
  height: calc(297mm * ${({$scale:e})=>e});
`,pA=l.default.div.withConfig({componentId:"zh__sc-7a537607-12"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 5px 14px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: ${({$variant:e})=>"voucher"===e?"#4030ed":"#ad570d"};

  background: ${({$variant:e})=>"voucher"===e?"#f2f0ff":"#fff7eb"};
`,p$=l.default.div.withConfig({componentId:"zh__sc-7a537607-13"})`
  position: relative;

  overflow: hidden;

  width: calc(210mm * ${({$scale:e})=>e});
  height: calc(297mm * ${({$scale:e})=>e});
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 8%);
`,pR=l.default.img.withConfig({componentId:"zh__sc-7a537607-14"})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`,pO=l.default.div.withConfig({componentId:"zh__sc-7a537607-15"})`
  pointer-events: none;
  position: absolute;
  inset: 0;
`,pL=l.default.button.withConfig({componentId:"zh__sc-7a537607-16"})`
  pointer-events: auto;
  cursor: pointer;

  position: absolute;

  padding: 0;
  border: 2px solid #4f39f6;
  border-radius: 2px;

  background: transparent;
`,pP=l.default.span.withConfig({componentId:"zh__sc-7a537607-17"})`
  pointer-events: none;

  position: absolute;
  top: -2px;
  left: -2px;
  transform: translateY(-100%);

  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  padding: 2px 4px;
  border-radius: 2px 2px 0 0;

  font-size: 8px;
  font-weight: 600;
  font-style: normal;
  line-height: 12px;
  line-height: normal;
  color: #fff;
  text-align: center;
  white-space: nowrap;

  background: #4f39f6;
`,pN=l.default.div.withConfig({componentId:"zh__sc-7a537607-18"})`
  pointer-events: auto;

  position: absolute;
  z-index: 2;

  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 340px;
  padding: 16px;
  border: 1px solid #d6d1f0;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 8px 11px 0 rgb(26 20 56 / 18%);
`,pM=l.default.div.withConfig({componentId:"zh__sc-7a537607-19"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,pF=l.default.div.withConfig({componentId:"zh__sc-7a537607-20"})`
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  color: #e8660f;
`,pB=l.default.div.withConfig({componentId:"zh__sc-7a537607-21"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #1a1729;
`,pU=l.default.div.withConfig({componentId:"zh__sc-7a537607-22"})`
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  color: #6b697a;
`,pY=l.default.div.withConfig({componentId:"zh__sc-7a537607-23"})`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;
  padding: 12px 14px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,pW=l.default.div.withConfig({componentId:"zh__sc-7a537607-24"})`
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  color: ${({$variant:e})=>"manual"===e?"#e8660f":"#5942f2"};
`,pV=l.default.div.withConfig({componentId:"zh__sc-7a537607-25"})`
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  color: #1a1729;
`,pH=l.default.div.withConfig({componentId:"zh__sc-7a537607-26"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,pG=l.default.button.withConfig({componentId:"zh__sc-7a537607-27"})`
  cursor: pointer;

  display: flex;

  padding: 4px 0;
  border: none;

  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #4f39f6;

  background: transparent;

  &:disabled {
    cursor: not-allowed;
    color: #9ca3af;
  }
`,pK=l.default.div.withConfig({componentId:"zh__sc-7a537607-28"})`
  transform-origin: top left;
  transform: scale(${({$scale:e})=>e});
  width: 210mm;
  height: 297mm;
`,pX=l.default.div.withConfig({componentId:"zh__sc-7a537607-29"})`
  width: 210mm;
  height: 297mm;
  background: #f9fafb;
`,pq=l.default.img.withConfig({componentId:"zh__sc-7a537607-30"})`
  display: block;

  width: 210mm;
  height: 297mm;

  object-fit: contain;
  background: #fff;
`,pQ=l.default.div.withConfig({componentId:"zh__sc-7a537607-31"})`
  position: relative;
  width: 210mm;
  height: 297mm;
`,pJ=(0,l.default)(pN).withConfig({componentId:"zh__sc-7a537607-32"})`
  ${({$centered:e})=>e?`
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `:""}
`,pZ=l.default.button.withConfig({componentId:"zh__sc-7a537607-33"})`
  position: absolute;
  top: 50%;
  ${({$right:e})=>!0===e?"right: 18px;":"left: 18px;"}
  transform: translateY(-50%);

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  padding: 0;
  border: 1px solid #e5e9ef;
  border-radius: 999px;

  color: #0a0a0a;

  background: #fff;

  &:hover {
    border: 1px solid #4f39f6;
    color: #4f39f6;
    background: #f7f5ff;
  }

  &:disabled {
    cursor: not-allowed;
    border: 1px solid #e5e9ef;
    color: #9ca3af;
    background: #f9fafb;
  }

  &:disabled:hover {
    border: 1px solid #e5e9ef;
    color: #9ca3af;
    background: #f9fafb;
  }
`,p0=l.default.div.withConfig({componentId:"zh__sc-7a537607-34"})`
  pointer-events: none;

  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 55px;

  background: linear-gradient(180deg, rgb(249 250 251 / 70%) -0.93%, #f9fafb 72.63%);
`,p1=l.default.div.withConfig({componentId:"zh__sc-7a537607-35"})`
  pointer-events: auto;

  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 99px;

  background: #fff;
`,p2=l.default.button.withConfig({componentId:"zh__sc-7a537607-36"})`
  display: flex;
  gap: 4px;
  align-items: center;

  padding: 0;
  border: none;

  background: transparent;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }
`,p6=l.default.span.withConfig({componentId:"zh__sc-7a537607-37"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px;
  color: ${({$muted:e})=>!0===e?"#9ca3af":"#0a0a0a"};
  letter-spacing: -1px;
`,p4=l.default.div.withConfig({componentId:"zh__sc-7a537607-38"})`
  display: flex;
  gap: 2px;
  align-items: center;
`,p5=l.default.div.withConfig({componentId:"zh__sc-7a537607-39"})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
`,p3=l.default.input.withConfig({componentId:"zh__sc-7a537607-40"})`
  width: 40px;
  height: 27px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;

  font-size: 16px;
  color: #0a0a0a;
  text-align: center;
  letter-spacing: -1px;

  background: #fff;

  &:hover {
    border-color: #b8c0d0;
    background: #fbfcff;
  }

  &:focus {
    border-color: #5635ff;
    background: #fbfcff;
    outline: none;
  }
`,p9=l.default.span.withConfig({componentId:"zh__sc-7a537607-41"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 16px;
  text-align: center;
  letter-spacing: -1px;
`,p8=(0,l.default)(p9).withConfig({componentId:"zh__sc-7a537607-42"})`
  color: #0a0a0a;
`,p7=(0,l.default)(p9).withConfig({componentId:"zh__sc-7a537607-43"})`
  color: #0a0a0a;
`;function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var xt=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",xe({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),i.default.createElement("polyline",{points:"7 10 12 15 17 10"}),i.default.createElement("line",{x1:"12",y1:"15",x2:"12",y2:"3"}))});xt.propTypes={color:q.default.string,size:q.default.oneOfType([q.default.string,q.default.number])},xt.displayName="Download";var xn=e.i(24659),xi=e.i(89656);let xl=[".xls",".xlsx"],xa={clients:{title:"기존 이용자 가져오기",target:"이용자",templateName:"이용자_가져오기_양식.xlsx",guide:"지금 계약 중인 이용자를 엑셀 한 번으로 등록해요. 이용자마다 계약·초기 서류가 화면에서 등록할 때와 같이 만들어져요. 담당 제공인력을 연결하려면 제공인력을 먼저 가져오세요."},"service-workers":{title:"기존 제공인력 가져오기",target:"제공인력",templateName:"제공인력_가져오기_양식.xlsx",guide:"지금 근무 중인 제공인력을 엑셀 한 번으로 등록해요. 서비스마다 근로계약·서류가 화면에서 등록할 때와 같이 만들어져요."}},xd={READY:{label:"등록 예정",tone:"primary"},CREATED:{label:"등록함",tone:"success"},SKIPPED:{label:"건너뜀",tone:"muted"},ERROR:{label:"오류",tone:"danger"},FAILED:{label:"실패",tone:"danger"}};function xo(e){let t=e.name.lastIndexOf("."),n=-1===t?"":e.name.slice(t).toLowerCase();return xl.includes(n)}function xr(e,t){return/[가-힣]/.test(e.message)?e.message:t}let xs=(0,n.observer)(function(){let e=a.default.modal.excelFileUpload,n=(0,i.useRef)(null),[l,r]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),[f,h]=(0,i.useState)(null),[u,p]=(0,i.useState)(null),[x,g]=(0,i.useState)(!1);if(!1===e.isOpen||null===e.category)return null;let m="SERVICE_WORKER_EXCEL_IMPORT"===e.category?"service-workers":"clients",j=xa[m],_=e.files[0]??null,w=a.default.data.auth.me.data?.organizationId??void 0,y=u??f,v=()=>{e.clearFiles(),h(null),p(null)},C=()=>{s||(v(),e.close())},I=t=>{let n=t.find(xo);if(void 0===n){t.length>0&&a.default.ui.layout.toast.error("엑셀 파일(.xls, .xlsx)만 올릴 수 있어요.");return}v(),e.addFiles([n])},z=async()=>{let[e,t]=await aC.default.data.onboardingImport.getColumns({kind:m});if(null!==e)return void a.default.ui.layout.toast.error(xr(e,"양식을 만들지 못했어요. 잠시 후 다시 시도해 주세요."));let n=xn.utils.aoa_to_sheet([t.map(e=>e.required?`*${e.header}`:e.header)]);n["!cols"]=t.map(e=>({wch:Math.max(12,2*e.header.length+4)}));let i=xn.utils.aoa_to_sheet([["칸","필수","예시","적는 방법","이렇게 써도 읽어요"],...t.map(e=>[e.header,e.required?"필수":"",e.example,e.note,e.aliases.join(", ")]),[],["* 첫 시트 머리글 아래에 한 사람씩 적어 주세요. 이미 등록된 사람은 다시 올려도 건너뛰어요."]]);i["!cols"]=[{wch:16},{wch:6},{wch:18},{wch:70},{wch:40}];let l=xn.utils.book_new();xn.utils.book_append_sheet(l,n,j.target),xn.utils.book_append_sheet(l,i,"작성 방법"),xn.writeFileXLSX(l,j.templateName)},T=async()=>{if(null===_||s)return;if(void 0===w)return void a.default.ui.layout.toast.error("기관 계정으로 로그인해서 가져와 주세요.");c(!0);let[e,t]=await aC.default.data.onboardingImport.preview({kind:m,file:_,organizationId:w});(c(!1),null!==e)?a.default.ui.layout.toast.error(xr(e,"파일을 확인하지 못했어요. 잠시 후 다시 시도해 주세요.")):(p(null),h(t))},E=async()=>{if(null===_||null===f||0===f.ready||s)return;c(!0);let[e,t]=await aC.default.data.onboardingImport.commit({kind:m,file:_,organizationId:w,skipInitialDocuments:x});if(c(!1),null!==e){h(null),a.default.ui.layout.toast.error(xr(e,"등록 결과를 받지 못했어요. [미리보기]를 다시 눌러 어디까지 등록됐는지 확인해 주세요."));return}p(t),t.created>0&&a.default.ui.layout.toast.success(`${j.target} ${t.created}명을 등록했어요.`),"clients"===m?await Promise.all([a.default.data.client.list.refetch(),a.default.data.contract.list.refetch()]):await a.default.data.serviceWorker.list.refetch()};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(xc,{children:[(0,t.jsxs)(xi.Header,{children:[(0,t.jsx)(xi.HeaderLeft,{children:(0,t.jsx)(xi.HeaderTitle,{children:j.title})}),(0,t.jsx)(xi.HeaderRight,{children:(0,t.jsxs)(xh,{type:"button",onClick:C,disabled:s,children:[(0,t.jsx)(en.X,{size:20}),"닫기"]})})]}),(0,t.jsxs)(xu,{children:[(0,t.jsxs)(xp,{children:[(0,t.jsx)(xx,{children:j.guide}),(0,t.jsxs)(xg,{type:"button",onClick:()=>void z(),children:[(0,t.jsx)(xt,{size:16}),"양식 받기"]})]}),null===y?(0,t.jsxs)(xm,{role:"button",tabIndex:0,"aria-label":"가져올 엑셀 파일 고르기",$isDragging:l,onClick:()=>{!1===s&&n.current?.click()},onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&!1===s&&(e.preventDefault(),n.current?.click())},onDragOver:e=>{e.preventDefault(),r(!0)},onDragLeave:e=>{e.preventDefault(),r(!1)},onDrop:e=>{e.preventDefault(),r(!1),I(Array.from(e.dataTransfer.files))},children:[(0,t.jsx)(xf,{ref:n,type:"file",accept:".xls,.xlsx",onChange:e=>{I(Array.from(e.target.files??[])),e.target.value=""}}),(0,t.jsx)(ep.Upload,{size:20}),(0,t.jsx)(xb,{children:null!==_?_.name:"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 고르세요."}),(0,t.jsx)(xj,{children:null!==_?"[미리보기]를 누르면 등록 전에 행마다 결과를 보여 줘요(아직 저장 안 해요).":"양식 엑셀(.xls, .xlsx) — 전자바우처 대상자 목록의 머리글(대상자명·계약시작일자 등)도 읽어요."})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(xw,{"aria-live":"polite",children:[null===u?(0,t.jsxs)(xy,{$tone:"primary",children:["등록 예정 ",y.ready]}):(0,t.jsxs)(xy,{$tone:"success",children:["등록함 ",y.created]}),(0,t.jsxs)(xy,{$tone:"muted",children:["건너뜀 ",y.skipped]}),(0,t.jsxs)(xy,{$tone:"danger",children:["오류 ",y.error+y.failed]}),(0,t.jsx)(xv,{children:null===u?"오류 행은 등록하지 않아요. 고친 뒤 같은 파일을 다시 올리면 이미 등록된 행은 건너뛰어요.":"실패·오류 행은 파일을 고쳐 다시 올리거나 화면에서 직접 등록해 주세요."})]}),(0,t.jsx)(xC,{children:(0,t.jsxs)(xI,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(xz,{$width:56,children:"행"}),(0,t.jsx)(xz,{$width:96,children:"이름"}),(0,t.jsx)(xz,{$width:140,children:"서비스"}),(0,t.jsx)(xz,{$width:104,children:"시작일"}),(0,t.jsx)(xz,{$width:84,children:"결과"}),(0,t.jsx)(xz,{children:"안내"})]})}),(0,t.jsx)("tbody",{children:y.rows.map(e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)(xT,{children:e.rowNumber}),(0,t.jsx)(xT,{children:e.name??"-"}),(0,t.jsx)(xT,{children:e.services.length>0?e.services.join(", "):"-"}),(0,t.jsx)(xT,{children:e.startDate??"-"}),(0,t.jsx)(xT,{children:(0,t.jsx)(xE,{$tone:xd[e.status].tone,children:xd[e.status].label})}),(0,t.jsx)(xT,{children:e.messages.length>0?e.messages.map(e=>(0,t.jsx)(xS,{children:e},e)):"-"})]},e.rowNumber))})]})})]})]}),(0,t.jsxs)(xi.Footer,{children:[(0,t.jsx)(xk,{type:"button",onClick:v,disabled:null===_||s,children:"다른 파일 고르기"}),null!==u?(0,t.jsxs)(xD,{type:"button",onClick:C,disabled:s,children:[(0,t.jsx)(b.Check,{size:20}),"마치기"]}):null===f?(0,t.jsxs)(xD,{type:"button",onClick:()=>void T(),disabled:null===_||s,children:[(0,t.jsx)(b.Check,{size:20}),s?"확인하는 중":"미리보기"]}):(0,t.jsxs)(t.Fragment,{children:["clients"===m?(0,t.jsxs)(xA,{children:[(0,t.jsx)(o.default.Input.Check,{checked:x,disabled:s,onChange:e=>g(e.target.checked)}),"처음 서류(계약서·초기상담기록지 등)는 이미 종이로 받아 두었어요 — 만들지 않기"]}):null,(0,t.jsxs)(xD,{type:"button",onClick:()=>void E(),disabled:0===f.ready||s,children:[(0,t.jsx)(b.Check,{size:20}),s?"등록하는 중":`${f.ready}명 등록하기`]})]})]})]})})}),xc=(0,l.default)(xi.Container).withConfig({componentId:"zh__sc-816f3394-0"})`
  width: min(1040px, calc(100vw - 32px));
  max-height: calc(100vh - 48px);
`,xf=l.default.input.withConfig({componentId:"zh__sc-816f3394-1"})`
  display: none;
`,xh=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-816f3394-2"})`
  ${xi.btnStyle}
  color: #4f39f6;
`,xu=(0,l.default)(xi.Body).withConfig({componentId:"zh__sc-816f3394-3"})`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  min-height: 360px;
  padding: 24px;

  background: #f9fafb;
`,xp=l.default.div.withConfig({componentId:"zh__sc-816f3394-4"})`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`,xx=l.default.p.withConfig({componentId:"zh__sc-816f3394-5"})`
  margin: 0;
  font-size: 14px;
  line-height: 22px;
  color: #344054;
`,xg=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-816f3394-6"})`
  ${xi.btnStyle}
  flex-shrink: 0;
  color: #4f39f6;
`,xm=l.default.div.withConfig({componentId:"zh__sc-816f3394-7"})`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 200px;
  padding: 24px 40px;
  border: 1px solid #4f39f6;
  border-radius: 16px;

  color: #4f39f6;

  background: ${({$isDragging:e})=>e?"#f6f3ff":"#fff"};

  &:hover {
    background-color: #f6f3ff;
  }
`,xb=l.default.p.withConfig({componentId:"zh__sc-816f3394-8"})`
  margin: 0;

  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  color: #4f39f6;
  text-align: center;
`,xj=l.default.p.withConfig({componentId:"zh__sc-816f3394-9"})`
  margin: 0;

  font-size: 13px;
  line-height: 20px;
  color: #99a1af;
  text-align: center;
`,x_={primary:{color:"#4f39f6",background:"#f0edff"},success:{color:"#067647",background:"#ecfdf3"},muted:{color:"#475467",background:"#f2f4f7"},danger:{color:"#b42318",background:"#fef3f2"}},xw=l.default.div.withConfig({componentId:"zh__sc-816f3394-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`,xy=l.default.span.withConfig({componentId:"zh__sc-816f3394-11"})`
  padding: 4px 10px;
  border-radius: 999px;

  font-size: 13px;
  font-weight: 700;
  color: ${({$tone:e})=>x_[e].color};

  background: ${({$tone:e})=>x_[e].background};
`,xv=l.default.span.withConfig({componentId:"zh__sc-816f3394-12"})`
  font-size: 13px;
  color: #667085;
`,xC=l.default.div.withConfig({componentId:"zh__sc-816f3394-13"})`
  overflow: auto;

  max-height: 420px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
`,xI=l.default.table.withConfig({componentId:"zh__sc-816f3394-14"})`
  border-collapse: collapse;
  width: 100%;
  font-size: 13px;
`,xz=l.default.th.withConfig({componentId:"zh__sc-816f3394-15"})`
  position: sticky;
  top: 0;

  width: ${({$width:e})=>void 0===e?"auto":`${e}px`};
  padding: 8px 10px;
  border-bottom: 1px solid #e5e7eb;

  font-weight: 700;
  color: #344054;
  text-align: left;

  background: #f9fafb;
`,xT=l.default.td.withConfig({componentId:"zh__sc-816f3394-16"})`
  padding: 8px 10px;
  border-bottom: 1px solid #f2f4f7;
  color: #101828;
  vertical-align: top;
`,xE=l.default.span.withConfig({componentId:"zh__sc-816f3394-17"})`
  padding: 2px 8px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 700;
  color: ${({$tone:e})=>x_[e].color};
  white-space: nowrap;

  background: ${({$tone:e})=>x_[e].background};
`,xS=l.default.p.withConfig({componentId:"zh__sc-816f3394-18"})`
  margin: 0;
  line-height: 20px;
  color: #475467;
`,xk=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-816f3394-19"})`
  ${xi.btnStyle}
`,xD=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-816f3394-20"})`
  ${xi.btnStyle}
`,xA=l.default.label.withConfig({componentId:"zh__sc-816f3394-21"})`
  display: flex;
  gap: 8px;
  align-items: center;

  margin-right: auto;

  font-size: 14px;
  color: #45464e;
`,{SERVICE_TYPE:x$,BANK_NAME:xR}=ex.default.enums;function xO(){let e=a.default.modal.organization.accountAdd,n="edit"===e.mode,l=(a.default.data.organization.serviceList.data?.serviceList??[]).filter(e=>!0===e.operatingStatus),o=n?e.serviceType:l[0]?.type??e.serviceType,[r,s]=(0,i.useState)(o),[c,f]=(0,i.useState)(e.accountNumber),[h,u]=(0,i.useState)(e.bankName),[p,x]=(0,i.useState)(e.accountHolder),[g,m]=(0,i.useState)(e.useFlag),[b,j]=(0,i.useState)(e.purpose),[_,w]=(0,i.useState)(""),[y,v]=(0,i.useState)(""),[C,I]=(0,i.useState)(!1),z=c.trim(),T=p.trim(),E=e.accountNumber.trim(),S=e.accountHolder.trim(),k=r!==e.serviceType||z!==E||h!==e.bankName||T!==S||b.trim()!==e.purpose.trim()||g!==e.useFlag,D=()=>{C||(s(e.serviceType),f(e.accountNumber),u(e.bankName),x(e.accountHolder),m(e.useFlag),j(e.purpose),w(""),v(""),e.close())},A=async()=>{if(C)return;let t=c.trim(),i=p.trim(),l=a.default.organizationSetting.staff.organizationId,d=""===t?"필수 입력값입니다.":"",o=""===i?"필수 입력값입니다.":"";if(w(d),v(o),""!==d||""!==o)return;if(null===l)return void a.default.ui.layout.toast.error(n?"기관 식별자가 없어 계좌를 수정할 수 없습니다.":"기관 식별자가 없어 계좌를 생성할 수 없습니다.");w(""),v(""),I(!0);let s={serviceType:r,accountNumber:t,bankName:h,accountHolder:i,useFlag:g,purpose:b.trim()},[f]=n&&null!==e.accountId?await a.default.data.organization.bankAccountList.patch({orgId:l,accountId:e.accountId,payload:s}):await a.default.data.organization.bankAccountList.create({orgId:l,payload:s});if(null!==f){I(!1),a.default.ui.layout.toast.error(f.message);return}let u=a.default.data.organization.cardList.query;null!==u&&u.orgId===l&&await a.default.data.organization.cardList.refetch(),I(!1),D()};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(xi.Container,{children:[(0,t.jsxs)(xi.Header,{children:[(0,t.jsx)(xi.HeaderLeft,{children:(0,t.jsx)(xi.HeaderTitle,{children:n?"계좌 정보 수정하기":"계좌 정보 추가하기"})}),(0,t.jsx)(xi.HeaderRight,{children:(0,t.jsxs)(xL,{onClick:D,disabled:C,children:[(0,t.jsx)(i9.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(xi.Body,{children:[(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"서비스 종류를 선택해주세요."}),(0,t.jsx)(xP,{value:r,onChange:e=>{let t=e.target.value;t in x$&&s(t)},children:l.map(e=>(0,t.jsxs)("option",{value:e.type,children:[x$[e.type].label," 서비스"]},e.type))})]}),(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"계좌번호를 입력해주세요."}),(0,t.jsx)(xN,{placeholder:"000-0000-0000-00",value:c,onChange:e=>{w(""),f(e.target.value.replace(/[^0-9-]/g,""))}}),(0,t.jsx)(xi.BodyRowErrorText,{$isVisible:_.trim().length>0,children:_})]}),(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"은행을 선택해주세요."}),(0,t.jsx)(xP,{value:h,onChange:e=>{let t=e.target.value;t in xR&&u(t)},children:Object.entries(xR).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))})]}),(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"예금주를 입력해주세요."}),(0,t.jsx)(xN,{placeholder:"기관명 또는 성명",value:p,onChange:e=>{v(""),x(e.target.value)}}),(0,t.jsx)(xi.BodyRowErrorText,{$isVisible:y.trim().length>0,children:y})]}),(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"용도를 입력해주세요. (선택)"}),(0,t.jsx)(xN,{placeholder:"예: 본인부담금 수납, 급여 지급",maxLength:100,value:b,onChange:e=>j(e.target.value)})]}),(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"서류 반영 여부를 선택해주세요."}),(0,t.jsxs)(xi.RadioCheckContainer,{children:[(0,t.jsxs)(xi.RadioCheckLabel,{children:[(0,t.jsx)(xM,{checked:g,onChange:()=>{m(!0)}}),"반영"]}),(0,t.jsxs)(xi.RadioCheckLabel,{children:[(0,t.jsx)(xM,{checked:!1===g,onChange:()=>{m(!1)}}),"미반영"]})]})]})]}),(0,t.jsxs)(xi.Footer,{children:[(0,t.jsx)(xF,{onClick:()=>{C||(s(o),f(""),u("NONGHYUP"),x(""),m(!0),j(""),w(""),v(""))},disabled:C,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(xB,{onClick:()=>{A()},disabled:C||n&&!1===k,children:[(0,t.jsx)(lW.default,{sx:{fontSize:20}}),"저장"]})]})]})})}let xL=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-e7085db1-0"})`
  ${xi.btnStyle}
`,xP=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-e7085db1-1"})`
  ${xi.inputStyle}
  width: 200px;
`,xN=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-e7085db1-2"})`
  ${xi.inputStyle}
  width: 100%;
`,xM=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-e7085db1-3"})``,xF=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-e7085db1-4"})`
  ${xi.btnStyle}
`,xB=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-e7085db1-5"})`
  ${xi.btnStyle}
`,xU=(0,n.observer)(function(){return"ready"!==a.default.modal.organization.accountAdd.status?null:(0,t.jsx)(xO,{})}),xY=(0,nQ.default)((0,t.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew"),{CARD_USAGE:xW,BANK_NAME:xV,SERVICE_TYPE:xH}=ex.default.enums;function xG(){let e=a.default.modal.organization.cardAdd,n="edit"===e.mode,l=a.default.organizationSetting.staff.organizationId,o=a.default.data.organization.bankAccountList,r=o.data??[],[s,c]=(0,i.useState)(e.cardUsage),[f,h]=(0,i.useState)(e.expiry),[u,p]=(0,i.useState)(""),[x,g]=(0,i.useState)(""===e.bankAccountId?th.SELECT_EMPTY_VALUE:e.bankAccountId),[m,b]=(0,i.useState)(e.cardNumberHead),[j,_]=(0,i.useState)(e.cardNumberTail),[w,y]=(0,i.useState)(""),[v,C]=(0,i.useState)(!1),[I,z]=(0,i.useState)(!1),[T,E]=(0,i.useState)(!1),S=x===th.SELECT_EMPTY_VALUE?"":x,k=s!==e.cardUsage||f!==e.expiry||S!==e.bankAccountId||m!==e.cardNumberHead||j!==e.cardNumberTail;(0,i.useEffect)(()=>{if(null===l)return void o.reset();let e=o.query;(null===e||e.orgId!==l)&&o.setQuery({orgId:l})},[o,l]);let D=()=>{T||(c(e.cardUsage),h(e.expiry),p(""),g(""===e.bankAccountId?th.SELECT_EMPTY_VALUE:e.bankAccountId),b(e.cardNumberHead),_(e.cardNumberTail),y(""),C(!1),z(!1),e.close())},A=async()=>{let t;if(T||n&&!1===k)return;let i=4!==m.length,d=j.length<3||j.length>4;if(C(i),z(d),y(i||d?"유효한 카드번호 형식이 아닙니다.":""),i||d)return;if(null===l)return void a.default.ui.layout.toast.error(n?"기관 식별자가 없어 카드를 수정할 수 없습니다.":"기관 식별자가 없어 카드를 생성할 수 없습니다.");y("");let o=""===f?null:null===(t=/^(0[1-9]|1[0-2])\/(\d{2})$/.exec(f))?null:{expiryMonth:Number(t[1]),expiryYear:2e3+Number(t[2])};if(""!==f&&null===o)return void p("유효기간은 MM/YY로 입력해주세요. (예: 07/28)");p(""),E(!0);let r={cardNumber:`${m}-****-****-${j}`,bankAccountId:x===th.SELECT_EMPTY_VALUE?void 0:x,cardUsage:s,...null===o?{}:o},[c]=n&&null!==e.cardId?await a.default.data.organization.cardList.patch({orgId:l,cardId:e.cardId,payload:r}):await a.default.data.organization.cardList.create({orgId:l,payload:r});if(null!==c){E(!1),a.default.ui.layout.toast.error(c.message);return}E(!1),D()};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(xi.Container,{children:[(0,t.jsxs)(xi.Header,{children:[(0,t.jsx)(xi.HeaderLeft,{children:(0,t.jsx)(xi.HeaderTitle,{children:n?"카드 정보 수정하기":"카드 정보 추가하기"})}),(0,t.jsx)(xi.HeaderRight,{children:(0,t.jsxs)(xK,{onClick:D,disabled:T,children:[(0,t.jsx)(i9.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(xi.Body,{children:[(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"카드번호의 앞 4자리와 끝 3~4자리를 입력해주세요."}),(0,t.jsxs)(xJ,{children:[(0,t.jsx)(xZ,{$hasError:v,placeholder:"0000",maxLength:4,value:m,onChange:e=>{b(e.target.value.replace(/[^0-9]/g,"")),C(!1),y(I?"유효한 카드번호 형식이 아닙니다.":"")}}),(0,t.jsx)(xZ,{placeholder:"****",value:"****",disabled:!0}),(0,t.jsx)(xZ,{placeholder:"****",value:"****",disabled:!0}),(0,t.jsx)(xZ,{$hasError:I,placeholder:"0000",maxLength:4,value:j,onChange:e=>{_(e.target.value.replace(/[^0-9]/g,"")),z(!1),y(v?"유효한 카드번호 형식이 아닙니다.":"")}})]}),(0,t.jsx)(xi.BodyRowErrorText,{$isVisible:w.trim().length>0,children:w}),(0,t.jsx)(x0,{$isVisible:0===w.trim().length,children:"⚠ 가운데 8자리는 입력하지 않습니다."})]}),(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"카드와 연결된 계좌가 있는 경우, 등록된 계좌를 선택해주세요."}),(0,t.jsxs)(xQ,{$isEmptySelected:x===th.SELECT_EMPTY_VALUE,value:x,onChange:e=>{g(e.target.value)},disabled:"loading"===o.status,children:[(0,t.jsx)("option",{value:th.SELECT_EMPTY_VALUE,disabled:!0,children:"계좌 없음"}),r.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.serviceType?`${xH[e.serviceType].label} 서비스 `:"- ",e.accountNumber," (은행 ",xV[e.bankName].label,", 예금주"," ",e.accountHolder??"-",")"]},e.id))]}),(0,t.jsxs)(x1,{children:[(0,t.jsx)(x2,{children:"⚠ 원하는 계좌가 목록에 없나요?"}),(0,t.jsxs)(x6,{onClick:()=>{T||(D(),a.default.modal.organization.accountAdd.show())},type:"button",disabled:T,children:["계좌 먼저 등록하기",(0,t.jsx)(xY,{sx:{fontSize:16,position:"relative",top:-1}})]})]})]}),(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"유효기간을 입력해주세요. (선택)"}),(0,t.jsx)(xX,{placeholder:"MM/YY",inputMode:"numeric",value:f,onChange:e=>{let t;p(""),h((t=e.target.value.replace(/\D/g,"").slice(0,4)).length<=2?t:`${t.slice(0,2)}/${t.slice(2)}`)}}),(0,t.jsx)(xi.BodyRowErrorText,{$isVisible:u.length>0,children:u})]}),(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"카드 용도를 선택하세요."}),(0,t.jsx)(xq,{value:s,onChange:e=>{let t=e.target.value;t in xW&&c(t)},children:Object.entries(xW).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))})]})]}),(0,t.jsxs)(xi.Footer,{children:[(0,t.jsx)(x4,{onClick:()=>{T||(c("OPERATING"),h(""),p(""),g(th.SELECT_EMPTY_VALUE),b(""),_(""),y(""),C(!1),z(!1))},disabled:T,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(x5,{onClick:()=>{A()},disabled:T||n&&!1===k,children:[(0,t.jsx)(lW.default,{sx:{fontSize:20}}),"저장"]})]})]})})}let xK=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-4440bebb-0"})`
  ${xi.btnStyle}
`,xX=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-4440bebb-1"})`
  ${xi.inputStyle}
  width: 120px;
`,xq=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-4440bebb-2"})`
  ${xi.inputStyle}
  width: 180px;
`,xQ=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-4440bebb-3"})`
  ${xi.inputStyle}
  width: 100%;
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
`,xJ=l.default.div.withConfig({componentId:"zh__sc-4440bebb-4"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,xZ=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-4440bebb-5"})`
  ${xi.inputStyle}
  width: 75px;
  border-color: ${({$hasError:e})=>!0===e?"#ff4d4f":"#e5e9ef"};
  text-align: center;

  &:disabled {
    color: #6b7280;
    background: #f3f4f6;
  }
`,x0=(0,l.default)(xi.BodyRowErrorText).withConfig({componentId:"zh__sc-4440bebb-6"})`
  color: #ff6900;
`,x1=l.default.div.withConfig({componentId:"zh__sc-4440bebb-7"})`
  position: absolute;
  right: 0;
  bottom: -24px;
  left: 0;

  display: flex;
  gap: 10px;
  align-items: center;
`,x2=l.default.div.withConfig({componentId:"zh__sc-4440bebb-8"})`
  font-size: 13px;
  line-height: 1.35;
  color: #ff6900;
`,x6=l.default.button.withConfig({componentId:"zh__sc-4440bebb-9"})`
  cursor: pointer;

  display: inline-flex;
  gap: 2px;
  align-items: center;

  padding: 0;
  border: 0;

  font-size: 15px;
  color: #256ef4;
  text-decoration: underline;

  background: transparent;
`,x4=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-4440bebb-10"})`
  ${xi.btnStyle}
`,x5=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-4440bebb-11"})`
  ${xi.btnStyle}
`,x3=(0,n.observer)(function(){return"ready"!==a.default.modal.organization.cardAdd.status?null:(0,t.jsx)(xG,{})});var x9=e.i(93847),x8=e.i(86400);let x7="__other__";function ge(){let e=a.default.modal.organization.contactAdd,n="edit"===e.mode,l=a.default.data.organization.serviceList.data?.serviceList??[],o=a.default.organizationSetting.staff.staffAccountList,[s,c]=(0,i.useState)(e.serviceType??(""===e.serviceLabel.trim()?th.SELECT_EMPTY_VALUE:x7)),[f,h]=(0,i.useState)(e.serviceLabel),[u,p]=(0,i.useState)(""),[x,g]=(0,i.useState)(e.staffId??th.SELECT_EMPTY_VALUE),[m,b]=(0,i.useState)(e.phoneNumber),[j,_]=(0,i.useState)(e.mobileProvider),[w,y]=(0,i.useState)(""),[v,C]=(0,i.useState)(!1),I=o.filter(e=>"RESIGNED"!==e.employmentStatus||e.id===x),z=s===th.SELECT_EMPTY_VALUE||s===x7?[]:I.filter(e=>(e.serviceTypes??[]).includes(s)||e.id===x),T=z.some(e=>e.id!==x)?z:I,E=()=>{c(th.SELECT_EMPTY_VALUE),h(""),p(""),g(th.SELECT_EMPTY_VALUE),b(""),_("KT"),y("")},S=()=>{v||(E(),e.close())},k=async()=>{if(v)return;let t=m.trim();if(""===t)return void y("휴대폰은 필수 입력값입니다.");if(!0!==x8.default.brand.phoneNumber.is(t))return void y("휴대폰 형식이 올바르지 않습니다.");y("");let i=s===x7,l=f.trim();if(i&&""===l)return void p("기타 서비스 이름을 입력해주세요.");p("");let d=s in r.default?s:null;C(!0);let[o]=n&&null!==e.contactId?await a.default.organizationSetting.staff.patchContact({contactId:e.contactId,payload:{serviceType:d,serviceLabel:i?l:null,staffId:x===th.SELECT_EMPTY_VALUE?null:x,phoneNumber:t,mobileProvider:j}}):await a.default.organizationSetting.staff.createContact({serviceType:d??void 0,serviceLabel:i?l:void 0,staffId:x===th.SELECT_EMPTY_VALUE?void 0:x,phoneNumber:t,mobileProvider:j});if(null!==o){C(!1),a.default.ui.layout.toast.error(o.message);return}C(!1),S()};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(xi.Container,{children:[(0,t.jsxs)(xi.Header,{children:[(0,t.jsx)(xi.HeaderLeft,{children:(0,t.jsx)(xi.HeaderTitle,{children:n?"연락처 수정하기":"연락처 추가하기"})}),(0,t.jsx)(xi.HeaderRight,{children:(0,t.jsxs)(gn,{onClick:S,disabled:v,children:[(0,t.jsx)(i9.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(xi.Body,{children:[(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsxs)(xi.BodyRowLabelRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"서비스 종류를 선택해주세요."}),(0,t.jsx)(xi.BodyRowHelperText,{children:"필수 입력값이 아닙니다. 입력란을 비워둘 수 있습니다."})]}),(0,t.jsxs)(gi,{value:s,onChange:e=>{let t=e.target.value;p(""),c(t in r.default||t===x7?t:th.SELECT_EMPTY_VALUE)},children:[l.filter(e=>!0===e.operatingStatus).map(e=>(0,t.jsxs)("option",{value:e.type,children:[r.default[e.type].label," 서비스"]},e.type)),(0,t.jsx)("option",{value:x7,children:"기타 (직접 입력)"}),(0,t.jsx)("option",{value:th.SELECT_EMPTY_VALUE,children:"선택 안함"})]}),s===x7&&(0,t.jsx)(gl,{style:{width:263,marginTop:8},placeholder:"예: 병원동행",maxLength:50,value:f,onChange:e=>{p(""),h(e.target.value)}}),(0,t.jsx)(xi.BodyRowErrorText,{$isVisible:u.length>0,children:u})]}),(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsxs)(xi.BodyRowLabelRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"담당자를 선택해주세요."}),(0,t.jsx)(xi.BodyRowHelperText,{children:"필수 입력값이 아닙니다. 입력란을 비워둘 수 있습니다."})]}),(0,t.jsxs)(gi,{style:{width:263},value:x,onChange:e=>{g(e.target.value)},children:[T.map(e=>(0,t.jsx)("option",{value:e.id,children:null===e.position?e.name:`${e.name} (직급 ${e.position.name})`},e.id)),(0,t.jsx)("option",{value:th.SELECT_EMPTY_VALUE,children:"선택 안함"})]})]}),(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsxs)(xi.BodyRowLabelRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"휴대폰 번호 및 통신사를 선택해주세요."}),(0,t.jsx)(xi.BodyRowHelperText,{children:"필수 입력값 입니다."})]}),(0,t.jsxs)(ga,{children:[(0,t.jsx)(gl,{style:{width:191},placeholder:"010-0000-0000",value:m,onChange:e=>{var t;t=e.target.value,y(""),b(x8.default.brand.phoneNumber.format(t))}}),(0,t.jsx)(gi,{style:{width:131},value:j,onChange:e=>{let t=e.target.value;t in x9.default&&_(t)},children:Object.entries(x9.default).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))})]}),(0,t.jsx)(xi.BodyRowErrorText,{$isVisible:w.trim().length>0,children:w})]})]}),(0,t.jsxs)(xi.Footer,{children:[(0,t.jsx)(gd,{onClick:()=>{v||E()},disabled:v,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(go,{onClick:()=>{k()},disabled:v,children:[(0,t.jsx)(lW.default,{sx:{fontSize:20}}),n?"수정":"저장"]})]})]})})}let gt=(0,n.observer)(function(){return"ready"!==a.default.modal.organization.contactAdd.status?null:(0,t.jsx)(ge,{})}),gn=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-665cc4f2-0"})`
  ${xi.btnStyle}
`,gi=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-665cc4f2-1"})`
  ${xi.inputStyle}
  width: 200px;
`,gl=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-665cc4f2-2"})`
  ${xi.inputStyle}
`,ga=l.default.div.withConfig({componentId:"zh__sc-665cc4f2-3"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,gd=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-665cc4f2-4"})`
  ${xi.btnStyle}
`,go=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-665cc4f2-5"})`
  ${xi.btnStyle}
`,gr=(0,n.observer)(function({acceptFileTypes:e,isError:n,onSelectFile:l}){let{isWindowFileDragging:d}=a.default.ui.layout,o=(0,i.useRef)(null);(0,X.default)(e=>{let t=e[0];void 0!==t&&l(t)});let r=n?"지원하지 않는 파일 형식입니다.":d?"파일을 여기에 놓으면 업로드 됩니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.";return(0,t.jsxs)(gs,{children:[(0,t.jsx)(gc,{children:"로고 또는 도장 이미지를 업로드해 주세요."}),(0,t.jsxs)(gh,{$isWindowFileDragging:d,$isError:n,onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault();let t=e.dataTransfer.files[0];void 0!==t&&l(t)},onClick:e=>{e.target instanceof HTMLElement&&(e.target.closest("button")||o.current?.click())},children:[!n&&(0,t.jsx)(gu,{children:(0,t.jsx)(ep.Upload,{size:26,color:"#4f39f6"})}),(0,t.jsxs)(gp,{children:[(0,t.jsx)(gx,{$isError:n,children:r}),(0,t.jsx)(gg,{children:"지원 파일 형식: PNG, JPG, JPEG"})]})]}),(0,t.jsx)(gf,{ref:o,type:"file",accept:e,onChange:e=>{let t=e.target.files?.[0];void 0!==t&&(l(t),e.target.value="")}})]})}),gs=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  width: 100%;
  height: 100%;
  height: 457px;
  padding: 32px 24px;
`,gc=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px; /* 133.333% */
  color: #101828;
  text-align: center;
`,gf=l.default.input.withConfig({componentId:"zh__sc-f01fc0e2-2"})`
  display: none;
`,gh=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-3"})`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 0;
  height: 168px;
  padding: 24px 40px;
  border: 1px solid ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  border-style: ${({$isWindowFileDragging:e})=>e?"dashed":"solid"};
  border-radius: 16px;

  background: ${({$isWindowFileDragging:e,$isError:t})=>t?"#fff5f5":e?"#f6f3ff":"#fff"};

  &:hover {
    background-color: ${({$isError:e})=>e?"#fff5f5":"#f6f3ff"};
  }

  &:active {
    background-color: ${({$isError:e})=>e?"#fff5f5":"#efeaff"};
  }
`,gu=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-4"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,gp=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,gx=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-6"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,gg=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-7"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #99a1af;
`,gm=(0,nQ.default)((0,t.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove");var gb=e.i(47885),gj=e.i(11974);let g_=async(e,t)=>""===e||1===t?e:new Promise(n=>{let i=new Image;i.onload=()=>{let l=document.createElement("canvas");l.width=235,l.height=235;let a=l.getContext("2d");if(null===a)return void n(e);let d=Math.min(l.width/i.width,l.height/i.height),o=i.width*d*t,r=i.height*d*t,s=(l.width-o)/2,c=(l.height-r)/2;a.clearRect(0,0,l.width,l.height),a.drawImage(i,s,c,o,r),n(l.toDataURL("image/png"))},i.onerror=()=>{n(e)},i.src=e});function gw({file:e,onProcessedImageChange:n}){let[l,a]=(0,i.useState)(100),[d,o]=(0,i.useState)(100),[r,s]=(0,i.useState)(100),[c,f]=(0,i.useState)(""),[h,u]=(0,i.useState)(""),p=(0,i.useRef)(0),x=(0,i.useRef)(0);return(0,i.useEffect)(()=>{let e=window.setTimeout(()=>{s(d)},120);return()=>{window.clearTimeout(e)}},[d]),(0,i.useEffect)(()=>{let t=p.current+1;p.current=t,(async()=>{let{adjustedUrl:n}=await (0,gj.processBackgroundRemoval)({file:e,whiteThreshold:gb.DEFAULT_WHITE_THRESHOLD,softness:gb.DEFAULT_SOFTNESS,contrast:r,selectionRect:null});p.current===t&&f(n)})()},[r,e,n]),(0,i.useEffect)(()=>{if(""===c)return;let e=x.current+1;x.current=e,(async()=>{let t=await g_(c,l/100);x.current===e&&(u(t),n(t))})()},[c,l,n]),(0,t.jsxs)(gy,{children:[(0,t.jsxs)(gv,{children:[(0,t.jsx)(gC,{children:(0,t.jsx)(ei.default.BackgroundReplace,{size:16,color:"#1C1B1F"})}),(0,t.jsxs)(gI,{children:["업로드된 ",e.name," 이미지의 배경을 제거했습니다.",(0,t.jsx)("br",{}),"아래에서 크기와 선명도를 확인한 뒤 저장을 완료해주세요!"]})]}),(0,t.jsxs)(gz,{children:[(0,t.jsx)(gT,{children:"이미지 미리보기"}),(0,t.jsxs)(gE,{children:[(0,t.jsxs)(gS,{children:[(0,t.jsx)(gk,{children:""!==h&&(0,t.jsx)(gD,{src:h,alt:`${e.name} 미리보기`})}),(0,t.jsxs)(gA,{children:[(0,t.jsx)(g$,{children:(0,t.jsx)(tf.default,{sx:{fontSize:22}})}),(0,t.jsx)(gR,{children:"체크 무늬는 투명 배경을 뜻합니다. 실제 저장 시에는 배경 없이 저장됩니다."})]})]}),(0,t.jsxs)(gO,{children:[(0,t.jsxs)(gL,{children:[(0,t.jsx)(gP,{children:"크기 조정하기"}),(0,t.jsxs)(gN,{children:[(0,t.jsxs)(gM,{children:[(0,t.jsx)(gF,{onClick:()=>{a(e=>Math.max(e-10,100))},disabled:l<=100,children:(0,t.jsx)(gm,{sx:{fontSize:24}})}),(0,t.jsx)(gB,{children:"작게"})]}),(0,t.jsx)(gU,{min:100,max:500,value:l,onChange:a}),(0,t.jsxs)(gM,{children:[(0,t.jsx)(gF,{onClick:()=>{a(e=>Math.min(e+10,500))},disabled:l>=500,children:(0,t.jsx)(ho.default,{sx:{fontSize:24}})}),(0,t.jsx)(gB,{children:"크게"})]})]})]}),(0,t.jsx)(gY,{}),(0,t.jsxs)(gL,{children:[(0,t.jsx)(gP,{children:"선명도 조정하기"}),(0,t.jsxs)(gN,{children:[(0,t.jsxs)(gM,{children:[(0,t.jsx)(gF,{onClick:()=>{o(e=>{let t=Math.max(e-5,gb.MIN_CONTRAST);return s(t),t})},disabled:d<=gb.MIN_CONTRAST,children:(0,t.jsx)(gm,{sx:{fontSize:24}})}),(0,t.jsx)(gB,{children:"부드럽게"})]}),(0,t.jsx)(gU,{min:gb.MIN_CONTRAST,max:gb.MAX_CONTRAST,value:d,onChange:o,onChangeEnd:s}),(0,t.jsxs)(gM,{children:[(0,t.jsx)(gF,{onClick:()=>{o(e=>{let t=Math.min(e+5,gb.MAX_CONTRAST);return s(t),t})},disabled:d>=gb.MAX_CONTRAST,children:(0,t.jsx)(ho.default,{sx:{fontSize:24}})}),(0,t.jsx)(gB,{children:"선명하게"})]})]})]})]})]})]})]})}let gy=l.default.div.withConfig({componentId:"zh__sc-3b741e84-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  height: 100%;
  padding: 32px 24px;

  background: #fff;
`,gv=l.default.div.withConfig({componentId:"zh__sc-3b741e84-1"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,gC=l.default.div.withConfig({componentId:"zh__sc-3b741e84-2"})``,gI=l.default.div.withConfig({componentId:"zh__sc-3b741e84-3"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,gz=l.default.div.withConfig({componentId:"zh__sc-3b741e84-4"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,gT=l.default.div.withConfig({componentId:"zh__sc-3b741e84-5"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 114.286% */
  color: #0a0a0a;
`,gE=l.default.div.withConfig({componentId:"zh__sc-3b741e84-6"})`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,gS=l.default.section.withConfig({componentId:"zh__sc-3b741e84-7"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  width: 235px;
`,gk=l.default.div.withConfig({componentId:"zh__sc-3b741e84-8"})`
  position: relative;

  overflow: hidden;
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  width: ${235}px;
  height: ${235}px;
  border: 1px solid #d1d5db;
  border-radius: 6px;

  background-color: #fff;
  background-image:
    linear-gradient(45deg, #ececec 25%, transparent 25%),
    linear-gradient(-45deg, #ececec 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #ececec 75%),
    linear-gradient(-45deg, transparent 75%, #ececec 75%);
  background-position:
    0 0,
    0 8px,
    8px -8px,
    -8px 0;
  background-size: 16px 16px;
`,gD=l.default.img.withConfig({componentId:"zh__sc-3b741e84-9"})`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,gA=l.default.div.withConfig({componentId:"zh__sc-3b741e84-10"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  color: #0a0a0a;
`,g$=l.default.div.withConfig({componentId:"zh__sc-3b741e84-11"})`
  position: relative;
  top: -3px;
`,gR=l.default.div.withConfig({componentId:"zh__sc-3b741e84-12"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 114.286% */
`,gO=l.default.section.withConfig({componentId:"zh__sc-3b741e84-13"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
`,gL=l.default.div.withConfig({componentId:"zh__sc-3b741e84-14"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,gP=l.default.h5.withConfig({componentId:"zh__sc-3b741e84-15"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 114.286% */
  color: #0a0a0a;
`,gN=l.default.div.withConfig({componentId:"zh__sc-3b741e84-16"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;
`,gM=l.default.div.withConfig({componentId:"zh__sc-3b741e84-17"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 56px;
`,gF=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-3b741e84-18"})`
  display: flex;
  gap: 4px;
  align-items: center;
  align-self: stretch;

  height: 36px;
  padding: 8px 16px;
`,gB=l.default.div.withConfig({componentId:"zh__sc-3b741e84-19"})`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #4f39f6;
  text-align: center;
`,gU=(0,l.default)(o.default.Input.Slider).withConfig({componentId:"zh__sc-3b741e84-20"})`
  position: relative;
  top: 10px;
`,gY=l.default.div.withConfig({componentId:"zh__sc-3b741e84-21"})`
  align-self: stretch;
  border-top: 1px solid #d1d5db;
`,gW=(0,n.observer)(function(){let e=a.default.modal.organization.imageAdjustUpload,{status:n,close:l,resetToUploadStep:o,selectedFile:r}=e,[s,c]=(0,i.useState)(!1),f=(0,i.useRef)(null);if((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(f.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)return null;let h=null===r,u="logo"===e.target?"로고":"도장",p=async()=>{!0===await e.save()&&c(!1)};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(gV,{ref:f,children:[(0,t.jsxs)(xi.Header,{children:[(0,t.jsx)(xi.HeaderLeft,{children:(0,t.jsx)(xi.HeaderTitle,{children:"이미지 업로드하기"})}),(0,t.jsx)(xi.HeaderRight,{children:(0,t.jsxs)(gH,{onClick:()=>{c(!1),l()},children:[(0,t.jsx)(i9.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsx)(gG,{children:h?(0,t.jsx)(gr,{acceptFileTypes:e.acceptFileTypes,isError:e.isError,onSelectFile:e.setSelectedFile}):(0,t.jsx)(gw,{file:r,onProcessedImageChange:e.setProcessedImageDataUrl})}),(0,t.jsxs)(xi.Footer,{children:[(0,t.jsx)(gK,{onClick:()=>{c(!1),o()},disabled:h||e.isSaving,children:"다시 업로드하기"}),(0,t.jsxs)(gX,{onClick:()=>{c(!0)},disabled:h||e.isSaving,children:[(0,t.jsx)(lW.default,{sx:{fontSize:20}}),"최종확인 및 저장"]})]}),(0,t.jsx)(gq,{isOpen:s,targetLabel:u,isSaving:e.isSaving,onCancel:()=>{e.isSaving||c(!1)},onConfirm:()=>{p()}})]})})}),gV=(0,l.default)(xi.Container).withConfig({componentId:"zh__sc-665af392-0"})`
  position: relative;
  width: 626px;
`,gH=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-665af392-1"})`
  ${xi.btnStyle}
`,gG=(0,l.default)(xi.Body).withConfig({componentId:"zh__sc-665af392-2"})`
  padding: 0;
`,gK=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-665af392-3"})`
  ${xi.btnStyle}
`,gX=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-665af392-4"})`
  ${xi.btnStyle}
`;function gq({isOpen:e,targetLabel:n,isSaving:i,onCancel:l,onConfirm:a}){return!0!==e?null:(0,t.jsx)(gQ,{children:(0,t.jsxs)(gJ,{children:[(0,t.jsxs)(gZ,{children:[(0,t.jsxs)(g0,{children:[n," 이미지를 저장할까요?"]}),(0,t.jsxs)(g1,{children:["저장된 ",n," 이미지는 출력용 서류에서 사용할 수 있습니다.",(0,t.jsx)("br",{}),"이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다."]})]}),(0,t.jsxs)(g2,{children:[(0,t.jsx)(g6,{type:"button",onClick:l,disabled:!0===i,children:"취소하기"}),(0,t.jsx)(g4,{type:"button",onClick:a,disabled:!0===i,children:"저장하기"})]})]})})}let gQ=l.default.div.withConfig({componentId:"zh__sc-665af392-5"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,gJ=l.default.div.withConfig({componentId:"zh__sc-665af392-6"})`
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
`,gZ=l.default.div.withConfig({componentId:"zh__sc-665af392-7"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,g0=l.default.h3.withConfig({componentId:"zh__sc-665af392-8"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,g1=l.default.p.withConfig({componentId:"zh__sc-665af392-9"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,g2=l.default.div.withConfig({componentId:"zh__sc-665af392-10"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`,g6=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-665af392-11"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
`,g4=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-665af392-12"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`;var g5=e.i(24986),g3=e.i(6412),g9=e.i(13269);let g8=()=>{let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},g7=function({staffAccountId:e,staffName:n,onClose:l,onResigned:d}){let[r,s]=(0,i.useState)("input"),[c,f]=(0,i.useState)(g8),[h,u]=(0,i.useState)(""),[p,x]=(0,i.useState)(null),[g,m]=(0,i.useState)(!1),[b,j]=(0,i.useState)(""),[_,w]=(0,i.useState)(!1),y=(0,i.useRef)(null),v=async()=>{if(null===p&&!g)return;w(!0);let[t]=await a.default.data.staffAccount.resign({id:e,file:g?null:p,letterKeptOnPaper:g,resignedOn:c,reason:h});if(w(!1),null!==t){j(t.message||"퇴사 처리에 실패했습니다."),s("input");return}a.default.ui.layout.toast.success(`${n}님을 퇴사 처리했습니다.`),d()};return(0,t.jsx)(me,{role:"dialog","aria-modal":"true","aria-label":"퇴사 처리",onClick:()=>{_||l()},children:(0,t.jsxs)(mt,{onClick:e=>e.stopPropagation(),children:[(0,t.jsx)(mn,{children:"input"===r?`${n} 퇴사 처리`:"최종확인"}),"input"===r?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(mi,{children:[(0,t.jsx)(ml,{children:"사직서"}),(0,t.jsx)("input",{ref:y,type:"file",accept:"image/*,application/pdf",hidden:!0,onChange:e=>{x(e.target.files?.[0]??null),j("")}}),(0,t.jsxs)(ma,{children:[(0,t.jsx)(o.default.Button.Outlined,{type:"button",disabled:g,onClick:()=>y.current?.click(),children:null===p?"사직서 올리기":"다시 고르기"}),(0,t.jsx)(md,{children:g?"파일 없이 퇴사 처리해요(종이 사직서는 기관에서 보관).":p?.name??"서명한 사직서를 사진이나 PDF로 올려 주세요."})]}),(0,t.jsxs)(mh,{children:[(0,t.jsx)("input",{type:"checkbox",checked:g,onChange:e=>{m(e.target.checked),j("")}}),"사직서는 종이로 보관해요"]})]}),(0,t.jsxs)(mi,{children:[(0,t.jsx)(ml,{children:"퇴사일"}),(0,t.jsx)(mo,{type:"date",value:c,onChange:e=>f(e.target.value)})]}),(0,t.jsxs)(mi,{children:[(0,t.jsx)(ml,{children:"사유 (선택)"}),(0,t.jsx)(mo,{type:"text",maxLength:200,placeholder:"예: 개인 사정",value:h,onChange:e=>u(e.target.value)})]})]}):(0,t.jsxs)(mr,{children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:n}),"님을 ",(0,t.jsx)("strong",{children:c})," 자로 퇴사 처리합니다."]}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"이 계정은 바로 로그인할 수 없고, 접속 중인 화면도 끊깁니다(계정 종료)."}),(0,t.jsx)("li",{children:"맡고 있던 업무 연락처 담당에서 빠집니다."}),(0,t.jsx)("li",{children:"담당 서비스 배정이 해제됩니다(재입사하면 다시 배정해 주세요)."}),(0,t.jsx)("li",{children:"근무자 정보·작성한 서류·사직서는 그대로 남습니다(삭제와 다름)."}),(0,t.jsx)("li",{children:"다시 일하게 되면 근무 상태를 “근무 중(재입사)”으로 바꾸면 같은 아이디로 씁니다."})]})]}),(0,t.jsx)(ms,{children:b}),(0,t.jsxs)(mc,{children:[(0,t.jsx)(o.default.Button.Outlined,{type:"button",disabled:_,onClick:"input"===r?l:()=>s("input"),children:"input"===r?"취소":"이전"}),"input"===r?(0,t.jsx)(o.default.Button.Filled.Primary,{type:"button",onClick:()=>{null!==p||g?/^\d{4}-\d{2}-\d{2}$/.test(c)?(j(""),s("confirm")):j("퇴사일을 골라 주세요."):j('사직서(사진 또는 PDF)를 올리거나 "사직서는 종이로 보관해요"를 골라 주세요.')},children:"다음"}):(0,t.jsx)(mf,{type:"button",disabled:_,onClick:()=>void v(),children:_?"처리 중…":"최종확인 — 퇴사 처리"})]})]})})},me=l.default.div.withConfig({componentId:"zh__sc-5a9e7b26-0"})`
  position: fixed;
  z-index: 1400;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(16 24 40 / 40%);
`,mt=l.default.div.withConfig({componentId:"zh__sc-5a9e7b26-1"})`
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: min(480px, calc(100vw - 32px));
  padding: 24px;
  border-radius: 12px;

  background: #fff;
`,mn=l.default.p.withConfig({componentId:"zh__sc-5a9e7b26-2"})`
  font-size: 18px;
  font-weight: 700;
  color: #292b36;
`,mi=l.default.div.withConfig({componentId:"zh__sc-5a9e7b26-3"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ml=l.default.span.withConfig({componentId:"zh__sc-5a9e7b26-4"})`
  font-size: 14px;
  font-weight: 600;
  color: #344054;
`,ma=l.default.div.withConfig({componentId:"zh__sc-5a9e7b26-5"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,md=l.default.span.withConfig({componentId:"zh__sc-5a9e7b26-6"})`
  overflow: hidden;

  font-size: 13px;
  color: #636978;
  text-overflow: ellipsis;
  white-space: nowrap;
`,mo=l.default.input.withConfig({componentId:"zh__sc-5a9e7b26-7"})`
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
`,mr=l.default.div.withConfig({componentId:"zh__sc-5a9e7b26-8"})`
  padding: 14px 16px;
  border-radius: 8px;

  font-size: 14px;
  color: #292b36;

  background: #fef3f2;

  ul {
    margin-top: 8px;
    padding-left: 18px;
    list-style: disc;
  }

  li {
    margin-top: 4px;
  }
`,ms=l.default.p.withConfig({componentId:"zh__sc-5a9e7b26-9"})`
  min-height: 18px;
  font-size: 13px;
  color: #d92d20;
`,mc=l.default.div.withConfig({componentId:"zh__sc-5a9e7b26-10"})`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,mf=l.default.button.withConfig({componentId:"zh__sc-5a9e7b26-11"})`
  height: 40px;
  padding: 0 16px;
  border: none;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 700;
  color: #fff;

  background: #d92d20;

  &:disabled {
    background: #fda29b;
  }
`,mh=l.default.label.withConfig({componentId:"zh__sc-5a9e7b26-12"})`
  display: flex;
  gap: 6px;
  align-items: center;

  margin-top: 6px;

  font-size: 14px;
  color: #344054;
`,mu=function({staffAccountId:e}){let[n,l]=(0,i.useState)(null);return((0,i.useEffect)(()=>{let t=!1;return aC.default.data.staffAccount.getResignation({id:e}).then(([e,n])=>{t||null!==e||l(n)}),()=>{t=!0}},[e]),null===n||null===n.resignedOn)?null:(0,t.jsxs)(mp,{children:["퇴사일 ",n.resignedOn,null!==n.reason?` \xb7 ${n.reason}`:"",null!==n.letterUrl?(0,t.jsx)("a",{href:n.letterUrl,target:"_blank",rel:"noreferrer",children:"사직서 보기"}):(0,t.jsx)("span",{children:"사직서 종이 보관"})]})},mp=l.default.p.withConfig({componentId:"zh__sc-c8b31d9f-0"})`
  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 13px;
  color: #636978;

  a {
    color: #4f39f6;
    text-decoration: underline;
  }
`,mx="__other__",mg=[{value:"ACTIVE",label:"근무 중"},{value:"ON_LEAVE",label:"휴직"},{value:"RESIGNED",label:"퇴사"}],mm=(0,n.observer)(function(){var e;let n=a.default.modal.organization.staffAccountAdd,l="edit"===n.mode,[o,s]=(0,i.useState)(n.name),[c,f]=(0,i.useState)(n.position??th.SELECT_EMPTY_VALUE),[h,u]=(0,i.useState)(n.phoneNumber),[p,x]=(0,i.useState)(n.employmentStatus),[g,m]=(0,i.useState)(!1),b=(e=n.employmentStatus)===p?null:"ON_LEAVE"===p?"휴직으로 저장하면 이 계정은 일시중지되어 바로 로그인할 수 없습니다. 복직(근무 중)으로 바꾸면 같은 아이디로 다시 쓸 수 있습니다.":"RESIGNED"===p?"퇴사로 저장하면 이 근무자는 바로 로그인할 수 없습니다. 근무자 정보와 작성한 서류는 그대로 남습니다(삭제와 다름).":"RESIGNED"===e?"재입사로 저장합니다. 관리번호·아이디는 예전 것을 그대로 씁니다.":"복직으로 저장합니다. 같은 아이디로 다시 로그인할 수 있습니다.",[j,_]=(0,i.useState)(n.birthDate),[w,y]=(0,i.useState)(n.gender??th.SELECT_EMPTY_VALUE),[v,C]=(0,i.useState)(n.address),[I,z]=(0,i.useState)(n.jobDuty),[T,E]=(0,i.useState)(n.serviceTypes),[S,k]=(0,i.useState)(""),[D,A]=(0,i.useState)(""),[$,R]=(0,i.useState)(""),[O,L]=(0,i.useState)(n.sealImagePath),[P,N]=(0,i.useState)(""),[M,F]=(0,i.useState)(""),[B,U]=(0,i.useState)(!1),Y=(0,i.useRef)(null),W=a.default.organizationSetting.staff.organizationId,V=a.default.data.organization.staffPositionList,H=a.default.data.organization.serviceList,G=(H.data?.serviceList??[]).filter(e=>!0===e.operatingStatus).map(e=>e.type),K=[...G,...T.filter(e=>!0!==G.includes(e))],X=o!==n.name||c!==(n.position??th.SELECT_EMPTY_VALUE)||h!==n.phoneNumber||j!==n.birthDate||w!==(n.gender??th.SELECT_EMPTY_VALUE)||v!==n.address||I!==n.jobDuty||[...T].sort().join(",")!==[...n.serviceTypes].sort().join(",")||O!==n.sealImagePath,q=e=>{a.default.ui.layout.toast.error(e,void 0,Y.current)};(0,i.useEffect)(()=>{null!==W&&V.query?.orgId!==W&&V.setQuery({orgId:W}),null!==W&&H.query?.id!==W&&H.setQuery({id:W})},[W,V,H]);let Q=async()=>{if(c===th.SELECT_EMPTY_VALUE)return null;if(c!==mx)return c;let e=D.trim();if(""===e)return R("새 직급 이름을 입력해주세요."),!1;let t=V.data?.find(t=>t.name===e);if(void 0!==t)return t.id;if(null===W)return!1;let[n,i]=await aC.default.data.organization.createStaffPosition({orgId:W,name:e,sortOrder:(V.data?.length??0)+1});return null!==n?(R(n.message||"직급을 만들지 못했습니다."),!1):(V.refetch(),i.id)},J=()=>{s(""),f(th.SELECT_EMPTY_VALUE),u(""),L(""),_(""),y(th.SELECT_EMPTY_VALUE),C(""),z(""),E([]),N(""),F(""),k("")},Z=()=>{B||(J(),n.close())},ee=async e=>{try{let t=await fetch(e);if(!0!==t.ok)return[Error("Failed to convert data URL to blob"),null];let n=await t.blob();return[null,n]}catch(e){return[e instanceof Error?e:Error("Failed to convert data URL to blob"),null]}},et=async(e,t,n)=>{let[i,l]=await ee(e);if(null!==i)return[i,null];let[a,d]=await aC.default.upload.createPresignedUploadUrl({category:g9.default.STAFF_SEAL,contentType:g3.default.PNG,organizationId:n,staffAccountId:t});if(null!==a)return[a,null];let[o]=await aC.default.upload.putFileToPresignedUploadUrl({uploadUrl:d.uploadUrl,contentType:g3.default.PNG,file:l});return null!==o?[o,null]:[null,d.path]},en=async e=>{let t=a.default.data.organization.contactList.query;if(!0==(null!==t&&t.orgId===e))try{await a.default.data.organization.contactList.refetch()}catch{q("서비스별 업무 연락처 목록을 새로고침하지 못했습니다.")}},el=async()=>{if(B)return;let e=o.trim();""===e?N("이름은 필수 입력값입니다."):N("");let t=h.trim();if(""!==t&&!0!==x8.default.brand.phoneNumber.is(t))return void F("휴대폰 형식이 올바르지 않습니다.");F("");let i=j.trim();if(""!==i&&!0!==(e=>{if(!0!==/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;let[t,n,i]=e.split("-").map(Number);if(void 0===t||void 0===n||void 0===i||t<1900)return!1;let l=new Date(Date.UTC(t,n-1,i));return l.getUTCFullYear()===t&&l.getUTCMonth()===n-1&&l.getUTCDate()===i&&l.getTime()<=Date.now()})(i))return void k("생년월일을 YYYY-MM-DD로 입력해주세요. (예: 1990-03-04)");if(k(""),""===e)return;let d=await Q();if(!1===d)return;let r={birthDate:""===i?void 0:i,gender:w in tp.default?w:void 0,address:""===v.trim()?void 0:v.trim(),jobDuty:""===I.trim()?void 0:I.trim(),serviceTypes:T};U(!0);let s=n.staffAccountId,c=a.default.organizationSetting.staff.organizationId;if(!0!==l){if(null===c){U(!1),q("기관 식별자가 없어 근무자를 생성할 수 없습니다.");return}let[n,i]=await a.default.organizationSetting.staff.createStaffAccount({organizationId:c,name:e,role:g5.default.STAFF,positionId:d??void 0,phoneNumber:""===t?void 0:t,...r});if(null!==n||null===i){U(!1),q(n?.message??"근무자 생성에 실패했습니다.");return}s=i.id,c=i.organizationId}else{if(null===s){U(!1),q("수정할 근무자 정보를 찾지 못했습니다.");return}let[n]=await a.default.data.staffAccount.patch({id:s,payload:{name:e,positionId:d,phoneNumber:""===t?null:t,employmentStatus:p,...r}});if(null!==n){U(!1),q(n.message||"근무자 수정에 실패했습니다.");return}null!==c&&await en(c)}let f=O.trim();if(f.startsWith("data:")){if(null===s||null===c){U(!1),q("도장 업로드 대상 정보를 찾지 못했습니다.");return}let[e,t]=await et(f,s,c);if(null!==e||null===t){U(!1),q(l?"근무자 정보는 수정되었지만 도장 업로드에 실패했습니다. 다시 시도해 주세요.":"근무자는 생성되었지만 도장 업로드에 실패했습니다. 수정에서 다시 업로드해 주세요."),Z();return}let[n]=await a.default.data.staffAccount.patch({id:s,payload:{sealImagePath:t}});if(null!==n){U(!1),q(l?"근무자 도장 경로 저장에 실패했습니다. 다시 시도해 주세요.":"근무자는 생성되었지만 도장 경로 저장에 실패했습니다. 수정에서 다시 저장해 주세요."),Z();return}}U(!1),Z()};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(xi.Container,{ref:Y,children:[(0,t.jsxs)(xi.Header,{children:[(0,t.jsxs)(xi.HeaderLeft,{children:[(0,t.jsx)(xi.HeaderTitle,{children:l?"근무자 수정하기":"근무자 추가하기"}),l&&null!==n.managementNo&&(0,t.jsx)(my,{children:`관리번호 ${n.managementNo}`})]}),(0,t.jsx)(xi.HeaderRight,{children:(0,t.jsxs)(mj,{onClick:Z,disabled:B,children:[(0,t.jsx)(i9.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(m_,{children:[(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"이름을 입력해주세요."}),(0,t.jsx)(mz,{placeholder:"이름을 입력해주세요",value:o,onChange:e=>{N(""),s(e.target.value)}}),(0,t.jsx)(xi.BodyRowErrorText,{$isVisible:P.trim().length>0,children:P})]}),(0,t.jsxs)(mw,{children:[(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"생년월일"}),(0,t.jsx)(mz,{placeholder:"1990-03-04",inputMode:"numeric",value:j,onChange:e=>{let t;k(""),_((t=e.target.value.replace(/\D/g,"").slice(0,8)).length<=4?t:t.length<=6?`${t.slice(0,4)}-${t.slice(4)}`:`${t.slice(0,4)}-${t.slice(4,6)}-${t.slice(6)}`)}}),(0,t.jsx)(xi.BodyRowErrorText,{$isVisible:S.length>0,children:S})]}),(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"성별"}),(0,t.jsxs)(mI,{value:w,onChange:e=>y(e.target.value),children:[(0,t.jsx)("option",{value:th.SELECT_EMPTY_VALUE,children:"선택 안함"}),(0,t.jsx)("option",{value:"MALE",children:tp.default.MALE.label}),(0,t.jsx)("option",{value:"FEMALE",children:tp.default.FEMALE.label})]})]})]}),(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"직급을 선택해주세요."}),(0,t.jsxs)(mI,{value:c,onChange:e=>{R(""),f(e.target.value)},children:[V.data?.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id)),(0,t.jsx)("option",{value:mx,children:"기타 (직접 입력)"}),(0,t.jsx)("option",{value:th.SELECT_EMPTY_VALUE,children:"없음"})]}),c===mx&&(0,t.jsx)(mz,{style:{marginTop:8},placeholder:"새 직급 이름 (예: 팀장)",maxLength:50,value:D,onChange:e=>{R(""),A(e.target.value)}}),(0,t.jsx)(xi.BodyRowErrorText,{$isVisible:$.length>0,children:$})]}),(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsxs)(xi.BodyRowLabelRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"직무"}),(0,t.jsx)(xi.BodyRowHelperText,{children:"직급과 별개로 하는 일 (예: 사회복지사, 전담인력)"})]}),(0,t.jsx)(mz,{placeholder:"예: 사회복지사",maxLength:100,value:I,onChange:e=>z(e.target.value)})]}),(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsxs)(xi.BodyRowLabelRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"담당 서비스"}),(0,t.jsx)(xi.BodyRowHelperText,{children:"기관이 운영하는 서비스만 고를 수 있어요. 빼도 근무자 정보와 아이디는 그대로예요."})]}),(0,t.jsx)(mv,{children:0===K.length?(0,t.jsx)(xi.BodyRowHelperText,{children:"운영 중인 서비스가 없습니다."}):K.map(e=>(0,t.jsxs)(mC,{type:"button","aria-pressed":T.includes(e),$selected:T.includes(e),onClick:()=>{E(T.includes(e)?T.filter(t=>t!==e):[...T,e])},children:[T.includes(e)&&(0,t.jsx)(lW.default,{sx:{fontSize:16}}),r.default[e].label]},e))})]}),(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"휴대폰 번호를 입력해주세요."}),(0,t.jsx)(mz,{placeholder:"010-0000-0000",value:h,onChange:e=>{var t;t=e.target.value,F(""),u(x8.default.brand.phoneNumber.format(t))}}),(0,t.jsx)(xi.BodyRowErrorText,{$isVisible:M.trim().length>0,children:M})]}),(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"주소"}),(0,t.jsx)(mz,{placeholder:"주소를 입력해주세요",maxLength:500,value:v,onChange:e=>C(e.target.value)})]}),l&&(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"근무 상태"}),(0,t.jsx)(mI,{value:p,onChange:e=>{let t=e.target.value;"RESIGNED"===t&&"RESIGNED"!==n.employmentStatus?X?q("다른 수정 내용을 먼저 [저장]한 뒤 퇴사 처리해 주세요."):m(!0):x(mg.some(e=>e.value===t)?t:"ACTIVE")},children:mg.map(e=>(0,t.jsx)("option",{value:e.value,children:"ACTIVE"===e.value&&"RESIGNED"===n.employmentStatus?"근무 중 (재입사)":e.label},e.value))}),(0,t.jsx)(xi.BodyRowErrorText,{$isVisible:null!==b,children:b}),"RESIGNED"===n.employmentStatus&&null!==n.staffAccountId?(0,t.jsx)(mu,{staffAccountId:n.staffAccountId}):null]}),g&&null!==n.staffAccountId?(0,t.jsx)(g7,{staffAccountId:n.staffAccountId,staffName:n.name,onClose:()=>m(!1),onResigned:()=>{m(!1),null!==W&&en(W),Z()}}):null,(0,t.jsxs)(xi.BodyRow,{children:[(0,t.jsxs)(xi.BodyRowLabelRow,{children:[(0,t.jsx)(xi.BodyRowLabel,{children:"도장 이미지를 업로드 해주세요."}),(0,t.jsxs)(xi.BodyRowHelperText,{children:[(0,t.jsx)(tf.default,{sx:{fontSize:18},style:{marginRight:4,position:"relative",top:3}}),"해당 이미지는 서류에서 근무자의 도장이 필요시 사용됩니다."]})]}),(0,t.jsx)(mT,{children:(0,t.jsxs)(mE,{children:[(0,t.jsx)(mS,{$hasImage:O.trim().length>0,children:0===O.trim().length?(0,t.jsx)(ei.default.Imagesmode,{size:34,color:"#d1d5db"}):(0,t.jsx)(mk,{src:O,alt:"도장 이미지 미리보기"})}),(0,t.jsx)(mD,{onClick:()=>{a.default.modal.organization.imageAdjustUpload.show("seal",O,{saveMode:"external",onProcessedImageDataUrl:e=>{L(e)}})},disabled:B,children:"업로드하기"})]})})]})]}),(0,t.jsxs)(xi.Footer,{children:[(0,t.jsx)(mA,{onClick:()=>{B||J()},disabled:B,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(m$,{onClick:()=>{el()},disabled:B,children:[(0,t.jsx)(lW.default,{sx:{fontSize:20}}),"저장"]})]})]})})}),mb=(0,n.observer)(function(){return"ready"!==a.default.modal.organization.staffAccountAdd.status?null:(0,t.jsx)(mm,{})}),mj=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-2a48cfd9-0"})`
  ${xi.btnStyle}
`,m_=(0,l.default)(xi.Body).withConfig({componentId:"zh__sc-2a48cfd9-1"})`
  overflow-y: auto;
  gap: 28px;
  max-height: calc(100vh - 220px);
`,mw=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-2"})`
  display: flex;
  gap: 24px;

  & > * {
    flex: 1;
  }
`,my=l.default.span.withConfig({componentId:"zh__sc-2a48cfd9-3"})`
  margin-left: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #636978;
`,mv=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-4"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,mC=l.default.button.withConfig({componentId:"zh__sc-2a48cfd9-5"})`
  cursor: pointer;

  display: inline-flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 0 14px;
  border: 1px solid ${({$selected:e})=>e?"#4f39f6":"#d5dbe3"};
  border-radius: 999px;

  font-size: 14px;
  font-weight: 600;
  color: ${({$selected:e})=>e?"#4f39f6":"#636978"};

  background: ${({$selected:e})=>e?"#eef2ff":"#fff"};
`,mI=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-2a48cfd9-6"})`
  ${xi.inputStyle}
  width: 168px;
`,mz=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-2a48cfd9-7"})`
  ${xi.inputStyle}
  width: 100%;
`,mT=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-8"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,mE=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-9"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`,mS=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-10"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 160px;
  height: 160px;
  border: 1px dashed #d1d5db;
  border-radius: 6px;

  background-color: #fff;

  ${({$hasImage:e})=>e?`
        border: 1px solid #d1d5db;
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
`,mk=l.default.img.withConfig({componentId:"zh__sc-2a48cfd9-11"})`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
`,mD=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-2a48cfd9-12"})`
  ${xi.btnStyle}
  width: fit-content;
`,mA=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-2a48cfd9-13"})`
  ${xi.btnStyle}
`,m$=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-2a48cfd9-14"})`
  ${xi.btnStyle}
`;function mR(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(gt,{}),(0,t.jsx)(xU,{}),(0,t.jsx)(x3,{}),(0,t.jsx)(mb,{}),(0,t.jsx)(gW,{})]})}async function mO(e,t){let{preserveServiceWorkerAfterSave:n,resetSort:i,setCurrentServiceType:l,setHighlightedServiceWorkerId:d}=a.default.serviceWorker.info.byServiceWorker;n(e),null!==t&&(l(t),i(),a.default.data.serviceWorker.list.setQuery({serviceType:t}),await a.default.data.serviceWorker.list.refetch()),d(e)}let mL=(0,n.observer)(function(){let{serviceWorkerDraft:e,isSaving:n,isContractRetryPending:i,resetToUploadStep:l,saveServiceWorkerDraft:d}=a.default.modal.serviceWorkerCreate,o=async()=>{let t=e?.serviceType,n=await d();null===n?requestAnimationFrame(()=>{document.querySelector("[data-service-worker-create-field-error]")?.scrollIntoView({block:"center",behavior:"smooth"})}):await mO(n.id,t??null)};return(0,t.jsxs)(mP,{children:[(0,t.jsx)(mM,{disabled:!e||n,onClick:l,children:"다시 업로드하기"}),(0,t.jsxs)(mF,{disabled:!e||n,onClick:()=>void o(),children:[(0,t.jsx)(b.Check,{size:16}),i?"근로계약 다시 저장":"최종확인 및 저장"]})]})}),mP=l.default.div.withConfig({componentId:"zh__sc-d659ae78-0"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 16px;
  border-top: 1px solid #e5e7eb;
`,mN=l.css`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,mM=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-d659ae78-1"})`
  ${mN}
`,mF=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d659ae78-2"})`
  ${mN}
`,mB=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerCreate;if(!e.isDuplicateContractConfirmOpen)return null;let n=async()=>{let t=e.serviceWorkerDraft?.serviceType??null,n=await e.confirmDuplicateContractAddition();null!==n&&await mO(n.id,t)};return(0,t.jsx)(mU,{children:(0,t.jsxs)(mY,{role:"alertdialog","aria-modal":"true","aria-labelledby":"duplicate-contract-title",children:[(0,t.jsxs)(mW,{children:[(0,t.jsx)(mV,{id:"duplicate-contract-title",children:"이미 등록된 제공인력이에요."}),(0,t.jsxs)(mH,{children:["이름·주민등록번호가 같은 제공인력이 이미 등록되어 있습니다.",(0,t.jsx)("br",{}),"같은 사람이라면 새로 등록하지 않고, 기존 제공인력에 이번 근로계약을 다음 회차로 추가합니다."]})]}),(0,t.jsxs)(mG,{children:[(0,t.jsx)(mK,{type:"button",disabled:e.isSaving,onClick:e.cancelDuplicateContractAddition,children:"돌아가기"}),(0,t.jsx)(mX,{type:"button",disabled:e.isSaving,onClick:()=>void n(),children:"기존 제공인력에 계약 추가"})]})]})})}),mU=l.default.div.withConfig({componentId:"zh__sc-b376da4a-0"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,mY=l.default.div.withConfig({componentId:"zh__sc-b376da4a-1"})`
  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  max-width: 520px;
  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,mW=l.default.div.withConfig({componentId:"zh__sc-b376da4a-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,mV=l.default.h3.withConfig({componentId:"zh__sc-b376da4a-3"})`
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,mH=l.default.p.withConfig({componentId:"zh__sc-b376da4a-4"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,mG=l.default.div.withConfig({componentId:"zh__sc-b376da4a-5"})`
  display: flex;
  gap: 12px;
  align-self: stretch;
  justify-content: flex-end;
`,mK=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-b376da4a-6"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,mX=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-b376da4a-7"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,mq=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerCreate;return!0!==e.isDuplicateServiceWorkerDialogOpen?null:(0,t.jsx)(mQ,{children:(0,t.jsxs)(mJ,{children:[(0,t.jsxs)(mZ,{children:[(0,t.jsx)(m0,{children:"같은 정보의 제공인력이 이미 등록되어 있어요."}),(0,t.jsxs)(m1,{children:["이름과 주민등록번호가 같은 제공인력이 이 서비스에 이미 등록되어 있습니다.",(0,t.jsx)("br",{}),"동일한 제공인력이라면 기존 정보에서 계약을 수정하거나 추가해주세요.",(0,t.jsx)("br",{}),"다른 제공인력이라면, 수정 후 신규 등록을 계속할 수 있습니다."]})]}),(0,t.jsxs)(m2,{children:[(0,t.jsx)(m6,{type:"button",onClick:e.cancelDuplicateServiceWorkerRegistration,children:"등록 취소하기"}),(0,t.jsx)(m4,{type:"button",onClick:e.closeDuplicateServiceWorkerDialog,children:"신규 등록 수정하고 계속하기"})]})]})})}),mQ=l.default.div.withConfig({componentId:"zh__sc-75646160-0"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,mJ=l.default.div.withConfig({componentId:"zh__sc-75646160-1"})`
  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,mZ=l.default.div.withConfig({componentId:"zh__sc-75646160-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,m0=l.default.h3.withConfig({componentId:"zh__sc-75646160-3"})`
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,m1=l.default.p.withConfig({componentId:"zh__sc-75646160-4"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,m2=l.default.div.withConfig({componentId:"zh__sc-75646160-5"})`
  display: flex;
  gap: 12px;
  align-self: stretch;
  justify-content: flex-end;
`,m6=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-75646160-6"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,m4=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-75646160-7"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,m5=(0,n.observer)(function(){let{analyzeSelectedFile:e,isAnalyzing:n,selectedFile:i}=a.default.modal.serviceWorkerCreate;return(0,t.jsx)(m3,{children:(0,t.jsxs)(m9,{disabled:null===i||n,onClick:()=>{e()},children:["분석 시작",(0,t.jsx)(J,{size:16})]})})}),m3=l.default.div.withConfig({componentId:"zh__sc-3f938d0e-0"})`
  display: flex;
  gap: 10px;
  align-self: stretch;
  justify-content: flex-end;
`,m9=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-3f938d0e-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:m8}=el.default.file,m7=(0,n.observer)(function(){var e;let n,{clearSelectedFile:i,selectedFile:l,isAnalyzing:d}=a.default.modal.serviceWorkerCreate;if(null===l)return null;let o=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(be,{children:(0,t.jsxs)(bt,{children:[(0,t.jsxs)(bn,{children:[(0,t.jsx)(bi,{children:m8.IMAGE.some(e=>e===o)?(0,t.jsx)(ei.default.Photo,{size:17,color:"#FA8E43"}):m8.AUDIO.some(e=>e===o)?(0,t.jsx)(ei.default.SpeechToText,{size:17,color:"#A855F7"}):m8.DOCUMENT.some(e=>e===o)?(0,t.jsx)(ei.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(bl,{children:(0,t.jsx)(ba,{children:l.name})})]}),(0,t.jsxs)(bd,{onClick:i,disabled:d,children:["삭제",(0,t.jsx)(en.X,{size:16})]})]},`${l.name}-${l.size}-${l.lastModified}`)})}),be=l.default.div.withConfig({componentId:"zh__sc-9108dce9-0"})`
  overflow: auto hidden;
  display: flex;
  gap: 12px;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  padding-bottom: 6px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: #d1d5db;
  }
`,bt=l.default.div.withConfig({componentId:"zh__sc-9108dce9-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,bn=l.default.div.withConfig({componentId:"zh__sc-9108dce9-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,bi=l.default.div.withConfig({componentId:"zh__sc-9108dce9-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,bl=l.default.div.withConfig({componentId:"zh__sc-9108dce9-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,ba=l.default.div.withConfig({componentId:"zh__sc-9108dce9-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,bd=l.default.button.withConfig({componentId:"zh__sc-9108dce9-6"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #45464e;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
  letter-spacing: -1px;

  background: #fff;

  &:hover {
    background: #f9fafb;
  }

  &:active {
    background: #f3f4f6;
  }

  &:disabled {
    border-color: #d1d5db;
    color: #9ca3af;
    background-color: #f9fafb;
  }
`;function bo(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(br,{children:(0,t.jsx)(bs,{$progress:e})})}let br=l.default.div.withConfig({componentId:"zh__sc-4ad7a7ff-0"})`
  overflow: hidden;
  display: flex;

  width: 362px;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,bs=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-4ad7a7ff-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,bc=(0,n.observer)(function({disabled:e=!1}){let{isWindowFileDragging:n}=a.default.ui.layout,{selectedFile:i,isError:l,isAnalyzing:d,abortAnalyze:o}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(bh,{children:[null===i&&!1===l&&(0,t.jsx)(bu,{children:(0,t.jsx)(ep.Upload,{size:26,color:e?"#9CA3AF":bf[100]})}),(0,t.jsxs)(bp,{children:[(0,t.jsx)(bx,{$isError:l,$disabled:e,children:!0===l?"지원하지 않는 파일 형식입니다.":!0===n?"파일을 여기에 놓으면 업로드 됩니다.":!0===d?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요."}),(0,t.jsx)(bg,{$disabled:e,children:null!==i&&!1===d?"새 파일을 업로드하면 기존 파일이 교체됩니다.":"지원 파일 형식: 사진 이미지"})]}),!0===d&&(0,t.jsx)(bo,{}),!0===d&&(0,t.jsx)(bm,{onClick:o,children:"중단하기"})]})}),{PRIMARY:bf}=ex.default.style.color,bh=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,bu=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,bp=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,bx=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-3"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$isError:e,$disabled:t})=>t?"#9CA3AF":e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,bg=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e})=>e?"#9CA3AF":"#99a1af"};
`,bm=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-7f4896ee-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,bb=(0,n.observer)(function({disabled:e=!1}){let{isWindowFileDragging:n}=a.default.ui.layout,{acceptFileTypes:l,setSelectedFile:d,selectedFile:o,isError:r}=a.default.modal.serviceWorkerCreate,s=(0,i.useRef)(null);return(0,X.default)(t=>{if(e||0===t.length)return;let n=t[0];void 0!==n&&d(n)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(bj,{ref:s,type:"file",accept:l,onChange:t=>{if(e)return;let n=Array.from(t.target.files??[]);if(0===n.length)return;let i=n[0];void 0!==i&&(d(i),t.target.value="")},disabled:e}),(0,t.jsxs)(b_,{$isWindowFileDragging:n,$disabled:e,onDragOver:t=>{if(t.preventDefault(),e)return},onDrop:t=>{if(t.preventDefault(),e)return;let n=Array.from(t.dataTransfer.files);if(0===n.length)return;let i=n[0];void 0!==i&&d(i)},onClick:t=>{!e&&t.target instanceof HTMLElement&&(t.target.closest("button")||s.current?.click())},$isError:r,children:[null!==o&&(0,t.jsx)(m7,{}),(0,t.jsx)(bc,{disabled:e}),(0,t.jsx)(m5,{})]})]})}),bj=l.default.input.withConfig({componentId:"zh__sc-37be1ed1-0"})`
  display: none;
`,b_=l.default.div.withConfig({componentId:"zh__sc-37be1ed1-1"})`
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};

  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  min-width: 0;
  padding: 24px 40px;
  border: 1px solid
    ${({$isError:e,$disabled:t})=>t?"#D1D5DB":e?"#ff4d4f":"#4f39f6"};
  border-style: ${({$isWindowFileDragging:e})=>e?"dashed":"solid"};
  border-radius: 16px;

  background: ${({$isWindowFileDragging:e,$isError:t,$disabled:n})=>n?"#F6F8FA":t?"#FFF5F5":e?"#f6f3ff":"#fff"};

  &:hover {
    background-color: ${({$isError:e,$disabled:t})=>t?"#F6F8FA":e?"#FFF5F5":"#f6f3ff"};
  }

  &:active {
    background-color: ${({$isError:e,$disabled:t})=>t?"#F6F8FA":e?"#FFF5F5":"#efeaff"};
  }
`,bw=(0,n.observer)(function(){let{analyzedFile:e,mode:n}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(by,{$flex1:null===e,children:[null===e&&(0,t.jsx)(bv,{children:"renew"===n?"새로운 전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요.":"전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요."}),(0,t.jsx)(bb,{})]})}),by=l.default.div.withConfig({componentId:"zh__sc-f40ff2c5-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 0;

  ${({$flex1:e})=>!0===e&&`
    flex: 1;
  `}
`,bv=l.default.div.withConfig({componentId:"zh__sc-f40ff2c5-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px;
  color: #101828;
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:bC}=el.default.file,bI=(0,n.observer)(function(){var e;let n,{analyzedFile:l}=a.default.modal.serviceWorkerCreate,{ref:d,fire:o}=eP();if((0,i.useEffect)(()=>{null!==l&&o()},[l,o]),null===l)return null;let r=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(bz,{ref:d,children:[(0,t.jsxs)(bT,{children:[(0,t.jsxs)(bE,{children:[(0,t.jsx)(ei.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(bS,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{}),"우측의 [제공인력 기본 정보]가 올바르게 연동되었는지 확인 후, [최종 확인] 버튼을 눌러주세요."]})]}),(0,t.jsxs)(bk,{children:[(0,t.jsxs)(bD,{children:[(0,t.jsx)(ei.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(bA,{children:(0,t.jsxs)(b$,{children:[(0,t.jsxs)(bR,{children:[(0,t.jsx)(bO,{children:bC.IMAGE.some(e=>e===r)?(0,t.jsx)(ei.default.Photo,{size:17,color:"#FA8E43"}):bC.AUDIO.some(e=>e===r)?(0,t.jsx)(ei.default.SpeechToText,{size:17,color:"#A855F7"}):bC.DOCUMENT.some(e=>e===r)?(0,t.jsx)(ei.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(bL,{children:(0,t.jsx)(bP,{children:l.name})})]}),(0,t.jsx)(bN,{children:"추출 완료"})]},`${l.name}-${l.size}-${l.lastModified}`)})]})]})}),bz=l.default.div.withConfig({componentId:"zh__sc-635d6973-0"})`
  overflow: hidden;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
  max-height: 100%;
  padding: 24px 40px;
  border-radius: 16px;

  background: #fff;
`,bT=l.default.div.withConfig({componentId:"zh__sc-635d6973-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,bE=l.default.div.withConfig({componentId:"zh__sc-635d6973-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,bS=l.default.div.withConfig({componentId:"zh__sc-635d6973-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  padding-left: 26px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,bk=l.default.div.withConfig({componentId:"zh__sc-635d6973-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,bD=l.default.div.withConfig({componentId:"zh__sc-635d6973-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,bA=l.default.div.withConfig({componentId:"zh__sc-635d6973-6"})`
  overflow-y: auto;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  row-gap: 12px;
  place-content: flex-start space-between;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
  max-height: 100%;
  padding-right: 4px;
`,b$=l.default.div.withConfig({componentId:"zh__sc-635d6973-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 355px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,bR=l.default.div.withConfig({componentId:"zh__sc-635d6973-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,bO=l.default.div.withConfig({componentId:"zh__sc-635d6973-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,bL=l.default.div.withConfig({componentId:"zh__sc-635d6973-10"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,bP=l.default.div.withConfig({componentId:"zh__sc-635d6973-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,bN=l.default.div.withConfig({componentId:"zh__sc-635d6973-12"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #4f39f6;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #fff;
  letter-spacing: -1px;

  background: #4f39f6;
`,bM=(0,n.observer)(function(){let{analyzedFile:e}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(bF,{children:[null!==e&&(0,t.jsx)(bI,{}),(0,t.jsx)(bw,{})]})}),bF=l.default.div.withConfig({componentId:"zh__sc-9bac733d-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: space-between;

  min-width: 0;
  min-height: 0;
  padding: 32px 24px;
  border-right: 1px solid #e5e7eb;
`;var bB=e.i(99696),bU=e.i(43090),bY=e.i(70793),bW=e.i(93863),bV=e.i(34081);let bH=Object.keys(bB.default).filter(function(e){return e in bB.default}),bG=Object.keys(r.default).filter(function(e){return e in r.default});function bK(e,t,n,i){if("DISABILITY_ACTIVITY_SUPPORT"!==i)return 1;let l=a.default.data.serviceWorker.list.data??[],d=a.default.modal.serviceWorkerDetail.serviceWorker,o=l.find(i=>(0,bW.isSameServiceWorkerIdentity)(e,t,n,i))??(null!==d&&(0,bW.isSameServiceWorkerIdentity)(e,t,n,d)?d:null);return(o?.employmentContracts.filter(e=>e.serviceType===i).length??0)+1}let bX=e=>{let t=e.trim().match(/^(\d{6})-?(\d)(\d{0,6})$/);if(null===t)return"unknown";switch(t[2]){case"1":case"3":return"MALE";case"2":case"4":return"FEMALE";default:return"unknown"}},bq=e=>{switch(e){case"MALE":return"남성";case"FEMALE":return"여성";case"unknown":return""}},bQ=()=>{let e=new Date,[t,n]=e1.default.create(e.getFullYear(),e.getMonth()+1,e.getDate());return null!==t||null===n?null:n},bJ=(0,n.observer)(function(){let e=(a.default.data.organization.serviceList.data?.serviceList??[]).filter(e=>!0===e.operatingStatus).map(e=>e.type),n=e.length>0?e:bG,l=n[0],{serviceWorkerDraft:d,analyzedServiceWorkerDraft:s,mode:c,updateServiceWorkerDraft:f,getServiceWorkerDraftFieldError:h,clearServiceWorkerDraftFieldError:u,isServiceWorkerInfoLocked:p,isContractRetryPending:x,draftServiceEndDate:g,prefilledContractEndDate:m,prefillContractEndDate:b}=a.default.modal.serviceWorkerCreate,j=a.default.modal.serviceWorkerCreate.getServiceEndDate("DISABILITY_ACTIVITY_SUPPORT"),_=(...e)=>(0,bY.clipToServiceEndDate)((0,bY.getDefaultDisabilityActivitySupportContractEndDate)(...e),j,e[0]),w=(0,i.useRef)(!1);(0,i.useEffect)(()=>{if(null===d||w.current||(w.current=!0,""!==(d.firstRegisteredDate??"").trim()))return;let e=bQ();null!==e&&f(t=>({...t,firstRegisteredDate:e}))},[d,f]),(0,i.useEffect)(()=>{null!==d&&void 0===d.serviceType&&void 0!==l&&f(e=>({...e,serviceType:l}))},[l,d,f]);let y=d?.serviceType,v=d?.contractStartDate,C=d?.employmentContractCategory;if((0,i.useEffect)(()=>{b()},[C,v,y,x,c,b]),null===d)return null;let I=d.serviceWorkerName??"",z=d.residentRegistrationNumber??"",T=d.firstRegisteredDate??"",E=d.contractStartDate??"",S=d.contractEndDate??"",k=""===h("contractEndDate")?(0,bV.getServiceEndDateError)(S,g):null,D=""===h("contractStartDate")?(0,bV.getServiceStartDateError)(E,g):null,A=d.phoneNumber??"",$=d.contact??"",R=d.address??"",O=d.postCode??"",L=d.addressDetail??"",P=d.note??"",N=d.serviceType,M=bK(I,z,d.phoneNumber,N),F=void 0===N?null:bH.find(e=>bB.BUSINESS_TYPE_SERVICE_TYPES[e].includes(N))??null,B=d.gender??bX(z),U=(e,t)=>""===h(e)?t:{...t,borderColor:"#ff4d4f",background:"#fff5f5"},Y=e=>{let n=h(e);return""===n?null:(0,t.jsx)(b9,{"data-service-worker-create-field-error":"true",children:n})},W=(e,t)=>{let n=String(t??"").trim();return""!==n&&String(e).trim()===n},V=bQ(),H=""===(s?.firstRegisteredDate??"").trim()&&null!==V&&T===V,G=W(T,s?.firstRegisteredDate??"")||H;return(0,t.jsxs)(b0,{children:[(0,t.jsx)(b1,{children:"인적사항"}),(0,t.jsxs)(b2,{children:[(0,t.jsxs)(b4,{children:[(0,t.jsxs)(b5,{children:["성명",(0,t.jsx)(bZ,{})]}),(0,t.jsx)(o.default.Input.Text,{disabled:p,placeholder:"성명을 입력하세요.",$autoFilled:W(I,s?.serviceWorkerName??""),style:U("serviceWorkerName",je),value:I,onChange:e=>{u("serviceWorkerName"),f(t=>({...t,serviceWorkerName:e.target.value.trim()}))}}),Y("serviceWorkerName")]}),(0,t.jsxs)(b4,{children:[(0,t.jsx)(b5,{children:"주민등록번호"}),(0,t.jsx)(o.default.Input.ResidentRegistrationNumber,{disabled:p,placeholder:"주민등록번호를 입력해주세요.",$autoFilled:W(z,s?.residentRegistrationNumber??""),style:U("residentRegistrationNumber",je),value:z,onChange:e=>{u("residentRegistrationNumber"),f(t=>{let n={...t,residentRegistrationNumber:e};if("DISABILITY_ACTIVITY_SUPPORT"!==t.serviceType||!bU.default.is(e)&&!bU.default.isPartial(e))return"DISABILITY_ACTIVITY_SUPPORT"===t.serviceType&&e1.default.is(t.contractStartDate??"")?{...n,contractEndDate:void 0}:n;let i=bK(t.serviceWorkerName??"",e,t.phoneNumber,t.serviceType),l=_(t.contractStartDate??"",e,i,t.birthDate);return e1.default.is(t.contractStartDate??"")?{...n,contractEndDate:l}:n})}}),Y("residentRegistrationNumber")]}),(0,t.jsxs)(b4,{style:{flex:"none",width:266},children:[(0,t.jsx)(b5,{children:"성별"}),(0,t.jsx)(b7,{$autoFilled:W(bq(B),bq(bX(s?.residentRegistrationNumber??""))),style:je,value:bq(B),placeholder:"주민등록번호와 연동되어 보여집니다.",readOnly:!0})]})]}),(0,t.jsxs)(b2,{children:[(0,t.jsxs)(b4,{children:[(0,t.jsxs)(b5,{children:["휴대폰",(0,t.jsx)(bZ,{})]}),(0,t.jsx)(o.default.Input.Phone,{disabled:p,placeholder:"휴대폰을 입력해주세요.",$autoFilled:W(A,s?.phoneNumber??""),style:U("phoneNumber",je),value:A,onChange:e=>{u("phoneNumber"),f(t=>{let n={...t,phoneNumber:e};if("DISABILITY_ACTIVITY_SUPPORT"!==t.serviceType||!e1.default.is(t.contractStartDate??"")||!n4.default.is(e)||!bU.default.is(t.residentRegistrationNumber)&&!bU.default.isPartial(t.residentRegistrationNumber))return"DISABILITY_ACTIVITY_SUPPORT"===t.serviceType&&e1.default.is(t.contractStartDate??"")?{...n,contractEndDate:void 0}:n;let i=bK(t.serviceWorkerName??"",t.residentRegistrationNumber??"",e,t.serviceType),l=_(t.contractStartDate??"",t.residentRegistrationNumber??"",i,t.birthDate);return{...n,contractEndDate:l}})}}),Y("phoneNumber")]}),(0,t.jsxs)(b4,{children:[(0,t.jsx)(b5,{children:"연락처"}),(0,t.jsx)(o.default.Input.Contact,{disabled:p,placeholder:"연락처를 입력해주세요.",$autoFilled:W($,s?.contact??""),style:U("contact",je),value:$,onChange:e=>{u("contact"),f(t=>({...t,contact:e}))}}),Y("contact")]})]}),(0,t.jsxs)(b6,{children:[(0,t.jsxs)(b2,{children:[(0,t.jsxs)(b4,{children:[(0,t.jsx)(b5,{children:"주소"}),(0,t.jsx)(o.default.Input.Text,{disabled:p,placeholder:"주소를 입력해주세요.",$autoFilled:W(R,s?.address??""),style:U("address",je),value:R,onChange:e=>{u("address"),f(t=>({...t,address:e.target.value}))}}),Y("address")]}),(0,t.jsxs)(b4,{style:{flex:"none",width:191},children:[(0,t.jsx)(b5,{children:"우편번호"}),(0,t.jsx)(o.default.Input.PostCode,{disabled:p,placeholder:"우편번호를 입력해주세요.",$autoFilled:W(O,s?.postCode??""),style:U("postCode",je),value:O,onChange:e=>{u("postCode"),f(t=>({...t,postCode:e}))}}),Y("postCode")]})]}),(0,t.jsx)(b2,{children:(0,t.jsxs)(b4,{children:[(0,t.jsx)(b5,{children:"상세주소"}),(0,t.jsx)(o.default.Input.Text,{disabled:p,placeholder:"상세주소를 입력해주세요.",$autoFilled:W(L,s?.addressDetail??""),style:U("addressDetail",je),value:L,onChange:e=>{u("addressDetail"),f(t=>({...t,addressDetail:e.target.value}))}}),Y("addressDetail")]})}),(0,t.jsx)(b2,{children:(0,t.jsxs)(b4,{children:[(0,t.jsx)(b5,{children:"특이사항(메모)"}),(0,t.jsx)(o.default.Input.Text,{disabled:p,placeholder:"메모가 필요한 사항을 입력해주세요.",$autoFilled:W(P,s?.note??""),style:U("note",je),value:P,onChange:e=>{u("note"),f(t=>({...t,note:e.target.value}))}}),Y("note")]})}),(0,t.jsxs)(b2,{children:[(0,t.jsxs)(b4,{$width:186,children:[(0,t.jsxs)(b5,{children:["접수일",(0,t.jsx)(bZ,{})]}),(0,t.jsx)(o.default.Input.Date,{disabled:p,$autoFilled:G,style:U("firstRegisteredDate",{...je,height:36}),value:T,onChange:e=>{(u("firstRegisteredDate"),""===e.trim())?f(e=>({...e,firstRegisteredDate:void 0})):e1.default.is(e)&&f(t=>({...t,firstRegisteredDate:e}))}}),Y("firstRegisteredDate")]}),(0,t.jsxs)(b4,{$width:197,children:[(0,t.jsx)(b5,{children:"계약 시작일"}),(0,t.jsx)(o.default.Input.Date,{value:E,style:null===D?U("contractStartDate",{...je,height:36}):{...je,height:36,borderColor:"#ff4d4f",background:"#fff5f5"},onChange:e=>{(u("contractStartDate"),""===e.trim())?f(e=>({...e,contractStartDate:void 0,contractEndDate:void 0})):e1.default.is(e)&&f(t=>{let n={...t,contractStartDate:e};if("DISABILITY_ACTIVITY_SUPPORT"!==t.serviceType)return n;let i=bK(t.serviceWorkerName??"",t.residentRegistrationNumber??"",t.phoneNumber,t.serviceType),l=_(e,t.residentRegistrationNumber??"",i,t.birthDate);return{...n,contractEndDate:l}})},showClearButton:"create"===c}),Y("contractStartDate"),null!==D?(0,t.jsx)(b9,{"data-service-worker-create-field-error":"true",children:D}):null]}),(0,t.jsxs)(b4,{$width:197,children:[(0,t.jsx)(b5,{children:"계약 종료일"}),(0,t.jsx)(o.default.Input.Date,{value:S,emptyValueText:"DISABILITY_ACTIVITY_SUPPORT"===N&&M>=4&&e1.default.is(E)&&""===S?"계약기간 없음":void 0,$autoFilled:""!==S&&S===m,style:null===k?U("contractEndDate",{...je,height:36}):{...je,height:36,borderColor:"#ff4d4f",background:"#fff5f5"},onChange:e=>{(u("contractEndDate"),""===e.trim())?f(e=>({...e,contractEndDate:void 0})):e1.default.is(e)&&f(t=>({...t,contractEndDate:e}))}}),Y("contractEndDate"),null!==k?(0,t.jsx)(b9,{"data-service-worker-create-field-error":"true",children:k}):null,null===k&&""===h("contractEndDate")&&null!==g?(0,t.jsxs)(b8,{children:["운영 종료일 ",g.replaceAll("-","."),"까지"]}):null]})]}),(0,t.jsxs)(b2,{children:[(0,t.jsxs)(b4,{children:[(0,t.jsxs)(b5,{children:["사업구분",(0,t.jsx)(bZ,{})]}),(0,t.jsx)(o.default.Input.Select,{style:je,value:F??"",disabled:!0,children:bH.map(e=>(0,t.jsx)("option",{value:e,children:"DAY_CARE"===e?`${bB.default[e].label}서비스`:bB.default[e].label},e))})]}),(0,t.jsxs)(b4,{children:[(0,t.jsxs)(b5,{children:["서비스명",(0,t.jsx)(bZ,{})]}),(0,t.jsxs)(o.default.Input.Select,{style:je,value:N??"",disabled:!0,children:[(0,t.jsx)("option",{value:"",children:"서비스 타입을 선택하세요"}),n.map(e=>(0,t.jsx)("option",{value:e,children:"MEAL"===e||"NUTRITION"===e?`${r.default[e].label}관리 서비스`:r.default[e].label},e))]})]}),(0,t.jsxs)(b4,{children:[(0,t.jsxs)(b5,{children:["서비스코드",(0,t.jsx)(bZ,{})]}),(0,t.jsx)(o.default.Input.Select,{style:je,value:N??"",disabled:!0,children:void 0===N?null:(0,t.jsx)("option",{value:N,children:r.default[N].code})})]}),(0,t.jsxs)(b4,{children:[(0,t.jsxs)(b5,{children:["서비스유형",(0,t.jsx)(bZ,{})]}),(0,t.jsx)(o.default.Input.Select,{style:je,value:N??"",disabled:!0,children:void 0===N?null:(0,t.jsx)("option",{value:N,children:"DISABILITY_ACTIVITY_SUPPORT"===N?"활동보조":`${r.default[N].label}관리 서비스`})})]})]})]})]})});function bZ(){return(0,t.jsx)(b3,{children:" *"})}let b0=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,b1=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,b2=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-2"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,b6=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-3"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: stretch;
`,b4=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-4"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
  justify-content: flex-start;

  min-height: 59px;

  ${({$width:e})=>void 0!==e?`
        width: ${e}px;
      `:`
        flex: 1;
        min-width: 0;
      `}
`,b5=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-5"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,b3=l.default.span.withConfig({componentId:"zh__sc-b1e5df68-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,b9=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-7"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,b8=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-8"})`
  font-size: 12px;
  line-height: 16px;
  color: #6a7282;
`,b7=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-b1e5df68-9"})`
  &::placeholder {
    color: #0a0a0a;
  }
`,je={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16,maxHeight:36};var jt=e.i(35997);let jn="EARNED_INCOME",ji="BUSINESS_INCOME",jl="OTHER_INCOME",ja="FLAT_RATE",jd="ORGANIZATION_STANDARD",jo="ALWAYS_PAID",jr="ALWAYS_NOT_PAID",js="MONTHLY_60_HOURS_OR_MORE",jc="MONTHLY_64_HOURS_OR_MORE",jf="MONTHLY_65_HOURS_OR_MORE",jh="ALWAYS_ACCRUED",ju="NOT_ACCRUED",{SERVICE_WORKER_EMPLOYMENT_CONTRACT_CATEGORY:jp}=ex.default.enums,jx=Object.keys(jp).filter(e=>e in jp).map(e=>({key:e,label:jp[e].label}));function jg(e){return e in jt.default}let jm=Object.keys(jt.default).filter(jg),jb=[{key:js,label:"월 60시간 이상 적립"},{key:jc,label:"월 64시간 이상"},{key:jf,label:"월 65시간 이상"},{key:jh,label:"항상 적립"},{key:ju,label:"미적립"}],jj=[{key:jn,label:"근로소득"},{key:ji,label:"사업소득"},{key:jl,label:"기타소득"},{key:ja,label:"정액제"}],j_=[{key:jd,label:"기관 기준"},{key:jo,label:"항상 지급"},{key:jr,label:"항상 미지급"}],jw=[{key:"nationalPensionEnrolled",label:"국민연금"},{key:"healthInsuranceEnrolled",label:"건강보험"},{key:"employmentInsuranceEnrolled",label:"고용보험"},{key:"industrialAccidentInsuranceEnrolled",label:"산재보험"}],jy=["신규","보수"],jv=function(){let{matchingClientName:e}=a.default.modal.serviceWorkerCreate,[n,l]=(0,i.useState)({nationalPensionEnrolled:"",healthInsuranceEnrolled:"",employmentInsuranceEnrolled:"",industrialAccidentInsuranceEnrolled:""}),[d,r]=(0,i.useState)({nationalPensionEnrolled:"",healthInsuranceEnrolled:"",employmentInsuranceEnrolled:"",industrialAccidentInsuranceEnrolled:""}),{serviceWorkerDraft:s,analyzedServiceWorkerDraft:c,isServiceWorkerInfoLocked:f,updateServiceWorkerDraft:h,getServiceWorkerDraftFieldError:u,clearServiceWorkerDraftFieldError:p}=a.default.modal.serviceWorkerCreate;if(null===s)return null;let x="DISABILITY_ACTIVITY_SUPPORT"===s.serviceType,g=""!==(s.contractStartDate??"").trim(),m=void 0===s.isTrainee?void 0:s.isTrainee?"신규":"보수",b=s.bankName??th.default.SELECT_EMPTY_VALUE,j=s.accountNumber??"",_=s.accountHolder??"",w=s.employmentContractCategory??"GENERAL",y=s.isTrainee,v=s.criminalRecordChecked??!1,C=s.deviceType,I=s.terminalNumber??"",z=s.retirementReserveContractType,T=s.incomeTaxCategory,E=s.incomeTaxFlatAmount??"",S=s.incomeTaxRate??"",k=s.leaveAllowancePaymentMethod,D=s.isNonTaxableExclusionTarget,A=s.qualificationInfo??"",$=s.relatedDocumentInfo??"",R=e=>{let n=u(e);return""===n?null:(0,t.jsx)(jY,{"data-service-worker-create-field-error":"true",children:n})},O=(e,t)=>{let n=String(t??"").trim();return""!==n&&e.trim()===n},L=e=>""===u(e)?jQ:{...jQ,borderColor:"#ff4d4f",background:"#fff5f5"};return(0,t.jsxs)(jI,{children:[(0,t.jsx)(jz,{children:"계좌∙자격 및 기타 정보"}),(0,t.jsxs)(jT,{children:[(0,t.jsxs)(jE,{$width:191,children:[(0,t.jsx)(jS,{children:"은행명"}),(0,t.jsxs)(jD,{disabled:f,style:L("bankName"),$isEmptySelected:b===th.default.SELECT_EMPTY_VALUE,value:b,onChange:e=>{p("bankName"),h(t=>({...t,bankName:e.target.value===th.default.SELECT_EMPTY_VALUE?void 0:jg(e.target.value)?e.target.value:void 0}))},children:[(0,t.jsx)("option",{value:th.default.SELECT_EMPTY_VALUE,"data-trigger-label":"은행을 선택해주세요.",children:"선택안함"}),jm.map(e=>(0,t.jsx)("option",{value:e,children:jt.default[e].label},e))]}),R("bankName")]}),(0,t.jsxs)(jE,{children:[(0,t.jsx)(jS,{children:"계좌번호"}),(0,t.jsx)(o.default.Input.Text,{disabled:f,placeholder:"계좌번호를 입력해주세요.",$autoFilled:O(j,c?.accountNumber),style:L("accountNumber"),value:j,onChange:e=>{p("accountNumber"),h(t=>({...t,accountNumber:e.target.value}))}}),R("accountNumber")]}),(0,t.jsxs)(jE,{children:[(0,t.jsx)(jS,{children:"예금주"}),(0,t.jsx)(o.default.Input.Text,{disabled:f,placeholder:"예금주를 입력해주세요.",$autoFilled:O(_,c?.accountHolder),style:L("accountHolder"),value:_,onChange:e=>{p("accountHolder"),h(t=>({...t,accountHolder:e.target.value}))}}),R("accountHolder")]})]}),(0,t.jsxs)(jT,{children:[(0,t.jsxs)(jE,{$width:228,children:[(0,t.jsx)(jS,{children:"제공인력 자격정보"}),(0,t.jsx)(o.default.Input.Text,{placeholder:"자격정보를 입력해주세요.",style:jQ,value:A,onChange:e=>h(t=>({...t,qualificationInfo:e.target.value}))})]}),(0,t.jsx)(jE,{$width:158,children:x&&g?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(jS,{children:"교육 종류"}),(0,t.jsxs)(jA,{$isEmptySelected:void 0===m,style:jQ,value:m??th.default.SELECT_EMPTY_VALUE,onChange:e=>{let t=e.target.value;t===th.default.SELECT_EMPTY_VALUE?h(e=>({...e,isTrainee:void 0})):("신규"===t||"보수"===t)&&h(e=>({...e,isTrainee:"신규"===t}))},children:[(0,t.jsx)("option",{value:th.default.SELECT_EMPTY_VALUE,children:"미정"}),jy.map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(jS,{children:["실습 여부 ",(0,t.jsx)(jC,{})]}),(0,t.jsxs)(j$,{children:[(0,t.jsxs)(jF,{children:[(0,t.jsx)(jB,{name:"service-worker-training",checked:!0===y,onChange:()=>{p("isTrainee"),h(e=>({...e,isTrainee:!0}))}}),"이수"]}),(0,t.jsxs)(jF,{children:[(0,t.jsx)(jB,{name:"service-worker-training",checked:!1===y,onChange:()=>{p("isTrainee"),h(e=>({...e,isTrainee:!1}))}}),"미이수"]})]}),R("isTrainee")]})}),(0,t.jsxs)(jE,{children:[(0,t.jsx)(jS,{children:"범죄경력 조회여부"}),(0,t.jsx)(j$,{children:(0,t.jsxs)(jF,{children:[(0,t.jsx)(jU,{checked:v,onChange:e=>h(t=>({...t,criminalRecordChecked:e.target.checked}))}),"조회 완료"]})})]}),(0,t.jsxs)(jE,{$width:228,children:[(0,t.jsx)(jS,{children:"관련서류 제출여부"}),(0,t.jsx)(o.default.Input.Text,{placeholder:"제출여부를 입력해주세요.",style:jQ,value:$,onChange:e=>h(t=>({...t,relatedDocumentInfo:e.target.value}))})]})]}),(0,t.jsxs)(jT,{children:[(0,t.jsxs)(jE,{$width:186,children:[(0,t.jsxs)(jS,{children:["단말기 정보 ",(0,t.jsx)(jC,{})]}),(0,t.jsxs)(j$,{children:[(0,t.jsxs)(jF,{children:[(0,t.jsx)(jB,{name:"service-worker-device-type",checked:"SMARTPHONE"===C,onChange:()=>{p("deviceType"),h(e=>({...e,deviceType:"SMARTPHONE",terminalNumber:""}))}}),"스마트폰"]}),(0,t.jsxs)(jF,{children:[(0,t.jsx)(jB,{name:"service-worker-device-type",checked:"TERMINAL"===C,onChange:()=>{p("deviceType"),h(e=>({...e,deviceType:"TERMINAL"}))}}),"단말기"]})]}),R("deviceType")]}),(0,t.jsxs)(jE,{$width:228,children:[(0,t.jsx)(jS,{children:"단말기 번호"}),(0,t.jsx)(o.default.Input.Text,{disabled:"TERMINAL"!==C,placeholder:"번호를 입력해주세요.",style:jQ,value:I,onChange:e=>h(t=>({...t,terminalNumber:e.target.value}))})]})]}),(0,t.jsxs)(jT,{children:[!x&&(0,t.jsxs)(jE,{$width:207,children:[(0,t.jsxs)(jS,{children:["인력 유형 ",(0,t.jsx)(jC,{})]}),(0,t.jsx)(j$,{children:jx.map(e=>(0,t.jsxs)(jF,{children:[(0,t.jsx)(jB,{disabled:f,name:"service-worker-employment-contract-category",checked:w===e.key,onChange:()=>{p("employmentContractCategory"),h(t=>({...t,employmentContractCategory:e.key}))}}),e.label]},e.key))}),R("employmentContractCategory")]}),(0,t.jsxs)(jR,{children:[(0,t.jsx)(jS,{children:"연결할 이용자"}),(0,t.jsx)(jO,{$isEmptySelected:null===e,value:e??th.default.SELECT_EMPTY_VALUE,disabled:!0,children:(0,t.jsx)("option",{value:e??th.default.SELECT_EMPTY_VALUE,"data-trigger-label":"이용자를 선택하세요.",disabled:!0,children:e??"선택안함"})})]})]}),(0,t.jsx)(jz,{children:"급여 관련 사항"}),(0,t.jsx)(jT,{children:(0,t.jsxs)(jE,{children:[(0,t.jsxs)(jS,{children:["퇴직적립금 관련 계약 ",(0,t.jsx)(jC,{})]}),(0,t.jsx)(j$,{children:jb.map(e=>(0,t.jsxs)(jF,{children:[(0,t.jsx)(jB,{name:"service-worker-retirement-reserve",checked:z===e.key,onChange:()=>{p("retirementReserveContractType"),h(t=>({...t,retirementReserveContractType:e.key}))}}),e.label]},e.key))}),R("retirementReserveContractType")]})}),(0,t.jsxs)(jT,{children:[(0,t.jsxs)(jL,{children:[(0,t.jsxs)(jS,{children:["소득세 구분 ",(0,t.jsx)(jC,{})]}),(0,t.jsxs)(jP,{children:[jj.map(e=>(0,t.jsxs)(jF,{children:[(0,t.jsx)(jB,{name:"service-worker-income-tax-type",checked:T===e.key,onChange:()=>{p("incomeTaxCategory"),h(t=>({...t,incomeTaxCategory:e.key}))}}),e.label]},e.key)),(0,t.jsx)(o.default.Input.Text,{disabled:T!==ja,placeholder:"금액을 입력하세요.",style:jJ,value:E,onChange:e=>h(t=>({...t,incomeTaxFlatAmount:e.target.value}))}),(0,t.jsx)(jM,{children:"원"})]}),R("incomeTaxCategory")]}),(0,t.jsxs)(jE,{$width:184,children:[(0,t.jsx)(jS,{children:"소득세 적용비율"}),(0,t.jsxs)(jN,{children:[(0,t.jsx)(o.default.Input.Text,{placeholder:"100",style:jZ,value:S,onChange:e=>h(t=>({...t,incomeTaxRate:e.target.value}))}),(0,t.jsx)(jM,{children:"%"})]})]})]}),(0,t.jsxs)(jT,{children:[(0,t.jsxs)(jE,{$width:338,children:[(0,t.jsxs)(jS,{children:["연월차수당 지급방식 ",(0,t.jsx)(jC,{})]}),(0,t.jsx)(j$,{children:j_.map(e=>(0,t.jsxs)(jF,{children:[(0,t.jsx)(jB,{name:"service-worker-annual-leave-allowance",checked:k===e.key,onChange:()=>{p("leaveAllowancePaymentMethod"),h(t=>({...t,leaveAllowancePaymentMethod:e.key}))}}),e.label]},e.key))}),R("leaveAllowancePaymentMethod")]}),(0,t.jsxs)(jE,{children:[(0,t.jsxs)(jS,{children:["비과세급여 적용 ",(0,t.jsx)(jC,{})]}),(0,t.jsx)(j$,{children:(0,t.jsxs)(jF,{children:[(0,t.jsx)(jU,{checked:D??!1,onChange:e=>{p("isNonTaxableExclusionTarget"),h(t=>({...t,isNonTaxableExclusionTarget:e.target.checked}))}}),"비과세 처리 적용대상 제외"]})}),R("isNonTaxableExclusionTarget")]})]}),(0,t.jsx)(jz,{children:"사회보험"}),(0,t.jsxs)(jW,{children:[(0,t.jsxs)(jV,{children:[(0,t.jsx)(jH,{children:"구분"}),(0,t.jsx)(jH,{children:"가입 여부"}),(0,t.jsx)(jH,{children:"보수월액(원)"}),(0,t.jsx)(jH,{children:"비고"})]}),jw.map(({key:e,label:i})=>(0,t.jsxs)(jG,{children:[(0,t.jsx)(jK,{children:i}),(0,t.jsx)(jK,{children:(0,t.jsxs)(jX,{children:[(0,t.jsx)(jU,{checked:s[e]??!0,onChange:t=>h(n=>({...n,[e]:t.target.checked}))}),"가입"]})}),(0,t.jsx)(jK,{children:(0,t.jsx)(jq,{value:n[e],onChange:t=>l(n=>({...n,[e]:t.target.value}))})}),(0,t.jsx)(jK,{children:(0,t.jsx)(jq,{value:d[e],onChange:t=>r(n=>({...n,[e]:t.target.value}))})})]},e))]})]})};function jC(){return(0,t.jsx)(jk,{children:" *"})}let jI=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,jz=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-1"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,jT=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-2"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,jE=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-3"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  min-width: 0;

  ${({$width:e})=>void 0!==e?`
        flex: none;
        width: ${e}px;
      `:`
        flex: 1;
      `}
`,jS=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-4"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,jk=l.default.span.withConfig({componentId:"zh__sc-5d9d83cf-5"})`
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: #e7000b;
`,jD=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-5d9d83cf-6"})`
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,jA=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-5d9d83cf-7"})`
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,j$=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-8"})`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 36px;
`,jR=(0,l.default)(jE).withConfig({componentId:"zh__sc-5d9d83cf-9"})`
  flex: none;
  width: 200px;
`,jO=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-5d9d83cf-10"})`
  width: 200px;
  min-height: 36px;
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,jL=(0,l.default)(jE).withConfig({componentId:"zh__sc-5d9d83cf-11"})`
  min-width: 0;
`,jP=(0,l.default)(j$).withConfig({componentId:"zh__sc-5d9d83cf-12"})`
  width: 100%;
`,jN=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-13"})`
  display: flex;
  gap: 4px;
  align-items: center;
  height: 36px;
`,jM=l.default.span.withConfig({componentId:"zh__sc-5d9d83cf-14"})`
  flex-shrink: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,jF=l.default.label.withConfig({componentId:"zh__sc-5d9d83cf-15"})`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  white-space: nowrap;
`,jB=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-5d9d83cf-16"})`
  width: 20px;
  height: 20px;
`,jU=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-5d9d83cf-17"})`
  width: 24px;
  height: 24px;
`,jY=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-18"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,jW=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-19"})`
  overflow: hidden;
  align-self: stretch;
`,jV=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-20"})`
  display: grid;
  grid-template-columns: 1fr 1.15fr 1.35fr 1.35fr;
  border-bottom: 1px solid #e5e7eb;
  background: #f3f4f6;
`,jH=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-21"})`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 32px;

  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #0a0a0a;
`,jG=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-22"})`
  display: grid;
  grid-template-columns: 1fr 1.15fr 1.35fr 1.35fr;
  min-height: 64px;

  &:not(:last-child) {
    border-bottom: 1px solid #e5e7eb;
  }
`,jK=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-23"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 12px;

  font-size: 16px;
  line-height: 20px;
  color: #0a0a0a;
`,jX=l.default.label.withConfig({componentId:"zh__sc-5d9d83cf-24"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
`,jq=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-5d9d83cf-25"})`
  width: 100%;
  height: 36px;
  padding: 4px 16px;
`,jQ={display:"flex",alignItems:"center",alignSelf:"stretch",width:"100%",height:36,padding:"4px 16px",fontSize:16},jJ={...jQ,flex:"none",width:160},jZ={...jQ,flex:"none",width:"100%"},j0=()=>a.default.ui.serviceRegion.codes,j1=["PHYSICAL_ACTIVITY_SUPPORT","HOUSEKEEPING_SUPPORT","SOCIAL_ACTIVITY_SUPPORT","OTHER"],j2={PHYSICAL_ACTIVITY_SUPPORT:"physicalActivityDescription",HOUSEKEEPING_SUPPORT:"housekeepingActivityDescription",SOCIAL_ACTIVITY_SUPPORT:"socialActivityDescription",OTHER:"otherActivityDescription"},j6=["소지","미소지"],j4=["ALL","MALE","FEMALE"],j5=["TWENTIES_OR_YONGER","THIRTIES","FORTIES","FIFTIES","SIXTIES","SEVENTIES_OR_OLDER"],j3=(0,n.observer)(function(){let{serviceWorkerDraft:e,updateServiceWorkerDraft:n,getServiceWorkerDraftFieldError:i,clearServiceWorkerDraftFieldError:l}=a.default.modal.serviceWorkerCreate;if(null===e)return null;let d=e.availableTimes??[],o=e.regions??[],r=e.careTypes??[],s=j0().every(e=>o.includes(e)),c=e.desiredClientGender,f=e.desiredAgeRanges??[],h=j1.every(e=>r.includes(e)),u=e.hasVehicle,p=e.preferredWeeklyWorkingHours,x="DISABILITY_ACTIVITY_SUPPORT"===e.serviceType,g=""!==(e.contractStartDate??"").trim(),m=(e,t)=>t.includes(e)?t.filter(t=>t!==e):[...t,e],b=i("availableTimes"),j=i("preferredWeeklyWorkingHours"),_=i("regions"),w=i("careTypes"),y=i("desiredClientGender"),v=i("desiredAgeRanges"),C=i("hasVehicle");return(0,t.jsxs)(j9,{children:[(0,t.jsxs)(j8,{children:[(0,t.jsxs)(j7,{children:["근무 가능 시간",x&&(0,t.jsx)(_e,{})]}),(0,t.jsxs)(_n,{children:[(0,t.jsx)(tf.default,{sx:{fontSize:20}}),(0,t.jsx)(_i,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]})]}),(0,t.jsx)(_l,{value:d,onChange:e=>{let t=e.target.value;l("availableTimes"),n(e=>({...e,availableTimes:t}))}}),""!==b&&(0,t.jsx)(_m,{"data-service-worker-create-field-error":"true",children:b}),(0,t.jsxs)(_a,{children:[(0,t.jsx)(_d,{children:"희망 근로 시간"}),(0,t.jsxs)(_o,{children:[(0,t.jsx)(_s,{children:"총"}),(0,t.jsx)(_r,{value:void 0===p?"":String(p),placeholder:"00",maxLength:2,style:""===j?void 0:{borderColor:"#ff4d4f",background:"#fff5f5"},onChange:e=>{let t=e.target.value.replace(/\D/g,"");if(""===t){l("preferredWeeklyWorkingHours"),n(e=>({...e,preferredWeeklyWorkingHours:void 0}));return}let i=Math.min(Number(t),99);l("preferredWeeklyWorkingHours"),n(e=>({...e,preferredWeeklyWorkingHours:i}))}}),(0,t.jsx)(_s,{children:"시간"})]})]}),""!==j&&(0,t.jsx)(_m,{"data-service-worker-create-field-error":"true",children:j}),(0,t.jsxs)(_c,{children:[(0,t.jsxs)(_f,{children:["서비스 가능 지역 (복수 선택 가능)",x&&(0,t.jsx)(_e,{})]}),(0,t.jsxs)(_h,{children:[(0,t.jsxs)(_u,{children:[(0,t.jsx)(_b,{checked:s,onChange:()=>{l("regions"),n(e=>({...e,regions:s?[]:j0()}))}}),(0,t.jsx)(_x,{children:"전체 선택"})]}),j0().map(e=>(0,t.jsxs)(_u,{children:[(0,t.jsx)(_b,{checked:o.includes(e),onChange:()=>{let t=m(e,o);l("regions"),n(e=>({...e,regions:t}))}}),(0,t.jsx)(_x,{children:a.default.ui.serviceRegion.label(e)})]},e))]}),""!==_&&(0,t.jsx)(_m,{"data-service-worker-create-field-error":"true",children:_})]}),x&&(0,t.jsxs)(_c,{children:[(0,t.jsxs)(_f,{children:["가능 활동 내용 (복수 선택 가능) ",(0,t.jsx)(_e,{})]}),(0,t.jsxs)(_h,{children:[(0,t.jsxs)(_u,{children:[(0,t.jsx)(_b,{checked:h,onChange:()=>{l("careTypes"),n(e=>({...e,careTypes:h?[]:[...j1]}))}}),(0,t.jsx)(_x,{children:"전체 선택"})]}),j1.map(i=>(0,t.jsxs)(_u,{children:[(0,t.jsx)(_b,{checked:r.includes(i),onChange:()=>{let e=m(i,r);l("careTypes"),n(t=>({...t,careTypes:e}))}}),(0,t.jsx)(_x,{children:"PHYSICAL_ACTIVITY_SUPPORT"===i?"신체 활동":tx.default[i].label}),(0,t.jsx)(_p,{value:e[j2[i]]??"",placeholder:"관련 내용을 입력해주세요.",onChange:e=>n(t=>({...t,[j2[i]]:e.target.value}))})]},i))]}),""!==w&&(0,t.jsx)(_m,{"data-service-worker-create-field-error":"true",children:w})]}),!x&&(0,t.jsxs)(_c,{children:[(0,t.jsxs)(_f,{children:["차량 소지 ",(0,t.jsx)(_e,{})]}),(0,t.jsx)(_h,{children:j6.map(e=>(0,t.jsxs)(_u,{children:[(0,t.jsx)(_j,{name:"service-worker-car-ownership",checked:u===("소지"===e),onChange:()=>{l("hasVehicle"),n(t=>({...t,hasVehicle:"소지"===e}))}}),(0,t.jsx)(_x,{children:e})]},e))}),""!==C&&(0,t.jsx)(_m,{"data-service-worker-create-field-error":"true",children:C})]}),x&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(_c,{children:[(0,t.jsxs)(_f,{children:["이용자 희망 성별 ",(0,t.jsx)(_e,{})]}),(0,t.jsx)(_h,{children:j4.map(e=>(0,t.jsxs)(_u,{children:[(0,t.jsx)(_j,{name:"service-worker-client-gender",checked:c===e,onChange:()=>{l("desiredClientGender"),n(t=>({...t,desiredClientGender:e}))}}),(0,t.jsx)(_x,{children:"ALL"===e?"전체":tp.default[e].label})]},e))}),""!==y&&(0,t.jsx)(_m,{"data-service-worker-create-field-error":"true",children:y})]}),(0,t.jsxs)(_c,{children:[(0,t.jsxs)(_f,{children:["이용자 희망 연령 (복수 선택 가능) ",(0,t.jsx)(_e,{})]}),(0,t.jsxs)(_h,{children:[(0,t.jsxs)(_u,{children:[(0,t.jsx)(_b,{checked:f.length===j5.length,onChange:()=>{l("desiredAgeRanges"),n(e=>({...e,desiredAgeRanges:f.length===j5.length?[]:[...j5]}))}}),(0,t.jsx)(_x,{children:"전체 선택"})]}),j5.map(e=>(0,t.jsxs)(_u,{children:[(0,t.jsx)(_b,{checked:f.includes(e),onChange:()=>{l("desiredAgeRanges"),n(t=>({...t,desiredAgeRanges:m(e,f)}))}}),(0,t.jsx)(_x,{children:"TWENTIES_OR_YONGER"===e||"SEVENTIES_OR_OLDER"===e?tu.default[e].label.replace(" 이하","").replace(" 이상",""):tu.default[e].label})]},e))]}),""!==v&&(0,t.jsx)(_m,{"data-service-worker-create-field-error":"true",children:v})]})]}),g&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(_g,{}),(0,t.jsx)(jv,{})]})]})}),j9=l.default.div.withConfig({componentId:"zh__sc-1335978d-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,j8=l.default.div.withConfig({componentId:"zh__sc-1335978d-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;

  height: 30px;
`,j7=l.default.div.withConfig({componentId:"zh__sc-1335978d-2"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`;function _e(){return(0,t.jsx)(_t,{children:" *"})}let _t=l.default.span.withConfig({componentId:"zh__sc-1335978d-3"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,_n=l.default.div.withConfig({componentId:"zh__sc-1335978d-4"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;

  color: #464c53;
`,_i=l.default.div.withConfig({componentId:"zh__sc-1335978d-5"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
`,_l=(0,l.default)(o.default.Input.TimeSlider).withConfig({componentId:"zh__sc-1335978d-6"})`
  align-self: stretch;
`,_a=l.default.div.withConfig({componentId:"zh__sc-1335978d-7"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,_d=l.default.div.withConfig({componentId:"zh__sc-1335978d-8"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,_o=l.default.div.withConfig({componentId:"zh__sc-1335978d-9"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,_r=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-1335978d-10"})`
  width: 59px;
  height: 36px;
  text-align: center;
`,_s=l.default.div.withConfig({componentId:"zh__sc-1335978d-11"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,_c=l.default.div.withConfig({componentId:"zh__sc-1335978d-12"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,_f=l.default.div.withConfig({componentId:"zh__sc-1335978d-13"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,_h=l.default.div.withConfig({componentId:"zh__sc-1335978d-14"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;
`,_u=l.default.label.withConfig({componentId:"zh__sc-1335978d-15"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,_p=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-1335978d-16"})`
  width: 193px;
  height: 36px;
  padding: 4px 16px;
`,_x=l.default.span.withConfig({componentId:"zh__sc-1335978d-17"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,_g=l.default.div.withConfig({componentId:"zh__sc-1335978d-18"})`
  flex-shrink: 0;
  align-self: stretch;

  height: 1px;
  min-height: 1px;

  background: #e5e7eb;
`,_m=l.default.div.withConfig({componentId:"zh__sc-1335978d-19"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,_b=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-1335978d-20"})`
  width: 24px;
  height: 24px;
`,_j=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-1335978d-21"})`
  width: 20px;
  height: 20px;
`,__=(0,n.observer)(function(){return(0,t.jsxs)(_w,{children:[(0,t.jsx)(_y,{children:"제공인력 기본 정보"}),a.default.modal.serviceWorkerCreate.isContractRetryPending?(0,t.jsx)(_v,{role:"status",children:"제공인력 정보는 이미 저장됐어요. 다시 저장하면 근로계약만 등록해요. 제공인력 정보는 등록을 마친 뒤 제공인력 상세에서 고칠 수 있어요."}):null,(0,t.jsx)(bJ,{}),(0,t.jsx)(_C,{}),(0,t.jsx)(j3,{})]})}),_w=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  align-self: stretch;

  width: 856px;
  min-height: 0;
  padding: 32px 24px;

  background: #fff;
  box-shadow: -8px 0 8px 0 rgb(0 0 0 / 8%);
`,_y=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,_v=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-2"})`
  align-self: stretch;

  padding: 12px 16px;
  border: 1px solid #fcd34d;
  border-radius: 8px;

  font-size: 14px;
  line-height: 20px;
  color: #92400e;

  background: #fffbeb;
`,_C=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-3"})`
  flex-shrink: 0;

  width: 100%;
  height: 1px;
  min-height: 1px;

  background: #e5e7eb;
`,_I=(0,n.observer)(function(){let{serviceWorkerDraft:e}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(_z,{children:[(0,t.jsx)(bM,{}),e&&(0,t.jsx)(__,{})]})}),_z=l.default.div.withConfig({componentId:"zh__sc-e5134819-0"})`
  overflow: hidden;
  display: flex;
  flex: 1 1 auto;
  align-self: stretch;
  justify-content: center;

  min-height: 0;
  max-height: none;

  background: #f9fafb;
`;function _T(){let{close:e,mode:n}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(_E,{children:[(0,t.jsx)(_S,{children:"renew"===n?"제공인력 재계약하기":"contract"===n?"제공인력 계약하기":"신규 제공인력 등록하기"}),(0,t.jsxs)(_k,{onClick:e,children:[(0,t.jsx)(en.X,{size:16}),"닫기"]})]})}let _E=l.default.div.withConfig({componentId:"zh__sc-e97a276c-0"})`
  display: flex;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  border-radius: 16px 16px 0 0;

  background: #fff;
`,_S=l.default.div.withConfig({componentId:"zh__sc-e97a276c-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px; /* 155.556% */
  color: #101828;
  letter-spacing: -0.439px;
`,_k=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-e97a276c-2"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,_D=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerCreate,{status:n}=e,l=(0,i.useRef)(null);return((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(l.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)?null:(0,t.jsx)(d.default,{children:(0,t.jsxs)(_A,{ref:l,children:[(0,t.jsx)(_T,{}),(0,t.jsx)(_I,{}),(0,t.jsx)(mL,{}),(0,t.jsx)(s,{currentServiceType:e.selectedServiceType,detectedServiceType:e.pendingDetectedServiceType??e.selectedServiceType,isContinueDisabled:!e.isPendingDetectedServiceAvailable,isOpen:e.isServiceTypeMismatchDialogOpen,onCancel:e.cancelServiceTypeMismatchRegistration,onContinue:e.confirmServiceTypeMismatchRegistration,registrationTarget:"제공인력"}),(0,t.jsx)(mq,{}),(0,t.jsx)(mB,{})]})})}),_A=l.default.div.withConfig({componentId:"zh__sc-cb4ab18d-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;

  /* 1920 기준 1712px. 노트북(1440·1366px)에서는 화면 안으로 줄여 [최종확인 및 저장]이 밖으로 밀리지 않게 한다. */
  width: min(1712px, calc(100vw - 32px));
  min-width: 1200px;
  height: 90vh;
  min-height: 830px;
  max-height: 90vh;
  border-radius: 8px;

  background: #fff;
`;function _$({type:e,onClose:n}){let l=a.default.modal.serviceWorkerDetail.serviceWorker,[o,r]=(0,i.useState)([]),[s,c]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let t=!0;return(async()=>{var n,i,d,o,s;let f;if(null===l)return c(!1);if("address"===e){let e,o,s,f,[h,u]=await Promise.all([a.default.serviceWorker.info.byServiceWorker.getServiceWorkerChangeHistory(l.id,"address"),a.default.serviceWorker.info.byServiceWorker.getServiceWorkerChangeHistory(l.id,"addressDetail")]);if(!t||(c(!1),null!==h[0]||null!==u[0]||null===h[1]||null===u[1]))return;r((n=h[1],i=u[1],d=l.createdAt,e=new Map,(o=(t,n)=>{t.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).forEach(({oldValue:t,newValue:i,createdAt:l},a)=>{if(0===a&&null!==t&&""!==t.trim()){let i=e.get(d)??{};i[n]=t.trim(),e.set(d,i)}if(null!==i&&""!==i.trim()){let t=e.get(l)??{};t[n]=i.trim(),e.set(l,t)}})})(n,"address"),o(i,"addressDetail"),s="",f="",Array.from(e.entries()).sort(([e],[t])=>new Date(e).getTime()-new Date(t).getTime()).map(([e,t])=>(s=t.address??s,f=t.addressDetail??f,{address:s,addressDetail:f,changedAt:e,value:""})).reverse()));return}let[h,u]=await a.default.serviceWorker.info.byServiceWorker.getServiceWorkerChangeHistory(l.id,"phoneNumber");t&&(c(!1),null===h&&null!==u&&r((o=u,s=l.createdAt,f=[],o.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).forEach(({oldValue:e,newValue:t,createdAt:n})=>{null!==e&&""!==e.trim()&&f.push({address:"",addressDetail:"",changedAt:s,value:e.trim()}),null!==t&&""!==t.trim()&&f.push({address:"",addressDetail:"",changedAt:n,value:t.trim()})}),f.sort((e,t)=>new Date(t.changedAt).getTime()-new Date(e.changedAt).getTime()))))})(),()=>{t=!1}},[l,e]),(0,t.jsx)(d.default,{children:(0,t.jsxs)(_R,{children:[(0,t.jsxs)(_O,{children:[(0,t.jsxs)(_L,{children:["address"===e?"주소/상세주소":"휴대폰"," 변경 이력 보기"]}),(0,t.jsxs)(_P,{type:"button",onClick:n,children:[(0,t.jsx)(en.X,{size:14}),"닫기"]})]}),(0,t.jsx)(_N,{children:s?(0,t.jsx)(_W,{children:"변경 이력을 불러오는 중입니다."}):(0,t.jsxs)(_M,{children:[(0,t.jsxs)(_F,{$isAddress:"address"===e,children:[(0,t.jsx)(_B,{children:"address"===e?"주소":"휴대폰"}),"address"===e?(0,t.jsx)(_B,{children:"상세주소"}):null,(0,t.jsx)(_B,{children:"변경 일자"})]}),0===o.length?(0,t.jsx)(_W,{children:"변경 이력이 없습니다."}):o.map(n=>{let i;return(0,t.jsxs)(_U,{$isAddress:"address"===e,children:[(0,t.jsx)(_Y,{children:"address"===e?n.address:n.value}),"address"===e?(0,t.jsx)(_Y,{children:n.addressDetail}):null,(0,t.jsx)(_Y,{children:Number.isNaN((i=new Date(n.changedAt)).getTime())?"YYYY-MM-DD":`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`})]},`${n.changedAt}-${n.address}-${n.addressDetail}-${n.value}`)})]})})]})})}let _R=l.default.div.withConfig({componentId:"zh__sc-c2667e46-0"})`
  display: flex;
  flex-direction: column;

  width: min(980px, calc(100vw - 32px));
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
`,_O=l.default.div.withConfig({componentId:"zh__sc-c2667e46-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
`,_L=l.default.h2.withConfig({componentId:"zh__sc-c2667e46-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #101828;
`,_P=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-c2667e46-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,_N=l.default.div.withConfig({componentId:"zh__sc-c2667e46-4"})`
  overflow: auto;
  max-height: min(560px, calc(100vh - 160px));
`,_M=l.default.div.withConfig({componentId:"zh__sc-c2667e46-5"})`
  display: flex;
  flex-direction: column;
  min-width: 560px;
`,_F=l.default.div.withConfig({componentId:"zh__sc-c2667e46-6"})`
  display: grid;
  grid-template-columns: ${({$isAddress:e})=>e?"1fr 1fr 140px":"1fr 140px"};

  min-height: 48px;
  border-bottom: 1px solid #e5e7eb;

  background: #f9fafb;
`,_B=l.default.div.withConfig({componentId:"zh__sc-c2667e46-7"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;

  font-size: 14px;
  font-weight: 700;
  color: #344054;
`,_U=l.default.div.withConfig({componentId:"zh__sc-c2667e46-8"})`
  display: grid;
  grid-template-columns: ${({$isAddress:e})=>e?"1fr 1fr 140px":"1fr 140px"};
  min-height: 48px;
  border-bottom: 1px solid #e5e7eb;
`,_Y=l.default.div.withConfig({componentId:"zh__sc-c2667e46-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;

  font-size: 14px;
  color: #464c53;
  overflow-wrap: anywhere;
`,_W=l.default.div.withConfig({componentId:"zh__sc-c2667e46-10"})`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 160px;
  padding: 24px;

  font-size: 14px;
  color: #667085;
`,_V={residentRegistrationNumberText:"",genderText:"",mobileText:"",contactText:"",addressBaseText:"",addressDetailText:"",postCodeText:"",memoText:""},_H={mobileText:"",contactText:"",postCodeText:"",residentRegistrationNumberText:""},_G=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,n=a.default.modal.serviceWorkerDetail.serviceWorker,l=null===n?_V:{residentRegistrationNumberText:n.residentRegistrationNumber??"",genderText:null===n.gender?"":tp.default[n.gender].label,mobileText:n.phoneNumber??"",contactText:n.contact??"",addressBaseText:n.address??"",addressDetailText:n.addressDetail??"",postCodeText:n.postCode??"",memoText:n.note??""},d=(0,i.useRef)(null),[o,r]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),[f,h]=(0,i.useState)(_V),[u,p]=(0,i.useState)(_H),[x,g]=(0,i.useState)(null),m=o?f:l,b=o?((e,t)=>{if(!x8.default.brand.residentRegistrationNumber.is(e)&&!x8.default.brand.residentRegistrationNumber.isPartial(e))return t;let n=x8.default.brand.residentRegistrationNumber.extractGender(e);return null===n?t:tp.default[n].label})(m.residentRegistrationNumberText,m.genderText):m.genderText,j=(e,t)=>{h(n=>({...n,[e]:t})),("mobileText"===e||"contactText"===e||"postCodeText"===e||"residentRegistrationNumberText"===e)&&p(t=>({...t,[e]:""}))},_=(0,i.useCallback)(()=>{s||(h(l),p(_H),r(!1))},[s,l]);if((0,i.useEffect)(()=>{if(!o||s)return;let e=e=>{let t=e.target;t instanceof Node&&null!==d.current&&d.current.contains(t)||_()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[_,o,s]),null===n)return null;let w=async()=>{let t,i,d,o,u,x,g,m,b;if(s)return;let j=(t={},i={},(d=f.mobileText.trim())!==l.mobileText.trim()&&(i.phoneNumber=d),(o=f.residentRegistrationNumberText.trim())!==l.residentRegistrationNumberText.trim()&&(i.residentRegistrationNumber=o),(u=f.contactText.trim())!==l.contactText.trim()&&(i.contact=u),(x=f.postCodeText.trim())!==l.postCodeText.trim()&&(i.postCode=x),(g=f.memoText.trim())!==l.memoText.trim()&&(i.note=g),Object.assign(t,i),(m=f.addressBaseText.trim())!==l.addressBaseText.trim()&&(t.address=m),(b=f.addressDetailText.trim())!==l.addressDetailText.trim()&&(t.addressDetail=b),t);if(!(Object.keys(j).length>0)){h(l),p(_H),r(!1);return}let _=((e,t)=>{let n={..._H},i=e.mobileText.trim()!==t.mobileText.trim(),l=e.contactText.trim()!==t.contactText.trim(),a=e.postCodeText.trim()!==t.postCodeText.trim();if(e.residentRegistrationNumberText.trim()!==t.residentRegistrationNumberText.trim()){let t=e.residentRegistrationNumberText.trim();""===t||x8.default.brand.residentRegistrationNumber.is(t)||x8.default.brand.residentRegistrationNumber.isPartial(t)||(n.residentRegistrationNumberText="유효한 주민등록번호 형식이 아닙니다.")}if(i){let t=e.mobileText.trim();""===t||x8.default.brand.phoneNumber.is(t)||(n.mobileText="유효한 휴대폰 형식이 아닙니다.")}if(l){let t=e.contactText.trim();""===t||x8.default.brand.contactNumber.is(t)||(n.contactText="유효한 연락처 형식이 아닙니다.")}if(a){let t=e.postCodeText.trim();if(""!==t){let[e]=x8.default.brand.postCode.sanitize(t);null!==e&&(n.postCodeText="유효한 우편번호 형식이 아닙니다.")}}return n})(f,l);if(""!==_.mobileText||""!==_.contactText||""!==_.postCodeText||""!==_.residentRegistrationNumberText)return void p(_);p(_H),c(!0);let[w]=await aC.default.data.serviceWorker.patch({id:n.id,payload:j});if(c(!1),null!==w)return;e.markListRefreshNeeded(),h(l),r(!1);let y=a.default.data.serviceWorker.detail;null!==y.query&&y.refetch()};return(0,t.jsxs)(_K,{ref:d,children:[(0,t.jsxs)(_X,{children:[(0,t.jsx)(_q,{children:"인적사항"}),o?(0,t.jsxs)(_Q,{children:[(0,t.jsxs)(_J,{type:"button",onClick:_,disabled:s,children:[(0,t.jsx)(i9.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(_J,{type:"button",onClick:()=>void w(),disabled:s,children:[(0,t.jsx)(lW.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(_J,{type:"button",onClick:()=>{h(l),r(!0)},children:[(0,t.jsx)(n2.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(_Z,{children:[(0,t.jsxs)(_0,{$columns:4,children:[(0,t.jsxs)(_1,{children:["주민등록번호",(0,t.jsx)(_3,{value:m.residentRegistrationNumberText,style:""!==u.residentRegistrationNumberText?we:void 0,readOnly:!o,onChange:e=>j("residentRegistrationNumberText",e)}),""!==u.residentRegistrationNumberText?(0,t.jsx)(_4,{children:u.residentRegistrationNumberText}):null]}),(0,t.jsxs)(_1,{children:["성별",(0,t.jsx)(_5,{value:b,readOnly:!0})]}),(0,t.jsxs)(_1,{children:[(0,t.jsxs)(_2,{children:[(0,t.jsx)("span",{children:"휴대폰"}),(0,t.jsxs)(_6,{type:"button",disabled:o,onClick:()=>g("phone"),children:[(0,t.jsx)(lV,{sx:{fontSize:12}})," 변경 이력 보기"]})]}),(0,t.jsx)(_9,{value:m.mobileText,style:""!==u.mobileText?we:void 0,readOnly:!o,onChange:e=>j("mobileText",e)}),""!==u.mobileText?(0,t.jsx)(_4,{children:u.mobileText}):null]}),(0,t.jsxs)(_1,{children:["연락처",(0,t.jsx)(_8,{value:m.contactText,style:""!==u.contactText?we:void 0,readOnly:!o,onChange:e=>j("contactText",e)}),""!==u.contactText?(0,t.jsx)(_4,{children:u.contactText}):null]})]}),(0,t.jsxs)(_0,{$columns:3,children:[(0,t.jsxs)(_1,{children:[(0,t.jsxs)(_2,{children:[(0,t.jsx)("span",{children:"주소"}),(0,t.jsxs)(_6,{type:"button",disabled:o,onClick:()=>g("address"),children:[(0,t.jsx)(lV,{sx:{fontSize:12}})," 변경 이력 보기"]})]}),(0,t.jsx)(_5,{value:m.addressBaseText,readOnly:!o,onChange:e=>j("addressBaseText",e.target.value)})]}),(0,t.jsxs)(_1,{children:["상세주소",(0,t.jsx)(_5,{value:m.addressDetailText,readOnly:!o,onChange:e=>j("addressDetailText",e.target.value)})]}),(0,t.jsxs)(_1,{children:["우편번호",(0,t.jsx)(_7,{value:m.postCodeText,style:""!==u.postCodeText?we:void 0,readOnly:!o,onChange:e=>j("postCodeText",e)}),""!==u.postCodeText?(0,t.jsx)(_4,{children:u.postCodeText}):null]})]}),(0,t.jsx)(_0,{$columns:1,children:(0,t.jsxs)(_1,{children:["특이사항(메모)",(0,t.jsx)(_5,{value:m.memoText,readOnly:!o,onChange:e=>j("memoText",e.target.value)})]})})]}),null!==x?(0,t.jsx)(_$,{type:x,onClose:()=>g(null)}):null]})}),_K=l.default.section.withConfig({componentId:"zh__sc-319b784e-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,_X=l.default.div.withConfig({componentId:"zh__sc-319b784e-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
  min-height: 40px;
`,_q=l.default.h3.withConfig({componentId:"zh__sc-319b784e-2"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #101828;
`,_Q=l.default.div.withConfig({componentId:"zh__sc-319b784e-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,_J=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-319b784e-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,_Z=l.default.div.withConfig({componentId:"zh__sc-319b784e-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;

  width: 100%;
`,_0=l.default.div.withConfig({componentId:"zh__sc-319b784e-6"})`
  display: grid;
  grid-template-columns: ${({$columns:e})=>4===e?"repeat(4, minmax(0, 1fr))":3===e?"repeat(3, minmax(0, 1fr))":"minmax(0, 1fr)"};
  gap: 12px;
  width: 100%;
`,_1=l.default.label.withConfig({componentId:"zh__sc-319b784e-7"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,_2=l.default.div.withConfig({componentId:"zh__sc-319b784e-8"})`
  display: flex;
  gap: 2px;
  align-items: center;
  min-height: 20px;
`,_6=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-319b784e-9"})`
  gap: 2px;
  padding: 2px 4px;
  font-size: 12px;
  line-height: 1;
`,_4=l.default.div.withConfig({componentId:"zh__sc-319b784e-10"})`
  margin-top: 2px;
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,_5=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-319b784e-11"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,_3=(0,l.default)(o.default.Input.ResidentRegistrationNumber).withConfig({componentId:"zh__sc-319b784e-12"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,_9=(0,l.default)(o.default.Input.Phone).withConfig({componentId:"zh__sc-319b784e-13"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,_8=(0,l.default)(o.default.Input.Contact).withConfig({componentId:"zh__sc-319b784e-14"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,_7=(0,l.default)(o.default.Input.PostCode).withConfig({componentId:"zh__sc-319b784e-15"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,we={borderColor:"#ff4d4f",background:"#fff5f5"},wt={availableTimes:[],careTypeDetails:{},desiredAgeRanges:[],desiredClientGender:null,preferredWeeklyWorkingHours:null,regions:[],careTypes:[],hasVehicle:null},wn=()=>a.default.ui.serviceRegion.codes,wi=Object.keys(tx.default).filter(function(e){return e in tx.default}),wl=[{label:"소지",value:!0},{label:"미소지",value:!1}],wa=[{label:"전체",value:null},{label:"남성",value:"MALE"},{label:"여성",value:"FEMALE"}],wd=Object.keys(tu.default).filter(function(e){return e in tu.default}).map(e=>({label:tu.default[e].label,value:e})),wo=e=>[...new Set(e)].sort(),wr=e=>`${e.dayOfWeek}-${e.hour}`,ws=(e,t)=>{let n=wo(e),i=wo(t);return n.length===i.length&&n.every((e,t)=>e===i[t])},wc=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,n=a.default.modal.serviceWorkerDetail.serviceWorker,l=e.selectedEmploymentContract?.serviceType??a.default.serviceWorker.info.byServiceWorker.currentServiceType,d=((e,t)=>{if(null===e)return wt;let n=null===t?[]:e.availableTimes.filter(e=>e.serviceType===t).map(({dayOfWeek:e,hour:t})=>({dayOfWeek:e,hour:t})),i={};return e.careTypes.forEach(({careType:e,detail:t})=>{i[e]=t??""}),{availableTimes:n,careTypeDetails:i,desiredAgeRanges:e.desiredAgeRanges,desiredClientGender:e.desiredClientGender,preferredWeeklyWorkingHours:e.preferredWeeklyWorkingHours??null,regions:e.regions,careTypes:e.careTypes.map(({careType:e})=>e),hasVehicle:e.hasVehicle??null}})(n,l),o=(0,i.useRef)(null),[r,s]=(0,i.useState)(!1),[c,f]=(0,i.useState)(!1),[h,u]=(0,i.useState)(wt),[p,x]=(0,i.useState)({}),g=r?h:d,m=wn().every(e=>g.regions.includes(e)),b=wi.every(e=>g.careTypes.includes(e)),j="DISABILITY_ACTIVITY_SUPPORT"===l,_=(0,i.useCallback)(()=>{c||(u(d),x({}),s(!1))},[c,d]),w=(0,i.useCallback)(e=>{x(t=>{if(void 0===t[e])return t;let n={...t};return delete n[e],n})},[]);if((0,i.useEffect)(()=>{let e=Object.keys(p)[0];if(void 0===e)return;let t=window.requestAnimationFrame(()=>{let t=o.current?.querySelector(`[data-required-field-error="${e}"]`);t?.scrollIntoView({behavior:"smooth",block:"center"})});return()=>{window.cancelAnimationFrame(t)}},[p]),(0,i.useEffect)(()=>{if(!r||c)return;let e=e=>{let t=e.target;t instanceof Node&&null!==o.current&&o.current.contains(t)||_()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[_,r,c]),null===n)return null;let y=(e,t)=>r?t.includes(e)?t.filter(t=>t!==e):[...t,e]:t,v=async()=>{var t,i;let o,r,p;if(c)return;let g=(t=n.availableTimes,i=n.careTypes,o={},null===l||((e,t)=>{if(e.length!==t.length)return!1;let n=e.map(wr).sort(),i=t.map(wr).sort();return n.every((e,t)=>e===i[t])})(h.availableTimes,d.availableTimes)||(o.availableTimes=[...t.filter(e=>e.serviceType!==l),...h.availableTimes.map(e=>({...e,serviceType:l}))]),ws(h.regions,d.regions)||(o.regions=h.regions),r=wi.some(e=>(h.careTypeDetails[e]??"")!==(d.careTypeDetails[e]??"")),(!ws(h.careTypes,d.careTypes)||r)&&(o.careTypes=h.careTypes.map(e=>({careType:e,detail:h.careTypeDetails[e]??i.find(t=>t.careType===e)?.detail??null}))),h.desiredClientGender!==d.desiredClientGender&&(o.desiredClientGender=h.desiredClientGender??void 0),ws(h.desiredAgeRanges,d.desiredAgeRanges)||(o.desiredAgeRanges=h.desiredAgeRanges),h.preferredWeeklyWorkingHours!==d.preferredWeeklyWorkingHours&&(o.preferredWeeklyWorkingHours=h.preferredWeeklyWorkingHours??void 0),h.hasVehicle!==d.hasVehicle&&null!==h.hasVehicle&&(o.hasVehicle=h.hasVehicle),o);if(!(Object.keys(g).length>0)){u(d),x({}),s(!1);return}let m=(p={},j?(0===h.availableTimes.length&&(p.availableTimes="필수 입력값입니다."),0===h.regions.length&&(p.regions="필수 입력값입니다."),0===h.careTypes.length&&(p.careTypes="필수 입력값입니다."),0===h.desiredAgeRanges.length&&(p.desiredAgeRanges="필수 입력값입니다.")):null===h.hasVehicle&&(p.hasVehicle="필수 입력값입니다."),p);if(Object.keys(m).length>0)return void x(m);x({}),f(!0);let[b]=await aC.default.data.serviceWorker.patch({id:n.id,payload:g});if(f(!1),null!==b)return;e.markListRefreshNeeded(),u(d),s(!1);let _=a.default.data.serviceWorker.detail;null!==_.query&&_.refetch()};return(0,t.jsx)(wp,{ref:o,children:(0,t.jsxs)(wm,{children:[(0,t.jsxs)(wb,{children:[(0,t.jsxs)(wj,{children:[(0,t.jsxs)(w_,{children:["근무 가능 시간",j?(0,t.jsx)(wf,{}):null]}),(0,t.jsxs)(ww,{children:[(0,t.jsx)(tf.default,{sx:{fontSize:20}}),(0,t.jsx)(wy,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]}),r&&(0,t.jsx)(wv,{children:"수정 진행중"})]}),r?(0,t.jsxs)(wx,{children:[(0,t.jsxs)(wg,{type:"button",onClick:_,disabled:c,children:[(0,t.jsx)(i9.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(wg,{type:"button",onClick:()=>void v(),disabled:c,children:[(0,t.jsx)(lW.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(wg,{type:"button",onClick:()=>{u(d),s(!0)},children:[(0,t.jsx)(n2.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsx)(wC,{value:g.availableTimes,disabled:!r||null===l,readOnly:!r||null===l,onChange:e=>{if(!r)return;let t=e.target.value;w("availableTimes"),u(e=>({...e,availableTimes:t}))}}),void 0!==p.availableTimes?(0,t.jsx)(wu,{"data-required-field-error":"availableTimes",children:p.availableTimes}):null,(0,t.jsxs)(wI,{children:[(0,t.jsx)(wz,{children:"희망 근로 시간"}),(0,t.jsxs)(wT,{children:[(0,t.jsx)(wS,{children:"총"}),(0,t.jsx)(wE,{value:null===g.preferredWeeklyWorkingHours?"":String(g.preferredWeeklyWorkingHours),placeholder:"00",maxLength:2,disabled:!r,onChange:e=>{if(!r)return;let t=e.target.value.replace(/\D/g,"");if(""===t)return void u(e=>({...e,preferredWeeklyWorkingHours:null}));let n=Math.min(Number(t),99);u(e=>({...e,preferredWeeklyWorkingHours:n}))}}),(0,t.jsx)(wS,{children:"시간"})]})]}),(0,t.jsxs)(wk,{children:[(0,t.jsxs)(wD,{children:["서비스 가능 지역 (복수 선택 가능)",j?(0,t.jsx)(wf,{}):null]}),(0,t.jsxs)(wA,{children:[(0,t.jsxs)(w$,{children:[(0,t.jsx)(wL,{disabled:!r,checked:m,onChange:()=>{r&&(w("regions"),u(e=>({...e,regions:m?[]:wn()})))}}),(0,t.jsx)(wO,{children:"전체 선택"})]}),wn().map(e=>(0,t.jsxs)(w$,{children:[(0,t.jsx)(wL,{disabled:!r,checked:g.regions.includes(e),onChange:()=>{let t=y(e,g.regions);w("regions"),u(e=>({...e,regions:t}))}}),(0,t.jsx)(wO,{children:a.default.ui.serviceRegion.label(e)})]},e))]}),void 0!==p.regions?(0,t.jsx)(wu,{"data-required-field-error":"regions",children:p.regions}):null]}),j&&(0,t.jsxs)(wk,{children:[(0,t.jsxs)(wD,{children:["가능 활동 내용 (복수 선택 가능)",(0,t.jsx)(wf,{})]}),(0,t.jsxs)(wA,{children:[(0,t.jsxs)(w$,{children:[(0,t.jsx)(wL,{disabled:!r,checked:b,onChange:()=>{r&&(w("careTypes"),u(e=>({...e,careTypes:b?[]:wi})))}}),(0,t.jsx)(wO,{children:"전체 선택"})]}),wi.map(e=>(0,t.jsxs)(w$,{children:[(0,t.jsx)(wL,{disabled:!r,checked:g.careTypes.includes(e),onChange:()=>{let t=y(e,g.careTypes);w("careTypes"),u(e=>({...e,careTypes:t}))}}),(0,t.jsx)(wO,{children:"PHYSICAL_ACTIVITY_SUPPORT"===e?"신체 활동":tx.default[e].label}),(0,t.jsx)(wR,{disabled:!r,value:g.careTypeDetails[e]??"",placeholder:"관련 내용을 입력해주세요.",onChange:t=>u(n=>({...n,careTypeDetails:{...n.careTypeDetails,[e]:t.target.value}}))})]},e))]}),void 0!==p.careTypes?(0,t.jsx)(wu,{"data-required-field-error":"careTypes",children:p.careTypes}):null]}),!j&&(0,t.jsxs)(wk,{children:[(0,t.jsxs)(wD,{children:["차량 소지",(0,t.jsx)(wf,{})]}),(0,t.jsx)(wA,{children:wl.map(e=>(0,t.jsxs)(w$,{children:[(0,t.jsx)(wP,{name:"detail-service-worker-car-ownership",checked:g.hasVehicle===e.value,disabled:!r,onChange:()=>{r&&(w("hasVehicle"),u(t=>({...t,hasVehicle:e.value})))}}),(0,t.jsx)(wO,{children:e.label})]},e.label))}),void 0!==p.hasVehicle?(0,t.jsx)(wu,{"data-required-field-error":"hasVehicle",children:p.hasVehicle}):null]}),j&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(wk,{children:[(0,t.jsxs)(wD,{children:["이용자 희망 성별",(0,t.jsx)(wf,{})]}),(0,t.jsx)(wA,{children:wa.map(e=>(0,t.jsxs)(w$,{children:[(0,t.jsx)(wP,{name:"detail-service-worker-client-gender",checked:g.desiredClientGender===e.value,disabled:!r,onChange:()=>{u(t=>({...t,desiredClientGender:e.value}))}}),(0,t.jsx)(wO,{children:e.label})]},e.label))})]}),(0,t.jsxs)(wk,{children:[(0,t.jsxs)(wD,{children:["이용자 희망 연령",(0,t.jsx)(wf,{})]}),(0,t.jsxs)(wA,{children:[(0,t.jsxs)(w$,{children:[(0,t.jsx)(wL,{disabled:!r,checked:g.desiredAgeRanges.length===wd.length,onChange:e=>{w("desiredAgeRanges"),u(t=>({...t,desiredAgeRanges:e.target.checked?wd.map(({value:e})=>e):[]}))}}),(0,t.jsx)(wO,{children:"전체 선택"})]}),wd.map(({label:e,value:n})=>(0,t.jsxs)(w$,{children:[(0,t.jsx)(wL,{disabled:!r,checked:g.desiredAgeRanges.includes(n),onChange:e=>{w("desiredAgeRanges"),u(t=>({...t,desiredAgeRanges:e.target.checked?[...t.desiredAgeRanges,n]:t.desiredAgeRanges.filter(e=>e!==n)}))}}),(0,t.jsx)(wO,{children:e})]},n))]}),void 0!==p.desiredAgeRanges?(0,t.jsx)(wu,{"data-required-field-error":"desiredAgeRanges",children:p.desiredAgeRanges}):null]})]})]})})});function wf(){return(0,t.jsx)(wh,{children:" *"})}let wh=l.default.span.withConfig({componentId:"zh__sc-3656833f-0"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,wu=l.default.div.withConfig({componentId:"zh__sc-3656833f-1"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,wp=l.default.section.withConfig({componentId:"zh__sc-3656833f-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,wx=l.default.div.withConfig({componentId:"zh__sc-3656833f-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,wg=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-3656833f-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,wm=l.default.div.withConfig({componentId:"zh__sc-3656833f-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,wb=l.default.div.withConfig({componentId:"zh__sc-3656833f-6"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
`,wj=l.default.div.withConfig({componentId:"zh__sc-3656833f-7"})`
  display: flex;
  flex: 1 1 auto;
  gap: 16px;
  align-items: center;
`,w_=l.default.div.withConfig({componentId:"zh__sc-3656833f-8"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,ww=l.default.div.withConfig({componentId:"zh__sc-3656833f-9"})`
  display: flex;
  gap: 4px;
  align-items: center;
  color: #464c53;
`,wy=l.default.div.withConfig({componentId:"zh__sc-3656833f-10"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
`,wv=l.default.div.withConfig({componentId:"zh__sc-3656833f-11"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #fff;

  background: #4f39f6;
`,wC=(0,l.default)(o.default.Input.TimeSlider).withConfig({componentId:"zh__sc-3656833f-12"})`
  align-self: stretch;
  width: 100%;
  max-width: 808px;
`,wI=l.default.div.withConfig({componentId:"zh__sc-3656833f-13"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,wz=l.default.div.withConfig({componentId:"zh__sc-3656833f-14"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,wT=l.default.div.withConfig({componentId:"zh__sc-3656833f-15"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,wE=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-3656833f-16"})`
  width: 59px;
  height: 36px;
  text-align: center;
`,wS=l.default.div.withConfig({componentId:"zh__sc-3656833f-17"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,wk=l.default.div.withConfig({componentId:"zh__sc-3656833f-18"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,wD=l.default.div.withConfig({componentId:"zh__sc-3656833f-19"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,wA=l.default.div.withConfig({componentId:"zh__sc-3656833f-20"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;
`,w$=l.default.label.withConfig({componentId:"zh__sc-3656833f-21"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,wR=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-3656833f-22"})`
  width: 193px;
  height: 36px;
  padding: 4px 16px;
`,wO=l.default.span.withConfig({componentId:"zh__sc-3656833f-23"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,wL=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-3656833f-24"})`
  width: 24px;
  height: 24px;
`,wP=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-3656833f-25"})`
  width: 20px;
  height: 20px;
`,wN=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,n=e.serviceWorker?.name??"";return(0,t.jsxs)(wM,{children:[(0,t.jsx)(_G,{}),(0,t.jsx)(wc,{}),(0,t.jsxs)(wF,{type:"button",disabled:e.isDeleting,onClick:()=>{e.openDeleteConfirm()},children:[(0,t.jsx)(ei.default.Delete,{size:16}),"삭제하기"]}),e.isDeleteConfirmOpen?(0,t.jsx)(wB,{children:(0,t.jsxs)(wU,{children:[(0,t.jsxs)(wY,{children:[(0,t.jsxs)(wW,{children:[n," 제공인력을 삭제하시겠어요?"]}),(0,t.jsxs)(wV,{children:["삭제한 제공인력 정보는 복구할 수 없습니다.",(0,t.jsx)("br",{}),"담당했던 이용자·활동내역이 없고, 근로계약 서류를 손대지 않은 제공인력만 삭제할 수 있어요. 함께 만들어진 근로계약과 서류도 같이 지워져요."]})]}),(0,t.jsxs)(wH,{children:[(0,t.jsx)(wG,{type:"button",disabled:e.isDeleting,onClick:()=>{e.closeDeleteConfirm()},children:"취소하기"}),(0,t.jsx)(wK,{type:"button",disabled:e.isDeleting,onClick:()=>{e.confirmDelete()},children:"삭제하기"})]})]})}):null]})}),wM=l.default.div.withConfig({componentId:"zh__sc-d3727a60-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 48px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
  min-height: 0;
  padding: 24px;
  border-radius: 10px;

  background: #fcfdff;
`,wF=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-d3727a60-1"})`
  gap: 8px;
  height: 36px;
  padding: 8px 16px;
`,wB=l.default.div.withConfig({componentId:"zh__sc-d3727a60-2"})`
  position: fixed;
  z-index: 1000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 35%);
`,wU=l.default.div.withConfig({componentId:"zh__sc-d3727a60-3"})`
  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,wY=l.default.div.withConfig({componentId:"zh__sc-d3727a60-4"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,wW=l.default.h2.withConfig({componentId:"zh__sc-d3727a60-5"})`
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,wV=l.default.p.withConfig({componentId:"zh__sc-d3727a60-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,wH=l.default.div.withConfig({componentId:"zh__sc-d3727a60-7"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,wG=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-d3727a60-8"})`
  height: 36px;
  padding: 8px 16px;
`,wK=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d3727a60-9"})`
  height: 36px;
  padding: 8px 16px;
`;var wX=e.i(5070),wq=e.i(553);let wQ=(0,n.observer)(function({onClose:e,onSelectClient:n,serviceWorkerId:l,serviceType:d}){let[r,s]=(0,i.useState)(""),[c,f]=(0,i.useState)({}),[h,u]=(0,i.useState)({}),p=a.default.data.serviceWorker.availableClientList;(0,i.useEffect)(()=>null===d?void p.reset():(p.setQuery({serviceWorkerId:l,serviceType:d}),()=>p.reset()),[p,d,l]),(0,i.useEffect)(()=>{let e=!0;return Promise.all((p.data??[]).map(async({latestContractId:e})=>{if(null===e)return null;let[t,n]=await aC.default.data.contract.get({id:e});return null===t?[e,n]:null})).then(t=>{e&&f(Object.fromEntries(t.filter(e=>null!==e)))}),()=>{e=!1}},[p.data]),(0,i.useEffect)(()=>{let e=!0;return Promise.all([...new Set(Object.values(c).map(e=>e.serviceWorkerId).filter(e=>null!==e&&e!==l))].map(async e=>{let[t,n]=await aC.default.data.serviceWorker.get({id:e});return null===t?[e,n.name]:null})).then(t=>{e&&u(Object.fromEntries(t.filter(e=>null!==e)))}),()=>{e=!1}},[c,l]);let x=(0,i.useMemo)(()=>p.data?.map(e=>({...e,_searchableName:aq.default.create(e.client.name)}))??[],[p.data]).filter(({_searchableName:e})=>aq.default.isMatch(e,r));return(0,t.jsx)(w0,{children:(0,t.jsxs)(w1,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(w2,{children:[(0,t.jsx)(w6,{}),(0,t.jsx)(w4,{children:"연결할 이용자 추가하기"}),(0,t.jsx)(o.default.Button.Outlined,{type:"button",style:{width:56,height:36},onClick:e,children:(0,t.jsx)(n0.default,{sx:{fontSize:20}})})]}),(0,t.jsx)(w5,{}),(0,t.jsx)(w3,{children:(0,t.jsxs)(w9,{children:[(0,t.jsx)(w8,{placeholder:"이용자명을 검색하세요.",value:r,onChange:e=>s(e.target.value)}),(0,t.jsx)(w7,{children:(0,t.jsx)(wq.Search,{size:16})})]})}),(0,t.jsxs)(yt,{children:["loading"===p.status?(0,t.jsx)(ye,{children:"이용자를 불러오는 중..."}):null,"error"===p.status?(0,t.jsx)(ye,{children:"이용자 목록을 불러오지 못했습니다."}):null,"success"===p.status&&0===x.length?(0,t.jsx)(ye,{children:"연결할 수 있는 이용자가 없습니다."}):null,x.map(({client:e,latestContractId:i})=>{let a=null===i?void 0:c[i],d=a?.serviceWorkerId??null,o=d===l,r=null===d||o?null:{serviceWorkerId:d,name:h[d]??null};return(0,t.jsxs)(yn,{children:[(0,t.jsxs)(yi,{children:[(0,t.jsxs)(yh,{children:[(0,t.jsx)(yl,{children:e.name}),o?(0,t.jsx)(yu,{children:"지금 연결됨"}):null,null!==r?(0,t.jsx)(yu,{$other:!0,children:null===r.name?"다른 제공인력 담당 중":`${r.name} 담당 중`}):null]}),(0,t.jsxs)(ya,{children:[(0,t.jsxs)(yd,{children:[(0,t.jsx)(yo,{children:"생년월일"}),(0,t.jsx)(yr,{}),(0,t.jsx)(ys,{children:wZ(e.birthDate)})]}),(0,t.jsxs)(yd,{children:[(0,t.jsx)(yo,{children:"시작일자"}),(0,t.jsx)(yr,{}),(0,t.jsx)(ys,{children:wJ(a?.contractStartDate)})]}),(0,t.jsxs)(yd,{children:[(0,t.jsx)(yo,{children:"종료일자"}),(0,t.jsx)(yr,{}),(0,t.jsx)(ys,{children:wJ(a?.contractEndDate)})]})]})]}),(0,t.jsx)(yc,{children:(0,t.jsxs)(yf,{type:"button",disabled:null===i||o,onClick:()=>{null===i||o||n?.(i,r)},children:["선택",(0,t.jsx)(aK.default,{sx:{fontSize:18}})]})})]},e.id)})]})]})})}),wJ=e=>e?.replaceAll("-","")??"-",wZ=e=>{let t=wJ(e);return 8===t.length?t.slice(2):t},w0=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-0"})`
  position: absolute;
  z-index: 1000;
  inset: 0;

  display: flex;
  justify-content: flex-end;

  padding-top: 69px;
`,w1=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-1"})`
  display: flex;
  flex-direction: column;

  width: min(417px, 100%);
  height: 100%;

  background: #fff;
  box-shadow: -2px 9px 16px rgb(0 0 0 / 16%);
`,w2=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-2"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`,w6=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-3"})`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
`,w4=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-4"})`
  flex: 1;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #101828;
  text-align: center;
`,w5=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-5"})`
  height: 1px;
  background: #e5e7eb;
`,w3=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-6"})`
  padding: 16px;
`,w9=l.default.label.withConfig({componentId:"zh__sc-e99ba75d-7"})`
  position: relative;
`,w8=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-e99ba75d-8"})`
  width: 100%;
  height: 40px;
  padding: 0 48px 0 16px;
  border-radius: 6px;

  &:focus {
    border-color: #5635ff;
    background: #fbfcff;
  }
`,w7=l.default.span.withConfig({componentId:"zh__sc-e99ba75d-9"})`
  pointer-events: none;

  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: #0a0a0a;
`,ye=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-10"})`
  padding: 24px 0;
  font-size: 14px;
  color: #667085;
  text-align: center;
`,yt=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-11"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  padding: 16px;

  background: #f9fafb;
`,yn=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-12"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  min-height: 163px;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;

  &:hover {
    border: 1px solid #5635ff;
    background: #f7f5ff;
    box-shadow: 0 0 6px 0 #ddd8ff;
  }
`,yi=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-13"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,yl=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-14"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,ya=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-15"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,yd=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-16"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,yo=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-17"})`
  flex-shrink: 0;

  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,yr=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-18"})`
  flex-shrink: 0;
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,ys=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-19"})`
  overflow: hidden;

  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: #45464e;
  text-overflow: ellipsis;
  white-space: nowrap;
`,yc=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-20"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  align-self: stretch;
  justify-content: center;
`,yf=l.default.button.withConfig({componentId:"zh__sc-e99ba75d-21"})`
  cursor: pointer;

  display: flex;
  align-items: center;

  padding: 4px 0;
  border: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px;
  color: #4f39f6;
  letter-spacing: -1px;

  background: transparent;

  &:disabled {
    cursor: not-allowed;
    color: #98a2b3;
  }
`,yh=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-22"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,yu=l.default.span.withConfig({componentId:"zh__sc-e99ba75d-23"})`
  padding: 2px 8px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  color: ${({$other:e})=>!0===e?"#b45309":"#1d4ed8"};

  background: ${({$other:e})=>!0===e?"#fef3c7":"#dbeafe"};
`,yp=(0,n.observer)(function(){let[e,n]=(0,i.useState)(!1),[l,d]=(0,i.useState)(!1),[o,r]=(0,i.useState)(!1),s=a.default.modal.serviceWorkerDetail.serviceWorkerId,[c,f]=(0,i.useState)(null),[h,u]=(0,i.useState)({}),[p,x]=(0,i.useState)(null),g=a.default.data.serviceWorker.detail.data?.assignedContracts,m=g??[];(0,i.useEffect)(()=>{let e=!0;return Promise.all((g??[]).map(async({contractId:e})=>{let[t,n]=await aC.default.data.contract.get({id:e});return null===t?[e,n]:null})).then(t=>{e&&u(Object.fromEntries(t.filter(e=>null!==e)))}),()=>{e=!1}},[g]),(0,i.useEffect)(()=>{let e=!0;if(null!==s)return aC.default.data.workerConnection.getForServiceWorker({serviceWorkerId:s}).then(([t,n])=>{if(!e||null!==t)return;let i={};n.forEach(e=>{i[e.contractId]??=e}),x({serviceWorkerId:s,byContractId:i})}),()=>{e=!1}},[g,s]);let b=async e=>{let t=a.default.modal.serviceWorkerDetail.serviceWorkerId;if(null===t||l)return;d(!0);let[i]=await aC.default.data.contract.update({id:e,payload:{serviceWorkerId:t}});if(d(!1),null!==i){let e=(0,aT.getSaveErrorMessage)(i,"이용자 연결에 실패했습니다. 잠시 후 다시 시도해 주세요.");null!==e&&a.default.ui.layout.toast.error(e);return}let o=a.default.data.serviceWorker.detail,r=a.default.modal.serviceWorkerDetail;null!==o.query&&await o.refetch();let s=a.default.serviceWorker.info.byServiceWorker;r.markListRefreshNeeded(),s.setStatusFilter("ACTIVE"),s.setSearchText(""),s.setHighlightedServiceWorkerId(t),n(!1),a.default.ui.layout.toast.success("이용자를 연결했습니다.")};return(0,t.jsxs)(yx,{children:[(0,t.jsxs)(y_,{children:[(0,t.jsx)(yw,{children:"연결된 이용자 정보"}),(0,t.jsxs)(yy,{children:[(0,t.jsxs)(yv,{type:"button",disabled:null===s,onClick:()=>r(!0),children:[(0,t.jsx)(az.default,{sx:{fontSize:20}}),"연결 이력"]}),(0,t.jsxs)(yv,{type:"button",disabled:!0,children:[(0,t.jsx)(n2.default,{sx:{fontSize:20}}),"수정하기"]}),(0,t.jsxs)(yv,{type:"button",disabled:null===a.default.modal.serviceWorkerDetail.selectedEmploymentContract,onClick:()=>n(!0),children:[(0,t.jsx)(nJ,{sx:{fontSize:20}}),"추가하기"]})]})]}),0===m.length?(0,t.jsxs)(yC,{children:[(0,t.jsx)(n6.default,{sx:{fontSize:24,color:"#494F53"}}),(0,t.jsxs)(yL,{children:[(0,t.jsx)(yP,{children:"연결된 이용자가 없습니다."}),(0,t.jsx)(yN,{children:null===a.default.modal.serviceWorkerDetail.selectedEmploymentContract?"계약 후 이용자를 연결할 수 있습니다.":"[+추가하기] 버튼을 클릭해 이용자를 연결해주세요."})]})]}):(0,t.jsx)(yI,{children:m.map(({contractId:e,clientName:n})=>{let i=h[e],l=p?.serviceWorkerId===s?p.byContractId[e]:void 0,a=l?.serviceType??i?.serviceType??null;return(0,t.jsxs)(yz,{children:[(0,t.jsxs)(yT,{children:[(0,t.jsx)(yE,{children:n}),(0,t.jsxs)(yS,{children:[(0,t.jsxs)(yk,{children:[(0,t.jsx)(yD,{children:"주소"}),(0,t.jsx)(yA,{}),(0,t.jsx)(y$,{$muted:!0,children:yg(i)})]}),(0,t.jsxs)(yk,{children:[(0,t.jsx)(yD,{children:"휴대폰"}),(0,t.jsx)(yA,{}),(0,t.jsx)(y$,{children:yb(i)})]}),(0,t.jsxs)(yk,{children:[(0,t.jsx)(yD,{children:"이메일"}),(0,t.jsx)(yA,{}),(0,t.jsx)(y$,{children:"-"})]}),(0,t.jsxs)(yk,{children:[(0,t.jsx)(yD,{$small:!0,children:"서비스"}),(0,t.jsx)(yA,{}),(0,t.jsx)(y$,{$small:!0,children:null===a?"-":function(e){switch(e){case"MEAL":return"식사관리 서비스";case"NUTRITION":return"영양관리 서비스";case"DISABILITY_ACTIVITY_SUPPORT":return"장애인 활동지원 서비스"}}(a)})]}),(0,t.jsxs)(yk,{children:[(0,t.jsx)(yD,{$small:!0,children:"연결 시작일"}),(0,t.jsx)(yA,{}),(0,t.jsx)(y$,{$small:!0,children:void 0===l?"-":(0,aP.formatConnectionDate)(l.startedOn)})]}),(0,t.jsxs)(yk,{children:[(0,t.jsx)(yD,{$small:!0,children:"연결 종료일"}),(0,t.jsx)(yA,{}),(0,t.jsx)(y$,{$small:!0,children:ym(l)})]}),(0,t.jsxs)(yk,{children:[(0,t.jsx)(yD,{$small:!0,children:"상태"}),(0,t.jsx)(yA,{}),(0,t.jsx)(y$,{$small:!0,children:yj(i?.status)})]})]})]}),(0,t.jsx)(yO,{children:(0,t.jsx)(yR,{children:"지금 선택됨"})})]},e)})}),e&&null!==a.default.modal.serviceWorkerDetail.serviceWorkerId?(0,t.jsx)(wQ,{onClose:()=>n(!1),onSelectClient:(e,t)=>{null!==t?f({contractId:e,currentAssignee:t}):b(e)},serviceWorkerId:a.default.modal.serviceWorkerDetail.serviceWorkerId,serviceType:a.default.modal.serviceWorkerDetail.selectedEmploymentContract?.serviceType??null}):null,(0,t.jsx)(aE,{isOpen:null!==c,title:"다른 제공인력이 담당 중인 이용자예요.",description:`지금 ${c?.currentAssignee.name??"다른 제공인력"} 제공인력이 담당하고 있어요. 이 제공인력으로 담당을 바꿀까요? 바꾸면 기존 담당자와의 연결은 끊어져요.`,cancelLabel:"취소",confirmLabel:"담당 바꾸기",onCancel:()=>f(null),onConfirm:()=>{f(null),null!==c&&b(c.contractId)}}),o&&null!==s?(0,t.jsx)(aP.default,{title:"이용자 연결 이력",source:{kind:"serviceWorker",serviceWorkerId:s},onClose:()=>r(!1)}):null]})}),yx=l.default.section.withConfig({componentId:"zh__sc-58e34935-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,yg=e=>e?.client.address??"-",ym=e=>{if(void 0===e)return"-";if(null===e.endedOn)return e.isCurrent?"연결 중":"-";let t=(0,aP.formatConnectionDate)(e.endedOn);return e.isCurrent?`${t} (예정)`:t},yb=e=>{let t=e?.client.phoneNumber;return null==t||""===t.trim()?"-":t},yj=e=>e===rx.default.ACTIVE?"서비스중":e===rx.default.TERMINATED?"종료":e===rx.default.COMPLETED?"완료":"-",y_=l.default.div.withConfig({componentId:"zh__sc-58e34935-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
  min-height: 40px;
`,yw=l.default.h3.withConfig({componentId:"zh__sc-58e34935-2"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #101828;
`,yy=l.default.div.withConfig({componentId:"zh__sc-58e34935-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,yv=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-58e34935-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,yC=l.default.div.withConfig({componentId:"zh__sc-58e34935-5"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 186px;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,yI=l.default.div.withConfig({componentId:"zh__sc-58e34935-6"})`
  overflow: auto hidden;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;

  width: 100%;
`,yz=l.default.div.withConfig({componentId:"zh__sc-58e34935-7"})`
  display: flex;
  flex: 0 0 319px;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  min-height: 248px;
  padding: 16px;
  border: 1px solid #5635ff;
  border-radius: 8px;

  background: #f7f5ff;
  box-shadow: 0 0 6px 0 #ddd8ff;
`,yT=l.default.div.withConfig({componentId:"zh__sc-58e34935-8"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,yE=l.default.div.withConfig({componentId:"zh__sc-58e34935-9"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,yS=l.default.div.withConfig({componentId:"zh__sc-58e34935-10"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,yk=l.default.div.withConfig({componentId:"zh__sc-58e34935-11"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,yD=l.default.div.withConfig({componentId:"zh__sc-58e34935-12"})`
  flex-shrink: 0;

  width: 69px;

  font-size: ${({$small:e})=>!0===e?12:14}px;
  line-height: normal;
  color: #0a0a0a;
`,yA=l.default.div.withConfig({componentId:"zh__sc-58e34935-13"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,y$=l.default.div.withConfig({componentId:"zh__sc-58e34935-14"})`
  font-size: ${({$small:e})=>!0===e?12:14}px;
  line-height: normal;
  color: ${({$muted:e})=>!0===e?"#45464e":"#0a0a0a"};
`,yR=l.default.span.withConfig({componentId:"zh__sc-58e34935-15"})`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #fff;
  letter-spacing: -1px;

  background: #4f39f6;
`,yO=l.default.div.withConfig({componentId:"zh__sc-58e34935-16"})`
  display: flex;
  align-items: flex-end;
  align-self: stretch;
  justify-content: flex-end;
`,yL=l.default.div.withConfig({componentId:"zh__sc-58e34935-17"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,yP=l.default.div.withConfig({componentId:"zh__sc-58e34935-18"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
`,yN=l.default.div.withConfig({componentId:"zh__sc-58e34935-19"})`
  font-size: 16px;
  line-height: 20px;
  color: #494f53;
  text-align: center;
`,yM=Object.keys(jt.default).filter(e=>e in jt.default),yF=[{key:js,label:"월 60시간 이상 적립"},{key:jc,label:"월 64시간 이상"},{key:jf,label:"월 65시간 이상"},{key:jh,label:"항상 적립"},{key:ju,label:"미적립"}],yB=[{key:jn,label:"근로소득"},{key:ji,label:"사업소득"},{key:jl,label:"기타소득"},{key:ja,label:"정액제"}],yU=[{key:jd,label:"기관 기준"},{key:jo,label:"항상 지급"},{key:jr,label:"항상 미지급"}],yY=[{key:"nationalPensionEnrolled",label:"국민연금"},{key:"healthInsuranceEnrolled",label:"건강보험"},{key:"employmentInsuranceEnrolled",label:"고용보험"},{key:"industrialAccidentInsuranceEnrolled",label:"산재보험"}],yW=["신규","보수"],yV={display:"flex",alignItems:"center",alignSelf:"stretch",width:"100%",height:36,padding:"4px 16px",fontSize:16},yH={...yV,flex:"none",width:158,maxWidth:"100%"};function yG(e,t,n){(0,i.useEffect)(()=>{if(!e)return;let i=e=>{let i=e.target;nK(i)||i instanceof Node&&null!==t.current&&t.current.contains(i)||n()};return document.addEventListener("pointerdown",i),()=>{document.removeEventListener("pointerdown",i)}},[e,n,t])}let yK=(0,n.observer)(function({onRequestEdit:e}){let n=a.default.modal.serviceWorkerDetail.serviceWorker,l=a.default.modal.serviceWorkerDetail.selectedEmploymentContract,d=a.default.modal.serviceWorkerDetail,r=d.isAccountInfoEditing,s=d.isSalaryEditing,c=d.isSocialInsuranceEditing,f=(0,i.useRef)(null),h=(0,i.useRef)(null),u=(0,i.useRef)(null),p=d.accountInfoDraft.bankName??n?.bankName??th.default.SELECT_EMPTY_VALUE,x="DISABILITY_ACTIVITY_SUPPORT"===(l?.serviceType??a.default.serviceWorker.info.byServiceWorker.currentServiceType),g=x&&l?.contractStartDate!==void 0,m=d.selectedEmploymentContractDraftRetirementReserveContractType,b=d.selectedEmploymentContractDraftIncomeTaxCategory,j=d.selectedEmploymentContractDraftLeaveAllowancePaymentMethod,_=e=>{d.hasEditChanges(e)||d.cancelEditSection(e)};return(yG(r,f,()=>_("accountInfo")),yG(s,h,()=>_("salary")),yG(c,u,()=>_("socialInsurance")),null===n)?null:(0,t.jsxs)(yq,{children:[(0,t.jsx)(yp,{}),(0,t.jsxs)(yQ,{ref:f,children:[(0,t.jsxs)(yJ,{children:[(0,t.jsxs)(y0,{children:[(0,t.jsx)(yZ,{children:"계좌∙자격 및 기타 정보"}),r&&(0,t.jsx)(il,{children:"수정 진행중"})]}),r?(0,t.jsxs)(y1,{children:[(0,t.jsxs)(y2,{type:"button",onClick:d.cancelAccountInfoEdit,children:[(0,t.jsx)(i9.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(y2,{type:"button",onClick:()=>void d.saveAccountInfoEdit(),children:[(0,t.jsx)(lW.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(y2,{type:"button",onClick:()=>e("accountInfo"),children:[(0,t.jsx)(n2.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(y6,{children:[(0,t.jsxs)(y4,{$width:191,children:[(0,t.jsx)(y3,{children:"은행명"}),(0,t.jsxs)(y7,{disabled:!r,style:yV,$isEmptySelected:p===th.default.SELECT_EMPTY_VALUE,value:p,onChange:e=>{d.updateAccountInfoDraftField("bankName",e.target.value===th.default.SELECT_EMPTY_VALUE?void 0:yM.find(t=>t===e.target.value))},children:[(0,t.jsx)("option",{value:th.default.SELECT_EMPTY_VALUE,children:"선택안함"}),yM.map(e=>(0,t.jsx)("option",{value:e,children:jt.default[e].label},e))]})]}),(0,t.jsxs)(y4,{children:[(0,t.jsx)(y3,{children:"계좌번호"}),(0,t.jsx)(o.default.Input.Text,{disabled:!r,placeholder:"계좌번호를 입력해주세요.",style:yV,value:d.accountInfoDraft.accountNumber??n.accountNumber??"",onChange:e=>d.updateAccountInfoDraftField("accountNumber",e.target.value)})]}),(0,t.jsxs)(y4,{children:[(0,t.jsx)(y3,{children:"예금주"}),(0,t.jsx)(o.default.Input.Text,{disabled:!r,placeholder:"예금주를 입력해주세요.",style:yV,value:d.accountInfoDraft.accountHolder??n.accountHolder??"",onChange:e=>d.updateAccountInfoDraftField("accountHolder",e.target.value)})]})]}),(0,t.jsxs)(y6,{children:[(0,t.jsxs)(y4,{children:[(0,t.jsx)(y3,{children:"제공인력 자격정보"}),(0,t.jsx)(o.default.Input.Text,{disabled:!r,placeholder:"자격정보를 입력해주세요.",style:yV,value:d.accountInfoDraft.qualificationInfo??n.qualificationInfo??"",onChange:e=>d.updateAccountInfoDraftField("qualificationInfo",e.target.value)})]}),(0,t.jsx)(y4,{children:g?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y3,{children:"교육 종류"}),(0,t.jsxs)(y8,{$isEmptySelected:!0,disabled:!0,style:yH,value:th.default.SELECT_EMPTY_VALUE,children:[(0,t.jsx)("option",{value:th.default.SELECT_EMPTY_VALUE,disabled:!0,children:"미정"}),yW.map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y3,{children:"실습 여부"}),(0,t.jsxs)(ve,{children:[(0,t.jsxs)(vd,{children:[(0,t.jsx)(vs,{checked:d.accountInfoDraft.isTrainee??n.isTrainee,disabled:!r,onChange:()=>d.updateAccountInfoDraftField("isTrainee",!0)}),"이수"]}),(0,t.jsxs)(vd,{children:[(0,t.jsx)(vs,{checked:!(d.accountInfoDraft.isTrainee??n.isTrainee),disabled:!r,onChange:()=>d.updateAccountInfoDraftField("isTrainee",!1)}),"미이수"]})]})]})}),(0,t.jsxs)(y4,{children:[(0,t.jsx)(y3,{children:"범죄경력 조회여부"}),(0,t.jsx)(ve,{children:(0,t.jsxs)(vd,{children:[(0,t.jsx)(vc,{checked:d.accountInfoDraft.criminalRecordChecked??n.criminalRecordChecked,disabled:!r,onChange:e=>d.updateAccountInfoDraftField("criminalRecordChecked",e.target.checked)}),"조회 완료"]})})]})]}),(0,t.jsx)(y6,{children:(0,t.jsxs)(y4,{children:[(0,t.jsx)(y3,{children:"관련서류 제출여부"}),(0,t.jsx)(o.default.Input.Text,{disabled:!r,placeholder:"제출여부를 입력해주세요.",style:yV,value:d.accountInfoDraft.relatedDocumentInfo??n.relatedDocumentInfo??"",onChange:e=>d.updateAccountInfoDraftField("relatedDocumentInfo",e.target.value)})]})}),(0,t.jsxs)(y6,{children:[(0,t.jsxs)(y4,{$width:191,children:[(0,t.jsx)(y3,{children:"단말기 정보"}),(0,t.jsxs)(ve,{children:[(0,t.jsxs)(vd,{children:[(0,t.jsx)(vs,{checked:"SMARTPHONE"===d.accountInfoTerminalType,disabled:!r,onChange:()=>d.updateAccountInfoTerminalType("SMARTPHONE")}),"스마트폰"]}),(0,t.jsxs)(vd,{children:[(0,t.jsx)(vs,{checked:"DEVICE"===d.accountInfoTerminalType,disabled:!r,onChange:()=>d.updateAccountInfoTerminalType("DEVICE")}),"단말기"]})]})]}),(0,t.jsxs)(y4,{children:[(0,t.jsx)(y3,{children:"단말기 번호"}),(0,t.jsx)(o.default.Input.Text,{disabled:!r||"DEVICE"!==d.accountInfoTerminalType,placeholder:"번호를 입력해주세요.",style:yV,value:d.accountInfoTerminalNumber,onChange:e=>d.updateAccountInfoDraftField("terminalNumber",e.target.value)})]})]}),!x&&(0,t.jsx)(y6,{children:(0,t.jsxs)(y4,{children:[(0,t.jsx)(y3,{children:"인력 유형"}),(0,t.jsx)(ve,{children:Object.entries(wX.default).map(([e,{label:n}])=>(0,t.jsxs)(vd,{children:[(0,t.jsx)(vs,{checked:l?.category===e,disabled:!0}),n]},e))})]})})]}),(0,t.jsxs)(yQ,{ref:h,children:[(0,t.jsxs)(yJ,{children:[(0,t.jsxs)(y0,{children:[(0,t.jsx)(yZ,{children:"급여 관련 사항"}),s&&(0,t.jsx)(il,{children:"수정 진행중"})]}),s?(0,t.jsxs)(y1,{children:[(0,t.jsxs)(y2,{type:"button",onClick:d.cancelSalaryEdit,children:[(0,t.jsx)(i9.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(y2,{type:"button",onClick:()=>void d.saveSalaryEdit(),children:[(0,t.jsx)(lW.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(y2,{type:"button",disabled:null===l,onClick:()=>e("salary"),children:[(0,t.jsx)(n2.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsx)(y6,{children:(0,t.jsxs)(y4,{children:[(0,t.jsx)(y3,{children:"퇴직적립금 관련 계약"}),(0,t.jsx)(vt,{children:yF.map(e=>(0,t.jsxs)(vr,{children:[(0,t.jsx)(vs,{checked:m===e.key,disabled:!s,onChange:()=>d.updateSelectedEmploymentContractDraftField("retirementReserveContractType",e.key)}),e.label]},e.key))})]})}),(0,t.jsxs)(y6,{children:[(0,t.jsxs)(vn,{children:[(0,t.jsx)(y3,{children:"소득세 구분"}),(0,t.jsx)(vi,{children:yB.map(e=>(0,t.jsxs)(vo,{children:[(0,t.jsx)(vs,{checked:b===e.key,disabled:!s,onChange:()=>d.updateSelectedEmploymentContractDraftField("incomeTaxCategory",e.key)}),e.label,e.key===ja&&(0,t.jsxs)(vl,{children:[(0,t.jsx)(o.default.Input.Text,{disabled:!s,placeholder:"금액을 입력하세요.",style:vf,value:null===d.selectedEmploymentContractDraftIncomeTaxFlatAmount?"":String(d.selectedEmploymentContractDraftIncomeTaxFlatAmount),onChange:e=>{let t=e.target.value;d.updateSelectedEmploymentContractDraftField("incomeTaxFlatAmount",""===t?void 0:Number(t))}}),(0,t.jsx)(va,{children:"원"})]})]},e.key))})]}),(0,t.jsxs)(y4,{$width:184,children:[(0,t.jsx)(y3,{children:"소득세 적용비율"}),(0,t.jsxs)(vl,{children:[(0,t.jsx)(o.default.Input.Text,{disabled:!s,type:"number",min:1,max:200,placeholder:"1~200 입력 가능",style:vh,value:null===d.selectedEmploymentContractDraftIncomeTaxRate?"":String(d.selectedEmploymentContractDraftIncomeTaxRate),onChange:e=>{let t=e.target.value;if(""===t)return void d.updateSelectedEmploymentContractDraftField("incomeTaxRate",void 0);let n=Number(t);d.updateSelectedEmploymentContractDraftField("incomeTaxRate",Number.isNaN(n)?void 0:Math.min(200,Math.max(1,n)))}}),(0,t.jsx)(va,{children:"%"})]})]})]}),(0,t.jsx)(y6,{children:(0,t.jsxs)(y4,{children:[(0,t.jsxs)(y3,{children:["비과세급여 적용 ",(0,t.jsx)(yX,{})]}),(0,t.jsx)(ve,{children:(0,t.jsxs)(vd,{children:[(0,t.jsx)(vc,{checked:d.selectedEmploymentContractDraftIsNonTaxableExclusionTarget,disabled:!s,onChange:e=>d.updateSelectedEmploymentContractDraftField("isNonTaxableExclusionTarget",e.target.checked)}),"비과세 처리 적용대상 제외"]})}),d.isNonTaxableExclusionTargetError&&(0,t.jsx)(y5,{children:"필수 입력값입니다."})]})}),(0,t.jsx)(y6,{children:(0,t.jsxs)(y4,{$width:338,children:[(0,t.jsx)(y3,{children:"연월차수당 지급방식"}),(0,t.jsx)(ve,{children:yU.map(e=>(0,t.jsxs)(vd,{children:[(0,t.jsx)(vs,{checked:j===e.key,disabled:!s,onChange:()=>d.updateSelectedEmploymentContractDraftField("leaveAllowancePaymentMethod",e.key)}),e.label]},e.key))})]})})]}),(0,t.jsxs)(yQ,{ref:u,children:[(0,t.jsxs)(yJ,{children:[(0,t.jsxs)(y0,{children:[(0,t.jsx)(yZ,{children:"사회보험"}),c&&(0,t.jsx)(il,{children:"수정 진행중"})]}),c?(0,t.jsxs)(y1,{children:[(0,t.jsxs)(y2,{type:"button",onClick:d.cancelSocialInsuranceEdit,children:[(0,t.jsx)(i9.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(y2,{type:"button",onClick:()=>void d.saveSocialInsuranceEdit(),children:[(0,t.jsx)(lW.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(y2,{type:"button",onClick:()=>e("socialInsurance"),children:[(0,t.jsx)(n2.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(vu,{children:[(0,t.jsxs)(vp,{children:[(0,t.jsx)(vx,{children:"구분"}),(0,t.jsx)(vx,{children:"가입 여부"}),(0,t.jsx)(vx,{children:"보수월액(원)"}),(0,t.jsx)(vx,{children:"비고"})]}),yY.map(({key:e,label:i})=>(0,t.jsxs)(vg,{children:[(0,t.jsx)(vm,{children:i}),(0,t.jsx)(vm,{children:(0,t.jsxs)(vb,{children:[(0,t.jsx)(vc,{checked:d.socialInsuranceDraft[e]??n[e]??!1,disabled:!c,onChange:t=>d.updateSocialInsuranceDraftField(e,t.target.checked)}),"가입"]})}),(0,t.jsx)(vm,{children:(0,t.jsx)(vj,{value:"",readOnly:!0})}),(0,t.jsx)(vm,{children:(0,t.jsx)(vj,{value:"",readOnly:!0})})]},e))]})]})]})});function yX(){return(0,t.jsx)(y9,{children:" *"})}let yq=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 48px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
  min-height: 0;
  padding: 24px;
  border-radius: 10px;

  background: #fcfdff;
`,yQ=l.default.section.withConfig({componentId:"zh__sc-5f426f6a-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,yJ=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-2"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  min-height: 40px;
`,yZ=l.default.h3.withConfig({componentId:"zh__sc-5f426f6a-3"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #101828;
`,y0=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-4"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,y1=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,y2=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-5f426f6a-6"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,y6=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-7"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,y4=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-8"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  min-width: 0;

  ${({$width:e})=>void 0!==e?`
        flex: none;
        width: ${e}px;
      `:`
        flex: 1;
      `}
`,y5=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-9"})`
  margin-top: 2px;
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,y3=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-10"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,y9=l.default.span.withConfig({componentId:"zh__sc-5f426f6a-11"})`
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: #e7000b;
`,y8=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-5f426f6a-12"})`
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,y7=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-5f426f6a-13"})`
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,ve=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-14"})`
  display: flex;
  gap: 24px;
  align-items: center;
  height: 36px;
`,vt=(0,l.default)(ve).withConfig({componentId:"zh__sc-5f426f6a-15"})`
  align-self: stretch;
`,vn=(0,l.default)(y4).withConfig({componentId:"zh__sc-5f426f6a-16"})``,vi=(0,l.default)(ve).withConfig({componentId:"zh__sc-5f426f6a-17"})`
  align-self: stretch;
`,vl=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-18"})`
  display: flex;
  gap: 4px;
  align-items: center;
  height: 36px;
`,va=l.default.span.withConfig({componentId:"zh__sc-5f426f6a-19"})`
  flex-shrink: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,vd=l.default.label.withConfig({componentId:"zh__sc-5f426f6a-20"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  white-space: nowrap;
`,vo=(0,l.default)(vd).withConfig({componentId:"zh__sc-5f426f6a-21"})`
  flex: 1;
`,vr=(0,l.default)(vd).withConfig({componentId:"zh__sc-5f426f6a-22"})`
  flex: 1;
`,vs=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-5f426f6a-23"})`
  width: 20px;
  height: 20px;
`,vc=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-5f426f6a-24"})`
  width: 24px;
  height: 24px;
`,vf={...yV,flex:"none",width:160},vh={...yV,flex:"none",width:"100%"},vu=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-25"})`
  overflow: hidden;
  align-self: stretch;
`,vp=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-26"})`
  display: grid;
  grid-template-columns: 1fr 1.15fr 1.35fr 1.35fr;
  border-bottom: 1px solid #e5e7eb;
  background: #f3f4f6;
`,vx=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-27"})`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 32px;

  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #0a0a0a;
`,vg=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-28"})`
  display: grid;
  grid-template-columns: 1fr 1.15fr 1.35fr 1.35fr;
  min-height: 64px;

  &:not(:last-child) {
    border-bottom: 1px solid #e5e7eb;
  }
`,vm=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-29"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 12px;

  font-size: 16px;
  line-height: 20px;
  color: #0a0a0a;
`,vb=l.default.label.withConfig({componentId:"zh__sc-5f426f6a-30"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
`,vj=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-5f426f6a-31"})`
  width: 100%;
  height: 36px;
  padding: 4px 16px;
`,v_={status:"WAITING_TO_LINK",badge:{label:"연동 대기",color:"lightBlue"},action:{label:"연동 대기중...",color:"blue",disabled:!0}};function vw(e){return e?.isCreated===!0}function vy(e,t){return null!==e.createdAt&&(null===t.createdAt||e.createdAt>t.createdAt||e.createdAt===t.createdAt&&String(e.id)>String(t.id))}function vv(e,t){return 0===t||0===e?"unchecked":e===t?"checked":"indeterminate"}function vC({status:e,onClick:n}){return(0,t.jsx)(vY,{$status:e,onClick:n,children:"checked"===e?(0,t.jsx)(lW.default,{sx:{fontSize:18}}):"indeterminate"===e?(0,t.jsx)(sr,{sx:{fontSize:20}}):null})}let vI=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,n=e.documentTemplateListStatus,l=e.employmentContractDocumentListStatus,d=e.documentTemplates,o=e.employmentContractDocuments,r=e.selectedEmploymentContractId,[s,c]=(0,i.useState)(new Set),[f,h]=(0,i.useState)(!1),u=(0,i.useMemo)(()=>{let e=new Map;return o.forEach(t=>{let n=e.get(t.templateId);(void 0===n||vy(t,n))&&e.set(t.templateId,t)}),e},[o]),p=(0,i.useMemo)(()=>d.flatMap(e=>{let t=u.get(e.id);return void 0===t?[]:[{phaseGroup:e.phaseGroup,phaseGroupLabel:e.phaseGroupLabel,templateId:e.id,templateName:t.templateName,templateImagePath:e.templateImagePath,document:t}]}),[u,d]),x=(0,i.useMemo)(()=>{let e=new Map;return p.forEach(t=>{let n=e.get(t.phaseGroup);void 0===n?e.set(t.phaseGroup,{key:t.phaseGroup,label:t.phaseGroupLabel,cards:[t]}):n.cards.push(t)}),Array.from(e.values())},[p]),g=(0,i.useMemo)(()=>Array.from(new Set(p.flatMap(e=>vw(e.document)?[e.document.id]:[]))),[p]),m=g.filter(e=>s.has(e)).length,b=vv(m,g.length),j=e=>{c(t=>{let n=new Set(t);return e.forEach(e=>n.add(e)),n})},_=e=>{c(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n})},w=e=>{let t=new Set(e);return p.filter(e=>vw(e.document)&&t.has(e.document.id))},y=async t=>{let n=e.serviceWorkerId;if(null===n)return a.default.ui.layout.toast.error("제공인력 정보를 찾을 수 없어 출력을 진행할 수 없습니다."),null;let i=Array.from(new Set(t.filter(e=>null!==e.document&&"AUTO_CREATED"===e.document.status).map(e=>e.document.id)));if(0===i.length)return!1;let l=await Promise.all(i.map(e=>aC.default.data.serviceWorker.patchDocument({id:n,documentId:e,payload:{fields:[]}}))),d=l.find(([e])=>null!==e)?.[0]??null;return null!==d?(a.default.ui.layout.toast.error(d.message??"서류 상태 저장에 실패했습니다."),null):(await a.default.data.serviceWorker.employmentContractDocumentList.refetch(),!0)},v=async e=>{let{document:t}=e;if(null===t)return null;let[n,i]=await aC.default.data.serviceWorker.getDocumentTemplate({templateId:e.templateId});return null!==n||null===i?null:i.map(e=>{let n=t.inputData.find(t=>t.page===e.page&&t.fieldKey===e.fieldKey);return{...e,value:n?.value??null}})},C=async e=>{let t=[],n=[],i=0;for(let l of e){let e=await v(l);if(null===e)return a.default.ui.layout.toast.error(`서류 서식 정보를 불러오지 못했습니다. (${l.templateName})`),null;(l.templateImagePath??[]).forEach((a,d)=>{if(""===a)return;let o=d+1;i+=1,t.push({id:`${l.document.id}-${o}`,templateId:l.templateId,imagePath:a,page:i}),e.filter(e=>e.page===o).forEach(e=>{n.push({...e,id:e.id,page:i})})})}return{pages:t,fields:n}},I=async(t,n)=>{if(0!==t.length){h(!0);try{let i=w(t),l=await y(i);if(null===l)return;l&&await new Promise(e=>{window.setTimeout(e,600)});let d=w(t),o=await C(d);if(null===o)return;let{pages:r,fields:s}=o;if(0===r.length)return void a.default.ui.layout.toast.error("출력할 서류 이미지가 없습니다.");let f=1===d.length?d[0]?.templateName??"제공인력 서류 출력":`제공인력 서류 ${d.length}건`,h=!1;await (0,uB.renderDocumentPrintView)({pages:r,fields:s,printTitle:f,retryOnImageLoadFailure:{refresh:async()=>{await a.default.data.serviceWorker.documentTemplateList.refetch()},rebuildPayload:async()=>{var n,i;let l,a,d=(n=e.documentTemplates,i=e.employmentContractDocuments,l=new Map,i.forEach(e=>{let t=l.get(e.templateId);(void 0===t||vy(e,t))&&l.set(e.templateId,e)}),a=new Set(t),n.flatMap(e=>{let t=l.get(e.id);return void 0!==t&&vw(t)&&!0===a.has(t.id)?[{phaseGroup:e.phaseGroup,phaseGroupLabel:e.phaseGroupLabel,templateId:e.id,templateName:t.templateName,templateImagePath:e.templateImagePath,document:t}]:[]})),o=await C(d);return null===o||0===o.pages.length?null:{...o,printTitle:f}}},onImageLoadFailure:e=>{h=!0,a.default.ui.layout.toast.error(`서류 이미지 ${e}개 로딩에 실패하여 출력을 중단했습니다.`)}}),n&&!h&&c(new Set)}finally{h(!1)}}};return null===r?(0,t.jsx)(vU,{children:"선택 가능한 계약이 없습니다."}):("loading"===n||"loading"===l)&&0===p.length?(0,t.jsx)(vU,{children:"서류 목록을 불러오는 중입니다."}):"error"===n||"error"===l?(0,t.jsx)(vU,{children:"서류 목록을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요."}):0===p.length?(0,t.jsx)(vU,{children:"등록된 서류가 없습니다."}):(0,t.jsxs)(vz,{children:[(0,t.jsxs)(vT,{children:[(0,t.jsxs)(vS,{onClick:()=>{"checked"===b?_(g):j(g)},children:[(0,t.jsx)(vC,{status:b}),"전체 선택하기"]}),(0,t.jsxs)(vE,{children:[(0,t.jsxs)(vk,{disabled:0===m||f,onClick:()=>void I(Array.from(s),!0),children:[(0,t.jsx)(sz.default,{sx:{fontSize:16}}),"선택한 서류 출력하기"]}),(0,t.jsxs)(vk,{disabled:0===g.length||f,onClick:()=>void I(g,!1),children:[(0,t.jsx)(sz.default,{sx:{fontSize:16}}),"전체 출력하기"]})]})]}),x.map(e=>(0,t.jsxs)(vD,{children:[(0,t.jsxs)(vA,{onClick:()=>{let t=e.cards.flatMap(e=>vw(e.document)?[e.document.id]:[]);"checked"===vv(t.filter(e=>s.has(e)).length,t.length)?_(t):j(t)},children:[(0,t.jsx)(vC,{status:vv(e.cards.filter(e=>vw(e.document)&&s.has(e.document.id)).length,e.cards.filter(e=>vw(e.document)).length)}),"[",e.label,"]"]}),(0,t.jsx)(v$,{children:e.cards.map(e=>{let n=e.templateImagePath?.[0]??null,i=vw(e.document)&&s.has(e.document.id),l=null===e.document?v_:(0,s9.getServiceWorkerDocumentStatusUi)(e.document.badgeLabel,e.document.actionLabel);return(0,t.jsxs)(vR,{children:[(0,t.jsx)(vO,{children:(0,t.jsx)(vC,{status:i?"checked":"unchecked",onClick:()=>{var t;vw(e.document)&&(t=e.document.id,c(e=>{let n=new Set(e);return n.has(t)?n.delete(t):n.add(t),n}))}})}),(0,t.jsxs)(vL,{$color:l.badge.color,children:[l.badge.icon,l.badge.label]}),(0,t.jsx)(vP,{children:null!==n&&""!==n?(0,t.jsx)(sn.default,{src:n,width:210,height:297,style:{width:"auto",height:"90%",maxWidth:"90%",objectFit:"contain"},loading:"eager",alt:e.templateName}):(0,t.jsx)(sl,{size:40,color:"#D1D5DC"})}),(0,t.jsxs)(vN,{children:[(0,t.jsx)(vM,{children:(0,t.jsx)(vF,{children:e.templateName})}),(0,t.jsx)(vB,{$color:l.action.color,disabled:!0===l.action.disabled||f||null===n||""===n,onClick:()=>{null!==e.document&&a.default.modal.documentView.openServiceWorkerDocument(e.document.id,{templateId:e.templateId})},children:null===n||""===n?"이미지 없음":l.action.label})]})]},e.templateId)})})]},e.key))]})}),vz=l.default.div.withConfig({componentId:"zh__sc-10675099-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  min-height: 0;
  padding: 24px;

  background: #fcfdff;
`,vT=l.default.div.withConfig({componentId:"zh__sc-10675099-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,vE=l.default.div.withConfig({componentId:"zh__sc-10675099-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,vS=l.default.button.withConfig({componentId:"zh__sc-10675099-3"})`
  cursor: pointer;

  display: flex;
  gap: 8px;
  align-items: center;

  width: fit-content;
  padding: 0;
  border: 0;

  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;

  background: transparent;
`,vk=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-10675099-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #4f39f6;
`,vD=l.default.div.withConfig({componentId:"zh__sc-10675099-5"})`
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: flex-start;
  align-self: stretch;
`,vA=l.default.div.withConfig({componentId:"zh__sc-10675099-6"})`
  cursor: pointer;

  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;
`,v$=l.default.div.withConfig({componentId:"zh__sc-10675099-7"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: stretch;
  align-self: stretch;
`,vR=l.default.div.withConfig({componentId:"zh__sc-10675099-8"})`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 188px;
  height: 232px;
  border: 1px solid #d1d5dc;
  border-radius: 8px;

  background: #fff;
`,vO=l.default.div.withConfig({componentId:"zh__sc-10675099-9"})`
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 8px;
`,vL=l.default.div.withConfig({componentId:"zh__sc-10675099-10"})`
  position: absolute;
  top: 8px;
  right: 8px;

  display: inline-flex;
  gap: 4px;
  align-items: center;

  padding: 4px 6px;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #fff;

  background: ${({$color:e})=>{switch(e){case"lightBlue":return"#9FBFFF";case"orange":return"#FF6900";case"gray":return"#77798B";case"black":return"#0a0a0a";default:return"#2264E8"}}};
`,vP=l.default.div.withConfig({componentId:"zh__sc-10675099-11"})`
  overflow: hidden;
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  height: 140px;
  border-radius: 7px 7px 0 0;

  background: #f3f4f6;
`,vN=l.default.div.withConfig({componentId:"zh__sc-10675099-12"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,vM=l.default.div.withConfig({componentId:"zh__sc-10675099-13"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,vF=l.default.div.withConfig({componentId:"zh__sc-10675099-14"})`
  overflow: hidden;
  display: -webkit-box;
  flex: 1 0 0;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

  height: 45px;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
  color: #0a0a0a;
  white-space: normal;
`,vB=l.default.button.withConfig({componentId:"zh__sc-10675099-15"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  height: 32px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-align: center;

  background: ${({$color:e})=>{switch(e){case"indigo":return"#505794";case"orange":return"#FF6900";case"gray":return"#77798B";case"black":return"#0A0A0A";default:return"#2264E8"}}};

  &:disabled {
    cursor: not-allowed;
    border: 1px solid #d1d5db;
    color: #9ca3af;
    background: #f9fafb;
  }
`,vU=l.default.div.withConfig({componentId:"zh__sc-10675099-16"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #4b5563;
`,vY=l.default.div.withConfig({componentId:"zh__sc-10675099-17"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  padding: 2px;
  border: 1px solid #58616a;
  border-color: ${({$status:e})=>"unchecked"===e?"#58616a":"#256EF4"};
  border-radius: 4px;

  color: #fff;

  background: ${({$status:e})=>"unchecked"===e?"#fff":"#256EF4"};
`,vW=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail;return(0,t.jsx)(vV,{role:"tablist","aria-label":"제공인력 상세 탭",children:e.tabs.map(n=>(0,t.jsx)(vH,{type:"button",role:"tab","aria-selected":n.active,$active:n.active,onClick:()=>e.setActiveTab(n.key),children:n.label},n.key))})}),vV=l.default.div.withConfig({componentId:"zh__sc-53613c76-0"})`
  display: flex;
  align-self: flex-start;

  width: 100%;
  height: 56px;
  border-bottom: 1px solid #e5e7eb;

  background-color: #fff;
`,vH=l.default.button.withConfig({componentId:"zh__sc-53613c76-1"})`
  cursor: pointer;

  position: relative;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 180px;
  height: 56px;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: ${({$active:e})=>e?"#052b57":"#464c53"};

  &::after {
    content: '';

    position: absolute;
    bottom: -1px;
    left: 0;

    width: 100%;
    height: 4px;

    background-color: ${({$active:e})=>e?"#052b57":"transparent"};
  }
`;var vG=e.i(37163),vK=e.i(97861),vX=e.i(91916);function vq({isOpen:e,onCancel:n,onConfirm:i}){return e?(0,t.jsx)(d.default,{children:(0,t.jsxs)(vQ,{children:[(0,t.jsxs)(vJ,{children:[(0,t.jsx)(vZ,{children:"계약 정보를 저장할까요?"}),(0,t.jsxs)(v0,{children:["수정된 정보는 연결된 서류의 자동입력 항목에 함께 반영됩니다.","\n","이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다."]})]}),(0,t.jsxs)(v1,{children:[(0,t.jsx)(v6,{type:"button",onClick:n,children:"취소하기"}),(0,t.jsx)(v4,{type:"button",onClick:i,children:"저장 및 모든 서류에 반영"})]})]})}):null}let vQ=l.default.div.withConfig({componentId:"zh__sc-e1c0716c-0"})`
  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,vJ=l.default.div.withConfig({componentId:"zh__sc-e1c0716c-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,vZ=l.default.p.withConfig({componentId:"zh__sc-e1c0716c-2"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,v0=l.default.p.withConfig({componentId:"zh__sc-e1c0716c-3"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
  white-space: pre-line;
`,v1=l.default.div.withConfig({componentId:"zh__sc-e1c0716c-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,v2=l.css`
  height: 36px;
  padding: 8px 16px;
  font-size: 16px;
`,v6=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-e1c0716c-5"})`
  ${v2}
`,v4=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-e1c0716c-6"})`
  ${v2}
`;function v5({isOpen:e,title:n,description:i,onCancel:l,onConfirm:a}){return e?(0,t.jsx)(d.default,{children:(0,t.jsxs)(v3,{children:[(0,t.jsxs)(v9,{children:[(0,t.jsx)(v8,{children:n}),(0,t.jsx)(v7,{children:i})]}),(0,t.jsxs)(Ce,{children:[(0,t.jsx)(Cn,{type:"button",onClick:l,children:"취소하기"}),(0,t.jsx)(Ci,{type:"button",onClick:a,children:"변경하기"})]})]})}):null}let v3=l.default.div.withConfig({componentId:"zh__sc-b641051-0"})`
  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,v9=l.default.div.withConfig({componentId:"zh__sc-b641051-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,v8=l.default.p.withConfig({componentId:"zh__sc-b641051-2"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,v7=l.default.p.withConfig({componentId:"zh__sc-b641051-3"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
  white-space: pre-line;
`,Ce=l.default.div.withConfig({componentId:"zh__sc-b641051-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,Ct=l.css`
  height: 36px;
  padding: 8px 16px;
  font-size: 16px;
`,Cn=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-b641051-5"})`
  ${Ct}
`,Ci=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-b641051-6"})`
  ${Ct}
`,Cl=e=>{if(null===e||!x8.default.brand.calendarDateString.is(e))return"-";let[t,n,i]=e.split("-");return`${t}년 ${Number(n)}월 ${Number(i)}일`},Ca=(0,n.observer)(function({onRequestEdit:e}){let[n,l]=(0,i.useState)(!1),[d,o]=(0,i.useState)(!1),[r,s]=(0,i.useState)(!1),c=(0,i.useRef)(null),f=a.default.modal.serviceWorkerDetail,h=f.serviceWorker,u=h?.name??"",p=h?.status,x=h?.firstRegisteredDate??null,g=f.employmentContractStatusOptions,m=f.selectedEmploymentContractStatus??"UNCONTRACTED",b=f.selectedEmploymentContractDraftStatus??"",j=f.selectedEmploymentContractExpirationReminder,_=f.employmentContractRoundOptions,w=f.selectedEmploymentContractId??"",y=f.isEmploymentContractEditing,v=f.selectedEmploymentContractDraftContractStartDate??"",C=f.selectedEmploymentContractDraftTerminatedOn,I=f.selectedEmploymentContract,z=I?.serviceType,T=I?.contractStartDate??null,E=I?.contractEndDate??null,S=m===vG.default.COMPLETED,k=b===vG.default.TERMINATED,D=(0,nV.getTodayCalendarDateString)(),A=D.replaceAll("-","."),$=`${T?.replaceAll("-",".")??"-"} ~ ${E?.replaceAll("-",".")??"-"}`,R=Cl(x),O=Cl(T),L=null===E?null:Cl(E),P=m===vG.default.TERMINATED?f.selectedEmploymentContractDraftTerminatedOn:"",N=x8.default.brand.calendarDateString.is(P)?Cl(P):null,M=(0,nV.getEmploymentContractTenureLabel)(h?.employmentContracts??[]);return((0,i.useEffect)(()=>{if(!y)return;let e=e=>{let t=e.target;nG(t)||nK(t)||!(t instanceof Node&&null!==c.current&&c.current.contains(t))&&(f.hasEditChanges("employmentContract")||f.cancelEmploymentContractEdit())};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[y,f]),null===h||void 0===p)?null:(0,t.jsxs)(Cd,{ref:c,children:[(0,t.jsxs)(Co,{children:[(0,t.jsx)(Cu,{children:u}),(0,t.jsxs)(Cp,{children:[(0,t.jsx)(Cg,{children:vK.default[(0,vX.getServiceWorkerUiStatus)(h)].label}),"ON_LEAVE"===(0,vX.getServiceWorkerUiStatus)(h)&&"string"==typeof h.matchingWaitSince?(0,t.jsxs)(Cx,{children:[(0,aP.formatConnectionDate)(h.matchingWaitSince),"부터","string"==typeof h.matchingWaitReasonLabel?` \xb7 ${h.matchingWaitReasonLabel}`:""]}):null,(0,t.jsx)(Cg,{children:(0,rm.getServiceBadgeText)(z??null)})]}),(0,t.jsx)(Cm,{children:y?(0,t.jsx)(Cb,{children:"수정 진행중"}):null}),(0,t.jsx)(Cj,{children:y?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(C_,{type:"button",onClick:()=>{f.cancelEmploymentContractEdit()},children:[(0,t.jsx)(i9.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(C_,{type:"button",onClick:()=>{f.hasEditChanges("employmentContract")?l(!0):f.cancelEmploymentContractEdit()},children:[(0,t.jsx)(lW.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(C_,{type:"button",disabled:S||null===I,onClick:()=>{S||null===I||e("employmentContract")},children:[(0,t.jsx)(n2.default,{sx:{fontSize:20}}),"수정하기"]})})]}),(0,t.jsx)(Cw,{children:(0,t.jsxs)(Cy,{children:[(0,t.jsx)(Cv,{children:"계약 상태"}),(0,t.jsxs)(CI,{value:y?b:m,disabled:!y||null===I,onChange:e=>{let t=e.target.value;if(""!==t){if(t===vG.default.TERMINATED&&t!==b)return void o(!0);if(t===vG.default.ACTIVE&&t!==b)return void s(!0);f.updateSelectedEmploymentContractDraftStatus(t)}},children:[null===I?(0,t.jsx)("option",{value:"UNCONTRACTED",children:"미계약"}):null,0===g.length&&null!==I?(0,t.jsx)("option",{value:"",children:"-"}):null,g.map(e=>(0,t.jsx)("option",{value:e.value,children:e.label},e.value))]}),null===I?(0,t.jsxs)(Cc,{type:"button",onClick:()=>{a.default.modal.serviceWorkerCreate.show("contract",a.default.serviceWorker.info.byServiceWorker.currentServiceType??"MEAL"),f.close()},children:[(0,t.jsx)(ei.default.ContractEdit,{size:16}),"계약하기"]}):null,null!==j?(0,t.jsxs)(Cs,{children:[(0,t.jsx)(rp.default,{$color:j.color,children:(0,nV.formatContractExpirationLabel)(j.remainingDays)}),(0,t.jsxs)(Cc,{type:"button",onClick:()=>{a.default.modal.serviceWorkerCreate.show("renew",z??a.default.serviceWorker.info.byServiceWorker.currentServiceType??"MEAL"),a.default.modal.serviceWorkerDetail.close()},children:[(0,t.jsx)(ei.default.ContractEdit,{size:16}),"재계약 하기"]})]}):null]})}),(0,t.jsx)(Cw,{children:(0,t.jsxs)(Cy,{children:[(0,t.jsx)(Cv,{children:"계약 회차"}),(0,t.jsxs)(Cz,{value:w,disabled:y||0===_.length,onChange:e=>{let t=e.target.value;f.setSelectedEmploymentContractId(""===t?null:t)},children:[0===_.length?(0,t.jsx)("option",{value:"",children:"-"}):null,_.map(e=>(0,t.jsx)("option",{value:e.id,children:e.label},e.id))]})]})}),(0,t.jsxs)(Cw,{children:[(0,t.jsxs)(Cy,{children:[(0,t.jsx)(Cv,{children:"접수일"}),(0,t.jsx)(CC,{children:R})]}),(0,t.jsx)(CT,{}),(0,t.jsxs)(Cy,{children:[(0,t.jsx)(Cv,{children:"계약 기간"}),y?(0,t.jsxs)(Cr,{children:[k?(0,t.jsx)(CC,{children:Cl(T)}):(0,t.jsx)(Ch,{value:v,readOnly:!1,onChange:e=>{f.updateSelectedEmploymentContractDraftContractStartDate(e)},placeholder:"YYYY-MM-DD"}),(0,t.jsx)(Cf,{children:"~"}),(0,t.jsx)(CC,{children:Cl(E)}),k?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Cf,{children:"퇴사일"}),(0,t.jsx)(Ch,{value:C,readOnly:!1,onChange:e=>{f.updateSelectedEmploymentContractDraftTerminatedOn(e)},placeholder:"YYYY-MM-DD"})]}):null]}):(0,t.jsx)(CC,{children:null===I?"-":`${O} - ${L??"-"}${null===N?"":` (퇴사 ${N})`}`})]}),(0,t.jsx)(CT,{}),(0,t.jsxs)(Cy,{children:[(0,t.jsx)(Cv,{children:"근속기간"}),(0,t.jsx)(CC,{children:M})]})]}),(0,t.jsx)(v5,{isOpen:d,title:"계약 상태를 퇴사로 변경 하시겠습니까?",description:`오늘(${A})을 퇴사일로 기록하고 퇴사 상태로 변경합니다. 원래 계약 종료일은 그대로 남습니다.
저장하면 이 서비스에서 연결된 이용자의 연결이 끊어지고, 이용자는 '매칭 대기'가 됩니다(계약중으로 되돌려도 연결은 다시 해야 합니다).
퇴사 상태에서는 계약 시작일은 수정할 수 없고, 퇴사일은 수정할 수 있습니다.`,onCancel:()=>{o(!1)},onConfirm:()=>{f.updateSelectedEmploymentContractDraftTerminatedOn(D),f.updateSelectedEmploymentContractDraftStatus(vG.default.TERMINATED),o(!1)}}),(0,t.jsx)(v5,{isOpen:r,title:"계약중 상태로 되돌리시겠습니까?",description:`이전 계약 기간 (${$})으로 되돌리며, 퇴사에서 계약중으로 변경됩니다.
계약중일 시, 계약 시작일을 수정할 수 있으며 계약 종료일은 수정할 수 없습니다.`,onCancel:()=>{s(!1)},onConfirm:()=>{f.updateSelectedEmploymentContractDraftStatus(vG.default.ACTIVE),s(!1)}}),(0,t.jsx)(vq,{isOpen:n,onCancel:()=>{l(!1)},onConfirm:()=>{f.saveSelectedEmploymentContractDraft().then(e=>{!0===e&&l(!1)})}})]})}),Cd=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px 24px;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;

  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,Co=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
`,Cr=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,Cs=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,Cc=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-3c59ca1c-4"})`
  gap: 8px;
  padding: 0 16px;
`,Cf=l.default.span.withConfig({componentId:"zh__sc-3c59ca1c-5"})`
  font-size: 16px;
  line-height: 24px;
  color: #475467;
`,Ch=(0,l.default)(o.default.Input.Date).attrs({style:{textAlign:"center"}}).withConfig({componentId:"zh__sc-3c59ca1c-6"})`
  width: 180px;
  height: 28px;
  font-size: 16px;
`,Cu=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-7"})`
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 83.333% */
  color: #0a0a0a;
`,Cp=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-8"})`
  display: flex;
  gap: 4px;
  align-items: center;
`,Cx=l.default.span.withConfig({componentId:"zh__sc-3c59ca1c-9"})`
  margin-left: 4px;
  font-size: 14px;
  color: #6e7079;
`,Cg=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-10"})`
  display: flex;
  gap: 10px;
  align-items: center;

  padding: 2px 12px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 24px; /* 150% */
  color: #0a0a0a;
  text-align: center;
`,Cm=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-11"})`
  display: flex;
  flex: 1;
`,Cb=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-12"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 999px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px;
  color: #fff;

  background: #4f39f6;
`,Cj=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-13"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,C_=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-3c59ca1c-14"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,Cw=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-15"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,Cy=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-16"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,Cv=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-17"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
`,CC=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-18"})`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
`,CI=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-3c59ca1c-19"})`
  height: 28px;
`,Cz=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-3c59ca1c-20"})`
  height: 36px;
`,CT=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-21"})`
  width: 1px;
  height: 24px;
  background: #dadee6;
`,CE=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,[n,l]=(0,i.useState)(null),[o,r]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1);if("ready"!==e.status||e.isDocumentViewOnly)return null;let f=t=>{let n=e.editingSection;if(null===n||n===t)return void e.startEditSection(t);if(!e.hasEditChanges(n)){e.cancelEditSection(n),e.startEditSection(t);return}l(t),r(!0)},h=()=>{l(null),r(!1)};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(CS,{children:[(0,t.jsxs)(Ck,{children:[(0,t.jsx)(CD,{children:"제공인력 상세보기"}),(0,t.jsxs)(CA,{onClick:()=>{let t=e.editingSection;null!==t&&e.hasEditChanges(t)?c(!0):e.close()},children:[(0,t.jsx)(en.X,{size:16}),"닫기"]})]}),(0,t.jsx)(Ca,{onRequestEdit:f}),(0,t.jsx)(vW,{}),(0,t.jsxs)(C$,{children:["basic"===e.activeTab&&(0,t.jsx)(wN,{}),"contract"===e.activeTab&&(0,t.jsx)(yK,{onRequestEdit:f}),"docs"===e.activeTab&&(0,t.jsx)(vI,{})]}),(0,t.jsx)(aE,{isOpen:o,onCancel:h,onConfirm:()=>{let t=e.editingSection;null===t||null===n||(e.cancelEditSection(t),e.startEditSection(n)),h()}}),(0,t.jsx)(aE,{isOpen:s,title:"수정 중인 내용을 저장하지 않고 닫을까요?",description:"지금 닫으면 수정 중인 내용이 저장되지 않습니다.",confirmLabel:"저장하지 않고 닫기",onCancel:()=>c(!1),onConfirm:()=>{let t=e.editingSection;null!==t&&e.cancelEditSection(t),c(!1),e.close()}})]})})}),CS=l.default.div.withConfig({componentId:"zh__sc-731779e3-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: 1050px;
  height: 90vh;
  border-radius: 8px;

  background: #fff;
`,Ck=l.default.div.withConfig({componentId:"zh__sc-731779e3-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  border-radius: 8px 8px 0 0;

  background: #fff;
`,CD=l.default.h2.withConfig({componentId:"zh__sc-731779e3-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px;
  color: #101828;
  letter-spacing: -0.439px;
`,CA=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-731779e3-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,C$=l.default.div.withConfig({componentId:"zh__sc-731779e3-4"})`
  display: flex;
  flex: 1;
  min-height: 0;
`,CR=(0,n.observer)(function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(sR,{}),(0,t.jsx)(nU,{}),(0,t.jsx)(xs,{}),(0,t.jsx)(_D,{}),(0,t.jsx)(CE,{}),(0,t.jsx)(pj,{}),(0,t.jsx)(mR,{})]})});e.s(["default",0,CR],55357)},31239,e=>{"use strict";e.i(3159);var t=e.i(46907),n=e.i(33261),i=e.i(7744),l=e.i(43174);let a=(0,t.observer)(function(){let e=(0,n.usePathname)(),t=(0,n.useRouter)(),a=l.default.ui.layout.targetPathname,d=l.default.data.auth.me.data?.organizationId??null,o=l.default.data.organization.serviceList.query,r=o?.id===d?l.default.data.organization.serviceList.data?.serviceList??null:null,s=r?.some(e=>!0===e.operatingStatus&&("MEAL"===e.type||"NUTRITION"===e.type))??!0;return(0,i.useEffect)(()=>{null!==d&&o?.id!==d&&l.default.data.organization.serviceList.setQuery({id:d})},[d,o?.id]),(0,i.useEffect)(()=>{e&&l.default.ui.layout.setPathname(e)},[e]),(0,i.useEffect)(()=>{null!==a&&(t.push(a),l.default.ui.layout.clearTargetPathname())},[t,a]),(0,i.useEffect)(()=>{let n="/diet-setting"===e||e?.startsWith("/diet-setting/");!s&&n&&r&&t.replace("/client/info/by-client")},[s,e,t,r]),(0,i.useEffect)(()=>{let n="/client/service-provision"===e||e?.startsWith("/client/service-provision/");!s&&n&&r&&t.replace("/client/info/by-client")},[s,e,t,r]),null});e.s(["default",0,a])},44997,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(94586),l=e.i(33261),a=e.i(7744),d=e.i(4153);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r=(0,a.forwardRef)(function(e,t){var n=e.color,i=e.size,l=void 0===i?24:i,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return a.default.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),a.default.createElement("polyline",{points:"6 9 12 15 18 9"}))});function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}r.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},r.displayName="ChevronDown";var c=(0,a.forwardRef)(function(e,t){var n=e.color,i=e.size,l=void 0===i?24:i,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return a.default.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),a.default.createElement("polyline",{points:"18 15 12 9 6 15"}))});c.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},c.displayName="ChevronUp";var f=e.i(38803),h=e.i(9454),u=e.i(43174),p=e.i(92428);function x(e){return null===e?"/":e.length>1&&e.endsWith("/")?e.slice(0,-1):e}function g(e,t){let n=x(e),i=x(t);return"/"===i?"/"===n:n===i||n.startsWith(`${i}/`)}function m(e,t){return t.startsWith("/")?"/"===e?t:`${x(e)}${t}`:""}function b(e,t){return m(e,t.matchSubpath??t.subpath)}let j=(0,n.observer)(function(){let e=x((0,l.usePathname)()),n=h.default.routes,d=u.default.data.auth.me.data,o=d?.organizationId??null,s=u.default.data.organization.serviceList.query,f=s?.id===o?u.default.data.organization.serviceList.data?.serviceList??null:null,j=f?.some(e=>!0===e.operatingStatus&&("MEAL"===e.type||"NUTRITION"===e.type))??!0,[P,N]=(0,a.useState)(()=>Object.fromEntries(n.map((t,n)=>[n,t.children?.some(n=>{let i=b(t.subpath,n);return!!i&&g(e,i)})??!1]))),M=e=>(e.children??[]).filter(t=>(0,p.canSee)(d,t.permissions)&&(j||"/client"!==e.subpath||"/service-provision"!==t.subpath)),F=n.map((e,t)=>({route:e,index:t})).filter(({route:e})=>j||"/diet-setting"!==e.subpath).filter(({route:e})=>(0,p.canSee)(d,e.permissions)).filter(({route:e})=>void 0===e.children||M(e).length>0);return(0,t.jsx)(_,{children:F.map(({route:n,index:l},a)=>{let d=M(n),o=d.length>0,s=d.some(t=>{let i=b(n.subpath,t);return!!i&&g(e,i)}),f=g(e,n.subpath)||s,h=s||(P[l]??!1);return(0,t.jsxs)(w,{children:[(0,t.jsx)(y,{$active:f,$clickable:!!(n.hasPage||o),as:n.hasPage?i.default:"div",href:n.hasPage?n.subpath:void 0,onClick:o?()=>{N(e=>({...e,[l]:!h}))}:void 0,children:(0,t.jsx)(v,{children:(0,t.jsx)(C,{children:(0,t.jsxs)(I,{children:[(0,t.jsx)(z,{children:n.icon?(0,t.jsx)(n.icon,{size:16,color:f?"#4F39F6":"#6E7079"}):null}),(0,t.jsx)(E,{$active:f,children:`${a+1}. ${n.label}`}),o?(0,t.jsx)(T,{children:h?(0,t.jsx)(c,{size:16,color:"#6E7079"}):(0,t.jsx)(r,{size:16,color:"#6E7079"})}):null]})})})}),o&&h?(0,t.jsx)(S,{children:(0,t.jsx)(k,{children:d.map((l,d)=>{let o=m(n.subpath,l.subpath),r=b(n.subpath,l),s=!!r&&g(e,r);return(0,t.jsx)(D,{as:l.hasPage?i.default:"div",href:l.hasPage&&o||void 0,children:(0,t.jsx)(A,{children:(0,t.jsx)($,{children:(0,t.jsx)(R,{children:(0,t.jsx)(O,{children:(0,t.jsx)(L,{$active:s,children:`${a+1}-${d+1}. ${l.label}`})})})})})},`${n.subpath}-${l.subpath}`)})})}):null]},n.subpath)})})}),_=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-0"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px 12px;
`,w=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-1"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`,y=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-2"})`
  cursor: ${({$clickable:e})=>e?"pointer":"default"};

  position: relative;

  flex-shrink: 0;

  width: 100%;
  height: 40px;
  border-radius: 8px;

  background: ${({$active:e})=>e?"#F1F0FA":"transparent"};
`,v=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-3"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  padding: 8px 8px 8px 16px;
`,C=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-4"})`
  flex-shrink: 0;
  width: 100%;
  height: 24px;
`,I=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  width: 100%;
  height: 100%;
`,z=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-6"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px; /* size-20 */
`,T=(0,f.default)(z).withConfig({componentId:"zh__sc-2fa5d58c-7"})``,E=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-8"})`
  flex: 1 0 0;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: ${({$active:e})=>e?"#4F39F6":"#45464E"};
`,S=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-9"})`
  position: relative;
  flex-shrink: 0;
  align-self: stretch;
`,k=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-10"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;
`,D=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-11"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 32px;
  padding: 0 8px 0 44px;
  border-radius: 8px;
`,A=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-12"})`
  flex-shrink: 0;
  width: 100%;
  height: 24px;
`,$=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-13"})`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`,R=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-14"})`
  display: flex;
  flex: 1 0 0;
  gap: 10px;
  align-items: center;

  min-width: 1px;
  height: 100%;
`,O=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-15"})`
  overflow: hidden;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 1px;
  height: 100%;
  padding: 1px 0;
`,L=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-16"})`
  flex-shrink: 0;

  width: 100%;

  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: ${({$active:e})=>e?"#4F39F6":"#45464E"};
`;e.s(["default",0,j],44997)},70552,e=>{"use strict";var t=e.i(9735),n=e.i(39635);e.i(3159);var i=e.i(46907),l=e.i(7744),a=e.i(38803),d=e.i(43174),o=e.i(24045),r=e.i(8179),s=e.i(23416),c=e.i(98273),f=e.i(64954);let h=[".xlsx"];function u(e){return Array.from(e.dataTransfer?.types??[]).includes("Files")}let p=(0,i.observer)(function(){let{isWindowFileDragging:e}=d.default.ui.layout,n=(0,l.useRef)(null),i=(0,l.useRef)(null),a=(0,l.useRef)(null),[f,p]=(0,l.useState)(!1),[z,T]=(0,l.useState)(!1),[E,S]=(0,l.useState)(!1),[k,D]=(0,l.useState)(null),A=f||e;(0,l.useEffect)(()=>()=>{null!==a.current&&clearTimeout(a.current)},[]);let $=e=>{let t,n;null!==e&&(n=(t=e.name.lastIndexOf("."))>=0?e.name.slice(t).toLowerCase():"",(h.includes(n)||(null!==a.current&&clearTimeout(a.current),S(!0),a.current=setTimeout(()=>{S(!1),a.current=null},2e3),0))&&D(e))},R=async()=>{if(null===k||z)return;T(!0);let[e]=await s.default.data.serviceWorker.importActivityRecordsExcel({file:k,organizationId:d.default.data.auth.me.data?.organizationId??void 0});if(T(!1),null!==e)return void d.default.ui.layout.toast.error(e.message??"파일 업로드에 실패했습니다. 잠시 후 다시 시도해 주세요.",3e3,n.current);S(!1),D(null);let t=d.default.data.serviceWorker.activityRecordList;null===t.query?t.setQuery({}):await t.refetch(),d.default.ui.layout.toast.success("파일 업로드를 완료했습니다.",3e3,n.current)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{ref:i,type:"file",accept:".xlsx",onChange:e=>{$(e.target.files?.[0]??null),e.target.value=""}}),(0,t.jsx)(g,{ref:n,children:(0,t.jsxs)(m,{$isDragging:A,$isError:E,$isUploading:z,$isFileSelected:null!==k,onClick:e=>{e.target instanceof HTMLElement&&null!==e.target.closest("button")||null===k&&(z||i.current?.click())},onDragOver:e=>{!u(e)||(e.preventDefault(),z||p(!0))},onDragLeave:e=>{u(e)&&(e.preventDefault(),p(!1))},onDrop:e=>{!u(e)||(e.preventDefault(),z||(p(!1),$(e.dataTransfer.files?.[0]??null)))},children:[null===k?(0,t.jsxs)(t.Fragment,{children:[!1===E&&(0,t.jsx)(o.Upload,{size:20,color:"#4F39F6"}),(0,t.jsx)(b,{$isError:E,children:E?"지원하지 않는 파일 형식입니다.":A?"파일을 여기에 놓으면 업로드 됩니다.":z?"파일을 업로드하고 있습니다.":"[전자바우처 - 서비스 이용내역] 엑셀 파일을 이곳에 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요."}),(0,t.jsx)(j,{children:"지원 파일 형식: 엑셀(.xlsx)"})]}):(0,t.jsxs)(_,{children:[(0,t.jsxs)(w,{children:[(0,t.jsx)(y,{children:(0,t.jsx)(c.default.News,{size:17,color:"#2264E8"})}),(0,t.jsx)(v,{children:k.name})]}),(0,t.jsxs)(C,{type:"button",onClick:()=>{D(null)},disabled:z,children:["삭제",(0,t.jsx)(r.X,{size:14})]})]}),(0,t.jsx)(I,{type:"button",onClick:()=>{R()},disabled:null===k||z,$processing:z,children:"업로드하기"})]})})]})}),x=a.default.input.withConfig({componentId:"zh__sc-280fbc38-0"})`
  display: none;
`,g=a.default.div.withConfig({componentId:"zh__sc-280fbc38-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
`,m=a.default.div.withConfig({componentId:"zh__sc-280fbc38-2"})`
  cursor: ${({$isUploading:e,$isFileSelected:t})=>e?"default":t?"auto":"pointer"};

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  min-width: 0;
  min-height: 136px;
  padding: 24px;
  border: 1px solid ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  border-style: ${({$isDragging:e})=>e?"dashed":"solid"};
  border-radius: 16px;

  background: ${({$isDragging:e,$isError:t,$isUploading:n})=>n?"#f5f6fa":t?"#fff5f5":e?"#f6f3ff":"#fff"};

  &:hover {
    background-color: ${({$isUploading:e,$isError:t,$isFileSelected:n})=>e?"#f5f6fa":t?"#fff5f5":n?"#fff":"#f6f3ff"};
  }

  &:active {
    background-color: ${({$isUploading:e,$isError:t,$isFileSelected:n})=>e?"#f5f6fa":t?"#fff5f5":n?"#fff":"#efeaff"};
  }
`,b=a.default.p.withConfig({componentId:"zh__sc-280fbc38-3"})`
  margin: 0;

  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,j=a.default.p.withConfig({componentId:"zh__sc-280fbc38-4"})`
  margin: 0;

  font-size: 12px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px; /* 200% */
  color: #99a1af;
  text-align: center;
`,_=a.default.div.withConfig({componentId:"zh__sc-280fbc38-5"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-end;
  align-self: stretch;
  justify-content: space-between;

  min-height: 136px;
  padding: 16px;
  border-radius: 16px;

  background: #f3f4f6;
`,w=a.default.div.withConfig({componentId:"zh__sc-280fbc38-6"})`
  overflow: hidden;
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;

  min-width: 0;
`,y=a.default.div.withConfig({componentId:"zh__sc-280fbc38-7"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 6px;

  background: #fff;
`,v=a.default.div.withConfig({componentId:"zh__sc-280fbc38-8"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #0a0a0a;
`,C=a.default.button.withConfig({componentId:"zh__sc-280fbc38-9"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #45464e;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #0a0a0a;

  background: #fff;

  &:hover {
    background: #f9fafb;
  }

  &:active {
    background: #f3f4f6;
  }

  &:disabled {
    border-color: #d1d5db;
    color: #9ca3af;
    background-color: #f9fafb;
  }
`,I=(0,a.default)(f.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-280fbc38-10"})`
  align-self: stretch;
  height: 36px;
  padding: 8px 16px;
`,z=(0,i.observer)(function(){let e=d.default.data.auth.me.data?.organizationId??null,i=d.default.data.serviceWorker.activityRecordsLastImportedDate,a=d.default.serviceWorker.serviceRecord.lastImportedDate,o=d.default.serviceWorker.serviceRecord.lastUploadedAtText;return(0,l.useEffect)(()=>{null!==e&&i.query?.organizationId!==e&&i.setQuery({organizationId:e})},[i,i.query?.organizationId,e]),(0,t.jsxs)(T,{children:[(0,t.jsx)(p,{}),(0,t.jsxs)(E,{children:[(0,t.jsxs)(S,{children:[(0,t.jsx)(n.default,{sx:{fontSize:16}}),(0,t.jsx)(k,{children:"가장 최근 엑셀 파일 업로드한 날짜"})]}),(0,t.jsxs)(D,{children:[o??a??"-",null!==o&&null!==a?(0,t.jsxs)(A,{children:[a," 결제까지 들어와 있어요"]}):null]})]}),(0,t.jsxs)(E,{children:[(0,t.jsxs)(S,{children:[(0,t.jsx)(n.default,{sx:{fontSize:16}}),(0,t.jsx)(k,{children:"전자바우처에서 엑셀 파일 내려받는 과정"})]}),(0,t.jsx)(D,{children:"⑴ 부정결제 찾기 > ⑵ 전자바우처 내역 검색 > ⑶ 매출 및 정산 > ⑷ 바우처 이용내역 조회(신규) > ⑸ 엑셀 다운로드"})]})]})}),T=a.default.div.withConfig({componentId:"zh__sc-f8534ef-0"})`
  position: sticky;
  z-index: 1;
  bottom: 0;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;

  margin-top: auto;
  padding: 16px;

  background: #fff;
`,E=a.default.div.withConfig({componentId:"zh__sc-f8534ef-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px;
  border: 1px solid #cdd8ec;
  border-radius: 8px;

  background: #f6f8ff;
`,S=a.default.div.withConfig({componentId:"zh__sc-f8534ef-2"})`
  display: flex;
  gap: 4px;
  align-items: center;
`,k=a.default.div.withConfig({componentId:"zh__sc-f8534ef-3"})`
  font-size: 12px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,D=a.default.div.withConfig({componentId:"zh__sc-f8534ef-4"})`
  font-size: 12px;
  font-weight: 400;
  color: #0a0a0a;
`,A=a.default.span.withConfig({componentId:"zh__sc-f8534ef-5"})`
  display: block;
  margin-top: 2px;
  font-size: 12px;
  color: #636978;
`;e.s(["default",0,z],70552)},57738,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(20276),l=e.i(8179),a=e.i(38803),d=e.i(9454),o=e.i(43174);let r=(0,n.observer)(function(){let{items:e,remove:n}=o.default.ui.layout.toast,a=new Map;e.forEach(e=>{let t=a.get(e.container)??[];t.push(e),a.set(e.container,t)});let d=Array.from(a.entries()).map(([e,t])=>({container:e,items:t}));return(0,t.jsx)(t.Fragment,{children:d.map(({container:e,items:a})=>{let d=(0,t.jsx)(c,{$isFixed:null===e,children:a.map(e=>(0,t.jsxs)(f,{$type:e.type,role:"status","aria-live":"polite",children:[(0,t.jsx)(h,{children:e.message}),(0,t.jsx)(u,{type:"button",onClick:()=>n(e.id),"aria-label":"토스트 닫기",children:(0,t.jsx)(l.X,{size:14})})]},e.id))});return null===e?(0,t.jsx)(s,{children:d},"fallback-container"):(0,i.createPortal)(d,e,`toast-container-${a[0]?.id??"default"}`)})})}),s=a.default.div.withConfig({componentId:"zh__sc-7dcaecab-0"})`
  position: relative;
`,c=a.default.div.withConfig({componentId:"zh__sc-7dcaecab-1"})`
  pointer-events: none;

  position: ${({$isFixed:e})=>e?"fixed":"absolute"};
  z-index: ${d.default.style.numeric.Z_INDEX.TOAST};
  top: ${({$isFixed:e})=>e?"96px":"32px"};
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: min(
    420px,
    ${({$isFixed:e})=>e?"calc(100vw - 32px)":"calc(100% - 32px)"}
  );
`,f=a.default.div.withConfig({componentId:"zh__sc-7dcaecab-2"})`
  pointer-events: auto;

  display: flex;
  gap: 10px;
  align-items: flex-start;

  padding: 10px 12px;
  border: 1px solid
    ${({$type:e})=>"success"===e?"#86efac":"error"===e?"#fca5a5":"warn"===e?"#facc15":"#93c5fd"};
  border-radius: 8px;

  color: #0f172a;

  background: ${({$type:e})=>"success"===e?"#f0fdf4":"error"===e?"#fef2f2":"warn"===e?"#fefce8":"#eff6ff"};
  box-shadow: 0 6px 16px rgb(15 23 42 / 12%);
`,h=a.default.p.withConfig({componentId:"zh__sc-7dcaecab-3"})`
  flex: 1;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  overflow-wrap: anywhere;
`,u=a.default.button.withConfig({componentId:"zh__sc-7dcaecab-4"})`
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 22px;
  height: 22px;
  margin: -2px -2px 0 0;
  border: 0;
  border-radius: 4px;

  color: #475569;

  background: transparent;

  &:hover {
    color: #0f172a;
    background: rgb(15 23 42 / 6%);
  }
`;e.s(["default",0,r])},16342,e=>{"use strict";var t=e.i(7744),n=e.i(43174);let i=e=>Array.from(e.dataTransfer?.types??[]).includes("Files");e.s(["default",0,function(){let[e,l]=(0,t.useState)(!1),a=(0,t.useRef)(0),{setIsWindowFileDragging:d}=n.default.ui.layout;return(0,t.useEffect)(()=>{let e=e=>{i(e)&&(a.current+=1,l(!0))},t=e=>{i(e)&&(a.current=Math.max(0,a.current-1),0===a.current&&l(!1))},n=e=>{i(e)&&e.preventDefault()},d=e=>{i(e)&&(e.preventDefault(),a.current=0,l(!1))};return window.addEventListener("dragenter",e),window.addEventListener("dragleave",t),window.addEventListener("dragover",n),window.addEventListener("drop",d),()=>{window.removeEventListener("dragenter",e),window.removeEventListener("dragleave",t),window.removeEventListener("dragover",n),window.removeEventListener("drop",d)}},[]),(0,t.useEffect)(()=>(d(e),()=>{d(!1)}),[e,d]),null}])}]);