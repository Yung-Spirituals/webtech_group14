import{A as f}from"./AppButton.38dba05f.js";import{A as y,a as b}from"./animations.d380ac3c.js";import{_ as c,o as d,c as m,a as e,t as l,r as n,b as t,w as k,p as w,d as T}from"./index.ccbec50a.js";const x={props:{quote:{required:!0,type:String},name:{required:!0,type:String},title:{required:!0,type:String},imageURL:{required:!0,type:String}}},S={class:"testimonial-card"},A={class:"testimonial-image"},C=["src"];function q(o,p,a,u,_,h){return d(),m("div",S,[e("div",A,[e("img",{src:a.imageURL,alt:""},null,8,C)]),e("div",null,[e("blockquote",null,l(a.quote),1),e("p",null,l(a.name),1),e("p",null,l(a.title),1)])])}var I=c(x,[["render",q],["__scopeId","data-v-d694a9f8"]]),B="/assets/hero-image.6be8a19e.jpg",U="/assets/nike.7ccad202.png",$="/assets/bergans.cdf8ec56.png",O="/assets/devold.39d3eba5.png",W="/assets/mammut.30cee1d4.png",E="/assets/north.4a2918c0.png",R="/assets/salomon.b02da45c.png";const L={components:{AppButton:f,AboutUsCard:y,TestimonialCard:I},methods:{}};b();const s=o=>(w("data-v-5f53e3b4"),o=o(),T(),o),N={class:"hero-section",role:"complementary","aria-labelledby":"hero-section"},V={id:"hero-image-content",class:"init-animation"},j=s(()=>e("h1",null,"SIZE DOESN'T MATTER",-1)),G=s(()=>e("img",{src:B,alt:"",id:"hero-image"},null,-1)),H={id:"introduction",role:"complementary","aria-label":"small introduction about us"},P={id:"introduction-container",class:"reveal scroll"},X=s(()=>e("h1",{id:"introduction-title"}," GET TO KNOW US ",-1)),D=s(()=>e("h2",{class:"reveal"},"What our customers say",-1)),F={id:"testimonials",class:"reveal scroll",role:"complementary","aria-labelledby":"testimonials"},M=s(()=>e("section",{id:"our-partners",class:"reveal",role:"complementary","aria-labelledby":"partnerships"},[e("div",{id:"partner-info"},[e("h2",null,"We Work With the Best Partners"),e("p",null,"We are passionate as a company to promote hiking. That is why we work with the best and most comfortable clothing brands to make hiking a fun experience.")]),e("div",{id:"partner-logos"},[e("img",{src:U,alt:"nike logo"}),e("img",{src:$,alt:"bergans logo"}),e("img",{src:O,alt:"devold logo"}),e("img",{src:W,alt:"mammut logo"}),e("img",{src:E,alt:"north face logo"}),e("img",{src:R,alt:"salomon logo"})])],-1));function K(o,p,a,u,_,h){const g=n("AppButton"),v=n("router-link"),i=n("AboutUsCard"),r=n("TestimonialCard");return d(),m("main",null,[e("section",N,[e("div",V,[j,t(v,{to:"/products"},{default:k(()=>[t(g,{text:"TO SHOP","aria-labelledby":"take me to shop"})]),_:1})]),G]),e("section",H,[e("div",P,[X,t(i,{id:"team",text:"Team",textTwo:"Our team consists of professional climbers as well as weekend hikers.",link:"/about-us",icon:"groups"}),t(i,{id:"products",text:"Products",textTwo:"All our employees are hiking enthusiasts and we have tested all our products.",link:"/products",icon:"verified"}),t(i,{id:"partners",text:"Partners",textTwo:"Only premium equipment from brands such as Bergans, North Face, Devold and Mammut.",link:"#our-partners",icon:"handshake"}),t(i,{id:"health",text:"Health",textTwo:"The goal of our products is to promote a healthier lifestyle",link:"/about-us#health-benefits",icon:"favorite"})])]),D,e("section",F,[t(r,{id:"testimonial-hiker",imageURL:"https://gr14.appdev.cloudns.ph/images/anton.jpg",quote:"Hiking is a good way to use weekends together with your family. XXS is our go-to place for the latest hiking gear.",name:"Anton Berg-Hansen",title:"Avid hiker"}),t(r,{id:"testimonial-ceo",imageURL:"https://gr14.appdev.cloudns.ph/images/chuck.jpg",quote:"We are a small IT company, full of geeks. I had difficulty getting the geeks out of their chairs. XXS suggested the latest water bottles as a Christmas gift for all employees. I was skeptical at first, but now I have difficulty getting them back indoors.",name:"Chuck Venstre",title:"CEO of IT company"}),t(r,{id:"testimonial-dog",imageURL:"https://gr14.appdev.cloudns.ph/images/goodest-boy.jpg",quote:"Got a matching sweater for my human and myself. We are out in the mountains every Sunday since.",name:"Golden retriever",title:"#1 Goodest boy"})]),M])}var Q=c(L,[["render",K],["__scopeId","data-v-5f53e3b4"]]);export{Q as default};
