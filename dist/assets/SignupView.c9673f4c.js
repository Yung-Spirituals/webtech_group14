import{A as p}from"./AppButton.38dba05f.js";import{_ as r,r as c,o as l,c as u,a,n as _,b as m,w as v,p as g,d as h,q as f,g as w}from"./index.ccbec50a.js";async function b(){let e=document.getElementById("username").value,t=document.getElementById("password").value,o={username:e,password:t};await fetch("https://gr14.appdev.cloudns.ph/authenticate/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),alert("User registered!")}const y={components:{AppButton:p},methods:{signUp:b}},s=e=>(g("data-v-7668263c"),e=e(),h(),e),S={id:"sign-up"},x=s(()=>a("img",{src:f,alt:"logo"},null,-1)),I=w('<h2 data-v-7668263c>SIGN UP</h2><div id="info" data-v-7668263c><label data-v-7668263c><input id="username" type="text" data-v-7668263c><span class="label-text" data-v-7668263c>Username</span></label><label data-v-7668263c><input id="password" type="password" data-v-7668263c><span class="label-text" data-v-7668263c>Password</span></label></div><input type="submit" value="Submit" id="submit" data-v-7668263c>',3),B=[I],U=s(()=>a("p",null,"Already have an account?",-1)),N=s(()=>a("p",null,"Log in",-1));function V(e,t,o,k,A,n){const d=c("router-link");return l(),u("div",S,[x,a("form",{id:"login-form",onSubmit:t[0]||(t[0]=_((...i)=>n.signUp&&n.signUp(...i),["prevent"]))},B,32),U,m(d,{to:"login"},{default:v(()=>[N]),_:1})])}var P=r(y,[["render",V],["__scopeId","data-v-7668263c"]]);export{P as default};