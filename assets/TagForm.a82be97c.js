import{bD as k,bW as F,bX as v,bE as t,bO as m,bz as p,bs as x}from"./vendor.619c3c28.js";import{B as h}from"./Icon.583548dc.js";import{a as i,F as B}from"./Form.90810ae0.js";import{h as d}from"./index.898e9b4c.js";import{v as E,h as T}from"./validate.f13e3d9d.js";const V=(s,c)=>{var n;throw((n=s.response)==null?void 0:n.status)===422&&c(s.response.data),s},j="_tips_1a66x_1",q="_actions_1a66x_6",D="_removeTagsAndItems_1a66x_11",O="_button_1a66x_15";var g={tips:j,actions:q,removeTagsAndItems:D,button:O};const N=k({props:{id:Number},setup:(s,c)=>{var l;const n=F(),b=v();if(!n.query.kind)return t("div",null,[m("\u53C2\u6570\u9519\u8BEF")]);const e=p({id:void 0,name:"",sign:"",kind:(l=n.query.kind)==null?void 0:l.toString()}),a=p({}),f=async o=>{o.preventDefault();const r=[{key:"name",type:"required",message:"\u5FC5\u586B"},{key:"name",type:"pattern",regex:/^.{1,4}$/,message:"\u53EA\u80FD\u586B 1 \u5230 4 \u4E2A\u5B57\u7B26"},{key:"sign",type:"required",message:"\u5FC5\u586B"},{key:"kind",type:"required",message:"\u5FC5\u586B"}];Object.assign(a,{name:[],sign:[]}),Object.assign(a,E(e,r)),T(a)||(await(e.id?d.patch(`/tags/${e.id}`,e,{_autoLoading:!0,_mock:"tagEdit"}):d.post("/tags",e,{_autoLoading:!0,_mock:"tagCreate"})).catch(_=>V(_,y=>Object.assign(a,y.errors))),b.back())};return x(async()=>{if(!s.id)return;const o=await d.get(`/tags/${s.id}`,{},{_mock:"tagShow"});Object.assign(e,o.data.resource)}),()=>t(B,{onSubmit:f},{default:()=>{var o,r;return[t(i,{label:"\u6807\u7B7E\u540D(\u6700\u591A4\u4E2A\u5B57\u7B26)",type:"text",modelValue:e.name,"onUpdate:modelValue":u=>e.name=u,error:(o=a.name)==null?void 0:o[0]},null),t(i,{label:"\u7B26\u53F7 "+e.sign,type:"emojiSelect",modelValue:e.sign,"onUpdate:modelValue":u=>e.sign=u,error:(r=a.sign)==null?void 0:r[0]},null),t(i,null,{default:()=>[t("p",{class:g.tips},[m("\u8BB0\u8D26\u65F6\u957F\u6309\u6807\u7B7E\u5373\u53EF\u8FDB\u884C\u7F16\u8F91")])]}),t(i,null,{default:()=>[t(h,{type:"submit",class:[g.button]},{default:()=>[m("\u786E\u5B9A")]})]})]}})}});export{N as T,g as s};