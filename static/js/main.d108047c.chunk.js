(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(54)},29:function(e,t,a){},30:function(e,t,a){},51:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),s=a.n(r),c=(a(29),a(30),a(31),a(11)),m=a.n(c),i=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{className:"row",expand:"lg",bg:"dark",variant:"dark"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement(m.a.Brand,{className:""},"Split n' Tip"))))},u=a(17),o=a(18),d=a(19),b=a(21),p=a(20),E=a(22),h=(a(51),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={bill:"",party:"",tip:"",showResult:!1,result:0},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(u.a)({},n,l))},a.handleReset=function(e){e.preventDefault(),a.setState({bill:"",party:"",tip:"",showResult:!1})},a.percentageEach=function(e,t,a){return(e*t/100/a).toFixed(2)},a.handleSubmit=function(e){e.preventDefault();var t,n,l=(t=a.state.bill,n=a.state.tip,t*n/100);a.setState({result:(Number(a.state.bill)+Number(l))/Number(a.state.party)}),isNaN(a.state.result)?a.setState({showResult:!1}):a.setState({showResult:!0})},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:" row justify-content-md-center text-center mt-3"},l.a.createElement("form",{className:"col-sm-12"},this.state.showResult?l.a.createElement("div",{className:"row justify-content-md-center text-center mt-3"},l.a.createElement("div",{className:"col-sm-12 text-center"},l.a.createElement("div",{className:"row justify-content-sm-center"},l.a.createElement("div",{className:"col-md-3 border border-secondary rounded-lg p-2 mr-2 ml-3"},l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:""},"Bill Amount:"),l.a.createElement("div",{className:""},l.a.createElement("span",{className:"border-bottom border-success text-success"},"$",this.state.bill))),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:""},"Party Size:"),l.a.createElement("div",{className:""},l.a.createElement("span",{className:"border-bottom border-info text-info"},this.state.party," People"))),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:""},"Tip Amount:"),l.a.createElement("div",{className:""},l.a.createElement("span",{className:"border-bottom border-primary text-primary"},this.state.tip,"%"))),l.a.createElement("p",{className:"border-bottom border-dark mt-2"}),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:""},"(Each Person Bill)"),l.a.createElement("div",{className:""},Number(this.state.bill)/Number(this.state.party))),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:""},"(Each Person Tip)"),l.a.createElement("div",{className:""},"+ ",this.percentageEach(this.state.bill,this.state.tip,this.state.party))),l.a.createElement("p",{className:"border-bottom border-dark mt-2"}),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:""},"(Each Person Pays)"),l.a.createElement("div",{className:""},l.a.createElement("span",{className:"bg-primary text-white rounded-pill pl-2 pr-2"}," $",this.state.result.toFixed(2)))))),l.a.createElement("button",{className:"btn btn-dark mt-3",onClick:this.handleReset},"Reset"))):null,this.state.showResult?null:l.a.createElement("label",{className:""}," Total Bill Amount ",l.a.createElement("br",null),l.a.createElement("input",{id:"box1",className:"rounded-lg text-center",type:"number",pattern:"[0-9]*",inputMode:"numeric",name:"bill",placeholder:"$0.00",value:this.state.bill,onChange:this.handleInputChange,required:!0})),l.a.createElement("br",null),l.a.createElement("br",null),this.state.showResult?null:l.a.createElement("label",{className:""}," Party Size ",l.a.createElement("br",null),l.a.createElement("input",{id:"box2",className:"rounded-lg text-center",type:"number",pattern:"[0-9]*",inputMode:"numeric",name:"party",placeholder:"0",value:this.state.party,onChange:this.handleInputChange,required:!0})),l.a.createElement("br",null),l.a.createElement("br",null),this.state.showResult?null:l.a.createElement("label",{className:""}," Tip Amount ",l.a.createElement("br",null),l.a.createElement("input",{id:"box3",className:"rounded-lg text-center",type:"number",pattern:"[0-9]*",inputMode:"numeric",name:"tip",placeholder:"15%",value:this.state.tip,onChange:this.handleInputChange,required:!0})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,this.state.showResult?null:l.a.createElement("button",{className:"btn btn-info",onClick:this.handleSubmit},"Submit")))))}}]),t}(n.Component));var N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,null),l.a.createElement(h,null))};s.a.render(l.a.createElement(N,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.d108047c.chunk.js.map