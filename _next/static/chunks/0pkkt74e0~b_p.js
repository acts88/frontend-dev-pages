(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,48271,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(43174),a=e.i(7665),d=e.i(4153);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),i.default.createElement("circle",{cx:"12",cy:"12",r:"3"}))});function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}r.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},r.displayName="Eye";var c=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),i.default.createElement("line",{x1:"1",y1:"1",x2:"23",y2:"23"}))});c.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},c.displayName="EyeOff";var f=e.i(38803),h=e.i(25521);let p=(0,n.observer)(function(){let{organizationCode:e,setOrganizationCode:n,rememberOrganizationCode:d,setRememberOrganizationCode:o,rememberLoginId:s,setRememberLoginId:f,loginId:p,setLoginId:O,loginIdErrMsg:P,password:N,setPassword:M,isShowPwd:F,setIsShowPwd:B,pwdErrMsg:U,login:Y}=l.default.auth.login,[V,W]=(0,i.useState)(!1),[H,G]=(0,i.useState)(null),K=(0,i.useRef)(null),X=(0,i.useRef)(!1),q=(0,i.useRef)(null),Q=(0,i.useRef)(null),Z=e=>{let t=e.getModifierState("CapsLock");t!==X.current&&(X.current=t,t&&l.default.ui.layout.toast.info("Caps Lock이 켜져 있습니다.",void 0,K.current))},J=e=>{Z(e),"Enter"===e.key&&Y()};return(0,i.useEffect)(()=>{q.current?.focus()},[]),(0,t.jsx)(u,{children:(0,t.jsxs)(x,{ref:K,children:[(0,t.jsxs)(g,{children:[(0,t.jsx)(a.default,{src:`${h.default.env.PUBLIC_PATH}/icon/logo-symbol.svg`,width:1,height:1,style:{width:85,height:"auto"},loading:"eager",alt:"Logo"}),(0,t.jsxs)(m,{children:[(0,t.jsx)(b,{children:"자이언 허브"}),(0,t.jsx)(j,{children:"기관용"})]})]}),(0,t.jsxs)(_,{children:[(0,t.jsxs)(y,{$hasValue:e.length>0,children:[(0,t.jsx)(w,{children:"기관코드"}),(0,t.jsx)(v,{value:e,onChange:e=>n(e.target.value),onKeyDown:J,placeholder:"예: zh12"})]}),(0,t.jsxs)(y,{$error:null!==P,$hasValue:p.length>0,children:[(0,t.jsx)(w,{$error:null!==P,children:"아이디"}),(0,t.jsx)(v,{ref:q,value:p,onChange:e=>O(e.target.value),onKeyDown:J,placeholder:"발급받은 아이디(숫자)"})]}),null!==P?(0,t.jsx)(I,{children:P}):null,(0,t.jsxs)(y,{$error:null!==U,$hasValue:N.length>0,children:[(0,t.jsx)(w,{$error:null!==U,children:"비밀번호"}),(0,t.jsx)(v,{ref:Q,type:F?"text":"password",value:N,onChange:e=>M(e.target.value),onFocus:()=>W(!0),onBlur:()=>{W(!1),X.current=!1},onKeyDown:J,onKeyUp:e=>{Z(e)},placeholder:"영문,숫자,특수문자"}),(0,t.jsx)(C,{type:"button",$active:V,$error:null!==U,onClick:()=>B(!F),onFocus:()=>W(!0),onBlur:()=>W(!1),children:F?(0,t.jsx)(r,{size:24}):(0,t.jsx)(c,{size:24})})]}),null!==U?(0,t.jsx)(I,{children:U}):null,(0,t.jsxs)(T,{children:[(0,t.jsxs)(E,{children:[(0,t.jsx)("input",{type:"checkbox",checked:d,onChange:e=>o(e.target.checked)}),"기관코드 저장"]}),(0,t.jsxs)(E,{children:[(0,t.jsx)("input",{type:"checkbox",checked:s,onChange:e=>f(e.target.checked)}),"아이디 저장"]})]}),(0,t.jsx)(z,{type:"button",onClick:()=>void Y(),children:"로그인"}),(0,t.jsxs)(S,{children:[(0,t.jsx)(k,{type:"button",onClick:()=>G("아이디 확인"),children:"아이디 확인"}),(0,t.jsx)(D,{"aria-hidden":"true",children:"|"}),(0,t.jsx)(k,{type:"button",onClick:()=>G("비밀번호 초기화"),children:"비밀번호 초기화 요청"})]})]}),null!==H?(0,t.jsxs)(A,{role:"dialog","aria-label":H,children:[(0,t.jsx)(L,{children:H}),(0,t.jsxs)($,{children:["계정은 자이언허브가 발급해요. ",H,"은(는) 기관명과 담당자 이름을 적어 자이언허브 담당자에게 요청해 주세요. 본인 확인 뒤 처리해 드려요."]}),(0,t.jsx)($,{children:"기관코드는 zh로 시작하는 기관 번호예요(예: zh12)."}),(0,t.jsx)(R,{type:"button",onClick:()=>G(null),children:"닫기"})]}):null]})})}),u=f.default.main.withConfig({componentId:"zh__sc-9eaa5006-0"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`,x=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-1"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 48px;

  width: 375px;
`,g=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-2"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,m=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-3"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 30px;
  font-weight: 700;
  line-height: 1;
`,b=f.default.span.withConfig({componentId:"zh__sc-9eaa5006-4"})`
  color: #1c1d22;
`,j=f.default.span.withConfig({componentId:"zh__sc-9eaa5006-5"})`
  color: #4f39f6;
`,_=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-6"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,w=f.default.span.withConfig({componentId:"zh__sc-9eaa5006-7"})`
  flex-shrink: 0;

  width: 105px;

  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  color: ${({$error:e})=>!0===e?"#ff3b6b":"#6e7079"};
`,y=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-8"})`
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

  &:focus-within ${w} {
    color: #4f39f6;
  }
`,v=f.default.input.withConfig({componentId:"zh__sc-9eaa5006-9"})`
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
`,C=f.default.button.withConfig({componentId:"zh__sc-9eaa5006-10"})`
  cursor: pointer;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  padding: 0;
  border: none;

  color: ${({$active:e,$error:t})=>!0===e?"#4f39f6":!0===t?"#ff3b6b":"#ced0d9"};

  background: none;
`,I=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-11"})`
  font-size: 12px;
  color: #ff3b6b;
`,z=f.default.button.withConfig({componentId:"zh__sc-9eaa5006-12"})`
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
`,T=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-13"})`
  display: flex;
  gap: 16px;
  margin-top: 4px;
`,E=f.default.label.withConfig({componentId:"zh__sc-9eaa5006-14"})`
  cursor: pointer;

  display: flex;
  gap: 6px;
  align-items: center;

  font-size: 14px;
  color: #464c53;
`,S=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-15"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  margin-top: 8px;
`,k=f.default.button.withConfig({componentId:"zh__sc-9eaa5006-16"})`
  cursor: pointer;

  padding: 0;
  border: none;

  font-size: 14px;
  color: #6e7079;

  background: none;

  &:hover {
    text-decoration: underline;
  }
`,D=f.default.span.withConfig({componentId:"zh__sc-9eaa5006-17"})`
  color: #d0d5dd;
`,A=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-18"})`
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
`,L=f.default.p.withConfig({componentId:"zh__sc-9eaa5006-19"})`
  font-size: 16px;
  font-weight: 700;
  color: #1c1d22;
`,$=f.default.p.withConfig({componentId:"zh__sc-9eaa5006-20"})`
  font-size: 14px;
  line-height: 1.5;
  color: #464c53;
`,R=f.default.button.withConfig({componentId:"zh__sc-9eaa5006-21"})`
  cursor: pointer;

  align-self: flex-end;

  padding: 6px 12px;
  border: 1px solid #d0d5dd;
  border-radius: 6px;

  font-size: 13px;

  background: #fff;
`;var O=e.i(64954);let P=/^[\x21-\x7E]+$/,N="공백 없이 영문·숫자·특수문자 8~64자",M=(0,n.observer)(function(){let{isPasswordChangeRequired:e,passwordStatus:n,closePasswordChange:a,changePassword:d,logout:o}=l.default.auth,[s,f]=(0,i.useState)(""),[h,p]=(0,i.useState)(""),[u,x]=(0,i.useState)(""),[g,m]=(0,i.useState)(!1),[b,j]=(0,i.useState)(!1),[_,w]=(0,i.useState)(null),y=0===h.length?null:h.length<8||h.length>64||!P.test(h)?`비밀번호는 ${N}로 입력해 주세요.`:null,v=u.length>0&&u!==h?"새 비밀번호와 같게 입력해 주세요.":null,C=h.length>0&&h===s?"지금 쓰는 비밀번호와 다른 비밀번호를 입력해 주세요.":null,I=!b&&s.length>0&&h.length>0&&u===h&&null===y&&null===C,z=e?n?.isTemporary===!0?"임시 비밀번호의 사용 기간이 지났습니다. 새 비밀번호로 바꿔야 계속 이용할 수 있습니다.":"비밀번호를 바꾼 지 1년이 지났습니다. 새 비밀번호로 바꿔야 계속 이용할 수 있습니다.":null,T=async()=>{if(!I)return;j(!0),w(null);let e=await d(s,h);j(!1),null!==e&&w(e.message||"비밀번호를 바꾸지 못했습니다. 잠시 후 다시 시도해 주세요.")},E=g?"text":"password";return(0,t.jsx)(F,{$opaque:e,children:(0,t.jsxs)(B,{id:"password-change-panel",children:[(0,t.jsx)(U,{children:"비밀번호 변경"}),null!==z&&(0,t.jsx)(Y,{children:z}),(0,t.jsxs)(V,{children:[(0,t.jsx)(W,{htmlFor:"password-change-current",children:"현재 비밀번호"}),(0,t.jsx)(H,{id:"password-change-current",type:E,autoComplete:"current-password",value:s,onChange:e=>f(e.target.value)})]}),(0,t.jsxs)(V,{children:[(0,t.jsx)(W,{htmlFor:"password-change-new",children:"새 비밀번호"}),(0,t.jsx)(H,{id:"password-change-new",type:E,autoComplete:"new-password",maxLength:64,value:h,onChange:e=>p(e.target.value)}),(0,t.jsx)(G,{$error:null!==y||null!==C,children:y??C??`${N}, 직전 비밀번호는 쓸 수 없습니다.`})]}),(0,t.jsxs)(V,{children:[(0,t.jsx)(W,{htmlFor:"password-change-confirm",children:"새 비밀번호 확인"}),(0,t.jsx)(H,{id:"password-change-confirm",type:E,autoComplete:"new-password",maxLength:64,value:u,onChange:e=>x(e.target.value),onKeyDown:e=>{"Enter"===e.key&&T()}}),null!==v&&(0,t.jsx)(G,{$error:!0,children:v})]}),(0,t.jsxs)(K,{type:"button",onClick:()=>m(!g),children:[g?(0,t.jsx)(c,{size:16}):(0,t.jsx)(r,{size:16}),g?"비밀번호 숨기기":"비밀번호 보기"]}),null!==_&&(0,t.jsx)(X,{children:_}),(0,t.jsxs)(q,{children:[e?(0,t.jsx)(O.default.Button.Outlined,{type:"button",onClick:()=>void o(),children:"로그아웃"}):(0,t.jsx)(O.default.Button.Outlined,{type:"button",disabled:b,onClick:a,children:"취소"}),(0,t.jsx)(O.default.Button.Filled.Primary,{type:"button",disabled:!I,onClick:()=>void T(),children:b?"변경 중...":"변경하기"})]})]})})}),F=f.default.div.withConfig({componentId:"zh__sc-cb48ea47-0"})`
  position: fixed;
  z-index: 1400;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({$opaque:e})=>e?"#f9fafb":"rgb(10 10 10 / 48%)"};
`,B=f.default.section.withConfig({componentId:"zh__sc-cb48ea47-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 420px;
  max-width: calc(100vw - 32px);
  padding: 28px 28px 24px;
  border-radius: 12px;

  background: #fff;
  box-shadow: 0 12px 32px rgb(16 24 40 / 12%);
`,U=f.default.h2.withConfig({componentId:"zh__sc-cb48ea47-2"})`
  font-size: 20px;
  font-weight: 700;
  color: #101828;
`,Y=f.default.p.withConfig({componentId:"zh__sc-cb48ea47-3"})`
  padding: 12px 14px;
  border-radius: 8px;

  font-size: 14px;
  line-height: 20px;
  color: #b54708;

  background: #fffaeb;
`,V=f.default.div.withConfig({componentId:"zh__sc-cb48ea47-4"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,W=f.default.label.withConfig({componentId:"zh__sc-cb48ea47-5"})`
  font-size: 13px;
  font-weight: 600;
  color: #344054;
`,H=f.default.input.withConfig({componentId:"zh__sc-cb48ea47-6"})`
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;

  font-size: 15px;

  &:focus {
    border-color: #4f39f6;
    outline: none;
  }
`,G=f.default.p.withConfig({componentId:"zh__sc-cb48ea47-7"})`
  font-size: 12px;
  color: ${({$error:e})=>!0===e?"#f04438":"#667085"};
`,K=f.default.button.withConfig({componentId:"zh__sc-cb48ea47-8"})`
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
`,X=f.default.p.withConfig({componentId:"zh__sc-cb48ea47-9"})`
  font-size: 13px;
  color: #f04438;
`,q=f.default.div.withConfig({componentId:"zh__sc-cb48ea47-10"})`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,Q=(0,n.observer)(function(){let{passwordStatus:e,openPasswordChange:n,dismissTemporaryPasswordPrompt:i}=l.default.auth,a=e?.temporaryPasswordExpiresAt??null,d=null===a?null:(e=>{let t=new Date(e);if(Number.isNaN(t.getTime()))return null;let n=e=>String(e).padStart(2,"0");return`${t.getMonth()+1}월 ${t.getDate()}일 ${n(t.getHours())}:${n(t.getMinutes())}`})(a);return(0,t.jsx)(Z,{children:(0,t.jsxs)(J,{children:[(0,t.jsx)(ee,{children:"임시 비밀번호로 로그인했습니다"}),(0,t.jsxs)(et,{children:["안전을 위해 본인만 아는 새 비밀번호로 바꿔 주세요.",null!==d&&` ${d}이 지나면 지금 비밀번호로는 로그인할 수 없습니다.`]}),(0,t.jsxs)(en,{children:[(0,t.jsx)(O.default.Button.Outlined,{type:"button",onClick:i,children:"다음에 변경"}),(0,t.jsx)(O.default.Button.Filled.Primary,{type:"button",onClick:n,children:"지금 변경"})]})]})})}),Z=f.default.div.withConfig({componentId:"zh__sc-9965c079-0"})`
  position: fixed;
  z-index: 1400;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 48%);
`,J=f.default.section.withConfig({componentId:"zh__sc-9965c079-1"})`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 400px;
  max-width: calc(100vw - 32px);
  padding: 24px;
  border-radius: 12px;

  background: #fff;
`,ee=f.default.h2.withConfig({componentId:"zh__sc-9965c079-2"})`
  font-size: 18px;
  font-weight: 700;
  color: #101828;
`,et=f.default.p.withConfig({componentId:"zh__sc-9965c079-3"})`
  font-size: 14px;
  line-height: 22px;
  color: #475467;
`,en=f.default.div.withConfig({componentId:"zh__sc-9965c079-4"})`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 8px;
`,ei=(0,n.observer)(({children:e})=>{let{isAuthed:n,isPasswordChangeRequired:a,isPasswordChangeVisible:d,isTemporaryPasswordPromptVisible:o}=l.default.auth,[r,s]=(0,i.useState)(!0);return((0,i.useEffect)(()=>{let e=!0;return(async()=>{await l.default.auth.restoreSession(),e&&s(!1)})(),()=>{e=!1}},[]),r)?null:n?a?(0,t.jsx)(M,{}):(0,t.jsxs)(t.Fragment,{children:[e,d&&(0,t.jsx)(M,{}),o&&(0,t.jsx)(Q,{})]}):(0,t.jsx)(p,{})});e.s(["default",0,ei],48271)},47753,e=>{"use strict";var t=e.i(9735),n=e.i(7744),i=e.i(38803),l=e.i(43174);let a=i.default.div.withConfig({componentId:"zh__sc-914b0b37-0"})`
  position: relative;

  display: flex;

  width: 100%;
  min-height: 100vh;

  background-color: #f9fafb;
`;e.s(["default",0,function({children:e}){let i=(0,n.useRef)(null);return(0,n.useEffect)(()=>(l.default.ui.layout.setAppContainer(i.current),()=>{l.default.ui.layout.setAppContainer(null)}),[]),(0,t.jsx)(a,{ref:i,children:e})}])},69477,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l=(0,t.forwardRef)(function(e,n){var l=e.color,a=e.size,d=void 0===a?24:a,o=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return t.default.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===l?"currentColor":l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),t.default.createElement("polyline",{points:"23 4 23 10 17 10"}),t.default.createElement("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"}))});l.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},l.displayName="RotateCw",e.s(["RotateCw",0,l],69477)},73060,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(15695),a=e.i(69477),d=e.i(4153);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),i.default.createElement("circle",{cx:"12",cy:"7",r:"4"}))});r.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},r.displayName="User";var s=e.i(38803),c=e.i(64954),f=e.i(43174);let h=(0,n.observer)(function(){let{oldestSyncedAt:e,refetchAll:n}=f.default.ui.layout.header,{meNameWithPosition:d,logout:o,openPasswordChange:s}=f.default.auth,[c,h]=(0,i.useState)(()=>new Date),[v,C]=(0,i.useState)("idle"),I=(()=>{if(null===e)return null;let t=Math.max(0,Math.floor((c.getTime()-e.getTime())/1e3/60)),n=Math.floor(t/60);return t<60?`오늘 ${t}분 전 최신정보`:`오늘 ${n}시간 전 최신정보`})();(0,i.useEffect)(()=>{if(null===e)return;let t=window.setInterval(()=>{h(new Date)},6e4);return()=>{window.clearInterval(t)}},[e]),(0,i.useEffect)(()=>{if("completed"!==v)return;let e=window.setTimeout(()=>{C("idle")},2e3);return()=>{window.clearTimeout(e)}},[v]);let z=async()=>{C("loading");try{let e=await n();C(e?"completed":"idle")}catch{C("idle")}},T=(()=>{switch(v){case"idle":default:return null;case"loading":return(0,t.jsx)(a.RotateCw,{size:15});case"completed":return(0,t.jsx)(l.Check,{size:20})}})(),E=(()=>{switch(v){case"idle":default:return"최신 정보로 업데이트하기";case"loading":return"업데이트 중";case"completed":return"업데이트 완료"}})(),S=null===e||"idle"!==v;return(0,t.jsxs)(p,{children:[(0,t.jsxs)(u,{children:[null===I?null:(0,t.jsx)(x,{children:I}),(0,t.jsxs)(g,{$status:"loading"===v?"processing":"completed"===v?"success":void 0,onClick:S?void 0:()=>void z(),disabled:S,children:[T,E]})]}),(0,t.jsxs)(m,{children:[null===d?null:(0,t.jsxs)(b,{children:[(0,t.jsx)(j,{children:(0,t.jsx)(r,{size:20,color:"#ff6900"})}),(0,t.jsx)(_,{children:d})]}),(0,t.jsx)(y,{onClick:s,children:"비밀번호 변경"}),(0,t.jsx)(w,{onClick:()=>{o()},children:"로그아웃"})]})]})}),p=s.default.div.withConfig({componentId:"zh__sc-bc883191-0"})`
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
`,u=s.default.div.withConfig({componentId:"zh__sc-bc883191-1"})`
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
`;e.s(["default",0,h],73060)},79109,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(43174),a=e.i(26170);let d=(0,n.observer)(function(){let{isLoading:e}=l.default.api,[n,d]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{if(!e)return;let t=window.setTimeout(()=>{d(!0)},300);return()=>{d(!1),window.clearTimeout(t)}},[e]),e&&n?(0,t.jsx)(a.default,{isLoading:!0,children:null}):null});e.s(["default",0,d])},55357,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(38803),a=e.i(43174),d=e.i(26170),o=e.i(64954),r=e.i(7242);let s=function({currentServiceType:e,detectedServiceType:n,isContinueDisabled:i,isOpen:l,onCancel:a,onContinue:d,registrationTarget:o}){if(!l)return null;let s=`${r.default[e].label} 서비스`,b=`${r.default[n].label} 서비스`,j="이용자"===o?"이용자로":"제공인력으로";return(0,t.jsx)(c,{children:(0,t.jsxs)(f,{children:[(0,t.jsxs)(h,{children:[(0,t.jsxs)(p,{children:["[",b,"] ",o,"의 전자바우처입니다."]}),(0,t.jsxs)(u,{children:["현재 [",s,"]에서 ",o," 등록을 진행하고 있습니다.",(0,t.jsx)("br",{}),i?(0,t.jsxs)(t.Fragment,{children:["업로드한 전자바우처는 [",b,"]로 확인되었습니다.",(0,t.jsx)("br",{}),"현재 기관에서 [",b,"]를 운영하고 있지 않아 등록을 계속할 수 없습니다."]}):(0,t.jsxs)(t.Fragment,{children:["업로드한 전자바우처는 [",b,"]로 확인되어, [",b,"]"," ",j," 등록을 계속합니다."]})]})]}),(0,t.jsxs)(x,{children:[(0,t.jsx)(g,{type:"button",onClick:a,children:"등록하지 않고 나가기"}),!i&&(0,t.jsxs)(m,{type:"button",onClick:d,children:["[",b,"]로 계속 등록하기"]})]})]})})},c=l.default.div.withConfig({componentId:"zh__sc-4e4950a7-0"})`
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
`,p=l.default.h3.withConfig({componentId:"zh__sc-4e4950a7-3"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,u=l.default.p.withConfig({componentId:"zh__sc-4e4950a7-4"})`
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
`,S=(0,n.observer)(function(){let e=a.default.modal.clientCreate;return!0!==e.isContractPeriodOverlapDialogOpen?null:(0,t.jsx)(k,{children:(0,t.jsxs)(D,{children:[(0,t.jsxs)(A,{children:[(0,t.jsx)(L,{children:"계약기간이 중복되어 등록할 수 없습니다."}),(0,t.jsxs)($,{children:["동일한 이름과 주민등록번호로 등록된 이용자의 계약•서비스 기간 중 겹치는 기간이 있습니다.",(0,t.jsx)("br",{}),"계약•서비스 기간이 겹치지 않도록 수정한 후 다시 등록해주세요."]})]}),(0,t.jsxs)(R,{children:[(0,t.jsx)(O,{type:"button",onClick:e.cancelContractPeriodOverlapRegistration,children:"등록 취소하기"}),(0,t.jsx)(P,{type:"button",onClick:e.closeContractPeriodOverlapDialog,children:"계약/서비스 기간 수정하기"})]})]})})}),k=l.default.div.withConfig({componentId:"zh__sc-79ae8371-0"})`
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
`,L=l.default.h3.withConfig({componentId:"zh__sc-79ae8371-3"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,$=l.default.p.withConfig({componentId:"zh__sc-79ae8371-4"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,R=l.default.div.withConfig({componentId:"zh__sc-79ae8371-5"})`
  display: flex;
  gap: 12px;
  align-self: stretch;
  justify-content: flex-end;
`,O=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-79ae8371-6"})`
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
`,N=(0,n.observer)(function(){let e=a.default.modal.clientCreate,n=e.duplicateClient;if(null===n)return null;let i=e.clientDraft?.serviceType,l=void 0!==i&&n.serviceTypes.includes(i),d=n.serviceTypes.map(e=>Object.prototype.hasOwnProperty.call(r.default,e)?r.default[e].label:e).join(", ");return(0,t.jsx)(M,{children:(0,t.jsxs)(F,{role:"dialog","aria-label":"이미 등록된 이용자",children:[(0,t.jsxs)(B,{children:[(0,t.jsx)(U,{children:n.exactMatch?"이미 등록된 이용자예요.":"같은 사람일 수 있는 이용자가 있어요."}),(0,t.jsx)(Y,{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"성명"}),(0,t.jsx)("td",{children:n.name})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"생년월일"}),(0,t.jsx)("td",{children:n.birthDate?.replaceAll("-",".")??"-"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"휴대폰"}),(0,t.jsx)("td",{children:n.phoneNumber??"-"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"이용 중인 서비스"}),(0,t.jsx)("td",{children:""===d?"-":d})]})]})}),(0,t.jsx)(V,{children:l?"이 이용자는 이미 같은 서비스를 이용 중이에요. 새로 등록하지 말고 이용자 상세에서 재계약으로 진행해 주세요.":n.exactMatch?"주민등록번호가 같아요. 기존 이용자로 이어서 등록하면 이 서비스 계약이 추가되고, 이번에 입력한 이름·연락처·주소로 기존 정보가 바뀌어요.":"이름과 주민등록번호 앞 7자리가 같아요. 같은 사람이면 기존 이용자로 이어서 등록하고, 다른 사람이면 새로 등록해 주세요."})]}),(0,t.jsxs)(W,{children:[(0,t.jsx)(H,{type:"button",onClick:e.closeDuplicateClientDialog,children:"취소"}),n.exactMatch?null:(0,t.jsx)(H,{type:"button",onClick:()=>void e.registerAsNewClient(),children:"다른 사람 — 새로 등록"}),l?null:(0,t.jsx)(G,{type:"button",onClick:()=>void e.continueWithDuplicateClient(),children:"기존 이용자로 이어서 등록"})]})]})})}),M=l.default.div.withConfig({componentId:"zh__sc-20d7e9a8-0"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,F=l.default.div.withConfig({componentId:"zh__sc-20d7e9a8-1"})`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 460px;
  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,B=l.default.div.withConfig({componentId:"zh__sc-20d7e9a8-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,U=l.default.h3.withConfig({componentId:"zh__sc-20d7e9a8-3"})`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #000;
`,Y=l.default.table.withConfig({componentId:"zh__sc-20d7e9a8-4"})`
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
`,W=l.default.div.withConfig({componentId:"zh__sc-20d7e9a8-6"})`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,H=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-20d7e9a8-7"})`
  height: 36px;
  padding: 8px 14px;
`,G=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-20d7e9a8-8"})`
  height: 36px;
  padding: 8px 14px;
`;var K=e.i(74515),X=e.i(4153);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var Q=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",q({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i.default.createElement("polyline",{points:"12 5 19 12 12 19"}))});Q.propTypes={color:X.default.string,size:X.default.oneOfType([X.default.string,X.default.number])},Q.displayName="ArrowRight";let Z=(0,n.observer)(function(){let{analyzeSelectedFile:e,isAnalyzing:n,selectedFile:i}=a.default.modal.clientCreate;return(0,t.jsx)(J,{children:(0,t.jsxs)(ee,{disabled:null===i||n,onClick:()=>{e()},children:["분석 시작",(0,t.jsx)(Q,{size:16})]})})}),J=l.default.div.withConfig({componentId:"zh__sc-d7f6cfb5-0"})`
  display: flex;
  gap: 10px;
  align-self: stretch;
  justify-content: flex-end;
`,ee=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d7f6cfb5-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;var et=e.i(8179),en=e.i(98273),ei=e.i(25521);let{FILE_EXTENSION_WHITELIST_BY_GROUP:el}=ei.default.file,ea=(0,n.observer)(function(){var e;let n,{clearSelectedFile:i,selectedFile:l,isAnalyzing:d}=a.default.modal.clientCreate;if(null===l)return null;let o=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(ed,{children:(0,t.jsxs)(eo,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(es,{children:el.IMAGE.some(e=>e===o)?(0,t.jsx)(en.default.Photo,{size:17,color:"#FA8E43"}):el.AUDIO.some(e=>e===o)?(0,t.jsx)(en.default.SpeechToText,{size:17,color:"#A855F7"}):el.DOCUMENT.some(e=>e===o)?(0,t.jsx)(en.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(ec,{children:(0,t.jsx)(ef,{children:l.name})})]}),(0,t.jsxs)(eh,{onClick:i,disabled:d,children:["삭제",(0,t.jsx)(et.X,{size:16})]})]},`${l.name}-${l.size}-${l.lastModified}`)})}),ed=l.default.div.withConfig({componentId:"zh__sc-8227d071-0"})`
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
`,eo=l.default.div.withConfig({componentId:"zh__sc-8227d071-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,er=l.default.div.withConfig({componentId:"zh__sc-8227d071-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,es=l.default.div.withConfig({componentId:"zh__sc-8227d071-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,ec=l.default.div.withConfig({componentId:"zh__sc-8227d071-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,ef=l.default.div.withConfig({componentId:"zh__sc-8227d071-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,eh=l.default.button.withConfig({componentId:"zh__sc-8227d071-6"})`
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
`;var ep=e.i(24045),eu=e.i(9454);function ex(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(eg,{children:(0,t.jsx)(em,{$progress:e})})}let eg=l.default.div.withConfig({componentId:"zh__sc-aa649b54-0"})`
  overflow: hidden;
  display: flex;

  width: 362px;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,em=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-aa649b54-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,eb=(0,n.observer)(function(){let{isWindowFileDragging:e}=a.default.ui.layout,{selectedFile:n,isError:i,isAnalyzing:l,abortAnalyze:d}=a.default.modal.clientCreate,o=i?"지원하지 않는 파일 형식입니다.":e?"파일을 여기에 놓으면 업로드 됩니다.":l?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.",r=null===n||l?"지원 파일 형식: 사진 이미지":"새 파일을 업로드하면 기존 파일이 교체됩니다.";return(0,t.jsxs)(e_,{children:[null===n&&!i&&(0,t.jsx)(ew,{children:(0,t.jsx)(ep.Upload,{size:26,color:ej[100]})}),(0,t.jsxs)(ey,{children:[(0,t.jsx)(ev,{$isError:i,children:o}),(0,t.jsx)(eC,{children:r})]}),l&&(0,t.jsx)(ex,{}),l&&(0,t.jsx)(eI,{onClick:d,children:"중단하기"})]})}),{PRIMARY:ej}=eu.default.style.color,e_=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,ew=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,ey=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,ev=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-3"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,eC=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: #99a1af;
`,eI=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-47e9a3b3-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,ez=(0,n.observer)(function(){let{isWindowFileDragging:e}=a.default.ui.layout,{acceptFileTypes:n,setSelectedFile:l,selectedFile:d,isError:o}=a.default.modal.clientCreate,r=(0,i.useRef)(null);return(0,K.default)(e=>{if(0===e.length)return;let t=e[0];void 0!==t&&l(t)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eT,{ref:r,type:"file",accept:n,onChange:e=>{let t=Array.from(e.target.files??[]);if(0===t.length)return;let n=t[0];void 0!==n&&(l(n),e.target.value="")}}),(0,t.jsxs)(eE,{$isWindowFileDragging:e,onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault();let t=Array.from(e.dataTransfer.files);if(0===t.length)return;let n=t[0];void 0!==n&&l(n)},onClick:e=>{e.target instanceof HTMLElement&&(e.target.closest("button")||r.current?.click())},$isError:o,children:[null!==d&&(0,t.jsx)(ea,{}),(0,t.jsx)(eb,{}),(0,t.jsx)(Z,{})]})]})}),eT=l.default.input.withConfig({componentId:"zh__sc-35541df3-0"})`
  display: none;
`,eE=l.default.div.withConfig({componentId:"zh__sc-35541df3-1"})`
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
`,eS=(0,n.observer)(function(){let{analyzedFile:e,mode:n}=a.default.modal.clientCreate;return(0,t.jsxs)(ek,{$flex1:null===e,children:[null===e&&(0,t.jsx)(eD,{children:"renew"===n?"새로운 전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요.":"전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요."}),(0,t.jsx)(ez,{})]})}),ek=l.default.div.withConfig({componentId:"zh__sc-8fa7e82c-0"})`
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
`,eD=l.default.div.withConfig({componentId:"zh__sc-8fa7e82c-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px; /* 133.333% */
  color: #101828;
`,eA="border-highlight-style-tag",eL="border-highlight-sweep",e$="--border-highlight-sweep",eR=`
  linear-gradient(transparent, transparent) padding-box,
  conic-gradient(
    from -90deg,
    #fff 0deg,
    #ede9fe 8deg,
    #a78bfa 22deg,
    #7c3aed calc(var(${e$}) * 0.28),
    #4f39f6 calc(var(${e$}) * 0.45),
    #818cf8 calc(var(${e$}) * 0.65),
    #a78bfa calc(var(${e$}) * 0.8),
    #ddd6fe calc(var(${e$}) * 0.93),
    #fff var(${e$}),
    #fff 360deg
  ) border-box
`,eO=function(){let e=(0,i.useRef)(null),t=(0,i.useRef)(null),n=(0,i.useRef)(null),l=(0,i.useRef)(null),a=(0,i.useRef)(null),d=(0,i.useRef)(null),o=(0,i.useRef)(null),r=(0,i.useCallback)(()=>{null!==l.current&&(window.clearTimeout(l.current),l.current=null),null!==a.current&&(window.cancelAnimationFrame(a.current),a.current=null)},[]),s=(0,i.useCallback)(()=>{let i=e.current,l=t.current,a=n.current;null!==i&&null!==l&&null!==a&&(l.style.top=`${i.offsetTop-1}px`,l.style.left=`${i.offsetLeft-1}px`,l.style.width=`${i.offsetWidth+2}px`,l.style.height=`${i.offsetHeight+2}px`,l.style.borderRadius=window.getComputedStyle(i).borderRadius)},[]),c=(0,i.useCallback)(()=>{let i=e.current;if(null===i)return null;(()=>{if("u"<typeof document||null!==document.getElementById(eA))return;let e=document.createElement("style");e.id=eA,e.textContent=`
    @property ${e$} {
      inherits: false;
      initial-value: 0deg;
      syntax: '<angle>';
    }

    @keyframes ${eL} {
      from {
        ${e$}: 0deg;
      }

      to {
        ${e$}: 360deg;
      }
    }
  `,document.head.append(e)})();let l=i.parentElement;if(null===l)return null;if(n.current=l,null===d.current&&(d.current={position:i.style.position,zIndex:i.style.zIndex}),null===o.current&&(o.current=l.style.position),"static"===window.getComputedStyle(l).position&&(l.style.position="relative"),""===i.style.position&&(i.style.position="relative"),""===i.style.zIndex&&(i.style.zIndex="1"),null===t.current){let e=document.createElement("div");e.style.pointerEvents="none",e.style.position="absolute",e.style.zIndex="0",e.style.boxSizing="border-box",e.style.border="1px solid transparent",e.style.background="none",l.append(e),t.current=e}return s(),t.current},[s]),f=(0,i.useCallback)(()=>{let e=c();null===e||window.matchMedia("(prefers-reduced-motion: reduce)").matches||(r(),e.style.animation="none",e.style.background=eR,e.style.setProperty(e$,"0deg"),e.offsetWidth,a.current=window.requestAnimationFrame(()=>{s(),e.style.animation=`${eL} 600ms ease-in-out forwards`,a.current=null,l.current=window.setTimeout(()=>{e.style.animation="",e.style.background="none",l.current=null},600)}))},[r,c,s]);return(0,i.useEffect)(()=>{let i=e.current,l=n.current,a=t.current,s=d.current,c=o.current;return()=>{r(),null!==a&&(a.style.animation="",a.style.background="none"),a?.remove(),null!==i&&null!==s&&(i.style.position=s.position,i.style.zIndex=s.zIndex),null!==l&&null!==c&&(l.style.position=c)}},[r]),{ref:e,fire:f}},{FILE_EXTENSION_WHITELIST_BY_GROUP:eP}=ei.default.file,eN=(0,n.observer)(function(){var e;let n,{analyzedFile:l}=a.default.modal.clientCreate,{ref:d,fire:o}=eO();if((0,i.useEffect)(()=>{null!==l&&o()},[l,o]),null===l)return null;let r=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(eM,{ref:d,children:[(0,t.jsxs)(eF,{children:[(0,t.jsxs)(eB,{children:[(0,t.jsx)(en.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(eU,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{}),"우측의 [이용자 기본 정보]가 올바르게 연동되었는지 확인 후, [최종 확인] 버튼을 눌러주세요."]})]}),(0,t.jsxs)(eY,{children:[(0,t.jsxs)(eV,{children:[(0,t.jsx)(en.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(eW,{children:(0,t.jsxs)(eH,{children:[(0,t.jsxs)(eG,{children:[(0,t.jsx)(eK,{children:eP.IMAGE.some(e=>e===r)?(0,t.jsx)(en.default.Photo,{size:17,color:"#FA8E43"}):eP.AUDIO.some(e=>e===r)?(0,t.jsx)(en.default.SpeechToText,{size:17,color:"#A855F7"}):eP.DOCUMENT.some(e=>e===r)?(0,t.jsx)(en.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(eX,{children:(0,t.jsx)(eq,{children:l.name})})]}),(0,t.jsx)(eQ,{children:"추출 완료"})]},`${l.name}-${l.size}-${l.lastModified}`)})]})]})}),eM=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-0"})`
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
`,eF=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,eB=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,eU=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-3"})`
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
`,eY=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-4"})`
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
`,eW=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-6"})`
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
`,eH=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 355px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,eG=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,eK=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,eX=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-10"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,eq=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,eQ=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-12"})`
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
`,eZ=(0,n.observer)(function(){let{analyzedFile:e}=a.default.modal.clientCreate;return(0,t.jsxs)(eJ,{children:[null!==e&&(0,t.jsx)(eN,{}),(0,t.jsx)(eS,{})]})}),eJ=l.default.div.withConfig({componentId:"zh__sc-a077b87a-0"})`
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
`;var e0=e.i(21771);let e1=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,e2=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,e6=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-2"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,e4=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-3"})`
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
`,e5=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-4"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,e3={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16},e9=(0,n.observer)(function(){let{clientDraft:e,updateClientDraft:n}=a.default.modal.clientCreate;return null===e?null:(0,t.jsxs)(e1,{children:[(0,t.jsx)(e2,{children:"보호자 정보"}),(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e4,{$width:260,children:[(0,t.jsx)(e5,{children:"보호자명"}),(0,t.jsx)(o.default.Input.Text,{style:e3,value:e.guardianName??"",onChange:e=>{n(t=>({...t,guardianName:e.target.value}))},placeholder:"보호자 성명을 입력하세요."})]}),(0,t.jsxs)(e4,{$width:260,children:[(0,t.jsx)(e5,{children:"보호자 관계"}),(0,t.jsx)(o.default.Input.Text,{style:e3,value:e.guardianRelationship??"",onChange:e=>{n(t=>({...t,guardianRelationship:e.target.value}))},placeholder:"관계를 입력하세요."})]})]}),(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"보호자 휴대폰"}),(0,t.jsx)(o.default.Input.Text,{style:e3,value:e.guardianPhoneNumber??"",onChange:e=>{n(t=>({...t,guardianPhoneNumber:e.target.value}))},placeholder:"휴대폰을 입력해주세요."})]}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"보호자 연락처"}),(0,t.jsx)(o.default.Input.Contact,{style:e3,value:e.guardianContact??"",onChange:e=>{n(t=>({...t,guardianContact:e}))},placeholder:"연락처를 입력해주세요."})]})]}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"보호자 주소"}),(0,t.jsx)(o.default.Input.Text,{style:e3,value:e.guardianAddress??"",onChange:e=>{n(t=>({...t,guardianAddress:e.target.value}))},placeholder:"보호자 주소를 입력해주세요."})]})]})}),e8=e=>{let t=e.trim().match(/^(\d{6})-?(\d)(\d{0,6})$/);if(null===t)return"unknown";switch(t[2]){case"1":case"3":return"MALE";case"2":case"4":return"FEMALE";default:return"unknown"}},e7=e=>{switch(e){case"MALE":return"남성";case"FEMALE":return"여성";case"unknown":return""}},te=e=>{switch(e){case"MEAL":return"식사관리 서비스";case"NUTRITION":return"영양관리 서비스";case"DISABILITY_ACTIVITY_SUPPORT":return"장애인 활동지원"}},tt=(0,n.observer)(function(){let{clientDraft:e,ocrDraft:n,updateClientDraft:i,getClientDraftFieldError:l,clearClientDraftFieldError:d}=a.default.modal.clientCreate;if(null===e)return null;let r=e.name??"",s=e.residentRegistrationNumber??"",c=e.businessType??"DAY_CARE",f=e.serviceType??"MEAL",h=e.contractStartDate??"",p=e.contractEndDate??"",u=e.serviceStartDate??"",x=e.serviceEndDate??"",g=e.note??"",m=e.vehicleFuelCostNoticeGiven??!0,b=e.contact??"",j=e.phoneNumber??"",_=e.address??"",w=e.postCode??"",y=e.addressDetail??"",v=(()=>{let e=new Date,[t,n]=e0.default.create(e.getFullYear(),e.getMonth()+1,e.getDate());return null===t?n:null})(),C=e8(s),I=te(f),z="DISABILITY_ACTIVITY_SUPPORT"===c?"장애인 활동지원":"일상돌봄 서비스",T="DISABILITY_ACTIVITY_SUPPORT"===f?"활동보조":te(f),E=(e=>{switch(e){case"MEAL":return"500901";case"NUTRITION":return"500401";case"DISABILITY_ACTIVITY_SUPPORT":return"HWG001"}})(f),S=(e,t)=>""===l(e)?t:{...t,borderColor:"#ff4d4f",background:"#fff5f5"},k=e=>{let n=l(e);return""===n?null:(0,t.jsx)(to,{"data-client-create-field-error":"true",children:n})},D=(e,t)=>{let n=String(t??"").trim();return""!==n&&String(e).trim()===n},A=(e,t)=>{e0.default.is(e)&&i(n=>t(n,e))};return(0,t.jsxs)(e1,{children:[(0,t.jsx)(e2,{children:"인적사항"}),(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:["성명",(0,t.jsx)(tn,{})]}),(0,t.jsx)(o.default.Input.Text,{$autoFilled:D(r,n?.name??""),style:S("name",e3),value:r,onChange:e=>{d("name"),i(t=>({...t,name:e.target.value.trim()}))},placeholder:"성명을 입력해주세요."}),k("name")]}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"주민등록번호"}),(0,t.jsx)(o.default.Input.ResidentRegistrationNumber,{$autoFilled:D(s,n?.residentRegistrationNumber??""),style:S("residentRegistrationNumber",e3),value:s,onChange:e=>{d("residentRegistrationNumber"),i(t=>({...t,residentRegistrationNumber:e}))},placeholder:"주민등록번호를 입력해주세요."}),k("residentRegistrationNumber")]}),(0,t.jsxs)(e4,{$width:266,children:[(0,t.jsx)(e5,{children:"성별"}),(0,t.jsx)(ts,{$autoFilled:D(e7(C),e7(e8(n?.residentRegistrationNumber??""))),style:e3,value:e7(C),placeholder:"주민등록번호와 연동되어 보여집니다.",readOnly:!0})]})]}),(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:["휴대폰",(0,t.jsx)(tn,{})]}),(0,t.jsx)(o.default.Input.Phone,{$autoFilled:D(j,n?.phoneNumber??""),style:S("phoneNumber",e3),value:j,onChange:e=>{d("phoneNumber"),i(t=>({...t,phoneNumber:e}))},placeholder:"휴대폰을 입력해주세요."}),k("phoneNumber")]}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"연락처"}),(0,t.jsx)(o.default.Input.Contact,{$autoFilled:D(b,n?.contact??""),style:S("contact",e3),value:b,onChange:e=>{d("contact"),i(t=>({...t,contact:e}))},placeholder:"연락처를 입력해주세요."}),k("contact")]})]}),(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"주소"}),(0,t.jsx)(o.default.Input.Text,{$autoFilled:D(_,n?.address??""),style:S("address",e3),value:_,onChange:e=>{d("address"),i(t=>({...t,address:e.target.value}))},placeholder:"주소를 입력해주세요."}),k("address")]}),(0,t.jsxs)(e4,{$width:191,children:[(0,t.jsx)(e5,{children:"우편번호"}),(0,t.jsx)(o.default.Input.PostCode,{$autoFilled:D(w,n?.postCode??""),style:S("postCode",e3),value:w,onChange:e=>{d("postCode"),i(t=>({...t,postCode:e}))},placeholder:"우편번호를 입력해주세요."}),k("postCode")]})]}),(0,t.jsx)(e6,{children:(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"상세주소"}),(0,t.jsx)(o.default.Input.Text,{$autoFilled:D(y,n?.addressDetail??""),style:S("addressDetail",e3),value:y,onChange:e=>{d("addressDetail"),i(t=>({...t,addressDetail:e.target.value}))},placeholder:"상세주소를 입력해주세요."}),k("addressDetail")]})}),(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"특이사항(메모)"}),(0,t.jsx)(o.default.Input.Text,{style:e3,value:g,onChange:e=>{i(t=>({...t,note:e.target.value}))},placeholder:"메모가 필요한 사항을 입력해주세요."})]}),"DISABILITY_ACTIVITY_SUPPORT"===f&&(0,t.jsxs)(e4,{$width:191,children:[(0,t.jsx)(e5,{children:"차량 유류비 안내"}),(0,t.jsxs)(ti,{children:[(0,t.jsxs)(tl,{children:[(0,t.jsx)(ta,{checked:m,onChange:()=>{i(e=>({...e,vehicleFuelCostNoticeGiven:!0}))}}),"완료"]}),(0,t.jsxs)(tl,{children:[(0,t.jsx)(ta,{checked:!m,onChange:()=>{i(e=>({...e,vehicleFuelCostNoticeGiven:!1}))}}),"미완료"]})]})]})]}),(0,t.jsx)(e9,{}),(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:["접수일",(0,t.jsx)(tn,{})]}),(0,t.jsx)(o.default.Input.Date,{$autoFilled:e.firstRegisteredDate===v,style:S("firstRegisteredDate",tr),value:e.firstRegisteredDate??"",onChange:e=>{d("firstRegisteredDate"),A(e,(e,t)=>({...e,firstRegisteredDate:t}))}}),k("firstRegisteredDate")]}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:["계약일",(0,t.jsx)(tn,{})]}),(0,t.jsx)(o.default.Input.Date,{style:S("contractDate",tr),value:e.contractDate??"",onChange:e=>{d("contractDate"),A(e,(e,t)=>({...e,contractDate:t}))}}),k("contractDate")]}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"계약 시작일"}),(0,t.jsx)(o.default.Input.Date,{$autoFilled:D(h,n?.contractStartDate??""),style:S("contractStartDate",tr),value:h,onChange:e=>{(d("contractStartDate"),""===e.trim())?i(e=>({...e,contractStartDate:void 0})):A(e,(e,t)=>({...e,contractStartDate:t}))},showClearButton:!0}),k("contractStartDate")]}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"계약 종료일"}),(0,t.jsx)(o.default.Input.Date,{$autoFilled:D("DISABILITY_ACTIVITY_SUPPORT"===f?p:x,n?.contractEndDate??n?.serviceEndDate??""),style:"DISABILITY_ACTIVITY_SUPPORT"===f?tr:S("serviceEndDate",tr),value:"DISABILITY_ACTIVITY_SUPPORT"===f?"":x,disabled:"DISABILITY_ACTIVITY_SUPPORT"===f,onChange:e=>{"DISABILITY_ACTIVITY_SUPPORT"===f&&(d("contractEndDate"),A(e,(e,t)=>({...e,contractEndDate:t})))}}),"DISABILITY_ACTIVITY_SUPPORT"!==f&&k("serviceEndDate")]})]}),"DISABILITY_ACTIVITY_SUPPORT"!==f&&(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e4,{$width:191,children:[(0,t.jsx)(e5,{children:"서비스 시작일"}),(0,t.jsx)(o.default.Input.Date,{$autoFilled:D(u,n?.serviceStartDate??""),style:S("serviceStartDate",tr),value:u,onChange:e=>{d("serviceStartDate"),A(e,(e,t)=>{let n=(e=>{let[t,n,i]=e.split("-"),l=new Date(Number(t),Number(n)-1,Number(i));l.setFullYear(l.getFullYear()+1),l.setDate(l.getDate()-1);let[a,d]=e0.default.create(l.getFullYear(),l.getMonth()+1,l.getDate());return null!==a||null===d?null:d})(t);return null===n?e:{...e,serviceStartDate:t,serviceEndDate:n}})}}),k("serviceStartDate")]}),(0,t.jsxs)(e4,{$width:191,children:[(0,t.jsx)(e5,{children:"서비스 종료일"}),(0,t.jsx)(o.default.Input.Date,{$autoFilled:D(x,n?.serviceEndDate??""),style:S("serviceEndDate",tr),value:x,onChange:e=>{d("serviceEndDate"),A(e,(e,t)=>({...e,serviceEndDate:t}))}}),k("serviceEndDate")]})]}),(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:["사업구분",(0,t.jsx)(tn,{})]}),(0,t.jsx)(o.default.Input.Select,{style:e3,value:c,disabled:!0,children:(0,t.jsx)("option",{value:c,children:z})})]}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:["서비스명",(0,t.jsx)(tn,{})]}),(0,t.jsx)(o.default.Input.Select,{style:e3,value:f,disabled:!0,children:(0,t.jsx)("option",{value:f,children:I})})]}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:["서비스코드",(0,t.jsx)(tn,{})]}),(0,t.jsx)(o.default.Input.Text,{style:e3,value:E,readOnly:!0})]}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:["서비스유형",(0,t.jsx)(tn,{})]}),(0,t.jsx)(o.default.Input.Select,{style:e3,value:f,disabled:!0,children:(0,t.jsx)("option",{value:f,children:T})})]})]})]})});function tn(){return(0,t.jsx)(td,{children:" *"})}let ti=l.default.div.withConfig({componentId:"zh__sc-2ea09a12-0"})`
  display: flex;
  gap: 16px;
  align-items: center;
  height: 36px;
`,tl=l.default.label.withConfig({componentId:"zh__sc-2ea09a12-1"})`
  cursor: pointer;

  display: inline-flex;
  gap: 8px;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,ta=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-2ea09a12-2"})``,td=l.default.span.withConfig({componentId:"zh__sc-2ea09a12-3"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,to=l.default.div.withConfig({componentId:"zh__sc-2ea09a12-4"})`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;

  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,tr={...e3,height:36,lineHeight:"36px"},ts=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-2ea09a12-5"})`
  &::placeholder {
    color: #0a0a0a;
  }
`;var tc=e.i(39635),tf=e.i(10957),th=e.i(58362),tp=e.i(12945),tu=e.i(41417),tx=e.i(97181),tg=e.i(17306),tm=e.i(49183),tb=e.i(86544),tj=e.i(85754),t_=e.i(38535),tw=e.i(5564),ty=e.i(79786);let tv=[["1구간","8,293,000","면제","20,000","216,200","216,200","216,200","216,200"],["2구간","7,774,000","면제","20,000","216,200","216,200","216,200","216,200"],["3구간","7,257,000","면제","20,000","216,200","216,200","216,200","216,200"],["4구간","6,739,000","면제","20,000","216,200","216,200","216,200","216,200"],["5구간","6,221,000","면제","20,000","216,200","216,200","216,200","216,200"],["6구간","5,703,000","면제","20,000","216,200","216,200","216,200","216,200"],["7구간","5,181,000","면제","20,000","207,200","216,200","216,200","216,200"],["8구간","4,665,000","면제","20,000","186,600","216,200","216,200","216,200"],["9구간","4,148,000","면제","20,000","165,900","216,200","216,200","216,200"],["10구간","3,629,000","면제","20,000","145,100","216,200","216,200","216,200"],["11구간","3,112,000","면제","20,000","124,400","186,700","216,200","216,200"],["12구간","2,593,000","면제","20,000","103,700","155,500","207,400","216,200"],["13구간","2,076,000","면제","20,000","83,000","124,500","166,000","207,600"],["14구간","1,558,000","면제","20,000","62,300","93,400","124,600","155,800"],["15구간","1,040,000","면제","20,000","41,600","62,400","83,200","104,000"],["특례","7,257,000","면제","20,000","29,300","44,000","58,700","73,400"]],tC={TYPE_A:2,TYPE_B:3,TYPE_C:4,TYPE_D:5,TYPE_E:6,TYPE_F:7},tI=["1인가구","취약가구","출산가구","자립준비","학교생활","직장생활","보호자 일시 부재","나머지 가구구성원의 직장생활 등"],tz=["MON","TUE","WED","THU","FRI","SAT","SUN"],tT=[["ministryDeterminedHours","보건복지부"],["metroDeterminedHours","광역지자체"],["basicDeterminedHours","기초지자체"],["otherDeterminedHours","기타"]],tE=new Set(tw.DISABILITY_ACTIVITY_SUPPORT_BASIC_GRADES),tS="SPECIAL";function tk(e){return e in ty.default}let tD=(0,n.observer)(function(){let{clientDraft:e,ocrDraft:n,updateClientDraft:l,getClientDraftFieldError:d,clearClientDraftFieldError:r}=a.default.modal.clientCreate,[s,c]=(0,i.useState)(e?.serviceGrade?.startsWith("SPECIAL")===!0),[f,h]=(0,i.useState)(e?.serviceGrade?.startsWith("SPECIAL")===!0?e.serviceGrade.replace("SPECIAL",""):"");if(null===e)return null;let p=e.serviceGrade??tf.default.SELECT_EMPTY_VALUE,u=s||p.startsWith("SPECIAL"),x=p.startsWith("SPECIAL")?p.replace("SPECIAL",""):f,g=(e,t)=>void 0!==t&&e===t,m=u&&g(p,n?.serviceGrade),b=e.incomeCategory??tf.default.SELECT_EMPTY_VALUE,j=e.benefitDecisionPeriod??"",_=e.copaymentAmount??"",w=e.virtualAccountNumber??"",y=e.additionalBenefitTypes??[],v=e.workplace??"",C=e.schoolName??"",I=e.schoolStartTime??"",z=e.schoolEndTime??"",T=e.schoolDays??[],E=e.careCenterName??"",S=e.careCenterStartTime??"",k=e.careCenterEndTime??"",D=e.careCenterDays??[],A=e.primaryDisabilityName??"",L=e.primaryDisabilityGrade??"",$=e.primaryDisabilitySeverity??"",R=e.secondaryDisabilityName??"",O=e.secondaryDisabilityGrade??"",P=e.secondaryDisabilitySeverity??"",N=e.chronicDiseaseNames??"",M=e.medicationInfo??"",F=e.communicationStatusDetail??"",B=e.familyStatusDetail??"",U=a.default.data.serviceWorker.list,Y=U.data??[],V=e=>{l(t=>{let n={...t,...e},i=function(e,t){if(null===e||null===t)return null;let n=e.startsWith("SPECIAL")?"특례":`${e}구간`,i=tv.find(e=>e[0]===n);if(void 0===i)return null;let l=i[tC[t]];if(void 0===l)return null;let a="면제"===l?0:Number(l.replaceAll(",","")),d=Number(i[1].replaceAll(",",""));return Number.isNaN(a)||Number.isNaN(d)?null:{copaymentAmount:a,monthlyLimitAmount:d}}(n.serviceGrade??null,n.incomeCategory??null);return null!==i&&r("copaymentAmount"),{...n,copaymentAmount:null===i?void 0:String(i.copaymentAmount)}})},W=(e,t)=>""===d(e)?t:{...t,borderColor:"#ff4d4f",background:"#fff5f5"},H=e=>{let n=d(e);return""===n?null:(0,t.jsx)(tO,{"data-client-create-field-error":"true",children:n})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e2,{children:"계좌∙자격 및 기타 정보"}),(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:["활동지원급여 구간 ",(0,t.jsx)(tR,{})]}),(0,t.jsxs)(tP,{$isEmptySelected:!u&&p===tf.default.SELECT_EMPTY_VALUE,$autoFilled:m||g(p,n?.serviceGrade),value:u?tS:p,onChange:e=>{let t=e.target.value;if(r("serviceGrade"),r("isSpecialGradeSelected"),t===tS){c(!0),V({isSpecialGradeSelected:!0,serviceGrade:void 0});return}tE.has(t)&&(c(!1),h(""),V({isSpecialGradeSelected:!1,serviceGrade:t}))},style:W("serviceGrade",e3),children:[(0,t.jsx)("option",{value:tf.default.SELECT_EMPTY_VALUE,disabled:!0,children:"구간을 입력해주세요."}),tw.DISABILITY_ACTIVITY_SUPPORT_BASIC_GRADES.map(e=>(0,t.jsxs)("option",{value:e,children:[e,"구간"]},e)),(0,t.jsx)("option",{value:tS,children:"특례"})]}),H("serviceGrade")]}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:["특례 구간 ",(0,t.jsx)(tR,{})]}),(0,t.jsx)(o.default.Input.Text,{$autoFilled:m,value:x,disabled:!u,onChange:e=>{let t=e.target.value;if(r("isSpecialGradeSelected"),""!==t&&!/^([1-9]\d{0,2}|1000)$/.test(t))return;let n=function(e){if(/^([1-9]\d{0,2}|1000)$/.test(e))return`SPECIAL${e}`}(t);h(t),V({isSpecialGradeSelected:!0,serviceGrade:n})},placeholder:"숫자를 입력하세요.",inputMode:"numeric",maxLength:4,style:W("isSpecialGradeSelected",e3)}),H("isSpecialGradeSelected")]}),(0,t.jsxs)(e4,{$width:398,children:[(0,t.jsxs)(e5,{children:["소득 유형 ",(0,t.jsx)(tR,{})]}),(0,t.jsxs)(tP,{$isEmptySelected:b===tf.default.SELECT_EMPTY_VALUE,$autoFilled:g(b,n?.incomeCategory),value:b,onChange:e=>{let t=e.target.value;r("incomeCategory"),tk(t)&&V({incomeCategory:t})},style:W("incomeCategory",e3),children:[(0,t.jsx)("option",{value:tf.default.SELECT_EMPTY_VALUE,disabled:!0,children:"유형을 선택해주세요."}),Object.keys(ty.default).filter(tk).map(e=>(0,t.jsx)("option",{value:e,children:ty.default[e].label},e))]}),H("incomeCategory")]})]}),(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"수급결정시기"}),(0,t.jsx)(o.default.Input.Date,{value:j,onChange:e=>{""===e?l(e=>({...e,benefitDecisionPeriod:void 0})):e0.default.is(e)&&l(t=>({...t,benefitDecisionPeriod:e}))},style:{...e3,width:"100%",height:36}})]}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:["본인부담금(원) ",(0,t.jsx)(tR,{})]}),(0,t.jsx)(o.default.Input.Money,{value:_,onChange:e=>{r("copaymentAmount"),l(t=>({...t,copaymentAmount:e}))},placeholder:"00,000",style:W("copaymentAmount",e3)}),H("copaymentAmount")]}),(0,t.jsxs)(e4,{$width:398,children:[(0,t.jsxs)(e5,{children:["가상계좌 ",(0,t.jsx)(tR,{})]}),(0,t.jsx)(o.default.Input.Text,{$autoFilled:g(w,n?.virtualAccountNumber),value:w,onChange:e=>{r("virtualAccountNumber"),l(t=>({...t,virtualAccountNumber:e.target.value}))},placeholder:"가상계좌를 입력해주세요.",inputMode:"numeric",style:W("virtualAccountNumber",e3)}),H("virtualAccountNumber")]})]}),(0,t.jsx)(e6,{children:(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"추가급여대상 여부"}),(0,t.jsx)(tN,{children:tI.map(e=>(0,t.jsxs)(tG,{children:[(0,t.jsx)(tX,{checked:y.includes(e),onChange:()=>{let t=y.includes(e)?y.filter(t=>t!==e):[...y,e];l(e=>({...e,additionalBenefitTypes:t}))}}),(0,t.jsx)(tK,{children:e})]},e))})]})}),(0,t.jsx)(e6,{children:(0,t.jsxs)(e4,{$width:193,children:[(0,t.jsx)(e5,{children:"연결할 제공인력"}),(0,t.jsxs)(tP,{$isEmptySelected:void 0===e.serviceWorkerId,value:e.serviceWorkerId??tf.default.SELECT_EMPTY_VALUE,disabled:a.default.modal.clientCreate.isServiceMatchingRegistration,onOpenChange:t=>{t&&(U.setQuery({serviceType:e.serviceType,regions:e.desiredRegions,times:e.desiredServiceTimes,status:"ACTIVE"}),U.refetch())},onChange:e=>{r("serviceWorkerId"),l(t=>({...t,serviceWorkerId:e.target.value===tf.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:W("serviceWorkerId",e3),children:[(0,t.jsx)("option",{value:tf.default.SELECT_EMPTY_VALUE,"data-trigger-label":"제공인력을 선택하세요.",children:"loading"===U.status?"조회 중...":"선택안함"}),null!==a.default.modal.clientCreate.matchingServiceWorkerName&&Y.every(t=>t.id!==e.serviceWorkerId)&&(0,t.jsx)("option",{value:e.serviceWorkerId,children:a.default.modal.clientCreate.matchingServiceWorkerName}),Y.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]}),H("serviceWorkerId")]})}),(0,t.jsx)(e2,{children:"직장 및 학교"}),(0,t.jsx)(e6,{children:(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"직장"}),(0,t.jsx)(o.default.Input.Text,{value:v,onChange:e=>{l(t=>({...t,workplace:e.target.value}))},placeholder:"직장명을 입력하세요.",style:e3})]})}),(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e4,{$width:395,children:[(0,t.jsx)(e5,{children:"학교명"}),(0,t.jsx)(o.default.Input.Text,{value:C,onChange:e=>{l(t=>({...t,schoolName:e.target.value}))},placeholder:"학교명을 입력하세요.",style:e3})]}),(0,t.jsxs)(e4,{$width:190,children:[(0,t.jsx)(e5,{children:"시작 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:I,onChange:e=>{r("schoolStartTime"),l(t=>({...t,schoolStartTime:e}))},style:W("schoolStartTime",e3),placeholder:"00:00"}),H("schoolStartTime")]}),(0,t.jsx)(tQ,{children:"~"}),(0,t.jsxs)(e4,{$width:190,children:[(0,t.jsx)(e5,{children:"종료 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:z,onChange:e=>{r("schoolEndTime"),l(t=>({...t,schoolEndTime:e}))},style:W("schoolEndTime",e3),placeholder:"00:00"}),H("schoolEndTime")]})]}),(0,t.jsx)(tL,{label:"등교 요일",selectedDays:T,onChange:e=>l(t=>({...t,schoolDays:e}))}),(0,t.jsx)(e2,{children:"주단기보호센터"}),(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e4,{$width:395,children:[(0,t.jsx)(e5,{children:"주단기보호센터명"}),(0,t.jsx)(o.default.Input.Text,{value:E,onChange:e=>{l(t=>({...t,careCenterName:e.target.value}))},placeholder:"센터명을 입력하세요.",style:e3})]}),(0,t.jsx)(tA,{label:"시작 시간",value:S,errorMessage:d("careCenterStartTime"),onChange:e=>{r("careCenterStartTime"),l(t=>({...t,careCenterStartTime:e}))}}),(0,t.jsx)(tQ,{children:"~"}),(0,t.jsx)(tA,{label:"종료 시간",value:k,errorMessage:d("careCenterEndTime"),onChange:e=>{r("careCenterEndTime"),l(t=>({...t,careCenterEndTime:e}))}})]}),(0,t.jsx)(tL,{label:"등원 요일",selectedDays:D,onChange:e=>l(t=>({...t,careCenterDays:e}))}),(0,t.jsx)(e2,{children:"판정시간"}),(0,t.jsx)(e6,{children:tT.map(([n,i])=>(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:i}),(0,t.jsxs)(tB,{children:[(0,t.jsx)(o.default.Input.Text,{value:e[n]??"",onChange:e=>{let t=e.target.value;l(e=>({...e,[n]:""===t?void 0:Number(t)}))},placeholder:"00",inputMode:"numeric",style:{...e3,width:140,textAlign:"center"}}),(0,t.jsx)(tU,{children:"시간"})]})]},n))}),(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e5,{children:["주장애명 ",(0,t.jsx)(tR,{})]}),(0,t.jsxs)(tP,{$isEmptySelected:""===A,value:A||tf.default.SELECT_EMPTY_VALUE,onChange:e=>{r("primaryDisabilityName"),l(t=>({...t,primaryDisabilityName:e.target.value===tf.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:W("primaryDisabilityName",e3),children:[(0,t.jsx)("option",{value:tf.default.SELECT_EMPTY_VALUE,"data-trigger-label":"주장애명을 선택해주세요.",children:"선택안함"}),Object.entries(tb.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]}),H("primaryDisabilityName")]}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"장애급수"}),(0,t.jsxs)(tP,{$isEmptySelected:""===L,value:L||tf.default.SELECT_EMPTY_VALUE,onChange:e=>{l(t=>({...t,primaryDisabilityGrade:e.target.value===tf.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:e3,children:[(0,t.jsx)("option",{value:tf.default.SELECT_EMPTY_VALUE,"data-trigger-label":"장애급수를 선택해주세요.",children:"선택안함"}),Object.entries(tm.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"주장애 장애정도"}),(0,t.jsxs)(tP,{$isEmptySelected:""===$,value:$||tf.default.SELECT_EMPTY_VALUE,onChange:e=>{l(t=>({...t,primaryDisabilitySeverity:e.target.value===tf.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:e3,children:[(0,t.jsx)("option",{value:tf.default.SELECT_EMPTY_VALUE,"data-trigger-label":"주장애 장애정도를 선택해주세요.",children:"선택안함"}),Object.entries(tj.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]})]}),(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"부장애명"}),(0,t.jsxs)(tP,{$isEmptySelected:""===R,value:R||tf.default.SELECT_EMPTY_VALUE,onChange:e=>{l(t=>({...t,secondaryDisabilityName:e.target.value===tf.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:e3,children:[(0,t.jsx)("option",{value:tf.default.SELECT_EMPTY_VALUE,"data-trigger-label":"부장애명을 선택해주세요.",children:"선택안함"}),Object.entries(tb.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"장애급수"}),(0,t.jsxs)(tP,{$isEmptySelected:""===O,value:O||tf.default.SELECT_EMPTY_VALUE,onChange:e=>{l(t=>({...t,secondaryDisabilityGrade:e.target.value===tf.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:e3,children:[(0,t.jsx)("option",{value:tf.default.SELECT_EMPTY_VALUE,"data-trigger-label":"장애급수를 선택해주세요.",children:"선택안함"}),Object.entries(tm.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"부장애 장애정도"}),(0,t.jsxs)(tP,{$isEmptySelected:""===P,value:P||tf.default.SELECT_EMPTY_VALUE,onChange:e=>{l(t=>({...t,secondaryDisabilitySeverity:e.target.value===tf.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:e3,children:[(0,t.jsx)("option",{value:tf.default.SELECT_EMPTY_VALUE,"data-trigger-label":"부장애 장애정도를 선택해주세요.",children:"선택안함"}),Object.entries(tj.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]})]}),(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"보유질환명"}),(0,t.jsx)(o.default.Input.Text,{value:N,onChange:e=>l(t=>({...t,chronicDiseaseNames:e.target.value})),placeholder:"보유질환에 대해 입력해주세요.",style:e3})]}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"투약정보"}),(0,t.jsx)(o.default.Input.Text,{value:M,onChange:e=>l(t=>({...t,medicationInfo:e.target.value})),placeholder:"투약정보에 대해 입력해주세요.",style:e3})]})]}),(0,t.jsxs)(e6,{children:[(0,t.jsx)(t$,{label:"외상장애 여부",name:"hasTraumaDisability",width:158,options:[["NOT_APPLICABLE","미해당"],["APPLICABLE","해당"]],value:!0===e.hasTraumaDisability?"APPLICABLE":"NOT_APPLICABLE",onChange:e=>l(t=>({...t,hasTraumaDisability:"APPLICABLE"===e}))}),(0,t.jsx)(t$,{label:"의사소통",name:"communicationStatus",width:443,options:[[tx.default.POSSIBLE,"가능"],[tx.default.IMPOSSIBLE,"불가능"],[tx.default.OTHER,"기타"]],value:e.communicationStatus??tx.default.POSSIBLE,onChange:e=>l(t=>({...t,communicationStatus:e,...e===tx.default.OTHER?{}:{communicationStatusDetail:void 0}})),otherValue:F,onOtherChange:e=>l(t=>({...t,communicationStatusDetail:e}))}),(0,t.jsx)(t$,{label:"휠체어 유무",name:"hasWheelchair",width:116,options:[["AVAILABLE","유"],["UNAVAILABLE","무"]],value:!1===e.hasWheelchair?"UNAVAILABLE":"AVAILABLE",onChange:e=>l(t=>({...t,hasWheelchair:"AVAILABLE"===e}))})]}),(0,t.jsxs)(e6,{children:[(0,t.jsx)(t$,{label:"결혼여부",name:"isMarried",options:[["SINGLE","미혼"],["MARRIED","기혼"]],width:144,value:!0===e.isMarried?"MARRIED":"SINGLE",onChange:e=>l(t=>({...t,isMarried:"MARRIED"===e}))}),(0,t.jsx)(t$,{label:"가족사항",name:"familyStatus",options:[[t_.default.ALONE,"독거"],[t_.default.COUPLE,"부부"],[t_.default.SINGLE_PARENT,"한부모"],[t_.default.OTHER,"기타"]],width:530,value:e.familyStatus??t_.default.ALONE,onChange:e=>l(t=>({...t,familyStatus:e,...e===t_.default.OTHER?{}:{familyStatusDetail:void 0}})),otherValue:B,onOtherChange:e=>l(t=>({...t,familyStatusDetail:e}))})]})]})});function tA({label:e,value:n,errorMessage:i,onChange:l}){return(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:e}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:n,onChange:l,placeholder:"00:00",style:""===i?e3:{...e3,borderColor:"#ff4d4f",background:"#fff5f5"}}),""!==i?(0,t.jsx)(tO,{"data-client-create-field-error":"true",children:i}):null]})}function tL({label:e,selectedDays:n,onChange:i}){return(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:e}),(0,t.jsx)(tM,{children:tz.map(e=>(0,t.jsxs)(tF,{children:[(0,t.jsx)(tX,{checked:n.includes(e),onChange:()=>i(n.includes(e)?n.filter(t=>t!==e):[...n,e])}),(0,t.jsx)(tK,{children:tg.default[e].label})]},e))})]})}function t$({label:e,name:n,width:i,options:l,value:a,onChange:d,required:r=!1,otherValue:s,onOtherChange:c}){return(0,t.jsxs)(tY,{$width:i,children:[(0,t.jsxs)(e5,{children:[e," ",r&&(0,t.jsx)(tR,{})]}),(0,t.jsx)(tV,{children:l.map(([e,i])=>(0,t.jsxs)(tW,{children:[(0,t.jsx)(tH,{type:"radio",name:n,value:e,checked:a===e,onChange:()=>d(e)}),(0,t.jsx)(tK,{children:i}),"OTHER"===e&&c&&(0,t.jsx)(o.default.Input.Text,{value:s??"",disabled:a!==e,onChange:e=>c(e.target.value),placeholder:"관련 내용을 입력해주세요.",style:{...e3,width:193}})]},e))})]})}function tR(){return(0,t.jsx)(tq,{children:" *"})}let tO=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-0"})`
  margin-top: 4px;
  font-size: 12px;
  color: #e7000b;
`,tP=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-d7ceea08-1"})`
  color: ${({$autoFilled:e,$isEmptySelected:t})=>!0===e?"#4f39f6":t?"#9ca3af":"#0a0a0a"};
  background: ${({$autoFilled:e})=>!0===e?"#f4f2ff":"#fff"};
`,tN=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  align-items: center;
`,tM=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-3"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;

  padding: 4px 0;
`,tF=l.default.label.withConfig({componentId:"zh__sc-d7ceea08-4"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,tB=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-5"})`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`,tU=l.default.span.withConfig({componentId:"zh__sc-d7ceea08-6"})`
  flex-shrink: 0;
  font-size: 16px;
  color: #000;
`,tY=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-7"})`
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
`,tW=l.default.label.withConfig({componentId:"zh__sc-d7ceea08-9"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  min-height: 36px;
`,tH=l.default.input.withConfig({componentId:"zh__sc-d7ceea08-10"})`
  flex-shrink: 0;

  width: 24px;
  height: 24px;
  margin: 0;

  accent-color: #256ef4;
`,tG=l.default.label.withConfig({componentId:"zh__sc-d7ceea08-11"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,tK=l.default.span.withConfig({componentId:"zh__sc-d7ceea08-12"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,tX=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-d7ceea08-13"})`
  width: 24px;
  height: 24px;
`,tq=l.default.span.withConfig({componentId:"zh__sc-d7ceea08-14"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,tQ=l.default.span.withConfig({componentId:"zh__sc-d7ceea08-15"})`
  align-self: flex-start;
  padding-top: 28px;
  font-size: 16px;
  color: #000;
`,tZ=()=>a.default.ui.serviceRegion.codes,tJ=["PHYSICAL_ACTIVITY_SUPPORT","HOUSEKEEPING_SUPPORT","SOCIAL_ACTIVITY_SUPPORT","OTHER"],t0=["MALE","FEMALE"],t1=["TWENTIES_OR_YONGER","THIRTIES","FORTIES","FIFTIES","SIXTIES","SEVENTIES_OR_OLDER"],t2=(0,n.observer)(function(){let{clientDraft:e,updateClientDraft:n,getClientDraftFieldError:i,clearClientDraftFieldError:l}=a.default.modal.clientCreate;if(null===e)return null;let d=e.desiredServiceHours,r=e.desiredRegions??[],s=e.desiredCareTypes??[],c=e.desiredServiceWorkerGender,f=e.desiredAgeRanges??[],h="DISABILITY_ACTIVITY_SUPPORT"===e.serviceType,p=tZ().every(e=>r.includes(e)),u=tJ.every(e=>s.some(t=>t.careType===e)),x=t1.every(e=>f.includes(e));return(0,t.jsxs)(t4,{children:[(0,t.jsxs)(t3,{children:[(0,t.jsxs)(t9,{children:["서비스 희망 시간",h&&(0,t.jsx)(t6,{})]}),(0,t.jsxs)(t7,{children:[(0,t.jsx)(tc.default,{sx:{fontSize:20}}),(0,t.jsx)(ne,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]})]}),(0,t.jsx)(nt,{value:e.desiredServiceTimes,onChange:e=>{l("desiredServiceTimes"),n(t=>({...t,desiredServiceTimes:e.target.value}))}}),""!==i("desiredServiceTimes")&&(0,t.jsx)(no,{"data-client-create-field-error":"true",children:i("desiredServiceTimes")}),(0,t.jsxs)(nn,{children:[(0,t.jsx)(ni,{children:"희망 서비스 시간"}),(0,t.jsxs)(nl,{children:[(0,t.jsx)(nd,{children:"총"}),(0,t.jsx)(na,{value:void 0===d?"":String(d),placeholder:"00",maxLength:2,onChange:e=>{let t=e.target.value.replace(/\D/g,"");n(e=>({...e,desiredServiceHours:""===t?void 0:Math.min(Number(t),99)}))}}),(0,t.jsx)(nd,{children:"시간"})]})]}),(0,t.jsxs)(nr,{children:[(0,t.jsxs)(ns,{children:["서비스 희망 지역 (복수 선택 가능)",h&&(0,t.jsx)(t6,{})]}),(0,t.jsxs)(nc,{children:[(0,t.jsxs)(nh,{children:[(0,t.jsx)(nj,{checked:p,onChange:()=>{l("desiredRegions"),n(e=>({...e,desiredRegions:p?[]:tZ()}))}}),(0,t.jsx)(nx,{children:"전체 선택"})]},tf.default.CHECK_ALL_VALUE),tZ().map(e=>(0,t.jsxs)(nh,{children:[(0,t.jsx)(nj,{checked:r.includes(e),onChange:()=>{l("desiredRegions"),n(t=>({...t,desiredRegions:r.includes(e)?r.filter(t=>t!==e):[...r,e]}))}}),(0,t.jsx)(nx,{children:a.default.ui.serviceRegion.label(e)})]},e))]}),""!==i("desiredRegions")&&(0,t.jsx)(no,{"data-client-create-field-error":"true",children:i("desiredRegions")})]}),h&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(nr,{children:[(0,t.jsxs)(ns,{children:["희망 활동 내용 (복수 선택 가능)",(0,t.jsx)(t6,{})]}),(0,t.jsxs)(nf,{children:[(0,t.jsxs)(nh,{children:[(0,t.jsx)(nj,{checked:u,onChange:()=>{l("desiredCareTypes"),n(e=>({...e,desiredCareTypes:u?[]:tJ.map(e=>s.find(t=>t.careType===e)??{careType:e})}))}}),(0,t.jsx)(nx,{children:"전체 선택"})]}),tJ.map(e=>{let i=s.find(t=>t.careType===e);return(0,t.jsxs)(np,{children:[(0,t.jsxs)(nh,{children:[(0,t.jsx)(nj,{checked:void 0!==i,onChange:()=>{l("desiredCareTypes"),n(t=>({...t,desiredCareTypes:s.some(t=>t.careType===e)?s.filter(t=>t.careType!==e):[...s,{careType:e}]}))}}),(0,t.jsx)(nx,{children:"PHYSICAL_ACTIVITY_SUPPORT"===e?"신체 활동":tu.default[e].label.replace("활동"," 활동")})]}),(0,t.jsx)(nu,{style:e3,disabled:void 0===i,value:i?.detail??"",onChange:t=>{n(n=>({...n,desiredCareTypes:(n.desiredCareTypes??[]).map(n=>n.careType===e?{...n,detail:t.target.value}:n)}))},placeholder:"관련 내용을 입력해주세요."})]},e)})]}),""!==i("desiredCareTypes")&&(0,t.jsx)(no,{"data-client-create-field-error":"true",children:i("desiredCareTypes")})]}),(0,t.jsxs)(nr,{children:[(0,t.jsxs)(ns,{children:["제공인력 희망 성별",(0,t.jsx)(t6,{})]}),(0,t.jsxs)(nc,{children:[(0,t.jsxs)(nh,{children:[(0,t.jsx)(o.default.Input.Radio,{name:"desired-service-worker-gender",checked:null===c,onChange:()=>{n(e=>({...e,desiredServiceWorkerGender:null}))}}),(0,t.jsx)(nx,{children:"전체 선택"})]}),t0.map(e=>(0,t.jsxs)(nh,{children:[(0,t.jsx)(o.default.Input.Radio,{name:"desired-service-worker-gender",checked:c===e,onChange:()=>{n(t=>({...t,desiredServiceWorkerGender:e}))}}),(0,t.jsx)(nx,{children:tp.default[e].label})]},e))]}),""!==i("desiredServiceWorkerGender")&&(0,t.jsx)(no,{"data-client-create-field-error":"true",children:i("desiredServiceWorkerGender")})]}),(0,t.jsxs)(nr,{children:[(0,t.jsxs)(ns,{children:["제공인력 희망 연령 (복수 선택 가능)",(0,t.jsx)(t6,{})]}),(0,t.jsxs)(nc,{children:[(0,t.jsxs)(nh,{children:[(0,t.jsx)(nj,{checked:x,onChange:()=>{n(e=>({...e,desiredAgeRanges:x?[]:t1}))}}),(0,t.jsx)(nx,{children:"전체 선택"})]}),t1.map(e=>(0,t.jsxs)(nh,{children:[(0,t.jsx)(nj,{checked:f.includes(e),onChange:()=>{l("desiredAgeRanges"),n(t=>({...t,desiredAgeRanges:f.includes(e)?f.filter(t=>t!==e):[...f,e]}))}}),(0,t.jsx)(nx,{children:"TWENTIES_OR_YONGER"===e||"SEVENTIES_OR_OLDER"===e?th.default[e].label.replace(" 이하","").replace(" 이상",""):th.default[e].label})]},e))]}),""!==i("desiredAgeRanges")&&(0,t.jsx)(no,{"data-client-create-field-error":"true",children:i("desiredAgeRanges")})]}),h&&a.default.modal.clientCreate.isContractInputMode&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(t5,{}),(0,t.jsx)(tD,{})]}),(0,t.jsxs)(nr,{children:[(0,t.jsx)(ns,{children:"(타기관) 이용경험"}),(0,t.jsx)(ng,{value:e.usageExperience??"",onChange:e=>{n(t=>({...t,usageExperience:e.target.value}))},placeholder:"텍스트를 입력해주세요."})]}),(0,t.jsxs)(nr,{children:[(0,t.jsx)(ns,{children:"특이사항 (장애특성 및 일상생활)"}),(0,t.jsx)(nm,{value:e.dailyLivingNotes??"",onChange:e=>{n(t=>({...t,dailyLivingNotes:e.target.value}))},placeholder:"특이사항을 입력해주세요."})]}),(0,t.jsxs)(nr,{children:[(0,t.jsx)(ns,{children:"종합소견"}),(0,t.jsx)(nb,{value:e.comprehensiveOpinion??"",onChange:e=>{n(t=>({...t,comprehensiveOpinion:e.target.value}))},placeholder:"종합소견을 입력해주세요."})]})]})]})});function t6(){return(0,t.jsx)(t8,{children:" *"})}let t4=l.default.div.withConfig({componentId:"zh__sc-51651a13-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,t5=l.default.div.withConfig({componentId:"zh__sc-51651a13-1"})`
  flex-shrink: 0;
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,t3=l.default.div.withConfig({componentId:"zh__sc-51651a13-2"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;

  height: 30px;
`,t9=l.default.div.withConfig({componentId:"zh__sc-51651a13-3"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,t8=l.default.span.withConfig({componentId:"zh__sc-51651a13-4"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,t7=l.default.div.withConfig({componentId:"zh__sc-51651a13-5"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;

  color: #464c53;
`,ne=l.default.div.withConfig({componentId:"zh__sc-51651a13-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
`,nt=(0,l.default)(o.default.Input.TimeSlider).withConfig({componentId:"zh__sc-51651a13-7"})`
  align-self: stretch;
`,nn=l.default.div.withConfig({componentId:"zh__sc-51651a13-8"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,ni=l.default.div.withConfig({componentId:"zh__sc-51651a13-9"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,nl=l.default.div.withConfig({componentId:"zh__sc-51651a13-10"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,na=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-51651a13-11"})`
  width: 59px;
  height: 36px;
  text-align: center;
`,nd=l.default.div.withConfig({componentId:"zh__sc-51651a13-12"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,no=l.default.div.withConfig({componentId:"zh__sc-51651a13-13"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,nr=l.default.div.withConfig({componentId:"zh__sc-51651a13-14"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,ns=l.default.div.withConfig({componentId:"zh__sc-51651a13-15"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,nc=l.default.div.withConfig({componentId:"zh__sc-51651a13-16"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  align-items: center;
`,nf=(0,l.default)(nc).withConfig({componentId:"zh__sc-51651a13-17"})`
  row-gap: 8px;
`,nh=l.default.label.withConfig({componentId:"zh__sc-51651a13-18"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,np=l.default.div.withConfig({componentId:"zh__sc-51651a13-19"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,nu=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-51651a13-20"})`
  width: 220px;
`,nx=l.default.span.withConfig({componentId:"zh__sc-51651a13-21"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,ng=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-51651a13-22"})`
  resize: vertical;

  width: 100%;
  min-height: 100px;
  padding: 12px 16px;

  font-size: 16px;
`,nm=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-51651a13-23"})`
  width: 100%;
  padding: 4px 16px;
  font-size: 16px;
`,nb=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-51651a13-24"})`
  resize: vertical;

  width: 100%;
  min-height: 156px;
  padding: 12px 16px;

  font-size: 16px;
`,nj=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-51651a13-25"})`
  width: 24px;
  height: 24px;
`,n_=(0,n.observer)(function(){let{clientDraft:e,ocrDraft:n,updateClientDraft:i,getClientDraftFieldError:l,clearClientDraftFieldError:d}=a.default.modal.clientCreate;if(null===e||"DISABILITY_ACTIVITY_SUPPORT"===e.serviceType||!a.default.modal.clientCreate.isContractInputMode)return null;let o=e.serviceGrade??tf.default.SELECT_EMPTY_VALUE,r=l("serviceGrade"),s=""===r?e3:{...e3,borderColor:"#ff4d4f",background:"#fff5f5"};return(0,t.jsxs)(e4,{$width:181,children:[(0,t.jsxs)(e5,{children:["바우처 등급",(0,t.jsx)(nw,{})]}),(0,t.jsxs)(nv,{$isEmptySelected:o===tf.default.SELECT_EMPTY_VALUE,$autoFilled:o===(n?.serviceGrade??""),style:s,value:o,onChange:e=>{d("serviceGrade");let t=e.target.value;if(t===tf.default.SELECT_EMPTY_VALUE)return void i(e=>({...e,serviceGrade:void 0}));switch(t){case"1":case"2":case"3":case"4":i(e=>({...e,serviceGrade:t}));return;default:return}},children:[(0,t.jsx)("option",{value:tf.default.SELECT_EMPTY_VALUE,disabled:!0,children:"등급을 선택해주세요."}),(0,t.jsx)("option",{value:"1",children:"1등급"}),(0,t.jsx)("option",{value:"2",children:"2등급"}),(0,t.jsx)("option",{value:"3",children:"3등급"}),(0,t.jsx)("option",{value:"4",children:"4등급"})]}),""!==r&&(0,t.jsx)(nC,{"data-client-create-field-error":"true",children:r})]})});function nw(){return(0,t.jsx)(ny,{children:" *"})}let ny=l.default.span.withConfig({componentId:"zh__sc-238b45fe-0"})`
  font-size: 16px;
  font-weight: 400;
  color: #e7000b;
`,nv=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-238b45fe-1"})`
  color: ${({$autoFilled:e,$isEmptySelected:t})=>!0===e?"#4f39f6":t?"#9ca3af":"#0a0a0a"};
  background: ${({$autoFilled:e})=>!0===e?"#f4f2ff":"#fff"};
`,nC=l.default.div.withConfig({componentId:"zh__sc-238b45fe-2"})`
  margin-top: 4px;
  font-size: 12px;
  color: #e7000b;
`,nI=(0,n.observer)(function(){let{clientDraft:e,isServiceMatchingRegistration:n,matchingServiceWorkerName:i,updateClientDraft:l}=a.default.modal.clientCreate,d=a.default.data.serviceWorker.list,o=e?.contractStartDate??"",r=d.data??[];return e?.serviceType==="DISABILITY_ACTIVITY_SUPPORT"?null:(0,t.jsxs)(nz,{children:[(0,t.jsx)(nT,{children:"연결할 제공인력"}),(0,t.jsxs)(nS,{$isEmptySelected:e?.serviceWorkerId===void 0,style:nE,value:e?.serviceWorkerId??tf.default.SELECT_EMPTY_VALUE,disabled:n||""===o,onOpenChange:t=>{t&&null!==e&&(d.setQuery({serviceType:e.serviceType,regions:e.desiredRegions,times:e.desiredServiceTimes,status:"ACTIVE"}),d.refetch())},onChange:e=>{l(t=>({...t,serviceWorkerId:e.target.value===tf.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},children:[(0,t.jsx)("option",{value:tf.default.SELECT_EMPTY_VALUE,"data-trigger-label":"제공인력을 선택하세요.",children:"loading"===d.status?"조회 중...":"선택안함"}),null!==i&&r.every(t=>t.id!==e?.serviceWorkerId)&&(0,t.jsx)("option",{value:e?.serviceWorkerId,children:i}),r.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]})}),nz=l.default.div.withConfig({componentId:"zh__sc-fe78af34-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  width: 181px;
  min-height: 59px;
`,nT=l.default.div.withConfig({componentId:"zh__sc-fe78af34-1"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
`,nE={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"0 0 auto",fontSize:16,width:200,height:36},nS=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-fe78af34-2"})`
  min-height: 36px;
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,nk=(0,n.observer)(function(){let e=a.default.modal.clientCreate.clientDraft,n=e?.serviceType==="DISABILITY_ACTIVITY_SUPPORT",i=a.default.modal.clientCreate.isContractInputMode;return(0,t.jsxs)(nD,{children:[(0,t.jsx)(nA,{children:"이용자 기본 정보"}),(0,t.jsx)(tt,{}),(0,t.jsx)(nL,{}),(0,t.jsx)(t2,{}),!n&&i&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(nL,{}),(0,t.jsxs)(n$,{children:[(0,t.jsx)(n_,{}),(0,t.jsx)(nI,{})]})]})]})}),nD=l.default.div.withConfig({componentId:"zh__sc-52495c18-0"})`
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
`,nA=l.default.div.withConfig({componentId:"zh__sc-52495c18-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,nL=l.default.div.withConfig({componentId:"zh__sc-52495c18-2"})`
  flex-shrink: 0;
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,n$=l.default.div.withConfig({componentId:"zh__sc-52495c18-3"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
`,nR=(0,n.observer)(function(){let{clientDraft:e}=a.default.modal.clientCreate;return(0,t.jsxs)(nO,{children:[(0,t.jsx)(eZ,{}),e&&(0,t.jsx)(nk,{})]})}),nO=l.default.div.withConfig({componentId:"zh__sc-cfc6108c-0"})`
  overflow: hidden;
  display: flex;
  flex: 1 1 auto;
  align-self: stretch;
  justify-content: center;

  min-height: 0;
  max-height: none;

  background: #f9fafb;
`;function nP(){let{close:e,mode:n}=a.default.modal.clientCreate;return(0,t.jsxs)(nN,{children:[(0,t.jsx)(nM,{children:"renew"===n?"재계약 이용자 등록하기":"신규 이용자 등록하기"}),(0,t.jsxs)(nF,{onClick:e,children:[(0,t.jsx)(et.X,{size:16}),"닫기"]})]})}let nN=l.default.div.withConfig({componentId:"zh__sc-f50634fa-0"})`
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
`,nM=l.default.div.withConfig({componentId:"zh__sc-f50634fa-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px; /* 155.556% */
  color: #101828;
  letter-spacing: -0.439px;
`,nF=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-f50634fa-2"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,nB=(0,n.observer)(function(){let e=a.default.modal.clientCreate,{status:n}=e,l=(0,i.useRef)(null);return((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(l.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)?null:(0,t.jsx)(d.default,{children:(0,t.jsxs)(nU,{ref:l,children:[(0,t.jsx)(nP,{}),(0,t.jsx)(nR,{}),(0,t.jsx)(j,{}),(0,t.jsx)(s,{currentServiceType:e.selectedServiceType,detectedServiceType:e.pendingDetectedServiceType??e.selectedServiceType,isContinueDisabled:!e.isPendingDetectedServiceAvailable,isOpen:e.isServiceTypeMismatchDialogOpen,onCancel:e.cancelServiceTypeMismatchRegistration,onContinue:e.confirmServiceTypeMismatchRegistration,registrationTarget:"이용자"}),(0,t.jsx)(S,{}),(0,t.jsx)(N,{})]})})}),nU=l.default.div.withConfig({componentId:"zh__sc-21fa7296-0"})`
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
`;var nY=e.i(62897),nV=e.i(44968);function nW(e){if(!e0.default.is(e))return"-";let[t,n,i]=e.split("-");return`${t}년 ${Number(n)}월 ${Number(i)}일`}function nH(e){return e instanceof Element&&null!==e.closest('[aria-label="Date picker"]')}function nG(e){return e instanceof Element&&(null!==e.closest('[role="listbox"]')||null!==e.closest('[role="option"]')||null!==e.closest("[data-radix-select-viewport]")||null!==e.closest("[data-radix-popper-content-wrapper]"))}function nK(e){if(!e0.default.is(e))return"-";let[t,n,i]=e.split("-");return`${t}.${n}.${i}`}function nX(e,t){if(!e0.default.is(e)||!e0.default.is(t))return[];let[n,i]=e.split("-"),[l,a]=t.split("-"),d=Number(n),o=Number(i),r=Number(l),s=Number(a);if(!Number.isInteger(d)||!Number.isInteger(o)||!Number.isInteger(r)||!Number.isInteger(s))return[];let c=new Date(d,o-1,1),f=new Date(r,s-1,1);if(c.getTime()>f.getTime())return[];let h=[],p=new Date(c);for(;p.getTime()<=f.getTime();){let[e,t]=nY.default.yearMonth.create(p.getFullYear(),p.getMonth()+1);null===e&&h.push(t),p.setMonth(p.getMonth()+1)}return h}var nq=e.i(38797);let nQ=(0,nq.default)((0,t.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"AddOutlined"),nZ=(0,nq.default)((0,t.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"CheckOutlined");var nJ=e.i(17510);let n0=(0,nq.default)((0,t.jsx)("path",{d:"m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7z"}),"EastOutlined");var n1=e.i(84527),n2=e.i(74483),n6=e.i(82130);let n4=l.default.div.withConfig({componentId:"zh__sc-422803e4-0"})`
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
`,n5=l.default.div.withConfig({componentId:"zh__sc-422803e4-1"})`
  padding: 16px;
  border: 1px dashed #d1d5db;
  border-radius: 10px;

  font-size: 14px;
  color: #6b7280;
`,n3=l.default.div.withConfig({componentId:"zh__sc-422803e4-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,n9=l.default.div.withConfig({componentId:"zh__sc-422803e4-3"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  min-height: 40px;
`,n8=l.default.div.withConfig({componentId:"zh__sc-422803e4-4"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: space-between;

  min-width: 0;
  min-height: 40px;
`,n7=l.default.h3.withConfig({componentId:"zh__sc-422803e4-5"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #101828;
`,ie=l.default.div.withConfig({componentId:"zh__sc-422803e4-6"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,it=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-422803e4-7"})`
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
`;let ii=l.default.span.withConfig({componentId:"zh__sc-422803e4-9"})`
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
`,il=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-422803e4-10"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,ia=(0,l.default)(o.default.Input.Phone).withConfig({componentId:"zh__sc-422803e4-11"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,id=(0,l.default)(o.default.Input.Contact).withConfig({componentId:"zh__sc-422803e4-12"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,io=(0,l.default)(o.default.Input.PostCode).withConfig({componentId:"zh__sc-422803e4-13"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,ir=(0,l.default)(o.default.Input.ResidentRegistrationNumber).withConfig({componentId:"zh__sc-422803e4-14"})`
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
`;let is=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-422803e4-16"})`
  display: flex;
  gap: 8px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,ic=l.default.div.withConfig({componentId:"zh__sc-422803e4-17"})`
  position: fixed;
  z-index: 1000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 35%);
`,ih=l.default.div.withConfig({componentId:"zh__sc-422803e4-18"})`
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
`,iu=l.default.h2.withConfig({componentId:"zh__sc-422803e4-20"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,ix=l.default.p.withConfig({componentId:"zh__sc-422803e4-21"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
`,ig=l.default.div.withConfig({componentId:"zh__sc-422803e4-22"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,im=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-422803e4-23"})`
  height: 36px;
  padding: 8px 16px;
`,ib=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-422803e4-24"})`
  height: 36px;
  padding: 8px 16px;
`,ij=(0,n.observer)(function({guardianList:e,selectedGuardianId:n,onAddGuardian:l,onUpdateGuardian:a}){let d=e.length>0,[r,s]=(0,i.useState)(!1),[c,f]=(0,i.useState)(!1),[h,p]=(0,i.useState)(!1),[u,x]=(0,i.useState)(!1),[g,m]=(0,i.useState)(""),[b,j]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),[_,w]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),y=null!==n&&e.some(e=>e.id===n)?n:null,v=(0,i.useMemo)(()=>{if(null===y)return e;let t=e.find(e=>e.id===y);return t?[t,...e.filter(e=>e.id!==y)]:e},[y,e]),C=()=>{j({name:"",relation:"",phone:"",address:""}),w({name:"",relation:"",phone:"",address:""}),m("")},I=()=>{s(!1),f(!1),p(!1),C()},z=(e,t)=>{j(n=>({...n,[e]:t})),w(t=>({...t,[e]:""})),m("")},T=async()=>{x(!0);let e={name:b.name,relation:b.relation,phone:b.phone,address:b.address},t=c&&null!==y?await a(y,e):await l(e);(x(!1),p(!1),null===t)?m("보호자 정보를 저장하지 못했습니다. 잠시 후 다시 시도해 주세요."):I()},E=r?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(iN,{onClick:I,children:(0,t.jsxs)(iM,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(iF,{children:[(0,t.jsx)(iB,{}),(0,t.jsx)(iU,{children:c?"보호자 정보 수정":"신규 보호자 추가"}),(0,t.jsx)(o.default.Button.Outlined,{type:"button",style:{width:56,height:36,padding:8},onClick:I,children:(0,t.jsx)(nJ.default,{sx:{fontSize:20}})})]}),(0,t.jsx)(iY,{}),(0,t.jsx)(iV,{children:(0,t.jsxs)(iW,{children:[(0,t.jsxs)(iH,{children:[(0,t.jsxs)(iK,{children:[(0,t.jsx)(iX,{children:"성명"}),(0,t.jsx)(iq,{type:"text",placeholder:"보호자 성명을 입력하세요.",value:b.name,onChange:e=>z("name",e.target.value),$hasError:""!==_.name}),(0,t.jsx)(iJ,{children:_.name})]}),(0,t.jsxs)(iK,{children:[(0,t.jsx)(iX,{children:"이용자와의 관계"}),(0,t.jsx)(iq,{type:"text",placeholder:"예: 자녀(딸), 자녀(아들), 자녀(며느리)",value:b.relation,onChange:e=>z("relation",e.target.value),$hasError:""!==_.relation}),(0,t.jsx)(iJ,{children:_.relation})]}),(0,t.jsxs)(iK,{children:[(0,t.jsx)(iX,{children:"휴대폰"}),(0,t.jsx)(iQ,{placeholder:"휴대폰을 입력해주세요.",value:b.phone,onChange:e=>z("phone",e),$hasError:""!==_.phone}),(0,t.jsx)(iJ,{children:_.phone})]}),(0,t.jsxs)(iK,{children:[(0,t.jsx)(iX,{children:"주소"}),(0,t.jsx)(iZ,{rows:3,placeholder:"보호자 주소를 입력하세요.",value:b.address,onChange:e=>z("address",e.target.value),$hasError:""!==_.address}),(0,t.jsx)(iJ,{children:_.address})]})]}),(0,t.jsxs)(iG,{children:[(0,t.jsx)(i0,{children:g}),(0,t.jsxs)(o.default.Button.Filled.Primary,{type:"button",style:{display:"flex",gap:4,alignItems:"center",height:36,padding:"8px 16px"},onClick:()=>{if(u)return;let e={name:""===b.name.trim()?"필수 입력값입니다.":"",relation:"",phone:""===b.phone.trim()||n6.default.is(b.phone)?"":"유효한 휴대폰 형식이 아닙니다.",address:""};w(e),Object.values(e).some(e=>""!==e)||p(!0)},children:[(0,t.jsx)(nZ,{sx:{fontSize:20}}),c?"수정 완료":"추가 완료"]})]})]})})]})}),h?(0,t.jsx)(i1,{children:(0,t.jsxs)(i2,{children:[(0,t.jsx)(i6,{children:(0,t.jsx)(i4,{children:c?"보호자 정보를 수정할까요?":"신규 보호자 정보를 추가할까요?"})}),(0,t.jsxs)(i5,{children:[(0,t.jsx)(o.default.Button.Outlined,{type:"button",style:{width:91,height:36,padding:"8px 16px"},disabled:u,onClick:()=>p(!1),children:"취소하기"}),(0,t.jsx)(o.default.Button.Filled.Primary,{type:"button",style:{width:91,height:36,padding:"8px 16px"},disabled:u,onClick:()=>void T(),children:u?"저장 중...":c?"수정하기":"추가하기"})]})]})}):null]}):null;return(0,t.jsxs)(n3,{children:[(0,t.jsx)(n9,{children:(0,t.jsxs)(n8,{children:[(0,t.jsx)(n7,{children:"보호자 정보"}),(0,t.jsxs)(ie,{children:[(0,t.jsxs)(it,{type:"button",disabled:null===y,onClick:()=>{let t=e.find(e=>e.id===y);t&&(f(!0),j({name:t.name,relation:t.relationship??"",phone:t.phoneNumber??"",address:t.address??""}),w({name:"",relation:"",phone:"",address:""}),m(""),s(!0))},children:[(0,t.jsx)(n1.default,{sx:{fontSize:20}}),"수정하기"]}),(0,t.jsxs)(it,{type:"button",onClick:()=>{f(!1),C(),s(!0)},children:[(0,t.jsx)(nQ,{sx:{fontSize:20}}),"추가하기"]})]})]})}),d?(0,t.jsx)(i_,{children:v.map(e=>{let n=e.id===y;return(0,t.jsxs)(iw,{$isSelected:n,children:[(0,t.jsxs)(iy,{children:[(0,t.jsx)(iv,{children:e.name}),(0,t.jsx)(iC,{children:null===e.relationship||""===e.relationship?"이용자와의 관계: -":`이용자와의 관계: ${e.relationship}`})]}),(0,t.jsxs)(iI,{children:[(0,t.jsxs)(iz,{children:[(0,t.jsx)(iT,{children:"주소"}),(0,t.jsx)(iE,{}),(0,t.jsx)(ik,{children:e.address??"-"})]}),(0,t.jsxs)(iz,{children:[(0,t.jsx)(iT,{children:"휴대폰"}),(0,t.jsx)(iE,{}),(0,t.jsx)(iS,{children:e.phoneNumber??"-"})]}),(0,t.jsxs)(iz,{children:[(0,t.jsx)(iT,{children:"이메일"}),(0,t.jsx)(iE,{}),(0,t.jsx)(iS,{children:"-"})]})]}),(0,t.jsx)(iD,{children:n?(0,t.jsx)(iA,{children:"지금 선택됨"}):(0,t.jsxs)(iL,{type:"button",disabled:!0,children:["선택",(0,t.jsx)(n0,{sx:{fontSize:16}})]})})]},e.id)})}):(0,t.jsxs)(i$,{children:[(0,t.jsx)(n2.default,{sx:{fontSize:24,color:"#494F53"}}),(0,t.jsxs)(iR,{children:[(0,t.jsx)(iO,{children:"등록된 보호자 정보가 없습니다."}),(0,t.jsx)(iP,{children:"보호자 정보 등록이 필요한 경우 [+추가하기] 버튼을 클릭하고 등록할 수 있습니다."})]})]}),E]})}),i_=l.default.div.withConfig({componentId:"zh__sc-b1996503-0"})`
  overflow: auto hidden;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;

  width: 100%;
`,iw=l.default.div.withConfig({componentId:"zh__sc-b1996503-1"})`
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
`,iy=l.default.div.withConfig({componentId:"zh__sc-b1996503-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  width: 100%;
`,iv=l.default.div.withConfig({componentId:"zh__sc-b1996503-3"})`
  flex-shrink: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,iC=l.default.div.withConfig({componentId:"zh__sc-b1996503-4"})`
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
`,iI=l.default.div.withConfig({componentId:"zh__sc-b1996503-5"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 100%;
  padding-bottom: 36px;
`,iz=l.default.div.withConfig({componentId:"zh__sc-b1996503-6"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
`,iT=l.default.span.withConfig({componentId:"zh__sc-b1996503-7"})`
  width: 52px;
  min-width: 52px;

  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
`,iE=l.default.span.withConfig({componentId:"zh__sc-b1996503-8"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,iS=l.default.span.withConfig({componentId:"zh__sc-b1996503-9"})`
  min-width: 0;

  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
  overflow-wrap: anywhere;
`,ik=(0,l.default)(iS).withConfig({componentId:"zh__sc-b1996503-10"})`
  color: #45464e;
`,iD=l.default.div.withConfig({componentId:"zh__sc-b1996503-11"})`
  position: absolute;
  right: 16px;
  bottom: 16px;

  display: flex;
  justify-content: flex-end;
`,iA=l.default.div.withConfig({componentId:"zh__sc-b1996503-12"})`
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
`,iL=l.default.button.withConfig({componentId:"zh__sc-b1996503-13"})`
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
`,i$=l.default.div.withConfig({componentId:"zh__sc-b1996503-14"})`
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
`,iR=l.default.div.withConfig({componentId:"zh__sc-b1996503-15"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,iO=l.default.div.withConfig({componentId:"zh__sc-b1996503-16"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
`,iP=l.default.div.withConfig({componentId:"zh__sc-b1996503-17"})`
  font-size: 14px;
  line-height: 20px;
  color: #494f53;
  text-align: center;
`,iN=l.default.div.withConfig({componentId:"zh__sc-b1996503-18"})`
  position: absolute;
  z-index: 20;
  inset: 0;

  display: flex;
  justify-content: flex-end;

  background: rgb(17 24 39 / 28%);
`,iM=l.default.div.withConfig({componentId:"zh__sc-b1996503-19"})`
  display: flex;
  flex-direction: column;

  width: min(417px, 100%);
  height: 100%;

  background: #fff;
  box-shadow: -2px 9px 16px rgb(0 0 0 / 16%);
`,iF=l.default.div.withConfig({componentId:"zh__sc-b1996503-20"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`,iB=l.default.div.withConfig({componentId:"zh__sc-b1996503-21"})`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
`,iU=l.default.div.withConfig({componentId:"zh__sc-b1996503-22"})`
  flex: 1;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
  text-align: center;
`,iY=l.default.div.withConfig({componentId:"zh__sc-b1996503-23"})`
  height: 1px;
  background: #e5e7eb;
`,iV=l.default.div.withConfig({componentId:"zh__sc-b1996503-24"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 16px;
`,iW=l.default.div.withConfig({componentId:"zh__sc-b1996503-25"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,iH=l.default.div.withConfig({componentId:"zh__sc-b1996503-26"})`
  display: flex;
  flex-direction: column;
`,iG=l.default.div.withConfig({componentId:"zh__sc-b1996503-27"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,iK=l.default.div.withConfig({componentId:"zh__sc-b1996503-28"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,iX=l.default.label.withConfig({componentId:"zh__sc-b1996503-29"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;
`,iq=l.default.input.withConfig({componentId:"zh__sc-b1996503-30"})`
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
`,iQ=(0,l.default)(o.default.Input.Phone).withConfig({componentId:"zh__sc-b1996503-31"})`
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
`,iJ=l.default.div.withConfig({componentId:"zh__sc-b1996503-33"})`
  min-height: 20px;
  font-size: 12px;
  line-height: 20px;
  color: #ef4444;
`,i0=l.default.div.withConfig({componentId:"zh__sc-b1996503-34"})`
  min-height: 20px;
  font-size: 12px;
  line-height: 20px;
  color: #ef4444;
`,i1=l.default.div.withConfig({componentId:"zh__sc-b1996503-35"})`
  position: absolute;
  z-index: 30;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 12%);
`,i2=l.default.div.withConfig({componentId:"zh__sc-b1996503-36"})`
  display: flex;
  flex-direction: column;
  gap: 48px;

  width: 501px;
  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 2px rgb(0 0 0 / 10%);
`,i6=l.default.div.withConfig({componentId:"zh__sc-b1996503-37"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,i4=l.default.div.withConfig({componentId:"zh__sc-b1996503-38"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,i5=l.default.div.withConfig({componentId:"zh__sc-b1996503-39"})`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;var i3=e.i(84673),i9=e.i(76207),i8=e.i(54304);function i7(e,t){return void 0!==e&&Object.prototype.hasOwnProperty.call(e,t)}let le=()=>a.default.ui.serviceRegion.codes,lt=["PHYSICAL_ACTIVITY_SUPPORT","HOUSEKEEPING_SUPPORT","SOCIAL_ACTIVITY_SUPPORT","OTHER"],ln=["MALE","FEMALE"],li=["TWENTIES_OR_YONGER","THIRTIES","FORTIES","FIFTIES","SIXTIES","SEVENTIES_OR_OLDER"],ll=["MON","TUE","WED","THU","FRI","SAT","SUN"],la=[["ALONE","독거"],["COUPLE","부부"],["SINGLE_PARENT","한부모"],["OTHER","기타"]],ld=[["ministry","보건복지부"],["metropolitan","광역지자체"],["local","기초지자체"],["other","기타"]],lo=(0,n.observer)(function(){let e=a.default.client.info.byClient,[n,l]=(0,i.useState)({}),[d,r]=(0,i.useState)(""),s=(0,i.useRef)(null),c=e.isServiceConditionEditing,f=e.selectedClient,h=e.selectedServiceConditionDraft,p=e.selectedContract?.serviceType??e.currentServiceType,u=h?.desiredServiceTimes??f?.desiredServiceTimes.filter(({serviceType:e})=>e===p).flatMap(({dayOfWeek:e,hour:t})=>i9.default.some(e=>e===t)?[{dayOfWeek:e,hour:t}]:[])??[],x=h?.desiredRegions??f?.desiredRegions??[],g=h?.desiredCareTypes??f?.desiredCareTypes.filter(({serviceType:e})=>e===p).map(({careType:e,detail:t})=>({careType:e,...null===t?{}:{detail:t}}))??[],m=void 0!==h&&Object.prototype.hasOwnProperty.call(h,"desiredServiceWorkerGender")?h.desiredServiceWorkerGender:f?.desiredServiceWorkerGender,b=h?.desiredAgeRanges??f?.desiredAgeRanges??[],j=h?.workplace??f?.workplace??"",_=h?.schoolName??f?.schoolName??"",w=i7(h,"schoolStartTime")?h?.schoolStartTime??"":f?.schoolStartTime??"",y=i7(h,"schoolEndTime")?h?.schoolEndTime??"":f?.schoolEndTime??"",v=h?.schoolDays??f?.schoolDays??[],C=h?.careCenterName??f?.careCenterName??"",I=i7(h,"careCenterStartTime")?h?.careCenterStartTime??"":f?.careCenterStartTime??"",z=i7(h,"careCenterEndTime")?h?.careCenterEndTime??"":f?.careCenterEndTime??"",T=h?.careCenterDays??f?.careCenterDays??[],E=i7(h,"primaryDisabilityName")?h?.primaryDisabilityName??"":f?.primaryDisabilityName??"",S=i7(h,"primaryDisabilityGrade")?h?.primaryDisabilityGrade??"":f?.primaryDisabilityGrade??"",k=i7(h,"primaryDisabilitySeverity")?h?.primaryDisabilitySeverity??"":f?.primaryDisabilitySeverity??"",D=i7(h,"secondaryDisabilityName")?h?.secondaryDisabilityName??"":f?.secondaryDisabilityName??"",A=i7(h,"secondaryDisabilityGrade")?h?.secondaryDisabilityGrade??"":f?.secondaryDisabilityGrade??"",L=i7(h,"secondaryDisabilitySeverity")?h?.secondaryDisabilitySeverity??"":f?.secondaryDisabilitySeverity??"",$=h?.chronicDiseaseNames??f?.chronicDiseaseNames??"",R=h?.medicationInfo??f?.medicationInfo??"",O=h?.hasTraumaDisability??f?.hasTraumaDisability??void 0,P=h?.communicationStatus??f?.communicationStatus,N=i7(h,"communicationStatusDetail")?h?.communicationStatusDetail??"":f?.communicationStatusDetail??"",M=h?.hasWheelchair??f?.hasWheelchair,F=h?.isMarried??f?.isMarried,B=h?.familyStatus??f?.familyStatus,U=i7(h,"familyStatusDetail")?h?.familyStatusDetail??"":f?.familyStatusDetail??"",Y={ministry:i7(h,"ministryDeterminedHours")?h?.ministryDeterminedHours:f?.ministryDeterminedHours,metropolitan:i7(h,"metroDeterminedHours")?h?.metroDeterminedHours:f?.metroDeterminedHours,local:i7(h,"basicDeterminedHours")?h?.basicDeterminedHours:f?.basicDeterminedHours,other:i7(h,"otherDeterminedHours")?h?.otherDeterminedHours:f?.otherDeterminedHours},V=h?.usageExperience??f?.usageExperience??"",W=h?.dailyLivingNotes??f?.dailyLivingNotes??"",H=h?.comprehensiveOpinion??f?.comprehensiveOpinion??"",G=le().every(e=>x.includes(e)),K=lt.every(e=>g.some(t=>t.careType===e)),X=li.every(e=>b.includes(e)),q=async()=>{let t=Object.fromEntries(Object.entries({schoolStartTime:w,schoolEndTime:y,careCenterStartTime:I,careCenterEndTime:z}).flatMap(([e,t])=>""===t||i8.default.is(t)?[]:[[e,"유효한 시간 형식이 아닙니다."]]));l(t),Object.keys(t).length>0||await e.saveSelectedServiceConditionDraft()};(0,i.useEffect)(()=>{if(0===Object.keys(n).length)return;let e=window.requestAnimationFrame(()=>{document.querySelector("[data-service-condition-field-error]")?.scrollIntoView({block:"center",behavior:"smooth"})});return()=>window.cancelAnimationFrame(e)},[n]);let Q=(t,n)=>{l(e=>({...e,[t]:""})),e.updateSelectedServiceConditionDraftField(t,n)};return(0,i.useEffect)(()=>{if(!c)return;let t=t=>{let n=t.target;n instanceof Node&&null!==s.current&&s.current.contains(n)||n instanceof Element&&(null!==n.closest('[role="listbox"]')||null!==n.closest('[role="option"]')||null!==n.closest("[data-radix-select-viewport]")||null!==n.closest("[data-radix-popper-content-wrapper]"))||e.cancelServiceConditionEdit()};return document.addEventListener("pointerdown",t),()=>{document.removeEventListener("pointerdown",t)}},[e,c]),(0,t.jsxs)(n3,{ref:s,children:[(0,t.jsxs)(ls,{children:[(0,t.jsxs)(lf,{children:[(0,t.jsx)(lc,{children:"서비스 희망 시간"}),c?(0,t.jsx)(ii,{children:"수정 진행중"}):null]}),(0,t.jsxs)(lh,{children:[(0,t.jsx)(tc.default,{sx:{fontSize:20}}),(0,t.jsx)(lp,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]}),c?(0,t.jsxs)(ie,{children:[(0,t.jsxs)(it,{type:"button",onClick:e.cancelServiceConditionEdit,children:[(0,t.jsx)(i3.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(it,{type:"button",onClick:()=>void q(),children:[(0,t.jsx)(nZ,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(it,{type:"button",onClick:e.startServiceConditionEdit,children:[(0,t.jsx)(n1.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsx)(lu,{value:u,disabled:!c,readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftTimes(t.target.value)}),(0,t.jsxs)(lx,{children:[(0,t.jsx)(lg,{children:"희망 서비스 시간"}),(0,t.jsxs)(lm,{children:[(0,t.jsx)(lj,{children:"총"}),(0,t.jsx)(lb,{value:d,disabled:!c,placeholder:"00",inputMode:"numeric",maxLength:2,onChange:e=>{let t=e.target.value.replace(/\D/g,"");r(""===t?"":String(Math.min(Number(t),99)))}}),(0,t.jsx)(lj,{children:"시간"})]})]}),(0,t.jsxs)(lr,{children:[(0,t.jsx)(l_,{children:"서비스 가능 지역 (복수 선택 가능)"}),(0,t.jsxs)(lw,{children:[(0,t.jsxs)(ly,{children:[(0,t.jsx)(lI,{disabled:!c,checked:G,onChange:()=>e.updateSelectedServiceConditionDraftRegions(G?[]:le())}),(0,t.jsx)(lT,{children:"전체 선택"})]}),le().map(n=>(0,t.jsxs)(ly,{children:[(0,t.jsx)(lI,{disabled:!c,checked:x.includes(n),onChange:()=>{let t=x.includes(n)?x.filter(e=>e!==n):[...x,n];e.updateSelectedServiceConditionDraftRegions(t)}}),(0,t.jsx)(lT,{children:a.default.ui.serviceRegion.label(n)})]},n))]})]}),"DISABILITY_ACTIVITY_SUPPORT"===p?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(lr,{children:[(0,t.jsx)(l_,{children:"희망 활동 내용 (복수 선택 가능)"}),(0,t.jsxs)(lw,{children:[(0,t.jsxs)(ly,{children:[(0,t.jsx)(lI,{disabled:!c,checked:K,onChange:()=>e.updateSelectedServiceConditionDraftCareTypes(K?[]:lt.map(e=>g.find(t=>t.careType===e)??{careType:e}))}),(0,t.jsx)(lT,{children:"전체 선택"})]}),lt.map(n=>{let i=g.find(e=>e.careType===n);return(0,t.jsxs)(lv,{children:[(0,t.jsxs)(ly,{children:[(0,t.jsx)(lI,{disabled:!c,checked:void 0!==i,onChange:()=>{let t=void 0===i?[...g,{careType:n}]:g.filter(e=>e.careType!==n);e.updateSelectedServiceConditionDraftCareTypes(t)}}),(0,t.jsx)(lT,{children:"PHYSICAL_ACTIVITY_SUPPORT"===n?"신체 활동":tu.default[n].label.replace("활동"," 활동")})]}),(0,t.jsx)(lC,{value:i?.detail??"",placeholder:"관련 내용을 입력해주세요.",readOnly:!c||void 0===i,onChange:t=>{void 0!==i&&e.updateSelectedServiceConditionDraftCareTypes(g.map(e=>e.careType===n?{...e,detail:t.target.value}:e))},style:lF})]},n)})]})]}),(0,t.jsxs)(lr,{children:[(0,t.jsx)(l_,{children:"제공인력 희망 성별"}),(0,t.jsxs)(lw,{children:[(0,t.jsxs)(ly,{children:[(0,t.jsx)(lz,{disabled:!c,checked:null==m,onChange:()=>e.updateSelectedServiceConditionDraftGender(null)}),(0,t.jsx)(lT,{children:"전체"})]}),ln.map(n=>(0,t.jsxs)(ly,{children:[(0,t.jsx)(lz,{disabled:!c,checked:m===n,onChange:()=>e.updateSelectedServiceConditionDraftGender(n)}),(0,t.jsx)(lT,{children:tp.default[n].label})]},n))]})]}),(0,t.jsxs)(lr,{children:[(0,t.jsx)(l_,{children:"제공인력 희망 연령 (복수 선택 가능)"}),(0,t.jsxs)(lw,{children:[(0,t.jsxs)(ly,{children:[(0,t.jsx)(lI,{disabled:!c,checked:X,onChange:()=>e.updateSelectedServiceConditionDraftAgeRanges(X?[]:li)}),(0,t.jsx)(lT,{children:"전체 선택"})]}),li.map(n=>(0,t.jsxs)(ly,{children:[(0,t.jsx)(lI,{disabled:!c,checked:b.includes(n),onChange:()=>e.updateSelectedServiceConditionDraftAgeRanges(b.includes(n)?b.filter(e=>e!==n):[...b,n])}),(0,t.jsx)(lT,{children:"TWENTIES_OR_YONGER"===n||"SEVENTIES_OR_OLDER"===n?th.default[n].label.replace(" 이하","").replace(" 이상",""):th.default[n].label})]},n))]})]}),(0,t.jsx)(lE,{children:"직장 및 학교"}),(0,t.jsx)(lS,{children:(0,t.jsxs)(lk,{children:[(0,t.jsx)(lD,{children:"직장"}),(0,t.jsx)(o.default.Input.Text,{value:j,placeholder:"직장명을 입력하세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("workplace",t.target.value),style:lF})]})}),(0,t.jsxs)(lS,{children:[(0,t.jsxs)(lk,{$width:395,children:[(0,t.jsx)(lD,{children:"학교명"}),(0,t.jsx)(o.default.Input.Text,{value:_,placeholder:"학교명을 입력하세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("schoolName",t.target.value),style:lF})]}),(0,t.jsxs)(lk,{$width:273,"data-service-condition-field-error":void 0!==n.schoolStartTime&&""!==n.schoolStartTime||void 0,children:[(0,t.jsx)(lD,{children:"시작 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:w,placeholder:"00:00",readOnly:!c,onChange:e=>Q("schoolStartTime",e),style:{...lF,...void 0!==n.schoolStartTime&&""!==n.schoolStartTime?lB:{}}}),(0,t.jsx)(lU,{children:n.schoolStartTime})]}),(0,t.jsx)(lL,{children:"~"}),(0,t.jsxs)(lk,{$width:273,"data-service-condition-field-error":void 0!==n.schoolEndTime&&""!==n.schoolEndTime||void 0,children:[(0,t.jsx)(lD,{children:"종료 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:y,placeholder:"00:00",readOnly:!c,onChange:e=>Q("schoolEndTime",e),style:{...lF,...void 0!==n.schoolEndTime&&""!==n.schoolEndTime?lB:{}}}),(0,t.jsx)(lU,{children:n.schoolEndTime})]})]}),(0,t.jsxs)(l$,{children:[(0,t.jsx)(lD,{children:"등교 요일"}),(0,t.jsx)(lw,{children:ll.map(n=>(0,t.jsxs)(ly,{children:[(0,t.jsx)(lI,{disabled:!c,checked:v.includes(n),onChange:()=>e.updateSelectedServiceConditionDraftField("schoolDays",v.includes(n)?v.filter(e=>e!==n):[...v,n])}),(0,t.jsx)(lT,{children:tg.default[n].label})]},n))})]}),(0,t.jsx)(lE,{children:"주단기보호센터"}),(0,t.jsxs)(lS,{children:[(0,t.jsxs)(lk,{$width:395,children:[(0,t.jsx)(lD,{children:"주단기보호센터명"}),(0,t.jsx)(o.default.Input.Text,{value:C,placeholder:"센터명을 입력하세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("careCenterName",t.target.value),style:lF})]}),(0,t.jsxs)(lk,{$width:273,"data-service-condition-field-error":void 0!==n.careCenterStartTime&&""!==n.careCenterStartTime||void 0,children:[(0,t.jsx)(lD,{children:"시작 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:I,placeholder:"00:00",readOnly:!c,onChange:e=>Q("careCenterStartTime",e),style:{...lF,...void 0!==n.careCenterStartTime&&""!==n.careCenterStartTime?lB:{}}}),(0,t.jsx)(lU,{children:n.careCenterStartTime})]}),(0,t.jsx)(lL,{children:"~"}),(0,t.jsxs)(lk,{$width:273,"data-service-condition-field-error":void 0!==n.careCenterEndTime&&""!==n.careCenterEndTime||void 0,children:[(0,t.jsx)(lD,{children:"종료 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:z,placeholder:"00:00",readOnly:!c,onChange:e=>Q("careCenterEndTime",e),style:{...lF,...void 0!==n.careCenterEndTime&&""!==n.careCenterEndTime?lB:{}}}),(0,t.jsx)(lU,{children:n.careCenterEndTime})]})]}),(0,t.jsxs)(l$,{children:[(0,t.jsx)(lD,{children:"등원 요일"}),(0,t.jsx)(lw,{children:ll.map(n=>(0,t.jsxs)(ly,{children:[(0,t.jsx)(lI,{disabled:!c,checked:T.includes(n),onChange:()=>e.updateSelectedServiceConditionDraftField("careCenterDays",T.includes(n)?T.filter(e=>e!==n):[...T,n])}),(0,t.jsx)(lT,{children:tg.default[n].label})]},n))})]}),(0,t.jsx)(lE,{children:"판정시간"}),(0,t.jsx)(lS,{children:ld.map(([n,i])=>(0,t.jsxs)(lk,{children:[(0,t.jsx)(lD,{children:i}),(0,t.jsxs)(lR,{children:[(0,t.jsx)(o.default.Input.Text,{value:Y[n]??"",placeholder:"00",inputMode:"numeric",readOnly:!c,onChange:t=>{let i=t.target.value.replace(/\D/g,"");e.updateSelectedServiceConditionDraftField({ministry:"ministryDeterminedHours",metropolitan:"metroDeterminedHours",local:"basicDeterminedHours",other:"otherDeterminedHours"}[n],""===i?void 0:Number(i))},style:{...lF,width:140,textAlign:"center"}}),(0,t.jsx)(lO,{children:"시간"})]})]},n))}),(0,t.jsxs)(lS,{children:[(0,t.jsxs)(lk,{children:[(0,t.jsx)(lD,{children:"주장애명"}),(0,t.jsxs)(lA,{$isEmptySelected:""===E,value:E||tf.default.SELECT_EMPTY_VALUE,disabled:!c,onChange:t=>{e.updateSelectedServiceConditionDraftField("primaryDisabilityName",t.target.value===tf.default.SELECT_EMPTY_VALUE?"":t.target.value)},style:lF,children:[(0,t.jsx)("option",{value:tf.default.SELECT_EMPTY_VALUE,"data-trigger-label":"주장애명을 선택해주세요.",children:"선택안함"}),Object.entries(tb.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]}),(0,t.jsxs)(lk,{children:[(0,t.jsx)(lD,{children:"장애급수"}),(0,t.jsxs)(lA,{$isEmptySelected:""===S,value:S||tf.default.SELECT_EMPTY_VALUE,disabled:!c,onChange:t=>{e.updateSelectedServiceConditionDraftField("primaryDisabilityGrade",t.target.value===tf.default.SELECT_EMPTY_VALUE?"":t.target.value)},style:lF,children:[(0,t.jsx)("option",{value:tf.default.SELECT_EMPTY_VALUE,"data-trigger-label":"장애급수를 선택해주세요.",children:"선택안함"}),Object.entries(tm.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]}),(0,t.jsxs)(lk,{children:[(0,t.jsx)(lD,{children:"주장애 장애정도"}),(0,t.jsxs)(lA,{$isEmptySelected:""===k,value:k||tf.default.SELECT_EMPTY_VALUE,disabled:!c,onChange:t=>{e.updateSelectedServiceConditionDraftField("primaryDisabilitySeverity",t.target.value===tf.default.SELECT_EMPTY_VALUE?"":t.target.value)},style:lF,children:[(0,t.jsx)("option",{value:tf.default.SELECT_EMPTY_VALUE,"data-trigger-label":"주장애 장애정도를 선택해주세요.",children:"선택안함"}),Object.entries(tj.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]})]}),(0,t.jsxs)(lS,{children:[(0,t.jsxs)(lk,{children:[(0,t.jsx)(lD,{children:"부장애명"}),(0,t.jsxs)(lA,{$isEmptySelected:""===D,value:D||tf.default.SELECT_EMPTY_VALUE,disabled:!c,onChange:t=>{e.updateSelectedServiceConditionDraftField("secondaryDisabilityName",t.target.value===tf.default.SELECT_EMPTY_VALUE?"":t.target.value)},style:lF,children:[(0,t.jsx)("option",{value:tf.default.SELECT_EMPTY_VALUE,"data-trigger-label":"부장애명을 선택해주세요.",children:"선택안함"}),Object.entries(tb.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]}),(0,t.jsxs)(lk,{children:[(0,t.jsx)(lD,{children:"장애급수"}),(0,t.jsxs)(lA,{$isEmptySelected:""===A,value:A||tf.default.SELECT_EMPTY_VALUE,disabled:!c,onChange:t=>{e.updateSelectedServiceConditionDraftField("secondaryDisabilityGrade",t.target.value===tf.default.SELECT_EMPTY_VALUE?"":t.target.value)},style:lF,children:[(0,t.jsx)("option",{value:tf.default.SELECT_EMPTY_VALUE,"data-trigger-label":"장애급수를 선택해주세요.",children:"선택안함"}),Object.entries(tm.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]}),(0,t.jsxs)(lk,{children:[(0,t.jsx)(lD,{children:"부장애 장애정도"}),(0,t.jsxs)(lA,{$isEmptySelected:""===L,value:L||tf.default.SELECT_EMPTY_VALUE,disabled:!c,onChange:t=>{e.updateSelectedServiceConditionDraftField("secondaryDisabilitySeverity",t.target.value===tf.default.SELECT_EMPTY_VALUE?"":t.target.value)},style:lF,children:[(0,t.jsx)("option",{value:tf.default.SELECT_EMPTY_VALUE,"data-trigger-label":"부장애 장애정도를 선택해주세요.",children:"선택안함"}),Object.entries(tj.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]})]}),(0,t.jsxs)(lS,{children:[(0,t.jsxs)(lk,{$width:158,children:[(0,t.jsx)(lD,{children:"외상장애 여부"}),(0,t.jsxs)(lw,{children:[(0,t.jsxs)(ly,{children:[(0,t.jsx)(lz,{disabled:!c,checked:!1===O,onChange:()=>e.updateSelectedServiceConditionDraftField("hasTraumaDisability",!1)}),(0,t.jsx)(lT,{children:"미해당"})]}),(0,t.jsxs)(ly,{children:[(0,t.jsx)(lz,{disabled:!c,checked:!0===O,onChange:()=>e.updateSelectedServiceConditionDraftField("hasTraumaDisability",!0)}),(0,t.jsx)(lT,{children:"해당"})]})]})]}),(0,t.jsxs)(lk,{$width:443,children:[(0,t.jsx)(lD,{children:"의사소통"}),(0,t.jsxs)(lw,{children:[(0,t.jsxs)(ly,{children:[(0,t.jsx)(lz,{disabled:!c,checked:"POSSIBLE"===P,onChange:()=>{e.updateSelectedServiceConditionDraftField("communicationStatus","POSSIBLE"),e.updateSelectedServiceConditionDraftField("communicationStatusDetail","")}}),(0,t.jsx)(lT,{children:"가능"})]}),(0,t.jsxs)(ly,{children:[(0,t.jsx)(lz,{disabled:!c,checked:"IMPOSSIBLE"===P,onChange:()=>{e.updateSelectedServiceConditionDraftField("communicationStatus","IMPOSSIBLE"),e.updateSelectedServiceConditionDraftField("communicationStatusDetail","")}}),(0,t.jsx)(lT,{children:"불가능"})]}),(0,t.jsxs)(ly,{children:[(0,t.jsx)(lz,{disabled:!c,checked:"OTHER"===P,onChange:()=>e.updateSelectedServiceConditionDraftField("communicationStatus","OTHER")}),(0,t.jsx)(lT,{children:"기타"})]}),(0,t.jsx)(o.default.Input.Text,{value:N,placeholder:"관련 내용을 입력해주세요.",disabled:!c||"OTHER"!==P,onChange:t=>e.updateSelectedServiceConditionDraftField("communicationStatusDetail",t.target.value),style:{...lF,width:193}})]})]}),(0,t.jsxs)(lk,{$width:116,children:[(0,t.jsx)(lD,{children:"휠체어 유무"}),(0,t.jsxs)(lw,{children:[(0,t.jsxs)(ly,{children:[(0,t.jsx)(lz,{disabled:!c,checked:!0===M,onChange:()=>e.updateSelectedServiceConditionDraftField("hasWheelchair",!0)}),(0,t.jsx)(lT,{children:"유"})]}),(0,t.jsxs)(ly,{children:[(0,t.jsx)(lz,{disabled:!c,checked:!1===M,onChange:()=>e.updateSelectedServiceConditionDraftField("hasWheelchair",!1)}),(0,t.jsx)(lT,{children:"무"})]})]})]})]}),(0,t.jsxs)(lS,{children:[(0,t.jsxs)(lk,{$width:144,children:[(0,t.jsx)(lD,{children:"결혼여부"}),(0,t.jsxs)(lw,{children:[(0,t.jsxs)(ly,{children:[(0,t.jsx)(lz,{disabled:!c,checked:!1===F,onChange:()=>e.updateSelectedServiceConditionDraftField("isMarried",!1)}),(0,t.jsx)(lT,{children:"미혼"})]}),(0,t.jsxs)(ly,{children:[(0,t.jsx)(lz,{disabled:!c,checked:!0===F,onChange:()=>e.updateSelectedServiceConditionDraftField("isMarried",!0)}),(0,t.jsx)(lT,{children:"기혼"})]})]})]}),(0,t.jsxs)(lk,{$width:530,children:[(0,t.jsx)(lD,{children:"가족사항"}),(0,t.jsxs)(lw,{children:[la.map(([n,i])=>(0,t.jsxs)(ly,{children:[(0,t.jsx)(lz,{disabled:!c,checked:B===n,onChange:()=>{e.updateSelectedServiceConditionDraftField("familyStatus",n),"OTHER"!==n&&e.updateSelectedServiceConditionDraftField("familyStatusDetail","")}}),(0,t.jsx)(lT,{children:i})]},n)),(0,t.jsx)(o.default.Input.Text,{value:U,placeholder:"관련 내용을 입력해주세요.",disabled:!c||"OTHER"!==B,onChange:t=>e.updateSelectedServiceConditionDraftField("familyStatusDetail",t.target.value),style:{...lF,width:193}})]})]})]}),(0,t.jsx)(lS,{children:(0,t.jsxs)(lk,{children:[(0,t.jsx)(lD,{children:"보유질환명"}),(0,t.jsx)(o.default.Input.Text,{value:$,placeholder:"보유질환에 대해 입력해주세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("chronicDiseaseNames",t.target.value),style:lF})]})}),(0,t.jsx)(lS,{children:(0,t.jsxs)(lk,{children:[(0,t.jsx)(lD,{children:"투약정보"}),(0,t.jsx)(o.default.Input.Text,{value:R,placeholder:"투약정보를 입력해주세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("medicationInfo",t.target.value),style:lF})]})}),(0,t.jsx)(lS,{children:(0,t.jsxs)(lk,{children:[(0,t.jsx)(lD,{children:"(타기관) 이용경험"}),(0,t.jsx)(lP,{value:V,placeholder:"텍스트를 입력해주세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("usageExperience",t.target.value)})]})}),(0,t.jsx)(lS,{children:(0,t.jsxs)(lk,{children:[(0,t.jsx)(lD,{children:"특이사항 (장애특성 및 일상생활)"}),(0,t.jsx)(lM,{value:W,placeholder:"특이사항을 입력해주세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("dailyLivingNotes",t.target.value),style:lF})]})}),(0,t.jsx)(lS,{children:(0,t.jsxs)(lk,{children:[(0,t.jsx)(lD,{children:"종합소견"}),(0,t.jsx)(lN,{value:H,placeholder:"종합소견을 입력해주세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("comprehensiveOpinion",t.target.value)})]})})]}):null]})}),lr=l.default.div.withConfig({componentId:"zh__sc-9e650079-0"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,ls=l.default.div.withConfig({componentId:"zh__sc-9e650079-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;

  height: 30px;
`,lc=l.default.div.withConfig({componentId:"zh__sc-9e650079-2"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,lf=l.default.div.withConfig({componentId:"zh__sc-9e650079-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,lh=l.default.div.withConfig({componentId:"zh__sc-9e650079-4"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;

  color: #464c53;
`,lp=l.default.div.withConfig({componentId:"zh__sc-9e650079-5"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`,lu=(0,l.default)(o.default.Input.TimeSlider).withConfig({componentId:"zh__sc-9e650079-6"})`
  width: 800px;
`,lx=l.default.div.withConfig({componentId:"zh__sc-9e650079-7"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,lg=l.default.div.withConfig({componentId:"zh__sc-9e650079-8"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
  text-align: center;
`,lm=l.default.div.withConfig({componentId:"zh__sc-9e650079-9"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,lb=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-9e650079-10"})`
  width: 59px;
  height: 36px;
  text-align: center;
`,lj=l.default.div.withConfig({componentId:"zh__sc-9e650079-11"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,l_=l.default.div.withConfig({componentId:"zh__sc-9e650079-12"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,lw=l.default.div.withConfig({componentId:"zh__sc-9e650079-13"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;

  min-height: 36px;
`,ly=l.default.div.withConfig({componentId:"zh__sc-9e650079-14"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  min-height: 36px;
`,lv=l.default.div.withConfig({componentId:"zh__sc-9e650079-15"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
`,lC=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-9e650079-16"})`
  width: 220px;
`,lI=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-9e650079-17"})`
  width: 24px;
  height: 24px;
`,lz=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-9e650079-18"})``,lT=l.default.span.withConfig({componentId:"zh__sc-9e650079-19"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,lE=l.default.div.withConfig({componentId:"zh__sc-9e650079-20"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,lS=l.default.div.withConfig({componentId:"zh__sc-9e650079-21"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,lk=l.default.div.withConfig({componentId:"zh__sc-9e650079-22"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: flex-start;

  min-height: 59px;

  ${({$width:e})=>void 0!==e?`width: ${e}px;`:"flex: 1; min-width: 0;"}
`,lD=l.default.div.withConfig({componentId:"zh__sc-9e650079-23"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
  text-align: center;
`,lA=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-9e650079-24"})`
  width: 100%;
  min-width: 0;
  height: 36px;
  padding: 4px 16px;

  font-size: 16px;
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,lL=l.default.span.withConfig({componentId:"zh__sc-9e650079-25"})`
  flex: 0 0 auto;
  align-self: flex-start;
  padding-top: 28px;
`,l$=l.default.div.withConfig({componentId:"zh__sc-9e650079-26"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,lR=l.default.div.withConfig({componentId:"zh__sc-9e650079-27"})`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`,lO=l.default.span.withConfig({componentId:"zh__sc-9e650079-28"})`
  flex-shrink: 0;
  font-size: 16px;
  color: #000;
`,lP=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-9e650079-29"})`
  resize: vertical;

  width: 100%;
  min-height: 100px;
  padding: 12px 16px;

  font-size: 16px;
`,lN=(0,l.default)(lP).withConfig({componentId:"zh__sc-9e650079-30"})`
  min-height: 156px;
`,lM=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-9e650079-31"})`
  width: 100%;
  padding: 4px 16px;
  font-size: 16px;
`,lF={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16},lB={borderColor:"#ff4d4f",background:"#fff5f5"},lU=l.default.div.withConfig({componentId:"zh__sc-9e650079-32"})`
  margin-top: 4px;
  font-size: 12px;
  line-height: 18px;
  color: #e7000b;
`;var lY=e.i(24655);let lV=(0,nq.default)((0,t.jsx)("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z"}),"History");function lW({type:e,onClose:n}){let l=a.default.client.info.byClient.selectedClient,o=a.default.client.info.byClient.selectedClientId,[r,s]=(0,i.useState)([]),[c,f]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let t=!0;return(async()=>{var n,i,d,r,c;let h;if(null===o)return f(!1);if("address"===e){let e,r,c,h,[p,u]=await Promise.all([a.default.client.info.byClient.getClientChangeHistory(o,"address"),a.default.client.info.byClient.getClientChangeHistory(o,"addressDetail")]);if(!t||(f(!1),null!==p[0]||null!==u[0]||null===p[1]||null===u[1]))return;s((n=p[1],i=u[1],d=l?.createdAt??"",e=new Map,(r=(t,n)=>{t.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).forEach(({oldValue:t,newValue:i,createdAt:l},a)=>{if(0===a&&null!==t&&""!==t.trim()){let i=e.get(d)??{};i[n]=t.trim(),e.set(d,i)}let o=e.get(l)??{};o[n]=i?.trim()??"",e.set(l,o)})})(n,"address"),r(i,"addressDetail"),c="",h="",Array.from(e.entries()).sort(([e],[t])=>new Date(e).getTime()-new Date(t).getTime()).map(([e,t])=>(c=t.address??c,h=t.addressDetail??h,{address:c,addressDetail:h,changedAt:e,value:""})).filter(e=>""!==e.address||""!==e.addressDetail).reverse()));return}let[p,u]=await a.default.client.info.byClient.getClientChangeHistory(o,"phoneNumber");t&&(f(!1),null===p&&null!==u&&s((r=u,c=l?.createdAt??"",h=[],r.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).forEach(({oldValue:e,newValue:t,createdAt:n},i)=>{0===i&&null!==e&&""!==e.trim()&&h.push({address:"",addressDetail:"",changedAt:c,value:e.trim()}),null!==t&&""!==t.trim()&&h.push({address:"",addressDetail:"",changedAt:n,value:t.trim()})}),h.sort((e,t)=>new Date(t.changedAt).getTime()-new Date(e.changedAt).getTime()))))})(),()=>{t=!1}},[l?.createdAt,o,e]),(0,t.jsx)(d.default,{children:(0,t.jsxs)(lH,{children:[(0,t.jsxs)(lG,{children:[(0,t.jsxs)(lK,{children:["address"===e?"주소/상세주소":"휴대폰"," 변경 이력 보기"]}),(0,t.jsxs)(lX,{type:"button",onClick:n,children:[(0,t.jsx)(et.X,{size:14}),"닫기"]})]}),(0,t.jsx)(lq,{children:c?(0,t.jsx)(l6,{children:"변경 이력을 불러오는 중입니다."}):(0,t.jsxs)(lQ,{children:[(0,t.jsxs)(lZ,{$isAddress:"address"===e,children:[(0,t.jsx)(l2,{children:"address"===e?"주소":"휴대폰"}),"address"===e?(0,t.jsx)(l2,{children:"상세주소"}):null,(0,t.jsx)(l2,{children:"변경 일자"})]}),0===r.length?(0,t.jsx)(lJ,{$isAddress:"address"===e,children:(0,t.jsx)(l1,{children:"변경된 이력이 없습니다."})}):r.map(n=>{let i;return(0,t.jsxs)(lJ,{$isAddress:"address"===e,children:[(0,t.jsx)(l0,{children:"address"===e?n.address:n.value}),"address"===e?(0,t.jsx)(l0,{children:n.addressDetail}):null,(0,t.jsx)(l0,{children:Number.isNaN((i=new Date(n.changedAt)).getTime())?"YYYY-MM-DD":`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`})]},`${n.changedAt}-${n.address}-${n.addressDetail}-${n.value}`)})]})})]})})}let lH=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-0"})`
  display: flex;
  flex-direction: column;

  width: min(980px, calc(100vw - 32px));
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
`,lG=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
`,lK=l.default.h2.withConfig({componentId:"zh__sc-cc1c5725-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #101828;
`,lX=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-cc1c5725-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 34px;
  padding: 6px 16px;

  color: #4f39f6;
`,lq=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-4"})`
  border-radius: 0 0 8px 8px;
  background: #f9fafb;
`,lQ=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-5"})`
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
`,lJ=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-7"})`
  display: grid;
  grid-template-columns: ${({$isAddress:e})=>e?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))"};

  min-height: 92px;
  border-top: 1px solid #e5e7eb;

  background: white;
`,l0=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-8"})`
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
`,l1=(0,l.default)(l0).withConfig({componentId:"zh__sc-cc1c5725-9"})`
  grid-column: 1 / -1;
  min-height: 92px;
  color: #464c53;
`,l2=(0,l.default)(l0).withConfig({componentId:"zh__sc-cc1c5725-10"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 19px; /* 118.75% */
  color: #1c1d22;
  text-align: center;
`,l6=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-11"})`
  padding: 32px 16px;
  font-size: 14px;
  color: #667085;
  text-align: center;
`;function l4({values:e,errorFlags:n,errorMessages:l,isEditing:a,isDisabilityActivitySupport:d,onChangeField:r}){let[s,c]=(0,i.useState)(null),f=l?.mobileText??"",h=l?.contactText??"",p=l?.postCodeText??"",u=l?.residentRegistrationNumberText??"";return(0,t.jsxs)(l5,{children:[(0,t.jsxs)(l3,{children:[(0,t.jsxs)(l9,{children:["주민등록번호",(0,t.jsx)(ad,{value:e.residentRegistrationNumberText,style:n?.residentRegistrationNumberText===!0?as:void 0,readOnly:!a,onChange:e=>r("residentRegistrationNumberText",e)}),""!==u?(0,t.jsx)(at,{children:u}):null]}),(0,t.jsxs)(l9,{children:["성별",(0,t.jsx)(al,{value:e.genderText,readOnly:!0})]}),(0,t.jsxs)(l9,{children:[(0,t.jsxs)(l8,{children:[(0,t.jsx)(l7,{children:"휴대폰"}),(0,t.jsxs)(ae,{type:"button",disabled:a,onClick:()=>c("phone"),children:[(0,t.jsx)(lV,{sx:{fontSize:12}})," 변경 이력 보기"]})]}),(0,t.jsx)(aa,{value:e.mobileText,style:n?.mobileText===!0?as:void 0,readOnly:!a,onChange:e=>r("mobileText",e)}),""!==f?(0,t.jsx)(at,{children:f}):null]}),(0,t.jsxs)(l9,{children:["연락처",(0,t.jsx)(ao,{value:e.contactText,style:n?.contactText===!0?as:void 0,readOnly:!a,onChange:e=>r("contactText",e)}),""!==h?(0,t.jsx)(at,{children:h}):null]})]}),(0,t.jsxs)(l3,{children:[(0,t.jsxs)(l9,{children:[(0,t.jsxs)(l8,{children:[(0,t.jsx)(l7,{children:"주소"}),(0,t.jsxs)(ae,{type:"button",disabled:a,onClick:()=>c("address"),children:[(0,t.jsx)(lV,{sx:{fontSize:12}})," 변경 이력 보기"]})]}),(0,t.jsx)(al,{value:e.addressBaseText,readOnly:!a,onChange:e=>r("addressBaseText",e.target.value)})]}),(0,t.jsxs)(l9,{children:["상세주소",(0,t.jsx)(al,{value:e.addressDetailText,readOnly:!a,onChange:e=>r("addressDetailText",e.target.value)})]}),(0,t.jsxs)(l9,{children:["우편번호",(0,t.jsx)(ar,{value:e.postCodeText,style:n?.postCodeText===!0?as:void 0,readOnly:!a,onChange:e=>r("postCodeText",e)}),""!==p?(0,t.jsx)(at,{children:p}):null]})]}),(0,t.jsxs)(l3,{$hasVehicleGuidance:d,children:[(0,t.jsxs)(l9,{children:["특이사항(메모)",(0,t.jsx)(al,{value:e.memoText,readOnly:!a,onChange:e=>r("memoText",e.target.value)})]}),d?(0,t.jsxs)(l9,{children:["차량 유류비 안내",(0,t.jsxs)(an,{children:[(0,t.jsxs)(ai,{children:[(0,t.jsx)(o.default.Input.Radio,{disabled:!a,checked:!0===e.vehicleFuelCostGuided,onChange:()=>r("vehicleFuelCostGuided",!0)}),"완료"]}),(0,t.jsxs)(ai,{children:[(0,t.jsx)(o.default.Input.Radio,{disabled:!a,checked:!1===e.vehicleFuelCostGuided,onChange:()=>r("vehicleFuelCostGuided",!1)}),"미완료"]})]})]}):null]}),null!==s?(0,t.jsx)(lW,{type:s,onClose:()=>c(null)}):null]})}let l5=l.default.div.withConfig({componentId:"zh__sc-481703bc-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`,l3=l.default.div.withConfig({componentId:"zh__sc-481703bc-1"})`
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
`,l9=l.default.label.withConfig({componentId:"zh__sc-481703bc-2"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,l8=l.default.div.withConfig({componentId:"zh__sc-481703bc-3"})`
  display: flex;
  gap: 2px;
  align-items: center;
  min-height: 20px;
`,l7=l.default.span.withConfig({componentId:"zh__sc-481703bc-4"})`
  flex-shrink: 0;
`,ae=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-481703bc-5"})`
  gap: 2px;
  padding: 2px 4px;
  font-size: 12px;
  line-height: 1;
`,at=l.default.div.withConfig({componentId:"zh__sc-481703bc-6"})`
  margin-top: 2px;
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,an=l.default.div.withConfig({componentId:"zh__sc-481703bc-7"})`
  display: flex;
  gap: 16px;
  align-items: center;
  height: 36px;
`,ai=l.default.label.withConfig({componentId:"zh__sc-481703bc-8"})`
  display: inline-flex;
  gap: 4px;
  align-items: center;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
`,al=(0,l.default)(il).withConfig({componentId:"zh__sc-481703bc-9"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,aa=(0,l.default)(ia).withConfig({componentId:"zh__sc-481703bc-10"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,ad=(0,l.default)(ir).withConfig({componentId:"zh__sc-481703bc-11"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,ao=(0,l.default)(id).withConfig({componentId:"zh__sc-481703bc-12"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,ar=(0,l.default)(io).withConfig({componentId:"zh__sc-481703bc-13"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,as={borderColor:"#ff4d4f",background:"#fff5f5"};function ac({isOpen:e,onCancel:n,onConfirm:i,title:l="이용자 기본정보를 저장할까요?",description:a="수정된 정보는 연결된 서류의 자동입력 항목에 함께 반영됩니다.\n이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다.",cancelLabel:o="취소하기",confirmLabel:r="저장 및 모든 서류에 반영"}){return e?(0,t.jsx)(d.default,{children:(0,t.jsxs)(af,{children:[(0,t.jsxs)(ah,{children:[(0,t.jsx)(ap,{children:l}),(0,t.jsx)(au,{children:a})]}),(0,t.jsxs)(ax,{children:[(0,t.jsx)(am,{onClick:n,children:o}),(0,t.jsx)(ab,{onClick:i,children:r})]})]})}):null}let af=l.default.div.withConfig({componentId:"zh__sc-952cde00-0"})`
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
`,ah=l.default.div.withConfig({componentId:"zh__sc-952cde00-1"})`
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
`,au=l.default.p.withConfig({componentId:"zh__sc-952cde00-3"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
  white-space: pre-line;
`,ax=l.default.div.withConfig({componentId:"zh__sc-952cde00-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,ag=l.css`
  height: 36px;
  padding: 8px 16px;
  font-size: 16px;
`,am=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-952cde00-5"})`
  ${ag}
`,ab=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-952cde00-6"})`
  ${ag}
`,aj=(0,n.observer)(function({detailFormValues:e,errorFlags:n,errorMessages:l,isEditing:d,onStartEdit:o,onCancelEdit:r,requestOpenSaveConfirm:s,requestSaveEdit:c,onChangeField:f}){let h=a.default.client.info.byClient,[p,u]=(0,i.useState)(!1),x=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!d||p)return;let e=e=>{let t=e.target,n=t instanceof Node&&null!==x.current&&x.current.contains(t),i=t instanceof Element&&(null!==t.closest('[role="listbox"]')||null!==t.closest('[role="option"]')||null!==t.closest("[data-radix-select-viewport]")||null!==t.closest("[data-radix-popper-content-wrapper]"));n||i||r()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[p,d,r]);let g=async()=>{!0===await c()&&u(!1)};return(0,t.jsxs)(n3,{ref:x,children:[(0,t.jsx)(n9,{children:(0,t.jsxs)(n8,{children:[(0,t.jsxs)(a_,{children:[(0,t.jsx)(n7,{children:"인적사항"}),d?(0,t.jsx)(ii,{children:"수정 진행중"}):null]}),d?(0,t.jsxs)(ie,{children:[(0,t.jsxs)(it,{type:"button",onClick:r,children:[(0,t.jsx)(i3.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(it,{type:"button",onClick:()=>{0===Object.keys(h.selectedUserInfoDraft).length?r():s()&&u(!0)},children:[(0,t.jsx)(lY.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(it,{type:"button",onClick:o,children:[(0,t.jsx)(n1.default,{sx:{fontSize:20}}),"수정하기"]})]})}),(0,t.jsx)(l4,{values:e,isDisabilityActivitySupport:"DISABILITY_ACTIVITY_SUPPORT"===h.currentServiceType,errorFlags:n,errorMessages:l,isEditing:d,onChangeField:f}),(0,t.jsx)(ac,{isOpen:p,onCancel:()=>{u(!1)},onConfirm:()=>{g()}})]})}),a_=l.default.div.withConfig({componentId:"zh__sc-6d1cdb58-0"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,aw=["client.resident-registration-number.view","sensitive.rrn.view"],ay=(0,n.observer)(function(){let e,n=a.default.client.info.byClient,l=n.selectedClientId,d=n.selectedClient,o=d?.name??"",r=n.selectedUserInfoDraft,s=n.selectedUserInfoValidationErrors,c=n.isUserInfoEditing,f=n.selectedGuardianList,h=a.default.client.info.byClient.selectedGuardianId,p=(a.default.data.auth.me.data?.permissions??[]).some(e=>aw.includes(e)),u=d?.id;(0,i.useEffect)(()=>{void 0!==u&&p&&n.loadFullResidentRegistrationNumber(u)},[n,p,u]);let x=(0,i.useRef)(null),g=(0,i.useRef)(null),m=(0,i.useMemo)(()=>({genderText:d?.gender==="MALE"?"남성":d?.gender==="FEMALE"?"여성":"",residentRegistrationNumberText:d?.residentRegistrationNumber??"",contactText:d?.contact??"",mobileText:d?.phoneNumber??"",addressBaseText:d?.address??"",addressDetailText:d?.addressDetail??"",postCodeText:d?.postCode??"",memoText:d?.note??"",vehicleFuelCostGuided:d?.vehicleFuelCostNoticeGiven??void 0}),[d?.gender,d?.residentRegistrationNumber,d?.contact,d?.phoneNumber,d?.address,d?.addressDetail,d?.postCode,d?.note,d?.vehicleFuelCostNoticeGiven]);if((0,i.useEffect)(()=>{x.current?.scrollTo({top:0,behavior:"auto"})},[l]),(0,i.useEffect)(()=>(n.setToastContainer(n.isDeleteConfirmOpen?g.current:x.current),()=>{n.setToastContainer(null)}),[n,n.isDeleteConfirmOpen]),null===l)return(0,t.jsx)(n5,{children:"서비스를 선택한 뒤 이용자를 선택해 주세요."});let b=async()=>n.saveSelectedUserInfoDraft(),j={...m,genderText:c?"male"===(e=function(e){if(null===e)return"unknown";let t=e.trim().replace(/[^0-9]/g,"");if(t.length<7)return"unknown";switch(t[6]){case"1":case"3":return"male";case"2":case"4":return"female";default:return"unknown"}}(r.residentRegistrationNumber??m.residentRegistrationNumberText))?"남성":"female"===e?"여성":"":m.genderText,residentRegistrationNumberText:c?r.residentRegistrationNumber??m.residentRegistrationNumberText:m.residentRegistrationNumberText,contactText:c?r.contact??m.contactText:m.contactText,mobileText:c?r.phoneNumber??m.mobileText:m.mobileText,addressBaseText:c?r.address??m.addressBaseText:m.addressBaseText,addressDetailText:c?r.addressDetail??m.addressDetailText:m.addressDetailText,postCodeText:c?r.postCode??m.postCodeText:m.postCodeText,memoText:c?r.note??m.memoText:m.memoText,vehicleFuelCostGuided:c?r.vehicleFuelCostNoticeGiven??m.vehicleFuelCostGuided:m.vehicleFuelCostGuided},_={mobileText:void 0!==s.phoneNumber,contactText:void 0!==s.contact,postCodeText:void 0!==s.postCode,residentRegistrationNumberText:void 0!==s.residentRegistrationNumber},w={mobileText:s.phoneNumber,contactText:s.contact,postCodeText:s.postCode,residentRegistrationNumberText:s.residentRegistrationNumber};return(0,t.jsxs)(n4,{ref:x,children:[(0,t.jsx)(aj,{detailFormValues:j,isEditing:c,onStartEdit:()=>{n.startUserInfoEdit()},onCancelEdit:()=>{n.cancelUserInfoEdit()},requestOpenSaveConfirm:()=>n.validateSelectedUserInfoDraftBeforeConfirm(),requestSaveEdit:b,errorFlags:_,errorMessages:w,onChangeField:(e,t)=>{if("vehicleFuelCostGuided"===e){"boolean"==typeof t&&n.updateSelectedUserInfoDraftField("vehicleFuelCostNoticeGiven",t);return}if("string"==typeof t){if("contactText"===e)return void n.updateSelectedUserInfoDraftField("contact",t);if("mobileText"===e)return void n.updateSelectedUserInfoDraftField("phoneNumber",t);if("residentRegistrationNumberText"===e)return void n.updateSelectedUserInfoDraftField("residentRegistrationNumber",t);if("addressBaseText"===e)return void n.updateSelectedUserInfoDraftField("address",t);if("addressDetailText"===e)return void n.updateSelectedUserInfoDraftField("addressDetail",t);if("postCodeText"===e)return void n.updateSelectedUserInfoDraftField("postCode",t);if("memoText"===e)return void n.updateSelectedUserInfoDraftField("note",t)}}}),(0,t.jsx)(ij,{guardianList:f,selectedGuardianId:h,onAddGuardian:e=>n.createGuardian({name:e.name,phoneNumber:e.phone,relationship:e.relation,address:e.address}),onUpdateGuardian:(e,t)=>n.updateGuardian(e,{name:t.name,phoneNumber:t.phone,relationship:t.relation,address:t.address})}),(0,t.jsx)(lo,{}),(0,t.jsxs)(is,{type:"button",disabled:n.isDeleting,onClick:()=>{n.openDeleteConfirm()},children:[(0,t.jsx)(en.default.Delete,{size:16}),"삭제하기"]}),n.isDeleteConfirmOpen?(0,t.jsx)(ic,{children:(0,t.jsxs)(ih,{ref:g,children:[(0,t.jsxs)(ip,{children:[(0,t.jsxs)(iu,{children:[o," 이용자를 삭제하시겠어요?"]}),(0,t.jsxs)(ix,{children:["삭제한 이용자 정보는 복구할 수 없습니다.",(0,t.jsx)("br",{}),"서비스를 제공 받은 이력이 없는 이용자만 삭제할 수 있습니다."]})]}),(0,t.jsxs)(ig,{children:[(0,t.jsx)(im,{type:"button",disabled:n.isDeleting,onClick:()=>{n.closeDeleteConfirm()},children:"취소하기"}),(0,t.jsx)(ib,{type:"button",disabled:n.isDeleting,onClick:()=>{n.confirmDelete()},children:"삭제하기"})]})]})}):null]})});var av=e.i(23416),aC=e.i(98733),aI=e.i(99661);function az({contractId:e,clientId:n,initialReason:l,initialNote:d,waitingSince:o}){let[r,s]=(0,i.useState)(l),[c,f]=(0,i.useState)(d??""),[h,p]=(0,i.useState)(!1),u=r!==l||c.trim()!==(d??""),x=async()=>{p(!0);let[t]=await av.default.data.contract.update({id:e,payload:{matchingWaitReason:r,matchingWaitNote:""===c.trim()?null:c.trim()}});(p(!1),null!==t)?a.default.ui.layout.toast.error("매칭대기 사유를 저장하지 못했어요. 잠시 후 다시 시도해 주세요."):(a.default.client.info.byClient.preserveClientAfterSave(n),await a.default.data.contract.list.refetch(),await a.default.data.client.list.refetch(),a.default.ui.layout.toast.success("매칭대기 사유를 저장했어요."))};return(0,t.jsxs)(aT,{children:[(0,t.jsxs)(aE,{children:["매칭대기 ",null===o?"-":o.replaceAll("-","."),"부터"]}),(0,t.jsxs)(aS,{children:["매칭대기 사유",(0,t.jsxs)(ak,{value:r??"",onChange:e=>s((0,aI.isMatchingWaitReason)(e.target.value)?e.target.value:null),children:[(0,t.jsx)("option",{value:"",children:"사유 선택"}),Object.entries(aI.default).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))]})]}),(0,t.jsx)(aD,{value:c,maxLength:200,placeholder:"메모(예: 10/1~10/20 입원)",onChange:e=>f(e.target.value)}),(0,t.jsx)(aA,{type:"button",disabled:!u||h,onClick:()=>void x(),children:h?"저장 중…":"저장"}),(0,aI.isNotMatchableWaitReason)(r)?(0,t.jsx)(aL,{children:"입원·일시중지는 스마트 매칭 대상에서 빠져요."}):null]})}let aT=l.default.div.withConfig({componentId:"zh__sc-218bdd37-0"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  margin-top: 12px;
`,aE=l.default.span.withConfig({componentId:"zh__sc-218bdd37-1"})`
  font-size: 14px;
  font-weight: 600;
  color: #c4320a;
`,aS=l.default.label.withConfig({componentId:"zh__sc-218bdd37-2"})`
  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  color: #344054;
`,ak=l.default.select.withConfig({componentId:"zh__sc-218bdd37-3"})`
  height: 34px;
  padding: 0 8px;
  border: 1px solid #b1b8be;
  border-radius: 6px;
`,aD=l.default.input.withConfig({componentId:"zh__sc-218bdd37-4"})`
  flex: 1;

  min-width: 200px;
  height: 34px;
  padding: 0 10px;
  border: 1px solid #b1b8be;
  border-radius: 6px;

  font-size: 14px;
`,aA=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-218bdd37-5"})`
  height: 34px;
  padding: 0 14px;
  font-size: 14px;
`,aL=l.default.span.withConfig({componentId:"zh__sc-218bdd37-6"})`
  width: 100%;
  font-size: 12px;
  color: #98a2b3;
`;var a$=e.i(88552);let aR=(0,nq.default)((0,t.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");var aO=e.i(44534);let aP=(0,n.observer)(function({clientId:e,onClose:n,onSelectServiceWorker:l,serviceType:d}){let[r,s]=(0,i.useState)(""),c=a.default.data.client.availableServiceWorkerList;(0,i.useEffect)(()=>(c.setQuery({clientId:e,serviceType:d}),()=>c.reset()),[c,e,d]);let f=(0,i.useMemo)(()=>c.data?.map(e=>({serviceWorker:e,_searchableName:aO.default.create(e.name)}))??[],[c.data]).filter(({_searchableName:e})=>aO.default.isMatch(e,r));return(0,t.jsx)(aN,{children:(0,t.jsxs)(aM,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(aF,{children:[(0,t.jsx)(aB,{}),(0,t.jsx)(aU,{children:"연결할 제공인력 선택하기"}),(0,t.jsx)(o.default.Button.Outlined,{type:"button",style:{width:56,height:36},onClick:n,children:(0,t.jsx)(nJ.default,{sx:{fontSize:20}})})]}),(0,t.jsx)(aY,{}),(0,t.jsx)(aV,{children:(0,t.jsxs)(aW,{children:[(0,t.jsx)(aR,{sx:{fontSize:22},style:{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",color:"#9CA3AF"}}),(0,t.jsx)(aH,{placeholder:"제공인력 이름을 검색하세요.",value:r,onChange:e=>s(e.target.value)})]})}),(0,t.jsxs)(aK,{children:["loading"===c.status?(0,t.jsx)(aG,{children:"제공인력을 불러오는 중..."}):null,"error"===c.status?(0,t.jsx)(aG,{children:"제공인력 목록을 불러오지 못했습니다."}):null,"success"===c.status&&0===f.length?(0,t.jsx)(aG,{children:"연결할 수 있는 제공인력이 없습니다."}):null,f.map(({serviceWorker:e})=>(0,t.jsxs)(aX,{children:[(0,t.jsxs)(aq,{children:[(0,t.jsx)(aQ,{children:e.name}),(0,t.jsxs)(aZ,{children:[(0,t.jsxs)(aJ,{children:[(0,t.jsx)(a0,{children:"주소"}),(0,t.jsx)(a1,{}),(0,t.jsx)(a2,{children:[e.address,e.addressDetail].filter(e=>null!==e&&""!==e.trim()).join(" ")||"-"})]}),(0,t.jsxs)(aJ,{children:[(0,t.jsx)(a0,{children:"연락처"}),(0,t.jsx)(a1,{}),(0,t.jsx)(a2,{children:e.phoneNumber??e.contact??"-"})]})]})]}),(0,t.jsx)(a6,{children:(0,t.jsxs)(a4,{type:"button",onClick:()=>l?.(e.id),children:["선택",(0,t.jsx)(a$.default,{sx:{fontSize:18}})]})})]},e.id))]})]})})}),aN=l.default.div.withConfig({componentId:"zh__sc-c92b9463-0"})`
  position: absolute;
  z-index: 1000;
  inset: 0;

  display: flex;
  justify-content: flex-end;

  padding-top: 69px;
`,aM=l.default.div.withConfig({componentId:"zh__sc-c92b9463-1"})`
  display: flex;
  flex-direction: column;

  width: min(417px, 100%);
  height: 100%;

  background: #fff;
  box-shadow: -2px 9px 16px rgb(0 0 0 / 16%);
`,aF=l.default.div.withConfig({componentId:"zh__sc-c92b9463-2"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`,aB=l.default.div.withConfig({componentId:"zh__sc-c92b9463-3"})`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
`,aU=l.default.div.withConfig({componentId:"zh__sc-c92b9463-4"})`
  flex: 1;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #101828;
  text-align: center;
`,aY=l.default.div.withConfig({componentId:"zh__sc-c92b9463-5"})`
  height: 1px;
  background: #e5e7eb;
`,aV=l.default.div.withConfig({componentId:"zh__sc-c92b9463-6"})`
  padding: 16px;
`,aW=l.default.div.withConfig({componentId:"zh__sc-c92b9463-7"})`
  position: relative;
`,aH=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-c92b9463-8"})`
  width: 100%;
  height: 36px;
  padding-left: 48px;
`,aG=l.default.div.withConfig({componentId:"zh__sc-c92b9463-9"})`
  padding: 24px 0;
  font-size: 14px;
  color: #667085;
  text-align: center;
`,aK=l.default.div.withConfig({componentId:"zh__sc-c92b9463-10"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  padding: 16px;

  background: #f9fafb;
`,aX=l.default.div.withConfig({componentId:"zh__sc-c92b9463-11"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  min-height: 148px;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,aq=l.default.div.withConfig({componentId:"zh__sc-c92b9463-12"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,aQ=l.default.div.withConfig({componentId:"zh__sc-c92b9463-13"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,aZ=l.default.div.withConfig({componentId:"zh__sc-c92b9463-14"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-self: stretch;
`,aJ=l.default.div.withConfig({componentId:"zh__sc-c92b9463-15"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,a0=l.default.div.withConfig({componentId:"zh__sc-c92b9463-16"})`
  min-width: 42px;
  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
`,a1=l.default.div.withConfig({componentId:"zh__sc-c92b9463-17"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,a2=l.default.div.withConfig({componentId:"zh__sc-c92b9463-18"})`
  overflow: hidden;

  min-width: 0;

  font-size: 14px;
  line-height: 20px;
  color: #667085;
  text-overflow: ellipsis;
  white-space: nowrap;
`,a6=l.default.div.withConfig({componentId:"zh__sc-c92b9463-19"})`
  display: flex;
  align-self: stretch;
  justify-content: flex-end;
  margin-top: auto;
`,a4=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-c92b9463-20"})`
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
`;let a5=l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,a3=l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-3"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  min-height: 40px;
`,a9=l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-4"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: space-between;

  min-width: 0;
  min-height: 40px;
`,a8=l.default.h3.withConfig({componentId:"zh__sc-b19bd4fc-5"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #101828;
`,a7=l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-6"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,de=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-b19bd4fc-7"})`
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
`,dt=l.default.span.withConfig({componentId:"zh__sc-b19bd4fc-8"})`
  padding: 2px 12px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #45464e;
`,dn=l.default.span.withConfig({componentId:"zh__sc-b19bd4fc-9"})`
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
`;let di=(0,n.observer)(function(){let[e,n]=(0,i.useState)(!1),[l,d]=(0,i.useState)(!1),o=a.default.client.info.byClient,r=a.default.data.serviceWorker.detail,s=o.selectedContract,c=o.selectedClientId,f=s?.serviceType??null,h=s?.serviceWorkerId??null,p=r.data,u=null!==h&&p?.id===h;(0,i.useEffect)(()=>{null!==h&&r.setQuery({id:h})},[r,h]);let x=async e=>{if(null===s||null===c||l)return;d(!0);let[t]=await av.default.data.contract.update({id:s.id,payload:{serviceWorkerId:e}});(d(!1),null!==t)?a.default.ui.layout.toast.error("제공인력 연결에 실패했습니다. 잠시 후 다시 시도해 주세요."):(o.preserveClientAfterSave(c),o.setHighlightedClientId(c),await a.default.data.contract.list.refetch(),await a.default.data.client.list.refetch(),n(!1),a.default.ui.layout.toast.success("제공인력을 연결했습니다."))};return(0,t.jsxs)(a5,{children:[(0,t.jsx)(a3,{children:(0,t.jsxs)(a9,{children:[(0,t.jsx)(a8,{children:"연결된 제공인력 정보"}),(0,t.jsxs)(a7,{children:[(0,t.jsxs)(de,{type:"button",disabled:!0,children:[(0,t.jsx)(n1.default,{sx:{fontSize:20}}),"수정하기"]}),(0,t.jsxs)(de,{type:"button",disabled:null===s||null===f||l,onClick:()=>n(!0),children:[(0,t.jsx)(nQ,{sx:{fontSize:20}}),"추가하기"]})]})]})}),u?(0,t.jsx)(da,{children:(0,t.jsxs)(dl,{$isSelected:u,children:[(0,t.jsx)(dd,{children:(0,t.jsx)(dr,{children:p.name})}),(0,t.jsxs)(ds,{children:[(0,t.jsxs)(dc,{children:[(0,t.jsx)(df,{children:"주소"}),(0,t.jsx)(dh,{}),(0,t.jsx)(dp,{children:[p.address,p.addressDetail].filter(e=>null!==e&&""!==e.trim()).join(" ")||"-"})]}),(0,t.jsxs)(dc,{children:[(0,t.jsx)(df,{children:"연락처"}),(0,t.jsx)(dh,{}),(0,t.jsx)(dp,{children:p.phoneNumber??p.contact??"-"})]}),(0,t.jsxs)(dc,{children:[(0,t.jsx)(df,{children:"이메일"}),(0,t.jsx)(dh,{}),(0,t.jsx)(dp,{children:"-"})]})]}),(0,t.jsx)(du,{children:(0,t.jsx)(dx,{children:"연결됨"})})]})}):(0,t.jsxs)(dg,{children:[(0,t.jsx)(n2.default,{sx:{fontSize:24,color:"#494F53"}}),(0,t.jsxs)(dm,{children:[(0,t.jsx)(db,{children:"연결된 제공인력이 없습니다."}),(0,t.jsx)(dj,{children:"[+추가하기] 버튼을 클릭해 제공인력을 연결해주세요."})]})]}),u||null!==h||null===s||null===c?null:(0,t.jsx)(az,{contractId:s.id,clientId:c,initialReason:s.matchingWaitReason??null,initialNote:s.matchingWaitNote??null,waitingSince:s.matchingWaitSince??o.selectedClient?.firstRegisteredDate??null},`${s.id}-${s.matchingWaitReason??""}-${s.matchingWaitNote??""}`),e&&null!==c&&null!==f?(0,t.jsx)(aP,{clientId:c,onClose:()=>n(!1),onSelectServiceWorker:e=>void x(e),serviceType:f}):null]})}),dl=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-0"})`
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
`,da=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-1"})`
  overflow: auto hidden;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;

  width: 100%;
`,dd=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  width: 100%;
`,dr=l.default.h4.withConfig({componentId:"zh__sc-bfa96d56-3"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,ds=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-4"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 100%;
  padding-bottom: 36px;
`,dc=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-5"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
`,df=l.default.span.withConfig({componentId:"zh__sc-bfa96d56-6"})`
  width: 52px;
  min-width: 52px;

  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
`,dh=l.default.span.withConfig({componentId:"zh__sc-bfa96d56-7"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,dp=l.default.span.withConfig({componentId:"zh__sc-bfa96d56-8"})`
  min-width: 0;

  font-size: 14px;
  line-height: 20px;
  color: #45464e;
  overflow-wrap: anywhere;
`,du=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-9"})`
  position: absolute;
  right: 16px;
  bottom: 16px;

  display: flex;
  justify-content: flex-end;
`,dx=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-10"})`
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
`,dg=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-11"})`
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
`,dm=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-12"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,db=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-13"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
`,dj=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-14"})`
  font-size: 14px;
  line-height: 20px;
  color: #494f53;
  text-align: center;
`;var d_=e.i(93384),dw=e.i(95649),dy=e.i(2615);function dv(e){return""===e.trim()?"-":e}let dC=["수급자, 차상위","120% 이하","120~160%","160% 초과"],dI=["meal","nutrition"];function dz(e){return`${e.toLocaleString("ko-KR")} 원`}function dT(e){return`${e.toLocaleString("ko-KR")}원`}function dE({serviceCode:e,grade:n,paymentMethodText:l,paymentDayText:a,monthlyUsage:d,serviceFees:o}){let[r,s]=(0,i.useState)(!0),c=e??"meal",f=null===n||!1===Number.isInteger(n)?null:Math.max(0,n-1),h=`${new Date().getMonth()+1}월`,p=d?.providedCount??0,u=d?.scheduledCount??0,x=d?.expectedGovernmentSupportAmount??0,g=d?.expectedCopaymentAmount??0,m=d?.expectedTotalAmount??0,b=u>0?Math.floor(x/u):0,j=u>0?Math.floor(g/u):0;return(0,t.jsxs)(a5,{children:[(0,t.jsx)(a3,{children:(0,t.jsx)(a9,{children:(0,t.jsxs)(dS,{children:[(0,t.jsx)(a8,{children:"계약서 세부내역"}),(0,t.jsx)(dt,{children:"30일 기준"})]})})}),(0,t.jsxs)(dk,{children:[(0,t.jsxs)(dD,{children:[(0,t.jsxs)(dA,{children:["납부방법",(0,t.jsx)(dL,{children:dv(l)})]}),(0,t.jsxs)(dA,{children:["납입일",(0,t.jsx)(dL,{children:dv(a)})]})]}),(0,t.jsxs)(d$,{children:[(0,t.jsxs)(dR,{children:[(0,t.jsxs)(dO,{children:[(0,t.jsxs)(dP,{children:[(0,t.jsxs)(dN,{children:[h," 사회서비스 금액 총계"]}),(0,t.jsxs)(dM,{children:[(0,t.jsxs)("span",{children:["정부지원금(",dT(x),")"]}),(0,t.jsx)("span",{"aria-hidden":!0,children:"+"}),(0,t.jsxs)("span",{children:["본인부담금 결제액(",dT(g),")"]})]})]}),(0,t.jsxs)(dF,{children:["총 ",dz(m)]})]}),(0,t.jsx)(dB,{}),(0,t.jsxs)(dU,{children:[(0,t.jsx)(dY,{children:"세부내역"}),(0,t.jsxs)(dH,{children:[(0,t.jsxs)(dG,{children:[(0,t.jsxs)(dK,{children:[(0,t.jsx)(dV,{children:"정부지원금(바우처) 결제액"}),(0,t.jsxs)(dX,{children:[(0,t.jsxs)(dq,{children:["1회당 정부지원금(",dT(b),")"]}),(0,t.jsx)(dq,{children:"x"}),(0,t.jsxs)(dq,{$highlighted:!0,children:["당월 이용 ",p,"회"]})]})]}),(0,t.jsx)(dW,{children:dz(x)})]}),(0,t.jsxs)(dG,{children:[(0,t.jsxs)(dK,{children:[(0,t.jsx)(dV,{children:"본인부담금 결제액"}),(0,t.jsxs)(dX,{children:[(0,t.jsxs)(dq,{children:["1회당 본인 부담금(",dT(j),")"]}),(0,t.jsx)(dq,{children:"x"}),(0,t.jsxs)(dq,{$highlighted:!0,children:["당월 이용 ",p,"회"]})]})]}),(0,t.jsx)(dW,{children:dz(g)})]})]})]})]}),(0,t.jsxs)(dQ,{children:[(0,t.jsx)(dZ,{children:(0,t.jsxs)(dJ,{type:"button","aria-controls":"monthly-fee-guide-table","aria-expanded":r,onClick:()=>{s(e=>!e)},children:[(0,t.jsxs)(d0,{children:[(0,t.jsx)(d_.default,{sx:{fontSize:24,color:"#1C1B1F"}}),(0,t.jsxs)(d6,{children:["월별 서비스 이용금액 안내 예시 (",n??"-","등급/",u,"회 기준 )"]})]}),!0===r?(0,t.jsx)(d1,{"aria-hidden":!0,htmlColor:"#0a0a0a"}):(0,t.jsx)(d2,{"aria-hidden":!0,htmlColor:"#0a0a0a"})]})}),!0===r?(0,t.jsxs)(d4,{id:"monthly-fee-guide-table",children:[(0,t.jsxs)("colgroup",{children:[(0,t.jsx)("col",{style:{width:"23px"}}),(0,t.jsx)("col",{style:{width:"40px"}}),(0,t.jsx)("col",{style:{width:"27px"}}),(0,t.jsx)("col",{style:{width:"103px"}}),(0,t.jsx)("col",{style:{width:"auto"}}),(0,t.jsx)("col",{style:{width:"auto"}}),(0,t.jsx)("col",{style:{width:"auto"}})]}),(0,t.jsxs)("thead",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(d5,{colSpan:3,rowSpan:2,children:"서비스 종류"}),(0,t.jsx)(d5,{rowSpan:2,children:"바우처 총액 (월)"}),(0,t.jsx)(d5,{colSpan:3,children:"소득수준별 금액"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)(d5,{children:"소득수준"}),(0,t.jsx)(d5,{children:"본인부담금"}),(0,t.jsx)(d5,{children:"정부지원금"})]})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(d9,{rowSpan:9}),(0,t.jsx)(d3,{colSpan:6,children:"본인부담 : 월 단위 결제"})]}),dI.flatMap(e=>(o[e]??[]).map((n,i)=>{let l=null!==f&&e===c&&i===f;return(0,t.jsxs)("tr",{children:["meal"===e&&0===i?(0,t.jsxs)(d8,{rowSpan:8,children:[(0,t.jsx)("div",{style:{fontSize:10,fontWeight:400},children:"중장년, 청년"}),(0,t.jsx)("span",{children:"식사∙영양관리"})]}):null,0===i?(0,t.jsx)(d7,{rowSpan:4,children:"meal"===e?"식사관리":"영양관리"}):null,0===i?(0,t.jsx)(oe,{rowSpan:4,children:dT((o[e]??[]).reduce((e,t)=>e+t.copay+t.voucher,0))}):null,(0,t.jsx)(ot,{$highlighted:l,$isFirstHighlightCell:!0,children:dC[i]}),(0,t.jsx)(ot,{$highlighted:l,children:dT(n.copay)}),(0,t.jsx)(ot,{$highlighted:l,$isLastHighlightCell:!0,children:dT(n.voucher)})]},`${e}-${dC[i]}`)}))]})]}):null]})]})]})]})}let dS=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-0"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,dk=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-1"})`
  display: flex;
  gap: 20px;
  align-items: flex-start;

  width: 100%;
  padding: 20px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #f6f8ff;
`,dD=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 212px;
  min-width: 0;
`,dA=l.default.label.withConfig({componentId:"zh__sc-27bdacd5-3"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;
`,dL=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-4"})`
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
`,d$=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-5"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  min-width: 0;
`,dR=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-6"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  min-width: 0;
  padding: 20px 16px;
  border: 1px solid #cdd8ec;
  border-radius: 8px;

  background: #fff;
`,dO=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-7"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
`,dP=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-8"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`,dN=l.default.h4.withConfig({componentId:"zh__sc-27bdacd5-9"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,dM=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-10"})`
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
`,dF=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-11"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #e7000b;
`,dB=l.default.hr.withConfig({componentId:"zh__sc-27bdacd5-12"})`
  width: 100%;
  margin: 0;
  border: 0;
  border-top: 1px solid #e5e7eb;
`,dU=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-13"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,dY=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-14"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,dV=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-15"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,dW=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-16"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,dH=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-17"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,dG=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-18"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
`,dK=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-19"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`,dX=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-20"})`
  display: flex;
  gap: 4px;
  align-items: center;
  min-width: 0;
`,dq=l.default.span.withConfig({componentId:"zh__sc-27bdacd5-21"})`
  font-size: 14px;
  font-weight: ${({$highlighted:e})=>!0===e?700:400};
  line-height: 20px;
  color: ${({$highlighted:e})=>!0===e?"#e7000b":"#0a0a0a"};
  white-space: nowrap;
`,dQ=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-22"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 20px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,dZ=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-23"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`,dJ=l.default.button.withConfig({componentId:"zh__sc-27bdacd5-24"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0;
  border: 0;

  background: transparent;
`,d0=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-25"})`
  display: flex;
  gap: 4px;
  align-items: center;
  min-width: 0;
`,d1=(0,l.default)(dy.default).withConfig({componentId:"zh__sc-27bdacd5-26"})`
  flex-shrink: 0;
  font-size: 24px;
`,d2=(0,l.default)(dw.default).withConfig({componentId:"zh__sc-27bdacd5-27"})`
  flex-shrink: 0;
  font-size: 24px;
`,d6=l.default.h4.withConfig({componentId:"zh__sc-27bdacd5-28"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
  white-space: nowrap;
`,d4=l.default.table.withConfig({componentId:"zh__sc-27bdacd5-29"})`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #58616a;

  @media (width <= 900px) {
    font-size: 12px;
  }
`,d5=l.default.th.withConfig({componentId:"zh__sc-27bdacd5-30"})`
  padding: 8px 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #f0f0f0;
`,d3=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-31"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;

  background: #fafafa;
`,d9=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-32"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 10px;
  line-height: 14px;
  color: #0a0a0a;
  text-align: center;

  background: #fafafa;
`,d8=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-33"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #fafafa;
`,d7=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-34"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #fafafa;
`,oe=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-35"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #fff;
`,ot=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-36"})`
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
`,on=["1인가구","취약가구","출산가구","자립준비","학교생활","직장생활","보호자 일시 부재","나머지 가구구성원의 직장생활 등"],oi=[["1구간","465점 이상","8,293,000","면제","20,000","216,200","216,200","216,200","216,200"],["2구간","435~465미만","7,774,000","면제","20,000","216,200","216,200","216,200","216,200"],["3구간","405~435미만","7,257,000","면제","20,000","216,200","216,200","216,200","216,200"],["4구간","375~405미만","6,739,000","면제","20,000","216,200","216,200","216,200","216,200"],["5구간","345~375미만","6,221,000","면제","20,000","216,200","216,200","216,200","216,200"],["6구간","315~345미만","5,703,000","면제","20,000","216,200","216,200","216,200","216,200"],["7구간","285~315미만","5,181,000","면제","20,000","207,200","216,200","216,200","216,200"],["8구간","255~285미만","4,665,000","면제","20,000","186,600","216,200","216,200","216,200"],["9구간","225~255미만","4,148,000","면제","20,000","165,900","216,200","216,200","216,200"],["10구간","195~225미만","3,629,000","면제","20,000","145,100","216,200","216,200","216,200"],["11구간","165~195미만","3,112,000","면제","20,000","124,400","186,700","216,200","216,200"],["12구간","135~165미만","2,593,000","면제","20,000","103,700","155,500","207,400","216,200"],["13구간","105~135미만","2,076,000","면제","20,000","83,000","124,500","166,000","207,600"],["14구간","75~105미만","1,558,000","면제","20,000","62,300","93,400","124,600","155,800"],["15구간","42~75미만","1,040,000","면제","20,000","41,600","62,400","83,200","104,000"],["특례","특례 대상","7,257,000","면제","20,000","29,300","44,000","58,700","73,400"]],ol=["grade","score","monthlyLimit","typeA","typeB","typeC","typeD","typeE","typeF"];function oa({additionalBenefitTypes:e,benefitDecisionPeriod:n,contractId:l,grade:d,incomeCategory:r,monthlyUsage:s,virtualAccountNumber:c}){var f,h;let p,u,[x,g]=(0,i.useState)(!1),[m,b]=(0,i.useState)(!1),[j,_]=(0,i.useState)(r),[w,y]=(0,i.useState)(c??""),[v,C]=(0,i.useState)(e??[]),[I,z]=(0,i.useState)(!0),T=void 0!==l,E=or(d),S=os(r),k=function(e,t){if(null===e||null===t)return null;let n=or(e),i=oi.find(e=>e[0]===n);if(void 0===i)return null;let l=os(t);if(null===l)return null;let a=i[l];if(void 0===a)return null;let d="면제"===a?0:Number(a.replaceAll(",","")),o=Number(i[2].replaceAll(",",""));return Number.isNaN(d)||Number.isNaN(o)?null:{copaymentAmount:d,monthlyLimitAmount:o}}(d,r),D=k?.monthlyLimitAmount??s?.expectedTotalAmount??0,A=k?.copaymentAmount??s?.expectedCopaymentAmount??0,L=null===k?s?.expectedGovernmentSupportAmount??0:D-A,$=`${new Date().getMonth()+1}월`,R=async()=>{if(void 0===l||m)return;b(!0);let[e]=await av.default.data.contract.update({id:l,payload:{incomeCategory:j??void 0,virtualAccountNumber:w,additionalBenefitTypes:v}});null===e?(await a.default.data.contract.list.refetch(),g(!1)):a.default.ui.layout.toast.error("계좌∙자격 및 기타 정보 저장에 실패했습니다."),b(!1)};return(0,t.jsxs)(a5,{children:[(0,t.jsx)(a3,{children:(0,t.jsxs)(a9,{children:[(0,t.jsxs)(oo,{children:[(0,t.jsx)(a8,{children:"계좌∙자격 및 기타 정보"}),x&&T?(0,t.jsx)(dn,{children:"수정 진행중"}):null]}),x&&T?(0,t.jsxs)(a7,{children:[(0,t.jsxs)(de,{type:"button",onClick:()=>{g(!1)},disabled:m,children:[(0,t.jsx)(i3.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(de,{type:"button",onClick:()=>void R(),disabled:m,children:[(0,t.jsx)(nZ,{sx:{fontSize:20}}),"수정 저장"]})]}):T?(0,t.jsxs)(de,{type:"button",onClick:()=>{T&&(_(r),y(c??""),C(e??[]),g(!0))},children:[(0,t.jsx)(n1.default,{sx:{fontSize:20}}),"수정하기"]}):null]})}),(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e4,{$width:193,children:[(0,t.jsx)(e5,{children:"수급결정시기"}),(0,t.jsx)(o.default.Input.Date,{value:n??"",readOnly:!0,style:{...e3,width:"100%",height:36}})]}),(0,t.jsxs)(e4,{$width:213,children:[(0,t.jsx)(e5,{children:"가상계좌번호"}),(0,t.jsx)(o.default.Input.Text,{value:x?w:c??"",placeholder:"가상계좌를 입력해주세요.",inputMode:"numeric",readOnly:!x,onChange:e=>y(e.target.value),style:e3})]}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"수급여부"}),(0,t.jsxs)(oh,{children:[(0,t.jsxs)(op,{children:[(0,t.jsx)(of,{name:"disability-income-category",checked:(x?j:r)==="TYPE_A",disabled:!x,onChange:()=>_("TYPE_A")}),"기초생활수급자"]}),(0,t.jsxs)(op,{children:[(0,t.jsx)(of,{name:"disability-income-category",checked:(x?j:r)==="TYPE_B",disabled:!x,onChange:()=>_("TYPE_B")}),"차상위계층"]}),(0,t.jsxs)(op,{children:[(0,t.jsx)(of,{name:"disability-income-category",checked:["TYPE_C","TYPE_D","TYPE_E","TYPE_F"].includes(x?j??"":r??""),disabled:!x,onChange:()=>{null!==j&&["TYPE_C","TYPE_D","TYPE_E","TYPE_F"].includes(j)||_("TYPE_C")}}),"일반"]})]})]})]}),(0,t.jsx)(e6,{children:(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:"추가급여대상 여부"}),(0,t.jsx)(ou,{children:on.map(n=>(0,t.jsxs)(ox,{children:[(0,t.jsx)(oc,{checked:(x?v:e??[]).includes(n),disabled:!x,onChange:()=>{C(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])}}),n]},n))})]})}),(0,t.jsxs)(og,{children:[(0,t.jsx)(a8,{children:"계약서 세부내역"}),(0,t.jsx)(om,{children:"30일 기준"})]}),(0,t.jsxs)(ob,{children:[(0,t.jsxs)(oj,{children:[(0,t.jsxs)(o_,{children:[$," 바우처 월 한도액 및 정산 총액"]}),(0,t.jsxs)(ow,{children:[(0,t.jsxs)(oy,{children:[(0,t.jsx)(ov,{children:"총 월한도액"}),(0,t.jsx)(oC,{children:"월한도액 + 본인부담금"}),(0,t.jsx)(oI,{children:od(D)})]}),(0,t.jsx)(oT,{"aria-hidden":!0,children:"="}),(0,t.jsxs)(oy,{children:[(0,t.jsx)(ov,{children:"정부지원금"}),(0,t.jsx)(oC,{children:"월한도액 - 본인부담금"}),(0,t.jsx)(oI,{children:od(L)})]}),(0,t.jsx)(oT,{"aria-hidden":!0,children:"+"}),(0,t.jsxs)(oy,{children:[(0,t.jsx)(ov,{children:"본인부담금"}),(0,t.jsx)(oC,{children:(f=d,h=r,p=null===f?"":f.startsWith("SPECIAL")?"특례":`${f}구간`,u="TYPE_A"===h?"[가]형 생계·의료급여 수급자":"TYPE_B"===h?"[나]형 차상위계층":"TYPE_C"===h?"[다]형 중위소득 70% 이하":"TYPE_D"===h?"[라]형 중위소득 120% 이하":"TYPE_E"===h?"[마]형 중위소득 180% 이하":"TYPE_F"===h?"[바]형 중위소득 180% 초과":"",`${p} ${u}`.trim())}),(0,t.jsxs)(oI,{$accent:!0,children:[A.toLocaleString("ko-KR")," ",(0,t.jsx)(oz,{children:"원"})]})]})]})]}),(0,t.jsxs)(oE,{children:[(0,t.jsxs)(oS,{type:"button","aria-expanded":I,"aria-controls":"disability-benefit-guide",onClick:()=>z(e=>!e),children:[(0,t.jsxs)(ok,{children:[(0,t.jsx)(d_.default,{sx:{fontSize:24,color:"#1c1b1f"}}),"활동지원급여 월한도액 및 소득구분별 본인부담금 통합 기준표"]}),I?(0,t.jsx)(dy.default,{"aria-hidden":!0}):(0,t.jsx)(dw.default,{"aria-hidden":!0})]}),I?(0,t.jsxs)(oD,{id:"disability-benefit-guide",children:[(0,t.jsxs)("thead",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(oA,{rowSpan:2,$muted:!0,children:"구간"}),(0,t.jsx)(oA,{rowSpan:2,children:"종합점수"}),(0,t.jsx)(oA,{rowSpan:2,$monthlyLimit:!0,children:"월한도액"}),(0,t.jsx)(oA,{colSpan:6,$benefitHeader:!0,children:"본인부담금"})]}),(0,t.jsx)("tr",{children:["[가형]\n생계·의료급여 수급자","[나형]\n차상위계층","[다형]\n중위소득\n70% 이하","[라형]\n중위소득\n120% 이하","[마형]\n중위소득\n180% 이하","[바형]\n중위소득\n180% 초과"].map(e=>(0,t.jsx)(oA,{children:e},e))})]}),(0,t.jsx)("tbody",{children:oi.map(e=>(0,t.jsx)("tr",{children:e.map((n,i)=>(0,t.jsx)(oL,{$muted:0===i||2===i,$monthlyLimit:2===i,$selected:e[0]===E&&(2===i||i===S),children:n},`${e[0]}-${ol[i]}`))},e[0]))})]}):null]})]})]})}function od(e){return`${e.toLocaleString("ko-KR")} 원`}let oo=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-0"})`
  display: flex;
  gap: 8px;
  align-items: center;
`;function or(e){return null===e?null:e.startsWith("SPECIAL")?"특례":`${e}구간`}function os(e){return null===e?null:({TYPE_A:3,TYPE_B:4,TYPE_C:5,TYPE_D:6,TYPE_E:7,TYPE_F:8})[e]}let oc=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-bcf5d5b7-1"})`
  width: 24px;
  height: 24px;
`,of=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-bcf5d5b7-2"})`
  width: 24px;
  height: 24px;
`,oh=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-3"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  align-items: center;

  min-height: 36px;
`,op=l.default.label.withConfig({componentId:"zh__sc-bcf5d5b7-4"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;

  min-height: 36px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
  white-space: nowrap;
`,ou=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-5"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  align-items: center;
`,ox=l.default.label.withConfig({componentId:"zh__sc-bcf5d5b7-6"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;

  height: 36px;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,og=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-7"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,om=(0,l.default)(dt).withConfig({componentId:"zh__sc-bcf5d5b7-8"})`
  background: #fff;
`,ob=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-9"})`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  padding: 20px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #f6f8ff;
`,oj=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-10"})`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,o_=l.default.h3.withConfig({componentId:"zh__sc-bcf5d5b7-11"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,ow=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-12"})`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`,oy=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-13"})`
  position: relative;

  flex: 1;

  min-width: 0;
  padding: 20px 16px;
  border: 1px solid #cdd8ec;
  border-radius: 8px;

  background: #fff;
`,ov=l.default.strong.withConfig({componentId:"zh__sc-bcf5d5b7-14"})`
  display: block;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`,oC=l.default.span.withConfig({componentId:"zh__sc-bcf5d5b7-15"})`
  display: block;
  margin-top: 8px;
  font-size: 14px;
  line-height: normal;
`,oI=l.default.strong.withConfig({componentId:"zh__sc-bcf5d5b7-16"})`
  position: absolute;
  top: 20px;
  right: 16px;

  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: ${({$accent:e})=>!0===e?"#f00":"#0a0a0a"};
`,oz=l.default.span.withConfig({componentId:"zh__sc-bcf5d5b7-17"})`
  color: #0a0a0a;
`,oT=l.default.strong.withConfig({componentId:"zh__sc-bcf5d5b7-18"})`
  flex: 0 0 20px;
  font-size: 18px;
  text-align: center;
`,oE=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-19"})`
  overflow-x: auto;

  padding: 16px 10px 10px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,oS=l.default.button.withConfig({componentId:"zh__sc-bcf5d5b7-20"})`
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
`,ok=l.default.span.withConfig({componentId:"zh__sc-bcf5d5b7-21"})`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
`,oD=l.default.table.withConfig({componentId:"zh__sc-bcf5d5b7-22"})`
  table-layout: fixed;
  border-collapse: collapse;

  width: 100%;
  min-width: 915px;

  font-size: 14px;
  color: #0a0a0a;
`,oA=l.default.th.withConfig({componentId:"zh__sc-bcf5d5b7-23"})`
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
`,oL=l.default.td.withConfig({componentId:"zh__sc-bcf5d5b7-24"})`
  height: 40px;
  padding: 4px 6px;
  border: ${({$selected:e})=>!0===e?"2px solid #FB2C36":"1px solid #58616a"};

  line-height: normal;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;

  background: ${({$monthlyLimit:e,$muted:t})=>!0===e?"#f6f8ff":!0===t?"#f9fafb":"#fff"};
`,o$=(0,n.observer)(function(){let e=a.default.client.info.byClient,n=e.currentServiceType,l=e.selectedContract,d="DISABILITY_ACTIVITY_SUPPORT"===n,[o,r]=(0,i.useState)(null),s=function(e){if(null===e)return null;if(1===e||2===e||3===e||4===e)return e;if("string"==typeof e){let t=Number(e.trim().replace("등급",""));if(1===t||2===t||3===t||4===t)return t}return null}(l?.grade??null),c=a.default.data.organization.serviceList.data?.serviceStandardFee.reduce((e,t)=>{let n="MEAL"===t.type?"meal":"NUTRITION"===t.type?"nutrition":null;return null!==n&&(e[n]=t.fee),e},{})??{};return(0,i.useEffect)(()=>{let e=l?.id,[t,i]=aC.default.create(new Date().getFullYear(),new Date().getMonth()+1);if(null===n||void 0===e||null!==t||null===i)return;let a=!0;return(async t=>{let[i,l]=await av.default.data.serviceProvision.getMonthlyStatus({serviceType:n,targetYearMonth:t});if(!a)return;let d=l?.rows.find(t=>t.contractId===e);null!==i||void 0===d?r(null):r({expectedCopaymentAmount:d.expectedCopaymentAmount,expectedGovernmentSupportAmount:d.expectedGovernmentSupportAmount,expectedTotalAmount:d.expectedTotalAmount,providedCount:d.providedCount,scheduledCount:l.schedule.length})})(i),()=>{a=!1}},[l?.id,n]),(0,t.jsxs)(oR,{children:[(0,t.jsx)(di,{}),d?(0,t.jsx)(oa,{additionalBenefitTypes:l?.additionalBenefitTypes??null,benefitDecisionPeriod:function(e){if(null!==e&&"benefitDecisionPeriod"in e)return"string"==typeof e.benefitDecisionPeriod?e.benefitDecisionPeriod:void 0}(l),contractId:l?.id,grade:l?.grade??null,incomeCategory:l?.incomeCategory??null,monthlyUsage:o,virtualAccountNumber:l?.virtualAccountNumber??null},l?.id??"no-contract"):(0,t.jsx)(dE,{serviceCode:null===n?null:"MEAL"===n?"meal":"nutrition",grade:s,paymentMethodText:"CMS 자동이체",paymentDayText:"매월 25일",monthlyUsage:o,serviceFees:c})]})}),oR=l.default.div.withConfig({componentId:"zh__sc-cbb8903d-0"})`
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
`;var oO=e.i(27997),oP=e.i(34944),oN=e.i(86987),oM=e.i(40342);let oF=(0,n.observer)(function({disabled:e=!1}){let n=a.default.client.info.byClient,i=n.contractsOfSelectedClient,l=n.selectedContractId,d=i.some(e=>e.status===oP.default.ACTIVE);return(0,t.jsxs)(oB,{children:[(0,t.jsx)(oU,{children:"계약 회차"}),(0,t.jsxs)(oY,{value:l??tf.SELECT_EMPTY_VALUE,disabled:e||0===i.length,onChange:e=>{let t=e.target.value;n.setSelectedContractId(t===tf.SELECT_EMPTY_VALUE?null:t)},children:[0===i.length?(0,t.jsx)("option",{value:tf.SELECT_EMPTY_VALUE,children:"-"}):null,i.map((e,n)=>{let l,a,o,r,s,c,f,h;return l=e.serviceStartDate??"",a=e.serviceEndDate??"",o=e.status===oP.default.ACTIVE,r=d&&""!==l&&(0,nV.isFutureContractStart)(l),s=(0,oN.getTerminationLabel)(e),c=o?" [진행중]":r?" [재계약 중]":null!==s?` [${s}]`:"",f=""!==l&&""!==a?`${l.replaceAll("-",".")} ~ ${a.replaceAll("-",".")}`:"-",h=`${i.length-n}차 계약 (${f})${c}`,(0,t.jsx)("option",{value:e.id,children:h},e.id)})]})]})}),oB=l.default.div.withConfig({componentId:"zh__sc-4a58d4b2-0"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,oU=l.default.p.withConfig({componentId:"zh__sc-4a58d4b2-1"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
  text-align: center;
  white-space: nowrap;
`,oY=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-4a58d4b2-2"})`
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
`,oV=["본인 거부","기관 이동","사망","입원·시설 입소","기타"],oW=(0,n.observer)(function(){let e,[n,l]=(0,i.useState)(!1),[d,r]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),[f,h]=(0,i.useState)({key:"",date:"",isError:!1}),p=(0,i.useRef)(null),u=a.default.client.info.byClient,x=a.default.modal.clientCreate,{selectedClientId:g,selectedContract:m,currentServiceType:b}=u,j=u.contractsOfSelectedClient,_=u.selectedClient,w=null!==g&&null!==_,y=u.isContractDetailEditing,v=u.selectedContractDetailDraftContractStartDate,C=u.selectedContractDetailDraftContractEndDate,I=u.selectedContractDetailDraftTerminatedOn,z=u.selectedContractDetailDraftTerminationReason,T=u.selectedContractDetailDraftStatus,E=[m?.id??"",b??"",v??m?.contractStartDate??"",y?"editing":"readonly",T??m?.status??""].join("|"),S=f.key===E?f.date:"",k=m?.contractStartDate??"",D=w&&y&&(T??m?.status)===oP.default.TERMINATED&&null!==m&&null!==b&&nX(k,(0,nV.getTodayCalendarDateString)()).length>0&&(f.key!==E||f.isError);if((0,i.useEffect)(()=>{if(!w||!y||n||d||s)return;let e=e=>{let t=e.target;nH(t)||nG(t)||t instanceof Node&&null!==p.current&&p.current.contains(t)||u.cancelContractDetailEdit()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[u,w,y,n,d,s]),(0,i.useEffect)(()=>{let e=m?.id,t=m?.contractStartDate??"",n=m?.status??oP.default.ACTIVE,i=(T??n)===oP.default.TERMINATED;if(!w||!y||!i||void 0===e||null===b||!e0.default.is(t))return;let l=nX(t,(0,nV.getTodayCalendarDateString)());if(0===l.length)return;let a=!0;return(async()=>{let t=[...l].reverse();for(let n=0;n<t.length;n+=3){let i=await Promise.all(t.slice(n,n+3).map(e=>av.default.data.serviceProvision.getMonthlyStatus({serviceType:b,targetYearMonth:e})));if(!a)return;for(let[t,n]of i){if(null!==t||null===n)return void h({key:E,date:"",isError:!0});let i=function(e,t){let n=e.find(e=>e.contractId===t);if(void 0===n)return"";let i=(0,nV.getTodayCalendarDateString)();return n.cells.reduce((e,t)=>!1===t.isPending&&"PROVIDED"!==t.status||!e0.default.is(t.serviceDate)||i<t.serviceDate?e:!e0.default.is(e)||e<t.serviceDate?t.serviceDate:e,"")}(n.rows,e);if(e0.default.is(i))return void h({key:E,date:i,isError:!1})}}h({key:E,date:"",isError:!1})})(),()=>{a=!1}},[v,T,b,w,y,E,m?.contractStartDate,m?.id,m?.status]),!w||null===_)return(0,t.jsx)(rd,{children:"서비스를 선택한 뒤 이용자를 선택해 주세요."});let A=_.name,L=(0,oM.getServiceBadgeText)(b),$=m?.status??oP.default.ACTIVE,R=T??$,O=y?R:m?.status??"UNCONTRACTED",P=R===oP.default.COMPLETED,N=R===oP.default.TERMINATED,M=m?.contractStartDate??"",F=v??M,B=nW(F),U=m?.contractEndDate??"",Y=nW(C??U),V=nW(m?.serviceStartDate??""),W=m?.serviceEndDate??"",H=nW(W),G=(0,nV.getContractExpirationReminder)({contractStatus:R,contractEndDate:U,hasRenewingContract:(0,nV.hasRenewingContract)(j)}),K=!y&&null!==G,X=N?Y:H,q=m?.terminatedOn??(m?.status===oP.default.TERMINATED?m.contractEndDate:null)??"",Q=I??q,Z=z??m?.terminationReason??"",J=(0,nV.getTodayCalendarDateString)().replaceAll("-","."),ee=(e=(0,nV.getTodayCalendarDateString)(),e0.default.is(W)&&W<e?W:e),et=!e0.default.is(W)||(0,nV.getTodayCalendarDateString)()<W,ei=et?`오늘(${J})을 해지일로 해지합니다.`:`${nW(ee)}을 해지일로 해지합니다.`,el=`${nK(M)} ~ ${nK(U)}`,ea=(m?.serviceType??b)==="DISABILITY_ACTIVITY_SUPPORT",ed=m?.grade?.trim()??"",eo=m?.incomeCategory??"",er=""===ed?"-":ed.startsWith("SPECIAL")?`특례 ${ed.slice(7)}`.trim():ed.endsWith("구간")?ed:`${ed}구간`,es=""===eo?"-":eo in ty.default?ty.default[eo].label:eo,ec=""===ed?"-":ed.includes("등급")?ed:`${ed}등급`;return(0,t.jsxs)(oH,{ref:p,children:[(0,t.jsx)(oG,{children:(0,t.jsxs)(oK,{children:[(0,t.jsxs)(oX,{children:[(0,t.jsxs)(oq,{children:[(0,t.jsx)(oQ,{children:A}),(0,t.jsx)(oZ,{children:(0,t.jsx)(oJ,{children:L})}),y?(0,t.jsx)(ii,{children:"수정 진행중"}):null]}),!0===y?(0,t.jsxs)(ie,{children:[(0,t.jsxs)(it,{type:"button",onClick:()=>{u.cancelContractDetailEdit()},children:[(0,t.jsx)(i3.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(it,{type:"button",onClick:()=>{void 0===u.selectedContractDetailDraft?u.cancelContractDetailEdit():l(!0)},children:[(0,t.jsx)(lY.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(it,{type:"button",disabled:P,onClick:()=>{P||u.startContractDetailEdit()},children:[(0,t.jsx)(n1.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(o1,{children:[(0,t.jsxs)(o6,{children:[(0,t.jsx)(rn,{children:"계약 상태"}),(0,t.jsx)(o3,{children:(0,t.jsxs)(o9,{value:O,disabled:!y||null===m,onChange:e=>{let t=e.target.value;if((0,oP.isSelectableContractStatus)(t)&&t!==R){if(t===oP.default.TERMINATED)return void r(!0);if(t===oP.default.ACTIVE)return void c(!0);u.updateSelectedContractDetailDraftStatus(t)}},children:[null===m?(0,t.jsx)("option",{value:"UNCONTRACTED",children:"미계약"}):null,(0,t.jsx)("option",{value:oP.default.ACTIVE,children:"계약중"}),(0,t.jsx)("option",{value:oP.default.TERMINATED,children:y||null===m?"해지":(0,oN.getTerminationLabel)(m)??"해지"}),R===oP.default.COMPLETED?(0,t.jsx)("option",{value:oP.default.COMPLETED,children:"완료"}):null]})})]}),null===m?(0,t.jsxs)(rt,{type:"button",onClick:()=>{x.show("create",b??"MEAL",_),u.closeClientDetail(),u.setSelectedClientId(null)},children:[(0,t.jsx)(en.default.ContractEdit,{size:16}),"계약하기"]}):K?(0,t.jsxs)(re,{children:[null!==G?(0,t.jsx)(oO.default,{$color:G.color,children:(0,nV.formatContractExpirationLabel)(G.remainingDays)}):null,(0,t.jsxs)(rt,{type:"button",onClick:()=>{x.show("renew",m?.serviceType??"MEAL")},children:[(0,t.jsx)(en.default.ContractEdit,{size:16}),"재계약 하기"]})]}):null]}),(0,t.jsxs)(o2,{children:[(0,t.jsx)(oF,{disabled:y}),ea?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o6,{children:[(0,t.jsx)(rn,{children:"활동지원 구간"}),(0,t.jsx)(o8,{children:(0,t.jsx)(o7,{value:""===ed?tf.SELECT_EMPTY_VALUE:ed,disabled:!0,children:(0,t.jsx)("option",{value:""===ed?tf.SELECT_EMPTY_VALUE:ed,children:er})})})]}),(0,t.jsxs)(o6,{children:[(0,t.jsx)(rn,{children:"소득 유형"}),(0,t.jsx)(o8,{children:(0,t.jsx)(o7,{value:""===eo?tf.SELECT_EMPTY_VALUE:eo,disabled:!0,children:(0,t.jsx)("option",{value:""===eo?tf.SELECT_EMPTY_VALUE:eo,children:es})})})]})]}):(0,t.jsxs)(o6,{children:[(0,t.jsx)(rn,{children:"바우처 등급"}),(0,t.jsx)(o8,{children:(0,t.jsx)(o7,{value:""===ed?tf.SELECT_EMPTY_VALUE:ed,disabled:!0,children:(0,t.jsx)("option",{value:""===ed?tf.SELECT_EMPTY_VALUE:ed,children:ec})})})]})]}),(0,t.jsxs)(o0,{children:[(0,t.jsxs)(o6,{children:[(0,t.jsx)(rn,{children:"계약 기간"}),!0!==y||N?(0,t.jsx)(ri,{children:B}):(0,t.jsx)(o4,{children:(0,t.jsx)(o.default.Input.Date,{style:{width:180,height:28,paddingLeft:16,fontSize:16},value:F,readOnly:!1,isDateSelectable:e=>!e0.default.is(W)||e<=W,onChange:e=>{u.updateSelectedContractDetailDraftContractStartDate(e)},placeholder:"YYYY-MM-DD"})}),(0,t.jsx)(rl,{children:"~"}),(0,t.jsx)(ri,{children:X})]}),N&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ra,{}),(0,t.jsxs)(o6,{children:[(0,t.jsx)(rn,{children:"해지일"}),!0===y?(0,t.jsx)(o5,{children:(0,t.jsx)(o.default.Input.Date,{style:{width:180,height:28,paddingLeft:16,fontSize:16},value:Q,readOnly:!1,disabled:D,isDateSelectable:e=>!D&&!(e0.default.is(F)&&e<F||e0.default.is(S)&&e<S||e0.default.is(W)&&W<e),onChange:e=>{u.updateSelectedContractDetailDraftTerminatedOn(e)},placeholder:"YYYY-MM-DD"})}):(0,t.jsx)(ri,{children:nW(Q)})]}),(0,t.jsxs)(o6,{children:[(0,t.jsx)(rn,{children:"해지 사유"}),!0===y?(0,t.jsx)(o8,{children:(0,t.jsxs)(o7,{value:Z,onChange:e=>{u.updateSelectedContractDetailDraftTerminationReason(e.target.value)},children:[(0,t.jsx)("option",{value:"",children:"선택 안 함"}),oV.map(e=>(0,t.jsx)("option",{value:e,children:e},e)),""===Z||oV.includes(Z)?null:(0,t.jsx)("option",{value:Z,children:Z})]})}):(0,t.jsx)(ri,{children:""===Z?"-":Z})]})]}),!ea&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ra,{}),(0,t.jsxs)(o6,{children:[(0,t.jsx)(rn,{children:"서비스 기간"}),(0,t.jsx)(ri,{children:V}),(0,t.jsx)(rl,{children:"~"}),(0,t.jsx)(ri,{children:H})]})]})]})]})}),(0,t.jsx)(ac,{isOpen:n,title:"계약 정보를 저장할까요?",description:`수정된 정보는 연결된 서류의 자동입력 항목에 함께 반영됩니다.
이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다.`,cancelLabel:"취소하기",confirmLabel:"저장 및 모든 서류에 반영",onCancel:()=>{l(!1)},onConfirm:()=>{u.saveSelectedContractDetailDraft().then(e=>{!0===e&&l(!1)})}}),(0,t.jsx)(ac,{isOpen:d,title:et?"계약을 중도 해지 하시겠습니까?":"계약을 해지 하시겠습니까?",description:`${ei}
계약 종료일(예정일)은 그대로 남고, 해지일과 해지 사유는 저장 전에 고칠 수 있습니다.`,cancelLabel:"취소하기",confirmLabel:"변경하기",onCancel:()=>{r(!1)},onConfirm:()=>{u.updateSelectedContractDetailDraftContractStartDate(M),u.updateSelectedContractDetailDraftTerminatedOn(ee),u.updateSelectedContractDetailDraftStatus(oP.default.TERMINATED),r(!1)}}),(0,t.jsx)(ac,{isOpen:s,title:"계약중 상태로 되돌리시겠습니까?",description:`이전 계약 기간 (${el})으로 되돌리며, 해지에서 계약중으로 변경됩니다.
계약중일 시, 계약 시작일을 수정할 수 있으며 계약 종료일은 수정할 수 없습니다.`,cancelLabel:"취소하기",confirmLabel:"변경하기",onCancel:()=>{c(!1)},onConfirm:()=>{u.updateSelectedContractDetailDraftContractEndDate(W),u.updateSelectedContractDetailDraftStatus(oP.default.ACTIVE),c(!1)}})]})}),oH=l.default.div.withConfig({componentId:"zh__sc-a64f020c-0"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  min-height: 156px;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,oG=l.default.div.withConfig({componentId:"zh__sc-a64f020c-1"})`
  display: flex;
  gap: 24px;
  width: 100%;
`,oK=l.default.div.withConfig({componentId:"zh__sc-a64f020c-2"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  justify-content: center;

  min-width: 0;
`,oX=l.default.div.withConfig({componentId:"zh__sc-a64f020c-3"})`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-width: 0;
`,oq=l.default.div.withConfig({componentId:"zh__sc-a64f020c-4"})`
  display: flex;
  gap: 16px;
  align-items: center;
  min-width: 0;
`,oQ=l.default.div.withConfig({componentId:"zh__sc-a64f020c-5"})`
  font-size: 24px;
  font-weight: 700;
  line-height: 20px;
  color: #0a0a0a;
`,oZ=l.default.div.withConfig({componentId:"zh__sc-a64f020c-6"})`
  overflow: hidden;
  display: flex;
  gap: 4px;
  align-items: center;

  min-width: 0;
`,oJ=l.default.div.withConfig({componentId:"zh__sc-a64f020c-7"})`
  overflow: hidden;

  padding: 2px 12px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #0a0a0a;
  white-space: nowrap;
`,o0=l.default.div.withConfig({componentId:"zh__sc-a64f020c-8"})`
  display: flex;
  gap: 12px;
  align-items: center;
  min-width: 0;
`,o1=l.default.div.withConfig({componentId:"zh__sc-a64f020c-9"})`
  display: flex;
  gap: 16px;
  align-items: center;
  min-width: 0;
`,o2=l.default.div.withConfig({componentId:"zh__sc-a64f020c-10"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,o6=l.default.div.withConfig({componentId:"zh__sc-a64f020c-11"})`
  display: flex;
  gap: 8px;
  align-items: center;

  min-width: 0;

  font-size: 18px;
  line-height: 20px;
  color: #0a0a0a;
  white-space: nowrap;
`,o4=l.default.div.withConfig({componentId:"zh__sc-a64f020c-12"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,o5=l.default.div.withConfig({componentId:"zh__sc-a64f020c-13"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,o3=l.default.div.withConfig({componentId:"zh__sc-a64f020c-14"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,o9=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-a64f020c-15"})`
  width: 94px;
  height: 28px;
`,o8=l.default.div.withConfig({componentId:"zh__sc-a64f020c-16"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,o7=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-a64f020c-17"})`
  min-width: 94px;
  height: 28px;
`,re=l.default.div.withConfig({componentId:"zh__sc-a64f020c-18"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,rt=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-a64f020c-19"})`
  gap: 8px;
  padding: 0 16px;
`,rn=l.default.span.withConfig({componentId:"zh__sc-a64f020c-20"})`
  font-weight: 700;
`,ri=l.default.span.withConfig({componentId:"zh__sc-a64f020c-21"})`
  font-weight: 400;
`,rl=l.default.span.withConfig({componentId:"zh__sc-a64f020c-22"})`
  font-weight: 400;
`,ra=l.default.div.withConfig({componentId:"zh__sc-a64f020c-23"})`
  width: 1px;
  height: 24px;
  background: #e5e7eb;
`,rd=l.default.div.withConfig({componentId:"zh__sc-a64f020c-24"})`
  width: 100%;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;

  font-size: 14px;
  color: #6b7280;

  background: #fff;
`;var ro=e.i(7665);function rr(){return(rr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var rs=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",rr({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),i.default.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),i.default.createElement("polyline",{points:"21 15 16 10 5 21"}))});rs.propTypes={color:X.default.string,size:X.default.oneOfType([X.default.string,X.default.number])},rs.displayName="Image";let rc={badge:{label:"데이터 없음",color:"black"},action:{label:"파일 미첨부",color:"black"}};function rf(e){if(null==e)return rc;switch(e){case"WAITING_TO_LINK":return{badge:{label:"연동 대기",color:"lightBlue"},action:{label:"연동 대기중...",color:"blue",disabled:!0}};case"WAITING_TO_DRAFT":return{badge:{label:"작성 대기",color:"lightBlue"},action:{label:"서류 작성 시작하기",color:"blue"}};case"WAITING_TO_PRINT":return{badge:{label:"출력 대기",color:"blue"},action:{label:"초안 검토하기",color:"blue"}};case"NEED_UPDATE":return{badge:{label:"업데이트 필요",color:"orange"},action:{label:"수기 서류 업로드하기",color:"orange"}};case"NEED_MATCHING":return{badge:{label:"서류 대조",color:"orange"},action:{label:"수기 서류 업로드하기",color:"orange"}};case"LINKED_COMPLETED":return{badge:{label:"연동 완료",color:"orange",icon:(0,t.jsx)(en.default.WandShine,{size:16})},action:{label:"서류 최종 확인하기",color:"orange"}};case"COMPLETED":return{badge:{label:"전산 완료",color:"gray"},action:{label:"문서 확인하기",color:"indigo"}};default:return rc}}var rh=e.i(70888);let rp=(0,nq.default)((0,t.jsx)("path",{fillRule:"evenodd",d:"M4 11h16v2H4z"}),"HorizontalRule");function ru({status:e,onClick:n,disabled:i=!1}){return(0,t.jsx)(rx,{$status:e,$disabled:i,onClick:i?void 0:n,children:"checked"===e?(0,t.jsx)(lY.default,{sx:{fontSize:18}}):"indeterminate"===e?(0,t.jsx)(rp,{sx:{fontSize:20}}):null})}let rx=l.default.div.withConfig({componentId:"zh__sc-a3965854-0"})`
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
`;function rg(e,t){return 0===t||0===e?"unchecked":e===t?"checked":"indeterminate"}let rm=(0,n.observer)(function({template:e,isChecked:n,hasDocument:l,statusChangeToken:d,toggleSelectedTemplateId:o}){let{id:r,name:s,templateImagePath:c}=e,f=c?.[0]??null,h=a.default.client.info.byClient.docs.documentStatusByTemplateId.get(r)??null,p=a.default.client.info.byClient.docs.documentByTemplateId.get(r)??null,u=rf(h),x=l&&(0,rh.canSelectDocumentInList)(p?.displayStatus),{ref:g,fire:m}=eO(),b=(0,i.useRef)(d);return(0,i.useEffect)(()=>{if(d<=b.current){b.current=d;return}b.current=d,m()},[m,d]),(0,t.jsxs)(rv,{ref:g,children:[(0,t.jsx)(rC,{children:(0,t.jsx)(ru,{status:n?"checked":"unchecked",disabled:!x,onClick:()=>o(r)})}),(0,t.jsxs)(rI,{$color:u.badge.color,children:[u.badge.icon,u.badge.label]}),(0,t.jsx)(rz,{children:null!==f&&""!==f?(0,t.jsx)(ro.default,{src:f,width:210,height:297,style:{width:"auto",height:"90%",maxWidth:"90%",objectFit:"contain"},loading:"eager",alt:s}):(0,t.jsx)(rs,{size:40,color:"#D1D5DC"})}),(0,t.jsxs)(rT,{children:[(0,t.jsx)(rE,{children:(0,t.jsx)(rS,{children:s})}),(0,t.jsx)(rk,{$color:u.action.color,disabled:!0===u.action.disabled||"black"===u.action.color,onClick:()=>{if(null===p){"WAITING_TO_DRAFT"===h&&a.default.modal.documentView.openTemplateWithoutDocument(e.id);return}a.default.modal.documentView.open(p.id)},children:u.action.label})]})]})}),rb=(0,n.observer)(function(){let e=a.default.client.info.byClient.docs,n=e.selectedTemplateIdSet,{toggleSelectedTemplateId:i,addSelectedTemplateIds:l,removeSelectedTemplateIds:d}=e,o=e.documentByTemplateId;return null===a.default.client.info.byClient.selectedClientId?"no client selected":(0,t.jsx)(rj,{children:e.templateTypeGroups.map(a=>{let{type:r,typeLabel:s,templates:c}=a,f=c.map(e=>e.id),h=f.filter(e=>{let t;return null!==(t=o.get(e)??null)&&(0,rh.canSelectDocumentInList)(t.displayStatus)}),p=new Set(h),u=rg(f.filter(e=>n.has(e)).length,f.length),x=rg(h.filter(e=>n.has(e)).length,h.length);return(0,t.jsxs)(r_,{children:[(0,t.jsxs)(rw,{onClick:()=>{"checked"===x?d([...p]):l([...p])},children:[(0,t.jsx)(ru,{status:u}),"[",s,"]"]}),(0,t.jsx)(ry,{children:c.map(l=>{let{id:a}=l,d=n.has(a),r=o.get(a)??null;return(0,t.jsx)(rm,{template:l,isChecked:d,hasDocument:null!==r,statusChangeToken:e.getDocumentStatusChangeToken(a),toggleSelectedTemplateId:i},a)})})]},r)})})}),rj=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  min-height: 0;
`,r_=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-1"})`
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: flex-start;
  align-self: stretch;
`,rw=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-2"})`
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
`,ry=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-3"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: stretch;
  align-self: stretch;
`,rv=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-4"})`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 188px;
  height: 232px;
  border: 1px solid #d1d5dc;
  border-radius: 8px;

  background: #fff;
`,rC=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-5"})`
  position: absolute;
  top: 8px;
  left: 8px;
`,rI=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-6"})`
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
`,rz=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-7"})`
  overflow: hidden;
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  height: 140px;
  border-radius: 7px 7px 0 0;

  background: #f3f4f6;
`,rT=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-8"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,rE=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-9"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,rS=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-10"})`
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
`,rk=l.default.button.withConfig({componentId:"zh__sc-723cdbd7-11"})`
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
`;var rD=e.i(92091);let rA=(0,n.observer)(function(){var e,n;let i=a.default.client.info.byClient.docs,l=i.selectedTemplateIdSet,d=i.documentByTemplateId,o=Array.from(new Set(i.templates.map(e=>e.id))),r=o.filter(e=>{let t=d.get(e)??null;return null!==t&&(0,rh.canSelectDocumentInList)(t.displayStatus)}),s=(e=r.filter(e=>l.has(e)).length,0===(n=r.length)||0===e?"unchecked":e===n?"checked":"indeterminate"),c=o.length>0,f=o.filter(e=>l.has(e)).length;return(0,t.jsxs)(rL,{children:[(0,t.jsxs)(rR,{onClick:()=>{"checked"===s?i.removeSelectedTemplateIds(r):i.addSelectedTemplateIds(r)},children:[(0,t.jsx)(ru,{status:s}),"전체 선택하기"]}),(0,t.jsxs)(r$,{children:[(0,t.jsxs)(rO,{disabled:0===f,onClick:()=>void i.printSelectedTemplates(),children:[(0,t.jsx)(rD.default,{sx:{fontSize:16}}),"선택한 서류 출력하기"]}),(0,t.jsxs)(rO,{disabled:!c,onClick:()=>void i.printAllTemplates(),children:[(0,t.jsx)(rD.default,{sx:{fontSize:16}}),"전체 출력하기"]})]})]})}),rL=l.default.div.withConfig({componentId:"zh__sc-b979553a-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,r$=l.default.div.withConfig({componentId:"zh__sc-b979553a-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,rR=l.default.button.withConfig({componentId:"zh__sc-b979553a-2"})`
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
`,rO=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-b979553a-3"})`
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
`;function rP(){return(0,t.jsxs)(rN,{children:[(0,t.jsx)(rA,{}),(0,t.jsx)(rb,{})]})}let rN=l.default.div.withConfig({componentId:"zh__sc-5553a9a-0"})`
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
`,rM=(0,n.observer)(function(){let e=a.default.client.info.byClient,n=e.detailTab,l=e.setDetailTab,o=e.isClientDetailOpen;return((0,i.useEffect)(()=>{let t=e.selectedClientId,i=a.default.data.guardian.list.query;o&&"basic"===n&&null!==t&&i?.clientId===t&&a.default.data.guardian.list.refetch()},[n,e.selectedClientId,o]),o&&null!==e.selectedClientId)?(0,t.jsx)(d.default,{children:(0,t.jsxs)(rF,{children:[(0,t.jsxs)(rB,{children:[(0,t.jsx)(rU,{children:"이용자 상세보기"}),(0,t.jsxs)(rY,{type:"button",onClick:()=>{e.cancelUserInfoEdit(),e.cancelContractDetailEdit(),e.closeClientDetail(),e.setSelectedClientId(null)},children:[(0,t.jsx)(et.X,{size:16}),"닫기"]})]}),(0,t.jsx)(oW,{}),(0,t.jsxs)(rV,{children:[(0,t.jsx)(rW,{type:"button",$active:"basic"===n,onClick:()=>l("basic"),children:"기본정보"}),(0,t.jsx)(rW,{type:"button",$active:"contract"===n,onClick:()=>l("contract"),children:"계약정보"}),(0,t.jsx)(rW,{type:"button",$active:"docs"===n,onClick:()=>l("docs"),children:"서류관리"})]}),(0,t.jsx)(rH,{children:"basic"===n?(0,t.jsx)(ay,{}):"contract"===n?(0,t.jsx)(o$,{}):(0,t.jsx)(rP,{})})]})}):null}),rF=l.default.div.withConfig({componentId:"zh__sc-3cfc0852-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: 1050px;
  height: 90vh;
  border-radius: 8px;

  background: #fff;
`,rB=l.default.div.withConfig({componentId:"zh__sc-3cfc0852-1"})`
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
`,rU=l.default.h2.withConfig({componentId:"zh__sc-3cfc0852-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #101828;
  letter-spacing: -0.439px;
`,rY=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-3cfc0852-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,rV=l.default.div.withConfig({componentId:"zh__sc-3cfc0852-4"})`
  display: flex;
  align-self: flex-start;

  width: 100%;
  height: 56px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,rW=l.default.button.withConfig({componentId:"zh__sc-3cfc0852-5"})`
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
`,rH=l.default.div.withConfig({componentId:"zh__sc-3cfc0852-6"})`
  display: flex;
  flex: 1;
  min-height: 0;
`,rG=(0,nq.default)((0,t.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");function rK(){return(rK=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var rX=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",rK({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.default.createElement("polyline",{points:"19 12 12 19 5 12"}))});function rq(){return(rq=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}rX.propTypes={color:X.default.string,size:X.default.oneOfType([X.default.string,X.default.number])},rX.displayName="ArrowDown";var rQ=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",rq({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),i.default.createElement("polyline",{points:"5 12 12 5 19 12"}))});rQ.propTypes={color:X.default.string,size:X.default.oneOfType([X.default.string,X.default.number])},rQ.displayName="ArrowUp";var rZ=e.i(26546),rJ=e.i(71723),r0=e.i(25699);let r1=function({isOpen:e,missingItems:n,isProcessing:i=!1,onClickSecondary:l,onClickPrimary:a}){return e?(0,t.jsx)(r2,{children:(0,t.jsxs)(r6,{children:[(0,t.jsxs)(r4,{children:[(0,t.jsx)(r5,{children:"필수 입력 항목을 확인해주세요."}),(0,t.jsx)(r3,{children:"아래 항목이 입력되지 않았습니다."}),(0,t.jsx)(r9,{children:n.map(e=>(0,t.jsx)("li",{children:e.label},e.key))}),(0,t.jsx)(r3,{children:"입력하지 않고 나갈 시 작성한 내용이 저장되지 않습니다."})]}),(0,t.jsxs)(r8,{children:[(0,t.jsx)(r7,{type:"button",disabled:i,onClick:l,children:"저장하지 않고 나가기"}),(0,t.jsx)(se,{type:"button",disabled:i,onClick:a,children:"입력 항목 확인하기"})]})]})}):null},r2=l.default.div.withConfig({componentId:"zh__sc-615e692b-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,r6=l.default.div.withConfig({componentId:"zh__sc-615e692b-1"})`
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
`,r4=l.default.div.withConfig({componentId:"zh__sc-615e692b-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,r5=l.default.h3.withConfig({componentId:"zh__sc-615e692b-3"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,r3=l.default.p.withConfig({componentId:"zh__sc-615e692b-4"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,r9=l.default.ul.withConfig({componentId:"zh__sc-615e692b-5"})`
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
`,r8=l.default.div.withConfig({componentId:"zh__sc-615e692b-6"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`,r7=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-615e692b-7"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #4f39f6;
`,se=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-615e692b-8"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`;var st=e.i(28124),sn=e.i(43172);let si=e=>{if("radio"===e.uiProps.fieldType)return`radio:${e.uiProps.groupKey}`;let t=e.uiProps.triggerKeyScopes?.[st.default.SOURCE_REQUIRED_VALIDATION]?.trim();return void 0===t||""===t?`field:${e.page}:${e.fieldKey}`:`scope:${t}`},sl=function({isOpen:e,actionType:n,isProcessing:i=!1,onClickSecondary:l,onClickPrimary:a}){if(!e)return null;let d="move"===n,o=d?"이동":"닫기";return(0,t.jsx)(sa,{children:(0,t.jsxs)(sd,{children:[(0,t.jsxs)(so,{children:[(0,t.jsx)(sr,{children:"수정된 정보가 있습니다."}),(0,t.jsxs)(ss,{children:["지금 화면을 나가면 수정하신 내용이 저장되지 않습니다.",(0,t.jsx)("br",{}),`[저장하고 ${o}]${d?"을":"를"} 누르면 정보가 안전하게 저장됩니다.`]})]}),(0,t.jsxs)(sc,{children:[(0,t.jsx)(sf,{type:"button",disabled:i,onClick:l,children:`저장없이 ${d?"이동":"나가기"}`}),(0,t.jsx)(sh,{type:"button",disabled:i,onClick:a,children:`저장하고 ${o}`})]})]})})},sa=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,sd=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-1"})`
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
`,so=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,sr=l.default.h3.withConfig({componentId:"zh__sc-22c1af4d-3"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,ss=l.default.p.withConfig({componentId:"zh__sc-22c1af4d-4"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,sc=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-5"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`,sf=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-22c1af4d-6"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #4f39f6;
`,sh=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-22c1af4d-7"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`,sp=l.default.div.withConfig({componentId:"zh__sc-67d06bce-0"})`
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
`,su=l.default.div.withConfig({componentId:"zh__sc-67d06bce-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  padding: 16px;
`,sx=l.css`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 36px;
  padding: 8px;
`,sg=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-67d06bce-2"})`
  ${sx}
`,sm=l.default.div.withConfig({componentId:"zh__sc-67d06bce-3"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,sb=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-67d06bce-4"})`
  ${sx}
`,sj=l.default.div.withConfig({componentId:"zh__sc-67d06bce-5"})`
  align-self: stretch;
  height: 1px;
  background: #e5e7eb;
`,s_=l.default.div.withConfig({componentId:"zh__sc-67d06bce-6"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`,sw=[{key:"state1",index:"01",label:"청구 사유를 선택해주세요.",options:["option1","option2","option3","option4","option5","option6","option7"],optionLabels:{option1:"카드 미소지",option2:"카드 분실",option3:"카드 파손",option4:"시스템 오류",option5:"단말기 오류",option6:"사망",option7:"수술"}},{key:"state2",index:"02",label:"처리 현황을 선택해주세요.",options:["option1","option2"],optionLabels:{option1:"계약 종결",option2:"서비스 종료"}}],sy={state1:null,state2:null},sv={option1:"대상자 바우처 카드 미소지로 인하여 소급결제 진행하려 하였으나",option2:"대상자 바우처 카드 분실로 인하여 소급결제 진행하려 하였으나",option3:"대상자 바우처 카드 파손으로 인하여 소급결제 진행하려 하였으나",option4:"결제 시스템 오류로 인하여 소급결제 진행하려 하였으나",option5:"단말기 오류로 인하여 소급결제 진행하려 하였으나",option6:"대상자 사망으로 인하여 소급결제 진행하려 하였으나",option7:"대상자 수술로 인하여 소급결제 진행하려 하였으나"},sC={option1:"일상돌봄 식사영양서비스 계약종결됨에 따라 지원금이 소멸하여",option2:"일상돌봄 식사영양서비스 종료됨에 따라 지원금이 소멸하여"},sI=(e,t)=>e[t]??"",sz=(e,t,n)=>Math.min(n,Math.max(t,e)),sT=["boxSizing","fontFamily","fontSize","fontWeight","fontStyle","lineHeight","letterSpacing","textTransform","textIndent","textDecoration","wordSpacing","tabSize","paddingTop","paddingRight","paddingBottom","paddingLeft"],sE=(e,t,n,i=.08)=>{let l=sz(n,0,t.length),a=document.createElement("div"),d=document.createElement("span"),o=window.getComputedStyle(e);a.style.position="absolute",a.style.left="-99999px",a.style.top="0",a.style.visibility="hidden",a.style.pointerEvents="none",a.style.width=`${e.clientWidth}px`,a.style.whiteSpace="pre-wrap",a.style.overflowWrap="break-word",a.style.wordBreak="break-word",sT.forEach(e=>{a.style[e]=o[e]}),a.textContent=t.slice(0,l),d.textContent="​",a.appendChild(d),document.body.appendChild(a);let r=d.offsetTop;a.remove();let s=Math.max(e.scrollHeight-e.clientHeight,0);return sz(r-e.clientHeight*i,0,s)},sS=l.keyframes`
	from {
		transform: translateX(100%);
		opacity: 0;
	}

	to {
		transform: translateX(0);
		opacity: 1;
	}
`,sk=(0,l.default)(sp).withConfig({componentId:"zh__sc-1f96f242-0"})`
  will-change: transform, opacity;
  animation: ${sS} 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,sD=l.default.div.withConfig({componentId:"zh__sc-1f96f242-1"})`
  width: 36px;
  height: 36px;
`,sA=l.default.div.withConfig({componentId:"zh__sc-1f96f242-2"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 16px;
`,sL=l.default.div.withConfig({componentId:"zh__sc-1f96f242-3"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,s$=l.default.div.withConfig({componentId:"zh__sc-1f96f242-4"})`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,sR=l.default.div.withConfig({componentId:"zh__sc-1f96f242-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 0;
`,sO=l.default.div.withConfig({componentId:"zh__sc-1f96f242-6"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,sP=l.default.div.withConfig({componentId:"zh__sc-1f96f242-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,sN=l.default.div.withConfig({componentId:"zh__sc-1f96f242-8"})`
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
`,sM=l.default.div.withConfig({componentId:"zh__sc-1f96f242-9"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,sF=l.default.div.withConfig({componentId:"zh__sc-1f96f242-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,sB=l.default.button.withConfig({componentId:"zh__sc-1f96f242-11"})`
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
`,sU=l.default.div.withConfig({componentId:"zh__sc-1f96f242-12"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,sY=l.default.div.withConfig({componentId:"zh__sc-1f96f242-13"})`
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
`,sV=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-1f96f242-14"})`
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
`,sW=l.default.div.withConfig({componentId:"zh__sc-1f96f242-15"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
`,sH=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-1f96f242-16"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,sG=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-1f96f242-17"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;
`;var sK=e.i(8582);let sX=l.keyframes`
	from {
		transform: translateX(100%);
		opacity: 0;
	}

	to {
		transform: translateX(0);
		opacity: 1;
	}
`,sq=(0,l.default)(sp).withConfig({componentId:"zh__sc-c3e70251-0"})`
  will-change: transform, opacity;
  width: 634px;
  animation: ${sX} 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,sQ=l.default.div.withConfig({componentId:"zh__sc-c3e70251-1"})`
  width: 36px;
  height: 36px;
`,sZ=(0,l.default)(sb).withConfig({componentId:"zh__sc-c3e70251-2"})`
  width: 56px;
  height: 36px;
  border: 1px solid #4f39f6;
  border-radius: 4px;

  color: #4f39f6;
`,sJ=(0,l.default)(s_).withConfig({componentId:"zh__sc-c3e70251-3"})`
  min-height: 0;
`,s0=l.default.div.withConfig({componentId:"zh__sc-c3e70251-4"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  min-height: 0;
  padding: 16px;
`,s1=l.default.div.withConfig({componentId:"zh__sc-c3e70251-5"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,s2=l.default.div.withConfig({componentId:"zh__sc-c3e70251-6"})`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,s6=l.default.div.withConfig({componentId:"zh__sc-c3e70251-7"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,s4=l.default.div.withConfig({componentId:"zh__sc-c3e70251-8"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,s5=l.default.div.withConfig({componentId:"zh__sc-c3e70251-9"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,s3=l.default.div.withConfig({componentId:"zh__sc-c3e70251-10"})`
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
`,s9=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-c3e70251-11"})`
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
`,s8=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-c3e70251-12"})`
  height: 36px;
  padding: 8px 16px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
`,s7=l.default.div.withConfig({componentId:"zh__sc-c3e70251-13"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,ce=l.default.button.withConfig({componentId:"zh__sc-c3e70251-14"})`
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
`,ct=l.default.div.withConfig({componentId:"zh__sc-c3e70251-15"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,cn=l.default.div.withConfig({componentId:"zh__sc-c3e70251-16"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,ci=l.default.div.withConfig({componentId:"zh__sc-c3e70251-17"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,cl=l.default.div.withConfig({componentId:"zh__sc-c3e70251-18"})`
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
`,ca=l.default.div.withConfig({componentId:"zh__sc-c3e70251-19"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,cd=l.default.div.withConfig({componentId:"zh__sc-c3e70251-20"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,co=l.default.button.withConfig({componentId:"zh__sc-c3e70251-21"})`
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
`,cr=l.default.div.withConfig({componentId:"zh__sc-c3e70251-22"})`
  display: flex;
  flex: 0 0 auto;
  align-items: flex-end;
  justify-content: flex-end;

  width: 100%;
`,cs=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-c3e70251-23"})`
  height: 36px;
  padding: 8px 16px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
`,cc=l.default.div.withConfig({componentId:"zh__sc-c3e70251-24"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,cf=l.default.div.withConfig({componentId:"zh__sc-c3e70251-25"})`
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
`,ch=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-c3e70251-26"})`
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
`,cp=l.default.div.withConfig({componentId:"zh__sc-c3e70251-27"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
`,cu=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-c3e70251-28"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
`,cx=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-c3e70251-29"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
`,cg=[{key:"state1",index:"01",label:"영양 상태 — 이용자의 영양 변화 정도를 선택해주세요.",sentences:{positive:"☐ 영양 상태: 정기적이고 꾸준한 영양식 식사 제공 및 방문 관리를 밀착 모니터링한 결과, 영양 체크리스트 점수가 서비스 참여 전 대비 크게 향상되었으며 안색과 전반적인 신체 기력 상태가 매우 양호하게 개선되었습니다.",neutral:"☐ 영양 상태: 현재 제공받고 있는 모든 건강 식단에 비교적 안정적이고 매우 높은 순응도를 보이고 있으며, 저체중이나 기타 체중 감소 등의 기왕 병력 이전의 안정적인 건강 수치를 계속해서 유지하고 있습니다.",negative:"☐ 영양 상태: 최근 들어 식사 흡수 기능 저하를 자주 호소하시며 일일 섭취하는 식사량이 전보다 감소하셨음이 확인되었습니다. 식사 조절과 아울러 이에 대한 의료적 치료 등 병원의 조기 개입이 필요합니다."}},{key:"state2",index:"02",label:"식욕 상태 — 이용자의 식욕 변화 정도를 선택해주세요.",sentences:{positive:"☐ 식욕 상태: 식사 시간에 맞춰 스스로 음식을 찾으실 정도로 식욕이 크게 왕성해지셨으며, 제공되는 반찬과 밥을 남김없이 골고루 섭취하시어 전반적인 음식 섭취 순응도가 매우 높게 나타납니다.",neutral:"☐ 식욕 상태: 식사량이나 음식을 대하는 태도에 특별한 저하나 항진 없이 평소 수준을 그대로 유지하고 계십니다. 거부감 없이 매 끼니 적정량의 식사를 무난하게 마치시는 상태입니다.",negative:"☐ 식욕 상태: 일시적인 재원 변화나 체력 감소 등으로 극심한 우울감과 음식 거부 반응이 가끔 관찰되며, 이로 인해 신체 면역력 결핍 우려가 또한 생김에 따라 돌봄 과정이나 수행 다음 심리 유형을 수정할 필요가 있습니다."}},{key:"state3",index:"03",label:"상담·정서 상태 — 이용자의 심리·정서 변화 정도를 선택해주세요.",sentences:{positive:"☐ 상담·정서 상태: 정기적인 맞춤 상담 시나리오를 통해 정밀 분석 기법을 지속적으로 러닝한 결과, 기분이 좋고 전보다 웃음 가득한, 유쾌하고 우울감 없는 일상을 마주하고 계실뿐더러 감정이 정돈된 가장 이상적인 심리적 안정을 변함없이 나타내십니다.",neutral:"☐ 상담·정서 상태: 시기적(계절별/월별) 환경 변화 기능을 통하거나 매일매일 발생 및 부여되는 질문과 과제들에 대해 감정의 변화가 미미하며, 사회복지사 등 면담 평정 가이드라인에서 무난하고 일률적인 심리 현황을 보여주고 계십니다.",negative:"☐ 상담·정서 상태: 가끔 위축적 성향을 활발히 높은 빈도로, 신경 감정적 상태가 일어났으며 스스로 감정을 제어하는 등의 부여가 부족합니다. 정기적 상담을 연계하여 가장 신속히 지도가 반복적으로 이루어져야 할 필요성이 있습니다."}}],cm={state1:null,state2:null,state3:null},cb={positive:"긍정 변화 / 개선됨",neutral:"변화 없음 / 유지됨",negative:"부정적 변화 / 결과 요망"},cj=["positive","neutral","negative"],c_=(e,t,n)=>Math.min(n,Math.max(t,e)),cw=["boxSizing","fontFamily","fontSize","fontWeight","fontStyle","lineHeight","letterSpacing","textTransform","textIndent","textDecoration","wordSpacing","tabSize","paddingTop","paddingRight","paddingBottom","paddingLeft"],cy=(e,t,n,i=.08)=>{let l=c_(n,0,t.length),a=document.createElement("div"),d=document.createElement("span"),o=window.getComputedStyle(e);a.style.position="absolute",a.style.left="-99999px",a.style.top="0",a.style.visibility="hidden",a.style.pointerEvents="none",a.style.width=`${e.clientWidth}px`,a.style.whiteSpace="pre-wrap",a.style.overflowWrap="break-word",a.style.wordBreak="break-word",cw.forEach(e=>{a.style[e]=o[e]}),a.textContent=t.slice(0,l),d.textContent="​",a.appendChild(d),document.body.appendChild(a);let r=d.offsetTop;a.remove();let s=Math.max(e.scrollHeight-e.clientHeight,0);return c_(r-e.clientHeight*i,0,s)},cv=l.keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`,cC=(0,l.default)(sp).withConfig({componentId:"zh__sc-42312189-0"})`
  will-change: transform, opacity;
  animation: ${cv} 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,cI=l.default.div.withConfig({componentId:"zh__sc-42312189-1"})`
  width: 36px;
  height: 36px;
`,cz=l.default.div.withConfig({componentId:"zh__sc-42312189-2"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 16px;
`,cT=l.default.div.withConfig({componentId:"zh__sc-42312189-3"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,cE=l.default.div.withConfig({componentId:"zh__sc-42312189-4"})`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,cS=l.default.div.withConfig({componentId:"zh__sc-42312189-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 0;
`,ck=l.default.div.withConfig({componentId:"zh__sc-42312189-6"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,cD=l.default.div.withConfig({componentId:"zh__sc-42312189-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,cA=l.default.div.withConfig({componentId:"zh__sc-42312189-8"})`
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
`,cL=l.default.div.withConfig({componentId:"zh__sc-42312189-9"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,c$=l.default.div.withConfig({componentId:"zh__sc-42312189-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,cR=l.default.button.withConfig({componentId:"zh__sc-42312189-11"})`
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
`,cO=l.default.div.withConfig({componentId:"zh__sc-42312189-12"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,cP=l.default.div.withConfig({componentId:"zh__sc-42312189-13"})`
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
`,cN=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-42312189-14"})`
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
`,cM=l.default.div.withConfig({componentId:"zh__sc-42312189-15"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
`,cF=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-42312189-16"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,cB=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-42312189-17"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;
`;function cU(){return(cU=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var cY=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",cU({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),i.default.createElement("polyline",{points:"12 19 5 12 12 5"}))});cY.propTypes={color:X.default.string,size:X.default.oneOfType([X.default.string,X.default.number])},cY.displayName="ArrowLeft",(0,n.observer)(function({goBack:e,close:n,showToast:l}){let a=async e=>!1,[d,o]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),[r,s]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),c=(e,t)=>{o(n=>({...n,[e]:t})),s(t=>({...t,[e]:""}))},f=async()=>{let e=!0;""===d.name.trim()&&(s(e=>({...e,name:"필수 입력값입니다."})),e=!1),""===d.relation.trim()&&(s(e=>({...e,relation:"필수 입력값입니다."})),e=!1),""===d.phone.trim()&&(s(e=>({...e,phone:"필수 입력값입니다."})),e=!1),e&&await a({name:d.name,relation:d.relation,phone:d.phone,address:d.address})};return(0,t.jsxs)(sp,{children:[(0,t.jsxs)(su,{children:[(0,t.jsx)(sg,{onClick:e,children:(0,t.jsx)(cY,{size:16})}),(0,t.jsx)(sm,{children:"신규 보호자 추가"}),(0,t.jsx)(sb,{onClick:n,children:(0,t.jsx)(et.X,{size:16})})]}),(0,t.jsx)(sj,{}),(0,t.jsx)(s_,{children:(0,t.jsx)(cV,{children:(0,t.jsxs)(cW,{children:[(0,t.jsxs)(cH,{children:[(0,t.jsxs)(cG,{children:[(0,t.jsx)(cK,{children:"성명"}),(0,t.jsx)(cX,{type:"text",placeholder:"보호자 성명을 입력하세요.",value:d.name,onChange:e=>c("name",e.target.value),$error:""!==r.name}),(0,t.jsx)(cQ,{$show:""!==r.name,children:r.name})]}),(0,t.jsxs)(cG,{children:[(0,t.jsx)(cK,{children:"이용자와의 관계"}),(0,t.jsx)(cX,{type:"text",placeholder:"예: 자녀(딸), 자녀(아들), 자녀(며느리)",value:d.relation,onChange:e=>c("relation",e.target.value),$error:""!==r.relation}),(0,t.jsx)(cQ,{$show:""!==r.relation,children:r.relation})]}),(0,t.jsxs)(cG,{children:[(0,t.jsx)(cK,{children:"휴대폰"}),(0,t.jsx)(cX,{type:"tel",placeholder:"휴대폰을 입력해주세요.",value:d.phone,onChange:e=>c("phone",e.target.value),$error:""!==r.phone}),(0,t.jsx)(cQ,{$show:""!==r.phone,children:r.phone})]}),(0,t.jsxs)(cG,{children:[(0,t.jsx)(cK,{children:"주소"}),(0,t.jsx)(cq,{placeholder:"보호자 주소를 입력하세요.",value:d.address,onChange:e=>c("address",e.target.value),$error:""!==r.address,rows:2}),(0,t.jsx)(cQ,{$show:""!==r.address,children:r.address})]})]}),(0,t.jsxs)(cZ,{onClick:()=>void f(),children:[(0,t.jsx)(b.Check,{size:20}),"추가 후 계약서에 반영하기"]})]})})})]})});let cV=l.default.div.withConfig({componentId:"zh__sc-f12494e7-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px;
`,cW=l.default.div.withConfig({componentId:"zh__sc-f12494e7-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,cH=l.default.div.withConfig({componentId:"zh__sc-f12494e7-2"})`
  display: flex;
  flex-direction: column;
`,cG=l.default.div.withConfig({componentId:"zh__sc-f12494e7-3"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`,cK=l.default.label.withConfig({componentId:"zh__sc-f12494e7-4"})`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`,cX=l.default.input.withConfig({componentId:"zh__sc-f12494e7-5"})`
  padding: 8px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  font-size: 16px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: ${eu.default.style.color.PRIMARY[100]};
    outline: none;
  }

  ${({$error:e})=>!0===e&&l.css`
      border: 1px solid #ef4444;
    `}
`,cq=l.default.textarea.withConfig({componentId:"zh__sc-f12494e7-6"})`
  resize: none;

  padding: 8px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;

  font-size: 16px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: ${eu.default.style.color.PRIMARY[100]};
    outline: none;
  }

  ${({$error:e})=>!0===e&&l.css`
      border: 1px solid #ef4444;
    `}
`,cQ=l.default.div.withConfig({componentId:"zh__sc-f12494e7-7"})`
  display: flex;

  height: 24px;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 18px; /* 128.571% */
  color: #ef4444;

  visibility: ${({$show:e})=>!0===e?"visible":"hidden"};
`,cZ=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-f12494e7-8"})`
  display: flex;
  gap: 4px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,{PRIMARY:cJ}=((0,n.observer)(function({close:e,showToast:n}){let l=[],a=(void 0)??null,d=(0,i.useMemo)(()=>{let e=l??[];if(null===a)return e;let t=e.find(e=>e.uuid===a);return t?[t,...e.filter(e=>e.uuid!==a)]:e},[l,a]);return(0,t.jsx)(c0,{children:d.map(i=>(0,t.jsxs)(c1,{onClick:()=>{i.uuid,n(),e()},$selected:void 0===i.uuid,children:[(0,t.jsxs)(c2,{children:[(0,t.jsxs)(c6,{children:[(0,t.jsx)(c4,{children:`${i.name.family} ${i.name.given}`}),(0,t.jsx)(c5,{children:i.relation})]}),(0,t.jsxs)(c3,{children:[(0,t.jsxs)(c9,{children:[(0,t.jsx)(c8,{children:"휴대폰"}),(0,t.jsx)(c7,{}),(0,t.jsx)(c8,{children:i.phone.mobile??"-"})]}),(0,t.jsxs)(c9,{children:[(0,t.jsx)(c8,{children:"주소"}),(0,t.jsx)(c7,{}),(0,t.jsx)(c8,{children:i.address})]})]})]}),(0,t.jsx)(fe,{children:void 0===i.uuid?(0,t.jsx)(fn,{children:"지금 선택됨"}):(0,t.jsxs)(ft,{children:["선택",(0,t.jsx)(Q,{size:16})]})})]},i.uuid))})}),eu.default.style.color),c0=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-0"})`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  height: 729px;
  padding: 16px;

  background: #f9fafb;
`,c1=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-1"})`
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
`,c2=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-2"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,c6=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,c4=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-4"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,c5=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-5"})`
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
`,c3=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-6"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,c9=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,c8=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-8"})`
  min-width: 50px;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: left;
`,c7=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-9"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

  width: 1px;
  height: 20px;

  background: #e5e7eb;
`,fe=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-10"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  align-self: stretch;
  justify-content: center;
`,ft=l.default.button.withConfig({componentId:"zh__sc-3bbaa2f0-11"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: ${cJ[100]};
  letter-spacing: -1px;
`,fn=(0,l.default)(ft).withConfig({componentId:"zh__sc-3bbaa2f0-12"})`
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #fff;
  letter-spacing: -1px;

  background: #4f39f6;
`;var fi=e.i(5543);(0,n.observer)(function({setSelectedDrawerKey:e}){return(0,t.jsxs)(fa,{children:[(0,t.jsxs)(fd,{children:[(0,t.jsx)(en.default.Search,{size:17,color:"#9CA3AF"}),(0,t.jsx)(fo,{placeholder:"보호자 이름을 검색하세요.",value:"",onChange:e=>{e.target.value}})]}),(0,t.jsxs)(fr,{onClick:()=>e?.("add"),children:[(0,t.jsx)(fi.Plus,{size:18}),"신규 대리인(보호자) 추가하기"]})]})});let{PRIMARY:fl}=eu.default.style.color,fa=l.default.div.withConfig({componentId:"zh__sc-612601c-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px;
`,fd=l.default.div.withConfig({componentId:"zh__sc-612601c-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  height: 36px;
  padding: 8px 16px;
  border: 1px solid ${fl[100]};
  border-radius: 4px;

  background: #fff;
`,fo=l.default.input.withConfig({componentId:"zh__sc-612601c-2"})`
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
`,fr=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-612601c-3"})`
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
`,fs=function({value:e,onChange:n,onApply:l,onClose:a}){let[d,o]=(0,i.useState)(()=>{let t,n;return t=e.replace(/\s+/g," ").trim(),n={...sy},sw.forEach(e=>{let i=e.options.find(n=>{let i=sI(e.optionLabels,n),l="state1"===e.key?sv[n]:sC[n]??"";return""!==i&&t.includes(i)||""!==l&&t.includes(l)});n[e.key]=i??null}),n}),{ref:r,fire:s}=eO(),c=(0,i.useRef)(!1),f=(0,i.useRef)(0),h=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!c.current)return;let t=r.current;if(null!==t)if(null!==h.current){let e=Math.max(t.scrollHeight-t.clientHeight,0);t.scrollTop=sz(h.current,0,e),h.current=null}else t.scrollTop=sE(t,e,f.current);c.current=!1},[r,e]);let p=""!==e.trim(),u=Object.values(d).filter(e=>null!==e).length,x=u===sw.length;return(0,t.jsxs)(sk,{children:[(0,t.jsxs)(su,{children:[(0,t.jsx)(sD,{}),(0,t.jsx)(sm,{children:"자동으로 문장 생성하기"}),(0,t.jsx)(sb,{onClick:a,children:(0,t.jsx)(et.X,{size:16})})]}),(0,t.jsx)(sj,{}),(0,t.jsx)(s_,{children:(0,t.jsxs)(sA,{children:[(0,t.jsxs)(sL,{children:[(0,t.jsx)(tc.default,{sx:{fontSize:16}}),(0,t.jsx)(s$,{children:"각 카테고리와 세부 항목을 선택하면, 내용에 맞는 문장이 하단에 자동으로 생성됩니다."})]}),(0,t.jsx)(sR,{children:sw.map(i=>{let l=d[i.key];return(0,t.jsxs)(sO,{children:[(0,t.jsxs)(sP,{children:[(0,t.jsx)(sN,{children:i.index}),(0,t.jsx)(sM,{children:i.label})]}),(0,t.jsx)(sF,{children:i.options.map(a=>(0,t.jsxs)(sB,{type:"button",$selected:l===a,onClick:()=>((t,i)=>{let l=d[t];if(l===i){let n=r.current,i="state1"===t?sv[l]:sC[l]??"",a=""===i?-1:e.indexOf(i);null!==n&&a>=0&&(h.current=sE(n,e,a,.5))}else h.current=null;let a={...d,[t]:l===i?null:i};o(a);let p=(e=>{let t=e.state1,n=e.state2;if(null===t||null===n)return"";let i=sv[t],l=sC[n]??"";return""===i.trim()||""===l.trim()?"":`○ 대상자의 식사영양관리 서비스 비용 청구 기간 중 ${i} ${l} 이에 따라 예외지급을 청구합니다.`.trim()})(a);""!==p.trim()&&s(),f.current=((e,t,n)=>{if(""===n.trim())return 0;let i=t[e];if(null===i)return 0;let l="state1"===e?sv[i]:sC[i]??"",a=""===l?-1:n.indexOf(l);return a>=0?a:0})(t,a,p),c.current=!0,n(p)})(i.key,a),children:[sI(i.optionLabels,a),l===a&&(0,t.jsx)(lY.default,{sx:{fontSize:16}})]},`${i.key}-${a}`))})]},i.key)})}),(0,t.jsx)(sj,{style:{marginTop:"auto"}}),(0,t.jsxs)(sU,{children:[(0,t.jsxs)(sY,{children:[(0,t.jsx)(en.default.AI,{size:16,color:"#4f39f6"}),"자동 생성 문장"]}),(0,t.jsx)(sV,{ref:r,value:e,placeholder:"카테고리/키워드와 세부 상태를 선택하면 문서에 사용할 문장이 자동으로 생성됩니다.",readOnly:!0})]}),(0,t.jsxs)(sW,{children:[(0,t.jsx)(sH,{type:"button",onClick:()=>{o({...sy}),n("")},disabled:!p,children:"다시 생성하기"}),(0,t.jsxs)(sG,{type:"button",onClick:l,disabled:!(0===u||x),children:[(0,t.jsx)(lY.default,{sx:{fontSize:16}}),"보고서에 반영하기"]})]})]})})]})},fc=function({value:e,autoFilledReferenceValue:n,keywords:l,isKeywordListLoading:a,isKeywordCreating:d,isGenerating:o,onAddKeyword:r,onGenerate:s,onChange:c,onApply:f,onClose:h}){let{ref:p,fire:u}=eO(),[x,g]=(0,i.useState)(""),[m,b]=(0,i.useState)([]),[j,_]=(0,i.useState)({}),w=["POSITIVE","NEUTRAL","NEGATIVE"],y=m.filter(e=>l.includes(e)),v=""!==e.trim(),C=x.trim(),I=""!==C&&!1===d&&!1===a,z=y.every(e=>void 0!==j[e]),T=!1===a&&!1===o&&y.length>0&&z,E=""!==e&&e===n,S=async()=>{I&&(await r(C),g(""))},k=async()=>{if(!T)return;let e=y.reduce((e,t)=>{let n=j[t];return void 0===n||e.push({keyword:t,detailStatus:n}),e},[]),t=await s({selectedKeywordDetailStatuses:e});null!==t&&(""!==t.trim()&&u(),c(t))};return(0,t.jsxs)(sq,{children:[(0,t.jsxs)(su,{children:[(0,t.jsx)(sQ,{}),(0,t.jsx)(sm,{children:"자동으로 문장 생성하기"}),(0,t.jsx)(sZ,{onClick:h,children:(0,t.jsx)(et.X,{size:16})})]}),(0,t.jsx)(sj,{}),(0,t.jsx)(sJ,{children:(0,t.jsxs)(s0,{children:[(0,t.jsxs)(s6,{children:[(0,t.jsxs)(s4,{children:[(0,t.jsxs)(s1,{children:[(0,t.jsx)(tc.default,{sx:{fontSize:16}}),(0,t.jsx)(s2,{children:"각 키워드와 변화 정도를 선택한 후, [문장 생성하기] 버튼을 클릭해주세요. 키워드와 내용에 맞는 문장이 하단에 자동으로 생성됩니다."})]}),(0,t.jsxs)(s5,{children:[(0,t.jsxs)(s3,{children:[(0,t.jsx)(s9,{value:x,placeholder:"추가할 키워드를 입력해주세요. (예: 복지관 연계)",onChange:e=>{g(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),S())}}),(0,t.jsx)(s8,{type:"button",disabled:!I,onClick:()=>{S()},children:"새 키워드 추가"})]}),(0,t.jsx)(s7,{children:l.map(e=>(0,t.jsx)(ce,{type:"button",$selected:y.includes(e),onClick:()=>{b(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),_(t=>{if(!1===m.includes(e))return t;let n={...t};return delete n[e],n})},children:e},e))})]}),y.length>0?(0,t.jsx)(ct,{children:y.map((e,n)=>(0,t.jsxs)(cn,{children:[(0,t.jsxs)(ci,{children:[(0,t.jsx)(cl,{children:String(n+1).padStart(2,"0")}),(0,t.jsxs)(ca,{children:["[",e,"]에 대한 세부 상태를 선택해주세요."]})]}),(0,t.jsx)(cd,{children:w.map(n=>(0,t.jsx)(co,{type:"button",$selected:j[e]===n,onClick:()=>{_(t=>({...t,[e]:n}))},children:sK.default[n].label},`${e}:${n}`))})]},e))}):null]}),(0,t.jsx)(cr,{children:(0,t.jsx)(cs,{type:"button",disabled:!T,onClick:()=>{k()},children:"문장 생성하기"})})]}),(0,t.jsx)(sj,{style:{marginTop:"auto"}}),(0,t.jsxs)(cc,{children:[(0,t.jsxs)(cf,{children:[(0,t.jsx)(en.default.AI,{size:16,color:"#4f39f6"}),"자동 생성 문장"]}),(0,t.jsx)(ch,{$isAutoFilled:E,ref:p,value:e,placeholder:"카테고리/키워드와 세부 상태를 선택하면 문서에 사용할 문장이 자동으로 생성됩니다.",onChange:e=>{c(e.target.value)}})]}),(0,t.jsxs)(cp,{children:[(0,t.jsx)(cu,{type:"button",onClick:()=>{c(""),b([]),_({})},disabled:!v,children:"다시 생성하기"}),(0,t.jsxs)(cx,{type:"button",onClick:()=>{f()},children:[(0,t.jsx)(lY.default,{sx:{fontSize:16}}),"보고서에 반영하기"]})]})]})})]})},ff=function({value:e,onChange:n,onApply:l,onClose:a}){let d=(0,i.useMemo)(()=>{let t,n;return t=e.split("\n").map(e=>e.trim()).filter(e=>""!==e),n={...cm},cg.forEach(e=>{let i=cj.find(n=>t.includes(e.sentences[n]));n[e.key]=i??null}),n},[e]),{ref:o,fire:r}=eO(),s=(0,i.useRef)(!1),c=(0,i.useRef)(0),f=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!s.current)return;let t=o.current;if(null!==t)if(null!==f.current){let e=Math.max(t.scrollHeight-t.clientHeight,0);t.scrollTop=c_(f.current,0,e),f.current=null}else t.scrollTop=cy(t,e,c.current);s.current=!1},[o,e]);let h=""!==e.trim();return(0,t.jsxs)(cC,{children:[(0,t.jsxs)(su,{children:[(0,t.jsx)(cI,{}),(0,t.jsx)(sm,{children:"자동으로 문장 생성하기"}),(0,t.jsx)(sb,{onClick:a,children:(0,t.jsx)(et.X,{size:16})})]}),(0,t.jsx)(sj,{}),(0,t.jsx)(s_,{children:(0,t.jsxs)(cz,{children:[(0,t.jsxs)(cT,{children:[(0,t.jsx)(tc.default,{sx:{fontSize:16}}),(0,t.jsx)(cE,{children:"각 카테고리와 세부 항목을 선택하면, 내용에 맞는 문장이 하단에 자동으로 생성됩니다."})]}),(0,t.jsx)(cS,{children:cg.map(i=>{let l=d[i.key];return(0,t.jsxs)(ck,{children:[(0,t.jsxs)(cD,{children:[(0,t.jsx)(cA,{children:i.index}),(0,t.jsx)(cL,{children:i.label})]}),(0,t.jsx)(c$,{children:cj.map(a=>(0,t.jsxs)(cR,{type:"button",$selected:l===a,onClick:()=>((t,i)=>{let l=d[t];if(null!==l&&null===i){let n=o.current,i=cg.find(e=>e.key===t)?.sentences[l]??"",a=""===i?-1:e.indexOf(i);null!==n&&a>=0&&(f.current=cy(n,e,a,.5))}else f.current=null;let a={...d,[t]:i},h=cg.map(e=>{let t=a[e.key];return null===t?null:e.sentences[t]}).filter(e=>null!==e).join("\n\n");""!==h.trim()&&r(),c.current=((e,t,n)=>{if(""===n.trim())return 0;let i=t[e];if(null===i){let e=cg.findIndex(e=>null!==t[e.key]);if(e<0)return 0;let i=cg[e];if(void 0===i)return 0;let l=t[i.key];if(null===l)return 0;let a=i.sentences[l],d=n.indexOf(a);return d>=0?d:0}let l=cg.find(t=>t.key===e)?.sentences[i]??"",a=""===l?-1:n.indexOf(l);return a>=0?a:0})(t,a,h),s.current=!0,n(h)})(i.key,l===a?null:a),children:[cb[a],l===a&&(0,t.jsx)(lY.default,{sx:{fontSize:16}})]},`${i.key}-${a}`))})]},i.key)})}),(0,t.jsx)(sj,{style:{marginTop:"auto"}}),(0,t.jsxs)(cO,{children:[(0,t.jsxs)(cP,{children:[(0,t.jsx)(en.default.AI,{size:16,color:"#4f39f6"}),"자동 생성 문장"]}),(0,t.jsx)(cN,{ref:o,value:e,placeholder:"카테고리/키워드와 세부 상태를 선택하면 문서에 사용할 문장이 자동으로 생성됩니다.",readOnly:!0})]}),(0,t.jsxs)(cM,{children:[(0,t.jsx)(cF,{type:"button",onClick:()=>{n("")},disabled:!h,children:"다시 생성하기"}),(0,t.jsxs)(cB,{type:"button",onClick:l,children:[(0,t.jsx)(lY.default,{sx:{fontSize:16}}),"보고서에 반영하기"]})]})]})})]})};var fh=e.i(28095),fp=e.i(17106);function fu(e,t="서류 저장에 실패했습니다. 잠시 후 다시 시도해 주세요."){let n=e instanceof fp.HttpError&&0!==e.status?e.message:t;a.default.ui.layout.toast.error(n)}let fx=function({isOpen:e,contractId:n,onClose:l,onConfirm:a}){let[d,o]=(0,i.useState)("idle"),[r,s]=(0,i.useState)([]),[c,f]=(0,i.useState)("");(0,i.useEffect)(()=>{let t=!1;return e?((async()=>{if(null===n){if(t)return;o("error"),s([]),f("");return}if(t)return;o("loading");let[e,i]=await av.default.data.contractPayment.getDepositList({contractId:n});if(t)return;if(null!==e||null===i)return o("error");let l=i.slice().sort((e,t)=>{let n=t.depositDate.localeCompare(e.depositDate);return 0!==n?n:t.id.localeCompare(e.id)});s(l),f(l[0]?.id??""),o("success")})(),()=>{t=!0}):()=>{t=!0}},[n,e]);let h=(0,i.useMemo)(()=>r.find(e=>e.id===c)??null,[r,c]);return e?(0,t.jsx)(fg,{children:(0,t.jsxs)(fm,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(fb,{children:[(0,t.jsx)(fj,{children:"본인부담금 영수증을 작성할 입금 내역을 선택해주세요."}),(0,t.jsx)(f_,{children:"아래 선택한 입금 내역이 본인부담금 영수증에 반영되며, 반영 이후에도 자유롭게 수정할 수 있습니다."}),(0,t.jsxs)(fw,{children:[(0,t.jsx)(fy,{children:"입금 내역"}),"success"===d&&r.length>0?(0,t.jsx)(fv,{value:c,onChange:e=>{f(e.target.value)},children:r.map(e=>{var n;return(0,t.jsx)("option",{value:e.id,children:`${function(e){let t=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(null===t)return e;let[,n,i,l]=t;return`${n}년 ${i}월 ${l}일`}(e.depositDate)} - ${(n=e.amount,`${Math.max(0,Math.floor(n)).toLocaleString("ko-KR")}원`)} 입금`},e.id)})}):(0,t.jsx)(fv,{value:"",disabled:!0,children:(0,t.jsx)("option",{value:"",children:"loading"===d?"입금 내역을 불러오는 중입니다.":"error"===d?"입금 내역을 불러오지 못했습니다.":"선택 가능한 입금 내역이 없습니다."})})]}),"error"===d?(0,t.jsx)(fC,{children:"잠시 후 다시 시도해 주세요."}):null]}),(0,t.jsxs)(fI,{children:[(0,t.jsx)(fz,{type:"button",onClick:l,children:"취소하기"}),(0,t.jsx)(fT,{type:"button",disabled:"loading"===d,onClick:()=>{"loading"!==d&&a(h)},children:"success"===d&&0===r.length?"내역 없이 작성하기":"내역 반영하기"})]})]})}):null},fg=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 48%);
`,fm=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-1"})`
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
`,fb=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 453px;
`,fj=l.default.h3.withConfig({componentId:"zh__sc-8efbebf8-3"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,f_=l.default.p.withConfig({componentId:"zh__sc-8efbebf8-4"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,fw=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-5"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  width: 100%;
`,fy=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,fv=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-8efbebf8-7"})`
  flex: 1;
  height: 36px;
`,fC=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-8"})`
  display: flex;
  align-items: center;

  min-height: 20px;

  font-size: 16px;
  line-height: 20px;
  color: #6b7280;
`,fI=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-9"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,fz=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-8efbebf8-10"})`
  height: 36px;
  padding: 8px 14px;
`,fT=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-8efbebf8-11"})`
  height: 36px;
  padding: 8px 14px;
`,fE="__preview__",fS=(e,t)=>e?.includes(t)===!0,fk=e=>fS(e,st.default.TARGET_COPAYMENT_RECEIPT_AMOUNT)||fS(e,"COPAYMENT_RECEIPT_AMOUNT"),fD=e=>fS(e,st.default.TARGET_COPAYMENT_RECEIPT_RECEIVED_DATE)||fS(e,"COPAYMENT_RECEIPT_RECEIVED_DATE"),fA=(0,n.observer)(function(){let e=a.default.modal.documentView,n=e.clientContractId,l=a.default.data.docs.list.query?.contractId??null,[d,o]=(0,i.useState)(""),[r,s]=(0,i.useState)(null),[c,f]=(0,i.useState)(!1),[h,p]=(0,i.useState)(!1),[u,x]=(0,i.useState)(!1),g=(0,i.useRef)(null),m=e.selectedTemplateId,b=e.selectedTemplate,j=null===e.selectedDocumentId&&null!==m,_=(0,i.useMemo)(()=>null===m?[]:e.documents.flatMap(e=>{let t=e.id;return e.templateId!==m||null===t?[]:[{...e,id:t}]}).sort((e,t)=>{let n=t.occurrenceKey.localeCompare(e.occurrenceKey);return 0!==n?n:t.createdAt.localeCompare(e.createdAt)}),[e.documents,m]),w=(0,i.useMemo)(()=>_[0]?.id??"",[_]),y=(0,i.useMemo)(()=>{if(j)return fE;let t=e.selectedDocumentId;return"string"==typeof t&&_.some(e=>e.id===t)?t:_.some(e=>e.id===d)?d:w},[_,w,j,e.selectedDocumentId,d]),v=_.some(e=>"COMPLETED"!==e.displayStatus),C=null!==b&&"MANUAL"===b.creationMode&&!1===v,I=e.hasSelectedTemplatePreviewSession,z=e.hasSelectedFieldChanges,T=e.selectedTemplateFields.some(e=>{let t=e.uiProps.triggerKeys;return fS(t,st.default.COPAYMENT_RECEIPT_TRANSACTION_NUMBER)||fk(t)||fD(t)});(0,i.useEffect)(()=>{let t=g.current;if(null===t||e.selectedTemplateId!==t.templateId)return;let n=e.selectedTemplateFields;if(0===n.length)return;let i=n.filter(e=>fk(e.uiProps.triggerKeys)),l=n.filter(e=>fD(e.uiProps.triggerKeys));if(0===i.length&&0===l.length){g.current=null;return}i.forEach(n=>{e.updateSelectedFieldValue({page:n.page,fieldKey:n.fieldKey,value:t.amountText})}),l.forEach(n=>{e.updateSelectedFieldValue({page:n.page,fieldKey:n.fieldKey,value:t.receivedDate})}),g.current=null},[e,e.selectedTemplateFields]);let E=t=>{if(t===fE){null!==m&&e.openTemplateWithoutDocument(m);return}e.open(t)},S=async()=>{if(null!==r&&!h){p(!0);try{let t=await e.saveSelectedFieldChanges();if(null===t)return;E(r),s(null),f(!1)}catch(e){fu(e)}finally{p(!1)}}};return(0,t.jsxs)(fL,{children:[(0,t.jsxs)(f$,{children:[(0,t.jsxs)(fR,{children:[(0,t.jsx)(en.default.Ballot,{size:16}),"서류 목록"]}),(0,t.jsxs)(fP,{disabled:!C,onClick:()=>void(()=>{if(C&&null!==m){if(T)return x(!0);e.openTemplateWithoutDocument(m)}})(),children:[(0,t.jsx)(fh.default,{sx:{fontSize:20}}),"새 서류 생성하기"]})]}),(0,t.jsxs)(fO,{value:y,onChange:e=>{let t=e.target.value;if(o(t),t!==y){if(z){s(t),f(!0);return}E(t)}},disabled:0===_.length&&!1===I,children:[I?(0,t.jsx)("option",{value:fE,children:"새 서류 미리보기 (저장 전)"}):null,_.map(e=>{let n=rf(e.displayStatus),i=function(e){if(!nY.default.yearMonth.is(e))return null;let[t,n]=e.split("-"),i=Number(n);return!Number.isInteger(i)||i<1||i>12?null:`${t}년 ${i}월`}(e.occurrenceKey)??function(e){let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let n=new Map(new Intl.DateTimeFormat("ko-KR",{timeZone:"Asia/Seoul",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(t).map(e=>[e.type,e.value])),i=n.get("year")??"0000",l=n.get("month")??"00",a=n.get("day")??"00",d=n.get("hour")??"00",o=n.get("minute")??"00",r=n.get("second")??"00";return`${i}년 ${l}월 ${a}일 (${d}:${o}:${r}) 생성됨`}(e.createdAt);return(0,t.jsx)("option",{value:e.id,"data-badge":n.badge.label,"data-badge-tone":n.badge.color,children:i},e.id)})]}),(0,t.jsx)(sl,{isOpen:c,actionType:"move",isProcessing:h,onClickSecondary:()=>{null===r||(e.discardSelectedFieldChanges(),E(r),s(null)),f(!1)},onClickPrimary:()=>{S()}}),(0,t.jsx)(fx,{isOpen:u,contractId:n??l,onClose:()=>{x(!1)},onConfirm:t=>{if(null===m)return void x(!1);if(null===t){x(!1),e.openTemplateWithoutDocument(m);return}g.current={templateId:m,amountText:String(Math.max(0,Math.floor(t.amount))),receivedDate:t.depositDate},x(!1),e.openTemplateWithoutDocument(m)}})]})}),fL=l.default.div.withConfig({componentId:"zh__sc-70c07d1f-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px 12px;
  border: 1px solid #d8dee7;
  border-radius: 8px;

  background: #fcfdff;
`,f$=l.default.div.withConfig({componentId:"zh__sc-70c07d1f-1"})`
  display: flex;
  justify-content: space-between;
  width: 100%;
`,fR=l.default.div.withConfig({componentId:"zh__sc-70c07d1f-2"})`
  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
`,fO=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-70c07d1f-3"})`
  width: 100%;
`,fP=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-70c07d1f-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,fN=(0,n.observer)(function(){let{selectedOcrFile:e,isOcrAnalyzing:n,isUncreatedMonthlyScheduleDocument:i,monthlyScheduleYearMonth:l,monthlyScheduleClientContractId:d,analyzeSelectedOcrFile:o,clearSelectedOcrFile:r}=a.default.modal.documentView;return(0,t.jsxs)(fM,{children:[(0,t.jsxs)(fU,{disabled:null===e||n||i&&(null===l||null===d),onClick:()=>{o()},children:["분석 시작",(0,t.jsx)(Q,{size:16})]}),null!==e&&(0,t.jsx)(fB,{onClick:()=>{r()},children:"취소"})]})}),fM=l.default.div.withConfig({componentId:"zh__sc-11817043-0"})`
  display: flex;
  flex-flow: row-reverse;
  gap: 10px;
  align-self: stretch;
  justify-content: space-between;
`,fF=l.css`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,fB=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-11817043-1"})`
  ${fF}
  visibility: hidden;
`,fU=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-11817043-2"})`
  ${fF}
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:fY}=ei.default.file,fV=(0,n.observer)(function(){var e;let n,{selectedOcrFile:i,isOcrAnalyzing:l,clearSelectedOcrFile:d}=a.default.modal.documentView;if(null===i)return null;let o=-1===(n=(e=i.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(fW,{children:(0,t.jsxs)(fH,{children:[(0,t.jsxs)(fG,{children:[(0,t.jsx)(fK,{children:fY.IMAGE.some(e=>e===o)?(0,t.jsx)(en.default.Photo,{size:17,color:"#FA8E43"}):fY.AUDIO.some(e=>e===o)?(0,t.jsx)(en.default.SpeechToText,{size:17,color:"#A855F7"}):fY.DOCUMENT.some(e=>e===o)?(0,t.jsx)(en.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(fX,{children:(0,t.jsx)(fq,{children:i.name})})]}),(0,t.jsxs)(fQ,{onClick:d,disabled:l,children:["삭제",(0,t.jsx)(et.X,{size:16})]})]},`${i.name}-${i.size}-${i.lastModified}`)})}),fW=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-0"})`
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
`,fH=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,fG=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,fK=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,fX=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,fq=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,fQ=l.default.button.withConfig({componentId:"zh__sc-4e7cda26-6"})`
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
`;function fZ(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(fJ,{children:(0,t.jsx)(f0,{$progress:e})})}let fJ=l.default.div.withConfig({componentId:"zh__sc-c9208651-0"})`
  overflow: hidden;
  display: flex;
  align-self: stretch;

  width: 100%;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,f0=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-c9208651-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,f1=(0,n.observer)(function({disabled:e}){let{isWindowFileDragging:n}=a.default.ui.layout,{selectedOcrFile:i,isOcrFileError:l,isOcrAnalyzing:d}=a.default.modal.documentView,o=l?"지원하지 않는 파일 형식입니다.":!e&&n?"파일을 여기에 놓으면 업로드 됩니다.":d?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.";return(0,t.jsxs)(f6,{children:[null===i&&!l&&(0,t.jsx)(f4,{children:(0,t.jsx)(ep.Upload,{size:26,color:e?"#9ca3af":f2[100]})}),(0,t.jsxs)(f5,{children:[(0,t.jsx)(f3,{$disabled:e,$isError:l,children:o}),(0,t.jsx)(f9,{$disabled:e,children:null===i||d?"지원 파일 형식: 사진 이미지":"새 파일을 업로드하면 기존 파일이 교체됩니다."})]}),d&&(0,t.jsx)(fZ,{})]})}),{PRIMARY:f2}=eu.default.style.color,f6=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,f4=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,f5=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,f3=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-3"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e,$isError:t})=>t?"#ff4d4f":e?"#9ca3af":"#4f39f6"};
  text-align: center;
`,f9=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e})=>e?"#9ca3af":"#99a1af"};
`,f8=ei.default.file.FILE_EXTENSION_WHITELIST_BY_GROUP.IMAGE.join(","),f7=(0,n.observer)(function(){let{isWindowFileDragging:e}=a.default.ui.layout,n=a.default.modal.documentView,{selectedDocumentDisplayStatus:l,selectedOcrFile:d,isOcrFileError:o}=n,r=(0,i.useRef)(null),s=!n.isOcrSupported||"WAITING_TO_DRAFT"!==l&&"NEED_UPDATE"!==l&&"NEED_MATCHING"!==l,c=e=>{n.setSelectedOcrFile(e)};return(0,K.default)(e=>{if(s)return;let t=e[0];void 0!==t&&c(t)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(he,{ref:r,type:"file",accept:f8,disabled:s,onChange:e=>{if(s)return;let t=Array.from(e.target.files??[]);if(0===t.length)return;let n=t[0];void 0!==n&&(c(n),e.target.value="")}}),(0,t.jsxs)(ht,{$isWindowFileDragging:e,$disabled:s,onDragOver:e=>{if(e.preventDefault(),s)return},onDrop:e=>{if(e.preventDefault(),s)return;let t=Array.from(e.dataTransfer.files);if(0===t.length)return;let n=t[0];void 0!==n&&c(n)},onClick:e=>{!s&&e.target instanceof HTMLElement&&(e.target.closest("button")||r.current?.click())},$isError:o,children:[null!==d&&(0,t.jsx)(fV,{}),(0,t.jsx)(f1,{disabled:s}),(0,t.jsx)(fN,{})]})]})}),he=l.default.input.withConfig({componentId:"zh__sc-c05f4a71-0"})`
  display: none;
`,ht=l.default.div.withConfig({componentId:"zh__sc-c05f4a71-1"})`
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
`,hn=(0,n.observer)(function(){let{isOcrAnalyzing:e,monthlyScheduleYearMonth:n,monthlyScheduleClientContractId:i,setMonthlyScheduleYearMonth:l,setMonthlyScheduleClientContractId:d}=a.default.modal.documentView,r=a.default.modal.serviceWorkerDetail.serviceWorker?.assignedContracts??[];return(0,t.jsxs)(hi,{children:[(0,t.jsxs)(hl,{children:[(0,t.jsx)(ha,{children:"년월"}),(0,t.jsx)(o.default.Input.Date,{style:{textAlign:"center",height:"100%"},value:n??"",valueType:"year-month",readOnly:e,pickerOptions:{hideDate:!0},onChange:l})]}),(0,t.jsxs)(hl,{children:[(0,t.jsx)(ha,{children:"이용자 계약"}),(0,t.jsxs)(hd,{value:i??"",disabled:e||0===r.length,onChange:e=>{d(e.target.value||null)},children:[(0,t.jsx)("option",{value:"",children:"이용자 계약 선택"}),r.map(e=>(0,t.jsx)("option",{value:e.contractId,children:null===e.contractEndDate?e.clientName:`${e.clientName} (${e.contractEndDate.replaceAll("-",".")})`},[e.contractId,e.clientName,e.clientBirthDate??"",e.contractEndDate??"",e.status].join(":")))]})]})]})}),hi=l.default.div.withConfig({componentId:"zh__sc-42463ee-0"})`
  display: grid;
  grid-template-columns: 136px minmax(0, 1fr);
  gap: 10px;
  align-self: stretch;
`,hl=l.default.label.withConfig({componentId:"zh__sc-42463ee-1"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,ha=l.default.span.withConfig({componentId:"zh__sc-42463ee-2"})`
  font-size: 12px;
  font-weight: 700;
  color: #494f53;
`,hd=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-42463ee-3"})`
  width: 100%;
  height: 32px;
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:ho}=ei.default.file,hr=(0,n.observer)(function(){var e;let n,l=a.default.modal.documentView,{analyzedOcrFile:d,selectedDocumentDisplayStatus:o}=l,{ref:r,fire:s}=eO(),c=!l.isOcrSupported||"WAITING_TO_DRAFT"!==o&&"NEED_UPDATE"!==o&&"NEED_MATCHING"!==o;if((0,i.useEffect)(()=>{null!==d&&s()},[d,s]),c||null===d)return null;let f=-1===(n=(e=d.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(hs,{ref:r,children:[(0,t.jsxs)(hc,{children:[(0,t.jsxs)(hf,{children:[(0,t.jsx)(en.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(hh,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{})]})]}),(0,t.jsxs)(hp,{children:[(0,t.jsxs)(hu,{children:[(0,t.jsx)(en.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(hx,{children:(0,t.jsxs)(hg,{children:[(0,t.jsxs)(hm,{children:[(0,t.jsx)(hb,{children:ho.IMAGE.some(e=>e===f)?(0,t.jsx)(en.default.Photo,{size:17,color:"#FA8E43"}):ho.AUDIO.some(e=>e===f)?(0,t.jsx)(en.default.SpeechToText,{size:17,color:"#A855F7"}):ho.DOCUMENT.some(e=>e===f)?(0,t.jsx)(en.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(hj,{children:(0,t.jsx)(h_,{children:d.name})})]}),(0,t.jsx)(hw,{children:"추출 완료"})]},`${d.name}-${d.size}-${d.lastModified}`)})]})]})}),hs=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-0"})`
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
`,hc=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,hf=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,hh=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-3"})`
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
`,hp=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,hu=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,hx=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-6"})`
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
`,hg=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 359px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,hm=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,hb=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,hj=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-10"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,h_=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,hw=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-12"})`
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
`,hy=(0,n.observer)(function(){let{analyzedOcrFile:e,isUncreatedMonthlyScheduleDocument:n}=a.default.modal.documentView;return(0,t.jsxs)(hv,{children:[(0,t.jsx)(f7,{}),n?(0,t.jsx)(hn,{}):null,null!==e&&(0,t.jsx)(hr,{})]})}),hv=l.default.div.withConfig({componentId:"zh__sc-b3f3f20d-0"})`
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
`,hC=l.default.div.withConfig({componentId:"zh__sc-80a26ee5-0"})`
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
`;function hI(e){if(null==e||""===e.trim())return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return"-";let n=String(t.getFullYear()),i=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0"),a=String(t.getHours()).padStart(2,"0"),d=String(t.getMinutes()).padStart(2,"0");return`${n}-${i}-${l} ${a}:${d}`}let hz=(0,n.observer)(function(){let e=a.default.modal.documentView,n=e.isClientMode,i=e.clientContractId,l=(a.default.data.contract.list.data??[]).find(e=>e.id===i)??null,d=n?hI(l?.client.createdAt??l?.createdAt):hI(e.selectedDocument?.createdAt),o=l?.client.name??"-",r=a.default.modal.serviceWorkerDetail.serviceWorker?.name??"-",s=n?`이용자 ${o}님의 기존 이용 내역과 갱신된 요금 정보가 성공적으로 양식에 매핑되었습니다.`:`제공인력 ${r}님의 계약/서류 정보가 현재 양식에 반영되었습니다.`;return(0,t.jsx)(hT,{children:(0,t.jsxs)(hE,{children:[(0,t.jsxs)(hS,{children:[(0,t.jsx)(hk,{children:(0,t.jsxs)(hD,{children:[(0,t.jsx)(hC,{$status:"done",children:(0,t.jsx)(b.Check,{size:12,color:"#ffffff",strokeWidth:3})}),n?"기존 이용자 정보 연동 완료":"제공인력 서류 데이터 반영 완료"]})}),(0,t.jsx)(hA,{children:(0,t.jsx)(hL,{children:`${n?"업로드 일시":"문서 생성 일시"}: ${d}`})})]}),(0,t.jsx)(h$,{children:(0,t.jsx)(hR,{children:s})})]})})}),hT=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-0"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,hE=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-1"})`
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
`,hS=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,hk=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-3"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,hD=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
`,hA=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding-left: 24px;
`,hL=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-6"})`
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
`,h$=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-7"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding-left: 24px;
`,hR=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-8"})`
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
`,hO=(0,n.observer)(function(){let e=a.default.modal.documentView,{selectedTemplate:n}=e,i=e.isClientMode,l=n?.creationMode==="MANUAL",d=null===n?0:e.documents.filter(e=>e.templateId===n.id).length,o=i&&(l||null!==n&&d>=2);return(0,t.jsxs)(hP,{children:[(0,t.jsx)(hN,{children:(0,t.jsx)(hM,{children:n?.name??"계약서 자동 생성"})}),(0,t.jsxs)(hF,{children:[o?(0,t.jsx)(fA,{}):null,null!==e.selectedDocument?(0,t.jsx)(hz,{}):null,(0,t.jsx)(hy,{})]})]})}),hP=l.default.div.withConfig({componentId:"zh__sc-61494f9e-0"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-between;

  width: 541px;
  border-right: 1px solid #e5e7eb;

  background: #fff;
`,hN=l.default.div.withConfig({componentId:"zh__sc-61494f9e-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,hM=l.default.div.withConfig({componentId:"zh__sc-61494f9e-2"})`
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
`,hF=l.default.div.withConfig({componentId:"zh__sc-61494f9e-3"})`
  overflow-y: auto;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  min-height: 0;
  padding: 16px 12px;
`,hB=function(e){return(0,t.jsxs)(hU,{children:[(0,t.jsx)(hY,{children:"오른쪽에서 년월을 선택하면 실제 제공일 리스트가 채워집니다."}),(0,t.jsx)(o.default.Input.Date,{value:e.value,valueType:"year-month",readOnly:e.disabled,pickerOptions:{hideDate:!0},style:{width:136,height:28,textAlign:"center"},onChange:t=>{e.onChangeYearMonth(t)}}),null!==e.errorMessage?(0,t.jsx)(hV,{children:e.errorMessage}):null]})},hU=l.default.div.withConfig({componentId:"zh__sc-698d13d5-0"})`
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
`,hY=l.default.div.withConfig({componentId:"zh__sc-698d13d5-1"})`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`,hV=l.default.div.withConfig({componentId:"zh__sc-698d13d5-2"})`
  font-size: 12px;
  line-height: 18px;
  color: #dc2626;
`;var hW=e.i(47088),hH=e.i(69477),hG=e.i(68339);function hK({documentName:e,isDeleting:n,onCancel:i,onConfirm:l}){return(0,t.jsx)(hX,{role:"dialog","aria-modal":"true","aria-label":"서류 삭제",onClick:()=>{n||i()},children:(0,t.jsxs)(hq,{onClick:e=>e.stopPropagation(),children:[(0,t.jsx)(hQ,{children:"이 서류를 지울까요?"}),(0,t.jsxs)(hZ,{children:[e," — 지우면 서류 목록에서 사라져요. 이 서류로 함께 만들어진 서류(예: 예외지급 공문의 후속 서류)도 같이 지워져요. 요청자가 취소했거나 잘못 만든 경우에만 지워 주세요."]}),(0,t.jsxs)(hJ,{children:[(0,t.jsx)(o.default.Button.Outlined,{type:"button",disabled:n,onClick:i,children:"취소"}),(0,t.jsx)(h0,{type:"button",disabled:n,onClick:l,children:n?"지우는 중…":"삭제"})]})]})})}let hX=l.default.div.withConfig({componentId:"zh__sc-59c1e782-0"})`
  position: fixed;
  z-index: 1300;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(16 24 40 / 40%);
`,hq=l.default.div.withConfig({componentId:"zh__sc-59c1e782-1"})`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: min(420px, calc(100vw - 32px));
  padding: 24px;
  border-radius: 12px;

  background: #fff;
`,hQ=l.default.p.withConfig({componentId:"zh__sc-59c1e782-2"})`
  font-size: 17px;
  font-weight: 700;
  color: #292b36;
`,hZ=l.default.p.withConfig({componentId:"zh__sc-59c1e782-3"})`
  font-size: 14px;
  color: #475467;
`,hJ=l.default.div.withConfig({componentId:"zh__sc-59c1e782-4"})`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,h0=l.default.button.withConfig({componentId:"zh__sc-59c1e782-5"})`
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
`,h1=e=>{let t=new Date(e);return Number.isNaN(t.getTime())?e:`${t.getMonth()+1}/${t.getDate()} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`},h2=e=>"PENDING"===e.checkStatus?{text:"AI 확인 중…",tone:"muted"}:"FAILED"===e.checkStatus?{text:"AI 확인에 실패했어요. 사진을 다시 올려 주세요.",tone:"muted"}:"SKIPPED"===e.checkStatus?{text:"AI 확인 없이 보관만 했어요.",tone:"muted"}:e.missingItems.length>0?{text:`비어 있어요: ${e.missingItems.join(" · ")}`,tone:"bad"}:0===e.items.length?{text:"서명·날인·작성일 칸을 찾지 못했어요.",tone:"muted"}:{text:"서명·날인·작성일이 모두 채워져 있어요.",tone:"good"},h6=function({documentId:e,documentName:n,onClose:l}){let d,[r,s]=(0,i.useState)(null),[c,f]=(0,i.useState)(null),[h,p]=(0,i.useState)(!1),u=(0,i.useRef)(null);(0,i.useEffect)(()=>{let t=!1;return av.default.data.documentScan.list(e).then(([e,n])=>{if(!t){if(null!==e)return void f(e.message||"서명본을 불러오지 못했습니다.");s(n)}}),()=>{t=!0}},[e]);let x=async t=>{p(!0);let[n,i]=await av.default.data.documentScan.upload({documentId:e,file:t});if(p(!1),null!==n)return void a.default.ui.layout.toast.error(n.message||"서명본을 올리지 못했습니다.");s(e=>[i,...e??[]]);let l=h2(i);"bad"===l.tone?a.default.ui.layout.toast.error(l.text):a.default.ui.layout.toast.success("서명본을 올렸습니다.")},[g,...m]=r??[];return(0,t.jsx)(h4,{role:"dialog","aria-modal":"true",onClick:l,children:(0,t.jsxs)(h5,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(h3,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(h9,{children:"서명본"}),(0,t.jsx)(h8,{children:n})]}),(0,t.jsx)(o.default.Button.Outlined,{type:"button",onClick:l,children:"닫기"})]}),(0,t.jsx)(h7,{children:"서명·날인한 종이 서류를 사진(또는 PDF)으로 올려 두세요. 점검 때 증빙이 되고, 서명·날인·작성일 칸이 비었는지 AI가 바로 확인해요."}),(0,t.jsxs)(pe,{children:[(0,t.jsx)("input",{ref:u,type:"file",accept:"image/*,application/pdf",hidden:!0,onChange:e=>{let t=e.target.files?.[0];e.target.value="",void 0!==t&&x(t)}}),(0,t.jsx)(o.default.Button.Filled.Primary,{type:"button",disabled:h,onClick:()=>u.current?.click(),children:h?"올리고 확인하는 중…":"서명본 올리기"})]}),null!==c?(0,t.jsx)(pt,{children:c}):null===r?(0,t.jsx)(pt,{children:"불러오는 중…"}):void 0===g?(0,t.jsx)(pt,{children:"아직 올린 서명본이 없어요."}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(pn,{children:[(0,t.jsx)(pi,{href:g.imageUrl,target:"_blank",rel:"noreferrer",children:(d=g.imageUrl,/\.(jpe?g|png|webp|gif|bmp)$/i.test(d.split("?")[0]??""))?(0,t.jsx)(pl,{src:g.imageUrl,alt:"최근 서명본"}):(0,t.jsx)(pa,{children:/\.pdf$/i.test(g.imageUrl.split("?")[0]??"")?"PDF 열기":"파일 열기"})}),(0,t.jsxs)(pd,{children:[(0,t.jsx)(po,{children:`최근 서명본 \xb7 ${h1(g.createdAt)}${"OCR"===g.source?" (수기 서류 인식)":""}`}),(0,t.jsx)(ps,{$tone:h2(g).tone,children:h2(g).text}),g.items.length>0&&(0,t.jsx)(pc,{children:g.items.map(e=>(0,t.jsxs)("li",{children:[(0,t.jsx)(pf,{$filled:e.filled,children:e.filled?"✓":"✕"}),e.label,(0,t.jsx)(ph,{children:e.observation})]},`${e.kind}-${e.label}-${e.observation}`))})]})]}),m.length>0&&(0,t.jsxs)(pp,{children:[`이전 서명본 ${m.length}장: `,m.map(e=>(0,t.jsx)("a",{href:e.imageUrl,target:"_blank",rel:"noreferrer",children:h1(e.createdAt)},e.id))]})]})]})})},h4=l.default.div.withConfig({componentId:"zh__sc-9195fb6b-0"})`
  position: fixed;
  z-index: 1300;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(16 24 40 / 40%);
`,h5=l.default.div.withConfig({componentId:"zh__sc-9195fb6b-1"})`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: min(720px, calc(100vw - 32px));
  max-height: calc(100vh - 64px);
  padding: 24px;
  border-radius: 12px;

  background: #fff;
`,h3=l.default.div.withConfig({componentId:"zh__sc-9195fb6b-2"})`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,h9=l.default.p.withConfig({componentId:"zh__sc-9195fb6b-3"})`
  font-size: 18px;
  font-weight: 700;
  color: #292b36;
`,h8=l.default.p.withConfig({componentId:"zh__sc-9195fb6b-4"})`
  margin-top: 2px;
  font-size: 14px;
  color: #636978;
`,h7=l.default.p.withConfig({componentId:"zh__sc-9195fb6b-5"})`
  padding: 10px 12px;
  border-radius: 8px;

  font-size: 13px;
  color: #475467;

  background: #f2f4f7;
`,pe=l.default.div.withConfig({componentId:"zh__sc-9195fb6b-6"})`
  display: flex;
`,pt=l.default.p.withConfig({componentId:"zh__sc-9195fb6b-7"})`
  font-size: 14px;
  color: #98a2b3;
`,pn=l.default.div.withConfig({componentId:"zh__sc-9195fb6b-8"})`
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  gap: 16px;
`,pi=l.default.a.withConfig({componentId:"zh__sc-9195fb6b-9"})`
  display: block;
`,pl=l.default.img.withConfig({componentId:"zh__sc-9195fb6b-10"})`
  width: 200px;
  max-height: 280px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  object-fit: contain;
  background: #f9fafb;
`,pa=l.default.span.withConfig({componentId:"zh__sc-9195fb6b-11"})`
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
`,pd=l.default.div.withConfig({componentId:"zh__sc-9195fb6b-12"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,po=l.default.p.withConfig({componentId:"zh__sc-9195fb6b-13"})`
  font-size: 13px;
  color: #636978;
`,pr={bad:"#b42318",good:"#027a48",muted:"#636978"},ps=l.default.p.withConfig({componentId:"zh__sc-9195fb6b-14"})`
  font-size: 15px;
  font-weight: 700;
  color: ${({$tone:e})=>pr[e]};
`,pc=l.default.ul.withConfig({componentId:"zh__sc-9195fb6b-15"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  padding: 0;

  font-size: 13px;
  color: #292b36;
  list-style: none;
`,pf=l.default.span.withConfig({componentId:"zh__sc-9195fb6b-16"})`
  margin-right: 6px;
  font-weight: 700;
  color: ${({$filled:e})=>e?"#027a48":"#b42318"};
`,ph=l.default.span.withConfig({componentId:"zh__sc-9195fb6b-17"})`
  margin-left: 6px;
  color: #98a2b3;
`,pp=l.default.p.withConfig({componentId:"zh__sc-9195fb6b-18"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  font-size: 13px;
  color: #636978;
`,pu=(0,n.observer)(function({isSaving:e,setIsSaving:n,resetLocalStates:l,onRequiredValidation:d}){let{close:o,selectedDocument:r}=a.default.modal.documentView,s=a.default.modal.documentView,[c,f]=(0,i.useState)(!1),[h,p]=(0,i.useState)(!1),[u,x]=(0,i.useState)(!1),[g,m]=(0,i.useState)(!1),[j,_]=(0,i.useState)(!1),w=s.isClientMode&&null!==r?r.id:null,y=s.selectedTemplateImagePaths.filter(e=>""!==e),v=(null!==s.selectedDocumentId||"NEED_UPDATE"!==s.selectedDocumentDisplayStatus)&&null!==s.selectedTemplateId&&y.length>0,C=s.hasSelectedFieldChanges,I=null===s.selectedDocumentDisplayStatus?{label:"미리보기",color:"lightBlue"}:rf(s.selectedDocumentDisplayStatus).badge,z=s.isClientMode&&null===r||null!==r&&(0,rh.shouldSaveDocumentBeforePrint)(r.displayStatus),T=null!==r&&("NEED_UPDATE"===r.displayStatus||"NEED_MATCHING"===r.displayStatus||"WAITING_TO_DRAFT"===r.displayStatus||"LINKED_COMPLETED"===r.displayStatus||"WAITING_TO_PRINT"===r.displayStatus&&"NEED_DETAIL"===r.processType),E=()=>{let e=s.selectedTemplateId;if(null===e)return null;let t=s.selectedTemplateImagePaths.filter(e=>""!==e).map((t,n)=>({id:`${e}-${n+1}`,templateId:e,imagePath:t,page:n+1}));return 0===t.length?null:{pages:t,fields:s.selectedTemplateFields}},S=async()=>{if(v&&!h&&!e&&(!z||d("print"))){p(!0);try{if(z){n(!0);try{let e=await s.saveSelectedFieldChanges();if(null===e)return}catch(e){fu(e);return}finally{n(!1)}await new Promise(e=>{window.setTimeout(e,600)})}let e=E();if(null===e)return;let t=s.selectedTemplate?.name?.trim()??"",i=""===t?"Print":t,l=""===s.printTitleSuffix?i:`${i} - ${s.printTitleSuffix}`;await (0,hG.renderDocumentPrintView)({...e,printTitle:l,retryOnImageLoadFailure:{refresh:async()=>{await s.refetchTemplateListForPrint()},rebuildPayload:async()=>{let e=E();return null===e?null:{...e,printTitle:l}}},onImageLoadFailure:e=>{a.default.ui.layout.toast.error(`서류 이미지 ${e}개 로딩에 실패하여 출력을 중단했습니다.`)}})}finally{p(!1)}}},k=()=>{l(),o()},D=async()=>{if(!e&&d("save")){n(!0);try{await s.saveSelectedFieldChanges()}catch(e){fu(e)}finally{n(!1)}}},A=async()=>{if(!e){n(!0);try{await s.patchSelectedDocumentStatusPrevious()}catch(e){fu(e,"확인 취소에 실패했습니다. 잠시 후 다시 시도해 주세요.")}finally{n(!1)}}},L=async()=>{if(!e){if(!d("close"))return void f(!1);n(!0);try{let e=await s.saveSelectedFieldChanges();if(null===e)return;f(!1),k()}catch(e){fu(e)}finally{n(!1)}}};return(0,t.jsxs)(px,{children:[(0,t.jsxs)(pg,{children:[(0,t.jsxs)(pm,{children:[(0,t.jsx)(pb,{children:"서류 상태"}),(0,t.jsxs)(pj,{$color:I.color,children:[I.icon,I.label]})]}),(0,t.jsx)(p_,{}),(0,t.jsxs)(pw,{children:[(0,t.jsxs)(py,{type:"button",disabled:!v||h||e,onClick:()=>{S()},children:[(0,t.jsx)(hW.Printer,{size:16}),"출력하기"]}),r?.displayStatus==="COMPLETED"?(0,t.jsxs)(py,{$processing:e,onClick:()=>void A(),children:[(0,t.jsx)(en.default.Undo,{size:14}),"확인 취소"]}):s.isClientMode&&null===r||T?(0,t.jsxs)(py,{$processing:e,onClick:()=>void D(),children:[e?(0,t.jsx)(hH.RotateCw,{size:16}):(0,t.jsx)(b.Check,{size:16}),e?"저장중":"최종확인 및 저장"]}):null,null!==w&&(0,t.jsx)(pv,{type:"button",onClick:()=>x(!0),children:"서명본"}),s.canDeleteSelectedDocument&&(0,t.jsx)(pv,{type:"button",onClick:()=>m(!0),children:"삭제"}),(0,t.jsxs)(pv,{type:"button",onClick:()=>{C?f(!0):k()},children:[(0,t.jsx)(et.X,{size:16}),"닫기"]})]})]}),g&&(0,t.jsx)(hK,{documentName:s.selectedTemplate?.name??"서류",isDeleting:j,onCancel:()=>m(!1),onConfirm:()=>{(async()=>{_(!0);let[e]=await s.deleteSelectedDocument();if(_(!1),null!==e)return fu(e,"서류를 지우지 못했습니다.");m(!1),l(),a.default.ui.layout.toast.success("서류를 지웠습니다.")})()}}),u&&null!==w&&(0,t.jsx)(h6,{documentId:w,documentName:s.selectedTemplate?.name??"서류",onClose:()=>x(!1)}),(0,t.jsx)(sl,{isOpen:c,actionType:"exit",isProcessing:e,onClickSecondary:()=>{f(!1),k()},onClickPrimary:()=>{L()}})]})}),px=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 12px 24px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,pg=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
`,pm=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,pb=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-3"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #737380;
`,pj=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-4"})`
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
`,p_=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-5"})`
  width: 1px;
  height: 24px;
  background: #d1d1d9;
`,pw=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-6"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,py=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-fa5a83d4-7"})`
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
`,pv=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-fa5a83d4-8"})`
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
`,pC=(0,n.observer)(function(){let e=a.default.modal.documentView,n=(0,i.useRef)(!1),l=e.selectedDocument?.displayStatus!=="COMPLETED",o=e.isServiceWorkerMode&&null===e.selectedDocumentId&&"NEED_UPDATE"===e.selectedDocumentDisplayStatus,r=e.isServiceWorkerMode&&(0,sn.isSalaryProvisionMonthlyScheduleDocument)(e.selectedTemplate?.name??null),s=r?e.selectedOcrFile??e.analyzedOcrFile:null,c=(0,i.useMemo)(()=>r?null!==s?URL.createObjectURL(s):e.monthlyScheduleComparisonResult?.imageUrl??e.selectedDocument?.imageUrl??null:null,[r,e.monthlyScheduleComparisonResult?.imageUrl,e.selectedDocument?.imageUrl,s]),f=e.autocompleteServiceEndReportUserChangeLevelUIState,h=e.autocompleteServiceEndReportStaffOpinionUIState,p=e.autocompleteCaseManagementRecordCaseContentUIState,u=e.shouldShowRetroactiveActualServiceDatePanel,x=e.retroactiveActualServiceDatePanelYearMonth,g=e.isRetroactiveActualServiceDatePanelLoading,m=e.retroactiveActualServiceDatePanelErrorMessage,[b,j]=(0,i.useState)(1),[_,w]=(0,i.useState)(1),[y,v]=(0,i.useState)(null),[C,I]=(0,i.useState)(!1),[z,T]=(0,i.useState)([]),[E,S]=(0,i.useState)(null),[k,D]=(0,i.useState)(null),[A,L]=(0,i.useState)(!1),[$,R]=(0,i.useState)(null),[O,P]=(0,i.useState)(""),[N,M]=(0,i.useState)(""),[F,B]=(0,i.useState)(""),[U,Y]=(0,i.useState)({}),[V,W]=(0,i.useState)(0),[H,G]=(0,i.useState)(null),[K,X]=(0,i.useState)(!1),[q,Q]=(0,i.useState)(!1),Z=(0,i.useRef)(null),J=(0,i.useRef)(null),ee=(0,i.useRef)([]),et=(0,i.useRef)(null),ei=(0,i.useRef)(null),el=()=>{j(1),w(1),v(null),I(!1),T([])},ea=t=>{let n=function(e,t){let n=e.filter(e=>("radio"===e.uiProps.fieldType||"text"===e.uiProps.fieldType||"textarea"===e.uiProps.fieldType)&&e.uiProps.triggerKeys?.includes(st.default.SOURCE_REQUIRED_VALIDATION)===!0);if(!("NEED_UPDATE"===t&&n.some(e=>e.uiProps.triggerKeys?.includes(st.default.SOURCE_REQUIRED_VALIDATION_ON_NEED_UPDATE)===!0)||"WAITING_TO_PRINT"===t&&n.some(e=>e.uiProps.triggerKeys?.includes(st.default.SOURCE_REQUIRED_VALIDATION_ON_WAITING_TO_PRINT)===!0)))return{invalidFieldIds:[],missingItems:[]};let i=new Map;return n.forEach(e=>{let t=si(e);i.set(t,[...i.get(t)??[],e])}),Array.from(i.values()).reduce((e,t)=>{if(t.some(e=>"radio"===e.uiProps.fieldType?e.value?.trim().toLowerCase()==="true":null!==e.value&&""!==e.value.trim()))return e;let n=t[0];if(void 0===n)return e;let i=si(n),l=t.find(e=>e.uiProps.label?.group?.name?.trim()!=="")?.uiProps.label?.group?.name.trim()??t.find(e=>e.uiProps.label?.field.name.trim()!=="")?.uiProps.label?.field.name.trim()??t[0]?.fieldKey??i;return{invalidFieldIds:[...e.invalidFieldIds,...t.map(e=>e.id)],missingItems:[...e.missingItems,{key:i,label:l}]}},{invalidFieldIds:[],missingItems:[]})}(e.selectedTemplateFields,e.selectedDocumentDisplayStatus);return 0===n.missingItems.length||(S(n),D(t),!1)},ed=e.selectedTemplateImagePaths,eo=Math.max(ed?.length??0,1),er=Math.min(b,eo);(0,i.useEffect)(()=>{n.current=!1},[e.selectedTemplateId]);let es=e.selectedDocument?.displayStatus==="NEED_MATCHING",ec=e.selectedOcrFile??e.analyzedOcrFile,ef=(0,i.useMemo)(()=>es&&null!==ec?URL.createObjectURL(ec):null,[ec,es]);(0,i.useEffect)(()=>()=>{null!==ef&&URL.revokeObjectURL(ef)},[ef]),(0,i.useEffect)(()=>()=>{null!==s&&null!==c&&URL.revokeObjectURL(c)},[c,s]);let eh=(null===ef?.75:.64)*_,ep=(0,i.useCallback)(e=>{if(e.length<2)return e;let t=1>=Math.max(...e.flatMap(e=>e.vertices).flatMap(e=>[e.x,e.y])),n=H?.width??0,i=H?.height??0,l=n>0&&i>0;return[...e.map(e=>{let a,d,o,r;return{box:e,position:(a=e.vertices.map(e=>e.x),d=e.vertices.map(e=>e.y),o=Math.min(...a),r=Math.min(...d),{left:t||!l?o:o/n,top:t||!l?r:r/i})}})].sort((e,t)=>e.position.top-t.position.top).reduce((e,t)=>{let n=e.at(-1);if(void 0===n)return e.push([t]),e;let i=n[0]?.position.top;return void 0===i||Math.abs(t.position.top-i)>.01?e.push([t]):n.push(t),e},[]).flatMap(e=>e.sort((e,t)=>e.position.left!==t.position.left?e.position.left-t.position.left:e.box.fieldRuntimeKey.localeCompare(t.box.fieldRuntimeKey)).map(({box:e})=>e))},[H]);(0,i.useEffect)(()=>{let e=J.current;if(null===e)return;let t=e=>{(e.ctrlKey||e.metaKey)&&(e.preventDefault(),w(t=>Math.min(Math.max(t+(e.deltaY<0?.1:-.1),.5),1.5)))};return e.addEventListener("wheel",t,{passive:!1}),()=>{e.removeEventListener("wheel",t)}},[e.status]);let eu=(0,i.useCallback)(e=>{if(0===e.length)return null;let t=e.map(e=>e.x),n=e.map(e=>e.y),i=Math.min(...t),l=Math.max(...t),a=Math.min(...n),d=Math.max(...n);if(!Number.isFinite(i)||!Number.isFinite(l)||!Number.isFinite(a)||!Number.isFinite(d))return null;let o=Math.max(l,d),r=o<=1?1:H?.width??0,s=o<=1?1:H?.height??0;if(r<=0||s<=0)return null;let c=Math.max(i,0)/r*100,f=Math.max(a,0)/s*100,h=(l-i)/r*100,p=(d-a)/s*100;return h<=0||p<=0?null:{left:`${Math.min(c,100)}%`,top:`${Math.min(f,100)}%`,width:`${Math.min(h,100)}%`,height:`${Math.min(p,100)}%`}},[H]),ex=e.isLinkedCompletedMonthlyScheduleDocument?e.monthlyScheduleComparisonResult:null,eg=(0,i.useMemo)(()=>{let e=ex?.unmatchedFieldBoundingBoxes;return void 0===e?null:[...e].sort((e,t)=>e.day!==t.day?e.day-t.day:e.fieldKey.localeCompare(t.fieldKey))},[ex?.unmatchedFieldBoundingBoxes]),em=null===eg?0:Math.min(Math.max(V,0),Math.max(eg.length-1,0)),eb=eg?.[em]??null,ej=eu(eb?.boundingBoxes?.flatMap(e=>{let t=e.normalizedVertices??[];return t.length>0?t:e.vertices??[]})??[]);(0,i.useLayoutEffect)(()=>{let e=et.current,t=ei.current;if(null===e||null===t||null===ej)return;let n=()=>{let n=e.getBoundingClientRect(),i=t.getBoundingClientRect(),l=n.left+Number.parseFloat(ej.left)/100*n.width;X(n.top+Number.parseFloat(ej.top)/100*n.height+Number.parseFloat(ej.height)/100*n.height+i.height>n.bottom),Q(l+i.width>n.right)};n();let i=new ResizeObserver(n);return i.observe(e),i.observe(t),()=>{i.disconnect()}},[ej]);let e_=(0,i.useCallback)((e,t="instant")=>{let n=J.current,i=ee.current[e-1];if(!n||!i)return;let l=Math.max(i.offsetTop-n.offsetTop-12,0);n.scrollTo({top:l,behavior:t})},[]),ew=t=>(-1!==t||!1!==e.canMovePrevTemplate)&&(1!==t||!1!==e.canMoveNextTemplate)&&(-1===t?e.movePrevTemplate():e.moveNextTemplate(),j(1),w(1),v(null),I(!1),T([]),J.current?.scrollTo({top:0,behavior:"auto"}),!0),ey=e.hasSelectedFieldChanges,ev=async()=>ey?(R(-1),L(!0),!1):ew(-1),eC=async()=>ey?(R(1),L(!0),!1):ew(1),eI=async()=>{if(!C&&null!==$){if(!ea({type:"move",direction:$}))return void L(!1);I(!0);try{let t=await e.saveSelectedFieldChanges();if(null===t)return;ew($),R(null),L(!1)}catch(e){fu(e)}finally{I(!1)}}};(0,i.useEffect)(()=>{let t=t=>{"ready"===e.status&&!1!==e.hasSelectedFieldChanges&&t.preventDefault()};return window.addEventListener("beforeunload",t),()=>{window.removeEventListener("beforeunload",t)}},[e.hasSelectedFieldChanges,e.status]),(0,i.useEffect)(()=>"ready"!==e.status?void e.setToastContainer(null):(e.setToastContainer(Z.current),()=>{e.setToastContainer(null)}),[e,e.status]),(0,i.useEffect)(()=>{"ready"===e.status&&!0===u&&e.ensureRetroactiveActualServiceDatePanelState()},[e,e.status,u]);let ez=()=>{if(null===y)return;let e=y.replace(/[^\d]/g,"");if(""===e)return void v(null);let t=Number(e);if(!Number.isFinite(t))return void v(null);let n=Math.min(Math.max(t,1),eo);j(n),v(null),e_(n)};return"ready"!==e.status?null:(0,t.jsx)(d.default,{children:(0,t.jsxs)(pI,{ref:Z,children:[(0,t.jsx)(hO,{}),(0,t.jsxs)(pz,{children:[(0,t.jsx)(pu,{isSaving:C,setIsSaving:I,resetLocalStates:el,onRequiredValidation:ea}),(0,t.jsx)(r1,{isOpen:null!==E,missingItems:E?.missingItems??[],isProcessing:C,onClickSecondary:()=>{if(S(null),D(null),null!==k&&"print"!==k){if("close"===k||"save"===k){el(),e.close();return}e.discardSelectedFieldChanges(),ew(k.direction)}},onClickPrimary:()=>{null!==E&&(T(E.invalidFieldIds),S(null),D(null))}}),(0,t.jsxs)(pT,{children:[u?(0,t.jsx)(hB,{value:x??"",disabled:g,errorMessage:m,onChangeYearMonth:t=>{e.applyRetroactiveActualServiceDatePanelYearMonth(t)}}):null,(0,t.jsx)(p4,{type:"button","aria-label":"이전 문서",disabled:e.isTemplateNavigationLocked||!1===e.canMovePrevTemplate,onClick:()=>void ev(),children:(0,t.jsx)(rZ.ChevronLeft,{size:24})}),(0,t.jsx)(pE,{ref:J,onScroll:()=>{let e=J.current;if(!e)return;let t=e.scrollTop,n=1,i=1/0;ee.current.forEach((l,a)=>{if(!l)return;let d=Math.abs(l.offsetTop-e.offsetTop-t);d<i&&(i=d,n=a+1)}),n!==b&&j(n)},children:null!==c?(0,t.jsxs)(pL,{$active:!0,$scale:eh,children:[(0,t.jsx)(pJ,{$scale:eh,children:(0,t.jsxs)(p2,{ref:et,children:[(0,t.jsx)(p1,{src:c,alt:"급여 제공 월별 일정표 원본",onLoad:e=>{G({width:e.currentTarget.naturalWidth,height:e.currentTarget.naturalHeight})}}),null!==eb?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(pF,{children:null!==ej?(0,t.jsx)(pB,{style:ej,type:"button",onClick:()=>{},children:(0,t.jsx)(pU,{children:"확인 필요"})}):null})}):null]})}),null!==eb?(0,t.jsxs)(p6,{ref:ei,$centered:null===ej,style:null===ej?void 0:{left:q?void 0:ej.left,right:q?`calc(100% - (${ej.left} + ${ej.width}))`:void 0,top:K?ej.top:`calc(${ej.top} + ${ej.height})`,transform:K?"translateY(-100%)":void 0},children:[(0,t.jsxs)(pV,{children:[(0,t.jsx)(pW,{children:`정보 불일치  \xb7  ${em+1} / ${eg?.length??0}`}),(0,t.jsx)(pH,{children:`${eb.day}일 제공 일정 비교`}),(0,t.jsx)(pG,{children:eb.reasons.join("\n")})]}),(0,t.jsxs)(pK,{children:[(0,t.jsx)(pX,{$variant:"manual",children:"수기 작성 서류"}),(0,t.jsx)(pq,{children:""===eb.ocrValue?"-":eb.ocrValue})]}),(0,t.jsxs)(pK,{children:[(0,t.jsx)(pX,{$variant:"voucher",children:"실제 제공 내역"}),(0,t.jsx)(pq,{children:""===eb.actualValue?"-":eb.actualValue})]}),(0,t.jsxs)(pQ,{children:[(0,t.jsxs)(pZ,{type:"button",disabled:em<=0,onClick:()=>{W(Math.max(em-1,0))},children:[(0,t.jsx)(rG,{sx:{fontSize:16}}),"이전"]}),(0,t.jsxs)(pZ,{type:"button",disabled:em>=(eg?.length??0)-1,onClick:()=>{W(Math.min(em+1,Math.max((eg?.length??1)-1,0)))},children:["다음",(0,t.jsx)(a$.default,{sx:{fontSize:16}})]})]})]}):null]}):o?(0,t.jsxs)(pS,{children:[(0,t.jsx)(en.default.Contract,{size:24,color:"#494f53"}),(0,t.jsxs)(pk,{children:[(0,t.jsx)(pD,{children:`업로드 된 수기 [${e.selectedTemplate?.name??"서류"}]가 없습니다.`}),(0,t.jsx)(pA,{children:"왼쪽 업로드 필드에서 서류를 업로드해주세요."})]})]}):Array.from({length:eo},(i,a)=>{let d,o,r=a+1,s=e.getSelectedTemplateFieldsByPage(r),c=ep(e.getOcrMismatchBoundingBoxesByPage(r)),u=Math.min(Math.max(U[r]??0,0),Math.max(c.length-1,0)),x=c[u]??null,g=null===x?null:eu(x.vertices),m=x?.fieldRuntimeKey.split("::")[1]??null,b=null===m?null:s.find(e=>e.fieldKey===m)?.uiProps.label?.field.name??null;return(0,t.jsxs)(p$,{children:[null!==ef&&(0,t.jsxs)(pR,{children:[(0,t.jsx)(pP,{$variant:"manual",children:"수기서류 원본 · 비교 근거 / 수정 불가"}),(0,t.jsxs)(pO,{$scale:eh,children:[(0,t.jsxs)(pN,{$scale:eh,children:[(0,t.jsx)(pM,{src:ef,alt:"대조 이미지",onLoad:e=>{G({width:e.currentTarget.naturalWidth,height:e.currentTarget.naturalHeight})}}),(0,t.jsx)(pF,{children:c.map((e,n)=>{let i=eu(e.vertices);if(null===i)return null;let l=e.vertices.map(e=>`${e.x}:${e.y}`).join("|");return(0,t.jsx)(pB,{style:i,type:"button",onClick:()=>{Y(e=>({...e,[r]:n}))},children:u===n?(0,t.jsx)(pU,{children:"확인 필요"}):null},`ocr-mismatch-${r}-${e.fieldRuntimeKey}-${l}`)})})]}),null!==x&&null!==g&&(0,t.jsxs)(pY,{style:{left:g.left,top:`calc(${g.top} + ${g.height})`},children:[(0,t.jsxs)(pV,{children:[(0,t.jsx)(pW,{children:`정보 불일치  \xb7  ${u+1} / ${c.length}`}),(0,t.jsxs)(pH,{children:[b??m??"필드 값"," ","비교"]}),(0,t.jsx)(pG,{children:"수기 서류 인식값과 전자 바우처 엑셀 기반 값이 다릅니다."})]}),(0,t.jsxs)(pK,{children:[(0,t.jsx)(pX,{$variant:"manual",children:"수기 작성 서류"}),(0,t.jsx)(pq,{children:""===x.manualValue?"-":x.manualValue})]}),(0,t.jsxs)(pK,{children:[(0,t.jsx)(pX,{$variant:"voucher",children:"전산 데이터 서류"}),(0,t.jsx)(pq,{children:""===x.electronicValue?"-":x.electronicValue})]}),(0,t.jsxs)(pQ,{children:[(0,t.jsxs)(pZ,{type:"button",disabled:u<=0,onClick:()=>{Y(e=>({...e,[r]:Math.max(u-1,0)}))},children:[(0,t.jsx)(rG,{sx:{fontSize:16}}),"이전"]}),(0,t.jsxs)(pZ,{type:"button",disabled:u>=c.length-1,onClick:()=>{Y(e=>({...e,[r]:Math.min(u+1,c.length-1)}))},children:["다음",(0,t.jsx)(a$.default,{sx:{fontSize:16}})]})]})]})]})]}),(0,t.jsxs)(pR,{children:[null!==ef&&(0,t.jsx)(pP,{$variant:"voucher",children:"전자바우처 엑셀 기반 · 비교 근거 / 수정 불가"}),(0,t.jsx)(pL,{$active:!0,$scale:eh,ref:e=>{ee.current[a]=e},children:(0,t.jsx)(pJ,{$scale:eh,children:null===(o="string"==typeof(d=ed?.[a])?""===d?null:d:null)?(0,t.jsx)(p0,{}):(0,t.jsx)(r0.default,{imagePath:o,onTemplateImageLoadError:()=>{n.current||(n.current=!0,e.refetchTemplateListForPreview())},fields:s,readOnly:!l,isFieldValidationError:e=>z.includes(e.id),onAssistTriggerClick:({triggerKey:t,field:n})=>{if(t===st.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON){P(e.getAutocompleteServiceEndReportUserChangeLevelTargetValue()),e.openAutocompleteServiceEndReportUserChangeLevelDrawer(n);return}if(t===st.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON){M(""),e.openAutocompleteServiceEndReportStaffOpinionDrawer(n);return}if(t===st.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON){B(e.getAutocompleteCaseManagementRecordCaseContentTargetValue()),e.openAutocompleteCaseManagementRecordCaseContentDrawer(n);return}t===st.default.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL?e.selectAllMealTypeForSelectedDocument("GENERAL"):t===st.default.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL?e.selectAllMealTypeForSelectedDocument("THERAPEUTIC"):t===st.default.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL&&e.selectAllMealTypeForSelectedDocument("TEXTURE_MODIFIED")},isAssistButtonDisabled:({triggerKey:e})=>e===st.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON?!l||!0===f.isDrawerOpen:e===st.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON?!l||!0===h.isDrawerOpen:e===st.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON?!l||!0===p.isDrawerOpen:void 0,resolveAssistButtonLabel:({triggerKey:t})=>t===st.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON?e.autocompleteServiceEndReportUserChangeLevelButtonLabel:t===st.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON?e.autocompleteServiceEndReportStaffOpinionButtonLabel:t===st.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON?e.autocompleteCaseManagementRecordCaseContentButtonLabel:t===st.default.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL?"일반식 전체":t===st.default.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL?"치료식 전체":t===st.default.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL?"저작 및 연하 도움식 전체":void 0,resolveAssistButtonChecked:({triggerKey:t})=>t===st.default.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL?e.isGeneralMealTypeAllSelected:t===st.default.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL?e.isTherapeuticMealTypeAllSelected:t===st.default.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL?e.isTextureModifiedMealTypeAllSelected:void 0,isFieldEditable:t=>e.isSelectedFieldEditable(t),isFieldAutoFilled:t=>e.isSelectedFieldAutoFilled(t),selectOptionsCacheKey:e.selectedDocumentId??`template:${e.selectedTemplateId??""}`,onLoadSelectOptions:t=>e.getSelectFieldCandidates(t),onChangeField:(t,n,i)=>{if("radio"===t.uiProps.fieldType){T(n=>n.filter(n=>{let i=e.selectedTemplateFields.find(e=>e.id===n),l=i?.uiProps.fieldType==="radio"?i:null;return(null!==l&&"groupKey"in l.uiProps?l.uiProps.groupKey:null)!==("groupKey"in t.uiProps?t.uiProps.groupKey:null)})),"true"===n&&e.toggleSelectedRadioGroup(t);return}T(e=>e.includes(t.id)?e.filter(e=>e!==t.id):e),e.updateSelectedFieldValue({page:t.page,fieldKey:t.fieldKey,value:n,selectedId:i})}})})})]})]},`screen-page-${r}`)})}),(0,t.jsx)(p4,{type:"button","aria-label":"다음 문서",disabled:e.isTemplateNavigationLocked||!1===e.canMoveNextTemplate,onClick:()=>void eC(),$right:!0,children:(0,t.jsx)(rJ.ChevronRight,{size:24})}),(0,t.jsx)(p5,{children:(0,t.jsxs)(p3,{children:[(0,t.jsxs)(p9,{type:"button",disabled:1===er,onClick:()=>{let e=Math.max(er-1,1);j(e),v(null),e_(e)},children:[(0,t.jsx)(rQ,{size:16,color:1===er?"#9ca3af":"#0a0a0a"}),(0,t.jsx)(p8,{$muted:1===er,children:"이전"})]}),(0,t.jsxs)(p7,{children:[(0,t.jsx)(ue,{children:(0,t.jsx)(ut,{type:"text",inputMode:"numeric","aria-label":"페이지 번호 입력",value:y??String(er),onFocus:()=>{v(String(er))},onChange:e=>{v(e.target.value)},onBlur:ez,onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),ez(),e.currentTarget.blur())}})}),(0,t.jsx)(ue,{children:(0,t.jsx)(ui,{children:"/"})}),(0,t.jsx)(ue,{children:(0,t.jsx)(ul,{children:eo})})]}),(0,t.jsxs)(p9,{type:"button",disabled:er===eo,onClick:()=>{let e=Math.min(er+1,eo);j(e),v(null),e_(e)},children:[(0,t.jsx)(p8,{$muted:er===eo,children:"다음"}),(0,t.jsx)(rX,{size:16,color:er===eo?"#9ca3af":"#0a0a0a"})]})]})}),!0===f.isDrawerOpen?(0,t.jsx)(ff,{value:O,onChange:P,onClose:()=>e.closeAutocompleteServiceEndReportUserChangeLevelDrawer(),onApply:()=>e.applyAutocompleteServiceEndReportUserChangeLevelResult(O)}):null,!0===h.isDrawerOpen?(0,t.jsx)(fc,{value:N,autoFilledReferenceValue:e.autocompleteServiceEndReportStaffOpinionAutoFilledReferenceValue,keywords:e.autocompleteServiceEndReportStaffOpinionKeywords,isKeywordListLoading:e.isAutocompleteServiceEndReportStaffOpinionKeywordListLoading,isKeywordCreating:e.isAutocompleteServiceEndReportStaffOpinionKeywordCreating,isGenerating:e.isAutocompleteServiceEndReportStaffOpinionGenerating,onAddKeyword:t=>e.createAutocompleteServiceEndReportStaffOpinionKeyword(t),onGenerate:t=>e.generateAutocompleteServiceEndReportStaffOpinionDraft(t),onChange:M,onClose:()=>e.closeAutocompleteServiceEndReportStaffOpinionDrawer(),onApply:()=>e.applyAutocompleteServiceEndReportStaffOpinionResult(N)}):null,!0===p.isDrawerOpen?(0,t.jsx)(fs,{value:F,onChange:B,onClose:()=>e.closeAutocompleteCaseManagementRecordCaseContentDrawer(),onApply:()=>e.applyAutocompleteCaseManagementRecordCaseContentResult(F)}):null]}),(0,t.jsx)(sl,{isOpen:A,actionType:"move",isProcessing:C,onClickSecondary:()=>{R(null),L(!1),null!==$&&(e.discardSelectedFieldChanges(),ew($))},onClickPrimary:()=>{eI()}})]})]})})}),pI=l.default.div.withConfig({componentId:"zh__sc-7a537607-0"})`
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
`,pz=l.default.div.withConfig({componentId:"zh__sc-7a537607-1"})`
  position: relative;

  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  min-width: 0;
  height: min(989px, calc(100vh - 32px));
  min-height: 640px;
`,pT=l.default.div.withConfig({componentId:"zh__sc-7a537607-2"})`
  position: relative;

  display: flex;
  flex: 1 0 0;
  align-self: stretch;

  min-height: 0;
`,pE=l.default.div.withConfig({componentId:"zh__sc-7a537607-3"})`
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
`,pS=l.default.div.withConfig({componentId:"zh__sc-7a537607-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  min-width: 0;
`,pk=l.default.div.withConfig({componentId:"zh__sc-7a537607-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  width: 100%;

  color: #494f53;
  text-align: center;
`,pD=l.default.p.withConfig({componentId:"zh__sc-7a537607-6"})`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`,pA=l.default.p.withConfig({componentId:"zh__sc-7a537607-7"})`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`,pL=l.default.div.withConfig({componentId:"zh__sc-7a537607-8"})`
  position: relative;

  display: ${({$active:e})=>e?"block":"none"};

  width: calc(210mm * ${({$scale:e})=>e});
  height: calc(297mm * ${({$scale:e})=>e});

  box-shadow: 0 0 8px 0 rgb(0 0 0 / 10%);
`,p$=l.default.div.withConfig({componentId:"zh__sc-7a537607-9"})`
  display: flex;
  gap: 10px;
  align-items: flex-start;
`,pR=l.default.div.withConfig({componentId:"zh__sc-7a537607-10"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`,pO=l.default.div.withConfig({componentId:"zh__sc-7a537607-11"})`
  position: relative;
  width: calc(210mm * ${({$scale:e})=>e});
  height: calc(297mm * ${({$scale:e})=>e});
`,pP=l.default.div.withConfig({componentId:"zh__sc-7a537607-12"})`
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
`,pN=l.default.div.withConfig({componentId:"zh__sc-7a537607-13"})`
  position: relative;

  overflow: hidden;

  width: calc(210mm * ${({$scale:e})=>e});
  height: calc(297mm * ${({$scale:e})=>e});
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 8%);
`,pM=l.default.img.withConfig({componentId:"zh__sc-7a537607-14"})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`,pF=l.default.div.withConfig({componentId:"zh__sc-7a537607-15"})`
  pointer-events: none;
  position: absolute;
  inset: 0;
`,pB=l.default.button.withConfig({componentId:"zh__sc-7a537607-16"})`
  pointer-events: auto;
  cursor: pointer;

  position: absolute;

  padding: 0;
  border: 2px solid #4f39f6;
  border-radius: 2px;

  background: transparent;
`,pU=l.default.span.withConfig({componentId:"zh__sc-7a537607-17"})`
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
`,pY=l.default.div.withConfig({componentId:"zh__sc-7a537607-18"})`
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
`,pV=l.default.div.withConfig({componentId:"zh__sc-7a537607-19"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,pW=l.default.div.withConfig({componentId:"zh__sc-7a537607-20"})`
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  color: #e8660f;
`,pH=l.default.div.withConfig({componentId:"zh__sc-7a537607-21"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #1a1729;
`,pG=l.default.div.withConfig({componentId:"zh__sc-7a537607-22"})`
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  color: #6b697a;
`,pK=l.default.div.withConfig({componentId:"zh__sc-7a537607-23"})`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;
  padding: 12px 14px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,pX=l.default.div.withConfig({componentId:"zh__sc-7a537607-24"})`
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  color: ${({$variant:e})=>"manual"===e?"#e8660f":"#5942f2"};
`,pq=l.default.div.withConfig({componentId:"zh__sc-7a537607-25"})`
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  color: #1a1729;
`,pQ=l.default.div.withConfig({componentId:"zh__sc-7a537607-26"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,pZ=l.default.button.withConfig({componentId:"zh__sc-7a537607-27"})`
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
`,pJ=l.default.div.withConfig({componentId:"zh__sc-7a537607-28"})`
  transform-origin: top left;
  transform: scale(${({$scale:e})=>e});
  width: 210mm;
  height: 297mm;
`,p0=l.default.div.withConfig({componentId:"zh__sc-7a537607-29"})`
  width: 210mm;
  height: 297mm;
  background: #f9fafb;
`,p1=l.default.img.withConfig({componentId:"zh__sc-7a537607-30"})`
  display: block;

  width: 210mm;
  height: 297mm;

  object-fit: contain;
  background: #fff;
`,p2=l.default.div.withConfig({componentId:"zh__sc-7a537607-31"})`
  position: relative;
  width: 210mm;
  height: 297mm;
`,p6=(0,l.default)(pY).withConfig({componentId:"zh__sc-7a537607-32"})`
  ${({$centered:e})=>e?`
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `:""}
`,p4=l.default.button.withConfig({componentId:"zh__sc-7a537607-33"})`
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
`,p5=l.default.div.withConfig({componentId:"zh__sc-7a537607-34"})`
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
`,p3=l.default.div.withConfig({componentId:"zh__sc-7a537607-35"})`
  pointer-events: auto;

  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 99px;

  background: #fff;
`,p9=l.default.button.withConfig({componentId:"zh__sc-7a537607-36"})`
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
`,p8=l.default.span.withConfig({componentId:"zh__sc-7a537607-37"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px;
  color: ${({$muted:e})=>!0===e?"#9ca3af":"#0a0a0a"};
  letter-spacing: -1px;
`,p7=l.default.div.withConfig({componentId:"zh__sc-7a537607-38"})`
  display: flex;
  gap: 2px;
  align-items: center;
`,ue=l.default.div.withConfig({componentId:"zh__sc-7a537607-39"})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
`,ut=l.default.input.withConfig({componentId:"zh__sc-7a537607-40"})`
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
`,un=l.default.span.withConfig({componentId:"zh__sc-7a537607-41"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 16px;
  text-align: center;
  letter-spacing: -1px;
`,ui=(0,l.default)(un).withConfig({componentId:"zh__sc-7a537607-42"})`
  color: #0a0a0a;
`,ul=(0,l.default)(un).withConfig({componentId:"zh__sc-7a537607-43"})`
  color: #0a0a0a;
`;var ua=e.i(89656),ud=e.i(6412);let uo=[".xls",".xlsx",".xlsm"];function ur(e){let t=e.name.lastIndexOf("."),n=-1===t?"":e.name.slice(t).toLowerCase();return uo.includes(n)}let us=(0,n.observer)(function(){let e=a.default.modal.excelFileUpload,n=(0,i.useRef)(null),[l,o]=(0,i.useState)(!1),[r,s]=(0,i.useState)(!1);if(!1===e.isOpen)return null;let c=t=>{e.addFiles(t.filter(ur))},f=async()=>{if(null!==e.category&&0!==e.files.length&&!r){for(let t of(s(!0),e.files)){let n=function(e){let t=e.name.slice(e.name.lastIndexOf(".")).toLowerCase();return".xls"===t?ud.default.XLS:".xlsm"===t?ud.default.XLSM:ud.default.XLSX}(t),[i,l]=await av.default.upload.createPresignedUploadUrl({category:e.category,contentType:n});if(null!==i){s(!1),a.default.ui.layout.toast.error(`${t.name} 업로드 URL 생성에 실패했습니다.`);return}let[d]=await av.default.upload.putFileToPresignedUploadUrl({uploadUrl:l.uploadUrl,contentType:n,file:t});if(null!==d){s(!1),a.default.ui.layout.toast.error(`${t.name} 업로드에 실패했습니다.`);return}}s(!1),a.default.ui.layout.toast.success("엑셀 파일 업로드를 완료했습니다."),e.close()}};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(ua.Container,{children:[(0,t.jsxs)(ua.Header,{children:[(0,t.jsx)(ua.HeaderLeft,{children:(0,t.jsx)(ua.HeaderTitle,{children:"엑셀 파일 업로드하기"})}),(0,t.jsx)(ua.HeaderRight,{children:(0,t.jsxs)(uf,{type:"button",onClick:e.close,disabled:r,children:[(0,t.jsx)(et.X,{size:20}),"닫기"]})})]}),(0,t.jsxs)(uh,{children:[(0,t.jsx)(up,{children:"엑셀 파일을 업로드해주세요."}),(0,t.jsxs)(uu,{$isDragging:l,onClick:()=>{!1===r&&n.current?.click()},onDragOver:e=>{e.preventDefault(),o(!0)},onDragLeave:e=>{e.preventDefault(),o(!1)},onDrop:e=>{e.preventDefault(),o(!1),c(Array.from(e.dataTransfer.files))},children:[(0,t.jsx)(uc,{ref:n,type:"file",accept:".xls,.xlsx,.xlsm",multiple:!0,onChange:e=>{c(Array.from(e.target.files??[])),e.target.value=""}}),0===e.files.length?(0,t.jsx)(ux,{children:(0,t.jsx)(ep.Upload,{size:20})}):(0,t.jsx)(uj,{children:e.files.map(n=>{var i;return(0,t.jsxs)(u_,{children:[(0,t.jsxs)(uw,{children:[(0,t.jsx)(uy,{children:n.name}),(0,t.jsx)(uv,{children:(i=n.size,`${Math.ceil(i/1024/1024)}MB`)})]}),(0,t.jsxs)(uC,{type:"button",onClick:t=>{t.stopPropagation(),e.removeFile(n)},disabled:r,children:["삭제",(0,t.jsx)(et.X,{size:16})]})]},`${n.name}-${n.size}-${n.lastModified}`)})}),(0,t.jsxs)(ug,{children:[(0,t.jsx)(um,{children:l?"파일을 여기에 놓으면 업로드 됩니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요."}),(0,t.jsx)(ub,{children:e.files.length>0?"여러 파일을 추가로 업로드할 수 있습니다.":"지원 파일 형식: 엑셀(.xls, .xlsx, .xlsm)"})]})]})]}),(0,t.jsxs)(ua.Footer,{children:[(0,t.jsx)(uI,{type:"button",onClick:()=>e.clearFiles(),disabled:0===e.files.length||r,children:"다시 업로드하기"}),(0,t.jsxs)(uz,{type:"button",onClick:()=>void f(),disabled:0===e.files.length||r,children:[(0,t.jsx)(b.Check,{size:20}),r?"업로드 중":"업로드 완료하기"]})]})]})})}),uc=l.default.input.withConfig({componentId:"zh__sc-816f3394-0"})`
  display: none;
`,uf=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-816f3394-1"})`
  ${ua.btnStyle}
  color: #4f39f6;
`,uh=(0,l.default)(ua.Body).withConfig({componentId:"zh__sc-816f3394-2"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  min-height: 457px;
  padding: 32px 24px;

  background: #f9fafb;
`,up=l.default.p.withConfig({componentId:"zh__sc-816f3394-3"})`
  width: 100%;
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #101828;
  text-align: center;
`,uu=l.default.div.withConfig({componentId:"zh__sc-816f3394-4"})`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  min-height: 168px;
  padding: 24px 40px;
  border: 1px solid #4f39f6;
  border-radius: 16px;

  color: #4f39f6;

  background: ${({$isDragging:e})=>e?"#f6f3ff":"#fff"};

  &:hover {
    background-color: #f6f3ff;
  }

  &:active {
    background-color: #efeaff;
  }
`,ux=l.default.div.withConfig({componentId:"zh__sc-816f3394-5"})`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
`,ug=l.default.div.withConfig({componentId:"zh__sc-816f3394-6"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  align-self: stretch;
`,um=l.default.p.withConfig({componentId:"zh__sc-816f3394-7"})`
  margin: 0;

  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  color: #4f39f6;
  text-align: center;
`,ub=l.default.p.withConfig({componentId:"zh__sc-816f3394-8"})`
  margin: 0;
  font-size: 14px;
  line-height: 24px;
  color: #99a1af;
`,uj=l.default.div.withConfig({componentId:"zh__sc-816f3394-9"})`
  overflow: auto hidden;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

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
`,u_=l.default.div.withConfig({componentId:"zh__sc-816f3394-10"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,uw=l.default.div.withConfig({componentId:"zh__sc-816f3394-11"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`,uy=l.default.p.withConfig({componentId:"zh__sc-816f3394-12"})`
  overflow: hidden;

  max-width: 196px;
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #0a0a0a;
  text-overflow: ellipsis;
  white-space: nowrap;
`,uv=l.default.p.withConfig({componentId:"zh__sc-816f3394-13"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  color: #0a0a0a;
`,uC=l.default.button.withConfig({componentId:"zh__sc-816f3394-14"})`
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
`,uI=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-816f3394-15"})`
  height: 36px;
  padding: 8px 16px;
`,uz=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-816f3394-16"})`
  gap: 4px;
  height: 36px;
  padding: 8px 16px;
  border-radius: 4px;
`,{SERVICE_TYPE:uT,BANK_NAME:uE}=eu.default.enums;function uS(){let e=a.default.modal.organization.accountAdd,n="edit"===e.mode,l=(a.default.data.organization.serviceList.data?.serviceList??[]).filter(e=>!0===e.operatingStatus),o=n?e.serviceType:l[0]?.type??e.serviceType,[r,s]=(0,i.useState)(o),[c,f]=(0,i.useState)(e.accountNumber),[h,p]=(0,i.useState)(e.bankName),[u,x]=(0,i.useState)(e.accountHolder),[g,m]=(0,i.useState)(e.useFlag),[b,j]=(0,i.useState)(e.purpose),[_,w]=(0,i.useState)(""),[y,v]=(0,i.useState)(""),[C,I]=(0,i.useState)(!1),z=c.trim(),T=u.trim(),E=e.accountNumber.trim(),S=e.accountHolder.trim(),k=r!==e.serviceType||z!==E||h!==e.bankName||T!==S||b.trim()!==e.purpose.trim()||g!==e.useFlag,D=()=>{C||(s(e.serviceType),f(e.accountNumber),p(e.bankName),x(e.accountHolder),m(e.useFlag),j(e.purpose),w(""),v(""),e.close())},A=async()=>{if(C)return;let t=c.trim(),i=u.trim(),l=a.default.organizationSetting.staff.organizationId,d=""===t?"필수 입력값입니다.":"",o=""===i?"필수 입력값입니다.":"";if(w(d),v(o),""!==d||""!==o)return;if(null===l)return void a.default.ui.layout.toast.error(n?"기관 식별자가 없어 계좌를 수정할 수 없습니다.":"기관 식별자가 없어 계좌를 생성할 수 없습니다.");w(""),v(""),I(!0);let s={serviceType:r,accountNumber:t,bankName:h,accountHolder:i,useFlag:g,purpose:b.trim()},[f]=n&&null!==e.accountId?await a.default.data.organization.bankAccountList.patch({orgId:l,accountId:e.accountId,payload:s}):await a.default.data.organization.bankAccountList.create({orgId:l,payload:s});if(null!==f){I(!1),a.default.ui.layout.toast.error(f.message);return}let p=a.default.data.organization.cardList.query;null!==p&&p.orgId===l&&await a.default.data.organization.cardList.refetch(),I(!1),D()};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(ua.Container,{children:[(0,t.jsxs)(ua.Header,{children:[(0,t.jsx)(ua.HeaderLeft,{children:(0,t.jsx)(ua.HeaderTitle,{children:n?"계좌 정보 수정하기":"계좌 정보 추가하기"})}),(0,t.jsx)(ua.HeaderRight,{children:(0,t.jsxs)(uk,{onClick:D,disabled:C,children:[(0,t.jsx)(i3.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(ua.Body,{children:[(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"서비스 종류를 선택해주세요."}),(0,t.jsx)(uD,{value:r,onChange:e=>{let t=e.target.value;t in uT&&s(t)},children:l.map(e=>(0,t.jsxs)("option",{value:e.type,children:[uT[e.type].label," 서비스"]},e.type))})]}),(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"계좌번호를 입력해주세요."}),(0,t.jsx)(uA,{placeholder:"000-0000-0000-00",value:c,onChange:e=>{w(""),f(e.target.value.replace(/[^0-9-]/g,""))}}),(0,t.jsx)(ua.BodyRowErrorText,{$isVisible:_.trim().length>0,children:_})]}),(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"은행을 선택해주세요."}),(0,t.jsx)(uD,{value:h,onChange:e=>{let t=e.target.value;t in uE&&p(t)},children:Object.entries(uE).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))})]}),(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"예금주를 입력해주세요."}),(0,t.jsx)(uA,{placeholder:"기관명 또는 성명",value:u,onChange:e=>{v(""),x(e.target.value)}}),(0,t.jsx)(ua.BodyRowErrorText,{$isVisible:y.trim().length>0,children:y})]}),(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"용도를 입력해주세요. (선택)"}),(0,t.jsx)(uA,{placeholder:"예: 본인부담금 수납, 급여 지급",maxLength:100,value:b,onChange:e=>j(e.target.value)})]}),(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"서류 반영 여부를 선택해주세요."}),(0,t.jsxs)(ua.RadioCheckContainer,{children:[(0,t.jsxs)(ua.RadioCheckLabel,{children:[(0,t.jsx)(uL,{checked:g,onChange:()=>{m(!0)}}),"반영"]}),(0,t.jsxs)(ua.RadioCheckLabel,{children:[(0,t.jsx)(uL,{checked:!1===g,onChange:()=>{m(!1)}}),"미반영"]})]})]})]}),(0,t.jsxs)(ua.Footer,{children:[(0,t.jsx)(u$,{onClick:()=>{C||(s(o),f(""),p("NONGHYUP"),x(""),m(!0),j(""),w(""),v(""))},disabled:C,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(uR,{onClick:()=>{A()},disabled:C||n&&!1===k,children:[(0,t.jsx)(lY.default,{sx:{fontSize:20}}),"저장"]})]})]})})}let uk=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-e7085db1-0"})`
  ${ua.btnStyle}
`,uD=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-e7085db1-1"})`
  ${ua.inputStyle}
  width: 200px;
`,uA=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-e7085db1-2"})`
  ${ua.inputStyle}
  width: 100%;
`,uL=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-e7085db1-3"})``,u$=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-e7085db1-4"})`
  ${ua.btnStyle}
`,uR=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-e7085db1-5"})`
  ${ua.btnStyle}
`,uO=(0,n.observer)(function(){return"ready"!==a.default.modal.organization.accountAdd.status?null:(0,t.jsx)(uS,{})}),uP=(0,nq.default)((0,t.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew"),{CARD_USAGE:uN,BANK_NAME:uM,SERVICE_TYPE:uF}=eu.default.enums;function uB(){let e=a.default.modal.organization.cardAdd,n="edit"===e.mode,l=a.default.organizationSetting.staff.organizationId,o=a.default.data.organization.bankAccountList,r=o.data??[],[s,c]=(0,i.useState)(e.cardUsage),[f,h]=(0,i.useState)(e.expiry),[p,u]=(0,i.useState)(""),[x,g]=(0,i.useState)(""===e.bankAccountId?tf.SELECT_EMPTY_VALUE:e.bankAccountId),[m,b]=(0,i.useState)(e.cardNumberHead),[j,_]=(0,i.useState)(e.cardNumberTail),[w,y]=(0,i.useState)(""),[v,C]=(0,i.useState)(!1),[I,z]=(0,i.useState)(!1),[T,E]=(0,i.useState)(!1),S=x===tf.SELECT_EMPTY_VALUE?"":x,k=s!==e.cardUsage||f!==e.expiry||S!==e.bankAccountId||m!==e.cardNumberHead||j!==e.cardNumberTail;(0,i.useEffect)(()=>{if(null===l)return void o.reset();let e=o.query;(null===e||e.orgId!==l)&&o.setQuery({orgId:l})},[o,l]);let D=()=>{T||(c(e.cardUsage),h(e.expiry),u(""),g(""===e.bankAccountId?tf.SELECT_EMPTY_VALUE:e.bankAccountId),b(e.cardNumberHead),_(e.cardNumberTail),y(""),C(!1),z(!1),e.close())},A=async()=>{let t;if(T||n&&!1===k)return;let i=4!==m.length,d=j.length<3||j.length>4;if(C(i),z(d),y(i||d?"유효한 카드번호 형식이 아닙니다.":""),i||d)return;if(null===l)return void a.default.ui.layout.toast.error(n?"기관 식별자가 없어 카드를 수정할 수 없습니다.":"기관 식별자가 없어 카드를 생성할 수 없습니다.");y("");let o=""===f?null:null===(t=/^(0[1-9]|1[0-2])\/(\d{2})$/.exec(f))?null:{expiryMonth:Number(t[1]),expiryYear:2e3+Number(t[2])};if(""!==f&&null===o)return void u("유효기간은 MM/YY로 입력해주세요. (예: 07/28)");u(""),E(!0);let r={cardNumber:`${m}-****-****-${j}`,bankAccountId:x===tf.SELECT_EMPTY_VALUE?void 0:x,cardUsage:s,...null===o?{}:o},[c]=n&&null!==e.cardId?await a.default.data.organization.cardList.patch({orgId:l,cardId:e.cardId,payload:r}):await a.default.data.organization.cardList.create({orgId:l,payload:r});if(null!==c){E(!1),a.default.ui.layout.toast.error(c.message);return}E(!1),D()};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(ua.Container,{children:[(0,t.jsxs)(ua.Header,{children:[(0,t.jsx)(ua.HeaderLeft,{children:(0,t.jsx)(ua.HeaderTitle,{children:n?"카드 정보 수정하기":"카드 정보 추가하기"})}),(0,t.jsx)(ua.HeaderRight,{children:(0,t.jsxs)(uU,{onClick:D,disabled:T,children:[(0,t.jsx)(i3.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(ua.Body,{children:[(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"카드번호의 앞 4자리와 끝 3~4자리를 입력해주세요."}),(0,t.jsxs)(uH,{children:[(0,t.jsx)(uG,{$hasError:v,placeholder:"0000",maxLength:4,value:m,onChange:e=>{b(e.target.value.replace(/[^0-9]/g,"")),C(!1),y(I?"유효한 카드번호 형식이 아닙니다.":"")}}),(0,t.jsx)(uG,{placeholder:"****",value:"****",disabled:!0}),(0,t.jsx)(uG,{placeholder:"****",value:"****",disabled:!0}),(0,t.jsx)(uG,{$hasError:I,placeholder:"0000",maxLength:4,value:j,onChange:e=>{_(e.target.value.replace(/[^0-9]/g,"")),z(!1),y(v?"유효한 카드번호 형식이 아닙니다.":"")}})]}),(0,t.jsx)(ua.BodyRowErrorText,{$isVisible:w.trim().length>0,children:w}),(0,t.jsx)(uK,{$isVisible:0===w.trim().length,children:"⚠ 가운데 8자리는 입력하지 않습니다."})]}),(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"카드와 연결된 계좌가 있는 경우, 등록된 계좌를 선택해주세요."}),(0,t.jsxs)(uW,{$isEmptySelected:x===tf.SELECT_EMPTY_VALUE,value:x,onChange:e=>{g(e.target.value)},disabled:"loading"===o.status,children:[(0,t.jsx)("option",{value:tf.SELECT_EMPTY_VALUE,disabled:!0,children:"계좌 없음"}),r.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.serviceType?`${uF[e.serviceType].label} 서비스 `:"- ",e.accountNumber," (은행 ",uM[e.bankName].label,", 예금주"," ",e.accountHolder??"-",")"]},e.id))]}),(0,t.jsxs)(uX,{children:[(0,t.jsx)(uq,{children:"⚠ 원하는 계좌가 목록에 없나요?"}),(0,t.jsxs)(uQ,{onClick:()=>{T||(D(),a.default.modal.organization.accountAdd.show())},type:"button",disabled:T,children:["계좌 먼저 등록하기",(0,t.jsx)(uP,{sx:{fontSize:16,position:"relative",top:-1}})]})]})]}),(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"유효기간을 입력해주세요. (선택)"}),(0,t.jsx)(uY,{placeholder:"MM/YY",inputMode:"numeric",value:f,onChange:e=>{let t;u(""),h((t=e.target.value.replace(/\D/g,"").slice(0,4)).length<=2?t:`${t.slice(0,2)}/${t.slice(2)}`)}}),(0,t.jsx)(ua.BodyRowErrorText,{$isVisible:p.length>0,children:p})]}),(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"카드 용도를 선택하세요."}),(0,t.jsx)(uV,{value:s,onChange:e=>{let t=e.target.value;t in uN&&c(t)},children:Object.entries(uN).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))})]})]}),(0,t.jsxs)(ua.Footer,{children:[(0,t.jsx)(uZ,{onClick:()=>{T||(c("OPERATING"),h(""),u(""),g(tf.SELECT_EMPTY_VALUE),b(""),_(""),y(""),C(!1),z(!1))},disabled:T,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(uJ,{onClick:()=>{A()},disabled:T||n&&!1===k,children:[(0,t.jsx)(lY.default,{sx:{fontSize:20}}),"저장"]})]})]})})}let uU=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-4440bebb-0"})`
  ${ua.btnStyle}
`,uY=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-4440bebb-1"})`
  ${ua.inputStyle}
  width: 120px;
`,uV=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-4440bebb-2"})`
  ${ua.inputStyle}
  width: 180px;
`,uW=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-4440bebb-3"})`
  ${ua.inputStyle}
  width: 100%;
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
`,uH=l.default.div.withConfig({componentId:"zh__sc-4440bebb-4"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,uG=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-4440bebb-5"})`
  ${ua.inputStyle}
  width: 75px;
  border-color: ${({$hasError:e})=>!0===e?"#ff4d4f":"#e5e9ef"};
  text-align: center;

  &:disabled {
    color: #6b7280;
    background: #f3f4f6;
  }
`,uK=(0,l.default)(ua.BodyRowErrorText).withConfig({componentId:"zh__sc-4440bebb-6"})`
  color: #ff6900;
`,uX=l.default.div.withConfig({componentId:"zh__sc-4440bebb-7"})`
  position: absolute;
  right: 0;
  bottom: -24px;
  left: 0;

  display: flex;
  gap: 10px;
  align-items: center;
`,uq=l.default.div.withConfig({componentId:"zh__sc-4440bebb-8"})`
  font-size: 13px;
  line-height: 1.35;
  color: #ff6900;
`,uQ=l.default.button.withConfig({componentId:"zh__sc-4440bebb-9"})`
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
`,uZ=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-4440bebb-10"})`
  ${ua.btnStyle}
`,uJ=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-4440bebb-11"})`
  ${ua.btnStyle}
`,u0=(0,n.observer)(function(){return"ready"!==a.default.modal.organization.cardAdd.status?null:(0,t.jsx)(uB,{})});var u1=e.i(93847),u2=e.i(86400);let u6="__other__";function u4(){let e=a.default.modal.organization.contactAdd,n="edit"===e.mode,l=a.default.data.organization.serviceList.data?.serviceList??[],o=a.default.organizationSetting.staff.staffAccountList,[s,c]=(0,i.useState)(e.serviceType??(""===e.serviceLabel.trim()?tf.SELECT_EMPTY_VALUE:u6)),[f,h]=(0,i.useState)(e.serviceLabel),[p,u]=(0,i.useState)(""),[x,g]=(0,i.useState)(e.staffId??tf.SELECT_EMPTY_VALUE),[m,b]=(0,i.useState)(e.phoneNumber),[j,_]=(0,i.useState)(e.mobileProvider),[w,y]=(0,i.useState)(""),[v,C]=(0,i.useState)(!1),I=o.filter(e=>"RESIGNED"!==e.employmentStatus||e.id===x),z=s===tf.SELECT_EMPTY_VALUE||s===u6?[]:I.filter(e=>(e.serviceTypes??[]).includes(s)||e.id===x),T=z.some(e=>e.id!==x)?z:I,E=()=>{c(tf.SELECT_EMPTY_VALUE),h(""),u(""),g(tf.SELECT_EMPTY_VALUE),b(""),_("KT"),y("")},S=()=>{v||(E(),e.close())},k=async()=>{if(v)return;let t=m.trim();if(""===t)return void y("휴대폰은 필수 입력값입니다.");if(!0!==u2.default.brand.phoneNumber.is(t))return void y("휴대폰 형식이 올바르지 않습니다.");y("");let i=s===u6,l=f.trim();if(i&&""===l)return void u("기타 서비스 이름을 입력해주세요.");u("");let d=s in r.default?s:null;C(!0);let[o]=n&&null!==e.contactId?await a.default.organizationSetting.staff.patchContact({contactId:e.contactId,payload:{serviceType:d,serviceLabel:i?l:null,staffId:x===tf.SELECT_EMPTY_VALUE?null:x,phoneNumber:t,mobileProvider:j}}):await a.default.organizationSetting.staff.createContact({serviceType:d??void 0,serviceLabel:i?l:void 0,staffId:x===tf.SELECT_EMPTY_VALUE?void 0:x,phoneNumber:t,mobileProvider:j});if(null!==o){C(!1),a.default.ui.layout.toast.error(o.message);return}C(!1),S()};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(ua.Container,{children:[(0,t.jsxs)(ua.Header,{children:[(0,t.jsx)(ua.HeaderLeft,{children:(0,t.jsx)(ua.HeaderTitle,{children:n?"연락처 수정하기":"연락처 추가하기"})}),(0,t.jsx)(ua.HeaderRight,{children:(0,t.jsxs)(u3,{onClick:S,disabled:v,children:[(0,t.jsx)(i3.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(ua.Body,{children:[(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsxs)(ua.BodyRowLabelRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"서비스 종류를 선택해주세요."}),(0,t.jsx)(ua.BodyRowHelperText,{children:"필수 입력값이 아닙니다. 입력란을 비워둘 수 있습니다."})]}),(0,t.jsxs)(u9,{value:s,onChange:e=>{let t=e.target.value;u(""),c(t in r.default||t===u6?t:tf.SELECT_EMPTY_VALUE)},children:[l.filter(e=>!0===e.operatingStatus).map(e=>(0,t.jsxs)("option",{value:e.type,children:[r.default[e.type].label," 서비스"]},e.type)),(0,t.jsx)("option",{value:u6,children:"기타 (직접 입력)"}),(0,t.jsx)("option",{value:tf.SELECT_EMPTY_VALUE,children:"선택 안함"})]}),s===u6&&(0,t.jsx)(u8,{style:{width:263,marginTop:8},placeholder:"예: 병원동행",maxLength:50,value:f,onChange:e=>{u(""),h(e.target.value)}}),(0,t.jsx)(ua.BodyRowErrorText,{$isVisible:p.length>0,children:p})]}),(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsxs)(ua.BodyRowLabelRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"담당자를 선택해주세요."}),(0,t.jsx)(ua.BodyRowHelperText,{children:"필수 입력값이 아닙니다. 입력란을 비워둘 수 있습니다."})]}),(0,t.jsxs)(u9,{style:{width:263},value:x,onChange:e=>{g(e.target.value)},children:[T.map(e=>(0,t.jsx)("option",{value:e.id,children:null===e.position?e.name:`${e.name} (직급 ${e.position.name})`},e.id)),(0,t.jsx)("option",{value:tf.SELECT_EMPTY_VALUE,children:"선택 안함"})]})]}),(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsxs)(ua.BodyRowLabelRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"휴대폰 번호 및 통신사를 선택해주세요."}),(0,t.jsx)(ua.BodyRowHelperText,{children:"필수 입력값 입니다."})]}),(0,t.jsxs)(u7,{children:[(0,t.jsx)(u8,{style:{width:191},placeholder:"010-0000-0000",value:m,onChange:e=>{var t;t=e.target.value,y(""),b(u2.default.brand.phoneNumber.format(t))}}),(0,t.jsx)(u9,{style:{width:131},value:j,onChange:e=>{let t=e.target.value;t in u1.default&&_(t)},children:Object.entries(u1.default).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))})]}),(0,t.jsx)(ua.BodyRowErrorText,{$isVisible:w.trim().length>0,children:w})]})]}),(0,t.jsxs)(ua.Footer,{children:[(0,t.jsx)(xe,{onClick:()=>{v||E()},disabled:v,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(xt,{onClick:()=>{k()},disabled:v,children:[(0,t.jsx)(lY.default,{sx:{fontSize:20}}),n?"수정":"저장"]})]})]})})}let u5=(0,n.observer)(function(){return"ready"!==a.default.modal.organization.contactAdd.status?null:(0,t.jsx)(u4,{})}),u3=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-665cc4f2-0"})`
  ${ua.btnStyle}
`,u9=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-665cc4f2-1"})`
  ${ua.inputStyle}
  width: 200px;
`,u8=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-665cc4f2-2"})`
  ${ua.inputStyle}
`,u7=l.default.div.withConfig({componentId:"zh__sc-665cc4f2-3"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,xe=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-665cc4f2-4"})`
  ${ua.btnStyle}
`,xt=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-665cc4f2-5"})`
  ${ua.btnStyle}
`,xn=(0,n.observer)(function({acceptFileTypes:e,isError:n,onSelectFile:l}){let{isWindowFileDragging:d}=a.default.ui.layout,o=(0,i.useRef)(null);(0,K.default)(e=>{let t=e[0];void 0!==t&&l(t)});let r=n?"지원하지 않는 파일 형식입니다.":d?"파일을 여기에 놓으면 업로드 됩니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.";return(0,t.jsxs)(xi,{children:[(0,t.jsx)(xl,{children:"로고 또는 도장 이미지를 업로드해 주세요."}),(0,t.jsxs)(xd,{$isWindowFileDragging:d,$isError:n,onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault();let t=e.dataTransfer.files[0];void 0!==t&&l(t)},onClick:e=>{e.target instanceof HTMLElement&&(e.target.closest("button")||o.current?.click())},children:[!n&&(0,t.jsx)(xo,{children:(0,t.jsx)(ep.Upload,{size:26,color:"#4f39f6"})}),(0,t.jsxs)(xr,{children:[(0,t.jsx)(xs,{$isError:n,children:r}),(0,t.jsx)(xc,{children:"지원 파일 형식: PNG, JPG, JPEG"})]})]}),(0,t.jsx)(xa,{ref:o,type:"file",accept:e,onChange:e=>{let t=e.target.files?.[0];void 0!==t&&(l(t),e.target.value="")}})]})}),xi=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-0"})`
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
`,xl=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px; /* 133.333% */
  color: #101828;
  text-align: center;
`,xa=l.default.input.withConfig({componentId:"zh__sc-f01fc0e2-2"})`
  display: none;
`,xd=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-3"})`
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
`,xo=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-4"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,xr=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,xs=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-6"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,xc=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-7"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #99a1af;
`,xf=(0,nq.default)((0,t.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove");var xh=e.i(47885),xp=e.i(11974);let xu=async(e,t)=>""===e||1===t?e:new Promise(n=>{let i=new Image;i.onload=()=>{let l=document.createElement("canvas");l.width=235,l.height=235;let a=l.getContext("2d");if(null===a)return void n(e);let d=Math.min(l.width/i.width,l.height/i.height),o=i.width*d*t,r=i.height*d*t,s=(l.width-o)/2,c=(l.height-r)/2;a.clearRect(0,0,l.width,l.height),a.drawImage(i,s,c,o,r),n(l.toDataURL("image/png"))},i.onerror=()=>{n(e)},i.src=e});function xx({file:e,onProcessedImageChange:n}){let[l,a]=(0,i.useState)(100),[d,o]=(0,i.useState)(100),[r,s]=(0,i.useState)(100),[c,f]=(0,i.useState)(""),[h,p]=(0,i.useState)(""),u=(0,i.useRef)(0),x=(0,i.useRef)(0);return(0,i.useEffect)(()=>{let e=window.setTimeout(()=>{s(d)},120);return()=>{window.clearTimeout(e)}},[d]),(0,i.useEffect)(()=>{let t=u.current+1;u.current=t,(async()=>{let{adjustedUrl:n}=await (0,xp.processBackgroundRemoval)({file:e,whiteThreshold:xh.DEFAULT_WHITE_THRESHOLD,softness:xh.DEFAULT_SOFTNESS,contrast:r,selectionRect:null});u.current===t&&f(n)})()},[r,e,n]),(0,i.useEffect)(()=>{if(""===c)return;let e=x.current+1;x.current=e,(async()=>{let t=await xu(c,l/100);x.current===e&&(p(t),n(t))})()},[c,l,n]),(0,t.jsxs)(xg,{children:[(0,t.jsxs)(xm,{children:[(0,t.jsx)(xb,{children:(0,t.jsx)(en.default.BackgroundReplace,{size:16,color:"#1C1B1F"})}),(0,t.jsxs)(xj,{children:["업로드된 ",e.name," 이미지의 배경을 제거했습니다.",(0,t.jsx)("br",{}),"아래에서 크기와 선명도를 확인한 뒤 저장을 완료해주세요!"]})]}),(0,t.jsxs)(x_,{children:[(0,t.jsx)(xw,{children:"이미지 미리보기"}),(0,t.jsxs)(xy,{children:[(0,t.jsxs)(xv,{children:[(0,t.jsx)(xC,{children:""!==h&&(0,t.jsx)(xI,{src:h,alt:`${e.name} 미리보기`})}),(0,t.jsxs)(xz,{children:[(0,t.jsx)(xT,{children:(0,t.jsx)(tc.default,{sx:{fontSize:22}})}),(0,t.jsx)(xE,{children:"체크 무늬는 투명 배경을 뜻합니다. 실제 저장 시에는 배경 없이 저장됩니다."})]})]}),(0,t.jsxs)(xS,{children:[(0,t.jsxs)(xk,{children:[(0,t.jsx)(xD,{children:"크기 조정하기"}),(0,t.jsxs)(xA,{children:[(0,t.jsxs)(xL,{children:[(0,t.jsx)(x$,{onClick:()=>{a(e=>Math.max(e-10,100))},disabled:l<=100,children:(0,t.jsx)(xf,{sx:{fontSize:24}})}),(0,t.jsx)(xR,{children:"작게"})]}),(0,t.jsx)(xO,{min:100,max:500,value:l,onChange:a}),(0,t.jsxs)(xL,{children:[(0,t.jsx)(x$,{onClick:()=>{a(e=>Math.min(e+10,500))},disabled:l>=500,children:(0,t.jsx)(fh.default,{sx:{fontSize:24}})}),(0,t.jsx)(xR,{children:"크게"})]})]})]}),(0,t.jsx)(xP,{}),(0,t.jsxs)(xk,{children:[(0,t.jsx)(xD,{children:"선명도 조정하기"}),(0,t.jsxs)(xA,{children:[(0,t.jsxs)(xL,{children:[(0,t.jsx)(x$,{onClick:()=>{o(e=>{let t=Math.max(e-5,xh.MIN_CONTRAST);return s(t),t})},disabled:d<=xh.MIN_CONTRAST,children:(0,t.jsx)(xf,{sx:{fontSize:24}})}),(0,t.jsx)(xR,{children:"부드럽게"})]}),(0,t.jsx)(xO,{min:xh.MIN_CONTRAST,max:xh.MAX_CONTRAST,value:d,onChange:o,onChangeEnd:s}),(0,t.jsxs)(xL,{children:[(0,t.jsx)(x$,{onClick:()=>{o(e=>{let t=Math.min(e+5,xh.MAX_CONTRAST);return s(t),t})},disabled:d>=xh.MAX_CONTRAST,children:(0,t.jsx)(fh.default,{sx:{fontSize:24}})}),(0,t.jsx)(xR,{children:"선명하게"})]})]})]})]})]})]})]})}let xg=l.default.div.withConfig({componentId:"zh__sc-3b741e84-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  height: 100%;
  padding: 32px 24px;

  background: #fff;
`,xm=l.default.div.withConfig({componentId:"zh__sc-3b741e84-1"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,xb=l.default.div.withConfig({componentId:"zh__sc-3b741e84-2"})``,xj=l.default.div.withConfig({componentId:"zh__sc-3b741e84-3"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,x_=l.default.div.withConfig({componentId:"zh__sc-3b741e84-4"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,xw=l.default.div.withConfig({componentId:"zh__sc-3b741e84-5"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 114.286% */
  color: #0a0a0a;
`,xy=l.default.div.withConfig({componentId:"zh__sc-3b741e84-6"})`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,xv=l.default.section.withConfig({componentId:"zh__sc-3b741e84-7"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  width: 235px;
`,xC=l.default.div.withConfig({componentId:"zh__sc-3b741e84-8"})`
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
`,xI=l.default.img.withConfig({componentId:"zh__sc-3b741e84-9"})`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,xz=l.default.div.withConfig({componentId:"zh__sc-3b741e84-10"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  color: #0a0a0a;
`,xT=l.default.div.withConfig({componentId:"zh__sc-3b741e84-11"})`
  position: relative;
  top: -3px;
`,xE=l.default.div.withConfig({componentId:"zh__sc-3b741e84-12"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 114.286% */
`,xS=l.default.section.withConfig({componentId:"zh__sc-3b741e84-13"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
`,xk=l.default.div.withConfig({componentId:"zh__sc-3b741e84-14"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,xD=l.default.h5.withConfig({componentId:"zh__sc-3b741e84-15"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 114.286% */
  color: #0a0a0a;
`,xA=l.default.div.withConfig({componentId:"zh__sc-3b741e84-16"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;
`,xL=l.default.div.withConfig({componentId:"zh__sc-3b741e84-17"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 56px;
`,x$=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-3b741e84-18"})`
  display: flex;
  gap: 4px;
  align-items: center;
  align-self: stretch;

  height: 36px;
  padding: 8px 16px;
`,xR=l.default.div.withConfig({componentId:"zh__sc-3b741e84-19"})`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #4f39f6;
  text-align: center;
`,xO=(0,l.default)(o.default.Input.Slider).withConfig({componentId:"zh__sc-3b741e84-20"})`
  position: relative;
  top: 10px;
`,xP=l.default.div.withConfig({componentId:"zh__sc-3b741e84-21"})`
  align-self: stretch;
  border-top: 1px solid #d1d5db;
`,xN=(0,n.observer)(function(){let e=a.default.modal.organization.imageAdjustUpload,{status:n,close:l,resetToUploadStep:o,selectedFile:r}=e,[s,c]=(0,i.useState)(!1),f=(0,i.useRef)(null);if((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(f.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)return null;let h=null===r,p="logo"===e.target?"로고":"도장",u=async()=>{!0===await e.save()&&c(!1)};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(xM,{ref:f,children:[(0,t.jsxs)(ua.Header,{children:[(0,t.jsx)(ua.HeaderLeft,{children:(0,t.jsx)(ua.HeaderTitle,{children:"이미지 업로드하기"})}),(0,t.jsx)(ua.HeaderRight,{children:(0,t.jsxs)(xF,{onClick:()=>{c(!1),l()},children:[(0,t.jsx)(i3.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsx)(xB,{children:h?(0,t.jsx)(xn,{acceptFileTypes:e.acceptFileTypes,isError:e.isError,onSelectFile:e.setSelectedFile}):(0,t.jsx)(xx,{file:r,onProcessedImageChange:e.setProcessedImageDataUrl})}),(0,t.jsxs)(ua.Footer,{children:[(0,t.jsx)(xU,{onClick:()=>{c(!1),o()},disabled:h||e.isSaving,children:"다시 업로드하기"}),(0,t.jsxs)(xY,{onClick:()=>{c(!0)},disabled:h||e.isSaving,children:[(0,t.jsx)(lY.default,{sx:{fontSize:20}}),"최종확인 및 저장"]})]}),(0,t.jsx)(xV,{isOpen:s,targetLabel:p,isSaving:e.isSaving,onCancel:()=>{e.isSaving||c(!1)},onConfirm:()=>{u()}})]})})}),xM=(0,l.default)(ua.Container).withConfig({componentId:"zh__sc-665af392-0"})`
  position: relative;
  width: 626px;
`,xF=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-665af392-1"})`
  ${ua.btnStyle}
`,xB=(0,l.default)(ua.Body).withConfig({componentId:"zh__sc-665af392-2"})`
  padding: 0;
`,xU=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-665af392-3"})`
  ${ua.btnStyle}
`,xY=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-665af392-4"})`
  ${ua.btnStyle}
`;function xV({isOpen:e,targetLabel:n,isSaving:i,onCancel:l,onConfirm:a}){return!0!==e?null:(0,t.jsx)(xW,{children:(0,t.jsxs)(xH,{children:[(0,t.jsxs)(xG,{children:[(0,t.jsxs)(xK,{children:[n," 이미지를 저장할까요?"]}),(0,t.jsxs)(xX,{children:["저장된 ",n," 이미지는 출력용 서류에서 사용할 수 있습니다.",(0,t.jsx)("br",{}),"이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다."]})]}),(0,t.jsxs)(xq,{children:[(0,t.jsx)(xQ,{type:"button",onClick:l,disabled:!0===i,children:"취소하기"}),(0,t.jsx)(xZ,{type:"button",onClick:a,disabled:!0===i,children:"저장하기"})]})]})})}let xW=l.default.div.withConfig({componentId:"zh__sc-665af392-5"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,xH=l.default.div.withConfig({componentId:"zh__sc-665af392-6"})`
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
`,xG=l.default.div.withConfig({componentId:"zh__sc-665af392-7"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,xK=l.default.h3.withConfig({componentId:"zh__sc-665af392-8"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,xX=l.default.p.withConfig({componentId:"zh__sc-665af392-9"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,xq=l.default.div.withConfig({componentId:"zh__sc-665af392-10"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`,xQ=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-665af392-11"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
`,xZ=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-665af392-12"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`;var xJ=e.i(24986),x0=e.i(13269);let x1=()=>{let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},x2=function({staffAccountId:e,staffName:n,onClose:l,onResigned:d}){let[r,s]=(0,i.useState)("input"),[c,f]=(0,i.useState)(x1),[h,p]=(0,i.useState)(""),[u,x]=(0,i.useState)(null),[g,m]=(0,i.useState)(""),[b,j]=(0,i.useState)(!1),_=(0,i.useRef)(null),w=async()=>{if(null===u)return;j(!0);let[t]=await a.default.data.staffAccount.resign({id:e,file:u,resignedOn:c,reason:h});if(j(!1),null!==t){m(t.message||"퇴사 처리에 실패했습니다."),s("input");return}a.default.ui.layout.toast.success(`${n}님을 퇴사 처리했습니다.`),d()};return(0,t.jsx)(x6,{role:"dialog","aria-modal":"true","aria-label":"퇴사 처리",onClick:()=>{b||l()},children:(0,t.jsxs)(x4,{onClick:e=>e.stopPropagation(),children:[(0,t.jsx)(x5,{children:"input"===r?`${n} 퇴사 처리`:"최종확인"}),"input"===r?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(x3,{children:[(0,t.jsx)(x9,{children:"사직서"}),(0,t.jsx)("input",{ref:_,type:"file",accept:"image/*,application/pdf",hidden:!0,onChange:e=>{x(e.target.files?.[0]??null),m("")}}),(0,t.jsxs)(x8,{children:[(0,t.jsx)(o.default.Button.Outlined,{type:"button",onClick:()=>_.current?.click(),children:null===u?"사직서 올리기":"다시 고르기"}),(0,t.jsx)(x7,{children:u?.name??"서명한 사직서를 사진이나 PDF로 올려 주세요."})]})]}),(0,t.jsxs)(x3,{children:[(0,t.jsx)(x9,{children:"퇴사일"}),(0,t.jsx)(ge,{type:"date",value:c,onChange:e=>f(e.target.value)})]}),(0,t.jsxs)(x3,{children:[(0,t.jsx)(x9,{children:"사유 (선택)"}),(0,t.jsx)(ge,{type:"text",maxLength:200,placeholder:"예: 개인 사정",value:h,onChange:e=>p(e.target.value)})]})]}):(0,t.jsxs)(gt,{children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:n}),"님을 ",(0,t.jsx)("strong",{children:c})," 자로 퇴사 처리합니다."]}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"이 계정은 바로 로그인할 수 없고, 접속 중인 화면도 끊깁니다(계정 종료)."}),(0,t.jsx)("li",{children:"맡고 있던 업무 연락처 담당에서 빠집니다."}),(0,t.jsx)("li",{children:"담당 서비스 배정이 해제됩니다(재입사하면 다시 배정해 주세요)."}),(0,t.jsx)("li",{children:"근무자 정보·작성한 서류·사직서는 그대로 남습니다(삭제와 다름)."}),(0,t.jsx)("li",{children:"다시 일하게 되면 근무 상태를 “근무 중(재입사)”으로 바꾸면 같은 아이디로 씁니다."})]})]}),(0,t.jsx)(gn,{children:g}),(0,t.jsxs)(gi,{children:[(0,t.jsx)(o.default.Button.Outlined,{type:"button",disabled:b,onClick:"input"===r?l:()=>s("input"),children:"input"===r?"취소":"이전"}),"input"===r?(0,t.jsx)(o.default.Button.Filled.Primary,{type:"button",onClick:()=>{null===u?m("사직서(사진 또는 PDF)를 올려 주세요."):/^\d{4}-\d{2}-\d{2}$/.test(c)?(m(""),s("confirm")):m("퇴사일을 골라 주세요.")},children:"다음"}):(0,t.jsx)(gl,{type:"button",disabled:b,onClick:()=>void w(),children:b?"처리 중…":"최종확인 — 퇴사 처리"})]})]})})},x6=l.default.div.withConfig({componentId:"zh__sc-5a9e7b26-0"})`
  position: fixed;
  z-index: 1400;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(16 24 40 / 40%);
`,x4=l.default.div.withConfig({componentId:"zh__sc-5a9e7b26-1"})`
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: min(480px, calc(100vw - 32px));
  padding: 24px;
  border-radius: 12px;

  background: #fff;
`,x5=l.default.p.withConfig({componentId:"zh__sc-5a9e7b26-2"})`
  font-size: 18px;
  font-weight: 700;
  color: #292b36;
`,x3=l.default.div.withConfig({componentId:"zh__sc-5a9e7b26-3"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,x9=l.default.span.withConfig({componentId:"zh__sc-5a9e7b26-4"})`
  font-size: 14px;
  font-weight: 600;
  color: #344054;
`,x8=l.default.div.withConfig({componentId:"zh__sc-5a9e7b26-5"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,x7=l.default.span.withConfig({componentId:"zh__sc-5a9e7b26-6"})`
  overflow: hidden;

  font-size: 13px;
  color: #636978;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ge=l.default.input.withConfig({componentId:"zh__sc-5a9e7b26-7"})`
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
`,gt=l.default.div.withConfig({componentId:"zh__sc-5a9e7b26-8"})`
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
`,gn=l.default.p.withConfig({componentId:"zh__sc-5a9e7b26-9"})`
  min-height: 18px;
  font-size: 13px;
  color: #d92d20;
`,gi=l.default.div.withConfig({componentId:"zh__sc-5a9e7b26-10"})`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,gl=l.default.button.withConfig({componentId:"zh__sc-5a9e7b26-11"})`
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
`,ga=function({staffAccountId:e}){let[n,l]=(0,i.useState)(null);return((0,i.useEffect)(()=>{let t=!1;return av.default.data.staffAccount.getResignation({id:e}).then(([e,n])=>{t||null!==e||l(n)}),()=>{t=!0}},[e]),null===n||null===n.resignedOn)?null:(0,t.jsxs)(gd,{children:["퇴사일 ",n.resignedOn,null!==n.reason?` \xb7 ${n.reason}`:"",null!==n.letterUrl?(0,t.jsx)("a",{href:n.letterUrl,target:"_blank",rel:"noreferrer",children:"사직서 보기"}):null]})},gd=l.default.p.withConfig({componentId:"zh__sc-c8b31d9f-0"})`
  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 13px;
  color: #636978;

  a {
    color: #4f39f6;
    text-decoration: underline;
  }
`,go="__other__",gr=[{value:"ACTIVE",label:"근무 중"},{value:"ON_LEAVE",label:"휴직"},{value:"RESIGNED",label:"퇴사"}],gs=(0,n.observer)(function(){var e;let n=a.default.modal.organization.staffAccountAdd,l="edit"===n.mode,[o,s]=(0,i.useState)(n.name),[c,f]=(0,i.useState)(n.position??tf.SELECT_EMPTY_VALUE),[h,p]=(0,i.useState)(n.phoneNumber),[u,x]=(0,i.useState)(n.employmentStatus),[g,m]=(0,i.useState)(!1),b=(e=n.employmentStatus)===u?null:"ON_LEAVE"===u?"휴직으로 저장하면 이 계정은 일시중지되어 바로 로그인할 수 없습니다. 복직(근무 중)으로 바꾸면 같은 아이디로 다시 쓸 수 있습니다.":"RESIGNED"===u?"퇴사로 저장하면 이 근무자는 바로 로그인할 수 없습니다. 근무자 정보와 작성한 서류는 그대로 남습니다(삭제와 다름).":"RESIGNED"===e?"재입사로 저장합니다. 관리번호·아이디는 예전 것을 그대로 씁니다.":"복직으로 저장합니다. 같은 아이디로 다시 로그인할 수 있습니다.",[j,_]=(0,i.useState)(n.birthDate),[w,y]=(0,i.useState)(n.gender??tf.SELECT_EMPTY_VALUE),[v,C]=(0,i.useState)(n.address),[I,z]=(0,i.useState)(n.jobDuty),[T,E]=(0,i.useState)(n.serviceTypes),[S,k]=(0,i.useState)(""),[D,A]=(0,i.useState)(""),[L,$]=(0,i.useState)(""),[R,O]=(0,i.useState)(n.sealImagePath),[P,N]=(0,i.useState)(""),[M,F]=(0,i.useState)(""),[B,U]=(0,i.useState)(!1),Y=(0,i.useRef)(null),V=a.default.organizationSetting.staff.organizationId,W=a.default.data.organization.staffPositionList,H=a.default.data.organization.serviceList,G=(H.data?.serviceList??[]).filter(e=>!0===e.operatingStatus).map(e=>e.type),K=[...G,...T.filter(e=>!0!==G.includes(e))],X=o!==n.name||c!==(n.position??tf.SELECT_EMPTY_VALUE)||h!==n.phoneNumber||j!==n.birthDate||w!==(n.gender??tf.SELECT_EMPTY_VALUE)||v!==n.address||I!==n.jobDuty||[...T].sort().join(",")!==[...n.serviceTypes].sort().join(",")||R!==n.sealImagePath,q=e=>{a.default.ui.layout.toast.error(e,void 0,Y.current)};(0,i.useEffect)(()=>{null!==V&&W.query?.orgId!==V&&W.setQuery({orgId:V}),null!==V&&H.query?.id!==V&&H.setQuery({id:V})},[V,W,H]);let Q=async()=>{if(c===tf.SELECT_EMPTY_VALUE)return null;if(c!==go)return c;let e=D.trim();if(""===e)return $("새 직급 이름을 입력해주세요."),!1;let t=W.data?.find(t=>t.name===e);if(void 0!==t)return t.id;if(null===V)return!1;let[n,i]=await av.default.data.organization.createStaffPosition({orgId:V,name:e,sortOrder:(W.data?.length??0)+1});return null!==n?($(n.message||"직급을 만들지 못했습니다."),!1):(W.refetch(),i.id)},Z=()=>{s(""),f(tf.SELECT_EMPTY_VALUE),p(""),O(""),_(""),y(tf.SELECT_EMPTY_VALUE),C(""),z(""),E([]),N(""),F(""),k("")},J=()=>{B||(Z(),n.close())},ee=async e=>{try{let t=await fetch(e);if(!0!==t.ok)return[Error("Failed to convert data URL to blob"),null];let n=await t.blob();return[null,n]}catch(e){return[e instanceof Error?e:Error("Failed to convert data URL to blob"),null]}},et=async(e,t,n)=>{let[i,l]=await ee(e);if(null!==i)return[i,null];let[a,d]=await av.default.upload.createPresignedUploadUrl({category:x0.default.STAFF_SEAL,contentType:ud.default.PNG,organizationId:n,staffAccountId:t});if(null!==a)return[a,null];let[o]=await av.default.upload.putFileToPresignedUploadUrl({uploadUrl:d.uploadUrl,contentType:ud.default.PNG,file:l});return null!==o?[o,null]:[null,d.path]},ei=async e=>{let t=a.default.data.organization.contactList.query;if(!0==(null!==t&&t.orgId===e))try{await a.default.data.organization.contactList.refetch()}catch{q("서비스별 업무 연락처 목록을 새로고침하지 못했습니다.")}},el=async()=>{if(B)return;let e=o.trim();""===e?N("이름은 필수 입력값입니다."):N("");let t=h.trim();if(""!==t&&!0!==u2.default.brand.phoneNumber.is(t))return void F("휴대폰 형식이 올바르지 않습니다.");F("");let i=j.trim();if(""!==i&&!0!==(e=>{if(!0!==/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;let[t,n,i]=e.split("-").map(Number);if(void 0===t||void 0===n||void 0===i||t<1900)return!1;let l=new Date(Date.UTC(t,n-1,i));return l.getUTCFullYear()===t&&l.getUTCMonth()===n-1&&l.getUTCDate()===i&&l.getTime()<=Date.now()})(i))return void k("생년월일을 YYYY-MM-DD로 입력해주세요. (예: 1990-03-04)");if(k(""),""===e)return;let d=await Q();if(!1===d)return;let r={birthDate:""===i?void 0:i,gender:w in tp.default?w:void 0,address:""===v.trim()?void 0:v.trim(),jobDuty:""===I.trim()?void 0:I.trim(),serviceTypes:T};U(!0);let s=n.staffAccountId,c=a.default.organizationSetting.staff.organizationId;if(!0!==l){if(null===c){U(!1),q("기관 식별자가 없어 근무자를 생성할 수 없습니다.");return}let[n,i]=await a.default.organizationSetting.staff.createStaffAccount({organizationId:c,name:e,role:xJ.default.STAFF,positionId:d??void 0,phoneNumber:""===t?void 0:t,...r});if(null!==n||null===i){U(!1),q(n?.message??"근무자 생성에 실패했습니다.");return}s=i.id,c=i.organizationId}else{if(null===s){U(!1),q("수정할 근무자 정보를 찾지 못했습니다.");return}let[n]=await a.default.data.staffAccount.patch({id:s,payload:{name:e,positionId:d,phoneNumber:""===t?null:t,employmentStatus:u,...r}});if(null!==n){U(!1),q(n.message||"근무자 수정에 실패했습니다.");return}null!==c&&await ei(c)}let f=R.trim();if(f.startsWith("data:")){if(null===s||null===c){U(!1),q("도장 업로드 대상 정보를 찾지 못했습니다.");return}let[e,t]=await et(f,s,c);if(null!==e||null===t){U(!1),q(l?"근무자 정보는 수정되었지만 도장 업로드에 실패했습니다. 다시 시도해 주세요.":"근무자는 생성되었지만 도장 업로드에 실패했습니다. 수정에서 다시 업로드해 주세요."),J();return}let[n]=await a.default.data.staffAccount.patch({id:s,payload:{sealImagePath:t}});if(null!==n){U(!1),q(l?"근무자 도장 경로 저장에 실패했습니다. 다시 시도해 주세요.":"근무자는 생성되었지만 도장 경로 저장에 실패했습니다. 수정에서 다시 저장해 주세요."),J();return}}U(!1),J()};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(ua.Container,{ref:Y,children:[(0,t.jsxs)(ua.Header,{children:[(0,t.jsxs)(ua.HeaderLeft,{children:[(0,t.jsx)(ua.HeaderTitle,{children:l?"근무자 수정하기":"근무자 추가하기"}),l&&null!==n.managementNo&&(0,t.jsx)(gu,{children:`관리번호 ${n.managementNo}`})]}),(0,t.jsx)(ua.HeaderRight,{children:(0,t.jsxs)(gf,{onClick:J,disabled:B,children:[(0,t.jsx)(i3.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(gh,{children:[(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"이름을 입력해주세요."}),(0,t.jsx)(gb,{placeholder:"이름을 입력해주세요",value:o,onChange:e=>{N(""),s(e.target.value)}}),(0,t.jsx)(ua.BodyRowErrorText,{$isVisible:P.trim().length>0,children:P})]}),(0,t.jsxs)(gp,{children:[(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"생년월일"}),(0,t.jsx)(gb,{placeholder:"1990-03-04",inputMode:"numeric",value:j,onChange:e=>{let t;k(""),_((t=e.target.value.replace(/\D/g,"").slice(0,8)).length<=4?t:t.length<=6?`${t.slice(0,4)}-${t.slice(4)}`:`${t.slice(0,4)}-${t.slice(4,6)}-${t.slice(6)}`)}}),(0,t.jsx)(ua.BodyRowErrorText,{$isVisible:S.length>0,children:S})]}),(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"성별"}),(0,t.jsxs)(gm,{value:w,onChange:e=>y(e.target.value),children:[(0,t.jsx)("option",{value:tf.SELECT_EMPTY_VALUE,children:"선택 안함"}),(0,t.jsx)("option",{value:"MALE",children:tp.default.MALE.label}),(0,t.jsx)("option",{value:"FEMALE",children:tp.default.FEMALE.label})]})]})]}),(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"직급을 선택해주세요."}),(0,t.jsxs)(gm,{value:c,onChange:e=>{$(""),f(e.target.value)},children:[W.data?.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id)),(0,t.jsx)("option",{value:go,children:"기타 (직접 입력)"}),(0,t.jsx)("option",{value:tf.SELECT_EMPTY_VALUE,children:"없음"})]}),c===go&&(0,t.jsx)(gb,{style:{marginTop:8},placeholder:"새 직급 이름 (예: 팀장)",maxLength:50,value:D,onChange:e=>{$(""),A(e.target.value)}}),(0,t.jsx)(ua.BodyRowErrorText,{$isVisible:L.length>0,children:L})]}),(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsxs)(ua.BodyRowLabelRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"직무"}),(0,t.jsx)(ua.BodyRowHelperText,{children:"직급과 별개로 하는 일 (예: 사회복지사, 전담인력)"})]}),(0,t.jsx)(gb,{placeholder:"예: 사회복지사",maxLength:100,value:I,onChange:e=>z(e.target.value)})]}),(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsxs)(ua.BodyRowLabelRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"담당 서비스"}),(0,t.jsx)(ua.BodyRowHelperText,{children:"기관이 운영하는 서비스만 고를 수 있어요. 빼도 근무자 정보와 아이디는 그대로예요."})]}),(0,t.jsx)(gx,{children:0===K.length?(0,t.jsx)(ua.BodyRowHelperText,{children:"운영 중인 서비스가 없습니다."}):K.map(e=>(0,t.jsxs)(gg,{type:"button","aria-pressed":T.includes(e),$selected:T.includes(e),onClick:()=>{E(T.includes(e)?T.filter(t=>t!==e):[...T,e])},children:[T.includes(e)&&(0,t.jsx)(lY.default,{sx:{fontSize:16}}),r.default[e].label]},e))})]}),(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"휴대폰 번호를 입력해주세요."}),(0,t.jsx)(gb,{placeholder:"010-0000-0000",value:h,onChange:e=>{var t;t=e.target.value,F(""),p(u2.default.brand.phoneNumber.format(t))}}),(0,t.jsx)(ua.BodyRowErrorText,{$isVisible:M.trim().length>0,children:M})]}),(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"주소"}),(0,t.jsx)(gb,{placeholder:"주소를 입력해주세요",maxLength:500,value:v,onChange:e=>C(e.target.value)})]}),l&&(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"근무 상태"}),(0,t.jsx)(gm,{value:u,onChange:e=>{let t=e.target.value;"RESIGNED"===t&&"RESIGNED"!==n.employmentStatus?X?q("다른 수정 내용을 먼저 [저장]한 뒤 퇴사 처리해 주세요."):m(!0):x(gr.some(e=>e.value===t)?t:"ACTIVE")},children:gr.map(e=>(0,t.jsx)("option",{value:e.value,children:"ACTIVE"===e.value&&"RESIGNED"===n.employmentStatus?"근무 중 (재입사)":e.label},e.value))}),(0,t.jsx)(ua.BodyRowErrorText,{$isVisible:null!==b,children:b}),"RESIGNED"===n.employmentStatus&&null!==n.staffAccountId?(0,t.jsx)(ga,{staffAccountId:n.staffAccountId}):null]}),g&&null!==n.staffAccountId?(0,t.jsx)(x2,{staffAccountId:n.staffAccountId,staffName:n.name,onClose:()=>m(!1),onResigned:()=>{m(!1),null!==V&&ei(V),J()}}):null,(0,t.jsxs)(ua.BodyRow,{children:[(0,t.jsxs)(ua.BodyRowLabelRow,{children:[(0,t.jsx)(ua.BodyRowLabel,{children:"도장 이미지를 업로드 해주세요."}),(0,t.jsxs)(ua.BodyRowHelperText,{children:[(0,t.jsx)(tc.default,{sx:{fontSize:18},style:{marginRight:4,position:"relative",top:3}}),"해당 이미지는 서류에서 근무자의 도장이 필요시 사용됩니다."]})]}),(0,t.jsx)(gj,{children:(0,t.jsxs)(g_,{children:[(0,t.jsx)(gw,{$hasImage:R.trim().length>0,children:0===R.trim().length?(0,t.jsx)(en.default.Imagesmode,{size:34,color:"#d1d5db"}):(0,t.jsx)(gy,{src:R,alt:"도장 이미지 미리보기"})}),(0,t.jsx)(gv,{onClick:()=>{a.default.modal.organization.imageAdjustUpload.show("seal",R,{saveMode:"external",onProcessedImageDataUrl:e=>{O(e)}})},disabled:B,children:"업로드하기"})]})})]})]}),(0,t.jsxs)(ua.Footer,{children:[(0,t.jsx)(gC,{onClick:()=>{B||Z()},disabled:B,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(gI,{onClick:()=>{el()},disabled:B,children:[(0,t.jsx)(lY.default,{sx:{fontSize:20}}),"저장"]})]})]})})}),gc=(0,n.observer)(function(){return"ready"!==a.default.modal.organization.staffAccountAdd.status?null:(0,t.jsx)(gs,{})}),gf=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-2a48cfd9-0"})`
  ${ua.btnStyle}
`,gh=(0,l.default)(ua.Body).withConfig({componentId:"zh__sc-2a48cfd9-1"})`
  overflow-y: auto;
  gap: 28px;
  max-height: calc(100vh - 220px);
`,gp=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-2"})`
  display: flex;
  gap: 24px;

  & > * {
    flex: 1;
  }
`,gu=l.default.span.withConfig({componentId:"zh__sc-2a48cfd9-3"})`
  margin-left: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #636978;
`,gx=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-4"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,gg=l.default.button.withConfig({componentId:"zh__sc-2a48cfd9-5"})`
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
`,gm=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-2a48cfd9-6"})`
  ${ua.inputStyle}
  width: 168px;
`,gb=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-2a48cfd9-7"})`
  ${ua.inputStyle}
  width: 100%;
`,gj=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-8"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,g_=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-9"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`,gw=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-10"})`
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
`,gy=l.default.img.withConfig({componentId:"zh__sc-2a48cfd9-11"})`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
`,gv=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-2a48cfd9-12"})`
  ${ua.btnStyle}
  width: fit-content;
`,gC=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-2a48cfd9-13"})`
  ${ua.btnStyle}
`,gI=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-2a48cfd9-14"})`
  ${ua.btnStyle}
`;function gz(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u5,{}),(0,t.jsx)(uO,{}),(0,t.jsx)(u0,{}),(0,t.jsx)(gc,{}),(0,t.jsx)(xN,{})]})}async function gT(e,t){let{preserveServiceWorkerAfterSave:n,resetSort:i,setCurrentServiceType:l,setHighlightedServiceWorkerId:d}=a.default.serviceWorker.info.byServiceWorker;n(e),null!==t&&(l(t),i(),a.default.data.serviceWorker.list.setQuery({serviceType:t}),await a.default.data.serviceWorker.list.refetch()),d(e)}let gE=(0,n.observer)(function(){let{serviceWorkerDraft:e,isSaving:n,resetToUploadStep:i,saveServiceWorkerDraft:l}=a.default.modal.serviceWorkerCreate,d=async()=>{let t=e?.serviceType,n=await l();null===n?requestAnimationFrame(()=>{document.querySelector("[data-service-worker-create-field-error]")?.scrollIntoView({block:"center",behavior:"smooth"})}):await gT(n.id,t??null)};return(0,t.jsxs)(gS,{children:[(0,t.jsx)(gD,{disabled:!e||n,onClick:i,children:"다시 업로드하기"}),(0,t.jsxs)(gA,{disabled:!e||n,onClick:()=>void d(),children:[(0,t.jsx)(b.Check,{size:16}),"최종확인 및 저장"]})]})}),gS=l.default.div.withConfig({componentId:"zh__sc-d659ae78-0"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 16px;
  border-top: 1px solid #e5e7eb;
`,gk=l.css`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,gD=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-d659ae78-1"})`
  ${gk}
`,gA=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d659ae78-2"})`
  ${gk}
`,gL=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerCreate;if(!e.isDuplicateContractConfirmOpen)return null;let n=async()=>{let t=e.serviceWorkerDraft?.serviceType??null,n=await e.confirmDuplicateContractAddition();null!==n&&await gT(n.id,t)};return(0,t.jsx)(g$,{children:(0,t.jsxs)(gR,{role:"alertdialog","aria-modal":"true","aria-labelledby":"duplicate-contract-title",children:[(0,t.jsxs)(gO,{children:[(0,t.jsx)(gP,{id:"duplicate-contract-title",children:"이미 등록된 제공인력이에요."}),(0,t.jsxs)(gN,{children:["이름·주민등록번호가 같은 제공인력이 이미 등록되어 있습니다.",(0,t.jsx)("br",{}),"같은 사람이라면 새로 등록하지 않고, 기존 제공인력에 이번 근로계약을 다음 회차로 추가합니다."]})]}),(0,t.jsxs)(gM,{children:[(0,t.jsx)(gF,{type:"button",disabled:e.isSaving,onClick:e.cancelDuplicateContractAddition,children:"돌아가기"}),(0,t.jsx)(gB,{type:"button",disabled:e.isSaving,onClick:()=>void n(),children:"기존 제공인력에 계약 추가"})]})]})})}),g$=l.default.div.withConfig({componentId:"zh__sc-b376da4a-0"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,gR=l.default.div.withConfig({componentId:"zh__sc-b376da4a-1"})`
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
`,gO=l.default.div.withConfig({componentId:"zh__sc-b376da4a-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,gP=l.default.h3.withConfig({componentId:"zh__sc-b376da4a-3"})`
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,gN=l.default.p.withConfig({componentId:"zh__sc-b376da4a-4"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,gM=l.default.div.withConfig({componentId:"zh__sc-b376da4a-5"})`
  display: flex;
  gap: 12px;
  align-self: stretch;
  justify-content: flex-end;
`,gF=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-b376da4a-6"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,gB=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-b376da4a-7"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,gU=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerCreate;return!0!==e.isDuplicateServiceWorkerDialogOpen?null:(0,t.jsx)(gY,{children:(0,t.jsxs)(gV,{children:[(0,t.jsxs)(gW,{children:[(0,t.jsx)(gH,{children:"같은 정보의 제공인력이 이미 등록되어 있어요."}),(0,t.jsxs)(gG,{children:["이름과 생년월일이 같은 제공인력이 이미 등록되어 있습니다.",(0,t.jsx)("br",{}),"동일한 제공인력이라면 기존 정보에서 계약을 수정하거나 추가해주세요.",(0,t.jsx)("br",{}),"다른 제공인력이라면, 수정 후 신규 등록을 계속할 수 있습니다."]})]}),(0,t.jsxs)(gK,{children:[(0,t.jsx)(gX,{type:"button",onClick:e.cancelDuplicateServiceWorkerRegistration,children:"등록 취소하기"}),(0,t.jsx)(gq,{type:"button",onClick:e.closeDuplicateServiceWorkerDialog,children:"신규 등록 수정하고 계속하기"})]})]})})}),gY=l.default.div.withConfig({componentId:"zh__sc-75646160-0"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,gV=l.default.div.withConfig({componentId:"zh__sc-75646160-1"})`
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
`,gW=l.default.div.withConfig({componentId:"zh__sc-75646160-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,gH=l.default.h3.withConfig({componentId:"zh__sc-75646160-3"})`
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,gG=l.default.p.withConfig({componentId:"zh__sc-75646160-4"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,gK=l.default.div.withConfig({componentId:"zh__sc-75646160-5"})`
  display: flex;
  gap: 12px;
  align-self: stretch;
  justify-content: flex-end;
`,gX=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-75646160-6"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,gq=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-75646160-7"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,gQ=(0,n.observer)(function(){let{analyzeSelectedFile:e,isAnalyzing:n,selectedFile:i}=a.default.modal.serviceWorkerCreate;return(0,t.jsx)(gZ,{children:(0,t.jsxs)(gJ,{disabled:null===i||n,onClick:()=>{e()},children:["분석 시작",(0,t.jsx)(Q,{size:16})]})})}),gZ=l.default.div.withConfig({componentId:"zh__sc-3f938d0e-0"})`
  display: flex;
  gap: 10px;
  align-self: stretch;
  justify-content: flex-end;
`,gJ=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-3f938d0e-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:g0}=ei.default.file,g1=(0,n.observer)(function(){var e;let n,{clearSelectedFile:i,selectedFile:l,isAnalyzing:d}=a.default.modal.serviceWorkerCreate;if(null===l)return null;let o=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(g2,{children:(0,t.jsxs)(g6,{children:[(0,t.jsxs)(g4,{children:[(0,t.jsx)(g5,{children:g0.IMAGE.some(e=>e===o)?(0,t.jsx)(en.default.Photo,{size:17,color:"#FA8E43"}):g0.AUDIO.some(e=>e===o)?(0,t.jsx)(en.default.SpeechToText,{size:17,color:"#A855F7"}):g0.DOCUMENT.some(e=>e===o)?(0,t.jsx)(en.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(g3,{children:(0,t.jsx)(g9,{children:l.name})})]}),(0,t.jsxs)(g8,{onClick:i,disabled:d,children:["삭제",(0,t.jsx)(et.X,{size:16})]})]},`${l.name}-${l.size}-${l.lastModified}`)})}),g2=l.default.div.withConfig({componentId:"zh__sc-9108dce9-0"})`
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
`,g6=l.default.div.withConfig({componentId:"zh__sc-9108dce9-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,g4=l.default.div.withConfig({componentId:"zh__sc-9108dce9-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,g5=l.default.div.withConfig({componentId:"zh__sc-9108dce9-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,g3=l.default.div.withConfig({componentId:"zh__sc-9108dce9-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,g9=l.default.div.withConfig({componentId:"zh__sc-9108dce9-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,g8=l.default.button.withConfig({componentId:"zh__sc-9108dce9-6"})`
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
`;function g7(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(me,{children:(0,t.jsx)(mt,{$progress:e})})}let me=l.default.div.withConfig({componentId:"zh__sc-4ad7a7ff-0"})`
  overflow: hidden;
  display: flex;

  width: 362px;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,mt=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-4ad7a7ff-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,mn=(0,n.observer)(function({disabled:e=!1}){let{isWindowFileDragging:n}=a.default.ui.layout,{selectedFile:i,isError:l,isAnalyzing:d,abortAnalyze:o}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(ml,{children:[null===i&&!1===l&&(0,t.jsx)(ma,{children:(0,t.jsx)(ep.Upload,{size:26,color:e?"#9CA3AF":mi[100]})}),(0,t.jsxs)(md,{children:[(0,t.jsx)(mo,{$isError:l,$disabled:e,children:!0===l?"지원하지 않는 파일 형식입니다.":!0===n?"파일을 여기에 놓으면 업로드 됩니다.":!0===d?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요."}),(0,t.jsx)(mr,{$disabled:e,children:null!==i&&!1===d?"새 파일을 업로드하면 기존 파일이 교체됩니다.":"지원 파일 형식: 사진 이미지"})]}),!0===d&&(0,t.jsx)(g7,{}),!0===d&&(0,t.jsx)(ms,{onClick:o,children:"중단하기"})]})}),{PRIMARY:mi}=eu.default.style.color,ml=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,ma=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,md=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,mo=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-3"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$isError:e,$disabled:t})=>t?"#9CA3AF":e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,mr=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e})=>e?"#9CA3AF":"#99a1af"};
`,ms=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-7f4896ee-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,mc=(0,n.observer)(function({disabled:e=!1}){let{isWindowFileDragging:n}=a.default.ui.layout,{acceptFileTypes:l,setSelectedFile:d,selectedFile:o,isError:r}=a.default.modal.serviceWorkerCreate,s=(0,i.useRef)(null);return(0,K.default)(t=>{if(e||0===t.length)return;let n=t[0];void 0!==n&&d(n)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(mf,{ref:s,type:"file",accept:l,onChange:t=>{if(e)return;let n=Array.from(t.target.files??[]);if(0===n.length)return;let i=n[0];void 0!==i&&(d(i),t.target.value="")},disabled:e}),(0,t.jsxs)(mh,{$isWindowFileDragging:n,$disabled:e,onDragOver:t=>{if(t.preventDefault(),e)return},onDrop:t=>{if(t.preventDefault(),e)return;let n=Array.from(t.dataTransfer.files);if(0===n.length)return;let i=n[0];void 0!==i&&d(i)},onClick:t=>{!e&&t.target instanceof HTMLElement&&(t.target.closest("button")||s.current?.click())},$isError:r,children:[null!==o&&(0,t.jsx)(g1,{}),(0,t.jsx)(mn,{disabled:e}),(0,t.jsx)(gQ,{})]})]})}),mf=l.default.input.withConfig({componentId:"zh__sc-37be1ed1-0"})`
  display: none;
`,mh=l.default.div.withConfig({componentId:"zh__sc-37be1ed1-1"})`
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
`,mp=(0,n.observer)(function(){let{analyzedFile:e,mode:n}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(mu,{$flex1:null===e,children:[null===e&&(0,t.jsx)(mx,{children:"renew"===n?"새로운 전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요.":"전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요."}),(0,t.jsx)(mc,{})]})}),mu=l.default.div.withConfig({componentId:"zh__sc-f40ff2c5-0"})`
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
`,mx=l.default.div.withConfig({componentId:"zh__sc-f40ff2c5-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px;
  color: #101828;
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:mg}=ei.default.file,mm=(0,n.observer)(function(){var e;let n,{analyzedFile:l}=a.default.modal.serviceWorkerCreate,{ref:d,fire:o}=eO();if((0,i.useEffect)(()=>{null!==l&&o()},[l,o]),null===l)return null;let r=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(mb,{ref:d,children:[(0,t.jsxs)(mj,{children:[(0,t.jsxs)(m_,{children:[(0,t.jsx)(en.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(mw,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{}),"우측의 [제공인력 기본 정보]가 올바르게 연동되었는지 확인 후, [최종 확인] 버튼을 눌러주세요."]})]}),(0,t.jsxs)(my,{children:[(0,t.jsxs)(mv,{children:[(0,t.jsx)(en.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(mC,{children:(0,t.jsxs)(mI,{children:[(0,t.jsxs)(mz,{children:[(0,t.jsx)(mT,{children:mg.IMAGE.some(e=>e===r)?(0,t.jsx)(en.default.Photo,{size:17,color:"#FA8E43"}):mg.AUDIO.some(e=>e===r)?(0,t.jsx)(en.default.SpeechToText,{size:17,color:"#A855F7"}):mg.DOCUMENT.some(e=>e===r)?(0,t.jsx)(en.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(mE,{children:(0,t.jsx)(mS,{children:l.name})})]}),(0,t.jsx)(mk,{children:"추출 완료"})]},`${l.name}-${l.size}-${l.lastModified}`)})]})]})}),mb=l.default.div.withConfig({componentId:"zh__sc-635d6973-0"})`
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
`,mj=l.default.div.withConfig({componentId:"zh__sc-635d6973-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,m_=l.default.div.withConfig({componentId:"zh__sc-635d6973-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,mw=l.default.div.withConfig({componentId:"zh__sc-635d6973-3"})`
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
`,my=l.default.div.withConfig({componentId:"zh__sc-635d6973-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,mv=l.default.div.withConfig({componentId:"zh__sc-635d6973-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,mC=l.default.div.withConfig({componentId:"zh__sc-635d6973-6"})`
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
`,mI=l.default.div.withConfig({componentId:"zh__sc-635d6973-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 355px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,mz=l.default.div.withConfig({componentId:"zh__sc-635d6973-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,mT=l.default.div.withConfig({componentId:"zh__sc-635d6973-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,mE=l.default.div.withConfig({componentId:"zh__sc-635d6973-10"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,mS=l.default.div.withConfig({componentId:"zh__sc-635d6973-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,mk=l.default.div.withConfig({componentId:"zh__sc-635d6973-12"})`
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
`,mD=(0,n.observer)(function(){let{analyzedFile:e}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(mA,{children:[null!==e&&(0,t.jsx)(mm,{}),(0,t.jsx)(mp,{})]})}),mA=l.default.div.withConfig({componentId:"zh__sc-9bac733d-0"})`
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
`;var mL=e.i(99696),m$=e.i(43090),mR=e.i(70793),mO=e.i(93863);let mP=Object.keys(mL.default).filter(function(e){return e in mL.default}),mN=Object.keys(r.default).filter(function(e){return e in r.default});function mM(e,t,n,i){if("DISABILITY_ACTIVITY_SUPPORT"!==i)return 1;let l=a.default.data.serviceWorker.list.data??[],d=a.default.modal.serviceWorkerDetail.serviceWorker,o=l.find(i=>(0,mO.isSameServiceWorkerIdentity)(e,t,n,i))??(null!==d&&(0,mO.isSameServiceWorkerIdentity)(e,t,n,d)?d:null);return(o?.employmentContracts.filter(e=>e.serviceType===i).length??0)+1}let mF=e=>{let t=e.trim().match(/^(\d{6})-?(\d)(\d{0,6})$/);if(null===t)return"unknown";switch(t[2]){case"1":case"3":return"MALE";case"2":case"4":return"FEMALE";default:return"unknown"}},mB=e=>{switch(e){case"MALE":return"남성";case"FEMALE":return"여성";case"unknown":return""}},mU=()=>{let e=new Date,[t,n]=e0.default.create(e.getFullYear(),e.getMonth()+1,e.getDate());return null!==t||null===n?null:n},mY=(0,n.observer)(function(){let e=(a.default.data.organization.serviceList.data?.serviceList??[]).filter(e=>!0===e.operatingStatus).map(e=>e.type),n=e.length>0?e:mN,l=n[0],{serviceWorkerDraft:d,analyzedServiceWorkerDraft:s,mode:c,updateServiceWorkerDraft:f,getServiceWorkerDraftFieldError:h,clearServiceWorkerDraftFieldError:p}=a.default.modal.serviceWorkerCreate,u=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{if(null===d||u.current||(u.current=!0,""!==(d.firstRegisteredDate??"").trim()))return;let e=mU();null!==e&&f(t=>({...t,firstRegisteredDate:e}))},[d,f]),(0,i.useEffect)(()=>{null!==d&&void 0===d.serviceType&&void 0!==l&&f(e=>({...e,serviceType:l}))},[l,d,f]),null===d)return null;let x="renew"===c,g=d.serviceWorkerName??"",m=d.residentRegistrationNumber??"",b=d.firstRegisteredDate??"",j=d.contractStartDate??"",_=d.contractEndDate??"",w=d.phoneNumber??"",y=d.contact??"",v=d.address??"",C=d.postCode??"",I=d.addressDetail??"",z=d.note??"",T=d.serviceType,E=mM(g,m,d.phoneNumber,T),S=void 0===T?null:mP.find(e=>mL.BUSINESS_TYPE_SERVICE_TYPES[e].includes(T))??null,k=d.gender??mF(m),D=(e,t)=>""===h(e)?t:{...t,borderColor:"#ff4d4f",background:"#fff5f5"},A=e=>{let n=h(e);return""===n?null:(0,t.jsx)(mZ,{"data-service-worker-create-field-error":"true",children:n})},L=(e,t)=>{let n=String(t??"").trim();return""!==n&&String(e).trim()===n},$=mU(),R=""===(s?.firstRegisteredDate??"").trim()&&null!==$&&b===$,O=L(b,s?.firstRegisteredDate??"")||R;return(0,t.jsxs)(mW,{children:[(0,t.jsx)(mH,{children:"인적사항"}),(0,t.jsxs)(mG,{children:[(0,t.jsxs)(mX,{children:[(0,t.jsxs)(mq,{children:["성명",(0,t.jsx)(mV,{})]}),(0,t.jsx)(o.default.Input.Text,{disabled:x,placeholder:"성명을 입력하세요.",$autoFilled:L(g,s?.serviceWorkerName??""),style:D("serviceWorkerName",m0),value:g,onChange:e=>{p("serviceWorkerName"),f(t=>({...t,serviceWorkerName:e.target.value.trim()}))}}),A("serviceWorkerName")]}),(0,t.jsxs)(mX,{children:[(0,t.jsx)(mq,{children:"주민등록번호"}),(0,t.jsx)(o.default.Input.ResidentRegistrationNumber,{disabled:x,placeholder:"주민등록번호를 입력해주세요.",$autoFilled:L(m,s?.residentRegistrationNumber??""),style:D("residentRegistrationNumber",m0),value:m,onChange:e=>{p("residentRegistrationNumber"),f(t=>{let n={...t,residentRegistrationNumber:e};if("DISABILITY_ACTIVITY_SUPPORT"!==t.serviceType||!m$.default.is(e)&&!m$.default.isPartial(e))return"DISABILITY_ACTIVITY_SUPPORT"===t.serviceType&&e0.default.is(t.contractStartDate??"")?{...n,contractEndDate:void 0}:n;let i=mM(t.serviceWorkerName??"",e,t.phoneNumber,t.serviceType),l=(0,mR.getDefaultDisabilityActivitySupportContractEndDate)(t.contractStartDate??"",e,i);return e0.default.is(t.contractStartDate??"")?{...n,contractEndDate:l}:n})}}),A("residentRegistrationNumber")]}),(0,t.jsxs)(mX,{style:{flex:"none",width:266},children:[(0,t.jsx)(mq,{children:"성별"}),(0,t.jsx)(mJ,{$autoFilled:L(mB(k),mB(mF(s?.residentRegistrationNumber??""))),style:m0,value:mB(k),placeholder:"주민등록번호와 연동되어 보여집니다.",readOnly:!0})]})]}),(0,t.jsxs)(mG,{children:[(0,t.jsxs)(mX,{children:[(0,t.jsxs)(mq,{children:["휴대폰",(0,t.jsx)(mV,{})]}),(0,t.jsx)(o.default.Input.Phone,{disabled:x,placeholder:"휴대폰을 입력해주세요.",$autoFilled:L(w,s?.phoneNumber??""),style:D("phoneNumber",m0),value:w,onChange:e=>{p("phoneNumber"),f(t=>{let n={...t,phoneNumber:e};if("DISABILITY_ACTIVITY_SUPPORT"!==t.serviceType||!e0.default.is(t.contractStartDate??"")||!n6.default.is(e)||!m$.default.is(t.residentRegistrationNumber)&&!m$.default.isPartial(t.residentRegistrationNumber))return"DISABILITY_ACTIVITY_SUPPORT"===t.serviceType&&e0.default.is(t.contractStartDate??"")?{...n,contractEndDate:void 0}:n;let i=mM(t.serviceWorkerName??"",t.residentRegistrationNumber??"",e,t.serviceType),l=(0,mR.getDefaultDisabilityActivitySupportContractEndDate)(t.contractStartDate??"",t.residentRegistrationNumber??"",i);return{...n,contractEndDate:l}})}}),A("phoneNumber")]}),(0,t.jsxs)(mX,{children:[(0,t.jsx)(mq,{children:"연락처"}),(0,t.jsx)(o.default.Input.Contact,{disabled:x,placeholder:"연락처를 입력해주세요.",$autoFilled:L(y,s?.contact??""),style:D("contact",m0),value:y,onChange:e=>{p("contact"),f(t=>({...t,contact:e}))}}),A("contact")]})]}),(0,t.jsxs)(mK,{children:[(0,t.jsxs)(mG,{children:[(0,t.jsxs)(mX,{children:[(0,t.jsx)(mq,{children:"주소"}),(0,t.jsx)(o.default.Input.Text,{disabled:x,placeholder:"주소를 입력해주세요.",$autoFilled:L(v,s?.address??""),style:D("address",m0),value:v,onChange:e=>{p("address"),f(t=>({...t,address:e.target.value}))}}),A("address")]}),(0,t.jsxs)(mX,{style:{flex:"none",width:191},children:[(0,t.jsx)(mq,{children:"우편번호"}),(0,t.jsx)(o.default.Input.PostCode,{disabled:x,placeholder:"우편번호를 입력해주세요.",$autoFilled:L(C,s?.postCode??""),style:D("postCode",m0),value:C,onChange:e=>{p("postCode"),f(t=>({...t,postCode:e}))}}),A("postCode")]})]}),(0,t.jsx)(mG,{children:(0,t.jsxs)(mX,{children:[(0,t.jsx)(mq,{children:"상세주소"}),(0,t.jsx)(o.default.Input.Text,{disabled:x,placeholder:"상세주소를 입력해주세요.",$autoFilled:L(I,s?.addressDetail??""),style:D("addressDetail",m0),value:I,onChange:e=>{p("addressDetail"),f(t=>({...t,addressDetail:e.target.value}))}}),A("addressDetail")]})}),(0,t.jsx)(mG,{children:(0,t.jsxs)(mX,{children:[(0,t.jsx)(mq,{children:"특이사항(메모)"}),(0,t.jsx)(o.default.Input.Text,{disabled:x,placeholder:"메모가 필요한 사항을 입력해주세요.",$autoFilled:L(z,s?.note??""),style:D("note",m0),value:z,onChange:e=>{p("note"),f(t=>({...t,note:e.target.value}))}}),A("note")]})}),(0,t.jsxs)(mG,{children:[(0,t.jsxs)(mX,{$width:186,children:[(0,t.jsxs)(mq,{children:["접수일",(0,t.jsx)(mV,{})]}),(0,t.jsx)(o.default.Input.Date,{disabled:x,$autoFilled:O,style:D("firstRegisteredDate",{...m0,height:36}),value:b,onChange:e=>{(p("firstRegisteredDate"),""===e.trim())?f(e=>({...e,firstRegisteredDate:void 0})):e0.default.is(e)&&f(t=>({...t,firstRegisteredDate:e}))}}),A("firstRegisteredDate")]}),(0,t.jsxs)(mX,{$width:197,children:[(0,t.jsx)(mq,{children:"계약 시작일"}),(0,t.jsx)(o.default.Input.Date,{value:j,style:{...m0,height:36},onChange:e=>{(p("contractStartDate"),""===e.trim())?f(e=>({...e,contractStartDate:void 0,contractEndDate:void 0})):e0.default.is(e)&&f(t=>{let n={...t,contractStartDate:e};if("DISABILITY_ACTIVITY_SUPPORT"!==t.serviceType)return n;let i=mM(t.serviceWorkerName??"",t.residentRegistrationNumber??"",t.phoneNumber,t.serviceType),l=(0,mR.getDefaultDisabilityActivitySupportContractEndDate)(e,t.residentRegistrationNumber??"",i);return{...n,contractEndDate:l}})},showClearButton:"create"===c}),A("contractStartDate")]}),(0,t.jsxs)(mX,{$width:197,children:[(0,t.jsx)(mq,{children:"계약 종료일"}),(0,t.jsx)(o.default.Input.Date,{value:_,emptyValueText:"DISABILITY_ACTIVITY_SUPPORT"===T&&E>=4&&e0.default.is(j)&&""===_?"계약기간 없음":void 0,style:{...m0,height:36},onChange:e=>{(p("contractEndDate"),""===e.trim())?f(e=>({...e,contractEndDate:void 0})):e0.default.is(e)&&f(t=>({...t,contractEndDate:e}))}}),A("contractEndDate")]})]}),(0,t.jsxs)(mG,{children:[(0,t.jsxs)(mX,{children:[(0,t.jsxs)(mq,{children:["사업구분",(0,t.jsx)(mV,{})]}),(0,t.jsx)(o.default.Input.Select,{style:m0,value:S??"",disabled:!0,children:mP.map(e=>(0,t.jsx)("option",{value:e,children:"DAY_CARE"===e?`${mL.default[e].label}서비스`:mL.default[e].label},e))})]}),(0,t.jsxs)(mX,{children:[(0,t.jsxs)(mq,{children:["서비스명",(0,t.jsx)(mV,{})]}),(0,t.jsxs)(o.default.Input.Select,{style:m0,value:T??"",disabled:!0,children:[(0,t.jsx)("option",{value:"",children:"서비스 타입을 선택하세요"}),n.map(e=>(0,t.jsx)("option",{value:e,children:"MEAL"===e||"NUTRITION"===e?`${r.default[e].label}관리 서비스`:r.default[e].label},e))]})]}),(0,t.jsxs)(mX,{children:[(0,t.jsxs)(mq,{children:["서비스코드",(0,t.jsx)(mV,{})]}),(0,t.jsx)(o.default.Input.Select,{style:m0,value:T??"",disabled:!0,children:void 0===T?null:(0,t.jsx)("option",{value:T,children:r.default[T].code})})]}),(0,t.jsxs)(mX,{children:[(0,t.jsxs)(mq,{children:["서비스유형",(0,t.jsx)(mV,{})]}),(0,t.jsx)(o.default.Input.Select,{style:m0,value:T??"",disabled:!0,children:void 0===T?null:(0,t.jsx)("option",{value:T,children:"DISABILITY_ACTIVITY_SUPPORT"===T?"활동보조":`${r.default[T].label}관리 서비스`})})]})]})]})]})});function mV(){return(0,t.jsx)(mQ,{children:" *"})}let mW=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,mH=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,mG=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-2"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,mK=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-3"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: stretch;
`,mX=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-4"})`
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
`,mq=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-5"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,mQ=l.default.span.withConfig({componentId:"zh__sc-b1e5df68-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,mZ=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-7"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,mJ=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-b1e5df68-8"})`
  &::placeholder {
    color: #0a0a0a;
  }
`,m0={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16,maxHeight:36};var m1=e.i(35997);let m2="EARNED_INCOME",m6="BUSINESS_INCOME",m4="OTHER_INCOME",m5="FLAT_RATE",m3="ORGANIZATION_STANDARD",m9="ALWAYS_PAID",m8="ALWAYS_NOT_PAID",m7="MONTHLY_60_HOURS_OR_MORE",be="MONTHLY_64_HOURS_OR_MORE",bt="MONTHLY_65_HOURS_OR_MORE",bn="ALWAYS_ACCRUED",bi="NOT_ACCRUED",{SERVICE_WORKER_EMPLOYMENT_CONTRACT_CATEGORY:bl}=eu.default.enums,ba=Object.keys(bl).filter(e=>e in bl).map(e=>({key:e,label:bl[e].label}));function bd(e){return e in m1.default}let bo=Object.keys(m1.default).filter(bd),br=[{key:m7,label:"월 60시간 이상 적립"},{key:be,label:"월 64시간 이상"},{key:bt,label:"월 65시간 이상"},{key:bn,label:"항상 적립"},{key:bi,label:"미적립"}],bs=[{key:m2,label:"근로소득"},{key:m6,label:"사업소득"},{key:m4,label:"기타소득"},{key:m5,label:"정액제"}],bc=[{key:m3,label:"기관 기준"},{key:m9,label:"항상 지급"},{key:m8,label:"항상 미지급"}],bf=[{key:"nationalPensionEnrolled",label:"국민연금"},{key:"healthInsuranceEnrolled",label:"건강보험"},{key:"employmentInsuranceEnrolled",label:"고용보험"},{key:"industrialAccidentInsuranceEnrolled",label:"산재보험"}],bh=["신규","보수"],bp=function(){let{matchingClientName:e}=a.default.modal.serviceWorkerCreate,[n,l]=(0,i.useState)({nationalPensionEnrolled:"",healthInsuranceEnrolled:"",employmentInsuranceEnrolled:"",industrialAccidentInsuranceEnrolled:""}),[d,r]=(0,i.useState)({nationalPensionEnrolled:"",healthInsuranceEnrolled:"",employmentInsuranceEnrolled:"",industrialAccidentInsuranceEnrolled:""}),{serviceWorkerDraft:s,analyzedServiceWorkerDraft:c,mode:f,updateServiceWorkerDraft:h,getServiceWorkerDraftFieldError:p,clearServiceWorkerDraftFieldError:u}=a.default.modal.serviceWorkerCreate;if(null===s)return null;let x="renew"===f,g="DISABILITY_ACTIVITY_SUPPORT"===s.serviceType,m=""!==(s.contractStartDate??"").trim(),b=void 0===s.isTrainee?void 0:s.isTrainee?"신규":"보수",j=s.bankName??tf.default.SELECT_EMPTY_VALUE,_=s.accountNumber??"",w=s.accountHolder??"",y=s.employmentContractCategory??"GENERAL",v=s.isTrainee,C=s.criminalRecordChecked??!1,I=s.deviceType,z=s.terminalNumber??"",T=s.retirementReserveContractType,E=s.incomeTaxCategory,S=s.incomeTaxFlatAmount??"",k=s.incomeTaxRate??"",D=s.leaveAllowancePaymentMethod,A=s.isNonTaxableExclusionTarget,L=s.qualificationInfo??"",$=s.relatedDocumentInfo??"",R=e=>{let n=p(e);return""===n?null:(0,t.jsx)(bL,{"data-service-worker-create-field-error":"true",children:n})},O=(e,t)=>{let n=String(t??"").trim();return""!==n&&e.trim()===n},P=e=>""===p(e)?bB:{...bB,borderColor:"#ff4d4f",background:"#fff5f5"};return(0,t.jsxs)(bx,{children:[(0,t.jsx)(bg,{children:"계좌∙자격 및 기타 정보"}),(0,t.jsxs)(bm,{children:[(0,t.jsxs)(bb,{$width:191,children:[(0,t.jsx)(bj,{children:"은행명"}),(0,t.jsxs)(bw,{disabled:x,style:P("bankName"),$isEmptySelected:j===tf.default.SELECT_EMPTY_VALUE,value:j,onChange:e=>{u("bankName"),h(t=>({...t,bankName:e.target.value===tf.default.SELECT_EMPTY_VALUE?void 0:bd(e.target.value)?e.target.value:void 0}))},children:[(0,t.jsx)("option",{value:tf.default.SELECT_EMPTY_VALUE,"data-trigger-label":"은행을 선택해주세요.",children:"선택안함"}),bo.map(e=>(0,t.jsx)("option",{value:e,children:m1.default[e].label},e))]}),R("bankName")]}),(0,t.jsxs)(bb,{children:[(0,t.jsx)(bj,{children:"계좌번호"}),(0,t.jsx)(o.default.Input.Text,{disabled:x,placeholder:"계좌번호를 입력해주세요.",$autoFilled:O(_,c?.accountNumber),style:P("accountNumber"),value:_,onChange:e=>{u("accountNumber"),h(t=>({...t,accountNumber:e.target.value}))}}),R("accountNumber")]}),(0,t.jsxs)(bb,{children:[(0,t.jsx)(bj,{children:"예금주"}),(0,t.jsx)(o.default.Input.Text,{disabled:x,placeholder:"예금주를 입력해주세요.",$autoFilled:O(w,c?.accountHolder),style:P("accountHolder"),value:w,onChange:e=>{u("accountHolder"),h(t=>({...t,accountHolder:e.target.value}))}}),R("accountHolder")]})]}),(0,t.jsxs)(bm,{children:[(0,t.jsxs)(bb,{$width:228,children:[(0,t.jsx)(bj,{children:"제공인력 자격정보"}),(0,t.jsx)(o.default.Input.Text,{placeholder:"자격정보를 입력해주세요.",style:bB,value:L,onChange:e=>h(t=>({...t,qualificationInfo:e.target.value}))})]}),(0,t.jsx)(bb,{$width:158,children:g&&m?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(bj,{children:"교육 종류"}),(0,t.jsxs)(by,{$isEmptySelected:void 0===b,style:bB,value:b??tf.default.SELECT_EMPTY_VALUE,onChange:e=>{let t=e.target.value;t===tf.default.SELECT_EMPTY_VALUE?h(e=>({...e,isTrainee:void 0})):("신규"===t||"보수"===t)&&h(e=>({...e,isTrainee:"신규"===t}))},children:[(0,t.jsx)("option",{value:tf.default.SELECT_EMPTY_VALUE,children:"미정"}),bh.map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(bj,{children:["실습 여부 ",(0,t.jsx)(bu,{})]}),(0,t.jsxs)(bv,{children:[(0,t.jsxs)(bk,{children:[(0,t.jsx)(bD,{name:"service-worker-training",checked:!0===v,onChange:()=>{u("isTrainee"),h(e=>({...e,isTrainee:!0}))}}),"이수"]}),(0,t.jsxs)(bk,{children:[(0,t.jsx)(bD,{name:"service-worker-training",checked:!1===v,onChange:()=>{u("isTrainee"),h(e=>({...e,isTrainee:!1}))}}),"미이수"]})]}),R("isTrainee")]})}),(0,t.jsxs)(bb,{children:[(0,t.jsx)(bj,{children:"범죄경력 조회여부"}),(0,t.jsx)(bv,{children:(0,t.jsxs)(bk,{children:[(0,t.jsx)(bA,{checked:C,onChange:e=>h(t=>({...t,criminalRecordChecked:e.target.checked}))}),"조회 완료"]})})]}),(0,t.jsxs)(bb,{$width:228,children:[(0,t.jsx)(bj,{children:"관련서류 제출여부"}),(0,t.jsx)(o.default.Input.Text,{placeholder:"제출여부를 입력해주세요.",style:bB,value:$,onChange:e=>h(t=>({...t,relatedDocumentInfo:e.target.value}))})]})]}),(0,t.jsxs)(bm,{children:[(0,t.jsxs)(bb,{$width:186,children:[(0,t.jsxs)(bj,{children:["단말기 정보 ",(0,t.jsx)(bu,{})]}),(0,t.jsxs)(bv,{children:[(0,t.jsxs)(bk,{children:[(0,t.jsx)(bD,{name:"service-worker-device-type",checked:"SMARTPHONE"===I,onChange:()=>{u("deviceType"),h(e=>({...e,deviceType:"SMARTPHONE",terminalNumber:""}))}}),"스마트폰"]}),(0,t.jsxs)(bk,{children:[(0,t.jsx)(bD,{name:"service-worker-device-type",checked:"TERMINAL"===I,onChange:()=>{u("deviceType"),h(e=>({...e,deviceType:"TERMINAL"}))}}),"단말기"]})]}),R("deviceType")]}),(0,t.jsxs)(bb,{$width:228,children:[(0,t.jsx)(bj,{children:"단말기 번호"}),(0,t.jsx)(o.default.Input.Text,{disabled:"TERMINAL"!==I,placeholder:"번호를 입력해주세요.",style:bB,value:z,onChange:e=>h(t=>({...t,terminalNumber:e.target.value}))})]})]}),(0,t.jsxs)(bm,{children:[!g&&(0,t.jsxs)(bb,{$width:207,children:[(0,t.jsxs)(bj,{children:["인력 유형 ",(0,t.jsx)(bu,{})]}),(0,t.jsx)(bv,{children:ba.map(e=>(0,t.jsxs)(bk,{children:[(0,t.jsx)(bD,{disabled:x,name:"service-worker-employment-contract-category",checked:y===e.key,onChange:()=>{u("employmentContractCategory"),h(t=>({...t,employmentContractCategory:e.key}))}}),e.label]},e.key))}),R("employmentContractCategory")]}),(0,t.jsxs)(bC,{children:[(0,t.jsx)(bj,{children:"연결할 이용자"}),(0,t.jsx)(bI,{$isEmptySelected:null===e,value:e??tf.default.SELECT_EMPTY_VALUE,disabled:!0,children:(0,t.jsx)("option",{value:e??tf.default.SELECT_EMPTY_VALUE,"data-trigger-label":"이용자를 선택하세요.",disabled:!0,children:e??"선택안함"})})]})]}),(0,t.jsx)(bg,{children:"급여 관련 사항"}),(0,t.jsx)(bm,{children:(0,t.jsxs)(bb,{children:[(0,t.jsxs)(bj,{children:["퇴직적립금 관련 계약 ",(0,t.jsx)(bu,{})]}),(0,t.jsx)(bv,{children:br.map(e=>(0,t.jsxs)(bk,{children:[(0,t.jsx)(bD,{name:"service-worker-retirement-reserve",checked:T===e.key,onChange:()=>{u("retirementReserveContractType"),h(t=>({...t,retirementReserveContractType:e.key}))}}),e.label]},e.key))}),R("retirementReserveContractType")]})}),(0,t.jsxs)(bm,{children:[(0,t.jsxs)(bz,{children:[(0,t.jsxs)(bj,{children:["소득세 구분 ",(0,t.jsx)(bu,{})]}),(0,t.jsxs)(bT,{children:[bs.map(e=>(0,t.jsxs)(bk,{children:[(0,t.jsx)(bD,{name:"service-worker-income-tax-type",checked:E===e.key,onChange:()=>{u("incomeTaxCategory"),h(t=>({...t,incomeTaxCategory:e.key}))}}),e.label]},e.key)),(0,t.jsx)(o.default.Input.Text,{disabled:E!==m5,placeholder:"금액을 입력하세요.",style:bU,value:S,onChange:e=>h(t=>({...t,incomeTaxFlatAmount:e.target.value}))}),(0,t.jsx)(bS,{children:"원"})]}),R("incomeTaxCategory")]}),(0,t.jsxs)(bb,{$width:184,children:[(0,t.jsx)(bj,{children:"소득세 적용비율"}),(0,t.jsxs)(bE,{children:[(0,t.jsx)(o.default.Input.Text,{placeholder:"100",style:bY,value:k,onChange:e=>h(t=>({...t,incomeTaxRate:e.target.value}))}),(0,t.jsx)(bS,{children:"%"})]})]})]}),(0,t.jsxs)(bm,{children:[(0,t.jsxs)(bb,{$width:338,children:[(0,t.jsxs)(bj,{children:["연월차수당 지급방식 ",(0,t.jsx)(bu,{})]}),(0,t.jsx)(bv,{children:bc.map(e=>(0,t.jsxs)(bk,{children:[(0,t.jsx)(bD,{name:"service-worker-annual-leave-allowance",checked:D===e.key,onChange:()=>{u("leaveAllowancePaymentMethod"),h(t=>({...t,leaveAllowancePaymentMethod:e.key}))}}),e.label]},e.key))}),R("leaveAllowancePaymentMethod")]}),(0,t.jsxs)(bb,{children:[(0,t.jsxs)(bj,{children:["비과세급여 적용 ",(0,t.jsx)(bu,{})]}),(0,t.jsx)(bv,{children:(0,t.jsxs)(bk,{children:[(0,t.jsx)(bA,{checked:A??!1,onChange:e=>{u("isNonTaxableExclusionTarget"),h(t=>({...t,isNonTaxableExclusionTarget:e.target.checked}))}}),"비과세 처리 적용대상 제외"]})}),R("isNonTaxableExclusionTarget")]})]}),(0,t.jsx)(bg,{children:"사회보험"}),(0,t.jsxs)(b$,{children:[(0,t.jsxs)(bR,{children:[(0,t.jsx)(bO,{children:"구분"}),(0,t.jsx)(bO,{children:"가입 여부"}),(0,t.jsx)(bO,{children:"보수월액(원)"}),(0,t.jsx)(bO,{children:"비고"})]}),bf.map(({key:e,label:i})=>(0,t.jsxs)(bP,{children:[(0,t.jsx)(bN,{children:i}),(0,t.jsx)(bN,{children:(0,t.jsxs)(bM,{children:[(0,t.jsx)(bA,{checked:s[e]??!0,onChange:t=>h(n=>({...n,[e]:t.target.checked}))}),"가입"]})}),(0,t.jsx)(bN,{children:(0,t.jsx)(bF,{value:n[e],onChange:t=>l(n=>({...n,[e]:t.target.value}))})}),(0,t.jsx)(bN,{children:(0,t.jsx)(bF,{value:d[e],onChange:t=>r(n=>({...n,[e]:t.target.value}))})})]},e))]})]})};function bu(){return(0,t.jsx)(b_,{children:" *"})}let bx=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,bg=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-1"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,bm=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-2"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,bb=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-3"})`
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
`,bj=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-4"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,b_=l.default.span.withConfig({componentId:"zh__sc-5d9d83cf-5"})`
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: #e7000b;
`,bw=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-5d9d83cf-6"})`
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,by=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-5d9d83cf-7"})`
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,bv=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-8"})`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 36px;
`,bC=(0,l.default)(bb).withConfig({componentId:"zh__sc-5d9d83cf-9"})`
  flex: none;
  width: 200px;
`,bI=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-5d9d83cf-10"})`
  width: 200px;
  min-height: 36px;
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,bz=(0,l.default)(bb).withConfig({componentId:"zh__sc-5d9d83cf-11"})`
  min-width: 0;
`,bT=(0,l.default)(bv).withConfig({componentId:"zh__sc-5d9d83cf-12"})`
  width: 100%;
`,bE=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-13"})`
  display: flex;
  gap: 4px;
  align-items: center;
  height: 36px;
`,bS=l.default.span.withConfig({componentId:"zh__sc-5d9d83cf-14"})`
  flex-shrink: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,bk=l.default.label.withConfig({componentId:"zh__sc-5d9d83cf-15"})`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  white-space: nowrap;
`,bD=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-5d9d83cf-16"})`
  width: 20px;
  height: 20px;
`,bA=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-5d9d83cf-17"})`
  width: 24px;
  height: 24px;
`,bL=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-18"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,b$=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-19"})`
  overflow: hidden;
  align-self: stretch;
`,bR=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-20"})`
  display: grid;
  grid-template-columns: 1fr 1.15fr 1.35fr 1.35fr;
  border-bottom: 1px solid #e5e7eb;
  background: #f3f4f6;
`,bO=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-21"})`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 32px;

  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #0a0a0a;
`,bP=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-22"})`
  display: grid;
  grid-template-columns: 1fr 1.15fr 1.35fr 1.35fr;
  min-height: 64px;

  &:not(:last-child) {
    border-bottom: 1px solid #e5e7eb;
  }
`,bN=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-23"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 12px;

  font-size: 16px;
  line-height: 20px;
  color: #0a0a0a;
`,bM=l.default.label.withConfig({componentId:"zh__sc-5d9d83cf-24"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
`,bF=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-5d9d83cf-25"})`
  width: 100%;
  height: 36px;
  padding: 4px 16px;
`,bB={display:"flex",alignItems:"center",alignSelf:"stretch",width:"100%",height:36,padding:"4px 16px",fontSize:16},bU={...bB,flex:"none",width:160},bY={...bB,flex:"none",width:"100%"},bV=()=>a.default.ui.serviceRegion.codes,bW=["PHYSICAL_ACTIVITY_SUPPORT","HOUSEKEEPING_SUPPORT","SOCIAL_ACTIVITY_SUPPORT","OTHER"],bH={PHYSICAL_ACTIVITY_SUPPORT:"physicalActivityDescription",HOUSEKEEPING_SUPPORT:"housekeepingActivityDescription",SOCIAL_ACTIVITY_SUPPORT:"socialActivityDescription",OTHER:"otherActivityDescription"},bG=["소지","미소지"],bK=["ALL","MALE","FEMALE"],bX=["TWENTIES_OR_YONGER","THIRTIES","FORTIES","FIFTIES","SIXTIES","SEVENTIES_OR_OLDER"],bq=(0,n.observer)(function(){let{serviceWorkerDraft:e,updateServiceWorkerDraft:n,getServiceWorkerDraftFieldError:i,clearServiceWorkerDraftFieldError:l}=a.default.modal.serviceWorkerCreate;if(null===e)return null;let d=e.availableTimes??[],o=e.regions??[],r=e.careTypes??[],s=bV().every(e=>o.includes(e)),c=e.desiredClientGender,f=e.desiredAgeRanges??[],h=bW.every(e=>r.includes(e)),p=e.hasVehicle,u=e.preferredWeeklyWorkingHours,x="DISABILITY_ACTIVITY_SUPPORT"===e.serviceType,g=""!==(e.contractStartDate??"").trim(),m=(e,t)=>t.includes(e)?t.filter(t=>t!==e):[...t,e],b=i("availableTimes"),j=i("preferredWeeklyWorkingHours"),_=i("regions"),w=i("careTypes"),y=i("desiredClientGender"),v=i("desiredAgeRanges"),C=i("hasVehicle");return(0,t.jsxs)(bQ,{children:[(0,t.jsxs)(bZ,{children:[(0,t.jsxs)(bJ,{children:["근무 가능 시간",x&&(0,t.jsx)(b0,{})]}),(0,t.jsxs)(b2,{children:[(0,t.jsx)(tc.default,{sx:{fontSize:20}}),(0,t.jsx)(b6,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]})]}),(0,t.jsx)(b4,{value:d,onChange:e=>{let t=e.target.value;l("availableTimes"),n(e=>({...e,availableTimes:t}))}}),""!==b&&(0,t.jsx)(jo,{"data-service-worker-create-field-error":"true",children:b}),(0,t.jsxs)(b5,{children:[(0,t.jsx)(b3,{children:"희망 근로 시간"}),(0,t.jsxs)(b9,{children:[(0,t.jsx)(b7,{children:"총"}),(0,t.jsx)(b8,{value:void 0===u?"":String(u),placeholder:"00",maxLength:2,style:""===j?void 0:{borderColor:"#ff4d4f",background:"#fff5f5"},onChange:e=>{let t=e.target.value.replace(/\D/g,"");if(""===t){l("preferredWeeklyWorkingHours"),n(e=>({...e,preferredWeeklyWorkingHours:void 0}));return}let i=Math.min(Number(t),99);l("preferredWeeklyWorkingHours"),n(e=>({...e,preferredWeeklyWorkingHours:i}))}}),(0,t.jsx)(b7,{children:"시간"})]})]}),""!==j&&(0,t.jsx)(jo,{"data-service-worker-create-field-error":"true",children:j}),(0,t.jsxs)(je,{children:[(0,t.jsxs)(jt,{children:["서비스 가능 지역 (복수 선택 가능)",x&&(0,t.jsx)(b0,{})]}),(0,t.jsxs)(jn,{children:[(0,t.jsxs)(ji,{children:[(0,t.jsx)(jr,{checked:s,onChange:()=>{l("regions"),n(e=>({...e,regions:s?[]:bV()}))}}),(0,t.jsx)(ja,{children:"전체 선택"})]}),bV().map(e=>(0,t.jsxs)(ji,{children:[(0,t.jsx)(jr,{checked:o.includes(e),onChange:()=>{let t=m(e,o);l("regions"),n(e=>({...e,regions:t}))}}),(0,t.jsx)(ja,{children:a.default.ui.serviceRegion.label(e)})]},e))]}),""!==_&&(0,t.jsx)(jo,{"data-service-worker-create-field-error":"true",children:_})]}),x&&(0,t.jsxs)(je,{children:[(0,t.jsxs)(jt,{children:["가능 활동 내용 (복수 선택 가능) ",(0,t.jsx)(b0,{})]}),(0,t.jsxs)(jn,{children:[(0,t.jsxs)(ji,{children:[(0,t.jsx)(jr,{checked:h,onChange:()=>{l("careTypes"),n(e=>({...e,careTypes:h?[]:[...bW]}))}}),(0,t.jsx)(ja,{children:"전체 선택"})]}),bW.map(i=>(0,t.jsxs)(ji,{children:[(0,t.jsx)(jr,{checked:r.includes(i),onChange:()=>{let e=m(i,r);l("careTypes"),n(t=>({...t,careTypes:e}))}}),(0,t.jsx)(ja,{children:"PHYSICAL_ACTIVITY_SUPPORT"===i?"신체 활동":tu.default[i].label}),(0,t.jsx)(jl,{value:e[bH[i]]??"",placeholder:"관련 내용을 입력해주세요.",onChange:e=>n(t=>({...t,[bH[i]]:e.target.value}))})]},i))]}),""!==w&&(0,t.jsx)(jo,{"data-service-worker-create-field-error":"true",children:w})]}),!x&&(0,t.jsxs)(je,{children:[(0,t.jsxs)(jt,{children:["차량 소지 ",(0,t.jsx)(b0,{})]}),(0,t.jsx)(jn,{children:bG.map(e=>(0,t.jsxs)(ji,{children:[(0,t.jsx)(js,{name:"service-worker-car-ownership",checked:p===("소지"===e),onChange:()=>{l("hasVehicle"),n(t=>({...t,hasVehicle:"소지"===e}))}}),(0,t.jsx)(ja,{children:e})]},e))}),""!==C&&(0,t.jsx)(jo,{"data-service-worker-create-field-error":"true",children:C})]}),x&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(je,{children:[(0,t.jsxs)(jt,{children:["이용자 희망 성별 ",(0,t.jsx)(b0,{})]}),(0,t.jsx)(jn,{children:bK.map(e=>(0,t.jsxs)(ji,{children:[(0,t.jsx)(js,{name:"service-worker-client-gender",checked:c===e,onChange:()=>{l("desiredClientGender"),n(t=>({...t,desiredClientGender:e}))}}),(0,t.jsx)(ja,{children:"ALL"===e?"전체":tp.default[e].label})]},e))}),""!==y&&(0,t.jsx)(jo,{"data-service-worker-create-field-error":"true",children:y})]}),(0,t.jsxs)(je,{children:[(0,t.jsxs)(jt,{children:["이용자 희망 연령 (복수 선택 가능) ",(0,t.jsx)(b0,{})]}),(0,t.jsxs)(jn,{children:[(0,t.jsxs)(ji,{children:[(0,t.jsx)(jr,{checked:f.length===bX.length,onChange:()=>{l("desiredAgeRanges"),n(e=>({...e,desiredAgeRanges:f.length===bX.length?[]:[...bX]}))}}),(0,t.jsx)(ja,{children:"전체 선택"})]}),bX.map(e=>(0,t.jsxs)(ji,{children:[(0,t.jsx)(jr,{checked:f.includes(e),onChange:()=>{l("desiredAgeRanges"),n(t=>({...t,desiredAgeRanges:m(e,f)}))}}),(0,t.jsx)(ja,{children:"TWENTIES_OR_YONGER"===e||"SEVENTIES_OR_OLDER"===e?th.default[e].label.replace(" 이하","").replace(" 이상",""):th.default[e].label})]},e))]}),""!==v&&(0,t.jsx)(jo,{"data-service-worker-create-field-error":"true",children:v})]})]}),g&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(jd,{}),(0,t.jsx)(bp,{})]})]})}),bQ=l.default.div.withConfig({componentId:"zh__sc-1335978d-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,bZ=l.default.div.withConfig({componentId:"zh__sc-1335978d-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;

  height: 30px;
`,bJ=l.default.div.withConfig({componentId:"zh__sc-1335978d-2"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`;function b0(){return(0,t.jsx)(b1,{children:" *"})}let b1=l.default.span.withConfig({componentId:"zh__sc-1335978d-3"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,b2=l.default.div.withConfig({componentId:"zh__sc-1335978d-4"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;

  color: #464c53;
`,b6=l.default.div.withConfig({componentId:"zh__sc-1335978d-5"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
`,b4=(0,l.default)(o.default.Input.TimeSlider).withConfig({componentId:"zh__sc-1335978d-6"})`
  align-self: stretch;
`,b5=l.default.div.withConfig({componentId:"zh__sc-1335978d-7"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,b3=l.default.div.withConfig({componentId:"zh__sc-1335978d-8"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,b9=l.default.div.withConfig({componentId:"zh__sc-1335978d-9"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,b8=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-1335978d-10"})`
  width: 59px;
  height: 36px;
  text-align: center;
`,b7=l.default.div.withConfig({componentId:"zh__sc-1335978d-11"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,je=l.default.div.withConfig({componentId:"zh__sc-1335978d-12"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,jt=l.default.div.withConfig({componentId:"zh__sc-1335978d-13"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,jn=l.default.div.withConfig({componentId:"zh__sc-1335978d-14"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;
`,ji=l.default.label.withConfig({componentId:"zh__sc-1335978d-15"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,jl=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-1335978d-16"})`
  width: 193px;
  height: 36px;
  padding: 4px 16px;
`,ja=l.default.span.withConfig({componentId:"zh__sc-1335978d-17"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,jd=l.default.div.withConfig({componentId:"zh__sc-1335978d-18"})`
  flex-shrink: 0;
  align-self: stretch;

  height: 1px;
  min-height: 1px;

  background: #e5e7eb;
`,jo=l.default.div.withConfig({componentId:"zh__sc-1335978d-19"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,jr=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-1335978d-20"})`
  width: 24px;
  height: 24px;
`,js=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-1335978d-21"})`
  width: 20px;
  height: 20px;
`,jc=(0,n.observer)(function(){return(0,t.jsxs)(jf,{children:[(0,t.jsx)(jh,{children:"제공인력 기본 정보"}),(0,t.jsx)(mY,{}),(0,t.jsx)(jp,{}),(0,t.jsx)(bq,{})]})}),jf=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-0"})`
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
`,jh=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,jp=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-2"})`
  flex-shrink: 0;

  width: 100%;
  height: 1px;
  min-height: 1px;

  background: #e5e7eb;
`,ju=(0,n.observer)(function(){let{serviceWorkerDraft:e}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(jx,{children:[(0,t.jsx)(mD,{}),e&&(0,t.jsx)(jc,{})]})}),jx=l.default.div.withConfig({componentId:"zh__sc-e5134819-0"})`
  overflow: hidden;
  display: flex;
  flex: 1 1 auto;
  align-self: stretch;
  justify-content: center;

  min-height: 0;
  max-height: none;

  background: #f9fafb;
`;function jg(){let{close:e,mode:n}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(jm,{children:[(0,t.jsx)(jb,{children:"renew"===n?"제공인력 재계약하기":"contract"===n?"제공인력 계약하기":"신규 제공인력 등록하기"}),(0,t.jsxs)(jj,{onClick:e,children:[(0,t.jsx)(et.X,{size:16}),"닫기"]})]})}let jm=l.default.div.withConfig({componentId:"zh__sc-e97a276c-0"})`
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
`,jb=l.default.div.withConfig({componentId:"zh__sc-e97a276c-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px; /* 155.556% */
  color: #101828;
  letter-spacing: -0.439px;
`,jj=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-e97a276c-2"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,j_=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerCreate,{status:n}=e,l=(0,i.useRef)(null);return((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(l.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)?null:(0,t.jsx)(d.default,{children:(0,t.jsxs)(jw,{ref:l,children:[(0,t.jsx)(jg,{}),(0,t.jsx)(ju,{}),(0,t.jsx)(gE,{}),(0,t.jsx)(s,{currentServiceType:e.selectedServiceType,detectedServiceType:e.pendingDetectedServiceType??e.selectedServiceType,isContinueDisabled:!e.isPendingDetectedServiceAvailable,isOpen:e.isServiceTypeMismatchDialogOpen,onCancel:e.cancelServiceTypeMismatchRegistration,onContinue:e.confirmServiceTypeMismatchRegistration,registrationTarget:"제공인력"}),(0,t.jsx)(gU,{}),(0,t.jsx)(gL,{})]})})}),jw=l.default.div.withConfig({componentId:"zh__sc-cb4ab18d-0"})`
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
`;function jy({type:e,onClose:n}){let l=a.default.modal.serviceWorkerDetail.serviceWorker,[o,r]=(0,i.useState)([]),[s,c]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let t=!0;return(async()=>{var n,i,d,o,s;let f;if(null===l)return c(!1);if("address"===e){let e,o,s,f,[h,p]=await Promise.all([a.default.serviceWorker.info.byServiceWorker.getServiceWorkerChangeHistory(l.id,"address"),a.default.serviceWorker.info.byServiceWorker.getServiceWorkerChangeHistory(l.id,"addressDetail")]);if(!t||(c(!1),null!==h[0]||null!==p[0]||null===h[1]||null===p[1]))return;r((n=h[1],i=p[1],d=l.createdAt,e=new Map,(o=(t,n)=>{t.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).forEach(({oldValue:t,newValue:i,createdAt:l},a)=>{if(0===a&&null!==t&&""!==t.trim()){let i=e.get(d)??{};i[n]=t.trim(),e.set(d,i)}if(null!==i&&""!==i.trim()){let t=e.get(l)??{};t[n]=i.trim(),e.set(l,t)}})})(n,"address"),o(i,"addressDetail"),s="",f="",Array.from(e.entries()).sort(([e],[t])=>new Date(e).getTime()-new Date(t).getTime()).map(([e,t])=>(s=t.address??s,f=t.addressDetail??f,{address:s,addressDetail:f,changedAt:e,value:""})).reverse()));return}let[h,p]=await a.default.serviceWorker.info.byServiceWorker.getServiceWorkerChangeHistory(l.id,"phoneNumber");t&&(c(!1),null===h&&null!==p&&r((o=p,s=l.createdAt,f=[],o.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).forEach(({oldValue:e,newValue:t,createdAt:n})=>{null!==e&&""!==e.trim()&&f.push({address:"",addressDetail:"",changedAt:s,value:e.trim()}),null!==t&&""!==t.trim()&&f.push({address:"",addressDetail:"",changedAt:n,value:t.trim()})}),f.sort((e,t)=>new Date(t.changedAt).getTime()-new Date(e.changedAt).getTime()))))})(),()=>{t=!1}},[l,e]),(0,t.jsx)(d.default,{children:(0,t.jsxs)(jv,{children:[(0,t.jsxs)(jC,{children:[(0,t.jsxs)(jI,{children:["address"===e?"주소/상세주소":"휴대폰"," 변경 이력 보기"]}),(0,t.jsxs)(jz,{type:"button",onClick:n,children:[(0,t.jsx)(et.X,{size:14}),"닫기"]})]}),(0,t.jsx)(jT,{children:s?(0,t.jsx)(jL,{children:"변경 이력을 불러오는 중입니다."}):(0,t.jsxs)(jE,{children:[(0,t.jsxs)(jS,{$isAddress:"address"===e,children:[(0,t.jsx)(jk,{children:"address"===e?"주소":"휴대폰"}),"address"===e?(0,t.jsx)(jk,{children:"상세주소"}):null,(0,t.jsx)(jk,{children:"변경 일자"})]}),0===o.length?(0,t.jsx)(jL,{children:"변경 이력이 없습니다."}):o.map(n=>{let i;return(0,t.jsxs)(jD,{$isAddress:"address"===e,children:[(0,t.jsx)(jA,{children:"address"===e?n.address:n.value}),"address"===e?(0,t.jsx)(jA,{children:n.addressDetail}):null,(0,t.jsx)(jA,{children:Number.isNaN((i=new Date(n.changedAt)).getTime())?"YYYY-MM-DD":`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`})]},`${n.changedAt}-${n.address}-${n.addressDetail}-${n.value}`)})]})})]})})}let jv=l.default.div.withConfig({componentId:"zh__sc-c2667e46-0"})`
  display: flex;
  flex-direction: column;

  width: min(980px, calc(100vw - 32px));
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
`,jC=l.default.div.withConfig({componentId:"zh__sc-c2667e46-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
`,jI=l.default.h2.withConfig({componentId:"zh__sc-c2667e46-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #101828;
`,jz=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-c2667e46-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,jT=l.default.div.withConfig({componentId:"zh__sc-c2667e46-4"})`
  overflow: auto;
  max-height: min(560px, calc(100vh - 160px));
`,jE=l.default.div.withConfig({componentId:"zh__sc-c2667e46-5"})`
  display: flex;
  flex-direction: column;
  min-width: 560px;
`,jS=l.default.div.withConfig({componentId:"zh__sc-c2667e46-6"})`
  display: grid;
  grid-template-columns: ${({$isAddress:e})=>e?"1fr 1fr 140px":"1fr 140px"};

  min-height: 48px;
  border-bottom: 1px solid #e5e7eb;

  background: #f9fafb;
`,jk=l.default.div.withConfig({componentId:"zh__sc-c2667e46-7"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;

  font-size: 14px;
  font-weight: 700;
  color: #344054;
`,jD=l.default.div.withConfig({componentId:"zh__sc-c2667e46-8"})`
  display: grid;
  grid-template-columns: ${({$isAddress:e})=>e?"1fr 1fr 140px":"1fr 140px"};
  min-height: 48px;
  border-bottom: 1px solid #e5e7eb;
`,jA=l.default.div.withConfig({componentId:"zh__sc-c2667e46-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;

  font-size: 14px;
  color: #464c53;
  overflow-wrap: anywhere;
`,jL=l.default.div.withConfig({componentId:"zh__sc-c2667e46-10"})`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 160px;
  padding: 24px;

  font-size: 14px;
  color: #667085;
`,j$={residentRegistrationNumberText:"",genderText:"",mobileText:"",contactText:"",addressBaseText:"",addressDetailText:"",postCodeText:"",memoText:""},jR={mobileText:"",contactText:"",postCodeText:"",residentRegistrationNumberText:""},jO=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,n=a.default.modal.serviceWorkerDetail.serviceWorker,l=null===n?j$:{residentRegistrationNumberText:n.residentRegistrationNumber??"",genderText:null===n.gender?"":tp.default[n.gender].label,mobileText:n.phoneNumber??"",contactText:n.contact??"",addressBaseText:n.address??"",addressDetailText:n.addressDetail??"",postCodeText:n.postCode??"",memoText:n.note??""},d=(0,i.useRef)(null),[o,r]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),[f,h]=(0,i.useState)(j$),[p,u]=(0,i.useState)(jR),[x,g]=(0,i.useState)(null),m=o?f:l,b=o?((e,t)=>{if(!u2.default.brand.residentRegistrationNumber.is(e)&&!u2.default.brand.residentRegistrationNumber.isPartial(e))return t;let n=u2.default.brand.residentRegistrationNumber.extractGender(e);return null===n?t:tp.default[n].label})(m.residentRegistrationNumberText,m.genderText):m.genderText,j=(e,t)=>{h(n=>({...n,[e]:t})),("mobileText"===e||"contactText"===e||"postCodeText"===e||"residentRegistrationNumberText"===e)&&u(t=>({...t,[e]:""}))},_=(0,i.useCallback)(()=>{s||(h(l),u(jR),r(!1))},[s,l]);if((0,i.useEffect)(()=>{if(!o||s)return;let e=e=>{let t=e.target;t instanceof Node&&null!==d.current&&d.current.contains(t)||_()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[_,o,s]),null===n)return null;let w=async()=>{let t,i,d,o,p,x,g,m,b;if(s)return;let j=(t={},i={},(d=f.mobileText.trim())!==l.mobileText.trim()&&(i.phoneNumber=d),(o=f.residentRegistrationNumberText.trim())!==l.residentRegistrationNumberText.trim()&&(i.residentRegistrationNumber=o),(p=f.contactText.trim())!==l.contactText.trim()&&(i.contact=p),(x=f.postCodeText.trim())!==l.postCodeText.trim()&&(i.postCode=x),(g=f.memoText.trim())!==l.memoText.trim()&&(i.note=g),Object.assign(t,i),(m=f.addressBaseText.trim())!==l.addressBaseText.trim()&&(t.address=m),(b=f.addressDetailText.trim())!==l.addressDetailText.trim()&&(t.addressDetail=b),t);if(!(Object.keys(j).length>0)){h(l),u(jR),r(!1);return}let _=((e,t)=>{let n={...jR},i=e.mobileText.trim()!==t.mobileText.trim(),l=e.contactText.trim()!==t.contactText.trim(),a=e.postCodeText.trim()!==t.postCodeText.trim();if(e.residentRegistrationNumberText.trim()!==t.residentRegistrationNumberText.trim()){let t=e.residentRegistrationNumberText.trim();""===t||u2.default.brand.residentRegistrationNumber.is(t)||u2.default.brand.residentRegistrationNumber.isPartial(t)||(n.residentRegistrationNumberText="유효한 주민등록번호 형식이 아닙니다.")}if(i){let t=e.mobileText.trim();""===t||u2.default.brand.phoneNumber.is(t)||(n.mobileText="유효한 휴대폰 형식이 아닙니다.")}if(l){let t=e.contactText.trim();""===t||u2.default.brand.contactNumber.is(t)||(n.contactText="유효한 연락처 형식이 아닙니다.")}if(a){let t=e.postCodeText.trim();if(""!==t){let[e]=u2.default.brand.postCode.sanitize(t);null!==e&&(n.postCodeText="유효한 우편번호 형식이 아닙니다.")}}return n})(f,l);if(""!==_.mobileText||""!==_.contactText||""!==_.postCodeText||""!==_.residentRegistrationNumberText)return void u(_);u(jR),c(!0);let[w]=await av.default.data.serviceWorker.patch({id:n.id,payload:j});if(c(!1),null!==w)return;e.markListRefreshNeeded(),h(l),r(!1);let y=a.default.data.serviceWorker.detail;null!==y.query&&y.refetch()};return(0,t.jsxs)(jP,{ref:d,children:[(0,t.jsxs)(jN,{children:[(0,t.jsx)(jM,{children:"인적사항"}),o?(0,t.jsxs)(jF,{children:[(0,t.jsxs)(jB,{type:"button",onClick:_,disabled:s,children:[(0,t.jsx)(i3.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(jB,{type:"button",onClick:()=>void w(),disabled:s,children:[(0,t.jsx)(lY.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(jB,{type:"button",onClick:()=>{h(l),r(!0)},children:[(0,t.jsx)(n1.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(jU,{children:[(0,t.jsxs)(jY,{$columns:4,children:[(0,t.jsxs)(jV,{children:["주민등록번호",(0,t.jsx)(jX,{value:m.residentRegistrationNumberText,style:""!==p.residentRegistrationNumberText?jJ:void 0,readOnly:!o,onChange:e=>j("residentRegistrationNumberText",e)}),""!==p.residentRegistrationNumberText?(0,t.jsx)(jG,{children:p.residentRegistrationNumberText}):null]}),(0,t.jsxs)(jV,{children:["성별",(0,t.jsx)(jK,{value:b,readOnly:!0})]}),(0,t.jsxs)(jV,{children:[(0,t.jsxs)(jW,{children:[(0,t.jsx)("span",{children:"휴대폰"}),(0,t.jsxs)(jH,{type:"button",disabled:o,onClick:()=>g("phone"),children:[(0,t.jsx)(lV,{sx:{fontSize:12}})," 변경 이력 보기"]})]}),(0,t.jsx)(jq,{value:m.mobileText,style:""!==p.mobileText?jJ:void 0,readOnly:!o,onChange:e=>j("mobileText",e)}),""!==p.mobileText?(0,t.jsx)(jG,{children:p.mobileText}):null]}),(0,t.jsxs)(jV,{children:["연락처",(0,t.jsx)(jQ,{value:m.contactText,style:""!==p.contactText?jJ:void 0,readOnly:!o,onChange:e=>j("contactText",e)}),""!==p.contactText?(0,t.jsx)(jG,{children:p.contactText}):null]})]}),(0,t.jsxs)(jY,{$columns:3,children:[(0,t.jsxs)(jV,{children:[(0,t.jsxs)(jW,{children:[(0,t.jsx)("span",{children:"주소"}),(0,t.jsxs)(jH,{type:"button",disabled:o,onClick:()=>g("address"),children:[(0,t.jsx)(lV,{sx:{fontSize:12}})," 변경 이력 보기"]})]}),(0,t.jsx)(jK,{value:m.addressBaseText,readOnly:!o,onChange:e=>j("addressBaseText",e.target.value)})]}),(0,t.jsxs)(jV,{children:["상세주소",(0,t.jsx)(jK,{value:m.addressDetailText,readOnly:!o,onChange:e=>j("addressDetailText",e.target.value)})]}),(0,t.jsxs)(jV,{children:["우편번호",(0,t.jsx)(jZ,{value:m.postCodeText,style:""!==p.postCodeText?jJ:void 0,readOnly:!o,onChange:e=>j("postCodeText",e)}),""!==p.postCodeText?(0,t.jsx)(jG,{children:p.postCodeText}):null]})]}),(0,t.jsx)(jY,{$columns:1,children:(0,t.jsxs)(jV,{children:["특이사항(메모)",(0,t.jsx)(jK,{value:m.memoText,readOnly:!o,onChange:e=>j("memoText",e.target.value)})]})})]}),null!==x?(0,t.jsx)(jy,{type:x,onClose:()=>g(null)}):null]})}),jP=l.default.section.withConfig({componentId:"zh__sc-319b784e-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,jN=l.default.div.withConfig({componentId:"zh__sc-319b784e-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
  min-height: 40px;
`,jM=l.default.h3.withConfig({componentId:"zh__sc-319b784e-2"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #101828;
`,jF=l.default.div.withConfig({componentId:"zh__sc-319b784e-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,jB=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-319b784e-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,jU=l.default.div.withConfig({componentId:"zh__sc-319b784e-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;

  width: 100%;
`,jY=l.default.div.withConfig({componentId:"zh__sc-319b784e-6"})`
  display: grid;
  grid-template-columns: ${({$columns:e})=>4===e?"repeat(4, minmax(0, 1fr))":3===e?"repeat(3, minmax(0, 1fr))":"minmax(0, 1fr)"};
  gap: 12px;
  width: 100%;
`,jV=l.default.label.withConfig({componentId:"zh__sc-319b784e-7"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,jW=l.default.div.withConfig({componentId:"zh__sc-319b784e-8"})`
  display: flex;
  gap: 2px;
  align-items: center;
  min-height: 20px;
`,jH=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-319b784e-9"})`
  gap: 2px;
  padding: 2px 4px;
  font-size: 12px;
  line-height: 1;
`,jG=l.default.div.withConfig({componentId:"zh__sc-319b784e-10"})`
  margin-top: 2px;
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,jK=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-319b784e-11"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,jX=(0,l.default)(o.default.Input.ResidentRegistrationNumber).withConfig({componentId:"zh__sc-319b784e-12"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,jq=(0,l.default)(o.default.Input.Phone).withConfig({componentId:"zh__sc-319b784e-13"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,jQ=(0,l.default)(o.default.Input.Contact).withConfig({componentId:"zh__sc-319b784e-14"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,jZ=(0,l.default)(o.default.Input.PostCode).withConfig({componentId:"zh__sc-319b784e-15"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,jJ={borderColor:"#ff4d4f",background:"#fff5f5"},j0={availableTimes:[],careTypeDetails:{},desiredAgeRanges:[],desiredClientGender:null,preferredWeeklyWorkingHours:null,regions:[],careTypes:[],hasVehicle:null},j1=()=>a.default.ui.serviceRegion.codes,j2=Object.keys(tu.default).filter(function(e){return e in tu.default}),j6=[{label:"소지",value:!0},{label:"미소지",value:!1}],j4=[{label:"전체",value:null},{label:"남성",value:"MALE"},{label:"여성",value:"FEMALE"}],j5=Object.keys(th.default).filter(function(e){return e in th.default}).map(e=>({label:th.default[e].label,value:e})),j3=e=>[...new Set(e)].sort(),j9=e=>`${e.dayOfWeek}-${e.hour}`,j8=(e,t)=>{let n=j3(e),i=j3(t);return n.length===i.length&&n.every((e,t)=>e===i[t])},j7=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,n=a.default.modal.serviceWorkerDetail.serviceWorker,l=e.selectedEmploymentContract?.serviceType??a.default.serviceWorker.info.byServiceWorker.currentServiceType,d=((e,t)=>{if(null===e)return j0;let n=null===t?[]:e.availableTimes.filter(e=>e.serviceType===t).map(({dayOfWeek:e,hour:t})=>({dayOfWeek:e,hour:t})),i={};return e.careTypes.forEach(({careType:e,detail:t})=>{i[e]=t??""}),{availableTimes:n,careTypeDetails:i,desiredAgeRanges:e.desiredAgeRanges,desiredClientGender:e.desiredClientGender,preferredWeeklyWorkingHours:e.preferredWeeklyWorkingHours??null,regions:e.regions,careTypes:e.careTypes.map(({careType:e})=>e),hasVehicle:e.hasVehicle??null}})(n,l),o=(0,i.useRef)(null),[r,s]=(0,i.useState)(!1),[c,f]=(0,i.useState)(!1),[h,p]=(0,i.useState)(j0),[u,x]=(0,i.useState)({}),g=r?h:d,m=j1().every(e=>g.regions.includes(e)),b=j2.every(e=>g.careTypes.includes(e)),j="DISABILITY_ACTIVITY_SUPPORT"===l,_=(0,i.useCallback)(()=>{c||(p(d),x({}),s(!1))},[c,d]),w=(0,i.useCallback)(e=>{x(t=>{if(void 0===t[e])return t;let n={...t};return delete n[e],n})},[]);if((0,i.useEffect)(()=>{let e=Object.keys(u)[0];if(void 0===e)return;let t=window.requestAnimationFrame(()=>{let t=o.current?.querySelector(`[data-required-field-error="${e}"]`);t?.scrollIntoView({behavior:"smooth",block:"center"})});return()=>{window.cancelAnimationFrame(t)}},[u]),(0,i.useEffect)(()=>{if(!r||c)return;let e=e=>{let t=e.target;t instanceof Node&&null!==o.current&&o.current.contains(t)||_()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[_,r,c]),null===n)return null;let y=(e,t)=>r?t.includes(e)?t.filter(t=>t!==e):[...t,e]:t,v=async()=>{var t,i;let o,r,u;if(c)return;let g=(t=n.availableTimes,i=n.careTypes,o={},null===l||((e,t)=>{if(e.length!==t.length)return!1;let n=e.map(j9).sort(),i=t.map(j9).sort();return n.every((e,t)=>e===i[t])})(h.availableTimes,d.availableTimes)||(o.availableTimes=[...t.filter(e=>e.serviceType!==l),...h.availableTimes.map(e=>({...e,serviceType:l}))]),j8(h.regions,d.regions)||(o.regions=h.regions),r=j2.some(e=>(h.careTypeDetails[e]??"")!==(d.careTypeDetails[e]??"")),(!j8(h.careTypes,d.careTypes)||r)&&(o.careTypes=h.careTypes.map(e=>({careType:e,detail:h.careTypeDetails[e]??i.find(t=>t.careType===e)?.detail??null}))),h.desiredClientGender!==d.desiredClientGender&&(o.desiredClientGender=h.desiredClientGender??void 0),j8(h.desiredAgeRanges,d.desiredAgeRanges)||(o.desiredAgeRanges=h.desiredAgeRanges),h.preferredWeeklyWorkingHours!==d.preferredWeeklyWorkingHours&&(o.preferredWeeklyWorkingHours=h.preferredWeeklyWorkingHours??void 0),h.hasVehicle!==d.hasVehicle&&null!==h.hasVehicle&&(o.hasVehicle=h.hasVehicle),o);if(!(Object.keys(g).length>0)){p(d),x({}),s(!1);return}let m=(u={},j?(0===h.availableTimes.length&&(u.availableTimes="필수 입력값입니다."),0===h.regions.length&&(u.regions="필수 입력값입니다."),0===h.careTypes.length&&(u.careTypes="필수 입력값입니다."),0===h.desiredAgeRanges.length&&(u.desiredAgeRanges="필수 입력값입니다.")):null===h.hasVehicle&&(u.hasVehicle="필수 입력값입니다."),u);if(Object.keys(m).length>0)return void x(m);x({}),f(!0);let[b]=await av.default.data.serviceWorker.patch({id:n.id,payload:g});if(f(!1),null!==b)return;e.markListRefreshNeeded(),p(d),s(!1);let _=a.default.data.serviceWorker.detail;null!==_.query&&_.refetch()};return(0,t.jsx)(_i,{ref:o,children:(0,t.jsxs)(_d,{children:[(0,t.jsxs)(_o,{children:[(0,t.jsxs)(_r,{children:[(0,t.jsxs)(_s,{children:["근무 가능 시간",j?(0,t.jsx)(_e,{}):null]}),(0,t.jsxs)(_c,{children:[(0,t.jsx)(tc.default,{sx:{fontSize:20}}),(0,t.jsx)(_f,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]}),r&&(0,t.jsx)(_h,{children:"수정 진행중"})]}),r?(0,t.jsxs)(_l,{children:[(0,t.jsxs)(_a,{type:"button",onClick:_,disabled:c,children:[(0,t.jsx)(i3.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(_a,{type:"button",onClick:()=>void v(),disabled:c,children:[(0,t.jsx)(lY.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(_a,{type:"button",onClick:()=>{p(d),s(!0)},children:[(0,t.jsx)(n1.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsx)(_p,{value:g.availableTimes,disabled:!r||null===l,readOnly:!r||null===l,onChange:e=>{if(!r)return;let t=e.target.value;w("availableTimes"),p(e=>({...e,availableTimes:t}))}}),void 0!==u.availableTimes?(0,t.jsx)(_n,{"data-required-field-error":"availableTimes",children:u.availableTimes}):null,(0,t.jsxs)(_u,{children:[(0,t.jsx)(_x,{children:"희망 근로 시간"}),(0,t.jsxs)(_g,{children:[(0,t.jsx)(_b,{children:"총"}),(0,t.jsx)(_m,{value:null===g.preferredWeeklyWorkingHours?"":String(g.preferredWeeklyWorkingHours),placeholder:"00",maxLength:2,disabled:!r,onChange:e=>{if(!r)return;let t=e.target.value.replace(/\D/g,"");if(""===t)return void p(e=>({...e,preferredWeeklyWorkingHours:null}));let n=Math.min(Number(t),99);p(e=>({...e,preferredWeeklyWorkingHours:n}))}}),(0,t.jsx)(_b,{children:"시간"})]})]}),(0,t.jsxs)(_j,{children:[(0,t.jsxs)(__,{children:["서비스 가능 지역 (복수 선택 가능)",j?(0,t.jsx)(_e,{}):null]}),(0,t.jsxs)(_w,{children:[(0,t.jsxs)(_y,{children:[(0,t.jsx)(_I,{disabled:!r,checked:m,onChange:()=>{r&&(w("regions"),p(e=>({...e,regions:m?[]:j1()})))}}),(0,t.jsx)(_C,{children:"전체 선택"})]}),j1().map(e=>(0,t.jsxs)(_y,{children:[(0,t.jsx)(_I,{disabled:!r,checked:g.regions.includes(e),onChange:()=>{let t=y(e,g.regions);w("regions"),p(e=>({...e,regions:t}))}}),(0,t.jsx)(_C,{children:a.default.ui.serviceRegion.label(e)})]},e))]}),void 0!==u.regions?(0,t.jsx)(_n,{"data-required-field-error":"regions",children:u.regions}):null]}),j&&(0,t.jsxs)(_j,{children:[(0,t.jsxs)(__,{children:["가능 활동 내용 (복수 선택 가능)",(0,t.jsx)(_e,{})]}),(0,t.jsxs)(_w,{children:[(0,t.jsxs)(_y,{children:[(0,t.jsx)(_I,{disabled:!r,checked:b,onChange:()=>{r&&(w("careTypes"),p(e=>({...e,careTypes:b?[]:j2})))}}),(0,t.jsx)(_C,{children:"전체 선택"})]}),j2.map(e=>(0,t.jsxs)(_y,{children:[(0,t.jsx)(_I,{disabled:!r,checked:g.careTypes.includes(e),onChange:()=>{let t=y(e,g.careTypes);w("careTypes"),p(e=>({...e,careTypes:t}))}}),(0,t.jsx)(_C,{children:"PHYSICAL_ACTIVITY_SUPPORT"===e?"신체 활동":tu.default[e].label}),(0,t.jsx)(_v,{disabled:!r,value:g.careTypeDetails[e]??"",placeholder:"관련 내용을 입력해주세요.",onChange:t=>p(n=>({...n,careTypeDetails:{...n.careTypeDetails,[e]:t.target.value}}))})]},e))]}),void 0!==u.careTypes?(0,t.jsx)(_n,{"data-required-field-error":"careTypes",children:u.careTypes}):null]}),!j&&(0,t.jsxs)(_j,{children:[(0,t.jsxs)(__,{children:["차량 소지",(0,t.jsx)(_e,{})]}),(0,t.jsx)(_w,{children:j6.map(e=>(0,t.jsxs)(_y,{children:[(0,t.jsx)(_z,{name:"detail-service-worker-car-ownership",checked:g.hasVehicle===e.value,disabled:!r,onChange:()=>{r&&(w("hasVehicle"),p(t=>({...t,hasVehicle:e.value})))}}),(0,t.jsx)(_C,{children:e.label})]},e.label))}),void 0!==u.hasVehicle?(0,t.jsx)(_n,{"data-required-field-error":"hasVehicle",children:u.hasVehicle}):null]}),j&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(_j,{children:[(0,t.jsxs)(__,{children:["이용자 희망 성별",(0,t.jsx)(_e,{})]}),(0,t.jsx)(_w,{children:j4.map(e=>(0,t.jsxs)(_y,{children:[(0,t.jsx)(_z,{name:"detail-service-worker-client-gender",checked:g.desiredClientGender===e.value,disabled:!r,onChange:()=>{p(t=>({...t,desiredClientGender:e.value}))}}),(0,t.jsx)(_C,{children:e.label})]},e.label))})]}),(0,t.jsxs)(_j,{children:[(0,t.jsxs)(__,{children:["이용자 희망 연령",(0,t.jsx)(_e,{})]}),(0,t.jsxs)(_w,{children:[(0,t.jsxs)(_y,{children:[(0,t.jsx)(_I,{disabled:!r,checked:g.desiredAgeRanges.length===j5.length,onChange:e=>{w("desiredAgeRanges"),p(t=>({...t,desiredAgeRanges:e.target.checked?j5.map(({value:e})=>e):[]}))}}),(0,t.jsx)(_C,{children:"전체 선택"})]}),j5.map(({label:e,value:n})=>(0,t.jsxs)(_y,{children:[(0,t.jsx)(_I,{disabled:!r,checked:g.desiredAgeRanges.includes(n),onChange:e=>{w("desiredAgeRanges"),p(t=>({...t,desiredAgeRanges:e.target.checked?[...t.desiredAgeRanges,n]:t.desiredAgeRanges.filter(e=>e!==n)}))}}),(0,t.jsx)(_C,{children:e})]},n))]}),void 0!==u.desiredAgeRanges?(0,t.jsx)(_n,{"data-required-field-error":"desiredAgeRanges",children:u.desiredAgeRanges}):null]})]})]})})});function _e(){return(0,t.jsx)(_t,{children:" *"})}let _t=l.default.span.withConfig({componentId:"zh__sc-3656833f-0"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,_n=l.default.div.withConfig({componentId:"zh__sc-3656833f-1"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,_i=l.default.section.withConfig({componentId:"zh__sc-3656833f-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,_l=l.default.div.withConfig({componentId:"zh__sc-3656833f-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,_a=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-3656833f-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,_d=l.default.div.withConfig({componentId:"zh__sc-3656833f-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,_o=l.default.div.withConfig({componentId:"zh__sc-3656833f-6"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
`,_r=l.default.div.withConfig({componentId:"zh__sc-3656833f-7"})`
  display: flex;
  flex: 1 1 auto;
  gap: 16px;
  align-items: center;
`,_s=l.default.div.withConfig({componentId:"zh__sc-3656833f-8"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,_c=l.default.div.withConfig({componentId:"zh__sc-3656833f-9"})`
  display: flex;
  gap: 4px;
  align-items: center;
  color: #464c53;
`,_f=l.default.div.withConfig({componentId:"zh__sc-3656833f-10"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
`,_h=l.default.div.withConfig({componentId:"zh__sc-3656833f-11"})`
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
`,_p=(0,l.default)(o.default.Input.TimeSlider).withConfig({componentId:"zh__sc-3656833f-12"})`
  align-self: stretch;
  width: 100%;
  max-width: 808px;
`,_u=l.default.div.withConfig({componentId:"zh__sc-3656833f-13"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,_x=l.default.div.withConfig({componentId:"zh__sc-3656833f-14"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,_g=l.default.div.withConfig({componentId:"zh__sc-3656833f-15"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,_m=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-3656833f-16"})`
  width: 59px;
  height: 36px;
  text-align: center;
`,_b=l.default.div.withConfig({componentId:"zh__sc-3656833f-17"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,_j=l.default.div.withConfig({componentId:"zh__sc-3656833f-18"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,__=l.default.div.withConfig({componentId:"zh__sc-3656833f-19"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,_w=l.default.div.withConfig({componentId:"zh__sc-3656833f-20"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;
`,_y=l.default.label.withConfig({componentId:"zh__sc-3656833f-21"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,_v=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-3656833f-22"})`
  width: 193px;
  height: 36px;
  padding: 4px 16px;
`,_C=l.default.span.withConfig({componentId:"zh__sc-3656833f-23"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,_I=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-3656833f-24"})`
  width: 24px;
  height: 24px;
`,_z=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-3656833f-25"})`
  width: 20px;
  height: 20px;
`,_T=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,n=e.serviceWorker?.name??"";return(0,t.jsxs)(_E,{children:[(0,t.jsx)(jO,{}),(0,t.jsx)(j7,{}),(0,t.jsxs)(_S,{type:"button",disabled:e.isDeleting,onClick:()=>{e.openDeleteConfirm()},children:[(0,t.jsx)(en.default.Delete,{size:16}),"삭제하기"]}),e.isDeleteConfirmOpen?(0,t.jsx)(_k,{children:(0,t.jsxs)(_D,{children:[(0,t.jsxs)(_A,{children:[(0,t.jsxs)(_L,{children:[n," 제공인력을 삭제하시겠어요?"]}),(0,t.jsxs)(_$,{children:["삭제한 제공인력 정보는 복구할 수 없습니다.",(0,t.jsx)("br",{}),"계약 및 근무 이력이 없는 제공인력만 삭제할 수 있습니다."]})]}),(0,t.jsxs)(_R,{children:[(0,t.jsx)(_O,{type:"button",disabled:e.isDeleting,onClick:()=>{e.closeDeleteConfirm()},children:"취소하기"}),(0,t.jsx)(_P,{type:"button",disabled:e.isDeleting,onClick:()=>{e.confirmDelete()},children:"삭제하기"})]})]})}):null]})}),_E=l.default.div.withConfig({componentId:"zh__sc-d3727a60-0"})`
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
`,_S=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-d3727a60-1"})`
  gap: 8px;
  height: 36px;
  padding: 8px 16px;
`,_k=l.default.div.withConfig({componentId:"zh__sc-d3727a60-2"})`
  position: fixed;
  z-index: 1000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 35%);
`,_D=l.default.div.withConfig({componentId:"zh__sc-d3727a60-3"})`
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
`,_A=l.default.div.withConfig({componentId:"zh__sc-d3727a60-4"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,_L=l.default.h2.withConfig({componentId:"zh__sc-d3727a60-5"})`
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,_$=l.default.p.withConfig({componentId:"zh__sc-d3727a60-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,_R=l.default.div.withConfig({componentId:"zh__sc-d3727a60-7"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,_O=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-d3727a60-8"})`
  height: 36px;
  padding: 8px 16px;
`,_P=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d3727a60-9"})`
  height: 36px;
  padding: 8px 16px;
`;var _N=e.i(5070);function _M({isOpen:e,onCancel:n,onConfirm:i,title:l="수정 중인 내용을 저장하지 않고 이동할까요?",description:a="현재 수정 중인 내용이 저장되지 않습니다. 다른 항목을 수정하시겠습니까?",confirmLabel:o="다른 항목 수정",cancelLabel:r="계속 수정"}){return e?(0,t.jsx)(d.default,{children:(0,t.jsxs)(_F,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(_B,{children:[(0,t.jsx)(_U,{children:l}),(0,t.jsx)(_Y,{children:a})]}),(0,t.jsxs)(_V,{children:[(0,t.jsx)(_H,{type:"button",onClick:n,children:r}),(0,t.jsx)(_G,{type:"button",onClick:i,children:o})]})]})}):null}let _F=l.default.div.withConfig({componentId:"zh__sc-1f9caf5a-0"})`
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
`,_B=l.default.div.withConfig({componentId:"zh__sc-1f9caf5a-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,_U=l.default.p.withConfig({componentId:"zh__sc-1f9caf5a-2"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,_Y=l.default.p.withConfig({componentId:"zh__sc-1f9caf5a-3"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
  white-space: pre-line;
`,_V=l.default.div.withConfig({componentId:"zh__sc-1f9caf5a-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,_W=l.css`
  height: 36px;
  padding: 8px 16px;
  font-size: 16px;
`,_H=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-1f9caf5a-5"})`
  ${_W}
`,_G=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-1f9caf5a-6"})`
  ${_W}
`;var _K=e.i(553);let _X=(0,n.observer)(function({onClose:e,onSelectClient:n,serviceWorkerId:l,serviceType:d}){let[r,s]=(0,i.useState)(""),[c,f]=(0,i.useState)({}),[h,p]=(0,i.useState)({}),u=a.default.data.serviceWorker.availableClientList;(0,i.useEffect)(()=>null===d?void u.reset():(u.setQuery({serviceWorkerId:l,serviceType:d}),()=>u.reset()),[u,d,l]),(0,i.useEffect)(()=>{let e=!0;return Promise.all((u.data??[]).map(async({latestContractId:e})=>{if(null===e)return null;let[t,n]=await av.default.data.contract.get({id:e});return null===t?[e,n]:null})).then(t=>{e&&f(Object.fromEntries(t.filter(e=>null!==e)))}),()=>{e=!1}},[u.data]),(0,i.useEffect)(()=>{let e=!0;return Promise.all([...new Set(Object.values(c).map(e=>e.serviceWorkerId).filter(e=>null!==e&&e!==l))].map(async e=>{let[t,n]=await av.default.data.serviceWorker.get({id:e});return null===t?[e,n.name]:null})).then(t=>{e&&p(Object.fromEntries(t.filter(e=>null!==e)))}),()=>{e=!1}},[c,l]);let x=(0,i.useMemo)(()=>u.data?.map(e=>({...e,_searchableName:aO.default.create(e.client.name)}))??[],[u.data]).filter(({_searchableName:e})=>aO.default.isMatch(e,r));return(0,t.jsx)(_Z,{children:(0,t.jsxs)(_J,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(_0,{children:[(0,t.jsx)(_1,{}),(0,t.jsx)(_2,{children:"연결할 이용자 추가하기"}),(0,t.jsx)(o.default.Button.Outlined,{type:"button",style:{width:56,height:36},onClick:e,children:(0,t.jsx)(nJ.default,{sx:{fontSize:20}})})]}),(0,t.jsx)(_6,{}),(0,t.jsx)(_4,{children:(0,t.jsxs)(_5,{children:[(0,t.jsx)(_3,{placeholder:"이용자명을 검색하세요.",value:r,onChange:e=>s(e.target.value)}),(0,t.jsx)(_9,{children:(0,t.jsx)(_K.Search,{size:16})})]})}),(0,t.jsxs)(_7,{children:["loading"===u.status?(0,t.jsx)(_8,{children:"이용자를 불러오는 중..."}):null,"error"===u.status?(0,t.jsx)(_8,{children:"이용자 목록을 불러오지 못했습니다."}):null,"success"===u.status&&0===x.length?(0,t.jsx)(_8,{children:"연결할 수 있는 이용자가 없습니다."}):null,x.map(({client:e,latestContractId:i})=>{let a=null===i?void 0:c[i],d=a?.serviceWorkerId??null,o=d===l,r=null===d||o?null:{serviceWorkerId:d,name:h[d]??null};return(0,t.jsxs)(we,{children:[(0,t.jsxs)(wt,{children:[(0,t.jsxs)(wc,{children:[(0,t.jsx)(wn,{children:e.name}),o?(0,t.jsx)(wf,{children:"지금 연결됨"}):null,null!==r?(0,t.jsx)(wf,{$other:!0,children:null===r.name?"다른 제공인력 담당 중":`${r.name} 담당 중`}):null]}),(0,t.jsxs)(wi,{children:[(0,t.jsxs)(wl,{children:[(0,t.jsx)(wa,{children:"생년월일"}),(0,t.jsx)(wd,{}),(0,t.jsx)(wo,{children:_Q(e.birthDate)})]}),(0,t.jsxs)(wl,{children:[(0,t.jsx)(wa,{children:"시작일자"}),(0,t.jsx)(wd,{}),(0,t.jsx)(wo,{children:_q(a?.contractStartDate)})]}),(0,t.jsxs)(wl,{children:[(0,t.jsx)(wa,{children:"종료일자"}),(0,t.jsx)(wd,{}),(0,t.jsx)(wo,{children:_q(a?.contractEndDate)})]})]})]}),(0,t.jsx)(wr,{children:(0,t.jsxs)(ws,{type:"button",disabled:null===i||o,onClick:()=>{null===i||o||n?.(i,r)},children:["선택",(0,t.jsx)(a$.default,{sx:{fontSize:18}})]})})]},e.id)})]})]})})}),_q=e=>e?.replaceAll("-","")??"-",_Q=e=>{let t=_q(e);return 8===t.length?t.slice(2):t},_Z=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-0"})`
  position: absolute;
  z-index: 1000;
  inset: 0;

  display: flex;
  justify-content: flex-end;

  padding-top: 69px;
`,_J=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-1"})`
  display: flex;
  flex-direction: column;

  width: min(417px, 100%);
  height: 100%;

  background: #fff;
  box-shadow: -2px 9px 16px rgb(0 0 0 / 16%);
`,_0=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-2"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`,_1=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-3"})`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
`,_2=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-4"})`
  flex: 1;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #101828;
  text-align: center;
`,_6=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-5"})`
  height: 1px;
  background: #e5e7eb;
`,_4=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-6"})`
  padding: 16px;
`,_5=l.default.label.withConfig({componentId:"zh__sc-e99ba75d-7"})`
  position: relative;
`,_3=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-e99ba75d-8"})`
  width: 100%;
  height: 40px;
  padding: 0 48px 0 16px;
  border-radius: 6px;

  &:focus {
    border-color: #5635ff;
    background: #fbfcff;
  }
`,_9=l.default.span.withConfig({componentId:"zh__sc-e99ba75d-9"})`
  pointer-events: none;

  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: #0a0a0a;
`,_8=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-10"})`
  padding: 24px 0;
  font-size: 14px;
  color: #667085;
  text-align: center;
`,_7=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-11"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  padding: 16px;

  background: #f9fafb;
`,we=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-12"})`
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
`,wt=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-13"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,wn=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-14"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,wi=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-15"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,wl=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-16"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,wa=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-17"})`
  flex-shrink: 0;

  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,wd=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-18"})`
  flex-shrink: 0;
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,wo=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-19"})`
  overflow: hidden;

  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: #45464e;
  text-overflow: ellipsis;
  white-space: nowrap;
`,wr=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-20"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  align-self: stretch;
  justify-content: center;
`,ws=l.default.button.withConfig({componentId:"zh__sc-e99ba75d-21"})`
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
`,wc=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-22"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,wf=l.default.span.withConfig({componentId:"zh__sc-e99ba75d-23"})`
  padding: 2px 8px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  color: ${({$other:e})=>!0===e?"#b45309":"#1d4ed8"};

  background: ${({$other:e})=>!0===e?"#fef3c7":"#dbeafe"};
`,wh=(0,n.observer)(function(){let[e,n]=(0,i.useState)(!1),[l,d]=(0,i.useState)(!1),[o,r]=(0,i.useState)(null),[s,c]=(0,i.useState)({}),f=a.default.data.serviceWorker.detail.data?.assignedContracts,h=f??[];(0,i.useEffect)(()=>{let e=!0;return Promise.all((f??[]).map(async({contractId:e})=>{let[t,n]=await av.default.data.contract.get({id:e});return null===t?[e,n]:null})).then(t=>{e&&c(Object.fromEntries(t.filter(e=>null!==e)))}),()=>{e=!1}},[f]);let p=async e=>{let t=a.default.modal.serviceWorkerDetail.serviceWorkerId;if(null===t||l)return;d(!0);let[i]=await av.default.data.contract.update({id:e,payload:{serviceWorkerId:t}});if(d(!1),null!==i)return void a.default.ui.layout.toast.error("이용자 연결에 실패했습니다. 잠시 후 다시 시도해 주세요.");let o=a.default.data.serviceWorker.detail,r=a.default.modal.serviceWorkerDetail;null!==o.query&&await o.refetch();let s=a.default.serviceWorker.info.byServiceWorker;r.markListRefreshNeeded(),s.setStatusFilter("ACTIVE"),s.setSearchText(""),s.setHighlightedServiceWorkerId(t),n(!1),a.default.ui.layout.toast.success("이용자를 연결했습니다.")};return(0,t.jsxs)(wp,{children:[(0,t.jsxs)(wm,{children:[(0,t.jsx)(wb,{children:"연결된 이용자 정보"}),(0,t.jsxs)(wj,{children:[(0,t.jsxs)(w_,{type:"button",disabled:!0,children:[(0,t.jsx)(n1.default,{sx:{fontSize:20}}),"수정하기"]}),(0,t.jsxs)(w_,{type:"button",disabled:null===a.default.modal.serviceWorkerDetail.selectedEmploymentContract,onClick:()=>n(!0),children:[(0,t.jsx)(nQ,{sx:{fontSize:20}}),"추가하기"]})]})]}),0===h.length?(0,t.jsxs)(ww,{children:[(0,t.jsx)(n2.default,{sx:{fontSize:24,color:"#494F53"}}),(0,t.jsxs)(wL,{children:[(0,t.jsx)(w$,{children:"연결된 이용자가 없습니다."}),(0,t.jsx)(wR,{children:null===a.default.modal.serviceWorkerDetail.selectedEmploymentContract?"계약 후 이용자를 연결할 수 있습니다.":"[+추가하기] 버튼을 클릭해 이용자를 연결해주세요."})]})]}):(0,t.jsx)(wy,{children:h.map(({contractId:e,clientName:n})=>{let i=s[e];return(0,t.jsxs)(wv,{children:[(0,t.jsxs)(wC,{children:[(0,t.jsx)(wI,{children:n}),(0,t.jsxs)(wz,{children:[(0,t.jsxs)(wT,{children:[(0,t.jsx)(wE,{children:"주소"}),(0,t.jsx)(wS,{}),(0,t.jsx)(wk,{$muted:!0,children:wu(i)})]}),(0,t.jsxs)(wT,{children:[(0,t.jsx)(wE,{children:"휴대폰"}),(0,t.jsx)(wS,{}),(0,t.jsx)(wk,{children:wx(i)})]}),(0,t.jsxs)(wT,{children:[(0,t.jsx)(wE,{children:"이메일"}),(0,t.jsx)(wS,{}),(0,t.jsx)(wk,{children:"-"})]}),(0,t.jsxs)(wT,{children:[(0,t.jsx)(wE,{$small:!0,children:"연결 시작일"}),(0,t.jsx)(wS,{}),(0,t.jsx)(wk,{$small:!0,children:"-"})]}),(0,t.jsxs)(wT,{children:[(0,t.jsx)(wE,{$small:!0,children:"연결 종료일"}),(0,t.jsx)(wS,{}),(0,t.jsx)(wk,{$small:!0,children:"-"})]}),(0,t.jsxs)(wT,{children:[(0,t.jsx)(wE,{$small:!0,children:"상태"}),(0,t.jsx)(wS,{}),(0,t.jsx)(wk,{$small:!0,children:wg(i?.status)})]})]})]}),(0,t.jsx)(wA,{children:(0,t.jsx)(wD,{children:"지금 선택됨"})})]},e)})}),e&&null!==a.default.modal.serviceWorkerDetail.serviceWorkerId?(0,t.jsx)(_X,{onClose:()=>n(!1),onSelectClient:(e,t)=>{null!==t?r({contractId:e,currentAssignee:t}):p(e)},serviceWorkerId:a.default.modal.serviceWorkerDetail.serviceWorkerId,serviceType:a.default.modal.serviceWorkerDetail.selectedEmploymentContract?.serviceType??null}):null,(0,t.jsx)(_M,{isOpen:null!==o,title:"다른 제공인력이 담당 중인 이용자예요.",description:`지금 ${o?.currentAssignee.name??"다른 제공인력"} 제공인력이 담당하고 있어요. 이 제공인력으로 담당을 바꿀까요? 바꾸면 기존 담당자와의 연결은 끊어져요.`,cancelLabel:"취소",confirmLabel:"담당 바꾸기",onCancel:()=>r(null),onConfirm:()=>{r(null),null!==o&&p(o.contractId)}})]})}),wp=l.default.section.withConfig({componentId:"zh__sc-58e34935-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,wu=e=>e?.client.address??"-",wx=e=>{let t=e?.client.phoneNumber;return null==t||""===t.trim()?"-":t},wg=e=>e===oP.default.ACTIVE?"서비스중":e===oP.default.TERMINATED?"종료":e===oP.default.COMPLETED?"완료":"-",wm=l.default.div.withConfig({componentId:"zh__sc-58e34935-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
  min-height: 40px;
`,wb=l.default.h3.withConfig({componentId:"zh__sc-58e34935-2"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #101828;
`,wj=l.default.div.withConfig({componentId:"zh__sc-58e34935-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,w_=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-58e34935-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,ww=l.default.div.withConfig({componentId:"zh__sc-58e34935-5"})`
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
`,wy=l.default.div.withConfig({componentId:"zh__sc-58e34935-6"})`
  overflow: auto hidden;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;

  width: 100%;
`,wv=l.default.div.withConfig({componentId:"zh__sc-58e34935-7"})`
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
`,wC=l.default.div.withConfig({componentId:"zh__sc-58e34935-8"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,wI=l.default.div.withConfig({componentId:"zh__sc-58e34935-9"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,wz=l.default.div.withConfig({componentId:"zh__sc-58e34935-10"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,wT=l.default.div.withConfig({componentId:"zh__sc-58e34935-11"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,wE=l.default.div.withConfig({componentId:"zh__sc-58e34935-12"})`
  flex-shrink: 0;

  width: 69px;

  font-size: ${({$small:e})=>!0===e?12:14}px;
  line-height: normal;
  color: #0a0a0a;
`,wS=l.default.div.withConfig({componentId:"zh__sc-58e34935-13"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,wk=l.default.div.withConfig({componentId:"zh__sc-58e34935-14"})`
  font-size: ${({$small:e})=>!0===e?12:14}px;
  line-height: normal;
  color: ${({$muted:e})=>!0===e?"#45464e":"#0a0a0a"};
`,wD=l.default.span.withConfig({componentId:"zh__sc-58e34935-15"})`
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
`,wA=l.default.div.withConfig({componentId:"zh__sc-58e34935-16"})`
  display: flex;
  align-items: flex-end;
  align-self: stretch;
  justify-content: flex-end;
`,wL=l.default.div.withConfig({componentId:"zh__sc-58e34935-17"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,w$=l.default.div.withConfig({componentId:"zh__sc-58e34935-18"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
`,wR=l.default.div.withConfig({componentId:"zh__sc-58e34935-19"})`
  font-size: 16px;
  line-height: 20px;
  color: #494f53;
  text-align: center;
`,wO=Object.keys(m1.default).filter(e=>e in m1.default),wP=[{key:m7,label:"월 60시간 이상 적립"},{key:be,label:"월 64시간 이상"},{key:bt,label:"월 65시간 이상"},{key:bn,label:"항상 적립"},{key:bi,label:"미적립"}],wN=[{key:m2,label:"근로소득"},{key:m6,label:"사업소득"},{key:m4,label:"기타소득"},{key:m5,label:"정액제"}],wM=[{key:m3,label:"기관 기준"},{key:m9,label:"항상 지급"},{key:m8,label:"항상 미지급"}],wF=[{key:"nationalPensionEnrolled",label:"국민연금"},{key:"healthInsuranceEnrolled",label:"건강보험"},{key:"employmentInsuranceEnrolled",label:"고용보험"},{key:"industrialAccidentInsuranceEnrolled",label:"산재보험"}],wB=["신규","보수"],wU={display:"flex",alignItems:"center",alignSelf:"stretch",width:"100%",height:36,padding:"4px 16px",fontSize:16},wY={...wU,flex:"none",width:158,maxWidth:"100%"};function wV(e,t,n){(0,i.useEffect)(()=>{if(!e)return;let i=e=>{let i=e.target;nG(i)||i instanceof Node&&null!==t.current&&t.current.contains(i)||n()};return document.addEventListener("pointerdown",i),()=>{document.removeEventListener("pointerdown",i)}},[e,n,t])}let wW=(0,n.observer)(function({onRequestEdit:e}){let n=a.default.modal.serviceWorkerDetail.serviceWorker,l=a.default.modal.serviceWorkerDetail.selectedEmploymentContract,d=a.default.modal.serviceWorkerDetail,r=d.isAccountInfoEditing,s=d.isSalaryEditing,c=d.isSocialInsuranceEditing,f=(0,i.useRef)(null),h=(0,i.useRef)(null),p=(0,i.useRef)(null),u=d.accountInfoDraft.bankName??n?.bankName??tf.default.SELECT_EMPTY_VALUE,x="DISABILITY_ACTIVITY_SUPPORT"===(l?.serviceType??a.default.serviceWorker.info.byServiceWorker.currentServiceType),g=x&&l?.contractStartDate!==void 0,m=d.selectedEmploymentContractDraftRetirementReserveContractType,b=d.selectedEmploymentContractDraftIncomeTaxCategory,j=d.selectedEmploymentContractDraftLeaveAllowancePaymentMethod,_=e=>{d.hasEditChanges(e)||d.cancelEditSection(e)};return(wV(r,f,()=>_("accountInfo")),wV(s,h,()=>_("salary")),wV(c,p,()=>_("socialInsurance")),null===n)?null:(0,t.jsxs)(wG,{children:[(0,t.jsx)(wh,{}),(0,t.jsxs)(wK,{ref:f,children:[(0,t.jsxs)(wX,{children:[(0,t.jsxs)(wQ,{children:[(0,t.jsx)(wq,{children:"계좌∙자격 및 기타 정보"}),r&&(0,t.jsx)(ii,{children:"수정 진행중"})]}),r?(0,t.jsxs)(wZ,{children:[(0,t.jsxs)(wJ,{type:"button",onClick:d.cancelAccountInfoEdit,children:[(0,t.jsx)(i3.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(wJ,{type:"button",onClick:()=>void d.saveAccountInfoEdit(),children:[(0,t.jsx)(lY.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(wJ,{type:"button",onClick:()=>e("accountInfo"),children:[(0,t.jsx)(n1.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(w0,{children:[(0,t.jsxs)(w1,{$width:191,children:[(0,t.jsx)(w6,{children:"은행명"}),(0,t.jsxs)(w3,{disabled:!r,style:wU,$isEmptySelected:u===tf.default.SELECT_EMPTY_VALUE,value:u,onChange:e=>{d.updateAccountInfoDraftField("bankName",e.target.value===tf.default.SELECT_EMPTY_VALUE?void 0:wO.find(t=>t===e.target.value))},children:[(0,t.jsx)("option",{value:tf.default.SELECT_EMPTY_VALUE,children:"선택안함"}),wO.map(e=>(0,t.jsx)("option",{value:e,children:m1.default[e].label},e))]})]}),(0,t.jsxs)(w1,{children:[(0,t.jsx)(w6,{children:"계좌번호"}),(0,t.jsx)(o.default.Input.Text,{disabled:!r,placeholder:"계좌번호를 입력해주세요.",style:wU,value:d.accountInfoDraft.accountNumber??n.accountNumber??"",onChange:e=>d.updateAccountInfoDraftField("accountNumber",e.target.value)})]}),(0,t.jsxs)(w1,{children:[(0,t.jsx)(w6,{children:"예금주"}),(0,t.jsx)(o.default.Input.Text,{disabled:!r,placeholder:"예금주를 입력해주세요.",style:wU,value:d.accountInfoDraft.accountHolder??n.accountHolder??"",onChange:e=>d.updateAccountInfoDraftField("accountHolder",e.target.value)})]})]}),(0,t.jsxs)(w0,{children:[(0,t.jsxs)(w1,{children:[(0,t.jsx)(w6,{children:"제공인력 자격정보"}),(0,t.jsx)(o.default.Input.Text,{disabled:!r,placeholder:"자격정보를 입력해주세요.",style:wU,value:d.accountInfoDraft.qualificationInfo??n.qualificationInfo??"",onChange:e=>d.updateAccountInfoDraftField("qualificationInfo",e.target.value)})]}),(0,t.jsx)(w1,{children:g?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(w6,{children:"교육 종류"}),(0,t.jsxs)(w5,{$isEmptySelected:!0,disabled:!0,style:wY,value:tf.default.SELECT_EMPTY_VALUE,children:[(0,t.jsx)("option",{value:tf.default.SELECT_EMPTY_VALUE,disabled:!0,children:"미정"}),wB.map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(w6,{children:"실습 여부"}),(0,t.jsxs)(w9,{children:[(0,t.jsxs)(yi,{children:[(0,t.jsx)(yd,{checked:d.accountInfoDraft.isTrainee??n.isTrainee,disabled:!r,onChange:()=>d.updateAccountInfoDraftField("isTrainee",!0)}),"이수"]}),(0,t.jsxs)(yi,{children:[(0,t.jsx)(yd,{checked:!(d.accountInfoDraft.isTrainee??n.isTrainee),disabled:!r,onChange:()=>d.updateAccountInfoDraftField("isTrainee",!1)}),"미이수"]})]})]})}),(0,t.jsxs)(w1,{children:[(0,t.jsx)(w6,{children:"범죄경력 조회여부"}),(0,t.jsx)(w9,{children:(0,t.jsxs)(yi,{children:[(0,t.jsx)(yo,{checked:d.accountInfoDraft.criminalRecordChecked??n.criminalRecordChecked,disabled:!r,onChange:e=>d.updateAccountInfoDraftField("criminalRecordChecked",e.target.checked)}),"조회 완료"]})})]})]}),(0,t.jsx)(w0,{children:(0,t.jsxs)(w1,{children:[(0,t.jsx)(w6,{children:"관련서류 제출여부"}),(0,t.jsx)(o.default.Input.Text,{disabled:!r,placeholder:"제출여부를 입력해주세요.",style:wU,value:d.accountInfoDraft.relatedDocumentInfo??n.relatedDocumentInfo??"",onChange:e=>d.updateAccountInfoDraftField("relatedDocumentInfo",e.target.value)})]})}),(0,t.jsxs)(w0,{children:[(0,t.jsxs)(w1,{$width:191,children:[(0,t.jsx)(w6,{children:"단말기 정보"}),(0,t.jsxs)(w9,{children:[(0,t.jsxs)(yi,{children:[(0,t.jsx)(yd,{checked:"SMARTPHONE"===d.accountInfoTerminalType,disabled:!r,onChange:()=>d.updateAccountInfoTerminalType("SMARTPHONE")}),"스마트폰"]}),(0,t.jsxs)(yi,{children:[(0,t.jsx)(yd,{checked:"DEVICE"===d.accountInfoTerminalType,disabled:!r,onChange:()=>d.updateAccountInfoTerminalType("DEVICE")}),"단말기"]})]})]}),(0,t.jsxs)(w1,{children:[(0,t.jsx)(w6,{children:"단말기 번호"}),(0,t.jsx)(o.default.Input.Text,{disabled:!r||"DEVICE"!==d.accountInfoTerminalType,placeholder:"번호를 입력해주세요.",style:wU,value:d.accountInfoTerminalNumber,onChange:e=>d.updateAccountInfoDraftField("terminalNumber",e.target.value)})]})]}),!x&&(0,t.jsx)(w0,{children:(0,t.jsxs)(w1,{children:[(0,t.jsx)(w6,{children:"인력 유형"}),(0,t.jsx)(w9,{children:Object.entries(_N.default).map(([e,{label:n}])=>(0,t.jsxs)(yi,{children:[(0,t.jsx)(yd,{checked:l?.category===e,disabled:!0}),n]},e))})]})})]}),(0,t.jsxs)(wK,{ref:h,children:[(0,t.jsxs)(wX,{children:[(0,t.jsxs)(wQ,{children:[(0,t.jsx)(wq,{children:"급여 관련 사항"}),s&&(0,t.jsx)(ii,{children:"수정 진행중"})]}),s?(0,t.jsxs)(wZ,{children:[(0,t.jsxs)(wJ,{type:"button",onClick:d.cancelSalaryEdit,children:[(0,t.jsx)(i3.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(wJ,{type:"button",onClick:()=>void d.saveSalaryEdit(),children:[(0,t.jsx)(lY.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(wJ,{type:"button",disabled:null===l,onClick:()=>e("salary"),children:[(0,t.jsx)(n1.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsx)(w0,{children:(0,t.jsxs)(w1,{children:[(0,t.jsx)(w6,{children:"퇴직적립금 관련 계약"}),(0,t.jsx)(w8,{children:wP.map(e=>(0,t.jsxs)(ya,{children:[(0,t.jsx)(yd,{checked:m===e.key,disabled:!s,onChange:()=>d.updateSelectedEmploymentContractDraftField("retirementReserveContractType",e.key)}),e.label]},e.key))})]})}),(0,t.jsxs)(w0,{children:[(0,t.jsxs)(w7,{children:[(0,t.jsx)(w6,{children:"소득세 구분"}),(0,t.jsx)(ye,{children:wN.map(e=>(0,t.jsxs)(yl,{children:[(0,t.jsx)(yd,{checked:b===e.key,disabled:!s,onChange:()=>d.updateSelectedEmploymentContractDraftField("incomeTaxCategory",e.key)}),e.label,e.key===m5&&(0,t.jsxs)(yt,{children:[(0,t.jsx)(o.default.Input.Text,{disabled:!s,placeholder:"금액을 입력하세요.",style:yr,value:null===d.selectedEmploymentContractDraftIncomeTaxFlatAmount?"":String(d.selectedEmploymentContractDraftIncomeTaxFlatAmount),onChange:e=>{let t=e.target.value;d.updateSelectedEmploymentContractDraftField("incomeTaxFlatAmount",""===t?void 0:Number(t))}}),(0,t.jsx)(yn,{children:"원"})]})]},e.key))})]}),(0,t.jsxs)(w1,{$width:184,children:[(0,t.jsx)(w6,{children:"소득세 적용비율"}),(0,t.jsxs)(yt,{children:[(0,t.jsx)(o.default.Input.Text,{disabled:!s,type:"number",min:1,max:200,placeholder:"1~200 입력 가능",style:ys,value:null===d.selectedEmploymentContractDraftIncomeTaxRate?"":String(d.selectedEmploymentContractDraftIncomeTaxRate),onChange:e=>{let t=e.target.value;if(""===t)return void d.updateSelectedEmploymentContractDraftField("incomeTaxRate",void 0);let n=Number(t);d.updateSelectedEmploymentContractDraftField("incomeTaxRate",Number.isNaN(n)?void 0:Math.min(200,Math.max(1,n)))}}),(0,t.jsx)(yn,{children:"%"})]})]})]}),(0,t.jsx)(w0,{children:(0,t.jsxs)(w1,{children:[(0,t.jsxs)(w6,{children:["비과세급여 적용 ",(0,t.jsx)(wH,{})]}),(0,t.jsx)(w9,{children:(0,t.jsxs)(yi,{children:[(0,t.jsx)(yo,{checked:d.selectedEmploymentContractDraftIsNonTaxableExclusionTarget,disabled:!s,onChange:e=>d.updateSelectedEmploymentContractDraftField("isNonTaxableExclusionTarget",e.target.checked)}),"비과세 처리 적용대상 제외"]})}),d.isNonTaxableExclusionTargetError&&(0,t.jsx)(w2,{children:"필수 입력값입니다."})]})}),(0,t.jsx)(w0,{children:(0,t.jsxs)(w1,{$width:338,children:[(0,t.jsx)(w6,{children:"연월차수당 지급방식"}),(0,t.jsx)(w9,{children:wM.map(e=>(0,t.jsxs)(yi,{children:[(0,t.jsx)(yd,{checked:j===e.key,disabled:!s,onChange:()=>d.updateSelectedEmploymentContractDraftField("leaveAllowancePaymentMethod",e.key)}),e.label]},e.key))})]})})]}),(0,t.jsxs)(wK,{ref:p,children:[(0,t.jsxs)(wX,{children:[(0,t.jsxs)(wQ,{children:[(0,t.jsx)(wq,{children:"사회보험"}),c&&(0,t.jsx)(ii,{children:"수정 진행중"})]}),c?(0,t.jsxs)(wZ,{children:[(0,t.jsxs)(wJ,{type:"button",onClick:d.cancelSocialInsuranceEdit,children:[(0,t.jsx)(i3.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(wJ,{type:"button",onClick:()=>void d.saveSocialInsuranceEdit(),children:[(0,t.jsx)(lY.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(wJ,{type:"button",onClick:()=>e("socialInsurance"),children:[(0,t.jsx)(n1.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(yc,{children:[(0,t.jsxs)(yf,{children:[(0,t.jsx)(yh,{children:"구분"}),(0,t.jsx)(yh,{children:"가입 여부"}),(0,t.jsx)(yh,{children:"보수월액(원)"}),(0,t.jsx)(yh,{children:"비고"})]}),wF.map(({key:e,label:i})=>(0,t.jsxs)(yp,{children:[(0,t.jsx)(yu,{children:i}),(0,t.jsx)(yu,{children:(0,t.jsxs)(yx,{children:[(0,t.jsx)(yo,{checked:d.socialInsuranceDraft[e]??n[e]??!1,disabled:!c,onChange:t=>d.updateSocialInsuranceDraftField(e,t.target.checked)}),"가입"]})}),(0,t.jsx)(yu,{children:(0,t.jsx)(yg,{value:"",readOnly:!0})}),(0,t.jsx)(yu,{children:(0,t.jsx)(yg,{value:"",readOnly:!0})})]},e))]})]})]})});function wH(){return(0,t.jsx)(w4,{children:" *"})}let wG=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-0"})`
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
`,wK=l.default.section.withConfig({componentId:"zh__sc-5f426f6a-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,wX=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-2"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  min-height: 40px;
`,wq=l.default.h3.withConfig({componentId:"zh__sc-5f426f6a-3"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #101828;
`,wQ=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-4"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,wZ=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,wJ=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-5f426f6a-6"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,w0=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-7"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,w1=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-8"})`
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
`,w2=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-9"})`
  margin-top: 2px;
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,w6=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-10"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,w4=l.default.span.withConfig({componentId:"zh__sc-5f426f6a-11"})`
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: #e7000b;
`,w5=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-5f426f6a-12"})`
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,w3=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-5f426f6a-13"})`
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,w9=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-14"})`
  display: flex;
  gap: 24px;
  align-items: center;
  height: 36px;
`,w8=(0,l.default)(w9).withConfig({componentId:"zh__sc-5f426f6a-15"})`
  align-self: stretch;
`,w7=(0,l.default)(w1).withConfig({componentId:"zh__sc-5f426f6a-16"})``,ye=(0,l.default)(w9).withConfig({componentId:"zh__sc-5f426f6a-17"})`
  align-self: stretch;
`,yt=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-18"})`
  display: flex;
  gap: 4px;
  align-items: center;
  height: 36px;
`,yn=l.default.span.withConfig({componentId:"zh__sc-5f426f6a-19"})`
  flex-shrink: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,yi=l.default.label.withConfig({componentId:"zh__sc-5f426f6a-20"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  white-space: nowrap;
`,yl=(0,l.default)(yi).withConfig({componentId:"zh__sc-5f426f6a-21"})`
  flex: 1;
`,ya=(0,l.default)(yi).withConfig({componentId:"zh__sc-5f426f6a-22"})`
  flex: 1;
`,yd=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-5f426f6a-23"})`
  width: 20px;
  height: 20px;
`,yo=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-5f426f6a-24"})`
  width: 24px;
  height: 24px;
`,yr={...wU,flex:"none",width:160},ys={...wU,flex:"none",width:"100%"},yc=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-25"})`
  overflow: hidden;
  align-self: stretch;
`,yf=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-26"})`
  display: grid;
  grid-template-columns: 1fr 1.15fr 1.35fr 1.35fr;
  border-bottom: 1px solid #e5e7eb;
  background: #f3f4f6;
`,yh=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-27"})`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 32px;

  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #0a0a0a;
`,yp=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-28"})`
  display: grid;
  grid-template-columns: 1fr 1.15fr 1.35fr 1.35fr;
  min-height: 64px;

  &:not(:last-child) {
    border-bottom: 1px solid #e5e7eb;
  }
`,yu=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-29"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 12px;

  font-size: 16px;
  line-height: 20px;
  color: #0a0a0a;
`,yx=l.default.label.withConfig({componentId:"zh__sc-5f426f6a-30"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
`,yg=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-5f426f6a-31"})`
  width: 100%;
  height: 36px;
  padding: 4px 16px;
`,ym={status:"WAITING_TO_LINK",badge:{label:"연동 대기",color:"lightBlue"},action:{label:"연동 대기중...",color:"blue",disabled:!0}};function yb(e){return e?.isCreated===!0}function yj(e,t){return null!==e.createdAt&&(null===t.createdAt||e.createdAt>t.createdAt||e.createdAt===t.createdAt&&String(e.id)>String(t.id))}function y_(e,t){return 0===t||0===e?"unchecked":e===t?"checked":"indeterminate"}function yw({status:e,onClick:n}){return(0,t.jsx)(yF,{$status:e,onClick:n,children:"checked"===e?(0,t.jsx)(lY.default,{sx:{fontSize:18}}):"indeterminate"===e?(0,t.jsx)(rp,{sx:{fontSize:20}}):null})}let yy=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,n=e.documentTemplateListStatus,l=e.employmentContractDocumentListStatus,d=e.documentTemplates,o=e.employmentContractDocuments,r=e.selectedEmploymentContractId,[s,c]=(0,i.useState)(new Set),[f,h]=(0,i.useState)(!1),p=(0,i.useMemo)(()=>{let e=new Map;return o.forEach(t=>{let n=e.get(t.templateId);(void 0===n||yj(t,n))&&e.set(t.templateId,t)}),e},[o]),u=(0,i.useMemo)(()=>d.flatMap(e=>{let t=p.get(e.id);return void 0===t?[]:[{phaseGroup:e.phaseGroup,phaseGroupLabel:e.phaseGroupLabel,templateId:e.id,templateName:t.templateName,templateImagePath:e.templateImagePath,document:t}]}),[p,d]),x=(0,i.useMemo)(()=>{let e=new Map;return u.forEach(t=>{let n=e.get(t.phaseGroup);void 0===n?e.set(t.phaseGroup,{key:t.phaseGroup,label:t.phaseGroupLabel,cards:[t]}):n.cards.push(t)}),Array.from(e.values())},[u]),g=(0,i.useMemo)(()=>Array.from(new Set(u.flatMap(e=>yb(e.document)?[e.document.id]:[]))),[u]),m=g.filter(e=>s.has(e)).length,b=y_(m,g.length),j=e=>{c(t=>{let n=new Set(t);return e.forEach(e=>n.add(e)),n})},_=e=>{c(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n})},w=e=>{let t=new Set(e);return u.filter(e=>yb(e.document)&&t.has(e.document.id))},y=async t=>{let n=e.serviceWorkerId;if(null===n)return a.default.ui.layout.toast.error("제공인력 정보를 찾을 수 없어 출력을 진행할 수 없습니다."),null;let i=Array.from(new Set(t.filter(e=>null!==e.document&&"AUTO_CREATED"===e.document.status).map(e=>e.document.id)));if(0===i.length)return!1;let l=await Promise.all(i.map(e=>av.default.data.serviceWorker.patchDocument({id:n,documentId:e,payload:{fields:[]}}))),d=l.find(([e])=>null!==e)?.[0]??null;return null!==d?(a.default.ui.layout.toast.error(d.message??"서류 상태 저장에 실패했습니다."),null):(await a.default.data.serviceWorker.employmentContractDocumentList.refetch(),!0)},v=async e=>{let{document:t}=e;if(null===t)return null;let[n,i]=await av.default.data.serviceWorker.getDocumentTemplate({templateId:e.templateId});return null!==n||null===i?null:i.map(e=>{let n=t.inputData.find(t=>t.page===e.page&&t.fieldKey===e.fieldKey);return{...e,value:n?.value??null}})},C=async e=>{let t=[],n=[],i=0;for(let l of e){let e=await v(l);if(null===e)return a.default.ui.layout.toast.error(`서류 서식 정보를 불러오지 못했습니다. (${l.templateName})`),null;(l.templateImagePath??[]).forEach((a,d)=>{if(""===a)return;let o=d+1;i+=1,t.push({id:`${l.document.id}-${o}`,templateId:l.templateId,imagePath:a,page:i}),e.filter(e=>e.page===o).forEach(e=>{n.push({...e,id:e.id,page:i})})})}return{pages:t,fields:n}},I=async(t,n)=>{if(0!==t.length){h(!0);try{let i=w(t),l=await y(i);if(null===l)return;l&&await new Promise(e=>{window.setTimeout(e,600)});let d=w(t),o=await C(d);if(null===o)return;let{pages:r,fields:s}=o;if(0===r.length)return void a.default.ui.layout.toast.error("출력할 서류 이미지가 없습니다.");let f=1===d.length?d[0]?.templateName??"제공인력 서류 출력":`제공인력 서류 ${d.length}건`,h=!1;await (0,hG.renderDocumentPrintView)({pages:r,fields:s,printTitle:f,retryOnImageLoadFailure:{refresh:async()=>{await a.default.data.serviceWorker.documentTemplateList.refetch()},rebuildPayload:async()=>{var n,i;let l,a,d=(n=e.documentTemplates,i=e.employmentContractDocuments,l=new Map,i.forEach(e=>{let t=l.get(e.templateId);(void 0===t||yj(e,t))&&l.set(e.templateId,e)}),a=new Set(t),n.flatMap(e=>{let t=l.get(e.id);return void 0!==t&&yb(t)&&!0===a.has(t.id)?[{phaseGroup:e.phaseGroup,phaseGroupLabel:e.phaseGroupLabel,templateId:e.id,templateName:t.templateName,templateImagePath:e.templateImagePath,document:t}]:[]})),o=await C(d);return null===o||0===o.pages.length?null:{...o,printTitle:f}}},onImageLoadFailure:e=>{h=!0,a.default.ui.layout.toast.error(`서류 이미지 ${e}개 로딩에 실패하여 출력을 중단했습니다.`)}}),n&&!h&&c(new Set)}finally{h(!1)}}};return null===r?(0,t.jsx)(yM,{children:"선택 가능한 계약이 없습니다."}):("loading"===n||"loading"===l)&&0===u.length?(0,t.jsx)(yM,{children:"서류 목록을 불러오는 중입니다."}):"error"===n||"error"===l?(0,t.jsx)(yM,{children:"서류 목록을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요."}):0===u.length?(0,t.jsx)(yM,{children:"등록된 서류가 없습니다."}):(0,t.jsxs)(yv,{children:[(0,t.jsxs)(yC,{children:[(0,t.jsxs)(yz,{onClick:()=>{"checked"===b?_(g):j(g)},children:[(0,t.jsx)(yw,{status:b}),"전체 선택하기"]}),(0,t.jsxs)(yI,{children:[(0,t.jsxs)(yT,{disabled:0===m||f,onClick:()=>void I(Array.from(s),!0),children:[(0,t.jsx)(rD.default,{sx:{fontSize:16}}),"선택한 서류 출력하기"]}),(0,t.jsxs)(yT,{disabled:0===g.length||f,onClick:()=>void I(g,!1),children:[(0,t.jsx)(rD.default,{sx:{fontSize:16}}),"전체 출력하기"]})]})]}),x.map(e=>(0,t.jsxs)(yE,{children:[(0,t.jsxs)(yS,{onClick:()=>{let t=e.cards.flatMap(e=>yb(e.document)?[e.document.id]:[]);"checked"===y_(t.filter(e=>s.has(e)).length,t.length)?_(t):j(t)},children:[(0,t.jsx)(yw,{status:y_(e.cards.filter(e=>yb(e.document)&&s.has(e.document.id)).length,e.cards.filter(e=>yb(e.document)).length)}),"[",e.label,"]"]}),(0,t.jsx)(yk,{children:e.cards.map(e=>{let n=e.templateImagePath?.[0]??null,i=yb(e.document)&&s.has(e.document.id),l=null===e.document?ym:(0,sn.getServiceWorkerDocumentStatusUi)(e.document.badgeLabel,e.document.actionLabel);return(0,t.jsxs)(yD,{children:[(0,t.jsx)(yA,{children:(0,t.jsx)(yw,{status:i?"checked":"unchecked",onClick:()=>{var t;yb(e.document)&&(t=e.document.id,c(e=>{let n=new Set(e);return n.has(t)?n.delete(t):n.add(t),n}))}})}),(0,t.jsxs)(yL,{$color:l.badge.color,children:[l.badge.icon,l.badge.label]}),(0,t.jsx)(y$,{children:null!==n&&""!==n?(0,t.jsx)(ro.default,{src:n,width:210,height:297,style:{width:"auto",height:"90%",maxWidth:"90%",objectFit:"contain"},loading:"eager",alt:e.templateName}):(0,t.jsx)(rs,{size:40,color:"#D1D5DC"})}),(0,t.jsxs)(yR,{children:[(0,t.jsx)(yO,{children:(0,t.jsx)(yP,{children:e.templateName})}),(0,t.jsx)(yN,{$color:l.action.color,disabled:!0===l.action.disabled||f||null===n||""===n,onClick:()=>{null!==e.document&&a.default.modal.documentView.openServiceWorkerDocument(e.document.id,{templateId:e.templateId})},children:null===n||""===n?"이미지 없음":l.action.label})]})]},e.templateId)})})]},e.key))]})}),yv=l.default.div.withConfig({componentId:"zh__sc-10675099-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  min-height: 0;
  padding: 24px;

  background: #fcfdff;
`,yC=l.default.div.withConfig({componentId:"zh__sc-10675099-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,yI=l.default.div.withConfig({componentId:"zh__sc-10675099-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,yz=l.default.button.withConfig({componentId:"zh__sc-10675099-3"})`
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
`,yT=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-10675099-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #4f39f6;
`,yE=l.default.div.withConfig({componentId:"zh__sc-10675099-5"})`
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: flex-start;
  align-self: stretch;
`,yS=l.default.div.withConfig({componentId:"zh__sc-10675099-6"})`
  cursor: pointer;

  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;
`,yk=l.default.div.withConfig({componentId:"zh__sc-10675099-7"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: stretch;
  align-self: stretch;
`,yD=l.default.div.withConfig({componentId:"zh__sc-10675099-8"})`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 188px;
  height: 232px;
  border: 1px solid #d1d5dc;
  border-radius: 8px;

  background: #fff;
`,yA=l.default.div.withConfig({componentId:"zh__sc-10675099-9"})`
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 8px;
`,yL=l.default.div.withConfig({componentId:"zh__sc-10675099-10"})`
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
`,y$=l.default.div.withConfig({componentId:"zh__sc-10675099-11"})`
  overflow: hidden;
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  height: 140px;
  border-radius: 7px 7px 0 0;

  background: #f3f4f6;
`,yR=l.default.div.withConfig({componentId:"zh__sc-10675099-12"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,yO=l.default.div.withConfig({componentId:"zh__sc-10675099-13"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,yP=l.default.div.withConfig({componentId:"zh__sc-10675099-14"})`
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
`,yN=l.default.button.withConfig({componentId:"zh__sc-10675099-15"})`
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
`,yM=l.default.div.withConfig({componentId:"zh__sc-10675099-16"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #4b5563;
`,yF=l.default.div.withConfig({componentId:"zh__sc-10675099-17"})`
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
`,yB=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail;return(0,t.jsx)(yU,{role:"tablist","aria-label":"제공인력 상세 탭",children:e.tabs.map(n=>(0,t.jsx)(yY,{type:"button",role:"tab","aria-selected":n.active,$active:n.active,onClick:()=>e.setActiveTab(n.key),children:n.label},n.key))})}),yU=l.default.div.withConfig({componentId:"zh__sc-53613c76-0"})`
  display: flex;
  align-self: flex-start;

  width: 100%;
  height: 56px;
  border-bottom: 1px solid #e5e7eb;

  background-color: #fff;
`,yY=l.default.button.withConfig({componentId:"zh__sc-53613c76-1"})`
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
`;var yV=e.i(37163),yW=e.i(97861),yH=e.i(91916);function yG({isOpen:e,onCancel:n,onConfirm:i}){return e?(0,t.jsx)(d.default,{children:(0,t.jsxs)(yK,{children:[(0,t.jsxs)(yX,{children:[(0,t.jsx)(yq,{children:"계약 정보를 저장할까요?"}),(0,t.jsxs)(yQ,{children:["수정된 정보는 연결된 서류의 자동입력 항목에 함께 반영됩니다.","\n","이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다."]})]}),(0,t.jsxs)(yZ,{children:[(0,t.jsx)(y0,{type:"button",onClick:n,children:"취소하기"}),(0,t.jsx)(y1,{type:"button",onClick:i,children:"저장 및 모든 서류에 반영"})]})]})}):null}let yK=l.default.div.withConfig({componentId:"zh__sc-e1c0716c-0"})`
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
`,yX=l.default.div.withConfig({componentId:"zh__sc-e1c0716c-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,yq=l.default.p.withConfig({componentId:"zh__sc-e1c0716c-2"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,yQ=l.default.p.withConfig({componentId:"zh__sc-e1c0716c-3"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
  white-space: pre-line;
`,yZ=l.default.div.withConfig({componentId:"zh__sc-e1c0716c-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,yJ=l.css`
  height: 36px;
  padding: 8px 16px;
  font-size: 16px;
`,y0=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-e1c0716c-5"})`
  ${yJ}
`,y1=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-e1c0716c-6"})`
  ${yJ}
`;function y2({isOpen:e,title:n,description:i,onCancel:l,onConfirm:a}){return e?(0,t.jsx)(d.default,{children:(0,t.jsxs)(y6,{children:[(0,t.jsxs)(y4,{children:[(0,t.jsx)(y5,{children:n}),(0,t.jsx)(y3,{children:i})]}),(0,t.jsxs)(y9,{children:[(0,t.jsx)(y7,{type:"button",onClick:l,children:"취소하기"}),(0,t.jsx)(ve,{type:"button",onClick:a,children:"변경하기"})]})]})}):null}let y6=l.default.div.withConfig({componentId:"zh__sc-b641051-0"})`
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
`,y4=l.default.div.withConfig({componentId:"zh__sc-b641051-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,y5=l.default.p.withConfig({componentId:"zh__sc-b641051-2"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,y3=l.default.p.withConfig({componentId:"zh__sc-b641051-3"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
  white-space: pre-line;
`,y9=l.default.div.withConfig({componentId:"zh__sc-b641051-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,y8=l.css`
  height: 36px;
  padding: 8px 16px;
  font-size: 16px;
`,y7=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-b641051-5"})`
  ${y8}
`,ve=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-b641051-6"})`
  ${y8}
`,vt=e=>{if(null===e||!u2.default.brand.calendarDateString.is(e))return"-";let[t,n,i]=e.split("-");return`${t}년 ${Number(n)}월 ${Number(i)}일`},vn=(0,n.observer)(function({onRequestEdit:e}){let[n,l]=(0,i.useState)(!1),[d,o]=(0,i.useState)(!1),[r,s]=(0,i.useState)(!1),c=(0,i.useRef)(null),f=a.default.modal.serviceWorkerDetail,h=f.serviceWorker,p=h?.name??"",u=h?.status,x=h?.firstRegisteredDate??null,g=f.employmentContractStatusOptions,m=f.selectedEmploymentContractStatus??"UNCONTRACTED",b=f.selectedEmploymentContractDraftStatus??"",j=f.selectedEmploymentContractExpirationReminder,_=f.employmentContractRoundOptions,w=f.selectedEmploymentContractId??"",y=f.isEmploymentContractEditing,v=f.selectedEmploymentContractDraftContractStartDate??"",C=f.selectedEmploymentContractDraftTerminatedOn,I=f.selectedEmploymentContract,z=I?.serviceType,T=I?.contractStartDate??null,E=I?.contractEndDate??null,S=m===yV.default.COMPLETED,k=b===yV.default.TERMINATED,D=(0,nV.getTodayCalendarDateString)(),A=D.replaceAll("-","."),L=`${T?.replaceAll("-",".")??"-"} ~ ${E?.replaceAll("-",".")??"-"}`,$=vt(x),R=vt(T),O=null===E?null:vt(E),P=m===yV.default.TERMINATED?f.selectedEmploymentContractDraftTerminatedOn:"",N=u2.default.brand.calendarDateString.is(P)?vt(P):null,M=(0,nV.getEmploymentContractTenureLabel)(h?.employmentContracts??[]);return((0,i.useEffect)(()=>{if(!y)return;let e=e=>{let t=e.target;nH(t)||nG(t)||!(t instanceof Node&&null!==c.current&&c.current.contains(t))&&(f.hasEditChanges("employmentContract")||f.cancelEmploymentContractEdit())};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[y,f]),null===h||void 0===u)?null:(0,t.jsxs)(vi,{ref:c,children:[(0,t.jsxs)(vl,{children:[(0,t.jsx)(vc,{children:p}),(0,t.jsxs)(vf,{children:[(0,t.jsx)(vh,{children:yW.default[(0,yH.getServiceWorkerUiStatus)(h)].label}),(0,t.jsx)(vh,{children:(0,oM.getServiceBadgeText)(z??null)})]}),(0,t.jsx)(vp,{children:y?(0,t.jsx)(vu,{children:"수정 진행중"}):null}),(0,t.jsx)(vx,{children:y?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(vg,{type:"button",onClick:()=>{f.cancelEmploymentContractEdit()},children:[(0,t.jsx)(i3.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(vg,{type:"button",onClick:()=>{f.hasEditChanges("employmentContract")?l(!0):f.cancelEmploymentContractEdit()},children:[(0,t.jsx)(lY.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(vg,{type:"button",disabled:S||null===I,onClick:()=>{S||null===I||e("employmentContract")},children:[(0,t.jsx)(n1.default,{sx:{fontSize:20}}),"수정하기"]})})]}),(0,t.jsx)(vm,{children:(0,t.jsxs)(vb,{children:[(0,t.jsx)(vj,{children:"계약 상태"}),(0,t.jsxs)(vw,{value:y?b:m,disabled:!y||null===I,onChange:e=>{let t=e.target.value;if(""!==t){if(t===yV.default.TERMINATED&&t!==b)return void o(!0);if(t===yV.default.ACTIVE&&t!==b)return void s(!0);f.updateSelectedEmploymentContractDraftStatus(t)}},children:[null===I?(0,t.jsx)("option",{value:"UNCONTRACTED",children:"미계약"}):null,0===g.length&&null!==I?(0,t.jsx)("option",{value:"",children:"-"}):null,g.map(e=>(0,t.jsx)("option",{value:e.value,children:e.label},e.value))]}),null===I?(0,t.jsxs)(vo,{type:"button",onClick:()=>{a.default.modal.serviceWorkerCreate.show("contract",a.default.serviceWorker.info.byServiceWorker.currentServiceType??"MEAL"),f.close()},children:[(0,t.jsx)(en.default.ContractEdit,{size:16}),"계약하기"]}):null,null!==j?(0,t.jsxs)(vd,{children:[(0,t.jsx)(oO.default,{$color:j.color,children:(0,nV.formatContractExpirationLabel)(j.remainingDays)}),(0,t.jsxs)(vo,{type:"button",onClick:()=>{a.default.modal.serviceWorkerCreate.show("renew",z??a.default.serviceWorker.info.byServiceWorker.currentServiceType??"MEAL"),a.default.modal.serviceWorkerDetail.close()},children:[(0,t.jsx)(en.default.ContractEdit,{size:16}),"재계약 하기"]})]}):null]})}),(0,t.jsx)(vm,{children:(0,t.jsxs)(vb,{children:[(0,t.jsx)(vj,{children:"계약 회차"}),(0,t.jsxs)(vy,{value:w,disabled:y||0===_.length,onChange:e=>{let t=e.target.value;f.setSelectedEmploymentContractId(""===t?null:t)},children:[0===_.length?(0,t.jsx)("option",{value:"",children:"-"}):null,_.map(e=>(0,t.jsx)("option",{value:e.id,children:e.label},e.id))]})]})}),(0,t.jsxs)(vm,{children:[(0,t.jsxs)(vb,{children:[(0,t.jsx)(vj,{children:"접수일"}),(0,t.jsx)(v_,{children:$})]}),(0,t.jsx)(vv,{}),(0,t.jsxs)(vb,{children:[(0,t.jsx)(vj,{children:"계약 기간"}),y?(0,t.jsxs)(va,{children:[k?(0,t.jsx)(v_,{children:vt(T)}):(0,t.jsx)(vs,{value:v,readOnly:!1,onChange:e=>{f.updateSelectedEmploymentContractDraftContractStartDate(e)},placeholder:"YYYY-MM-DD"}),(0,t.jsx)(vr,{children:"~"}),(0,t.jsx)(v_,{children:vt(E)}),k?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(vr,{children:"퇴사일"}),(0,t.jsx)(vs,{value:C,readOnly:!1,onChange:e=>{f.updateSelectedEmploymentContractDraftTerminatedOn(e)},placeholder:"YYYY-MM-DD"})]}):null]}):(0,t.jsx)(v_,{children:null===I?"-":`${R} - ${O??"-"}${null===N?"":` (퇴사 ${N})`}`})]}),(0,t.jsx)(vv,{}),(0,t.jsxs)(vb,{children:[(0,t.jsx)(vj,{children:"근속기간"}),(0,t.jsx)(v_,{children:M})]})]}),(0,t.jsx)(y2,{isOpen:d,title:"계약 상태를 퇴사로 변경 하시겠습니까?",description:`오늘(${A})을 퇴사일로 기록하고 퇴사 상태로 변경합니다. 원래 계약 종료일은 그대로 남습니다.
저장하면 이 서비스에서 연결된 이용자의 연결이 끊어지고, 이용자는 '매칭 대기'가 됩니다(계약중으로 되돌려도 연결은 다시 해야 합니다).
퇴사 상태에서는 계약 시작일은 수정할 수 없고, 퇴사일은 수정할 수 있습니다.`,onCancel:()=>{o(!1)},onConfirm:()=>{f.updateSelectedEmploymentContractDraftTerminatedOn(D),f.updateSelectedEmploymentContractDraftStatus(yV.default.TERMINATED),o(!1)}}),(0,t.jsx)(y2,{isOpen:r,title:"계약중 상태로 되돌리시겠습니까?",description:`이전 계약 기간 (${L})으로 되돌리며, 퇴사에서 계약중으로 변경됩니다.
계약중일 시, 계약 시작일을 수정할 수 있으며 계약 종료일은 수정할 수 없습니다.`,onCancel:()=>{s(!1)},onConfirm:()=>{f.updateSelectedEmploymentContractDraftStatus(yV.default.ACTIVE),s(!1)}}),(0,t.jsx)(yG,{isOpen:n,onCancel:()=>{l(!1)},onConfirm:()=>{f.saveSelectedEmploymentContractDraft().then(e=>{!0===e&&l(!1)})}})]})}),vi=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px 24px;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;

  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,vl=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
`,va=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,vd=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,vo=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-3c59ca1c-4"})`
  gap: 8px;
  padding: 0 16px;
`,vr=l.default.span.withConfig({componentId:"zh__sc-3c59ca1c-5"})`
  font-size: 16px;
  line-height: 24px;
  color: #475467;
`,vs=(0,l.default)(o.default.Input.Date).attrs({style:{textAlign:"center"}}).withConfig({componentId:"zh__sc-3c59ca1c-6"})`
  width: 180px;
  height: 28px;
  font-size: 16px;
`,vc=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-7"})`
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 83.333% */
  color: #0a0a0a;
`,vf=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-8"})`
  display: flex;
  gap: 4px;
`,vh=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-9"})`
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
`,vp=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-10"})`
  display: flex;
  flex: 1;
`,vu=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-11"})`
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
`,vx=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-12"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,vg=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-3c59ca1c-13"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,vm=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-14"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,vb=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-15"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,vj=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-16"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
`,v_=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-17"})`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
`,vw=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-3c59ca1c-18"})`
  height: 28px;
`,vy=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-3c59ca1c-19"})`
  height: 36px;
`,vv=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-20"})`
  width: 1px;
  height: 24px;
  background: #dadee6;
`,vC=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,[n,l]=(0,i.useState)(null),[o,r]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1);if("ready"!==e.status||e.isDocumentViewOnly)return null;let f=t=>{let n=e.editingSection;if(null===n||n===t)return void e.startEditSection(t);if(!e.hasEditChanges(n)){e.cancelEditSection(n),e.startEditSection(t);return}l(t),r(!0)},h=()=>{l(null),r(!1)};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(vI,{children:[(0,t.jsxs)(vz,{children:[(0,t.jsx)(vT,{children:"제공인력 상세보기"}),(0,t.jsxs)(vE,{onClick:()=>{let t=e.editingSection;null!==t&&e.hasEditChanges(t)?c(!0):e.close()},children:[(0,t.jsx)(et.X,{size:16}),"닫기"]})]}),(0,t.jsx)(vn,{onRequestEdit:f}),(0,t.jsx)(yB,{}),(0,t.jsxs)(vS,{children:["basic"===e.activeTab&&(0,t.jsx)(_T,{}),"contract"===e.activeTab&&(0,t.jsx)(wW,{onRequestEdit:f}),"docs"===e.activeTab&&(0,t.jsx)(yy,{})]}),(0,t.jsx)(_M,{isOpen:o,onCancel:h,onConfirm:()=>{let t=e.editingSection;null===t||null===n||(e.cancelEditSection(t),e.startEditSection(n)),h()}}),(0,t.jsx)(_M,{isOpen:s,title:"수정 중인 내용을 저장하지 않고 닫을까요?",description:"지금 닫으면 수정 중인 내용이 저장되지 않습니다.",confirmLabel:"저장하지 않고 닫기",onCancel:()=>c(!1),onConfirm:()=>{let t=e.editingSection;null!==t&&e.cancelEditSection(t),c(!1),e.close()}})]})})}),vI=l.default.div.withConfig({componentId:"zh__sc-731779e3-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: 1050px;
  height: 90vh;
  border-radius: 8px;

  background: #fff;
`,vz=l.default.div.withConfig({componentId:"zh__sc-731779e3-1"})`
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
`,vT=l.default.h2.withConfig({componentId:"zh__sc-731779e3-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px;
  color: #101828;
  letter-spacing: -0.439px;
`,vE=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-731779e3-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,vS=l.default.div.withConfig({componentId:"zh__sc-731779e3-4"})`
  display: flex;
  flex: 1;
  min-height: 0;
`,vk=(0,n.observer)(function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(rM,{}),(0,t.jsx)(nB,{}),(0,t.jsx)(us,{}),(0,t.jsx)(j_,{}),(0,t.jsx)(vC,{}),(0,t.jsx)(pC,{}),(0,t.jsx)(gz,{})]})});e.s(["default",0,vk],55357)},31239,e=>{"use strict";e.i(3159);var t=e.i(46907),n=e.i(33261),i=e.i(7744),l=e.i(43174);let a=(0,t.observer)(function(){let e=(0,n.usePathname)(),t=(0,n.useRouter)(),a=l.default.ui.layout.targetPathname,d=l.default.data.auth.me.data?.organizationId??null,o=l.default.data.organization.serviceList.query,r=o?.id===d?l.default.data.organization.serviceList.data?.serviceList??null:null,s=r?.some(e=>!0===e.operatingStatus&&("MEAL"===e.type||"NUTRITION"===e.type))??!0;return(0,i.useEffect)(()=>{null!==d&&o?.id!==d&&l.default.data.organization.serviceList.setQuery({id:d})},[d,o?.id]),(0,i.useEffect)(()=>{e&&l.default.ui.layout.setPathname(e)},[e]),(0,i.useEffect)(()=>{null!==a&&(t.push(a),l.default.ui.layout.clearTargetPathname())},[t,a]),(0,i.useEffect)(()=>{let n="/diet-setting"===e||e?.startsWith("/diet-setting/");!s&&n&&r&&t.replace("/client/info/by-client")},[s,e,t,r]),(0,i.useEffect)(()=>{let n="/client/service-provision"===e||e?.startsWith("/client/service-provision/");!s&&n&&r&&t.replace("/client/info/by-client")},[s,e,t,r]),null});e.s(["default",0,a])},44997,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(94586),l=e.i(33261),a=e.i(7744),d=e.i(4153);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r=(0,a.forwardRef)(function(e,t){var n=e.color,i=e.size,l=void 0===i?24:i,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return a.default.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),a.default.createElement("polyline",{points:"6 9 12 15 18 9"}))});function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}r.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},r.displayName="ChevronDown";var c=(0,a.forwardRef)(function(e,t){var n=e.color,i=e.size,l=void 0===i?24:i,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return a.default.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),a.default.createElement("polyline",{points:"18 15 12 9 6 15"}))});c.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},c.displayName="ChevronUp";var f=e.i(38803),h=e.i(9454),p=e.i(43174),u=e.i(92428);function x(e){return null===e?"/":e.length>1&&e.endsWith("/")?e.slice(0,-1):e}function g(e,t){let n=x(e),i=x(t);return"/"===i?"/"===n:n===i||n.startsWith(`${i}/`)}function m(e,t){return t.startsWith("/")?"/"===e?t:`${x(e)}${t}`:""}function b(e,t){return m(e,t.matchSubpath??t.subpath)}let j=(0,n.observer)(function(){let e=x((0,l.usePathname)()),n=h.default.routes,d=p.default.data.auth.me.data,o=d?.organizationId??null,s=p.default.data.organization.serviceList.query,f=s?.id===o?p.default.data.organization.serviceList.data?.serviceList??null:null,j=f?.some(e=>!0===e.operatingStatus&&("MEAL"===e.type||"NUTRITION"===e.type))??!0,[P,N]=(0,a.useState)(()=>Object.fromEntries(n.map((t,n)=>[n,t.children?.some(n=>{let i=b(t.subpath,n);return!!i&&g(e,i)})??!1]))),M=e=>(e.children??[]).filter(t=>(0,u.canSee)(d,t.permissions)&&(j||"/client"!==e.subpath||"/service-provision"!==t.subpath)),F=n.map((e,t)=>({route:e,index:t})).filter(({route:e})=>j||"/diet-setting"!==e.subpath).filter(({route:e})=>(0,u.canSee)(d,e.permissions)).filter(({route:e})=>void 0===e.children||M(e).length>0);return(0,t.jsx)(_,{children:F.map(({route:n,index:l},a)=>{let d=M(n),o=d.length>0,s=d.some(t=>{let i=b(n.subpath,t);return!!i&&g(e,i)}),f=g(e,n.subpath)||s,h=s||(P[l]??!1);return(0,t.jsxs)(w,{children:[(0,t.jsx)(y,{$active:f,$clickable:!!(n.hasPage||o),as:n.hasPage?i.default:"div",href:n.hasPage?n.subpath:void 0,onClick:o?()=>{N(e=>({...e,[l]:!h}))}:void 0,children:(0,t.jsx)(v,{children:(0,t.jsx)(C,{children:(0,t.jsxs)(I,{children:[(0,t.jsx)(z,{children:n.icon?(0,t.jsx)(n.icon,{size:16,color:f?"#4F39F6":"#6E7079"}):null}),(0,t.jsx)(E,{$active:f,children:`${a+1}. ${n.label}`}),o?(0,t.jsx)(T,{children:h?(0,t.jsx)(c,{size:16,color:"#6E7079"}):(0,t.jsx)(r,{size:16,color:"#6E7079"})}):null]})})})}),o&&h?(0,t.jsx)(S,{children:(0,t.jsx)(k,{children:d.map((l,d)=>{let o=m(n.subpath,l.subpath),r=b(n.subpath,l),s=!!r&&g(e,r);return(0,t.jsx)(D,{as:l.hasPage?i.default:"div",href:l.hasPage&&o||void 0,children:(0,t.jsx)(A,{children:(0,t.jsx)(L,{children:(0,t.jsx)($,{children:(0,t.jsx)(R,{children:(0,t.jsx)(O,{$active:s,children:`${a+1}-${d+1}. ${l.label}`})})})})})},`${n.subpath}-${l.subpath}`)})})}):null]},n.subpath)})})}),_=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-0"})`
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
`,L=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-13"})`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`,$=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-14"})`
  display: flex;
  flex: 1 0 0;
  gap: 10px;
  align-items: center;

  min-width: 1px;
  height: 100%;
`,R=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-15"})`
  overflow: hidden;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 1px;
  height: 100%;
  padding: 1px 0;
`,O=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-16"})`
  flex-shrink: 0;

  width: 100%;

  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: ${({$active:e})=>e?"#4F39F6":"#45464E"};
`;e.s(["default",0,j],44997)},70552,e=>{"use strict";var t=e.i(9735),n=e.i(39635);e.i(3159);var i=e.i(46907),l=e.i(7744),a=e.i(38803),d=e.i(43174),o=e.i(24045),r=e.i(8179),s=e.i(23416),c=e.i(98273),f=e.i(64954);let h=[".xlsx"];function p(e){return Array.from(e.dataTransfer?.types??[]).includes("Files")}let u=(0,i.observer)(function(){let{isWindowFileDragging:e}=d.default.ui.layout,n=(0,l.useRef)(null),i=(0,l.useRef)(null),a=(0,l.useRef)(null),[f,u]=(0,l.useState)(!1),[z,T]=(0,l.useState)(!1),[E,S]=(0,l.useState)(!1),[k,D]=(0,l.useState)(null),A=f||e;(0,l.useEffect)(()=>()=>{null!==a.current&&clearTimeout(a.current)},[]);let L=e=>{let t,n;null!==e&&(n=(t=e.name.lastIndexOf("."))>=0?e.name.slice(t).toLowerCase():"",(h.includes(n)||(null!==a.current&&clearTimeout(a.current),S(!0),a.current=setTimeout(()=>{S(!1),a.current=null},2e3),0))&&D(e))},$=async()=>{if(null===k||z)return;T(!0);let[e]=await s.default.data.serviceWorker.importActivityRecordsExcel({file:k,organizationId:d.default.data.auth.me.data?.organizationId??void 0});if(T(!1),null!==e)return void d.default.ui.layout.toast.error(e.message??"파일 업로드에 실패했습니다. 잠시 후 다시 시도해 주세요.",3e3,n.current);S(!1),D(null);let t=d.default.data.serviceWorker.activityRecordList;null===t.query?t.setQuery({}):await t.refetch(),d.default.ui.layout.toast.success("파일 업로드를 완료했습니다.",3e3,n.current)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{ref:i,type:"file",accept:".xlsx",onChange:e=>{L(e.target.files?.[0]??null),e.target.value=""}}),(0,t.jsx)(g,{ref:n,children:(0,t.jsxs)(m,{$isDragging:A,$isError:E,$isUploading:z,$isFileSelected:null!==k,onClick:e=>{e.target instanceof HTMLElement&&null!==e.target.closest("button")||null===k&&(z||i.current?.click())},onDragOver:e=>{!p(e)||(e.preventDefault(),z||u(!0))},onDragLeave:e=>{p(e)&&(e.preventDefault(),u(!1))},onDrop:e=>{!p(e)||(e.preventDefault(),z||(u(!1),L(e.dataTransfer.files?.[0]??null)))},children:[null===k?(0,t.jsxs)(t.Fragment,{children:[!1===E&&(0,t.jsx)(o.Upload,{size:20,color:"#4F39F6"}),(0,t.jsx)(b,{$isError:E,children:E?"지원하지 않는 파일 형식입니다.":A?"파일을 여기에 놓으면 업로드 됩니다.":z?"파일을 업로드하고 있습니다.":"[전자바우처 - 서비스 이용내역] 엑셀 파일을 이곳에 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요."}),(0,t.jsx)(j,{children:"지원 파일 형식: 엑셀(.xlsx)"})]}):(0,t.jsxs)(_,{children:[(0,t.jsxs)(w,{children:[(0,t.jsx)(y,{children:(0,t.jsx)(c.default.News,{size:17,color:"#2264E8"})}),(0,t.jsx)(v,{children:k.name})]}),(0,t.jsxs)(C,{type:"button",onClick:()=>{D(null)},disabled:z,children:["삭제",(0,t.jsx)(r.X,{size:14})]})]}),(0,t.jsx)(I,{type:"button",onClick:()=>{$()},disabled:null===k||z,$processing:z,children:"업로드하기"})]})})]})}),x=a.default.input.withConfig({componentId:"zh__sc-280fbc38-0"})`
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
`,z=(0,i.observer)(function(){let e=d.default.data.auth.me.data?.organizationId??null,i=d.default.data.serviceWorker.activityRecordsLastImportedDate,a=d.default.serviceWorker.serviceRecord.lastImportedDate,o=d.default.serviceWorker.serviceRecord.lastUploadedAtText;return(0,l.useEffect)(()=>{null!==e&&i.query?.organizationId!==e&&i.setQuery({organizationId:e})},[i,i.query?.organizationId,e]),(0,t.jsxs)(T,{children:[(0,t.jsx)(u,{}),(0,t.jsxs)(E,{children:[(0,t.jsxs)(S,{children:[(0,t.jsx)(n.default,{sx:{fontSize:16}}),(0,t.jsx)(k,{children:"가장 최근 엑셀 파일 업로드한 날짜"})]}),(0,t.jsxs)(D,{children:[o??a??"-",null!==o&&null!==a?(0,t.jsxs)(A,{children:[a," 결제까지 들어와 있어요"]}):null]})]}),(0,t.jsxs)(E,{children:[(0,t.jsxs)(S,{children:[(0,t.jsx)(n.default,{sx:{fontSize:16}}),(0,t.jsx)(k,{children:"전자바우처에서 엑셀 파일 내려받는 과정"})]}),(0,t.jsx)(D,{children:"⑴ 부정결제 찾기 > ⑵ 전자바우처 내역 검색 > ⑶ 매출 및 정산 > ⑷ 바우처 이용내역 조회(신규) > ⑸ 엑셀 다운로드"})]})]})}),T=a.default.div.withConfig({componentId:"zh__sc-f8534ef-0"})`
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
`;e.s(["default",0,z],70552)},57738,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(20276),l=e.i(8179),a=e.i(38803),d=e.i(9454),o=e.i(43174);let r=(0,n.observer)(function(){let{items:e,remove:n}=o.default.ui.layout.toast,a=new Map;e.forEach(e=>{let t=a.get(e.container)??[];t.push(e),a.set(e.container,t)});let d=Array.from(a.entries()).map(([e,t])=>({container:e,items:t}));return(0,t.jsx)(t.Fragment,{children:d.map(({container:e,items:a})=>{let d=(0,t.jsx)(c,{$isFixed:null===e,children:a.map(e=>(0,t.jsxs)(f,{$type:e.type,role:"status","aria-live":"polite",children:[(0,t.jsx)(h,{children:e.message}),(0,t.jsx)(p,{type:"button",onClick:()=>n(e.id),"aria-label":"토스트 닫기",children:(0,t.jsx)(l.X,{size:14})})]},e.id))});return null===e?(0,t.jsx)(s,{children:d},"fallback-container"):(0,i.createPortal)(d,e,`toast-container-${a[0]?.id??"default"}`)})})}),s=a.default.div.withConfig({componentId:"zh__sc-7dcaecab-0"})`
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
`,p=a.default.button.withConfig({componentId:"zh__sc-7dcaecab-4"})`
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