import{_,k as u,s as l,l as p,i as s,o as m,c as v,a as t,t as e,m as h}from"./index.97d2dafb.js";import{u as f}from"./product.d8fd363d.js";import{u as B}from"./cart.e72b4c28.js";import"./authentication.cb496ff9.js";const y={key:0,class:"content"},P={class:"testimonial-image"},g=["src"],k={class:"details"},x={class:"productName"},C={class:"price"},S={class:"shortInfo"},T={class:"shortInfoText"},V={class:"BuyOrFavorite"},w={class:"BuyButtonArea"},A={name:"ProductView",setup(D){const d=B(),i=u(),r=f(),{products:n}=l(r);r.getProducts();const o=p(()=>n.value.find(c=>c.id+""===i.params.id));return(c,a)=>s(o)?(m(),v("div",y,[t("div",P,[t("img",{src:s(o).image_path},null,8,g)]),t("div",k,[t("label",x,e(s(o).name),1),t("div",C,e(s(o).price)+" kr",1),t("div",S,[t("div",T,e(s(o).description),1)]),t("div",V,[t("div",w,[t("div",{class:"BuyButton",onClick:a[0]||(a[0]=I=>s(d).addProductToCart(s(o)))}," ADD TO CART")])])])])):h("",!0)}};var E=_(A,[["__scopeId","data-v-769cc9dd"]]);export{E as default};
