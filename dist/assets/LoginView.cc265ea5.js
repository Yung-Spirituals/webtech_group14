import{s as r,a as p,d as c}from"./authentication.27ca6baf.js";import{A as _}from"./AppButton.e500ace9.js";import{_ as m,r as s,o as v,c as g,a as e,n as h,b as i,w as f,p as b,d as w,q as x,g as y}from"./index.c5eae7df.js";function I(){console.log(document.getElementById("username").innerHTML),r(document.getElementById("username").value,document.getElementById("password").value),p()!==null&&this.$router.push({name:"login",query:{redirect:"/"}})}function B(){c()}const S={components:{AppButton:_},methods:{login:I,logOut:B}},a=t=>(b("data-v-99502790"),t=t(),w(),t),k={id:"login"},L=a(()=>e("img",{src:x,alt:"logo"},null,-1)),V=y('<h2 data-v-99502790>LOGIN</h2><div id="info" data-v-99502790><label data-v-99502790><input id="username" type="text" data-v-99502790><span class="label-text" data-v-99502790>Username</span></label><label data-v-99502790><input id="password" type="password" data-v-99502790><span class="label-text" data-v-99502790>Password</span></label></div><input type="submit" value="Submit" id="submit" data-v-99502790>',3),A=[V],C=a(()=>e("p",null,"Don't have an account?",-1)),E=a(()=>e("p",null,"Sign up",-1));function N(t,n,q,O,M,o){const d=s("app-button"),l=s("router-link");return v(),g("div",k,[L,e("form",{id:"login-form",onSubmit:n[0]||(n[0]=h((...u)=>o.login&&o.login(...u),["prevent"]))},A,32),i(d,{text:"Log out",onClick:o.logOut},null,8,["onClick"]),C,i(l,{to:"sign-up"},{default:f(()=>[E]),_:1})])}var G=m(S,[["render",N],["__scopeId","data-v-99502790"]]);export{G as default};
