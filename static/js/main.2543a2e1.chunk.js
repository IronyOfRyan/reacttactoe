(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{26:function(n,e,i){},27:function(n,e,i){"use strict";i.r(e);var t,r,a,c,o,d,b,l,s,p,u,h,m,x=i(13),j=i(11),f=i(6),g=i(1),y=i(2),A=i(3),O=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1440;return"".concat(n/e*100,"vw")},w=Object(A.c)(t||(t=Object(y.a)(["\n  0%   { opacity:1; }\n  50%  { opacity:0; }\n  100% { opacity:1 }\n"]))),v=Object(A.c)(r||(r=Object(y.a)(["\n  0% {\n    opacity: 1;\n    visibility: visible;\n  }\n  100% {\n    opacity: 0;\n    visibility: hidden;\n  }\n"]))),E=A.b.div(a||(a=Object(y.a)(["\n  max-width: 100%;\n  align-items: center;\n  display: flex;\n  margin-top: 3em;\n  flex-wrap: wrap;\n  flex-direction: column;\n  font-family: Fascinate, sans-serif;\n  -webkit-user-select: none; /* Safari 3.1+ */\n  -moz-user-select: none; /* Firefox 2+ */\n  -ms-user-select: none; /* IE 10+ */\n  user-select: none; /* Standard syntax */\n\n  @media (min-width: 768px) {\n  margin-top: 3em;\n    \n  }\n\n  @media (min-width: 1024px) {\n  margin-top: 1em;\n  }\n  \n"]))),T=A.b.div(c||(c=Object(y.a)(["\n  background-color: #cbb4d4;\n  border-radius: 1.2em;\n  padding: 2em;\n \n"]))),I=A.b.h1(o||(o=Object(y.a)(["\n  background: #a044ff;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  padding: .2em;\n  border: 0.5px solid #cbb4d4;\n  color: #cbb4d4;\n  font-weight: bold;\n  text-align: center;\n  font-size: 4em;\n\n  @media (min-width: 1024px) {\n    font-size: 2.3em;\n  }\n"]))),M=A.b.div(d||(d=Object(y.a)(["\n  animation: "," 5s ease-in\n    0.2s forwards;\n  background: #5F9EA0;\n  border-radius: .2em;\n  box-shadow: 0 0 0 2px #5F9EA0, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);\n  color: #cbb4d4;\n  font-weight: bold;\n  font-size: 2em;\n  line-height: 2.5em;\n  height: 2.5em;\n  margin-bottom: 1em;\n  text-align: center;\n  width: 10em;\n\n  @media (min-width: 768px) {\n    width: 12em;\n    height: 2em;\n    line-height: 2em;\n    font-size: 1.1em;\n  }\n\n  @media (min-width: 1024px) {\n    width: 10em;\n    height: 1.2em;\n    line-height: 1.2em;\n    font-size: 1em;\n  }\n"])),v),R=A.b.div(b||(b=Object(y.a)(["\n  margin-bottom: 1em;\n  display: flex;\n  justify-content: center;\n"]))),k=A.b.button(l||(l=Object(y.a)(["\n  background: #cbb4d4;\n  border: 0.5px solid #a044ff;\n  box-shadow: 0 0 0 2px #cbb4d4, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);\n  color: #a044ff;\n  font-family: Fascinate, sans-serif;\n  font-weight: bold;\n  font-size: 2em;\n  height: 2.5em;\n  line-height: 2em;\n  padding: 1px;\n  text-align: center;\n  width: 8.5em;\n  visibility: ",";\n  &:hover {\n    background: #a044ff;\n    border: 1px dashed #a044ff;\n    box-shadow: 0 0 0 2px #a044ff, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);\n    text-shadow: -1px #cbb4d4;\n    color: #cbb4d4;\n  }\n  &:focus {\n    outline: none;\n  }\n\n  @media (min-width: 1024px) {\n    font-size: 1.2em;\n    height: 1.5em;\n    line-height: 1em;\n  }\n"])),(function(n){return n.gameover?"visible":"hidden"})),B=A.b.div(s||(s=Object(y.a)(['\n  &:after {\n    clear: both;\n    content: "";\n    display: grid;\n  }\n']))),Z=A.b.button(p||(p=Object(y.a)(["\n  background: ",";\n  color: ",";\n  border: ",";\n  border-radius: 2px;\n  box-shadow: ",";\n  font-family: Fascinate, sans-serif;\n  width: ",";\n  min-height: ",";\n  margin: .6em;\n  text-align: center;\n  text-shadow: 1px 0.6px #grey;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    background: #5F9EA0;\n    border: 1px dashed #5F9EA0;\n    border-radius: 1px;\n    box-shadow: 0 0 0 4px #5F9EA0, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);\n    opacity: 1;\n  }\n\n  @media (min-width: 768px) {\n    width: ",";\n    min-height: ",";\n    margin: .6em;\n  }\n\n  @media (min-width: 1024px) {\n    width: ",";\n    min-height: ",";\n  }\n"])),(function(n){return"player"===n.player?"#5F9EA0":"AI"===n.player?"#000046":"#cbb4d4"}),(function(n){return"player"===n.player?"#cbb4d4":"AI"===n.player?"#B2FEFA":"#F00000"}),(function(n){return"player"===n.player?"1px dashed #5F9EA0":"AI"===n.player?"1px dashed #000046":"1px dashed #cbb4d4"}),(function(n){return"player"===n.player?"0 0 0 4px #5F9EA0, 0.5px 1.5px 3px 3px rgba(60, 52, 102, 0.9)":"AI"===n.player?"0 0 0 4px #000046, 4px 2px 12px 8px rgba(10, 10, 0, 0.3)":"0 0 0 4px #cbb4d4, 2px 1px 6px 4px rgba(10, 10, 0, 0.5)"}),O(300),O(300),O(250),O(250),O(120),O(120)),J=A.b.div(u||(u=Object(y.a)(["\n  animation: "," 5s infinite;\n  background: ",";\n  color: ",";\n  border: ",";\n  border-radius: 10px;\n  box-shadow: 0 0 0 2px #cbb4d4, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);\n  width: ",";\n  min-height: ",";\n  font-size: 3em;\n  height: 3.5em;\n  line-height: 3em;\n  padding: 1px;\n  position: absolute;\n  visibility: ",";\n  &:hover {\n    opacity: 0.5;\n  }\n  @media (min-width: 768px) {\n    width: ",";\n    min-height: ",";\n    font-size: 5em;\n  }\n\n  @media (min-width: 1024px) {\n    width: ",";\n    min-height: ",";\n    font-size: 2.2em;\n  }\n"])),w,(function(n){return"O"===n.player?"#cbb4d4":"X"===n.player?"#000046":"#a044ff"}),(function(n){return"O"===n.player?"#a044ff":"X"===n.player?"#cbb4d4":"black"}),(function(n){return"O"===n.player?"1px dashed #cbb4d4":"X"===n.player?"1px dashed #000046":"1px dashed #a044ff"}),O(1040),O(1250),(function(n){return n.gameover?"visible":"hidden"}),O(820),O(1e3),O(410),O(490)),D=A.b.p(h||(h=Object(y.a)(["\n  color:#cbb4d4;\n  font-weight: bold;\n  line-height: 5em;\n  text-align: center;\n"]))),F=i(0),S=function(n){var e=n.disabled,i=n.onTouchEnd,t=n.onClick,r=n.player;return Object(F.jsx)(Z,{children:!0,style:{pointerEvents:e?"none":"auto"},onClick:t,player:r,onTouchMove:i})},z=i(10),Y=function(n){for(var e=[],i=0;i<n.length;i++)n[i]||e.push(i);return e},G=function(n){for(var e=0,i=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];e<i.length;e++){var t=i[e],r=Object(f.a)(t,3),a=r[0],c=r[1],o=r[2];if(n[a]&&n[a]===n[c]&&n[a]===n[o])return n[a]}return!1},W=function(n){var e,i=Y(n),t=1e5;if(G(n))return 1;if(!i.length)return 0;var r,a=Object(z.a)(i);try{for(a.s();!(r=a.n()).done;){var c=r.value;n[c]="O";var o=N(n)||0;Array.isArray(o)&&(o=o[0]),o<t&&(e=c,t=o),n[c]=null}}catch(d){a.e(d)}finally{a.f()}return[t,e]},N=function(n){var e,i=Y(n),t=-1e5;if(G(n))return-1;if(!i.length)return 0;var r,a=Object(z.a)(i);try{for(a.s();!(r=a.n()).done;){var c=r.value;n[c]="X";var o=W(n);Array.isArray(o)&&(o=o[0]),o>t&&(e=c,t=o),n[c]=null}}catch(d){a.e(d)}finally{a.f()}return[t,e]},U=function(){var n=Object(g.useState)({squares:new Array(9).fill(null),myTurn:!0}),e=Object(f.a)(n,2),i=e[0],t=e[1],r=function(n){var e=G(i.squares),t=Object(j.a)(i.squares);return"O"===t[n]?Object(F.jsx)(S,{disabled:!0,player:"player",value:i.squares[n]}):"X"===t[n]?Object(F.jsx)(S,{disabled:!0,player:"AI",value:i.squares[n]}):Object(F.jsx)(S,{player:"",disabled:!!e||!i.myTurn,value:i.squares[n],onTouchEnd:function(){return a(n)},onClick:function(){return a(n)}})},a=function(n){var e=Object(j.a)(i.squares);e[n]="O",t((function(n){return{squares:e,myTurn:!n.myTurn}})),setTimeout((function(){var n=N(e);e[n[1]]="X",t((function(n){return{squares:e,myTurn:!n.myTurn}}))}),500)},c=function(){setTimeout((function(){t({squares:Array(9).fill(null),myTurn:!0})}),300)};return Object(F.jsxs)(E,{children:[Object(F.jsx)(I,{children:"React Tac Toe"}),Object(F.jsx)(M,{children:"You Go First"}),Object(F.jsxs)(T,{children:[function(){var n=G(i.squares);if(n){var e="X"===n?"CPU":"You";return Object(F.jsxs)(J,{player:n,gameover:!0,onTouchMove:c,onClick:c,children:[Object(F.jsxs)(D,{children:[Object(F.jsx)("span",{style:{fontSize:50,color:"#a044ff"},children:"".concat(e)})," won!"]}),Object(F.jsx)(D,{children:"Click To Replay"})]})}if(!i.squares.includes(null))return Object(F.jsxs)(J,{player:"",gameover:!0,onClick:c,children:[Object(F.jsx)(D,{children:Object(F.jsx)("span",{style:{fontSize:50},children:"Draw!"})}),Object(F.jsx)(D,{children:"Click To Replay"})]})}(),Object(F.jsx)(R,{children:G(i.squares)||!i.squares.includes(null)?Object(F.jsx)(k,{gameover:!1,children:"RESET"}):Object(F.jsx)(k,{gameover:!0,onClick:function(){return c()},onTouchMove:function(){return c()},children:"RESET"})}),Object(F.jsxs)(B,{children:[r(0),r(1),r(2)]}),Object(F.jsxs)(B,{children:[r(3),r(4),r(5)]}),Object(F.jsxs)(B,{children:[r(6),r(7),r(8)]})]})]})},X=Object(A.a)(m||(m=Object(y.a)(["\n  * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n    :root {\n      font-size: ",";\n\n      @media (min-width: 768px) {\n        font-size: ",";\n      }\n\n      @media (min-width: 1024px) {\n        font-size: ",";\n      }\n    }\n"])),O(24),O(18),O(16)),Q=function(){return Object(F.jsx)("div",{className:"container",style:{margin:5},children:Object(F.jsx)("a",{href:"https://github.com/UniversallyRy/reacttactoe",children:Object(F.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg==",style:{color:"purple"},alt:"GitHub"})})})},L=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(Q,{}),Object(F.jsx)(X,{}),Object(F.jsx)(U,{})]})};i(26);Object(x.render)(Object(F.jsx)(L,{}),document.getElementById("main"))}},[[27,1,2]]]);
//# sourceMappingURL=main.2543a2e1.chunk.js.map