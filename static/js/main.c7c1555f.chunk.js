(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(53)},29:function(e,t,a){},30:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),s=a.n(r),i=(a(29),a(30),a(31),a(11)),c=a.n(i),o=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{className:"row",expand:"lg",bg:"dark",variant:"dark"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement(c.a.Brand,{className:"",style:{fontFamily:"Nanum Brush Script",fontSize:"8vw"}},"Split n' Tip"))))},m=a(17),u=a(18),d=a(19),b=a(21),h=a(20),p=a(22),f=(a(51),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={bill:"",party:"",tip:"",showResult:!1,result:0},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(m.a)({},n,l))},a.handleReset=function(e){e.preventDefault(),a.setState({bill:"",party:"",tip:"",showResult:!1})},a.percentageEach=function(e,t,a){return(e*t/100/a).toFixed(2)},a.handleSubmit=function(e){e.preventDefault();var t=function(e,t){return e*t/100};if(""===a.state.tip){a.setState({tip:15});var n=t(a.state.bill,15);a.setState({result:(Number(a.state.bill)+Number(n))/Number(a.state.party)})}else{var l=t(a.state.bill,a.state.tip);a.setState({result:(Number(a.state.bill)+Number(l))/Number(a.state.party)})}isNaN(a.state.result)?a.setState({showResult:!1}):a.setState({showResult:!0})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:" row justify-content-md-center text-center mt-3"},l.a.createElement("form",{className:"col-sm-12"},this.state.showResult?l.a.createElement("div",{className:"row justify-content-md-center text-center mt-3 mx-auto"},l.a.createElement("div",{className:"col-sm-12 text-center mx-auto"},l.a.createElement("div",{className:"row justify-content-sm-center p-2 m-2 mx-auto"},l.a.createElement("div",{className:"col-md-3 border border-secondary rounded-lg p-2"},l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:""},"Bill Amount:"),l.a.createElement("div",{className:""},l.a.createElement("span",{className:"border-bottom border-success text-success"},"$",this.state.bill))),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:""},"Party Size:"),l.a.createElement("div",{className:""},l.a.createElement("span",{className:"border-bottom border-info text-info"},this.state.party," People"))),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:""},"Tip Amount:"),l.a.createElement("div",{className:""},l.a.createElement("span",{className:"border-bottom border-primary text-primary"},this.state.tip,"%"))),l.a.createElement("p",{className:"border-bottom border-dark mt-2"}),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:""},"(Each Person Bill)"),l.a.createElement("div",{className:""},(Number(this.state.bill)/Number(this.state.party)).toFixed(2))),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:""},"(Each Person Tip)"),l.a.createElement("div",{className:""},"+ ",this.percentageEach(this.state.bill,this.state.tip,this.state.party))),l.a.createElement("p",{className:"border-bottom border-dark mt-2"}),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:""},"(Each Person Pays)"),l.a.createElement("div",{className:""},l.a.createElement("span",{className:"bg-primary text-white rounded-pill pl-2 pr-2"}," $",this.state.result.toFixed(2)))))),l.a.createElement("button",{className:"btn btn-dark mt-3",onClick:this.handleReset},"Reset"))):null,this.state.showResult?null:l.a.createElement("label",{className:""}," Total Bill Amount ",l.a.createElement("br",null),l.a.createElement("input",{id:"box1",className:"rounded-lg text-center",type:"number",pattern:"[0-9]*",min:"0",inputMode:"numeric",name:"bill",placeholder:"$0.00",value:this.state.bill,onChange:this.handleInputChange,required:!0})),l.a.createElement("br",null),l.a.createElement("br",null),this.state.showResult?null:l.a.createElement("label",{className:""}," Party Size ",l.a.createElement("br",null),l.a.createElement("input",{id:"box2",className:"rounded-lg text-center",type:"number",pattern:"[0-9]*",min:"0",inputMode:"numeric",name:"party",placeholder:"0",value:this.state.party,onChange:this.handleInputChange,required:!0})),l.a.createElement("br",null),l.a.createElement("br",null),this.state.showResult?null:l.a.createElement("label",{className:""}," Tip Amount ",l.a.createElement("br",null),l.a.createElement("input",{id:"box3",className:"rounded-lg text-center",type:"number",pattern:"[0-9]*",min:"0",inputMode:"numeric",name:"tip",placeholder:"15%",value:this.state.tip,onChange:this.handleInputChange,required:!0})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,this.state.showResult?null:l.a.createElement("button",{className:"btn btn-info",disabled:""===this.state.bill||""===this.state.party,onClick:this.handleSubmit},"Submit")))))}}]),t}(n.Component));var E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,null),l.a.createElement(f,null))},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(l.a.createElement(E,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/tip",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/tip","/service-worker.js");v?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):N(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):N(t,e)})}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.c7c1555f.chunk.js.map