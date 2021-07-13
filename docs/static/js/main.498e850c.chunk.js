(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);n(20);var r=n(1),a=n.n(r),c=n(9),i=n.n(c),s=(n(24),n(15)),u=n(4),o=(n(25),n(18)),j=n(7),l=(n(29),n(30),n(2)),d=function(e){var t=e.setCurrentImage,n=e.imagesLength,a=Object(r.useState)(0),c=Object(u.a)(a,2),i=c[0],s=c[1],o=Object(r.useState)(!1),j=Object(u.a)(o,2),d=j[0],h=j[1],b=Object(r.useState)(!0),m=Object(u.a)(b,2),f=m[0],O=m[1],x=Object(r.useState)(40),v=Object(u.a)(x,2),g=v[0],k=v[1];return Object(r.useEffect)((function(){var e=window.setInterval((function(){n&&(d&&n>i?s((function(e){return e+1})):n===i&&f&&s((function(){return 0})))}),g);return function(){return window.clearInterval(e)}})),Object(r.useEffect)((function(){return t(i)}),[i,t]),Object(l.jsxs)("div",{className:"canvas-control",children:[Object(l.jsxs)("div",{className:"current-image",children:["Image:",Object(l.jsx)("input",{type:"number",value:i,onInput:function(e){var t=Number.parseInt(e.target.value);t>=0&&t<=n-1&&s(t)}})]}),Object(l.jsxs)("div",{className:"current-speed",children:["Delay:",Object(l.jsx)("input",{type:"number",value:g,onInput:function(e){var t=Number.parseInt(e.target.value);t>=1&&k(t)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){h(!1),s((function(e){return 0!==e?e-1:e}))},children:"Previous"}),Object(l.jsx)("button",{onClick:function(){h(!1),s((function(e){return e!==n+1?e+1:e}))},children:"Next"}),Object(l.jsx)("button",{onClick:function(){return h(!0)},children:"Play"}),Object(l.jsx)("button",{onClick:function(){return h(!1)},children:"Pause"}),Object(l.jsx)("button",{onClick:function(){return O((function(e){return!e}))},children:"Toggle Repeat"})]})]})},h=function(e){var t=e.images,n=(e.markers,e.markerOperations),a=Object(r.useState)({width:0,height:0}),c=Object(u.a)(a,2),i=c[0],s=c[1],o=Object(r.useRef)(null),h=Object(r.useState)(0),b=Object(u.a)(h,2),m=b[0],f=b[1],O=t[m];if(Object(r.useEffect)((function(){var e=o.current,t=e.clientWidth,n=e.clientHeight;s({width:t,height:n});var r=function(){var e=o.current,t=e.clientWidth,n=e.clientHeight;s({width:t,height:n})};return window.addEventListener("resize",r),function(){return window.removeEventListener("resize",r)}}),[]),!O)return Object(l.jsxs)("div",{className:"canvas",children:[Object(l.jsx)("div",{ref:o,className:"canvas-container"}),Object(l.jsx)("div",{children:Object(l.jsx)(d,{setCurrentImage:f,imagesLength:t.length,markerOperations:n})})]});var x=i.width/O.width,v=i.height/O.height,g=x<v?x:v,k=O.width*g,p=(i.width-k)/2,w=O.height*g,y=(i.height-w)/2;return Object(l.jsxs)("div",{className:"canvas",children:[Object(l.jsx)("div",{ref:o,className:"canvas-container",children:Object(l.jsx)(j.e,{className:"canvas",width:i.width,height:i.height,children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.b,{x:0+p,y:0+y,width:k,height:w,image:O}),function(e){var r=n.getMarkers(O.name);return Object.keys(r).map((function(r){for(var a=[],c=m-e;c<=m;c++){var i=t[c],s=n.getMarkers(i&&i.name)[r];s&&(a.push(s.x*g+p),a.push(s.y*g+y))}for(var u=[],o=m;o<m+e+1;o++){var d=t[o],h=n.getMarkers(d&&d.name)[r];h&&(u.push(h.x*g+p),u.push(h.y*g+y))}return[Object(l.jsx)(j.d,{points:a,stroke:"blue",strokeWidth:4},"linePast_".concat(m,"_").concat(r)),Object(l.jsx)(j.d,{points:u,stroke:"green",strokeWidth:4},"lineFuture_".concat(m,"_").concat(r))]}))}(10),function(){var e=n.getMarkers(O.name);return Object.keys(e).map((function(e){var t=n.getMarker(O.name,e),r=t.x,a=t.y;return Object(l.jsx)(j.a,{x:r*g+p,y:a*g+y,radius:10*g,fill:"red",stroke:"black",draggable:!0,tension:.5,onDragEnd:function(t){return n.setMarker(O.name,e,t.target.x()/g-p/g,t.target.y()/g-y/g)}},"marker_".concat(m,"_").concat(e))}))}()]})})}),Object(l.jsx)("div",{children:Object(l.jsx)(d,{setCurrentImage:f,imagesLength:t.length,markerOperations:n})})]})},b=(n(32),n(11)),m=n.n(b),f=n(17),O=(n(34),function(e){var t=e.handleNewImages,n=e.handleNewMarkers,r=e.markers,a=function(e){return new Promise((function(t,n){var r=new FileReader;r.onload=function(){t(r.result)},r.onerror=n,r.readAsDataURL(e)}))},c=function(e){return new Promise((function(t,n){var r=new FileReader;r.onload=function(){t(r.result)},r.onerror=n,r.readAsText(e)}))},i=function(){var e=Object(f.a)(m.a.mark((function e(n){var r,c,i,s,u,o,j;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=[],c=[],i=0;i<n.length;i++)r.push(a(n[i])),c.push(n[i].name);return e.next=5,Promise.all(r);case 5:for(s=e.sent,r=[],u=[],o=function(){var e=new Image;u.push(e),r.push(new Promise((function(t,n){e.onload=function(){return t()}}))),e.src=s[j]},j=0;j<s.length;j++)o();return e.next=12,Promise.all(r);case 12:u.forEach((function(e,t){u[t].name=c[t]})),u.sort(),t(u);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(f.a)(m.a.mark((function e(t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t[0]);case 2:r=e.sent,n(JSON.parse(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Files"}),Object(l.jsxs)("div",{className:"load-files",children:[Object(l.jsx)("label",{children:"Load Images"}),Object(l.jsx)("input",{type:"file",multiple:!0,accept:"image/png, image/jpeg",onInput:function(e){return i(e.target.files)}}),Object(l.jsx)("label",{children:"Load Marker"}),Object(l.jsx)("input",{type:"file",accept:"json",onInput:function(e){return s(e.target.files)}}),Object(l.jsx)("button",{onClick:function(){return function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}("markers.json",JSON.stringify(r))},children:"Download Markers as File"})]})]})}),x=(n(35),n(36),n(37),function(e){var t=e.marker,n=e.markerId,r=e.image,a=e.markerOperations;return Object(l.jsxs)("div",{className:"marker-entries",children:[Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"fa-remove",onClick:function(){a.removeMarker(r.name,n)},children:"X"})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"id: "}),Object(l.jsx)("input",{type:"text",value:n,onChange:function(e){a.setMarker(r.name,n,t.x,t.y,e.target.value)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"x: "}),Object(l.jsx)("input",{type:"text",value:t.x,onChange:function(e){a.setMarker(r.name,n,e.target.value,t.y)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"y: "}),Object(l.jsx)("input",{type:"text",value:t.y,onChange:function(e){a.setMarker(r.name,n,t.x,e.target.value)}})]})]})}),v=function(e){var t=e.image,n=e.markers,a=e.index,c=e.markerOperations,i=Object(r.useState)(!1),s=Object(u.a)(i,2),o=s[0],j=s[1];return Object(l.jsxs)("div",{className:"file-entry",children:[function(){var e="["+a+"] IMG: "+t.name;return Object(l.jsxs)("div",{className:"file-entry__bar",children:[Object(l.jsx)("p",{children:e}),Object(l.jsx)("button",{onClick:function(){return j((function(e){return!e}))},children:o?"Hide":"Show"}),Object(l.jsx)("button",{onClick:function(){return c.addMarker(t.name,Math.floor(100*Math.random().toString()),0,0)},children:"Add"})]})}(),o?n?Object(l.jsx)("div",{className:"file-entry__details",children:Object.keys(n).map((function(e){var r=n[e];return Object(l.jsx)(x,{markerId:e,marker:r,markerOperations:c,image:t},"MarkerEntry_image_".concat(t,"_marker_").concat(e))}))}):Object(l.jsx)("div",{children:"No Markers"}):Object(l.jsx)(l.Fragment,{})]})},g=function(e){var t=e.images,n=e.markers,r=e.markerOperations;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Images"}),Object(l.jsx)("div",{className:"display-files",children:t.map((function(e,t){return Object(l.jsx)(v,{index:t,image:e,markers:n[e.name],markerOperations:r},"FileEntry_image_".concat(e))}))})]})},k=function(e){var t=e.handleNewImages,n=e.handleNewMarkers,r=e.images,a=e.markers,c=e.markerOperations;return Object(l.jsxs)("div",{className:"editor",children:[Object(l.jsx)("div",{className:"editor-load",children:Object(l.jsx)(O,{handleNewImages:t,handleNewMarkers:n,markers:a})}),Object(l.jsx)("div",{className:"editor-display",children:Object(l.jsx)(g,{images:r,markers:a,markerOperations:c})})]})};var p=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)({}),i=Object(u.a)(c,2),j=i[0],d=i[1],b=function(e,t){return j[e][t]},m=function(e,t,n,r,a){var c=Object(s.a)({},j);if(a)a&&(delete c[e][t],c[e][a]={x:n,y:r});else{var i=c[e][t];n&&(i.x=n),r&&(i.y=r)}d(c)},f=function(e){return j[e]?j[e]:[]},O=function(e,t){var n=Object(s.a)({},j);delete n[e][t],d(n)},x=function(e,t,n,r){var a=Object(s.a)({},j);a[e][t]={x:n,y:r},d(a)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{bg:"dark",variant:"dark",id:"app-navigation",children:Object(l.jsx)(o.a.Brand,{children:"Marker Visualization"})}),Object(l.jsxs)("div",{id:"app-container",children:[Object(l.jsx)(h,{images:n,markers:j,markerOperations:{setMarker:m,getMarker:b,getMarkers:f,removeMarker:O,addMarker:x}}),Object(l.jsx)(k,{handleNewImages:function(e){return a(e)},handleNewMarkers:function(e){return d(e)},markerOperations:{setMarker:m,getMarker:b,getMarkers:f,removeMarker:O,addMarker:x},images:n,markers:j})]})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),w()}},[[41,1,2]]]);
//# sourceMappingURL=main.498e850c.chunk.js.map