(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{53:function(e,n,t){},54:function(e,n,t){"use strict";t.r(n);var o=t(2),c=t.n(o),a=t(21),r=t.n(a),u=t(22),i=t(3),s=t(0),l=function(e){var n=e.searchVal,t=e.handleSearchVal;return Object(s.jsx)("input",{value:n,onChange:t})},d=function(e){var n=e.newName,t=e.newPhone,o=e.onNewPersonSubmit,c=e.handleNameChange,a=e.handlePhoneChange;return Object(s.jsxs)("form",{onSubmit:o,children:["name: ",Object(s.jsx)("input",{value:n,onChange:c}),Object(s.jsx)("br",{}),"phone: ",Object(s.jsx)("input",{value:t,onChange:a}),Object(s.jsx)("button",{type:"submit",children:"add"})]})},f=function(e){var n=e.person,t=e.onDeletePerson;return Object(s.jsxs)("div",{children:[n.name," ",n.number,Object(s.jsx)("button",{onClick:t,children:"delete"})]})},h=function(e){var n=e.persons,t=e.searchVal,o=e.onDeletePerson,c=n.filter((function(e){if(-1!==e.name.toLocaleLowerCase().indexOf(t.toLowerCase()))return e}));return Object(s.jsx)("div",{children:c.map((function(e){return Object(s.jsx)(f,{person:e,onDeletePerson:function(){return o(e.id)}},e.name)}))})},j=function(e){var n=e.message,t=e.isStyle?{color:"red"}:{};return null===n?null:Object(s.jsx)("div",{className:"notification",style:t,children:n})},b=t(6),m=t.n(b),O="/api/persons",v=function(){return m.a.get(O).then((function(e){return e.data}))},p=function(e){return m.a.post(O,e).then((function(e){return e.data}))},g=function(e){return m.a.delete("".concat(O,"/").concat(e)).then((function(e){return e.data}))},x=function(e,n){return console.log("in update",e,n),m.a.put("".concat(O,"/").concat(e),n).then((function(e){return e.data}))},w=(t(53),function(){var e=Object(o.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],a=Object(o.useState)(""),r=Object(i.a)(a,2),f=r[0],b=r[1],m=Object(o.useState)(""),O=Object(i.a)(m,2),w=O[0],S=O[1],C=Object(o.useState)(""),P=Object(i.a)(C,2),y=P[0],N=P[1],k=Object(o.useState)(null),L=Object(i.a)(k,2),D=L[0],T=L[1],V=Object(o.useState)(!1),E=Object(i.a)(V,2),I=E[0],J=E[1];Object(o.useEffect)((function(){v().then((function(e){return c(e)}))}),[]);var B=function(){return t.filter((function(e){return e.name.toLocaleLowerCase()===f.toLocaleLowerCase()&&e}))};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(j,{message:D,isStyle:I}),Object(s.jsx)(l,{searchVal:y,handleSearchVal:function(e){console.log(e.target.value),N(e.target.value)}}),Object(s.jsx)("h2",{children:"add a new"}),Object(s.jsx)(d,{newName:f,a:!0,newPhone:w,onNewPersonSubmit:function(e){e.preventDefault();var n,o={name:f,number:w};if(0!==B().length)return n=f,window.confirm("".concat(n," is already added to phonebook, replace the old number with the new one?"))?void function(e){var n=B(),o=n[0].id,a=n[0].name;x(o,e).then((function(e){c(t.map((function(n){return n.id!==o?n:e}))),b(""),S(""),T("added ".concat(e.name)),setTimeout((function(){T(null)}),3e3)})).catch((function(e){J(!0),T("".concat(a," has already been removed from server")),c(t.filter((function(e){return e.id!==o}))),b(""),S(""),setTimeout((function(){J(!1),T(null)}),3e3)}))}(o):void 0;!function(e){p(e).then((function(e){c([].concat(Object(u.a)(t),[e])),b(""),S(""),T("added ".concat(e.name)),setTimeout((function(){T(null)}),3e3)})).catch((function(e){J(!0),T("".concat(e.response.data.error)),setTimeout((function(){J(!1),T(null)}),3e3)}))}(o)},handleNameChange:function(e){console.log(e.target.value),b(e.target.value)},handlePhoneChange:function(e){console.log(e.target.value),S(e.target.value)}}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)(h,{persons:t,onDeletePerson:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&g(e).then((function(n){c(t.filter((function(n){if(n.id!==e)return n}))),T("deleted"),setTimeout((function(){T(null)}),3e3)})).catch((function(e){T("Information of this person has already been removed from the server"),setTimeout((function(){T(null)}),3e3)}))},searchVal:y})]})});r.a.createRoot(document.getElementById("root")).render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(w,{})}))}},[[54,1,2]]]);
//# sourceMappingURL=main.e2df5b6f.chunk.js.map