import{_ as g,B as C,a as j}from"./Mv.34913284.js";import{u as m}from"./video.3500c715.js";import{_ as f}from"./CoverPlay.d639e45b.js";import{c as _,t as v,F as P,o as h,g as r,h as s,j as e,i as l,I as u,G as $,u as i,H as y,d as w,D as B}from"./vendor.9760fa8a.js";import{P as D,o as z}from"./index.373df683.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./IconPark.402beefe.js";import"./Right.083d6647.js";import"./el-image-viewer.a8b12883.js";import"./PlayOne.e72f474c.js";const S={class:"grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-5"},E=["onClick"],F={class:"truncate text-xs mt-2"},V=_({setup(o){const{personalizedPrivateContent:a}=v(m()),{getPersonalizedPrivateContent:c}=m(),d=P();return h(async()=>{await c()}),(k,x)=>(r(),s(u,null,[e(g,{title:"\u72EC\u5BB6\u653E\u9001",class:"mt-5"}),l("div",S,[(r(!0),s(u,null,$(i(a),t=>(r(),s("div",{key:t.id,onClick:n=>i(d).push({name:i(D).mvDetail,query:{id:t.id}})},[e(f,{"pic-url":t.sPicUrl,video:"",name:t.name},null,8,["pic-url","name"]),l("div",F,y(t.name),1)],8,E))),128))])],64))}}),p=w("personalized",()=>{const o=B([]);return{djProgram:o,getDjProgram:async()=>{o.value.length||(o.value=await z())}}}),q={class:"grid grid-flow-row grid-cols-3 lg:grid-cols-6 gap-5"},N=["onClick"],R={class:"truncate text-xs mt-2"},U=_({setup(o){const{djProgram:a}=v(p()),{getDjProgram:c}=p(),d=P();return h(async()=>{await c()}),(k,x)=>{const t=g;return r(),s(u,null,[e(t,{title:"\u63A8\u8350\u7535\u53F0",class:"mt-5"}),l("div",q,[(r(!0),s(u,null,$(i(a),n=>(r(),s("div",{key:n.id,onClick:A=>i(d).push({name:"video",query:{id:n.id}})},[e(f,{"pic-url":n.picUrl,name:n.name,"play-count":0},null,8,["pic-url","name"]),l("div",R,y(n.name),1)],8,N))),128))])],64)}}}),Q=_({setup(o){return(a,c)=>(r(),s("div",null,[e(C),e(V),e(U),e(j)]))}});export{Q as default};
