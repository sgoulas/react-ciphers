(this["webpackJsonpreact-ciphers"]=this["webpackJsonpreact-ciphers"]||[]).push([[0],{59:function(e,t,r){e.exports=r(70)},70:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(6),i=r.n(o),c=r(12),l=r(107),s={height:"80vh"},h=function(e){return a.a.createElement(l.a,{maxWidth:!1,style:s},e.children)},u=r(33),f=r(111),p=r(113),m=r(116),d=r(115),g=r(35),y=r(114),b=r(54),v=r(112),C=r(52),x=r.n(C),E=r(51),w=r.n(E),A=r(119),O=r(49),k=r.n(O),j=r(48),S=r.n(j),L=r(53),z=r.n(L),M=r(34),I=function(e,t,r){var n="",a=Object.prototype.hasOwnProperty.call(r,"cipherShift"),o=Object.prototype.hasOwnProperty.call(r,"key_1"),i=o&&Object.prototype.hasOwnProperty.call(r,"key_2");try{if(a)n=e(t,r.cipherShift);else if(i){n=e(t,r.key_1,r.key_2)}else if(o){n=e(t,r.key_1)}else n=e(t)}catch(c){n=c.message}return n},T=r(27),N=(r(67),r(47)),F=r.n(N),D=function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,l=Object(n.useState)("Encrypted text"),s=Object(c.a)(l,2),h=s[0],u=s[1],f=Object(n.useState)("Encrypted text"),p=Object(c.a)(f,2),m=p[0],d=p[1],g=Object(n.useState)(!1),y=Object(c.a)(g,2),b=y[0],v=y[1],C=Object(n.useState)(!1),x=Object(c.a)(C,2),E=x[0],w=x[1],A=Object(n.useState)(a?Math.floor(26*Math.random()):0),O=Object(c.a)(A,2),k=O[0],j=O[1],S=Object(n.useState)(i>0?o():""),L=Object(c.a)(S,2),z=L[0],N=L[1],D=Object(n.useState)(i>1?o():""),_=Object(c.a)(D,2),K=_[0],B=_[1],W=Object(M.a)(Object(M.a)(Object(M.a)({},a&&{cipherShift:k}),1===i&&{key_1:z}),2===i&&{key_1:z,key_2:K}),q=function(){return N(o())},H=function(){return B(o())},G=function(){return v(!b)},P=function(){return w(!E)},R=function(){F()(h),T.c.info("Copied to clipboard!")},J=function(){var e=Math.floor(26*Math.random());j(e)};return Object(n.useEffect)((function(){var r=e?I(t,e,W):"Encrypted text";u(r)}),[t,e,W]),Object(n.useEffect)((function(){var e="Encrypted text"===h?"Encrypted text":I(r,h,W);d(e)}),[r,h,W]),{encryptedText:h,decryptedText:m,cipherShift:k,showDescription:E,showDecryption:b,key_1:z,key_2:K,rollShift:J,toggleDecryptedText:G,toggleDescription:P,generateFirstKey:q,generateSecondKey:H,copyEncryptedText:R}},_=r(38),K=r.n(_),B=r(50),W=r.n(B),q=Object(b.a)({breakpoints:{values:{xs:0,sm:600,md:960,lg:1280,xl:1920}}}),H=Object(f.a)({root:{width:"auto",minWidth:250,height:270,backgroundColor:"#2A9D8F",color:"#fff"},cardContent:Object(u.a)({},q.breakpoints.up("xl"),{width:700}),title:{fontSize:18,color:"#264653"},description:{fontSize:16,color:"#264653"},encrypted:{minWidth:50,fontSize:28,color:"#E9C46A",textOverflow:"ellipsis",overflowX:"hidden"},shift:{color:"#264653"},key:{color:"#264653"}}),G=function(e){var t=e.name,r=e.description,n=e.text,o=void 0===n?"":n,i=e.encrypt,c=e.decrypt,l=e.shift,s=void 0!==l&&l,h=e.keyGenerator,u=e.numberOfKeys,f=void 0===u?0:u,b=H(),C=D(o,i,c,s,h,f),E=C.encryptedText,O=C.decryptedText,j=C.cipherShift,L=C.showDescription,M=C.showDecryption,I=C.key_1,T=C.key_2,N=C.rollShift,F=C.toggleDecryptedText,_=C.toggleDescription,B=C.generateFirstKey,q=C.generateSecondKey,G=C.copyEncryptedText,P=a.a.createElement(g.a,{className:b.title,color:"textSecondary",gutterBottom:!0},t),R=a.a.createElement(v.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},a.a.createElement(v.a,{item:!0},a.a.createElement(A.a,{onClick:F},L?null:M?a.a.createElement(S.a,null):a.a.createElement(k.a,null))),a.a.createElement(v.a,{itemScope:!0},a.a.createElement(A.a,{onClick:G},L?null:a.a.createElement(W.a,null))),a.a.createElement(v.a,{item:!0},a.a.createElement(A.a,{onClick:_},L?a.a.createElement(w.a,null):a.a.createElement(x.a,null)))),J=s&&a.a.createElement(a.a.Fragment,null,a.a.createElement(A.a,{onClick:N},a.a.createElement(z.a,null)),a.a.createElement(g.a,{variant:"h6",className:b.shift},j)),U=h&&a.a.createElement(v.a,{container:!0,direction:"column",justify:"center",alignItems:"flex-start"},a.a.createElement(v.a,{item:!0,xs:12},a.a.createElement(A.a,{onClick:B},a.a.createElement(K.a,null)),a.a.createElement(g.a,{variant:"inherit",className:b.key},I)),2===f&&a.a.createElement(v.a,{item:!0,xs:12},a.a.createElement(A.a,{onClick:q},a.a.createElement(K.a,null)),a.a.createElement(g.a,{variant:"inherit",className:b.key},T)));return a.a.createElement(p.a,{className:b.root},a.a.createElement(y.a,{action:R,title:P}),a.a.createElement(d.a,{className:b.cardContent},L?a.a.createElement(g.a,{paragraph:!0,className:b.description},r):a.a.createElement(g.a,{variant:"h5",className:b.encrypted},M?O:E)),L?null:a.a.createElement(m.a,null,J,U))},P=function(){return Math.floor(99*Math.random())},R=[{name:"Atbash",description:'A substitution cipher where the letters of the alphabet are reversed based on a predefined key. In this case it is "ZYXWVUTSRQPONMLKJIHGFEDCBA"',encrypt:function(e){return function(e){var t=e.toLowerCase(),r="ZYXWVUTSRQPONMLKJIHGFEDCBA".toLowerCase();if(t.length<1)return"please enter some plaintext";for(var n="",a=/[a-z]/,o=0;o<t.length;o++)a.test(t.charAt(o))?n+=r.charAt(t.charCodeAt(o)-97):n+=t.charAt(o);return n}(e)},decrypt:function(e){return function(e){var t=e.toLowerCase(),r="ZYXWVUTSRQPONMLKJIHGFEDCBA".toLowerCase();if(t.length<1)return"please enter some ciphertext (letters only)";for(var n="",a=/[a-z]/,o=0;o<t.length;o++)a.test(t.charAt(o))?n+=String.fromCharCode(r.indexOf(t.charAt(o))+97):n+=t.charAt(o);return n}(e)}},{name:"Base64",description:'Not technically a cipher but widely used to encode binary information.\n It uses the built in functions "btoa" and "atob" to encrypt / decrypt the input.',encrypt:function(e){return btoa(e)},decrypt:function(e){return atob(e)}},{name:"Caesar",description:"A substitution cipher in which each letter is 'shifted' down the alphabet based on a shift value.",encrypt:function(e,t){return function(e,t){var r=e.toLowerCase();if(r.length<1)return"please enter some plaintext";for(var n="",a=/[a-z]/,o=0;o<r.length;o++)a.test(r.charAt(o))?n+=String.fromCharCode((r.charCodeAt(o)-97+t)%26+97):n+=r.charAt(o);return n}(e,t)},decrypt:function(e,t){return function(e,t){var r=e.toLowerCase();if(r.length<1)return"please enter some ciphertext (letters only)";for(var n="",a=/[a-z]/,o=0;o<r.length;o++)a.test(r.charAt(o))?n+=String.fromCharCode((r.charCodeAt(o)-97+26-t)%26+97):n+=r.charAt(o);return n}(e,t)},shift:!0},{name:"Four square",description:"The four-square cipher uses four 5 by 5 matrices of random letters arranged in a square to encrypt pairs of letters, which makes it significantly stronger than substitution ciphers.",encrypt:function(e,t,r){return function(e,t,r){var n="",a=e.toLowerCase().replace(/[^a-z]/g,"").replace(/[j]/g,"i"),o=t.toLowerCase().replace(/[^a-z]/g,""),i=r.toLowerCase().replace(/[^a-z]/g,"");if(a.length<1)return"please enter some plaintext";if(25!==o.length||25!==i.length)return"keysquare must be 25 characters in length";a.length%2===1&&(a+="x"),n="";for(var c="abcdefghiklmnopqrstuvwxyz",l=0;l<a.length;l+=2){var s=c.indexOf(a.charAt(l))%5,h=parseInt(c.indexOf(a.charAt(l))/5),u=c.indexOf(a.charAt(l+1))%5,f=parseInt(c.indexOf(a.charAt(l+1))/5);n+=o.charAt(5*h+u),n+=i.charAt(5*f+s)}return n.toUpperCase()}(e,t,r)},decrypt:function(e,t,r){return function(e,t,r){var n=e.toLowerCase().replace(/[^a-z0-9]/g,"").replace(/[j]/g,"i"),a=t.toLowerCase().replace(/[^a-z]/g,""),o=r.toLowerCase().replace(/[^a-z]/g,"");if(n.length<1)return"please enter some plaintext";if(25!==a.length||25!==o.length)return"keysquare must be 25 characters in length";if(n.length%2===1)return"ciphertext should be even length (wrong algorithm?)";for(var i="",c="abcdefghiklmnopqrstuvwxyz",l=0;l<n.length;l+=2){var s=a.indexOf(n.charAt(l))%5,h=parseInt(a.indexOf(n.charAt(l))/5),u=o.indexOf(n.charAt(l+1))%5,f=parseInt(o.indexOf(n.charAt(l+1))/5);i+=c.charAt(5*h+u),i+=c.charAt(5*f+s)}return i.toLowerCase()}(e,t,r)},keyGenerator:function(){for(var e="abcdefghiklmnopqrstuvwxyz".split(""),t="",r=e.length,n=0;n<r;n++){var a=Math.floor(e.length*Math.random());t+=e[a],e.splice(a,1)}return t.toUpperCase()},numberOfKeys:2},{name:"Hill",description:"Invented by Lester S. Hill in 1929, the Hill cipher is a polygraphic substitution cipher based on linear algebra. Hill used matrices and matrix multiplication to mix up the plaintext. The cipher key is an inversible matrix (in this case a 2 by 2 one).",encrypt:function(e,t){return function(e,t){var r="",n=e.toLowerCase().replace(/[^a-z]/g,""),a=t.toLowerCase().replace(/[^0-9 ]/g,"").split(" ");if(n.length<1)return"please enter some plaintext";if(n.length%2===1&&(n+="x"),4!==a.length)return"key should consist of 4 integers";for(var o=0;o<4;o++)a[o]=a[o]%26;r="";for(var i=0;i<n.length;i+=2)r+=String.fromCharCode((a[0]*(n.charCodeAt(i)-97)+a[1]*(n.charCodeAt(i+1)-97))%26+97),r+=String.fromCharCode((a[2]*(n.charCodeAt(i)-97)+a[3]*(n.charCodeAt(i+1)-97))%26+97);return r}(e,t)},decrypt:function(e,t){return function(e,t){var r=e.toLowerCase().replace(/[^a-z]/g,""),n=t.replace(/[^0-9 ]/g,"").split(" ");if(r.length<1)return"please enter some ciphertext (letters only, numbers should be spelled)";if(r.length%2===1)return"ciphertext is not divisible by 2 (wrong algorithm?)";if(4!==n.length)return"key should consist of 4 integers";for(var a=0;a<4;a++)n[a]=n[a]%26;var o=n[0]*n[3]-n[1]*n[2];o=(o%26+26)%26;for(var i=0,c=0;c<26;c++)o*c%26===1&&(i=c);if(0===i)return"could not invert, try different key";var l=new Array(4);l[0]=i*n[3]%26,l[1]=-1*i*n[1]%26,l[2]=-1*i*n[2]%26,l[3]=i*n[0];for(var s=0;s<4;s++)l[s]<0&&(l[s]+=26);for(var h="",u=0;u<r.length;u+=2)h+=String.fromCharCode((l[0]*(r.charCodeAt(u)-97)+l[1]*(r.charCodeAt(u+1)-97))%26+97),h+=String.fromCharCode((l[2]*(r.charCodeAt(u)-97)+l[3]*(r.charCodeAt(u+1)-97))%26+97);return h}(e,t)},keyGenerator:function(){var e,t,r,n=0,a=!1;do{e=P(),t=P(),r=P(),a=e*(n=P())-t*r!==0}while(!a);return"".concat(e," ").concat(t," ").concat(r," ").concat(n)},numberOfKeys:1},{name:"Rail Fence",description:"A transposition cipher that follows a simple rule for mixing up the characters. Although weak on its own, it can be combined with other ciphers, the combination of which is harder to break than either on it's own.",encrypt:function(e,t){return function(e,t){var r=e.toLowerCase().replace(/[^a-z]/g,""),n="";if(r.length<1)return"please enter some plaintext";if(t>Math.floor(2*(r.length-1)))return"key is too large for the plaintext length.";if(1===t)n=r;else{var a;for(n="",a=0;a<t-1;a++)for(var o=2*(t-a-1),i=0,c=a;c<r.length;)n+=r.charAt(c),c+=0===a||i%2===0?o:2*(t-1)-o,i++;for(var l=a;l<r.length;l+=2*(t-1))n+=r.charAt(l)}return n}(e,t)},decrypt:function(e,t){return function(e,t){var r=e.toLowerCase().replace(/[^a-z]/g,"");if(r.length<1)return"please enter some ciphertext (letters only)";if(t>Math.floor(2*(r.length-1)))return"key is too large for the ciphertext length.";if(1===t)return r;var n,a=new Array(r.length),o=0;for(n=0;n<t-1;n++)for(var i=2*(t-n-1),c=0,l=n;l<r.length;)a[l]=r.charAt(o++),l+=0===n||c%2===0?i:2*(t-1)-i,c++;for(var s=n;s<r.length;s+=2*(t-1))a[s]=r.charAt(o++);return a.join("")}(e,t)},keyGenerator:function(){return Math.floor(9*Math.random())+1},numberOfKeys:1},{name:"Rot13",description:"A substitution cipher with a specific key where the letters of the alphabet are offset 13 places. A more limited version of Caesar's cipher.",encrypt:function(e){return function(e){var t=e.toLowerCase();if(t.length<1)return"please enter some plaintext";for(var r="",n=/[a-z]/,a=0;a<t.length;a++)n.test(t.charAt(a))?r+=String.fromCharCode((t.charCodeAt(a)-97+13)%26+97):r+=t.charAt(a);return r}(e)},decrypt:function(e){return function(e){var t=e.toLowerCase();if(t.length<1)return"please enter some ciphertext (letters only)";for(var r="",n=/[a-z]/,a=0;a<t.length;a++)n.test(t.charAt(a))?r+=String.fromCharCode((t.charCodeAt(a)-97+26-13)%26+97):r+=t.charAt(a);return r}(e)}}],J=function(e){var t=e.text;return a.a.createElement(v.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3},R.map((function(e){return a.a.createElement(v.a,{item:!0,key:e.name,xl:4,lg:4,md:6,sm:6,xs:12},a.a.createElement(G,Object.assign({text:t},e)))})))},U=r(117),X=r(4),Q=r(118),V=Object(X.a)({root:{width:450,"& label.Mui-focused":{color:"#264653"},"& .MuiInput-underline:after":{borderBottomColor:"#264653"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#264653"},"&:hover fieldset":{borderColor:"#E76F51"},"&.Mui-focused fieldset":{borderColor:"#E76F51"}}}})(Q.a),Y=Object(f.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},margin:{margin:e.spacing(1)}}})),Z=function(e){var t=e.text,r=e.setText,n=Y();return a.a.createElement(V,{className:n.margin,label:"Start typing",id:"custom-css-outlined-input",value:t,onChange:function(e){var t=e.target.value;r(t)}})},$=Object(f.a)({root:{height:"20vh",backgroundColor:"#F4A261",padding:0},title:{fontSize:68},subTitle:{fontSize:22}}),ee=function(){var e=$(),t=a.a.createElement(g.a,{className:e.title}," React Ciphers"),r=a.a.createElement(g.a,{className:e.subTitle},"A collection of dynamic examples");return a.a.createElement(v.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:e.root},a.a.createElement(v.a,{item:!0},t),a.a.createElement(v.a,{item:!0},r))},te=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),r=t[0],o=t[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(U.a,null),a.a.createElement(T.b,{position:"top-right",autoClose:3e3,transition:T.a,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),a.a.createElement(ee,null),a.a.createElement(h,null,a.a.createElement(v.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:3},a.a.createElement(v.a,{item:!0,xs:12},a.a.createElement(Z,{text:r,setText:o})),a.a.createElement(v.a,{item:!0,xs:12},a.a.createElement(J,{text:r})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.5d4dea32.chunk.js.map