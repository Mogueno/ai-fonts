import d,{useEffect as m}from"react";var p=["#FF0000","#FF7F00","#FFFF00","#00FF00","#0000FF","#4B0082","#8B00FF"],u=["#0000FF","#4B0082","#8B00FF","#4B0082","#0000FF","#4B0082","#8B00FF"],f=["#FFFF00","#00FF00","#FFFF00","#00FF00","#FFFF00","#00FF00","#FFFF00"],b=({children:n,animationDuration:s="medium",colors:r="rainbow",textShadow:c="default",fontFamily:l})=>{let t;switch(r){case"blue":t=u;break;case"yellow":t=f;break;case"rainbow":default:t=p}let i=e=>`
    @keyframes rainbowText {
      0% { color: ${e[0]}; }
      14% { color: ${e[1]}; }
      28% { color: ${e[2]}; }
      42% { color: ${e[3]}; }
      57% { color: ${e[4]}; }
      71% { color: ${e[5]}; }
      85% { color: ${e[6]}; }
      100% { color: ${e[0]}; }
    }
  `;m(()=>{let e=i(t),F=document.createElement("style");return F.type="text/css",F.appendChild(document.createTextNode(e)),document.head.appendChild(F),()=>{document.head.removeChild(F)}},[t]);let o;switch(s){case"short":o="10s";break;case"medium":o="20s";break;case"long":o="45s";break;default:o="20s"}let a;switch(c){case"none":a="none";break;case"default":default:a=`
        0 0 30px ${t[0]},
        0 0 40px ${t[0]},
        0 0 50px ${t[0]}
      `}return d.createElement("span",{style:{fontFamily:l||"sans-serif",display:"inline-block",animation:`rainbowText ${o} linear infinite`,textShadow:`
          ${a}`}},n)},w=b;export{w as default};
//# sourceMappingURL=index.js.map