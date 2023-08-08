import{u as F,d as y,q as z,v as d,b as p,F as f,a as _,z as v,B as x,Y as g,m as C,N as D,e as q,f as A}from"./framework.b8b3e2fc.js";import{h,T as N}from"./stao-ui-utils.61a49b22.js";const S=n=>(q("data-v-0ee75c9c"),n=n(),A(),n),O=["webkitdirectory","multiple","accept"],j=S(()=>f("div",{class:"default_btn"},"选择文件",-1)),G=["onDrop"],H=S(()=>f("div",{class:"default_btn"},"选择文件",-1)),J=F({__name:"FileSelector",props:{webkitdirectory:{type:Boolean,default:!1},accept:{default:""},limit:{default:1},drag:{type:Boolean,default:!1},excessReplace:{type:Boolean,default:!1},size:{},disabled:{type:Boolean,default:!1}},emits:["changeFile","overSize"],setup(n,{expose:u,emit:s}){const t=n,c=(e,l,o)=>!(l&&e.size>l||o&&e.type!==o),i=y(t.disabled);z(()=>t.disabled,e=>{i.value=e});const r=y(null),m=()=>{r.value&&(i.value||r.value.click())},a=y([]),w=e=>{if(!e.length)return;if(t.size&&t.size>0){const o=e.filter(b=>!c(b,t.size));if(o.length){s("overSize",o);return}}const l={singleFile:()=>{t.excessReplace||(i.value=!0),a.value=e,s("changeFile",a.value)},multipleFile:()=>{if(t.limit===1/0){a.value.push(...e),s("changeFile",a.value);return}a.value.length+e.length>=t.limit&&!t.excessReplace&&(i.value=!0);const o=[...a.value,...e];if(t.excessReplace){const b=o.length;o.splice(0,b-t.limit)}else o.splice(t.limit);a.value=o,s("changeFile",a.value)},folder:()=>{i.value=!0,a.value=e,s("changeFile",a.value)}};if(t.webkitdirectory){l.folder();return}if(!t.limit||t.limit===1){l.singleFile();return}l.multipleFile()},T=e=>{!Number.isInteger(e)||e>=a.value.length||(a.value.splice(e,1),i.value&&(i.value=!1),a.value.length||(r.value.value=""))},$=()=>{i.value=!1,a.value=[],r.value.value=""},E=e=>{const l=e.target.files;l&&w(Array.from(l))},I=e=>{const l=e.dataTransfer.files;w(Array.from(l))};return u({onSelectFile:m,deleteFile:T,clearFiles:$,verifyFile:c}),(e,l)=>(d(),p(C,null,[f("input",{ref_key:"fileEle",ref:r,type:"file",name:"files",title:"upload",webkitdirectory:e.webkitdirectory,multiple:e.limit!==void 0&&e.limit>1,accept:e.accept,class:"file_input",onChange:E},null,40,O),!e.drag||e.webkitdirectory?(d(),p("div",{key:0,class:_(["file_btn",i.value?"file_btn--stop":""]),onClick:m},[v(e.$slots,"default",{disabled:i.value},()=>[j],!0)],2)):x("",!0),e.drag&&!e.webkitdirectory?(d(),p("div",{key:1,class:_(["file_btn",i.value?"file_btn--stop":""]),onClick:m,onDragenter:l[0]||(l[0]=g(()=>{},["prevent"])),onDragover:l[1]||(l[1]=g(()=>{},["prevent"])),onDrop:g(I,["prevent"])},[v(e.$slots,"default",{disabled:i.value},()=>[H],!0)],42,G)):x("",!0)],64))}}),k=(n,u)=>{const s=n.__vccOpts||n;for(const[t,c]of u)s[t]=c;return s},B=k(J,[["__scopeId","data-v-0ee75c9c"]]);B.name="STaoFileSelector";const W=h(B),K=F({__name:"SButton",props:{type:{},disabled:{type:Boolean}},setup(n){return(u,s)=>(d(),p("button",{name:"button",type:"button",autocomplete:"off",class:_(["s-button",{"s-button-line":u.type==="line","s-button--disabled":u.disabled}])},[v(u.$slots,"default",{},void 0,!0)],2))}}),R=k(K,[["__scopeId","data-v-08a1ebff"]]);R.name="STaoButton";const X=h(R),L=F({name:"TextEllipsis",__name:"index",emits:["changeStatus"],setup(n,{emit:u}){const{isOverflow:s,textEllipsisRef:t}=N();return z(s,c=>{u("changeStatus",c)},{immediate:!0}),(c,i)=>(d(),p("div",{ref_key:"textEllipsisRef",ref:t,class:"ellipsis"},[f("span",null,[v(c.$slots,"default",{isOverflow:D(s)},void 0,!0)])],512))}}),M=k(L,[["__scopeId","data-v-c1e4fdcc"]]),Y=h(M);export{W as U,X as W,Y as X};
