import{r as o,Q as A,E as q,c as S,b as m,q as G,A as He,e as oe,k as L,d as U,_ as R,h as We,y as me,z as xe,B as he,t as Ue,D as ye,i as Ve,R as B}from"./index.98cb3c06.js";import{j as qe,S as Ge,M as Qe,b as Ye,D as Je,k as ge,E as Xe,a as Ze,c as Ke}from"./index.c21424e9.js";import{R as ie,L as le}from"./LeftOutlined.c44fe9ca.js";import{m as et,c as tt,g as rt,R as se}from"./index.dc1e14a4.js";var nt=o.exports.createContext({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),D=nt;function Ce(e){var n,a=e.popupClassName,t=e.icon,r=e.title,s=e.theme,i=o.exports.useContext(D),l=i.prefixCls,c=i.inlineCollapsed,u=i.antdMenuTheme,d=qe(),f;if(!t)f=c&&!d.length&&r&&typeof r=="string"?o.exports.createElement("div",{className:"".concat(l,"-inline-collapsed-noicon")},r.charAt(0)):o.exports.createElement("span",{className:"".concat(l,"-title-content")},r);else{var v=A(r)&&r.type==="span";f=o.exports.createElement(o.exports.Fragment,null,q(t,{className:S(A(t)?(n=t.props)===null||n===void 0?void 0:n.className:"","".concat(l,"-item-icon"))}),v?r:o.exports.createElement("span",{className:"".concat(l,"-title-content")},r))}var x=o.exports.useMemo(function(){return m(m({},i),{firstLevel:!1})},[i]);return o.exports.createElement(D.Provider,{value:x},o.exports.createElement(Ge,m({},G(e,["icon"]),{title:f,popupClassName:S(l,"".concat(l,"-").concat(s||u),a)})))}var at={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},ot=at,be=function(n,a){return o.exports.createElement(He,oe(oe({},n),{},{ref:a,icon:ot}))};be.displayName="BarsOutlined";var it=o.exports.forwardRef(be),we=globalThis&&globalThis.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a},Ne=o.exports.createContext({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function H(e){var n=e.suffixCls,a=e.tagName,t=e.displayName;return function(r){var s=o.exports.forwardRef(function(i,l){var c=o.exports.useContext(L),u=c.getPrefixCls,d=i.prefixCls,f=u(n,d);return o.exports.createElement(r,m({ref:l,prefixCls:f,tagName:a},i))});return s.displayName=t,s}}var Q=o.exports.forwardRef(function(e,n){var a=e.prefixCls,t=e.className,r=e.children,s=e.tagName,i=we(e,["prefixCls","className","children","tagName"]),l=S(a,t);return o.exports.createElement(s,m(m({className:l},i),{ref:n}),r)}),lt=o.exports.forwardRef(function(e,n){var a,t=o.exports.useContext(L),r=t.direction,s=o.exports.useState([]),i=U(s,2),l=i[0],c=i[1],u=e.prefixCls,d=e.className,f=e.children,v=e.hasSider,x=e.tagName,b=we(e,["prefixCls","className","children","hasSider","tagName"]),O=S(u,(a={},R(a,"".concat(u,"-has-sider"),typeof v=="boolean"?v:l.length>0),R(a,"".concat(u,"-rtl"),r==="rtl"),a),d),_=o.exports.useMemo(function(){return{siderHook:{addSider:function(y){c(function(w){return[].concat(We(w),[y])})},removeSider:function(y){c(function(w){return w.filter(function(E){return E!==y})})}}}},[]);return o.exports.createElement(Ne.Provider,{value:_},o.exports.createElement(x,m({ref:n,className:O},b),f))}),st=H({suffixCls:"layout",tagName:"section",displayName:"Layout"})(lt),At=H({suffixCls:"layout-header",tagName:"header",displayName:"Header"})(Q),Dt=H({suffixCls:"layout-footer",tagName:"footer",displayName:"Footer"})(Q),Ht=H({suffixCls:"layout-content",tagName:"main",displayName:"Content"})(Q),Wt=st,ct=function(n){return!isNaN(parseFloat(n))&&isFinite(n)},ut=ct,dt=globalThis&&globalThis.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a},ce={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},Y=o.exports.createContext({}),ft=function(){var e=0;return function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e+=1,"".concat(n).concat(e)}}(),Te=o.exports.forwardRef(function(e,n){var a=e.prefixCls,t=e.className,r=e.trigger,s=e.children,i=e.defaultCollapsed,l=i===void 0?!1:i,c=e.theme,u=c===void 0?"dark":c,d=e.style,f=d===void 0?{}:d,v=e.collapsible,x=v===void 0?!1:v,b=e.reverseArrow,O=b===void 0?!1:b,_=e.width,T=_===void 0?200:_,y=e.collapsedWidth,w=y===void 0?80:y,E=e.zeroWidthTriggerStyle,P=e.breakpoint,g=e.onCollapse,M=e.onBreakpoint,N=dt(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),k=o.exports.useContext(Ne),X=k.siderHook,Me=o.exports.useState("collapsed"in N?N.collapsed:l),Z=U(Me,2),I=Z[0],K=Z[1],Re=o.exports.useState(!1),ee=U(Re,2),te=ee[0],Pe=ee[1];o.exports.useEffect(function(){"collapsed"in N&&K(N.collapsed)},[N.collapsed]);var re=function(p,C){"collapsed"in N||K(p),g==null||g(p,C)},ne=o.exports.useRef();ne.current=function(h){Pe(h.matches),M==null||M(h.matches),I!==h.matches&&re(h.matches,"responsive")},o.exports.useEffect(function(){function h($){return ne.current($)}var p;if(typeof window!="undefined"){var C=window,F=C.matchMedia;if(F&&P&&P in ce){p=F("(max-width: ".concat(ce[P],")"));try{p.addEventListener("change",h)}catch{p.addListener(h)}h(p)}}return function(){try{p==null||p.removeEventListener("change",h)}catch{p==null||p.removeListener(h)}}},[P]),o.exports.useEffect(function(){var h=ft("ant-sider-");return X.addSider(h),function(){return X.removeSider(h)}},[]);var ae=function(){re(!I,"clickTrigger")},Ie=o.exports.useContext(L),$e=Ie.getPrefixCls,je=function(){var p,C=$e("layout-sider",a),F=G(N,["collapsed"]),$=I?w:T,j=ut($)?"".concat($,"px"):String($),W=parseFloat(String(w||0))===0?o.exports.createElement("span",{onClick:ae,className:S("".concat(C,"-zero-width-trigger"),"".concat(C,"-zero-width-trigger-").concat(O?"right":"left")),style:E},r||o.exports.createElement(it,null)):null,Be={expanded:O?o.exports.createElement(ie,null):o.exports.createElement(le,null),collapsed:O?o.exports.createElement(le,null):o.exports.createElement(ie,null)},Le=I?"collapsed":"expanded",ze=Be[Le],Fe=r!==null?W||o.exports.createElement("div",{className:"".concat(C,"-trigger"),onClick:ae,style:{width:j}},r||ze):null,Ae=m(m({},f),{flex:"0 0 ".concat(j),maxWidth:j,minWidth:j,width:j}),De=S(C,"".concat(C,"-").concat(u),(p={},R(p,"".concat(C,"-collapsed"),!!I),R(p,"".concat(C,"-has-trigger"),x&&r!==null&&!W),R(p,"".concat(C,"-below"),!!te),R(p,"".concat(C,"-zero-width"),parseFloat(j)===0),p),t);return o.exports.createElement("aside",m({className:De},F,{style:Ae,ref:n}),o.exports.createElement("div",{className:"".concat(C,"-children")},s),x||te&&W?Fe:null)},ke=o.exports.useMemo(function(){return{siderCollapsed:I}},[I]);return o.exports.createElement(Y.Provider,{value:ke},je())});Te.displayName="Sider";var Ut=Te,pt=globalThis&&globalThis.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a},J=function(e){me(a,e);var n=xe(a);function a(){var t;return he(this,a),t=n.apply(this,arguments),t.renderItem=function(r){var s,i=r.siderCollapsed,l,c=t.context,u=c.prefixCls,d=c.firstLevel,f=c.inlineCollapsed,v=c.direction,x=c.disableMenuItemTitleTooltip,b=t.props,O=b.className,_=b.children,T=t.props,y=T.title,w=T.icon,E=T.danger,P=pt(T,["title","icon","danger"]),g=y;typeof y=="undefined"?g=d?_:"":y===!1&&(g="");var M={title:g};!i&&!f&&(M.title=null,M.visible=!1);var N=Ue(_).length,k=o.exports.createElement(Qe,m({},P,{className:S((s={},R(s,"".concat(u,"-item-danger"),E),R(s,"".concat(u,"-item-only-child"),(w?N+1:N)===1),s),O),title:typeof y=="string"?y:void 0}),q(w,{className:S(A(w)?(l=w.props)===null||l===void 0?void 0:l.className:"","".concat(u,"-item-icon"))}),t.renderItemChildren(f));return x||(k=o.exports.createElement(Ye,m({},M,{placement:v==="rtl"?"left":"right",overlayClassName:"".concat(u,"-inline-collapsed-tooltip")}),k)),k},t}return ye(a,[{key:"renderItemChildren",value:function(r){var s=this.context,i=s.prefixCls,l=s.firstLevel,c=this.props,u=c.icon,d=c.children,f=o.exports.createElement("span",{className:"".concat(i,"-title-content")},d);return(!u||A(d)&&d.type==="span")&&d&&r&&l&&typeof d=="string"?o.exports.createElement("div",{className:"".concat(i,"-inline-collapsed-noicon")},d.charAt(0)):f}},{key:"render",value:function(){return o.exports.createElement(Y.Consumer,null,this.renderItem)}}]),a}(o.exports.Component);J.contextType=D;var vt=globalThis&&globalThis.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a},mt=function(n){var a=n.prefixCls,t=n.className,r=n.dashed,s=vt(n,["prefixCls","className","dashed"]),i=o.exports.useContext(L),l=i.getPrefixCls,c=l("menu",a),u=S(R({},"".concat(c,"-item-divider-dashed"),!!r),t);return o.exports.createElement(Je,m({className:u},s))},Se=mt,xt=globalThis&&globalThis.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};function V(e){return(e||[]).map(function(n,a){if(n&&Ve(n)==="object"){var t=n,r=t.label,s=t.children,i=t.key,l=t.type,c=xt(t,["label","children","key","type"]),u=i!=null?i:"tmp-".concat(a);return s||l==="group"?l==="group"?o.exports.createElement(ge,m({key:u},c,{title:r}),V(s)):o.exports.createElement(Ce,m({key:u},c,{title:r}),V(s)):l==="divider"?o.exports.createElement(Se,m({key:u},c)):o.exports.createElement(J,m({key:u},c),r)}return null}).filter(function(n){return n})}function ht(e){return o.exports.useMemo(function(){return e&&V(e)},[e])}var yt=globalThis&&globalThis.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a},gt=o.exports.forwardRef(function(e,n){var a=o.exports.useContext(L),t=a.getPrefixCls,r=a.getPopupContainer,s=a.direction,i=t(),l=e.prefixCls,c=e.className,u=e.theme,d=u===void 0?"light":u,f=e.expandIcon,v=e._internalDisableMenuItemTitleTooltip,x=e.inlineCollapsed,b=e.siderCollapsed,O=e.items,_=e.children,T=yt(e,["prefixCls","className","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children"]),y=G(T,["collapsedWidth"]),w=ht(O)||_,E=o.exports.useMemo(function(){return b!==void 0?b:x},[x,b]),P={horizontal:{motionName:"".concat(i,"-slide-up")},inline:Ke,other:{motionName:"".concat(i,"-zoom-big")}},g=t("menu",l),M=S("".concat(g,"-").concat(d),c),N=o.exports.useMemo(function(){return{prefixCls:g,inlineCollapsed:E||!1,antdMenuTheme:d,direction:s,firstLevel:!0,disableMenuItemTitleTooltip:v}},[g,E,d,s,v]);return o.exports.createElement(D.Provider,{value:N},o.exports.createElement(Xe,m({getPopupContainer:r,overflowedIndicator:o.exports.createElement(Ze,null),overflowedIndicatorPopupClassName:"".concat(g,"-").concat(d)},y,{inlineCollapsed:E,className:M,prefixCls:g,direction:s,defaultMotions:P,expandIcon:typeof f=="function"?f:q(f,{className:"".concat(g,"-submenu-expand-icon")}),ref:n}),w))}),z=function(e){me(a,e);var n=xe(a);function a(){var t;return he(this,a),t=n.apply(this,arguments),t.focus=function(r){var s;(s=t.menu)===null||s===void 0||s.focus(r)},t}return ye(a,[{key:"render",value:function(){var r=this;return o.exports.createElement(Y.Consumer,null,function(s){return o.exports.createElement(gt,m({ref:function(l){r.menu=l}},r.props,s))})}}]),a}(o.exports.Component);z.Divider=Se;z.Item=J;z.SubMenu=Ce;z.ItemGroup=ge;var Vt=z;if(!o.exports.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!et)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");const Ct=react-dom.unstable_batchedUpdates;function bt(e){e()}function wt(e){e||(e=bt),tt({reactionScheduler:e})}function Nt(e){return rt(e)}var ue=typeof FinalizationRegistry=="undefined"?void 0:FinalizationRegistry;function Oe(e){var n={reaction:e,mounted:!1,changedBeforeMount:!1,cleanAt:Date.now()+Tt};return n}var Tt=1e4,St=1e4;function Ot(e){var n=new Map,a=1,t=new e(function(s){var i=n.get(s);i&&(i.reaction.dispose(),n.delete(s))});return{addReactionToTrack:function(r,s,i){var l=a++;return t.register(i,l,r),r.current=Oe(s),r.current.finalizationRegistryCleanupToken=l,n.set(l,r.current),r.current},recordReactionAsCommitted:function(r){t.unregister(r),r.current&&r.current.finalizationRegistryCleanupToken&&n.delete(r.current.finalizationRegistryCleanupToken)},forceCleanupTimerToRunNowForTests:function(){},resetCleanupScheduleForTests:function(){}}}var _t=globalThis&&globalThis.__values||function(e){var n=typeof Symbol=="function"&&Symbol.iterator,a=n&&e[n],t=0;if(a)return a.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")};function Et(){var e=new Set,n;function a(){n&&(clearTimeout(n),l())}function t(){var c,u;if(e.size>0){try{for(var d=_t(e),f=d.next();!f.done;f=d.next()){var v=f.value,x=v.current;x&&(x.reaction.dispose(),v.current=null)}}catch(b){c={error:b}}finally{try{f&&!f.done&&(u=d.return)&&u.call(d)}finally{if(c)throw c.error}}e.clear()}n&&(clearTimeout(n),n=void 0)}function r(){n===void 0&&(n=setTimeout(l,St))}function s(c){e.add(c),r()}function i(c){e.delete(c)}function l(){n=void 0;var c=Date.now();e.forEach(function(u){var d=u.current;d&&c>=d.cleanAt&&(d.reaction.dispose(),u.current=null,e.delete(u))}),e.size>0&&r()}return{addReactionToTrack:function(c,u,d){return c.current=Oe(u),s(c),c.current},recordReactionAsCommitted:i,forceCleanupTimerToRunNowForTests:a,resetCleanupScheduleForTests:t}}var _e=ue?Ot(ue):Et(),Mt=_e.addReactionToTrack,Rt=_e.recordReactionAsCommitted,de=globalThis&&globalThis.__read||function(e,n){var a=typeof Symbol=="function"&&e[Symbol.iterator];if(!a)return e;var t=a.call(e),r,s=[],i;try{for(;(n===void 0||n-- >0)&&!(r=t.next()).done;)s.push(r.value)}catch(l){i={error:l}}finally{try{r&&!r.done&&(a=t.return)&&a.call(t)}finally{if(i)throw i.error}}return s};function fe(e){return"observer".concat(e)}var Pt=function(){function e(){}return e}();function It(){return new Pt}function $t(e,n){n===void 0&&(n="observed");var a=de(B.useState(It),1),t=a[0],r=de(B.useState(),2),s=r[1],i=function(){return s([])},l=B.useRef(null);if(!l.current)var c=new se(fe(n),function(){u.mounted?i():u.changedBeforeMount=!0}),u=Mt(l,c,t);var d=l.current.reaction;B.useDebugValue(d,Nt),B.useEffect(function(){return Rt(l),l.current?(l.current.mounted=!0,l.current.changedBeforeMount&&(l.current.changedBeforeMount=!1,i())):(l.current={reaction:new se(fe(n),function(){i()}),mounted:!0,changedBeforeMount:!1,cleanAt:1/0},i()),function(){l.current.reaction.dispose(),l.current=null}},[]);var f,v;if(d.track(function(){try{f=e()}catch(x){v=x}}),v)throw v;return f}var Ee=typeof Symbol=="function"&&Symbol.for,pe=Ee?Symbol.for("react.forward_ref"):typeof o.exports.forwardRef=="function"&&o.exports.forwardRef(function(e){return null}).$$typeof,ve=Ee?Symbol.for("react.memo"):typeof o.exports.memo=="function"&&o.exports.memo(function(e){return null}).$$typeof;function qt(e,n){var a;if(ve&&e.$$typeof===ve)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");var t=(a=n==null?void 0:n.forwardRef)!==null&&a!==void 0?a:!1,r=e,s=e.displayName||e.name;if(pe&&e.$$typeof===pe&&(t=!0,r=e.render,typeof r!="function"))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var i=function(l,c){return $t(function(){return r(l,c)},s)};return s!==""&&(i.displayName=s),e.contextTypes&&(i.contextTypes=e.contextTypes),t&&(i=o.exports.forwardRef(i)),i=o.exports.memo(i),kt(e,i),i}var jt={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};function kt(e,n){Object.keys(e).forEach(function(a){jt[a]||Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(e,a))})}globalThis&&globalThis.__read;wt(Ct);export{Ht as C,Dt as F,At as H,Wt as I,Vt as M,Ut as S,qt as o};
//# sourceMappingURL=index.e43e7021.js.map
