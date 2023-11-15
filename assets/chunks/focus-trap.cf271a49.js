import{Y as ae,Z as $,$ as ce,H as A,a0 as ie,a as ue,_ as fe}from"./index.9a9bd10a.js";import{A as V,a8 as M,d as x,u as de,U as le,q as W,N as I,G as j,a5 as pe,z as ve}from"./framework.091e2e10.js";var me=/\s/;function Ee(e){for(var t=e.length;t--&&me.test(e.charAt(t)););return t}var Te=/^\s+/;function he(e){return e&&e.slice(0,Ee(e)+1).replace(Te,"")}var Y=0/0,be=/^[-+]0x[0-9a-f]+$/i,ye=/^0b[01]+$/i,ge=/^0o[0-7]+$/i,Fe=parseInt;function G(e){if(typeof e=="number")return e;if(ae(e))return Y;if($(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=$(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=he(e);var n=ye.test(e);return n||ge.test(e)?Fe(e.slice(2),n?2:8):be.test(e)?Y:+e}var we=function(){return ce.Date.now()};const H=we;var Se="Expected a function",_e=Math.max,Pe=Math.min;function Ve(e,t,n){var o,r,i,f,u,m,E=0,P=!1,h=!1,g=!0;if(typeof e!="function")throw new TypeError(Se);t=G(t)||0,$(n)&&(P=!!n.leading,h="maxWait"in n,i=h?_e(G(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g);function F(c){var v=o,T=r;return o=r=void 0,E=c,f=e.apply(T,v),f}function s(c){return E=c,u=setTimeout(d,t),P?F(c):f}function a(c){var v=c-m,T=c-E,S=t-v;return h?Pe(S,i-T):S}function l(c){var v=c-m,T=c-E;return m===void 0||v>=t||v<0||h&&T>=i}function d(){var c=H();if(l(c))return p(c);u=setTimeout(d,a(c))}function p(c){return u=void 0,g&&o?F(c):(o=r=void 0,f)}function C(){u!==void 0&&clearTimeout(u),E=0,o=m=r=u=void 0}function L(){return u===void 0?f:p(H())}function w(){var c=H(),v=l(c);if(o=arguments,r=this,m=c,v){if(u===void 0)return s(m);if(h)return clearTimeout(u),u=setTimeout(d,t),F(m)}return u===void 0&&(u=setTimeout(d,t)),f}return w.cancel=C,w.flush=L,w}let O;const Me=e=>{var t;if(!A)return 0;if(O!==void 0)return O;const n=document.createElement("div");n.className=`${e}-scrollbar__wrap`,n.style.visibility="hidden",n.style.width="100px",n.style.position="absolute",n.style.top="-9999px",document.body.appendChild(n);const o=n.offsetWidth;n.style.overflow="scroll";const r=document.createElement("div");r.style.width="100%",n.appendChild(r);const i=r.offsetWidth;return(t=n.parentNode)==null||t.removeChild(n),O=o-i,O};function qe(e,t){if(!A)return;if(!t){e.scrollTop=0;return}const n=[];let o=t.offsetParent;for(;o!==null&&e!==o&&e.contains(o);)n.push(o),o=o.offsetParent;const r=t.offsetTop+n.reduce((m,E)=>m+E.offsetTop,0),i=r+t.offsetHeight,f=e.scrollTop,u=f+e.clientHeight;r<f?e.scrollTop=r:i>u&&(e.scrollTop=i-e.clientHeight)}const oe={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},ze=e=>["",...ie].includes(e);let _=[];const J=e=>{const t=e;t.key===oe.esc&&_.forEach(n=>n(t))},Ce=e=>{V(()=>{_.length===0&&document.addEventListener("keydown",J),A&&_.push(e)}),M(()=>{_=_.filter(t=>t!==e),_.length===0&&A&&document.removeEventListener("keydown",J)})},K="focus-trap.focus-after-trapped",B="focus-trap.focus-after-released",Le="focus-trap.focusout-prevented",X={cancelable:!0,bubbles:!1},Ie={cancelable:!0,bubbles:!1},Z="focusAfterTrapped",Q="focusAfterReleased",Oe=Symbol("elFocusTrap"),q=x(),U=x(0),z=x(0);let N=0;const re=e=>{const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0||o===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t},ee=(e,t)=>{for(const n of e)if(!Ne(n,t))return n},Ne=(e,t)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},Re=e=>{const t=re(e),n=ee(t,e),o=ee(t.reverse(),e);return[n,o]},ke=e=>e instanceof HTMLInputElement&&"select"in e,y=(e,t)=>{if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),z.value=window.performance.now(),e!==n&&ke(e)&&t&&e.select()}};function te(e,t){const n=[...e],o=e.indexOf(t);return o!==-1&&n.splice(o,1),n}const Ae=()=>{let e=[];return{push:o=>{const r=e[0];r&&o!==r&&r.pause(),e=te(e,o),e.unshift(o)},remove:o=>{var r,i;e=te(e,o),(i=(r=e[0])==null?void 0:r.resume)==null||i.call(r)}}},xe=(e,t=!1)=>{const n=document.activeElement;for(const o of e)if(y(o,t),document.activeElement!==n)return},ne=Ae(),Ue=()=>U.value>z.value,R=()=>{q.value="pointer",U.value=window.performance.now()},se=()=>{q.value="keyboard",U.value=window.performance.now()},De=()=>(V(()=>{N===0&&(document.addEventListener("mousedown",R),document.addEventListener("touchstart",R),document.addEventListener("keydown",se)),N++}),M(()=>{N--,N<=0&&(document.removeEventListener("mousedown",R),document.removeEventListener("touchstart",R),document.removeEventListener("keydown",se))}),{focusReason:q,lastUserFocusTimestamp:U,lastAutomatedFocusTimestamp:z}),k=e=>new CustomEvent(Le,{...Ie,detail:e}),We=de({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[Z,Q,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:t}){const n=x();let o,r;const{focusReason:i}=De();Ce(s=>{e.trapped&&!f.paused&&t("release-requested",s)});const f={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},u=s=>{if(!e.loop&&!e.trapped||f.paused)return;const{key:a,altKey:l,ctrlKey:d,metaKey:p,currentTarget:C,shiftKey:L}=s,{loop:w}=e,c=a===oe.tab&&!l&&!d&&!p,v=document.activeElement;if(c&&v){const T=C,[S,D]=Re(T);if(S&&D){if(!L&&v===D){const b=k({focusReason:i.value});t("focusout-prevented",b),b.defaultPrevented||(s.preventDefault(),w&&y(S,!0))}else if(L&&[S,T].includes(v)){const b=k({focusReason:i.value});t("focusout-prevented",b),b.defaultPrevented||(s.preventDefault(),w&&y(D,!0))}}else if(v===T){const b=k({focusReason:i.value});t("focusout-prevented",b),b.defaultPrevented||s.preventDefault()}}};le(Oe,{focusTrapRef:n,onKeydown:u}),W(()=>e.focusTrapEl,s=>{s&&(n.value=s)},{immediate:!0}),W([n],([s],[a])=>{s&&(s.addEventListener("keydown",u),s.addEventListener("focusin",P),s.addEventListener("focusout",h)),a&&(a.removeEventListener("keydown",u),a.removeEventListener("focusin",P),a.removeEventListener("focusout",h))});const m=s=>{t(Z,s)},E=s=>t(Q,s),P=s=>{const a=I(n);if(!a)return;const l=s.target,d=s.relatedTarget,p=l&&a.contains(l);e.trapped||d&&a.contains(d)||(o=d),p&&t("focusin",s),!f.paused&&e.trapped&&(p?r=l:y(r,!0))},h=s=>{const a=I(n);if(!(f.paused||!a))if(e.trapped){const l=s.relatedTarget;!ue(l)&&!a.contains(l)&&setTimeout(()=>{if(!f.paused&&e.trapped){const d=k({focusReason:i.value});t("focusout-prevented",d),d.defaultPrevented||y(r,!0)}},0)}else{const l=s.target;l&&a.contains(l)||t("focusout",s)}};async function g(){await j();const s=I(n);if(s){ne.push(f);const a=s.contains(document.activeElement)?o:document.activeElement;if(o=a,!s.contains(a)){const d=new Event(K,X);s.addEventListener(K,m),s.dispatchEvent(d),d.defaultPrevented||j(()=>{let p=e.focusStartEl;pe(p)||(y(p),document.activeElement!==p&&(p="first")),p==="first"&&xe(re(s),!0),(document.activeElement===a||p==="container")&&y(s)})}}}function F(){const s=I(n);if(s){s.removeEventListener(K,m);const a=new CustomEvent(B,{...X,detail:{focusReason:i.value}});s.addEventListener(B,E),s.dispatchEvent(a),!a.defaultPrevented&&(i.value=="keyboard"||!Ue()||s.contains(document.activeElement))&&y(o??document.body),s.removeEventListener(B,E),ne.remove(f)}}return V(()=>{e.trapped&&g(),W(()=>e.trapped,s=>{s?g():F()})}),M(()=>{e.trapped&&F()}),{onKeydown:u}}});function He(e,t,n,o,r,i){return ve(e.$slots,"default",{handleKeydown:e.onKeydown})}var je=fe(We,[["render",He],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);export{oe as E,je as a,Ve as d,Me as g,ze as i,qe as s};