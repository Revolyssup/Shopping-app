(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,a){e.exports=a(91)},50:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=(a(50),a(10)),u=a(11),i=a(14),s=a(13),m=a(2),p=a(24),d=a.n(p),E=a(42),h=a(20),f=a.n(h),y=(a(69),a(70),function(e){return r.a.createElement("div",{className:"Product-wrapper"},r.a.createElement("div",{className:"Product"},r.a.createElement("div",{className:"Product-image"},r.a.createElement("img",{src:e.photo})),r.a.createElement("div",{className:"Product-name"},e.name),r.a.createElement("div",{className:"Product-details"},r.a.createElement("small",{className:"price"},"$",e.price),r.a.createElement("button",{onClick:e.addToCart,className:"button"},"Add to Cart"))))}),b=function(e,t){return console.log(e),{type:"ADD_TO_CART",payload:e,index:t}},v=a(7),C=Object(v.b)((function(e){return{cart:e.cart}}),{addToCart:b})((function(e){var t=e.products.map((function(t,a){return r.a.createElement(y,Object.assign({key:t._id},t,{addToCart:function(){return e.addToCart(t,a)}}))}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Happy shopping!!"),r.a.createElement("div",{className:"Products-container"},r.a.createElement("div",{className:"Products-wrapper"},t)))})),O=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchProducts()}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement(C,{products:this.props.products}))}}]),a}(n.Component),g=Object(v.b)((function(e){return{products:e.products}}),{fetchProducts:function(){return function(){var e=Object(E.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/products ");case 3:a=e.sent,console.log(a.data.products),t({type:"FETCH_PRODUCTS",payload:a.data.products}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}})(O),N=a(16),j=a(21),k=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"recieved"},"All previous orders recieved"),r.a.createElement("h2",{className:"back"},"You have nothing in cart."))},T=(a(75),a(85),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"you",email:"",address:"",phone:""},e.onChangeHandler=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.emptycart=function(t){f.a.post("/api/orders",Object(N.a)(Object(N.a)({},e.state),{},{orders:e.props.cart})).then((function(e){return console.log(e)})),console.log(e.state),e.props.emptyCart()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props.cart)}},{key:"render",value:function(){if(!this.props.cart.length)return r.a.createElement(k,null);var e=this.props.cart.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.price),r.a.createElement("td",null,e.quantity))}));return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",{className:"Checkout-Title"},"Your Order"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,"Price"),r.a.createElement("td",null,"quantity"))),r.a.createElement("tbody",null,e))),r.a.createElement("form",{className:"Checkout-Wrapper"},r.a.createElement("h1",{className:"Checkout-Title"},"Checkout"),r.a.createElement("input",{type:"text",className:"Checkout-Input",name:"name",placeholder:"Enter Name",onChange:this.onChangeHandler}),r.a.createElement("input",{type:"text",className:"Checkout-Input",name:"email",placeholder:"Enter Email",onChange:this.onChangeHandler}),r.a.createElement("input",{type:"text",className:"Checkout-Input",name:"address",placeholder:"Enter Address",onChange:this.onChangeHandler}),r.a.createElement("input",{type:"text",className:"Checkout-Input",name:"phone",placeholder:"Enter Contact no.",onChange:this.onChangeHandler}),r.a.createElement("button",{className:"button",onClick:this.emptycart},"Buy Now")))}}]),a}(n.Component)),_=Object(v.b)((function(e){return{cart:e.cart}}),{emptyCart:function(){return{type:"EMPTY_CART",payload:[]}}})(T),P=(a(86),a(12)),I=(a(87),function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement("image",{className:"Cart-Item-Photo",src:e.photo,alt:e.name})," "),r.a.createElement("td",null,e.name),r.a.createElement("td",null,r.a.createElement("button",{onClick:e.addItem,className:"Quantity-Button"},"+"),r.a.createElement("span",null,e.quantity),r.a.createElement("button",{onClick:e.removeItem,className:"Quantity-Button"},"-")),r.a.createElement("td",null,e.price),r.a.createElement("td",{className:"fa fa-times",onClick:e.removeWholeItem,style:{color:"red",cursor:"pointer"}}," DELETE :(")))}),A=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;if(!this.props.cart.length)return r.a.createElement(k,null);var t,a=(t=this.props.cart,t.sort((function(e,t){return e._id<t._id}))).map((function(t,a){return r.a.createElement(I,Object.assign({key:a},t,{addItem:function(){return e.props.addToCart(t,a)},removeItem:function(){return e.props.deleteFromCart(t)},removeWholeItem:function(){return e.props.deleteWholeItem(t)}}))}));return r.a.createElement("div",null,r.a.createElement("h1",{className:"My-Cart-Title"},"My Cart"),r.a.createElement("div",{className:"Cart-Products-Wrapper"},r.a.createElement("table",{className:"Cart-Table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Photo"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Price"))),r.a.createElement("tbody",null,a,r.a.createElement("tr",null,r.a.createElement("td",{style:{verticalAlign:0,paddingTop:"1rem",fontWeight:"bold"}},"Total"),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("p",{className:"Total-Price"},"$",this.props.cart.reduce((function(e,t){return e+t.price*t.quantity}),0)),r.a.createElement(P.b,{to:"/checkout",className:"Checkout-Button-Text"},r.a.createElement("div",{className:"Checkout-Button"},"Checkout"))))))))}}]),a}(n.Component),M=Object(v.b)((function(e){return{cart:e.cart}}),{addToCart:b,deleteFromCart:function(e){return{type:"REMOVE_FROM_CART",payload:e}},deleteWholeItem:function(e,t){return{type:"REMOVE_WHOLE_ITEM",payload:e}}})(A),R=function(e){return r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",component:g,exact:!0}),r.a.createElement(m.a,{path:"/cart",component:M,exact:!0}),r.a.createElement(m.a,{path:"/checkout",component:_}))},x=(a(89),Object(v.b)((function(e){return{cart:e.cart}}),null)((function(e){return r.a.createElement("nav",{className:"NavBar-Wrapper"},r.a.createElement("div",null,r.a.createElement(P.b,{to:"/"},r.a.createElement("p",{className:"shop"},"Shop"))),r.a.createElement(P.b,{to:"/cart"},r.a.createElement("div",{className:"Cart-Info"},r.a.createElement("span",{className:"Cart-Item-Counter"},e.cart.length),r.a.createElement("i",{className:"fa fa-shopping-bag"}),r.a.createElement("p",null,"Cart: $",function(e){var t=e.reduce((function(e,t){return e+t.price*t.quantity}),0);return console.log("ans",t),t}(e.cart)))))}))),w=(a(90),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(R,null))}}]),a}(n.Component)),H=a(28),W=[],q=function(e,t){console.log("adding item..");for(var a=Object(H.a)(e),n=0;n<e.length;n++)if(e[n]._id===t._id)return a[n].quantity+=1,console.log(e),a;return[].concat(Object(H.a)(e),[Object(N.a)(Object(N.a)({},t),{},{quantity:1})])},D=function(e,t){return e.filter((function(e){return e._id!==t._id||e.quantity>1&&(e.quantity-=1,!0)}))},B=function(e,t){return e.filter((function(e){return e._id!==t._id}))},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":return q(e,t.payload);case"REMOVE_FROM_CART":return D(e,t.payload);case"REMOVE_WHOLE_ITEM":return B(e,t.payload);case"EMPTY_CART":return console.log("here"),t.payload;default:return e}},S=[],V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PRODUCTS":return console.log(t.payload),t.payload;default:return e}},Y=a(15),L=Object(Y.c)({cart:F,products:V}),Q=[a(44).a],$=Object(Y.e)(L,{},Object(Y.d)(Y.a.apply(void 0,Q)));l.a.render(r.a.createElement(v.a,{store:$},r.a.createElement(P.a,null,r.a.createElement(w,null))),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.07a70a5b.chunk.js.map