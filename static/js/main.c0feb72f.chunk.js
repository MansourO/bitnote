(this.webpackJsonpbitnote=this.webpackJsonpbitnote||[]).push([[0],{232:function(e,t,n){e.exports=n(481)},237:function(e,t,n){},481:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(48),i=n.n(o),c=(n(237),n(20)),l=n(21),s=n(22),u=n(23),m=n(24),d=n(29),h=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"title"},"BitNote"))},f=n(27),v=n(487),b=n(488),E=n(60),p=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onFieldChange=function(e,t){n.setState(Object(f.a)({},t,e.target.value))},n.onNoteUpdate=function(){var e={title:n.state.title,note:n.state.note};n.db.ref("notes/"+n.state.id).set(e)},n.db=d.database(),n.state={id:n.props.id,title:n.props.title,note:n.props.note},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{trigger:r.a.createElement(b.a,null,"Edit"),basic:!0,size:"small"},r.a.createElement("form",{class:"ui form"},r.a.createElement("div",{class:"field"},r.a.createElement("input",{type:"text",value:this.state.title,onChange:function(t){return e.onFieldChange(t,"title")}})),r.a.createElement("div",{class:"field"},r.a.createElement("textarea",{value:this.state.note,onChange:function(t){return e.onFieldChange(t,"note")},rows:"3"}),r.a.createElement("div",{class:"field"}))),r.a.createElement(v.a.Actions,null,r.a.createElement(b.a,{color:"green",inverted:!0,onClick:function(t){return e.onNoteUpdate()}},r.a.createElement(E.a,{name:"checkmark"}),"Update")))}}]),t}(a.Component),g=n(222),j=n.n(g),k=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,{trigger:r.a.createElement(b.a,null,"MarkDown"),basic:!0,size:"large"},r.a.createElement("section",null,r.a.createElement("h3",null,"Note Markdown"),r.a.createElement(j.a,{source:this.props.note})))}}]),t}(a.Component),O=n(223),N=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onRemoveNote=function(e){n.db.ref("notes").child(e).remove();var t=n.state.notes.filter((function(t){return t.id!=e}));n.setState({notes:t})},n.onSearchChange=function(e){var t=e.target.value,a=n.props.notes.filter((function(e){return e.title.includes(t)||e.note.includes(t)}));n.setState({notes:a,search:t})},n.onKeyPressed=function(e){if("Enter"===e.key&&0==n.state.notes.length){var t=[],a={id:0,title:e.target.value,note:""};t.push(a),n.db.ref("notes").push(a),n.setState({notes:t})}},n.db=d.database(),n.state={notes:n.props.notes,search:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("section",{className:"searchform"},r.a.createElement("div",{className:"ui big icon input"},r.a.createElement("input",{type:"text",value:this.state.search,onChange:function(t){return e.onSearchChange(t,"search")},onKeyPress:this.onKeyPressed,placeholder:"Search Notes..."}))),r.a.createElement("section",{className:"notes"},this.state.notes.map((function(t){return r.a.createElement("div",{className:"note",key:t.id},r.a.createElement("div",{className:"note-title"},r.a.createElement("h3",null,t.title),r.a.createElement("div",{className:"remove",onClick:function(){return e.onRemoveNote(t.id)}},"x")),r.a.createElement("div",{className:"note-content"},r.a.createElement(O.a,{lines:1},t.note)),r.a.createElement("div",{className:"note-title"},r.a.createElement(p,{id:t.id,title:t.title,note:t.note}),r.a.createElement(k,{note:t.note})))}))))}}]),t}(a.Component),C=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onFieldChange=function(t,n){e.setState(Object(f.a)({},n,t.target.value))},e.onNoteCreate=function(){""===e.state.title&&""===e.state.note||e.db.ref("notes").push({title:e.state.title,note:e.state.note})},e.db=d.database(),e.state={title:"",note:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{trigger:r.a.createElement("button",{className:"huge ui icon button addNoteBtn"},r.a.createElement("i",{className:"sticky note outline icon"})),basic:!0,size:"large"},r.a.createElement("section",null,r.a.createElement("h3",null,"Add New Note"),r.a.createElement("form",{class:"ui form"},r.a.createElement("div",{class:"field"},r.a.createElement("input",{type:"text",value:this.state.title,onChange:function(t){return e.onFieldChange(t,"title")},placeholder:"Enter Title"})),r.a.createElement("div",{class:"field"},r.a.createElement("textarea",{value:this.state.note,onChange:function(t){return e.onFieldChange(t,"note")},placeholder:"Enter Note",rows:"3"}),r.a.createElement("div",{class:"field"}))),r.a.createElement(v.a.Actions,null,r.a.createElement(b.a,{color:"green",inverted:!0,onClick:function(t){return e.onNoteCreate()}},r.a.createElement(E.a,{name:"checkmark"})," Save"))))}}]),t}(a.Component),y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={notes:[]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.db=d.database(),this.listenForChange()}},{key:"listenForChange",value:function(){var e=this;this.db.ref("notes").on("child_added",(function(t){var n={id:t.key,title:t.val().title,note:t.val().note},a=e.state.notes;a.push(n),e.setState({notes:a})})),this.db.ref("notes").on("child_removed",(function(t){var n=e.state.notes;n=n.filter((function(e){return e.id!==t.key})),e.setState({notes:n})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement("main",null,r.a.createElement("div",null,r.a.createElement(N,{notes:this.state.notes})),r.a.createElement("div",{align:"right"},r.a.createElement(C,null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(480);d.initializeApp({apiKey:"AIzaSyAUxSQQyvQo4MejPf-ZMFkrtKscgYt70MM",authDomain:"bitnote-49190.firebaseapp.com",databaseURL:"https://bitnote-49190.firebaseio.com",projectId:"bitnote-49190",storageBucket:"bitnote-49190.appspot.com",messagingSenderId:"176955867904",appId:"1:176955867904:web:36e519145d5dcc29eb69e5",measurementId:"G-FH3Y2YH0LZ"}),d.analytics(),i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[232,1,2]]]);
//# sourceMappingURL=main.c0feb72f.chunk.js.map