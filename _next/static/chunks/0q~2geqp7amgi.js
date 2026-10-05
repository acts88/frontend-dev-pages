(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,67096,33832,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let n=(0,t.default)((0,i.jsx)("path",{d:"m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7z"}),"North");e.s(["default",0,n],67096);let l=(0,t.default)((0,i.jsx)("path",{d:"m19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7z"}),"South");e.s(["default",0,l],33832)},33592,e=>{"use strict";var t=e.i(7744),i=e.i(4153);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var l=(0,t.forwardRef)(function(e,i){var l=e.color,r=e.size,a=void 0===r?24:r,o=function(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}(e,["color","size"]);return t.default.createElement("svg",n({ref:i,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===l?"currentColor":l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),t.default.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),t.default.createElement("polyline",{points:"14 2 14 8 20 8"}),t.default.createElement("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),t.default.createElement("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),t.default.createElement("polyline",{points:"10 9 9 9 8 9"}))});l.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},l.displayName="FileText",e.s(["FileText",0,l],33592)},82325,e=>{"use strict";var t=e.i(9735),i=e.i(38803);e.i(3159);var n=e.i(46907),l=e.i(43174),r=e.i(67096),a=e.i(33832),o=e.i(7744),d=e.i(64954),s=e.i(27997),c=e.i(49024),f=e.i(12945),h=e.i(97861),p=e.i(86400),u=e.i(44968),x=e.i(61143),g=e.i(37163),m=e.i(91916);function b({label:e,width:i,sortValue:n,currentSortKey:l,currentSortOrder:o,onSort:d}){let s=l===n,c=s?o:({id:"desc",name:"asc"})[n],f=s?"#131416":"#9ca3af";return(0,t.jsx)(L,{style:{width:i},children:(0,t.jsx)(O,{type:"button",onClick:()=>d(n),children:(0,t.jsxs)(R,{children:[(0,t.jsx)(T,{children:e}),(0,t.jsx)(F,{children:"desc"===c?(0,t.jsx)(r.default,{sx:{fontSize:14,color:f}}):(0,t.jsx)(a.default,{sx:{fontSize:14,color:f}})})]})})})}let w=e=>null!==e&&p.default.brand.calendarDateString.is(e)?e.replaceAll("-",""):"",y=(0,n.observer)(function(){let{paginatedServiceWorkerList:e,pageStartIndex:i,pageCount:n,visiblePage:r,filteredServiceWorkerList:a,highlightedServiceWorkerId:d,pageSize:s,sortKey:p,sortOrder:y,setPage:j,setHighlightedServiceWorkerId:_,setSort:C,getRegistrationNumber:D}=l.default.serviceWorker.info.byServiceWorker,{show:O}=l.default.modal.serviceWorkerDetail,T=(0,o.useRef)(null);(0,o.useEffect)(()=>{if(null===d)return;let e=a.findIndex(e=>e.id===d);-1!==e&&j(Math.floor(e/s)+1)},[a,d,s,j]),(0,o.useEffect)(()=>{if(null===d)return;let e=window.requestAnimationFrame(()=>{let e=T.current?.querySelector(`tr[data-service-worker-id="${d}"]`);e?.scrollIntoView({block:"nearest",behavior:"auto"})});return()=>{window.cancelAnimationFrame(e)}},[e,d]);let R=e=>{C(e)};return(0,t.jsxs)(k,{children:[(0,t.jsx)(z,{children:(0,t.jsxs)($,{ref:T,children:[(0,t.jsx)(A,{children:(0,t.jsxs)(E,{children:[(0,t.jsx)(L,{style:{width:84},children:"순번"}),(0,t.jsx)(b,{label:"관리번호",width:84,sortValue:"id",currentSortKey:p,currentSortOrder:y,onSort:R}),(0,t.jsx)(b,{label:"성명",width:150,sortValue:"name",currentSortKey:p,currentSortOrder:y,onSort:R}),(0,t.jsx)(L,{style:{width:92},children:"생년월일"}),(0,t.jsxs)(L,{style:{width:86},children:["연령",(0,t.jsx)("br",{}),"(만 나이)"]}),(0,t.jsx)(L,{style:{width:55},children:"성별"}),(0,t.jsx)(L,{style:{width:187},children:"휴대폰"}),(0,t.jsx)(L,{style:{width:351},children:"주소"}),(0,t.jsx)(L,{style:{width:78},children:"상태"}),(0,t.jsx)(L,{style:{width:92},children:"접수일"}),(0,t.jsx)(L,{style:{width:252},children:"입사일 - 퇴사일 (근속기간)"}),(0,t.jsx)(L,{style:{width:130},children:"관리"})]})}),(0,t.jsx)(W,{children:e.map((e,n)=>{let{id:l,name:r,gender:a,phoneNumber:o,address:s,addressDetail:p,employmentContracts:b}=e,y=(0,x.getServiceWorkerBirthInfo)(e),j=y?.birthDate??"-",C=y?.age??"-",k=null===a?"-":f.default[a].label.at(0),z=[s,p].filter(e=>"string"==typeof e&&""!==e.trim()).join(" "),{hiredOn:S,resignedOn:I}=function(e){if(0===e.length)return{hiredOn:null,resignedOn:null};let t=[...e].sort((e,t)=>e.contractStartDate.localeCompare(t.contractStartDate)),i=e.some(e=>e.status===g.default.ACTIVE),n=t.at(-1);return{hiredOn:t[0]?.contractStartDate??null,resignedOn:i||void 0===n?null:(0,u.getEmploymentContractEndDate)(n)}}(b),$=w(e.firstRegisteredDate)||"-",A=null===S?"-":`${w(S)} - ${null===I?"재직 중":w(I)} (${(0,u.getEmploymentContractTenureLabel)(b)})`,W=(0,u.getRepresentativeContractExpirationReminder)(b.map(e=>({contractId:e.id,contractStatus:e.status,contractStartDate:e.contractStartDate,contractEndDate:e.contractEndDate})));return(0,t.jsxs)(E,{"data-service-worker-id":l,$status:l===d?"highlighted":void 0,onClick:()=>{_(null),O(l)},children:[(0,t.jsx)(N,{style:{width:84},children:i+n+1}),(0,t.jsx)(N,{style:{width:84},children:D(e)??"-"}),(0,t.jsx)(N,{style:{width:150},children:r}),(0,t.jsx)(N,{style:{width:92},children:j}),(0,t.jsx)(N,{style:{width:86},children:C}),(0,t.jsx)(N,{style:{width:55},children:k}),(0,t.jsx)(N,{style:{width:187},children:(0,t.jsx)(v,{serviceWorkerId:l,serviceWorkerCreatedAt:e.createdAt,field:"phoneNumber",value:o??e.contact})}),(0,t.jsx)(N,{style:{width:351},children:(0,t.jsx)(v,{serviceWorkerId:l,serviceWorkerCreatedAt:e.createdAt,field:"address",value:z})}),(0,t.jsx)(N,{style:{width:78},title:"ON_LEAVE"===(0,m.getServiceWorkerUiStatus)(e)&&"string"==typeof e.matchingWaitSince?`${(0,c.formatConnectionDate)(e.matchingWaitSince)}부터${"string"==typeof e.matchingWaitReasonLabel?` \xb7 ${e.matchingWaitReasonLabel}`:""}`:void 0,children:h.default[(0,m.getServiceWorkerUiStatus)(e)].label}),(0,t.jsx)(N,{style:{width:92},children:$}),(0,t.jsx)(N,{style:{width:252,justifyContent:null===S?"center":"flex-start"},children:(0,t.jsxs)(P,{children:[(0,t.jsx)("span",{children:A}),null!==W?(0,t.jsx)(V,{$color:W.color,children:(0,u.formatContractExpirationLabel)(W.remainingDays)}):null]})}),(0,t.jsx)(N,{style:{width:130},children:(0,t.jsx)(U,{onClick:e=>{e.stopPropagation(),_(null),O(l)},children:"상세보기"})})]},l)})})]})}),(0,t.jsxs)(S,{children:[(0,t.jsx)(I,{type:"button",disabled:1===r,onClick:()=>j(r-1),children:"‹ 이전"}),Array.from({length:n},(e,t)=>t+1).map(e=>(0,t.jsx)(I,{type:"button",$active:e===r,onClick:()=>j(e),children:e},e)),(0,t.jsx)(I,{type:"button",disabled:r===n,onClick:()=>j(r+1),children:"다음 ›"})]})]})});function v({serviceWorkerId:e,serviceWorkerCreatedAt:i,field:n,value:l}){let[r,a]=(0,o.useState)([]),[s,c]=(0,o.useState)(!1),f=null==l||""===l.trim()?"-":l.trim(),h=[...r,{value:f,description:C(i)}].map((e,t)=>({...e,selectValue:`${t}:${e.value}`})),p=h.find(e=>e.value===f),u=async()=>{if(s)return;c(!0);let t="address"===n?await _(e):await j(e,n,i);null!==t&&a(t.sort((e,t)=>new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()))};return(0,t.jsx)(D,{onPointerDown:e=>{e.stopPropagation(),u()},onClickCapture:e=>e.stopPropagation(),children:(0,t.jsx)(d.default.Input.Select,{style:{width:"100%",height:32,padding:"4px 8px",fontSize:14,color:"#464c53"},value:p?.selectValue??"",onChange:()=>void 0,children:h.map(e=>(0,t.jsx)("option",{value:e.selectValue,"data-description":e.description||void 0,children:e.value},e.selectValue))})})}async function j(e,t,i){let[n,r]=await l.default.serviceWorker.info.byServiceWorker.getServiceWorkerChangeHistory(e,t);return null!==n||null===r?null:r.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).flatMap(({oldValue:e,newValue:t,createdAt:n},l)=>{let r=[];return 0===l&&null!==e&&""!==e.trim()&&r.push({createdAt:i,value:e.trim(),description:C(i)}),null!==t&&""!==t.trim()&&r.push({value:t.trim(),createdAt:n,description:C(n)}),r})}async function _(e){let[t,i]=await Promise.all([l.default.serviceWorker.info.byServiceWorker.getServiceWorkerChangeHistory(e,"address"),l.default.serviceWorker.info.byServiceWorker.getServiceWorkerChangeHistory(e,"addressDetail")]);if(null!==t[0]||null!==i[0]||null===t[1]||null===i[1])return null;let n=new Map,r=(e,t)=>{e.forEach(({newValue:e,createdAt:i})=>{let l=n.get(i)??{};l[t]=e?.trim()??"",n.set(i,l)})};r(t[1],"address"),r(i[1],"addressDetail");let a="",o="";return Array.from(n.entries()).sort(([e],[t])=>new Date(e).getTime()-new Date(t).getTime()).map(([e,t])=>(a=t.address??a,o=t.addressDetail??o,{createdAt:e,value:[a,o].filter(e=>""!==e).join(" ")||"-",description:C(e)}))}function C(e){let t=new Date(e);return Number.isNaN(t.getTime())?"":`${t.getFullYear()}.${String(t.getMonth()+1).padStart(2,"0")}.${String(t.getDate()).padStart(2,"0")} 추가됨`}let k=i.default.section.withConfig({componentId:"zh__sc-2f4a79ac-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  min-height: 0;
`,z=i.default.section.withConfig({componentId:"zh__sc-2f4a79ac-1"})`
  overflow: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  min-height: 0;
`,S=i.default.div.withConfig({componentId:"zh__sc-2f4a79ac-2"})`
  display: flex;
  gap: 6px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,I=i.default.button.withConfig({componentId:"zh__sc-2f4a79ac-3"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 32px;
  min-height: 36px;
  padding: 8px 11px;
  border: 1px solid ${({$active:e})=>!0===e?"#4a36ff":"transparent"};
  border-radius: 6px;

  font-size: 14px;
  font-weight: ${({$active:e})=>!0===e?700:500};
  line-height: normal;
  color: ${({$active:e})=>!0===e?"#fff":"#404552"};

  background: ${({$active:e})=>!0===e?"#4a36ff":"#fff"};

  &:disabled {
    cursor: default;
    color: #9ca3af;
  }
`,$=i.default.table.withConfig({componentId:"zh__sc-2f4a79ac-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: max-content;
  min-width: 100%;
  min-height: 0;
`,E=i.default.tr.withConfig({componentId:"zh__sc-2f4a79ac-5"})`
  cursor: pointer;

  display: flex;
  flex-shrink: 0;
  align-items: flex-start;
  align-self: stretch;
  justify-content: flex-start;

  width: max-content;
  min-height: 52px;
  border-bottom: 1px solid #e5e7eb;

  background: ${({$status:e})=>"highlighted"===e?"#EEF2FF":"transparent"};

  &:hover {
    background: #f9fafb;
  }

  &:active {
    background: #f2f4f7;
  }
`,A=i.default.thead.withConfig({componentId:"zh__sc-2f4a79ac-6"})`
  position: sticky;
  z-index: 1;
  top: 0;
  width: max-content;

  ${E} {
    cursor: default;

    align-items: center;

    height: 52px;
    border-top: 1px solid #e5e7eb;

    background: #f9fafb;
  }
`,W=i.default.tbody.withConfig({componentId:"zh__sc-2f4a79ac-7"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: max-content;
  min-height: 0;
`,D=i.default.div.withConfig({componentId:"zh__sc-2f4a79ac-8"})`
  width: 100%;
`,L=i.default.th.withConfig({componentId:"zh__sc-2f4a79ac-9"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px;
  color: #131416;
`,O=i.default.button.withConfig({componentId:"zh__sc-2f4a79ac-10"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 0;
  border: none;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px;
  color: #131416;

  background: transparent;
`,T=i.default.span.withConfig({componentId:"zh__sc-2f4a79ac-11"})`
  display: inline-flex;
  align-items: center;
`,R=i.default.span.withConfig({componentId:"zh__sc-2f4a79ac-12"})`
  position: relative;
  display: inline-flex;
  align-items: center;
`,F=i.default.span.withConfig({componentId:"zh__sc-2f4a79ac-13"})`
  position: absolute;
  top: 50%;
  left: calc(100% + 2px);
  transform: translateY(-50%);

  display: inline-flex;
  align-items: center;
`,N=i.default.td.withConfig({componentId:"zh__sc-2f4a79ac-14"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px;
  color: #464c53;
  text-align: center;
  overflow-wrap: anywhere;
  white-space: normal;
`,P=i.default.div.withConfig({componentId:"zh__sc-2f4a79ac-15"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  min-width: 0;

  text-align: left;
  overflow-wrap: anywhere;
  white-space: normal;

  & > span {
    min-width: 0;
  }
`,V=(0,i.default)(s.default).withConfig({componentId:"zh__sc-2f4a79ac-16"})`
  height: auto;
  padding: 8px;
`,U=(0,i.default)(d.default.Button.Outlined).withConfig({componentId:"zh__sc-2f4a79ac-17"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;var B=e.i(47088),M=e.i(553),K=e.i(10957),q=e.i(7242);let H=e=>e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;"),G=(0,n.observer)(function({onClose:e}){let i=l.default.serviceWorker.info.byServiceWorker,n=i.currentServiceType,r=i.statusFilter===K.FILTER_ALL_VALUE?"전체":h.default[i.statusFilter].label,[a,s]=(0,o.useState)(`제공인력 명단${null===n?"":` (${q.default[n].label}`}${null===n?"":` \xb7 ${r})`}`),[c,p]=(0,o.useState)("선물세트"),[u,x]=(0,o.useState)(!0),g=i.filteredServiceWorkerList.map(e=>({key:e.id,sequence:i.getRegistrationNumber(e),managementNo:String(i.getRegistrationNumber(e)??"-"),name:e.name,birthDate:"string"==typeof e.birthDate?e.birthDate.replaceAll("-","."):(e=>{let t=(e??"").replaceAll(/\D/g,"");if(t.length<7)return"-";let i=t.charAt(6),n=["3","4","7","8"].includes(i)?"20":["9","0"].includes(i)?"18":"19";return`${n}${t.slice(0,2)}.${t.slice(2,4)}.${t.slice(4,6)}`})(e.residentRegistrationNumber),gender:null===e.gender?"-":f.default[e.gender].label,phoneNumber:e.phoneNumber??"-",status:h.default[(0,m.getServiceWorkerUiStatus)(e)].label})).sort((e,t)=>(e.sequence??Number.MAX_SAFE_INTEGER)-(t.sequence??Number.MAX_SAFE_INTEGER)||e.name.localeCompare(t.name,"ko"));return(0,t.jsx)(X,{onClick:e,children:(0,t.jsxs)(Y,{role:"dialog","aria-label":"명단 출력",onClick:e=>e.stopPropagation(),children:[(0,t.jsx)(J,{children:"명단 출력"}),(0,t.jsxs)(Q,{children:["지금 보고 있는 목록(",r,", ",g.length,"명)을 명단 양식으로 출력해요."]}),(0,t.jsxs)(Z,{children:[(0,t.jsx)(ee,{children:"제목"}),(0,t.jsx)(et,{value:a,onChange:e=>s(e.target.value)})]}),(0,t.jsxs)(Z,{children:[(0,t.jsx)(ee,{children:"추가 칸 이름 (비우면 칸 없음)"}),(0,t.jsx)(et,{value:c,placeholder:"예: 선물세트, 명절 선물 수령",onChange:e=>p(e.target.value)})]}),(0,t.jsxs)(ei,{children:[(0,t.jsx)("input",{type:"checkbox",checked:u,onChange:e=>x(e.target.checked)}),"서명 칸 넣기"]}),(0,t.jsxs)(en,{children:[(0,t.jsx)(d.default.Button.Outlined,{type:"button",onClick:e,children:"취소"}),(0,t.jsx)(d.default.Button.Filled.Primary,{type:"button",disabled:0===g.length,onClick:()=>{var t;let i,n,l,r,o;n=(i=["순번","관리번호","성명","생년월일","성별","연락처","상태",...""===(t={title:a,extraColumn:c,withSignature:u,rows:g}).extraColumn.trim()?[]:[t.extraColumn.trim()],...t.withSignature?["서명"]:[]]).length-7,l=t.rows.map((e,t)=>`<tr><td>${t+1}</td><td>${H(e.managementNo)}</td><td>${H(e.name)}</td><td>${H(e.birthDate)}</td><td>${H(e.gender)}</td><td>${H(e.phoneNumber)}</td><td>${H(e.status)}</td>${'<td class="blank"></td>'.repeat(n)}</tr>`).join(""),r=`<!doctype html><html lang="ko"><head><meta charset="utf-8"><title>${H(t.title)}</title><style>
    @page { size: A4 portrait; margin: 14mm 10mm; }
    body { margin: 0; font-family: 'Pretendard Variable', Pretendard, -apple-system, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif; color: #111; }
    h1 { margin: 0 0 4mm; font-size: 18pt; text-align: center; }
    .meta { margin: 0 0 4mm; font-size: 9pt; text-align: right; color: #444; }
    table { width: 100%; border-collapse: collapse; font-size: 9.5pt; }
    th, td { border: 1px solid #333; padding: 2.2mm 1.5mm; text-align: center; }
    th { background: #f2f2f2; }
    td.blank { min-width: 22mm; }
    tr { page-break-inside: avoid; }
    thead { display: table-header-group; }
  </style></head><body><h1>${H(t.title)}</h1><p class="meta">출력일 ${new Date().toLocaleDateString("ko-KR")} \xb7 ${t.rows.length}명</p><table><thead><tr>${i.map(e=>`<th>${H(e)}</th>`).join("")}</tr></thead><tbody>${l}</tbody></table></body></html>`,(o=document.createElement("iframe")).setAttribute("aria-hidden","true"),o.style.position="fixed",o.style.left="-99999px",o.style.width="210mm",o.style.height="297mm",o.style.border="0",o.addEventListener("load",()=>{let e=o.contentWindow;null===e?o.remove():(e.addEventListener("afterprint",()=>o.remove(),{once:!0}),e.focus(),e.print())},{once:!0}),o.srcdoc=r,document.body.appendChild(o),e()},children:"출력하기"})]})]})})}),X=i.default.div.withConfig({componentId:"zh__sc-dd63d0c2-0"})`
  position: fixed;
  z-index: 1000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(0 0 0 / 35%);
`,Y=i.default.div.withConfig({componentId:"zh__sc-dd63d0c2-1"})`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 420px;
  padding: 24px;
  border-radius: 12px;

  background: #fff;
`,J=i.default.h2.withConfig({componentId:"zh__sc-dd63d0c2-2"})`
  font-size: 18px;
  font-weight: 700;
  color: #0a0a0a;
`,Q=i.default.p.withConfig({componentId:"zh__sc-dd63d0c2-3"})`
  font-size: 14px;
  color: #636978;
`,Z=i.default.label.withConfig({componentId:"zh__sc-dd63d0c2-4"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ee=i.default.span.withConfig({componentId:"zh__sc-dd63d0c2-5"})`
  font-size: 13px;
  color: #464c53;
`,et=i.default.input.withConfig({componentId:"zh__sc-dd63d0c2-6"})`
  height: 36px;
  padding: 0 10px;
  border: 1px solid #b1b8be;
  border-radius: 8px;

  font-size: 14px;
`,ei=i.default.label.withConfig({componentId:"zh__sc-dd63d0c2-7"})`
  display: flex;
  gap: 6px;
  align-items: center;

  font-size: 14px;
  color: #292b36;
`,en=i.default.div.withConfig({componentId:"zh__sc-dd63d0c2-8"})`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;function el(e){return Object.prototype.hasOwnProperty.call(h.default,e)}let er=[{key:K.FILTER_ALL_VALUE,label:"전체"},...Object.keys(h.default).filter(el).map(e=>({key:e,label:h.default[e].label}))],ea=(0,n.observer)(function(){let e=l.default.serviceWorker.info.byServiceWorker,{filteredServiceWorkerList:i,totalCount:n,statusFilter:r,setStatusFilter:a,searchText:s,setSearchText:c}=e,[f,p]=(0,o.useState)(!1),u=l.default.data.serviceWorker.list,x=null===u.data&&"error"===u.status?"(목록을 불러오지 못했어요)":null===u.data&&"loading"===u.status?"(불러오는 중…)":r===K.FILTER_ALL_VALUE?`(전체 ${n}명)`:`(${h.default[r].label} ${i.length}명 / 전체 ${n}명)`;return(0,t.jsxs)(eo,{children:[(0,t.jsxs)(ed,{children:[(0,t.jsxs)(es,{children:[(0,t.jsx)(ec,{children:"제공인력 목록"}),(0,t.jsx)(ef,{children:x})]}),(0,t.jsx)(eh,{role:"tablist","aria-label":"제공인력 상태 필터",children:er.map(e=>{let i=r===e.key;return(0,t.jsx)(ep,{type:"button",role:"tab","aria-selected":i,$active:i,onClick:()=>{var t;(t=e.key)===K.FILTER_ALL_VALUE?a(t):el(t)&&a(t)},children:e.label},e.key)})})]}),(0,t.jsxs)(eg,{children:[(0,t.jsxs)(ex,{children:[(0,t.jsx)(em,{value:s,onChange:e=>c(e.target.value),placeholder:"제공인력명 검색","aria-label":"제공인력명 검색"}),(0,t.jsx)(M.Search,{size:16,color:"#0a0a0a"})]}),(0,t.jsxs)(eu,{type:"button",onClick:()=>p(!0),children:[(0,t.jsx)(B.Printer,{size:16}),"명단 출력"]}),(0,t.jsxs)(d.default.Input.Select,{value:String(e.pageSize),style:{width:143},onChange:t=>e.setPageSize(Number(t.currentTarget.value)),children:[(0,t.jsx)("option",{value:"15",children:"15명씩 보기"}),(0,t.jsx)("option",{value:"30",children:"30명씩 보기"}),(0,t.jsx)("option",{value:"50",children:"50명씩 보기"}),(0,t.jsx)("option",{value:"100",children:"100명씩 보기"})]})]}),f?(0,t.jsx)(G,{onClose:()=>p(!1)}):null]})}),eo=i.default.div.withConfig({componentId:"zh__sc-d1f896b8-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  padding: 24px 16px;
`,ed=i.default.div.withConfig({componentId:"zh__sc-d1f896b8-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
  min-width: 0;
`,es=i.default.div.withConfig({componentId:"zh__sc-d1f896b8-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,ec=i.default.div.withConfig({componentId:"zh__sc-d1f896b8-3"})`
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,ef=i.default.div.withConfig({componentId:"zh__sc-d1f896b8-4"})`
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #464c53;
  letter-spacing: -0.5px;
`,eh=i.default.div.withConfig({componentId:"zh__sc-d1f896b8-5"})`
  overflow: hidden;
  display: flex;
  align-items: center;

  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,ep=i.default.button.withConfig({componentId:"zh__sc-d1f896b8-6"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  min-width: 80px;
  height: 40px;
  padding: 0 16px;

  font-size: 16px;
  font-weight: 700;
  color: ${({$active:e})=>e?"#fff":"#464C53"};
  text-align: center;

  background: ${({$active:e})=>e?"#4F39F6":"#fff"};

  &:not(:last-child) {
    border-right: 1px solid #d0d4dc;
  }
`,eu=(0,i.default)(d.default.Button.Outlined).withConfig({componentId:"zh__sc-d1f896b8-7"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 0 14px;

  font-size: 14px;
`,ex=i.default.label.withConfig({componentId:"zh__sc-d1f896b8-8"})`
  cursor: text;

  display: flex;
  gap: 8px;
  align-items: center;

  width: 180px;
  height: 36px;
  padding: 8px 16px;
  border: 0.75px solid #e5e7eb;
  border-radius: 6px;

  background: #fff;

  &:hover {
    border-color: #b8c0d0;
    background: #fbfcff;
  }

  &:focus-within {
    border-color: #5635ff;
    background: #fbfcff;
  }
`,eg=i.default.div.withConfig({componentId:"zh__sc-d1f896b8-9"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,em=i.default.input.withConfig({componentId:"zh__sc-d1f896b8-10"})`
  width: 100%;
  min-width: 0;
  border: none;

  font-size: 18px;
  color: #0a0a0a;

  background: transparent;

  &::placeholder {
    color: rgb(10 10 10 / 50%);
  }

  &:focus {
    outline: none;
  }
`,eb=(0,n.observer)(function(){let{listStatus:e}=l.default.serviceWorker.info.byServiceWorker;return(0,t.jsxs)(ew,{children:[(0,t.jsx)(ea,{}),(0,t.jsx)(ey,{children:"loading"===e?(0,t.jsx)(ev,{children:"불러오는 중입니다."}):"error"===e?(0,t.jsx)(ev,{children:"목록을 불러오지 못했습니다."}):(0,t.jsx)(y,{})})]})}),ew=i.default.div.withConfig({componentId:"zh__sc-a7645a37-0"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-self: stretch;

  width: 100%;
  min-width: 0;
  min-height: 0;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`,ey=i.default.div.withConfig({componentId:"zh__sc-a7645a37-1"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  align-items: stretch;

  font-size: 14px;
  color: #4b5563;
`,ev=i.default.div.withConfig({componentId:"zh__sc-a7645a37-2"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  color: #6b7280;
`;var ej=e.i(33592),e_=e.i(5543),eC=e.i(24045);let ek=(0,n.observer)(function(){let{activeServiceList:e,currentServiceType:i,setCurrentServiceType:n}=l.default.serviceWorker.info.byServiceWorker,{show:r}=l.default.modal.serviceWorkerCreate;return(0,t.jsxs)(ez,{children:[(0,t.jsxs)(eS,{children:[(0,t.jsx)(e$,{children:"서비스 구분"}),(0,t.jsx)(eE,{children:e.map(e=>(0,t.jsxs)(eA,{type:"button",$active:i===e.type,onClick:()=>n(e.type),children:[q.default[e.type].label," 서비스"]},e.type))})]}),(0,t.jsxs)(eI,{children:[(0,t.jsxs)(eD,{type:"button",onClick:()=>{l.default.modal.excelFileUpload.show("SERVICE_WORKER_EXCEL_IMPORT")},children:[(0,t.jsx)(eC.Upload,{size:16}),"엑셀로 가져오기"]}),(0,t.jsxs)(eD,{type:"button",onClick:()=>{l.default.serviceWorker.info.byServiceWorker.downloadServiceWorkerListExcel()},children:[(0,t.jsx)(ej.FileText,{size:16}),"엑셀로 다운로드 받기"]}),(0,t.jsxs)(eW,{type:"button",onClick:()=>{r("create",i??"MEAL")},children:[(0,t.jsx)(e_.Plus,{size:20}),"신규 제공인력 등록"]})]})]})}),ez=i.default.div.withConfig({componentId:"zh__sc-8db8a75b-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,eS=i.default.div.withConfig({componentId:"zh__sc-8db8a75b-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
`,eI=i.default.div.withConfig({componentId:"zh__sc-8db8a75b-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,e$=i.default.p.withConfig({componentId:"zh__sc-8db8a75b-3"})`
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
  white-space: nowrap;
`,eE=i.default.div.withConfig({componentId:"zh__sc-8db8a75b-4"})`
  overflow: hidden;
  display: flex;

  height: 48px;
  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,eA=i.default.button.withConfig({componentId:"zh__sc-8db8a75b-5"})`
  cursor: pointer;

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
`,eW=(0,i.default)(d.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-8db8a75b-6"})`
  flex-shrink: 0;
  gap: 4px;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,eD=(0,i.default)(d.default.Button.Outlined).withConfig({componentId:"zh__sc-8db8a75b-7"})`
  flex-shrink: 0;
  gap: 4px;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,eL=i.default.div.withConfig({componentId:"zh__sc-2072926e-0"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;
  align-items: stretch;
  align-self: stretch;

  width: 100%;
  min-width: 0;
  min-height: 0;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
`;e.s(["default",0,function(){return(0,t.jsxs)(eL,{children:[(0,t.jsx)(ek,{}),(0,t.jsx)(eb,{})]})}],82325)}]);