import{r as c,u as g,j as e,a as n,S as d,m as i}from"./index.b9ae930a.js";import{C as F}from"./TextArea.ae536586.js";import{F as u,I as o}from"./index.482e832d.js";import"./index.8ddd1d39.js";import{C as p}from"./index.67b81f13.js";/* empty css              */import{u as h,B}from"./index.a8884a0f.js";var C="/assets/logo.e4de5f17.png";function N(){const[l,r]=c.exports.useState(!1),t=g(),{loginStore:m}=h();return e("div",{className:"login",children:e(F,{className:"login-container",children:n(d,{spinning:l,children:[e("img",{className:"login-logo",src:C,alt:""}),n(u,{validateTrigger:["onBlur","onChange"],initialValues:{remember:!0},onFinish:s=>{r(!0),m.SignIn({mobile:s.username,code:s.password}).then(a=>{if(a.message!=="OK")return r(!1),i.error(`\u767B\u5F55\u5931\u8D25${a.message}`,2);r(!1),i.success("\u767B\u5F55\u6210\u529F\uFF01",2),t("/")}).catch(a=>{r(!1),i.error(`\u767B\u5F55\u5931\u8D25,\u6D4B\u8BD5\u5BC6\u7801\u4E3A246810\uFF0C${a}`,2)})},onFinishFailed:s=>{},children:[e(u.Item,{name:"username",rules:[{required:!0,message:"Please input your phone number!"},{pattern:/^1[3-9]\d{9}$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7",validateTrigger:"onBlur"}],children:e(o,{size:"large",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"})}),e(u.Item,{name:"password",rules:[{required:!0,message:"Please input your identifying code!"},{len:6,message:"\u8BF7\u8F93\u51656\u4F4D\u9A8C\u8BC1\u7801",validateTrigger:"onBlur"}],children:e(o,{size:"large",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"})}),e(u.Item,{name:"remember",valuePropName:"checked",children:e(p,{className:"login-checkbox-label",children:"\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F\u300C\u7528\u6237\u534F\u8BAE\u300D\u548C\u300C\u9690\u79C1\u6761\u6B3E\u300D"})}),e(u.Item,{children:e(B,{type:"primary",htmlType:"submit",size:"large",block:!0,children:"Sign in"})})]})]})})})}export{N as default};
//# sourceMappingURL=index.312a098f.js.map
