"use strict";var u=Object.create;var l=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var $=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var h=(e,t)=>{for(var o in t)l(e,o,{get:t[o],enumerable:!0})},m=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of b(t))!w.call(e,n)&&n!==o&&l(e,n,{get:()=>t[n],enumerable:!(r=f(t,n))||r.enumerable});return e};var x=(e,t,o)=>(o=e!=null?u($(e)):{},m(t||!e||!e.__esModule?l(o,"default",{value:e,enumerable:!0}):o,e)),y=e=>m(l({},"__esModule",{value:!0}),e);var T={};h(T,{default:()=>A});module.exports=y(T);var i=x(require("react"),1),k=["#FF0000","#FF7F00","#FFFF00","#00FF00","#0000FF","#4B0082","#8B00FF"],B=["#0000FF","#4B0082","#8B00FF","#4B0082","#0000FF","#4B0082","#8B00FF"],C=["#FFFF00","#00FF00","#FFFF00","#00FF00","#FFFF00","#00FF00","#FFFF00"],g=({children:e,animationDuration:t="medium",colors:o="rainbow",textShadow:r="default",fontFamily:n})=>{let a;switch(o){case"blue":a=B;break;case"yellow":a=C;break;case"rainbow":default:a=k}let p=F=>`
    @keyframes rainbowText {
      0% { color: ${F[0]}; }
      14% { color: ${F[1]}; }
      28% { color: ${F[2]}; }
      42% { color: ${F[3]}; }
      57% { color: ${F[4]}; }
      71% { color: ${F[5]}; }
      85% { color: ${F[6]}; }
      100% { color: ${F[0]}; }
    }
  `;(0,i.useEffect)(()=>{let F=p(a),c=document.createElement("style");return c.type="text/css",c.appendChild(document.createTextNode(F)),document.head.appendChild(c),()=>{document.head.removeChild(c)}},[a]);let s;switch(t){case"short":s="10s";break;case"medium":s="20s";break;case"long":s="45s";break;default:s="20s"}let d;switch(r){case"none":d="none";break;case"default":default:d=`
        0 0 30px ${a[0]},
        0 0 40px ${a[0]},
        0 0 50px ${a[0]}
      `}return i.default.createElement("span",{style:{fontFamily:n||"sans-serif",display:"inline-block",animation:`rainbowText ${s} linear infinite`,textShadow:`
          ${d}`}},e)},A=g;
//# sourceMappingURL=index.cjs.map