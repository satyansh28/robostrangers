(this.webpackJsonpmytest=this.webpackJsonpmytest||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(4),c=n.n(a),i=n(5),r=n(6),o=n(9),l=n(7),h=(n(3),n(0));var u=function(e){return Object(h.jsx)("div",{className:"pa2",children:Object(h.jsx)("input",{onChange:e.anyinput,type:"search",placeholder:"Find people",className:"pa3 bs b--green"})})},j=n(8);n(15);var b=function(e){return Object(h.jsxs)("div",{className:"tc bg-light-yellow dib ma2 br3 pa2 grow ",children:[Object(h.jsx)("img",{alt:"avtar",src:"https://robohash.org/"+e.id}),Object(h.jsxs)("div",{className:"texts",children:[Object(h.jsx)("p",{className:"f3",children:e.name}),Object(h.jsx)("p",{className:"f4",children:e.email})]})]})};var d=function(e){var t,n=[],s=Object(j.a)(e.robolist);try{for(s.s();!(t=s.n()).done;){var a=t.value;n.push(Object(h.jsx)(b,{name:a.name,id:a.id,email:a.email},a.id))}}catch(c){s.e(c)}finally{s.f()}return Object(h.jsx)("div",{children:n})},f=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).oninput=function(t){e.setState({searchfeild:t.target.value})},e.state={listofrobs:[],searchfeild:""},e.flag=0,e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({listofrobs:t})}))}},{key:"render",value:function(){var e=this,t=this.state.listofrobs.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfeild.toLocaleLowerCase())}));return 0===this.state.listofrobs.length?Object(h.jsx)("h1",{className:"tc",children:"Loading..."}):Object(h.jsxs)("div",{className:"customcss",children:[Object(h.jsx)("h1",{className:"thehead",children:"ROBOSTRANGER"}),Object(h.jsx)("hr",{}),Object(h.jsx)(u,{className:"pa3",anyinput:this.oninput}),Object(h.jsx)(d,{robolist:t})]})}}]),n}(s.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};c.a.render(Object(h.jsx)(f,{}),document.getElementById("root")),m()},3:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.20894171.chunk.js.map